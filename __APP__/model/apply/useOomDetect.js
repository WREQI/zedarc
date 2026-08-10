require("../../app.js");
var e = require("../../common/vendor.js");
exports.useOomDetect = function () {
  return {
    hookMarkStart: function (r) {
      e.index.setStorageSync(r, "1");
    },
    hookMarkEnd: function (r) {
      e.index.removeStorageSync(r);
    },
    detectOOM: function (r) {
      var n = !1;
      return (
        e.index.getStorageSync(r) && ((n = !0), e.index.removeStorageSync(r)), n
      );
    },
  };
};
