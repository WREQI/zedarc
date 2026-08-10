require("../../../app.js");
var e = require("../../../service/aegis/platform/not-wujie.js");
exports.useSettingCheck = function (t) {
  var i,
    r = !1;
  return {
    startSettingCheck: function () {
      (r = !0),
        (i = setTimeout(function () {
          r &&
            e.aegisReporter.reportEvent(
              "".concat(t || "check-setting", "-fail")
            );
        }, 5e3));
    },
    checkSetting: function () {
      r = !1;
    },
    clearCheckTimer: function () {
      i && clearTimeout(i);
    },
  };
};
