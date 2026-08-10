var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  u = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  h = require("../../../../../../common/vendor.js"),
  s = require("../pages/GshgDetail.js"),
  g = function (t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : [n.time, n.buyFund],
      a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
      o =
        arguments.length > 5 && void 0 !== arguments[5]
          ? arguments[5]
          : "center",
      l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 2,
      r = null !== n.buyAvg ? 18.5 : 6;
    e
      .guide()
      .text({
        position: [i[0], i[1] || n.buyFund],
        content: n.buyFund > 1e4 ? n.showValue : n.buyFund.toFixed(0),
        style: {
          textAlign: o,
          textBaseline: "bottom",
          fontSize: 10,
          fontFamily: "stockFont",
          fill: "#E63535",
          fontWeight: 400,
          lineHeight: 14,
        },
        offsetY: +n.buyFund > 0 || !a ? -r : r,
        limitInPlot: !0,
      }),
      n.buyAvg &&
        e
          .guide()
          .text({
            position: [i[0], i[1] || n.buyFund],
            content: "".concat(parseFloat(n.buyAvg).toFixed(l), "元"),
            style: {
              textAlign: o,
              textBaseline: +n.buyFund > 0 ? "bottom" : "top",
              fontSize: 9,
              fontFamily: "stockFont",
              fill: "#F1931D",
              fontWeight: 400,
              lineHeight: 14,
            },
            offsetY: +n.buyFund > 0 || !a ? -6 : 6,
            limitInPlot: !0,
          });
  },
  d = function (t, e, n) {
    t.guide().line({
      start: e,
      end: n,
      style: {
        stroke: "#7A8499",
        lineWidth: 1,
        lineDash: [0, 1.5, 1],
        strokeOpacity: 0.5,
        fontFamily: "stockFont",
      },
    });
  };
