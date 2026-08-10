var e = require("../../../../../../common/vendor.js")._export_sfc(
  {
    mounted: function () {
      var e = this;
      this.$on("nav-change", function (n) {
        e.$emit("set-swiper-index", n);
      }),
        this.$on("swiper-change", function (n) {
          e.$emit("set-nav-index", n);
        });
    },
    beforeDestroy: function () {
      this.$off("nav-change"), this.$off("swiper-change");
    },
  },
  [
    [
      "render",
      function (e, n, t, i, o, r) {
        return {};
      },
    ],
  ]
);
wx.createComponent(e);
