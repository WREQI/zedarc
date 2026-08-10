require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  h = function (t, i, e) {
    return i in t
      ? s(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[i] = e);
  },
  u = function (t, i) {
    for (var s in i || (i = {})) r.call(i, s) && h(t, s, i[s]);
    if (o) {
      var n,
        a = e(o(i));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          s = n.value;
          c.call(i, s) && h(t, s, i[s]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  l = function (t, i) {
    return n(t, a(i));
  },
  d = function (t, i, e) {
    return new Promise(function (s, n) {
      var a = function (t) {
          try {
            r(e.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            r(e.throw(t));
          } catch (t) {
            n(t);
          }
        },
        r = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(a, o);
        };
      r((e = e.apply(t, i)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  m = require("../../../@tencent/stock-hq-data/index.js"),
  f = require("../../ChartWrapper.js"),
  g = require("./mixins/Share.js"),
  k = [
    { key: "volume", value: "成交量" },
    { key: "macd", value: "MACD" },
    { key: "rsi", value: "RSI" },
  ],
  T = null,
  D = {
    mixins: [g.Share],
    components: {
      mins: function () {
        return "../../../@tencent/stock-kline/mins.js";
      },
      NoData: function () {
        return "../../../@tencent/wzq-hq-chart/components/NoData.js";
      },
      Selector: function () {
        return "../components/Selector.js";
      },
      Status: function () {
        return "../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    inject: {
      hqBridge: { default: function () {} },
      prefetch: { default: function () {} },
      tradePoint: { default: { canGet: !1, prefetch: null, handle: null } },
    },
    props: {
      width: Number,
      height: Number,
      skin: String,
      market: String,
      scode: String,
      currency: String,
      assertStockType: String,
      autoUpdate: Boolean,
      hideIndicator: Boolean,
      disableInteract: Boolean,
      customSetting: Object,
      landscape: Boolean,
      showAuction: Boolean,
      isTrading: Boolean,
      isAuctionTime: Boolean,
      isWaitingForTrading: Boolean,
      hkVIP: Boolean,
    },
    data: function () {
      return {
        dataStatus: null,
        options: null,
        noData: !1,
        initSelector: !1,
        stockType: this.assertStockType || "",
        defaultSetting: f.getDefaultSetting(),
        status: "",
        touchMode: !1,
        iopvReported: !1,
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return m.utils.getSymbol(this.market, this.scode);
      },
      indicators: function () {
        return k;
      },
      indicator: function () {
        return this.setting.minsIndicator;
      },
      isBCCurrency: function () {
        return m.utils.isBCCurrency(this.market);
      },
      isForex: function () {
        return m.utils.isForex(this.market);
      },
    },
    watch: {
      hideIndicator: function (t) {
        var i = l(u({}, this.options.options), { hideIndicator: t });
        this.options = l(u({}, this.options), { options: i });
      },
      showAuction: function (t) {
        !0 !== t ||
        (!this.isAuctionTime && !this.isWaitingForTrading) ||
        this.auctionData.dType
          ? this.changeAuctionSet()
          : this.getAuctionData("middleChange");
      },
      isAuctionTime: function (t) {
        !0 === t && this.showAuction && !this.auctionData.dType
          ? this.getAuctionData("middleChange")
          : this.changeAuctionSet();
      },
      isWaitingForTrading: function (t) {
        var i;
        !0 === t &&
        this.showAuction &&
        !(null == (i = this.auctionData) ? void 0 : i.dType)
          ? this.getAuctionData("middleChange")
          : this.changeAuctionSet();
      },
      touchMode: function (t) {
        t &&
          p.StockBridge.report("hq.detail.chart_touch_cross", {
            stockid: this.symbol,
          });
      },
    },
    beforeCreate: function () {
      (this.timeout = null),
        (this.fixNum = 2),
        (this.preClosePrice = 0),
        (this.isLoading = !1);
    },
    created: function () {
      T ||
        (T = new m.DetailApi(function () {
          for (var t, i = arguments.length, e = new Array(i), s = 0; s < i; s++)
            e[s] = arguments[s];
          return 1 === e.length
            ? p.StockBridge.request(e[0], "GET", {}, { forceCallback: !0 })
            : (e[3] && (e[3].forceCallback = !0),
              (t = p.StockBridge).request.apply(t, e));
        })),
        (this.dataStatus = p.COMMON_PAGE_STATUS.LOADING),
        (this.tapTimeout = null),
        (this.auctionData = {
          dType: "",
          items: [],
          max: 0,
          min: Number.MAX_SAFE_INTEGER,
          maxVol: 0,
        }),
        this.getAllData();
    },
    beforeUnmount: function () {
      var t;
      clearTimeout(this.timeout),
        null == (t = this.$refs.chart) || t.cancelEvent(),
        (this.timeout = null),
        (this.tapTimeout = null),
        (this.fixNum = null),
        (this.preClosePrice = null),
        (this.options = null),
        (this.chartData = null),
        (this.auctionData = null),
        this.hqBridge.busOff("RemindPopEvent", this.handleShowRemindPop),
        this.hqBridge.busOff("DisableTouchEvent", this.disableTouchEvent);
    },
    methods: {
      handleError: function (t) {
        this.$emit("error", t);
      },
      getAllData: function () {
        return d(
          this,
          null,
          i().mark(function t() {
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.t0 =
                          this.showAuction &&
                          (this.isAuctionTime || this.isWaitingForTrading)),
                        !t.t0)
                      ) {
                        t.next = 4;
                        break;
                      }
                      return (t.next = 4), this.getAuctionData();
                    case 4:
                      this.getData();
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      hotfixWxBug: function () {
        var t = this;
        this.landscape ||
          this.$nextTick(function () {
            var i;
            null == (i = t.$refs.chart) || i.setDisableScroll(!0),
              setTimeout(function () {
                var i;
                null == (i = t.$refs.chart) || i.setDisableScroll(!1);
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
      showLesson: function () {
        this.$emit("showLesson");
      },
      tabActivated: function () {
        this.getData();
      },
      tabDeactivated: function () {
        clearTimeout(this.timeout);
      },
      updateData: function () {
        this.getAllData();
      },
      getAuctionData: function (t) {
        return d(
          this,
          null,
          i().mark(function e() {
            var s, n;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (
                        ((i.prev = 0),
                        !(null == (s = this.prefetch)
                          ? void 0
                          : s.getAuctionData))
                      ) {
                        i.next = 7;
                        break;
                      }
                      return (
                        (i.next = 4),
                        this.prefetch.getAuctionData({
                          market: this.market,
                          scode: this.scode,
                          stockType: this.stockType,
                        })
                      );
                    case 4:
                      (i.t0 = i.sent), (i.next = 10);
                      break;
                    case 7:
                      return (
                        (i.next = 9),
                        T.getAuctionMins(
                          {
                            market: this.market,
                            scode: this.scode,
                            stockType: this.stockType,
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 9:
                      i.t0 = i.sent;
                    case 10:
                      (n = i.t0),
                        (this.auctionData = n),
                        "middleChange" === t && this.changeAuctionSet(),
                        (i.next = 17);
                      break;
                    case 15:
                      (i.prev = 15), (i.t1 = i.catch(0));
                    case 17:
                    case "end":
                      return i.stop();
                  }
              },
              e,
              this,
              [[0, 15]]
            );
          })
        );
      },
      changeAuctionSet: function () {
        var t;
        if (this.options) {
          var i =
              m.utils.isHSMarket(this.market) ||
              m.utils.isBJMarket(this.market),
            e = l(u({}, this.options.options), {
              showAuction:
                this.showAuction &&
                (this.isAuctionTime || this.isWaitingForTrading),
              auctionCount: i
                ? "sec" ===
                  (null == (t = null == this ? void 0 : this.auctionData)
                    ? void 0
                    : t.dType)
                  ? 600
                  : 11
                : 21,
              auctionLabel: i ? "09:15~25" : "09:00~20",
            });
          this.options = l(u({}, this.options), {
            isAuctionTime: this.isAuctionTime,
            options: e,
            auctionData: this.auctionData,
          });
        }
      },
      getData: function () {
        return d(
          this,
          null,
          i().mark(function e() {
            var s,
              n,
              a,
              o,
              r,
              c,
              h,
              u,
              l,
              d,
              g,
              k,
              D,
              v,
              S,
              y,
              b,
              A = this;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!this.isLoading) {
                        i.next = 2;
                        break;
                      }
                      return i.abrupt("return");
                    case 2:
                      if (
                        ((this.isLoading = !0),
                        this.tradePoint.canGet && this.tradePoint.prefetch(),
                        (this.noData = !1),
                        (i.prev = 3),
                        !(null == (s = this.prefetch)
                          ? void 0
                          : s.getChartData))
                      ) {
                        i.next = 10;
                        break;
                      }
                      return (
                        (i.next = 7),
                        this.prefetch.getChartData(
                          this.scode,
                          this.market,
                          this.currency
                        )
                      );
                    case 7:
                      (i.t0 = i.sent), (i.next = 13);
                      break;
                    case 10:
                      return (
                        (i.next = 12),
                        T.getMins(
                          {
                            market: this.market,
                            scode: this.scode,
                            currency: this.currency,
                            openId: "stockfe",
                          },
                          { needProcess: !0, useNewUrl: !0, signV2: !0 }
                        )
                      );
                    case 12:
                      i.t0 = i.sent;
                    case 13:
                      (l = i.t0),
                        "{}" === JSON.stringify(l)
                          ? (this.dataStatus = p.COMMON_PAGE_STATUS.ERROR)
                          : (this.dataStatus = null),
                        (this.isLoading = !1),
                        (i.next = 23);
                      break;
                    case 18:
                      if (
                        ((i.prev = 18),
                        (i.t1 = i.catch(3)),
                        (this.isLoading = !1),
                        !i.t1 || -1 != +i.t1.errno)
                      ) {
                        i.next = 22;
                        break;
                      }
                      return i.abrupt("return");
                    case 22:
                      return i.abrupt(
                        "return",
                        void (this.dataStatus = p.COMMON_PAGE_STATUS.ERROR)
                      );
                    case 23:
                      if (
                        ((d = m.utils.isUSMarket(this.market)
                          ? m.utils.hackUSSymbol(this.symbol)
                          : this.symbol),
                        (g = (
                          null == (n = null == l ? void 0 : l.raw)
                            ? void 0
                            : n.qt
                        )
                          ? l.raw.qt[d] || l.raw.qt.fields
                          : []) && g.length)
                      ) {
                        i.next = 26;
                        break;
                      }
                      return i.abrupt("return");
                    case 26:
                      (this.stockType = f.getStockType(this.market, g)),
                        (this.preClosePrice = this.isForex ? +g[6] : +g[4]),
                        (this.fixNum =
                          (null ==
                          (o =
                            null ==
                            (a = this.isBCCurrency
                              ? m.utils.formatCurrency(g[3])
                              : g[3])
                              ? void 0
                              : a.split(".")[1])
                            ? void 0
                            : o.length) || 2),
                        (k = f.getRenderPoint(
                          this.stockType,
                          this.market,
                          this.scode
                        )),
                        (D =
                          m.utils.isHSMarket(this.market) &&
                          (m.utils.isAMarket(this.stockType) ||
                            m.utils.isKeChuangStock(this.stockType) ||
                            m.utils.isChuangYeStock(this.stockType) ||
                            ["ETF", "QDII-ETF"].includes(this.stockType))),
                        (v = f.judgeTrading(
                          this.stockType,
                          this.market,
                          l.raw.qt.market,
                          this.scode
                        )),
                        (S = v.isTrading),
                        (y = v.isAfterTrading),
                        (this.isAfterTrading = y),
                        (this.status = g[40]),
                        !["D", "U"].includes(this.status) &&
                        (null == (r = l.chartData) ? void 0 : r.length)
                          ? ((this.chartData = {
                              items: l.chartData,
                              preClose: this.preClosePrice,
                            }),
                            (b = {
                              dType: "",
                              items: [],
                              max: 0,
                              min: Number.MAX_SAFE_INTEGER,
                              maxVol: 0,
                            }),
                            (this.options = t(
                              {
                                ready: !0,
                                isTrading:
                                  !(!this.isForex || "USDCNY" === this.scode) ||
                                  S,
                                isAuctionTime: this.isAuctionTime,
                                timestamp: Date.now(),
                                devicePixelRatio:
                                  getApp().globalData.systemInfo
                                    .devicePixelRatio,
                                data: null,
                                auctionData: null,
                                options: {
                                  type: "mins",
                                  layout: this.landscape
                                    ? "mins-landscape"
                                    : "mins-portrait",
                                  skin:
                                    "black" === this.skin ? "dark" : "plain",
                                  market: this.market,
                                  scode: this.scode,
                                  fixNum: this.fixNum,
                                  stockUnit: f.getTradeUnit(
                                    this.stockType,
                                    this.market
                                  ),
                                  labels: f.getChartScale(
                                    this.stockType,
                                    this.market,
                                    this.scode
                                  ),
                                  count: D
                                    ? k[4]
                                    : m.utils.isDebt(this.stockType) ||
                                      m.utils.isNationalDebt(this.stockType) ||
                                      m.utils.isDebtIndex(this.stockType)
                                    ? k[5]
                                    : k[0],
                                  panhouRange: D ? [k[0], k[4]] : null,
                                  hideIndicator: this.hideIndicator,
                                  useIndicators: this.indicators.map(function (
                                    t
                                  ) {
                                    return t.key;
                                  }),
                                  minsIndicator: this.indicator,
                                  disableInteract: this.disableInteract,
                                  setting: this.setting,
                                  isHKIndex:
                                    m.utils.isHKMarket(this.market) &&
                                    m.utils.isIndex(this.stockType),
                                  isHKOrZsOrFundOrNhg:
                                    m.utils.isHKMarket(this.market) ||
                                    m.utils.isIndex(this.stockType) ||
                                    m.utils.isFund(this.stockType) ||
                                    m.utils.isNationalDebt(this.stockType) ||
                                    m.utils.isDebt(this.stockType),
                                  showIOPV: "ETF" === this.stockType,
                                  fontType: "stockFont",
                                  showAuction:
                                    this.showAuction &&
                                    (this.isAuctionTime ||
                                      this.isWaitingForTrading),
                                  auctionCount:
                                    m.utils.isHSMarket(this.market) ||
                                    m.utils.isBJMarket(this.market)
                                      ? "sec" ===
                                        (null ==
                                        (c =
                                          null == this
                                            ? void 0
                                            : this.auctionData)
                                          ? void 0
                                          : c.dType)
                                        ? 600
                                        : 11
                                      : 21,
                                  auctionLabel:
                                    m.utils.isHSMarket(this.market) ||
                                    m.utils.isBJMarket(this.market)
                                      ? "09:15~25"
                                      : "09:00~20",
                                },
                              },
                              "auctionData",
                              this.auctionData || b
                            )),
                            this.$parent.HQ_CHART_COMPOSITION &&
                              (this.$parent.minsOptions = this.options),
                            this.tradePoint.canGet &&
                              (null == (u = (h = this.tradePoint).handle) ||
                                u.call(h, !0)),
                            this.options.options.showIOPV &&
                              !this.iopvReported &&
                              (p.StockBridge.report(
                                "hq.stock_detail.iopv_brow",
                                { stockid: this.symbol }
                              ),
                              (this.iopvReported = !0)))
                          : (this.noData = !0),
                        this.autoUpdate &&
                          S &&
                          !m.utils.isHKMarket(this.market) &&
                          (this.timeout = setTimeout(function () {
                            A.getData();
                          }, 5e3)),
                        this.$emit("getQTData", g),
                        this.$emit("handleExtra", l.raw);
                    case 31:
                    case "end":
                      return i.stop();
                  }
              },
              e,
              this,
              [[3, 18]]
            );
          })
        );
      },
      retryData: function () {
        (this.dataStatus = p.COMMON_PAGE_STATUS.LOADING), this.getData();
      },
      handlePush: function (t) {
        var i, e, s, n, a;
        if (this.showAuction && this.isAuctionTime && this.isTrading)
          this.handleAuctionPush(t);
        else {
          var o = this.chartData && this.chartData.items;
          if (Array.isArray(o)) {
            var r = new Date(1e3 * t.utime);
            r.setMinutes(r.getMinutes() + 1);
            var c =
                r.getHours().toString().padStart(2, 0) +
                r.getMinutes().toString().padStart(2, 0),
              h = o[o.length - 1],
              u = o[o.length - 2];
            if (c !== h.time || this.isAfterTrading) this.updateData();
            else {
              if (null == (i = t.mins) ? void 0 : i.length) {
                var l = f.getUnit(this.stockType, this.market);
                (h.price = t.mins[0]),
                  (h.totalVolume = t.mins[1] * l),
                  (h.totalAmount = t.mins[2]),
                  (h.volume =
                    t.mins[1] -
                    ((null == u ? void 0 : u.totalVolume) || 0) / l),
                  (h.amount =
                    t.mins[2] - ((null == u ? void 0 : u.totalAmount) || 0)),
                  t.iopv && (h.iopv = t.iopv),
                  null ==
                    (s = null == (e = this.$refs.chart) ? void 0 : e.repaint) ||
                    s.call(e, { data: this.chartData });
              }
              this.hkVIP &&
                m.utils.isHKMarket(this.market) &&
                ((h.price = t.dqj),
                null ==
                  (a = null == (n = this.$refs.chart) ? void 0 : n.repaint) ||
                  a.call(n, { data: this.chartData }));
            }
          }
        }
      },
      handleAuctionPush: function (t) {
        var i, e, s, n;
        if (this.showAuction && this.isAuctionTime && this.isTrading) {
          if ("sec" === this.auctionData.dType) {
            var a = new Date(1e3 * t.utime),
              o = "09"
                .concat(a.getMinutes().toString().padStart(2, 0))
                .concat(a.getSeconds().toString().padStart(2, 0)),
              r = 60 * (o.slice(2, 4) - 15) + +o.slice(4);
            if (r < 600) {
              var c = t.fiveTrans,
                h = c.mrjg1,
                u = c.mrsl1,
                l = c.mrsl2,
                d = c.mcsl2;
              (this.auctionData.items[r] = {
                tm: o,
                p: +h || 0,
                b1p: +h || 0,
                b1v: +u || 0,
                b2v: +l || 0,
                s2v: +d || 0,
              }),
                (this.auctionData.max = Math.max(
                  this.auctionData.max,
                  +h || 0
                )),
                (this.auctionData.min = Math.min(
                  this.auctionData.min,
                  +h || 0
                )),
                (this.auctionData.maxVol = Math.max(
                  this.auctionData.maxVol,
                  (+u || 0) + (+l || 0) + (+d || 0)
                ));
            }
          } else if ("min" === this.auctionData.dType) {
            var p = new Date(1e3 * t.utime),
              m = "09".concat(
                (p.getMinutes() + (p.getSeconds() > 0 ? 1 : 0))
                  .toString()
                  .padStart(2, 0)
              ),
              f =
                null ==
                (i = this.auctionData.items[this.auctionData.items.length - 1])
                  ? void 0
                  : i.tm,
              g =
                +((null == (e = t.fiveTrans) ? void 0 : e.mrjg1) || t.dqj) || 0;
            m === f
              ? ((this.auctionData.items[this.auctionData.items.length - 1].p =
                  g),
                (this.auctionData.max = Math.max(this.auctionData.max, g)),
                (this.auctionData.min = Math.min(this.auctionData.min, g)))
              : (this.auctionUsePush = !1);
          }
          null == (n = null == (s = this.$refs.chart) ? void 0 : s.repaint) ||
            n.call(s, { auctionData: this.auctionData });
        }
      },
      getInitData: function (t) {
        this.hotfixWxBug();
        var i = {
          data:
            this.chartData && Array.isArray(this.chartData.items)
              ? l(u({}, this.chartData), { status: this.status })
              : null,
          auctionData: this.auctionData,
        };
        t && t(i);
      },
      onTouchMove: function (t) {
        var i;
        t &&
          ((this.touchMode = !0),
          (t.preClosePrice = this.preClosePrice),
          (t.fixNum = this.fixNum),
          this.$emit("onTouchMove", t),
          (null == (i = this.lastTouchData) ? void 0 : i.time) !==
            (null == t ? void 0 : t.time) &&
            ((this.lastTouchData = t), this.shakeit()));
      },
      shakeit: function () {
        var t = this;
        this.shakeTimeOut ||
          (this.shakeTimeOut = setTimeout(function () {
            p.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 200));
      },
      onTouchCancel: function () {
        (this.touchMode = !1), this.$emit("onTouchCancel");
      },
      onDoubleTap: function (t) {
        this.tapTimeout &&
          (clearTimeout(this.tapTimeout), (this.tapTimeout = null)),
          this.$emit("onDoubleTap", t);
      },
      onPopup: function () {
        var t = this;
        this.showRemindPop ||
          this.hideIndicator ||
          ((this.initSelector = !0),
          this.$nextTick(function () {
            p.StockBridge.busEmit(
              "market-detail-autoHideTradePanel",
              "minsSelector"
            ),
              t.$refs.selector.onPopup();
          }),
          p.StockBridge.report("hq.stock_detail.indicator_switch_click", {
            stockid: this.symbol,
          }));
      },
      onSwitchIndicator: function (t) {
        (this.options.options.minsIndicator = t),
          (this.setting.minsIndicator = t),
          this.$emit("updateSetting", this.setting),
          p.StockBridge.report("hq.stock_detail.indicator_area_click", {
            stockid: this.symbol,
          });
      },
      switchIndicator: function (t, i) {
        (this.options = l(u({}, this.options), {
          options: l(u({}, this.options.options), { minsIndicator: i }),
        })),
          (this.setting.minsIndicator = i),
          this.$emit("updateSetting", this.setting),
          p.StockBridge.report("hq.stock_detail.indicator_area_click", {
            stockid: this.symbol,
          });
      },
      onBarTap: function (t, i) {
        this.$parent.HQ_CHART_COMPOSITION &&
          this.$parent.$emit("onBarTap", t, i);
      },
      onTipTap: function (t) {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("onTipTap", t);
      },
    },
  };
Array ||
  (
    p.resolveComponent("mins") +
    p.resolveComponent("Status") +
    p.resolveComponent("NoData") +
    p.resolveComponent("Selector")
  )();
var v = p._export_sfc(D, [
  [
    "render",
    function (t, i, e, s, n, a) {
      return p.e(
        { a: n.options && !n.noData },
        n.options && !n.noData
          ? {
              b: p.sr("chart", "fa5a30a8-0"),
              c: p.o(a.onTouchMove, 3613),
              d: p.o(a.onTouchCancel, 3614),
              e: p.o(a.onSwitchIndicator, 3615),
              f: p.o(a.onPopup, 3616),
              g: p.o(a.onBarTap, 3617),
              h: p.o(a.onTipTap, 3618),
              i: p.o(a.onDoubleTap, 3619),
              j: p.o(a.getInitData, 3620),
              k: p.o(a.handleError, 3621),
              l: p.p({
                id: "chart",
                type: "mins",
                width: e.width,
                height: e.height,
                options: n.options,
              }),
            }
          : {},
        { m: n.dataStatus },
        n.dataStatus
          ? {
              n: p.o(function (t) {
                return a.retryData();
              }, 3622),
              o: p.p({ showErrorImg: !1, type: n.dataStatus }),
            }
          : {},
        { p: n.noData },
        n.noData ? { q: p.p({ skin: e.skin, status: n.status }) } : {},
        { r: n.initSelector },
        n.initSelector
          ? {
              s: p.sr("selector", "fa5a30a8-3"),
              t: p.o(a.showLesson, 3623),
              v: p.p({
                type: "mins",
                skin: e.skin,
                indicators: a.indicators,
                indicator: a.indicator,
                landscape: e.landscape,
                showAuction: e.showAuction,
              }),
            }
          : {},
        { w: "".concat(e.width, "px"), x: "".concat(e.height, "px") }
      );
    },
  ],
]);
wx.createComponent(v);
