var e = require("../../../../../../common/vendor.js"),
  t = require("../hooks/useViewportWidth.js");
function r(e) {
  var r = t.readViewportWidth(t.DESIGN_BASELINE_WIDTH_375);
  return Math.round((e / t.DESIGN_BASELINE_WIDTH_375) * r);
}
var a = e.defineComponent({
    name: "BuyIndexHeroSection",
    props: {
      hasCustomNav: { type: Boolean, default: !1 },
      safeTop: { type: Number, default: 0 },
      navBarHeight: { type: Number, default: 0 },
    },
    setup: function (t) {
      return {
        subtitle: "新手投资入门首选，一键买龙头",
        wrapperStyle: e.computed(function () {
          if (!t.hasCustomNav) return {};
          var e = (t.safeTop || 0) + (t.navBarHeight || 0);
          return {
            paddingTop: "".concat(e + r(12), "px"),
            height: "".concat(e + r(128), "px"),
          };
        }),
      };
    },
  }),
  n = e._export_sfc(a, [
    [
      "render",
      function (t, r, a, n, o, u) {
        return { a: e.t(t.subtitle), b: e.s(t.wrapperStyle) };
      },
    ],
    ["__scopeId", "data-v-691caac0"],
  ]);
wx.createComponent(n);
