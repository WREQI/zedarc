var e,
  t,
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  o = require("../../../common/vendor.js"),
  i = require("../@tencent/stock-base/bridge/mpwzq.js"),
  n =
    (null == (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
      ? void 0
      : t.IS_PCWEIXIN) || !1,
  a = {
    components: {
      discoverDetailPage: function () {
        return "../../marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.js";
      },
    },
    provide: function () {
      return {
        hqBridge: new o.HQBridge(this),
        stockBridge: i.StockBridge,
        stockRouter: o.StockRouter,
      };
    },
    data: function () {
      var e =
        (o.wx$1.getWindowInfo && o.wx$1.getWindowInfo()) ||
        o.wx$1.getSystemInfoSync();
      return {
        pageType: "index",
        statusBarHeight: (null == e ? void 0 : e.statusBarHeight) || 0,
        headerHeight: 0,
        scrollTop: 0,
        navBarHeight: 0,
        contentWraperTop: 0,
        isPc: n,
        hideBtn: !1,
        skin: o.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    computed: {
      headerAlpha: function () {
        return 0 === this.headerHeight
          ? 0
          : this.scrollTop > 0
          ? this.scrollTop + this.navBarHeight <=
            (this.contentWraperTop || this.headerHeight)
            ? (this.scrollTop + this.navBarHeight) /
              (this.contentWraperTop || this.headerHeight)
            : 1
          : 0;
      },
      backgroundColor: function () {
        return "black" === this.skin
          ? "rgba(18, 22, 31, ".concat(this.headerAlpha || 0, ")")
          : "rgba(255, 255, 255, ".concat(this.headerAlpha || 0, ")");
      },
      headerOpacityAlpha: function () {
        return 0 === this.contentWraperTop
          ? 0
          : this.scrollTop > 0
          ? this.scrollTop + this.navBarHeight <= this.contentWraperTop
            ? (this.scrollTop + this.navBarHeight) / this.contentWraperTop
            : 1
          : 0;
      },
    },
    onPageScroll: function (e) {
      var t = this,
        i = e.scrollTop;
      (this.scrollTop = i),
        i < 0 ||
          (o.wx$1
            .createSelectorQuery()
            .in(this.$refs.discoverDetailPage)
            .selectAll(".header-wrapper, .content-wrapper")
            .boundingClientRect(function (e) {
              if (e) {
                var o = r(e, 2),
                  i = o[0],
                  n = o[1];
                if (i) {
                  var a = i.height;
                  t.headerHeight = a;
                }
                if (n) {
                  var c = n.top;
                  t.contentWraperTop = Math.max(c, t.contentWraperTop);
                }
              }
            })
            .exec(),
          0 === this.navBarHeight &&
            o.wx$1
              .createSelectorQuery()
              .in(this)
              .select("#navBar")
              .boundingClientRect(function (e) {
                if (e) {
                  var r = e.height;
                  r > 0 && (t.navBarHeight = r);
                }
              })
              .exec());
    },
    created: function () {
      var e = (getApp().globalData.systemInfo || {}).SDKVersion,
        t = o.gte(e, "3.6.1");
      this.hideBtn = this.isPc && !t;
    },
    methods: {
      goBack: function () {
        o.wx$1.navigateBack();
      },
    },
  };
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog") +
    o.resolveComponent("discover-detail-page")
  )();
var c = o._export_sfc(a, [
  [
    "render",
    function (e, t, r, i, n, a) {
      return o.e(
        { a: e.rootFontSize, b: o.p({ "no-auto": !0 }), c: !n.isPc },
        n.isPc
          ? {}
          : o.e(
              { d: n.hideBtn },
              n.hideBtn
                ? {}
                : {
                    e: o.n(n.skin),
                    f: o.o(function () {
                      return a.goBack && a.goBack.apply(a, arguments);
                    }, 203),
                  },
              {
                g: "".concat(a.headerOpacityAlpha || 0),
                h: "".concat(n.statusBarHeight, "px"),
                i: a.backgroundColor,
              }
            ),
        {
          j: o.sr("discoverDetailPage", "3ae62a90-2"),
          k: o.p({ type: n.pageType }),
          l: n.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-3ae62a90"],
]);
(a.__runtimeHooks = 1), wx.createPage(c);
