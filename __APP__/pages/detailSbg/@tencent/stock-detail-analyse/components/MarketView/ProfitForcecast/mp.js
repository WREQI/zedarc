var t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = function (t, e, o) {
    return new Promise(function (i, r) {
      var n = function (t) {
          try {
            l(o.next(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          try {
            l(o.throw(t));
          } catch (t) {
            r(t);
          }
        },
        l = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(n, a);
        };
      l((o = o.apply(t, e)).next());
    });
  },
  i = require("../../../../stock-hq-core/utils/f2-fit/tool.js"),
  r = require("../../../../stock-hq-core/config/css-token.js"),
  n = require("../../../../../../../common/vendor.js"),
  a = require("../../../util/ChartMixin.js"),
  l = {},
  s = {
    mixins: [a.ChartMixin],
    props: ["skin", "profitForcast"],
    components: {
      f2: function () {
        return "../../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        tooTipInfo: { data: [], left: !1 },
        showTooltip: !1,
        tab: 0,
        chartHash: "",
        showPure: !0,
        showPureRate: !0,
        chartConfig: { padding: [36, 3, 50, 3], animate: !1 },
        scrollOptions: {
          slidingContainerSelector: ".indicators-list-wrapper",
          scrollWrapperSelector: ".indicators-list",
          damping: 0.4,
          enableScrollX: !0,
          enableScrollY: !1,
        },
      };
    },
    created: function () {},
    mounted: function () {
      var t = this.profitForcast || {},
        e = t.net_profit_list,
        o = void 0 === e ? [] : e,
        i = t.history_forcast_list,
        r = void 0 === i ? [] : i;
      o.length <= 0 && ((this.tab = 1), (this.showPure = !1)),
        r.length <= 0 && ((this.showPureRate = !1), (this.tab = 0));
    },
    computed: {
      lastYearReal: function () {
        var t = (this.profitForcast || {}).year_real,
          e = void 0 === t ? [] : t;
        return this.formatIndicatorsData(e);
      },
      indicatorsData: function () {
        var t = (this.profitForcast || {}).year_forcast,
          e = void 0 === t ? [] : t;
        return this.formatIndicatorsData(e);
      },
      pureProfitData: function () {
        var t = this.profitForcast || {},
          e = t.net_profit_list,
          o = t.net_profit_unit,
          i = void 0 === o ? "" : o;
        return { origin: e, deal: this.formatPureProfitData(e, i), unit: i };
      },
      themeColor: function () {
        var t = r.CSSTOKEN[n.isBroker] || r.CSSTOKEN.DEFAULT;
        return {
          borderLight: t.borderLight || "#e9ebf0",
          orange: t.orange || "#ff891e",
          blue: t.bigBlue || "#3077ec",
          lightGray1: t.lightGray1 || "#7a8499",
          lightGray2: t.lightGray2 || "#98a0b3",
        };
      },
    },
    methods: {
      changeTab: function (t) {
        (this.tab = t), (this.chartHash = String(Math.random()));
      },
      drawChart: function (t) {
        0 === this.tab ? this.drawPure(t) : this.drawPerfect(t);
      },
      drawPure: function (t) {
        return o(
          this,
          null,
          e().mark(function o() {
            var r,
              n,
              l,
              s,
              c,
              h = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.chart),
                        (n = this.computeStart(this.pureProfitData.deal)),
                        r.source(this.pureProfitData.deal, {
                          time: { type: "timeCat", mask: "YYYY" },
                          value: { ticks: [n] },
                        }),
                        r.axis("time", {
                          line: {
                            stroke: a.getCSSVariable(
                              "--border-light-divider",
                              "",
                              this.skin
                            ),
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          grid: null,
                          label: { fill: this.themeColor.lightGray2 },
                        }),
                        r.axis("value", { line: null, grid: null }),
                        r.legend({
                          position: "bottom",
                          align: "center",
                          clickable: !1,
                          wordSpace: 10,
                          itemGap: -64,
                          nameStyle: {
                            fill: this.themeColor.lightGray1,
                            fontSize: 11,
                          },
                          marker: function (t, e, o, i) {
                            (i.lineWidth = 2.5),
                              (i.strokeStyle = i.fillStyle),
                              i.moveTo(t - o - 3, e),
                              i.lineTo(t + o + 3, e),
                              i.stroke(),
                              i.fill();
                          },
                        }),
                        (e.next = 4),
                        i.getEleInfo("#perfectChart-container", this)
                      );
                    case 4:
                      (l = e.sent),
                        (s = l.width),
                        (c = s / 2),
                        r.tooltip({
                          custom: !0,
                          showTooltipMarker: !1,
                          showCrosshairs: !0,
                          triggerOn: ["touchstart", "touchmove"],
                          triggerOff: "touchend",
                          crosshairsType: "xy",
                          crosshairsStyle: {
                            stroke: a.getCSSVariable(
                              "--color-heavygray",
                              "",
                              this.skin
                            ),
                            lineWidth: 1,
                          },
                          onChange: function (t) {
                            for (
                              var e = (t || {}).items,
                                o = void 0 === e ? [] : e,
                                i = [
                                  {
                                    name: "年度",
                                    value: o[0].origin && o[0].origin.time,
                                  },
                                ],
                                r = {
                                  "预测值(亿)": "预测值",
                                  "真实值(亿)": "真实值",
                                },
                                n = 0;
                              n < o.length / 2;
                              n++
                            ) {
                              var a = (o[n] || {} || {}).origin,
                                l = void 0 === a ? {} : a;
                              if (r[l.type]) {
                                var s = {
                                  name: r[l.type] || "--",
                                  value: l.value || "--",
                                };
                                i.push(s);
                              }
                            }
                            if (o.length < 4) {
                              i.push({ name: "真实值", value: "--" });
                            }
                            var f = (o[0] && o[0].origin).net_profit_ratio,
                              u = void 0 === f ? 0 : f,
                              p = {
                                name: "超预期程度",
                                value: "" !== u ? "".concat(u, "%") : "--",
                              };
                            i.push(p),
                              (h.tooTipInfo.data = i),
                              (h.tooTipInfo.left = t.x > c),
                              (h.showTooltip = !0);
                          },
                          onHide: function () {
                            h.showTooltip = !1;
                          },
                        }),
                        r
                          .line()
                          .position("time*value")
                          .color("type", [
                            this.themeColor.blue,
                            this.themeColor.orange,
                          ])
                          .size(1)
                          .shape("type", function (t) {
                            return t ===
                              "真实值(".concat(h.pureProfitData.unit, ")")
                              ? "line"
                              : "dash";
                          }),
                        r
                          .point()
                          .position("time*value")
                          .size(3)
                          .style("type", {
                            fill: function (t) {
                              return t ===
                                "真实值(".concat(h.pureProfitData.unit, ")")
                                ? h.themeColor.blue
                                : a.getCSSVariable(
                                    "--fill-content-layer",
                                    "",
                                    h.skin
                                  );
                            },
                            stroke: function (t) {
                              return t ===
                                "真实值(".concat(h.pureProfitData.unit, ")")
                                ? h.themeColor.blue
                                : h.themeColor.orange;
                            },
                            lineWidth: 1,
                          }),
                        this.pureProfitData.origin.forEach(function (t) {
                          t.net_profit &&
                            r
                              .guide()
                              .text({
                                top: !0,
                                position: [t.year, +t.net_profit],
                                content: t.net_profit,
                                style: { fill: h.themeColor.blue },
                                offsetY: +t.net_profit_ratio > 0 ? -15 : 15,
                              }),
                            t.net_profit_forcast &&
                              r
                                .guide()
                                .text({
                                  top: !0,
                                  position: [t.year, +t.net_profit_forcast],
                                  content: t.net_profit_forcast,
                                  style: { fill: h.themeColor.orange },
                                  offsetY: +t.net_profit_ratio <= 0 ? -15 : 15,
                                });
                        }),
                        r.render(),
                        (this.chartObj = r);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      drawPerfect: function (t) {
        return o(
          this,
          null,
          e().mark(function o() {
            var r,
              n,
              l,
              s,
              c,
              h,
              f,
              u,
              p,
              d = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = this.profitForcast || {}),
                        (n = r.history_forcast_list),
                        (l = void 0 === n ? [] : n),
                        (s = this.formatChartData(l)),
                        (c = t.chart).source(s, {
                          time: {
                            tickCount: 2,
                            type: "timeCat",
                            mask: "YYYY-MM-DD",
                            range: [0, 1],
                          },
                          value: {
                            type: "linear",
                            formatter: function (t) {
                              return "".concat((+t).toFixed(2), "%");
                            },
                          },
                          close: {
                            type: "linear",
                            formatter: function (t) {
                              return (+t).toFixed(2);
                            },
                          },
                        }),
                        (e.next = 4),
                        i.getEleInfo("#perfectChart-container", this)
                      );
                    case 4:
                      (h = e.sent),
                        (f = h.width),
                        (u = f / 2),
                        c.tooltip({
                          custom: !0,
                          showTooltipMarker: !1,
                          showCrosshairs: !0,
                          triggerOn: ["touchstart", "touchmove"],
                          triggerOff: "touchend",
                          crosshairsType: "xy",
                          crosshairsStyle: {
                            stroke: a.getCSSVariable(
                              "--color-heavygray",
                              "",
                              this.skin
                            ),
                            lineWidth: 1,
                          },
                          onChange: function (t) {
                            for (
                              var e = (t || {}).items,
                                o = void 0 === e ? [] : e,
                                i = [
                                  {
                                    name: "日期",
                                    value: o[0].origin && o[0].origin.time,
                                  },
                                ],
                                r = {
                                  预测净利润增速: "预测净利润增速-个股",
                                  行业净利润增速: "行业净利润增速-行业",
                                },
                                n = 0;
                              n < 2;
                              n++
                            ) {
                              var a = o[n] || {},
                                l = { name: r[a.name] || "", value: a.value };
                              if ((i.push(l), 1 === n)) {
                                var s = {
                                  name: "收盘价",
                                  value: a.origin && a.origin.close,
                                };
                                i.push(s);
                              }
                            }
                            (d.tooTipInfo.data = i),
                              (d.tooTipInfo.left = t.x > u),
                              (d.showTooltip = !0);
                          },
                          onHide: function () {
                            d.showTooltip = !1;
                          },
                        }),
                        c.axis("close", {
                          position: "left",
                          grid: {
                            stroke: a.getCSSVariable(
                              "--border-light-divider",
                              "",
                              this.skin
                            ),
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          line: {
                            stroke: a.getCSSVariable(
                              "--border-light-divider",
                              "",
                              this.skin
                            ),
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          labelOffset: 0,
                          label: function (t, e, o) {
                            var i = {
                              textAlign: "start",
                              fill: d.themeColor.lightGray2,
                              textBaseline: "bottom",
                            };
                            return (
                              e === o - 1 &&
                                ((i.text = "股价\n".concat(t)),
                                (i.lineHeight = 18)),
                              i
                            );
                          },
                        }),
                        c.axis("value", {
                          position: "right",
                          grid: null,
                          labelOffset: 0,
                          line: {
                            stroke: a.getCSSVariable(
                              "--border-light-divider",
                              "",
                              this.skin
                            ),
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          label: function (t, e, o) {
                            var i = {
                              textAlign: "end",
                              fill: d.themeColor.lightGray2,
                              textBaseline: "bottom",
                            };
                            return (
                              e === o - 1 &&
                                ((i.text = "净利润增速\n".concat(t)),
                                (i.lineHeight = 18)),
                              i
                            );
                          },
                        }),
                        c.axis("time", {
                          grid: function (t, e, o) {
                            if (0 === e || e === o - 1)
                              return {
                                stroke: a.getCSSVariable(
                                  "--border-light-divider",
                                  "",
                                  d.skin
                                ),
                                lineDash: null,
                                lineWidth: 1,
                                strokeOpacity: 0.5,
                              };
                          },
                          line: {
                            stroke: a.getCSSVariable(
                              "--border-light-divider",
                              "",
                              this.skin
                            ),
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          label: function (t, e, o) {
                            var i = {
                              textAlign: "center",
                              fill: d.themeColor.lightGray2,
                            };
                            return (
                              0 === e && (i.textAlign = "start"),
                              e > 0 && e === o - 1 && (i.textAlign = "end"),
                              i
                            );
                          },
                        }),
                        c.legend({
                          custom: !0,
                          position: "bottom",
                          align: "center",
                          wordSpace: 10,
                          nameStyle: {
                            fill: this.themeColor.lightGray1,
                            fontSize: 11,
                          },
                          items: [
                            {
                              name: "预测净利润增速",
                              fill: this.themeColor.blue,
                              marker: function (t, e, o, i) {
                                (i.lineWidth = 2.5),
                                  (i.strokeStyle = i.fillStyle),
                                  i.moveTo(t - o - 3, e),
                                  i.lineTo(t + o + 3, e),
                                  i.stroke(),
                                  i.fill();
                              },
                            },
                            {
                              name: "行业净利润增速",
                              fill: this.themeColor.orange,
                              marker: function (t, e, o, i) {
                                (i.lineWidth = 2.5),
                                  (i.strokeStyle = i.fillStyle),
                                  i.moveTo(t - o - 3, e),
                                  i.lineTo(t + o + 3, e),
                                  i.stroke(),
                                  i.fill();
                              },
                            },
                            {
                              name: "股票收盘价",
                              fill: "#C4C9D4",
                              marker: function (t, e, o, i) {
                                (i.lineWidth = 2.5),
                                  (i.strokeStyle = i.fillStyle),
                                  i.moveTo(t - o - 3, e),
                                  i.lineTo(t + o + 3, e),
                                  i.stroke(),
                                  i.fill();
                              },
                            },
                          ],
                        }),
                        c
                          .line()
                          .position("time*value")
                          .color("type", [
                            this.themeColor.blue,
                            this.themeColor.orange,
                            this.themeColor.lightGray2,
                          ])
                          .size(1),
                        c
                          .line()
                          .position("time*close")
                          .color("type", ["#C4C9D4"])
                          .size(1),
                        (p = {
                          x: l[l.length - 1][0],
                          y1: +l[l.length - 1][2],
                          y2: +l[l.length - 1][3],
                        }),
                        c
                          .guide()
                          .tag({
                            top: !0,
                            position: [p.x, p.y1],
                            content: "".concat(p.y1, "%"),
                            limitInPlot: !0,
                            direct: "tl",
                            side: 0,
                            offsetY: -4,
                            background: {
                              padding: [2, 3],
                              radius: 2,
                              fill: a.getCSSVariable(
                                "--fill-content-layer",
                                "",
                                this.skin
                              ),
                              lineWidth: 1,
                              stroke: this.themeColor.blue,
                              strokeOpacity: 0.6,
                            },
                            textStyle: {
                              fontSize: 10,
                              fill: this.themeColor.blue,
                            },
                            withPoint: !0,
                            pointStyle: {
                              fill: this.themeColor.blue,
                              r: 2.5,
                              lineWidth: 1,
                              stroke: this.themeColor.blue,
                            },
                          }),
                        c
                          .guide()
                          .tag({
                            top: !0,
                            position: [p.x, p.y2],
                            content: "".concat(p.y2, "%"),
                            limitInPlot: !0,
                            direct: "tl",
                            side: 0,
                            offsetY: -4,
                            background: {
                              padding: [2, 3],
                              radius: 2,
                              fill: a.getCSSVariable(
                                "--fill-content-layer",
                                "",
                                this.skin
                              ),
                              lineWidth: 1,
                              stroke: this.themeColor.orange,
                              strokeOpacity: 0.6,
                            },
                            textStyle: {
                              fontSize: 10,
                              fill: this.themeColor.orange,
                            },
                            withPoint: !0,
                            pointStyle: {
                              fill: this.themeColor.orange,
                              r: 2.5,
                              lineWidth: 1,
                              stroke: this.themeColor.orange,
                            },
                          }),
                        c.render(),
                        (this.chartObj = c);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      computeStart: function (t) {
        if (!(t.length <= 0)) {
          var e = 1 / 0,
            o = 0;
          return (
            t.forEach(function (t) {
              +t.value < e && null !== t.value && (e = +t.value),
                +t.value > o && (o = +t.value);
            }),
            parseInt(e - (o - e) / 3, 10)
          );
        }
      },
      formatChartData: function (e) {
        var o = [];
        return (
          e.forEach(function (e) {
            var i = {
                time: e[0] || "",
                value: (+e[2]).toFixed(2) || 0,
                close: (+e[1]).toFixed(2) || 0,
                type: "预测净利润增速",
              },
              r = {
                time: e[0] || "",
                value: (+e[3]).toFixed(2) || 0,
                close: (+e[1]).toFixed(2) || 0,
                type: "行业净利润增速",
              };
            o = [].concat(t(o), [i, r]);
          }),
          o
        );
      },
      formatIndicatorsData: function (t) {
        var e = [];
        return (
          t.forEach(function (t) {
            var o = {
              year: t.year.slice(2, 4) || t.year,
              eps: t.eps,
              income: (Number(t.income) / 1e8).toFixed(2),
              inst_cnt: t.inst_cnt,
              net_profit: (Number(t.net_profit) / 1e8).toFixed(2),
              net_profit_yoy: t.net_profit_yoy,
              income_yoy: t.income_yoy,
            };
            e.push(o);
          }),
          e
        );
      },
      formatPureProfitData: function (e, o) {
        var i = [];
        return (
          e.forEach(function (e) {
            var r = {
                time: e.year,
                value: +e.net_profit || null,
                type: "真实值(".concat(o, ")"),
                net_profit_ratio: e.net_profit_ratio,
              },
              n = {
                time: e.year,
                value: +e.net_profit_forcast || null,
                type: "预测值(".concat(o, ")"),
                net_profit_ratio: e.net_profit_ratio,
              };
            i = [].concat(t(i), [r, n]);
          }),
          i
        );
      },
    },
  };
Array || n.resolveComponent("f2")(), "function" == typeof l && l(s);
var c = n._export_sfc(s, [
  [
    "render",
    function (t, e, o, i, r, a) {
      return n.e(
        { a: o.profitForcast && 1 == o.profitForcast.show_module },
        o.profitForcast && 1 == o.profitForcast.show_module
          ? n.e(
              { b: r.showPure },
              r.showPure
                ? {
                    c: n.n(0 === r.tab && "active"),
                    d: n.o(function (t) {
                      return a.changeTab(0);
                    }, 4054),
                  }
                : {},
              { e: r.showPureRate },
              r.showPureRate
                ? {
                    f: n.n(1 === r.tab && "active"),
                    g: n.o(function (t) {
                      return a.changeTab(1);
                    }, 4055),
                  }
                : {},
              {
                h: n.t(
                  0 === r.tab
                    ? o.profitForcast.net_profit_comment
                    : o.profitForcast.net_profit_ratio_comment
                ),
                i: r.showPure || r.showPureRate,
              },
              r.showPure || r.showPureRate
                ? n.e(
                    {
                      j: n.o(a.drawChart, 4056),
                      k: n.o(t.chartTouchStop, 4057),
                      l: n.o(t.chartTouchStart, 4058),
                      m: n.o(t.chartTouchMove, 4059),
                      n: n.p({
                        chartId: "perfectChart",
                        cClass: "perfect-chart",
                        cStyle: "width: 705rpx; height: 500rpx",
                        refreshHash: r.chartHash,
                        config: r.chartConfig,
                        "disable-touch-move": !0,
                      }),
                      o: r.showTooltip,
                    },
                    r.showTooltip
                      ? {
                          p: n.f(r.tooTipInfo.data, function (t, e, o) {
                            return {
                              a: n.t(t.name),
                              b: n.t(t.value),
                              c: t.name,
                            };
                          }),
                          q: n.n(
                            r.tooTipInfo.left
                              ? "canvas-toolTip-left"
                              : "canvas-toolTip-right"
                          ),
                        }
                      : {}
                  )
                : {},
              {
                r: n.f(a.lastYearReal, function (t, e, o) {
                  return {
                    a: n.t(t.year || "--"),
                    b: n.t(t.eps || "--"),
                    c: n.t(t.net_profit || "--"),
                    d: n.t(
                      t.net_profit_yoy ? "".concat(t.net_profit_yoy, "%") : "--"
                    ),
                    e: n.t(t.income || "--"),
                    f: n.t(t.income_yoy ? "".concat(t.income_yoy, "%") : "--"),
                    g: n.t(t.inst_cnt ? "".concat(t.inst_cnt, "家") : "--"),
                    h: t.year + t.eps,
                  };
                }),
                s: n.f(a.indicatorsData, function (t, e, o) {
                  return {
                    a: n.t(t.year || "--"),
                    b: n.t(t.eps || "--"),
                    c: n.t(t.net_profit || "--"),
                    d: n.t(
                      t.net_profit_yoy ? "".concat(t.net_profit_yoy, "%") : "--"
                    ),
                    e: n.t(t.income || "--"),
                    f: n.t(t.income_yoy ? "".concat(t.income_yoy, "%") : "--"),
                    g: n.t(t.inst_cnt + "家" || "--"),
                    h: t.year,
                  };
                }),
                t: r.scrollOptions,
                v: o.profitForcast.max_con_date,
              },
              o.profitForcast.max_con_date
                ? { w: n.t(o.profitForcast.max_con_date) }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-56bac6f2"],
]);
wx.createComponent(c);
