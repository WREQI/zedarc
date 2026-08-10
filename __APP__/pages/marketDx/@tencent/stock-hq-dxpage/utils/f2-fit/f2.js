var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../common/vendor.js"),
  n = require("../../../../@antv/f2/es/index.js"),
  r = function (t, n) {
    return new Promise(function (r) {
      document ||
        e.wx$1
          .createSelectorQuery()
          .in(n)
          .select(t)
          .fields({ node: !0, size: !0, rect: !0 })
          .exec(function (t) {
            var e = (t && t[0]) || {};
            r(e);
          });
    });
  },
  i = /\b(\d+(\.\d+)?)(px|rpx)\b/;
function c(t) {
  if (t) return t.preventDefault || (t.preventDefault = function () {}), t;
}
var a = {
    name: "f2",
    inject: { f2UnitType: { default: "rpx" } },
    props: {
      type: { type: String, default: "" },
      cStyle: { type: String, default: "" },
      chartId: { type: String, default: "" },
      cClass: { type: String, default: "" },
      refreshHash: { type: String, default: "" },
      onInit: { type: Function, default: function () {} },
    },
    data: function () {
      return { chart: null, canvasEl: null, chartImg: "", canvasStyle: "" };
    },
    computed: {
      isH5: function () {
        var t = !0;
        return document || (t = !1), t;
      },
      chartUniq: function () {
        return this.chartId ? "#".concat(this.chartId) : ".f2-canvas";
      },
    },
    watch: {
      refreshHash: function () {
        this.chart && this.chart.clear && this.chart.clear(),
          (this.chart = null),
          this.oriInitChart();
      },
    },
    mounted: function () {
      this.oriInitChart();
    },
    destroyed: function () {
      this.chart && this.chart.destroy && this.chart.destroy(),
        (this.chart = null);
    },
    methods: {
      getCalcValue: function (t) {
        var e = new RegExp(i.source, "g");
        return t.replace(e, function (t, e) {
          return "".concat(parseFloat(e / 75), "rem");
        });
      },
      getRealCstyle: function (t) {
        return "rem" === this.f2UnitType ? this.getCalcValue(t) : t;
      },
      oriInitChart: function () {
        return (
          (i = this),
          null,
          (c = t().mark(function i() {
            var c, a, s, h, u, o, l, f, d, p, v, y, m;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (c = this),
                        (a = 0),
                        (s = 0),
                        (h = null),
                        (t.next = 5),
                        r(".".concat(this.cClass), c)
                      );
                    case 5:
                      return (
                        (u = t.sent),
                        (o = u.width),
                        (l = u.height),
                        (t.next = 10),
                        r(this.chartUniq, c)
                      );
                    case 10:
                      return (
                        (f = t.sent),
                        (d = f.node),
                        (a = o),
                        (s = l),
                        (h = d),
                        (this.canvasStyle = "width: "
                          .concat(a, "px; height:")
                          .concat(s, "px")),
                        (p = h.getContext("2d")),
                        (v = (function () {
                          var t = 1;
                          return (
                            document ||
                              (t = e.wx$1.getSystemInfoSync().pixelRatio),
                            t || 1
                          );
                        })()),
                        (h.width = a * v),
                        (h.height = s * v),
                        (y = {
                          context: p,
                          width: a,
                          height: s,
                          pixelRatio: v,
                          idx: this.chartId,
                        }),
                        (t.next = 18),
                        this.onInit.bind(this.$parent, n.default, y)()
                      );
                    case 18:
                      (m = t.sent) &&
                        ((this.chart = m), (this.canvasEl = m.get("el"))),
                        (t.next = 24);
                      break;
                    case 22:
                      (t.prev = 22), (t.t0 = t.catch(0));
                    case 24:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[0, 22]]
            );
          })),
          new Promise(function (t, e) {
            var n = function t(n) {
                try {
                  a(c.next(n));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  a(c.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, r);
              };
            a((c = c.apply(i, null)).next());
          })
        );
        var i, c;
      },
      touchStart: function (t) {
        if (this.isH5) {
          this.$emit("touchstart", t);
          var e = this.canvasEl;
          e && (this.isH5 || e.dispatchEvent("touchstart", c(t)));
        }
      },
      touchMove: function (t) {
        if (this.isH5) {
          this.$emit("touchmove", t);
          var e = this.canvasEl;
          e && (this.isH5 || e.dispatchEvent("touchmove", c(t)));
        }
      },
      touchEnd: function (t) {
        if (this.isH5) {
          this.$emit("touchend", t);
          var e = this.canvasEl;
          e && (this.isH5 || e.dispatchEvent("touchend", c(t)));
        }
      },
    },
  },
  s = e._export_sfc(a, [
    [
      "render",
      function (t, n, r, i, c, a) {
        return e.e(
          { a: a.isH5 },
          a.isH5
            ? {
                b: r.chartId,
                c: r.chartId,
                d: e.s(c.canvasStyle),
                e: e.o(function () {
                  return a.touchStart && a.touchStart.apply(a, arguments);
                }, 3910),
                f: e.o(function () {
                  return a.touchMove && a.touchMove.apply(a, arguments);
                }, 3911),
                g: e.o(function () {
                  return a.touchEnd && a.touchEnd.apply(a, arguments);
                }, 3912),
              }
            : { h: r.chartId, i: r.chartId, j: e.s(c.canvasStyle) },
          { k: e.n(r.cClass), l: e.s(!a.isH5 && a.getRealCstyle(r.cStyle)) }
        );
      },
    ],
  ]);
wx.createComponent(s);
