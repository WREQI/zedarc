var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  u = function (e, n, o) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[n] = o);
  },
  c = function (e, t) {
    for (var o in t || (t = {})) i.call(t, o) && u(e, o, t[o]);
    if (a) {
      var r,
        c = n(a(t));
      try {
        for (c.s(); !(r = c.n()).done; ) {
          o = r.value;
          l.call(t, o) && u(e, o, t[o]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  s = function (e, n, t) {
    return new Promise(function (o, r) {
      var a = function (e) {
          try {
            l(t.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            l(t.throw(e));
          } catch (e) {
            r(e);
          }
        },
        l = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(a, i);
        };
      l((t = t.apply(e, n)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  f = require("../service/index.js"),
  p = require("../../../stock-hq-data/index.js"),
  v = require("../../node-modules/@tencent/st-tools/dist/index.js"),
  m = require("../utils/report.js"),
  h = require("../../utils/common.js"),
  b = d.defineComponent({
    name: "GlobalMarketPage",
    components: {
      GlobalMarketSwiperSection: function () {
        return "../components/GlobalMarketSwiperSection.js";
      },
      NoData: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/NoData.js";
      },
      TrustFooter: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
      TeachPop: function () {
        return "../../components/TeachPop.js";
      },
      HotTopicNavBar: function () {
        return "../../hotTopicPages/components/HotTopicNavBar.js";
      },
    },
    setup: function () {
      var n = this,
        t = d.getCurrentInstance(),
        a = new p.DetailApi(function () {
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
                ((e = c(
                  {},
                  (arguments.length <= 3 ? void 0 : arguments[3]) || {}
                )),
                o(e, r({ forceCallback: !0 })))
              );
          var e;
        }),
        i = ["mpwzq", "mpweapp"].includes("mpweapp"),
        l =
          !i &&
          "undefined" != typeof navigator &&
          v.dist.detect(navigator.userAgent).env.IS_ZXG,
        u = ["mpwzq", "wzqlight"].includes("mpweapp"),
        b = l,
        g = d.ref({ us: [], hk: [], jp: [], eu: [], other: [] }),
        k = d.ref(!1),
        w = d.computed(function () {
          return (
            k.value &&
            !Object.values(g.value).some(function (e) {
              return Array.isArray(e) && e.length > 0;
            })
          );
        }),
        y = d.ref(""),
        T = d.ref(!1),
        S = d.ref(!1),
        E = null,
        I = null,
        P = "undefined" == typeof document || !document.hidden,
        _ = !0,
        B = !1,
        C = "",
        O = null,
        j = function () {
          d.StockRouter.routeBack(1);
        },
        x = function () {
          var e,
            n,
            t =
              null == (n = (e = d.StockBridge).getStorage)
                ? void 0
                : n.call(e, f.GLOBAL_INVEST_INDEX_FILTER_STORAGE_KEY);
          return null == t || "" === t || !0 === t || "true" === t || "1" === t;
        },
        L = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return s(
            n,
            null,
            e().mark(function n() {
              var r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        f.GlobalInvestService.fetchAllMarketData({
                          indexFilterEnabled: t,
                          forceRefresh: o,
                        })
                      );
                    case 2:
                      (r = e.sent),
                        (g.value = c({}, r)),
                        k.value,
                        (k.value = !0);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        };
      function G() {
        "investglobal" === C &&
          (i ||
            "undefined" == typeof window ||
            "undefined" == typeof document ||
            d.nextTick$1(function () {
              window.scrollTo(0, 0),
                document.documentElement &&
                  (document.documentElement.scrollTop = 0),
                document.body && (document.body.scrollTop = 0);
            }));
      }
      function R(e) {
        B ||
          e <= 0 ||
          (m.reportGlobalInvest(m.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_SCROLL),
          (B = !0));
      }
      function q() {
        var e;
        R(
          "undefined" == typeof window || "undefined" == typeof document
            ? 0
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                (null == (e = document.body) ? void 0 : e.scrollTop) ||
                0
        );
      }
      function A() {
        return s(
          this,
          null,
          e().mark(function n() {
            var t, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        a.getMarketState({ market: 0 }, { needProcess: !0 })
                      );
                    case 3:
                      (t = e.sent),
                        (o = ((null == t ? void 0 : t.split("|")) || [])
                          .map(function (e) {
                            return e.split("_");
                          })
                          .filter(function (e) {
                            return "NEWSH" === e[0];
                          })).length
                          ? (S.value = "open" === o[0][1])
                          : S.value || (S.value = !0),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        S.value || (S.value = !0);
                    case 11:
                      P && _ && (M(), (I = setTimeout(A, 3e4)));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 8]]
            );
          })
        );
      }
      function N() {
        E && (clearInterval(E), (E = null));
      }
      function M() {
        I && (clearTimeout(I), (I = null));
      }
      function F() {
        N(),
          (E = setInterval(function () {
            P && _ && S.value && L(x(), !0);
          }, 5e3));
      }
      function D() {
        (P = !document.hidden) && _ ? (A(), F()) : (N(), M());
      }
      var H = d.ref(null),
        V = d.ref(!1);
      return (
        d.onMounted(function () {
          return s(
            n,
            null,
            e().mark(function n() {
              var o, r, a, l, u;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (i ||
                          (C = String(
                            (null ==
                            (a =
                              null ==
                              (r =
                                null == (o = null == t ? void 0 : t.proxy)
                                  ? void 0
                                  : o.$route)
                                ? void 0
                                : r.query)
                              ? void 0
                              : a.from) || ""
                          )),
                        (function () {
                          var e;
                          if (!i) {
                            var n =
                              null == (e = null == t ? void 0 : t.proxy)
                                ? void 0
                                : e.$router;
                            n &&
                              "function" == typeof n.afterEach &&
                              (O = n.afterEach(function (e, n) {
                                C = String((null == n ? void 0 : n.name) || "");
                              }));
                          }
                        })(),
                        G(),
                        null == (u = (l = d.StockBridge).setTitle) ||
                          u.call(l, "全球市场"),
                        L(x()),
                        P && _ && (A(), F()),
                        "undefined" != typeof window &&
                          window.addEventListener("scroll", q, { passive: !0 }),
                        i ||
                          "undefined" == typeof document ||
                          document.addEventListener("visibilitychange", D),
                        (e.t0 = d.StockBridge.tradeFunc),
                        !e.t0)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 12), d.StockBridge.tradeFunc.fetchBrokerInfo()
                      );
                    case 12:
                      d.StockBridge.tradeFunc.isBind() ||
                        (y.value = "IbW00p000a122");
                    case 13:
                      T.value = !0;
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        }),
        d.onActivated(function () {
          G(), (_ = !0), P && (A(), L(x(), !0), F());
        }),
        d.onDeactivated(function () {
          (_ = !1), N(), M();
        }),
        d.onBeforeUnmount(function () {
          (_ = !1),
            N(),
            M(),
            "function" == typeof O && (O(), (O = null)),
            "undefined" != typeof window &&
              window.removeEventListener("scroll", q),
            i ||
              "undefined" == typeof document ||
              document.removeEventListener("visibilitychange", D);
        }),
        {
          skin: h.skin(),
          isGlobalInvestNavVisible: b,
          allMarketData: g,
          channelId: y,
          isChannelIdReady: T,
          handleBack: j,
          handlePageClick: function (e) {
            var n = e.target;
            String((null == n ? void 0 : n.className) || "").includes(
              "global-market__back-icon"
            ) && j();
          },
          setScrollTop: function (e) {
            var n = Number(e);
            Number.isFinite(n) && R(n);
          },
          handleMarketFilterChange: function (e) {
            L(e, !0);
          },
          handleTabbarHeaderClick: function () {
            m.reportGlobalInvest(
              m.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_HEADER_CLICK
            );
          },
          loaded: k,
          toggleShowTeachPop: function (e) {
            V.value = e;
          },
          showTeachPop: V,
          showEmpty: w,
          isLite: u,
          onReachBottom: function () {
            var e, n;
            null ==
              (n =
                null == (e = H.value) ? void 0 : e.loadMoreActiveMarketFunds) ||
              n.call(e);
          },
          swiperSectionRef: H,
        }
      );
    },
  });
Array ||
  (
    d.resolveComponent("HotTopicNavBar") +
    d.resolveComponent("NoData") +
    d.resolveComponent("GlobalMarketSwiperSection") +
    d.resolveComponent("TeachPop") +
    d.resolveComponent("TrustFooter")
  )();
var g = d._export_sfc(b, [
  [
    "render",
    function (e, n, t, o, r, a) {
      return d.e(
        { a: e.isGlobalInvestNavVisible },
        e.isGlobalInvestNavVisible
          ? {
              b: d.o(e.handleBack, 622),
              c: d.p({ title: "全球市场", "app-title-visible": !0 }),
            }
          : {},
        { d: e.showEmpty },
        e.showEmpty
          ? {}
          : e.loaded
          ? {
              f: d.sr("swiperSectionRef", "4f6c1244-2"),
              g: d.o(e.handleMarketFilterChange, 623),
              h: d.o(function (n) {
                return e.toggleShowTeachPop(!0);
              }, 624),
              i: d.o(e.handleTabbarHeaderClick, 625),
              j: d.p({
                "show-index-filter": !0,
                "default-market": "us",
                source: "global_market",
                "market-data": e.allMarketData,
                "channel-id": e.channelId,
                "is-channel-id-ready": e.isChannelIdReady,
              }),
            }
          : {},
        {
          e: e.loaded,
          k: d.o(function (n) {
            return e.toggleShowTeachPop(!1);
          }, 626),
          l: d.p({ showPop: e.showTeachPop }),
          m: e.isLite,
        },
        (e.isLite, {}),
        {
          n: e.skin,
          o: d.o(function () {
            return e.handlePageClick && e.handlePageClick.apply(e, arguments);
          }, 627),
          p: d.n(e.isGlobalInvestNavVisible ? "nav-padding" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-4f6c1244"],
]);
wx.createComponent(g);
