var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Objectentries");
var o = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  i = require("../../model/apply/useApply.js"),
  s = require("../../utils/market.js"),
  a = require("../../cgi/apply.js"),
  c = require("../../config/enum.js");
require("../../service/broker.js");
var u = require("../../model/apply/count.js"),
  l = require("../../stores/protocol/useProtocolMul.js"),
  p = require("../../config/bank.js"),
  f = require("../../common/components/Dialog/index.js"),
  m = require("../../bizs/apply/SignProtocols/useSignProtocols.js"),
  d = require("../../service/aegis/platform/not-wujie.js");
require("../../service/sdk/lib/api.js"),
  require("../../service/sdk/platform/mp-weixin.js");
var h = require("../../stores/app/useMode.js"),
  g = require("../../stores/protocol/enum.js"),
  v = require("../../stores/apply/useDigitalHuman.js"),
  C = require("./composables/useDigitalHuman.js"),
  b = require("../../cgi/stat.js"),
  P = require("../../service/abt/mp-weixin.js"),
  k = require("../../service/stat/mp-weixin.js"),
  S = require("../../model/apply/profile/utils/index.js"),
  x = require("../../mixin/platforms/index.js"),
  A = require("../../config/broker/11100/index.js"),
  T = { MATCH: 0, UNMATCH: 1 },
  y = {
    mixins: [x.pluginMixins],
    components: {
      FootPrint: function () {
        return "../../bizs/apply/FootPrint.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      SignProtocol: function () {
        return "../../bizs/apply/SignProtocols/index.js";
      },
      BrokerLogo: function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      StepButtons: function () {
        return "./components/StepButtons/StepButtons.js";
      },
      OneClickTranscription: function () {
        return "../../components/OneClickTranscription/OneClickTranscription.js";
      },
      QuestionnaireBar: function () {
        return "../../bizs/apply/QuestionnaireBar.js";
      },
      CommissionExplainDialog: function () {
        return "../../bizs/apply/submit/CommissionExplainDialog.js";
      },
      SelectShareHolder: function () {
        return "../../bizs/apply/submit/SelectShareHolder.js";
      },
      ConfirmationBar: function () {
        return "../../bizs/apply/submit/ConfirmationBar.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
    },
    setup: function () {
      var s,
        c = r.getCurrentInstance().proxy,
        f = i.useApply(),
        x = f.applyInfo,
        y = f.setLocalApplyInfo,
        I = f.isRecoverMode,
        w = f.commitApplyData,
        M = f.navigateNextStep,
        E = f.exitPreReviewFlow,
        R = f.curStepInfo,
        j = f.curStepConf,
        _ = f.nextStepInfo,
        D = r.storeToRefs(v.useDigitalHuman()).isSupportDigitalHuman,
        L = v.useDigitalHuman().routeToVideoIdMap,
        O = C.useDigitalHuman(),
        q = O.digitalHumanRef,
        B = O.videoId,
        H = h.useModeStore(),
        N = r.storeToRefs(H).simpleMode,
        F = r.ref(""),
        Q = r.ref(!1),
        Y = r.ref(A.brokerConfig.base.name),
        z = r.ref("");
      function U() {
        var e = (x.value.invest_type || "1").split("").map(function (e) {
          return e - 1;
        });
        return {
          match_type: x.value.match_type,
          credentialname: x.value.cred_name,
          credentialid: x.value.cred_id,
          riskLevel: x.value.risk_level || "1",
          investTerm: String((x.value.invest_time || 1) - 1),
          investRange: e,
        };
      }
      var G,
        V = r.reactive({ protocolType: "", protocolMatchInfo: {} }),
        K = l.useProtocolMulStore(),
        W = K.protocols,
        $ = K.fetchProtocolListByBiz,
        J = j.commissionProtocolInfo,
        Z = void 0 === J ? {} : J,
        X = j.firstProtocolInfo,
        ee = void 0 === X ? {} : X,
        oe = j.secondProtocolInfo,
        te = void 0 === oe ? {} : oe,
        ne = j.confirmationProtocolInfo,
        re = void 0 === ne ? {} : ne,
        ie = j.suitableProtocolIds,
        se = void 0 === ie ? [] : ie,
        ae = j.commissionExplainDialog,
        ce = void 0 === ae ? { show: !1, text: "" } : ae,
        ue = j.mustFetchedProtocol,
        le = void 0 !== ue && ue,
        pe = m.useSignProtocols(x, Z),
        fe = pe.protocolConfigObj,
        me = pe.genMergingList,
        de = pe.isProtocolListInit,
        he = m.useSignProtocols(x, ee),
        ge = he.protocolConfigObj,
        ve = he.genMergingList,
        Ce = he.isProtocolListInit,
        be = m.useSignProtocols(x, te),
        Pe = be.protocolConfigObj,
        ke = be.genMergingList,
        Se = be.isProtocolListInit,
        xe = m.useSignProtocols(x, re),
        Ae = xe.protocolConfigObj,
        Te = xe.genMergingList,
        ye = r.reactive({ name: "", url: "" }),
        Ie = r.ref(0),
        we = (function () {
          var e = n(
            o().mark(function e() {
              var n, i, s, c;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0),
                          (i = (n = j || {}).queryCommissionSwitch),
                          (s = n.fallbackCommission),
                          !i)
                        ) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (Q.value = !0),
                          r.index.showLoading({ mask: !0 }),
                          (e.prev = 4),
                          (e.next = 7),
                          a.applyCgi.queryCommission()
                        );
                      case 7:
                        0 === (c = e.sent).retcode && c.trade_commission
                          ? (F.value = c.trade_commission)
                          : ((F.value = s),
                            d.aegisReporter.reportEvent(
                              "MONITOR-APPLY-QUERYCOMMISSION-FALLBACK",
                              {
                                ext4: JSON.stringify({
                                  retcode: null == c ? void 0 : c.retcode,
                                  reason: "invalid_response",
                                }),
                              }
                            )),
                          (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(4)),
                          (F.value = s),
                          d.aegisReporter.reportEvent(
                            "MONITOR-APPLY-QUERYCOMMISSION-FALLBACK",
                            { ext4: JSON.stringify(e.t0) }
                          );
                      case 14:
                        return (
                          (e.prev = 14), r.index.hideLoading(), e.finish(14)
                        );
                      case 17:
                        !(function () {
                          try {
                            var e = [],
                              o = Object.entries(p.BANKS).find(function (e) {
                                return t(e, 2)[1].code === x.value.bank_code;
                              });
                            if (o) {
                              var n = t(o, 2),
                                r = n[0],
                                i = n[1],
                                s = (void 0 === i ? {} : i).name;
                              if (r && s) {
                                var a =
                                    A.brokerConfig.apply.threePartyDepository ||
                                    {},
                                  c = a.needSuffix,
                                  u = void 0 !== c && c,
                                  l = a.getSuffix,
                                  f = u
                                    ? (void 0 === l ? function () {} : l)(
                                        x.value
                                      )
                                    : "",
                                  m = {
                                    key: ""
                                      .concat(A.brokerConfig.base.id, "_")
                                      .concat(r)
                                      .concat(f)
                                      .toLowerCase(),
                                    name: "《".concat(
                                      s,
                                      "银行第三方存管协议书》"
                                    ),
                                  };
                                e.push(m);
                              }
                            }
                            ve({ dynamicList: e }), ke(), me(), Te();
                          } catch (e) {
                            d.aegisReporter.reportEvent(
                              "MONITOR-APPLY-GENMERGINGLIST-ERROR",
                              { ext4: JSON.stringify(e) }
                            );
                          }
                        })();
                      case 18:
                        return (e.prev = 18), (Q.value = !1), e.finish(18);
                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, , 18, 21],
                  [4, 11, 14, 17],
                ]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      function Me() {
        return Ee.apply(this, arguments);
      }
      function Ee() {
        return (Ee = n(
          o().mark(function e() {
            var t, r, i, s;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), N.value)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      if (
                        ((r = j.checkBornYearForIncentive),
                        !A.brokerConfig.abt.incentiveUser && !r)
                      ) {
                        e.next = 16;
                        break;
                      }
                      if (
                        ((i = null == (t = x.value) ? void 0 : t.cred_id), !r)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 9),
                        b.StatAPI.reportExciteActivityAbt({
                          excite_abt: S.ageUtil.isBornAfterYear(i) ? "1" : "0",
                        })
                      );
                    case 9:
                      e.next = 16;
                      break;
                    case 11:
                      return (
                        (e.next = 13),
                        n(
                          o().mark(function e() {
                            var t, n;
                            return o().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        P.ABT.getABT(
                                          A.brokerConfig.abt.incentiveUser
                                        )
                                      );
                                    case 3:
                                      if (((e.t0 = e.sent), e.t0)) {
                                        e.next = 6;
                                        break;
                                      }
                                      e.t0 = {};
                                    case 6:
                                      return (
                                        (t = e.t0),
                                        (n = t.feedback),
                                        e.abrupt(
                                          "return",
                                          (k.stat.click(
                                            "trade.trade.feedback_abt.brow"
                                          ),
                                          "1" === n)
                                        )
                                      );
                                    case 11:
                                      (e.prev = 11),
                                        (e.t1 = e.catch(0)),
                                        d.aegisReporter.reportEvent(
                                          "MONITOR-APPLY-QUERYINCENTIVEABT-ERROR",
                                          { ext4: JSON.stringify(e.t1) }
                                        );
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            );
                          })
                        )()
                      );
                    case 13:
                      return (
                        (s = e.sent),
                        (e.next = 16),
                        b.StatAPI.reportExciteActivityAbt({
                          excite_abt: s ? "1" : "0",
                        })
                      );
                    case 16:
                      e.next = 21;
                      break;
                    case 18:
                      (e.prev = 18),
                        (e.t0 = e.catch(0)),
                        d.aegisReporter.reportEvent(
                          "MONITOR-APPLY-CHECKINCENTIVEUSER-ERROR",
                          { ext4: JSON.stringify(e.t0) }
                        );
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 18]]
            );
          })
        )).apply(this, arguments);
      }
      var Re = (function () {
        var t = n(
          o().mark(function t() {
            var n;
            return o().wrap(function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    E(),
                      Me(),
                      (B.value = L.ApplySubmit),
                      (z.value =
                        "ApplyQuestionnaire" === _.value.name
                          ? "下一步"
                          : "提交开户申请"),
                      (n = j.waitTime),
                      we(),
                      n &&
                        !G &&
                        ((Ie.value = n),
                        null ==
                          (G = new u.Count(function (e) {
                            Ie.value = e;
                          }, +n)) || G.start()),
                      (V.protocolMatchInfo = e(e({}, x.value), U()));
                  case 3:
                  case "end":
                    return o.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
      r.provide("onPageInit", Re),
        r.onBeforeUnmount(function () {
          G && (G.clean(!0), (G = null));
        });
      var je,
        _e = r.computed(function () {
          return j.transcribeConfig && j.transcribeConfig.enable;
        }),
        De = r.ref(!1),
        Le = r.computed(function () {
          var e = _e.value ? "下一步" : z.value;
          return Ie.value > 0 && (e += " (".concat(Ie.value, "s)")), e;
        }),
        Oe =
          (null == (s = A.brokerConfig.apply)
            ? void 0
            : s.showRiskMatchProtocolResult) || {},
        qe = r.computed(function () {
          var e,
            o = !0;
          return (
            (null == Oe ? void 0 : Oe.isDynamicShowProtocol) &&
              (null == (e = x.value) ? void 0 : e.risk_level) ===
                (null == Oe ? void 0 : Oe.protectType) &&
              (o = !1),
            o
          );
        }),
        Be = r.computed(function () {
          return !!j.needQuestionnaire && !I.value;
        }),
        He = r.computed(function () {
          return x.value.questionnaire;
        }),
        Ne = r.computed(function () {
          var e;
          return (
            (null == (e = x.value.has_sh_shareholdercard)
              ? void 0
              : e.split(",")) || []
          );
        }),
        Fe = r.computed(function () {
          var e;
          return (
            (null == (e = x.value.has_sz_shareholdercard)
              ? void 0
              : e.split(",")) || []
          );
        }),
        Qe = r.computed(function () {
          return I.value && (Fe.value.length || Ne.value.length);
        });
      return (
        r.provide("AGREEMENT_TYPE", T),
        {
          brokerName: Y,
          applyInfo: x,
          setLocalApplyInfo: y,
          isRecoverMode: I,
          navigateNextStep: M,
          curStepInfo: R,
          curStepConf: j,
          nextStepInfo: _,
          commitApplyData: w,
          tradeCommission: F,
          isLoading: Q,
          submitBtnText: z,
          hasTranscription: _e,
          showTranscription: De,
          protocolVar: V,
          commissionProtocolConfig: fe,
          genCommissionMergingList: me,
          isCommissionProtocolListInit: de,
          firstProtocolConfig: ge,
          isFirstProtocolListInit: Ce,
          secondProtocolConfig: Pe,
          isSecondProtocolListInit: Se,
          genFirstMergingList: ve,
          genSecondMergingList: ke,
          confirmationProtocolConfig: Ae,
          suitableProtocolIds: se,
          suitableProtocolInfo: ye,
          isShowMatchProtocolEntry: qe,
          showQuestionnaire: function () {
            c.$router.push({ name: "ApplyQuestionnaire" });
          },
          isQuestionnaireFinished: He,
          needQuestionnaire: Be,
          shShareholdercard: Ne,
          szShareholdercard: Fe,
          showSelectShareholderPage: Qe,
          simpleMode: N,
          waitTime: Ie,
          nextBtnText: Le,
          onPageInit: Re,
          showCommissionDialog: r.ref(!1),
          commissionExplainDialog: ce,
          protocols: W,
          mustFetchedProtocol: le,
          fetchApplyProtocol:
            ((je = n(
              o().mark(function e() {
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            $({
                              biz: g.ENUM_PROTOCOL_BIZ.APPLY,
                              forceUpdate: !0,
                            })
                          );
                        case 3:
                          e.next = 7;
                          break;
                        case 5:
                          (e.prev = 5), (e.t0 = e.catch(0));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                );
              })
            )),
            function () {
              return je.apply(this, arguments);
            }),
          isSupportDigitalHuman: D,
          digitalHumanRef: q,
          videoId: B,
        }
      );
    },
    data: function () {
      return {
        openAccount: { HA: !0, SA: !0 },
        isProtocolCheck: !1,
        flag: { isPending: !1, isPendingInTranscription: !1 },
        AGREEMENT_TYPE: T,
      };
    },
    computed: {
      isSubmitDisabled: function () {
        return (
          !!this.waitTime ||
          this.isLoading ||
          (this.needQuestionnaire && !this.isQuestionnaireFinished)
        );
      },
      returnVisit: function () {
        try {
          var e = this.curStepConf || {},
            o = e.returnVisit,
            t = e.queryCommissionSwitch,
            n = e.fallbackCommission;
          if (!o) return "";
          if (!t) return o;
          var r =
            null !== this.tradeCommission &&
            void 0 !== this.tradeCommission &&
            "" !== this.tradeCommission
              ? this.tradeCommission
              : n;
          if (null == r || "" === r) return "";
          var i = parseFloat(r).toFixed(1).toString();
          return o.replace(/\$commission/g, i);
        } catch (o) {
          return "";
        }
      },
    },
    watch: {
      isProtocolCheck: function (e) {
        this.$stat.click(
          e
            ? "trade.apply.apply.checkboxshow"
            : "trade.apply.apply.checkboxhide"
        );
      },
    },
    methods: {
      handlerProtocolCheck: function (e) {
        this.isProtocolCheck = e;
      },
      onMarketSAChange: function () {
        this.onMarketInputChange("SA");
      },
      onMarketHAChange: function () {
        this.onMarketInputChange("HA");
      },
      onMarketInputChange: function (e) {
        var o = this;
        if (
          (this.$stat.click(
            { HA: "trade.apply.apply.hua", SA: "trade.apply.apply.shena" }[e]
          ),
          this.openAccount[e])
        ) {
          var t =
            this.curStepConf["cancelTips".concat(e)] ||
            {
              HA: "如不开通沪市A股证券账户，将不能购买沪市A股的股票",
              SA: "如不开通深市A股证券账户，将不能购买深市A股的股票",
            }[e];
          f.Dialog({
            message: t,
            showCancelButton: !0,
            confirmButtonText: "开通账户",
            cancelButtonText: "不开通",
            onCancel: function () {
              o.openAccount[e] = !1;
            },
          });
        } else this.openAccount[e] = !this.openAccount[e];
      },
      getMarketTypeDescriptor: function () {
        var e = [];
        return (
          this.openAccount.HA && e.push(s.MARKET_CODE_SH),
          this.openAccount.SA && e.push(s.MARKET_CODE_SZ),
          e.join(",")
        );
      },
      submit: function () {
        var e = this;
        return n(
          o().mark(function t() {
            var n;
            return o().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      if (
                        (e.$stat.click(
                          "trade.apply.apply.submit",
                          void 0,
                          void 0,
                          void 0,
                          { syncMonitor: !0 }
                        ),
                        e.isRecoverMode ||
                          e.$stat.click(
                            "trade.apply.apply.submit_first",
                            void 0,
                            void 0,
                            void 0,
                            { syncMonitor: !0 }
                          ),
                        e.flag.isPending)
                      ) {
                        o.next = 14;
                        break;
                      }
                      if (((e.flag.isPending = !0), e.isProtocolCheck)) {
                        o.next = 3;
                        break;
                      }
                      return o.abrupt(
                        "return",
                        (f.Dialog({
                          message: "若不同意勾选，我们将无法为你开户",
                          showCancelButton: !0,
                          confirmButtonText: "已阅读并同意",
                          cancelButtonText: "不同意",
                          messageAlign: "left",
                          onConfirm: function () {
                            e.isProtocolCheck = !0;
                          },
                        }),
                        void (e.flag.isPending = !1))
                      );
                    case 3:
                      if (
                        !Object.keys(e.openAccount).every(function (o) {
                          return !e.openAccount[o];
                        })
                      ) {
                        o.next = 5;
                        break;
                      }
                      return o.abrupt(
                        "return",
                        (f.Dialog({
                          message: "请勾选开通沪市A股和深市A股",
                          showCancelButton: !0,
                          confirmButtonText: "同意开通",
                          cancelButtonText: "不同意",
                          onConfirm: function () {
                            (e.openAccount.HA = !0), (e.openAccount.SA = !0);
                          },
                        }),
                        void (e.flag.isPending = !1))
                      );
                    case 5:
                      if (
                        ((o.prev = 5),
                        !e.mustFetchedProtocol ||
                          (null == (n = e.protocols[g.ENUM_PROTOCOL_BIZ.APPLY])
                            ? void 0
                            : n.length))
                      ) {
                        o.next = 8;
                        break;
                      }
                      return o.abrupt(
                        "return",
                        (r.index.showToast({
                          title:
                            "协议加载失败，请重试，如有疑问请致电全国客服热线".concat(
                              A.brokerConfig.base.tel,
                              "咨询"
                            ),
                          icon: "none",
                        }),
                        e.fetchApplyProtocol(),
                        void (e.flag.isPending = !1))
                      );
                    case 8:
                      o.next = 13;
                      break;
                    case 10:
                      return (
                        (o.prev = 10),
                        (o.t0 = o.catch(5)),
                        o.abrupt("return", void (e.flag.isPending = !1))
                      );
                    case 13:
                      e.hasTranscription
                        ? ((e.showTranscription = !0), (e.flag.isPending = !1))
                        : e.sendSubmitReq();
                    case 14:
                    case "end":
                      return o.stop();
                  }
              },
              t,
              null,
              [[5, 10]]
            );
          })
        )();
      },
      sendSubmitReq: function () {
        var e = this;
        return n(
          o().mark(function t() {
            var n;
            return o().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        (n = e.getMarketTypeDescriptor()),
                        e.setLocalApplyInfo({ markets: n }),
                        (o.prev = 2),
                        (o.next = 5),
                        e.commitApplyData(a.ACTION.MARKET, { markets: n })
                      );
                    case 5:
                      e.navigateNextStep(),
                        (e.flag.isPending = !1),
                        (o.next = 12);
                      break;
                    case 9:
                      (o.prev = 9),
                        (o.t0 = o.catch(2)),
                        (e.flag.isPending = !1),
                        f.Dialog({
                          message: ""
                            .concat(
                              o.t0.retmsg || "提交开户申请失败，请稍后再试",
                              "["
                            )
                            .concat(o.t0.retcode, "]"),
                        }),
                        o.t0.retcode;
                    case 12:
                    case "end":
                      return o.stop();
                  }
              },
              t,
              null,
              [[2, 9]]
            );
          })
        )();
      },
      showConfirmation: function (e) {
        var t = this;
        return n(
          o().mark(function n() {
            return o().wrap(function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    (t.protocolVar.protocolType =
                      e === T.MATCH
                        ? c.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO
                        : c.TRADE_MATCH_TYPE.NEED_SIGN_NOT_MATCH_PRO),
                      t.$router.push({
                        name: "ConfirmationProtocol",
                        query: {
                          need_apply_account_query: 1,
                          match_type: t.protocolVar.protocolType,
                          scenes: "apply",
                        },
                      });
                  case 1:
                  case "end":
                    return o.stop();
                }
            }, n);
          })
        )();
      },
      onTranscriptionClose: function () {
        this.showTranscription = !1;
      },
      onTranscriptionConfirm: function () {
        var e = this;
        return n(
          o().mark(function t() {
            return o().wrap(function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (((o.t0 = e.flag.isPendingInTranscription), o.t0)) {
                      o.next = 6;
                      break;
                    }
                    return (
                      (e.flag.isPendingInTranscription = !0),
                      (o.next = 5),
                      e.sendSubmitReq()
                    );
                  case 5:
                    e.flag.isPendingInTranscription = !1;
                  case 6:
                  case "end":
                    return o.stop();
                }
            }, t);
          })
        )();
      },
    },
  };
