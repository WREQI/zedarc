require("../../../app.js");
var e = require("../../../common/vendor.js"),
  u = require("../stock-hooks/useStepPure.js");
require("./TPSLCondition.js");
var t = require("../useStockInfo.js");
exports.useTPSLAmount = function (o) {
  var n,
    r = o.order,
    a = o.stockInfo,
    i = e.ref(!1),
    c = u.useStepPure({ order: r, stockInfo: a }).amountStep,
    s = e.ref("");
  function m() {
    n && clearTimeout(n);
  }
  function l() {
    s.value = "";
    var e = "",
      u = a.value.minAmount;
    (u || a.value.isKCB) &&
      ((e = a.value.isKCB
        ? "最少交易".concat(t.KC_MIN_TRADE, "股")
        : "数量需为".concat(u, "或其整倍数")),
      Number(r.quantity) <= 0 &&
        !i.value &&
        (setTimeout(function () {
          r.setQuatity("".concat(u));
        }, 10),
        (s.value = e),
        (n = setTimeout(function () {
          m(), (s.value = "");
        }, 2e3))));
  }
  return {
    amountPopText: s,
    amountStep: c,
    changeAmount: function (e) {
      r.setQuatity(e), l();
    },
    handleBlur: function () {
      (i.value = !1), l();
    },
    clearAmountPopTimmer: m,
    handleFocus: function () {
      i.value = !0;
    },
  };
};
