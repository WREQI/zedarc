require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/typeof"),
  e = require("../../../../../../common/vendor.js"),
  i = require("../../../util/esm/cache.js"),
  r = {},
  n = {},
  a = function (t, e) {
    return !!i.isArrayLike(t) && t.indexOf(e) > -1;
  },
  o = Array.prototype,
  s = o.splice,
  u = o.indexOf,
  l = Array.prototype.splice,
  c = function (t, e) {
    if (!i.isArrayLike(t)) return [];
    for (var r = t ? e.length : 0, n = r - 1; r--; ) {
      var a = void 0,
        o = e[r];
      (r !== n && o === a) || ((a = o), l.call(t, o, 1));
    }
    return t;
  },
  h = function (t, e, r) {
    if (!i.isArray(t) && !i.isPlainObject(t)) return t;
    var n = r;
    return (
      i.each(t, function (t, i) {
        n = e(n, t, i);
      }),
      n
    );
  },
  f = Object.prototype.hasOwnProperty;
function d(t, e) {
  if (!e || !i.isArray(t)) return {};
  for (
    var r,
      n = {},
      a = i.isFunction(e)
        ? e
        : function (t) {
            return t[e];
          },
      o = 0;
    o < t.length;
    o++
  ) {
    var s = t[o];
    (r = a(s)), f.call(n, r) ? n[r].push(s) : (n[r] = [s]);
  }
  return n;
}
function p(t, e) {
  if (!e) return { 0: t };
  if (!i.isFunction(e)) {
    var r = i.isArray(e) ? e : e.replace(/\s+/g, "").split("*");
    e = function (t) {
      for (var e = "_", i = 0, n = r.length; i < n; i++)
        e += t[r[i]] && t[r[i]].toString();
      return e;
    };
  }
  return d(t, e);
}
var v = {},
  g = Number.isInteger
    ? Number.isInteger
    : function (t) {
        return i.isNumber(t) && t % 1 == 0;
      },
  m = 180 / Math.PI,
  y = parseInt,
  x = Math.PI / 180,
  _ = function (t, e) {
    return t.hasOwnProperty(e);
  },
  b = function (t) {
    return t;
  },
  w = Object.prototype.hasOwnProperty,
  P = {},
  M = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Cache: i.default_1,
        assign: i.mix,
        augment: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          for (var r = t[0], n = 1; n < t.length; n++) {
            var a = t[n];
            i.isFunction(a) && (a = a.prototype), i.mix(r.prototype, a);
          }
        },
        clamp: function (t, e, i) {
          return t < e ? e : t > i ? i : t;
        },
        clearAnimationFrame: function (t) {
          (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            clearTimeout
          )(t);
        },
        clone: function e(r) {
          if ("object" != t(r) || null === r) return r;
          var n;
          if (i.isArray(r)) {
            n = [];
            for (var a = 0, o = r.length; a < o; a++)
              "object" == t(r[a]) && null != r[a]
                ? (n[a] = e(r[a]))
                : (n[a] = r[a]);
          } else
            for (var s in ((n = {}), r))
              "object" == t(r[s]) && null != r[s]
                ? (n[s] = e(r[s]))
                : (n[s] = r[s]);
          return n;
        },
        contains: a,
        debounce: function (t, e, i) {
          var r;
          return function () {
            var n = this,
              a = arguments,
              o = i && !r;
            clearTimeout(r),
              (r = setTimeout(function () {
                (r = null), i || t.apply(n, a);
              }, e)),
              o && t.apply(n, a);
          };
        },
        deepMix: i.deepMix,
        difference: function (t, e) {
          return (
            void 0 === e && (e = []),
            i.filter(t, function (t) {
              return !a(e, t);
            })
          );
        },
        each: i.each,
        endsWith: function (t, e) {
          return !(!i.isArray(t) && !i.isString(t)) && t[t.length - 1] === e;
        },
        every: function (t, e) {
          for (var i = 0; i < t.length; i++) if (!e(t[i], i)) return !1;
          return !0;
        },
        extend: function (t, e, r, n) {
          i.isFunction(e) || ((r = e), (e = t), (t = function () {}));
          var a = Object.create
              ? function (t, e) {
                  return Object.create(t, { constructor: { value: e } });
                }
              : function (t, e) {
                  function i() {}
                  i.prototype = t;
                  var r = new i();
                  return (r.constructor = e), r;
                },
            o = a(e.prototype, t);
          return (
            (t.prototype = i.mix(o, t.prototype)),
            (t.superclass = a(e.prototype, e)),
            i.mix(o, r),
            i.mix(t, n),
            t
          );
        },
        filter: i.filter,
        find: i.find,
        findIndex: function (t, e, i) {
          void 0 === i && (i = 0);
          for (var r = i; r < t.length; r++) if (e(t[r], r)) return r;
          return -1;
        },
        firstValue: function (t, e) {
          for (var r = null, n = 0; n < t.length; n++) {
            var a = t[n][e];
            if (!i.isNil(a)) {
              r = i.isArray(a) ? a[0] : a;
              break;
            }
          }
          return r;
        },
        fixedBase: i.fixedBase,
        flatten: function (t) {
          if (!i.isArray(t)) return [];
          for (var e = [], r = 0; r < t.length; r++) e = e.concat(t[r]);
          return e;
        },
        flattenDeep: function t(e, r) {
          if ((void 0 === r && (r = []), i.isArray(e)))
            for (var n = 0; n < e.length; n += 1) t(e[n], r);
          else r.push(e);
          return r;
        },
        forIn: i.each,
        get: function (t, e, r) {
          for (
            var n = 0, a = i.isString(e) ? e.split(".") : e;
            t && n < a.length;

          )
            t = t[a[n++]];
          return void 0 === t || n < a.length ? r : t;
        },
        getEllipsisText: function (t, e, r, n) {
          void 0 === n && (n = "...");
          var a,
            o,
            s = i.measureTextWidth(n, r),
            u = i.isString(t) ? t : i.toString(t),
            l = e,
            c = [];
          if (i.measureTextWidth(t, r) <= e) return t;
          for (
            ;
            (a = u.substr(0, 16)),
              !((o = i.measureTextWidth(a, r)) + s > l && o > l);

          )
            if ((c.push(a), (l -= o), !(u = u.substr(16)))) return c.join("");
          for (
            ;
            (a = u.substr(0, 1)), !((o = i.measureTextWidth(a, r)) + s > l);

          )
            if ((c.push(a), (l -= o), !(u = u.substr(1)))) return c.join("");
          return "" + c.join("") + n;
        },
        getRange: i.getRange,
        getType: i.getType,
        getWrapBehavior: function (t, e) {
          return t["_wrap_" + e];
        },
        group: function (t, e) {
          if (!e) return [t];
          var i = p(t, e),
            r = [];
          for (var n in i) r.push(i[n]);
          return r;
        },
        groupBy: d,
        groupToMap: p,
        has: _,
        hasKey: _,
        hasValue: function (t, e) {
          return a(i.values(t), e);
        },
        head: i.head,
        identity: function (t) {
          return t;
        },
        includes: a,
        indexOf: i.indexOf,
        isArguments: function (t) {
          return i.isType(t, "Arguments");
        },
        isArray: i.isArray,
        isArrayLike: i.isArrayLike,
        isBoolean: i.isBoolean,
        isDate: i.isDate,
        isDecimal: function (t) {
          return i.isNumber(t) && t % 1 != 0;
        },
        isElement: function (t) {
          return t instanceof Element || t instanceof HTMLDocument;
        },
        isEmpty: i.isEmpty,
        isEqual: i.isEqual,
        isEqualWith: function (t, e, r) {
          return i.isFunction(r) ? !!r(t, e) : i.isEqual(t, e);
        },
        isError: function (t) {
          return i.isType(t, "Error");
        },
        isEven: function (t) {
          return i.isNumber(t) && t % 2 == 0;
        },
        isFinite: (function (t) {
          function e(e) {
            return t.apply(this, arguments);
          }
          return (
            (e.toString = function () {
              return t.toString();
            }),
            e
          );
        })(function (t) {
          return i.isNumber(t) && isFinite(t);
        }),
        isFunction: i.isFunction,
        isInteger: g,
        isMatch: i.isMatch,
        isNegative: function (t) {
          return i.isNumber(t) && t < 0;
        },
        isNil: i.isNil,
        isNull: function (t) {
          return null === t;
        },
        isNumber: i.isNumber,
        isNumberEqual: function (t, e, i) {
          return void 0 === i && (i = 1e-5), Math.abs(t - e) < i;
        },
        isObject: i.isObject,
        isObjectLike: i.isObjectLike,
        isOdd: function (t) {
          return i.isNumber(t) && t % 2 != 0;
        },
        isPlainObject: i.isPlainObject,
        isPositive: function (t) {
          return i.isNumber(t) && t > 0;
        },
        isPrototype: i.isPrototype,
        isRegExp: function (t) {
          return i.isType(t, "RegExp");
        },
        isString: i.isString,
        isType: i.isType,
        isUndefined: function (t) {
          return void 0 === t;
        },
        keys: i.keys,
        last: i.last,
        lowerCase: function (t) {
          return i.toString(t).toLowerCase();
        },
        lowerFirst: i.lowerFirst,
        map: i.map,
        mapValues: function (t, e) {
          void 0 === e && (e = b);
          var r = {};
          return (
            i.isObject(t) &&
              !i.isNil(t) &&
              Object.keys(t).forEach(function (i) {
                r[i] = e(t[i], i);
              }),
            r
          );
        },
        max: i.getMax,
        maxBy: function (t, e) {
          if (i.isArray(t)) {
            for (var r, n = -1 / 0, a = 0; a < t.length; a++) {
              var o = t[a],
                s = i.isFunction(e) ? e(o) : o[e];
              s > n && ((r = o), (n = s));
            }
            return r;
          }
        },
        measureTextWidth: i.measureTextWidth,
        memoize: i.memoize,
        min: i.getMin,
        minBy: function (t, e) {
          if (i.isArray(t)) {
            for (var r, n = 1 / 0, a = 0; a < t.length; a++) {
              var o = t[a],
                s = i.isFunction(e) ? e(o) : o[e];
              s < n && ((r = o), (n = s));
            }
            return r;
          }
        },
        mix: i.mix,
        mod: function (t, e) {
          return ((t % e) + e) % e;
        },
        noop: function () {},
        number2color: function (t) {
          var e = v[t];
          if (!e) {
            for (var i = t.toString(16), r = i.length; r < 6; r++) i = "0" + i;
            (e = "#" + i), (v[t] = e);
          }
          return e;
        },
        omit: function (t, e) {
          return h(
            t,
            function (t, i, r) {
              return e.includes(r) || (t[r] = i), t;
            },
            {}
          );
        },
        parseRadius: function (t) {
          var e = 0,
            r = 0,
            n = 0,
            a = 0;
          return (
            i.isArray(t)
              ? 1 === t.length
                ? (e = r = n = a = t[0])
                : 2 === t.length
                ? ((e = n = t[0]), (r = a = t[1]))
                : 3 === t.length
                ? ((e = t[0]), (r = a = t[1]), (n = t[2]))
                : ((e = t[0]), (r = t[1]), (n = t[2]), (a = t[3]))
              : (e = r = n = a = t),
            { r1: e, r2: r, r3: n, r4: a }
          );
        },
        pick: function (t, e) {
          if (null === t || !i.isPlainObject(t)) return {};
          var r = {};
          return (
            i.each(e, function (e) {
              w.call(t, e) && (r[e] = t[e]);
            }),
            r
          );
        },
        pull: function (t) {
          for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
          for (var r = 0; r < e.length; r++)
            for (var n = e[r], a = -1; (a = u.call(t, n)) > -1; )
              s.call(t, a, 1);
          return t;
        },
        pullAt: c,
        reduce: h,
        remove: function (t, e) {
          var r = [];
          if (!i.isArrayLike(t)) return r;
          for (var n = -1, a = [], o = t.length; ++n < o; ) {
            var s = t[n];
            e(s, n, t) && (r.push(s), a.push(n));
          }
          return c(t, a), r;
        },
        requestAnimationFrame: function (t) {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            }
          )(t);
        },
        set: function (t, e, r) {
          var n = t,
            a = i.isString(e) ? e.split(".") : e;
          return (
            a.forEach(function (t, e) {
              e < a.length - 1
                ? (i.isObject(n[t]) || (n[t] = i.isNumber(a[e + 1]) ? [] : {}),
                  (n = n[t]))
                : (n[t] = r);
            }),
            t
          );
        },
        size: i.size,
        some: function (t, e) {
          for (var i = 0; i < t.length; i++) if (e(t[i], i)) return !0;
          return !1;
        },
        sortBy: function (t, e) {
          var r;
          if (i.isFunction(e))
            r = function (t, i) {
              return e(t) - e(i);
            };
          else {
            var n = [];
            i.isString(e) ? n.push(e) : i.isArray(e) && (n = e),
              (r = function (t, e) {
                for (var i = 0; i < n.length; i += 1) {
                  var r = n[i];
                  if (t[r] > e[r]) return 1;
                  if (t[r] < e[r]) return -1;
                }
                return 0;
              });
          }
          return t.sort(r), t;
        },
        startsWith: function (t, e) {
          return !(!i.isArray(t) && !i.isString(t)) && t[0] === e;
        },
        substitute: i.substitute,
        throttle: function (t, e, i) {
          var r,
            n,
            a,
            o,
            s = 0;
          i || (i = {});
          var u = function () {
              (s = !1 === i.leading ? 0 : Date.now()),
                (r = null),
                (o = t.apply(n, a)),
                r || (n = a = null);
            },
            l = function () {
              var l = Date.now();
              s || !1 !== i.leading || (s = l);
              var c = e - (l - s);
              return (
                (n = this),
                (a = arguments),
                c <= 0 || c > e
                  ? (r && (clearTimeout(r), (r = null)),
                    (s = l),
                    (o = t.apply(n, a)),
                    r || (n = a = null))
                  : r || !1 === i.trailing || (r = setTimeout(u, c)),
                o
              );
            };
          return (
            (l.cancel = function () {
              clearTimeout(r), (s = 0), (r = n = a = null);
            }),
            l
          );
        },
        toArray: function (t) {
          return i.isArrayLike(t) ? Array.prototype.slice.call(t) : [];
        },
        toDegree: function (t) {
          return m * t;
        },
        toInteger: y,
        toRadian: function (t) {
          return x * t;
        },
        toString: i.toString,
        union: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return i.uniq([].concat.apply([], t));
        },
        uniq: i.uniq,
        uniqueId: function (t) {
          return P[(t = t || "g")] ? (P[t] += 1) : (P[t] = 1), t + P[t];
        },
        upperCase: function (t) {
          return i.toString(t).toUpperCase();
        },
        upperFirst: i.upperFirst,
        values: i.values,
        valuesOfKey: function (t, e) {
          for (var r = [], n = {}, a = 0; a < t.length; a++) {
            var o = t[a][e];
            if (!i.isNil(o)) {
              i.isArray(o) || (o = [o]);
              for (var s = 0; s < o.length; s++) {
                var u = o[s];
                n[u] || (r.push(u), (n[u] = !0));
              }
            }
          }
          return r;
        },
        wrapBehavior: function (t, e) {
          if (t["_wrap_" + e]) return t["_wrap_" + e];
          var i = function (i) {
            t[e](i);
          };
          return (t["_wrap_" + e] = i), i;
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  S = e.getAugmentedNamespace(M),
  T = {
    __esModule: !0,
    firstValue: function (t, e) {
      for (var i = null, r = 0, n = t.length; r < n; r++) {
        var a = t[r][e];
        if (!(0, O.isNil)(a)) {
          i = (0, O.isArray)(a) ? a[0] : a;
          break;
        }
      }
      return i;
    },
    getRange: function (t) {
      if (!t.length) return { min: 0, max: 0 };
      var e = Math.max.apply(null, t);
      return { min: Math.min.apply(null, t), max: e };
    },
    group: function (t, e, i) {
      if ((void 0 === i && (i = {}), !e)) return [t];
      var r = A(t, e),
        n = [];
      if (1 === e.length && i[e[0]]) {
        var a = i[e[0]];
        (0, O.each)(a, function (t) {
          (t = "_" + t), n.push(r[t]);
        });
      } else for (var o in r) n.push(r[o]);
      return n;
    },
  };
(T.groupToMap = A),
  (T.merge = function (t) {
    for (var e = [], i = 0, r = t.length; i < r; i++) e = e.concat(t[i]);
    return e;
  }),
  (T.remove = function (t, e) {
    if (t) {
      var i = t.indexOf(e);
      -1 !== i && t.splice(i, 1);
    }
  }),
  (T.values = function (t, e) {
    for (var i = [], r = {}, n = 0, a = t.length; n < a; n++) {
      var o = t[n][e];
      (0, O.isNil)(o) ||
        ((0, O.isArray)(o)
          ? (0, O.each)(o, function (t) {
              r[t] || (i.push(t), (r[t] = !0));
            })
          : r[o] || (i.push(o), (r[o] = !0)));
    }
    return i;
  });
var O = S;
function A(t, e) {
  if (!e) return { 0: t };
  for (
    var i = function (t) {
        for (var i = "_", r = 0, n = e.length; r < n; r++)
          i += t[e[r]] && t[e[r]].toString();
        return i;
      },
      r = {},
      n = 0,
      a = t.length;
    n < a;
    n++
  ) {
    var o = t[n],
      s = i(o);
    r[s] ? r[s].push(o) : (r[s] = [o]);
  }
  return r;
}
var B = {
  __esModule: !0,
  addEventListener: function (t, e, i) {
    t.addEventListener(e, i, k);
  },
};
(B.convertPoints = D),
  (B.createEvent = function (t, e) {
    var i = D(t, e.get("canvas"))[0] || {};
    return { type: t.type, chart: e, native: t, x: i.x, y: i.y };
  }),
  (B.getDomById = function (t) {
    return t ? document.getElementById(t) : null;
  }),
  (B.getHeight = function (t) {
    var e = N(t, "height");
    return "auto" === e && (e = t.offsetHeight), parseFloat(e);
  }),
  (B.getPixelRatio = function () {
    return (window && window.devicePixelRatio) || 1;
  }),
  (B.getRelativePosition = Y),
  (B.getStyle = N),
  (B.getWidth = function (t) {
    var e = N(t, "width");
    return "auto" === e && (e = t.offsetWidth), parseFloat(e);
  }),
  (B.isBrowser = void 0),
  (B.isCanvasElement = function (e) {
    return (
      !(!e || "object" != t(e)) &&
      (!(1 !== e.nodeType || !e.nodeName) || !!e.isCanvasElement)
    );
  }),
  (B.isWx = B.isNode = B.isMy = void 0),
  (B.measureText = function (t, e, i) {
    return (
      i || (i = document.createElement("canvas").getContext("2d")),
      (i.font = e || "12px sans-serif"),
      i.measureText(t)
    );
  }),
  (B.removeEventListener = function (t, e, i) {
    t.removeEventListener(e, i, k);
  });
var C = S,
  k = !!(function () {
    var t = !1;
    try {
      var e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
      window.addEventListener("e", null, e);
    } catch (t) {}
    return t;
  })() && { passive: !0 },
  j = "object" == t(e.wx$1) && "function" == typeof e.wx$1.getSystemInfoSync;
B.isWx = j;
var E =
  "object" == ("undefined" == typeof my ? "undefined" : t(my)) &&
  "function" == typeof my.getSystemInfoSync;
B.isMy = E;
var F = t(e.commonjsGlobal) && !1;
B.isNode = F;
var I =
  "undefined" != typeof window &&
  void 0 !== window.document &&
  void 0 !== window.sessionStorage;
function N(t, e) {
  return t.currentStyle
    ? t.currentStyle[e]
    : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
}
function Y(t, e) {
  var i = e.get("el");
  if (!i) return t;
  var r = i.getBoundingClientRect(),
    n = r.top,
    a = r.left,
    o = parseFloat(N(i, "padding-left")),
    s = parseFloat(N(i, "padding-top"));
  return { x: t.x - a - o, y: t.y - n - s };
}
function X(t, e) {
  var i = e.get("landscape");
  if (!i) return t;
  if ((0, C.isFunction)(i)) return i(t, e);
  var r = e.get("height");
  return { x: t.y, y: r - t.x };
}
function D(t, e) {
  var i = t.touches;
  if (!i) return [X(Y({ x: t.clientX, y: t.clientY }, e), e)];
  i.length || (i = t.changedTouches || []);
  for (var r = [], n = 0, a = i.length; n < a; n++) {
    var o,
      s = i[n],
      u = s.x,
      l = s.y,
      c = s.clientX,
      h = s.clientY;
    (o =
      (0, C.isNumber)(u) || (0, C.isNumber)(l)
        ? { x: u, y: l }
        : Y({ x: c, y: h }, e)),
      r.push(X(o, e));
  }
  return r;
}
(B.isBrowser = I),
  (function (e) {
    e.__esModule = !0;
    var i = {
      isObjectValueEqual: !0,
      parsePadding: !0,
      directionEnabled: !0,
      toTimeStamp: !0,
      upperFirst: !0,
      lowerFirst: !0,
      isString: !0,
      isNumber: !0,
      isBoolean: !0,
      isFunction: !0,
      isDate: !0,
      isArray: !0,
      isNil: !0,
      isObject: !0,
      isPlainObject: !0,
      isEqual: !0,
      deepMix: !0,
      mix: !0,
      each: !0,
      uniq: !0,
      find: !0,
      substitute: !0,
      Array: !0,
    };
    (e.Array = void 0),
      (e.directionEnabled = function (t, e) {
        return void 0 === t || ("string" == typeof t && -1 !== t.indexOf(e));
      }),
      (e.isObjectValueEqual = function (t, e) {
        (t = Object.assign({}, t)), (e = Object.assign({}, e));
        var i = Object.getOwnPropertyNames(t),
          r = Object.getOwnPropertyNames(e);
        if (i.length !== r.length) return !1;
        for (var n = 0, a = i.length; n < a; n++) {
          var o = i[n];
          if (t[o] !== e[o]) return !1;
        }
        return !0;
      }),
      (e.parsePadding = function (t) {
        var e, i, n, a;
        return (
          (0, r.isNumber)(t) || (0, r.isString)(t)
            ? (e = n = a = i = t)
            : (0, r.isArray)(t) &&
              ((e = t[0]),
              (i = (0, r.isNil)(t[1]) ? t[0] : t[1]),
              (n = (0, r.isNil)(t[2]) ? t[0] : t[2]),
              (a = (0, r.isNil)(t[3]) ? i : t[3])),
          [e, i, n, a]
        );
      }),
      (e.toTimeStamp = function (t) {
        return (
          (0, r.isString)(t) &&
            (t =
              t.indexOf("T") > 0
                ? new Date(t).getTime()
                : new Date(t.replace(/-/gi, "/")).getTime()),
          (0, r.isDate)(t) && (t = t.getTime()),
          t
        );
      });
    var r = S;
    (e.upperFirst = r.upperFirst),
      (e.lowerFirst = r.lowerFirst),
      (e.isString = r.isString),
      (e.isNumber = r.isNumber),
      (e.isBoolean = r.isBoolean),
      (e.isFunction = r.isFunction),
      (e.isDate = r.isDate),
      (e.isArray = r.isArray),
      (e.isNil = r.isNil),
      (e.isObject = r.isObject),
      (e.isPlainObject = r.isPlainObject),
      (e.isEqual = r.isEqual),
      (e.deepMix = r.deepMix),
      (e.mix = r.mix),
      (e.each = r.each),
      (e.uniq = r.uniq),
      (e.find = r.find),
      (e.substitute = r.substitute);
    var n = (function (e, i) {
      if (e && e.__esModule) return e;
      if (null === e || ("object" != t(e) && "function" != typeof e))
        return { default: e };
      var r = (function (t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          i = new WeakMap();
        return (function (t) {
          return t ? i : e;
        })(t);
      })(void 0);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set)
            ? Object.defineProperty(n, o, s)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    })(T);
    e.Array = n;
    var a = B;
    Object.keys(a).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          (t in e && e[t] === a[t]) ||
          (e[t] = a[t]));
    });
  })(n);
