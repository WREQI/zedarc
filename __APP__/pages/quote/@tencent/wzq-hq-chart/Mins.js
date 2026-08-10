require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  n = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  c = function (t, i, n) {
    return i in t
      ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[i] = n);
  },
  h = function (t, e) {
    for (var n in e || (e = {})) o.call(e, n) && c(t, n, e[n]);
    if (a) {
      var s,
        h = i(a(e));
      try {
        for (h.s(); !(s = h.n()).done; ) {
          n = s.value;
          r.call(e, n) && c(t, n, e[n]);
        }
      } catch (t) {
        h.e(t);
      } finally {
        h.f();
      }
    }
    return t;
  },
  u = function (t, i) {
    return n(t, s(i));
  },
  l = function (t, i, e) {
    return new Promise(function (n, s) {
      var a = function (t) {
          try {
            r(e.next(t));
          } catch (t) {
            s(t);
          }
        },
        o = function (t) {
          try {
            r(e.throw(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, o);
        };
      r((e = e.apply(t, i)).next());
    });
  },
  d = require("../../../../common/vendor.js"),
  p = require("../stock-hq-data/index.js"),
  m = require("prefetch.js"),
  g = require("mixins/Share.js"),
  f = require("../stock-base/service/common/sign.js"),
  T = d.StockBridge.ENV === d.EnvTypeEnum.MP,
  k = [
    { key: "volume", value: "成交量" },
    { key: "macd", value: "MACD" },
    { key: "rsi", value: "RSI" },
  ],
  v = {
    components: {
      mins: function () {
        return "../stock-kline/mins.js";
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
    mixins: [g.Share],
    inject: {
      hqBridge: {},
      prefetch: { default: function () {} },
      getPreXiaoBaoData: { default: null },
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
      customSetting: Object,
      landscape: Boolean,
      showAuction: Boolean,
      isTrading: Boolean,
      isAuctionTime: Boolean,
      isWaitingForTrading: Boolean,
      disableTapEvent: Boolean,
      hkVIP: Boolean,
      showSideArea: Boolean,
    },
    data: function () {
      return {
        dataStatus: null,
        options: null,
        noData: !1,
        initSelector: !1,
        stockType: this.assertStockType || "",
        defaultSetting: m.getDefaultSetting(),
        status: "",
        iopvReported: !1,
        quotationFold: !1,
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
        return k;
      },
      indicator: function () {
        return this.setting.minsIndicator;
      },
      isBCCurrency: function () {
        return p.utils.isBCCurrency(this.market);
      },
      isETF: function () {
        return "ETF" === this.stockType;
      },
      isForex: function () {
        return p.utils.isForex(this.market);
      },
      isHBETF: function () {
        return (
          !("ETF" !== this.stockType || this.scode.length < 4) &&
          ["5116", "5117", "5118", "5119", "1590"].includes(
            this.scode.slice(0, 4)
          )
        );
      },
      showIOPV: function () {
        return (
          this.isETF &&
          this.showSideArea &&
          (!this.quotationFold || this.landscape) &&
          !this.isHBETF
        );
      },
      isAnchorTipEnabled: function () {
        var t =
            p.utils.isHSMarket(this.market) &&
            (p.utils.isAMarket(this.stockType) ||
              p.utils.isChuangYeStock(this.stockType) ||
              p.utils.isKeChuangStock(this.stockType)),
          i = p.utils.isBJMarket(this.market) && "GP" === this.stockType;
        return !this.landscape && (t || i);
      },
      auctionCount: function () {
        var t;
        return p.utils.isHSMarket(this.market)
          ? "sec" === (null == (t = this.auctionData) ? void 0 : t.dType) ||
            p.utils.isAMarket(this.stockType) ||
            p.utils.isKeChuangStock(this.stockType) ||
            p.utils.isChuangYeStock(this.stockType)
            ? 600
            : 11
          : 21;
      },
    },
    watch: {
      hideIndicator: function (t) {
        if (this.options) {
          var i = u(h({}, this.options.options), { hideIndicator: t });
          this.options = u(h({}, this.options), { options: i });
        }
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
    },
    beforeCreate: function () {
      (this.timeout = null), (this.fixNum = 2), (this.preClosePrice = 0);
    },
    created: function () {
      (this.isMP = ["mpwzq", "mpweapp"].includes("mpweapp")),
        (this.dataStatus = m.COMMON_PAGE_STATUS.LOADING),
        (this.tapTimeout = null),
        (this.auctionData = {
          dType: "",
          items: [],
          max: 0,
          min: Number.MAX_SAFE_INTEGER,
          maxVol: 0,
        });
      var t = d.StockBridge.getStorage("anchor_tip_close_count") || {
        count: 0,
      };
      (this.anchorTipDisabled = +t.count >= 2), this.getAllData();
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
      initXiaoBaoData: function () {
        if (
          !this.anchorTipDisabled &&
          this.getPreXiaoBaoData &&
          "function" == typeof this.getPreXiaoBaoData
        ) {
          var t = this.getPreXiaoBaoData();
          t && this.handleXiaoBaoData(t);
        }
      },
      getAllData: function () {
        return l(
          this,
          null,
          t().mark(function i() {
            return t().wrap(
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
              i,
              this
            );
          })
        );
      },
      parseTriggerTime: function (t) {
        if (!t || "string" != typeof t) return "";
        var i = t.match(/\d{8}\s+(\d{2})(\d{2})\d{2}/);
        return i ? "".concat(i[1]).concat(i[2]) : "";
      },
      getAnchorPosition: function (t) {
        var i;
        if (!t) return null;
        try {
          if (
            (null == (i = this.$refs.chart) ? void 0 : i.getPointPosition) &&
            this.chartData.items
          ) {
            var e = this.chartData.items.findIndex(function (i) {
              return i.time === t;
            });
            if (e >= 0 && e < this.chartData.items.length - 1) {
              var n = this.$refs.chart.getPointPosition(
                this.chartData.items[e + 1].time
              );
              if (n && "number" == typeof n.x && "number" == typeof n.y)
                return n;
            }
          }
        } catch (t) {}
        return null;
      },
      calculateAnchorCorner: function (t) {
        var i = t.x,
          e = t.y,
          n = i <= this.width / 2;
        return e <= this.height / 2
          ? n
            ? "top-left"
            : "top-right"
          : n
          ? "bottom-left"
          : "bottom-right";
      },
      handleXiaoBaoData: function (t) {
        var i,
          e =
            null == (i = null == t ? void 0 : t.questions)
              ? void 0
              : i.find(function (t) {
                  return "ktime" === t.scene;
                });
        if (null == e ? void 0 : e.title) {
          var n = this.parseTriggerTime(e.trigger_time),
            s = this.getAnchorPosition(n);
          s &&
            this.$emit("showAnchorTip", {
              anchorPosition: s,
              anchorTipData: e,
              anchorCorner: this.calculateAnchorCorner(s),
            });
        }
      },
      handleMinsUpdateData: function () {
        return l(
          this,
          null,
          t().mark(function i() {
            var e, n;
            return t().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (this.isLoading || this.anchorTipDisabled) {
                        i.next = 12;
                        break;
                      }
                      return (
                        (this.isLoading = !0),
                        (i.prev = 2),
                        (i.next = 5),
                        (n = {
                          scene: "ktime",
                          contentId: this.symbol,
                          material: { market: this.market, scode: this.scode },
                        }),
                        l(exports, [n], function (i) {
                          var e = i.scene,
                            n = i.contentId,
                            s = i.material;
                          return t().mark(function i() {
                            var a, o, r, c, h;
                            return t().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (e) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return", null);
                                    case 2:
                                      if (
                                        ((a = ""),
                                        s &&
                                          "[object Object]" ===
                                            Object.prototype.toString.call(s))
                                      )
                                        try {
                                          (o = Object.keys(s)
                                            .map(function (t) {
                                              return ""
                                                .concat(t, "=")
                                                .concat(
                                                  encodeURIComponent(s[t] || "")
                                                );
                                            })
                                            .join("&")),
                                            (a = encodeURIComponent(o));
                                        } catch (t) {}
                                      return (
                                        (t.prev = 4),
                                        (c = {
                                          data: {
                                            app: (r = "zxg_xcx"),
                                            channel: e,
                                            openid: T
                                              ? d.StockBridge.getStorage(
                                                  "_qluin"
                                                )
                                              : d.StockBridge.getCookie(
                                                  "wzq_qluin"
                                                ),
                                            content_id: n || "",
                                            material: a || "",
                                            t: Date.now(),
                                          },
                                          method: "get",
                                          origin: r,
                                        }),
                                        (t.next = 9),
                                        d.StockBridge.request(
                                          "https://snp.tenpay.com/cgi-bin/openai/aiask/query_complex",
                                          "GET",
                                          f.getSignV3(c),
                                          { forceCallback: !0 }
                                        )
                                      );
                                    case 9:
                                      return (
                                        (h = t.sent),
                                        t.abrupt(
                                          "return",
                                          h && 0 === h.code ? h : null
                                        )
                                      );
                                    case 13:
                                      return (
                                        (t.prev = 13),
                                        (t.t0 = t.catch(4)),
                                        t.abrupt("return", null)
                                      );
                                    case 16:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              i,
                              null,
                              [[4, 13]]
                            );
                          })();
                        })
                      );
                    case 5:
                      (e = i.sent),
                        (this.isLoading = !1),
                        this.handleXiaoBaoData(e),
                        (i.next = 12);
                      break;
                    case 9:
                      (i.prev = 9), (i.t0 = i.catch(2)), (this.isLoading = !1);
                    case 12:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              this,
              [[2, 9]]
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
      tabActivated: function () {
        this.initXiaoBaoData(), this.getData();
      },
      tabDeactivated: function () {
        clearTimeout(this.timeout);
      },
      updateData: function () {
        this.getData();
      },
      getAuctionData: function (i) {
        return l(
          this,
          null,
          t().mark(function e() {
            var n, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        !(null == (n = this.prefetch)
                          ? void 0
                          : n.getAuctionData))
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (t.next = 4),
                        this.prefetch.getAuctionData({
                          market: this.market,
                          scode: this.scode,
                          stockType: this.stockType,
                        })
                      );
                    case 4:
                      (t.t0 = t.sent), (t.next = 10);
                      break;
                    case 7:
                      return (
                        (t.next = 9),
                        m.detailApi.getAuctionMins(
                          {
                            market: this.market,
                            scode: this.scode,
                            stockType: this.stockType,
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 9:
                      t.t0 = t.sent;
                    case 10:
                      (s = t.t0),
                        (this.auctionData = s),
                        "middleChange" === i && this.changeAuctionSet(),
                        (t.next = 17);
                      break;
                    case 15:
                      (t.prev = 15), (t.t1 = t.catch(0));
                    case 17:
                    case "end":
                      return t.stop();
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
        if (this.options) {
          var t = u(h({}, this.options.options), {
            showAuction:
              this.showAuction &&
              (this.isAuctionTime || this.isWaitingForTrading),
            auctionCount: this.auctionCount,
            auctionLabel: p.utils.isHSMarket(this.market)
              ? "09:15~25"
              : "09:00~20",
          });
          this.options = u(h({}, this.options), {
            isAuctionTime: this.isAuctionTime,
            options: t,
            auctionData: this.auctionData,
          });
        }
      },
      getData: function () {
        return l(
          this,
          null,
          t().mark(function i() {
            var e,
              n,
              s,
              a,
              o,
              r,
              c,
              h,
              u,
              l,
              g,
              f,
              T,
              k,
              v = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (this.tradePoint.canGet && this.tradePoint.prefetch(),
                        (this.noData = !1),
                        (t.prev = 1),
                        !(null == (e = this.prefetch)
                          ? void 0
                          : e.getChartData))
                      ) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (t.next = 5),
                        this.prefetch.getChartData(
                          this.scode,
                          this.market,
                          this.currency
                        )
                      );
                    case 5:
                      if ((r = t.sent)) {
                        t.next = 10;
                        break;
                      }
                      if (!this.isFirstLoaded) {
                        t.next = 9;
                        break;
                      }
                      throw (
                        (d.StockBridge.report(
                          "hq.stock_detail.prefetch_chartdata_error"
                        ),
                        new Error("prefetch error"))
                      );
                    case 9:
                      (this.isFirstLoaded = !0), this.getData();
                    case 10:
                      t.next = 15;
                      break;
                    case 12:
                      return (
                        (t.next = 14),
                        m.detailApi.getMins(
                          {
                            market: this.market,
                            scode: this.scode,
                            currency: this.currency,
                            openId: "stockfe",
                          },
                          { needProcess: !0, useNewUrl: !0, signV2: !0 }
                        )
                      );
                    case 14:
                      r = t.sent;
                    case 15:
                      "{}" === JSON.stringify(r)
                        ? (this.dataStatus = m.COMMON_PAGE_STATUS.ERROR)
                        : (this.dataStatus = null),
                        (t.next = 21);
                      break;
                    case 18:
                      return (
                        (t.prev = 18),
                        (t.t0 = t.catch(1)),
                        t.abrupt(
                          "return",
                          void (this.dataStatus = m.COMMON_PAGE_STATUS.ERROR)
                        )
                      );
                    case 21:
                      if (
                        ((c = p.utils.isUSMarket(this.market)
                          ? p.utils.hackUSSymbol(this.symbol)
                          : this.symbol),
                        (h = (
                          null == (n = null == r ? void 0 : r.raw)
                            ? void 0
                            : n.qt
                        )
                          ? r.raw.qt[c] || r.raw.qt.fields
                          : []) && h.length)
                      ) {
                        t.next = 24;
                        break;
                      }
                      return t.abrupt("return");
                    case 24:
                      (this.stockType = m.getStockType(this.market, h)),
                        (this.preClosePrice = this.isForex ? +h[6] : +h[4]),
                        (this.fixNum =
                          (null ==
                          (a =
                            null ==
                            (s = this.isBCCurrency
                              ? p.utils.formatCurrency(h[3])
                              : h[3])
                              ? void 0
                              : s.split(".")[1])
                            ? void 0
                            : a.length) || 2),
                        (u = m.getRenderPoint(
                          this.stockType,
                          this.market,
                          this.scode
                        )),
                        (l =
                          p.utils.isHSMarket(this.market) &&
                          (p.utils.isAMarket(this.stockType) ||
                            p.utils.isKeChuangStock(this.stockType) ||
                            p.utils.isChuangYeStock(this.stockType) ||
                            ["ETF", "QDII-ETF"].includes(this.stockType))),
                        (g = m.judgeTrading(
                          this.stockType,
                          this.market,
                          r.raw.qt.market,
                          this.scode
                        )),
                        (f = g.isTrading),
                        (T = g.isAfterTrading),
                        (this.isAfterTrading = T),
                        (this.status = this.isForex ? "" : h[40]),
                        !["D", "U", "I", "N"].includes(this.status) &&
                        (null == (o = r.chartData) ? void 0 : o.length)
                          ? ((this.chartData = {
                              items: r.chartData,
                              preClose: this.preClosePrice,
                            }),
                            (k = {
                              dType: "",
                              items: [],
                              max: 0,
                              min: Number.MAX_SAFE_INTEGER,
                              maxVol: 0,
                            }),
                            (this.options = {
                              ready: !0,
                              isTrading:
                                !(!this.isForex || "USDCNY" === this.scode) ||
                                f,
                              isAuctionTime: this.isAuctionTime,
                              timestamp: Date.now(),
                              devicePixelRatio: this.isMP
                                ? getApp().globalData.systemInfo
                                    .devicePixelRatio
                                : window.devicePixelRatio,
                              data:
                                this.isMP || this.isAuctionTime
                                  ? null
                                  : this.chartData,
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
                                  this.market,
                                  this.scode
                                ),
                                count: l
                                  ? u[4]
                                  : p.utils.isDebt(this.stockType) ||
                                    p.utils.isNationalDebt(this.stockType) ||
                                    p.utils.isDebtIndex(this.stockType)
                                  ? u[5]
                                  : u[0],
                                panhouRange: l ? [u[0], u[4]] : null,
                                hideIndicator: this.hideIndicator,
                                useIndicators: this.indicators.map(function (
                                  t
                                ) {
                                  return t.key;
                                }),
                                minsIndicator: this.indicator,
                                disableInteract:
                                  this.disableTapEvent || this.disableInteract,
                                setting: this.setting,
                                isHKIndex:
                                  p.utils.isHKMarket(this.market) &&
                                  p.utils.isIndex(this.stockType),
                                isHKOrZsOrFundOrNhg:
                                  p.utils.isHKMarket(this.market) ||
                                  p.utils.isIndex(this.stockType) ||
                                  p.utils.isFund(this.stockType) ||
                                  p.utils.isNationalDebt(this.stockType) ||
                                  p.utils.isDebt(this.stockType),
                                vlineCount: 0,
                                hideAxisY: !0,
                                isFreeMiddleLine: !0,
                                hidePriceLine: !1,
                                paddingTop: 10,
                                paddingBottom: 10,
                                yAxis: { width: 0 },
                                isWzqMiniProgram: !0,
                                fontType: "stockFont",
                                hideScale: !0,
                                hideGrid: !0,
                                showAuction:
                                  this.showAuction &&
                                  (this.isAuctionTime ||
                                    this.isWaitingForTrading),
                                auctionCount: this.auctionCount,
                                auctionLabel: p.utils.isHSMarket(this.market)
                                  ? "09:15~25"
                                  : "09:00~20",
                                showIOPV: this.showIOPV,
                              },
                              auctionData: this.auctionData || k,
                            }),
                            this.$parent.HQ_CHART_COMPOSITION &&
                              (this.$parent.minsOptions = this.options),
                            this.tradePoint.canGet &&
                              this.tradePoint.handle(!0),
                            this.options.options.showIOPV &&
                              !this.iopvReported &&
                              (d.StockBridge.report(
                                "hq.stock_detail.iopv_brow",
                                { stockid: this.symbol }
                              ),
                              (this.iopvReported = !0)))
                          : (this.noData = !0),
                        this.autoUpdate &&
                          f &&
                          !p.utils.isHKMarket(this.market) &&
                          (this.timeout = setTimeout(function () {
                            v.getData();
                          }, 5e3)),
                        this.$emit("getQTData", h),
                        this.$emit("handleExtra", r.raw),
                        this.isAnchorTipEnabled && this.handleMinsUpdateData();
                    case 29:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[1, 18]]
            );
          })
        );
      },
      retryData: function () {
        (this.dataStatus = m.COMMON_PAGE_STATUS.LOADING), this.getData();
      },
      handlePush: function (t) {
        var i, e, n, s, a;
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
                var l = m.getUnit(this.stockType, this.market);
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
                    (n = null == (e = this.$refs.chart) ? void 0 : e.repaint) ||
                    n.call(e, { data: this.chartData });
              }
              this.hkVIP &&
                p.utils.isHKMarket(this.market) &&
                ((h.price = t.dqj),
                null ==
                  (a = null == (s = this.$refs.chart) ? void 0 : s.repaint) ||
                  a.call(s, { data: this.chartData }));
            }
          }
        }
      },
      handleAuctionPush: function (t) {
        var i, e, n, s;
        if (this.showAuction && this.isAuctionTime && this.isTrading) {
          if (this.auctionData && "sec" === this.auctionData.dType) {
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
          } else if (this.auctionData && "min" === this.auctionData.dType) {
            var p = new Date(1e3 * t.utime),
              m = "09".concat(
                (p.getMinutes() + (p.getSeconds() > 0 ? 1 : 0))
                  .toString()
                  .padStart(2, 0)
              ),
              g =
                null ==
                (i = this.auctionData.items[this.auctionData.items.length - 1])
                  ? void 0
                  : i.tm,
              f =
                +((null == (e = t.fiveTrans) ? void 0 : e.mrjg1) || t.dqj) || 0;
            m === g
              ? ((this.auctionData.items[this.auctionData.items.length - 1].p =
                  f),
                (this.auctionData.max = Math.max(this.auctionData.max, f)),
                (this.auctionData.min = Math.min(this.auctionData.min, f)))
              : (this.auctionUsePush = !1);
          }
          null == (s = null == (n = this.$refs.chart) ? void 0 : n.repaint) ||
            s.call(n, { auctionData: this.auctionData });
        }
      },
      getInitData: function (t) {
        this.isMP && this.hotfixWxBug();
        var i = {
          data: u(h({}, this.chartData), { status: this.status }),
          auctionData: this.auctionData,
        };
        t && t(i);
      },
      onTouchMove: function (t) {
        var i;
        (t.preClosePrice = this.preClosePrice),
          (t.fixNum = this.fixNum),
          this.$emit("onTouchMove", t),
          (null == (i = this.lastTouchData) ? void 0 : i.time) !==
            (null == t ? void 0 : t.time) &&
            ((this.lastTouchData = t), this.shakeit());
      },
      shakeit: function () {
        var t = this;
        !this.shakeTimeOut &&
          this.isMP &&
          (this.shakeTimeOut = setTimeout(function () {
            d.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 200));
      },
      onTouchCancel: function () {
        this.$emit("onTouchCancel");
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
            d.StockBridge.busEmit("autoHideTradePanel", "minsSelector"),
              t.$refs.selector &&
                "function" == typeof t.$refs.selector.onPopup &&
                t.$refs.selector.onPopup(1);
          }),
          d.StockBridge.report("hq.stock_detail.indicator_switch_click", {
            stockid: this.symbol,
          }));
      },
      onSwitchIndicator: function (t) {
        (this.options.options.minsIndicator = t),
          (this.setting.minsIndicator = t),
          this.$emit("updateSetting", this.setting),
          d.StockBridge.report("hq.stock_detail.indicator_area_click", {
            stockid: this.symbol,
          });
      },
      switchIndicator: function (t, i) {
        (this.options = u(h({}, this.options), {
          options: u(h({}, this.options.options), { minsIndicator: i }),
        })),
          (this.setting.minsIndicator = i),
          this.$emit("updateSetting", this.setting),
          d.StockBridge.report("hq.stock_detail.indicator_area_click", {
            stockid: this.symbol,
          });
      },
      onBarTap: function (t, i) {
        this.$parent.HQ_CHART_COMPOSITION &&
          this.$parent.$emit("onBarTap", t, i);
      },
      onTap: function () {
        var t = this;
        this.landscape ||
          this.disableTapEvent ||
          (d.StockBridge.report("hq.stock_detail.chart.oncetap.mins.click"),
          (this.tapTimeout = setTimeout(function () {
            t.isMP && d.wx$1.vibrateShort({ type: "medium" }),
              t.changeSetting(),
              clearTimeout(t.tapTimeout),
              (t.tapTimeout = null);
          }, 250)));
      },
      changeSetting: function () {
        var t = (this.setting || {}).minsSetting || {},
          i = t.showIndicator,
          e = void 0 !== i && i,
          n = t.showFive,
          s = void 0 !== n && n,
          a = t.showAuction,
          o = !1,
          r = !1;
        (e || s) & !(e && s) ? ((o = !1), (r = !1)) : ((o = !e), (r = !s));
        var c = u(h({}, this.setting), {
          minsSetting: { showIndicator: o, showFive: r, showAuction: a },
        });
        this.$emit("updateSetting", c);
      },
      onTipTap: function (t) {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("onTipTap", t);
      },
    },
  };
