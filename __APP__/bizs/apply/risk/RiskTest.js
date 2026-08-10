require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../config/risk.js"),
  s = require("../../../model/riskTest/index.js"),
  n = require("../../../model/apply/utils/timing.js"),
  i = require("../../../model/apply/useApply.js"),
  o = require("../../../model/riskTest/broker/11100.js"),
  r = new n.Timing(),
  u = {
    components: {
      RiskQuestion: function () {
        return "./RiskQuestion.js";
      },
      RiskQuestionExtra: function () {
        return "./RiskQuestionExtra.js";
      },
      StepButtons: function () {
        return "../../../pages/apply/components/StepButtons/StepButtons.js";
      },
      FootPrint: function () {
        return "../FootPrint.js";
      },
    },
    expose: ["resetCurrentQuesionAnswer", "showExtraSheet", "reTest", "sumbit"],
    provide: function () {
      return { questions: this.questions };
    },
    props: {
      biz: {
        type: String,
        required: !0,
        validate: function (t) {
          return ["apply", "account"].includes(t);
        },
      },
      skipDesc: { type: Boolean, default: !1 },
      userData: Object,
      descToTest: Function,
      investInfo: { type: Object, default: function () {} },
    },
    setup: function (e, s) {
      var n = s.emit,
        o = t.ref(0),
        r = t.getCurrentInstance().proxy,
        u = t.inject("digitalHumanRef");
      t.watch(o, function (t) {
        var e,
          s,
          i = [5, 11, r.questions.length - 1].findIndex(function (e) {
            return e === t;
          });
        -1 !== i &&
          (n("updateVideoId", "7-".concat(i + 2)),
          null ==
            (s =
              null == (e = null == u ? void 0 : u.value) ? void 0 : e.replay) ||
            s.call(e));
      });
      var a = i.useApply().curStepConf;
      return {
        currentQuestionIndex: o,
        risktestTitle: t.computed(function () {
          return (null == a ? void 0 : a.risktestTitle) || "风险测评";
        }),
      };
    },
    data: function () {
      var t = o.riskTest,
        e = t.statements,
        s = t.prompts,
        n = t.varieties,
        i = t.version;
      return {
        statements: e,
        prompts: s,
        varieties: n,
        version: void 0 === i ? "1" : i,
        hasShowDesc: !1,
        answers: [],
        translateAnimation: "move",
      };
    },
    computed: {
      isShowDesc: function () {
        return !(this.skipDesc || this.hasShowDesc);
      },
      questions: function () {
        var t = this,
          n = [],
          i = 0;
        return (
          this.prompts.forEach(function (o, r) {
            o.questions.forEach(function (u) {
              if (!u.hidden) {
                u.uniqueId = i;
                var a = s.disabledOptions(u, t.answers, t.investInfo),
                  c = a.disabledList,
                  l = a.conflictTips;
                (u.disabledList = c),
                  (u.conflictTips = l),
                  (u.weakConflictTips = s.getWeakConflictTips(
                    u,
                    t.answers,
                    t.investInfo
                  )),
                  o.group &&
                    (u.title = ""
                      .concat(e.NUM_HANZI.charAt(r + 1), "、")
                      .concat(o.group)),
                  n.push(u);
              }
              i += 1;
            });
          }),
          this.setAnswerLength(i),
          n
        );
      },
    },
    methods: {
      reTest: function () {
        this.goLastQuestion({ allReset: !0 }), r.start();
      },
      closeDesc: function () {
        this.descToTest ? this.descToTest(this.toTest) : this.toTest();
      },
      toTest: function () {
        var t = this;
        r.start(),
          setTimeout(function () {
            t.hasShowDesc = !0;
          }, 500);
      },
      selectAnswer: function (t) {
        var e = this,
          s = t.uniqueId,
          n = t.answer;
        (this.answers[s] = n),
          "apply" === this.biz &&
            this.$stat.click(
              "trade.apply.riskanswer.question_submit",
              void 0,
              void 0,
              { question_no: this.currentQuestionIndex + 1 }
            ),
          this.currentQuestionIndex < this.questions.length - 1
            ? (this.disabledNextQuestion(),
              setTimeout(function () {
                (e.translateAnimation = "move"), (e.currentQuestionIndex += 1);
              }, 300))
            : this.submit();
      },
      disabledNextQuestion: function () {
        var t = this,
          e = this.currentQuestionIndex + 1,
          n = this.questions[e],
          i = s.disabledOptions(n, t.answers, t.investInfo),
          o = i.disabledList,
          r = i.conflictTips,
          u = s.getWeakConflictTips(n, t.answers, t.investInfo);
        (this.questions[e].disabledList = o),
          (this.questions[e].conflictTips = r),
          (this.questions[e].weakConflictTips = u);
      },
      goLastQuestion: function (t) {
        var e = this;
        this.$stat.click("trade.apply.riskanswer.lastquestion");
        var s = t.allReset,
          n = void 0 !== s && s;
        if (!this.isTranslating) {
          if (((this.translateAnimation = "back"), n)) {
            for (var i = this.currentQuestionIndex; i >= 0; )
              this.$refs.question[i--].reset();
            this.currentQuestionIndex = 0;
          } else
            this.$emit("lastQuestion"),
              this.$refs.question[this.currentQuestionIndex].reset(),
              (this.currentQuestionIndex -= 1),
              this.$refs.question[this.currentQuestionIndex].reset();
          (this.isTranslating = !0),
            setTimeout(function () {
              e.isTranslating = !1;
            }, 800);
        }
      },
      selectExtra: function (t) {
        var e = t.answer;
        this.$emit("submit", {
          answers: this.answers.concat(e),
          version: this.version,
          special: 1,
        });
      },
      onExtraClose: function () {
        this.resetCurrentQuesionAnswer();
      },
      submit: function () {
        "apply" === this.biz &&
          (r.stop(),
          r.stat("trade.apply.riskanswer.question_all_time", "show_time")),
          this.$emit("submit", {
            answers: this.answers,
            version: this.version,
          });
      },
      showExtraSheet: function () {
        this.$refs.riskQuestionExtra.show(this.answers);
      },
      resetCurrentQuesionAnswer: function () {
        var t, e, s, n;
        null ==
          (n =
            null ==
            (s =
              null ==
              (e =
                null == (t = null == this ? void 0 : this.$refs)
                  ? void 0
                  : t.question)
                ? void 0
                : e[this.currentQuestionIndex])
              ? void 0
              : s.reset) || n.call(s);
      },
      setAnswerLength: function (t) {
        this.answers.length !== t && (this.answers.length = t);
      },
    },
  };