var L = {},
  W = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = n,
    i = "#E8E8E8",
    r = {
      label: { fill: "#808080", fontSize: 10 },
      line: { stroke: i, lineWidth: 1 },
      grid: { type: "line", stroke: i, lineWidth: 1, lineDash: [2] },
      tickLine: null,
      labelOffset: 7.5,
    },
    a = {
      fontFamily:
        '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
      defaultColor: "#1890FF",
      pixelRatio: 1,
      padding: "auto",
      appendPadding: 15,
      colors: [
        "#1890FF",
        "#2FC25B",
        "#FACC14",
        "#223273",
        "#8543E0",
        "#13C2C2",
        "#3436C7",
        "#F04864",
      ],
      shapes: { line: ["line", "dash"], point: ["circle", "hollowCircle"] },
      sizes: [4, 10],
      axis: {
        common: r,
        bottom: (0, e.mix)({}, r, { grid: null }),
        left: (0, e.mix)({}, r, { line: null }),
        right: (0, e.mix)({}, r, { line: null }),
        circle: (0, e.mix)({}, r, { line: null }),
        radius: (0, e.mix)({}, r, { labelOffset: 4 }),
      },
      shape: {
        line: { lineWidth: 2, lineJoin: "round", lineCap: "round" },
        point: { lineWidth: 0, size: 3 },
        area: { fillOpacity: 0.1 },
      },
      _defaultAxis: r,
    };
  t.default = a;
})(W);
var z = {};
!(function (t) {
  (t.__esModule = !0),
    (t.default = void 0),
    (t.default = {
      general: {
        title: "这是一个图表，",
        withTitle: "这是一个关于“{title}”的图表。",
      },
      coord: { cartesian: "X轴是{xLabel}Y轴是{yLabel}" },
      scale: {
        linear: "数值型，数据最小值为{min}，最大值为{max}；",
        cat: "分类型, 分类类型有：{values}；",
        timeCat: "时间型，时间范围从{start}到{end}；",
      },
      geometry: {
        prefix: "共有{count}种分类组成，",
        oneData: "第{index}类是{name}，数据是{values};",
        partData:
          "第{index}类是{name}，共有{count}项数据，前{part}项是{values};",
        allData: "第{index}类是{name}，有{count}项数据，分别是{values};",
      },
      legend: { prefix: "图例分类有：" },
    });
})(z),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = a(W),
      i = a(z);
    t.lang = i.default;
    var r = n;
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var o = {
      version: "3.8.13",
      scales: {},
      widthRatio: { column: 0.5, rose: 0.999999, multiplePie: 3 / 4 },
      lineDash: [4, 4],
      lang: i.default,
      setTheme: function (t) {
        (0, r.deepMix)(o, t);
      },
    };
    o.setTheme(e.default);
    var s = o;
    t.default = s;
  })(L);
