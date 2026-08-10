require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  s = require("../../../../../common/vendor.js"),
  p = require("../api/index.js"),
  f = require("../node-modules/@tencent/st-tools/dist/index.js");
function h(e) {
  return Array.isArray(e) && 0 !== e.length
    ? e.reduce(function (e, r) {
        return r.point && Array.isArray(r.etf) && 0 !== r.etf.length
          ? (e.push(
              ((l = (function (e, r) {
                for (var n in r || (r = {})) i.call(r, n) && c(e, n, r[n]);
                if (a) {
                  var o,
                    l = t(a(r));
                  try {
                    for (l.s(); !(o = l.n()).done; ) {
                      n = o.value;
                      u.call(r, n) && c(e, n, r[n]);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
                return e;
              })({}, r)),
              (s = { rank: e.length + 1 }),
              n(l, o(s)))
            ),
            e)
          : e;
        var l, s;
      }, [])
    : [];
}
var d = s.defineComponent({
  name: "ListPage",
  components: {
    HotTopicNavBar: function () {
      return "./components/HotTopicNavBar.js";
    },
    ListItem: function () {
      return "./components/ListItem.js";
    },
    TrustFooter: function () {
      return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
    },
    SearchBar: function () {
      return "./components/SearchBar.js";
    },
  },
  emits: ["scroll"],
  setup: function (t, r) {
    var n = r.emit,
      o = s.getCurrentInstance().proxy || s.getCurrentInstance(),
      a = s.ref([]),
      i = s.ref(!1),
      u = s.ref(0),
      c = s.ref(44),
      d = s.ref(0),
      v = s.ref(0),
      m = s.ref(!0),
      g = s.ref(null),
      y = s.ref(null),
      b = s.ref(!1),
      k = ["mpwzq", "mpweapp"].includes("mpweapp"),
      x = s.computed(function () {
        return s.StockBridge.getStorage("user/skin") || "white";
      }),
      w = s.ref(!1),
      S = s.ref(120),
      P = !1;
    if (!k && "undefined" != typeof navigator) {
      var L = f.dist.detect(navigator.userAgent).env.IS_ZXG;
      P = L;
    }
    var R = !1,
      B = s.computed(function () {
        var e = k || P ? u.value + c.value : u.value;
        return Math.max(0, S.value - e);
      }),
      F = s.computed(function () {
        return k || P ? { top: "".concat(u.value + c.value, "px") } : {};
      }),
      _ = s.computed(function () {
        return d.value <= 30 ? 0 : Math.min(1, d.value / 120);
      });
    function q() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return l(
        this,
        null,
        e().mark(function r() {
          var n, o, u, c, l, f, d;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!i.value) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", m.value);
                  case 2:
                    if (t || m.value) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 4:
                    return (
                      (i.value = !0),
                      (c = t ? 0 : v.value),
                      (e.prev = 6),
                      (e.next = 9),
                      p.api.getDigHotList(s.StockBridge, {
                        offset: c,
                        count: 20,
                      })
                    );
                  case 9:
                    return (
                      (l = e.sent),
                      (f =
                        (null == (n = null == l ? void 0 : l.data)
                          ? void 0
                          : n.hot_point_list) || []),
                      (d = t ? f : a.value.concat(f)),
                      e.abrupt(
                        "return",
                        ((a.value = h(d)),
                        (v.value = c + f.length),
                        (m.value = f.length >= 20),
                        t &&
                          (null ==
                            (u =
                              null == (o = g.value) ? void 0 : o.resetStatus) ||
                            u.call(o)),
                        m.value)
                      )
                    );
                  case 15:
                    return (
                      (e.prev = 15),
                      (e.t0 = e.catch(6)),
                      e.abrupt(
                        "return",
                        (t && ((a.value = []), (v.value = 0), (m.value = !1)),
                        !1)
                      )
                    );
                  case 18:
                    return (e.prev = 18), (i.value = !1), e.finish(18);
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[6, 15, 18, 21]]
          );
        })
      );
    }
    function T() {
      return l(
        this,
        null,
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", q(!1));
                case 1:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      );
    }
    function j(e) {
      w.value = e >= B.value;
    }
    function A(e) {
      R ||
        e <= 0 ||
        ((R = !0),
        s.StockBridge.mtaReport({
          busi: "hq",
          eventName: "list_scroll_depth_scroll",
        }));
    }
    function M() {
      var e = window.pageYOffset || document.documentElement.scrollTop || 0;
      (d.value = e), j(e), A(e);
    }
    function N() {
      k &&
        s.nextTick$1(function () {
          s.wx$1
            .createSelectorQuery()
            .in(o)
            .select(".search-sticky")
            .boundingClientRect(function (e) {
              var t = (null == e ? void 0 : e.top) + d.value;
              Number.isFinite(t) && t > 0 && (S.value = t);
            })
            .exec();
        });
    }
    return (
      s.onMounted(function () {
        q(!0),
          s.nextTick$1(function () {
            s.StockBridge.mtaReport({
              busi: "hq",
              eventName: "hotspot_second_level_page_brow",
              exposure: { selector: ".hot-topic-list-page", context: o },
            });
          }),
          k
            ? setTimeout(N, 300)
            : "undefined" != typeof window &&
              (M(), window.addEventListener("scroll", M));
      }),
      k ||
        s.onBeforeUnmount(function () {
          "undefined" != typeof window &&
            window.removeEventListener("scroll", M);
        }),
      {
        skin: x,
        conceptList: a,
        isLoading: i,
        headerAlpha: _,
        searchStickyStyle: F,
        hasNext: m,
        isMP: k,
        isAPP: P,
        isSearchFixed: w,
        reachBottomRef: g,
        pullRefreshRef: y,
        refreshTriggered: b,
        showFooterLogo: ["mpwzq", "wzqlight"].includes("mpweapp"),
        gotoSearchPage: function () {
          s.StockBridge.mtaReport({
            busi: "hq",
            eventName: "top_search_box_click",
          }),
            s.StockRouter.routeTo({
              name: "etfhotsearch",
              query: { from: "list_page" },
            });
        },
        gotoFilterPage: function () {
          if (
            (s.StockBridge.mtaReport({ busi: "hq", eventName: "filter_click" }),
            k)
          ) {
            var e = "https://wzq.tenpay.com/mp/".concat(
              "v2",
              "/index.html#/pages/market/pages/ETFPage/etfhotfilter"
            );
            s.StockBridge.openExtraWebview(e, { from: "list_page" });
          } else
            s.StockRouter.routeTo({
              name: "etfhotfilter",
              query: { from: "list_page" },
            });
        },
        goBack: function () {
          s.StockRouter.routeBack(1);
        },
        handleNavLayout: function (e) {
          (u.value = e.safeTop || 0), (c.value = e.navBarHeight || 44);
        },
        loadMore: T,
        handleReachBottom: function () {
          return l(
            this,
            null,
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), T();
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
        handlePullRefresh: function () {
          return l(
            this,
            null,
            e().mark(function t() {
              var r, n;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (b.value = !0), (e.next = 3), q(!0);
                    case 3:
                      (b.value = !1),
                        null ==
                          (n =
                            null == (r = y.value)
                              ? void 0
                              : r.stopPullDownRefresh) || n.call(r);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
        handleRefreshRestore: function () {
          b.value = !1;
        },
        onMpScroll: function (e) {
          var t,
            r,
            o,
            a,
            i =
              null !=
              (o =
                null != (r = null == e ? void 0 : e.detail)
                  ? r
                  : null == (t = null == e ? void 0 : e.mp)
                  ? void 0
                  : t.detail)
                ? o
                : {},
            u = null != (a = i.scrollTop) ? a : 0;
          (d.value = u), j(u), A(u), n("scroll", i);
        },
        updateSearchFixed: j,
      }
    );
  },
});
Array ||
  (
    s.resolveComponent("HotTopicNavBar") +
    s.resolveComponent("SearchBar") +
    s.resolveComponent("ListItem") +
    s.resolveComponent("TrustFooter") +
    s.resolveComponent("st-reach-bottom") +
    s.resolveComponent("st-pull-refresh")
  )();
var v = s._export_sfc(d, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return s.e(
        { a: e.isMP || e.isAPP },
        e.isMP || e.isAPP
          ? {
              b: s.o(e.goBack, 555),
              c: s.o(e.handleNavLayout, 556),
              d: s.p({ title: "挖热点", opacity: e.headerAlpha }),
            }
          : {},
        { e: e.isMP },
        e.isMP
          ? s.e(
              { f: e.isSearchFixed },
              (e.isSearchFixed, {}),
              {
                g: s.o(e.gotoSearchPage, 557),
                h: s.p({ "is-fake": !0 }),
                i: s.o(function () {
                  return (
                    e.gotoFilterPage && e.gotoFilterPage.apply(e, arguments)
                  );
                }, 558),
                j: s.n({ "search-sticky--fixed": e.isSearchFixed }),
                k: s.s(e.searchStickyStyle),
                l: s.f(e.conceptList, function (e, t, r) {
                  return {
                    a: e.symbol || e.rank,
                    b: "571e59e0-2-" + r,
                    c: s.p({ item: e, rank: t + 1 }),
                  };
                }),
                m: !e.isLoading && 0 === e.conceptList.length,
              },
              (e.isLoading || e.conceptList.length, {}),
              { n: e.isLoading && e.conceptList.length > 0 },
              (e.isLoading && e.conceptList.length, {}),
              {
                o: e.refreshTriggered,
                p: s.o(function () {
                  return e.onMpScroll && e.onMpScroll.apply(e, arguments);
                }, 559),
                q: s.o(function () {
                  return e.loadMore && e.loadMore.apply(e, arguments);
                }, 560),
                r: s.o(function () {
                  return (
                    e.handlePullRefresh &&
                    e.handlePullRefresh.apply(e, arguments)
                  );
                }, 561),
                s: s.o(function () {
                  return (
                    e.handleRefreshRestore &&
                    e.handleRefreshRestore.apply(e, arguments)
                  );
                }, 562),
              }
            )
          : s.e(
              {
                t: s.n({ "hero--no-custom-nav": !e.isAPP }),
                v: e.isSearchFixed,
              },
              (e.isSearchFixed, {}),
              {
                w: s.o(e.gotoSearchPage, 563),
                x: s.p({ "is-fake": !0 }),
                y: s.o(function () {
                  return (
                    e.gotoFilterPage && e.gotoFilterPage.apply(e, arguments)
                  );
                }, 564),
                z: s.n({ "search-sticky--fixed": e.isSearchFixed }),
                A: s.s(e.searchStickyStyle),
                B: s.f(e.conceptList, function (e, t, r) {
                  return {
                    a: e.symbol || e.rank,
                    b: "571e59e0-6-" + r + ",571e59e0-5",
                    c: s.p({ item: e, rank: t + 1 }),
                  };
                }),
                C: !e.isLoading && 0 === e.conceptList.length,
              },
              (e.isLoading || e.conceptList.length, {}),
              { D: e.showFooterLogo && e.conceptList.length > 0 && !e.hasNext },
              (e.showFooterLogo && e.conceptList.length > 0 && e.hasNext, {}),
              {
                E: s.sr("reachBottomRef", "571e59e0-5,571e59e0-3"),
                F: s.p({
                  "finished-text": " ",
                  "immediate-check": !1,
                  disabled: !e.hasNext,
                  "on-reach-bottom": e.handleReachBottom,
                }),
                G: s.sr("pullRefreshRef", "571e59e0-3"),
                H: s.o(e.handlePullRefresh, 565),
              }
            ),
        { I: e.skin }
      );
    },
  ],
  ["__scopeId", "data-v-571e59e0"],
]);
wx.createComponent(v);
