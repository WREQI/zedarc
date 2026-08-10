var e = require("../../../common/vendor.js"),
  n = e._export_sfc(
    {
      name: "PrivacyBrowseOnly",
      methods: {
        handleClick: function () {
          this.$emit("show-policy-modal");
        },
      },
    },
    [
      [
        "render",
        function (n, o, r, c, t, a) {
          return {
            a: e.o(function () {
              return a.handleClick && a.handleClick.apply(a, arguments);
            }, 1409),
          };
        },
      ],
      ["__scopeId", "data-v-1091c5ee"],
    ]
  );
wx.createComponent(n);
