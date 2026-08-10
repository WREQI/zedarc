var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
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
  p = require("../../../stock-hq-data/index.js"),
  m = require("../utils.js"),
  d = require("../../../../../../common/vendor.js"),
  g = [
    { key: "volume", value: "成交量" },
    { key: "macd", value: "MACD" },
    { key: "rsi", value: "RSI" },
  ],
  f = {
    components: {
      mins: function () {
        return "../../../../../quote/@tencent/stock-kline/mins.js";
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
          return m.mockBridge;
        },
      },
      prefetch: { default: function () {} },
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
    },
    data: function () {
      return {
        options: null,
        timeout: null,
        noData: !1,
        initSelector: !1,
        stockType: this.assertStockType || "",
        preClosePrice: 0,
        fixNum: 2,
        defaultSetting: m.getDefaultSetting(),
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return p.utils.getSymbol(this.market, this.scode);
      },
      indicators: function () {
        return g;
      },
      indicator: function () {
        return this.setting.minsIndicator;
      },
      showAuction: function () {
        if (
          (p.utils.isHSMarket(this.market) ||
            p.utils.isHKMarket(this.market)) &&
          !p.utils.isIndex(this.stockType)
        )
          switch (this.setting.auctionMode) {
            case "open":
              return !0;
            case "close":
              return !1;
            case "auto":
              return this.isAuctionTime || this.isWaitingForTrading;
          }
        return !1;
      },
      isMP: function () {
        return "mp" === this.hqBridge.ENV;
      },
      isBCCurrency: function () {
        return p.utils.isBCCurrency(this.market);
      },
    },
    created: function () {
      var t = this;
      this.detailApi ||
        (this.detailApi = new p.DetailApi(function () {
          var i;
          return (i = t.hqBridge).request.apply(i, arguments);
        })),
        this.getData();
    },
    beforeUnmount: function () {
      clearTimeout(this.timeout),
        (this.options = null),
        (this.detailApi = null);
    },
    methods: {
      showLesson: function () {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("showLesson");
      },
      tabActivated: function () {
        this.getData();
      },
      tabDeactivated: function () {
        clearTimeout(this.timeout);
      },
      updateData: function () {
        this.getData();
      },
      getData: function () {
        return (
          (e = this),
          null,
          (s = t().mark(function () {
            var e,
              s,
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
              f,
              k,
              T,
              y,
              D,
              v,
              S,
              b,
              x,
              M,
              w,
              I = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.noData = !1),
                        (r =
                          (null == (e = this.prefetch)
                            ? void 0
                            : e.getChartData) && "ETF" !== this.stockType
                            ? this.prefetch.getChartData(
                                this.scode,
                                this.market,
                                this.currency
                              )
                            : this.detailApi.getMins(
                                {
                                  market: this.market,
                                  scode: this.scode,
                                  currency: this.currency,
                                  needIOPV:
                                    "ETF" === this.stockType &&
                                    "wzq" === this.hqBridge.ENV,
                                  openId: "stockfe",
                                },
                                { needProcess: !0, useNewUrl: !0, signV2: !0 }
                              )),
                        (l = {
                          dType: "",
                          items: [],
                          max: 0,
                          min: Number.MAX_SAFE_INTEGER,
                          maxVol: 0,
                        }),
                        (p.utils.isHSMarket(this.market) ||
                          (p.utils.isHKMarket(this.market) &&
                            !p.utils.isIndex(this.stockType))) &&
                        "close" !== this.setting.auctionMode
                          ? ((d = {
                              market: this.market,
                              scode: this.scode,
                              stockType: this.stockType,
                            }),
                            (c = (
                              null == (s = this.prefetch)
                                ? void 0
                                : s.getAuctionData
                            )
                              ? this.prefetch.getAuctionData(d)
                              : this.detailApi.getAuctionMins(d, {
                                  needProcess: !0,
                                })))
                          : (c = Promise.resolve(l)),
                        (t.prev = 3),
                        (t.next = 6),
                        Promise.all([r, c])
                      );
                    case 6:
                      (g = t.sent),
                        (f = i(g, 2)),
                        (k = f[0]),
                        (T = f[1]),
                        (h = k),
                        (u = T),
                        (t.next = 19);
                      break;
                    case 13:
                      return (
                        (t.prev = 13), (t.t0 = t.catch(3)), (t.next = 17), r
                      );
                    case 17:
                      (h = t.sent), (u = l);
                    case 19:
                      if (
                        ((y = p.utils.isUSMarket(this.market)
                          ? p.utils.hackUSSymbol(this.symbol)
                          : this.symbol),
                        null == (n = null == h ? void 0 : h.raw)
                          ? void 0
                          : n.qt)
                      ) {
                        t.next = 22;
                        break;
                      }
                      return t.abrupt("return");
                    case 22:
                      (D = h.raw.qt[y] || h.raw.qt.fields),
                        (this.stockType = m.getStockType(this.market, D)),
                        this.$parent.HQ_CHART_COMPOSITION &&
                          (this.$parent.stockType = this.stockType),
                        (this.preClosePrice = p.utils.isForex(this.market)
                          ? +D[6]
                          : +D[4]),
                        (this.fixNum =
                          (null ==
                          (a = (
                            this.isBCCurrency
                              ? p.utils.formatCurrency(D[3])
                              : D[3]
                          ).split(".")[1])
                            ? void 0
                            : a.length) || 2),
                        (v = m.getRenderPoint(this.stockType, this.market)),
                        (S = m.judgeTrading(
                          this.stockType,
                          this.market,
                          h.raw.qt.market
                        )),
                        (b = S.isTrading),
                        (x = S.isAuctionTime),
                        (M = S.isWaitingForTrading),
                        (w = S.isAfterTrading),
                        (this.isTrading = b),
                        (this.isAuctionTime = x),
                        (this.isWaitingForTrading = M),
                        (this.isAfterTrading = w),
                        (null == (o = h.chartData) ? void 0 : o.length)
                          ? ((this.chartData = {
                              items: h.chartData,
                              preClose: this.preClosePrice,
                            }),
                            (this.auctionData = u),
                            (this.options = {
                              ready: !0,
                              isTrading: b,
                              isAuctionTime: x,
                              timestamp: Date.now(),
                              data: this.isMP ? null : this.chartData,
                              auctionData: this.isMP ? null : this.auctionData,
                              options: {
                                type: "mins",
                                layout: this.landscape
                                  ? "mins-landscape"
                                  : "mins-portrait",
                                skin: this.skin || "plain",
                                market: this.market,
                                scode: this.scode,
                                fixNum: this.fixNum,
                                stockUnit: m.getTradeUnit(
                                  this.stockType,
                                  this.market
                                ),
                                labels: m.getChartScale(
                                  this.stockType,
                                  this.market
                                ),
                                count:
                                  p.utils.isKeChuangStock(this.stockType) ||
                                  p.utils.isChuangYeStock(this.stockType)
                                    ? v[4]
                                    : p.utils.isDebt(this.stockType) ||
                                      "ZQ-GZ" === this.stockType ||
                                      p.utils.isDebtIndex(this.stockType)
                                    ? v[5]
                                    : v[0],
                                kch: p.utils.isKeChuangStock(this.stockType)
                                  ? [v[0], v[4]]
                                  : null,
                                chy: p.utils.isChuangYeStock(this.stockType)
                                  ? [v[0], v[4]]
                                  : null,
                                hideIndicator: this.hideIndicator,
                                useIndicators: this.indicators.map(function (
                                  t
                                ) {
                                  return t.key;
                                }),
                                minsIndicator: this.indicator,
                                disableInteract: this.disableInteract,
                                setting: this.setting,
                                showAuction: this.showAuction,
                                auctionCount: p.utils.isHSMarket(this.market)
                                  ? "sec" === u.dType
                                    ? 600
                                    : 11
                                  : 21,
                                auctionLabel: p.utils.isHSMarket(this.market)
                                  ? "09:15~25"
                                  : "09:00~20",
                                isHKIndex:
                                  p.utils.isHKMarket(this.market) &&
                                  p.utils.isIndex(this.stockType),
                                isHKOrZsOrFundOrNhg:
                                  p.utils.isHKMarket(this.market) ||
                                  p.utils.isIndex(this.stockType) ||
                                  p.utils.isFund(this.stockType) ||
                                  "ZQ-GZ" === this.stockType ||
                                  p.utils.isDebt(this.stockType),
                                showIOPV:
                                  "ETF" === this.stockType &&
                                  "wzq" === this.hqBridge.ENV,
                              },
                            }),
                            this.$parent.HQ_CHART_COMPOSITION &&
                              (this.$parent.minsOptions = this.options))
                          : (this.noData = !0),
                        this.autoUpdate &&
                          b &&
                          !p.utils.isHKMarket(this.market) &&
                          (this.timeout = setTimeout(function () {
                            I.getData();
                          }, 5e3)),
                        this.$emit("getQTData", D),
                        this.$emit("handleExtra", h.raw);
                    case 26:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[3, 13]]
            );
          })),
          new Promise(function (t, i) {
            var n = function (t) {
                try {
                  o(s.next(t));
                } catch (t) {
                  i(t);
                }
              },
              a = function (t) {
                try {
                  o(s.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              o = function (i) {
                return i.done
                  ? t(i.value)
                  : Promise.resolve(i.value).then(n, a);
              };
            o((s = s.apply(e, null)).next());
          })
        );
        var e, s;
      },
      handlePush: function (t) {
        var i;
        if (!this.isMP || this.chartData) {
          var e = new Date(1e3 * t.utime);
          e.setMinutes(e.getMinutes() + 1);
          var s =
              e.getHours().toString().padStart(2, 0) +
              e.getMinutes().toString().padStart(2, 0),
            n = this.isMP ? this.chartData.items : this.options.data.items,
            a = n[n.length - 1],
            o = n[n.length - 2];
          if (this.isAuctionTime)
            this.handleAuctionPush(t), "0926" === s && this.updateData();
          else if (s !== a.time || this.isAfterTrading) this.updateData();
          else if (null == (i = t.mins) ? void 0 : i.length) {
            var r = m.getUnit(this.stockType, this.market);
            (a.price = t.mins[0]),
              (a.totalVolume = t.mins[1] * r),
              (a.totalAmount = t.mins[2]),
              (a.volume =
                t.mins[1] - ((null == o ? void 0 : o.totalVolume) || 0) / r),
              (a.amount =
                t.mins[2] - ((null == o ? void 0 : o.totalAmount) || 0)),
              t.iopv && (a.iopv = t.iopv),
              this.isMP
                ? this.$refs.chart.repaint({
                    data: this.chartData,
                    auctionData: this.auctionData,
                  })
                : (this.options = u({}, this.options));
          }
        }
      },
      handleAuctionPush: function (t) {
        var i, e;
        if (this.showAuction && this.isAuctionTime) {
          var s = this.isMP ? this.auctionData : this.options.auctionData;
          if ("sec" === s.dType) {
            var n = new Date(1e3 * t.utime),
              a = "09"
                .concat(n.getMinutes().toString().padStart(2, 0))
                .concat(n.getSeconds().toString().padStart(2, 0)),
              o = 60 * (a.slice(2, 4) - 15) + +a.slice(4);
            if (o < 600) {
              var r = t.fiveTrans,
                c = r.mrjg1,
                h = r.mrsl1,
                l = r.mrsl2,
                p = r.mcsl2;
              (s.items[o] = {
                tm: a,
                p: +c || 0,
                b1p: +c || 0,
                b1v: +h || 0,
                b2v: +l || 0,
                s2v: +p || 0,
              }),
                (s.max = Math.max(s.max, +c || 0)),
                (s.min = Math.min(s.min, +c || 0)),
                (s.maxVol = Math.max(
                  s.maxVol,
                  (+h || 0) + (+l || 0) + (+p || 0)
                )),
                this.isMP
                  ? this.$refs.chart.repaint({
                      data: this.chartData,
                      auctionData: this.auctionData,
                    })
                  : (this.options = u({}, this.options));
            }
          } else if ("min" === s.dType) {
            var m = new Date(1e3 * t.utime),
              d = "09".concat(
                (m.getMinutes() + (m.getSeconds() > 0 ? 1 : 0))
                  .toString()
                  .padStart(2, 0)
              ),
              g = null == (i = s.items[s.items.length - 1]) ? void 0 : i.tm,
              f =
                +((null == (e = t.fiveTrans) ? void 0 : e.mrjg1) || t.dqj) || 0;
            d === g
              ? ((s.items[s.items.length - 1].p = f),
                (s.max = Math.max(s.max, f)),
                (s.min = Math.min(s.min, f)),
                this.isMP
                  ? this.$refs.chart.repaint({
                      data: this.chartData,
                      auctionData: this.auctionData,
                    })
                  : (this.options = u({}, this.options)))
              : this.updateData();
          }
        }
      },
      getInitData: function (t) {
        this.hotfixWxBug();
        var i = { data: this.chartData, auctionData: this.auctionData };
        t && t(i);
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
        (t.preClosePrice = this.preClosePrice),
          (t.fixNum = this.fixNum),
          this.$emit("onTouchMove", t);
      },
      onTouchCancel: function () {
        this.$emit("onTouchCancel");
      },
      onDoubleTap: function (t) {
        this.$emit("onDoubleTap", t);
      },
      onPopup: function () {
        var t = this;
        (this.initSelector = !0),
          this.$nextTick(function () {
            t.$refs.selector.onPopup();
          }),
          this.hqBridge.report("hq.stock_detail.indicator_switch_click");
      },
      onSwitchIndicator: function (t) {
        (this.options.options.minsIndicator = t),
          (this.setting.minsIndicator = t),
          this.$emit("updateSetting", this.setting),
          this.hqBridge.report("hq.stock_detail.indicator_area_click");
      },
      switchIndicator: function (t, i) {
        (this.options = l(u({}, this.options), {
          options: l(u({}, this.options.options), { minsIndicator: i }),
        })),
          (this.setting.minsIndicator = i),
          this.$emit("updateSetting", this.setting),
          this.hqBridge.report("hq.stock_detail.indicator_area_click");
      },
      onTipTap: function () {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("onTipTap");
      },
    },
  };
