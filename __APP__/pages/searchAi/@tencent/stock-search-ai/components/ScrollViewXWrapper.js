var o = require("../../../../../common/vendor.js"),
  e = o._export_sfc(
    {
      name: "ScrollViewXWrapper",
      data: function () {
        return { isMP: !0 };
      },
      methods: {
        handleTouchStart: function (o) {
          o.stopPropagation();
        },
        handleTouchMove: function (o) {
          o.stopPropagation();
        },
      },
    },
    [
      [
        "render",
        function (e, n, t, r, a, c) {
          return o.e({ a: a.isMP }, (a.isMP, {}));
        },
      ],
      ["__scopeId", "data-v-194a6195"],
    ]
  );
wx.createComponent(e);
