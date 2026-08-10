require("../../app.js");
var e = require("../../common/vendor.js"),
  t = {
    props: {
      value: { type: Boolean, required: !0 },
      title: { type: String, default: "" },
      content: { type: String, default: "" },
      confirmBtn: { type: String, default: "我知道了" },
    },
    setup: function (e, t) {
      var n = t.emit;
      return {
        onClose: function () {
          n("input", !1);
        },
      };
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, o, i, u) {
        return e.e(
          { a: r.value },
          r.value
            ? e.e({ b: t.tilte }, t.tilte ? { c: e.t(r.title) } : {}, {
                d: e.t(r.content),
                e: e.t(r.confirmBtn),
                f: e.o(function () {
                  return o.onClose && o.onClose.apply(o, arguments);
                }),
              })
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-455e3993"],
  ]);
wx.createComponent(n);