var G = {},
  R = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = n,
    i = (function () {
      var t = i.prototype;
      function i(t) {
        (0, e.deepMix)(this, this.getDefaultCfg(), t),
          this._init(),
          this._renderTitle(),
          this._renderItems();
      }
      return (
        (t.getDefaultCfg = function () {
          return {
            showTitle: !1,
            title: null,
            items: null,
            titleGap: 12,
            itemGap: 10,
            itemMarginBottom: 12,
            itemFormatter: null,
            itemWidth: null,
            wordSpace: 6,
            x: 0,
            y: 0,
            layout: "horizontal",
            joinString: ": ",
          };
        }),
        (t._init = function () {
          var t = this.parent;
          if (t) {
            var e = t.addGroup({ zIndex: this.zIndex || 0 });
            this.container = e;
            var i = e.addGroup();
            this.wrapper = i;
            var r = i.addGroup({ className: "itemsGroup" });
            this.itemsGroup = r;
          }
        }),
        (t._renderTitle = function (t) {
          t = t || this.title;
          var i = this.titleShape,
            r = 0;
          if (this.showTitle && t) {
            if (i && !i.get("destroyed")) i.attr("text", t);
            else {
              var n = this.wrapper,
                a = this.titleStyle;
              (i = n.addShape("text", {
                className: "title",
                attrs: (0, e.mix)({ x: 0, y: 0, text: t }, a),
              })),
                (this.titleShape = i);
            }
            r = i.getBBox().height + this.titleGap;
          }
          this._titleHeight = r;
        }),
        (t._renderItems = function (t) {
          var i = this;
          (t = t || i.items) &&
            (i.reversed && t.reverse(),
            (0, e.each)(t, function (t, e) {
              i._addItem(t, e);
            }),
            t.length > 1 && this._adjustItems(),
            this._renderBackground());
        }),
        (t._renderBackground = function () {
          var t = this.background;
          if (t) {
            var i = this.container,
              r = this.wrapper.getBBox(),
              n = r.minX,
              a = r.minY,
              o = r.width,
              s = r.height,
              u = t.padding || [0, 0, 0, 0];
            u = (0, e.parsePadding)(u);
            var l = (0, e.mix)(
                {
                  x: n - u[3],
                  y: a - u[0],
                  width: o + u[1] + u[3],
                  height: s + u[0] + u[2],
                },
                t
              ),
              c = this.backShape;
            c ? c.attr(l) : (c = i.addShape("Rect", { zIndex: -1, attrs: l })),
              (this.backShape = c),
              i.sort();
          }
        }),
        (t._addItem = function (t) {
          var i,
            r = this.itemsGroup.addGroup({
              name: t.name,
              value: t.value,
              dataValue: t.dataValue,
              checked: t.checked,
            }),
            n = this.unCheckStyle,
            a = this.unCheckColor,
            o = this.nameStyle,
            s = this.valueStyle,
            u = this.wordSpace,
            l = t.marker,
            c = t.value,
            h = 0;
          if ((a && (n.fill = a), l)) {
            var f = l.radius || 3,
              d = (0, e.mix)({ x: f, y: this._titleHeight }, l);
            !1 === t.checked && (0, e.mix)(d, n),
              (h +=
                r
                  .addShape("marker", { className: "item-marker", attrs: d })
                  .getBBox().width + u);
          }
          var p = t.name;
          if (p) {
            var v = this.joinString || "";
            (p = c ? p + v : p),
              (i = r.addShape("text", {
                className: "name",
                attrs: (0, e.mix)(
                  {
                    x: h,
                    y: this._titleHeight,
                    text: this._formatItemValue(p),
                  },
                  o,
                  !1 === t.checked ? n : null
                ),
              }));
          }
          if (c) {
            var g = h;
            i && (g += i.getBBox().width),
              r.addShape("text", {
                className: "value",
                attrs: (0, e.mix)(
                  { x: g, y: this._titleHeight, text: c },
                  s,
                  !1 === t.checked ? n : null
                ),
              });
          }
          return r;
        }),
        (t._formatItemValue = function (t) {
          var e = this.itemFormatter;
          return e && (t = e.call(this, t)), t;
        }),
        (t._getMaxItemWidth = function () {
          var t = this.itemWidth;
          if ((0, e.isNumber)(t) || (0, e.isNil)(t)) return t;
          if ("auto" === t) {
            for (
              var i = this.itemsGroup.get("children"),
                r = i.length,
                n = 0,
                a = 0;
              a < r;
              a++
            ) {
              var o = i[a].getBBox().width;
              n = Math.max(n, o);
            }
            var s = this.maxLength,
              u = this.itemGap,
              l = (s - u) / 2,
              c = (s - 2 * u) / 3;
            return 2 === r ? Math.max(n, l) : n <= c ? c : n <= l ? l : n;
          }
        }),
        (t._adjustHorizontal = function () {
          for (
            var t,
              e,
              i = this.maxLength,
              r = this.itemsGroup.get("children"),
              n = this.itemGap,
              a = this.itemMarginBottom,
              o = this._titleHeight,
              s = 0,
              u = 0,
              l = this._getMaxItemWidth(),
              c = [],
              h = 0,
              f = r.length;
            h < f;
            h++
          ) {
            var d = r[h],
              p = d.getBBox(),
              v = p.height,
              g = p.width;
            (e = v + a),
              (t = l || g) - (i - u) > 1e-4 && (s++, (u = 0)),
              d.moveTo(u, s * e),
              c.push({
                x: u,
                y: s * e + o - v / 2,
                width: 1.375 * g,
                height: 1.375 * v,
              }),
              (u += t + n);
          }
          this.legendHitBoxes = c;
        }),
        (t._adjustVertical = function () {
          for (
            var t,
              i,
              r = this.maxLength,
              n = this.itemsGroup,
              a = this.itemGap,
              o = this.itemMarginBottom,
              s = this.itemWidth,
              u = this._titleHeight,
              l = n.get("children"),
              c = 0,
              h = 0,
              f = 0,
              d = [],
              p = 0,
              v = l.length;
            p < v;
            p++
          ) {
            var g = l[p],
              m = g.getBBox();
            (t = m.width),
              (i = m.height),
              (0, e.isNumber)(s) ? (h = s + a) : t > h && (h = t + a),
              r - c < i
                ? ((c = 0),
                  (f += h),
                  g.moveTo(f, 0),
                  d.push({
                    x: f,
                    y: u - i / 2,
                    width: 1.375 * t,
                    height: 1.375 * i,
                  }))
                : (g.moveTo(f, c),
                  d.push({
                    x: f,
                    y: c - i / 2 + u,
                    width: 1.375 * t,
                    height: 1.375 * i,
                  })),
              (c += i + o);
          }
          this.legendHitBoxes = d;
        }),
        (t._adjustItems = function () {
          "horizontal" === this.layout
            ? this._adjustHorizontal()
            : this._adjustVertical();
        }),
        (t.moveTo = function (t, e) {
          (this.x = t), (this.y = e);
          var i = this.container;
          return i && i.moveTo(t, e), this;
        }),
        (t.setItems = function (t) {
          this.clearItems(), this._renderItems(t);
        }),
        (t.setTitle = function (t) {
          this._renderTitle(t);
        }),
        (t.clearItems = function () {
          this.itemsGroup.clear();
        }),
        (t.getWidth = function () {
          return this.container.getBBox().width;
        }),
        (t.getHeight = function () {
          return this.container.getBBox().height;
        }),
        (t.show = function () {
          this.container.show();
        }),
        (t.hide = function () {
          this.container.hide();
        }),
        (t.clear = function () {
          var t = this.container;
          t.clear(), t.remove(!0);
        }),
        i
      );
    })();
  t.default = i;
})(R);
var H = {},
  q = {},
  V = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = {
      generateDefault: function () {
        return [1, 0, 0, 1, 0, 0];
      },
      isChanged: function (t) {
        return (
          1 !== t[0] ||
          0 !== t[1] ||
          0 !== t[2] ||
          1 !== t[3] ||
          0 !== t[4] ||
          0 !== t[5]
        );
      },
      multiply: function (t, e) {
        return [
          t[0] * e[0] + t[2] * e[1],
          t[1] * e[0] + t[3] * e[1],
          t[0] * e[2] + t[2] * e[3],
          t[1] * e[2] + t[3] * e[3],
          t[0] * e[4] + t[2] * e[5] + t[4],
          t[1] * e[4] + t[3] * e[5] + t[5],
        ];
      },
      scale: function (t, e, i) {
        return (
          (t[0] = e[0] * i[0]),
          (t[1] = e[1] * i[0]),
          (t[2] = e[2] * i[1]),
          (t[3] = e[3] * i[1]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          t
        );
      },
      rotate: function (t, e, i) {
        var r = Math.cos(i),
          n = Math.sin(i),
          a = e[0] * r + e[2] * n,
          o = e[1] * r + e[3] * n,
          s = e[0] * -n + e[2] * r,
          u = e[1] * -n + e[3] * r;
        return (
          (t[0] = a),
          (t[1] = o),
          (t[2] = s),
          (t[3] = u),
          (t[4] = e[4]),
          (t[5] = e[5]),
          t
        );
      },
      translate: function (t, e, i) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4] + e[0] * i[0] + e[2] * i[1]),
          (t[5] = e[5] + e[1] * i[0] + e[3] * i[1]),
          t
        );
      },
      transform: function (t, i) {
        for (var r = [].concat(t), n = 0, a = i.length; n < a; n++) {
          var o = i[n];
          switch (o[0]) {
            case "t":
              e.translate(r, r, [o[1], o[2]]);
              break;
            case "s":
              e.scale(r, r, [o[1], o[2]]);
              break;
            case "r":
              e.rotate(r, r, o[1]);
          }
        }
        return r;
      },
    },
    i = e;
  t.default = i;
})(V);
var J = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = {
    create: function () {
      return [0, 0];
    },
    length: function (t) {
      var e = t[0],
        i = t[1];
      return Math.sqrt(e * e + i * i);
    },
    normalize: function (t, e) {
      var i = this.length(e);
      return (
        0 === i
          ? ((t[0] = 0), (t[1] = 0))
          : ((t[0] = e[0] / i), (t[1] = e[1] / i)),
        t
      );
    },
    add: function (t, e, i) {
      return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), t;
    },
    sub: function (t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), t;
    },
    scale: function (t, e, i) {
      return (t[0] = e[0] * i), (t[1] = e[1] * i), t;
    },
    dot: function (t, e) {
      return t[0] * e[0] + t[1] * e[1];
    },
    direction: function (t, e) {
      return t[0] * e[1] - e[0] * t[1];
    },
    angle: function (t, e) {
      var i = this.dot(t, e) / (this.length(t) * this.length(e));
      return Math.acos(i);
    },
    angleTo: function (t, e, i) {
      var r = this.angle(t, e),
        n = this.direction(t, e) >= 0;
      return i ? (n ? 2 * Math.PI - r : r) : n ? r : 2 * Math.PI - r;
    },
    zero: function (t) {
      return 0 === t[0] && 0 === t[1];
    },
    distance: function (t, e) {
      var i = e[0] - t[0],
        r = e[1] - t[1];
      return Math.sqrt(i * i + r * r);
    },
    clone: function (t) {
      return [t[0], t[1]];
    },
    min: function (t, e, i) {
      return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), t;
    },
    max: function (t, e, i) {
      return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), t;
    },
    transformMat2d: function (t, e, i) {
      var r = e[0],
        n = e[1];
      return (
        (t[0] = i[0] * r + i[2] * n + i[4]),
        (t[1] = i[1] * r + i[3] * n + i[5]),
        t
      );
    },
  };
  t.default = e;
})(J);
var K = {},
  U = {},
  $ = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = n,
    i = (function () {
      function t() {
        this.__events = {};
      }
      var i = t.prototype;
      return (
        (i.on = function (t, e) {
          if (t && e) {
            var i = this.__events[t] || [];
            i.push(e), (this.__events[t] = i);
          }
        }),
        (i.emit = function (t, i) {
          var r = this;
          if (((0, e.isObject)(t) && (t = (i = t) && i.type), t)) {
            var n = this.__events[t];
            n &&
              n.length &&
              n.forEach(function (t) {
                t.call(r, i);
              });
          }
        }),
        (i.off = function (t, e) {
          var i = this.__events,
            r = i[t];
          if (r && r.length)
            if (e)
              for (var n = 0, a = r.length; n < a; n++)
                r[n] === e && (r.splice(n, 1), n--);
            else delete i[t];
        }),
        t
      );
    })();
  t.default = i;
})($);
var Q = {};
!(function (e) {
  (e.__esModule = !0), (e.default = void 0);
  var i = B;
  function r(e, i, r) {
    return (
      (i = (function (e) {
        var i = (function (e, i) {
          if ("object" != t(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, i);
            if ("object" != t(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" == t(i) ? i : String(i);
      })(i)) in e
        ? Object.defineProperty(e, i, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[i] = r),
      e
    );
  }
  var n = function (t, e) {
      var i = e.x - t.x,
        r = e.y - t.y;
      return Math.abs(i) > Math.abs(r)
        ? i > 0
          ? "right"
          : "left"
        : r > 0
        ? "down"
        : "up";
    },
    a = function (t, e) {
      var i = Math.abs(e.x - t.x),
        r = Math.abs(e.y - t.y);
      return Math.sqrt(i * i + r * r);
    },
    o = (function () {
      function t(t) {
        var e = this,
          o = t.canvas,
          s = t.el;
        r(this, "_click", function (t) {
          var r = (0, i.convertPoints)(t, e.canvas);
          (t.points = r), e.emitEvent("click", t);
        }),
          r(this, "_start", function (t) {
            var r,
              n,
              o = (0, i.convertPoints)(t, e.canvas);
            o &&
              ((t.points = o),
              e.emitEvent("touchstart", t),
              e.reset(),
              (e.startTime = Date.now()),
              (e.startPoints = o),
              o.length > 1
                ? ((e.startDistance = a(o[0], o[1])),
                  (e.center =
                    ((r = o[0]),
                    (n = o[1]),
                    { x: r.x + (n.x - r.x) / 2, y: r.y + (n.y - r.y) / 2 })))
                : (e.pressTimeout = setTimeout(function () {
                    var i = "press",
                      r = "none";
                    (t.direction = r),
                      e.emitStart(i, t),
                      e.emitEvent(i, t),
                      (e.eventType = i),
                      (e.direction = r);
                  }, 250)));
          }),
          r(this, "_move", function (t) {
            var r = (0, i.convertPoints)(t, e.canvas);
            if (r) {
              e.clearPressTimeout(),
                (t.points = r),
                e.emitEvent("touchmove", t);
              var o = e.startPoints;
              if (o)
                if (r.length > 1) {
                  var s = e.startDistance,
                    u = a(r[0], r[1]);
                  (t.zoom = u / s),
                    (t.center = e.center),
                    e.emitStart("pinch", t),
                    e.emitEvent("pinch", t);
                } else {
                  var l = r[0].x - o[0].x,
                    c = r[0].y - o[0].y,
                    h = e.direction || n(o[0], r[0]);
                  e.direction = h;
                  var f = e.getEventType(r);
                  (t.direction = h),
                    (t.deltaX = l),
                    (t.deltaY = c),
                    e.emitStart(f, t),
                    e.emitEvent(f, t);
                  var d = e.lastMoveTime,
                    p = Date.now();
                  p - d > 0 &&
                    ((e.prevMoveTime = d),
                    (e.prevMovePoints = e.lastMovePoints),
                    (e.lastMoveTime = p),
                    (e.lastMovePoints = r));
                }
            }
          }),
          r(this, "_end", function (t) {
            var r = (0, i.convertPoints)(t, e.canvas);
            (t.points = r), e.emitEnd(t), e.emitEvent("touchend", t);
            var o = e.lastMoveTime;
            if (Date.now() - o < 100) {
              var s = o - (e.prevMoveTime || e.startTime);
              if (s > 0) {
                var u = e.prevMovePoints || e.startPoints,
                  l = e.lastMovePoints,
                  c = a(u[0], l[0]) / s;
                c > 0.3 &&
                  ((t.velocity = c),
                  (t.direction = n(u[0], l[0])),
                  e.emitEvent("swipe", t));
              }
            }
            e.reset();
            var h = t.touches;
            h && h.length > 0 && e._start(t);
          }),
          r(this, "_cancel", function (t) {
            e.emitEvent("touchcancel", t), e.reset();
          }),
          (this.canvas = o),
          this.delegateEvent(s),
          (this.processEvent = {});
      }
      var e = t.prototype;
      return (
        (e.delegateEvent = function (t) {
          t.addEventListener("click", this._click),
            t.addEventListener("touchstart", this._start),
            t.addEventListener("touchmove", this._move),
            t.addEventListener("touchend", this._end),
            t.addEventListener("touchcancel", this._cancel);
        }),
        (e.emitEvent = function (t, e) {
          this.canvas.emit(t, e);
        }),
        (e.getEventType = function (t) {
          var e,
            i = this.eventType,
            r = this.canvas,
            n = this.startTime,
            o = this.startPoints;
          if (i) return i;
          var s = r.__events.pan;
          return (
            (e =
              s && s.length
                ? Date.now() - n > 250 && a(o[0], t[0]) < 10
                  ? "press"
                  : "pan"
                : "press"),
            (this.eventType = e),
            e
          );
        }),
        (e.enable = function (t) {
          this.processEvent[t] = !0;
        }),
        (e.isProcess = function (t) {
          return this.processEvent[t];
        }),
        (e.emitStart = function (t, e) {
          this.isProcess(t) || (this.enable(t), this.emitEvent(t + "start", e));
        }),
        (e.emitEnd = function (t) {
          var e = this,
            i = this.processEvent;
          Object.keys(i).forEach(function (r) {
            e.emitEvent(r + "end", t), delete i[r];
          });
        }),
        (e.clearPressTimeout = function () {
          this.pressTimeout &&
            (clearTimeout(this.pressTimeout), (this.pressTimeout = 0));
        }),
        (e.reset = function () {
          this.clearPressTimeout(),
            (this.startTime = 0),
            (this.startPoints = null),
            (this.startDistance = 0),
            (this.direction = null),
            (this.eventType = null),
            (this.pinch = !1),
            (this.prevMoveTime = 0),
            (this.prevMovePoints = null),
            (this.lastMoveTime = 0),
            (this.lastMovePoints = null);
        }),
        t
      );
    })();
  e.default = o;
})(Q);
var Z = {};
!(function (t) {
  var e;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  (t.__esModule = !0), (t.default = void 0);
  var r = (function (t) {
      var e, r;
      function n(e) {
        var i;
        return (
          ((i = t.call(this) || this).context = e),
          (i.width = 0),
          (i.height = 0),
          (i.style = {}),
          (i.currentStyle = {}),
          (i.attrs = {}),
          (i.isCanvasElement = !0),
          i
        );
      }
      (r = t),
        ((e = n).prototype = Object.create(r.prototype)),
        (e.prototype.constructor = e),
        i(e, r);
      var a = n.prototype;
      return (
        (a.getContext = function () {
          return this.context;
        }),
        (a.getBoundingClientRect = function () {
          return { top: 0, right: this.width, bottom: this.height, left: 0 };
        }),
        (a.setAttribute = function (t, e) {
          this.attrs[t] = e;
        }),
        (a.addEventListener = function (t, e) {
          this.on(t, e);
        }),
        (a.removeEventListener = function (t, e) {
          this.off(t, e);
        }),
        (a.dispatchEvent = function (t, e) {
          this.emit(t, e);
        }),
        n
      );
    })(((e = $) && e.__esModule ? e : { default: e }).default),
    n = {
      create: function (t) {
        return t
          ? (function (t) {
              if (!t) return !1;
              if (
                1 !== t.nodeType ||
                !t.nodeName ||
                "canvas" !== t.nodeName.toLowerCase()
              )
                return !1;
              var e = !1;
              try {
                t.addEventListener("eventTest", function () {
                  e = !0;
                }),
                  t.dispatchEvent(new Event("eventTest"));
              } catch (t) {
                e = !1;
              }
              return e;
            })(t.canvas)
            ? t.canvas
            : new r(t)
          : null;
      },
    };
  t.default = n;
})(Z);
var tt = {},
  et = {},
  it = {},
  rt = {},
  nt = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0), (t.parseStyle = r);
  var e = n;
  function i(t, i) {
    (0, e.each)(t, function (t) {
      (t = t.split(":")), i.addColorStop(Number(t[0]), t[1]);
    });
  }
  function r(t, e, r) {
    if ("(" === t[1])
      try {
        var n = t[0];
        if ("l" === n)
          return (function (t, e, r) {
            var n,
              a = t.split(" "),
              o = a[0].slice(2, a[0].length - 1);
            o =
              ((((parseFloat(o) * Math.PI) / 180) % (n = 2 * Math.PI)) + n) % n;
            var s,
              u,
              l = a.slice(1),
              c = e.getBBox(),
              h = c.minX,
              f = c.minY,
              d = c.maxX,
              p = c.maxY;
            o >= 0 && o < 0.5 * Math.PI
              ? ((s = { x: h, y: f }), (u = { x: d, y: p }))
              : 0.5 * Math.PI <= o && o < Math.PI
              ? ((s = { x: d, y: f }), (u = { x: h, y: p }))
              : Math.PI <= o && o < 1.5 * Math.PI
              ? ((s = { x: d, y: p }), (u = { x: h, y: f }))
              : ((s = { x: h, y: p }), (u = { x: d, y: f }));
            var v = Math.tan(o),
              g = v * v,
              m = (u.x - s.x + v * (u.y - s.y)) / (g + 1) + s.x,
              y = (v * (u.x - s.x + v * (u.y - s.y))) / (g + 1) + s.y,
              x = r.createLinearGradient(s.x, s.y, m, y);
            return i(l, x), x;
          })(t, e, r);
        if ("r" === n)
          return (function (t, e, r) {
            var n = t.split(" "),
              a = n[0].slice(2, n[0].length - 1);
            a = a.split(",");
            var o = parseFloat(a[0]),
              s = parseFloat(a[1]),
              u = parseFloat(a[2]),
              l = n.slice(1);
            if (0 === u) return l[l.length - 1].split(":")[1];
            var c = e.getBBox(),
              h = c.width,
              f = c.height,
              d = c.minX,
              p = c.minY,
              v = Math.sqrt(h * h + f * f) / 2,
              g = r.createRadialGradient(
                d + h * o,
                p + f * s,
                u * v,
                d + h / 2,
                p + f / 2,
                v
              );
            return i(l, g), g;
          })(t, e, r);
      } catch (t) {}
    return t;
  }
  var a = { parseStyle: r };
  t.default = a;
})(nt),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = n,
      i = o(V),
      r = o(J),
      a = nt;
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var s = {
        stroke: "strokeStyle",
        fill: "fillStyle",
        opacity: "globalAlpha",
      },
      u = [
        "fillStyle",
        "font",
        "globalAlpha",
        "lineCap",
        "lineWidth",
        "lineJoin",
        "miterLimit",
        "shadowBlur",
        "shadowColor",
        "shadowOffsetX",
        "shadowOffsetY",
        "strokeStyle",
        "textAlign",
        "textBaseline",
        "lineDash",
        "shadow",
      ],
      l = ["circle", "sector", "polygon", "rect", "polyline"],
      c = (function () {
        var t = n.prototype;
        function n(t) {
          this._initProperties(), (0, e.mix)(this._attrs, t);
          var i = this._attrs.attrs;
          i && this.initAttrs(i), this.initTransform();
        }
        return (
          (t._initProperties = function () {
            this._attrs = { zIndex: 0, visible: !0, destroyed: !1 };
          }),
          (t.get = function (t) {
            return this._attrs[t];
          }),
          (t.set = function (t, e) {
            this._attrs[t] = e;
          }),
          (t.isGroup = function () {
            return this.get("isGroup");
          }),
          (t.isShape = function () {
            return this.get("isShape");
          }),
          (t.initAttrs = function (t) {
            this.attr((0, e.mix)(this.getDefaultAttrs(), t));
          }),
          (t.getDefaultAttrs = function () {
            return {};
          }),
          (t._setAttr = function (t, e) {
            var i = this._attrs.attrs;
            if ("clip" === t) e = this._setAttrClip(e);
            else {
              var r = s[t];
              r && (i[r] = e);
            }
            i[t] = e;
          }),
          (t._getAttr = function (t) {
            return this._attrs.attrs[t];
          }),
          (t._setAttrClip = function (t) {
            return t && l.indexOf(t._attrs.type) > -1
              ? (null === t.get("canvas") && (t = Object.assign({}, t)),
                t.set("parent", this.get("parent")),
                t.set("context", this.get("context")),
                t)
              : null;
          }),
          (t.attr = function (t, i) {
            var r = this;
            if (r.get("destroyed")) return null;
            var n = arguments.length;
            if (0 === n) return r._attrs.attrs;
            if ((0, e.isObject)(t)) {
              for (var a in ((this._attrs.bbox = null), t)) r._setAttr(a, t[a]);
              return r._afterAttrsSet && r._afterAttrsSet(), r;
            }
            return 2 === n
              ? ((this._attrs.bbox = null),
                r._setAttr(t, i),
                r._afterAttrsSet && r._afterAttrsSet(),
                r)
              : r._getAttr(t);
          }),
          (t.getParent = function () {
            return this.get("parent");
          }),
          (t.draw = function (t) {
            this.get("destroyed") ||
              (this.get("visible") &&
                (this.setContext(t),
                this.drawInner(t),
                this.restoreContext(t)));
          }),
          (t.setContext = function (t) {
            var e = this._attrs.attrs.clip;
            t.save(),
              e && (e.resetTransform(t), e.createPath(t), t.clip()),
              this.resetContext(t),
              this.resetTransform(t);
          }),
          (t.restoreContext = function (t) {
            t.restore();
          }),
          (t.resetContext = function (t) {
            var i = this._attrs.attrs;
            for (var r in i)
              if (u.indexOf(r) > -1) {
                var n = i[r];
                ("fillStyle" !== r && "strokeStyle" !== r) ||
                  !n ||
                  (n = (0, a.parseStyle)(n, this, t)),
                  "lineDash" === r && t.setLineDash && (0, e.isArray)(n)
                    ? t.setLineDash(n)
                    : (t[r] = n);
              }
          }),
          (t.hasFill = function () {
            return this.get("canFill") && this._attrs.attrs.fillStyle;
          }),
          (t.hasStroke = function () {
            return this.get("canStroke") && this._attrs.attrs.strokeStyle;
          }),
          (t.drawInner = function () {}),
          (t.show = function () {
            return this.set("visible", !0), this;
          }),
          (t.hide = function () {
            return this.set("visible", !1), this;
          }),
          (t.isVisible = function () {
            return this.get("visible");
          }),
          (t.getAriaLabel = function () {
            var t = this._attrs,
              e = t.destroyed,
              i = t.visible,
              r = t.isShape,
              n = t.aria;
            if (!e && i && (!r || n)) return this._getAriaLabel();
          }),
          (t._getAriaLabel = function () {
            return this._attrs.ariaLabel;
          }),
          (t._removeFromParent = function () {
            var t = this.get("parent");
            if (t) {
              var i = t.get("children");
              e.Array.remove(i, this);
            }
            return this;
          }),
          (t.remove = function (t) {
            t ? this.destroy() : this._removeFromParent();
          }),
          (t.destroy = function () {
            if (this.get("destroyed")) return null;
            this._removeFromParent(),
              (this._attrs = {}),
              this.set("destroyed", !0);
          }),
          (t.getBBox = function () {
            return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };
          }),
          (t.initTransform = function () {
            var t = this._attrs.attrs || {};
            t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]),
              (this._attrs.attrs = t);
          }),
          (t.getMatrix = function () {
            return this._attrs.attrs.matrix;
          }),
          (t.setMatrix = function (t) {
            this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]];
          }),
          (t.transform = function (t) {
            var e = this._attrs.attrs.matrix;
            return (this._attrs.attrs.matrix = i.default.transform(e, t)), this;
          }),
          (t.setTransform = function (t) {
            return (
              (this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0]), this.transform(t)
            );
          }),
          (t.translate = function (t, e) {
            var r = this._attrs.attrs.matrix;
            i.default.translate(r, r, [t, e]);
          }),
          (t.rotate = function (t) {
            var e = this._attrs.attrs.matrix;
            i.default.rotate(e, e, t);
          }),
          (t.scale = function (t, e) {
            var r = this._attrs.attrs.matrix;
            i.default.scale(r, r, [t, e]);
          }),
          (t.moveTo = function (t, e) {
            var i = this._attrs.x || 0,
              r = this._attrs.y || 0;
            this.translate(t - i, e - r), this.set("x", t), this.set("y", e);
          }),
          (t.apply = function (t) {
            var e = this._attrs.attrs.matrix;
            return r.default.transformMat2d(t, t, e), this;
          }),
          (t.resetTransform = function (t) {
            var e = this._attrs.attrs.matrix;
            i.default.isChanged(e) &&
              t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
          }),
          (t.isDestroyed = function () {
            return this.get("destroyed");
          }),
          n
        );
      })();
    t.default = c;
  })(rt),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e,
      i = n;
    function r(t, e) {
      return (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    var a = (function (t) {
      var e, n;
      function a() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = a).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        r(e, n);
      var o = a.prototype;
      return (
        (o._initProperties = function () {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1,
            isShape: !0,
            attrs: {},
          };
        }),
        (o.getType = function () {
          return this._attrs.type;
        }),
        (o.drawInner = function (t) {
          var e = this,
            r = e.get("attrs");
          e.createPath(t);
          var n = t.globalAlpha;
          if (e.hasFill()) {
            var a = r.fillOpacity;
            (0, i.isNil)(a) || 1 === a
              ? t.fill()
              : ((t.globalAlpha = a), t.fill(), (t.globalAlpha = n));
          }
          if (e.hasStroke() && r.lineWidth > 0) {
            var o = r.strokeOpacity;
            (0, i.isNil)(o) || 1 === o || (t.globalAlpha = o), t.stroke();
          }
        }),
        (o.getBBox = function () {
          var t = this._attrs.bbox;
          return (
            t ||
              ((t = this.calculateBox()) &&
                ((t.x = t.minX),
                (t.y = t.minY),
                (t.width = t.maxX - t.minX),
                (t.height = t.maxY - t.minY)),
              (this._attrs.bbox = t)),
            t
          );
        }),
        (o.calculateBox = function () {
          return null;
        }),
        (o.createPath = function () {}),
        a
      );
    })(((e = rt) && e.__esModule ? e : { default: e }).default);
    t.default = a;
  })(it);
