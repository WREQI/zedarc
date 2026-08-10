var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "BuyIndexIndexFilterTeachSheet",
    props: {
      visible: { type: Boolean, default: !1 },
      title: { type: String, default: "指数过滤" },
      infoText: {
        type: String,
        default:
          '市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选"指数过滤"后，榜单内跟踪相同指数的ETF仅展示一只。',
      },
    },
    emits: ["close"],
    setup: function (e, t) {
      var n = t.emit;
      return {
        handleClose: function () {
          n("close");
        },
      };
    },
  }),
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, i, l, r) {
        return e.e(
          { a: t.visible },
          t.visible
            ? {
                b: e.t(t.title),
                c: e.o(function () {
                  return t.handleClose && t.handleClose.apply(t, arguments);
                }, 3524),
                d: e.t(t.infoText),
                e: e.o(function () {}, 3525),
                f: e.o(function () {
                  return t.handleClose && t.handleClose.apply(t, arguments);
                }, 3526),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-5cf186b6"],
  ]);
wx.createComponent(n);
