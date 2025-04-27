/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { mockSalesData } from '../../../data/mockData';
import config from '../../config';
import ApiError from '../../error/ApiError';
import createPdf from '../../utils/createPdf';
import sendMail from '../../utils/sendMail';
import aiAgentServices from './aiAgent.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

interface GenerateReportOptions {
  period: 'weekly' | 'monthly';
}

const generateAndSendReportLogic = async ({
  period = 'weekly',
}: GenerateReportOptions) => {
  try {
    const sales = mockSalesData;
    const prompt = `You are a professional ecommerce AI business assistant.

Here is the sales data:
${JSON.stringify(sales)}

TASK:
- Summarize overall business performance (positive/negative/neutral)
- Mention key insights
- Give 2-3 recommendations
- Highlight urgent alerts if total sales dropped >10%
- Mention stock health (low stock products)


✅ Format everything into a PROFESSIONAL readable business report like this:

🛒 EASYWEAR ECOMMERCE AI REPORT (WEEKLY/MONTHLY)

📊 Overall Performance:
- Summary: (your generated summary)
- Trend: (positive/negative/neutral)
- Percentage Change: (xx%)
- Total Sales: (total sales amount)
- Total Orders: (total orders count)
- Highest Selling Product: (product name)
- Highest Selling Category: (category name)

✨ Key Insights:
1. ...
2. ...

💡 Recommendations:
1. ...
2. ...

🚨 Urgent Alerts:
- ...

📦 Stock Health:
- Low stock products: (list)





IMPORTANT: 
- Write the report in friendly but professional business tone.
- Do NOT send any extra text or JSON, only send the full final readable report.`;
    const aiResponse = await aiAgentServices.askGemini(prompt);
    const reportText = aiResponse ?? 'No data available';
    const pdfReport = await createPdf(reportText);

    await sendMail({
      to: config.nodemailer.admin_email as string,
      subject: `EASYWEAR ECOMMERCE AI REPORT (${period.toUpperCase()})`,
      text: reportText,
      attachments: pdfReport as Buffer,
    });
    return reportText;
  } catch (err) {
    throw new ApiError(
      400,
      'Failed to generate and send report. Please try again later.',
    );
  }
};

const handleApiReportRequest = catchAsync(
  async (req: Request, res: Response) => {
    const options: GenerateReportOptions = req.body;

    await generateAndSendReportLogic(options);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Report generated and sent successfully',
      data: null,
    });
  },
);

const aiAgentController = {
  generateAndSendReportLogic,
  handleApiReportRequest,
};

export default aiAgentController;
