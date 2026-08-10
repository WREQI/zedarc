var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../utils/const.js"),
  o = require("../utils/utils.js"),
  s = require("../utils/bridgeApi.js"),
  i = require("../../../../../../common/vendor.js"),
  n = {
    props: { platform: { type: String, default: "" } },
    inject: ["stockBridge"],
    created: function () {
      this.initData();
    },
    beforeDestroy: function () {
      this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = null));
    },
    components: {
      descModal: function () {
        return "./descModal.js";
      },
      hotstockSheet: function () {
        return "./hotstockSheet.js";
      },
    },
    data: function () {
      return {
        stockOrder: 0,
        hotsheetStatus: !1,
        list: [],
        stockList: [],
        timeoutId: null,
        showDescModal: !1,
        showRankSection: !0,
        modalOverlay: {},
        abtTypeConfig: e.rankTypeConfig[3] || {},
        updateTime: "",
      };
    },
    watch: {
      hotsheetStatus: function (t) {
        t && i.StockBridge.report("trade.mocktrade.deal.hot_stock_all.click");
      },
    },
    methods: {
      getNumColor: o.getNumColor,
      closeDescModal: function () {
        this.showDescModal = !1;
      },
      handleTitleIconClick: function () {
        var t;
        (this.modalOverlay =
          (null == (t = e.rankTypeConfig[3]) ? void 0 : t.overlay) || {}),
          (this.showDescModal = !0);
      },
      initData: function () {
        return (
          (e = this),
          null,
          (o = t().mark(function e() {
            var o,
              i = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        this.timeoutId &&
                          (clearTimeout(this.timeoutId),
                          (this.timeoutId = null)),
                        (t.next = 4),
                        s.getStockRank("mn_buy")
                      );
                    case 4:
                      (o = t.sent),
                        this.dealStockRank(o.stocks_rank || []),
                        (this.timeoutId = setTimeout(function () {
                          i.initData();
                        }, 9e5)),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(0)), (this.list = []);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 8]]
            );
          })),
          new Promise(function (t, s) {
            var i = function (t) {
                try {
                  r(o.next(t));
                } catch (t) {
                  s(t);
                }
              },
              n = function (t) {
                try {
                  r(o.throw(t));
                } catch (t) {
                  s(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, n);
              };
            r((o = o.apply(e, null)).next());
          })
        );
        var e, o;
      },
      dealStockRank: function (t) {
        var e;
        (this.stockList = JSON.parse(JSON.stringify(t))),
          this.stockList.forEach(function (t) {
            (t.marketIcon = o.getMarketIcon(t.stock_code)),
              (t.name = t.stock_name),
              (t.symbol = t.stock_code);
          }),
          (this.list = this.stockList.slice(
            this.stockOrder,
            this.stockOrder + 3
          ));
        var s =
          ((null == (e = this.stockList) ? void 0 : e.length) &&
            this.stockList[0].modify_time) ||
          "";
        s && (this.abtTypeConfig.updateTime = "更新于".concat(s)),
          this.stockBridge.report("trade.mocktrade.deal.hot_stock.show");
      },
      goStockDetail: function (t, e) {
        this.stockBridge.report(
          "trade.mocktrade.deal.".concat(e, "_item.click"),
          { stock_code: t.symbol, stock_name: t.name }
        ),
          this.$emit("goStock", t, e);
      },
      refreshHotstock: function () {
        i.StockBridge.report("trade.mocktrade.deal.hot_stock_refresh.click"),
          (this.stockOrder = this.stockOrder + 3),
          this.stockOrder >= this.stockList.length && (this.stockOrder = 0),
          (this.list = this.stockList.slice(
            this.stockOrder,
            this.stockOrder + 3
          ));
      },
    },
  };
Array ||
  (i.resolveComponent("descModal") + i.resolveComponent("hotstock-sheet"))();
var r = i._export_sfc(n, [
  [
    "render",
    function (t, e, o, s, n, r) {
      return i.e(
        { a: n.list.length },
        n.list.length
          ? i.e(
              {
                b: i.t(n.abtTypeConfig.dealTitle),
                c: i.o(function () {
                  return (
                    r.handleTitleIconClick &&
                    r.handleTitleIconClick.apply(r, arguments)
                  );
                }, 3282),
                d: n.abtTypeConfig.updateTime,
              },
              n.abtTypeConfig.updateTime
                ? { e: i.t(n.abtTypeConfig.updateTime) }
                : { f: i.t(n.abtTypeConfig.titleTip) },
              {
                g: i.o(function (t) {
                  return (n.hotsheetStatus = !0);
                }, 3283),
                h: i.f(n.list, function (t, e, o) {
                  return {
                    a: t.marketIcon,
                    b: i.t(t.stock_name),
                    c: i.t(t.stock_info),
                    d: r.getNumColor(t.stock_info),
                    e: i.t(t.pop_value),
                    f: t.stock_code,
                    g: i.o(
                      function (e) {
                        return r.goStockDetail(t, "hot_stock_card");
                      },
                      3284,
                      t.stock_code
                    ),
                  };
                }),
                i: i.t(n.abtTypeConfig.profitDesc),
                j: i.t(n.abtTypeConfig.holders),
                k: n.stockList.length > 3,
              },
              n.stockList.length > 3
                ? {
                    l: i.o(function () {
                      return (
                        r.refreshHotstock &&
                        r.refreshHotstock.apply(r, arguments)
                      );
                    }, 3285),
                    m: i.o(function () {
                      return (
                        r.refreshHotstock &&
                        r.refreshHotstock.apply(r, arguments)
                      );
                    }, 3286),
                  }
                : {},
              {
                n: i.o(r.closeDescModal, 3287),
                o: i.p({ showPopup: n.showDescModal, overlay: n.modalOverlay }),
                p: i.o(r.goStockDetail, 3288),
                q: i.o(function (t) {
                  return (n.hotsheetStatus = t);
                }, 3289),
                r: i.p({
                  showPopup: n.hotsheetStatus,
                  updateTime: n.updateTime,
                  hotstockList: n.stockList,
                  abtTypeConfig: n.abtTypeConfig,
                  showRankSection: n.showRankSection,
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-20d71b7a"],
]);
wx.createComponent(r);
