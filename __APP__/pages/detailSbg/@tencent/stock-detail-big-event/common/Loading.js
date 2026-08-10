var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      text: { type: String, default: "" },
      showJumpBtn: { type: Boolean, default: !1 },
      layout: { type: String, default: "vertical" },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, o, r, n, l) {
        return {
          a: t.t(o.text || "加载中..."),
          b: t.n(
            "vertical" === o.layout ? "layout-column vertical" : "horizontal"
          ),
        };
      },
    ],
    ["__scopeId", "data-v-43aa4bdf"],
  ]);
wx.createComponent(a);
