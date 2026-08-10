var e = require("../../../common/vendor.js"),
  t = {
    name: "CenterBubble",
    props: {
      styles: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, s, c) {
        return {
          a: e.o(function (e) {
            return t.$emit("close");
          }, 2048),
          b: e.s(n.styles),
        };
      },
    ],
    ["__scopeId", "data-v-158b9999"],
  ]);
wx.createComponent(r);
