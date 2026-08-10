var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = function (e, t, n) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../../common/vendor.js"),
  r = require("../../../stock-hq-data/index.js"),
  a = require("../../node-modules/@tencent/st-tools/dist/index.js"),
  o = require("../../hooks/useWatchlist.js"),
  i = require("../../global-invest/service/index.js"),
  c = require("../../utils/common.js"),
  u = require("../hooks/useViewportWidth.js"),
  d = "ITI00p000a122",
  l = ["autoInvestBrow", "autoInvestClick", "buyBrow", "buyClick"],
  s = ["cardClick", "buyClick", "autoInvestClick", "watchlistAddClick"],
  m = { rise: "rise", drop: "drop", equal: "equal" },
  f = Math.round(109.8),
  p = "bg-rise",
  h = "bg-drop",
  v = {
    conservative: {
      cardBrow: "newbie_entry_recommend_stable_layout_brow",
      cardClick: "newbie_preference_stable_layout_click",
      autoInvestBrow: "newbie_intro_stable_layout_invest_brow",
      autoInvestClick: "newbie_intro_stable_layout_invest_click",
      buyBrow: "newbie_entry_preference_stable_layout_brow",
      buyClick: "newbie_intro_stable_layout_buy_click",
      watchlistAddClick: "newbie_preferred_stable_layout_add_click",
    },
    growth: {
      cardBrow: "newbie_entry_recommend_high_yield_brow",
      cardClick: "newbie_intro_high_yield_rec_click",
      autoInvestBrow: "newbie_preference_high_yield_invest_brow",
      autoInvestClick: "newbie_preferred_high_yield_invest_click",
      buyBrow: "newbie_guide_high_yield_products_brow",
      buyClick: "newbie_preference_high_yield_buy_click",
      watchlistAddClick: "newbie_preferred_high_yield_rec_click",
    },
  },
  _ = n.defineComponent({
    name: "BuyIndexRecommendCard",
    components: {
      StMiniMins: function () {
        return "../../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
      },
    },
    props: {
      poolType: {
        type: String,
        required: !0,
        validator: function (e) {
          return "conservative" === e || "growth" === e;
        },
      },
      recommendData: { type: Object, default: null },
      loading: { type: Boolean, default: !1 },
      error: { type: Boolean, default: !1 },
    },
    emits: ["buy", "autoinvest", "card-click"],
    setup: function (_, y) {
      var b = this,
        g = y.emit,
        k = n.getCurrentInstance(),
        w = ["mpwzq", "mpweapp"].includes("mpweapp"),
        x =
          !w &&
          "undefined" != typeof navigator &&
          a.dist.detect(navigator.userAgent).env.IS_ZXG,
        C = n.inject("buyIndexTracking", null),
        D = n.inject("hqBridge", null),
        B = n.ref(""),
        I = n.ref(!1),
        T = n.ref(!1),
        S = n.ref(!1),
        q = n.ref(!1),
        A = n.computed(function () {
          return "growth" === _.poolType ? "high-yield" : "stable";
        }),
        j = n.computed(function () {
          return !S.value || q.value;
        }),
        W = n.computed(function () {
          var e = _.recommendData && _.recommendData.ratioClass;
          return m[e] || "equal";
        }),
        E = n.computed(function () {
          return "growth" === _.poolType ? "博高收益" : "稳健布局";
        }),
        R = n.computed(function () {
          return (_.recommendData && _.recommendData.name) || "--";
        }),
        M = n.computed(function () {
          return (_.recommendData && _.recommendData.highlight) || "";
        }),
        N = n.computed(function () {
          return (_.recommendData && _.recommendData.ratio) || "--";
        }),
        P = n.computed(function () {
          return (_.recommendData && _.recommendData.minBuyAmount) || "--";
        }),
        G = n.computed(function () {
          return (_.recommendData && _.recommendData.symbol) || "";
        }),
        H = n.computed(function () {
          return Boolean(G.value) && "--" !== G.value;
        }),
        L = n.ref(122),
        O = n.ref(f),
        V = n.computed(function () {
          var e = _.recommendData && _.recommendData.ratioClass;
          if ("rise" !== e && "drop" !== e) return "bg-peace";
          var t =
            "greenup" ===
            (("undefined" != typeof document &&
              document.body.getAttribute("data-zdf")) ||
              "redup");
          return "rise" === e ? (t ? h : p) : t ? p : h;
        }),
        z = o.useWatchlist({
          isMp: w,
          isApp: x,
          getSdk: function () {
            return k && k.proxy && k.proxy.$sdk;
          },
          eventName: "buyindexlanding_recommend_watchlist_add",
        }),
        $ = z.isAdded,
        F = z.sync,
        X = z.toggle,
        Z = n.computed(function () {
          return $.value
            ? "https://st.gtimg.com/design/a43fa0f1baa60bd218716cc87089d2f1.png"
            : (function () {
                if (w) {
                  var e = n.StockBridge.getStorage("user/skin");
                  return "dark" === e || "black" === e;
                }
                if ("undefined" == typeof document) return !1;
                var t = document.body.getAttribute("data-theme") || "light";
                return "dark" === t || "black" === t;
              })()
            ? "https://st.gtimg.com/image/strategy/ai/check-black.svg"
            : "https://st.gtimg.com/design/f4ce9c1ca279a4d9659ae3ed4100bcfa.png";
        });
      function J(e) {
        var t = v[_.poolType][e],
          r = { etf_code: (_.recommendData && _.recommendData.etfCode) || "" };
        l.includes(e) && (r.fchannel_id_fm_i = d),
          s.includes(e) && C && Object.assign(r, C.commonClickOptions()),
          n.StockBridge.report("hq.buyindexlanding.".concat(t), r);
      }
      function K() {
        var e = _.recommendData;
        return e && e.etfCode
          ? { etfCode: e.etfCode, market: e.market, poolType: _.poolType }
          : null;
      }
      function Q(e) {
        var t = _.recommendData;
        if (!t || !t.etfCode) return null;
        var n = String(t.market || "").toLowerCase(),
          r = String(t.etfCode || "");
        return {
          fund_code: r,
          fund_id: r,
          code: r,
          symbol: String(t.symbol || (n && r ? "".concat(n).concat(r) : r)),
          market: n,
          name: t.name,
          fund_name: t.name,
          source: e,
        };
      }
      var U = n.ref(!1);
      function Y() {
        if (!U.value && !_.loading && !_.error) {
          var e = _.recommendData;
          e &&
            e.etfCode &&
            ((U.value = !0), J("cardBrow"), J("autoInvestBrow"), J("buyBrow"));
        }
      }
      return (
        n.watch(
          function () {
            return _.recommendData && _.recommendData.symbol;
          },
          function (e) {
            e && F(e);
          }
        ),
        n.watch(
          function () {
            return [
              _.recommendData && _.recommendData.etfCode,
              _.loading,
              _.error,
            ];
          },
          function () {
            Y();
          }
        ),
        n.onMounted(function () {
          return t(
            b,
            null,
            e().mark(function t() {
              var r, a, o, i, l;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((L.value = u.designPxToDevicePx(
                            122,
                            u.DESIGN_BASELINE_WIDTH_750
                          )),
                          (O.value = u.designPxToDevicePx(
                            f,
                            u.DESIGN_BASELINE_WIDTH_750
                          )),
                          (a = _.recommendData && _.recommendData.symbol) &&
                            F(a),
                          !k)
                        ) {
                          e.next = 20;
                          break;
                        }
                        if (
                          (Y(), (e.prev = 4), !(o = n.StockBridge.tradeFunc))
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (e.next = 9), o.fetchBrokerInfo();
                      case 9:
                        (i = o.isBind()),
                          (S.value = i),
                          i
                            ? ((l =
                                (null == (r = o.getCurrentBroker)
                                  ? void 0
                                  : r.call(o)) || {}),
                              (q.value = c.isTargetBroker(l.code)))
                            : ((B.value = d), (q.value = !0)),
                          (e.next = 14);
                        break;
                      case 13:
                        (S.value = !1), (q.value = !1);
                      case 14:
                        e.next = 19;
                        break;
                      case 16:
                        (e.prev = 16),
                          (e.t0 = e.catch(4)),
                          (S.value = !1),
                          (q.value = !1);
                      case 19:
                        I.value = !0;
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[4, 16]]
              );
            })
          );
        }),
        {
          modifier: A,
          showRegularInvestButton: j,
          ratioValueModifierClass: W,
          titleText: E,
          fundName: R,
          highlightText: M,
          ratioText: N,
          priceText: P,
          watchlistIcon: Z,
          chartSymbol: G,
          hasChartSymbol: H,
          chartWidth: L,
          chartHeight: O,
          trendRiseDropStyle: V,
          handleBuy: function () {
            if (!_.loading && !_.error) {
              var e = K();
              if (e && (J("buyClick"), g("buy", e), !T.value)) {
                var t = Q("buy_index_".concat(_.poolType));
                t &&
                  ((T.value = !0),
                  i.GlobalInvestService.navigateToEtfBuy(t, k, B.value).finally(
                    function () {
                      T.value = !1;
                    }
                  ));
              }
            }
          },
          handleAutoInvest: function () {
            if (!_.loading && !_.error) {
              var e = K();
              if (e) {
                J("autoInvestClick"), g("autoinvest", e);
                var t = Q("buy_index_".concat(_.poolType));
                t && i.GlobalInvestService.navigateToRegularInvest(t, B.value);
              }
            }
          },
          handleCardClick: function () {
            var e = K();
            if (e) {
              J("cardClick"), g("card-click", e);
              var t = _.recommendData;
              if (t && t.symbol) {
                var a = r.utils.splitSymbol(t.symbol) || {},
                  o = a.market,
                  i = a.scode;
                o &&
                  i &&
                  n.StockRouter.routeTo({
                    name: "stockdetail",
                    query: { market: o, scode: i },
                  });
              }
            }
          },
          handleToggleWatchlist: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var r, a, o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((r = _.recommendData && _.recommendData.symbol)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (((a = !$.value) && J("watchlistAddClick"), !x)) {
                            e.next = 16;
                            break;
                          }
                          if (
                            ((e.prev = 5),
                            (o = k && k.proxy && k.proxy.$sdk),
                            (e.t0 = o && "function" == typeof o.login),
                            !e.t0)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (e.next = 11), o.login({ window: "yes" });
                        case 11:
                          e.next = 16;
                          break;
                        case 13:
                          return (
                            (e.prev = 13),
                            (e.t1 = e.catch(5)),
                            e.abrupt(
                              "return",
                              void n.StockBridge.toast("登录失败，请登录后重试")
                            )
                          );
                        case 16:
                          return (e.prev = 16), (e.next = 19), X(r, a);
                        case 19:
                          $.value === a &&
                            (D &&
                              "function" == typeof D.busEmit &&
                              D.busEmit("toggleAdded", $.value),
                            n.StockBridge.busEmit(
                              "common-toggleAdded",
                              $.value
                            )),
                            (e.next = 24);
                          break;
                        case 22:
                          (e.prev = 22), (e.t2 = e.catch(16));
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [5, 13],
                    [16, 22],
                  ]
                );
              })
            );
          },
          syncWatchlistStatus: function () {
            var e = _.recommendData && _.recommendData.symbol;
            e && F(e);
          },
        }
      );
    },
  });
