var n = require("../../../common/vendor.js"),
  o = n._export_sfc(
    {
      setup: function () {
        return { noop: function () {} };
      },
    },
    [
      [
        "render",
        function (o, e, r, t, c, u) {
          return {
            a: n.o(function () {
              return t.noop && t.noop.apply(t, arguments);
            }, 1611),
          };
        },
      ],
      ["__scopeId", "data-v-597c09c6"],
    ]
  );
wx.createComponent(o);
