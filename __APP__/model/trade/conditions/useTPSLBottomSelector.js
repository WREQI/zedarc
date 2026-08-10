require("../../../app.js"), require("./TPSLCondition.js");
var e = require("../../common/useVisibleControl.js"),
  t = require("../../../config/enum/condition.js"),
  o = require("../../../config/enum.js"),
  r = require("../../../common/vendor.js");
exports.useTPSLBottomSelector = function (i) {
  var n = e.useVisibleControl(),
    c = n.visible,
    u = n.hide,
    a = n.show,
    l = r.reactive({ title: "", range: [] }),
    s = r.ref("");
  return {
    bottomSelectedVal: r.computed(function () {
      return i[s.value];
    }),
    bottomSelectorConfig: l,
    bottomSelectState: c,
    hideBottomSelector: u,
    showBottomSelector: function (e, i) {
      var n = {
        orderPriceType: { title: "委托价", range: t.PriceTypeRangeWithoutSell },
        validDayEnum: { title: "订单有效期", range: o.ORDER_VALIDATE_DAYS },
      }[i];
      n &&
        (Object.assign(l, n),
        (s.value = i),
        r.nextTick$1(function () {
          a();
        }));
    },
    handleBottomSelectorChange: function (e) {
      switch (s.value) {
        case "orderPriceType":
          i.setOrderPriceType(e.value);
          break;
        case "validDayEnum":
          i.setValidDayEnum(e.value);
      }
      u();
    },
  };
};
