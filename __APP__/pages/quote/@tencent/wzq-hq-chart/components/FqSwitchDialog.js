var o = require("../../../../../common/vendor.js"),
  e = o.defineComponent({
    name: "FqSwitchDialog",
    props: { visible: { type: Boolean, default: !1 } },
    emits: ["close"],
    setup: function (o, e) {
      var n = e.emit;
      return {
        noop: function () {},
        handleClose: function () {
          n("close");
        },
      };
    },
  }),
  n = o._export_sfc(e, [
    [
      "render",
      function (e, n, t, p, r, l) {
        return o.e(
          { a: e.visible },
          e.visible
            ? {
                b: o.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 6017),
                c: o.o(function () {
                  return e.noop && e.noop.apply(e, arguments);
                }, 6018),
                d: o.o(function () {
                  return e.noop && e.noop.apply(e, arguments);
                }, 6019),
                e: o.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 6020),
                f: o.o(function () {
                  return e.noop && e.noop.apply(e, arguments);
                }, 6021),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-8b23cee7"],
  ]);
wx.createComponent(n);
