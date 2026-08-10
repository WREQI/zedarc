require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../common/vendor.js"),
  i = require("../../../@tencent/stock-hq-data/index.js"),
  a = require("../../ChartWrapper.js"),
  s = require("./mixins/Share.js"),
  n = [
    { key: "volume", value: "成交量" },
    { key: "macd", value: "MACD" },
    { key: "rsi", value: "RSI" },
  ],
  o = null,
  r = getApp().globalData,
  c = {
    components: {
      mins: function () {
        return "../../../@tencent/stock-kline/mins.js";
      },
      NoData: function () {
        return "../../../@tencent/wzq-hq-chart/components/NoData.js";
      },
    },
    mixins: [s.Share],
    inject: {
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
      hideIndicator: Boolean,
      disableInteract: Boolean,
      customSetting: Object,
      landscape: Boolean,
    },
    data: function () {
      return {
        dataStatus: e.COMMON_PAGE_STATUS.LOADING,
        options: null,
        noData: !1,
        stockType: this.assertStockType || "",
        preClosePrice: 0,
        fixNum: 2,
        defaultSetting: a.getDefaultSetting(),
        status: "",
        touchMode: !1,
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return i.utils.getSymbol(this.market, this.scode);
      },
      indicators: function () {
        return n;
      },
      indicator: function () {
        return this.setting.minsIndicator;
      },
      isBCCurrency: function () {
        return i.utils.isBCCurrency(this.market);
      },
    },
    watch: {
      touchMode: function (t) {
        t &&
          e.StockBridge.report("hq.detail.chart_touch_cross", {
            stockid: this.symbol,
          });
      },
    },
    created: function () {
      o ||
        (o = new i.DetailApi(function () {
          for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
            a[s] = arguments[s];
          return 1 === a.length
            ? e.StockBridge.request(a[0], "GET", {}, { forceCallback: !0 })
            : (a[3] && (a[3].forceCallback = !0),
              (t = e.StockBridge).request.apply(t, a));
        })),
        this.getData(),
        (this.tapTimeout = null);
    },
    methods: {
      reportException: function (t) {
        this.$emit("error", t);
      },
      tabActivated: function () {
        this.getData();
      },
      tabDeactivated: function () {},
      updateData: function () {
        this.getData();
      },
      getData: function () {
        return (
          (s = this),
          null,
          (n = t().mark(function () {
            var s, n, c, u, h, l, d, p, m, f;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.tradePoint.canGet && this.tradePoint.prefetch(),
                        (this.noData = !1),
                        (t.prev = 1),
                        (t.next = 4),
                        o.getFmins(
                          {
                            market: this.market,
                            scode: this.scode,
                            currency: this.currency,
                            openId: "stockfe",
                          },
                          { needProcess: !0, useNewUrl: !0, signV2: !0 }
                        )
                      );
                    case 4:
                      (h = t.sent),
                        "{}" === JSON.stringify(h)
                          ? (this.dataStatus = e.COMMON_PAGE_STATUS.ERROR)
                          : (this.dataStatus = null),
                        (l = h.chartData.items.length) &&
                          0 == +h.chartData.items[l - 1].price &&
                          h.chartData.items.splice(l - 1, 1),
                        (t.next = 13);
                      break;
                    case 10:
                      return (
                        (t.prev = 10),
                        (t.t0 = t.catch(1)),
                        t.abrupt(
                          "return",
                          void (this.dataStatus = e.COMMON_PAGE_STATUS.ERROR)
                        )
                      );
                    case 13:
                      if (
                        null == (s = null == h ? void 0 : h.raw) ? void 0 : s.qt
                      ) {
                        t.next = 15;
                        break;
                      }
                      return t.abrupt("return");
                    case 15:
                      (d = i.utils.isUSMarket(this.market)
                        ? i.utils.hackUSSymbol(this.symbol)
                        : this.symbol),
                        (p = h.raw.qt[d] || h.raw.qt.fields),
                        (this.stockType = a.getStockType(this.market, p)),
                        (this.preClosePrice = h.chartData.preClose),
                        (this.fixNum =
                          (null ==
                          (n = (
                            this.isBCCurrency
                              ? i.utils.formatCurrency(p[3])
                              : p[3]
                          ).split(".")[1])
                            ? void 0
                            : n.length) || 2),
                        (m = a.getRenderPoint(
                          this.stockType,
                          this.market,
                          this.scode
                        )),
                        (f =
                          i.utils.isDebt(this.stockType) ||
                          i.utils.isDebtIndex(this.stockType) ||
                          i.utils.isNationalDebt(this.stockType)),
                        (this.status = p[40]),
                        !["D", "U"].includes(this.status) &&
                        (null ==
                        (u = null == (c = h.chartData) ? void 0 : c.items)
                          ? void 0
                          : u.length)
                          ? ((this.chartData = h.chartData),
                            (this.options = {
                              ready: !0,
                              timestamp: Date.now(),
                              data: null,
                              devicePixelRatio: r.systemInfo.devicePixelRatio,
                              platform: r.systemInfo.platform,
                              options: {
                                type: "fmins",
                                layout: this.landscape
                                  ? "mins-landscape"
                                  : "mins-portrait",
                                skin: "black" === this.skin ? "dark" : "plain",
                                market: this.market,
                                scode: this.scode,
                                fixNum: this.fixNum,
                                stockUnit: a.getTradeUnit(
                                  this.stockType,
                                  this.market
                                ),
                                labels: h.chartData.labels,
                                count: f ? m[6] : m[1],
                                daysConf: {
                                  multiDays: !0,
                                  eachDayCount: (f ? m[6] : m[1]) / 5,
                                },
                                hideIndicator: this.hideIndicator,
                                useIndicators: this.indicators.map(function (
                                  t
                                ) {
                                  return t.key;
                                }),
                                minsIndicator: "volume",
                                disableInteract: this.disableInteract,
                                setting: this.setting,
                                isHKIndex:
                                  i.utils.isHKMarket(this.market) &&
                                  i.utils.isIndex(this.stockType),
                                isHKOrZsOrFundOrNhg:
                                  i.utils.isHKMarket(this.market) ||
                                  i.utils.isIndex(this.stockType) ||
                                  i.utils.isFund(this.stockType) ||
                                  i.utils.isNationalDebt(this.stockType) ||
                                  i.utils.isDebt(this.stockType),
                              },
                            }),
                            this.tradePoint.canGet &&
                              this.tradePoint.handle(!0))
                          : (this.noData = !0),
                        this.$emit("getQTData", p),
                        this.$emit("handleExtra", h.raw);
                    case 19:
                    case "end":
                      return t.stop();
                  }
              },
              c,
              this,
              [[1, 10]]
            );
          })),
          new Promise(function (t, e) {
            var i = function t(i) {
                try {
                  o(n.next(i));
                } catch (t) {
                  e(t);
                }
              },
              a = function (t) {
                try {
                  o(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, a);
              };
            o((n = n.apply(s, null)).next());
          })
        );
        var s, n;
      },
      retryData: function () {
        (this.dataStatus = e.COMMON_PAGE_STATUS.LOADING), this.getData();
      },
      getInitData: function (t) {
        this.hotfixWxBug();
        var e = { data: this.chartData };
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
      onTouchMove: function (t) {
        var e, i;
        (this.touchMode = !0),
          (t.preClosePrice = this.preClosePrice),
          (t.fixNum = this.fixNum),
          this.$emit("onTouchMove", t),
          ((null == (e = this.lastTouchData) ? void 0 : e.date) ===
            (null == t ? void 0 : t.date) &&
            (null == (i = this.lastTouchData) ? void 0 : i.time) ===
              (null == t ? void 0 : t.time)) ||
            ((this.lastTouchData = t), this.shakeit());
      },
      shakeit: function () {
        var t = this;
        this.shakeTimeOut ||
          (this.shakeTimeOut = setTimeout(function () {
            e.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 200));
      },
      onTouchCancel: function () {
        (this.touchMode = !1), this.$emit("onTouchCancel");
      },
      onDoubleTap: function () {
        this.tapTimeout &&
          (clearTimeout(this.tapTimeout), (this.tapTimeout = null)),
          this.$emit("onDoubleTap");
      },
      onBarTap: function (t, e) {
        this.$parent.HQ_CHART_COMPOSITION &&
          this.$parent.$emit("onBarTap", t, e);
      },
    },
  };
