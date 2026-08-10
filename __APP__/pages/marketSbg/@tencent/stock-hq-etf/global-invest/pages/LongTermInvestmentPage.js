require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, n) {
    for (var r in n || (n = {})) i.call(n, r) && l(e, r, n[r]);
    if (a) {
      var o,
        c = t(a(n));
      try {
        for (c.s(); !(o = c.n()).done; ) {
          r = o.value;
          u.call(n, r) && l(e, r, n[r]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  s = function (e, t) {
    return r(e, o(t));
  },
  f = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  v = require("../../node-modules/@tencent/st-tools/dist/index.js"),
  p = require("../../../stock-hq-data/index.js"),
  m = require("../service/index.js"),
  g = require("../utils/report.js"),
  h = require("../../utils/common.js"),
  y = d.defineComponent({
    name: "LongTermInvestmentPage",
    components: {
      EtfInvestHeader: function () {
        return "../../components/EtfInvestHeader.js";
      },
      NoData: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/NoData.js";
      },
      TrustFooter: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
      HotTopicNavBar: function () {
        return "../../hotTopicPages/components/HotTopicNavBar.js";
      },
    },
    setup: function () {
      var t = this,
        n = d.getCurrentInstance(),
        r = new p.DetailApi(function () {
          return 1 === arguments.length
            ? d.StockBridge.request(
                arguments.length <= 0 ? void 0 : arguments[0],
                d.RequestTypeEnum.GET,
                {},
                { forceCallback: !0 }
              )
            : d.StockBridge.request(
                arguments.length <= 0 ? void 0 : arguments[0],
                arguments.length <= 1 ? void 0 : arguments[1],
                arguments.length <= 2 ? void 0 : arguments[2],
                s(
                  c({}, (arguments.length <= 3 ? void 0 : arguments[3]) || {}),
                  { forceCallback: !0 }
                )
              );
        }),
        o = d.ref(!1),
        a = d.ref(!1),
        i = d.ref(!1),
        u = d.ref([]),
        l = d.ref(0),
        y = d.ref(!0),
        b = d.ref(null),
        w = d.ref(!1),
        L = d.ref(""),
        k = null,
        T = null,
        _ = "undefined" == typeof document || !document.hidden,
        x = !0,
        N = !1,
        E = "",
        S = null,
        I = ["mpwzq", "mpweapp"].includes("mpweapp"),
        A =
          !I &&
          "undefined" != typeof navigator &&
          v.dist.detect(navigator.userAgent).env.IS_ZXG,
        B = [],
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return c(c({}, B[e]), u.value[e] || {});
        },
        R = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t = O(e);
          return t.symbol || t.codeformat || t.fund_code || t.code || "";
        },
        q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u.value[e];
          o.value ||
            ((o.value = !0),
            g.reportGlobalInvest(
              g.GLOBAL_INVEST_REPORT.LONG_TERM_BUY_BTN_CLICK,
              {
                stockid: g.formatReportStockCode(R(e)),
                fchannel_id_fm_i: L.value,
              }
            ),
            m.GlobalInvestService.navigateToEtfBuy(
              s(c({}, t || u.value[e] || {}), { source: "long_term" }),
              n,
              L.value
            ).finally(function () {
              o.value = !1;
            }));
        },
        G = d.computed(function () {
          var e = u.value;
          return Array.isArray(e) && e.length > 0 ? e : i.value ? [] : B;
        }),
        C = d.computed(function () {
          return a.value && !i.value && 0 === G.value.length;
        }),
        j = d.computed(function () {
          return i.value && !a.value && 0 === G.value.length;
        });
      function P() {
        return f(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!a.value && y.value) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", y.value);
                    case 2:
                      return (
                        (a.value = !0),
                        (e.prev = 3),
                        (e.next = 6),
                        m.GlobalInvestService.fetchLongTermList({
                          top_n: -1,
                          offset: l.value,
                          isLoadMore: !0,
                        })
                      );
                    case 6:
                      (n = e.sent),
                        Array.isArray(n) &&
                          n.length > 0 &&
                          (u.value = u.value.concat(n)),
                        (l.value += Array.isArray(n) ? n.length : 0),
                        (y.value = Array.isArray(n) && n.length >= 20),
                        (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(3));
                    case 12:
                      return (e.prev = 12), (a.value = !1), e.finish(12);
                    case 15:
                      return e.abrupt("return", y.value);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[3, 10, 12, 15]]
            );
          })
        );
      }
      function F() {
        return f(
          this,
          null,
          e().mark(function t() {
            var n, r, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = Math.max(l.value || 20, 20)),
                        (r = y.value),
                        (e.prev = 1),
                        (e.next = 4),
                        m.GlobalInvestService.fetchLongTermList({
                          top_n: -1,
                          offset: 0,
                          isLoadMore: !1,
                          silent: !0,
                        })
                      );
                    case 4:
                      (o = e.sent),
                        Array.isArray(o) && (u.value = o),
                        (l.value = Array.isArray(o) ? o.length : l.value),
                        (y.value = r && Array.isArray(o) && o.length >= n),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 8]]
            );
          })
        );
      }
      var H = function () {
        d.StockRouter.routeBack(1);
      };
      function M() {
        "investglobal" === E &&
          (I ||
            "undefined" == typeof window ||
            "undefined" == typeof document ||
            d.nextTick$1(function () {
              window.scrollTo(0, 0),
                document.documentElement &&
                  (document.documentElement.scrollTop = 0),
                document.body && (document.body.scrollTop = 0);
            }));
      }
      function V(e) {
        N ||
          e <= 0 ||
          (g.reportGlobalInvest(g.GLOBAL_INVEST_REPORT.LONG_TERM_SCROLL),
          (N = !0));
      }
      function D() {
        var e;
        V(
          "undefined" == typeof window || "undefined" == typeof document
            ? 0
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                (null == (e = document.body) ? void 0 : e.scrollTop) ||
                0
        );
      }
      function z() {
        return f(
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
                        r.getMarketState({ market: 0 }, { needProcess: !0 })
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
                          ? (w.value = "open" === o[0][1])
                          : w.value || (w.value = !0),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        w.value || (w.value = !0);
                    case 11:
                      _ && x && (W(), (T = setTimeout(z, 3e4)));
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
      function U() {
        k && (clearInterval(k), (k = null));
      }
      function W() {
        T && (clearTimeout(T), (T = null));
      }
      function Y() {
        U(),
          (k = setInterval(function () {
            _ && x && w.value && F();
          }, 5e3));
      }
      function $() {
        (_ = !document.hidden) && x ? (z(), Y()) : (U(), W());
      }
      return (
        d.onMounted(function () {
          return f(
            t,
            null,
            e().mark(function t() {
              var r, o, c, s, v;
              return e().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (I ||
                          (E = String(
                            (null ==
                            (c =
                              null ==
                              (o =
                                null == (r = null == n ? void 0 : n.proxy)
                                  ? void 0
                                  : r.$route)
                                ? void 0
                                : o.query)
                              ? void 0
                              : c.from) || ""
                          )),
                        (function () {
                          var e;
                          if (!I) {
                            var t =
                              null == (e = null == n ? void 0 : n.proxy)
                                ? void 0
                                : e.$router;
                            t &&
                              "function" == typeof t.afterEach &&
                              (S = t.afterEach(function (e, t) {
                                E = String((null == t ? void 0 : t.name) || "");
                              }));
                          }
                        })(),
                        M(),
                        null == (v = (s = d.StockBridge).setTitle) ||
                          v.call(s, "长期投资"),
                        (function () {
                          f(
                            this,
                            null,
                            e().mark(function t() {
                              var n;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a.value = !0),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          m.GlobalInvestService.fetchLongTermList(
                                            {
                                              top_n: -1,
                                              offset: 0,
                                              isLoadMore: !1,
                                            }
                                          )
                                        );
                                      case 4:
                                        (n = e.sent),
                                          (u.value = Array.isArray(n) ? n : []),
                                          (l.value = Array.isArray(n)
                                            ? n.length
                                            : 0),
                                          (y.value =
                                            Array.isArray(n) && n.length >= 20),
                                          (e.next = 10);
                                        break;
                                      case 8:
                                        (e.prev = 8), (e.t0 = e.catch(1));
                                      case 10:
                                        return (
                                          (e.prev = 10),
                                          (i.value = !0),
                                          (a.value = !1),
                                          e.finish(10)
                                        );
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[1, 8, 10, 13]]
                              );
                            })
                          );
                        })(),
                        _ && x && (z(), Y()),
                        "undefined" != typeof window &&
                          window.addEventListener("scroll", D, { passive: !0 }),
                        I ||
                          "undefined" == typeof document ||
                          document.addEventListener("visibilitychange", $),
                        (t.t0 = d.StockBridge.tradeFunc),
                        !t.t0)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (t.next = 12), d.StockBridge.tradeFunc.fetchBrokerInfo()
                      );
                    case 12:
                      d.StockBridge.tradeFunc.isBind() ||
                        (L.value = "IbW00p000a122");
                    case 13:
                      g.reportGlobalInvest(
                        g.GLOBAL_INVEST_REPORT.LONG_TERM_BUY_BTN_BROW,
                        { fchannel_id_fm_i: L.value }
                      );
                    case 14:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        }),
        d.onActivated(function () {
          M(), (x = !0), _ && (z(), F(), Y());
        }),
        d.onDeactivated(function () {
          (x = !1), U(), W();
        }),
        d.onBeforeUnmount(function () {
          (x = !1),
            U(),
            W(),
            "function" == typeof S && (S(), (S = null)),
            "undefined" != typeof window &&
              window.removeEventListener("scroll", D),
            I ||
              "undefined" == typeof document ||
              document.removeEventListener("visibilitychange", $);
        }),
        {
          skin: h.skin(),
          isGlobalInvestNavVisible: A,
          displayList: G,
          isLoading: a,
          hasNext: y,
          showInitialLoading: C,
          showEmpty: j,
          reachBottomRef: b,
          getLongTermHeaderEtf: O,
          getLongTermHeaderSymbol: R,
          formatRatio: function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            if (null == e || "" === e) return "--";
            var n = String(e);
            if (n.includes("%")) return n;
            var r = Number(e);
            return Number.isNaN(r)
              ? n || "--"
              : "".concat(t && r > 0 ? "+" : "").concat(r.toFixed(2), "%");
          },
          formatText: function (e) {
            return null == e || "" === e ? "--" : String(e);
          },
          getRatioClass: function (e) {
            var t = Number(String(e || "").replace("%", ""));
            return Number.isNaN(t) || 0 === t
              ? "equal"
              : t > 0
              ? "rise"
              : "drop";
          },
          getEtfRatio: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              e.returnValue ||
              e.zdfformat ||
              e.zdf ||
              e.change ||
              e.ratio ||
              "--"
            );
          },
          getEtfName: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return String(
              e.name || e.fund_name || e.fundName || e.title || "--"
            );
          },
          showFooterLogo: ["mpwzq", "wzqlight"].includes("mpweapp"),
          handleBack: H,
          handlePageClick: function (e) {
            var t = e.target,
              n = String((null == t ? void 0 : t.className) || "");
            if (n.includes("investment-page__back-icon")) H();
            else if (n.includes("fund-card__buy")) {
              var r = t.closest(".fund-card"),
                o = t.closest(".fund-panel__list");
              if (r && o) {
                var a = Array.from(o.querySelectorAll(".fund-card")).indexOf(r);
                q(a >= 0 ? a : 0);
              }
            }
          },
          setScrollTop: function (e) {
            var t = Number(e);
            Number.isFinite(t) && V(t);
          },
          handleBuy: q,
          onReachBottom: function () {
            return f(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), P();
                      case 2:
                        return e.abrupt("return", !e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          loadMore: P,
        }
      );
    },
  });