var at = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e,
    i = n;
  function r(t, e) {
    return (r = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var a = (function (t) {
    var e, n;
    function a() {
      return t.apply(this, arguments) || this;
    }
    (n = t),
      ((e = a).prototype = Object.create(n.prototype)),
      (e.prototype.constructor = e),
      r(e, n);
    var o = a.prototype;
    return (
      (o._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canFill = !0),
          (this._attrs.canStroke = !0),
          (this._attrs.type = "rect");
      }),
      (o.getDefaultAttrs = function () {
        return { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 0 };
      }),
      (o.createRadiusPath = function (t, e, r, n, a, o) {
        (o = (function (t, e, r) {
          if (!((t = (0, i.parsePadding)(t))[0] || t[1] || t[2] || t[3]))
            return t;
          var n = Math.max(t[0] + t[1], t[2] + t[3]),
            a = Math.max(t[0] + t[3], t[1] + t[2]),
            o = Math.min(e / n, r / a);
          return o < 1
            ? t.map(function (t) {
                return t * o;
              })
            : t;
        })(o, n, a)),
          t.moveTo(e + o[0], r),
          t.lineTo(e + n - o[1], r),
          t.arc(e + n - o[1], r + o[1], o[1], -Math.PI / 2, 0, !1),
          t.lineTo(e + n, r + a - o[2]),
          t.arc(e + n - o[2], r + a - o[2], o[2], 0, Math.PI / 2, !1),
          t.lineTo(e + o[3], r + a),
          t.arc(e + o[3], r + a - o[3], o[3], Math.PI / 2, Math.PI, !1),
          t.lineTo(e, r + o[0]),
          t.arc(e + o[0], r + o[0], o[0], Math.PI, (3 * Math.PI) / 2, !1),
          t.closePath();
      }),
      (o.createPath = function (t) {
        var e = this.get("attrs"),
          i = e.x,
          r = e.y,
          n = e.width,
          a = e.height,
          o = e.radius;
        t.beginPath(),
          o && n * a
            ? this.createRadiusPath(t, i, r, n, a, o)
            : t.rect(i, r, n, a);
      }),
      (o.calculateBox = function () {
        var t = this.get("attrs"),
          e = t.x,
          i = t.y;
        return { minX: e, minY: i, maxX: e + t.width, maxY: i + t.height };
      }),
      a
    );
  })(((e = it) && e.__esModule ? e : { default: e }).default);
  t.default = a;
})(at);
var ot = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e,
    i = n,
    r = (e = at) && e.__esModule ? e : { default: e };
  function a(t, e) {
    return (a = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var o = {},
    s = (function (t) {
      var e, r;
      function n() {
        return t.apply(this, arguments) || this;
      }
      (r = t),
        ((e = n).prototype = Object.create(r.prototype)),
        (e.prototype.constructor = e),
        a(e, r);
      var s = n.prototype;
      return (
        (s._initProperties = function () {
          t.prototype._initProperties.call(this),
            (this._attrs.canFill = !1),
            (this._attrs.canStroke = !1),
            (this._attrs.loading = !1),
            (this._attrs.image = null),
            (this._attrs.type = "image");
        }),
        (s.draw = function (e) {
          var i = this;
          if (!this.get("loading"))
            if (this.get("image")) t.prototype.draw.call(this, e);
            else {
              var r = this.get("attrs").src;
              if (r && window.Image) {
                var n = this.get("cacheImage");
                if (n && o[r])
                  return this.set("image", o[r]), void this.draw(e);
                this.set("loading", !0);
                var a = new Image();
                (a.crossOrigin = ""),
                  (a.onload = function () {
                    i.set("loading", !1), i.set("image", a), i.draw(e);
                  }),
                  (a.src = r),
                  n && (o[r] = a);
              }
            }
        }),
        (s.createPath = function (t) {
          var e = this.get("image");
          this.drawImage(t, e);
        }),
        (s.drawImage = function (t, e) {
          var r = this._attrs,
            n = r.attrs;
          if (!r.destroyed) {
            var a = n.x,
              o = n.y,
              s = n.width,
              u = n.height,
              l = n.sx,
              c = n.sy,
              h = n.swidth,
              f = n.sheight,
              d = n.radius,
              p = n.fillOpacity;
            d && (t.save(), this.createRadiusPath(t, a, o, s, u, d), t.clip());
            var v = t.globalAlpha;
            (0, i.isNil)(p) || (t.globalAlpha = p),
              (0, i.isNil)(l) ||
              (0, i.isNil)(c) ||
              (0, i.isNil)(h) ||
              (0, i.isNil)(f)
                ? t.drawImage(e, a, o, s, u)
                : t.drawImage(e, l, c, h, f, a, o, s, u),
              (t.globalAlpha = v),
              d && t.restore();
          }
        }),
        n
      );
    })(r.default);
  t.default = s;
})(ot);
var st = {};
!(function (t) {
  var e;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  (t.__esModule = !0), (t.default = void 0);
  var r = (function (t) {
    var e, r;
    function n() {
      return t.apply(this, arguments) || this;
    }
    (r = t),
      ((e = n).prototype = Object.create(r.prototype)),
      (e.prototype.constructor = e),
      i(e, r);
    var a = n.prototype;
    return (
      (a._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canFill = !0),
          (this._attrs.canStroke = !0),
          (this._attrs.type = "circle");
      }),
      (a.getDefaultAttrs = function () {
        return { x: 0, y: 0, r: 0, lineWidth: 0 };
      }),
      (a.createPath = function (t) {
        var e = this.get("attrs"),
          i = e.x,
          r = e.y,
          n = e.r;
        t.beginPath(), t.arc(i, r, n, 0, 2 * Math.PI, !1), t.closePath();
      }),
      (a.calculateBox = function () {
        var t = this.get("attrs"),
          e = t.x,
          i = t.y,
          r = t.r;
        return { minX: e - r, maxX: e + r, minY: i - r, maxY: i + r };
      }),
      n
    );
  })(((e = it) && e.__esModule ? e : { default: e }).default);
  t.default = r;
})(st);
var ut,
  lt = {},
  ct = {
    __esModule: !0,
    getBBoxFromArc: function (t, e, i, r, n, a) {
      var o = Math.abs(r - n);
      if (o % (2 * Math.PI) < 1e-4 && o > 1e-4)
        return { minX: t - i, minY: e - i, maxX: t + i, maxY: e + i };
      (ft[0] = Math.cos(r) * i + t),
        (ft[1] = Math.sin(r) * i + e),
        (dt[0] = Math.cos(n) * i + t),
        (dt[1] = Math.sin(n) * i + e);
      var s = [0, 0],
        u = [0, 0];
      if (
        (ht.default.min(s, ft, dt),
        ht.default.max(u, ft, dt),
        (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI),
        (n %= 2 * Math.PI) < 0 && (n += 2 * Math.PI),
        r > n && !a ? (n += 2 * Math.PI) : r < n && a && (r += 2 * Math.PI),
        a)
      ) {
        var l = n;
        (n = r), (r = l);
      }
      for (var c = 0; c < n; c += Math.PI / 2)
        c > r &&
          ((pt[0] = Math.cos(c) * i + t),
          (pt[1] = Math.sin(c) * i + e),
          ht.default.min(s, pt, s),
          ht.default.max(u, pt, u));
      return { minX: s[0], minY: s[1], maxX: u[0], maxY: u[1] };
    },
    getBBoxFromBezierGroup: function (t, e) {
      for (
        var i = 1 / 0, r = -1 / 0, n = 1 / 0, a = -1 / 0, o = 0, s = t.length;
        o < s;
        o++
      ) {
        var u = gt(t[o]);
        u.minX < i && (i = u.minX),
          u.maxX > r && (r = u.maxX),
          u.minY < n && (n = u.minY),
          u.maxY > a && (a = u.maxY);
      }
      return {
        minX: i - (e = e / 2 || 0),
        minY: n - e,
        maxX: r + e,
        maxY: a + e,
      };
    },
    getBBoxFromLine: function (t, e, i, r, n) {
      return (
        (n = n / 2 || 0),
        {
          minX: Math.min(t, i) - n,
          minY: Math.min(e, r) - n,
          maxX: Math.max(t, i) + n,
          maxY: Math.max(e, r) + n,
        }
      );
    },
    getBBoxFromPoints: function (t, e) {
      if (0 !== t.length) {
        for (
          var i = t[0], r = i.x, n = i.x, a = i.y, o = i.y, s = t.length, u = 1;
          u < s;
          u++
        )
          (i = t[u]),
            (r = Math.min(r, i.x)),
            (n = Math.max(n, i.x)),
            (a = Math.min(a, i.y)),
            (o = Math.max(o, i.y));
        return {
          minX: r - (e = e / 2 || 0),
          minY: a - e,
          maxX: n + e,
          maxY: o + e,
        };
      }
    },
  },
  ht = (ut = J) && ut.__esModule ? ut : { default: ut },
  ft = ht.default.create(),
  dt = ht.default.create(),
  pt = ht.default.create();
