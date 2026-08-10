var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  s = function (t, a, n) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
  },
  c = function (e, a) {
    for (var n in a || (a = {})) i.call(a, n) && s(e, n, a[n]);
    if (o) {
      var c,
        u = t(o(a));
      try {
        for (u.s(); !(c = u.n()).done; ) {
          n = c.value;
          r.call(a, n) && s(e, n, a[n]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return e;
  },
  u = require("../../common/vendor.js"),
  d = require("@tencent/stock-hq-data/index.js"),
  l = require("../../utils/hqWSHelper.js"),
  h = getApp().globalData,
  p = {
    provide: function () {
      return { hqBridge: this.hqBridge, hqWSHelper: l.hqWSHelper };
    },
    components: {
      MiniQuotation: function () {
        return "./@tencent/stock-detail-quotation/Quotation.js".then(function (
          t
        ) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1xdW90YXRpb24vUXVvdGF0aW9uLnZ1ZQ;
        });
      },
      ChartWrapper: function () {
        return "./components/ChartWrapper.js".then(function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvQ2hhcnRXcmFwcGVyLnZ1ZQ;
        });
      },
    },
    data: function () {
      return {
        width: 0,
        height: 0,
        hqBridge: new u.HQBridge(),
        skin: "white",
        dataReady: !1,
        landscape: !0,
        stockName: "",
        stockOverView: {},
        query: null,
        tabkey: "",
        isPageHidden: !1,
      };
    },
    computed: {
      market: function () {
        var t, e, a;
        return (
          (null == (t = this.query) ? void 0 : t.market) ||
          ((
            null == (a = null == (e = this.query) ? void 0 : e.scode)
              ? void 0
              : a.startsWith("5")
          )
            ? 1
            : 0)
        );
      },
      scode: function () {
        var t;
        return null == (t = this.query) ? void 0 : t.scode;
      },
      stockType: function () {
        var t, e;
        return null ==
          (e = null == (t = this.stockOverView) ? void 0 : t.secuInfo)
          ? void 0
          : e.stocktype;
      },
      isIndex: function () {
        return d.utils.isIndex(this.stockType);
      },
      isPlate: function () {
        return d.utils.isHSPlate(this.market);
      },
      queryTabKey: function () {
        return this.query ? this.query.tabkey : "";
      },
      formattedCode: function () {
        return d.utils.trimScode(this.scode);
      },
    },
    created: function () {
      var t = this;
      h.setSkin(function (e) {
        t.skin = "black" === e ? "black" : "white";
      });
    },
    onLoad: function (t) {
      var e = this;
      t.wxParamData && Object.assign(t, Tool.handleWXParamData(t.wxParamData)),
        setTimeout(function () {
          var a =
              (u.wx$1.getWindowInfo && u.wx$1.getWindowInfo()) ||
              u.wx$1.getSystemInfoSync(),
            n = a.screenWidth,
            o = a.screenHeight;
          (e.width = Math.max(o, n)),
            (e.height = Math.min(n, o)),
            (e.query = t),
            (e.tabkey = e.query.tabkey);
        }, 500);
    },
    onUnload: function () {
      this.isPageHidden = !0;
      var t = getCurrentPages(),
        e = t[t.length - 2];
      null == e || e.setData({ needRepaintChart: !0, tabkey: this.tabkey });
    },
    onHide: function () {
      this.isPageHidden = !0;
    },
    onShow: function () {
      this.isPageHidden = !1;
    },
    methods: {
      onInitData: function (t) {
        (this.stockName = t.secu_info.stk_name),
          this.handleCallback(t),
          (this.dataReady = !0);
      },
      onUpdateData: function (t) {
        this.handleCallback(t);
      },
      handleCallback: function (t) {
        var e, o;
        this.stockOverView =
          ((e = c(c(c({}, this.stockOverView), t.secu_quote), t.secu_info)),
          (o = { secuInfo: t.secu_info, fiveTrans: t.five_trans }),
          a(e, n(o)));
      },
      getMarketState: function (t) {
        var e;
        null == (e = this.$refs.quotation) || e.getMarketState(t);
      },
      getExtraInfo: function (t) {
        var e;
        null == (e = this.$refs.quotation) || e.getExtraInfo(t);
      },
      getUSPanData: function (t) {
        var e;
        null == (e = this.$refs.quotation) || e.getUSPanData(t);
      },
      getZDP: function (t) {
        var e;
        null == (e = this.$refs.quotation) || e.getZDP(t);
      },
      getPlateIntro: function (t) {
        this.plateIntro = t;
      },
      closeLandscape: function () {
        var t = getApp().globalData.systemInfo || {},
          e = t.SDKVersion,
          a = t.system.indexOf("iOS") >= 0,
          n = u.dist.versionCompare.isVersionLower(e, "2.31.1");
        a && n
          ? u.wx$1.redirectTo({
              url: "/pages/quote/empty",
              fail: function (t) {},
            })
          : getCurrentPages().length > 1
          ? u.wx$1.navigateBack()
          : u.wx$1.switchTab({ url: "/pages/index/index" });
      },
      switchChart: function (t) {
        this.tabkey = t;
      },
    },
    onShareAppMessage: function () {
      return {
        title: "".concat(this.stockName, "(").concat(this.formattedCode, ")"),
        path: "/pages/quote/rotateDetail?market="
          .concat(this.market, "&scode=")
          .concat(this.scode),
        mtaParams: { stockid: d.utils.getSymbol(this.market, this.scode) },
      };
    },
    onShareTimeline: function () {
      return {
        title: "".concat(this.stockName, "(").concat(this.formattedCode, ")"),
        path: "/pages/quote/rotateDetail?market="
          .concat(this.market, "&scode=")
          .concat(this.scode),
        mtaParams: { stockid: d.utils.getSymbol(this.market, this.scode) },
      };
    },
  };
Array ||
  (
    u.resolveComponent("mp-privacy-dialog") +
    u.resolveComponent("stock-privacy-dialog") +
    u.resolveComponent("MiniQuotation") +
    u.resolveComponent("ChartWrapper")
  )();
var f = u._export_sfc(p, [
  [
    "render",
    function (t, e, a, n, o, i) {
      return u.e(
        { a: t.rootFontSize, b: u.p({ "no-auto": !0 }), c: o.query },
        o.query
          ? {
              d: u.sr("quotation", "e7badb50-2"),
              e: u.o(i.onInitData, 190),
              f: u.o(i.onUpdateData, 191),
              g: u.o(i.closeLandscape, 192),
              h: u.p({
                landscape: o.landscape,
                skin: o.skin,
                market: i.market,
                scode: i.scode,
                "is-hidden": o.isPageHidden,
              }),
            }
          : {},
        { i: o.dataReady },
        o.dataReady
          ? {
              j: u.o(i.getMarketState, 193),
              k: u.o(i.getExtraInfo, 194),
              l: u.o(i.getUSPanData, 195),
              m: u.o(i.getZDP, 196),
              n: u.o(i.closeLandscape, 197),
              o: u.o(i.switchChart, 198),
              p: u.p({
                landscape: o.landscape,
                skin: o.skin,
                market: i.market,
                scode: i.scode,
                quote: o.stockOverView,
                stockType: i.stockType,
                queryTabKey: i.queryTabKey,
              }),
            }
          : {},
        { q: o.skin, r: "black" === o.skin ? 1 : "", s: o.dataReady ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-e7badb50"],
]);
(p.__runtimeHooks = 6), wx.createPage(f);
