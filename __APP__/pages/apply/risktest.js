var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var n = require("../../common/vendor.js"),
  r = require("../../model/apply/useApply.js"),
  s = require("../../model/apply/usePreReview.js"),
  o = require("../../cgi/apply.js"),
  a = require("../../config/enum.js"),
  l = require("../../config/key.js"),
  p = require("../../model/riskTest/index.js"),
  u = require("../../common/components/Dialog/index.js"),
  c = require("../../stores/apply/useDigitalHuman.js"),
  m = require("./composables/useDigitalHuman.js"),
  f = {
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    components: {
      RiskTest: function () {
        return "../../bizs/apply/risk/RiskTest.js";
      },
      RiskResult: function () {
        return "../../bizs/apply/risk/RiskResult.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
    },
    setup: function () {
      var e = r.useApply(),
        t = e.applyInfo,
        o = e.fetchApplyInfo,
        f = e.setLocalApplyInfo,
        d = e.commitApplyData,
        v = e.curStepConf,
        g = e.curStepInfo,
        k = e.nextStepInfo,
        y = e.navigateNextStep,
        _ = s.usePreReview(),
        I = _.isModifyMode,
        S = _.goNextModifyStep,
        x = n.storeToRefs(c.useDigitalHuman()).isSupportDigitalHuman,
        h = c.useDigitalHuman().routeToVideoIdMap,
        b = m.useDigitalHuman(),
        D = b.digitalHumanRef,
        R = b.videoId,
        T = b.updateVideoId,
        A = n.ref(!0),
        j = n.ref(!1),
        C = n.ref(null),
        H = n.ref(""),
        q = n.ref({}),
        P = n.getCurrentInstance().proxy,
        M = function () {
          var e = i(
            i({}, t.value),
            {},
            {
              investRange: void 0,
              isHideProtocolButton: !0,
              credentialname: t.value.cred_name,
              credentialid: t.value.cred_id,
              riskLevel: t.value.risk_level || "1",
              investTerm: String((t.value.invest_time || 1) - 1),
              protocolType:
                "0" === t.value.invest_agreement_type
                  ? a.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO
                  : a.TRADE_MATCH_TYPE.NEED_SIGN_NOT_MATCH_PRO,
            }
          );
          q.value = p.transformInvestInfoValue(e);
        },
        N = function () {
          (R.value = h.ApplyRiskTest), (C.value = t.value.risk_level), M();
        };
      return (
        n.onMounted(function () {
          n.index.getStorageSync(l.APPLY_RISKTEST_SKIPDESC) &&
            (n.index.getStorageSync(l.APPLY_RISKTEST_SKIPDESC), (j.value = !0));
        }),
        n.provide("onPageInit", N),
        n.provide("digitalHumanRef", D),
        {
          applyInfo: t,
          fetchApplyInfo: o,
          setLocalApplyInfo: f,
          nextStepInfo: k,
          navigateNextStep: y,
          commitApplyData: d,
          curStepConf: v,
          curStepInfo: g,
          isModifyMode: I,
          goNextModifyStep: S,
          isShowDesc: A,
          skipDesc: j,
          riskLevel: C,
          unmatch: H,
          investInfo: q,
          onPageInit: N,
          buildInvestInfo: M,
          toTest: function (e) {
            P.$stat.click("trade.apply.riskhomepage.next"),
              "1" !== t.value.risk_limit
                ? e()
                : u.Dialog({ message: "今天的风险测评次数已超限" });
          },
          isSupportDigitalHuman: x,
          digitalHumanRef: D,
          videoId: R,
          updateVideoId: T,
        }
      );
    },
    methods: {
      submit: function (i) {
        var r = this;
        return t(
          e().mark(function t() {
            var s, a, l, p, c, m, f, d, v;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = i.answers),
                        (a = i.version),
                        (l = i.special),
                        (e.prev = 1),
                        (e.next = 4),
                        r.commitApplyData(o.ACTION.RISK, {
                          version: a,
                          special: l,
                          risk: s.join(":"),
                        })
                      );
                    case 4:
                      if (
                        "1" !== (null == (f = e.sent) ? void 0 : f.need_retry)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void (
                          null ==
                            (m =
                              null ==
                              (c =
                                null == (p = null == r ? void 0 : r.$refs)
                                  ? void 0
                                  : p.tester)
                                ? void 0
                                : c.showExtraSheet) || m.call(c)
                        )
                      );
                    case 7:
                      (d = [
                        "expect_income",
                        "invest_agreement_type",
                        "invest_time",
                        "invest_type",
                        "risk_level",
                        "score",
                        "risk",
                        "risk_diff_ans",
                      ]),
                        r.setLocalApplyInfo(n.pick(f, d)),
                        r.buildInvestInfo(),
                        (r.riskLevel = f.risk_level),
                        (r.unmatch = f.not_match || "0"),
                        r.$stat.click(
                          "trade.apply.riskhomepage.risk_level",
                          void 0,
                          void 0,
                          {
                            level: f.risk_level,
                            type: f.invest_type,
                            time: f.invest_time,
                          }
                        ),
                        f.diff_tip_ans &&
                          (u.Dialog({
                            message:
                              "您在今日内进行了两次风险测评，第二次测评结果与第一次相比差异较大，其中".concat(
                                f.diff_tip_ans
                                  .split(",")
                                  .map(function (e) {
                                    return "第".concat(e, "题");
                                  })
                                  .join("、"),
                                "前后两次选项出现明显不合理变化。为了防范不适配投资风险，避免您遭受投资损失，我公司特此提示您重新审视问卷相关题目的选项，根据自身情况提供真实、准确的信息。如确认风险测评是您本人独立、自主、真实的意思表示，不存在我司工作人员诱导的情况，可选择继续提交。如需要修改选项，由于今日已达风险测评次数上限，请明日再重新修改；"
                              ),
                            confirmButtonText: "确认提交",
                            messageAlign: "justify",
                            onConfirm: function () {
                              var e, t, i;
                              null ==
                                (i =
                                  null ==
                                  (t =
                                    null == (e = r.$refs)
                                      ? void 0
                                      : e.testerRes)
                                    ? void 0
                                    : t.submit) || i.call(t);
                            },
                          }),
                          r.$stat.click(
                            "trade.apply.riskresult.diff_tip_show"
                          )),
                        (e.next = 15);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(1)),
                        (v =
                          !e.t0.retry &&
                          (e.t0.risk_level ||
                            r.applyInfo.risk_level ||
                            r.$route.query.risk_level)),
                        u.Dialog({
                          message: e.t0.retmsg || "网络繁忙 请稍后再试",
                          confirmButtonText: v ? "我知道了" : "重新评测",
                          onConfirm: function () {
                            v
                              ? ((r.riskLevel =
                                  r.$route.query.risk_level ||
                                  r.applyInfo.risk_level),
                                (r.unmatch = r.$route.query.unmatch || 0))
                              : r.retest();
                          },
                        });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 11]]
            );
          })
        )();
      },
      goNextStepAfterSubmit: function (e) {
        this.isModifyMode ? this.goNextModifyStep() : this.navigateNextStep(e);
      },
      confirm: function () {
        this.$stat.click("trade.apply.riskresult.next"),
          this.goNextStepAfterSubmit();
      },
      handlerRetest: function () {
        var e = this;
        this.$nextTick(function () {
          e.$refs.tester.reTest();
        });
      },
      retest: function () {
        var i = this;
        return t(
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("1" === i.applyInfo.risk_limit) {
                        e.next = 15;
                        break;
                      }
                      if (
                        ((i.riskLevel = ""),
                        (i.skipDesc = !0),
                        !i.curStepConf.clearResult)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        i.commitApplyData(o.ACTION.RE_RISK)
                      );
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(2));
                    case 9:
                      i.handlerRetest(), (e.next = 13);
                      break;
                    case 12:
                      i.handlerRetest();
                    case 13:
                      e.next = 16;
                      break;
                    case 15:
                      u.Dialog({ message: "今天的风险测评次数已超限" });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[2, 7]]
            );
          })
        )();
      },
    },
  };
