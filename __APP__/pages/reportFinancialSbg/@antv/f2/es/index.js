var t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../../../@babel/runtime/helpers/get"),
  r = require("../../../../../@babel/runtime/helpers/getPrototypeOf"),
  a = require("../../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../../@babel/runtime/helpers/createSuper"),
  o = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  l = require("../../../../../@babel/runtime/helpers/createClass"),
  u = require("../../../../../@babel/runtime/helpers/typeof");
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var h = require("../../util/esm/cache.js"),
  c = require("../../../../../common/vendor.js");
function f(t) {
  for (var e = [], i = 0, n = t.length; i < n; i++) e = e.concat(t[i]);
  return e;
}
function v(t, e) {
  for (var i = [], n = {}, r = 0, a = t.length; r < a; r++) {
    var s = t[r][e];
    h.isNil(s) ||
      (h.isArray(s)
        ? h.each(s, function (t) {
            n[t] || (i.push(t), (n[t] = !0));
          })
        : n[s] || (i.push(s), (n[s] = !0)));
  }
  return i;
}
function g(t, e) {
  for (var i = null, n = 0, r = t.length; n < r; n++) {
    var a = t[n][e];
    if (!h.isNil(a)) {
      i = h.isArray(a) ? a[0] : a;
      break;
    }
  }
  return i;
}
function d(t, e) {
  if (!e) return { 0: t };
  for (
    var i = function (t) {
        for (var i = "_", n = 0, r = e.length; n < r; n++)
          i += t[e[n]] && t[e[n]].toString();
        return i;
      },
      n = {},
      r = 0,
      a = t.length;
    r < a;
    r++
  ) {
    var s = t[r],
      o = i(s);
    n[o] ? n[o].push(s) : (n[o] = [s]);
  }
  return n;
}
function p(t, e) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (!e) return [t];
  var n = d(t, e),
    r = [];
  if (1 === e.length && i[e[0]]) {
    var a = i[e[0]];
    h.each(a, function (t) {
      (t = "_" + t), r.push(n[t]);
    });
  } else for (var s in n) r.push(n[s]);
  return r;
}
function y(t, e) {
  if (t) {
    var i = t.indexOf(e);
    -1 !== i && t.splice(i, 1);
  }
}
function m(t) {
  if (!t.length) return { min: 0, max: 0 };
  var e = Math.max.apply(null, t);
  return { min: Math.min.apply(null, t), max: e };
}
var x = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        firstValue: g,
        getRange: m,
        group: p,
        groupToMap: d,
        merge: f,
        remove: y,
        values: v,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
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
  _ = "object" == u(c.wx$1) && "function" == typeof c.wx$1.getSystemInfoSync,
  S =
    "object" == ("undefined" == typeof my ? "undefined" : u(my)) &&
    "function" == typeof my.getSystemInfoSync,
  b =
    "undefined" != typeof window &&
    void 0 !== window.document &&
    void 0 !== window.sessionStorage;
function M(t) {
  return !(
    !t ||
    "object" != u(t) ||
    ((1 !== t.nodeType || !t.nodeName) && !t.isCanvasElement)
  );
}
function w() {
  return (window && window.devicePixelRatio) || 1;
}
function P(t, e) {
  return t.currentStyle
    ? t.currentStyle[e]
    : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
}
function C(t) {
  var e = P(t, "width");
  return "auto" === e && (e = t.offsetWidth), parseFloat(e);
}
function T(t) {
  var e = P(t, "height");
  return "auto" === e && (e = t.offsetHeight), parseFloat(e);
}
function A(t) {
  return t ? document.getElementById(t) : null;
}
function D(t, e) {
  var i = e.get("el");
  if (!i) return t;
  var n = i.getBoundingClientRect(),
    r = n.top,
    a = n.left,
    s = parseFloat(P(i, "padding-left")),
    o = parseFloat(P(i, "padding-top"));
  return { x: t.x - a - s, y: t.y - r - o };
}
function N(t, e, i) {
  t.addEventListener(e, i, k);
}
function I(t, e, i) {
  t.removeEventListener(e, i, k);
}
function O(t, e) {
  var i = e.get("landscape");
  if (!i) return t;
  if (h.isFunction(i)) return i(t, e);
  var n = e.get("height");
  return { x: t.y, y: n - t.x };
}
function Y(t, e) {
  var i = t.touches;
  if (!i) return [O(D({ x: t.clientX, y: t.clientY }, e), e)];
  i.length || (i = t.changedTouches || []);
  for (var n = [], r = 0, a = i.length; r < a; r++) {
    var s,
      o = i[r],
      l = o.x,
      u = o.y,
      c = o.clientX,
      f = o.clientY;
    (s =
      h.isNumber(l) || h.isNumber(u) ? { x: l, y: u } : D({ x: c, y: f }, e)),
      n.push(O(s, e));
  }
  return n;
}
function E(t, e) {
  var i = Y(t, e.get("canvas"))[0] || {};
  return { type: t.type, chart: e, native: t, x: i.x, y: i.y };
}
function F(t, e, i) {
  return (
    i || (i = document.createElement("canvas").getContext("2d")),
    (i.font = e || "12px sans-serif"),
    i.measureText(t)
  );
}
function j(t) {
  var e, i, n, r;
  return (
    h.isNumber(t) || h.isString(t)
      ? (e = n = r = i = t)
      : h.isArray(t) &&
        ((e = t[0]),
        (i = h.isNil(t[1]) ? t[0] : t[1]),
        (n = h.isNil(t[2]) ? t[0] : t[2]),
        (r = h.isNil(t[3]) ? i : t[3])),
    [e, i, n, r]
  );
}
function z(t, e) {
  return void 0 === t || ("string" == typeof t && -1 !== t.indexOf(e));
}
function B(t) {
  return (
    h.isString(t) &&
      (t =
        t.indexOf("T") > 0
          ? new Date(t).getTime()
          : new Date(t.replace(/-/gi, "/")).getTime()),
    h.isDate(t) && (t = t.getTime()),
    t
  );
}
var L = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Array: x,
        addEventListener: N,
        convertPoints: Y,
        createEvent: E,
        deepMix: h.deepMix,
        directionEnabled: z,
        each: h.each,
        find: h.find,
        getDomById: A,
        getHeight: T,
        getPixelRatio: w,
        getRelativePosition: D,
        getStyle: P,
        getWidth: C,
        isArray: h.isArray,
        isBoolean: h.isBoolean,
        isBrowser: b,
        isCanvasElement: M,
        isDate: h.isDate,
        isEqual: h.isEqual,
        isFunction: h.isFunction,
        isMy: S,
        isNil: h.isNil,
        isNode: !1,
        isNumber: h.isNumber,
        isObject: h.isObject,
        isObjectValueEqual: function (t, e) {
          (t = Object.assign({}, t)), (e = Object.assign({}, e));
          var i = Object.getOwnPropertyNames(t),
            n = Object.getOwnPropertyNames(e);
          if (i.length !== n.length) return !1;
          for (var r = 0, a = i.length; r < a; r++) {
            var s = i[r];
            if (t[s] !== e[s]) return !1;
          }
          return !0;
        },
        isPlainObject: h.isPlainObject,
        isString: h.isString,
        isWx: _,
        lowerFirst: h.lowerFirst,
        measureText: F,
        mix: h.mix,
        parsePadding: j,
        removeEventListener: I,
        substitute: h.substitute,
        toTimeStamp: B,
        uniq: h.uniq,
        upperFirst: h.upperFirst,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  X = "#E8E8E8",
  G = {
    label: { fill: "#808080", fontSize: 10 },
    line: { stroke: X, lineWidth: 1 },
    grid: { type: "line", stroke: X, lineWidth: 1, lineDash: [2] },
    tickLine: null,
    labelOffset: 7.5,
  },
  R = {
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
      common: G,
      bottom: h.mix({}, G, { grid: null }),
      left: h.mix({}, G, { line: null }),
      right: h.mix({}, G, { line: null }),
      circle: h.mix({}, G, { line: null }),
      radius: h.mix({}, G, { labelOffset: 4 }),
    },
    shape: {
      line: { lineWidth: 2, lineJoin: "round", lineCap: "round" },
      point: { lineWidth: 0, size: 3 },
      area: { fillOpacity: 0.1 },
    },
    _defaultAxis: G,
  },
  H = {
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
      partData: "第{index}类是{name}，共有{count}项数据，前{part}项是{values};",
      allData: "第{index}类是{name}，有{count}项数据，分别是{values};",
    },
    legend: { prefix: "图例分类有：" },
  },
  W = {
    version: "3.8.13",
    scales: {},
    widthRatio: { column: 0.5, rose: 0.999999, multiplePie: 3 / 4 },
    lineDash: [4, 4],
    lang: H,
    setTheme: function (t) {
      h.deepMix(W, t);
    },
  };
W.setTheme(R);
var V = "afterinit",
  q = "afterdatachange",
  Z = "_aftersizechange",
  U = (function () {
    function t() {
      o(this, t), (this.__events = {});
    }
    return (
      l(t, [
        {
          key: "on",
          value: function (t, e) {
            if (t && e) {
              var i = this.__events[t] || [];
              i.push(e), (this.__events[t] = i);
            }
          },
        },
        {
          key: "emit",
          value: function (t, e) {
            var i = this;
            if ((h.isObject(t) && (t = (e = t) && e.type), t)) {
              var n = this.__events[t];
              n &&
                n.length &&
                n.forEach(function (t) {
                  t.call(i, e);
                });
            }
          },
        },
        {
          key: "off",
          value: function (t, e) {
            var i = this.__events,
              n = i[t];
            if (n && n.length)
              if (e)
                for (var r = 0, a = n.length; r < a; r++)
                  n[r] === e && (n.splice(r, 1), r--);
              else delete i[t];
          },
        },
      ]),
      t
    );
  })(),
  J = (function (t) {
    a(i, U);
    var e = s(i);
    function i(t) {
      var n;
      o(this, i);
      var r = {},
        a = (n = e.call(this)).getDefaultCfg();
      return (n._attrs = r), h.mix(r, a, t), n;
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            return {};
          },
        },
        {
          key: "get",
          value: function (t) {
            return this._attrs[t];
          },
        },
        {
          key: "set",
          value: function (t, e) {
            this._attrs[t] = e;
          },
        },
        {
          key: "destroy",
          value: function () {
            (this._attrs = {}), (this.destroyed = !0);
          },
        },
      ]),
      i
    );
  })(),
  $ = (function () {
    function t(e) {
      o(this, t), h.mix(this, e), this._init();
    }
    return (
      l(t, [
        {
          key: "_init",
          value: function () {
            var t = this.start,
              e = this.end,
              i = Math.min(t.x, e.x),
              n = Math.max(t.x, e.x),
              r = Math.min(t.y, e.y),
              a = Math.max(t.y, e.y);
            (this.tl = { x: i, y: r }),
              (this.tr = { x: n, y: r }),
              (this.bl = { x: i, y: a }),
              (this.br = { x: n, y: a }),
              (this.width = n - i),
              (this.height = a - r);
          },
        },
        {
          key: "reset",
          value: function (t, e) {
            (this.start = t), (this.end = e), this._init();
          },
        },
        {
          key: "isInRange",
          value: function (t, e) {
            h.isObject(t) && ((e = t.y), (t = t.x));
            var i = this.tl,
              n = this.br;
            return i.x <= t && t <= n.x && i.y <= e && e <= n.y;
          },
        },
      ]),
      t
    );
  })(),
  K = {
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
      var n = Math.cos(i),
        r = Math.sin(i),
        a = e[0] * n + e[2] * r,
        s = e[1] * n + e[3] * r,
        o = e[0] * -r + e[2] * n,
        l = e[1] * -r + e[3] * n;
      return (
        (t[0] = a),
        (t[1] = s),
        (t[2] = o),
        (t[3] = l),
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
    transform: function (t, e) {
      for (var i = [].concat(t), n = 0, r = e.length; n < r; n++) {
        var a = e[n];
        switch (a[0]) {
          case "t":
            K.translate(i, i, [a[1], a[2]]);
            break;
          case "s":
            K.scale(i, i, [a[1], a[2]]);
            break;
          case "r":
            K.rotate(i, i, a[1]);
        }
      }
      return i;
    },
  },
  Q = {
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
      var n = this.angle(t, e),
        r = this.direction(t, e) >= 0;
      return i ? (r ? 2 * Math.PI - n : n) : r ? n : 2 * Math.PI - n;
    },
    zero: function (t) {
      return 0 === t[0] && 0 === t[1];
    },
    distance: function (t, e) {
      var i = e[0] - t[0],
        n = e[1] - t[1];
      return Math.sqrt(i * i + n * n);
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
      var n = e[0],
        r = e[1];
      return (
        (t[0] = i[0] * n + i[2] * r + i[4]),
        (t[1] = i[1] * n + i[3] * r + i[5]),
        t
      );
    },
  },
  tt = [1, 0, 0, 1, 0, 0],
  et = (function () {
    function t(e) {
      var i, n;
      o(this, t),
        this._initDefaultCfg(),
        h.mix(this, e),
        this.plot
          ? ((i = this.plot.bl),
            (n = this.plot.tr),
            (this.start = i),
            (this.end = n))
          : ((i = this.start), (n = this.end)),
        this.init(i, n);
    }
    return (
      l(t, [
        { key: "_initDefaultCfg", value: function () {} },
        {
          key: "_scale",
          value: function (t, e) {
            var i = this.matrix,
              n = this.center;
            K.translate(i, i, [n.x, n.y]),
              K.scale(i, i, [t, e]),
              K.translate(i, i, [-n.x, -n.y]);
          },
        },
        {
          key: "init",
          value: function (t, e) {
            (this.matrix = [].concat(tt)),
              (this.center = {
                x: (e.x - t.x) / 2 + t.x,
                y: (e.y - t.y) / 2 + t.y,
              }),
              this.scale && this._scale(this.scale[0], this.scale[1]);
          },
        },
        {
          key: "convertPoint",
          value: function (t) {
            var e = this._convertPoint(t),
              i = e.x,
              n = e.y;
            if (!K.isChanged(this.matrix)) return { x: i, y: n };
            var r = [i, n];
            return Q.transformMat2d(r, r, this.matrix), { x: r[0], y: r[1] };
          },
        },
        {
          key: "invertPoint",
          value: function (t) {
            return this._invertPoint(t);
          },
        },
        {
          key: "_convertPoint",
          value: function (t) {
            return t;
          },
        },
        {
          key: "_invertPoint",
          value: function (t) {
            return t;
          },
        },
        {
          key: "reset",
          value: function (t) {
            this.plot = t;
            var e = t.bl,
              i = t.tr;
            (this.start = e), (this.end = i), this.init(e, i);
          },
        },
      ]),
      t
    );
  })(),
  it = (function (t) {
    a(i, et);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "cartesian"),
              (this.transposed = !1),
              (this.isRect = !0);
          },
        },
        {
          key: "init",
          value: function (t, e) {
            n(r(i.prototype), "init", this).call(this, t, e),
              (this.x = { start: t.x, end: e.x }),
              (this.y = { start: t.y, end: e.y });
          },
        },
        {
          key: "_convertPoint",
          value: function (t) {
            var e = this,
              i = e.transposed,
              n = i ? "y" : "x",
              r = i ? "x" : "y",
              a = e.x,
              s = e.y;
            return {
              x: a.start + (a.end - a.start) * t[n],
              y: s.start + (s.end - s.start) * t[r],
            };
          },
        },
        {
          key: "_invertPoint",
          value: function (t) {
            var e = this,
              i = e.transposed,
              n = i ? "y" : "x",
              r = i ? "x" : "y",
              a = e.x,
              s = e.y,
              o = {};
            return (
              (o[n] = (t.x - a.start) / (a.end - a.start)),
              (o[r] = (t.y - s.start) / (s.end - s.start)),
              o
            );
          },
        },
      ]),
      i
    );
  })();
function nt(t, e) {
  return h.isString(e) ? e : t.invert(t.scale(e));
}
(et.Cartesian = it), (et.Rect = it);
var rt = (function () {
  function t(e) {
    o(this, t);
    var i = this;
    (this.type = "base"),
      (this.name = null),
      (this.method = null),
      (this.values = []),
      (this.scales = []),
      (this.linear = null);
    var n = null,
      r = this.callback;
    if (e.callback) {
      var a = e.callback;
      n = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        var s = a.apply(void 0, e);
        return h.isNil(s) && (s = r.apply(i, e)), s;
      };
    }
    h.mix(this, e), n && h.mix(this, { callback: n });
  }
  return (
    l(t, [
      {
        key: "_getAttrValue",
        value: function (t, e) {
          var i = this.values;
          if (t.isCategory && !this.linear) return i[t.translate(e) % i.length];
          var n = t.scale(e);
          return this.getLinearValue(n);
        },
      },
      {
        key: "getLinearValue",
        value: function (t) {
          var e = this.values,
            i = e.length - 1,
            n = Math.floor(i * t),
            r = i * t - n,
            a = e[n];
          return a + ((n === i ? a : e[n + 1]) - a) * r;
        },
      },
      {
        key: "callback",
        value: function (t) {
          var e = this.scales[0];
          return "identity" === e.type ? e.value : this._getAttrValue(e, t);
        },
      },
      {
        key: "getNames",
        value: function () {
          for (
            var t = this.scales,
              e = this.names,
              i = Math.min(t.length, e.length),
              n = [],
              r = 0;
            r < i;
            r++
          )
            n.push(e[r]);
          return n;
        },
      },
      {
        key: "getFields",
        value: function () {
          var t = this.scales,
            e = [];
          return (
            h.each(t, function (t) {
              e.push(t.field);
            }),
            e
          );
        },
      },
      {
        key: "getScale",
        value: function (t) {
          return this.scales[this.names.indexOf(t)];
        },
      },
      {
        key: "mapping",
        value: function () {
          for (
            var t = this.scales,
              e = this.callback,
              i = arguments.length,
              n = new Array(i),
              r = 0;
            r < i;
            r++
          )
            n[r] = arguments[r];
          var a = n;
          if (e) {
            for (var s = 0, o = n.length; s < o; s++)
              n[s] = this._toOriginParam(n[s], t[s]);
            a = e.apply(this, n);
          }
          return [].concat(a);
        },
      },
      {
        key: "_toOriginParam",
        value: function (t, e) {
          var i = t;
          if (!e.isLinear)
            if (h.isArray(t)) {
              i = [];
              for (var n = 0, r = t.length; n < r; n++) i.push(nt(e, t[n]));
            } else i = nt(e, t);
          return i;
        },
      },
    ]),
    t
  );
})();
function at(t, e, i, n) {
  return t[n] + (e[n] - t[n]) * i;
}
function st(t) {
  return "#" + ot(t[0]) + ot(t[1]) + ot(t[2]);
}
function ot(t) {
  return (
    1 === (t = (t = Math.round(t)).toString(16)).length && (t = "0" + t), t
  );
}
var lt = {
  black: "#000000",
  blue: "#0000ff",
  grey: "#808080",
  green: "#008000",
  orange: "#ffa500",
  pink: "#ffc0cb",
  purple: "#800080",
  red: "#ff0000",
  white: "#ffffff",
  yellow: "#ffff00",
};
function ut(t) {
  var e = [];
  return (
    h.isString(t) && (t = t.split("-")),
    h.each(t, function (t) {
      var i, n;
      -1 === t.indexOf("#") &&
        (t = (function (t) {
          if (lt[t]) return lt[t];
          if ("#" === t[0]) {
            if (7 === t.length) return t;
            var e = t.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (t, e, i, n) {
                return "#" + e + e + i + i + n + n;
              }
            );
            return (lt[t] = e), e;
          }
          var i = t.match(
            /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
          );
          return i.shift(), (i = st(i)), (lt[t] = i), i;
        })(t)),
        e.push(
          ((i = t),
          (n = []).push(parseInt(i.substr(1, 2), 16)),
          n.push(parseInt(i.substr(3, 2), 16)),
          n.push(parseInt(i.substr(5, 2), 16)),
          n)
        );
    }),
    function (t) {
      return (function (t, e) {
        var i = t.length - 1,
          n = Math.floor(i * e),
          r = i * e - n,
          a = t[n],
          s = n === i ? a : t[n + 1];
        return st([at(a, s, r, 0), at(a, s, r, 1), at(a, s, r, 2)]);
      })(e, t);
    }
  );
}
var ht = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Color: (function (t) {
          a(i, rt);
          var e = s(i);
          function i(t) {
            var n;
            return (
              o(this, i),
              ((n = e.call(this, t)).names = ["color"]),
              (n.type = "color"),
              (n.gradient = null),
              h.isString(n.values) && (n.linear = !0),
              n
            );
          }
          return (
            l(i, [
              {
                key: "getLinearValue",
                value: function (t) {
                  var e = this.gradient;
                  return (
                    e || ((e = ut(this.values)), (this.gradient = e)), e(t)
                  );
                },
              },
            ]),
            i
          );
        })(),
        Position: (function (t) {
          a(i, rt);
          var e = s(i);
          function i(t) {
            var n;
            return (
              o(this, i),
              ((n = e.call(this, t)).names = ["x", "y"]),
              (n.type = "position"),
              n
            );
          }
          return (
            l(i, [
              {
                key: "mapping",
                value: function (t, e) {
                  var i,
                    n,
                    r,
                    a = this.scales,
                    s = this.coord,
                    o = a[0],
                    l = a[1];
                  if (h.isNil(t) || h.isNil(e)) return [];
                  if (h.isArray(e) && h.isArray(t)) {
                    (i = []), (n = []);
                    for (
                      var u = 0, c = 0, f = t.length, v = e.length;
                      u < f && c < v;
                      u++, c++
                    )
                      (r = s.convertPoint({
                        x: o.scale(t[u]),
                        y: l.scale(e[c]),
                      })),
                        i.push(r.x),
                        n.push(r.y);
                  } else if (h.isArray(e))
                    (t = o.scale(t)),
                      (n = []),
                      h.each(e, function (e) {
                        (e = l.scale(e)),
                          (r = s.convertPoint({ x: t, y: e })),
                          i && i !== r.x
                            ? (h.isArray(i) || (i = [i]), i.push(r.x))
                            : (i = r.x),
                          n.push(r.y);
                      });
                  else if (h.isArray(t))
                    (e = l.scale(e)),
                      (i = []),
                      h.each(t, function (t) {
                        (t = o.scale(t)),
                          (r = s.convertPoint({ x: t, y: e })),
                          n && n !== r.y
                            ? (h.isArray(n) || (n = [n]), n.push(r.y))
                            : (n = r.y),
                          i.push(r.x);
                      });
                  else {
                    (t = o.scale(t)), (e = l.scale(e));
                    var g = s.convertPoint({ x: t, y: e });
                    (i = g.x), (n = g.y);
                  }
                  return [i, n];
                },
              },
            ]),
            i
          );
        })(),
        Shape: (function (t) {
          a(i, rt);
          var e = s(i);
          function i(t) {
            var n;
            return (
              o(this, i),
              ((n = e.call(this, t)).names = ["shape"]),
              (n.type = "shape"),
              (n.gradient = null),
              n
            );
          }
          return (
            l(i, [
              {
                key: "getLinearValue",
                value: function (t) {
                  var e = this.values;
                  return e[Math.round((e.length - 1) * t)];
                },
              },
            ]),
            i
          );
        })(),
        Size: (function (t) {
          a(i, rt);
          var e = s(i);
          function i(t) {
            var n;
            return (
              o(this, i),
              ((n = e.call(this, t)).names = ["size"]),
              (n.type = "size"),
              (n.gradient = null),
              n
            );
          }
          return l(i);
        })(),
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ct = {},
  ft = {
    _coord: null,
    draw: function (t, e) {
      this.drawShape && this.drawShape(t, e);
    },
    setCoord: function (t) {
      this._coord = t;
    },
    parsePoint: function (t) {
      var e = this._coord;
      return (
        e.isPolar &&
          (1 === t.x && (t.x = 0.9999999), 1 === t.y && (t.y = 0.9999999)),
        e.convertPoint(t)
      );
    },
    parsePoints: function (t) {
      if (!t) return !1;
      var e = this,
        i = [];
      return (
        t.forEach(function (t) {
          i.push(e.parsePoint(t));
        }),
        i
      );
    },
  },
  vt = {
    defaultShapeType: null,
    setCoord: function (t) {
      this._coord = t;
    },
    getShape: function (t) {
      var e = this;
      h.isArray(t) && (t = t[0]);
      var i = e[t] || e[e.defaultShapeType];
      return (i._coord = e._coord), i;
    },
    getShapePoints: function (t, e) {
      var i = this.getShape(t);
      return (i.getPoints || i.getShapePoints || this.getDefaultPoints)(e);
    },
    getDefaultPoints: function () {
      return [];
    },
    drawShape: function (t, e, i) {
      var n = this.getShape(t);
      return e.color || (e.color = W.colors[0]), n.draw(e, i);
    },
  };
function gt(t, e) {
  for (var i in e)
    e.hasOwnProperty(i) &&
      "constructor" !== i &&
      void 0 !== e[i] &&
      (t[i] = e[i]);
}
(ct.registerFactory = function (t, e) {
  var i = h.upperFirst(t),
    n = h.mix({}, vt, e);
  return (ct[i] = n), (n.name = t), n;
}),
  (ct.registerShape = function (t, e, i) {
    var n = h.upperFirst(t),
      r = ct[n],
      a = h.mix({}, ft, i);
    return (r[e] = a), a;
  }),
  (ct.registShape = ct.registerShape),
  (ct.getShapeFactory = function (t) {
    return (t = t || "point"), this[h.upperFirst(t)];
  });
var dt = (function () {
    var t = e.prototype;
    function e(t) {
      this._initDefaultCfg(),
        (function (t, e, i, n) {
          e && gt(t, e), i && gt(t, i), n && gt(t, n);
        })(this, t);
    }
    return (
      (t._initDefaultCfg = function () {
        this.adjustNames = ["x", "y"];
      }),
      (t.processAdjust = function () {}),
      e
    );
  })(),
  pt = c.getDefaultExportFromCjs(dt);
function yt(t) {
  var e = t.type,
    i = t.values;
  if ("linear" === e) return h.substitute(H.scale.linear, t);
  if ("cat" === e)
    return h.substitute(H.scale.cat, { values: i.slice(0, 10).join(" ") });
  if ("timeCat" === e) {
    var n = t.getText(i[0]),
      r = t.getText(i[i.length - 1]);
    return h.substitute(H.scale.timeCat, { start: n, end: r });
  }
  return "";
}
function mt(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      i.push.apply(i, n);
  }
  return i;
}
function xt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? mt(Object(i), !0).forEach(function (e) {
          kt(t, e, i[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
      : mt(Object(i)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
  }
  return t;
}
function kt(t, e, i) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ("object" != u(t) || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var n = i.call(t, e);
          if ("object" != u(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t, "string");
      return "symbol" == u(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
var _t = ["color", "size", "shape"],
  St = "_origin",
  bt = "_originY";
function Mt(t) {
  return h.isArray(t) ? t : h.isString(t) ? t.split("*") : [t];
}
var wt = (function (t) {
    a(i, J);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            return {
              type: null,
              data: null,
              attrs: {},
              scales: {},
              container: null,
              styleOptions: null,
              chart: null,
              shapeType: "",
              generatePoints: !1,
              attrOptions: {},
              sortable: !1,
              startOnZero: !0,
              visible: !0,
              connectNulls: !1,
              ignoreEmptyGroup: !1,
              isInit: !1,
            };
          },
        },
        {
          key: "init",
          value: function () {
            var t = this;
            t.get("isInit") ||
              (t._initAttrs(), t._processData(), t.set("isInit", !0));
          },
        },
        {
          key: "_getGroupScales",
          value: function () {
            var t = this,
              e = [];
            return (
              h.each(_t, function (i) {
                var n = t.getAttr(i);
                if (n) {
                  var r = n.scales;
                  h.each(r, function (t) {
                    t && t.isCategory && -1 === e.indexOf(t) && e.push(t);
                  });
                }
              }),
              e
            );
          },
        },
        {
          key: "_groupData",
          value: function (t) {
            var e = this.get("colDefs"),
              i = this._getGroupScales();
            if (i.length) {
              var n = {},
                r = [];
              return (
                h.each(i, function (t) {
                  var i = t.field;
                  r.push(i),
                    e && e[i] && e[i].values && (n[t.field] = e[i].values);
                }),
                p(t, r, n)
              );
            }
            return [t];
          },
        },
        {
          key: "_setAttrOptions",
          value: function (t, e) {
            this.get("attrOptions")[t] = e;
            var i = this.get("attrs");
            Object.keys(i).length && this._createAttr(t, e);
          },
        },
        {
          key: "_createAttrOption",
          value: function (t, e, i, n) {
            var r = {};
            (r.field = e),
              i
                ? h.isFunction(i)
                  ? (r.callback = i)
                  : (r.values = i)
                : (r.values = n),
              this._setAttrOptions(t, r);
          },
        },
        {
          key: "_createAttr",
          value: function (t, e) {
            var i = this,
              n = i.get("attrs"),
              r = i.get("coord"),
              a = h.upperFirst(t),
              s = Mt(e.field);
            "position" === t && (e.coord = r);
            for (var o = [], l = 0, u = s.length; l < u; l++) {
              var c = s[l],
                f = i._createScale(c);
              o.push(f);
            }
            if ("position" === t) {
              var v = o[1];
              "polar" === r.type &&
                r.transposed &&
                i.hasAdjust("stack") &&
                v.values.length &&
                v.change({
                  nice: !1,
                  min: 0,
                  max: Math.max.apply(null, v.values),
                });
            }
            e.scales = o;
            var g = new ht[a](e);
            return (n[t] = g), g;
          },
        },
        {
          key: "_initAttrs",
          value: function () {
            var t = this.get("attrOptions");
            for (var e in t) t.hasOwnProperty(e) && this._createAttr(e, t[e]);
          },
        },
        {
          key: "_createScale",
          value: function (t) {
            var e = this.get("scales"),
              i = e[t];
            return i || ((i = this.get("chart").createScale(t)), (e[t] = i)), i;
          },
        },
        {
          key: "_processData",
          value: function () {
            var t = this,
              e = this.get("data"),
              i = [],
              n = this._groupData(e);
            if (this.get("ignoreEmptyGroup")) {
              var r = this.getYScale();
              n = n.filter(function (t) {
                return t.some(function (t) {
                  return void 0 !== t[r.field];
                });
              });
            }
            for (var a = 0, s = n.length; a < s; a++) {
              var o = n[a],
                l = t._saveOrigin(o);
              this.hasAdjust("dodge") && t._numberic(l), i.push(l);
            }
            return (
              t.get("adjust") && t._adjustData(i),
              t.get("sortable") && t._sort(i),
              t.emit("afterprocessdata", { dataArray: i }),
              t.set("mappingData", i),
              t.set("dataArray", i),
              i
            );
          },
        },
        {
          key: "_saveOrigin",
          value: function (t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
              var r = t[i],
                a = {};
              for (var s in r) a[s] = r[s];
              (a[St] = r), e.push(a);
            }
            return e;
          },
        },
        {
          key: "_numberic",
          value: function (t) {
            for (
              var e = this.getAttr("position").scales, i = 0, n = t.length;
              i < n;
              i++
            )
              for (var r = t[i], a = Math.min(2, e.length), s = 0; s < a; s++) {
                var o = e[s];
                if (o.isCategory) {
                  var l = o.field;
                  r[l] = o.translate(r[l]);
                }
              }
          },
        },
        {
          key: "_adjustData",
          value: function (t) {
            var e = this,
              i = e.get("adjust");
            if (i) {
              var n = h.upperFirst(i.type);
              if (!pt[n]) throw new Error("not support such adjust : " + i);
              var r = e.getXScale(),
                a = e.getYScale(),
                s = h.mix({ xField: r.field, yField: a.field }, i);
              new pt[n](s).processAdjust(t),
                "Stack" === n && e._updateStackRange(a.field, a, t);
            }
          },
        },
        {
          key: "_updateStackRange",
          value: function (t, e, i) {
            for (
              var n = f(i), r = e.min, a = e.max, s = 0, o = n.length;
              s < o;
              s++
            ) {
              var l = n[s],
                u = Math.min.apply(null, l[t]),
                h = Math.max.apply(null, l[t]);
              u < r && (r = u), h > a && (a = h);
            }
            (r < e.min || a > e.max) && e.change({ min: r, max: a });
          },
        },
        {
          key: "_sort",
          value: function (t) {
            var e = this,
              i = e.getXScale(),
              n = i.field,
              r = i.type;
            "identity" !== r &&
              i.values.length > 1 &&
              h.each(t, function (t) {
                t.sort(function (t, e) {
                  return "timeCat" === r
                    ? B(t[St][n]) - B(e[St][n])
                    : i.translate(t[St][n]) - i.translate(e[St][n]);
                });
              }),
              e.set("hasSorted", !0),
              e.set("dataArray", t);
          },
        },
        {
          key: "paint",
          value: function () {
            var t = this,
              e = t.get("mappingData"),
              i = [],
              n = t.getShapeFactory();
            n.setCoord(t.get("coord")), t._beforeMapping(e);
            for (var r = 0, a = e.length; r < a; r++) {
              var s = e[r];
              if (s.length) {
                var o = t._mapping(s);
                i.push(o), t.draw(o, n);
              }
            }
            t.set("dataArray", i), this.generateAria();
          },
        },
        {
          key: "getShapeFactory",
          value: function () {
            var t = this.get("shapeFactory");
            if (!t) {
              var e = this.get("shapeType");
              (t = ct.getShapeFactory(e)), this.set("shapeFactory", t);
            }
            return t;
          },
        },
        {
          key: "_mapping",
          value: function (t) {
            var e = this,
              i = e.get("attrs"),
              n = e.getYScale().field,
              r = {},
              a = new Array(t.length);
            for (var s in i)
              if (i.hasOwnProperty(s))
                for (
                  var o = i[s], l = o.names, u = o.scales, c = 0, f = t.length;
                  c < f;
                  c++
                ) {
                  var v = t[c],
                    g = xt(xt({}, v), a[c]);
                  if (((g[bt] = v[n]), "position" === o.type))
                    for (
                      var d = e._getAttrValues(o, v), p = 0, y = d.length;
                      p < y;
                      p++
                    ) {
                      var m = d[p];
                      g[l[p]] = h.isArray(m) && 1 === m.length ? m[0] : m;
                    }
                  else {
                    var x = l[0],
                      k = v[u[0].field],
                      _ = "".concat(x).concat(k),
                      S = r[_];
                    S || ((S = e._getAttrValues(o, v)), (r[_] = S)),
                      (g[x] = S[0]);
                  }
                  a[c] = g;
                }
            return a;
          },
        },
        {
          key: "_getAttrValues",
          value: function (t, e) {
            for (var i = t.scales, n = [], r = 0, a = i.length; r < a; r++) {
              var s = i[r],
                o = s.field;
              "identity" === s.type ? n.push(s.value) : n.push(e[o]);
            }
            return t.mapping.apply(t, n);
          },
        },
        {
          key: "getAttrValue",
          value: function (t, e) {
            var i = this.getAttr(t),
              n = null;
            return i && (n = this._getAttrValues(i, e)[0]), n;
          },
        },
        {
          key: "_beforeMapping",
          value: function (t) {
            this.get("generatePoints") && this._generatePoints(t);
          },
        },
        {
          key: "isInCircle",
          value: function () {
            var t = this.get("coord");
            return t && t.isPolar;
          },
        },
        {
          key: "getCallbackCfg",
          value: function (t, e, i) {
            if (!t) return e;
            var n = {},
              r = t.map(function (t) {
                return i[t];
              });
            return (
              h.each(e, function (t, e) {
                h.isFunction(t) ? (n[e] = t.apply(null, r)) : (n[e] = t);
              }),
              n
            );
          },
        },
        {
          key: "getDrawCfg",
          value: function (t) {
            var e = this,
              i = e.isInCircle(),
              n = {
                origin: t,
                x: t.x,
                y: t.y,
                color: t.color,
                size: t.size,
                shape: t.shape,
                isInCircle: i,
                opacity: t.opacity,
              },
              r = e.get("styleOptions");
            return (
              r &&
                r.style &&
                (n.style = e.getCallbackCfg(r.fields, r.style, t[St])),
              e.get("generatePoints") &&
                ((n.points = t.points), (n.nextPoints = t.nextPoints)),
              i && (n.center = e.get("coord").center),
              n
            );
          },
        },
        {
          key: "draw",
          value: function (t, e) {
            var i = this,
              n = i.get("container"),
              r = i.getYScale();
            h.each(t, function (t, a) {
              if (!r || !h.isNil(t._origin[r.field])) {
                t.index = a;
                var s = i.getDrawCfg(t),
                  o = t.shape;
                i.drawShape(o, t, s, n, e);
              }
            });
          },
        },
        {
          key: "drawShape",
          value: function (t, e, i, n, r) {
            var a = r.drawShape(t, i, n);
            a &&
              h.each([].concat(a), function (t) {
                t.set("origin", e);
              });
          },
        },
        {
          key: "_generatePoints",
          value: function (t) {
            var e = this,
              i = e.getShapeFactory(),
              n = e.getAttr("shape");
            h.each(t, function (t) {
              for (var r = 0, a = t.length; r < a; r++) {
                var s = t[r],
                  o = e.createShapePointsCfg(s),
                  l = n ? e._getAttrValues(n, s) : null,
                  u = i.getShapePoints(l, o);
                s.points = u;
              }
            }),
              h.each(t, function (e, i) {
                var n = t[i + 1];
                n && (e[0].nextPoints = n[0].points);
              });
          },
        },
        {
          key: "generateAria",
          value: function () {
            var t = this.get("container");
            if (t.get("aria")) {
              var e = [],
                i = this.get("coord"),
                n = this.getXScale(),
                r = this.getYScale(),
                a = (function (t, e, i) {
                  var n = t.type;
                  return H.coord[n]
                    ? h.substitute(H.coord[n], { xLabel: yt(e), yLabel: yt(i) })
                    : "";
                })(i, n, r);
              e.push(a);
              var s = H.geometry,
                o = s.prefix,
                l = s.oneData,
                u = s.partData,
                c = s.allData,
                f = this.get("dataArray"),
                v = f.length,
                g = this._getGroupScales()[0];
              if (g) {
                var d = h.substitute(o, { count: v });
                e.push(d),
                  h.each(f, function (t, i) {
                    var a = t.length;
                    if (a) {
                      var s = t[0]._origin;
                      if (1 === a)
                        e.push(
                          h.substitute(l, {
                            index: i + 1,
                            count: a,
                            name: s[g.field],
                            values: s[r.field],
                          })
                        );
                      else {
                        var o = a > 5 ? u : c,
                          f = t.slice(0, 5).map(function (t) {
                            var e = t._origin,
                              i = n.getText(e[n.field]),
                              a = r.getText(e[r.field]);
                            return "".concat(i, ":").concat(a);
                          });
                        e.push(
                          h.substitute(o, {
                            index: i + 1,
                            count: a,
                            part: 3,
                            name: s[g.field],
                            values: f.join(" "),
                          })
                        );
                      }
                    }
                  });
              }
              t.set("ariaLabel", e.join(""));
            }
          },
        },
        {
          key: "createShapePointsCfg",
          value: function (t) {
            var e = this.getXScale(),
              i = this.getYScale();
            return {
              x: this._normalizeValues(t[e.field], e),
              y: i ? this._normalizeValues(t[i.field], i) : t.y ? t.y : 0.1,
              y0: i ? i.scale(this.getYMinValue()) : void 0,
            };
          },
        },
        {
          key: "getYMinValue",
          value: function () {
            var t = this.getYScale(),
              e = t.min,
              i = t.max;
            return this.get("startOnZero")
              ? i <= 0 && e <= 0
                ? i
                : e >= 0
                ? e
                : 0
              : e;
          },
        },
        {
          key: "_normalizeValues",
          value: function (t, e) {
            var i = [];
            if (h.isArray(t))
              for (var n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                i.push(e.scale(a));
              }
            else i = e.scale(t);
            return i;
          },
        },
        {
          key: "getAttr",
          value: function (t) {
            return this.get("attrs")[t];
          },
        },
        {
          key: "getXScale",
          value: function () {
            return this.getAttr("position").scales[0];
          },
        },
        {
          key: "getYScale",
          value: function () {
            return this.getAttr("position").scales[1];
          },
        },
        {
          key: "hasAdjust",
          value: function (t) {
            return this.get("adjust") && this.get("adjust").type === t;
          },
        },
        {
          key: "_getSnap",
          value: function (t, e, i) {
            var n,
              r = 0,
              a = this.getYScale().field;
            if (this.hasAdjust("stack") && t.field === a) {
              (n = []),
                i.forEach(function (t) {
                  n.push(t[bt]);
                });
              for (var s = n.length; r < s && !(n[0][0] > e); r++) {
                if (n[n.length - 1][1] <= e) {
                  r = n.length - 1;
                  break;
                }
                if (n[r][0] <= e && n[r][1] > e) break;
              }
            } else {
              (n = t.values).sort(function (t, e) {
                return t - e;
              });
              for (
                var o = n.length;
                !(
                  !(r < o) ||
                  o <= 1 ||
                  (n[0] + n[1]) / 2 > e ||
                  ((n[r - 1] + n[r]) / 2 <= e && (n[r + 1] + n[r]) / 2 > e)
                );
                r++
              )
                if ((n[n.length - 2] + n[n.length - 1]) / 2 <= e) {
                  r = n.length - 1;
                  break;
                }
            }
            return n[r];
          },
        },
        {
          key: "getSnapRecords",
          value: function (t) {
            var e = this,
              i = e.get("coord"),
              n = e.getXScale(),
              r = e.getYScale(),
              a = n.field,
              s = e.get("dataArray");
            this.get("hasSorted") || this._sort(s);
            var o = [],
              l = i.invertPoint(t),
              u = l.x;
            if (
              (e.isInCircle() &&
                !i.transposed &&
                u > (1 + n.rangeMax()) / 2 &&
                (u = n.rangeMin()),
              n.isCategory)
            ) {
              var c = n.rangeMin(),
                f = n.rangeMax();
              u < c && (u = c), u > f && (u = f);
            }
            var v = n.invert(u);
            n.isCategory || (v = e._getSnap(n, v));
            var g = [];
            if (
              (s.forEach(function (t) {
                t.forEach(function (t) {
                  var i = h.isNil(t[St]) ? t[a] : t[St][a];
                  e._isEqual(i, v, n) && g.push(t);
                });
              }),
              this.hasAdjust("stack") && i.isPolar && i.transposed)
            ) {
              if (u >= 0 && u <= 1) {
                var d = r.invert(l.y);
                (d = e._getSnap(r, d, g)),
                  g.forEach(function (t) {
                    (h.isArray(d)
                      ? t[bt].toString() === d.toString()
                      : t[bt] === d) && o.push(t);
                  });
              }
            } else o = g;
            return o;
          },
        },
        {
          key: "getRecords",
          value: function (t) {
            var e = this,
              i = this.getXScale(),
              n = this.get("dataArray"),
              r = i.field;
            return n.map(function (n) {
              for (var a = n.length - 1; a >= 0; a--) {
                var s = n[a],
                  o = h.isNil(s[St]) ? s[r] : s[St][r];
                if (e._isEqual(o, t, i)) return s;
              }
              return null;
            });
          },
        },
        {
          key: "_isEqual",
          value: function (t, e, i) {
            return "timeCat" === i.type ? B(t) === e : e === t;
          },
        },
        {
          key: "position",
          value: function (t) {
            return this._setAttrOptions("position", { field: t }), this;
          },
        },
        {
          key: "color",
          value: function (t, e) {
            return this._createAttrOption("color", t, e, W.colors), this;
          },
        },
        {
          key: "size",
          value: function (t, e) {
            return this._createAttrOption("size", t, e, W.sizes), this;
          },
        },
        {
          key: "shape",
          value: function (t, e) {
            var i = this.get("type"),
              n = W.shapes[i] || [];
            return this._createAttrOption("shape", t, e, n), this;
          },
        },
        {
          key: "style",
          value: function (t, e) {
            var i,
              n = this.get("styleOptions");
            return (
              n || ((n = {}), this.set("styleOptions", n)),
              h.isObject(t) && ((e = t), (t = null)),
              t && (i = Mt(t)),
              (n.fields = i),
              (n.style = e),
              this
            );
          },
        },
        {
          key: "adjust",
          value: function (t) {
            return (
              h.isString(t) && (t = { type: t }), this.set("adjust", t), this
            );
          },
        },
        {
          key: "animate",
          value: function (t) {
            return this.set("animateCfg", t), this;
          },
        },
        {
          key: "changeData",
          value: function (t) {
            this.set("data", t),
              this.set("scales", {}),
              this.get("isInit") && (this.set("isInit", !1), this.init());
          },
        },
        {
          key: "clearInner",
          value: function () {
            var t = this.get("container");
            t && t.clear();
          },
        },
        {
          key: "reset",
          value: function () {
            this.set("isInit", !1),
              this.set("attrs", {}),
              this.set("attrOptions", {}),
              this.set("adjust", null),
              this.clearInner();
          },
        },
        {
          key: "clear",
          value: function () {
            this.clearInner();
          },
        },
        {
          key: "destroy",
          value: function () {
            this.set("isInit", !1),
              this.clear(),
              n(r(i.prototype), "destroy", this).call(this);
          },
        },
        {
          key: "_display",
          value: function (t) {
            this.set("visible", t);
            var e = this.get("container"),
              i = e.get("canvas");
            e.set("visible", t), i.draw();
          },
        },
        {
          key: "show",
          value: function () {
            this._display(!0);
          },
        },
        {
          key: "hide",
          value: function () {
            this._display(!1);
          },
        },
      ]),
      i
    );
  })(),
  Pt = {};
