require("../../app.js");
var e = require("../../common/vendor.js");
exports.useVisibleControl = function () {
  var r = e.ref(!1);
  return {
    visible: r,
    show: function () {
      r.value = !0;
    },
    hide: function () {
      r.value = !1;
    },
  };
};