Array ||
  (
    e.resolveComponent("mins") +
    e.resolveComponent("st-status") +
    e.resolveComponent("NoData")
  )();
var u = e._export_sfc(c, [
  [
    "render",
    function (t, i, a, s, n, o) {
      return e.e(
        { a: n.options && !n.noData },
        n.options && !n.noData
          ? {
              b: e.sr("chart", "96a2c204-0"),
              c: e.o(o.onTouchMove, 3624),
              d: e.o(o.onTouchCancel, 3625),
              e: e.o(o.onDoubleTap, 3626),
              f: e.o(o.onBarTap, 3627),
              g: e.o(o.getInitData, 3628),
              h: e.o(o.reportException, 3629),
              i: e.p({
                id: "chart",
                type: "fmins",
                width: a.width,
                height: a.height,
                options: n.options,
              }),
            }
          : {},
        { j: n.dataStatus },
        n.dataStatus
          ? {
              k: e.o(function (t) {
                return o.retryData();
              }, 3630),
              l: e.p({ type: n.dataStatus }),
            }
          : {},
        { m: n.noData },
        n.noData ? { n: e.p({ skin: a.skin, status: n.status }) } : {},
        { o: "".concat(a.width, "px"), p: "".concat(a.height, "px") }
      );
    },
  ],
]);
wx.createComponent(u);
