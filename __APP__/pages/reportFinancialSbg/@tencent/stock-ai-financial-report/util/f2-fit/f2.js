var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@antv/f2/es/index.js"),
  n = require("../../../../../../common/vendor.js"),
  r = function (t, e) {
    return new Promise(function (r) {
      document ||
        n.wx$1
          .createSelectorQuery()
          .in(e)
          .select(t)
          .fields({ node: !0, size: !0, rect: !0 })
          .exec(function (t) {
            var e = (t && t[0]) || {};
            r(e);
          });
    });
  };
function i(t) {
  if (t) return t.preventDefault || (t.preventDefault = function () {}), t;
}
var c = {
    name: "f2",
    props: {
      type: { type: String, default: "" },
      cStyle: { type: String, default: "" },
      chartId: { type: String, default: "" },
      cClass: { type: String, default: "" },
      refreshHash: { type: [String, Number], default: "" },
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
      oriInitChart: function () {
        return (
          (i = this),
          null,
          (c = t().mark(function i() {
            var c, a, s, h, u, o, l, d, f, v, p, m, y;
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
                        (d = t.sent),
                        (f = d.node),
                        (a = o),
                        (s = l),
                        (h = f),
                        (this.canvasStyle = "width: "
                          .concat(a, "px; height:")
                          .concat(s, "px")),
                        (v = h.getContext("2d")),
                        (p = (function () {
                          var t = 1;
                          return (
                            document ||
                              (t = n.wx$1.getSystemInfoSync().pixelRatio),
                            t || 1
                          );
                        })()),
                        (h.width = a * p),
                        (h.height = s * p),
                        (m = {
                          context: v,
                          width: a,
                          height: s,
                          pixelRatio: p,
                          idx: this.chartId,
                        }),
                        (y = null),
                        (t.next = 19),
                        this.onInit.bind(this.$parent, e.default, m)()
                      );
                    case 19:
                      (y = t.sent) &&
                        ((this.chart = y), (this.canvasEl = y.get("el"))),
                        (t.next = 25);
                      break;
                    case 23:
                      (t.prev = 23), (t.t0 = t.catch(0));
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[0, 23]]
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
        this.$emit("touchstart", t);
        var e = this.canvasEl;
        e && (this.isH5 || e.dispatchEvent("touchstart", i(t)));
      },
      touchMove: function (t) {
        this.$emit("touchmove", t);
        var e = this.canvasEl;
        e && (this.isH5 || e.dispatchEvent("touchmove", i(t)));
      },
      touchEnd: function (t) {
        this.$emit("touchend", t);
        var e = this.canvasEl;
        e && (this.isH5 || e.dispatchEvent("touchend", i(t)));
      },
    },
  },
  a = n._export_sfc(c, [
    [
      "render",
      function (t, e, r, i, c, a) {
        return {
          a: r.chartId,
          b: r.chartId,
          c: n.s(c.canvasStyle),
          d: n.n(r.cClass),
          e: n.s(!a.isH5 && r.cStyle),
        };
      },
    ],
  ]);
wx.createComponent(a);
