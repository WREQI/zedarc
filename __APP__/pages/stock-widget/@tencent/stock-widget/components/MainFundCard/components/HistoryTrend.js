var t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  l = function (t, e, a) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  h = function (t, i) {
    for (var a in i || (i = {})) r.call(i, a) && l(t, a, i[a]);
    if (o) {
      var n,
        h = e(o(i));
      try {
        for (h.s(); !(n = h.n()).done; ) {
          a = n.value;
          s.call(i, a) && l(t, a, i[a]);
        }
      } catch (t) {
        h.e(t);
      } finally {
        h.f();
      }
    }
    return t;
  },
  u = function (t, e) {
    return a(t, n(e));
  },
  c = require("../../../../../@antv/f2/lib/plugin/tooltip.js"),
  f = require("../../../../../../../common/vendor.js"),
  d = require("../../../../stock-hq-core/config/css-token.js");
c.Tooltip.prototype.setMarkers = function (t) {
  var e = t.items,
    i = t.style,
    a = t.type,
    n = this._getMarkerGroup(a);
  if ("circle" === a)
    for (var o = 0, r = e.length; o < r; o++) {
      var s = e[o];
      n.addShape("marker", {
        className: "tooltip-circle-marker",
        attrs: c.common.mix(
          { x: s.x, y: s.y, stroke: s.color },
          u(h({}, i), { fill: s.color, radius: 2 })
        ),
      });
    }
  else n.addShape("rect", { className: "tooltip-rect-marker", attrs: i });
};
var p = function (t) {
    if (document) return t;
    var e = f.wx$1.getSystemInfoSync().windowWidth;
    return e ? t * (e / 375) : t;
  },
  g = function (t, e, i) {
    var a =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : [i.date, i.value],
      n = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
      o =
        arguments.length > 5 && void 0 !== arguments[5]
          ? arguments[5]
          : "center",
      r = t.redUp ? "#1CAA3C" : "#E63535",
      s = t.redUp ? "#E63535" : "#1CAA3C",
      l = parseFloat(i.value).toFixed(2),
      h = "".concat("-0.0" !== l ? l : "0.0", "万");
    Math.abs(l) >= 1e4 && (h = "".concat((l / 1e4).toFixed(2), "亿")),
      e
        .guide()
        .text({
          position: [a[0], a[1] || i.value],
          content: h,
          style: {
            textAlign: o,
            textBaseline: +i.value > 0 || !n ? "bottom" : "top",
            fontSize: 10,
            fontFamily: "stockFont",
            fill: +i.value > 0 ? r : s,
            fontWeight: 400,
            lineHeight: 14,
          },
          offsetY: +i.value > 0 || !n ? -6 : 6,
          limitInPlot: !0,
        });
  },
  v = function (t, e, i) {
    t.guide().line({
      start: e,
      end: i,
      style: {
        stroke: "#7A8499",
        lineWidth: 1,
        lineDash: [0, 1.5, 1],
        strokeOpacity: 0.5,
        fontFamily: "stockFont",
      },
    });
  };
