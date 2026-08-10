var e = require("../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "BuyIndexRiskTips",
    props: {
      tipText: { type: String, default: "内容仅供参考，不构成投资建议。" },
      hasBrandLogo: { type: Boolean, default: !1 },
    },
  }),
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, o, r, a, d) {
        return {
          a: e.t(n.tipText),
          b: e.n(n.hasBrandLogo && "etf-buy-index__disclaimer--has-brand"),
        };
      },
    ],
    ["__scopeId", "data-v-82967471"],
  ]);
wx.createComponent(t);
