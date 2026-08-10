var e = require("../../common/vendor.js"),
  n = require("../../config/key.js"),
  t = require("../../service/stat/mp-weixin.js"),
  u = e.ref(e.index.getStorageSync(n.KEY_ASSET_HIDDEN) || !1);
exports.useHideFund = function () {
  var r = e.inject("forceShowFund", !1);
  return {
    hidefund: e.computed({
      get: function () {
        return !r && u.value;
      },
      set: function (e) {
        u.value = e;
      },
    }),
    toggleHideFund: function () {
      (u.value = !u.value),
        t.stat.click("trade.asset." + (u.value ? "hide" : "show")),
        e.index.setStorageSync(n.KEY_ASSET_HIDDEN, u.value);
    },
    restoreHideFund: function () {
      e.index.getStorageSync(n.KEY_ASSET_HIDDEN) || (u.value = !1);
    },
  };
};
