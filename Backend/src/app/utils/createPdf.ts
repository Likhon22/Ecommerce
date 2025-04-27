import PDFDocument from 'pdfkit';

const createPdf = async (reportText: string) => {
  const doc = new PDFDocument({ margin: 50 });
  const buffers: Uint8Array[] = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});

  const lines = reportText.split('\n');

  for (const line of lines) {
    if (line.includes('EASYWEAR ECOMMERCE AI REPORT')) {
      doc
        .fillColor('blue')
        .fontSize(18)
        .text(line.replace('🛒', ''), { align: 'center' })
        .moveDown();
    } else if (line.includes('Overall Performance')) {
      doc
        .fillColor('orange')
        .fontSize(16)
        .text(line.replace('📊', ''), { underline: true })
        .moveDown();
    } else if (line.includes('Key Insights')) {
      doc
        .fillColor('green')
        .fontSize(16)
        .text(line.replace('✨', ''), { underline: true })
        .moveDown();
    } else if (line.includes('Recommendations')) {
      doc
        .fillColor('blue')
        .fontSize(16)
        .text(line.replace('💡', ''), { underline: true })
        .moveDown();
    } else if (line.includes('Urgent Alerts')) {
      doc
        .fillColor('red')
        .fontSize(16)
        .text(line.replace('🚨', ''), { underline: false })
        .moveDown();
    } else if (line.includes('Stock Health')) {
      doc
        .fillColor('purple')
        .fontSize(16)
        .text(line.replace('📦', ''), { underline: true })
        .moveDown();
    } else {
      doc.fillColor('black').fontSize(12).text(line).moveDown();
    }
  }
  doc.end();

  return new Promise(resolve => {
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
  });
};

export default createPdf;
