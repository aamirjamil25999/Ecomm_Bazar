const fs = require("fs");
const PDFDocument = require("pdfkit");
const fetch = require("node-fetch");

const handleCreateInvoice = async (invoice, path) => {
  const pdfBuffer = await new Promise((resolve) => {
    let doc = new PDFDocument({ size: "A4", margin: 50 });

    // doc.text('hello world', 100, 50);
    // doc.end();
    generateHeader(doc, invoice);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    // generateFooter(doc);

    // console.log('doc', doc);

    // doc.pipe(fs.createWriteStream(`invoices/${invoice.invoice}.pdf`));

    doc.end();

    //Finalize document and convert to buffer array
    let buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      let pdfData = new Uint8Array(Buffer.concat(buffers));
      resolve(pdfData);
    });
  });

  // fs.writeFile(pdfBuffer, 'test', function (err) {
  //   if (err) {
  //     return console.log('err when saving file', err);
  //   }
  //   console.log('The file was saved!');
  // });

  return pdfBuffer;
};

const getImage = async (doc, invoice) => {
  const res = await fetch(invoice.company_info.logo, { encoding: null });
  const imageBuffer = await res.buffer();
  const img = new Buffer.from(imageBuffer, "base64");
  doc.image(img, (doc.page.width - 525) / 2, doc.y, {
    align: "center",
    width: 40,
  });
  // console.log('logo >>>>>', img);
  return img;
};

const generateHeader = (doc, invoice) => {
  // const logo = getImage(doc, invoice);
  // console.log('logooooo>>>', logo);

  doc
    .fontSize(17)
    .font("Helvetica-Bold")
    .text("Invoice", 50, 50)
    .fontSize(10)
    .font("Helvetica")
    .text("Status :", 50, 70)
    .text(invoice.status, 100, 70)
    .fontSize(10)
    .font("Helvetica")
    .text("VAT Number :", 50, 85)
    .text(invoice?.company_info?.vat_number, 120, 85)

    .image("logo.png", doc.page.width - 90, doc.y - 75, {
      width: 40,
    })
    // .fillColor('#4C4F54')
    .fontSize(12)
    .font("Helvetica-Bold")
    .text(invoice?.company_info?.company, 200, 50, { align: "right" })
    .fontSize(10)
    .font("Helvetica")
    .text(invoice?.company_info?.address, 200, 65, { align: "right" })
    .text(invoice?.company_info?.phone, 200, 80, { align: "right" })
    .text(invoice?.company_info?.email, 200, 95, { align: "right" })
    .text(invoice?.company_info?.website, 200, 108, { align: "right" })
    .moveDown();
};

function generateCustomerInformation(doc, invoice) {
  // doc.fillColor('#444444').fontSize(20).text('Invoice', 50, 130);

  const customerInformationTop = 140;
  doc.font("Helvetica-Bold");

  generateTableRow(doc, customerInformationTop, "Date", "Invoice", "Method");
  const customerInformationTopDetail = customerInformationTop + 20;
  doc.font("Helvetica");
  doc.fontSize(10);
  generateTableRow(
    doc,
    customerInformationTopDetail,
    invoice?.date,
    "#" + invoice.invoice,
    invoice?.paymentMethod
  );

  doc

    .font("Helvetica-Bold")
    .text("Invoice To", 200, 140, { align: "right" })
    .font("Helvetica")
    .fontSize(10)
    .text(invoice.user_info.name, 200, 155, { align: "right" })
    .text(invoice.user_info.email, 200, 170, { align: "right" })
    .text(invoice?.user_info?.phone, 200, 200, { align: "right" })
    .text(invoice?.user_info?.address, 200, 185, { align: "right" });

  // doc
  //   .fontSize(10)
  //   .text('Invoice Number:', 50, customerInformationTop)
  //   .font('Helvetica-Bold')
  //   .text(invoice.invoice, 150, customerInformationTop)
  //   .font('Helvetica')
  //   .text('Invoice Date:', 50, customerInformationTop + 15)
  //   .text(invoice.date, 150, customerInformationTop + 15)
  //   .text('Payment Method:', 50, customerInformationTop + 30)
  //   .font('Helvetica-Bold')
  //   .text(invoice.paymentMethod, 150, customerInformationTop + 30)

  //   .font('Helvetica-Bold')
  //   .text(invoice.user_info.name, 300, customerInformationTop)
  //   .font('Helvetica')
  //   .text(invoice.user_info.email, 300, customerInformationTop + 15)

  // .moveDown();
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 250;

  doc.font("Helvetica-Bold");

  generateTableRow(
    doc,
    invoiceTableTop,
    "Name",
    "",
    "Quantity",
    "Item Price",
    "Total Price"
  );
  generateHr(doc, invoiceTableTop + 18);
  doc.font("Helvetica");

  for (i = 0; i < invoice.cart.length; i++) {
    const item = invoice.cart[i];
    const position = invoiceTableTop + (i + 1) * 30;
    total = item.price * item.quantity;
    generateTableRow(
      doc,
      position,
      item.title.substring(0, 25),
      "",
      item.quantity,
      formatCurrency(invoice.company_info.currency, item.price),
      formatCurrency(invoice.company_info.currency, total)
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 31;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    subtotalPosition,
    "SubTotal",
    "VAT",
    "Shipping Cost",
    "Discount",
    "Total"
  );
  const paymentOptionPosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paymentOptionPosition,

    formatCurrency(invoice.company_info.currency, invoice.subTotal),
    formatCurrency(invoice.company_info.currency, invoice.vat),
    formatCurrency(invoice.company_info.currency, invoice.shippingCost),
    formatCurrency(invoice.company_info.currency, invoice.discount),
    formatCurrency(invoice.company_info.currency, invoice.total)
  );

  // const vatPosition = subtotalPosition + 20;
  // generateTableRow(
  //   doc,
  //   vatPosition,
  //   '',
  //   '',
  //   'VAT',
  //   '',
  //   formatCurrency(invoice.company_info.currency, invoice.vat)
  // );
  // const shippingPosition = vatPosition + 20;
  // generateTableRow(
  //   doc,
  //   shippingPosition,
  //   '',
  //   '',
  //   'Shipping Cost',
  //   '',
  //   formatCurrency(invoice.company_info.currency, invoice.shippingCost)
  // );
  // const discountPosition = shippingPosition + 20;
  // generateTableRow(
  //   doc,
  //   discountPosition,
  //   '',
  //   '',
  //   'Discount',
  //   '',
  //   formatCurrency(invoice.company_info.currency, invoice.discount)
  // );

  // doc
  //   .strokeColor('#aaaaaa')
  //   .lineWidth(1)
  //   .moveTo(250, discountPosition + 20)
  //   .lineTo(550, discountPosition + 20)
  //   .stroke();

  // const TotalPosition = discountPosition + 25;
  // doc.font('Helvetica-Bold');
  // generateTableRow(
  //   doc,
  //   TotalPosition,
  //   '',
  //   '',
  //   'Total',
  //   '',
  //   formatCurrency(invoice.company_info.currency, invoice.total)
  // );
  // doc.font('Helvetica');
}

function generateFooter(doc) {
  doc
    .fontSize(15)
    .text("Thanks for your order", 50, 750, { align: "center", width: 500 });
}

function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: "right" })
    .text(quantity, 370, y, { width: 90, align: "right" })
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

function formatCurrency(curr, cents) {
  // console.log('formatCurrency', curr + '' + cents);
  return curr + "" + Number(cents).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  handleCreateInvoice,
};
