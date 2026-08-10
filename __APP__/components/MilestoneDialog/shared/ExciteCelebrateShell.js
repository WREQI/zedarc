require("../../../app.js");
var e = require("../../../common/vendor.js"),
  o = require("../constants.js"),
  t = e.defineComponent({
    name: "ExciteCelebrateShell",
    props: {
      isClosing: { type: Boolean, default: !1 },
      backgroundClosable: { type: Boolean, default: !1 },
    },
    emits: ["mask-click"],
    setup: function (e, t) {
      var s = t.emit;
      return {
        IMAGES: o.IMAGES,
        onRootClick: function () {
          e.backgroundClosable && s("mask-click");
        },
      };
    },
  }),
  s = e._export_sfc(t, [
    [
      "render",
      function (o, t, s, n, l, i) {
        return e.e(
          { a: o.IMAGES.confetti, b: o.$slots.title },
          (o.$slots.title, {}),
          { c: o.$slots.subtitle },
          (o.$slots.subtitle, {}),
          { d: o.$slots.footer },
          (o.$slots.footer, {}),
          {
            e: o.isClosing ? 1 : "",
            f: e.o(function () {
              return o.onRootClick && o.onRootClick.apply(o, arguments);
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-37e9b8da"],
  ]);
wx.createComponent(s);
