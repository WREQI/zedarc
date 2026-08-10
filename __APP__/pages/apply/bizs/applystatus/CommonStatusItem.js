require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  o = {
    components: {},
    props: {
      title: { type: String, default: "" },
      warning: { type: Boolean, default: !1 },
      done: { type: Boolean, default: !1 },
      noBottom: { type: Boolean, default: !1 },
    },
  },
  n = e._export_sfc(o, [
    [
      "render",
      function (o, n, t, r, a, d) {
        return e.e(
          {
            a: t.warning ? 1 : "",
            b: t.done ? 1 : "",
            c: e.t(t.title),
            d: t.warning ? 1 : "",
            e: t.done ? 1 : "",
            f: !t.done,
          },
          (t.done, {}),
          { g: t.noBottom ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-043f0867"],
  ]);
wx.createComponent(n);
