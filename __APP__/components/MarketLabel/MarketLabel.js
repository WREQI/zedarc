require("../../app.js");
var e = require("../../utils/market.js"),
  t = require("../../config/enum.js"),
  r = require("../../common/vendor.js"),
  n = {
    props: {
      market: { type: String, default: "" },
      code: { type: String, default: "" },
      type: { type: String, default: "" },
    },
    setup: function (n) {
      return {
        cls: r.computed(function () {
          var r = e.stockTypeMap({ cls: n.type, market: n.market }) || "";
          return "icon-".concat(r || t.MARKET[n.market]);
        }),
      };
    },
  },
  a = r._export_sfc(n, [
    [
      "render",
      function (e, t, n, a, c, u) {
        return { a: r.n(a.cls) };
      },
    ],
    ["__scopeId", "data-v-d7aa870f"],
  ]);
wx.createComponent(a);
