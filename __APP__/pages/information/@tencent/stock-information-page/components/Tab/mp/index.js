var t = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      tabConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curIndex: { type: Number, default: 0 },
    },
    data: function () {
      return { currTabBarIndex: 0 };
    },
    methods: {
      switchTab: t.debounce(function (t) {
        this.value !== t && this.$emit("select", t);
      }, 200),
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, r, a, c, u) {
        return {
          a: t.f(r.tabConfig, function (e, n, a) {
            return {
              a: t.t(e.name),
              b: "tab-".concat(n),
              c: n,
              d: t.n(r.curIndex === n ? "select-tab" : ""),
              e: t.o(
                function (t) {
                  return u.switchTab(n);
                },
                2618,
                n
              ),
            };
          }),
          b: "tab-".concat(c.currTabBarIndex),
        };
      },
    ],
    ["__scopeId", "data-v-9a8375d8"],
  ]);
wx.createComponent(n);
