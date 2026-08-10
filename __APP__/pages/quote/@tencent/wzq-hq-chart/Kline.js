var t = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  s = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = function (t, e) {
    for (var n in e || (e = {})) r.call(e, n) && c(t, n, e[n]);
    if (a) {
      var s,
        o = i(a(e));
      try {
        for (o.s(); !(s = o.n()).done; ) {
          n = s.value;
          h.call(e, n) && c(t, n, e[n]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  l = function (t, e) {
    return s(t, o(e));
  },
  d = function (t, e, i) {
    return new Promise(function (n, s) {
      var o = function (t) {
          try {
            r(i.next(t));
          } catch (t) {
            s(t);
          }
        },
        a = function (t) {
          try {
            r(i.throw(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(o, a);
        };
      r((i = i.apply(t, e)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  m = require("../stock-hq-data/index.js"),
  f = require("mixins/Share.js"),
  k = require("prefetch.js"),
  g = require("node-modules/throttle-debounce/esm/index.js"),
  y = [
    { key: "ma", value: "MA" },
    { key: "ema", value: "EMA" },
    { key: "boll", value: "BOLL" },
    { key: "sar", value: "SAR" },
    { key: "ene", value: "ENE" },
  ],
  v = [
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
  T = {
    oneMonth: { limit: 80, count: 1, unix: "months" },
    threeMonth: { limit: 140, count: 3, unix: "months" },
    halfYear: { limit: 180, count: 6, unix: "months" },
    oneYear: { limit: 310, count: 1, unix: "years" },
    threeYear: { limit: 800, count: 3, unix: "years" },
    fiveYear: { limit: 1350, count: 5, unix: "years" },
    allYear: { limit: 1999 },
  },
  S = [
    { id: "solid", name: "实心阳线" },
    { id: "hollow", name: "空心阳线" },
  ],
  w = {
    components: {
      kline: function () {
        return "../stock-kline/kline.js";
      },
      NoData: function () {
        return "./components/NoData.js";
      },
      Selector: function () {
        return "./components/Selector.js";
      },
      Status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    mixins: [f.Share],
    inject: {
      hqBridge: {},
      tradePoint: { default: { canGet: !1, prefetch: null, handle: null } },
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
      disableTapEvent: Boolean,
      added: Boolean,
      hideIndicator: Boolean,
      customSetting: Object,
      landscape: Boolean,
      miMaTypes: Array,
      miIsShowChip: Boolean,
      miYkstyle: Number,
      miGap: Boolean,
      miTrendline: Boolean,
      miSupportPressureLine: Boolean,
      miMagicNine: Boolean,
      miTradeline: Boolean,
      isAccountOpen: Boolean,
      isSupportTradeLine: Boolean,
      miIndicatorCount: Number,
      miMainIndicator: String,
    },
    data: function () {
      return {
        dataStatus: k.COMMON_PAGE_STATUS.LOADING,
        stockType: this.assertStockType || "",
        options: null,
        cacheOptions: {},
        noData: !1,
        initSelector: !1,
        selectorIndicators: [],
        fixNum: 2,
        indicator: "",
        defaultSetting: k.getDefaultSetting(),
        status: "",
        fq: 1,
        swipeDirection: null,
        shouldReportExposure: !0,
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return m.utils.getSymbol(this.market, this.scode);
      },
      mainIndicators: function () {
        return y;
      },
      mainIndicator: function () {
        return this.miMainIndicator || "ma";
      },
      indicators: function () {
        return m.utils.isHKMarket(this.market) &&
          m.utils.isIndex(this.stockType)
          ? v.slice(1)
          : v;
      },
      firstIndicator: function () {
        var t = this.setting.firstIndicator;
        return m.utils.isHKMarket(this.market) &&
          m.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      secondIndicator: function () {
        var t = this.setting.secondIndicator;
        return m.utils.isHKMarket(this.market) &&
          m.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      thirdIndicator: function () {
        var t = this.setting.thirdIndicator;
        return m.utils.isHKMarket(this.market) &&
          m.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      fourthIndicator: function () {
        var t = this.setting.fourthIndicator;
        return m.utils.isHKMarket(this.market) &&
          m.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      isBCCurrency: function () {
        return m.utils.isBCCurrency(this.market);
      },
      canGetTradeLine: function () {
        return (
          this.isSupportTradeLine &&
          this.isAccountOpen &&
          this.miTradeline &&
          "day" === this.kType
        );
      },
      splitLayer: function () {
        return !!this.isMP && this.landscape;
      },
    },
    watch: {
      miYkstyle: function (t) {
        var e,
          i = { yangKStyle: S[t] };
        this.saveKSet(i),
          null == (e = this.$refs.chart) || e.toggleYkStyle(S[t]);
      },
      miMaTypes: function (t) {
        var e = { maTypes: t };
        this.saveKSet(e), this.tradePoint.canGet && this.tradePoint.handle(!0);
      },
      miIsShowChip: function (t) {
        var e = (this.options || {}).options,
          i = this.getChipOptions("change", t);
        this.options = l(u({}, this.options), { options: u(u({}, e), i) });
      },
      miGap: function (t) {
        var e,
          i = { gap: t };
        this.saveKSet(i), null == (e = this.$refs.chart) || e.toggleGap(t);
      },
      fqType: function () {
        this.getInit(this.kType, !0, !0);
      },
      miTrendline: function (t) {
        var e,
          i = { trendline: t };
        this.saveKSet(i),
          null == (e = this.$refs.chart) || e.toggleTrendLineMiniWzq(t);
      },
      miSupportPressureLine: function (t) {
        var e,
          i = { supportPressureLine: t };
        this.saveKSet(i),
          null == (e = this.$refs.chart) || e.toggleSupportPressureLine(t);
      },
      miMagicNine: function (t) {
        var e;
        null == (e = this.$refs.chart) || e.toggleMagicNine(t);
      },
      miTradeline: function () {
        this.getInit(this.kType, !0, !0);
      },
      miIndicatorCount: function (t) {
        var e = { indicatorCount: t };
        this.saveKSet(e), this.tradePoint.canGet && this.tradePoint.handle(!0);
      },
      miMainIndicator: function (t) {
        this.switchIndicator(0, t),
          this.tradePoint.canGet && this.tradePoint.handle(!0);
      },
    },
    created: function () {
      (this.isMP = ["mpwzq", "mpweapp"].includes("mpweapp")),
        this.getInit(this.kType),
        (this.debounceReportPinch = g.debounce(500, this.reportPinch));
    },
    mounted: function () {
      this.hqBridge.busOn("RemindPopEvent", this.handleShowRemindPop),
        this.hqBridge.busOn("DisableTouchEvent", this.disableTouchEvent),
        this.isMP &&
          this.hqBridge.busOn(
            "getChartPath-".concat(this.scode),
            this.handleChartShare
          );
    },
    beforeUnmount: function () {
      var t;
      null == (t = this.$refs.chart) || t.cancelEvent(),
        (this.options = null),
        (this.chartData = null),
        (this.debounceReportPinch = null),
        clearTimeout(this.tradePointTimer),
        this.hqBridge.busOff("RemindPopEvent", this.handleShowRemindPop),
        this.hqBridge.busOff("DisableTouchEvent", this.disableTouchEvent),
        this.isMP &&
          this.hqBridge.busOff(
            "getChartPath-".concat(this.scode),
            this.handleChartShare
          );
    },
    methods: {
      getPointPosition: function (t) {
        var e, i;
        return null !=
          (i = null == (e = this.$refs.chart) ? void 0 : e.getPointPosition(t))
          ? i
          : null;
      },
      getExRightGapPosition: function () {
        var t,
          e,
          i = this.chartData,
          n =
            null == (e = null == (t = this.options) ? void 0 : t.options)
              ? void 0
              : e.count;
        if (!Array.isArray(i) || 0 === i.length || !n) return null;
        var s = i.slice(Math.max(0, i.length - n));
        if (i[i.length - 1].time !== s[s.length - 1].time) return null;
        var o = s.findIndex(function (t, e) {
          return t.isExRight && e > 0 && e < s.length - 1;
        });
        if (-1 === o) return null;
        var a = s[o],
          r = s[o - 1],
          h = this.getPointPosition(a.time),
          c = this.getPointPosition(r.time);
        if (!h || !c) return null;
        var u = (h.x + c.x) / 2;
        return {
          x: u,
          y: ((h.open.y + h.close.y) / 2 + (c.open.y + c.close.y) / 2) / 2,
          isLeft: u < this.width / 2,
          prevDate: r.time,
          currDate: a.time,
        };
      },
      saveKSet: function (t) {
        var e,
          i = (null == (e = this.options) ? void 0 : e.options) || {},
          n = i.setting || {},
          s = u(u({}, n), t);
        this.options = l(u({}, this.options), {
          options: l(u({}, i), { setting: s }),
        });
      },
      handleError: function (t) {
        this.$emit("error", t);
      },
      hotfixWxBug: function () {
        var t = this;
        this.landscape ||
          this.$nextTick(function () {
            var e;
            null == (e = t.$refs.chart) || e.setDisableScroll(!0),
              setTimeout(function () {
                var e;
                null == (e = t.$refs.chart) || e.setDisableScroll(!1);
              }, 600);
          });
      },
      disableTouchEvent: function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        (this.disableInteract = t), this.updateData();
      },
      handleShowRemindPop: function (t) {
        this.showRemindPop = t;
      },
      tabActivated: function () {
        var t = this;
        this.$nextTick(function () {
          t.getInit(t.kType);
        });
      },
      tabDeactivated: function () {},
      updateData: function () {
        this.getInit(this.kType);
      },
      computeFq: function () {
        return m.utils.isIndex(this.stockType) ||
          m.utils.isHSPlate(this.market) ||
          m.utils.isDebt(this.stockType) ||
          m.utils.isNationalDebt(this.stockType) ||
          m.utils.isTransferableDebt(this.stockType) ||
          m.utils.isWarrants(this.stockType) ||
          m.utils.isFutures(this.market) ||
          m.utils.isSPMarket(this.market) ||
          m.utils.isForex(this.market) ||
          /^m\d/.test(this.kType)
          ? 3
          : m.utils.isUSMarket(this.market)
          ? 2 === this.fqType
            ? 1
            : this.fqType
          : this.fqType || 1;
      },
      getData: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return d(
          this,
          null,
          e().mark(function s() {
            var o,
              a,
              r,
              h,
              c,
              d,
              p = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        n
                          ? (clearTimeout(this.tradePointTimer),
                            (this.tradePointTimer = setTimeout(function () {
                              p.tradePoint.canGet &&
                                p.tradePoint.prefetch(t, i);
                            }, 1500)))
                          : this.tradePoint.canGet &&
                            this.tradePoint.prefetch(t, i),
                        this.tradeSecret.prefetch &&
                          this.tradeSecret.prefetch(t),
                        (o = {
                          market: this.market,
                          scode: this.scode,
                          currency: this.currency,
                          fq: this.canGetTradeLine ? 1 : this.fq,
                          end: t,
                          added: this.added ? 1 : 0,
                          opPoints: this.canGetTradeLine,
                        }),
                        (a = "stockfe"),
                        (r = { day: 1, week: 2, month: 3, season: 4, year: 5 }[
                          this.kType
                        ]),
                        (h = T[this.kType] && T[this.kType].limit),
                        (c = /^m\d/.test(this.kType)
                          ? k.detailApi.getMinKline(
                              l(u({}, o), {
                                limit: 370,
                                type: this.kType,
                                openId: a,
                              }),
                              { needProcess: !0, useNewUrl: !0 }
                            )
                          : r
                          ? k.detailApi.getKline(
                              l(u({}, o), { limit: 370, kline: r, openId: a }),
                              { needProcess: !0 }
                            )
                          : k.detailApi.getKline(
                              l(u({}, o), {
                                limit: h,
                                kline: "allYear" === this.kType ? 2 : 1,
                                openId: a,
                              }),
                              { needProcess: !0 }
                            )),
                        (e.prev = 2),
                        (e.next = 5),
                        c
                      );
                    case 5:
                      return (
                        (d = e.sent),
                        e.abrupt(
                          "return",
                          ("{}" === JSON.stringify(d)
                            ? (this.dataStatus = k.COMMON_PAGE_STATUS.ERROR)
                            : (this.dataStatus = null),
                          d)
                        )
                      );
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        (this.dataStatus = k.COMMON_PAGE_STATUS.ERROR);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this,
              [[2, 9]]
            );
          })
        );
      },
      retryData: function () {
        (this.dataStatus = k.COMMON_PAGE_STATUS.LOADING), this.getData();
      },
      getInit: function (t, i) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return d(
          this,
          null,
          e().mark(function s() {
            var o, a, r, h, c, d, p, f, g, y, v, w;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.noData = !1),
                        (this.fq = this.computeFq()),
                        (e.next = 3),
                        this.getData("", i, n)
                      );
                    case 3:
                      if (
                        ((p = e.sent),
                        t === this.kType &&
                          (null == (o = null == p ? void 0 : p.raw)
                            ? void 0
                            : o.qt))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      (f =
                        p.raw.qt.fields || p.raw.qt[this.symbol] || p.raw.qt),
                        (this.stockType = k.getStockType(this.market, f)),
                        (this.fixNum =
                          (null ==
                          (r =
                            null ==
                            (a = this.isBCCurrency
                              ? m.utils.formatCurrency(f[3])
                              : f[3])
                              ? void 0
                              : a.split(".")[1])
                            ? void 0
                            : r.length) || 2),
                        (g = k.getRenderPoint(
                          this.stockType,
                          this.market,
                          this.scode
                        )),
                        (y = Boolean(T[this.kType])),
                        (this.status = m.utils.isForex(this.market)
                          ? ""
                          : f[40]),
                        !["U", "I", "N"].includes(this.status) &&
                        (null == (h = p.chartData) ? void 0 : h.length)
                          ? ((v = this.getChipOptions()),
                            (w =
                              y &&
                              this.computeDurationCount(
                                p.chartData,
                                T[this.kType].count,
                                T[this.kType].unix
                              )),
                            (this.chartData = p.chartData),
                            (this.options = {
                              timestamp: Date.now(),
                              devicePixelRatio: this.isMP
                                ? getApp().globalData.systemInfo
                                    .devicePixelRatio
                                : window.devicePixelRatio,
                              platform:
                                this.isMP &&
                                getApp().globalData.systemInfo.platform,
                              options: u(
                                {
                                  layout: this.landscape
                                    ? "kline-landscape"
                                    : "kline-portrait",
                                  skin: this.skin || "plain",
                                  fontType: "stockFont",
                                  market: this.market,
                                  scode: this.scode,
                                  type: this.kType,
                                  fq: this.isBCCurrency
                                    ? ""
                                    : this.canGetTradeLine
                                    ? 1
                                    : this.fq,
                                  hideFQ: !this.landscape,
                                  fixNum: this.fixNum,
                                  stockUnit: k.getTradeUnit(
                                    this.stockType,
                                    this.market
                                  ),
                                  count: y ? w : this.landscape ? g[3] : g[2],
                                  queryCount: y ? T[this.kType].limit : 370,
                                  hideIndicator: this.hideIndicator,
                                  hideMA: !this.landscape,
                                  hideGrid: !0,
                                  hideScale: !this.landscape,
                                  useIndicators: this.indicators.map(function (
                                    t
                                  ) {
                                    return t.key;
                                  }),
                                  mainIndicator: this.miMainIndicator || "ma",
                                  currIndicator: this.firstIndicator,
                                  secondIndicator: this.secondIndicator,
                                  thirdIndicator: this.thirdIndicator,
                                  fourthIndicator: this.fourthIndicator,
                                  disableInteract:
                                    this.disableTapEvent ||
                                    this.disableInteract,
                                  disableMainIndicator: !1,
                                  hideMainIndicatorText: !this.landscape,
                                  setting: l(u({}, this.setting), {
                                    magicNine: this.miMagicNine,
                                    tradeLine: this.miTradeline,
                                    yAixsCount: 3,
                                    maTypes: (null == (c = this.setting)
                                      ? void 0
                                      : c.miMaTypes) || [
                                      5, 10, 20, 0, 0, 0, 0, 0, 0, 0,
                                    ],
                                    yangKStyle: S[this.miYkstyle] || S[0],
                                    gap:
                                      null == (d = this.setting)
                                        ? void 0
                                        : d.miGap,
                                    trendline: this.miTrendline,
                                    supportPressureLine:
                                      this.miSupportPressureLine,
                                    indicatorCount: this.miIndicatorCount || 1,
                                    mainIndicator: this.miMainIndicator || "ma",
                                  }),
                                  isSupportTradeSecret:
                                    this.tradeSecret.isSupport,
                                  isSupportTradeLine: this.isSupportTradeLine,
                                  isShowAreaSelect:
                                    this.landscape &&
                                    !!this.setting.isShowAreaSelect,
                                  vlineCount: 0,
                                  hidePaddingTop: !1,
                                  yAxis: { width: 0 },
                                  isWzqMiniProgram: !0,
                                },
                                v
                              ),
                            }),
                            this.tradePoint.canGet &&
                              this.tradePoint.handle(!0),
                            this.tradeSecret.handle &&
                              this.tradeSecret.handle())
                          : (this.noData = !0),
                        (this.cacheOptions[this.kType] = this.options),
                        this.$emit("getQTData", f),
                        this.$emit("handleExtra", p.raw);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this
            );
          })
        );
      },
      getInitData: function (t) {
        this.isMP && this.hotfixWxBug();
        var e = this.chartData || [];
        t && t(e);
      },
      computeDurationCount: function (t, e, i) {
        if (t.length <= 0) return 0;
        if (!e || !i) return t.length > 1949 ? 1949 : t.length;
        var n = new Date(t[t.length - 1].quoteTime),
          s = new Date(n);
        "months" === i
          ? (s = new Date(s.setMonth(s.getMonth() - e)))
          : "years" === i && (s = new Date(s.setFullYear(s.getFullYear() - e)));
        for (var o = 1, a = t.length - 2; a >= 0; a--) {
          var r = new Date(t[a].quoteTime);
          s.getTime() <= r.getTime() && (o += 1);
        }
        return o;
      },
      getMore: function (t, i) {
        return d(
          this,
          null,
          e().mark(function n() {
            var s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.getData(t);
                    case 2:
                      (s = e.sent),
                        i(s.chartData),
                        this.tradePoint.canGet && this.tradePoint.handle(!1),
                        this.tradeSecret.handle && this.tradeSecret.handle(t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      getChipOptions: function (t, e) {
        var i;
        i = "change" === t ? e : !!this.setting.miIsShowChip;
        var n =
            !Boolean(T[this.kType]) &&
            m.utils.isHSMarket(this.market) &&
            ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType),
          s = this.landscape ? n : n && i;
        return (
          n &&
            s &&
            this.shouldReportExposure &&
            (p.StockBridge.report("hq.detail.chart.chip.exposure"),
            (this.shouldReportExposure = !1)),
          { isSupportChip: n, isShowChip: s }
        );
      },
      onTouchMove: function (t) {
        var e;
        (t.fixNum = this.fixNum),
          this.$emit("onTouchMove", t),
          (null == (e = this.lastTouchData) ? void 0 : e.quoteTime) !==
            (null == t ? void 0 : t.quoteTime) &&
            ((this.lastTouchData = t), this.shakeit());
      },
      shakeit: function () {
        var t = this;
        !this.shakeTimeOut &&
          this.isMP &&
          (this.shakeTimeOut = setTimeout(function () {
            p.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 200));
      },
      onTouchCancel: function () {
        this.$emit("onTouchCancel");
      },
      onTouchEnd: function () {
        this.swipeDirection &&
          (p.StockBridge.report(
            "stocklist.stock_swipe_".concat(this.swipeDirection)
          ),
          (this.swipeDirection = null));
      },
      onPinch: function (t) {
        this.$emit("onPinch"), this.debounceReportPinch(t);
      },
      reportPinch: function (t) {
        p.StockBridge.report(
          "hq.stock_detail.pinch_" + (t ? "bigger" : "smaller"),
          { stockid: this.symbol }
        );
      },
      onDoubleTap: function (t) {
        var e = this;
        this.showRemindPop ||
          this.disableTapEvent ||
          ((this.tapTimeout = setTimeout(function () {
            e.changeSetting(),
              clearTimeout(e.tapTimeout),
              (e.tapTimeout = null);
          }, 250)),
          this.$emit("onDoubleTap", t));
      },
      onTap: function () {
        var t = this;
        this.landscape ||
          this.disableTapEvent ||
          (!Boolean(T[this.kType]) &&
            m.utils.isHSMarket(this.market) &&
            ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType) &&
            (this.tapTimeout = setTimeout(function () {
              t.isMP && p.wx$1.vibrateShort({ type: "medium" }),
                t.changeSetting(),
                clearTimeout(t.tapTimeout),
                (t.tapTimeout = null);
            }, 250)));
      },
      changeSetting: function () {
        var t = (this.setting || {}).miIsShowChip,
          e = void 0 !== t && t,
          i = l(u({}, this.setting), { miIsShowChip: !e });
        e
          ? p.StockBridge.report("hq.detail.chart.closechip.click")
          : p.StockBridge.report("hq.detail.chart.openchip.click"),
          this.$emit("chipToggle"),
          this.$emit("updateSetting", i);
      },
      onPopup: function (t) {
        var e = this;
        if (
          !this.showRemindPop &&
          (t || this.landscape) &&
          (!this.$refs.selector || !this.$refs.selector.popup.show)
        ) {
          this.initSelector = !0;
          var i = "".concat(
            ["main", "first", "second", "third", "fourth"][t],
            "Indicator"
          );
          (this.indicator = this[i]),
            (this.selectorIndicators =
              0 === t ? this.mainIndicators : this.indicators),
            this.$nextTick(function () {
              p.StockBridge.busEmit("autoHideTradePanel", "minsSelector"),
                e.$refs.selector &&
                  "function" == typeof e.$refs.selector.onPopup &&
                  e.$refs.selector.onPopup(t);
            }),
            p.StockBridge.report("hq.stock_detail.indicator_switch_click", {
              stockid: this.symbol,
            });
        }
      },
      onSwitchIndicator: function (t, i) {
        return d(
          this,
          null,
          e().mark(function n() {
            var s, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = this.tradeSecret.sync), !e.t0)) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), this.tradeSecret.sync(t, i);
                    case 4:
                      e.t0 = e.sent;
                    case 5:
                      if (!e.t0) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      (s = "".concat(
                        ["main", "curr", "second", "third", "fourth"][t],
                        "Indicator"
                      )),
                        (o = 1 === t ? "firstIndicator" : s),
                        (this.options.options[s] = i),
                        (this.setting[o] = i),
                        this.$emit("updateSetting", this.setting),
                        p.StockBridge.report(
                          "hq.stock_detail.indicator_area_click",
                          { stockid: this.symbol }
                        );
                    case 9:
                    case "end":
                      return e.stop();
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
          e().mark(function s() {
            var o, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = this.tradeSecret.sync), !e.t0)) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), this.tradeSecret.sync(i, n);
                    case 4:
                      e.t0 = e.sent;
                    case 5:
                      if (!e.t0) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      (o = "".concat(
                        ["main", "curr", "second", "third", "fourth"][i],
                        "Indicator"
                      )),
                        (a = 1 === i ? "firstIndicator" : o),
                        (this.options = {
                          data: this.options.data,
                          devicePixelRatio: this.isMP
                            ? getApp().globalData.systemInfo.devicePixelRatio
                            : window.devicePixelRatio,
                          platform:
                            this.isMP &&
                            getApp().globalData.systemInfo.platform,
                          options: l(u({}, this.options.options), t({}, o, n)),
                        }),
                        "mainIndicator" === o
                          ? (this.setting.miMainIndicator = n)
                          : (this.setting[a] = n),
                        ("mainIndicator" !== o || this.landscape) &&
                          this.$emit("updateSetting", this.setting),
                        p.StockBridge.report(
                          "hq.stock_detail.indicator_area_click",
                          { stockid: this.symbol }
                        );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this
            );
          })
        );
      },
      onBarTap: function (t, e) {
        this.$parent.HQ_CHART_COMPOSITION &&
          this.$parent.$emit("onBarTap", t, e);
      },
      onTipTap: function (t, e) {
        this.$parent.HQ_CHART_COMPOSITION &&
          this.$parent.$emit("onTipTap", t, e);
      },
      onChipSwitch: function (t) {
        var e = t.isShowChip;
        (this.setting.isShowChip = !!e),
          (this.options = l(u({}, this.options), {
            options: l(u({}, this.options.options), { isShowChip: !!e }),
          })),
          this.$emit("updateSetting", this.setting),
          p.StockBridge.report(
            "hq.detail.kline.chip.switch_" + (e ? "show" : "hide"),
            { isShowChip: e }
          );
      },
      onAreaSwitch: function (t) {
        var e,
          i = t.isShowAreaSelect;
        (null == (e = this.chartData) ? void 0 : e.length) < 2
          ? p.wx$1.showToast({ title: "区间统计适用于2根K线以上" })
          : ((this.setting.isShowAreaSelect = !!i),
            (this.options = l(u({}, this.options), {
              options: l(u({}, this.options.options), { isShowAreaSelect: i }),
            })),
            this.$emit("updateSetting", this.setting),
            p.StockBridge.report(
              "hq.detail.kline.area_select.switch_" + (i ? "show" : "hide"),
              { isShowAreaSelect: i }
            ));
      },
      onSwipeX: function (t) {
        var e = t < 0 ? "left" : "right";
        t && this.swipeDirection && e !== this.swipeDirection
          ? (p.StockBridge.report("stocklist.stock_swipe_".concat(e)),
            (this.swipeDirection = null))
          : (this.swipeDirection = e),
          this.$emit("onSwipeX", { direction: e });
      },
      onDrawEnd: function () {
        this.$emit("onDrawEnd");
      },
    },
  };
Array ||
  (
    p.resolveComponent("kline") +
    p.resolveComponent("Status") +
    p.resolveComponent("NoData") +
    p.resolveComponent("Selector")
  )();
var P = p._export_sfc(w, [
  [
    "render",
    function (t, e, i, n, s, o) {
      return p.e(
        { a: s.options && !s.dataStatus && !s.noData },
        !s.options || s.dataStatus || s.noData
          ? {}
          : {
              b: p.sr("chart", "7f1251f3-0"),
              c: p.o(o.onTouchMove, 6022),
              d: p.o(o.onTouchCancel, 6023),
              e: p.o(o.onTouchEnd, 6024),
              f: p.o(o.onSwitchIndicator, 6025),
              g: p.o(o.onPopup, 6026),
              h: p.o(o.onBarTap, 6027),
              i: p.o(o.onTipTap, 6028),
              j: p.o(o.getMore, 6029),
              k: p.o(o.onChipSwitch, 6030),
              l: p.o(o.onAreaSwitch, 6031),
              m: p.o(o.onDoubleTap, 6032),
              n: p.o(o.getInitData, 6033),
              o: p.o(o.onPinch, 6034),
              p: p.o(o.onTap, 6035),
              q: p.o(o.handleError, 6036),
              r: p.o(o.onSwipeX, 6037),
              s: p.o(o.onDrawEnd, 6038),
              t: p.p({
                id: "chart",
                width: i.width,
                height: i.height,
                options: s.options,
                splitLayer: o.splitLayer,
              }),
            },
        { v: s.dataStatus },
        s.dataStatus
          ? {
              w: p.o(function (t) {
                return o.retryData();
              }, 6039),
              x: p.p({ "is-simple-mode": !0, type: s.dataStatus }),
            }
          : {},
        { y: s.noData },
        s.noData ? { z: p.p({ status: s.status }) } : {},
        { A: s.initSelector },
        s.initSelector
          ? {
              B: p.sr("selector", "7f1251f3-3"),
              C: p.p({
                type: "kline",
                skin: i.skin,
                landscape: i.landscape,
                indicators: s.selectorIndicators,
                indicator: s.indicator,
              }),
            }
          : {},
        { D: "".concat(i.width, "px"), E: "".concat(i.height, "px") }
      );
    },
  ],
]);
wx.createComponent(P);
