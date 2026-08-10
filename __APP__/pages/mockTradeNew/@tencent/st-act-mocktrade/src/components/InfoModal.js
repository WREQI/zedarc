var e = require("../../../../../../common/vendor.js"),
  n = {
    name: "InfoModal",
    props: {
      visible: { type: Boolean, default: !1 },
      btnText: { type: String, default: "我知道了" },
      isLite: { type: Boolean, default: !1 },
    },
    setup: function (e, n) {
      var t = n.emit;
      return {
        handleClose: function () {
          t("close");
        },
      };
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, o, l, a, r) {
        return e.e(
          { a: o.visible },
          o.visible
            ? {
                b: e.o(function () {
                  return l.handleClose && l.handleClose.apply(l, arguments);
                }, 3266),
                c: e.t(o.btnText),
                d: o.isLite ? 1 : "",
                e: e.o(function () {
                  return l.handleClose && l.handleClose.apply(l, arguments);
                }, 3267),
                f: e.o(function () {
                  return l.handleClose && l.handleClose.apply(l, arguments);
                }, 3268),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-5666572e"],
  ]);
wx.createComponent(t);
