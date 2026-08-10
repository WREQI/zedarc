var e = require("../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "BuyIndexBenefitsSection",
    setup: function () {
      return (
        e.StockBridge.report("hq.buyindexlanding.buy_index_advantages_brow"),
        {
          marketIcon:
            "https://st.gtimg.com/design/8dad22fcaaf7726c0da0822186723397.png",
          riskIcon:
            "https://st.gtimg.com/design/7fb32868d3db6a369dda444da7c00e30.png",
          simpleIcon:
            "https://st.gtimg.com/design/31788e0546c241c43033f8087366bdeb.png",
        }
      );
    },
  }),
  t = e._export_sfc(n, [
    [
      "render",
      function (e, n, t, c, o, d) {
        return { a: e.marketIcon, b: e.riskIcon, c: e.simpleIcon };
      },
    ],
    ["__scopeId", "data-v-38cb8ce0"],
  ]);
wx.createComponent(t);
