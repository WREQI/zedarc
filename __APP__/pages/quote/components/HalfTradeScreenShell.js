var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  d = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  i = function (a, t) {
    for (var r in t || (t = {})) d.call(t, r) && l(a, r, t[r]);
    if (n) {
      var i,
        u = e(n(t));
      try {
        for (u.s(); !(i = u.n()).done; ) {
          r = i.value;
          o.call(t, r) && l(a, r, t[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return a;
  },
  u = require("../quote.js"),
  s = require("../@tencent/st-quote-gray-market/utils/transferMarket.js"),
  c = require("../../../common/vendor.js"),
  p = {
    scode: { type: String, default: "", required: !0 },
    market: { type: String, default: "", required: !0 },
    stockName: { type: String, default: "", required: !0 },
    stockType: { type: String, default: "" },
    dqj: { type: String, default: "", required: !0 },
    entrustType: { type: String, required: !1, default: "" },
    tradeMode: { type: String, default: "STANDARD", required: !1 },
    extraParams: {
      type: Object,
      default: function () {
        return {};
      },
      required: !1,
    },
    theme: { type: String, default: u.ThemeEnum.LIGHT, required: !1 },
    platform: { type: String, default: "", required: !1 },
  },
  f = t(
    i({}, p),
    r({
      embeddedPrice: {
        type: Object,
        default: function () {
          return { price: "" };
        },
        required: !1,
      },
      isMarginTradeAble: { type: Boolean, default: !1, required: !1 },
      visible: { type: Boolean, default: !1, required: !1 },
      isTradeAnimate: { type: Boolean, default: !1, required: !1 },
      tradeParams: { type: String, default: "", required: !1 },
      abtInfo: {
        type: Object,
        default: function () {
          return {};
        },
        required: !1,
      },
    })
  ),
  y = i({}, f),
  m = ".embedded-stock",
  h = {
    name: "HalfTradeScreenShell",
    components: {
      HalfScreenTrade: function () {
        return "../@tencent/half-screen-trade/dist/mp/HalfScreenTrade.js";
      },
    },
    props: i({}, y),
    setup: function (e) {
      var a = c.getCurrentInstance().proxy,
        t = c.ref(null),
        r = c.toRefs(e.extraParams).brokerCode,
        n = c.computed(function () {
          return s.transferMarketToTrade(e.market);
        }),
        d = c.ref(!1),
        o = c.ref(!1),
        l = c.ref(!1),
        i = c.ref(!1),
        u = c.ref(!1),
        p = c.ref(!1),
        f = c.ref(!1);
      function y(e) {
        e &&
          ((d.value = !1),
          (o.value = !1),
          (l.value = !1),
          (i.value = !1),
          (u.value = !1),
          (p.value = !1),
          (f.value = !1),
          e !== c.BROKER_CODE.ZHAOSHANG
            ? e !== c.BROKER_CODE.HUALIN
              ? e !== c.BROKER_CODE.GUOXIN
                ? e !== c.BROKER_CODE.GUOJIN
                  ? e !== c.BROKER_CODE.ZHONGJINCAIFU
                    ? e !== c.BROKER_CODE.GUANGFA
                      ? e !== c.BROKER_CODE.ZHONGXINJIANTOU
                        ? c.mpReporter.reportEvent("UNKNOWN_BROKER_CODE", {
                            ext3: { broker_code: e },
                          })
                        : (f.value = !0)
                      : (p.value = !0)
                    : (u.value = !0)
                  : (i.value = !0)
                : (l.value = !0)
              : (o.value = !0)
            : (d.value = !0));
      }
      return (
        c.watch(
          function () {
            return r.value;
          },
          function (e) {
            y(e);
          },
          { immediate: !0 }
        ),
        c.onMounted(function () {
          a.$emit("mounted");
        }),
        {
          halfScreenTradeRef: t,
          isZhaoShang: d,
          isHuaLin: o,
          isGuoXin: l,
          isGuoJin: i,
          isZhongJinCaiFu: u,
          isGuangFa: p,
          isZhongXinJianTou: f,
          finalMarket: n,
          handleClose: function () {
            y(r.value), a.$emit("tradeEmbeddedHide");
          },
          handleUnload: function () {
            var e,
              t = a.selectComponent(m);
            null == (e = null == t ? void 0 : t.handleUnload) || e.call(t);
          },
          handleHide: function () {
            var e,
              t = a.selectComponent(m);
            null == (e = null == t ? void 0 : t.handleHide) || e.call(t);
          },
          handleShow: function () {
            var e,
              t = a.selectComponent(m);
            null == (e = null == t ? void 0 : t.handleShow) || e.call(t);
          },
          handleResetStore: function () {
            var e,
              t = a.selectComponent(m);
            null == (e = null == t ? void 0 : t.resetStore) || e.call(t);
          },
          handleResetDailog: function () {
            var e,
              t = a.selectComponent(m);
            null == (e = null == t ? void 0 : t.resetDailog) || e.call(t);
          },
          handleTradeDataReady: function (e) {
            var r, n;
            null ==
              (n =
                null == (r = t.value)
                  ? void 0
                  : r.handleDataWithTradeDataReady) || n.call(r),
              a.$emit("onTradeDataReady", e);
          },
        }
      );
    },
  };
Array || c.resolveComponent("HalfScreenTrade")();
var v = c._export_sfc(h, [
  [
    "render",
    function (e, a, t, r, n, d) {
      return c.e(
        { a: r.isZhaoShang },
        r.isZhaoShang
          ? {
              b: e.scode,
              c: r.finalMarket,
              d: e.stockName,
              e: e.entrustType,
              f: e.stockType,
              g: e.visible,
              h: e.embeddedPrice,
              i: e.dqj,
              j: e.tradeMode,
              k: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 1995),
              l: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 1996),
            }
          : {},
        { m: r.isHuaLin },
        r.isHuaLin
          ? {
              n: e.scode,
              o: r.finalMarket,
              p: e.stockName,
              q: e.entrustType,
              r: e.stockType,
              s: e.visible,
              t: e.dqj,
              v: e.embeddedPrice,
              w: e.tradeMode,
              x: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 1997),
              y: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 1998),
            }
          : {},
        { z: r.isGuoXin },
        r.isGuoXin
          ? {
              A: e.scode,
              B: r.finalMarket,
              C: e.stockName,
              D: e.entrustType,
              E: e.visible,
              F: e.dqj,
              G: e.embeddedPrice,
              H: e.stockType,
              I: e.tradeMode,
              J: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 1999),
              K: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2e3),
            }
          : {},
        { L: r.isGuoJin },
        r.isGuoJin
          ? {
              M: e.scode,
              N: r.finalMarket,
              O: e.stockName,
              P: e.entrustType,
              Q: e.visible,
              R: e.dqj,
              S: e.embeddedPrice,
              T: e.stockType,
              U: e.tradeMode,
              V: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 2001),
              W: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2002),
            }
          : {},
        { X: r.isZhongJinCaiFu },
        r.isZhongJinCaiFu
          ? {
              Y: e.scode,
              Z: r.finalMarket,
              aa: e.stockName,
              ab: e.entrustType,
              ac: e.visible,
              ad: e.dqj,
              ae: e.embeddedPrice,
              af: e.stockType,
              ag: e.tradeMode,
              ah: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 2003),
              ai: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2004),
            }
          : {},
        { aj: r.isZhongXinJianTou },
        r.isZhongXinJianTou
          ? {
              ak: e.scode,
              al: r.finalMarket,
              am: e.stockName,
              an: e.entrustType,
              ao: e.visible,
              ap: e.dqj,
              aq: e.embeddedPrice,
              ar: e.stockType,
              as: e.tradeMode,
              at: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 2005),
              av: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2006),
            }
          : {},
        { aw: r.isGuangFa },
        r.isGuangFa
          ? {
              ax: e.scode,
              ay: r.finalMarket,
              az: e.stockName,
              aA: e.entrustType,
              aB: e.visible,
              aC: e.dqj,
              aD: e.embeddedPrice,
              aE: e.stockType,
              aF: e.tradeMode,
              aG: c.o(function () {
                return (
                  r.handleTradeDataReady &&
                  r.handleTradeDataReady.apply(r, arguments)
                );
              }, 2007),
              aH: c.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2008),
            }
          : {},
        {
          aI: c.sr("halfScreenTradeRef", "341aa70e-0"),
          aJ: c.p({
            visible: e.visible,
            scode: e.scode,
            market: r.finalMarket,
            "stock-name": e.stockName,
            "entrust-type": e.entrustType,
            "embedded-price": e.embeddedPrice,
            dqj: e.dqj,
            "stock-type": e.stockType,
            "trade-mode": e.tradeMode,
            "extra-params": e.extraParams,
            "abt-info": e.abtInfo,
            platform: e.platform,
          }),
        }
      );
    },
  ],
]);
wx.createComponent(v);
var T = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.CommonProps = p),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvSGFsZlRyYWRlU2NyZWVuU2hlbGwudnVl =
    T),
  (exports.PropsMp = y);
