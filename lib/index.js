const pixels = {};

pixels.allChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:.?!";

/* pixels in 5x7 */

pixels["5x7"] = require("./pixels_5x7");
pixels["5x5"] = require("./pixels_5x5");


module.exports = pixels;
