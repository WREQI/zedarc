var e = require("../../../../../common/vendor.js"),
  n = {
    setup: function () {
      return {
        isZxg: "undefined" != typeof shy && "function" == typeof shy.request,
      };
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, r, o, s, c) {
        return { a: e.n(o.isZxg ? "zxg" : "wzq") };
      },
    ],
    ["__scopeId", "data-v-99c76cfe"],
  ]);
wx.createComponent(t);