function Ct(t) {
  return Pt[t];
}
function Tt(t, e) {
  Pt[t] = e;
}
var At = (function () {
    function t(t) {
      (this.type = "base"),
        (this.isCategory = !1),
        (this.isLinear = !1),
        (this.isContinuous = !1),
        (this.isIdentity = !1),
        (this.values = []),
        (this.range = [0, 1]),
        (this.ticks = []),
        (this.__cfg__ = t),
        this.initCfg(),
        this.init();
    }
    return (
      (t.prototype.translate = function (t) {
        return t;
      }),
      (t.prototype.change = function (t) {
        h.mix(this.__cfg__, t), this.init();
      }),
      (t.prototype.clone = function () {
        return this.constructor(this.__cfg__);
      }),
      (t.prototype.getTicks = function () {
        var t = this;
        return h.map(this.ticks, function (e, i) {
          return h.isObject(e)
            ? e
            : { text: t.getText(e, i), tickValue: e, value: t.scale(e) };
        });
      }),
      (t.prototype.getText = function (t, e) {
        var i = this.formatter,
          n = i ? i(t, e) : t;
        return h.isNil(n) || !h.isFunction(n.toString) ? "" : n.toString();
      }),
      (t.prototype.getConfig = function (t) {
        return this.__cfg__[t];
      }),
      (t.prototype.init = function () {
        h.mix(this, this.__cfg__),
          this.setDomain(),
          h.isEmpty(this.getConfig("ticks")) &&
            (this.ticks = this.calculateTicks());
      }),
      (t.prototype.initCfg = function () {}),
      (t.prototype.setDomain = function () {}),
      (t.prototype.calculateTicks = function () {
        var t = this.tickMethod,
          e = [];
        if (h.isString(t)) {
          var i = Ct(t);
          if (!i) throw new Error("There is no method to to calculate ticks!");
          e = i(this);
        } else h.isFunction(t) && (e = t(this));
        return e;
      }),
      (t.prototype.rangeMin = function () {
        return this.range[0];
      }),
      (t.prototype.rangeMax = function () {
        return this.range[1];
      }),
      (t.prototype.calcPercent = function (t, e, i) {
        return h.isNumber(t) ? (t - e) / (i - e) : NaN;
      }),
      (t.prototype.calcValue = function (t, e, i) {
        return e + t * (i - e);
      }),
      t
    );
  })(),
  Dt = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "cat"), (e.isCategory = !0), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.buildIndexMap = function () {
        if (!this.translateIndexMap) {
          this.translateIndexMap = new Map();
          for (var t = 0; t < this.values.length; t++)
            this.translateIndexMap.set(this.values[t], t);
        }
      }),
      (e.prototype.translate = function (t) {
        this.buildIndexMap();
        var e = this.translateIndexMap.get(t);
        return void 0 === e && (e = h.isNumber(t) ? t : NaN), e;
      }),
      (e.prototype.scale = function (t) {
        var e = this.translate(t),
          i = this.calcPercent(e, this.min, this.max);
        return this.calcValue(i, this.rangeMin(), this.rangeMax());
      }),
      (e.prototype.invert = function (t) {
        var e = this.max - this.min,
          i = this.calcPercent(t, this.rangeMin(), this.rangeMax()),
          n = Math.round(e * i) + this.min;
        return n < this.min || n > this.max ? NaN : this.values[n];
      }),
      (e.prototype.getText = function (e) {
        for (var i = [], n = 1; n < arguments.length; n++)
          i[n - 1] = arguments[n];
        var r = e;
        return (
          h.isNumber(e) && !this.values.includes(e) && (r = this.values[r]),
          t.prototype.getText.apply(this, h.__spreadArrays([r], i))
        );
      }),
      (e.prototype.initCfg = function () {
        this.tickMethod = "cat";
      }),
      (e.prototype.setDomain = function () {
        if (
          (h.isNil(this.getConfig("min")) && (this.min = 0),
          h.isNil(this.getConfig("max")))
        ) {
          var t = this.values.length;
          this.max = t > 1 ? t - 1 : t;
        }
        this.translateIndexMap && (this.translateIndexMap = void 0);
      }),
      e
    );
  })(At),
  Nt =
    /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
  It = "\\d\\d?",
  Ot = "\\d\\d",
  Yt = "[^\\s]+",
  Et = /\[([^]*?)\]/gm;
function Ft(t, e) {
  for (var i = [], n = 0, r = t.length; n < r; n++) i.push(t[n].substr(0, e));
  return i;
}
var jt = function (t) {
  return function (e, i) {
    var n = i[t]
      .map(function (t) {
        return t.toLowerCase();
      })
      .indexOf(e.toLowerCase());
    return n > -1 ? n : null;
  };
};
function zt(t) {
  for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
  for (var n = 0, r = e; n < r.length; n++) {
    var a = r[n];
    for (var s in a) t[s] = a[s];
  }
  return t;
}
var Bt = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  Lt = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Xt = Ft(Lt, 3),
  Gt = {
    dayNamesShort: Ft(Bt, 3),
    dayNames: Bt,
    monthNamesShort: Xt,
    monthNames: Lt,
    amPm: ["am", "pm"],
    DoFn: function (t) {
      return (
        t +
        ["th", "st", "nd", "rd"][
          t % 10 > 3 ? 0 : ((t - (t % 10) != 10 ? 1 : 0) * t) % 10
        ]
      );
    },
  },
  Rt = zt({}, Gt),
  Ht = function (t) {
    return (Rt = zt(Rt, t));
  },
  Wt = function (t) {
    return t.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
  },
  Vt = function (t, e) {
    for (void 0 === e && (e = 2), t = String(t); t.length < e; ) t = "0" + t;
    return t;
  },
  qt = {
    D: function (t) {
      return String(t.getDate());
    },
    DD: function (t) {
      return Vt(t.getDate());
    },
    Do: function (t, e) {
      return e.DoFn(t.getDate());
    },
    d: function (t) {
      return String(t.getDay());
    },
    dd: function (t) {
      return Vt(t.getDay());
    },
    ddd: function (t, e) {
      return e.dayNamesShort[t.getDay()];
    },
    dddd: function (t, e) {
      return e.dayNames[t.getDay()];
    },
    M: function (t) {
      return String(t.getMonth() + 1);
    },
    MM: function (t) {
      return Vt(t.getMonth() + 1);
    },
    MMM: function (t, e) {
      return e.monthNamesShort[t.getMonth()];
    },
    MMMM: function (t, e) {
      return e.monthNames[t.getMonth()];
    },
    YY: function (t) {
      return Vt(String(t.getFullYear()), 4).substr(2);
    },
    YYYY: function (t) {
      return Vt(t.getFullYear(), 4);
    },
    h: function (t) {
      return String(t.getHours() % 12 || 12);
    },
    hh: function (t) {
      return Vt(t.getHours() % 12 || 12);
    },
    H: function (t) {
      return String(t.getHours());
    },
    HH: function (t) {
      return Vt(t.getHours());
    },
    m: function (t) {
      return String(t.getMinutes());
    },
    mm: function (t) {
      return Vt(t.getMinutes());
    },
    s: function (t) {
      return String(t.getSeconds());
    },
    ss: function (t) {
      return Vt(t.getSeconds());
    },
    S: function (t) {
      return String(Math.round(t.getMilliseconds() / 100));
    },
    SS: function (t) {
      return Vt(Math.round(t.getMilliseconds() / 10), 2);
    },
    SSS: function (t) {
      return Vt(t.getMilliseconds(), 3);
    },
    a: function (t, e) {
      return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
    },
    A: function (t, e) {
      return t.getHours() < 12
        ? e.amPm[0].toUpperCase()
        : e.amPm[1].toUpperCase();
    },
    ZZ: function (t) {
      var e = t.getTimezoneOffset();
      return (
        (e > 0 ? "-" : "+") +
        Vt(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
      );
    },
    Z: function (t) {
      var e = t.getTimezoneOffset();
      return (
        (e > 0 ? "-" : "+") +
        Vt(Math.floor(Math.abs(e) / 60), 2) +
        ":" +
        Vt(Math.abs(e) % 60, 2)
      );
    },
  },
  Zt = function (t) {
    return +t - 1;
  },
  Ut = [null, It],
  Jt = [null, Yt],
  $t = [
    "isPm",
    Yt,
    function (t, e) {
      var i = t.toLowerCase();
      return i === e.amPm[0] ? 0 : i === e.amPm[1] ? 1 : null;
    },
  ],
  Kt = [
    "timezoneOffset",
    "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
    function (t) {
      var e = (t + "").match(/([+-]|\d\d)/gi);
      if (e) {
        var i = 60 * +e[1] + parseInt(e[2], 10);
        return "+" === e[0] ? i : -i;
      }
      return 0;
    },
  ],
  Qt = {
    D: ["day", It],
    DD: ["day", Ot],
    Do: [
      "day",
      It + Yt,
      function (t) {
        return parseInt(t, 10);
      },
    ],
    M: ["month", It, Zt],
    MM: ["month", Ot, Zt],
    YY: [
      "year",
      Ot,
      function (t) {
        var e = +("" + new Date().getFullYear()).substr(0, 2);
        return +("" + (+t > 68 ? e - 1 : e) + t);
      },
    ],
    h: ["hour", It, void 0, "isPm"],
    hh: ["hour", Ot, void 0, "isPm"],
    H: ["hour", It],
    HH: ["hour", Ot],
    m: ["minute", It],
    mm: ["minute", Ot],
    s: ["second", It],
    ss: ["second", Ot],
    YYYY: ["year", "\\d{4}"],
    S: [
      "millisecond",
      "\\d",
      function (t) {
        return 100 * +t;
      },
    ],
    SS: [
      "millisecond",
      Ot,
      function (t) {
        return 10 * +t;
      },
    ],
    SSS: ["millisecond", "\\d{3}"],
    d: Ut,
    dd: Ut,
    ddd: Jt,
    dddd: Jt,
    MMM: ["month", Yt, jt("monthNamesShort")],
    MMMM: ["month", Yt, jt("monthNames")],
    a: $t,
    A: $t,
    ZZ: Kt,
    Z: Kt,
  },
  te = {
    default: "ddd MMM DD YYYY HH:mm:ss",
    shortDate: "M/D/YY",
    mediumDate: "MMM D, YYYY",
    longDate: "MMMM D, YYYY",
    fullDate: "dddd, MMMM D, YYYY",
    isoDate: "YYYY-MM-DD",
    isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
    shortTime: "HH:mm",
    mediumTime: "HH:mm:ss",
    longTime: "HH:mm:ss.SSS",
  },
  ee = function (t) {
    return zt(te, t);
  },
  ie = function (t, e, i) {
    if (
      (void 0 === e && (e = te.default),
      void 0 === i && (i = {}),
      "number" == typeof t && (t = new Date(t)),
      "[object Date]" !== Object.prototype.toString.call(t) ||
        isNaN(t.getTime()))
    )
      throw new Error("Invalid Date pass to format");
    var n = [];
    e = (e = te[e] || e).replace(Et, function (t, e) {
      return n.push(e), "@@@";
    });
    var r = zt(zt({}, Rt), i);
    return (e = e.replace(Nt, function (e) {
      return qt[e](t, r);
    })).replace(/@@@/g, function () {
      return n.shift();
    });
  };
function ne(t, e, i) {
  if ((void 0 === i && (i = {}), "string" != typeof e))
    throw new Error("Invalid format in fecha parse");
  if (((e = te[e] || e), t.length > 1e3)) return null;
  var n = {
      year: new Date().getFullYear(),
      month: 0,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      isPm: null,
      timezoneOffset: null,
    },
    r = [],
    a = [],
    s = e.replace(Et, function (t, e) {
      return a.push(Wt(e)), "@@@";
    }),
    o = {},
    l = {};
  (s = Wt(s).replace(Nt, function (t) {
    var e = Qt[t],
      i = e[0],
      n = e[1],
      a = e[3];
    if (o[i])
      throw new Error("Invalid format. " + i + " specified twice in format");
    return (o[i] = !0), a && (l[a] = !0), r.push(e), "(" + n + ")";
  })),
    Object.keys(l).forEach(function (t) {
      if (!o[t])
        throw new Error(
          "Invalid format. " + t + " is required in specified format"
        );
    }),
    (s = s.replace(/@@@/g, function () {
      return a.shift();
    }));
  var u = t.match(new RegExp(s, "i"));
  if (!u) return null;
  for (var h, c = zt(zt({}, Rt), i), f = 1; f < u.length; f++) {
    var v = r[f - 1],
      g = v[0],
      d = v[2],
      p = d ? d(u[f], c) : +u[f];
    if (null == p) return null;
    n[g] = p;
  }
  if (
    (1 === n.isPm && null != n.hour && 12 != +n.hour
      ? (n.hour = +n.hour + 12)
      : 0 === n.isPm && 12 == +n.hour && (n.hour = 0),
    null == n.timezoneOffset)
  ) {
    h = new Date(
      n.year,
      n.month,
      n.day,
      n.hour,
      n.minute,
      n.second,
      n.millisecond
    );
    for (
      var y = [
          ["month", "getMonth"],
          ["day", "getDate"],
          ["hour", "getHours"],
          ["minute", "getMinutes"],
          ["second", "getSeconds"],
        ],
        m = ((f = 0), y.length);
      f < m;
      f++
    )
      if (o[y[f][0]] && n[y[f][0]] !== h[y[f][1]]()) return null;
  } else if (
    ((h = new Date(
      Date.UTC(
        n.year,
        n.month,
        n.day,
        n.hour,
        n.minute - n.timezoneOffset,
        n.second,
        n.millisecond
      )
    )),
    n.month > 11 ||
      n.month < 0 ||
      n.day > 31 ||
      n.day < 1 ||
      n.hour > 23 ||
      n.hour < 0 ||
      n.minute > 59 ||
      n.minute < 0 ||
      n.second > 59 ||
      n.second < 0)
  )
    return null;
  return h;
}
var re = {
    format: ie,
    parse: ne,
    defaultI18n: Gt,
    setGlobalDateI18n: Ht,
    setGlobalDateMasks: ee,
  },
  ae = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        assign: zt,
        default: re,
        defaultI18n: Gt,
        format: ie,
        parse: ne,
        setGlobalDateI18n: Ht,
        setGlobalDateMasks: ee,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function se(t, e) {
  return (ae.format || re.format)(t, e);
}
function oe(t) {
  return (
    h.isString(t) &&
      (t =
        t.indexOf("T") > 0
          ? new Date(t).getTime()
          : new Date(t.replace(/-/gi, "/")).getTime()),
    h.isDate(t) && (t = t.getTime()),
    t
  );
}
var le = 1e3,
  ue = 6e4,
  he = 36e5,
  ce = 24 * he,
  fe = 31 * ce,
  ve = 365 * ce,
  ge = [
    ["HH:mm:ss", le],
    ["HH:mm:ss", 1e4],
    ["HH:mm:ss", 3e4],
    ["HH:mm", ue],
    ["HH:mm", 6e5],
    ["HH:mm", 18e5],
    ["HH", he],
    ["HH", 6 * he],
    ["HH", 12 * he],
    ["YYYY-MM-DD", ce],
    ["YYYY-MM-DD", 4 * ce],
    ["YYYY-WW", 7 * ce],
    ["YYYY-MM", fe],
    ["YYYY-MM", 4 * fe],
    ["YYYY-MM", 6 * fe],
    ["YYYY", 380 * ce],
  ];
function de(t, e, i) {
  var n,
    r =
      ((n = function (t) {
        return t[1];
      }),
      function (t, e, i, r) {
        for (
          var a = h.isNil(i) ? 0 : i, s = h.isNil(r) ? t.length : r;
          a < s;

        ) {
          var o = (a + s) >>> 1;
          n(t[o]) > e ? (s = o) : (a = o + 1);
        }
        return a;
      })(ge, (e - t) / i) - 1,
    a = ge[r];
  return r < 0 ? (a = ge[0]) : r >= ge.length && (a = h.last(ge)), a;
}
var pe = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "timeCat"), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.translate = function (t) {
        t = oe(t);
        var e = this.values.indexOf(t);
        return (
          -1 === e && (e = h.isNumber(t) && t < this.values.length ? t : NaN), e
        );
      }),
      (e.prototype.getText = function (t, e) {
        var i = this.translate(t);
        if (i > -1) {
          var n = this.values[i],
            r = this.formatter;
          return r ? r(n, e) : se(n, this.mask);
        }
        return t;
      }),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "time-cat"),
          (this.mask = "YYYY-MM-DD"),
          (this.tickCount = 7);
      }),
      (e.prototype.setDomain = function () {
        var e = this.values;
        h.each(e, function (t, i) {
          e[i] = oe(t);
        }),
          e.sort(function (t, e) {
            return t - e;
          }),
          t.prototype.setDomain.call(this);
      }),
      e
    );
  })(Dt),
  ye = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.isContinuous = !0), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.scale = function (t) {
        if (h.isNil(t)) return NaN;
        var e = this.rangeMin(),
          i = this.rangeMax();
        return this.max === this.min
          ? e
          : e + this.getScalePercent(t) * (i - e);
      }),
      (e.prototype.init = function () {
        t.prototype.init.call(this);
        var e = this.ticks,
          i = h.head(e),
          n = h.last(e);
        i < this.min && (this.min = i),
          n > this.max && (this.max = n),
          h.isNil(this.minLimit) || (this.min = i),
          h.isNil(this.maxLimit) || (this.max = n);
      }),
      (e.prototype.setDomain = function () {
        var t = h.getRange(this.values),
          e = t.min,
          i = t.max;
        h.isNil(this.min) && (this.min = e),
          h.isNil(this.max) && (this.max = i),
          this.min > this.max && ((this.min = e), (this.max = i));
      }),
      (e.prototype.calculateTicks = function () {
        var e = this,
          i = t.prototype.calculateTicks.call(this);
        return (
          this.nice ||
            (i = h.filter(i, function (t) {
              return t >= e.min && t <= e.max;
            })),
          i
        );
      }),
      (e.prototype.getScalePercent = function (t) {
        var e = this.max,
          i = this.min;
        return (t - i) / (e - i);
      }),
      (e.prototype.getInvertPercent = function (t) {
        return (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
      }),
      e
    );
  })(At),
  me = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "linear"), (e.isLinear = !0), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.invert = function (t) {
        var e = this.getInvertPercent(t);
        return this.min + e * (this.max - this.min);
      }),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "wilkinson-extended"), (this.nice = !1);
      }),
      e
    );
  })(ye);
function xe(t, e) {
  var i = Math.E;
  return e >= 0
    ? Math.pow(i, Math.log(e) / t)
    : -1 * Math.pow(i, Math.log(-e) / t);
}
function ke(t, e) {
  return 1 === t ? 1 : Math.log(e) / Math.log(t);
}
function _e(t, e, i) {
  h.isNil(i) && (i = Math.max.apply(null, t));
  var n = i;
  return (
    h.each(t, function (t) {
      t > 0 && t < n && (n = t);
    }),
    n === i && (n = i / e),
    n > 1 && (n = 1),
    n
  );
}
var Se = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "log"), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.invert = function (t) {
        var e,
          i = this.base,
          n = ke(i, this.max),
          r = this.rangeMin(),
          a = this.rangeMax() - r,
          s = this.positiveMin;
        if (s) {
          if (0 === t) return 0;
          var o = (1 / (n - (e = ke(i, s / i)))) * a;
          if (t < o) return (t / o) * s;
        } else e = ke(i, this.min);
        var l = ((t - r) / a) * (n - e) + e;
        return Math.pow(i, l);
      }),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "log"),
          (this.base = 10),
          (this.tickCount = 6),
          (this.nice = !0);
      }),
      (e.prototype.setDomain = function () {
        t.prototype.setDomain.call(this);
        var e = this.min;
        if (e < 0)
          throw new Error(
            "When you use log scale, the minimum value must be greater than zero!"
          );
        0 === e && (this.positiveMin = _e(this.values, this.base, this.max));
      }),
      (e.prototype.getScalePercent = function (t) {
        var e = this.max,
          i = this.min;
        if (e === i) return 0;
        if (t <= 0) return 0;
        var n = this.base,
          r = this.positiveMin;
        return (
          r && (i = (1 * r) / n),
          t < r
            ? t / r / (ke(n, e) - ke(n, i))
            : (ke(n, t) - ke(n, i)) / (ke(n, e) - ke(n, i))
        );
      }),
      e
    );
  })(ye),
  be = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "pow"), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.invert = function (t) {
        var e = this.getInvertPercent(t),
          i = this.exponent,
          n = xe(i, this.max),
          r = xe(i, this.min),
          a = e * (n - r) + r,
          s = a >= 0 ? 1 : -1;
        return Math.pow(a, i) * s;
      }),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "pow"),
          (this.exponent = 2),
          (this.tickCount = 5),
          (this.nice = !0);
      }),
      (e.prototype.getScalePercent = function (t) {
        var e = this.max,
          i = this.min;
        if (e === i) return 0;
        var n = this.exponent;
        return (xe(n, t) - xe(n, i)) / (xe(n, e) - xe(n, i));
      }),
      e
    );
  })(ye),
  Me = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "time"), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.getText = function (t, e) {
        var i = this.translate(t),
          n = this.formatter;
        return n ? n(i, e) : se(i, this.mask);
      }),
      (e.prototype.scale = function (e) {
        var i = e;
        return (
          (h.isString(i) || h.isDate(i)) && (i = this.translate(i)),
          t.prototype.scale.call(this, i)
        );
      }),
      (e.prototype.translate = function (t) {
        return oe(t);
      }),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "time-pretty"),
          (this.mask = "YYYY-MM-DD"),
          (this.tickCount = 7),
          (this.nice = !1);
      }),
      (e.prototype.setDomain = function () {
        var t = this.values,
          e = this.getConfig("min"),
          i = this.getConfig("max");
        if (
          ((h.isNil(e) && h.isNumber(e)) ||
            (this.min = this.translate(this.min)),
          (h.isNil(i) && h.isNumber(i)) ||
            (this.max = this.translate(this.max)),
          t && t.length)
        ) {
          var n = [],
            r = 1 / 0,
            a = r,
            s = 0;
          h.each(t, function (t) {
            var e = oe(t);
            if (isNaN(e))
              throw new TypeError("Invalid Time: " + t + " in time scale!");
            r > e ? ((a = r), (r = e)) : a > e && (a = e),
              s < e && (s = e),
              n.push(e);
          }),
            t.length > 1 && (this.minTickInterval = a - r),
            h.isNil(e) && (this.min = r),
            h.isNil(i) && (this.max = s);
        }
      }),
      e
    );
  })(me),
  we = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "quantize"), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.invert = function (t) {
        var e = this.ticks,
          i = e.length,
          n = this.getInvertPercent(t),
          r = Math.floor(n * (i - 1));
        if (r >= i - 1) return h.last(e);
        if (r < 0) return h.head(e);
        var a = e[r],
          s = r / (i - 1);
        return a + ((n - s) / ((r + 1) / (i - 1) - s)) * (e[r + 1] - a);
      }),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "r-pretty"), (this.tickCount = 5), (this.nice = !0);
      }),
      (e.prototype.calculateTicks = function () {
        var e = t.prototype.calculateTicks.call(this);
        return (
          this.nice ||
            (h.last(e) !== this.max && e.push(this.max),
            h.head(e) !== this.min && e.unshift(this.min)),
          e
        );
      }),
      (e.prototype.getScalePercent = function (t) {
        var e = this.ticks;
        if (t < h.head(e)) return 0;
        if (t > h.last(e)) return 1;
        var i = 0;
        return (
          h.each(e, function (e, n) {
            if (!(t >= e)) return !1;
            i = n;
          }),
          i / (e.length - 1)
        );
      }),
      e
    );
  })(ye),
  Pe = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.type = "quantile"), e;
    }
    return (
      h.__extends(e, t),
      (e.prototype.initCfg = function () {
        (this.tickMethod = "quantile"), (this.tickCount = 5), (this.nice = !0);
      }),
      e
    );
  })(we),
  Ce = {};
function Te(t) {
  return Ce[t];
}
function Ae(t, e) {
  if (Te(t)) throw new Error("type '" + t + "' existed.");
  Ce[t] = e;
}
var De = (function (t) {
  function e() {
    var e = (null !== t && t.apply(this, arguments)) || this;
    return (e.type = "identity"), (e.isIdentity = !0), e;
  }
  return (
    h.__extends(e, t),
    (e.prototype.calculateTicks = function () {
      return this.values;
    }),
    (e.prototype.scale = function (t) {
      return this.values[0] !== t && h.isNumber(t) ? t : this.range[0];
    }),
    (e.prototype.invert = function (t) {
      var e = this.range;
      return t < e[0] || t > e[1] ? NaN : this.values[0];
    }),
    e
  );
})(At);
function Ne(t) {
  var e = t.values,
    i = t.tickInterval,
    n = t.tickCount,
    r = t.showLast;
  if (h.isNumber(i)) {
    var a = h.filter(e, function (t, e) {
        return e % i == 0;
      }),
      s = h.last(e);
    return r && h.last(a) !== s && a.push(s), a;
  }
  var o = e.length,
    l = t.min,
    u = t.max;
  if (
    (h.isNil(l) && (l = 0),
    h.isNil(u) && (u = e.length - 1),
    !h.isNumber(n) || n >= o)
  )
    return e.slice(l, u + 1);
  if (n <= 0 || u <= 0) return [];
  for (
    var c = 1 === n ? o : Math.floor(o / (n - 1)), f = [], v = l, g = 0;
    g < n && !(v >= u);
    g++
  )
    (v = Math.min(l + g * c, u)),
      g === n - 1 && r ? f.push(e[u]) : f.push(e[v]);
  return f;
}
var Ie = Math.sqrt(50),
  Oe = Math.sqrt(10),
  Ye = Math.sqrt(2),
  Ee = (function () {
    function t() {
      this._domain = [0, 1];
    }
    return (
      (t.prototype.domain = function (t) {
        return t
          ? ((this._domain = Array.from(t, Number)), this)
          : this._domain.slice();
      }),
      (t.prototype.nice = function (t) {
        var e, i;
        void 0 === t && (t = 5);
        var n,
          r = this._domain.slice(),
          a = 0,
          s = this._domain.length - 1,
          o = this._domain[a],
          l = this._domain[s];
        return (
          l < o &&
            ((o = (e = [l, o])[0]),
            (l = e[1]),
            (a = (i = [s, a])[0]),
            (s = i[1])),
          (n = Fe(o, l, t)) > 0
            ? (n = Fe(
                (o = Math.floor(o / n) * n),
                (l = Math.ceil(l / n) * n),
                t
              ))
            : n < 0 &&
              (n = Fe(
                (o = Math.ceil(o * n) / n),
                (l = Math.floor(l * n) / n),
                t
              )),
          n > 0
            ? ((r[a] = Math.floor(o / n) * n),
              (r[s] = Math.ceil(l / n) * n),
              this.domain(r))
            : n < 0 &&
              ((r[a] = Math.ceil(o * n) / n),
              (r[s] = Math.floor(l * n) / n),
              this.domain(r)),
          this
        );
      }),
      (t.prototype.ticks = function (t) {
        return (
          void 0 === t && (t = 5),
          (function (t, e, i) {
            var n,
              r,
              a,
              s,
              o = -1;
            if (((i = +i), (t = +t) == (e = +e) && i > 0)) return [t];
            if (
              ((n = e < t) && ((r = t), (t = e), (e = r)),
              0 === (s = Fe(t, e, i)) || !isFinite(s))
            )
              return [];
            if (s > 0)
              for (
                t = Math.ceil(t / s),
                  e = Math.floor(e / s),
                  a = new Array((r = Math.ceil(e - t + 1)));
                ++o < r;

              )
                a[o] = (t + o) * s;
            else
              for (
                t = Math.floor(t * s),
                  e = Math.ceil(e * s),
                  a = new Array((r = Math.ceil(t - e + 1)));
                ++o < r;

              )
                a[o] = (t - o) / s;
            return n && a.reverse(), a;
          })(this._domain[0], this._domain[this._domain.length - 1], t || 5)
        );
      }),
      t
    );
  })();
