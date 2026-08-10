var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  i = require("../../stock-hq-core/utils/market.js"),
  r = require("../../stock-hq-core/utils/f2-tool/f2tag.js"),
  n = require("../../stock-hq-core/config/css-token.js"),
  o = [0, 30, 60, 90, 120],
  a = [0, 30, 60, 90],
  s = {
    name: "MarginCard",
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
    },
    inject: ["fontSkin"],
    props: {
      market: String,
      unitText: {
        type: String,
        default: function () {
          return "";
        },
      },
      unit: { type: Number, default: 1e8 },
      data: { type: Object },
      showPlateRadio: { type: Boolean, default: !1 },
      skin: String,
    },
    data: function () {
      return {
        isBroker: e.isBroker,
        showMarginCard: !0,
        updateDate: "--",
        MarginLineChart: null,
        MarginTooltip: {
          date: "",
          price: "",
          changePercent: "",
          changePercentShow: "",
          inflow: "",
          inflowShow: "",
          open: "",
          percent: "",
          isShow: !1,
          position: "left",
        },
        marginData: [],
        showDifference: !1,
        rzjmr: "--",
        rzyeDotPos: null,
        showMarginLineChart: !1,
        showMarginBarChart: !1,
        bigInflow: 0,
        fmuHash: "",
        marginHash: "",
        marginLineChartConfig: {
          animate: !1,
          padding: [0.5, 4, 20],
          height: 150,
        },
        marginBarChartConfig: {
          padding: [0.5, 4, 0.5],
          height: 50,
          animate: !1,
        },
      };
    },
    activated: function () {
      (this.fmuHash = String(Math.random())),
        (this.marginHash = String(Math.random()));
    },
    computed: {
      isDark: function () {
        return ["black", "dark"].includes(this.skin);
      },
      rzyeDotStyle: function () {
        return this.rzyeDotPos && this.rzyeDotPos.x
          ? {
              left: this.rzyeDotPos.x - 5.5 + "px",
              top: this.rzyeDotPos.y - 7 + "px",
            }
          : {};
      },
      themeColor: function () {
        var t = n.CSSTOKEN.DEFAULT;
        return (
          (t = this.isDark
            ? n.CSSTOKEN.BLACK || n.CSSTOKEN.DEFAULT
            : n.CSSTOKEN[e.isBroker] || n.CSSTOKEN.DEFAULT),
          {
            bgColor: this.isDark ? "#171d28" : "#fff",
            bigRed: t.bigRed || "#E63535",
            bigGreen: t.bigGreen || "#1CAA3C",
            bigBlue: t.bigBlue || "#3077ec",
            borderLight: t.borderLight || "#e9ebf0",
          }
        );
      },
    },
    watch: {
      data: function () {
        this.getMarginData();
      },
    },
    destroyed: function () {
      this.MarginLineChart = null;
    },
    mounted: function () {
      this.getMarginData();
    },
    methods: {
      getColor: function (t, e) {
        var i = parseFloat(t);
        if (i || 0 === i) {
          if (0 === i) return this.themeColor.gray;
          var r =
              "sanhu" === e
                ? this.themeColor.normalRed
                : this.themeColor.bigRed,
            n =
              "sanhu" === e
                ? this.themeColor.normalGreen
                : this.themeColor.bigGreen;
          return i > 0 ? r : n;
        }
      },
      gotoTeachPage: function (t) {
        e.StockBridge.report("hq.funds_analysis_hs.go_to_teach_page", {
          id: ["sz", "sh"][this.type] + this.scode,
        }),
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20220507194228790db9e0",
              articleStyle: "fullTeach",
              anchorTitle: t,
            },
          });
      },
      toggleRadio: function () {
        e.StockBridge.report("hq.stock_detail.fund.onlysee.margindiff_click"),
          (this.showDifference = !this.showDifference),
          (this.fmuHash = String(Math.random()));
      },
      getMarginData: function () {
        return (
          (r = this),
          null,
          (n = t().mark(function r() {
            var n, o, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = this.data) && n.data && n.data.length > 0
                        ? ((o = n.data),
                          (this.showMarginCard = !0),
                          (this.updateDate = e
                            .dayjs(o[0].date)
                            .format("YYYY-MM-DD")),
                          (this.rzjmr = i.bigNumberToTextForFinance(
                            o[0].rzjmr,
                            2
                          )),
                          (a = 0),
                          (this.marginData = o
                            .slice(0)
                            .sort(function (t, e) {
                              return t.date - e.date;
                            })
                            .map(function (t) {
                              var i = {
                                date: e.dayjs(t.date).format("MM-DD"),
                                rzye: t.rzye,
                                rqye: t.rqye || 0,
                                rzjmr: t.rzjmr,
                                rzrqce: t.rzrqce,
                                inflow: t.rzjmr,
                              };
                              return (
                                (a =
                                  Math.abs(i.inflow) > a
                                    ? Math.abs(i.inflow)
                                    : a),
                                i
                              );
                            })),
                          (this.fmuHash = String(Math.random())),
                          (this.showMarginLineChart = !0),
                          (this.bigInflow = a),
                          (this.marginHash = String(Math.random())),
                          (this.showMarginBarChart = !0))
                        : (this.showMarginCard = !1);
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              this
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  a(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (t) {
                try {
                  a(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, o);
              };
            a((n = n.apply(r, null)).next());
          })
        );
        var r, n;
      },
      setMarginBarChart: function (t) {
        var e = this,
          r = t.chart,
          n = this.bigInflow / 1e4;
        r.axis("date", !1), r.axis("inflow", !1);
        var o = this.marginData.map(function (t) {
          return { date: t.date, inflow: t.inflow / 1e4 };
        });
        r.source(o, {
          date: { range: [0.01, 0.99] },
          inflow: { tickCount: 3, nice: !1, min: -n, max: n },
        }),
          r
            .interval()
            .position("date*inflow")
            .color("inflow", function (t) {
              return t > 0
                ? e.themeColor.bigRed || "#e63535"
                : e.themeColor.bigGreen || "#43a047";
            }),
          r
            .guide()
            .line({
              start: ["min", 0],
              end: ["max", 0],
              style: { stroke: this.themeColor.borderLight, lineWidth: 0.5 },
            }),
          r
            .guide()
            .line({
              start: ["min", n],
              end: ["max", n],
              style: { stroke: this.themeColor.borderLight, lineWidth: 0.5 },
            }),
          r
            .guide()
            .line({
              start: ["min", -n],
              end: ["max", -n],
              style: { stroke: this.themeColor.borderLight, lineWidth: 0.5 },
            }),
          r
            .guide()
            .line({
              start: ["min", n],
              end: ["min", -n],
              style: { stroke: this.themeColor.borderLight, lineWidth: 0.5 },
              offsetX: -50,
            }),
          r
            .guide()
            .line({
              start: ["max", n],
              end: ["max", -n],
              style: { stroke: this.themeColor.borderLight, lineWidth: 0.5 },
            }),
          r
            .guide()
            .text({
              position: ["min", n],
              content: "".concat(
                i.bigNumberToTextForFinance(1e4 * n, 1, "", "", !1)
              ),
              style: {
                fill: "#7A8499",
                fontSize: 10,
                textBaseLine: "top",
                textAlign: "top",
              },
              offsetY: 10,
              offsetX: 3.5,
            }),
          r
            .guide()
            .text({
              position: ["min", -n],
              content: "-".concat(
                i.bigNumberToTextForFinance(1e4 * n, 1, "", "", !1)
              ),
              style: {
                fill: "#7A8499",
                fontSize: 10,
                textBaseLine: "bottom",
                textAlign: "bottom",
              },
              offsetY: -10,
              offsetX: 3.5,
            }),
          r.tooltip(!1),
          r.render();
      },
      setMarginLineChart: function (t) {
        var e = this,
          r = t.chart,
          n = t.config;
        r.legend(!1);
        if (
          (r.source(
            this.marginData,
            this.showDifference
              ? {
                  date: { tickCount: 2, range: [0, 1] },
                  rzrqce: { tickCount: 122, type: "linear" },
                }
              : {
                  date: { tickCount: 2, range: [0, 1] },
                  rzye: { tickCount: 122, type: "linear" },
                  rqye: { tickCount: 122, type: "linear" },
                }
          ),
          r.axis("date", {
            line: null,
            label: function (t, i, r) {
              var n = {
                fill: "#7A8499",
                fontSize: 10,
                text: t.replace(/^\d{4}-/, ""),
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              };
              return (
                0 === i
                  ? (n.textAlign = "start")
                  : i === r - 1 && (n.textAlign = "end"),
                n
              );
            },
          }),
          this.showDifference)
        ) {
          var s = this;
          r.axis("rzrqce", {
            position: "left",
            line: null,
            grid: function (t, e) {
              return a.indexOf(e) >= 0
                ? {
                    lineDash: null,
                    stroke: s.themeColor.borderLight,
                    lineWidth: 0.5,
                  }
                : null;
            },
            labelOffset: -3.5,
            label: function (t, r) {
              var n = {
                fill: "#98A0B3",
                fontSize: 10,
                text:
                  o.indexOf(r) >= 0
                    ? i.bigNumberToTextForFinance(t, 1, "", "", !1)
                    : "",
                textAlign: "start",
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              };
              return (
                0 === r
                  ? (n.textBaseline = "bottom")
                  : r === o[o.length - 1] && (n.textBaseline = "top"),
                n
              );
            },
          });
        } else {
          var h = this;
          r.axis("rzye", {
            position: "left",
            line: null,
            grid: function (t, e) {
              return a.indexOf(e) >= 0
                ? {
                    lineDash: null,
                    stroke: h.themeColor.borderLight,
                    lineWidth: 0.5,
                  }
                : null;
            },
            labelOffset: -3.5,
            label: function (t, r) {
              var n = {
                fill: "#7A8499",
                fontSize: 10,
                text:
                  o.indexOf(r) >= 0
                    ? i.bigNumberToTextForFinance(t, 1, "", "", !1)
                    : "",
                textAlign: "start",
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              };
              return (
                0 === r
                  ? (n.textBaseline = "bottom")
                  : r === o[o.length - 1] && (n.textBaseline = "top"),
                n
              );
            },
          }),
            r.axis("rqye", {
              position: "right",
              line: null,
              grid: null,
              labelOffset: -3.5,
              label: function (t, r) {
                var n = {
                  fill: "#7A8499",
                  fontSize: 10,
                  text:
                    o.indexOf(r) >= 0
                      ? i.bigNumberToTextForFinance(t, 1, "", "", !1)
                      : "",
                  textAlign: "end",
                  fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                };
                return (
                  0 === r
                    ? (n.textBaseline = "bottom")
                    : r === o[o.length - 1] && (n.textBaseline = "top"),
                  n
                );
              },
            });
        }
        var l = this.marginData[this.marginData.length - 1];
        if (this.showDifference)
          r.line().position("date*rzrqce").color("#30AAEC").size(1);
        else {
          r.line().position("date*rqye").color("#ff891e").size(1),
            r
              .line()
              .position("date*rzye")
              .color(this.themeColor.bigBlue)
              .size(1),
            r
              .guide()
              .point({
                position: [l.date, l.rqye || 0],
                style: { fill: "#FF891E", stroke: "#FF891E", lineWidth: 0 },
              });
          var g = this.themeColor;
          r.point()
            .position("date*rzye")
            .size("date", function (t) {
              return t === l.date ? 3 : 0;
            })
            .style({ fill: g.bigBlue, stroke: "#fff", lineWidth: 0 });
        }
        var f = this;
        return (
          r.tooltip({
            custom: !0,
            showTooltipMarker: !1,
            showCrosshairs: !0,
            triggerOn: ["touchstart", "touchmove"],
            triggerOff: "touchend",
            crosshairsType: "xy",
            crosshairsStyle: { stroke: this.themeColor.bigBlue, lineWidth: 1 },
            onChange: function (t) {
              var e;
              if (null == (e = t.items) ? void 0 : e[0].origin) {
                var r = t.items[0].origin,
                  o = r.date,
                  a = r.rzye,
                  s = r.rqye,
                  h = r.rzjmr,
                  l = r.rzrqce;
                f.MarginTooltip = {
                  rzye: i.bigNumberToTextForFinance(a, 2, "", "", !1),
                  rqye: i.bigNumberToTextForFinance(s, 2, "", "", !1),
                  rzjmr: i.bigNumberToTextForFinance(h, 2),
                  rzrqce: i.bigNumberToTextForFinance(l, 2),
                  date: o,
                  isShow: !0,
                  position: t.x > n.width / 2 ? "left" : "right",
                  coords: { x: t.x, y: t.y },
                };
              } else f.MarginTooltip.isShow = !1;
            },
            onHide: function () {
              f.MarginTooltip.isShow = !1;
            },
          }),
          this.setChartBorder(r),
          r.render(),
          (this.MarginLineChart = r),
          this.showDifference || this.addMarginLineLastPointTip(l),
          r
        );
      },
      getPointsInfo: function (t) {
        var e = [],
          r = t.rqye || 0,
          n = this.MarginLineChart.getPosition({ date: t.date, rqye: r }),
          o = {
            fill: "#FF891E",
            value: r,
            textValue: i.bigNumberToTextForFinance(r, 1, "", "", !1),
          };
        Object.assign(n, o);
        var a = this.MarginLineChart.getPosition({
            date: t.date,
            rzye: t.rzye,
          }),
          s = {
            fill: this.themeColor.bigBlue || "#3077EC",
            value: t.rzye,
            textValue: i.bigNumberToTextForFinance(t.rzye, 1, "", "", !1),
          };
        return Object.assign(a, s), e.push(n, a), e;
      },
      addMarginLineLastPointTip: function (t) {
        var e = this,
          i = this.MarginLineChart.get("canvas"),
          n = this.MarginLineChart.get("height"),
          o = this.getPointsInfo(t),
          a = Math.min(o[0].y, o[1].y),
          s = o[0].y === o[1].y;
        o.forEach(function (t, o) {
          var h = t.y,
            l = t.y;
          h === a
            ? l <= 30
              ? (l += 10)
              : (l -= 10)
            : (l += n - l <= 30 ? 8 : 10),
            s && o && (l = t.y + 10),
            (t.y = l);
          var g = "west" === e.fontSkin ? "stockFont" : "";
          r.createTag(i, t, g, e.themeColor.bgColor);
        }),
          i.draw();
      },
      setChartBorder: function (t) {
        var e = this;
        [
          [
            ["min", "max"],
            ["max", "max"],
          ],
          [
            ["min", "min"],
            ["min", "max"],
          ],
          [
            ["max", "min"],
            ["max", "max"],
          ],
        ].map(function (i) {
          t.guide().line({
            start: i[0],
            end: i[1],
            top: !1,
            style: { stroke: e.themeColor.borderLight, lineWidth: 0.5 },
          });
        });
      },
    },
  };
