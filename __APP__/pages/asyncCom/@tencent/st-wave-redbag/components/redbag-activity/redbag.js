var n = require("../../../../../../common/vendor.js")._export_sfc(
  {
    props: ["animation"],
    data: function () {
      return { isLite: !1, isMina: !1 };
    },
  },
  [
    [
      "render",
      function (n, i, e, t, a, r) {
        return {
          a: e.animation ? 1 : "",
          b: a.isLite ? 1 : "",
          c: a.isMina ? 1 : "",
        };
      },
    ],
    ["__scopeId", "data-v-4a95cd23"],
  ]
);
wx.createComponent(n);
