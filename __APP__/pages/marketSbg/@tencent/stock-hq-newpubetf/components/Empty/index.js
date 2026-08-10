var t = require("../../../../../../common/vendor.js"),
  e = {
    props: {
      text: { type: String, default: "" },
      showJumpBtn: { type: Boolean, default: !1 },
      layout: { type: String, default: "vertical" },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, r, a, n, l) {
        return {
          a: t.t(r.text || "暂无内容"),
          b: t.n(
            "vertical" === r.layout ? "layout-column vertical" : "horizontal"
          ),
        };
      },
    ],
    ["__scopeId", "data-v-7b97a8f5"],
  ]);
wx.createComponent(o);
