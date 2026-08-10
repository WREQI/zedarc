var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../stock-hq-core/utils/f2-fit/tool.js"),
  i = require("../../../stock-hq-core/config/css-token.js"),
  e = require("../../../../../../common/vendor.js"),
  o = require("../../util/ChartMixin.js"),
  r = {
    mixins: [o.ChartMixin],
    props: ["skin", "fundPosition"],
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        tooTipInfo: { data: [], left: !1 },
        showTooltip: !1,
        fundChart: null,
        fundChartConfig: { animate: !1, padding: [36, 3, 50, 3] },
      };
    },
    computed: {
      fundDetail: function () {
        return {
          fund_cnt: this.fundPosition.fund_cnt || "-",
          fund_cnt_chg: this.fundPosition.fund_cnt_chg || "-",
          holding_cnt: (this.fundPosition.holding_cnt / 1e4).toFixed(2) || "-",
          holding_cnt_chg:
            (this.fundPosition.holding_cnt_chg / 1e4).toFixed(2) || "-",
          holding_ratio: (+this.fundPosition.holding_ratio).toFixed(2) || "-",
          holding_ratio_chg:
            (+this.fundPosition.holding_ratio_chg).toFixed(2) || "-",
        };
      },
      themeColor: function () {
        var t = i.CSSTOKEN[e.isBroker] || i.CSSTOKEN.DEFAULT;
        return {
          borderLight: t.borderLight || "#e9ebf0",
          orange: t.orange || "#ff891e",
          blue: t.bigBlue || "#3077ec",
          lightGray1: t.lightGray1 || "#7a8499",
          lightGray2: t.lightGray2 || "#98a0b3",
        };
      },
    },
    beforeUnmount: function () {
      try {
        this.fundChart && this.fundChart.destroy && this.fundChart.destroy(),
          (this.fundChart = null);
      } catch (t) {}
    },
    methods: {
      drawFundChart: function (i) {
        return (
          (r = this),
          null,
          (a = t().mark(function () {
            var r,
              a,
              l,
              h,
              c,
              u,
              s,
              d,
              f,
              g,
              _ = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = o.getCSSVariable(
                          "--border-light-divider",
                          "",
                          this.skin
                        )),
                        (a = o.getCSSVariable(
                          "--color-heavygray",
                          "",
                          this.skin
                        )),
                        (l = this.fundPosition || {}),
                        (h = l.fund_position_list),
                        (c = void 0 === h ? [] : h),
                        (u = this.formatFundData(c)),
                        (s = i.chart).source(u, {
                          time: { tickCount: 9 },
                          storeRate: {
                            type: "linear",
                            formatter: function (t) {
                              return "".concat(t, "%");
                            },
                          },
                          storePrice: { tickCount: 5, type: "linear" },
                        }),
                        s.axis("time", {
                          line: {
                            stroke: r,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          label: {
                            textAlign: "center",
                            textBaseline: "top",
                            fill: this.themeColor.lightGray2,
                          },
                        }),
                        s.axis("storePrice", {
                          position: "left",
                          grid: {
                            stroke: r,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          line: {
                            stroke: r,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          labelOffset: 0,
                          label: function (t, n, i) {
                            var e = {
                              textAlign: "start",
                              fill: _.themeColor.lightGray2,
                              textBaseline: "bottom",
                              top: !0,
                            };
                            return (
                              n === i - 1 &&
                                ((e.text = "股价\n".concat(t)),
                                (e.lineHeight = 18)),
                              e
                            );
                          },
                        }),
                        s.axis("storeRate", {
                          position: "right",
                          grid: null,
                          labelOffset: 0,
                          line: {
                            stroke: r,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          label: function (t, n, i) {
                            var e = {
                              textAlign: "end",
                              fill: _.themeColor.lightGray2,
                              textBaseline: "bottom",
                              top: !0,
                            };
                            return (
                              n === i - 1 &&
                                ((e.text = "持股比例\n".concat(t)),
                                (e.lineHeight = 18)),
                              e
                            );
                          },
                        }),
                        s.legend({
                          custom: !0,
                          position: "bottom",
                          align: "center",
                          wordSpace: 10,
                          itemGap: -64,
                          nameStyle: {
                            fill: this.themeColor.lightGray1,
                            fontSize: 11,
                          },
                          items: [
                            {
                              name: "持股比例",
                              fill: this.themeColor.blue,
                              marker: "square",
                            },
                            {
                              name: "股价",
                              fill: this.themeColor.orange,
                              marker: function (t, n, i, e) {
                                (e.lineWidth = 2.5),
                                  (e.strokeStyle = e.fillStyle),
                                  e.moveTo(t - i - 3, n),
                                  e.lineTo(t + i + 3, n),
                                  e.stroke(),
                                  e.fill();
                              },
                            },
                          ],
                        }),
                        (t.next = 4),
                        n.getEleInfo("#fundChart-container", this)
                      );
                    case 4:
                      (d = t.sent),
                        (f = d.width),
                        (g = f / 2),
                        s.tooltip({
                          custom: !0,
                          showTooltipMarker: !1,
                          showCrosshairs: !0,
                          triggerOn: ["touchstart", "touchmove"],
                          triggerOff: "touchend",
                          crosshairsType: "xy",
                          crosshairsStyle: { stroke: a, lineWidth: 1 },
                          onChange: function (t) {
                            var n = (t || {}).items,
                              i = void 0 === n ? [] : n,
                              e = [
                                {
                                  name: "日期",
                                  value: i[0].origin && i[0].origin.time,
                                },
                              ],
                              o = {
                                storeRate: "持股比例",
                                storePrice: "收盘价",
                              };
                            i.forEach(function (t) {
                              var n = { name: o[t.name] || "", value: t.value };
                              e.push(n);
                            }),
                              (_.tooTipInfo.data = e),
                              (_.tooTipInfo.left = t.x > g),
                              (_.showTooltip = !0);
                          },
                          onHide: function () {
                            _.showTooltip = !1;
                          },
                        }),
                        s
                          .interval()
                          .position("time*storeRate")
                          .color(this.themeColor.blue)
                          .size(22),
                        s
                          .line()
                          .position("time*storePrice")
                          .color(this.themeColor.orange),
                        s.render(),
                        "mp" !== e.StockBridge.ENV && (this.fundChart = s),
                        (this.chartObj = s);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              c,
              this
            );
          })),
          new Promise(function (t, n) {
            var i = function t(i) {
                try {
                  o(a.next(i));
                } catch (t) {
                  n(t);
                }
              },
              e = function (t) {
                try {
                  o(a.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              o = function (n) {
                return n.done
                  ? t(n.value)
                  : Promise.resolve(n.value).then(i, e);
              };
            o((a = a.apply(r, null)).next());
          })
        );
        var r, a;
      },
      formatFundData: function (t) {
        var n = [];
        return (
          t.forEach(function (t) {
            var i = {
              time: t[1] || "-",
              storeRate: (+t[3]).toFixed(2) || "-",
              storePrice: (+t[2]).toFixed(2) || "-",
            };
            n.push(i);
          }),
          n
        );
      },
    },
  };
Array || e.resolveComponent("f2")();
var a = e._export_sfc(r, [
  [
    "render",
    function (t, n, i, o, r, a) {
      return e.e(
        { a: i.fundPosition && "1" == i.fundPosition.show_module },
        i.fundPosition && "1" == i.fundPosition.show_module
          ? e.e(
              { b: a.fundDetail.fund_cnt_chg > 0 },
              a.fundDetail.fund_cnt_chg > 0
                ? { c: e.t(a.fundDetail.fund_cnt_chg) }
                : {},
              { d: 0 == a.fundDetail.fund_cnt_chg },
              (a.fundDetail.fund_cnt_chg, {}),
              { e: a.fundDetail.fund_cnt_chg < 0 },
              a.fundDetail.fund_cnt_chg < 0
                ? { f: e.t(a.fundDetail.fund_cnt_chg) }
                : {},
              {
                g: e.t(a.fundDetail.fund_cnt),
                h: a.fundDetail.holding_cnt_chg > 0,
              },
              a.fundDetail.holding_cnt_chg > 0
                ? { i: e.t(a.fundDetail.holding_cnt_chg) }
                : {},
              { j: 0 == a.fundDetail.holding_cnt_chg },
              (a.fundDetail.holding_cnt_chg, {}),
              { k: a.fundDetail.holding_cnt_chg < 0 },
              a.fundDetail.holding_cnt_chg < 0
                ? { l: e.t(a.fundDetail.holding_cnt_chg) }
                : {},
              {
                m: e.t(a.fundDetail.holding_cnt),
                n: a.fundDetail.holding_ratio_chg > 0,
              },
              a.fundDetail.holding_ratio_chg > 0
                ? { o: e.t(a.fundDetail.holding_ratio_chg) }
                : {},
              { p: 0 == a.fundDetail.holding_ratio_chg },
              (a.fundDetail.holding_ratio_chg, {}),
              { q: a.fundDetail.holding_ratio_chg < 0 },
              a.fundDetail.holding_ratio_chg < 0
                ? { r: e.t(a.fundDetail.holding_ratio_chg) }
                : {},
              {
                s: e.t(a.fundDetail.holding_ratio),
                t: e.o(a.drawFundChart, 4060),
                v: e.o(t.chartTouchStop, 4061),
                w: e.o(t.chartTouchStart, 4062),
                x: e.o(t.chartTouchMove, 4063),
                y: e.p({
                  chartId: "fundChart",
                  cClass: "fund-chart",
                  cStyle: "width: 705rpx; height: 450rpx",
                  config: r.fundChartConfig,
                  "disable-touch-move": !0,
                }),
                z: r.showTooltip,
              },
              r.showTooltip
                ? {
                    A: e.f(r.tooTipInfo.data, function (t, n, i) {
                      return { a: e.t(t.name), b: e.t(t.value), c: t.name };
                    }),
                    B: e.n(
                      r.tooTipInfo.left
                        ? "canvas-toolTip-left"
                        : "canvas-toolTip-right"
                    ),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-f6a84e5c"],
]);
wx.createComponent(a);
