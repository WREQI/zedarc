var t = require("../../../../../../common/vendor.js"),
  e = {
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
        chartConfig: { padding: [15, 5, 26, 1] },
      };
    },
    activated: function () {
      this.chartHash = Math.random();
    },
    computed: {
      legend: function () {
        return [
          {
            style: this.themeColor.bigRed,
            name: "盈利 (".concat(this.unit.text, ")"),
          },
          {
            style: this.themeColor.bigGreen,
            name: "亏损 (".concat(this.unit.text, ")"),
          },
        ];
      },
    },
    created: function () {
      this.calcM(),
        t.StockBridge.busOn("market-detail-act-fold", this.handleActFold);
    },
    destroyed: function () {
      t.StockBridge.busOff("market-detail-act-fold", this.handleActFold),
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
      drawIntervalLineChart: function (t) {
        var e = this;
        this.chart.axis("x", {
          labelOffset: 13,
          label: function (t) {
            return {
              fill: e.themeColor.lightGray2,
              fontSize: 10,
              text: t,
              fontFamily: "west" === e.fontSkin ? "stockFont" : "",
            };
          },
          line: { stroke: this.themeColor.borderLight },
        }),
          this.chart.axis("y1", {
            line: !1,
            labelOffset: -1,
            position: "left",
            grid: function (t, a, i) {
              return {
                lineWidth: 0 === a || a === i - 1 ? 0 : 0.5,
                stroke: e.themeColor.borderLight,
                lineDash: [],
              };
            },
            label: null,
          }),
          t.forEach(function (t) {
            e.chart
              .guide()
              .text({
                position: [t.x, t.y1],
                content: parseFloat(t.y1 / e.unit.value).toFixed(2),
                style: {
                  textBaseline: "bottom",
                  textAlign: "center",
                  fill: e.legend[t.y1 >= 0 ? 0 : 1].style,
                  fontWeight: "500",
                  fontSize: 11,
                  fontFamily: "west" === e.fontSkin ? "stockFont" : "",
                },
                offsetY: t.y1 >= 0 ? -2 : 15,
              });
          }),
          this.chart
            .interval()
            .position("x*y1")
            .size(24)
            .color("y1", function (t) {
              return e.legend[t >= 0 ? 0 : 1].style;
            });
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      createChart: function (t) {
        var e = t.chart;
        t.config;
        if (((this.chart = e), !this.data.list || this.data.list.length < 1))
          this.destoryChart();
        else {
          var a = this.data.list.map(function (t) {
            return {
              x: t.time.replace(/^\d{4}(\d{2})(\d{2})/, "$1-$2"),
              y1: +t.value,
            };
          });
          this.chart.source(a, {
            y1: { tickCount: 4 },
            x: { tickCount: a.length > 5 ? 2 : a.length, range: [0.17, 0.9] },
          }),
            this.chart.tooltip(!1),
            this.chart.legend(!1),
            this.chart.animate(!1),
            this.setChartBorder(),
            a && a.length && this.drawIntervalLineChart(a),
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
      formateNum: function (t, e, a) {
        return (
          (e = e || 2),
          isNaN(t) || a
            ? isNaN(t) || (t / a).toFixed(e)
            : (t > 0 ? "+" : "") + parseFloat(t / 1e4).toFixed(2)
        );
      },
    },
  };
Array || t.resolveComponent("f2")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, i, n, r, o) {
      return t.e(
        { a: i.data.list.length > 0 },
        i.data.list.length > 0
          ? t.e(
              {
                b: t.f(o.legend, function (e, a, i) {
                  return {
                    a: a + "color",
                    b: e.style,
                    c: t.t(e.name),
                    d: a + "name",
                    e: a,
                  };
                }),
                c: r.chartShow,
              },
              r.chartShow
                ? {
                    d: t.o(o.createChart, 3744),
                    e: t.p({
                      "chart-id": "finPC",
                      "c-class": "basicCompPC",
                      cStyle: "width: 100%;height: 350rpx;",
                      "disable-touch-move": !0,
                      config: r.chartConfig,
                      "refresh-hash": r.chartHash,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7ec521ee"],
]);
wx.createComponent(a);
