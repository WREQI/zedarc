var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (e, a, n) {
    return a in e
      ? t(e, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[a] = n);
  },
  l = function (t, l) {
    for (var i in l || (l = {})) n.call(l, i) && o(t, i, l[i]);
    if (a) {
      var u,
        d = e(a(l));
      try {
        for (d.s(); !(u = d.n()).done; ) {
          i = u.value;
          r.call(l, i) && o(t, i, l[i]);
        }
      } catch (e) {
        d.e(e);
      } finally {
        d.f();
      }
    }
    return t;
  },
  i = require("../@tencent/st-quote-gray-market/utils/transferMarket.js"),
  u = require("../../../common/vendor.js"),
  d = (function (e) {
    return (
      (e.STOCK = "stock"),
      (e.WZQLIGHT = "wzqlight"),
      (e.MPZXG = "mpzxg"),
      (e.MPWZQ = "mpwzq"),
      e
    );
  })(d || {}),
  c = (function (e) {
    return (e.LIGHT = "light"), (e.DARK = "dark"), e;
  })(c || {}),
  s = {
    scode: { type: String, default: "", required: !0 },
    market: { type: String, default: "", required: !0 },
    stockName: { type: String, default: "" },
    stockType: { type: String, default: "", required: !1 },
    visible: { type: Boolean, default: !1 },
    isTradeAnimate: { type: Boolean, default: !1 },
    theme: { type: String, default: c.LIGHT, required: !1 },
    platform: { type: String, default: "", required: !1 },
    extraParams: {
      type: Object,
      default: function () {
        return {};
      },
      required: !1,
    },
  },
  f = l({}, s),
  p = ".embedded-chart",
  h = {
    name: "HalfChartScreenShell",
    components: {
      HalfScreenChart: function () {
        return "../@tencent/half-screen-chart/dist/mp/HalfScreenChart.js";
      },
    },
    props: l({}, f),
    setup: function (e) {
      var t = u.getCurrentInstance().proxy,
        a = u.ref(null),
        n = u.toRefs(e.extraParams || {}).brokerCode,
        r = u.computed(function () {
          return i.transferMarketToTrade(e.market);
        }),
        o = u.ref(!1),
        l = u.ref(!1);
      function d(e) {
        e &&
          ((o.value = !1),
          (l.value = !1),
          e !== u.BROKER_CODE.ZHONGJINCAIFU
            ? e !== u.BROKER_CODE.ZHONGXINJIANTOU
              ? u.mpReporter.reportEvent("UNKNOWN_BROKER_CODE_HALFCHART", {
                  ext3: { broker_code: e },
                })
              : (l.value = !0)
            : (o.value = !0));
      }
      return (
        u.watch(
          function () {
            return n.value;
          },
          function (e) {
            d(e);
          },
          { immediate: !0 }
        ),
        u.onMounted(function () {
          t.$emit("mounted");
        }),
        {
          halfScreenChartRef: a,
          isZhongJinCaiFu: o,
          isZhongXinJianTou: l,
          finalMarket: r,
          handleClose: function () {
            d(n.value), t.$emit("tradeEmbeddedHide");
          },
          handleUnload: function () {
            var e,
              a = t.selectComponent(p);
            null == (e = null == a ? void 0 : a.handleUnload) || e.call(a);
          },
          handleHide: function () {
            var e,
              a = t.selectComponent(p);
            null == (e = null == a ? void 0 : a.handleHide) || e.call(a);
          },
          handleShow: function () {
            var e,
              a = t.selectComponent(p);
            null == (e = null == a ? void 0 : a.handleShow) || e.call(a);
          },
          handleResetStore: function () {
            var e,
              a = t.selectComponent(p);
            null == (e = null == a ? void 0 : a.resetStore) || e.call(a);
          },
          handleChartDataReady: function (e) {
            var n, r;
            null ==
              (r =
                null == (n = a.value)
                  ? void 0
                  : n.handleDataWithChartDataReady) || r.call(n),
              t.$emit("onChartDataReady", e);
          },
          preventTouchMove: function () {},
        }
      );
    },
  };
Array || u.resolveComponent("HalfScreenChart")();
var m = u._export_sfc(h, [
  [
    "render",
    function (e, t, a, n, r, o) {
      return u.e(
        { a: n.isZhongJinCaiFu },
        n.isZhongJinCaiFu
          ? {
              b: e.scode,
              c: n.finalMarket,
              d: e.stockName,
              e: e.visible,
              f: u.o(function () {
                return (
                  n.handleChartDataReady &&
                  n.handleChartDataReady.apply(n, arguments)
                );
              }, 2009),
              g: u.o(function () {
                return n.handleClose && n.handleClose.apply(n, arguments);
              }, 2010),
            }
          : {},
        { h: n.isZhongXinJianTou },
        n.isZhongXinJianTou
          ? {
              i: e.scode,
              j: n.finalMarket,
              k: e.stockName,
              l: e.visible,
              m: u.o(function () {
                return (
                  n.handleChartDataReady &&
                  n.handleChartDataReady.apply(n, arguments)
                );
              }, 2011),
              n: u.o(function () {
                return n.handleClose && n.handleClose.apply(n, arguments);
              }, 2012),
            }
          : {},
        {
          o: u.sr("halfScreenChartRef", "3f3778d3-0"),
          p: u.p({
            visible: e.visible,
            scode: e.scode,
            market: e.market,
            "stock-name": e.stockName,
            "stock-type": e.stockType,
            "is-trade-animate": e.isTradeAnimate,
            "extra-params": e.extraParams,
            platform: e.platform,
          }),
          q: e.visible,
        }
      );
    },
  ],
  ["__scopeId", "data-v-3f3778d3"],
]);
wx.createComponent(m);
var v = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.CommonProps = s),
  (exports.EMBEDDED_CHART_SELECTOR = ".embedded-chart"),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvSGFsZkNoYXJ0U2NyZWVuU2hlbGwudnVl =
    v),
  (exports.PlatformEnum = d);
