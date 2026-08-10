var e = require("../../common/vendor.js"),
  r = {
    components: {
      RzrqDetail: function () {
        return "./@tencent/wzq-detail-subpage/hs-fund-pages/RzrqDetail.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    data: function () {
      var r = new e.HQBridge();
      return {
        hqBridge: r,
        query: null,
        skin: r.getStorage("user/skin") || "white",
      };
    },
    onLoad: function (r) {
      (this.query = r), e.wx$1.setNavigationBarTitle({ title: "融资融券" });
    },
    onReachBottom: function () {
      var e;
      null == (e = this.$refs.rzrqDetail) || e.loadMore();
    },
    onPullDownRefresh: function () {
      var r;
      null == (r = this.$refs.rzrqDetail) ||
        r.pullDownRefresh(function () {
          e.wx$1.stopPullDownRefresh();
        });
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("RzrqDetail")
  )();
var t = e._export_sfc(r, [
  [
    "render",
    function (r, t, n, o, i, a) {
      return e.e(
        { a: r.rootFontSize, b: e.p({ "no-auto": !0 }), c: i.query },
        i.query
          ? {
              d: e.sr("rzrqDetail", "ea99c417-2"),
              e: e.p({ scode: i.query.scode, market: i.query.market }),
            }
          : {},
        { f: i.skin }
      );
    },
  ],
  ["__scopeId", "data-v-ea99c417"],
]);
wx.createPage(t);
