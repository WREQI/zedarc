var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, s) {
    return new Promise(function (r, o) {
      var t = function (e) {
          try {
            i(s.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            i(s.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(t, a);
        };
      i((s = s.apply(e, n)).next());
    });
  },
  s = require("../../../../../common/vendor.js"),
  r = require("../hooks/useDrawerHooks.js"),
  o = require("../hooks/useThemeHooks.js"),
  t = require("../hooks/usePrivacyGrantHooks.js"),
  a = require("../utils/StockBridgeWrapper.js"),
  i = require("../../stock-news-sdk/index.js"),
  l = {
    components: {
      SessionHistoryList: function () {
        return "./SessionHistoryList.js";
      },
      SessionHistoryPop: function () {
        return "./SessionHistoryPop/mp.js";
      },
      ServiceAgreementModal: function () {
        return "./SessionHistoryAgreement.js";
      },
    },
    props: {
      showAiDrawer: { type: Boolean, default: !1 },
      theme: { type: String, default: "blue" },
      curSession: { type: String, default: "" },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      useAppH5: { type: Boolean, default: !1 },
      initialHistoryPrivacy: { type: Object, default: null },
      clawBotStatus: { type: Number, default: 0 },
      shouldShowSubscriptContent: { type: Boolean, default: !1 },
    },
    setup: function (l, u) {
      var c = this,
        d = u.emit,
        v = o.useThemeHooks(l),
        p = v.drawerHistoryCloseIcon,
        h = v.drawerHistoryStickyIcon,
        f = v.drawerHistoryEmptyIcon,
        S = v.navTitleStyle,
        w = s.ref(!0),
        y = s.ref(0),
        m = s.ref(!1),
        k = s.ref(!1),
        g = s.ref(null),
        x = s.ref(null),
        b = s.ref(null),
        T = s.ref(0),
        H = function () {
          x.value && x.value.resetPress();
        },
        _ = s.ref(""),
        C = s.ref(""),
        P = null,
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (!e && U.value) ||
            (!e && g.value && g.value.isShowPop()) ||
            ((C.value = ""),
            (y.value = 0),
            (ue.value = 0),
            setTimeout(function () {
              (m.value = !1), d("onDrawerClose");
            }, 320));
        },
        B = r.useDrawerHooks(l),
        M = B.hasMore,
        I = B.hasSessions,
        R = B.stickSessions,
        A = B.wxClawSessions,
        E = B.todaySessions,
        D = B.weekSessions,
        W = B.monthSessions,
        q = B.otherSessions,
        L = B.requestQuerySessions,
        O = B.requestRenameSession,
        X = B.requestStickSession,
        V = B.requestDeleteSession,
        $ = t.usePrivacyGrantHooks(),
        Q = $.entryHistoryPrivacyGrant,
        F = $.grantHistoryPrivacy,
        G = s.ref(0),
        Y = s.ref(!1),
        Z = s.ref(!1),
        z = s.ref(null),
        N = s.ref(null),
        U = s.ref(!1),
        J = s.ref(null),
        K = function () {
          var e, n;
          (C.value = ""),
            null == (n = null == (e = b.value) ? void 0 : e.scroll) ||
              n.scrollTo(0, 0, 300),
            (T.value = T.value ? 0 : 1);
        },
        ee = function () {
          var s =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return n(
            c,
            null,
            e().mark(function n() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (Y.value = !0),
                          (G.value = s ? G.value + 20 : 0),
                          (e.next = 5),
                          L(G.value, 20)
                        );
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 9:
                        return (
                          (e.prev = 9),
                          (Y.value = !1),
                          (Z.value = !0),
                          e.finish(9)
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[0, 7, 9, 12]]
              );
            })
          );
        },
        ne = function (s) {
          return n(
            c,
            null,
            e().mark(function n() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          !(R.value && R.value.length >= 30) ||
                          s.stick_flag
                        ) {
                          e.next = 4;
                          break;
                        }
                        a.StockBridge.toast("最多只能置顶30条哦～"),
                          (e.next = 23);
                        break;
                      case 4:
                        return (
                          (e.prev = 4),
                          (Y.value = !0),
                          i.sdk.loadingBar("show"),
                          (e.next = 8),
                          X(s.sessionid, s.stick_flag ? "1" : "0")
                        );
                      case 8:
                        if (!e.sent) {
                          e.next = 15;
                          break;
                        }
                        return (
                          a.StockBridge.toast(
                            s.stick_flag ? "取消置顶成功" : "置顶成功"
                          ),
                          (e.next = 12),
                          ee()
                        );
                      case 12:
                        K(), (e.next = 16);
                        break;
                      case 15:
                        a.StockBridge.toast("操作失败，请重试");
                      case 16:
                        e.next = 20;
                        break;
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(4));
                      case 20:
                        return (
                          (e.prev = 20),
                          (Y.value = !1),
                          i.sdk.loadingBar("hide"),
                          e.finish(20)
                        );
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[4, 18, 20, 23]]
              );
            })
          );
        },
        se = function () {
          j(),
            d("jumpSessionCreate"),
            a.StockBridge.report(
              "jichu.ai_search.history_drawer_newsession_click"
            );
        },
        re = function () {
          M.value && !Y.value && ee(!0);
        },
        oe = s.ref(null),
        te = s.ref(null),
        ae = s.computed(function () {
          var e = te.value || {},
            n = e.x,
            s = void 0 === n ? 0 : n,
            r = e.y,
            o = void 0 === r ? 0 : r,
            t = e.width,
            a = void 0 === t ? 0 : t,
            i = e.height,
            l = void 0 === i ? 0 : i;
          return "left: "
            .concat(s, "px; width: ")
            .concat(a, "px; top: ")
            .concat(o - l, "px;");
        }),
        ie = s.ref(0),
        le = s.ref(0),
        ue = s.ref(0),
        ce = s.ref(!1),
        de = s.ref(!1),
        ve = s.computed(function () {
          return a.StockBridge.ENV === s.EnvTypeEnum.MP && s.wx$1
            ? (
                (s.wx$1.getWindowInfo && s.wx$1.getWindowInfo()) ||
                s.wx$1.getSystemInfoSync()
              ).windowWidth
            : window.innerWidth;
        }),
        pe = s.computed(function () {
          return 0.86 * ve.value;
        }),
        he = s.computed(function () {
          if (ue.value) {
            var e = 0.4 * (1 - Math.abs(ue.value / pe.value));
            return "background-color: #000000".concat(
              Math.round(255 * e)
                .toString(16)
                .padStart(2, "0")
                .toUpperCase(),
              "; transition: none;"
            );
          }
          return "background-color: #000000".concat(
            1 === y.value ? "66" : "00",
            ";"
          );
        }),
        fe = s.computed(function () {
          return ue.value
            ? "transform: translateX(".concat(
                ue.value,
                "px); transition: none;"
              )
            : "transform: translateX(".concat(
                1 === y.value ? "0px" : "-100%",
                ");"
              );
        });
      return (
        s.watch(
          function () {
            return l.showAiDrawer;
          },
          function (s) {
            return n(
              c,
              null,
              e().mark(function n() {
                var r, o, t, i;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((H(), s)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", void (m.value = !1));
                      case 2:
                        return (
                          (w.value = !1),
                          (m.value = !0),
                          (y.value = 0),
                          (ue.value = 0),
                          setTimeout(function () {
                            y.value = 1;
                          }, 20),
                          (e.next = 9),
                          Q()
                        );
                      case 9:
                        (J.value = e.sent),
                          (r = J.value || {}),
                          (o = r.needPop),
                          (t = r.historyProtocol),
                          (i = r.mainProtocol),
                          o
                            ? ((z.value = t),
                              (N.value = i),
                              (U.value = !0),
                              setTimeout(function () {
                                w.value = !0;
                              }, 50))
                            : (w.value = !0),
                          ee(),
                          a.StockBridge.report(
                            "jichu.ai_search.history_drawer_brow"
                          );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
          { immediate: !0 }
        ),
        {
          isMP: !0,
          isWZQ: !1,
          popDialogRef: g,
          listRef: x,
          mpScrollTop: T,
          scrollh5Ref: b,
          scrollToTop: K,
          handleTouchStart: function (e) {
            (ie.value = e.touches[0].clientX),
              (le.value = e.touches[0].clientY),
              (ue.value = 0),
              (ce.value = !1);
          },
          handleTouchMove: function (e) {
            if (!ce.value && !oe.value) {
              e.preventDefault();
              var n = e.touches[0],
                s = n.clientX,
                r = n.clientY,
                o = s - ie.value,
                t = r - le.value;
              (ue.value || (o < -2 && Math.abs(o) > Math.abs(t))) &&
                ((de.value = o > ue.value), (ue.value = o > 0 ? 0 : o));
            }
          },
          handleTouchEnd: function (e) {
            var n = Math.abs(ue.value);
            n < 50 || (n < pe.value / 2 && de.value)
              ? ue.value &&
                ((k.value = !0),
                setTimeout(function () {
                  k.value = !1;
                }, 300),
                (ue.value = 0),
                (y.value = 1))
              : ((ue.value && !ce.value) || ie.value > pe.value) &&
                (e.preventDefault(), j(!0));
          },
          drawerHistoryCloseIcon: p,
          drawerHistoryStickyIcon: h,
          wxClawSessionIcon:
            "https://st.gtimg.com/design/9258f6e1091654b60917a64709e20c3e.png",
          drawerHistoryEmptyIcon: f,
          navTitleStyle: S,
          drawerEnterVal: y,
          drawerTranslateX: ue,
          drawerAnimRuning: k,
          rootContainerStyle: he,
          drawerContainerStyle: fe,
          drawerCanShow: m,
          onH5ScrollHandler: function (e) {
            var n;
            if (!ue.value) {
              ce.value = !0;
              var s = e.y,
                r = ((null == (n = b.value) ? void 0 : n.scroll) || {})
                  .maxScrollY;
              Math.abs(s - r) < 20 && re(), x.value && x.value.handleScroll(e);
            }
          },
          onMPScrollHandler: function (e) {
            ue.value || ((ce.value = !0), x.value && x.value.handleScroll(e));
          },
          reachListEnd: re,
          preventEvent: function () {
            H();
          },
          closeDrawer: j,
          hasMore: M,
          hasSessions: I,
          isLoadFinish: Z,
          stickSessions: R,
          wxClawSessions: A,
          todaySessions: E,
          weekSessions: D,
          monthSessions: W,
          otherSessions: q,
          doRenameSession: function (r, o) {
            return n(
              c,
              null,
              e().mark(function n() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (Y.value = !0),
                            i.sdk.loadingBar("show"),
                            (e.next = 4),
                            O(r.sessionid, o)
                          );
                        case 4:
                          if (!e.sent) {
                            e.next = 8;
                            break;
                          }
                          s.nextTick$1(function () {
                            g.value && g.value.close("rename");
                          }),
                            a.StockBridge.report(
                              "jichu.ai_search.history_drawer_session_rename_success_click",
                              { session: r.sessionid }
                            ),
                            (e.next = 9);
                          break;
                        case 8:
                          a.StockBridge.toast("操作失败，请重试");
                        case 9:
                          e.next = 13;
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(0));
                        case 13:
                          return (
                            (e.prev = 13),
                            (Y.value = !1),
                            i.sdk.loadingBar("hide"),
                            e.finish(13)
                          );
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 11, 13, 16]]
                );
              })
            );
          },
          doDelSession: function (r) {
            return n(
              c,
              null,
              e().mark(function n() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (Y.value = !0),
                            i.sdk.loadingBar("show"),
                            (e.next = 4),
                            V(r.sessionid)
                          );
                        case 4:
                          if (!e.sent) {
                            e.next = 8;
                            break;
                          }
                          s.nextTick$1(function () {
                            g.value && g.value.close("delete"),
                              l.curSession === r.sessionid && se();
                          }),
                            (e.next = 9);
                          break;
                        case 8:
                          a.StockBridge.toast("操作失败，请重试");
                        case 9:
                          a.StockBridge.report(
                            "jichu.ai_search.history_drawer_session_remove_confirm_click",
                            { session: r.sessionid }
                          ),
                            (e.next = 14);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(0));
                        case 14:
                          return (
                            (e.prev = 14),
                            (Y.value = !1),
                            i.sdk.loadingBar("hide"),
                            e.finish(14)
                          );
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 12, 14, 17]]
                );
              })
            );
          },
          sessionOperate: function (s, r) {
            return n(
              c,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        s &&
                          (H(),
                          "tap" === r
                            ? (j(),
                              s.sessionid !== l.curSession &&
                                d("jumpSessionDatail", s),
                              a.StockBridge.report(
                                "jichu.ai_search.history_drawer_session_detail_click",
                                { session: s.sessionid }
                              ))
                            : "rename" === r
                            ? (g.value && g.value.showRenameSession(s),
                              a.StockBridge.report(
                                "jichu.ai_search.history_drawer_session_rename_click",
                                { session: s.sessionid }
                              ))
                            : "stick" === r
                            ? (ne(s),
                              a.StockBridge.report(
                                "jichu.ai_search.history_drawer_session_".concat(
                                  s.stick_flag ? "unstick" : "stick",
                                  "_click"
                                ),
                                { session: s.sessionid }
                              ))
                            : "del" === r &&
                              (g.value && g.value.showDelSession(s),
                              a.StockBridge.report(
                                "jichu.ai_search.history_drawer_session_remove_click",
                                { session: s.sessionid }
                              )));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
          jumpSessionCreate: se,
          bindingWxClaw: function () {
            j(), d("bindingWxClaw");
          },
          unbindingWxClaw: function () {
            j(), d("unbindingWxClaw");
          },
          scrollStickyAnim: _,
          scrollStickyTitle: C,
          changeStickyTitle: function (e, n) {
            P && clearTimeout(P),
              (P = null),
              (_.value = n),
              "quit" === n
                ? (P = setTimeout(function () {
                    (_.value = ""), (C.value = ""), (P = null);
                  }, 320))
                : (C.value = e);
          },
          doServiceAgreementConfirm: function () {
            return n(
              c,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (U.value = !1), (e.next = 3), F(z.value, N.value)
                        );
                      case 3:
                        return (e.next = 5), Q();
                      case 5:
                        (J.value = e.sent), d("agree-protocal");
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
          doServiceAgreementReject: function () {
            (U.value = !1), j();
          },
          serviceAgreementVisible: U,
          curHistoryProtocol: z,
          longPressHandle: function (e, n) {
            ue.value || ((oe.value = e), (te.value = n));
          },
          longPressItem: oe,
          longPressMenuStyle: ae,
          canRenderHistory: w,
        }
      );
    },
  };
