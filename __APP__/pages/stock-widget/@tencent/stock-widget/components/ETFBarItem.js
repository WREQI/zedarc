var e = require("../../../../../common/vendor.js"),
  t = e._export_sfc(
    {
      name: "ETFBarItem",
      inject: ["helper"],
      options: { styleIsolation: "shared" },
      props: [
        "item",
        "stockInitailAdded",
        "redUp",
        "type",
        "pageType",
        "newsId",
      ],
      components: {},
      methods: {
        etfZdf: function (e) {
          return e > 0 ? "+".concat(e, "%") : "".concat(e, "%");
        },
        etfColor: function (e) {
          return e > 0
            ? this.redUp
              ? "red"
              : "green"
            : e < 0
            ? this.redUp
              ? "green"
              : "red"
            : "grey";
        },
        spliteEtfCode: function (e) {
          return { market: e.slice(0, 2), scode: e.slice(2) };
        },
        toggleAddFav: function (e) {
          this.$emit("toggleAddFav", e);
        },
      },
    },
    [
      [
        "render",
        function (t, n, r, o, d, i) {
          return {
            a: e.t(r.item.name),
            b: e.t(i.etfZdf(r.item.zdf)),
            c: e.n(i.etfColor(r.item.zdf)),
          };
        },
      ],
      ["__scopeId", "data-v-d5b6b974"],
    ]
  );
wx.createComponent(t);
