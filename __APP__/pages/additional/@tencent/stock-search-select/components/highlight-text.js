var e = require("../Index.js"),
  t = require("../../../../../common/vendor.js"),
  r = {
    inject: ["theme"],
    props: {
      keyword: { type: [Array, String], default: "" },
      text: { type: String, default: "" },
    },
    computed: {
      highlight: function () {
        var t = this.keyword,
          r = this.text;
        return t && 0 !== t.length ? e.getHighlightText(t, r) : [r];
      },
    },
  },
  n = t._export_sfc(r, [
    [
      "render",
      function (e, r, n, i, h, o) {
        return {
          a: t.f(o.highlight, function (e, r, n) {
            return { a: t.t(e), b: r, c: t.n(r % 2 && "highlight") };
          }),
          b: t.n(o.theme),
        };
      },
    ],
    ["__scopeId", "data-v-44a67eea"],
  ]);
wx.createComponent(n);
