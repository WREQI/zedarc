var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (t, e, r) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  u = function (t, n) {
    for (var r in n || (n = {})) c.call(n, r) && s(t, r, n[r]);
    if (i) {
      var a,
        u = e(i(n));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          r = a.value;
          o.call(n, r) && s(t, r, n[r]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return t;
  },
  h = require("../../../../../common/vendor.js"),
  l = require("../../../@antv/f2/lib/plugin/tooltip.js"),
  f = {
    props: {
      type: { type: String, default: "" },
      cStyle: { type: String, default: "" },
      chartId: { type: String, default: "" },
      cClass: { type: String, default: "" },
      refreshHash: { type: String, default: "" },
      config: { type: Object, default: function () {} },
      customTooltipMarker: { type: Boolean, default: !1 },
    },
    data: function () {
      return { canvasEl: null, chartImg: "", canvasStyle: "" };
    },
    methods: {
      chartChangeData: function (t) {
        this.chart.changeData(t);
      },
    },
  },
  p = function (t, e) {
    return new Promise(function (n) {
      document ||
        h.wx$1
          .createSelectorQuery()
          .in(e)
          .select(t)
          .fields({ node: !0, size: !0, rect: !0 })
          .exec(function (t) {
            var e = (t && t[0]) || {};
            n(e);
          });
    });
  },
  d = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = l.common,
    n = l.graphic,
    r = {
      circle: function (t, e, n, r) {
        r.arc(t, e, n, 0, 2 * Math.PI, !1);
      },
      square: function (t, e, n, r) {
        r.moveTo(t - n, e - n),
          r.lineTo(t + n, e - n),
          r.lineTo(t + n, e + n),
          r.lineTo(t - n, e + n),
          r.closePath();
      },
    },
    a = (function (t) {
      var n, a;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (a = t),
        ((n = i).prototype = Object.create(a.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = a);
      var c = i.prototype;
      return (
        (c._initProperties = function () {
          t.prototype._initProperties.call(this),
            (this._attrs.canFill = !0),
            (this._attrs.canStroke = !0),
            (this._attrs.type = "marker");
        }),
        (c.getDefaultAttrs = function () {
          return { x: 0, y: 0, lineWidth: 0 };
        }),
        (c.createPath = function (t) {
          var n,
            a = this.get("attrs"),
            i = a.x,
            c = a.y,
            o = a.radius,
            s = a.symbol || "circle";
          (n = (0, e.isFunction)(s) ? s : r[s]),
            t.beginPath(),
            n(i, c, o, t, this);
        }),
        (c.calculateBox = function () {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            r = t.radius;
          return { minX: e - r, minY: n - r, maxX: e + r, maxY: n + r };
        }),
        i
      );
    })(n.Shape);
  t.default = a;
})(d);
var v = h.getDefaultExportFromCjs(d);
l.Tooltip.prototype.setMarkers = function (t) {
  void 0 === t && (t = {});
  var e,
    n,
    i = t,
    c = i.items,
    o = i.style,
    s = i.type,
    h = this._getMarkerGroup(s);
  if ("circle" === s)
    for (var f = 0, p = c.length; f < p; f++) {
      var d = c[f],
        m = new v({
          className: "tooltip-circle-marker",
          attrs: l.common.mix(
            {
              x: d.x,
              y: d.y,
              stroke: "transparent" === d.color ? "transparent" : o.fill,
            },
            ((e = u({}, o)), (n = { fill: d.color, radius: 4 }), r(e, a(n)))
          ),
        });
      h.add(m);
    }
  else h.addShape("rect", { className: "tooltip-rect-marker", attrs: o });
};
var m = {};
function y(t) {
  if (t) return t.preventDefault || (t.preventDefault = function () {}), t;
}
var g = {
  name: "f2",
  inject: ["hqBridge"],
  mixins: [f],
  props: { disableTouchMove: { type: Boolean, default: !1 } },
  emits: ["onInit", "getBase64"],
  data: function () {
    return { canvasEl: null, chartImg: "", canvasStyle: "" };
  },
  computed: {
    isMini: function () {
      return "mp" === this.hqBridge.ENV;
    },
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
      var e, n, r;
      return (
        (e = this),
        (n = null),
        (r = t().mark(function () {
          var e, n, r, a, i, c, o, s, f, d, v, m;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = 0),
                      (n = 0),
                      (r = null),
                      (t.next = 3),
                      p(".".concat(this.cClass), this)
                    );
                  case 3:
                    return (
                      (a = t.sent),
                      (i = a.width),
                      (c = a.height),
                      (t.next = 8),
                      p(this.chartUniq, this)
                    );
                  case 8:
                    return (
                      (o = t.sent),
                      (s = o.node),
                      (e = i),
                      (n = c),
                      (r = s),
                      (this.canvasStyle = "width: "
                        .concat(e, "px; height:")
                        .concat(n, "px")),
                      (f = r.getContext("2d")),
                      (d = (function () {
                        var t = 1;
                        return (
                          document ||
                            (t = h.wx$1.getSystemInfoSync().pixelRatio),
                          t || 1
                        );
                      })()),
                      (r.width = e * d),
                      (r.height = n * d),
                      (v = {
                        context: f,
                        width: e,
                        height: n,
                        pixelRatio: d,
                        idx: this.chartId,
                        plugins: [],
                      }),
                      this.customTooltipMarker &&
                        v.plugins.push(l.TooltipPlugin),
                      (t.next = 17),
                      require.async(
                        "../../../../detailSbg/@antv/f2/es/index.js"
                      )
                    );
                  case 17:
                    (t.t0 = t.sent.Chart),
                      (t.t1 = u(u({}, this.config), v)),
                      (m = new t.t0(t.t1)),
                      this.$emit("onInit", { chart: m, config: v }),
                      m && ((this.chart = m), (this.canvasEl = m.get("el")));
                  case 21:
                  case "end":
                    return t.stop();
                }
            },
            a,
            this
          );
        })),
        new Promise(function (t, a) {
          var i = function (t) {
              try {
                o(r.next(t));
              } catch (t) {
                a(t);
              }
            },
            c = function (t) {
              try {
                o(r.throw(t));
              } catch (t) {
                a(t);
              }
            },
            o = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(i, c);
            };
          o((r = r.apply(e, n)).next());
        })
      );
    },
    touchStart: function (t) {
      this.$emit("touchstart", t);
      var e = this.canvasEl;
      e && e.dispatchEvent("touchstart", y(t));
    },
    touchMove: function (t) {
      this.$emit("touchmove", t);
      var e = this.canvasEl;
      e && e.dispatchEvent("touchmove", y(t));
    },
    touchEnd: function (t) {
      this.$emit("touchend", t);
      var e = this.canvasEl;
      e && (this.isH5 || e.dispatchEvent("touchend", y(t)));
    },
    exportImage: function () {
      var t = this;
      if (document) {
        var e = document.querySelector("#".concat(this.chartId));
        if (e)
          try {
            var n = e.toDataURL("image/png");
            this.$emit("getBase64", n);
          } catch (t) {
            this.$emit("getBase64", "");
          }
      } else {
        var r = null;
        h.wx$1
          .createSelectorQuery()
          .in(this)
          .select("#".concat(this.chartId))
          .fields({ node: !0, size: !0 })
          .exec(function (e) {
            (r = e[0].node),
              h.wx$1.canvasToTempFilePath({
                canvas: r,
                success: function (e) {
                  var n = e.tempFilePath;
                  h.wx$1.getFileSystemManager().readFile({
                    filePath: n,
                    encoding: "base64",
                    success: function (e) {
                      var n = "data:image/png;base64, ".concat(e.data);
                      t.$emit("getBase64", n);
                    },
                    fail: function (e) {
                      t.$emit("getBase64", "");
                    },
                  });
                },
                fail: function (e) {
                  t.$emit("getBase64", "");
                },
              });
          });
      }
    },
  },
};
"function" == typeof m && m(g);
var x = h._export_sfc(g, [
  [
    "render",
    function (t, e, n, r, a, i) {
      return {
        a: t.chartId,
        b: t.chartId,
        c: h.s(a.canvasStyle),
        d: h.o(function () {
          return i.touchStart && i.touchStart.apply(i, arguments);
        }, 3439),
        e: h.o(function () {
          return i.touchMove && i.touchMove.apply(i, arguments);
        }, 3440),
        f: h.o(function () {
          return i.touchEnd && i.touchEnd.apply(i, arguments);
        }, 3441),
        g: h.n(t.cClass),
        h: h.s(!i.isH5 && t.cStyle),
        i: n.disableTouchMove,
      };
    },
  ],
]);
wx.createComponent(x);
