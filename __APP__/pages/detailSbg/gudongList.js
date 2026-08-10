var e = require("../../common/vendor.js"),
  o = require("@tencent/stock-hq-data/index.js"),
  n = {
    components: {
      HoldingOwnerList: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/HoldingOwnerList.js";
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
        skin: o.getStorage("user/skin") || "white",
      };
    },
    onLoad: function (n) {
      var t = n || {},
        r = t.scode,
        i = t.market,
        a = t.title,
        s = void 0 === a ? "股东增减持" : a;
      (this.symbol = o.utils.getSymbol(i, r)),
        "black" === this.skin &&
          e.wx$1.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#12161f",
          }),
        e.wx$1.setNavigationBarTitle({ title: s });
    },
    onPageScroll: function (e) {
      var o;
      null == (o = this.$refs.list) || o.handlePageScroll(e);
    },
    methods: {
      handleloaded: function () {
        e.wx$1.pageScrollTo({ scrollTop: 0 });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("HoldingOwnerList")
  )();
var t = e._export_sfc(n, [
  [
    "render",
    function (o, n, t, r, i, a) {
      return e.e(
        { a: o.rootFontSize, b: e.p({ "no-auto": !0 }), c: i.symbol },
        i.symbol
          ? {
              d: e.sr("list", "d5aec6df-2"),
              e: e.o(a.handleloaded, 77),
              f: e.p({ symbol: i.symbol }),
            }
          : {},
        { g: i.skin }
      );
    },
  ],
  ["__scopeId", "data-v-d5aec6df"],
]);
(n.__runtimeHooks = 1), wx.createPage(t);
