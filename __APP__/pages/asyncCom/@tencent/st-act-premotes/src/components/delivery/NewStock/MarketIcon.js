var e = require("../../../../../stock-hq-core/utils/market.js"),
  t = require("../../../../../../../../common/vendor.js"),
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
        var t = e.transMarketIcon(this.market, this.type, this.scode);
        t && (this.currentImage = t);
      },
    },
  },
  n = t._export_sfc(r, [
    [
      "render",
      function (e, r, n, a, i, c) {
        return t.e(
          { a: "" !== i.currentImage },
          "" !== i.currentImage ? { b: i.currentImage } : {}
        );
      },
    ],
    ["__scopeId", "data-v-dd353b5e"],
  ]);
wx.createComponent(n);
