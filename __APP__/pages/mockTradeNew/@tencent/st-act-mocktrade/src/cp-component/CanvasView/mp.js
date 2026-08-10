var e = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../../../../@babel/runtime/helpers/createSuper"),
  r = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../../../../../@babel/runtime/helpers/createClass"),
  h = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  d = Object.defineProperty,
  c = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable,
  x = function (e, t, i) {
    return t in e
      ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  f = function (e, t) {
    for (var i in t || (t = {})) u.call(t, i) && x(e, i, t[i]);
    if (l) {
      var n,
        r = h(l(t));
      try {
        for (r.s(); !(n = r.n()).done; ) {
          i = n.value;
          g.call(t, i) && x(e, i, t[i]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  v = function (e, t) {
    return c(e, s(t));
  },
  w = function (e, t, i) {
    return new Promise(function (n, r) {
      var a = function (e) {
          try {
            h(i.next(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (e) {
          try {
            h(i.throw(e));
          } catch (e) {
            r(e);
          }
        },
        h = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
        };
      h((i = i.apply(e, t)).next());
    });
  },
  y = require("../../../../../../../common/vendor.js"),
  p = require("../../services/BaseController.js"),
  m = 480,
  b = 384,
  T = "2d",
  k = (function (e) {
    return (
      (e.text = "text"),
      (e.image = "image"),
      (e.line = "line"),
      (e.rect = "rect"),
      (e.table = "table"),
      (e.barcharts = "barcharts"),
      (e.card = "card"),
      e
    );
  })(k || {}),
  P = (function (e) {
    return (
      (e.left = "left"),
      (e.center = "center"),
      (e.right = "right"),
      (e.top = "top"),
      (e.middle = "middle"),
      (e.bottom = "bottom"),
      e
    );
  })(P || {}),
  S = 0,
  C = 30,
  A = "png",
  R = 1,
  I = 30,
  D = "#000",
  F = "normal",
  z = "stockFont",
  _ = 4,
  q = 1.4,
  B = "测试",
  O = 0,
  j = 0.04,
  $ = function (e) {
    return "function" == typeof e;
  },
  M = (function () {
    function e() {
      a(this, e);
    }
    return (
      o(e, [
        {
          key: "draw",
          value: function (e) {
            return w(this, arguments, function (e) {
              var t = this,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return r().mark(function n() {
                var a, o, d, c;
                return r().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          t.clear(),
                            t.initCanvas(i),
                            (a = h(e)),
                            (n.prev = 2),
                            a.s();
                        case 4:
                          if ((o = a.n()).done) {
                            n.next = 37;
                            break;
                          }
                          if ((d = o.value).type !== k.image) {
                            n.next = 11;
                            break;
                          }
                          return (n.next = 9), t.drawImage(d);
                        case 9:
                          n.next = 35;
                          break;
                        case 11:
                          if (d.type !== k.text) {
                            n.next = 16;
                            break;
                          }
                          return (n.next = 14), t.drawText(d);
                        case 14:
                          n.next = 35;
                          break;
                        case 16:
                          if (d.type !== k.rect) {
                            n.next = 21;
                            break;
                          }
                          return (n.next = 19), t.drawRect(d);
                        case 19:
                          n.next = 35;
                          break;
                        case 21:
                          if (d.type !== k.table) {
                            n.next = 26;
                            break;
                          }
                          return (n.next = 24), t.drawTable(d);
                        case 24:
                          n.next = 35;
                          break;
                        case 26:
                          if (d.type !== k.barcharts) {
                            n.next = 31;
                            break;
                          }
                          return (n.next = 29), t.drawBarCharts(d);
                        case 29:
                          n.next = 35;
                          break;
                        case 31:
                          if (((n.t0 = d.type === k.card), !n.t0)) {
                            n.next = 35;
                            break;
                          }
                          return (n.next = 35), t.drawCard(d);
                        case 35:
                          n.next = 4;
                          break;
                        case 37:
                          n.next = 42;
                          break;
                        case 39:
                          (n.prev = 39), (n.t1 = n.catch(2)), a.e(n.t1);
                        case 42:
                          return (n.prev = 42), a.f(), n.finish(42);
                        case 45:
                          return (n.next = 47), t.toImage();
                        case 47:
                          return (
                            (c = n.sent), n.abrupt("return", (t.clear(), c))
                          );
                        case 49:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 39, 42, 45]]
                );
              })();
            });
          },
        },
      ]),
      e
    );
  })(),
  W = [
    [
      { width: 0.55, height: 0.5, x: 0, y: 0, index: 0, round: [10, 0, 0, 0] },
      { width: 0.3, height: 0.5, x: 0, y: 0.5, index: 1, round: [0, 0, 0, 10] },
      { width: 0.25, height: 0.5, x: 0.3, y: 0.5, index: 3 },
    ],
    [
      { width: 0.225, height: 0.6, x: 0.55, y: 0, index: 3 },
      {
        width: 0.225,
        height: 0.6,
        x: 0.775,
        y: 0,
        index: 4,
        round: [0, 10, 0, 0],
      },
      {
        width: 0.45,
        height: 0.4,
        x: 0.55,
        y: 0.6,
        index: 5,
        round: [0, 0, 10, 0],
      },
    ],
  ],
  H = [
    [
      { width: 0.4, height: 0.6, x: 0, y: 0, index: 0, round: [10, 0, 0, 0] },
      { width: 0.4, height: 0.4, x: 0, y: 0.6, index: 2, round: [0, 0, 0, 10] },
    ],
    [
      { width: 0.3, height: 0.7, x: 0.4, y: 0, index: 1 },
      { width: 0.3, height: 0.7, x: 0.7, y: 0, index: 5, round: [0, 10, 0, 0] },
      { width: 0.4, height: 0.3, x: 0.4, y: 0.7, index: 3 },
      {
        width: 0.2,
        height: 0.3,
        x: 0.8,
        y: 0.7,
        index: 4,
        round: [0, 0, 10, 0],
      },
    ],
  ],
  U = [
    [{ width: 0.25, height: 1, x: 0, y: 0, index: 0, round: [10, 0, 0, 10] }],
    [
      { width: 0.3, height: 0.7, x: 0.25, y: 0, index: 1 },
      { width: 0.2, height: 0.7, x: 0.55, y: 0, index: 2 },
      {
        width: 0.25,
        height: 0.7,
        x: 0.75,
        y: 0,
        index: 5,
        round: [0, 10, 0, 0],
      },
      { width: 0.375, height: 0.3, x: 0.25, y: 0.7, index: 3 },
      {
        width: 0.375,
        height: 0.3,
        x: 0.625,
        y: 0.7,
        index: 4,
        round: [0, 0, 10, 0],
      },
    ],
  ],
  X = [
    [
      { width: 0.3, height: 0.6, x: 0, y: 0, index: 0, round: [10, 0, 0, 0] },
      { width: 0.3, height: 0.4, x: 0, y: 0.6, index: 3, round: [0, 0, 0, 10] },
    ],
    [
      { width: 0.47, height: 0.4, x: 0.3, y: 0, index: 1 },
      { width: 0.235, height: 0.6, x: 0.3, y: 0.4, index: 2 },
      { width: 0.235, height: 0.6, x: 0.535, y: 0.4, index: 4 },
    ],
    [
      {
        width: 0.23,
        height: 1,
        x: 0.77,
        y: 0,
        index: 5,
        round: [0, 10, 10, 0],
      },
    ],
  ],
  E = function (e) {
    var t = e;
    return (
      e.width && (t.width = e.width - 4),
      e.height && (t.height = e.height - 4),
      t
    );
  },
  L = new ((function (r) {
    i(d, M);
    var h = n(d);
    function d() {
      return a(this, d), h.apply(this, arguments);
    }
    return (
      o(d, [
        {
          key: "initCanvas",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (!this.canvas) {
              var t = y.wx$1.getWindowInfo(),
                i = t.pixelRatio,
                n = void 0 === i ? 1 : i;
              this.canvas = y.wx$1.createOffscreenCanvas({
                type: T,
                width: (e.width || m) * n,
                height: (e.height || b) * n,
              });
              var r = this.canvas && this.canvas.getContext(T);
              r.canvas &&
                !r.canvas.toDataURL &&
                (r.canvas.toDataURL = this.canvas.toDataURL),
                r.scale(n, n);
            }
            return this.canvas;
          },
        },
        {
          key: "toImage",
          value: function () {
            return this.canvasToTempFilePath(this.canvas);
          },
        },
        {
          key: "canvasToTempFilePath",
          value: function (e) {
            var t = getApp(),
              i = t.globalData,
              n = void 0 === i ? {} : i,
              r = n.detect,
              a = void 0 === r ? {} : r,
              o = a.env,
              h = void 0 === o ? {} : o,
              d = h.IS_PCWEIXIN,
              c = void 0 !== d && d;
            return c
              ? this.canvasToTempFilePathForPc(e)
              : new Promise(function (t, i) {
                  y.wx$1.canvasToTempFilePath({
                    canvas: e,
                    width: e.width,
                    height: e.height,
                    destWidth: e.width,
                    destHeight: e.height,
                    fileType: A,
                    quality: R,
                    success: t,
                    fail: i,
                  });
                });
          },
        },
        {
          key: "canvasToTempFilePathForPc",
          value: function (e) {
            var t = e.toDataURL("image/png"),
              i = Date.now(),
              n = ""
                .concat(y.wx$1.env.USER_DATA_PATH, "/temp_image_")
                .concat(i, ".png");
            return new Promise(function (e, i) {
              y.wx$1.getFileSystemManager().writeFile({
                filePath: n,
                data: t.replace("data:image/png;base64,", ""),
                encoding: "base64",
                success: function () {
                  return e({ tempFilePath: n });
                },
                fail: i,
              });
            });
          },
        },
        {
          key: "drawText",
          value: function (e) {
            if (this.canvas) {
              var t = this.canvas.getContext(T),
                i = e.text,
                n = void 0 === i ? "" : i,
                r = e.x,
                a = void 0 === r ? S : r,
                o = e.y,
                h = void 0 === o ? S : o,
                d = e.style || {},
                c = d.fontSize,
                s = void 0 === c ? I : c,
                l = d.color,
                u = void 0 === l ? D : l,
                g = d.fontWeight,
                x = void 0 === g ? F : g,
                f = d.textAlign,
                v = void 0 === f ? P.left : f,
                w = d.fontFamily,
                y = void 0 === w ? z : w;
              (t.font = "".concat(x, " ").concat(s, "px ").concat(y)),
                (t.textAlign = v),
                (t.fillStyle = u),
                t.fillText(n, a, h);
            }
          },
        },
        {
          key: "drawImage",
          value: function (e) {
            var i = this;
            if (!this.canvas)
              return Promise.reject(new Error("Canvas is not initialized"));
            var n = this.canvas.getContext(T),
              r = e.url,
              a = e.x,
              o = e.y,
              h = e.width,
              d = void 0 === h ? m : h,
              c = e.height,
              s = void 0 === c ? b : c,
              l = e.round;
            return new Promise(function (e, h) {
              var c = i.canvas.createImage();
              (c.onload = function () {
                if (l && l.length > 0) {
                  if ((n.save(), n.beginPath(), n.roundRect))
                    n.roundRect(a, o, d, s, l);
                  else {
                    var i = t(l, 4),
                      r = i[0],
                      h = void 0 === r ? S : r,
                      u = i[1],
                      g = void 0 === u ? S : u,
                      x = i[2],
                      f = void 0 === x ? S : x,
                      v = i[3],
                      w = void 0 === v ? S : v;
                    n.moveTo(a + h, o),
                      n.arcTo(a + d, o, a + d, o + s, g),
                      n.arcTo(a + d, o + s, a, o + s, f),
                      n.arcTo(a, o + s, a, o, w),
                      n.arcTo(a, o, a + d, o, h);
                  }
                  n.closePath(),
                    n.clip(),
                    n.drawImage(c, a, o, d, s),
                    n.restore();
                } else n.drawImage(c, a, o, d, s), n.restore();
                e(c), (c = null);
              }),
                (c.onerror = function (e) {
                  h(e), (c = null);
                }),
                (c.src = r);
            });
          },
        },
        {
          key: "drawRect",
          value: function (e) {
            if (this.canvas) {
              var i = this.canvas.getContext(T),
                n = e.x,
                r = void 0 === n ? S : n,
                a = e.y,
                o = void 0 === a ? S : a,
                h = e.width,
                d = void 0 === h ? m : h,
                c = e.height,
                s = void 0 === c ? b : c,
                l = e.fill,
                u = e.stroke,
                g = e.round;
              if ((u && (i.strokeStyle = u), l && (i.fillStyle = l), g))
                if (i.roundRect)
                  i.beginPath(),
                    i.roundRect(r, o, d, s, g),
                    i.fill(),
                    i.closePath();
                else {
                  var x = t(g, 4),
                    f = x[0],
                    v = void 0 === f ? S : f,
                    w = x[1],
                    y = void 0 === w ? S : w,
                    p = x[2],
                    k = void 0 === p ? S : p,
                    P = x[3],
                    C = void 0 === P ? S : P;
                  i.beginPath(),
                    i.moveTo(r + v, o),
                    i.arcTo(r + d, o, r + d, o + s, y),
                    i.arcTo(r + d, o + s, r, o + s, k),
                    i.arcTo(r, o + s, r, o, C),
                    i.arcTo(r, o, r + d, o, v),
                    i.closePath(),
                    i.fill();
                }
              else l ? i.fillRect(r, o, d, s) : i.strokeRect(r, o, d, s);
            }
          },
        },
        {
          key: "clear",
          value: function () {
            if (this.canvas) {
              var e = this.canvas.getContext(T);
              e.clearRect(S, S, this.canvas.width, this.canvas.height),
                (this.canvas = null),
                (e = null);
            }
          },
        },
        {
          key: "measureText",
          value: function (e) {
            if (!this.canvas) return 0;
            var t = this.canvas.getContext(T),
              i = e.text,
              n = void 0 === i ? B : i,
              r = (e.style || {}).fontSize,
              a = void 0 === r ? I : r;
            (t.textBaseline = P.middle),
              (t.font = "".concat(a, "px ").concat(z));
            var o = t.measureText(n);
            return (o.actualBoundingBoxAscent + o.actualBoundingBoxDescent) / _;
          },
        },
        {
          key: "drawTable",
          value: function (e) {
            var t = e.x,
              i = e.y,
              n = e.width,
              r = e.height;
            e.log &&
              this.drawRect({ x: t, y: i, width: n, height: r, type: k.rect });
            for (
              var a = e.data,
                o = a.rows,
                h = a.columns,
                d = h.reduce(function (e, t) {
                  return e + t.width;
                }, 0),
                c = i,
                s = 0;
              c < i + r && o.data[s];
              c += o.height, s++
            )
              for (var l = 0, u = 0; u < h.length; u++) {
                var g = h[u].width,
                  x = t + l;
                h[u].textAlign === P.right
                  ? (x += n * (g / d))
                  : h[u].textAlign === P.center && (x += (n * (g / d)) / 2);
                o.valign === P.middle
                  ? o.height / 2
                  : o.valign === P.bottom && o.height,
                  this.drawText({
                    type: k.text,
                    text: String(o.data[s][u]),
                    x: x,
                    y: c + o.height / 2,
                    style: f({}, h[u]),
                  }),
                  (l += n * (g / d));
              }
          },
        },
        {
          key: "drawBarCharts",
          value: function (t) {
            var i = t.x,
              n = void 0 === i ? S : i,
              r = t.y,
              a = void 0 === r ? S : r,
              o = t.width,
              h = void 0 === o ? m : o,
              d = t.height,
              c = void 0 === d ? b : d,
              s = t.log,
              l = void 0 !== s && s,
              u = t.style,
              g = t.data,
              x = g.field,
              w = g.label,
              y = g.data,
              p = y.map(function (e) {
                return e[x];
              }),
              T = y.map(function (e) {
                return e[w];
              }),
              C = p.length,
              A = Math.max.apply(Math, e(p)),
              R = h / (C - 0.3),
              I = 0.7 * R,
              D = 0.7 * c;
            l &&
              this.drawRect({ x: n, y: a, width: h, height: c, type: k.rect });
            for (var F = 0; F < p.length; F++)
              this.drawRect({
                x: n + F * R,
                y: a + 0.85 * c,
                width: I,
                height: (-p[F] / A) * D,
                fill: $(u.fill) ? u.fill(F) : u.fill,
                type: k.rect,
              }),
                this.drawText({
                  type: k.text,
                  text: p[F],
                  x: n + F * R + I / 2,
                  y: a - (p[F] / A) * D + 0.82 * c,
                  style: v(f({}, u), {
                    fontSize: u.fontSize,
                    textAlign: u.textAlign || P.center,
                    color: $(u.color) ? u.color(F) : u.color,
                  }),
                });
            for (var z = 0; z < T.length; z++)
              this.drawText({
                type: k.text,
                text: T[z],
                x: n + z * R + I / 2,
                y: a + c * (1 - j),
                style: v(f({}, u), {
                  fontSize: u.fontSize,
                  textAlign: u.textAlign || P.center,
                  color: u.color(z),
                }),
              });
          },
        },
        {
          key: "resetZeroPoint",
          value: function (e) {
            var t = e.x,
              i = e.y;
            this.canvas && this.canvas.getContext(T).translate(t, i);
          },
        },
        {
          key: "drawCard",
          value: function (e) {
            var t = e.x,
              i = void 0 === t ? C : t,
              n = e.y,
              r = void 0 === n ? C : n,
              a = e.width,
              o = e.height,
              h = e.log,
              d = void 0 === h || h,
              c = e.style,
              s = e.data,
              l = s.field,
              u = s.label,
              g = s.data;
            d &&
              this.drawRect({
                x: i,
                y: r,
                width: a,
                height: o,
                round: [O, O, O, O],
                fill: D,
                type: k.rect,
              });
            var x,
              v = null;
            g &&
              (v = (function (e) {
                var t,
                  i,
                  n = null == (t = e[0]) ? void 0 : t.zdf,
                  r = null == (i = e[5]) ? void 0 : i.zdf;
                return n < 2 && r >= -4
                  ? W
                  : n > 4 && Math.abs(r) <= n
                  ? U
                  : r < -4 && Math.abs(r) > n
                  ? X
                  : H;
              })(g)),
              this.resetZeroPoint({ x: i + 2, y: r + 2 });
            for (var w = 0; w < v.length; w++)
              for (var y = v[w], p = 0; p < y.length; p++)
                this.drawRect(
                  E({
                    x: y[p].x * a,
                    y: y[p].y * o,
                    width: y[p].width * a,
                    height: y[p].height * o,
                    round: y[p].round,
                    fill:
                      ((x = g[y[p].index][l]), x >= 0 ? "#fceded" : "#f0f9f2"),
                  })
                ),
                  this.drawText({
                    type: k.text,
                    x: y[p].x * a + (y[p].width * a) / 2,
                    y: y[p].y * o + (y[p].height * o) / 2,
                    width: y[p].width * a,
                    height: y[p].height * o,
                    text: String(g[y[p].index][u]),
                    style: f({}, c),
                  }),
                  this.drawText({
                    type: k.text,
                    x: y[p].x * a + (y[p].width * a) / 2,
                    y: y[p].y * o + (y[p].height * o) / 2 + c.fontSize * q,
                    width: y[p].width * a,
                    height: y[p].height * o,
                    text: "".concat(g[y[p].index][l], "%"),
                    style: f({}, c),
                  });
          },
        },
      ]),
      d
    );
  })())(),
  Z = y.wx$1.getAccountInfoSync(),
  N = "",
  Y = {
    props: { showShare: Boolean, urank: Object, earnYield: String },
    data: function () {
      return { drawTimer: null, isDestroyed: !1 };
    },
    watch: {
      showShare: function (e) {
        e &&
          (y.wx$1.showShareImageMenu({ path: N }), this.$emit("onHideShare"));
      },
      urank: {
        handler: function () {
          this.debounceDraw();
        },
        deep: !0,
      },
      earnYield: function () {
        this.debounceDraw();
      },
    },
    beforeDestroy: function () {
      (this.isDestroyed = !0),
        this.drawTimer &&
          (clearTimeout(this.drawTimer), (this.drawTimer = null));
    },
    methods: {
      debounceDraw: function () {
        var e = this;
        this.drawTimer && clearTimeout(this.drawTimer),
          (this.drawTimer = setTimeout(function () {
            e.isDestroyed || (e.draw(), (e.drawTimer = null));
          }, 1e3));
      },
      draw: function () {
        return w(
          this,
          null,
          r().mark(function e() {
            var t, i, n;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (i = this.urank),
                        (n = this.earnYield),
                        w(
                          exports,
                          null,
                          r().mark(function e() {
                            var t, a, o, h, d, c, s, l, u, g, x, f, v, w, y;
                            return r().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (o =
                                        "-1" == i.score ||
                                        "--" == i.score ||
                                        "--" == i.rank ||
                                        "" == i.rank),
                                      (h = "--"),
                                      o
                                        ? (h = n)
                                        : ((d = parseFloat(i.score)),
                                          (h = isNaN(d)
                                            ? "--"
                                            : (d / 1e4).toFixed(2))),
                                      (c = o ? "暂无排名" : i.rank),
                                      (s = "暂无排名" == c ? "gray" : ""),
                                      (l =
                                        "暂无排名" == c
                                          ? "smallsize"
                                          : "bigsize"),
                                      (u = "red"),
                                      0 == h || "--" == h
                                        ? (u = "gray")
                                        : h < 0 && (u = "green"),
                                      "--" !== h && (h = "".concat(h, "%")),
                                      (g =
                                        (null ==
                                        (t = null == Z ? void 0 : Z.miniProgram)
                                          ? void 0
                                          : t.appId) === p.XCX_APPID.MPWZQ
                                          ? "https://st.gtimg.com/design/62b340b89b2d00925bc393f0dee729d6.png"
                                          : "https://wzq.gtimg.com/image/mp-weapp/assets/share-normal/logo_zxg_normal.png"),
                                      (x =
                                        (null ==
                                        (a = null == Z ? void 0 : Z.miniProgram)
                                          ? void 0
                                          : a.appId) === p.XCX_APPID.MPWZQ
                                          ? "https://st.gtimg.com/design/9dfda82f15f129d19be9f1d50ca8c04d.png"
                                          : "https://st.gtimg.com/design/950a0e9e85d233a94b06ffff83f68229.png"),
                                      (f = o
                                        ? "https://st.gtimg.com/design/d6f11d70a5e3b30f07dd11ee06851d35.png"
                                        : "https://st.gtimg.com/design/740db9b1e4e130b61d1dedc37147f7cb.png"),
                                      (v = +new Date()),
                                      (w =
                                        { smallsize: 10, bigsize: 16 }[l] ||
                                        10),
                                      (y = [
                                        {
                                          type: "image",
                                          url: "".concat(f, "?t=").concat(v),
                                          x: 0,
                                          y: 0,
                                          width: 200,
                                          height: 320,
                                        },
                                        {
                                          type: "image",
                                          url: "".concat(g, "?t=").concat(v),
                                          x: 15,
                                          y: 15,
                                          width: 60,
                                          height: 12,
                                        },
                                        {
                                          type: "image",
                                          url: "".concat(x, "?t=").concat(v),
                                          x: 154,
                                          y: 274,
                                          width: 36,
                                          height: 36,
                                          fontFamily: "sans-serif",
                                        },
                                        {
                                          type: "text",
                                          text: h,
                                          x: 27,
                                          y: 170,
                                          style: {
                                            color:
                                              {
                                                red: "#e63535",
                                                green: "#1caa3c",
                                                gray: "#98A0B3",
                                              }[u] || "#98A0B3",
                                            fontSize: 16,
                                            fontWeight: 600,
                                            fontFamily: "sans-serif",
                                          },
                                        },
                                        {
                                          type: "text",
                                          text: c,
                                          x: 27,
                                          y: 224,
                                          style: {
                                            color: { gray: "#98A0B3" }[s] || "",
                                            fontSize: w,
                                            fontWeight: 16 === w ? 600 : 400,
                                            fontFamily: "sans-serif",
                                          },
                                        },
                                      ]),
                                      (e.next = 8),
                                      L.draw(y, { width: 200, height: 320 })
                                    );
                                  case 8:
                                    return e.abrupt(
                                      "return",
                                      e.sent.tempFilePath
                                    );
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      );
                    case 2:
                      (t = e.sent), (N = t), this.$emit("showShareText");
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      hide: function (e) {
        var t;
        "widget" !==
          (null == (t = null == e ? void 0 : e.target) ? void 0 : t.id) &&
          this.$emit("onHideShare");
      },
    },
  },
  Q = y._export_sfc(Y, [
    [
      "render",
      function (e, t, i, n, r, a) {
        return {
          a: y.n(i.showShare ? "show" : ""),
          b: y.o(function () {
            return a.hide && a.hide.apply(a, arguments);
          }, 4555),
        };
      },
    ],
    ["__scopeId", "data-v-34e29ae5"],
  ]);
wx.createComponent(Q);
