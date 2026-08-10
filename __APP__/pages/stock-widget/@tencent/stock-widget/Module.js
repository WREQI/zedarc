var e = require("../../../../common/vendor.js"),
  t = require("../stock-hq-data/index.js"),
  a = require("util/const.js"),
  o = function (e) {
    var t = e;
    try {
      t = decodeURIComponent(e);
    } catch (e) {}
    return t;
  },
  n = function (e) {
    var t = {};
    if ("string" == typeof e && e.length)
      for (
        var a = (e = e.indexOf("?") > -1 ? e.replace(/\S*\?/, "") : e)
            .split("&")
            .filter(function (e) {
              return "" !== e;
            }),
          n = 0;
        n < a.length;
        n += 1
      ) {
        var i = a[n].replace(/#\S+/g, "").split("=");
        t[decodeURIComponent(i[0])] =
          void 0 === i[1] ? void 0 : o(i.slice(1).join("=")) || "";
      }
    return t;
  },
  i = [
    a.INDUSTRY_RANK,
    a.FUND_FLOW_NORTH_MINS,
    a.FUND_FLOW_NORTH_KLINE,
    a.FUND_FLOW_SOUTH_MINS,
    a.FUND_FLOW_SOUTH_KLINE,
    a.MARKET_OVERVIEW_HS,
  ],
  r = {
    components: {
      ModuleWraper: function () {
        return "./components/ModuleWraper.js";
      },
      PlateBox: function () {
        return "./components/PlateBox.js";
      },
      BoardList: function () {
        return "./components/BoardList.js";
      },
      StockChart: function () {
        return "./components/StockChart.js";
      },
      NationalDebt: function () {
        return "./components/NationalDebt.js";
      },
      BrokerGoldStock: function () {
        return "./components/BrokerGoldStock.js";
      },
      LongHuList: function () {
        return "./components/LongHuList.js";
      },
      ETFList: function () {
        return "./components/ETFList.js";
      },
      ETFChange: function () {
        return "./components/ETFChange.js";
      },
      MainFundHS: function () {
        return "./components/MainFundCard/index.js";
      },
      SaleEmptyHK: function () {
        return "./components/SaleEmpty/index.js";
      },
      FinCalWidget: function () {
        return "../../../investment/@tencent/wzq-investment-calendar/components/widget/Widget.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1pbnZlc3RtZW50LWNhbGVuZGFyL2NvbXBvbmVudHMvd2lkZ2V0L1dpZGdldC52dWU;
          }
        );
      },
    },
    inject: { helper: { default: {} }, hqBridge: { default: null } },
    options: { styleIsolation: "shared" },
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "white" },
      showAddFav: { type: Boolean, default: !1 },
      stockInitailAdded: { type: Boolean, default: !1 },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showNationDebtHeader: { type: Boolean, default: !1 },
      showNationDebtBorder: { type: Boolean, default: !1 },
      showNationDebtExpandBtn: { type: Boolean, default: !1 },
      openAccountText: { type: String, default: "立即开户" },
      reportPageName: { type: String, default: "news.detail" },
      nationDebtStatData: { type: String, default: "" },
      accountOpenFlag: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      noneMargin: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      newsId: { type: String, default: "" },
      publishTime: { type: Number, default: 0 },
      pageType: { type: String, default: "newsDetail" },
    },
    computed: {
      env: function () {
        var e;
        return (null == (e = this.helper) ? void 0 : e.env) || {};
      },
      shy: function () {
        var e;
        return null == (e = this.helper) ? void 0 : e.shy;
      },
      moduleData: function () {
        var e = [],
          t = {};
        if (
          (this.item && (e = (this.item.id && this.item.id.split("#")) || []),
          e.length > 0)
        ) {
          var o = e[5] ? n(e[5]) : null,
            r = "";
          o && o.rankId && (r = o.rankId),
            (t = {
              imgWhite: e[0],
              imgBlack: e[1],
              type: e[2],
              isDynamic: -1 === i.indexOf(e[2]) && o && 1 == +o.moduleStatus,
              goldStockRankID: r,
            }).type === a.BANG_DAN_LIST
              ? (t.params = o)
              : (t.params = e[3] ? n(e[3]) : null);
        }
        return t;
      },
      shouldShowModule: function () {
        if (!this.moduleData) return !1;
        if (this.moduleData.type === a.MAIN_FUND) {
          if (!this.moduleData.params) return !1;
          var e = t.utils.splitSymbol(
            this.moduleData.params.symbol || ""
          ).market;
          return "0" === e || "1" === e || "2" === e;
        }
        if (this.moduleData.type === a.SALE_EMPTY) {
          if (!this.moduleData.params) return !1;
          var o = t.utils.splitSymbol(
            this.moduleData.params.symbol || ""
          ).market;
          return "2" === o || "3" === o;
        }
        return a.ALL_MODULE_TYPE.includes(this.moduleData.type);
      },
      isPlate: function () {
        return this.moduleData && this.moduleData.type === a.PLATE_TABLE;
      },
      isBoard: function () {
        return this.moduleData && this.moduleData.type === a.BANG_DAN_LIST;
      },
      isMinsChart: function () {
        return this.moduleData && this.moduleData.type === a.MINS_CHART;
      },
      isKlineChart: function () {
        return this.moduleData && this.moduleData.type === a.KLINE_CHART;
      },
      isStock: function () {
        return this.isMinsChart || this.isKlineChart;
      },
      isNationalDebt: function () {
        return this.moduleData && this.moduleData.type === a.NATIONALDEBT;
      },
      isBrokerGoldStock: function () {
        return this.moduleData && this.moduleData.type == a.BROKER_GOLD_STOCK;
      },
      isLONGHUBANG: function () {
        return this.moduleData && this.moduleData.type == a.LONG_HU_BANG;
      },
      isETFList: function () {
        return this.moduleData && this.moduleData.type == a.ETF_LIST;
      },
      isETFChange: function () {
        return this.moduleData && this.moduleData.type == a.ETF_CHANGE;
      },
      isMainFund: function () {
        return this.moduleData && this.moduleData.type === a.MAIN_FUND;
      },
      isSaleEmpty: function () {
        return this.moduleData && this.moduleData.type === a.SALE_EMPTY;
      },
      isFinCal: function () {
        return this.moduleData && this.moduleData.type === a.FINANCE_CALENDAR;
      },
      enableFinCal: function () {
        var t, a, o;
        return (
          this.isFinCal &&
          ("mpwzq" === (null == (t = e.StockBridge) ? void 0 : t.SHELL) ||
            "wzqlight" === (null == (a = e.StockBridge) ? void 0 : a.SHELL) ||
            "stock" === (null == (o = e.StockBridge) ? void 0 : o.SHELL))
        );
      },
      finCalModel: function () {
        var e, t;
        return this.isFinCal
          ? {
              type:
                (null == (e = this.moduleData.params) ? void 0 : e.type) || "",
              symbols:
                (null == (t = this.moduleData.params) ? void 0 : t.symbols) ||
                "",
              pageType: this.pageType,
            }
          : null;
      },
      enableJump: function () {
        if (this.isNationalDebt) return this.showNationDebtBorder;
        if (this.isFinCal) return !1;
        var e = this.helper.env || {},
          t = e.__WZQ__,
          o = e.isBroker,
          n = e.__MP__,
          i = e.__APP__;
        if (this.isStock && "fx" === (this.moduleData.params || {}).market)
          return i;
        var r = void 0 === this.item.flag || !!this.item.flag;
        return (
          (t || o || n) &&
            (r =
              r &&
              -1 ===
                [
                  a.INDUSTRY_RANK,
                  a.FUND_FLOW_NORTH_MINS,
                  a.FUND_FLOW_NORTH_KLINE,
                  a.FUND_FLOW_SOUTH_MINS,
                  a.FUND_FLOW_SOUTH_KLINE,
                  a.MARKET_OVERVIEW_HS,
                ].indexOf(this.moduleData.type)),
          r
        );
      },
      showDetail: function () {
        var a,
          o,
          n,
          i,
          r,
          s,
          l,
          u,
          d = (this.helper.env || {}).__APP__;
        if (this.isSaleEmpty) {
          if (
            !d &&
            "3" ===
              t.utils.splitSymbol(
                (null == (o = null == (a = this.moduleData) ? void 0 : a.params)
                  ? void 0
                  : o.symbol) || ""
              ).market
          )
            return !1;
          if (
            "2" ===
            t.utils.splitSymbol(
              (null == (i = null == (n = this.moduleData) ? void 0 : n.params)
                ? void 0
                : i.symbol) || ""
            ).market
          )
            return (
              d ||
              (null == (r = e.StockBridge) ? void 0 : r.ENV) ===
                (null == (s = e.EnvTypeEnum) ? void 0 : s.WZQ_LITE) ||
              !1
            );
        }
        return !(
          (this.isMainFund &&
            d &&
            "2" ===
              t.utils.splitSymbol(
                (null == (u = null == (l = this.moduleData) ? void 0 : l.params)
                  ? void 0
                  : u.symbol) || ""
              ).market) ||
          this.isBrokerGoldStock
        );
      },
    },
    data: function () {
      return { canShowModuleWrapper: !0, showNoduleEtfListOrEtfChange: !0 };
    },
    methods: {
      handleClick: function (e) {
        var t = e.eventName,
          a = e.params;
        if ("gotoDetail" === t && this.isNationalDebt)
          return (
            a || (a = this.getNationalDebtPageInfo()), void this.routeToPage(a)
          );
        if ("gotoDetail" === t && this.isLONGHUBANG)
          return a || (a = this.getLonghuListPage()), void this.routeToPage(a);
        if ("gotoDetail" === t && this.isETFList)
          return a || (a = this.getETFListPage()), void this.routeToPage(a);
        if ("gotoDetail" === t && this.isETFChange)
          return a || (a = this.getETFChangePage()), void this.routeToPage(a);
        if ("gotoDetail" === t && this.isMainFund)
          return (
            a || (a = this.getMainFundPage()), void (a && this.routeToPage(a))
          );
        if ("gotoDetail" === t && this.isSaleEmpty)
          return (
            a || (a = this.getSaleEmptyPage()), void (a && this.routeToPage(a))
          );
        var o = this.item;
        this.$emit(t, { item: o, params: a });
      },
      getETFChangePage: function () {
        var a;
        this.report("ETFChange_module_click");
        var o,
          n = this.env,
          i = n.__APP__,
          r = n.__WZQ__,
          s = n.__MP__,
          l = n.IS_WZQ_XCX,
          u = t.utils.splitSymbol(this.moduleData.params.code),
          d = u.market,
          c = u.scode;
        return (
          i
            ? (o = {
                url: "qqstock://StockDetail?info=".concat(
                  encodeURIComponent(
                    JSON.stringify({
                      code: this.moduleData.params.code,
                      selectedTabTitle: "持仓",
                    })
                  )
                ),
              })
            : s || l
            ? (o = {
                url: "/pages/quote/quote?market="
                  .concat(d, "&scode=")
                  .concat(c),
              })
            : (r ||
                (null == (a = e.StockBridge) ? void 0 : a.ENV) ===
                  e.EnvTypeEnum.WZQ_LITE) &&
              (o = {
                path: "/trade/stock_detail.shtml",
                query: { scode: c, type: d, selectTab: "asset" },
              }),
          o
        );
      },
      getETFListPage: function () {
        var t, a, o, n;
        this.report("ETF_module_click");
        var i,
          r = this.env,
          s = r.__APP__,
          l = r.__WZQ__,
          u = null == (t = e.StockBridge) ? void 0 : t.SHELL;
        if (s)
          i = {
            url: "qqstock://GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Ffund%22%7D%20",
          };
        else if (u === (null == (a = e.ShellTypeEnum) ? void 0 : a.MPWZQ))
          i = { url: "/pages/market/pages/ETFPage" };
        else if (u === (null == (o = e.ShellTypeEnum) ? void 0 : o.WZQLIGHT))
          i = { path: "/pages/market/pages/ETFPage" };
        else {
          if (u === (null == (n = e.ShellTypeEnum) ? void 0 : n.MPWEAPP))
            return void e.wx$1.reLaunch({
              url: "/pages/index/market?currentTab=etf",
            });
          l && (i = { path: "/market/index", query: { currentTab: "etf" } });
        }
        return i;
      },
      getLonghuListPage: function () {
        this.report("longhubang_module_click");
        var e,
          t = this.env,
          a = t.__APP__,
          o = t.__WZQ__,
          n = t.__MP__,
          i = t.IS_WZQ_XCX;
        if (a) {
          var r = JSON.stringify({
            p_key: "com.tencent.shy.lhb_combine",
            p_url: "lhb-index",
            p_showNav: !0,
          });
          e = { url: "qqstock://SHY?info=".concat(encodeURIComponent(r)) };
        } else
          n || i
            ? (e = {
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/longhubang"
                  )
                ),
              })
            : o && (e = { path: "/longhubang" });
        return e;
      },
      getNationalDebtPageInfo: function () {
        this.report("nationaldebt_learnmore_click");
        var e,
          t = this.env,
          a = t.__APP__,
          o = t.__WZQ__,
          n = t.__MP__;
        if (a) {
          var i = JSON.stringify({
            p_key: "com.tencent.shy.market_overview",
            p_url: "debtIndex?market=sz",
            p_showNav: !0,
          });
          e = { url: "qqstock://SHY?info=".concat(encodeURIComponent(i)) };
        } else
          n
            ? (e = {
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/national-debt-index"
                  )
                ),
              })
            : o && (e = { path: "/national-debt-index" });
        return e;
      },
      getMainFundPage: function () {
        var a;
        this.report("mainfundhs_click");
        var o = this.env,
          n = o.__APP__,
          i = o.__WZQ__,
          r = o.__MP__,
          s = (o.IS_WZQ_XCX, this.moduleData.params),
          l = s.symbol,
          u = s.stockName,
          d = t.utils.splitSymbol(l),
          c = d.market,
          p = d.scode;
        if (n) {
          if (t.utils.isHKMarket(c)) return;
          return {
            url: "qqstock://StockDetail?info=".concat(
              encodeURIComponent(
                JSON.stringify({
                  code: l,
                  name: u,
                  selectedTabTitle: "资金",
                  selectedSubTabTitle: "历史主力资金趋势",
                })
              )
            ),
          };
        }
        return (null == (a = e.StockBridge) ? void 0 : a.ENV) ===
          e.EnvTypeEnum.WZQ_LITE
          ? {
              path: "/quote/detail",
              query: {
                scode: p,
                market: c,
                tab: "fund",
                tabModule: t.utils.isHKMarket(c)
                  ? "historytrendHK"
                  : "mainFund",
              },
            }
          : i
          ? t.utils.isHKMarket(c)
            ? {
                path: "/funds_analysis/index.shtml",
                query: {
                  scode: p,
                  market: c,
                  unit: "10000",
                  priceFixed: "3",
                  type: "2",
                  tab: "historytrendHK",
                },
              }
            : {
                path: "/trade/stock_detail.shtml",
                query: {
                  scode: p,
                  type: c,
                  tabs: "diagnose",
                  tabModule: "capital",
                },
              }
          : r
          ? t.utils.isHKMarket(c)
            ? {
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/funds_analysis/index.shtml?scode="
                      .concat(p, "&market=")
                      .concat(
                        c,
                        "&unit=10000&priceFixed=3&isIndex=&isFund=&type=2&tab=historytrendHK"
                      )
                  )
                ),
              }
            : {
                url: "/pages/quote/quote?market="
                  .concat(c, "&scode=")
                  .concat(p, "&tab=fund&tabCurrentModule=mainFund"),
              }
          : void 0;
      },
      getSaleEmptyPage: function () {
        var a, o;
        this.report("saleemptyhk_click");
        var n = this.env,
          i = n.__APP__,
          r = (n.__WZQ__, n.__MP__, n.IS_WZQ_XCX, this.moduleData.params),
          s = r.symbol,
          l = r.stockName,
          u = t.utils.splitSymbol(s),
          d = u.market,
          c = u.scode;
        if (i) {
          var p = t.utils.isUSMarket(d) ? "简况" : "资金";
          return {
            url: "qqstock://StockDetail?info=".concat(
              encodeURIComponent(
                JSON.stringify({
                  code: s,
                  name: l,
                  selectedTabTitle: p,
                  selectedSubTabTitle: "卖空比例",
                })
              )
            ),
          };
        }
        if (
          (null == (a = e.StockBridge) ? void 0 : a.ENV) ===
          (null == (o = e.EnvTypeEnum) ? void 0 : o.WZQ_LITE)
        ) {
          if (t.utils.isUSMarket(d)) return;
          return {
            path: "/quote/detail",
            query: {
              scode: c,
              market: d,
              tab: "fund",
              tabModule: "hkSaleEmpty",
            },
          };
        }
      },
      gotoStockDetail: function (a) {
        var o,
          n,
          i,
          r = this.env,
          s = r.__APP__,
          l = r.__WZQ__,
          u = r.__MP__,
          d = r.IS_WZQ_XCX,
          c = t.utils.splitSymbol(a.code),
          p = c.market,
          m = c.scode;
        if (s)
          i = {
            url: "qqstock://detailstock/".concat(a.code, "/").concat(a.name),
          };
        else {
          if (u || d)
            return (
              (i = {
                url: "/pages/quote/quote?market="
                  .concat(p, "&scode=")
                  .concat(m),
              }),
              void (e.wx$1 && e.wx$1.navigateTo
                ? e.wx$1.navigateTo(i)
                : null ==
                    (n =
                      null == (o = null == window ? void 0 : window.wx)
                        ? void 0
                        : o.miniProgram) || n.navigateTo(i))
            );
          l &&
            (i = {
              path: "/trade/stock_detail.shtml",
              query: { scode: m, type: p },
            });
        }
        this.routeToPage(i);
      },
      routeToPage: function (t) {
        t &&
          (this.env.__APP__
            ? this.shy.navigateTo(t)
            : e.StockBridge && e.StockBridge.routeTo
            ? e.StockBridge.routeTo(t)
            : this.$router && this.$router.push && this.$router.push(t));
      },
      report: function (t) {
        var a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = this.env.__APP__;
        o && this.shy && this.shy.reportAnalytics
          ? this.shy.reportAnalytics({
              eventName: "".concat(this.reportPageName, ".").concat(t),
              dataObject: a,
            })
          : e.StockBridge &&
            e.StockBridge.report &&
            e.StockBridge.report(
              "".concat(this.reportPageName, ".").concat(t),
              a
            );
      },
      dataReport: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("dataReport", e, t);
      },
      brokerGoldStockRequestFail: function () {
        this.isBrokerGoldStock && (this.canShowModuleWrapper = !1);
      },
      hideModule: function () {
        (this.isETFChange || this.isETFList) &&
          (this.showNoduleEtfListOrEtfChange = !1);
      },
    },
  };
