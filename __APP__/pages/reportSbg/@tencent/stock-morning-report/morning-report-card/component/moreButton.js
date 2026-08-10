var e = require("../../../../../../common/vendor.js"),
  o = e._export_sfc(
    {
      name: "moreButton",
      props: ["moreText"],
      methods: {
        navigateToMore: function () {
          this.$emit("moreClick");
        },
      },
    },
    [
      [
        "render",
        function (o, t, r, n, a, i) {
          return {
            a: e.t(r.moreText),
            b: e.o(function () {
              return i.navigateToMore && i.navigateToMore.apply(i, arguments);
            }, 4919),
          };
        },
      ],
      ["__scopeId", "data-v-183342fb"],
    ]
  );
wx.createComponent(o);
