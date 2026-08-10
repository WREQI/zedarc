var e = require("../../../common/vendor.js"),
  r = {
    name: "TxvVideoPlayer",
    props: {
      vid: { type: String, default: "" },
      usePoster: { type: Boolean, default: !1 },
    },
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (r, t, o, d, n, i) {
        return e.e(
          { a: o.vid },
          o.vid ? { b: o.vid, c: o.vid, d: o.usePoster } : {}
        );
      },
    ],
  ]);
wx.createComponent(t);
