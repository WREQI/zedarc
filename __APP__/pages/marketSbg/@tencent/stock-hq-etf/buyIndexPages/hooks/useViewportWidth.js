var e = require("../../../../../../common/vendor.js");
function n() {
  if (void 0 === e.wx$1) return 0;
  try {
    if ("function" == typeof e.wx$1.getWindowInfo)
      return e.wx$1.getWindowInfo().windowWidth || 0;
    if ("function" == typeof e.wx$1.getSystemInfoSync) {
      var n = e.wx$1.getSystemInfoSync();
      return n.windowWidth || n.screenWidth || 0;
    }
  } catch (e) {}
  return 0;
}
function t() {
  var t,
    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 375;
  if (e.StockBridge.ENV === e.EnvTypeEnum.MP) {
    var r = n();
    return r > 0 ? r : o;
  }
  return (
    ("undefined" != typeof window &&
      (window.innerWidth ||
        ("undefined" != typeof document
          ? null == (t = document.documentElement)
            ? void 0
            : t.clientWidth
          : 0))) ||
    o
  );
}
(exports.DESIGN_BASELINE_WIDTH_375 = 375),
  (exports.DESIGN_BASELINE_WIDTH_750 = 750),
  (exports.designPxToDevicePx = function (o) {
    var r =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 375;
    if (e.StockBridge.ENV === e.EnvTypeEnum.MP) {
      var i = n();
      return i > 0 ? Math.round((o / r) * i) : o;
    }
    if (750 === r && "undefined" != typeof document) {
      var d = parseFloat(getComputedStyle(document.documentElement).fontSize);
      if (d && !Number.isNaN(d)) return Math.round((o / 75) * d);
    }
    var u = t(r);
    return Math.round((o / r) * u);
  }),
  (exports.readViewportWidth = t);
