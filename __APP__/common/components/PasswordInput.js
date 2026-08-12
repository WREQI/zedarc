require("../../app.js");
var e = require("../vendor.js"),
  t = {
    name: "st-password-input",
    props: {
      value: { type: String, default: "" },
      length: { type: Number, default: 6 },
    },
    computed: {
      points: function () {
        for (var e = [], t = 0; t < this.length; t++)
          e[t] = this.value[t] ? "visible" : "hidden";
        return e;
      },
    },
    watch: {
      value: function (e) {
        e.length === this.length && this.$emit("complete", e);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, r, u, s) {
        return {
          a: e.f(s.points, function (t, n, i) {
            return { a: e.n("visible" === t ? "visibility" : ""), b: n };
          }),
          b: e.o(function (e) {
            return t.$emit("focus");
          }),
        };
      },
    ],
  ]);
wx.createComponent(n);
