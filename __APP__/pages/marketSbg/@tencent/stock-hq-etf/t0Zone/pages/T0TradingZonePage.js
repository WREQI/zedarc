require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = function (e, n) {
    for (var o in n || (n = {})) a.call(n, o) && c(e, o, n[o]);
    if (i) {
      var r,
        u = t(i(n));
      try {
        for (u.s(); !(r = u.n()).done; ) {
          o = r.value;
          s.call(n, o) && c(e, o, n[o]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return o(e, r(t));
  },
  d = function (e, t, n) {
    return new Promise(function (o, r) {
      var i = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  m = require("../../node-modules/@tencent/st-tools/dist/index.js"),
  f = require("../../api/index.js"),
  y = require("../../utils/common.js"),
  v = require("../../utils/route.js"),
  h = require("../../../stock-hq-data/index.js"),
  g = [
    {
      strategy: "riseFast",
      subtitle: "选快速上涨的ETF,结合MACD指标买卖",
      protoKey: "fast_riser",
    },
    {
      strategy: "volatile",
      subtitle: "选波动大的ETF，抄底反弹后卖出",
      protoKey: "high_volatility",
    },
    {
      strategy: "premium",
      subtitle: "低溢价买，高溢价卖",
      protoKey: "premium_reversion",
    },
  ],
  b = p.defineComponent({
    name: "T0TradingZonePage",
    components: {
      T0StrategyBlock: function () {
        return "../components/T0StrategyBlock.js";
      },
      T0RankList: function () {
        return "../components/T0RankList.js";
      },
      TrustFooter: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
      PracticeMethodSheet: function () {
        return "../components/PracticeMethodSheet.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      semiMask: function () {
        return "../../../../../asyncCom/@tencent/st-semi-modal/index.js";
      },
      HotTopicNavBar: function () {
        return "../../hotTopicPages/components/HotTopicNavBar.js";
      },
      FooterBar: function () {
        return "../../hotTopicPages/components/FooterBar.js";
      },
    },
    setup: function () {
      var n = this,
        o = p.inject("hqBridge", p.StockBridge),
        r = ["mpwzq", "wzqlight"].includes("mpweapp"),
        i = ["mpwzq", "mpweapp"].includes("mpweapp"),
        a =
          !i &&
          "undefined" != typeof navigator &&
          m.dist.detect(navigator.userAgent).env.IS_ZXG,
        s = i || a,
        c = y.skin(),
        b = new h.DetailApi(function (e) {
          return o.request(e);
        }),
        k = p.ref(!1),
        w = p.ref(!0),
        E = p.ref(!1),
        P = p.ref(""),
        T = p.ref(!1),
        S = ["etf-page", "app-etf-page"],
        _ = "",
        A = null,
        F = p.getCurrentInstance(),
        x = p.ref(0),
        B = p.computed(function () {
          return x.value <= 30 ? 0 : Math.min(1, x.value / 120);
        }),
        C = p.reactive({
          riseFast: { list: [], isEmpty: !1 },
          volatile: { list: [], isEmpty: !1 },
          premium: { list: [], isEmpty: !1 },
        }),
        j = p.computed(function () {
          return g.map(function (e) {
            return {
              strategy: e.strategy,
              subtitle: e.subtitle,
              list: C[e.strategy].list,
              isEmpty: C[e.strategy].isEmpty,
            };
          });
        }),
        Q = p.computed(function () {
          return j.value.every(function (e) {
            return e.isEmpty;
          });
        }),
        N = p.ref(!1),
        O = p.ref("riseFast"),
        D = p.ref(null),
        q = (function () {
          var e = p.ref(!1),
            t = ["mpwzq", "mpweapp"].includes("mpweapp"),
            n = p.reactive({
              aiDialogQuestion: "",
              aiQuestionQuery: "",
              aiPresetPrompt: {},
              serverObj: {},
              sourceFrom: "",
              stockCode: "",
              stockName: "",
              stockType: "",
            }),
            o = p.computed(function () {
              return {
                showAiDialog: e.value,
                aiDialogQuestion: n.aiDialogQuestion,
                aiQuestionQuery: n.aiQuestionQuery,
                aiPresetPrompt: n.aiPresetPrompt,
                serverObj: n.serverObj,
                sourceFrom: n.sourceFrom,
                stockCode: n.stockCode,
                stockName: n.stockName,
                stockType: n.stockType,
              };
            });
          function r() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (n.aiDialogQuestion = e.aiDialogQuestion || ""),
              (n.aiQuestionQuery =
                e.aiQuestionQuery || e.aiDialogQuestion || ""),
              (n.aiPresetPrompt = e.aiPresetPrompt || {}),
              (n.serverObj = e.serverObj || {}),
              (n.sourceFrom = e.sourceFrom || "hot_topic_t0"),
              (n.stockCode = e.stockCode || ""),
              (n.stockName = e.stockName || ""),
              (n.stockType = e.stockType || "");
          }
          function i() {
            var t, o;
            if (
              !v.navigateToAiEntry({
                title: n.aiDialogQuestion,
                prompt: n.aiQuestionQuery,
                scene: n.sourceFrom,
                serverObj: n.serverObj,
              })
            ) {
              e.value = !0;
              try {
                null == (o = (t = p.StockBridge).report) ||
                  o.call(t, "hq.etf_t0.ask_yuanbao_click", {
                    sourceFrom: n.sourceFrom,
                  });
              } catch (e) {}
            }
          }
          return {
            showAiDialog: e,
            isMp: t,
            aiEntryProps: o,
            openAskEntry: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.initQuestion,
                n = t || "ETF做T+0交易的好处";
              r({
                aiDialogQuestion: n,
                aiQuestionQuery: n,
                aiPresetPrompt: { scene: "etf_t0_intro" },
                sourceFrom: "etf_t0_quick_ask",
              }),
                i();
            },
            openPremiumExplain: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.fundName,
                n = e.code,
                o = e.premiumRate,
                a = e.percentile,
                s = t || "";
              r({
                aiDialogQuestion: "".concat(s, "溢折率回归分析"),
                aiQuestionQuery: "输入:ETF名称="
                  .concat(s, "、代码=")
                  .concat(n || "", "、溢折率=")
                  .concat(null != o ? o : "-", "、近3个月溢折率百分位水平=")
                  .concat(
                    null != a ? a : "-",
                    "，输出250字内的大白话分析\n1. 溢折率状态，明确溢折价属性\n2. 说明相对近3个月百分位水平的偏离方向、幅度\n3. 给出均值回归概率、理由及建议：溢价（>均值）提示卖出；折价（<均值）提示买入；正常区间提示观望；"
                  ),
                aiPresetPrompt: { scene: "etf_t0_premium_explain" },
                serverObj: {
                  fundName: t,
                  code: n,
                  premiumRate: o,
                  percentile: a,
                },
                sourceFrom: "etf_t0_premium_explain",
                stockName: t || "",
                stockCode: n || "",
              }),
                i();
            },
            close: function () {
              e.value = !1;
            },
          };
        })(),
        I = q.aiEntryProps,
        M = q.openAskEntry,
        L = q.openPremiumExplain,
        R = q.close,
        z = p.ref("");
      function H(e, t) {
        var n,
          o,
          r = {
            name: e.name,
            code: e.code,
            symbol: e.code,
            market: "",
            holdingTopList: e.holding_top_list || [],
            zdf: e.change_pct,
            zdfClass: y.setZdpClass(e.change_pct),
          };
        return "riseFast" === t
          ? l(u({}, r), {
              speed5m: null != (n = e.change_5m) ? n : e.change_pct,
            })
          : "volatile" === t
          ? l(u({}, r), { amplitude: null != (o = e.amplitude) ? o : "--" })
          : "premium" === t
          ? l(u({}, r), {
              premiumRate: e.rate,
              premiumLevel: e.percentile
                ? "低于".concat(
                    Math.round(100 - parseFloat(e.percentile)),
                    "%时间"
                  )
                : "--",
              percentile: e.percentile,
            })
          : r;
      }
      function K() {
        return d(
          this,
          null,
          e().mark(function n() {
            var r, i, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), f.api.getEtfT0Zone(o, {})
                      );
                    case 3:
                      (r = e.sent),
                        (i = r && 0 == +r.code && r.data ? r.data : null),
                        (a = new Set()),
                        g.forEach(function (e) {
                          var n,
                            o = (null == i ? void 0 : i[e.protoKey]) || [],
                            r =
                              "premium" === e.strategy
                                ? o.slice().sort(function (e, t) {
                                    var n = parseFloat(
                                        null == e ? void 0 : e.percentile
                                      ),
                                      o = parseFloat(
                                        null == t ? void 0 : t.percentile
                                      );
                                    return isNaN(n) && isNaN(o)
                                      ? 0
                                      : isNaN(n)
                                      ? 1
                                      : isNaN(o)
                                      ? -1
                                      : n - o;
                                  })
                                : o,
                            s = [],
                            c = t(r);
                          try {
                            for (c.s(); !(n = c.n()).done; ) {
                              var u = H(n.value, e.strategy);
                              if (
                                !a.has(u.code) &&
                                (a.add(u.code), s.push(u), s.length >= 2)
                              )
                                break;
                            }
                          } catch (e) {
                            c.e(e);
                          } finally {
                            c.f();
                          }
                          (C[e.strategy].list = s),
                            (C[e.strategy].isEmpty = 0 === s.length);
                        }),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(0)),
                        g.forEach(function (e) {
                          0 !== C[e.strategy].list.length ||
                            C[e.strategy].isEmpty ||
                            (C[e.strategy].isEmpty = !0);
                        });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 9]]
            );
          })
        );
      }
      var Z = null;
      function G() {
        return d(
          this,
          null,
          e().mark(function t() {
            var n, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        b.getMarketState({ market: 0 }, { needProcess: !0 })
                      );
                    case 3:
                      (n = e.sent),
                        (o = ((null == n ? void 0 : n.split("|")) || [])
                          .map(function (e) {
                            return e.split("_");
                          })
                          .filter(function (e) {
                            return "NEWSH" === e[0];
                          })).length
                          ? (k.value = "open" === o[0][1])
                          : k.value || (k.value = !0),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        k.value || (k.value = !0);
                    case 11:
                      w.value &&
                        (Z = setTimeout(function () {
                          clearTimeout(Z), G();
                        }, 3e4));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 8]]
            );
          })
        );
      }
      function V() {
        Z && (clearTimeout(Z), (Z = null));
      }
      var Y = null;
      function $() {
        U(),
          (Y = setInterval(function () {
            w.value && k.value && K();
          }, 5e3));
      }
      function U() {
        Y && (clearInterval(Y), (Y = null));
      }
      function W() {
        (w.value = !document.hidden), w.value ? (G(), K(), $()) : (U(), V());
      }
      function X() {
        var e;
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t = document.documentElement;
          x.value =
            window.pageYOffset ||
            t.scrollTop ||
            (null == (e = document.body) ? void 0 : e.scrollTop) ||
            0;
        }
      }
      var J = p.computed(function () {
        return "undefined" != typeof window ? window.location.href : void 0;
      });
      function ee() {
        p.StockBridge.userShare({
          title: "ETF T+0 灵活交易",
          desc: "支持当天买卖，赚了就能落袋",
          path: i ? void 0 : "".concat(J.value, "?"),
          mpimage:
            "https://st.gtimg.com/design/fddf1713e45a91a0df466a6d4e996729.png",
        });
      }
      function te() {
        if (
          !i &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        ) {
          var e = function () {
            window.scrollTo(0, 0),
              document.documentElement &&
                (document.documentElement.scrollTop = 0),
              document.body && (document.body.scrollTop = 0);
          };
          p.nextTick$1(function () {
            e(),
              requestAnimationFrame(function () {
                e(), requestAnimationFrame(e);
              });
          });
        }
      }
      p.onMounted(function () {
        var t, o, r;
        null == (o = (t = p.StockBridge).setTitle) || o.call(t, "T+0 交易"),
          ee(),
          K(),
          G(),
          $(),
          d(
            n,
            null,
            e().mark(function t() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0),
                          (n = p.StockBridge.tradeFunc),
                          (e.t0 = n),
                          !e.t0)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 6), n.fetchBrokerInfo();
                      case 6:
                        n.isBind() || (P.value = "Ihf00p000a020");
                      case 7:
                        e.next = 11;
                        break;
                      case 9:
                        (e.prev = 9), (e.t1 = e.catch(0));
                      case 11:
                        return (e.prev = 11), (T.value = !0), e.finish(11);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[0, 9, 11, 14]]
              );
            })
          ),
          i ||
            "undefined" == typeof window ||
            window.addEventListener("scroll", X, { passive: !0 }),
          i || document.addEventListener("visibilitychange", W);
        var a = null == (r = null == F ? void 0 : F.proxy) ? void 0 : r.$router;
        a &&
          "function" == typeof a.afterEach &&
          (A = a.afterEach(function (e, t) {
            _ = String((null == t ? void 0 : t.name) || "");
          })),
          te();
      }),
        p.onActivated(function () {
          (w.value = !0), K(), G(), $(), S.includes(_) && te();
        }),
        p.onDeactivated(function () {
          U(), V(), N.value && (N.value = !1);
        });
      var ne = 0,
        oe = 0;
      function re() {
        if ("undefined" != typeof document && !(oe <= 0) && 0 === (oe -= 1)) {
          var e = document.body;
          e &&
            ((e.style.position = ""),
            (e.style.top = ""),
            (e.style.left = ""),
            (e.style.right = ""),
            (e.style.width = ""),
            window.scrollTo(0, ne));
        }
      }
      return (
        p.watch(N, function (e) {
          e
            ? (function () {
                if ("undefined" != typeof document && 1 === (oe += 1)) {
                  var e = document.body;
                  e &&
                    ((ne =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      0),
                    (e.style.position = "fixed"),
                    (e.style.top = "-".concat(ne, "px")),
                    (e.style.left = "0"),
                    (e.style.right = "0"),
                    (e.style.width = "100%"));
                }
              })()
            : re();
        }),
        p.onUnmounted(function () {
          for (; oe > 0; ) re();
          U(),
            V(),
            i ||
              "undefined" == typeof window ||
              window.removeEventListener("scroll", X),
            i || document.removeEventListener("visibilitychange", W),
            "function" == typeof A && (A(), (A = null));
        }),
        {
          isLite: r,
          isMP: i,
          isAPP: a,
          isHsTrading: k,
          channelId: P,
          isChannelIdReady: T,
          theme: c,
          showNavBar: s,
          headerAlpha: B,
          setScrollTop: function (e) {
            var t = Number(e);
            Number.isFinite(t) && (x.value = t);
          },
          strategyList: j,
          allStrategiesEmpty: Q,
          methodVisible: N,
          methodTab: O,
          methodSheetRef: D,
          methodSheetSkin: "white",
          aiEntryProps: I,
          handleBack: function () {
            p.StockRouter.routeBack(1);
          },
          onAskOpen: function (e) {
            z.value = "footer";
            var t = (null == e ? void 0 : e.title) || "";
            M({ initQuestion: t });
          },
          onShare: function () {
            a &&
            (
              ("undefined" != typeof navigator && navigator.userAgent) ||
              ""
            ).match(/(OpenHarmony);?[\s\/]+([\d.]+)?/)
              ? p.StockBridge.toast("暂未支持，敬请期待", "none")
              : (ee(),
                i ||
                  "function" != typeof p.StockBridge.openShareGuide ||
                  p.StockBridge.openShareGuide());
          },
          onPremiumExplain: function (e) {
            (z.value = "premium"), L(e);
          },
          onMethodOpen: function (e) {
            var t = e.strategy;
            (O.value = t), (N.value = !0);
          },
          handleCloseMethodSheet: function () {
            N.value = !1;
          },
          handleCloseMethodSheetByIcon: function () {
            D.value && "function" == typeof D.value.closeSemimask
              ? D.value.closeSemimask()
              : (N.value = !1);
          },
          onFundBuy: function (e) {
            var t = e.fund;
            if (!E.value) {
              var n = t.symbol || t.code || "",
                o = h.utils.splitSymbol(n) || {},
                r = o.market,
                i = o.scode;
              r &&
                i &&
                ((E.value = !0),
                v.navigateToBuy(r, i, P.value).finally(function () {
                  E.value = !1;
                }));
            }
          },
          closeAi: function () {
            (z.value = ""), R();
          },
        }
      );
    },
  });
