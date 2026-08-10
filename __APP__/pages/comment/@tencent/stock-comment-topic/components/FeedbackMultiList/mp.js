var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  o = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t) {
    for (var a in t || (t = {})) r.call(t, a) && c(e, a, t[a]);
    if (i) {
      var o,
        u = n(i(t));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          a = o.value;
          l.call(t, a) && c(e, a, t[a]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  v = function (e, t) {
    return o(e, u(t));
  },
  f = function (e, t, n) {
    return new Promise(function (a, o) {
      var u = function (e) {
          try {
            r(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            r(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        r = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(u, i);
        };
      r((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-community-ui/utils/service/index.js"),
  p = require("../../../stock-community-base/utils/defaultCfgTabsLeast.js"),
  b = require("../../../stock-community-base/utils/knife.js"),
  h = b.sdk,
  g = h.showToast,
  w = h.getStorage,
  k = h.setStorage,
  T = function (n, a) {
    var o = b.IsMINAPP,
      u = b.IS_LITE_MODE,
      i = d.inject("stockBridge"),
      r = 0,
      l = !1,
      c = d.ref([]),
      h = d.ref(!1),
      T = "voteList",
      x = "commentList",
      y = [
        { label: "表态", value: T },
        { label: "讨论", value: x },
      ],
      C = [{ label: "讨论", value: x }],
      $ = d.ref(y),
      S = d.ref(0),
      D = d.ref(0),
      L = d.ref([]),
      _ = d.computed(function () {
        var e;
        return (null == (e = L.value[D.value]) ? void 0 : e.value) || "";
      }),
      R = d.ref(""),
      I = d.ref(0),
      P = d.ref(""),
      F = d.ref(!1),
      H = d.ref(!0),
      j = d.ref(!1),
      O = d.ref(!1),
      M = 0,
      q = d.computed(function () {
        return j.value;
      }),
      B = d.computed(function () {
        return _.value;
      }),
      A = d.computed(function () {
        return (null == Q ? void 0 : Q.value.windowHeight) + 100;
      }),
      E = d.ref({}),
      N = d.ref(0),
      V = d.ref(0),
      Q = d.computed(function () {
        return (
          (d.wx$1.getWindowInfo && d.wx$1.getWindowInfo()) ||
          d.wx$1.getSystemInfoSync()
        );
      }),
      G = d.computed(function () {
        return {
          followFinger: !0,
          touchMoveStopPropagation: !0,
          notNextTick: !0,
          direction: "horizontal",
          slidesPerView: 1,
          autoHeight: !0,
          resistanceRatio: $.value.length > 1 ? 0.7 : 0.001,
          initialSlide: 0,
        };
      }),
      z = d.ref([]),
      J = [],
      K = d.computed(function () {
        return n.pageType || "";
      }),
      W = d.computed(function () {
        return ("stock" === K.value && n.mId) || "";
      }),
      U = d.ref([]),
      Y = function () {
        var e,
          t = [];
        z.value.map(function (e) {
          (e.tab_value === _.value ||
            ("最新" === e.tab_desc && "latest" === _.value)) &&
            (t = e.orders.map(function (e) {
              return { label: e.order_desc, value: e.order_value };
            }));
        }),
          (U.value = t),
          (R.value = null == (e = U.value[0]) ? void 0 : e.value);
      };
    d.watch(
      function () {
        return z;
      },
      function (e, t) {
        e.value && e.value.length > 0 && Y();
      },
      { immediate: !0, deep: !0 }
    ),
      d.watch(
        function () {
          return P;
        },
        function (e) {
          e.value && a.$emit("selectTabChanged", e.value);
        },
        { immediate: !0, deep: !0 }
      );
    var X = d.ref(0),
      Z = function (e) {
        var t;
        L.value = e.map(function (e) {
          return {
            label: e.tab_desc,
            value:
              "stock" === K.value && "最新" === e.tab_desc
                ? "latest"
                : e.tab_value,
          };
        });
        var n = U.value;
        R.value = (null == (t = n[0]) ? void 0 : t.value) || "hot_comment";
      },
      ee = function () {
        var e,
          t,
          o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          u = arguments.length > 1 ? arguments[1] : void 0,
          l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if ((a.$emit("changePageTo", o), $.value[S.value].value !== o || l)) {
          "all" === o &&
            ((H.value = !1), i.setStorage("redDotClikedTime", new Date()));
          var v = $.value.findIndex(function (e) {
            return e.value === o;
          });
          if (-1 !== v) {
            (S.value = v),
              (I.value = v),
              (P.value = _.value),
              -1 === c.value.indexOf(_.value) && c.value.push(_.value);
            try {
              null ==
                (t = null == (e = a.$refs.mySwiper) ? void 0 : e.swiper) ||
                t.slideTo(v, 0, !1);
            } catch (e) {}
            if ((le(r, I.value), se(), re(), !s)) {
              var f = M;
              if (f !== J[I.value]) {
                if ("stock" !== K.value || "share" !== o || u || j.value || l)
                  setTimeout(function () {
                    if (j.value) {
                      var e = J[I.value] ? J[I.value] : f;
                      d.wx$1.pageScrollTo({ scrollTop: e, duration: 0 });
                    }
                  }, 0);
                else {
                  var m = (J[I.value] || 0) < M ? f : J[I.value];
                  setTimeout(function () {
                    d.wx$1.pageScrollTo({ scrollTop: m, duration: 0 });
                  }, 0);
                }
                "commentList" === o &&
                  a.$emit("commentReport", {
                    eventName: "shequ.feedbacktopic.discussion_brow",
                    data: { topicid: n.mId || "" },
                  });
              }
            }
          }
        }
      },
      te = "community-feedback-item-click",
      ne = d.throttle(function () {}, 50),
      ae = function (e, n) {
        return f(
          exports,
          null,
          t().mark(function o() {
            var u, i, r, l;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((r =
                          a.$refs &&
                          a.$refs["stockList_".concat(_.value)] &&
                          a.$refs["stockList_".concat(_.value)][0]),
                        (l =
                          a.$refs &&
                          a.$refs["refresh_".concat(S.value)] &&
                          a.$refs["refresh_".concat(S.value)][0]),
                        $.value[S.value].value !== T)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        null == a ? void 0 : a.getFeedbackData()
                      );
                    case 5:
                      null == l || l.stopPullDownRefresh(), (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8),
                        (t.t0 = t.catch(2)),
                        null == l || l.stopPullDownRefresh();
                    case 11:
                      t.next = 14;
                      break;
                    case 13:
                      r && (r.nomore = !1),
                        null ==
                          (i =
                            null ==
                            (u =
                              null == r
                                ? void 0
                                : r.loadData(!0, R.value, n || _.value))
                              ? void 0
                              : u.then(function () {
                                  null == l || l.stopPullDownRefresh(),
                                    e && g("更新成功");
                                })) ||
                          i.catch(function () {
                            null == l || l.stopPullDownRefresh();
                          });
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              null,
              [[2, 8]]
            );
          })
        );
      },
      oe = d.ref(!1),
      ue = function (e) {
        var t = e.value;
        if (R.value !== t) {
          var n = "shequ.shequ_".concat(K.value, ".sort_by_").concat(t);
          a.$emit("commentReport", {
            eventName: n,
            data: { stockid: W.value || "" },
          }),
            (R.value = t),
            ae(!0);
        }
      },
      ie = function () {
        return f(
          exports,
          null,
          t().mark(function e() {
            var n, o, u, i, r;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), d.nextTick$1();
                  case 2:
                    try {
                      (o = "stockList_".concat(_.value)),
                        (u = a.$refs && a.$refs[o] && a.$refs[o][0]),
                        (i = null),
                        a.$refs &&
                          a.$refs.commentListHeader &&
                          a.$refs.commentListHeader[0] &&
                          (i =
                            null ==
                            (n = (
                              a.$refs &&
                              a.$refs.commentListHeader &&
                              a.$refs.commentListHeader[0]
                            ).getBoundingClientRect())
                              ? void 0
                              : n.height),
                        (r =
                          (null == u
                            ? void 0
                            : u.$el.getBoundingClientRect().height) + i),
                        (E.value = v(s({}, E.value), { currentList: r })),
                        (N.value = u.$el.getBoundingClientRect().height);
                    } catch (e) {}
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      re = function () {
        var e = setTimeout(function () {
          var t = null;
          $.value[S.value].value === T
            ? (t = "#voteList")
            : $.value[S.value].value === x &&
              (t = "#stockList_".concat(D.value));
          try {
            var n = Q.value;
            n.windowHeight, n.screenHeight;
            d.wx$1
              .createSelectorQuery()
              .in(a)
              .select(t)
              .boundingClientRect()
              .exec(function (e) {
                if (e && e[0] && e[0].height) {
                  if ($.value[S.value].value === T)
                    return void (V.value = e[0].height);
                  d.wx$1
                    .createSelectorQuery()
                    .in(a)
                    .select("#commentListHeader")
                    .boundingClientRect()
                    .exec(function (t) {
                      t && t[0] && (V.value = e[0].height + t[0].height);
                    });
                }
              });
          } catch (e) {
            V.value = A.value;
          }
          clearTimeout(e);
        }, 100);
      },
      le = function (e, t) {
        setTimeout(function () {
          var n,
            o,
            u = L.value,
            i =
              a.$refs[
                "stockList_".concat(null == (n = u[t]) ? void 0 : n.value)
              ],
            l =
              a.$refs[
                "stockList_".concat(null == (o = u[e]) ? void 0 : o.value)
              ];
          i && i[0] && i[0].onStockListShow(),
            l && l[0] && l[0].onStockListHide(),
            (r = t);
        }, 100);
      },
      ce = d.ref([!0, !1]),
      se = function () {
        var e = ce.value;
        (e[D.value] = !0), (ce.value = e);
      };
    return {
      isMiniApp: o,
      isLiteMode: u,
      selectTab: P,
      tabReady: F,
      ceiling: j,
      feedbackTabs: $,
      feedbackTabIndex: S,
      tabs: L,
      hasRedDot: H,
      dropDownValue: R,
      dropDownItems: U,
      swiperOptions: G,
      pullDisabled: O,
      activeTabValue: _,
      currentActiveTabKey: B,
      renderedTab: c,
      currSwiperHeight: A,
      activeTabKey: I,
      mpSwiperHeight: V,
      mpRefreshTriggered: oe,
      getFeedbackData: function (e) {
        return f(
          exports,
          null,
          t().mark(function n() {
            var o, u, i, r, l;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0), (t.next = 3), m.getCustomerFeedback(e)
                      );
                    case 3:
                      (r = t.sent),
                        (l = r.data),
                        (X.value = l),
                        a.$emit("getFeedbackFinished", l),
                        0 ===
                          (null ==
                          (u = null == (o = X.value) ? void 0 : o.votes)
                            ? void 0
                            : u.length) ||
                        0 === (null == (i = X.value) ? void 0 : i.votes_num)
                          ? ($.value = C)
                          : ($.value = y),
                        S.value > $.value.length - 1 && (S.value = 0),
                        (h.value = !0),
                        re(),
                        (t.next = 10);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(0));
                    case 10:
                      return t.abrupt("return", {});
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              null,
              [[0, 8]]
            );
          })
        );
      },
      feedbackData: X,
      getTabCfg: function () {
        var e = { scene: K.value };
        m.getTimelineCfg(
          "stock" === K.value || "section" === K.value
            ? s({ stock_id: W.value }, e)
            : e
        )
          .then(function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            +e.code
              ? (z.value = p.defaultCfgTabs[K.value] || [])
              : (z.value = e.data || []),
              Z(z.value),
              (F.value = !0);
          })
          .catch(function (e) {
            (z.value = p.defaultCfgTabs[K.value] || []), Z(z.value);
          });
      },
      checkRedDot: function () {
        var e = new Date(i.getStorage("redDotClikedTime") || null),
          t = new Date();
        setTimeout(function () {
          e.setHours(0, 0, 0, 0) === t.setHours(0, 0, 0, 0) ||
          "stock" !== K.value
            ? (H.value = !1)
            : (H.value = !0);
        }, 200);
      },
      setCfgTabs: Z,
      isCurrTab: function (e) {
        return D.value === e;
      },
      onTouchMove: function () {
        !(function () {
          var e = window.scrollY;
          e >= M && e > 0 && M >= 0 && "stock" === K.value && L.value.length > 1
            ? (j.value = !0)
            : (j.value = !1),
            (O.value = e > 0),
            (J[I.value] =
              document.documentElement.scrollTop || document.body.scrollTop),
            ne();
        })();
      },
      switchTab: function (e) {
        var t = $.value;
        e < t.length && ee(t[e].value);
      },
      onPullingDown: ae,
      mpPullRefresh: function (e) {
        return f(
          exports,
          null,
          t().mark(function n() {
            var o, u, i, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e !== S.value) {
                        t.next = 16;
                        break;
                      }
                      if (((oe.value = !0), $.value[S.value].value !== T)) {
                        t.next = 14;
                        break;
                      }
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        null == a ? void 0 : a.getFeedbackData()
                      );
                    case 5:
                      t.next = 9;
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(2));
                    case 9:
                      return (t.prev = 9), (oe.value = !1), t.finish(9);
                    case 12:
                      t.next = 16;
                      break;
                    case 14:
                      (r =
                        a.$refs &&
                        a.$refs["stockList_".concat(_.value)] &&
                        a.$refs["stockList_".concat(_.value)][0]) &&
                        (r.nomore = !1),
                        null ==
                          (i =
                            null ==
                            (u =
                              null ==
                              (o =
                                null == r
                                  ? void 0
                                  : r.loadData(!0, R.value, _.value))
                                ? void 0
                                : o.then(function () {}))
                              ? void 0
                              : u.catch(function () {})) ||
                          i.finally(function () {
                            oe.value = !1;
                          });
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              null,
              [[2, 7, 9, 12]]
            );
          })
        );
      },
      onPutComment: function (e) {
        a.$emit("onPutComment", e);
      },
      onTapFollow: function (e) {
        a.$emit("onTapFollow", e);
      },
      renderFinished: function (e) {
        a.$emit("renderFinished", e);
      },
      renderVoteFinished: function (e) {
        setTimeout(function () {
          re();
        }, 100);
      },
      getListFinished: function (e) {
        var t = e.getRes,
          n = void 0 === t ? {} : t,
          o = e.isFirst;
        if (o) {
          if (null === n)
            return void a.$emit("getListFinished", { getRes: n, isFirst: o });
          a.$emit("getListFinished", { getRes: n, isFirst: o }),
            l ||
              ((function () {
                var e, t, n, a, o;
                w("multilist-share-tab-positon").then(function () {
                  var u =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    i = b.doJSONparse(u);
                  (t = i.oneTimeStamp || 0),
                    (e = i.timeStamp || 0),
                    (n = i.shareTabShowtimes || 0),
                    (o = !t || Date.now() - t >= 864e5);
                  var r = (a = !e || Date.now() - e <= 6048e5)
                    ? {
                        timeStamp: n ? e : Date.now(),
                        oneTimeStamp: Date.now(),
                        shareTabShowtimes: o ? n + 1 : n,
                      }
                    : {
                        timeStamp: Date.now(),
                        oneTimeStamp: Date.now(),
                        shareTabShowtimes: 1,
                      };
                  k("multilist-share-tab-positon", JSON.stringify(r)),
                    -1 !==
                      L.value.findIndex(function (e) {
                        return "share" === e.value;
                      }) &&
                      (!a || (n < 3 && a && "stock" === K.value && o)) &&
                      ((I.value = 2), ee("share", "", !0)),
                    (P.value = _.value),
                    (c.value = [P.value]);
                });
              })(),
              (F.value = !0),
              (l = !0),
              setTimeout(function () {
                !(function () {
                  try {
                    d.wx$1
                      .createSelectorQuery()
                      .in(a)
                      .select(".multi-list >>> #topBar")
                      .boundingClientRect()
                      .exec(function (e) {
                        if (e && e[0]) {
                          var t = e[0].top;
                          M = t;
                        }
                      });
                  } catch (e) {}
                })();
              }, 500));
        }
        re();
      },
      commentReport: function (e) {
        a.$emit("commentReport", e);
      },
      onTapCommentItem: function (e) {
        a.$emit("onTapCommentItem", e);
      },
      onTapDetail: function (e) {
        a.$emit("onTapDetail", e);
      },
      onTapPerson: function (e) {
        a.$emit("onTapPerson", e);
      },
      addEvent: function () {
        i.busOn(te, ue);
      },
      removeEvent: function () {
        i.busOff(te, ue);
      },
      onDrowDownChange: ue,
      onMultiListShow: function () {
        var e =
          a.$refs &&
          a.$refs["stockList_".concat(_.value)] &&
          a.$refs["stockList_".concat(_.value)][0];
        null == e || e.onStockListShow();
      },
      onMultiListHide: function () {
        var e =
          a.$refs &&
          a.$refs["stockList_".concat(_.value)] &&
          a.$refs["stockList_".concat(_.value)][0];
        null == e || e.onStockListHide();
      },
      loadMore: function () {
        var e, t;
        if ($.value[S.value].value !== T) {
          var n =
            a.$refs &&
            a.$refs["stockList_".concat(_.value)] &&
            a.$refs["stockList_".concat(_.value)][0];
          null ==
            (t =
              null ==
              (e = null == n ? void 0 : n.loadData(!1, R.value, _.value))
                ? void 0
                : e.then(function () {})) || t.catch(function () {});
        }
      },
      swiperScrollChange: function (e) {
        var t;
        (t = (e = e.mp || e).detail.current) !== I.value &&
          t < L.value.length &&
          ee($.value[t].value, "", !1, !0);
      },
      mpOnPageScroll: function (e) {
        (J[I.value] = e),
          e > 0 && M > 0 && e >= M && L.value.length > 1
            ? (j.value = !0)
            : (j.value = !1),
          (O.value = e > 0);
      },
      activeSubTabIndex: D,
      subtabActiveCache: ce,
      updateSubtabCache: se,
      switchSubTab: function (e) {
        (D.value = e), se(), Y(), ae(!0);
      },
      showDropdownClick: function () {
        d.wx$1
          .createSelectorQuery()
          .in(a)
          .select("#dropdownContainer")
          .boundingClientRect()
          .exec(function (t) {
            if (t && t[0]) {
              var n = e(t, 1)[0];
              n &&
                i.busEmit("community-feedback-show-drowdown", {
                  items: U.value,
                  current: R.value,
                  rect: n,
                });
            }
          });
      },
      isCelling: q,
      showCommentGuideModel: function () {
        a.$emit("showCommentGuideModel");
      },
      multiListHeight: N,
      calculateMpSwiperHeight: re,
      showProfilePop: function (e) {
        a.$emit("showProfilePop", e);
      },
      calculateH5SwiperHeight: function () {
        ie(),
          setTimeout(function () {
            ie();
          }, 500);
      },
      feedbackReady: h,
    };
  },
  x = d.defineComponent({
    components: {
      tab: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.js";
      },
      StockList: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/StockList/index.js";
      },
      voteList: function () {
        return "../VoteMultiList/index.js";
      },
    },
    props: {
      pageType: { type: String, default: "" },
      userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      mId: { type: String, default: "" },
      stockName: { type: String, default: "" },
    },
    setup: function (e) {
      d.inject("stockBridge", {});
      var t = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        n = T(e, t);
      return (
        d.onBeforeMount(function () {
          n.getFeedbackData(), n.getTabCfg(), n.checkRedDot(), n.addEvent();
        }),
        d.onActivated(function () {
          n.getFeedbackData();
        }),
        d.onBeforeUnmount(function () {
          n.removeEvent();
        }),
        v(s({}, n), { colorClass: "zxg-color" })
      );
    },
  });
Array ||
  (
    d.resolveComponent("tab") +
    d.resolveComponent("voteList") +
    d.resolveComponent("stock-list")
  )();
var y = d._export_sfc(x, [
  [
    "render",
    function (e, t, n, a, o, u) {
      return d.e(
        { a: e.mId && e.feedbackReady },
        e.mId && e.feedbackReady
          ? d.e(
              { b: e.tabReady && e.isCelling },
              e.tabReady && e.isCelling
                ? {
                    c: d.sr("tabBar", "1e9c6851-0"),
                    d: d.o(e.switchTab, 3074),
                    e: d.p({
                      "cur-index": e.feedbackTabIndex,
                      "tab-config": e.feedbackTabs,
                      "show-red-dot": e.hasRedDot,
                    }),
                    f: d.n(1 === e.feedbackTabs.length ? "only-one" : ""),
                  }
                : {},
              { g: e.tabReady },
              e.tabReady
                ? {
                    h: d.sr("tabBar", "1e9c6851-1"),
                    i: d.o(e.switchTab, 3075),
                    j: d.p({
                      "cur-index": e.feedbackTabIndex,
                      "tab-config": e.feedbackTabs,
                      "show-red-dot": e.hasRedDot,
                    }),
                    k: d.n(e.ceiling ? "ceiling" : ""),
                    l: d.n(1 === e.feedbackTabs.length ? "only-one" : ""),
                    m: d.n(e.pageType),
                    n: d.o(function () {}, 3076),
                  }
                : {},
              {
                o: d.f(e.feedbackTabs, function (t, n, a) {
                  return d.e(
                    { a: "voteList" === t.value },
                    "voteList" === t.value
                      ? {
                          b: d.o(e.renderVoteFinished, 3077, "tabContent" + n),
                          c: d.o(
                            e.showCommentGuideModel,
                            3078,
                            "tabContent" + n
                          ),
                          d: "1e9c6851-2-" + a,
                          e: d.p({
                            "topic-id": e.mId,
                            "vote-list": e.feedbackData.votes,
                          }),
                        }
                      : "commentList" === t.value && e.tabs && e.tabs.length > 0
                      ? d.e(
                          { g: e.dropDownItems && e.dropDownItems.length > 0 },
                          e.dropDownItems && e.dropDownItems.length > 0
                            ? {
                                h: d.f(e.tabs, function (t, n, a) {
                                  return {
                                    a: d.t(t.label),
                                    b: "tab-btn-".concat(n),
                                    c: d.n(
                                      n === e.activeSubTabIndex
                                        ? ["active", e.colorClass]
                                        : ""
                                    ),
                                    d: d.o(
                                      function (t) {
                                        return e.switchSubTab(n);
                                      },
                                      3079,
                                      "tab-btn-".concat(n)
                                    ),
                                  };
                                }),
                                i: d.t(
                                  e.dropDownItems.find(function (t) {
                                    return t.value === e.dropDownValue;
                                  }).label
                                ),
                                j: d.n(e.colorClass),
                                k: d.n(e.colorClass),
                                l: d.o(
                                  function () {
                                    return (
                                      e.showDropdownClick &&
                                      e.showDropdownClick.apply(e, arguments)
                                    );
                                  },
                                  3080,
                                  "tabContent" + n
                                ),
                              }
                            : {},
                          {
                            m: d.f(e.tabs, function (t, n, o) {
                              return d.e(
                                { a: e.subtabActiveCache[n] },
                                e.subtabActiveCache[n]
                                  ? {
                                      b: d.sr(
                                        "stockList_" + t.value,
                                        "1e9c6851-3-" + a + "-" + o,
                                        { f: 1 }
                                      ),
                                      c: n === e.activeSubTabIndex,
                                      d: "stockList_" + t.value,
                                      e: d.o(
                                        e.onTapDetail,
                                        3081,
                                        "tablist-index-".concat(n)
                                      ),
                                      f: d.o(
                                        e.onTapCommentItem,
                                        3082,
                                        "tablist-index-".concat(n)
                                      ),
                                      g: d.o(
                                        e.onPutComment,
                                        3083,
                                        "tablist-index-".concat(n)
                                      ),
                                      h: d.o(
                                        e.onTapFollow,
                                        3084,
                                        "tablist-index-".concat(n)
                                      ),
                                      i: d.o(
                                        e.renderFinished,
                                        3085,
                                        "tablist-index-".concat(n)
                                      ),
                                      j: d.o(
                                        e.getListFinished,
                                        3086,
                                        "tablist-index-".concat(n)
                                      ),
                                      k: d.o(
                                        e.commentReport,
                                        3087,
                                        "tablist-index-".concat(n)
                                      ),
                                      l: d.o(
                                        e.showProfilePop,
                                        3088,
                                        "tablist-index-".concat(n)
                                      ),
                                      m: "1e9c6851-3-" + a + "-" + o,
                                      n: d.p({
                                        "page-type": e.pageType,
                                        "p-userinfo": e.userinfo,
                                        "page-id": e.mId,
                                        "current-type": t.value,
                                        "tab-type": t.value,
                                        "stock-name": e.stockName,
                                        "drop-down-value": e.dropDownValue,
                                      }),
                                    }
                                  : {},
                                {
                                  o: "stockList_".concat(n),
                                  p: "tablist-index-".concat(n),
                                }
                              );
                            }),
                          }
                        )
                      : {},
                    {
                      f:
                        "commentList" === t.value &&
                        e.tabs &&
                        e.tabs.length > 0,
                      n: d.o(
                        function (t) {
                          return e.mpPullRefresh(n);
                        },
                        3089,
                        "tabContent" + n
                      ),
                      o: "tabContent" + n,
                      p: d.n(t.value + "_content"),
                    }
                  );
                }),
                p: !e.pullDisabled,
                q: e.mpRefreshTriggered,
                r: e.feedbackTabIndex,
                s: e.mpSwiperHeight + "px",
                t: d.o(function () {
                  return (
                    e.swiperScrollChange &&
                    e.swiperScrollChange.apply(e, arguments)
                  );
                }, 3090),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1e9c6851"],
]);
wx.createComponent(y);
