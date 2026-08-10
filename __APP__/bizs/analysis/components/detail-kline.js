var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  a = require("../../hq/helper.js"),
  s = require("../../hq/constants.js"),
  o = require("../../../cgi/quote.js"),
  r = require("../../../cgi/stockbst.js"),
  c = require("../../../cgi/band-assist-info.js"),
  l = require("../../../cgi/stock-signal.js"),
  u = require("../../../config/key.js"),
  d = require("../../../stores/app/useMode.js");
require("../../../service/broker.js");
var h = require("../../../service/aegis/platform/not-wujie.js"),
  p = require("../../../utils/market.js"),
  b = require("../../../common/utils/colorHelper.js"),
  g = require("../../../config/broker/11100/index.js"),
  f = new o.QuoteAPI(),
  S = {},
  k = {
    0: "买入",
    1: "买入",
    2: "卖出",
    3: "派息",
    4: "新股入账",
    5: "红利差异税",
    8: "转入",
    9: "转出",
    10: "转入",
    11: "送股",
    12: "信用账户转入",
    13: "信用账户转出",
    18: "配股",
    19: "配债",
    99: "卖出",
  },
  v = { BUILD: 0, BUY: 1, SELL: 2, NEWSTOCK: 4, CLEAN: 99 },
  T = { 1: "前复权", 2: "后复权", 3: "不复权" },
  m = {
    components: {
      kline: function () {
        return "../../../node-modules/@tencent/stock-kline/kline.js";
      },
      StLoading: function () {
        return "../../../common/components/Loading/index.js";
      },
      BubbleTip: function () {
        return "../../../components/BubbleTip/BubbleTip.js";
      },
    },
    props: {
      quote: { type: Object, default: null },
      options: {
        type: Object,
        default: function () {
          return {};
        },
      },
      tradeLists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isDark: { type: Boolean, default: !1 },
      bandAssistAvailable: { type: Boolean, default: !1 },
      bandAssistSubscribed: { type: Boolean, default: !1 },
      stockSignalAvailable: { type: Boolean, default: !1 },
      stockSignalSubscribed: { type: Boolean, default: !1 },
    },
    setup: function () {
      var t = d.useModeStore();
      return { simpleMode: n.storeToRefs(t).simpleMode };
    },
    data: function () {
      return {
        index: 2,
        height: 0,
        width: 0,
        pannelWidth: 0,
        kline: null,
        klineTouchData: null,
        isTrading: !1,
        config: null,
        loading: !0,
        noDataTips: !1,
        indicator: "volume",
        setting: i(
          i({}, s.DEFAULT_SETTING),
          {},
          { maTypes: [5, 10, 20, 30, 60], indicatorCount: 1 }
        ),
        firstDayK: !0,
        toolTips: { show: !1, records: [] },
        TradeTypeTexts: k,
        TRADE_MAP: v,
        isShowFqPopup: !1,
        FQ_LABEL: T,
        fq: 1,
        isBandAssistVisible: !0,
        isBstVisible: !0,
        cachedBstData: [],
        isShowBubbleTip: !1,
        isStockSignalVisible: !0,
        isStockSignalUnauthorized: !1,
        cachedStockSignalData: null,
        isShowStockSignalBubbleTip: !1,
      };
    },
    computed: {
      fixNum: function () {
        var t, e, i;
        return (
          (null ==
          (i =
            null == (e = null == (t = this.quote) ? void 0 : t.dqj)
              ? void 0
              : e.split(".")[1])
            ? void 0
            : i.length) || 2
        );
      },
      stockType: function () {
        var t, e;
        return null == (e = null == (t = this.quote) ? void 0 : t.secuInfo)
          ? void 0
          : e.stocktype;
      },
      isBandAssistTabOn: function () {
        return this.bandAssistSubscribed && this.isBandAssistVisible;
      },
      isStockSignalEffectiveSubscribed: function () {
        return this.stockSignalSubscribed && !this.isStockSignalUnauthorized;
      },
      isStockSignalTabOn: function () {
        return (
          this.isStockSignalEffectiveSubscribed &&
          this.isStockSignalVisible &&
          2 !== Number(this.fq)
        );
      },
      activeChartTool: function () {
        var t,
          e,
          i =
            null ==
            (e = null == (t = g.brokerConfig.trade) ? void 0 : t.chartTool)
              ? void 0
              : e.title;
        return this.stockSignalAvailable
          ? {
              key: "stockSignal",
              text: i || "撑压信号",
              subscribed: this.isStockSignalEffectiveSubscribed,
              tabOn: this.isStockSignalTabOn,
              showBubble: this.isShowStockSignalBubbleTip,
              bubbleContent: "功能上新！撑压信号，快速识别压力位和支撑位",
            }
          : this.bandAssistAvailable
          ? {
              key: "bandAssist",
              text: i || "AI波段宝",
              subscribed: this.bandAssistSubscribed,
              tabOn: this.isBandAssistTabOn,
              showBubble: this.isShowBubbleTip,
              bubbleContent: "功能上新！券商分析，看黄/蓝柱一眼识别涨跌趋势",
            }
          : null;
      },
    },
    created: function () {
      (this.scode = this.options.scode), (this.market = this.options.market);
      var t = a.getRenderPoint(this.market);
      (this.config = i({}, this.options)),
        t &&
          ((this.klineConfig = {
            skin: "plain",
            stockUnit: a.getTradeUnit(this.stockType, this.market),
            layout: "kline-portrait",
            useIndicators: s.INDICATOR,
            count: t[2],
            currIndicator: this.indicator,
            mainIndicator: "ma",
            market: p.stockDetailMarketMapWx(this.market),
            scode: this.scode,
            fixNum: this.fixNum,
            hideIndicator: !0,
            disableSwitchMainIndicator: !0,
            wzqMiniProgramBSTStyle: this.simpleMode,
            hideTradeBar: !0,
            isShowVolatile: this.bandAssistSubscribed,
            isShowSupPreSignal: this.stockSignalSubscribed,
          }),
          this.scode ||
            h.aegisReporter.reportEvent("analysis_created_miss_scode"));
    },
    watch: {
      bandAssistAvailable: {
        immediate: !0,
        handler: function (t) {
          t && this.initBubbleTip();
        },
      },
      bandAssistSubscribed: function (t) {
        var e;
        t &&
          (null == (e = this.chartData) ? void 0 : e.length) &&
          this.getBandAssistData();
      },
      stockSignalAvailable: {
        immediate: !0,
        handler: function (t) {
          t && this.initStockSignalBubbleTip();
        },
      },
      stockSignalSubscribed: function (t) {
        var e;
        t &&
          (null == (e = this.chartData) ? void 0 : e.length) &&
          this.drawStockSignal();
      },
    },
    mounted: function () {
      var i = this;
      return e(
        t().mark(function n() {
          return t().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  i.timmer = setTimeout(
                    e(
                      t().mark(function e() {
                        return t().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  i.hideNoDataTips(),
                                  (t.next = 3),
                                  i.resetPosition()
                                );
                              case 3:
                                return (t.next = 5), i.drawDayChart();
                              case 5:
                                i.getBstMark(),
                                  i.bandAssistSubscribed &&
                                    i.getBandAssistData(),
                                  i.stockSignalSubscribed &&
                                    i.drawStockSignal(),
                                  (i.loading = !1);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, e);
                      })
                    ),
                    250
                  );
                case 1:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      )();
    },
    unmounted: function () {
      this.timmer && clearTimeout(this.timmer),
        (this.chartData = null),
        (this.kline = null);
    },
    methods: {
      klineChartOptions: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i(
          i(i({}, this.klineConfig), t),
          {},
          {
            isShowVolatile: this.bandAssistSubscribed,
            isShowSupPreSignal: this.stockSignalSubscribed,
          }
        );
      },
      switchChartType: function () {
        var i = this;
        return e(
          t().mark(function e() {
            var n, s;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return i.hideNoDataTips(), (t.next = 3), i.resetPosition();
                  case 3:
                    (n = a.uniqChartID(i.index, i.fq)),
                      (s = i.getStockChartsData(n)) &&
                        ((i.chartData = s),
                        (i.kline = {
                          timestamp: Date.now(),
                          options: i.klineChartOptions({
                            type: "day",
                            fq: i.fq,
                            currIndicator: i.indicator,
                            setting: i.setting,
                            skin: i.isDark ? "dark" : "plain",
                          }),
                        })),
                      (i.loading = !1);
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )();
      },
      drawDayChart: function (i, n) {
        var s = this;
        return e(
          t().mark(function e() {
            var o, r, c, l, u, d, p, g, S, k, v, T, m, B;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (c = s.index),
                      (l = s.fq),
                      (u = s.scode),
                      (d = s.market),
                      (p = i || ""),
                      u ||
                        h.aegisReporter.reportEvent(
                          "analysis_stockquotation_miss_scode",
                          { ext2: null == (o = s.options) ? void 0 : o.scode }
                        ),
                      (t.next = 4),
                      f.queryDayChartData({
                        _this: s,
                        scode: u,
                        market: d,
                        stockType: s.stockType,
                        fq: l,
                        end: p,
                        added: s.added ? 1 : 0,
                      })
                    );
                  case 4:
                    if (
                      ((g = t.sent),
                      s.isDataInvalid(g)
                        ? s.$emit("klineDataBack", {})
                        : ((S = g[g.length - 1]),
                          (k = S.close),
                          (v = S.preClose),
                          (T = S.rawClose),
                          (m = S.rawPreClose),
                          v &&
                          3 ===
                            (null == (r = String(m).split(".")[1])
                              ? void 0
                              : r.length)
                            ? s.$emit("klineDataBack", {
                                close: T,
                                zd: (k - v).toFixed(3),
                                zdf: (((k - v) / v) * 100).toFixed(2),
                              })
                            : s.$emit("klineDataBack", {
                                close: T,
                                zd: (k - v).toFixed(2),
                                zdf: (((k - v) / v) * 100).toFixed(2),
                              })),
                      !i)
                    ) {
                      t.next = 8;
                      break;
                    }
                    return t.abrupt("return", void n(g));
                  case 8:
                    if (
                      ((B = a.uniqChartID(c, l)),
                      s.setStockChartsData(B, g),
                      !s.isDataInvalid(g))
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return", s.showNoDataTips());
                  case 11:
                    s.hideNoDataTips(),
                      (s.chartData = g),
                      (s.kline = {
                        timestamp: Date.now(),
                        options: s.klineChartOptions({
                          type: "day",
                          fq: s.fq,
                          currIndicator: s.indicator,
                          setting: s.setting,
                          skin: s.isDark ? "dark" : "plain",
                        }),
                        themeSkin: (function () {
                          var t = b.getRiseDropColors();
                          return {
                            plain: { rise: t.rise, drop: t.drop },
                            dark: { rise: t.rise, drop: t.drop },
                          };
                        })(),
                      });
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )();
      },
      getStockChartsData: function (t) {
        var e = a.uniqStockID({ scode: this.scode, market: this.market });
        return (S[e] || {})[t];
      },
      setStockChartsData: function (t, e) {
        var i = a.uniqStockID({ scode: this.scode, market: this.market }),
          n = S[i] || {};
        (n[t] = e), (S[i] = n);
      },
      isDataInvalid: function (t) {
        return !t || t.length <= 0;
      },
      showNoDataTips: function () {
        this.noDataTips = !0;
      },
      hideNoDataTips: function () {
        this.noDataTips = !1;
      },
      getInitData: function (t) {
        var e = this.chartData || [];
        t && t(e);
      },
      getMore: function (i, n) {
        var a = this;
        return e(
          t().mark(function e() {
            var s, o, r, c, l, u, d;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), (r = null), !a.bandAssistSubscribed)) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (t.prev = 3), (t.next = 6), a.fetchBandAssistPayload(i)
                      );
                    case 6:
                      (r = t.sent), (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(3)),
                        h.aegisReporter.reportEvent("band_assist_query_failed");
                    case 12:
                      return (
                        (c = !1),
                        (l = !1),
                        (t.next = 15),
                        a.drawDayChart(i, function (t) {
                          r &&
                            (c = a.applyBandAssistToItems(
                              t,
                              r.bandMap,
                              r.bandText
                            )),
                            a.stockSignalSubscribed &&
                              a.cachedStockSignalData &&
                              (l = a.applyStockSignalToItems(t)),
                            n(t);
                        })
                      );
                    case 15:
                      if ((a.getBstMark(320, i), !c)) {
                        t.next = 19;
                        break;
                      }
                      (u = a.bandAssistSubscribed && a.isBandAssistVisible),
                        (null == (s = a.$refs.chart)
                          ? void 0
                          : s.toggleAIVolatile) &&
                          a.$refs.chart.toggleAIVolatile(u);
                    case 19:
                      l &&
                        ((d =
                          a.isStockSignalEffectiveSubscribed &&
                          a.isStockSignalVisible),
                        (null == (o = a.$refs.chart)
                          ? void 0
                          : o.toggleSupPreSignal) &&
                          a.$refs.chart.toggleSupPreSignal(d)),
                        (t.next = 24);
                      break;
                    case 22:
                      (t.prev = 22), (t.t1 = t.catch(0));
                    case 24:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              null,
              [
                [0, 22],
                [3, 9],
              ]
            );
          })
        )();
      },
      resetPosition: function () {
        var i = this;
        return e(
          t().mark(function e() {
            var a;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (i.pannelWidth = 0),
                      (t.next = 3),
                      new Promise(function (t) {
                        n.index
                          .createSelectorQuery()
                          .in(i)
                          .select(".quotes-chart-bd")
                          .boundingClientRect(function (e) {
                            return t(e);
                          })
                          .exec();
                      })
                    );
                  case 3:
                    (a = t.sent) &&
                      ((i.height = a.height),
                      (i.width = a.width - i.pannelWidth - 4));
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )();
      },
      touchMoveKline: function (t) {
        var e = t.time,
          i = t.close,
          n = t.preClose,
          a = t.high,
          s = t.low,
          o = t.open,
          r = [];
        this.tradeLists.forEach(function (t) {
          r = r.concat(t.ones_trade_detail_list);
        });
        var c = r.filter(function (t) {
          return (
            t.trade_date === e.replace(/-/g, "") &&
            (t.trade_type == v.BUILD ||
              t.trade_type == v.BUY ||
              t.trade_type == v.SELL ||
              t.trade_type == v.CLEAN)
          );
        });
        this.toolTips = {
          show: !0,
          time: e,
          open: o,
          close: i,
          high: a,
          low: s,
          zdf: (((i - n) / n) * 100).toFixed(2),
          records: c,
        };
      },
      touchmoveend: function () {
        this.$stat.click("trade.analysis.detail.crosshair"),
          (this.toolTips.show = !1);
      },
      onTouchEnd: function () {},
      openLandscape: function () {},
      onBarTap: function (t, e) {
        "trade" === t &&
          (this.$stat.click("hq.stock_detail.kline_bst_detail_click"),
          this.$router.push({
            path: "/trade/history",
            query: {
              type: "complete",
              code: this.scode,
              market: this.market,
              name: this.stockName,
              query_date: (e.time || "").replace(/-/g, ""),
              isNewOpen: !0,
            },
          }));
      },
      onPopup: function () {},
      onSwitchIndicator: function () {},
      onPinch: function () {},
      onPinchEnd: function () {},
      handleThrottle: function () {},
      queryPriceRemind: function () {},
      getBstMark: function () {
        var i = arguments,
          n = this;
        return e(
          t().mark(function e() {
            var a, s, o, c, l, u, d, h, p;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = i.length > 0 && void 0 !== i[0] ? i[0] : 320),
                      (s = i.length > 1 ? i[1] : void 0),
                      (t.next = 4),
                      r.bstCgi.getHistory({
                        size: a,
                        end_date: s,
                        stock_code: n.scode,
                        market: n.market,
                      })
                    );
                  case 4:
                    (c = t.sent),
                      (l = c.history_bst),
                      (u = void 0 === l ? [] : l),
                      (d = c.today_bst),
                      (h = void 0 === d ? [] : d),
                      (p = u.concat(h)),
                      (n.cachedBstData = s ? n.cachedBstData.concat(p) : p),
                      n.isBstVisible &&
                        (null == (o = n.$refs.chart)
                          ? void 0
                          : o.updateTradeData) &&
                        n.cachedBstData.length > 0 &&
                        n.$refs.chart.updateTradeData(n.cachedBstData);
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )();
      },
      fetchBandAssistPayload: function (i) {
        var n = this;
        return e(
          t().mark(function e() {
            var a, s, o;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      c.bandAssistInfoApi.queryBandAssistInfo({
                        count: "320",
                        fq: String(n.fq),
                        scode: n.scode,
                        end: i || "",
                      })
                    );
                  case 2:
                    if (
                      ((s = t.sent),
                      null == (a = null == s ? void 0 : s.data)
                        ? void 0
                        : a.length)
                    ) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 5:
                    return (
                      (o = {}),
                      t.abrupt(
                        "return",
                        (s.data.forEach(function (t) {
                          t.band_date && (o[t.band_date] = t);
                        }),
                        0 === Object.keys(o).length
                          ? null
                          : { bandMap: o, bandText: s.band_text || "" })
                      )
                    );
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )();
      },
      applyBandAssistToItems: function (t, e, i) {
        if (!(null == t ? void 0 : t.length) || !e) return !1;
        var n = !1;
        return (
          t.forEach(function (t) {
            var a,
              s,
              o = String(
                null !==
                  (a =
                    null !== (s = t.quoteTime) && void 0 !== s ? s : t.time) &&
                  void 0 !== a
                  ? a
                  : ""
              ).replace(/-/g, ""),
              r = o ? e[o] : null;
            if (r) {
              var c = parseFloat(String(r.band_high)),
                l = parseFloat(String(r.band_low));
              Number.isFinite(c) &&
                Number.isFinite(l) &&
                ((n = !0),
                (t.band_color = Number(r.band_color)),
                (t.band_high = c),
                (t.band_low = l),
                (t.band_text = i));
            }
          }),
          n
        );
      },
      applyStockSignalToItems: function (t) {
        var e = this.cachedStockSignalData;
        if (!(null == t ? void 0 : t.length) || !e || 2 === Number(this.fq))
          return !1;
        var i = {
          supportPrice: String(e.support),
          pressurePrice: String(e.resistance),
        };
        return (
          t.forEach(function (t) {
            t.supPreSignal = i;
          }),
          !0
        );
      },
      getBandAssistData: function (i) {
        var n = this;
        return e(
          t().mark(function e() {
            var a, s, o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0), (t.next = 3), n.fetchBandAssistPayload(i)
                      );
                    case 3:
                      if (
                        (o = t.sent) &&
                        (null == (a = n.chartData) ? void 0 : a.length)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      if (
                        n.applyBandAssistToItems(
                          n.chartData,
                          o.bandMap,
                          o.bandText
                        )
                      ) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return");
                    case 8:
                      (r = n.bandAssistSubscribed && n.isBandAssistVisible),
                        (null == (s = n.$refs.chart)
                          ? void 0
                          : s.toggleAIVolatile) &&
                          n.$refs.chart.toggleAIVolatile(r),
                        (t.next = 15);
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t.catch(0)),
                        h.aegisReporter.reportEvent("band_assist_query_failed");
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              null,
              [[0, 12]]
            );
          })
        )();
      },
      toggleBandAssist: function () {
        var t, e;
        if (
          (null == (t = null == this ? void 0 : this.$stat) ||
            t.mtaReport({
              busi: "trade",
              eventName: "stock_profit_loss_analysis_click",
            }),
          !this.bandAssistSubscribed)
        )
          return (
            this.$stat.click("trade.analysis.detail.band_assist_open_click"),
            void this.$router.push({
              name: "BizBrokerService",
              query: { key: "bandAssistTenpay" },
            })
          );
        (this.isBandAssistVisible = !this.isBandAssistVisible),
          (null == (e = this.$refs.chart) ? void 0 : e.toggleAIVolatile) &&
            this.$refs.chart.toggleAIVolatile(this.isBandAssistVisible),
          this.$stat.click(
            "trade.analysis.detail.band_assist_".concat(
              this.isBandAssistVisible ? "on" : "off",
              "_click"
            )
          );
      },
      onBandAssistSettingClick: function () {
        this.$stat.click("trade.analysis.detail.band_assist_setting_click"),
          this.$router.push({ name: "BizBrokerTool" });
      },
      toggleBst: function () {
        var t, e;
        (this.isBstVisible = !this.isBstVisible),
          this.isBstVisible
            ? (null == (t = this.$refs.chart) ? void 0 : t.updateTradeData) &&
              this.cachedBstData.length > 0 &&
              this.$refs.chart.updateTradeData(this.cachedBstData)
            : (null == (e = this.$refs.chart) ? void 0 : e.clearTradeData) &&
              this.$refs.chart.clearTradeData(),
          this.$stat.click(
            "trade.analysis.detail.bst_".concat(
              this.isBstVisible ? "on" : "off",
              "_click"
            )
          );
      },
      initBubbleTip: function () {
        try {
          n.index.getStorageSync(u.BAND_ASSIST_BUBBLE_TIP) ||
            ((this.isShowBubbleTip = !0),
            n.index.setStorageSync(u.BAND_ASSIST_BUBBLE_TIP, !0));
        } catch (t) {}
      },
      closeBubbleTip: function () {
        this.isShowBubbleTip = !1;
      },
      drawStockSignal: function () {
        var i = this;
        return e(
          t().mark(function e() {
            var n, a, s, o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        l.stockSignalApi.queryStockSignal({
                          market: i.market,
                          scode: i.scode,
                        })
                      );
                    case 3:
                      if (
                        ((n = t.sent),
                        0 !==
                          (a = (null == n ? void 0 : n.signal_data) || [])
                            .length)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      if (
                        ((s = a[a.length - 1]),
                        (o = parseFloat(String(s.support))),
                        (r = parseFloat(String(s.resistance))),
                        Number.isFinite(o) && Number.isFinite(r))
                      ) {
                        t.next = 10;
                        break;
                      }
                      return t.abrupt("return");
                    case 10:
                      (i.isStockSignalUnauthorized = !1),
                        (i.cachedStockSignalData = {
                          support: o,
                          resistance: r,
                        }),
                        i.applyStockSignalDraw(),
                        (t.next = 18);
                      break;
                    case 13:
                      if (
                        ((t.prev = 13),
                        (t.t0 = t.catch(0)),
                        51097303 !==
                          Number(null == t.t0 ? void 0 : t.t0.retcode))
                      ) {
                        t.next = 17;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((i.isStockSignalUnauthorized = !0),
                        void i.clearStockSignalDraw())
                      );
                    case 17:
                      h.aegisReporter.reportEvent("stock_signal_query_failed");
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              null,
              [[0, 13]]
            );
          })
        )();
      },
      clearStockSignalDraw: function () {
        this.cachedStockSignalData = null;
        var t = this.$refs.chart;
        t &&
          "function" == typeof t.toggleSupPreSignal &&
          t.toggleSupPreSignal(!1);
      },
      applyStockSignalDraw: function () {
        var t,
          e = this.$refs.chart;
        if (
          e &&
          this.cachedStockSignalData &&
          (null == (t = this.chartData) ? void 0 : t.length)
        )
          if (2 !== Number(this.fq)) {
            this.applyStockSignalToItems(this.chartData);
            var i =
              this.isStockSignalEffectiveSubscribed &&
              this.isStockSignalVisible;
            "function" == typeof e.toggleSupPreSignal &&
              e.toggleSupPreSignal(i);
          } else
            "function" == typeof e.toggleSupPreSignal &&
              e.toggleSupPreSignal(!1);
      },
      toggleStockSignal: function () {
        this.isStockSignalEffectiveSubscribed
          ? ((this.isStockSignalVisible = !this.isStockSignalVisible),
            this.applyStockSignalDraw())
          : this.$router.push({
              name: "BizBrokerService",
              query: { key: "stockSignal" },
            });
      },
      onStockSignalSettingClick: function () {
        this.$router.push({
          name: "BizBrokerService",
          query: { key: "stockSignal" },
        });
      },
      initStockSignalBubbleTip: function () {
        try {
          n.index.getStorageSync(u.STOCK_SIGNAL_BUBBLE_TIP) ||
            ((this.isShowStockSignalBubbleTip = !0),
            n.index.setStorageSync(u.STOCK_SIGNAL_BUBBLE_TIP, !0));
        } catch (t) {}
      },
      closeStockSignalBubbleTip: function () {
        this.isShowStockSignalBubbleTip = !1;
      },
      onChartToolTabClick: function () {
        var t, e;
        "stockSignal" === (null == (t = this.activeChartTool) ? void 0 : t.key)
          ? this.toggleStockSignal()
          : "bandAssist" ===
              (null == (e = this.activeChartTool) ? void 0 : e.key) &&
            this.toggleBandAssist();
      },
      onChartToolSettingClick: function () {
        var t, e;
        "stockSignal" === (null == (t = this.activeChartTool) ? void 0 : t.key)
          ? this.onStockSignalSettingClick()
          : "bandAssist" ===
              (null == (e = this.activeChartTool) ? void 0 : e.key) &&
            this.onBandAssistSettingClick();
      },
      onChartToolBubbleClose: function () {
        var t, e;
        "stockSignal" === (null == (t = this.activeChartTool) ? void 0 : t.key)
          ? this.closeStockSignalBubbleTip()
          : "bandAssist" ===
              (null == (e = this.activeChartTool) ? void 0 : e.key) &&
            this.closeBubbleTip();
      },
      toggleFqPopup: function () {
        (this.isShowFqPopup = !this.isShowFqPopup),
          this.$stat.click(
            "trade.stock_detail.kline_fq_popup_" +
              (this.isShowFqPopup ? "show" : "hide")
          );
      },
      onChangeFq: function (i) {
        var n = this;
        return e(
          t().mark(function e() {
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n.fq = i),
                      (n.isShowFqPopup = !1),
                      n.$stat.click("trade.stock_detail.kline_fq_".concat(i)),
                      n.hideNoDataTips(),
                      (t.next = 6),
                      n.resetPosition()
                    );
                  case 6:
                    return (t.next = 8), n.drawDayChart();
                  case 8:
                    n.getBstMark(),
                      n.bandAssistSubscribed && n.getBandAssistData(),
                      n.stockSignalSubscribed && n.drawStockSignal();
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )();
      },
    },
  };
