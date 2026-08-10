var t = require("../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  h = function (t, e, r) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  l = require("../../../../../common/vendor.js"),
  c = require("mixins/ChartMixin.js"),
  d = require("../../stock-hq-data/index.js"),
  u = function (t, e, i) {
    var r =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : [i.time, i.storePrice],
      a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
      n =
        arguments.length > 5 && void 0 !== arguments[5]
          ? arguments[5]
          : "center",
      s = t.redUp ? "#E63535" : "#1CAA3C",
      o = t.redUp ? "#1CAA3C" : "#E63535",
      h = null !== i.storeRate ? 16.5 : 4;
    e
      .guide()
      .text({
        position: [r[0], r[1] || i.storePrice],
        content: i.showValue,
        style: {
          textAlign: n,
          textBaseline: +i.storePrice > 0 || !a ? "bottom" : "top",
          fontSize: 10,
          fontFamily: "stockFont",
          fill: +i.storePrice > 0 ? s : o,
          fontWeight: 400,
          lineHeight: 14,
        },
        offsetY: +i.storePrice > 0 || !a ? -h : h,
        limitInPlot: !0,
      }),
      i.storeRate &&
        e
          .guide()
          .text({
            position: [r[0], r[1] || i.storePrice],
            content: "".concat(parseFloat(i.storeRate).toFixed(2), "%"),
            style: {
              textAlign: n,
              textBaseline: +i.storePrice > 0 || !a ? "bottom" : "top",
              fontSize: 9,
              fontFamily: "stockFont",
              fill: t.themeColor.orange,
              fontWeight: 400,
              lineHeight: 14,
            },
            offsetY: +i.storePrice > 0 || !a ? -4 : 4,
            limitInPlot: !0,
          });
  },
  g = function (t, e, i) {
    t.guide().line({
      start: e,
      end: i,
      style: {
        stroke: "#98A0B3",
        lineWidth: 0.5,
        lineDash: [0, 1.5, 1],
        strokeOpacity: 1,
        fontFamily: "stockFont",
      },
    });
  };
function m(t, i, r, a) {
  var n,
    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
    o = {
      left: r - t / 2,
      right: r + t / 2,
      top: a - i / 2,
      bottom: a + i / 2,
    },
    h = !1,
    l = e(s);
  try {
    for (l.s(); !(n = l.n()).done; ) {
      var c = n.value,
        d = {
          left: c.x - c.width / 2,
          right: c.x + c.width / 2,
          top: c.y - i / 2,
          bottom: c.y + i / 2,
        };
      if (
        (c.textAlign &&
          "right" === c.textAlign &&
          ((d.left = c.x - c.width), (d.right = c.x)),
        c.textAlign &&
          "left" === c.textAlign &&
          ((d.left = c.x), (d.right = c.x + c.width)),
        o.left < d.right &&
          o.right > d.left &&
          o.top < d.bottom &&
          o.bottom > d.top)
      ) {
        var u = 0;
        (o.right >= d.left && o.left <= d.left && o.left > 15) ||
        o.right > 99.5 ||
        (99.5 === d.right && o.right > 90) ||
        (o.left > 50 && o.right >= d.left)
          ? ((u = d.left - o.right),
            "left" === c.textAlign && (u = d.right - o.left),
            "right" === c.textAlign && (u = d.left - o.right))
          : ((o.left < d.right && o.right > d.right) || o.left < 2) &&
            ((u = d.right - o.left),
            "left" === c.textAlign && (u = d.right - o.left)),
          (r += 0 !== u ? u : 0),
          (o.left = r - t / 2),
          (o.right = r + t / 2),
          (o.top = a - i / 2),
          (o.bottom = a + i / 2),
          (h = !0);
      }
    }
  } catch (t) {
    l.e(t);
  } finally {
    l.f();
  }
  return {
    x: Math.max(Math.min(r, 100 - t / 2), t / 2),
    y: Math.max(Math.min(a, 81.5), 18.5),
    intersect: h,
    textAlign: "center",
  };
}
function p(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 22,
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 78;
  return t < 0 ? e : t > 100 ? i : e + ((t - 0) / 100) * (i - e);
}
function f() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    i = 2.1 * String(t).length,
    r = 1.9 * String(e).length;
  return Math.max(i, r, 13) / 100;
}
var y = {
  mixins: [c.ChartMixin],
  props: {
    market: String,
    scode: String,
    stockType: String,
    skin: String,
    data: Object,
    pageName: String,
    chartId: String,
    chartStyle: String,
    disableTooltips: Boolean,
  },
  inject: ["hqBridge"],
  components: {
    f2: function () {
      return "../../stock-union-f2/f2MP.js";
    },
    SelectPlate: function () {
      return "./SelectPlate.js";
    },
    RangeSlider: function () {
      return "./RangeSlider.js";
    },
  },
  data: function () {
    return {
      hytrendSub: [
        { id: "yysr", name: "营业总收入" },
        { id: "jlr", name: "净利润" },
        { id: "eps", name: "每股收益" },
      ],
      hytrendSubed: "yysr",
      hytrendHash: "",
      hytrendChartErr: !1,
      selectIndex: 2,
      selectCurrId: "",
      dateSelects: [
        { id: "Q4", name: "年报", type: "Q4" },
        { id: "Q2", name: "中报", type: "Q2" },
        { id: "Q1", name: "一季报", type: "Q1" },
        { id: "Q3", name: "三季报", type: "Q3" },
        { id: "single", name: "单季报", type: "single" },
      ],
      showSelectPop: !1,
      legends: [],
      dateList: [],
      maxStorePrice: "",
      maxStoreRate: "",
      showTooltips: !1,
      tipsData: null,
      chartConfig: { animate: !1, padding: [0, 0, 0, 0] },
      tooltipTimer: null,
      isTouching: !1,
      redUp: !0,
      showAxis: !1,
      hasNegative: !1,
      dataLength: 0,
      timerId: null,
    };
  },
  computed: {
    isLite: function () {
      return ["mpwzq", "wzqlight"].includes("mpweapp");
    },
    isZxgApp: function () {
      return "app" === this.hqBridge.ENV;
    },
    isMini: function () {
      return "mp" === l.StockBridge.ENV;
    },
    cStyle: function () {
      return this.chartStyle
        ? this.chartStyle
        : this.isLite
        ? "width: 604rpx; height: 288rpx"
        : "width: 690rpx; height: 308rpx";
    },
    themeColor: function () {
      var t = "dark" === this.skin || "black" === this.skin,
        e = {
          bigBlue: this.isLite ? "#E63535" : "#3077ec",
          crossLine: t ? "#f5f6fa" : "#000",
        };
      return {
        borderLight: e.borderLight || (t ? "#191e27" : "#e9ebf0"),
        orange: e.orange || "#F1931D",
        mainColor: e.bigBlue,
        drop: e.drop || "#1CAA3C",
        rise: e.rise || "#E63535",
        lightGray1: e.lightGray1 || "#7a8499",
        lightGray2: e.lightGray2 || "#98a0b3",
        crossLine: e.crossLine,
      };
    },
    reportPrefix: function () {
      return this.pageName || "hq.stock_detail";
    },
    selectArrow: function () {
      return "dark" === this.skin || "black" === this.skin
        ? "https://st.gtimg.com/design/eee533db601efd4b9e2159559b0fc3f0.png"
        : "https://st.gtimg.com/design/de72216b29120f3d61eb535b75b15d37.png";
    },
    symbol: function () {
      return d.utils.getSymbol(this.market, this.scode);
    },
  },
  watch: {
    showTooltips: function (t) {
      t &&
        l.StockBridge.report(
          "".concat(this.reportPrefix, ".finance_trends_touch_click"),
          { stockid: this.symbol }
        );
    },
  },
  created: function () {
    var t = this;
    this.initIndicatorTabs(),
      this.initDateSelect(),
      this.isZxgApp &&
        shy.getSystemInfo(function (e) {
          t.redUp = "redup" === e.flucShowMode;
        });
  },
  mounted: function () {
    this.initRangeSlider(),
      this.hqBridge.busOn("commonSelectChange", this.changeDateSelect);
  },
  beforeDestroy: function () {
    this.hqBridge.busOff("commonSelectChange", this.changeDateSelect),
      (this.chartObj = null),
      clearTimeout(this.timerId);
  },
  methods: {
    reset: function () {
      (this.selectCurrId = ""),
        this.initIndicatorTabs(),
        this.initDateSelect(),
        this.initRangeSlider(),
        this.refreshChart();
    },
    initDateSelect: function () {
      var t = this,
        e = this.data[this.hytrendSubed],
        i = Object.keys(e);
      this.dateSelects = [
        { id: "Q4", name: "年报", type: "Q4" },
        { id: "Q2", name: "中报", type: "Q2" },
        { id: "Q1", name: "一季报", type: "Q1" },
        { id: "Q3", name: "三季报", type: "Q3" },
        { id: "single", name: "单季报", type: "single" },
      ].filter(function (t) {
        return i.includes(t.id);
      });
      var r = this.dateSelects.findIndex(function (e) {
        return e.id === t.selectCurrId;
      });
      r >= 0
        ? (this.selectIndex = r)
        : (this.data.latest &&
            ((this.selectCurrId = this.data.latest.substr(-2).toUpperCase()),
            (this.selectIndex = this.dateSelects.findIndex(function (e) {
              return e.id === t.selectCurrId;
            })),
            d.utils.isUSMarket(this.market) &&
              this.selectIndex < 0 &&
              i.includes("single") &&
              ((this.selectCurrId = "single"),
              (this.selectIndex = this.dateSelects.findIndex(function (e) {
                return e.id === t.selectCurrId;
              })))),
          !i.includes(this.selectCurrId) &&
            this.dateSelects.length &&
            ((this.selectIndex = 0),
            (this.selectCurrId = this.dateSelects[0].id)));
    },
    initIndicatorTabs: function () {
      var t = [],
        e = "";
      Object.keys(this.data)
        .sort(function (t, e) {
          return e.localeCompare(t);
        })
        .forEach(function (i) {
          var r = { yysr: "营业总收入", jlr: "净利润", eps: "每股收益" };
          r[i] && (t.push({ id: i, name: r[i] }), e || (e = i));
        }),
        (this.hytrendSub = t),
        (this.hytrendSubed = e);
    },
    initRangeSlider: function () {
      var t = this;
      this.showAnimate = !0;
      var e =
          this.data.yysr && this.data.yysr[this.selectCurrId]
            ? this.data.yysr[this.selectCurrId].length
            : 0,
        i = e <= 5 ? 0 : 1 - 5 / e;
      (this.dataRange = { start: i, end: 1 }),
        clearTimeout(this.timerId),
        (this.timerId = setTimeout(function () {
          var e;
          null == (e = t.$refs.rangeSlider) || e.setDefaultRange(t.dataRange);
        }, 200));
    },
    rangeChange: function (t) {
      if (
        !this.dataRange ||
        this.dataRange.start !== t.start ||
        this.dataRange.end !== t.end
      ) {
        this.showTooltips && this.hideTooltip(),
          (this.showAnimate = !1),
          (this.dataRange = t);
        var e = this.getChartData().list.length;
        this.dataLength !== e &&
          ((this.hytrendHash = String(Math.random())), (this.dataLength = e)),
          l.StockBridge.report(
            "".concat(this.reportPrefix, ".finance.trends.range_change"),
            { stockid: this.symbol }
          );
      }
    },
    refreshChart: function () {
      if (-1 !== this.selectIndex) {
        var t = this.getChartData();
        (this.hytrendChartErr = !t.list.length),
          this.hytrendChartErr ||
            ((this.showAnimate = !0),
            (this.hytrendHash = String(Math.random())));
      }
    },
    changeHytrendChart: function (t) {
      if (((this.showSelectPop = !1), this.hytrendSubed !== t)) {
        if (
          (this.hideTooltip(),
          (this.hytrendSubed = t),
          d.utils.isHSMarket(this.market))
        ) {
          var e = this.dateSelects.find(function (t) {
            return "single" === t.id;
          });
          d.utils.isKeChuangStock(this.stockType) &&
            ("mgsy" === t
              ? ((this.dateSelects = this.dateSelects.filter(function (t) {
                  return "single" !== t.id;
                })),
                "single" === this.selectCurrId &&
                  ((this.selectIndex = 2), (this.selectCurrId = "Q1")))
              : e ||
                this.dateSelects.push({
                  id: "single",
                  name: "单季报",
                  type: "single",
                }));
        }
        this.initDateSelect(),
          this.refreshChart(),
          l.StockBridge.report(
            ""
              .concat(this.reportPrefix, ".finance.trends.")
              .concat(t, "_click"),
            { stockid: this.symbol }
          );
      }
    },
    toggleSelectPop: function (t) {
      var e = this;
      this.isMini
        ? ((this.showSelectPop = !0),
          this.$nextTick(function () {
            e.$refs.ylycSelect && e.$refs.ylycSelect.onPopupMore();
          }))
        : this.hqBridge.busEmit("showCommonPopup", {
            data: this.dateSelects,
            currentId: this.selectCurrId,
            location: t.target.getBoundingClientRect(),
          });
    },
    changeDateSelect: function (t) {
      this.showSelectPop = !1;
      var e = this.dateSelects.findIndex(function (e) {
        return e.id === t;
      });
      this.selectIndex !== e &&
        ((this.selectCurrId = t),
        (this.selectIndex = e),
        this.refreshChart(),
        l.StockBridge.report(
          "".concat(this.reportPrefix, ".finance.trends.date_change"),
          { stockid: this.symbol }
        ));
    },
    getListByRange: function (t) {
      if (Array.isArray(t) && this.dataRange) {
        var e = this.dataRange,
          i = e.start,
          r = e.end;
        t = t.filter(function (e, a) {
          return a >= Math.floor(t.length * i) && a <= Math.ceil(t.length * r);
        });
      }
      return t;
    },
    computeStart: function (t) {
      if (!(t.length <= 0)) {
        var e = {
          storeRate: { min: 1 / 0, max: 0 },
          storePrice: { min: 1 / 0, max: 0 },
        };
        return (
          t.map(function (t) {
            +t.storePrice < e.storePrice.min &&
              null !== t.storePrice &&
              (e.storePrice.min = +t.storePrice),
              +t.storePrice > e.storePrice.max &&
                (e.storePrice.max = +t.storePrice),
              +t.storeRate < e.storeRate.min &&
                null !== t.storeRate &&
                (e.storeRate.min = +t.storeRate),
              +t.storeRate > e.storeRate.max &&
                (e.storeRate.max = +t.storeRate);
          }),
          {
            storePrice: [
              Math.min(
                0,
                e.storePrice.min - (e.storePrice.max - e.storePrice.min) / 2.5
              ),
              2 * e.storePrice.max,
            ],
            storeRate: [
              Math.min(
                0,
                e.storeRate.min - (e.storeRate.max - e.storeRate.min) / 4
              ),
              e.storeRate.max + 1.2 * (e.storeRate.max - e.storeRate.min),
            ],
          }
        );
      }
    },
    getChartData: function () {
      var t = this,
        e = [],
        i = this.dateSelects[this.selectIndex].id,
        r = { legend: [], list: [], dateList: [] };
      switch (this.hytrendSubed) {
        case "yysr":
          (e = this.data.yysr[i]),
            Array.isArray(e) &&
              (r.legend.push({
                position: "left",
                iconType: "square",
                title: "营业总收入",
                color: this.themeColor.mainColor,
              }),
              r.legend.push({
                position: "right",
                title: "同比增长",
                color: this.themeColor.orange,
              }),
              (e = this.getListByRange(
                e.sort(function (t, e) {
                  return t.EndDate - e.EndDate;
                })
              )).map(function (t, i) {
                r.list.push({
                  time: t.EndStr,
                  storePrice: isNaN(t.value) ? null : t.value,
                  storeRate: isNaN(t.TBBD) ? null : t.TBBD,
                  value: t.value,
                  showValue:
                    (+t.value > 0 ? "" : "-") +
                    c.formatBigToText(Math.abs(t.value), 1, 2, 2),
                }),
                  e.length < 7
                    ? r.dateList.push(t.EndStr)
                    : (0 !== i &&
                        i !== e.length - 1 &&
                        i % Math.round(e.length / 4) != 0) ||
                      r.dateList.push(t.EndStr);
              }),
              r.list.filter(function (t) {
                return !isNaN(t.value) && 0 != +t.value;
              }).length || (r.list = []));
          break;
        case "jlr":
          (e = this.data.jlr[i]),
            Array.isArray(e) &&
              (r.legend.push({
                position: "left",
                iconType: "square",
                title: "净利润",
                color:
                  this.isLite || this.redUp
                    ? this.themeColor.rise
                    : this.themeColor.drop,
              }),
              r.legend.push({
                position: "right",
                title: "同比增长",
                color: this.themeColor.orange,
              }),
              (e = this.getListByRange(
                e.sort(function (t, e) {
                  return t.EndDate - e.EndDate;
                })
              )).map(function (t, i) {
                r.list.push({
                  time: t.EndStr,
                  storePrice: isNaN(t.value) ? null : t.value,
                  storeRate: isNaN(t.TBBD) ? null : t.TBBD,
                  showValue:
                    (+t.value > 0 ? "" : "-") +
                    c.formatBigToText(Math.abs(t.value), 1, 2, 2),
                }),
                  e.length < 7
                    ? r.dateList.push(t.EndStr)
                    : (0 !== i &&
                        i !== e.length - 1 &&
                        i % Math.round(e.length / 4) != 0) ||
                      r.dateList.push(t.EndStr);
              }));
          break;
        case "eps":
          (e = this.data.eps[i]),
            Array.isArray(e) &&
              (r.legend.push({
                position: "left",
                iconType: "square",
                title: "每股收益",
                color:
                  this.isLite || this.redUp
                    ? this.themeColor.rise
                    : this.themeColor.drop,
              }),
              r.legend.push({
                position: "right",
                title: "同比增长",
                color: this.themeColor.orange,
              }),
              (e = this.getListByRange(
                e.sort(function (t, e) {
                  return t.EndDate - e.EndDate;
                })
              )).map(function (i, a) {
                var n = c
                  .roundNumber(
                    parseFloat(i.value),
                    d.utils.isHSMarket(t.market) ? 3 : 4
                  )
                  .toFixed(d.utils.isHSMarket(t.market) ? 2 : 3);
                r.list.push({
                  time: i.EndStr,
                  storePrice: isNaN(i.value) ? null : i.value,
                  storeRate: isNaN(i.TBBD) ? null : i.TBBD,
                  showValue:
                    Math.abs(n) > 9999
                      ? ""
                          .concat(+n < 0 ? "-" : "")
                          .concat(
                            c.formatBigToText(
                              Math.abs(i.value),
                              1,
                              d.utils.isHSMarket(t.market) ? 2 : 3,
                              d.utils.isHSMarket(t.market) ? 2 : 3
                            )
                          )
                      : n,
                }),
                  e.length < 7
                    ? r.dateList.push(i.EndStr)
                    : (0 !== a &&
                        a !== e.length - 1 &&
                        a % Math.round(e.length / 4) != 0) ||
                      r.dateList.push(i.EndStr);
              }));
      }
      return r;
    },
    drawHytrendChart: function (e) {
      var i = this,
        r = this,
        a = e.chart,
        n = e.config,
        s = this.getChartData();
      (this.legends = t(s.legend)),
        s.list.length
          ? ((this.dateList = s.dateList),
            !1 !== this.hytrendChartErr && (this.hytrendChartErr = !1))
          : (this.hytrendChartErr = !0),
        this.computeStart(s.list),
        (this.showAxis = s.list.length > 6);
      var o = Math.min.apply(
        Math,
        t(
          s.list.map(function (t) {
            return parseFloat(t.storePrice);
          })
        )
      );
      (this.hasNegative = o < 0),
        (this.minStorePrice = this.hasNegative
          ? (+o > 0 ? "" : "-") + c.formatBigToText(Math.abs(o), 1, 2, 2)
          : 0);
      var h = Math.min.apply(
        Math,
        t(
          s.list
            .map(function (t) {
              return null !== t.storeRate ? parseFloat(t.storeRate) : 1 / 0;
            })
            .filter(function (t) {
              return !isNaN(t) && t !== 1 / 0;
            })
        )
      );
      h &&
        (this.minStoreRate = this.showAxis
          ? "".concat(parseFloat(h).toFixed(2), "%")
          : "");
      var l = Math.max.apply(
          Math,
          t(
            s.list.map(function (t) {
              return parseFloat(t.storePrice);
            })
          )
        ),
        d = Math.max.apply(
          Math,
          t(
            s.list
              .map(function (t) {
                return t.storeRate ? parseFloat(t.storeRate) : -1 / 0;
              })
              .filter(function (t) {
                return !isNaN(t);
              })
          )
        );
      if (
        ((this.maxRawPrice = l),
        (this.minRawPrice = o),
        (this.maxStorePrice =
          l > 0
            ? (+l > 0 ? "" : "-") + c.formatBigToText(Math.abs(l), 1, 2, 2)
            : 0),
        d &&
          (this.maxStoreRate = this.showAxis
            ? "".concat(parseFloat(d).toFixed(2), "%")
            : ""),
        a
          .guide()
          .line({
            start: ["min", 0],
            end: ["max", 0],
            style: {
              stroke: this.themeColor.borderLight,
              lineWidth: 1,
              lineDash: null,
              strokeOpacity: 0.5,
              fontFamily: "stockFont",
            },
          }),
        a.source(s.list, {
          time: { tickCount: s.list.length >= 7 ? 5 : s.list.length },
          storeRate: {
            type: "linear",
            ticks: [this.minStoreRate, this.maxStoreRate],
            formatter: function (t) {
              return "".concat(t, "%");
            },
            range: this.hasNegative ? [0.32, 0.68] : [0.05, 0.7],
          },
          storePrice: {
            type: "linear",
            ticks: [this.minRawPrice, this.maxRawPrice],
            formatter: function (t) {
              return 0 == +t
                ? +t
                : ""
                    .concat(parseFloat(t) < 0 ? "-" : "")
                    .concat(c.formatBigToText(Math.abs(t), 1, 2, 2));
            },
            range: this.hasNegative ? [0.19, 0.81] : [0, 0.81],
          },
        }),
        a.axis("time", {
          line: {
            stroke: this.themeColor.borderLight,
            lineDash: null,
            lineWidth: 1,
            strokeOpacity: 0.5,
            fontFamily: "stockFont",
          },
          label: null,
        }),
        a.axis("storeRate", {
          position: "right",
          grid: null,
          labelOffset: -0.1,
          label: null,
        }),
        a.axis("storePrice", {
          position: "left",
          grid: null,
          labelOffset: -1,
          label: null,
        }),
        s.list.length < 7 &&
          s.list.map(function (t) {
            u(i, a, t);
          }),
        a.legend(!1),
        a.tooltip({
          custom: !0,
          crosshairsType: "y",
          showCrosshairs: !0,
          showTooltipMarker: !1,
          alwaysShow: !0,
          triggerOn: [],
          crosshairsStyle: { stroke: this.themeColor.crossLine, lineWidth: 1 },
          onChange: function (t) {
            i.isTouching &&
              (i.hqBridge.busEmit("lockSwiper", !0),
              Array.isArray(t.items) &&
                t.items.length > 0 &&
                ((i.tipsData = {
                  layout: t.x < n.width / 2 ? "right" : "left",
                  title: t.items[0].title,
                  items: [
                    {
                      name: i.legends[0].title,
                      value: t.items[0].origin.showValue,
                    },
                  ],
                }),
                t.items.length > 1
                  ? (i.tipsData.items[1] = {
                      name: i.legends[1].title,
                      value: t.items[1].value,
                    })
                  : (i.tipsData.items[1] = { name: "同比增长", value: "--" })));
          },
          onShow: function (t) {
            (i.showTooltips = !0),
              i.isTouching &&
                (i.hqBridge.busEmit("lockSwiper", !0),
                Array.isArray(t.items) &&
                  t.items.length > 0 &&
                  ((i.tipsData = {
                    layout: t.x < n.width / 2 ? "right" : "left",
                    title: t.items[0].title,
                    items: [
                      {
                        name: i.legends[0].title,
                        value: t.items[0].origin.showValue,
                      },
                    ],
                  }),
                  t.items.length > 1
                    ? (i.tipsData.items[1] = {
                        name: i.legends[1].title,
                        value: t.items[1].value,
                      })
                    : (i.tipsData.items[1] = {
                        name: "同比增长",
                        value: "--",
                      })));
          },
        }),
        a
          .interval({ startOnZero: !0 })
          .position("time*storePrice")
          .color("storePrice", function (t) {
            return "yysr" === r.hytrendSubed
              ? r.themeColor.mainColor
              : +t > 0
              ? r.isLite || r.redUp
                ? r.themeColor.rise
                : r.themeColor.drop
              : r.isLite || r.redUp
              ? r.themeColor.drop
              : r.themeColor.rise;
          })
          .size(Math.min(18, 130 / s.list.length)),
        a
          .line({ connectNulls: !0 })
          .style({ lineWidth: 1 })
          .position("time*storeRate")
          .color(this.themeColor.orange),
        s.list.length < 13 &&
          a
            .point()
            .position("time*storeRate")
            .size(2)
            .style("type", {
              fill: function () {
                return i.themeColor.orange;
              },
              stroke: function () {
                return i.themeColor.orange;
              },
              lineWidth: 1,
            }),
        this.showAnimate &&
          a.animate({
            line: {
              enter: {
                animation: "fadeIn",
                easing: "elasticIn",
                delay: 0,
                duration: 1,
              },
              leave: {
                animation: "fadeOut",
                easing: "elasticOut",
                delay: 0,
                duration: 1,
              },
            },
            interval: {
              enter: {
                animation: "groupScaleInY",
                easing: "elasticIn",
                delay: 0,
                duration: 1,
              },
              leave: {
                animation: "fadeOut",
                easing: "elasticOut",
                delay: 0,
                duration: 1,
              },
            },
          }),
        a.render(),
        (this.chartObj = a),
        !(s.list.length < 7))
      ) {
        var g = [],
          m = s.list.length,
          p = s.list[s.list.length - 1],
          y = "center",
          x = [p.time, p.storePrice],
          S = f(
            p.showValue,
            "".concat(parseFloat(p.storeRate).toFixed(2), "%")
          ),
          P = s.list.slice(Math.max(m - 1 - Math.floor(m * S), 0), m),
          v = a.getPosition(p),
          M = v.y;
        if (P.length) {
          var b;
          b =
            parseFloat(p.storePrice) >= 0
              ? Math.max.apply(
                  Math,
                  t(
                    P.map(function (t) {
                      return parseFloat(t.storePrice);
                    })
                  )
                )
              : Math.min.apply(
                  Math,
                  t(
                    P.map(function (t) {
                      return parseFloat(t.storePrice);
                    })
                  )
                );
          var w = P.find(function (t) {
            return parseFloat(t.storePrice) === b;
          });
          M = a.getPosition(w).y;
        }
        s.list.length > 8
          ? ((x = [
              "99.5%",
              "".concat(Math.max((M / n.height) * 100, 17), "%"),
            ]),
            (y = "right"))
          : ((x = [
              "".concat(
                Math.min((v.x / n.width) * 100, 100 - (100 * S) / 2),
                "%"
              ),
              "".concat(Math.max((M / n.height) * 100, 17), "%"),
            ]),
            (y = "center"));
        var C = [(v.x / n.width) * 100 + "%", (v.y / n.height) * 100 + "%"],
          F = [
            (v.x / n.width) * 100 + "%",
            ((M - (parseFloat(p.storePrice) > 0 ? 4 : -5)) / n.height) * 100 +
              "%",
          ];
        u(this, a, p, x, !0, y),
          g.push({
            x: parseFloat(x[0]),
            y: parseFloat(x[1]),
            textAlign: "right",
            width: 100 * S,
          }),
          a
            .guide()
            .line({
              start: C,
              end: F,
              style: {
                stroke: "#98A0B3",
                lineWidth: 0.5,
                lineDash: [0, 1.5, 1],
                strokeOpacity: 1,
                fontFamily: "stockFont",
              },
            });
        var R = s.list.findIndex(function (t) {
            return parseFloat(t.storePrice) === i.maxRawPrice;
          }),
          k = s.list.findIndex(function (t) {
            return parseFloat(t.storePrice) === i.minRawPrice;
          });
        (function (t, e, i) {
          var r = t,
            a = i - 1 - t,
            n = e,
            s = i - 1 - e,
            o = Math.min(r, a, n, s);
          return o === r || o === a ? t : e;
        })(R, k, m) === R
          ? (this.drawMaxPrice(a, n, s, p, R, g),
            this.drawMinPrice(a, n, s, p, k, g))
          : (this.drawMinPrice(a, n, s, p, k, g),
            this.drawMaxPrice(a, n, s, p, R, g)),
          a.render();
      }
    },
    drawMaxPrice: function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.chartObj,
        e = arguments.length > 1 ? arguments[1] : void 0,
        i = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        n = arguments.length > 5 ? arguments[5] : void 0,
        s = i.list[a],
        o = f(s.showValue, "".concat(parseFloat(s.storeRate).toFixed(2), "%")),
        h = t.getPosition(s),
        l = "center",
        c = [
          (Math.max(5, h.x) / e.width) * 100 + "%",
          (h.y / e.height) * 100 + "%",
        ],
        d = m(
          100 * o,
          18,
          parseFloat(c[0]),
          parseFloat(c[1]),
          n,
          this.minRawPrice > 0
        );
      if (
        ((l = d.textAlign),
        0 === a && i.list.length > 8 && ((d.x = 0.5), (l = "left")),
        s.storePrice !== r.storePrice)
      ) {
        var y = [(h.x / e.width) * 100 + "%", (h.y / e.height) * 100 + "%"],
          x = [
            (h.x / e.width) * 100 + "%",
            "".concat(d.y + (this.maxRawPrice < 0 ? 3 : -4), "%"),
          ],
          S = p(
            (Math.abs(Math.max(this.maxRawPrice, 0)) /
              (Math.max(this.maxRawPrice, 0) - Math.min(0, this.minRawPrice))) *
              100
          ),
          P = !0;
        if (
          (parseFloat(this.maxRawPrice) < 0 &&
            ((d.x = Math.min(
              Math.max(parseFloat(y[0]), (o / 2) * 100),
              100 - (o / 2) * 100
            )),
            (d.y = "".concat(Math.max(S - 3, 22), "%")),
            (P = !1),
            (y[1] = "".concat(S, "%")),
            (x[1] = "".concat(Math.max(S - 3, 19), "%")),
            (d = m(100 * o, 18, parseFloat(d.x), parseFloat(d.y), n, !0))),
          u(this, t, s, ["".concat(d.x, "%"), "".concat(d.y, "%")], P, l),
          Math.abs(parseFloat(x[0]) - d.x) > (100 * o) / 2)
        ) {
          +s.storePrice > 0
            ? (x[1] = parseFloat(x[1]) - 2 + "%")
            : (x[1] = "".concat(parseFloat(x[1]) + 2, "%"));
          var v = parseFloat(x[0]) > parseFloat(d.x),
            M = [
              "".concat(d.x + (v ? (100 * o) / 2 : (100 * -o) / 2), "%"),
              x[1],
            ];
          Math.abs(parseFloat(M[0]) - parseFloat(x[0])) < 1 &&
            (M[0] = "".concat(parseFloat(M[0]) + (v ? -2 : 2), "%")),
            g(t, x, M);
        }
        g(t, y, x), n.push({ x: d.x, y: d.y, textAlign: l, width: 100 * o });
      }
    },
    drawMinPrice: function () {
      var i,
        l =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.chartObj,
        c = arguments.length > 1 ? arguments[1] : void 0,
        d = arguments.length > 2 ? arguments[2] : void 0,
        y = arguments.length > 3 ? arguments[3] : void 0,
        x = arguments.length > 4 ? arguments[4] : void 0,
        S = arguments.length > 5 ? arguments[5] : void 0,
        P = d.list.length,
        v = d.list[x],
        M = l.getPosition(v),
        b = f(v.showValue, "".concat(parseFloat(v.storeRate).toFixed(2), "%")),
        w = d.list.slice(
          Math.max(x - Math.floor(P * b * 0.66), 0),
          Math.min(x + Math.floor(P * b * 0.66), P) + 1
        ),
        C = 101,
        F = "center";
      if (w.length) {
        i = Math.max.apply(
          Math,
          t(
            w.map(function (t) {
              return parseFloat(t.storePrice);
            })
          )
        );
        var R = w.find(function (t) {
          return parseFloat(t.storePrice) === i;
        });
        C = l.getPosition(R).y;
      }
      var k = [
          "".concat(Math.max(Math.min((M.x / c.width) * 100, 90), 7), "%"),
          (((this.minRawPrice >= 0 ? Math.min(M.y, C) : Math.max(M.y, C)) -
            (this.minRawPrice > 0 ? 0 : -20)) /
            c.height) *
            100 +
            "%",
        ],
        I = m(
          100 * b,
          18,
          parseFloat(k[0]),
          parseFloat(k[1]),
          S,
          this.minRawPrice > 0
        ),
        A = parseInt((P / 100) * I.x, 10);
      if (
        (w = d.list.slice(
          Math.max(A - Math.floor(P * b * 0.66), 0),
          Math.min(A + Math.floor(P * b * 0.66), P) + 1
        )).length
      ) {
        i = Math.max.apply(
          Math,
          t(
            w.map(function (t) {
              return parseFloat(t.storePrice);
            })
          )
        );
        var T = w.find(function (t) {
          return parseFloat(t.storePrice) === i;
        });
        C = l.getPosition(T).y;
      }
      var D,
        B = (C / c.height) * 100;
      if (
        ((I.y = this.minRawPrice >= 0 ? Math.min(B, I.y) : Math.max(B, I.y)),
        0 === x && d.list.length > 8 && ((I.x = 0.5), (F = "left")),
        v.storePrice !== y.storePrice)
      ) {
        var E = [(M.x / c.width) * 100 + "%", (M.y / c.height) * 100 + "%"],
          L = [
            (M.x / c.width) * 100 + "%",
            "".concat(I.y + (this.minRawPrice < 0 ? 3 : -4), "%"),
          ],
          O = p(
            (Math.abs(Math.max(this.maxRawPrice, 0)) /
              (Math.max(this.maxRawPrice, 0) - Math.min(0, this.minRawPrice))) *
              100
          ),
          N = !0;
        if (I.intersect && 0 !== x)
          if (parseFloat(v.storePrice) < 0) {
            if (
              (w = d.list.slice(
                Math.max(x - Math.floor(P * b * 0.55), 0),
                Math.min(x + Math.floor(P * b * 0.55), P) + 1
              )).length
            ) {
              i = Math.max.apply(
                Math,
                t(
                  w.map(function (t) {
                    return parseFloat(t.storePrice);
                  })
                )
              );
              var j = w.find(function (t) {
                return parseFloat(t.storePrice) === i;
              });
              C = l.getPosition(j).y;
            }
            (I.x = parseFloat(k[0])),
              (I.y = Math.max(17, Math.min(O, (C / c.height) * 100))),
              (N = !1),
              (E[1] = "".concat(O, "%"));
            var q = (function (e, i, r, a, n) {
              var s = i.length,
                o = parseInt((s / 100) * e.x, 10),
                h = i.slice(
                  Math.max(o - Math.floor(s * r * 0.55), 0),
                  Math.min(o + Math.floor(s * r * 0.55), s) + 1
                );
              if (h.length) {
                var l = Math.max.apply(
                    Math,
                    t(
                      h.map(function (t) {
                        return parseFloat(t.storePrice);
                      })
                    )
                  ),
                  c = h.find(function (t) {
                    return parseFloat(t.storePrice) === l;
                  });
                return (a.getPosition(c).y / n.height) * 100;
              }
              return null;
            })(
              (I = m(100 * b, 18, parseFloat(I.x), parseFloat(I.y), S, !0)),
              d.list,
              b,
              l,
              c
            );
            q && q < I.y && (I.y = q), (L[1] = parseFloat(I.y) - 3 + "%");
          } else if (
            parseFloat(y.storePrice) > 0 &&
            parseFloat(this.minRawPrice) < 0
          ) {
            if (w.length) {
              i = Math.min.apply(
                Math,
                t(
                  w.map(function (t) {
                    return parseFloat(t.storePrice);
                  })
                )
              );
              var Q = w.find(function (t) {
                return Math.abs(parseFloat(t.storePrice)) === i;
              });
              C = l.getPosition(Q).y;
            }
            (I.x = parseFloat(k[0])),
              (I.y = "".concat(Math.min(O - 3, (C / c.width) * 100), "%")),
              (N = !1),
              (E[1] = "".concat(O, "%")),
              (L[1] = O - 3 + "%");
          }
        if (
          (u(this, l, v, ["".concat(I.x, "%"), "".concat(I.y, "%")], N, F),
          Math.abs(parseFloat(L[0]) - parseFloat(I.x)) > (100 * b) / 2)
        ) {
          +v.storePrice > 0 || (I.intersect && 0 !== x)
            ? (L[1] = parseFloat(L[1]) - 2 + "%")
            : (L[1] = "".concat(parseFloat(L[1]) + 2, "%"));
          var H = parseFloat(L[0]) > parseFloat(I.x),
            V = [
              "".concat(I.x + (H ? (100 * b) / 2 : (100 * -b) / 2), "%"),
              L[1],
            ];
          Math.abs(parseFloat(V[0]) - parseFloat(L[0])) < 1 &&
            (V[0] = "".concat(parseFloat(V[0]) + (H ? -2 : 2), "%")),
            g(l, L, V);
        }
        g(l, E, L),
          S.push(
            ((D = (function (t, i) {
              for (var r in i || (i = {})) s.call(i, r) && h(t, r, i[r]);
              if (n) {
                var a,
                  l = e(n(i));
                try {
                  for (l.s(); !(a = l.n()).done; ) {
                    r = a.value;
                    o.call(i, r) && h(t, r, i[r]);
                  }
                } catch (t) {
                  l.e(t);
                } finally {
                  l.f();
                }
              }
              return t;
            })({}, I)),
            r(D, a({ textAlign: F, width: 100 * b })))
          );
      }
    },
  },
};
Array ||
  (
    l.resolveComponent("f2") +
    l.resolveComponent("range-slider") +
    l.resolveComponent("SelectPlate")
  )();
