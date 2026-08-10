require("../../app.js");
var t = require("../../common/vendor.js"),
  e = {
    props: {
      value: { type: [String, Number], default: "" },
      breakpoint: { type: Number, default: 1e8 },
      fontSize: { type: String, default: "28" },
    },
    data: function () {
      return { classList: [] };
    },
    watch: {
      value: {
        handler: function (t) {
          var e = +t;
          if (!isNaN(e)) {
            var a = this.breakpoint;
            (a = a ? Number(a) : 1e8),
              Math.abs(e) > a
                ? (this.classList = [
                    "adapt-small-size",
                    "fs-".concat(this.fontSize),
                  ])
                : (this.classList = []);
          }
        },
        immediate: !0,
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, s, r, i, n) {
        return { a: t.n(i.classList) };
      },
    ],
  ]);
wx.createComponent(a);
