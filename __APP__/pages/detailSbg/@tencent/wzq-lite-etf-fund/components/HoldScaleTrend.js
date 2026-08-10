var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  i = require("../../stock-hq-core/config/css-token.js"),
  o = {
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
      RangeSlider: function () {
        return "./RangeSlider.js";
      },
    },
    inject: ["fontSkin"],
    props: ["skin", "holdData", "dealTimeLabel", "pixelRatio"],
    data: function () {
      return {
        chartHash: "",
        dataRange: { start: 0.889, end: 1 },
        firstLoaded: !1,
        type: 1,
        chartP: null,
        showTip: !1,
        showTooltip: !1,
        left: "",
        tooTipInfo: { data: {}, left: !1 },
        splitPointer: null,
        maxMinData: {
          maxShare: 0,
          minShare: 0,
          maxSize: 0,
          minSize: 0,
          maxLast: 0,
          minLast: 0,
        },
      };
    },
    computed: {
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isDark: function () {
        return ["black", "dark"].includes(this.skin);
      },
      cStyle: function () {
        return this.isLite
          ? "width: 606rpx; height: 270rpx"
          : "width: 690rpx; height: 360rpx";
      },
      chartConfig: function () {
        return {
          padding: this.isLite ? [24, 4, 16, 0] : [30, 3, 18, 3],
          animate: !1,
        };
      },
      holdTitle: function () {
        return this.holdData.desc || "";
      },
      chartData: function () {
        var t = (this.holdData || {}).data,
          e = void 0 === t ? [] : t;
        return this.formatData(e);
      },
      updateTime: function () {
        var t = this.chartData[this.chartData.length - 1];
        return (t && t.date) || "";
      },
      themeColor: function () {
        var t = this.isDark ? i.CSSTOKEN.BLACK : i.CSSTOKEN.DEFAULT;
        return {
          bgColor: this.isDark ? "#171d28" : "#fff",
          blackFont: t.gray || "#262e40",
          borderLight: t.borderLight || "#e9ebf0",
          orange: t.orange || "#ff891e",
          red: t.bigBred || "#e63535",
          green: t.bigGreen || "#1CAA3C",
          gray: t.lightGray1 || "#7a8499",
          blue: t.bigBlue || "#3077ec",
          lightGray1: t.lightGray1 || "#7a8499",
          lightGray2: t.lightGray2 || "#98a0b3",
        };
      },
    },
    mounted: function () {},
    methods: {
      computeStart: function (t) {
        return 60 / t;
      },
      rangeChange: function (t) {
        e.StockBridge.report("hq.detail.etffund.holdscale.drogscale.click"),
          (this.dataRange &&
            this.dataRange.start === t.start &&
            this.dataRange.end === t.end) ||
            ((this.dataRange = t), (this.chartHash = String(Math.random())));
      },
      openDialog: function () {
        e.StockBridge.report("hq.stock_detail.fund.fundflow.modal_click"),
          e.StockBridge.modal({
            title: "份额和规模走势",
            content:
              "场外基金净申购会导致ETF份额增加，反之亦然。ETF的规模=份额X收盘价，当收盘价不变时，规模会随着份额的增加而增大，反之亦然。ETF规模越大，流动性越好。当ETF所跟踪的指数处于相对低位，或投资者看好该指数时，投资者可能会通过场外申购的方式持有该ETF，导致ETF份额增加。份额增加越多，代表看好程度越强烈。",
            showCancel: !1,
            confirmText: "我知道了",
          });
      },
      rangeInit: function () {
        var t = this;
        this.$nextTick(function () {
          var e;
          null == (e = t.$refs.sliderETFhold) || e.setDefaultRange(t.dataRange);
        });
      },
      getColor: function (t) {
        return 0 === t
          ? this.themeColor.gray
          : t > 0
          ? this.themeColor.red
          : this.themeColor.green;
      },
      changeType: function (t) {
        e.StockBridge.report("hq.stock_detail.fund.switch.holdsize_click", {
          type: t,
        }),
          (this.type = t),
          (this.chartHash = String(Math.random()));
      },
      setHoldScalleChart: function (i) {
        return (
          (o = this),
          (a = arguments),
          (r = function (i) {
            var o = this,
              a = i.chart,
              r = i.config;
            return t().mark(function i() {
              var n, l, s, h, d, c, f, u;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = o.chartData),
                        o.isLite
                          ? a.source(n, {
                              date: { tickCount: 2, range: [0, 1] },
                              shares: {
                                tickCount: 120,
                                type: "linear",
                                max: o.maxMinData.maxShare,
                                min: o.maxMinData.minShare,
                                formatter: function (t) {
                                  return (+t).toFixed(2);
                                },
                              },
                              size: {
                                tickCount: 120,
                                type: "linear",
                                max: o.maxMinData.maxSize,
                                min: o.maxMinData.minSize,
                                formatter: function (t) {
                                  return (+t).toFixed(2);
                                },
                              },
                              last: {
                                tickCount: 120,
                                type: "linear",
                                max: o.maxMinData.maxLast,
                                min: o.maxMinData.minLast,
                                formatter: function (t) {
                                  return (+t).toFixed(3);
                                },
                              },
                            })
                          : a.source(n, {
                              date: {
                                tickCount: 2,
                                type: "timeCat",
                                mask: "YYYY-MM-DD",
                                range: [0, 1],
                              },
                              shares: {
                                type: "linear",
                                formatter: function (t) {
                                  return (+t).toFixed(2);
                                },
                              },
                              size: {
                                type: "linear",
                                formatter: function (t) {
                                  return (+t).toFixed(2);
                                },
                              },
                              last: {
                                type: "linear",
                                formatter: function (t) {
                                  return (+t).toFixed(3);
                                },
                              },
                            }),
                        a.legend(!1),
                        (l = o.isLite
                          ? null
                          : {
                              stroke: o.themeColor.borderLight,
                              lineDash: null,
                              lineWidth: 1,
                              strokeOpacity: 0.5,
                            }),
                        a.axis("shares", {
                          position: "left",
                          grid: l,
                          line: l,
                          labelOffset: 0,
                          label: function (t, e, i) {
                            var a = {
                              textAlign: "start",
                              fill: o.themeColor.gray,
                              textBaseline: "bottom",
                              fontFamily: "stockFont",
                              fontSize: 9 * o.pixelRatio,
                              lineHeight: 12 * o.pixelRatio,
                              text: o.isLite ? "" : t,
                            };
                            return (
                              e === i - 1 &&
                                (a.text = "基金份额 (亿份)\n".concat(
                                  o.maxMinData.maxShare
                                )),
                              0 === e && (a.text = o.maxMinData.minShare),
                              a
                            );
                          },
                        }),
                        a.axis("size", {
                          position: "left",
                          grid: l,
                          line: l,
                          labelOffset: 0,
                          label: function (t, e, i) {
                            var a = {
                              textAlign: "start",
                              fill: o.themeColor.gray,
                              textBaseline: "bottom",
                              fontFamily: "stockFont",
                              fontSize: 9 * o.pixelRatio,
                              lineHeight: 12 * o.pixelRatio,
                              text: o.isLite ? "" : t,
                            };
                            return (
                              e === i - 1 &&
                                (a.text = "基金规模 (亿元)\n".concat(
                                  o.maxMinData.maxSize
                                )),
                              0 === e && (a.text = o.maxMinData.minSize),
                              a
                            );
                          },
                        }),
                        a.axis("last", {
                          position: "right",
                          grid: null,
                          labelOffset: 0,
                          line: l,
                          label: function (t, e, i) {
                            var a = {
                              text: o.isLite ? "" : t,
                              textAlign: "end",
                              fill: o.themeColor.gray,
                              textBaseline: "bottom",
                              fontSize: 9 * o.pixelRatio,
                              lineHeight: 12 * o.pixelRatio,
                              fontFamily: "stockFont",
                            };
                            return (
                              e === i - 1 &&
                                (a.text = "收盘价 (元)\n".concat(
                                  o.maxMinData.maxLast
                                )),
                              0 === e && (a.text = o.maxMinData.minLast),
                              a
                            );
                          },
                        }),
                        a.axis("date", {
                          grid: l,
                          line: l,
                          labelOffset: 4,
                          label: function (t, e, i) {
                            var a = {
                              text: o.dealTimeLabel(t),
                              textAlign: "center",
                              fill: o.themeColor.gray,
                              fontFamily: "stockFont",
                              fontSize: 10 * o.pixelRatio,
                            };
                            return (
                              0 === e && (a.textAlign = "start"),
                              e > 0 && e === i - 1 && (a.textAlign = "end"),
                              a
                            );
                          },
                        }),
                        (s = r.width / 2),
                        a.tooltip({
                          custom: !0,
                          showTooltipMarker: !1,
                          showCrosshairs: !0,
                          triggerOn: ["touchstart", "touchmove"],
                          triggerOff: "touchend",
                          crosshairsType: "xy",
                          crosshairsStyle: {
                            stroke: o.themeColor.blackFont,
                            lineWidth: 1,
                          },
                          onChange: function (t) {
                            !1 === o.showTooltip &&
                              e.StockBridge.report(
                                "hq.stock_detail.fund.holdscale.tootip.exposure"
                              );
                            var i = (t || {}).items,
                              a = void 0 === i ? [] : i;
                            (o.tooTipInfo.data = a[0].origin || {}),
                              (o.left = t.x > s),
                              o.showTooltip ||
                                e.StockBridge.report(
                                  "hq.detail.etffund.holdscale.exposure"
                                ),
                              (o.showTooltip = !0);
                          },
                          onHide: function () {
                            o.showTooltip = !1;
                          },
                        }),
                        (h = o.chartData[o.chartData.length - 1]),
                        1 === o.type &&
                          (a
                            .line()
                            .position("date*shares")
                            .color(o.themeColor.orange)
                            .size(0.8),
                          o.splitPointer &&
                            (a
                              .guide()
                              .line({
                                start: [o.splitPointer.date, "max"],
                                end: [o.splitPointer.date, "min"],
                                style: {
                                  stroke: o.themeColor.orange,
                                  lineDash: [2],
                                },
                              }),
                            a
                              .guide()
                              .tag({
                                top: !0,
                                position: [o.splitPointer.date, "min"],
                                content: "份额拆分",
                                limitInPlot: !0,
                                direct: "tc",
                                side: 0,
                                offsetY: -4,
                                background: {
                                  padding: [2, 3],
                                  radius: 2,
                                  fill: o.themeColor.bgColor,
                                  lineWidth: 1,
                                  stroke: o.themeColor.orange,
                                  strokeOpacity: 0.6,
                                  fillOpacity: 0.9,
                                },
                                textStyle: {
                                  fontSize: 10,
                                  fill: o.themeColor.orange,
                                },
                                withPoint: !1,
                              }))),
                        2 === o.type &&
                          a
                            .line()
                            .position("date*size")
                            .color(o.themeColor.red)
                            .size(0.8),
                        a
                          .line()
                          .position("date*last")
                          .color(o.isLite ? "#C9D0DC" : o.themeColor.blue)
                          .size(0.8),
                        a.render(),
                        o.isLite ||
                          (1 === o.type &&
                            ((d = a.getPosition({
                              date: h.date,
                              last: h.last,
                            })),
                            (c = a.getRecord(d)),
                            a
                              .guide()
                              .tag({
                                top: !0,
                                position: [h.date, h.shares],
                                content: "".concat(h.shares, "亿份"),
                                limitInPlot: !0,
                                direct: c.shares < h.shares ? "tl" : "bl",
                                side: 0,
                                offsetY: c.shares < h.shares ? -4 : 4,
                                background: {
                                  padding: [2, 3],
                                  radius: 2,
                                  fill: o.themeColor.bgColor,
                                  lineWidth: 1,
                                  stroke: o.themeColor.orange,
                                  strokeOpacity: 0.6,
                                  fillOpacity: 0.9,
                                },
                                textStyle: {
                                  fontSize: 10,
                                  fill: o.themeColor.orange,
                                },
                                withPoint: !0,
                                pointStyle: {
                                  fill: o.themeColor.orange,
                                  r: 2.5,
                                  lineWidth: 1,
                                  stroke: o.themeColor.orange,
                                },
                              }),
                            a
                              .guide()
                              .tag({
                                top: !0,
                                position: [h.date, c.shares],
                                content: "".concat(h.last, "元"),
                                limitInPlot: !0,
                                direct: c.shares > h.shares ? "tl" : "bl",
                                side: 0,
                                offsetY: c.shares > h.shares ? -4 : 4,
                                background: {
                                  padding: [2, 3],
                                  radius: 2,
                                  fill: o.themeColor.bgColor,
                                  lineWidth: 1,
                                  stroke: o.themeColor.blue,
                                  strokeOpacity: 0.6,
                                },
                                textStyle: {
                                  fontSize: 10,
                                  fill: o.themeColor.blue,
                                },
                                withPoint: !0,
                                pointStyle: {
                                  fill: o.themeColor.blue,
                                  r: 2.5,
                                  lineWidth: 1,
                                  stroke: o.themeColor.blue,
                                },
                              }),
                            a.render()),
                          2 === o.type &&
                            ((f = a.getPosition({
                              date: h.date,
                              last: h.last,
                            })),
                            (u = a.getRecord(f)),
                            a
                              .guide()
                              .tag({
                                top: !0,
                                position: [h.date, h.size],
                                content: "".concat(h.size, "亿元"),
                                limitInPlot: !0,
                                direct: u.size < h.size ? "tl" : "bl",
                                side: 0,
                                offsetY: u.size < h.size ? -4 : 4,
                                background: {
                                  padding: [2, 3],
                                  radius: 2,
                                  fill: o.themeColor.bgColor,
                                  lineWidth: 1,
                                  stroke: o.themeColor.red,
                                  strokeOpacity: 0.6,
                                },
                                textStyle: {
                                  fontSize: 10,
                                  fill: o.themeColor.red,
                                },
                                withPoint: !0,
                                pointStyle: {
                                  fill: o.themeColor.red,
                                  r: 2.5,
                                  lineWidth: 1,
                                  stroke: o.themeColor.red,
                                },
                              }),
                            a
                              .guide()
                              .tag({
                                top: !0,
                                position: [h.date, u.size],
                                content: "".concat(h.last, "元"),
                                limitInPlot: !0,
                                direct: u.size > h.size ? "tl" : "bl",
                                side: 0,
                                offsetY: u.size > h.size ? -4 : 4,
                                background: {
                                  padding: [2, 3],
                                  radius: 2,
                                  fill: o.themeColor.bgColor,
                                  lineWidth: 1,
                                  stroke: o.themeColor.blue,
                                  strokeOpacity: 0.6,
                                },
                                textStyle: {
                                  fontSize: 10,
                                  fill: o.themeColor.blue,
                                },
                                withPoint: !0,
                                pointStyle: {
                                  fill: o.themeColor.blue,
                                  r: 2.5,
                                  lineWidth: 1,
                                  stroke: o.themeColor.blue,
                                },
                              }),
                            a.render())),
                        t.abrupt("return", a)
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, i);
            })();
          }),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  l(r.next(t));
                } catch (t) {
                  e(t);
                }
              },
              n = function (t) {
                try {
                  l(r.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              l = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, n);
              };
            l((r = r.apply(o, a)).next());
          })
        );
        var o, a, r;
      },
      formatData: function (t) {
        var e = this,
          i = t.length;
        if (!this.firstLoaded) {
          if (i > 60) {
            var o = this.computeStart(i);
            this.dataRange.start = 1 - o;
          } else this.dataRange.start = 0;
          (this.firstLoaded = !0), this.rangeInit();
        }
        var a = Math.floor(i * this.dataRange.start),
          r = Math.round(i * this.dataRange.end),
          n = this.isLite ? t.slice(a, r) : t,
          l = n[0] || {},
          s = +(l.shares / 1e8).toFixed(2),
          h = +(l.fund_size / 1e8).toFixed(2),
          d = +l.last,
          c = s,
          f = s,
          u = h,
          m = h,
          p = d,
          g = d,
          x = n.map(function (t) {
            var i = +(t.shares / 1e8).toFixed(2),
              o = +(t.fund_size / 1e8).toFixed(2),
              a = +t.last;
            return (
              +t.split_ratio > 0 && (e.splitPointer = t),
              i > c && (c = i),
              i < f && (f = i),
              o > u && (u = o),
              o < m && (m = o),
              a > p && (p = a),
              a < g && (g = a),
              {
                date: t.date || "",
                shares: i,
                size: o,
                last: a,
                split: +t.split_ratio,
              }
            );
          });
        return (
          (this.maxMinData = {
            maxShare: c,
            minShare: f,
            maxSize: u,
            minSize: m,
            maxLast: p,
            minLast: g,
          }),
          x
        );
      },
    },
  };