Array ||
  (
    r.resolveComponent("SelectShareHolder") +
    r.resolveComponent("digital-human") +
    r.resolveComponent("progress-bar") +
    r.resolveComponent("questionnaire-bar") +
    r.resolveComponent("SignProtocol") +
    r.resolveComponent("confirmation-bar") +
    r.resolveComponent("FootPrint") +
    r.resolveComponent("StepButtons") +
    r.resolveComponent("OneClickTranscription") +
    r.resolveComponent("mp-dialog") +
    r.resolveComponent("CommissionExplainDialog") +
    r.resolveComponent("ApplyWrap") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/OneClickTranscription/OneClickTranscription.js";
      } +
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var I = r._export_sfc(y, [
  [
    "render",
    function (e, o, t, n, i, s) {
      return r.e(
        { a: e.rootFontSize, b: n.showSelectShareholderPage },
        n.showSelectShareholderPage
          ? {
              c: r.p({
                "sh-shareholdercard": n.shShareholdercard,
                "sz-shareholdercard": n.szShareholdercard,
              }),
            }
          : r.e(
              { d: n.isSupportDigitalHuman },
              n.isSupportDigitalHuman
                ? {
                    e: r.sr("digitalHumanRef", "a57383b7-3,a57383b7-1"),
                    f: r.p({ videoId: n.videoId }),
                  }
                : {},
              {
                g: r.p({ "step-name": n.curStepInfo.name }),
                h: r.n(
                  !0 === i.openAccount.HA ? "icon-checked" : "icon-check-box"
                ),
                i: r.o(function () {
                  return (
                    s.onMarketHAChange && s.onMarketHAChange.apply(s, arguments)
                  );
                }),
                j: r.o(function () {
                  return (
                    s.onMarketHAChange && s.onMarketHAChange.apply(s, arguments)
                  );
                }),
                k: r.n(
                  !0 === i.openAccount.SA ? "icon-checked" : "icon-check-box"
                ),
                l: r.o(function () {
                  return (
                    s.onMarketSAChange && s.onMarketSAChange.apply(s, arguments)
                  );
                }),
                m: r.o(function () {
                  return (
                    s.onMarketSAChange && s.onMarketSAChange.apply(s, arguments)
                  );
                }),
                n: n.needQuestionnaire,
              },
              n.needQuestionnaire ? { o: r.o(n.showQuestionnaire) } : {},
              {
                p: n.simpleMode ? "#e63535" : "#3077ec",
                q: i.isProtocolCheck,
                r: r.o(function (e) {
                  return (i.isProtocolCheck = !i.isProtocolCheck);
                }),
                s: r.o(function (e) {
                  return (i.isProtocolCheck = !i.isProtocolCheck);
                }),
                t: n.curStepConf.headTips && n.curStepConf.headTips.length > 0,
              },
              n.curStepConf.headTips && n.curStepConf.headTips.length > 0
                ? {
                    v: r.f(n.curStepConf.headTips, function (e, o, t) {
                      return { a: r.t(e), b: o };
                    }),
                  }
                : {},
              {
                w:
                  n.commissionProtocolConfig.signText &&
                  n.isCommissionProtocolListInit,
              },
              n.commissionProtocolConfig.signText &&
                n.isCommissionProtocolListInit
                ? {
                    x: r.sr("commissionProtocol", "a57383b7-6,a57383b7-1"),
                    y: r.o(s.handlerProtocolCheck),
                    z: r.p({
                      "protocol-config": n.commissionProtocolConfig,
                      "is-protocol-check": i.isProtocolCheck,
                    }),
                  }
                : {},
              {
                A: n.firstProtocolConfig.signText && n.isFirstProtocolListInit,
              },
              n.firstProtocolConfig.signText && n.isFirstProtocolListInit
                ? {
                    B: r.sr("firstProtocol", "a57383b7-7,a57383b7-1"),
                    C: r.o(s.handlerProtocolCheck),
                    D: r.p({
                      "protocol-config": n.firstProtocolConfig,
                      "is-protocol-check": i.isProtocolCheck,
                    }),
                  }
                : {},
              { E: n.isShowMatchProtocolEntry },
              n.isShowMatchProtocolEntry
                ? {
                    F: r.o(s.showConfirmation),
                    G: r.o(s.handlerProtocolCheck),
                    H: r.p({
                      "is-protocol-check": i.isProtocolCheck,
                      config: n.confirmationProtocolConfig,
                    }),
                  }
                : {},
              { I: s.returnVisit },
              s.returnVisit ? { J: r.t(s.returnVisit) } : {},
              { K: n.curStepConf.showTaAccount },
              (n.curStepConf.showTaAccount, {}),
              {
                L:
                  n.secondProtocolConfig.signText && n.isSecondProtocolListInit,
              },
              n.secondProtocolConfig.signText && n.isSecondProtocolListInit
                ? {
                    M: r.sr("secondProtocol", "a57383b7-9,a57383b7-1"),
                    N: r.o(s.handlerProtocolCheck),
                    O: r.p({
                      "protocol-config": n.secondProtocolConfig,
                      "is-protocol-check": i.isProtocolCheck,
                    }),
                  }
                : {},
              { P: n.commissionExplainDialog.show },
              n.commissionExplainDialog.show
                ? {
                    Q: r.t(n.commissionExplainDialog.text),
                    R: r.o(function (e) {
                      return (n.showCommissionDialog = !0);
                    }),
                  }
                : {},
              {
                S:
                  n.curStepConf.extraTips && n.curStepConf.extraTips.length > 0,
              },
              n.curStepConf.extraTips && n.curStepConf.extraTips.length > 0
                ? {
                    T: r.f(n.curStepConf.extraTips, function (e, o, t) {
                      return { a: r.t(e), b: o };
                    }),
                  }
                : {},
              {
                U: r.o(function (e) {
                  return (i.isProtocolCheck = !i.isProtocolCheck);
                }),
                V: r.n(n.isSupportDigitalHuman ? "section-content" : ""),
                W: r.o(s.submit),
                X: r.p({
                  fixed: !0,
                  stat: "submit",
                  "disable-next-button": s.isSubmitDisabled,
                  "next-button-text": n.nextBtnText,
                }),
                Y: n.showTranscription,
              },
              n.showTranscription
                ? {
                    Z: r.o(s.onTranscriptionClose),
                    aa: r.o(s.onTranscriptionConfirm),
                    ab: r.p({
                      "transcribe-config": n.curStepConf.transcribeConfig,
                      "confirm-text": n.submitBtnText,
                    }),
                  }
                : {},
              { ac: r.p({ id: "mp-dialog" }) }
            ),
        { ad: n.showCommissionDialog },
        n.showCommissionDialog
          ? {
              ae: r.o(function (e) {
                return (n.showCommissionDialog = !1);
              }),
            }
          : {},
        {
          af: r.sr("#global-wrap", "a57383b7-0"),
          ag: r.p({
            id: "global-wrap",
            filePath: "/apply/submit",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a57383b7"],
]);
wx.createPage(I);
