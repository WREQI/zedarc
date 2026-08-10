var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "financeCompBL",
    inject: ["themeColor", "skin", "fontSkin"],
    props: { data: Object, type: String },
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        legend: [{ style: this.themeColor.primary, name: "不良贷款率（%）" }],
        chartShow: !1,
        chartHash: "",
        chartConfig: { padding: [15, 5, 26, 1], syncY: !0 },
      };
    },
    activated: function () {
      this.chartHash = Math.random();
    },
    created: function () {
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
      createChart: function (t) {
        var e = t.chart,
          a = (t.config, this.data.list);
        if (0 !== a.length) {
          this.chart = e;
          var i = [];
          a.forEach(function (t) {
            t.ratio && i.push({ value: t.ratio, date: t.time });
          }),
            this.chart.source(i),
            this.chart.scale("value", {
              tickCount: 4,
              type: "linear",
              formatter: function (t) {
                return "".concat(t, "%");
              },
            }),
            this.chart.scale("date", { range: [0, 1] }),
            this.chart.tooltip(!1).legend(!1),
            this.chart.animate(!1),
            this.drawLineLineChart(),
            this.setChartBorder(),
            this.chart.render();
        } else this.destoryChart();
      },
      drawLineLineChart: function () {
        var t = this;
        this.chart.axis("value", {
          labelOffset: -4,
          position: "left",
          label: function (e, a, i) {
            var n = {
              fill: t.themeColor.lightGray2,
              fontSize: 10,
              text: e,
              textAlign: "left",
              fontFamily: "west" === t.fontSkin ? "stockFont" : "",
            };
            return (
              0 === a
                ? (n.textBaseline = "bottom")
                : a === i - 1 && (n.textBaseline = "top"),
              n
            );
          },
          grid: function (e, a, i) {
            return {
              lineWidth: 0 === a || a === i - 1 ? 0 : 0.5,
              stroke: t.themeColor.borderLight,
              lineDash: [],
            };
          },
        }),
          this.chart.axis("date", {
            labelOffset: 13,
            line: null,
            label: function (e, a, i) {
              var n = {
                fill: t.themeColor.lightGray2,
                fontSize: 10,
                text: e,
                fontFamily: "west" === t.fontSkin ? "stockFont" : "",
              };
              return (
                0 === a
                  ? (n.textAlign = "left")
                  : a === i - 1 && (n.textAlign = "right"),
                n
              );
            },
          }),
          this.chart
            .line()
            .style({ lineWidth: 1, lineDash: null })
            .position("date*value")
            .color(this.themeColor.primary),
          this.chart
            .point()
            .position("date*value")
            .style({
              stroke: "black" === this.skin ? "#12161f" : "#fff",
              lineWidth: 1,
            });
      },
      setChartBorder: function () {
        var t = this;
        [
          [
            ["min", "min"],
            ["min", "max"],
          ],
          [
            ["max", "min"],
            ["max", "max"],
          ],
          [
            ["min", "max"],
            ["max", "max"],
          ],
          [
            ["min", "min"],
            ["max", "min"],
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
Array || t.resolveComponent("f2")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, i, n, r, o) {
      return t.e(
        { a: i.data && i.data.list && i.data.list.length },
        i.data && i.data.list && i.data.list.length
          ? t.e(
              {
                b: t.f(r.legend, function (e, a, i) {
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
                    d: t.o(o.createChart, 3755),
                    e: t.p({
                      chartId: "compBLCanvas",
                      cClass: "compBLCanvas",
                      cStyle: "width: 100%;height: 350rpx;",
                      config: r.chartConfig,
                      refreshHash: r.chartHash,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-de198df0"],
]);
wx.createComponent(a);
