var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "HotspotVisual",
    props: {
      badge: { type: String, default: "" },
      headline: { type: String, default: "" },
      description: { type: String, default: "" },
      tagImageUrl: { type: String, default: "" },
      visualBgUrl: {
        type: String,
        default:
          "https://st.gtimg.com/pcm/mq4q0wwb_0dcd1b4076259b64b9554a1ace904f2c.svg",
      },
    },
  }),
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, r, g, i, n) {
        return e.e(
          { a: t.visualBgUrl },
          t.visualBgUrl ? { b: t.visualBgUrl } : {},
          { c: t.tagImageUrl },
          t.tagImageUrl ? { d: t.tagImageUrl } : {},
          { e: e.t(t.badge), f: e.t(t.headline), g: e.t(t.description) }
        );
      },
    ],
    ["__scopeId", "data-v-e2d7908f"],
  ]);
wx.createComponent(a);