function Fe(t, e, i) {
  var n = (e - t) / Math.max(0, i),
    r = Math.floor(Math.log(n) / Math.LN10),
    a = n / Math.pow(10, r);
  return r >= 0
    ? (a >= Ie ? 10 : a >= Oe ? 5 : a >= Ye ? 2 : 1) * Math.pow(10, r)
    : -Math.pow(10, -r) / (a >= Ie ? 10 : a >= Oe ? 5 : a >= Ye ? 2 : 1);
}
function je(t, e, i) {
  return (
    ("ceil" === i
      ? Math.ceil(t / e)
      : "floor" === i
      ? Math.floor(t / e)
      : Math.round(t / e)) * e
  );
}
function ze(t, e, i) {
  var n = je(t, i, "floor"),
    r = je(e, i, "ceil");
  (n = h.fixedBase(n, i)), (r = h.fixedBase(r, i));
  for (
    var a = [], s = Math.max((r - n) / (Math.pow(2, 12) - 1), i), o = n;
    o <= r;
    o += s
  ) {
    var l = h.fixedBase(o, s);
    a.push(l);
  }
  return { min: n, max: r, ticks: a };
}
function Be(t, e, i) {
  var n,
    r = t.minLimit,
    a = t.maxLimit,
    s = t.min,
    o = t.max,
    l = t.tickCount,
    u = void 0 === l ? 5 : l,
    c = h.isNil(r) ? (h.isNil(e) ? s : e) : r,
    f = h.isNil(a) ? (h.isNil(i) ? o : i) : a;
  if ((c > f && ((f = (n = [c, f])[0]), (c = n[1])), u <= 2)) return [c, f];
  for (var v = (f - c) / (u - 1), g = [], d = 0; d < u; d++) g.push(c + v * d);
  return g;
}
function Le(t) {
  return Math.abs(t) < 1e-15 ? t : parseFloat(t.toFixed(15));
}
var Xe = [1, 5, 2, 2.5, 4, 3],
  Ge = 100 * Number.EPSILON;
function Re(t, e, i, n, r, a) {
  var s = h.size(e),
    o = h.indexOf(e, t),
    l = 0,
    u = (function (t, e) {
      return ((t % e) + e) % e;
    })(n, a);
  return (
    (u < Ge || a - u < Ge) && n <= 0 && r >= 0 && (l = 1),
    1 - o / (s - 1) - i + l
  );
}
function He(t, e, i) {
  var n = h.size(e);
  return 1 - h.indexOf(e, t) / (n - 1) - i + 1;
}
function We(t, e, i, n, r, a) {
  var s = (t - 1) / (a - r),
    o = (e - 1) / (Math.max(a, n) - Math.min(i, r));
  return 2 - Math.max(s / o, o / s);
}
function Ve(t, e) {
  return t >= e ? 2 - (t - 1) / (e - 1) : 1;
}
function qe(t, e, i, n) {
  var r = e - t;
  return (
    1 - (0.5 * (Math.pow(e - n, 2) + Math.pow(t - i, 2))) / Math.pow(0.1 * r, 2)
  );
}
function Ze(t, e, i) {
  var n = e - t;
  if (i > n) {
    var r = (i - n) / 2;
    return 1 - Math.pow(r, 2) / Math.pow(0.1 * n, 2);
  }
  return 1;
}
function Ue(t, e, i) {
  if ((void 0 === i && (i = 5), t === e)) return { max: e, min: t, ticks: [t] };
  var n = i < 0 ? 0 : Math.round(i);
  if (0 === n) return { max: e, min: t, ticks: [] };
  var r = (e - t) / n,
    a = Math.pow(10, Math.floor(Math.log10(r))),
    s = a;
  2 * a - r < 1.5 * (r - s) &&
    5 * a - r < 2.75 * (r - (s = 2 * a)) &&
    10 * a - r < 1.5 * (r - (s = 5 * a)) &&
    (s = 10 * a);
  for (
    var o = Math.ceil(e / s),
      l = Math.floor(t / s),
      u = Math.max(o * s, e),
      h = Math.min(l * s, t),
      c = Math.floor((u - h) / s) + 1,
      f = new Array(c),
      v = 0;
    v < c;
    v++
  )
    f[v] = Le(h + v * s);
  return { min: h, max: u, ticks: f };
}
function Je(t, e) {
  var i = t.length * e;
  return 1 === e
    ? t[t.length - 1]
    : 0 === e
    ? t[0]
    : i % 1 != 0
    ? t[Math.ceil(i) - 1]
    : t.length % 2 == 0
    ? (t[i - 1] + t[i]) / 2
    : t[i];
}
function $e(t) {
  return new Date(t).getFullYear();
}
function Ke(t) {
  return new Date(t, 0, 1).getTime();
}
function Qe(t) {
  return new Date(t).getMonth();
}
function ti(t, e) {
  return new Date(t, e, 1).getTime();
}
Tt("cat", Ne),
  Tt("time-cat", function (t) {
    return Ne(h.__assign({ showLast: !0 }, t));
  }),
  Tt("wilkinson-extended", function (t) {
    var e = t.min,
      i = t.max,
      n = t.tickCount,
      r = t.nice,
      a = t.tickInterval,
      s = t.minLimit,
      o = t.maxLimit,
      l = (function (t, e, i, n, r, a) {
        void 0 === i && (i = 5),
          void 0 === n && (n = !0),
          void 0 === r && (r = Xe),
          void 0 === a && (a = [0.25, 0.2, 0.5, 0.05]);
        var s = i < 0 ? 0 : Math.round(i);
        if (
          Number.isNaN(t) ||
          Number.isNaN(e) ||
          "number" != typeof t ||
          "number" != typeof e ||
          !s
        )
          return { min: 0, max: 0, ticks: [] };
        if (e - t < 1e-15 || 1 === s) return { min: t, max: e, ticks: [t] };
        if (e - t > 1e148) {
          var o = (e - t) / (S = i || 5);
          return {
            min: t,
            max: e,
            ticks: Array(S)
              .fill(null)
              .map(function (e, i) {
                return Le(t + o * i);
              }),
          };
        }
        for (
          var l = { score: -2, lmin: 0, lmax: 0, lstep: 0 }, u = 1;
          u < 1 / 0;

        ) {
          for (var c = 0; c < r.length; c += 1) {
            var f = r[c],
              v = He(f, r, u);
            if (a[0] * v + a[1] + a[2] + a[3] < l.score) {
              u = 1 / 0;
              break;
            }
            for (var g = 2; g < 1 / 0; ) {
              var d = Ve(g, s);
              if (a[0] * v + a[1] + a[2] * d + a[3] < l.score) break;
              for (
                var p = (e - t) / (g + 1) / u / f, y = Math.ceil(Math.log10(p));
                y < 1 / 0;

              ) {
                var m = u * f * Math.pow(10, y),
                  x = Ze(t, e, m * (g - 1));
                if (a[0] * v + a[1] * x + a[2] * d + a[3] < l.score) break;
                var k = Math.floor(e / m) * u - (g - 1) * u,
                  _ = Math.ceil(t / m) * u;
                if (k <= _)
                  for (var S = _ - k, b = 0; b <= S; b += 1) {
                    var M = (k + b) * (m / u),
                      w = M + m * (g - 1),
                      P = m,
                      C = Re(f, r, u, M, w, P),
                      T = qe(t, e, M, w),
                      A = We(g, s, t, e, M, w),
                      D = a[0] * C + a[1] * T + a[2] * A + 1 * a[3];
                    D > l.score &&
                      (!n || (M <= t && w >= e)) &&
                      ((l.lmin = M),
                      (l.lmax = w),
                      (l.lstep = P),
                      (l.score = D));
                  }
                y += 1;
              }
              g += 1;
            }
          }
          u += 1;
        }
        var N = Le(l.lmax),
          I = Le(l.lmin),
          O = Le(l.lstep),
          Y =
            Math.floor(
              (function (t) {
                return Math.round(1e12 * t) / 1e12;
              })((N - I) / O)
            ) + 1,
          E = new Array(Y);
        for (E[0] = Le(I), c = 1; c < Y; c++) E[c] = Le(E[c - 1] + O);
        return {
          min: Math.min(t, h.head(E)),
          max: Math.max(e, h.last(E)),
          ticks: E,
        };
      })(e, i, n, r).ticks;
    return h.isNil(s) && h.isNil(o)
      ? a
        ? ze(e, i, a).ticks
        : l
      : Be(t, h.head(l), h.last(l));
  }),
  Tt("r-pretty", function (t) {
    var e = t.min,
      i = t.max,
      n = t.tickCount,
      r = t.tickInterval,
      a = t.minLimit,
      s = t.maxLimit,
      o = Ue(e, i, n).ticks;
    return h.isNil(a) && h.isNil(s)
      ? r
        ? ze(e, i, r).ticks
        : o
      : Be(t, h.head(o), h.last(o));
  }),
  Tt("time", function (t) {
    var e = t.min,
      i = t.max,
      n = t.minTickInterval,
      r = t.tickInterval,
      a = t.tickCount;
    if (r) a = Math.ceil((i - e) / r);
    else {
      var s = (i - e) / (r = de(e, i, a)[1]) / a;
      s > 1 && (r *= Math.ceil(s)), n && r < n && (r = n);
    }
    r = Math.max(Math.floor((i - e) / (Math.pow(2, 12) - 1)), r);
    for (var o = [], l = e; l < i + r; l += r) o.push(l);
    return o;
  }),
  Tt("time-pretty", function (t) {
    var e = t.min,
      i = t.max,
      n = t.minTickInterval,
      r = t.tickCount,
      a = t.tickInterval,
      s = [];
    a || ((a = (i - e) / r), n && a < n && (a = n)),
      (a = Math.max(Math.floor((i - e) / (Math.pow(2, 12) - 1)), a));
    var o = $e(e);
    if (a > ve)
      for (var l = $e(i), u = Math.ceil(a / ve), h = o; h <= l + u; h += u)
        s.push(Ke(h));
    else if (a > fe) {
      var c = Math.ceil(a / fe),
        f = Qe(e),
        v = (function (t, e) {
          var i = $e(t),
            n = $e(e),
            r = Qe(t);
          return 12 * (n - i) + ((Qe(e) - r) % 12);
        })(e, i);
      for (h = 0; h <= v + c; h += c) s.push(ti(o, h + f));
    } else if (a > ce) {
      var g = (x = new Date(e)).getFullYear(),
        d = x.getMonth(),
        p = x.getDate(),
        y = Math.ceil(a / ce),
        m = (function (t, e) {
          return Math.ceil((e - t) / ce);
        })(e, i);
      for (h = 0; h < m + y; h += y) s.push(new Date(g, d, p + h).getTime());
    } else if (a > he) {
      (g = (x = new Date(e)).getFullYear()),
        (d = x.getMonth()),
        (y = x.getDate());
      var x,
        k = x.getHours(),
        _ = Math.ceil(a / he),
        S = (function (t, e) {
          return Math.ceil((e - t) / he);
        })(e, i);
      for (h = 0; h <= S + _; h += _)
        s.push(new Date(g, d, y, k + h).getTime());
    } else if (a > ue) {
      var b = (function (t, e) {
          return Math.ceil((e - t) / 6e4);
        })(e, i),
        M = Math.ceil(a / ue);
      for (h = 0; h <= b + M; h += M) s.push(e + h * ue);
    } else {
      var w = a;
      w < le && (w = le);
      var P = Math.floor(e / le) * le,
        C = Math.ceil((i - e) / le),
        T = Math.ceil(w / le);
      for (h = 0; h < C + T; h += T) s.push(P + h * le);
    }
    return s.length, s;
  }),
  Tt("log", function (t) {
    var e,
      i = t.base,
      n = t.tickCount,
      r = t.min,
      a = t.max,
      s = t.values,
      o = ke(i, a);
    if (r > 0) e = Math.floor(ke(i, r));
    else {
      var l = _e(s, i, a);
      e = Math.floor(ke(i, l));
    }
    for (var u = o - e, h = Math.ceil(u / n), c = [], f = e; f < o + h; f += h)
      c.push(Math.pow(i, f));
    return r <= 0 && c.unshift(0), c;
  }),
  Tt("pow", function (t) {
    var e = t.exponent,
      i = t.tickCount,
      n = Math.ceil(xe(e, t.max));
    return Ue(Math.floor(xe(e, t.min)), n, i).ticks.map(function (t) {
      var i = t >= 0 ? 1 : -1;
      return Math.pow(t, e) * i;
    });
  }),
  Tt("quantile", function (t) {
    var e = t.tickCount,
      i = t.values;
    if (!i || !i.length) return [];
    for (
      var n = i.slice().sort(function (t, e) {
          return t - e;
        }),
        r = [],
        a = 0;
      a < e;
      a++
    ) {
      var s = a / (e - 1);
      r.push(Je(n, s));
    }
    return r;
  }),
  Tt("d3-linear", function (t) {
    var e = t.min,
      i = t.max,
      n = t.tickInterval,
      r = t.minLimit,
      a = t.maxLimit,
      s = (function (t) {
        var e = t.min,
          i = t.max,
          n = t.nice,
          r = t.tickCount,
          a = new Ee();
        return a.domain([e, i]), n && a.nice(r), a.ticks(r);
      })(t);
    return h.isNil(r) && h.isNil(a)
      ? n
        ? ze(e, i, n).ticks
        : s
      : Be(t, h.head(s), h.last(s));
  }),
  Ae("cat", Dt),
  Ae("category", Dt),
  Ae("identity", De),
  Ae("linear", me),
  Ae("log", Se),
  Ae("pow", be),
  Ae("time", Me),
  Ae("timeCat", pe),
  Ae("quantize", we),
  Ae("quantile", Pe);
var ei = function (t) {
    var e = t.values,
      i = t.tickCount;
    if (!i) return e;
    if (e.length <= 1) return e;
    for (
      var n = parseInt(e.length / (i - 1)) || 1, r = [], a = 0;
      a < e.length;
      a += n
    )
      r.push(e[a]);
    var s = e[e.length - 1];
    return (
      r[r.length - 1] !== s &&
        (r.length >= i ? (r[r.length - 1] = s) : r.push(s)),
      r
    );
  },
  ii = [1, 1.2, 1.5, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10];
function ni(t) {
  var e = 1;
  if (0 === (t = Math.abs(t))) return e;
  if (t < 1) {
    for (var i = 0; t < 1; ) (e /= 10), (t *= 10), i++;
    return e.toString().length > 12 && (e = parseFloat(e.toFixed(i))), e;
  }
  for (; t > 10; ) (e *= 10), (t /= 10);
  return e;
}
function ri(t) {
  var e = t.interval,
    i = t.tickCount,
    n = t.max,
    r = t.min;
  return Math.floor(r / e) * e + (i - 1) * e >= n;
}
function ai(t) {
  var e = t.toString(),
    i = e.indexOf("."),
    n = e.indexOf("e-"),
    r = n >= 0 ? parseInt(e.substr(n + 2), 10) : e.substr(i + 1).length;
  return r > 20 && (r = 20), r;
}
function si(t, e) {
  return parseFloat(t.toFixed(e));
}
var oi = Te("linear"),
  li = Te("identity"),
  ui = Te("category"),
  hi = Te("timeCat");
function ci(t) {
  Object.keys(t).forEach(function (e) {
    delete t[e];
  });
}
Tt("cat", ei),
  Tt("time-cat", ei),
  Tt("wilkinson-extended", function (t) {
    var e = t || {},
      i = e.tickCount,
      n = e.tickInterval,
      r = t || {},
      a = r.min,
      s = r.max;
    (a = isNaN(a) ? 0 : a), (s = isNaN(s) ? 0 : s);
    var o = i && i >= 2 ? i : 5,
      l =
        n ||
        (function (t) {
          var e = t.tickCount,
            i = t.min,
            n = t.max;
          if (i === n) return 1 * ni(n);
          for (
            var r = (n - i) / (e - 1),
              a = ni(r),
              s = r / a,
              o = n / a,
              l = i / a,
              u = 0,
              h = 0;
            h < ii.length;
            h++
          )
            if (s <= ii[h]) {
              u = h;
              break;
            }
          var c =
            i < 0 && n > 0 && 2 === e
              ? ii[u]
              : (function t(e, i, n, r) {
                  for (var a = !1, s = ii[e], o = e; o < ii.length; o++)
                    if (ri({ interval: ii[o], tickCount: i, max: r, min: n })) {
                      (s = ii[o]), (a = !0);
                      break;
                    }
                  return a ? s : 10 * t(0, i, n / 10, r / 10);
                })(u, e, l, o);
          return si(c * a, ai(c) + ai(a));
        })({ tickCount: o, max: s, min: a }),
      u = Math.floor(a / l) * l;
    if (n) {
      var h = Math.abs(Math.ceil((s - u) / n)) + 1;
      o = Math.max(o, h);
    }
    var c = [],
      f = 0,
      v = ai(l);
    if (a < 0 && s > 0 && 2 === o)
      return [si(u, v), si(Math.ceil(s / l) * l, v)];
    for (; f < o; ) c.push(si(u + f * l, v)), f++;
    return c;
  }),
  (At.Linear = oi),
  (At.Identity = li),
  (At.Category = ui),
  (At.Cat = ui),
  (At.TimeCat = hi);
var fi = (function () {
    function t(e) {
      o(this, t), (this.defs = {}), (this.scales = {}), h.mix(this, e);
    }
    return (
      l(t, [
        {
          key: "setFieldDef",
          value: function (t, e) {
            var i = this.defs;
            h.isObject(t) ? h.mix(i, t) : (i[t] = e), this.updateScales();
          },
        },
        {
          key: "_getDef",
          value: function (t) {
            var e = this.defs,
              i = null;
            return (
              (W.scales[t] || e[t]) &&
                ((i = h.mix({}, W.scales[t])),
                h.each(e[t], function (t, e) {
                  h.isNil(t) ? delete i[e] : (i[e] = t);
                })),
              i
            );
          },
        },
        {
          key: "_getDefaultType",
          value: function (t, e, i) {
            if (i && i.type) return i.type;
            var n = "linear",
              r = g(e, t);
            return h.isArray(r) && (r = r[0]), h.isString(r) && (n = "cat"), n;
          },
        },
        {
          key: "_getScaleDef",
          value: function (t, e, i, n) {
            var r,
              a = {
                field: e,
                values: (r = n && n.values ? n.values : v(i, e)),
              };
            if ("cat" !== t && "timeCat" !== t) {
              if (!n || !n.min || !n.max) {
                var s = m(r),
                  o = s.min,
                  l = s.max;
                (a.min = o), (a.max = l), (a.nice = !0);
              }
            } else a.isRounding = !1;
            return a;
          },
        },
        {
          key: "_adjustRange",
          value: function (t, e) {
            var i = e.range,
              n = e.values;
            if ("linear" === t || i || !n) return e;
            var r = n.length;
            if (1 === r) e.range = [0.5, 1];
            else {
              var a = this.chart.get("coord"),
                s = W.widthRatio.multiplePie,
                o = 0;
              !(function (t) {
                if (!t.isPolar) return !1;
                var e = t.startAngle,
                  i = t.endAngle;
                return !(!h.isNil(e) && !h.isNil(i) && i - e < 2 * Math.PI);
              })(a)
                ? ((o = (1 / r) * 0.5), (e.range = [o, 1 - o]))
                : a.transposed
                ? ((o = (1 / r) * s), (e.range = [o / 2, 1 - o / 2]))
                : (e.range = [0, 1 - 1 / r]);
            }
            return e;
          },
        },
        {
          key: "_getScaleCfg",
          value: function (t, e) {
            var i = this,
              n = i._getDef(t);
            if (!e || !e.length)
              return n && n.type
                ? ((n.field = t), { type: n.type, cfg: n })
                : {
                    type: "identity",
                    cfg: { value: t, field: t.toString(), values: [t] },
                  };
            var r = e[0][t];
            if (
              (null === r && (r = g(e, t)), h.isNumber(t) || (h.isNil(r) && !n))
            )
              return {
                type: "identity",
                cfg: { value: t, field: t.toString(), values: [t] },
              };
            var a = i._getDefaultType(t, e, n),
              s = i._getScaleDef(a, t, e, n);
            return (
              n && h.mix(s, n), { type: a, cfg: (s = this._adjustRange(a, s)) }
            );
          },
        },
        {
          key: "createScale",
          value: function (t, e) {
            var i = this.scales,
              n = this._getScaleCfg(t, e),
              r = n.type,
              a = n.cfg,
              s = i[t];
            if (s && s.type === r) return s.change(a), s;
            var o = new (Te(r))(a);
            return (i[t] = o), o;
          },
        },
        {
          key: "_updateScale",
          value: function (t) {
            var e = t.field,
              i = this.chart._getScaleData(e),
              n = this._getScaleCfg(e, i).cfg;
            t.change(n);
          },
        },
        {
          key: "updateScales",
          value: function () {
            var t = this,
              e = this.scales;
            h.each(e, function (e) {
              t._updateScale(e);
            });
          },
        },
        {
          key: "adjustStartZero",
          value: function (t) {
            var e = this.defs,
              i = t.field,
              n = t.min,
              r = t.max;
            (e[i] && e[i].min) ||
              (n > 0 ? t.change({ min: 0 }) : r < 0 && t.change({ max: 0 }));
          },
        },
        {
          key: "clear",
          value: function () {
            ci(this.defs), ci(this.scales), (this.data = null);
          },
        },
      ]),
      t
    );
  })(),
  vi = (function () {
    function t(e) {
      o(this, t), this._initDefaultCfg(), h.mix(this, e), this.draw();
    }
    return (
      l(t, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.ticks = []),
              (this.tickLine = {}),
              (this.offsetFactor = 1),
              (this.frontContainer = null),
              (this.backContainer = null),
              (this.gridPoints = []);
          },
        },
        {
          key: "draw",
          value: function () {
            var t = this.line,
              e = this.tickLine,
              i = this.label,
              n = this.grid;
            n && this.drawGrid(n),
              e && this.drawTicks(e),
              t && this.drawLine(t),
              i && this.drawLabels();
          },
        },
        {
          key: "drawTicks",
          value: function (t) {
            var e = this,
              i = e.ticks,
              n = t.length,
              r = e.getContainer(t.top);
            h.each(i, function (i) {
              var a = e.getOffsetPoint(i.value),
                s = e.getSidePoint(a, n);
              r.addShape("line", {
                className: "axis-tick",
                attrs: h.mix({ x1: a.x, y1: a.y, x2: s.x, y2: s.y }, t),
              })._id = e._id + "-ticks";
            });
          },
        },
        {
          key: "drawLabels",
          value: function () {
            var t = this,
              e = t.labelOffset,
              i = t.labels;
            h.each(i, function (i) {
              var n = t.getContainer(i.get("top")),
                r = t.getOffsetPoint(i.get("value")),
                a = t.getSidePoint(r, e),
                s = a.x,
                o = a.y;
              i.attr(
                h.mix(
                  { x: s, y: o },
                  t.getTextAlignInfo(r, e),
                  i.get("textStyle")
                )
              ),
                (i._id = t._id + "-" + i.attr("text")),
                n.add(i);
            });
          },
        },
        { key: "drawLine", value: function () {} },
        {
          key: "drawGrid",
          value: function (t) {
            var e = this,
              i = e.gridPoints,
              n = e.ticks,
              r = t,
              a = i.length;
            h.each(i, function (i, s) {
              if (h.isFunction(t)) {
                var o = n[s] || {},
                  l = t(o.text, s, a);
                r = l ? h.mix({}, W._defaultAxis.grid, l) : null;
              }
              if (r) {
                var u,
                  c = r.type,
                  f = i.points,
                  v = e.getContainer(r.top);
                if ("arc" === c) {
                  var g = e.center,
                    d = e.startAngle,
                    p = e.endAngle,
                    y = Q.length([f[0].x - g.x, f[0].y - g.y]);
                  u = v.addShape("Arc", {
                    className: "axis-grid",
                    attrs: h.mix(
                      { x: g.x, y: g.y, startAngle: d, endAngle: p, r: y },
                      r
                    ),
                  });
                } else
                  u = v.addShape("Polyline", {
                    className: "axis-grid",
                    attrs: h.mix({ points: f }, r),
                  });
                u._id = i._id;
              }
            });
          },
        },
        { key: "getOffsetPoint", value: function () {} },
        { key: "getAxisVector", value: function () {} },
        {
          key: "getOffsetVector",
          value: function (t, e) {
            var i = this.getAxisVector(t),
              n = Q.normalize([], i),
              r = this.offsetFactor,
              a = [-1 * n[1] * r, n[0] * r];
            return Q.scale([], a, e);
          },
        },
        {
          key: "getSidePoint",
          value: function (t, e) {
            var i = this.getOffsetVector(t, e);
            return { x: t.x + i[0], y: t.y + i[1] };
          },
        },
        {
          key: "getTextAlignInfo",
          value: function (t, e) {
            var i = this.getOffsetVector(t, e);
            return {
              textAlign: i[0] > 0 ? "left" : i[0] < 0 ? "right" : "center",
              textBaseline: i[1] > 0 ? "top" : i[1] < 0 ? "bottom" : "middle",
            };
          },
        },
        {
          key: "getContainer",
          value: function (t) {
            var e = this.frontContainer,
              i = this.backContainer;
            return t ? e : i;
          },
        },
      ]),
      t
    );
  })();
