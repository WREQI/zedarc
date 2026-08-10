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
        chartConfig: { animate: !1, padding: [13, 1, 18, 1] },
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
            return Math.abs(t.goodwill) > Math.abs(e.goodwill) ? t : e;
          }).goodwill;
          Number(t) > 1e8 || Number(t) < -1e8
            ? (this.unit = { text: "亿元", value: 1e8 })
            : Number(t) > 1e4 || Number(t) < -1e4
            ? (this.unit = { text: "万元", value: 1e4 })
            : (this.unit = { text: "元", value: 1 });
        }
      },
      createChart: function (e) {
        var i = this,
          o = e.chart;
        e.config;
        if (((this.chart = o), !this.data.list || this.data.list.length < 1))
          this.destoryChart();
        else {
          var a = this.data.list.map(function (t) {
            return (
              (t.ratio = parseFloat(t.ratio)),
              (t.goodwill = parseFloat(+t.goodwill)),
              t
            );
          });
          this.chart.source(a, {
            time: { range: [0.17, 0.9] },
            goodwill: { tickCount: 4 },
            ratio: {
              tickCount: 4,
              min: Math.min.apply(
                Math,
                t(
                  a.map(function (t) {
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
            a.forEach(function (t) {
              i.chart
                .guide()
                .text({
                  position: [t.time, t.goodwill],
                  content: parseFloat(t.goodwill / i.unit.value).toFixed(2),
                  style: {
                    fill: i.themeColor.primary,
                    fontWeight: "500",
                    fontSize: 11,
                    textAlign: "center",
                    textBaseline: "top",
                    fontFamily: "west" === i.fontSkin ? "stockFont" : "",
                  },
                  offsetY: t.goodwill >= 0 ? -13 : 0,
                });
            }),
            this.setChartBorder(),
            this.chart
              .interval()
              .position("time*goodwill")
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
              grid: function (t, e, o) {
                return {
                  lineWidth: 0 === e || e === o - 1 ? 0 : 0.5,
                  stroke: i.themeColor.borderLight,
                  lineDash: [],
                };
              },
              label: function (t, e, o) {
                var a = i.chart.get("geoms")[2]._attrs.scales.ratio,
                  r = a.ticks.length === a.values.length ? o : a.tickCount;
                if (e < r) {
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
                      : e === r - 1 && (n.textBaseline = "top"),
                    n
                  );
                }
              },
            }),
            this.chart.axis("goodwill", !1),
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
var o = e._export_sfc(i, [
  [
    "render",
    function (t, i, o, a, r, n) {
      return e.e(
        { a: o.data.list.length > 0 },
        o.data.list.length > 0
          ? {
              b: e.t(r.unit.text),
              c: e.o(n.createChart, 3742),
              d: e.p({
                "chart-id": "finGW",
                "c-class": "basicCompGW",
                "c-style": "width: 704rpx; height: 288rpx",
                "disable-touch-move": !0,
                config: r.chartConfig,
                "refresh-hash": r.chartHash,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1b7858de"],
]);
wx.createComponent(o);
