var e = require("../../../../../common/vendor.js"),
  c = e._export_sfc(
    {
      methods: {
        clickHandle: function () {
          this.$emit("click");
        },
      },
    },
    [
      [
        "render",
        function (c, n, t, r, o, i) {
          return {
            a: e.o(function () {
              return i.clickHandle && i.clickHandle.apply(i, arguments);
            }, 669),
          };
        },
      ],
      ["__scopeId", "data-v-082e0f59"],
    ]
  );
wx.createComponent(c);