Array || e.resolveComponent("f2")();
var h = e._export_sfc(s, [
  [
    "render",
    function (t, i, r, n, o, a) {
      return e.e(
        { a: o.showMarginCard },
        o.showMarginCard
          ? e.e(
              {
                b: e.o(function (t) {
                  return a.gotoTeachPage("融资融券");
                }, 2919),
                c: e.t(o.updateDate),
                d: r.showPlateRadio && r.data.summary && r.data.summary.s0,
              },
              r.showPlateRadio && r.data.summary && r.data.summary.s0
                ? { e: e.t(r.data.summary.s0) }
                : {},
              { f: o.showDifference },
              (o.showDifference, {}),
              { g: o.showMarginLineChart },
              o.showMarginLineChart
                ? {
                    h: e.o(a.setMarginLineChart, 2920),
                    i: e.p({
                      chartId: "margin-line-chart",
                      cClass: "margin-line-chart",
                      cStyle: "width: 690rpx; height: 300rpx",
                      refreshHash: o.fmuHash,
                      config: o.marginLineChartConfig,
                    }),
                  }
                : {},
              { j: o.showMarginBarChart },
              o.showMarginBarChart
                ? {
                    k: e.o(a.setMarginBarChart, 2921),
                    l: e.p({
                      chartId: "margin-bar-chart",
                      cClass: "margin-bar-chart",
                      cStyle: "width: 690rpx; height: 100rpx",
                      refreshHash: o.marginHash,
                      config: o.marginBarChartConfig,
                    }),
                  }
                : {},
              {
                m: e.t(o.MarginTooltip.date),
                n: e.t(o.MarginTooltip.rzye),
                o: e.t(o.MarginTooltip.rqye || 0),
                p: e.t(o.MarginTooltip.rzjmr),
                q: a.getColor(o.MarginTooltip.rzjmr),
                r: o.showDifference,
              },
              o.showDifference
                ? {
                    s: e.t(o.MarginTooltip.rzrqce),
                    t: a.getColor(o.MarginTooltip.rzrqce),
                  }
                : {},
              {
                v: o.MarginTooltip.isShow && o.MarginTooltip.date,
                w: e.n(o.MarginTooltip.position),
                x: o.showDifference ? 1 : "",
                y: e.n(o.showDifference ? "radio-checked" : ""),
                z: e.o(function () {
                  return a.toggleRadio && a.toggleRadio.apply(a, arguments);
                }, 2922),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-704b4a1b"],
]);
wx.createComponent(h);