function m(t, i, a, n) {
  var o,
    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
    s =
      arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "center",
    l = {
      left: a - t / 2,
      right: a + t / 2,
      top: n - i / 2,
      bottom: n + i / 2,
    },
    h = !1,
    u = e(r);
  try {
    for (u.s(); !(o = u.n()).done; ) {
      var c = o.value,
        f = {
          left: c.x - c.width / 2,
          right: c.x + c.width / 2,
          top: c.y - i / 2,
          bottom: c.y + i / 2,
        };
      if (
        (c.textAlign &&
          "right" === c.textAlign &&
          ((f.left = c.x - c.width), (f.right = c.x)),
        c.textAlign &&
          "left" === c.textAlign &&
          ((f.left = c.x), (f.right = c.x + c.width)),
        l.left < f.right &&
          l.right > f.left &&
          l.top < f.bottom &&
          l.bottom > f.top)
      ) {
        var d = 0;
        (l.right >= f.left && l.left <= f.left && l.left > 15) ||
        l.right > 99.5 ||
        (99.5 === f.right && l.right > 90) ||
        (l.left > 50 && l.right >= f.left)
          ? ((d = f.left - l.right),
            "left" === c.textAlign && (d = f.right - l.left),
            "right" === c.textAlign && (d = f.left - l.right))
          : ((l.left < f.right && l.right > f.right) || l.left < 2) &&
            ((d = f.right - l.left),
            "left" === c.textAlign && (d = f.right - l.left)),
          (a += 0 !== d ? d : 0),
          (l.left = a - t / 2),
          (l.right = a + t / 2),
          (l.top = n - i / 2),
          (l.bottom = n + i / 2),
          (h = !0);
      }
    }
  } catch (t) {
    u.e(t);
  } finally {
    u.f();
  }
  return {
    x: "left" === s ? 0.5 : Math.max(Math.min(a, 100 - t / 2), t / 2),
    y: Math.max(Math.min(n, 87), 13.2),
    intersect: h,
    textAlign: s,
  };
}
function y(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 13,
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 87;
  return t < 0 ? e : t > 100 ? i : e + ((t - 0) / 100) * (i - e);
}
function x() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    e = t,
    i = parseFloat(t);
  (e = "".concat(i.toFixed(2), "万")),
    Math.abs(i) >= 1e4 && (e = "".concat((t / 1e4).toFixed(2), "亿"));
  var a = 2 * (String(e).length - 1) + 2.4;
  return Math.max(a, 11.5) / 100;
}
var F = 13.2,
  M = {
    name: "HistoryTrend",
    components: {
      f2: function () {
        return "../../../../../../detailSbg/@tencent/stock-union-f2/f2MP.js";
      },
    },
    mixins: [
      {
        data: function () {
          return {
            touchPosition: { x: 0, y: 0 },
            tooltipTimer: null,
            isTouching: !1,
          };
        },
        watch: {
          tipsData: function (t, e) {
            t && e && t.title !== e.title && this.shakeit();
          },
        },
        methods: {
          shakeit: function () {
            var t,
              e = this;
            this.shakeTimeOut ||
              "mp" !== (null == (t = this.hqBridge) ? void 0 : t.ENV) ||
              (this.shakeTimeOut = setTimeout(function () {
                f.wx$1.vibrateShort({ type: "light" }),
                  e.shakeTimeOut && clearTimeout(e.shakeTimeOut),
                  (e.shakeTimeOut = null);
              }, 100));
          },
          hideTooltip: function () {
            var t;
            (this.showTooltips = !1),
              (this.tipsData = null),
              null == (t = this.chartObj) || t.hideTooltip();
          },
          chartTouchStop: function () {
            var t,
              e = this;
            this.isTouching &&
              ((this.isTouching = !1),
              clearTimeout(this.tooltipTimer),
              (this.tooltipTimer = setTimeout(function () {
                e.isTouching || e.hideTooltip();
              }, 4e3)),
              null == (t = this.hqBridge) || t.busEmit("lockSwiper", !1));
          },
          chartTouchStart: function (t) {
            var e = this;
            (this.isTouching = !0), (this.startTouch = !0);
            var i = null == t ? void 0 : t.touches[0];
            (null == t ? void 0 : t.points) &&
              ((i.x = t.points[0].x),
              (i.y = t.points[0].y),
              (this.touchPosition = i)),
              setTimeout(function () {
                (null == t ? void 0 : t.points) &&
                  e.isTouching &&
                  t &&
                  e.startTouch &&
                  (e.shakeit(),
                  e.chartObj.showTooltip(t.points[0]),
                  (e.startTouch = !1));
              }, 500),
              setTimeout(function () {
                e.showTooltips &&
                  !e.isTouching &&
                  ((e.startTouch = !1), e.hideTooltip());
              }, 150);
          },
          chartTouchMove: function (t) {
            var e, i;
            if (
              ((this.startTouch = !1),
              "mp" === (null == (e = this.hqBridge) ? void 0 : e.ENV) &&
                (null == t ? void 0 : t.touches))
            ) {
              var a = t.touches[0],
                n = a.x,
                o = a.y;
              return (
                (this.touchPosition = { x: n, y: o }),
                void (
                  this.showTooltips &&
                  t &&
                  this.chartObj.showTooltip({ x: n, y: o })
                )
              );
            }
            if (
              "wzq_light" === (null == (i = this.hqBridge) ? void 0 : i.ENV) &&
              (null == t ? void 0 : t.touches)
            ) {
              var r = t.touches[0],
                s = t.target.getBoundingClientRect(),
                l = r.clientX - s.left,
                h = r.clientY - s.top;
              (this.touchPosition = { x: l, y: h }),
                this.showTooltips &&
                  t &&
                  this.chartObj.showTooltip({ x: l, y: h });
            }
          },
        },
      },
    ],
    inject: { hqBridge: { default: null } },
    options: { styleIsolation: "shared" },
    props: {
      activeFundTab: { type: String, default: "" },
      getColor: { type: Function, default: function () {} },
      getUnitifyNumber: { type: Function, default: function () {} },
      getUnit: { type: Function, default: function () {} },
      showPlateRadio: { type: Boolean, default: !1 },
      history: { type: Object, default: function () {} },
      gotoTeachPage: { type: Function, default: function () {} },
      unit: { type: Number, default: 1e8 },
      unitText: {
        type: String,
        default: function () {
          return "";
        },
      },
      id: {
        type: String,
        default: function () {
          return "";
        },
      },
      borderWidth_1px: { type: Object, default: function () {} },
      font_medium: { type: Object, default: function () {} },
      isWidget: { type: Boolean, default: !1 },
      skin: { type: String, default: "" },
    },
    data: function () {
      return {
        isBroker: f.isBroker,
        historyFundsChart: null,
        totalMainNet: "",
        mainNet: { v0: "", v1: "", v2: "", v3: "", v4: "", v5: "" },
        currentRange: { text: "5日", value: 5 },
        historyFundsTooltip: {
          date: "",
          price: "",
          mainNetInflow: "",
          avgIn: "",
          isShow: !1,
          position: "left",
        },
        showAvgInHistoryLine: !1,
        avgInRadioDisabled: !0,
        fmuHash: "",
        tipsData: "",
        disableChartTouchMove: !1,
        chartConfig: { padding: [0, 0, 0, 0], plugins: c.TooltipPlugin },
        showTooltips: !1,
        dateList: [],
      };
    },
    computed: {
      themeColor: function () {
        var t = d.CSSTOKEN.DEFAULT;
        return {
          bigRed:
            (t = d.CSSTOKEN[f.isBroker] || d.CSSTOKEN.DEFAULT).bigRed ||
            "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          borderLight: t.borderLight || "#e9ebf0",
        };
      },
    },
    watch: {
      activeFundTab: {
        handler: function (t) {
          var e = this;
          if ("string" == typeof t) {
            setTimeout(function () {
              e.hideTooltip();
            }, 0);
            var i = t.substring(0, t.length - 1);
            this.changeRange(i);
          }
        },
        immediate: !0,
      },
      showTooltips: function (t) {
        var e;
        t &&
          (null == (e = this.hqBridge) ||
            e.report("hq.stock_detail.fund_mainfund_touch_click", {
              stockid: this.id,
            }));
      },
      skin: function (t, e) {
        t && t !== e && this.refreshHash();
      },
    },
    destroyed: function () {
      (this.historyFundsChart = null),
        (this.tooltipTimer = null),
        (this.chartObj = null);
    },
    methods: {
      canvasInfo: function (t) {
        this.$emit("canvasInfo", t);
      },
      changeRange: function (t) {
        (this.currentRange = { text: "".concat(t, "日"), value: t }),
          this.getHistoryFundsData();
      },
      setHistoryFundsChart: function (e) {
        var i,
          a,
          n = this,
          o = e.chart,
          r = e.config,
          s = this.showAvgInHistoryLine,
          l = 0,
          h = [];
        if (
          (this.historyFunds &&
            (h = this.historyFunds.filter(function (t) {
              return (
                "avgIn" !== t.type ||
                ((n.avgInRadioDisabled = 0 == +t.value), (l += 1), s)
              );
            })),
          (this.maxData = Math.max.apply(
            Math,
            t(
              h.map(function (t) {
                return t.value;
              })
            )
          )),
          (this.minData = Math.min.apply(
            Math,
            t(
              h.map(function (t) {
                return t.value;
              })
            )
          )),
          o.source(h, {
            date: {
              tickCount: 5,
              range:
                5 === parseInt(this.currentRange.value, 10)
                  ? [0.1, 0.9]
                  : [0.03, 0.97],
            },
            value: {
              tickCount: 122,
              ticks: [this.maxData, this.minData],
              range: [0.13, 0.87],
            },
            price: {
              tickCount: 122,
              min: Math.min.apply(
                Math,
                t(
                  h.map(function (t) {
                    return t.price;
                  })
                )
              ),
              range: [0.13, 0.87],
            },
          }),
          o.legend(!1),
          o.tooltip({
            custom: !0,
            showCrosshairs: !0,
            showTooltipMarker: !1,
            crosshairsType: "y",
            alwaysShow: !0,
            triggerOn: [],
            onChange: function (t) {
              n.handleTooltipData(t, r);
            },
            onShow: function (t) {
              (n.showTooltips = !0), n.handleTooltipData(t, r);
            },
          }),
          o.animate(!1),
          (this.dateList = []),
          o.axis("date", {
            labelOffset: 0,
            line: null,
            label: function (t, e, i) {
              n.dateList.includes(t) || "date" === t || n.dateList.push(t);
            },
          }),
          (5 != this.currentRange.value || this.showAvgInHistoryLine) &&
            (o
              .guide()
              .text({
                position: ["0%", "100%"],
                content: null == (i = h[0]) ? void 0 : i.date,
                style: {
                  fill: "#7A8499",
                  fontSize: p(10),
                  textBaseLine: "top",
                  textAlign: "start",
                  fontFamily: "stockFont",
                },
                offsetY: 22,
              }),
            this.showAvgInHistoryLine ||
              o
                .guide()
                .text({
                  position: ["50%", "100%"],
                  content:
                    null == (a = h[parseInt(h.length / 2, 10)])
                      ? void 0
                      : a.date,
                  style: {
                    fill: "#7A8499",
                    fontSize: p(10),
                    textBaseLine: "top",
                    textAlign: "center",
                    fontFamily: "stockFont",
                  },
                  offsetY: 22,
                }),
            o
              .guide()
              .text({
                position: ["100%", "100%"],
                content:
                  l < this.currentRange.value ? "--" : h[h.length - 1].date,
                style: {
                  fill: "#7A8499",
                  fontSize: p(10),
                  textBaseLine: "top",
                  textAlign: "end",
                  fontFamily: "stockFont",
                },
                offsetY: 22,
              })),
          s)
        ) {
          var u = h.filter(function (t) {
              return "mainNetInflow" === t.type;
            }),
            c = { value: 0 },
            f = { value: 0 };
          u.forEach(function (t) {
            t.value > 0 && t.value > c.value && (c = t),
              t.value < 0 && t.value < f.value && (f = t);
          }),
            [c, f].forEach(function (t) {
              if (t && t.value) {
                var e = parseFloat(t.value).toFixed(1);
                o.guide().tag({
                  position: [t.date, t.value],
                  content: e > 0 ? "+".concat(e) : e,
                  direct: "cr",
                  withPoint: !0,
                  background: { fill: "transparent" },
                  textStyle: {
                    fill: "#ff891e",
                    fontWeight: "500",
                    fontSize: p(10),
                    textAlign: "center",
                    textBaseline: "top",
                    fontFamily: "stockFont",
                  },
                  pointStyle: { fill: "#ff891e", stroke: "#F5F6FA" },
                  offsetX: 2,
                });
              }
            });
        }
        this.setChartBorder(o);
        if (
          (s
            ? o
                .line()
                .position("date*value")
                .color("type", function (t) {
                  return "mainNetInflow" === t
                    ? "#ff891e"
                    : "avgIn" === t
                    ? "#007aff"
                    : void 0;
                })
                .size(1)
            : o
                .interval()
                .position("date*value")
                .size({ 5: 20, 10: 12, 20: 8 }[this.currentRange.value])
                .color("value", function (t) {
                  return t > 0 ? n.themeColor.bigRed : n.themeColor.bigGreen;
                }),
          o
            .line()
            .position("date*price")
            .size(1)
            .color("black" === this.skin ? "#69738C" : "#C9D0DC"),
          o.axis("price", {
            position: "right",
            labelOffset: 0,
            line: null,
            grid: null,
            label: null,
          }),
          o.axis("value", {
            position: "left",
            labelOffset: 0,
            line: null,
            grid: null,
            label: null,
          }),
          h.length <= 5 &&
            h.map(function (t) {
              g(n, o, t);
            }),
          o.render(),
          (this.chartObj = o),
          !(h.length <= 5 || this.showAvgInHistoryLine))
        ) {
          var d = [],
            v = h.length,
            m = h[h.length - 1],
            y = "center",
            M = [m.time, m.value],
            b = x(m.value),
            w = h.slice(Math.max(v - 1 - Math.floor(v * b), 0), v),
            T = o.getPosition(m),
            k = T.y;
          if (w.length) {
            var A;
            A =
              parseFloat(m.value) >= 0
                ? Math.max.apply(
                    Math,
                    t(
                      w.map(function (t) {
                        return parseFloat(t.value);
                      })
                    )
                  )
                : Math.min.apply(
                    Math,
                    t(
                      w.map(function (t) {
                        return parseFloat(t.value);
                      })
                    )
                  );
            var I = w.find(function (t) {
              return parseFloat(t.value) === A;
            });
            k = o.getPosition(I).y;
          }
          h.length > 8
            ? ((M = [
                "99.5%",
                "".concat(Math.max((k / r.height) * 100, F), "%"),
              ]),
              (y = "right"))
            : ((M = [
                "".concat(
                  Math.min((T.x / r.width) * 100, 100 - (100 * b) / 2),
                  "%"
                ),
                "".concat(Math.max((k / r.height) * 100, F), "%"),
              ]),
              (y = "center"));
          var D = [(T.x / r.width) * 100 + "%", (T.y / r.height) * 100 + "%"],
            C = [
              (T.x / r.width) * 100 + "%",
              ((k - (parseFloat(m.value) > 0 ? 4 : -5)) / r.height) * 100 + "%",
            ];
          g(this, o, m, M, !0, y),
            d.push({
              x: parseFloat(M[0]),
              y: parseFloat(M[1]),
              textAlign: "right",
              width: 100 * b,
            }),
            o
              .guide()
              .line({
                start: D,
                end: C,
                style: {
                  stroke: "#7A8499",
                  lineWidth: 1,
                  lineDash: [0, 1.5, 1],
                  strokeOpacity: 0.5,
                  fontFamily: "stockFont",
                },
              });
          var H = h.findIndex(function (t) {
              return parseFloat(t.value) === n.maxData;
            }),
            L = h.findIndex(function (t) {
              return parseFloat(t.value) === n.minData;
            });
          (function (t, e, i) {
            var a = t,
              n = i - 1 - t,
              o = e,
              r = i - 1 - e,
              s = Math.min(a, n, o, r);
            return s === a || s === n ? t : e;
          })(H, L, v) === H
            ? (this.drawMaxPrice(o, r, h, m, H, d),
              this.drawMinPrice(o, r, h, m, L, d))
            : (this.drawMinPrice(o, r, h, m, L, d),
              this.drawMaxPrice(o, r, h, m, H, d)),
            o.render();
        }
      },
      drawMaxPrice: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.chartObj,
          e = arguments.length > 1 ? arguments[1] : void 0,
          i = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0,
          n = arguments.length > 4 ? arguments[4] : void 0,
          o = arguments.length > 5 ? arguments[5] : void 0,
          r = i[n],
          s = x(r.value),
          l = t.getPosition(r),
          h = "center",
          u = [
            (Math.max(5, l.x) / e.width) * 100 + "%",
            (l.y / e.height) * 100 + "%",
          ],
          c = m(
            100 * s,
            F,
            parseFloat(u[0]),
            parseFloat(u[1]),
            o,
            this.minData > 0
          );
        if (
          ((h = c.textAlign),
          0 === n && i.length > 8 && ((c.x = 0.5), (h = "left")),
          r.value !== a.value)
        ) {
          var f = [(l.x / e.width) * 100 + "%", (l.y / e.height) * 100 + "%"],
            d = [
              (l.x / e.width) * 100 + "%",
              "".concat(c.y + (this.maxData < 0 ? 3 : -4), "%"),
            ],
            p = y(
              (Math.abs(Math.max(this.maxData, 0)) /
                (Math.max(this.maxData, 0) - Math.min(0, this.minData))) *
                100
            ),
            M = !0;
          if (
            (parseFloat(this.maxData) < 0 &&
              ((c.x = Math.min(
                Math.max(parseFloat(f[0]), (s / 2) * 100),
                100 - (s / 2) * 100
              )),
              (c.y = "".concat(Math.max(p - 3, F), "%")),
              (M = !1),
              (f[1] = "".concat(p, "%")),
              (d[1] = p - 3 + "%"),
              (c = m(100 * s, 18, parseFloat(c.x), parseFloat(c.y), o, !0, h))),
            g(this, t, r, ["".concat(c.x, "%"), "".concat(c.y, "%")], M, h),
            Math.abs(parseFloat(d[0]) - c.x) > (100 * s) / 2)
          ) {
            +r.value > 0
              ? (d[1] = parseFloat(d[1]) - 2 + "%")
              : (d[1] = parseFloat(d[1]) - 3 + "%");
            var b = parseFloat(d[0]) > parseFloat(c.x),
              w = [
                "".concat(c.x + (b ? (100 * s) / 2 : (100 * -s) / 2), "%"),
                d[1],
              ];
            Math.abs(parseFloat(w[0]) - parseFloat(d[0])) < 1 &&
              (w[0] = "".concat(parseFloat(w[0]) + (b ? -2 : 2), "%")),
              v(t, d, w);
          }
          v(t, f, d), o.push({ x: c.x, y: c.y, textAlign: h, width: 100 * s });
        }
      },
      drawMinPrice: function () {
        var e,
          i =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.chartObj,
          a = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0,
          s = arguments.length > 5 ? arguments[5] : void 0,
          l = n.length,
          c = n[r],
          f = i.getPosition(c),
          d = x(c.value),
          p = n.slice(
            Math.max(r - Math.floor(l * d * 0.66), 0),
            Math.min(r + Math.floor(l * d * 0.66), l) + 1
          ),
          M = 101,
          b = "center";
        if (p.length) {
          e = Math.max.apply(
            Math,
            t(
              p.map(function (t) {
                return parseFloat(t.value);
              })
            )
          );
          var w = p.find(function (t) {
            return parseFloat(t.value) === e;
          });
          M = i.getPosition(w).y;
        }
        var T = [
            "".concat(Math.max(Math.min((f.x / a.width) * 100, 90), 7), "%"),
            (((this.minData >= 0 ? Math.min(f.y, M) : Math.max(f.y, M)) -
              (this.minData > 0 ? 0 : -20)) /
              a.height) *
              100 +
              "%",
          ],
          k = m(
            100 * d,
            18,
            parseFloat(T[0]),
            parseFloat(T[1]),
            s,
            this.minData > 0
          ),
          A = parseInt((l / 100) * k.x, 10);
        if (
          (p = n.slice(
            Math.max(A - Math.floor(l * d * 0.66), 0),
            Math.min(A + Math.floor(l * d * 0.66), l) + 1
          )).length
        ) {
          e = Math.max.apply(
            Math,
            t(
              p.map(function (t) {
                return parseFloat(t.value);
              })
            )
          );
          var I = p.find(function (t) {
            return parseFloat(t.value) === e;
          });
          M = i.getPosition(I).y;
        }
        var D = (M / a.height) * 100;
        if (
          ((k.y = this.minData >= 0 ? Math.min(D, k.y) : Math.max(D, k.y)),
          0 === r && n.length > 8 && ((k.x = 0.5), (b = "left")),
          c.value !== o.value)
        ) {
          var C = [(f.x / a.width) * 100 + "%", (f.y / a.height) * 100 + "%"],
            H = [
              (f.x / a.width) * 100 + "%",
              "".concat(k.y + (this.minData < 0 ? 3 : -4), "%"),
            ],
            L = y(
              (Math.abs(Math.max(this.maxData, 0)) /
                (Math.max(this.maxData, 0) - Math.min(0, this.minData))) *
                100
            ),
            O = !0;
          if (k.intersect && 0 !== r)
            if (parseFloat(c.value) < 0) {
              if (
                (p = n.slice(
                  Math.max(r - Math.floor(l * d * 0.55), 0),
                  Math.min(r + Math.floor(l * d * 0.55), l) + 1
                )).length
              ) {
                e = Math.max.apply(
                  Math,
                  t(
                    p.map(function (t) {
                      return parseFloat(t.value);
                    })
                  )
                );
                var S = p.find(function (t) {
                  return parseFloat(t.value) === e;
                });
                M = i.getPosition(S).y;
              }
              (k.x = parseFloat(T[0])),
                (k.y = Math.max(F, Math.min(L, (M / a.height) * 100))),
                (O = !1),
                (C[1] = "".concat(L, "%"));
              var P = (function (e, i, a, n, o) {
                var r = i.length,
                  s = parseInt((r / 100) * e.x, 10),
                  l = i.slice(
                    Math.max(s - Math.floor(r * a * 0.55), 0),
                    Math.min(s + Math.floor(r * a * 0.55), r) + 1
                  );
                if (l.length) {
                  var h = Math.max.apply(
                      Math,
                      t(
                        l.map(function (t) {
                          return parseFloat(t.value);
                        })
                      )
                    ),
                    u = l.find(function (t) {
                      return parseFloat(t.value) === h;
                    });
                  return (n.getPosition(u).y / o.height) * 100;
                }
                return null;
              })(
                (k = m(100 * d, 18, parseFloat(k.x), parseFloat(k.y), s, !0)),
                n,
                d,
                i,
                a
              );
              P && P < k.y && (k.y = P), (H[1] = parseFloat(k.y) - 3 + "%");
            } else if (
              parseFloat(o.value) > 0 &&
              parseFloat(this.minData) < 0
            ) {
              if (p.length) {
                e = Math.min.apply(
                  Math,
                  t(
                    p.map(function (t) {
                      return parseFloat(t.value);
                    })
                  )
                );
                var N = p.find(function (t) {
                  return Math.abs(parseFloat(t.value)) === e;
                });
                M = i.getPosition(N).y;
              }
              (k.x = parseFloat(T[0])),
                (k.y = "".concat(Math.min(L - 3, (M / a.width) * 100), "%")),
                (O = !1),
                (C[1] = "".concat(L, "%")),
                (H[1] = L - 3 + "%");
            }
          if (
            (g(this, i, c, ["".concat(k.x, "%"), "".concat(k.y, "%")], O, b),
            Math.abs(parseFloat(H[0]) - parseFloat(k.x)) > (100 * d) / 2)
          ) {
            +c.value > 0 || (k.intersect && 0 !== r)
              ? (H[1] = parseFloat(H[1]) - 2 + "%")
              : (H[1] = "".concat(parseFloat(H[1]) + 2, "%"));
            var j = parseFloat(H[0]) > parseFloat(k.x),
              R = [
                "".concat(k.x + (j ? (100 * d) / 2 : (100 * -d) / 2), "%"),
                H[1],
              ];
            Math.abs(parseFloat(R[0]) - parseFloat(H[0])) < 1 &&
              (R[0] = "".concat(parseFloat(R[0]) + (j ? -2 : 2), "%")),
              v(i, H, R);
          }
          v(i, C, H), s.push(u(h({}, k), { textAlign: b, width: 100 * d }));
        }
      },
      togglePlateHistoryRadio: function () {
        var t = this;
        this.avgInRadioDisabled ||
          (setTimeout(function () {
            t.hideTooltip();
          }, 0),
          (this.showAvgInHistoryLine = !this.showAvgInHistoryLine),
          (this.fmuHash = String(Math.random())));
      },
      getHistoryFundsData: function (t) {
        var e = this,
          i = t || this.history;
        if (i.oneDayKlineList && 0 !== i.oneDayKlineList.length) {
          for (
            var a = [], n = this.currentRange.value, o = 0, r = 0;
            r < Object.keys(this.mainNet).length;
            r += 1
          ) {
            var s = Object.keys(this.mainNet)[r];
            "v0" === s || "v2" === s || "v4" === s
              ? ((this.mainNet[s] = "--"),
                i.summary &&
                  "function" == typeof this.getUnitifyNumber &&
                  (this.mainNet[s] = this.getUnitifyNumber({
                    num: i.summary[s],
                    unit: this.unit,
                    priceFixed: 1,
                  })))
              : (this.mainNet[s] = i.summary ? i.summary[s] : "--");
          }
          i.oneDayKlineList.slice(-n).forEach(function (t) {
            o += +t.mainNetIn;
            var i = t.date.replace(/^\d{4}-/, ""),
              n = +e.getUnit(t.mainNetIn),
              r = +e.getUnit(t.avgIn),
              s = +t.price;
            a.push(
              { date: i, price: s, value: n, type: "mainNetInflow", avgIn: r },
              { date: i, price: s, value: r, type: "avgIn" }
            );
          }),
            (this.totalMainNet = this.getUnitifyNumber({
              num: o,
              unit: this.unit,
              priceFixed: 1,
            })),
            (this.historyFunds = a),
            (this.fmuHash = String(Math.random()));
        }
      },
      setChartBorder: function (t) {
        this.showAvgInHistoryLine
          ? t
              .guide()
              .line({
                start: ["0%", "97%"],
                end: ["100%", "97%"],
                top: !1,
                style: { stroke: this.themeColor.borderLight, lineWidth: 1 },
              })
          : t
              .guide()
              .line({
                start: ["min", 0],
                end: ["max", 0],
                top: !1,
                style: {
                  stroke:
                    "black" === this.skin
                      ? "#98A0b3"
                      : this.themeColor.borderLight,
                  lineWidth: 1,
                  lineDash: "black" === this.skin ? [0, 2, 1] : null,
                },
              });
      },
      refreshHash: function () {
        this.fmuHash = String(Math.random());
      },
      handleTooltipData: function (t, e) {
        var i;
        if (this.isTouching) {
          var a;
          if (
            ((this.disableChartTouchMove = !0),
            null == (i = this.hqBridge) || i.busEmit("lockSwiper", !0),
            this.showAvgInHistoryLine)
          ) {
            var n = parseFloat(t.items[1].value).toFixed(2);
            a = "".concat("-0.00" !== n ? n : "0.00", "万");
          } else {
            var o = parseFloat(t.items[0].value).toFixed(2);
            a = "".concat("-0.00" !== o ? o : "0.00", "万");
          }
          this.tipsData = {
            layout: t.x < e.width / 2 ? "right" : "left",
            title: t.items[0].title,
            items: [
              {
                name: this.showAvgInHistoryLine
                  ? "行业平均净流入"
                  : "主力净流入",
                value: a,
              },
              {
                name: "股价",
                value: this.showAvgInHistoryLine
                  ? parseFloat(t.items[2].value).toFixed(2)
                  : parseFloat(t.items[1].value).toFixed(2),
              },
            ],
          };
        }
      },
    },
  };
