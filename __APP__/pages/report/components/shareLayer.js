var n = require("../../../common/vendor.js"),
  e = n._export_sfc(
    {
      data: function () {
        return {};
      },
      computed: {},
      mounted: function () {},
      methods: {
        hidden: function () {
          this.$emit("hidden");
        },
      },
    },
    [
      [
        "render",
        function (e, t, o, d, r, i) {
          return {
            a: n.o(function () {}, 1446),
            b: n.o(function () {
              return i.hidden && i.hidden.apply(i, arguments);
            }, 1447),
          };
        },
      ],
      ["__scopeId", "data-v-3603617d"],
    ]
  );
wx.createComponent(e);
