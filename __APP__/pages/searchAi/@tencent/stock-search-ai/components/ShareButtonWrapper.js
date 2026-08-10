var e = require("../../../../../common/vendor.js"),
  r = e._export_sfc(
    {
      name: "ShareButtonWrapper",
      data: function () {
        return { isMP: !0 };
      },
    },
    [
      [
        "render",
        function (r, n, t, o, a, i) {
          return e.e({ a: a.isMP }, (a.isMP, {}));
        },
      ],
    ]
  );
wx.createComponent(r);
