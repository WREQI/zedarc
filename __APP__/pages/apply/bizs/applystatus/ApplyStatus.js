var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  r = require("../../../../stores/app/useNavbar.js"),
  o = require("../../../../utils/index.js"),
  i = require("../../../../cgi/apply.js"),
  u = require("../../../../model/apply/useApply.js"),
  a = require("../../../../model/apply/useApplyStatus.js");
require("../../../../service/broker.js");
var s = require("../../../../config/enum.js"),
  c = require("../../../../service/navigateMp.js"),
  p = require("../../../../config/mpConfig.js"),
  l = require("../../../../service/aegis/platform/not-wujie.js"),
  v = require("../../../../utils/getPlatform.js"),
  d = require("../../../../stores/apply/useDigitalHuman.js"),
  f = require("../../composables/useDigitalHuman.js"),
  m = require("../../../../config/broker/11100/index.js"),
  b = v.getPlatform(),
  g = b.isZxg,
  h = b.isWeixin,
  y = b.isQuickApp,
  S = b.isMpPlugin,
  A = b.isMiniProgram,
  j = b.isPCWeixin,
  k = b.bizPlatform,
  I = {
    components: {
      ProgressBarWrapper: function () {
        return "./ProgressBarWrapper.js";
      },
      VisitStatusItem: function () {
        return "./VisitStatusItem.js";
      },
      DataStatusItem: function () {
        return "./DataStatusItem.js";
      },
      BankcardStatusItem: function () {
        return "./BankcardStatusItem.js";
      },
      AccountStatusItem: function () {
        return "./AccountStatusItem.js";
      },
      SubscribeOfficialAccount: function () {
        return "./SubscribeOfficialAccount.js";
      },
      MultiBrokerEntry: function () {
        return "../../../../components/MultiBrokerEntry/MultiBrokerEntry.js";
      },
      FootPrint: function () {
        return "../../../../bizs/apply/FootPrint.js";
      },
      SubscribeModal: function () {
        return "../../../../bizs/apply/progress/SubscribeModal.js";
      },
      SubscribePopup: function () {
        return "../../../../bizs/apply/progress/SubscribePopup.js";
      },
      SubscribeDialog: function () {
        return "../../../../bizs/apply/recover/SubscribeDialog.js";
      },
      MpDialog: function () {
        return "../../../../common/components/Dialog/Dialog.js";
      },
      CommonBulletinBar: function () {
        return "../../../../components/CommonBulletinBar/CommonBulletinBar.js";
      },
      DigitalHuman: function () {
        return "../../components/DigitalHuman/index.js";
      },
    },
    setup: function () {
      var v,
        b = n.getCurrentInstance().proxy,
        I = u.useApply(),
        R = I.applyInfo,
        B = I.fetchApplyInfo,
        x = I.curStepConf,
        M = I.isRecoverMode,
        C = I.navigateNextStep,
        w = a.useApplyStatus(),
        P = w.showRejectButton,
        T = w.rejectButtonTitle,
        _ = n.storeToRefs(d.useDigitalHuman()).isSupportDigitalHuman,
        D = d.useDigitalHuman().routeToVideoIdMap,
        E = f.useDigitalHuman(),
        q = E.digitalHumanRef,
        H = E.videoId,
        F = E.updateVideoId,
        W = n.inject("scrollHeight", function () {
          return n.ref(0);
        }),
        $ = o.getCurRouteInfo() || {},
        U = n.computed(function () {
          if ("pages/index/trade" === (null == $ ? void 0 : $.route)) {
            var e = W.value;
            return e && e > 0 ? "".concat(e, "px") : "100vh";
          }
          return "";
        }),
        V = n.storeToRefs(r.useNavbarStore()).shownav,
        N = n.computed(function () {
          var e;
          return (
            !(null == (e = m.brokerConfig.common) ? void 0 : e.hideNav) &&
            (V.value || (A && !S))
          );
        });
      v = "h5-weixin" === k || S || g;
      var L = n.ref(!1),
        O = n.ref(!1),
        Y = !0,
        z = n.ref(!1),
        G = n.computed(function () {
          var e, t;
          return (
            "1" ===
              (null == (t = null == (e = R.value) ? void 0 : e.activity_info)
                ? void 0
                : t.bank_activity) &&
            !(null == x ? void 0 : x.hideThirdBankActSubscribe)
          );
        }),
        Z = n.ref(!1),
        J = n.computed(function () {
          return h && Z.value;
        }),
        Q = n.computed(function () {
          return !0;
        }),
        K = null,
        X = 5,
        ee = n.computed(function () {
          if ("1" === R.value.has_account) return s.FAIL_TYPE.BIND;
          switch (R.value.reject_type) {
            case "2":
              return s.FAIL_TYPE.BAN;
            case "1":
              return s.FAIL_TYPE.REOPEN;
            default:
              return s.FAIL_TYPE.RECOVER;
          }
        }),
        te = function () {
          K && clearInterval(K);
        },
        ne = (function () {
          var n = t(
            e().mark(function t() {
              var n, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ("0" !==
                        (null == (n = R.value.visitinfo)
                          ? void 0
                          : n.query_result) &&
                        "1" !== (null == n ? void 0 : n.query_result)) ||
                        ((r = 1e3 * n.refresh_interval),
                        (X = n.refresh_times - 1),
                        r > 0 &&
                          (K = setInterval(function () {
                            X > 0 && ((X -= 1), B({ force: !0 })),
                              X <= 0 && te();
                          }, r)));
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })();
      function re() {
        o.getIsMpPluginComponent() &&
          (n.index.getPluginContext = function () {
            return b;
          });
      }
      var oe,
        ie = [];
      return (
        n.onMounted(
          t(
            e().mark(function r() {
              var o, i;
              return e().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      re(),
                        M.value
                          ? 1 === ie.length
                            ? F(ie[0])
                            : F(D.ApplyRecover)
                          : F(D.ApplyProgress),
                        h &&
                          (ne(),
                          setTimeout(function () {
                            Y || (z.value = !0);
                          }, 1500)),
                        (g || y) &&
                          (b.$sdk.pageWillAppear(
                            t(
                              e().mark(function t() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        ne();
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                }, t);
                              })
                            )
                          ),
                          b.$sdk.pageWillDisAppear(function () {
                            te();
                          }));
                      try {
                        P.value &&
                          l.aegisReporter.reportEvent(
                            "APPLY-STATUS-SHOW-REJECT-BUTTON"
                          ),
                          l.aegisReporter.reportEvent("APPLY-STATUS-DATA", {
                            ext2: JSON.stringify({
                              isReject: R.value.is_reject,
                              rejectType: R.value.reject_type,
                              dataAudit: R.value.data_audit,
                              bankAtive: R.value.bank_active,
                              acctActive: R.value.acct_active,
                              visitStatus: R.value.visit_status,
                              hasAccount: R.value.has_account,
                              failReasons: R.value.fail_reasons,
                            }),
                          });
                      } catch (e) {}
                      if (!M.value) {
                        r.next = 6;
                        break;
                      }
                      (g || y) &&
                        b.$sdk.pageWillAppear(
                          t(
                            e().mark(function t() {
                              var n = arguments;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          !(
                                            n.length > 0 && void 0 !== n[0]
                                              ? n[0]
                                              : {}
                                          ).refresh
                                        ) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (e.prev = 2),
                                          (e.next = 5),
                                          B({ force: !0 })
                                        );
                                      case 5:
                                        b.$router.replace({
                                          name: "ApplyGuide",
                                        }),
                                          (e.next = 10);
                                        break;
                                      case 8:
                                        (e.prev = 8), (e.t0 = e.catch(2));
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[2, 8]]
                              );
                            })
                          )
                        ),
                        (r.next = 10);
                      break;
                    case 6:
                      if (
                        ((null == (o = b.$route.query)
                          ? void 0
                          : o.submittip) &&
                          n.index.showToast({
                            title: "开户审核中 请耐心等待",
                            icon: "none",
                          }),
                        J.value &&
                          b.$stat.click(
                            "trade.apply.progress.subscribebtn_show"
                          ),
                        !g && !y)
                      ) {
                        r.next = 10;
                        break;
                      }
                      return (
                        (i = m.brokerConfig.apply.applyRetainInfos),
                        (r.next = 10),
                        b.$sdk.applyAccountRetain(i, !0).catch(n.noop)
                      );
                    case 10:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )
        ),
        n.onPageShow(function () {
          re();
        }),
        h &&
          (n.onUnmounted(function () {
            return te();
          }),
          n.onActivated(function () {
            return ne();
          }),
          n.onDeactivated(function () {
            return te();
          }),
          i.applyCgi.querySubscribeInfo().then(function (e) {
            (Y = e), (Z.value = !Y);
          })),
        {
          broker: m.brokerConfig,
          applyInfo: R,
          fetchApplyInfo: B,
          curStepConf: x,
          isZxg: g,
          isWeixin: h,
          isQuickApp: y,
          isRecoverMode: M,
          isMpWeixin: Q,
          shownav: N,
          showMultipleEntry: v,
          pageHeight: U,
          subscribeDialogVisible: O,
          subscribeModal: z,
          isThirdBankActUser: G,
          showSubscribeBtn: J,
          openSubscribe: function () {
            (z.value = !0),
              b.$stat.click("trade.apply.progress.subscribe_platform");
          },
          doRecoverButtonFunc:
            ((oe = t(
              e().mark(function t() {
                var n, r, i, u;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        b.$stat.click("trade.apply.fail.reapply"),
                          j
                            ? (O.value = !0)
                            : ee.value !== s.FAIL_TYPE.BAN
                            ? ee.value !== s.FAIL_TYPE.BIND
                              ? L.value ||
                                ((L.value = !0),
                                g || y
                                  ? ((n = [
                                      ""
                                        .concat(location.origin)
                                        .concat(location.pathname),
                                      "/apply/guide?to=apply",
                                    ]
                                      .filter(Boolean)
                                      .join("#")),
                                    (r = o.keepClientURlArgs(n)),
                                    b.$sdk.openUrlWithExtraWebview({ url: r }))
                                  : (function () {
                                      var e,
                                        t,
                                        n,
                                        r,
                                        o =
                                          null ==
                                          (r =
                                            null ==
                                            (n =
                                              null ==
                                              (t =
                                                null ==
                                                (e = requireMiniProgram())
                                                  ? void 0
                                                  : e.main2Plugin)
                                                ? void 0
                                                : t.call(e))
                                              ? void 0
                                              : n.subscribeApplyInfo)
                                            ? void 0
                                            : r.call(n),
                                        i = o.hasSubscribeCount,
                                        u = o.requestSubscibe,
                                        a = o.getIsOfficialAccountSubscribed;
                                      return !a || (null == a ? void 0 : a())
                                        ? Promise.resolve(!0)
                                        : null == i
                                        ? void 0
                                        : i()
                                            .then(function (e) {
                                              return (
                                                !!e ||
                                                u()
                                                  .then(function () {
                                                    return !1;
                                                  })
                                                  .catch(function () {
                                                    return !1;
                                                  })
                                              );
                                            })
                                            .catch(function (e) {
                                              return !0;
                                            });
                                    })().then(function () {
                                      C();
                                    }),
                                (L.value = !1),
                                b.$stat.click(
                                  "trade.apply.recover.improvedata"
                                ))
                              : g
                              ? ((i = [
                                  ""
                                    .concat(location.origin)
                                    .concat(location.pathname),
                                  "/apply/bind",
                                ]
                                  .filter(Boolean)
                                  .join("#")),
                                (u = o.keepClientURlArgs(i)),
                                b.$sdk.openUrlWithExtraWebview({ url: u }))
                              : y
                              ? b.$sdk.launchZxgApp()
                              : b.$router.push({ name: "AccountBind" })
                            : c.navigateTo({
                                url: "/pages/apply/index",
                                linkType: p.linkTypeMap.plugin2MainMp,
                              });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )),
            function () {
              return oe.apply(this, arguments);
            }),
          showRejectButton: P,
          rejectButtonTitle: T,
          isSupportDigitalHuman: _,
          digitalHumanRef: q,
          videoId: H,
          updateVideoId: F,
          handleUpdateVideoId: function (e) {
            ie.push(e);
          },
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("digital-human") +
    n.resolveComponent("CommonBulletinBar") +
    n.resolveComponent("progress-bar-wrapper") +
    n.resolveComponent("visit-status-item") +
    n.resolveComponent("data-status-item") +
    n.resolveComponent("bankcard-status-item") +
    n.resolveComponent("account-status-item") +
    n.resolveComponent("subscribe-official-account") +
    n.resolveComponent("multi-broker-entry") +
    n.resolveComponent("FootPrint") +
    n.resolveComponent("subscribe-dialog") +
    n.resolveComponent("SubscribePopup") +
    n.resolveComponent("mp-dialog")
  )(),
  Math;
var R = n._export_sfc(I, [
  [
    "render",
    function (e, t, r, o, i, u) {
      return n.e(
        { a: o.isSupportDigitalHuman },
        o.isSupportDigitalHuman
          ? {
              b: n.sr("digitalHumanRef", "f819dda9-0"),
              c: n.p({ videoId: o.videoId }),
            }
          : {},
        { d: !o.isRecoverMode },
        o.isRecoverMode ? {} : { e: n.p({ scene: "APPLY_PROGRESS" }) },
        {
          f: n.o(o.doRecoverButtonFunc),
          g: n.o(o.handleUpdateVideoId),
          h: n.o(o.doRecoverButtonFunc),
          i: n.o(o.handleUpdateVideoId),
          j: n.o(o.doRecoverButtonFunc),
          k: o.showSubscribeBtn,
        },
        o.showSubscribeBtn ? { l: n.o(o.openSubscribe) } : {},
        { m: o.showRejectButton },
        o.showRejectButton
          ? {
              n: n.t(o.rejectButtonTitle),
              o: n.o(function () {
                return (
                  o.doRecoverButtonFunc &&
                  o.doRecoverButtonFunc.apply(o, arguments)
                );
              }),
            }
          : {},
        {
          p: o.isMpWeixin ? 1 : "",
          q:
            o.isRecoverMode && o.applyInfo.opertips && !o.showMultipleEntry
              ? 1
              : "",
          r:
            (o.isRecoverMode && o.applyInfo.opertips) || !o.showMultipleEntry
              ? ""
              : 1,
          s:
            o.isRecoverMode && o.applyInfo.opertips && o.showMultipleEntry
              ? 1
              : "",
          t: o.isRecoverMode && o.applyInfo.opertips,
        },
        o.isRecoverMode && o.applyInfo.opertips
          ? { v: n.t(o.applyInfo.opertips) }
          : {},
        { w: o.showMultipleEntry },
        o.showMultipleEntry
          ? {
              x: n.p({ "page-type": o.isRecoverMode ? "recover" : "progress" }),
            }
          : {},
        { y: !o.isRecoverMode && o.curStepConf.bottomText },
        !o.isRecoverMode && o.curStepConf.bottomText
          ? { z: o.curStepConf.bottomText }
          : {},
        {
          A: n.n(o.isSupportDigitalHuman ? "section-content" : ""),
          B: n.o(function (e) {
            return (o.subscribeDialogVisible = !1);
          }),
          C: n.p({ visible: o.isRecoverMode && o.subscribeDialogVisible }),
          D: n.o(function (e) {
            return (o.subscribeModal = e);
          }),
          E: n.p({ value: o.subscribeModal }),
          F: n.p({ id: "mp-dialog" }),
          G: o.shownav ? 1 : "",
          H: o.pageHeight,
        }
      );
    },
  ],
  ["__scopeId", "data-v-f819dda9"],
]);
wx.createComponent(R);
