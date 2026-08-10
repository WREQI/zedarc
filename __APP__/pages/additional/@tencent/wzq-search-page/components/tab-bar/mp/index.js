var n = require("../../../../../../../common/vendor.js"),
  e = n.defineComponent({
    components: {},
    props: {
      rankConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      rankIndex: { type: Number, default: 0 },
    },
    setup: function (n, e) {
      var t = e.emit;
      return {
        switchTab: function (n) {
          t("switchTab", n);
        },
      };
    },
  }),
  t = n._export_sfc(e, [
    [
      "render",
      function (e, t, r, o, a, c) {
        return {
          a: n.f(e.rankConfig, function (t, r, o) {
            return {
              a: n.t(t.name),
              b: "tab-".concat(r),
              c: r,
              d: n.n(e.rankIndex === r ? "select-tab" : ""),
              e: n.o(
                function (n) {
                  return e.switchTab(r);
                },
                3019,
                r
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-dc5cf251"],
  ]);
wx.createComponent(t);
