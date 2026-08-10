require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Objectvalues");
var r = require("../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var n = require("../../common/vendor.js"),
  o = require("../../model/apply/useApply.js"),
  s = require("../../model/apply/usePreReview.js"),
  c = require("../../cgi/apply.js"),
  d = require("../../config/enum.js");
require("../../service/broker.js");
var u = require("../../common/components/Dialog/index.js"),
  l = require("../../filters/date.js");
require("../../service/sdk/lib/api.js");
var p = require("../../service/sdk/platform/mp-weixin.js"),
  f = require("../../config/key.js"),
  S = require("../../service/aegis/platform/not-wujie.js"),
  h = require("../../utils/getPlatform.js"),
  I = require("../../model/apply/profile/utils/string.js"),
  m = require("../../model/apply/profile/utils/index.js"),
  g = require("../../config/errcode.js");
require("../../service/abt/mp-weixin.js");
var A = require("../../stores/app/useMode.js"),
  D = require("../../model/apply/useOomDetect.js"),
  v = require("../../service/stat/mp-weixin.js"),
  C = require("../../model/apply/usePrivacyInfo.js"),
  T = require("../../service/mpPluginSub/index.js"),
  _ = require("../../model/common/useNavigation.js"),
  y = require("../../adapter/router.js"),
  k = require("../../stores/apply/useDigitalHuman.js"),
  R = require("../../stores/apply/useIdCardQuickImport.js"),
  E = require("./composables/useDigitalHuman.js"),
  M = require("./composables/useReport.js"),
  b = require("../../mixin/platforms/index.js"),
  x = require("../../config/broker/11100/index.js"),
  P = require("../../service/mpPluginSub/config.js"),
  w = h.getPlatform(),
  O = w.isZxg,
  L = w.isQuickApp,
  U = w.isLctXcx,
  N = w.bizPlatform,
  F = w.platform,
  j = {
    mixins: [b.pluginMixins],
    components: {
      IdcardPhoto: function () {
        return "../../bizs/apply/idcard/idcardPhoto.js";
      },
      FootPrint: function () {
        return "../../bizs/apply/FootPrint.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      QuickImport: function () {
        return "../../bizs/apply/idcard/QuickImport.js";
      },
      StepButtons: function () {
        return "./components/StepButtons/StepButtons.js";
      },
      ProfileChangeMobile: function () {
        return "../../bizs/apply/profile/ProfileChangeMobile.js";
      },
      DatePicker: function () {
        return "../../components/DatePicker/DatePicker.js";
      },
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
      MpPopup: function () {
        return "../../common/components/Popup/index.js";
      },
      PreReviewModifyCard: function () {
        return "./components/PreReviewModifyCard/PreReviewModifyCard.js";
      },
    },
    setup: function () {
      var l = n.getCurrentInstance().proxy,
        h = n.storeToRefs(A.useModeStore()).simpleMode,
        I = _.useNavigation().gotoApplyRecords,
        m = M.useReport().report,
        g = C.usePrivacyInfo(C.EScene.APPLY),
        T = g.setPrivacySignStatus,
        b = g.getProtocolUrl,
        P = g.getAuthStatus,
        w = g.toProtocol,
        U = n.ref(!1),
        N = x.brokerConfig.apply.captchaLen,
        F = n.ref(!1),
        j = n.ref(!1),
        B = n.ref(!1),
        q = n.ref(!1),
        Y = n.ref(d.MEDIA_STATUS.LOADING),
        H = n.ref(!1),
        G = n.ref(!1),
        z = o.useApply(),
        V = z.isFetch,
        Q = z.applyInfo,
        $ = z.setLocalApplyInfo,
        W = z.isRecoverMode,
        X = z.commitApplyData,
        K = z.getMode,
        J = z.useTelAndIdFirstMode,
        Z = z.curStepConf,
        ee = z.curStepInfo,
        te = z.navigateNextStep,
        ae = z.nextStepInfo,
        re = z.isPreReviewAbt,
        ie = s.usePreReview(),
        ne = ie.isModifyMode,
        oe = ie.goNextModifyStep,
        se = ie.idcardRawTipsBySide,
        ce = ie.idcardSidePreReviewFail,
        de = ie.markIdcardSideReuploaded,
        ue = n.computed(function () {
          var e;
          return (
            i((e = {}), d.IDCARD_SIDE.FRONT, ce.value.front),
            i(e, d.IDCARD_SIDE.BACK, ce.value.back),
            e
          );
        }),
        le = n.computed(function () {
          var e = se.value,
            t = e.front,
            a = e.back,
            i = function (e, t) {
              return e.map(function (e) {
                return e.startsWith("正面") || e.startsWith("背面")
                  ? e
                  : "".concat(t).concat(e);
              });
            };
          return [].concat(
            r(ce.value.front ? i(t, "正面") : []),
            r(ce.value.back ? i(a, "背面") : [])
          );
        }),
        pe = n.computed(function () {
          return re.value && ne.value;
        });
      pe.value && (q.value = !0);
      var fe = n.storeToRefs(k.useDigitalHuman()).isSupportDigitalHuman,
        Se = R.useIdCardQuickImport(),
        he = n.storeToRefs(Se).ocrFailMsg,
        Ie = k.useDigitalHuman().routeToVideoIdMap,
        me = E.useDigitalHuman(),
        ge = me.digitalHumanRef,
        Ae = me.videoId,
        De = me.updateVideoId,
        ve = n.ref(null),
        Ce = n.reactive({
          side: d.IDCARD_SIDE.FRONT,
          isSet: !1,
          isCheck: !1,
          firstAutoStatus: "unset",
          manualStatus: "unset",
          type: "",
        }),
        Te = n.reactive({
          side: d.IDCARD_SIDE.BACK,
          isSet: !1,
          isCheck: !1,
          firstAutoStatus: "unset",
          manualStatus: "unset",
          type: "",
        }),
        _e = n.ref(""),
        ye = !0,
        ke = function () {
          var e = Q.value,
            t = e.idfront,
            a = e.idback,
            r = e.cred_id,
            i = e.cred_name,
            n = e.cred_address,
            o = e.cred_valid,
            s = e.cred_authority;
          (Ce.isSet = "1" === t),
            (Te.isSet = "1" === a),
            (Ee.id = r),
            (Ee.name = i),
            (Ee.id_addr = n),
            (Ee.credAuthority = s),
            (Ee.sex = l.handlerSex(r)),
            (H.value = !Ce.isSet && !Te.isSet),
            Ce.isSet !== Te.isSet && Qe(!0),
            ye &&
              $e(
                q.value && !pe.value
                  ? d.MEDIA_STATUS.FAIL
                  : d.MEDIA_STATUS.LOADING
              ),
            (ye = !1),
            o && (Ee.id_exp_date = l.handlerIdExpDate(o));
        },
        Re = n.computed(function () {
          return Ce.isCheck && Te.isCheck;
        }),
        Ee = n.reactive({
          name: "",
          id: "",
          id_exp_date: "",
          id_addr: "",
          sex: "",
          credAuthority: "",
        }),
        Me = n.computed(function () {
          return Object.values(Ee).some(function (e) {
            return e;
          });
        }),
        be = n.ref(d.IDCARD_OCR_TYPE.CREDIT),
        xe = n.ref(!1),
        Pe = n.computed(function () {
          return "0" === Q.value.is_verify_tel ? "" : Q.value.tel;
        }),
        we = null,
        Oe = D.useOomDetect().detectOOM(f.APPLY_IDCARD_OOM_DETECT);
      function Le() {
        return Ue.apply(this, arguments);
      }
      function Ue() {
        return (Ue = a(
          e().mark(function t() {
            var a, r, i, o, s, c, l, p;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (J.value ? De("2-1-1") : De(Ie.ApplyIdCard),
                        (we = Date.now()),
                        (a = Q.value),
                        (r = a.cred_id),
                        (i = a.cred_name),
                        (o = a.cred_address),
                        (s = a.cred_valid),
                        (c = a.cred_authority),
                        (e.t0 = i || r || o || s || c),
                        !e.t0)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (Se.isPulling = !0), (e.next = 7), R.minLoadingPromise()
                      );
                    case 7:
                      Se.isPulling = !1;
                    case 8:
                      if (
                        (ke(),
                        J.value
                          ? (ze(),
                            S.aegisReporter.reportEvent(
                              "MONITOR-APPLY-ABTSTEPQUENE"
                            ))
                          : (j.value = !0),
                        !O)
                      ) {
                        e.next = 22;
                        break;
                      }
                      return (e.prev = 11), (e.next = 14), K();
                    case 14:
                      (l = e.sent),
                        (p = l.id_ocr),
                        (be.value = p),
                        (e.next = 22);
                      break;
                    case 19:
                      (e.prev = 19),
                        (e.t1 = e.catch(11)),
                        (be.value = d.IDCARD_OCR_TYPE.CREDIT);
                    case 22:
                      Oe &&
                        ((Oe = !1),
                        S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-CHOOSE-OOM"
                        ),
                        v.stat.click("trade.apply.idcard.oom"),
                        n.nextTick$1(function () {
                          u.Dialog({
                            message:
                              "当前运行程序过多，请关闭其他应用程序后重新上传身份证",
                          });
                        })),
                        Me.value && (Ae.value = "2-2");
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[11, 19]]
            );
          })
        )).apply(this, arguments);
      }
      n.provide("onPageInit", Le);
      var Ne = n.ref(!1),
        Fe = n.ref(!1),
        je = n.ref([]),
        Be = n.reactive({ failDialog: !1 });
      function qe(e) {
        if (u.Dialog.isShow(e) || Be.failDialog)
          l.$log.info("dialog is showing, cancel action");
        else if ("fail" === e.type) {
          var t = e.msgs;
          (je.value = t), (Be.failDialog = !0);
        } else {
          var a = e.retmsg || e.message || "网络繁忙 请稍后再试";
          u.Dialog({ title: e.title, message: a });
        }
      }
      n.provide("showDialog", qe);
      var Ye,
        He,
        Ge = n.computed(function () {
          return (
            Q.value.userstate === d.USERSTATE.NOACCOUNT &&
            !L &&
            V.value &&
            j.value
          );
        });
      function ze() {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = a(
          e().mark(function t() {
            var r;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (r = !1), (t.prev = 1), (t.next = 4), P();
                    case 4:
                      (r = t.sent), (t.next = 10);
                      break;
                    case 7:
                      return (
                        (t.prev = 7),
                        (t.t0 = t.catch(1)),
                        t.abrupt("return", void (j.value = !0))
                      );
                    case 10:
                      if (r) {
                        t.next = 12;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((F.value = !0),
                        v.stat.click("trade.apply.cft_tel.privacy_dialog.brow"),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-CFT-TEL-PRIVACY_DIALOG-BROW"
                        ))
                      );
                    case 12:
                      if (((t.t1 = Q.value.tel), t.t1)) {
                        t.next = 18;
                        break;
                      }
                      return (
                        n.index.showLoading({
                          title: "自动拉取中...",
                          mask: !0,
                          noAutoHide: !0,
                        }),
                        (t.next = 17),
                        a(
                          e().mark(function t() {
                            var a, r;
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.applyCgi.processApplyAccount(
                                          c.ACTION.PULL_CFT_TEL
                                        )
                                      );
                                    case 3:
                                      if (((e.t0 = e.sent), e.t0)) {
                                        e.next = 6;
                                        break;
                                      }
                                      e.t0 = {};
                                    case 6:
                                      (a = e.t0),
                                        (r = a.tel),
                                        $({ tel: r }),
                                        r ||
                                          S.aegisReporter.reportEvent(
                                            "MONITOR-APPLY-CFT-TEL-IMPORT-EMPTY"
                                          ),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11),
                                        (e.t1 = e.catch(0)),
                                        S.aegisReporter.reportEvent(
                                          "MONITOR-APPLY-CFT-TEL-IMPORT-FAIL"
                                        );
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 11]]
                            );
                          })
                        )()
                      );
                    case 17:
                      n.index.hideLoading();
                    case 18:
                      j.value = !0;
                    case 19:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function Qe() {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        q.value = e;
      }
      function $e(e) {
        Y.value = e;
      }
      function We() {
        t(l.$refs.idcardPhotoRefs, 1)[0].selectPicture();
      }
      return (
        n.watch(
          function () {
            return Re.value;
          },
          function (e) {
            e ||
              Y.value === d.MEDIA_STATUS.LOADING ||
              Y.value === d.MEDIA_STATUS.WAITING ||
              $e(d.MEDIA_STATUS.FAIL),
              !e && G.value && ($e(d.MEDIA_STATUS.LOADING), Qe(!1)),
              e &&
                (v.stat.click("trade.apply.idcard.next_button_ready"),
                (function () {
                  if (we && "auto" === Ce.type && "auto" === Te.type) {
                    var e,
                      t = Date.now();
                    e = "1" === n.index.getStorageSync(f.PLUGIN_FIRST_OPEN);
                    var a = t - we;
                    S.aegisReporter.reportTime(
                      "MONITOR-IDCARD-NextButtonReadyTime",
                      a,
                      { ext2: e ? "first" : "cache" }
                    );
                  }
                })(),
                $e(d.MEDIA_STATUS.SUCCESS),
                (Se.ocrFailMsg = ""));
          }
        ),
        n.watch(
          function () {
            return Y.value;
          },
          function (e) {
            e !== d.MEDIA_STATUS.SUCCESS ||
              Re.value ||
              S.aegisReporter.reportEvent(
                "MONITOR-APPLY-IDCARD-FOLDSTATUS-ERROR"
              );
          },
          { immediate: !0 }
        ),
        n.provide("handleManualUpload", We),
        {
          isZxg: O,
          isQuickApp: L,
          IDCARD_SIDE: d.IDCARD_SIDE,
          onPageInit: Le,
          frontStatus: Ce,
          backStatus: Te,
          ocrMode: be,
          idInfo: Ee,
          failDialogMsgs: je,
          isCheckPass: Re,
          isPending: xe,
          foreverExp: x.brokerConfig.common.foreverExp,
          applyInfo: Q,
          setLocalApplyInfo: $,
          isRecoverMode: W,
          commitApplyData: X,
          curStepConf: Z,
          curStepInfo: ee,
          nextStepInfo: ae,
          navigateNextStep: te,
          isPreReviewAbt: re,
          isModifyMode: ne,
          isPreReviewModify: pe,
          preReviewSideFail: ue,
          preReviewIdcardTips: le,
          markIdcardSideReuploaded: de,
          goNextModifyStep: oe,
          lastLongTermCheck: Ne,
          isLongTermCheck: Fe,
          importCard: function () {
            $e(d.MEDIA_STATUS.LOADING),
              Ce.isSet && (Ce.isSet = !1),
              Te.isSet && (Te.isSet = !1),
              n.nextTick$1(function () {
                ke(), (Ae.value = "2-2");
              });
          },
          showStartDatePicker: n.ref(!1),
          showEndDatePicker: n.ref(!1),
          showQuickImport: Ge,
          idInfoHasValue: Me,
          showStatus: Be,
          showDialog: qe,
          showChangeMobileActionSheet: U,
          sendCode: function () {
            (U.value = !0),
              setTimeout(function () {
                Q.value.tel && l.$refs.changeMobileActionSheet.sendCode();
              }, 300);
          },
          captchaLen: N,
          tel: Pe,
          useTelAndIdFirstMode: J,
          privacyDialogShow: F,
          brokerName: x.brokerConfig.base.name,
          signPrivacy:
            ((He = a(
              e().mark(function t(a) {
                var r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            ge.value.play();
                          } catch (e) {}
                          return (
                            a
                              ? (v.stat.click(
                                  "trade.apply.cft_tel.privacy_dialog.confirm"
                                ),
                                S.aegisReporter.reportEvent(
                                  "MONITOR-APPLY-CFT-TEL-PRIVACY_DIALOG-CONFIRM"
                                ))
                              : (v.stat.click(
                                  "trade.apply.cft_tel.privacy_dialog.refuse"
                                ),
                                S.aegisReporter.reportEvent(
                                  "MONITOR-APPLY-CFT-TEL-PRIVACY_DIALOG-REFUSE"
                                )),
                            (r = b()),
                            (e.prev = 3),
                            (e.next = 6),
                            T({ isSign: a, protocolUrl: r })
                          );
                        case 6:
                          if (((e.t0 = a), !e.t0)) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 10), ze();
                        case 10:
                          e.next = 15;
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t1 = e.catch(3)),
                            u.Dialog({
                              message:
                                "个人信息授权协议签署失败，请您重新点击快速导入身份证按钮签署协议后方可使用此功能",
                              messageAlign: "justify",
                            }),
                            S.aegisReporter.reportEvent(
                              "MONITOR-APPLY-ERR_APPLY_SIGN_CFT_FAIL"
                            );
                        case 15:
                          return (
                            (e.prev = 15),
                            (F.value = !1),
                            (j.value = !0),
                            e.finish(15)
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 12, 15, 18]]
                );
              })
            )),
            function (e) {
              return He.apply(this, arguments);
            }),
          toProtocol: w,
          simpleMode: h,
          showIdcard: q,
          idcardStatus: Y,
          IDCARD_TIP_TEXT: d.IDCARD_TIP_TEXT,
          STATUS: d.MEDIA_STATUS,
          changeShowIdcard: Qe,
          changeIdcardStatus: $e,
          renderQuickImport: j,
          allsideNeedManual: H,
          resetFlag: G,
          alreadyApplyDialogShow: B,
          gotoBind:
            ((Ye = a(
              e().mark(function t() {
                var a;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          v.stat.click("trade.apply.idcard.new_pop_bind"),
                          (a = x.brokerConfig.apply.applyRetainInfos),
                          (e.next = 4),
                          p.sdk.applyAccountRetain(a, !0).catch(n.noop)
                        );
                      case 4:
                        (B.value = !1),
                          y
                            .router()
                            .push({
                              name: "AccountBind",
                              query: { accounts: _e.value },
                            });
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )),
            function () {
              return Ye.apply(this, arguments);
            }),
          ocrAccounts: _e,
          cancelApplyNext: function () {
            v.stat.click("trade.apply.idcard.new_pop_cancel"), (B.value = !1);
          },
          gotoBrokerRecordsPage: function () {
            v.stat.click("trade.apply.idcard.new_pop_broker_records"),
              I(),
              (B.value = !1);
          },
          isSupportDigitalHuman: fe,
          digitalHumanRef: ge,
          videoId: Ae,
          updateVideoId: De,
          idcardPhotoRefs: ve,
          handleManualUpload: We,
          onManualUploadFail: function (e) {
            Se.ocrFailMsg = e;
          },
          report: m,
          ocrFailMsg: he,
        }
      );
    },
    data: function () {
      return { startDate: "", endDate: "", cacheEndDate: "", inputfocus: !1 };
    },
    methods: {
      goNextStepAfterSubmit: function (e) {
        this.isModifyMode ? this.goNextModifyStep() : this.navigateNextStep(e);
      },
      handlerIdLongTerm: function () {
        this.lastLongTermCheck = !this.lastLongTermCheck;
      },
      onStartDateChange: function (e) {
        (this.startDate = e), (this.showStartDatePicker = !1);
      },
      onEndDateChange: function (e) {
        (this.showEndDatePicker = !1),
          (this.isLongTermCheck = this.lastLongTermCheck),
          this.isLongTermCheck
            ? (this.endDate = this.foreverExp)
            : (this.endDate = e);
      },
      handlerSex: function (e) {
        var t = "";
        return e && (t = "1" === m.sexUtil.getSex(e) ? "男" : "女"), t;
      },
      handlerIdExpDate: function (e) {
        var t = e.split("-"),
          a = this.foreverExp,
          r = t && t[1] ? t[1].replace(/\./g, "") : "";
        return (
          (this.isLongTermCheck = r === a || "30000101" === r),
          t[0] &&
            t[1] &&
            ((this.startDate = t[0].replace(/\./g, "")),
            (this.endDate = t[1].replace(/\./g, "")),
            (this.cacheEndDate = this.endDate)),
          e
        );
      },
      saveOcrCredential: function (e, t) {
        var a = t.id,
          r = void 0 === a ? "" : a,
          i = t.name,
          n = void 0 === i ? "" : i,
          o = t.address,
          s = void 0 === o ? "" : o,
          c = t.valid,
          u = void 0 === c ? "" : c,
          l = t.credAuthority,
          p = void 0 === l ? "" : l,
          f = {};
        e === d.IDCARD_SIDE.FRONT && r
          ? ((f.cred_name = n),
            (f.cred_id = r),
            (f.cred_address = s),
            (this.idInfo.id = r),
            (this.idInfo.name = n),
            (this.idInfo.id_addr = s),
            (this.idInfo.sex = this.handlerSex(r)))
          : e === d.IDCARD_SIDE.BACK &&
            (u &&
              ((f.cred_valid = u),
              (this.idInfo.id_exp_date = this.handlerIdExpDate(u))),
            p && ((f.cred_authority = p), (this.idInfo.credAuthority = p))),
          this.setLocalApplyInfo(f);
      },
      submitIdInfo: function () {
        var t = this;
        return a(
          e().mark(function r() {
            var i, o, s, c, l, f, h, m, A, D, C;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      try {
                        t.$route.query.amssub &&
                          t.useTelAndIdFirstMode &&
                          T.asyncShowMpSub(
                            "trade_selectCard",
                            P.TMPIDARR.AMSSUB
                          ),
                          t.renderQuickImport ||
                            S.aegisReporter.reportEvent(
                              "MONITOR-APPLY-RENDERQUICKIMPORT-FALSE"
                            );
                      } catch (e) {}
                      if (
                        (v.stat.click("trade.apply.idcard.pop_next"),
                        !n.isEmpty(t.idInfo.name) &&
                          !n.isEmpty(t.idInfo.id) &&
                          d.REGX.ID.test(t.idInfo.id))
                      ) {
                        r.next = 3;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({
                          message: "请输入正确的姓名和身份证号码",
                          zIndex: 900,
                        }),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-INPUT-ERROR"
                        ))
                      );
                    case 3:
                      if (I.isChineseName(t.idInfo.name)) {
                        r.next = 5;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({
                          message: "您的姓名中含有特殊字符，请重新填写",
                          zIndex: 900,
                        }),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-NAME-ERROR",
                          { ext2: t.idInfo.name }
                        ))
                      );
                    case 5:
                      if (
                        I.checkHasChineseStr(t.idInfo.name) &&
                        !(I.getChineseStrLength(t.idInfo.name) < 4)
                      ) {
                        r.next = 7;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({
                          message: "姓名需多于2个汉字",
                          zIndex: 900,
                        }),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-NAME-LENGTH-ERROR",
                          { ext2: t.idInfo.name }
                        ))
                      );
                    case 7:
                      if (!t.curStepConf.id_exp_date) {
                        r.next = 12;
                        break;
                      }
                      if (t.expDatevalid()) {
                        r.next = 10;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-EXPIRED-ERROR"
                        )
                      );
                    case 10:
                      r.next = 13;
                      break;
                    case 12:
                      t.idInfo.id_exp_date = "";
                    case 13:
                      if (!t.curStepConf.id_addr) {
                        r.next = 18;
                        break;
                      }
                      if (
                        ((l = ["<", ">", "'"]),
                        (f = ""),
                        n.isEmpty(t.idInfo.id_addr)
                          ? (f = "证件地址信息不能为空")
                          : t.idInfo.id_addr.length <
                            (t.curStepConf.id_addr_minlength || 8)
                          ? (f = "证件地址不能少于".concat(
                              t.curStepConf.id_addr_minlength || 8,
                              "个字"
                            ))
                          : t.idInfo.id_addr.length >
                            (t.curStepConf.id_addr_maxlength || 64)
                          ? (f = "证件地址不能多于".concat(
                              t.curStepConf.id_addr_maxlength || 64,
                              "个字"
                            ))
                          : I.judgeStrInclude(t.idInfo.id_addr, l)
                          ? (f = "证件地址输入内容出现".concat(
                              l.join("，"),
                              "等特殊字符，请重新填写"
                            ))
                          : I.isAddressStr(t.idInfo.id_addr) &&
                            (f = "证件地址包含非法字符，请重新填写"),
                        !f)
                      ) {
                        r.next = 18;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({ message: f, zIndex: 900 }),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-ADDR-ERROR"
                        ))
                      );
                    case 18:
                      if (!t.curStepConf.credAuthority) {
                        r.next = 22;
                        break;
                      }
                      if (
                        ((h = ""),
                        n.isEmpty(t.idInfo.credAuthority)
                          ? (h = "签证机关信息不能为空")
                          : t.idInfo.credAuthority.length <
                            (t.curStepConf.credAuthorityMinLength || 0)
                          ? (h = "签证机关不能少于".concat(
                              t.curStepConf.credAuthorityMinLength,
                              "个字"
                            ))
                          : t.idInfo.credAuthority.length >
                            (t.curStepConf.credAuthorityMaxLength || 40)
                          ? (h = "签证机关不能多于".concat(
                              t.curStepConf.credAuthorityMaxLength || 40,
                              "个字"
                            ))
                          : I.isAddressStr(t.idInfo.credAuthority) &&
                            (h = "签证机关包含非法字符，请重新填写"),
                        !h)
                      ) {
                        r.next = 22;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({ message: h, zIndex: 900 }),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-CRED-AUTHORITY-ERROR"
                        ))
                      );
                    case 22:
                      if (!t.useTelAndIdFirstMode || t.tel) {
                        r.next = 24;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({
                          message: "请输入你的手机号码，并完成验证",
                          zIndex: 900,
                          onConfirm: function () {
                            (t.showChangeMobileActionSheet = !0),
                              S.aegisReporter.reportEvent(
                                "MONITOR-APPLY-IDCARD-SUBMIT-SHOWCHANGEMOBILEACTIONSHEET"
                              );
                          },
                        }),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-MOBILE-ERROR"
                        ))
                      );
                    case 24:
                      if (t.isPending) {
                        r.next = 42;
                        break;
                      }
                      return (
                        (t.isPending = !0),
                        (r.prev = 26),
                        (r.next = 29),
                        t.submitOCR()
                      );
                    case 29:
                      if (
                        ((m = r.sent),
                        t.setLocalApplyInfo({
                          cred_name: t.idInfo.name || "",
                          cred_id: t.idInfo.id || "",
                          zip_code: m.zip_code || "",
                        }),
                        "1" !== m.status)
                      ) {
                        r.next = 32;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        ("h5-weixin" === N && U
                          ? t.$nextTick(function () {
                              var t;
                              u.Dialog({
                                message: "你已有".concat(
                                  x.brokerConfig.base.name,
                                  "账户，绑定即可使用"
                                ),
                                confirmButtonText: "立即绑定",
                                cancelButtonText: "取消",
                                showCancelButton: !0,
                                onConfirm:
                                  ((t = a(
                                    e().mark(function t() {
                                      var a;
                                      return e().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                v.stat.click(
                                                  "trade.apply.idcard.pop_bind"
                                                ),
                                                (a =
                                                  x.brokerConfig.apply
                                                    .applyRetainInfos),
                                                (e.next = 4),
                                                p.sdk
                                                  .applyAccountRetain(a, !0)
                                                  .catch(n.noop)
                                              );
                                            case 4:
                                              y.router().push({
                                                name: "AccountBind",
                                                query: { accounts: m.accounts },
                                              });
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, t);
                                    })
                                  )),
                                  function () {
                                    return t.apply(this, arguments);
                                  }),
                                onCancel: function () {
                                  v.stat.click("trade.apply.idcard.pop_cancel");
                                },
                              });
                            })
                          : ((t.ocrAccounts = null == m ? void 0 : m.accounts),
                            (t.alreadyApplyDialogShow = !0)),
                        (t.isPending = !1),
                        void S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-EXIST-USER"
                        ))
                      );
                    case 32:
                      if (!m.cred_valid_check_tips) {
                        r.next = 34;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (u.Dialog({
                          message:
                            m.cred_valid_check_tips ||
                            "身份有效期可能有误，请确认",
                          confirmButtonText: "已确认，下一步",
                          cancelButtonText: "去修改",
                          showCancelButton: !0,
                          onConfirm: (function () {
                            var r = a(
                              e().mark(function a() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        t.report(
                                          "trade.apply.cred_valid_check_tips_confirm"
                                        ),
                                          t.goNextStepAfterSubmit({
                                            data: {
                                              query: {
                                                zipCode:
                                                  t.applyInfo.zip_code || "",
                                              },
                                            },
                                          });
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                }, a);
                              })
                            );
                            return function () {
                              return r.apply(this, arguments);
                            };
                          })(),
                          onCancel: function () {
                            t.report(
                              "trade.apply.cred_valid_check_tips_cancel"
                            );
                          },
                        }),
                        (t.isPending = !1),
                        void t.report("trade.apply.cred_valid_check_tips_show"))
                      );
                    case 34:
                      t.goNextStepAfterSubmit({
                        data: {
                          query: { zipCode: t.applyInfo.zip_code || "" },
                        },
                      }),
                        (r.next = 41);
                      break;
                    case 37:
                      (r.prev = 37),
                        (r.t0 = r.catch(26)),
                        51088864 == +(null == r.t0 ? void 0 : r.t0.retcode) &&
                        (null ==
                        (o = null == (i = x.brokerConfig) ? void 0 : i.base)
                          ? void 0
                          : o.tel)
                          ? ((A =
                              "查询到您在其他开户渠道已有开户记录，若需要继续开户，请先取消其他渠道开户流程。请拨打"
                                .concat(x.brokerConfig.base.name, "客服电话：")
                                .concat(
                                  x.brokerConfig.base.tel,
                                  "，转人工处理"
                                )),
                            (D = x.brokerConfig.base.tel.replace(/-/g, "")),
                            u.Dialog({
                              message: A,
                              confirmButtonText: "一键拨打",
                              cancelButtonText: "取消",
                              showCancelButton: !0,
                              onConfirm: function () {
                                t.$sdk.makePhoneCall(D),
                                  v.stat.click(
                                    "trade.apply.idcard.pop_has_bind_confirm"
                                  );
                              },
                              onCancel: function () {
                                v.stat.click(
                                  "trade.apply.idcard.pop_has_bind_cancel"
                                );
                              },
                            }),
                            v.stat.click(
                              "trade.apply.idcard.pop_has_bind_exposed"
                            ))
                          : (null == r.t0 ? void 0 : r.t0.retcode) ===
                            g.IDCARD_EXPIRED_UNMATCH
                          ? (u.Dialog({
                              message: r.t0.retmsg,
                              confirmButtonText: "去修改",
                              onConfirm: function () {
                                v.stat.click(
                                  "trade.apply.idcard.pop_only_prompt_modify"
                                );
                              },
                            }),
                            v.stat.click(
                              "trade.apply.idcard.pop_only_prompt_exposed"
                            ))
                          : 51088859 == +(null == r.t0 ? void 0 : r.t0.retcode)
                          ? u.Dialog({
                              message: r.t0.retmsg || "网络繁忙 请稍后再试",
                            })
                          : 51088853 == +(null == r.t0 ? void 0 : r.t0.retcode)
                          ? ((C = String(
                              null ==
                                (c =
                                  null == (s = x.brokerConfig)
                                    ? void 0
                                    : s.base)
                                ? void 0
                                : c.tel
                            ).replace(/-/g, "")),
                            u.Dialog({
                              message:
                                "监管部门规定仅支持18至70周岁的用户在线开户。如您需要开户可前往券商线下营业部办理，具体可咨询券商。",
                              confirmButtonText: "联系券商",
                              cancelButtonText: "我知道了",
                              showCancelButton: !0,
                              messageAlign: "justify",
                              onConfirm: function () {
                                t.$sdk.makePhoneCall(C),
                                  v.stat.click(
                                    "trade.apply.idcard.pop_age_invalid_confirm"
                                  );
                              },
                              onCancel: function () {
                                v.stat.click(
                                  "trade.apply.idcard.pop_age_invalid_cancel"
                                );
                              },
                            }))
                          : u.Dialog({
                              message: r.t0.retmsg || "网络繁忙 请稍后再试",
                            }),
                        S.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-SUBMIT-ERROR",
                          { ext2: JSON.stringify(r.t0) }
                        );
                    case 41:
                      t.isPending = !1;
                    case 42:
                      v.stat.click("trade.apply.idcard.pop_close");
                    case 43:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              null,
              [[26, 37]]
            );
          })
        )();
      },
      expDatevalid: function () {
        var e = "";
        return (
          n.isEmpty(this.startDate)
            ? (e = "请输入身份证有效期的开始日期")
            : n.isEmpty(this.endDate)
            ? (e = "请输入身份证有效期的结束日期")
            : (this.idInfo.id_exp_date = ""
                .concat(l.format(this.startDate, "YYYY.MM.DD"), "-")
                .concat(l.format(this.endDate, "YYYY.MM.DD"))),
          !e || (u.Dialog({ message: e, zIndex: 900 }), !1)
        );
      },
      submitOCR: function () {
        var e = {
          cred_id: this.idInfo.id,
          cred_name: this.idInfo.name,
          id_exp_date: this.idInfo.id_exp_date,
        };
        return (
          this.curStepConf.id_addr &&
            this.idInfo.id_addr &&
            (e.id_addr = this.idInfo.id_addr),
          this.curStepConf.credAuthority &&
            this.idInfo.credAuthority &&
            (e.id_cred_authority = this.idInfo.credAuthority),
          this.commitApplyData(c.ACTION.IDCARD_SUBMIT, e, {
            encodeFields: [
              "cred_name",
              "cred_id",
              "id_addr",
              "id_exp_date",
              "id_cred_authority",
            ],
          })
        );
      },
      cardCheck: function (e, t, a) {
        ((e === d.IDCARD_SIDE.FRONT
          ? this.frontStatus
          : this.backStatus
        ).isCheck = t),
          ((e === d.IDCARD_SIDE.FRONT
            ? this.frontStatus
            : this.backStatus
          ).type = a);
      },
      handleFocus: function () {
        var e = this,
          t = h.getPlatform().platform;
        setTimeout(
          function () {
            e.inputfocus = !0;
          },
          "devtools" === t ? 300 : 0
        );
      },
      nameInputFocus: function () {
        v.stat.click("trade.apply.idcard.pop_name"), this.handleFocus();
      },
      idInputFocus: function () {
        v.stat.click("trade.apply.idcard.pop_idnum"), this.handleFocus();
      },
      handlerIdCardBlur: function () {
        (this.inputfocus = !1),
          [15, 18].includes(this.idInfo.id.length) &&
            (this.idInfo.sex = this.handlerSex(this.idInfo.id));
      },
      onIdCardPhotoClick: function (e) {
        e === d.IDCARD_SIDE.FRONT
          ? v.stat.click("trade.apply.idcard.image_face")
          : v.stat.click("trade.apply.idcard.image_badge"),
          (this.videoId = "2-4");
      },
      handleStartDatePickerClick: function () {
        this.showStartDatePicker = !0;
      },
      handleEndDatePickerClick: function () {
        (this.showEndDatePicker = !0),
          (this.lastLongTermCheck = this.isLongTermCheck);
      },
      resetStatus: function () {
        n.index.$emit("apply_idcard_load_front", d.MEDIA_STATUS.CANCEL),
          n.index.$emit("apply_idcard_load_back", d.MEDIA_STATUS.CANCEL),
          (this.resetFlag = !0),
          [this.frontStatus, this.backStatus].forEach(function (e) {
            (e.isSet = !1), (e.isCheck = !1), (e.type = "");
          });
        var e = R.useIdCardQuickImport();
        (e.ocrFailMsg = ""), (e.pullStatus = R.PULL_STATUS.IDLE);
      },
      firstStatusChange: function (e, t) {
        (e === d.IDCARD_SIDE.FRONT ? this.frontStatus : this.backStatus)
          .firstAutoStatus === d.MEDIA_STATUS.LOADING &&
          t !== d.MEDIA_STATUS.SUCCESS &&
          (this.changeShowIdcard(!0),
          this.changeIdcardStatus(d.MEDIA_STATUS.FAIL)),
          ((e === d.IDCARD_SIDE.FRONT
            ? this.frontStatus
            : this.backStatus
          ).firstAutoStatus = t),
          this.frontStatus.firstAutoStatus === d.MEDIA_STATUS.SUCCESS &&
            this.backStatus.firstAutoStatus === d.MEDIA_STATUS.SUCCESS &&
            this.changeIdcardStatus(d.MEDIA_STATUS.SUCCESS);
      },
      manualStatusChange: function (e, t) {
        if (
          (((e === d.IDCARD_SIDE.FRONT
            ? this.frontStatus
            : this.backStatus
          ).manualStatus = t),
          this.isPreReviewModify &&
            t !== d.MEDIA_STATUS.UNSET &&
            this.markIdcardSideReuploaded(e),
          this.allsideNeedManual)
        )
          return (this.frontStatus.manualStatus === d.MEDIA_STATUS.UNSET &&
            this.backStatus.manualStatus === d.MEDIA_STATUS.SUCCESS) ||
            (this.frontStatus.manualStatus === d.MEDIA_STATUS.SUCCESS &&
              this.backStatus.manualStatus === d.MEDIA_STATUS.UNSET)
            ? void this.changeIdcardStatus(d.MEDIA_STATUS.WAITING)
            : this.frontStatus.manualStatus === d.MEDIA_STATUS.FAIL ||
              this.backStatus.manualStatus === d.MEDIA_STATUS.FAIL
            ? void this.changeIdcardStatus(d.MEDIA_STATUS.FAIL)
            : this.frontStatus.manualStatus === d.MEDIA_STATUS.SUCCESS &&
              this.backStatus.manualStatus === d.MEDIA_STATUS.SUCCESS
            ? void this.changeIdcardStatus(d.MEDIA_STATUS.SUCCESS)
            : void 0;
        if (t === d.MEDIA_STATUS.SUCCESS) {
          var a =
            e === d.IDCARD_SIDE.FRONT ? this.backStatus : this.frontStatus;
          if (a.manualStatus === d.MEDIA_STATUS.UNSET && !a.isSet)
            return void this.changeIdcardStatus(d.MEDIA_STATUS.WAITING);
          if (a.manualStatus === d.MEDIA_STATUS.FAIL)
            return void this.changeIdcardStatus(d.MEDIA_STATUS.FAIL);
          if (a.manualStatus === d.MEDIA_STATUS.SUCCESS)
            return void this.changeIdcardStatus(d.MEDIA_STATUS.SUCCESS);
        }
      },
    },
    onHide: function () {
      var e = this;
      setTimeout(function () {
        "ApplyIdCard" !== e.$route.name && e.resetStatus();
      }, 500);
    },
    onUnload: function () {
      this.resetStatus();
    },
    onShow: function () {
      "ios" === F &&
        this.isSupportDigitalHuman &&
        "2-4" === this.videoId &&
        this.digitalHumanRef.isPlayEnded() &&
        this.digitalHumanRef.resetVideo();
    },
  };
