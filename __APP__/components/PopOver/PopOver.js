require("../../app.js");
var t = require("../../common/vendor.js"),
  e = {
    props: {
      direction: { type: String, default: "top" },
      text: { type: String, default: "" },
    },
    data: function () {
      return {};
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, o, c, i) {
        return t.e(
          { a: n.text },
          n.text
            ? {
                b: t.t(n.text),
                c: t.n(n.direction),
                d: t.n("^".concat(n.direction)),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9695556f"],
  ]);
wx.createComponent(r);
