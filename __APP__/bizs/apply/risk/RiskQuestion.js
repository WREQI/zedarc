var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var i = require("../../../config/risk.js"),
  n = require("../../../stores/app/useMode.js"),
  s = require("../../../common/vendor.js"),
  l = require("../../../service/aegis/platform/not-wujie.js"),
  r = require("../../../cgi/trace.js"),
  c = require("../../../model/riskTest/index.js"),
  o = require("../../../model/riskTest/broker/11100.js"),
  u = {
    expose: ["reset"],
    inject: ["questions"],
    props: {
      index: { required: !0, type: Number },
      disabledList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      conflictTips: {
        type: Array,
        default: function () {
          return [];
        },
      },
      weakConflictTips: {
        type: Object,
        default: function () {
          return {};
        },
      },
      uniqueId: [Number, String],
      isMultiple: { type: Boolean, default: !1 },
      investInfo: { type: Object, default: function () {} },
      isFold: { type: Boolean, default: !1 },
      allAnswers: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function () {
      var e = n.useModeStore();
      return { simpleMode: s.storeToRefs(e).simpleMode };
    },
    data: function () {
      return {
        selected: [],
        LETTER_MAP: i.LETTER_MAP,
        isCommited: !1,
        selectedDisaledList: [],
        canExpand: !0,
        selectedShowTips: {},
      };
    },
    computed: {
      isCommitAble: function () {
        return 0 !== this.selected.length;
      },
      allSelectedDiabledList: function () {
        return this.disabledList.concat(this.selectedDisaledList);
      },
      question: function () {
        var e = this;
        return this.questions.find(function (t) {
          return t.uniqueId === e.uniqueId;
        });
      },
    },
    methods: {
      select: function (i) {
        var n = this;
        return t(
          e().mark(function t() {
            var s, l, r, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!n.isCommited) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (
                      ((r = n.isMultiple
                        ? i.detail.value.map(function (e) {
                            return Number(e);
                          })
                        : [Number(i.detail.value)]),
                      (n.selected = r),
                      !(null ==
                      (l = null == (s = n.question) ? void 0 : s.conflicts)
                        ? void 0
                        : l.selectFn))
                    ) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (e.next = 6),
                      n.question.conflicts.selectFn(
                        n.selected,
                        n.investInfo,
                        n.allAnswers
                      )
                    );
                  case 6:
                    if (
                      ((o = e.sent).stat && n.$stat.click(o.stat), o.goNext)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((n.selected = []), void (n.selectedShowTips = {}))
                    );
                  case 9:
                    (n.selectedDisaledList = o.selectedDisaledList || []),
                      o.goNext &&
                        o.changedSelected &&
                        o.changedSelected.length &&
                        (n.selected = o.changedSelected),
                      (e.next = 13);
                    break;
                  case 12:
                    n.selectedDisaledList = [];
                  case 13:
                    (n.selectedShowTips = c.getSelectedShowTips(
                      n.question,
                      n.selected
                    )),
                      n.isMultiple || n.commit();
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      commit: function () {
        if (!this.isCommited) {
          this.selected.sort(function (e, t) {
            return e - t;
          });
          var e = this.selected
            .map(function (e) {
              return i.LETTER_MAP[e];
            })
            .join("");
          this.weakConflictSelectTrace({ answers: this.selected }),
            this.$emit("select", {
              uniqueId:
                this.uniqueId || 0 === this.uniqueId
                  ? this.uniqueId
                  : this.index,
              answer: e,
              index: this.index,
            }),
            (this.isCommited = !0);
        }
      },
      reset: function () {
        (this.selected = []),
          (this.isCommited = !1),
          (this.selectedDisaledList = []),
          (this.selectedShowTips = {});
      },
      onExpandQuestion: function () {
        this.canExpand = !this.canExpand;
      },
      weakConflictSelectTrace: function (n) {
        var s = this;
        return t(
          e().mark(function t() {
            var c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((c = n.answers), o.riskTest.selectWeakConflictsTrace)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      if (
                        !c.some(function (e) {
                          var t;
                          return null == (t = s.weakConflictTips[e])
                            ? void 0
                            : t.length;
                        })
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.prev = 4),
                        (e.next = 7),
                        r.TraceCgi.riskTestConflictTrace({
                          risk_assessment_trace: "".concat(s.index, "-").concat(
                            c
                              .map(function (e) {
                                return i.LETTER_MAP[e];
                              })
                              .join("")
                          ),
                        })
                      );
                    case 7:
                      e.next = 12;
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(4)),
                        l.aegisReporter.reportEvent(
                          "MONITOR-APPLY-RISKTEST-TRADE-ERR",
                          { ext3: JSON.stringify(e.t0) }
                        );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[4, 9]]
            );
          })
        )();
      },
    },
  },
  a = s._export_sfc(u, [
    [
      "render",
      function (e, t, i, n, l, r) {
        return s.e(
          {
            a: s.t(i.index),
            b: s.t(i.isMultiple ? "（多选题）" : ""),
            c: s.t(r.question.ask),
            d: s.t(r.question.hideSymbol ? "" : ":"),
            e: i.isFold && l.canExpand ? 1 : "",
            f: i.isFold,
          },
          i.isFold
            ? {
                g: s.t(l.canExpand ? "展开" : "收起"),
                h: s.n(l.canExpand ? "triangle-down" : "triangle-up"),
                i: s.o(function () {
                  return (
                    r.onExpandQuestion && r.onExpandQuestion.apply(r, arguments)
                  );
                }),
              }
            : {},
          { j: !i.isMultiple },
          i.isMultiple
            ? s.e(
                {
                  q: s.f(r.question.answers, function (e, t, c) {
                    return s.e(
                      {
                        a: s.t(l.LETTER_MAP[t]),
                        b: s.t(e),
                        c: r.allSelectedDiabledList.includes(t),
                      },
                      r.allSelectedDiabledList.includes(t)
                        ? {}
                        : {
                            d: n.simpleMode ? "#e63535" : "#3077ec",
                            e: "".concat(t),
                            f: l.selected.includes(t),
                          },
                      {
                        g:
                          !r.allSelectedDiabledList.includes(t) &&
                          i.weakConflictTips[t],
                      },
                      !r.allSelectedDiabledList.includes(t) &&
                        i.weakConflictTips[t]
                        ? {
                            h: s.f(i.weakConflictTips[t], function (e, t, i) {
                              return { a: s.t(e), b: t };
                            }),
                          }
                        : {},
                      { i: l.selectedShowTips[t] },
                      l.selectedShowTips[t]
                        ? { j: s.t(l.selectedShowTips[t]) }
                        : {},
                      {
                        k: t,
                        l: s.n(
                          r.allSelectedDiabledList.includes(t)
                            ? "text-color-5"
                            : "text-color-1"
                        ),
                      }
                    );
                  }),
                  r: s.f(i.conflictTips, function (e, t, i) {
                    return { a: s.t(e), b: t };
                  }),
                  s: r.question.tips,
                },
                r.question.tips ? { t: s.t(r.question.tips) } : {},
                {
                  v: s.o(function () {
                    return r.select && r.select.apply(r, arguments);
                  }),
                }
              )
            : s.e(
                {
                  k: s.f(r.question.answers, function (e, t, c) {
                    return s.e(
                      {
                        a: s.t(l.LETTER_MAP[t]),
                        b: s.t(e),
                        c: r.allSelectedDiabledList.includes(t),
                      },
                      r.allSelectedDiabledList.includes(t)
                        ? {}
                        : {
                            d: n.simpleMode ? "#e63535" : "#3077ec",
                            e: "".concat(t),
                            f: l.selected.includes(t),
                          },
                      {
                        g:
                          !r.allSelectedDiabledList.includes(t) &&
                          i.weakConflictTips[t],
                      },
                      !r.allSelectedDiabledList.includes(t) &&
                        i.weakConflictTips[t]
                        ? {
                            h: s.f(i.weakConflictTips[t], function (e, t, i) {
                              return { a: s.t(e), b: t };
                            }),
                          }
                        : {},
                      { i: l.selectedShowTips[t] },
                      l.selectedShowTips[t]
                        ? { j: s.t(l.selectedShowTips[t]) }
                        : {},
                      {
                        k: t,
                        l: s.n(
                          r.allSelectedDiabledList.includes(t)
                            ? "text-color-5"
                            : "text-color-1"
                        ),
                      }
                    );
                  }),
                  l: s.f(i.conflictTips, function (e, t, i) {
                    return { a: s.t(e), b: t };
                  }),
                  m: r.question.tips,
                },
                r.question.tips
                  ? {
                      n: s.t(r.question.tips),
                      o: s.n(i.conflictTips.length ? "" : "border--top"),
                    }
                  : {},
                {
                  p: s.o(function () {
                    return r.select && r.select.apply(r, arguments);
                  }),
                }
              ),
          { w: i.isMultiple },
          i.isMultiple
            ? {
                x: s.o(function () {
                  return r.commit && r.commit.apply(r, arguments);
                }),
                y: !r.isCommitAble,
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(a);
