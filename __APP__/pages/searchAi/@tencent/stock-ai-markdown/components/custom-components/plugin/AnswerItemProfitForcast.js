var t = require("../../../../../../../common/vendor.js"),
  e = {},
  n = {
    options: { styleIsolation: "shared" },
    name: "AnswerItemProfitForcast",
    components: {
      ProfitForcast: function () {
        return "../../../../../../detailSbg/@tencent/wzq-detail-finance/components/ProfitForcast.js";
      },
    },
    inject: { hqBridge: { default: null } },
    props: {
      market: { type: String, default: null },
      scode: { type: String, default: null },
      stockType: { type: String, default: null },
      skin: { type: String, default: "blue" },
      data: { type: Object, default: null },
      position: { type: String, default: "0" },
    },
    data: function () {
      return { isMP: !0, isiOS: e.ios };
    },
    computed: {
      isZxgApp: function () {
        return "app" === this.hqBridge.ENV;
      },
    },
    methods: {
      tapChart: function () {
        this.$emit("ylyc-canvas-click");
      },
    },
  };
Array || t.resolveComponent("profit-forcast")();
var i = t._export_sfc(n, [
  [
    "render",
    function (e, n, i, r, a, o) {
      return {
        a: t.n(o.isZxgApp ? "zxg-app" : ""),
        b: t.n(a.isiOS ? "ios" : ""),
        c: t.p({
          "chart-id": "profitForcastChart".concat(i.position),
          "chart-style": "width: 560rpx; height: 288rpx",
          market: i.market,
          scode: i.scode,
          "stock-type": i.stockType,
          skin: i.skin,
          "profit-forcast": i.data,
          "jump-from-ai-plugin": !0,
          "disable-tooltips": !0,
          "page-name": "jichu.ai_search",
        }),
        d: t.n("skin-".concat(i.skin)),
        e: t.o(function () {
          return o.tapChart && o.tapChart.apply(o, arguments);
        }, 5789),
      };
    },
  ],
  ["__scopeId", "data-v-5b7bb88d"],
]);
wx.createComponent(i);