function vt(t, e, i, r, n) {
  var a = t * t;
  return (
    e +
    (3 * -e + t * (3 * e - e * t)) * t +
    (3 * i + t * (-6 * i + 3 * i * t)) * t +
    (3 * r - 3 * r * t) * a +
    n * (a * t)
  );
}
function gt(t) {
  for (
    var e,
      i,
      r,
      n,
      a,
      o = 1 / 0,
      s = -1 / 0,
      u = 1 / 0,
      l = -1 / 0,
      c = { x: t[0], y: t[1] },
      h = { x: t[2], y: t[3] },
      f = { x: t[4], y: t[5] },
      d = { x: t[6], y: t[7] },
      p = 0;
    p < 100;
    p++
  ) {
    var v = {
      x: vt((a = p / 100), (e = c).x, (i = h).x, (r = f).x, (n = d).x),
      y: vt(a, e.y, i.y, r.y, n.y),
    };
    v.x < o && (o = v.x),
      v.x > s && (s = v.x),
      v.y < u && (u = v.y),
      v.y > l && (l = v.y);
  }
  return { minX: o, minY: u, maxX: s, maxY: l };
}
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = ct;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var r = (function (t) {
    var r, n;
    function a() {
      return t.apply(this, arguments) || this;
    }
    (n = t),
      ((r = a).prototype = Object.create(n.prototype)),
      (r.prototype.constructor = r),
      i(r, n);
    var o = a.prototype;
    return (
      (o._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canStroke = !0),
          (this._attrs.type = "line");
      }),
      (o.getDefaultAttrs = function () {
        return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 };
      }),
      (o.createPath = function (t) {
        var e = this.get("attrs"),
          i = e.x1,
          r = e.y1,
          n = e.x2,
          a = e.y2;
        t.beginPath(), t.moveTo(i, r), t.lineTo(n, a);
      }),
      (o.calculateBox = function () {
        var t = this.get("attrs"),
          i = t.x1,
          r = t.y1,
          n = t.x2,
          a = t.y2,
          o = t.lineWidth;
        return (0, e.getBBoxFromLine)(i, r, n, a, o);
      }),
      a
    );
  })((it && it.__esModule ? it : { default: it }).default);
  t.default = r;
})(lt);
var mt = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = ct;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var r = (function (t) {
    var r, n;
    function a() {
      return t.apply(this, arguments) || this;
    }
    (n = t),
      ((r = a).prototype = Object.create(n.prototype)),
      (r.prototype.constructor = r),
      i(r, n);
    var o = a.prototype;
    return (
      (o._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canFill = !0),
          (this._attrs.canStroke = !0),
          (this._attrs.type = "polygon");
      }),
      (o.getDefaultAttrs = function () {
        return { points: null, lineWidth: 0 };
      }),
      (o.createPath = function (t) {
        var e = this.get("attrs").points;
        t.beginPath();
        for (var i = 0, r = e.length; i < r; i++) {
          var n = e[i];
          0 === i ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
        }
        t.closePath();
      }),
      (o.calculateBox = function () {
        var t = this.get("attrs").points;
        return (0, e.getBBoxFromPoints)(t);
      }),
      a
    );
  })((it && it.__esModule ? it : { default: it }).default);
  t.default = r;
})(mt);
var yt = {},
  xt = {
    __esModule: !0,
    smooth: function (t, e, i) {
      for (
        var r,
          n,
          a,
          o = !!e,
          s = (function (t, e, i, r) {
            var n,
              a,
              o,
              s,
              u,
              l,
              c,
              h,
              f = [],
              d = !!r;
            if (d) {
              for (
                o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0], h = 0, c = t.length;
                h < c;
                h++
              )
                (u = bt(t[h])),
                  _t.default.min(o, o, u),
                  _t.default.max(s, s, u);
              _t.default.min(o, o, r[0]), _t.default.max(s, s, r[1]);
            }
            for (h = 0, l = t.length; h < l; h++) {
              if (((u = bt(t[h])), i))
                (n = bt(t[h ? h - 1 : l - 1])), (a = bt(t[(h + 1) % l]));
              else {
                if (0 === h || h === l - 1) {
                  f.push([u[0], u[1]]);
                  continue;
                }
                (n = bt(t[h - 1])), (a = bt(t[h + 1]));
              }
              var p = _t.default.sub([], a, n);
              _t.default.scale(p, p, 0.4);
              var v = _t.default.distance(u, n),
                g = _t.default.distance(u, a),
                m = v + g;
              0 !== m && ((v /= m), (g /= m));
              var y = _t.default.scale([], p, -v),
                x = _t.default.scale([], p, g),
                _ = _t.default.add([], u, y),
                b = _t.default.add([], u, x);
              d &&
                (_t.default.max(_, _, o),
                _t.default.min(_, _, s),
                _t.default.max(b, b, o),
                _t.default.min(b, b, s)),
                f.push([_[0], _[1]]),
                f.push([b[0], b[1]]);
            }
            return i && f.push(f.shift()), f;
          })(t, 0, o, i),
          u = t.length,
          l = [],
          c = 0;
        c < u - 1;
        c++
      )
        (r = s[2 * c]),
          (n = s[2 * c + 1]),
          (a = t[c + 1]),
          l.push(["C", r[0], r[1], n[0], n[1], a.x, a.y]);
      return (
        o &&
          ((r = s[u]),
          (n = s[u + 1]),
          (a = t[0]),
          l.push(["C", r[0], r[1], n[0], n[1], a.x, a.y])),
        l
      );
    },
  },
  _t = J && J.__esModule ? J : { default: J };
