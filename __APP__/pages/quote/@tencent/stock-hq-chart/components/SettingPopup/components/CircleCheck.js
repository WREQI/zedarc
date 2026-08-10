var e = require("../../../../../../../common/vendor.js"),
  c = { props: { checked: { type: Boolean, default: !1 } } },
  r = e._export_sfc(c, [
    [
      "render",
      function (c, r, o, n, t, d) {
        return { a: o.checked, b: e.n(o.checked && "check") };
      },
    ],
    ["__scopeId", "data-v-c539f660"],
  ]);
wx.createComponent(r);
