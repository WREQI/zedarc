var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (e, n, a) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  l = function (e, t) {
    for (var a in t || (t = {})) o.call(t, a) && s(e, a, t[a]);
    if (i) {
      var r,
        l = n(i(t));
      try {
        for (l.s(); !(r = l.n()).done; ) {
          a = r.value;
          u.call(t, a) && s(e, a, t[a]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  f = function (e, n) {
    return a(e, r(n));
  },
  c = require("../../../../../../../common/vendor.js"),
  d = {
    components: {
      semiMask: function () {
        return "../../../../../../asyncCom/@tencent/st-semi-modal/index.js";
      },
      TradeComponent: function () {
        return "./trade.js";
      },
      ConfirmComponent: function () {
        return "./confirm.js";
      },
      FinishComponent: function () {
        return "./finish.js";
      },
      InfoModal: function () {
        return "../InfoModal.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      gameId: { type: String, default: "" },
      isNewuser: { type: Boolean, default: !1 },
      feeFeatureEnabled: { type: Boolean, default: !1 },
    },
    setup: function (n, t) {
      var a,
        r = t.emit,
        i = c.ref(!1),
        o = c.ref("trade"),
        u = c.ref({}),
        s =
          (null == (a = c.getCurrentInstance()) ? void 0 : a.proxy) ||
          c.getCurrentInstance(),
        d = c.ref({ status: 0 }),
        m = c.ref({ status: 0, errorMsg: "" }),
        p = null;
      function v() {
        var e;
        null == (e = null == s ? void 0 : s.$refs) ||
          e.semimask.closeSemimask(),
          0 === d.value.status &&
            r("airecommendData", f(l({}, d.value), { market: d.value.market }));
      }
      c.onDeactivated(function () {
        var e;
        i.value &&
          (null == (e = null == s ? void 0 : s.$refs) ||
            e.semimask.closeSemimask(),
          (i.value = !1),
          clearTimeout(p),
          (p = null));
      }),
        c.onBeforeUnmount(function () {
          p && (clearTimeout(p), (p = null));
        });
      var k = ["mpwzq", "wzqlight"].includes("mpweapp"),
        y = c.ref(null);
      return {
        showMiniApply: i,
        closeSemimask: function () {
          c.StockBridge.report("hq.mini_apply.close_click"),
            p && (clearTimeout(p), (p = null)),
            (p = setTimeout(function () {
              (i.value = !1), (p = null);
            }, 300)),
            0 === d.value.status
              ? (r(
                  "airecommendData",
                  f(l({}, d.value), { market: d.value.market })
                ),
                c.StockBridge.setSession("mocktrade_aimini_order", {
                  status: "pending",
                  name: d.value.name,
                }))
              : (c.StockBridge.setSession("mocktrade_aimini_order", {
                  status: "finish",
                  name: d.value.name,
                }),
                r("finishOrder"));
        },
        tradeType: o,
        backBtnClick: function () {
          o.value = "trade";
        },
        changeTradeType: function (e, n) {
          (o.value = e), "confirm" === e && (u.value = n);
        },
        confirmData: u,
        submitOrderFinish: function (e) {
          "0" == e.retcode
            ? ((d.value = f(l({}, d.value), { status: 1 })),
              (m.value = f(l({}, e), { status: 1 })))
            : (m.value = f(l({}, e), { status: 0 })),
            (o.value = "finish");
        },
        finishData: m,
        closeMiniApply: v,
        backTrade: function () {
          v(), r("airecommendData", l({}, m.value));
        },
        getDataReady: function (e) {
          var n,
            t,
            a,
            p = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (
            ((d.value = f(l({}, e), { status: 0 })),
            (o.value = "trade"),
            (u.value = {}),
            (m.value = { status: 0, errorMsg: "" }),
            (null == (t = null == (n = s.$refs) ? void 0 : n.tradeComponentRef)
              ? void 0
              : t.resetTradeState) &&
              s.$refs.tradeComponentRef.resetTradeState(),
            (null == (a = s.$refs) ? void 0 : a.semimask) &&
              (s.$refs.semimask.showContent = !0),
            p)
          ) {
            var v = c.StockBridge.getSession("mocktrade_aimini_order");
            if ((null == v ? void 0 : v.name) === e.name) {
              if (
                (sessionStorage.removeItem("mocktrade_aimini_order"),
                "finish" === v.status)
              )
                return;
              if ("pending" === v.status)
                return void r(
                  "airecommendData",
                  f(l({}, d.value), { market: d.value.market })
                );
            }
          }
          (i.value = !0),
            c.StockBridge.report("trade.mocktrade.aiminiapply.brow");
        },
        showStockTrade: function (n) {
          return (
            (t = this),
            null,
            (a = e().mark(function t() {
              var a, r;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          !n ||
                          !(null ==
                          (r =
                            null == (a = s.$refs)
                              ? void 0
                              : a.tradeComponentRef)
                            ? void 0
                            : r.loadAndShowStockTrade)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          s.$refs.tradeComponentRef.loadAndShowStockTrade(n)
                        );
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        (e.prev = 6),
                          (e.t0 = e.catch(1)),
                          c.StockBridge.aegisReportEvent(
                            "NEW_USER_RECOMMEND_STOCK_TRADE_ERROR"
                          );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[1, 6]]
              );
            })),
            new Promise(function (e, n) {
              var r = function (e) {
                  try {
                    o(a.next(e));
                  } catch (e) {
                    n(e);
                  }
                },
                i = function (e) {
                  try {
                    o(a.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                o = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(r, i);
                };
              o((a = a.apply(t, null)).next());
            })
          );
          var t, a;
        },
        fundInsufficientData: y,
        onFundInsufficient: function (e) {
          y.value = e;
        },
        isLite: k,
      };
    },
  };
Array ||
  (
    c.resolveComponent("TradeComponent") +
    c.resolveComponent("ConfirmComponent") +
    c.resolveComponent("FinishComponent") +
    c.resolveComponent("semi-mask") +
    c.resolveComponent("InfoModal")
  )();
var m = c._export_sfc(d, [
  [
    "render",
    function (e, n, t, a, r, i) {
      return c.e(
        { a: "confirm" === a.tradeType },
        "confirm" === a.tradeType
          ? {
              b: c.o(function () {
                return a.backBtnClick && a.backBtnClick.apply(a, arguments);
              }, 4525),
            }
          : {},
        {
          c: c.o(function () {
            return a.closeMiniApply && a.closeMiniApply.apply(a, arguments);
          }, 4526),
          d: c.sr("tradeComponentRef", "5e0720fa-1,5e0720fa-0"),
          e: c.o(a.changeTradeType, 4527),
          f: c.o(a.getDataReady, 4528),
          g: c.o(a.onFundInsufficient, 4529),
          h: "trade" === a.tradeType,
          i: c.p({
            gameId: t.gameId,
            feeFeatureEnabled: t.feeFeatureEnabled,
            visible: a.showMiniApply && "trade" === a.tradeType,
            isNewuser: t.isNewuser,
          }),
          j: "confirm" === a.tradeType,
          k: c.o(a.submitOrderFinish, 4530),
          l: c.p({
            confirmData: a.confirmData,
            feeFeatureEnabled: t.feeFeatureEnabled,
          }),
          m: "finish" === a.tradeType,
          n: c.o(a.backTrade, 4531),
          o: c.o(a.closeSemimask, 4532),
          p: c.p({ finishData: a.finishData }),
          q: c.sr("semimask", "5e0720fa-0"),
          r: a.showMiniApply,
          s: c.o(a.closeSemimask, 4533),
          t: t.feeFeatureEnabled,
        },
        t.feeFeatureEnabled
          ? c.e(
              { v: a.fundInsufficientData },
              a.fundInsufficientData
                ? {
                    w: c.t(a.fundInsufficientData.diff),
                    x: c.t(a.fundInsufficientData.fee),
                    y: c.t(a.fundInsufficientData.maxBuy),
                  }
                : {},
              {
                z: c.o(function (e) {
                  return (a.fundInsufficientData = null);
                }, 4534),
                A: c.p({ visible: !!a.fundInsufficientData, isLite: a.isLite }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5e0720fa"],
]);
wx.createComponent(m);
