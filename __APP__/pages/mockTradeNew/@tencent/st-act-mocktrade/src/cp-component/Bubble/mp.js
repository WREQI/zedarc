var t = require("../../../../../../../common/vendor.js"),
  e = t._export_sfc(
    {
      data: function () {
        return { test: "123" };
      },
    },
    [
      [
        "render",
        function (e, r, n, o, c, s) {
          return { a: t.t(c.test) };
        },
      ],
    ]
  );
wx.createComponent(e);