var x = l._export_sfc(y, [
  [
    "render",
    function (t, e, i, r, a, n) {
      return l.e(
        { a: a.hytrendSub.length > 1 },
        a.hytrendSub.length > 1
          ? {
              b: l.f(a.hytrendSub, function (t, e, i) {
                return {
                  a: l.t(t.name),
                  b: l.n(a.hytrendSubed === t.id ? "active" : ""),
                  c: t.id,
                  d: l.o(
                    function (e) {
                      return n.changeHytrendChart(t.id);
                    },
                    2803,
                    t.id
                  ),
                };
              }),
              c: l.n("col-" + a.hytrendSub.length),
            }
          : {},
        {
          d: l.t(
            a.dateSelects[a.selectIndex]
              ? a.dateSelects[a.selectIndex].name
              : ""
          ),
          e: a.dateSelects.length > 0,
        },
        a.dateSelects.length > 0 ? { f: n.selectArrow } : {},
        {
          g: l.o(function () {
            return n.toggleSelectPop && n.toggleSelectPop.apply(n, arguments);
          }, 2804),
          h: !a.hytrendChartErr,
        },
        a.hytrendChartErr
          ? {}
          : l.e(
              { i: a.tipsData },
              a.tipsData
                ? {
                    j: l.t(a.tipsData.title),
                    k: l.f(a.tipsData.items, function (t, e, i) {
                      return { a: l.t(t.name), b: l.t(t.value), c: e };
                    }),
                    l: l.n(a.tipsData.layout),
                  }
                : {},
              {
                m: l.sr("hytrendChart", "629c73d9-0"),
                n: l.o(n.drawHytrendChart, 2805),
                o: l.o(t.chartTouchStop, 2806),
                p: l.o(t.chartTouchStart, 2807),
                q: l.o(t.chartTouchMove, 2808),
                r: l.p({
                  "chart-id": i.chartId || "hytrendChart",
                  "c-class": "finance-hytrendChartClass",
                  "c-style": n.cStyle,
                  "disable-touch-move": !0,
                  config: a.chartConfig,
                  "refresh-hash": a.hytrendHash,
                }),
                s: l.n(a.showAxis ? "hytrendChartContent-border" : ""),
              }
            ),
        { t: !a.hytrendChartErr },
        a.hytrendChartErr
          ? {}
          : l.e(
              { v: a.dateList.length },
              a.dateList.length
                ? {
                    w: l.f(a.dateList, function (t, e, i) {
                      return { a: l.t(t), b: t };
                    }),
                  }
                : {},
              {
                x: l.sr("rangeSlider", "629c73d9-1"),
                y: l.o(n.rangeChange, 2809),
                z: l.f(a.legends, function (t, e, i) {
                  return {
                    a: l.n(t.iconType || ""),
                    b: t.color,
                    c: l.t(t.title),
                    d: e,
                  };
                }),
              }
            ),
        { A: a.showSelectPop && n.isMini },
        a.showSelectPop && n.isMini
          ? {
              B: l.sr("ylycSelect", "629c73d9-2"),
              C: l.o(n.changeDateSelect, 2810),
              D: l.p({
                skin: i.skin,
                data: a.dateSelects,
                "cur-tab-index": a.selectCurrId,
                "tab-type": "ylyc",
              }),
            }
          : {},
        {
          E: l.n(
            n.isLite ? "performance-trends-lite" : "performance-trends-pro"
          ),
        }
      );
    },
  ],
  ["__scopeId", "data-v-629c73d9"],
]);
wx.createComponent(x);
