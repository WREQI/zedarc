var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../stock-news-core/utils/request/index.js"),
  n = require("../api/financialReportUtil.js"),
  o = require("../../stock-news-core/utils/force2https.js"),
  e = require("../../../../../common/vendor.js"),
  r = {
    options: { styleIsolation: "shared" },
    components: {
      StockIncome: function () {
        return "./StockIncome.js";
      },
      StockForcast: function () {
        return "./StockForcast.js";
      },
    },
    props: {
      newsId: "",
      theme: "",
      financialData: {},
      incomeData: null,
      netData: null,
      symbol: "",
    },
    watch: {
      symbol: {
        immediate: !0,
        handler: function (t) {
          t && this.getStockQtData(t);
        },
      },
    },
    data: function () {
      return { stockQuote: { stock_price: "", zdf: "" }, qtTimer: null };
    },
    computed: {
      tagTop: function () {
        return n.isLessThaniOS14() ? "-2px" : "2px";
      },
      forcastFlag: function () {
        if (this.financialData && this.financialData.report_data) {
          var t = this.financialData.report_data.forcast_result;
          return -1 === t
            ? "https://st.gtimg.com/design/024e01fcf2f6e7104d2665fba9827e07.png"
            : 1 === t
            ? "https://st.gtimg.com/design/bccc745a4db41e2213c0a46592afa4fa.png"
            : "https://st.gtimg.com/design/62119dfe8834ff3c0c9a68d761a34efb.png";
        }
        return "";
      },
      forcastResult: function () {
        return this.financialData && this.financialData.report_data
          ? this.financialData.report_data.forcast_result
          : -9;
      },
      showForcastFlag: function () {
        if (this.financialData && this.financialData.report_data) {
          var t = this.financialData.report_data.forcast_result;
          if (-1 === t || 1 === t || 0 === t) return !0;
        }
        return !1;
      },
      canShowLogo: function () {
        return !!(
          this.financialData &&
          this.financialData.logo &&
          this.financialData.logo.length > 0
        );
      },
      logoUrl: function () {
        var t;
        return o.forceHttpsAdvanced(
          (null == (t = this.financialData) ? void 0 : t.logo) || ""
        );
      },
      profitForcast: function () {
        var a = {};
        if (this.financialData && this.financialData.forecast) {
          (a.net_profit_comment =
            this.financialData.report_data.net_forcast_str || ""),
            (a.net_profit_unit = this.financialData.net_unit || "");
          var n = [];
          this.financialData.forecast.forEach(function (a) {
            var o = {
              net_profit: a.net,
              net_profit_forcast: a.net_forcast,
              net_profit_ratio: a.net_ratio,
              year: a.date,
            };
            n = [].concat(t(n), [o]);
          }),
            (a.net_profit_list = n);
        }
        return a;
      },
    },
    beforeDestroy: function () {
      this.qtTimer && (clearInterval(this.qtTimer), (this.qtTimer = null));
    },
    mounted: function () {
      var t = this;
      this.qtTimer = setInterval(function () {
        t.getStockQtData(t.symbol);
      }, 5e3);
    },
    methods: {
      textColor: function (t) {
        return n.textColorByValue(t);
      },
      formatPercent: function (t) {
        return n.formatZdfPercent(t);
      },
      getStockQtData: function (t) {
        var n = this;
        if (t && !(t.length <= 0)) {
          var o = "https://sqt.gtimg.cn/utf8?fmt=json&q="
            .concat(t, "&r=")
            .concat(Math.random());
          a.request(o, {}, { method: "get", isShowToast: !1 })
            .then(function (a) {
              if (a) {
                var o = a[t];
                o &&
                  o.length >= 33 &&
                  (n.stockQuote = { stock_price: o[3], zdf: o[32] });
              }
            })
            .catch(function (t) {});
        }
      },
    },
  };
Array ||
  (e.resolveComponent("StockIncome") + e.resolveComponent("StockForcast"))();
var i = e._export_sfc(r, [
  [
    "render",
    function (t, a, n, o, r, i) {
      return e.e(
        { a: n.financialData },
        n.financialData
          ? e.e(
              { b: i.canShowLogo },
              i.canShowLogo ? { c: i.logoUrl } : {},
              {
                d: e.t(n.financialData.stock_name),
                e: e.t(r.stockQuote.stock_price),
                f: i.textColor(r.stockQuote.zdf),
                g: e.t(i.formatPercent(r.stockQuote.zdf)),
                h: i.textColor(r.stockQuote.zdf),
                i: e.f(n.financialData.points, function (t, a, o) {
                  return e.e(
                    {
                      a: e.t(a + 1),
                      b: e.t(t),
                      c: 0 === a && i.showForcastFlag,
                    },
                    0 === a && i.showForcastFlag ? { d: i.forcastFlag } : {},
                    { e: 0 === a },
                    0 === a
                      ? {
                          f: e.t(
                            i.formatPercent(
                              n.financialData.report_data.income_ratio
                            )
                          ),
                          g: i.textColor(
                            n.financialData.report_data.income_ratio
                          ),
                          h: e.t(
                            i.formatPercent(
                              n.financialData.report_data.net_ratio
                            )
                          ),
                          i: i.textColor(n.financialData.report_data.net_ratio),
                        }
                      : {},
                    { j: a }
                  );
                }),
                j: i.tagTop,
                k: n.financialData && n.financialData.summary,
              },
              n.financialData && n.financialData.summary
                ? { l: e.t(n.financialData.summary) }
                : {},
              { m: n.incomeData && n.incomeData.chartData },
              n.incomeData && n.incomeData.chartData
                ? {
                    n: e.p({
                      chartId: "yyzsr",
                      incomeData: n.incomeData,
                      theme: n.theme,
                    }),
                  }
                : {},
              { o: n.netData && n.netData.chartData },
              n.netData && n.netData.chartData
                ? {
                    p: e.p({
                      chartId: "jlr",
                      incomeData: n.netData,
                      theme: n.theme,
                    }),
                  }
                : {},
              {
                q:
                  -9 !== i.forcastResult &&
                  i.profitForcast &&
                  i.profitForcast.net_profit_list &&
                  i.profitForcast.net_profit_list.length > 0,
              },
              -9 !== i.forcastResult &&
                i.profitForcast &&
                i.profitForcast.net_profit_list &&
                i.profitForcast.net_profit_list.length > 0
                ? { r: e.p({ profitForcast: i.profitForcast, theme: n.theme }) }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-76fac537"],
]);
wx.createComponent(i);
