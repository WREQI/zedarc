var t = require("../../common/vendor.js"),
  e = {
    data: function () {
      return {
        hqBridge: new t.HQBridge(),
        imageUrl: "https://st.gtimg.com/image/kline/trade-line",
        stat: "",
      };
    },
    onLoad: function (t) {
      (this.stat = t.stat || ""),
        this.hqBridge.report("hq.stock_detail.trade_line_intro_exposure");
    },
    methods: {
      goOpenAccount: function (e) {
        t.useApplyEntry.toApply({ dealerCode: "10100", stat: this.stat }),
          this.hqBridge.report(
            "hq.stock_detail.trade_line_".concat(e, "_account_click")
          );
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, o, r, i, a) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: "".concat(i.imageUrl, "/intro-header.png"),
        d: t.o(function (t) {
          return a.goOpenAccount("top");
        }, 199),
        e: "".concat(i.imageUrl, "/intro-general.png"),
        f: "".concat(i.imageUrl, "/intro-title-left.png"),
        g: "".concat(i.imageUrl, "/intro-title-right.png"),
        h: "".concat(i.imageUrl, "/intro-rise.png"),
        i: "".concat(i.imageUrl, "/intro-drop.png"),
        j: "".concat(i.imageUrl, "/intro-title-left.png"),
        k: "".concat(i.imageUrl, "/intro-title-right.png"),
        l: "".concat(i.imageUrl, "/intro-usage.png"),
        m: t.o(function (t) {
          return a.goOpenAccount("bottom");
        }, 200),
      };
    },
  ],
  ["__scopeId", "data-v-09ee6ffa"],
]);
wx.createPage(n);
