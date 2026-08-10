var t = require("../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  s = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  l = function (t, e, i) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = function (t, e) {
    for (var i in e || (e = {})) c.call(e, i) && l(t, i, e[i]);
    if (o) {
      var a,
        n = s(o(e));
      try {
        for (n.s(); !(a = n.n()).done; ) {
          i = a.value;
          h.call(e, i) && l(t, i, e[i]);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
    return t;
  },
  d = function (t, e) {
    return n(t, r(e));
  },
  k = function (t, e, i) {
    return new Promise(function (s, a) {
      var n = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            a(t);
          }
        },
        r = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            a(t);
          }
        },
        o = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(n, r);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  b = require("../../../@tencent/stock-hq-data/index.js"),
  m = require("../../ChartWrapper.js"),
  f = require("../../../config/quoteEnum.js"),
  g = getApp().globalData,
  S = {
    components: {
      Mins: function () {
        return "./Mins.js";
      },
      FiveMins: function () {
        return "./FiveMins.js";
      },
      Kline: function () {
        return "./Kline.js";
      },
      MinsBar: function () {
        return "../../../@tencent/stock-hq-chart/components/MinusTouchbar.js";
      },
      KlineBar: function () {
        return "../../../@tencent/stock-hq-chart/components/KlineTouchbar.js";
      },
      Selector: function () {
        return "../components/Selector.js";
      },
      Handicap: function () {
        return "../../../@tencent/wzq-detail-trade-detail/components/Handicap.js";
      },
      TradeDetail: function () {
        return "../components/TradeDetail.js";
      },
      BigDeal: function () {
        return "../components/BigDeal.js";
      },
      MinsIndicatorBar: function () {
        return "../../../@tencent/stock-hq-chart/components/MinsIndicatorBar.js";
      },
      IndicatorBar: function () {
        return "../../../@tencent/stock-hq-chart/components/IndicatorBar.js";
      },
      SettingPopup: function () {
        return "../../../@tencent/stock-hq-chart/components/SettingPopup/modal.js";
      },
      SettingTipBubble: function () {
        return "../../../@tencent/stock-hq-chart/components/SettingPopup/components/SettingTipBubble.js";
      },
      AreaSelectbar: function () {
        return "../../../@tencent/wzq-hq-chart/components/KlineAreaSelectTouchbar.js";
      },
      DrawBoard: function () {
        return "../../../@tencent/stock-detail-drawline/dynamicBoard/index.js".then(
          function (t) {
            return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1kcmF3bGluZS9keW5hbWljQm9hcmQvaW5kZXgudnVl;
          }
        );
      },
      FqBubble: function () {
        return "../../../@tencent/stock-hq-chart/components/SettingPopup/FqBubble.js";
      },
      FqSwitchDialog: function () {
        return "../../../@tencent/stock-hq-chart/components/SettingPopup/FqSwitchDialog.js";
      },
    },
    props: {
      width: Number,
      height: Number,
      skin: String,
      market: String,
      scode: String,
      currency: String,
      hideMoreTabs: Boolean,
      hideHandicap: Boolean,
      added: Boolean,
      quote: Object,
      customSetting: Object,
      landscape: Boolean,
      queryTabKey: String,
      isAccountOpen: Boolean,
      hkVIP: Boolean,
      canShowAiVolatile: { type: Boolean, default: !1 },
      canShowSupportPressureSignal: { type: Boolean, default: !1 },
      remindSubscribeInfo: Object,
      stockType: { type: String, default: "" },
    },
    data: function () {
      return {
        sideIndex: 0,
        side: ["五档", "明细", "大单"],
        HQ_CHART_COMPOSITION: !0,
        tabKey: f.TABS[0].key,
        tabVisited: { mins: !0, fiveMins: !1, kline: !1 },
        moreTabs: f.MORE_TABS,
        moreTabName: "",
        moreTabSelected: !1,
        initSelector: !1,
        kType: "day",
        lastUpdateTime: 0,
        isTrading: !1,
        ensureTimeout: null,
        minsOptions: null,
        showDataBar: !1,
        minsBarData: null,
        klineBarData: null,
        chartHeight: 0,
        sideWidth: 0,
        sideTabs: f.SIDE_TABS,
        sideTabKey: f.SIDE_TABS[0].key,
        sideTabVisited: { handicap: !0, tradeDetail: !1, bigDeal: !1 },
        defaultSetting: m.getDefaultSetting(),
        showSettingPopup: !1,
        isAuctionTime: !1,
        isWaitingForTrading: !1,
        activeButtons: { showDraw: !1, showChip: !1, showAreaSelect: !1 },
        indicatorWidth: 0,
        enableDrawBoard: !0,
        openLandTimer: null,
        bigDeal: { lastStart: "" },
        areaSelectData: null,
        isTabLoaded: !1,
        drawlineData: null,
        drawOptions: null,
        drawLayout: null,
        showFqSwitchDialog: !1,
        showFqBubble: !1,
        fqBubblePosition: null,
      };
    },
    computed: {
      tabs: function () {
        var t = this;
        return f.TABS.filter(function (e) {
          return "fiveMins" !== e.key || !b.utils.isForex(t.market);
        });
      },
      yearNames: function () {
        var t = this;
        return f.YEAR_NAME.filter(function (e) {
          return (
            "allYearKline" !== e.key ||
            (!b.utils.isFutures(t.market) && !b.utils.isSPMarket(t.market))
          );
        });
      },
      isSupportTradeLine: function () {
        return (
          b.utils.isHSMarket(this.market) &&
          ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType)
        );
      },
      isSupportFq: function () {
        return !(
          b.utils.isIndex(this.stockType) ||
          b.utils.isHSPlate(this.market) ||
          b.utils.isDebt(this.stockType) ||
          b.utils.isNationalDebt(this.stockType) ||
          b.utils.isTransferableDebt(this.stockType) ||
          b.utils.isWarrants(this.stockType) ||
          b.utils.isFutures(this.market) ||
          b.utils.isSPMarket(this.market) ||
          b.utils.isForex(this.market)
        );
      },
      hasAuctionMarket: function () {
        return b.utils.isBJMarket(this.market)
          ? "ETF" === this.stockType
          : (b.utils.isHSMarket(this.market) ||
              b.utils.isHKMarket(this.market)) &&
              !b.utils.isIndex(this.stockType) &&
              !b.utils.isHSPlate(this.market);
      },
      symbol: function () {
        return b.utils.getSymbol(this.market, this.scode);
      },
      wraperStyle: function () {
        return "width: ".concat(this.width, "px;");
      },
      chartWidth: function () {
        var t = "mins" === this.tabKey ? this.sideWidth : 0,
          e =
            this.showMinsIndicatorBar || this.showIndicatorBar
              ? this.indicatorWidth + 32
              : 0;
        return this.width - t - e - 8;
      },
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      isPCWeixin: function () {
        var t, e;
        return (
          (null == (e = null == (t = g.detect) ? void 0 : t.env)
            ? void 0
            : e.IS_PCWEIXIN) || !1
        );
      },
      showMoreTabs: function () {
        return !(
          this.hideMoreTabs ||
          b.utils.isBJMarket(this.market) ||
          b.utils.isNQMarket(this.market) ||
          b.utils.isUKMarket(this.market) ||
          b.utils.isFTIndex(this.market) ||
          b.utils.isFutures(this.market) ||
          b.utils.isSPMarket(this.market) ||
          b.utils.isForex(this.market)
        );
      },
      showSideArea: function () {
        var t;
        return this.landscape
          ? this.showTradeDetail
          : this.showTradeDetail &&
              "mins" === this.tabKey &&
              (null == (t = this.setting.minsSetting) ? void 0 : t.showFive);
      },
      hkAndHKVIP: function () {
        return b.utils.isHKMarket(this.market) && this.hkVIP;
      },
      showTradeDetail: function () {
        return (
          this.quote &&
          !b.utils.isForex(this.market) &&
          !b.utils.isSPMarket(this.market) &&
          !this.hideHandicap &&
          (b.utils.isHSMarket(this.market) ||
            this.hkAndHKVIP ||
            b.utils.isBJMarket(this.market) ||
            b.utils.isNQMarket(this.market) ||
            (b.utils.isFutures(this.market) &&
              !b.utils.isHDFutures(this.market))) &&
          !b.utils.isIndex(this.stockType)
        );
      },
      showSideTabs: function () {
        return !b.utils.isNQMarket(this.market) && this.sideTabs.length > 1;
      },
      showLandscape: function () {
        return !this.landscape && !this.isPCWeixin;
      },
      isMoreKline: function () {
        return (
          this.landscape &&
          !b.utils.isBJMarket(this.market) &&
          !b.utils.isNQMarket(this.market) &&
          !b.utils.isForex(this.market)
        );
      },
      showMinsIndicatorBar: function () {
        return this.landscape && "mins" === this.tabKey;
      },
      showIndicatorBar: function () {
        return (
          this.landscape && "mins" !== this.tabKey && "fiveMins" !== this.tabKey
        );
      },
      minsIndicator: function () {
        return this.setting.minsIndicator;
      },
      mainIndicator: function () {
        return this.setting.mainIndicator;
      },
      firstIndicator: function () {
        var t = this.setting.firstIndicator;
        return b.utils.isHKMarket(this.market) &&
          b.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      isBCCurrency: function () {
        return b.utils.isBCCurrency(this.market);
      },
      tabIndex: function () {
        var t = this,
          e = this.tabs.findIndex(function (e) {
            return e.key === t.tabKey;
          });
        return e > 1
          ? e
          : (e = this.moreTabs.findIndex(function (e) {
              return e.key === t.tabKey;
            })) >= 0
          ? 2
          : (e = this.yearNames.findIndex(function (e) {
              return e.key === t.tabKey;
            })) >= 0
          ? 6
          : 0;
      },
      fqType: function () {
        return b.utils.isIndex(this.stockType) ||
          b.utils.isHSPlate(this.market) ||
          b.utils.isDebt(this.stockType) ||
          b.utils.isNationalDebt(this.stockType) ||
          b.utils.isTransferableDebt(this.stockType) ||
          b.utils.isWarrants(this.stockType) ||
          b.utils.isFutures(this.market) ||
          b.utils.isSPMarket(this.market) ||
          b.utils.isNQMarket(this.market) ||
          /^m(1|5|10|15|20|30|60|120)/.test(this.tabKey)
          ? 3
          : b.utils.isUSMarket(this.market)
          ? 2 === this.setting.fq
            ? 1
            : this.setting.fq
          : this.setting.fq || 1;
      },
    },
    watch: {
      quote: function (t, e) {
        var i, s;
        0 !== Object.keys(e).length &&
          ("mins" === this.tabKey &&
          this.isTrading &&
          (b.utils.isHSMarket(this.market) || b.utils.isBJMarket(this.market))
            ? (null == (i = this.$refs.mins) || i.handlePush(this.quote),
              this.ensureMarketState(),
              "tradeDetail" === this.sideTabKey &&
                (null == (s = this.$refs.tradeDetail) || s.updateData()))
            : this.updateData());
      },
      setting: function (t, e) {
        var i,
          s,
          a = this;
        "mins" === this.tabKey &&
          this.showTradeDetail &&
          (null == (i = t.minsSetting) ? void 0 : i.showFive) !==
            (null == (s = e.minsSetting) ? void 0 : s.showFive) &&
          ((this.tabVisited.mins = !1),
          this.setChartArea(),
          this.$nextTick(function () {
            a.tabVisited.mins = !0;
          }));
      },
    },
    created: function () {
      var t = this;
      this.detailApi ||
        (this.detailApi = new b.DetailApi(function () {
          for (var t, e = arguments.length, i = new Array(e), s = 0; s < e; s++)
            i[s] = arguments[s];
          return 1 === i.length
            ? p.StockBridge.request(i[0], "GET", {}, { forceCallback: !0 })
            : (i[3] && (i[3].forceCallback = !0),
              (t = p.StockBridge).request.apply(t, i));
        })),
        this.isBCCurrency &&
          (this.moreTabs = [
            { key: "m10Kline", value: "10分" },
            { key: "m20Kline", value: "20分" },
          ].concat(i(f.MORE_TABS.slice(3)))),
        (this.sideWidth = this.showSideArea ? g.rpxToPx(210) : 0),
        (b.utils.isBJMarket(this.market) ||
          b.utils.isNQMarket(this.market) ||
          b.utils.isFutures(this.market)) &&
          (this.sideTabs = this.sideTabs.slice(0, 2)),
        b.utils.isFutures(this.market) &&
          ((this.sideTabs = this.sideTabs.filter(function (t) {
            return "handicap" !== t.key;
          })),
          (this.sideTabVisited.handicap = !1),
          this.sideTabs.length &&
            ((this.sideTabKey = this.sideTabs[0].key),
            (this.sideTabVisited[this.sideTabKey] = !0))),
        b.utils.isHKMarket(this.market) || this.ensureMarketState(),
        this.setChartArea(),
        this.queryTabKey &&
          this.$nextTick(function () {
            t.moreTabs.findIndex(function (e) {
              return e.key === t.queryTabKey;
            }) >= 0
              ? t.switchMoreChart(t.queryTabKey)
              : t.switchChart(t.queryTabKey, !0);
          }),
        p.StockBridge.busOn(
          "market-chart-setting-fqChange",
          this.handleFqChange
        );
    },
    beforeUnmount: function () {
      clearTimeout(this.ensureTimeout),
        clearTimeout(this.fqBubbleTimer),
        p.StockBridge.busOff(
          "market-chart-setting-fqChange",
          this.handleFqChange
        );
    },
    methods: {
      handleError: function (t) {
        p.StockBridge.aegisReportEvent("MONITOR-QUOTEDETAIL-INIT-CANVAS-FAIL", {
          ext3: JSON.stringify({ message: t.key, options: t.options }),
        });
      },
      openLandscape: function () {
        var t = this;
        if (this.landscape) this.$emit("closeLandscape");
        else {
          this.openLandTimer && clearTimeout(this.openLandTimer),
            (this.openLandTimer = setTimeout(
              function () {
                t.$emit("openLandscape", { tabKey: t.tabKey });
              },
              this.enableDrawBoard ? 200 : 0
            ));
          var e = "mins" === this.tabKey || "fiveMins" === this.tabKey;
          p.StockBridge.report(
            e ? "stocklist.stock_rotate" : "stocklist.stock_rotate_kline",
            { stockid: this.symbol }
          );
        }
      },
      showAreaSelect: function (t) {
        (this.areaSelectData = t), (this.showDataBar = !!t);
      },
      onAreaSwitch: function (t) {
        (this.showDataBar = t && this.landscape),
          (this.activeButtons.showAreaSelect = t);
      },
      onChipSwitch: function (t) {
        this.activeButtons.showChip = t;
      },
      switchMinsIndicator: function (t) {
        this.$refs.mins && this.$refs.mins.switchIndicator(1, t);
      },
      switchFq: function (t) {
        var e,
          i = this;
        null == (e = this.$refs.kline) ||
          e.onAreaSwitch({ isShowAreaSelect: !1 }),
          (this.setting.fq = t),
          this.updateSetting(this.setting),
          this.$nextTick(function () {
            i.updateData(!0);
          });
      },
      switchIndicatorLandscape: function (t, e) {
        this.$refs.kline && this.$refs.kline.switchIndicator(t, e);
      },
      getInnerRef: function (t) {
        var e = /Kline/.test(this.tabKey) ? "kline" : this.tabKey;
        return t ? this.$refs[e].$refs.chart : this.$refs[e];
      },
      getRectForMP: function (t, e) {
        return new Promise(function (i) {
          p.wx$1
            .createSelectorQuery()
            .in(t)
            .select(e)
            .boundingClientRect(function (t) {
              i(t);
            })
            .exec();
        });
      },
      setChartArea: function () {
        var t = this;
        this.landscape
          ? this.$nextTick(function () {
              return k(
                t,
                null,
                e().mark(function t() {
                  var i, s, a, n, r;
                  return e().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), this.getRectForMP(this, "#tabbar")
                            );
                          case 2:
                            if (
                              ((i = t.sent),
                              (s = i.height),
                              (a = 2 * s + g.rpxToPx(40)),
                              !this.$refs.indiBar)
                            ) {
                              t.next = 11;
                              break;
                            }
                            return (
                              (t.next = 8),
                              this.getRectForMP(this.$refs.indiBar, ".menu-box")
                            );
                          case 8:
                            (n = t.sent),
                              (r = n.width),
                              (this.indicatorWidth = r);
                          case 11:
                            this.chartHeight = this.height - a;
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            })
          : ((this.sideWidth = this.showSideArea ? g.rpxToPx(210) : 0),
            (this.chartHeight = (this.height * this.setting.chartRatio) / 100));
      },
      resetChart: function (t) {
        var e,
          i = this;
        (this.showDataBar = !1), this.setChartArea();
        var s = /Kline/.test(this.tabKey) ? "kline" : this.tabKey,
          a = null == (e = this.$refs[s]) ? void 0 : e.options;
        a &&
          ((this.$refs[s].options = null),
          this.$nextTick(function () {
            (a.options.setting = i.setting),
              (i.$refs[s].options = a),
              i.$nextTick(function () {
                i.updateData(!0),
                  i.$nextTick(function () {
                    i.moreTabs.findIndex(function (e) {
                      return e.key === t;
                    }) >= 0
                      ? i.switchMoreChart(t)
                      : i.switchChart(t, !0);
                  });
              });
          }));
      },
      updateData: function (t) {
        var e,
          i,
          s,
          a = new Date().getTime();
        (t || a - this.lastUpdateTime >= 5e3) &&
          ((this.lastUpdateTime = a),
          /Kline/.test(this.tabKey)
            ? null == (e = this.$refs.kline) || e.updateData()
            : null == (i = this.$refs[this.tabKey]) || i.updateData(),
          "tradeDetail" === this.sideTabKey &&
            (null == (s = this.$refs.tradeDetail) || s.updateData()),
          this.ensureMarketState());
      },
      switchChart: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.moreTabSelected = !1;
        var i = this.tabKey;
        i !== t && this.closeFqBubble(),
          /Kline/.test(i)
            ? this.$refs.kline && this.$refs.kline.tabDeactivated()
            : this.$refs[i] && this.$refs[i].tabDeactivated(),
          (this.tabKey = t),
          this.setChartArea(),
          /Kline/.test(t)
            ? ((this.tabVisited.mins = !1),
              (this.tabVisited.fiveMins = !1),
              (this.kType = t.slice(0, -5)),
              this.tabVisited.kline
                ? this.$refs.kline.tabActivated(this.kType)
                : (this.tabVisited.kline = !0))
            : ((this.tabVisited.kline = !1),
              (this.tabVisited.mins = "mins" === t),
              (this.tabVisited.fiveMins = "fiveMins" === t)),
          (this.activeButtons.showDraw = !1),
          this.$emit("switchChart", t);
        var s = {
          mins: "stocklist.quotation_minutes",
          fiveMins: "stocklist.quotation_fiveday",
          dayKline: "stocklist.quotation_dayk",
          weekKline: "stocklist.quotation_weekk",
          monthKline: "stocklist.quotation_monthk",
          oneMonthKline: "hq.detail.kline.oneMonth_click",
          threeMonthKline: "hq.detail.kline.threemonth_click",
          halfYearKline: "hq.detail.kline.halfyear_click",
          oneYearKline: "hq.detail.kline.oneyear_click",
          threeYearKline: "hq.detail.kline.threeyear_click",
          fiveYearKline: "hq.detail.kline.fiveyear_click",
          allYearKline: "hq.detail.kline.total_click",
        }[t];
        e || p.StockBridge.report(s, { stockid: this.symbol });
      },
      onPopupMore: function () {
        var t = this;
        (this.initSelector = !0),
          this.$nextTick(function () {
            t.$refs.selector.onPopupMore();
          }),
          p.StockBridge.report("hq.stock_detail.click_more_tab", {
            stockid: this.symbol,
          });
      },
      switchMoreChart: function (t) {
        this.switchChart(t);
        var e = this.moreTabs.findIndex(function (e) {
          return e.key === t;
        });
        e < 0 ||
          ((this.moreTabName = this.moreTabs[e].value),
          (this.moreTabSelected = !0));
      },
      onTouchMove: function (t) {
        this.closeFqBubble(),
          (this.showDataBar = !0),
          /Kline/.test(this.tabKey)
            ? ((t.isMinuteKline = /^m(1|5|10|15|20|30|60|120)/.test(
                this.tabKey
              )),
              (this.klineBarData = t))
            : (this.minsBarData = t);
      },
      onTouchCancel: function () {
        (this.showDataBar =
          !!this.landscape && this.activeButtons.showAreaSelect),
          (this.minsBarData = null),
          (this.klineBarData = null);
      },
      switchSide: function (t) {
        return k(
          this,
          null,
          e().mark(function i() {
            var s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((this.sideTabKey = t),
                        this.sideTabVisited[t] || (this.sideTabVisited[t] = !0),
                        (e.t0 = "bigDeal" === t),
                        !e.t0)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.next = 6),
                        this.detailApi.getBigDeal(
                          {
                            scode: this.scode,
                            market: this.market,
                            need: 100,
                            _appver: 9.5,
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 6:
                      (this.bigDeal = e.sent),
                        (e.t0 =
                          this.bigDeal.detail && this.bigDeal.detail.length);
                    case 8:
                      if (!e.t0) {
                        e.next = 11;
                        break;
                      }
                      (s =
                        this.bigDeal.detail[this.bigDeal.detail.length - 1][4]),
                        (this.bigDeal.lastStart = s ? parseInt(s) : 0);
                    case 11:
                      p.StockBridge.report(
                        {
                          bigDeal: "stock_detail.tab_switch_dadan",
                          handicap: "stock_detail.tab_switch_wudang",
                          tradeDetail: "stock_detail.tab_switch_mingxi",
                        }[t],
                        { stockid: this.symbol }
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      showLesson: function () {
        p.StockBridge.openExtraWebview(
          "https://wzq.tenpay.com/zxgweb/fullTeach/#/school/subject?id=SN202101070957317d2b81d9"
        );
      },
      handleExtra: function (t) {
        var e = t.qt,
          i = t.pandata,
          s = t.attribute,
          a = t.introduce;
        this.getMarketState((null == e ? void 0 : e.market) || t.market),
          (b.utils.isIndex(this.stockType) || b.utils.isHSPlate(this.market)) &&
            this.$emit("getZDP", (null == e ? void 0 : e.zhishu) || t.zhishu),
          b.utils.isUSMarket(this.market) && this.$emit("getUSPanData", i),
          b.utils.isHSMarket(this.market) && this.$emit("getExtraInfo", s),
          b.utils.isHSPlate(this.market) && this.$emit("getIntroduce", a);
      },
      ensureMarketState: function () {
        var t = this;
        clearTimeout(this.ensureTimeout),
          (this.ensureTimeout = setTimeout(function () {
            return k(
              t,
              null,
              e().mark(function t() {
                var i;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!this.detailApi) {
                            t.next = 5;
                            break;
                          }
                          return (
                            (t.next = 3),
                            this.detailApi.getMarketState(
                              { market: this.market, encode: "utf8" },
                              { needProcess: !0 }
                            )
                          );
                        case 3:
                          (i = t.sent), this.getMarketState(i);
                        case 5:
                          this.ensureMarketState();
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          }, 3e4));
      },
      getMarketState: function (t) {
        var e = this;
        if (this.isBCCurrency) this.isTrading = !0;
        else {
          var i =
              ("string" == typeof (t = Array.isArray(t) ? t[0] : t) &&
                t.split("|")) ||
              [],
            s = i
              .map(function (t) {
                return t.split("_");
              })
              .filter(function (t) {
                return b.utils.isHSMarket(e.market) &&
                  (b.utils.isAMarket(e.stockType) ||
                    b.utils.isKeChuangStock(e.stockType) ||
                    b.utils.isChuangYeStock(e.stockType) ||
                    ["ETF", "QDII-ETF"].includes(e.stockType))
                  ? "HSZB" === t[0]
                  : b.utils.isDebt(e.stockType) ||
                    "ZQ-GZ" === e.stockType ||
                    b.utils.isDebtIndex(e.stockType)
                  ? "ZQ" === t[0]
                  : b.utils.isGuoZhengHK(e.stockType)
                  ? "JW" === t[0]
                  : b.utils.isHKMarket(e.market)
                  ? "NEWHK" === t[0]
                  : b.utils.isBJMarket(e.market) ||
                    b.utils.isNQMarket(e.market) ||
                    b.utils.isHSMarket(e.market) ||
                    b.utils.isHSPlate(e.market) ||
                    b.utils.isCSIndex(e.market)
                  ? "NEWSH" === t[0]
                  : b.utils.isUSMarket(e.market)
                  ? "NEWUS" === t[0]
                  : b.utils.isUKMarket(e.market)
                  ? "UK" === t[0]
                  : b.utils.isGermanFTIndex(e.stockType)
                  ? "DE" === t[0]
                  : b.utils.isHDFutures(e.market)
                  ? "HD" === t[0]
                  : b.utils.isSGFutures(e.stockType)
                  ? "SGXS" === t[0]
                  : b.utils.isSPMarket(e.market)
                  ? "SGE" === t[0]
                  : b.utils.isFutures(e.market)
                  ? b.utils.isHDFutures(e.market)
                    ? "HD" === t[0]
                    : e.stockType.includes("_".concat(t[0]))
                  : !!b.utils.isForex(e.market) && t[0] === e.scode;
              });
          !s.length &&
            b.utils.isForex(this.market) &&
            "USDCNY" !== this.scode &&
            s.push([this.scode, "open", "交易中"]),
            s.length &&
              ((this.isAuctionTime = "盘前竞价" === s[0][2]),
              (this.isWaitingForTrading = "等待开盘" === s[0][2]),
              (this.isTrading = "open" === s[0][1]),
              this.$emit("getMarketState", s, i[0], i));
        }
      },
      cancelEvent: function () {
        try {
          /Kline/.test(this.tabKey)
            ? this.$refs.kline.$refs.chart.cancelEvent()
            : this.$refs[this.tabKey].$refs.chart.cancelEvent();
        } catch (t) {}
      },
      changeSetting: function (t) {
        var e,
          i = t.type,
          s = t.value,
          a = { func: "", enabled: !1 };
        switch (i) {
          case "fq":
            (a.func = "fq"), (a.value = s.fq), (this.setting.fq = s.fq);
            break;
          case "cmfb":
            (a.func = "chip"), (a.enabled = s.cmfbChecked);
            break;
          case "trendLine":
            (a.func = "trendLine"), (a.enabled = s.trendLineChecked);
            break;
          case "supportPressureLine":
            (a.func = "supportPressureLine"),
              (a.enabled = s.supportPressureChecked);
            break;
          case "areaSelect":
            (a.func = "areaSelect"),
              (a.enabled = s.areaSelectChecked),
              this.closeSetting();
            break;
          case "magicNine":
            (a.func = "magicNine"), (a.enabled = s.magicNineChecked);
            break;
          case "tradeLine":
            (a.func = "tradeLine"), (a.enabled = s.tradeLineChecked);
        }
        null == (e = this.$refs.kline) || e.chartFuncChange(a);
      },
      updateSetting: function (t) {
        (this.defaultSetting = t), this.$emit("updateSetting", t);
      },
      closeSetting: function () {
        (this.showSettingPopup = !1), this.$emit("moveChartTop", !1);
      },
      goSetting: function () {
        var t, e;
        ["mins", "fiveMins"].includes(this.tabKey) ||
          this.switchChart("dayKline"),
          p.StockBridge.busEmit(
            "market-detail-autoHideTradePanel",
            "chartSetting"
          ),
          null == (t = this.$refs.kline) ||
            t.onAreaSwitch({ isShowAreaSelect: !1 }),
          null == (e = this.$refs.kline) || e.hideHistoryPanel(),
          (this.showSettingPopup = !0),
          this.$emit("changeRefreshStatus", !0),
          this.$emit("moveChartTop", !0);
      },
      handleFuncEvent: function (t) {
        var e,
          i,
          s,
          a,
          n = t.action;
        if (
          "showAreaSelect" === n &&
          (null == (i = null == (e = this.$refs.kline) ? void 0 : e.chartData)
            ? void 0
            : i.length) < 2
        )
          p.StockBridge.toast("区间统计适用于2根K线以上", "none");
        else
          switch (((this.activeButtons[n] = !this.activeButtons[n]), n)) {
            case "showDraw":
              p.StockBridge.report("hq.stock_detail.kline_drawline_click"),
                this.activeButtons.showDraw &&
                  (null ==
                    (a =
                      null == (s = this.$refs.drawBoard)
                        ? void 0
                        : s.setDrawStatus) ||
                    a.call(s, !0));
              break;
            case "showChip":
              p.StockBridge.report("hq.stock_detail.kline_chip_click"),
                this.getInnerRef().onChipSwitch({
                  isShowChip: this.activeButtons[n],
                });
              break;
            case "showAreaSelect":
              this.getInnerRef().onAreaSwitch({
                isShowAreaSelect: this.activeButtons[n],
              });
          }
      },
      handleDrawInit: function (t) {
        var e = t.options,
          i = t.layout;
        (this.drawOptions = e), (this.drawLayout = i);
      },
      handleOptionChange: function (t) {
        var e = t.options,
          i = t.layout;
        (this.drawOptions = e), (this.drawLayout = i);
      },
      handleDrawTouch: function (t) {
        var e, i, s;
        null ==
          (s =
            null == (i = null == (e = this.$refs.kline) ? void 0 : e.$refs)
              ? void 0
              : i.chart) || s.dispatchEvent(t);
      },
      gotDrawData: function (t) {
        this.drawlineData = t;
      },
      saveDraw: function (i) {
        return k(this, arguments, function (i) {
          var s = this,
            a = i.data,
            n = i.shapeType;
          return e().mark(function i() {
            var r, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = JSON.stringify(a)),
                        null == (r = s.$refs.kline) ||
                          r.updateCacheDrawData("shape_kline_".concat(n), o),
                        (s.drawlineData["shape_kline_".concat(n)] = o),
                        (s.drawlineData = Object.assign({}, s.drawlineData)),
                        p.StockBridge.setStorage("quote_drawline_data", {
                          data: s.drawlineData,
                          timestamp: Date.now(),
                        }),
                        (s.activeButtons.showDraw = !1),
                        (e.prev = 2),
                        (e.next = 5),
                        p.batchSet({
                          subIndex: s.symbol,
                          settings: t({}, "shape_kline_".concat(n), o),
                        })
                      );
                    case 5:
                      e.sent.code, (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              null,
              [[2, 8]]
            );
          })();
        });
      },
      handleFqChange: function () {
        this.canShowFqReminder()
          ? ((this.showFqSwitchDialog = !0),
            (this.setting.fqSwitchDialogTime = Date.now()),
            this.updateSetting(
              d(u({}, this.setting), {
                fqSwitchDialogTime: this.setting.fqSwitchDialogTime,
              })
            ))
          : (this.closeFqBubble(),
            p.StockBridge.toast(
              "已切换复权类型，k线和股价可能发生变化",
              "none"
            ));
      },
      closeFqSwitchDialog: function () {
        this.showFqSwitchDialog = !1;
      },
      canShowFqReminder: function () {
        var t = this.setting.fqSwitchDialogTime || 0;
        return Date.now() - t > 2592e6;
      },
      checkFqBubble: function () {
        var t,
          e,
          i = this;
        if (
          "dayKline" === this.tabKey &&
          3 === this.setting.fq &&
          this.isSupportFq &&
          this.canShowFqReminder()
        ) {
          var s =
            null ==
            (e =
              null == (t = this.$refs.kline) ? void 0 : t.getExRightGapPosition)
              ? void 0
              : e.call(t);
          s &&
            ((this.fqBubblePosition = s),
            (this.showFqBubble = !0),
            this.updateSetting(
              d(u({}, this.setting), { fqSwitchDialogTime: Date.now() })
            ),
            clearTimeout(this.fqBubbleTimer),
            (this.fqBubbleTimer = setTimeout(function () {
              i.closeFqBubble();
            }, 5e3)));
        }
      },
      closeFqBubble: function () {
        this.showFqBubble &&
          (clearTimeout(this.fqBubbleTimer), (this.showFqBubble = !1));
      },
      handleFqBubbleJump: function () {
        this.closeFqBubble(), this.landscape || this.goSetting(!0);
      },
      handleDrawEnd: function () {
        var t = this;
        "dayKline" === this.tabKey &&
          this.$nextTick(function () {
            t.isCheckedFqBubble ||
              ((t.isCheckedFqBubble = !0), t.checkFqBubble());
          });
      },
    },
  };
Array ||
  (
    p.resolveComponent("SettingTipBubble") +
    p.resolveComponent("Selector") +
    p.resolveComponent("MinsBar") +
    p.resolveComponent("kline-bar") +
    p.resolveComponent("AreaSelectbar") +
    p.resolveComponent("FqBubble") +
    p.resolveComponent("Mins") +
    p.resolveComponent("FiveMins") +
    p.resolveComponent("Kline") +
    p.resolveComponent("DrawBoard") +
    p.resolveComponent("Handicap") +
    p.resolveComponent("TradeDetail") +
    p.resolveComponent("BigDeal") +
    p.resolveComponent("mins-indicator-bar") +
    p.resolveComponent("indicator-bar") +
    p.resolveComponent("SettingPopup") +
    p.resolveComponent("FqSwitchDialog")
  )();
var w = p._export_sfc(S, [
  [
    "render",
    function (t, e, i, s, a, n) {
      return p.e(
        {
          a: p.f(n.tabs, function (t, e, i) {
            return {
              a: p.t(t.value),
              b: a.tabKey === t.key ? 1 : "",
              c: t.key,
              d: p.o(
                function (e) {
                  return n.switchChart(t.key);
                },
                2820,
                t.key
              ),
            };
          }),
          b: n.showMoreTabs,
        },
        n.showMoreTabs
          ? {
              c: p.t(a.moreTabSelected ? a.moreTabName : "更多"),
              d: a.moreTabSelected ? 1 : "",
              e: p.o(function (t) {
                return n.onPopupMore();
              }, 2821),
            }
          : {},
        { f: p.s(n.isMoreKline && "padding-right: 0"), g: !this.landscape },
        this.landscape
          ? {}
          : p.e(
              { h: i.canShowSupportPressureSignal },
              i.canShowSupportPressureSignal
                ? {
                    i: p.p({
                      skin: i.skin,
                      "storage-key":
                        "hq_setting_support_pressure_signal_tip_shown",
                      lines: ["功能上新！撑压信号，快速识", "别压力位和支撑位"],
                      "exposure-event":
                        "hq.detail.chart.supportPressureSignal.bubble.exposure",
                      "close-event":
                        "hq.detail.chart.supportPressureSignal.bubble.close",
                    }),
                  }
                : i.canShowAiVolatile
                ? {
                    k: p.p({
                      skin: i.skin,
                      "storage-key": "hq_setting_ai_volatile_tip_shown",
                      lines: [
                        "功能上新！券商分析，看黄/蓝柱",
                        "一眼识别涨跌趋势",
                      ],
                      "exposure-event":
                        "hq.detail.chart.aiVolatile.bubble.exposure",
                      "close-event": "hq.detail.chart.aiVolatile.bubble.close",
                    }),
                  }
                : {},
              {
                j: i.canShowAiVolatile,
                l: p.o(function (t) {
                  return n.goSetting(!0);
                }, 2822),
              }
            ),
        { m: n.isMoreKline },
        n.isMoreKline
          ? {
              n: p.f(n.yearNames, function (t, e, i) {
                return {
                  a: p.t(t.value),
                  b: a.tabKey === t.key ? 1 : "",
                  c: t.key,
                  d: p.o(
                    function (e) {
                      return n.switchChart(t.key);
                    },
                    2823,
                    t.key
                  ),
                };
              }),
              o: p.s("padding-left: 0"),
            }
          : {},
        { p: a.initSelector },
        a.initSelector
          ? p.e(
              { q: a.initSelector },
              a.initSelector
                ? {
                    r: p.sr("selector", "545bb323-2"),
                    s: p.p({
                      type: "more",
                      skin: i.skin,
                      indicators: a.moreTabs,
                      indicator: a.tabKey,
                      landscape: i.landscape,
                    }),
                  }
                : {}
            )
          : {},
        { t: a.showDataBar },
        a.showDataBar
          ? p.e(
              { v: a.minsBarData },
              a.minsBarData
                ? {
                    w: p.p({
                      market: i.market,
                      landscape: i.landscape,
                      stockType: i.stockType,
                      data: a.minsBarData,
                    }),
                  }
                : {},
              { x: a.klineBarData },
              a.klineBarData
                ? {
                    y: p.p({
                      market: i.market,
                      landscape: i.landscape,
                      stockType: i.stockType,
                      data: a.klineBarData,
                    }),
                  }
                : {},
              {
                z:
                  i.landscape &&
                  a.areaSelectData &&
                  a.activeButtons.showAreaSelect,
              },
              i.landscape && a.areaSelectData && a.activeButtons.showAreaSelect
                ? {
                    A: p.p({
                      market: i.market,
                      stockType: i.stockType,
                      data: a.areaSelectData,
                    }),
                  }
                : {}
            )
          : {},
        {
          B: p.r("redBag", { minsOptions: a.minsOptions }),
          C: p.o(n.closeFqBubble, 2824),
          D: p.o(n.handleFqBubbleJump, 2825),
          E: p.p({ visible: a.showFqBubble, position: a.fqBubblePosition }),
          F: a.tabVisited.mins,
        },
        a.tabVisited.mins
          ? {
              G: p.sr("mins", "545bb323-7"),
              H: "mins" === a.tabKey,
              I: p.o(n.showLesson, 2826),
              J: p.o(n.handleExtra, 2827),
              K: p.o(n.onTouchMove, 2828),
              L: p.o(n.onTouchCancel, 2829),
              M: p.o(n.openLandscape, 2830),
              N: p.o(n.updateSetting, 2831),
              O: p.o(n.handleError, 2832),
              P: p.p({
                skin: i.skin,
                width: n.chartWidth,
                height: a.chartHeight,
                market: i.market,
                scode: i.scode,
                currency: i.currency,
                assertStockType: i.stockType,
                customSetting: n.setting,
                hideIndicator: !(
                  i.landscape ||
                  (n.setting.minsSetting && n.setting.minsSetting.showIndicator)
                ),
                showAuction:
                  n.setting.minsSetting &&
                  n.setting.minsSetting.showAuction &&
                  n.hasAuctionMarket,
                landscape: i.landscape,
                isAuctionTime: a.isAuctionTime,
                isWaitingForTrading: a.isWaitingForTrading,
                isTrading: a.isTrading,
              }),
            }
          : {},
        { Q: a.tabVisited.fiveMins },
        a.tabVisited.fiveMins
          ? {
              R: p.sr("fiveMins", "545bb323-8"),
              S: "fiveMins" === a.tabKey,
              T: p.o(n.handleExtra, 2833),
              U: p.o(n.onTouchMove, 2834),
              V: p.o(n.onTouchCancel, 2835),
              W: p.o(n.openLandscape, 2836),
              X: p.o(n.updateSetting, 2837),
              Y: p.o(n.handleError, 2838),
              Z: p.p({
                skin: i.skin,
                width: n.chartWidth,
                height: a.chartHeight,
                market: i.market,
                scode: i.scode,
                currency: i.currency,
                hideIndicator: n.isBCCurrency,
                assertStockType: i.stockType,
                customSetting: n.setting,
                landscape: i.landscape,
              }),
            }
          : {},
        { aa: a.tabVisited.kline },
        a.tabVisited.kline
          ? {
              ab: p.sr("kline", "545bb323-9"),
              ac: /Kline/.test(a.tabKey),
              ad: p.o(n.showLesson, 2839),
              ae: p.o(n.handleExtra, 2840),
              af: p.o(n.onTouchMove, 2841),
              ag: p.o(n.onTouchCancel, 2842),
              ah: p.o(n.closeFqBubble, 2843),
              ai: p.o(n.openLandscape, 2844),
              aj: p.o(n.updateSetting, 2845),
              ak: p.o(n.showAreaSelect, 2846),
              al: p.o(n.onAreaSwitch, 2847),
              am: p.o(n.onChipSwitch, 2848),
              an: p.o(n.handleDrawInit, 2849),
              ao: p.o(n.handleOptionChange, 2850),
              ap: p.o(n.gotDrawData, 2851),
              aq: p.o(n.handleDrawEnd, 2852),
              ar: p.o(n.handleError, 2853),
              as: p.p({
                skin: i.skin,
                width: n.chartWidth,
                height: a.chartHeight,
                market: i.market,
                scode: i.scode,
                currency: i.currency,
                assertStockType: i.stockType,
                kType: a.kType,
                fqType: n.fqType,
                added: i.added,
                hideIndicator: n.isBCCurrency,
                customSetting: n.setting,
                landscape: i.landscape,
                showStaticDraw: !a.activeButtons.showDraw && !i.landscape,
                quote: i.quote,
                "remind-subscribe-info": i.remindSubscribeInfo,
              }),
            }
          : {},
        { at: n.showLandscape },
        n.showLandscape
          ? {
              av: p.o(function (t) {
                return n.openLandscape();
              }, 2854),
            }
          : {},
        {
          aw:
            a.tabVisited.kline &&
            i.landscape &&
            a.drawOptions &&
            a.drawLayout &&
            a.drawlineData,
        },
        a.tabVisited.kline &&
          i.landscape &&
          a.drawOptions &&
          a.drawLayout &&
          a.drawlineData
          ? {
              ax: p.sr("drawBoard", "545bb323-10"),
              ay: p.o(n.saveDraw, 2855),
              az: p.o(n.handleDrawTouch, 2856),
              aA: p.p({
                options: a.drawOptions,
                layout: a.drawLayout,
                "drawline-data": a.drawlineData,
                skin: i.skin,
              }),
            }
          : {},
        { aB: "".concat(n.chartWidth, "px"), aC: n.showSideArea },
        n.showSideArea
          ? p.e(
              { aD: a.sideTabVisited.handicap },
              a.sideTabVisited.handicap
                ? {
                    aE: "handicap" === a.sideTabKey,
                    aF: p.p({
                      market: i.market,
                      scode: i.scode,
                      quote: i.quote,
                    }),
                  }
                : {},
              { aG: a.sideTabVisited.tradeDetail },
              a.sideTabVisited.tradeDetail
                ? {
                    aH: p.sr("tradeDetail", "545bb323-12"),
                    aI: "tradeDetail" === a.sideTabKey,
                    aJ: p.p({ market: i.market, scode: i.scode }),
                  }
                : {},
              { aK: a.sideTabVisited.bigDeal },
              a.sideTabVisited.bigDeal
                ? {
                    aL: p.sr("bigDeal", "545bb323-13"),
                    aM: "bigDeal" === a.sideTabKey,
                    aN: p.p({
                      skin: i.skin,
                      market: i.market,
                      scode: i.scode,
                      stockType: i.stockType,
                      bigDeal: a.bigDeal,
                      landscape: i.landscape,
                    }),
                  }
                : {},
              { aO: n.showSideTabs ? 1 : "", aP: n.showSideTabs },
              n.showSideTabs
                ? {
                    aQ: p.f(a.sideTabs, function (t, e, i) {
                      return {
                        a: p.t(t.value),
                        b: a.sideTabKey === t.key ? 1 : "",
                        c: t.key,
                        d: p.o(
                          function (e) {
                            return n.switchSide(t.key);
                          },
                          2857,
                          t.key
                        ),
                      };
                    }),
                  }
                : {},
              {
                aR: "mins" !== a.tabKey ? 1 : "",
                aS: "".concat(a.sideWidth, "px"),
              }
            )
          : {},
        { aT: n.showMinsIndicatorBar },
        n.showMinsIndicatorBar
          ? {
              aU: p.sr("indiBar", "545bb323-14"),
              aV: p.o(n.switchMinsIndicator, 2858),
              aW: p.p({ skin: i.skin, indicator: n.minsIndicator }),
            }
          : {},
        { aX: n.showIndicatorBar },
        n.showIndicatorBar
          ? {
              aY: p.sr("indiBar", "545bb323-15"),
              aZ: p.o(n.switchFq, 2859),
              ba: p.o(n.switchIndicatorLandscape, 2860),
              bb: p.o(n.handleFuncEvent, 2861),
              bc: p.p({
                skin: i.skin,
                scode: i.scode,
                market: i.market,
                stockType: i.stockType,
                kType: a.kType,
                fq: n.fqType,
                index: n.tabIndex,
                mainIndicator: n.mainIndicator,
                indicator: n.firstIndicator,
                enableDraw: a.enableDrawBoard,
                activeButtons: a.activeButtons,
              }),
            }
          : {},
        { bd: "".concat(a.chartHeight, "px"), be: a.showSettingPopup },
        a.showSettingPopup
          ? {
              bf: p.o(n.closeSetting, 2862),
              bg: p.o(n.changeSetting, 2863),
              bh: p.o(n.updateSetting, 2864),
              bi: p.o(n.switchChart, 2865),
              bj: p.p({
                skin: i.skin,
                setting: n.setting,
                market: i.market,
                scode: i.scode,
                stockType: i.stockType,
                tabKey: a.tabKey,
                showTradeDetail: n.showTradeDetail,
                hasAuctionMarket: n.hasAuctionMarket,
                isSupportTradeLine: n.isSupportTradeLine,
                isAccountOpen: i.isAccountOpen,
                canShowAiVolatile: i.canShowAiVolatile,
                canShowSupportPressureSignal: i.canShowSupportPressureSignal,
                "hk-v-i-p": n.hkAndHKVIP,
              }),
            }
          : {},
        {
          bk: p.o(n.closeFqSwitchDialog, 2866),
          bl: p.p({ visible: a.showFqSwitchDialog }),
          bm: i.landscape ? 1 : "",
          bn: "black" === i.skin ? 1 : "",
          bo: p.s(n.wraperStyle),
        }
      );
    },
  ],
  ["__scopeId", "data-v-545bb323"],
]);
wx.createComponent(w);
