var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../../../config/risk.js"),
  s = require("../../../common/vendor.js");
require("../../../utils/index.js");
var i = require("../../../model/riskTest/broker/10500.js"),
  t = {
    props: { answer: { required: !0, type: String } },
    data: function () {
      return { LETTER_MAP: r.LETTER_MAP, allQuestion: [], riskAnswerList: [] };
    },
    mounted: function () {
      this.buildAnswers(this.answer);
    },
    methods: {
      buildAnswers: function (s) {
        var t = [];
        s.split(":").forEach(function (e) {
          var s = e.split(""),
            i = [];
          s.forEach(function (e) {
            i.push(r.LETTER_MAP.indexOf(e));
          }),
            t.push(i);
        });
        var n = [];
        i.riskTest.prompts.forEach(function (s, i) {
          s.questions &&
            s.questions.forEach(function (t, u) {
              n.push(
                e(
                  {
                    groupTitle:
                      s.group && 0 === u
                        ? "".concat(r.NUM_HANZI[i + 1], "、").concat(s.group)
                        : "",
                  },
                  t
                )
              );
            });
        }),
          (this.allQuestion = n),
          (this.riskAnswerList = t);
      },
    },
  },
  n = s._export_sfc(t, [
    [
      "render",
      function (e, r, i, t, n, u) {
        return {
          a: s.f(n.allQuestion, function (e, r, i) {
            return s.e(
              { a: e.groupTitle },
              e.groupTitle ? { b: s.t(e.groupTitle) } : {},
              {
                c: s.t(r + 1),
                d: s.t(e.isMultiple ? "【多选】" : ""),
                e: s.t(e.ask),
                f: s.f(e.answers, function (e, i, t) {
                  return s.e(
                    {
                      a: s.t(n.LETTER_MAP[i]),
                      b: s.t(e),
                      c: s.n(n.riskAnswerList[r].includes(i) ? "selected" : ""),
                      d: n.riskAnswerList[r].includes(i),
                    },
                    n.riskAnswerList[r].includes(i)
                      ? { e: n.riskAnswerList[r].includes(i) }
                      : {},
                    { f: e }
                  );
                }),
                g: r,
              }
            );
          }),
        };
      },
    ],
  ]);
wx.createComponent(n);
