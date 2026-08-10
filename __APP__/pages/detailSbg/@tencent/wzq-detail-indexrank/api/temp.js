require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js");
require("../../stock-crypto-modules-config/dist/index.js");
var n = !1;
try {
  n = !0;
} catch (e) {}
!n && window && window.$broker && window.$broker.id,
  (exports.SOURCEENUM = {
    DEFAULT: "wzq",
    MP: "zxg_xcx",
    DAFENG: "df",
    GUOSEN: "oem_guosen",
    ZHONGXINJIANTOU: "oem_jiantou",
    ZHONGJINCAIFU: "oem_zhongjin",
    ZHONGXIN: "oem_zhongxin",
    GUANGFA: "oem_guangfa",
  }),
  (exports.getMarketPYName = function (e) {
    return {
      0: "sz",
      1: "sh",
      2: "hk",
      3: "us",
      p: "pt",
      bj: "bj",
      nq: "nq",
      zhai: "zhai",
      fu: "fu",
    }[e];
  }),
  (exports.getPlateListData = function (n) {
    var r =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    n.openid ||
      "mp" === e.StockBridge.ENV ||
      (window.Raven && window.Raven.captureMessage("板块成分股openid缺失")),
      n.skey ||
        "mp" === e.StockBridge.ENV ||
        (window.Raven && window.Raven.captureMessage("板块成分股skey缺失"));
    var i = "https://bisheng.tenpay.com/fcgi-bin/xg_plate_stocks.fcgi";
    return ["mpweapp", "stock"].includes("mpweapp")
      ? null == r
        ? void 0
        : r.request(i, "POST", n)
      : ((i = "".concat(i, "?app=mini_h5")),
        e.StockBridge.request(i, "POST", n));
  }),
  (exports.isHKTradeTime = function (e) {
    return (e >= "0930" && e <= "1200") || (e >= "1300" && e <= "1600");
  }),
  (exports.isHSTradeTime = function (e) {
    return (e >= "0930" && e <= "1130") || (e >= "1300" && e <= "1500");
  }),
  (exports.isUSTradeTime = function (e) {
    return (e >= "2130" && e <= "2359") || (e >= "0000" && e <= "0400");
  });
