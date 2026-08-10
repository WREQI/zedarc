var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  r = require("../../stores/apply/useBankcard.js"),
  n = require("../../stores/apply/useCommonData.js"),
  i = require("../../model/apply/useApply.js"),
  o = require("../../utils/getPlatform.js"),
  s = require("../../common/components/Dialog/index.js"),
  u = require("../../service/stat/mp-weixin.js"),
  l = require("../../config/key.js"),
  p = require("../../config/bank.js"),
  c = require("../../service/aegis/platform/not-wujie.js"),
  d = require("../../stores/apply/useDigitalHuman.js"),
  v = require("./composables/useDigitalHuman.js"),
  f = require("../../mixin/platforms/index.js"),
  g = o.getPlatform(),
  m = g.isWeixin,
  b = g.platform,
  k = {
    mixins: [f.pluginMixins],
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      InputCard: function () {
        return "./bizs/bankcard/InputCard.js";
      },
      SelectCard: function () {
        return "./bizs/bankcard/SelectCard.js";
      },
      Loading: function () {
        return "../../common/components/Loading/index.js";
      },
      BankCardSupportDialog: function () {
        return "./bizs/bankcard/BankCardSupportDialog.js";
      },
      BankCardPrivacyDialog: function () {
        return "./bizs/bankcard/BankCardPrivacyDialog.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
    },
    setup: function () {
      var o = t.getCurrentInstance().proxy,
        f = t.ref(!1),
        g = i.useApply(),
        b = g.curStepInfo,
        k = g.curStepConf,
        h = g.navigateNextStep,
        y = t.storeToRefs(d.useDigitalHuman()).isSupportDigitalHuman,
        C = d.useDigitalHuman().routeToVideoIdMap,
        P = v.useDigitalHuman(),
        S = P.digitalHumanRef,
        D = P.videoId,
        w = t.ref(!1),
        x = t.ref(!1),
        I = t.ref(!0),
        j = t.reactive({
          privacyDialog: !1,
          bankListDialog: !1,
          bankPwdProcessing: !1,
        }),
        B = n.useCommonData(),
        L = t.storeToRefs(B).applyArgs,
        q = r.useBankcardStore(),
        H = t.storeToRefs(q),
        _ = H.cftBankcardList,
        M = H.supportedBankList,
        A = q.getInitData,
        R = q.checkPrivacySign,
        T = q.checkAcctSupport,
        z = t.ref(!1),
        N = k.isSupportCftCard,
        W = void 0 !== N && N,
        G = t.ref([]),
        E = t.computed(function () {
          var e = _.value.filter(function (e) {
            return e.isSupport;
          });
          return (
            G.value.length > 0 &&
              e.forEach(function (e) {
                e.disabled = !G.value.includes(e.bankAbbr);
              }),
            e
          );
        }),
        V = t.computed(function () {
          return G.value.length > 0
            ? M.value.filter(function (e) {
                return G.value.includes(e.bankAbbr);
              })
            : M.value;
        });
      function O() {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = a(
          e().mark(function a() {
            var r;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((D.value = C.ApplyBindCard),
                      (r = L.value.limit_abbr) &&
                        (G.value = Array.from(
                          new Set(
                            r
                              .split(".")
                              .map(function (e) {
                                return p.normalizeBankAbbr(e);
                              })
                              .filter(Boolean)
                          )
                        )),
                      (e.t0 = f.value),
                      e.t0)
                    ) {
                      e.next = 25;
                      break;
                    }
                    return (
                      t.watch(
                        function () {
                          return w.value;
                        },
                        function (e) {
                          f.value &&
                            (e
                              ? u.stat.click(
                                  "trade.apply.bankcard.mode_input_brow"
                                )
                              : (u.stat.click(
                                  "trade.apply.bankcard.mode_select_brow"
                                ),
                                E.value.length > 0 &&
                                  u.stat.click(
                                    "trade.apply.bankcard.mode_select_hascard_brow"
                                  )));
                        }
                      ),
                      (e.next = 8),
                      T()
                    );
                  case 8:
                    if (((z.value = e.sent), !W || !z.value)) {
                      e.next = 21;
                      break;
                    }
                    return (e.next = 12), R();
                  case 12:
                    if (((x.value = e.sent), !x.value)) {
                      e.next = 18;
                      break;
                    }
                    return (
                      (e.next = 16), U({ isPullCard: W, isPullIdCard: !0 })
                    );
                  case 16:
                    e.next = 19;
                    break;
                  case 18:
                    j.privacyDialog = !0;
                  case 19:
                    e.next = 23;
                    break;
                  case 21:
                    return (e.next = 23), U({ isPullCard: !1 });
                  case 23:
                    (f.value = !0),
                      (function () {
                        if (m) {
                          var e = o.$route.query._jump_start_time;
                          if (e) {
                            var a = Date.now(),
                              r =
                                "1" ===
                                t.wx$1.getStorageSync(l.PLUGIN_FIRST_OPEN);
                            c.aegisReporter.reportTime(
                              "MONITOR-JUMP-TIME-CARD",
                              a - e,
                              { ext2: r ? "first" : "cache" }
                            );
                          }
                        }
                      })();
                  case 25:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )).apply(this, arguments);
      }
      function U(e) {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = a(
          e().mark(function a(t) {
            var r, n, i, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.isPullCard),
                      (n = void 0 !== r && r),
                      (i = t.isPullIdCard),
                      (o = void 0 !== i && i),
                      (e.next = 3),
                      A({ pullCftCard: n, pullCftIdCard: o })
                    );
                  case 3:
                    w.value = !W || (W && 0 === E.value.length);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )).apply(this, arguments);
      }
      t.provide("onPageInit", O);
      var J,
        K = t.computed(function () {
          return !(!W || !z.value) && (!x.value || E.value.length > 0);
        }),
        Q = t.debounce(
          function () {
            !W || x.value
              ? ((w.value = !w.value), w.value && (I.value = !1))
              : (j.privacyDialog = !0);
          },
          1e3,
          { leading: !0 }
        );
      return {
        onPageInit: O,
        isPageInit: f,
        curStepInfo: b,
        showStatus: j,
        showSupportCardList: function () {
          j.bankListDialog || (j.bankListDialog = !0);
        },
        onBankPwdProcessing: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          j.bankPwdProcessing = !!e;
        },
        confirmPrivacy:
          ((J = a(
            e().mark(function a() {
              var t, r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        null == (r = null == (t = S.value) ? void 0 : t.play) ||
                          r.call(t);
                      } catch (e) {}
                      return (
                        (x.value = !0),
                        (e.next = 4),
                        U({ isPullCard: !0, isPullIdCard: !0 })
                      );
                    case 4:
                      0 === E.value.length &&
                        s.Dialog({ message: "未拉取到银行卡信息，请手动输入" });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, a);
            })
          )),
          function () {
            return J.apply(this, arguments);
          }),
        refusePrivacy: function () {
          var e, a;
          try {
            null == (a = null == (e = S.value) ? void 0 : e.play) || a.call(e);
          } catch (e) {}
          (x.value = !1), U({ isPullCard: !1 });
        },
        closePrivacy: function () {
          j.privacyDialog = !1;
        },
        isInputMode: w,
        isSetDefaultInputValue: I,
        canSwitchMode: K,
        switchMode: Q,
        filterCardList: E,
        filterBankList: V,
        navigateNextStep: h,
        isSupportDigitalHuman: y,
        digitalHumanRef: S,
        videoId: D,
      };
    },
    onShow: function () {
      var e, a;
      "ios" === b &&
        this.isSupportDigitalHuman &&
        "1-1" === this.videoId &&
        (null ==
        (a = null == (e = this.digitalHumanRef) ? void 0 : e.isPlayEnded)
          ? void 0
          : a.call(e)) &&
        this.digitalHumanRef.resetVideo();
    },
  };
