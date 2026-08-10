var e = require("../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "BuyIndexPePercentileTeachSheet",
    props: { visible: { type: Boolean, default: !1 } },
    emits: { close: null },
    setup: function (e, n) {
      var o = n.emit;
      return {
        handleClose: function () {
          o("close");
        },
      };
    },
  }),
  o = e._export_sfc(n, [
    [
      "render",
      function (n, o, t, l, r, a) {
        return e.e(
          { a: n.visible },
          n.visible
            ? {
                b: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 3521),
                c: e.o(function () {}, 3522),
                d: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 3523),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a282a6ef"],
  ]);
wx.createComponent(o);
