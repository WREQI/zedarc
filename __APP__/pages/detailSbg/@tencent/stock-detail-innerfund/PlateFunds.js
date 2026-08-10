require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../common/vendor.js"),
  n = require("api/index.js"),
  e = {
    name: "zxgPlateFundsMod",
    props: { skin: String, scode: String, market: String, onshow: Boolean },
    components: {
      FundChart: function () {
        return "./components/plate/fundChart.js";
      },
      FundThumb: function () {
        return "./components/plate/fundThumb.js";
      },
      AddFavBtn: function () {
        return "./components/plate/AddFavBtn.js";
      },
    },
    data: function () {
      return {
        marketMap: { sz: "0", sh: "1", hk: "2" },
        chart: {},
        folded: {},
        stockList: [],
        rank: "",
        todayFunds: {},
        todayFundsTrend: [],
        historyFundFlow: [],
        loading: !0,
        chartW: 375,
        unit: 1e4,
        showBtn: [],
        times: 0,
        trendNumMap: [5, 10, 20],
        trendNum: 2,
        showDrop: !1,
        showHistoryFundFlow: !1,
      };
    },
    watch: {
      onshow: function (t) {
        t &&
          ((this.times = 0), this.getFundsStockList(), this.queryFundsCome());
      },
    },
    computed: {
      isDark: function () {
        return ["black", "dark"].includes(this.skin);
      },
      totalFunds: function () {
        if (this.historyFundFlow && this.historyFundFlow.length) {
          var t = 0;
          return (
            this.historyFundFlow
              .slice(-1 * this.trendNumMap[this.trendNum])
              .forEach(function (n) {
                t += +n[2];
              }),
            (t / 1e4).toFixed(1)
          );
        }
        return "0.0";
      },
      historyFunds: function () {
        return (
          this.historyFundFlow &&
          this.historyFundFlow.slice(-1 * this.trendNumMap[this.trendNum])
        );
      },
    },
    mounted: function () {
      var t = this;
      Promise.all([this.getFundsStockList(), this.queryFundsCome()]).then(
        function () {
          t.$emit("loaded");
        }
      );
    },
    methods: {
      formateNum: function (t, n) {
        return !isNaN(t) && n
          ? Math.abs(t) > 1e8
            ? "".concat((t / 1e8).toFixed(1), "亿")
            : Math.abs(t) > 1e4
            ? "".concat((t / 1e4).toFixed(1), "万")
            : (t / 1).toFixed(1)
          : isNaN(t)
          ? "--"
          : (t / this.unit).toFixed(1);
      },
      getFundsStockList: function () {
        var t = this,
          e = {
            plate_code: this.scode,
            source: "wzq",
            stocks_type: 1,
            user_type: 5,
          };
        return n.FundAPI.getPlateFunds(e).then(function (n) {
          0 == +n.retcode &&
            ((t.stockList =
              (Array.isArray(n.stocks_list) && n.stocks_list.slice(0, 1)) ||
              []),
            (t.rank = n.rank || ""));
        });
      },
      queryFundsCome: function () {
        var t = this;
        return n.FundAPI.queryFundsIncome({
          code: "pt".concat(this.scode),
          type: "historyFundFlow,todayFundTrend,todayFundFlow",
        }).then(function (n) {
          var e, o, d, r, i, s, u;
          n &&
            0 == n.code &&
            ((null == (o = null == (e = n.data) ? void 0 : e.todayFundFlow)
              ? void 0
              : o.mainNetIn) &&
              (Math.abs(n.data.todayFundFlow.mainNetIn) > 1e8
                ? (t.unit = 1e8)
                : (t.unit = 1e4)),
            (t.todayFunds = n.data && n.data.todayFundFlow),
            (t.todayFundsTrend =
              (null ==
              (i =
                null == (r = null == (d = n.data) ? void 0 : d.todayFundTrend)
                  ? void 0
                  : r.minList)
                ? void 0
                : i.map(function (t) {
                    return [t.time.substr(8), t.Price, t.MainNetInflow];
                  })) || []),
            (t.historyFundFlow =
              (null ==
              (u =
                null == (s = n.data.historyFundFlow)
                  ? void 0
                  : s.oneDayKlineList)
                ? void 0
                : u.map(function (t) {
                    return [t.date, t.price, t.mainNetIn];
                  })) || []),
            t.$nextTick(function () {
              t.showHistoryFundFlow = !0;
            }));
        });
      },
      changeFolded: function (t) {
        (this.folded[t] = !this.folded[t]),
          (this.folded = Object.assign({}, this.folded));
      },
      showMenu: function () {
        this.showDrop = !0;
      },
      changetrendnum: function (n) {
        var e = this;
        (this.trendNum = n),
          setTimeout(function () {
            e.showDrop = !1;
          }, 50),
          t.StockBridge.report(
            "hq.plate.detail.historyfunds".concat(this.trendNumMap[n], ".click")
          );
      },
      goPlate: function (n, e, o) {
        if (e) {
          var d = {
              plateId: "pt".concat(n),
              type: "plate",
              title: o,
              from: "kchdetail",
            },
            r = Object.keys(d)
              .map(function (t) {
                return "".concat(t, "=").concat(d[t]);
              })
              .join("&");
          t.StockBridge.openUrlWithExtraWebview({
            url: "https://wzq.tenpay.com/mp/v2/index.html#/plate/"
              .concat(e, "/detail?")
              .concat(r),
            openType: "1",
          });
        }
      },
      goStock: function (n) {
        if (n && 9 == n.length) {
          var e = this.marketMap[n.substr(7).toLowerCase()],
            o = n.substr(0, 6);
          "mp" === t.StockBridge.ENV
            ? t.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: e, scode: o },
              })
            : t.StockBridge.routeTo({
                name: "HqStock",
                params: { market: e, code: o },
              });
        }
      },
      goFundsDetail: function () {
        t.StockBridge.report("hq.plate.detail.hotfundsmore.click"),
          "mp" === t.StockBridge.ENV
            ? t.StockBridge.openExtraWebview(
                "https://wzq.tenpay.com/mp/v2/index.html#/strategy/fund/detail?code=".concat(
                  this.scode
                )
              )
            : t.StockBridge.routeTo({
                path: "/strategy/fund/detail?code=".concat(this.scode),
              });
      },
      goHotFunds: function () {
        t.StockBridge.report("hq.plate.detail.topfundsbar.click"),
          "mp" === t.StockBridge.ENV
            ? t.StockBridge.openExtraWebview(
                "https://wzq.tenpay.com/mp/v2/index.html#/strategy/fund/index"
              )
            : t.StockBridge.routeTo({ path: "/strategy/fund/index" });
      },
      goFundsIntroduce: function () {
        t.StockBridge.openExtraWebview(
          "https://gu.qq.com/resource/fundsTeach/"
        );
      },
    },
  };
