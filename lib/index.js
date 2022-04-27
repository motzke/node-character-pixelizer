const pixels = {};

pixels.allChars="ABCDEFGHIJKLMNOPQRSTUVWXY#Zabcdefghijklmnopqrstuvwxyz0123456789:.?!#+-*_/|\\";
pixels.sizes=["5x7", "5x5"]

pixels["5x7"] = require("./pixels_5x7");
pixels["5x5"] = require("./pixels_5x5");


module.exports = pixels;
