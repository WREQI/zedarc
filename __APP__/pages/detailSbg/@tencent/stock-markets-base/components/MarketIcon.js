var e = require("../utils/market.js"),
  t = require("../../../../../common/vendor.js"),
  n = {
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
        var t = e.transMarketIcon(this.market, this.type, this.scode);
        t && (this.currentImage = t);
      },
    },
  },
  r = t._export_sfc(n, [
    [
      "render",
      function (e, n, r, a, i, c) {
        return t.e(
          { a: "" !== i.currentImage },
          "" !== i.currentImage ? { b: i.currentImage } : {}
        );
      },
    ],
    ["__scopeId", "data-v-be34e207"],
  ]);
wx.createComponent(r);
