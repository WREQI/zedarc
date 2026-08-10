var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  i = require("../../utils/getPlatform.js"),
  n = require("../../model/apply/facecheck/index.js"),
  a = require("../../model/apply/useDegradation.js"),
  s = require("../../model/apply/useApply.js"),
  c = require("../../model/apply/usePreReview.js"),
  p = require("../../model/apply/utils/video.js"),
  l = require("../../config/enum.js");
require("../../service/broker.js"),
  require("../../cgi/base.js"),
  require("../../utils/index.js"),
  require("../../utils/accountHelper.js");
var u = require("../../service/sdk/lib/enum.js");
require("../../service/sdk/lib/api.js"),
  require("../../service/sdk/platform/mp-weixin.js");
var d = require("../../common/components/Dialog/index.js"),
  f = require("../../stores/app/useMode.js"),
  g = require("../../bizs/apply/SignProtocols/useSignProtocols.js"),
  m = require("../../service/aegis/platform/not-wujie.js"),
  h = require("../../stores/apply/useDigitalHuman.js"),
  v = require("./composables/useDigitalHuman.js"),
  P = require("../../mixin/platforms/index.js"),
  C = require("../../config/broker/11100/index.js"),
  x = i.getPlatform(),
  E = x.platform,
  b = (x.bizPlatform, x.isZxg),
  S = x.bizPlatformVer,
  y = x.isMpPlugin,
  A = x.isLctXcx,
  I = x.isInZxgXcxH5,
  M = {
    options: { styleIsolation: "shared" },
    mixins: [P.pluginMixins],
    components: {
      SignProtocol: function () {
        return "../../bizs/apply/SignProtocols/index.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      IconTip: function () {
        return "../../bizs/apply/video/IconTipNew.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      FootPrint: function () {
        return "../../bizs/apply/FootPrint.js";
      },
      StepButtons: function () {
        return "./components/StepButtons/StepButtons.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
    },
    provide: function () {
      return { onPageInit: this.onPageInit };
    },
    setup: function () {
      var e = o.getCurrentInstance().proxy,
        t = f.useModeStore(),
        r = o.storeToRefs(t).simpleMode,
        i = o.ref(y),
        p = a.useDegradation(new n.FaceController(), {}),
        u = p.isDegraded,
        d = p.setDegraded,
        m = p.service,
        P = s.useApply(),
        C = P.applyInfo,
        x = P.setLocalApplyInfo,
        E = P.isRecoverMode,
        S = P.commitApplyData,
        I = P.getMode,
        M = P.curStepInfo,
        k = P.curStepConf,
        T = P.navigateNextStep,
        D = c.usePreReview(),
        w = D.isModifyMode,
        R = D.goNextModifyStep,
        N = o.storeToRefs(h.useDigitalHuman()).isSupportDigitalHuman,
        L = h.useDigitalHuman().routeToVideoIdMap,
        H = v.useDigitalHuman(),
        j = H.digitalHumanRef,
        O = H.videoId,
        F = o.ref(!1),
        q = o.ref("");
      o.ref("");
      var _ = o.ref(!0),
        Y = k.protocol || {},
        U = g.useSignProtocols(C, Y),
        G = U.protocolConfigObj,
        V = U.genMergingList,
        $ = U.isProtocolListInit,
        z = o.ref(Y.defaultChecked || !1),
        B = o.ref(!1),
        K = o.ref(!1),
        W = o.ref(!1),
        X = o.ref(""),
        J = o.computed(function () {
          var e = !1;
          return (
            G.signText && (e = !0),
            K.value && (e = !1),
            G.onlyShowMpPlugin && !i.value && (e = !1),
            e
          );
        }),
        Z = o.computed(function () {
          var t,
            r,
            o = "",
            i = "";
          if (K.value && "h5" === e.$route.query._from)
            try {
              var n = e.$route.query.facelive,
                a = JSON.parse(decodeURIComponent(n));
              (t = a.name), (r = a.idCardNumber);
            } catch (e) {}
          else {
            var s = C.value;
            (t = s.cred_name), (r = s.cred_id);
          }
          return (
            t && (o = "".concat(t[0]).concat("*".repeat(t.length - 1))),
            r &&
              (i = ""
                .concat(r[0])
                .concat("*".repeat(r.length - 2))
                .concat(r[r.length - 1])),
            { credName: t, credId: r, maskName: o, maskId: i }
          );
        });
      return {
        applyInfo: C,
        setLocalApplyInfo: x,
        isRecoverMode: E,
        curStepConf: k,
        curStepInfo: M,
        navigateNextStep: T,
        commitApplyData: S,
        getMode: I,
        isModifyMode: w,
        goNextModifyStep: R,
        faceMode: q,
        FACELIVE_TYPE: l.FACELIVE_TYPE,
        isRecording: F,
        faceProtocolConfig: G,
        genMergingList: V,
        isProtocolListInit: $,
        isProtocolCheck: z,
        isPending: _,
        faceController: m,
        userCred: Z,
        isShowProtocol: J,
        isEnterWxFaceCheck: B,
        isShowMpExitDialog: W,
        mpExitDialogText: X,
        isMPforH5: K,
        isZxg: b,
        simpleMode: r,
        showAuthInfo: i,
        isLctXcx: A,
        lctApplyFacecheckMode: o.ref("0"),
        isDegraded: u,
        setDegraded: d,
        isSupportDigitalHuman: N,
        routeToVideoIdMap: L,
        digitalHumanRef: j,
        videoId: O,
      };
    },
    beforeUnmount: function () {},
    deactivated: function () {
      I && document.removeEventListener("visibilitychange", this.checkResult);
    },
    methods: {
      clickProtocol: function (e) {
        (this.isProtocolCheck = e),
          this.isProtocolCheck ||
            o.index.showToast({
              title: "不签署协议，则无法继续完成开户流程",
              icon: "none",
            });
      },
      onPageInit: function () {
        var e = this;
        return r(
          t().mark(function r() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e.videoId = e.routeToVideoIdMap.ApplyFacecheck),
                        (t.prev = 1),
                        (t.next = 4),
                        e.initPage()
                      );
                    case 4:
                      (e.isPending = !1), (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(1)),
                        (e.isPending = !1),
                        m.aegisReporter.sdk.error({
                          msg: "apply-facecheck-page-init-error",
                          ext2: JSON.stringify(t.t0 || {}),
                          trace: "trace",
                        });
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[1, 7]]
            );
          })
        )();
      },
      initPage: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var n, a, s, c, p, u, d, f, g, h, v;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e.isMPforH5 = ["h5", "zxg-plugin"].includes(
                          null == (n = e.$route.query) ? void 0 : n._from
                        )),
                        (a = o.wx$1.getSystemInfoSync()),
                        (s = a.version),
                        E === i.PLATFORM_HARMONY || !o.lt(s, "6.7,2"))
                      ) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (e.showDialog({
                          message:
                            "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试",
                          onConfirm: function () {
                            return e.$router.back();
                          },
                        }),
                        void m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-FACECHECK-VERSION-ERROR"
                        ))
                      );
                    case 4:
                      if ((e.genMergingList(), (c = !1), !e.isMPforH5)) {
                        t.next = 11;
                        break;
                      }
                      (p = e.$route.query.facelive), (c = !!p), (t.next = 22);
                      break;
                    case 11:
                      return (t.prev = 11), (t.next = 14), e.getMode();
                    case 14:
                      (u = t.sent), (t.next = 20);
                      break;
                    case 17:
                      return (
                        (t.prev = 17),
                        (t.t0 = t.catch(11)),
                        t.abrupt(
                          "return",
                          void e.showDialog({
                            message: t.t0.retmsg,
                            onConfirm: function () {
                              return e.$router.back();
                            },
                          })
                        )
                      );
                    case 20:
                      (d = e.applyInfo.face_live),
                        (f = u.face_live),
                        (c = d !== l.VIDEO_STATUS.UPLOADED),
                        (e.faceMode = f),
                        e.faceMode === l.FACELIVE_TYPE.SHANGTANG &&
                          (e.isShowMpLabel = !1);
                    case 22:
                      if (c) {
                        t.next = 24;
                        break;
                      }
                      return t.abrupt("return", void e.goNextStep());
                    case 24:
                      if (
                        ((g = e.userCred),
                        (h = g.credName),
                        (v = g.credId),
                        h && v)
                      ) {
                        t.next = 27;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (e.showDialog({
                          message: "缺少用户信息 请重试",
                          onConfirm: function () {
                            return e.$router.back();
                          },
                        }),
                        void m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-FACECHECK-USERCRED-EMPTY"
                        ))
                      );
                    case 27:
                      e.isMPforH5 &&
                        !e.isEnterWxFaceCheck &&
                        ((e.isEnterWxFaceCheck = !0), e.processFaceCheck());
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[11, 17]]
            );
          })
        )();
      },
      processFaceCheck: o.debounce(
        r(
          t().mark(function e() {
            var r,
              i,
              n,
              a,
              s,
              c,
              f,
              g,
              h,
              v,
              P = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isShowProtocol || this.isProtocolCheck) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void d.Dialog({
                          message: "不签署协议，则无法继续完成开户流程",
                          confirmButtonText: "同意签署",
                          cancelButtonText: "取消",
                          showCancelButton: !0,
                          onConfirm: function () {
                            (P.isProtocolCheck = !0),
                              P.$stat.click(
                                "trade.apply.facelive.protocol_confirm"
                              );
                          },
                          onCancel: function () {
                            P.$stat.click(
                              "trade.apply.facelive.protocol_cancel"
                            );
                          },
                        })
                      );
                    case 2:
                      if ("devtools" !== E) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", void this.goNextStep());
                    case 4:
                      if (!A || "1" !== this.lctApplyFacecheckMode) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        this.toLctApplyTransferPlugin()
                      );
                    case 6:
                      if (!I) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (r =
                          this.applyInfo.face_live !== l.VIDEO_STATUS.UPLOADED),
                        (i = this.userCred),
                        (n = i.credName),
                        (a = i.credId),
                        e.abrupt(
                          "return",
                          ((this.mpPath = p.getMpForH5Path({
                            faceCheck: r,
                            credId: a,
                            credName: n,
                          })),
                          void window.wx.miniProgram.navigateTo({
                            url: "/".concat(this.mpPath),
                          }))
                        )
                      );
                    case 9:
                      if (
                        !this.isDegraded &&
                        (this.faceMode !== l.FACELIVE_TYPE.SHANGTANG || b)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return", void (this.isRecording = !0));
                    case 11:
                      s = this.faceMode;
                      try {
                        b &&
                          o.lt(S, "11.7.0") &&
                          this.faceMode === l.FACELIVE_TYPE.SHANGTANG &&
                          ((s = l.FACELIVE_TYPE.YOUTU),
                          m.aegisReporter.reportEvent(
                            "MONITOR-APPLY-FACECHECK-ZXGYOUTU-DEFAULT"
                          ));
                      } catch (e) {}
                      return (
                        (e.prev = 13),
                        (c = this.userCred),
                        (f = c.credName),
                        (g = c.credId),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-FACECHECK-CLICK"
                        ),
                        (e.next = 18),
                        this.faceController.faceCheck({
                          name: f,
                          id: g,
                          faceliveType:
                            this.faceMode === l.FACELIVE_TYPE.SHANGTANG
                              ? u.faceliveTypeOpt.shangTang
                              : u.faceliveTypeOpt.youTu,
                        })
                      );
                    case 18:
                      return (
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-FACECHECK-SUC"
                        ),
                        (e.next = 21),
                        this.faceController.verifyFace()
                      );
                    case 21:
                      m.aegisReporter.reportEvent(
                        "MONITOR-APPLY-FACECHECK-RESULT-SUC",
                        { ext3: s }
                      ),
                        (e.next = 30);
                      break;
                    case 24:
                      if (
                        ((e.prev = 24),
                        (e.t0 = e.catch(13)),
                        !(
                          (b && /11\d\d\d/.test(e.t0.err_code)) ||
                          (null == e.t0 ? void 0 : e.t0.downgrade)
                        ))
                      ) {
                        e.next = 28;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (d.Dialog({
                          message: "服务异常，请重试",
                          confirmButtonText: "重试",
                          onConfirm: function () {
                            P.setDegraded(),
                              (P.faceMode = l.FACELIVE_TYPE.SHANGTANG),
                              P.processFaceCheck(),
                              m.aegisReporter.reportEvent(
                                "MONITOR-APPLY-FACECHECK-DEGRADE-RETRY"
                              );
                          },
                        }),
                        void m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-FACECHECK-DEGRADE"
                        ))
                      );
                    case 28:
                      return (
                        this.isMPforH5 &&
                          ("",
                          (v =
                            10004 === e.t0.errcode
                              ? "人脸与身份信息不匹配"
                              : 90100 === e.t0.errcode
                              ? "您已取消人脸识别验证"
                              : "活体检测不通过[".concat(
                                  null !== (h = e.t0.errcode) && void 0 !== h
                                    ? h
                                    : JSON.stringify(e.t0),
                                  "]"
                                )),
                          this.showDialog({
                            message: e.t0.retmsg || v || e.t0,
                          })),
                        e.abrupt(
                          "return",
                          ("1" ===
                            (null == e.t0 ? void 0 : e.t0.jumpToIDCard) &&
                            (this.$stat.click(
                              "trade.apply.facelive.jump_idcard"
                            ),
                            this.navigateNextStep({
                              targetStep: "ApplyIdCard",
                            })),
                          (this.videoId = "4-2"),
                          void m.aegisReporter.reportEvent(
                            "MONITOR-APPLY-FACECHECK-RESULT-FAIL",
                            { ext2: JSON.stringify(e.t0), ext3: s }
                          ))
                        )
                      );
                    case 30:
                      this.setLocalApplyInfo({
                        face_live: l.VIDEO_STATUS.UPLOADED,
                      }),
                        this.$stat.click("trade.apply.facelive.finish"),
                        this.isRecoverMode ||
                          this.$stat.click("trade.apply.facelive.finish.first"),
                        this.goNextStep();
                    case 31:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[13, 24]]
            );
          })
        ),
        1e3,
        { leading: !0 }
      ),
      goNextStep: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.isModifyMode) this.goNextModifyStep();
        else if (this.isMPforH5) {
          var r = this.$route.query,
            o = r._from,
            i = r.oem;
          this.$router.replace({
            name: "ApplyVideo",
            query: { _from: o, oem: i },
          });
        } else this.navigateNextStep(e({ type: "replace" }, t));
      },
      showDialog: function (e) {
        var t = e.message,
          r = e.onConfirm,
          o = void 0 === r ? function () {} : r;
        this.isMPforH5
          ? ((this.isShowMpExitDialog = !0),
            (this.mpExitDialogText = t || "系统异常 请稍后再试"))
          : d.Dialog({ message: t || "网络繁忙 请稍后再试", onConfirm: o });
      },
      toLctApplyTransferPlugin: function () {
        m.aegisReporter.reportEvent("MONITOR-APPLY-FACECHECK-2-PLUGIN");
        var e = "plugin://wzq-plugin/lctApplyTransfer?dealercode=".concat(
          C.brokerConfig.base.code,
          "&target=facecheck"
        );
        window.wx.miniProgram.navigateTo({ url: e });
      },
    },
    onShow: function () {
      var e, t;
      null == (t = null == (e = o.wx$1) ? void 0 : e.hideHomeButton) ||
        t.call(e);
    },
  };