Array ||
  (
    t.resolveComponent("FootPrint") +
    t.resolveComponent("StepButtons") +
    t.resolveComponent("RiskQuestion") +
    t.resolveComponent("transition") +
    t.resolveComponent("RiskQuestionExtra")
  )();
var a = t._export_sfc(u, [
  [
    "render",
    function (e, s, n, i, o, r) {
      return t.e(
        {
          a: t.t(i.risktestTitle),
          b: t.f(o.statements, function (t, e, s) {
            return { a: t, b: e };
          }),
          c: t.o(r.closeDesc),
          d: t.p({
            stat: "risktest",
            "hide-prev-button": "apply" !== n.biz,
            "next-button-text": "开始答题",
          }),
          e: r.isShowDesc,
          f: r.questions[i.currentQuestionIndex].title,
        },
        r.questions[i.currentQuestionIndex].title
          ? { g: t.t(r.questions[i.currentQuestionIndex].title) }
          : {},
        {
          h: t.f(r.questions, function (e, s, u) {
            return {
              a: t.sr("question", "b059668d-3-" + u + ",b059668d-2-" + u, {
                f: 1,
              }),
              b: t.o(r.selectAnswer, s),
              c: "b059668d-3-" + u + ",b059668d-2-" + u,
              d: t.p({
                "invest-info": n.investInfo,
                "all-answers": o.answers,
                question: e,
                index: s + 1,
                "unique-id": e.uniqueId,
                "disabled-list": e.disabledList,
                "conflict-tips": e.conflictTips,
                "weak-conflict-tips": e.weakConflictTips,
                "show-letter": !0,
                "is-multiple": e.multiple,
                "is-fold": e.fold,
              }),
              e: s === i.currentQuestionIndex,
              f: s,
              g: s,
              h: "b059668d-2-" + u,
            };
          }),
          i: t.p({ name: o.translateAnimation }),
          j: 0 !== i.currentQuestionIndex ? "visible" : "hidden",
          k: t.o(function () {
            return r.goLastQuestion && r.goLastQuestion.apply(r, arguments);
          }),
          l: "".concat(
            Math.round(
              (100 * (i.currentQuestionIndex + 1)) / r.questions.length
            ),
            "%"
          ),
          m: t.t(i.currentQuestionIndex + 1),
          n: t.t(r.questions.length),
          o: !r.isShowDesc,
          p: t.sr("riskQuestionExtra", "b059668d-4"),
          q: t.o(r.selectExtra),
          r: t.o(r.onExtraClose),
          s: t.p({ "invest-info": n.investInfo }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b059668d"],
]);
wx.createComponent(a);
