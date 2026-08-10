var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      title: { type: String, default: "" },
      label: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, a, o, c) {
        return {
          a: t.t(n.title),
          b: t.f(n.label, function (e, r, n) {
            return { a: t.t(e), b: r };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-c847da2c"],
  ]);
wx.createComponent(r);
