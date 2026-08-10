var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  o = require("../../model/apply/useApply.js"),
  i = require("../../cgi/apply.js"),
  c = require("../../common/components/Dialog/index.js");
require("../../service/broker.js");
var s = {
  mixins: [require("../../mixin/platforms/index.js").pluginMixins],
  components: {
    MpDialog: function () {
      return "../../common/components/Dialog/Dialog.js";
    },
    ProgressBar: function () {
      return "../../bizs/apply/ProgressBar.js";
    },
  },
  setup: function () {
    var i = o.useApply(),
      c = i.applyInfo,
      s = i.isRecoverMode,
      a = i.commitApplyData,
      l = i.fetchApplyInfo,
      u = i.navigateNextStep,
      p = i.curStepConf,
      f = i.curStepInfo,
      m = p.questions,
      d = void 0 === m ? [] : m,
      v = n.ref([]),
      g = n.ref([]),
      h = n.ref(!1),
      b = n.ref(!1),
      S = n.computed(function () {
        return p.isEmbbedStep;
      }),
      y = (function () {
        var n = r(
          e().mark(function r() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    null == d ||
                      d.forEach(function (e) {
                        /{{username}}/.test(e.ask) &&
                          (e.ask = e.ask.replace(
                            "{{username}}",
                            c.value.cred_name || ""
                          ));
                      }),
                      (v.value = d),
                      g.value.length !== v.value.length &&
                        (g.value = new Array(v.value.length).fill("")),
                      p.backfillAns && c.value.questionnaire
                        ? ((
                            (null == (n = c.value.questionnaire)
                              ? void 0
                              : n.split(",")) || []
                          ).forEach(function (e) {
                            var r = e.split(":") || [],
                              n = t(r, 2),
                              o = n[0],
                              i = n[1];
                            g.value[o - 1] = i - 1;
                          }),
                          (h.value = g.value.every(function (e, t) {
                            return e === Number(d[t].correctAns);
                          })))
                        : p.canPresetAns &&
                          (null == d ||
                            d.forEach(function (e, t) {
                              var r = Number(e.correctAns);
                              g.value[t] = r;
                            }),
                          (h.value = g.value.every(function (e, t) {
                            return e === Number(d[t].correctAns);
                          })));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })();
    return (
      n.provide("onPageInit", y),
      {
        applyInfo: c,
        isRecoverMode: s,
        navigateNextStep: u,
        curStepConf: p,
        curStepInfo: f,
        commitApplyData: a,
        fetchApplyInfo: l,
        renderQuestions: v,
        selected: g,
        allSelectedYes: h,
        questions: d,
        isPending: b,
        onPageInit: y,
        notSingleStep: S,
      }
    );
  },
  data: function () {
    return { isProtocolCheck: !1 };
  },
  computed: {
    isSubmitDisabled: function () {
      return this.curStepConf.needSignProtocol
        ? !(this.isProtocolCheck && this.allSelectedYes)
        : !this.allSelectedYes;
    },
  },
  methods: {
    clickProtocol: function () {
      this.isProtocolCheck = !this.isProtocolCheck;
    },
    select: function (e, t, r) {
      var n = this,
        o = Number(e.detail.value),
        i = Number(t.correctAns);
      (this.selected[r] = o),
        (this.allSelectedYes = this.selected.every(function (e, t) {
          return e === n.questions[t].correctAns;
        })),
        o !== i &&
          t.reselectTips &&
          c.Dialog({
            message: t.reselectTips,
            confirmButtonText: "重新选择",
            messageAlign: "left",
            onConfirm: function () {
              (n.selected[r] = ""), (n.allSelectedYes = !1), n.$forceUpdate();
            },
          }),
        this.$forceUpdate();
    },
    submit: function () {
      var t = this;
      return r(
        e().mark(function r() {
          var n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (!t.isRecoverMode &&
                        t.$stat.click("trade.apply.apply.submit_first"),
                      !t.isSubmitDisabled)
                    ) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (t.isPending = !0),
                      (n = t.selected
                        .map(function (e, t) {
                          return "".concat(t + 1, ":").concat(e + 1);
                        })
                        .join(",")),
                      (e.prev = 4),
                      (e.next = 7),
                      t.commitApplyData(i.ACTION.QUESTIONNAIRE, {
                        questionnaire: n,
                      })
                    );
                  case 7:
                    t.notSingleStep || t.navigateNextStep(),
                      (t.isPending = !1),
                      t.fetchApplyInfo({ force: !0 }),
                      t.notSingleStep && t.$router.back(),
                      (e.next = 16);
                    break;
                  case 13:
                    (e.prev = 13),
                      (e.t0 = e.catch(4)),
                      (t.isPending = !1),
                      c.Dialog({
                        message: e.t0.retmsg || "提交开户申请失败，请稍后再试",
                      }),
                      e.t0.retcode;
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[4, 13]]
          );
        })
      )();
    },
  },
};
Array ||
  (
    n.resolveComponent("progress-bar") +
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
var a = n._export_sfc(s, [
  [
    "render",
    function (e, t, r, o, i, c) {
      return n.e(
        { a: e.rootFontSize, b: !o.notSingleStep },
        o.notSingleStep ? {} : { c: n.p({ "step-name": o.curStepInfo.name }) },
        { d: n.t(o.curStepConf.headerTips), e: o.renderQuestions.length },
        o.renderQuestions.length
          ? n.e(
              {
                f: n.f(o.renderQuestions, function (e, t, r) {
                  return {
                    a: n.t(t + 1),
                    b: n.t(e.ask),
                    c: n.f(e.answers, function (e, r, i) {
                      return {
                        a: "".concat(r),
                        b: o.selected[t] === r,
                        c: n.t(e),
                        d: r,
                      };
                    }),
                    d: n.o(function (r) {
                      return c.select(r, e, t);
                    }, t),
                    e: t,
                  };
                }),
                g: o.curStepConf.needSignProtocol,
              },
              o.curStepConf.needSignProtocol
                ? {
                    h: i.isProtocolCheck,
                    i: n.t(o.curStepConf.protocolText),
                    j: n.o(function () {
                      return (
                        c.clickProtocol && c.clickProtocol.apply(c, arguments)
                      );
                    }),
                    k: n.o(function () {
                      return (
                        c.clickProtocol && c.clickProtocol.apply(c, arguments)
                      );
                    }),
                  }
                : {},
              {
                l: n.t(o.curStepConf.submitBtnText || "提交问卷"),
                m: c.isSubmitDisabled,
                n: n.o(function () {
                  return c.submit && c.submit.apply(c, arguments);
                }),
              }
            )
          : {},
        {
          o: n.p({ id: "mp-dialog" }),
          p: n.sr("#global-wrap", "72c4633e-0"),
          q: n.p({
            id: "global-wrap",
            filePath: "/apply/questionnaire",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-72c4633e"],
]);
wx.createPage(a);
