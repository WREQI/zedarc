var e = require("../../common/vendor.js"),
  o = {
    components: {
      Ratepage: function () {
        return "../quote/@tencent/wzq-lite-mergenews/Ratepage.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      var o = new e.HQBridge();
      return {
        symbol: "",
        hqBridge: o,
        skin: o.getStorage("user/skin") || "white",
      };
    },
    onLoad: function (o) {
      (this.symbol = o.symbol || ""),
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
    e.resolveComponent("Ratepage")
  )();
var r = e._export_sfc(o, [
  [
    "render",
    function (o, r, n, t, a, i) {
      return {
        a: o.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.p({ symbol: a.symbol }),
        d: a.skin,
        e: a.skin,
      };
    },
  ],
  ["__scopeId", "data-v-889cb18d"],
]);
wx.createPage(r);
