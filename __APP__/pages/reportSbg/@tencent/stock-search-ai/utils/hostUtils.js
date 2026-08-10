require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js");
exports.getHost = function () {
  var n;
  return e.StockBridge.ENV === e.EnvTypeEnum.MP ||
    "mpweapp" === e.ShellTypeEnum.SHY
    ? "wzq.tenpay.com"
    : "undefined" != typeof window &&
      window.location &&
      (null == (n = window.location.host) ? void 0 : n.includes("tenpay.com"))
    ? window.location.host
    : "wzq.tenpay.com";
};