Array ||
  (
    t.resolveComponent("fund-chart") +
    t.resolveComponent("AddFavBtn") +
    t.resolveComponent("fund-thumb")
  )();
var o = t._export_sfc(e, [
  [
    "render",
    function (n, e, o, d, r, i) {
      return t.e(
        {
          a: t.o(function () {
            return i.goFundsIntroduce && i.goFundsIntroduce.apply(i, arguments);
          }, 1964),
          b: t.t(i.formateNum(r.todayFunds.mainNetIn, !0)),
          c: t.n(
            r.todayFunds.mainNetIn > 0
              ? "red"
              : r.todayFunds.mainNetIn < 0
              ? "green"
              : ""
          ),
          d: t.t(r.todayFunds.rank),
          e: t.t(i.formateNum(r.todayFunds.mainIn, !0)),
          f: t.n("red"),
          g: t.t(i.formateNum(r.todayFunds.mainOut, !0)),
          h: t.n("green"),
          i: r.todayFundsTrend.length,
        },
        r.todayFundsTrend.length
          ? { j: t.p({ skin: o.skin, funds: r.todayFundsTrend }) }
          : {},
        { k: r.stockList && r.stockList.length > 0 },
        r.stockList && r.stockList.length > 0
          ? {
              l: t.o(function () {
                return i.goFundsDetail && i.goFundsDetail.apply(i, arguments);
              }, 1965),
              m: t.f(r.stockList, function (n, e, d) {
                return t.e(
                  {
                    a: t.f(n.tags, function (n, e, o) {
                      return {
                        a: t.t(n),
                        b: n,
                        c: t.n(
                          -1 == n.indexOf("龙头")
                            ? "sp-tag-item white-tag"
                            : "sp-tag-item"
                        ),
                      };
                    }),
                    b: t.t(n.stock_name),
                    c: t.t(n.stock_code),
                    d: t.t(n.price && n.price.toFixed(2)),
                    e: t.t(
                      (n.change_percent > 0 ? "+" : "") +
                        (n.change_percent && n.change_percent.toFixed(2))
                    ),
                    f: t.n(
                      n.change_percent > 0
                        ? "red"
                        : n.change_percent < 0
                        ? "green"
                        : "gray"
                    ),
                    g: t.o(
                      function (t) {
                        return i.goStock(n.stock_code);
                      },
                      1966,
                      e
                    ),
                    h: n.stock_code,
                  },
                  n.stock_code
                    ? { i: "8abd3883-1-" + d, j: t.p({ code: n.stock_code }) }
                    : {},
                  {
                    k: "8abd3883-2-" + d,
                    l: t.p({
                      skin: o.skin,
                      code: n.stock_code,
                      funds: n.funds_flow,
                    }),
                    m: t.o(
                      function (t) {
                        return i.goStock(n.stock_code);
                      },
                      1967,
                      e
                    ),
                    n: t.t(i.formateNum(n.main_net_inflow, !0)),
                    o: t.n(
                      n.main_net_inflow > 0
                        ? "red"
                        : n.main_net_inflow < 0
                        ? "green"
                        : "gray"
                    ),
                    p: t.t(n.market_cap && n.market_cap.toFixed(2)),
                    q: t.n(
                      n.market_cap > 0
                        ? "red"
                        : n.market_cap < 0
                        ? "green"
                        : "gray"
                    ),
                    r: t.t(n.brief),
                    s: t.t(r.folded[n.stock_code] ? "收起" : "展开"),
                    t: t.o(
                      function (t) {
                        return i.changeFolded(n.stock_code);
                      },
                      1968,
                      e
                    ),
                    v: "stockdes" + e,
                    w: t.n(
                      r.showBtn[e]
                        ? r.folded[n.stock_code]
                          ? "unfolded"
                          : "folded"
                        : ""
                    ),
                    x: t.f(n.hot_points, function (n, e, o) {
                      return { a: t.t(n), b: e };
                    }),
                    y: e,
                  }
                );
              }),
            }
          : {},
        { n: r.historyFundFlow.length > 0 },
        r.historyFundFlow.length > 0
          ? t.e(
              { o: r.historyFundFlow.length >= 20 },
              r.historyFundFlow.length >= 20
                ? {
                    p: t.t(r.trendNumMap[r.trendNum]),
                    q: t.f(r.trendNumMap, function (n, e, o) {
                      return {
                        a: t.t(n),
                        b: "drop" + e,
                        c: t.n(r.trendNum == e ? "dropdown-item-cur" : ""),
                        d: t.o(
                          function (t) {
                            return i.changetrendnum(e);
                          },
                          1969,
                          "drop" + e
                        ),
                      };
                    }),
                    r: t.n(r.showDrop ? "" : "hide"),
                    s: t.o(function () {
                      return i.showMenu && i.showMenu.apply(i, arguments);
                    }, 1970),
                  }
                : {},
              {
                t: t.t(i.totalFunds > 0 ? "+" : ""),
                v: t.t(i.totalFunds),
                w: t.n(
                  i.totalFunds > 0 ? "red" : i.totalFunds < 0 ? "green" : "gray"
                ),
                x: r.showHistoryFundFlow && r.historyFundFlow.length,
              },
              r.showHistoryFundFlow && r.historyFundFlow.length
                ? {
                    y: t.p({
                      skin: o.skin,
                      type: "history",
                      funds: i.historyFunds,
                    }),
                  }
                : {}
            )
          : {},
        { z: i.isDark ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-8abd3883"],
]);
wx.createComponent(o);
