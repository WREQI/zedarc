require("../../app.js");
var e = require("../../common/vendor.js"),
  t = {
    props: {
      hideinfo: { type: Boolean, default: !1 },
      subtitle: { type: Boolean, default: !0 },
      align: { type: Boolean, default: !1 },
      high: { type: Boolean, default: !1 },
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, n, o, l, a) {
        return e.e(
          { a: n.hideinfo },
          n.hideinfo
            ? {}
            : e.e(
                { b: n.subtitle },
                (n.subtitle, {}),
                { c: n.align && !n.subtitle },
                (n.align && n.subtitle, {}),
                { d: e.n(n.high ? "cell--high" : "") }
              )
        );
      },
    ],
  ]);
wx.createComponent(i);
