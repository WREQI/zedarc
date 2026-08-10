require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-hq-core/config/css-token.js"),
  a = require("../utils/index.js");
function n(t) {
  return (
    (t *=
      (document
        ? Math.min(
            430,
            document.documentElement.clientWidth || document.body.clientWidth
          )
        : e.wx$1.getSystemInfoSync().windowWidth) / 375) / 2
  );
}
var c = t.CSSTOKEN.DEFAULT,
  r = e.defineComponent({
    components: {
      F2: function () {
        return "../component-f2/f2MP.js";
      },
    },
    props: {
      chartData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      createDay: { type: String, default: "" },
      benchMark: { type: String, default: "沪深300" },
      intervals: {
        type: Array,
        default: function () {
          return [];
        },
      },
      quoteDate: { type: String, default: "" },
      gdId: { type: String, default: "" },
    },
    emits: ["getBase64", "changeRange", "showChartModal"],
    setup: function (t, r) {
      var i = r.emit,
        o = e.reactive({ changePct: "", changePctStr: "", changePctIndex: "" }),
        l = e.ref(0),
        s = e.ref(""),
        d = e.ref(!1),
        u = e.ref({ date: "", changePct: 0, changePctIndex: 0 }),
        h = e.ref({ padding: [5, 3, 20, 3] }),
        g = e.reactive({}),
        f = null,
        p = function () {
          var n,
            c = t.chartData.length - 1,
            r = a.findDate(t.createDay, t.chartData);
          (g.date = r.date),
            (g.index = r.index),
            (g.isShowLine = r.isShowLine),
            (o.changePct = null == (n = t.chartData[c]) ? void 0 : n.changePct),
            o.changePct
              ? (o.changePctStr =
                  o.changePct > 0 ? "+".concat(o.changePct) : o.changePct)
              : (o.changePctStr = ""),
            (o.changePctIndex = t.chartData[c].changePctIndex);
          var i = t.chartData,
            l = i.map(function (e) {
              return {
                date: e.date,
                type: "changePctIndex",
                value: e.changePctIndex,
              };
            }),
            s = [],
            d = [];
          return (
            g.date
              ? ((s = i.slice(0, g.index + 1).map(function (e) {
                  return {
                    date: e.date,
                    type: "beforeChangePct",
                    value: e.changePct,
                  };
                })),
                e
                  .dayjs(t.createDay, "YYYY-MM-DD")
                  .isAfter(e.dayjs(t.chartData[c].date, "YYYY-MM-DD")) ||
                  (d = i.slice(g.index).map(function (e) {
                    return {
                      date: e.date,
                      type: "changePct",
                      value: e.changePct,
                    };
                  })))
              : (s = i.map(function (e) {
                  return {
                    date: e.date,
                    type: "changePct",
                    value: e.changePct,
                  };
                })),
            (i = (i = s.concat(d)).concat(l))
          );
        },
        m = function () {
          var e,
            n,
            c = t.chartData.length - 1,
            r = a.fillData(t.chartData, t.intervals);
          (o.changePct = null == (e = t.chartData[c]) ? void 0 : e.changePct),
            o.changePct
              ? (o.changePctStr =
                  o.changePct > 0 ? "+".concat(o.changePct) : o.changePct)
              : (o.changePctStr = ""),
            (o.changePctIndex =
              null == (n = t.chartData[c]) ? void 0 : n.changePctIndex);
          var i = r.map(function (e) {
              return {
                minute: e.minute,
                type: "changePctIndex",
                value: e.changePctIndex ? e.changePctIndex : null,
              };
            }),
            l = [];
          return (
            (l = r.map(function (e) {
              return {
                minute: e.minute,
                type: "changePct",
                value: e.changePct ? e.changePct : null,
              };
            })),
            (r = "" !== t.benchMark ? l.concat(i) : l)
          );
        },
        y = [],
        D = function (r) {
          var i = r.chart,
            o = p();
          i.source(o, {
            date: { tickCount: 2, range: [0.01, 0.99] },
            value: { tickCount: 4, type: "linear" },
          }),
            i.tooltip({
              custom: !0,
              snap: !0,
              crosshairsType: "xy",
              crosshairsStyle: {
                lineDash: null,
                stroke: "#475166",
                lineWidth: n(0.7),
              },
              tooltipMarkerStyle: { fill: "#fff" },
              onChange: function (a) {
                var n = 0,
                  c = 0,
                  r = 0;
                a.items.forEach(function (e) {
                  "changePct" === e.name
                    ? (n = 0 == e.value ? "0.00" : e.value)
                    : "changePctIndex" === e.name
                    ? (c = 0 == e.value ? "0.00" : e.value)
                    : "beforeChangePct" === e.name &&
                      (r = 0 == e.value ? "0.00" : e.value);
                });
                var i = e
                  .dayjs(a.items[0].origin.date, "YYYYMMDD")
                  .format("YYYY-MM-DD");
                (u.value = { date: i, changePct: n, changePctIndex: c }),
                  e.dayjs(i).isBefore(e.dayjs(t.createDay, "YYYY-MM-DD")) &&
                    (u.value.changePct = r);
              },
              onShow: function () {
                d.value = !0;
              },
              onHide: function () {
                d.value = !1;
              },
            }),
            i.legend(!1),
            i
              .line()
              .position("date*value")
              .color("type", function (e) {
                return "beforeChangePct" === e || "changePct" === e
                  ? "transparent"
                  : c.orange;
              })
              .size(n(2.4)),
            i
              .line()
              .position("date*value")
              .color("type", function (e) {
                return "beforeChangePct" === e
                  ? "#C9D0DC"
                  : "changePct" === e
                  ? "#3077EC"
                  : "transparent";
              })
              .size(n(2.4)),
            i.axis("date", {
              label: function (t, n, c) {
                var r = {};
                return (
                  0 === n
                    ? (r.textAlign = "left")
                    : n === c - 1 && (r.textAlign = "right"),
                  "year" === P.value || "all" === P.value
                    ? a.allStartWithSamePrefix(o, "date", 4)
                      ? (r.text = e.dayjs(t, "YYYYMMDD").format("MM-DD"))
                      : (r.text = e.dayjs(t, "YYYYMMDD").format("YYYY-MM-DD"))
                    : (r.text = e.dayjs(t, "YYYYMMDD").format("MM-DD")),
                  (r.fontFamily = "stockFont"),
                  r
                );
              },
              line: { stroke: "#E9EBF0", lineWidth: n(0.7) },
            }),
            i.axis("value", {
              position: "left",
              line: null,
              grid: { lineDash: null, stroke: "#E9EBF0", lineWidth: n(1) },
              labelOffset: 0,
              label: function (e, t, a) {
                y[t] && (y[t].content = ""),
                  (y[t] = i
                    .guide()
                    .text({
                      position: [
                        "0%",
                        a - 1 === t ? "6%" : 33 * (a - t - 1) - 5 + "%",
                      ],
                      content:
                        e > 0
                          ? "+".concat(parseFloat(e).toFixed(2), "%")
                          : "".concat(parseFloat(e).toFixed(2), "%"),
                      limitInPlot: !0,
                      style: {
                        textAlign: "left",
                        fontSize: n(18),
                        fontFamily: "stockFont",
                      },
                    }));
              },
            }),
            g.date &&
              (i
                .guide()
                .rect({
                  start: ["min", "min"],
                  end: [g.date, "max"],
                  style: { fill: "#98A0B3", fillOpacity: 0.05 },
                }),
              g.isShowLine &&
                (i
                  .guide()
                  .line({
                    start: [g.date, "min"],
                    end: [g.date, "max"],
                    style: {
                      stroke: "#98A0B3",
                      lineWidth: n(1),
                      lineDash: [0, 1, 1],
                    },
                  }),
                i
                  .guide()
                  .point({
                    position: [g.date, "min"],
                    style: {
                      fill: "#fff",
                      stroke: "#98A0B3",
                      lineWidth: n(2.5),
                    },
                  }))),
            setTimeout(function () {
              var e;
              null == (e = null == i ? void 0 : i.render) || e.call(i), (f = i);
            }, 30);
        },
        v = function (a) {
          var r = a.chart,
            i = m();
          r.source(i, { value: { tickCount: 4, type: "linear" } }),
            r.tooltip({
              custom: !0,
              snap: !0,
              crosshairsType: "xy",
              crosshairsStyle: {
                lineDash: null,
                stroke: "#475166",
                lineWidth: n(0.7),
              },
              tooltipMarkerStyle: { fill: "#fff" },
              onChange: function (a) {
                var n = 0,
                  c = 0;
                a.items.forEach(function (e) {
                  "changePct" === e.name
                    ? (n = 0 == e.value ? "0.00" : e.value)
                    : "changePctIndex" === e.name &&
                      (c = 0 == e.value ? "0.00" : e.value);
                });
                var r,
                  i = a.items[0].origin.minute,
                  o = "".concat(i.slice(0, 2), ":").concat(i.slice(2));
                (r =
                  parseInt(a.items[0].origin.minute, 10) >= 0 &&
                  parseInt(a.items[0].origin.minute, 10) < 900
                    ? e
                        .dayjs(t.quoteDate, "YYYYMMDD")
                        .add(1, "day")
                        .format("YYYY-MM-DD")
                    : e.dayjs(t.quoteDate, "YYYYMMDD").format("YYYY-MM-DD")),
                  (u.value = {
                    date: r,
                    time: o,
                    changePct: n,
                    changePctIndex: c,
                  });
              },
              onShow: function () {
                d.value = !0;
              },
              onHide: function () {
                d.value = !1;
              },
            }),
            r.axis("minute", {
              label: function (a, n, c) {
                var r = {};
                0 === n
                  ? (r.textAlign = "left")
                  : n === c - 1 && (r.textAlign = "right");
                var i = t.intervals.findIndex(function (e) {
                    return e.includes(a);
                  }),
                  o = t.intervals[i];
                return (
                  o
                    ? o[1] === a && n && n !== c - 1
                      ? (r.text = ""
                          .concat(
                            e
                              .dayjs("2023-01-01 ".concat(a), "YYYY-MM-DD HHmm")
                              .format("HH:mm"),
                            "/"
                          )
                          .concat(
                            e
                              .dayjs(
                                "2023-01-01 ".concat(t.intervals[i + 1][0]),
                                "YYYY-MM-DD HHmm"
                              )
                              .format("HH:mm")
                          ))
                      : (r.text =
                          0 === n || n === c - 1
                            ? e
                                .dayjs(
                                  "2023-01-01 ".concat(a),
                                  "YYYY-MM-DD HHmm"
                                )
                                .format("HH:mm")
                            : "")
                    : (r.text = ""),
                  (r.fontFamily = "stockFont"),
                  r
                );
              },
              line: { stroke: "#E9EBF0", lineWidth: n(0.7) },
            }),
            r.axis("value", {
              position: "left",
              line: null,
              grid: { lineDash: null, stroke: "#E9EBF0", lineWidth: n(1) },
              labelOffset: 0,
              label: function (e, t, a) {
                y[t] && (y[t].content = ""),
                  (y[t] = r
                    .guide()
                    .text({
                      position: [
                        "0%",
                        a - 1 === t ? "6%" : 33 * (a - t - 1) - 5 + "%",
                      ],
                      content:
                        e > 0
                          ? "+".concat(parseFloat(e).toFixed(2), "%")
                          : "".concat(parseFloat(e).toFixed(2), "%"),
                      limitInPlot: !0,
                      style: {
                        textAlign: "left",
                        fontSize: n(18),
                        fontFamily: "stockFont",
                      },
                    }));
              },
            }),
            r.legend(!1),
            "" !== t.benchMark &&
              r
                .line()
                .position("minute*value")
                .color("type", function (e) {
                  return "changePct" === e ? "transparent" : c.orange;
                })
                .size(n(2.4)),
            r
              .line()
              .position("minute*value")
              .color("type", function (e) {
                return "changePctIndex" === e
                  ? "transparent"
                  : "changePct" === e
                  ? "#3077EC"
                  : void 0;
              })
              .size(n(2.4)),
            setTimeout(function () {
              var e;
              null == (e = null == r ? void 0 : r.render) || e.call(r), (f = r);
            }, 30);
        };
      e.watch(d, function (a) {
        a &&
          e.StockBridge.report("hq.basketdetail.chart_tooltip_click", {
            watchlist_id: t.gdId,
          });
      });
      var P = e.computed(function () {
          return ["day", "month", "season", "year", "all"][l.value];
        }),
        x = e.computed(function () {
          return e.dayjs(u.value.date).isBefore(e.dayjs(t.createDay));
        }),
        Y = 0,
        M = e.ref(null);
      return (
        e.watch(l, function () {
          switch ((i("changeRange", P.value), l.value)) {
            case 0:
              e.StockBridge.report("hq.basketdetail.chart_range_month_click", {
                watchlist_id: t.gdId,
              });
              break;
            case 1:
              e.StockBridge.report("hq.basketdetail.chart_range_season_click", {
                watchlist_id: t.gdId,
              });
              break;
            case 2:
              e.StockBridge.report("hq.basketdetail.chart_range_year_click", {
                watchlist_id: t.gdId,
              });
              break;
            case 3:
              e.StockBridge.report("hq.basketdetail.chart_range_all_click", {
                watchlist_id: t.gdId,
              });
          }
        }),
        e.onUnmounted(function () {
          var e;
          null == (e = null == f ? void 0 : f.tooltip) || e.call(f, !1),
            (f = null);
        }),
        {
          isLite: !1,
          lineHash: s,
          refresh: function () {
            if (Y !== l.value) (s.value = String(Math.random())), (Y = l.value);
            else if ("day" !== P.value) {
              var e = p();
              f && (null == f || f.changeData(e));
            } else {
              var t = m();
              f && (null == f || f.changeData(t));
            }
          },
          earnings: o,
          rangeList: ["今日", "近一月", "近三月", "近一年", "全部"],
          currentRange: l,
          setPlateTrendChart: D,
          chartConfig: h,
          tooltipData: u,
          showTooltip: d,
          plateTrendRef: M,
          getBase64: function (e) {
            i("getBase64", e);
          },
          handleChartModal: function () {
            i("showChartModal");
          },
          gapDay: g,
          isTooltipBefore: x,
          props: t,
          setTodayTrendChart: v,
          currentRangeStr: P,
          chartInit: function (e) {
            "day" === P.value ? v(e) : D(e);
          },
          changeRangeTab: function (e) {
            l.value = e;
          },
        }
      );
    },
  });
