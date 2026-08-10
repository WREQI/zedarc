var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    props: {
      visible: { type: Boolean, default: !1 },
      title: { type: String, default: "" },
      content: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tips: { type: String, default: "" },
    },
    data: function () {
      return {};
    },
    methods: {
      closePop: function () {
        this.$emit("closePop");
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, i, c, r) {
        return t.e(
          {
            a: t.t(o.title),
            b: t.o(function () {
              return r.closePop && r.closePop.apply(r, arguments);
            }, 2160),
            c: t.f(o.content, function (e, n, i) {
              return t.e(
                {
                  a: t.t(e.title),
                  b: t.t(e.context),
                  c: n !== o.content.length - 1,
                },
                (o.content.length, {}),
                { d: n }
              );
            }),
            d: o.tips,
          },
          o.tips ? { e: t.t(o.tips) } : {},
          {
            f: t.n(o.tips ? "" : "pop-safe-area"),
            g: t.n(o.visible ? "up" : "down"),
            h: t.o(function () {}, 2161),
            i: t.n(o.visible ? "in" : "out"),
            j: t.o(function () {}, 2162),
            k: t.o(function () {
              return r.closePop && r.closePop.apply(r, arguments);
            }, 2163),
          }
        );
      },
    ],
    ["__scopeId", "data-v-e32100d1"],
  ]);
wx.createComponent(n);
