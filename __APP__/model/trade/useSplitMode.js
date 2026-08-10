require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../utils/getPlatform.js"),
  t = require("../../stores/app/useMode.js");
exports.useSplitMode = function (u) {
  var i,
    o = null == (i = e.getCurrentInstance()) ? void 0 : i.proxy,
    l = ((null == o ? void 0 : o.$route) || {}).query,
    s = void 0 === l ? {} : l,
    n = e.storeToRefs(t.useModeStore()).simpleMode,
    d = r.getPlatform(),
    p = d.isInIframe,
    a = d.isOEM,
    c = d.isMpPlugin,
    v = d.isZxg,
    M = e.ref(!v && !a && u),
    S = e.computed(function () {
      return (
        !n.value && ("1" === (null == s ? void 0 : s.tradeSplit) || M.value)
      );
    }),
    f = !(
      "1" !== (null == s ? void 0 : s.tradeSplit) ||
      n.value ||
      a ||
      c ||
      p
    ),
    m = e.computed(function () {
      return f
        ? { tradeSplit: "1", entrust_type: null == s ? void 0 : s.entrust_type }
        : {};
    }),
    g = e.computed(function () {
      return n.value || a || c ? {} : { tradeSplit: "1" };
    });
  return {
    hasSplitModeTag: M,
    isClassicTradeSplitMode: S,
    isClassicFullScreenSplitMode: f,
    splitModeQuery: m,
    splitModeQueryForDrawer: g,
  };
};
