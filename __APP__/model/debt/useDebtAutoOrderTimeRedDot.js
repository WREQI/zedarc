require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../config/key.js"),
  t = require("./debtAutoOrderTime.js");
exports.useDebtAutoOrderTimeRedDot = function (o) {
  var u = e.ref(
    (function () {
      try {
        return (
          "1" === e.index.getStorageSync(r.DEBT_AUTO_ORDER_TIME_RED_DOT_CLICKED)
        );
      } catch (e) {
        return !1;
      }
    })()
  );
  return {
    showTimeRedDot: e.computed(function () {
      return !!t.shouldShowDebtAutoOrderTimePromo(o.value) && !u.value;
    }),
    markTimeRedDotClicked: function () {
      u.value ||
        ((u.value = !0),
        (function () {
          try {
            e.index.setStorageSync(r.DEBT_AUTO_ORDER_TIME_RED_DOT_CLICKED, "1");
          } catch (e) {}
        })());
    },
  };
};
