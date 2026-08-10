var r = require("../../common/vendor.js");
function t(r, t) {
  for (
    var e = r.split("."), n = t.split("."), o = 0;
    o < e.length || o < n.length;
    ++o
  ) {
    var i = 0,
      s = 0;
    if (
      (o < e.length && (i = parseInt(e[o], 10)),
      o < n.length && (s = parseInt(n[o], 10)),
      i > s)
    )
      return 1;
    if (i < s) return -1;
  }
  return 0;
}
exports.initCardSupportVersion = function () {
  try {
    var e = (getApp().globalData || {}).systemInfo;
    if (!e) throw { retcode: "LACK_SYSTEM_INFO", retmsg: "获取系统信息失败" };
    return (
      (n = e.platform),
      (o = e.version),
      "ohos" === n && r.gt(o, "1.0.2")
        ? !1
        : !!(
            "android" === e.platform &&
            (null == e ? void 0 : e.version) &&
            t(null == e ? void 0 : e.version, "8.0.41") >= 0
          ) ||
          !!(
            (e.system || "").indexOf("iOS") >= 0 &&
            (null == e ? void 0 : e.version) &&
            t(null == e ? void 0 : e.version, "8.0.49") >= 0
          ) ||
          (r.mpReporter.reportEvent("ACCOUNTCARD_NOT_SUPPORT"), !1)
    );
  } catch (e) {
    return (
      r.mpReporter.log("ACCOUNTCARD_INIT_SUPPORT_ERROR", {
        ext3: JSON.stringify(e || {}),
      }),
      !1
    );
  }
  var n, o;
};
