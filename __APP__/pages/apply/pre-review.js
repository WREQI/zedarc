var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  r = require("../../model/apply/useApply.js"),
  n = require("../../model/apply/usePreReview.js"),
  i = require("../../mixin/platforms/index.js"),
  a = o.defineComponent({
    name: "ApplyPreReview",
    components: {
      StepButtons: function () {
        return "./components/StepButtons/StepButtons.js";
      },
      IdCardPhotoSwiper: function () {
        return "./components/IdCardPhotoSwiper/IdCardPhotoSwiper.js";
      },
    },
    mixins: [i.pluginMixins],
    setup: function () {
      var i = r.useApply().navigateNextStep,
        a = n.usePreReview(),
        p = a.groups,
        s = a.totalCount,
        u = a.hasPreReviewTips,
        d = a.fetchPreReview,
        c = a.isModifyMode,
        l = a.goNextModifyStep,
        f = a.idcardPhotoSides;
      return (
        o.onMounted(
          t(
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (c.value = !1), (e.prev = 1), (e.next = 4), d();
                      case 4:
                        e.next = 8;
                        break;
                      case 6:
                        (e.prev = 6), (e.t0 = e.catch(1));
                      case 8:
                        u.value || i({ type: "replace" });
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[1, 6]]
              );
            })
          )
        ),
        {
          groups: p,
          totalCount: s,
          navigateNextStep: i,
          isModifyMode: c,
          goNextModifyStep: l,
          idcardPhotoSides: f,
        }
      );
    },
    methods: {
      onDirectSubmit: function () {
        this.$stat.click("trade.apply.prereview.direct_submit_click"),
          this.navigateNextStep();
      },
      onGoModify: function () {
        this.$stat.click("trade.apply.prereview.go_modify_click"),
          (this.isModifyMode = !0),
          this.goNextModifyStep();
      },
    },
  });
Array ||
  (
    o.resolveComponent("IdCardPhotoSwiper") +
    o.resolveComponent("StepButtons") +
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
var p = o._export_sfc(a, [
  [
    "render",
    function (e, t, r, n, i, a) {
      return {
        a: e.rootFontSize,
        b: o.t(e.totalCount),
        c: o.f(e.groups, function (t, r, n) {
          return o.e(
            {
              a: o.t(t.title),
              b: o.t(t.tips.length),
              c: o.f(t.tips, function (e, t, r) {
                return { a: o.t(e), b: t };
              }),
              d: "idcard" === t.key && e.idcardPhotoSides.length,
            },
            "idcard" === t.key && e.idcardPhotoSides.length
              ? { e: "ae18426d-2-" + n + ",ae18426d-1" }
              : {},
            { f: t.key }
          );
        }),
        d: o.o(e.onDirectSubmit),
        e: o.o(e.onGoModify),
        f: o.p({
          stat: "prereview",
          "custom-prev-action": !0,
          "prev-button-text": "直接提交",
          "next-button-text": "去修改",
        }),
        g: o.sr("#global-wrap", "ae18426d-0"),
        h: o.p({
          id: "global-wrap",
          filePath: "/apply/pre-review",
          defaultTheme: "",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-ae18426d"],
]);
wx.createPage(p);