Array ||
  (
    d.resolveComponent("mins") +
    d.resolveComponent("Status") +
    d.resolveComponent("NoData") +
    d.resolveComponent("Selector")
  )();
var D = d._export_sfc(v, [
  [
    "render",
    function (t, i, e, n, s, a) {
      return d.e(
        { a: s.options && !s.noData },
        s.options && !s.noData
          ? {
              b: d.sr("chart", "9d06aa06-0"),
              c: d.o(a.onTouchMove, 5795),
              d: d.o(a.onTouchCancel, 5796),
              e: d.o(a.onSwitchIndicator, 5797),
              f: d.o(a.onPopup, 5798),
              g: d.o(a.onBarTap, 5799),
              h: d.o(a.onTipTap, 5800),
              i: d.o(a.onTap, 5801),
              j: d.o(a.onDoubleTap, 5802),
              k: d.o(a.getInitData, 5803),
              l: d.o(a.handleError, 5804),
              m: d.p({
                id: "chart",
                type: "mins",
                width: e.width,
                height: e.height,
                options: s.options,
              }),
            }
          : {},
        { n: s.dataStatus },
        s.dataStatus
          ? {
              o: d.o(function (t) {
                return a.retryData();
              }, 5805),
              p: d.p({
                "is-simple-mode": !0,
                showErrorImg: !1,
                type: s.dataStatus,
              }),
            }
          : {},
        { q: s.noData },
        s.noData ? { r: d.p({ status: s.status }) } : {},
        { s: s.initSelector },
        s.initSelector
          ? {
              t: d.sr("selector", "9d06aa06-3"),
              v: d.p({
                type: "mins",
                skin: e.skin,
                indicators: a.indicators,
                indicator: a.indicator,
                landscape: e.landscape,
              }),
            }
          : {},
        { w: "".concat(e.width, "px"), x: "".concat(e.height, "px") }
      );
    },
  ],
]);
wx.createComponent(D);