Array || n.resolveComponent("StMiniMins")();
var y = n._export_sfc(_, [
  [
    "render",
    function (e, t, r, a, o, i) {
      return n.e(
        { a: n.t(e.titleText), b: e.showRegularInvestButton },
        e.showRegularInvestButton
          ? {
              c: n.o(function () {
                return (
                  e.handleAutoInvest && e.handleAutoInvest.apply(e, arguments)
                );
              }, 3513),
            }
          : {},
        {
          d: n.o(function () {
            return e.handleBuy && e.handleBuy.apply(e, arguments);
          }, 3514),
          e: e.showRegularInvestButton ? "" : 1,
          f: e.highlightText,
        },
        e.highlightText
          ? {
              g: n.t(e.highlightText),
              h: n.n("etf-buy-index__fund-card-desc--".concat(e.modifier)),
              i: n.n("etf-buy-index__fund-card-highlight--".concat(e.modifier)),
            }
          : {},
        { j: e.hasChartSymbol },
        e.hasChartSymbol
          ? {
              k: n.p({
                "choose-symbol": e.chartSymbol,
                "rise-drop-style": e.trendRiseDropStyle,
                width: e.chartWidth,
                height: e.chartHeight,
                "render-points": 40,
                "fill-chart": !0,
              }),
            }
          : {},
        {
          l: n.t(e.fundName),
          m: n.n("etf-buy-index__fund-card-name-wrap--".concat(e.modifier)),
          n: e.watchlistIcon,
          o: n.o(function () {
            return (
              e.handleToggleWatchlist &&
              e.handleToggleWatchlist.apply(e, arguments)
            );
          }, 3515),
          p: n.t(e.ratioText),
          q: n.n(e.ratioValueModifierClass),
          r: n.n("etf-buy-index__fund-card-stat--".concat(e.modifier)),
          s: n.t(e.priceText),
          t: n.n("etf-buy-index__fund-card-stat--".concat(e.modifier)),
          v: n.n("etf-buy-index__fund-card-info--".concat(e.modifier)),
          w: n.n("etf-buy-index__fund-card-content--".concat(e.modifier)),
          x: n.n("etf-buy-index__fund-card--".concat(e.modifier)),
          y: n.o(function () {
            return e.handleCardClick && e.handleCardClick.apply(e, arguments);
          }, 3516),
        }
      );
    },
  ],
  ["__scopeId", "data-v-c57588aa"],
]);
wx.createComponent(y);
