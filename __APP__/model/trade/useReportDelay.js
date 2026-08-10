var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var t = require("../../service/aegis/utils.js"),
  r = { timeout: 6e3, eventName: "mon_trade_timeout", eventParams: {} };
exports.useReportDelay = function () {
  var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    n = e(
      e(e({}, r), a),
      {},
      { eventParams: e(e({}, r.eventParams), a.eventParams || {}) }
    ),
    i = null,
    u = !1;
  return {
    startMonitor: function () {
      try {
        i && clearTimeout(i),
          (i = setTimeout(function () {
            u || t.reportEventSafely(n.eventName, n.eventParams);
          }, n.timeout));
      } catch (e) {}
    },
    markTaskCompleted: function () {
      (u = !0), i && (clearTimeout(i), (i = null));
    },
  };
};
