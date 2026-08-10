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
        chart: [],
        unit: {
          operate_list: { text: "元", value: 1 },
          sale_list: { text: "元", value: 1 },
        },
        operateListChartShow: !1,
        saleListChartShow: !1,
        operateListChartHash: "",
        saleListChartHash: "",
        chartConfig: { padding: [13, 1, 18, 1] },
      };
    },
    activated: function () {
      (this.operateListChartHash = Math.random()),
        (this.saleListChartHash = Math.random());
    },
    created: function () {
      this.calcM("operate_list"),
        this.calcM("sale_list"),
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
            (this.operateListChartShow || (this.operateListChartShow = !0),
            this.saleListChartShow || (this.saleListChartShow = !0)));
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      initOperateListChart: function (t) {
        this.createChart(t.chart, t.config, this.data.operate_list, 0);
      },
      initSaleListChart: function (t) {
        this.createChart(t.chart, t.config, this.data.sale_list, 1);
      },
      destoryChart: function (t) {
        try {
          t || 0 === t
            ? (this.chart[t] && this.chart[t].destroy(),
              (this.operateListChartShow = !1))
            : (this.chart.map(function (t) {
                t && t.destroy();
              }),
              (this.chart = []),
              (this.operateListChartShow = !1),
              (this.saleListChartShow = !1));
        } catch (t) {}
      },
      setGoTeach: function () {
        var t = this.data.tag,
          a = t.module,
          i = t.tag_name_eng,
          o =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(a, "&pos=")
              .concat(i);
        e.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: i,
          tab: a,
        }),
          e.StockBridge.openExtraWebview(o);
      },
      calcM: function (t) {
        if (this.data[t] && this.data[t].length) {
          var e = this.data[t].reduce(function (t, e) {
              return Math.abs(t.net_cash || t.value) >
                Math.abs(e.net_cash || e.value)
                ? t
                : e;
            }),
            a = e.net_cash || e.value;
          Number(a) > 1e8 || Number(a) < -1e8
            ? (this.unit[t] = { text: "亿元", value: 1e8 })
            : Number(a) > 1e4 || Number(a) < -1e4
            ? (this.unit[t] = { text: "万元", value: 1e4 })
            : (this.unit[t] = { text: "元", value: 1 });
        }
      },
      createChart: function (e, a, i, o) {
        var r = this;
        if (!i || i.length < 1) this.destoryChart(o);
        else {
          this.chart[o] = e;
          var s = this.chart[o],
            n = i.map(function (t) {
              return (
                (t.ratio = parseFloat(0 === o ? t.cash_ratio : t.ratio)),
                (t.value = parseFloat(0 === o ? t.net_cash : t.value)),
                t
              );
            });
          s.source(n, {
            time: { range: [0.17, 0.9] },
            value: { tickCount: 4 },
            ratio: {
              tickCount: 4,
              min: Math.min.apply(
                Math,
                t(
                  n.map(function (t) {
                    return t.ratio;
                  })
                )
              ),
            },
          }),
            s.legend(!1).tooltip(!1),
            s.animate(!1),
            s.axis("time", {
              labelOffset: 5,
              label: function (t) {
                return {
                  fill: r.themeColor.lightGray2,
                  fontSize: 10,
                  text: t,
                  fontFamily: "west" === r.fontSkin ? "stockFont" : "",
                };
              },
              line: { stroke: this.themeColor.borderLight },
            });
          var h =
            0 === o ? this.unit.operate_list.value : this.unit.sale_list.value;
          n.forEach(function (t) {
            r.chart.forEach(function (e) {
              e.guide().text({
                position: [t.time, t.value],
                content: parseFloat(t.value / h).toFixed(2),
                style: {
                  fill: r.themeColor.primary,
                  fontWeight: "500",
                  fontSize: 11,
                  textAlign: "center",
                  textBaseline: "top",
                  fontFamily: "west" === r.fontSkin ? "stockFont" : "",
                },
                offsetY: t.value >= 0 ? -13 : 0,
              });
            });
          }),
            this.setChartBorder(),
            s
              .interval()
              .position("time*value")
              .size(24)
              .color(this.themeColor.primary),
            s
              .line()
              .position("time*ratio")
              .size(2)
              .color(this.themeColor.orange),
            s
              .point()
              .position("time*ratio")
              .size(2)
              .style({
                fill: this.themeColor.orange,
                stroke: this.themeColor.orange,
                lineWidth: 2,
              }),
            s.axis("ratio", {
              line: !1,
              labelOffset: -(s.get("width") - 4),
              grid: function (t, e, a) {
                return {
                  lineWidth: 0 === e || e === a - 1 ? 0 : 0.5,
                  stroke: r.themeColor.borderLight,
                  lineDash: [],
                };
              },
              label: function (t, e, a) {
                var i = s.get("geoms")[2]._attrs.scales.ratio,
                  o = i.ticks.length === i.values.length ? a : i.tickCount;
                if (e < o) {
                  var n = {
                    fill: r.themeColor.lightGray2,
                    fontSize: 10,
                    text: "".concat(0 === t ? 0 : Number(t).toFixed(2), "%"),
                    textAlign: "start",
                    top: !0,
                    fontFamily: "west" === r.fontSkin ? "stockFont" : "",
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
            s.axis("value", !1),
            s.render();
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
          t.chart.forEach(function (a) {
            a.guide().line({
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
var i = e._export_sfc(a, [
  [
    "render",
    function (t, a, i, o, r, s) {
      return e.e(
        { a: i.data.operate_comment },
        i.data.operate_comment
          ? e.e(
              { b: i.data.operate_comment },
              i.data.operate_comment
                ? {
                    c: e.t(i.data.operate_comment),
                    d: e.o(function () {
                      return s.setGoTeach && s.setGoTeach.apply(s, arguments);
                    }, 3745),
                  }
                : {}
            )
          : {},
        { e: i.data.operate_list.length > 0 },
        i.data.operate_list.length > 0
          ? e.e(
              { f: e.t(r.unit.operate_list.text), g: r.operateListChartShow },
              r.operateListChartShow
                ? {
                    h: e.o(s.initOperateListChart, 3746),
                    i: e.p({
                      chartId: "operateListChart",
                      cClass: "operateListChart",
                      cStyle: "width: 100%;height: 348rpx;",
                      config: r.chartConfig,
                      refreshHash: r.operateListChartHash,
                    }),
                  }
                : {}
            )
          : {},
        { j: i.data.sale_comment },
        i.data.sale_comment
          ? e.e(
              { k: i.data.sale_comment },
              i.data.sale_comment
                ? {
                    l: e.t(i.data.sale_comment),
                    m: e.o(function () {
                      return s.setGoTeach && s.setGoTeach.apply(s, arguments);
                    }, 3747),
                  }
                : {}
            )
          : {},
        { n: i.data.sale_list.length > 0 },
        i.data.sale_list.length > 0
          ? e.e(
              { o: e.t(r.unit.sale_list.text), p: r.saleListChartShow },
              r.saleListChartShow
                ? {
                    q: e.o(s.initSaleListChart, 3748),
                    r: e.p({
                      chartId: "saleListChart",
                      cClass: "saleListChart",
                      cStyle: "width: 100%;height: 348rpx;",
                      config: r.chartConfig,
                      refreshHash: r.saleListChartHash,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-afac15ae"],
]);
wx.createComponent(i);
