var e = require("../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "SessionHistoryLoading",
    props: { theme: { type: String, default: "white" } },
    computed: {
      isDark: function () {
        return "black" === this.theme || "dark" === this.theme;
      },
    },
  }),
  r = e._export_sfc(t, [
    [
      "render",
      function (e, t, r, n, o, i) {
        return { a: e.isDark ? 1 : "" };
      },
    ],
    ["__scopeId", "data-v-b6cccf3b"],
  ]);
wx.createComponent(r);
