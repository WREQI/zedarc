var e = require("../../../stock-hq-core/utils/market.js"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    name: "MarketIcon",
    props: {
      type: { type: String, default: "" },
      scode: { type: String, default: "" },
      iconType: { type: String, default: "" },
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
        var t = e.transMarketIcon(this.iconType, this.type, this.scode);
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
    ["__scopeId", "data-v-692dd8a9"],
  ]);
wx.createComponent(r);