function bt(t) {
  return [t.x, t.y];
}
!(function (e) {
  (e.__esModule = !0), (e.default = void 0);
  var i = it && it.__esModule ? it : { default: it },
    r = ct,
    n = (function (e, i) {
      if (e && e.__esModule) return e;
      if (null === e || ("object" != t(e) && "function" != typeof e))
        return { default: e };
      var r = (function (t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          i = new WeakMap();
        return (function (t) {
          return t ? i : e;
        })(t);
      })(void 0);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set)
            ? Object.defineProperty(n, o, s)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    })(xt);
  function a(t, e) {
    return (a = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  function o(t) {
    for (var e = [], i = 0, r = t.length; i < r; i++) {
      var n = t[i];
      isNaN(n.x) || isNaN(n.y) || e.push(n);
    }
    return e;
  }
  var s = (function (t) {
    var e, i;
    function s() {
      return t.apply(this, arguments) || this;
    }
    (i = t),
      ((e = s).prototype = Object.create(i.prototype)),
      (e.prototype.constructor = e),
      a(e, i);
    var u = s.prototype;
    return (
      (u._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canFill = !0),
          (this._attrs.canStroke = !0),
          (this._attrs.type = "polyline");
      }),
      (u.getDefaultAttrs = function () {
        return { points: null, lineWidth: 1, smooth: !1 };
      }),
      (u.createPath = function (t) {
        var e = this.get("attrs"),
          i = e.points,
          r = e.smooth,
          a = o(i);
        if ((t.beginPath(), a.length))
          if ((t.moveTo(a[0].x, a[0].y), r))
            for (
              var s = n.smooth(a, !1, [
                  [0, 0],
                  [1, 1],
                ]),
                u = 0,
                l = s.length;
              u < l;
              u++
            ) {
              var c = s[u];
              t.bezierCurveTo(c[1], c[2], c[3], c[4], c[5], c[6]);
            }
          else {
            var h, f;
            for (h = 1, f = a.length - 1; h < f; h++) t.lineTo(a[h].x, a[h].y);
            t.lineTo(a[f].x, a[f].y);
          }
      }),
      (u.calculateBox = function () {
        var t = this.get("attrs"),
          e = t.points,
          i = t.smooth,
          a = t.lineWidth,
          s = o(e);
        if (s.length <= 1) return (0, r.getBBoxFromPoints)(s, a);
        if (i) {
          for (
            var u = [],
              l = n.smooth(s, !1, [
                [0, 0],
                [1, 1],
              ]),
              c = 0,
              h = l.length;
            c < h;
            c++
          ) {
            var f = l[c];
            if (0 === c)
              u.push([s[0].x, s[0].y, f[1], f[2], f[3], f[4], f[5], f[6]]);
            else {
              var d = l[c - 1];
              u.push([d[5], d[6], f[1], f[2], f[3], f[4], f[5], f[6]]);
            }
          }
          return (0, r.getBBoxFromBezierGroup)(u, a);
        }
        return (0, r.getBBoxFromPoints)(s, a);
      }),
      s
    );
  })(i.default);
  e.default = s;
})(yt);
var wt = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = ct;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var r = (function (t) {
    var r, n;
    function a() {
      return t.apply(this, arguments) || this;
    }
    (n = t),
      ((r = a).prototype = Object.create(n.prototype)),
      (r.prototype.constructor = r),
      i(r, n);
    var o = a.prototype;
    return (
      (o._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canStroke = !0),
          (this._attrs.canFill = !0),
          (this._attrs.type = "arc");
      }),
      (o.getDefaultAttrs = function () {
        return {
          x: 0,
          y: 0,
          r: 0,
          startAngle: 0,
          endAngle: 2 * Math.PI,
          anticlockwise: !1,
          lineWidth: 1,
        };
      }),
      (o.createPath = function (t) {
        var e = this.get("attrs"),
          i = e.x,
          r = e.y,
          n = e.r,
          a = e.startAngle,
          o = e.endAngle,
          s = e.anticlockwise;
        t.beginPath(), a !== o && t.arc(i, r, n, a, o, s);
      }),
      (o.calculateBox = function () {
        var t = this.get("attrs"),
          i = t.x,
          r = t.y,
          n = t.r,
          a = t.startAngle,
          o = t.endAngle,
          s = t.anticlockwise;
        return (0, e.getBBoxFromArc)(i, r, n, a, o, s);
      }),
      a
    );
  })((it && it.__esModule ? it : { default: it }).default);
  t.default = r;
})(wt);
var Pt = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = ct;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var r = (function (t) {
    var r, n;
    function a() {
      return t.apply(this, arguments) || this;
    }
    (n = t),
      ((r = a).prototype = Object.create(n.prototype)),
      (r.prototype.constructor = r),
      i(r, n);
    var o = a.prototype;
    return (
      (o._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canFill = !0),
          (this._attrs.canStroke = !0),
          (this._attrs.type = "sector");
      }),
      (o.getDefaultAttrs = function () {
        return {
          x: 0,
          y: 0,
          lineWidth: 0,
          r: 0,
          r0: 0,
          startAngle: 0,
          endAngle: 2 * Math.PI,
          anticlockwise: !1,
        };
      }),
      (o.createPath = function (t) {
        var e = this.get("attrs"),
          i = e.x,
          r = e.y,
          n = e.startAngle,
          a = e.endAngle,
          o = e.r,
          s = e.r0,
          u = e.anticlockwise;
        t.beginPath();
        var l = Math.cos(n),
          c = Math.sin(n);
        t.moveTo(l * s + i, c * s + r),
          t.lineTo(l * o + i, c * o + r),
          (Math.abs(a - n) > 1e-4 || (0 === n && a < 0)) &&
            (t.arc(i, r, o, n, a, u),
            t.lineTo(Math.cos(a) * s + i, Math.sin(a) * s + r),
            0 !== s && t.arc(i, r, s, a, n, !u)),
          t.closePath();
      }),
      (o.calculateBox = function () {
        var t = this.get("attrs"),
          i = t.x,
          r = t.y,
          n = t.r,
          a = t.r0,
          o = t.startAngle,
          s = t.endAngle,
          u = t.anticlockwise,
          l = (0, e.getBBoxFromArc)(i, r, n, o, s, u),
          c = (0, e.getBBoxFromArc)(i, r, a, o, s, u);
        return {
          minX: Math.min(l.minX, c.minX),
          minY: Math.min(l.minY, c.minY),
          maxX: Math.max(l.maxX, c.maxX),
          maxY: Math.max(l.maxY, c.maxY),
        };
      }),
      a
    );
  })((it && it.__esModule ? it : { default: it }).default);
  t.default = r;
})(Pt);
var Mt = {},
  St = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = {
    calcRotatedBox: function (t) {
      var e = t.width,
        i = t.height,
        r = t.rotate,
        n = Math.abs(r);
      return {
        width: Math.abs(e * Math.cos(n) + i * Math.sin(n)),
        height: Math.abs(i * Math.cos(n) + e * Math.sin(n)),
      };
    },
  };
  t.default = e;
})(St),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = n,
      i = a(it),
      r = a(St);
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      return (o = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    var s = 0,
      u = {},
      l = (function (t) {
        var i, n;
        function a() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((i = a).prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          o(i, n);
        var l = a.prototype;
        return (
          (l._initProperties = function () {
            t.prototype._initProperties.call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "text");
          }),
          (l.getDefaultAttrs = function () {
            return {
              lineWidth: 0,
              lineCount: 1,
              fontSize: 12,
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "normal",
              fontVariant: "normal",
              textAlign: "start",
              textBaseline: "bottom",
              lineHeight: null,
              textArr: null,
            };
          }),
          (l._getFontStyle = function () {
            var t = this._attrs.attrs,
              e = t.fontSize,
              i = t.fontFamily,
              r = t.fontWeight;
            return (
              t.fontStyle + " " + t.fontVariant + " " + r + " " + e + "px " + i
            );
          }),
          (l._afterAttrsSet = function () {
            var t = this._attrs.attrs;
            if (((t.font = this._getFontStyle()), t.text)) {
              var i = t.text,
                r = null,
                n = 1;
              (0, e.isString)(i) &&
                -1 !== i.indexOf("\n") &&
                (n = (r = i.split("\n")).length),
                (t.lineCount = n),
                (t.textArr = r);
            }
            this.set("attrs", t);
          }),
          (l._getTextHeight = function () {
            var t = this._attrs.attrs;
            if (t.height) return t.height;
            var e = t.lineCount,
              i = 1 * t.fontSize;
            return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i;
          }),
          (l._getSpaceingY = function () {
            var t = this._attrs.attrs,
              e = t.lineHeight,
              i = 1 * t.fontSize;
            return e ? e - i : 0.14 * i;
          }),
          (l.drawInner = function (t) {
            var i = this,
              r = i._attrs.attrs,
              n = r.text,
              a = r.x,
              o = r.y;
            if (!((0, e.isNil)(n) || isNaN(a) || isNaN(o))) {
              var s = r.textArr,
                u = 1 * r.fontSize,
                l = i._getSpaceingY();
              r.rotate &&
                (t.translate(a, o), t.rotate(r.rotate), (a = 0), (o = 0));
              var c,
                h,
                f = r.textBaseline;
              if ((s && (c = i._getTextHeight()), i.hasFill())) {
                var d = r.fillOpacity;
                if (((0, e.isNil)(d) || 1 === d || (t.globalAlpha = d), s))
                  for (var p = 0, v = s.length; p < v; p++) {
                    var g = s[p];
                    (h = o + p * (l + u) - c + u),
                      "middle" === f && (h += c - u - (c - u) / 2),
                      "top" === f && (h += c - u),
                      t.fillText(g, a, h);
                  }
                else t.fillText(n, a, o);
              }
              if (i.hasStroke())
                if (s)
                  for (var m = 0, y = s.length; m < y; m++) {
                    var x = s[m];
                    (h = o + m * (l + u) - c + u),
                      "middle" === f && (h += c - u - (c - u) / 2),
                      "top" === f && (h += c - u),
                      t.strokeText(x, a, h);
                  }
                else t.strokeText(n, a, o);
            }
          }),
          (l._getAriaLabel = function () {
            return this._attrs.attrs.text;
          }),
          (l.calculateBox = function () {
            var t = this,
              e = t._attrs.attrs,
              i = e.x,
              n = e.y,
              a = e.textAlign,
              o = e.textBaseline,
              s = t._getTextWidth();
            if (!s) return { minX: i, minY: n, maxX: i, maxY: n };
            var u = t._getTextHeight();
            if (e.rotate) {
              var l = r.default.calcRotatedBox({
                width: s,
                height: u,
                rotate: e.rotate,
              });
              (s = l.width), (u = l.height);
            }
            var c = { x: i, y: n - u };
            return (
              a &&
                ("end" === a || "right" === a
                  ? (c.x -= s)
                  : "center" === a && (c.x -= s / 2)),
              o &&
                ("top" === o ? (c.y += u) : "middle" === o && (c.y += u / 2)),
              { minX: c.x, minY: c.y, maxX: c.x + s, maxY: c.y + u }
            );
          }),
          (l._getTextWidth = function () {
            var t = this._attrs.attrs;
            if (t.width) return t.width;
            var i = t.text,
              r = this.get("context");
            if (!(0, e.isNil)(i)) {
              var n = t.font,
                a = t.textArr,
                o = i + "" + n;
              if (u[o]) return u[o];
              var l = 0;
              if (a)
                for (var c = 0, h = a.length; c < h; c++) {
                  var f = a[c];
                  l = Math.max(l, (0, e.measureText)(f, n, r).width);
                }
              else l = (0, e.measureText)(i, n, r).width;
              return s > 5e3 && ((s = 0), (u = {})), s++, (u[o] = l), l;
            }
          }),
          a
        );
      })(i.default);
    t.default = l;
  })(Mt);
var Tt = {};
!(function (t) {
  function e(t, i) {
    return (e = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, i);
  }
  (t.__esModule = !0), (t.default = void 0);
  var i = (function (t) {
    var i, r;
    function n() {
      return t.apply(this, arguments) || this;
    }
    (r = t),
      ((i = n).prototype = Object.create(r.prototype)),
      (i.prototype.constructor = i),
      e(i, r);
    var a = n.prototype;
    return (
      (a._initProperties = function () {
        t.prototype._initProperties.call(this),
          (this._attrs.canFill = !0),
          (this._attrs.canStroke = !0),
          (this._attrs.createPath = null),
          (this._attrs.type = "custom");
      }),
      (a.createPath = function (t) {
        var e = this.get("createPath");
        e && e.call(this, t);
      }),
      (a.calculateBox = function () {
        var t = this.get("calculateBox");
        return t && t.call(this);
      }),
      n
    );
  })((it && it.__esModule ? it : { default: it }).default);
  t.default = i;
})(Tt);
var Ot = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = n;
  function i(t, e) {
    return (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var r = {
      circle: function (t, e, i, r) {
        r.arc(t, e, i, 0, 2 * Math.PI, !1);
      },
      square: function (t, e, i, r) {
        r.moveTo(t - i, e - i),
          r.lineTo(t + i, e - i),
          r.lineTo(t + i, e + i),
          r.lineTo(t - i, e + i),
          r.closePath();
      },
    },
    a = (function (t) {
      var n, a;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (a = t),
        ((n = o).prototype = Object.create(a.prototype)),
        (n.prototype.constructor = n),
        i(n, a);
      var s = o.prototype;
      return (
        (s._initProperties = function () {
          t.prototype._initProperties.call(this),
            (this._attrs.canFill = !0),
            (this._attrs.canStroke = !0),
            (this._attrs.type = "marker");
        }),
        (s.getDefaultAttrs = function () {
          return { x: 0, y: 0, lineWidth: 0 };
        }),
        (s.createPath = function (t) {
          var i,
            n = this.get("attrs"),
            a = n.x,
            o = n.y,
            s = n.radius,
            u = n.symbol || "circle";
          (i = (0, e.isFunction)(u) ? u : r[u]),
            t.beginPath(),
            i(a, o, s, t, this);
        }),
        (s.calculateBox = function () {
          var t = this.get("attrs"),
            e = t.x,
            i = t.y,
            r = t.radius;
          return { minX: e - r, minY: i - r, maxX: e + r, maxY: i + r };
        }),
        o
      );
    })((it && it.__esModule ? it : { default: it }).default);
  t.default = a;
})(Ot),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = d(it),
      i = d(at),
      r = d(ot),
      n = d(st),
      a = d(lt),
      o = d(mt),
      s = d(yt),
      u = d(wt),
      l = d(Pt),
      c = d(Mt),
      h = d(Tt),
      f = d(Ot);
    function d(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.default.Rect = i.default),
      (e.default.Image = r.default),
      (e.default.Circle = n.default),
      (e.default.Line = a.default),
      (e.default.Polygon = o.default),
      (e.default.Polyline = s.default),
      (e.default.Arc = u.default),
      (e.default.Sector = l.default),
      (e.default.Text = c.default),
      (e.default.Custom = h.default),
      (e.default.Marker = f.default);
    var p = e.default;
    t.default = p;
  })(et),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = n,
      i = et && et.__esModule ? et : { default: et },
      r = {},
      a = "_INDEX",
      o = {
        getGroupClass: function () {},
        getChildren: function () {
          return this.get("children");
        },
        addShape: function (t, n) {
          void 0 === n && (n = {});
          var a = r[t];
          a || ((a = (0, e.upperFirst)(t)), (r[t] = a));
          var o = new i.default[a](n);
          return this.add(o), o;
        },
        addGroup: function (t) {
          var e = new (this.getGroupClass())(t);
          return this.add(e), e;
        },
        contain: function (t) {
          return this.get("children").indexOf(t) > -1;
        },
        sort: function () {
          for (var t, e = this.get("children"), i = 0, r = e.length; i < r; i++)
            e[i][a] = i;
          return (
            e.sort(
              ((t = function (t, e) {
                return t.get("zIndex") - e.get("zIndex");
              }),
              function (e, i) {
                var r = t(e, i);
                return 0 === r ? e[a] - i[a] : r;
              })
            ),
            this
          );
        },
        drawChildren: function (t) {
          for (var e = this.get("children"), i = 0, r = e.length; i < r; i++)
            e[i].draw(t);
          return this;
        },
        clear: function () {
          for (var t = this.get("children"); 0 !== t.length; )
            t[t.length - 1].remove(!0);
          return this;
        },
        add: function (t) {
          var i = this,
            r = i.get("children");
          (0, e.isArray)(t) || (t = [t]);
          for (var n = 0, a = t.length; n < a; n++) {
            var o = t[n],
              s = o.get("parent");
            if (s) {
              var u = s.get("children");
              e.Array.remove(u, o);
            }
            i._setEvn(o), r.push(o);
          }
          return i;
        },
        _setEvn: function (t) {
          var e = this,
            i = e._attrs,
            r = i.context,
            n = i.canvas,
            a = i.aria,
            o = t._attrs,
            s = o.isGroup,
            u = o.type;
          (t._attrs.parent = e),
            (t._attrs.context = r),
            (t._attrs.canvas = n),
            a && !1 !== t._attrs.aria && (t._attrs.aria = a),
            "text" === u &&
              n &&
              n.get("fontFamily") &&
              (t._attrs.attrs.fontFamily =
                t._attrs.attrs.fontFamily || n.get("fontFamily"));
          var l = t._attrs.attrs.clip;
          if (
            (l &&
              ((l._attrs.parent = e),
              (l._attrs.context = r),
              (l._attrs.canvas = n)),
            s)
          )
            for (var c = t._attrs.children, h = 0, f = c.length; h < f; h++)
              t._setEvn(c[h]);
        },
        _getAriaLabel: function () {
          var t = this._attrs,
            e = t.aria,
            i = t.ariaLabel,
            r = t.children;
          if (e) {
            var n = [];
            if (r && r.length)
              for (var a = 0, o = r.length; a < o; a++) {
                var s = r[a].getAriaLabel();
                s && n.push(s);
              }
            var u = n.join(" ");
            return i && u ? i + " " + u + " " : i || u;
          }
        },
      };
    t.default = o;
  })(tt);
var At = {};
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = n,
    i = o(at),
    r = o(tt),
    a = o(J);
  function o(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function s(t, e) {
    return (s = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
  }
  var u = (function (t) {
    var e, i;
    function r() {
      return t.apply(this, arguments) || this;
    }
    (i = t),
      ((e = r).prototype = Object.create(i.prototype)),
      (e.prototype.constructor = e),
      s(e, i);
    var n = r.prototype;
    return (
      (n._initProperties = function () {
        this._attrs = {
          type: "group",
          zIndex: 0,
          visible: !0,
          destroyed: !1,
          isGroup: !0,
          canFill: !0,
          canStroke: !0,
          attrs: {},
          children: [],
        };
      }),
      (n.getBBox = function () {
        for (
          var t = 1 / 0,
            e = -1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            n = this.get("children"),
            o = 0,
            s = n.length;
          o < s;
          o++
        ) {
          var u = n[o];
          if (u.get("visible")) {
            var l = u.getBBox();
            if (!l) continue;
            var c = [l.minX, l.minY],
              h = [l.minX, l.maxY],
              f = [l.maxX, l.minY],
              d = [l.maxX, l.maxY],
              p = u.attr("matrix");
            a.default.transformMat2d(c, c, p),
              a.default.transformMat2d(h, h, p),
              a.default.transformMat2d(f, f, p),
              a.default.transformMat2d(d, d, p),
              (t = Math.min(c[0], h[0], f[0], d[0], t)),
              (e = Math.max(c[0], h[0], f[0], d[0], e)),
              (i = Math.min(c[1], h[1], f[1], d[1], i)),
              (r = Math.max(c[1], h[1], f[1], d[1], r));
          }
        }
        return {
          minX: t,
          minY: i,
          maxX: e,
          maxY: r,
          x: t,
          y: i,
          width: e - t,
          height: r - i,
        };
      }),
      (n.createPath = function (e) {
        var i = this.get("attrs");
        (i.fillStyle || i.strokeStyle) && t.prototype.createPath.call(this, e);
      }),
      (n.drawInner = function (e) {
        t.prototype.drawInner.call(this, e), this.drawChildren(e);
      }),
      (n.destroy = function () {
        this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this));
      }),
      r
    );
  })(i.default);
  (0, e.mix)(u.prototype, r.default, {
    getGroupClass: function () {
      return u;
    },
  });
  var l = u;
  t.default = l;
})(At);
var Bt = { __esModule: !0, requestAnimationFrame: void 0 },
  Ct =
    "object" == ("undefined" == typeof window ? "undefined" : t(window)) &&
    window.requestAnimationFrame
      ? window.requestAnimationFrame
      : function (t) {
          return setTimeout(t, 16);
        };
