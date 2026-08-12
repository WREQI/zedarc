var e = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var r = require("../../vendor.js"),
  t = {
    name: "MpLoading",
    props: {
      size: { type: String, default: "30px" },
      type: { type: String, default: "spinner" },
      color: { type: String, default: "var(--text-color-4)" },
    },
    computed: {
      style: function () {
        var r,
          t = [];
        if (this.size)
          if (-1 !== (null == (r = this.size) ? void 0 : r.indexOf("rpx"))) {
            var i = this.size.split("rpx") || [],
              n = e(i, 1)[0];
            n && !isNaN(n) && t.push("font-size: ".concat(n / 2, "px;"));
          } else t.push("font-size: ".concat(this.size, ";"));
        return (
          this.color && t.push("color: ".concat(this.color, ";")), t.join("")
        );
      },
    },
  },
  i = r._export_sfc(t, [
    [
      "render",
      function (e, t, i, n, s, o) {
        return r.e(
          { a: "spinner" === i.type },
          "spinner" === i.type
            ? {
                b: r.f(12, function (e, r, t) {
                  return { a: r };
                }),
              }
            : {},
          { c: "circular" === i.type },
          (i.type, {}),
          { d: r.s(o.style) }
        );
      },
    ],
  ]);
wx.createComponent(i);
