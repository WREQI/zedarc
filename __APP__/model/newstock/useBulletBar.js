require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../config/key.js");
exports.useBulletBar = function (t) {
  var u = e.ref("1" !== e.index.getStorageSync(r.NEW_STOCK_BULLETBAR_HAS_SHOW)),
    n = e.ref(!1);
  return {
    showBulletBar: e.computed(function () {
      return u.value && 0 == +t.maxBuyAmountSh && 0 == +t.maxBuyAmountSz;
    }),
    showActionSheet: n,
    closeBulletBar: function () {
      (u.value = !1),
        e.index.setStorageSync(r.NEW_STOCK_BULLETBAR_HAS_SHOW, "1");
    },
  };
};
