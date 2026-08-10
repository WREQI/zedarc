var e = require("../../../../../../common/vendor.js"),
  t = require("../utils/utils.js"),
  n = {
    name: "newUserRecommend",
    props: {
      recommendId: { type: String, default: "" },
      recommendData: { type: Object, default: null },
    },
    data: function () {
      return { currentStockIndex: 0, isDescOverflow: !1, descLineHeight: 0 };
    },
    computed: {
      currentStock: function () {
        var e;
        return (null == (e = this.recommendData) ? void 0 : e.related_stocks) &&
          this.recommendData.related_stocks.length > 0
          ? this.recommendData.related_stocks[this.currentStockIndex]
          : {
              symbol: "",
              name: "",
              tags: [],
              month_change_rate: "--",
              change_rate: "--",
            };
      },
      currentNews: function () {
        var e;
        return (null == (e = this.recommendData) ? void 0 : e.related_news) &&
          this.recommendData.related_news.length > 0
          ? this.recommendData.related_news[0]
          : null;
      },
    },
    mounted: function () {
      this.updateDescOverflow();
    },
    methods: {
      getMarketIcon: t.getMarketIcon,
      getNumColor: t.getNumColor,
      getCurrentStyle: function (e, t) {
        return e.currentStyle ? e.currentStyle[t] : getComputedStyle(e, !1)[t];
      },
      updateDescOverflow: function () {
        var t = this;
        if (e.StockBridge.ENV === e.EnvTypeEnum.MP)
          e.wx$1
            .createSelectorQuery()
            .in(this)
            .selectAll(".desc-content, .desc-content-full")
            .boundingClientRect()
            .exec(function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              if (
                2 ===
                (null == (e = null == n ? void 0 : n[0]) ? void 0 : e.length)
              ) {
                var r = Math.floor(n[0][0].height),
                  c = Math.floor(n[0][1].height);
                t.isDescOverflow = r < c;
              }
            });
        else {
          var n = this.$refs.descContent;
          if (!n) return void (this.isDescOverflow = !1);
          var r = this.getCurrentStyle(n, "line-height").replace("px", ""),
            c = n.scrollHeight,
            o = 2 * r;
          (this.descLineHeight = parseFloat(r)), (this.isDescOverflow = c > o);
        }
      },
      handleChangeStock: function () {
        this.recommendData.related_stocks &&
          this.recommendData.related_stocks.length > 1 &&
          ((this.currentStockIndex =
            (this.currentStockIndex + 1) %
            this.recommendData.related_stocks.length),
          e.StockBridge.report("yy.mocktrade.newuser_change_stock_click"));
      },
      handleShowDetail: function () {
        var t;
        e.StockBridge.report("yy.mocktrade.newuser_newsdetail_click");
        var n = (null == (t = this.currentNews) ? void 0 : t.news_id) || "";
        n &&
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: { id: n, recommend_id: this.recommendId },
          });
      },
      handleBuy: function () {
        e.StockBridge.report("yy.mocktrade.newuser_buybtn_click"),
          this.$emit("showMiniApply", this.currentStock);
      },
    },
  },
  r = e._export_sfc(n, [
    [
      "render",
      function (t, n, r, c, o, a) {
        return e.e(
          { a: r.recommendData },
          r.recommendData
            ? e.e(
                { b: r.recommendData.entrance_info },
                r.recommendData.entrance_info
                  ? { c: e.t(r.recommendData.entrance_info.main_text) }
                  : {},
                { d: a.currentNews },
                a.currentNews
                  ? e.e(
                      { e: o.isDescOverflow },
                      o.isDescOverflow
                        ? {
                            f: e.o(function () {
                              return (
                                a.handleShowDetail &&
                                a.handleShowDetail.apply(a, arguments)
                              );
                            }, 4515),
                          }
                        : {},
                      {
                        g: e.t(a.currentNews.news_summary),
                        h: !o.isDescOverflow,
                      },
                      (o.isDescOverflow, {}),
                      {
                        i: e.t(a.currentNews.news_summary),
                        j: e.o(function () {
                          return (
                            a.handleShowDetail &&
                            a.handleShowDetail.apply(a, arguments)
                          );
                        }, 4516),
                      }
                    )
                  : {},
                { k: r.recommendData.related_stocks },
                r.recommendData.related_stocks
                  ? e.e(
                      {
                        l: a.getMarketIcon(a.currentStock.symbol),
                        m: e.t(a.currentStock.name),
                        n: r.recommendData.related_stocks.length > 1,
                      },
                      r.recommendData.related_stocks.length > 1
                        ? {
                            o: e.o(function () {
                              return (
                                a.handleChangeStock &&
                                a.handleChangeStock.apply(a, arguments)
                              );
                            }, 4517),
                          }
                        : {},
                      { p: a.currentStock.tags && a.currentStock.tags.length },
                      a.currentStock.tags && a.currentStock.tags.length
                        ? {
                            q: e.f(a.currentStock.tags, function (t, n, r) {
                              return { a: e.t(t), b: n };
                            }),
                          }
                        : {},
                      {
                        r: e.t(a.currentStock.change_rate || "--"),
                        s: a.getNumColor(a.currentStock.change_rate),
                        t: e.t(a.currentStock.week_change_rate || "--"),
                        v: a.getNumColor(a.currentStock.week_change_rate),
                      }
                    )
                  : {},
                {
                  w: e.t(r.recommendData.entrance_info.button_text),
                  x: e.o(function () {
                    return a.handleBuy && a.handleBuy.apply(a, arguments);
                  }, 4518),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-3911ace5"],
  ]);
wx.createComponent(r);