Array ||
  (
    d.resolveComponent("HotTopicNavBar") +
    d.resolveComponent("NoData") +
    d.resolveComponent("EtfInvestHeader") +
    d.resolveComponent("TrustFooter")
  )();
var b = d._export_sfc(y, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return d.e(
        { a: e.isGlobalInvestNavVisible },
        e.isGlobalInvestNavVisible
          ? {
              b: d.o(e.handleBack, 628),
              c: d.p({ title: "长期投资", "app-title-visible": !0 }),
            }
          : {},
        { d: e.showInitialLoading },
        e.showInitialLoading || e.showEmpty
          ? {}
          : d.e(
              {
                f: d.f(e.displayList, function (t, n, r) {
                  return d.e(
                    { a: n > 0 },
                    {},
                    {
                      b: d.o(
                        function (r) {
                          return e.handleBuy(n, t);
                        },
                        629,
                        n
                      ),
                      c: "18a13435-2-" + r,
                      d: d.p({
                        "featured-etf": e.getLongTermHeaderEtf(n),
                        "featured-etf-symbol": e.getLongTermHeaderSymbol(n),
                        "format-ratio": e.formatRatio,
                        "format-text": e.formatText,
                        "get-ratio-class": e.getRatioClass,
                        "get-etf-ratio": e.getEtfRatio,
                        "get-etf-name": e.getEtfName,
                        "show-watchlist": !1,
                        "show-relevance": !1,
                        "ratio-label": "近3年年化",
                        "report-source": "long_term",
                      }),
                      e: d.t(e.formatText(t.highlight)),
                      f: n,
                    }
                  );
                }),
                g: e.isLoading && e.displayList.length > 0,
              },
              (e.isLoading && e.displayList.length, {})
            ),
        {
          e: e.showEmpty,
          h: e.showFooterLogo && e.displayList.length > 0 && !e.hasNext,
        },
        (e.showFooterLogo && e.displayList.length > 0 && e.hasNext, {}),
        {
          i: e.isGlobalInvestNavVisible ? 1 : "",
          j: e.skin,
          k: d.o(function () {
            return e.handlePageClick && e.handlePageClick.apply(e, arguments);
          }, 630),
        }
      );
    },
  ],
  ["__scopeId", "data-v-18a13435"],
]);
wx.createComponent(b);
