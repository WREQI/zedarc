require("../../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../../common/vendor.js"),
  t = require("../widget/WidgetOverview.js"),
  r = e.defineComponent({
    name: "Tag",
    props: {
      text: { type: String, default: "" },
      type: {
        type: String,
        default: t.TagType.DEFAULT,
        validator: function (e) {
          return Object.values(t.TagType).includes(e);
        },
      },
    },
    setup: function (r) {
      return {
        imageUrl: e.computed(function () {
          var e;
          return (
            (null == (e = t.TAG_IMAGE_CONFIG[r.type]) ? void 0 : e.url) || ""
          );
        }),
      };
    },
  }),
  n = e._export_sfc(r, [
    [
      "render",
      function (t, r, n, a, i, u) {
        return e.e(
          { a: t.imageUrl },
          t.imageUrl
            ? { b: e.n("tag__img--".concat(t.type)), c: t.imageUrl }
            : { d: e.t(t.text) },
          { e: e.n("tag--".concat(t.type)) }
        );
      },
    ],
    ["__scopeId", "data-v-936fe122"],
  ]);
wx.createComponent(n);
