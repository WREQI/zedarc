require("../../../app.js");
var e = require("../../../service/aegis/platform/not-wujie.js"),
  r = require("../../../service/stat/mp-weixin.js");
exports.useReport = function () {
  return {
    report: function (t, i) {
      var o =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : { reportAegis: !0, reportStat: !0 };
      (null == o ? void 0 : o.reportStat) && r.stat.click(t),
        (null == o ? void 0 : o.reportAegis) &&
          e.aegisReporter.sdk.report({ msg: t, trace: "trace" });
    },
    reportTime: function (r, t, i) {
      e.aegisReporter.reportTime(r, t, i);
    },
  };
};
