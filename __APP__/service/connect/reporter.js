require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var t = require("../../common/vendor.js"),
  r = require("../aegis/platform/not-wujie.js"),
  n = require("./enum.js"),
  o = new Map(),
  a = "";
function c(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  try {
    n.ext5, r.aegisReporter.reportEvent(t, e(e({}, n || {}), {}, { ext5: a }));
  } catch (e) {}
}
function i(t, n) {
  var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  try {
    r.aegisReporter.reportTime(t, n, e(e({}, o || {}), {}, { ext5: a }));
  } catch (e) {}
}
var s = 0;
(exports.reportDowngrade = function (e, r) {
  try {
    var o = { ext4: e };
    r && (o.ext6 = r), c("wss_downgrade", o);
    var a = Date.now();
    t.index.setStorageSync(n.DOWNGRADE_STORAGE_KEY, { flag: 1, timestamp: a });
  } catch (e) {}
}),
  (exports.reportEndTime = function (e) {
    try {
      if (!o.has(e)) return;
      var t = o.get(e),
        r = Date.now(),
        n = Math.floor(r - t);
      o.delete(e), i(e, n);
    } catch (e) {}
  }),
  (exports.reportEvent = c),
  (exports.reportRecovery = function () {
    try {
      var e = t.index.getStorageSync(n.DOWNGRADE_STORAGE_KEY) || {};
      if (
        t.isEmpty(e) ||
        !t.isObject(e) ||
        !e.flag ||
        1 != +e.flag ||
        !e.timestamp
      )
        return;
      var r = e.timestamp,
        o = Date.now();
      i("wss_recover_time", Math.floor(o - r)),
        t.index.removeStorageSync(n.DOWNGRADE_STORAGE_KEY);
    } catch (e) {}
  }),
  (exports.reportStartTime = function (e) {
    o.has(e), o.set(e, Date.now());
  }),
  (exports.reportUnExpectScheme = function (e, t) {
    try {
      if (!e || !t || 0 === t.length) return;
      if (t.includes(e.join("++"))) return;
      c("wss_unexpect_scheme_cover", { ext4: e.join("++") });
    } catch (e) {}
  }),
  (exports.reportUnMatchScene = function (e, t, r) {
    try {
      var n = Date.now();
      if (n - s < 3e3) return;
      s = n;
      var o = "".concat(e, "_").concat(t);
      r && (o += "_".concat(r)), c("wss_unmatch_scheme", { ext4: o });
    } catch (e) {}
  }),
  (exports.updateWebsocketReportKey = function (e) {
    a = e;
  });
