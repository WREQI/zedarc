require("../../../app.js");
var e = require("../../vendor.js"),
  r = {
    name: "StCellGroup",
    props: {
      border: { type: Boolean, default: !0 },
      borderTop: { type: Boolean, default: !0 },
      borderBottom: { type: Boolean, default: !0 },
    },
  },
  o = e._export_sfc(r, [
    [
      "render",
      function (r, o, t, n, d, p) {
        return {
          a: e.n(t.borderTop ? "border--top" : ""),
          b: e.n(t.borderBottom ? "border--bottom" : ""),
          c: e.n(t.border ? "" : "st-cell-group--noborder"),
        };
      },
    ],
  ]);
wx.createComponent(o);
