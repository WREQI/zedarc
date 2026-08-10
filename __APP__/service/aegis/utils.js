var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("./platform/not-wujie.js");
require("../broker.js");
var t = require("../../utils/cacheFn.js");
(exports.reportEventSafely = function (e, t) {
  try {
    r.aegisReporter.reportEvent(e, t);
  } catch (e) {}
}),
  (exports.reportMonitorEvent = function (o, i) {
    try {
      var n = e({}, i);
      if (n.ext3) {
        var a = (function () {
          try {
            return t.getWzqOpenid() || "";
          } catch (e) {
            return "";
          }
        })();
        n.ext3 = a ? "".concat(n.ext3, "|uid:").concat(a) : n.ext3;
      }
      r.aegisReporter.reportEvent(o, n);
    } catch (n) {}
  }),
  (exports.reportMonitorTime = function (e, t, o) {
    try {
      r.aegisReporter.reportTime(e, t, o);
    } catch (e) {}
  });
