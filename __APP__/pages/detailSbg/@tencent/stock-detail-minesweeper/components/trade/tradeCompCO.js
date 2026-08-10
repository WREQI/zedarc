require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../common/vendor.js"),
  e = {
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
          main_list: { text: "元", value: 1 },
          lgt_list: { text: "股", value: 1 },
        },
        lgtToolTip: {
          time: "",
          isShow: !1,
          position: "left",
          holdingRatio: "",
          holdingQuantity: "",
          flowIn: "",
          flowInType: "flat",
          closePrice: "",
        },
        ontouch: !1,
        touchTimeOut: null,
        longPress: !1,
        mainListChartShow: !1,
        lgtListChartShow: !1,
        mainListChartHash: "",
        lgtListChartHash: "",
        initLgtListChartConfig: { padding: [0, 1, 20, 1] },
        mainListChartConfig: { padding: [13, 1, 18, 1] },
      };
    },
    activated: function () {
      (this.mainListChartHash = Math.random()),
        (this.lgtListChartHash = Math.random());
    },
    created: function () {
      this.calcM("main_list"),
        this.calcLgt("lgt_list"),
        i.StockBridge.busOn("market-detail-act-fold", this.handleActFold);
    },
    destroyed: function () {
      i.StockBridge.busOff("market-detail-act-fold", this.handleActFold),
        this.destoryChart();
    },
    methods: {
      handleActFold: function (t) {
        var i = t[this.type];
        (i || Object.prototype.hasOwnProperty.call(t, "foldedAll")) &&
          ((i && i.folded) ||
            t.foldedAll ||
            (this.mainListChartShow || (this.mainListChartShow = !0),
            this.data.show_lgt &&
              (this.lgtListChartShow || (this.lgtListChartShow = !0))));
      },
      getCSSVar: function (t) {
        return getComputedStyle(document.body || "div").getPropertyValue(t);
      },
      initMainListChart: function (t) {
        var i = t.chart,
          e = t.config;
        this.createChart(i, e, this.data.main_list, 0);
      },
      initLgtListChart: function (t) {
        var i = t.chart,
          e = t.config;
        this.createChartLgt(i, e, this.data.lgt_list, 1);
      },
      startPreventPop: function (t) {
        var i = this;
        (this.ontouch = !0),
          this.touchTimeOut &&
            (clearTimeout(this.touchTimeOut), (this.touchTimeOut = null)),
          (this.touchTimeOut = setTimeout(function () {
            var e;
            (i.longPress = !0),
              null == (e = i.$refs.stockNorthBound) || e.dispatchEvent(t);
          }, 500));
      },
      preventPop: function (t) {
        var i = this;
        this.longPress
          ? (t.preventDefault(),
            setTimeout(function () {
              var e;
              null == (e = i.$refs.stockNorthBound) || e.dispatchEvent(t);
            }, 0))
          : clearTimeout(this.touchTimeOut);
      },
      endPreventPop: function (t) {
        var i = this;
        this.longPress &&
          setTimeout(function () {
            var e;
            null == (e = i.$refs.stockNorthBound) || e.dispatchEvent(t),
              clearTimeout(i.touchTimeOut),
              (i.touchTimeOut = null),
              (i.lgtToolTip.isShow = !1);
          }, 0),
          (this.ontouch = !1),
          (this.longPress = !1),
          clearTimeout(this.touchTimeOut);
      },
      destoryChart: function (t) {
        try {
          t || 0 === t
            ? (this.chart[t] && this.chart[t].destroy(),
              (this.mainListChartShow = !1))
            : (this.chart.map(function (t) {
                t && t.destroy();
              }),
              (this.chart = []),
              (this.lgtListChartShow = !1));
        } catch (t) {}
      },
      setGoTeach: function () {
        var t = this.data.tag,
          e = t.module,
          o = t.tag_name_eng,
          n =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(e, "&pos=")
              .concat(o);
        i.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: o,
          tab: e,
        }),
          i.StockBridge.openExtraWebview(n);
      },
      calcFlowUnit: function (t) {
        return Number(t) > 1e8 || Number(t) < -1e8
          ? { text: "亿元", value: 1e8 }
          : Number(t) > 1e4 || Number(t) < -1e4
          ? { text: "万元", value: 1e4 }
          : { text: "元", value: 1 };
      },
      calcM: function (t) {
        if (this.data[t] && this.data[t].length) {
          var i = this.data[t].reduce(function (t, i) {
            return Math.abs(t.inflow) > Math.abs(i.inflow) ? t : i;
          }).inflow;
          this.unit[t] = this.calcFlowUnit(i);
        }
      },
      calcLgt: function (t) {
        if (this.data[t] && this.data[t].length) {
          var i = this.data[t].reduce(function (t, i) {
            return t.holding_quantity > i.holding_quantity ? t : i;
          }).holding_quantity;
          Number(i) > 1e8
            ? (this.unit[t] = { text: "亿股", value: 1e8 })
            : Number(i) > 1e4
            ? (this.unit[t] = { text: "万股", value: 1e4 })
            : (this.unit[t] = { text: "股", value: 1 });
        }
      },
      createChart: function (e, o, n, a) {
        var r = this;
        if (!n || n.length < 1) this.destoryChart(a);
        else {
          this.chart[a] = e;
          var l = this.chart[a],
            s = n.map(function (t) {
              return (
                (t.ratio = parseFloat(t.ratio)),
                (t.value = parseFloat(+t.inflow)),
                t
              );
            }),
            h = s.length <= 5,
            c = h ? 0.15 : 0.12,
            u = h ? 0.9 : 0.95,
            d = h ? 24 : 6;
          l.source(s, {
            time: { range: [c, u] },
            value: { tickCount: 4 },
            ratio: {
              tickCount: 4,
              min: Math.min.apply(
                Math,
                t(
                  s.map(function (t) {
                    return t.ratio;
                  })
                )
              ),
            },
          }),
            l.legend(!1).tooltip(!1),
            l.animate(!1),
            l.axis("time", {
              labelOffset: 5,
              label: function (t, e, o) {
                if (0 == e || e == o - 1 || h) {
                  var n = i.dayjs(t, "YYYYMMDD").format("MM-DD"),
                    a = h ? "center" : 0 == e ? "start" : "end";
                  return {
                    fill: r.themeColor.lightGray2,
                    fontSize: 10,
                    text: n,
                    textAlign: a,
                    fontFamily: "west" === r.fontSkin ? "stockFont" : "",
                  };
                }
                return { text: "" };
              },
              line: { stroke: this.themeColor.borderLight },
            }),
            this.setChartBorder(),
            l
              .interval()
              .position("time*value")
              .size(d)
              .color("value", function (t) {
                return t > 0 ? r.themeColor.bigRed : r.themeColor.bigGreen;
              }),
            l
              .line()
              .position("time*ratio")
              .size(2)
              .color(this.themeColor.orange);
          var m = [];
          l.axis("ratio", {
            line: !1,
            labelOffset: -(l.get("width") - 4),
            grid: function (t, i, e) {
              return {
                lineWidth: 0 === i || i === e - 1 ? 0 : 0.5,
                stroke: r.themeColor.borderLight,
                lineDash: [],
              };
            },
            label: function (t, i, e) {
              var o = l.get("geoms")[1]._attrs.scales.ratio,
                n = o.ticks.length === o.values.length ? e : o.tickCount,
                a = "".concat(0 === t ? 0 : Number(t).toFixed(2), "%");
              if (m.includes(a)) return null;
              if ((m.push(a), i < n)) {
                var s = {
                  fill: r.themeColor.lightGray2,
                  fontSize: 10,
                  text: a,
                  textAlign: "start",
                  top: !0,
                  fontFamily: "west" === r.fontSkin ? "stockFont" : "",
                };
                return (
                  0 === i
                    ? (s.textBaseline = "bottom")
                    : i === n - 1 && (s.textBaseline = "top"),
                  s
                );
              }
            },
          }),
            l.axis("value", !1),
            l.render();
        }
      },
      createChartLgt: function (t, e, o, n) {
        var a = this;
        if (!o || o.length < 1) this.destoryChart(n);
        else {
          this.chart[n] = t;
          var r = this.chart[n],
            l = o.map(function (t) {
              return (
                (t.ratio = parseFloat(+t.holding_ratio)),
                (t.value = parseFloat(+t.holding_quantity)),
                t
              );
            });
          r.source(l, {
            time: { range: [0, 1], tickCount: 2 },
            value: { tickCount: 4 },
            ratio: { tickCount: 100 },
          }),
            r.legend(!1),
            r.animate(!1);
          var s = this;
          r.tooltip({
            snap: !1,
            crosshairsType: "xy",
            offsetY: 0,
            showTooltipMarker: !1,
            crosshairsStyle: { stroke: "var(--color-heavygray)", lineWidth: 1 },
            showItemMarker: !1,
            onShow: function () {
              s.lgtToolTip.isShow = !0;
            },
            custom: !0,
            onChange: function (t) {
              var i,
                e,
                n,
                a,
                r,
                l,
                h,
                c,
                u,
                d,
                m = t.items || [];
              if (m.length) {
                var g =
                    null == (e = null == (i = m[0]) ? void 0 : i.origin)
                      ? void 0
                      : e.time,
                  f = -1;
                if (
                  (g &&
                    (f = o.findIndex(function (t) {
                      return t.time === g;
                    })),
                  f >= 0)
                ) {
                  var p,
                    v,
                    C,
                    y,
                    x = "".concat(g.slice(4, 6), "-").concat(g.slice(6, 8)),
                    T =
                      null == (a = null == (n = m[0]) ? void 0 : n.origin)
                        ? void 0
                        : a.holding_ratio;
                  T && (p = "".concat(T, "%"));
                  var w =
                    null == (l = null == (r = m[0]) ? void 0 : r.origin)
                      ? void 0
                      : l.holding_quantity;
                  w &&
                    (v =
                      (w / s.unit.lgt_list.value).toFixed(2) +
                      s.unit.lgt_list.text);
                  var _ =
                    null == (c = null == (h = m[0]) ? void 0 : h.origin)
                      ? void 0
                      : c.inflow;
                  if (_) {
                    var b = 1e4 * _,
                      L = s.calcFlowUnit(b);
                    (C = (b / L.value).toFixed(1) + L.text),
                      (y = b > 0 ? "red" : b < 0 ? "green" : "flat");
                  }
                  var S =
                      null == (d = null == (u = m[0]) ? void 0 : u.origin)
                        ? void 0
                        : d.close,
                    k = f < o.length / 2 ? "right" : "left";
                  s.lgtToolTip = {
                    time: x,
                    holdingRatio: p,
                    holdingQuantity: v,
                    flowIn: C,
                    flowInType: y,
                    closePrice: S,
                    position: k,
                    isShow: !0,
                  };
                }
              }
            },
            onHide: function () {
              s.lgtToolTip.isShow = !1;
            },
          });
          var h = l[0].time.slice(0, 4),
            c = l[l.length - 1].time.slice(0, 4);
          r.axis("time", {
            labelOffset: 10,
            label: function (t, e) {
              var o = i
                .dayjs(t, "YYYYMMDD")
                .format(h === c ? "MM-DD" : "YYYY-MM-DD");
              return {
                fill: a.themeColor.lightGray2,
                fontSize: 10,
                text: o,
                textAlign: 0 === e ? "start" : "end",
                textOffset: 10,
                fontFamily: "west" === a.fontSkin ? "stockFont" : "",
              };
            },
            line: { stroke: this.themeColor.borderLight },
          }),
            this.setChartBorder(),
            r
              .line()
              .position("time*value")
              .size(2)
              .color(this.themeColor.orange),
            r.line().position("time*ratio").size(2).color("#C9D0DC"),
            r.axis("value", {
              grid: function (t, i, e) {
                return {
                  lineDash: null,
                  lineWidth: 0 === i || i === e - 1 ? 0 : 0.5,
                  stroke: a.themeColor.borderLight,
                };
              },
              labelOffset: -4,
              label: function (t, i, e) {
                return {
                  fill: a.themeColor.lightGray2,
                  fontSize: 10,
                  text: (t / a.unit.lgt_list.value).toFixed(2),
                  textAlign: "start",
                  textBaseline: i === e - 1 ? "top" : "bottom",
                  fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                };
              },
            }),
            r.axis("ratio", {
              grid: null,
              labelOffset: -4,
              label: function (t, i, e) {
                return {
                  fill: a.themeColor.lightGray2,
                  fontSize: 10,
                  text:
                    0 === i || 33 === i || 66 === i || i === e - 1
                      ? "".concat((+t).toFixed(2), "%")
                      : "",
                  textAlign: "end",
                  textBaseline: i === e - 1 ? "top" : "bottom",
                  fontFamily: "west" === a.fontSkin ? "stockFont" : "",
                };
              },
            }),
            r.render();
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
        ].map(function (i) {
          t.chart.forEach(function (e) {
            e.guide().line({
              start: i[0],
              end: i[1],
              top: !1,
              style: { stroke: t.themeColor.borderLight, lineWidth: 0.5 },
            });
          });
        });
      },
    },
  };
