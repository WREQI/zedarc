var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "ResetCardEntry",
    props: {
      canReset: { type: Boolean, default: !1 },
      showRedDot: { type: Boolean, default: !1 },
      skin: { type: String, default: "light" },
    },
    mounted: function () {
      this.$emit("brow");
    },
    methods: {
      handleClick: function () {
        this.$emit("click", this.canReset);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, d, s, a, c) {
        return e.e(
          {
            a:
              "dark" === d.skin
                ? "https://st.gtimg.com/design/b4ba53fd7ed9e278c82b7a39be87fd41.png"
                : "https://st.gtimg.com/design/6ee4dedceb84d02f095fc1b718c93563.png",
            b: d.showRedDot && d.canReset,
          },
          (d.showRedDot && d.canReset, {}),
          {
            c: e.n({ "reset-card-entry--used": !d.canReset }),
            d: e.n("dark" === d.skin ? "reset-card-entry--dark" : ""),
            e: e.o(function () {
              return c.handleClick && c.handleClick.apply(c, arguments);
            }, 4519),
          }
        );
      },
    ],
    ["__scopeId", "data-v-28718f9d"],
  ]);
wx.createComponent(n);
