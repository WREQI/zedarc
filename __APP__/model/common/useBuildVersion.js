require("../../app.js");
var e = require("../../common/vendor.js");
exports.useBuildVersion = function () {
  var r = e.ref("V202606301712"),
    n = e.ref(0);
  return {
    buildVersion: r,
    isBuildVersionShow: e.computed(function () {
      return n.value >= 3;
    }),
    incrementTriggerCount: function () {
      n.value += 1;
    },
  };
};
