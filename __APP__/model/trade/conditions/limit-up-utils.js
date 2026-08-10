require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../utils/market.js");
require("../../../service/broker.js");
var r = require("../../../config/broker/11100/index.js");
exports.checkSupportType = function (S, i) {
  var s = [
      e.MARKET_CLASS.A,
      e.MARKET_CLASS.S,
      e.MARKET_CLASS.NG,
      e.MARKET_CLASS.G,
      e.MARKET_CLASS.C,
      e.MARKET_CLASS.F,
      e.MARKET_CLASS.B,
    ],
    u = r.brokerConfig.trade.condUnsupportType || [],
    A = i && u.includes("ST");
  return !s.includes(S) || u.includes(S) || A
    ? [
        !1,
        {
          retcode: "NOT_SUPPORT_STOCK",
          retmsg: "该标的不支持设置涨停买入条件单",
        },
      ]
    : [!0];
};
