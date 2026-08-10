require("../../app.js");
var t = require("../../common/vendor.js"),
  e = {
    props: {
      customCls: { type: String, default: "" },
      text: { type: String, default: "" },
      showJumpBtn: { type: Boolean, default: !1 },
      layout: { type: String, default: "vertical" },
      heightFill: { type: Boolean, default: !0 },
      bottomBorderRadius: { type: Boolean, default: !1 },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, r, a, l, i) {
        return {
          a: t.t(r.text || "暂无内容"),
          b: t.n("vertical" === r.layout ? "vertical" : "horizontal"),
          c: t.n(r.bottomBorderRadius ? "bottom-border-radius" : ""),
          d: t.n(r.customCls),
          e: r.heightFill ? "100%" : "initial",
        };
      },
    ],
    ["__scopeId", "data-v-ff70ae49"],
  ]);
wx.createComponent(o);