Array || e.resolveComponent("F2")();
var i = e._export_sfc(r, [
  [
    "render",
    function (t, a, n, c, r, i) {
      return e.e(
        { a: !t.showTooltip },
        t.showTooltip
          ? e.e(
              {
                m: e.t(t.tooltipData.date),
                n: e.t(t.tooltipData.time ? t.tooltipData.time : ""),
                o: e.n(t.isTooltipBefore ? "line-gray" : "line-blue"),
                p: t.gapDay.date && "day" !== t.currentRangeStr,
              },
              t.gapDay.date && "day" !== t.currentRangeStr
                ? { q: e.t(t.isTooltipBefore ? "成立前" : "成立后") }
                : {},
              {
                r: e.t(
                  (t.tooltipData.changePct > 0 ? " +" : "") +
                    t.tooltipData.changePct +
                    "%"
                ),
                s: e.n(
                  "recent-earnings-" +
                    (parseFloat(t.tooltipData.changePct) > 0
                      ? "red"
                      : 0 == t.tooltipData.changePct
                      ? "gray"
                      : "green")
                ),
                t: "" !== t.props.benchMark,
              },
              "" !== t.props.benchMark
                ? {
                    v: e.t(t.props.benchMark),
                    w: e.t(
                      (t.tooltipData.changePctIndex > 0 ? "+" : "") +
                        t.tooltipData.changePctIndex +
                        "%"
                    ),
                    x: e.n(
                      "recent-earnings-" +
                        (parseFloat(t.tooltipData.changePctIndex) > 0
                          ? "red"
                          : 0 == t.tooltipData.changePctIndex
                          ? "gray"
                          : "green")
                    ),
                  }
                : {}
            )
          : e.e(
              {
                b: e.t(
                  t.gapDay.date && "day" !== t.currentRangeStr
                    ? "成立后"
                    : "本股单"
                ),
                c: t.earnings.changePct,
              },
              t.earnings.changePct
                ? {
                    d: e.t(t.earnings.changePctStr),
                    e: e.n(
                      "recent-earnings-" +
                        (parseFloat(t.earnings.changePct) > 0
                          ? "red"
                          : 0 == parseFloat(t.earnings.changePct)
                          ? "gray"
                          : "green")
                    ),
                  }
                : {},
              { f: "" !== t.props.benchMark },
              "" !== t.props.benchMark
                ? e.e(
                    { g: e.t(t.props.benchMark), h: t.earnings.changePctIndex },
                    t.earnings.changePctIndex
                      ? {
                          i: e.t(
                            (t.earnings.changePctIndex > 0 ? " +" : "") +
                              t.earnings.changePctIndex
                          ),
                          j: e.n(
                            "recent-earnings-" +
                              (parseFloat(t.earnings.changePctIndex) > 0
                                ? "red"
                                : 0 == t.earnings.changePctIndex
                                ? "gray"
                                : "green")
                          ),
                        }
                      : {}
                  )
                : {},
              { k: "day" !== t.currentRangeStr && "" !== t.gapDay.date },
              ("day" !== t.currentRangeStr && t.gapDay.date, {}),
              {
                l: e.o(function () {
                  return (
                    t.handleChartModal && t.handleChartModal.apply(t, arguments)
                  );
                }, 2209),
              }
            ),
        {
          y: e.sr("plateTrendRef", "67404266-0"),
          z: e.o(t.chartInit, 2210),
          A: e.o(t.getBase64, 2211),
          B: e.p({
            chartId: "plate-trend-chart",
            cClass: "plate-trend-chart",
            cStyle: "width: 100%; height: 248rpx",
            refreshHash: t.lineHash,
            "custom-tooltip-marker": !0,
            config: t.chartConfig,
          }),
          C: e.f(t.rangeList, function (a, n, c) {
            return {
              a: e.t(a),
              b: n,
              c: e.n(t.currentRange == n ? "range-choose-item-active" : ""),
              d: e.o(
                function (e) {
                  return t.changeRangeTab(n);
                },
                2212,
                n
              ),
            };
          }),
          D: e.n(t.isLite ? "" : "pro"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-67404266"],
]);
wx.createComponent(i);
