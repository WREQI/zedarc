var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../common/vendor.js"),
  o = {
    props: ["type", "data"],
    inject: ["themeColor", "fontSkin"],
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        chart: [],
        unit: {
          none_profit_list: { text: "元", value: 1 },
          profit_list: { text: "元", value: 1 },
        },
        noneProfitChartShow: !1,
        profitChartShow: !1,
        noneProfitChartHash: "",
        profitChartHash: "",
        chartConfig: { padding: [13, 1, 18, 1] },
      };
    },
    activated: function () {
      (this.noneProfitChartHash = Math.random()),
        (this.profitChartHash = Math.random());
    },
    created: function () {
      this.calcM("none_profit_list"),
        this.calcM("profit_list"),
        e.StockBridge.busOn("market-detail-act-fold", this.handleActFold);
    },
    destroyed: function () {
      e.StockBridge.busOff("market-detail-act-fold", this.handleActFold),
        this.destoryChart();
    },
    methods: {
      handleActFold: function (t) {
        var e = t[this.type];
        (e || Object.prototype.hasOwnProperty.call(t, "foldedAll")) &&
          ((e && e.folded) ||
            t.foldedAll ||
            (this.noneProfitChartShow || (this.noneProfitChartShow = !0),
            this.profitChartShow || (this.profitChartShow = !0)));
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      initNoneProfitChart: function (t) {
        this.createChart(t.chart, t.config, this.data.none_profit_list, 0);
      },
      initProfitChart: function (t) {
        this.createChart(t.chart, t.config, this.data.profit_list, 1);
      },
      destoryChart: function (t) {
        try {
          t || 0 === t
            ? (this.chart[t] && this.chart[t].destroy(),
              (this.noneProfitChartShow = !1))
            : (this.chart.map(function (t) {
                t && t.destroy();
              }),
              (this.chart = []),
              (this.noneProfitChartShow = !1),
              (this.profitChartShow = !1));
        } catch (t) {}
      },
      setGoTeach: function () {
        var t = this.data.tag,
          o = t.module,
          i = t.tag_name_eng,
          r =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(o, "&pos=")
              .concat(i);
        e.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: i,
          tab: o,
        }),
          e.StockBridge.openExtraWebview(r);
      },
      calcM: function (t) {
        if (this.data[t] && this.data[t].length) {
          var e = this.data[t].reduce(function (t, e) {
            return Math.abs(t.value) > Math.abs(e.value) ? t : e;
          }).value;
          Number(e) > 1e8 || Number(e) < -1e8
            ? (this.unit[t] = { text: "亿元", value: 1e8 })
            : Number(e) > 1e4 || Number(e) < -1e4
            ? (this.unit[t] = { text: "万元", value: 1e4 })
            : (this.unit[t] = { text: "元", value: 1 });
        }
      },
      createChart: function (e, o, i, r) {
        var a = this;
        if (!i || i.length < 1) this.destoryChart(r);
        else {
          this.chart[r] = e;
          var n = this.chart[r],
            h = i.map(function (t) {
              return (
                (t.ratio = parseFloat(t.ratio)),
                (t.value = parseFloat(+t.value)),
                t
              );
            });
          n.source(h, {
            time: { range: [0.15, 0.9] },
            value: { tickCount: 4 },
            ratio: {
              tickCount: 4,
              min: Math.min.apply(
                Math,
                t(
                  h.map(function (t) {
                    return t.ratio;
                  })
                )
              ),
            },
          }),
            n.legend(!1).tooltip(!1),
            n.animate(!1),
            n.axis("time", {
              labelOffset: 5,
              label: function (t) {
                return {
                  fill: a.themeColor.lightGray2,
                  fontSize: 10,
                  text: t,
                  fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                };
              },
              line: { stroke: this.themeColor.borderLight },
            });
          var s =
            0 === r
              ? this.unit.none_profit_list.value
              : this.unit.profit_list.value;
          h.forEach(function (t) {
            a.chart.forEach(function (e) {
              e.guide().text({
                position: [t.time, t.value],
                content: parseFloat(t.value / s).toFixed(2),
                style: {
                  fill: a.themeColor.primary,
                  fontWeight: "500",
                  fontSize: 11,
                  textAlign: "center",
                  textBaseline: "top",
                  fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                },
                offsetY: t.value >= 0 ? -13 : 0,
              });
            });
          }),
            this.setChartBorder(),
            n
              .interval()
              .position("time*value")
              .size(24)
              .color(this.themeColor.primary),
            n
              .line()
              .position("time*ratio")
              .size(2)
              .color(this.themeColor.orange),
            n
              .point()
              .position("time*ratio")
              .size(2)
              .style({
                fill: this.themeColor.orange,
                stroke: this.themeColor.orange,
                lineWidth: 2,
              }),
            n.axis("ratio", {
              line: !1,
              labelOffset: -(n.get("width") - 4),
              grid: function (t, e, o) {
                return {
                  lineWidth: 0 === e || e === o - 1 ? 0 : 0.5,
                  stroke: a.themeColor.borderLight,
                  lineDash: [],
                };
              },
              label: function (t, e, o) {
                var i = n.get("geoms")[2]._attrs.scales.ratio,
                  r = i.ticks.length === i.values.length ? o : i.tickCount;
                if (e < r) {
                  var h = {
                    fill: a.themeColor.lightGray2,
                    fontSize: 10,
                    text: "".concat(0 === t ? 0 : Number(t).toFixed(2), "%"),
                    textAlign: "start",
                    top: !0,
                    fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                  };
                  return (
                    0 === e
                      ? (h.textBaseline = "bottom")
                      : e === r - 1 && (h.textBaseline = "top"),
                    h
                  );
                }
              },
            }),
            n.axis("value", !1),
            n.render();
        }
      },
      setChartBorder: function () {
        var t = this;
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
        ].map(function (e) {
          t.chart.forEach(function (o) {
            o.guide().line({
              start: e[0],
              end: e[1],
              top: !1,
              style: { stroke: t.themeColor.borderLight, lineWidth: 0.5 },
            });
          });
        });
      },
    },
  };
