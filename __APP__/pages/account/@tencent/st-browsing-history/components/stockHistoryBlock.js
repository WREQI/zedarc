require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = {
    components: {
      MarketIcon: function () {
        return "./MarketIcon.js";
      },
    },
    props: {
      title: { type: String, default: "" },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {};
    },
    computed: {
      isMp: function () {
        return !1;
      },
      isSimpleMode: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    methods: {
      zdfFormat: function (t) {
        var e = parseFloat(t);
        return e || 0 === e
          ? "".concat(e > 0 ? "+" : "").concat(e.toFixed(2), "%")
          : "--";
      },
      getZdpClass: function (t) {
        return +t > 0 ? "rise" : +t < 0 ? "drop" : "equal";
      },
      goStockDetail: function (e) {
        var r = e.scode,
          o = e.market,
          n = (e.type, e.originalScode);
        t.StockBridge.report("history.stock_list_quote.click"),
          this.$emit("clickItem", e),
          t.StockRouter.routeTo({
            name: "stockdetail",
            query: { scode: n || r, market: o },
          });
      },
      toggleAdded: function (e, r, o) {
        t.StockBridge.report("history.stock_list_add.click"),
          this.$emit("toggleAdd", e, r, o);
      },
    },
  };
Array || t.resolveComponent("market-icon")();
var r = t._export_sfc(e, [
  [
    "render",
    function (e, r, o, n, d, a) {
      return {
        a: t.t(o.title),
        b: t.f(o.data, function (e, r, n) {
          return t.e(
            {
              a: t.t(e.name),
              b: "8a1af952-0-" + n,
              c: t.p({ market: e.market, scode: e.scode }),
              d: t.t(e.scode),
              e: e.delayed,
            },
            (e.delayed, {}),
            {
              f: t.t(e.price),
              g: t.t(a.zdfFormat(e.zdf)),
              h: t.n(a.getZdpClass(e.zdf)),
              i: t.n(e.added ? "added" : ""),
              j: t.o(
                function (t) {
                  return a.toggleAdded(e, e.added ? "del" : "add", o.title);
                },
                2425,
                r
              ),
              k: r,
              l: t.o(
                function (t) {
                  return a.goStockDetail(e, o.data.title);
                },
                2426,
                r
              ),
            }
          );
        }),
        c: t.n(a.isMp ? "mp" : ""),
        d: t.n(a.isSimpleMode ? "" : "classic"),
      };
    },
  ],
  ["__scopeId", "data-v-8a1af952"],
]);
wx.createComponent(r);
