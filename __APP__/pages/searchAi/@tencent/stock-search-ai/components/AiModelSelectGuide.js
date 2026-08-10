var e = require("../../../../../common/vendor.js"),
  t = {
    name: "AiModelSelectGuide",
    props: {
      theme: { type: String, default: "white" },
      scene: { type: String, default: "fullscreen" },
    },
    data: function () {
      return { isWZQ: !1 };
    },
    computed: {
      contentStyle: function () {
        return "halfscreen" === this.scene ? "margin-top: 45px;" : "";
      },
      withoutNavBar: function () {
        return this.isWZQ || !1;
      },
    },
    methods: {
      closeGuide: function () {
        this.$emit("closeGuide");
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, r, i, c) {
        return {
          a: e.s(c.contentStyle),
          b: e.n(c.withoutNavBar ? "without-navbar" : ""),
          c: e.o(function () {
            return c.closeGuide && c.closeGuide.apply(c, arguments);
          }, 4830),
        };
      },
    ],
    ["__scopeId", "data-v-b13504bc"],
  ]);
wx.createComponent(n);