Array ||
  (
    n.resolveComponent("digital-human") +
    n.resolveComponent("progress-bar") +
    n.resolveComponent("RiskTest") +
    n.resolveComponent("RiskResult") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("ApplyWrap") +
    n.resolveComponent("GlobalWrap")
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
var d = n._export_sfc(f, [
  [
    "render",
    function (e, t, i, r, s, o) {
      return n.e(
        { a: e.rootFontSize, b: r.isSupportDigitalHuman },
        r.isSupportDigitalHuman
          ? {
              c: n.sr("digitalHumanRef", "aecd3438-2,aecd3438-1"),
              d: n.p({ videoId: r.videoId }),
            }
          : {},
        { e: n.p({ "step-name": r.curStepInfo.name }), f: !r.riskLevel },
        r.riskLevel
          ? {
              k: n.sr("testerRes", "aecd3438-5,aecd3438-1"),
              l: n.o(o.confirm),
              m: n.o(o.retest),
              n: n.o(r.updateVideoId),
              o: n.p({
                "risk-level": r.riskLevel,
                unmatch: r.unmatch,
                "invest-info": r.investInfo,
              }),
            }
          : {
              g: n.sr("tester", "aecd3438-4,aecd3438-1"),
              h: n.o(o.submit),
              i: n.o(r.updateVideoId),
              j: n.p({
                biz: "apply",
                "skip-desc": r.skipDesc,
                "desc-to-test": r.toTest,
                "invest-info": r.investInfo,
              }),
            },
        {
          p: n.n(
            r.isSupportDigitalHuman
              ? "section-content flex-column"
              : "flex-column"
          ),
          q: n.p({ id: "mp-dialog" }),
          r: n.sr("#global-wrap", "aecd3438-0"),
          s: n.p({
            id: "global-wrap",
            filePath: "/apply/risktest",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-aecd3438"],
]);
wx.createPage(d);
