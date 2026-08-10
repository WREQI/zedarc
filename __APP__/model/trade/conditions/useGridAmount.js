require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../stock-hooks/useStepPure.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  require("./GridCondition.js");
var u = require("./grid-utils.js");
exports.useGridAmount = function (o) {
  var n,
    t = o.order,
    i = o.stockInfo,
    s = e.ref(!1),
    a = r.useStepPure({ order: t, stockInfo: i }).amountStep,
    c = e.ref("");
  function m() {
    n && clearTimeout(n);
  }
  function f() {
    m(),
      u.shouldTipsFee(t)
        ? ((c.value = u.PROFIT_NOT_COVER_FEE),
          (n = setTimeout(function () {
            m(), (c.value = "");
          }, 2e3)))
        : (c.value = "");
  }
  return {
    amountPopText: c,
    amountStep: a,
    changeAmount: function (e) {
      t.setQuatity(e), s.value || f();
    },
    handleBlur: function () {
      (s.value = !1), f();
    },
    clearAmountPopTimmer: m,
    handleFocus: function () {
      s.value = !0;
    },
  };
};
