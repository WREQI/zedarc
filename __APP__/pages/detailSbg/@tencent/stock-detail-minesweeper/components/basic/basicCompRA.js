var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../common/vendor.js"),
  a = {
    props: ["type", "data"],
    inject: ["themeColor", "fontSkin"],
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        chartShow: !1,
        chartHash: "",
        chartConfig: { padding: [13, 1, 18, 1] },
      };
    },
    activated: function () {
      this.chartHash = Math.random();
    },
    created: function () {
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
      calcM: function (t) {
        var e = Math.abs(t) > 1e6 ? 2 : 4;
        return parseFloat(t / 1e8).toFixed(e);
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      createChart: function (e) {
        var a = this,
          o = e.chart;
        e.config;
        if (!this.data.list || this.data.list.length < 1) this.destoryChart();
        else {
          this.chart = o;
          var i = [];
          this.data.list.map(function (t) {
            return (
              (t.ratio = parseFloat(t.acc_income_ratio)),
              (t.account = parseFloat(+t.account)),
              (t.total = parseFloat(+t.total_income)),
              i.push(
                {
                  name: "account",
                  ratio: t.ratio,
                  account: t.account,
                  time: t.time,
                },
                {
                  name: "total",
                  ratio: t.ratio,
                  account: t.total,
                  time: t.time,
                }
              ),
              t
            );
          }),
            this.chart.source(i, {
              time: { range: [0.17, 0.88] },
              account: { tickCount: 4 },
              ratio: {
                tickCount: 4,
                min: Math.min.apply(
                  Math,
                  t(
                    i.map(function (t) {
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
                  fill: a.themeColor.lightGray2,
                  fontSize: 10,
                  text: t,
                  fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                };
              },
              line: { stroke: this.themeColor.borderLight },
            }),
            i.forEach(function (t) {
              var e = a.calcM(t.account),
                o = e.length - e.length / 2;
              a.chart
                .guide()
                .text({
                  position: [t.time, t.account],
                  content: 0 === Math.abs(e) ? "0  " : e,
                  style: {
                    fill:
                      "account" === t.name ? a.themeColor.primary : "#87B4FF",
                    fontWeight: "500",
                    fontSize: 11,
                    textAlign: "account" === t.name ? "right" : "left",
                    textBaseline: "top",
                    fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                  },
                  offsetY: -14,
                  offsetX:
                    "account" === t.name
                      ? o - (e.length > 5 ? 0 : e.length)
                      : -o - (e.length > 5 ? e.length : -2),
                });
            }),
            this.setChartBorder(),
            this.chart
              .interval()
              .position("time*account")
              .color("name", function (t) {
                return "account" === t ? a.themeColor.primary : "#87B4FF";
              })
              .adjust({ type: "dodge", marginRatio: 0.4 }),
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
                  stroke: a.themeColor.borderLight,
                  lineDash: [],
                };
              },
              label: function (t, e, o) {
                var i = a.chart.get("geoms")[2]._attrs.scales.ratio,
                  r = i.ticks.length === i.values.length ? o : i.tickCount;
                if (e < r) {
                  var n = {
                    fill: a.themeColor.lightGray2,
                    fontSize: 10,
                    text: "".concat(t, "%"),
                    textAlign: "start",
                    top: !0,
                    fontFamily: "west" === a.fontSkin ? "stockFont" : "",
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
            this.chart.axis("account", !1),
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
var o = e._export_sfc(a, [
  [
    "render",
    function (t, a, o, i, r, n) {
      return e.e(
        { a: o.data.list.length > 0 },
        o.data.list.length > 0
          ? e.e(
              { b: r.chartShow },
              r.chartShow
                ? {
                    c: e.o(n.createChart, 3753),
                    d: e.p({
                      chartId: o.type,
                      cClass: "basicCompRA",
                      cStyle: "width: 100%;height: 348rpx;",
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
  ["__scopeId", "data-v-9a56db37"],
]);
wx.createComponent(o);
