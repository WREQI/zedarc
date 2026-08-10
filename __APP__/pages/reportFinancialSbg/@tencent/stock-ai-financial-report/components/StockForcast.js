var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  f = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (t, e, r) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  u = require("../api/financialReportUtil.js"),
  p = require("../../../../../common/vendor.js"),
  s = {
    options: { styleIsolation: "shared" },
    components: {
      f2: function () {
        return "../util/f2-fit/f2.js";
      },
    },
    props: { profitForcast: {}, theme: "" },
    data: function () {
      return { chartHash: Math.random() };
    },
    watch: {
      theme: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          t && e && t !== e && (this.chartHash = Math.random());
        },
      },
      profitForcast: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          t &&
            e &&
            (t.net_profit_comment !== e.net_profit_comment ||
              t.net_profit_unit !== e.net_profit_unit) &&
            (this.chartHash = Math.random());
        },
      },
    },
    computed: {
      pureProfitData: function () {
        var t = (this.profitForcast || {}).net_profit_list,
          e = this.profitForcast.net_profit_unit || "";
        return { origin: t, deal: this.formatPureProfitData(t, e), unit: e };
      },
      profitComment: function () {
        if (this.profitForcast && this.profitForcast.net_profit_comment) {
          var t = this.profitForcast.net_profit_comment,
            e = t.indexOf("预测净利润");
          if (-1 !== e) {
            var r = t.substring(0, e + 5),
              n = "",
              o = "";
            return (
              e + 5 < t.length - 1 &&
                (o =
                  (n = t.substring(e + 5, t.length)) > 0
                    ? "+".concat(n, "%")
                    : "".concat(n, "%")),
              { profit_comment: r, profit_value: n, profit_value_str: o }
            );
          }
        }
        return null;
      },
    },
    methods: {
      textColor: function (t) {
        return u.textColorByValue(t);
      },
      formatPureProfitData: function (t, e) {
        var n = [];
        return (
          t.forEach(function (t) {
            var o = {
                time: t.year,
                value: +t.net_profit || null,
                type: "真实值(".concat(e, ")"),
                net_profit_ratio: t.net_profit_ratio,
              },
              i = {
                time: t.year,
                value: +t.net_profit_forcast || null,
                type: "预测值(".concat(e, ")"),
                net_profit_ratio: t.net_profit_ratio,
              };
            n = [].concat(r(n), [o, i]);
          }),
          n
        );
      },
      computeStart: function (t) {
        if (!(t.length <= 0)) {
          var e = 1 / 0,
            r = 0;
          return (
            t.forEach(function (t) {
              +t.value < e && null !== t.value && (e = +t.value),
                +t.value > r && (r = +t.value);
            }),
            parseInt(e - (r - e) / 3, 10)
          );
        }
      },
      drawChart: function (r, n) {
        return (
          (u = this),
          null,
          (p = t().mark(function () {
            var u,
              p,
              s,
              m = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (u = this.computeStart(this.pureProfitData.deal)),
                        (p = new r.Chart(
                          ((s = (function (t, r) {
                            for (var n in r || (r = {}))
                              f.call(r, n) && l(t, n, r[n]);
                            if (a) {
                              var o,
                                i = e(a(r));
                              try {
                                for (i.s(); !(o = i.n()).done; ) {
                                  n = o.value;
                                  c.call(r, n) && l(t, n, r[n]);
                                }
                              } catch (t) {
                                i.e(t);
                              } finally {
                                i.f();
                              }
                            }
                            return t;
                          })({}, n)),
                          o(s, i({ padding: [26, 0, 50, 0], animate: !1 })))
                        )).source(this.pureProfitData.deal, {
                          time: { type: "timeCat", mask: "YYYY" },
                          value: { ticks: [u] },
                        }),
                        p.axis("time", {
                          line: {
                            stroke: "#e9ebf0",
                            lineDash: null,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                          },
                          grid: null,
                          label: {
                            fill: "#98a0b3",
                            fontFamily: "PingFang SC",
                            fontSize: 10,
                            fontWeight: 400,
                          },
                        }),
                        p.axis("value", { line: null, grid: null }),
                        p.legend({
                          position: "bottom",
                          align: "center",
                          clickable: !1,
                          wordSpace: 10,
                          itemGap: -64,
                          nameStyle: { fill: "#7a8499", fontSize: 10 },
                          marker: function (t, e, r, n) {
                            (n.lineWidth = 2.5),
                              (n.strokeStyle = n.fillStyle),
                              n.moveTo(t - r - 3, e - 0.4),
                              n.lineTo(t + r + 3, e - 0.4),
                              n.stroke(),
                              n.fill();
                          },
                        }),
                        p
                          .line()
                          .position("time*value")
                          .color("type", ["#3077ec", "#ff891e"])
                          .size(1)
                          .shape("type", function (t) {
                            return t ===
                              "真实值(".concat(m.pureProfitData.unit, ")")
                              ? "line"
                              : "dash";
                          }),
                        p
                          .point()
                          .position("time*value")
                          .size(3)
                          .style("type", {
                            fill: function (t) {
                              return t ===
                                "真实值(".concat(m.pureProfitData.unit, ")")
                                ? "#3077ec"
                                : "black" === m.theme
                                ? "#12161F"
                                : "#fff";
                            },
                            stroke: function (t) {
                              return t ===
                                "真实值(".concat(m.pureProfitData.unit, ")")
                                ? "#3077ec"
                                : "#ff891e";
                            },
                            lineWidth: 1,
                          }),
                        this.pureProfitData.origin.forEach(function (t) {
                          t.net_profit &&
                            p
                              .guide()
                              .text({
                                top: !0,
                                position: [t.year, +t.net_profit],
                                content: t.net_profit,
                                style: {
                                  fill: "#3077ec",
                                  fontFamily: "PingFang SC",
                                  fontSize: 10,
                                  fontWeight: 400,
                                },
                                offsetY: +t.net_profit_ratio > 0 ? -15 : 15,
                              }),
                            t.net_profit_forcast &&
                              p
                                .guide()
                                .text({
                                  top: !0,
                                  position: [t.year, +t.net_profit_forcast],
                                  content: t.net_profit_forcast,
                                  style: {
                                    fill: "#ff891e",
                                    fontFamily: "PingFang SC",
                                    fontSize: 10,
                                    fontWeight: 400,
                                  },
                                  offsetY: +t.net_profit_ratio <= 0 ? -15 : 15,
                                });
                        }),
                        p.tooltip(!1),
                        p.render();
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              s,
              this
            );
          })),
          new Promise(function (t, e) {
            var r = function t(r) {
                try {
                  o(p.next(r));
                } catch (t) {
                  e(t);
                }
              },
              n = function (t) {
                try {
                  o(p.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, n);
              };
            o((p = p.apply(u, null)).next());
          })
        );
        var u, p;
      },
    },
  };
Array || p.resolveComponent("f2")();
var m = p._export_sfc(s, [
  [
    "render",
    function (t, e, r, n, o, i) {
      return p.e(
        { a: r.profitForcast },
        r.profitForcast
          ? p.e(
              { b: i.profitComment },
              i.profitComment
                ? {
                    c: p.t(i.profitComment.profit_comment),
                    d: p.t(i.profitComment.profit_value_str),
                    e: i.textColor(i.profitComment.profit_value),
                  }
                : {},
              {
                f: p.p({
                  chartId: "pefectChart",
                  cClass: "pefect-chart",
                  cStyle: "width: 100%; height: 360rpx",
                  refreshHash: o.chartHash,
                  onInit: i.drawChart,
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-40f9e057"],
]);
wx.createComponent(m);
