var e = require("../../../../../../common/vendor.js"),
  o = e.defineComponent({
    name: "FqSwitchDialog",
    props: { visible: { type: Boolean, default: !1 } },
    emits: ["close"],
    setup: function (o, n) {
      var t = n.emit;
      return {
        noop: function () {},
        handleClose: function () {
          t("close");
        },
        handleMoreTeach: function () {
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN202303141756098061ba32",
              zxtype: 1,
              articleStyle: "fullTeach",
            },
          }),
            t("close");
        },
      };
    },
  }),
  n = e._export_sfc(o, [
    [
      "render",
      function (o, n, t, r, a, l) {
        return e.e(
          { a: o.visible },
          o.visible
            ? {
                b: e.o(function () {
                  return (
                    o.handleMoreTeach && o.handleMoreTeach.apply(o, arguments)
                  );
                }, 3716),
                c: e.o(function () {
                  return o.handleClose && o.handleClose.apply(o, arguments);
                }, 3717),
                d: e.o(function () {
                  return o.noop && o.noop.apply(o, arguments);
                }, 3718),
                e: e.o(function () {
                  return o.noop && o.noop.apply(o, arguments);
                }, 3719),
                f: e.o(function () {
                  return o.handleClose && o.handleClose.apply(o, arguments);
                }, 3720),
                g: e.o(function () {
                  return o.noop && o.noop.apply(o, arguments);
                }, 3721),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-90ee0d71"],
  ]);
wx.createComponent(n);