vi.Line = (function (t) {
  a(i, vi);
  var e = s(i);
  function i() {
    return o(this, i), e.apply(this, arguments);
  }
  return (
    l(i, [
      {
        key: "_initDefaultCfg",
        value: function () {
          n(r(i.prototype), "_initDefaultCfg", this).call(this),
            (this.start = null),
            (this.end = null);
        },
      },
      {
        key: "getOffsetPoint",
        value: function (t) {
          var e = this.start,
            i = this.end;
          return { x: e.x + (i.x - e.x) * t, y: e.y + (i.y - e.y) * t };
        },
      },
      {
        key: "getAxisVector",
        value: function () {
          var t = this.start,
            e = this.end;
          return [e.x - t.x, e.y - t.y];
        },
      },
      {
        key: "drawLine",
        value: function (t) {
          var e = this.getContainer(t.top),
            i = this.start,
            n = this.end;
          e.addShape("line", {
            className: "axis-line",
            attrs: h.mix({ x1: i.x, y1: i.y, x2: n.x, y2: n.y }, t),
          });
        },
      },
    ]),
    i
  );
})();
var gi = (function () {
  function t(e) {
    o(this, t),
      (this.axisCfg = {}),
      (this.frontPlot = null),
      (this.backPlot = null),
      (this.axes = {}),
      h.mix(this, e);
  }
  return (
    l(t, [
      {
        key: "_isHide",
        value: function (t) {
          var e = this.axisCfg;
          return !e || !1 === e[t];
        },
      },
      {
        key: "_getLinePosition",
        value: function (t, e, i, n) {
          var r = "",
            a = t.field,
            s = this.axisCfg;
          return (
            s[a] && s[a].position
              ? (r = s[a].position)
              : "x" === e
              ? (r = n ? "left" : "bottom")
              : "y" === e && ((r = i ? "right" : "left"), n && (r = "bottom")),
            r
          );
        },
      },
      {
        key: "_getLineCfg",
        value: function (t, e, i) {
          var n,
            r,
            a = 1;
          return (
            "x" === e
              ? ((n = { x: 0, y: 0 }), (r = { x: 1, y: 0 }))
              : "right" === i
              ? ((n = { x: 1, y: 0 }), (r = { x: 1, y: 1 }))
              : ((n = { x: 0, y: 0 }), (r = { x: 0, y: 1 }), (a = -1)),
            t.transposed && (a *= -1),
            {
              offsetFactor: a,
              start: t.convertPoint(n),
              end: t.convertPoint(r),
            }
          );
        },
      },
      {
        key: "_getCircleCfg",
        value: function (t) {
          return {
            startAngle: t.startAngle,
            endAngle: t.endAngle,
            center: t.center,
            radius: t.circleRadius,
          };
        },
      },
      {
        key: "_getRadiusCfg",
        value: function (t) {
          var e, i;
          return (
            t.transposed
              ? ((e = { x: 0, y: 0 }), (i = { x: 1, y: 0 }))
              : ((e = { x: 0, y: 0 }), (i = { x: 0, y: 1 })),
            {
              offsetFactor: -1,
              start: t.convertPoint(e),
              end: t.convertPoint(i),
            }
          );
        },
      },
      {
        key: "_getAxisCfg",
        value: function (t, e, i, n, r) {
          var a = this,
            s = this,
            o = this.axisCfg,
            l = e.getTicks(),
            u = h.deepMix(
              {
                ticks: l,
                frontContainer: this.frontPlot,
                backContainer: this.backPlot,
              },
              r,
              o[e.field]
            ),
            c = [],
            f = u.label,
            v = l.length,
            g = 0,
            d = 0,
            p = f;
          return (
            h.each(l, function (t, e) {
              if (h.isFunction(f)) {
                var i = f(t.text, e, v);
                p = i ? h.mix({}, W._defaultAxis.label, i) : null;
              }
              if (p) {
                var n = {};
                p.textAlign && (n.textAlign = p.textAlign),
                  p.textBaseline && (n.textBaseline = p.textBaseline);
                var r = (p.top ? a.frontPlot : a.backPlot).addShape("text", {
                  className: "axis-label",
                  aria: !1,
                  attrs: h.mix(
                    {
                      x: 0,
                      y: 0,
                      text: t.text,
                      fontFamily: s.chart.get("canvas").get("fontFamily"),
                    },
                    p
                  ),
                  value: t.value,
                  textStyle: n,
                  top: p.top,
                  context: s.chart.get("canvas").get("context"),
                });
                c.push(r);
                var o = r.getBBox(),
                  l = o.width,
                  u = o.height;
                (g = Math.max(g, l)), (d = Math.max(d, u));
              }
            }),
            (u.labels = c),
            (u.maxWidth = g),
            (u.maxHeight = d),
            u
          );
        },
      },
      {
        key: "_createAxis",
        value: function (t, e, i, n) {
          var r,
            a,
            s,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : "",
            l = t.type,
            u = t.transposed;
          if ("cartesian" === l || "rect" === l) {
            var h = this._getLinePosition(e, n, o, u);
            ((s = W.axis[h]).position = h), (r = "Line"), (a = h);
          } else
            ("x" === n && !u) || ("y" === n && u)
              ? ((s = W.axis.circle), (r = "Circle"), (a = "circle"))
              : ((s = W.axis.radius), (r = "Line"), (a = "radius"));
          var c = this._getAxisCfg(t, e, i, n, s);
          (c.type = r),
            (c.dimType = n),
            (c.verticalScale = i),
            (c.index = o),
            (this.axes[a] = c);
        },
      },
      {
        key: "createAxis",
        value: function (t, e, i) {
          var n = this;
          e && !n._isHide(e.field) && n._createAxis(t, e, i[0], "x"),
            h.each(i, function (i, r) {
              n._isHide(i.field) || n._createAxis(t, i, e, "y", r);
            });
          var r = this.axes,
            a = n.chart;
          if (a._isAutoPadding()) {
            var s = j(a.get("padding")),
              o = j(a.get("appendPadding")),
              l = a.get("legendRange") || {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              u = [
                "auto" === s[0] ? l.top + 2 * o[0] : s[0],
                "auto" === s[1] ? l.right + o[1] : s[1],
                "auto" === s[2] ? l.bottom + o[2] : s[2],
                "auto" === s[3] ? l.left + o[3] : s[3],
              ];
            if (t.isPolar) {
              var c = r.circle;
              if (c) {
                var f = c.maxHeight,
                  v = c.maxWidth,
                  g = c.labelOffset;
                (u[0] += f + g),
                  (u[1] += v + g),
                  (u[2] += f + g),
                  (u[3] += v + g);
              }
            } else {
              if (r.right && "auto" === s[1]) {
                var d = r.right,
                  p = d.maxWidth,
                  y = d.labelOffset;
                u[1] += p + y;
              }
              if (r.left && "auto" === s[3]) {
                var m = r.left,
                  x = m.maxWidth,
                  k = m.labelOffset;
                u[3] += x + k;
              }
              if (r.bottom && "auto" === s[2]) {
                var _ = r.bottom,
                  S = _.maxHeight,
                  b = _.labelOffset;
                u[2] += S + b;
              }
            }
            a.set("_padding", u), a._updateLayout(u);
          }
          h.each(r, function (e) {
            var i,
              r = e.type,
              a = e.grid,
              s = e.verticalScale,
              o = e.ticks,
              l = e.dimType,
              u = e.position,
              c = e.index;
            if (
              (t.isPolar
                ? "Line" === r
                  ? (i = n._getRadiusCfg(t))
                  : "Circle" === r && (i = n._getCircleCfg(t))
                : (i = n._getLineCfg(t, l, u)),
              a && s)
            ) {
              var f = [],
                v = (function (t) {
                  var e = t.slice(0);
                  if (e.length > 0) {
                    var i = e[0],
                      n = e[e.length - 1];
                    0 !== i.value && e.unshift({ value: 0 }),
                      1 !== n.value && e.push({ value: 1 });
                  }
                  return e;
                })(s.getTicks());
              h.each(o, function (e) {
                var i = [];
                h.each(v, function (n) {
                  var r = "x" === l ? e.value : n.value,
                    a = "x" === l ? n.value : e.value;
                  if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {
                    var s = t.convertPoint({ x: r, y: a });
                    i.push(s);
                  }
                }),
                  f.push({
                    points: i,
                    _id: "axis-" + l + c + "-grid-" + e.tickValue,
                  });
              }),
                (e.gridPoints = f),
                t.isPolar &&
                  ((e.center = t.center),
                  (e.startAngle = t.startAngle),
                  (e.endAngle = t.endAngle));
            }
            (i._id = "axis-" + l),
              h.isNil(c) || (i._id = "axis-" + l + c),
              new vi[r](h.mix(e, i));
          });
        },
      },
      {
        key: "clear",
        value: function () {
          (this.axes = {}), this.frontPlot.clear(), this.backPlot.clear();
        },
      },
    ]),
    t
  );
})();
function di(t, e, i) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ("object" != u(t) || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var n = i.call(t, e);
          if ("object" != u(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t, "string");
      return "symbol" == u(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
var pi = function (t, e) {
    var i = e.x - t.x,
      n = e.y - t.y;
    return Math.abs(i) > Math.abs(n)
      ? i > 0
        ? "right"
        : "left"
      : n > 0
      ? "down"
      : "up";
  },
  yi = function (t, e) {
    var i = Math.abs(e.x - t.x),
      n = Math.abs(e.y - t.y);
    return Math.sqrt(i * i + n * n);
  },
  mi = (function () {
    function t(e) {
      o(this, t);
      var i = this,
        n = e.canvas,
        r = e.el;
      di(this, "_click", function (t) {
        var e = Y(t, i.canvas);
        (t.points = e), i.emitEvent("click", t);
      }),
        di(this, "_start", function (t) {
          var e,
            n,
            r = Y(t, i.canvas);
          r &&
            ((t.points = r),
            i.emitEvent("touchstart", t),
            i.reset(),
            (i.startTime = Date.now()),
            (i.startPoints = r),
            r.length > 1
              ? ((i.startDistance = yi(r[0], r[1])),
                (i.center =
                  ((e = r[0]),
                  (n = r[1]),
                  { x: e.x + (n.x - e.x) / 2, y: e.y + (n.y - e.y) / 2 })))
              : (i.pressTimeout = setTimeout(function () {
                  var e = "press",
                    n = "none";
                  (t.direction = n),
                    i.emitStart(e, t),
                    i.emitEvent(e, t),
                    (i.eventType = e),
                    (i.direction = n);
                }, 250)));
        }),
        di(this, "_move", function (t) {
          var e = Y(t, i.canvas);
          if (e) {
            i.clearPressTimeout(), (t.points = e), i.emitEvent("touchmove", t);
            var n = i.startPoints;
            if (n)
              if (e.length > 1) {
                var r = i.startDistance,
                  a = yi(e[0], e[1]);
                (t.zoom = a / r),
                  (t.center = i.center),
                  i.emitStart("pinch", t),
                  i.emitEvent("pinch", t);
              } else {
                var s = e[0].x - n[0].x,
                  o = e[0].y - n[0].y,
                  l = i.direction || pi(n[0], e[0]);
                i.direction = l;
                var u = i.getEventType(e);
                (t.direction = l),
                  (t.deltaX = s),
                  (t.deltaY = o),
                  i.emitStart(u, t),
                  i.emitEvent(u, t);
                var h = i.lastMoveTime,
                  c = Date.now();
                c - h > 0 &&
                  ((i.prevMoveTime = h),
                  (i.prevMovePoints = i.lastMovePoints),
                  (i.lastMoveTime = c),
                  (i.lastMovePoints = e));
              }
          }
        }),
        di(this, "_end", function (t) {
          var e = Y(t, i.canvas);
          (t.points = e), i.emitEnd(t), i.emitEvent("touchend", t);
          var n = i.lastMoveTime;
          if (Date.now() - n < 100) {
            var r = n - (i.prevMoveTime || i.startTime);
            if (r > 0) {
              var a = i.prevMovePoints || i.startPoints,
                s = i.lastMovePoints,
                o = yi(a[0], s[0]) / r;
              o > 0.3 &&
                ((t.velocity = o),
                (t.direction = pi(a[0], s[0])),
                i.emitEvent("swipe", t));
            }
          }
          i.reset();
          var l = t.touches;
          l && l.length > 0 && i._start(t);
        }),
        di(this, "_cancel", function (t) {
          i.emitEvent("touchcancel", t), i.reset();
        }),
        (this.canvas = n),
        this.delegateEvent(r),
        (this.processEvent = {});
    }
    return (
      l(t, [
        {
          key: "delegateEvent",
          value: function (t) {
            t.addEventListener("click", this._click),
              t.addEventListener("touchstart", this._start),
              t.addEventListener("touchmove", this._move),
              t.addEventListener("touchend", this._end),
              t.addEventListener("touchcancel", this._cancel);
          },
        },
        {
          key: "emitEvent",
          value: function (t, e) {
            this.canvas.emit(t, e);
          },
        },
        {
          key: "getEventType",
          value: function (t) {
            var e,
              i = this.eventType,
              n = this.canvas,
              r = this.startTime,
              a = this.startPoints;
            if (i) return i;
            var s = n.__events.pan;
            return (
              (e =
                s && s.length
                  ? Date.now() - r > 250 && yi(a[0], t[0]) < 10
                    ? "press"
                    : "pan"
                  : "press"),
              (this.eventType = e),
              e
            );
          },
        },
        {
          key: "enable",
          value: function (t) {
            this.processEvent[t] = !0;
          },
        },
        {
          key: "isProcess",
          value: function (t) {
            return this.processEvent[t];
          },
        },
        {
          key: "emitStart",
          value: function (t, e) {
            this.isProcess(t) ||
              (this.enable(t), this.emitEvent("".concat(t, "start"), e));
          },
        },
        {
          key: "emitEnd",
          value: function (t) {
            var e = this,
              i = this.processEvent;
            Object.keys(i).forEach(function (n) {
              e.emitEvent("".concat(n, "end"), t), delete i[n];
            });
          },
        },
        {
          key: "clearPressTimeout",
          value: function () {
            this.pressTimeout &&
              (clearTimeout(this.pressTimeout), (this.pressTimeout = 0));
          },
        },
        {
          key: "reset",
          value: function () {
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
          },
        },
      ]),
      t
    );
  })(),
  xi = (function (t) {
    a(i, U);
    var e = s(i);
    function i(t) {
      var n;
      return (
        o(this, i),
        ((n = e.call(this)).context = t),
        (n.width = 0),
        (n.height = 0),
        (n.style = {}),
        (n.currentStyle = {}),
        (n.attrs = {}),
        (n.isCanvasElement = !0),
        n
      );
    }
    return (
      l(i, [
        {
          key: "getContext",
          value: function () {
            return this.context;
          },
        },
        {
          key: "getBoundingClientRect",
          value: function () {
            return { top: 0, right: this.width, bottom: this.height, left: 0 };
          },
        },
        {
          key: "setAttribute",
          value: function (t, e) {
            this.attrs[t] = e;
          },
        },
        {
          key: "addEventListener",
          value: function (t, e) {
            this.on(t, e);
          },
        },
        {
          key: "removeEventListener",
          value: function (t, e) {
            this.off(t, e);
          },
        },
        {
          key: "dispatchEvent",
          value: function (t, e) {
            this.emit(t, e);
          },
        },
      ]),
      i
    );
  })(),
  ki = function (t) {
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
        : new xi(t)
      : null;
  };
function _i(t, e) {
  h.each(t, function (t) {
    (t = t.split(":")), e.addColorStop(Number(t[0]), t[1]);
  });
}
function Si(t, e, i) {
  if ("(" === t[1])
    try {
      var n = t[0];
      if ("l" === n)
        return (function (t, e, i) {
          var n,
            r = t.split(" "),
            a = r[0].slice(2, r[0].length - 1);
          a = ((((parseFloat(a) * Math.PI) / 180) % (n = 2 * Math.PI)) + n) % n;
          var s,
            o,
            l = r.slice(1),
            u = e.getBBox(),
            h = u.minX,
            c = u.minY,
            f = u.maxX,
            v = u.maxY;
          a >= 0 && a < 0.5 * Math.PI
            ? ((s = { x: h, y: c }), (o = { x: f, y: v }))
            : 0.5 * Math.PI <= a && a < Math.PI
            ? ((s = { x: f, y: c }), (o = { x: h, y: v }))
            : Math.PI <= a && a < 1.5 * Math.PI
            ? ((s = { x: f, y: v }), (o = { x: h, y: c }))
            : ((s = { x: h, y: v }), (o = { x: f, y: c }));
          var g = Math.tan(a),
            d = g * g,
            p = (o.x - s.x + g * (o.y - s.y)) / (d + 1) + s.x,
            y = (g * (o.x - s.x + g * (o.y - s.y))) / (d + 1) + s.y,
            m = i.createLinearGradient(s.x, s.y, p, y);
          return _i(l, m), m;
        })(t, e, i);
      if ("r" === n)
        return (function (t, e, i) {
          var n = t.split(" "),
            r = n[0].slice(2, n[0].length - 1);
          r = r.split(",");
          var a = parseFloat(r[0]),
            s = parseFloat(r[1]),
            o = parseFloat(r[2]),
            l = n.slice(1);
          if (0 === o) return l[l.length - 1].split(":")[1];
          var u = e.getBBox(),
            h = u.width,
            c = u.height,
            f = u.minX,
            v = u.minY,
            g = Math.sqrt(h * h + c * c) / 2,
            d = i.createRadialGradient(
              f + h * a,
              v + c * s,
              o * g,
              f + h / 2,
              v + c / 2,
              g
            );
          return _i(l, d), d;
        })(t, e, i);
    } catch (t) {}
  return t;
}
var bi = { stroke: "strokeStyle", fill: "fillStyle", opacity: "globalAlpha" },
  Mi = [
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
  wi = ["circle", "sector", "polygon", "rect", "polyline"],
  Pi = (function () {
    function t(e) {
      o(this, t), this._initProperties(), h.mix(this._attrs, e);
      var i = this._attrs.attrs;
      i && this.initAttrs(i), this.initTransform();
    }
    return (
      l(t, [
        {
          key: "_initProperties",
          value: function () {
            this._attrs = { zIndex: 0, visible: !0, destroyed: !1 };
          },
        },
        {
          key: "get",
          value: function (t) {
            return this._attrs[t];
          },
        },
        {
          key: "set",
          value: function (t, e) {
            this._attrs[t] = e;
          },
        },
        {
          key: "isGroup",
          value: function () {
            return this.get("isGroup");
          },
        },
        {
          key: "isShape",
          value: function () {
            return this.get("isShape");
          },
        },
        {
          key: "initAttrs",
          value: function (t) {
            this.attr(h.mix(this.getDefaultAttrs(), t));
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return {};
          },
        },
        {
          key: "_setAttr",
          value: function (t, e) {
            var i = this._attrs.attrs;
            if ("clip" === t) e = this._setAttrClip(e);
            else {
              var n = bi[t];
              n && (i[n] = e);
            }
            i[t] = e;
          },
        },
        {
          key: "_getAttr",
          value: function (t) {
            return this._attrs.attrs[t];
          },
        },
        {
          key: "_setAttrClip",
          value: function (t) {
            return t && wi.indexOf(t._attrs.type) > -1
              ? (null === t.get("canvas") && (t = Object.assign({}, t)),
                t.set("parent", this.get("parent")),
                t.set("context", this.get("context")),
                t)
              : null;
          },
        },
        {
          key: "attr",
          value: function (t, e) {
            var i = this;
            if (i.get("destroyed")) return null;
            var n = arguments.length;
            if (0 === n) return i._attrs.attrs;
            if (h.isObject(t)) {
              for (var r in ((this._attrs.bbox = null), t)) i._setAttr(r, t[r]);
              return i._afterAttrsSet && i._afterAttrsSet(), i;
            }
            return 2 === n
              ? ((this._attrs.bbox = null),
                i._setAttr(t, e),
                i._afterAttrsSet && i._afterAttrsSet(),
                i)
              : i._getAttr(t);
          },
        },
        {
          key: "getParent",
          value: function () {
            return this.get("parent");
          },
        },
        {
          key: "draw",
          value: function (t) {
            this.get("destroyed") ||
              (this.get("visible") &&
                (this.setContext(t),
                this.drawInner(t),
                this.restoreContext(t)));
          },
        },
        {
          key: "setContext",
          value: function (t) {
            var e = this._attrs.attrs.clip;
            t.save(),
              e && (e.resetTransform(t), e.createPath(t), t.clip()),
              this.resetContext(t),
              this.resetTransform(t);
          },
        },
        {
          key: "restoreContext",
          value: function (t) {
            t.restore();
          },
        },
        {
          key: "resetContext",
          value: function (t) {
            var e = this._attrs.attrs;
            for (var i in e)
              if (Mi.indexOf(i) > -1) {
                var n = e[i];
                ("fillStyle" !== i && "strokeStyle" !== i) ||
                  !n ||
                  (n = Si(n, this, t)),
                  "lineDash" === i && t.setLineDash && h.isArray(n)
                    ? t.setLineDash(n)
                    : (t[i] = n);
              }
          },
        },
        {
          key: "hasFill",
          value: function () {
            return this.get("canFill") && this._attrs.attrs.fillStyle;
          },
        },
        {
          key: "hasStroke",
          value: function () {
            return this.get("canStroke") && this._attrs.attrs.strokeStyle;
          },
        },
        { key: "drawInner", value: function () {} },
        {
          key: "show",
          value: function () {
            return this.set("visible", !0), this;
          },
        },
        {
          key: "hide",
          value: function () {
            return this.set("visible", !1), this;
          },
        },
        {
          key: "isVisible",
          value: function () {
            return this.get("visible");
          },
        },
        {
          key: "getAriaLabel",
          value: function () {
            var t = this._attrs,
              e = t.destroyed,
              i = t.visible,
              n = t.isShape,
              r = t.aria;
            if (!e && i && (!n || r)) return this._getAriaLabel();
          },
        },
        {
          key: "_getAriaLabel",
          value: function () {
            return this._attrs.ariaLabel;
          },
        },
        {
          key: "_removeFromParent",
          value: function () {
            var t = this.get("parent");
            return t && y(t.get("children"), this), this;
          },
        },
        {
          key: "remove",
          value: function (t) {
            t ? this.destroy() : this._removeFromParent();
          },
        },
        {
          key: "destroy",
          value: function () {
            if (this.get("destroyed")) return null;
            this._removeFromParent(),
              (this._attrs = {}),
              this.set("destroyed", !0);
          },
        },
        {
          key: "getBBox",
          value: function () {
            return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };
          },
        },
        {
          key: "initTransform",
          value: function () {
            var t = this._attrs.attrs || {};
            t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]),
              (this._attrs.attrs = t);
          },
        },
        {
          key: "getMatrix",
          value: function () {
            return this._attrs.attrs.matrix;
          },
        },
        {
          key: "setMatrix",
          value: function (t) {
            this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]];
          },
        },
        {
          key: "transform",
          value: function (t) {
            var e = this._attrs.attrs.matrix;
            return (this._attrs.attrs.matrix = K.transform(e, t)), this;
          },
        },
        {
          key: "setTransform",
          value: function (t) {
            return (
              (this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0]), this.transform(t)
            );
          },
        },
        {
          key: "translate",
          value: function (t, e) {
            var i = this._attrs.attrs.matrix;
            K.translate(i, i, [t, e]);
          },
        },
        {
          key: "rotate",
          value: function (t) {
            var e = this._attrs.attrs.matrix;
            K.rotate(e, e, t);
          },
        },
        {
          key: "scale",
          value: function (t, e) {
            var i = this._attrs.attrs.matrix;
            K.scale(i, i, [t, e]);
          },
        },
        {
          key: "moveTo",
          value: function (t, e) {
            var i = this._attrs.x || 0,
              n = this._attrs.y || 0;
            this.translate(t - i, e - n), this.set("x", t), this.set("y", e);
          },
        },
        {
          key: "apply",
          value: function (t) {
            var e = this._attrs.attrs.matrix;
            return Q.transformMat2d(t, t, e), this;
          },
        },
        {
          key: "resetTransform",
          value: function (t) {
            var e = this._attrs.attrs.matrix;
            K.isChanged(e) && t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
          },
        },
        {
          key: "isDestroyed",
          value: function () {
            return this.get("destroyed");
          },
        },
      ]),
      t
    );
  })(),
  Ci = (function (t) {
    a(i, Pi);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            this._attrs = {
              zIndex: 0,
              visible: !0,
              destroyed: !1,
              isShape: !0,
              attrs: {},
            };
          },
        },
        {
          key: "getType",
          value: function () {
            return this._attrs.type;
          },
        },
        {
          key: "drawInner",
          value: function (t) {
            var e = this,
              i = e.get("attrs");
            e.createPath(t);
            var n = t.globalAlpha;
            if (e.hasFill()) {
              var r = i.fillOpacity;
              h.isNil(r) || 1 === r
                ? t.fill()
                : ((t.globalAlpha = r), t.fill(), (t.globalAlpha = n));
            }
            if (e.hasStroke() && i.lineWidth > 0) {
              var a = i.strokeOpacity;
              h.isNil(a) || 1 === a || (t.globalAlpha = a), t.stroke();
            }
          },
        },
        {
          key: "getBBox",
          value: function () {
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
          },
        },
        {
          key: "calculateBox",
          value: function () {
            return null;
          },
        },
        { key: "createPath", value: function () {} },
      ]),
      i
    );
  })(),
  Ti = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "rect");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 0 };
          },
        },
        {
          key: "createRadiusPath",
          value: function (t, e, i, n, r, a) {
            (a = (function (t, e, i) {
              if (!((t = j(t))[0] || t[1] || t[2] || t[3])) return t;
              var n = Math.max(t[0] + t[1], t[2] + t[3]),
                r = Math.max(t[0] + t[3], t[1] + t[2]),
                a = Math.min(e / n, i / r);
              return a < 1
                ? t.map(function (t) {
                    return t * a;
                  })
                : t;
            })(a, n, r)),
              t.moveTo(e + a[0], i),
              t.lineTo(e + n - a[1], i),
              t.arc(e + n - a[1], i + a[1], a[1], -Math.PI / 2, 0, !1),
              t.lineTo(e + n, i + r - a[2]),
              t.arc(e + n - a[2], i + r - a[2], a[2], 0, Math.PI / 2, !1),
              t.lineTo(e + a[3], i + r),
              t.arc(e + a[3], i + r - a[3], a[3], Math.PI / 2, Math.PI, !1),
              t.lineTo(e, i + a[0]),
              t.arc(e + a[0], i + a[0], a[0], Math.PI, (3 * Math.PI) / 2, !1),
              t.closePath();
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs"),
              i = e.x,
              n = e.y,
              r = e.width,
              a = e.height,
              s = e.radius;
            t.beginPath(),
              s && r * a
                ? this.createRadiusPath(t, i, n, r, a, s)
                : t.rect(i, n, r, a);
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs"),
              e = t.x,
              i = t.y;
            return { minX: e, minY: i, maxX: e + t.width, maxY: i + t.height };
          },
        },
      ]),
      i
    );
  })(),
  Ai = {},
  Di = Q.create(),
  Ni = Q.create(),
  Ii = Q.create();
function Oi(t, e, i, n, r) {
  var a = t * t;
  return (
    e +
    (3 * -e + t * (3 * e - e * t)) * t +
    (3 * i + t * (-6 * i + 3 * i * t)) * t +
    (3 * n - 3 * n * t) * a +
    r * (a * t)
  );
}
function Yi(t) {
  for (
    var e,
      i,
      n,
      r,
      a,
      s = 1 / 0,
      o = -1 / 0,
      l = 1 / 0,
      u = -1 / 0,
      h = { x: t[0], y: t[1] },
      c = { x: t[2], y: t[3] },
      f = { x: t[4], y: t[5] },
      v = { x: t[6], y: t[7] },
      g = 0;
    g < 100;
    g++
  ) {
    var d = {
      x: Oi((a = g / 100), (e = h).x, (i = c).x, (n = f).x, (r = v).x),
      y: Oi(a, e.y, i.y, n.y, r.y),
    };
    d.x < s && (s = d.x),
      d.x > o && (o = d.x),
      d.y < l && (l = d.y),
      d.y > u && (u = d.y);
  }
  return { minX: s, minY: l, maxX: o, maxY: u };
}
function Ei(t, e) {
  if (0 !== t.length) {
    for (
      var i = t[0], n = i.x, r = i.x, a = i.y, s = i.y, o = t.length, l = 1;
      l < o;
      l++
    )
      (i = t[l]),
        (n = Math.min(n, i.x)),
        (r = Math.max(r, i.x)),
        (a = Math.min(a, i.y)),
        (s = Math.max(s, i.y));
    return {
      minX: n - (e = e / 2 || 0),
      minY: a - e,
      maxX: r + e,
      maxY: s + e,
    };
  }
}
function Fi(t, e, i, n, r, a) {
  var s = Math.abs(n - r);
  if (s % (2 * Math.PI) < 1e-4 && s > 1e-4)
    return { minX: t - i, minY: e - i, maxX: t + i, maxY: e + i };
  (Di[0] = Math.cos(n) * i + t),
    (Di[1] = Math.sin(n) * i + e),
    (Ni[0] = Math.cos(r) * i + t),
    (Ni[1] = Math.sin(r) * i + e);
  var o = [0, 0],
    l = [0, 0];
  if (
    (Q.min(o, Di, Ni),
    Q.max(l, Di, Ni),
    (n %= 2 * Math.PI) < 0 && (n += 2 * Math.PI),
    (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI),
    n > r && !a ? (r += 2 * Math.PI) : n < r && a && (n += 2 * Math.PI),
    a)
  ) {
    var u = r;
    (r = n), (n = u);
  }
  for (var h = 0; h < r; h += Math.PI / 2)
    h > n &&
      ((Ii[0] = Math.cos(h) * i + t),
      (Ii[1] = Math.sin(h) * i + e),
      Q.min(o, Ii, o),
      Q.max(l, Ii, l));
  return { minX: o[0], minY: o[1], maxX: l[0], maxY: l[1] };
}
function ji(t) {
  return [t.x, t.y];
}
function zi(t, e, i) {
  for (
    var n,
      r,
      a,
      s = (function (t, e, i, n) {
        var r,
          a,
          s,
          o,
          l,
          u,
          h,
          c,
          f = [],
          v = !!n;
        if (v) {
          for (
            s = [1 / 0, 1 / 0], o = [-1 / 0, -1 / 0], c = 0, h = t.length;
            c < h;
            c++
          )
            (l = ji(t[c])), Q.min(s, s, l), Q.max(o, o, l);
          Q.min(s, s, n[0]), Q.max(o, o, n[1]);
        }
        for (c = 0, u = t.length; c < u; c++)
          if (((l = ji(t[c])), 0 !== c && c !== u - 1)) {
            (r = ji(t[c - 1])), (a = ji(t[c + 1]));
            var g = Q.sub([], a, r);
            Q.scale(g, g, 0.4);
            var d = Q.distance(l, r),
              p = Q.distance(l, a),
              y = d + p;
            0 !== y && ((d /= y), (p /= y));
            var m = Q.scale([], g, -d),
              x = Q.scale([], g, p),
              k = Q.add([], l, m),
              _ = Q.add([], l, x);
            v &&
              (Q.max(k, k, s), Q.min(k, k, o), Q.max(_, _, s), Q.min(_, _, o)),
              f.push([k[0], k[1]]),
              f.push([_[0], _[1]]);
          } else f.push([l[0], l[1]]);
        return f;
      })(t, 0, 0, i),
      o = t.length,
      l = [],
      u = 0;
    u < o - 1;
    u++
  )
    (n = s[2 * u]),
      (r = s[2 * u + 1]),
      (a = t[u + 1]),
      l.push(["C", n[0], n[1], r[0], r[1], a.x, a.y]);
  return l;
}
function Bi(t) {
  for (var e = [], i = 0, n = t.length; i < n; i++) {
    var r = t[i];
    isNaN(r.x) || isNaN(r.y) || e.push(r);
  }
  return e;
}
var Li = function (t) {
    var e = t.width,
      i = t.height,
      n = t.rotate,
      r = Math.abs(n);
    return {
      width: Math.abs(e * Math.cos(r) + i * Math.sin(r)),
      height: Math.abs(i * Math.cos(r) + e * Math.sin(r)),
    };
  },
  Xi = 0,
  Gi = {},
  Ri = {
    circle: function (t, e, i, n) {
      n.arc(t, e, i, 0, 2 * Math.PI, !1);
    },
    square: function (t, e, i, n) {
      n.moveTo(t - i, e - i),
        n.lineTo(t + i, e - i),
        n.lineTo(t + i, e + i),
        n.lineTo(t - i, e + i),
        n.closePath();
    },
  };
(Ci.Rect = Ti),
  (Ci.Image = (function (t) {
    a(i, Ti);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !1),
              (this._attrs.canStroke = !1),
              (this._attrs.loading = !1),
              (this._attrs.image = null),
              (this._attrs.type = "image");
          },
        },
        {
          key: "draw",
          value: function (t) {
            var e = this;
            if (!this.get("loading"))
              if (this.get("image"))
                n(r(i.prototype), "draw", this).call(this, t);
              else {
                var a = this.get("attrs").src;
                if (a && window.Image) {
                  var s = this.get("cacheImage");
                  if (s && Ai[a])
                    return this.set("image", Ai[a]), void this.draw(t);
                  this.set("loading", !0);
                  var o = new Image();
                  (o.crossOrigin = ""),
                    (o.onload = function () {
                      e.set("loading", !1), e.set("image", o), e.draw(t);
                    }),
                    (o.src = a),
                    s && (Ai[a] = o);
                }
              }
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("image");
            this.drawImage(t, e);
          },
        },
        {
          key: "drawImage",
          value: function (t, e) {
            var i = this._attrs,
              n = i.attrs;
            if (!i.destroyed) {
              var r = n.x,
                a = n.y,
                s = n.width,
                o = n.height,
                l = n.sx,
                u = n.sy,
                c = n.swidth,
                f = n.sheight,
                v = n.radius,
                g = n.fillOpacity;
              v &&
                (t.save(), this.createRadiusPath(t, r, a, s, o, v), t.clip());
              var d = t.globalAlpha;
              h.isNil(g) || (t.globalAlpha = g),
                h.isNil(l) || h.isNil(u) || h.isNil(c) || h.isNil(f)
                  ? t.drawImage(e, r, a, s, o)
                  : t.drawImage(e, l, u, c, f, r, a, s, o),
                (t.globalAlpha = d),
                v && t.restore();
            }
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Circle = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "circle");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return { x: 0, y: 0, r: 0, lineWidth: 0 };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs"),
              i = e.x,
              n = e.y,
              r = e.r;
            t.beginPath(), t.arc(i, n, r, 0, 2 * Math.PI, !1), t.closePath();
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs"),
              e = t.x,
              i = t.y,
              n = t.r;
            return { minX: e - n, maxX: e + n, minY: i - n, maxY: i + n };
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Line = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "line");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs"),
              i = e.x1,
              n = e.y1,
              r = e.x2,
              a = e.y2;
            t.beginPath(), t.moveTo(i, n), t.lineTo(r, a);
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs");
            return (function (t, e, i, n, r) {
              return (
                (r = r / 2 || 0),
                {
                  minX: Math.min(t, i) - r,
                  minY: Math.min(e, n) - r,
                  maxX: Math.max(t, i) + r,
                  maxY: Math.max(e, n) + r,
                }
              );
            })(t.x1, t.y1, t.x2, t.y2, t.lineWidth);
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Polygon = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "polygon");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return { points: null, lineWidth: 0 };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs").points;
            t.beginPath();
            for (var i = 0, n = e.length; i < n; i++) {
              var r = e[i];
              0 === i ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
            }
            t.closePath();
          },
        },
        {
          key: "calculateBox",
          value: function () {
            return Ei(this.get("attrs").points);
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Polyline = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "polyline");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return { points: null, lineWidth: 1, smooth: !1 };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs"),
              i = e.points,
              n = e.smooth,
              r = Bi(i);
            if ((t.beginPath(), r.length))
              if ((t.moveTo(r[0].x, r[0].y), n))
                for (
                  var a = zi(r, 0, [
                      [0, 0],
                      [1, 1],
                    ]),
                    s = 0,
                    o = a.length;
                  s < o;
                  s++
                ) {
                  var l = a[s];
                  t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
                }
              else {
                var u, h;
                for (u = 1, h = r.length - 1; u < h; u++)
                  t.lineTo(r[u].x, r[u].y);
                t.lineTo(r[h].x, r[h].y);
              }
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs"),
              e = t.points,
              i = t.smooth,
              n = t.lineWidth,
              r = Bi(e);
            if (r.length <= 1) return Ei(r, n);
            if (i) {
              for (
                var a = [],
                  s = zi(r, 0, [
                    [0, 0],
                    [1, 1],
                  ]),
                  o = 0,
                  l = s.length;
                o < l;
                o++
              ) {
                var u = s[o];
                if (0 === o)
                  a.push([r[0].x, r[0].y, u[1], u[2], u[3], u[4], u[5], u[6]]);
                else {
                  var h = s[o - 1];
                  a.push([h[5], h[6], u[1], u[2], u[3], u[4], u[5], u[6]]);
                }
              }
              return (function (t, e) {
                for (
                  var i = 1 / 0,
                    n = -1 / 0,
                    r = 1 / 0,
                    a = -1 / 0,
                    s = 0,
                    o = t.length;
                  s < o;
                  s++
                ) {
                  var l = Yi(t[s]);
                  l.minX < i && (i = l.minX),
                    l.maxX > n && (n = l.maxX),
                    l.minY < r && (r = l.minY),
                    l.maxY > a && (a = l.maxY);
                }
                return {
                  minX: i - (e = e / 2 || 0),
                  minY: r - e,
                  maxX: n + e,
                  maxY: a + e,
                };
              })(a, n);
            }
            return Ei(r, n);
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Arc = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canStroke = !0),
              (this._attrs.canFill = !0),
              (this._attrs.type = "arc");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return {
              x: 0,
              y: 0,
              r: 0,
              startAngle: 0,
              endAngle: 2 * Math.PI,
              anticlockwise: !1,
              lineWidth: 1,
            };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs"),
              i = e.x,
              n = e.y,
              r = e.r,
              a = e.startAngle,
              s = e.endAngle,
              o = e.anticlockwise;
            t.beginPath(), a !== s && t.arc(i, n, r, a, s, o);
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs");
            return Fi(t.x, t.y, t.r, t.startAngle, t.endAngle, t.anticlockwise);
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Sector = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "sector");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
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
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs"),
              i = e.x,
              n = e.y,
              r = e.startAngle,
              a = e.endAngle,
              s = e.r,
              o = e.r0,
              l = e.anticlockwise;
            t.beginPath();
            var u = Math.cos(r),
              h = Math.sin(r);
            t.moveTo(u * o + i, h * o + n),
              t.lineTo(u * s + i, h * s + n),
              (Math.abs(a - r) > 1e-4 || (0 === r && a < 0)) &&
                (t.arc(i, n, s, r, a, l),
                t.lineTo(Math.cos(a) * o + i, Math.sin(a) * o + n),
                0 !== o && t.arc(i, n, o, a, r, !l)),
              t.closePath();
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs"),
              e = t.x,
              i = t.y,
              n = t.r,
              r = t.r0,
              a = t.startAngle,
              s = t.endAngle,
              o = t.anticlockwise,
              l = Fi(e, i, n, a, s, o),
              u = Fi(e, i, r, a, s, o);
            return {
              minX: Math.min(l.minX, u.minX),
              minY: Math.min(l.minY, u.minY),
              maxX: Math.max(l.maxX, u.maxX),
              maxY: Math.max(l.maxY, u.maxY),
            };
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Text = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "text");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
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
          },
        },
        {
          key: "_getFontStyle",
          value: function () {
            var t = this._attrs.attrs,
              e = t.fontSize,
              i = t.fontFamily,
              n = t.fontWeight,
              r = t.fontStyle,
              a = t.fontVariant;
            return ""
              .concat(r, " ")
              .concat(a, " ")
              .concat(n, " ")
              .concat(e, "px ")
              .concat(i);
          },
        },
        {
          key: "_afterAttrsSet",
          value: function () {
            var t = this._attrs.attrs;
            if (((t.font = this._getFontStyle()), t.text)) {
              var e = t.text,
                i = null,
                n = 1;
              h.isString(e) &&
                -1 !== e.indexOf("\n") &&
                (n = (i = e.split("\n")).length),
                (t.lineCount = n),
                (t.textArr = i);
            }
            this.set("attrs", t);
          },
        },
        {
          key: "_getTextHeight",
          value: function () {
            var t = this._attrs.attrs;
            if (t.height) return t.height;
            var e = t.lineCount,
              i = 1 * t.fontSize;
            return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i;
          },
        },
        {
          key: "_getSpaceingY",
          value: function () {
            var t = this._attrs.attrs,
              e = t.lineHeight,
              i = 1 * t.fontSize;
            return e ? e - i : 0.14 * i;
          },
        },
        {
          key: "drawInner",
          value: function (t) {
            var e = this,
              i = e._attrs.attrs,
              n = i.text,
              r = i.x,
              a = i.y;
            if (!(h.isNil(n) || isNaN(r) || isNaN(a))) {
              var s = i.textArr,
                o = 1 * i.fontSize,
                l = e._getSpaceingY();
              i.rotate &&
                (t.translate(r, a), t.rotate(i.rotate), (r = 0), (a = 0));
              var u,
                c,
                f = i.textBaseline;
              if ((s && (u = e._getTextHeight()), e.hasFill())) {
                var v = i.fillOpacity;
                if ((h.isNil(v) || 1 === v || (t.globalAlpha = v), s))
                  for (var g = 0, d = s.length; g < d; g++) {
                    var p = s[g];
                    (c = a + g * (l + o) - u + o),
                      "middle" === f && (c += u - o - (u - o) / 2),
                      "top" === f && (c += u - o),
                      t.fillText(p, r, c);
                  }
                else t.fillText(n, r, a);
              }
              if (e.hasStroke())
                if (s)
                  for (var y = 0, m = s.length; y < m; y++) {
                    var x = s[y];
                    (c = a + y * (l + o) - u + o),
                      "middle" === f && (c += u - o - (u - o) / 2),
                      "top" === f && (c += u - o),
                      t.strokeText(x, r, c);
                  }
                else t.strokeText(n, r, a);
            }
          },
        },
        {
          key: "_getAriaLabel",
          value: function () {
            return this._attrs.attrs.text;
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this,
              e = t._attrs.attrs,
              i = e.x,
              n = e.y,
              r = e.textAlign,
              a = e.textBaseline,
              s = t._getTextWidth();
            if (!s) return { minX: i, minY: n, maxX: i, maxY: n };
            var o = t._getTextHeight();
            if (e.rotate) {
              var l = Li({ width: s, height: o, rotate: e.rotate });
              (s = l.width), (o = l.height);
            }
            var u = { x: i, y: n - o };
            return (
              r &&
                ("end" === r || "right" === r
                  ? (u.x -= s)
                  : "center" === r && (u.x -= s / 2)),
              a &&
                ("top" === a ? (u.y += o) : "middle" === a && (u.y += o / 2)),
              { minX: u.x, minY: u.y, maxX: u.x + s, maxY: u.y + o }
            );
          },
        },
        {
          key: "_getTextWidth",
          value: function () {
            var t = this._attrs.attrs;
            if (t.width) return t.width;
            var e = t.text,
              i = this.get("context");
            if (!h.isNil(e)) {
              var n = t.font,
                r = t.textArr,
                a = e + "" + n;
              if (Gi[a]) return Gi[a];
              var s = 0;
              if (r)
                for (var o = 0, l = r.length; o < l; o++) {
                  var u = r[o];
                  s = Math.max(s, F(u, n, i).width);
                }
              else s = F(e, n, i).width;
              return Xi > 5e3 && ((Xi = 0), (Gi = {})), Xi++, (Gi[a] = s), s;
            }
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Custom = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.createPath = null),
              (this._attrs.type = "custom");
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("createPath");
            e && e.call(this, t);
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("calculateBox");
            return t && t.call(this);
          },
        },
      ]),
      i
    );
  })()),
  (Ci.Marker = (function (t) {
    a(i, Ci);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
            n(r(i.prototype), "_initProperties", this).call(this),
              (this._attrs.canFill = !0),
              (this._attrs.canStroke = !0),
              (this._attrs.type = "marker");
          },
        },
        {
          key: "getDefaultAttrs",
          value: function () {
            return { x: 0, y: 0, lineWidth: 0 };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e,
              i = this.get("attrs"),
              n = i.x,
              r = i.y,
              a = i.radius,
              s = i.symbol || "circle";
            (e = h.isFunction(s) ? s : Ri[s]),
              t.beginPath(),
              e(n, r, a, t, this);
          },
        },
        {
          key: "calculateBox",
          value: function () {
            var t = this.get("attrs"),
              e = t.x,
              i = t.y,
              n = t.radius;
            return { minX: e - n, minY: i - n, maxX: e + n, maxY: i + n };
          },
        },
      ]),
      i
    );
  })());
