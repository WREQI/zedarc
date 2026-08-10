require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js"), require("../../../service/broker.js");
var o = require("../../../model/apply/useApply.js"),
  r = require("../../../common/components/Dialog/index.js"),
  n = require("../../../common/vendor.js"),
  i = require("../../../model/riskTest/index.js"),
  s = require("../../../utils/getPlatform.js"),
  c = require("../../../stores/protocol/useProtocolMul.js"),
  u = require("../../../stores/protocol/enum.js"),
  l = require("../../../service/aegis/platform/not-wujie.js"),
  a = require("../../../config/broker/11100/index.js"),
  p = require("../../../model/riskTest/broker/11100.js"),
  f = {
    components: {
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      StepButtons: function () {
        return "../../../pages/apply/components/StepButtons/StepButtons.js";
      },
      FootPrint: function () {
        return "../FootPrint.js";
      },
      MpRichText: function () {
        return "../../protocol/rich-text-protocol/MpRichText.js";
      },
    },
    props: {
      riskLevel: { type: String, default: "0" },
      unmatch: { type: String, default: "0" },
      investInfo: { type: Object, default: function () {} },
    },
    setup: function (r, i) {
      var p,
        f = i.emit,
        m = n.getCurrentInstance().proxy,
        d = o.useApply(),
        v = d.curStepConf,
        h = d.isRecoverMode,
        k = d.curStepInfo,
        C = d.applyInfo,
        g = a.brokerConfig.apply.showRiskMatchProtocolResult || {},
        S = n.ref(!0);
      g.isDynamicShowProtocol &&
        (null == (p = r.investInfo) ? void 0 : p.riskLevel) === g.protectType &&
        (S.value = !1);
      var T = v.unmatchProtocol || {},
        P = n.computed(function () {
          return !n.isEmpty(T) && "1" === C.value.invest_agreement_type;
        }),
        x = n.ref(!1),
        b = s.getPlatform().isEmbeddedMiniProgram,
        y = c.useProtocolMulStore(),
        I = y.fetchProtocolListByScene,
        w = y.getProtocolContent,
        R = n.ref([]),
        L = n.ref([]),
        j = n.ref(!1);
      return (
        n.watch(
          function () {
            return r.investInfo.protocolType;
          },
          (function () {
            var o = t(
              e().mark(function t(o) {
                var r, n, i, s, c, a;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!o || !v.showSuitableProtocol) {
                            e.next = 33;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            I({
                              biz: u.ENUM_PROTOCOL_BIZ.APPLY,
                              scenes: [u.ENUM_PROTOCOL_SCENE.APPLY_RISK_RESULT],
                              forceUpdate: !0,
                            })
                          );
                        case 4:
                          if (((e.t0 = e.sent), e.t0)) {
                            e.next = 7;
                            break;
                          }
                          e.t0 = [];
                        case 7:
                          (R.value = e.t0), (r = []), (n = 0);
                        case 10:
                          if (!(n < R.value.length)) {
                            e.next = 24;
                            break;
                          }
                          return (i = R.value[n]), (e.next = 14), w(i);
                        case 14:
                          if (((e.t1 = e.sent), e.t1)) {
                            e.next = 17;
                            break;
                          }
                          e.t1 = {};
                        case 17:
                          (s = e.t1),
                            (c = s.content),
                            (a = void 0 === c ? "" : c),
                            r.push(a);
                        case 21:
                          n++, (e.next = 10);
                          break;
                        case 24:
                          (L.value = r), (e.next = 30);
                          break;
                        case 27:
                          (e.prev = 27),
                            (e.t2 = e.catch(1)),
                            l.aegisReporter.reportEvent(
                              "MONITOR-APPLY-RISKRESULT-PROTOCOL-ERR",
                              { ext3: JSON.stringify(e.t2 || {}) }
                            );
                        case 30:
                          return (e.prev = 30), (j.value = !0), e.finish(30);
                        case 33:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 27, 30, 33]]
                );
              })
            );
            return function (e) {
              return o.apply(this, arguments);
            };
          })(),
          { immediate: !0 }
        ),
        n.onMounted(
          t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      h.value || m.$stat.click("trade.apply.riskresult.first"),
                        f("updateVideoId", "7-5");
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )
        ),
        {
          curStepConf: v,
          curStepInfo: k,
          isShowMatchProtocol: S,
          protocolConfig: T,
          isShowSignProtocol: P,
          isProtocolCheck: x,
          isEmbeddedMode: b,
          protocols: R,
          protcolContents: L,
          isProtocolFetch: j,
          toProtocol: function () {
            m.$router.push({ name: "VProtocol", query: { key: T.key } });
          },
          isRecoverMode: h,
        }
      );
    },
    computed: {
      riskInfo: function () {
        return a.brokerConfig.common.RISK[this.riskLevel] || {};
      },
      periodText: function () {
        return a.brokerConfig.common.INVEST_TERM.USER[this.period] || "未知";
      },
      recommendTip: function () {
        return p.riskTest.recommendTip;
      },
      period: function () {
        return (+this.investInfo.invest_time || 1) - 1;
      },
      resultVarietiesPreText: function () {
        return p.riskTest.resultVarietiesPreText || "拟投资品种";
      },
      resultPeriodPreText: function () {
        return p.riskTest.resultPeriodPreText || "拟投资期限";
      },
      varietiesText: function () {
        var e = (this.investInfo.invest_type || "1")
          .split("")
          .map(function (e) {
            return String(e - 1);
          })
          .join("");
        return i.getVarietiesText(e);
      },
      canRetest: function () {
        return !(
          this.isRecoverMode ||
          ("1" === this.unmatch && this.curStepConf.notRetest)
        );
      },
    },
    methods: {
      reTest: function () {
        this.$emit("retest");
      },
      submit: function () {
        var e,
          t,
          o,
          n,
          i,
          s = this,
          c = this.curStepConf,
          u = c.lowestLevelUserCall,
          l = c.levelTip,
          p = c.notRetest,
          f = void 0 !== p && p,
          m = c.protectTypeTip,
          d = c.warnLowLevelList,
          v = void 0 === d ? [] : d;
        if (!this.isShowSignProtocol || this.isProtocolCheck) {
          if ("1" === this.unmatch) {
            var h,
              k = this.curStepConf.lowestLevelTip,
              C = void 0 === k ? {} : k,
              g = (null == (e = a.brokerConfig.common) ? void 0 : e.RISK) || {},
              S = g.BS_LOWEST,
              T =
                (void 0 === S ? {} : S).value === this.riskLevel
                  ? u
                  : null == (t = g[this.riskLevel])
                  ? void 0
                  : t.text;
            return (
              (h =
                (null == (o = C.message)
                  ? void 0
                  : o.replace("/*placeholder-levelText*/", T)) ||
                "股票投资有风险，您的风险评测为"
                  .concat(
                    T,
                    "，不符合《证券期货投资者适当性管理办法》相关要求，详询"
                  )
                  .concat(a.brokerConfig.base.name)
                  .concat(
                    a.brokerConfig.base.tel
                      ? "：".concat(a.brokerConfig.base.tel)
                      : ""
                  )),
              this.$stat.click("trade.apply.riskresult.intercept.brow"),
              void r.Dialog({
                message: h,
                confirmButtonText: C.confirmButtonText || "重新评测",
                cancelButtonText: C.cancelButtonText || "取消开户",
                messageAlign: "justify",
                showCancelButton: !f,
                onConfirm: function () {
                  f ||
                    (s.$stat.click("trade.apply.riskresult.intercept.confirm"),
                    s.$emit("retest"));
                },
                onCancel: function () {
                  s.$stat.click("trade.apply.riskresult.intercept.cancel");
                },
              })
            );
          }
          if ((null == v ? void 0 : v.length) && v.includes(this.riskLevel)) {
            var P = m;
            return (
              P &&
                (P = m.replace(
                  /\$levelText/g,
                  null ==
                    (i =
                      null == (n = a.brokerConfig.common)
                        ? void 0
                        : n.RISK[this.riskLevel])
                    ? void 0
                    : i.text
                )),
              void r.Dialog({
                message:
                  P ||
                  "您好，因您的风险等级与证券账户交易权限不匹配，您的账户开通后可购买场外基金但暂时不能进行股票等交易。<br />您可以重新进行风险测评，或者继续开通账户之后咨询开户营业部并根据自身情况再次进行风险测评。",
                messageType: "html",
                confirmButtonText: "重新评测",
                cancelButtonText: "继续开户",
                messageAlign: "justify",
                showCancelButton: !f,
                onConfirm: function () {
                  f || s.$emit("retest");
                },
                onCancel: function () {
                  s.$emit("confirm");
                },
              })
            );
          }
          (null == l ? void 0 : l[this.riskLevel])
            ? r.Dialog({
                message: null == l ? void 0 : l[this.riskLevel],
                onConfirm: function () {
                  s.$emit("confirm");
                },
              })
            : this.$emit("confirm");
        } else
          r.Dialog({
            message: "不签署协议，则无法继续完成开户流程",
            confirmButtonText: "同意签署",
            cancelButtonText: "取消",
            showCancelButton: !0,
            onConfirm: function () {
              (s.isProtocolCheck = !0),
                s.$stat.click("trade.apply.riskresult.protocol_confirm");
            },
            onCancel: function () {
              s.$stat.click("trade.apply.riskresult.protocol_cancel");
            },
          });
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-rich-text") +
    n.resolveComponent("FootPrint") +
    n.resolveComponent("StepButtons") +
    n.resolveComponent("mp-dialog")
  )();
var m = n._export_sfc(f, [
  [
    "render",
    function (e, t, o, r, i, s) {
      return n.e(
        { a: n.t(s.riskInfo.text || "未知"), b: o.riskLevel && s.riskInfo.img },
        o.riskLevel && s.riskInfo.img
          ? {
              c: "https://wzq.gtimg.com/resource/weapp/apply/".concat(
                s.riskInfo.img
              ),
            }
          : {},
        { d: s.riskInfo.topTip },
        s.riskInfo.topTip ? { e: n.t(s.riskInfo.topTip) } : {},
        { f: r.curStepConf.showPeriod },
        r.curStepConf.showPeriod
          ? { g: n.t(s.resultPeriodPreText), h: n.t(s.periodText) }
          : {},
        { i: s.recommendTip },
        s.recommendTip
          ? { j: n.t(s.recommendTip) }
          : { k: n.t(s.resultVarietiesPreText), l: n.t(s.varietiesText) },
        { m: r.curStepConf.showProduct && s.riskInfo.product },
        r.curStepConf.showProduct && s.riskInfo.product
          ? { n: n.t(s.riskInfo.product) }
          : {},
        { o: r.curStepConf.showScore && o.investInfo.score },
        r.curStepConf.showScore && o.investInfo.score
          ? { p: n.t(o.investInfo.score) }
          : {},
        { q: s.riskInfo.tip },
        s.riskInfo.tip ? { r: s.riskInfo.tip } : {},
        { s: s.canRetest && !r.curStepConf.hideRetest },
        s.canRetest && !r.curStepConf.hideRetest
          ? {
              t: n.t(r.curStepConf.retestText || "重新测评"),
              v: n.o(function () {
                return s.reTest && s.reTest.apply(s, arguments);
              }),
            }
          : {},
        { w: r.curStepConf.customDesc },
        r.curStepConf.customDesc
          ? { x: r.curStepConf.customDesc }
          : n.e(
              { y: r.curStepConf.additionalDesc },
              r.curStepConf.additionalDesc
                ? { z: n.t(r.curStepConf.additionalDesc) }
                : {}
            ),
        { A: r.curStepConf.showSuitableProtocol },
        r.curStepConf.showSuitableProtocol
          ? n.e(
              { B: r.protcolContents.length },
              r.protcolContents.length
                ? {
                    C: n.f(r.protcolContents, function (e, t, o) {
                      return {
                        a: t,
                        b: "6c9d20d9-0-" + o,
                        c: n.p({ content: e }),
                      };
                    }),
                  }
                : {},
              { D: !r.isProtocolFetch },
              (r.isProtocolFetch, {})
            )
          : {},
        { E: r.isShowSignProtocol && o.investInfo.protocolType },
        r.isShowSignProtocol && o.investInfo.protocolType
          ? {
              F: r.isProtocolCheck,
              G: n.o(function (e) {
                return (r.isProtocolCheck = !r.isProtocolCheck);
              }),
              H: n.t(r.protocolConfig.name),
              I: n.o(function () {
                return r.toProtocol && r.toProtocol.apply(r, arguments);
              }),
              J: n.o(function (e) {
                return (r.isProtocolCheck = !r.isProtocolCheck);
              }),
            }
          : {},
        {
          K: n.o(s.submit),
          L: n.p({
            fixed: !0,
            stat: "riskresult",
            "next-button-text": "确定并进入下一步",
            "hide-prev-button": r.isRecoverMode,
          }),
          M: n.p({ id: "mp-dialog" }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6c9d20d9"],
]);
wx.createComponent(m);
