require("../../app.js");
var e = require("../../config/HalfScreenConst.js");
exports.getStrategyHeight = function (r) {
  return 3 === r
    ? e.HalfScreenThreeCondHeight
    : 4 === r
    ? e.HalfScreenFourCondHeight
    : e.HalfScreenCondtionHeight;
};