var Hi = {},
  Wi = "_INDEX",
  Vi = {
    getGroupClass: function () {},
    getChildren: function () {
      return this.get("children");
    },
    addShape: function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = Hi[t];
      i || ((i = h.upperFirst(t)), (Hi[t] = i));
      var n = new Ci[i](e);
      return this.add(n), n;
    },
    addGroup: function (t) {
      var e = new (this.getGroupClass())(t);
      return this.add(e), e;
    },
    contain: function (t) {
      return this.get("children").indexOf(t) > -1;
    },
    sort: function () {
      for (var t, e = this.get("children"), i = 0, n = e.length; i < n; i++)
        e[i][Wi] = i;
      return (
        e.sort(
          ((t = function (t, e) {
            return t.get("zIndex") - e.get("zIndex");
          }),
          function (e, i) {
            var n = t(e, i);
            return 0 === n ? e[Wi] - i[Wi] : n;
          })
        ),
        this
      );
    },
    drawChildren: function (t) {
      for (var e = this.get("children"), i = 0, n = e.length; i < n; i++)
        e[i].draw(t);
      return this;
    },
    clear: function () {
      for (var t = this.get("children"); 0 !== t.length; )
        t[t.length - 1].remove(!0);
      return this;
    },
    add: function (t) {
      var e = this,
        i = e.get("children");
      h.isArray(t) || (t = [t]);
      for (var n = 0, r = t.length; n < r; n++) {
        var a = t[n],
          s = a.get("parent");
        s && y(s.get("children"), a), e._setEvn(a), i.push(a);
      }
      return e;
    },
    _setEvn: function (t) {
      var e = this,
        i = e._attrs,
        n = i.context,
        r = i.canvas,
        a = i.aria,
        s = t._attrs,
        o = s.isGroup,
        l = s.type;
      (t._attrs.parent = e),
        (t._attrs.context = n),
        (t._attrs.canvas = r),
        a && !1 !== t._attrs.aria && (t._attrs.aria = a),
        "text" === l &&
          r &&
          r.get("fontFamily") &&
          (t._attrs.attrs.fontFamily =
            t._attrs.attrs.fontFamily || r.get("fontFamily"));
      var u = t._attrs.attrs.clip;
      if (
        (u &&
          ((u._attrs.parent = e),
          (u._attrs.context = n),
          (u._attrs.canvas = r)),
        o)
      )
        for (var h = t._attrs.children, c = 0, f = h.length; c < f; c++)
          t._setEvn(h[c]);
    },
    _getAriaLabel: function () {
      var t = this._attrs,
        e = t.aria,
        i = t.ariaLabel,
        n = t.children;
      if (e) {
        var r = [];
        if (n && n.length)
          for (var a = 0, s = n.length; a < s; a++) {
            var o = n[a].getAriaLabel();
            o && r.push(o);
          }
        var l = r.join(" ");
        return i && l ? "".concat(i, " ").concat(l, " ") : i || l;
      }
    },
  },
  qi = (function (t) {
    a(i, Ti);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initProperties",
          value: function () {
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
          },
        },
        {
          key: "getBBox",
          value: function () {
            for (
              var t = 1 / 0,
                e = -1 / 0,
                i = 1 / 0,
                n = -1 / 0,
                r = this.get("children"),
                a = 0,
                s = r.length;
              a < s;
              a++
            ) {
              var o = r[a];
              if (o.get("visible")) {
                var l = o.getBBox();
                if (!l) continue;
                var u = [l.minX, l.minY],
                  h = [l.minX, l.maxY],
                  c = [l.maxX, l.minY],
                  f = [l.maxX, l.maxY],
                  v = o.attr("matrix");
                Q.transformMat2d(u, u, v),
                  Q.transformMat2d(h, h, v),
                  Q.transformMat2d(c, c, v),
                  Q.transformMat2d(f, f, v),
                  (t = Math.min(u[0], h[0], c[0], f[0], t)),
                  (e = Math.max(u[0], h[0], c[0], f[0], e)),
                  (i = Math.min(u[1], h[1], c[1], f[1], i)),
                  (n = Math.max(u[1], h[1], c[1], f[1], n));
              }
            }
            return {
              minX: t,
              minY: i,
              maxX: e,
              maxY: n,
              x: t,
              y: i,
              width: e - t,
              height: n - i,
            };
          },
        },
        {
          key: "createPath",
          value: function (t) {
            var e = this.get("attrs");
            (e.fillStyle || e.strokeStyle) &&
              n(r(i.prototype), "createPath", this).call(this, t);
          },
        },
        {
          key: "drawInner",
          value: function (t) {
            n(r(i.prototype), "drawInner", this).call(this, t),
              this.drawChildren(t);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.get("destroyed") ||
              (this.clear(), n(r(i.prototype), "destroy", this).call(this));
          },
        },
      ]),
      i
    );
  })();
h.mix(qi.prototype, Vi, {
  getGroupClass: function () {
    return qi;
  },
});
var Zi =
    "object" == ("undefined" == typeof window ? "undefined" : u(window)) &&
    window.requestAnimationFrame
      ? window.requestAnimationFrame
      : function (t) {
          return setTimeout(t, 16);
        },
  Ui = (function (t) {
    a(i, U);
    var e = s(i);
    function i(t) {
      var n;
      o(this, i), (n = e.call(this));
      var r = t.title,
        a = r
          ? h.substitute(H.general.withTitle, { title: r })
          : H.general.title;
      return (
        (n._attrs = h.mix({ type: "canvas", children: [], ariaLabel: a }, t)),
        n._initPixelRatio(),
        n._initCanvas(),
        n
      );
    }
    return (
      l(i, [
        {
          key: "get",
          value: function (t) {
            return this._attrs[t];
          },
        },
        {
          key: "set",
          value: function (t, e) {
            this._attrs[t] = e;
          },
        },
        {
          key: "_initPixelRatio",
          value: function () {
            this.get("pixelRatio") || this.set("pixelRatio", w());
          },
        },
        {
          key: "beforeDraw",
          value: function () {
            var t = this._attrs.context,
              e = this._attrs.el;
            t && t.clearRect && t.clearRect(0, 0, e.width, e.height);
          },
        },
        {
          key: "_initCanvas",
          value: function () {
            var t,
              e = this,
              i = e.get("el"),
              n = e.get("context");
            if (!i && !n)
              throw new Error(
                "Please specify the id, el or context of the chart!"
              );
            (t = i ? (h.isString(i) ? A(i) : i) : ki(n)),
              n &&
                t &&
                !t.getContext &&
                (t.getContext = function () {
                  return n;
                });
            var r = e.get("width");
            r || (r = C(t));
            var a = e.get("height");
            a || (a = T(t)),
              e.set("canvas", this),
              e.set("el", t),
              e.set("context", n || t.getContext("2d")),
              e.changeSize(r, a);
            var s = new mi({ canvas: this, el: t });
            e.set("eventController", s);
          },
        },
        {
          key: "changeSize",
          value: function (t, e) {
            var i = this.get("pixelRatio"),
              n = this.get("el");
            n.style &&
              ((n.style.width = t + "px"), (n.style.height = e + "px")),
              M(n) &&
                ((n.width = t * i),
                (n.height = e * i),
                1 !== i && this.get("context").scale(i, i)),
              this.set("width", t),
              this.set("height", e);
          },
        },
        {
          key: "getWidth",
          value: function () {
            var t = this.get("pixelRatio");
            return this.get("width") * t;
          },
        },
        {
          key: "getHeight",
          value: function () {
            var t = this.get("pixelRatio");
            return this.get("height") * t;
          },
        },
        {
          key: "getPointByClient",
          value: function (t, e) {
            var i = this.get("el"),
              n = i.getBoundingClientRect(),
              r = n.right - n.left,
              a = n.bottom - n.top;
            return {
              x: (t - n.left) * (i.width / r),
              y: (e - n.top) * (i.height / a),
            };
          },
        },
        {
          key: "_beginDraw",
          value: function () {
            this._attrs.toDraw = !0;
          },
        },
        {
          key: "_endDraw",
          value: function () {
            this._attrs.toDraw = !1;
          },
        },
        {
          key: "draw",
          value: function () {
            var t = this;
            t.get("destroyed") ||
              (t.get("animateHandler")
                ? this._beginDraw()
                : (function e() {
                    t.set(
                      "animateHandler",
                      Zi(function () {
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
          },
        },
        {
          key: "setAriaLabel",
          value: function () {
            var t = this._attrs.el,
              e = this._getAriaLabel();
            e && t.setAttribute && t.setAttribute("aria-label", e);
          },
        },
        {
          key: "destroy",
          value: function () {
            if (!this.get("destroyed")) {
              var t = this.get("el");
              (t.width = 0),
                (t.height = 0),
                this.clear(),
                (this._attrs = {}),
                this.set("destroyed", !0);
            }
          },
        },
        {
          key: "isDestroyed",
          value: function () {
            return this.get("destroyed");
          },
        },
      ]),
      i
    );
  })();
h.mix(Ui.prototype, Vi, {
  getGroupClass: function () {
    return qi;
  },
});
var Ji = {};
function $i(t) {
  return Ji[t] || { Canvas: Ui, Group: qi, Shape: Ci };
}
function Ki(t) {
  return new ($i(t.renderer).Canvas)(t);
}
var Qi = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Canvas: Ui,
      Group: qi,
      Matrix: K,
      Shape: Ci,
      Vector2: Q,
      createCanvas: Ki,
      getEngine: $i,
      registerEngine: function (t, e) {
        Ji[t] = e;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function tn(t) {
  var e,
    i = t.start,
    n = t.end,
    r = n.x - i.x,
    a = Math.abs(n.y - i.y);
  if (t.isPolar) {
    var s = t.circleRadius,
      o = t.center,
      l = t.startAngle,
      u = t.endAngle;
    e = new Ci.Sector({
      attrs: { x: o.x, y: o.y, r: s, r0: 0, startAngle: l, endAngle: u },
    });
  } else
    e = new Ci.Rect({
      attrs: { x: i.x, y: n.y - 10, width: r, height: a + 20 },
    });
  return (e.isClip = !0), e;
}
function en(t, e) {
  var i = t.x,
    n = t.y,
    r = e.tl,
    a = e.tr,
    s = e.br;
  return i >= r.x && i <= a.x && n >= r.y && n <= s.y;
}
var nn = Object.freeze(
  Object.defineProperty(
    { __proto__: null, getClip: tn, isPointInPlot: en },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function rn(t, e) {
  return t - e;
}
var an = (function (t) {
  a(u, J);
  var e = s(u);
  function u(t) {
    var n;
    o(this, u), (n = e.call(this, t));
    var r = i(n);
    return (
      h.each(wt, function (t, e) {
        var i = h.lowerFirst(e);
        r[i] = function (e) {
          var i = new t(e);
          return r.addGeom(i), i;
        };
      }),
      r._init(),
      n
    );
  }
  return (
    l(
      u,
      [
        {
          key: "getDefaultCfg",
          value: function () {
            return {
              id: null,
              renderer: "canvas",
              rendered: !1,
              padding: W.padding,
              data: null,
              scales: {},
              geoms: [],
              colDefs: null,
              pixelRatio: W.pixelRatio,
              filters: null,
              appendPadding: W.appendPadding,
            };
          },
        },
        {
          key: "_syncYScales",
          value: function () {
            if (this.get("syncY")) {
              var t = this.get("geoms"),
                e = [],
                i = [],
                n = [];
              h.each(t, function (t) {
                var r = t.getYScale();
                r.isLinear && (e.push(r), i.push(r.min), n.push(r.max));
              }),
                (i = Math.min.apply(null, i)),
                (n = Math.max.apply(null, n)),
                h.each(e, function (t) {
                  t.change({ min: i }), t.change({ max: n });
                });
            }
          },
        },
        {
          key: "_getFieldsForLegend",
          value: function () {
            var t = [],
              e = this.get("geoms");
            return (
              h.each(e, function (e) {
                var i = e.get("attrOptions").color;
                if (i && i.field && h.isString(i.field)) {
                  var n = i.field.split("*");
                  h.each(n, function (e) {
                    -1 === t.indexOf(e) && t.push(e);
                  });
                }
              }),
              t
            );
          },
        },
        {
          key: "_getScaleData",
          value: function (t) {
            var e = this.get("data"),
              i = this.get("filteredData");
            return (
              i.length &&
                -1 === this._getFieldsForLegend().indexOf(t) &&
                (e = i),
              e
            );
          },
        },
        {
          key: "_adjustScale",
          value: function () {
            for (
              var t = this.get("scaleController"), e = this.get("geoms"), i = 0;
              i < e.length;
              i++
            ) {
              var n = e[i];
              if ("interval" === n.get("type")) {
                var r = n.getYScale();
                t.adjustStartZero(r);
              }
            }
          },
        },
        {
          key: "_removeGeoms",
          value: function () {
            for (var t = this.get("geoms"); t.length > 0; ) t.shift().destroy();
          },
        },
        {
          key: "_clearGeoms",
          value: function () {
            for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++)
              t[e].clear();
          },
        },
        {
          key: "_clearInner",
          value: function () {
            this._clearGeoms(),
              u.plugins.notify(this, "clearInner"),
              this.emit("clearinner"),
              this.get("axisController") && this.get("axisController").clear();
          },
        },
        {
          key: "_initFilteredData",
          value: function () {
            var t = this.get("filters"),
              e = this.get("data") || [];
            t &&
              (e = e.filter(function (e) {
                var i = !0;
                return (
                  h.each(t, function (t, n) {
                    if (t && !(i = t(e[n], e))) return !1;
                  }),
                  i
                );
              })),
              this.set("filteredData", e);
          },
        },
        {
          key: "_changeGeomsData",
          value: function () {
            for (
              var t = this.get("geoms"),
                e = this.get("filteredData"),
                i = 0,
                n = t.length;
              i < n;
              i++
            )
              t[i].changeData(e);
          },
        },
        {
          key: "_initGeom",
          value: function (t) {
            if (!t.get("isInit")) {
              var e = this.get("coord"),
                i = this.get("filteredData"),
                n = this.get("colDefs"),
                r = this.get("middlePlot");
              t.set("chart", this),
                t.set("container", r.addGroup()),
                t.set("data", i),
                t.set("coord", e),
                t.set("colDefs", n),
                t.init(),
                this.emit("_aftergeominit", t);
            }
          },
        },
        {
          key: "_initGeoms",
          value: function () {
            for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++)
              this._initGeom(t[e]);
          },
        },
        {
          key: "_initCoord",
          value: function () {
            var t = this.get("plotRange"),
              e = h.mix({ type: "cartesian" }, this.get("coordCfg"), {
                plot: t,
              }),
              i = e.type,
              n = new (0, et[h.upperFirst(i)])(e);
            this.set("coord", n);
          },
        },
        {
          key: "_initLayout",
          value: function () {
            var t = this.get("_padding");
            t || (t = j((t = this.get("margin") || this.get("padding"))));
            var e = "auto" === t[0] ? 0 : t[0],
              i = "auto" === t[1] ? 0 : t[1],
              n = "auto" === t[2] ? 0 : t[2],
              r = { x: "auto" === t[3] ? 0 : t[3], y: e },
              a = { x: this.get("width") - i, y: this.get("height") - n },
              s = this.get("plot");
            if (s) s.reset(r, a);
            else {
              var o = new $({ start: r, end: a });
              this.set("plotRange", o), this.set("plot", o);
            }
          },
        },
        {
          key: "_initCanvas",
          value: function () {
            var t = this;
            try {
              var e = Ki({
                renderer: t.get("renderer"),
                el: t.get("el") || t.get("id"),
                context: t.get("context"),
                pixelRatio: t.get("pixelRatio"),
                width: t.get("width"),
                height: t.get("height"),
                fontFamily: W.fontFamily,
                aria: t.get("aria"),
                title: t.get("title"),
                landscape: t.get("landscape"),
              });
              t.set("canvas", e),
                t.set("el", e.get("el")),
                t.set("width", e.get("width")),
                t.set("height", e.get("height"));
            } catch (t) {
              throw t;
            }
            u.plugins.notify(t, "afterCanvasInit");
          },
        },
        {
          key: "_initLayers",
          value: function () {
            var t = this.get("canvas");
            this.set("backPlot", t.addGroup()),
              this.set("middlePlot", t.addGroup({ zIndex: 10 })),
              this.set("frontPlot", t.addGroup({ zIndex: 20 }));
          },
        },
        {
          key: "_initEvents",
          value: function () {
            var t = this;
            this.on(q, function () {
              t._initFilteredData(), t._changeGeomsData();
            }),
              this.on(Z, function () {
                t._initLayout();
                var e = t.get("coord");
                e && e.reset(t.get("plot"));
              });
          },
        },
        {
          key: "_initScaleController",
          value: function () {
            var t = new fi({ chart: this });
            this.set("colDefs", t.defs),
              this.set("scales", t.scales),
              this.set("scaleController", t);
          },
        },
        {
          key: "_clearScaleController",
          value: function () {
            this.get("scaleController").clear();
          },
        },
        {
          key: "_init",
          value: function () {
            var t = this;
            t._initCanvas(),
              t._initLayout(),
              t._initLayers(),
              t._initEvents(),
              t._initScaleController(),
              t.set(
                "axisController",
                new gi({
                  frontPlot: t
                    .get("frontPlot")
                    .addGroup({ className: "axisContainer" }),
                  backPlot: t
                    .get("backPlot")
                    .addGroup({ className: "axisContainer" }),
                  chart: t,
                })
              ),
              u.plugins.notify(t, "init");
          },
        },
        {
          key: "init",
          value: function () {
            this._initFilteredData(),
              this._initCoord(),
              u.plugins.notify(this, "beforeGeomInit"),
              this._initGeoms(),
              this._syncYScales(),
              this._adjustScale(),
              this.emit(V);
          },
        },
        {
          key: "source",
          value: function (t, e) {
            return this.set("data", t), e && this.scale(e), this;
          },
        },
        {
          key: "scale",
          value: function (t, e) {
            return this.get("scaleController").setFieldDef(t, e), this;
          },
        },
        {
          key: "axis",
          value: function (t, e) {
            var i = this.get("axisController");
            return (
              t
                ? ((i.axisCfg = i.axisCfg || {}), (i.axisCfg[t] = e))
                : (i.axisCfg = null),
              this
            );
          },
        },
        {
          key: "coord",
          value: function (t, e) {
            var i;
            return (
              h.isObject(t) ? (i = t) : ((i = e || {}).type = t || "cartesian"),
              this.set("coordCfg", i),
              this
            );
          },
        },
        {
          key: "filter",
          value: function (t, e) {
            var i = this.get("filters") || {};
            (i[t] = e),
              this.set("filters", i),
              this.get("rendered") && this.emit(q, this.get("data"));
          },
        },
        {
          key: "render",
          value: function () {
            var t = this.get("rendered"),
              e = this.get("canvas"),
              i = this.get("geoms");
            t
              ? (this._initGeoms(), this._adjustScale())
              : (this.init(), this.set("rendered", !0)),
              this.emit("beforerender"),
              u.plugins.notify(this, "beforeGeomDraw"),
              this._renderAxis();
            var n = this.get("middlePlot");
            if (this.get("limitInPlot") && !n.attr("clip")) {
              var r = tn(this.get("coord"));
              r.set("canvas", n.get("canvas")), n.attr("clip", r);
            }
            this.emit("beforegeomdraw");
            for (var a = 0, s = i.length; a < s; a++) i[a].paint();
            return (
              this.emit("aftergeomdraw"),
              u.plugins.notify(this, "afterGeomDraw"),
              e.sort(),
              this.get("frontPlot").sort(),
              u.plugins.notify(this, "beforeCanvasDraw"),
              e.draw(),
              this.emit("afterrender"),
              this
            );
          },
        },
        {
          key: "clear",
          value: function () {
            return (
              u.plugins.notify(this, "clear"),
              this.emit("clear"),
              this._clearInner(),
              this._removeGeoms(),
              this._clearScaleController(),
              this.set("legendItems", null),
              this.set("filters", null),
              this.set("isUpdate", !1),
              this.set("_padding", null),
              this.set("rendered", !1),
              this.get("canvas").draw(),
              this
            );
          },
        },
        {
          key: "repaint",
          value: function () {
            this.get("rendered") &&
              (this.set("isUpdate", !0),
              this.set("legendItems", null),
              u.plugins.notify(this, "repaint"),
              this._clearInner(),
              this.emit("repaint"),
              this.render());
          },
        },
        {
          key: "changeData",
          value: function (t) {
            this.emit("beforedatachange", t),
              this.set("data", t),
              u.plugins.notify(this, "changeData"),
              this.emit(q, t),
              this.set("_padding", null),
              this.repaint();
          },
        },
        {
          key: "changeSize",
          value: function (t, e) {
            return (
              t ? this.set("width", t) : (t = this.get("width")),
              e ? this.set("height", e) : (e = this.get("height")),
              this.get("canvas").changeSize(t, e),
              this.emit(Z, { width: t, height: e }),
              this.repaint(),
              this
            );
          },
        },
        {
          key: "destroy",
          value: function () {
            this.clear(),
              this.get("canvas").destroy(),
              u.plugins.notify(this, "afterCanvasDestroyed"),
              this._interactions &&
                h.each(this._interactions, function (t) {
                  t.destroy();
                }),
              n(r(u.prototype), "destroy", this).call(this);
          },
        },
        {
          key: "getPosition",
          value: function (t) {
            for (
              var e = this,
                i = e.get("coord"),
                n = e.getXScale(),
                r = n.field,
                a = e.getYScales(),
                s = a[0],
                o = s.field,
                l = 0,
                u = a.length;
              l < u;
              l++
            ) {
              var h = a[l],
                c = h.field;
              if (t[c]) {
                (s = h), (o = c);
                break;
              }
            }
            var f = n.scale(t[r]),
              v = s.scale(t[o]);
            return i.convertPoint({ x: f, y: v });
          },
        },
        {
          key: "getRecord",
          value: function (t) {
            var e = this,
              i = e.get("coord"),
              n = e.getXScale(),
              r = e.getYScales()[0],
              a = i.invertPoint(t),
              s = {};
            return (
              (s[n.field] = n.invert(a.x)), (s[r.field] = r.invert(a.y)), s
            );
          },
        },
        {
          key: "getSnapRecords",
          value: function (t) {
            var e = this.get("geoms")[0],
              i = [];
            return e && (i = e.getSnapRecords(t)), i;
          },
        },
        {
          key: "createScale",
          value: function (t) {
            var e = this._getScaleData(t);
            return this.get("scaleController").createScale(t, e);
          },
        },
        {
          key: "addGeom",
          value: function (t) {
            this.get("geoms").push(t);
          },
        },
        {
          key: "getXScale",
          value: function () {
            return this.get("geoms")[0].getXScale();
          },
        },
        {
          key: "getYScales",
          value: function () {
            var t = this.get("geoms"),
              e = [];
            return (
              h.each(t, function (t) {
                var i = t.getYScale();
                -1 === e.indexOf(i) && e.push(i);
              }),
              e
            );
          },
        },
        {
          key: "getLegendItems",
          value: function () {
            if (this.get("legendItems")) return this.get("legendItems");
            var t = {},
              e = [],
              i = this.get("geoms");
            return (
              h.each(i, function (i) {
                var n = i.getAttr("color");
                if (n) {
                  var r = n.getScale("color");
                  if (
                    r.isCategory &&
                    !(function (t, e) {
                      var i = !1;
                      return (
                        h.each(t, function (t) {
                          var n = [].concat(t.values),
                            r = [].concat(e.values);
                          t.type !== e.type ||
                            t.field !== e.field ||
                            n.sort(rn).toString() !== r.sort(rn).toString() ||
                            (i = !0);
                        }),
                        i
                      );
                    })(e, r)
                  ) {
                    e.push(r);
                    var a = r.field,
                      s = r.getTicks(),
                      o = [];
                    h.each(s, function (t) {
                      var e = t.text,
                        i = t.value,
                        a = r.invert(i),
                        s = {
                          fill: n.mapping(a).join("") || W.defaultColor,
                          radius: 3,
                          symbol: "circle",
                          stroke: "#fff",
                        };
                      o.push({ name: e, dataValue: a, checked: !0, marker: s });
                    }),
                      (t[a] = o);
                  }
                }
              }),
              this.set("legendItems", t),
              t
            );
          },
        },
        {
          key: "registerPlugins",
          value: function (t) {
            var e = this,
              i = e.get("plugins") || [];
            h.isArray(i) || (i = [i]),
              [].concat(t).forEach(function (t) {
                -1 === i.indexOf(t) && (t.init && t.init(e), i.push(t));
              }),
              u.plugins._cacheId++,
              e.set("plugins", i);
          },
        },
        {
          key: "_renderAxis",
          value: function () {
            var t = this.get("axisController"),
              e = this.getXScale(),
              i = this.getYScales(),
              n = this.get("coord");
            u.plugins.notify(this, "beforeRenderAxis"), t.createAxis(n, e, i);
          },
        },
        {
          key: "_isAutoPadding",
          value: function () {
            if (this.get("_padding")) return !1;
            var t = this.get("padding");
            return h.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t;
          },
        },
        {
          key: "_updateLayout",
          value: function (t) {
            var e = this.get("width"),
              i = this.get("height"),
              n = { x: t[3], y: t[0] },
              r = { x: e - t[1], y: i - t[2] },
              a = this.get("plot"),
              s = this.get("coord");
            a.reset(n, r), s.reset(a);
          },
        },
        {
          key: "landscape",
          value: function (t) {
            this.get("canvas").set("landscape", t);
          },
        },
      ],
      [
        {
          key: "initPlugins",
          value: function () {
            return {
              _plugins: [],
              _cacheId: 0,
              register: function (t) {
                var e = this._plugins;
                [].concat(t).forEach(function (t) {
                  -1 === e.indexOf(t) && e.push(t);
                }),
                  this._cacheId++;
              },
              unregister: function (t) {
                var e = this._plugins;
                [].concat(t).forEach(function (t) {
                  var i = e.indexOf(t);
                  -1 !== i && e.splice(i, 1);
                }),
                  this._cacheId++;
              },
              clear: function () {
                (this._plugins = []), this._cacheId++;
              },
              count: function () {
                return this._plugins.length;
              },
              getAll: function () {
                return this._plugins;
              },
              notify: function (t, e, i) {
                var n,
                  r,
                  a,
                  s,
                  o = this.descriptors(t),
                  l = o.length;
                for (n = 0; n < l; ++n)
                  if (
                    "function" == typeof (s = (r = o[n].plugin)[e]) &&
                    ((a = [t].concat(i || [])), !1 === s.apply(r, a))
                  )
                    return !1;
                return !0;
              },
              descriptors: function (t) {
                var e = t._plugins || (t._plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var i = [],
                  n = [];
                return (
                  this._plugins
                    .concat((t && t.get("plugins")) || [])
                    .forEach(function (t) {
                      -1 === i.indexOf(t) && (i.push(t), n.push({ plugin: t }));
                    }),
                  (e.descriptors = n),
                  (e.id = this._cacheId),
                  n
                );
              },
            };
          },
        },
      ]
    ),
    u
  );
})();
an.plugins = an.initPlugins();
var sn = function () {
  return null;
};
function on(t) {
  var e = [],
    i = t.x,
    n = t.y;
  return (
    (n = h.isArray(n) ? n : [n]).forEach(function (t, n) {
      var r = { x: h.isArray(i) ? i[n] : i, y: t };
      e.push(r);
    }),
    e
  );
}
function ln(t, e, i) {
  if (!t.length) return [];
  var n,
    r = [],
    a = [];
  return (
    h.each(t, function (t) {
      (n = t._origin ? t._origin[e] : t[e]),
        i
          ? h.isNil(n) || a.push(t)
          : (h.isArray(n) && h.isNil(n[0])) || h.isNil(n)
          ? a.length && (r.push(a), (a = []))
          : a.push(t);
    }),
    a.length && r.push(a),
    r
  );
}
function un(t, e, i) {
  if (0 !== t.size) {
    var n = (function (t) {
        var e = { lineWidth: 0, stroke: t.color, fill: t.color };
        return (
          t.size && (e.size = t.size),
          h.mix(e, t.style),
          h.mix({}, W.shape.point, e)
        );
      })(t),
      r = n.r || n.size,
      a = t.x,
      s = h.isArray(t.y) ? t.y : [t.y];
    "hollowCircle" === i && ((n.lineWidth = 1), (n.fill = null));
    for (var o = 0, l = s.length; o < l; o++)
      return "rect" === i
        ? e.addShape("Rect", {
            className: "point",
            attrs: h.mix(
              { x: a - r, y: s[o] - r, width: 2 * r, height: 2 * r },
              n
            ),
          })
        : e.addShape("Circle", {
            className: "point",
            attrs: h.mix({ x: a, y: s[o], r: r }, n),
          });
  }
}
W.version,
  ct.registerFactory("point", {
    defaultShapeType: "circle",
    getDefaultPoints: function (t) {
      return on(t);
    },
  }),
  h.each(["circle", "hollowCircle", "rect"], function (t) {
    ct.registerShape("point", t, {
      draw: function (e, i) {
        return un(e, i, t);
      },
    });
  }),
  (wt.Point = (function (t) {
    a(i, wt);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            var t = n(r(i.prototype), "getDefaultCfg", this).call(this);
            return (
              (t.type = "point"),
              (t.shapeType = "point"),
              (t.generatePoints = !1),
              t
            );
          },
        },
        {
          key: "draw",
          value: function (t, e) {
            var i = this,
              n = i.get("container");
            h.each(t, function (t) {
              var r = t.shape,
                a = i.getDrawCfg(t);
              if (h.isArray(t.y)) {
                var s = i.hasAdjust("stack");
                h.each(t.y, function (o, l) {
                  (a.y = o), (s && 0 === l) || i.drawShape(r, t, a, n, e);
                });
              } else h.isNil(t.y) || i.drawShape(r, t, a, n, e);
            });
          },
        },
      ]),
      i
    );
  })()),
  ct.registerFactory("line", { defaultShapeType: "line" }),
  h.each(["line", "smooth", "dash"], function (t) {
    ct.registerShape("line", t, {
      draw: function (e, i) {
        var n = "smooth" === t,
          r = (function (t) {
            var e = { strokeStyle: t.color };
            return (
              t.size >= 0 && (e.lineWidth = t.size),
              h.mix(e, t.style),
              h.mix({}, W.shape.line, e)
            );
          })(e);
        return (
          "dash" === t && (r.lineDash = W.lineDash),
          (function (t, e, i, n) {
            var r = t.points;
            if (r.length && h.isArray(r[0].y)) {
              for (var a = [], s = [], o = 0, l = r.length; o < l; o++) {
                var u = on(r[o]);
                s.push(u[0]), a.push(u[1]);
              }
              return (
                t.isInCircle && (a.push(a[0]), s.push(s[0])),
                t.isStack
                  ? e.addShape("Polyline", {
                      className: "line",
                      attrs: h.mix({ points: a, smooth: n }, i),
                    })
                  : [
                      e.addShape("Polyline", {
                        className: "line",
                        attrs: h.mix({ points: a, smooth: n }, i),
                      }),
                      e.addShape("Polyline", {
                        className: "line",
                        attrs: h.mix({ points: s, smooth: n }, i),
                      }),
                    ]
              );
            }
            return (
              t.isInCircle && r.push(r[0]),
              e.addShape("Polyline", {
                className: "line",
                attrs: h.mix({ points: r, smooth: n }, i),
              })
            );
          })(e, i, r, n)
        );
      },
    });
  });
var hn = (function (t) {
  a(i, wt);
  var e = s(i);
  function i() {
    return o(this, i), e.apply(this, arguments);
  }
  return (
    l(i, [
      {
        key: "getDefaultCfg",
        value: function () {
          var t = n(r(i.prototype), "getDefaultCfg", this).call(this);
          return (t.type = "path"), (t.shapeType = "line"), t;
        },
      },
      {
        key: "getDrawCfg",
        value: function (t) {
          var e = n(r(i.prototype), "getDrawCfg", this).call(this, t);
          return (e.isStack = this.hasAdjust("stack")), e;
        },
      },
      {
        key: "draw",
        value: function (t, e) {
          var i = this,
            n = i.get("container"),
            r = i.getYScale(),
            a = i.get("connectNulls"),
            s = ln(t, r.field, a),
            o = this.getDrawCfg(t[0]);
          (o.origin = t),
            h.each(s, function (r, a) {
              (o.splitedIndex = a),
                (o.points = r),
                i.drawShape(o.shape, t[0], o, n, e);
            });
        },
      },
    ]),
    i
  );
})();
function cn(t, e) {
  return Math.abs(t - e) < 1e-5;
}
function fn(t) {
  return !isNaN(t) && !h.isNil(t);
}
function vn(t) {
  for (var e = [], i = 0, n = t.length; i < n; i++) {
    var r = t[i];
    fn(r.x) && fn(r.y) && e.push(r);
  }
  return e;
}
function gn(t, e, i) {
  var n = t.points,
    r = [],
    a = [];
  h.each(n, function (t) {
    a.push(t[0]), r.push(t[1]);
  });
  var s = h.mix({ fillStyle: t.color }, W.shape.area, t.style);
  return (
    a.reverse(),
    (r = this.parsePoints(r)),
    (a = this.parsePoints(a)),
    t.isInCircle &&
      (r.push(r[0]),
      a.unshift(a[a.length - 1]),
      (function (t, e) {
        var i = !0;
        return (
          h.each(t, function (t) {
            if (!cn(t.x, e.x) || !cn(t.y, e.y)) return (i = !1), !1;
          }),
          i
        );
      })(a, t.center) && (a = [])),
    (function (t, e, i, n, r) {
      var a = t.concat(e);
      return r
        ? i.addShape("Custom", {
            className: "area",
            attrs: h.mix({ points: a }, n),
            createPath: function (t) {
              var e = [
                  [0, 0],
                  [1, 1],
                ],
                i = vn(this._attrs.attrs.points),
                n = i.length,
                r = i.slice(0, n / 2),
                a = i.slice(n / 2, n),
                s = zi(r, 0, e);
              t.beginPath(), t.moveTo(r[0].x, r[0].y);
              for (var o = 0, l = s.length; o < l; o++) {
                var u = s[o];
                t.bezierCurveTo(u[1], u[2], u[3], u[4], u[5], u[6]);
              }
              if (a.length) {
                var h = zi(a, 0, e);
                t.lineTo(a[0].x, a[0].y);
                for (var c = 0, f = h.length; c < f; c++) {
                  var v = h[c];
                  t.bezierCurveTo(v[1], v[2], v[3], v[4], v[5], v[6]);
                }
              }
              t.closePath();
            },
            calculateBox: function () {
              return Ei(vn(this._attrs.attrs.points));
            },
          })
        : i.addShape("Polyline", {
            className: "area",
            attrs: h.mix({ points: a }, n),
          });
    })(r, a, e, s, i)
  );
}
(wt.Path = hn),
  (wt.Line = (function (t) {
    a(i, hn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            var t = n(r(i.prototype), "getDefaultCfg", this).call(this);
            return (t.type = "line"), (t.sortable = !0), t;
          },
        },
      ]),
      i
    );
  })()),
  ct.registerFactory("area", {
    defaultShapeType: "area",
    getDefaultPoints: function (t) {
      var e = t.x,
        i = t.y,
        n = t.y0;
      i = h.isArray(i) ? i : [n, i];
      var r = [];
      return r.push({ x: e, y: i[0] }, { x: e, y: i[1] }), r;
    },
  }),
  h.each(["area", "smooth"], function (t) {
    ct.registerShape("area", t, {
      draw: function (e, i) {
        var n = "smooth" === t;
        return gn.call(this, e, i, n);
      },
    });
  }),
  (wt.Area = (function (t) {
    a(i, wt);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            var t = n(r(i.prototype), "getDefaultCfg", this).call(this);
            return (
              (t.type = "area"),
              (t.shapeType = "area"),
              (t.generatePoints = !0),
              (t.sortable = !0),
              t
            );
          },
        },
        {
          key: "draw",
          value: function (t, e) {
            var i = this,
              n = i.get("container"),
              r = this.getDrawCfg(t[0]),
              a = i.getYScale(),
              s = i.get("connectNulls"),
              o = ln(t, a.field, s);
            (r.origin = t),
              h.each(o, function (a, s) {
                r.splitedIndex = s;
                var o = a.map(function (t) {
                  return t.points;
                });
                (r.points = o), i.drawShape(r.shape, t[0], r, n, e);
              });
          },
        },
      ]),
      i
    );
  })());
