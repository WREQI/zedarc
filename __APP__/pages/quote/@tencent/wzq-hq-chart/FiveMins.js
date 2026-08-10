require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  s = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  h = function (t, e, s) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s);
  },
  c = function (t, i) {
    for (var s in i || (i = {})) o.call(i, s) && h(t, s, i[s]);
    if (n) {
      var a,
        c = e(n(i));
      try {
        for (c.s(); !(a = c.n()).done; ) {
          s = a.value;
          r.call(i, s) && h(t, s, i[s]);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }
    }
    return t;
  },
  u = function (t, e) {
    return s(t, a(e));
  },
  l = require("../../../../common/vendor.js"),
  d = require("../stock-hq-data/index.js"),
  p = require("prefetch.js"),
  m = require("mixins/Share.js"),
  f = [
    { key: "volume", value: "成交量" },
    { key: "macd", value: "MACD" },
    { key: "rsi", value: "RSI" },
  ],
  T = {
    components: {
      mins: function () {
        return "../stock-kline/mins.js";
      },
      NoData: function () {
        return "./components/NoData.js";
      },
      Status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    mixins: [m.Share],
    inject: {
      hqBridge: {},
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
      customSetting: Object,
      landscape: Boolean,
      disableTapEvent: Boolean,
    },
    data: function () {
      return {
        dataStatus: p.COMMON_PAGE_STATUS.LOADING,
        options: null,
        noData: !1,
        stockType: this.assertStockType || "",
        preClosePrice: 0,
        fixNum: 2,
        defaultSetting: p.getDefaultSetting(),
        status: "",
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return d.utils.getSymbol(this.market, this.scode);
      },
      indicators: function () {
        return f;
      },
      indicator: function () {
        return this.setting.minsIndicator;
      },
      isBCCurrency: function () {
        return d.utils.isBCCurrency(this.market);
      },
    },
    watch: {
      hideIndicator: function (t) {
        if (this.options) {
          var e = u(c({}, this.options.options), { hideIndicator: t });
          this.options = u(c({}, this.options), { options: e });
        }
      },
    },
    created: function () {
      (this.isMP = ["mpwzq", "mpweapp"].includes("mpweapp")),
        this.getData(),
        (this.tapTimeout = null);
    },
    mounted: function () {
      this.hqBridge.busOn("DisableTouchEvent", this.disableTouchEvent),
        this.isMP &&
          this.hqBridge.busOn(
            "getChartPath-".concat(this.scode),
            this.handleChartShare
          );
    },
    beforeUnmount: function () {
      (this.chartData = null),
        this.hqBridge.busOff("DisableTouchEvent", this.disableTouchEvent),
        this.isMP &&
          this.hqBridge.busOff(
            "getChartPath-".concat(this.scode),
            this.handleChartShare
          );
    },
    methods: {
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
      tabActivated: function () {
        this.getData();
      },
      tabDeactivated: function () {},
      updateData: function () {
        this.getData();
      },
      getData: function () {
        return (
          (e = this),
          null,
          (i = t().mark(function () {
            var e, i, s, a, n, o, r, h, l, m;
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
                        p.detailApi.getFmins(
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
                      (n = t.sent),
                        "{}" === JSON.stringify(n)
                          ? (this.dataStatus = p.COMMON_PAGE_STATUS.ERROR)
                          : (this.dataStatus = null),
                        (o = n.chartData.items.length) &&
                          0 == +n.chartData.items[o - 1].price &&
                          n.chartData.items.splice(o - 1, 1),
                        (t.next = 13);
                      break;
                    case 10:
                      return (
                        (t.prev = 10),
                        (t.t0 = t.catch(1)),
                        t.abrupt(
                          "return",
                          void (this.dataStatus = p.COMMON_PAGE_STATUS.ERROR)
                        )
                      );
                    case 13:
                      if (
                        ((r = d.utils.isUSMarket(this.market)
                          ? d.utils.hackUSSymbol(this.symbol)
                          : this.symbol),
                        null == (e = null == n ? void 0 : n.raw)
                          ? void 0
                          : e.qt)
                      ) {
                        t.next = 16;
                        break;
                      }
                      return t.abrupt("return");
                    case 16:
                      (h = n.raw.qt[r] || n.raw.qt.fields),
                        (this.stockType = p.getStockType(this.market, h)),
                        (this.preClosePrice = n.chartData.preClose),
                        (this.fixNum =
                          (null ==
                          (i = (
                            this.isBCCurrency
                              ? d.utils.formatCurrency(h[3])
                              : h[3]
                          ).split(".")[1])
                            ? void 0
                            : i.length) || 2),
                        (l = p.getRenderPoint(
                          this.stockType,
                          this.market,
                          this.scode
                        )),
                        (m =
                          d.utils.isDebt(this.stockType) ||
                          d.utils.isDebtIndex(this.stockType) ||
                          d.utils.isNationalDebt(this.stockType)),
                        (this.status = h[40]),
                        !["D", "U", "I", "N"].includes(this.status) &&
                        (null ==
                        (a = null == (s = n.chartData) ? void 0 : s.items)
                          ? void 0
                          : a.length)
                          ? ((this.chartData = n.chartData),
                            (this.options = {
                              ready: !0,
                              timestamp: Date.now(),
                              devicePixelRatio: this.isMP
                                ? getApp().globalData.systemInfo
                                    .devicePixelRatio
                                : window.devicePixelRatio,
                              platform:
                                this.isMP &&
                                getApp().globalData.systemInfo.platform,
                              data: this.isMP ? null : this.chartData,
                              options: {
                                type: "fmins",
                                hideAxisY: !0,
                                isFreeMiddleLine: !0,
                                layout: this.landscape
                                  ? "mins-landscape"
                                  : "mins-portrait",
                                skin: this.skin || "plain",
                                market: this.market,
                                scode: this.scode,
                                fixNum: this.fixNum,
                                stockUnit: p.getTradeUnit(
                                  this.stockType,
                                  this.market
                                ),
                                labels: n.chartData.labels,
                                count: m ? l[6] : l[1],
                                daysConf: {
                                  multiDays: !1,
                                  connectLine: !0,
                                  eachDayCount: (m ? l[6] : l[1]) / 5,
                                },
                                hideIndicator: this.hideIndicator,
                                useIndicators: this.indicators.map(function (
                                  t
                                ) {
                                  return t.key;
                                }),
                                minsIndicator: "volume",
                                disableInteract:
                                  this.disableTapEvent || this.disableInteract,
                                setting: u(c({}, this.setting), {
                                  vlineCount: 0,
                                }),
                                isHKIndex:
                                  d.utils.isHKMarket(this.market) &&
                                  d.utils.isIndex(this.stockType),
                                isHKOrZsOrFundOrNhg:
                                  d.utils.isHKMarket(this.market) ||
                                  d.utils.isIndex(this.stockType) ||
                                  d.utils.isFund(this.stockType) ||
                                  d.utils.isNationalDebt(this.stockType) ||
                                  d.utils.isDebt(this.stockType),
                                hidePriceLine: !1,
                                paddingTop: 10,
                                paddingBottom: 10,
                                yAxis: { width: 0 },
                                isWzqMiniProgram: !0,
                                fontType: "stockFont",
                                hideScale: !0,
                                hideGrid: !0,
                              },
                            }),
                            this.tradePoint.canGet &&
                              this.tradePoint.handle(!0))
                          : (this.noData = !0),
                        this.$emit("getQTData", h),
                        this.$emit("handleExtra", n.raw);
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              s,
              this,
              [[1, 10]]
            );
          })),
          new Promise(function (t, s) {
            var a = function (t) {
                try {
                  o(i.next(t));
                } catch (t) {
                  s(t);
                }
              },
              n = function (t) {
                try {
                  o(i.throw(t));
                } catch (t) {
                  s(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, n);
              };
            o((i = i.apply(e, null)).next());
          })
        );
        var e, i;
      },
      retryData: function () {
        (this.dataStatus = p.COMMON_PAGE_STATUS.LOADING), this.getData();
      },
      getInitData: function (t) {
        this.isMP && this.hotfixWxBug();
        var e = { data: this.chartData };
        t && t(e);
      },
      onTouchMove: function (t) {
        var e, i;
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
        !this.shakeTimeOut &&
          this.isMP &&
          (this.shakeTimeOut = setTimeout(function () {
            l.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 200));
      },
      onTouchCancel: function () {
        this.$emit("onTouchCancel");
      },
      onDoubleTap: function () {
        this.disableTapEvent ||
          (this.tapTimeout &&
            (clearTimeout(this.tapTimeout), (this.tapTimeout = null)),
          this.$emit("onDoubleTap"));
      },
      onBarTap: function (t, e) {
        this.disableTapEvent ||
          (this.$parent.HQ_CHART_COMPOSITION &&
            this.$parent.$emit("onBarTap", t, e));
      },
      onTap: function () {
        var t = this;
        this.landscape ||
          this.disableTapEvent ||
          (l.StockBridge.report("hq.stock_detail.chart.oncetap.fivemins.click"),
          (this.tapTimeout = setTimeout(function () {
            t.isMP && l.wx$1.vibrateShort({ type: "medium" }),
              t.changeSetting(),
              clearTimeout(t.tapTimeout),
              (t.tapTimeout = null);
          }, 250)));
      },
      changeSetting: function () {
        var t = (this.setting || {}).minsSetting || {},
          e = t.showIndicator,
          i = void 0 !== e && e,
          s = t.showFive,
          a = void 0 !== s && s,
          n = t.showAuction,
          o = u(c({}, this.setting), {
            minsSetting: { showIndicator: !i, showFive: !a, showAuction: n },
          });
        this.$emit("updateSetting", o);
      },
    },
  };
Array ||
  (
    l.resolveComponent("mins") +
    l.resolveComponent("Status") +
    l.resolveComponent("NoData")
  )();
var g = l._export_sfc(T, [
  [
    "render",
    function (t, e, i, s, a, n) {
      return l.e(
        { a: a.options && !a.noData },
        a.options && !a.noData
          ? {
              b: l.sr("chart", "273451cf-0"),
              c: l.o(n.onTouchMove, 6007),
              d: l.o(n.onTouchCancel, 6008),
              e: l.o(n.onDoubleTap, 6009),
              f: l.o(n.onBarTap, 6010),
              g: l.o(n.getInitData, 6011),
              h: l.o(n.onTap, 6012),
              i: l.o(n.handleError, 6013),
              j: l.p({
                id: "chart",
                type: "fmins",
                width: i.width,
                height: i.height,
                options: a.options,
              }),
            }
          : {},
        { k: a.dataStatus },
        a.dataStatus
          ? {
              l: l.o(function (t) {
                return n.retryData();
              }, 6014),
              m: l.p({ "is-simple-mode": !0, type: a.dataStatus }),
            }
          : {},
        { n: a.noData },
        a.noData ? { o: l.p({ status: a.status }) } : {},
        { p: "".concat(i.width, "px"), q: "".concat(i.height, "px") }
      );
    },
  ],
]);
wx.createComponent(g);