(Bt.requestAnimationFrame = Ct),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = c($),
      i = c(Q),
      r = c(Z),
      a = n,
      o = c(tt),
      s = c(At),
      u = Bt,
      l = L;
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function h(t, e) {
      return (h = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    var f = (function (t) {
      var e, n;
      (n = t),
        ((e = s).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        h(e, n);
      var o = s.prototype;
      function s(e) {
        var i;
        i = t.call(this) || this;
        var r = e.title,
          n = r
            ? (0, a.substitute)(l.lang.general.withTitle, { title: r })
            : l.lang.general.title;
        return (
          (i._attrs = (0, a.mix)(
            { type: "canvas", children: [], ariaLabel: n },
            e
          )),
          i._initPixelRatio(),
          i._initCanvas(),
          i
        );
      }
      return (
        (o.get = function (t) {
          return this._attrs[t];
        }),
        (o.set = function (t, e) {
          this._attrs[t] = e;
        }),
        (o._initPixelRatio = function () {
          this.get("pixelRatio") ||
            this.set("pixelRatio", (0, a.getPixelRatio)());
        }),
        (o.beforeDraw = function () {
          var t = this._attrs.context,
            e = this._attrs.el;
          t && t.clearRect && t.clearRect(0, 0, e.width, e.height);
        }),
        (o._initCanvas = function () {
          var t,
            e = this,
            n = e.get("el"),
            o = e.get("context");
          if (!n && !o)
            throw new Error(
              "Please specify the id, el or context of the chart!"
            );
          (t = n
            ? (0, a.isString)(n)
              ? (0, a.getDomById)(n)
              : n
            : r.default.create(o)),
            o &&
              t &&
              !t.getContext &&
              (t.getContext = function () {
                return o;
              });
          var s = e.get("width");
          s || (s = (0, a.getWidth)(t));
          var u = e.get("height");
          u || (u = (0, a.getHeight)(t)),
            e.set("canvas", this),
            e.set("el", t),
            e.set("context", o || t.getContext("2d")),
            e.changeSize(s, u);
          var l = new i.default({ canvas: this, el: t });
          e.set("eventController", l);
        }),
        (o.changeSize = function (t, e) {
          var i = this.get("pixelRatio"),
            r = this.get("el");
          r.style && ((r.style.width = t + "px"), (r.style.height = e + "px")),
            (0, a.isCanvasElement)(r) &&
              ((r.width = t * i),
              (r.height = e * i),
              1 !== i && this.get("context").scale(i, i)),
            this.set("width", t),
            this.set("height", e);
        }),
        (o.getWidth = function () {
          var t = this.get("pixelRatio");
          return this.get("width") * t;
        }),
        (o.getHeight = function () {
          var t = this.get("pixelRatio");
          return this.get("height") * t;
        }),
        (o.getPointByClient = function (t, e) {
          var i = this.get("el"),
            r = i.getBoundingClientRect(),
            n = r.right - r.left,
            a = r.bottom - r.top;
          return {
            x: (t - r.left) * (i.width / n),
            y: (e - r.top) * (i.height / a),
          };
        }),
        (o._beginDraw = function () {
          this._attrs.toDraw = !0;
        }),
        (o._endDraw = function () {
          this._attrs.toDraw = !1;
        }),
        (o.draw = function () {
          var t = this;
          t.get("destroyed") ||
            (t.get("animateHandler")
              ? this._beginDraw()
              : (function e() {
                  t.set(
                    "animateHandler",
                    (0, u.requestAnimationFrame)(function () {
                      t.set("animateHandler", void 0), t.get("toDraw") && e();
                    })
                  ),
                    t.beforeDraw();
                  try {
                    var i = t._attrs.context;
                    t.drawChildren(i), i.draw && i.draw(), t.setAriaLabel();
                  } catch (e) {
                    t._endDraw();
                  }
                  t._endDraw();
                })());
        }),
        (o.setAriaLabel = function () {
          var t = this._attrs.el,
            e = this._getAriaLabel();
          e && t.setAttribute && t.setAttribute("aria-label", e);
        }),
        (o.destroy = function () {
          if (!this.get("destroyed")) {
            var t = this.get("el");
            (t.width = 0),
              (t.height = 0),
              this.clear(),
              (this._attrs = {}),
              this.set("destroyed", !0);
          }
        }),
        (o.isDestroyed = function () {
          return this.get("destroyed");
        }),
        s
      );
    })(e.default);
    (0, a.mix)(f.prototype, o.default, {
      getGroupClass: function () {
        return s.default;
      },
    });
    var d = f;
    t.default = d;
  })(U),
  (K.__esModule = !0),
  (K.Shape = K.Group = K.Canvas = void 0);
var kt = Ft(U);
K.Canvas = kt.default;
var jt = Ft(At);
K.Group = jt.default;
var Et = Ft(et);
function Ft(t) {
  return t && t.__esModule ? t : { default: t };
}
(K.Shape = Et.default),
  (q.__esModule = !0),
  (q.createCanvas = function (t) {
    return new (Lt(t.renderer).Canvas)(t);
  }),
  (q.getEngine = Lt),
  (q.registerEngine = function (t, e) {
    Dt[t] = e;
  });
var It = Xt(V);
q.Matrix = It.default;
var Nt = Xt(J);
q.Vector2 = Nt.default;
var Yt = K;
function Xt(t) {
  return t && t.__esModule ? t : { default: t };
}
(q.Canvas = Yt.Canvas), (q.Group = Yt.Group), (q.Shape = Yt.Shape);
var Dt = {};
function Lt(t) {
  return Dt[t] || { Canvas: Yt.Canvas, Group: Yt.Group, Shape: Yt.Shape };
}
!(function (t) {
  (t.__esModule = !0), (t.default = void 0);
  var e = n,
    i = q,
    r = (function () {
      var t = r.prototype;
      function r(t) {
        (0, e.deepMix)(this, this.getDefaultCfg(), t), this._init();
        var i = this.content,
          r = this.x,
          n = this.y;
        (0, e.isNil)(i) || this.updateContent(i), this.updatePosition(r, n);
      }
      return (
        (t.getDefaultCfg = function () {
          return {
            x: 0,
            y: 0,
            content: "",
            textStyle: {
              fontSize: 12,
              fill: "#fff",
              textAlign: "center",
              textBaseline: "middle",
              fontFamily: "Arial",
            },
            background: {
              radius: 1,
              fill: "rgba(0, 0, 0, 0.65)",
              padding: [3, 5],
            },
            width: 0,
            height: 0,
            className: "",
          };
        }),
        (t._init = function () {
          var t = this.content,
            r = this.textStyle,
            n = this.background,
            a = this.className,
            o = this.visible,
            s = this.context,
            u = new i.Group({
              context: s,
              className: a,
              zIndex: 0,
              visible: o,
            }),
            l = u.addShape("Text", {
              className: a + "-text",
              zIndex: 1,
              attrs: (0, e.mix)({ text: t, x: 0, y: 0 }, r),
            }),
            c = u.addShape("Rect", {
              className: a + "-bg",
              zIndex: -1,
              attrs: (0, e.mix)({ x: 0, y: 0, width: 0, height: 0 }, n),
            });
          u.sort(),
            (this.container = u),
            (this.textShape = l),
            (this.backgroundShape = c);
        }),
        (t._getBBox = function () {
          var t = this.textShape,
            i = this.background,
            r = t.getBBox(),
            n = (0, e.parsePadding)(i.padding),
            a = r.width + n[1] + n[3],
            o = r.height + n[0] + n[2];
          return { x: r.minX - n[3], y: r.minY - n[0], width: a, height: o };
        }),
        (t.updateContent = function (t) {
          var i = this.textShape,
            r = this.backgroundShape;
          if (!(0, e.isNil)(t)) {
            (0, e.isObject)(t) || (t = { text: t }), i.attr(t);
            var n = this._getBBox(),
              a = n.x,
              o = n.y,
              s = n.width,
              u = n.height,
              l = this.width || s,
              c = this.height || u;
            r.attr({ x: a, y: o, width: l, height: c }),
              (this._width = l),
              (this._height = c),
              (this.content = t.text);
          }
        }),
        (t.updatePosition = function (t, e) {
          var i = this.container,
            r = this._getBBox(),
            n = r.x,
            a = r.y;
          i.moveTo(t - n, e - a), (this.x = t - n), (this.y = e - a);
        }),
        (t.getWidth = function () {
          return this._width;
        }),
        (t.getHeight = function () {
          return this._height;
        }),
        (t.show = function () {
          this.container.show();
        }),
        (t.hide = function () {
          this.container.hide();
        }),
        (t.clear = function () {
          var t = this.container;
          t.clear(),
            t.remove(!0),
            (this.container = null),
            (this.textShape = null),
            (this.backgroundShape = null);
        }),
        r
      );
    })();
  t.default = r;
})(H),
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = n,
      i = a(R),
      r = a(H);
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var o = (function () {
      var t = n.prototype;
      function n(t) {
        (0, e.deepMix)(this, this.getDefaultCfg(), t);
        var n = this.frontPlot;
        if (!this.custom) {
          var a = new i.default((0, e.mix)({ parent: n, zIndex: 3 }, t));
          this.container = a;
          var o = this.fixed,
            s = this.background;
          o ||
            (this.tooltipArrow = n.addShape("Polygon", {
              className: "tooltip-arrow",
              visible: !1,
              zIndex: 2,
              attrs: (0, e.mix)({ points: [] }, s),
            }));
        }
        if (this.showXTip) {
          var u = this.xTipBackground,
            l = this.xTipTextStyle,
            c = new r.default({
              context: n.get("context"),
              className: "xTip",
              background: u,
              textStyle: l,
              visible: !1,
            });
          n.add(c.container), (this.xTipBox = c);
        }
        if (this.showYTip) {
          var h = this.yTipBackground,
            f = this.yTipTextStyle,
            d = new r.default({
              context: n.get("context"),
              className: "yTip",
              background: h,
              textStyle: f,
              visible: !1,
            });
          n.add(d.container), (this.yTipBox = d);
        }
        this.showCrosshairs && this._renderCrosshairs(), n.sort();
      }
      return (
        (t.getDefaultCfg = function () {
          return {
            showCrosshairs: !1,
            crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 },
            crosshairsType: "y",
            showXTip: !1,
            showYTip: !1,
            xTip: null,
            xTipBackground: {
              radius: 1,
              fill: "rgba(0, 0, 0, 0.65)",
              padding: [3, 5],
            },
            xTipTextStyle: {
              fontSize: 12,
              fill: "#fff",
              textAlign: "center",
              textBaseline: "middle",
            },
            yTip: null,
            yTipBackground: {
              radius: 1,
              fill: "rgba(0, 0, 0, 0.65)",
              padding: [3, 5],
            },
            yTipTextStyle: {
              fontSize: 12,
              fill: "#fff",
              textAlign: "center",
              textBaseline: "middle",
            },
            background: null,
            layout: "horizontal",
            offsetX: 0,
            offsetY: 0,
          };
        }),
        (t.setContent = function (t, e) {
          if (((this.title = t), (this.items = e), !this.custom)) {
            var i = this.container;
            i.setTitle(t), i.setItems(e);
          }
        }),
        (t.setYTipContent = function (t) {
          var i = this.yTip;
          (t = (0, e.isFunction)(i) ? i(t) : (0, e.mix)({ text: t }, i)),
            this.yTipBox && this.yTipBox.updateContent(t);
        }),
        (t.setYTipPosition = function (t) {
          var e = this.plotRange,
            i = this.crosshairsShapeX;
          if (this.showYTip) {
            var r = this.yTipBox,
              n = r.getHeight(),
              a = r.getWidth(),
              o = e.tl.x - a,
              s = t - n / 2;
            s <= e.tl.y && (s = e.tl.y),
              s + n >= e.br.y && (s = e.br.y - n),
              o < 0 && ((o = e.tl.x), i && i.attr("x1", e.tl.x + a)),
              r.updatePosition(o, s);
          }
        }),
        (t.setXTipContent = function (t) {
          var i = this.xTip;
          (t = (0, e.isFunction)(i) ? i(t) : (0, e.mix)({ text: t }, i)),
            this.xTipBox && this.xTipBox.updateContent(t);
        }),
        (t.setXTipPosition = function (t) {
          var e = this.showXTip,
            i = this.canvas,
            r = this.plotRange,
            n = this.xTipBox,
            a = this.crosshairsShapeY;
          if (e) {
            var o = i.get("height"),
              s = n.getWidth(),
              u = n.getHeight(),
              l = t - s / 2,
              c = r.br.y;
            l <= r.tl.x && (l = r.tl.x),
              l + s >= r.tr.x && (l = r.tr.x - s),
              o - c < u && (c -= u),
              n.updatePosition(l, c),
              a && a.attr("y1", c);
          }
        }),
        (t.setXCrosshairPosition = function (t) {
          this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);
        }),
        (t.setYCrosshairPosition = function (t) {
          this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);
        }),
        (t.setPosition = function (t) {
          var i = this.container,
            r = this.plotRange,
            n = this.offsetX,
            a = this.offsetY,
            o = this.fixed,
            s = this.tooltipArrow;
          if (i) {
            var u,
              l = i.container.getBBox(),
              c = l.minX,
              h = l.minY,
              f = l.width,
              d = l.height,
              p = r.tl,
              v = r.tr,
              g = 0,
              m = p.y - d - 4 + a;
            if ((m < 0 && (m = 0), o)) g = (p.x + v.x) / 2 - f / 2 + n;
            else if (
              ((g =
                (u = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x) -
                f / 2 +
                n) < p.x && (g = p.x),
              g + f > v.x && (g = v.x - f),
              s)
            ) {
              var y = m + d;
              s.attr("points", [
                { x: u - 3, y: y },
                { x: u + 3, y: y },
                { x: u, y: y + 4 },
              ]);
              var x = i.backShape,
                _ = (0, e.parsePadding)(x.attr("radius"));
              u === p.x
                ? ((_[3] = 0),
                  s.attr("points", [
                    { x: p.x, y: y },
                    { x: p.x + 4, y: y },
                    { x: p.x, y: y + 4 },
                  ]))
                : u === v.x &&
                  ((_[2] = 0),
                  s.attr("points", [
                    { x: v.x - 4, y: y },
                    { x: v.x, y: y },
                    { x: v.x, y: y + 4 },
                  ])),
                x.attr("radius", _);
            }
            i.moveTo(g - c, m - h);
          }
        }),
        (t.setMarkers = function (t) {
          void 0 === t && (t = {});
          var i = t,
            r = i.items,
            n = i.style,
            a = i.type,
            o = this._getMarkerGroup(a);
          if ("circle" === a)
            for (var s = 0, u = r.length; s < u; s++) {
              var l = r[s];
              o.addShape("marker", {
                className: "tooltip-circle-marker",
                attrs: (0, e.mix)({ x: l.x, y: l.y, stroke: l.color }, n),
              });
            }
          else
            o.addShape("rect", { className: "tooltip-rect-marker", attrs: n });
        }),
        (t.clearMarkers = function () {
          var t = this.markerGroup;
          t && t.clear();
        }),
        (t.show = function () {
          var t = this.crosshairsShapeX,
            e = this.crosshairsShapeY,
            i = this.markerGroup,
            r = this.container,
            n = this.tooltipArrow,
            a = this.xTipBox,
            o = this.yTipBox,
            s = this.canvas;
          t && t.show(),
            e && e.show(),
            i && i.show(),
            r && r.show(),
            n && n.show(),
            a && a.show(),
            o && o.show(),
            s.draw();
        }),
        (t.hide = function () {
          var t = this.crosshairsShapeX,
            e = this.crosshairsShapeY,
            i = this.markerGroup,
            r = this.container,
            n = this.tooltipArrow,
            a = this.xTipBox,
            o = this.yTipBox;
          t && t.hide(),
            e && e.hide(),
            i && i.hide(),
            r && r.hide(),
            n && n.hide(),
            a && a.hide(),
            o && o.hide();
        }),
        (t.destroy = function () {
          var t = this.crosshairsShapeX,
            e = this.crosshairsShapeY,
            i = this.markerGroup,
            r = this.container,
            n = this.tooltipArrow,
            a = this.xTipBox,
            o = this.yTipBox;
          t && t.remove(!0),
            e && e.remove(!0),
            i && i.remove(!0),
            n && n.remove(!0),
            r && r.clear(),
            a && a.clear(),
            o && o.clear(),
            (this.destroyed = !0);
        }),
        (t._getMarkerGroup = function (t) {
          var e = this.markerGroup;
          return (
            e
              ? e.clear()
              : ("circle" === t
                  ? ((e = this.frontPlot.addGroup({ zIndex: 1 })),
                    this.frontPlot.sort())
                  : (e = this.backPlot.addGroup()),
                (this.markerGroup = e)),
            e
          );
        }),
        (t._renderCrosshairs = function () {
          var t = this.crosshairsType,
            i = this.crosshairsStyle,
            r = this.frontPlot,
            n = this.plotRange,
            a = n.tl,
            o = n.br;
          (0, e.directionEnabled)(t, "x") &&
            (this.crosshairsShapeX = r.addShape("Line", {
              className: "tooltip-crosshairs-x",
              zIndex: 0,
              visible: !1,
              attrs: (0, e.mix)({ x1: a.x, y1: 0, x2: o.x, y2: 0 }, i),
            })),
            (0, e.directionEnabled)(t, "y") &&
              (this.crosshairsShapeY = r.addShape("Line", {
                className: "tooltip-crosshairs-y",
                zIndex: 0,
                visible: !1,
                attrs: (0, e.mix)({ x1: 0, y1: o.y, x2: 0, y2: a.y }, i),
              }));
        }),
        n
      );
    })();
    t.default = o;
  })(G);
