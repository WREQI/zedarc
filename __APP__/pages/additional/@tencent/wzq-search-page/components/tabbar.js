var e = require("../../../../../common/vendor.js"),
  t = {
    inject: ["theme"],
    props: {
      tabConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tabKey: { type: String, default: "all" },
      isLabelClass: { type: Boolean, default: !1 },
    },
    methods: {
      switchTab: function (e) {
        this.$emit("switchTab", e, !0);
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, r, o, i) {
        return {
          a: e.f(n.tabConfig, function (t, a, r) {
            return {
              a: e.t(t.name),
              b: t.key,
              c: e.n(n.tabKey === t.key ? "select-tab" : ""),
              d: e.o(
                function (e) {
                  return i.switchTab(t.key);
                },
                4123,
                t.key
              ),
            };
          }),
          b: e.n(
            n.isLabelClass ? "tabbar-label-container" : "tabbar-container"
          ),
          c: e.n(i.theme),
        };
      },
    ],
    ["__scopeId", "data-v-e1e23493"],
  ]);
wx.createComponent(a);
