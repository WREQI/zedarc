var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  o = function (e, t, a) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
  },
  s = require("../../../../../../common/vendor.js"),
  d = {
    name: "HalfScreenTrade",
    components: {
      TradeSkeleton: function () {
        return "./components/TradeSkeleton.js";
      },
    },
    props: (function (r, s) {
      for (var d in s || (s = {})) a.call(s, d) && o(r, d, s[d]);
      if (t) {
        var i,
          l = e(t(s));
        try {
          for (l.s(); !(i = l.n()).done; ) {
            d = i.value;
            n.call(s, d) && o(r, d, s[d]);
          }
        } catch (e) {
          l.e(e);
        } finally {
          l.f();
        }
      }
      return r;
    })({}, require("../../../../components/HalfTradeScreenShell.js").PropsMp),
    setup: function (e) {
      var r = s.ref(!1),
        t = s.toRefs(e.extraParams).isDataFetched,
        a = s.ref(!0);
      return {
        hasMultiBroker: r,
        isDataFetched: t,
        isShowTradeSkeleton: a,
        handleDataWithTradeDataReady: function () {
          a.value = !1;
        },
      };
    },
  };
Array || s.resolveComponent("TradeSkeleton")();
var i = s._export_sfc(d, [
  [
    "render",
    function (e, r, t, a, n, o) {
      return s.e(
        {
          a: a.isShowTradeSkeleton,
          b: s.p({
            "stock-name": e.stockName,
            scode: e.scode,
            market: e.market,
            "entrust-type": e.entrustType,
            dqj: e.dqj,
            "extra-params": e.extraParams,
            platform: e.platform,
            "trade-mode": e.tradeMode,
          }),
          c: a.isDataFetched,
        },
        (a.isDataFetched, {}),
        {
          d: s.n(a.isShowTradeSkeleton ? "embedded-wrapper-skeleton" : ""),
          e: a.isShowTradeSkeleton ? "" : "initial",
          f: e.visible,
          g: s.n(e.isTradeAnimate ? "need-animate" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-4f871a21"],
]);
wx.createComponent(i);