var dn = {
  initEvent: function () {
    var t = this,
      e = this.get("chart");
    e &&
      e.on(Z, function () {
        t.set("_width", null);
      });
  },
  getDefaultSize: function () {
    var t = this.get("defaultSize");
    if (!t) {
      var e = this.get("coord"),
        i = this.getXScale(),
        n = this.get("dataArray"),
        r = h.uniq(i.values).length,
        a = i.range,
        s = 1 / r,
        o = 1;
      e && e.isPolar
        ? (o =
            e.transposed && r > 1
              ? W.widthRatio.multiplePie
              : W.widthRatio.rose)
        : (i.isLinear && (s *= a[1] - a[0]), (o = W.widthRatio.column)),
        (s *= o),
        this.hasAdjust("dodge") && (s /= n.length),
        (t = s),
        this.set("defaultSize", t);
    }
    return t;
  },
  getDimWidth: function (t) {
    var e = this.get("coord"),
      i = e.convertPoint({ x: 0, y: 0 }),
      n = e.convertPoint({ x: "x" === t ? 1 : 0, y: "x" === t ? 0 : 1 }),
      r = 0;
    return (
      i &&
        n &&
        (r = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))),
      r
    );
  },
  _getWidth: function () {
    var t = this.get("_width");
    if (!t) {
      var e = this.get("coord");
      (t =
        e && e.isPolar && !e.transposed
          ? (e.endAngle - e.startAngle) * e.circleRadius
          : this.getDimWidth("x")),
        this.set("_width", t);
    }
    return t;
  },
  _toNormalizedSize: function (t) {
    return t / this._getWidth();
  },
  _toCoordSize: function (t) {
    return this._getWidth() * t;
  },
  getNormalizedSize: function (t) {
    var e = this.getAttrValue("size", t);
    return h.isNil(e) ? this.getDefaultSize() : this._toNormalizedSize(e);
  },
  getSize: function (t) {
    var e = this.getAttrValue("size", t);
    if (h.isNil(e)) {
      var i = this.getDefaultSize();
      e = this._toCoordSize(i);
    }
    return e;
  },
};
function pn(t) {
  var e,
    i,
    n = t.x,
    r = t.y,
    a = t.y0,
    s = t.size,
    o = a,
    l = r;
  return (
    h.isArray(r) && ((l = r[1]), (o = r[0])),
    h.isArray(n)
      ? ((e = n[0]), (i = n[1]))
      : ((e = n - s / 2), (i = n + s / 2)),
    [
      { x: e, y: o },
      { x: e, y: l },
      { x: i, y: l },
      { x: i, y: o },
    ]
  );
}
ct.registerFactory("interval", {
  defaultShapeType: "rect",
  getDefaultPoints: function (t) {
    return pn(t);
  },
}),
  ct.registerShape("interval", "rect", {
    draw: function (t, e) {
      var i = this.parsePoints(t.points),
        n = h.mix({ fill: t.color }, W.shape.interval, t.style);
      if (t.isInCircle) {
        var r = i.slice(0);
        this._coord.transposed && (r = [i[0], i[3], i[2], i[1]]);
        var a = t.center,
          s = a.x,
          o = a.y,
          l = [1, 0],
          u = [r[0].x - s, r[0].y - o],
          c = [r[1].x - s, r[1].y - o],
          f = [r[2].x - s, r[2].y - o],
          v = Q.angleTo(l, c),
          g = Q.angleTo(l, f),
          d = Q.length(u),
          p = Q.length(c);
        return (
          v >= 1.5 * Math.PI && (v -= 2 * Math.PI),
          g >= 1.5 * Math.PI && (g -= 2 * Math.PI),
          e.addShape("Sector", {
            className: "interval",
            attrs: h.mix(
              { x: s, y: o, r: p, r0: d, startAngle: v, endAngle: g },
              n
            ),
          })
        );
      }
      var y = (function (t) {
        for (var e = [], i = [], n = 0, r = t.length; n < r; n++) {
          var a = t[n];
          e.push(a.x), i.push(a.y);
        }
        var s = Math.min.apply(null, e),
          o = Math.min.apply(null, i);
        return {
          x: s,
          y: o,
          width: Math.max.apply(null, e) - s,
          height: Math.max.apply(null, i) - o,
        };
      })(i);
      return e.addShape("rect", { className: "interval", attrs: h.mix(y, n) });
    },
  }),
  ["pyramid", "funnel"].forEach(function (t) {
    ct.registerShape("interval", t, {
      getPoints: function (t) {
        return (t.size = 2 * t.size), pn(t);
      },
      draw: function (e, i) {
        var n,
          r,
          a = this.parsePoints(e.points),
          s = this.parsePoints(e.nextPoints),
          o = null;
        s
          ? (o = [a[0], a[1], s[1], s[0]])
          : ((o = [a[0], a[1]]),
            "pyramid" === t
              ? o.push(
                  ((n = a[2]),
                  (r = a[3]),
                  { x: (n.x - r.x) / 2 + r.x, y: (n.y - r.y) / 2 + r.y })
                )
              : o.push(a[2], a[3]));
        var l = h.mix({ fill: e.color, points: o }, W.shape.interval, e.style);
        return i.addShape("polygon", { className: "interval", attrs: l });
      },
    });
  }),
  (wt.Interval = (function (t) {
    a(u, wt);
    var e = s(u);
    function u(t) {
      var n;
      return o(this, u), (n = e.call(this, t)), h.mix(i(n), dn), n;
    }
    return (
      l(u, [
        {
          key: "getDefaultCfg",
          value: function () {
            var t = n(r(u.prototype), "getDefaultCfg", this).call(this);
            return (
              (t.type = "interval"),
              (t.shapeType = "interval"),
              (t.generatePoints = !0),
              t
            );
          },
        },
        {
          key: "init",
          value: function () {
            n(r(u.prototype), "init", this).call(this), this.initEvent();
          },
        },
        {
          key: "createShapePointsCfg",
          value: function (t) {
            var e = n(r(u.prototype), "createShapePointsCfg", this).call(
              this,
              t
            );
            return (e.size = this.getNormalizedSize(t)), e;
          },
        },
        {
          key: "clearInner",
          value: function () {
            n(r(u.prototype), "clearInner", this).call(this),
              this.set("defaultSize", null);
          },
        },
      ]),
      u
    );
  })()),
  ct.registerFactory("polygon", {
    defaultShapeType: "polygon",
    getDefaultPoints: function (t) {
      for (var e = [], i = t.x, n = t.y, r = 0, a = i.length; r < a; r++)
        e.push({ x: i[r], y: n[r] });
      return e;
    },
  }),
  ct.registerShape("polygon", "polygon", {
    draw: function (t, e) {
      var i = this.parsePoints(t.points),
        n = h.mix({ fill: t.color, points: i }, t.style);
      return e.addShape("Polygon", { className: "polygon", attrs: n });
    },
  }),
  (wt.Polygon = (function (t) {
    a(i, wt);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            var t = n(r(i.prototype), "getDefaultCfg", this).call(this);
            return (
              (t.type = "polygon"),
              (t.shapeType = "polygon"),
              (t.generatePoints = !0),
              t
            );
          },
        },
        {
          key: "createShapePointsCfg",
          value: function (t) {
            var e,
              a = n(r(i.prototype), "createShapePointsCfg", this).call(this, t),
              s = a.x,
              o = a.y;
            if (!h.isArray(s) || !h.isArray(o)) {
              var l = this.getXScale(),
                u = this.getYScale(),
                c = 0.5 / (l.values ? l.values.length : l.ticks.length),
                f = 0.5 / (u.values ? u.values.length : u.ticks.length);
              l.isCategory && u.isCategory
                ? ((s = [s - c, s - c, s + c, s + c]),
                  (o = [o - f, o + f, o + f, o - f]))
                : h.isArray(s)
                ? ((s = [(e = s)[0], e[0], e[1], e[1]]),
                  (o = [o - f / 2, o + f / 2, o + f / 2, o - f / 2]))
                : h.isArray(o) &&
                  ((o = [(e = o)[0], e[1], e[1], e[0]]),
                  (s = [s - c / 2, s - c / 2, s + c / 2, s + c / 2])),
                (a.x = s),
                (a.y = o);
            }
            return a;
          },
        },
      ]),
      i
    );
  })()),
  ct.registerFactory("schema", {}),
  ct.registerShape("schema", "candle", {
    getPoints: function (t) {
      return (
        (e = t.x),
        (i = t.y),
        (n = t.size),
        (r = (function (t) {
          var e = t.sort(function (t, e) {
              return t < e ? 1 : -1;
            }),
            i = e.length;
          if (i < 4) for (var n = e[i - 1], r = 0; r < 4 - i; r++) e.push(n);
          return e;
        })(i)),
        [
          { x: e, y: r[0] },
          { x: e, y: r[1] },
          { x: e - n / 2, y: r[2] },
          { x: e - n / 2, y: r[1] },
          { x: e + n / 2, y: r[1] },
          { x: e + n / 2, y: r[2] },
          { x: e, y: r[2] },
          { x: e, y: r[3] },
        ]
      );
      var e, i, n, r;
    },
    draw: function (t, e) {
      var i = this.parsePoints(t.points),
        n = h.mix({ stroke: t.color, fill: t.color, lineWidth: 1 }, t.style);
      return e.addShape("Custom", {
        className: "schema",
        attrs: n,
        createPath: function (t) {
          t.beginPath(),
            t.moveTo(i[0].x, i[0].y),
            t.lineTo(i[1].x, i[1].y),
            t.moveTo(i[2].x, i[2].y);
          for (var e = 3; e < 6; e++) t.lineTo(i[e].x, i[e].y);
          t.closePath(), t.moveTo(i[6].x, i[6].y), t.lineTo(i[7].x, i[7].y);
        },
      });
    },
  }),
  (wt.Schema = (function (t) {
    a(u, wt);
    var e = s(u);
    function u(t) {
      var n;
      return o(this, u), (n = e.call(this, t)), h.mix(i(n), dn), n;
    }
    return (
      l(u, [
        {
          key: "getDefaultCfg",
          value: function () {
            var t = n(r(u.prototype), "getDefaultCfg", this).call(this);
            return (
              (t.type = "schema"),
              (t.shapeType = "schema"),
              (t.generatePoints = !0),
              t
            );
          },
        },
        {
          key: "init",
          value: function () {
            n(r(u.prototype), "init", this).call(this), this.initEvent();
          },
        },
        {
          key: "createShapePointsCfg",
          value: function (t) {
            var e = n(r(u.prototype), "createShapePointsCfg", this).call(
              this,
              t
            );
            return (e.size = this.getNormalizedSize(t)), e;
          },
        },
        {
          key: "clearInner",
          value: function () {
            n(r(u.prototype), "clearInner", this).call(this),
              this.set("defaultSize", null);
          },
        },
      ]),
      u
    );
  })());
var yn = {}.toString,
  mn = function (t, e) {
    return yn.call(t) === "[object " + e + "]";
  },
  xn = mn,
  kn = Array.isArray
    ? Array.isArray
    : function (t) {
        return xn(t, "Array");
      },
  _n = kn,
  Sn = function (t) {
    return null == t;
  },
  bn = dt,
  Mn = (function (t) {
    var e, i;
    function n() {
      return t.apply(this, arguments) || this;
    }
    (i = t),
      ((e = n).prototype = Object.create(i.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = i);
    var r = n.prototype;
    return (
      (r._initDefaultCfg = function () {
        (this.xField = null), (this.yField = null);
      }),
      (r.processAdjust = function (t) {
        this.processStack(t);
      }),
      (r.processStack = function (t) {
        var e = this,
          i = e.xField,
          n = e.yField,
          r = t.length,
          a = { positive: {}, negative: {} };
        e.reverseOrder && (t = t.slice(0).reverse());
        for (var s = 0; s < r; s++)
          for (var o = t[s], l = 0, u = o.length; l < u; l++) {
            var h = o[l],
              c = h[i] || 0,
              f = h[n],
              v = c.toString();
            if (((f = _n(f) ? f[1] : f), !Sn(f))) {
              var g = f >= 0 ? "positive" : "negative";
              a[g][v] || (a[g][v] = 0),
                (h[n] = [a[g][v], f + a[g][v]]),
                (a[g][v] += f);
            }
          }
      }),
      n
    );
  })(bn);
bn.Stack = Mn;
var wn =
    "function" == typeof Symbol && "symbol" == u(Symbol.iterator)
      ? function (t) {
          return u(t);
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : u(t);
        },
  Pn = kn,
  Cn = function (t, e) {
    if (t)
      if (Pn(t)) for (var i = 0, n = t.length; i < n && !1 !== e(t[i], i); i++);
      else if (
        (function (t) {
          var e = void 0 === t ? "undefined" : wn(t);
          return (null !== t && "object" === e) || "function" === e;
        })(t)
      )
        for (var r in t) if (t.hasOwnProperty(r) && !1 === e(t[r], r)) break;
  },
  Tn = dt,
  An = Cn,
  Dn = (function (t) {
    var e, i;
    function n() {
      return t.apply(this, arguments) || this;
    }
    (i = t),
      ((e = n).prototype = Object.create(i.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = i);
    var r = n.prototype;
    return (
      (r._initDefaultCfg = function () {
        (this.marginRatio = 0.5),
          (this.dodgeRatio = 0.5),
          (this.adjustNames = ["x", "y"]);
      }),
      (r.getDodgeOffset = function (t, e, i) {
        var n = t.pre,
          r = t.next,
          a = r - n,
          s = (a * this.dodgeRatio) / i,
          o = this.marginRatio * s;
        return (
          (n + r) / 2 +
          (0.5 * (a - i * s - (i - 1) * o) +
            ((e + 1) * s + e * o) -
            0.5 * s -
            0.5 * a)
        );
      }),
      (r.processAdjust = function (t) {
        var e = this,
          i = t.length,
          n = e.xField;
        An(t, function (t, r) {
          for (var a = 0, s = t.length; a < s; a++) {
            var o = t[a],
              l = o[n],
              u = {
                pre: 1 === s ? l - 1 : l - 0.5,
                next: 1 === s ? l + 1 : l + 0.5,
              },
              h = e.getDodgeOffset(u, r, i);
            o[n] = h;
          }
        });
      }),
      n
    );
  })(Tn);
Tn.Dodge = Dn;
var Nn = mn,
  In = kn,
  On = function (t) {
    return Nn(t, "Function");
  },
  Yn = Cn,
  En = Cn,
  Fn = kn,
  jn = function (t) {
    for (var e = [], i = 0; i < t.length; i++) e = e.concat(t[i]);
    return e;
  },
  zn = dt,
  Bn = (function (t) {
    var e, i;
    function n() {
      return t.apply(this, arguments) || this;
    }
    (i = t),
      ((e = n).prototype = Object.create(i.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = i);
    var r = n.prototype;
    return (
      (r._initDefaultCfg = function () {
        (this.xField = null),
          (this.yField = null),
          (this.cacheMax = null),
          (this.adjustNames = ["y"]),
          (this.groupFields = null);
      }),
      (r._getMax = function (t) {
        var e = (function (t, e) {
          if (In(t)) {
            var i = t[0],
              n = void 0;
            n = On(e) ? e(t[0]) : t[0][e];
            var r = void 0;
            return (
              Yn(t, function (t) {
                (r = On(e) ? e(t) : t[e]) > n && ((i = t), (n = r));
              }),
              i
            );
          }
        })(this.mergeData, function (e) {
          var i = e[t];
          return Fn(i) ? Math.max.apply(null, i) : i;
        })[t];
        return Fn(e) ? Math.max.apply(null, e) : e;
      }),
      (r._getXValuesMax = function () {
        var t = this,
          e = t.yField,
          i = t.xField,
          n = {},
          r = t.mergeData;
        return (
          En(r, function (t) {
            var r = t[i],
              a = t[e],
              s = Fn(a) ? Math.max.apply(null, a) : a;
            (n[r] = n[r] || 0), n[r] < s && (n[r] = s);
          }),
          n
        );
      }),
      (r.processAdjust = function (t) {
        var e = this,
          i = jn(t);
        (e.mergeData = i), e._processSymmetric(t), (e.mergeData = null);
      }),
      (r._processSymmetric = function (t) {
        var e,
          i = this,
          n = i.xField,
          r = i.yField,
          a = i._getMax(r),
          s = t[0][0];
        s && Fn(s[r]) && (e = i._getXValuesMax()),
          En(t, function (t) {
            En(t, function (t) {
              var i,
                s = t[r];
              if (Fn(s)) {
                var o = t[n],
                  l = e[o];
                i = (a - l) / 2;
                var u = [];
                En(s, function (t) {
                  u.push(i + t);
                }),
                  (t[r] = u);
              } else (i = (a - s) / 2), (t[r] = [i, s + i]);
            });
          });
      }),
      n
    );
  })(zn);
(zn.Symmetric = Bn),
  (et.Polar = (function (t) {
    a(i, et);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "polar"),
              (this.startAngle = -Math.PI / 2),
              (this.endAngle = (3 * Math.PI) / 2),
              (this.inner = 0),
              (this.innerRadius = 0),
              (this.isPolar = !0),
              (this.transposed = !1),
              (this.center = null),
              (this.radius = null);
          },
        },
        {
          key: "init",
          value: function (t, e) {
            n(r(i.prototype), "init", this).call(this, t, e);
            var a,
              s,
              o = this,
              l = o.inner || o.innerRadius,
              u = Math.abs(e.x - t.x),
              h = Math.abs(e.y - t.y);
            o.startAngle === -Math.PI && 0 === o.endAngle
              ? ((a = Math.min(u / 2, h)), (s = { x: (t.x + e.x) / 2, y: t.y }))
              : ((a = Math.min(u, h) / 2),
                (s = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }));
            var c = o.radius;
            c > 0 && c <= 1 && (a *= c),
              (this.x = { start: o.startAngle, end: o.endAngle }),
              (this.y = { start: a * l, end: a }),
              (this.center = s),
              (this.circleRadius = a);
          },
        },
        {
          key: "_convertPoint",
          value: function (t) {
            var e = this,
              i = e.center,
              n = e.transposed,
              r = n ? "y" : "x",
              a = n ? "x" : "y",
              s = e.x,
              o = e.y,
              l = s.start + (s.end - s.start) * t[r],
              u = o.start + (o.end - o.start) * t[a];
            return { x: i.x + Math.cos(l) * u, y: i.y + Math.sin(l) * u };
          },
        },
        {
          key: "_invertPoint",
          value: function (t) {
            var e = this.center,
              i = this.transposed,
              n = this.x,
              r = this.y,
              a = i ? "y" : "x",
              s = i ? "x" : "y",
              o = [1, 0, 0, 1, 0, 0];
            K.rotate(o, o, n.start);
            var l = [1, 0];
            Q.transformMat2d(l, l, o), (l = [l[0], l[1]]);
            var u = [t.x - e.x, t.y - e.y];
            if (Q.zero(u)) return { x: 0, y: 0 };
            var h = Q.angleTo(l, u, n.end < n.start);
            Math.abs(h - 2 * Math.PI) < 0.001 && (h = 0);
            var c = Q.length(u),
              f = h / (n.end - n.start);
            f = n.end - n.start > 0 ? f : -f;
            var v = (c - r.start) / (r.end - r.start),
              g = {};
            return (g[a] = f), (g[s] = v), g;
          },
        },
      ]),
      i
    );
  })()),
  (vi.Circle = (function (t) {
    a(i, vi);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            n(r(i.prototype), "_initDefaultCfg", this).call(this),
              (this.startAngle = -Math.PI / 2),
              (this.endAngle = (3 * Math.PI) / 2),
              (this.radius = null),
              (this.center = null);
          },
        },
        {
          key: "getOffsetPoint",
          value: function (t) {
            var e = this.startAngle,
              i = e + (this.endAngle - e) * t;
            return this._getCirclePoint(i);
          },
        },
        {
          key: "_getCirclePoint",
          value: function (t, e) {
            var i = this.center;
            return (
              (e = e || this.radius),
              { x: i.x + Math.cos(t) * e, y: i.y + Math.sin(t) * e }
            );
          },
        },
        {
          key: "getTextAlignInfo",
          value: function (t, e) {
            var i,
              n = this.getOffsetVector(t, e),
              r = "middle";
            return (
              n[0] > 0
                ? (i = "left")
                : n[0] < 0
                ? (i = "right")
                : ((i = "center"),
                  n[1] > 0 ? (r = "top") : n[1] < 0 && (r = "bottom")),
              { textAlign: i, textBaseline: r }
            );
          },
        },
        {
          key: "getAxisVector",
          value: function (t) {
            var e = this.center,
              i = this.offsetFactor;
            return [(t.y - e.y) * i, -1 * (t.x - e.x) * i];
          },
        },
        {
          key: "drawLine",
          value: function (t) {
            var e = this.center,
              i = this.radius,
              n = this.startAngle,
              r = this.endAngle;
            this.getContainer(t.top).addShape("arc", {
              className: "axis-line",
              attrs: h.mix(
                { x: e.x, y: e.y, r: i, startAngle: n, endAngle: r },
                t
              ),
            });
          },
        },
      ]),
      i
    );
  })());
var Ln = { min: 0, median: 0.5, max: 1 },
  Xn = (function () {
    function t(e) {
      o(this, t), this._initDefaultCfg(), h.deepMix(this, e);
    }
    return (
      l(t, [
        { key: "_initDefaultCfg", value: function () {} },
        {
          key: "_getNormalizedValue",
          value: function (t, e) {
            return h.isNil(Ln[t]) ? e.scale(t) : Ln[t];
          },
        },
        {
          key: "parsePercentPoint",
          value: function (t, e) {
            var i = parseFloat(e[0]) / 100,
              n = parseFloat(e[1]) / 100,
              r = t.start,
              a = t.end,
              s = Math.abs(r.x - a.x),
              o = Math.abs(r.y - a.y);
            return {
              x: s * i + Math.min(r.x, a.x),
              y: o * n + Math.min(r.y, a.y),
            };
          },
        },
        {
          key: "parsePoint",
          value: function (t, e) {
            var i = this,
              n = i.xScale,
              r = i.yScales;
            if (
              (h.isFunction(e) && (e = e(n, r)),
              h.isString(e[0]) &&
                -1 !== e[0].indexOf("%") &&
                !isNaN(e[0].slice(0, -1)))
            )
              return this.parsePercentPoint(t, e);
            var a = i._getNormalizedValue(e[0], n),
              s = i._getNormalizedValue(e[1], r[0]),
              o = t.convertPoint({ x: a, y: s });
            return i.limitInPlot
              ? a >= 0 && a <= 1 && s >= 0 && s <= 1
                ? o
                : null
              : o;
          },
        },
        { key: "render", value: function () {} },
        {
          key: "repaint",
          value: function () {
            this.remove();
            var t = this.coord,
              e = this.container,
              i = this.canvas;
            e && !e.isDestroyed() && (this.render(t, e), i.draw());
          },
        },
        {
          key: "remove",
          value: function () {
            var t = this.element;
            t && t.remove(!0);
          },
        },
        {
          key: "changeVisible",
          value: function (t) {
            this.visible = t;
            var e = this.element;
            e &&
              (e.set
                ? e.set("visible", t)
                : (e.style.display = t ? "" : "none"));
          },
        },
      ]),
      t
    );
  })();
function Gn(t, e) {
  for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
  return t;
}
function Rn(t) {
  var e = document.createElement("div");
  return (
    (t = t.replace(/(^\s*)|(\s*$)/g, "")),
    (e.innerHTML = "" + t),
    e.childNodes[0]
  );
}
(Xn.Arc = (function (t) {
  a(i, Xn);
  var e = s(i);
  function i() {
    return o(this, i), e.apply(this, arguments);
  }
  return (
    l(i, [
      {
        key: "_initDefaultCfg",
        value: function () {
          (this.type = "arc"),
            (this.start = []),
            (this.end = []),
            (this.style = { stroke: "#999", lineWidth: 1 });
        },
      },
      {
        key: "render",
        value: function (t, e) {
          var i = this,
            n = i.parsePoint(t, i.start),
            r = i.parsePoint(t, i.end);
          if (n && r) {
            var a = t.center,
              s = Math.sqrt(
                (n.x - a.x) * (n.x - a.x) + (n.y - a.y) * (n.y - a.y)
              ),
              o = Math.atan2(n.y - a.y, n.x - a.x),
              l = Math.atan2(r.y - a.y, r.x - a.x),
              u = e.addShape("arc", {
                className: "guide-arc",
                attrs: h.mix(
                  { x: a.x, y: a.y, r: s, startAngle: o, endAngle: l },
                  i.style
                ),
              });
            return (i.element = u), u;
          }
        },
      },
    ]),
    i
  );
})()),
  (Xn.Html = (function (t) {
    a(i, Xn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "html"),
              (this.position = null),
              (this.alignX = "center"),
              (this.alignY = "middle"),
              (this.offsetX = null),
              (this.offsetY = null),
              (this.html = null);
          },
        },
        {
          key: "render",
          value: function (t, e) {
            var i = this,
              n = i.parsePoint(t, i.position);
            if (n) {
              var r = Rn(i.html);
              r = Gn(r, {
                position: "absolute",
                top: Math.floor(n.y) + "px",
                left: Math.floor(n.x) + "px",
                visibility: "hidden",
              });
              var a = e.get("canvas").get("el"),
                s = a.parentNode;
              s = Gn(s, { position: "relative" });
              var o = Rn(
                '<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>'
              );
              s.appendChild(o), o.appendChild(r);
              var l = a.offsetTop,
                u = a.offsetLeft,
                h = i.alignX,
                c = i.alignY,
                f = i.offsetX,
                v = i.offsetY,
                g = (function (t, e, i, n) {
                  var r = [];
                  return (
                    "left" === t && "top" === e
                      ? ((r[0] = 0), (r[1] = 0))
                      : "right" === t && "top" === e
                      ? ((r[0] = -i), (r[1] = 0))
                      : "left" === t && "bottom" === e
                      ? ((r[0] = 0), (r[1] = Math.floor(-n)))
                      : "right" === t && "bottom" === e
                      ? ((r[0] = Math.floor(-i)), (r[1] = Math.floor(-n)))
                      : "right" === t && "middle" === e
                      ? ((r[0] = Math.floor(-i)), (r[1] = Math.floor(-n / 2)))
                      : "left" === t && "middle" === e
                      ? ((r[0] = 0), (r[1] = Math.floor(-n / 2)))
                      : "center" === t && "bottom" === e
                      ? ((r[0] = Math.floor(-i / 2)), (r[1] = Math.floor(-n)))
                      : "center" === t && "top" === e
                      ? ((r[0] = Math.floor(-i / 2)), (r[1] = 0))
                      : ((r[0] = Math.floor(-i / 2)),
                        (r[1] = Math.floor(-n / 2))),
                    r
                  );
                })(h, c, C(r), T(r));
              (n.x = n.x + g[0] + u),
                (n.y = n.y + g[1] + l),
                f && (n.x += f),
                v && (n.y += v),
                Gn(r, {
                  top: Math.floor(n.y) + "px",
                  left: Math.floor(n.x) + "px",
                  visibility: "visible",
                }),
                (i.element = o);
            }
          },
        },
        {
          key: "remove",
          value: function () {
            var t = this.element;
            t && t.parentNode && t.parentNode.removeChild(t);
          },
        },
      ]),
      i
    );
  })()),
  (Xn.Line = (function (t) {
    a(i, Xn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "line"),
              (this.start = []),
              (this.end = []),
              (this.style = { stroke: "#000", lineWidth: 1 });
          },
        },
        {
          key: "render",
          value: function (t, e) {
            var i = [];
            if (
              ((i[0] = this.parsePoint(t, this.start)),
              (i[1] = this.parsePoint(t, this.end)),
              i[0] && i[1])
            ) {
              var n = e.addShape("Line", {
                className: "guide-line",
                attrs: h.mix(
                  { x1: i[0].x, y1: i[0].y, x2: i[1].x, y2: i[1].y },
                  this.style
                ),
              });
              return (this.element = n), n;
            }
          },
        },
      ]),
      i
    );
  })()),
  (Xn.Rect = (function (t) {
    a(i, Xn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "rect"),
              (this.start = []),
              (this.end = []),
              (this.style = { fill: "#CCD7EB", opacity: 0.4 });
          },
        },
        {
          key: "render",
          value: function (t, e) {
            var i = this.parsePoint(t, this.start),
              n = this.parsePoint(t, this.end);
            if (i && n) {
              var r = e.addShape("rect", {
                className: "guide-rect",
                attrs: h.mix(
                  {
                    x: Math.min(i.x, n.x),
                    y: Math.min(i.y, n.y),
                    width: Math.abs(n.x - i.x),
                    height: Math.abs(i.y - n.y),
                  },
                  this.style
                ),
              });
              return (this.element = r), r;
            }
          },
        },
      ]),
      i
    );
  })()),
  (Xn.Text = (function (t) {
    a(i, Xn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "text"),
              (this.position = null),
              (this.content = null),
              (this.style = { fill: "#000" }),
              (this.offsetX = 0),
              (this.offsetY = 0);
          },
        },
        {
          key: "render",
          value: function (t, e) {
            var i = this.position,
              n = this.parsePoint(t, i);
            if (n) {
              var r = this.content,
                a = this.style,
                s = this.offsetX,
                o = this.offsetY;
              s && (n.x += s), o && (n.y += o);
              var l = e.addShape("text", {
                className: "guide-text",
                attrs: h.mix({ x: n.x, y: n.y, text: r }, a),
              });
              return (this.element = l), l;
            }
          },
        },
      ]),
      i
    );
  })()),
  (Xn.Tag = (function (t) {
    a(i, Xn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "tag"),
              (this.position = null),
              (this.content = null),
              (this.direct = "tl"),
              (this.autoAdjust = !0),
              (this.offsetX = 0),
              (this.offsetY = 0),
              (this.side = 4),
              (this.background = { padding: 5, radius: 2, fill: "#1890FF" }),
              (this.textStyle = {
                fontSize: 12,
                fill: "#fff",
                textAlign: "center",
                textBaseline: "middle",
              }),
              (this.withPoint = !0),
              (this.pointStyle = {
                fill: "#1890FF",
                r: 3,
                lineWidth: 1,
                stroke: "#fff",
              });
          },
        },
        {
          key: "_getDirect",
          value: function (t, e, i, n) {
            var r = this.direct,
              a = this.side,
              s = t.get("canvas"),
              o = s.get("width"),
              l = s.get("height"),
              u = e.x,
              h = e.y,
              c = r[0],
              f = r[1];
            "t" === c && h - a - n < 0
              ? (c = "b")
              : "b" === c && h + a + n > l && (c = "t");
            var v = "c" === c ? a : 0;
            return (
              "l" === f && u - v - i < 0
                ? (f = "r")
                : "r" === f && u + v + i > o
                ? (f = "l")
                : "c" === f &&
                  (i / 2 + u + v > o
                    ? (f = "l")
                    : u - i / 2 - v < 0 && (f = "r")),
              c + f
            );
          },
        },
        {
          key: "render",
          value: function (t, e) {
            var i = this.parsePoint(t, this.position);
            if (i && !isNaN(i.x) && !isNaN(i.y)) {
              var n = this.content,
                r = this.background,
                a = this.textStyle,
                s = [],
                o = e.addGroup({ className: "guide-tag" });
              if (this.withPoint) {
                var l = o.addShape("Circle", {
                  className: "guide-tag-point",
                  attrs: h.mix({ x: i.x, y: i.y }, this.pointStyle),
                });
                s.push(l);
              }
              var u = o.addGroup(),
                c = u.addShape("text", {
                  className: "guide-tag-text",
                  zIndex: 1,
                  attrs: h.mix({ x: 0, y: 0, text: n }, a),
                });
              s.push(c);
              var f = c.getBBox(),
                v = j(r.padding),
                g = f.width + v[1] + v[3],
                d = f.height + v[0] + v[2],
                p = f.minY - v[0],
                y = f.minX - v[3],
                m = u.addShape("rect", {
                  className: "guide-tag-bg",
                  zIndex: -1,
                  attrs: h.mix({ x: y, y: p, width: g, height: d }, r),
                });
              s.push(m);
              var x,
                k = this.autoAdjust ? this._getDirect(e, i, g, d) : this.direct,
                _ = this.side,
                S = i.x + this.offsetX,
                b = i.y + this.offsetY,
                M = j(r.radius);
              "tl" === k
                ? ((x = [
                    { x: g + y - _ - 1, y: d + p - 1 },
                    { x: g + y, y: d + p - 1 },
                    { x: g + y, y: d + _ + p },
                  ]),
                  (M[2] = 0),
                  (S -= g),
                  (b = b - _ - d))
                : "cl" === k
                ? ((x = [
                    { x: g + y - 1, y: (d - _) / 2 + p - 1 },
                    { x: g + y - 1, y: (d + _) / 2 + p + 1 },
                    { x: g + _ + y, y: d / 2 + p },
                  ]),
                  (S = S - g - _),
                  (b -= d / 2))
                : "bl" === k
                ? ((x = [
                    { x: g + y, y: -_ + p },
                    { x: g + y - _ - 1, y: p + 1 },
                    { x: g + y, y: p + 1 },
                  ]),
                  (M[1] = 0),
                  (S -= g),
                  (b += _))
                : "bc" === k
                ? ((x = [
                    { x: g / 2 + y, y: -_ + p },
                    { x: (g - _) / 2 + y - 1, y: p + 1 },
                    { x: (g + _) / 2 + y + 1, y: p + 1 },
                  ]),
                  (S -= g / 2),
                  (b += _))
                : "br" === k
                ? ((x = [
                    { x: y, y: p - _ },
                    { x: y, y: p + 1 },
                    { x: y + _ + 1, y: p + 1 },
                  ]),
                  (M[0] = 0),
                  (b += _))
                : "cr" === k
                ? ((x = [
                    { x: y - _, y: d / 2 + p },
                    { x: y + 1, y: (d - _) / 2 + p - 1 },
                    { x: y + 1, y: (d + _) / 2 + p + 1 },
                  ]),
                  (S += _),
                  (b -= d / 2))
                : "tr" === k
                ? ((x = [
                    { x: y, y: d + _ + p },
                    { x: y, y: d + p - 1 },
                    { x: _ + y + 1, y: d + p - 1 },
                  ]),
                  (M[3] = 0),
                  (b = b - d - _))
                : "tc" === k &&
                  ((x = [
                    { x: (g - _) / 2 + y - 1, y: d + p - 1 },
                    { x: (g + _) / 2 + y + 1, y: d + p - 1 },
                    { x: g / 2 + y, y: d + _ + p },
                  ]),
                  (S -= g / 2),
                  (b = b - d - _));
              var w = u.addShape("Polygon", {
                className: "guide-tag-side",
                zIndex: 0,
                attrs: { points: x, fill: r.fill },
              });
              return (
                s.push(w),
                m.attr("radius", M),
                u.moveTo(S - y, b - p),
                u.sort(),
                (this.element = o),
                s
              );
            }
          },
        },
      ]),
      i
    );
  })()),
  (Xn.Point = (function (t) {
    a(i, Xn);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "_initDefaultCfg",
          value: function () {
            (this.type = "point"),
              (this.position = null),
              (this.offsetX = 0),
              (this.offsetY = 0),
              (this.style = {
                fill: "#1890FF",
                r: 3,
                lineWidth: 1,
                stroke: "#fff",
              });
          },
        },
        {
          key: "render",
          value: function (t, e) {
            var i = this.parsePoint(t, this.position);
            if (!i) return null;
            var n = e.addShape("Circle", {
              className: "guide-point",
              attrs: h.mix(
                { x: i.x + this.offsetX, y: i.y + this.offsetY },
                this.style
              ),
            });
            return (this.element = n), n;
          },
        },
      ]),
      i
    );
  })());
