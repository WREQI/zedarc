var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  i = function (e, n) {
    for (var i in n || (n = {})) o.call(n, i) && u(e, i, n[i]);
    if (r) {
      var c,
        s = t(r(n));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          i = c.value;
          a.call(n, i) && u(e, i, n[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  c = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, u);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  s = require("../../../../../../../common/vendor.js"),
  l = require("../../../../stock-news-core/components/status/config.js"),
  f = require("../../../utils/page-status.js"),
  p = require("../../../../stock-hq-data/index.js"),
  d = require("../../../../stock-news-core/utils/request/index.js"),
  v = require("../../../../stock-news-core/utils/tools.js"),
  m = require("../../../../stock-community-ui/utils/mixins/securityCheck/index.js");
function h() {
  return s.wx$1
    ? {
        appid: "wx9cf8c670ebd68ce4",
        openid: s.wx$1.getStorageSync("_qluin"),
        fskey: s.wx$1.getStorageSync("_qlskey"),
        access_token: s.wx$1.getStorageSync("_qlskey"),
        qluin: s.wx$1.getStorageSync("_qluin"),
        qlskey: s.wx$1.getStorageSync("_qlskey"),
        qlappid: "wx9cf8c670ebd68ce4",
        check: 12,
        app: "wzqxcx",
      }
    : {};
}
var g = function (t, n) {
    return (
      s.inject("stockBridge"),
      s.inject("hqBridge"),
      {
        requestShareNum: function (t) {
          return c(
            this,
            null,
            e().mark(function n() {
              return e().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        "return",
                        (function (t) {
                          return c(
                            this,
                            null,
                            e().mark(function n() {
                              var r;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = i(
                                          i(
                                            { target_id: t, act_type: "share" },
                                            h()
                                          ),
                                          v.md5()
                                        )),
                                        e.abrupt(
                                          "return",
                                          d.request(
                                            "https://wzq.tenpay.com/group/newstockgroup/rssNewsService/danmakuCnt",
                                            r,
                                            { method: "get" }
                                          )
                                        )
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })(t)
                      );
                    case 1:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
        },
        updateShareNum: function (t) {
          return c(
            this,
            null,
            e().mark(function n() {
              return e().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        "return",
                        (function (t) {
                          return c(
                            this,
                            null,
                            e().mark(function n() {
                              var r;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = i(
                                          i(
                                            { target_id: t, act_type: "share" },
                                            h()
                                          ),
                                          v.md5()
                                        )),
                                        e.abrupt(
                                          "return",
                                          d.request(
                                            "https://wzq.tenpay.com/group/newstockgroup/rssNewsService/recordUserAct",
                                            r,
                                            { method: "get" }
                                          )
                                        )
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })(t)
                      );
                    case 1:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
        },
      }
    );
  },
  S = {
    components: {
      eventDetail: function () {
        return "../index.js";
      },
      HotEventBar: function () {
        return "../../../../../../newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.js";
      },
      NewsStatus: function () {
        return "../../../../../../newsSbg/@tencent/stock-news-core/components/status/index.js";
      },
      ProfilePop: function () {
        return "../../../../../../communitySbg/@tencent/stock-community-ui/components/profilePop/index.js";
      },
    },
    mixins: [m.securityCheck],
    props: {
      eventId: { type: String, default: "" },
      reportPrefix: { type: String, default: "" },
      isOnShow: { type: Boolean, default: !1 },
      isSharePage: { type: Boolean, default: !1 },
      pageType: { type: String, default: "discoveryevent" },
    },
    setup: function (t, n) {
      var r,
        o,
        a = this,
        u = n.emit,
        i = s.getCurrentInstance().proxy || s.getCurrentInstance(),
        d = s.inject("stockBridge"),
        v = s.ref(!1),
        m = s.ref(!1),
        h = s.ref(null),
        S = s.ref(!1),
        w = s.ref(null),
        y =
          (s.wx$1.getWindowInfo && s.wx$1.getWindowInfo()) ||
          s.wx$1.getSystemInfoSync(),
        k = y.statusBarHeight,
        x = y.screenWidth / 375,
        P = s.ref(0),
        T = g().requestShareNum,
        _ = function () {
          var e = b.value,
            t = e.event_id,
            n = e.event_title;
          i.securityCheck({ eventName: "putSubject", postData: { id: t } })
            .then(function () {
              u("onOpenEditor", { eventId: t, eventTitle: n });
            })
            .catch(function () {});
        },
        D = s.throttle(function () {
          s.wx$1
            .createSelectorQuery()
            .in(i)
            .select("#wxTops")
            .scrollOffset()
            .exec(function (e) {
              try {
                if (e && e[0]) {
                  var t = e[0].scrollTop;
                  (I.value = (t / 100) * x), (B.value = (t / 100) * x);
                }
              } catch (e) {}
            });
        }, 100),
        b = s.ref(null),
        C = s.ref(f.COMMON_PAGE_STATUS.LOADING),
        O = function () {
          C.value = f.COMMON_PAGE_STATUS.LOADING;
          try {
            i.$refs.contentRef.loadData();
          } catch (e) {}
        },
        E = s.computed(function () {
          return m.value
            ? l.NEWS_STATUS_TYPE.ERROR_DELETED
            : C.value === f.COMMON_PAGE_STATUS.LOADING
            ? l.NEWS_STATUS_TYPE.LOADING
            : "";
        }),
        N = s.ref(!1),
        q = k + 44 * x,
        R =
          (null ==
          (o = null == (r = getApp().globalData.detect) ? void 0 : r.env)
            ? void 0
            : o.IS_PCWEIXIN) || !1,
        A = s.computed(function () {
          var e = (getApp().globalData.systemInfo || {}).SDKVersion;
          return s.gte(e, "3.6.1");
        }),
        I = s.ref(0),
        B = s.ref(0),
        j = new p.DetailApi(function (e) {
          return d.request(e, "GET");
        }),
        L = s.ref(null),
        $ = s.ref(!1),
        H = s.ref(!0),
        M = function t() {
          return c(
            a,
            null,
            e().mark(function n() {
              var r, o, a, u, c, s, l, f, p;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          j.getMarketState(
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
                        if (
                          ((c = e.t0),
                          (s = (
                            (null == (r = null == c ? void 0 : c.split)
                              ? void 0
                              : r.call(c, "|")) || []
                          ).map(function (e) {
                            return e.split("_");
                          })),
                          (l = s.filter(function (e) {
                            return "NEWSH" === e[0];
                          })),
                          (f = s.filter(function (e) {
                            return "NEWHK" === e[0];
                          })),
                          (p = s.filter(function (e) {
                            return "NEWUS" === e[0];
                          })),
                          ($.value =
                            "open" ===
                              (null == (o = null == l ? void 0 : l[0])
                                ? void 0
                                : o[1]) ||
                            "open" ===
                              (null == (a = null == f ? void 0 : f[0])
                                ? void 0
                                : a[1]) ||
                            "open" ===
                              (null == (u = null == p ? void 0 : p[0])
                                ? void 0
                                : u[1])),
                          L.value && clearTimeout(L.value),
                          (L.value = setTimeout(function () {
                            t(), clearTimeout(L.value);
                          }, 15e3)),
                          !H.value && $.value)
                        )
                          try {
                            i.$refs.contentRef.refreshBasketData(),
                              i.$refs.contentRef.refreshStockData();
                          } catch (e) {}
                        else H.value = !1;
                        e.next = 16;
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
      return (
        s.watch(
          function () {
            return t.isOnShow;
          },
          function (e, t) {
            e ? M() : L.value && clearTimeout(L.value);
          },
          { immediate: !0, deep: !0 }
        ),
        s.watch(
          function () {
            return I;
          },
          function (e, t) {
            try {
              e.value < 1
                ? s.wx$1.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: "#000000",
                  })
                : e.value >= 1 &&
                  s.wx$1.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: "#ffffff",
                  });
            } catch (e) {}
          },
          { immediate: !0, deep: !0 }
        ),
        s.onMounted(function () {
          M();
        }),
        s.onUnmounted(function () {
          L.value && clearTimeout(L.value);
        }),
        {
          reportParams: { category_id: "wxtopnews" },
          contentRef: h,
          onListScroll: function (e) {
            var t,
              n =
                (null == (t = null == e ? void 0 : e.detail)
                  ? void 0
                  : t.scrollTop) || 0;
            (I.value = (n / 100) * x), (B.value = (n / 100) * x), D();
          },
          pullRefresh: function () {},
          loadMore: function () {
            var e;
            try {
              null == (e = i.$refs.contentRef) || e.loadMoreComment();
            } catch (e) {}
          },
          refreshTriggered: S,
          refreshSuccess: function (e) {
            u("refreshSuccess", e), (v.value = !0), (b.value = e);
          },
          refreshFail: function () {
            C.value = f.COMMON_PAGE_STATUS.ERROR;
          },
          pageStatus: C,
          didLoadData: v,
          onEmptyData: function () {
            (C.value = f.COMMON_PAGE_STATUS.ERROR), (m.value = !0);
          },
          isDeleted: m,
          onErrorRetry: O,
          newsStatusType: E,
          onRetryFromStatus: function () {
            E.value === l.NEWS_STATUS_TYPE.ERROR_NETWORK && O();
          },
          showWxTopTips: function () {
            N.value = !0;
          },
          isVisible: N,
          maskClick: function () {
            N.value = !1;
          },
          zIndex: 100,
          topOffset: q,
          goBack: function () {
            s.wx$1.navigateBack();
          },
          goHome: function () {
            s.wx$1.switchTab({ url: "/pages/index/index" });
          },
          isPc: R,
          isHightVersion: A,
          headerAlpha: I,
          statusBarHeight: k,
          headerOpacityAlpha: B,
          scrollIntoViewTop: P,
          onScrolltoupper: function () {
            D();
          },
          onRefresherpulling: function () {
            (I.value = 0), (B.value = 0);
          },
          eventData: b,
          clickBarShare: function () {},
          clickBarComment: function () {
            _();
          },
          shareSuccess: function () {
            return c(
              a,
              null,
              e().mark(function n() {
                var r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), T(t.eventId);
                        case 3:
                          (r = e.sent).data &&
                            b.value &&
                            (b.value.forward_num = r.data),
                            (e.next = 9);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                );
              })
            );
          },
          updateComList: function () {
            try {
              i.$refs.contentRef.updateComList();
            } catch (e) {}
          },
          goEdit: _,
          showProfilePop: function (e) {
            w.value = e;
          },
          hideProfilePop: function () {
            w.value = null;
          },
          profilePopParams: w,
        }
      );
    },
  };
Array ||
  (
    s.resolveComponent("eventDetail") +
    s.resolveComponent("NewsStatus") +
    s.resolveComponent("HotEventBar") +
    s.resolveComponent("ProfilePop")
  )();
var w = s._export_sfc(S, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return s.e(
        {
          a: s.sr("contentRef", "542266bf-0"),
          b: r.didLoadData,
          c: s.o(r.goEdit, 963),
          d: s.o(r.refreshSuccess, 964),
          e: s.o(r.refreshFail, 965),
          f: s.o(r.onEmptyData, 966),
          g: s.o(r.showWxTopTips, 967),
          h: s.o(r.showProfilePop, 968),
          i: s.p({
            "page-type": n.pageType,
            "report-prefix": n.reportPrefix,
            "show-header": !0,
            "show-gradient": !0,
            "report-params": r.reportParams,
            "top-offset": r.topOffset,
            "event-id": n.eventId,
            "is-on-show": n.isOnShow,
          }),
          j: r.didLoadData,
        },
        (r.didLoadData, {}),
        { k: !r.didLoadData && r.newsStatusType },
        !r.didLoadData && r.newsStatusType
          ? {
              l: s.o(r.onRetryFromStatus, 969),
              m: s.p({ type: r.newsStatusType }),
            }
          : {},
        {
          n: r.refreshTriggered,
          o: r.scrollIntoViewTop,
          p: s.o(function (e) {
            return r.pullRefresh();
          }, 970),
          q: s.o(function (e) {
            return r.loadMore();
          }, 971),
          r: s.o(function () {
            return r.onListScroll && r.onListScroll.apply(r, arguments);
          }, 972),
          s: s.o(function () {
            return r.onScrolltoupper && r.onScrolltoupper.apply(r, arguments);
          }, 973),
          t: s.o(function () {
            return (
              r.onRefresherpulling && r.onRefresherpulling.apply(r, arguments)
            );
          }, 974),
          v: r.didLoadData,
          w: s.o(r.clickBarShare, 975),
          x: s.o(r.clickBarComment, 976),
          y: s.p({
            "is-share-page": n.isSharePage,
            "report-prefix": n.reportPrefix,
            "report-params": r.reportParams,
            "share-count": r.eventData && r.eventData.forward_num,
            "comment-count": r.eventData && r.eventData.comment_num,
            "forbid-comment": r.eventData && 1 === r.eventData.comment_status,
          }),
          z: r.isPc && !r.isHightVersion,
        },
        r.isPc && !r.isHightVersion
          ? {}
          : n.isSharePage
          ? {
              D: s.o(function () {
                return r.goHome && r.goHome.apply(r, arguments);
              }, 978),
            }
          : {
              B: s.n(r.headerAlpha > 0 || !r.didLoadData ? "dark" : ""),
              C: s.o(function () {
                return r.goBack && r.goBack.apply(r, arguments);
              }, 977),
            },
        {
          A: !n.isSharePage,
          E: s.t(r.eventData && r.eventData.event_title),
          F: "".concat(r.headerOpacityAlpha),
          G: "".concat(r.statusBarHeight, "px"),
          H: "rgba(255, 255, 255, ".concat(r.headerAlpha, ")"),
          I: r.isVisible && r.eventData,
        },
        r.isVisible && r.eventData
          ? {
              J: s.o(function () {
                return r.maskClick && r.maskClick.apply(r, arguments);
              }, 979),
              K: s.t(r.eventData.event_summary),
              L: s.o(function () {
                return e.containerClick && e.containerClick.apply(e, arguments);
              }, 980),
              M: s.o(function () {}, 981),
              N: s.o(function () {
                return r.maskClick && r.maskClick.apply(r, arguments);
              }, 982),
            }
          : {},
        { O: r.profilePopParams },
        r.profilePopParams
          ? {
              P: s.o(r.hideProfilePop, 983),
              Q: s.p({
                userStateData: r.profilePopParams.userStateData,
                content: r.profilePopParams.content,
                defaultHeadImage: r.profilePopParams.defaultHeadImage,
                defaultNickname: r.profilePopParams.defaultNickname,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-542266bf"],
]);
wx.createComponent(w);
