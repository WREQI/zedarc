var e = require("../../../../../../../common/vendor.js"),
  c = e._export_sfc(
    {
      props: ["checked"],
      data: function () {
        return {};
      },
    },
    [
      [
        "render",
        function (c, r, n, t, o, a) {
          return { a: n.checked, b: e.n(n.checked && "check") };
        },
      ],
      ["__scopeId", "data-v-ca133446"],
    ]
  );
wx.createComponent(c);
