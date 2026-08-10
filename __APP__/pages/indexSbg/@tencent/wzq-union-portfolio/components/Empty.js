var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      text: { type: String, default: "" },
      showJumpBtn: { type: Boolean, default: !1 },
      layout: { type: String, default: "vertical" },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, o, n, a, p) {
        return { a: t.t(o.text || "暂无内容") };
      },
    ],
    ["__scopeId", "data-v-e86f85b1"],
  ]);
wx.createComponent(r);
