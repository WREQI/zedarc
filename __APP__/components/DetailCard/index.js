require("../../app.js");
var o = require("../../common/vendor.js"),
  e = {
    props: {
      showBorderTop: { type: Boolean, default: !0 },
      showBorderBottom: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (o, e) {
      return { emit: e.emit };
    },
  },
  r = o._export_sfc(e, [
    [
      "render",
      function (e, r, t, n, s, c) {
        return o.e(
          { a: t.showBorderTop },
          (t.showBorderTop, {}),
          { b: t.showBorderBottom },
          (t.showBorderBottom, {}),
          {
            c: o.o(function (o) {
              return n.emit("click");
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-c461b92e"],
  ]);
wx.createComponent(r);
