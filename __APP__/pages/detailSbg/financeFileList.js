var e = require("../../common/vendor.js"),
  t = require("@tencent/stock-hq-data/index.js"),
  o = {
    components: {
      AnnouncementList: function () {
        return "./@tencent/wzq-detail-subpage/finance-pages/AnnouncementList.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    data: function () {
      var t = new e.HQBridge();
      return {
        hqBridge: t,
        symbol: "",
        skin: t.getStorage("user/skin") || "white",
        showList: !1,
      };
    },
    onLoad: function (o) {
      var n = o || {},
        i = n.scode,
        s = n.market,
        r = n.title,
        a = void 0 === r ? "财务公告文件" : r;
      (this.symbol = t.utils.getSymbol(s, t.utils.trimScode(i))),
        (this.showList = !0),
        "black" === this.skin &&
          e.wx$1.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#12161f",
          }),
        e.wx$1.setNavigationBarTitle({ title: a });
    },
    onPullDownRefresh: function () {
      var t;
      null == (t = this.$refs.list) || t.refresh(),
        setTimeout(function () {
          e.wx$1.stopPullDownRefresh();
        }, 200);
    },
    onReachBottom: function () {
      var e;
      null == (e = this.$refs.list) || e.loadMore();
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("AnnouncementList")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, i, s, r) {
      return e.e(
        { a: t.rootFontSize, b: e.p({ "no-auto": !0 }), c: s.showList },
        s.showList
          ? {
              d: e.sr("list", "95e7acb0-2"),
              e: e.p({ symbol: s.symbol, skin: s.skin }),
            }
          : {},
        { f: s.skin }
      );
    },
  ],
  ["__scopeId", "data-v-95e7acb0"],
]);
wx.createPage(n);
