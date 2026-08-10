var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      marketConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      marketIndex: { type: Number, default: 0 },
      isLite: { type: Boolean, default: !0 },
    },
    data: function () {
      return {};
    },
    methods: {
      switchTab: e.debounce(function (e) {
        this.value !== e && this.$emit("switchTab", e);
      }, 200),
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, a, r, c, o) {
        return {
          a: e.f(a.marketConfig, function (t, n, r) {
            return {
              a: e.t(t.name),
              b: "tab-".concat(n),
              c: n,
              d: e.n(
                a.isLite
                  ? a.marketIndex === n
                    ? "select-tab-mp"
                    : ""
                  : a.marketIndex === n
                  ? "select-tab"
                  : ""
              ),
              e: e.o(
                function (e) {
                  return o.switchTab(n);
                },
                3917,
                n
              ),
            };
          }),
          b: t.disLeft,
          c: "tab-".concat(a.marketIndex),
        };
      },
    ],
    ["__scopeId", "data-v-3d48eec0"],
  ]);
wx.createComponent(n);
