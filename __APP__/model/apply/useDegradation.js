require("../../app.js");
var e = require("../../common/vendor.js");
exports.useDegradation = function (r, u) {
  var n = e.ref(!1),
    t = e.computed(function () {
      return n.value ? u : r;
    });
  return {
    isDegraded: n,
    service: t,
    setDegraded: function () {
      n.value = !0;
    },
  };
};
