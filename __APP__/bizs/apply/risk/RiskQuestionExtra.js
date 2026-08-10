var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var s = require("../../../common/vendor.js"),
  n = require("../../../config/risk.js"),
  i = require("../../../model/riskTest/index.js"),
  o = require("../../../stores/app/useMode.js"),
  r = require("../../../model/riskTest/broker/11100.js"),
  c = {
    components: {
      MpActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    props: { investInfo: { type: Object, default: function () {} } },
    setup: function () {
      var e = o.useModeStore();
      return { simpleMode: s.storeToRefs(e).simpleMode };
    },
    data: function () {
      var e = r.riskTest,
        t = e.extraPrompts,
        s = e.extraPromptsName;
      return {
        isShow: !1,
        selected: [],
        questions: [],
        answers: [],
        LETTER_MAP: n.LETTER_MAP,
        extraPrompts: t,
        NUM_HANZI_2: n.NUM_HANZI_2,
        extraPromptsName: s,
      };
    },
    methods: {
      onClose: function (e) {
        e || ((this.isShow = !1), this.$emit("close"));
      },
      show: function (e) {
        (this.isShow = !0),
          (this.answers = e),
          this.handlerQuestions(),
          (this.selected = new Array(this.questions.length).fill([]));
      },
      handlerQuestions: function () {
        var e,
          t = this,
          s = [];
        null == (e = this.extraPrompts) ||
          e.forEach(function (e) {
            e.questions.forEach(function (e) {
              (e.disabledList = t.disabledQuestion(e)), s.push(e);
            });
          }),
          (this.questions = s);
      },
      disabledQuestion: function (e) {
        return i.disabledOptions(e, this.answers, this.investInfo).disabledList;
      },
      confirm: function () {
        this.$emit("confirm");
      },
      onBeforeClose: function (e) {
        var t = 0;
        this.selected.forEach(function (e) {
          e && e.length && (t += 1);
        }),
          t !== this.questions.length
            ? (s.index.showToast({
                title: "请先回答完问题，再提交～",
                icon: "none",
              }),
              null == e || e(!1))
            : (this.commit(), null == e || e());
      },
      select: function (s, n, i) {
        var o = this;
        return t(
          e().mark(function t() {
            var r, c;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((c = n.isMultiple
                        ? s.detail.value.map(function (e) {
                            return Number(e);
                          })
                        : [Number(s.detail.value)]),
                      (o.selected[i] = c),
                      !(null == (r = null == n ? void 0 : n.conflicts)
                        ? void 0
                        : r.selectFn))
                    ) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 3), n.conflicts.selectFn(c);
                  case 3:
                    if (e.sent.goNext) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", void (o.selected[i] = []));
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      commit: function () {
        var e = [];
        this.selected.forEach(function (t) {
          t.sort(function (e, t) {
            return e - t;
          }),
            e.push(
              t
                .map(function (e) {
                  return n.LETTER_MAP[e];
                })
                .join("")
            );
        }),
          this.$emit("select", { answer: e });
      },
    },
  };
Array || s.resolveComponent("mp-action-sheet")();
var u = s._export_sfc(c, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return {
        a: s.t(o.extraPromptsName),
        b: s.t(o.NUM_HANZI_2[o.questions.length]),
        c: s.f(o.questions, function (e, t, n) {
          return s.e(
            { a: s.t(t + 1), b: s.t(e.ask), c: !e.isMultiple },
            e.isMultiple
              ? {
                  f: s.f(e.answers, function (n, r, c) {
                    return s.e(
                      {
                        a: s.t(o.LETTER_MAP[r]),
                        b: s.t(n),
                        c: e.disabledList.includes(r),
                      },
                      e.disabledList.includes(r)
                        ? {}
                        : {
                            d: i.simpleMode ? "#e63535" : "#3077ec",
                            e: "".concat(r),
                            f: o.selected[t] && o.selected[t].includes(r),
                          },
                      {
                        g: r,
                        h: s.n(
                          e.disabledList.includes(r)
                            ? "text-color-5"
                            : "text-color-1"
                        ),
                        i: s.n(r === e.answers.length - 1 ? "p-b-0" : ""),
                      }
                    );
                  }),
                  g: s.o(function (s) {
                    return r.select(s, e, t);
                  }, t),
                }
              : {
                  d: s.f(e.answers, function (n, r, c) {
                    return s.e(
                      {
                        a: s.t(o.LETTER_MAP[r]),
                        b: s.t(n),
                        c: e.disabledList.includes(r),
                      },
                      e.disabledList.includes(r)
                        ? {}
                        : {
                            d: i.simpleMode ? "#e63535" : "#3077ec",
                            e: "".concat(r),
                            f: o.selected[t] && o.selected[t].includes(r),
                          },
                      {
                        g: r,
                        h: s.n(
                          e.disabledList.includes(r)
                            ? "text-color-5"
                            : "text-color-1"
                        ),
                        i: s.n(r === e.answers.length - 1 ? "p-b-0" : ""),
                      }
                    );
                  }),
                  e: s.o(function (s) {
                    return r.select(s, e, t);
                  }, t),
                },
            { h: t }
          );
        }),
        d: s.o(r.onClose),
        e: s.p({
          "picker-style": !0,
          "mask-closable": !0,
          value: o.isShow,
          "confirm-txt": "确定",
          "before-close": r.onBeforeClose,
          "show-title-border-bottom": !1,
        }),
      };
    },
  ],
]);
wx.createComponent(u);