Array || (e.resolveComponent("f2") + e.resolveComponent("RangeSlider"))();
var a = e._export_sfc(o, [
  [
    "render",
    function (t, i, o, a, r, n) {
      return e.e(
        { a: !n.isLite },
        n.isLite
          ? {}
          : {
              b: e.o(function () {
                return n.openDialog && n.openDialog.apply(n, arguments);
              }, 2911),
            },
        { c: n.isLite },
        n.isLite ? { d: e.t(n.updateTime) } : { e: e.t(n.updateTime) },
        {
          f: e.t(n.holdTitle),
          g: e.o(n.setHoldScalleChart, 2912),
          h: e.p({
            chartId: "holdScaleChart",
            cClass: "hold-scale-chart",
            cStyle: n.cStyle,
            config: n.chartConfig,
            refreshHash: r.chartHash,
          }),
          i: n.isLite,
        },
        n.isLite
          ? {
              j: e.sr("sliderETFhold", "227bcac1-1"),
              k: e.o(n.rangeChange, 2913),
              l: e.o(n.rangeInit, 2914),
            }
          : {},
        { m: n.isLite },
        n.isLite
          ? {
              n: 1 === r.type ? n.themeColor.orange : "",
              o: 1 === r.type ? n.themeColor.orange : "",
              p: e.o(function (t) {
                return n.changeType(1);
              }, 2915),
              q: 2 === r.type ? n.themeColor.red : "",
              r: 2 === r.type ? n.themeColor.red : "",
              s: e.o(function (t) {
                return n.changeType(2);
              }, 2916),
            }
          : {
              t: 1 === r.type ? n.themeColor.orange : "",
              v: 1 === r.type ? n.themeColor.orange : "",
              w: e.o(function (t) {
                return n.changeType(1);
              }, 2917),
              x: 2 === r.type ? n.themeColor.red : "",
              y: 2 === r.type ? n.themeColor.red : "",
              z: e.o(function (t) {
                return n.changeType(2);
              }, 2918),
            },
        { A: r.showTooltip && r.tooTipInfo.data },
        r.showTooltip && r.tooTipInfo.data
          ? e.e(
              { B: e.t(r.tooTipInfo.data.date), C: 1 === r.type },
              1 === r.type ? { D: e.t(r.tooTipInfo.data.shares) } : {},
              { E: 2 === r.type },
              2 === r.type ? { F: e.t(r.tooTipInfo.data.size) } : {},
              {
                G: e.t(r.tooTipInfo.data.last),
                H: e.n(r.left ? "canvas-toolTip-left" : "canvas-toolTip-right"),
              }
            )
          : {},
        { I: n.isLite ? 1 : "", J: n.isDark ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-227bcac1"],
]);
wx.createComponent(a);