Array ||
  (
    t.resolveComponent("digital-human") +
    t.resolveComponent("ProgressBar") +
    t.resolveComponent("SelectCard") +
    t.resolveComponent("InputCard") +
    t.resolveComponent("Loading") +
    t.resolveComponent("BankCardSupportDialog") +
    t.resolveComponent("BankCardPrivacyDialog") +
    t.resolveComponent("MpDialog") +
    t.resolveComponent("ApplyWrap") +
    t.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var h = t._export_sfc(k, [
  [
    "render",
    function (e, a, r, n, i, o) {
      return t.e(
        { a: e.rootFontSize, b: n.isSupportDigitalHuman },
        n.isSupportDigitalHuman
          ? {
              c: t.sr("digitalHumanRef", "56301e98-2,56301e98-1"),
              d: t.p({ videoId: n.videoId }),
            }
          : {},
        { e: t.p({ "step-name": n.curStepInfo.name }), f: n.isPageInit },
        n.isPageInit
          ? t.e(
              { g: !n.isInputMode },
              n.isInputMode
                ? {
                    m: t.o(n.showSupportCardList),
                    n: t.o(n.switchMode),
                    o: t.o(n.navigateNextStep),
                    p: t.o(n.onBankPwdProcessing),
                    q: t.p({
                      "can-switch-mode": n.canSwitchMode,
                      "supported-bank-list": n.filterBankList,
                      "set-default-value": n.isSetDefaultInputValue,
                    }),
                  }
                : {
                    h: t.o(n.showSupportCardList),
                    i: t.o(n.switchMode),
                    j: t.o(n.navigateNextStep),
                    k: t.o(n.onBankPwdProcessing),
                    l: t.p({ bankcards: n.filterCardList }),
                  }
            )
          : { r: t.p({ size: "23px" }) },
        {
          s: t.n(n.isSupportDigitalHuman ? "section-content" : ""),
          t: t.o(function (e) {
            return (n.showStatus.bankListDialog = !1);
          }),
          v: t.p({
            id: "support-bank",
            visible: n.showStatus.bankListDialog,
            "supported-bank-list": n.filterBankList,
          }),
          w: t.o(n.confirmPrivacy),
          x: t.o(n.refusePrivacy),
          y: t.o(n.closePrivacy),
          z: t.p({ visible: n.showStatus.privacyDialog }),
          A: t.p({ id: "mp-dialog" }),
          B: n.showStatus.bankPwdProcessing,
        },
        (n.showStatus.bankPwdProcessing, {}),
        {
          C: t.sr("#global-wrap", "56301e98-0"),
          D: t.p({
            id: "global-wrap",
            filePath: "/apply/bindcard",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-56301e98"],
]);
wx.createPage(h);