Array ||
  (
    n.resolveComponent("st-loading") +
    n.resolveComponent("kline") +
    n.resolveComponent("ValueColor") +
    n.resolveComponent("BubbleTip")
  )(),
  Math ||
    (
      function () {
        return "../../../components/ValueColor/ValueColor.js";
      } +
      function () {
        return "../../../components/BubbleTip/BubbleTip.js";
      }
    )();
var B = n._export_sfc(m, [
  [
    "render",
    function (t, e, i, a, s, o) {
      return n.e(
        { a: s.loading },
        (s.loading, {}),
        { b: s.kline },
        s.kline
          ? {
              c: n.sr("chart", "7af2a226-1"),
              d: n.o(o.touchMoveKline),
              e: n.o(o.touchmoveend),
              f: n.o(o.onTouchEnd),
              g: n.o(o.openLandscape),
              h: n.o(o.onBarTap),
              i: n.o(o.onPopup),
              j: n.o(o.onSwitchIndicator),
              k: n.o(o.onPinch),
              l: n.o(o.onPinchEnd),
              m: n.o(o.getMore),
              n: n.o(o.getInitData),
              o: n.o(o.handleThrottle),
              p: n.o(o.queryPriceRemind),
              q: n.p({
                width: s.width,
                height: s.config.landscape ? s.height - 2 : s.height,
                options: s.kline,
              }),
            }
          : {},
        { r: s.noDataTips },
        (s.noDataTips, {}),
        {
          s: s.width + "px",
          t: n.t(t.$filters.time.format(s.toolTips.time, "YYYY-MM-DD dddd")),
          v: n.t(s.toolTips.close),
          w: n.t(t.$filters.money.prefix(s.toolTips.zdf)),
          x: n.p({ value: s.toolTips.zdf }),
          y: n.t(s.toolTips.high),
          z: n.p({ value: s.toolTips.zdf }),
          A: n.t(s.toolTips.low),
          B: n.p({ value: s.toolTips.zdf }),
          C: n.t(s.toolTips.open),
          D: n.p({ value: s.toolTips.zdf }),
          E: s.toolTips.records.length > 0,
        },
        s.toolTips.records.length > 0
          ? n.e(
              {
                F: n.f(s.toolTips.records.slice(0, 3), function (t, e, i) {
                  return {
                    a: n.t(s.TradeTypeTexts[Number(t.trade_type)]),
                    b: n.n(
                      t.trade_type === s.TRADE_MAP.BUILD ||
                        t.trade_type === s.TRADE_MAP.BUY
                        ? "blue"
                        : "orange"
                    ),
                    c: n.t(t.trade_price),
                    d: n.t(t.trade_num),
                    e: e,
                  };
                }),
                G: n.n(a.simpleMode ? "trade-one_simple" : ""),
                H: s.toolTips.records.length > 3,
              },
              s.toolTips.records.length > 3
                ? { I: n.t(s.toolTips.records.length - 3) }
                : {}
            )
          : {},
        { J: s.toolTips.show, K: o.activeChartTool },
        o.activeChartTool
          ? n.e(
              {
                L: n.t(o.activeChartTool.text),
                M: n.o(function () {
                  return (
                    o.onChartToolTabClick &&
                    o.onChartToolTabClick.apply(o, arguments)
                  );
                }),
                N: o.activeChartTool.subscribed,
              },
              o.activeChartTool.subscribed
                ? {
                    O: n.o(function () {
                      return (
                        o.onChartToolSettingClick &&
                        o.onChartToolSettingClick.apply(o, arguments)
                      );
                    }),
                  }
                : {},
              {
                P: n.n(
                  o.activeChartTool.tabOn
                    ? "legend-ai-tab--on"
                    : "legend-ai-tab--off"
                ),
              }
            )
          : {},
        { Q: o.activeChartTool && o.activeChartTool.showBubble },
        o.activeChartTool && o.activeChartTool.showBubble
          ? {
              R: n.o(o.onChartToolBubbleClose),
              S: n.p({
                "is-show": o.activeChartTool.showBubble,
                content: o.activeChartTool.bubbleContent,
                "arrow-position": "bottom-left",
                "show-close-btn": !0,
                duration: 5e3,
              }),
            }
          : {},
        {
          T: n.n(s.isBstVisible ? "on" : "off"),
          U: n.o(function () {
            return o.toggleBst && o.toggleBst.apply(o, arguments);
          }),
          V: n.o(function () {
            return o.toggleFqPopup && o.toggleFqPopup.apply(o, arguments);
          }),
          W: s.isShowFqPopup,
        },
        s.isShowFqPopup
          ? {
              X: n.o(function () {
                return o.toggleFqPopup && o.toggleFqPopup.apply(o, arguments);
              }),
              Y: n.f(Object.keys(s.FQ_LABEL), function (t, e, i) {
                return {
                  a: n.t(s.FQ_LABEL[t]),
                  b: t,
                  c: n.n(+s.fq == +t ? "active" : ""),
                  d: n.o(function (e) {
                    return o.onChangeFq(t);
                  }, t),
                };
              }),
              Z: n.n(s.index > 0 ? "border--top" : ""),
            }
          : {},
        { aa: n.n(a.simpleMode ? "legend_simple" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-7af2a226"],
]);
wx.createComponent(B);
