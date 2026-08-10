require("../../../app.js");
var e = require("../../common/useVisibleControl.js"),
  i = require("../../../common/vendor.js");
require("./LimitUpCondition.js"),
  require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js");
var r = require("../../../config/enum/condition.js"),
  n = require("./utils.js");
exports.useLimitUpConfirm = function (o) {
  var s = o.conditionOrder,
    t = o.stockInfo,
    u = e.useVisibleControl(),
    m = u.visible,
    c = u.show,
    a = u.hide;
  return {
    confirmData: i.computed(function () {
      var e, i;
      return {
        name: s.name,
        type_desc: r.CondTags.LIMIT_UP,
        market: s.market,
        scode: s.code,
        stock_cls:
          null == (i = null == (e = t.value.quote) ? void 0 : e.secu_info)
            ? void 0
            : i.secu_cls,
        invest_quantity: s.investQuantity,
        max_amount: s.maxAmount,
        invalid_time: n.calcExpireTime(s.validDayEnum),
      };
    }),
    confirmVisible: m,
    showConfirm: c,
    hideConfirm: a,
  };
};
