var e = require("../../../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "st-switch",
    props: {
      value: Boolean,
      loading: Boolean,
      disabled: Boolean,
      activeColor: { type: String, default: "" },
      inactiveColor: { type: String, default: "#98a0b3" },
      activeValue: { type: Boolean, default: !0 },
      inactiveValue: { type: Boolean, default: !1 },
      size: { type: String, default: "29px" },
      loadingType: { type: String, default: "spinner" },
    },
    emits: ["input", "change"],
    setup: function (t, n) {
      var a = n.emit,
        i = e.StockBridge.ENV === e.EnvTypeEnum.MP,
        o = e.computed(function () {
          return t.value === t.activeValue;
        }),
        l = e.computed(function () {
          return {
            fontSize: t.size,
            backgroundColor: o.value ? t.activeColor : t.inactiveColor,
          };
        });
      return {
        checked: o,
        switchStyle: l,
        handleClick: function () {
          if (!t.disabled) {
            var n = o.value ? t.inactiveValue : t.activeValue;
            a("input", n),
              a("change", n),
              i && e.wx$1.vibrateShort({ type: "light" });
          }
        },
      };
    },
  }),
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, a, i, o, l) {
        return {
          a: t.checked ? 1 : "",
          b: t.disabled ? 1 : "",
          c: e.s(t.switchStyle),
          d: e.o(function () {
            return t.handleClick && t.handleClick.apply(t, arguments);
          }, 6098),
        };
      },
    ],
    ["__scopeId", "data-v-7e3ccd89"],
  ]);
wx.createComponent(n);