Array ||
  (
    s.resolveComponent("SessionHistoryList") +
    s.resolveComponent("st-scroll") +
    s.resolveComponent("session-history-pop") +
    s.resolveComponent("ServiceAgreementModal")
  )();
var u = s._export_sfc(l, [
  [
    "render",
    function (e, n, r, o, t, a) {
      return s.e(
        { a: o.drawerCanShow },
        o.drawerCanShow
          ? s.e(
              {
                b: o.drawerHistoryCloseIcon,
                c: s.o(function (e) {
                  return o.closeDrawer(!0);
                }, 4834),
                d: s.o(function () {
                  return o.scrollToTop && o.scrollToTop.apply(o, arguments);
                }, 4835),
                e: o.hasSessions && o.canRenderHistory,
              },
              o.hasSessions && o.canRenderHistory
                ? s.e(
                    { f: o.isMP },
                    o.isMP
                      ? {
                          g: s.sr("listRef", "4d7d0ea6-0"),
                          h: s.o(o.longPressHandle, 4836),
                          i: s.o(o.sessionOperate, 4837),
                          j: s.o(o.changeStickyTitle, 4838),
                          k: s.o(o.jumpSessionCreate, 4839),
                          l: s.o(o.bindingWxClaw, 4840),
                          m: s.o(o.unbindingWxClaw, 4841),
                          n: s.p({
                            "cur-session": r.curSession,
                            "stick-sessions": o.stickSessions,
                            "wx-claw-sessions": o.wxClawSessions,
                            "today-sessions": o.todaySessions,
                            "week-sessions": o.weekSessions,
                            "month-sessions": o.monthSessions,
                            "other-sessions": o.otherSessions,
                            "has-more": o.hasMore,
                            "claw-bot-status": r.clawBotStatus,
                            shouldShowSubscriptContent:
                              r.shouldShowSubscriptContent,
                          }),
                          o: !o.drawerTranslateX && o.drawerEnterVal,
                          p: o.mpScrollTop,
                          q: s.o(function () {
                            return (
                              o.onMPScrollHandler &&
                              o.onMPScrollHandler.apply(o, arguments)
                            );
                          }, 4842),
                          r: s.o(function () {
                            return (
                              o.reachListEnd &&
                              o.reachListEnd.apply(o, arguments)
                            );
                          }, 4843),
                        }
                      : {
                          s: s.sr("listRef", "4d7d0ea6-2,4d7d0ea6-1"),
                          t: s.o(o.longPressHandle, 4844),
                          v: s.o(o.sessionOperate, 4845),
                          w: s.o(o.changeStickyTitle, 4846),
                          x: s.o(o.jumpSessionCreate, 4847),
                          y: s.o(o.bindingWxClaw, 4848),
                          z: s.o(o.unbindingWxClaw, 4849),
                          A: s.p({
                            "cur-session": r.curSession,
                            "stick-sessions": o.stickSessions,
                            "wx-claw-sessions": o.wxClawSessions,
                            "today-sessions": o.todaySessions,
                            "week-sessions": o.weekSessions,
                            "month-sessions": o.monthSessions,
                            "other-sessions": o.otherSessions,
                            "has-more": o.hasMore,
                            "claw-bot-status": r.clawBotStatus,
                            shouldShowSubscriptContent:
                              r.shouldShowSubscriptContent,
                          }),
                          B: s.sr("scrollh5Ref", "4d7d0ea6-1"),
                          C: s.o(o.onH5ScrollHandler, 4850),
                          D: s.p({
                            "scroll-events": ["scroll"],
                            options: {
                              bounce: {
                                top: !1,
                                bottom: !1,
                                left: !1,
                                right: !1,
                              },
                            },
                          }),
                        }
                  )
                : o.isLoadFinish && o.canRenderHistory
                ? {
                    F: o.drawerHistoryEmptyIcon,
                    G: s.o(function () {
                      return (
                        o.jumpSessionCreate &&
                        o.jumpSessionCreate.apply(o, arguments)
                      );
                    }, 4851),
                  }
                : {},
              {
                E: o.isLoadFinish && o.canRenderHistory,
                H: s.s(o.drawerContainerStyle),
                I: s.o(function () {
                  return o.preventEvent && o.preventEvent.apply(o, arguments);
                }, 4852),
                J: s.o(function (e) {
                  return o.closeDrawer(!0);
                }, 4853),
                K: s.sr("popDialogRef", "4d7d0ea6-3"),
                L: s.o(o.doRenameSession, 4854),
                M: s.o(o.doDelSession, 4855),
                N: s.o(o.doServiceAgreementConfirm, 4856),
                O: s.o(o.doServiceAgreementReject, 4857),
                P: s.p({
                  visible: o.serviceAgreementVisible,
                  "protocol-title": o.curHistoryProtocol
                    ? o.curHistoryProtocol.title
                    : "",
                  "protocol-url": o.curHistoryProtocol
                    ? o.curHistoryProtocol.url
                    : "",
                  "is-m-p": o.isMP,
                  theme: r.theme,
                  "use-app-h5": r.useAppH5,
                  "is-w-z-q": o.isWZQ,
                  "root-style": o.drawerContainerStyle,
                }),
                Q:
                  !o.drawerTranslateX &&
                  o.drawerEnterVal &&
                  !o.drawerAnimRuning,
              },
              o.drawerTranslateX || !o.drawerEnterVal || o.drawerAnimRuning
                ? {}
                : s.e(
                    { R: o.scrollStickyTitle },
                    o.scrollStickyTitle
                      ? s.e(
                          {
                            S:
                              "置顶" === o.scrollStickyTitle ||
                              "微信对话" === o.scrollStickyTitle,
                          },
                          "置顶" === o.scrollStickyTitle ||
                            "微信对话" === o.scrollStickyTitle
                            ? {
                                T:
                                  "置顶" === o.scrollStickyTitle
                                    ? o.drawerHistoryStickyIcon
                                    : o.wxClawSessionIcon,
                              }
                            : {},
                          {
                            U: s.t(o.scrollStickyTitle),
                            V: s.n(o.scrollStickyAnim),
                          }
                        )
                      : {},
                    { W: o.longPressItem },
                    o.longPressItem
                      ? {
                          X: s.o(function (e) {
                            return o.sessionOperate(o.longPressItem, "rename");
                          }, 4858),
                          Y: s.t(
                            o.longPressItem.stick_flag ? "取消置顶" : "置顶"
                          ),
                          Z: s.o(function (e) {
                            return o.sessionOperate(o.longPressItem, "stick");
                          }, 4859),
                          aa: s.o(function (e) {
                            return o.sessionOperate(o.longPressItem, "del");
                          }, 4860),
                          ab: s.s(o.longPressMenuStyle),
                        }
                      : {}
                  ),
              {
                ac: s.n(o.isWZQ ? "wzq" : ""),
                ad: s.n(r.useAppH5 ? "useAppH5" : ""),
                ae: s.n("skin-".concat(r.theme)),
                af: s.s(o.rootContainerStyle),
                ag: s.o(function () {
                  return (
                    o.handleTouchStart && o.handleTouchStart.apply(o, arguments)
                  );
                }, 4861),
                ah: s.o(function () {
                  return (
                    o.handleTouchMove && o.handleTouchMove.apply(o, arguments)
                  );
                }, 4862),
                ai: s.o(function () {
                  return (
                    o.handleTouchEnd && o.handleTouchEnd.apply(o, arguments)
                  );
                }, 4863),
                aj: s.o(function () {
                  return (
                    o.handleTouchEnd && o.handleTouchEnd.apply(o, arguments)
                  );
                }, 4864),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-4d7d0ea6"],
]);
wx.createComponent(u);
