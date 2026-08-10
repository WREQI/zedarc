var e = require("../../../../../../common/vendor.js"),
  r = {
    props: {
      showType: { type: String, default: "" },
      unreadNum: { type: Number, default: 0 },
    },
  },
  u = e._export_sfc(r, [
    [
      "render",
      function (r, u, d, n, o, t) {
        return e.e(
          { a: "red_dot" === d.showType && d.unreadNum > 0 },
          "red_dot" === d.showType && d.unreadNum > 0
            ? {}
            : "num" === d.showType && d.unreadNum > 0
            ? { c: e.t(d.unreadNum > 99 ? "99+" : d.unreadNum) }
            : {},
          { b: "num" === d.showType && d.unreadNum > 0 }
        );
      },
    ],
    ["__scopeId", "data-v-8e2de1d7"],
  ]);
wx.createComponent(u);
