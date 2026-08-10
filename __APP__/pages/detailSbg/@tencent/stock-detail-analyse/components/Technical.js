var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, i) {
    return new Promise(function (n, o) {
      var r = function (t) {
          try {
            s(i.next(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          try {
            s(i.throw(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(r, a);
        };
      s((i = i.apply(t, e)).next());
    });
  },
  i = require("../Diagnose.js"),
  n = require("../../stock-hq-core/config/css-token.js"),
  o = require("../../../../../common/vendor.js"),
  r = require("../../stock-hq-core/utils/f2-fit/tool.js"),
  a = require("../util/ChartMixin.js"),
  s = {
    mixins: [a.ChartMixin],
    inject: ["fontSkin"],
    props: ["code", "skin", "stockName", "technicalData"],
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
    },
    data: function () {
      return {
        trendColor: [
          "",
          "trend-red",
          "trend-green",
          "trend-grey",
          "trend-orange",
          "trend-safe",
          "trend-low",
          "trend-mid",
          "trend-high",
        ],
        klineData: [],
        tooTipInfo: { origin: {}, left: !1 },
        showTooltip: !1,
        klineChart: null,
        klineConfig: { padding: [0, 3, 18, 0], syncY: !0 },
      };
    },
    computed: {
      summary: function () {
        return (this.technicalData || {}).summary;
      },
      technical: function () {
        return (this.technicalData || {}).technical;
      },
      env: function () {
        return o.StockBridge.ENV;
      },
      themeColor: function () {
        var t = n.CSSTOKEN[o.isBroker] || n.CSSTOKEN.DEFAULT;
        return {
          bigBlue: t.bigBlue || "#3077ec",
          bigRed: t.bigRed || "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          primary: t.primary || "#3077ec",
          lineBlue: t.lineBlue || "#4489ff",
          gridentBack: "background: linear-gradient(270deg, "
            .concat(t.midBlue, " 0%, ")
            .concat(t.primary, " 100%)"),
          lightDivider: a.getCSSVariable(
            "--border-light-divider",
            "",
            this.skin
          ),
          heavygray: a.getCSSVariable("--color-heavygray", "", this.skin),
          contentLayer: a.getCSSVariable("--fill-content-layer", "", this.skin),
        };
      },
      technicalBar: function () {
        var t = this,
          e = ((this.technicalData || {}).technical || {}).zdf_line,
          i = void 0 === e ? [] : e,
          n = i[i.length - 1],
          o = n.board_zdf,
          r = n.market_zdf,
          a = n.stock_zdf,
          s = Math.max(Math.abs(o), Math.abs(r), Math.abs(a));
        return (
          [a, o, r].map(function (e, i) {
            return {
              name: [t.stockName, "所属行业", "上证指数"][i],
              width: "".concat(Math.max(100 * Math.abs(e / s), 5), "%"),
              barColor: e > 0 ? t.themeColor.bigRed : t.themeColor.bigGreen,
              text: "".concat(e > 0 ? "+" : "").concat(e.toFixed(2), "%"),
              textColor: e > 0 ? t.themeColor.bigRed : t.themeColor.bigGreen,
            };
          }) || []
        );
      },
    },
    created: function () {},
    mounted: function () {
      this.getHasKline();
    },
    methods: {
      getHasKline: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("" !== this.technical.new_stock_comment) {
                        t.next = 11;
                        break;
                      }
                      return (
                        (t.prev = 1),
                        (t.next = 4),
                        i.queryAnalyseBollLine(this.code)
                      );
                    case 4:
                      (n = t.sent),
                        (o = n.ss_line),
                        (this.klineData = o),
                        (t.next = 11);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(1));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[1, 9]]
            );
          })
        );
      },
      drawKLine: function (i) {
        return e(
          this,
          null,
          t().mark(function e() {
            var n,
              o,
              a,
              s,
              l,
              c,
              h = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.klineData),
                        (o = [
                          this.themeColor.bigRed,
                          this.themeColor.bigGreen,
                        ]),
                        n.forEach(function (t, e) {
                          (t.range = [t.open, t.close, t.high, t.low]),
                            t.open !== t.close
                              ? (t.trend = t.open < t.close ? 0 : 1)
                              : e > 0 &&
                                (t.trend = t.close < n[e - 1].close ? 1 : 0);
                        }),
                        (a = i.chart),
                        n.shift(),
                        a.source(n, { date: { range: [0, 1], tickCount: 2 } }),
                        a.legend(!1),
                        a.axis("date", {
                          labelOffset: 5,
                          label: function (t, e, i) {
                            var n = "center";
                            return (
                              0 === e
                                ? (n = "start")
                                : e === i - 1 && (n = "end"),
                              {
                                text: t.slice(5),
                                fill: "#98A0B3",
                                fontFamily:
                                  "west" === h.fontSkin ? "stockFont" : "",
                                textAlign: n,
                              }
                            );
                          },
                          line: !1,
                          grid: {
                            lineDash: null,
                            stroke: this.themeColor.lightDivider,
                            lineWidth: 0.3,
                          },
                        }),
                        a.axis("range", {
                          line: {
                            lineDash: null,
                            stroke: this.themeColor.lightDivider,
                            lineWidth: 0.3,
                          },
                          grid: {
                            lineDash: null,
                            stroke: this.themeColor.lightDivider,
                            lineWidth: 0.3,
                          },
                          labelOffset: 0,
                          label: function (t, e, i) {
                            var n = {
                              textAlign: "start",
                              text: parseFloat(t).toFixed(2),
                              fill: "#98A0B3",
                              fontFamily:
                                "west" === h.fontSkin ? "stockFont" : "",
                            };
                            return (
                              0 === e
                                ? (n.textBaseline = "bottom")
                                : e === i - 1 &&
                                  ((n.textBaseline = "top"),
                                  (n.text = "".concat(
                                    parseFloat(t).toFixed(2),
                                    "（股价·前复权）"
                                  ))),
                              n
                            );
                          },
                        }),
                        (t.next = 6),
                        r.getEleInfo("#chartContainer", this)
                      );
                    case 6:
                      (s = t.sent),
                        (l = s.width),
                        (c = l / 2),
                        a.tooltip({
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
                              i = void 0 === e ? [] : e;
                            (h.tooTipInfo.origin = i[0] && i[0].origin),
                              (h.tooTipInfo.left = t.x > c),
                              (h.showTooltip = !0);
                          },
                          onHide: function () {
                            h.showTooltip = !1;
                          },
                        }),
                        a.axis("stress_20days", !1),
                        a.axis("support_20days", !1),
                        a
                          .schema()
                          .position("date*range")
                          .color("trend", o)
                          .shape("candle"),
                        a
                          .line()
                          .position("date*stress_20days")
                          .color(this.themeColor.bigBlue)
                          .size(1)
                          .animate(!1),
                        a
                          .line()
                          .position("date*support_20days")
                          .color("#FF7400")
                          .size(1)
                          .animate(!1),
                        a
                          .guide()
                          .line({
                            top: !1,
                            start: ["max", "min"],
                            end: ["max", "max"],
                            style: {
                              stroke: this.themeColor.lightDivider,
                              lineWidth: 0.3,
                            },
                          }),
                        a
                          .guide()
                          .tag({
                            top: !0,
                            position: [
                              n[n.length - 1].date,
                              n[n.length - 1].stress_20days,
                            ],
                            content: "".concat(
                              (+n[n.length - 1].stress_20days).toFixed(2)
                            ),
                            limitInPlot: !0,
                            direct: "tl",
                            side: 0,
                            offsetY: -4,
                            background: {
                              padding: [2, 3],
                              radius: 2,
                              fill: this.themeColor.contentLayer,
                              lineWidth: 1,
                              stroke: this.themeColor.bigBlue || "#3077ec",
                              strokeOpacity: 0.6,
                            },
                            textStyle: {
                              fontSize: 10,
                              fill: this.themeColor.bigBlue || "#3077ec",
                            },
                            withPoint: !0,
                            pointStyle: {
                              stroke: this.themeColor.bigBlue || "#3077ec",
                              fill: this.themeColor.bigBlue || "#3077ec",
                              lineWidth: 0,
                              fontFamily:
                                "west" === this.fontSkin ? "stockFont" : "",
                            },
                          }),
                        a
                          .guide()
                          .tag({
                            top: !0,
                            position: [
                              n[n.length - 1].date,
                              n[n.length - 1].support_20days,
                            ],
                            content: "".concat(
                              (+n[n.length - 1].support_20days).toFixed(2)
                            ),
                            limitInPlot: !0,
                            direct: "tl",
                            side: 0,
                            offsetY: -4,
                            background: {
                              padding: [2, 3],
                              radius: 2,
                              fill: this.themeColor.contentLayer,
                              lineWidth: 1,
                              stroke: "#FF7400",
                              strokeOpacity: 0.6,
                            },
                            textStyle: { fontSize: 10, fill: "#FF7400" },
                            withPoint: !0,
                            pointStyle: {
                              stroke: "#FF7400",
                              fill: "#FF7400",
                              lineWidth: 0,
                              fontFamily:
                                "west" === this.fontSkin ? "stockFont" : "",
                            },
                          }),
                        a.render(),
                        (this.chartObj = a);
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      goTeaching: function (t, e, i) {
        o.StockBridge.report("stock_detail.zg_toujiao");
        var n = [
          this.summary.technical_score,
          this.summary.capital_score,
          this.summary.public_opinion_score,
          this.summary.fundamental_score,
          this.summary.risk_score,
        ].join(",");
        this.openExtra(
          "https://wzq.tenpay.com/resources/diagnoseStock/#/teachWzq?part="
            .concat(t, "&score=")
            .concat(n, "&pos=")
            .concat(e, "&title=new")
            .concat(i ? "&summary=true" : "")
        );
      },
      openExtra: function (t) {
        i.IS_PCWEIXIN ? (location.href = t) : o.StockBridge.openExtraWebview(t);
      },
    },
  };
