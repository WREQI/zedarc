var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../../../@babel/runtime/helpers/inherits"),
  a = require("../../../../../@babel/runtime/helpers/createSuper"),
  r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../../@babel/runtime/helpers/typeof"),
  h = Object.defineProperty,
  o = function (t, e, n) {
    return (function (t, e, n) {
      return e in t
        ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n);
    })(t, "symbol" != s(e) ? e + "" : e, n);
  },
  c = require("../utils/util.js"),
  u = require("../../../../../common/vendor.js"),
  l = (function () {
    function t() {
      var e = this;
      r(this, t),
        o(this, "dpr", 2),
        o(this, "width", 120),
        o(this, "height", 112),
        o(this, "renderPoints", 40),
        setTimeout(function () {
          if (c.isMp()) {
            var t = getApp();
            if (t) {
              var n = t.globalData.systemInfo;
              e.dpr = n.pixelRatio;
            }
          } else window && (e.dpr = window.devicePixelRatio || e.dpr);
        }, 500);
    }
    return (
      i(t, [
        {
          key: "calculateMaxMin",
          value: function (t, e) {
            var n = 0,
              a = 0;
            return (
              t.forEach(function (t) {
                n || (n = t),
                  a || (a = t),
                  +t > +n && (n = t),
                  +t < +a && (a = t);
              }),
              (t.max = +n),
              (t.min = +a),
              (t.autoRefresh = !1),
              +n == +a &&
                +n != +e &&
                ((t.max = +e > +n ? +e : +n),
                (t.min = +e < +a ? +e : +a),
                (t.autoRefresh = !0)),
              +n == +a &&
                +n == +e &&
                ((t.max = 1.01 * t.max),
                (t.min = 0.99 * t.min),
                (t.autoRefresh = !0)),
              +n == +a &&
                +n == +e &&
                0 == +n &&
                ((t.max = 1), (t.min = -1), (t.autoRefresh = !0)),
              t
            );
          },
        },
        {
          key: "drawMinsChart",
          value: function (t, e, n) {
            var a = this,
              r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              i = (e.max + e.min) / 2,
              s = Math.max(Math.abs(e.max - i), Math.abs(e.min - i));
            if (0 !== s) {
              t.save(),
                t.clearRect(0, -this.height, 2 * this.width, 2 * this.height);
              var h = [0, 0],
                o = [0, 0],
                c = function () {
                  t.beginPath(),
                    (t.lineWidth = a.dpr),
                    (t.strokeStyle = n),
                    (t.lineJoin = "round"),
                    e.forEach(function (e, n) {
                      var r = (-(e - i) / s) * (a.height / 2 - 2),
                        c = a.width * (n / a.renderPoints);
                      0 === n && (h = [c, r]),
                        (o = [c, r]),
                        0 === n ? t.moveTo(c, r) : t.lineTo(c, r);
                    }),
                    t.stroke();
                };
              c(),
                r &&
                  ((t.strokeStyle = "transparent"),
                  t.lineTo(o[0], this.height / 2),
                  t.lineTo(0, this.height / 2),
                  t.lineTo(h[0], h[1]),
                  t.stroke(),
                  t.closePath(),
                  (t.fillStyle = this.getGradient(t, this.height, n)),
                  t.fill(),
                  c()),
                t.restore();
            }
          },
        },
        {
          key: "getGradient",
          value: function (t, e, n) {
            var a = {
              "#E63535": "230,53,53",
              "#1CAA3C": "28,170,60",
              "#7a8499": "122,132,153",
            };
            try {
              var r = t.createLinearGradient(0, 0, 0, e);
              return (
                r.addColorStop(0, "rgba(".concat(a[n], ", 0.2)")),
                r.addColorStop(0.2, "rgba(".concat(a[n], ", 0.15)")),
                r.addColorStop(0.4, "rgba(".concat(a[n], ", 0.1)")),
                r.addColorStop(0.6, "rgba(".concat(a[n], ", 0.01)")),
                r.addColorStop(0.8, "rgba(255, 255, 255)"),
                r.addColorStop(1, "rgba(255, 255, 255)"),
                r
              );
            } catch (t) {
              return {
                "#E63535": "#FDF3F3",
                "#1CAA3C": "#F1FAF3",
                "#7a8499": "#F7F8F9",
              }[n];
            }
          },
        },
        {
          key: "getStrokeColor",
          value: function (t) {
            switch (t) {
              case "bg-rise":
                return "#E63535";
              case "bg-drop":
                return "#1CAA3C";
              default:
                return "#7a8499";
            }
          },
        },
        {
          key: "setSize",
          value: function (t) {
            (this.width = 2 * (t ? 54 : 60)), (this.height = 2 * (t ? 32 : 56));
          },
        },
      ]),
      t
    );
  })(),
  v = (function (s) {
    n(c, l);
    var h = a(c);
    function c() {
      var t;
      return (
        r(this, c),
        (t = h.apply(this, arguments)),
        o(e(t), "ocInstance", null),
        o(e(t), "canvas", null),
        t
      );
    }
    return (
      i(c, [
        {
          key: "startDrawLineChart",
          value: function (e, n) {
            var a,
              r,
              i,
              s =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              h =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (
              (a = this),
              (r = null),
              (i = t().mark(function a() {
                var r, i;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            this.setSize(h),
                            this.getOCInstance(),
                            (r = this.ocInstance),
                            this.drawMinsChart(r, e, n, s),
                            (t.prev = 3),
                            (t.next = 6),
                            this.getDataUrl()
                          );
                        case 6:
                          (i = t.sent), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(3)),
                            (i = "data:image/png;base64,");
                        case 12:
                          return t.abrupt("return", i);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  a,
                  this,
                  [[3, 9]]
                );
              })),
              new Promise(function (t, e) {
                var n = function t(n) {
                    try {
                      h(i.next(n));
                    } catch (t) {
                      e(t);
                    }
                  },
                  s = function (t) {
                    try {
                      h(i.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  h = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(n, s);
                  };
                h((i = i.apply(a, r)).next());
              })
            );
          },
        },
        {
          key: "getDataUrl",
          value: function () {
            var t = this;
            return new Promise(function (e) {
              t.canvas.convertToBlob().then(function (t) {
                var n = (window.URL || window.webkitURL).createObjectURL(t);
                e(n);
              });
            });
          },
        },
        {
          key: "getOCInstance",
          value: function () {
            var t = new OffscreenCanvas(this.width, this.height);
            (this.canvas = t),
              (this.ocInstance = t.getContext("2d")),
              this.ocInstance.translate(0, this.height / 2);
          },
        },
      ]),
      c
    );
  })(),
  d =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  f = (function (t) {
    n(h, l);
    var s = a(h);
    function h() {
      var t;
      return (
        r(this, h),
        (t = s.apply(this, arguments)),
        o(e(t), "ocInstance", null),
        o(e(t), "canvas", null),
        t
      );
    }
    return (
      i(h, [
        {
          key: "getOCInstance",
          value: function () {
            if (!this.ocInstance) {
              var t = u.wx$1.createOffscreenCanvas({
                type: "2d",
                width: this.width,
                height: this.height,
              });
              if (((this.ocInstance = t.getContext("2d")), !this.ocInstance))
                return null;
              var e = this.ocInstance.canvas;
              e && !e.toDataURL && (e.toDataURL = t.toDataURL),
                this.ocInstance.translate(0, this.height / 2);
            }
            return this.ocInstance;
          },
        },
        {
          key: "startDrawLineChart",
          value: function (t, e) {
            var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this.setSize(a), this.getOCInstance();
            var r,
              i = this.ocInstance;
            if (!i) return d;
            this.drawMinsChart(i, t, e, n);
            try {
              r = i.canvas.toDataURL("image/png");
            } catch (t) {
              r = d;
            }
            return r;
          },
        },
      ]),
      h
    );
  })(),
  g = (function (t) {
    n(h, l);
    var s = a(h);
    function h() {
      var t;
      return (
        r(this, h),
        (t = s.apply(this, arguments)),
        o(e(t), "ctxInstance", null),
        o(e(t), "canvas", null),
        t
      );
    }
    return (
      i(h, [
        {
          key: "startDrawLineChart",
          value: function (t, e) {
            var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this.setSize(a), this.getCtxInstance();
            var r = this.ctxInstance;
            if (r) {
              var i;
              this.drawMinsChart(r, t, e, n);
              try {
                i = this.canvas.toDataURL();
              } catch (t) {
                i = "data:image/png;base64,";
              }
              return i;
            }
          },
        },
        {
          key: "getCtxInstance",
          value: function () {
            (this.canvas = document.createElement("canvas")),
              (this.canvas.width = this.width),
              (this.canvas.height = this.height);
            var t = this.canvas.getContext("2d");
            t.translate(0, this.height / 2), (this.ctxInstance = t);
          },
        },
      ]),
      h
    );
  })(),
  p = function () {
    return c.isMp()
      ? new f()
      : c.isMp() || void 0 !== window.OffscreenCanvas
      ? new v()
      : new g();
  },
  m = null,
  b = null;
exports.chartImageUtil = function (t) {
  return t ? (b || (b = p()), b) : (m || (m = p()), m);
};
