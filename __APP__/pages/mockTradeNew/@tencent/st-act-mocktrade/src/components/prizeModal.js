var e = require("../../../../../../common/vendor.js"),
  n = {
    setup: function (n, o) {
      var r = o.emit;
      return {
        showPrizeModal: e.ref(!0),
        openbag: function () {
          r("openPrizeModal");
        },
        cancel: function () {
          r("close");
        },
        clickMask: function (e) {
          return e.preventDefault(), e.stopPropagation(), !1;
        },
      };
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (n, o, r, c, a, t) {
        return e.e(
          { a: c.showPrizeModal || !0 },
          (c.showPrizeModal,
          {
            b: e.o(function () {
              return c.openbag && c.openbag.apply(c, arguments);
            }, 4545),
            c: e.o(function () {
              return c.cancel && c.cancel.apply(c, arguments);
            }, 4546),
          }),
          {
            d: e.o(function () {
              return c.clickMask && c.clickMask.apply(c, arguments);
            }, 4547),
          }
        );
      },
    ],
    ["__scopeId", "data-v-9ca58162"],
  ]);
wx.createComponent(o);
