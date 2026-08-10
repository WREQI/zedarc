var e = require("../../../../../common/vendor.js"),
  t = require("../utils/market.js"),
  r = {
    name: "MarketIconSprite",
    props: {
      market: { type: String, default: "" },
      type: { type: String, default: "" },
      scode: { type: String, default: "" },
      stockType: { type: String, default: "" },
    },
    setup: function (r) {
      var n = e.ref("");
      return (
        e.watchEffect(function () {
          var e = t.transMarket(r.market, r.type, r.scode, r.stockType);
          e && (n.value = e);
        }),
        { currentImage: n }
      );
    },
  },
  n = e._export_sfc(r, [
    [
      "render",
      function (t, r, n, a, c, u) {
        return e.e(
          { a: "" !== a.currentImage },
          "" !== a.currentImage
            ? { b: e.n("micon ".concat(a.currentImage)) }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-25d56cb3"],
  ]);
wx.createComponent(n);
