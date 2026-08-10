require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../stock-hq-core/utils/market.js"),
  t = require("../../stock-hq-data/index.js"),
  i = require("../../../../../common/vendor.js"),
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
        var i = this.type,
          r = this.market,
          n = this.scode;
        if (
          ["FJ", "FJ-CX", "KJ", "LOF", "ETF", "QDII-LOF", "QDII-ETF"].includes(
            i
          )
        )
          this.currentImage =
            "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/cnjj.svg";
        else {
          if (t.utils.isIndex(i) || t.utils.isCSIndex(i))
            return 2 == +r
              ? void (this.currentImage =
                  "https://st.gtimg.com/design/1f1f39518ac98d1b1e0b2568b3bb34f3.png")
              : 3 == +r
              ? void (this.currentImage =
                  "https://st.gtimg.com/design/ea7e53a2fe55a3a38b61a7ab8d68ed4d.png")
              : void (this.currentImage =
                  "https://st.gtimg.com/design/46376ba579d819af0330e16450a2ce49.png");
          if (
            t.utils.isDebt(i) ||
            t.utils.isNationalDebt(i) ||
            t.utils.isTransferableDebt(i)
          )
            this.currentImage =
              "https://st.gtimg.com/design/9f6cb82efd2fa09e584ddb8ac69bdc05.png";
          else {
            var s = e.transMarketIcon(r, i, n);
            s && (this.currentImage = s);
          }
        }
      },
    },
  },
  n = i._export_sfc(r, [
    [
      "render",
      function (e, t, r, n, s, a) {
        return i.e(
          { a: "" !== s.currentImage },
          "" !== s.currentImage ? { b: s.currentImage } : {}
        );
      },
    ],
    ["__scopeId", "data-v-fc9ed08f"],
  ]);
wx.createComponent(n);
