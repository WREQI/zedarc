require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../stock-hq-core/utils/market.js"),
  t = require("../../../stock-hq-data/index.js"),
  s = require("../../../../../../common/vendor.js"),
  i = {
    name: "MarketIcon",
    props: {
      type: { type: String, default: "" },
      symbol: { type: String, default: "" },
    },
    data: function () {
      return { currentImage: "", market: "", scode: "" };
    },
    watch: {
      symbol: function () {
        var e = t.utils.splitSymbol(this.symbol),
          s = e.market,
          i = e.scode;
        (this.market = s), (this.scode = i), this.findImage();
      },
      type: function () {
        this.findImage();
      },
    },
    created: function () {
      var e = t.utils.splitSymbol(this.symbol),
        s = e.market,
        i = e.scode;
      (this.market = s), (this.scode = i), this.findImage();
    },
    methods: {
      findImage: function () {
        var s = this.type,
          i = this.market,
          r = this.scode;
        if (
          ["FJ", "FJ-CX", "KJ", "LOF", "ETF", "QDII-LOF", "QDII-ETF"].includes(
            s
          )
        )
          this.currentImage =
            "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/cnjj.svg";
        else {
          if (t.utils.isIndex(s) || t.utils.isCSIndex(s))
            return 2 == +i
              ? void (this.currentImage =
                  "https://st.gtimg.com/design/1f1f39518ac98d1b1e0b2568b3bb34f3.png")
              : 3 == +i
              ? void (this.currentImage =
                  "https://st.gtimg.com/design/ea7e53a2fe55a3a38b61a7ab8d68ed4d.png")
              : void (this.currentImage =
                  "https://st.gtimg.com/design/46376ba579d819af0330e16450a2ce49.png");
          if (
            t.utils.isDebt(s) ||
            t.utils.isNationalDebt(s) ||
            t.utils.isTransferableDebt(s)
          )
            this.currentImage =
              "https://st.gtimg.com/design/9f6cb82efd2fa09e584ddb8ac69bdc05.png";
          else {
            var a = e.transMarketIcon(i, s, r);
            a && (this.currentImage = a);
          }
        }
      },
    },
  },
  r = s._export_sfc(i, [
    [
      "render",
      function (e, t, i, r, a, n) {
        return s.e(
          { a: "" !== a.currentImage },
          "" !== a.currentImage ? { b: a.currentImage } : {}
        );
      },
    ],
    ["__scopeId", "data-v-ecf05901"],
  ]);
wx.createComponent(r);
