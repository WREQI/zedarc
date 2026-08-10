var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: ["type", "showTips"],
    computed: {
      title: function () {
        return (
          {
            baseInfo: "基本信息",
            yjbx: "业绩表现",
            cyr: "持有人结构",
            deal: "交易信息",
            realtime: "持仓占比",
          }[this.type] || "基本信息"
        );
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isApp: function () {
        return "app" === this.hqBridge.ENV;
      },
      isSpecialPlatform: function () {
        return this.isWzq || this.isApp;
      },
    },
    mounted: function () {
      this.hqBridge.report(
        "hq.stock_detail.".concat(
          "realtime" === this.type ? "asset_realtime" : "etf_tip",
          ".modal_brow"
        )
      );
    },
    methods: {
      handleClose: function () {
        var e = this;
        setTimeout(function () {
          e.$emit("close");
        }, 300),
          this.hqBridge.report("hq.stock_detail.etf_tip.modal_close");
      },
    },
  };
Array || e.resolveComponent("st-modal")();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, o, s, r, n) {
      return e.e(
        { a: o.showTips && n.isSpecialPlatform },
        o.showTips && n.isSpecialPlatform
          ? {
              b: "baseInfo" === o.type,
              c: "yjbx" === o.type,
              d: "cyr" === o.type,
              e: "deal" === o.type,
              f: e.o(n.handleClose, 2242),
              g: e.p({
                title: n.title,
                visible: o.showTips,
                "confirm-btn": "我知道了",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-681aa6ac"],
]);
wx.createComponent(i);
