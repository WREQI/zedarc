require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js");
exports.getTheme = function () {
  var r = getApp().skin || e.StockBridge.getStorage("user/skin");
  return ["black", "dark"].includes(r) ? "black" : "white";
};
