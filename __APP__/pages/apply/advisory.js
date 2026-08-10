var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  n = require("../../model/apply/useApply.js"),
  r = require("../../model/apply/presign.js"),
  i = require("../../utils/index.js"),
  p = require("../../model/riskTest/broker/11100.js");
require("../../service/broker.js");
var c = require("../../service/stat/mp-weixin.js"),
  a = require("../../mixin/platforms/index.js"),
  u = require("../../config/broker/11100/index.js"),
  s = o.defineComponent({
    name: "ApplyAdvisory",
    mixins: [a.pluginMixins],
    components: {
      FootPrint: function () {
        return "../../bizs/apply/FootPrint.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      Popup: function () {
        return "../../common/components/Popup/index.js";
      },
    },
    setup: function () {
      var a,
        s = n.useApply(),
        l = s.curStepInfo,
        f = s.curStepConf,
        d = s.navigateNextStep,
        m = s.applyInfo,
        C = null == (a = o.getCurrentInstance()) ? void 0 : a.proxy,
        h = o.ref(!1);
      o.provide(
        "onPageInit",
        t(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    !(function () {
                      var e = f.presignEligibility;
                      if (null == e ? void 0 : e.enabled) {
                        var t = m.value || {},
                          o = t.risk,
                          n = void 0 === o ? "" : o,
                          i = t.risk_level,
                          c = void 0 === i ? "" : i,
                          a = t.markets,
                          u = void 0 === a ? "" : a;
                        r.checkPresignEligible({
                          riskString: n,
                          riskLevel: c,
                          markets: u,
                          riskTest: p.riskTest,
                          minRiskLevel: e.minRiskLevel,
                          checkMarkets: e.checkMarkets,
                          matchConfig: void 0,
                        })
                          ? (h.value = !0)
                          : d({
                              type: "replace",
                              targetStep: "ApplyProgress",
                              ignoreDebounce: !0,
                            });
                      } else h.value = !0;
                    })();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )
      );
      var S = o.ref(!0),
        g = o.computed(function () {
          return !S.value;
        }),
        v = o.computed(function () {
          var e = f.feeMethodPopup || {};
          return {
            title: e.title || "",
            contents: e.contents || [],
            confirmText: e.confirmText || "我知道了",
          };
        }),
        y = o.ref(!1);
      return {
        noop: o.noop,
        isPresignReady: h,
        curStepInfo: l,
        curStepConf: f,
        handleSkip: function () {
          d();
        },
        handleConfirm: function () {
          g.value ||
            (c.stat.click(
              "trade.vipadvisorapplyprecontract.pre_sign_confirmation_btn_click"
            ),
            f.openKey &&
              (null == C ||
                C.$router.push({
                  name: "BizBrokerService",
                  query: {
                    key: f.openKey,
                    source: "apply",
                    originUrl: "https://"
                      .concat(u.brokerConfig.base.domain)
                      .concat(
                        i.getStaticPath(),
                        "#/nav/index?scene=apply_advisory_sign"
                      ),
                  },
                })));
        },
        confirmDisabled: g,
        isPresignChecked: S,
        togglePresignCheck: function () {
          S.value = !S.value;
        },
        handleIntro: function () {
          var e = f.introOpenKey;
          e &&
            (null == C ||
              C.$router.push({
                name: "BizBrokerService",
                query: {
                  key: e,
                  source: "apply",
                  originUrl: "https://"
                    .concat(u.brokerConfig.base.domain)
                    .concat(
                      i.getStaticPath(),
                      "#/nav/index?scene=apply_advisory_sign"
                    ),
                },
              }));
        },
        handleFeeMethod: function () {
          v.value.contents.length && (y.value = !0);
        },
        feeMethodPopup: v,
        feeMethodVisible: y,
        closeFeeMethod: function () {
          y.value = !1;
        },
      };
    },
  });
