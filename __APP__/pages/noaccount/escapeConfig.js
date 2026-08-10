Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var e = require("../../common/vendor.js"),
  t = null,
  r = null;
(exports.fetchEscapeConfig = function () {
  return e.Wuji.get({
    appid: "base",
    schemaid: "trade_escape_config",
    rowid: "1448316058",
  })
    .then(function (e) {
      var r = (null == e ? void 0 : e.data) || {},
        n = [];
      try {
        n = r.whitelist ? JSON.parse(r.whitelist) : [];
      } catch (e) {
        n = [];
      }
      return (t = {
        enabled: 1 === r.enabled,
        whitelist: Array.isArray(n) ? n : [],
      });
    })
    .catch(function (r) {
      return (
        e.mpReporter.reportEvent("ESCAPE_CONFIG_FETCH_ERROR", {
          ext3: (null == r ? void 0 : r.message) || "unknown",
        }),
        t || (t = { enabled: !1, whitelist: [] }),
        t
      );
    });
}),
  (exports.isEscapeEnabled = function () {
    if (!t) return !1;
    if (t.enabled) return !0;
    try {
      return (
        r || (r = e.wx$1.getStorageSync("_qluin") || ""),
        r && t.whitelist.includes(r)
      );
    } catch (e) {
      return !1;
    }
  });
