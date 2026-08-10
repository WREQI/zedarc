require("../../../app.js"), require("./GridCondition.js");
var e = require("../../common/useVisibleControl.js"),
  t = require("../../../config/enum/condition.js"),
  i = require("../../../config/enum.js"),
  r = require("../../../common/vendor.js");
exports.useGridBottomSelector = function (o) {
  var n = e.useVisibleControl(),
    c = n.visible,
    a = n.hide,
    l = n.show,
    u = r.reactive({ title: "", range: [] }),
    s = r.ref("");
  return {
    bottomSelectedVal: r.computed(function () {
      return o[s.value];
    }),
    bottomSelectorConfig: u,
    bottomSelectState: c,
    hideBottomSelector: a,
    showBottomSelector: function (e, o) {
      var n = {
        buyPriceType: { title: "买入委托", range: t.PriceTypeRange },
        sellPriceType: { title: "卖出委托", range: t.PriceTypeRange },
        validDayEnum: { title: "订单有效期", range: i.ORDER_VALIDATE_DAYS },
      }[o];
      n &&
        (Object.assign(u, n),
        (s.value = o),
        r.nextTick$1(function () {
          l();
        }));
    },
    handleBottomSelectorChange: function (e) {
      switch (s.value) {
        case "buyPriceType":
          o.setBuyPriceType(e.value);
          break;
        case "sellPriceType":
          o.setSellPriceType(e.value);
          break;
        case "validDayEnum":
          o.setValidDayEnum(e.value);
      }
      a();
    },
  };
};
