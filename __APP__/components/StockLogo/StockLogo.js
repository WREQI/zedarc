require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("./utils.js"),
  t = e.defineComponent({
    name: "StockLogo",
    components: {
      MarketLabel: function () {
        return "../MarketLabel/MarketLabel.js";
      },
    },
    props: {
      market: { type: [String, Number], default: "" },
      code: { type: String, default: "" },
      type: { type: String, default: "" },
    },
    setup: function (t) {
      var o = e.ref(!1),
        n = e.computed(function () {
          return r.buildStockLogoUrl(t.market, t.code);
        }),
        a = e.computed(function () {
          return Boolean(n.value) && !o.value;
        });
      return (
        e.watch(
          function () {
            return [t.market, t.code, n.value];
          },
          function () {
            o.value = !1;
          }
        ),
        {
          logoUrl: n,
          showImage: a,
          onImageError: function () {
            o.value = !0;
          },
        }
      );
    },
  });
Array || e.resolveComponent("MarketLabel")(), Math;
var o = e._export_sfc(t, [
  [
    "render",
    function (r, t, o, n, a, u) {
      return e.e(
        { a: r.showImage },
        r.showImage
          ? {
              b: r.logoUrl,
              c: e.o(function () {
                return r.onImageError && r.onImageError.apply(r, arguments);
              }),
            }
          : { d: e.p({ market: r.market, code: r.code, type: r.type }) }
      );
    },
  ],
  ["__scopeId", "data-v-10327448"],
]);
wx.createComponent(o);
