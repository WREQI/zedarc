var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: {
      subTitle: { type: String, default: "" },
      market: { type: String, default: "" },
      type: { type: String, default: "" },
    },
    computed: {
      title: function () {
        return "stock" === this.type ? "近3月新股表现" : "近3月新债表现";
      },
    },
    methods: {
      goToNewStockPurchase: function () {
        var e = this.market,
          t = this.type;
        if ("wzq" === this.hqBridge.ENV)
          this.hqBridge.routeTo({
            path: "/newstockpurchase",
            query: { market: e, type: t, timestamp: Date.now(), periodTab: 0 },
          });
        else if ("mp" === this.hqBridge.ENV)
          this.hqBridge.routeTo({
            path: "/pages/marketDx/DxPerformDetailPage",
            query: { market: e, type: t, timestamp: Date.now(), periodTab: 0 },
          });
        else if ("app" === this.hqBridge.ENV) {
          var r = encodeURIComponent(
            JSON.stringify({
              p_key: "newstockpurchase",
              p_showNav: !0,
              market: e,
              type: t,
              period: 90,
            })
          );
          this.hqBridge.routeTo({ url: "qqstock://Hippy?info=".concat(r) });
        }
        this.hqBridge.report("hq.xingurili.goto_purchase_".concat(e, "_stock"));
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, o, i, a, p) {
        return {
          a: e.t(p.title),
          b: e.t(o.subTitle),
          c: e.o(function () {
            return (
              p.goToNewStockPurchase &&
              p.goToNewStockPurchase.apply(p, arguments)
            );
          }, 2150),
        };
      },
    ],
    ["__scopeId", "data-v-f1e1cac9"],
  ]);
wx.createComponent(r);