Array || f.resolveComponent("f2")();
var b = f._export_sfc(M, [
  [
    "render",
    function (t, e, i, a, n, o) {
      return f.e(
        { a: n.tipsData },
        n.tipsData
          ? {
              b: f.t(n.tipsData.title),
              c: f.f(n.tipsData.items, function (t, e, i) {
                return {
                  a: f.t(t.name),
                  b: f.t(t.value),
                  c: f.n(
                    e
                      ? ""
                      : parseFloat(t.value) > 0
                      ? "f2-tooltip-red"
                      : parseFloat(t.value) < 0
                      ? "f2-tooltip-green"
                      : ""
                  ),
                  d: e,
                };
              }),
              d: f.n(n.tipsData.layout),
            }
          : {},
        {
          e: f.o(o.setHistoryFundsChart, 5821),
          f: f.o(t.chartTouchStop, 5822),
          g: f.o(t.chartTouchStart, 5823),
          h: f.o(t.chartTouchMove, 5824),
          i: f.o(o.canvasInfo, 5825),
          j: f.p({
            "chart-id": "funds-daily-trend",
            "c-class": "funds-daily-trend",
            "c-style": "width: 100%; height: 288rpx",
            "refresh-hash": n.fmuHash,
            "disable-touch-move": !0,
            config: n.chartConfig,
          }),
          k: f.f(n.dateList, function (t, e, i) {
            return { a: f.t(t), b: e };
          }),
          l: f.n(5 == n.currentRange.value ? "date-container-padding" : ""),
          m: f.o(function () {}, 5826),
          n: n.showAvgInHistoryLine,
        },
        (n.showAvgInHistoryLine, {}),
        { o: !n.showAvgInHistoryLine },
        (n.showAvgInHistoryLine, {}),
        { p: !n.showAvgInHistoryLine },
        (n.showAvgInHistoryLine, {}),
        {
          q: f.n(i.isWidget ? "widget" : ""),
          r: i.showPlateRadio && !i.isWidget,
        },
        i.showPlateRadio && !i.isWidget
          ? f.e({ s: n.showAvgInHistoryLine }, (n.showAvgInHistoryLine, {}), {
              t: f.n(n.showAvgInHistoryLine ? "radio-checked" : ""),
              v: f.n(n.avgInRadioDisabled ? "disabled" : ""),
              w: f.o(function () {
                return (
                  o.togglePlateHistoryRadio &&
                  o.togglePlateHistoryRadio.apply(o, arguments)
                );
              }, 5827),
            })
          : {},
        { x: f.n(i.isWidget ? "widget" : ""), y: f.n(i.skin) }
      );
    },
  ],
  ["__scopeId", "data-v-2ef64ca7"],
]);
wx.createComponent(b);
