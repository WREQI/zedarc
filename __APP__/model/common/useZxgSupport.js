var r = require("../../utils/getPlatform.js"),
  e = require("../../common/vendor.js");
exports.useZxgSupport = function () {
  var t = e.ref(!1),
    u = r.getPlatform(),
    o = u.isZxg,
    a = u.bizPlatformVer;
  return (
    o && e.lt(a, "9.5") ? (t.value = !1) : (t.value = !0), (t.value = !0), t
  );
};
