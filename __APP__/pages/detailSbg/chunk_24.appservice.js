$gwx3_XC_17 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_17 || [];
    function gz$gwx3_XC_17_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[6], [[7], [3, "events"]], [3, "touchend"]]);
        Z([[6], [[7], [3, "events"]], [3, "touchmove"]]);
        Z([[6], [[7], [3, "events"]], [3, "touchstart"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "_div"]], [1, "f2-container"]],
            [[7], [3, "h"]],
          ],
        ]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "r0"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_17 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_17 = true;
    var x = ["./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_17_1();
      var oRT = _mz(
        z,
        "view",
        [
          "bindtouchend",
          0,
          "bindtouchmove",
          1,
          "bindtouchstart",
          1,
          "class",
          2,
          "data-displaytooltip",
          3,
          "style",
          4,
        ],
        [],
        e,
        s,
        gg
      );
      var xST = _v();
      _(oRT, xST);
      if (_oz(z, 6, e, s, gg)) {
        xST.wxVkey = 1;
      }
      var oTT = _n("slot");
      _(oRT, oTT);
      xST.wxXCkey = 1;
      _(r, oRT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_17";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_17();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml"] = [
    $gwx3_XC_17,
    "./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml"] =
    $gwx3_XC_17("./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml");
__wxRoute = "pages/detailSbg/@tencent/stock-union-f2/f2MP";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/@tencent/stock-union-f2/f2MP.js";
define(
  "pages/detailSbg/@tencent/stock-union-f2/f2MP.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../../../@babel/runtime/helpers/typeof"),
      a = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      i = Object.defineProperty,
      r = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      s = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable,
      l = function (t, e, a) {
        return e in t
          ? i(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            })
          : (t[e] = a);
      },
      h = function (t, e) {
        for (var i in e || (e = {})) s.call(e, i) && l(t, i, e[i]);
        if (o) {
          var r,
            n = a(o(e));
          try {
            for (n.s(); !(r = n.n()).done; ) {
              i = r.value;
              c.call(e, i) && l(t, i, e[i]);
            }
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
        }
        return t;
      },
      u = require("../../../../common/vendor.js"),
      f = require("../../@antv/f2/lib/plugin/tooltip.js"),
      d = require("../../@antv/f2/es/index.js"),
      p = {
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
      g = function (t, e) {
        return new Promise(function (a) {
          document ||
            u.wx$1
              .createSelectorQuery()
              .in(e)
              .select(t)
              .fields({ node: !0, size: !0, rect: !0 })
              .exec(function (t) {
                var e = (t && t[0]) || {};
                a(e);
              });
        });
      },
      v = {};
    !(function (t) {
      (t.__esModule = !0), (t.default = void 0);
      var e = f.common,
        a = f.graphic,
        i = {
          circle: function (t, e, a, i) {
            i.arc(t, e, a, 0, 2 * Math.PI, !1);
          },
          square: function (t, e, a, i) {
            i.moveTo(t - a, e - a),
              i.lineTo(t + a, e - a),
              i.lineTo(t + a, e + a),
              i.lineTo(t - a, e + a),
              i.closePath();
          },
        },
        r = (function (t) {
          var a, r;
          function n() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((a = n).prototype = Object.create(r.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = r);
          var o = n.prototype;
          return (
            (o._initProperties = function () {
              t.prototype._initProperties.call(this),
                (this._attrs.canFill = !0),
                (this._attrs.canStroke = !0),
                (this._attrs.type = "marker");
            }),
            (o.getDefaultAttrs = function () {
              return { x: 0, y: 0, lineWidth: 0 };
            }),
            (o.createPath = function (t) {
              var a,
                r = this.get("attrs"),
                n = r.x,
                o = r.y,
                s = r.radius,
                c = r.symbol || "circle";
              (a = (0, e.isFunction)(c) ? c : i[c]),
                t.beginPath(),
                a(n, o, s, t, this);
            }),
            (o.calculateBox = function () {
              var t = this.get("attrs"),
                e = t.x,
                a = t.y,
                i = t.radius;
              return { minX: e - i, minY: a - i, maxX: e + i, maxY: a + i };
            }),
            n
          );
        })(a.Shape);
      t.default = r;
    })(v);
    var m = u.getDefaultExportFromCjs(v);
    f.Tooltip.prototype.setMarkers = function (t) {
      void 0 === t && (t = {});
      var e,
        a,
        i = t,
        o = i.items,
        s = i.style,
        c = i.type,
        l = this._getMarkerGroup(c);
      if ("circle" === c)
        for (var u = 0, d = o.length; u < d; u++) {
          var p = o[u],
            g = new m({
              className: "tooltip-circle-marker",
              attrs: f.common.mix(
                {
                  x: p.x,
                  y: p.y,
                  stroke: "transparent" === p.color ? "transparent" : s.fill,
                },
                ((e = h({}, s)), (a = { fill: p.color, radius: 4 }), r(e, n(a)))
              ),
            });
          l.add(g);
        }
      else l.addShape("rect", { className: "tooltip-rect-marker", attrs: s });
    };
    var y = {};
    !(function (t) {
      (t.__esModule = !0),
        (t.afterGeomDraw = l),
        (t.clearInner = h),
        (t.default = void 0),
        (t.init = c);
      var a = f.common,
        i = f.graphic;
      var r = {
        anchorOffset: 5,
        inflectionOffset: 15,
        sidePadding: 20,
        lineHeight: 32,
        adjustOffset: 15,
        skipOverlapLabels: !1,
        triggerOn: "touchstart",
        activeShape: !1,
        activeStyle: { offset: 1, appendRadius: 8, fillOpacity: 0.5 },
        label1OffsetY: -1,
        label2OffsetY: 1,
      };
      function n(t, e, a) {
        return { x: t.x + a * Math.cos(e), y: t.y + a * Math.sin(e) };
      }
      function o(t, e) {
        var a = t.getBBox(),
          i = e.getBBox();
        return (
          Math.max(a.minX, i.minX) <= Math.min(a.maxX, i.maxX) &&
          Math.max(a.minY, i.minY) <= Math.min(a.maxY, i.maxY)
        );
      }
      var s = (function () {
        function t(t) {
          var i = this;
          (function (t, a, i) {
            (a = (function (t) {
              var a = (function (t, a) {
                if ("object" != e(t) || null === t) return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                  var r = i.call(t, a);
                  if ("object" != e(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t, "string");
              return "symbol" == e(a) ? a : String(a);
            })(a)) in t
              ? Object.defineProperty(t, a, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[a] = i);
          })(this, "_handleEvent", function (t) {
            for (
              var e,
                r = i,
                n = r.chart,
                o = r.drawnLabels,
                s = r.pieLabelCfg,
                c = s.onClick,
                l = s.activeShape,
                h = (0, a.createEvent)(t, n),
                u = h.x,
                f = h.y,
                d = 0,
                p = o.length;
              d < p;
              d++
            ) {
              var g = o[d],
                v = g.getBBox();
              if (u >= v.minX && u <= v.maxX && f >= v.minY && f <= v.maxY) {
                e = g;
                break;
              }
            }
            var m = n.getSnapRecords({ x: u, y: f });
            e ? (h.data = e.get("data")) : m.length && (h.data = m[0]._origin),
              c && c(h),
              h.data && l && i._activeShape(h.data);
          }),
            (0, a.mix)(this, t);
          var r = this.chart;
          this.canvasDom = r.get("canvas").get("el");
        }
        var r = t.prototype;
        return (
          (r.renderLabels = function () {
            var t = this,
              e = t.chart,
              r = t.pieLabelCfg,
              s = t.labelGroup,
              c = [[], []],
              l = e.get("geoms")[0].get("container").get("children"),
              h = r.anchorOffset,
              u = r.inflectionOffset,
              f = r.label1,
              d = r.label2,
              p = r.lineHeight,
              g = r.skipOverlapLabels,
              v = r.label1OffsetY,
              m = r.label2OffsetY,
              y = e.get("coord"),
              x = y.center,
              b = y.circleRadius;
            l.forEach(function (t) {
              var r = t._attrs.attrs,
                o = (function (t, e) {
                  return e < t && (e += 2 * Math.PI), (e + t) / 2;
                })(r.startAngle, r.endAngle),
                s = n(x, o, b + h),
                l = n(x, o, b + u),
                p = t.get("origin"),
                g = p._origin,
                y = p.color,
                _ = {
                  _anchor: s,
                  _inflection: l,
                  _data: g,
                  x: l.x,
                  y: l.y,
                  r: b + u,
                  fill: y,
                },
                S = new i.Group({
                  context: e.get("canvas").get("context"),
                  data: g,
                }),
                w = {
                  x: 0,
                  y: 0,
                  fontSize: 12,
                  lineHeight: 12,
                  fill: "#808080",
                };
              (0, a.isFunction)(f) &&
                S.addShape("Text", {
                  attrs: (0, a.mix)({ textBaseline: "bottom" }, w, f(g, y)),
                  data: g,
                  offsetY: v,
                }),
                (0, a.isFunction)(d) &&
                  S.addShape("Text", {
                    attrs: (0, a.mix)({ textBaseline: "top" }, w, d(g, y)),
                    data: g,
                    offsetY: m,
                  }),
                (_.textGroup = S),
                s.x < x.x
                  ? ((_._side = "left"), c[0].push(_))
                  : ((_._side = "right"), c[1].push(_));
            });
            var _ = [];
            if (g)
              for (
                var S, w = c[1].concat(c[0]), E = 0, I = w.length;
                E < I;
                E++
              ) {
                var L = w[E],
                  C = t._drawLabel(L);
                (S && o(C, S)) ||
                  (s.add(C), t._drawLabelLine(L), (S = C), _.push(C));
              }
            else {
              var O = e.get("height"),
                P = parseInt(O / p, 10);
              c.forEach(function (e) {
                e.length > P && e.splice(P, e.length - P),
                  e.sort(function (t, e) {
                    return t.y - e.y;
                  });
                var a = t._antiCollision(e);
                _ = _.concat(a);
              });
            }
            this.drawnLabels = _;
          }),
          (r.bindEvents = function () {
            var t = this.pieLabelCfg.triggerOn || "touchstart";
            (0, a.addEventListener)(this.canvasDom, t, this._handleEvent);
          }),
          (r.unBindEvents = function () {
            var t = this.pieLabelCfg.triggerOn || "touchstart";
            (0, a.removeEventListener)(this.canvasDom, t, this._handleEvent);
          }),
          (r.clear = function () {
            this.labelGroup && this.labelGroup.clear(),
              this.halo && this.halo.remove(!0),
              (this.lastSelectedData = null),
              (this.drawnLabels = []),
              this.unBindEvents();
          }),
          (r._drawLabel = function (t) {
            var e = this.pieLabelCfg,
              a = this.chart.get("width"),
              i = e.sidePadding,
              r = t.y,
              n = t.textGroup,
              o = n.get("children"),
              s = {
                textAlign: "left" === t._side ? "left" : "right",
                x: "left" === t._side ? i : a - i,
              };
            return (
              o.forEach(function (t) {
                t.attr(s), t.attr("y", r + t.get("offsetY"));
              }),
              n
            );
          }),
          (r._drawLabelLine = function (t, e) {
            var i = this.chart,
              r = this.pieLabelCfg,
              n = this.labelGroup,
              o = i.get("width"),
              s = r.sidePadding,
              c = r.adjustOffset,
              l = r.lineStyle,
              h = r.anchorStyle,
              u = r.skipOverlapLabels,
              f = t._anchor,
              d = t._inflection,
              p = t.fill,
              g = t.y,
              v = { x: "left" === t._side ? s : o - s, y: g },
              m = [f, d, v];
            if (!u && d.y !== g)
              if (d.y < g) {
                var y = d,
                  x = {
                    x: "left" === t._side ? v.x + e + c : v.x - e - c,
                    y: d.y,
                  },
                  b = { x: "left" === t._side ? v.x + e : v.x - e, y: v.y };
                (m = [f, y, x, b, v]),
                  (("right" === t._side && x.x < y.x) ||
                    ("left" === t._side && x.x > y.x)) &&
                    (m = [f, b, v]);
              } else m = [f, { x: d.x, y: g }, v];
            n.addShape("Polyline", {
              attrs: (0, a.mix)({ points: m, lineWidth: 1, stroke: p }, l),
            }),
              n.addShape("Circle", {
                attrs: (0, a.mix)({ x: f.x, y: f.y, r: 2, fill: p }, h),
              });
          }),
          (r._antiCollision = function (t) {
            var e,
              a = this,
              i = a.chart,
              r = a.pieLabelCfg,
              n = i.get("coord"),
              o = i.get("height"),
              s = n.center,
              c = n.circleRadius,
              l = r.inflectionOffset,
              h = r.lineHeight,
              u = s.y - c - l - h,
              f = !0,
              d = o,
              p = 0,
              g = Number.MIN_VALUE,
              v = 0,
              m = t.map(function (t) {
                var e = t.y;
                e > p && (p = e), e < g && (g = e);
                var a = t.textGroup.getBBox().width;
                return a >= v && (v = a), { size: h, targets: [e - u] };
              });
            for (p - u > d && (d = p - u); f; )
              for (
                m.forEach(function (t) {
                  var e =
                    (Math.min.apply(g, t.targets) +
                      Math.max.apply(g, t.targets)) /
                    2;
                  t.pos = Math.min(Math.max(g, e - t.size / 2), d - t.size);
                }),
                  f = !1,
                  e = m.length;
                e--;

              )
                if (e > 0) {
                  var y = m[e - 1],
                    x = m[e];
                  y.pos + y.size > x.pos &&
                    ((y.size += x.size),
                    (y.targets = y.targets.concat(x.targets)),
                    y.pos + y.size > d && (y.pos = d - y.size),
                    m.splice(e, 1),
                    (f = !0));
                }
            (e = 0),
              m.forEach(function (a) {
                var i = u;
                a.targets.forEach(function () {
                  (t[e].y = a.pos + i + h / 2), (i += h), e++;
                });
              });
            var b = [];
            return (
              t.forEach(function (t) {
                var e = a._drawLabel(t);
                a.labelGroup.add(e), a._drawLabelLine(t, v), b.push(e);
              }),
              b
            );
          }),
          (r._getSelectedShapeByData = function (t) {
            var e = null,
              i = this.chart.get("geoms")[0],
              r = i.get("container").get("children");
            return (
              (0, a.each)(r, function (r) {
                if (r.get("isShape") && r.get("className") === i.get("type")) {
                  var n = r.get("origin")._origin;
                  if ((0, a.isObjectValueEqual)(n, t)) return (e = r), !1;
                }
              }),
              e
            );
          }),
          (r._activeShape = function (t) {
            var e = this.chart,
              i = this.lastSelectedData,
              r = this.pieLabelCfg;
            if (t !== i) {
              this.lastSelectedData = t;
              var n = r.activeStyle,
                o = this._getSelectedShapeByData(t)._attrs.attrs,
                s = o.x,
                c = o.y,
                l = o.startAngle,
                h = o.endAngle,
                u = o.r,
                f = o.fill,
                d = e.get("frontPlot");
              this.halo && this.halo.remove(!0);
              var p = d.addShape("sector", {
                attrs: (0, a.mix)(
                  {
                    x: s,
                    y: c,
                    r: u + n.offset + n.appendRadius,
                    r0: u + n.offset,
                    fill: f,
                    startAngle: l,
                    endAngle: h,
                  },
                  n
                ),
              });
              (this.halo = p), e.get("canvas").draw();
            }
          }),
          t
        );
      })();
      function c(t) {
        var e = t
            .get("frontPlot")
            .addGroup({ className: "pie-label", zIndex: 0 }),
          i = new s({ chart: t, labelGroup: e });
        t.set("pieLabelController", i),
          (t.pieLabel = function (t) {
            return (t = (0, a.deepMix)({}, r, t)), (i.pieLabelCfg = t), this;
          });
      }
      function l(t) {
        var e = t.get("pieLabelController");
        e.pieLabelCfg && (e.renderLabels(), e.bindEvents());
      }
      function h(t) {
        var e = t.get("pieLabelController");
        e.pieLabelCfg && e.clear();
      }
      var u = { init: c, afterGeomDraw: l, clearInner: h };
      t.default = u;
    })(y);
    var x = u.getDefaultExportFromCjs(y),
      b = {};
    function _(t) {
      if (t) return t.preventDefault || (t.preventDefault = function () {}), t;
    }
    var S = {
      name: "f2",
      inject: ["hqBridge"],
      mixins: [p],
      props: { disableTouchMove: { type: Boolean, default: !1 } },
      emits: ["onInit", "getBase64"],
      data: function () {
        var t, e, a;
        return {
          canvasEl: null,
          chartImg: "",
          canvasStyle: "",
          IS_PCWEIXIN:
            null ==
            (a =
              null ==
              (e =
                null == (t = null == getApp ? void 0 : getApp().globalData)
                  ? void 0
                  : t.detect)
                ? void 0
                : e.env)
              ? void 0
              : a.IS_PCWEIXIN,
          resizeTimer: null,
        };
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
        this.IS_PCWEIXIN && u.wx$1.onWindowResize(this.handleResize),
          this.oriInitChart();
      },
      destroyed: function () {
        this.chart && this.chart.destroy && this.chart.destroy(),
          (this.chart = null),
          this.resizeTimer && clearTimeout(this.resizeTimer),
          this.IS_PCWEIXIN && u.wx$1.offWindowResize(this.handleResize);
      },
      methods: {
        handleResize: function () {
          var t = this;
          this.resizeTimer && clearTimeout(this.resizeTimer),
            (this.resizeTimer = setTimeout(function () {
              t.chart && t.chart.destroy && t.chart.destroy(),
                (t.chart = null),
                t.oriInitChart();
            }, 200));
        },
        oriInitChart: function () {
          var e, a, i;
          return (
            (e = this),
            (a = null),
            (i = t().mark(function () {
              var e, a, i, r, n, o, s, c, l, p, v, m;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = 0),
                          (a = 0),
                          (i = null),
                          (t.next = 3),
                          g(".".concat(this.cClass), this)
                        );
                      case 3:
                        return (
                          (r = t.sent),
                          (n = r.width),
                          (o = r.height),
                          (t.next = 8),
                          g(this.chartUniq, this)
                        );
                      case 8:
                        (s = t.sent),
                          (c = s.node),
                          (e = n),
                          (a = o),
                          (i = c),
                          this.$emit("canvasInfo", {
                            cNode: i,
                            width: n,
                            height: o,
                          }),
                          (this.canvasStyle = "width: "
                            .concat(e, "px; height:")
                            .concat(a, "px")),
                          (l = i.getContext("2d")),
                          (p = (function () {
                            var t = 1;
                            return (
                              document ||
                                (t = u.wx$1.getSystemInfoSync().pixelRatio),
                              t || 1
                            );
                          })()),
                          (i.width = e * p),
                          (i.height = a * p),
                          (v = {
                            context: l,
                            width: e,
                            height: a,
                            pixelRatio: p,
                            idx: this.chartId,
                            plugins: [x],
                          }),
                          this.customTooltipMarker &&
                            v.plugins.push(f.TooltipPlugin),
                          (m = new d.default.Chart(h(h({}, this.config), v))),
                          this.$emit("onInit", { chart: m, config: v }),
                          m &&
                            ((this.chart = m), (this.canvasEl = m.get("el")));
                      case 17:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                this
              );
            })),
            new Promise(function (t, r) {
              var n = function (t) {
                  try {
                    s(i.next(t));
                  } catch (t) {
                    r(t);
                  }
                },
                o = function (t) {
                  try {
                    s(i.throw(t));
                  } catch (t) {
                    r(t);
                  }
                },
                s = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(n, o);
                };
              s((i = i.apply(e, a)).next());
            })
          );
        },
        touchStart: function (t) {
          this.$emit("touchstart", t);
          var e = this.canvasEl;
          e && e.dispatchEvent("touchstart", _(t));
        },
        touchMove: function (t) {
          this.$emit("touchmove", t);
          var e = this.canvasEl;
          e && e.dispatchEvent("touchmove", _(t));
        },
        touchEnd: function (t) {
          this.$emit("touchend", t);
          var e = this.canvasEl;
          e &&
            (this.isH5 ||
              (e.dispatchEvent("touchend", _(t)),
              e.dispatchEvent("touchcancel", _(t))));
        },
        exportImage: function () {
          var t = this;
          if (document) {
            var e = document.querySelector("#".concat(this.chartId));
            if (e)
              try {
                var a = e.toDataURL("image/png");
                this.$emit("getBase64", a);
              } catch (t) {
                this.$emit("getBase64", "");
              }
          } else {
            var i = null;
            u.wx$1
              .createSelectorQuery()
              .in(this)
              .select("#".concat(this.chartId))
              .fields({ node: !0, size: !0 })
              .exec(function (e) {
                (i = e[0].node),
                  u.wx$1.canvasToTempFilePath({
                    canvas: i,
                    success: function (e) {
                      var a = e.tempFilePath;
                      u.wx$1.getFileSystemManager().readFile({
                        filePath: a,
                        encoding: "base64",
                        success: function (e) {
                          var a = "data:image/png;base64, ".concat(e.data);
                          t.$emit("getBase64", a);
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
    "function" == typeof b && b(S);
    var w = u._export_sfc(S, [
      [
        "render",
        function (t, e, a, i, r, n) {
          return {
            a: t.chartId,
            b: t.chartId,
            c: u.s(r.canvasStyle),
            d: u.o(function () {
              return n.touchStart && n.touchStart.apply(n, arguments);
            }, 2349),
            e: u.o(function () {
              return n.touchMove && n.touchMove.apply(n, arguments);
            }, 2350),
            f: u.o(function () {
              return n.touchEnd && n.touchEnd.apply(n, arguments);
            }, 2351),
            g: u.o(function () {
              return n.touchEnd && n.touchEnd.apply(n, arguments);
            }, 2352),
            h: u.n(t.cClass),
            i: u.s(!n.isH5 && t.cStyle),
            j: a.disableTouchMove,
          };
        },
      ],
    ]);
    wx.createComponent(w);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/detailSbg/@tencent/stock-union-f2/f2MP.js",
  }
);
require("pages/detailSbg/@tencent/stock-union-f2/f2MP.js");
