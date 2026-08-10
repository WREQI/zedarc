require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../stock-hq-data/index.js"),
  e = require("../../../../../common/vendor.js"),
  s = {
    props: {
      stockType: { type: String, default: "" },
      market: { type: [String, Number], default: "" },
      skin: { type: String, default: "white" },
    },
    computed: {
      supportPanhou: function () {
        return (
          t.utils.isHSMarket(this.market) &&
          (t.utils.isAMarket(this.stockType) ||
            t.utils.isKeChuangStock(this.stockType) ||
            t.utils.isChuangYeStock(this.stockType) ||
            ["ETF", "QDII-ETF"].includes(this.stockType))
        );
      },
    },
    methods: {
      close: function () {
        this.$emit("close");
      },
    },
  },
  n = e._export_sfc(s, [
    [
      "render",
      function (t, s, n, o, i, r) {
        return {
          a: e.o(function (t) {
            return r.close();
          }, 2765),
          b: e.n(r.supportPanhou ? "kechuang" : "hs"),
          c: e.o(function () {}, 2766),
          d: e.o(function () {}, 2767),
          e: e.o(function (t) {
            return r.close();
          }, 2768),
          f: n.skin,
        };
      },
    ],
    ["__scopeId", "data-v-3315c0d0"],
  ]);
wx.createComponent(n);