Array || o.resolveComponent("f2")();
var l = o._export_sfc(s, [
  [
    "render",
    function (t, e, i, n, r, a) {
      return o.e(
        { a: a.technical },
        a.technical
          ? o.e(
              {
                b: o.t(a.technical.technical_tag.name),
                c: o.n(r.trendColor[a.technical.technical_tag.trend]),
                d: o.t(a.technical.zdf_line[0].date.slice(5)),
                e: o.t(
                  a.technical.zdf_line[
                    a.technical.zdf_line.length - 1
                  ].date.slice(5)
                ),
                f: o.f(a.technicalBar, function (t, e, i) {
                  return {
                    a: o.t(t.name),
                    b: t.width,
                    c: t.barColor,
                    d: o.t(t.text),
                    e: t.textColor,
                    f: e,
                  };
                }),
                g: o.o(function (t) {
                  return a.goTeaching(0, "ylw");
                }, 3226),
                h: r.klineData.length > 0,
              },
              r.klineData.length > 0 ? { i: this.themeColor.lineBlue } : {},
              { j: r.klineData.length > 0 },
              r.klineData.length > 0
                ? o.e(
                    { k: r.klineData.length > 0 },
                    r.klineData.length > 0
                      ? {
                          l: o.o(a.drawKLine, 3227),
                          m: o.o(t.chartTouchStop, 3228),
                          n: o.o(t.chartTouchStart, 3229),
                          o: o.o(t.chartTouchMove, 3230),
                          p: o.p({
                            chartId: "klineChart",
                            cClass: "kline-class",
                            cStyle: "width: 100%; height: 420rpx",
                            config: r.klineConfig,
                            "disable-touch-move": !0,
                          }),
                        }
                      : {},
                    { q: r.showTooltip },
                    r.showTooltip
                      ? {
                          r: o.t(r.tooTipInfo.origin.date),
                          s: o.t(r.tooTipInfo.origin.stress_20days.toFixed(2)),
                          t: o.t(r.tooTipInfo.origin.support_20days.toFixed(2)),
                          v: o.t(r.tooTipInfo.origin.close.toFixed(2)),
                          w: o.t(r.tooTipInfo.origin.open.toFixed(2)),
                          x: o.t(r.tooTipInfo.origin.high.toFixed(2)),
                          y: o.t(r.tooTipInfo.origin.low.toFixed(2)),
                          z: o.n(
                            r.tooTipInfo.left
                              ? "canvas-toolTip-left"
                              : "canvas-toolTip-right"
                          ),
                        }
                      : {}
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8fca55f0"],
]);
wx.createComponent(l);
