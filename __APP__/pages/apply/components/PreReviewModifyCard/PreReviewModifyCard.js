require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  r = require("../../../../model/apply/usePreReview.js"),
  t = e.defineComponent({
    name: "PreReviewModifyCard",
    components: {
      IdCardPhotoSwiper: function () {
        return "../IdCardPhotoSwiper/IdCardPhotoSwiper.js";
      },
    },
    props: { stepKey: { type: String, required: !0 } },
    setup: function (t) {
      var n = r.usePreReview(),
        o = n.groups,
        i = n.idcardPhotoSides,
        d = n.isModifyMode,
        u = e.ref([]),
        a = e.computed(function () {
          var e = o.value.find(function (e) {
            return e.key === t.stepKey;
          });
          return (null == e ? void 0 : e.tips) || [];
        });
      return (
        e.watch(
          a,
          function (e) {
            e.length && (u.value = e);
          },
          { immediate: !0 }
        ),
        {
          tips: e.computed(function () {
            return d.value && u.value.length ? u.value : a.value;
          }),
          isIdCard: e.computed(function () {
            return "idcard" === t.stepKey;
          }),
          idcardPhotoSides: i,
        }
      );
    },
  });
Array || e.resolveComponent("IdCardPhotoSwiper")();
var n = e._export_sfc(t, [
  [
    "render",
    function (r, t, n, o, i, d) {
      return e.e(
        { a: r.tips.length },
        r.tips.length
          ? e.e(
              {
                b: e.t(r.tips.length),
                c: e.f(r.tips, function (r, t, n) {
                  return { a: e.t(r), b: t };
                }),
                d: r.isIdCard && r.idcardPhotoSides.length,
              },
              (r.isIdCard && r.idcardPhotoSides.length, {})
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6d218fcb"],
]);
wx.createComponent(n);
