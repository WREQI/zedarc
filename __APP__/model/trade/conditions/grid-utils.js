require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../utils/market.js"),
  r = require("../../../config/enum/condition.js"),
  t = require("../../../common/vendor.js");
require("../../../service/broker.js"), require("./GridCondition.js");
var i = require("../../../config/broker/11100/index.js");
function u(e) {
  return "" !== e && 0 == +(e || 0);
}
(exports.PROFIT_NOT_COVER_FEE =
  "每笔委托数量过少可能导致交易盈利无法覆盖手续费"),
  (exports.changeZeroToEmptyStr = function (e) {
    return u(e) ? "" : e;
  }),
  (exports.checkIsEmpty = function (e) {
    return !e || 0 == +e;
  }),
  (exports.checkSupportType = function (r) {
    var t = r.stockCls;
    if (r.isST)
      return [
        !1,
        { retcode: "NOT_SUPPORT_ST", retmsg: "该标的不支持设置网格条件单" },
      ];
    var u = [
        e.MARKET_CLASS.A,
        e.MARKET_CLASS.S,
        e.MARKET_CLASS.NG,
        e.MARKET_CLASS.G,
        e.MARKET_CLASS.C,
        e.MARKET_CLASS.F,
        e.MARKET_CLASS.B,
      ],
      n = i.brokerConfig.trade.condUnsupportType || [];
    return u.includes(t) && !n.includes(t)
      ? [!0]
      : [
          !1,
          {
            retcode: "NOT_SUPPORT_STOCK",
            retmsg: "该标的不支持设置网格条件单",
          },
        ];
  }),
  (exports.isZeroNotStr = u),
  (exports.shouldTipsFee = function (e) {
    var i = (function (e) {
      return e.upStep && 0 != +e.upStep && e.quantity && 0 != +e.quantity
        ? e.gridType === r.GridType.Absolute
          ? t.__CJS__export_mul__(e.quantity, +e.upStep)
          : e.gridType === r.GridType.Percent &&
            e.basePrice &&
            0 != +e.basePrice
          ? t.__CJS__export_mul__(
              t.__CJS__export_mul__(
                +e.quantity,
                t.__CJS__export_div__(+e.upStep, 100, 4)
              ),
              +e.basePrice
            )
          : 0
        : 0;
    })(e);
    return 0 !== i && i <= 10;
  });