Array ||
  (
    p.resolveComponent("HotTopicNavBar") +
    p.resolveComponent("t0-rank-list") +
    p.resolveComponent("t0-strategy-block") +
    p.resolveComponent("TrustFooter") +
    p.resolveComponent("footer-bar") +
    p.resolveComponent("practice-method-sheet") +
    p.resolveComponent("semi-mask") +
    p.resolveComponent("half-screen-ai-entry")
  )();
var k = p._export_sfc(b, [
  [
    "render",
    function (e, t, n, o, r, i) {
      return p.e(
        { a: e.showNavBar },
        e.showNavBar
          ? {
              b: p.o(e.handleBack, 528),
              c: p.p({
                title: "T+0 交易",
                opacity: e.headerAlpha,
                "app-title-visible": !1,
              }),
            }
          : {},
        {
          d:
            "dark" === e.theme
              ? "https://st.gtimg.com/design/520c66cf96aac5ea11111c3fef8c8dc8.png"
              : "https://st.gtimg.com/design/38d97006efee973c39117c8d47b4fc68.png",
          e: e.allStrategiesEmpty,
        },
        e.allStrategiesEmpty
          ? {
              f: p.p({
                "default-category": "etf_all",
                "default-index-filter": !0,
                "is-hs-trading": e.isHsTrading,
                "channel-id": e.channelId,
                "is-channel-id-ready": e.isChannelIdReady,
              }),
              g: p.f(e.strategyList, function (t, n, o) {
                return {
                  a: p.o(e.onMethodOpen, 529, "strategy-".concat(t.strategy)),
                  b: p.o(e.onFundBuy, 530, "strategy-".concat(t.strategy)),
                  c: p.o(
                    e.onPremiumExplain,
                    531,
                    "strategy-".concat(t.strategy)
                  ),
                  d: "6b86c8da-2-" + o,
                  e: p.p({
                    strategy: t.strategy,
                    subtitle: t.subtitle,
                    list: t.list,
                    "is-empty": t.isEmpty,
                    "channel-id": e.channelId,
                    "is-channel-id-ready": e.isChannelIdReady,
                  }),
                  f: "strategy-".concat(t.strategy),
                  g: p.n({
                    "t0-zone__strategy--no-bottom":
                      e.isLite && n === e.strategyList.length - 1,
                  }),
                };
              }),
            }
          : {
              h: p.f(e.strategyList, function (t, n, o) {
                return {
                  a: p.o(e.onMethodOpen, 532, "strategy-".concat(t.strategy)),
                  b: p.o(e.onFundBuy, 533, "strategy-".concat(t.strategy)),
                  c: p.o(
                    e.onPremiumExplain,
                    534,
                    "strategy-".concat(t.strategy)
                  ),
                  d: "6b86c8da-3-" + o,
                  e: p.p({
                    strategy: t.strategy,
                    subtitle: t.subtitle,
                    list: t.list,
                    "is-empty": t.isEmpty,
                    "channel-id": e.channelId,
                    "is-channel-id-ready": e.isChannelIdReady,
                  }),
                  f: "strategy-".concat(t.strategy),
                };
              }),
              i: p.p({
                "default-category": "etf_all",
                "default-index-filter": !0,
                "is-hs-trading": e.isHsTrading,
                "is-app": e.isAPP,
                "channel-id": e.channelId,
                "is-channel-id-ready": e.isChannelIdReady,
              }),
              j: p.n({ "t0-zone__rank--no-bottom": e.isLite }),
            },
        { k: e.isLite },
        (e.isLite, {}),
        {
          l: p.o(e.onAskOpen, 535),
          m: p.o(e.onShare, 536),
          n: p.p({
            scene: "etft0",
            "content-id": "sz159655",
            "is-mp": e.isMP,
            fixed: !0,
          }),
          o: e.methodVisible,
        },
        e.methodVisible
          ? {
              p: p.o(e.handleCloseMethodSheetByIcon, 537),
              q: p.p({ "active-tab": e.methodTab }),
              r: p.sr("methodSheetRef", "6b86c8da-7"),
              s: p.o(function () {}, 538),
              t: p.o(e.handleCloseMethodSheet, 539),
              v: p.p({ skin: "dark" }),
            }
          : {},
        { w: e.aiEntryProps.showAiDialog && e.isMP },
        e.aiEntryProps.showAiDialog && e.isMP
          ? p.e(
              { x: e.aiEntryProps.showAiDialog },
              e.aiEntryProps.showAiDialog
                ? {
                    y: p.o(e.closeAi, 540),
                    z: p.p(l(u({}, e.aiEntryProps), { theme: e.theme })),
                  }
                : {}
            )
          : e.aiEntryProps.showAiDialog && !e.isAPP
          ? {
              B: p.o(e.closeAi, 541),
              C: p.p(l(u({}, e.aiEntryProps), { theme: e.theme })),
            }
          : {},
        {
          A: e.aiEntryProps.showAiDialog && !e.isAPP,
          D: p.n({ "t0-zone--h5": !e.showNavBar }),
          E: e.theme,
        }
      );
    },
  ],
  ["__scopeId", "data-v-6b86c8da"],
]);
wx.createComponent(k);
