/* eslint-disable @typescript-eslint/no-unused-vars */
import cron from 'node-cron';
import aiAgentController from '../modules/aiAgent/aiAgent.controller';
import ApiError from '../error/ApiError';
const initializeScheduledJobs = () => {
  // weekly job to run every Monday at 09:00
  cron.schedule(
    '40 16 * * 0',
    async () => {
      try {
        await aiAgentController.generateAndSendReportLogic({
          period: 'weekly',
        });
      } catch (error) {
        throw new ApiError(400, 'Failed to generate weekly report');
      }
    },
    {
      scheduled: true,
      timezone: 'Asia/Dhaka',
    },
  );
  // monthly job to run on the first day of every month at 09:00
  cron.schedule(
    '0 9 1 * *',
    async () => {
      try {
        await aiAgentController.generateAndSendReportLogic({
          period: 'monthly',
        });
      } catch (error) {
        throw new ApiError(400, 'Failed to generate monthly report');
      }
    },
    {
      scheduled: true,
      timezone: 'Asia/Dhaka',
    },
  );
  console.log('Scheduled jobs initialized!');
};

export default initializeScheduledJobs;