Array ||
  (
    o.resolveComponent("progress-bar") +
    o.resolveComponent("FootPrint") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("Popup") +
    o.resolveComponent("ApplyWrap") +
    o.resolveComponent("GlobalWrap")
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
var l = o._export_sfc(s, [
  [
    "render",
    function (e, t, n, r, i, p) {
      return o.e(
        { a: e.rootFontSize, b: e.isPresignReady },
        e.isPresignReady
          ? o.e(
              {
                c: o.p({ "step-name": e.curStepInfo.name }),
                d: !e.curStepConf.needConfirmTemplate,
              },
              e.curStepConf.needConfirmTemplate
                ? o.e(
                    {
                      m: e.isPresignChecked ? 1 : "",
                      n: o.t(e.curStepConf.title),
                      o: e.curStepConf.tag,
                    },
                    e.curStepConf.tag ? { p: o.t(e.curStepConf.tag) } : {},
                    {
                      q: o.o(function () {
                        return (
                          e.togglePresignCheck &&
                          e.togglePresignCheck.apply(e, arguments)
                        );
                      }),
                      r: o.t(e.curStepConf.product.name),
                      s: o.t(e.curStepConf.product.desc),
                      t: o.t(e.curStepConf.product.moreText),
                      v: o.o(function () {
                        return (
                          e.handleIntro && e.handleIntro.apply(e, arguments)
                        );
                      }),
                      w: o.t(e.curStepConf.fee.prefix),
                      x: o.t(e.curStepConf.fee.rate),
                      y: o.t(e.curStepConf.fee.suffix),
                      z: e.curStepConf.fee.note,
                    },
                    e.curStepConf.fee.note
                      ? { A: o.t(e.curStepConf.fee.note) }
                      : {},
                    {
                      B: o.f(e.curStepConf.fee.details, function (e, t, n) {
                        return { a: o.t(e), b: t };
                      }),
                      C: e.curStepConf.fee.methodTitle,
                    },
                    e.curStepConf.fee.methodTitle
                      ? { D: o.t(e.curStepConf.fee.methodTitle) }
                      : {},
                    { E: e.curStepConf.fee.methodDesc },
                    e.curStepConf.fee.methodDesc
                      ? {
                          F: o.t(e.curStepConf.fee.methodDesc),
                          G: o.t(e.curStepConf.fee.methodMoreText),
                          H: o.o(function () {
                            return (
                              e.handleFeeMethod &&
                              e.handleFeeMethod.apply(e, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      I: o.f(e.curStepConf.notices, function (e, t, n) {
                        return o.e({ a: 0 !== t }, {}, { b: o.t(e), c: t });
                      }),
                    }
                  )
                : o.e(
                    { e: e.curStepConf.tag },
                    e.curStepConf.tag ? { f: o.t(e.curStepConf.tag) } : {},
                    {
                      g: o.f(e.curStepConf.services, function (e, t, n) {
                        return {
                          a: o.t(t + 1),
                          b: o.t(e.name),
                          c: o.t(e.desc),
                          d: t,
                        };
                      }),
                      h: e.curStepConf.commissionRate,
                    },
                    e.curStepConf.commissionRate
                      ? {
                          i: o.t(e.curStepConf.commissionRate),
                          j: o.t(e.curStepConf.commissionRate),
                        }
                      : {},
                    { k: e.curStepConf.disclaimer },
                    e.curStepConf.disclaimer
                      ? { l: o.t(e.curStepConf.disclaimer) }
                      : {}
                  ),
              {
                J: o.o(function () {
                  return e.handleSkip && e.handleSkip.apply(e, arguments);
                }),
                K:
                  e.curStepConf.tooltip &&
                  e.curStepConf.tooltip.show &&
                  e.curStepConf.tooltip.text,
              },
              e.curStepConf.tooltip &&
                e.curStepConf.tooltip.show &&
                e.curStepConf.tooltip.text
                ? { L: o.t(e.curStepConf.tooltip.text) }
                : {},
              {
                M: e.confirmDisabled ? 1 : "",
                N: e.confirmDisabled,
                O: o.o(function () {
                  return e.handleConfirm && e.handleConfirm.apply(e, arguments);
                }),
                P: o.p({ id: "mp-dialog" }),
                Q: o.t(e.feeMethodPopup.title),
                R: o.f(e.feeMethodPopup.contents, function (e, t, n) {
                  return { a: o.t(e), b: t };
                }),
                S: o.t(e.feeMethodPopup.confirmText),
                T: o.o(function () {
                  return (
                    e.closeFeeMethod && e.closeFeeMethod.apply(e, arguments)
                  );
                }),
                U: o.o(function () {
                  return e.noop && e.noop.apply(e, arguments);
                }),
                V: o.o(e.closeFeeMethod),
                W: o.p({
                  show: e.feeMethodVisible,
                  position: "bottom",
                  "custom-class": "advisory-fee-popup mp-popup--round",
                  "mask-closable": !0,
                }),
              }
            )
          : {},
        {
          X: o.sr("#global-wrap", "692adc9f-0"),
          Y: o.p({
            id: "global-wrap",
            filePath: "/apply/advisory",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-692adc9f"],
]);
wx.createPage(l);
