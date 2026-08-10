require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../../@babel/runtime/helpers/createClass"),
  u = Object.defineProperty,
  c = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  v = function (t, e, r) {
    return e in t
      ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  f = function (t, e, r) {
    return new Promise(function (n, a) {
      var i = function (t) {
          try {
            u(r.next(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          try {
            u(r.throw(t));
          } catch (t) {
            a(t);
          }
        },
        u = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(i, s);
        };
      u((r = r.apply(t, e)).next());
    });
  },
  d = require("../../../../../common/vendor.js"),
  g = require("../../stock-hq-data/index.js"),
  b = require("../../stock-hq-data/utils.js"),
  m =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  y = {
    big: { width: 120, height: 48 },
    medium: { width: 60, height: 56 },
    mini: { width: 54, height: 32 },
  },
  w = { "bg-rise": "#E63535", "bg-drop": "#1CAA3C", "bg-peace": "#7a8499" },
  x = {
    "#E63535": "230,53,53",
    "#1CAA3C": "28,170,60",
    "#7a8499": "122,132,153",
  },
  k = { "#E63535": "#FDF3F3", "#1CAA3C": "#F1FAF3", "#7a8499": "#F7F8F9" },
  C = (function () {
    function t() {
      i(this, t),
        (this.dpr = 2),
        (this.canvasWidth = 0),
        (this.canvasHeight = 0),
        (this.renderPoints = 40);
    }
    return (
      s(t, [
        {
          key: "calculateMaxMin",
          value: function (t, e) {
            for (var r = 0, n = 0, i = 0; i < t.length; i++) {
              var s = +t[i];
              (0 === i || s > r) && (r = s), (0 === i || s < n) && (n = s);
            }
            var u = !1;
            return (
              r === n &&
                r !== +e &&
                ((r = +e > r ? +e : r), (n = +e < n ? +e : n), (u = !0)),
              r === n && r === +e && ((r *= 1.01), (n *= 0.99), (u = !0)),
              r === n && r === +e && 0 === r && ((r = 1), (n = -1), (u = !0)),
              { priceList: a(t), max: r, min: n, autoRefresh: u }
            );
          },
        },
        {
          key: "drawMinsChart",
          value: function (t, e, r, n) {
            var a = this,
              i = (e.max + e.min) / 2,
              s = Math.max(Math.abs(e.max - i), Math.abs(e.min - i));
            if (0 !== s) {
              var u = e.priceList;
              t.save(),
                t.clearRect(
                  0,
                  -this.canvasHeight / 2,
                  this.canvasWidth,
                  this.canvasHeight
                );
              var c = [0, 0],
                o = [0, 0],
                l = function () {
                  t.beginPath(),
                    (t.lineWidth = a.dpr),
                    (t.strokeStyle = r),
                    (t.lineJoin = "round");
                  for (var e = 0; e < u.length; e++) {
                    var n = (-(+u[e] - i) / s) * (a.canvasHeight / 2 - 2),
                      l = a.canvasWidth * (e / a.renderPoints);
                    0 === e
                      ? ((c = [l, n]), t.moveTo(l, n))
                      : ((o = [l, n]), t.lineTo(l, n));
                  }
                  t.stroke();
                };
              l(),
                n &&
                  ((t.strokeStyle = "transparent"),
                  t.lineTo(o[0], this.canvasHeight / 2),
                  t.lineTo(0, this.canvasHeight / 2),
                  t.lineTo(c[0], c[1]),
                  t.stroke(),
                  t.closePath(),
                  (t.fillStyle = this.createGradient(t, this.canvasHeight, r)),
                  t.fill(),
                  l()),
                t.restore();
            }
          },
        },
        {
          key: "configure",
          value: function (t, e) {
            (this.canvasWidth = t.width),
              (this.canvasHeight = t.height),
              (this.renderPoints = e);
          },
        },
        {
          key: "createGradient",
          value: function (t, e, r) {
            var n =
              x[r] ||
              (function (t) {
                if (!t) return null;
                var e,
                  r,
                  n,
                  a = t.replace("#", "");
                if (3 === a.length)
                  (e = parseInt(a[0] + a[0], 16)),
                    (r = parseInt(a[1] + a[1], 16)),
                    (n = parseInt(a[2] + a[2], 16));
                else {
                  if (6 !== a.length) return null;
                  (e = parseInt(a.slice(0, 2), 16)),
                    (r = parseInt(a.slice(2, 4), 16)),
                    (n = parseInt(a.slice(4, 6), 16));
                }
                return isNaN(e) || isNaN(r) || isNaN(n)
                  ? null
                  : "".concat(e, ",").concat(r, ",").concat(n);
              })(r);
            if (!n) return k[r] || "#F7F8F9";
            try {
              var a = t.createLinearGradient(0, 0, 0, e);
              return (
                a.addColorStop(0, "rgba(".concat(n, ", .2)")),
                a.addColorStop(0.2, "rgba(".concat(n, ", .15)")),
                a.addColorStop(0.4, "rgba(".concat(n, ", .1)")),
                a.addColorStop(0.6, "rgba(".concat(n, ", .01)")),
                a.addColorStop(0.8, "rgba(255, 255, 255, 1)"),
                a.addColorStop(1, "rgba(255, 255, 255, 1)"),
                a
              );
            } catch (t) {
              return k[r] || "#F7F8F9";
            }
          },
        },
      ]),
      t
    );
  })(),
  A = (function (t) {
    r(u, C);
    var a = n(u);
    function u() {
      var t;
      return (
        i(this, u),
        ((t = a.call(this)).canvas = null),
        (t.ctx = null),
        (t.supportsOffscreen = void 0 !== globalThis.OffscreenCanvas),
        "undefined" != typeof window &&
          (t.dpr = window.devicePixelRatio || t.dpr),
        t
      );
    }
    return (
      s(u, [
        {
          key: "drawChart",
          value: function (t, r, n, a, i, s) {
            return f(
              this,
              null,
              e().mark(function u() {
                var c;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (this.configure(i, s), this.initCanvas(), this.ctx)
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", m);
                        case 2:
                          return (
                            1 ===
                              (c = this.calculateMaxMin(t, r)).priceList
                                .length && c.priceList.push(c.priceList[0]),
                            this.drawMinsChart(this.ctx, c, n, a),
                            (e.prev = 4),
                            (e.next = 7),
                            this.exportImage()
                          );
                        case 7:
                          return e.abrupt("return", e.sent);
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(4)),
                            e.abrupt("return", m)
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  u,
                  this,
                  [[4, 10]]
                );
              })
            );
          },
        },
        {
          key: "dispose",
          value: function () {
            this.canvas &&
              this.canvas instanceof HTMLCanvasElement &&
              ((this.canvas.width = 0), (this.canvas.height = 0)),
              (this.canvas = null),
              (this.ctx = null);
          },
        },
        {
          key: "initCanvas",
          value: function () {
            if (
              (this.canvas &&
                this.canvas instanceof HTMLCanvasElement &&
                ((this.canvas.width = 0), (this.canvas.height = 0)),
              (this.canvas = null),
              (this.ctx = null),
              this.supportsOffscreen)
            )
              this.canvas = new globalThis.OffscreenCanvas(
                this.canvasWidth,
                this.canvasHeight
              );
            else {
              var t = document.createElement("canvas");
              (t.width = this.canvasWidth),
                (t.height = this.canvasHeight),
                (this.canvas = t);
            }
            (this.ctx = this.canvas.getContext("2d")),
              this.ctx && this.ctx.translate(0, this.canvasHeight / 2);
          },
        },
        {
          key: "exportImage",
          value: function () {
            return f(
              this,
              null,
              e().mark(function t() {
                var r;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (this.canvas) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", m);
                        case 2:
                          if (!this.supportsOffscreen || !this.canvas) {
                            t.next = 7;
                            break;
                          }
                          return (
                            (t.next = 5),
                            this.canvas.convertToBlob({ type: "image/png" })
                          );
                        case 5:
                          return (
                            (r = t.sent),
                            t.abrupt(
                              "return",
                              (window.URL || window.webkitURL).createObjectURL(
                                r
                              )
                            )
                          );
                        case 7:
                          return t.abrupt(
                            "return",
                            this.canvas.toDataURL("image/png")
                          );
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
      ]),
      u
    );
  })(),
  S = null,
  L = (function (t) {
    r(u, C);
    var a = n(u);
    function u() {
      var t;
      return (
        i(this, u),
        ((t = a.call(this)).canvas = null),
        (t.ctx = null),
        t.initDpr(),
        t
      );
    }
    return (
      s(u, [
        {
          key: "drawChart",
          value: function (t, r, n, a, i, s) {
            return f(
              this,
              null,
              e().mark(function u() {
                var c;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (this.configure(i, s), this.initCanvas(), this.ctx)
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", m);
                        case 2:
                          return (
                            1 ===
                              (c = this.calculateMaxMin(t, r)).priceList
                                .length && c.priceList.push(c.priceList[0]),
                            this.drawMinsChart(this.ctx, c, n, a),
                            (e.prev = 4),
                            e.abrupt("return", this.exportImage())
                          );
                        case 8:
                          return (
                            (e.prev = 8),
                            (e.t0 = e.catch(4)),
                            e.abrupt("return", m)
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  u,
                  this,
                  [[4, 8]]
                );
              })
            );
          },
        },
        {
          key: "dispose",
          value: function () {
            (this.canvas = null), (this.ctx = null);
          },
        },
        {
          key: "initDpr",
          value: function () {
            try {
              if (null !== S) return void (this.dpr = S);
              var t = d.wx$1.getSystemInfoSync();
              (S = t.pixelRatio || this.dpr), (this.dpr = S);
            } catch (t) {}
          },
        },
        {
          key: "initCanvas",
          value: function () {
            var t;
            try {
              if (
                ((this.canvas = d.wx$1.createOffscreenCanvas({
                  type: "2d",
                  width: this.canvasWidth,
                  height: this.canvasHeight,
                })),
                (this.ctx = this.canvas.getContext("2d")),
                !this.ctx)
              )
                return;
              var e = this.ctx.canvas;
              e &&
                !e.toDataURL &&
                (e.toDataURL =
                  null == (t = this.canvas.toDataURL)
                    ? void 0
                    : t.bind(this.canvas)),
                this.ctx.translate(0, this.canvasHeight / 2);
            } catch (t) {
              this.ctx = null;
            }
          },
        },
        {
          key: "exportImage",
          value: function () {
            var t, e;
            try {
              return (
                ((null == (e = null == (t = this.ctx) ? void 0 : t.canvas)
                  ? void 0
                  : e.toDataURL) &&
                  this.ctx.canvas.toDataURL("image/png")) ||
                m
              );
            } catch (t) {
              return m;
            }
          },
        },
      ]),
      u
    );
  })(),
  D = function () {
    return void 0 !== d.wx$1 &&
      "function" == typeof d.wx$1.request &&
      "function" == typeof d.wx$1.getSystemInfoSync
      ? new L()
      : new A();
  },
  R = [
    "sh",
    "sz",
    "bj",
    "hk",
    "us",
    "pt",
    "uk",
    "fu",
    "ft",
    "nq",
    "hd",
    "cs",
    "sp",
  ],
  q = {},
  H = new Map(),
  P = null;
function T() {
  return (
    P ||
      (P = new g.DetailApi(function () {
        for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        if (1 === n.length)
          return d.StockBridge.request(
            n[0],
            d.RequestTypeEnum.GET,
            {},
            { forceCallback: !0 }
          );
        var s,
          u = [].concat(n);
        return (
          u[3] &&
            (u[3] =
              ((s = (function (e, r) {
                for (var n in r || (r = {})) h.call(r, n) && v(e, n, r[n]);
                if (l) {
                  var a,
                    i = t(l(r));
                  try {
                    for (i.s(); !(a = i.n()).done; ) {
                      n = a.value;
                      p.call(r, n) && v(e, n, r[n]);
                    }
                  } catch (t) {
                    i.e(t);
                  } finally {
                    i.f();
                  }
                }
                return e;
              })({}, u[3])),
              c(s, o({ forceCallback: !0 })))),
          (e = d.StockBridge).request.apply(e, a(u))
        );
      })),
    P
  );
}
var M = function (t) {
    if (!t || t.length < 2) return !1;
    var e = t.slice(0, 2).toLowerCase();
    return R.includes(e);
  },
  O = function (t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mins";
    return "".concat(e, ":").concat(t);
  },
  I = function (t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mins",
      r = O(t, e),
      n = q[r];
    return n &&
      !(function (t) {
        return Date.now() - t.ts >= 3e5;
      })(n)
      ? n.data
      : null;
  },
  F = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
      a < r;
      a++
    )
      n[a - 1] = arguments[a];
    return f(exports, [t].concat(n), function (t) {
      var r =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e().mark(function n() {
        var a, i, s, u, c;
        return e().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                if (M(t)) {
                  n.next = 2;
                  break;
                }
                return n.abrupt("return", null);
              case 2:
                if (
                  ((a = r.chartType || "mins"),
                  (i = r.renderPoints || 0),
                  (s = O(t, a)),
                  !(u = I(t, a)))
                ) {
                  n.next = 5;
                  break;
                }
                return n.abrupt("return", u);
              case 5:
                if (!H.has(s)) {
                  n.next = 7;
                  break;
                }
                return n.abrupt("return", H.get(s));
              case 7:
                return (
                  (c = f(
                    exports,
                    null,
                    e().mark(function r() {
                      var n, u, c, o, l, h, p;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0),
                                  (n = T()),
                                  (u = b.splitSymbol(t)),
                                  (c = u.market),
                                  (o = u.scode),
                                  (l = {
                                    market: c,
                                    scode: o,
                                    openId: "stockfe",
                                  }),
                                  (h = {
                                    needProcess: !0,
                                    useNewUrl: !0,
                                    signV2: !0,
                                  }),
                                  (p = null),
                                  "fmins" !== a)
                                ) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  (e.t1 = function (t, e) {
                                    if (!t) return null;
                                    var r = t.chartData;
                                    return (null == r ? void 0 : r.items) &&
                                      0 !== r.items.length
                                      ? {
                                          stockCode: e,
                                          priceList: r.items.map(function (t) {
                                            return +t.price;
                                          }),
                                          preClose: r.preClose
                                            ? +r.preClose
                                            : 0,
                                        }
                                      : null;
                                  }),
                                  (e.next = 7),
                                  n.getFmins(l, h)
                                );
                              case 7:
                                (e.t2 = e.sent),
                                  (e.t3 = t),
                                  (e.t0 = (0, e.t1)(e.t2, e.t3)),
                                  (e.next = 18);
                                break;
                              case 12:
                                return (
                                  (e.t4 = function (t, e) {
                                    var r, n;
                                    if (!t) return null;
                                    var a = t.chartData;
                                    if (
                                      !a ||
                                      !Array.isArray(a) ||
                                      0 === a.length
                                    )
                                      return null;
                                    var i = t.raw || {},
                                      s =
                                        +((null == (r = i.qt)
                                          ? void 0
                                          : r[e]) ||
                                          (null == (n = i.qt)
                                            ? void 0
                                            : n.fields) ||
                                          [])[4] || 0;
                                    return {
                                      stockCode: e,
                                      priceList: a.map(function (t) {
                                        return +t.price;
                                      }),
                                      preClose: s,
                                    };
                                  }),
                                  (e.next = 15),
                                  n.getMins(l, h)
                                );
                              case 15:
                                (e.t5 = e.sent),
                                  (e.t6 = t),
                                  (e.t0 = (0, e.t4)(e.t5, e.t6));
                              case 18:
                                return (
                                  (p = e.t0) &&
                                    i > 0 &&
                                    p.priceList.length > i &&
                                    (p.priceList = (function (t, e) {
                                      if (t.length <= e) return t;
                                      for (
                                        var r = [],
                                          n = (t.length - 1) / (e - 1),
                                          a = 0;
                                        a < e;
                                        a++
                                      ) {
                                        var i = Math.round(n * a);
                                        r.push(t[i]);
                                      }
                                      return r;
                                    })(p.priceList, i)),
                                  e.abrupt(
                                    "return",
                                    p
                                      ? ((q[s] = { data: p, ts: Date.now() }),
                                        p)
                                      : null
                                  )
                                );
                              case 23:
                                return (
                                  (e.prev = 23),
                                  (e.t7 = e.catch(0)),
                                  e.abrupt("return", null)
                                );
                              case 26:
                                return (e.prev = 26), H.delete(s), e.finish(26);
                              case 29:
                              case "end":
                                return e.stop();
                            }
                        },
                        r,
                        null,
                        [[0, 23, 26, 29]]
                      );
                    })
                  )),
                  n.abrupt("return", (H.set(s, c), c))
                );
              case 9:
              case "end":
                return n.stop();
            }
        }, n);
      })();
    });
  },
  U = d.defineComponent({
    name: "StMiniMins",
    props: {
      chooseSymbol: { type: String, required: !0 },
      stockType: { type: String, default: "" },
      chartType: { type: String, default: "mins" },
      riseDropStyle: { type: String, default: "" },
      riseDropVal: { type: String, default: "" },
      fillChart: { type: Boolean, default: !0 },
      size: { type: String, default: "big" },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
      strokeColor: { type: String, default: "" },
      renderPoints: { type: Number, default: 40 },
    },
    setup: function (t) {
      var r = this,
        n = d.ref(""),
        i = d.ref(!1),
        s = d.ref(!1),
        u = d.ref([]),
        c = null,
        o = d.computed(function () {
          return t.width > 0 && t.height > 0;
        }),
        l = d.computed(function () {
          return o.value
            ? ""
            : "mini" === t.size
            ? "st-mini-mins__img--mini"
            : "medium" === t.size
            ? "st-mini-mins__img--medium"
            : "";
        }),
        h = d.computed(function () {
          return o.value
            ? {
                width: "".concat(t.width, "px"),
                height: "".concat(t.height, "px"),
              }
            : {};
        }),
        p = d.computed(function () {
          return t.width > 0 && t.height > 0
            ? { width: 2 * t.width, height: 2 * t.height }
            : (function (t) {
                var e = y[t] || y.big;
                return { width: 2 * e.width, height: 2 * e.height };
              })(t.size);
        }),
        v = d.computed(function () {
          return t.strokeColor
            ? t.strokeColor
            : "0.00%" === t.riseDropVal
            ? "#E63535"
            : ((e = t.riseDropStyle), w[e] || "#7a8499");
          var e;
        }),
        g = function () {
          var o =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return f(
            r,
            null,
            e().mark(function r() {
              var l, h, f, d, g, b;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((l = t.chooseSymbol), M(l))) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (
                        (e.next = 5),
                        F(l, {
                          stockType: t.stockType,
                          renderPoints: t.renderPoints,
                          chartType: t.chartType || "mins",
                        })
                      );
                    case 5:
                      if ((h = e.sent)) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      if (
                        ((f = h.priceList),
                        (d = h.preClose),
                        f && 0 !== f.length)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return", void (i.value = !0));
                    case 11:
                      if (
                        ((i.value = !1),
                        o ||
                          !s.value ||
                          f.length !== u.value.length ||
                          f[0] !== u.value[0] ||
                          f[f.length - 1] !== u.value[u.value.length - 1])
                      ) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt("return");
                    case 13:
                      return (
                        (u.value = a(f)),
                        1 === (g = a(f)).length && g.push(g[0]),
                        c || (c = D()),
                        (e.next = 18),
                        c.drawChart(
                          g,
                          d,
                          v.value,
                          t.fillChart,
                          p.value,
                          t.renderPoints
                        )
                      );
                    case 18:
                      (b = e.sent) &&
                        b !== m &&
                        ((s.value = !0), (n.value = b));
                    case 20:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          );
        };
      return (
        d.watch(
          function () {
            return [t.chooseSymbol, t.chartType];
          },
          function () {
            (s.value = !1), (u.value = []), (n.value = ""), g(!0);
          },
          { immediate: !0 }
        ),
        d.watch(
          function () {
            return [t.riseDropStyle, t.riseDropVal, t.strokeColor];
          },
          function () {
            s.value && g(!0);
          }
        ),
        d.watch(
          function () {
            return [t.size, t.width, t.height];
          },
          function () {
            s.value && g(!0);
          }
        ),
        d.onBeforeUnmount(function () {
          if (n.value && n.value.startsWith("blob:"))
            try {
              (window.URL || window.webkitURL).revokeObjectURL(n.value);
            } catch (t) {}
          c && (c.dispose(), (c = null));
        }),
        {
          imageData: n,
          isHidden: i,
          hasRenderedChart: s,
          sizeClass: l,
          imgStyle: h,
          placeholderGif:
            "https://st.gtimg.com/design/912bbaa924bdf06958a48bb0bcf35d0d.gif",
          drawChart: g,
        }
      );
    },
  }),
  j = d._export_sfc(U, [
    [
      "render",
      function (t, e, r, n, a, i) {
        return d.e(
          { a: !t.isHidden },
          t.isHidden
            ? {}
            : {
                b: t.imageData || t.placeholderGif,
                c: d.n(t.hasRenderedChart ? "st-mini-mins__img--rendered" : ""),
                d: d.n(t.sizeClass),
                e: d.s(t.imgStyle),
              }
        );
      },
    ],
    ["__scopeId", "data-v-7bae35d6"],
  ]);
wx.createComponent(j);
