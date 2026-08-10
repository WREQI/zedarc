require("../../../app.js"),
  require("../../../domain/entities/trade-stock/condition-order.js");
var e = require("../../common/useVisibleControl.js"),
  t = require("../../../common/vendor.js");
exports.useCommonBottomSelector = function (o, r) {
  var i = e.useVisibleControl(),
    n = i.visible,
    c = i.hide,
    u = i.show,
    l = t.reactive({ title: "", range: [] }),
    s = t.ref(""),
    a = t.computed(function () {
      return o[s.value];
    }),
    m = r;
  return {
    bottomSelectedVal: a,
    bottomSelectorConfig: l,
    bottomSelectState: n,
    hideBottomSelector: c,
    showBottomSelector: function (e, o) {
      var r = m[o];
      r &&
        (Object.assign(l, r),
        (s.value = o),
        t.nextTick$1(function () {
          u();
        }));
    },
    handleBottomSelectorChange: function (e) {
      (o[s.value] = e.value), c();
    },
  };
};
