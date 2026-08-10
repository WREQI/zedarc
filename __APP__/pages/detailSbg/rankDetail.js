require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  n = {
    components: {
      RankDetail: function () {
        return "./@tencent/wzq-detail-indexrank/RankDetail.js";
      },
    },
    data: function () {
      var n = e.wx$1.getStorageSync("user/skin") || "white";
      return {
        symbol: null,
        type: "",
        skin: ["black", "dark"].includes(n) ? "black" : "white",
      };
    },
    onLoad: function (e) {
      var n;
      (this.symbol = e.symbol),
        (this.type = e.type),
        null == (n = this.$refs.rankDetail) || n.getData();
    },
    onPullDownRefresh: function () {
      var n;
      null == (n = this.$refs.rankDetail) || n.getData(),
        setTimeout(function () {
          e.wx$1.stopPullDownRefresh();
        }, 500);
    },
    onReachBottom: function () {
      var e;
      null == (e = this.$refs.rankDetail) || e.getData(!0);
    },
    onPageScroll: function (e) {
      var n;
      null == (n = this.$refs.rankDetail) || n.pageScroll(e);
    },
    methods: {
      handleloaded: function () {
        var n;
        e.wx$1.pageScrollTo({ scrollTop: 0 }),
          null == (n = this.$refs.rankDetail) || n.pageScroll({ screenTop: 0 });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("RankDetail")
  )();
var t = e._export_sfc(n, [
  [
    "render",
    function (n, t, o, a, r, l) {
      return e.e(
        { a: n.rootFontSize, b: e.p({ "no-auto": !0 }), c: r.symbol },
        r.symbol
          ? {
              d: e.sr("rankDetail", "bf2df985-2"),
              e: e.o(l.handleloaded, 78),
              f: e.p({ symbol: r.symbol, type: r.type, skin: r.skin }),
            }
          : {},
        { g: r.skin }
      );
    },
  ],
  ["__scopeId", "data-v-bf2df985"],
]);
(n.__runtimeHooks = 1), wx.createPage(t);
