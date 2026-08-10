var e = require("../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "BuyIndexNationalTeamTeachSheet",
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
      function (n, o, t, a, l, r) {
        return e.e(
          { a: n.visible },
          n.visible
            ? {
                b: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 3518),
                c: e.o(function () {}, 3519),
                d: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 3520),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a7cabce2"],
  ]);
wx.createComponent(o);