var Hn = (function () {
    function t(e) {
      o(this, t),
        h.deepMix(this, this.getDefaultCfg(), e),
        this._init(),
        this._renderTitle(),
        this._renderItems();
    }
    return (
      l(t, [
        {
          key: "getDefaultCfg",
          value: function () {
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
          },
        },
        {
          key: "_init",
          value: function () {
            var t = this.parent;
            if (t) {
              var e = t.addGroup({ zIndex: this.zIndex || 0 });
              this.container = e;
              var i = e.addGroup();
              this.wrapper = i;
              var n = i.addGroup({ className: "itemsGroup" });
              this.itemsGroup = n;
            }
          },
        },
        {
          key: "_renderTitle",
          value: function (t) {
            t = t || this.title;
            var e = this.titleShape,
              i = 0;
            if (this.showTitle && t) {
              if (e && !e.get("destroyed")) e.attr("text", t);
              else {
                var n = this.wrapper,
                  r = this.titleStyle;
                (e = n.addShape("text", {
                  className: "title",
                  attrs: h.mix({ x: 0, y: 0, text: t }, r),
                })),
                  (this.titleShape = e);
              }
              i = e.getBBox().height + this.titleGap;
            }
            this._titleHeight = i;
          },
        },
        {
          key: "_renderItems",
          value: function (t) {
            var e = this;
            (t = t || e.items) &&
              (e.reversed && t.reverse(),
              h.each(t, function (t, i) {
                e._addItem(t, i);
              }),
              t.length > 1 && this._adjustItems(),
              this._renderBackground());
          },
        },
        {
          key: "_renderBackground",
          value: function () {
            var t = this.background;
            if (t) {
              var e = this.container,
                i = this.wrapper.getBBox(),
                n = i.minX,
                r = i.minY,
                a = i.width,
                s = i.height,
                o = t.padding || [0, 0, 0, 0];
              o = j(o);
              var l = h.mix(
                  {
                    x: n - o[3],
                    y: r - o[0],
                    width: a + o[1] + o[3],
                    height: s + o[0] + o[2],
                  },
                  t
                ),
                u = this.backShape;
              u
                ? u.attr(l)
                : (u = e.addShape("Rect", { zIndex: -1, attrs: l })),
                (this.backShape = u),
                e.sort();
            }
          },
        },
        {
          key: "_addItem",
          value: function (t) {
            var e,
              i = this.itemsGroup.addGroup({
                name: t.name,
                value: t.value,
                dataValue: t.dataValue,
                checked: t.checked,
              }),
              n = this.unCheckStyle,
              r = this.unCheckColor,
              a = this.nameStyle,
              s = this.valueStyle,
              o = this.wordSpace,
              l = t.marker,
              u = t.value,
              c = 0;
            if ((r && (n.fill = r), l)) {
              var f = l.radius || 3,
                v = h.mix({ x: f, y: this._titleHeight }, l);
              !1 === t.checked && h.mix(v, n),
                (c +=
                  i
                    .addShape("marker", { className: "item-marker", attrs: v })
                    .getBBox().width + o);
            }
            var g = t.name;
            if (g) {
              var d = this.joinString || "";
              (g = u ? g + d : g),
                (e = i.addShape("text", {
                  className: "name",
                  attrs: h.mix(
                    {
                      x: c,
                      y: this._titleHeight,
                      text: this._formatItemValue(g),
                    },
                    a,
                    !1 === t.checked ? n : null
                  ),
                }));
            }
            if (u) {
              var p = c;
              e && (p += e.getBBox().width),
                i.addShape("text", {
                  className: "value",
                  attrs: h.mix(
                    { x: p, y: this._titleHeight, text: u },
                    s,
                    !1 === t.checked ? n : null
                  ),
                });
            }
            return i;
          },
        },
        {
          key: "_formatItemValue",
          value: function (t) {
            var e = this.itemFormatter;
            return e && (t = e.call(this, t)), t;
          },
        },
        {
          key: "_getMaxItemWidth",
          value: function () {
            var t = this.itemWidth;
            if (h.isNumber(t) || h.isNil(t)) return t;
            if ("auto" === t) {
              for (
                var e = this.itemsGroup.get("children"),
                  i = e.length,
                  n = 0,
                  r = 0;
                r < i;
                r++
              ) {
                var a = e[r].getBBox().width;
                n = Math.max(n, a);
              }
              var s = this.maxLength,
                o = this.itemGap,
                l = (s - o) / 2,
                u = (s - 2 * o) / 3;
              return 2 === i ? Math.max(n, l) : n <= u ? u : n <= l ? l : n;
            }
          },
        },
        {
          key: "_adjustHorizontal",
          value: function () {
            for (
              var t,
                e,
                i = this.maxLength,
                n = this.itemsGroup.get("children"),
                r = this.itemGap,
                a = this.itemMarginBottom,
                s = this._titleHeight,
                o = 0,
                l = 0,
                u = this._getMaxItemWidth(),
                h = [],
                c = 0,
                f = n.length;
              c < f;
              c++
            ) {
              var v = n[c],
                g = v.getBBox(),
                d = g.height,
                p = g.width;
              (e = d + a),
                (t = u || p) - (i - l) > 1e-4 && (o++, (l = 0)),
                v.moveTo(l, o * e),
                h.push({
                  x: l,
                  y: o * e + s - d / 2,
                  width: 1.375 * p,
                  height: 1.375 * d,
                }),
                (l += t + r);
            }
            this.legendHitBoxes = h;
          },
        },
        {
          key: "_adjustVertical",
          value: function () {
            for (
              var t,
                e,
                i = this.maxLength,
                n = this.itemsGroup,
                r = this.itemGap,
                a = this.itemMarginBottom,
                s = this.itemWidth,
                o = this._titleHeight,
                l = n.get("children"),
                u = 0,
                c = 0,
                f = 0,
                v = [],
                g = 0,
                d = l.length;
              g < d;
              g++
            ) {
              var p = l[g],
                y = p.getBBox();
              (t = y.width),
                (e = y.height),
                h.isNumber(s) ? (c = s + r) : t > c && (c = t + r),
                i - u < e
                  ? ((u = 0),
                    (f += c),
                    p.moveTo(f, 0),
                    v.push({
                      x: f,
                      y: o - e / 2,
                      width: 1.375 * t,
                      height: 1.375 * e,
                    }))
                  : (p.moveTo(f, u),
                    v.push({
                      x: f,
                      y: u - e / 2 + o,
                      width: 1.375 * t,
                      height: 1.375 * e,
                    })),
                (u += e + a);
            }
            this.legendHitBoxes = v;
          },
        },
        {
          key: "_adjustItems",
          value: function () {
            "horizontal" === this.layout
              ? this._adjustHorizontal()
              : this._adjustVertical();
          },
        },
        {
          key: "moveTo",
          value: function (t, e) {
            (this.x = t), (this.y = e);
            var i = this.container;
            return i && i.moveTo(t, e), this;
          },
        },
        {
          key: "setItems",
          value: function (t) {
            this.clearItems(), this._renderItems(t);
          },
        },
        {
          key: "setTitle",
          value: function (t) {
            this._renderTitle(t);
          },
        },
        {
          key: "clearItems",
          value: function () {
            this.itemsGroup.clear();
          },
        },
        {
          key: "getWidth",
          value: function () {
            return this.container.getBBox().width;
          },
        },
        {
          key: "getHeight",
          value: function () {
            return this.container.getBBox().height;
          },
        },
        {
          key: "show",
          value: function () {
            this.container.show();
          },
        },
        {
          key: "hide",
          value: function () {
            this.container.hide();
          },
        },
        {
          key: "clear",
          value: function () {
            var t = this.container;
            t.clear(), t.remove(!0);
          },
        },
      ]),
      t
    );
  })(),
  Wn = (function () {
    function t(e) {
      o(this, t), h.deepMix(this, this.getDefaultCfg(), e), this._init();
      var i = this.content,
        n = this.x,
        r = this.y;
      h.isNil(i) || this.updateContent(i), this.updatePosition(n, r);
    }
    return (
      l(t, [
        {
          key: "getDefaultCfg",
          value: function () {
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
          },
        },
        {
          key: "_init",
          value: function () {
            var t = this.content,
              e = this.textStyle,
              i = this.background,
              n = this.className,
              r = this.visible,
              a = this.context,
              s = new qi({ context: a, className: n, zIndex: 0, visible: r }),
              o = s.addShape("Text", {
                className: n + "-text",
                zIndex: 1,
                attrs: h.mix({ text: t, x: 0, y: 0 }, e),
              }),
              l = s.addShape("Rect", {
                className: n + "-bg",
                zIndex: -1,
                attrs: h.mix({ x: 0, y: 0, width: 0, height: 0 }, i),
              });
            s.sort(),
              (this.container = s),
              (this.textShape = o),
              (this.backgroundShape = l);
          },
        },
        {
          key: "_getBBox",
          value: function () {
            var t = this.textShape,
              e = this.background,
              i = t.getBBox(),
              n = j(e.padding),
              r = i.width + n[1] + n[3],
              a = i.height + n[0] + n[2];
            return { x: i.minX - n[3], y: i.minY - n[0], width: r, height: a };
          },
        },
        {
          key: "updateContent",
          value: function (t) {
            var e = this.textShape,
              i = this.backgroundShape;
            if (!h.isNil(t)) {
              h.isObject(t) || (t = { text: t }), e.attr(t);
              var n = this._getBBox(),
                r = n.x,
                a = n.y,
                s = n.width,
                o = n.height,
                l = this.width || s,
                u = this.height || o;
              i.attr({ x: r, y: a, width: l, height: u }),
                (this._width = l),
                (this._height = u),
                (this.content = t.text);
            }
          },
        },
        {
          key: "updatePosition",
          value: function (t, e) {
            var i = this.container,
              n = this._getBBox(),
              r = n.x,
              a = n.y;
            i.moveTo(t - r, e - a), (this.x = t - r), (this.y = e - a);
          },
        },
        {
          key: "getWidth",
          value: function () {
            return this._width;
          },
        },
        {
          key: "getHeight",
          value: function () {
            return this._height;
          },
        },
        {
          key: "show",
          value: function () {
            this.container.show();
          },
        },
        {
          key: "hide",
          value: function () {
            this.container.hide();
          },
        },
        {
          key: "clear",
          value: function () {
            var t = this.container;
            t.clear(),
              t.remove(!0),
              (this.container = null),
              (this.textShape = null),
              (this.backgroundShape = null);
          },
        },
      ]),
      t
    );
  })(),
  Vn = (function () {
    function t(e) {
      o(this, t), h.deepMix(this, this.getDefaultCfg(), e);
      var i = this.frontPlot;
      if (!this.custom) {
        var n = new Hn(h.mix({ parent: i, zIndex: 3 }, e));
        this.container = n;
        var r = this.fixed,
          a = this.background;
        r ||
          (this.tooltipArrow = i.addShape("Polygon", {
            className: "tooltip-arrow",
            visible: !1,
            zIndex: 2,
            attrs: h.mix({ points: [] }, a),
          }));
      }
      if (this.showXTip) {
        var s = this.xTipBackground,
          l = this.xTipTextStyle,
          u = new Wn({
            context: i.get("context"),
            className: "xTip",
            background: s,
            textStyle: l,
            visible: !1,
          });
        i.add(u.container), (this.xTipBox = u);
      }
      if (this.showYTip) {
        var c = this.yTipBackground,
          f = this.yTipTextStyle,
          v = new Wn({
            context: i.get("context"),
            className: "yTip",
            background: c,
            textStyle: f,
            visible: !1,
          });
        i.add(v.container), (this.yTipBox = v);
      }
      this.showCrosshairs && this._renderCrosshairs(), i.sort();
    }
    return (
      l(t, [
        {
          key: "getDefaultCfg",
          value: function () {
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
          },
        },
        {
          key: "setContent",
          value: function (t, e) {
            if (((this.title = t), (this.items = e), !this.custom)) {
              var i = this.container;
              i.setTitle(t), i.setItems(e);
            }
          },
        },
        {
          key: "setYTipContent",
          value: function (t) {
            var e = this.yTip;
            (t = h.isFunction(e) ? e(t) : h.mix({ text: t }, e)),
              this.yTipBox && this.yTipBox.updateContent(t);
          },
        },
        {
          key: "setYTipPosition",
          value: function (t) {
            var e = this.plotRange,
              i = this.crosshairsShapeX;
            if (this.showYTip) {
              var n = this.yTipBox,
                r = n.getHeight(),
                a = n.getWidth(),
                s = e.tl.x - a,
                o = t - r / 2;
              o <= e.tl.y && (o = e.tl.y),
                o + r >= e.br.y && (o = e.br.y - r),
                s < 0 && ((s = e.tl.x), i && i.attr("x1", e.tl.x + a)),
                n.updatePosition(s, o);
            }
          },
        },
        {
          key: "setXTipContent",
          value: function (t) {
            var e = this.xTip;
            (t = h.isFunction(e) ? e(t) : h.mix({ text: t }, e)),
              this.xTipBox && this.xTipBox.updateContent(t);
          },
        },
        {
          key: "setXTipPosition",
          value: function (t) {
            var e = this.showXTip,
              i = this.canvas,
              n = this.plotRange,
              r = this.xTipBox,
              a = this.crosshairsShapeY;
            if (e) {
              var s = i.get("height"),
                o = r.getWidth(),
                l = r.getHeight(),
                u = t - o / 2,
                h = n.br.y;
              u <= n.tl.x && (u = n.tl.x),
                u + o >= n.tr.x && (u = n.tr.x - o),
                s - h < l && (h -= l),
                r.updatePosition(u, h),
                a && a.attr("y1", h);
            }
          },
        },
        {
          key: "setXCrosshairPosition",
          value: function (t) {
            this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);
          },
        },
        {
          key: "setYCrosshairPosition",
          value: function (t) {
            this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);
          },
        },
        {
          key: "setPosition",
          value: function (t) {
            var e = this.container,
              i = this.plotRange,
              n = this.offsetX,
              r = this.offsetY,
              a = this.fixed,
              s = this.tooltipArrow;
            if (e) {
              var o,
                l = e.container.getBBox(),
                u = l.minX,
                h = l.minY,
                c = l.width,
                f = l.height,
                v = i.tl,
                g = i.tr,
                d = 0,
                p = v.y - f - 4 + r;
              if ((p < 0 && (p = 0), a)) d = (v.x + g.x) / 2 - c / 2 + n;
              else if (
                ((d =
                  (o =
                    t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x) -
                  c / 2 +
                  n) < v.x && (d = v.x),
                d + c > g.x && (d = g.x - c),
                s)
              ) {
                var y = p + f;
                s.attr("points", [
                  { x: o - 3, y: y },
                  { x: o + 3, y: y },
                  { x: o, y: y + 4 },
                ]);
                var m = e.backShape,
                  x = j(m.attr("radius"));
                o === v.x
                  ? ((x[3] = 0),
                    s.attr("points", [
                      { x: v.x, y: y },
                      { x: v.x + 4, y: y },
                      { x: v.x, y: y + 4 },
                    ]))
                  : o === g.x &&
                    ((x[2] = 0),
                    s.attr("points", [
                      { x: g.x - 4, y: y },
                      { x: g.x, y: y },
                      { x: g.x, y: y + 4 },
                    ])),
                  m.attr("radius", x);
              }
              e.moveTo(d - u, p - h);
            }
          },
        },
        {
          key: "setMarkers",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.items,
              i = t.style,
              n = t.type,
              r = this._getMarkerGroup(n);
            if ("circle" === n)
              for (var a = 0, s = e.length; a < s; a++) {
                var o = e[a];
                r.addShape("marker", {
                  className: "tooltip-circle-marker",
                  attrs: h.mix({ x: o.x, y: o.y, stroke: o.color }, i),
                });
              }
            else
              r.addShape("rect", {
                className: "tooltip-rect-marker",
                attrs: i,
              });
          },
        },
        {
          key: "clearMarkers",
          value: function () {
            var t = this.markerGroup;
            t && t.clear();
          },
        },
        {
          key: "show",
          value: function () {
            var t = this.crosshairsShapeX,
              e = this.crosshairsShapeY,
              i = this.markerGroup,
              n = this.container,
              r = this.tooltipArrow,
              a = this.xTipBox,
              s = this.yTipBox,
              o = this.canvas;
            t && t.show(),
              e && e.show(),
              i && i.show(),
              n && n.show(),
              r && r.show(),
              a && a.show(),
              s && s.show(),
              o.draw();
          },
        },
        {
          key: "hide",
          value: function () {
            var t = this.crosshairsShapeX,
              e = this.crosshairsShapeY,
              i = this.markerGroup,
              n = this.container,
              r = this.tooltipArrow,
              a = this.xTipBox,
              s = this.yTipBox;
            t && t.hide(),
              e && e.hide(),
              i && i.hide(),
              n && n.hide(),
              r && r.hide(),
              a && a.hide(),
              s && s.hide();
          },
        },
        {
          key: "destroy",
          value: function () {
            var t = this.crosshairsShapeX,
              e = this.crosshairsShapeY,
              i = this.markerGroup,
              n = this.container,
              r = this.tooltipArrow,
              a = this.xTipBox,
              s = this.yTipBox;
            t && t.remove(!0),
              e && e.remove(!0),
              i && i.remove(!0),
              r && r.remove(!0),
              n && n.clear(),
              a && a.clear(),
              s && s.clear(),
              (this.destroyed = !0);
          },
        },
        {
          key: "_getMarkerGroup",
          value: function (t) {
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
          },
        },
        {
          key: "_renderCrosshairs",
          value: function () {
            var t = this.crosshairsType,
              e = this.crosshairsStyle,
              i = this.frontPlot,
              n = this.plotRange,
              r = n.tl,
              a = n.br;
            z(t, "x") &&
              (this.crosshairsShapeX = i.addShape("Line", {
                className: "tooltip-crosshairs-x",
                zIndex: 0,
                visible: !1,
                attrs: h.mix({ x1: r.x, y1: 0, x2: a.x, y2: 0 }, e),
              })),
              z(t, "y") &&
                (this.crosshairsShapeY = i.addShape("Line", {
                  className: "tooltip-crosshairs-y",
                  zIndex: 0,
                  visible: !1,
                  attrs: h.mix({ x1: 0, y1: a.y, x2: 0, y2: r.y }, e),
                }));
          },
        },
      ]),
      t
    );
  })();
