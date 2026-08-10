var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (e, n, a) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  l = require("../../../../../../common/vendor.js"),
  c = require("../../../../components/HalfChartScreenShell.js"),
  i = {
    name: "HalfScreenChart",
    components: {
      ChartSkeleton: function () {
        return "./components/ChartSkeleton.js";
      },
    },
    props: (function (t, l) {
      for (var c in l || (l = {})) a.call(l, c) && o(t, c, l[c]);
      if (n) {
        var i,
          s = e(n(l));
        try {
          for (s.s(); !(i = s.n()).done; ) {
            c = i.value;
            r.call(l, c) && o(t, c, l[c]);
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
      }
      return t;
    })({}, c.CommonProps),
    setup: function (e) {
      var t = l.getCurrentInstance().proxy || l.getCurrentInstance(),
        n = l.toRefs(e.extraParams).isDataFetched,
        a = l.ref(!0);
      function r() {
        var e;
        return null == (e = t.selectComponent)
          ? void 0
          : e.call(t, c.EMBEDDED_CHART_SELECTOR);
      }
      return {
        isDataFetched: n,
        isShowChartSkeleton: a,
        handleShow: function () {
          var e,
            t = r();
          null == (e = null == t ? void 0 : t.handleShow) || e.call(t);
        },
        handleHide: function () {
          var e,
            t = r();
          null == (e = null == t ? void 0 : t.handleHide) || e.call(t);
        },
        handleUnload: function () {
          var e,
            t = r();
          null == (e = null == t ? void 0 : t.handleUnload) || e.call(t);
        },
        handleClose: function () {
          t.$emit("tradeEmbeddedHide");
        },
        handleDataWithChartDataReady: function () {
          a.value = !1;
        },
        handleResetStore: function () {
          var e,
            t = r();
          null == (e = null == t ? void 0 : t.resetStore) || e.call(t);
        },
        handleResetDailog: function () {
          var e,
            t = r();
          null == (e = null == t ? void 0 : t.resetDailog) || e.call(t);
        },
      };
    },
  };
Array || l.resolveComponent("ChartSkeleton")();
var s = l._export_sfc(i, [
  [
    "render",
    function (e, t, n, a, r, o) {
      return l.e(
        {
          a: a.isShowChartSkeleton,
          b: l.p({
            scode: e.scode,
            market: e.market,
            "stock-name": e.stockName,
            "stock-type": e.stockType,
            platform: e.platform,
            theme: e.theme,
            "extra-params": e.extraParams,
          }),
          c: a.isDataFetched,
        },
        (a.isDataFetched, {}),
        {
          d: l.n(a.isShowChartSkeleton ? "chart-wrapper-skeleton" : ""),
          e: a.isShowChartSkeleton ? "" : "initial",
          f: e.visible,
          g: l.n(e.isTradeAnimate ? "need-animate" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-49f5f345"],
]);
wx.createComponent(s);
