var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../common/vendor.js"),
  o = {
    props: {
      percent: Number,
      angle: { type: Number, default: Math.PI / 4 },
      margin: { type: Number, default: 0.5 },
      padding: { type: Number, default: 6 },
      red: Number,
      green: Number,
      normal: Number,
    },
    data: function () {
      return {
        mpStyle: {
          "--color-red": "#e63535",
          "--color-green": "#2db955",
          "--color-gray": "#7a8499",
        },
      };
    },
    computed: {
      total: function () {
        return this.red + this.green + this.normal;
      },
      line: function () {
        var e = this.total,
          t = this.red / e,
          o = 0.4,
          r = 100 * t + 0.8,
          n = 100 * t - 0.8,
          c = (this.normal / e) * 100,
          a = r + c,
          l = n + c,
          i = this.getThemeColor("--color-red"),
          u = this.getThemeColor("--color-green");
        return [
          [
            "0,0 ".concat(r - o, ",0 ").concat(n - o, ",1.8 0,1.8"),
            i || "#e63535",
          ],
          [
            ""
              .concat(r + o, ",0 ")
              .concat(n + o, ",1.8 ")
              .concat(l - o, ",1.8 ")
              .concat(a - o, ",0"),
            this.getThemeColor("--color-gray") || "#cbcbcb",
          ],
          [
            "".concat(l + o, ",1.8 ").concat(a + o, ",0 100,0 100,1.8"),
            u || "#2db955",
          ],
        ];
      },
    },
    methods: {
      getThemeColor: function (e) {
        return "mp" === t.StockBridge.ENV
          ? this.mpStyle[e]
          : getComputedStyle(document.documentElement).getPropertyValue(e);
      },
      toEleStr: function (t) {
        if (t.length) {
          var o = "";
          t.forEach(function (t) {
            var r = e(t, 2),
              n = r[0],
              c = r[1];
            o = ""
              .concat(o, '<polygon key="')
              .concat(n, '" points="')
              .concat(n, '" fill="')
              .concat(c, '" />');
          });
          var r = ""
            .concat(
              '<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1.8">'
            )
            .concat(o)
            .concat("</svg>");
          return this.svgToBase64(r);
        }
      },
      svgToBase64: function (e) {
        var t = e.replace(/\s+/g, " ").trim();
        return "data:image/svg+xml;charset=utf-8,".concat(
          encodeURIComponent(t).replace(/'/g, "%27").replace(/"/g, "%22")
        );
      },
    },
  },
  r = t._export_sfc(o, [
    [
      "render",
      function (e, o, r, n, c, a) {
        return t.e({ a: a.total }, a.total ? { b: a.toEleStr(a.line) } : {});
      },
    ],
    ["__scopeId", "data-v-59b13fd7"],
  ]);
wx.createComponent(r);
