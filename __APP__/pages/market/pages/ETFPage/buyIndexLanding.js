var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  a = function (e, r, o) {
    return r in e
      ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o);
  },
  l = require("../../../../common/vendor.js"),
  i = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  u = {
    name: "BuyIndexLandingRoutePage",
    components: {
      BuyIndexLandingPage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/buyIndexPages/BuyIndexLandingPage.js";
      },
    },
    provide: function () {
      return {
        hqBridge: i.StockBridge,
        stockBridge: i.StockBridge,
        stockRouter: l.StockRouter,
      };
    },
    data: function () {
      return { query: {} };
    },
    onLoad: function () {
      var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.query = (function (n, l) {
        for (var i in l || (l = {})) o.call(l, i) && a(n, i, l[i]);
        if (r) {
          var u,
            c = e(r(l));
          try {
            for (c.s(); !(u = c.n()).done; ) {
              i = u.value;
              t.call(l, i) && a(n, i, l[i]);
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
        return n;
      })({}, n);
    },
    onShow: function () {
      var e, n;
      null ==
        (n =
          null == (e = this.$refs.buyIndexLandingPageRef)
            ? void 0
            : e.handlePageShow) || n.call(e);
    },
    onHide: function () {
      var e, n;
      null ==
        (n =
          null == (e = this.$refs.buyIndexLandingPageRef)
            ? void 0
            : e.handlePageHide) || n.call(e);
    },
    onUnload: function () {
      var e, n;
      null ==
        (n =
          null == (e = this.$refs.buyIndexLandingPageRef)
            ? void 0
            : e.handlePageHide) || n.call(e);
    },
    onPageScroll: function (e) {
      var n,
        r,
        o,
        t = null != (n = null == e ? void 0 : e.scrollTop) ? n : 0;
      null ==
        (o =
          null == (r = this.$refs.buyIndexLandingPageRef)
            ? void 0
            : r.setScrollTop) || o.call(r, t),
        l.scrollDepthStat.onScroll(t, this.__route__);
    },
  };
Array ||
  (
    l.resolveComponent("BuyIndexLandingPage") +
    l.resolveComponent("mp-privacy-dialog") +
    l.resolveComponent("stock-privacy-dialog")
  )();
var c = l._export_sfc(u, [
  [
    "render",
    function (e, n, r, o, t, a) {
      return {
        a: e.rootFontSize,
        b: l.sr("buyIndexLandingPageRef", "0ed04c9f-0"),
        c: l.p({ query: t.query }),
        d: l.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(u.__runtimeHooks = 1), wx.createPage(c);
