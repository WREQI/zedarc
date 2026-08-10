var e = require("../../../../../common/vendor.js"),
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
      function (n, r, o, t, c, p) {
        return {
          a: n.top + "px",
          b: e.o(function () {
            return n.onClickShare && n.onClickShare.apply(n, arguments);
          }, 3780),
        };
      },
    ],
    ["__scopeId", "data-v-bcf3f8b6"],
  ]);
wx.createComponent(r);
