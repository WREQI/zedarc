var e = require("../../../../../../common/vendor.js"),
  n = e._export_sfc(
    {
      methods: {
        longPress: function () {
          this.$emit("longPress");
        },
        longPressTap: function () {
          this.$emit("tap");
        },
      },
    },
    [
      [
        "render",
        function (n, o, r, s, t, a) {
          return {
            a: e.o(function () {
              return a.longPress && a.longPress.apply(a, arguments);
            }, 4445),
            b: e.o(function () {
              return a.longPressTap && a.longPressTap.apply(a, arguments);
            }, 4446),
          };
        },
      ],
      ["__scopeId", "data-v-f9eb36e4"],
    ]
  );
wx.createComponent(n);
