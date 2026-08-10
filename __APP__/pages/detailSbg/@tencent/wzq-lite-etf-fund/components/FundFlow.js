var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  o = require("../../stock-hq-core/config/css-token.js"),
  i = {
    components: {
      f2: function () {
        return "../../stock-union-f2/f2MP.js";
      },
    },
    inject: ["fontSkin"],
    props: ["skin", "flowData", "dealTimeLabel"],
    data: function () {
      return {
        chartHash: "",
        dataRange: { start: 0.889, end: 1 },
        firstLoaded: !1,
        showTip: !1,
        showTooltip: !1,
        tooTipInfo: { data: {}, left: !1 },
        maxshare: 0,
        minShare: 0,
        maxLast: 0,
        minLast: 0,
        left: !1,
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
          padding: this.isLite ? [10, 4, 16, 0] : [30, 4, 16, 0],
          animate: !1,
        };
      },
      flowCount: function () {
        var t,
          e,
          o = (null == (t = this.flowData) ? void 0 : t.data) || [];
        return (
          (null == (e = o[o.length - 1]) ? void 0 : e.af_shares_chg) / 1e4
        ).toFixed(2);
      },
      flowTitle: function () {
        var t = this.flowData.desc || "",
          e = t.indexOf("，");
        return t.slice(e + 1);
      },
      chartData: function () {
        return this.flowData.data || [];
      },
      updateTime: function () {
        var t = this.chartData[this.chartData.length - 1];
        return (t && t.date) || "";
      },
      themeColor: function () {
        var t = this.isDark ? o.CSSTOKEN.BLACK : o.CSSTOKEN.DEFAULT;
        return {
          bgColor: this.isDark ? "#171d28" : "#fff",
          blackFont: t.gray || "#262e40",
          red: t.bigBred || "#e63535",
          green: t.bigGreen || "#1CAA3C",
          gray: t.lightGray1 || "#7a8499",
          borderLight: t.borderLight || "#e9ebf0",
          orange: t.orange || "#ff891e",
          blue: t.bigBlue || "#3077ec",
          lightGray1: t.lightGray1 || "#7a8499",
          lightGray2: t.lightGray2 || "#98a0b3",
        };
      },
    },
    created: function () {},
    methods: {
      computeStart: function (t) {
        return 60 / t;
      },
      rangeChange: function (t) {
        e.StockBridge.report("hq.stock_detail.fundhk.history.click"),
          (this.dataRange &&
            this.dataRange.start === t.start &&
            this.dataRange.end === t.end) ||
            ((this.dataRange = t), (this.chartHash = Math.random()));
      },
      rangeInit: function () {
        var t = this;
        this.$nextTick(function () {
          var e;
          null == (e = t.$refs.rangeSliderEtfFlow) ||
            e.setDefaultRange(t.dataRange);
        });
      },
      openDialog: function () {
        e.StockBridge.report("hq.stock_detail.fund.fundflow.smal.i_click"),
          e.StockBridge.modal({
            title: "资金流向",
            content:
              "ETF资金流向采用一级市场的申赎数据，这也是目前机构研究的关键数据。因为一级市场申赎参与者多为机构，他们对于股价趋势的判断更具代表性。ETF场外申购是指投资者用一篮子股票换取ETF基金份额。ETF净申购份额增加，代表有资金看好该ETF，通过场外申购的方式持有该ETF。净申购份额越多，看好程度越强烈，反之亦然。",
            showCancel: !1,
            confirmText: "我知道了",
          });
      },
      getColor: function (t) {
        return 0 === t
          ? this.themeColor.gray
          : t > 0
          ? this.themeColor.red
          : this.themeColor.green;
      },
      goTeach: function () {
        e.StockBridge.report("hq.stock_detail.fund.fundflow.teach_click"),
          e.StockRouter.routeTo({
            name: "informationSubject",
            query: {
              id: "TN20221115142525846acc3c",
              type: 1,
              articleStyle: "fullTeach",
            },
          });
      },
      setFundflowchart: function (o) {
        return (
          (i = this),
          (n = arguments),
          (r = function (o) {
            var i = this,
              n = o.chart,
              r = o.config;
            return t().mark(function o() {
              var a, l, s, c, u, h;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = i.formatData(i.chartData)),
                        i.isLite
                          ? n.source(a, {
                              date: { tickCount: 2, range: [0, 1] },
                              value: {
                                tickCount: 122,
                                type: "linear",
                                max: i.maxshare,
                                min: i.minShare,
                                formatter: function (t) {
                                  return (+t).toFixed(2);
                                },
                              },
                              last: {
                                tickCount: 122,
                                max: i.maxLast,
                                min: i.minLast,
                                type: "linear",
                                formatter: function (t) {
                                  return (+t).toFixed(3);
                                },
                              },
                            })
                          : n.source(a, {
                              date: {
                                tickCount: 2,
                                type: "timeCat",
                                mask: "YYYY-MM-DD",
                                range: [0, 1],
                              },
                              value: {
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
                        n.legend(!1),
                        i.isLite
                          ? (n.axis("value", {
                              position: "left",
                              grid: null,
                              line: null,
                              labelOffset: 0,
                              label: null,
                            }),
                            n.axis("last", {
                              position: "right",
                              grid: null,
                              labelOffset: 0,
                              line: null,
                              label: null,
                            }))
                          : (n.axis("value", {
                              position: "left",
                              grid: {
                                stroke: i.themeColor.borderLight,
                                lineDash: null,
                                lineWidth: 1,
                                strokeOpacity: 0.5,
                              },
                              line: {
                                stroke: i.themeColor.borderLight,
                                lineDash: null,
                                lineWidth: 1,
                                strokeOpacity: 0.5,
                              },
                              labelOffset: 0,
                              label: function (t, e, o) {
                                var n = {
                                  textAlign: "start",
                                  fill: i.themeColor.lightGray2,
                                  textBaseline: "bottom",
                                  fontFamily:
                                    "west" === i.fontSkin ? "stockFont" : "",
                                };
                                return (
                                  e === o - 1 &&
                                    ((n.text = "净申购\n".concat(t)),
                                    (n.lineHeight = 18)),
                                  n
                                );
                              },
                            }),
                            n.axis("last", {
                              position: "right",
                              grid: null,
                              labelOffset: 0,
                              line: {
                                stroke: i.themeColor.borderLight,
                                lineDash: null,
                                lineWidth: 1,
                                strokeOpacity: 0.5,
                              },
                              label: function (t, e, o) {
                                var n = {
                                  textAlign: "end",
                                  fill: i.themeColor.lightGray2,
                                  textBaseline: "bottom",
                                  fontFamily:
                                    "west" === i.fontSkin ? "stockFont" : "",
                                };
                                return (
                                  e === o - 1 &&
                                    ((n.text = "收盘价\n".concat(t)),
                                    (n.lineHeight = 18)),
                                  n
                                );
                              },
                            })),
                        n.axis("date", {
                          grid: null,
                          line: {
                            stroke: i.themeColor.borderLight,
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          labelOffset: 4,
                          label: function (t, e, o) {
                            var n = {
                              text: i.dealTimeLabel(t),
                              textAlign: "center",
                              fill: i.themeColor.gray,
                              fontFamily: "stockFont",
                              fontSize: 10,
                            };
                            return (
                              0 === e && (n.textAlign = "start"),
                              e > 0 && e === o - 1 && (n.textAlign = "end"),
                              n
                            );
                          },
                        }),
                        (l = r.width / 2),
                        n.tooltip({
                          custom: !0,
                          showTooltipMarker: !1,
                          showCrosshairs: !0,
                          triggerOn: ["touchstart", "touchmove"],
                          triggerOff: "touchend",
                          crosshairsType: "y",
                          crosshairsStyle: {
                            stroke: i.themeColor.blackFont,
                            lineWidth: 1,
                          },
                          onChange: function (t) {
                            var o = (t || {}).items,
                              n = void 0 === o ? [] : o;
                            (i.tooTipInfo.data = n[0].origin || {}),
                              (i.left = t.x > l),
                              i.showTooltip ||
                                e.StockBridge.report(
                                  "hq.detail.etffund.fundflow.tooltip.exposure"
                                ),
                              (i.showTooltip = !0);
                          },
                          onHide: function () {
                            i.showTooltip = !1;
                          },
                        }),
                        n
                          .interval()
                          .position("date*value")
                          .color("type", function (t) {
                            return "up" === t
                              ? i.themeColor.red
                              : i.themeColor.green;
                          })
                          .adjust("stack"),
                        n
                          .line()
                          .position("date*last")
                          .color(i.isLite ? "#C9D0DC" : i.themeColor.blue)
                          .size(1),
                        (s = a[a.length - 1]),
                        n.render(),
                        i.isLite ||
                          ((c = n.getPosition({ date: s.date, last: s.last })),
                          (u = n.getRecord(c)),
                          n
                            .guide()
                            .tag({
                              top: !0,
                              position: [s.date, u.value],
                              content: "".concat(s.last, "元"),
                              limitInPlot: !0,
                              direct: "tl",
                              side: 0,
                              offsetY: -4,
                              background: {
                                padding: [2, 3],
                                radius: 2,
                                fill: i.themeColor.bgColor,
                                lineWidth: 1,
                                stroke: i.themeColor.blue,
                                strokeOpacity: 0.6,
                                fillOpacity: 0.9,
                              },
                              textStyle: {
                                fontSize: 10,
                                fill: i.themeColor.blue,
                              },
                              withPoint: !0,
                              pointStyle: {
                                fill: i.themeColor.blue,
                                r: 2.5,
                                lineWidth: 1,
                                stroke: i.themeColor.blue,
                              },
                            }),
                          (h = i.computePosition(s)),
                          n
                            .guide()
                            .line({
                              start: [s.date, h.y],
                              end: [s.date, s.value],
                              style: { stroke: h.color, lineDash: [2] },
                            }),
                          n
                            .guide()
                            .tag({
                              top: !0,
                              position: [s.date, h.y],
                              content: "".concat(s.value, "万份"),
                              limitInPlot: !0,
                              direct: "tc",
                              side: 0,
                              offsetY: 0,
                              background: {
                                padding: [2, 3],
                                radius: 2,
                                fill: i.themeColor.bgColor,
                                lineWidth: 1,
                                stroke: h.color,
                                strokeOpacity: 0.6,
                                fillOpacity: 0.9,
                              },
                              textStyle: { fontSize: 10, fill: h.color },
                              withPoint: !1,
                            }),
                          n.render()),
                        t.abrupt("return", n)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, o);
            })();
          }),
          new Promise(function (t, e) {
            var o = function (t) {
                try {
                  l(r.next(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (t) {
                try {
                  l(r.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              l = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, a);
              };
            l((r = r.apply(i, n)).next());
          })
        );
        var i, n, r;
      },
      computePosition: function (t) {
        if (t.value >= 0) {
          var e = (this.maxshare - t.value) / 3;
          return { y: t.value + e, color: this.themeColor.red };
        }
        var o = (t.value - this.minShare) / 3;
        return { y: t.value - o, color: this.themeColor.green };
      },
      formatData: function (t) {
        var e = t,
          o = e[0] || {},
          i = +(o.af_shares_chg / 1e4).toFixed(2),
          n = +o.last,
          r = i,
          a = i,
          l = n,
          s = n,
          c = e.map(function (t) {
            var e = t.date || "",
              o = +(t.af_shares_chg / 1e4).toFixed(2) || 0,
              i = +t.last;
            return (
              o > r && (r = o),
              o < a && (a = o),
              i > l && (l = i),
              i < s && (s = i),
              { date: e, value: o, last: i, type: o >= 0 ? "up" : "down" }
            );
          });
        return (
          (this.maxshare = r),
          (this.minShare = a),
          (this.maxLast = l),
          (this.minLast = s),
          c
        );
      },
    },
  };
Array || e.resolveComponent("f2")();
var n = e._export_sfc(i, [
  [
    "render",
    function (t, o, i, n, r, a) {
      return e.e(
        { a: !a.isLite },
        a.isLite
          ? {}
          : {
              b: e.o(function () {
                return a.openDialog && a.openDialog.apply(a, arguments);
              }, 2908),
            },
        { c: a.isLite },
        a.isLite ? { d: e.t(a.updateTime) } : { e: e.t(a.updateTime) },
        {
          f: e.t(a.flowCount),
          g: a.getColor(+a.flowCount),
          h: e.t(a.flowTitle),
          i: e.o(a.setFundflowchart, 2909),
          j: e.p({
            chartId: "fundflowchart",
            cClass: "flow-chart",
            cStyle: a.cStyle,
            refreshHash: r.chartHash,
            config: a.chartConfig,
          }),
          k: r.showTooltip && r.tooTipInfo.data,
        },
        r.showTooltip && r.tooTipInfo.data
          ? {
              l: e.t(r.tooTipInfo.data.date),
              m: e.t(r.tooTipInfo.data.value),
              n: a.getColor(r.tooTipInfo.data.value),
              o: e.t(r.tooTipInfo.data.last),
              p: e.n(r.left ? "canvas-toolTip-left" : "canvas-toolTip-right"),
            }
          : {},
        { q: !a.isLite },
        a.isLite
          ? {}
          : {
              r: e.o(function () {
                return a.goTeach && a.goTeach.apply(a, arguments);
              }, 2910),
            },
        { s: a.isLite ? 1 : "", t: a.isDark ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-bea67c93"],
]);
wx.createComponent(n);
