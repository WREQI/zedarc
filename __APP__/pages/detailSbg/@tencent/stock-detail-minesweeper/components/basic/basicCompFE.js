var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../common/vendor.js"),
  i = {
    props: ["type", "data"],
    inject: ["themeColor", "fontSkin"],
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        unit: { text: "元", value: 1 },
        chartShow: !1,
        chartHash: "",
        chartConfig: { padding: [13, 1, 18, 1] },
      };
    },
    activated: function () {
      this.chartHash = Math.random();
    },
    created: function () {
      this.calcM(),
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
            this.chartShow ||
            (this.chartShow = !0));
      },
      destoryChart: function () {
        try {
          this.chart && this.chart.destroy(),
            (this.chart = null),
            (this.chartShow = !1);
        } catch (t) {}
      },
      calcM: function () {
        if (this.data.list && this.data.list.length) {
          var t = this.data.list.reduce(function (t, e) {
            return Math.abs(t.value) > Math.abs(e.value) ? t : e;
          }).value;
          Number(t) > 1e8 || Number(t) < -1e8
            ? (this.unit = { text: "亿元", value: 1e8 })
            : Number(t) > 1e4 || Number(t) < -1e4
            ? (this.unit = { text: "万元", value: 1e4 })
            : (this.unit = { text: "元", value: 1 });
        }
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      createChart: function (e) {
        var i = this,
          a = e.chart;
        e.config;
        if (!this.data.list || this.data.list.length < 1) this.destoryChart();
        else {
          this.chart = a;
          var r = this.data.list.map(function (t) {
            return (
              (t.ratio = parseFloat(t.ratio)),
              (t.value = parseFloat(+t.value)),
              t
            );
          });
          this.chart.source(r, {
            time: { range: [0.17, 0.9] },
            value: { tickCount: 4, range: [0.1, 0.9] },
            ratio: {
              tickCount: 4,
              min: Math.min.apply(
                Math,
                t(
                  r.map(function (t) {
                    return t.ratio;
                  })
                )
              ),
            },
          }),
            this.chart.legend(!1).tooltip(!1),
            this.chart.animate(!1),
            this.chart.axis("time", {
              labelOffset: 5,
              label: function (t) {
                return {
                  fill: i.themeColor.lightGray2,
                  fontSize: 10,
                  text: t,
                  fontFamily: "west" === i.fontSkin ? "stockFont" : "",
                };
              },
              line: { stroke: this.themeColor.borderLight },
            }),
            r.forEach(function (t) {
              i.chart
                .guide()
                .text({
                  position: [t.time, t.value],
                  content: parseFloat(t.value / i.unit.value).toFixed(2),
                  style: {
                    fill: i.themeColor.primary,
                    fontWeight: "500",
                    fontSize: 11,
                    textAlign: "center",
                    textBaseline: "top",
                    fontFamily: "west" === i.fontSkin ? "stockFont" : "",
                  },
                  offsetY: t.value >= 0 ? -13 : 0,
                });
            }),
            this.setChartBorder(),
            this.chart
              .interval()
              .position("time*value")
              .size(24)
              .color(this.themeColor.primary),
            this.chart
              .line()
              .position("time*ratio")
              .size(2)
              .color(this.themeColor.orange),
            this.chart
              .point()
              .position("time*ratio")
              .size(2)
              .style({
                fill: this.themeColor.orange,
                stroke: this.themeColor.orange,
                lineWidth: 2,
              }),
            this.chart.axis("ratio", {
              line: !1,
              labelOffset: -(this.chart.get("width") - 4),
              grid: function (t, e, a) {
                return {
                  lineWidth: 0 === e || e === a - 1 ? 0 : 0.5,
                  stroke: i.themeColor.borderLight,
                  lineDash: [],
                };
              },
              label: function (t, e, a) {
                var r = i.chart.get("geoms")[2]._attrs.scales.ratio,
                  o = r.ticks.length === r.values.length ? a : r.tickCount;
                if (e < o) {
                  var n = {
                    fill: i.themeColor.lightGray2,
                    fontSize: 10,
                    text: "".concat(0 === t ? 0 : Number(t).toFixed(2), "%"),
                    textAlign: "start",
                    top: !0,
                    fontFamily: "west" === i.fontSkin ? "stockFont" : "",
                  };
                  return (
                    0 === e
                      ? (n.textBaseline = "bottom")
                      : e === o - 1 && (n.textBaseline = "top"),
                    n
                  );
                }
              },
            }),
            this.chart.axis("value", !1),
            this.chart.render();
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
          t.chart
            .guide()
            .line({
              start: e[0],
              end: e[1],
              top: !1,
              style: { stroke: t.themeColor.borderLight, lineWidth: 0.5 },
            });
        });
      },
    },
  };
Array || e.resolveComponent("f2")();
var a = e._export_sfc(i, [
  [
    "render",
    function (t, i, a, r, o, n) {
      return e.e(
        { a: a.data.list.length > 0 },
        a.data.list.length > 0
          ? e.e(
              { b: e.t(o.unit.text), c: o.chartShow },
              o.chartShow
                ? {
                    d: e.o(n.createChart, 3743),
                    e: e.p({
                      chartId: a.type,
                      cClass: "basicCompFE",
                      cStyle: "width: 100%;height: 348rpx;",
                      config: o.chartConfig,
                      refreshHash: o.chartHash,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-21c23b20"],
]);
wx.createComponent(a);
