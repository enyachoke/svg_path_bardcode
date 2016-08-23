var bardcode = require("bardcode");
var convertToPath = require("./svg-shape-to-path").convertToPath;
var PDFDocument = require('pdfkit');
var fs = require('fs');
var barcodeString = bardcode.drawBarcode('svg', 'Hello', {});
var svgPath = convertToPath(barcodeString);
var doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
doc.path(svgPath.path)
  .fill("#000000");
doc.end();
