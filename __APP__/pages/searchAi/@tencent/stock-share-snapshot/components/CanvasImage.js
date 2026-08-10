var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var a = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  s = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  c = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  h = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable,
  d = function (e, t, a) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
  },
  f = function (e, t) {
    for (var a in t || (t = {})) u.call(t, a) && d(e, a, t[a]);
    if (h) {
      var n,
        i = s(h(t));
      try {
        for (i.s(); !(n = i.n()).done; ) {
          a = n.value;
          v.call(t, a) && d(e, a, t[a]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  g = function (e, t, a) {
    return d(e, "symbol" != r(t) ? t + "" : t, a);
  },
  p = require("../../../../../common/vendor.js"),
  x = function (e, t) {
    var a, n, i;
    null ==
      (i =
        null ==
        (n =
          null == (a = null == window ? void 0 : window.__UNION_BRIDGE__)
            ? void 0
            : a.UNION_AEGIS)
          ? void 0
          : n.reportEvent) || i.call(n, e, t);
  };
exports.CanvasImage = (function () {
  function r() {
    n(this, r),
      g(this, "canvas", null),
      g(this, "canvasWidth", 480),
      g(this, "canvasHeight", 384),
      g(this, "fontFamily", "stockFont"),
      g(this, "measureTextCache", {});
  }
  return (
    i(r, [
      {
        key: "initCanvas",
        value: function (e) {
          (this.canvas = e),
            (this.canvas.width = this.canvasWidth),
            (this.canvas.height = this.canvasHeight);
        },
      },
      {
        key: "initOffscreenCanvas",
        value: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.canvasWidth,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.canvasHeight;
          if (!this.canvas) {
            this.canvas = p.wx$1.createOffscreenCanvas({
              type: "2d",
              width: e,
              height: t,
            });
            var a = this.canvas.getContext("2d");
            a.canvas &&
              !a.canvas.toDataURL &&
              (a.canvas.toDataURL = this.canvas.toDataURL);
          }
          (this.canvas.width = e),
            (this.canvasWidth = e),
            (this.canvas.height = t),
            (this.canvasHeight = t);
        },
      },
      {
        key: "setFontFamily",
        value: function (e) {
          this.fontFamily = e;
        },
      },
      {
        key: "getCanvasInstance",
        value: function () {
          return this.canvas;
        },
      },
      {
        key: "isSupportWebp",
        value: function () {
          try {
            (void 0 !== this.supportWebp && null !== this.supportWebp) ||
              (this.supportWebp =
                0 ===
                this.canvas.toDataURL("image/webp").indexOf("data:image/webp"));
          } catch (e) {}
          return !!this.supportWebp;
        },
      },
      {
        key: "isLowDevice",
        value: function () {
          var e = p._default().os;
          return e.android && e.version && +e.version < 13;
        },
      },
      {
        key: "toImage",
        value: function () {
          var e = this,
            t = getApp().globalData,
            a = (void 0 === t ? {} : t).detect,
            n = (void 0 === a ? {} : a).env,
            i = (void 0 === n ? {} : n).IS_PCWEIXIN;
          return void 0 !== i && i
            ? this.canvasToTempFilePathForPc(this.canvas)
            : new Promise(function (t, a) {
                p.wx$1.canvasToTempFilePath({
                  canvas: e.canvas,
                  width: e.canvas.width,
                  height: e.canvas.height,
                  destWidth: e.canvas.width,
                  destHeight: e.canvas.height,
                  fileType: "png",
                  quality: 1,
                  success: t,
                  fail: a,
                });
              });
        },
      },
      {
        key: "canvasToTempFilePathForPc",
        value: function (e) {
          var t = e.toDataURL("image/png"),
            a = Date.now(),
            n = ""
              .concat(p.wx$1.env.USER_DATA_PATH, "/temp_image_")
              .concat(a, ".png");
          return new Promise(function (e, a) {
            p.wx$1.getFileSystemManager().writeFile({
              filePath: n,
              data: t.replace("data:image/png;base64,", ""),
              encoding: "base64",
              success: function () {
                return e({ tempFilePath: n });
              },
              fail: a,
            });
          });
        },
      },
      {
        key: "splitText",
        value: function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (t) return e.split("");
          for (
            var n, i = /(\d+(\.\d+)?%?)/g, r = [], s = 0;
            null !== (n = i.exec(e));

          )
            n.index > s && r.push.apply(r, a(e.slice(s, n.index).split(""))),
              r.push(n[0]),
              (s = i.lastIndex);
          return s < e.length && r.push.apply(r, a(e.slice(s).split(""))), r;
        },
      },
      {
        key: "measureText",
        value: function (e, t, a) {
          var n = this.getCanvasInstance().getContext("2d");
          return (
            (n.font = ""
              .concat(a, " ")
              .concat(t, "px ")
              .concat(this.fontFamily)),
            n.measureText(e).width
          );
        },
      },
      {
        key: "cacheMeasureText",
        value: function (e, t, a) {
          var n = "".concat(e, "_").concat(t, "_").concat(a);
          if (this.measureTextCache[n]) return this.measureTextCache[n];
          var i = this.measureText(e, t, a);
          return (this.measureTextCache[n] = i), i;
        },
      },
      {
        key: "formatContent",
        value: function (e, t, a) {
          for (
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 30,
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 400,
              r =
                !(arguments.length > 5 && void 0 !== arguments[5]) ||
                arguments[5],
              s =
                !(arguments.length > 6 && void 0 !== arguments[6]) ||
                arguments[6],
              o = ["。", "？", "！", "，", "、", "；", "《", "》"],
              c = this.splitText(e, s),
              l = [],
              h = "",
              u = 0;
            u < c.length;

          ) {
            var v = c[u];
            this.measureText(h, n, i) + this.cacheMeasureText(v, n, i) < t ||
            (o.includes(v) && !r)
              ? (h += v)
              : (l.push(h), (h = v)),
              (u += 1);
          }
          if ((l.push(h), l.length > a)) {
            for (
              var d = "...",
                f = this.measureText(d, n, i),
                g = l[a - 1],
                p = "",
                x = 0,
                m = 0;
              m < g.length;
              m++
            ) {
              var y = g[m],
                b = this.cacheMeasureText(y, n, i);
              if (x + b + f > t) break;
              (p += y), (x += b);
            }
            (p += d), l.splice(a - 1, 1, p);
          }
          return l.slice(0, a);
        },
      },
      {
        key: "drawMultiText",
        value: function (e) {
          var t,
            a,
            n = e.text,
            i = e.lineWidth,
            r = e.lineNum,
            s = e.x,
            o = e.y,
            h = e.fontSize,
            u = void 0 === h ? 30 : h,
            v = e.fontWeight,
            d = void 0 === v ? 400 : v,
            g = e.lineHeight,
            p = e.alignCenter,
            x = void 0 === p || p,
            m = e.punctuationBreak,
            y = void 0 === m || m,
            b = e.numberBreak,
            w = void 0 === b || b,
            T = this.formatContent(n, i, r, u, d, y, w),
            k = s,
            C = o;
          x && T.length < r && (C += (g * (r - T.length)) / 2);
          for (var I = 0; I < T.length && I < r; I++)
            this.drawText(
              ((t = f({}, e)),
              (a = { type: "text", text: T[I], x: k, y: C }),
              c(t, l(a)))
            ),
              (C += g);
        },
      },
      {
        key: "drawText",
        value: function (e) {
          var t = this.getCanvasInstance().getContext("2d"),
            a = e.text,
            n = void 0 === a ? "" : a,
            i = e.x,
            r = void 0 === i ? 0 : i,
            s = e.y,
            o = void 0 === s ? 0 : s,
            c = e.fontSize,
            l = void 0 === c ? 30 : c,
            h = e.color,
            u = void 0 === h ? "#000" : h,
            v = e.fontWeight,
            d = void 0 === v ? "400" : v,
            f = e.textAlign,
            g = void 0 === f ? "left" : f,
            p = e.textBaseline,
            x = void 0 === p ? "top" : p,
            m = e.justifyLine,
            y = void 0 !== m && m,
            b = e.maxWidth;
          if (
            ((t.fillStyle = u),
            (t.font = ""
              .concat(d, " ")
              .concat(l, "px ")
              .concat(this.fontFamily)),
            (t.textBaseline = x),
            (t.textAlign = g),
            y)
          ) {
            var w = n,
              T = this.measureText(w, l, d),
              k = w.length - 1,
              C = 0;
            k > 0 && b > 0 && (C = (b - T) / k);
            for (var I = r, P = 0; P < w.length; P++)
              t.fillText(w[P], I, o),
                (I += this.cacheMeasureText(w[P], l, d)),
                C > 0 && P < w.length - 1 && (I += C);
          } else t.fillText(n, r, o);
        },
      },
      {
        key: "drawImage",
        value: function (e) {
          var t = this,
            a = this.getCanvasInstance().getContext("2d"),
            n = e.url,
            i = e.x,
            r = void 0 === i ? 0 : i,
            s = e.y,
            o = void 0 === s ? 0 : s,
            c = e.width,
            l = void 0 === c ? this.canvasWidth : c,
            h = e.height,
            u = void 0 === h ? this.canvasHeight : h,
            v = e.radius,
            d = void 0 === v ? 0 : v,
            f = e.ignoreErr,
            g = void 0 !== f && f;
          return new Promise(function (e, i) {
            a.save();
            var s = t.canvas.createImage();
            (s.onload = function () {
              var i = function () {
                if (
                  (d &&
                    (a.beginPath(),
                    a.moveTo(r + d, o),
                    a.lineTo(r + l - d, o),
                    a.quadraticCurveTo(r + l, o, r + l, o + d),
                    a.lineTo(r + l, o + u - d),
                    a.quadraticCurveTo(r + l, o + u, r + l - d, o + u),
                    a.lineTo(r + d, o + u),
                    a.quadraticCurveTo(r, o + u, r, o + u - d),
                    a.lineTo(r, o + d),
                    a.quadraticCurveTo(r, o, r + d, o),
                    a.closePath(),
                    a.clip()),
                  t.isLowDevice() && s.width > 0 && s.height > 0)
                ) {
                  var n = Math.floor(s.height / 2),
                    i = Math.floor(u / 2);
                  a.drawImage(s, 0, 0, s.width, n, r, o, l, i),
                    a.drawImage(
                      s,
                      0,
                      n,
                      s.width,
                      s.height - n,
                      r,
                      o + i,
                      l,
                      u - i
                    );
                } else a.drawImage(s, r, o, l, u);
                a.restore(), e(s), (s = null);
              };
              "function" == typeof s.decode
                ? s
                    .decode()
                    .then(i)
                    .catch(function (e) {
                      i(),
                        x("shareSnapshot_image_decodefail", {
                          errMsg: e,
                          errImgUrl: n,
                        });
                    })
                : i();
            }),
              (s.onerror = function (t) {
                x("shareSnapshot_image_error", { errMsg: t, errImgUrl: n }),
                  g ? e(null) : i(t),
                  (s = null);
              }),
              (s.crossOrigin = "anonymous"),
              (s.src = n);
          });
        },
      },
      {
        key: "drawRect",
        value: function (e) {
          var a = this.getCanvasInstance().getContext("2d"),
            n = e.x,
            i = void 0 === n ? 0 : n,
            r = e.y,
            s = void 0 === r ? 0 : r,
            o = e.width,
            c = void 0 === o ? this.canvasWidth : o,
            l = e.height,
            h = void 0 === l ? this.canvasHeight : l,
            u = e.fill,
            v = e.stroke,
            d = e.round;
          if ((v && (a.strokeStyle = v), u && (a.fillStyle = u), d))
            if (a.roundRect)
              a.beginPath(),
                a.roundRect(i, s, c, h, d),
                a.fill(),
                a.closePath();
            else {
              var f = t(d, 4),
                g = f[0],
                p = void 0 === g ? 0 : g,
                x = f[1],
                m = void 0 === x ? 0 : x,
                y = f[2],
                b = void 0 === y ? 0 : y,
                w = f[3],
                T = void 0 === w ? 0 : w;
              a.beginPath(),
                a.moveTo(i + p, s),
                a.arcTo(i + c, s, i + c, s + h, m),
                a.arcTo(i + c, s + h, i, s + h, b),
                a.arcTo(i, s + h, i, s, T),
                a.arcTo(i, s, i + c, s, p),
                a.closePath(),
                a.fill();
            }
          else u ? a.fillRect(i, s, c, h) : a.strokeRect(i, s, c, h);
        },
      },
      {
        key: "clear",
        value: function () {
          if (this.canvas) {
            var e = this.canvas.getContext("2d");
            e.clearRect(0, 0, this.canvas.width, this.canvas.height),
              (this.canvas = null),
              (this.measureTextCache = {}),
              (e = null);
          }
        },
      },
      {
        key: "draw",
        value: function (t) {
          return (
            (a = this),
            null,
            (n = e().mark(function a() {
              var n, i, r, o;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = s(t)), (e.prev = 1), n.s();
                      case 3:
                        if ((i = n.n()).done) {
                          e.next = 26;
                          break;
                        }
                        if ("image" !== (r = i.value).type) {
                          e.next = 10;
                          break;
                        }
                        return (e.next = 8), this.drawImage(r);
                      case 8:
                        e.next = 24;
                        break;
                      case 10:
                        if ("text" !== r.type) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 13), this.drawText(r);
                      case 13:
                        e.next = 24;
                        break;
                      case 15:
                        if ("multi-text" !== r.type) {
                          e.next = 20;
                          break;
                        }
                        return (e.next = 18), this.drawMultiText(r);
                      case 18:
                        e.next = 24;
                        break;
                      case 20:
                        if (((e.t0 = "rect" === r.type), !e.t0)) {
                          e.next = 24;
                          break;
                        }
                        return (e.next = 24), this.drawRect(r);
                      case 24:
                        e.next = 3;
                        break;
                      case 26:
                        e.next = 31;
                        break;
                      case 28:
                        (e.prev = 28), (e.t1 = e.catch(1)), n.e(e.t1);
                      case 31:
                        return (e.prev = 31), n.f(), e.finish(31);
                      case 34:
                        return (e.next = 36), this.toImage();
                      case 36:
                        return (
                          (o = e.sent), e.abrupt("return", (this.clear(), o))
                        );
                      case 38:
                      case "end":
                        return e.stop();
                    }
                },
                a,
                this,
                [[1, 28, 31, 34]]
              );
            })),
            new Promise(function (e, t) {
              var i = function (e) {
                  try {
                    s(n.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                r = function (e) {
                  try {
                    s(n.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                s = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(i, r);
                };
              s((n = n.apply(a, null)).next());
            })
          );
          var a, n;
        },
      },
    ]),
    r
  );
})();
