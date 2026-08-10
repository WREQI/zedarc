var t = require("../../../../../common/vendor.js"),
  r = {
    props: { market: { type: String, default: "" } },
    emits: ["click"],
    setup: function (r, c) {
      var e = c.emit;
      return {
        isMPPro: !0,
        isH5Pro: !1,
        buttonText: t.computed(function () {
          return "添加" + ("FUND" === r.market ? "基金" : "股票");
        }),
        clickAddStock: function () {
          e("click");
        },
      };
    },
  },
  c = t._export_sfc(r, [
    [
      "render",
      function (r, c, e, o, n, i) {
        return {
          a: t.t("FUND" === e.market ? "基金" : "股票"),
          b: t.n({ "h5-pro": o.isH5Pro, "mp-pro": o.isMPPro }),
          c: t.o(function () {
            return o.clickAddStock && o.clickAddStock.apply(o, arguments);
          }, 4247),
        };
      },
    ],
    ["__scopeId", "data-v-a882f0ec"],
  ]);
wx.createComponent(c);
