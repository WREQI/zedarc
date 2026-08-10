var r = require("../../../../../common/vendor.js");
(exports.aegisReportError = function (o) {
  var e, n, l, t;
  null ==
    (t =
      null ==
      (l =
        null ==
        (n = null == (e = r.index.__UNION_BRIDGE__) ? void 0 : e.UNION_AEGIS)
          ? void 0
          : n.sdk)
        ? void 0
        : l.error) || t.call(l, o);
}),
  (exports.aegisReportEvent = function (o, e) {
    var n, l, t;
    null ==
      (t =
        null ==
        (l = null == (n = r.index.__UNION_BRIDGE__) ? void 0 : n.UNION_AEGIS)
          ? void 0
          : l.reportEvent) || t.call(l, o, e);
  }),
  (exports.report = function (o) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    o && r.StockBridge.report(o, e);
  });
