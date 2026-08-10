var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            l(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            l(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        l = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  r = require("../../../../../../../common/vendor.js"),
  o = require("../../../utils/page-status.js"),
  a = require("../../../../stock-hq-data/index.js"),
  i = {
    components: {
      wxTopsContent: function () {
        return "../wx-news-content.js";
      },
    },
    props: {
      reportPrefix: { type: String, default: "news.wxtopnews" },
      isOnShow: { type: Boolean, default: !1 },
      isSharePage: { type: Boolean, default: !1 },
      abtConfig: { type: Object, default: null },
    },
    setup: function (i, l) {
      var u,
        c,
        s = this,
        f = (l.emit, r.getCurrentInstance().proxy || r.getCurrentInstance()),
        p = r.ref(!1),
        d = r.ref(null),
        v = r.ref(null),
        h = r.ref(!1);
      r.provide("lctChannel", !1), r.provide("newsLimit", 0);
      var g =
          (r.wx$1.getWindowInfo && r.wx$1.getWindowInfo()) ||
          r.wx$1.getSystemInfoSync(),
        w = g.statusBarHeight,
        m = g.screenWidth / 375,
        x = r.ref(0),
        T = r.ref(0),
        S = r.throttle(function () {
          r.wx$1
            .createSelectorQuery()
            .in(f)
            .select("#wxTops")
            .scrollOffset()
            .exec(function (e) {
              try {
                if (e && e[0]) {
                  var t = e[0].scrollTop;
                  (O.value = (t / 100) * m), (P.value = (t / 100) * m);
                }
              } catch (e) {}
            });
        }, 100),
        y = function () {
          return n(
            s,
            null,
            e().mark(function n() {
              var o, a, i, l;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), r.nextTick$1();
                    case 2:
                      o = -1;
                      try {
                        (a =
                          (getCurrentPages &&
                            getCurrentPages()[getCurrentPages().length - 1]) ||
                          {}),
                          (null == (i = a.options) ? void 0 : i.anchor) &&
                            !isNaN(+(null == i ? void 0 : i.anchor)) &&
                            (o = +(null == i ? void 0 : i.anchor) - 1);
                      } catch (e) {}
                      if (!(o < 0)) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      (l = r.wx$1.createSelectorQuery().in(f))
                        .select("#navBar")
                        .boundingClientRect(),
                        l
                          .select(
                            "#wxTopsContentId >>> #wx-news-item-".concat(o)
                          )
                          .boundingClientRect();
                      try {
                        l.exec(function (e) {
                          var n = t(e, 2),
                            r = n[0],
                            o = n[1];
                          if (r && o) {
                            var a = r.height,
                              i = o.bottom;
                            setTimeout(function () {
                              (x.value = i - a), (B.value = "locattarget");
                            }, 300);
                          }
                        });
                      } catch (e) {
                        null == A ||
                          A.aegisReportEvent(
                            "WX_TOPS_SCROLL_LOCAT_TARGET_ERROR"
                          );
                      }
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        },
        k = r.ref(o.COMMON_PAGE_STATUS.LOADING),
        C = r.ref(!1),
        R = w + 44 * m,
        b =
          (null ==
          (c = null == (u = getApp().globalData.detect) ? void 0 : u.env)
            ? void 0
            : c.IS_PCWEIXIN) || !1,
        I = r.computed(function () {
          var e = (getApp().globalData.systemInfo || {}).SDKVersion;
          return r.gte(e, "3.6.1");
        }),
        O = r.ref(0),
        P = r.ref(0),
        A = r.inject("stockBridge"),
        _ = new a.DetailApi(function (e) {
          return A.request(e, "GET");
        }),
        D = r.ref(null),
        E = r.ref(!1),
        L = r.ref(!0),
        V = function t() {
          return n(
            s,
            null,
            e().mark(function n() {
              var r, o, a, i, l, u, c, s, p;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          _.getMarketState(
                            { market: 0, encode: "utf8" },
                            { needProcess: !0 }
                          )
                        );
                      case 3:
                        if (((e.t0 = e.sent), e.t0)) {
                          e.next = 6;
                          break;
                        }
                        e.t0 = "";
                      case 6:
                        (l = e.t0),
                          (u = (
                            (null == (r = null == l ? void 0 : l.split)
                              ? void 0
                              : r.call(l, "|")) || []
                          ).map(function (e) {
                            return e.split("_");
                          })),
                          (c = u.filter(function (e) {
                            return "NEWSH" === e[0];
                          })),
                          (s = u.filter(function (e) {
                            return "NEWHK" === e[0];
                          })),
                          (p = u.filter(function (e) {
                            return "NEWUS" === e[0];
                          })),
                          (E.value =
                            "open" ===
                              (null == (o = null == c ? void 0 : c[0])
                                ? void 0
                                : o[1]) ||
                            "open" ===
                              (null == (a = null == s ? void 0 : s[0])
                                ? void 0
                                : a[1]) ||
                            "open" ===
                              (null == (i = null == p ? void 0 : p[0])
                                ? void 0
                                : i[1])),
                          D.value && clearTimeout(D.value),
                          (D.value = setTimeout(function () {
                            t(), clearTimeout(D.value);
                          }, 15e3)),
                          L.value
                            ? (L.value = !1)
                            : (f.$refs.contentRef.refreshBasketData(),
                              f.$refs.contentRef.refreshStockData()),
                          (e.next = 16);
                        break;
                      case 14:
                        (e.prev = 14), (e.t1 = e.catch(0));
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[0, 14]]
              );
            })
          );
        };
      r.watch(
        function () {
          return i.isOnShow;
        },
        function (e, t) {
          e ? V() : D.value && clearTimeout(D.value);
        },
        { immediate: !0, deep: !0 }
      ),
        r.onMounted(function () {
          V();
        }),
        r.onUnmounted(function () {
          D.value && clearTimeout(D.value);
        });
      var B = r.ref("");
      return {
        reportParams: { category_id: "wxtopnews" },
        contentRef: d,
        wxTopsScrollViewRef: v,
        onListScroll: function (e) {
          var t,
            n =
              (null == (t = null == e ? void 0 : e.detail)
                ? void 0
                : t.scrollTop) || 0;
          (O.value = (n / 100) * m),
            (P.value = (n / 100) * m),
            S(),
            (T.value = n);
        },
        pullRefresh: function () {
          (h.value = !0),
            f.$refs.contentRef.refresh(),
            setTimeout(function () {
              h.value = !1;
            }, 300);
        },
        loadMore: function () {},
        refreshTriggered: h,
        refreshSuccess: function (t) {
          return n(
            s,
            null,
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (p.value = !0), B.value || y();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        },
        refreshFail: function () {
          k.value = o.COMMON_PAGE_STATUS.ERROR;
        },
        pageStatus: k,
        didLoadData: p,
        onErrorRetry: function () {
          (k.value = o.COMMON_PAGE_STATUS.LOADING),
            f.$refs.contentRef.refresh();
        },
        showWxTopTips: function () {
          C.value = !0;
        },
        isVisible: C,
        maskClick: function () {
          C.value = !1;
        },
        zIndex: 100,
        topOffset: R,
        goBack: function () {
          r.wx$1.navigateBack();
        },
        goHome: function () {
          r.wx$1.switchTab({ url: "/pages/index/index" });
        },
        isPc: b,
        isHightVersion: I,
        headerAlpha: O,
        statusBarHeight: w,
        headerOpacityAlpha: P,
        scrollIntoViewTop: x,
        onScrolltoupper: function () {
          S();
        },
        onRefresherpulling: function () {
          (O.value = 0), (P.value = 0);
        },
        scrollTop: T,
        scrollIntoViewId: B,
      };
    },
  };
Array ||
  (r.resolveComponent("wxTopsContent") + r.resolveComponent("st-status"))();
var l = r._export_sfc(i, [
  [
    "render",
    function (e, t, n, o, a, i) {
      return r.e(
        {
          a: r.sr("contentRef", "64b46f36-0"),
          b: o.didLoadData,
          c: r.o(o.refreshSuccess, 946),
          d: r.o(o.refreshFail, 947),
          e: r.o(e.loadMoreSuccess, 948),
          f: r.o(e.loadMoreFail, 949),
          g: r.o(o.showWxTopTips, 950),
          h: r.p({
            "report-prefix": n.reportPrefix,
            "show-header": !0,
            "show-gradient": !0,
            "report-params": o.reportParams,
            "top-offset": o.topOffset,
            "scroll-top": o.scrollTop,
            "is-on-show": n.isOnShow,
            "abt-config": n.abtConfig,
          }),
          i: o.didLoadData,
        },
        (o.didLoadData, {}),
        { j: !o.didLoadData },
        o.didLoadData
          ? {}
          : { k: r.o(o.onErrorRetry, 951), l: r.p({ type: o.pageStatus }) },
        { m: o.scrollIntoViewTop > 0 },
        o.scrollIntoViewTop > 0
          ? { n: "".concat(o.scrollIntoViewTop, "px") }
          : {},
        {
          o: o.refreshTriggered,
          p: o.scrollIntoViewId,
          q: r.o(function (e) {
            return o.pullRefresh();
          }, 952),
          r: r.o(function (e) {
            return o.loadMore();
          }, 953),
          s: r.o(function () {
            return o.onListScroll && o.onListScroll.apply(o, arguments);
          }, 954),
          t: r.o(function () {
            return o.onScrolltoupper && o.onScrolltoupper.apply(o, arguments);
          }, 955),
          v: r.o(function () {
            return (
              o.onRefresherpulling && o.onRefresherpulling.apply(o, arguments)
            );
          }, 956),
          w: o.isPc && !o.isHightVersion,
        },
        o.isPc && !o.isHightVersion
          ? {}
          : n.isSharePage
          ? {
              z: r.o(function () {
                return o.goHome && o.goHome.apply(o, arguments);
              }, 958),
            }
          : {
              y: r.o(function () {
                return o.goBack && o.goBack.apply(o, arguments);
              }, 957),
            },
        {
          x: !n.isSharePage,
          A: "".concat(o.headerOpacityAlpha),
          B: "".concat(o.statusBarHeight, "px"),
          C: "rgba(255, 255, 255, ".concat(o.headerAlpha, ")"),
          D: o.isVisible,
        },
        o.isVisible
          ? {
              E: r.o(function () {
                return o.maskClick && o.maskClick.apply(o, arguments);
              }, 959),
              F: r.o(function () {
                return e.containerClick && e.containerClick.apply(e, arguments);
              }, 960),
              G: r.o(function () {}, 961),
              H: r.o(function () {
                return o.maskClick && o.maskClick.apply(o, arguments);
              }, 962),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-64b46f36"],
]);
wx.createComponent(l);
