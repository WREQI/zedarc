var t = require("../utils/tools.js"),
  e = require("../../../../../common/vendor.js"),
  r = {
    inject: ["theme"],
    props: {
      keyword: { type: [Array, String], default: "" },
      text: { type: String, default: "" },
    },
    computed: {
      highlight: function () {
        var e = this.keyword,
          r = this.text;
        return 0 === e.length ? [r] : t.getHighlightText(e, r);
      },
    },
  },
  i = e._export_sfc(r, [
    [
      "render",
      function (t, r, i, n, h, o) {
        return {
          a: e.f(o.highlight, function (t, r, i) {
            return { a: e.t(t), b: r, c: e.n(r % 2 && "highlight") };
          }),
          b: e.n(o.theme),
        };
      },
    ],
    ["__scopeId", "data-v-6b13f557"],
  ]);
wx.createComponent(i);
