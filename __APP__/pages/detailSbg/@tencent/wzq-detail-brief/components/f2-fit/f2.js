var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../common/vendor.js"),
  e = function (t, e) {
    return new Promise(function (r) {
      document ||
        n.wx$1
          .createSelectorQuery()
          .in(e)
          .select(t)
          .fields({ node: !0, size: !0, rect: !0 })
          .exec(function (t) {
            var n = (t && t[0]) || {};
            r(n);
          });
    });
  };
function r(t) {
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
          (r = this),
          null,
          (c = t().mark(function () {
            var r, c, i, a, h, s, o, u, l, d, f, v, p;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = 0),
                        (c = 0),
                        (i = null),
                        (t.next = 3),
                        e(".".concat(this.cClass), this)
                      );
                    case 3:
                      return (
                        (a = t.sent),
                        (h = a.width),
                        (s = a.height),
                        (t.next = 8),
                        e(this.chartUniq, this)
                      );
                    case 8:
                      return (
                        (o = t.sent),
                        (u = o.node),
                        (r = h),
                        (c = s),
                        (i = u),
                        (this.canvasStyle = "width: "
                          .concat(r, "px; height:")
                          .concat(c, "px")),
                        (l = i.getContext("2d")),
                        (d = (function () {
                          var t = 1;
                          return (
                            document ||
                              (t = n.wx$1.getSystemInfoSync().pixelRatio),
                            t || 1
                          );
                        })()),
                        (i.width = r * d),
                        (i.height = c * d),
                        (f = {
                          context: l,
                          width: r,
                          height: c,
                          pixelRatio: d,
                          idx: this.chartId,
                        }),
                        (t.next = 16),
                        require.async("../../../../@antv/f2/es/index.js")
                      );
                    case 16:
                      return (
                        (v = t.sent),
                        (t.next = 19),
                        this.onInit.bind(this.$parent, v, f)()
                      );
                    case 19:
                      (p = t.sent) &&
                        ((this.chart = p), (this.canvasEl = p.get("el")));
                    case 21:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (t, n) {
            var e = function (t) {
                try {
                  a(c.next(t));
                } catch (t) {
                  n(t);
                }
              },
              i = function (t) {
                try {
                  a(c.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              a = function (n) {
                return n.done
                  ? t(n.value)
                  : Promise.resolve(n.value).then(e, i);
              };
            a((c = c.apply(r, null)).next());
          })
        );
        var r, c;
      },
      touchStart: function (t) {
        this.$emit("touchstart", t);
        var n = this.canvasEl;
        n && (this.isH5 || n.dispatchEvent("touchstart", r(t)));
      },
      touchMove: function (t) {
        this.$emit("touchmove", t);
        var n = this.canvasEl;
        n && (this.isH5 || n.dispatchEvent("touchmove", r(t)));
      },
      touchEnd: function (t) {
        this.$emit("touchend", t);
        var n = this.canvasEl;
        n && (this.isH5 || n.dispatchEvent("touchend", r(t)));
      },
    },
  },
  i = n._export_sfc(c, [
    [
      "render",
      function (t, e, r, c, i, a) {
        return {
          a: r.chartId,
          b: r.chartId,
          c: n.s(i.canvasStyle),
          d: n.o(function () {
            return a.touchStart && a.touchStart.apply(a, arguments);
          }, 4065),
          e: n.o(function () {
            return a.touchMove && a.touchMove.apply(a, arguments);
          }, 4066),
          f: n.o(function () {
            return a.touchEnd && a.touchEnd.apply(a, arguments);
          }, 4067),
          g: n.n(r.cClass),
          h: n.s(!a.isH5 && r.cStyle),
        };
      },
    ],
  ]);
wx.createComponent(i);