Array || e.resolveComponent("f2")();
var i = e._export_sfc(o, [
  [
    "render",
    function (t, o, i, r, a, n) {
      return e.e(
        { a: i.data.none_profit_comment },
        i.data.none_profit_comment
          ? e.e(
              { b: i.data.none_profit_comment },
              i.data.none_profit_comment
                ? {
                    c: e.t(i.data.none_profit_comment),
                    d: e.o(function () {
                      return n.setGoTeach && n.setGoTeach.apply(n, arguments);
                    }, 3749),
                  }
                : {}
            )
          : {},
        { e: i.data.none_profit_list.length > 0 },
        i.data.none_profit_list.length > 0
          ? e.e(
              {
                f: e.t(a.unit.none_profit_list.text),
                g: a.noneProfitChartShow,
              },
              a.noneProfitChartShow
                ? {
                    h: e.o(n.initNoneProfitChart, 3750),
                    i: e.p({
                      chartId: "noneProfitChart",
                      cClass: "noneProfitChart",
                      cStyle: "width: 100%;height: 348rpx;",
                      config: a.chartConfig,
                      refreshHash: a.noneProfitChartHash,
                    }),
                  }
                : {}
            )
          : {},
        { j: i.data.profit_comment },
        i.data.profit_comment
          ? e.e(
              { k: i.data.profit_comment },
              i.data.profit_comment
                ? {
                    l: e.t(i.data.profit_comment),
                    m: e.o(function () {
                      return n.setGoTeach && n.setGoTeach.apply(n, arguments);
                    }, 3751),
                  }
                : {}
            )
          : {},
        { n: i.data.profit_list.length > 0 },
        i.data.profit_list.length > 0
          ? e.e(
              { o: e.t(a.unit.profit_list.text), p: a.profitChartShow },
              a.profitChartShow
                ? {
                    q: e.o(n.initProfitChart, 3752),
                    r: e.p({
                      chartId: "profitChart",
                      cClass: "profitChart",
                      cStyle: "width: 100%;height: 348rpx;",
                      config: a.chartConfig,
                      refreshHash: a.profitChartHash,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-54c17f45"],
]);
wx.createComponent(i);
