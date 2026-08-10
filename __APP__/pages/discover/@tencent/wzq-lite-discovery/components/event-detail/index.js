require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  a = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  f = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && l(e, n, t[n]);
    if (s) {
      var o,
        a = r(s(t));
      try {
        for (a.s(); !(o = a.n()).done; ) {
          n = o.value;
          c.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return a(e, i(t));
  },
  v = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  h = require("../../api/request.js"),
  m = require("../../../wzq-lite-basket/api/StockBasketAPI.js"),
  b = require("../../../stock-base/visibilityObserver/index.js"),
  w = require("../../../stock-news-base/service/market/RelatedStockHelper.js"),
  y = require("../../../stock-growth-base/service/shareInvite/index.js"),
  k = require("../../../stock-news-core/utils/force2https.js"),
  x = require("../../../stock-community-ui/utils/mixins/securityCheck/index.js"),
  g = require("../../../stock-community-base/utils/privacyCheck.js"),
  A = new w.RelatedStockHelper(),
  S = d.defineComponent({
    name: "EventDetail",
    components: {
      danmaku: function () {
        return "./danmaku.js";
      },
      eventinfo: function () {
        return "./eventinfo.js";
      },
      news: function () {
        return "./news.js";
      },
      ComList: function () {
        return "../../../../../commentSbg/@tencent/wzq-lite-comment/pages/discovery-event/index.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      SearchAiBar: function () {
        return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
      marketCoditions: function () {
        return "./market-coditions.js";
      },
    },
    mixins: [x.securityCheck],
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return { category_id: "wxtopnews" };
        },
      },
      abtConfig: { type: Object, default: null },
      showHeader: { type: Boolean, default: !1 },
      topOffset: { type: Number, default: 0 },
      eventId: { type: String, default: "" },
      isOnShow: { type: Boolean, default: !1 },
      pageType: { type: String, default: "discoveryevent" },
    },
    setup: function (o, a) {
      var i = this,
        s = a.emit,
        u = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        c = d.inject("didAgreeUserAgreement", { value: !0 }),
        l = d.inject("onCheckUserAgreementStatus", function () {}),
        w = d.inject("userinfo");
      d.watch(
        function () {
          return o.isOnShow;
        },
        function (e) {
          e &&
            d.nextTick$1(function () {
              try {
                x.value && u.$refs.eventCommentListRef.onMpShow();
              } catch (e) {}
            });
        },
        { immediate: !0 }
      );
      var x = d.ref(null),
        S = (function () {
          var e = d.ref(!1),
            t = d.ref(!1),
            n = d.ref(null);
          return {
            showAiEntry: e,
            showAiDialog: t,
            aiQuestionObj: n,
            onShowAiDialog: function (e) {
              (n.value = e), (t.value = !0);
            },
            onCloseAiDialog: function () {
              t.value = !1;
            },
            clearAiSearchStatus: function () {
              (e.value = !1), (t.value = !1), (n.value = null);
            },
            onShowAiEntry: function () {
              e.value = !0;
            },
            onHideAiEntry: function () {
              e.value = !1;
            },
          };
        })(),
        _ = function () {
          return v(
            i,
            null,
            t().mark(function e() {
              var r, a, i, u;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!o.eventId) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          h.requestEventDetail({ event_id: o.eventId })
                        );
                      case 4:
                        (r = e.sent) && 0 == +r.code
                          ? ((x.value = r.data),
                            D(),
                            x.value &&
                              (a = x.value.ai_question) &&
                              a.length > 0 &&
                              ((i = n(a, 1)),
                              (u = i[0]) && (S.aiQuestionObj.value = f({}, u))))
                          : s("emptyData"),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          e.t0 && 301 === e.t0.code && s("emptyData"),
                          s("refreshFail");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
        },
        C = null,
        j = !1,
        D = function () {
          d.nextTick$1(function () {
            var e, t;
            null ==
              (t =
                null == (e = null == C ? void 0 : C.observer)
                  ? void 0
                  : e.disconnect) || t.call(e),
              (C = null),
              (C = new b.VisibilityObserver(
                "#commentContainer",
                {
                  once: !0,
                  callback: function (e) {
                    j ||
                      (e &&
                        ((j = !0),
                        q.report(
                          "".concat(o.reportPrefix, ".comment_contaienr_brow")
                        )));
                  },
                  intersection: { threshold: 0 },
                },
                { context: u }
              ));
          });
        },
        q = d.inject("stockBridge"),
        O = new m.StockBasketAPI(q),
        P = d.ref(!1),
        I = d.ref("");
      d.watch(
        function () {
          return o.eventId;
        },
        function (e) {
          e &&
            (S.clearAiSearchStatus(),
            _(),
            y.ShareInvite.getInviteCode(
              {
                share_type: y.SHARETYPE.SHARE_TYPE_HOTISSUE,
                query_result: y.QUERYRESULT.QUERY_RESULT,
                hot_issue: { id: e || "" },
              },
              function (e) {
                var t, n;
                if (
                  e &&
                  ((P.value = !0),
                  (I.value = e.share_code || ""),
                  null == (t = e.hot_issue) ? void 0 : t.click_times)
                ) {
                  var r =
                    (null == (n = e.hot_issue) ? void 0 : n.click_times) || 0;
                  r &&
                    q.toast("".concat(r, "位股友已查看你的分享"), "none", {
                      duration: 2e3,
                    });
                }
              }
            ),
            setTimeout(function () {
              P.value = !0;
            }, 2e3),
            y.ShareInvite.reportInviteCode());
        },
        { immediate: !0 }
      ),
        d.watch(
          function () {
            return [x.value, P.value];
          },
          function (e) {
            var t = n(e, 2),
              r = t[0],
              o = t[1];
            r &&
              o &&
              s("refreshSuccess", p(f({}, x.value), { share_code: I.value }));
          },
          { immediate: !0 }
        );
      var E = d.computed(function () {
        return { hotissueid: o.eventId };
      });
      return p(
        f(
          {
            forceHttpsAdvanced: k.forceHttpsAdvanced,
            showWxTopTips: function () {
              s("showWxTopTips"),
                q.report(
                  "".concat(o.reportPrefix, ".show_wxtoptooltips_click")
                );
            },
            eventData: x,
            goEdit: function () {
              return v(
                i,
                null,
                t().mark(function e() {
                  var n, r;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!g.isH5Native) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 3), g.sqPrivacyCheck();
                        case 3:
                          if (e.sent) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          if (
                            (null == c ? void 0 : c.value) ||
                            "function" != typeof l
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return", void l());
                        case 9:
                          (n = x.value),
                            (r = n.event_id),
                            n.event_title,
                            u
                              .securityCheck({
                                eventName: "putSubject",
                                postData: { id: r },
                              })
                              .then(function () {
                                s("goEdit");
                              })
                              .catch(function () {}),
                            q.report(
                              "".concat(o.reportPrefix, ".go_edit_click"),
                              { hotissueid: r }
                            );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            },
            didAgreeUserAgreement: c,
            onCheckUserAgreementStatus: l,
            userinfo: w,
            getCommentCount: function (e) {},
            refreshBasketData: function () {
              return v(
                i,
                null,
                t().mark(function e() {
                  var r, o, a, i, s, u, c, l, f, p, v;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !(null == (r = x.value) ? void 0 : r.watchlist_id)
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (c = {
                                ids: x.value.watchlist_id,
                                with_zixuan: !0,
                                ranking_count:
                                  (null ==
                                  (s =
                                    null ==
                                    (i =
                                      null ==
                                      (a =
                                        null == (o = x.value)
                                          ? void 0
                                          : o.watchList)
                                        ? void 0
                                        : a.ranking)
                                      ? void 0
                                      : i.data)
                                    ? void 0
                                    : s.length) || 2,
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              O.getBasketSummary(c)
                            );
                          case 5:
                            (l = e.sent),
                              (f = l.data),
                              (null == (u = null == f ? void 0 : f.list)
                                ? void 0
                                : u.length) > 0 &&
                                ((p = n(f.list, 1)),
                                (v = p[0]),
                                (x.value.watchList = v)),
                              (e.next = 12);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(2));
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              );
            },
            refreshStockData: function () {
              return v(
                i,
                null,
                t().mark(function o() {
                  var a;
                  return t().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (x.value) {
                            o.next = 2;
                            break;
                          }
                          return o.abrupt("return");
                        case 2:
                          1 !== (a = x.value.quote_type) &&
                            (2 === a
                              ? v(
                                  i,
                                  null,
                                  t().mark(function n() {
                                    var o, a, i, s, u, c, l, f;
                                    return t().wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (x.value) {
                                                t.next = 2;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 2:
                                              (o = []),
                                                (a = x.value.relate_code) &&
                                                  a.length > 0 &&
                                                  (o = [].concat(e(o), e(a))),
                                                (i = []),
                                                (s = r(o));
                                              try {
                                                for (s.s(); !(u = s.n()).done; )
                                                  (c = u.value),
                                                    i.includes(c.symbol) ||
                                                      i.push(c.symbol);
                                              } catch (e) {
                                                s.e(e);
                                              } finally {
                                                s.f();
                                              }
                                              return (
                                                (t.prev = 8),
                                                (t.next = 11),
                                                A.requestQT(i)
                                              );
                                            case 11:
                                              if ((l = t.sent)) {
                                                t.next = 14;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 14:
                                              (f = A.handleQTData(o, l)),
                                                (x.value.relate_code = f),
                                                (t.next = 20);
                                              break;
                                            case 18:
                                              (t.prev = 18),
                                                (t.t0 = t.catch(8));
                                            case 20:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      n,
                                      null,
                                      [[8, 18]]
                                    );
                                  })
                                )
                              : 3 === a &&
                                v(
                                  i,
                                  null,
                                  t().mark(function o() {
                                    var a,
                                      i,
                                      s,
                                      u,
                                      c,
                                      l,
                                      v,
                                      d,
                                      h,
                                      m,
                                      b,
                                      w,
                                      y,
                                      k;
                                    return t().wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (x.value) {
                                                t.next = 2;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 2:
                                              (i = []),
                                                (s = x.value.plate_info),
                                                (null ==
                                                (a =
                                                  null == s
                                                    ? void 0
                                                    : s.rankList)
                                                  ? void 0
                                                  : a.length) > 0 &&
                                                  (i = [].concat(
                                                    e(i),
                                                    [s],
                                                    e(s.rankList)
                                                  )),
                                                (u = []),
                                                (c = r(i));
                                              try {
                                                for (c.s(); !(l = c.n()).done; )
                                                  (v = l.value),
                                                    u.includes(v.symbol) ||
                                                      u.push(v.symbol);
                                              } catch (e) {
                                                c.e(e);
                                              } finally {
                                                c.f();
                                              }
                                              return (
                                                (t.prev = 8),
                                                (t.next = 11),
                                                A.requestQT(u)
                                              );
                                            case 11:
                                              if ((d = t.sent)) {
                                                t.next = 14;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 14:
                                              (h = A.handleQTData(
                                                s.rankList,
                                                d
                                              )),
                                                (m = A.handleQTData([s], d)),
                                                (b = n(m, 1)),
                                                (w = b[0]) &&
                                                  (((y = f(
                                                    f({}, x.value.plateInfo),
                                                    w
                                                  )).rankList = h),
                                                  (k = p(f({}, x.value), {
                                                    plate_info: y,
                                                  })),
                                                  (x.value = k)),
                                                (t.next = 20);
                                              break;
                                            case 18:
                                              (t.prev = 18),
                                                (t.t0 = t.catch(8));
                                            case 20:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      o,
                                      null,
                                      [[8, 18]]
                                    );
                                  })
                                ));
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                })
              );
            },
            loadData: _,
            updateComList: function () {
              try {
                x.value && u.$refs.eventCommentListRef.updateComList();
              } catch (e) {}
            },
            loadMoreComment: function () {
              try {
                x.value && u.$refs.eventCommentListRef.loadData(!1);
              } catch (e) {}
            },
            onShareAiHandler: function (e) {
              s("shareAiAnswer", e);
            },
            reportInfo: E,
          },
          S
        ),
        {
          showProfilePop: function (e) {
            s("showProfilePop", e);
          },
        }
      );
    },
  });
Array ||
  (
    d.resolveComponent("danmaku") +
    d.resolveComponent("eventinfo") +
    d.resolveComponent("SearchAiBar") +
    d.resolveComponent("news") +
    d.resolveComponent("marketCoditions") +
    d.resolveComponent("com-list") +
    d.resolveComponent("half-screen-ai-entry")
  )();
var _ = d._export_sfc(S, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return d.e(
        { a: e.eventData },
        e.eventData
          ? d.e(
              {
                b: "".concat(e.topOffset, "px"),
                c: -e.topOffset + "px",
                d: "".concat(e.topOffset, "px"),
                e: "url(".concat(
                  e.forceHttpsAdvanced(e.eventData.event_focus_image || ""),
                  ")"
                ),
                f: d.p({ "event-id": e.eventId }),
                g: d.o(e.showWxTopTips, 3029),
                h: d.p({ "event-data": e.eventData }),
                i: d.o(e.onShowAiDialog, 3030),
                j: d.o(e.onShowAiEntry, 3031),
                k: d.o(e.onHideAiEntry, 3032),
                l: d.p({
                  "report-prefix": e.reportPrefix,
                  "report-info": e.reportInfo,
                  scene: "hotissue",
                  "content-id": e.eventId,
                }),
                m: e.eventId && e.showAiEntry,
                n: e.eventData.event_news,
              },
              e.eventData.event_news
                ? {
                    o: d.p({
                      "news-list": e.eventData.event_news,
                      "report-prefix": e.reportPrefix,
                    }),
                  }
                : {},
              {
                p: d.p({
                  "report-prefix": e.reportPrefix,
                  "is-hstab-show": e.isHstabShow,
                  "event-data": e.eventData,
                }),
                q: d.o(function () {
                  return e.goEdit && e.goEdit.apply(e, arguments);
                }, 3033),
                r: d.sr("eventCommentListRef", "7b32a6fc-5"),
                s: d.o(e.getCommentCount, 3034),
                t: d.o(e.onCheckUserAgreementStatus, 3035),
                v: d.o(e.showProfilePop, 3036),
                w: d.p({
                  "page-type": e.pageType,
                  "event-id": e.eventId,
                  "p-userinfo": e.userinfo,
                  "did-agree-user-agreement": e.didAgreeUserAgreement,
                }),
                x: e.showAiDialog,
              },
              e.showAiDialog
                ? {
                    y: d.o(e.onShareAiHandler, 3037),
                    z: d.o(e.onCloseAiDialog, 3038),
                    A: d.p({
                      "sse-serve-type": "newsSummaryServerHttp",
                      "show-ai-dialog": e.showAiDialog,
                      "ai-dialog-question": e.aiQuestionObj.title || "",
                      "ai-question-query": e.aiQuestionObj.prompt || "",
                      "server-obj": e.aiQuestionObj,
                      "source-from": e.aiQuestionObj.scene || "hotissue",
                    }),
                  }
                : {},
              { B: "".concat(e.topOffset, "px") }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7b32a6fc"],
]);
wx.createComponent(_);
