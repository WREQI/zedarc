var e = require("../../../common/vendor.js"),
  n = e.defineComponent({
    props: { top: { type: Number, default: 0 } },
    setup: function (e, n) {
      var r = n.emit;
      return {
        onClickShare: function () {
          r("onClickShare");
        },
      };
    },
  }),
  r = e._export_sfc(n, [
    [
      "render",
      function (n, r, o, t, a, c) {
        return {
          a: n.top + "px",
          b: e.o(function () {
            return n.onClickShare && n.onClickShare.apply(n, arguments);
          }, 2020),
        };
      },
    ],
    ["__scopeId", "data-v-18e8eba9"],
  ]);
wx.createComponent(r);
