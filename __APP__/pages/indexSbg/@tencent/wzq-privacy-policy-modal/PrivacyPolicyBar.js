var t = require("../../../../common/vendor.js"),
  e = {
    props: { tipsText: { type: String, default: "" } },
    data: function () {
      return {
        isMP: t.StockBridge.ENV === t.EnvTypeEnum.MP,
        defaultTipText: "自选数据不完整？一键同步，全面盯盘",
      };
    },
    mounted: function () {
      t.StockBridge.report("choose.policy.bar_brow");
    },
    methods: {
      handleBarClick: function () {
        t.StockBridge.report("hq.choose.privacy.bar_click"),
          this.$emit("PrivacyPolicyBarClick");
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, o, c, i) {
        return {
          a: t.t(n.tipsText || c.defaultTipText),
          b: t.n(c.isMP ? "mp-content" : "h5-content"),
          c: t.o(function () {
            return i.handleBarClick && i.handleBarClick.apply(i, arguments);
          }, 1365),
        };
      },
    ],
    ["__scopeId", "data-v-7c4ef8af"],
  ]);
wx.createComponent(r);
