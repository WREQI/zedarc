var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: ["themeColor", "skin", "fontSkin"],
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    props: { data: Object, type: String },
    data: function () {
      return {
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
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      createChart: function (t) {
        var e = t.chart,
          i = (t.config, this.data.list);
        if (0 !== i.length) {
          var o = [];
          i.forEach(function (t) {
            o.push({ value: t.y1 || "0", type: "y1", date: t.time }),
              o.push({ value: t.y2 || "0", type: "y2", date: t.time });
          }),
            e.source(o),
            e.scale("date", { type: "timeCat", tickCount: 2, range: [0, 1] }),
            e.scale("value", {
              tickCount: 4,
              type: "linear",
              formatter: function (t) {
                return "".concat((t = Number(t.toFixed(5))));
              },
            }),
            e.tooltip(!1).legend(!1),
            e.animate(!1),
            this.drawLineLineChart(e),
            this.setChartBorder(e),
            this.addLastPointTip(e),
            e.render(),
            (this.chart = e);
        } else this.destoryChart();
      },
      drawLineLineChart: function (t) {
        var e = this;
        t.axis("value", {
          labelOffset: -4,
          position: "left",
          label: function (t, i, o) {
            var a = {
              fill: e.themeColor.lightGray2,
              fontSize: 10,
              text: t,
              textAlign: "left",
              fontFamily: "west" === e.fontSkin ? "stockFont" : "",
            };
            return (
              0 === i
                ? (a.textBaseline = "bottom")
                : i === o - 1 && (a.textBaseline = "top"),
              a
            );
          },
          grid: function (t, i, o) {
            return {
              lineWidth: 0 === i || i === o - 1 ? 0 : 0.5,
              stroke: e.themeColor.borderLight,
              lineDash: [],
            };
          },
        }),
          t.axis("date", {
            labelOffset: 13,
            line: null,
            label: function (t, i, o) {
              var a = {
                fill: e.themeColor.lightGray2,
                fontSize: 10,
                text: t,
                textAlign: "start",
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              };
              return (
                0 === i
                  ? (a.textAlign = "start")
                  : i === o - 1 && (a.textAlign = "end"),
                a
              );
            },
          }),
          t
            .line({ connectNulls: !0 })
            .style({ lineWidth: 1, lineDash: null })
            .position("date*value")
            .color("type", function (t) {
              return "y1" === t ? e.themeColor.orange : e.themeColor.primary;
            });
        var i = this.data.list[this.data.list.length - 1];
        t
          .guide()
          .point({
            position: [i.time, i.y1],
            style: {
              fill: this.themeColor.orange,
              stroke: this.themeColor.orange,
              lineWidth: 0,
            },
          }),
          t
            .guide()
            .point({
              position: [i.time, i.y2],
              style: {
                fill: this.themeColor.primary,
                stroke: this.themeColor.primary,
                lineWidth: 0,
              },
            });
      },
      setChartBorder: function (t) {
        var e = this;
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
        ].map(function (i) {
          t.guide().line({
            start: i[0],
            end: i[1],
            top: !1,
            style: { stroke: e.themeColor.borderLight, lineWidth: 0.5 },
          });
        });
      },
      getPointsInfo: function () {
        var t = this.data.list[this.data.list.length - 1],
          e = [],
          i = this.chart.getPosition({ date: t.time, value: t.y1, type: "y1" }),
          o = {
            fill: this.themeColor.orange,
            type: "y1",
            value: t.y1,
            textValue: (+t.y1).toFixed(2),
          };
        Object.assign(i, o);
        var a = this.chart.getPosition({
            date: t.time,
            value: t.y2,
            type: "y2",
          }),
          n = {
            fill: this.themeColor.primary,
            type: "y2",
            value: t.y2,
            textValue: (+t.y2).toFixed(2),
          };
        return Object.assign(a, n), e.push(i, a), e;
      },
      findValidItem: function (t) {
        for (var e = this.data.list.length - 1; e >= 0; e--) {
          var i = this.data.list[e];
          if (void 0 !== i[t]) return i;
        }
      },
      addLastPointTip: function (e) {
        var i = this.findValidItem("y1"),
          o = this.findValidItem("y2"),
          a = 18,
          n = 18;
        if (i && o) {
          var r = i.y1,
            l = o.y2;
          Math.abs(r - l) <= 8 && (r >= l ? (a = -5) : (n = -5));
        }
        if (i) {
          var s = i.y1;
          0 == +(+s).toFixed(2) && (a = -5),
            e
              .guide()
              .tag({
                top: !0,
                position: [i.time, s],
                content: "".concat((+s).toFixed(2)),
                limitInPlot: !0,
                direct: "tl",
                side: 0,
                offsetY: a,
                background: {
                  padding: [2, 3],
                  radius: 2,
                  fill:
                    "mp" !== t.StockBridge.ENV
                      ? this.getCSSVar("--fill-content-layer")
                      : this.themeColor.defaultStroke,
                  lineWidth: 1,
                  stroke: this.themeColor.orange,
                  strokeOpacity: 0.6,
                },
                textStyle: {
                  fontSize: 10,
                  fill: this.themeColor.orange,
                  fontFamily: "west" === this.fontSkin ? "stockFont" : "",
                },
                withPoint: !0,
                pointStyle: {
                  fill: this.themeColor.orange,
                  r: 2.5,
                  lineWidth: 1,
                  stroke: this.themeColor.orange,
                },
              });
        }
        o &&
          (0 == +(+o.y2).toFixed(2) && (n = -5),
          e
            .guide()
            .tag({
              top: !0,
              position: [o.time, o.y2],
              content: "".concat((+o.y2).toFixed(2)),
              limitInPlot: !0,
              direct: "tl",
              side: 0,
              offsetY: n,
              background: {
                padding: [2, 3],
                radius: 2,
                fill:
                  "mp" !== t.StockBridge.ENV
                    ? this.getCSSVar("--fill-content-layer")
                    : this.themeColor.defaultStroke,
                lineWidth: 1,
                stroke: this.themeColor.primary,
                strokeOpacity: 0.6,
              },
              textStyle: {
                fontSize: 10,
                fill: this.themeColor.primary,
                fontFamily: "west" === this.fontSkin ? "stockFont" : "",
              },
              withPoint: !0,
              pointStyle: {
                fill: this.themeColor.primary,
                r: 2.5,
                lineWidth: 1,
                stroke: this.themeColor.primary,
              },
            }));
      },
    },
  };
Array || t.resolveComponent("f2")();
var i = t._export_sfc(e, [
  [
    "render",
    function (e, i, o, a, n, r) {
      return t.e(
        { a: o.data && o.data.list && o.data.list.length },
        o.data && o.data.list && o.data.list.length
          ? t.e(
              {
                b: t.f(o.data.legend, function (e, i, o) {
                  return {
                    a: i + "color",
                    b: e.style,
                    c: t.t(e.name),
                    d: i + "name",
                    e: i,
                  };
                }),
                c: n.chartShow,
              },
              n.chartShow
                ? {
                    d: t.o(r.createChart, 3757),
                    e: t.p({
                      chartId: "basicCompES",
                      cClass: "basicCompES",
                      cStyle: "width: 100%;height: 350rpx;",
                      config: n.chartConfig,
                      refreshHash: n.chartHash,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5e4d18b4"],
]);
wx.createComponent(i);