Array ||
  (
    e.resolveComponent("PlateBox") +
    e.resolveComponent("BoardList") +
    e.resolveComponent("StockChart") +
    e.resolveComponent("NationalDebt") +
    e.resolveComponent("BrokerGoldStock") +
    e.resolveComponent("LongHuList") +
    e.resolveComponent("ETFList") +
    e.resolveComponent("ETFChange") +
    e.resolveComponent("MainFundHS") +
    e.resolveComponent("SaleEmptyHK") +
    e.resolveComponent("FinCalWidget") +
    e.resolveComponent("ModuleWraper")
  )();
var s = e._export_sfc(r, [
  [
    "render",
    function (t, a, o, n, i, r) {
      return e.e(
        { a: r.shouldShowModule },
        r.shouldShowModule
          ? e.e(
              {
                b:
                  r.moduleData &&
                  r.moduleData.type &&
                  i.showNoduleEtfListOrEtfChange,
              },
              r.moduleData &&
                r.moduleData.type &&
                i.showNoduleEtfListOrEtfChange
                ? e.e(
                    { c: r.isPlate },
                    r.isPlate
                      ? {
                          d: e.o(r.report, 5094),
                          e: e.p({
                            params: r.moduleData.params,
                            theme: o.theme,
                            pageType: o.pageType,
                            moduleData: r.moduleData,
                            newsId: o.newsId,
                          }),
                        }
                      : {},
                    { f: r.isBoard },
                    r.isBoard
                      ? {
                          g: e.o(r.report, 5095),
                          h: e.p({
                            data: r.moduleData.params,
                            theme: o.theme,
                            pageType: o.pageType,
                            moduleData: r.moduleData,
                            newsId: o.newsId,
                          }),
                        }
                      : {},
                    { i: r.isMinsChart || r.isKlineChart },
                    r.isMinsChart || r.isKlineChart
                      ? {
                          j: e.p({
                            "chart-type": r.isKlineChart ? "kline" : "mins",
                            params: r.moduleData.params,
                            skin: "black" === o.theme ? "dark" : "plain",
                            isMp: r.env.__MP__,
                          }),
                        }
                      : {},
                    { k: r.isNationalDebt },
                    r.isNationalDebt
                      ? {
                          l: e.o(function (e) {
                            r.handleClick({
                              eventName: "gotoDetail",
                              params: e,
                            });
                          }, 5096),
                          m: e.o(r.gotoStockDetail, 5097),
                          n: e.o(r.routeToPage, 5098),
                          o: e.o(r.report, 5099),
                          p: e.p({
                            userInfo: o.userInfo,
                            showNationDebtHeader: o.showNationDebtHeader,
                            showNationDebtExpandBtn: o.showNationDebtExpandBtn,
                            hasBorder: o.showNationDebtBorder,
                            openAccountText: o.openAccountText,
                            reportPageName: o.reportPageName,
                            statData: o.nationDebtStatData,
                          }),
                        }
                      : {},
                    { q: r.isBrokerGoldStock },
                    r.isBrokerGoldStock
                      ? {
                          r: e.o(r.gotoStockDetail, 5100),
                          s: e.o(r.routeToPage, 5101),
                          t: e.o(r.report, 5102),
                          v: e.o(r.brokerGoldStockRequestFail, 5103),
                          w: e.p({
                            userInfo: o.userInfo,
                            reportPageName: o.reportPageName,
                            brokerStockRankId: r.moduleData.goldStockRankID,
                            newsPublishTime: o.publishTime,
                            theme: o.theme,
                            newsId: o.newsId,
                            accountOpenFlag: o.accountOpenFlag,
                          }),
                        }
                      : {},
                    { x: r.isLONGHUBANG },
                    r.isLONGHUBANG
                      ? {
                          y: e.o(function (e) {
                            r.handleClick({
                              eventName: "gotoDetail",
                              params: e,
                            });
                          }, 5104),
                          z: e.o(r.gotoStockDetail, 5105),
                          A: e.o(r.routeToPage, 5106),
                          B: e.o(r.report, 5107),
                          C: e.p({
                            params: r.moduleData.params,
                            theme: o.theme,
                            userInfo: o.userInfo,
                            pageType: o.pageType,
                            moduleData: r.moduleData,
                            newsId: o.newsId,
                          }),
                        }
                      : {},
                    { D: r.isETFList },
                    r.isETFList
                      ? {
                          E: e.o(function (e) {
                            r.handleClick({
                              eventName: "gotoDetail",
                              params: e,
                            });
                          }, 5108),
                          F: e.o(r.gotoStockDetail, 5109),
                          G: e.o(r.routeToPage, 5110),
                          H: e.o(r.report, 5111),
                          I: e.o(r.hideModule, 5112),
                          J: e.p({
                            params: r.moduleData.params,
                            theme: o.theme,
                            userInfo: o.userInfo,
                            pageType: o.pageType,
                            moduleData: r.moduleData,
                            newsId: o.newsId,
                          }),
                        }
                      : {},
                    { K: r.isETFChange },
                    r.isETFChange
                      ? {
                          L: e.o(function (e) {
                            r.handleClick({
                              eventName: "gotoDetail",
                              params: e,
                            });
                          }, 5113),
                          M: e.o(r.gotoStockDetail, 5114),
                          N: e.o(r.report, 5115),
                          O: e.o(r.hideModule, 5116),
                          P: e.p({
                            params: r.moduleData.params,
                            theme: o.theme,
                            pageType: o.pageType,
                            moduleData: r.moduleData,
                            newsId: o.newsId,
                          }),
                        }
                      : {},
                    { Q: r.isMainFund },
                    r.isMainFund
                      ? {
                          R: e.p({
                            "is-widget": !0,
                            symbol: r.moduleData.params.symbol,
                            "stock-name": r.moduleData.params.stockname,
                            end: r.moduleData.params.date,
                            mainNetIn: r.moduleData.params.mainNetIn,
                            rank: r.moduleData.params.rank,
                            mcRatio: r.moduleData.params.mcRatio,
                            skin: o.theme,
                          }),
                        }
                      : {},
                    { S: r.isSaleEmpty },
                    r.isSaleEmpty
                      ? {
                          T: e.p({
                            "is-widget": !0,
                            "pixel-ratio": 1,
                            symbol: r.moduleData.params.symbol,
                            "stock-name": r.moduleData.params.stockname,
                            end: r.moduleData.params.date,
                            skin: o.theme,
                          }),
                        }
                      : {},
                    { U: r.isFinCal && r.enableFinCal },
                    r.isFinCal && r.enableFinCal
                      ? { V: e.p({ model: r.finCalModel }) }
                      : {},
                    {
                      W: e.o(function (e) {
                        return r.handleClick({ eventName: "gotoDetail" });
                      }, 5117),
                      X: e.o(r.report, 5118),
                      Y: e.p({
                        canShowModuleWrapper: i.canShowModuleWrapper,
                        moduleData: r.moduleData,
                        enableJump: r.enableJump,
                        showBottomDetail: r.showDetail,
                        showAddFav: o.showAddFav,
                        stockInitailAdded: o.stockInitailAdded,
                        noneMargin: o.noneMargin,
                        accountOpenFlag: o.accountOpenFlag,
                        skin: o.theme,
                        pageType: o.pageType,
                        newsId: o.newsId,
                      }),
                    }
                  )
                : {},
              { Z: e.n(o.theme) }
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(s);
var l = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXdpZGdldC9Nb2R1bGUudnVl =
  l),
  (exports.getGoldStockTitleImgName = function (e, t) {
    var a = "",
      o = "black" == t;
    switch (e) {
      case "1":
        a = o
          ? "776316bbbe7ed70a284ed1d9497ad456.png"
          : "a26981ae0ad00280df791a1b9069ece2.png";
        break;
      case "2":
        a = o
          ? "791db769300e812838438cbe85778ff9.png"
          : "4db39eceea71f10f0f61d4ac4f85dad1.png";
        break;
      case "3":
        a = o
          ? "d3ad1f496b8825628278ce5574973d02.png"
          : "b17de5e7c2eff2eefcb1afa7eb4f724e.png";
        break;
      case "4":
        a = o
          ? "284d7a11f4079ccee5fbc3173db0d99b.png"
          : "f65fcc40935ea9be6feb8eefc77bbbc7.png";
        break;
      case "5":
        a = o
          ? "6dafeb15e4cc32120f5ace788984f5a2.png"
          : "a8836e73817d4d34b54451dc3bea9ee0.png";
        break;
      case "6":
        a = o
          ? "3da81b444596fbc9d13771eaa397b24b.png"
          : "3ae46aac9472307d7ce226daefb3a541.png";
        break;
      case "7":
        a = o
          ? "965fba7eb5b2d7ff5cee73313ebaa9e2.png"
          : "3491babe99fb2c1a3e6bc422abdce512.png";
        break;
      case "8":
        a = o
          ? "ea2535e1f76999b886ad03f7e3c40984.png"
          : "2b2c5de203b14893e890c2159e9805ec.png";
        break;
      case "9":
        a = o
          ? "75f03b77b380c7b6964fcf3b8229a7c8.png"
          : "a360c39952b79b4c44c4951fa4ff12b2.png";
        break;
      case "10":
        a = o
          ? "af19c5e62004c451a460c1c07ddde837.png"
          : "4437bc54da76e2d25166facea681f09c.png";
        break;
      case "11":
        a = o
          ? "b7f041329e919404c5a9e8f51ec89efe.png"
          : "b07cea539931dad2764d10005d2553a9.png";
        break;
      case "12":
        a = o
          ? "792a94a892c058c95b84be69a2d13317.png"
          : "8767b95cb4cb0bf70211a3c7917595e3.png";
    }
    return "".concat(a);
  }),
  (exports.getMonth = function (e) {
    var t = (function (e) {
      return {
        year: (e = new Date(1e3 * e)).getFullYear(),
        Month: e.getMonth() + 1,
        Date: e.getDate() < 10 ? "0".concat(e.getDate()) : e.getDate(),
        Hour: e.getHours() < 10 ? "0".concat(e.getHours()) : e.getHours(),
        Minu: e.getMinutes() < 10 ? "0".concat(e.getMinutes()) : e.getMinutes(),
        Sec: e.getSeconds() < 10 ? "0".concat(e.getSeconds()) : e.getSeconds(),
      };
    })(e);
    return "".concat(t.Month);
  });