Array ||
  (
    d.resolveComponent("mins") +
    d.resolveComponent("NoData") +
    d.resolveComponent("Selector")
  )();
var k = d._export_sfc(f, [
  [
    "render",
    function (t, i, e, s, n, a) {
      return d.e(
        { a: n.options },
        n.options
          ? {
              b: d.sr("chart", "15367180-0"),
              c: d.o(a.onTouchMove, 2049),
              d: d.o(a.onTouchCancel, 2050),
              e: d.o(a.onSwitchIndicator, 2051),
              f: d.o(a.onPopup, 2052),
              g: d.o(a.onTipTap, 2053),
              h: d.o(a.onDoubleTap, 2054),
              i: d.o(a.getInitData, 2055),
              j: d.p({
                id: "chart",
                type: "mins",
                width: e.width,
                height: e.height,
                options: n.options,
              }),
            }
          : {},
        { k: n.noData },
        (n.noData, {}),
        { l: n.initSelector },
        n.initSelector
          ? {
              m: d.sr("selector", "15367180-2"),
              n: d.o(a.showLesson, 2056),
              o: d.p({
                type: "mins",
                skin: e.skin,
                indicators: a.indicators,
                indicator: a.indicator,
                showAuction: a.showAuction,
              }),
            }
          : {},
        { p: "".concat(e.width, "px"), q: "".concat(e.height, "px") }
      );
    },
  ],
]);
wx.createComponent(k);
