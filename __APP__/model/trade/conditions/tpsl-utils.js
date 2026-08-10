require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../utils/market.js"),
  r = require("../../../common/vendor.js");
require("../../../service/broker.js"), require("./TPSLCondition.js");
var t = require("../../../config/broker/11100/index.js");
function _(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
    _ = Math.pow(10, t);
  return (Math.ceil(r.__CJS__export_mul__(e, _)) / _).toFixed(t);
}
function o(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
    _ = Math.pow(10, t);
  return (Math.floor(r.__CJS__export_mul__(e, _)) / _).toFixed(t);
}
(exports.AMOUNT_EXCEEDS_TIPS = "委托超出当前可卖数量，触发时可能委托失败"),
  (exports.PROFIT_NOT_COVER_FEE = "委托数量过少可能导致交易盈利无法覆盖手续费"),
  (exports.absoluteTypeGetPercentVal = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
    return +t > +e
      ? [
          "up",
          _(r.__CJS__export_mul__(r.__CJS__export_div__(+t - +e, +e), 100), n),
        ]
      : [
          "down",
          o(r.__CJS__export_mul__(r.__CJS__export_div__(+e - +t, +e), 100), n),
        ];
  }),
  (exports.checkSupportType = function (r) {
    var _ = r.stockCls,
      o = r.isST,
      n = [
        e.MARKET_CLASS.A,
        e.MARKET_CLASS.S,
        e.MARKET_CLASS.NG,
        e.MARKET_CLASS.G,
        e.MARKET_CLASS.C,
        e.MARKET_CLASS.F,
        e.MARKET_CLASS.B,
      ],
      i = t.brokerConfig.trade.condUnsupportType || [],
      u = o && i.includes("ST");
    return !n.includes(_) || i.includes(_) || u
      ? [
          !1,
          {
            retcode: "NOT_SUPPORT_STOCK",
            retmsg: "该标的不支持设置止盈止损条件单",
          },
        ]
      : [!0];
  }),
  (exports.isNumeric = function (e) {
    if ("number" == typeof e) return !0;
    if ("string" != typeof e) return !1;
    var r = e.trim();
    return "" !== r && !isNaN(Number(r));
  }),
  (exports.percentTypeGetAbsoluteVal = function (e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return "".concat(
      "zy" === n
        ? _(r.__CJS__export_mul__(+e, 1 + +t / 100), i)
        : o(r.__CJS__export_mul__(+e, 1 - +t / 100), i)
    );
  }),
  (exports.shouldTipsAmount = function (e, r) {
    return !(!r || !e) && +e.quantity > +r;
  }),
  (exports.shouldTipsFee = function (e) {
    var t = (function (e) {
      return e.quantity &&
        0 != +e.quantity &&
        e.zyCondPrice &&
        "" !== e.zyCondPrice
        ? r.__CJS__export_mul__(e.quantity, +e.zyCondPrice - +e.basePrice)
        : 0;
    })(e);
    return 0 !== t && t <= 10;
  });
