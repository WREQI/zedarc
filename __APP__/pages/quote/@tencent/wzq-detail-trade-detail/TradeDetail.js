var e = require("../../../../common/vendor.js");
Array ||
  (
    e.resolveComponent("portrait") +
    e.resolveComponent("landscapeLevel2") +
    e.resolveComponent("landscape")
  )();
var t = e._export_sfc(
  {
    components: {
      portrait: function () {
        return "./portrait.js";
      },
      landscape: function () {
        return "./landscape.js";
      },
      landscapeLevel2: function () {
        return "./landscapeLevel2.js";
      },
    },
    props: ["market", "scode", "quote", "chartHeight", "landscape", "hkVIP"],
    methods: {
      changeRefreshStatus: function (e) {
        this.$emit("changeRefreshStatus", e);
      },
    },
  },
  [
    [
      "render",
      function (t, a, r, o, n, c) {
        return e.e(
          { a: !r.landscape },
          r.landscape
            ? r.landscape && r.hkVIP
              ? {
                  e: e.p({
                    market: r.market,
                    scode: r.scode,
                    quote: r.quote,
                    hkVIP: r.hkVIP,
                    "chart-height": r.chartHeight,
                  }),
                }
              : { f: e.p({ market: r.market, scode: r.scode, quote: r.quote }) }
            : {
                b: e.o(c.changeRefreshStatus, 6044),
                c: e.p({
                  market: r.market,
                  scode: r.scode,
                  quote: r.quote,
                  hkVIP: r.hkVIP,
                  "chart-height": r.chartHeight,
                }),
              },
          { d: r.landscape && r.hkVIP, g: r.landscape ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-98ee9ca3"],
  ]
);
wx.createComponent(t);
