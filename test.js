var bardcode = require("bardcode");
var convertToPath = require("./svg-shape-to-path").convertToPath;
var barcodeString = bardcode.drawBarcode('svg', 'Hello', {});
var svgPath = convertToPath(barcodeString);
console.log(svgPath.path);
