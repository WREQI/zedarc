var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  a = require("../../../../common/vendor.js"),
  c = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  s = {
    name: "EtfZoneBonusRoutePage",
    components: {
      DividendDetail: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/dividendPages/DividendDetail.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLWV0Zi9kaXZpZGVuZFBhZ2VzL0RpdmlkZW5kRGV0YWlsLnZ1ZQ;
          }
        );
      },
    },
    provide: function () {
      return {
        stockBridge: c.StockBridge,
        stockRouter: a.StockRouter,
        hqBridge: c.StockBridge,
      };
    },
    data: function () {
      return { query: {}, skin: a.wx$1.getStorageSync("user/skin") || "white" };
    },
    onLoad: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.query = (function (t, a) {
        for (var c in a || (a = {})) n.call(a, c) && i(t, c, a[c]);
        if (r) {
          var s,
            l = e(r(a));
          try {
            for (l.s(); !(s = l.n()).done; ) {
              c = s.value;
              o.call(a, c) && i(t, c, a[c]);
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }
        return t;
      })({}, t);
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.$refs.etfPage && e.$refs.etfPage.tabActivated();
      });
    },
    onPageScroll: function (e) {
      var t,
        r,
        n,
        o = null != (t = null == e ? void 0 : e.scrollTop) ? t : 0;
      null ==
        (n = null == (r = this.$refs.etfPage) ? void 0 : r.setScrollTop) ||
        n.call(r, o),
        a.scrollDepthStat.onScroll(o, this.__route__);
    },
    onShow: function () {
      this.$refs.etfPage && this.$refs.etfPage.tabActivated();
    },
    onHide: function () {
      this.$refs.etfPage && this.$refs.etfPage.tabDeactivated();
    },
  };
Array ||
  (
    a.resolveComponent("DividendDetail") +
    a.resolveComponent("mp-privacy-dialog") +
    a.resolveComponent("stock-privacy-dialog")
  )();
var l = a._export_sfc(s, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return {
        a: e.rootFontSize,
        b: a.sr("etfPage", "a0356d50-0"),
        c: o.skin,
        d: a.p({ query: o.query }),
        e: a.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(s.__runtimeHooks = 1), wx.createPage(l);
