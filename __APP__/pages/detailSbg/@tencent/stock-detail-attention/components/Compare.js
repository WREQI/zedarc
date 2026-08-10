var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../common/vendor.js"),
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
    computed: {
      total: function () {
        return this.red + this.green + this.normal;
      },
      line: function () {
        var e = this.total,
          o = this.red / e,
          t = 0.4,
          n = 100 * o + 0.8,
          c = 100 * o - 0.8,
          a = (this.normal / e) * 100,
          l = n + a,
          u = c + a,
          d = {};
        if ("mp" !== r.StockBridge.ENV) {
          var i = getComputedStyle(document.documentElement);
          (d.colorRed = i.getPropertyValue("--color-red")),
            (d.colorGreen = i.getPropertyValue("--color-green")),
            (d.colorGray = i.getPropertyValue("--color-gray"));
        }
        return [
          [
            "0,0 ".concat(n - t, ",0 ").concat(c - t, ",1.8 0,1.8"),
            d.colorRed || "#e63535",
          ],
          [
            ""
              .concat(n + t, ",0 ")
              .concat(c + t, ",1.8 ")
              .concat(u - t, ",1.8 ")
              .concat(l - t, ",0"),
            d.colorGray || "#cbcbcb",
          ],
          [
            "".concat(u + t, ",1.8 ").concat(l + t, ",0 100,0 100,1.8"),
            d.colorGreen || "#1caa3c",
          ],
        ];
      },
    },
  };
Array || (r.resolveComponent("polygon") + r.resolveComponent("svg"))();
var t = r._export_sfc(o, [
  [
    "render",
    function (o, t, n, c, a, l) {
      return r.e(
        { a: l.total },
        l.total
          ? {
              b: r.f(l.line, function (o, t, n) {
                var c = e(o, 2),
                  a = c[0],
                  l = c[1];
                return {
                  a: a,
                  b: "e6dd7703-1-" + n + ",e6dd7703-0",
                  c: r.p({ points: a, fill: l }),
                };
              }),
              c: r.p({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 1.8",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e6dd7703"],
]);
wx.createComponent(t);
