require("../../app.js");
var e = require("../../common/vendor.js"),
  t = {
    props: {
      hidefund: { type: Boolean, default: !1 },
      label: { type: String, default: "" },
      value: { type: String, default: "" },
      last: { type: Boolean, default: !1 },
    },
    setup: function (e) {
      return {};
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, r, u, d) {
        return e.e(
          { a: e.t(n.label), b: !n.hidefund },
          n.hidefund ? {} : { c: e.t(n.value) },
          { d: e.n(n.last ? "last ^last" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-04135daa"],
  ]);
wx.createComponent(a);
