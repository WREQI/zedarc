require("../../../app.js");
var e = require("../../../adapter/router.js"),
  r = require("./not-wujie.js"),
  t = 0,
  i = !1;
(exports.pageRouteTimingEnd = function () {
  try {
    var a = "route",
      u = e.route().query;
    if (!t) {
      if (i) return;
      i = !0;
      var o = (void 0 === u ? {} : u).ftimestamp,
        n = void 0 === o ? "" : o;
      if (!n) return;
      (t = +n), (a = "first");
    }
    var p = new Date().getTime();
    r.aegisReporter.reportTime("MONITOR-PAGE-ROUTE-TIMING", p - t, { ext4: a }),
      (t = 0);
  } catch (a) {}
}),
  (exports.pageRouteTimingStart = function () {
    try {
      t = new Date().getTime();
    } catch (e) {}
  });
