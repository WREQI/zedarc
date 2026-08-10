require("../../../app.js");
var e = require("../../common/useVisibleControl.js"),
  i = require("../../../common/vendor.js");
require("./OpeningSellCondition.js"),
  require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js");
var r = require("../../../config/enum/condition.js"),
  n = require("./utils.js");
exports.useOpeningSellConfirm = function (o) {
  var u = o.conditionOrder,
    s = o.stockInfo,
    t = e.useVisibleControl(),
    c = t.visible,
    d = t.show,
    l = t.hide;
  return {
    confirmData: i.computed(function () {
      var e, i;
      return {
        name: u.name,
        type_desc: r.CondTags.OPENING_SELL,
        market: u.market,
        scode: u.code,
        stock_cls:
          null == (i = null == (e = s.value.quote) ? void 0 : e.secu_info)
            ? void 0
            : i.secu_cls,
        trigger_type: u.triggerType,
        down_type: u.downType,
        down_value: u.downValue,
        quantity: u.quantity,
        order_price_type: u.orderPriceType,
        invalid_time: n.calcExpireTime(u.validDayEnum),
      };
    }),
    confirmVisible: c,
    showConfirm: d,
    hideConfirm: l,
  };
};
