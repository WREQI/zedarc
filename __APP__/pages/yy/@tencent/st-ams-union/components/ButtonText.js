require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = {
    name: "ButtonText",
    props: { text: { type: String, default: "" } },
    computed: {
      textLines: function () {
        return this.parseTextLines(this.text);
      },
      isMultiline: function () {
        return this.textLines.length > 1;
      },
    },
    methods: {
      parseTextLines: function (t) {
        return t && "string" == typeof t
          ? t.includes(" ")
            ? t.split(" ").filter(function (t) {
                return "" !== t.trim();
              })
            : [t]
          : [""];
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, i, r, s, u) {
        return t.e(
          { a: u.isMultiline },
          u.isMultiline
            ? {
                b: t.f(u.textLines, function (e, n, i) {
                  return { a: t.t(e), b: n };
                }),
              }
            : { c: t.t(i.text) }
        );
      },
    ],
    ["__scopeId", "data-v-958567f5"],
  ]);
wx.createComponent(n);
