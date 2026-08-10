var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../stock-hq-core/utils/f2-fit/tool.js"),
  o = require("../../../stock-hq-core/config/css-token.js"),
  r = require("../../../../../../common/vendor.js"),
  n = require("../../util/ChartMixin.js"),
  a = {
    mixins: [n.ChartMixin],
    props: {
      skin: { type: String, default: "white" },
      aimPrice: { type: Object, require: !0, default: function () {} },
    },
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        tooTipInfo: { data: [], left: !1 },
        showTooltip: !1,
        tartgetChart: null,
        targetChartConfig: { padding: [18, 3, 50, 3], animate: !1 },
      };
    },
    computed: {
      themeColor: function () {
        var t = o.CSSTOKEN[r.isBroker] || o.CSSTOKEN.DEFAULT;
        return {
          borderLight: t.borderLight || "#e9ebf0",
          orange: t.orange || "#ff891e",
          blue: t.bigBlue || "#3077ec",
          lightGray1: t.lightGray1 || "#7a8499",
          lightGray2: t.lightGray2 || "#98a0b3",
          heavygray: n.getCSSVariable("--color-heavygray", "", this.skin),
          lightDivider: n.getCSSVariable(
            "--border-light-divider",
            "",
            this.skin
          ),
          contentLayer: n.getCSSVariable("--fill-content-layer", "", this.skin),
        };
      },
    },
    beforeUnmount: function () {
      try {
        this.tartgetChart &&
          this.tartgetChart.destroy &&
          this.tartgetChart.destroy(),
          (this.tartgetChart = null);
      } catch (t) {}
    },
    methods: {
      drawTargetPrice: function (t) {
        return (
          (o = this),
          null,
          (n = e().mark(function () {
            var o,
              n,
              a,
              l,
              h,
              s,
              c,
              u,
              f,
              m = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = this.aimPrice || {}),
                        (n = o.aim_price_list),
                        (a = void 0 === n ? [] : n),
                        (l = this.formatData(a)),
                        (h = t.chart),
                        h.source(l, {
                          time: {
                            tickCount: 2,
                            type: "timeCat",
                            mask: "YYYY-MM-DD",
                            range: [0, 1],
                          },
                          value: {
                            tickCount: 5,
                            type: "linear",
                            formatter: function (t) {
                              return (+t).toFixed(2);
                            },
                          },
                        }),
                        (e.next = 4),
                        i.getEleInfo("#priceChart-container", this)
                      );
                    case 4:
                      (s = e.sent),
                        (c = s.width),
                        (u = c / 2),
                        h.tooltip({
                          custom: !0,
                          showTooltipMarker: !1,
                          showCrosshairs: !0,
                          triggerOn: ["touchstart", "touchmove"],
                          triggerOff: "touchend",
                          crosshairsType: "xy",
                          crosshairsStyle: {
                            stroke: this.themeColor.heavygray,
                            lineWidth: 1,
                          },
                          onChange: function (t) {
                            var e = (t || {}).items,
                              i = void 0 === e ? [] : e,
                              o = {
                                股票收盘价: "收盘价",
                                预测目标均价: "目标均价",
                              },
                              r = [
                                {
                                  name: "日期",
                                  value: i[0].origin && i[0].origin.time,
                                },
                              ];
                            i.forEach(function (t) {
                              var e = { name: o[t.name] || "", value: t.value };
                              r.push(e);
                            }),
                              (m.tooTipInfo.data = r),
                              (m.tooTipInfo.left = t.x > u),
                              (m.showTooltip = !0);
                          },
                          onHide: function () {
                            m.showTooltip = !1;
                          },
                        }),
                        h.axis("value", {
                          grid: {
                            stroke: this.themeColor.lightDivider,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          labelOffset: 0,
                          label: function (t, e, i) {
                            var o = {
                              textAlign: "start",
                              fill: m.themeColor.lightGray2,
                            };
                            return (
                              0 === e
                                ? (o.textBaseline = "bottom")
                                : e === i - 1 && (o.textBaseline = "top"),
                              o
                            );
                          },
                        }),
                        h.axis("time", {
                          grid: function (t, e, i) {
                            if (0 === e || e === i - 1)
                              return {
                                stroke: m.themeColor.lightDivider,
                                lineDash: null,
                                lineWidth: 1,
                                strokeOpacity: 0.5,
                              };
                          },
                          line: {
                            stroke: this.themeColor.lightDivider,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          label: function (t, e, i) {
                            var o = {
                              textAlign: "center",
                              fill: m.themeColor.lightGray2,
                            };
                            return (
                              0 === e && (o.textAlign = "start"),
                              e > 0 && e === i - 1 && (o.textAlign = "end"),
                              o
                            );
                          },
                        }),
                        h.legend({
                          position: "bottom",
                          align: "center",
                          clickable: !1,
                          wordSpace: 10,
                          itemGap: -64,
                          nameStyle: {
                            fill: this.themeColor.lightGray1,
                            fontSize: 11,
                          },
                          marker: function (t, e, i, o) {
                            (o.lineWidth = 2.5),
                              (o.strokeStyle = o.fillStyle),
                              o.moveTo(t - i - 3, e),
                              o.lineTo(t + i + 3, e),
                              o.stroke(),
                              o.fill();
                          },
                        }),
                        h
                          .line()
                          .position("time*value")
                          .color("type", [
                            this.themeColor.blue,
                            this.themeColor.orange,
                          ])
                          .size(1),
                        (f = {
                          x: a[a.length - 1][0],
                          y1: +a[a.length - 1][1],
                          y2: +a[a.length - 1][2],
                        }),
                        h
                          .guide()
                          .tag({
                            top: !0,
                            position: [f.x, f.y1],
                            content: f.y1,
                            limitInPlot: !0,
                            direct: "tl",
                            side: 0,
                            offsetY: -4,
                            background: {
                              padding: [2, 3],
                              radius: 2,
                              fill: this.themeColor.contentLayer,
                              lineWidth: 1,
                              stroke: this.themeColor.orange,
                              strokeOpacity: 0.6,
                            },
                            textStyle: {
                              fontSize: 10,
                              fill: this.themeColor.orange,
                            },
                            withPoint: !0,
                            pointStyle: {
                              fill: this.themeColor.orange,
                              r: 2.5,
                              lineWidth: 1,
                              stroke: this.themeColor.orange,
                            },
                          }),
                        h
                          .guide()
                          .tag({
                            top: !0,
                            position: [f.x, f.y2],
                            content: f.y2,
                            limitInPlot: !0,
                            direct: "tl",
                            side: 0,
                            offsetY: -4,
                            background: {
                              padding: [2, 3],
                              radius: 2,
                              fill: this.themeColor.contentLayer,
                              lineWidth: 1,
                              stroke: this.themeColor.blue,
                              strokeOpacity: 0.6,
                            },
                            textStyle: {
                              fontSize: 10,
                              fill: this.themeColor.blue,
                            },
                            withPoint: !0,
                            pointStyle: {
                              fill: this.themeColor.blue,
                              r: 2.5,
                              lineWidth: 1,
                              stroke: this.themeColor.blue,
                            },
                          }),
                        h.render(),
                        "mp" !== r.StockBridge.ENV && (this.tartgetChart = h),
                        (this.chartObj = h);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              h,
              this
            );
          })),
          new Promise(function (t, e) {
            var i = function t(i) {
                try {
                  a(n.next(i));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  a(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, r);
              };
            a((n = n.apply(o, null)).next());
          })
        );
        var o, n;
      },
      formatData: function (e) {
        var i = [];
        return (
          e.forEach(function (e) {
            var o = {
                time: e[0] || "",
                value: (+e[2]).toFixed(2) || 0,
                type: "股票收盘价",
              },
              r = {
                time: e[0] || "",
                value: (+e[1]).toFixed(2) || 0,
                type: "预测目标均价",
              };
            i = [].concat(t(i), [o, r]);
          }),
          i
        );
      },
    },
  };
Array || r.resolveComponent("f2")();
var l = r._export_sfc(a, [
  [
    "render",
    function (t, e, i, o, n, a) {
      return r.e(
        { a: i.aimPrice && 1 == i.aimPrice.show_module },
        i.aimPrice && 1 == i.aimPrice.show_module
          ? r.e(
              {
                b: r.t(i.aimPrice.comment),
                c: r.o(a.drawTargetPrice, 4050),
                d: r.o(t.chartTouchStop, 4051),
                e: r.o(t.chartTouchStart, 4052),
                f: r.o(t.chartTouchMove, 4053),
                g: r.p({
                  chartId: "priceChart",
                  cClass: "price-chart",
                  cStyle: "width: 705rpx; height: 450rpx",
                  config: n.targetChartConfig,
                  "disable-touch-move": !0,
                }),
                h: n.showTooltip,
              },
              n.showTooltip
                ? {
                    i: r.f(n.tooTipInfo.data, function (t, e, i) {
                      return { a: r.t(t.name), b: r.t(t.value), c: t.name };
                    }),
                    j: r.n(
                      n.tooTipInfo.left
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
  ["__scopeId", "data-v-97e24fb8"],
]);
wx.createComponent(l);
