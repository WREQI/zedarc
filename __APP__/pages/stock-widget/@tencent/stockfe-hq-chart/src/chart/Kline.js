require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  s = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = function (t, e) {
    for (var n in e || (e = {})) a.call(e, n) && c(t, n, e[n]);
    if (o) {
      var s,
        r = i(o(e));
      try {
        for (r.s(); !(s = r.n()).done; ) {
          n = s.value;
          h.call(e, n) && c(t, n, e[n]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  l = function (t, e) {
    return s(t, r(e));
  },
  d = function (t, e, i) {
    return new Promise(function (n, s) {
      var r = function (t) {
          try {
            a(i.next(t));
          } catch (t) {
            s(t);
          }
        },
        o = function (t) {
          try {
            a(i.throw(t));
          } catch (t) {
            s(t);
          }
        },
        a = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(r, o);
        };
      a((i = i.apply(t, e)).next());
    });
  },
  p = require("../../../stock-hq-data/index.js"),
  f = require("../utils.js"),
  k = require("../../../../../../common/vendor.js"),
  y = [
    { key: "ma", value: "MA" },
    { key: "ema", value: "EMA" },
    { key: "boll", value: "BOLL" },
    { key: "sar", value: "SAR" },
    { key: "ene", value: "ENE" },
  ],
  m = [
    { key: "volume", value: "成交量" },
    { key: "cje", value: "成交额" },
    { key: "macd", value: "MACD" },
    { key: "dmi", value: "DMI" },
    { key: "cci", value: "CCI" },
    { key: "wr", value: "WR" },
    { key: "boll", value: "BOLL" },
    { key: "kdj", value: "KDJ" },
    { key: "ema", value: "EMA" },
    { key: "obv", value: "OBV" },
    { key: "rsi", value: "RSI" },
    { key: "sar", value: "SAR" },
    { key: "bias", value: "BIAS" },
    { key: "bbi", value: "BBI" },
    { key: "trix", value: "TRIX" },
    { key: "ene", value: "ENE" },
    { key: "vr", value: "VR" },
    { key: "arbr", value: "ARBR" },
    { key: "psy", value: "PSY" },
    { key: "dma", value: "DMA" },
    { key: "dpo", value: "DPO" },
  ],
  g = {
    oneMonth: { limit: 80, count: 1, unix: "months" },
    threeMonth: { limit: 140, count: 3, unix: "months" },
    halfYear: { limit: 180, count: 6, unix: "months" },
    oneYear: { limit: 310, count: 1, unix: "years" },
    threeYear: { limit: 800, count: 3, unix: "years" },
    fiveYear: { limit: 1350, count: 5, unix: "years" },
    allYear: { limit: 1999 },
  },
  T = {
    components: {
      kline: function () {
        return "../../../../../quote/@tencent/stock-kline/kline.js";
      },
      NoData: function () {
        return "../components/NoData.js";
      },
      Selector: function () {
        return "../components/Selector.js";
      },
    },
    inject: {
      hqBridge: {
        default: function () {
          return f.mockBridge;
        },
      },
      prefetchTradePoint: { default: null },
      handleTradePoint: { default: null },
      tradeSecret: {
        default: {
          show: !1,
          isSupport: !1,
          prefetch: null,
          handle: null,
          cache: null,
          sync: null,
        },
      },
      tradeLine: { default: { show: !1, isSupport: !1 } },
    },
    props: {
      width: Number,
      height: Number,
      skin: String,
      market: String,
      scode: String,
      currency: String,
      assertStockType: String,
      kType: { type: String, default: "day" },
      fqType: { type: Number, default: 1 },
      added: Boolean,
      hideChip: Boolean,
      hideIndicator: Boolean,
      disableInteract: Boolean,
      customSetting: Object,
      landscape: Boolean,
      guideMode: String,
      candleType: String,
      closeLineColor: String,
    },
    data: function () {
      return {
        stockType: this.assertStockType || "",
        options: null,
        cacheOptions: {},
        noData: !1,
        touchMode: !1,
        initSelector: !1,
        selectorIndicators: [],
        fixNum: 2,
        indicator: "",
        history: {
          initData: null,
          boundaryMinsDate: 0,
          boundaryMinsString: "",
        },
        defaultSetting: f.getDefaultSetting(this.hqBridge.ENV),
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return p.utils.getSymbol(this.market, this.scode);
      },
      fq: function () {
        return p.utils.isIndex(this.stockType) ||
          p.utils.isHSPlate(this.market) ||
          p.utils.isDebt(this.stockType) ||
          "ZQ-GZ" === this.stockType ||
          p.utils.isTransferableDebt(this.stockType) ||
          p.utils.isWarrants(this.stockType) ||
          p.utils.isFutures(this.market) ||
          p.utils.isNQMarket(this.market) ||
          /^m\d/.test(this.kType)
          ? 3
          : p.utils.isUSMarket(this.market)
          ? 2 === this.fqType
            ? 1
            : this.fqType
          : this.fqType || 1;
      },
      mainIndicators: function () {
        return y;
      },
      mainIndicator: function () {
        return this.setting.mainIndicator;
      },
      indicators: function () {
        if ("oem" === this.hqBridge.ENV) {
          var t = m.slice(0, 12);
          return (
            this.tradeSecret.show &&
              t.splice(2, 0, { key: "rally", value: "反弹指数" }),
            t
          );
        }
        return p.utils.isHKMarket(this.market) &&
          p.utils.isIndex(this.stockType)
          ? m.slice(1)
          : m;
      },
      firstIndicator: function () {
        var t = this.setting.firstIndicator;
        return p.utils.isHKMarket(this.market) &&
          p.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      secondIndicator: function () {
        var t = this.setting.secondIndicator;
        return p.utils.isHKMarket(this.market) &&
          p.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      thirdIndicator: function () {
        var t = this.setting.thirdIndicator;
        return p.utils.isHKMarket(this.market) &&
          p.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      fourthIndicator: function () {
        var t = this.setting.fourthIndicator;
        return p.utils.isHKMarket(this.market) &&
          p.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      isMP: function () {
        return "mp" === this.hqBridge.ENV;
      },
      isBCCurrency: function () {
        return p.utils.isBCCurrency(this.market);
      },
      canGetTradeLine: function () {
        return (
          "day" === this.kType &&
          this.tradeLine.isSupport &&
          (this.setting.tradeLine || /tradeLine/.test(this.guideMode))
        );
      },
    },
    created: function () {
      var t = this;
      this.detailApi ||
        (this.detailApi = new p.DetailApi(function (e) {
          return t.hqBridge.request(e);
        })),
        this.getInit(this.kType);
    },
    beforeUnmount: function () {
      (this.options = null), (this.detailApi = null);
    },
    methods: {
      showLesson: function () {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("showLesson");
      },
      tabActivated: function () {
        var t = this;
        this.$nextTick(function () {
          if (!t.isMP && ((t.options = t.cacheOptions[t.kType]), t.options)) {
            var e = t.getChipOptions(),
              i = e.isSupportChip,
              n = e.isShowChip;
            (t.options.options.mainIndicator = t.setting.mainIndicator),
              (t.options.options.currIndicator = t.setting.firstIndicator),
              (t.options.options.secondIndicator = t.setting.secondIndicator),
              (t.options.options.thirdIndicator = t.setting.thirdIndicator),
              (t.options.options.fourthIndicator = t.setting.fourthIndicator),
              (t.options.options.isSupportChip = i),
              (t.options.options.isShowChip = n),
              t.tradeSecret.cache && t.tradeSecret.cache();
          }
          t.getInit(t.kType);
        });
      },
      tabDeactivated: function () {},
      updateData: function () {
        this.getInit(this.kType);
      },
      getData: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        this.prefetchTradePoint && this.prefetchTradePoint(t),
          this.tradeSecret.prefetch && this.tradeSecret.prefetch(t);
        var e = {
            market: this.market,
            scode: this.scode,
            currency: this.currency,
            fq: this.canGetTradeLine ? 1 : this.fq,
            end: t,
            added: this.added ? 1 : 0,
            opPoints: this.canGetTradeLine,
          },
          i =
            "wzq" === this.hqBridge.ENV
              ? this.hqBridge.getCookie("wzq_qluin")
              : "stockfe",
          n = { day: 1, week: 2, month: 3, season: 4, year: 5 }[this.kType],
          s = g[this.kType] && g[this.kType].limit;
        return /^m\d/.test(this.kType)
          ? this.detailApi.getMinKline(
              l(u({}, e), { limit: 370, type: this.kType, openId: i }),
              { needProcess: !0, useNewUrl: !0 }
            )
          : n
          ? this.detailApi.getKline(
              l(u({}, e), { limit: 370, kline: n, openId: i }),
              { needProcess: !0 }
            )
          : this.detailApi.getKline(
              l(u({}, e), {
                limit: s,
                kline: "allYear" === this.kType ? 2 : 1,
                openId: i,
              }),
              { needProcess: !0 }
            );
      },
      getInit: function (i) {
        return d(
          this,
          null,
          t().mark(function n() {
            var s, r, o, a, h, c, l, d, k, y, m, T;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (this.noData = !1), (t.next = 3), this.getData();
                    case 3:
                      if (
                        ((a = t.sent),
                        i === this.kType &&
                          (null == (s = null == a ? void 0 : a.raw)
                            ? void 0
                            : s.qt))
                      ) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      (h =
                        a.raw.qt.fields || a.raw.qt[this.symbol] || a.raw.qt),
                        (this.stockType = f.getStockType(this.market, h)),
                        this.$parent.HQ_CHART_COMPOSITION &&
                          (this.$parent.stockType = this.stockType),
                        (this.fixNum =
                          (null ==
                          (r = (
                            this.isBCCurrency
                              ? p.utils.formatCurrency(h[3])
                              : h[3]
                          ).split(".")[1])
                            ? void 0
                            : r.length) || 2),
                        (c = f.getRenderPoint(this.stockType, this.market)),
                        (l = Boolean(g[this.kType])),
                        (null == (o = a.chartData) ? void 0 : o.length)
                          ? ((d = this.getChipOptions()),
                            (k =
                              l &&
                              this.computeDurationCount(
                                a.chartData,
                                g[this.kType].count,
                                g[this.kType].unix
                              )),
                            (this.chartData = a.chartData),
                            (this.options = {
                              timestamp: Date.now(),
                              data: this.isMP ? null : a.chartData,
                              options: u(
                                {
                                  layout: this.landscape
                                    ? "kline-landscape"
                                    : "kline-portrait",
                                  skin: this.skin || "plain",
                                  market: this.market,
                                  scode: this.scode,
                                  type: this.kType,
                                  candleType: this.candleType,
                                  fq: this.isBCCurrency
                                    ? ""
                                    : this.canGetTradeLine
                                    ? 1
                                    : this.fq,
                                  fixNum: this.fixNum,
                                  stockUnit: f.getTradeUnit(
                                    this.stockType,
                                    this.market
                                  ),
                                  count: l ? k : c[2],
                                  queryCount: l ? g[this.kType].limit : 370,
                                  hideIndicator: this.hideIndicator,
                                  useIndicators: this.indicators.map(function (
                                    t
                                  ) {
                                    return t.key;
                                  }),
                                  mainIndicator: this.mainIndicator,
                                  currIndicator: this.firstIndicator,
                                  secondIndicator: this.secondIndicator,
                                  thirdIndicator: this.thirdIndicator,
                                  fourthIndicator: this.fourthIndicator,
                                  disableInteract: this.disableInteract,
                                  disableMainIndicator:
                                    "oem" === this.hqBridge.ENV,
                                  setting: this.setting,
                                  guideMode: this.guideMode,
                                  isSupportTradeSecret:
                                    this.tradeSecret.isSupport,
                                  isSupportTradeLine: this.tradeLine.isSupport,
                                },
                                d
                              ),
                            }),
                            this.closeLineColor &&
                              ((y =
                                "dark" === this.skin || "black" === this.skin
                                  ? "dark"
                                  : "plain"),
                              (this.options.themeSkin = e({}, y, {
                                close: this.closeLineColor,
                              }))),
                            (m = a.raw.fsStartDate) &&
                              "wzq" === this.hqBridge.ENV &&
                              ((T = ""
                                .concat(m.slice(0, 4), "-")
                                .concat(m.slice(4, 6), "-")
                                .concat(m.slice(6))),
                              (this.options.options.boundaryMinsDate = +m),
                              (this.options.options.boundaryMinsString = T),
                              (this.history.boundaryMinsDate = +m),
                              (this.history.boundaryMinsString = T)),
                            this.handleTradePoint && this.handleTradePoint(!0),
                            this.tradeSecret.handle &&
                              this.tradeSecret.handle())
                          : (this.noData = !0),
                        (this.cacheOptions[this.kType] = this.options),
                        this.$emit("getQTData", h),
                        this.$emit("handleExtra", a.raw);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      getInitData: function (t) {
        this.hotfixWxBug();
        var e = this.chartData || [];
        t && t(e);
      },
      hotfixWxBug: function () {
        var t = this;
        this.landscape ||
          this.$nextTick(function () {
            t.$refs.chart.setDisableScroll(!0),
              setTimeout(function () {
                t.$refs.chart.setDisableScroll(!1);
              }, 600);
          });
      },
      computeDurationCount: function (t, e, i) {
        if (t.length <= 0) return 0;
        if (!e || !i) return t.length > 1949 ? 1949 : t.length;
        var n = new Date(t[t.length - 1].quoteTime),
          s = new Date(n);
        "months" === i
          ? (s = new Date(s.setMonth(s.getMonth() - e)))
          : "years" === i && (s = new Date(s.setFullYear(s.getFullYear() - e)));
        for (var r = 1, o = t.length - 2; o >= 0; o--) {
          var a = new Date(t[o].quoteTime);
          s.getTime() <= a.getTime() && (r += 1);
        }
        return r;
      },
      getMore: function (e, i) {
        return d(
          this,
          null,
          t().mark(function n() {
            var s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), this.getData(e);
                    case 2:
                      (s = t.sent),
                        i(s.chartData),
                        this.handleTradePoint && this.handleTradePoint(!1),
                        this.tradeSecret.handle && this.tradeSecret.handle(e);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      getChipOptions: function () {
        var t = ["oem", "mp"].indexOf(this.hqBridge.ENV) > -1,
          e = Boolean(g[this.kType]),
          i =
            !t &&
            !e &&
            !this.hideChip &&
            p.utils.isHSMarket(this.market) &&
            ["GP-A", "GP-A-CYB"].includes(this.stockType);
        return {
          isSupportChip: i,
          isShowChip:
            i &&
            (void 0 !== this.setting.isShowChip
              ? this.setting.isShowChip
              : p.utils.isHSMarket(this.market)),
        };
      },
      onTouchMove: function (t) {
        (this.touchMode = !0),
          (t.fixNum = this.fixNum),
          (this.lastTouchData = t),
          this.$emit("onTouchMove", t);
      },
      onTouchCancel: function () {
        (this.touchMode = !1), this.$emit("onTouchCancel");
      },
      onTouchEnd: function () {
        var t;
        this.touchMode &&
          this.history.initData &&
          (null == (t = this.$refs.historyPanel) ||
            t.switchByCrossLine(this.lastTouchData));
      },
      onDoubleTap: function (t) {
        this.$emit("onDoubleTap", t);
      },
      onPopup: function (t) {
        var e = this;
        this.initSelector = !0;
        var i = "".concat(
          ["main", "first", "second", "third", "fourth"][t],
          "Indicator"
        );
        (this.indicator = this[i]),
          (this.selectorIndicators =
            0 === t ? this.mainIndicators : this.indicators),
          this.$nextTick(function () {
            e.$refs.selector.onPopup(t);
          }),
          this.hqBridge.report("hq.stock_detail.indicator_switch_click");
      },
      onSwitchIndicator: function (e, i) {
        return d(
          this,
          null,
          t().mark(function n() {
            var s, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = this.tradeSecret.sync), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), this.tradeSecret.sync(e, i);
                    case 4:
                      t.t0 = t.sent;
                    case 5:
                      if (!t.t0) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      (s = "".concat(
                        ["main", "curr", "second", "third", "fourth"][e],
                        "Indicator"
                      )),
                        (r = 1 === e ? "firstIndicator" : s),
                        (this.options.options[s] = i),
                        (this.setting[r] = i),
                        this.$emit("updateSetting", this.setting),
                        this.hqBridge.report(
                          "hq.stock_detail.indicator_area_click"
                        );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      switchIndicator: function (i, n) {
        return d(
          this,
          null,
          t().mark(function s() {
            var r, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = this.tradeSecret.sync), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), this.tradeSecret.sync(i, n);
                    case 4:
                      t.t0 = t.sent;
                    case 5:
                      if (!t.t0) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      (r = "".concat(
                        ["main", "curr", "second", "third", "fourth"][i],
                        "Indicator"
                      )),
                        (o = 1 === i ? "firstIndicator" : r),
                        (this.options = {
                          data: this.options.data,
                          options: l(u({}, this.options.options), e({}, r, n)),
                        }),
                        (this.setting[o] = n),
                        this.$emit("updateSetting", this.setting),
                        this.hqBridge.report(
                          "hq.stock_detail.indicator_area_click"
                        );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              s,
              this
            );
          })
        );
      },
      onTipTap: function (t) {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("onTipTap", t);
      },
      onBarTap: function (t, e) {
        var i;
        "time" === t
          ? (this.history.initData
              ? null == (i = this.$refs.historyPanel) || i.showPanel(e)
              : (this.history.initData = e),
            this.hqBridge.report(
              "hq.stock_detail.history_mins_open_".concat(e.tapRegion),
              { stockid: this.symbol }
            ))
          : this.$parent.HQ_CHART_COMPOSITION &&
            this.$parent.$emit("onBarTap", t, e);
      },
      onChipSwitch: function (t) {
        var e = t.isShowChip;
        (this.setting.isShowChip = !!e),
          (this.options = l(u({}, this.options), {
            options: l(u({}, this.options.options), { isShowChip: !!e }),
          })),
          this.$emit("updateSetting", this.setting),
          this.hqBridge.report(
            "hq.detail.kline.chip.switch_" + (e ? "show" : "hide"),
            { isShowChip: e }
          );
      },
    },
  };
Array ||
  (
    k.resolveComponent("kline") +
    k.resolveComponent("NoData") +
    k.resolveComponent("Selector")
  )();
var v = k._export_sfc(T, [
  [
    "render",
    function (t, e, i, n, s, r) {
      return k.e(
        { a: s.options },
        s.options
          ? {
              b: k.sr("chart", "dadd4860-0"),
              c: k.o(r.onTouchMove, 5762),
              d: k.o(r.onTouchCancel, 5763),
              e: k.o(r.onTouchEnd, 5764),
              f: k.o(r.onSwitchIndicator, 5765),
              g: k.o(r.onPopup, 5766),
              h: k.o(r.onTipTap, 5767),
              i: k.o(r.onBarTap, 5768),
              j: k.o(r.getMore, 5769),
              k: k.o(r.onChipSwitch, 5770),
              l: k.o(r.onDoubleTap, 5771),
              m: k.o(r.getInitData, 5772),
              n: k.p({
                id: "chart",
                width: i.width,
                height: i.height,
                options: s.options,
              }),
            }
          : {},
        { o: s.noData },
        (s.noData, {}),
        { p: s.initSelector },
        s.initSelector
          ? {
              q: k.sr("selector", "dadd4860-2"),
              r: k.o(r.showLesson, 5773),
              s: k.p({
                type: "kline",
                skin: i.skin,
                indicators: s.selectorIndicators,
                indicator: s.indicator,
              }),
            }
          : {},
        { t: "".concat(i.width, "px"), v: "".concat(i.height, "px") }
      );
    },
  ],
]);
wx.createComponent(v);
