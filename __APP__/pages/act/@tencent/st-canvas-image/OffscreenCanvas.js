var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper"),
  r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/classCallCheck"),
  h = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  d = Object.defineProperty,
  c = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  x = Object.prototype.propertyIsEnumerable,
  v = function (e, t, i) {
    return t in e
      ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  g = function (e, t) {
    for (var i in t || (t = {})) u.call(t, i) && v(e, i, t[i]);
    if (s) {
      var n,
        r = o(s(t));
      try {
        for (r.s(); !(n = r.n()).done; ) {
          i = n.value;
          x.call(t, i) && v(e, i, t[i]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return c(e, l(t));
  },
  y = require("../../../../common/vendor.js"),
  w = { width: 480, height: 384 },
  p = "2d",
  b = (function (e) {
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
  })(b || {}),
  m = (function (e) {
    return (
      (e.left = "left"),
      (e.center = "center"),
      (e.right = "right"),
      (e.top = "top"),
      (e.middle = "middle"),
      (e.bottom = "bottom"),
      e
    );
  })(m || {}),
  k = 0,
  T = 30,
  P = "png",
  C = 1,
  R = 30,
  S = "#000",
  A = "normal",
  F = "stockFont",
  I = 4,
  O = 1.4,
  q = "测试",
  z = 0,
  D = 0.04,
  j = function (e) {
    return "function" == typeof e;
  },
  B = (function () {
    function e() {
      a(this, e);
    }
    return (
      h(e, [
        {
          key: "draw",
          value: function (e) {
            return (
              (t = this),
              null,
              (i = r().mark(function t() {
                var i, n, a, h;
                return r().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          this.clear(),
                            this.initCanvas(),
                            (i = o(e)),
                            (t.prev = 2),
                            i.s();
                        case 4:
                          if ((n = i.n()).done) {
                            t.next = 37;
                            break;
                          }
                          if ((a = n.value).type !== b.image) {
                            t.next = 11;
                            break;
                          }
                          return (t.next = 9), this.drawImage(a);
                        case 9:
                          t.next = 35;
                          break;
                        case 11:
                          if (a.type !== b.text) {
                            t.next = 16;
                            break;
                          }
                          return (t.next = 14), this.drawText(a);
                        case 14:
                          t.next = 35;
                          break;
                        case 16:
                          if (a.type !== b.rect) {
                            t.next = 21;
                            break;
                          }
                          return (t.next = 19), this.drawRect(a);
                        case 19:
                          t.next = 35;
                          break;
                        case 21:
                          if (a.type !== b.table) {
                            t.next = 26;
                            break;
                          }
                          return (t.next = 24), this.drawTable(a);
                        case 24:
                          t.next = 35;
                          break;
                        case 26:
                          if (a.type !== b.barcharts) {
                            t.next = 31;
                            break;
                          }
                          return (t.next = 29), this.drawBarCharts(a);
                        case 29:
                          t.next = 35;
                          break;
                        case 31:
                          if (((t.t0 = a.type === b.card), !t.t0)) {
                            t.next = 35;
                            break;
                          }
                          return (t.next = 35), this.drawCard(a);
                        case 35:
                          t.next = 4;
                          break;
                        case 37:
                          t.next = 42;
                          break;
                        case 39:
                          (t.prev = 39), (t.t1 = t.catch(2)), i.e(t.t1);
                        case 42:
                          return (t.prev = 42), i.f(), t.finish(42);
                        case 45:
                          return (t.next = 47), this.toImage();
                        case 47:
                          return (
                            (h = t.sent), t.abrupt("return", (this.clear(), h))
                          );
                        case 49:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 39, 42, 45]]
                );
              })),
              new Promise(function (e, n) {
                var r = function (e) {
                    try {
                      h(i.next(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  a = function (e) {
                    try {
                      h(i.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  h = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, a);
                  };
                h((i = i.apply(t, null)).next());
              })
            );
            var t, i;
          },
        },
      ]),
      e
    );
  })(),
  M = [
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
  U = [
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
  _ = [
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
  L = [
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
  $ = function (e) {
    var t = e;
    return (
      e.width && (t.width = e.width - 4),
      e.height && (t.height = e.height - 4),
      t
    );
  },
  E = new ((function (r) {
    i(d, B);
    var o = n(d);
    function d() {
      return a(this, d), o.apply(this, arguments);
    }
    return (
      h(d, [
        {
          key: "initCanvas",
          value: function () {
            if (!this.canvas) {
              this.canvas = y.wx$1.createOffscreenCanvas(g({ type: p }, w));
              var e = this.canvas.getContext(p);
              e.canvas &&
                !e.canvas.toDataURL &&
                (e.canvas.toDataURL = this.canvas.toDataURL);
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
              h = a.env,
              o = void 0 === h ? {} : h,
              d = o.IS_PCWEIXIN,
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
                    fileType: P,
                    quality: C,
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
            var t = this.canvas.getContext(p),
              i = e.text,
              n = void 0 === i ? "" : i,
              r = e.x,
              a = void 0 === r ? k : r,
              h = e.y,
              o = void 0 === h ? k : h,
              d = e.style || {},
              c = d.fontSize,
              l = void 0 === c ? R : c,
              s = d.color,
              u = void 0 === s ? S : s,
              x = d.fontWeight,
              v = void 0 === x ? A : x,
              g = d.textAlign,
              f = void 0 === g ? m.left : g;
            (t.font = "".concat(v, " ").concat(l, "px ").concat(F)),
              (t.textAlign = f),
              (t.fillStyle = u),
              t.fillText(n, a, o);
          },
        },
        {
          key: "drawImage",
          value: function (e) {
            var t = this,
              i = this.canvas.getContext(p),
              n = e.url,
              r = e.x,
              a = e.y,
              h = e.width,
              o = void 0 === h ? this.canvas.width : h,
              d = e.height,
              c = void 0 === d ? this.canvas.height : d;
            return new Promise(function (e, h) {
              var d = t.canvas.createImage();
              (d.onload = function () {
                i.drawImage(d, r, a, o, c), i.restore(), e(d), (d = null);
              }),
                (d.onerror = function (e) {
                  h(e), (d = null);
                }),
                (d.src = n);
            });
          },
        },
        {
          key: "drawRect",
          value: function (e) {
            var i = this.canvas.getContext(p),
              n = e.x,
              r = void 0 === n ? k : n,
              a = e.y,
              h = void 0 === a ? k : a,
              o = e.width,
              d = void 0 === o ? w.width : o,
              c = e.height,
              l = void 0 === c ? w.height : c,
              s = e.fill,
              u = e.stroke,
              x = e.round;
            if ((u && (i.strokeStyle = u), s && (i.fillStyle = s), x))
              if (i.roundRect)
                i.beginPath(),
                  i.roundRect(r, h, d, l, x),
                  i.fill(),
                  i.closePath();
              else {
                var v = t(x, 4),
                  g = v[0],
                  f = void 0 === g ? k : g,
                  y = v[1],
                  b = void 0 === y ? k : y,
                  m = v[2],
                  T = void 0 === m ? k : m,
                  P = v[3],
                  C = void 0 === P ? k : P;
                i.beginPath(),
                  i.moveTo(r + f, h),
                  i.arcTo(r + d, h, r + d, h + l, b),
                  i.arcTo(r + d, h + l, r, h + l, T),
                  i.arcTo(r, h + l, r, h, C),
                  i.arcTo(r, h, r + d, h, f),
                  i.closePath(),
                  i.fill();
              }
            else s ? i.fillRect(r, h, d, l) : i.strokeRect(r, h, d, l);
          },
        },
        {
          key: "clear",
          value: function () {
            if (this.canvas) {
              var e = this.canvas.getContext(p);
              e.clearRect(k, k, this.canvas.width, this.canvas.height),
                (this.canvas = null),
                (e = null);
            }
          },
        },
        {
          key: "measureText",
          value: function (e) {
            var t = this.canvas.getContext(p),
              i = e.text,
              n = void 0 === i ? q : i,
              r = (e.style || {}).fontSize,
              a = void 0 === r ? R : r;
            (t.textBaseline = m.middle),
              (t.font = "".concat(a, "px ").concat(F));
            var h = t.measureText(n);
            return (h.actualBoundingBoxAscent + h.actualBoundingBoxDescent) / I;
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
              this.drawRect({ x: t, y: i, width: n, height: r, type: b.rect });
            for (
              var a = e.data,
                h = a.rows,
                o = a.columns,
                d = o.reduce(function (e, t) {
                  return e + t.width;
                }, 0),
                c = i,
                l = 0;
              c < i + r && h.data[l];
              c += h.height, l++
            )
              for (var s = 0, u = 0; u < o.length; u++) {
                var x = o[u].width,
                  v = t + s;
                o[u].textAlign === m.right
                  ? (v += n * (x / d))
                  : o[u].textAlign === m.center && (v += (n * (x / d)) / 2);
                h.valign === m.middle
                  ? h.height / 2
                  : h.valign === m.bottom && h.height,
                  this.drawText({
                    type: b.text,
                    text: String(h.data[l][u]),
                    x: v,
                    y: c + h.height / 2,
                    style: g({}, o[u]),
                  }),
                  (s += n * (x / d));
              }
          },
        },
        {
          key: "drawBarCharts",
          value: function (t) {
            var i = t.x,
              n = void 0 === i ? k : i,
              r = t.y,
              a = void 0 === r ? k : r,
              h = t.width,
              o = void 0 === h ? w.width : h,
              d = t.height,
              c = void 0 === d ? w.height : d,
              l = t.log,
              s = void 0 !== l && l,
              u = t.style,
              x = t.data,
              v = x.field,
              y = x.label,
              p = x.data,
              T = p.map(function (e) {
                return e[v];
              }),
              P = p.map(function (e) {
                return e[y];
              }),
              C = T.length,
              R = Math.max.apply(Math, e(T)),
              S = o / (C - 0.3),
              A = 0.7 * S,
              F = 0.7 * c;
            s &&
              this.drawRect({ x: n, y: a, width: o, height: c, type: b.rect });
            for (var I = 0; I < T.length; I++)
              this.drawRect({
                x: n + I * S,
                y: a + 0.85 * c,
                width: A,
                height: (-T[I] / R) * F,
                fill: j(u.fill) ? u.fill(I) : u.fill,
                type: b.rect,
              }),
                this.drawText({
                  type: b.text,
                  text: T[I],
                  x: n + I * S + A / 2,
                  y: a - (T[I] / R) * F + 0.82 * c,
                  style: f(g({}, u), {
                    fontSize: u.fontSize,
                    textAlign: u.textAlign || m.center,
                    color: j(u.color) ? u.color(I) : u.color,
                  }),
                });
            for (var O = 0; O < P.length; O++)
              this.drawText({
                type: b.text,
                text: P[O],
                x: n + O * S + A / 2,
                y: a + c * (1 - D),
                style: f(g({}, u), {
                  fontSize: u.fontSize,
                  textAlign: u.textAlign || m.center,
                  color: u.color(O),
                }),
              });
          },
        },
        {
          key: "resetZeroPoint",
          value: function (e) {
            var t = e.x,
              i = e.y;
            this.canvas.getContext(p).translate(t, i);
          },
        },
        {
          key: "drawCard",
          value: function (e) {
            var t = e.x,
              i = void 0 === t ? T : t,
              n = e.y,
              r = void 0 === n ? T : n,
              a = e.width,
              h = e.height,
              o = e.log,
              d = void 0 === o || o,
              c = e.style,
              l = e.data,
              s = l.field,
              u = l.label,
              x = l.data;
            d &&
              this.drawRect({
                x: i,
                y: r,
                width: a,
                height: h,
                round: [z, z, z, z],
                fill: S,
                type: b.rect,
              });
            var v,
              f = null;
            x &&
              (f = (function (e) {
                var t,
                  i,
                  n = null == (t = e[0]) ? void 0 : t.zdf,
                  r = null == (i = e[5]) ? void 0 : i.zdf;
                return n < 2 && r >= -4
                  ? M
                  : n > 4 && Math.abs(r) <= n
                  ? _
                  : r < -4 && Math.abs(r) > n
                  ? L
                  : U;
              })(x)),
              this.resetZeroPoint({ x: i + 2, y: r + 2 });
            for (var y = 0; y < f.length; y++)
              for (var w = f[y], p = 0; p < w.length; p++)
                this.drawRect(
                  $({
                    x: w[p].x * a,
                    y: w[p].y * h,
                    width: w[p].width * a,
                    height: w[p].height * h,
                    round: w[p].round,
                    fill:
                      ((v = x[w[p].index][s]), v >= 0 ? "#fceded" : "#f0f9f2"),
                  })
                ),
                  this.drawText({
                    type: b.text,
                    x: w[p].x * a + (w[p].width * a) / 2,
                    y: w[p].y * h + (w[p].height * h) / 2,
                    width: w[p].width * a,
                    height: w[p].height * h,
                    text: String(x[w[p].index][u]),
                    style: g({}, c),
                  }),
                  this.drawText({
                    type: b.text,
                    x: w[p].x * a + (w[p].width * a) / 2,
                    y: w[p].y * h + (w[p].height * h) / 2 + c.fontSize * O,
                    width: w[p].width * a,
                    height: w[p].height * h,
                    text: "".concat(x[w[p].index][s], "%"),
                    style: g({}, c),
                  });
          },
        },
      ]),
      d
    );
  })())();
exports.OffscreenCanvasImage = E;
