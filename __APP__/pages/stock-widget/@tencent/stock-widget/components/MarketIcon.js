var t = require("../../stock-hq-core/utils/market.js"),
  e = require("../../../../../common/vendor.js"),
  r = {
    name: "MarketIcon",
    options: { styleIsolation: "shared" },
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
        var t = this.transMarket();
        this.currentImage =
          "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
            t,
            ".svg"
          );
      },
      transMarket: function () {
        if (this.market) {
          var e = t.getMarketPYName(this.market);
          if (!e)
            try {
              +this.market > 600
                ? (e = "us")
                : +this.market > 300 && (e = "hk"),
                ("uk" !== this.market &&
                  "cnjj" !== this.market &&
                  "cwjj" !== this.market &&
                  "jj" !== this.market &&
                  "nq" !== this.market &&
                  "zhai" !== this.market) ||
                  (e = this.market),
                "ft" === this.market && (e = "hqzhi");
            } catch (t) {}
          return (
            t.isKeChuangStock(this.type)
              ? (e = "ke")
              : t.isChuangYeStock(this.type) && (e = "chuang"),
            "sh" === e && this.scode && /^68/.test(this.scode) && (e = "ke"),
            "sz" === e &&
              this.scode &&
              /^30/.test(this.scode) &&
              (e = "chuang"),
            e
          );
        }
      },
    },
  },
  s = e._export_sfc(r, [
    [
      "render",
      function (t, r, s, a, i, n) {
        return e.e(
          { a: i.currentImage },
          i.currentImage ? { b: i.currentImage } : {}
        );
      },
    ],
    ["__scopeId", "data-v-562fe2d0"],
  ]);
wx.createComponent(s);