Array ||
  (
    o.resolveComponent("digital-human") +
    o.resolveComponent("progress-bar") +
    o.resolveComponent("icon-tip") +
    o.resolveComponent("FootPrint") +
    o.resolveComponent("SignProtocol") +
    o.resolveComponent("StepButtons") +
    o.resolveComponent("MpExitDialog") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("ApplyWrap") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/MpExitDialog/MpExitDialog.js";
      } +
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var k = o._export_sfc(M, [
  [
    "render",
    function (e, t, r, i, n, a) {
      return o.e(
        { a: e.rootFontSize, b: !i.isRecording },
        i.isRecording
          ? {}
          : o.e(
              { c: i.isSupportDigitalHuman },
              i.isSupportDigitalHuman
                ? {
                    d: o.sr("digitalHumanRef", "bb5fdff9-2,bb5fdff9-1"),
                    e: o.p({ videoId: i.videoId }),
                  }
                : {},
              {
                f: o.p({ "step-name": i.curStepInfo.name }),
                g: i.showAuthInfo,
              },
              i.showAuthInfo
                ? { h: o.t(i.userCred.maskName), i: o.t(i.userCred.maskId) }
                : {},
              {
                j: o.n(i.isSupportDigitalHuman ? "section-content" : ""),
                k: i.isShowProtocol,
              },
              i.isShowProtocol
                ? o.e(
                    { l: i.isProtocolListInit },
                    i.isProtocolListInit
                      ? {
                          m: o.sr("SignProtocol", "bb5fdff9-8,bb5fdff9-7"),
                          n: o.o(a.clickProtocol),
                          o: o.p({
                            "protocol-config": i.faceProtocolConfig,
                            "is-protocol-check": i.isProtocolCheck,
                          }),
                        }
                      : {}
                  )
                : {},
              {
                p: o.o(a.processFaceCheck),
                q: o.o(e.launchSuccess),
                r: o.o(e.launchError),
                s: o.p({
                  stat: "facecheck",
                  fixed: !0,
                  "hide-prev-button": i.isMPforH5,
                  "disable-next-button":
                    i.isPending || (i.isShowProtocol && !i.isProtocolCheck),
                  "next-button-text": "开始人脸识别验证",
                  "enable-mp-launcher":
                    e.isShowMpLabel &&
                    ((i.isShowProtocol && i.isProtocolCheck) ||
                      (!i.isShowProtocol && !i.isPending)) &&
                    !i.isLctXcx,
                  "mp-launcher-origin-id": e.mpOriginId,
                  "mp-launcher-path": e.mpPath,
                  "show-safe-icon": !0,
                }),
              }
            ),
        {
          t: o.o(function (e) {
            return (i.isShowMpExitDialog = e);
          }),
          v: o.p({ value: i.isShowMpExitDialog, content: i.mpExitDialogText }),
          w: o.p({ id: "mp-dialog" }),
          x: o.n(i.simpleMode ? "page-apply-facecheck__simple-mode" : ""),
          y: o.sr("#global-wrap", "bb5fdff9-0"),
          z: o.p({
            id: "global-wrap",
            filePath: "/apply/facecheck",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-bb5fdff9"],
]);
wx.createPage(k);