Array ||
  (
    n.resolveComponent("digital-human") +
    n.resolveComponent("progress-bar") +
    n.resolveComponent("pre-review-modify-card") +
    n.resolveComponent("idcard-photo") +
    n.resolveComponent("quick-import") +
    n.resolveComponent("FootPrint") +
    n.resolveComponent("StepButtons") +
    n.resolveComponent("date-picker") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("ProfileChangeMobile") +
    n.resolveComponent("BrokerLogo") +
    n.resolveComponent("mp-popup") +
    n.resolveComponent("ApplyWrap") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      } +
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var B = n._export_sfc(j, [
  [
    "render",
    function (e, t, a, r, i, o) {
      return n.e(
        { a: e.rootFontSize, b: r.isSupportDigitalHuman },
        r.isSupportDigitalHuman
          ? {
              c: n.sr("digitalHumanRef", "f391a202-2,f391a202-1"),
              d: n.p({ videoId: r.videoId }),
            }
          : {},
        {
          e: n.p({ "step-name": r.curStepInfo.name }),
          f: r.isPreReviewAbt && r.isModifyMode,
        },
        r.isPreReviewAbt && r.isModifyMode
          ? { g: n.p({ "step-key": "idcard" }) }
          : {},
        { h: r.useTelAndIdFirstMode },
        r.useTelAndIdFirstMode
          ? n.e({ i: r.tel }, r.tel ? { j: n.t(r.tel) } : {}, {
              k: n.o(function () {
                return r.sendCode && r.sendCode.apply(r, arguments);
              }),
              l: n.o(function (e) {
                return (r.showChangeMobileActionSheet = !0);
              }),
            })
          : {},
        { m: r.idInfoHasValue },
        r.idInfoHasValue
          ? {
              n: n.t(r.IDCARD_TIP_TEXT[r.idcardStatus]),
              o: r.idcardStatus === r.STATUS.FAIL ? 1 : "",
              p: n.n(r.showIdcard ? "icon-arrow-up" : "icon-arrow-down"),
              q: r.showIdcard ? "" : 1,
              r: n.o(function (e) {
                return (r.showIdcard = !r.showIdcard);
              }),
            }
          : {},
        {
          s: n.f([r.frontStatus, r.backStatus], function (e, t, a) {
            return {
              a: n.sr("idcardPhotoRefs", "f391a202-5-" + a + ",f391a202-1", {
                f: 1,
              }),
              b: e.side,
              c: n.o(o.cardCheck, e.side),
              d: n.o(o.saveOcrCredential, e.side),
              e: n.o(o.onIdCardPhotoClick, e.side),
              f: n.o(o.firstStatusChange, e.side),
              g: n.o(o.manualStatusChange, e.side),
              h: n.o(r.changeShowIdcard, e.side),
              i: n.o(r.changeIdcardStatus, e.side),
              j: n.o(r.onManualUploadFail, e.side),
              k: "f391a202-5-" + a + ",f391a202-1",
              l: n.p({
                side: e.side,
                "is-set": e.isSet,
                disabled: r.isPending,
                "init-delay-time": t > 0 ? 500 : 0,
                "source-type": r.curStepConf.source,
                mode: r.ocrMode,
                "another-status":
                  e.side === r.IDCARD_SIDE.FRONT ? r.backStatus : r.frontStatus,
                "pre-review-fail":
                  r.isPreReviewModify && r.preReviewSideFail[e.side],
              }),
            };
          }),
          t: r.ocrFailMsg,
        },
        r.ocrFailMsg
          ? {
              v: n.f(r.ocrFailMsg.split("\n"), function (e, t, a) {
                return { a: n.t(e), b: t };
              }),
            }
          : {},
        { w: r.isPreReviewModify && r.preReviewIdcardTips.length },
        r.isPreReviewModify && r.preReviewIdcardTips.length
          ? {
              x: n.f(r.preReviewIdcardTips, function (e, t, a) {
                return { a: n.t(e), b: t };
              }),
            }
          : {},
        {
          y: r.idInfoHasValue && r.showIdcard ? 1 : "",
          z: !r.idInfoHasValue && r.showQuickImport,
        },
        !r.idInfoHasValue && r.showQuickImport
          ? { A: n.o(r.importCard), B: n.o(r.updateVideoId) }
          : {},
        {
          C: !r.idInfoHasValue || (r.idInfoHasValue && r.showIdcard),
          D: r.idInfoHasValue && r.showIdcard ? 1 : "",
          E: !r.idInfoHasValue,
        },
        r.idInfoHasValue
          ? n.e(
              {
                H: r.curStepConf.idNameMaxLength || 16,
                I: n.o(function () {
                  return (
                    o.nameInputFocus && o.nameInputFocus.apply(o, arguments)
                  );
                }),
                J: n.o(function (e) {
                  i.inputfocus = !1;
                }),
                K: r.idInfo.name,
                L: n.o(function (e) {
                  return (r.idInfo.name = e.detail.value);
                }),
                M: n.o(function () {
                  return o.idInputFocus && o.idInputFocus.apply(o, arguments);
                }),
                N: n.o(function () {
                  return (
                    o.handlerIdCardBlur &&
                    o.handlerIdCardBlur.apply(o, arguments)
                  );
                }),
                O: r.idInfo.id,
                P: n.o(function (e) {
                  return (r.idInfo.id = e.detail.value);
                }),
                Q: r.curStepConf.id_exp_date,
              },
              r.curStepConf.id_exp_date
                ? n.e(
                    { R: !i.startDate },
                    i.startDate
                      ? {
                          S: n.t(
                            e.$filters.time.format(i.startDate, "YYYY.MM.DD")
                          ),
                        }
                      : {},
                    {
                      T: n.o(function () {
                        return (
                          o.handleStartDatePickerClick &&
                          o.handleStartDatePickerClick.apply(o, arguments)
                        );
                      }),
                      U: !i.endDate,
                    },
                    i.endDate
                      ? r.isLongTermCheck ||
                        i.endDate === r.foreverExp ||
                        "30000101" === i.endDate
                        ? {}
                        : {
                            W: n.t(
                              e.$filters.time.format(i.endDate, "YYYY.MM.DD")
                            ),
                          }
                      : {},
                    {
                      V:
                        r.isLongTermCheck ||
                        i.endDate === r.foreverExp ||
                        "30000101" === i.endDate,
                      X: n.o(function () {
                        return (
                          o.handleEndDatePickerClick &&
                          o.handleEndDatePickerClick.apply(o, arguments)
                        );
                      }),
                    }
                  )
                : {},
              { Y: r.curStepConf.id_addr },
              r.curStepConf.id_addr
                ? {
                    Z: r.curStepConf.id_addr_maxlength || 40,
                    aa: n.o(function (t) {
                      return e.$stat.click("trade.apply.idcard.pop_id_addr");
                    }),
                    ab: r.idInfo.id_addr,
                    ac: n.o(function (e) {
                      return (r.idInfo.id_addr = e.detail.value);
                    }),
                  }
                : {},
              { ad: r.curStepConf.credAuthority },
              r.curStepConf.credAuthority
                ? {
                    ae: r.curStepConf.credAuthorityMaxLength || 40,
                    af: n.o(function (t) {
                      return e.$stat.click("trade.apply.idcard.cred_authority");
                    }),
                    ag: r.idInfo.credAuthority,
                    ah: n.o(function (e) {
                      return (r.idInfo.credAuthority = e.detail.value);
                    }),
                  }
                : {},
              { ai: r.curStepConf.sex },
              r.curStepConf.sex ? { aj: n.t(r.idInfo.sex) } : {},
              { ak: r.curStepConf.nationality },
              (r.curStepConf.nationality, {})
            )
          : n.e(
              { F: r.curStepConf.bottomText },
              r.curStepConf.bottomText ? { G: r.curStepConf.bottomText } : {}
            ),
        {
          al: n.n(r.isSupportDigitalHuman ? "section-content" : ""),
          am: n.n(r.isSupportDigitalHuman ? "" : "idcard-scroll-content"),
          an: n.o(o.submitIdInfo),
          ao: n.p({
            stat: "idcard",
            "next-button-text": "确认以上信息准确，下一步",
            "disable-next-button": !r.isCheckPass,
            "loading-next-button": r.isPending,
            fixed: !0,
          }),
          ap: r.showStartDatePicker,
        },
        r.showStartDatePicker
          ? {
              aq: n.o(o.onStartDateChange),
              ar: n.o(function (e) {
                return (r.showStartDatePicker = !1);
              }),
              as: n.p({
                title: "选择时间",
                value: i.startDate,
                "mask-closable": !0,
              }),
            }
          : {},
        { at: r.showEndDatePicker },
        r.showEndDatePicker
          ? {
              av: n.n(
                r.lastLongTermCheck ? "checked-mark" : "icon icon-check-box"
              ),
              aw: n.o(function () {
                return (
                  o.handlerIdLongTerm && o.handlerIdLongTerm.apply(o, arguments)
                );
              }),
              ax: n.o(function () {
                return (
                  o.handlerIdLongTerm && o.handlerIdLongTerm.apply(o, arguments)
                );
              }),
              ay: n.o(o.onEndDateChange),
              az: n.o(function (e) {
                return (r.showEndDatePicker = !1);
              }),
              aA: n.p({
                title: "选择时间",
                value: i.endDate,
                disabled: r.lastLongTermCheck,
                "mask-closable": !0,
              }),
            }
          : {},
        {
          aB: n.f(r.failDialogMsgs, function (e, t, a) {
            return n.e(r.failDialogMsgs.length > 1 ? { a: n.t(t + 1) } : {}, {
              b: n.t(e),
              c: t,
            });
          }),
          aC: r.failDialogMsgs.length > 1,
          aD: n.o(function (e) {
            return (r.showStatus.failDialog = !1);
          }),
          aE: n.p({
            visible: r.showStatus.failDialog,
            title: "身份证照片不符合要求",
            "confirm-button-text": "重新上传",
          }),
          aF: n.p({ id: "mp-dialog" }),
          aG: n.sr("changeMobileActionSheet", "f391a202-13,f391a202-1"),
          aH: n.o(function (e) {
            return (r.showChangeMobileActionSheet = !1);
          }),
          aI: n.p({
            "select-key": "tel",
            biz: "apply",
            value: r.showChangeMobileActionSheet,
            "captcha-len": r.captchaLen,
          }),
          aJ: n.t(r.brokerName),
          aK: n.o(function () {
            return r.toProtocol && r.toProtocol.apply(r, arguments);
          }),
          aL: n.t(r.brokerName),
          aM: n.t(r.brokerName),
          aN: n.o(function (e) {
            return r.signPrivacy(!1);
          }),
          aO: n.o(function (e) {
            return r.signPrivacy(!0);
          }),
          aP: n.p({ show: r.privacyDialogShow, position: "bottom" }),
          aQ: n.t(r.brokerName),
          aR: n.o(function () {
            return r.gotoBind && r.gotoBind.apply(r, arguments);
          }),
          aS: n.o(function () {
            return (
              r.gotoBrokerRecordsPage &&
              r.gotoBrokerRecordsPage.apply(r, arguments)
            );
          }),
          aT: n.o(function () {
            return r.cancelApplyNext && r.cancelApplyNext.apply(r, arguments);
          }),
          aU: n.p({ visible: r.alreadyApplyDialogShow }),
          aV: n.n(r.simpleMode ? "container__simple-mode" : ""),
          aW: n.sr("#global-wrap", "f391a202-0"),
          aX: n.p({
            id: "global-wrap",
            filePath: "/apply/idcard",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(B);