function qn(t, e, i) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ("object" != u(t) || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var n = i.call(t, e);
          if ("object" != u(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t, "string");
      return "symbol" == u(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
function Zn(t) {
  var e = t.getAttr("color");
  if (e) {
    var i = e.getScale(e.type);
    if (i.isLinear) return i;
  }
  var n = t.getXScale();
  return t.getYScale() || n;
}
function Un(t, e) {
  var i,
    n,
    r = t._getGroupScales();
  if (
    (r.length &&
      h.each(r, function (t) {
        return (n = t), !1;
      }),
    n)
  ) {
    var a = n.field;
    i = n.getText(e[a]);
  } else {
    var s = Zn(t);
    i = s.alias || s.field;
  }
  return i;
}
function Jn(t, e) {
  var i = Zn(t);
  return i.getText(e[i.field]);
}
function $n(t, e) {
  var i = t.getAttr("position").getFields()[0],
    n = t.get("scales")[i];
  return n.getText(e[n.field]);
}
function Kn(t) {
  var e = [];
  return (
    h.each(t, function (t) {
      var i = (function (t, e) {
        var i = -1;
        return (
          h.each(t, function (t, n) {
            if (
              t.title === e.title &&
              t.name === e.name &&
              t.value === e.value &&
              t.color === e.color
            )
              return (i = n), !1;
          }),
          i
        );
      })(e, t);
      -1 === i ? e.push(t) : (e[i] = t);
    }),
    e
  );
}
W.tooltip = h.deepMix(
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
  W.tooltip || {}
);
var Qn = (function () {
  function t(e) {
    o(this, t);
    var i = this;
    qn(this, "handleShowEvent", function (t) {
      var e = i.chart;
      if (i.enable) {
        var n = e.get("plotRange"),
          r = E(t, e);
        if (en(r, n) || i._tooltipCfg.alwaysShow) {
          var a = i.timeStamp,
            s = +new Date();
          s - a > 16 && (i.showTooltip(r), (i.timeStamp = s));
        } else i.hideTooltip();
      }
    }),
      qn(this, "handleHideEvent", function () {
        i.enable && i.hideTooltip();
      }),
      (this.enable = !0),
      (this.cfg = {}),
      (this.tooltip = null),
      (this.chart = null),
      (this.timeStamp = 0),
      h.mix(this, e);
    var n = this.chart.get("canvas");
    (this.canvas = n), (this.canvasDom = n.get("el"));
  }
  return (
    l(t, [
      {
        key: "_setCrosshairsCfg",
        value: function () {
          var t = this.chart,
            e = h.mix({}, W.tooltip),
            i = t.get("geoms"),
            n = [];
          h.each(i, function (t) {
            var e = t.get("type");
            -1 === n.indexOf(e) && n.push(e);
          });
          var r = t.get("coord").type;
          return (
            !i.length ||
              ("cartesian" !== r && "rect" !== r) ||
              (1 === n.length &&
                -1 !== ["line", "area", "path", "point"].indexOf(n[0]) &&
                h.mix(e, { showCrosshairs: !0 })),
            e
          );
        },
      },
      {
        key: "_getMaxLength",
        value: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.layout,
            i = t.plotRange;
          return "horizontal" === e ? i.br.x - i.bl.x : i.bl.y - i.tr.y;
        },
      },
      {
        key: "render",
        value: function () {
          var t = this;
          if (!t.tooltip) {
            var e = t.chart,
              i = e.get("canvas"),
              n = e
                .get("frontPlot")
                .addGroup({ className: "tooltipContainer", zIndex: 10 }),
              r = e.get("backPlot").addGroup({ className: "tooltipContainer" }),
              a = e.get("plotRange"),
              s = e.get("coord"),
              o = t._setCrosshairsCfg(),
              l = t.cfg,
              u = h.deepMix(
                {
                  plotRange: a,
                  frontPlot: n,
                  backPlot: r,
                  canvas: i,
                  fixed: s.transposed || s.isPolar,
                },
                o,
                l
              );
            (u.maxLength = t._getMaxLength(u)), (this._tooltipCfg = u);
            var c = new Vn(u);
            (t.tooltip = c),
              u.alwaysShow && t.prePoint && this.showTooltip(t.prePoint),
              t.bindEvents();
          }
        },
      },
      {
        key: "clear",
        value: function () {
          var t = this.tooltip;
          t && (t.destroy(), this.unBindEvents()),
            (this.tooltip = null),
            (this._lastActive = null);
        },
      },
      {
        key: "_getTooltipMarkerStyle",
        value: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.type,
            i = t.items,
            n = this._tooltipCfg;
          if ("rect" === e) {
            var r,
              a,
              s,
              o,
              l = this.chart,
              u = l.get("plotRange"),
              c = u.tl,
              f = u.br,
              v = l.get("coord"),
              g = i[0],
              d = i[i.length - 1],
              p = g.width;
            v.transposed
              ? ((r = c.x),
                (a = d.y - 0.75 * p),
                (s = f.x - c.x),
                (o = g.y - d.y + 1.5 * p))
              : ((r = g.x - 0.75 * p),
                (a = c.y),
                (s = d.x - g.x + 1.5 * p),
                (o = f.y - c.y)),
              (t.style = h.mix(
                {
                  x: r,
                  y: a,
                  width: s,
                  height: o,
                  fill: "#CCD6EC",
                  opacity: 0.3,
                },
                n.tooltipMarkerStyle
              ));
          } else
            t.style = h.mix(
              { radius: 4, fill: "#fff", lineWidth: 2 },
              n.tooltipMarkerStyle
            );
          return t;
        },
      },
      {
        key: "_setTooltip",
        value: function (t, e) {
          var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          this.prePoint = t;
          var n = this._lastActive,
            r = this.tooltip,
            a = this._tooltipCfg;
          e = Kn(e);
          var s = this.chart,
            o = s.get("coord"),
            l = s.getYScales()[0],
            u = a.snap;
          if (!1 === u && l.isLinear) {
            var h,
              c,
              f = o.invertPoint(t);
            en(t, s.get("plotRange")) &&
              (o.transposed
                ? ((h = l.invert(f.x)),
                  (c = t.x),
                  r.setXTipContent(h),
                  r.setXTipPosition(c),
                  r.setYCrosshairPosition(c))
                : ((h = l.invert(f.y)),
                  (c = t.y),
                  r.setYTipContent(h),
                  r.setYTipPosition(c),
                  r.setXCrosshairPosition(c)));
          }
          if (
            (a.onShow &&
              a.onShow({
                x: t.x,
                y: t.y,
                tooltip: r,
                items: e,
                tooltipMarkerCfg: i,
              }),
            (v = n),
            (g = e),
            JSON.stringify(v) !== JSON.stringify(g))
          ) {
            var v, g;
            this._lastActive = e;
            var d = a.onChange;
            d &&
              d({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: i });
            var p = e[0],
              y = p.title || p.name,
              m = p.x;
            if (
              (e.length > 1 && (m = (e[0].x + e[e.length - 1].x) / 2),
              r.setContent(y, e, o.transposed),
              r.setPosition(e, t),
              o.transposed)
            ) {
              var x = p.y;
              e.length > 1 && (x = (e[0].y + e[e.length - 1].y) / 2),
                r.setYTipContent(y),
                r.setYTipPosition(x),
                r.setXCrosshairPosition(x),
                u &&
                  (r.setXTipContent(p.value),
                  r.setXTipPosition(m),
                  r.setYCrosshairPosition(m));
            } else
              r.setXTipContent(y),
                r.setXTipPosition(m),
                r.setYCrosshairPosition(m),
                u &&
                  (r.setYTipContent(p.value),
                  r.setYTipPosition(p.y),
                  r.setXCrosshairPosition(p.y));
            var k = i.items;
            a.showTooltipMarker && k.length
              ? ((i = this._getTooltipMarkerStyle(i)), r.setMarkers(i))
              : r.clearMarkers(),
              r.show();
          } else
            !1 === u &&
              (z(a.crosshairsType, "y") || a.showYTip) &&
              this.chart.get("canvas").draw();
        },
      },
      {
        key: "showTooltip",
        value: function (t) {
          var e,
            i,
            n = this,
            r = n.chart,
            a = [],
            s = [],
            o = n._tooltipCfg,
            l = o.showItemMarker,
            u = o.itemMarkerStyle,
            c = o.alwaysShow;
          l && (i = u);
          var f = r.get("geoms"),
            v = r.get("coord");
          if (
            (h.each(f, function (n) {
              if (n.get("visible")) {
                var r = n.get("type"),
                  o = n.getSnapRecords(t),
                  l = n.get("adjust");
                if ("interval" === r && l && "symmetric" === l.type) return;
                h.each(o, function (t) {
                  var o = t.x,
                    l = t.y,
                    u = t._origin,
                    c = t.color;
                  if ((o || !isNaN(o)) && (l || !isNaN(l))) {
                    var f = {
                      x: o,
                      y: h.isArray(l) ? l[1] : l,
                      color: c || W.defaultColor,
                      origin: u,
                      name: Un(n, u),
                      value: Jn(n, u),
                      title: $n(n, u),
                    };
                    i && (f.marker = h.mix({ fill: c || W.defaultColor }, i)),
                      s.push(f),
                      -1 !== ["line", "area", "path"].indexOf(r)
                        ? ((e = "circle"), a.push(f))
                        : "interval" !== r ||
                          ("cartesian" !== v.type && "rect" !== v.type) ||
                          ((e = "rect"),
                          (f.width = n.getSize(t._origin)),
                          a.push(f));
                  }
                });
              }
            }),
            s.length)
          ) {
            var g = { items: a, type: e };
            n._setTooltip(t, s, g);
          } else c || n.hideTooltip();
        },
      },
      {
        key: "hideTooltip",
        value: function () {
          var t = this._tooltipCfg;
          this._lastActive = null;
          var e = this.tooltip;
          e &&
            (e.hide(),
            t.onHide && t.onHide({ tooltip: e }),
            this.chart.get("canvas").draw());
        },
      },
      {
        key: "_handleEvent",
        value: function (t, e, i) {
          var n = this.canvas;
          h.each([].concat(t), function (t) {
            "bind" === i ? n.on(t, e) : n.off(t, e);
          });
        },
      },
      {
        key: "bindEvents",
        value: function () {
          var t = this._tooltipCfg,
            e = t.triggerOn,
            i = t.triggerOff,
            n = t.alwaysShow;
          e && this._handleEvent(e, this.handleShowEvent, "bind"),
            n || this._handleEvent(i, this.handleHideEvent, "bind");
        },
      },
      {
        key: "unBindEvents",
        value: function () {
          var t = this._tooltipCfg,
            e = t.triggerOn,
            i = t.triggerOff,
            n = t.alwaysShow;
          e && this._handleEvent(e, this.handleShowEvent, "unBind"),
            n || this._handleEvent(i, this.handleHideEvent, "unBind");
        },
      },
    ]),
    t
  );
})();
function tr(t) {
  var e = new Qn({ chart: t });
  t.set("tooltipController", e),
    (t.tooltip = function (t, i) {
      return (
        h.isObject(t) && ((i = t), (t = !0)),
        (e.enable = t),
        i && (e.cfg = i),
        this
      );
    });
}
function er(t) {
  var e = t.get("tooltipController");
  e.render(),
    (t.showTooltip = function (t) {
      return e.showTooltip(t), this;
    }),
    (t.hideTooltip = function () {
      return e.hideTooltip(), this;
    });
}
function ir(t) {
  t.get("tooltipController").clear();
}
var nr = { init: tr, afterGeomDraw: er, clearInner: ir },
  rr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterGeomDraw: er,
        clearInner: ir,
        default: nr,
        init: tr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
W.guide = h.deepMix(
  {
    line: { style: { stroke: "#a3a3a3", lineWidth: 1 }, top: !0 },
    text: {
      style: { fill: "#787878", textAlign: "center", textBaseline: "middle" },
      offsetX: 0,
      offsetY: 0,
      top: !0,
    },
    rect: { style: { fill: "#fafafa" }, top: !1 },
    arc: { style: { stroke: "#a3a3a3" }, top: !0 },
    html: { offsetX: 0, offsetY: 0, alignX: "center", alignY: "middle" },
    tag: {
      top: !0,
      offsetX: 0,
      offsetY: 0,
      side: 4,
      background: { padding: 5, radius: 2, fill: "#1890FF" },
      textStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "center",
        textBaseline: "middle",
      },
    },
    point: {
      top: !0,
      offsetX: 0,
      offsetY: 0,
      style: { fill: "#fff", r: 3, lineWidth: 2, stroke: "#1890ff" },
    },
  },
  W.guide || {}
);
var ar = (function () {
  function t(e) {
    o(this, t),
      (this.guides = []),
      (this.xScale = null),
      (this.yScales = null),
      (this.guideShapes = []),
      h.mix(this, e);
  }
  return (
    l(t, [
      {
        key: "_toString",
        value: function (t) {
          return (
            h.isFunction(t) && (t = t(this.xScale, this.yScales)), t.toString()
          );
        },
      },
      {
        key: "_getId",
        value: function (t, e) {
          var i = e.id;
          if (!i) {
            var n = e.type;
            i =
              "arc" === n || "line" === n || "rect" === n
                ? this._toString(e.start) + "-" + this._toString(e.end)
                : this._toString(e.position);
          }
          return i;
        },
      },
      {
        key: "paint",
        value: function (t) {
          var e = this,
            i = e.chart,
            n = e.guides,
            r = e.xScale,
            a = e.yScales,
            s = [];
          h.each(n, function (n, o) {
            var l;
            (n.xScale = r),
              (n.yScales = a),
              "regionFilter" === n.type
                ? (n.chart = i)
                : (l = n.top ? e.frontPlot : e.backPlot),
              (n.coord = t),
              (n.container = l),
              (n.canvas = i.get("canvas"));
            var u = n.render(t, l);
            if (u) {
              var h = e._getId(u, n);
              [].concat(u).forEach(function (t) {
                (t._id = t.get("className") + "-" + h),
                  t.set("index", o),
                  s.push(t);
              });
            }
          }),
            (e.guideShapes = s);
        },
      },
      {
        key: "clear",
        value: function () {
          return this.reset(), (this.guides = []), this;
        },
      },
      {
        key: "reset",
        value: function () {
          var t = this.guides;
          h.each(t, function (t) {
            t.remove();
          });
        },
      },
      {
        key: "_createGuide",
        value: function (t, e) {
          var i = h.upperFirst(t),
            n = new Xn[i](h.deepMix({}, W.guide[t], e));
          return this.guides.push(n), n;
        },
      },
      {
        key: "line",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("line", t);
        },
      },
      {
        key: "text",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("text", t);
        },
      },
      {
        key: "arc",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("arc", t);
        },
      },
      {
        key: "html",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("html", t);
        },
      },
      {
        key: "rect",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("rect", t);
        },
      },
      {
        key: "tag",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("tag", t);
        },
      },
      {
        key: "point",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("point", t);
        },
      },
      {
        key: "regionFilter",
        value: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._createGuide("regionFilter", t);
        },
      },
    ]),
    t
  );
})();
function sr(t) {
  var e = new ar({
    frontPlot: t
      .get("frontPlot")
      .addGroup({ zIndex: 20, className: "guideContainer" }),
    backPlot: t.get("backPlot").addGroup({ className: "guideContainer" }),
  });
  t.set("guideController", e),
    (t.guide = function () {
      return e;
    });
}
function or(t) {
  var e = t.get("guideController");
  if (e.guides.length) {
    var i = t.getXScale(),
      n = t.getYScales(),
      r = t.get("coord");
    (e.xScale = i), (e.yScales = n), (e.chart = t), e.paint(r);
  }
}
function lr(t) {
  t.get("guideController").clear();
}
function ur(t) {
  t.get("guideController").reset();
}
var hr = { init: sr, afterGeomDraw: or, clear: lr, repaint: ur },
  cr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterGeomDraw: or,
        clear: lr,
        default: hr,
        init: sr,
        repaint: ur,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var fr = {
  itemMarginBottom: 12,
  itemGap: 10,
  showTitle: !1,
  titleStyle: {
    fontSize: 12,
    fill: "#808080",
    textAlign: "start",
    textBaseline: "top",
  },
  nameStyle: {
    fill: "#808080",
    fontSize: 12,
    textAlign: "start",
    textBaseline: "middle",
  },
  valueStyle: {
    fill: "#000000",
    fontSize: 12,
    textAlign: "start",
    textBaseline: "middle",
  },
  unCheckStyle: { fill: "#bfbfbf" },
  itemWidth: "auto",
  wordSpace: 6,
  selectedMode: "multiple",
};
W.legend = h.deepMix(
  {
    common: fr,
    right: h.mix({ position: "right", layout: "vertical" }, fr),
    left: h.mix({ position: "left", layout: "vertical" }, fr),
    top: h.mix({ position: "top", layout: "horizontal" }, fr),
    bottom: h.mix({ position: "bottom", layout: "horizontal" }, fr),
  },
  W.legend || {}
);
var vr = (function () {
  function t(e) {
    o(this, t);
    var i = this;
    (function (t, e, i) {
      (e = (function (t) {
        var e = (function (t, e) {
          if ("object" != u(t) || null === t) return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(t, e);
            if ("object" != u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t, "string");
        return "symbol" == u(e) ? e : String(e);
      })(e)) in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i);
    })(this, "handleEvent", function (t) {
      var e,
        n,
        r,
        a,
        s = i,
        o = s.chart,
        l = E(t, o),
        u = l.x,
        c = l.y,
        f =
          ((e = u),
          (n = c),
          (r = null),
          (a = s.legends),
          h.each(a, function (t) {
            h.each(t, function (t) {
              var i = t.itemsGroup,
                a = t.legendHitBoxes,
                s = i.get("children");
              if (s.length) {
                var o = t.x,
                  l = t.y;
                h.each(a, function (i, a) {
                  if (
                    e >= i.x + o &&
                    e <= i.x + i.width + o &&
                    n >= i.y + l &&
                    n <= i.height + i.y + l
                  )
                    return (r = { clickedItem: s[a], clickedLegend: t }), !1;
                });
              }
            });
          }),
          r);
      if (f && !1 !== f.clickedLegend.clickable) {
        var v = f.clickedItem,
          g = f.clickedLegend;
        if (g.onClick) (t.clickedItem = v), g.onClick(t);
        else if (!g.custom) {
          var d = v.get("checked"),
            p = v.get("dataValue"),
            m = g.filteredVals,
            x = g.field;
          "single" === g.selectedMode
            ? o.filter(x, function (t) {
                return t === p;
              })
            : (d ? m.push(p) : y(m, p),
              o.filter(x, function (t) {
                return -1 === m.indexOf(t);
              })),
            o.repaint();
        }
      }
    }),
      (this.legendCfg = {}),
      (this.enable = !0),
      (this.position = "top"),
      h.mix(this, e);
    var n = this.chart;
    (this.canvasDom = n.get("canvas").get("el")), this.clear();
  }
  return (
    l(t, [
      {
        key: "addLegend",
        value: function (t, e, i) {
          var n = this,
            r = n.legendCfg,
            a = t.field,
            s = r[a];
          if (!1 === s) return null;
          if (s && s.custom) n.addCustomLegend(a);
          else {
            var o = r.position || n.position;
            s && s.position && (o = s.position),
              t.isCategory && n._addCategoryLegend(t, e, o, i);
          }
        },
      },
      {
        key: "addCustomLegend",
        value: function (t) {
          var e = this,
            i = e.legendCfg;
          t && i[t] && (i = i[t]);
          var n = i.position || e.position,
            r = e.legends;
          r[n] = r[n] || [];
          var a = i.items;
          if (!a) return null;
          var s = e.container;
          h.each(a, function (t) {
            h.isPlainObject(t.marker)
              ? (t.marker.radius = t.marker.radius || 3)
              : (t.marker = {
                  symbol: t.marker || "circle",
                  fill: t.fill,
                  radius: 3,
                }),
              (t.checked = !!h.isNil(t.checked) || t.checked),
              (t.name = t.name || t.value);
          });
          var o = new Hn(
            h.deepMix({}, W.legend[n], i, {
              maxLength: e._getMaxLength(n),
              items: a,
              parent: s,
            })
          );
          r[n].push(o);
        },
      },
      {
        key: "clear",
        value: function () {
          var t = this.legends;
          h.each(t, function (t) {
            h.each(t, function (t) {
              t.clear();
            });
          }),
            (this.legends = {}),
            this.unBindEvents();
        },
      },
      {
        key: "_isFiltered",
        value: function (t, e, i) {
          var n = !1;
          return (
            h.each(e, function (e) {
              if ((n = n || t.getText(e) === t.getText(i))) return !1;
            }),
            n
          );
        },
      },
      {
        key: "_getMaxLength",
        value: function (t) {
          var e = this.chart,
            i = j(e.get("appendPadding"));
          return "right" === t || "left" === t
            ? e.get("height") - (i[0] + i[2])
            : e.get("width") - (i[1] + i[3]);
        },
      },
      {
        key: "_addCategoryLegend",
        value: function (t, e, i, n) {
          var r = this,
            a = r.legendCfg,
            s = r.legends,
            o = r.container,
            l = r.chart,
            u = t.field;
          s[i] = s[i] || [];
          var c = "circle";
          a[u] && a[u].marker ? (c = a[u].marker) : a.marker && (c = a.marker),
            h.each(e, function (e) {
              h.isPlainObject(c) ? h.mix(e.marker, c) : (e.marker.symbol = c),
                n && (e.checked = !r._isFiltered(t, n, e.dataValue));
            }),
            (l.get("legendItems")[u] = e);
          var f = h.deepMix({}, W.legend[i], a[u] || a, {
            maxLength: r._getMaxLength(i),
            items: e,
            field: u,
            filteredVals: n,
            parent: o,
          });
          f.showTitle && h.deepMix(f, { title: t.alias || t.field });
          var v = new Hn(f);
          return s[i].push(v), v;
        },
      },
      {
        key: "_alignLegend",
        value: function (t, e, i) {
          var n = this.plotRange,
            r = n.tl,
            a = n.bl,
            s = this.chart,
            o = t.offsetX || 0,
            l = t.offsetY || 0,
            u = s.get("width"),
            h = s.get("height"),
            c = j(s.get("appendPadding")),
            f = t.getHeight(),
            v = t.getWidth(),
            g = 0,
            d = 0;
          if ("left" === i || "right" === i) {
            var p = t.verticalAlign || "middle",
              y = Math.abs(r.y - a.y);
            (g = "left" === i ? c[3] : u - v - c[1]),
              (d = (y - f) / 2 + r.y),
              "top" === p ? (d = r.y) : "bottom" === p && (d = a.y - f),
              e && (d = e.get("y") - f - 12);
          } else {
            var m = t.align || "left";
            if (
              ((g = c[3]),
              "center" === m
                ? (g = u / 2 - v / 2)
                : "right" === m && (g = u - (v + c[1])),
              (d =
                "top" === i
                  ? c[0] + Math.abs(t.container.getBBox().minY)
                  : h - f),
              e)
            ) {
              var x = e.getWidth();
              g = e.x + x + 12;
            }
          }
          "bottom" === i && l > 0 && (l = 0),
            "right" === i && o > 0 && (o = 0),
            t.moveTo(g + o, d + l);
        },
      },
      {
        key: "alignLegends",
        value: function () {
          var t = this,
            e = t.legends;
          return (
            h.each(e, function (e, i) {
              h.each(e, function (n, r) {
                var a = e[r - 1];
                t._alignLegend(n, a, i);
              });
            }),
            t
          );
        },
      },
      {
        key: "bindEvents",
        value: function () {
          var t = this.legendCfg.triggerOn || "touchstart";
          N(this.canvasDom, t, this.handleEvent);
        },
      },
      {
        key: "unBindEvents",
        value: function () {
          var t = this.legendCfg.triggerOn || "touchstart";
          I(this.canvasDom, t, this.handleEvent);
        },
      },
    ]),
    t
  );
})();
function gr(t) {
  var e = new vr({
    container: t.get("backPlot").addGroup(),
    plotRange: t.get("plotRange"),
    chart: t,
  });
  t.set("legendController", e),
    (t.legend = function (t, i) {
      var n = e.legendCfg;
      return (
        (e.enable = !0),
        h.isBoolean(t)
          ? ((e.enable = t), (n = i || {}))
          : h.isObject(t)
          ? (n = t)
          : (n[t] = i),
        (e.legendCfg = n),
        this
      );
    });
}
function dr(t) {
  var e = t.get("legendController");
  if (!e.enable) return null;
  var i = e.legendCfg,
    n = e.container;
  if (i && i.custom) e.addCustomLegend();
  else {
    var r = t.getLegendItems(),
      a = t.get("scales"),
      s = t.get("filters");
    h.each(r, function (t, i) {
      var n,
        r = a[i],
        o = r.values;
      (n =
        s && s[i]
          ? o.filter(function (t) {
              return !s[i](t);
            })
          : []),
        e.addLegend(r, t, n);
    });
  }
  i && !1 !== i.clickable && e.bindEvents();
  var o = e.legends,
    l = { top: 0, right: 0, bottom: 0, left: 0 };
  h.each(o, function (e, i) {
    var n = 0;
    h.each(e, function (t) {
      var e = t.getWidth(),
        r = t.getHeight();
      "top" === i || "bottom" === i
        ? ((n = Math.max(n, r)), t.offsetY > 0 && (n += t.offsetY))
        : ((n = Math.max(n, e)), t.offsetX > 0 && (n += t.offsetX));
    }),
      (l[i] =
        n +
        (function (t, e) {
          var i = 0;
          switch (((e = j(e)), t)) {
            case "top":
              i = e[0];
              break;
            case "right":
              i = e[1];
              break;
            case "bottom":
              i = e[2];
              break;
            case "left":
              i = e[3];
          }
          return i;
        })(i, t.get("appendPadding")));
  }),
    t.set("legendRange", l),
    Object.keys(o).length
      ? n.set("ariaLabel", H.legend.prefix)
      : n.set("ariaLabel", null);
}
function pr(t) {
  t.get("legendController").alignLegends();
}
function yr(t) {
  t.get("legendController").clear(), t.set("legendRange", null);
}
var mr = { init: gr, beforeGeomDraw: dr, afterGeomDraw: pr, clearInner: yr },
  xr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterGeomDraw: pr,
        beforeGeomDraw: dr,
        clearInner: yr,
        default: mr,
        init: gr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kr =
    "object" ==
      ("undefined" == typeof performance ? "undefined" : u(performance)) &&
    performance.now
      ? performance
      : Date,
  _r = (function () {
    function t() {
      o(this, t),
        (this.anims = []),
        (this.time = null),
        (this.playing = !1),
        (this.canvas = []);
    }
    return (
      l(t, [
        {
          key: "play",
          value: function () {
            var t = this;
            (t.time = kr.now()),
              (t.playing = !0),
              Zi(function e() {
                t.playing && (Zi(e), t.update());
              });
          },
        },
        {
          key: "stop",
          value: function () {
            (this.playing = !1), (this.time = null), (this.canvas = []);
          },
        },
        {
          key: "pushAnim",
          value: function (t) {
            this.playing || this.play();
            var e = t.delay,
              i = t.duration,
              n = this.time + e,
              r = n + i;
            (t.startTime = n), (t.endTime = r), this.anims.push(t);
          },
        },
        {
          key: "update",
          value: function () {
            var t = kr.now();
            if (((this.canvas = []), this.anims.length)) {
              for (var e = 0; e < this.anims.length; e++) {
                var i = this.anims[e];
                if (!(t < i.startTime || i.hasEnded)) {
                  var n = i.shape;
                  if (n.get("destroyed")) this.anims.splice(e, 1), e--;
                  else {
                    var r = i,
                      a = r.startState,
                      s = r.endState,
                      o = r.interpolate,
                      l = r.duration;
                    t >= i.startTime &&
                      !i.hasStarted &&
                      ((i.hasStarted = !0), i.onStart && i.onStart());
                    var u = (t - i.startTime) / l;
                    if (
                      ((u = Math.max(0, Math.min(u, 1))),
                      (u = i.easing(u)),
                      i.onFrame)
                    )
                      i.onFrame(u);
                    else
                      for (var h in o) {
                        var c = (0, o[h])(u),
                          f = void 0;
                        if ("points" === h) {
                          f = [];
                          for (
                            var v = Math.max(a.points.length, s.points.length),
                              g = 0;
                            g < v;
                            g += 2
                          )
                            f.push({ x: c[g], y: c[g + 1] });
                        } else f = c;
                        (n._attrs.attrs[h] = f), (n._attrs.bbox = null);
                      }
                    var d = n.get("canvas");
                    -1 === this.canvas.indexOf(d) && this.canvas.push(d),
                      i.onUpdate && i.onUpdate(u),
                      t >= i.endTime &&
                        !i.hasEnded &&
                        ((i.hasEnded = !0), i.onEnd && i.onEnd()),
                      1 === u && (this.anims.splice(e, 1), e--);
                  }
                }
              }
              this.canvas.map(function (t) {
                return t.draw(), t;
              }),
                (this.time = kr.now());
            } else this.stop();
          },
        },
      ]),
      t
    );
  })();
function Sr(t) {
  return t;
}
function br(t) {
  return 1 - Mr(1 - t);
}
function Mr(t) {
  return (t /= 1) < 1 / 2.75
    ? 7.5625 * t * t
    : t < 2 / 2.75
    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
    : t < 2.5 / 2.75
    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
}
var wr = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      backIn: function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1
          ? t * t * ((e + 1) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
      },
      backOut: function (t) {
        var e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      bounceIn: br,
      bounceInOut: function (t) {
        return t < 0.5 ? 0.5 * br(2 * t) : 0.5 * Mr(2 * t - 1) + 0.5;
      },
      bounceOut: Mr,
      cubicIn: function (t) {
        return t * t * t;
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      cubicOut: function (t) {
        return --t * t * t + 1;
      },
      elasticIn: function (t) {
        var e,
          i = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!i || i < 1
              ? ((i = 1), (e = 0.1))
              : (e = (0.4 / (2 * Math.PI)) * Math.asin(1 / i)),
            -i *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4));
      },
      elasticInOut: function (t) {
        var e,
          i = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!i || i < 1
              ? ((i = 1), (e = 0.1))
              : (e = (0.4 / (2 * Math.PI)) * Math.asin(1 / i)),
            (t *= 2) < 1
              ? i *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                -0.5
              : i *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                  0.5 +
                1);
      },
      elasticOut: function (t) {
        var e,
          i = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!i || i < 1
              ? ((i = 1), (e = 0.1))
              : (e = (0.4 / (2 * Math.PI)) * Math.asin(1 / i)),
            i *
              Math.pow(2, -10 * t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
              1);
      },
      linear: Sr,
      quadraticIn: function (t) {
        return t * t;
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      quadraticOut: function (t) {
        return t * (2 - t);
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Pr(t) {
  for (var e = [], i = 0, n = t.length; i < n; i++)
    t[i] && (e.push(t[i].x), e.push(t[i].y));
  return e;
}
function Cr(t, e) {
  return (
    (e -= t = +t),
    function (i) {
      return t + e * i;
    }
  );
}
function Tr(t, e) {
  var i,
    n = e ? e.length : 0,
    r = t ? Math.min(n, t.length) : 0,
    a = new Array(r),
    s = new Array(n);
  for (i = 0; i < r; ++i) a[i] = Cr(t[i], e[i]);
  for (; i < n; ++i) s[i] = e[i];
  return function (t) {
    for (i = 0; i < r; ++i) s[i] = a[i](t);
    return s;
  };
}
var Ar = (function () {
  function t(e, i, n) {
    o(this, t),
      (this.hasStarted = !1),
      (this.hasEnded = !1),
      (this.shape = e),
      (this.source = i),
      (this.timeline = n),
      (this.animate = null);
  }
  return (
    l(t, [
      {
        key: "to",
        value: function () {
          var t,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = e.delay || 0,
            n = e.attrs || {},
            r = e.duration || 1e3;
          t = "function" == typeof e.easing ? e.easing : wr[e.easing] || Sr;
          var a = { shape: this.shape, delay: i, duration: r, easing: t },
            s = {};
          for (var o in n) {
            var l = this.source[o],
              u = n[o];
            "points" === o
              ? ((l = Pr(l)),
                (u = Pr(u)),
                (s.points = Tr(l, u)),
                (this.source.points = l),
                (n.points = u))
              : "matrix" === o
              ? (s.matrix = Tr(l, u))
              : (s[o] = Cr(l, u));
          }
          return (
            (a.interpolate = s),
            (a.startState = this.source),
            (a.endState = n),
            this.timeline.pushAnim(a),
            (this.animate = a),
            this
          );
        },
      },
      {
        key: "onFrame",
        value: function (t) {
          return (
            this.animate &&
              (this.animate.onFrame = function (e) {
                t(e);
              }),
            this
          );
        },
      },
      {
        key: "onStart",
        value: function (t) {
          return (
            this.animate &&
              (this.animate.onStart = function () {
                t();
              }),
            this
          );
        },
      },
      {
        key: "onUpdate",
        value: function (t) {
          return (
            this.animate &&
              (this.animate.onUpdate = function (e) {
                t(e);
              }),
            this
          );
        },
      },
      {
        key: "onEnd",
        value: function (t) {
          return (
            this.animate &&
              (this.animate.onEnd = function () {
                t();
              }),
            this
          );
        },
      },
    ]),
    t
  );
})();
function Dr(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      i.push.apply(i, n);
  }
  return i;
}
function Nr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? Dr(Object(i), !0).forEach(function (e) {
          Ir(t, e, i[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
      : Dr(Object(i)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
  }
  return t;
}
function Ir(t, e, i) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ("object" != u(t) || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var n = i.call(t, e);
          if ("object" != u(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t, "string");
      return "symbol" == u(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
var Or = {
    appear: { duration: 450, easing: "quadraticOut" },
    update: { duration: 300, easing: "quadraticOut" },
    enter: { duration: 300, easing: "quadraticOut" },
    leave: { duration: 350, easing: "quadraticIn" },
  },
  Yr = {
    defaultCfg: {},
    Action: {},
    getAnimation: function (t, e, i) {
      var n = this.defaultCfg[t];
      if (n) {
        var r = n[i];
        if (h.isFunction(r)) return r(e);
      }
      return !1;
    },
    getAnimateCfg: function (t, e) {
      var i = Or[e],
        n = this.defaultCfg[t];
      return n && n.cfg && n.cfg[e] ? h.deepMix({}, i, n.cfg[e]) : i;
    },
    registerAnimation: function (t, i) {
      this.Action || (this.Action = {}),
        (this.Action = Nr(Nr({}, this.Action), {}, e({}, t, i)));
    },
  };
function Er(t, e, i) {
  var n;
  t.apply(e);
  var r = e[0],
    a = e[1];
  if ("x" === i) {
    t.transform([
      ["t", r, a],
      ["s", 0.01, 1],
      ["t", -r, -a],
    ]);
    var s = t.getMatrix();
    n = K.transform(s, [
      ["t", r, a],
      ["s", 100, 1],
      ["t", -r, -a],
    ]);
  } else if ("y" === i) {
    t.transform([
      ["t", r, a],
      ["s", 1, 0.01],
      ["t", -r, -a],
    ]);
    var o = t.getMatrix();
    n = K.transform(o, [
      ["t", r, a],
      ["s", 1, 100],
      ["t", -r, -a],
    ]);
  } else if ("xy" === i) {
    t.transform([
      ["t", r, a],
      ["s", 0.01, 0.01],
      ["t", -r, -a],
    ]);
    var l = t.getMatrix();
    n = K.transform(l, [
      ["t", r, a],
      ["s", 100, 100],
      ["t", -r, -a],
    ]);
  }
  return n;
}
function Fr(t, e, i, n) {
  var r = t._id,
    a = (function (t, e, i) {
      var n = {};
      return (
        t.delay && (n.delay = h.isFunction(t.delay) ? t.delay(e, i) : t.delay),
        (n.easing = t.easing),
        (n.duration = t.duration),
        (n.delay = t.delay),
        n
      );
    })(i, t.get("index"), r),
    s = a.easing,
    o = a.delay,
    l = a.duration,
    u = t.animate().to({ attrs: e, duration: l, delay: o, easing: s });
  n &&
    u.onEnd(function () {
      n();
    });
}
function jr(t, e) {
  var i = h.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"),
    n = h.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
  t.attr("fillOpacity", 0),
    t.attr("strokeOpacity", 0),
    Fr(t, { fillOpacity: i, strokeOpacity: n }, e);
}
var zr = Object.freeze(
  Object.defineProperty({ __proto__: null, fadeIn: jr }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Br(t, e, i, n, r) {
  var a,
    s,
    o = (function (t) {
      var e = t.start,
        i = t.end;
      return {
        start: e,
        end: i,
        width: i.x - e.x,
        height: Math.abs(i.y - e.y),
      };
    })(i),
    l = o.start,
    u = o.end,
    h = o.width,
    c = o.height,
    f = new Ci.Rect({ attrs: { x: l.x, y: u.y, width: h, height: c } });
  "y" === r
    ? ((a = l.x + h / 2), (s = n.y < l.y ? n.y : l.y))
    : "x" === r
    ? ((a = n.x > l.x ? n.x : l.x), (s = l.y + c / 2))
    : "xy" === r &&
      (i.isPolar
        ? ((a = i.center.x), (s = i.center.y))
        : ((a = (l.x + u.x) / 2), (s = (l.y + u.y) / 2)));
  var v = Er(f, [a, s], r);
  (f.isClip = !0),
    (f.endState = { matrix: v }),
    f.set("canvas", t.get("canvas")),
    t.attr("clip", f),
    Fr(f, f.endState, e, function () {
      t.attr("clip", null), f.remove(!0);
    });
}
function Lr(t, e, i) {
  for (var n = t.get("children"), r = 0, a = n.length; r < a; r++) {
    var s = n[r],
      o = s.getBBox();
    Fr(
      s,
      { matrix: Er(s, [(o.minX + o.maxX) / 2, (o.minY + o.maxY) / 2], i) },
      e
    );
  }
}
function Xr(t, e, i, n) {
  Br(t, e, i, n, "x");
}
function Gr(t, e, i, n) {
  Br(t, e, i, n, "y");
}
function Rr(t, e, i, n) {
  Br(t, e, i, n, "xy");
}
function Hr(t, e) {
  Lr(t, e, "xy");
}
function Wr(t, e, i) {
  var n = tn(i);
  n.set("canvas", t.get("canvas")), t.attr("clip", n);
  var r = {};
  if (i.isPolar) {
    var a = i.startAngle,
      s = i.endAngle;
    (r.endAngle = s), n.attr("endAngle", a);
  } else {
    var o = i.start,
      l = i.end,
      u = Math.abs(o.x - l.x),
      h = Math.abs(o.y - l.y);
    i.isTransposed
      ? (n.attr("height", 0), (r.height = h))
      : (n.attr("width", 0), (r.width = u));
  }
  Fr(n, r, e, function () {
    t.attr("clip", null), n.remove(!0);
  });
}
var Vr,
  qr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        groupScaleInX: Xr,
        groupScaleInXY: Rr,
        groupScaleInY: Gr,
        groupWaveIn: Wr,
        shapesScaleInX: function (t, e) {
          Lr(t, e, "x");
        },
        shapesScaleInXY: Hr,
        shapesScaleInY: function (t, e) {
          Lr(t, e, "y");
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
(Pi.prototype.animate = function () {
  var t = h.mix({}, this.get("attrs"));
  return new Ar(this, t, Vr);
}),
  (an.prototype.animate = function (t) {
    return this.set("animate", t), this;
  }),
  (Yr.Action = zr),
  (Yr.defaultCfg = {
    interval: {
      enter: function (t) {
        return t.isPolar && t.transposed
          ? function (t) {
              t.set("zIndex", -1), t.get("parent").sort();
            }
          : jr;
      },
    },
    area: {
      enter: function (t) {
        return t.isPolar ? null : jr;
      },
    },
    line: {
      enter: function (t) {
        return t.isPolar ? null : jr;
      },
    },
    path: {
      enter: function (t) {
        return t.isPolar ? null : jr;
      },
    },
  });
var Zr = {
  line: function (t) {
    return t.isPolar ? Rr : Wr;
  },
  area: function (t) {
    return t.isPolar ? Rr : Wr;
  },
  path: function (t) {
    return t.isPolar ? Rr : Wr;
  },
  point: function () {
    return Hr;
  },
  interval: function (t) {
    var e;
    return (
      t.isPolar
        ? ((e = Rr), t.transposed && (e = Wr))
        : (e = t.transposed ? Xr : Gr),
      e
    );
  },
  schema: function () {
    return Wr;
  },
};
function Ur(t, e, i, n) {
  return h.isFunction(n)
    ? n
    : h.isString(n)
    ? Yr.Action[n]
    : Yr.getAnimation(t, e, i);
}
function Jr(t, e, i) {
  if (!1 === i || (h.isObject(i) && !1 === i[e])) return !1;
  var n = Yr.getAnimateCfg(t, e);
  return i && i[e] ? h.deepMix({}, n, i[e]) : n;
}
function $r(t, e) {
  if (!t) return null;
  var i = e.get("animate");
  return (
    t.indexOf("guide-tag") > -1 && (t = "guide-tag"),
    h.isObject(i) ? i[t] : !1 !== i && null
  );
}
function Kr() {
  (Vr = new _r()).play();
}
function Qr(t) {
  if (!1 !== t.get("animate")) {
    var e = t.get("isUpdate"),
      i = t.get("canvas"),
      n = t.get("coord"),
      r = t.get("geoms"),
      a = i.get("caches") || [];
    0 === a.length && (e = !1);
    var s = (function (t, e, i) {
        var n = [];
        return (
          h.each(t, function (t, r) {
            var a = t.get("container").get("children"),
              s = t.get("type"),
              o = h.isNil(t.get("animateCfg")) ? $r(s, e) : t.get("animateCfg");
            !1 !== o &&
              h.each(a, function (e, a) {
                e.get("className") === s &&
                  ((e._id = (function (t, e, i) {
                    var n,
                      r = t.get("type"),
                      a = "geom" + i + "-" + r,
                      s = t.getXScale(),
                      o = t.getYScale(),
                      l = s.field || "x",
                      u = o.field || "y",
                      c = e[u];
                    (n = s.isIdentity ? s.value : e[l]),
                      (a +=
                        "interval" === r || "schema" === r
                          ? "-" + n
                          : "line" === r || "area" === r || "path" === r
                          ? "-" + r
                          : s.isCategory
                          ? "-" + n
                          : "-" + n + "-" + c);
                    var f = t._getGroupScales();
                    return (
                      h.each(f, function (t) {
                        var i = t.field;
                        "identity" !== t.type && (a += "-" + e[i]);
                      }),
                      a
                    );
                  })(t, e.get("origin")._origin, r)),
                  e.set("coord", i),
                  e.set("animateCfg", o),
                  e.set("index", a),
                  n.push(e));
              }),
              t.set("shapes", a);
          }),
          n
        );
      })(r, t, n),
      o = t.get("axisController"),
      l = o.frontPlot,
      u = o.backPlot,
      c = l.get("children").concat(u.get("children")),
      f = [];
    t.get("guideController") && (f = t.get("guideController").guideShapes);
    var v,
      g,
      d = [];
    c.concat(f).forEach(function (e) {
      var i = $r(e.get("className"), t);
      e.set("coord", n), e.set("animateCfg", i), d.push(e), s.push(e);
    }),
      i.set(
        "caches",
        (function (t) {
          for (var e = {}, i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            if (r._id && !r.isClip) {
              var a = r._id;
              e[a] = {
                _id: a,
                type: r.get("type"),
                attrs: h.mix({}, r._attrs.attrs),
                className: r.get("className"),
                geomType: r.get("className"),
                index: r.get("index"),
                coord: r.get("coord"),
                animateCfg: r.get("animateCfg"),
              };
            }
          }
          return e;
        })(s)
      ),
      e
        ? (function (t, e, i) {
            var n,
              r,
              a = [],
              s = [];
            h.each(e, function (e) {
              var i = t[e._id];
              i
                ? (e.set("cacheShape", i), a.push(e), delete t[e._id])
                : s.push(e);
            }),
              h.each(t, function (t) {
                var e = t.className,
                  a = t.coord,
                  s = t._id,
                  o = t.attrs,
                  l = t.index,
                  u = t.type;
                if (!1 === (r = Jr(e, "leave", t.animateCfg))) return !0;
                if (((n = Ur(e, a, "leave", r.animation)), h.isFunction(n))) {
                  var c = i.addShape(u, {
                    attrs: o,
                    index: l,
                    canvas: i,
                    className: e,
                  });
                  (c._id = s), n(c, r, a);
                }
              }),
              h.each(a, function (t) {
                var e = t.get("className");
                if (!1 === (r = Jr(e, "update", t.get("animateCfg"))))
                  return !0;
                var i = t.get("coord"),
                  a = t.get("cacheShape").attrs,
                  s = (function (t, e) {
                    var i = {};
                    for (var n in e)
                      ((h.isNumber(t[n]) && t[n] !== e[n]) ||
                        (h.isArray(t[n]) &&
                          JSON.stringify(t[n]) !== JSON.stringify(e[n]))) &&
                        (i[n] = e[n]);
                    return i;
                  })(a, t._attrs.attrs);
                if (Object.keys(s).length)
                  if (((n = Ur(e, i, "update", r.animation)), h.isFunction(n)))
                    n(t, r, i);
                  else {
                    var o = {};
                    h.each(s, function (t, e) {
                      o[e] = a[e];
                    }),
                      t.attr(o),
                      t
                        .animate()
                        .to({
                          attrs: s,
                          duration: r.duration,
                          easing: r.easing,
                          delay: r.delay,
                        })
                        .onEnd(function () {
                          t.set("cacheShape", null);
                        });
                  }
              }),
              h.each(s, function (t) {
                var e = t.get("className"),
                  i = t.get("coord");
                if (!1 === (r = Jr(e, "enter", t.get("animateCfg")))) return !0;
                if (((n = Ur(e, i, "enter", r.animation)), h.isFunction(n)))
                  if ("interval" === e && i.isPolar && i.transposed) {
                    var s = t.get("index"),
                      o = a[s - 1];
                    n(t, r, o);
                  } else n(t, r, i);
              });
          })(a, s, i)
        : (h.each(r, function (e) {
            var i = e.get("type"),
              r = h.isNil(e.get("animateCfg")) ? $r(i, t) : e.get("animateCfg");
            if (!1 !== r)
              if (
                ((v = Jr(i, "appear", r)),
                (g = Ur(i, n, "appear", v.animation)),
                h.isFunction(g))
              ) {
                var a = e.get("shapes");
                h.each(a, function (t) {
                  g(t, v, n);
                });
              } else if (Zr[i]) {
                g = qr[v.animation] || Zr[i](n);
                var s = e.getYScale(),
                  o = n.convertPoint({ x: 0, y: s.scale(e.getYMinValue()) }),
                  l = e.get("container");
                g && g(l, v, n, o);
              }
          }),
          h.each(d, function (t) {
            var e = t.get("animateCfg"),
              i = t.get("className");
            if (e && e.appear) {
              var r = Yr.getAnimateCfg(i, "appear"),
                a = h.deepMix({}, r, e.appear),
                s = Ur(i, n, "appear", a.animation);
              h.isFunction(s) && s(t, a, n);
            }
          }));
  }
}
function ta() {
  Vr.stop();
}
var ea = {
    afterCanvasInit: Kr,
    beforeCanvasDraw: Qr,
    afterCanvasDestroyed: ta,
  },
  ia = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterCanvasDestroyed: ta,
        afterCanvasInit: Kr,
        beforeCanvasDraw: Qr,
        default: ea,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function na(t, e, i) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ("object" != u(t) || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var n = i.call(t, e);
          if ("object" != u(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t, "string");
      return "symbol" == u(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
(an._Interactions = {}),
  (an.registerInteraction = function (t, e) {
    an._Interactions[t] = e;
  }),
  (an.getInteraction = function (t) {
    return an._Interactions[t];
  }),
  (an.prototype.interaction = function (t, e) {
    var i = this._interactions || {};
    i[t] && i[t].destroy();
    var n = new (an.getInteraction(t))(e, this);
    return (i[t] = n), (this._interactions = i), this;
  }),
  (an.prototype.clearInteraction = function (t) {
    var e = this._interactions;
    if (e)
      return (
        t
          ? (e[t] && e[t].destroy(), delete e[t])
          : h.each(e, function (t, i) {
              t.destroy(), delete e[i];
            }),
        this
      );
  });
var ra = [0, 1],
  aa = (function () {
    function e(t) {
      o(this, e);
      var i = this;
      na(this, "chart", null),
        na(this, "values", null),
        na(this, "range", ra),
        na(this, "startRange", ra),
        na(this, "minCount", 10),
        na(this, "_afterinit", function () {
          var t = i.getPinchScale(),
            e = [].concat(t.values);
          (i.values = e),
            i.minScale || (i.minScale = i.minCount / e.length),
            i.range !== ra && (i.updateRange(i.range), i.updateTicks());
        }),
        na(this, "_afterdatachange", function () {
          i.updateRange(i.range);
        }),
        (this.chart = t),
        this._initEvent(t);
    }
    return (
      l(e, [
        {
          key: "_initEvent",
          value: function (t) {
            t.on(V, this._afterinit), t.on(q, this._afterdatachange);
          },
        },
        {
          key: "getPinchScale",
          value: function () {
            return this.chart.getXScale();
          },
        },
        {
          key: "getFollowScale",
          value: function () {
            return (this.chart.getYScales() || [])[0];
          },
        },
        {
          key: "start",
          value: function () {
            var e = this.range,
              i = this.getPinchScale(),
              n = t(e, 2),
              r = n[0],
              a = n[1];
            (this.startRange = [r, a]), (this.lastTickCount = i.tickCount);
          },
        },
        {
          key: "doZoom",
          value: function (e, i, n) {
            var r = this.startRange,
              a = this.minScale,
              s = t(r, 2),
              o = s[0],
              l = s[1],
              u = (l - o) * (1 - n),
              h = u * e,
              c = u * i,
              f = Math.max(0, o - h),
              v = Math.min(1, l + c),
              g = [f, v];
            v - f < a || this.updateRange(g);
          },
        },
        {
          key: "doMove",
          value: function (e) {
            if (e) {
              var i,
                n = this.startRange,
                r = t(n, 2),
                a = r[0],
                s = r[1],
                o = s - a,
                l = o * e,
                u = a - l,
                h = s - l;
              (i = u < 0 ? [0, o] : h > 1 ? [1 - o, 1] : [u, h]),
                this.updateRange(i);
            }
          },
        },
        {
          key: "updateRange",
          value: function (e) {
            var i = this.values,
              n = t(e, 2),
              r = n[0],
              a = n[1];
            (r = Math.max(0, r)), (a = Math.min(1, a)), (this.range = [r, a]);
            var s = i.length,
              o = r * s,
              l = a * s,
              u = i.slice(o, l);
            this.repaint(u);
          },
        },
        {
          key: "repaint",
          value: function (t) {
            var e = this.chart,
              i = this.getPinchScale(),
              n = i.values,
              r = i.ticks;
            (function (t, e) {
              if (t.length !== e.length) return !1;
              var i = t.length - 1;
              return t[0] === e[0] && t[i] === e[i];
            })(n, t) ||
              (this.updateScale(i, { ticks: r, values: t }),
              this.updateFollowScale(i, t),
              e.repaint());
          },
        },
        {
          key: "updateFollowScale",
          value: function (t, e) {
            var i = this.chart,
              n = this.getFollowScale(),
              r = t.field,
              a = t.type,
              s = n.field,
              o = [],
              l = {};
            e.forEach(function (t) {
              l[t] = !0;
            }),
              i.get("data").forEach(function (t) {
                if ("timeCat" === a) {
                  var e = B(t[r]);
                  l[e] && o.push(t[s]);
                }
              });
            var u = m(o),
              h = u.min,
              c = u.max;
            this.updateScale(n, { min: h, max: c, nice: !0 });
          },
        },
        {
          key: "updateScale",
          value: function (t, e) {
            t && t.change(e);
          },
        },
        {
          key: "updateTicks",
          value: function () {
            var t = this.chart,
              e = this.values,
              i = this.getPinchScale(),
              n = i.values,
              r = i.tickCount,
              a = Math.round((r * e.length) / n.length),
              s = Ct("cat")({ tickCount: a, values: e });
            this.updateScale(i, { ticks: s, values: n }), t.repaint();
          },
        },
        {
          key: "destroy",
          value: function () {
            var t = this.chart;
            t.off(V, this._afterinit), t.off(q, this._afterdatachange);
          },
        },
      ]),
      e
    );
  })();
function sa(t, e, i) {
  return (
    (e = (function (t) {
      var e = (function (t, e) {
        if ("object" != u(t) || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
          var n = i.call(t, e);
          if ("object" != u(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t, "string");
      return "symbol" == u(e) ? e : String(e);
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
var oa = (function () {
  function t(e, i) {
    o(this, t);
    var n = this;
    sa(this, "type", ""),
      sa(this, "startEvent", "touchstart"),
      sa(this, "processEvent", "touchmove"),
      sa(this, "endEvent", "touchend"),
      sa(this, "resetEvent", null),
      sa(this, "context", null),
      sa(this, "_start", function (t) {
        n.preStart && n.preStart(t), n.start(t), n.onStart && n.onStart(t);
      }),
      sa(this, "_process", function (t) {
        n.preProcess && n.preProcess(t),
          n.process(t),
          n.onProcess && n.onProcess(t);
      }),
      sa(this, "_end", function (t) {
        n.preEnd && n.preEnd(t), n.end(t), n.onEnd && n.onEnd(t);
      }),
      sa(this, "_reset", function (t) {
        n.preReset && n.preReset(t), n.reset(t), n.onReset && n.onReset(t);
      }),
      h.mix(this, this.getDefaultCfg(), e),
      (this.context = this.getInteractionContext(i)),
      (this.chart = i);
    var r = this.range;
    r && (this.context.range = r), this._bindEvents(i);
  }
  return (
    l(t, [
      {
        key: "getDefaultCfg",
        value: function () {
          return {};
        },
      },
      {
        key: "getInteractionContext",
        value: function (t) {
          var e = t.get("interactionContext");
          return e || ((e = new aa(t)), t.set("interactionContext", e), e);
        },
      },
      {
        key: "_bindEvents",
        value: function (t) {
          var e = this.startEvent,
            i = this.processEvent,
            n = this.endEvent,
            r = this.resetEvent,
            a = t.get("canvas");
          a.on(e, this._start),
            a.on(i, this._process),
            a.on(n, this._end),
            a.on(r, this._reset);
        },
      },
      {
        key: "_clearEvents",
        value: function () {
          var t = this.chart,
            e = this.startEvent,
            i = this.processEvent,
            n = this.endEvent,
            r = this.resetEvent,
            a = t.get("canvas");
          a.off(e, this._start),
            a.off(i, this._process),
            a.off(n, this._end),
            a.off(r, this._start);
        },
      },
      { key: "start", value: function () {} },
      { key: "process", value: function () {} },
      { key: "end", value: function () {} },
      { key: "reset", value: function () {} },
      {
        key: "destroy",
        value: function () {
          this.context.destroy(), this._clearEvents();
        },
      },
    ]),
    t
  );
})();
an.registerInteraction(
  "pan",
  (function (t) {
    a(i, oa);
    var e = s(i);
    function i() {
      return o(this, i), e.apply(this, arguments);
    }
    return (
      l(i, [
        {
          key: "getDefaultCfg",
          value: function () {
            return {
              type: "pan",
              startEvent: "panstart",
              processEvent: "pan",
              endEvent: "panend",
            };
          },
        },
        {
          key: "start",
          value: function () {
            this.context.start();
          },
        },
        {
          key: "process",
          value: function (t) {
            var e = t.direction,
              i = t.deltaX;
            if ("up" !== e && "down" !== e) {
              t.preventDefault && t.preventDefault();
              var n = this.context,
                r = n.chart.get("coord"),
                a = r.start,
                s = i / (r.end.x - a.x);
              n.doMove(s);
            }
          },
        },
      ]),
      i
    );
  })()
),
  an.registerInteraction(
    "pinch",
    (function (t) {
      a(n, oa);
      var e = s(n);
      function n(t, r) {
        var a;
        o(this, n), (a = e.call(this, t, r));
        var s = i(a).context;
        return h.mix(s, t), a;
      }
      return (
        l(n, [
          {
            key: "getDefaultCfg",
            value: function () {
              return {
                type: "pinch",
                startEvent: "pinchstart",
                processEvent: "pinch",
                endEvent: "pinchend",
              };
            },
          },
          {
            key: "start",
            value: function () {
              this.context.start();
            },
          },
          {
            key: "process",
            value: function (t) {
              t.preventDefault && t.preventDefault();
              var e = t.zoom,
                i = t.center,
                n = this.context,
                r = n.chart.get("coord"),
                a = r.start,
                s = r.end,
                o = s.x - a.x,
                l = Math.abs(i.x - a.x) / o,
                u = Math.abs(s.x - i.x) / o;
              n.doZoom(l, u, e);
            },
          },
          {
            key: "end",
            value: function () {
              this.context.updateTicks();
            },
          },
        ]),
        n
      );
    })()
  );
var la = { Marker: Ci.Marker, Tooltip: Vn };
an.plugins.register([rr, xr, cr, ia]);
var ua = {
  Component: la,
  Global: W,
  Chart: an,
  Shape: ct,
  G: Qi,
  Util: L,
  Helper: nn,
  track: sn,
  Animate: Yr,
};
(exports.Animate = Yr),
  (exports.Chart = an),
  (exports.Component = la),
  (exports.G = Qi),
  (exports.Global = W),
  (exports.Helper = nn),
  (exports.Shape = ct),
  (exports.Util = L),
  (exports.default = ua),
  (exports.track = sn);
