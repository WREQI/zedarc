require("../../app.js");
var t = require("../aegis/platform/not-wujie.js"),
  e = { count: 0, timestamp: 0 };
function i() {
  var t = Date.now() - e.timestamp;
  e.timestamp > 0 && t > 1e4 && ((e.count = 0), (e.timestamp = 0));
}
(exports.addBiometricsCount = function () {
  i(), e.count++, 0 === e.timestamp && (e.timestamp = Date.now());
}),
  (exports.isCountOver = function () {
    var o, r, n;
    return (
      i(),
      e.count > 3 &&
        (null ==
          (n =
            null == (r = null == (o = t.aegisReporter) ? void 0 : o.sdk)
              ? void 0
              : r.error) || n.call(r, { msg: "BIO_AUTH_COUNT_LIMIT" }),
        !0)
    );
  });