var Wt = e.getDefaultExportFromCjs(G),
  zt = {
    __esModule: !0,
    getClip: function (t) {
      var e,
        i = t.start,
        r = t.end,
        n = r.x - i.x,
        a = Math.abs(r.y - i.y);
      if (t.isPolar) {
        var o = t.circleRadius,
          s = t.center,
          u = t.startAngle,
          l = t.endAngle;
        e = new Gt.Shape.Sector({
          attrs: { x: s.x, y: s.y, r: o, r0: 0, startAngle: u, endAngle: l },
        });
      } else
        e = new Gt.Shape.Rect({
          attrs: { x: i.x, y: r.y - 10, width: n, height: a + 20 },
        });
      return (e.isClip = !0), e;
    },
    isPointInPlot: function (t, e) {
      var i = t.x,
        r = t.y,
        n = e.tl,
        a = e.tr,
        o = e.br;
      return i >= n.x && i <= a.x && r >= n.y && r <= o.y;
    },
  },
  Gt = q;
!(function (e) {
  (e.__esModule = !0),
    (e.afterGeomDraw = v),
    (e.clearInner = g),
    (e.default = void 0),
    (e.init = p);
  var i = n,
    r = s(L),
    a = s(G),
    o = zt;
  function s(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function u(e, i, r) {
    return (
      (i = (function (e) {
        var i = (function (e, i) {
          if ("object" != t(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, i);
            if ("object" != t(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" == t(i) ? i : String(i);
      })(i)) in e
        ? Object.defineProperty(e, i, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[i] = r),
      e
    );
  }
  function l(t) {
    var e = t.getAttr("color");
    if (e) {
      var i = e.getScale(e.type);
      if (i.isLinear) return i;
    }
    var r = t.getXScale();
    return t.getYScale() || r;
  }
  function c(t, e) {
    var r,
      n,
      a = t._getGroupScales();
    if (
      (a.length &&
        (0, i.each)(a, function (t) {
          return (n = t), !1;
        }),
      n)
    ) {
      var o = n.field;
      r = n.getText(e[o]);
    } else {
      var s = l(t);
      r = s.alias || s.field;
    }
    return r;
  }
  function h(t, e) {
    var i = l(t);
    return i.getText(e[i.field]);
  }
  function f(t, e) {
    var i = t.getAttr("position").getFields()[0],
      r = t.get("scales")[i];
    return r.getText(e[r.field]);
  }
  r.default.tooltip = (0, i.deepMix)(
    {
      triggerOn: "press",
      triggerOff: "pressend",
      alwaysShow: !1,
      showTitle: !1,
      showCrosshairs: !1,
      crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 },
      showTooltipMarker: !0,
      background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] },
      titleStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "start",
        textBaseline: "top",
      },
      nameStyle: {
        fontSize: 12,
        fill: "rgba(255, 255, 255, 0.65)",
        textAlign: "start",
        textBaseline: "middle",
      },
      valueStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "start",
        textBaseline: "middle",
      },
      showItemMarker: !0,
      itemMarkerStyle: {
        radius: 3,
        symbol: "circle",
        lineWidth: 1,
        stroke: "#fff",
      },
      layout: "horizontal",
      snap: !1,
    },
    r.default.tooltip || {}
  );
  var d = (function () {
    function t(t) {
      var e = this;
      u(this, "handleShowEvent", function (t) {
        var r = e.chart;
        if (e.enable) {
          var n = r.get("plotRange"),
            a = (0, i.createEvent)(t, r);
          if ((0, o.isPointInPlot)(a, n) || e._tooltipCfg.alwaysShow) {
            var s = e.timeStamp,
              u = +new Date();
            u - s > 16 && (e.showTooltip(a), (e.timeStamp = u));
          } else e.hideTooltip();
        }
      }),
        u(this, "handleHideEvent", function () {
          e.enable && e.hideTooltip();
        }),
        (this.enable = !0),
        (this.cfg = {}),
        (this.tooltip = null),
        (this.chart = null),
        (this.timeStamp = 0),
        (0, i.mix)(this, t);
      var r = this.chart.get("canvas");
      (this.canvas = r), (this.canvasDom = r.get("el"));
    }
    var e = t.prototype;
    return (
      (e._setCrosshairsCfg = function () {
        var t = this.chart,
          e = (0, i.mix)({}, r.default.tooltip),
          n = t.get("geoms"),
          a = [];
        (0, i.each)(n, function (t) {
          var e = t.get("type");
          -1 === a.indexOf(e) && a.push(e);
        });
        var o = t.get("coord").type;
        return (
          !n.length ||
            ("cartesian" !== o && "rect" !== o) ||
            (1 === a.length &&
              -1 !== ["line", "area", "path", "point"].indexOf(a[0]) &&
              (0, i.mix)(e, { showCrosshairs: !0 })),
          e
        );
      }),
      (e._getMaxLength = function (t) {
        void 0 === t && (t = {});
        var e = t,
          i = e.layout,
          r = e.plotRange;
        return "horizontal" === i ? r.br.x - r.bl.x : r.bl.y - r.tr.y;
      }),
      (e.render = function () {
        var t = this;
        if (!t.tooltip) {
          var e = t.chart,
            r = e.get("canvas"),
            n = e
              .get("frontPlot")
              .addGroup({ className: "tooltipContainer", zIndex: 10 }),
            o = e.get("backPlot").addGroup({ className: "tooltipContainer" }),
            s = e.get("plotRange"),
            u = e.get("coord"),
            l = t._setCrosshairsCfg(),
            c = t.cfg,
            h = (0, i.deepMix)(
              {
                plotRange: s,
                frontPlot: n,
                backPlot: o,
                canvas: r,
                fixed: u.transposed || u.isPolar,
              },
              l,
              c
            );
          (h.maxLength = t._getMaxLength(h)), (this._tooltipCfg = h);
          var f = new a.default(h);
          (t.tooltip = f),
            h.alwaysShow && t.prePoint && this.showTooltip(t.prePoint),
            t.bindEvents();
        }
      }),
      (e.clear = function () {
        var t = this.tooltip;
        t && (t.destroy(), this.unBindEvents()),
          (this.tooltip = null),
          (this._lastActive = null);
      }),
      (e._getTooltipMarkerStyle = function (t) {
        void 0 === t && (t = {});
        var e = t,
          r = e.type,
          n = e.items,
          a = this._tooltipCfg;
        if ("rect" === r) {
          var o,
            s,
            u,
            l,
            c = this.chart,
            h = c.get("plotRange"),
            f = h.tl,
            d = h.br,
            p = c.get("coord"),
            v = n[0],
            g = n[n.length - 1],
            m = v.width;
          p.transposed
            ? ((o = f.x),
              (s = g.y - 0.75 * m),
              (u = d.x - f.x),
              (l = v.y - g.y + 1.5 * m))
            : ((o = v.x - 0.75 * m),
              (s = f.y),
              (u = g.x - v.x + 1.5 * m),
              (l = d.y - f.y)),
            (t.style = (0, i.mix)(
              {
                x: o,
                y: s,
                width: u,
                height: l,
                fill: "#CCD6EC",
                opacity: 0.3,
              },
              a.tooltipMarkerStyle
            ));
        } else
          t.style = (0, i.mix)(
            { radius: 4, fill: "#fff", lineWidth: 2 },
            a.tooltipMarkerStyle
          );
        return t;
      }),
      (e._setTooltip = function (t, e, r) {
        void 0 === r && (r = {}), (this.prePoint = t);
        var n = this._lastActive,
          a = this.tooltip,
          s = this._tooltipCfg;
        e = (function (t) {
          var e = [];
          return (
            (0, i.each)(t, function (t) {
              var r = (function (t, e) {
                var r = -1;
                return (
                  (0, i.each)(t, function (t, i) {
                    if (
                      t.title === e.title &&
                      t.name === e.name &&
                      t.value === e.value &&
                      t.color === e.color
                    )
                      return (r = i), !1;
                  }),
                  r
                );
              })(e, t);
              -1 === r ? e.push(t) : (e[r] = t);
            }),
            e
          );
        })(e);
        var u = this.chart,
          l = u.get("coord"),
          c = u.getYScales()[0],
          h = s.snap;
        if (!1 === h && c.isLinear) {
          var f,
            d,
            p = l.invertPoint(t),
            v = u.get("plotRange");
          (0, o.isPointInPlot)(t, v) &&
            (l.transposed
              ? ((f = c.invert(p.x)),
                (d = t.x),
                a.setXTipContent(f),
                a.setXTipPosition(d),
                a.setYCrosshairPosition(d))
              : ((f = c.invert(p.y)),
                (d = t.y),
                a.setYTipContent(f),
                a.setYTipPosition(d),
                a.setXCrosshairPosition(d)));
        }
        if (
          (s.onShow &&
            s.onShow({
              x: t.x,
              y: t.y,
              tooltip: a,
              items: e,
              tooltipMarkerCfg: r,
            }),
          (g = n),
          (m = e),
          JSON.stringify(g) !== JSON.stringify(m))
        ) {
          var g, m;
          this._lastActive = e;
          var y = s.onChange;
          y && y({ x: t.x, y: t.y, tooltip: a, items: e, tooltipMarkerCfg: r });
          var x = e[0],
            _ = x.title || x.name,
            b = x.x;
          if (
            (e.length > 1 && (b = (e[0].x + e[e.length - 1].x) / 2),
            a.setContent(_, e, l.transposed),
            a.setPosition(e, t),
            l.transposed)
          ) {
            var w = x.y;
            e.length > 1 && (w = (e[0].y + e[e.length - 1].y) / 2),
              a.setYTipContent(_),
              a.setYTipPosition(w),
              a.setXCrosshairPosition(w),
              h &&
                (a.setXTipContent(x.value),
                a.setXTipPosition(b),
                a.setYCrosshairPosition(b));
          } else
            a.setXTipContent(_),
              a.setXTipPosition(b),
              a.setYCrosshairPosition(b),
              h &&
                (a.setYTipContent(x.value),
                a.setYTipPosition(x.y),
                a.setXCrosshairPosition(x.y));
          var P = r.items;
          s.showTooltipMarker && P.length
            ? ((r = this._getTooltipMarkerStyle(r)), a.setMarkers(r))
            : a.clearMarkers(),
            a.show();
        } else
          !1 === h &&
            ((0, i.directionEnabled)(s.crosshairsType, "y") || s.showYTip) &&
            this.chart.get("canvas").draw();
      }),
      (e.showTooltip = function (t) {
        var e,
          n,
          a = this,
          o = a.chart,
          s = [],
          u = [],
          l = a._tooltipCfg,
          d = l.showItemMarker,
          p = l.itemMarkerStyle,
          v = l.alwaysShow;
        d && (n = p);
        var g = o.get("geoms"),
          m = o.get("coord");
        if (
          ((0, i.each)(g, function (a) {
            if (a.get("visible")) {
              var o = a.get("type"),
                l = a.getSnapRecords(t),
                d = a.get("adjust");
              if ("interval" === o && d && "symmetric" === d.type) return;
              (0, i.each)(l, function (t) {
                var l = t.x,
                  d = t.y,
                  p = t._origin,
                  v = t.color;
                if ((l || !isNaN(l)) && (d || !isNaN(d))) {
                  var g = {
                    x: l,
                    y: (0, i.isArray)(d) ? d[1] : d,
                    color: v || r.default.defaultColor,
                    origin: p,
                    name: c(a, p),
                    value: h(a, p),
                    title: f(a, p),
                  };
                  n &&
                    (g.marker = (0, i.mix)(
                      { fill: v || r.default.defaultColor },
                      n
                    )),
                    u.push(g),
                    -1 !== ["line", "area", "path"].indexOf(o)
                      ? ((e = "circle"), s.push(g))
                      : "interval" !== o ||
                        ("cartesian" !== m.type && "rect" !== m.type) ||
                        ((e = "rect"),
                        (g.width = a.getSize(t._origin)),
                        s.push(g));
                }
              });
            }
          }),
          u.length)
        ) {
          var y = { items: s, type: e };
          a._setTooltip(t, u, y);
        } else v || a.hideTooltip();
      }),
      (e.hideTooltip = function () {
        var t = this._tooltipCfg;
        this._lastActive = null;
        var e = this.tooltip;
        e &&
          (e.hide(),
          t.onHide && t.onHide({ tooltip: e }),
          this.chart.get("canvas").draw());
      }),
      (e._handleEvent = function (t, e, r) {
        var n = this.canvas;
        (0, i.each)([].concat(t), function (t) {
          "bind" === r ? n.on(t, e) : n.off(t, e);
        });
      }),
      (e.bindEvents = function () {
        var t = this._tooltipCfg,
          e = t.triggerOn,
          i = t.triggerOff,
          r = t.alwaysShow;
        e && this._handleEvent(e, this.handleShowEvent, "bind"),
          r || this._handleEvent(i, this.handleHideEvent, "bind");
      }),
      (e.unBindEvents = function () {
        var t = this._tooltipCfg,
          e = t.triggerOn,
          i = t.triggerOff,
          r = t.alwaysShow;
        e && this._handleEvent(e, this.handleShowEvent, "unBind"),
          r || this._handleEvent(i, this.handleHideEvent, "unBind");
      }),
      t
    );
  })();
  function p(t) {
    var e = new d({ chart: t });
    t.set("tooltipController", e),
      (t.tooltip = function (t, r) {
        return (
          (0, i.isObject)(t) && ((r = t), (t = !0)),
          (e.enable = t),
          r && (e.cfg = r),
          this
        );
      });
  }
  function v(t) {
    var e = t.get("tooltipController");
    e.render(),
      (t.showTooltip = function (t) {
        return e.showTooltip(t), this;
      }),
      (t.hideTooltip = function () {
        return e.hideTooltip(), this;
      });
  }
  function g(t) {
    t.get("tooltipController").clear();
  }
  var m = { init: p, afterGeomDraw: v, clearInner: g };
  e.default = m;
})(r);
var Rt = e.getDefaultExportFromCjs(r);
(exports.Tooltip = Wt),
  (exports.TooltipPlugin = Rt),
  (exports.common = n),
  (exports.graphic = q);
