var t = require("../../../../../../../common/vendor.js"),
  e = {},
  n = {
    options: { styleIsolation: "shared" },
    name: "AnswerItemPerformanceTrends",
    components: {
      PerformanceTrends: function () {
        return "../../../../../../detailSbg/@tencent/wzq-detail-finance/components/PerformanceTrends.js";
      },
    },
    inject: { hqBridge: { default: null } },
    props: {
      market: { type: String, default: null },
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
        this.$emit("performance-canvas-click");
      },
    },
  };
Array || t.resolveComponent("performance-trends")();
var a = t._export_sfc(n, [
  [
    "render",
    function (e, n, a, r, i, o) {
      return t.e(
        { a: a.data },
        a.data
          ? {
              b: t.p({
                "chart-id": "hytrendChart".concat(a.position),
                "chart-style": "width: 558rpx; height: 288rpx",
                market: a.market,
                "stock-type": a.stockType,
                skin: a.skin,
                data: a.data,
                "disable-tooltips": !0,
                "page-name": "jichu.ai_search",
              }),
            }
          : {},
        {
          c: t.n(o.isZxgApp ? "zxg-app" : ""),
          d: t.n(i.isiOS ? "ios" : ""),
          e: t.n("skin-".concat(a.skin)),
          f: t.o(function () {
            return o.tapChart && o.tapChart.apply(o, arguments);
          }, 5788),
        }
      );
    },
  ],
  ["__scopeId", "data-v-591968f6"],
]);
wx.createComponent(a);