function c(t, n, i, a) {
  var o,
    l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
    r = {
      left: i - t / 2,
      right: i + t / 2,
      top: a - n / 2,
      bottom: a + n / 2,
    },
    u = !1,
    h = e(l);
  try {
    for (h.s(); !(o = h.n()).done; ) {
      var s = o.value,
        g = {
          left: s.x - s.width / 2,
          right: s.x + s.width / 2,
          top: s.y - n / 2,
          bottom: s.y + n / 2,
        };
      if (
        (s.textAlign &&
          "right" === s.textAlign &&
          ((g.left = s.x - s.width), (g.right = s.x)),
        s.textAlign &&
          "left" === s.textAlign &&
          ((g.left = s.x), (g.right = s.x + s.width)),
        r.left < g.right &&
          r.right > g.left &&
          r.top < g.bottom &&
          r.bottom > g.top)
      ) {
        var d = 0;
        (r.right >= g.left && r.left <= g.left && r.left > 15) ||
        r.right > 99.5 ||
        (99.5 === g.right && r.right > 90) ||
        (r.left > 50 && r.right >= g.left)
          ? ((d = g.left - r.right),
            "left" === s.textAlign && (d = g.right - r.left),
            "right" === s.textAlign && (d = g.left - r.right))
          : ((r.left < g.right && r.right > g.right) || r.left < 2) &&
            ((d = g.right - r.left),
            "left" === s.textAlign && (d = g.right - r.left)),
          (i += 0 !== d ? d : 0),
          (r.left = i - t / 2),
          (r.right = i + t / 2),
          (r.top = a - n / 2),
          (r.bottom = a + n / 2),
          (u = !0);
      }
    }
  } catch (t) {
    h.e(t);
  } finally {
    h.f();
  }
  return {
    x: Math.max(Math.min(i, 100 - t / 2), t / 2),
    y: Math.max(Math.min(a, 81.5), 18.5),
    intersect: u,
    textAlign: "center",
  };
}
function y() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = 1.9 * String(t).length,
    i = 1.7 * String(e).length;
  return Math.max(n, i, 13) / 100;
}
var f = "#F1931D",
  p = {
    components: {
      f2: function () {
        return "../../../stock-union-f2/f2MP.js";
      },
    },
    mixins: [s.ChartMixin],
    props: {
      gshgData: { type: Object, default: function () {} },
      dataFixed: { type: Number, default: 2 },
      dataRange: {
        type: Object,
        default: function () {
          return {};
        },
      },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      gshgHash: { type: String, default: "" },
    },
    setup: function (n, p) {
      var b = p.emit,
        m = h.getCurrentInstance().proxy,
        F = h.ref(!0),
        v = h.ref(0),
        x = h.ref(0),
        A = h.ref(0),
        w = h.ref(0),
        M = [],
        O = h.ref(null),
        k = function (t, e) {
          m.isTouching &&
            Array.isArray(t.items) &&
            t.items.length > 0 &&
            (O.value = {
              layout: t.x < e.width / 2 ? "right" : "left",
              title: t.items[0].title,
              items: [
                { name: "回购金额", value: t.items[0].origin.showValue },
                {
                  name: "回购均价",
                  value: "".concat(
                    parseFloat(t.items[1].value).toFixed(n.dataFixed),
                    "元"
                  ),
                },
              ],
            });
        },
        C = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m.chartObj,
            e = arguments.length > 1 ? arguments[1] : void 0,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            l = arguments.length > 5 ? arguments[5] : void 0,
            r = i[o],
            u = y(
              r.showValue,
              "".concat(parseFloat(r.buyFund).toFixed(2), "元")
            ),
            h = t.getPosition(r),
            s = "center",
            f = [
              (Math.max(5, h.x) / e.width) * 100 + "%",
              (h.y / e.height) * 100 + "%",
            ];
          o >= 0.77 * i.length && (f = ["76%", (h.y / e.height) * 100 + "%"]);
          var p = c(
            100 * u,
            20,
            parseFloat(f[0]),
            parseFloat(f[1]),
            l,
            w.value > 0
          );
          if (
            (0 === o && i.length >= 7 && ((p.x = 0), (s = "left")),
            r.buyFund !== a.buyFund)
          ) {
            g(
              0,
              t,
              r,
              ["".concat(p.x, "%"), "".concat(p.y, "%")],
              !0,
              s,
              n.dataFixed
            );
            var b = [(h.x / e.width) * 100 + "%", (h.y / e.height) * 100 + "%"],
              F = [
                (h.x / e.width) * 100 + "%",
                ((p.y + 3) / e.height) * 100 + "%",
              ];
            if (Math.abs(parseFloat(F[0]) - parseFloat(p.x)) > (100 * u) / 2) {
              F[1] = parseFloat(F[1]) - 2 + "%";
              var v = parseFloat(F[0]) > parseFloat(p.x),
                x = [
                  "".concat(p.x + (v ? 100 * u * 0.5 : 100 * -u * 0.5), "%"),
                  F[1],
                ];
              Math.abs(parseFloat(x[0]) - parseFloat(F[0])) < 1 &&
                (x[0] = "".concat(parseFloat(x[0]) + (v ? -2 : 2), "%")),
                d(t, F, x);
            }
            d(t, b, F),
              l.push({ x: p.x, y: p.y, textAlign: s, width: 100 * u });
          }
        },
        j = function () {
          var h =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m.chartObj,
            s = arguments.length > 1 ? arguments[1] : void 0,
            f = arguments.length > 2 ? arguments[2] : void 0,
            p = arguments.length > 3 ? arguments[3] : void 0,
            b = arguments.length > 4 ? arguments[4] : void 0,
            F = arguments.length > 5 ? arguments[5] : void 0,
            v = f.length,
            x = f[b],
            w = y(
              x.showValue,
              "".concat(parseFloat(x.buyFund).toFixed(2), "元")
            ),
            M = h.getPosition(x),
            O = f.slice(
              Math.max(b - Math.floor(v * w * 0.66), 0),
              Math.min(b + Math.floor(v * w * 0.66), v) + 1
            ),
            k = 101,
            C = "center";
          if (O.length) {
            var j = Math.max.apply(
                Math,
                t(
                  O.map(function (t) {
                    return parseFloat(t.buyFund);
                  })
                )
              ),
              D = O.find(function (t) {
                return parseFloat(t.buyFund) === j;
              });
            k = h.getPosition(D).y;
          }
          var P,
            I = [
              "".concat(Math.max(Math.min((M.x / s.width) * 100, 90), 7), "%"),
              (Math.min(M.y, k) / s.height) * 100 + "%",
            ],
            S = c(
              100 * w,
              20,
              parseFloat(I[0]),
              parseFloat(I[1]),
              F,
              A.value > 0
            );
          if (
            (0 === b && f.length > 8 && ((S.x = 0), (C = "left")),
            x.buyFund !== p.buyFund)
          ) {
            g(
              0,
              h,
              x,
              ["".concat(S.x, "%"), "".concat(S.y, "%")],
              !0,
              C,
              n.dataFixed
            );
            var T = [(M.x / s.width) * 100 + "%", (M.y / s.height) * 100 + "%"],
              W = [(M.x / s.width) * 100 + "%", S.y - 4 + "%"];
            if (Math.abs(parseFloat(W[0]) - parseFloat(S.x)) > (100 * w) / 2) {
              W[1] = parseFloat(W[1]) - 2 + "%";
              var _ = parseFloat(W[0]) > parseFloat(S.x),
                H = [
                  "".concat(S.x + (_ ? 100 * w * 0.5 : 100 * -w * 0.5), "%"),
                  "".concat(S.y + -5, "%"),
                ];
              d(h, W, H);
            }
            d(h, T, W);
          }
          F.push(
            ((P = (function (t, n) {
              for (var i in n || (n = {})) l.call(n, i) && u(t, i, n[i]);
              if (o) {
                var a,
                  h = e(o(n));
                try {
                  for (h.s(); !(a = h.n()).done; ) {
                    i = a.value;
                    r.call(n, i) && u(t, i, n[i]);
                  }
                } catch (t) {
                  h.e(t);
                } finally {
                  h.f();
                }
              }
              return t;
            })({}, S)),
            i(P, a({ textAlign: C, width: 100 * w })))
          );
        };
      return {
        drawGshgChart: function (e) {
          var i = e.chart,
            a = e.config,
            o = n.data;
          if (
            ((x.value = Math.min.apply(
              Math,
              t(
                o.map(function (t) {
                  return t.buyAvg;
                })
              )
            )),
            (v.value = Math.max.apply(
              Math,
              t(
                o.map(function (t) {
                  return t.buyAvg;
                })
              )
            )),
            (A.value = Math.min.apply(
              Math,
              t(
                o.map(function (t) {
                  return t.buyFund;
                })
              )
            )),
            (w.value = Math.max.apply(
              Math,
              t(
                o.map(function (t) {
                  return t.buyFund;
                })
              )
            )),
            M.length !== o.length && ((M = o), b("updateRenderData", o)),
            (function (t) {
              if (!(t.length <= 0)) {
                var e = {
                  buyAvg: { min: 1 / 0, max: 0 },
                  buyFund: { min: 1 / 0, max: 0 },
                };
                t.map(function (t) {
                  +t.buyFund < e.buyFund.min &&
                    null !== t.buyFund &&
                    (e.buyFund.min = +t.buyFund),
                    +t.buyFund > e.buyFund.max && (e.buyFund.max = +t.buyFund),
                    +t.buyAvg < e.buyAvg.min &&
                      null !== t.buyAvg &&
                      (e.buyAvg.min = +t.buyAvg),
                    +t.buyAvg > e.buyAvg.max && (e.buyAvg.max = +t.buyAvg);
                }),
                  e.buyFund.max,
                  e.buyAvg.min,
                  e.buyAvg.max,
                  e.buyAvg.min,
                  e.buyAvg.max,
                  e.buyAvg.max,
                  e.buyAvg.min;
              }
            })(o),
            i.source(o, {
              time: { tickCount: o.length >= 7 ? 5 : o.length },
              buyAvg: {
                type: "linear",
                ticks: [x.value, v.value],
                range: [0, 0.75],
              },
              buyFund: {
                type: "linear",
                ticks: [A.value, w.value],
                formatter: function (t) {
                  return 0 == +t
                    ? +t
                    : ""
                        .concat(parseFloat(t) < 0 ? "-" : "")
                        .concat(s.formatNumber(Math.abs(t), 1, 0, 0));
                },
                range: [0, 0.79],
              },
            }),
            i.axis("time", {
              line: {
                stroke: "#e9ebf0",
                lineDash: null,
                lineWidth: 1,
                strokeOpacity: 0.5,
                fontFamily: "stockFont",
              },
              label: null,
            }),
            i.axis("buyAvg", {
              position: "right",
              grid: null,
              labelOffset: -0.1,
              label: null,
            }),
            i.axis("buyFund", {
              position: "left",
              grid: null,
              labelOffset: -1,
              label: null,
            }),
            o.length < 7 &&
              o.map(function (t) {
                var e = null !== t.buyAvg ? 18.5 : 6;
                i
                  .guide()
                  .text({
                    position: [t.time, t.buyFund],
                    content:
                      t.buyFund > 1e4 ? t.showValue : t.buyFund.toFixed(0),
                    style: {
                      textAlign: "center",
                      textBaseline: +t.buyFund > 0 ? "bottom" : "top",
                      fontSize: 10,
                      fontFamily: "stockFont",
                      fill: +t.buyFund > 0 ? "#E63535" : "#1CAA3C",
                      fontWeight: 400,
                      lineHeight: 14,
                    },
                    offsetY: +t.buyFund > 0 ? -e : e,
                    limitInPlot: !0,
                  }),
                  t.buyAvg &&
                    i
                      .guide()
                      .text({
                        position: [t.time, t.buyFund],
                        content: "".concat(
                          parseFloat(t.buyAvg).toFixed(n.dataFixed),
                          "元"
                        ),
                        style: {
                          textAlign: "center",
                          textBaseline: +t.buyFund > 0 ? "bottom" : "top",
                          fontSize: 9,
                          fontFamily: "stockFont",
                          fill: f,
                          fontWeight: 400,
                          lineHeight: 14,
                        },
                        offsetY: +t.buyFund > 0 ? -6 : 6,
                        limitInPlot: !0,
                      });
              }),
            i.legend(!1),
            i.tooltip({
              custom: !0,
              crosshairsType: "y",
              showCrosshairs: !0,
              showTooltipMarker: !1,
              alwaysShow: !0,
              triggerOn: [],
              onChange: function (t) {
                k(t, a);
              },
              onShow: function (t) {
                (m.showTooltips = !0), k(t, a);
              },
            }),
            i
              .interval({ startOnZero: !0 })
              .position("time*buyFund")
              .color("buyFund", function (t) {
                return +t > 0 ? "#E63535" : "#1CAA3C";
              })
              .size(Math.min(18, 130 / o.length)),
            F.value &&
              i.animate({
                line: {
                  enter: {
                    animation: "fadeIn",
                    easing: "elasticIn",
                    delay: 0,
                    duration: 1,
                  },
                  leave: {
                    animation: "fadeOut",
                    easing: "elasticOut",
                    delay: 0,
                    duration: 1,
                  },
                },
                interval: {
                  enter: {
                    animation: "groupScaleInY",
                    easing: "elasticIn",
                    delay: 0,
                    duration: 1,
                  },
                  leave: {
                    animation: "fadeOut",
                    easing: "elasticOut",
                    delay: 0,
                    duration: 1,
                  },
                },
              }),
            o.length < 7 &&
              i
                .line({ connectNulls: !0 })
                .style({ lineWidth: 1 })
                .position("time*buyAvg")
                .color(f),
            i.render(),
            (m.chartObj = i),
            !(o.length < 7))
          ) {
            var l = [],
              r = o.length,
              u = o[o.length - 1],
              h = y(
                u.showValue,
                "".concat(parseFloat(u.buyFund).toFixed(2), "元")
              ),
              d = (u.time, u.buyFund),
              c = o.slice(Math.max(r - 1 - Math.floor(r * h * 0.66), 0), r),
              p = i.getPosition(u),
              O = p.y;
            if (c.length) {
              var D = Math.max.apply(
                  Math,
                  t(
                    c.map(function (t) {
                      return parseFloat(t.buyFund);
                    })
                  )
                ),
                P = c.find(function (t) {
                  return parseFloat(t.buyFund) === D;
                });
              O = i.getPosition(P).y;
            }
            d = [r > 8 ? "100%" : "98%", (O / a.height) * 100 + "%"];
            var I = [(p.x / a.width) * 100 + "%", (p.y / a.height) * 100 + "%"],
              S = [
                (p.x / a.width) * 100 + "%",
                ((Math.min(p.y, O) - 5) / a.height) * 100 + "%",
              ];
            g(0, i, u, d, !0, "right", n.dataFixed),
              l.push({
                x: parseFloat(d[0]),
                y: parseFloat(d[1]),
                textAlign: "right",
                width: 100 * h,
              }),
              i
                .guide()
                .line({
                  start: I,
                  end: S,
                  style: {
                    stroke: "#7A8499",
                    lineWidth: 1,
                    lineDash: [0, 1.5, 1],
                    strokeOpacity: 0.5,
                    fontFamily: "stockFont",
                  },
                });
            var T = o.findIndex(function (t) {
                return parseFloat(t.buyFund) === w.value;
              }),
              W = o.findIndex(function (t) {
                return parseFloat(t.buyFund) === A.value;
              });
            (function (t, e, n) {
              var i = t,
                a = n - 1 - t,
                o = e,
                l = n - 1 - e,
                r = Math.min(i, a, o, l);
              return r === i || r === a ? t : e;
            })(T, W, r) === T
              ? (C(i, a, o, u, T, l), j(i, a, o, u, W, l))
              : (j(i, a, o, u, W, l), C(i, a, o, u, T, l)),
              i
                .line({ connectNulls: !0 })
                .style({ lineWidth: 1 })
                .position("time*buyAvg")
                .color(f),
              o.length < 13 &&
                i
                  .point()
                  .position("time*buyAvg")
                  .size(2)
                  .style("type", {
                    fill: function () {
                      return f;
                    },
                    stroke: function () {
                      return f;
                    },
                    lineWidth: 1,
                  }),
              i.render();
          }
        },
        chartConfig: { animate: !1, padding: [0, 0, 0, 0] },
        tipsData: O,
        toolTipHide: function () {
          m.showTooltips && m.hideTooltip();
        },
      };
    },
    watch: {
      showTooltips: function (t) {
        t &&
          h.StockBridge.report(
            "hq.stock_detail.depth_hg_detail_chart_touch_click"
          );
      },
    },
  };
Array || h.resolveComponent("f2")();
var b = h._export_sfc(p, [
  [
    "render",
    function (t, e, n, i, a, o) {
      return h.e(
        { a: i.tipsData },
        i.tipsData
          ? {
              b: h.t(i.tipsData.title),
              c: h.f(i.tipsData.items, function (t, e, n) {
                return { a: h.t(t.name), b: h.t(t.value), c: e };
              }),
              d: h.n(i.tipsData.layout),
            }
          : {},
        {
          e: h.sr("gshgChart", "dee137d9-0"),
          f: h.o(i.drawGshgChart, 2409),
          g: h.o(t.chartTouchStop, 2410),
          h: h.o(t.chartTouchStart, 2411),
          i: h.o(t.chartTouchMove, 2412),
          j: h.p({
            "chart-id": "gshgChart",
            "c-class": "gshgChartClass",
            "c-style": "width: 100%; height: 290rpx",
            config: i.chartConfig,
            "refresh-hash": n.gshgHash,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dee137d9"],
]);
wx.createComponent(b);
