require("../../../app.js");
var e = require("../../common/useVisibleControl.js"),
  r = require("../../../common/vendor.js");
require("./TPSLCondition.js"),
  require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js");
var i = require("../../../config/enum/condition.js"),
  o = require("./utils.js"),
  n = require("./tpslFormatter.js");
exports.useTPSLConfirm = function (u) {
  var l = u.tpslCondition,
    s = u.stockInfo,
    t = e.useVisibleControl(),
    a = t.visible,
    c = t.show,
    d = t.hide;
  return {
    tpslConfirmData: r.computed(function () {
      var e,
        r,
        u =
          l.zyPullbackFlag && l.zyPullbackValue
            ? {
                zyPullbackFlag: "1",
                zyPullbackType: l.zyPullbackType,
                zyPullbackValue: l.zyPullbackValue,
              }
            : void 0;
      return {
        name: l.name,
        type_desc: i.CondTags.TPSL,
        market: l.market,
        scode: l.code,
        stock_cls:
          null == (r = null == (e = s.value.quote) ? void 0 : e.secu_info)
            ? void 0
            : r.secu_cls,
        base_price: l.basePrice,
        order_cond: n.triggerCondFormatter(l.zyCondPrice, l.zsCondPrice, u),
        quantity: l.quantity,
        order_price_type: l.orderPriceType,
        invalid_time: o.calcExpireTime(l.validDayEnum),
      };
    }),
    tpslConfirmVisible: a,
    showTPSLConfirm: c,
    hideTPSLConfirm: d,
  };
};
