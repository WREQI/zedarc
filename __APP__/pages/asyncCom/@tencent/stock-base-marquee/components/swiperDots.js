var e = require("../../../../../common/vendor.js"),
  r = {
    props: {
      list: { type: Array, require: !0 },
      dotIndex: { type: Number, default: 0 },
    },
    data: function () {
      return {};
    },
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (r, t, n, o, a, u) {
        return {
          a: e.f(n.list, function (r, t, o) {
            return { a: t, b: e.n(n.dotIndex === t ? "active" : "") };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-a64b43ff"],
  ]);
wx.createComponent(t);
