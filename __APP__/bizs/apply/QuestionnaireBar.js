var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  i = require("../../model/apply/useApply.js");
require("../../service/broker.js");
var o = require("../../cgi/apply.js"),
  t = require("../../config/broker/11100/index.js"),
  s = {
    name: "QuestionnaireBar",
    components: {
      StLoading: function () {
        return "../../common/components/Loading/index.js";
      },
    },
    setup: function (s, a) {
      var u,
        c = a.emit,
        p = i.useApply(),
        f = p.applyInfo,
        l = p.commitApplyData,
        d = p.fetchApplyInfo,
        v =
          (null == (u = t.brokerConfig.apply.stepConfig)
            ? void 0
            : u.questionnaire) || {},
        m = r.ref(!0),
        q = r.computed(function () {
          return f.value.questionnaire;
        }),
        h = r.computed(function () {
          return v.questionnaireInfo || {};
        });
      function x() {
        var e = v.questions;
        return (void 0 === e ? [] : e)
          .map(function (e, n) {
            return ""
              .concat(n + 1, ":")
              .concat((null == e ? void 0 : e.correctAns) + 1);
          })
          .join(",");
      }
      return (
        r.onMounted(
          n(
            e().mark(function n() {
              var r;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((m.value = !0), (r = x()), !h.value.silentSubmit)
                        ) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.prev = 3),
                          (e.next = 6),
                          l(o.ACTION.QUESTIONNAIRE, { questionnaire: r })
                        );
                      case 6:
                        return (e.next = 8), d({ force: !0 });
                      case 8:
                        (m.value = !1), (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(3)), (m.value = !1);
                      case 14:
                        e.next = 17;
                        break;
                      case 16:
                        m.value = !1;
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[3, 11]]
              );
            })
          )
        ),
        {
          isPending: m,
          questionnaireInfo: h,
          isFinish: q,
          showQuestionnaire: function () {
            c("show-questionnaire");
          },
          getCorrectAns: x,
        }
      );
    },
  };
Array || r.resolveComponent("st-loading")();
var a = r._export_sfc(s, [
  [
    "render",
    function (e, n, i, o, t, s) {
      return r.e(
        {
          a: r.t(o.questionnaireInfo.descText || "请完成问卷回访"),
          b: o.isPending,
        },
        o.isPending
          ? { c: r.p({ size: "36rpx" }) }
          : {
              d: r.n("icon-" + (o.isFinish ? "check" : "info")),
              e: r.t(
                o.isFinish
                  ? o.questionnaireInfo.finishText || "已完成"
                  : o.questionnaireInfo.unfinishText || "未完成"
              ),
            },
        {
          f: r.o(function () {
            return (
              o.showQuestionnaire && o.showQuestionnaire.apply(o, arguments)
            );
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9d89bcc3"],
]);
wx.createComponent(a);
