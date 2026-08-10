var r = require("../../common/vendor.js"),
  e = {
    props: { from: { type: String, default: "" } },
    data: function () {
      return { componentEle: ".plugin-password" };
    },
  },
  n = r._export_sfc(e, [
    [
      "render",
      function (r, e, n, o, t, p) {
        return { a: n.from };
      },
    ],
  ]);
wx.createComponent(n);
