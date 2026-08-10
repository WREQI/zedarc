require("../../../app.js");
var e = require("../../common/useVisibleControl.js"),
  r = require("../../../common/vendor.js");
require("./GridCondition.js"),
  require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js");
var i = require("../../../config/enum/condition.js"),
  o = require("./utils.js"),
  n = require("./gridFormatter.js");
exports.useGridConfirm = function (s) {
  var t = s.gridCondition,
    u = s.stockInfo,
    c = e.useVisibleControl(),
    d = c.visible,
    a = c.show,
    m = c.hide;
  return {
    gridConfirmData: r.computed(function () {
      var e, r;
      return {
        name: t.name,
        type_desc: i.CondTags.GRID,
        market: t.market,
        scode: t.code,
        stock_cls:
          null == (r = null == (e = u.value.quote) ? void 0 : e.secu_info)
            ? void 0
            : r.secu_cls,
        base_price: t.basePrice,
        order_cond: n.triggerCondFormatter(t.upStep, t.downStep, t.gridType),
        quantity: t.quantity,
        buy_price_type: t.buyPriceType,
        sell_price_type: t.sellPriceType,
        invalid_time: o.calcExpireTime(t.validDayEnum),
      };
    }),
    gridConfirmVisible: d,
    showGridConfirm: a,
    hideGridConfirm: m,
  };
};
