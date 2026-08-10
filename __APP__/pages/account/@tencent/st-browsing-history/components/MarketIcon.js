var t = require("../../stock-hq-core/utils/market.js"),
  e = require("../../../../../common/vendor.js"),
  r = {
    name: "MarketIcon",
    props: {
      market: { type: String, default: "" },
      type: { type: String, default: "" },
      scode: { type: String, default: "" },
    },
    data: function () {
      return { currentImage: "" };
    },
    watch: {
      market: function () {
        this.findImage();
      },
      type: function () {
        this.findImage();
      },
      scode: function () {
        this.findImage();
      },
    },
    created: function () {
      this.findImage();
    },
    methods: {
      findImage: function () {
        var e = t.transMarketIcon(
          this.formatMarket(this.market),
          this.type,
          this.scode
        );
        e && (this.currentImage = e);
      },
      formatMarket: function (t) {
        return { pt: "p" }[t] || t;
      },
    },
  },
  n = e._export_sfc(r, [
    [
      "render",
      function (t, r, n, a, i, c) {
        return e.e(
          { a: "" !== i.currentImage },
          "" !== i.currentImage ? { b: i.currentImage } : {}
        );
      },
    ],
    ["__scopeId", "data-v-8793302b"],
  ]);
wx.createComponent(n);