Array || i.resolveComponent("f2")();
var o = i._export_sfc(e, [
  [
    "render",
    function (t, e, o, n, a, r) {
      return i.e(
        { a: o.data.main_comment },
        o.data.main_comment
          ? i.e(
              { b: o.data.main_comment },
              o.data.main_comment
                ? {
                    c: i.t(o.data.main_comment),
                    d: i.o(function () {
                      return r.setGoTeach && r.setGoTeach.apply(r, arguments);
                    }, 3758),
                  }
                : {}
            )
          : {},
        { e: o.data.main_list.length > 0 },
        o.data.main_list.length > 0
          ? i.e(
              {
                f: i.t(a.unit.main_list.text),
                g: i.t(a.unit.main_list.text),
                h: a.mainListChartShow,
              },
              a.mainListChartShow
                ? {
                    i: i.o(r.initMainListChart, 3759),
                    j: i.p({
                      chartId: "mainListChart",
                      cClass: "mainListChart",
                      cStyle: "width: 100%;height: 348rpx;",
                      config: a.mainListChartConfig,
                      refreshHash: a.mainListChartHash,
                    }),
                  }
                : {}
            )
          : {},
        { k: o.data.show_lgt },
        o.data.show_lgt
          ? i.e(
              { l: o.data.lgt_comment },
              o.data.lgt_comment
                ? i.e(
                    { m: o.data.lgt_comment },
                    o.data.lgt_comment
                      ? {
                          n: i.t(o.data.lgt_comment),
                          o: i.o(function () {
                            return (
                              r.setGoTeach && r.setGoTeach.apply(r, arguments)
                            );
                          }, 3760),
                        }
                      : {}
                  )
                : {},
              { p: o.data.lgt_list.length > 0 },
              o.data.lgt_list.length > 0
                ? i.e(
                    {
                      q: i.t(a.unit.lgt_list.text),
                      r: i.o(function () {
                        return (
                          r.startPreventPop &&
                          r.startPreventPop.apply(r, arguments)
                        );
                      }, 3761),
                      s: i.o(function () {
                        return r.preventPop && r.preventPop.apply(r, arguments);
                      }, 3762),
                      t: i.o(function () {
                        return (
                          r.endPreventPop && r.endPreventPop.apply(r, arguments)
                        );
                      }, 3763),
                      v: a.lgtListChartShow,
                    },
                    a.lgtListChartShow
                      ? {
                          w: i.sr("stockNorthBound", "377be398-1"),
                          x: i.o(r.initLgtListChart, 3764),
                          y: i.p({
                            chartId: "lgtListChart",
                            cClass: "lgtListChart",
                            cStyle: "width: 100%;height: 348rpx;",
                            config: a.initLgtListChartConfig,
                            refreshHash: a.lgtListChartHash,
                          }),
                        }
                      : {},
                    { z: a.lgtToolTip.isShow },
                    a.lgtToolTip.isShow
                      ? {
                          A: i.t(a.lgtToolTip.time),
                          B: i.t(a.lgtToolTip.holdingRatio),
                          C: i.t(a.lgtToolTip.holdingQuantity),
                          D: i.t(a.lgtToolTip.flowIn),
                          E: i.n(a.lgtToolTip.flowInType),
                          F: i.t(a.lgtToolTip.closePrice),
                          G: i.n(a.lgtToolTip.position),
                        }
                      : {}
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-377be398"],
]);
wx.createComponent(o);
