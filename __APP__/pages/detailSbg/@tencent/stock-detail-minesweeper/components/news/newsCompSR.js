require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: ["themeColor", "skin", "fontSkin"],
    props: { data: Object, type: String },
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        legend: [{ style: this.themeColor.primary, name: "质押比例" }],
        chartShow: !1,
        chartConfig: { animate: !1, padding: [15, 5, 26, 1] },
      };
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
            o.push({ value: t.fr || null, type: "冻结比例", date: t.time }),
              o.push({ value: t.pr || null, type: "质押比例", date: t.time });
          }),
            e.source(o),
            e.scale("date", { type: "timeCat", tickCount: 2, range: [0, 1] });
          var r = [];
          e.scale("value", {
            tickCount: 4,
            type: "linear",
            formatter: function (t) {
              var e = Number(t.toFixed(5));
              return r.includes(e) ? null : (r.push(e), "".concat(e, "%"));
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
      findValidItem: function (t) {
        for (var e = this.data.list.length - 1; e >= 0; e--) {
          var i = this.data.list[e];
          if (i[t]) return i;
        }
      },
      drawLineLineChart: function (t) {
        var e = this;
        t.axis("value", {
          labelOffset: -4,
          position: "left",
          label: function (t, i, o) {
            var r = {
              fill: e.themeColor.lightGray2,
              fontSize: 10,
              text: t,
              textAlign: "left",
              fontFamily: "west" === e.fontSkin ? "stockFont" : "",
            };
            return (
              0 === i
                ? (r.textBaseline = "bottom")
                : i === o - 1 && (r.textBaseline = "top"),
              r
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
              var r = {
                fill: e.themeColor.lightGray2,
                fontSize: 10,
                text: t,
                fontFamily: "west" === e.fontSkin ? "stockFont" : "",
              };
              return (
                0 === i
                  ? (r.textAlign = "start")
                  : i === o - 1 && (r.textAlign = "end"),
                r
              );
            },
          }),
          t
            .line({ connectNulls: !1 })
            .style({ lineWidth: 1, lineDash: null })
            .position("date*value")
            .color("type", function (t) {
              return "冻结比例" === t
                ? e.themeColor.orange
                : e.themeColor.primary;
            });
        var i = this.findValidItem("fr"),
          o = this.findValidItem("pr");
        i &&
          t
            .guide()
            .point({
              position: [i.time, i.fr],
              style: {
                fill: this.themeColor.orange,
                stroke: this.themeColor.orange,
                lineWidth: 0,
              },
            }),
          o &&
            t
              .guide()
              .point({
                position: [o.time, o.pr],
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
        var t = this.findValidItem("fr"),
          e = this.findValidItem("pr"),
          i = [];
        if (t) {
          var o = this.chart.getPosition({
              value: t.fr,
              type: "冻结比例",
              date: t.time,
            }),
            r = {
              type: "fr",
              fill: this.themeColor.borderLight,
              value: t.fr,
              textValue: "".concat((+t.fr).toFixed(2), "%"),
            };
          Object.assign(o, r), i.push(o);
        }
        if (e) {
          var n = this.chart.getPosition({
              value: e.pr,
              type: "质押比例",
              date: e.time,
            }),
            a = {
              type: "pr",
              fill: this.themeColor.primary,
              value: e.pr,
              textValue: "".concat((+e.pr).toFixed(2), "%"),
            };
          Object.assign(n, a), i.push(n);
        }
        return i;
      },
      addLastPointTip: function (e) {
        var i = this.findValidItem("fr"),
          o = this.findValidItem("pr"),
          r = 18,
          n = 18;
        if (i && o) {
          var a = i.fr,
            l = o.pr;
          Math.abs(a - l) <= 8 && (a >= l ? (r = -5) : (n = -5));
        }
        if (i) {
          var s = i.fr;
          0 == +(+s).toFixed(2) && (r = -5),
            e
              .guide()
              .tag({
                top: !0,
                position: [i.time, s],
                content: "".concat((+s).toFixed(2), "%"),
                limitInPlot: !0,
                direct: "tl",
                side: 0,
                offsetY: r,
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
        if (o) {
          var h = o.pr;
          0 == +(+h).toFixed(2) && (n = -5),
            e
              .guide()
              .tag({
                top: !0,
                position: [o.time, h],
                content: "".concat((+h).toFixed(2), "%"),
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
              });
        }
      },
    },
  };
Array || t.resolveComponent("f2")();
var i = t._export_sfc(e, [
  [
    "render",
    function (e, i, o, r, n, a) {
      return t.e(
        { a: o.data && o.data.list && o.data.list.length },
        o.data && o.data.list && o.data.list.length
          ? {
              b: t.f(n.legend, function (e, i, o) {
                return {
                  a: i + "color",
                  b: e.style,
                  c: t.t(e.name),
                  d: i + "name",
                  e: i,
                };
              }),
              c: t.o(a.createChart, 3732),
              d: t.p({
                "chart-id": "compSRCanvas",
                "c-class": "compSRCanvas",
                cStyle: "width: 100%;height: 350rpx;",
                "disable-touch-move": !0,
                config: n.chartConfig,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5e19fb17"],
]);
wx.createComponent(i);
