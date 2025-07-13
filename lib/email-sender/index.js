const PDFDocument = require('pdfkit');

const handleCreateTemplate = async () => {
  const pdfBuffer = await new Promise((resolve) => {
    const doc = new PDFDocument();

    doc.text('hello world', 100, 50);
    doc.end();

    //Finalize document and convert to buffer array
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      let pdfData = new Uint8Array(Buffer.concat(buffers));
      resolve(pdfData);
    });
  });

  return pdfBuffer;
};

module.exports = {
  handleCreateTemplate,
};
