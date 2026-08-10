var e = require("../../common/vendor.js"),
  o = {
    components: {
      EventDetail: function () {
        return "./@tencent/stock-detail-big-event/eventpage.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    data: function () {
      var o = new e.HQBridge();
      return {
        hqBridge: o,
        symbol: "",
        market: "",
        skin: o.getStorage("user/skin") || "white",
      };
    },
    onLoad: function (o) {
      var t = o || {},
        r = t.symbol,
        n = t.market;
      (this.symbol = r),
        (this.market = n),
        "black" === this.skin &&
          e.wx$1.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#12161f",
          });
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("EventDetail")
  )();
var t = e._export_sfc(o, [
  [
    "render",
    function (o, t, r, n, a, i) {
      return {
        a: o.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.p({ symbol: a.symbol, market: a.market, skin: a.skin }),
        d: a.skin,
      };
    },
  ],
  ["__scopeId", "data-v-52aa4cb9"],
]);
wx.createPage(t);
