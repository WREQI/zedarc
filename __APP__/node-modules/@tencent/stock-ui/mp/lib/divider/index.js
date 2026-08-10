require("../../../../../../app.js");
var e = require("../../../../../../common/vendor.js"),
  r = {
    name: "StDivider",
    props: { type: { type: String, default: "horizontal" } },
    computed: {
      classWrapper: function () {
        return [
          "st-divider",
          "st-divider-".concat(this.type),
          "st-divider-with-text",
        ];
      },
    },
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (r, t, i, n, p, s) {
        return { a: e.n(s.classWrapper) };
      },
    ],
  ]);
wx.createComponent(t);
