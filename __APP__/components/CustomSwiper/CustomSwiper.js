require("../../app.js");
var e = require("../../common/vendor.js"),
  t = e.defineComponent({
    name: "CustomSwiper",
    props: {
      items: { type: Array, required: !0 },
      current: { type: Number, default: 0 },
      duration: { type: Number, default: 300 },
    },
    setup: function (t) {
      return {
        swiperStyle: e.computed(function () {
          return {
            transform: "translateX(".concat(100 * -t.current, "%)"),
            transition: "transform ".concat(t.duration, "ms ease-out"),
            display: "flex",
            width: "100%",
          };
        }),
        itemStyle: {
          flex: "0 0 100%",
          width: "100%",
          minHeight: "0",
          overflow: "hidden",
        },
      };
    },
  }),
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, i, o, u) {
        return {
          a: e.f(t.items, function (t, r, n) {
            return { a: "d-" + n, b: e.r("d", { item: t, index: r }, n), c: r };
          }),
          b: e.s(t.itemStyle),
          c: e.s(t.swiperStyle),
        };
      },
    ],
    ["__scopeId", "data-v-93a2ff84"],
  ]);
wx.createComponent(r);
