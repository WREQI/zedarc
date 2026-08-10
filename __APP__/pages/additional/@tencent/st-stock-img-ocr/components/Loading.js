var e = require("../../../../../common/vendor.js"),
  r = {
    computed: {
      isMp: function () {
        return e.StockBridge.ENV === e.EnvTypeEnum.MP;
      },
    },
  },
  n = e._export_sfc(r, [
    [
      "render",
      function (e, r, n, t, o, c) {
        return { a: c.isMp ? 1 : "" };
      },
    ],
    ["__scopeId", "data-v-a0829538"],
  ]);
wx.createComponent(n);
