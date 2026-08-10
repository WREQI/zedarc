require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../config/key.js"),
  t = require("./debtAutoOrderTime.js");
exports.useDebtAutoOrderTimeGuide = function () {
  var i = e.ref(!1);
  return {
    visible: i,
    tryShow: function () {
      return (
        !(function () {
          try {
            return "1" === e.index.getStorageSync(r.DEBT_AUTO_ORDER_TIME_GUIDE);
          } catch (e) {
            return !1;
          }
        })() &&
        !t.isDebtAutoOrderTimePromoExpired() &&
        ((function () {
          try {
            e.index.setStorageSync(r.DEBT_AUTO_ORDER_TIME_GUIDE, "1");
          } catch (e) {}
        })(),
        (i.value = !0),
        !0)
      );
    },
    close: function () {
      i.value = !1;
    },
  };
};
