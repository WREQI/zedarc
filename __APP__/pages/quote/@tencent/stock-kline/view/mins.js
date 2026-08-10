require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  s = require("../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../@babel/runtime/helpers/inherits"),
  o = require("../../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  h = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  c = Object.defineProperty,
  p = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  d = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable,
  x = function (t, i, e) {
    return i in t
      ? c(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[i] = e);
  },
  m = function (t, i) {
    for (var e in i || (i = {})) u.call(i, e) && x(t, e, i[e]);
    if (d) {
      var s,
        r = h(d(i));
      try {
        for (r.s(); !(s = r.n()).done; ) {
          e = s.value;
          g.call(i, e) && x(t, e, i[e]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  f = function (t, i) {
    return p(t, l(i));
  },
  v = require("../../../../../common/vendor.js"),
  y = require("../../../../quote/plugin_gen_assets.js"),
  w = "x",
  P = "y",
  b = function (t) {
    var i,
      e,
      s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = {},
      o = [1, 1e4, 1e8, Number.MAX_SAFE_INTEGER],
      a = s ? ["万", "亿", "亿万"] : ["", "万", "亿"];
    if (((t = parseFloat(t)), isNaN(t))) return t;
    for (i = 1; i < o.length; i++)
      if (((e = a[i - 1]), t < o[i])) {
        var n = t / o[i - 1],
          h = n.toString().split("."),
          c = h[1] ? Math.min(4 - h[0].length, 2) : 0;
        r = { v: n.toFixed(Math.max(c, 0)), u: e };
        break;
      }
    return r;
  },
  M = function (t) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) return !1;
    return R(t) == R(t);
  };
function R(t) {
  var i = t;
  try {
    i = JSON.stringify(t);
  } catch (t) {}
  return i;
}
var T = function () {
  try {
    return !(window || !v.wx$1 || !v.wx$1.getSystemInfoSync);
  } catch (t) {
    return !1;
  }
};
function C(t, i) {
  var e = 0;
  return function () {
    for (
      var s = Date.now(), r = arguments.length, o = new Array(r), a = 0;
      a < r;
      a++
    )
      o[a] = arguments[a];
    i && s - e >= t && (i.apply(this, o), (e = s));
  };
}
var k = function (t, i) {
    var e = i.mainIndicator,
      s = void 0 === e ? "" : e,
      r = i.setting,
      o = void 0 === r ? {} : r,
      a = s || "ma",
      n = Math.max(t.maxMin.kline.max, t.maxMin[a].max),
      h = Math.min(t.maxMin.kline.min, t.maxMin[a].min);
    if (o.supportPressureLine) {
      var c = S(t.items),
        p = c.support,
        l = c.pressure;
      p && l && ((n = Math.max(n, l)), (h = Math.min(h, p)));
    }
    return { max: n, min: h };
  },
  A = function (t, i) {
    var e = T(),
      s = e ? i.createImage() : document.createElement("img");
    return t
      ? (e || (s.crossOrigin = "Anonymous"),
        (s.onerror = function (t) {}),
        (s.src = t),
        s)
      : s;
  },
  S = function (t) {
    var i = t.length;
    if (!i) return {};
    var e = t[i - 1] && t[i - 1].defboll;
    if (!e) return {};
    var s = e || {},
      r = s.upper,
      o = void 0 === r ? 0 : r,
      a = s.mid,
      n = void 0 === a ? 0 : a,
      h = s.lower,
      c = void 0 === h ? 0 : h,
      p = t[i - 1].close;
    return o && n && c
      ? { support: p > n ? n : c, pressure: p > n ? o : n }
      : {};
  },
  L = new ((function () {
    function t() {
      a(this, t),
        (this.strTypes = ["letter", "character", "number", "otherChars"]),
        (this.isMini = T()),
        (this.fontWidth = {});
    }
    return (
      n(t, [
        {
          key: "get",
          value: function (t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            if (
              ("string" != typeof i && (i = String(i)),
              !this.isMini || !this.fontWidth[t])
            )
              return 0;
            var e = this.getStrContent(i),
              s = e.onlyNumber,
              r = e.onlyChinese,
              o = e.characterLength,
              a = e.letterLength,
              n = e.numberLength,
              h = e.otherCharsLength,
              c = e.spaceLength,
              p = this.fontWidth[t],
              l = p.letter,
              d = void 0 === l ? 0 : l,
              u = p.character,
              g = void 0 === u ? 0 : u,
              x = p.number,
              m = void 0 === x ? 0 : x,
              f = p.otherChars,
              v = void 0 === f ? 0 : f;
            return r
              ? i.length * (g || 0)
              : s
              ? i.length * m
              : a === i.length
              ? i.length * d
              : (a && !d) || (!g && o) || (!v && h)
              ? 0
              : g * o + d * a + (m || v / 2) * n + v * h + c;
          },
        },
        {
          key: "set",
          value: function (t, i, e) {
            var s = this;
            if (
              ("string" != typeof t && (t = String(t)), this.isMini && t.length)
            ) {
              var r = this.getStrContent(t),
                o = r.onlyNumber,
                a = r.onlyChinese,
                n = (r.characterLength, r.letterLength),
                h = (r.numberLength, r.otherCharsLength),
                c = (r.spaceLength, r.types);
              if ((this.fontWidth[i] || (this.fontWidth[i] = {}), a))
                this.fontWidth[i].character = Math.ceil(e / t.length);
              else if (o) this.fontWidth[i].number = Math.ceil(e / t.length);
              else if (n !== t.length)
                if (h !== t.length) {
                  var p,
                    l = 0;
                  c.every(function (t) {
                    if (s.fontWidth[i][t])
                      l += r["".concat(t, "Length")] * s.fontWidth[i][t];
                    else {
                      if (p) return !1;
                      p = t;
                    }
                    return !0;
                  }) &&
                    (this.fontWidth[i][p] = Math.ceil(
                      (e - l) / r["".concat(p, "Length")]
                    ));
                } else this.fontWidth[i].otherChars = Math.ceil(e / t.length);
              else this.fontWidth[i].letter = Math.ceil(e / t.length);
            }
          },
        },
        {
          key: "getStrContent",
          value: function (t) {
            "string" != typeof t && (t = String(t));
            var i = t.replace(/ /g, ""),
              e = t.replace(/[^\u4E00-\u9FA5]/g, ""),
              s = t.replace(/[^a-zA-Z]+/g, ""),
              r = t.replace(/[^\d\.]+/g, ""),
              o = t.length - i.length,
              a = t.length - s.length - r.length - e.length - o,
              n = {
                onlyNumber: !isNaN(t),
                onlyChinese: t && t.length == e.length,
                characterLength: e.length,
                letterLength: s.length,
                numberLength: r.length,
                otherCharsLength: a,
                spaceLength: o,
                types: [],
              };
            return (
              this.strTypes.forEach(function (t) {
                return n["".concat(t, "Length")] && n.types.push(t);
              }),
              n
            );
          },
        },
      ]),
      t
    );
  })())();
function I(t, i, e, s, r, o) {
  if (i) {
    t.save(), t.setTextStyle(r);
    var a = o || L.get(r.font, i);
    a || ((a = t.measureText(i).width), L.set(i, r.font, a)),
      t.fillText(i, e, s, a),
      t.restore();
  }
}
function D(t, i, e) {
  var s = 0;
  return i
    ? (t.save(),
      e.font && (t.setFont(e.font), (s = L.get(e.font, i))),
      s || ((s = t.measureText(i).width), L.set(i, e.font, s)),
      t.restore(),
      s)
    : s;
}
var W = "middle",
  B = "top",
  F = "bottom",
  E = "left",
  N = "right",
  Y = "center",
  _ = (function () {
    function t(i, e, s, r) {
      a(this, t),
        (this.ctx = i),
        (this.type = e),
        (this.labels = Array.isArray(s) ? s : []),
        (this.region = r);
    }
    return (
      n(t, [
        {
          key: "getX",
          value: function (t, i) {
            var e = i.props;
            if (this.type == P)
              return e.textAlign == E
                ? this.region.x
                : e.textAlign == N
                ? this.region.x + this.region.width
                : this.region.x;
            var s = this.region.x + i.x,
              r = D(this.ctx, "".concat(i.text), i.props);
            return (
              s + r / 2 > this.region.x + this.region.width &&
                (s = this.region.x + this.region.width - r / 2),
              s
            );
          },
        },
        {
          key: "getY",
          value: function (t, i) {
            var e = i.props,
              s = e.padding,
              r = void 0 === s ? 0 : s;
            return this.type === w
              ? e.baseLine == B
                ? this.region.y
                : e.baseLine == F
                ? this.region.y + this.region.height
                : this.region.y + this.region.height / 2 + r
              : i.y + r;
          },
        },
        {
          key: "draw",
          value: function () {
            var t = this;
            Array.isArray(this.labels) &&
              this.labels.forEach(function (i, e) {
                var s = t.getX(e, i),
                  r =
                    Object.prototype.hasOwnProperty.call(i, "y") && !isNaN(i.y)
                      ? i.y
                      : t.getY(e, i);
                I(t.ctx, i.text, s, r, i.props);
              });
          },
        },
      ]),
      t
    );
  })(),
  O = (function (t) {
    r(e, _);
    var i = o(e);
    function e(t, s, r, o) {
      return a(this, e), i.call(this, t, s, r, o);
    }
    return (
      n(e, [
        {
          key: "getX",
          value: function (t, i) {
            var e = i.props;
            if (this.type == P)
              return e.textAlign == E
                ? this.region.x
                : e.textAlign == N
                ? this.region.x + this.region.width
                : this.region.x;
            if (this.type == w) {
              var s = this.region.width / this.labels.length;
              return s * t + s / 2 + this.region.x;
            }
          },
        },
        {
          key: "getY",
          value: function (t, i) {
            var e = i.props;
            if (this.type === w)
              return e.baseLine == B
                ? this.region.y
                : e.baseLine == F
                ? this.region.y + this.region.height
                : this.region.y + this.region.height / 2;
            var s = this.region.height / this.labels.length;
            return s * t + s / 2 + this.region.y;
          },
        },
      ]),
      e
    );
  })(),
  H = "#ffffff",
  j = "#e63535",
  X = "#2db955",
  z = "#9299aa",
  U = "#888888",
  q = "#007aff",
  V = "#ff891e",
  G = "#d907ff",
  K = "#9f2cc5",
  Z = "#b2b2b2",
  $ = "#4280f2",
  J = "transparent",
  Q = "#868E9E",
  tt = "#3077ec",
  it = {
    kline: {
      plain: {
        rise: j,
        drop: X,
        flat: z,
        reddot: j,
        border: "#E9EBF0",
        vline: "#E9EBF0",
        hline: "#E9EBF0",
        xAxis: "#98A0B3",
        yAxis: "#98A0B3",
        tip: "#7A8499",
        maxMinTip: "#00A1FF",
        maxMin: Z,
        maxMinLine: Z,
        defaultGray: "#7A8499",
        commonBackground: "#F5F6FA",
        volatileBar: { rise: "#F1E399", drop: "#B2EDF3" },
        button: {
          bg: "#F5F6FA",
          text: "#262E40",
          tri: "#475166",
          blueText: tt,
          commonBorder: "rgba(48, 119, 236, 0.5)",
          commonBg: "#F1F7FF",
        },
        zxBar: { bg: "#F1F7FF", border: "rgba(48, 119, 236, 0.5)" },
        macd: { dif: V, dea: q, macd: K, entry: tt },
        dmi: { pdi: U, mdi: q, adx: G, adxr: X },
        wr: { wr1: V, wr2: q },
        boll: { upper: X, mid: V, lower: G, ochl: $ },
        kdj: { k: V, d: q, j: G },
        obv: V,
        rsi: { rsi1: V, rsi2: q, rsi3: G },
        sar: { sar: q, low: q, high: q },
        cci: q,
        bias: { bias1: V, bias2: q, bias3: G },
        bbi: V,
        trix: { trix: V, trma: q },
        ene: { ene: V, upper: q, lower: G },
        vr: { vr: V, vrma: q },
        arbr: { ar: V, br: q },
        psy: { psy: V, psyma: q },
        dma: { ddd: V, ama: q },
        dpo: { dpo: V, dpoma: q },
        rally: q,
        ma: [
          "#D800FE",
          "#DBC000",
          "#00B4FE",
          "#8175f3",
          "#B8A89F",
          "#F1931D",
          "#76A9FF",
          "#FF6D5E",
          "#34C27C",
          "#FF76B0",
        ],
        ema: [
          "#D800FE",
          "#DBC000",
          "#00B4FE",
          "#8175f3",
          "#B8A89F",
          "#F1931D",
          "#76A9FF",
          "#FF6D5E",
          "#34C27C",
          "#FF76B0",
        ],
        emaOchl: $,
        crossLine: "#262E40",
        chip: {
          text: "#262E40",
          subText: "#98a0b3",
          subTitle: "#475166",
          blue: tt,
          lightBlue: "rgba(0, 122, 255, 0.5)",
          tabBg: Q,
          white: H,
          activeText: H,
        },
        areaSelect: {
          top: {
            border: {
              rise: "rgba(230, 53, 53, 0.4)",
              drop: "rgba(45, 185, 85, 0.4)",
              flat: "rgba(146, 153, 170, 0.4)",
            },
            bgColor: { rise: "#FCEDED", drop: "#F0F9F2", flat: "#F5F6FA" },
          },
        },
        supportLine: {
          textColor: { support: "#F08585", pressure: "#76CC8A" },
          bgColor: { support: "#FCEBEB", pressure: "#E8F6EB" },
        },
        supportPressureSignal: {
          support: {
            main: "rgba(255, 137, 30, 1)",
            bg: "rgba(255, 137, 30, 0.2)",
          },
          pressure: {
            main: "rgba(48, 119, 236, 1)",
            bg: "rgba(48, 119, 236, 0.2)",
          },
        },
        hgBar: { bgColor: "#FFF8F2", border: "rgba(255, 137, 30, 0.5)" },
        close: "#0B9BFF",
      },
      dark: {
        rise: j,
        drop: X,
        flat: z,
        reddot: j,
        border: "#191E27",
        vline: "#191E27",
        hline: "#191E27",
        xAxis: "#69738C",
        yAxis: "#69738C",
        tip: "#7A8499",
        maxMin: Z,
        maxMinLine: Z,
        defaultGray: "#7A8499",
        maxMinTip: "#00A1FF",
        commonBackground: "#171D28",
        volatileBar: { rise: "#F1E399", drop: "#B2EDF3" },
        button: {
          bg: "#171D28",
          text: "#F0F1F5",
          tri: "#F0F1F5",
          blueText: tt,
          commonBorder: "rgba(48, 119, 236, 0.5)",
          commonBg: "#171D28",
        },
        zxBar: { bg: "#171D28", border: "rgba(48, 119, 236, 0.5)" },
        macd: { dif: V, dea: q, macd: K, entry: tt },
        dmi: { pdi: U, mdi: q, adx: G, adxr: X },
        wr: { wr1: V, wr2: q },
        boll: { upper: X, mid: V, lower: G, ochl: $ },
        kdj: { k: V, d: q, j: G },
        obv: V,
        rsi: { rsi1: V, rsi2: q, rsi3: G },
        sar: { sar: q, low: q, high: q },
        cci: q,
        bias: { bias1: V, bias2: q, bias3: G },
        bbi: V,
        trix: { trix: V, trma: q },
        ene: { ene: V, upper: q, lower: G },
        vr: { vr: V, vrma: q },
        arbr: { ar: V, br: q },
        psy: { psy: V, psyma: q },
        dma: { ddd: V, ama: q },
        dpo: { dpo: V, dpoma: q },
        rally: q,
        ma: [
          "#D800FE",
          "#DBC000",
          "#00B4FE",
          "#8175f3",
          "#B8A89F",
          "#F1931D",
          "#76A9FF",
          "#FF6D5E",
          "#34C27C",
          "#FF76B0",
        ],
        ema: [
          "#D800FE",
          "#DBC000",
          "#00B4FE",
          "#8175f3",
          "#B8A89F",
          "#F1931D",
          "#76A9FF",
          "#FF6D5E",
          "#34C27C",
          "#FF76B0",
        ],
        emaOchl: $,
        crossLine: "#98A0B3",
        chip: {
          text: "#f0f1f5",
          subText: "#69738c",
          subTitle: "#a7b0c4",
          blue: tt,
          lightBlue: "rgba(0, 122, 255, 0.5)",
          tabBg: Q,
          white: "#000000",
          activeText: H,
        },
        areaSelect: {
          top: {
            border: { rise: "#91282B", drop: "#176F30", flat: "#F5F6FA" },
            bgColor: { rise: "#261921", drop: "#122421", flat: "#171D28" },
          },
        },
        supportLine: {
          textColor: { support: "#768093", pressure: "#768093" },
          bgColor: { support: "#261921", pressure: "#122421" },
        },
        supportPressureSignal: {
          support: {
            main: "rgba(255, 137, 30, 1)",
            bg: "rgba(255, 137, 30, 0.2)",
          },
          pressure: {
            main: "rgba(48, 119, 236, 1)",
            bg: "rgba(48, 119, 236, 0.2)",
          },
        },
        hgBar: { border: "#FFF8F2", bgColor: "#261E17" },
        close: "#AFD8FF",
      },
    },
    mins: {
      plain: {
        rise: j,
        drop: X,
        flat: Z,
        transparent: J,
        border: "#E9EBF0",
        vline: "#E9EBF0",
        hline: "#E9EBF0",
        mline: "#98A0B3",
        xAxis: "#98A0B3",
        yAxis: "#98A0B3",
        tip: "#7A8499",
        defaultGray: "#7A8499",
        chart: {
          priceLine: "#3077EC",
          avgPriceLine: "#CCB714",
          iopvLine: "#E085DC",
          fill: "rgba(66,128,242,0.1)",
          phRectFill: "rgba(0,121,255,.12)",
          phText: Q,
          rgba: {
            shinePoint: "rgba(51, 146, 255, 1)",
            rise: "rgba(230, 53, 53, 1)",
            drop: "rgba(28, 170, 60, 1)",
            flat: "rgba(122, 132, 153, 1)",
          },
        },
        button: {
          bg: "#F5F6FA",
          text: "#262E40",
          tri: "#475166",
          blueText: tt,
          commonBorder: "rgba(48, 119, 236, 0.5)",
          commonBg: "#F1F7FF",
        },
        macd: { dif: V, dea: q, macd: G },
        rsi: { rsi1: V, rsi2: q, rsi3: G },
        crossLine: "#262E40",
      },
      dark: {
        rise: j,
        drop: X,
        flat: Z,
        transparent: J,
        border: "#191E27",
        vline: "#191E27",
        hline: "#262e40",
        mline: "#98A0B3",
        xAxis: "#69738C",
        yAxis: "#69738C",
        tip: "#7A8499",
        defaultGray: "#7A8499",
        chart: {
          priceLine: "#AFD8FF",
          avgPriceLine: "#DAC100",
          iopvLine: "#A3299D",
          fill: "rgba(74, 176, 255, 0.1)",
          phRectFill: "rgba(74, 176, 255, 0.1)",
          phText: "#69738C",
          rgba: {
            shinePoint: "rgba(0, 234, 255, 1)",
            rise: "rgba(230, 53, 53, 1)",
            drop: "rgba(28, 170, 60, 1)",
            flat: "rgba(122, 132, 153, 1)",
          },
        },
        button: {
          bg: "#171D28",
          text: "#F0F1F5",
          tri: "#F0F1F5",
          blueText: tt,
          commonBorder: "rgba(48, 119, 236, 0.5)",
          commonBg: "#171D28",
        },
        macd: { dif: V, dea: q, macd: G },
        rsi: { rsi1: V, rsi2: q, rsi3: G },
        crossLine: "#98A0B3",
      },
    },
  };
function et(t, i, e, r) {
  var o,
    a,
    n,
    h = r && r.enableOffScreen;
  switch (((this.isMiniPorgram = r && r.isMiniPorgram), i)) {
    case 1:
      o = window.wx.createCanvasContext(t, e);
      break;
    case 2:
      h
        ? ((n = v.wx$1.createOffscreenCanvas({
            type: "2d",
            width: t.width,
            height: t.height,
          })),
          (o = n.getContext("2d")))
        : (o = t.getContext("2d"));
      break;
    default:
      o =
        "object" == s(t) && t.getContext
          ? t.getContext("2d")
          : document.getElementById(t).getContext("2d");
  }
  if (((this.ctx = o), !o))
    throw new Error(
      "INIT-CANVAS-FAIL-[context:".concat(o, "-contextID:").concat(i, "]")
    );
  for (a in (this.isMiniPorgram &&
    (h
      ? ((this.realContext = t.getContext("2d")), (this.miniCanvas = n))
      : (this.miniCanvas = t)),
  o))
    "function" == typeof o[a] &&
      (this[a] = (function (t) {
        return function () {
          var i = [].slice.call(arguments, 0);
          return o[t].apply(o, i);
        };
      })(a));
}
et.prototype = {
  setFillStyle: function (t) {
    this.ctx.setFillStyle
      ? this.ctx.setFillStyle(t)
      : (this.isMiniPorgram || this.ctx.fillStyle) && (this.ctx.fillStyle = t);
  },
  setStrokeStyle: function (t) {
    this.ctx.setStrokeStyle
      ? this.ctx.setStrokeStyle(t)
      : (this.isMiniPorgram || this.ctx.strokeStyle) &&
        (this.ctx.strokeStyle = t);
  },
  addColorStop: function (t, i) {},
  setLineWidth: function (t) {
    this.ctx.setLineWidth
      ? this.ctx.setLineWidth(t)
      : (this.isMiniPorgram || this.ctx.lineWidth) && (this.ctx.lineWidth = t);
  },
  setLineCap: function (t) {
    this.ctx.setLineCap
      ? this.ctx.setLineCap(t)
      : (this.isMiniPorgram || this.ctx.lineCap) && (this.ctx.lineCap = t);
  },
  setLineJoin: function (t) {
    this.ctx.setLineJoin
      ? this.ctx.setLineJoin(t)
      : (this.isMiniPorgram || this.ctx.lineJoin) && (this.ctx.lineJoin = t);
  },
  setTextAlign: function (t) {
    this.ctx.setTextAlign
      ? this.ctx.setTextAlign(t)
      : (this.isMiniPorgram || this.ctx.textAlign) && (this.ctx.textAlign = t);
  },
  setTextBaseline: function (t) {
    this.ctx.setTextBaseline
      ? this.ctx.setTextBaseline(t)
      : (this.isMiniPorgram || this.ctx.textBaseline) &&
        (this.ctx.textBaseline = t);
  },
  setGlobalAlpha: function (t) {
    this.ctx.setGlobalAlpha
      ? this.ctx.setGlobalAlpha(t)
      : (this.isMiniPorgram || this.ctx.globalAlpha) &&
        (this.ctx.globalAlpha = t);
  },
  draw: function (t, i) {
    (this.isMiniPorgram || this.ctx.draw) && this.ctx.draw(t, i);
  },
  setFont: function (t) {
    (this.isMiniPorgram || this.ctx.font) && (this.ctx.font = t);
  },
  setTextStyle: function (t) {
    t.color && this.setFillStyle(t.color),
      t.font && this.setFont(t.font),
      t.baseLine && this.setTextBaseline(t.baseLine),
      t.textAlign && this.setTextAlign(t.textAlign);
  },
  getContextCanvas: function () {
    return this.ctx && this.ctx.canvas;
  },
};
var st = T();
function rt(t, i, e, s, r, o, a) {
  var n = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1;
  t.save(),
    t.setStrokeStyle(o),
    a && t.setFillStyle(a),
    t.setLineWidth(n),
    a ? t.fillRect(lt(i), lt(e), s, r) : t.strokeRect(lt(i), lt(e), s, r),
    t.restore();
}
function ot(t, i, e, s, r, o, a, n) {
  var h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
    c =
      "number" == typeof o
        ? {
            borderTopLeftRadius: o,
            borderTopRightRadius: o,
            borderBottomLeftRadius: o,
            borderBottomRightRadius: o,
          }
        : o,
    p = c.borderTopLeftRadius,
    l = void 0 === p ? 0 : p,
    d = c.borderTopRightRadius,
    u = void 0 === d ? 0 : d,
    g = c.borderBottomLeftRadius,
    x = void 0 === g ? 0 : g,
    m = c.borderBottomRightRadius,
    f = void 0 === m ? 0 : m;
  t.save(),
    t.translate(i, e),
    t.beginPath(0),
    t.arc(s - f, r - f, f, 0, Math.PI / 2),
    t.lineTo(x, r),
    t.arc(x, r - x, x, Math.PI / 2, Math.PI),
    t.lineTo(0, x),
    t.arc(l, l, l, Math.PI, (3 * Math.PI) / 2),
    t.lineTo(s - u, 0),
    t.arc(s - u, u, u, (3 * Math.PI) / 2, 2 * Math.PI),
    t.lineTo(s, r - u),
    t.closePath(),
    t.setLineWidth(h),
    t.setStrokeStyle(a),
    n && (t.setFillStyle(n), t.fill()),
    t.stroke(),
    t.restore();
}
function at(t, i, e, s, r, o, a) {
  var n =
      arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "round",
    h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : [4, 7],
    c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 1;
  t.save(),
    t.setLineWidth(c),
    t.setStrokeStyle(o),
    "dash" != a || st
      ? (st && "dash" == a && (t.setLineDash([5, 5]), (t.lineDashOffset = 2)),
        t.beginPath(),
        1 === c
          ? (t.moveTo(lt(i), lt(e)), t.lineTo(lt(s), lt(r)))
          : (t.moveTo(i, e), t.lineTo(s, r)),
        t.stroke())
      : (t.setLineCap(n),
        t.beginPath(),
        t.dashedLine(i, e, s, r, h),
        t.closePath(),
        t.stroke()),
    t.restore();
}
function nt(t, i, e, s, r, o, a) {
  var n =
    arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "miter";
  0 === o
    ? (t.setFillStyle(s),
      t.setStrokeStyle(s),
      t.setLineWidth(r),
      t.setLineJoin(n),
      t.beginPath(),
      t.moveTo(i, e))
    : t.lineTo(i, e),
    o === a - 1 && t.stroke();
}
function ht(t, i, e, s) {
  var r =
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#fff",
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fff",
    a = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
  t.setFillStyle(r),
    t.setStrokeStyle(o),
    t.beginPath(),
    t.arc(i, e, s, 0, 2 * Math.PI, !0),
    t.stroke(),
    a ? t.fill() : t.closePath();
}
function ct(t, i, e, s, r, o, a) {
  var n =
      arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "#fff",
    h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : "#fff";
  t.setStrokeStyle(n),
    t.setFillStyle(h),
    t.beginPath(),
    t.moveTo(i, e),
    t.lineTo(s, r),
    t.lineTo(o, a),
    t.closePath(),
    t.fill();
}
function pt(t, i, e, s, r) {
  var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
  at(t, e, i.high, e, i.low, r, null, null, null, o),
    at(t, e, i.open, e - s / 2, i.open, r, null, null, null, o),
    at(t, e, i.close, e + s / 2, i.close, r, null, null, null, o);
}
function lt(t) {
  return parseInt(t) + 0.5;
}
function dt(t, i, e) {
  var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  t.save(),
    t.setLineWidth(s),
    t.setStrokeStyle(e),
    t.beginPath(),
    i.map(function (i, e) {
      e % 2 == 0 ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y);
    }),
    t.stroke(),
    t.restore();
}
function ut(t, i, e, s) {
  var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
  i.length &&
    (t.save(),
    t.setStrokeStyle(e),
    s && t.setFillStyle(s),
    t.setLineWidth(r),
    i.map(function (i) {
      s
        ? t.fillRect(lt(i.x), lt(i.y), i.width, i.height)
        : t.strokeRect(lt(i.x), lt(i.y), i.width, i.height);
    }),
    t.restore());
}
function gt(t, i) {
  var e =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#fff",
    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#fff",
    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
  i.length &&
    (t.setLineWidth(r),
    t.setFillStyle(e),
    t.setStrokeStyle(s),
    i.map(function (i) {
      t.beginPath(),
        t.arc(i.x, i.y, i.radius, 0, 2 * Math.PI, !0),
        t.stroke(),
        i.isFill ? t.fill() : t.closePath();
    }));
}
function xt(t, i, e, s, r) {
  var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2;
  if (e.length) {
    t.save(), t.setLineWidth(o), t.setStrokeStyle(s), r && t.setFillStyle(r);
    var a = r === i.colorProp.rise;
    e.map(function (e) {
      var o = e.midX,
        n = e.candleY,
        h = e.data;
      if (i.tradeLineMode && n.tradeLineStyle) {
        var c = i.colorProp,
          p = c.rise,
          l = c.drop,
          d = /solid/.test(n.tradeLineStyle),
          u = /rise/.test(n.tradeLineStyle);
        (r = d ? (u ? p : l) : void 0),
          (s = u ? p : l),
          t.setStrokeStyle(s),
          r && t.setFillStyle(r);
      } else "hollow" === i.setting.yangKStyle.id && a && (r = void 0);
      t.beginPath(),
        t.moveTo(o, n.highY),
        t.lineTo(o, a ? n.closeY : n.openY),
        t.stroke(),
        t.beginPath(),
        t.moveTo(o, n.lowY),
        t.lineTo(o, a ? n.openY : n.closeY),
        t.stroke(),
        r
          ? t.fillRect(
              lt(o - i.barWidth / 2),
              lt(h.close >= h.open ? n.closeY : n.openY),
              i.barWidth,
              Math.max(Math.abs(n.closeY - n.openY), 1)
            )
          : t.strokeRect(
              lt(o - i.barWidth / 2),
              lt(h.close >= h.open ? n.closeY : n.openY),
              i.barWidth,
              Math.max(Math.abs(n.closeY - n.openY), 1)
            );
    }),
      t.restore();
  }
}
function mt(t, i, e) {
  (this.ctx = t), (this.props = i), (this.region = e), this.draw();
}
st ||
  (window.CanvasRenderingContext2D &&
    window.CanvasRenderingContext2D.prototype.lineTo &&
    (window.CanvasRenderingContext2D.prototype.dashedLine = function (
      t,
      i,
      e,
      s,
      r
    ) {
      r || (r = [5, 5]);
      var o = r.length;
      this.moveTo(t, i);
      for (
        var a = e - t,
          n = s - i,
          h = a ? n / a : NaN,
          c = Math.sqrt(a * a + n * n),
          p = 0,
          l = !0;
        c >= 0.1 && p < 1e4;

      ) {
        var d = r[p++ % o];
        if ((0 === d && (d = 0.001), d > c && (d = c), isNaN(h))) i += d;
        else {
          var u = Math.sqrt((d * d) / (1 + h * h));
          (t += u), (i += h * u);
        }
        this[l ? "lineTo" : "moveTo"](t, i), (c -= d), (l = !l);
      }
      this.moveTo(0, 0);
    })),
  (mt.prototype.draw = function () {
    var t,
      i,
      e,
      s,
      r,
      o,
      a,
      n,
      h = this.ctx,
      c = this.region,
      p = this.props,
      l = p.hline || {},
      d = p.vline || {},
      u = p.mline || {},
      g = l.posy,
      x = d.posx;
    if (
      (p.border &&
        rt(
          h,
          c.x,
          c.y,
          c.width,
          c.height,
          p.border.color,
          null,
          p.border.lineWidth
        ),
      g && g.length > 0)
    )
      g.forEach(function (t) {
        at(
          h,
          c.x,
          t.y,
          c.x + c.width,
          t.y,
          t.color || l.color,
          t.lineStyle || null,
          null,
          null,
          t.lineWidth || l.lineWidth
        );
      });
    else if (l.count)
      for (t = c.height / (l.count + 1), e = 0; e < l.count; )
        (n = t * ++e + c.y),
          (s = l.color),
          (r = l.linestyle),
          (o = l.lineWidth),
          (l.skipMiddle && e === (l.count + 1) / 2) ||
            (u.count &&
              e == (l.count + 1) / 2 &&
              ((s = u.color), (r = u.linestyle), (o = u.lineWidth)),
            at(h, c.x, n, c.x + c.width, n, s, r, null, null, o));
    if (x && x.length > 0)
      x.forEach(function (t) {
        at(
          h,
          c.x + t.x,
          c.y,
          c.x + t.x,
          c.y + c.height,
          d.color,
          d.linestyle,
          null,
          null,
          d.lineWidth
        );
      });
    else if (d.count)
      for (i = c.width / (d.count + 1), e = 0; e < d.count; )
        (a = i * ++e + c.x),
          at(
            h,
            a,
            c.y,
            a,
            c.y + c.height,
            d.color,
            d.linestyle,
            null,
            d.dashGapArray || null,
            d.lineWidth
          );
  });
var ft = (function (t) {
    r(e, _);
    var i = o(e);
    function e(t, s, r, o, n) {
      var h;
      return (
        a(this, e), ((h = i.call(this, t, s, r, o)).panhouWidth = n || 0), h
      );
    }
    return (
      n(e, [
        {
          key: "getX",
          value: function (t, i) {
            var e = i.props;
            if (this.type == P) {
              var s = this.region.padding,
                r = void 0 === s ? 0 : s;
              return e.textAlign == E
                ? this.region.x + r
                : e.textAlign == N
                ? this.region.x + this.region.width - r
                : this.region.x;
            }
            if (this.type == w) {
              var o =
                this.labels.length < 2
                  ? 0
                  : this.region.width / (this.labels.length - 1);
              if (3 === this.labels.length && this.panhouWidth && 1 === t)
                return o * t + this.region.x - this.panhouWidth / 2;
              if (4 === this.labels.length) {
                if ("3:00/9:15" === i.text)
                  return this.region.x + (this.region.width / 962) * 584;
                if ("12:00/13:00" === i.text)
                  return this.region.x + (this.region.width / 962) * 750;
              }
              return "5:15/9:00" === i.text
                ? this.region.x + (this.region.width / 1187) * 735
                : "7:45/8:30" === i.text
                ? this.region.x + (this.region.width / 982) * 735
                : o * t + this.region.x;
            }
          },
        },
        {
          key: "getY",
          value: function (t, i) {
            var e = i.props,
              s = this.region.padding,
              r = void 0 === s ? 0 : s;
            return this.type === w
              ? e.baseLine == B
                ? this.region.y + r
                : e.baseLine == F
                ? this.region.y + this.region.height - r
                : this.region.y + this.region.height / 2 + r
              : (this.region.height / (this.labels.length - 1)) * t +
                  this.region.y +
                  (t ? -r : r);
          },
        },
      ]),
      e
    );
  })(),
  vt = (function () {
    function t(i, e) {
      a(this, t), (this.ctx = i);
      var s = e.devicePixelRatio,
        r = i.getContextCanvas(),
        o = (e.paddingTop || 0) * s;
      /kline/.test(e.layout)
        ? ((o = 16 * s), (o = e.hidePaddingTop ? 0 : 16 * s))
        : "mins" === e.type &&
          (e.isHistoryMins ? (o = 0) : e.showIOPV && (o = 15 * s)),
        (this.props = m(
          m(
            {},
            {
              padding: {
                top: o,
                bottom: (e.paddingBottom || 0) * s,
                left: 0,
                right: 0,
              },
              yAxis: { width: 50 * s },
              xAxis: { height: 15 * s },
              indicatorPadding: { top: 0, bottom: 0, left: 0, right: 0 },
              indicatorProportion: [0.219, 0.31, 0.402, 0.473],
            }
          ),
          e
        )),
        (this.height = r ? r.height : e.canvasHeight * s),
        (this.width = r ? r.width : e.canvasWidth * s),
        (this.indicatorCount =
          "kline-portrait" === e.layout ? e.setting.indicatorCount : 1),
        (this.indicatorHeight = e.hideIndicator
          ? 0
          : this.height *
            this.props.indicatorProportion[this.indicatorCount - 1]),
        (this.chartHeight =
          this.height -
          this.props.padding.top -
          this.props.padding.bottom -
          this.indicatorHeight -
          this.props.xAxis.height),
        (this.chartWidth =
          this.width -
          this.props.padding.left -
          this.props.padding.right -
          this.props.yAxis.width),
        (this.xAxis = {}),
        (this.chart = {}),
        (this.indicator = {}),
        (this.chipRegion = {
          width:
            "kline-portrait" === e.layout
              ? 0.32 * this.width
              : Math.max(270, 0.184 * this.width),
          height: this.height,
        }),
        this.calculate();
    }
    return (
      n(t, [
        {
          key: "getWidth",
          value: function () {
            return this.width;
          },
        },
        {
          key: "getHeight",
          value: function () {
            return this.height;
          },
        },
        {
          key: "getChart",
          value: function () {
            return this.chart;
          },
        },
        {
          key: "getChartYAxis",
          value: function () {
            return this.chart.yAxis;
          },
        },
        {
          key: "getXAxis",
          value: function () {
            return this.xAxis;
          },
        },
        {
          key: "getIndicator",
          value: function () {
            return this.indicator;
          },
        },
        {
          key: "getIndicatorYAxis",
          value: function () {
            return this.indicator.yAxis;
          },
        },
        {
          key: "getChipChart",
          value: function () {
            return {
              width: this.width,
              height: this.height,
              chart: this.chart,
              chipRegion: this.chipRegion,
            };
          },
        },
      ]),
      t
    );
  })(),
  yt = (function (t) {
    r(e, vt);
    var i = o(e);
    function e(t, s) {
      var r;
      return a(this, e), (r = i.call(this, t, s)).calculate(), r;
    }
    return (
      n(e, [
        {
          key: "calculate",
          value: function () {
            var t = this.props.padding,
              i = t.top,
              e = t.left,
              s = t.right,
              r = t.bottom,
              o = this.props.yAxis.width,
              a = this.props.xAxis.height,
              n = this.props.yAxisRight && this.props.yAxisRight.textAlignRight;
            (this.chartWidth =
              this.width - e - s - (this.props.hideIndicator ? 0 : 2 * o)),
              (this.chart = {
                x: e + (this.props.hideIndicator ? 0 : o),
                y: i,
                width: this.chartWidth,
                height: this.chartHeight,
                yAxisLeft: {
                  x: e,
                  y: i,
                  width: Math.max(0, o - 10),
                  height: this.chartHeight,
                  props: { textAlign: n ? E : N },
                },
                yAxisRight: {
                  x:
                    e +
                    10 +
                    this.chartWidth +
                    (this.props.hideIndicator ? 0 : o),
                  y: i,
                  width: o,
                  height: this.chartHeight,
                  props: { textAlign: n ? N : E },
                  padding:
                    this.props.yAxisRight && this.props.yAxisRight.padding,
                },
              }),
              (this.auctionWidth = this.props.showAuction
                ? Math.min(
                    75 * this.props.devicePixelRatio,
                    0.25 * this.chartWidth
                  )
                : 0),
              (this.mainChart = {
                x: e + this.auctionWidth + (this.props.hideIndicator ? 0 : o),
                y: i,
                width: this.chartWidth - this.auctionWidth,
                height: this.chartHeight,
                padding: this.props.padding,
              }),
              (this.auctionChart = {
                x: e + (this.props.hideIndicator ? 0 : o),
                y: i,
                width: this.auctionWidth,
                height: this.chartHeight,
              }),
              (this.xAxis = {
                x: e + (this.props.hideIndicator ? 0 : o) + this.auctionWidth,
                y: i + this.chartHeight + r,
                width: this.chartWidth - this.auctionWidth,
                height: a,
              });
            var h = 14 * this.props.devicePixelRatio;
            (this.mainIndicator = {
              x: e + (this.props.hideIndicator ? 0 : o) + this.auctionWidth,
              y: this.height - this.indicatorHeight + h,
              width: this.chartWidth - this.auctionWidth,
              height: this.indicatorHeight - h,
              yAxis: {
                x: e,
                y: this.height - this.indicatorHeight + h,
                width: Math.max(0, o - 10),
                height: this.indicatorHeight - h,
                props: { textAlign: N, baseLine: [B, F] },
              },
              bar: {
                x: e + (this.props.hideIndicator ? 0 : o) + this.auctionWidth,
                y: this.height - this.indicatorHeight,
                width: this.chartWidth - this.auctionWidth,
                height: h,
                buttonWidth: 45 * this.props.devicePixelRatio,
              },
            }),
              (this.auctionIndicator = {
                x: e + (this.props.hideIndicator ? 0 : o),
                y: this.height - this.indicatorHeight + h,
                width: this.auctionWidth,
                height: this.indicatorHeight - h,
              });
          },
        },
      ]),
      e
    );
  })(),
  wt = (function (t) {
    r(e, vt);
    var i = o(e);
    function e(t, s) {
      var r;
      return a(this, e), (r = i.call(this, t, s)).calculate(), r;
    }
    return (
      n(e, [
        {
          key: "calculate",
          value: function () {
            var t = this.props.padding.top,
              i = this.props.padding.left,
              e = this.props.padding.bottom,
              s = this.props.xAxis.height,
              r = this.props.yAxis.width;
            (this.chartWidth =
              this.width - this.props.padding.left - this.props.padding.right),
              (this.chart = {
                x: i,
                y: t,
                top: t,
                width: this.chartWidth,
                height: this.chartHeight,
                yAxisLeft: {
                  x: i,
                  y: t,
                  width: r,
                  height: this.chartHeight,
                  props: { textAlign: E },
                },
                yAxisRight: {
                  x: i + this.chartWidth - r,
                  y: t,
                  width: r,
                  height: this.chartHeight,
                  props: { textAlign: N },
                },
              }),
              (this.auctionWidth = this.props.showAuction
                ? Math.min(
                    75 * this.props.devicePixelRatio,
                    0.25 * this.chartWidth
                  )
                : 0),
              (this.mainChart = {
                x: i + this.auctionWidth,
                y: t,
                width: this.chartWidth - this.auctionWidth,
                height: this.chartHeight,
                padding: this.props.padding,
              }),
              (this.auctionChart = {
                x: i,
                y: t,
                width: this.auctionWidth,
                height: this.chartHeight,
              }),
              (this.xAxis = {
                x: i + this.auctionWidth,
                y: t + this.chartHeight + e,
                width: this.chartWidth - this.auctionWidth,
                height: s,
              });
            var o =
                this.props.indicatorBarHeight ||
                14 * this.props.devicePixelRatio,
              a = 45 * this.props.devicePixelRatio;
            (this.mainIndicator = {
              x: i + this.auctionWidth,
              y: this.height - this.indicatorHeight + o,
              width: this.chartWidth - this.auctionWidth,
              height: this.indicatorHeight - o,
              yAxis: {
                x: this.width - 45,
                y: this.height - this.indicatorHeight + o,
                width: 45,
                height: this.indicatorHeight - o,
              },
              bar: {
                x: i + this.auctionWidth,
                y: this.height - this.indicatorHeight,
                width: this.chartWidth - this.auctionWidth,
                buttonWidth: a,
                height: o,
              },
            }),
              (this.auctionIndicator = {
                x: i,
                y: this.height - this.indicatorHeight + o,
                width: this.auctionWidth,
                height: this.indicatorHeight - o,
              });
          },
        },
      ]),
      e
    );
  })(),
  Pt = (function (t) {
    r(e, vt);
    var i = o(e);
    function e(t, s) {
      return a(this, e), i.call(this, t, s);
    }
    return (
      n(e, [
        {
          key: "calculate",
          value: function () {
            var t = this.props.padding,
              i = t.top,
              e = t.left,
              s = t.right,
              r = this.props.yAxis.width,
              o = this.props.xAxis.height;
            this.props.hideIndicator && (this.chartWidth = this.width - e - s),
              (this.chartAndChipWidth = this.chartWidth),
              this.props.isSupportChip &&
                this.props.isShowChip &&
                (this.chartWidth -= this.chipRegion.width),
              (this.chart = {
                x: e + (this.props.hideIndicator ? 0 : r),
                y: i,
                width: this.chartWidth,
                height: this.chartHeight,
                yAxis: { x: e, y: i, width: r - 10, height: this.chartHeight },
              }),
              (this.xAxis = {
                x: e + (this.props.hideIndicator ? 0 : r),
                y: i + this.chartHeight,
                width: this.chartWidth,
                height: o,
              });
            var a =
                this.props.indicatorBarHeight ||
                14 * this.props.devicePixelRatio,
              n = this.props.indicatorPadding.top;
            this.indicator = {
              x: e + (this.props.hideIndicator ? 0 : r),
              y: this.height - this.indicatorHeight + a + n,
              width: this.chartWidth,
              height: this.indicatorHeight - a - n,
              yAxis: {
                x: e,
                y: this.height - this.indicatorHeight + a,
                width: r - 10,
                height: this.indicatorHeight - a - n,
              },
              bar: {
                x: e + (this.props.hideIndicator ? 0 : r),
                y: this.height - this.indicatorHeight + n,
                width: this.chartWidth,
                height: a,
                buttonWidth: 45 * this.props.devicePixelRatio,
              },
            };
          },
        },
      ]),
      e
    );
  })(),
  bt = (function (t) {
    r(e, vt);
    var i = o(e);
    function e(t, s) {
      var r;
      return a(this, e), (r = i.call(this, t, s)).calculate(), r;
    }
    return (
      n(e, [
        {
          key: "calculate",
          value: function () {
            var t = this.props.padding,
              i = t.top,
              e = t.left,
              s = t.bottom,
              r = t.right,
              o = this.props.xAxis.height;
            (this.chartWidth = this.width - e - r),
              (this.chartAndChipWidth = this.chartWidth),
              this.props.isSupportChip &&
                this.props.isShowChip &&
                (this.chartWidth -= this.chipRegion.width),
              (this.chart = {
                x: e,
                y: i,
                width: this.chartWidth,
                height: this.chartHeight,
              }),
              (this.xAxis = {
                x: e,
                y: i + this.chartHeight + s,
                width: this.chartWidth,
                height:
                  o +
                  (this.props.isWzqMiniProgram ? 2 : 0) *
                    this.props.devicePixelRatio,
              });
            for (
              var a =
                  this.props.indicatorBarHeight ||
                  14 * this.props.devicePixelRatio,
                n = 45 * this.props.devicePixelRatio,
                h = this.props.setting.indicatorCount,
                c =
                  (this.indicatorHeight -
                    this.props.indicatorPadding.top -
                    this.props.indicatorPadding.bottom) /
                  h,
                p = 1;
              p <= h;
              p++
            ) {
              var l =
                  this.height -
                  this.indicatorHeight +
                  c * (p - 1) +
                  this.props.indicatorPadding.top,
                d =
                  1 === p
                    ? "indicator"
                    : "".concat(
                        ["second", "third", "fourth"][p - 2],
                        "Indicator"
                      ),
                u =
                  this.chartWidth -
                  this.props.indicatorPadding.left -
                  this.props.indicatorPadding.right;
              this[d] = {
                x: e - this.props.indicatorPadding.left,
                y: l + a,
                width: u,
                height: c - a - (this.props.indicatorBarHeight ? 2 : 0),
                yAxis: {
                  x: u - 45,
                  y: l + a,
                  width: 45,
                  height: c - a - (this.props.indicatorBarHeight ? 2 : 0),
                },
                bar: { x: e, y: l, width: u, buttonWidth: n, height: a },
              };
            }
            var g = 9 * this.props.devicePixelRatio,
              x = 6 * this.props.devicePixelRatio;
            this.props.maType.filter(function (t) {
              return !!t;
            }).length > 5 &&
              (this.foldArrow = {
                y: i / 2 - x / 2,
                buttonWidth: g,
                height: x,
              });
          },
        },
      ]),
      e
    );
  })();
function Mt(t, i, e) {
  switch (i) {
    case "mins-landscape":
      return new yt(t, e);
    case "mins-portrait":
      return new wt(t, e);
    case "kline-landscape":
      return new Pt(t, e);
    case "kline-portrait":
      return new bt(t, e);
  }
}
var Rt = (function () {
    function t(i) {
      a(this, t),
        (this.ctx = i.ctx),
        (this.region = i.region),
        (this.drawCallback = i.drawCallback),
        (this.data = i.data),
        (this.count = i.count),
        i.count || (this.count = this.data.items.length),
        this.draw();
    }
    return (
      n(t, [
        {
          key: "start",
          value: function () {
            void 0 === this.data.middle &&
              (this.data.middle = (this.data.max + this.data.min) / 2),
              (this.data.diff = Math.max(
                Math.abs(this.data.max - this.data.middle),
                Math.abs(this.data.min - this.data.middle)
              )),
              this.ctx.save(),
              this.ctx.translate(
                this.region.x,
                this.region.y + this.region.height / 2
              );
          },
        },
        {
          key: "draw",
          value: function () {
            var t = this,
              i = this.data.items || [],
              e = i.length;
            this.start();
            for (var s = 0; s < e; s++)
              this.drawCallback({
                ctx: this.ctx,
                index: s,
                currItem: i[s],
                getX: function (i) {
                  return (t.region.width / t.count) * i;
                },
                getY: function (i) {
                  return 0 === t.data.diff
                    ? NaN
                    : (-(i - t.data.middle) / t.data.diff) *
                        (t.region.height / 2);
                },
                length: e,
              });
            this.end();
          },
        },
        {
          key: "end",
          value: function () {
            this.ctx.restore();
          },
        },
      ]),
      t
    );
  })(),
  Tt = function (t) {
    var i = 1 * t;
    return {
      border: i,
      vline: i,
      hline: i,
      mline: i,
      ma: i,
      maxmin: i,
      indicator: i,
      ochl: i,
      crossLine: 2 * t,
      minsPriceLine: i,
      minsAvgLine: i,
    };
  },
  Ct = function (t) {
    var i =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Arial";
    return { font: "400 ".concat(10 * t, "px ").concat(i), fontType: i };
  };
function kt(t, i, e, s, r) {
  t && t.clearRect(i, e, s, r);
}
function At(t, i, e, s, r, o) {
  return i > t ? s : i < t ? r : i > e ? s : i < e ? r : o;
}
function St(t, i) {
  var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (e) return { x: i.x, y: i.y };
  var s = t.getBoundingClientRect();
  return { x: (i.clientX || i.x) - s.left, y: (i.clientY || i.y) - s.top };
}
var Lt = y.tip,
  It = y.signal,
  Dt = y.remindBell,
  Wt = y.showArrow,
  Bt = y.foldArrow,
  Ft = y.arrowBlue,
  Et = y.arrowOrange,
  Nt = y.arrowPurple,
  Yt = y.arrowBlack,
  _t = y.arrowWhite,
  Ot = y.buyDown,
  Ht = y.buyUp,
  jt = y.sellDown,
  Xt = y.sellUp,
  zt = y.minTradeDown,
  Ut = y.minTradeUp,
  qt = y.klineTradeDown,
  Vt = y.klineTradeUp,
  Gt = y.mpBuyDown,
  Kt = y.mpBuyUp,
  Zt = y.mpSellDown,
  $t = y.mpSellUp,
  Jt = y.mpMinTradeDown,
  Qt = y.mpMinTradeUp,
  ti = y.mpKlineTradeDown,
  ii = y.mpKlineTradeUp,
  ei = new ((function () {
    function t() {
      a(this, t),
        (this.loadImages = {}),
        (this.isMini = T()),
        (this.preloadImages = {
          TIP: Lt,
          SIGNAL: It,
          REMIND_BELL: Dt,
          SHOW_ARROW: Wt,
          FOLD_ARROW: Bt,
          ARROW_BLUE: Ft,
          ARROW_ORANGE: Et,
          ARROW_PURPLE: Nt,
          ARROW_BLACK: Yt,
          ARROW_WHITE: _t,
          BUY_DOWN: Ot,
          BUY_UP: Ht,
          SELL_DOWN: jt,
          SELL_UP: Xt,
          MIN_TRADE_DOWN: zt,
          MIN_TRADE_UP: Ut,
          KLINE_TRADE_DOWN: qt,
          KLINE_TRADE_UP: Vt,
          MP_BUY_DOWN: Gt,
          MP_BUY_UP: Kt,
          MP_SELL_DOWN: Zt,
          MP_SELL_UP: $t,
          MP_MIN_TRADE_DOWN: Jt,
          MP_MIN_TRADE_UP: Qt,
          MP_KLINE_TRADE_DOWN: ti,
          MP_KLINE_TRADE_UP: ii,
        }),
        this.init();
    }
    return (
      n(t, [
        {
          key: "init",
          value: function () {
            var t = this;
            this.isMini ||
              Object.keys(this.preloadImages).map(function (i) {
                t.loadImages[i] || (t.loadImages[i] = A(t.preloadImages[i]));
              });
          },
        },
        {
          key: "initForMP",
          value: function (t) {
            var i = this;
            t &&
              Object.keys(this.preloadImages).map(function (e) {
                i.loadImages[e] || (i.loadImages[e] = A(i.preloadImages[e], t));
              });
          },
        },
        {
          key: "getImg",
          value: function (t) {
            return t ? this.loadImages[t] : null;
          },
        },
      ]),
      t
    );
  })())(),
  si = (function () {
    function t(i, e, s) {
      a(this, t),
        (this.ctx = i),
        (this.region = e),
        (this.prop = s),
        (this.moveUnit = s.spaceWidth + s.barWidth),
        (this.showCrossLineValue = s.showCrossLineValue),
        (this.count = s.count),
        (this.font = "400 "
          .concat(10 * s.devicePixelRatio, "px ")
          .concat(s.fontType)),
        (this.tipsColor = s.colorProp.tip),
        (this.timeBarCanClick =
          "day" === this.prop.type &&
          "kline-portrait" === this.prop.layout &&
          this.prop.market <= 2 &&
          this.prop.enableMinsHistory);
    }
    return (
      n(t, [
        {
          key: "changeCoordsForMins",
          value: function (t, i) {
            var e = St(this.ctx.ctx.canvas, t, this.prop.isMiniPorgram),
              s = e.x,
              r = e.y;
            if (
              ((s *= this.prop.devicePixelRatio),
              (r *= this.prop.devicePixelRatio),
              this.prop.showAuction &&
                s - this.region.x < this.region.auctionWidth)
            ) {
              var o = Math.floor(
                (s - this.region.x) / this.prop.auctionItemWidth
              );
              return (
                (o = Math.min(Math.max(o, 0), this.prop.auctionCount - 1)),
                {
                  x: (s = this.region.x + this.prop.auctionItemWidth * o),
                  y: (r = Math.min(
                    Math.max(r, this.region.y),
                    this.region.y +
                      (this.prop.hideIndicator
                        ? this.region.mainChart.height
                        : this.region.height)
                  )),
                  index: o,
                  auction: !0,
                }
              );
            }
            var a = Math.floor(
              (s - this.region.x - this.region.auctionWidth) / this.moveUnit
            );
            return (
              (a = Math.min(Math.max(a, 0), this.count - 1, i - 1)),
              {
                x: (s =
                  this.region.x + this.moveUnit * a + this.region.auctionWidth),
                y: (r = Math.min(
                  Math.max(r, this.region.y),
                  this.region.y +
                    (this.prop.hideIndicator
                      ? this.region.mainChart.height
                      : this.region.height)
                )),
                index: a,
                auction: !1,
              }
            );
          },
        },
        {
          key: "changeCoords",
          value: function (t) {
            var i,
              e = St(this.ctx.ctx.canvas, t, this.prop.isMiniPorgram),
              s = e.x,
              r = e.y,
              o = this.prop.devicePixelRatio;
            return (
              (s *= o),
              (r *= o),
              (i = Math.round((s - this.region.x) / this.moveUnit)) >=
                this.count && (i = this.count - 1),
              i < 0 && (i = 0),
              (10 *
                (s = this.region.x + this.moveUnit * i + 0.5 * this.moveUnit)) %
                10 ==
                0 && (s += 0.5),
              r > this.region.y + this.region.height &&
                (r = this.region.y + this.region.height),
              r < this.region.y && (r = this.region.y),
              { x: s, y: r, index: i }
            );
          },
        },
        {
          key: "getIndex",
          value: function (t) {
            return this.changeCoords(t).index;
          },
        },
        {
          key: "changeCount",
          value: function (t) {
            (this.count = t.count), (this.moveUnit = t.spaceWidth + t.barWidth);
          },
        },
        {
          key: "draw",
          value: function (t, i) {
            var e,
              s,
              r,
              o,
              a = this.region,
              n = a.x,
              h = a.y,
              c = a.width,
              p = a.height,
              l = a.mainChart,
              d = a.padding,
              u = this.ctx,
              g = "dark" === (null == (e = this.prop) ? void 0 : e.skin),
              x = (null == (s = this.prop) ? void 0 : s.devicePixelRatio) || 1;
            if (
              this.prop &&
              (this.prop.isWzqMiniProgram &&
              this.prop.isSupportChip &&
              this.prop.isShowChip &&
              i.isTouchIndicator
                ? dt(
                    this.ctx,
                    [
                      { x: t.x, y: h - (this.prop.hideIndicator ? d.top : 0) },
                      {
                        x: t.x,
                        y:
                          h +
                          (this.prop.hideIndicator ? l.height + d.bottom : p),
                      },
                      { x: n, y: t.y },
                      { x: n + c - this.region.chipWidth, y: t.y },
                    ],
                    null == (r = this.prop.colorProp) ? void 0 : r.crossLine,
                    2
                  )
                : dt(
                    this.ctx,
                    [
                      { x: t.x, y: h - (this.prop.hideIndicator ? d.top : 0) },
                      {
                        x: t.x,
                        y:
                          h +
                          (this.prop.hideIndicator ? l.height + d.bottom : p),
                      },
                      { x: n, y: t.y },
                      { x: n + c, y: t.y },
                    ],
                    null == (o = this.prop.colorProp) ? void 0 : o.crossLine,
                    2
                  ),
              this.showCrossLineValue && i)
            ) {
              var m = this.prop.setting || {},
                f = m.crossLabel,
                v = void 0 === f ? {} : f,
                y = "",
                w = "";
              this.prop.isWzqMiniProgram &&
              this.prop.isSupportChip &&
              this.prop.isShowChip
                ? ((y = !v.hideXlabel && (i.leftval || i.rightval)),
                  (w = i.crossProfitPercent))
                : ((y = v.hideXlabel ? "" : i.leftval),
                  (w = v.hideXlabel ? "" : i.rightval));
              var P = v.hideYlabel ? "" : i.toplval,
                b = v.hideYlabel ? "" : i.bottomval,
                M = ""
                  .concat(10 * x, "px ")
                  .concat(this.prop.textProp.fontType || "Arial"),
                R = 4 * x,
                T = 3.5 * x,
                C = 7 * x,
                k = 4 * x,
                A = 2 * x,
                S = 0.5 * x,
                L =
                  this.timeBarCanClick &&
                  +i.time.replace(/-/g, "") >= this.prop.boundaryMinsDate;
              if (y) {
                var B = D(u, y, this),
                  F = B + 2 * k,
                  N = 15 * x,
                  _ = this.region.x + (this.prop.isWzqMiniProgram ? 1 : 0),
                  O = Math.max(0, t.y - N / 2);
                O + N > this.region.y + this.region.height &&
                  (O = this.region.y + this.region.height - N);
                var H = this.prop.isWzqMiniProgram ? "#262e40" : "#98A0B3",
                  j = this.prop.isWzqMiniProgram ? "#f0f1f5" : "#475166";
                ot(u, _, O, F, N, A, g ? j : H, g ? "#12161F" : "white"),
                  I(
                    u,
                    y,
                    _ + F / 2,
                    Math.ceil(O + N / 2) + S,
                    {
                      color: g ? "#F0F1F5" : "#262E40",
                      font: M,
                      textAlign: Y,
                      baseLine: W,
                    },
                    B
                  );
              }
              if (w) {
                var X = D(u, w, this),
                  z = X + 2 * k,
                  U = 15 * x,
                  q =
                    this.region.x +
                    this.region.width -
                    z -
                    (this.prop.isWzqMiniProgram ? 1 : 0),
                  V = t.y - U / 2;
                V < this.region.y
                  ? (V = this.region.y)
                  : V + U > this.region.y + this.region.height &&
                    (V = this.region.y + this.region.height - U);
                var G = this.prop.isWzqMiniProgram ? "#262e40" : "#98A0B3",
                  K = this.prop.isWzqMiniProgram ? "#f0f1f5" : "#475166";
                ot(u, q, V, z, U, A, g ? K : G, g ? "#12161F" : "white"),
                  I(
                    u,
                    w,
                    q + z / 2,
                    Math.ceil(V + U / 2) + S,
                    {
                      color: g ? "#F0F1F5" : "#262E40",
                      font: M,
                      textAlign: Y,
                      baseLine: W,
                    },
                    X
                  );
              }
              if (P) {
                var Z = D(u, (P = L ? "".concat(P, " 分时") : P), this),
                  $ = (L ? Z + R + T : Z) + 2 * k,
                  J = this.region.y,
                  Q =
                    this.region.x +
                    this.region.width -
                    $ -
                    (this.prop.isMiniPorgram ? 2 * k : 0),
                  tt = 0;
                ot(
                  u,
                  Q,
                  tt,
                  $,
                  J,
                  A,
                  g ? "#475166" : "rgba(48, 119, 236, 0.3)",
                  g ? "#12161F" : "#F1F7FF"
                );
                var it = Q + k;
                if (
                  (I(
                    u,
                    P,
                    it,
                    Math.ceil(tt + J / 2) + S,
                    { color: "#3077EC", font: M, textAlign: E, baseLine: W },
                    Z
                  ),
                  L)
                ) {
                  var et = it + Z + R,
                    st = tt + (J - C) / 2;
                  this.ctx.drawImage(ei.getImg("ARROW_BLUE"), et, st, T, C),
                    (this.timeBarTopRegion = {
                      x: Q,
                      y: tt,
                      width: $,
                      height: J,
                    }),
                    (this.timeBarData = i);
                } else
                  (this.timeBarTopRegion = null), (this.timeBarData = null);
              }
              if (b) {
                var rt = D(u, (b = L ? "查看 ".concat(b, " 分时") : b), this),
                  at = (L ? rt + R + T : rt) + 2 * k,
                  nt = this.region.xAxis.height,
                  ht = t.x - at / 2;
                ht < 0
                  ? (ht = 0)
                  : ht + at > this.region.x + this.region.width &&
                    (ht = this.region.x + this.region.width - at),
                  "kline-portrait" === this.prop.layout &&
                    this.prop.isSupportChip &&
                    this.prop.isShowChip &&
                    (ht = Math.min(
                      ht,
                      this.region.width - this.region.chipWidth - at
                    ));
                var ct = this.region.xAxis.y;
                L
                  ? ot(u, ht, ct, at, nt, A, "#3077EC", "#3077EC")
                  : ot(
                      u,
                      ht,
                      ct,
                      at,
                      nt,
                      A,
                      g ? "#475166" : "#98A0B3",
                      g ? "#12161F" : "white"
                    );
                var pt = ht + k;
                if (
                  (I(
                    u,
                    b,
                    pt,
                    Math.ceil(ct + nt / 2) + S,
                    {
                      color: g ? "#F0F1F5" : L ? "white" : "#262E40",
                      font: M,
                      textAlign: E,
                      baseLine: W,
                    },
                    rt
                  ),
                  L)
                ) {
                  var lt = pt + rt + R,
                    ut = ct + (nt - C) / 2;
                  this.ctx.drawImage(ei.getImg("ARROW_WHITE"), lt, ut, T, C),
                    (this.timeBarBottomRegion = {
                      x: ht,
                      y: ct,
                      width: at,
                      height: nt,
                    }),
                    (this.timeBarData = i);
                } else
                  (this.timeBarBottomRegion = null), (this.timeBarData = null);
              }
            }
          },
        },
        {
          key: "isTapTimeBarRegion",
          value: function (t) {
            if (this.timeBarCanClick) {
              var i = St(this.ctx.ctx.canvas, t, this.prop.isMiniPorgram);
              (i.x = i.x * this.prop.devicePixelRatio),
                (i.y = i.y * this.prop.devicePixelRatio);
              var e = this.timeBarTopRegion,
                s = this.timeBarBottomRegion,
                r =
                  e &&
                  i.x >= e.x &&
                  i.x <= e.x + e.width &&
                  i.y >= e.y &&
                  i.y <= e.y + e.height,
                o = 10 * this.prop.devicePixelRatio,
                a = s && {
                  x: s.x - o,
                  y: s.y - o,
                  width: s.width + 2 * o,
                  height: s.height + 2 * o,
                },
                n =
                  a &&
                  i.x >= a.x &&
                  i.x <= a.x + a.width &&
                  i.y >= a.y &&
                  i.y <= a.y + a.height;
              return r
                ? ((this.timeBarData.tapRegion = "top"), !0)
                : !!n && ((this.timeBarData.tapRegion = "bottom"), !0);
            }
          },
        },
      ]),
      t
    );
  })();
function ri(t) {
  var i = t.layout,
    e = t.isHistoryMins,
    s = t.setting,
    r = void 0 === s ? {} : s,
    o = r.chartRatio < 100,
    a = r.vlineCount,
    n = void 0 === a ? 3 : a,
    h = r.hlineCount,
    c = void 0 === h ? 5 : h,
    p = r.yAixsCount,
    l = void 0 === p ? 7 : p;
  switch (i) {
    case "mins-portrait":
      return {
        yAixsCount: o || e ? 5 : l,
        hlineCount: o || e ? 3 : c,
        vlineCount: n,
      };
    case "mins-landscape":
      return { yAixsCount: l, hlineCount: c, vlineCount: n };
    case "kline-portrait":
      return { yAixsCount: o ? 5 : l, hlineCount: o ? 3 : c };
    case "kline-landscape":
      return { yAixsCount: l, hlineCount: c };
  }
}
var oi,
  ai,
  ni = (function () {
    function t(i, e, s, r, o, n) {
      a(this, t),
        Array.isArray(i) && i.length > 1
          ? ((this.ctx = i[0]), (this.ctxCross = i[1]))
          : ((this.ctx = i), (this.ctxCross = i)),
        (this.data = e),
        (this.props = s),
        (this.region = r),
        (this.name = o),
        (this.max = e.maxMin && e.maxMin[o] ? e.maxMin[o].max : 0),
        (this.min = e.maxMin && e.maxMin[o] ? e.maxMin[o].min : 0),
        (this.tip = n),
        (this.notSupport = !1),
        (this.isKline = /kline/.test(s.layout));
    }
    return (
      n(t, [
        {
          key: "draw",
          value: function () {
            this.props.isSplitRendCross ||
              (this.props.hideGrid ? this.drawBottomLine() : this.drawGrid(),
              this.drawLinearShapes(),
              this.props.hideScale || this.drawScale()),
              "kline-landscape" === this.props.layout &&
                this.addStatusData() &&
                (this.props.isSplitRendCross || this.drawSpecialPoints(),
                this.drawSpecialTag()),
              this.drawBar();
          },
        },
        {
          key: "addStatusData",
          value: function () {
            return !1;
          },
        },
        {
          key: "drawSpecialPoints",
          value: function () {
            for (var t = 0; t < this.data.items.length; t++) {
              var i =
                this.data.items[t][
                  "".concat(this.props.currIndicator, "Status")
                ];
              if (i) {
                var e = "";
                "high" === i
                  ? (e =
                      "wr" === this.props.currIndicator
                        ? this.props.colorProp.rise
                        : this.props.colorProp.drop)
                  : "low" === i &&
                    (e =
                      "wr" === this.props.currIndicator
                        ? this.props.colorProp.drop
                        : this.props.colorProp.rise),
                  ht(
                    this.ctx,
                    this.region.x +
                      (this.region.width / this.props.count) * t +
                      this.props.itemWidth / 2,
                    this.region.y + 2,
                    4,
                    e,
                    e
                  );
              }
            }
          },
        },
        {
          key: "drawSpecialTag",
          value: function () {
            if (this.props.index) {
              var t =
                this.data.items[this.props.index][
                  "".concat(this.props.currIndicator, "Status")
                ];
              if (t) {
                var i = "",
                  e = this.props.currIndicator.toUpperCase();
                "high" === t
                  ? ((i =
                      "wr" === this.props.currIndicator
                        ? this.props.colorProp.rise
                        : this.props.colorProp.drop),
                    (e +=
                      "macd" === this.props.currIndicator
                        ? "死叉"
                        : "指标高位"))
                  : "low" === t &&
                    ((i =
                      "wr" === this.props.currIndicator
                        ? this.props.colorProp.drop
                        : this.props.colorProp.rise),
                    (e +=
                      "macd" === this.props.currIndicator
                        ? "金叉"
                        : "指标低位"));
                var s = {
                    color: "white",
                    font: "400 "
                      .concat(10 * this.props.devicePixelRatio, "px ")
                      .concat(this.props.textProp.fontType),
                    baseLine: W,
                    textAlign: Y,
                  },
                  r =
                    this.region.x +
                    (this.region.width / this.props.count) * this.props.index +
                    this.props.itemWidth / 2,
                  o = this.region.y + 30,
                  a = D(this.ctx, e, s) + 20;
                r + a / 2 > this.region.x + this.region.width &&
                  (r = this.region.x + this.region.width - a / 2),
                  rt(this.ctxCross, r - a / 2, o, a, 40, i, i),
                  I(this.ctxCross, e, r, o + 20, s, a - 20);
              }
            }
          },
        },
        {
          key: "drawBar",
          value: function () {
            var t = this.region.bar.x,
              i = this.region.bar.y + this.region.bar.height / 2,
              e = W,
              s = this.props.isWzqMiniProgram ? this.props.devicePixelRatio : 2;
            at(
              this.ctx,
              t,
              this.region.bar.y,
              t + this.region.bar.width,
              this.region.bar.y,
              this.props.colorProp.hline,
              null,
              null,
              null,
              s
            );
            var r;
            r =
              "volume" === this.name
                ? "成交量"
                : "cje" === this.name
                ? "成交额"
                : "rally" === this.name
                ? "反弹指数"
                : this.name.toUpperCase();
            var o = {
              color: this.props.colorProp.tip,
              font: "400 "
                .concat(10 * this.props.devicePixelRatio, "px ")
                .concat(this.props.textProp.fontType),
              baseLine: e,
            };
            if (
              void 0 !== this.props.index ||
              (!/portrait/.test(this.props.layout) &&
                !this.props.isWzqMiniProgram) ||
              this.props.hideIndicator ||
              "fmins" === this.props.type ||
              this.props.isHistoryMins ||
              this.props.disableInteract ||
              this.props.disableSecondaryIndicator
            ) {
              var a = D(this.ctx, r, o);
              this.props.isSplitRendCross &&
                kt(
                  this.ctx,
                  this.region.bar.x,
                  this.region.bar.y,
                  this.region.bar.width,
                  this.region.bar.height - 3 * this.props.devicePixelRatio
                ),
                I(this.ctx, r, t, i, o, a),
                (t += a),
                this.notSupport || this.drawCurrent(t, i, e);
            } else {
              var n = this.region.bar,
                h = n.x,
                c = n.y,
                p = n.height,
                l =
                  "rally" === this.name
                    ? 55 * this.props.devicePixelRatio
                    : this.region.bar.buttonWidth;
              rt(
                this.ctx,
                h,
                c,
                l,
                p - 1,
                this.props.colorProp.button.bg,
                this.props.colorProp.button.bg
              ),
                I(this.ctx, r, h + 0.4 * l, c + p / 2, {
                  color: this.props.colorProp.button.text,
                  font: "400 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                });
              var d = h + 0.85 * l,
                u = c + p / 2,
                g = 2 * this.props.devicePixelRatio,
                x = 3 * this.props.devicePixelRatio;
              ct(
                this.ctx,
                d - x,
                u - g,
                d + x,
                u - g,
                d,
                u + g,
                this.props.colorProp.button.tri,
                this.props.colorProp.button.tri
              ),
                this.notSupport || this.drawCurrent(h + l, i, e);
            }
            return this.region.bar;
          },
        },
        {
          key: "drawCurrent",
          value: function (t, i, e) {
            var r = 5 * this.props.devicePixelRatio;
            t += r;
            var o = this.props.indicator[this.name],
              a = this.props.colorProp[this.name],
              n = 10,
              h = {
                color: this.props.colorProp.defaultGray,
                font: ""
                  .concat(n * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                baseLine: e,
              };
            if ("volume" === this.name || "cje" === this.name) {
              var c =
                this.props.crossLineItem ||
                this.data.items[this.data.items.length - 1];
              if (!c) return;
              for (
                var p = b(
                    c[this.name],
                    "cje" === this.name || this.props.isHKIndex
                  ),
                  l = p.v,
                  d = p.u,
                  u =
                    "volume" !== this.name || this.props.isHKIndex
                      ? "元"
                      : this.props.stockUnit,
                  g = "".concat(l, " ").concat(d).concat(u),
                  x = g,
                  v = 1,
                  y = this.props["".concat(this.name, "Types")] || [],
                  w = 0;
                w < y.length;
                w++
              )
                if (y[w] > 0) {
                  var P = "".concat(y[w], ": "),
                    M = b(
                      c["".concat(this.name).concat(y[w])],
                      "cje" === this.name
                    ),
                    R = M.v,
                    T = M.u;
                  (x +=
                    P +
                    (isNaN(R) ? "--" : "".concat(R, " ").concat(T).concat(u))),
                    (v += 1);
                }
              for (
                var C = v * r;
                n > 0 &&
                this.region.width - D(this.ctx, x, h) - C <
                  (this.region.bar ? this.region.bar.buttonWidth : 0);

              )
                h.font = ""
                  .concat(--n * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType);
              var k = D(this.ctx, g, h);
              if ((I(this.ctx, g, t, i, h, k), this.props.hideMA)) return;
              t += k + r;
              for (var A = 0; A < y.length; A++)
                if (y[A] > 0) {
                  var S = "".concat(y[A], ": "),
                    L = D(this.ctx, S, h);
                  I(
                    this.ctx,
                    S,
                    t,
                    i,
                    f(m({}, h), { color: this.props.colorProp.ma[A] }),
                    L
                  ),
                    (t += L);
                  var W = b(
                      c["".concat(this.name).concat(y[A])],
                      "cje" === this.name
                    ),
                    B = W.v,
                    F = W.u,
                    E = isNaN(B) ? "--" : "".concat(B, " ").concat(F).concat(u),
                    N = D(this.ctx, E, h);
                  I(this.ctx, E, t, i, h, N), (t += N + r);
                }
            } else if ("ema" === this.name) this.drawEMABar(h, t, i);
            else if ("number" == typeof o || void 0 === o) {
              var Y = D(this.ctx, this.tip, h);
              I(this.ctx, this.tip, t, i, h, Y), (t += Y + r);
              var _ = "".concat(
                isNaN(o) ? "--" : "rally" === this.name ? o : o.toFixed(3)
              );
              I(this.ctx, _, t, i, h);
            } else if ("object" == s(o)) {
              var O = this.tip,
                H = 1;
              for (var j in o)
                (O +=
                  "".concat(j.toUpperCase(), ": ") +
                  "".concat(isNaN(o[j]) ? "--" : o[j].toFixed(3))),
                  (H += 1);
              for (
                var X = H * r;
                n > 7 &&
                (this.region.width - t - D(this.ctx, O, h) - X) /
                  this.props.devicePixelRatio <
                  0;

              )
                h.font = ""
                  .concat(--n * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType);
              var z = D(this.ctx, this.tip, h);
              for (var U in (I(this.ctx, this.tip, t, i, h, z),
              (t += z + r),
              o)) {
                var q = "".concat(U.toUpperCase(), ": "),
                  V = D(this.ctx, q, h),
                  G = "".concat(isNaN(o[U]) ? "--" : o[U].toFixed(3)),
                  K = D(this.ctx, G, h);
                I(this.ctx, q, t, i, f(m({}, h), { color: a[U] }), V),
                  (t += V),
                  I(this.ctx, G, t, i, h, K),
                  (t += K + r);
              }
            }
          },
        },
        {
          key: "drawEMABar",
          value: function (t, i, e) {
            for (
              var s = this.props.indicator[this.name],
                r = this.props.colorProp[this.name],
                o = 5 * this.props.devicePixelRatio,
                a = 10,
                n = this.props.setting.emaTypes,
                h = "",
                c = 0,
                p = [],
                l = 0;
              l < n.length;
              l++
            )
              if (n[l] > 0) {
                var d = "".concat(n[l], ": "),
                  u = +s[n[l]],
                  g = isNaN(u) ? "--" : u.toFixed(this.props.fixNum || 2);
                if (
                  ((c += 1),
                  p.push({ i: l, title: d, num: g }),
                  "kline-portrait" === this.props.layout && c > 5)
                ) {
                  h += "...";
                  break;
                }
                h += d + g;
              }
            for (
              var x = (c - 1) * o;
              a > 0 && this.region.width - D(this.ctx, h, t) - x - i < 0;

            )
              t.font = ""
                .concat(--a * this.props.devicePixelRatio, "px ")
                .concat(this.props.textProp.fontType);
            var v = this.ctx;
            v.save();
            for (var y = 0; y < p.length; y++) {
              var w = p[y],
                P = w.i,
                b = w.title,
                M = w.num;
              if ("kline-portrait" === this.props.layout && y > 4) {
                I(v, "...", (i -= o), e, t);
                break;
              }
              var R = D(this.ctx, b, t),
                T = D(this.ctx, M, t);
              I(v, b, i, e, f(m({}, t), { color: r[P] }), R),
                I(v, M, (i += R), e, t, T),
                (i += T + o);
            }
            v.restore();
          },
        },
      ]),
      t
    );
  })(),
  hi = {
    volume: function (t) {
      return t.volume;
    },
    cje: function (t) {
      return t.cje;
    },
    macd: function (t) {
      var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = t.close,
        s = i.short || 12,
        r = i.long || 26,
        o = i.m || 9,
        a = this,
        n = a.SUB(a.EMA(e, s), a.EMA(e, r)),
        h = a.EMA(n, o);
      return { dif: n, dea: h, macd: a.MUL(2, a.SUB(n, h)) };
    },
    rsi: function (t) {
      var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = t.close,
        s = this,
        r = [i.n1 || 6, i.n2 || 12, i.n3 || 24],
        o = s.REF(e, 1),
        a = s.SUB(e, o);
      a[0] = 0;
      for (var n = s.MAX(a, 0), h = s.ABS(a), c = {}, p = 0; p < 3; p++) {
        var l = r[p];
        c["rsi".concat(p + 1)] = s.MUL(
          100,
          s.DIV(s.SMA(n, l, 1), s.SMA(h, l, 1))
        );
      }
      return c;
    },
    kdj: function (t) {
      var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = t.close,
        s = t.high,
        r = t.low,
        o = i.n1 || 9,
        a = i.n2 || 3,
        n = i.n3 || 3,
        h = this,
        c = h.LLV(r, o),
        p = h.DIV(h.MUL(h.SUB(e, c), 100), h.SUB(h.HHV(s, o), c)),
        l = h.SMA(p, a, 1),
        d = h.SMA(l, n, 1),
        u = h.SUB(h.MUL(3, l), h.MUL(2, d));
      function g(t) {
        return t < 0 ? 0 : t > 100 ? 100 : t;
      }
      return { k: h.forEach([l], g), d: h.forEach([d], g), j: u };
    },
    dmi: function (t) {
      for (
        var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = t.close,
          s = t.high,
          r = t.low,
          o = i.n || 14,
          a = i.m || 6,
          n = this.REF(e, 1),
          h = this.MAX(this.SUB(s, r), this.ABS(this.SUB(s, n))),
          c = this.ABS(this.SUB(r, n)),
          p = this.SUM(this.MAX(h, c), o),
          l = this.SUB(s, this.REF(s, 1)),
          d = this.SUB(this.REF(r, 1), r),
          u = [],
          g = [],
          x = 0;
        x < e.length;
        x++
      )
        (u[x] = l[x] > 0 && l[x] > d[x] ? l[x] : 0),
          (g[x] = d[x] > 0 && d[x] > l[x] ? d[x] : 0);
      var m = this.SUM(u, o),
        f = this.SUM(g, o),
        v = this.DIV(this.MUL(m, 100), p),
        y = this.DIV(this.MUL(f, 100), p),
        w = this.MA(
          this.MUL(this.DIV(this.ABS(this.SUB(y, v)), this.ADD(y, v)), 100),
          a
        );
      return {
        pdi: v,
        mdi: y,
        adx: w,
        adxr: this.DIV(this.ADD(w, this.REF(w, a)), 2),
      };
    },
    wr: function (t) {
      for (
        var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = t.close,
          s = t.high,
          r = t.low,
          o = this,
          a = [i.n1 || 10, i.n2 || 6],
          n = {},
          h = 0;
        h < 2;
        h++
      ) {
        var c = a[h],
          p = o.HHV(s, c);
        n["wr".concat(h + 1)] = o.DIV(
          o.MUL(o.SUB(p, e), 100),
          o.SUB(p, o.LLV(r, c))
        );
      }
      return n;
    },
    obv: function (t) {
      for (
        var i = [0], e = t.close, s = t.volume, r = 1, o = e.length;
        r < o;
        r++
      )
        e[r] > e[r - 1]
          ? (i[r] = i[r - 1] + s[r])
          : e[r] < e[r - 1]
          ? (i[r] = i[r - 1] - s[r])
          : (i[r] = i[r - 1]);
      return i;
    },
    boll: function (t) {
      var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = t.close,
        s = i.deviation || 20,
        r = i.width || 2,
        o = this,
        a = o.MA(e, s),
        n = o.MUL(o.STD(e, s), r);
      return { upper: o.ADD(a, n), mid: a, lower: o.SUB(a, n) };
    },
    sar: function (t) {
      var i = t.high,
        e = t.low,
        s = [],
        r = [],
        o = [],
        a = i.length,
        n = [],
        h = function (t) {
          if (!(t >= a))
            if (
              ((s[t] = Math.min.apply(null, e.slice(t - 4, t))),
              (n[t] = 1),
              s[t] > e[t])
            )
              c(t + 1);
            else
              for (
                o[t] = Math.max.apply(null, i.slice(t - 4 + 1, t + 1)),
                  r[t] = 2;
                t < a - 1;

              ) {
                if (
                  ((s[t + 1] = s[t] + (r[t] * (o[t] - s[t])) / 100),
                  (n[t + 1] = 1),
                  s[t + 1] > e[t + 1])
                )
                  return void c(t + 2);
                (o[t + 1] = Math.max.apply(null, i.slice(t - 4 + 2, t + 2))),
                  i[t + 1] > o[t]
                    ? ((r[t + 1] = r[t] + 2), r[t + 1] > 20 && (r[t + 1] = 20))
                    : (r[t + 1] = r[t]),
                  t++;
              }
        },
        c = function (t) {
          if (!(t >= a))
            if (
              ((s[t] = Math.max.apply(null, i.slice(t - 4, t))),
              (n[t] = -1),
              s[t] < i[t])
            )
              h(t + 1);
            else
              for (
                o[t] = Math.min.apply(null, e.slice(t - 4 + 1, t + 1)),
                  r[t] = 2;
                t < a - 1;

              ) {
                if (
                  ((s[t + 1] = s[t] + (r[t] * (o[t] - s[t])) / 100),
                  (n[t + 1] = -1),
                  s[t + 1] < i[t + 1])
                )
                  return void h(t + 2);
                (o[t + 1] = Math.min.apply(null, e.slice(t - 4 + 2, t + 2))),
                  e[t + 1] < o[t]
                    ? ((r[t + 1] = r[t] + 2), r[t + 1] > 20 && (r[t + 1] = 20))
                    : (r[t + 1] = r[t]),
                  t++;
              }
        };
      return (
        i[4] > i[0] || e[4] > e[0] ? h(4) : c(4), { sar: s, low: e, high: i }
      );
    },
    cci: function (t) {
      for (
        var i,
          e,
          s,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = r.n || 14,
          a = [],
          n = t.close,
          h = t.low,
          c = t.high,
          p = 0;
        p < n.length;
        p++
      )
        (i = c[p]),
          (e = h[p]),
          (s = n[p]),
          0 == i && (i = s),
          0 == e && (e = s),
          (a[p] = (i + e + s) / 3);
      return this.DIV(
        this.SUB(a, this.MA(a, o)),
        this.MUL(0.015, this.AVEDEV(a, o))
      );
    },
    bias: function (t) {
      var i = t.close,
        e = this.MA(i, 6),
        s = this.MA(i, 12),
        r = this.MA(i, 24);
      return {
        bias1: this.MUL(this.DIV(this.SUB(i, e), e), 100),
        bias2: this.MUL(this.DIV(this.SUB(i, s), s), 100),
        bias3: this.MUL(this.DIV(this.SUB(i, r), r), 100),
      };
    },
    bbi: function (t) {
      var i = t.close;
      return this.DIV(
        this.ADD(this.MA(i, 3), this.MA(i, 6), this.MA(i, 12), this.MA(i, 24)),
        4
      );
    },
    trix: function (t) {
      var i = t.close,
        e = this.EMA(this.EMA(this.EMA(i, 12), 12), 12),
        s = this.REF(e, 1),
        r = this.MUL(this.DIV(this.SUB(e, s), s), 100);
      return { trix: r, trma: this.MA(r, 20) };
    },
    ene: function (t) {
      var i = t.close,
        e = this.MA(i, 10),
        s = this.MUL(1.11, e),
        r = this.MUL(0.91, e);
      return { ene: this.DIV(this.ADD(s, r), 2), upper: s, lower: r };
    },
    vr: function (t) {
      for (
        var i = t.close,
          e = t.volume,
          s = [],
          r = [],
          o = [],
          a = this.REF(i, 1),
          n = 0;
        n < i.length;
        n++
      )
        (s[n] = i[n] > a[n] ? e[n] : 0),
          (r[n] = i[n] < a[n] ? e[n] : 0),
          (o[n] = i[n] === a[n] ? e[n] : 0);
      var h = this.SUM(s, 26),
        c = this.SUM(r, 26),
        p = this.SUM(o, 26),
        l = this.ADD(this.MUL(h, 2), p),
        d = this.ADD(this.MUL(c, 2), p),
        u = this.MUL(this.DIV(l, d), 100);
      return { vr: u, vrma: this.MA(u, 6) };
    },
    arbr: function (t) {
      var i = t.open,
        e = t.close,
        s = t.high,
        r = t.low,
        o = this.SUM(this.SUB(s, i), 26),
        a = this.SUM(this.SUB(i, r), 26),
        n = this.MUL(this.DIV(o, a), 100),
        h = this.REF(e, 1);
      h[0] = 0;
      var c = this.SUM(this.MAX(this.SUB(s, h), 0), 26),
        p = this.SUM(this.MAX(this.SUB(h, r), 0), 26);
      return { ar: n, br: this.MUL(this.DIV(c, p), 100) };
    },
    psy: function (t) {
      for (
        var i = t.close, e = [], s = this.REF(i, 1), r = 0;
        r < i.length;
        r++
      )
        e[r] = i[r] > s[r] ? 1 : 0;
      var o = this.MUL(this.DIV(this.SUM(e, 12), 12), 100);
      return { psy: o, psyma: this.MA(o, 6) };
    },
    dma: function (t) {
      var i = t.close,
        e = this.SUB(this.MA(i, 10), this.MA(i, 50));
      return { ddd: e, ama: this.MA(e, 10) };
    },
    dpo: function (t) {
      var i = t.close,
        e = this.SUB(i, this.REF(this.MA(i, 20), 11));
      return { dpo: e, dpoma: this.MA(e, 6) };
    },
    AVEDEV: function (t, i) {
      if (null === t || 0 == t.length) return null;
      var e = t.length,
        s = 0,
        r = 0,
        o = 0,
        a = 0,
        n = Array(e);
      if (i <= 1) return n;
      if (e < i) return n;
      for (; s < e && o < i - 1; ) (a += t[s]), o++, s++;
      for (; s < e; s++) {
        (a += t[s]), s - i >= 0 && s - i < e && (a -= t[s - i]);
        var h = a / i,
          c = 0;
        for (r = s - i + 1; r <= s; r++) c += Math.abs(t[r] - h);
        n[s] = c / i;
      }
      return n;
    },
    ADD: function () {
      for (var t = this, i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this.forEach(i, function () {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        return t.reduce(
          i,
          function (t, i) {
            return t + i;
          },
          !0
        );
      });
    },
    SUB: function () {
      for (var t = this, i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this.forEach(i, function () {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        return t.reduce(
          i,
          function (t, i) {
            return t - i;
          },
          !0
        );
      });
    },
    MUL: function () {
      for (var t = this, i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this.forEach(i, function () {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        return t.reduce(
          i,
          function (t, i) {
            return t * i;
          },
          !0
        );
      });
    },
    DIV: function () {
      for (var t = this, i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this.forEach(i, function () {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        return t.reduce(
          i,
          function (t, i) {
            if (i) return t / i;
          },
          !0
        );
      });
    },
    POW: function () {
      for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
      return this.forEach(t, function (t, i) {
        return Math.pow(t, i);
      });
    },
    MAX: function () {
      for (var t = this, i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this.forEach(i, function () {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        return t.reduce(i, function (t, i) {
          return t < i ? i : t;
        });
      });
    },
    MIN: function () {
      for (var t = this, i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this.forEach(i, function () {
        for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        return t.reduce(i, function (t, i) {
          return t < i ? t : i;
        });
      });
    },
    maxmin: function () {
      for (var t, i, e, s = 0; s < arguments.length; s++)
        (e = Math.max.apply(null, arguments[s])),
          (t = void 0 !== t ? Math.max(t, e) : e),
          (e = Math.min.apply(null, arguments[s])),
          (i = void 0 !== i ? Math.min(i, e) : e);
      return { max: t, min: i };
    },
    ABS: function (t) {
      return this.forEach([t], function (t) {
        return Math.abs(t);
      });
    },
    REF: function (t, i) {
      return Array(i).concat(t).slice(0, t.length);
    },
    HHV: function (t, i) {
      return this.hhvllv(t, i, function (t, i) {
        return t < i ? i : t;
      });
    },
    LLV: function (t, i) {
      return this.hhvllv(t, i, function (t, i) {
        return t > i ? i : t;
      });
    },
    SUM: function (t, i) {
      var e = t.length,
        s = 0,
        r = 0,
        o = [];
      if (i <= 0)
        return this.reduce(t, function (t, i) {
          return t + i;
        });
      if (i <= 1) return t.slice();
      for (; s < e; s++)
        this.isNumber(t[s]) && (this.isNumber(r) ? (r += t[s]) : (r = t[s])),
          (o[s] = r),
          this.isNumber(t[s - i + 1]) && (r -= t[s - i + 1]);
      return o;
    },
    MA: function (t, i) {
      var e = t.length,
        s = 0,
        r = -1,
        o = 0,
        a = 0,
        n = [];
      if (i <= 0)
        return (
          (a = this.reduce(t, function (t, i) {
            return t + i;
          })) / e
        );
      if (i <= 1) return t.slice();
      if (e < i) return Array(e);
      for (; s < e && o < i - 1; ) hi.isNumber(t[s]) && ((a += t[s]), o++), s++;
      for (; s < e; s++, r++)
        hi.isNumber(t[s]) && (a += t[s]),
          hi.isNumber(t[s - i]) && (a -= t[s - i]),
          (n[s] = a / i);
      return n;
    },
    DMA: function (t, i, e) {
      var s = t.length,
        r = 0,
        o = 1 - i,
        a = 0,
        n = [];
      if (i > 1) return Array(s);
      if (1 == i) return t.slice();
      if (void 0 === e)
        for (; r < s; r++)
          if (hi.isNumber(t[r])) {
            (n[r] = 1 == e ? 0 : t[r]), (a = t[r]), r++;
            break;
          }
      for (; r < s; r++)
        hi.isNumber(t[r])
          ? ((a = i * t[r] + o * a), (n[r] = a))
          : (n[r] = n[r - 1]);
      return n;
    },
    SMA: function (t, i, e) {
      return this.DMA(t, e / i, 1);
    },
    EMA: function (t, i) {
      return this.DMA(t, 2 / (i + 1));
    },
    WMA: function (t, i) {
      var e = t.length,
        s = 0,
        r = -1,
        o = [];
      if (i <= 1) return t.slice();
      if (e < i) return Array(e);
      for (var a = (i * (i + 1)) / 2, n = 0, h = 0; s < i - 1; s++)
        hi.isNumber(t[s]) && ((n += t[s]), (h += (s + 1) * t[s]));
      for (; s < e; s++, r++)
        hi.isNumber(t[s]) && ((n += t[s]), (h += t[s] * i)),
          r >= 0 && hi.isNumber(t[r]) && (n -= t[r]),
          (o[s] = h / a),
          (h -= n);
      return o;
    },
    STD: function (t, i) {
      for (var e = [], s = hi.MA(t, i), r = i - 1, o = t.length; r < o; r++) {
        for (var a = 0, n = r - i + 1; n <= r; n++)
          a += Math.pow(t[n] - s[r], 2);
        e[r] = Math.sqrt(a / i);
      }
      return e;
    },
    forEach: function (t, i) {
      var e,
        s,
        r,
        o = t.length,
        a = [],
        n = -1,
        h = [];
      for (s = 0; s < o; s++)
        (a[s] = this.isArray(t[s]) ? t[s].length : -1), a[s] > n && (n = a[s]);
      for (s = 0; s < n; s++) {
        for (e = [], r = 0; r < o; r++) e[r] = a[r] < 0 ? t[r] : t[r][s];
        h[s] = i.apply({ index: s }, e);
      }
      return h;
    },
    reduce: function (t, i, e, s, r) {
      var o,
        a = 0,
        n = t.length;
      for (
        "number" == typeof i && ((a = i), (n = e), (i = s), (e = r));
        a < n;
        a++
      )
        if (e || this.isNumber(t[a])) {
          o = +t[a];
          break;
        }
      for (a++; a < n; a++) (e || this.isNumber(t[a])) && (o = i(o, +t[a], a));
      return o;
    },
    isArray: function (t) {
      return "[object Array]" == {}.toString.call(t);
    },
    isNumber: function (t) {
      return null !== t && "" !== t && isFinite(t);
    },
    hhvllv: function (t, i, e) {
      var s = [],
        r = i - 1,
        o = t.length;
      if (i > o) return Array(o);
      if (i <= 0) return this.reduce(t, e);
      if (i <= 1) return t.slice();
      for (; r < o; r++) s[r] = this.reduce(t, r - i + 1, r + 1, e);
      return s;
    },
  },
  ci = n(function t(i) {
    a(this, t),
      (this.DAY_KLINE_MAX_COUNT = i.DAY_KLINE_MAX_COUNT || 370),
      (this.WEEK_KLINE_MAX_COUNT = 5 * this.DAY_KLINE_MAX_COUNT),
      (this.MONTH_KLINE_MAX_COUNT = 24 * this.DAY_KLINE_MAX_COUNT);
  }),
  pi = (function (t) {
    r(e, ci);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "getGraphDataCount",
          value: function (t, i) {
            for (var e = 0, s = 0, r = i; r >= 0; r--) {
              var o = t[r];
              if (
                o &&
                (s++,
                (e += this.tansformToRealChange(o.hsl)) >
                  this.getMaxChangeSum() &&
                  s >= this.getMinKlineCount() &&
                  s < this.getMaxKlineCount())
              )
                break;
            }
            return (e >= this.getMaxChangeSum() &&
              s >= this.getMinKlineCount() &&
              s < this.getMaxKlineCount()) ||
              s < this.getMaxKlineCount()
              ? s
              : this.getMaxKlineCount();
          },
        },
        {
          key: "getMaxMinPrice",
          value: function (t, i, e) {
            for (var s = [], r = i; r > i - e && r >= 0; r--) {
              var o = t[r];
              s.push(+o.high), s.push(+o.low);
            }
            return {
              max: Math.max.apply(Math, s),
              min: Math.min.apply(Math, s),
            };
          },
        },
        {
          key: "genDayKlineData",
          value: function (t, i, e) {
            for (var s = [], r = i, o = 0; r >= 0 && o < e; r--, o++)
              for (var a = t[r], n = 0; n < a.tradeDays; n++)
                s.unshift(
                  f(m({}, a), { hsl: a.hsl / a.tradeDays, tradeDays: 1 })
                );
            return s;
          },
        },
        {
          key: "getATurn",
          value: function (t, i, e, s) {
            var r = i - e;
            return 0 == r
              ? this.tansformToRealChange(t[e].hsl)
              : ((s[r] =
                  s[r - 1] * (1 - this.tansformToRealChange(t[e + 1].hsl))),
                this.tansformToRealChange(t[e].hsl) * s[r]);
          },
        },
        {
          key: "calc",
          value: function (t, i) {
            try {
              var e = this.getGraphDataCount(t, i);
              if (0 === e) return null;
              for (
                var s = this.getMaxMinPrice(t, i, e),
                  r = this.getPriceCount() - 1,
                  o = Math.abs(s.max - s.min) / r,
                  a = [],
                  n = [],
                  h = [1],
                  c = 0;
                c <= r;
                c++
              )
                a.push(s.min + c * o);
              var p = t[i];
              p && n.push(this.tansformToRealChange(p.hsl));
              for (var l = i - 1; l > i - e && l >= 0; l--)
                n[i - l] = this.getATurn(t, i, l, h);
              for (
                var d = new Array(r + 1).fill(0), u = i;
                u > i - e && u >= 0;
                u--
              ) {
                var g = t[u];
                if (g) {
                  var x = g.high,
                    m = g.low,
                    f = (x + m) / 2,
                    v = this.findPriceSection(t, u, a, o);
                  v.from > v.to && (v.to = v.from);
                  for (
                    var y = new Array(r + 1).fill(0), w = 0, P = v.from;
                    P <= v.to;
                    P++
                  )
                    a[P] >= f ? (y[P] = x - a[P]) : (y[P] = a[P] - m),
                      (w += y[P]);
                  for (var b = v.from; b <= v.to; b++) {
                    var M;
                    (M = Math.abs(w) > 1e-6 ? (n[i - u] * y[b]) / w : n[i - u]),
                      (d[b] = (isNaN(d[b]) ? 0 : d[b]) + M);
                  }
                }
              }
              return { chip: d, maxMin: s, price: a };
            } catch (t) {
              return null;
            }
          },
        },
        {
          key: "findPriceSection",
          value: function (t, i, e, s) {
            var r = t[i];
            if (null != r) {
              var o,
                a,
                n = { from: 0, to: e.length - 1 };
              for (o = 0; o < e.length; o++)
                if (r.low <= e[o]) {
                  n.from = o;
                  break;
                }
              for (a = e.length - 1; a >= 0; a--)
                if (r.high >= e[a]) {
                  n.to = a;
                  break;
                }
              return n;
            }
          },
        },
        {
          key: "tansformToRealChange",
          value: function (t) {
            return parseFloat(t) / 100;
          },
        },
      ]),
      e
    );
  })(),
  li = (function (t) {
    r(e, pi);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "getMaxChangeSum",
          value: function () {
            return 3;
          },
        },
        {
          key: "getMaxKlineCount",
          value: function () {
            return 370;
          },
        },
        {
          key: "getMinKlineCount",
          value: function () {
            return 121;
          },
        },
        {
          key: "getPriceCount",
          value: function () {
            return 200;
          },
        },
      ]),
      e
    );
  })(),
  di = (function (t) {
    r(e, li);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "getGraphDataCount",
          value: function (t, i) {
            return 121;
          },
        },
        {
          key: "getATurn",
          value: function (t, i, e, s) {
            return this.tansformToRealChange(t[e].hsl);
          },
        },
        {
          key: "getMaxKlineCount",
          value: function () {
            return 121;
          },
        },
        {
          key: "getMinKlineCount",
          value: function () {
            return 21;
          },
        },
        {
          key: "getPriceCount",
          value: function () {
            return 100;
          },
        },
      ]),
      e
    );
  })(),
  ui = (function (t) {
    r(e, li);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "calc",
          value: function (t, i) {
            try {
              var e = this.getGraphDataCount(t, i);
              if (0 == e) return null;
              var s = this.genDayKlineData(t, i, e);
              (i = s.length - 1), (e = s.length);
              for (
                var r = this.getMaxMinPrice(s, i, e),
                  o = [],
                  a = this.getPriceCount() - 1,
                  n = (r.max - r.min) / a,
                  h = 0;
                h <= a;
                h++
              )
                o[h] = r.min + h * n;
              for (
                var c = s[i],
                  p = c ? [this.tansformToRealChange(c.hsl)] : [],
                  l = [1],
                  d = i - 1;
                d > i - e && d >= 0;
                d--
              )
                p[i - d] = this.getATurn(s, i, d, l);
              for (
                var u = new Array(a + 1).fill(0),
                  g = new Array(a + 1).fill(0),
                  x = i;
                x > i - e && x >= 0;
                x--
              ) {
                var m = s[x];
                if (null != m) {
                  var f = m.high,
                    v = m.low,
                    y = (f + v) / 2,
                    w = this.findPriceSection(s, x, o, n);
                  if (!(w.from > w.to)) {
                    for (var P = 0, b = w.from; b <= w.to; b++)
                      o[b] >= y ? (u[b] = f - o[b]) : (u[b] = o[b] - v),
                        (P += u[b]);
                    for (var M = w.from; M <= w.to; M++)
                      if (Math.abs(P) > 1e-6) {
                        var R = (p[i - x] * u[M]) / P;
                        g[M] += R;
                      }
                  }
                }
              }
              return { chip: g, price: o, maxMin: r };
            } catch (t) {
              return null;
            }
          },
        },
        {
          key: "getPriceCount",
          value: function () {
            return 100;
          },
        },
        {
          key: "getMaxKlineCount",
          value: function () {
            return 121;
          },
        },
        {
          key: "getMinKlineCount",
          value: function () {
            return 21;
          },
        },
      ]),
      e
    );
  })(),
  gi = (function (t) {
    r(e, pi);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "getMaxChangeSum",
          value: function () {
            return 6;
          },
        },
        {
          key: "getMaxKlineCount",
          value: function () {
            return 40;
          },
        },
        {
          key: "getMinKlineCount",
          value: function () {
            return 25;
          },
        },
        {
          key: "getPriceCount",
          value: function () {
            return 100;
          },
        },
        {
          key: "calc",
          value: function (t, i) {
            try {
              var e = this.getGraphDataCount(t, i);
              if (0 == e) return null;
              var s = this.genDayKlineData(t, i, e);
              (i = s.length - 1), (e = s.length);
              for (
                var r = this.getPriceCount() - 1,
                  o = this.getMaxMinPrice(s, i, e),
                  a = Math.abs(o.max - o.min) / r,
                  n = [],
                  h = 0;
                h <= r;
                h++
              )
                n[h] = o.min + h * a;
              var c = [],
                p = [1],
                l = s[i];
              c[0] = l ? this.tansformToRealChange(l.hsl) : 0;
              for (var d = i - 1; d > i - e && d >= 0; d--)
                c[i - d] = this.getATurn(s, i, d, p);
              for (
                var u = new Array(r + 1).fill(0),
                  g = new Array(r + 1).fill(0),
                  x = i;
                x > i - e && x >= 0;
                x--
              ) {
                var m = s[x];
                if (null != m) {
                  var f = m.high,
                    v = m.low,
                    y = (f + v) / 2,
                    w = this.findPriceSection(s, x, n, a);
                  if (!(w.from > w.to)) {
                    for (var P = 0, b = w.from; b <= w.to; b++)
                      n[b] >= y ? (g[b] = f - n[b]) : (g[b] = n[b] - v),
                        (P += g[b]);
                    for (var M = w.from; M <= w.to; M++)
                      if (Math.abs(P) > 1e-6) {
                        var R = (c[i - x] * g[M]) / P;
                        u[M] += R;
                      }
                  }
                }
              }
              return { chip: u, price: n, maxMin: o };
            } catch (t) {
              return null;
            }
          },
        },
      ]),
      e
    );
  })(),
  xi = (function (t) {
    r(e, gi);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "getMaxChangeSum",
          value: function () {
            return 10;
          },
        },
        {
          key: "getMinKlineCount",
          value: function () {
            return 8;
          },
        },
        {
          key: "getMaxKlineCount",
          value: function () {
            return 15;
          },
        },
        {
          key: "getPriceCount",
          value: function () {
            return 100;
          },
        },
      ]),
      e
    );
  })(),
  mi = (function (t) {
    r(e, pi);
    var i = o(e);
    function e(t) {
      return a(this, e), i.call(this, t);
    }
    return (
      n(e, [
        {
          key: "getMaxChangeSum",
          value: function () {
            return 20;
          },
        },
        {
          key: "getMinKlineCount",
          value: function () {
            return 5;
          },
        },
        {
          key: "getMaxKlineCount",
          value: function () {
            return 10;
          },
        },
        {
          key: "getPriceCount",
          value: function () {
            return 100;
          },
        },
        {
          key: "calc",
          value: function (t, i) {
            try {
              var e = this.getGraphDataCount(t, i);
              if (0 == e) return null;
              for (
                var s = this.getPriceCount() - 1,
                  r = this.getMaxMinPrice(t, i, e),
                  o = Math.abs(r.max - r.min) / s,
                  a = [],
                  n = 0;
                n <= s;
                n++
              )
                a[n] = r.min + n * o;
              for (
                var h = t[i],
                  c = h ? [this.tansformToRealChange(h.hsl)] : [],
                  p = [1],
                  l = i - 1;
                l > i - e && l >= 0;
                l--
              )
                c[i - l] = this.getATurn(t, i, l, p);
              for (
                var d = new Array(s + 1).fill(0), u = i;
                u > i - e && u >= 0;
                u--
              ) {
                var g = t[u];
                if (null != g) {
                  var x = g.high,
                    m = g.low,
                    f = (x + m) / 2,
                    v = this.findPriceSection(t, u, a, o);
                  if (!(v.from > v.to)) {
                    for (
                      var y = new Array(s + 1).fill(0), w = 0, P = v.from;
                      P <= v.to;
                      P++
                    )
                      a[P] >= f ? (y[P] = x - a[P]) : (y[P] = a[P] - m),
                        (w += y[P]);
                    for (var b = v.from; b <= v.to; b++)
                      if (Math.abs(w) > 1e-6) {
                        var M = (c[i - u] * y[b]) / w;
                        d[b] += M;
                      }
                  }
                }
              }
              for (var R = 0; R < d.length; R++) d[R] = Math.abs(d[R]);
              return { chip: d, maxMin: r, price: a };
            } catch (t) {
              return null;
            }
          },
        },
      ]),
      e
    );
  })(),
  fi = (function () {
    function t(i) {
      a(this, t),
        (this.list = i.list),
        (this.type = i.type),
        (this.targetIndex = i.targetIndex),
        isNaN(i.crossPrice) || (this.crossPrice = i.crossPrice),
        this.init();
    }
    return (
      n(t, [
        {
          key: "init",
          value: function () {
            switch (this.type) {
              case "m1":
              case "m5":
              case "m15":
              case "m30":
              case "m60":
              case "m120":
                this.klineModel = new di({});
                break;
              case "day":
                this.klineModel = new li({});
                break;
              case "week":
                this.klineModel = new ui({});
                break;
              case "month":
                this.klineModel = new gi({});
                break;
              case "season":
                this.klineModel = new xi({});
                break;
              case "year":
                this.klineModel = new mi({});
            }
          },
        },
        {
          key: "getData",
          value: function (t) {
            var i,
              s =
                null == (i = this.klineModel)
                  ? void 0
                  : i.calc(this.list, t || this.targetIndex);
            if (!s) return null;
            (this.chip = Array.isArray(s.chip) ? s.chip : []),
              (this.price = Array.isArray(s.price) ? s.price : []);
            var r = this.calConcentration(5, 95),
              o = this.calConcentration(15, 85),
              a = this.getCurrentPrice(),
              n = this.getProfitPercent(a),
              h = this.cost(50),
              c = isNaN(this.crossPrice)
                ? ""
                : this.getProfitPercent(this.crossPrice);
            return {
              chip: {
                list: this.chip,
                maxValue:
                  this.chip.length > 0 ? Math.max.apply(Math, e(this.chip)) : 0,
                prices: this.price,
              },
              p90: r,
              p70: o,
              profitPercent: isNaN(h)
                ? "--"
                : "".concat((100 * n).toFixed(2), "%"),
              avgPrice: isNaN(h) ? "--" : h,
              currentPrice: a,
              crossProfitPercent: c,
              crossPrice: isNaN(this.crossPrice) ? "" : this.crossPrice,
            };
          },
        },
        {
          key: "getProfitPercent",
          value: function (t) {
            var i = this,
              e = 0,
              s = this.getTotalChip();
            return (
              this.chip.map(function (s, r) {
                i.price[r] <= t && (e += isNaN(s) ? 0 : s);
              }),
              s <= 1e-7 ? 0 : e / s
            );
          },
        },
        {
          key: "getTotalChip",
          value: function () {
            var t = 0;
            return (
              this.chip.map(function (i) {
                isNaN(i) || (t += i);
              }),
              t
            );
          },
        },
        {
          key: "getCurrentPrice",
          value: function () {
            return (
              this.list[this.targetIndex] && this.list[this.targetIndex].close
            );
          },
        },
        {
          key: "calConcentration",
          value: function (t, i) {
            var e = this.cost(t),
              s = this.cost(i);
            if (isNaN(e) || isNaN(s)) return { price: "--", percent: "--" };
            var r = Math.abs(s + e) < 1e-6 ? 0 : (100 * (s - e)) / (s + e);
            return {
              price: ""
                .concat(e > 1e4 ? e.toFixed(1) : e.toFixed(2), "~")
                .concat(s > 1e4 ? s.toFixed(1) : s.toFixed(2)),
              percent: "".concat(r.toFixed(2), "%"),
            };
          },
        },
        {
          key: "cost",
          value: function (t) {
            var i = 0,
              e = -1,
              s = this.getTotalChip();
            if (!s) return NaN;
            for (var r = 0; r < this.chip.length; r++)
              if ((100 * (i += this.chip[r])) / s >= t) {
                e = r;
                break;
              }
            return this.price[e];
          },
        },
      ]),
      t
    );
  })(),
  vi = "加载数据",
  yi = 0,
  wi = new Map();
function Pi(t) {
  var i = m(
    m(
      {},
      {
        defaultCount: 60,
        indicatorList: [],
        maTypes: (t.setting && t.setting.maTypes) || [],
        volumeTypes: (t.setting && t.setting.volumeTypes) || [],
        emaPeriods: (t.setting && t.setting.emaTypes) || [],
        cjeTypes: (t.setting && t.setting.cjeTypes) || [],
        remindPrice:
          t.setting && t.setting.remindPrice && t.isSupportRemindPrice,
        list: [],
        trendline: [],
        mainViewData: {
          currTrendline: {},
          lastestPrice: void 0,
          remindPrice: {},
        },
        maxKlineCount: { landscape: 320, portrait: 195 },
      }
    ),
    t
  );
  for (var e in i) this[e] = i[e];
  (this.validIndex = Math.max.apply(null, this.maTypes)),
    (this.requestEnd = !1),
    (this.count = this.defaultCount),
    (this.queryCount = t.queryCount),
    (this.index = 0),
    (this.fetching = !1),
    (this.needBounce = !1),
    (this.reachBoundary = !1),
    (t.isWzqMiniProgram || oi !== t.market || ai !== t.scode) &&
      ((oi = t.market),
      (ai = t.scode),
      (exports.tradeShowBar = !1),
      wi.clear()),
    (this.isWzqMiniProgram = t.isWzqMiniProgram),
    this.switchIndicator();
}
(exports.tradeShowBar = !1),
  (Pi.prototype = {
    switchIndicator: function (t, i) {
      var e,
        s = ["main", "curr", "second", "third", "fourth"];
      "number" == typeof t && (this["".concat(s[t], "Indicator")] = i),
        (this.indicatorList = []);
      for (
        var r =
            "kline-portrait" === this.layout &&
            (null == (e = this.setting) ? void 0 : e.indicatorCount)
              ? this.setting.indicatorCount
              : 1,
          o = 0;
        o <= r;
        o++
      )
        this.indicatorList.push(this["".concat(s[o], "Indicator")]);
      this.indicatorList.includes("ma") || this.indicatorList.push("ma"),
        this.indicatorList.push("defboll"),
        (this.indicatorList = Array.from(new Set(this.indicatorList))),
        this.list.length > 0 && this.format(i);
    },
    format: function (t) {
      var e,
        s,
        r,
        o,
        a,
        n,
        c = this,
        p = {},
        l = {};
      ["open", "close", "low", "high", "volume", "cje"].forEach(function (t) {
        l[t] = c.list.map(function (i) {
          return i[t];
        });
      });
      var d = t ? [t] : this.indicatorList;
      for (
        d.map(function (t) {
          if ("ma" === t) {
            var e,
              s = h(c.maTypes);
            try {
              for (s.s(); !(e = s.n()).done; ) {
                var r = e.value;
                r > 0 && (p["ma".concat(r)] = hi.MA(l.close, r));
              }
            } catch (t) {
              s.e(t);
            } finally {
              s.f();
            }
          } else if ("volume" === t) {
            var o,
              a = h(c.volumeTypes);
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var n = o.value;
                n > 0 && (p["volume".concat(n)] = hi.MA(l.volume, n));
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
          } else if (/^ema$/.test(t)) {
            c.emaPeriods.forEach(function (e) {
              if (e > 0) {
                var s = hi.EMA(l.close, e);
                (p["ema".concat(e)] = s),
                  p[t] ? (p[t][e] = s) : (p[t] = i({}, e, s));
              }
            });
          } else if ("cje" === t) {
            var d,
              u = h(c.cjeTypes);
            try {
              for (u.s(); !(d = u.n()).done; ) {
                var g = d.value;
                g > 0 && (p["cje".concat(g)] = hi.MA(l.cje, g));
              }
            } catch (t) {
              u.e(t);
            } finally {
              u.f();
            }
          } else
            /^defboll$/.test(t)
              ? "day" === c.type && c.list.length >= 20 && (p[t] = hi.boll(l))
              : "rally" === t ||
                (p[t] = hi[t](l, c.setting["".concat(t, "Params")]));
        }),
          s = this.list.length - 1;
        s >= 0;
        s--
      ) {
        for (r in ((e = this.list[s]), p))
          if (((o = p[r]), Array.isArray(o))) e[r] = o[s];
          else {
            for (a in ((n = {}), o)) n[a] = o[a][s];
            e[r] = n;
          }
        (e.maxMin = {
          ma: { max: 0, min: Number.MAX_SAFE_INTEGER },
          volume: { max: 0, min: Number.MAX_SAFE_INTEGER },
          cje: { max: 0, min: Number.MAX_SAFE_INTEGER },
        }),
          this.maTypes.map(function (t) {
            t &&
              e["ma".concat(t)] &&
              ((e.maxMin.ma.max = Math.max(
                e.maxMin.ma.max,
                +e["ma".concat(t)]
              )),
              (e.maxMin.ma.min = Math.min(
                e.maxMin.ma.min,
                +e["ma".concat(t)]
              )));
          }),
          this.volumeTypes.map(function (t) {
            t &&
              e["volume".concat(t)] &&
              ((e.maxMin.volume.max = Math.max(
                e.maxMin.volume.max,
                +e["volume".concat(t)]
              )),
              (e.maxMin.volume.min = Math.min(
                e.maxMin.volume.min,
                +e["volume".concat(t)]
              )));
          }),
          this.cjeTypes.map(function (t) {
            t &&
              e["cje".concat(t)] &&
              ((e.maxMin.cje.max = Math.max(
                e.maxMin.cje.max,
                +e["cje".concat(t)]
              )),
              (e.maxMin.cje.min = Math.min(
                e.maxMin.cje.min,
                +e["cje".concat(t)]
              )));
          });
      }
      this.setting.macdPattern &&
        ((!t && d.includes("macd")) || "macd" === t) &&
        this.calcMACDGoldDead(),
        this.setting.magicNine && !t && this.calcMagicNine(),
        "day" === this.type &&
          this.isSupportTradeLine &&
          this.setting.tradeLine &&
          !t &&
          this.calcTradeLine(),
        /magicNine/.test(this.guideMode)
          ? (this.calcMagicNine(), this.calcMagicNineGuide())
          : /tradeLine/.test(this.guideMode) &&
            this.isSupportTradeLine &&
            this.calcTradeLineGuide();
    },
    calcMACDGoldDead: function () {
      for (var t, i, e, s, r, o, a, n, h = 1; h < this.list.length; h++) {
        var c = this.list[h],
          p = this.list[h - 1];
        if (
          ((c.macdHelper = null),
          c.macd.dif > c.macd.dea &&
            p.macd.dif < p.macd.dea &&
            c.macd.dif > p.macd.dif)
        ) {
          c.macdHelper = { status: "gold" };
          var l =
            (p.macd.dea - p.macd.dif) /
            (c.macd.dif + p.macd.dea - p.macd.dif - c.macd.dea);
          if (
            (Object.assign(c.macdHelper, {
              xRatio: l,
              dif: (c.macd.dif - p.macd.dif) * l + p.macd.dif,
            }),
            t && c.macdHelper.dif > this.list[t].macdHelper.dif)
          ) {
            for (
              var d = void 0,
                u = void 0,
                g = Number.MAX_SAFE_INTEGER,
                x = Number.MAX_SAFE_INTEGER,
                m = h - 1;
              m >= 0 && !(this.list[m].macd.macd > 0);
              m--
            )
              this.list[m].low < g && ((g = this.list[m].low), (d = m));
            for (var f = t - 1; f >= 0 && !(this.list[f].macd.macd > 0); f--)
              this.list[f].low < x && ((x = this.list[f].low), (u = f));
            d &&
              u &&
              g < x &&
              (Object.assign(c.macdHelper, {
                status: "gold-deviate",
                candleDate1: this.list[d].time,
                candleDate2: this.list[u].time,
              }),
              (e = h),
              (r = u));
          }
          t = h;
        } else if (
          c.macd.dif < c.macd.dea &&
          p.macd.dif > p.macd.dea &&
          c.macd.dif < p.macd.dif
        ) {
          c.macdHelper = { status: "dead" };
          var v =
            (p.macd.dea - p.macd.dif) /
            (c.macd.dif + p.macd.dea - p.macd.dif - c.macd.dea);
          if (
            (Object.assign(c.macdHelper, {
              xRatio: v,
              dif: (c.macd.dif - p.macd.dif) * v + p.macd.dif,
            }),
            i && c.macdHelper.dif < this.list[i].macdHelper.dif)
          ) {
            for (
              var y = void 0,
                w = void 0,
                P = Number.MIN_SAFE_INTEGER,
                b = Number.MIN_SAFE_INTEGER,
                M = h - 1;
              M >= 0 && !(this.list[M].macd.macd < 0);
              M--
            )
              this.list[M].high > P && ((P = this.list[M].high), (y = M));
            for (var R = i - 1; R >= 0 && !(this.list[R].macd.macd < 0); R--)
              this.list[R].high > b && ((b = this.list[R].high), (w = R));
            y &&
              w &&
              P > b &&
              (Object.assign(c.macdHelper, {
                status: "dead-deviate",
                candleDate1: this.list[y].time,
                candleDate2: this.list[w].time,
              }),
              (s = h),
              (o = w));
          }
          i = h;
        }
      }
      this.setting.macdPatternFocus &&
        ("gold" === this.setting.macdPatternFocus
          ? ((a = e), (n = r))
          : "dead" === this.setting.macdPatternFocus && ((a = s), (n = o)),
        a &&
          n &&
          (this.macdPatternHelper = {
            item: this.list[a],
            delta: Math.max(0, this.list.length - n - this.count + 10),
          }));
    },
    calcMagicNine: function () {
      for (var t = this.list.length, i = 4; i < t; i++) {
        for (var e = !0, s = i; s < i + 9; s++) {
          if (!this.list[s]) {
            e = s - i >= 6;
            break;
          }
          if (this.list[s].close <= this.list[s - 4].close) {
            (e = !1), (i += s - i);
            break;
          }
        }
        if (e) {
          for (var r = i; r < i + 9 && r < t; r++)
            this.list[r].magicNine = r - i + 1;
          i += 8;
        }
      }
      for (var o = 4; o < t; o++) {
        for (var a = !0, n = o; n < o + 9; n++) {
          if (!this.list[n]) {
            a = n - o >= 6;
            break;
          }
          if (this.list[n] && this.list[n].close >= this.list[n - 4].close) {
            (a = !1), (o += n - o);
            break;
          }
        }
        if (a) {
          for (var h = o; h < o + 9 && h < t; h++)
            this.list[h].magicNine = -(h - o + 1);
          o += 8;
        }
      }
    },
    calcMagicNineGuide: function () {
      for (var t = this.list.length - 1; t >= 0; t--) {
        var i = this.list[t],
          e = +i.magicNine;
        if (e) {
          if (/Rise/.test(this.guideMode) && -9 === e) {
            (i.magicNineLatest = !0),
              (this.guideModeDelta = Math.max(
                0,
                this.list.length - t - this.count + 10
              ));
            break;
          }
          if (/Drop/.test(this.guideMode) && 9 === e) {
            (i.magicNineLatest = !0),
              (this.guideModeDelta = Math.max(
                0,
                this.list.length - t - this.count + 10
              ));
            break;
          }
        }
      }
    },
    calcTradeLine: function () {
      var t,
        i = 0,
        e = 0,
        s = h(this.list);
      try {
        for (s.s(); !(t = s.n()).done; ) {
          var r = t.value;
          if (r.opData) {
            var o = +r.opData.signal;
            o > 0 &&
              (o === i && (r.opData.signal = 0),
              (i = o),
              (1 !== o && 2 !== o) || (e = o)),
              1 === e
                ? (r.opData.style =
                    r.close >= r.preClose ? "rise solid" : "rise hollow")
                : 2 === e &&
                  (r.opData.style =
                    r.close >= r.preClose ? "drop hollow" : "drop solid");
          }
        }
      } catch (t) {
        s.e(t);
      } finally {
        s.f();
      }
    },
    calcTradeLineGuide: function () {
      for (var t = this.list.length - 1; t >= 0; t--) {
        var i = this.list[t];
        if (i.opData) {
          var e = +i.opData.signal;
          if (/Rise/.test(this.guideMode) && 1 === e) {
            (i.opData.latest = !0),
              (this.guideModeDelta = Math.max(
                0,
                this.list.length - t - this.count + 10
              ));
            break;
          }
          if (/Drop/.test(this.guideMode) && 2 === e) {
            (i.opData.latest = !0),
              (this.guideModeDelta = Math.max(
                0,
                this.list.length - t - this.count + 10
              ));
            break;
          }
        }
      }
    },
    fetchForInit: function (i) {
      return (
        (e = this),
        null,
        (s = t().mark(function e() {
          var s;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), this.fetchMore();
                  case 2:
                    if (!t.sent) {
                      t.next = 18;
                      break;
                    }
                    if (
                      (this.macdPatternHelper &&
                        ((s = this.macdPatternHelper.delta),
                        (this.index -= s),
                        (this.count += s)),
                      /Focus/.test(this.guideMode) &&
                        this.guideModeDelta > 0 &&
                        ((this.index -= this.guideModeDelta),
                        (this.count += this.guideModeDelta)),
                      this.updateMainViewData(),
                      i &&
                        i(
                          this.list.slice(this.index, this.index + this.count),
                          this.mainViewData
                        ),
                      (t.t1 = this.remindPrice),
                      !t.t1)
                    ) {
                      t.next = 12;
                      break;
                    }
                    return (t.next = 11), this.queryPriceRemind();
                  case 11:
                    t.t1 = t.sent;
                  case 12:
                    if (((t.t0 = t.t1), !t.t0)) {
                      t.next = 15;
                      break;
                    }
                    t.t0 = i;
                  case 15:
                    if (((t.t2 = t.t0), !t.t2)) {
                      t.next = 18;
                      break;
                    }
                    i(
                      this.list.slice(this.index, this.index + this.count),
                      this.mainViewData
                    );
                  case 18:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })),
        new Promise(function (t, i) {
          var r = function (t) {
              try {
                a(s.next(t));
              } catch (t) {
                i(t);
              }
            },
            o = function (t) {
              try {
                a(s.throw(t));
              } catch (t) {
                i(t);
              }
            },
            a = function (i) {
              return i.done ? t(i.value) : Promise.resolve(i.value).then(r, o);
            };
          a((s = s.apply(e, null)).next());
        })
      );
      var e, s;
    },
    fetchForSwipe: function (t, i) {
      if (
        ((this.needBounce = !1),
        (this.reachBoundary = !1),
        (yi = Math.round(this.count / 5)),
        t > 0)
      ) {
        if (this.list.length < this.count) return;
        this.index + t > this.list.length - this.count
          ? ((this.needBounce = !0),
            (this.index = Math.min(
              this.index + t,
              this.list.length - this.count + yi
            )),
            (this.reachBoundary =
              this.index === this.list.length - this.count + yi))
          : (this.index = this.index + t);
      } else if (t < 0) {
        if (this.index + t < 0)
          return (
            this.requestEnd && (yi = Math.round(this.count / 4)),
            (this.needBounce = !0),
            (this.index = Math.max(this.index + t, -yi)),
            (this.reachBoundary = this.index === -yi),
            this.getMainViewData(),
            void (
              i &&
              i(
                this.getBounceList().concat(
                  this.list.slice(0, this.index + this.count)
                ),
                this.mainViewData
              )
            )
          );
        (this.index = this.index + t),
          this.index <= 100 && !this.fetching && this.fetchMore();
      }
      this.getMainViewData(),
        i &&
          i(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    fetchBoundary: function (t) {
      var i = this;
      (this.needBounce = !1), (this.reachBoundary = !1);
      var s = Math.ceil(this.count / 30);
      if (this.index < 0) {
        this.requestEnd || ((vi = "加载中..."), t && t());
        var r = this.index,
          o = Math.abs(r),
          a = this.getBounceList().concat(this.list.slice(0, this.count)),
          n = e(this.trendline);
        this.fetchMore().then(function () {
          var h = e(i.trendline),
            c = setInterval(function () {
              (r = Math.min(r + s, 0)),
                (i.trendline = n),
                0 === r
                  ? (clearInterval(c),
                    (i.index = i.requestEnd ? 0 : i.index + o),
                    (i.trendline = h),
                    i.getMainViewData())
                  : i.getMainViewData(Math.abs(r)),
                t && t(a.slice(r + o, r + o + i.count), i.mainViewData);
            }, 16);
        });
      } else
        var h = setInterval(function () {
          (i.index = Math.max(i.index - s, i.list.length - i.count)),
            i.getMainViewData(),
            t && t(i.list.slice(i.index, i.index + i.count), i.mainViewData),
            i.index === i.list.length - i.count && clearInterval(h);
        }, 16);
    },
    fetchForPinch: function (t, i, e) {
      if (i < 0)
        this.count > 20 &&
          ((i = Math.abs(i)),
          (this.index += this.list.length < this.count ? 0 : Math.round(i * t)),
          (this.count -= i),
          this.getMainViewData(),
          e &&
            e({
              list: this.list.slice(this.index, this.index + this.count),
              extraData: this.mainViewData,
            }));
      else {
        var s =
          "kline-landscape" === this.layout
            ? this.maxKlineCount.landscape
            : this.maxKlineCount.portrait;
        if (this.count < s) {
          var r =
            i -
            Math.min(
              Math.round(i * (1 - t)),
              this.list.length - (this.index + this.count)
            );
          this.index < r && !this.requestEnd
            ? this.fetchMore()
            : ((this.index = Math.max(this.index - r, 0)),
              (this.count += i),
              this.getMainViewData(),
              e &&
                e({
                  list: this.list.slice(this.index, this.index + this.count),
                  extraData: this.mainViewData,
                }));
        } else e && e({ type: "line" });
      }
    },
    fetchMore: function () {
      var t = this;
      if (this.fetching || this.requestEnd) return Promise.resolve();
      this.fetching = !0;
      var i = (this.list && this.list[0] && this.list[0].time) || "";
      return new Promise(function (e, s) {
        t.request(i)
          .then(function (i) {
            var s = i && i.length;
            (t.requestEnd = 0 === s),
              (vi = t.requestEnd ? "已到上市首日" : "加载数据"),
              t.requestEnd ||
                (t.resetIndex(s),
                (t.list = i.concat(t.list)),
                t.format(),
                (t.trendline = t.getTrendline()),
                s < t.queryCount &&
                  ((t.requestEnd = !0), (vi = "已到上市首日"))),
              (t.fetching = !1),
              e(t.list);
          })
          .catch(function () {
            (vi = "加载数据"), (t.fetching = !1), s();
          });
      });
    },
    queryPriceRemind: function () {
      var t = this;
      return this.query()
        .then(function (i) {
          if (i && i.qlist && 0 !== i.qlist.length) {
            var e = i.qlist[0];
            +e.upflag && (t.mainViewData.remindPrice.upPrice = e.upprice),
              +e.downflag &&
                (t.mainViewData.remindPrice.downPrice = e.downprice);
          }
          return !0;
        })
        .catch(function (t) {});
    },
    resetIndex: function (t) {
      var i = this.list.length;
      this.index = i > 0 ? t + this.index : Math.max(t - this.count, 0);
    },
    getBounceList: function () {
      var t,
        i = Object.assign({ forBounce: !0 }, this.list[0]),
        e = h(this.indicatorList);
      try {
        for (e.s(); !(t = e.n()).done; ) {
          var r = t.value;
          if ("object" == s(i[r]))
            for (var o in ((i[r] = Object.assign({}, i[r])), i[r]))
              i[r][o] = void 0;
          else i[r] = void 0;
        }
      } catch (t) {
        e.e(t);
      } finally {
        e.f();
      }
      for (var a = [], n = -1; n >= this.index; n--) a.push(i);
      return a;
    },
    repaint: function (t) {
      t &&
        t(
          this.list.slice(this.index, this.index + this.count),
          this.mainViewData
        );
    },
    updateRepaint: function (t, i) {
      var e = this;
      if (Array.isArray(t) && t.length) {
        if (void 0 === this.list[0].opData && void 0 !== t[0].opData) {
          for (var s = 0; s < this.list.length && s < t.length; s++)
            this.list[s].opData = t[s].opData;
          this.calcTradeLine(),
            i &&
              i(
                this.list.slice(this.index, this.index + this.count),
                this.mainViewData
              );
        }
        if (this.list[this.list.length - 1].time === t[t.length - 1].time)
          Object.assign(this.list[this.list.length - 1], t[t.length - 1]);
        else {
          var r = t.findIndex(function (t) {
            return t.time === e.list[e.list.length - 1].time;
          });
          if (r > 0) {
            var o = t.splice(r + 1);
            Object.assign(this.list[this.list.length - 1], t[r]),
              this.list.splice(0, o.length),
              (this.list = this.list.concat(o));
          }
        }
      }
      this.format(),
        this.updateMainViewData(),
        (this.setting.lastestPrice ||
          this.index + this.count === this.list.length ||
          this.list.length <= this.count) &&
          i &&
          i(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    ZXRepaint: function (t, i) {
      t
        ? (this.list[this.list.length - 1].fh.since_add_zdf = "0.00")
        : this.list.forEach(function (t) {
            delete t.fh.since_add_zdf;
          }),
        i &&
          i(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    tradeRepaint: function (t, i) {
      t[0].bst_exist
        ? (exports.tradeShowBar = !0)
        : ((exports.tradeShowBar =
            !this.isWzqMiniProgram && !this.hideTradeBar),
          t.forEach(function (t) {
            var i = ""
              .concat(t.d.slice(0, 4), "-")
              .concat(t.d.slice(4, 6), "-")
              .concat(t.d.slice(6));
            wi.set(i, t.t);
          })),
        i &&
          i(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    tradeClear: function (t) {
      (exports.tradeShowBar = !1),
        wi.clear(),
        te.clear(),
        t &&
          t(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    macdPatternRepaint: function (t, i) {
      t && this.calcMACDGoldDead(),
        i &&
          i(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    magicNineRepaint: function (t, i) {
      t && this.calcMagicNine(),
        i &&
          i(
            this.list.slice(this.index, this.index + this.count),
            this.mainViewData
          );
    },
    tradeSecretRepaint: function (t, i) {
      var e = t.data,
        s = void 0 === e ? [] : e;
      if (void 0 === this.list[0].rally)
        for (var r = 0; r < s.length && r < this.list.length; r++)
          (this.list[r].tradeSecret = s[r].key_point),
            (this.list[r].rally = s[r].val / 1e3);
      else this.list[this.list.length - 1].rally = t.realtime_val / 1e3;
      i &&
        i(
          this.list.slice(this.index, this.index + this.count),
          this.mainViewData
        );
    },
    getSiblingData: function (t) {
      var i = 0,
        e = this.list.length - 1;
      if (this.list[0].time === t)
        return { index: 0, pre: null, now: this.list[0], next: this.list[1] };
      if (this.list[e].time === t)
        return {
          index: e,
          pre: this.list[e - 1],
          now: this.list[e],
          next: null,
        };
      for (; i < e; ) {
        var s = Math.round((i + e) / 2);
        if (this.list[s].time === t)
          return {
            index: s,
            pre: this.list[s - 1],
            now: this.list[s],
            next: this.list[s + 1],
          };
        this.list[s].time < t ? (i = s) : this.list[s].time > t && (e = s);
      }
      return { pre: null, now: null, next: null };
    },
    getRightData: function () {
      return this.list[this.index + this.count - 1];
    },
    updateMainViewData: function () {
      this.getLastestPrice(), this.getCurrTrendline();
    },
    getMainViewData: function () {
      this.getCurrTrendline();
    },
    getTrendline: function () {
      var t = this,
        i = [];
      return this.setting && "day" === this.type
        ? (this.list.forEach(function (e, s) {
            var r = i.length;
            if (0 !== r) {
              var o = t.list[s].close,
                a = i[r - 1],
                n = t.list[a].close,
                h = Math.abs((o - n) / n) >= 0.05;
              if (1 !== r) {
                var c = i[r - 2];
                n > t.list[c].close
                  ? o >= n
                    ? (i[r - 1] = s)
                    : h && i.push(s)
                  : o <= n
                  ? (i[r - 1] = s)
                  : h && i.push(s);
              } else h && i.push(s);
            } else i.push(0);
          }),
          i)
        : i;
    },
    getCurrTrendline: function (t) {
      var i, e;
      if (this.setting && this.setting.trendline && "day" === this.type) {
        var s,
          r,
          o = this.trendline.length,
          a = -1,
          n = -1;
        (this.mainViewData.currTrendline = { left: {}, right: {}, point: [] }),
          t
            ? ((s = 0), (r = this.count - t - 1))
            : ((s = Math.max(this.index, 0)),
              (r = this.index + this.count - 1));
        for (var h = 0; h < o; h++) {
          var c = this.trendline[h],
            p = void 0;
          if (c < s) a = c;
          else {
            if ((c === s && (a = -1), c === r && (n = -1), c > r)) {
              n = c;
              break;
            }
            (p = t ? c + t : this.index < 0 ? c + Math.abs(this.index) : c - s),
              this.mainViewData.currTrendline.point.push(p);
          }
        }
        -1 !== a &&
          ((this.mainViewData.currTrendline.left.intervalNum = s - a),
          (this.mainViewData.currTrendline.left.close =
            null == (i = this.list[a]) ? void 0 : i.close)),
          -1 !== n &&
            ((this.mainViewData.currTrendline.right.intervalNum = n - r + 1),
            (this.mainViewData.currTrendline.right.close =
              null == (e = this.list[n]) ? void 0 : e.close));
      }
    },
    getLastestPrice: function () {
      this.mainViewData.lastestPrice =
        this.list[this.list.length - 1] &&
        this.list[this.list.length - 1].close;
    },
    getChipList: function (t, i) {
      if (t)
        try {
          var e = this.list.findIndex(function (i) {
            return i.time === t.time;
          });
          return (
            (this.chipModel = new fi({
              list: this.list,
              targetIndex: e,
              type: this.type,
              crossPrice: i,
            })),
            this.chipModel.getData(e)
          );
        } catch (t) {
          throw new Error(t);
        }
    },
  });
var bi = (function (t) {
    r(s, ni);
    var i = o(s);
    function s(t, e, r, o, n, h, c, p, l) {
      var d;
      return (
        a(this, s),
        (d = i.call(this, t, e, r, o, n, h)),
        p && (d.max = p),
        l && (d.min = l),
        c && c.length > 0 && (d.indexTypes = c),
        (d.indicatorColor = {}),
        (d.loadPos = {
          show: !1,
          x: d.region.x,
          y: d.region.y + (7 * d.region.height) / 12,
        }),
        d
      );
    }
    return (
      n(s, [
        {
          key: "drawGrid",
          value: function () {
            var t = this.props.colorProp;
            new mt(
              this.ctx,
              {
                border: { color: t.border, lineWidth: t.border },
                vline: {
                  color: t.vline,
                  width: t.vline,
                  posx: this.props.posx,
                },
              },
              this.region
            );
          },
        },
        {
          key: "drawBottomLine",
          value: function () {
            var t = this.props,
              i = t.colorProp,
              e = t.devicePixelRatio,
              s = this.region,
              r = s.x,
              o = s.y,
              a = s.width,
              n = s.height,
              h = e;
            at(this.ctx, r, o + n, r + a, o + n, i.hline, null, null, null, h);
          },
        },
        {
          key: "drawLinearShapes",
          value: function () {
            var t = this;
            if (this.indexTypes && this.indexTypes.length > 0)
              this.indexTypes.map(function (i) {
                t.drawLines(
                  i,
                  t.data.items.map(function (t) {
                    return +t[i];
                  })
                );
              });
            else {
              var i = this.data.items[0][this.name];
              if ("number" == typeof i || void 0 === i)
                this.drawLines(
                  this.name,
                  this.data.items.map(function (i) {
                    return +i[t.name];
                  })
                );
              else {
                var e = function (e) {
                  Object.prototype.hasOwnProperty.call(i, e) &&
                    t.drawLines(
                      e,
                      t.data.items.map(function (i) {
                        return +i[t.name][e];
                      })
                    );
                };
                for (var s in i) e(s);
              }
            }
          },
        },
        {
          key: "drawLines",
          value: function (t, i) {
            var s = this,
              r = -1,
              o = -1;
            if ("close" === t) {
              var a = Math.max.apply(Math, e(i)),
                n = Math.min.apply(Math, e(i));
              (r = i.indexOf(a)),
                (o = i.indexOf(n)),
                this.props.fixedWidth &&
                  this.data.maxMin.candle &&
                  (a !== this.data.maxMin.candle.max ||
                    n !== this.data.maxMin.candle.min) &&
                  ((a = Math.max(a, this.data.maxMin.candle.max)),
                  (n = Math.min(n, this.data.maxMin.candle.min)),
                  (r = this.data.items.findIndex(function (t) {
                    return t.high === a;
                  })),
                  (o = this.data.items.findIndex(function (t) {
                    return t.low === n;
                  })));
            }
            var h = i.findIndex(function (t) {
              return !(void 0 === t || isNaN(t));
            });
            h >= 0 &&
              new Rt({
                ctx: this.ctx,
                region: this.region,
                drawCallback: function (i) {
                  s.drawLineItem(i, t, h, r, o);
                },
                data: { items: i, max: this.max, min: this.min },
                count: this.props.count,
              }),
              this.textArr &&
                this.textArr.length > 0 &&
                this.drawMaxMin(this.textArr),
              this.loadPos.show && this.drawLoadPos();
          },
        },
        {
          key: "drawLineItem",
          value: function (t, i, e, s, r) {
            if (!(t.index < e)) {
              var o = this.props,
                a = this.region,
                n = t.index,
                h = t.getX(n) + (this.isKline ? o.itemWidth / 2 : 0),
                c = t.getY(t.currItem),
                p = this.data.items[n];
              if (
                ("close" === i &&
                  p.forBounce &&
                  (this.loadPos = {
                    show: !0,
                    x:
                      this.region.x +
                      3 * (n - yi + 7) * this.props.devicePixelRatio,
                    y: this.region.y + (7 * this.region.height) / 12,
                  }),
                n === s)
              ) {
                var l = {
                  text: t.currItem,
                  x: h,
                  y: c,
                  originY: 0,
                  rightRegion: h > a.width / 2,
                  baseline: B,
                };
                this.props.fixedWidth &&
                  ((l.text = this.data.items[n].high),
                  (l.originY = c),
                  (l.y = t.getY(l.text)));
                var d = this.textArr ? [].concat(this.textArr) : [];
                d.push(l), (this.textArr = [].concat(d));
              }
              if (n === r) {
                var u = {
                  text: t.currItem,
                  x: h,
                  y: c,
                  originY: 0,
                  rightRegion: h > a.width / 2,
                  baseline: F,
                };
                this.props.fixedWidth &&
                  ((u.text = this.data.items[n].low),
                  (u.originY = c),
                  (u.y = t.getY(u.text)));
                var g = this.textArr ? [].concat(this.textArr) : [];
                g.push(u), (this.textArr = [].concat(g));
              }
              var x =
                this.indicatorColor[i] || this.getLineColor(o.colorProp, i);
              (this.indicatorColor[i] = x),
                nt(
                  this.ctx,
                  h,
                  c,
                  x,
                  this.props.lineProp.indicator,
                  t.index === e ? 0 : n,
                  t.length,
                  "round"
                );
            }
          },
        },
        {
          key: "getLineColor",
          value: function (t, i) {
            if (/^ma\d/.test(i)) {
              var e = +i.slice(2),
                s = (this.props.setting.maTypes || []).indexOf(e);
              return t.ma[s];
            }
            if (/^ema\d/.test(i)) {
              var r = +i.slice(3),
                o = (this.props.setting.emaTypes || []).indexOf(r);
              return t.ema[o];
            }
            if (/^volume\d/.test(i)) {
              var a = +i.slice(6),
                n = (this.props.setting.volumeTypes || []).indexOf(a);
              return t.ma[n];
            }
            if (/^cje\d/.test(i)) {
              var h = +i.slice(3),
                c = (this.props.setting.cjeTypes || []).indexOf(h);
              return t.ma[c];
            }
            return /close/.test(i)
              ? t.close
              : "string" == typeof t[this.name]
              ? t[this.name]
              : t[this.name][i];
          },
        },
        {
          key: "drawMaxMin",
          value: function (t) {
            var i,
              e,
              s,
              r,
              o,
              a,
              n,
              h = this.ctx,
              c = this.props.maxminDist,
              p = this.region;
            for (
              h.save(), h.translate(p.x, p.y + p.height / 2), i = 0;
              i < t.length;
              i++
            )
              if (t[i]) {
                (r = t[i].text).toFixed &&
                  (r = r.toFixed(this.props.fixNum || 2)),
                  (o = t[i].rightRegion),
                  (e = D(h, r, {
                    font: "400 "
                      .concat(10 * this.props.devicePixelRatio, "px ")
                      .concat(this.props.textProp.fontType),
                  })),
                  (a = t[i].x + (o ? -1 : 1) * this.props.devicePixelRatio),
                  (n = t[i].y),
                  (c = this.props.maxminDist),
                  a < 16 * this.props.devicePixelRatio
                    ? (c *= a < 5 * this.props.devicePixelRatio ? 4 : 2.5)
                    : (c = this.props.maxminDist),
                  (s = o ? a - c - e : a + c),
                  I(
                    h,
                    r,
                    Math.max(s, 0),
                    n,
                    {
                      baseLine: t[i].baseline,
                      color: this.props.colorProp.maxMin,
                      font: "400 "
                        .concat(10 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                    },
                    e
                  );
                var l = o ? Math.max(0, s + e) : s;
                at(
                  h,
                  Math.min(a, l),
                  n,
                  Math.max(a, l),
                  n,
                  this.props.colorProp.maxMinLine,
                  "dash",
                  null,
                  [5, 2],
                  this.props.lineProp.maxmin
                ),
                  this.drawTriangle({ x: a, y: n }, t[i]);
              }
            h.restore();
          },
        },
        {
          key: "drawTriangle",
          value: function (t, i) {
            var e = t.x,
              s = t.y,
              r = (this.props || {}).colorProp,
              o = void 0 === r ? {} : r,
              a =
                e +
                (i.rightRegion
                  ? this.props.lineProp.indicator
                  : -this.props.lineProp.indicator),
              n = {
                x1: a,
                y1: s > 0 ? i.originY : s,
                x2: a,
                y2: s > 0 ? s : i.originY,
              },
              h = {
                x1: a + (s > 0 ? -2 : 0) * this.props.devicePixelRatio,
                y1: s + (s > 0 ? -3 : 0) * this.props.devicePixelRatio,
                x2: a + (s > 0 ? 2 : -2) * this.props.devicePixelRatio,
                y2: s + (s > 0 ? -3 : 3) * this.props.devicePixelRatio,
                x3: a + (s > 0 ? 0 : 2) * this.props.devicePixelRatio,
                y3: s + (s > 0 ? 0 : 3) * this.props.devicePixelRatio,
              };
            ct(
              this.ctx,
              h.x1,
              h.y1,
              h.x2,
              h.y2,
              h.x3,
              h.y3,
              o.maxMinTip,
              o.maxMinTip
            ),
              at(
                this.ctx,
                n.x1,
                n.y1,
                n.x2,
                n.y2,
                o.maxMinTip,
                "dash",
                null,
                [5, 2],
                this.props.lineProp.maxmin
              );
          },
        },
        {
          key: "drawLoadPos",
          value: function () {
            I(this.ctx, vi, this.loadPos.x, this.loadPos.y, {
              color: "#3077EC",
              font: "400 "
                .concat(10 * this.props.devicePixelRatio, "px ")
                .concat(this.props.textProp.fontType),
            }),
              "kline-landscape" === this.props.layout &&
                kt(
                  this.ctx,
                  0,
                  this.region.y,
                  this.region.x,
                  this.region.y + this.region.height
                );
          },
        },
      ]),
      s
    );
  })(),
  Mi = (function (t) {
    r(e, bi);
    var i = o(e);
    function e(t, s, r, o, n, h, c) {
      return a(this, e), i.call(this, t, s, r, o, "ma", null, n, h, c);
    }
    return (
      n(e, [
        { key: "drawScale", value: function () {} },
        { key: "drawGrid", value: function () {} },
        { key: "drawBar", value: function () {} },
      ]),
      e
    );
  })(),
  Ri = (function (t) {
    r(e, ni);
    var i = o(e);
    function e(t, s, r, o, n, h, c) {
      var p;
      return (
        a(this, e),
        (p = i.call(this, t, s, r, o, n, h)).isKline &&
          (p.max = Math.max(s.maxMin[n].max, s.maxMin["".concat(n, "MA")].max)),
        (p.unit = r.isHKIndex ? "元" : c),
        p
      );
    }
    return (
      n(e, [
        {
          key: "draw",
          value: function () {
            this.props.isSplitRendCross ||
              (this.props.hideGrid ? this.drawBottomLine() : this.drawGrid(),
              this.notSupport
                ? this.drawEmptyData()
                : (this.drawLinearShapes(),
                  this.props.hideScale || this.drawScale(),
                  "kline-landscape" === this.props.layout &&
                    this.addStatusData() &&
                    (this.drawSpecialPoints(), this.drawSpecialTag()))),
              this.drawBar();
          },
        },
        {
          key: "drawEmptyData",
          value: function () {
            var t = {
                color: "#7A8499",
                font: "400 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: Y,
                baseLine: W,
              },
              i = this.region.x + this.region.width / 2,
              e = this.region.y + this.region.height / 2;
            I(this.ctx, "该类型暂不支持该指标", i, e, t);
          },
        },
        {
          key: "drawGrid",
          value: function () {
            var t = this.props.colorProp,
              i = this.props.lineProp;
            new mt(
              this.ctx,
              {
                border: { color: t.border, lineWidth: i.border },
                vline: {
                  color: t.vline,
                  width: i.vline,
                  posx: this.props.posx,
                },
              },
              this.region
            );
          },
        },
        {
          key: "drawBottomLine",
          value: function () {
            var t = this.props,
              i = t.colorProp,
              e = t.devicePixelRatio,
              s = this.region,
              r = s.x,
              o = s.y,
              a = s.width,
              n = s.height,
              h = e;
            at(this.ctx, r, o + n, r + a, o + n, i.hline, null, null, null, h);
          },
        },
        {
          key: "drawLinearShapes",
          value: function () {
            var t = this;
            if (
              0 !== this.max &&
              ((this.volumeList = { rise: [], drop: [], flat: [] }),
              new Rt({
                ctx: this.ctx,
                region: this.region,
                drawCallback: function (i) {
                  return t.drawItem(t.ctx, i, t.props);
                },
                data: {
                  items: this.data.items.map(function (i) {
                    return i[t.name];
                  }),
                  max: this.max,
                  min: 0,
                },
                count: this.props.count,
              }),
              !this.props.hideMA &&
                this.isKline &&
                this.props["".concat(this.name, "Types")].length > 0)
            ) {
              var i = this.props["".concat(this.name, "Types")]
                .filter(function (t) {
                  return t;
                })
                .map(function (i) {
                  return "".concat(t.name).concat(i);
                });
              new Mi(
                this.ctx,
                this.data,
                this.props,
                this.region,
                i,
                this.max,
                0
              ).draw();
            }
          },
        },
        {
          key: "drawScale",
          value: function () {
            var t = b(this.max, "cje" === this.name || this.props.isHKIndex),
              i = {
                font: "400 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: N,
                color: this.props.colorProp.yAxis,
              };
            /portrait/.test(this.props.layout)
              ? new _(
                  this.ctx,
                  P,
                  [
                    {
                      text: t.v + t.u + this.unit,
                      x: this.region.yAxis.x,
                      y: this.region.yAxis.y,
                      props: f(m({}, i), { baseLine: B }),
                    },
                  ],
                  this.region.yAxis
                ).draw()
              : new _(
                  this.ctx,
                  P,
                  [
                    {
                      text: t.v,
                      x: this.region.yAxis.x,
                      y: this.region.yAxis.y,
                      props: f(m({}, i), { baseLine: B }),
                    },
                    {
                      text: t.u + this.unit,
                      x: this.region.yAxis.x,
                      y: this.region.yAxis.y + this.region.yAxis.height,
                      props: f(m({}, i), { baseLine: F }),
                    },
                  ],
                  this.region.yAxis
                ).draw();
          },
        },
        {
          key: "drawItem",
          value: function (t, i, e) {
            var s = i.index,
              r = e.colorProp,
              o = i.currItem,
              a = this.data.items[s],
              n = e.itemWidth,
              h = i.getX(s) + (this.isKline ? n / 2 : 0),
              c = i.getY(o),
              p = this.isKline
                ? At(a.open, a.close, a.preClose, r.rise, r.drop, r.flat)
                : 0 === s ||
                  this.data.items[s].price >= this.data.items[s - 1].price
                ? r.rise
                : r.drop,
              l = {
                x: h - e.barWidth / 2,
                y: c,
                width: e.barWidth,
                height: this.region.height / 2 - c,
              };
            switch (p) {
              case r.rise:
                this.volumeList.rise.push(l);
                break;
              case r.drop:
                this.volumeList.drop.push(l);
                break;
              case r.flat:
                this.volumeList.flat.push(l);
            }
            i.index === i.length - 1 &&
              (ut(t, this.volumeList.rise, r.rise, r.rise),
              ut(t, this.volumeList.drop, r.drop, r.drop),
              ut(t, this.volumeList.flat, r.flat, r.flat));
          },
        },
      ]),
      e
    );
  })(),
  Ti = (function (t) {
    r(e, bi);
    var i = o(e);
    function e(t, s, r, o, n, h, c, p, l) {
      return a(this, e), i.call(this, t, s, r, o, n, h, c, p, l);
    }
    return (
      n(e, [
        {
          key: "drawScale",
          value: function () {
            var t = this.region.yAxis,
              i = {
                font: "400 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: N,
                baseLine: B,
                color: this.props.colorProp.yAxis,
              };
            new _(
              this.ctx,
              P,
              [
                {
                  text:
                    isNaN(this.max) || !isFinite(this.max)
                      ? "0.00"
                      : this.max.toFixed(2),
                  x: t.x + t.width,
                  y: t.y,
                  props: i,
                },
                {
                  text:
                    isNaN(this.min) || !isFinite(this.min)
                      ? "0.00"
                      : this.min.toFixed(2),
                  x: t.x + t.width,
                  y: t.y + t.height,
                  props: f(m({}, i), { baseLine: F }),
                },
              ],
              t
            ).draw();
          },
        },
      ]),
      e
    );
  })(),
  Ci = "boll",
  ki = (function (t) {
    r(e, Ti);
    var i = o(e);
    function e(t, s, r, o) {
      a(this, e);
      var n = Math.max(s.maxMin.kline.max, s.maxMin.boll.max),
        h = Math.min(s.maxMin.kline.min, s.maxMin.boll.min),
        c = r.setting["".concat(Ci, "Params")],
        p = c.deviation,
        l = c.width;
      return i.call(
        this,
        t,
        s,
        r,
        o,
        Ci,
        "(".concat(p, ",").concat(l, ")"),
        null,
        n,
        h
      );
    }
    return (
      n(e, [
        {
          key: "drawLinearShapes",
          value: function () {
            var t = this,
              i =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.data && this.data.items && 0 !== this.data.items.length) {
              var e = this.data.items;
              ["lower", "mid", "upper"].forEach(function (i) {
                var e = t.data.items.map(function (t) {
                    return t && t[Ci] ? t[Ci][i] : void 0;
                  }),
                  s = e.findIndex(function (t) {
                    return !(void 0 === t || isNaN(t));
                  });
                new Rt({
                  ctx: t.ctx,
                  region: t.region,
                  drawCallback: function (e) {
                    return t.drawLineItem(e, i, s);
                  },
                  data: { items: e, max: t.max, min: t.min },
                  count: t.props.count,
                });
              }),
                i ||
                  new Rt({
                    ctx: this.ctx,
                    region: this.region,
                    drawCallback: function (i) {
                      return t.drawKlineItem(i);
                    },
                    data: { items: e, max: this.max, min: this.min },
                    count: this.props.count,
                  });
            }
          },
        },
        {
          key: "drawLineItem",
          value: function (t, i, e) {
            var s = this.props,
              r = t.index;
            if (!(e < 0 || r < e)) {
              var o = t.getX(r) + s.itemWidth / 2,
                a = t.getY(t.currItem);
              nt(
                this.ctx,
                o,
                a,
                this.props.colorProp[Ci][i],
                this.props.lineProp.indicator,
                r === e ? 0 : r,
                t.length
              );
            }
          },
        },
        {
          key: "drawKlineItem",
          value: function (t) {
            if (!t.currItem.forBounce) {
              var i = t.index,
                e = this.data.items[i],
                s = t.getX(i) + this.props.itemWidth / 2;
              pt(
                this.ctx,
                {
                  open: t.getY(e.open),
                  close: t.getY(e.close),
                  low: t.getY(e.low),
                  high: t.getY(e.high),
                },
                s,
                this.props.itemWidth,
                this.props.colorProp[Ci].ochl,
                this.props.lineProp.ochl
              );
            }
          },
        },
      ]),
      e
    );
  })(),
  Ai = (function (t) {
    r(e, bi);
    var i = o(e);
    function e(t, s, r, o, n, h) {
      return a(this, e), i.call(this, t, s, r, o, n, h);
    }
    return (
      n(e, [
        {
          key: "drawScale",
          value: function () {
            var t = this.region.yAxis.x + this.region.yAxis.width,
              i = this.region.height / 100,
              e = {
                font: "400 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: N,
                baseLine: F,
                color: this.props.colorProp.yAxis,
              };
            new _(
              this.ctx,
              P,
              [
                {
                  text: 20,
                  x: t,
                  y: this.region.yAxis.y + 80 * i,
                  props: f(m({}, e), { baseLine: B }),
                },
                {
                  text: 50,
                  x: t,
                  y: this.region.yAxis.y + 50 * i,
                  props: f(m({}, e), { baseLine: W }),
                },
                { text: 80, x: t, y: this.region.yAxis.y + 20 * i, props: e },
              ],
              this.region.yAxis
            ).draw();
          },
        },
        {
          key: "drawGrid",
          value: function () {
            var t = this.props.colorProp,
              i = this.region.height / 100;
            new mt(
              this.ctx,
              {
                border: { color: t.border, lineWidth: t.border },
                vline: {
                  color: t.vline,
                  lineWidth: t.vline,
                  posx: this.props.posx,
                },
                hline: {
                  color: t.hline,
                  lineWidth: t.vline,
                  posy: [
                    { y: this.region.y + 80 * i },
                    { y: this.region.y + 50 * i },
                    { y: this.region.y + 20 * i },
                  ],
                },
              },
              this.region
            );
          },
        },
      ]),
      e
    );
  })(),
  Si = "ema",
  Li = "macd",
  Ii = "sar",
  Di = (function (t) {
    r(e, Ti);
    var i = o(e);
    function e(t, s, r, o) {
      a(this, e);
      var n = Math.max(s.maxMin.kline.max, s.maxMin.sar.max),
        h = Math.min(s.maxMin.kline.min, s.maxMin.sar.min);
      return i.call(
        this,
        t,
        s,
        r,
        {
          x: o.x,
          y: o.y + r.sarCirclrRadius,
          width: o.width,
          height: o.height - r.sarCirclrRadius,
          yAxis: o.yAxis,
          bar: o.bar,
        },
        Ii,
        "(4,2,20)",
        null,
        n,
        h
      );
    }
    return (
      n(e, [
        {
          key: "drawLinearShapes",
          value: function () {
            var t = this,
              i =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this.data.items,
              s = { rise: [], drop: [] };
            new Rt({
              ctx: this.ctx,
              region: this.region,
              drawCallback: function (i) {
                var e = i.getX(i.index) + t.props.itemWidth / 2,
                  r = i.getY(i.currItem),
                  o = t.getSarColor(t.data.items[i.index].close, i.currItem);
                if (!isNaN(r))
                  switch (o) {
                    case t.props.colorProp.rise:
                      s.rise.push({
                        x: e,
                        y: r,
                        radius: t.props.sarCirclrRadius,
                        color: o,
                        isFill: !1,
                      });
                      break;
                    case t.props.colorProp.drop:
                      s.drop.push({
                        x: e,
                        y: r,
                        radius: t.props.sarCirclrRadius,
                        color: o,
                        isFill: !1,
                      });
                  }
                i.index == i.length - 1 &&
                  (gt(t.ctx, s.rise, "#fff", t.props.colorProp.rise, 2),
                  gt(t.ctx, s.drop, "#fff", t.props.colorProp.drop, 2));
              },
              data: {
                items: e.map(function (t) {
                  return t.sar.sar;
                }),
                max: this.max,
                min: this.min,
              },
              count: this.props.count,
            }),
              i ||
                new Rt({
                  ctx: this.ctx,
                  region: this.region,
                  drawCallback: function (i) {
                    return t.drawOCHL(i);
                  },
                  data: { items: e, max: this.max, min: this.min },
                  count: this.props.count,
                });
          },
        },
        {
          key: "getSarColor",
          value: function (t, i) {
            return i <= t
              ? this.props.colorProp.rise
              : this.props.colorProp.drop;
          },
        },
        {
          key: "drawOCHL",
          value: function (t) {
            if (!t.currItem.forBounce) {
              var i = t.index,
                e = this.data.items[i],
                s = t.getX(i) + this.props.itemWidth / 2;
              pt(
                this.ctx,
                {
                  open: t.getY(e.open),
                  close: t.getY(e.close),
                  low: t.getY(e.low),
                  high: t.getY(e.high),
                },
                s,
                this.props.itemWidth,
                "#4280f2",
                this.props.lineProp.ochl
              );
            }
          },
        },
      ]),
      e
    );
  })(),
  Wi = "bbi",
  Bi = "ene",
  Fi = (function (t) {
    r(e, Ti);
    var i = o(e);
    function e(t, s, r, o) {
      a(this, e);
      var n = Math.max(s.maxMin.kline.max, s.maxMin.ene.max),
        h = Math.min(s.maxMin.kline.min, s.maxMin.ene.min);
      return i.call(this, t, s, r, o, Bi, "(11,9,10)", null, n, h);
    }
    return (
      n(e, [
        {
          key: "drawLinearShapes",
          value: function () {
            var t = this,
              i =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            i ||
              new Rt({
                ctx: this.ctx,
                region: this.region,
                drawCallback: function (i) {
                  if (!i.currItem.forBounce) {
                    var e = t.data.items[i.index],
                      s = i.getX(i.index) + t.props.itemWidth / 2;
                    pt(
                      t.ctx,
                      {
                        open: i.getY(e.open),
                        close: i.getY(e.close),
                        low: i.getY(e.low),
                        high: i.getY(e.high),
                      },
                      s,
                      t.props.itemWidth,
                      "#4280f2",
                      t.props.lineProp.ochl
                    );
                  }
                },
                data: { items: this.data.items, max: this.max, min: this.min },
                count: this.props.count,
              });
            for (
              var e = function () {
                  var i = r[s],
                    e = t.data.items.map(function (t) {
                      return t.ene[i];
                    }),
                    o = e.findIndex(function (t) {
                      return !(void 0 === t || isNaN(t));
                    });
                  new Rt({
                    ctx: t.ctx,
                    region: t.region,
                    drawCallback: function (e) {
                      var s = e.getX(e.index) + t.props.itemWidth / 2,
                        r = e.getY(e.currItem);
                      nt(
                        t.ctx,
                        s,
                        r,
                        t.props.colorProp.ene[i],
                        t.props.lineProp.indicator,
                        e.index === o ? 0 : e.index,
                        e.length
                      );
                    },
                    data: { items: e, max: t.max, min: t.min },
                    count: t.props.count,
                  });
                },
                s = 0,
                r = ["ene", "upper", "lower"];
              s < r.length;
              s++
            )
              e();
          },
        },
      ]),
      e
    );
  })(),
  Ei = (function () {
    function t(i, e, s, r) {
      a(this, t),
        (this.ctx = i),
        (this.props = e),
        (this.region = s),
        (this.activeObj = null),
        (this.data = r),
        (this.config = {
          minX: this.region.x,
          maxX: this.region.x + this.region.width,
          minCount: 22,
          bgColor: this.props.colorProp.chip.blue,
          area: {
            height: this.region.height,
            bgColor: "rgba(48, 119, 236, 0.1)",
          },
          closeBtn: {
            width: 18 * this.props.devicePixelRatio,
            height: 18 * this.props.devicePixelRatio,
            bgColor: "rgba(48, 119, 236, 0.2)",
            color: this.props.colorProp.chip.blue,
          },
        }),
        (this.move = C(1e3 / 60, this.moveShape)),
        this.init();
    }
    return (
      n(t, [
        {
          key: "init",
          value: function () {
            (this.points = {
              count: this.config.minCount,
              start: { y: this.region.y + this.region.height / 2 },
              end: {
                x:
                  this.region.x +
                  this.data.length * this.props.itemWidth -
                  this.props.itemWidth / 2,
                y: this.region.y + this.region.height / 2,
                data: this.data[this.data.length - 1],
              },
            }),
              (this.config.maxX =
                this.region.x + this.data.length * this.props.itemWidth),
              this.data.length < this.config.minCount
                ? ((this.points.start.x =
                    this.region.x + this.props.itemWidth / 2),
                  (this.points.start.data = this.data[0]))
                : ((this.points.start.x =
                    this.region.x +
                    (this.data.length - this.config.minCount) *
                      this.props.itemWidth +
                    this.props.itemWidth / 2),
                  (this.points.start.data =
                    this.data[this.data.length - this.config.minCount]));
          },
        },
        {
          key: "findTarget",
          value: function (t) {
            var i = this.isTapOperat(t);
            if (i) {
              if ("close" === i.target) return { action: "close" };
              this.activeObj = i;
            } else this.cancelActive();
          },
        },
        {
          key: "setData",
          value: function (t) {
            this.activeObj ||
              ((this.data = Array.isArray(t) ? t : this.data), this.init());
          },
        },
        {
          key: "moveShape",
          value: function (t, i) {
            if (this.activeObj) {
              var e = this.config,
                s = e.minX,
                r = e.maxX;
              switch (this.activeObj.target) {
                case "start":
                  this.points.start.x =
                    this.calcPointX(t) > s
                      ? Math.min(
                          this.calcPointX(t),
                          this.points.end.x - this.props.itemWidth
                        )
                      : s + this.props.itemWidth / 2;
                  break;
                case "end":
                  this.points.end.x =
                    this.calcPointX(t) < r - this.props.itemWidth / 2
                      ? Math.max(
                          this.calcPointX(t),
                          this.points.start.x + this.props.itemWidth
                        )
                      : r - this.props.itemWidth / 2;
                  break;
                case "area":
                  var o = this.calcPointX({
                    x: t.x - this.activeObj.distance.left,
                  });
                  o >
                    this.region.x +
                      this.region.width -
                      this.points.count * this.props.itemWidth &&
                    (o =
                      this.region.x +
                      this.region.width -
                      this.points.count * this.props.itemWidth +
                      this.props.itemWidth / 2),
                    (this.points.start.x = Math.max(
                      o,
                      s + this.props.itemWidth / 2
                    )),
                    (this.points.end.x = Math.min(
                      r - this.props.itemWidth / 2,
                      this.points.start.x +
                        this.props.itemWidth * (this.points.count - 1)
                    ));
              }
              this.updateShapeData(), i && i();
            }
          },
        },
        {
          key: "updateShapeData",
          value: function () {
            if (this.data && this.data.length) {
              var t = Math.floor(
                  (this.points.start.x - this.region.x) / this.props.itemWidth
                ),
                i = Math.floor(
                  (this.points.end.x - this.region.x) / this.props.itemWidth
                );
              this.data[t] &&
                ((this.points.start.data = this.data[t]),
                (this.points.start.preData = this.data[t])),
                this.data[i] &&
                  ((this.points.end.data = this.data[i]),
                  (this.points.end.preData = this.data[i])),
                (this.points.count = Math.abs(i - t) + 1);
            }
          },
        },
        {
          key: "update",
          value: function (t, i) {
            var e = this,
              s = i.props,
              r = i.region,
              o = i.list,
              a = this.points,
              n = a.start,
              h = a.end,
              c = this.region.x + this.region.width / 2;
            switch (t) {
              case "chip":
                (this.props = s),
                  (this.region = r),
                  (this.data = o),
                  (this.config.maxX = this.region.x + this.region.width);
                break;
              case "scale":
                (this.props = s),
                  (this.data = o),
                  this.points.start.preData ||
                    ((this.points.start.preData = this.points.start.data),
                    (this.points.end.preData = this.points.end.data));
                break;
              case "swipe":
                (this.data = o),
                  this.points.start.preData &&
                    ((this.points.start.preData = null),
                    (this.points.end.preData = null));
            }
            var p = -1,
              l = -1;
            if ("swipe" === t)
              return (
                (p = Math.floor(
                  (this.points.start.x - this.region.x) / this.props.itemWidth
                )),
                (l = Math.min(
                  Math.floor(
                    (this.points.end.x - this.region.x) / this.props.itemWidth
                  ),
                  this.data.length - 1
                )),
                p >= this.data.length - 1 &&
                  (p = this.data.length - this.points.count),
                (n.data = this.data[p]),
                (h.data = this.data[l]),
                void (this.points.count = Math.abs(l - p) + 1)
              );
            this.data.map(function (t, i) {
              t.time === (n.preData ? n.preData.time : n.data.time) &&
                i !== e.data.length - 1 &&
                ((p = i),
                (n.data = t),
                (n.x = e.region.x + (i + 0.5) * e.props.itemWidth)),
                t.time === (h.preData ? h.preData.time : h.data.time) &&
                  ((l = i),
                  (h.data = t),
                  (h.x = e.region.x + (i + 0.5) * e.props.itemWidth));
            }),
              -1 === p &&
                (n.x < c
                  ? ((p = 0), (n.x = this.region.x + this.props.itemWidth / 2))
                  : ((p = this.data.length - 2),
                    (n.x =
                      this.region.x +
                      p * this.props.itemWidth +
                      this.props.itemWidth / 2)),
                (n.data = this.data[p])),
              -1 === l &&
                (h.x < c
                  ? ((l = 1),
                    (h.x = this.region.x + 1.5 * this.props.itemWidth))
                  : ((l = this.data.length - 1),
                    (h.x =
                      this.region.x +
                      l * this.props.itemWidth +
                      this.props.itemWidth / 2)),
                (h.data = this.data[l])),
              (this.points.count = Math.abs(l - p) + 1);
          },
        },
        {
          key: "calcPointX",
          value: function (t) {
            var i = this.region.x + this.props.itemWidth / 2,
              e = this.region.x + this.region.width - this.props.itemWidth / 2,
              s =
                this.region.x +
                (Math.floor((t.x - this.region.x) / this.props.itemWidth) +
                  0.5) *
                  this.props.itemWidth;
            return s < i ? i : s > e ? e : s;
          },
        },
        {
          key: "isTapOperat",
          value: function (t) {
            var i = this.points,
              e = i.start,
              s = i.end,
              r = {
                x: Math.min(e.x, s.x),
                y: this.region.y,
                width: Math.abs(s.x - e.x),
                height: this.region.height,
              },
              o = {
                x: Math.min(
                  Math.max(0, r.x - 5 * this.props.devicePixelRatio),
                  this.region.x +
                    this.region.width -
                    10 * this.props.devicePixelRatio
                ),
                y: this.region.y,
                width: 10 * this.props.devicePixelRatio,
                height: this.region.height,
              },
              a = {
                x: Math.min(
                  Math.max(0, r.x + r.width - 5 * this.props.devicePixelRatio),
                  this.region.x +
                    this.region.width -
                    10 * this.props.devicePixelRatio
                ),
                y: this.region.y,
                width: 10 * this.props.devicePixelRatio,
                height: this.region.height,
              },
              n = {
                x: Math.min(e.x, s.x),
                y: this.region.y,
                width: this.config.closeBtn.width,
                height: this.config.closeBtn.height,
              };
            return this.isPointInRegion(t, n)
              ? { target: "close" }
              : this.isPointInRegion(t, a)
              ? { target: "end" }
              : this.isPointInRegion(t, o)
              ? { target: "start" }
              : this.isPointInRegion(t, r)
              ? {
                  target: "area",
                  distance: {
                    left: Math.abs(t.x - e.x),
                    right: Math.abs(t.x - s.x),
                  },
                }
              : void 0;
          },
        },
        {
          key: "isPointInRegion",
          value: function (t, i) {
            return (
              i &&
              t.x >= i.x &&
              t.x <= i.x + i.width &&
              t.y >= i.y &&
              t.y <= i.y + i.height
            );
          },
        },
        {
          key: "cancelActive",
          value: function () {
            this.activeObj = null;
          },
        },
        {
          key: "getActive",
          value: function () {
            return this.activeObj;
          },
        },
        {
          key: "drawClose",
          value: function () {
            var t = this.config.closeBtn,
              i = t.bgColor,
              e = t.color,
              s = t.width,
              r = t.height,
              o = this.points,
              a = o.start,
              n = o.end,
              h = this.props.devicePixelRatio,
              c = { x: Math.min(a.x, n.x), y: this.region.y };
            ot(this.ctx, c.x, c.y, s, r, 4, i, i, 0),
              at(
                this.ctx,
                c.x + 5 * h,
                c.y + 5 * h,
                c.x + 13 * h,
                c.y + 13 * h,
                e,
                "",
                null,
                null,
                2 * h
              ),
              at(
                this.ctx,
                c.x + 13 * h,
                c.y + 5 * h,
                c.x + 5 * h,
                c.y + 13 * h,
                e,
                "",
                null,
                null,
                2 * h
              );
          },
        },
        {
          key: "drawArea",
          value: function () {
            var t = this.config.area.bgColor,
              i = this.points,
              e = i.start,
              s = i.end,
              r = Math.min(e.x, s.x),
              o = Math.max(e.x, s.x),
              a = this.props.devicePixelRatio;
            rt(
              this.ctx,
              r,
              this.region.y,
              Math.abs(o - r),
              this.region.height,
              t,
              t,
              0
            ),
              at(
                this.ctx,
                r,
                this.region.y,
                r,
                this.region.y + this.region.height,
                this.config.bgColor,
                "dash",
                null,
                [10, 5],
                1 * a
              ),
              at(
                this.ctx,
                o,
                this.region.y,
                o,
                this.region.y + this.region.height,
                this.config.bgColor,
                "dash",
                null,
                [10, 5],
                1 * a
              ),
              ht(this.ctx, r, this.region.y + this.region.height / 2, 36, t, t),
              ht(
                this.ctx,
                r,
                this.region.y + this.region.height / 2,
                12,
                this.config.bgColor,
                this.config.bgColor
              ),
              ht(this.ctx, o, this.region.y + this.region.height / 2, 36, t, t),
              ht(
                this.ctx,
                o,
                this.region.y + this.region.height / 2,
                12,
                this.config.bgColor,
                this.config.bgColor
              );
          },
        },
        {
          key: "drawDateTips",
          value: function () {
            var t = this,
              i = {
                color: this.props.colorProp.chip.text,
                font: "600 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: Y,
                baseLine: W,
              },
              e = this.points,
              s = e.start,
              r = e.end,
              o = 4 * this.props.devicePixelRatio,
              a = function (t) {
                return isNaN(t)
                  ? t
                  : ""
                      .concat(t.substr(0, 4), "-")
                      .concat(t.substr(4, 2), "-")
                      .concat(t.substr(6, 2), " ")
                      .concat(t.substr(8, 2), ":")
                      .concat(t.substr(-2));
              },
              n = s.data && s.data.time ? a(s.data.time) : "",
              h = r.data && r.data.time ? a(r.data.time) : "",
              c = D(this.ctx, n, i),
              p = {
                width: c + 2 * o,
                height: 15 * this.props.devicePixelRatio,
                top: this.region.y + this.region.height,
              },
              l = function (i, e) {
                var o = i - p.width / 2,
                  a = Math.abs(r.x - s.x);
                switch (e) {
                  case "start":
                    i < t.region.x + p.width / 2
                      ? (o = t.region.x)
                      : a < p.width &&
                        (i < t.region.x + p.width
                          ? (o = Math.max(t.region.x, i - p.width / 2 - a / 2))
                          : (o -= Math.abs(p.width / 2 - a / 2))),
                      i > t.region.x + t.region.width - 1.5 * p.width &&
                        (o = t.region.x + t.region.width - 2 * p.width);
                    break;
                  case "end":
                    i < t.region.x + 1.5 * p.width
                      ? (o = t.region.x + p.width)
                      : a < p.width && (o += Math.abs(p.width / 2 - a / 2)),
                      i > t.region.x + t.region.width - p.width / 2 &&
                        (o = t.region.x + t.region.width - p.width);
                }
                return o;
              };
            ot(
              this.ctx,
              l(s.x, "start"),
              p.top,
              p.width,
              p.height,
              2 * this.props.devicePixelRatio,
              this.activeObj && "start" === this.activeObj.target
                ? this.props.colorProp.chip.blue
                : this.props.colorProp.chip.subText,
              this.activeObj && "start" === this.activeObj.target
                ? this.props.colorProp.chip.blue
                : this.props.colorProp.chip.white,
              1
            ),
              I(
                this.ctx,
                n,
                l(s.x, "start") + p.width / 2,
                Math.ceil(p.top + p.height / 2),
                f(m({}, i), {
                  color:
                    this.activeObj && "start" === this.activeObj.target
                      ? this.props.colorProp.chip.activeText
                      : this.props.colorProp.chip.text,
                }),
                c
              ),
              ot(
                this.ctx,
                l(r.x, "end"),
                p.top,
                p.width,
                p.height,
                2 * this.props.devicePixelRatio,
                this.activeObj && "end" === this.activeObj.target
                  ? this.props.colorProp.chip.blue
                  : this.props.colorProp.chip.subText,
                this.activeObj && "end" === this.activeObj.target
                  ? this.props.colorProp.chip.blue
                  : this.props.colorProp.chip.white,
                1
              ),
              I(
                this.ctx,
                h,
                l(r.x, "end") + p.width / 2,
                Math.ceil(p.top + p.height / 2),
                f(m({}, i), {
                  color:
                    this.activeObj && "end" === this.activeObj.target
                      ? this.props.colorProp.chip.activeText
                      : this.props.colorProp.chip.text,
                }),
                c
              );
          },
        },
        {
          key: "drawTopTips",
          value: function () {
            var t = 4 * this.props.devicePixelRatio,
              i = this.getTipBarData();
            if (i) {
              var e = i.rangeIncrease,
                s = i.rangeBarText,
                r = "".concat(s, " ").concat(
                  (function (t) {
                    var i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 2,
                      e =
                        !(arguments.length > 2 && void 0 !== arguments[2]) ||
                        arguments[2];
                    if (!isNaN(t)) {
                      var s = 100 * parseFloat(t);
                      return ""
                        .concat(e && s > 0 ? "+" : "")
                        .concat(s.toFixed(i), "%");
                    }
                  })(e)
                ),
                o = +e > 0,
                a = 0 == +e,
                n = {
                  color: o
                    ? this.props.colorProp.rise
                    : a
                    ? this.props.colorProp.flat
                    : this.props.colorProp.drop,
                  font: "600 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                h = D(this.ctx, r, n) + 2 * t,
                c = {
                  x: Math.max(
                    this.region.x,
                    Math.max(this.points.start.x, this.points.end.x) - h
                  ),
                  y: this.region.y - 15 * this.props.devicePixelRatio,
                  width: h,
                  height: 15 * this.props.devicePixelRatio,
                  borderColor: o
                    ? this.props.colorProp.areaSelect.top.border.rise
                    : this.props.colorProp.areaSelect.top.border[
                        a ? "flat" : "drop"
                      ],
                  bgColor: o
                    ? this.props.colorProp.areaSelect.top.bgColor.rise
                    : this.props.colorProp.areaSelect.top.bgColor[
                        a ? "flat" : "drop"
                      ],
                };
              ot(
                this.ctx,
                c.x,
                c.y,
                c.width,
                c.height,
                2 * this.props.devicePixelRatio,
                c.borderColor,
                c.bgColor,
                3
              ),
                I(
                  this.ctx,
                  r,
                  c.x + c.width / 2,
                  Math.ceil(c.y + c.height / 2),
                  n,
                  h
                );
            }
          },
        },
        {
          key: "draw",
          value: function () {
            this.drawTopTips(),
              this.drawArea(),
              this.drawClose(),
              this.drawDateTips();
          },
        },
        {
          key: "getTipBarData",
          value: function () {
            var t = this.points,
              i = t.start,
              e = t.end,
              s = -1,
              r = -1;
            this.data.map(function (t, o) {
              t.time &&
                (i.data && t.time === i.data.time && (s = o),
                e.data && t.time === e.data.time && (r = o));
            });
            var o = this.data.filter(function (t, i) {
              if (i >= Math.min(s, r) && i <= Math.max(s, r)) return t;
            });
            if (!(o.length <= 1)) {
              var a = {
                count: o.length,
                startTime: null,
                endTime: null,
                startPrice: null,
                endPrice: null,
                maxPrice: 0,
                minPrice: 0,
                cjl: 0,
                cje: 0,
                hsl: 0,
                zf: 0,
                rangeIncrease: 0,
                rangeText: "",
                rangeBarText: "",
              };
              switch (
                (o.map(function (t, i) {
                  0 == i &&
                    ((a.startTime = t.time),
                    (a.startPrice = t.preClose),
                    (a.minPrice = t.low)),
                    i === o.length - 1 &&
                      ((a.endTime = t.time), (a.endPrice = t.close)),
                    (a.maxPrice = Math.max(a.maxPrice, t.high)),
                    (a.minPrice = Math.min(a.minPrice, t.low)),
                    (a.cje += t.cje || 0),
                    (a.hsl +=
                      (Object.prototype.hasOwnProperty.call(t, "exchangeRaw")
                        ? +t.exchangeRaw
                        : +t.hsl) || 0),
                    (a.cjl += t.volume || 0);
                }),
                (a.zf = (a.maxPrice - a.minPrice) / Math.abs(a.startPrice)),
                (a.rangeIncrease =
                  (a.endPrice - a.startPrice) / Math.abs(a.startPrice)),
                this.props.type)
              ) {
                case "day":
                case "oneMonth":
                case "threeMonth":
                case "halfYear":
                case "oneYear":
                case "threeYear":
                case "fiveYear":
                  (a.rangeText = "".concat(a.count, "个交易日")),
                    (a.rangeBarText = "".concat(a.count, "天"));
                  break;
                case "week":
                case "allYear":
                  (a.rangeText = "".concat(a.count, "周")),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "month":
                  (a.rangeText = "".concat(a.count, "个月")),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "season":
                  (a.rangeText = "".concat(a.count, "个季度")),
                    (a.rangeBarText = "".concat(a.count, "季度"));
                  break;
                case "year":
                  (a.rangeText = "".concat(a.count, "年")),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "m1":
                  (a.rangeText = "".concat(a.count, "分钟")),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "m5":
                  (a.rangeText = 5 * a.count + "分钟"),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "m15":
                  (a.rangeText = 15 * a.count + "分钟"),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "m30":
                  (a.rangeText = 30 * a.count + "分钟"),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "m60":
                  (a.rangeText = "".concat(a.count, "小时")),
                    (a.rangeBarText = a.rangeText);
                  break;
                case "m120":
                  (a.rangeText = 2 * a.count + "小时"),
                    (a.rangeBarText = a.rangeText);
              }
              return a;
            }
          },
        },
      ]),
      t
    );
  })();
exports.swiping = !1;
var Ni = (function () {
    function t(i, e, s, r, o) {
      a(this, t),
        (this.ctx = i),
        (this.data = e.items),
        (this.mainViewData = s),
        (this.props = r),
        (this.region = o);
      var n = k(e, r),
        h = n.max,
        c = n.min;
      (this.max = h),
        (this.min = c),
        (this.diff = -1),
        (this.count = r.count),
        r.count || (this.count = this.data.items.length);
    }
    return (
      n(t, [
        {
          key: "traverseData",
          value: function (t) {
            var i = this,
              e = this.props.itemWidth;
            this.data.forEach(function (s, r) {
              t({
                index: r,
                x: i.dataToCoord().getX(r) + e / 2,
                y1: i.dataToCoord().getY(s.open),
                y2: i.dataToCoord().getY(s.close),
                bottomY: i.dataToCoord().getY(s.low),
                topY: i.dataToCoord().getY(s.high),
              });
            });
          },
        },
        {
          key: "dataToCoord",
          value: function () {
            var t = this,
              i = (this.max + this.min) / 2,
              e = this.region.chart;
            return (
              (this.diff = Math.max(
                Math.abs(this.max - i),
                Math.abs(this.min - i)
              )),
              {
                getX: function (i) {
                  return (e.width / t.count) * i;
                },
                getY: function (s) {
                  return 0 === t.diff
                    ? 0
                    : (-(s - i) / t.diff) * (e.height / 2);
                },
              }
            );
          },
        },
        {
          key: "formatMoney",
          value: function (t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
            return t.toFixed(i);
          },
        },
      ]),
      t
    );
  })(),
  Yi = (function (t) {
    r(e, Ni);
    var i = o(e);
    function e(t, s, r, o, n) {
      return a(this, e), i.call(this, t, s, r, o, n);
    }
    return (
      n(e, [
        {
          key: "draw",
          value: function () {
            if (
              (this.getIndicatorData(), "number" == typeof this.lastestPrice)
            ) {
              var t = this.getLastestPriceCoord();
              t && this.drawLastestPriceLine(t);
            }
          },
        },
        {
          key: "getIndicatorData",
          value: function () {
            this.props.setting &&
              this.props.setting.lastestPrice &&
              (this.lastestPrice = this.mainViewData.lastestPrice);
          },
        },
        {
          key: "getLastestPriceCoord",
          value: function () {
            var t;
            return (
              this.lastestPrice >= this.min &&
                this.lastestPrice <= this.max &&
                (t = this.dataToCoord().getY(this.lastestPrice)),
              t
            );
          },
        },
        {
          key: "drawLastestPriceLine",
          value: function (t) {
            this.ctx.save();
            var i = this.ctx,
              e = this.region.chart,
              s = e.width,
              r = t,
              o = 1 * this.props.devicePixelRatio;
            i.translate(e.x, e.y + e.height / 2),
              at(
                this.ctx,
                0,
                r,
                s,
                r,
                "rgba(48, 119, 236, 0.6)",
                "dash",
                null,
                null,
                o
              ),
              this.ctx.restore();
          },
        },
      ]),
      e
    );
  })(),
  _i = (function (t) {
    r(e, Ni);
    var i = o(e);
    function e(t, s, r, o, n) {
      return a(this, e), i.call(this, t, s, r, o, n);
    }
    return (
      n(e, [
        {
          key: "draw",
          value: function () {
            this.getIndicatorData(),
              M(this.remindPrice) ||
                (this.getRemindPriceCoord(),
                this.upPriceY && this.drawRemindPriceLine("upPrice"),
                this.downPriceY && this.drawRemindPriceLine("downPrice"));
          },
        },
        {
          key: "getIndicatorData",
          value: function () {
            (this.remindPrice = this.mainViewData.remindPrice),
              (this.upPriceY = void 0),
              (this.downPriceY = void 0);
          },
        },
        {
          key: "getRemindPriceCoord",
          value: function () {
            if (this.remindPrice) {
              var t = this.remindPrice,
                i = t.upPrice,
                e = t.downPrice;
              i >= this.min &&
                i <= this.max &&
                (this.upPriceY = this.dataToCoord().getY(+i)),
                e >= this.min &&
                  e <= this.max &&
                  (this.downPriceY = this.dataToCoord().getY(+e));
            }
          },
        },
        {
          key: "drawRemindPriceLine",
          value: function (t) {
            var i = this.ctx;
            if (this.remindPrice) {
              var e = this.remindPrice,
                s = e.upPrice,
                r = e.downPrice,
                o = "upPrice" === t ? s : r,
                a = "upPrice" === t ? this.upPriceY : this.downPriceY;
              i.save();
              var n = this.props.devicePixelRatio,
                h = "".concat(o),
                c = ""
                  .concat(10 * n, "px ")
                  .concat(this.props.textProp.fontType),
                p = D(i, h, { font: c }),
                l = 10 * n,
                d = 11 * n,
                u = 11 * n,
                g = this.region.chart,
                x = a,
                m = x,
                f = x - u / 2,
                v = 1 * this.props.devicePixelRatio;
              x < -g.height / 2 + l / 2
                ? (m = -g.height / 2 + l / 2)
                : x > g.height / 2 - l / 2 && (m = g.height / 2 - l / 2),
                f < -g.height / 2
                  ? (f = -g.height / 2)
                  : f > g.height / 2 - u && (f = g.height / 2 - u),
                i.translate(g.x, g.y + g.height / 2),
                I(
                  i,
                  h,
                  p / 2,
                  m,
                  { color: "#FFB470", font: c, textAlign: Y, baseLine: W },
                  p
                ),
                this.ctx.drawImage(ei.getImg("REMIND_BELL"), p, f, d, u),
                at(
                  i,
                  p + d,
                  x,
                  g.width,
                  x,
                  "rgba(255, 137, 30, 0.6)",
                  "dash",
                  null,
                  null,
                  v
                ),
                i.restore();
            }
          },
        },
      ]),
      e
    );
  })(),
  Oi = (function (t) {
    r(e, Ni);
    var i = o(e);
    function e(t, s, r, o, n) {
      return a(this, e), i.call(this, t, s, r, o, n);
    }
    return (
      n(e, [
        {
          key: "draw",
          value: function () {
            var t = this;
            this.getIndicatorData(),
              M(this.trendline) ||
                (this.traverseData(function (i) {
                  return t.getTrendlineCoord(i);
                }),
                this.processTrendlineCoord(),
                this.trendlineCoord.point.length > 1 && this.drawTrendline());
          },
        },
        {
          key: "getIndicatorData",
          value: function () {
            (this.trendline = this.mainViewData.currTrendline),
              (this.trendlineCoord = { left: {}, point: [], right: {} }),
              (this.firstTime = !0);
          },
        },
        {
          key: "getTrendlineCoord",
          value: function (t) {
            var i = this.props.itemWidth,
              e = this.region.chart.width,
              s = t.index,
              r = t.x,
              o = t.y2;
            if (
              (-1 !==
                this.trendline.point.findIndex(function (t) {
                  return t === s;
                }) && this.trendlineCoord.point.push({ x: r, y: o }),
              this.firstTime)
            ) {
              if (
                ((this.firstTime = !1), Object.keys(this.trendline.left).length)
              ) {
                var a = this.trendline.left,
                  n = a.intervalNum,
                  h = a.close,
                  c = i / 2 - this.dataToCoord().getX(n),
                  p = this.dataToCoord().getY(h);
                (this.trendlineCoord.left.x = c),
                  (this.trendlineCoord.left.y = p);
              }
              if (Object.keys(this.trendline.right).length) {
                var l = this.trendline.right,
                  d = l.intervalNum,
                  u = l.close,
                  g = e + this.dataToCoord().getX(d) - i / 2,
                  x = this.dataToCoord().getY(u);
                (this.trendlineCoord.right.x = g),
                  (this.trendlineCoord.right.y = x);
              }
            }
          },
        },
        {
          key: "processTrendlineCoord",
          value: function () {
            var t,
              i,
              e = Object.keys(this.trendlineCoord.left).length,
              s = Object.keys(this.trendlineCoord.right).length,
              r = this.trendlineCoord.point.length;
            if (e && (r || s)) {
              (t = this.trendlineCoord.left),
                (i = r
                  ? this.trendlineCoord.point[0]
                  : this.trendlineCoord.right);
              var o = this.getAxisIntersection(t, i, "left"),
                a = o.x,
                n = o.y;
              a !== 1 / 0
                ? ((this.trendlineCoord.left.x = a),
                  (this.trendlineCoord.left.y = n),
                  this.trendlineCoord.point.unshift({ x: a, y: n }),
                  r++)
                : (this.trendlineCoord.left = {});
            }
            if (s && r) {
              (t = this.trendlineCoord.right),
                (i = this.trendlineCoord.point[r - 1]);
              var h = this.getAxisIntersection(t, i, "right"),
                c = h.x,
                p = h.y;
              c !== 1 / 0
                ? ((this.trendlineCoord.right.x = c),
                  (this.trendlineCoord.right.y = p),
                  this.trendlineCoord.point.push({ x: c, y: p }))
                : (this.trendlineCoord.right = {});
            }
          },
        },
        {
          key: "getAxisIntersection",
          value: function (t, i, e) {
            var s = { x: 1 / 0, y: 1 / 0 },
              r = this.region.chart,
              o = r.width,
              a = r.height,
              n = o / this.props.count,
              h = (i.y - t.y) / (i.x - t.x),
              c = t.y - h * t.x,
              p = "left" === e ? n / 2 : o - n / 2,
              l = h * p + c;
            if (Math.abs(l) <= a / 2) (s.x = p), (s.y = l);
            else if (l < -a / 2) {
              var d = (-a / 2 - c) / h;
              d >= 0 && d <= o && ((s.x = d), (s.y = -a / 2));
            } else if (l > a / 2) {
              var u = (a / 2 - c) / h;
              u >= 0 && u <= o && ((s.x = u), (s.y = a / 2));
            }
            return s;
          },
        },
        {
          key: "drawTrendline",
          value: function () {
            var t = this.ctx,
              i = this.region.chart,
              e = this.trendlineCoord.point.length,
              s = Object.keys(this.trendlineCoord.left).length,
              r = Object.keys(this.trendlineCoord.right).length,
              o = this.props.devicePixelRatio,
              a = 2.5 * o,
              n = 1.5 * o,
              h = "#3077EC";
            t.save(),
              t.translate(i.x, i.y + i.height / 2),
              this.trendlineCoord.point.forEach(function (i, o) {
                var n = i.x,
                  c = i.y;
                (s && 0 === o) || (r && o === e - 1) || ht(t, n, c, a, h, h);
              }),
              this.trendlineCoord.point.forEach(function (i, s) {
                var r = i.x,
                  o = i.y;
                nt(t, r, o, h, n, s, e);
              }),
              t.restore();
          },
        },
      ]),
      e
    );
  })(),
  Hi = (function (t) {
    r(e, Ni);
    var i = o(e);
    function e(t, s, r, o, n) {
      var h;
      return (
        a(this, e),
        ((h = i.call(this, t, s, r, o, n)).supportLine = {}),
        (h.pressureLine = {}),
        h
      );
    }
    return (
      n(e, [
        {
          key: "draw",
          value: function () {
            if ((this.getIndicatorData(), this.boll)) {
              this.getSupportPressureLineCoord();
              var t = this.region.chart.height;
              Math.abs(this.pressureLine && this.pressureLine.coord) <= t / 2 &&
                this.drawSupportOrPressureLine("pressure"),
                Math.abs(this.supportLine && this.supportLine.coord) <= t / 2 &&
                  this.drawSupportOrPressureLine("support");
            }
          },
        },
        {
          key: "getIndicatorData",
          value: function () {
            this.boll =
              this.data.length &&
              this.data[this.data.length - 1] &&
              this.data[this.data.length - 1].defboll;
          },
        },
        {
          key: "getSupportPressureLineCoord",
          value: function () {
            var t = this.boll,
              i = t.upper,
              e = t.mid,
              s = t.lower,
              r = this.data[this.data.length - 1].close;
            if (i && e && s) {
              var o = r > e ? e : s,
                a = r > e ? i : e;
              (this.supportLine.price = o),
                (this.supportLine.coord = this.dataToCoord().getY(o)),
                (this.pressureLine.price = a),
                (this.pressureLine.coord = this.dataToCoord().getY(a));
            }
          },
        },
        {
          key: "drawSupportOrPressureLine",
          value: function (t) {
            var i = this.ctx,
              e = this.region.chart,
              s = e.x,
              r = e.y,
              o = e.width,
              a = e.height,
              n = "support" === t ? "230, 53, 53" : "28, 170, 60",
              h = this.props.devicePixelRatio,
              c = 1 * h,
              p =
                "support" === t
                  ? this.supportLine.coord
                  : this.pressureLine.coord;
            if (!(Math.abs(p) > a / 2)) {
              i.save(),
                i.translate(s, r + a / 2),
                at(i, 0, p, o, p, "rgb(".concat(n, ")"), "dash", null, null, c);
              var l = isNaN(
                  Math.abs(this.supportLine.coord - this.pressureLine.coord)
                )
                  ? 1 / 0
                  : Math.abs(this.supportLine.coord - this.pressureLine.coord),
                d = Math.min(0.3 * l, 24 * h),
                u = "support" === t ? p - d : p + d,
                g = "support" === t ? p - d : p,
                x = i.createLinearGradient(0, p, 0, u);
              x.addColorStop(0, "rgba(".concat(n, ", 0.2)")),
                x.addColorStop(1, "rgba(".concat(n, ", 0.0)")),
                rt(i, 0, g, o, d, "", x, 0);
              var m,
                f =
                  "support" === t
                    ? "支撑位 ".concat(
                        this.formatMoney(
                          this.supportLine.price,
                          this.props.fixNum || 2
                        )
                      )
                    : "压力位 ".concat(
                        this.formatMoney(
                          this.pressureLine.price,
                          this.props.fixNum || 2
                        )
                      ),
                v = 12.5 * h,
                y = {
                  color: "rgb(".concat(n, ")"),
                  font: "500 "
                    .concat(this.props.isWzqMiniProgram ? 10 * h : 9 * h, "px ")
                    .concat(this.props.textProp.fontType),
                  baseLine: W,
                },
                w = D(i, f, y),
                P = 4 * h,
                b = w + 2 * P,
                M = v + 1 * h * 2;
              m =
                Math.abs(this.supportLine.coord - this.pressureLine.coord) >=
                2 * M
                  ? "support" === t
                    ? p - M
                    : p
                  : "support" === t
                  ? p
                  : p - M;
              var R = 2 * h,
                T =
                  this.props.colorProp.supportLine.textColor[
                    "support" === t ? "support" : "pressure"
                  ],
                C =
                  this.props.colorProp.supportLine.bgColor[
                    "support" === t ? "support" : "pressure"
                  ],
                k = this.props.isWzqMiniProgram ? 0.5 * h : 1 * h;
              ot(i, k, m, b, M, R, T, C, k),
                I(i, f, P, m + M / 2, y, w),
                i.restore();
            }
          },
        },
      ]),
      e
    );
  })(),
  ji = (function (t) {
    r(e, Ni);
    var i = o(e);
    function e(t, s, r, o, n) {
      var h;
      return a(this, e), ((h = i.call(this, t, s, r, o, n)).line = {}), h;
    }
    return (
      n(e, [
        {
          key: "draw",
          value: function () {
            var t = this.data[this.data.length - 1];
            if (t.opData) {
              var i = +t.opData.firstKprice;
              (this.line.price = i),
                (this.line.coord = this.dataToCoord().getY(i)),
                (this.type = /rise/.test(t.opData.style)
                  ? "support"
                  : "pressure"),
                Math.abs(this.line && this.line.coord) <=
                  this.region.chart.height / 2 && this.drawLine();
            }
          },
        },
        { key: "getIndicatorData", value: function () {} },
        {
          key: "drawLine",
          value: function () {
            var t = this.ctx,
              i = this.region.chart,
              e = i.x,
              s = i.y,
              r = i.width,
              o = i.height,
              a = this.props.devicePixelRatio,
              n = this.line.coord;
            if (!(Math.abs(n) > o / 2)) {
              t.save(), t.translate(e, s + o / 2);
              var h = ""
                  .concat("support" === this.type ? "支撑" : "压力", "位 ")
                  .concat(
                    this.formatMoney(this.line.price, this.props.fixNum || 2)
                  ),
                c = 12.5 * a,
                p = {
                  color: "#CC2FA4",
                  font: "500 "
                    .concat(9 * a, "px/")
                    .concat(c, "px ")
                    .concat(this.props.textProp.fontType),
                  baseLine: W,
                };
              t.setTextStyle(p);
              var l = 4 * a,
                d = D(t, h, p) + 2 * l,
                u = c + 1 * a * 2,
                g = n - u / 2;
              ot(
                t,
                0,
                g,
                d,
                u,
                2 * a,
                "rgba(204, 47, 164, 0.4)",
                "dark" === this.props.skin
                  ? "rgba(18, 22, 31, 0.6)"
                  : "rgba(255, 255, 255, 0.6)",
                a
              ),
                I(t, h, l, g + u / 2, p),
                at(t, d, n, r, n, "#CC2FA4", "dash", null, null, a),
                t.restore();
            }
          },
        },
      ]),
      e
    );
  })(),
  Xi = (function (t) {
    r(e, Ni);
    var i = o(e);
    function e(t, s, r, o, n) {
      var h;
      return (
        a(this, e),
        ((h = i.call(this, t, s, r, o, n)).supportLine = {
          price: 0,
          coord: 0,
        }),
        (h.pressureLine = { price: 0, coord: 0 }),
        h
      );
    }
    return (
      n(e, [
        {
          key: "getIndicatorData",
          value: function () {
            var t,
              i = (null == (t = this.data) ? void 0 : t.length)
                ? this.data[this.data.length - 1]
                : null;
            if (null == i ? void 0 : i.supPreSignal) {
              var e = +i.supPreSignal.supportPrice,
                s = +i.supPreSignal.pressurePrice;
              e > 0 &&
                ((this.supportLine.price = e),
                (this.supportLine.coord = this.dataToCoord().getY(e))),
                s > 0 &&
                  ((this.pressureLine.price = s),
                  (this.pressureLine.coord = this.dataToCoord().getY(s)));
            }
          },
        },
        {
          key: "draw",
          value: function () {
            this.getIndicatorData(),
              this.isPriceInRange(this.pressureLine.price) &&
                this.drawSignalLine("pressure"),
              this.isPriceInRange(this.supportLine.price) &&
                this.drawSignalLine("support");
          },
        },
        {
          key: "isPriceInRange",
          value: function (t) {
            return t > 0 && t >= this.min && t <= this.max;
          },
        },
        {
          key: "drawSignalLine",
          value: function (t) {
            var i,
              e = this.ctx,
              s = this.region.chart,
              r = s.x,
              o = s.y,
              a = s.width,
              n = s.height,
              h = this.props.devicePixelRatio,
              c = "support" === t,
              p = c ? this.supportLine : this.pressureLine,
              l = p.coord,
              d =
                ((null == (i = this.props.colorProp)
                  ? void 0
                  : i.supportPressureSignal) || {})[t] || {},
              u =
                d.main ||
                (c ? "rgba(255, 137, 30, 1)" : "rgba(48, 119, 236, 1)"),
              g =
                d.bg ||
                (c ? "rgba(255, 137, 30, 0.2)" : "rgba(48, 119, 236, 0.2)");
            e.save(), e.translate(r, o + n / 2);
            var x = ""
                .concat(c ? "支撑位" : "压力位", " ")
                .concat(this.formatMoney(p.price, this.props.fixNum || 2)),
              m = 12 * h,
              f = {
                color: u,
                font: "500 "
                  .concat(m, "px ")
                  .concat(this.props.textProp.fontType),
                baseLine: W,
              };
            e.setTextStyle(f);
            var v = 8 * h,
              y = D(e, x, f) + 2 * v,
              w = m + 4 * h * 2,
              P = 1 * h,
              b = w / 2,
              M = -n / 2 + b,
              R = n / 2 - b,
              T = l;
            T < M ? (T = M) : T > R && (T = R);
            var C = P / 2;
            ot(e, C, T - b, y, w, 4 * h, u, g, P),
              I(e, x, C + v, T + 0.1 * m, f),
              at(e, C + y, l, a, l, u, "dash", "round", [2 * h, 4 * h], 2 * h),
              e.restore();
          },
        },
      ]),
      e
    );
  })(),
  zi = {
    Color: {
      kline: {
        plain: {
          button: { bg: "transparent", text: "#7A8499", tri: "#7A8499" },
        },
        dark: {
          button: { bg: "transparent", text: "#7A8499", tri: "#7A8499" },
        },
      },
      mins: {
        plain: {
          button: { bg: "transparent", text: "#7A8499", tri: "#7A8499" },
        },
        dark: {
          button: { bg: "transparent", text: "#7A8499", tri: "#7A8499" },
        },
      },
    },
    Layout: function (t) {
      var i = t.devicePixelRatio,
        e = void 0 === i ? 1 : i;
      return {
        "mins-landscape": {
          yAxisRight: { padding: 3 * e, textAlignRight: !0 },
        },
        "mins-portrait": {
          xAxis: { height: 16.5 * e },
          indicatorPadding: { top: 12, bottom: 0, left: 0, right: 0 },
          indicatorProportion: [0.194, 0.31, 0.402, 0.473],
          indicatorBarHeight: 16 * e,
        },
        "kline-landscape": {
          indicatorPadding: { top: 12, bottom: 0, left: 0, right: 0 },
          indicatorBarHeight: 18 * e,
        },
        "kline-portrait": {
          xAxis: { height: 12 * e },
          indicatorPadding: { top: 12, bottom: 0, left: 0, right: 0 },
          indicatorProportion: [0.206, 0.345, 0.402, 0.473],
          indicatorBarHeight: 16 * e,
        },
      };
    },
  };
function Ui(t) {
  var i = t.env,
    e = void 0 === i ? "mpwzq" : i,
    s = t.chartType,
    r = void 0 === s ? "kline" : s,
    o = t.layout,
    a = void 0 === o ? "kline-portrait" : o,
    n = t.skin,
    h = void 0 === n ? "plain" : n,
    c = t.props,
    p = { Color: {}, Layout: {} };
  if ("mpwzq" === e) {
    var l = zi.Layout(void 0 === c ? {} : c);
    p = { Color: m({}, zi.Color[r][h] || {}), Layout: m({}, l[a] || {}) };
  }
  return p;
}
var qi,
  Vi,
  Gi,
  Ki = { foldState: !0, isTapFoldArrow: !1 },
  Zi = { x: 0 },
  $i = (function () {
    function t(i, e, s, r) {
      a(this, t),
        Array.isArray(i) && i.length > 1
          ? ((this.ctx = i[0]), (this.ctxCross = i[1]))
          : ((this.ctx = i), (this.ctxCross = i)),
        (this.data = e),
        (this.props = s),
        (this.region = r),
        (this.indicator = this.props.mainIndicator || "ma");
      var o = k(e, s),
        n = o.max,
        h = o.min;
      (this.max = n), (this.min = h);
    }
    return (
      n(t, [
        {
          key: "draw",
          value: function () {
            if (this.props.tradeLineMode) this.drawTradeLine();
            else {
              var t = this.region.chart.x,
                i = this.region.chart.y / 2,
                e = W,
                s = this.props.isShowVolatile
                  ? "AI波动宝："
                  : this.indicator.toUpperCase(),
                r = {
                  color: this.props.colorProp.tip,
                  font: "400 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  baseLine: e,
                },
                o = D(this.ctx, s, r);
              if (!this.props.hideMainIndicatorText) {
                if (
                  this.props.crossLineItem ||
                  this.props.disableInteract ||
                  this.props.disableMainIndicator ||
                  this.props.disableSwitchMainIndicator ||
                  this.props.setting.disableSwitchMainIndicator
                )
                  this.props.isSplitRendCross &&
                    kt(
                      this.ctxCross,
                      this.region.chart.x,
                      0,
                      this.region.chartAndChipWidth,
                      36 * this.props.devicePixelRatio
                    ),
                    I(
                      this.ctxCross,
                      s,
                      t,
                      i,
                      f(m({}, r), {
                        color: this.props.isShowVolatile
                          ? this.props.colorProp.rise
                          : this.props.colorProp.tip,
                      }),
                      o
                    ),
                    (t += o);
                else {
                  var a = this.region.chart,
                    n = a.x,
                    h = a.y,
                    c = 45 * this.props.devicePixelRatio;
                  rt(
                    this.ctxCross,
                    n,
                    0,
                    c,
                    h,
                    this.props.colorProp.button.bg,
                    this.props.colorProp.button.bg
                  ),
                    I(
                      this.ctxCross,
                      s,
                      n + 0.4 * c,
                      h / 2,
                      {
                        color: this.props.colorProp.button.text,
                        font: this.props.textProp.font,
                        textAlign: Y,
                        baseLine: W,
                      },
                      o
                    );
                  var p = n + 0.85 * c,
                    l = h / 2,
                    d = 2 * this.props.devicePixelRatio,
                    u = 3 * this.props.devicePixelRatio;
                  ct(
                    this.ctxCross,
                    p - u,
                    l - d,
                    p + u,
                    l - d,
                    p,
                    l + d,
                    this.props.colorProp.button.tri,
                    this.props.colorProp.button.tri
                  ),
                    (t = n + c);
                }
                if (this.props.isShowVolatile) {
                  var g =
                    this.props.crossLineItem ||
                    this.data.items[this.data.items.length - 1];
                  (null == g ? void 0 : g.band_text) &&
                    (I(this.ctx, g.band_text, t, i, r),
                    (t += D(this.ctx, g.band_text, r)));
                }
              }
              this.drawCurrent(t);
            }
          },
        },
        {
          key: "drawTradeLine",
          value: function () {
            var t = this,
              i = this.ctx,
              e = this.ctxCross,
              s = this.region.chart.x,
              r = this.region.chart.y / 2,
              o = {
                color: this.props.colorProp.tip,
                font: ""
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                baseLine: W,
              },
              a = 6 * this.props.devicePixelRatio,
              n = (
                this.props.crossLineItem ||
                this.data.items[this.data.items.length - 1]
              ).opData || { firstKprice: "--", secondKprice: "--", style: "" },
              h = n.firstKprice,
              c = n.secondKprice,
              p = n.style,
              l = /rise/.test(p) ? "支撑" : "压力";
            I(e, "今日关键价", s, r, o),
              (s += D(i, "今日关键价", o) + a),
              (o.color = "#CC2FA4");
            var d = "第一".concat(l, "位: ").concat(isNaN(h) ? "--" : h);
            I(e, d, s, r, o), (s += D(i, d, o) + a), (o.color = "#CCB714");
            var u = "第二".concat(l, "位: ").concat(isNaN(c) ? "--" : c);
            if (
              (I(e, u, s, r, o),
              (s += D(e, u, o) + a),
              !this.props.isWzqMiniProgram)
            ) {
              var g = 12 * this.props.devicePixelRatio,
                x = 12 * this.props.devicePixelRatio,
                m = (this.region.chart.y - x) / 2;
              i.drawImage(ei.getImg("TIP"), s, m, g, x),
                (this.tipRegion = { x: s, y: m, width: g, height: x });
            }
            if (!this.props.fixedWidth && !this.props.isSplitRendCross) {
              var f = { firstKprice: "#CC2FA4", secondKprice: "#CCB714" },
                v = function (e) {
                  new Rt({
                    ctx: i,
                    region: t.region.chart,
                    drawCallback: function (s) {
                      var r = s.getX(s.index) + t.props.itemWidth / 2,
                        o = s.getY(s.currItem);
                      nt(
                        i,
                        r,
                        o,
                        f[e],
                        t.props.lineProp.indicator,
                        s.index,
                        s.length
                      );
                    },
                    data: {
                      items: t.data.items.map(function (t) {
                        var i,
                          s = null == (i = t.opData) ? void 0 : i[e];
                        if ("" !== s && null != s && !isNaN(s)) return s;
                      }),
                      max: t.max,
                      min: t.min,
                    },
                    count: t.props.count,
                  });
                };
              for (var y in f) v(y);
            }
          },
        },
        {
          key: "isTapTipRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio),
              this.tipRegion &&
                i.x >= this.tipRegion.x &&
                i.x <= this.tipRegion.x + this.tipRegion.width &&
                i.y >= this.tipRegion.y &&
                i.y <= this.tipRegion.y + this.tipRegion.height
            );
          },
        },
        {
          key: "drawCurrent",
          value: function (t) {
            if (
              ((t += 5 * this.props.devicePixelRatio),
              "ma" === this.indicator || "ema" === this.indicator)
            ) {
              var i = this.props.setting["".concat(this.indicator, "Types")];
              this.drawMA(
                t,
                i.filter(function (t) {
                  return t;
                })
              );
            } else this.drawOthers(t);
          },
        },
        {
          key: "drawOthers",
          value: function (t) {
            var i = "";
            if ("boll" === this.indicator) {
              var e = this.props.setting.bollParams,
                s = e.deviation,
                r = e.width;
              (i = "(".concat(s, ",").concat(r, ")")),
                this.props.fixedWidth ||
                  this.props.isSplitRendCross ||
                  new ki(
                    this.ctx,
                    this.data,
                    this.props,
                    this.region.chart
                  ).drawLinearShapes(!0);
            } else
              "sar" === this.indicator
                ? ((i = "(4,2,20)"),
                  this.props.fixedWidth ||
                    this.props.isSplitRendCross ||
                    new Di(
                      this.ctx,
                      this.data,
                      this.props,
                      this.region.chart
                    ).drawLinearShapes(!0))
                : "ene" === this.indicator &&
                  ((i = "(11,9,10)"),
                  this.props.fixedWidth ||
                    this.props.isSplitRendCross ||
                    new Fi(
                      this.ctx,
                      this.data,
                      this.props,
                      this.region.chart
                    ).drawLinearShapes(!0));
            if (
              !this.props.hideMainIndicatorText &&
              !this.props.isShowVolatile
            ) {
              var o = (this.props.crossLineItem ||
                  this.data.items[this.data.items.length - 1])[this.indicator],
                a = 5 * this.props.devicePixelRatio,
                n = this.region.chart.y / 2,
                h = 10,
                c = {
                  color: this.props.colorProp.defaultGray,
                  font: ""
                    .concat(h * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  baseLine: W,
                },
                p = i,
                l = 1;
              for (var d in o)
                (p +=
                  "".concat(d.toUpperCase(), ": ") +
                  "".concat(isNaN(o[d]) ? "--" : o[d].toFixed(3))),
                  (l += 1);
              var u;
              for (
                u = this.props.isWzqMiniProgram
                  ? l * a + 30 * this.props.devicePixelRatio
                  : l * a +
                    (this.props.crossLineItem
                      ? this.props.market <= 2
                        ? 90
                        : 50
                      : 30) *
                      this.props.devicePixelRatio;
                h > 7 &&
                (this.region.chartAndChipWidth -
                  t -
                  D(this.ctxCross, p, c) -
                  u) /
                  this.props.devicePixelRatio <
                  0;

              )
                c.font = ""
                  .concat(--h * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType);
              var g = D(this.ctxCross, i, c);
              for (var x in (I(this.ctxCross, i, t, n, c, g),
              (t += g + a),
              o)) {
                var v = "".concat(x.toUpperCase(), ": "),
                  y = "".concat(isNaN(o[x]) ? "--" : o[x].toFixed(3)),
                  w = D(this.ctxCross, v, c),
                  P = D(this.ctxCross, y, c);
                I(
                  this.ctxCross,
                  v,
                  t,
                  n,
                  f(m({}, c), {
                    color: this.props.colorProp[this.indicator][x],
                  }),
                  w
                ),
                  (t += w),
                  I(this.ctxCross, y, t, n, c, P),
                  (t += P + a);
              }
            }
          },
        },
        {
          key: "drawMA",
          value: function (t, i) {
            var e = this,
              s = this.region.chart;
            if (i.length > 0) {
              if (!this.props.fixedWidth && !this.props.isSplitRendCross) {
                var r = i.map(function (t) {
                  return "".concat(e.indicator).concat(t);
                });
                new Mi(
                  this.ctx,
                  this.data,
                  this.props,
                  s,
                  r,
                  this.max,
                  this.min
                ).draw();
              }
              if (this.props.hideMainIndicatorText || this.props.isShowVolatile)
                return;
              var o = s.y / 2,
                a = 10,
                n = this.props.devicePixelRatio,
                h = {
                  color: this.props.colorProp.defaultGray,
                  font: ""
                    .concat(a * n, "px ")
                    .concat(this.props.textProp.fontType),
                  baseLine: W,
                },
                c =
                  this.props.crossLineItem ||
                  this.data.items[this.data.items.length - 1],
                p = [],
                l = [],
                d = this.props.isWzqMiniProgram ? 6 : 5;
              if ("kline-portrait" === this.props.layout) {
                for (var u = "", g = 0, x = 0; x < i.length; x++)
                  if (i[x] > 0) {
                    var m = i[x],
                      f = "".concat(m, ": "),
                      v = +c["".concat(this.indicator).concat(i[x])],
                      y = isNaN(v) ? "--" : v.toFixed(this.props.fixNum || 2);
                    (g += 1) <= d
                      ? (p.push({ type: m, num: y }), (u += f + y))
                      : l.push({ type: m, num: y });
                  }
                var w,
                  P = 5 * (p.length - 1) * n;
                for (
                  w =
                    "day" === this.props.type
                      ? this.props.isWzqMiniProgram
                        ? 30
                        : 90
                      : 60;
                  a > 0 &&
                  p.length &&
                  (this.region.chartAndChipWidth - D(this.ctx, u, h) - P - t) /
                    n <
                    w;

                )
                  h.font = ""
                    .concat(--a * n, "px ")
                    .concat(this.props.textProp.fontType);
                this.drawMAText(p, t, o, h);
                var b = Ki.foldState;
                l.length &&
                  (this.props.isWzqMiniProgram
                    ? ((o = 1.5 * s.y), this.drawMAText(l, t + 120, o, h))
                    : (this.drawArrow(b),
                      b || ((o = 1.5 * s.y), this.drawMAText(l, t, o, h))));
              } else this.drawLandscapeBar(c, i, t, h);
            }
          },
        },
        {
          key: "drawMAText",
          value: function (t, i, e, s) {
            var r = this,
              o = this.ctxCross;
            o.save(),
              t.forEach(function (t) {
                var a = t.type,
                  n = t.num,
                  h = "".concat(a, ": "),
                  c = D(r.ctx, h, s),
                  p = D(r.ctx, n, s),
                  l = (
                    r.props.setting["".concat(r.indicator, "Types")] || []
                  ).indexOf(a);
                I(
                  o,
                  h,
                  i,
                  e,
                  f(m({}, s), { color: r.props.colorProp.ma[l] }),
                  c
                ),
                  I(o, n, (i += c), e, s, p),
                  (i += p + 5 * r.props.devicePixelRatio);
              }),
              o.restore();
          },
        },
        {
          key: "drawArrow",
          value: function (t) {
            var i = this.ctx;
            i.save();
            var e = ei.getImg(t ? "SHOW_ARROW" : "FOLD_ARROW"),
              s = this.region.chart,
              r = this.props.devicePixelRatio,
              o = 9 * r,
              a = 6 * r,
              n = D(i, "前复权", {
                color: this.props.colorProp.tip,
                font: "400 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                baseLine: W,
              }),
              h = s.x + this.region.chartAndChipWidth - n - 9 * r - o,
              c = -s.height / 2 - s.y / 2 - a / 2;
            (Zi.x = h),
              i.translate(s.x, s.y + s.height / 2),
              this.ctx.drawImage(e, h, c, o, a),
              i.restore();
          },
        },
        {
          key: "drawLandscapeBar",
          value: function (t, i, e, s) {
            var r = this,
              o = "",
              a = 10,
              n = 0,
              h = [],
              c = this.region.chart,
              p = c.y / 2,
              l = this.props.devicePixelRatio;
            i.forEach(function (i, e) {
              if (i > 0) {
                var s = "".concat(i, ": "),
                  a = +t["".concat(r.indicator).concat(i)],
                  c = isNaN(a) ? "--" : a.toFixed(r.props.fixNum || 2);
                (n += 1), h.push({ type: i, num: c }), (o += s + c);
              }
            });
            for (
              var d = 5 * (n - 1) * l;
              a > 0 &&
              h.length &&
              (this.region.chartAndChipWidth -
                D(this.ctx, o, s) -
                d -
                e +
                c.x) /
                l <
                60;

            )
              s.font = ""
                .concat(--a * l, "px ")
                .concat(this.props.textProp.fontType);
            this.drawMAText(h, e, p, s);
          },
        },
      ]),
      t
    );
  })(),
  Ji = function (t) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return t.toFixed(i);
  },
  Qi = {
    volume: (function (t) {
      r(e, Ri);
      var i = o(e);
      function e(t, s, r, o) {
        var n;
        return (
          a(this, e),
          ((n = i.call(
            this,
            t,
            s,
            r,
            o,
            "volume",
            "",
            r.stockUnit
          )).notSupport =
            ["uk", "ft", "fx"].includes(r.market) ||
            ["HXC", "NBI"].includes(r.scode)),
          n
        );
      }
      return n(e);
    })(),
    cje: (function (t) {
      r(e, Ri);
      var i = o(e);
      function e(t, s, r, o) {
        var n;
        return (
          a(this, e),
          ((n = i.call(this, t, s, r, o, "cje", "", "元")).notSupport =
            [3, "3", "nq", "uk", "ft", "fu", "hd", "fx", "sp"].indexOf(
              r.market
            ) >= 0 || /^m(1|5|15|30|60|120)$/.test(r.type)),
          n
        );
      }
      return n(e);
    })(),
    boll: ki,
    cci: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = r.setting.cciParams.n;
        return i.call(this, t, s, r, o, "cci", "(".concat(n, ")"));
      }
      return (
        n(e, [
          {
            key: "addStatusData",
            value: function () {
              if (!this.data.items[2]) return !1;
              if (void 0 === this.data.items[2].cciStatus)
                for (var t = 2; t < this.data.items.length; t++) {
                  var i = this.data.items[t],
                    e = this.data.items[t - 1],
                    s = this.data.items[t - 2],
                    r = null;
                  s.cci > 100 &&
                    e.cci > 100 &&
                    s.cci > e.cci &&
                    e.cci > i.cci &&
                    (r = "high"),
                    s.cci < -100 &&
                      e.cci < -100 &&
                      s.cci < e.cci &&
                      e.cci < i.cci &&
                      (r = "low"),
                    (i.cciStatus = r);
                }
              return !0;
            },
          },
        ]),
        e
      );
    })(),
    dmi: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = r.setting.dmiParams,
          h = n.n,
          c = n.m;
        return i.call(
          this,
          t,
          s,
          r,
          o,
          "dmi",
          "(".concat(h, ",").concat(c, ")")
        );
      }
      return n(e);
    })(),
    kdj: (function (t) {
      r(e, Ai);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = r.setting.kdjParams,
          h = n.n1,
          c = n.n2,
          p = n.n3;
        return i.call(
          this,
          t,
          s,
          r,
          o,
          "kdj",
          "(".concat(h, ",").concat(c, ",").concat(p, ")")
        );
      }
      return (
        n(e, [
          {
            key: "addStatusData",
            value: function () {
              if (!this.data.items[1]) return !1;
              if (void 0 === this.data.items[1].kdjStatus)
                for (var t = 1; t < this.data.items.length; t++) {
                  var i = this.data.items[t],
                    e = this.data.items[t - 1],
                    s = null;
                  e.kdj.k >= 80 &&
                    e.kdj.j >= 80 &&
                    e.kdj.j > e.kdj.k &&
                    i.kdj.k >= i.kdj.j &&
                    (s = "high"),
                    e.kdj.k <= 20 &&
                      e.kdj.j <= 20 &&
                      e.kdj.j < e.kdj.k &&
                      i.kdj.k <= i.kdj.j &&
                      (s = "low"),
                    (i.kdjStatus = s);
                }
              return !0;
            },
          },
        ]),
        e
      );
    })(),
    ema: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = Math.max(s.maxMin.kline.max, s.maxMin.ema.max),
          h = Math.min(s.maxMin.kline.min, s.maxMin.ema.min);
        return i.call(this, t, s, r, o, Si, "", null, n, h);
      }
      return (
        n(e, [
          {
            key: "drawLinearShapes",
            value: function () {
              var t = this,
                i = this.data.items,
                e = this.props.setting.emaTypes || [],
                s = [];
              e
                .filter(function (i, e) {
                  if (i) return s.push(t.props.colorProp.ema[e]), i;
                })
                .forEach(function (i, e) {
                  var r = t.data.items.map(function (t) {
                    return t.ema[i];
                  });
                  new Rt({
                    ctx: t.ctx,
                    region: t.region,
                    drawCallback: function (i) {
                      return t.drawLineItem(i, s[e]);
                    },
                    data: { items: r, max: t.max, min: t.min },
                    count: t.props.count,
                  });
                }),
                new Rt({
                  ctx: this.ctx,
                  region: this.region,
                  drawCallback: function (i) {
                    return t.drawKlineItem(i);
                  },
                  data: { items: i, max: this.max, min: this.min },
                  count: this.props.count,
                });
            },
          },
          {
            key: "drawLineItem",
            value: function (t, i) {
              var e = this.props,
                s = t.index,
                r = t.getX(s) + e.itemWidth / 2,
                o = t.getY(t.currItem);
              nt(this.ctx, r, o, i, this.props.lineProp.indicator, s, t.length);
            },
          },
          {
            key: "drawKlineItem",
            value: function (t) {
              if (!t.currItem.forBounce) {
                var i = t.index,
                  e = this.data.items[i],
                  s = t.getX(i) + this.props.itemWidth / 2;
                pt(
                  this.ctx,
                  {
                    open: t.getY(e.open),
                    close: t.getY(e.close),
                    low: t.getY(e.low),
                    high: t.getY(e.high),
                  },
                  s,
                  this.props.itemWidth,
                  this.props.colorProp["".concat(Si, "Ochl")],
                  this.props.lineProp.ochl
                );
              }
            },
          },
        ]),
        e
      );
    })(),
    macd: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        var n;
        a(this, e);
        var h = r.setting["".concat(Li, "Params")],
          c = h.short,
          p = h.long,
          l = h.m;
        return (
          ((n = i.call(
            this,
            t,
            s,
            r,
            o,
            Li,
            "(".concat(c, ",").concat(p, ",").concat(l, ")"),
            null,
            null,
            null
          )).shapes = { rise: [], drop: [] }),
          n
        );
      }
      return (
        n(e, [
          {
            key: "draw",
            value: function () {
              if (this.props.showMACDPatternHint) this.drawBar();
              else {
                this.props.isSplitRendCross ||
                  (this.props.hideGrid
                    ? this.drawBottomLine()
                    : this.drawGrid(),
                  this.drawLinearShapes(),
                  this.props.hideScale || this.drawScale());
                var t = this.drawBar(),
                  i =
                    "kline-portrait" !== this.props.layout ||
                    !this.props.isShowChip;
                this.props.isSupportMacdRankEntry && i && this.drawRankEntry(t);
              }
              this.props.showMACDRedDot &&
                "kline-portrait" === this.props.layout &&
                this.drawRedDot();
            },
          },
          {
            key: "drawLinearShapes",
            value: function () {
              var t = this;
              new Rt({
                ctx: this.ctx,
                region: this.region,
                drawCallback: function (i) {
                  return t.drawRect(i);
                },
                data: {
                  items: this.data.items.map(function (t) {
                    return t[Li] && t[Li].macd;
                  }),
                  max: this.max,
                  min: this.min,
                  middle: 0,
                },
                count: this.props.count,
              }),
                ["dea", "dif"].forEach(function (i) {
                  var e = t.data.items.map(function (t) {
                    return t[Li] && t[Li][i];
                  });
                  new Rt({
                    ctx: t.ctx,
                    region: t.region,
                    drawCallback: function (e) {
                      return t.drawLineItem(e, i);
                    },
                    data: { items: e, max: t.max, min: t.min, middle: 0 },
                    count: t.props.count,
                  });
                }),
                this.props.setting.macdPattern &&
                  (this.drawGoldDead(),
                  ("kline-landscape" === this.props.layout ||
                    this.props.setting.macdPatternFocus) &&
                    this.props.crossLineItem &&
                    this.drawDeviate());
            },
          },
          {
            key: "drawLineItem",
            value: function (t, i) {
              var e = this.props,
                s = t.index,
                r = t.getX(s) + (this.isKline ? e.itemWidth / 2 : 0),
                o = t.getY(t.currItem);
              nt(
                this.ctx,
                r,
                o,
                this.props.colorProp[Li][i],
                this.props.lineProp.indicator,
                s,
                t.length
              );
            },
          },
          {
            key: "drawRect",
            value: function (t) {
              var i = this.props,
                e = t.index,
                s = t.getX(e) + (this.isKline ? i.itemWidth / 2 : 0),
                r = t.getY(t.currItem),
                o = {
                  x: s - i.barWidth / 2,
                  y: 0,
                  width: i.barWidth,
                  height: r,
                };
              this.props.isMiniPorgram &&
                r < 0 &&
                ((o.y = r), (o.height = Math.abs(r))),
                t.currItem >= 0
                  ? this.shapes.rise.push(o)
                  : this.shapes.drop.push(o),
                t.index === t.length - 1 &&
                  (ut(
                    this.ctx,
                    this.shapes.rise,
                    this.props.colorProp.rise,
                    this.props.colorProp.rise
                  ),
                  ut(
                    this.ctx,
                    this.shapes.drop,
                    this.props.colorProp.drop,
                    this.props.colorProp.drop
                  ));
            },
          },
          {
            key: "drawGoldDead",
            value: function () {
              var t = this.ctx,
                i = this.props.devicePixelRatio,
                e = this.region.width,
                s = this.region.height,
                r = 3.5 * i,
                o = 2 * i,
                a = 33 * i,
                n = 14 * i,
                h = 2 * i,
                c = 13 * i,
                p = {
                  color: "",
                  font: ""
                    .concat(9 * i, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                };
              t.save(), t.translate(this.region.x, this.region.y + s / 2);
              for (
                var l,
                  d,
                  u = Math.max(Math.abs(this.max), Math.abs(this.min)),
                  g = 1;
                g < this.data.items.length;
                g++
              ) {
                var x = this.data.items[g];
                if (x.macdHelper) {
                  var m = /gold/.test(x.macdHelper.status)
                    ? this.props.colorProp.rise
                    : this.props.colorProp.drop;
                  p.color = m;
                  var f =
                      (e / this.props.count) * (g - 1 + x.macdHelper.xRatio) +
                      this.props.itemWidth / 2,
                    v = (-x.macdHelper.dif / u) * (s / 2);
                  if ("gold" === x.macdHelper.status) {
                    var y = Math.min(v + (r / 7) * 9, s / 2);
                    ct(t, f, y - (r / 7) * 9, f - r, y, f + r, y, m, m),
                      Object.assign(x.macdHelper, { x: f, y: v }),
                      (l = g);
                  } else if ("gold-deviate" === x.macdHelper.status) {
                    ht(t, f, v, o, m, m);
                    var w = Math.max(Math.min(f - a / 2, e - a), 0),
                      P = w + a / 2;
                    if (v + n < s / 2) {
                      var b = Math.min(s / 2 - v - n, c);
                      this.drawDashLine({
                        x: f,
                        startY: v,
                        lineLength: b,
                        color: m,
                      }),
                        ot(t, w, v + b, a, n, h, m),
                        I(t, "底背离", P, v + b + n / 2, p);
                    } else {
                      var M = Math.min(v + s / 2 - n, c);
                      this.drawDashLine({
                        x: f,
                        startY: v - M,
                        lineLength: M,
                        color: m,
                      }),
                        ot(t, w, v - M - n, a, n, h, m),
                        I(t, "底背离", P, v - M - n / 2, p);
                    }
                    var R = this.data.items[l];
                    Object.assign(x.macdHelper, {
                      x: f,
                      y: v,
                      lastX: R && R.macdHelper.x,
                      lastY: R && R.macdHelper.y,
                    }),
                      (l = g);
                  } else if ("dead" === x.macdHelper.status) {
                    var T = Math.max(v - (r / 7) * 9, -s / 2);
                    ct(t, f, T + (r / 7) * 9, f - r, T, f + r, T, m, m),
                      Object.assign(x.macdHelper, { x: f, y: v }),
                      (d = g);
                  } else if ("dead-deviate" === x.macdHelper.status) {
                    ht(t, f, v, o, m, m);
                    var C = Math.max(Math.min(f - a / 2, e - a), 0),
                      k = C + a / 2;
                    if (v - n > -s / 2) {
                      var A = Math.min(v + s / 2 - n, c);
                      this.drawDashLine({
                        x: f,
                        startY: v - A,
                        lineLength: A,
                        color: m,
                      }),
                        ot(t, C, v - A - n, a, n, h, m),
                        I(t, "顶背离", k, v - A - n / 2, p);
                    } else {
                      var S = Math.min(s / 2 - v - n, c);
                      this.drawDashLine({
                        x: f,
                        startY: v,
                        lineLength: S,
                        color: m,
                      }),
                        ot(t, C, v + S, a, n, h, m),
                        I(t, "顶背离", k, v + S + n / 2, p);
                    }
                    var L = this.data.items[d];
                    Object.assign(x.macdHelper, {
                      x: f,
                      y: v,
                      lastX: L && L.macdHelper.x,
                      lastY: L && L.macdHelper.y,
                    }),
                      (d = g);
                  }
                }
              }
              t.restore();
            },
          },
          {
            key: "drawDashLine",
            value: function (t) {
              for (
                var i = t.x,
                  e = t.startY,
                  s = t.lineLength,
                  r = t.color,
                  o = this.ctx,
                  a = this.props.devicePixelRatio,
                  n = 1 * a,
                  h = 1 * a,
                  c = 2 * a,
                  p = Math.round(s / c) - 1,
                  l = e,
                  d = 0;
                d < p;
                d++
              )
                rt(o, i - n / 2, (l += c) - h / 2, n, h, r, r);
            },
          },
          {
            key: "drawDeviate",
            value: function () {
              var t = this.ctx,
                i = this.props.crossLineItem.macdHelper;
              if (i) {
                var e = i.status,
                  s = i.x,
                  r = i.y,
                  o = i.lastX,
                  a = i.lastY,
                  n = i.bgLeftX,
                  h = i.bgRightX;
                if (/deviate/.test(e)) {
                  var c,
                    p,
                    l = this.region.width,
                    d = this.region.height,
                    u = this.region.bar.height,
                    g = 2 * this.props.devicePixelRatio;
                  if (
                    ("gold-deviate" === e
                      ? ((c = "#662124"), (p = "rgba(230, 53, 53, 0.1)"))
                      : ((c = "#155026"), (p = "rgba(28, 170, 60, 0.1)")),
                    t.save(),
                    t.translate(this.region.x, this.region.y + d / 2),
                    rt(t, n, -d / 2 - u, h - n, d + u, p, p),
                    ht(t, s, r, g, c, c),
                    o && a)
                  )
                    ht(t, o, a, g, c, c),
                      at(t, s, r, o, a, c, c, void 0, void 0, 2);
                  else
                    for (var x = this.props.model.index - 1; x >= 0; x--) {
                      var m = this.props.model.list[x];
                      if (
                        m.macdHelper &&
                        m.macdHelper.status.includes(e.slice(0, 4))
                      ) {
                        var f = Math.max(
                            Math.abs(this.max),
                            Math.abs(this.min)
                          ),
                          v =
                            (l / this.props.count) *
                              (x -
                                this.props.model.index -
                                1 +
                                m.macdHelper.xRatio) +
                            this.props.itemWidth / 2,
                          y = (-m.macdHelper.dif / f) * (d / 2);
                        at(
                          t,
                          s,
                          r,
                          0,
                          r - ((r - y) / (s - v)) * s,
                          c,
                          c,
                          void 0,
                          void 0,
                          2
                        ),
                          Object.assign(m.macdHelper, { lastX: v, lastY: y });
                        break;
                      }
                    }
                  t.restore();
                }
              }
            },
          },
          {
            key: "drawScale",
            value: function () {
              var t = this.region.yAxis.x + this.region.yAxis.width,
                i = {
                  font: "400 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: N,
                  baseLine: F,
                  color: this.props.colorProp.yAxis,
                },
                e = Math.max(this.max, -this.min).toFixed(2);
              new _(
                this.ctx,
                P,
                [
                  {
                    text: e,
                    x: t,
                    y: this.region.yAxis.y,
                    props: f(m({}, i), { baseLine: B }),
                  },
                  {
                    text: 0,
                    x: t,
                    y: this.region.yAxis.y + this.region.height / 2,
                    props: f(m({}, i), { baseLine: W }),
                  },
                  {
                    text: "-".concat(e),
                    x: t,
                    y: this.region.yAxis.y + this.region.height,
                    props: i,
                  },
                ],
                this.region.yAxis
              ).draw();
            },
          },
          {
            key: "getRegionIndex",
            value: function (t) {
              for (
                var i = Mt(this.ctx, this.props.layout, this.props),
                  e =
                    "kline-portrait" === this.props.layout
                      ? this.props.setting.indicatorCount
                      : 1,
                  s = 1;
                s <= e;
                s++
              ) {
                var r =
                  i[
                    1 === s
                      ? "indicator"
                      : "".concat(
                          ["second", "third", "fourth"][s - 2],
                          "Indicator"
                        )
                  ].bar;
                if (+t.y == +r.y) return s;
              }
            },
          },
          {
            key: "drawRankEntry",
            value: function (t) {
              var i = this.getRegionIndex(t),
                e = "MACD榜单",
                s = {
                  color: this.props.colorProp.macd.entry,
                  font: "400 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: E,
                  baseLine: W,
                },
                r = t.y,
                o = t.width,
                a = D(this.ctx, e, s),
                n = 4 * this.props.devicePixelRatio,
                h = 7 * this.props.devicePixelRatio,
                c = a + n + 10 * this.props.devicePixelRatio,
                p = 14 * this.props.devicePixelRatio,
                l = r,
                d =
                  this.region.x +
                  o -
                  c -
                  (this.props.isSupportChip && 1 == +i
                    ? 14 * this.props.devicePixelRatio
                    : 0);
              ot(
                this.ctx,
                d,
                l,
                c,
                p,
                2 * this.props.devicePixelRatio,
                this.props.colorProp.button.commonBorder,
                this.props.colorProp.button.commonBg
              );
              var u = l + p / 2 + 2,
                g = d + 4 * this.props.devicePixelRatio;
              I(this.ctx, e, g, u, s);
              var x = l + (p - h) / 2,
                m = g + a + 2 * this.props.devicePixelRatio;
              this.ctx.drawImage(ei.getImg("ARROW_BLUE"), m, x, n, h);
            },
          },
          {
            key: "drawRedDot",
            value: function () {
              var t = this.props.devicePixelRatio,
                i = this.region.x + this.region.bar.buttonWidth,
                e = this.region.y - this.region.bar.height + 5 * t;
              ht(
                this.ctx,
                i,
                e,
                3.5 * t,
                this.props.colorProp.reddot,
                this.props.colorProp.reddot
              );
            },
          },
        ]),
        e
      );
    })(),
    obv: (function (t) {
      r(e, bi);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "obv", "");
      }
      return (
        n(e, [
          {
            key: "drawScale",
            value: function () {
              var t = this.region.yAxis,
                i = b(this.max),
                e = {
                  font: "400 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: N,
                  baseLine: B,
                  color: this.props.colorProp.yAxis,
                };
              new _(
                this.ctx,
                P,
                [
                  {
                    text: i.v.replace(/\.0+$/, ""),
                    x: t.x + t.width,
                    y: t.y,
                    props: e,
                  },
                  {
                    text: i.u,
                    x: t.x + t.width,
                    y: t.y + t.height,
                    props: f(m({}, e), { baseLine: F }),
                  },
                ],
                t
              ).draw();
            },
          },
        ]),
        e
      );
    })(),
    rsi: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = r.setting.rsiParams,
          h = n.n1,
          c = n.n2,
          p = n.n3;
        return i.call(
          this,
          t,
          s,
          r,
          o,
          "rsi",
          "(".concat(h, ",").concat(c, ",").concat(p, ")")
        );
      }
      return (
        n(e, [
          {
            key: "addStatusData",
            value: function () {
              if (!this.data.items[2]) return !1;
              if (void 0 === this.data.items[2].rsiStatus)
                for (var t = 2; t < this.data.items.length; t++) {
                  var i = this.data.items[t],
                    e = this.data.items[t - 1],
                    s = this.data.items[t - 2],
                    r = null;
                  s.rsi.rsi6 > 80 &&
                    e.rsi.rsi6 > 80 &&
                    s.rsi.rsi6 > e.rsi.rsi6 &&
                    e.rsi.rsi6 > i.rsi.rsi6 &&
                    (r = "high"),
                    s.rsi.rsi6 < 20 &&
                      e.rsi.rsi6 < 20 &&
                      s.rsi.rsi6 < e.rsi.rsi6 &&
                      e.rsi.rsi6 < i.rsi.rsi6 &&
                      (r = "low"),
                    (i.rsiStatus = r);
                }
              return !0;
            },
          },
        ]),
        e
      );
    })(),
    sar: Di,
    wr: (function (t) {
      r(e, Ai);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = r.setting.wrParams,
          h = n.n1,
          c = n.n2;
        return i.call(
          this,
          t,
          s,
          r,
          o,
          "wr",
          "(".concat(h, ",").concat(c, ")")
        );
      }
      return (
        n(e, [
          {
            key: "addStatusData",
            value: function () {
              if (!this.data.items[2]) return !1;
              if (void 0 === this.data.items[2].wrStatus)
                for (var t = 2; t < this.data.items.length; t++) {
                  var i = this.data.items[t],
                    e = this.data.items[t - 1],
                    s = this.data.items[t - 2],
                    r = null;
                  s.wr.wr6 > 80 &&
                    e.wr.wr6 > 80 &&
                    s.wr.wr6 > e.wr.wr6 &&
                    e.wr.wr6 > i.wr.wr6 &&
                    (r = "high"),
                    s.wr.wr6 < 20 &&
                      e.wr.wr6 < 20 &&
                      s.wr.wr6 < e.wr.wr6 &&
                      e.wr.wr6 < i.wr.wr6 &&
                      (r = "low"),
                    (i.wrStatus = r);
                }
              return !0;
            },
          },
        ]),
        e
      );
    })(),
    bias: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "bias", "(6,12,24)");
      }
      return n(e);
    })(),
    bbi: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        a(this, e);
        var n = Math.max(s.maxMin.kline.max, s.maxMin.bbi.max),
          h = Math.min(s.maxMin.kline.min, s.maxMin.bbi.min);
        return i.call(this, t, s, r, o, Wi, "(3,6,12,24)", null, n, h);
      }
      return (
        n(e, [
          {
            key: "drawLinearShapes",
            value: function () {
              var t = this;
              new Rt({
                ctx: this.ctx,
                region: this.region,
                drawCallback: function (i) {
                  if (!i.currItem.forBounce) {
                    var e = t.data.items[i.index],
                      s = i.getX(i.index) + t.props.itemWidth / 2;
                    pt(
                      t.ctx,
                      {
                        open: i.getY(e.open),
                        close: i.getY(e.close),
                        low: i.getY(e.low),
                        high: i.getY(e.high),
                      },
                      s,
                      t.props.itemWidth,
                      "#4280f2",
                      t.props.lineProp.ochl
                    );
                  }
                },
                data: { items: this.data.items, max: this.max, min: this.min },
                count: this.props.count,
              });
              var i = this.data.items.map(function (t) {
                  return t.bbi;
                }),
                e = i.findIndex(function (t) {
                  return !(void 0 === t || isNaN(t));
                });
              -1 !== e &&
                new Rt({
                  ctx: this.ctx,
                  region: this.region,
                  drawCallback: function (i) {
                    if (!(i.index < e)) {
                      var s = i.getX(i.index) + t.props.itemWidth / 2,
                        r = i.getY(i.currItem);
                      nt(
                        t.ctx,
                        s,
                        r,
                        t.props.colorProp.bbi,
                        t.props.lineProp.indicator,
                        i.index === e ? 0 : i.index,
                        i.length
                      );
                    }
                  },
                  data: { items: i, max: this.max, min: this.min },
                  count: this.props.count,
                });
            },
          },
        ]),
        e
      );
    })(),
    trix: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "trix", "(12,20)");
      }
      return n(e);
    })(),
    ene: Fi,
    vr: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "vr", "(26,6)");
      }
      return n(e);
    })(),
    arbr: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "arbr", "(26)");
      }
      return n(e);
    })(),
    psy: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "psy", "(12,6)");
      }
      return n(e);
    })(),
    dma: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "dma", "(10,50,10)");
      }
      return n(e);
    })(),
    dpo: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        return a(this, e), i.call(this, t, s, r, o, "dpo", "(20,6)");
      }
      return n(e);
    })(),
    rally: (function (t) {
      r(e, Ti);
      var i = o(e);
      function e(t, s, r, o) {
        var n;
        return (
          a(this, e),
          ((n = i.call(this, t, s, r, o, "rally", "实时反弹值")).notSupport =
            !["day", "week"].includes(r.type) || !r.isSupportTradeSecret),
          n
        );
      }
      return (
        n(e, [
          {
            key: "draw",
            value: function () {
              this.drawGrid(),
                this.notSupport
                  ? this.drawEmptyData()
                  : (this.drawLinearShapes(), this.drawScale()),
                this.drawBar();
            },
          },
          {
            key: "drawEmptyData",
            value: function () {
              var t = {
                  color: "#7A8499",
                  font: "400 "
                    .concat(10 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                i = this.region.x + this.region.width / 2,
                e = this.region.y + this.region.height / 2;
              I(this.ctx, "该类型暂不支持该指标", i, e, t);
            },
          },
        ]),
        e
      );
    })(),
    ChipBar: (function () {
      function t(i, e, s, r) {
        a(this, t), (this.ctx = i), (this.data = e), (this.props = s);
        var o = r.getChart(),
          n = "kline-portrait" === this.props.layout ? 10 : 0;
        this.region = {
          width: r.chipRegion.width - n,
          height: r.chipRegion.height,
          x: o.x + o.width + n,
          y: o.y,
          chart: {
            x: o.x + o.width + n,
            y: o.y,
            width: r.chipRegion.width - n,
            height: o.height,
          },
        };
      }
      return (
        n(t, [
          {
            key: "draw",
            value: function () {
              if (this.data && this.data.chipData) {
                if (this.props.isWzqMiniProgram) {
                  var t = this.props.devicePixelRatio,
                    i = this.region.x - 4 * t,
                    e = i + this.region.width + 4 * t,
                    s =
                      "kline-portrait" === this.props.layout
                        ? this.region.height - 2
                        : this.region.height;
                  if (
                    (at(
                      this.ctx,
                      i,
                      0,
                      e,
                      0,
                      this.props.colorProp.border,
                      null,
                      null,
                      null,
                      this.props.lineProp.border
                    ),
                    at(
                      this.ctx,
                      i,
                      s,
                      e,
                      s,
                      this.props.colorProp.border,
                      null,
                      null,
                      null,
                      this.props.lineProp.border
                    ),
                    "kline-portrait" === this.props.layout)
                  ) {
                    var r = this.ctx.createLinearGradient(
                      this.region.x,
                      this.region.height - this.region.chart.height,
                      this.region.x,
                      s
                    );
                    r.addColorStop(0, "#F7F8FC"),
                      r.addColorStop(1, "#F5F6FA"),
                      this.ctx.setFillStyle(r);
                    var o = s - this.region.chart.height - this.region.y;
                    this.ctx.fillRect(
                      this.region.x,
                      this.region.y + this.region.chart.height,
                      this.region.chart.width,
                      o
                    );
                  }
                } else this.drawGrid(), this.drawScale();
                this.drawLinearShapes(),
                  this.drawTipPrice(),
                  this.drawText(),
                  this.props.isWzqMiniProgram || this.drawLegend();
              }
            },
          },
          {
            key: "drawGrid",
            value: function () {
              var t = this.props,
                i = t.colorProp,
                e = t.lineProp;
              new mt(
                this.ctx,
                {
                  border: { color: i.border, lineWidth: e.border },
                  hline: { color: i.border, lineWidth: e.border },
                  vline: {
                    color: i.border,
                    lineWidth: e.border,
                    count: 1,
                    linestyle: "dash",
                    dashGapArray: [3, 3],
                  },
                },
                this.region.chart
              );
            },
          },
          {
            key: "getChartMaxMin",
            value: function () {
              if (this.data.maxMin) {
                var t = k(this.data, this.props);
                return { max: t.max, min: t.min };
              }
            },
          },
          {
            key: "drawScale",
            value: function () {
              if (this.data.maxMin) {
                var t = this.getChartMaxMin(),
                  i = t.max,
                  e = t.min,
                  s = {
                    font: "400 "
                      .concat(10 * this.props.devicePixelRatio, "px ")
                      .concat(this.props.textProp.fontType),
                    textAlign: N,
                    color: this.props.colorProp.yAxis,
                  };
                new _(
                  this.ctx,
                  P,
                  [
                    {
                      text: i.toFixed(2),
                      x:
                        this.region.chart.x +
                        this.region.chart.width -
                        4 * this.props.devicePixelRatio,
                      y: this.region.chart.y + 20,
                      props: f(m({}, s), { baseLine: W }),
                    },
                    {
                      text: e.toFixed(2),
                      x:
                        this.region.chart.x +
                        this.region.chart.width -
                        4 * this.props.devicePixelRatio,
                      y: this.region.chart.y + this.region.chart.height,
                      props: f(m({}, s), { baseLine: F }),
                    },
                  ],
                  this.region.chart
                ).draw();
              }
            },
          },
          {
            key: "drawLegend",
            value: function () {
              var t = this;
              if (!this.data.chipData.crossPrice) {
                var i = this.props.colorProp,
                  e = [
                    { color: i.drop, text: "套牢" },
                    { color: i.rise, text: "获利" },
                    { color: i.chip.blue, text: "平均" },
                  ];
                e.map(function (s, r) {
                  var o = s.color,
                    a = s.text,
                    n = t.region.x + (t.region.width / e.length) * r + 10,
                    h = t.region.chart.y + t.region.chart.height - 4;
                  rt(
                    t.ctx,
                    n,
                    h + 9 * t.props.devicePixelRatio,
                    6 * t.props.devicePixelRatio,
                    6 * t.props.devicePixelRatio,
                    o,
                    o,
                    1
                  ),
                    I(
                      t.ctx,
                      a,
                      n + 9 * t.props.devicePixelRatio,
                      h + 12 * t.props.devicePixelRatio,
                      {
                        color: i.chip.text,
                        font: "500 "
                          .concat(11 * t.props.devicePixelRatio, "px ")
                          .concat(t.props.textProp.fontType),
                        textAlign: E,
                        baseLine: W,
                      }
                    );
                });
              }
            },
          },
          {
            key: "calcLineList",
            value: function () {
              var t = this.data.chipData.chip,
                i = this.getChartMaxMin(),
                e = i.max,
                s = i.min,
                r = [];
              return (
                t.list.map(function (i, o) {
                  var a = +t.prices[o];
                  a >= s && a <= e && r.push({ data: i, index: o });
                }),
                r
              );
            },
          },
          {
            key: "drawLinearShapes",
            value: function () {
              var t = this,
                i = this.props,
                e = i.colorProp,
                s = i.lineProp,
                r = this.data.chipData,
                o = r.chip,
                a = r.currentPrice,
                n = r.avgPrice,
                h = this.calcLineList(),
                c = this.getChartMaxMin(),
                p = c.min,
                l = c.max;
              h.map(function (i) {
                var r = o.prices[i.index] < a ? e.rise : e.drop,
                  h = t.region.chart.width * (i.data / o.maxValue),
                  c =
                    t.region.y +
                    t.region.chart.height *
                      (1 - Math.abs(o.prices[i.index] - p) / Math.abs(l - p)) +
                    s.border / 2,
                  d = { x: t.region.x + 2, y: c },
                  u = { x: t.region.x + 2 + h, y: c };
                if (o.prices[i.index] == n) {
                  var g = t.props.isWzqMiniProgram ? "#FF891E" : e.chip.blue;
                  at(
                    t.ctx,
                    d.x,
                    d.y,
                    d.x + t.region.width,
                    u.y,
                    g,
                    "dash",
                    null,
                    [3, 3],
                    s.border
                  );
                } else at(t.ctx, d.x, d.y, u.x, u.y, r, null, null, null, s.border);
              });
            },
          },
          {
            key: "drawTipPrice",
            value: function () {
              var t = this.props.colorProp,
                i = this.data.chipData,
                e = i.chip,
                s = i.avgPrice,
                r = {
                  color: "#fff",
                  font: "400 "
                    .concat(9 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                o = this.calcLineList(),
                a = this.getChartMaxMin(),
                n = a.min,
                h = a.max,
                c = e.prices.findIndex(function (t) {
                  return t == s;
                }),
                p = o.findIndex(function (t) {
                  return t.data === e.list[c];
                });
              if (Array.isArray(o) && p >= 0) {
                var l = D(this.ctx, s.toFixed(2), r),
                  d = D(this.ctx, "平均成本", r),
                  u = Math.max(l, d);
                if (this.props.isWzqMiniProgram) {
                  var g = "rgba(255, 137, 30, 0.5)",
                    x = this.props.devicePixelRatio,
                    m = {
                      x: this.region.x + this.region.width - (u + 6 * x),
                      y:
                        this.region.y +
                        this.region.chart.height *
                          (1 - Math.abs(e.prices[c] - n) / Math.abs(h - n)) -
                        14 * this.props.devicePixelRatio,
                    };
                  ot(this.ctx, m.x, m.y + 2 * x, u + 6 * x, 22 * x, 4, g, g, 1),
                    I(
                      this.ctx,
                      s.toFixed(2),
                      m.x + u + 3 * x,
                      m.y + 9 * x,
                      {
                        color: "#fff",
                        font: "400 "
                          .concat(9 * x, "px ")
                          .concat(this.props.textProp.fontType),
                        textAlign: N,
                        baseLine: W,
                      },
                      l
                    ),
                    I(this.ctx, "平均成本", m.x + u + 3 * x, m.y + 19 * x, {
                      color: "#fff",
                      font: "400 "
                        .concat(9 * x, "px ")
                        .concat(this.props.textProp.fontType),
                      textAlign: N,
                      baseLine: W,
                    });
                } else {
                  var f = {
                    x:
                      this.region.x +
                      this.region.width -
                      (l + 10 * this.props.devicePixelRatio),
                    y:
                      this.region.y +
                      this.region.chart.height *
                        (1 - Math.abs(e.prices[c] - n) / Math.abs(h - n)) -
                      14 * this.props.devicePixelRatio,
                  };
                  rt(
                    this.ctx,
                    f.x,
                    f.y,
                    l + 10 * this.props.devicePixelRatio,
                    15 * this.props.devicePixelRatio,
                    t.chip.lightBlue,
                    t.chip.lightBlue,
                    1
                  ),
                    I(
                      this.ctx,
                      s.toFixed(2),
                      f.x + (l + 10 * this.props.devicePixelRatio) / 2,
                      f.y + 7 * this.props.devicePixelRatio,
                      {
                        color: "#fff",
                        font: "400 "
                          .concat(9 * this.props.devicePixelRatio, "px ")
                          .concat(this.props.textProp.fontType),
                        textAlign: Y,
                        baseLine: W,
                      },
                      l
                    );
                }
              }
            },
          },
          {
            key: "getPortraitTexts",
            value: function () {
              var t = this.props.devicePixelRatio,
                i = 5 * t,
                e = this.props.colorProp,
                s = this.data.chipData,
                r = s.avgPrice,
                o = s.profitPercent,
                a = s.p90,
                n = s.p70,
                h = s.showType,
                c = "p90" === (void 0 === h ? "p90" : h),
                p =
                  this.region.height -
                  this.region.chart.height -
                  this.region.chart.y,
                l = this.region.chart.height + this.region.chart.y + p / 2,
                d = isNaN(o.replace("%", ""))
                  ? 0
                  : parseFloat(o.replace("%", "")) / 100,
                u = [];
              return (
                350 > p
                  ? (u.push({
                      x: this.region.x + 3 * t,
                      y: l - 11 * t,
                      value: "获利比例",
                      fontSize: 11,
                      color: e.chip.subTitle,
                      alwayShow: !0,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 53 * t,
                      y: l - 11 * t,
                      width: this.region.width - 55 * t,
                      height: 13 * t,
                      radius: 2,
                      color: e.drop,
                      alwayShow: !0,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 53 * t,
                      y: l - 11 * t,
                      width: (this.region.width - 55 * t) * d,
                      height: 13 * t,
                      radius: {
                        borderTopLeftRadius: 2,
                        borderBottomLeftRadius: 2,
                      },
                      color: e.rise,
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 55 * t,
                      y: l - 11 * t,
                      value: o,
                      color: e.chip.white,
                      fontWeight: 600,
                      fontSize: 11,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 3 * t,
                      y: l + 10 * t,
                      value: "平均成本",
                      fontSize: 11,
                      color: e.chip.subTitle,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 55 * t,
                      y: l + 10 * t,
                      value: isNaN(r) ? "--" : r.toFixed(2),
                      fontSize: 11,
                      color: e.chip.subTitle,
                      fontWeight: 600,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }))
                  : (u.push({
                      x: this.region.x + 3 * t,
                      y: l - 24 * t - 2 * i,
                      value: "获利比例",
                      fontSize: 11,
                      color: e.chip.subTitle,
                      alwayShow: !0,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 53 * t,
                      y: l - 24 * t - 2 * i - 1 * t,
                      width: this.region.width - 55 * t,
                      height: 13 * t,
                      radius: 2,
                      color: e.drop,
                      alwayShow: !0,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 53 * t,
                      y: l - 24 * t - 2 * i - 1 * t,
                      width: (this.region.width - 55 * t) * d,
                      height: 13 * t,
                      radius: {
                        borderTopLeftRadius: 2,
                        borderBottomLeftRadius: 2,
                      },
                      color: e.rise,
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 55 * t,
                      y: l - 24 * t - 2 * i,
                      value: o,
                      color: e.chip.white,
                      fontWeight: 600,
                      fontSize: 11,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 3 * t,
                      y: l - 12 * t - i,
                      value: "平均成本",
                      fontSize: 11,
                      color: e.chip.subTitle,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 55 * t,
                      y: l - 12 * t - i,
                      value: isNaN(r) ? "--" : r.toFixed(2),
                      fontSize: 11,
                      color: e.chip.subTitle,
                      fontWeight: 600,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 2 * t,
                      y: l - 3 * t,
                      width: (this.region.chart.width - 3 * t) / 2,
                      height: 45,
                      radius: {
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                      },
                      color: e.chip.tabBg,
                      fillColor: c ? e.chip.tabBg : e.chip.white,
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x:
                        this.region.x +
                        2 * t +
                        (this.region.chart.width - 3 * t) / 2,
                      y: l - 3 * t,
                      width: (this.region.chart.width - 3 * t) / 2,
                      height: 45,
                      radius: {
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                      },
                      color: e.chip.tabBg,
                      fillColor: c ? e.chip.white : e.chip.tabBg,
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x:
                        this.region.x +
                        Math.min(200, (this.region.width - 50) / 2) / 2 -
                        60,
                      y: l,
                      color: c ? e.chip.white : e.chip.tabBg,
                      value: "90%筹码",
                      fontSize: 11,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x:
                        this.region.x +
                        3 * t +
                        1.5 * Math.min(200, (this.region.width - 50) / 2) -
                        60,
                      y: l,
                      color: c ? e.chip.tabBg : e.chip.white,
                      value: "70%筹码",
                      fontSize: 11,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 3 * t,
                      y: l + 12 * t + i,
                      color: e.chip.subTitle,
                      value: "价格:".concat(c ? a.price : n.price),
                      fontSize: 11,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 3 * t,
                      y: l + 24 * t + 2 * i,
                      value: "集中度:".concat(c ? a.percent : n.percent),
                      fontSize: 11,
                      color: e.chip.subTitle,
                      alwayShow: !1,
                      showType: "kline-portrait",
                    })),
                u.push({
                  x: this.region.x + 3 * t,
                  y: this.region.height - 12 * t,
                  value: this.data.chipTime,
                  color: e.chip.subText,
                  fontSize: 11,
                  showType: "kline-portrait",
                  alwayShow: !1,
                }),
                u
              );
            },
          },
          {
            key: "getLandscapeTexts",
            value: function () {
              var t = this.props.devicePixelRatio,
                i = this.props.colorProp,
                e = this.data.chipData,
                s = e.avgPrice,
                r = e.profitPercent,
                o = e.p90,
                a = e.p70,
                n = e.showType,
                h = "p90" === (void 0 === n ? "p90" : n),
                c =
                  this.region.height -
                  this.region.chart.height -
                  this.region.chart.y,
                p = this.region.chart.height + this.region.chart.y + c / 2,
                l = c / 5,
                d = (Math.max(l, 30) - 30) / 2,
                u = isNaN(r.replace("%", ""))
                  ? 0
                  : parseFloat(r.replace("%", "")) / 100;
              return [
                {
                  x: this.region.x + 3 * t,
                  y: p - 1.5 * l + d,
                  value: "获利比例",
                  fontSize: 11,
                  color: i.chip.subTitle,
                  alwayShow: !0,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 53 * t,
                  y: p - 1.5 * l + d,
                  width: this.region.width - 55 * t,
                  height: 13 * t,
                  radius: 2,
                  color: i.drop,
                  alwayShow: !0,
                  ctrlType: "radiusRect",
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 53 * t,
                  y: p - 1.5 * l + d,
                  width: (this.region.width - 55 * t) * u,
                  height: 13 * t,
                  radius: { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
                  color: i.rise,
                  alwayShow: !1,
                  ctrlType: "radiusRect",
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 55 * t,
                  y: p - 1.5 * l + d,
                  value: r,
                  color: i.chip.white,
                  fontWeight: 600,
                  fontSize: 11,
                  alwayShow: !1,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 3 * t,
                  y: p - 0.5 * l + d,
                  value: "平均成本",
                  fontSize: 11,
                  color: i.chip.subTitle,
                  alwayShow: !1,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 55 * t,
                  y: p - 0.5 * l + d,
                  value: isNaN(s) ? "--" : s.toFixed(2),
                  fontSize: 11,
                  color: i.chip.subTitle,
                  fontWeight: 600,
                  alwayShow: !1,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 3 * t,
                  y: p + 0.5 * l + 3 * t,
                  color: i.chip.tabBg,
                  fillColor: h ? i.chip.tabBg : i.chip.white,
                  width: 30 * t,
                  height: 15 * t,
                  radius: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
                  ctrlType: "radiusRect",
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 3 * t,
                  y: p + 1.5 * l + 1 * t,
                  color: i.chip.tabBg,
                  fillColor: h ? i.chip.white : i.chip.tabBg,
                  width: 30 * t,
                  height: 15 * t,
                  radius: {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  },
                  ctrlType: "radiusRect",
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 8 * t,
                  y: p + l / 2 + d,
                  color: h ? i.chip.white : i.chip.tabBg,
                  value: "90%",
                  fontSize: 11,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 8 * t,
                  y: p + 1.5 * l + d,
                  color: h ? i.chip.tabBg : i.chip.white,
                  value: "70%",
                  fontSize: 11,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 38 * t,
                  y: p + 0.5 * l + d,
                  color: i.chip.subTitle,
                  value: "价格:".concat(h ? o.price : a.price),
                  fontSize: 11,
                  alwayShow: !1,
                  showType: "kline-landscape",
                },
                {
                  x: this.region.x + 38 * t,
                  y: p + 1.5 * l + d,
                  value: "集中度:".concat(h ? o.percent : a.percent),
                  fontSize: 11,
                  color: i.chip.subTitle,
                  alwayShow: !1,
                  showType: "kline-landscape",
                },
              ];
            },
          },
          {
            key: "getPortraitTextsMini",
            value: function () {
              var t = this.props.devicePixelRatio,
                i = this.props.colorProp,
                e = this.data.chipData,
                s = (e.avgPrice, e.profitPercent),
                r = e.p90,
                o = e.p70,
                a = e.showType,
                n = "p90" === (void 0 === a ? "p90" : a);
              this.region.height, this.region.chart.height, this.region.chart.y;
              var h = isNaN(s.replace("%", ""))
                  ? 0
                  : parseFloat(s.replace("%", "")) / 100,
                c = this.region.chart.height + this.region.y,
                p =
                  (this.region.height - this.region.chart.height - 71.8 * t) /
                  3,
                l = p / t > 7.71 ? 7.71 * t : p,
                d = this.region.width,
                u = [];
              return (
                u.push({
                  x: this.region.x + 1 * t,
                  y: c + 8 * t,
                  value: "获利比例:",
                  fontSize: 10.5,
                  color: "#7A8499",
                  alwayShow: !0,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u.push({
                  x: this.region.x + 53 * t,
                  y: c + 2 * t,
                  width: d - 53 * t,
                  height: 12 * t,
                  radius: 4,
                  color: i.drop,
                  alwayShow: !0,
                  ctrlType: "radiusRect",
                  showType: "kline-portrait",
                }),
                u.push({
                  x: this.region.x + 53 * t,
                  y: c + 2 * t,
                  width: (d - 53 * t) * h,
                  height: 12 * t,
                  radius: { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
                  color: i.rise,
                  alwayShow: !1,
                  ctrlType: "radiusRect",
                  showType: "kline-portrait",
                }),
                u.push({
                  x: this.region.x + 56 * t,
                  y: c + 8 * t,
                  value: s,
                  color: i.chip.white,
                  fontWeight: 500,
                  fontSize: 10,
                  alwayShow: !1,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                n
                  ? (u.push({
                      x: this.region.x + d / 2 + 0.5 * t,
                      y: c + 14 * t + l,
                      width: (d - 1 * t) / 2,
                      height: 16 * t,
                      radius: {
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                      },
                      color: n ? "#DCDFE6" : "#98A0B3",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + 1 * t,
                      y: c + 14 * t + l,
                      width: (d - 1 * t) / 2,
                      height: 16 * t,
                      radius: 4,
                      color: n ? "#98A0B3" : "#DCDFE6",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }))
                  : (u.push({
                      x: this.region.x + 1 * t,
                      y: c + 14 * t + l,
                      width: (d - 1 * t) / 2,
                      height: 16 * t,
                      radius: {
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                      },
                      color: n ? "#98A0B3" : "#DCDFE6",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    }),
                    u.push({
                      x: this.region.x + d / 2 + 0.5 * t,
                      y: c + 14 * t + l,
                      width: (d - 1 * t) / 2,
                      height: 16 * t,
                      radius: 4,
                      color: n ? "#DCDFE6" : "#98A0B3",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-portrait",
                    })),
                u.push({
                  x: this.region.x + (d / 2 - 42 * t) / 2,
                  y: c + 23 * t + l,
                  color: n ? "#475166" : "#7A8499",
                  value: "90%筹码",
                  fontSize: 10.5,
                  fontWeight: n ? 500 : 400,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u.push({
                  x: this.region.x + d / 2 + (d / 2 - 42 * t) / 2,
                  y: c + 23 * t + l,
                  color: n ? "#7A8499" : "#475166",
                  value: "70%筹码",
                  fontSize: 10.5,
                  fontWeight: n ? 400 : 500,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u.push({
                  x: this.region.x + 1 * t,
                  y: c + 41 * t + l,
                  color: "#7A8499",
                  value: "价格:",
                  fontSize: 10.5,
                  alwayShow: !1,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u.push({
                  x: this.region.x + 33 * t,
                  y: c + 41 * t + l,
                  color: "#262E40",
                  value: "".concat(n ? r.price : o.price),
                  fontSize: 10.5,
                  fontWeight: 500,
                  alwayShow: !1,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u.push({
                  x: this.region.x + 1 * t,
                  y: c + 56 * t + l,
                  value: "集中度:",
                  fontSize: 10.5,
                  color: "#7A8499",
                  alwayShow: !1,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u.push({
                  x: this.region.x + 45 * t,
                  y: c + 56 * t + l,
                  value: "".concat(n ? r.percent : o.percent),
                  fontSize: 10.5,
                  fontWeight: 500,
                  color: "#262E40",
                  alwayShow: !1,
                  showType: "kline-portrait",
                  baseLine: "middle",
                }),
                u
              );
            },
          },
          {
            key: "getLandscapeTextsMini",
            value: function () {
              var t = this.props.devicePixelRatio,
                i = this.props.colorProp,
                s = this.data.chipData,
                r = (s.avgPrice, s.profitPercent),
                o = s.p90,
                a = s.p70,
                n = s.showType,
                h = "p90" === (void 0 === n ? "p90" : n);
              this.region.height,
                this.region.chart.height,
                this.region.chart.y,
                this.region.chart.height,
                this.region.chart.y;
              var c,
                p = isNaN(r.replace("%", ""))
                  ? 0
                  : parseFloat(r.replace("%", "")) / 100,
                l = this.region.chart.height + this.region.y,
                d =
                  (this.region.height - this.region.chart.height - 71.8 * t) /
                  3,
                u = this.region.width,
                g = [
                  {
                    x: this.region.x + 1 * t,
                    y: l + 9 * t,
                    value: "获利比例:",
                    fontSize: 10.5,
                    color: "#7A8499",
                    alwayShow: !0,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                  {
                    x: this.region.x + 53 * t,
                    y: l + 3 * t,
                    width: u - 53 * t,
                    height: 12 * t,
                    radius: 4,
                    color: i.drop,
                    alwayShow: !0,
                    ctrlType: "radiusRect",
                    showType: "kline-landscape",
                  },
                  {
                    x: this.region.x + 53 * t,
                    y: l + 3 * t,
                    width: (u - 53 * t) * p,
                    height: 12 * t,
                    radius: {
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                    },
                    color: i.rise,
                    alwayShow: !1,
                    ctrlType: "radiusRect",
                    showType: "kline-landscape",
                  },
                  {
                    x: this.region.x + 55 * t,
                    y: l + 9 * t,
                    value: r,
                    color: i.chip.white,
                    fontWeight: 500,
                    fontSize: 10,
                    alwayShow: !1,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                ];
              c = h
                ? [
                    {
                      x: this.region.x + u / 2 + 0.5 * t,
                      y: l + 14 * t + d,
                      width: (u - 1 * t) / 2,
                      height: 16 * t,
                      radius: {
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                      },
                      color: h ? "#DCDFE6" : "#98A0B3",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-landscape",
                    },
                    {
                      x: this.region.x + 1 * t,
                      y: l + 14 * t + d,
                      width: (u - 1 * t) / 2,
                      height: 16 * t,
                      radius: 4,
                      color: h ? "#98A0B3" : "#DCDFE6",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-landscape",
                    },
                  ]
                : [
                    {
                      x: this.region.x + 1 * t,
                      y: l + 14 * t + d,
                      width: (u - 1 * t) / 2,
                      height: 16 * t,
                      radius: {
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                      },
                      color: h ? "#98A0B3" : "#DCDFE6",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-landscape",
                    },
                    {
                      x: this.region.x + u / 2 + 0.5 * t,
                      y: l + 14 * t + d,
                      width: (u - 1 * t) / 2,
                      height: 16 * t,
                      radius: 4,
                      color: h ? "#DCDFE6" : "#98A0B3",
                      fillColor: "transparent",
                      alwayShow: !1,
                      ctrlType: "radiusRect",
                      showType: "kline-landscape",
                    },
                  ];
              var x = [
                  {
                    x: this.region.x + (u / 2 - 42 * t) / 2,
                    y: l + 22.5 * t + d,
                    color: h ? "#475166" : "#7A8499",
                    value: "90%筹码",
                    fontSize: 10.5,
                    fontWeight: h ? 500 : 400,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                  {
                    x: this.region.x + u / 2 + (u / 2 - 42 * t) / 2,
                    y: l + 22.5 * t + d,
                    color: h ? "#7A8499" : "#475166",
                    value: "70%筹码",
                    fontSize: 10.5,
                    fontWeight: h ? 400 : 500,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                ],
                m = [
                  {
                    x: this.region.x + 1 * t,
                    y: l + 42 * t + d,
                    color: "#7A8499",
                    value: "价格:",
                    fontSize: 10.5,
                    alwayShow: !1,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                  {
                    x: this.region.x + 33 * t,
                    y: l + 42 * t + d,
                    color: "#262E40",
                    value: "".concat(h ? o.price : a.price),
                    fontSize: 10.5,
                    fontWeight: 500,
                    alwayShow: !1,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                  {
                    x: this.region.x + 1 * t,
                    y: l + 58 * t + d,
                    value: "集中度:",
                    fontSize: 10.5,
                    color: "#7A8499",
                    alwayShow: !1,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                  {
                    x: this.region.x + 45 * t,
                    y: l + 58 * t + d,
                    value: "".concat(h ? o.percent : a.percent),
                    fontSize: 10.5,
                    fontWeight: 500,
                    color: "#262E40",
                    alwayShow: !1,
                    showType: "kline-landscape",
                    baseLine: "middle",
                  },
                ];
              return [].concat(g, e(c), x, m);
            },
          },
          {
            key: "drawText",
            value: function () {
              var t = this,
                i = this.props.devicePixelRatio,
                e = this.props.colorProp;
              if (this.data && this.data.chipData) {
                var s = !this.data.chipData.crossPrice,
                  r = [];
                if (
                  ((r = this.props.isWzqMiniProgram
                    ? "kline-landscape" === this.props.layout
                      ? this.getLandscapeTextsMini()
                      : this.getPortraitTextsMini()
                    : "kline-landscape" === this.props.layout
                    ? this.getLandscapeTexts()
                    : this.getPortraitTexts()),
                  !s)
                ) {
                  var o = +this.data.chipData.crossPrice > 1e4 ? 1 : 2;
                  this.props.isWzqMiniProgram ||
                    r.push({
                      x: this.region.x + 3 * i,
                      y: this.region.chart.y + this.region.chart.height + 15,
                      color: e.chip.subTitle,
                      fontSize: 11,
                      value: ""
                        .concat(
                          this.data.chipData.crossPrice.toFixed(o),
                          "处获利："
                        )
                        .concat(
                          (100 * this.data.chipData.crossProfitPercent).toFixed(
                            2
                          ),
                          "%"
                        ),
                      alwayShow: !0,
                    });
                }
                r.map(function (e) {
                  var s = e.value,
                    r = e.x,
                    o = e.y,
                    a = e.fontSize,
                    n = void 0 === a ? 11 : a,
                    h = e.fontWeight,
                    c = void 0 === h ? 400 : h,
                    p = e.color,
                    l = e.ctrlType,
                    d = void 0 === l ? "text" : l,
                    u = e.baseLine,
                    g = void 0 === u ? "" : u;
                  if (e.alwayShow || e.showType === t.props.layout)
                    switch (d) {
                      case "radiusRect":
                        var x = t.props.isWzqMiniProgram ? 1 : 1 * i;
                        ot(
                          t.ctx,
                          r,
                          o,
                          e.width,
                          e.height,
                          e.radius,
                          p,
                          e.fillColor || p,
                          x
                        );
                        break;
                      case "rect":
                        rt(t.ctx, r, o, e.width, e.height, p, p, 1);
                        break;
                      default:
                        I(t.ctx, s, r, o, {
                          color: p,
                          font: ""
                            .concat(c, " ")
                            .concat(n * i, "px ")
                            .concat(t.props.textProp.fontType),
                          textAlign: E,
                          baseLine: g || B,
                        });
                    }
                });
              }
            },
          },
        ]),
        t
      );
    })(),
    candle: (function () {
      function t(i, e, s, r, o) {
        a(this, t),
          Array.isArray(i)
            ? ((this.ctx = i[0]), (this.ctxCross = i[1]))
            : ((this.ctx = i), (this.ctxCross = i)),
          this.updateProps(e, s, r, o),
          (this.drawAddZXData = null),
          (this.drawTradePointData = []),
          (this.fqWidth = 0),
          (this.extraInfoHeight = 0 * this.props.devicePixelRatio),
          (this.gapInfo = []);
      }
      return (
        n(t, [
          {
            key: "updateProps",
            value: function (t, i, e, s) {
              if (
                ((this.region = e),
                (this.props = i),
                (this.data = t),
                (this.kmax = t.maxMin.candle.max),
                (this.kmin = t.maxMin.candle.min),
                i.fixedWidth)
              )
                (this.max = t.maxMin.kline.max),
                  (this.min = t.maxMin.kline.min);
              else {
                var r = k(t, i),
                  o = r.max,
                  a = r.min;
                (this.max = o), (this.min = a);
              }
              return (
                (this.props.posx = []),
                (this.loadPos = {
                  show: !1,
                  x: this.region.chart.x,
                  y: this.region.chart.y + (7 * this.region.chart.height) / 12,
                }),
                (this.drawAddZXData = null),
                (this.drawTradePointData = []),
                (this.gapInfo = []),
                (this.fqWidth = 0),
                this
              );
            },
          },
          {
            key: "draw",
            value: function () {
              var t = this,
                i = this.ctx,
                e = this.props,
                s = this.region,
                r = s.chart,
                o = s.xAxis,
                a = [],
                n = [],
                h = e.colorProp,
                c = e.lineProp,
                p = ri(e);
              (e.yAixsCount = p.yAixsCount),
                (e.hlineCount = p.hlineCount),
                (e.posx = e.posx || []);
              var l = {
                font: "400 "
                  .concat(10 * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: Y,
                baseLine: W,
                color: h.xAxis,
              };
              if (
                ((this.trendlineCoord = { left: {}, point: [], right: {} }),
                !e.isSplitRendCross)
              ) {
                new Rt({
                  ctx: i,
                  region: r,
                  drawCallback: function (i) {
                    var s = i.getX(i.index) + e.itemWidth / 2,
                      o = e.getXAxis(
                        i.index,
                        s,
                        i.currItem,
                        t.data.items,
                        e.posx,
                        e.count
                      );
                    o &&
                      s > r.x &&
                      s < r.x + r.width &&
                      ((o.props = f(m({}, l), {
                        textAlign: Y,
                        padding: e.isWzqMiniProgram
                          ? 1 * e.devicePixelRatio
                          : 0,
                      })),
                      e.posx.push(o));
                  },
                  data: {
                    items: this.data.items,
                    max: this.max,
                    min: this.min,
                  },
                  count: e.count,
                });
                var d = {
                  vline: {
                    color: h.vline,
                    lineWidth: c.vline,
                    posx: e.isWzqMiniProgram ? [] : e.posx,
                  },
                  hline: {
                    color: h.hline,
                    lineWidth: c.hline,
                    count: e.hlineCount,
                  },
                };
                if (
                  (e.isWzqMiniProgram
                    ? ((d.hline.posy = [
                        { x: r.x, y: 0 },
                        { x: r.x, y: r.y + r.height / 2 },
                        { x: r.x, y: r.y + r.height },
                      ]),
                      "kline-landscape" === this.props.layout &&
                        d.hline.posy.splice(1, 0, { x: r.x, y: r.y }))
                    : (d.border = { color: h.border, lineWidth: c.border }),
                  new mt(i, d, r),
                  this.props.fq && !this.props.crossLineItem)
                ) {
                  var u = {
                    color: this.props.colorProp.tip,
                    font: "400 "
                      .concat(10 * this.props.devicePixelRatio, "px ")
                      .concat(this.props.textProp.fontType),
                    baseLine: W,
                  };
                  (this.fqWidth = D(i, "前复权", u)),
                    I(
                      i,
                      "".concat(["前", "后", "不"][this.props.fq - 1], "复权"),
                      r.x + this.region.chartAndChipWidth - this.fqWidth,
                      r.y / 2,
                      u,
                      this.fqWidth
                    );
                }
                this.props.isShowChip ||
                  this.props.hideFQ ||
                  this.drawSeparateLine(),
                  this.getGappedGap(),
                  e.fixedWidth
                    ? new Mi(
                        this.ctx,
                        this.data,
                        this.props,
                        r,
                        ["close"],
                        this.max,
                        this.min
                      ).draw()
                    : ((this.candleShapes = {
                        rise: [],
                        drop: [],
                        flat: [],
                        volatile: { rise: [], drop: [] },
                      }),
                      new Rt({
                        ctx: i,
                        region: f(m({}, r), {
                          height: r.height - this.extraInfoHeight,
                        }),
                        drawCallback: function (s) {
                          return t.drawCandle(i, s, e, a, n);
                        },
                        data: {
                          items: this.data.items,
                          max: this.max,
                          min: this.min,
                        },
                        count: e.count,
                      })),
                  this.props.hideMaxMinTip || this.drawMaxMin(a);
              }
              (this.candleIndicator = new $i(
                [this.ctx, this.ctxCross],
                this.data,
                this.props,
                this.region
              )),
                this.props.disableMainIndicator || this.candleIndicator.draw(),
                e.isSplitRendCross ||
                  (this.loadPos.show &&
                    (I(i, vi, this.loadPos.x, this.loadPos.y, {
                      color: "#3077EC",
                      font: "400 "
                        .concat(10 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                    }),
                    "kline-landscape" === this.props.layout &&
                      kt(
                        i,
                        0,
                        this.region.chart.y,
                        this.region.chart.x,
                        this.region.chart.y + this.region.chart.height
                      )),
                  o && new _(this.ctx, w, e.posx, o).draw(),
                  new _(
                    this.ctx,
                    P,
                    (function (t, i, s) {
                      for (
                        var o = (t - i) / (s - 1),
                          a = [],
                          n = r.y,
                          c = r.height / (s - 1),
                          p = 0;
                        p < s;
                        p++
                      )
                        a.push({
                          text: Ji(t - p * o, e.fixNum || 2),
                          y: p * c + n,
                          props: {
                            baseLine: 0 == p ? B : F,
                            color: h.yAxis,
                            font: "400 "
                              .concat(10 * e.devicePixelRatio, "px ")
                              .concat(e.fontType),
                            textAlign: E,
                            padding: e.isWzqMiniProgram
                              ? (p ? -3 : 3) * e.devicePixelRatio
                              : 0,
                          },
                        });
                      return a;
                    })(this.max, this.min, e.yAixsCount),
                    r
                  ).draw(),
                  this.drawAddedMark(),
                  this.drawKlineExtraInfo(),
                  e.setting.gap && 3 === n.length && this.drawGappedGap(n),
                  e.setting.macdPattern &&
                    e.crossLineItem &&
                    ("kline-landscape" === e.layout ||
                      e.setting.macdPatternFocus) &&
                    this.drawMACDDeviate(),
                  /Focus/.test(e.guideMode) && this.drawGuideFocus());
            },
          },
          {
            key: "getZXData",
            value: function () {
              var t = this,
                i = this.props,
                e = this.region.chart;
              i.fixedWidth &&
                this.data.items.map(function (s, r) {
                  if (s.fh && s.fh.since_add_zdf) {
                    var o = t,
                      a = {
                        getX: function (t) {
                          return (e.width / i.count) * t;
                        },
                        getY: function (t) {
                          var i = (o.max + o.min) / 2,
                            s = Math.max(
                              Math.abs(o.max - i),
                              Math.abs(o.min - i)
                            );
                          return 0 === s
                            ? NaN
                            : (-(t - i) / s) * (e.height / 2);
                        },
                      };
                    t.drawAddZXData = {
                      index: r,
                      curr: a,
                      currItem: s,
                      x: a.getX(r) + i.itemWidth / 2,
                      topY: a.getY(s.close),
                      bottomY: a.getY(s.close),
                    };
                  }
                });
            },
          },
          {
            key: "drawMaxMin",
            value: function (t) {
              var i,
                e,
                s,
                r,
                o,
                a,
                n,
                h = this.ctx,
                c = this.props.maxminDist,
                p = this.region.chart;
              for (
                p = f(m({}, p), { height: p.height - this.extraInfoHeight }),
                  h.save(),
                  h.translate(p.x, p.y + p.height / 2),
                  i = 0;
                i < t.length;
                i++
              )
                if (t[i]) {
                  (r = t[i].text).toFixed &&
                    (r = r.toFixed(this.props.fixNum || 2)),
                    (o = t[i].rightRegion),
                    (e = D(h, r, {
                      font: "400 "
                        .concat(10 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                    })),
                    (a = t[i].x),
                    (n = t[i].y),
                    (c = this.props.maxminDist),
                    a < 16 * this.props.devicePixelRatio
                      ? (c *= a < 5 * this.props.devicePixelRatio ? 4 : 2.5)
                      : (c = this.props.maxminDist),
                    (s = o ? a - c - e : a + c),
                    I(
                      h,
                      r,
                      Math.max(s, 0),
                      n,
                      {
                        baseLine: t[i].baseline,
                        color: this.props.colorProp.maxMin,
                        font: "400 "
                          .concat(10 * this.props.devicePixelRatio, "px ")
                          .concat(this.props.textProp.fontType),
                      },
                      e
                    );
                  var l = o ? Math.max(s + e, 0) : s;
                  at(
                    h,
                    Math.min(a, l),
                    n,
                    Math.max(a, l),
                    n,
                    this.props.colorProp.maxMinLine,
                    "dash",
                    null,
                    [5, 2],
                    this.props.lineProp.maxmin
                  );
                }
              h.restore();
            },
          },
          {
            key: "drawCandle",
            value: function (t, i, e, s, r) {
              var o;
              if (i.currItem.forBounce)
                return /^m(1|5|10|15|20|30|60|120)$/.test(this.props.type) &&
                  "已到上市首日" === vi
                  ? void (this.loadPos.show = !1)
                  : ((this.loadPos.show = !0),
                    void (this.loadPos.x =
                      this.region.chart.x +
                      3 * (i.index - yi + 7) * this.props.devicePixelRatio));
              var a = e.colorProp,
                n = e.isShowVolatile,
                h = void 0 !== n && n,
                c = i.index,
                p = i.currItem,
                l = e.itemWidth,
                d = e.barWidth,
                u = i.getX(c) + l / 2,
                g = i.getY(p.open),
                x = i.getY(p.close),
                m = i.getY(p.low),
                f = i.getY(p.high),
                v = At(p.open, p.close, p.preClose, a.rise, a.drop, a.flat),
                y = {
                  data: p,
                  midX: u,
                  candleY: {
                    openY: g,
                    closeY: x,
                    highY: f,
                    lowY: m,
                    tradeLineStyle: null == (o = p.opData) ? void 0 : o.style,
                  },
                };
              if (h && p.band_low && p.band_high) {
                var w = i.getY(p.band_low),
                  P = i.getY(p.band_high),
                  b = {
                    x: u - d / 2 + 0.5,
                    y: Math.min(w, P),
                    width: d,
                    height: Math.abs(w - P),
                  };
                1 == +p.band_color
                  ? this.candleShapes.volatile.rise.push(b)
                  : this.candleShapes.volatile.drop.push(b);
              }
              switch (v) {
                case a.rise:
                  this.candleShapes.rise.push(y);
                  break;
                case a.drop:
                  this.candleShapes.drop.push(y);
                  break;
                case a.flat:
                  this.candleShapes.flat.push(y);
              }
              i.index === i.length - 1 &&
                (xt(t, e, this.candleShapes.rise, a.rise, a.rise),
                xt(t, e, this.candleShapes.drop, a.drop, a.drop),
                xt(t, e, this.candleShapes.flat, a.flat, a.flat),
                h &&
                  (ut(
                    t,
                    this.candleShapes.volatile.rise,
                    a.volatileBar.rise,
                    a.volatileBar.rise
                  ),
                  ut(
                    t,
                    this.candleShapes.volatile.drop,
                    a.volatileBar.drop,
                    a.volatileBar.drop
                  ))),
                p.high === this.kmax &&
                  (s[0] = {
                    text: this.kmax,
                    x: u,
                    y: f,
                    rightRegion: u > this.region.chart.width / 2,
                    baseline: B,
                  }),
                p.low === this.kmin &&
                  (s[1] = {
                    text: this.kmin,
                    x: u,
                    y: m,
                    rightRegion: u > this.region.chart.width / 2,
                    baseline: F,
                  }),
                e.tradeLineMode
                  ? p.opData &&
                    p.opData.signal &&
                    this.drawTradeLine({
                      index: c,
                      curr: i,
                      currItem: p,
                      x: u,
                      topY: f,
                      bottomY: m,
                    })
                  : (e.setting.magicNine &&
                      p.magicNine &&
                      this.drawMagicNine({
                        currItem: p,
                        x: u,
                        topY: f,
                        bottomY: m,
                      }),
                    e.setting.tradeSecret &&
                      p.tradeSecret &&
                      this.drawTradeSecret({ currItem: p, x: u, bottomY: m }));
              var M = /magicNine/.test(e.guideMode) && p.magicNineLatest,
                R =
                  /tradeLine/.test(e.guideMode) &&
                  e.isSupportTradeLine &&
                  p.opData &&
                  p.opData.latest;
              (M || R) &&
                (/Hint/.test(e.guideMode)
                  ? this.drawGuideHint({
                      index: c,
                      curr: i,
                      currItem: p,
                      x: u,
                      topY: f,
                      bottomY: m,
                    })
                  : /Focus/.test(e.guideMode) &&
                    (this.guidePointLatest = {
                      index: c,
                      curr: i,
                      currItem: p,
                      x: u,
                      topY: f,
                      bottomY: m,
                    })),
                p.fh &&
                  p.fh.since_add_zdf &&
                  (this.drawAddZXData = {
                    index: c,
                    curr: i,
                    currItem: p,
                    x: u,
                    topY: f,
                    bottomY: m,
                  });
              var T = wi.get(p.time);
              if (
                (T &&
                  ((p.tradeType = T),
                  this.drawTradePointData.push({
                    currItem: p,
                    x: u,
                    topY: f,
                    bottomY: m,
                  })),
                5 === this.gapInfo.length &&
                  3 !== r.length &&
                  (this.gapInfo[0] === c && (r[0] = u),
                  this.gapInfo[1] === c &&
                    r.push(this.gapInfo[2] === this.data.items[c].high ? f : m),
                  this.gapInfo[3] === c &&
                    r.push(this.gapInfo[4] === this.data.items[c].high ? f : m),
                  3 === r.length))
              ) {
                var C = Math.min(r[1], r[2]),
                  k = Math.abs(r[1] - r[2]);
                (r[1] = C), (r[2] = k);
              }
            },
          },
          {
            key: "drawGuideHint",
            value: function (t) {
              var i = t.index,
                e = t.curr,
                s = t.currItem,
                r = t.x,
                o = t.topY,
                a = t.bottomY,
                n = /magicNine/.test(this.props.guideMode),
                c = /tradeLine/.test(this.props.guideMode),
                p = this.ctx,
                l = this.region.chart.width,
                d = this.region.chart.height,
                u = this.region.chart.y,
                g = 2 * this.props.devicePixelRatio,
                x = 1.5 * this.props.devicePixelRatio,
                m = g + 2 * x + 30 * this.props.devicePixelRatio,
                f = m,
                v = 44 * this.props.devicePixelRatio,
                y = 27 * this.props.devicePixelRatio,
                w = 1 * this.props.devicePixelRatio,
                P = 2 * this.props.devicePixelRatio,
                b = 3.5 * this.props.devicePixelRatio,
                M = "",
                R = "",
                T = "";
              if (n) {
                M = "神奇九转";
                var C = +s.magicNine;
                (R = C < 0 ? "关注" : "观望"),
                  (T =
                    C < 0
                      ? this.props.colorProp.rise
                      : this.props.colorProp.drop);
              } else if (c) {
                M = "操盘线　";
                var k = +s.opData.signal;
                (R = ["", "关注", "观望", "预警"][k]),
                  (T = [
                    "",
                    this.props.colorProp.rise,
                    this.props.colorProp.drop,
                    "#3077EC",
                  ][k]);
              }
              var A = {
                  color: T,
                  font: ""
                    .concat(9 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                S = 0;
              r - v / 2 < this.props.devicePixelRatio
                ? (S = this.props.devicePixelRatio - (r - v / 2))
                : r + v / 2 > l - this.props.devicePixelRatio &&
                  (S = l - this.props.devicePixelRatio - (r + v / 2));
              for (var L = [], D = i - 2; D <= i + 2; D++)
                L.push(this.data.items[D] || s);
              var B = !1;
              if (o - m - y + d / 2 > u) {
                var F,
                  E = 0,
                  N = h(L);
                try {
                  for (N.s(); !(F = N.n()).done; ) {
                    var _ = F.value,
                      O = e.getY(_.high);
                    E = Math.max(E, o - O);
                  }
                } catch (t) {
                  N.e(t);
                } finally {
                  N.f();
                }
                (m = Math.max(E + 10 * this.props.devicePixelRatio, f)),
                  (m = Math.min(m, o + d / 2 - u)),
                  (B = !1);
              }
              if (o - m - y + d / 2 <= u) {
                var H,
                  j = 0,
                  X = h(L);
                try {
                  for (X.s(); !(H = X.n()).done; ) {
                    var z = H.value,
                      U = e.getY(z.low);
                    j = Math.max(j, U - a);
                  }
                } catch (t) {
                  X.e(t);
                } finally {
                  X.f();
                }
                (m = Math.max(j + 10 * this.props.devicePixelRatio, f)),
                  (B = !0);
              }
              var q = Math.round((m - g - 2 * x) / b) - 1;
              if (B) {
                ht(p, r, a + g + x, x, T, T);
                for (var V = a + g + 2 * x, G = 0; G < q; G++)
                  rt(p, r - w / 2, (V += b) - P / 2, w, P, T, T);
                ot(
                  p,
                  r - v / 2 + S,
                  a + m,
                  v,
                  y,
                  2 * this.props.devicePixelRatio,
                  T
                );
                var K = a + m + y / 4 + this.props.devicePixelRatio,
                  Z = a + m + (y / 4) * 3 - this.props.devicePixelRatio,
                  $ = 5 * this.props.devicePixelRatio;
                if ((I(p, M, r + S, K, A), n)) {
                  I(p, "".concat(R, "   "), r + S, Z, A);
                  var J = r + S + v / 16;
                  ct(
                    p,
                    J,
                    Z - $ / 2,
                    J,
                    Z + $ / 2,
                    J + ($ / 2) * Math.sqrt(3),
                    Z,
                    T,
                    T
                  );
                } else if (c) {
                  I(p, "".concat(R, "信号"), r + S, Z, A);
                  var Q = r + S + (v / 24) * 7;
                  ct(
                    p,
                    Q,
                    K - $ / 2,
                    Q,
                    K + $ / 2,
                    Q + ($ / 2) * Math.sqrt(3),
                    K,
                    T,
                    T
                  );
                }
                this.guideHintRegion = {
                  x: r - v / 2 + S,
                  y: a + m + u + d / 2,
                  width: v,
                  height: y,
                };
              } else {
                ht(p, r, o - g - x, x, T, T);
                for (var tt = o - g - 2 * x, it = 0; it < q; it++)
                  rt(p, r - w / 2, (tt -= b) - P / 2, w, P, T, T);
                ot(
                  p,
                  r - v / 2 + S,
                  o - m - y,
                  v,
                  y,
                  2 * this.props.devicePixelRatio,
                  T
                );
                var et = o - m - (y / 4) * 3 + this.props.devicePixelRatio,
                  st = o - m - y / 4 - this.props.devicePixelRatio,
                  at = 5 * this.props.devicePixelRatio;
                if ((I(p, M, r + S, et, A), n)) {
                  I(p, "".concat(R, "   "), r + S, st, A);
                  var nt = r + S + v / 16;
                  ct(
                    p,
                    nt,
                    st - at / 2,
                    nt,
                    st + at / 2,
                    nt + (at / 2) * Math.sqrt(3),
                    st,
                    T,
                    T
                  );
                } else if (c) {
                  I(p, "".concat(R, "信号"), r + S, st, A);
                  var pt = r + S + (v / 24) * 7;
                  ct(
                    p,
                    pt,
                    et - at / 2,
                    pt,
                    et + at / 2,
                    pt + (at / 2) * Math.sqrt(3),
                    et,
                    T,
                    T
                  );
                }
                this.guideHintRegion = {
                  x: r - v / 2 + S,
                  y: o - m - y + u + d / 2,
                  width: v,
                  height: y,
                };
              }
            },
          },
          {
            key: "drawGuideFocus",
            value: function () {
              var t = this.ctx,
                i = this.guidePointLatest,
                e = i.index,
                s = i.curr,
                r = i.currItem,
                o = i.x,
                a = i.topY,
                n = i.bottomY,
                h = this.region.chart.width,
                c = this.region.chart.height,
                p = "rgba(255, 255, 255, 0.8)";
              if (/magicNine/.test(this.props.guideMode)) {
                var l =
                    +r.magicNine < 0
                      ? "rgba(230, 53, 53, 0.15)"
                      : "rgba(28, 170, 60, 0.15)",
                  d = o + this.props.itemWidth / 2 + this.props.spaceWidth;
                rt(t, 0, -c / 2, d, 2 * c, p, p),
                  rt(t, d, -c / 2, h - d, 2 * c, l, l);
              } else if (/tradeLine/.test(this.props.guideMode)) {
                var u =
                  1 == +r.opData.signal
                    ? "rgba(230, 53, 53, 0.2)"
                    : "rgba(28, 170, 60, 0.2)";
                rt(t, 0, -c / 2, o, 2 * c, p, p),
                  rt(t, o, -c / 2, h - o, 2 * c, u, u),
                  t.save(),
                  t.translate(this.region.chart.x, this.region.chart.y + c / 2),
                  this.drawTradeLine({
                    index: e,
                    curr: s,
                    currItem: r,
                    x: o,
                    topY: a,
                    bottomY: n,
                  }),
                  t.restore();
              }
              this.guidePointLatest.ratio = o / h;
            },
          },
          {
            key: "drawMagicNine",
            value: function (t) {
              var i = t.currItem,
                e = t.x,
                s = t.topY,
                r = t.bottomY,
                o = this.ctx,
                a = +i.magicNine,
                n = 8 * this.props.devicePixelRatio,
                h = 10 * this.props.devicePixelRatio,
                c = 4 * this.props.devicePixelRatio,
                p = {
                  color: "#FF891E",
                  font: "500 "
                    .concat(9 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                };
              if (a > 0) {
                var l = 9 === a;
                ot(
                  o,
                  e - n / 2,
                  s - c - h,
                  n,
                  h,
                  2,
                  l ? "rgba(28, 170, 60, 0.5)" : "rgba(255, 137, 30, 0.5)",
                  l ? "rgba(28, 170, 60, 0.1)" : "rgba(255, 137, 30, 0.1)",
                  1
                ),
                  (p.color = l ? "#1CAA3C" : "#FF891E"),
                  this.props.isWzqMiniProgram
                    ? I(o, a, e, s - c - h / 2, p, n)
                    : I(o, a, e, s - c - h / 2, p);
              } else {
                var d = -9 === a;
                ot(
                  o,
                  e - n / 2,
                  r + c,
                  n,
                  h,
                  2,
                  d ? "rgba(230, 53, 53, 0.5)" : "rgba(255, 137, 30, 0.5)",
                  d ? "rgba(230, 53, 53, 0.1)" : "rgba(255, 137, 30, 0.1)",
                  1
                ),
                  (p.color = d ? "#E63535" : "#FF891E"),
                  this.props.isWzqMiniProgram
                    ? I(o, -a, e, r + c + h / 2, p, n)
                    : I(o, -a, e, r + c + h / 2, p);
              }
            },
          },
          {
            key: "drawTradeSecret",
            value: function (t) {
              var i = t.currItem,
                e = t.x,
                s = t.bottomY,
                r = this.ctx,
                o = 12 * this.props.devicePixelRatio,
                a = 12 * this.props.devicePixelRatio,
                n = 4 * this.props.devicePixelRatio;
              this.props.setting.magicNine &&
                i.magicNine < 0 &&
                (s += 14 * this.props.devicePixelRatio),
                r.drawImage(ei.getImg("SIGNAL"), e - o / 2, s + n, o, a);
            },
          },
          {
            key: "drawTradeLine",
            value: function (t) {
              var i,
                e,
                s = t.index,
                r = t.curr,
                o = t.currItem,
                a = t.x,
                n = t.topY,
                h = t.bottomY,
                c = this.ctx,
                p = this.region.chart.width,
                l = this.region.chart.height,
                d = this.region.chart.y,
                u = d + l,
                g = 2 * this.props.devicePixelRatio,
                x = 1.5 * this.props.devicePixelRatio,
                m = g + 2 * x + 10 * this.props.devicePixelRatio,
                f = m,
                v = 22 * this.props.devicePixelRatio,
                y = 14 * this.props.devicePixelRatio,
                w = 2 * this.props.devicePixelRatio,
                P = 3 * this.props.devicePixelRatio,
                b = +o.opData.signal,
                M = [
                  "",
                  this.props.colorProp.rise,
                  this.props.colorProp.drop,
                  "#3077EC",
                ][b],
                R = ["", "关注", "观望", "预警"][b],
                T = {
                  color: M,
                  font: ""
                    .concat(9 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                C = 0;
              a - v / 2 < this.props.devicePixelRatio
                ? (C = this.props.devicePixelRatio - (a - v / 2))
                : a + v / 2 > p - this.props.devicePixelRatio &&
                  (C = p - this.props.devicePixelRatio - (a + v / 2)),
                0 === s
                  ? ((i = this.data.items[s + 1] || o),
                    (e = this.data.items[s + 2] || o))
                  : s === this.data.items.length - 1
                  ? ((i = this.data.items[s - 2] || o),
                    (e = this.data.items[s - 1] || o))
                  : ((i = this.data.items[s - 1] || o),
                    (e = this.data.items[s + 1] || o));
              var k = 1 === b;
              if (k) {
                if (h + m + y + l / 2 < u - 10 * this.props.devicePixelRatio) {
                  var A = r.getY(i.low),
                    S = r.getY(e.low);
                  (m = Math.max(
                    A - h + 10 * this.props.devicePixelRatio,
                    f,
                    S - h + 10 * this.props.devicePixelRatio
                  )),
                    (k = !0);
                }
                if (h + m + y + l / 2 >= u - 10 * this.props.devicePixelRatio) {
                  var L = r.getY(i.high),
                    D = r.getY(e.high);
                  (m = Math.max(
                    n - L + 10 * this.props.devicePixelRatio,
                    f,
                    n - D + 10 * this.props.devicePixelRatio
                  )),
                    (m = Math.min(
                      m,
                      n + l / 2 - d - 10 * this.props.devicePixelRatio
                    )),
                    (k = !1);
                }
              } else {
                if (n - m - y + l / 2 > d) {
                  var B = r.getY(i.high),
                    F = r.getY(e.high);
                  (m = Math.max(
                    n - B + 10 * this.props.devicePixelRatio,
                    f,
                    n - F + 10 * this.props.devicePixelRatio
                  )),
                    (m = Math.min(m, n + l / 2 - d)),
                    (k = !1);
                }
                if (n - m - y + l / 2 <= d) {
                  var E = r.getY(i.low),
                    N = r.getY(e.low);
                  (m = Math.max(
                    E - h + 10 * this.props.devicePixelRatio,
                    f,
                    N - h + 10 * this.props.devicePixelRatio
                  )),
                    (k = !0);
                }
              }
              var _ = Math.round((m - g - 2 * x) / P) - 1;
              if (k) {
                ht(c, a, h + g + x, x, M, M);
                for (var O = h + g + 2 * x, H = 0; H < _; H++)
                  rt(c, a - 1, (O += P) - w / 2, 2, w, M, M);
                ot(
                  c,
                  a - v / 2 + C,
                  h + m,
                  v,
                  y,
                  2 * this.props.devicePixelRatio,
                  M
                ),
                  I(c, R, a + C, h + m + y / 2, T);
              } else {
                ht(c, a, n - g - x, x, M, M);
                for (var j = n - g - 2 * x, X = 0; X < _; X++)
                  rt(c, a - 1, (j -= P) - w / 2, 2, w, M, M);
                ot(
                  c,
                  a - v / 2 + C,
                  n - m - y,
                  v,
                  y,
                  2 * this.props.devicePixelRatio,
                  M
                ),
                  I(c, R, a + C, n - m - y / 2, T);
              }
              return k;
            },
          },
          {
            key: "drawAddZX",
            value: function (t) {
              var i,
                e,
                s = t.index,
                r = t.curr,
                o = t.currItem,
                a = t.x,
                n = t.topY,
                h = t.bottomY,
                c = this.ctx,
                p = this.region.chart.width,
                l = this.region.chart.height,
                d = this.region.chart.y,
                u = d + l,
                g = 30 * this.props.devicePixelRatio,
                x = g,
                m = 33 * this.props.devicePixelRatio,
                f = 14 * this.props.devicePixelRatio,
                v = 1 * this.props.devicePixelRatio,
                y = 2 * this.props.devicePixelRatio,
                w = 3.5 * this.props.devicePixelRatio,
                P = "#3077EC",
                b = {
                  color: P,
                  font: "400 "
                    .concat(9 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                M = 0;
              a - m / 2 < this.props.devicePixelRatio
                ? (M = this.props.devicePixelRatio - (a - m / 2))
                : a + m / 2 > p - this.props.devicePixelRatio &&
                  (M = p - this.props.devicePixelRatio - (a + m / 2)),
                0 === s
                  ? ((i = this.data.items[s + 1] || o),
                    (e = this.data.items[s + 2] || o))
                  : s === this.data.items.length - 1
                  ? ((i = this.data.items[s - 2] || o),
                    (e = this.data.items[s - 1] || o))
                  : ((i = this.data.items[s - 1] || o),
                    (e = this.data.items[s + 1] || o));
              var R = !0;
              if (
                (this.props.setting.magicNine &&
                  (o.magicNine > 0
                    ? (n -= 14 * this.props.devicePixelRatio)
                    : o.magicNine < 0 &&
                      (h += 14 * this.props.devicePixelRatio)),
                this.props.setting.tradeSecret &&
                  o.tradeSecret &&
                  (h += 16 * this.props.devicePixelRatio),
                h + g + f + l / 2 < u - 10 * this.props.devicePixelRatio)
              ) {
                var T = r.getY(i.low),
                  C = r.getY(e.low);
                (g = Math.max(
                  T - h + 10 * this.props.devicePixelRatio,
                  x,
                  C - h + 10 * this.props.devicePixelRatio
                )),
                  (R = !0);
              }
              if (h + g + f + l / 2 >= u - 10 * this.props.devicePixelRatio) {
                var k = r.getY(i.high),
                  A = r.getY(e.high);
                (g = Math.max(
                  n - k + 10 * this.props.devicePixelRatio,
                  x,
                  n - A + 10 * this.props.devicePixelRatio
                )),
                  (g = Math.min(
                    g,
                    n + l / 2 - d - 10 * this.props.devicePixelRatio
                  )),
                  (R = !1);
              }
              var S = Math.round(g / w) - 1;
              if (R) {
                for (var L = h, D = 0; D < S; D++)
                  rt(c, a - v / 2, (L += w) - y / 2, v, y, P, P);
                ot(
                  c,
                  a - m / 2 + M,
                  h + g,
                  m,
                  f,
                  2 * this.props.devicePixelRatio,
                  P
                ),
                  I(c, "加自选", a + M, h + g + f / 2, b);
              } else {
                for (var B = n, F = 0; F < S; F++)
                  rt(c, a - v / 2, (B -= w) - y / 2, v, y, P, P);
                ot(
                  c,
                  a - m / 2 + M,
                  n - g - f,
                  m,
                  f,
                  2 * this.props.devicePixelRatio,
                  P
                ),
                  I(c, "加自选", a + M, n - g - f / 2, b);
              }
              return R;
            },
          },
          {
            key: "drawTradePoint",
            value: function (t) {
              var i = t.currItem,
                e = t.x,
                s = t.topY,
                r = t.bottomY,
                o = this.ctx,
                a =
                  this.props.isWzqMiniProgram ||
                  this.props.wzqMiniProgramBSTStyle,
                n = this.region.chart.height,
                h = this.region.chart.y,
                c = h + n,
                p = 4 * this.props.devicePixelRatio,
                l = 1.5 * this.props.devicePixelRatio,
                d = (a ? 11.5 : 8) * this.props.devicePixelRatio,
                u = (a ? 15 : 12) * this.props.devicePixelRatio,
                g = 7 * this.props.devicePixelRatio,
                x = 1 * this.props.devicePixelRatio,
                m = 1 * this.props.devicePixelRatio,
                f = Math.round(g / 3),
                v = p + 2 * l + g + u,
                y = {
                  B: a ? "#E63535" : "#3077EC",
                  S: a ? "#1CAA3C" : "#FF891E",
                  T: a ? "#3077EC" : "#B71EFF",
                }[i.tradeType],
                w = { B: !0, S: !1, T: !0 }[i.tradeType];
              if (
                ("boolean" == typeof i.addZXShowDown && (w = !i.addZXShowDown),
                this.props.setting.magicNine &&
                  (i.magicNine > 0
                    ? (s -= 14 * this.props.devicePixelRatio)
                    : i.magicNine < 0 &&
                      (r += 14 * this.props.devicePixelRatio)),
                this.props.setting.tradeSecret &&
                  i.tradeSecret &&
                  (r += 16 * this.props.devicePixelRatio),
                w
                  ? r + v + n / 2 >= c - 10 * this.props.devicePixelRatio &&
                    (w = !1)
                  : s - v + n / 2 <= h + 10 * this.props.devicePixelRatio &&
                    (w = !0),
                w)
              ) {
                ht(o, e, r + p + l, l, y, y);
                for (var P = r + p + 2 * l, b = 0; b < 3; b++)
                  rt(o, e - x / 2, (P += f) - m / 2, x, m, y, y);
                var M = {
                  B: ei.getImg(a ? "MP_BUY_DOWN" : "BUY_DOWN"),
                  S: ei.getImg(a ? "MP_SELL_DOWN" : "SELL_DOWN"),
                  T: ei.getImg(a ? "MP_KLINE_TRADE_DOWN" : "KLINE_TRADE_DOWN"),
                }[i.tradeType];
                o.drawImage(M, e - d / 2, r + v - u, d, u);
              } else {
                ht(o, e, s - p - l, l, y, y);
                for (var R = s - p - 2 * l, T = 0; T < 3; T++)
                  rt(o, e - x / 2, (R -= f) - m / 2, x, m, y, y);
                var C = {
                  B: ei.getImg(a ? "MP_BUY_UP" : "BUY_UP"),
                  S: ei.getImg(a ? "MP_SELL_UP" : "SELL_UP"),
                  T: ei.getImg(a ? "MP_KLINE_TRADE_UP" : "KLINE_TRADE_UP"),
                }[i.tradeType];
                o.drawImage(C, e - d / 2, s - v, d, u);
              }
            },
          },
          {
            key: "drawAddedMark",
            value: function () {
              var t,
                i,
                e = this,
                s = this.region.chart;
              this.ctx.save(),
                this.getZXData(),
                this.ctx.translate(s.x, s.y + s.height / 2),
                this.props.setting &&
                  this.props.setting.zx &&
                  this.drawAddZXData &&
                  ((t = this.drawAddZXData.currItem.time),
                  (i = this.drawAddZX(this.drawAddZXData))),
                this.drawTradePointData.length > 0 &&
                  this.drawTradePointData.forEach(function (s) {
                    s.currItem.time === t && (s.currItem.addZXShowDown = i),
                      e.drawTradePoint(s);
                  }),
                this.ctx.restore();
            },
          },
          {
            key: "drawKlineExtraInfo",
            value: function () {
              var t = this,
                i = this.region.chart,
                e = this.props,
                s = e.type,
                r = e.setting,
                o = void 0 === r ? {} : r,
                a = 2 * this.props.devicePixelRatio,
                n = a;
              "day" === s &&
                o.ds &&
                this.data.items.forEach(function (e, s) {
                  if (e.fh && (e.fh.FHcontent || e.fh.HGcontent)) {
                    t.ctx.save();
                    var r = t.props.count,
                      o = t.props.itemWidth,
                      h = (i.width / r) * s + o / 2 + i.x,
                      c = i.y + i.height - a - n;
                    ht(t.ctx, h, c, a, "#FF891E", "#FF891E"), t.ctx.restore();
                  }
                });
            },
          },
          {
            key: "drawMACDDeviate",
            value: function () {
              var t = this.ctx,
                i = this.props.crossLineItem,
                e = i.macdHelper,
                s = i.time;
              if (e) {
                var r = e.status,
                  o = e.candleDate1,
                  a = e.candleDate2;
                if (/deviate/.test(r)) {
                  var n,
                    h,
                    c,
                    p = this.region.chart.width,
                    l = this.region.chart.height,
                    d = 2 * this.props.devicePixelRatio;
                  "gold-deviate" === r
                    ? ((n = "low"),
                      (h = "#662124"),
                      (c = "rgba(230, 53, 53, 0.1)"))
                    : ((n = "high"),
                      (h = "#155026"),
                      (c = "rgba(28, 170, 60, 0.1)")),
                    t.save(),
                    t.translate(
                      this.region.chart.x,
                      this.region.chart.y + l / 2
                    );
                  var u = (this.max + this.min) / 2,
                    g = Math.max(
                      Math.abs(this.max - u),
                      Math.abs(this.min - u)
                    ),
                    x = this.data.items.findIndex(function (t) {
                      return t.time === s;
                    }),
                    m = this.data.items.findIndex(function (t) {
                      return t.time === o;
                    }),
                    f = (p / this.props.count) * x + this.props.itemWidth / 2;
                  if (m < 0)
                    rt(t, 0, -l / 2, f, l + this.region.xAxis.height, c, c),
                      Object.assign(e, { bgLeftX: 0, bgRightX: f });
                  else {
                    var v =
                        (p / this.props.count) * m + this.props.itemWidth / 2,
                      y = (-(this.data.items[m][n] - u) / g) * (l / 2),
                      w = this.data.items.findIndex(function (t) {
                        return t.time === a;
                      });
                    if (w < 0) {
                      w = this.props.model.list.findIndex(function (t) {
                        return t.time === a;
                      });
                      var P =
                          (p / this.props.count) *
                            (w - this.props.model.index) +
                          this.props.itemWidth / 2,
                        b = (-(this.props.model.list[w][n] - u) / g) * (l / 2),
                        M = b - ((b - y) / (P - v)) * P;
                      rt(t, 0, -l / 2, f, l + this.region.xAxis.height, c, c),
                        ht(t, v, y, d, h, h),
                        at(t, v, y, 0, M, h, h, void 0, void 0, 2),
                        Object.assign(e, { bgLeftX: 0, bgRightX: f });
                    } else {
                      var R =
                          (p / this.props.count) * w + this.props.itemWidth / 2,
                        T = (-(this.data.items[w][n] - u) / g) * (l / 2);
                      rt(
                        t,
                        R,
                        -l / 2,
                        f - R,
                        l + this.region.xAxis.height,
                        c,
                        c
                      ),
                        ht(t, v, y, d, h, h),
                        ht(t, R, T, d, h, h),
                        at(t, v, y, R, T, h, h, void 0, void 0, 2),
                        Object.assign(e, { bgLeftX: R, bgRightX: f });
                    }
                  }
                  t.restore();
                }
              }
            },
          },
          {
            key: "getGappedGap",
            value: function () {
              for (var t = this.data.items.length - 2; t >= 0; t--) {
                this.gapInfo = [];
                var i = this.data.items[t],
                  e = this.data.items[t + 1];
                if (
                  ((this.gapInfo[0] = t),
                  i.high < e.low
                    ? ((this.gapInfo[1] = t),
                      (this.gapInfo[2] = i.high),
                      (this.gapInfo[3] = t + 1),
                      (this.gapInfo[4] = e.low),
                      this.dealGappedGapCutoff())
                    : i.low > e.high &&
                      ((this.gapInfo[1] = t + 1),
                      (this.gapInfo[2] = e.high),
                      (this.gapInfo[3] = t),
                      (this.gapInfo[4] = i.low),
                      this.dealGappedGapCutoff()),
                  5 === this.gapInfo.length)
                )
                  break;
              }
            },
          },
          {
            key: "dealGappedGapCutoff",
            value: function () {
              for (
                var t = this.gapInfo[0] + 2;
                t < this.data.items.length;
                t++
              ) {
                var i = this.data.items[t],
                  e = this.gapInfo[4],
                  s = this.gapInfo[2];
                if (i.high >= e && i.low <= s) return void (this.gapInfo = []);
                i.high <= s ||
                  i.low >= e ||
                  (i.high < e && i.high > s
                    ? ((this.gapInfo[1] = t), (this.gapInfo[2] = i.high))
                    : i.low < e &&
                      i.low > s &&
                      ((this.gapInfo[3] = t), (this.gapInfo[4] = i.low)));
              }
            },
          },
          {
            key: "drawGappedGap",
            value: function (t) {
              var i,
                e = this.region.chart;
              (i = this.props.isWzqMiniProgram
                ? "rgba(38, 46, 64, 0.1)"
                : "rgba(124, 156, 198, 0.4)"),
                this.ctx.save(),
                this.ctx.translate(e.x, e.y + e.height / 2);
              var s = t[0],
                r = t[1],
                o = this.region.chart.width - t[0],
                a = t[2];
              rt(this.ctx, s, r, o, a, i, i), this.ctx.restore();
            },
          },
          {
            key: "drawSeparateLine",
            value: function () {
              var t = this.ctx;
              t.save();
              var i = this.region.chart,
                e =
                  i.x +
                  i.width -
                  this.fqWidth -
                  2 * this.props.devicePixelRatio;
              at(
                t,
                e,
                0,
                e,
                i.y,
                this.props.colorProp.border,
                null,
                null,
                null,
                1 * this.props.devicePixelRatio
              ),
                t.restore();
            },
          },
          {
            key: "isTapGuideHintRegion",
            value: function (t) {
              var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
              return (
                (i.x = i.x * this.props.devicePixelRatio),
                (i.y = i.y * this.props.devicePixelRatio),
                this.guideHintRegion &&
                  i.x >= this.guideHintRegion.x &&
                  i.x <= this.guideHintRegion.x + this.guideHintRegion.width &&
                  i.y >= this.guideHintRegion.y &&
                  i.y <= this.guideHintRegion.y + this.guideHintRegion.height
              );
            },
          },
        ]),
        t
      );
    })(),
  },
  te = new Map();
(exports.Color = it),
  (exports.Kline = (function () {
    function t(i, e, s, r) {
      a(this, t),
        Array.isArray(i) && i.length > 1
          ? ((this.ctx = new et(i[0], s[0], r, {
              isMiniPorgram: e.isMiniPorgram,
              enableOffScreen: e.enableOffScreen,
            })),
            (this.ctxCross = new et(i[1], s[1], r, {
              isMiniPorgram: e.isMiniPorgram,
              enableOffScreen: e.enableOffScreen,
            })))
          : ((this.ctx = new et(i, s, r, {
              isMiniPorgram: e.isMiniPorgram,
              enableOffScreen: e.enableOffScreen,
            })),
            (this.ctxCross = this.ctx)),
        (this.commonConfig = Ui({
          env: e.isWzqMiniProgram ? "mpwzq" : "",
          chartType: "kline",
          layout: e.layout || "kline-portrait",
          skin: e.skin || "plain",
          props: e,
        })),
        (this.props = m(
          m(
            {},
            {
              count: 60,
              spacePercent: 0.2,
              minSpaceWidth: 1,
              maxminDist: 30,
              layout: "kline-portrait",
              maType: e.setting.maTypes || [],
              volumeTypes: e.setting.volumeTypes || [],
              cjeTypes: e.setting.cjeTypes || [],
              colorProp: m(m({}, it.kline[e.skin]), this.commonConfig.Color),
              lineProp: Tt(e.devicePixelRatio),
              textProp: Ct(e.devicePixelRatio, e.fontType || "Arial"),
              posx: [],
              stockUnit: "股",
              sarCirclrRadius: 1.25 * e.devicePixelRatio,
              showCrossLine: !0,
              showCrossLineTips: !0,
              showCrossLineValue: !0,
              translateX: 0,
            }
          ),
          e
        )),
        (this.layout = Mt(
          this.ctx,
          this.props.layout,
          m(m({}, this.props), this.commonConfig.Layout)
        ));
      var o = this.layout.getChart().width,
        n = o / this.props.count;
      if (
        ((this.props.itemWidth = n),
        this.props.fixedWidth
          ? ((this.props.spacePercent = 1 - o / (720 * n)),
            (this.props.spaceWidth =
              this.props.itemWidth * this.props.spacePercent))
          : ((this.props.spacePercent = 0.2),
            (this.props.spaceWidth = Math.max(
              this.props.itemWidth * this.props.spacePercent,
              2
            ))),
        (this.props.barWidth = this.props.itemWidth - this.props.spaceWidth),
        (this.chipData = {}),
        this.props.showCrossLine)
      ) {
        var h = this.layout.chart;
        this.crossLine = new si(
          this.ctxCross,
          {
            x: h.x,
            y: h.y,
            width:
              h.width +
              (this.props.isSupportChip && this.props.isShowChip
                ? this.layout.chipRegion.width
                : 0),
            height:
              h.height + this.layout.xAxis.height + this.layout.indicatorHeight,
            xAxis: this.layout.xAxis,
            chipWidth: this.layout.chipRegion.width,
            mainChart: this.layout.getChart(),
            padding: this.layout.props.padding,
          },
          this.props
        );
      }
      Ki.foldState = !0;
    }
    return (
      n(t, [
        {
          key: "format",
          value: function (t) {
            for (
              var i = {},
                e = this.props.useIndicators || [],
                s = function (t, i, e) {
                  var s = i,
                    r = e,
                    o = t.band_high,
                    a = t.band_low;
                  return (
                    "number" != typeof o ||
                      isNaN(o) ||
                      (o > r && (r = o), o < s && (s = o)),
                    "number" != typeof a ||
                      isNaN(a) ||
                      (a > r && (r = a), a < s && (s = a)),
                    { min: s, max: r }
                  );
                },
                r = 0,
                o = t.length;
              r < o;
              r++
            ) {
              var a = t[r];
              if (0 === r) {
                i = {
                  kline: s(
                    a,
                    Math.min(a.low, a.maxMin.ma.min),
                    Math.max(a.high, a.maxMin.ma.max)
                  ),
                  candle: { min: a.low, max: a.high },
                  ma: { min: a.maxMin.ma.min, max: a.maxMin.ma.max },
                  volumeMA: {
                    min: a.maxMin.volume.min,
                    max: a.maxMin.volume.max,
                  },
                  cjeMA: { min: a.maxMin.cje.min, max: a.maxMin.cje.max },
                };
                for (var n = 0; n < e.length; n++) {
                  var h = e[n],
                    c = a[h];
                  if ("number" == typeof c)
                    isNaN(c)
                      ? (i[h] = {
                          max: Number.MIN_SAFE_INTEGER,
                          min: Number.MAX_SAFE_INTEGER,
                        })
                      : (i[h] = { max: c, min: c });
                  else {
                    var p = [];
                    for (var l in c)
                      if (Object.prototype.hasOwnProperty.call(c, l)) {
                        var d = c[l];
                        isNaN(d) || void 0 === d || p.push(d);
                      }
                    i[h] = {
                      min: Math.min.apply(null, p),
                      max: Math.max.apply(null, p),
                    };
                  }
                }
              } else {
                (i.kline = s(
                  a,
                  Math.min(a.low, i.kline.min),
                  Math.max(a.high, i.kline.max)
                )),
                  (i.candle = {
                    min: Math.min(a.low, i.candle.min),
                    max: Math.max(a.high, i.candle.max),
                  }),
                  (i.ma = {
                    min: Math.min(a.maxMin.ma.min, i.ma.min),
                    max: Math.max(a.maxMin.ma.max, i.ma.max),
                  }),
                  (i.volumeMA = {
                    min: Math.min(a.maxMin.volume.min, i.volumeMA.min),
                    max: Math.max(a.maxMin.volume.max, i.volumeMA.max),
                  }),
                  (i.cjeMA = {
                    min: Math.min(a.maxMin.cje.min, i.cjeMA.min),
                    max: Math.max(a.maxMin.cje.max, i.cjeMA.max),
                  });
                for (var u = 0; u < e.length; u++) {
                  var g = e[u],
                    x = a[g];
                  if ("number" == typeof x) {
                    if (isNaN(x)) continue;
                    i[g] = {
                      max: Math.max(x, i[g].max),
                      min: Math.min(x, i[g].min),
                    };
                  } else if (x) {
                    var m = [];
                    for (var f in x)
                      if (Object.prototype.hasOwnProperty.call(x, f)) {
                        var v = x[f];
                        isNaN(v) || void 0 === v || m.push(v);
                      }
                    i[g] = {
                      min: Math.min(Math.min.apply(null, m), i[g].min),
                      max: Math.max(Math.max.apply(null, m), i[g].max),
                    };
                  }
                }
              }
            }
            if (i.kdj) {
              var y = i.kdj,
                w = y.min;
              y.max < 100 && (i.kdj.max = 100), w > 0 && (i.kdj.min = 0);
            }
            return (
              i.wr && ((i.wr.max = 100), (i.wr.min = 0)),
              { items: t, maxMin: i }
            );
          },
        },
        {
          key: "getRatio",
          value: function (t) {
            var i = t * this.props.devicePixelRatio - this.layout.getChart().x;
            return Math.ceil(i / this.props.itemWidth) / this.props.count;
          },
        },
        {
          key: "changeCount",
          value: function (t) {
            (this.props.count += t),
              (this.props.itemWidth =
                this.layout.getChart().width / this.props.count),
              (this.props.spaceWidth = Math.max(
                this.props.itemWidth * this.props.spacePercent,
                2
              )),
              (this.props.barWidth =
                this.props.itemWidth - this.props.spaceWidth),
              this.props.showCrossLine &&
                this.crossLine.changeCount(this.props);
          },
        },
        {
          key: "changeLineType",
          value: function (t) {
            (this.props.fixedWidth = "line" === t),
              (this.props.isPinchLine = "line" === t);
            var i = this.layout.getChart().width,
              e = i / this.props.count;
            this.props.fixedWidth
              ? ((this.props.spacePercent = 1 - i / (720 * e)),
                (this.props.spaceWidth =
                  this.props.itemWidth * this.props.spacePercent))
              : ((this.props.spacePercent = 0.2),
                (this.props.spaceWidth = Math.max(
                  this.props.itemWidth * this.props.spacePercent,
                  2
                )));
          },
        },
        {
          key: "initAreaSelect",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            this.props.isShowAreaSelect &&
              ((t = t.length ? t : this.list),
              (this.areaSelect = new Ei(
                this.ctx,
                this.props,
                this.layout.getChart(),
                t
              )));
          },
        },
        {
          key: "getAreaSelectData",
          value: function () {
            if (this.props.isShowAreaSelect)
              return this.areaSelect.getTipBarData();
          },
        },
        {
          key: "touchMoveAreaSelect",
          value: function (t, i) {
            var e = this,
              s = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (s.x = s.x * this.props.devicePixelRatio),
              (s.y = s.y * this.props.devicePixelRatio),
              this.areaSelect.move(s, function () {
                e.draw(e.list), null == i || i();
              });
          },
        },
        {
          key: "isTapAreaSelect",
          value: function (t) {
            if (!this.props.isShowAreaSelect) return !1;
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio);
            var e = this.areaSelect.findTarget(i);
            return !(!e || "close" !== e.action);
          },
        },
        {
          key: "hasAreaSelectActive",
          value: function () {
            return !!this.props.isShowAreaSelect && this.areaSelect.getActive();
          },
        },
        {
          key: "cancelAreaActive",
          value: function () {
            this.props.isShowAreaSelect && this.areaSelect.cancelActive();
          },
        },
        {
          key: "updateChip",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            this.chipData = m(m({ showType: "p90" }, this.chipData), t);
          },
        },
        {
          key: "getValueY",
          value: function (t) {
            var i,
              e = this.layout.getChart(),
              s = this.crossLine.changeCoords(t);
            if (s && s.y <= e.height + e.y && this.data.maxMin.kline) {
              var r = this.data.maxMin.kline,
                o = r.max;
              i = o - ((o - r.min) / e.height) * (s.y - e.y);
            }
            return isNaN(i) ? NaN : i;
          },
        },
        {
          key: "getPointPosition",
          value: function (t) {
            if (
              !this.data ||
              !Array.isArray(this.data.items) ||
              0 === this.data.items.length
            )
              return null;
            var i = String(null != t ? t : "").replace(/\D/g, "");
            if (!i) return null;
            var e = this.data.items,
              s = e.findIndex(function (t) {
                var e,
                  s = String(null != (e = t.time) ? e : "").replace(/\D/g, "");
                return s === i || 0 === s.indexOf(i);
              });
            if (-1 === s || s >= this.props.count) return null;
            var r = this.props.fixedWidth
                ? this.data.maxMin.kline
                : k(this.data, this.props),
              o = r.max,
              a = r.min,
              n = o - a;
            if (!n) return null;
            var h = e[s],
              c = this.layout.getChart(),
              p = this.props.devicePixelRatio || 1,
              l = c.width / this.props.count,
              d = (c.x + l * s + l / 2) / p,
              u = function (t) {
                return (c.y + ((o - t) / n) * c.height) / p;
              };
            return {
              date: h.time,
              index: s,
              x: d,
              high: { value: h.high, x: d, y: u(h.high) },
              low: { value: h.low, x: d, y: u(h.low) },
              open: { value: h.open, x: d, y: u(h.open) },
              close: { value: h.close, x: d, y: u(h.close) },
            };
          },
        },
        {
          key: "draw",
          value: function (t, i, e, s, r) {
            var o = this;
            Ki.isTapFoldArrow = !!r;
            var a = this.ctx,
              n = this.ctxCross,
              h = this.props,
              c = this.layout;
            "switchIndicator" === t
              ? (this.data = this.format(this.list))
              : t &&
                t.length > 0 &&
                ((this.list = t),
                (this.data = this.format(t)),
                (this.props.posx = [])),
              (h.tradeLineMode =
                "day" === h.type &&
                h.isSupportTradeLine &&
                h.setting.tradeLine),
              i && (this.mainViewData = i),
              (h.crossLineItem = e),
              (h.isSplitRendCross = h.splitLayer && e);
            try {
              if (h.isSplitRendCross) {
                if (this.props.isShowChip) {
                  var p = this.layout.getChipChart(),
                    l = p.chart.width,
                    d = p.chart.y,
                    u = p.chipRegion.width,
                    g = p.height;
                  kt(this.ctx, l, d, u, g);
                }
                kt(this.ctxCross, 0, 0, c.getWidth(), c.getHeight());
              } else
                kt(a, 0, 0, c.getWidth(), c.getHeight()),
                  h.splitLayer &&
                    kt(this.ctxCross, 0, 0, c.getWidth(), c.getHeight());
            } catch (t) {
              return;
            }
            if (
              ((this.candle = this.candle
                ? this.candle.updateProps(
                    this.data,
                    h,
                    {
                      chart: c.getChart(),
                      xAxis: c.getXAxis(),
                      yAxis: c.getChartYAxis(),
                      chartAndChipWidth: c.chartAndChipWidth,
                    },
                    this.mainViewData
                  )
                : new Qi.candle(
                    [a, n],
                    this.data,
                    h,
                    {
                      chart: c.getChart(),
                      xAxis: c.getXAxis(),
                      yAxis: c.getChartYAxis(),
                      chartAndChipWidth: c.chartAndChipWidth,
                    },
                    this.mainViewData
                  )),
              this.candle.draw(),
              !h.isSplitRendCross)
            ) {
              var x = [],
                v = h.setting,
                y = v.lastestPrice,
                w = v.remindPrice,
                P = v.trendline,
                b = v.supportPressureLine;
              y && x.push(Yi),
                w && x.push(_i),
                h.isPinchLine ||
                  (h.tradeLineMode
                    ? x.push(ji)
                    : (P && x.push(Oi), b && x.push(Hi)),
                  h.isShowSupPreSignal && x.push(Xi)),
                x.map(function (t) {
                  var i = new t(a, o.data, o.mainViewData, h, {
                    chart: c.getChart(),
                    xAxis: c.getXAxis(),
                    yAxis: c.getChartYAxis(),
                  });
                  i.draw(), (o[t.name] = i);
                });
            }
            "day" !== h.type ||
              !exports.tradeShowBar ||
              e ||
              exports.swiping ||
              this.drawTradeEntranceBar(),
              h.hideIndicator || this.drawIndicator(e, s),
              !h.isSplitRendCross &&
                h.isShowAreaSelect &&
                this.areaSelect.draw(),
              h.isSupportChip &&
                this.chipData &&
                (h.isWzqMiniProgram || this.drawChipSwitch(),
                h.isShowChip &&
                  new Qi.ChipBar(
                    this.ctx,
                    f(m({}, this.data), {
                      chipData: this.chipData,
                      chipTime:
                        isNaN(s) || null === s
                          ? this.data.items[this.data.items.length - 1].time
                          : this.data.items[s].time,
                    }),
                    m({}, this.props),
                    this.layout
                  ).draw()),
              this.props.enableOffScreen &&
                setTimeout(function () {
                  h.isMiniPorgram && o.renderAll();
                }, 0);
          },
        },
        {
          key: "renderAll",
          value: function () {
            var t = this.ctx,
              i = this.layout;
            if (null == t ? void 0 : t.realContext) {
              kt(t.realContext, 0, 0, i.getWidth(), i.getHeight());
              try {
                t.realContext.drawImage(this.ctx.miniCanvas, 0, 0);
              } catch (s) {
                var e = t.getImageData(0, 0, i.width, i.height);
                t.realContext.putImageData(e, 0, 0);
              }
            }
          },
        },
        {
          key: "drawChipSwitch",
          value: function () {
            var t = this.props.devicePixelRatio,
              i = { width: 14 * t, height: 23 * t },
              e = this.layout.getChart(),
              s = e.x + e.width - i.width,
              r = e.height + e.y;
            ot(
              this.ctx,
              s,
              r,
              i.width,
              i.height,
              { borderTopLeftRadius: 2 * t, borderBottomLeftRadius: 2 * t },
              this.props.colorProp.chip.lightBlue,
              this.props.colorProp.chip.lightBlue,
              0
            ),
              this.props.isShowChip
                ? (at(
                    this.ctx,
                    s + 5 * t,
                    r + 7 * t,
                    s + i.width - 4 * t,
                    r + i.height / 2,
                    "#fff",
                    "",
                    "",
                    null,
                    1 * t
                  ),
                  at(
                    this.ctx,
                    s + i.width - 4 * t,
                    r + i.height / 2,
                    s + 5 * t,
                    r + i.height - 7 * t,
                    "#fff",
                    "",
                    "",
                    null,
                    1 * t
                  ))
                : (at(
                    this.ctx,
                    s + i.width - 5 * t,
                    r + 7 * t,
                    s + 4 * t,
                    r + i.height / 2,
                    "#fff",
                    "",
                    "",
                    null,
                    1 * t
                  ),
                  at(
                    this.ctx,
                    s + 4 * t,
                    r + i.height / 2,
                    s + i.width - 5 * t,
                    r + i.height - 7 * t,
                    "#fff",
                    "",
                    "",
                    null,
                    1 * t
                  ));
          },
        },
        {
          key: "drawIndicator",
          value: function (t, e) {
            for (
              var s =
                  "kline-portrait" === this.props.layout
                    ? this.layout.indicatorCount
                    : 1,
                r = 1;
              r <= s;
              r++
            ) {
              var o =
                  this.props[
                    "".concat(
                      ["curr", "second", "third", "fourth"][r - 1],
                      "Indicator"
                    )
                  ],
                a = f(
                  m({}, this.props),
                  t
                    ? { index: e, indicator: i({}, o, t[o]) }
                    : {
                        indicator: i(
                          {},
                          o,
                          this.data.items[this.data.items.length - 1][o]
                        ),
                      }
                ),
                n =
                  this.layout[
                    1 === r
                      ? "indicator"
                      : "".concat(
                          ["second", "third", "fourth"][r - 2],
                          "Indicator"
                        )
                  ];
              new Qi[o]([this.ctx, this.ctxCross], this.data, a, n).draw();
            }
          },
        },
        {
          key: "getIndicatorData",
          value: function (t) {
            return "kline" == (t = t || this.props.currIndicator)
              ? {
                  items: this.data.items,
                  max: this.data.maxMin[t].max,
                  min: this.data.maxMin[t].min,
                }
              : {
                  items: this.data.items.map(function (i) {
                    return i[t];
                  }),
                  max: this.data.maxMin[t].max,
                  min: this.data.maxMin[t].min,
                };
          },
        },
        {
          key: "showCrossLine",
          value: function (t, i) {
            var e,
              r = !1;
            if ("number" == typeof t) {
              if (!this.lastScene || !this.lastScene.eventPoint) return;
              e = {
                x: this.lastScene.eventPoint.x + this.props.itemWidth * t,
                y: this.lastScene.eventPoint.y,
                index: this.lastScene.eventPoint.index + t,
              };
            } else if (
              "object" == s(t) ||
              ("undefined" != typeof window &&
                window.Touch &&
                t instanceof window.Touch) ||
              ("undefined" != typeof Event && t instanceof Event) ||
              ("undefined" != typeof window && window.$wujie)
            )
              e = this.crossLine.changeCoords(t);
            else if ("right" === t) {
              if (!this.lastScene || !this.lastScene.eventPoint) return;
              e = {
                x: this.layout.chartWidth - this.props.itemWidth / 2,
                y: this.lastScene.eventPoint.y,
                index: this.props.count - 1,
              };
            }
            if (e) {
              this.lastScene = { eventPoint: e, count: this.props.count };
              var o,
                a = this.data.items[e.index],
                n = this.layout.getChart();
              if (a) {
                var h = this.props.fixNum || 2;
                if (
                  ((a.leftval = ""),
                  (a.rightval = ""),
                  (a.showLeft =
                    (null == e ? void 0 : e.x) - n.x > 0.5 * n.width),
                  e && e.y <= n.height + n.y && this.data.maxMin.kline)
                ) {
                  var c = this.props.fixedWidth
                      ? this.data.maxMin.kline
                      : k(this.data, this.props),
                    p = c.max;
                  (o = p - ((p - c.min) / n.height) * (e.y - n.y)),
                    (a[a.showLeft ? "leftval" : "rightval"] = o.toFixed(h));
                }
                "kline-portrait" === this.props.layout &&
                  this.props.isSupportChip &&
                  this.props.isShowChip &&
                  (a.showLeft = !0);
                for (
                  var l =
                      "kline-portrait" === this.props.layout
                        ? this.layout.indicatorCount
                        : 1,
                    d = 1;
                  d <= l;
                  d++
                ) {
                  var u =
                      this.props[
                        "".concat(
                          ["curr", "second", "third", "fourth"][d - 1],
                          "Indicator"
                        )
                      ],
                    g =
                      this.layout[
                        1 === d
                          ? "indicator"
                          : "".concat(
                              ["second", "third", "fourth"][d - 2],
                              "Indicator"
                            )
                      ];
                  if (e && e.y >= g.y && e.y <= g.y + g.height) {
                    var x = void 0,
                      m = void 0;
                    if ("volume" === u || "cje" === u)
                      (x = Math.max(
                        this.data.maxMin[u].max,
                        this.data.maxMin["".concat(u, "MA")].max
                      )),
                        (m = 0);
                    else if ("macd" === u) {
                      var f = this.data.maxMin[u],
                        v = Math.max(f.max, -f.min);
                      (x = v), (m = -v);
                    } else if (["boll", "ema", "sar", "bbi", "ene"].includes(u))
                      (x = Math.max(
                        this.data.maxMin.kline.max,
                        this.data.maxMin[u].max
                      )),
                        (m = Math.min(
                          this.data.maxMin.kline.min,
                          this.data.maxMin[u].min
                        ));
                    else {
                      var y = this.data.maxMin[u];
                      (x = y.max), (m = y.min);
                    }
                    (o = x - ((x - m) / g.height) * (e.y - g.y)),
                      "volume" === u || "cje" === u || "obv" === u
                        ? ("cje" === u && (o *= 1e4),
                          (o =
                            Math.abs(o) > 1e8
                              ? "".concat((o / 1e8).toFixed(2), "亿")
                              : Math.abs(o) > 1e4
                              ? "".concat((o / 1e4).toFixed(2), "万")
                              : o.toFixed(2)))
                        : (o = o.toFixed(3)),
                      (a[a.showLeft ? "leftval" : "rightval"] = o);
                  }
                }
                if (
                  (/^m(1|5|10|15|20|30|60|120)$/.test(this.props.type)
                    ? (a.toplval = ""
                        .concat(a.time.slice(0, 4), "-")
                        .concat(a.time.slice(4, 6), "-")
                        .concat(a.time.slice(6, 8), " ")
                        .concat(a.time.slice(8, 10), ":")
                        .concat(a.time.slice(10, 12)))
                    : (a.toplval = /-/.test(a.time)
                        ? a.time
                        : ""
                            .concat(a.time.slice(0, 4), "-")
                            .concat(a.time.slice(4, 6), "-")
                            .concat(a.time.slice(6, 8))),
                  (a.bottomval = a.toplval),
                  this.draw(null, null, a, null == e ? void 0 : e.index),
                  this.props.isWzqMiniProgram &&
                    this.props.isSupportChip &&
                    this.props.isShowChip)
                ) {
                  var w = "获利 ".concat(
                    (100 * this.chipData.crossProfitPercent).toFixed(2),
                    "%"
                  );
                  a.crossProfitPercent =
                    this.chipData.crossProfitPercent > 0 ? w : "";
                  var P = this.isTapIndicatorHoleRegion(t);
                  a.isTouchIndicator = P;
                }
                this.crossLine.draw(e, a, h),
                  (this.crossBarTop = this.props.isWzqMiniProgram
                    ? n.y + 6 * this.props.devicePixelRatio
                    : n.y),
                  this.props.hideTradeBar || this.drawTradeBar(a),
                  this.drawZXBar(a),
                  this.props.setting &&
                    this.props.setting.ds &&
                    (this.drawFHBar(a), this.drawHGBar(a)),
                  a.fh && (a.fh.FHcontent || a.fh.HGcontent) && (r = !0),
                  i && i(a, r);
              }
            }
          },
        },
        {
          key: "judgeOverlap",
          value: function (t, i, e, s) {
            try {
              for (
                var r = this.ctx.getImageData(t, i + s, e, 1).data, o = 0;
                o < r.length;
                o += 4
              )
                if (
                  (230 === r[o] && 53 === r[o + 1] && 53 === r[o + 2]) ||
                  (45 === r[o] && 185 === r[o + 1] && 85 === r[o + 2])
                )
                  return !0;
              return !1;
            } catch (t) {
              return !1;
            }
          },
        },
        {
          key: "drawTradeEntranceBar",
          value: function () {
            var t = "买卖点回顾",
              i = this.props.isWzqMiniProgram,
              e = {
                color: i
                  ? this.props.colorProp.button.text
                  : this.props.colorProp.chip.blue,
                font: ""
                  .concat(i ? "400" : "500", " ")
                  .concat((i ? 12 : 11) * this.props.devicePixelRatio, "px ")
                  .concat(this.props.textProp.fontType),
                textAlign: E,
                baseLine: W,
              },
              s = this.layout.chart,
              r = D(this.ctx, t, e),
              o = 4.5 * this.props.devicePixelRatio,
              a = 9 * this.props.devicePixelRatio,
              n = r + o + 20 * this.props.devicePixelRatio,
              h = 23 * this.props.devicePixelRatio,
              c = s.y,
              p = s.x;
            this.judgeOverlap(p, c, n, h) &&
              ((p = s.x + s.width - n),
              this.judgeOverlap(p, c, n, h) && (p = s.x));
            var l = i
                ? this.props.colorProp.commonBackground
                : this.props.colorProp.button.commonBorder,
              d = i
                ? this.props.colorProp.commonBackground
                : this.props.colorProp.button.commonBg;
            ot(this.ctx, p, c, n, h, 2 * this.props.devicePixelRatio, l, d);
            var u = c + h / 2,
              g = p + 8 * this.props.devicePixelRatio;
            I(this.ctx, t, g, u, e, r);
            var x = c + (h - a) / 2,
              m = g + r + 4 * this.props.devicePixelRatio;
            this.ctx.drawImage(
              ei.getImg(i ? "ARROW_BLACK" : "ARROW_BLUE"),
              m,
              x,
              o,
              a
            ),
              (this.tradeEntranceBarRegion = {
                x: p,
                y: c,
                width: n,
                height: h,
              });
          },
        },
        {
          key: "drawTradeBar",
          value: function (t) {
            if ("day" === this.props.type && t.tradeType) {
              var i = this.props.isWzqMiniProgram,
                e = {
                  color: i
                    ? this.props.colorProp.button.text
                    : this.props.colorProp.chip.blue,
                  font: i
                    ? "400 "
                        .concat(12 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType)
                    : "500 "
                        .concat(11 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                  textAlign: E,
                  baseLine: W,
                },
                s = this.layout.getChart(),
                r = D(this.ctx, "成交明细", e),
                o = 4.5 * this.props.devicePixelRatio,
                a = 9 * this.props.devicePixelRatio,
                n = r + o + 20 * this.props.devicePixelRatio,
                h = (i ? 24 : 23) * this.props.devicePixelRatio,
                c = this.crossBarTop,
                p = i
                  ? this.props.colorProp.commonBackground
                  : this.props.colorProp.button.commonBorder,
                l = i
                  ? this.props.colorProp.commonBackground
                  : this.props.colorProp.button.commonBg,
                d = t.showLeft ? s.x : s.x + s.width - n;
              ot(this.ctx, d, c, n, h, 2 * this.props.devicePixelRatio, p, l);
              var u = c + h / 2,
                g = d + 8 * this.props.devicePixelRatio;
              I(this.ctx, "成交明细", g, u, e, r);
              var x = c + (h - a) / 2,
                m = ei.getImg(i ? "ARROW_BLACK" : "ARROW_BLUE"),
                f = g + r + 4 * this.props.devicePixelRatio;
              this.ctx.drawImage(m, f, x, o, a),
                (this.crossBarTop += h),
                (this.tradeBarRegion = { x: d, y: c, width: n, height: h }),
                (this.tradeBarData = t);
            } else (this.tradeBarRegion = null), (this.tradeBarData = null);
          },
        },
        {
          key: "drawZXBar",
          value: function (t) {
            var i = this.props.setting,
              e = i.zx,
              s = i.zjzf;
            if ("kline-portrait" === this.props.layout && (s || e)) {
              var r,
                o = this.data.items.findIndex(function (i) {
                  return i.time === t.time;
                }),
                a =
                  o > 0
                    ? this.data.items[o - 1].close
                    : this.data.items[0].preClose,
                n = s ? "至今涨幅" : "";
              if (
                (e && t.fh && t.fh.since_add_zdf
                  ? ((r = t.fh.since_add_zdf), (n = "添加自选，至今涨幅"))
                  : (r = (
                      ((+this.mainViewData.lastestPrice - a) / Math.abs(a)) *
                      100
                    ).toFixed(2)),
                !n)
              )
                return;
              var h = " ".concat(r > 0 ? "+" : "").concat(r, "% "),
                c = {
                  color: this.props.colorProp.chip.text,
                  font: "400 "
                    .concat(11 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: E,
                  baseLine: W,
                },
                p = this.layout.getChart(),
                l = D(this.ctx, n, c),
                d = D(this.ctx, h, c),
                u = l + d + 18 * this.props.devicePixelRatio,
                g = 23 * this.props.devicePixelRatio,
                x = 4.5 * this.props.devicePixelRatio,
                m = 9 * this.props.devicePixelRatio,
                f = this.crossBarTop,
                v = t.showLeft ? p.x : p.x + p.width - u;
              ot(
                this.ctx,
                v,
                f,
                u,
                g,
                2 * this.props.devicePixelRatio,
                this.props.colorProp.zxBar.border,
                this.props.colorProp.zxBar.bg
              );
              var y = f + g / 2,
                w = v + 8 * this.props.devicePixelRatio;
              I(this.ctx, n, w, y, c, l),
                (w += l),
                I(
                  this.ctx,
                  h,
                  w,
                  y,
                  Object.assign({}, c, {
                    color: 0 == +r ? "#7a8499" : r > 0 ? "#e63535" : "#1caa3c",
                  }),
                  d
                ),
                this.ctx.drawImage(
                  ei.getImg(
                    "dark" !== this.props.skin ? "ARROW_BLACK" : "ARROW_WHITE"
                  ),
                  w + d,
                  y - m / 2,
                  x,
                  m
                ),
                (this.zxBarRegion = { x: v, y: f, width: u, height: g }),
                (this.crossBarTop += g);
            } else this.zxBarRegion = null;
          },
        },
        {
          key: "drawFHBar",
          value: function (t) {
            if (t.fh && t.fh.FHcontent) {
              var i = t.fh.FHcontent,
                e = {
                  color: this.props.colorProp.button.text,
                  font: "400 "
                    .concat(11 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                s = {
                  color: this.props.colorProp.button.text,
                  font: "400 "
                    .concat(11 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: E,
                  baseLine: W,
                },
                r = this.layout.getChart(),
                o = D(this.ctx, i, e),
                a = r.width - 16 * this.props.devicePixelRatio,
                n = o + 16 * this.props.devicePixelRatio,
                h = 23 * this.props.devicePixelRatio,
                c = this.crossBarTop,
                p = t.showLeft ? r.x : r.x + r.width - n,
                l = !1;
              if ((o > a && (l = !0), l)) {
                var d = Math.ceil(o / a),
                  u = 11 * this.props.devicePixelRatio,
                  g = h - u,
                  x = 1.5 * this.props.devicePixelRatio;
                (n = r.width - 2 * this.props.devicePixelRatio),
                  (h = g + d * u + (d + 1) * x),
                  (p = t.showLeft ? r.x : 2 * this.props.devicePixelRatio),
                  ot(
                    this.ctx,
                    p,
                    c,
                    n,
                    h,
                    2 * this.props.devicePixelRatio,
                    this.props.colorProp.hgBar.border,
                    this.props.colorProp.hgBar.bgColor
                  ),
                  (function (t, i, e, s, r, o, a, n) {
                    t.save(),
                      t.setTextStyle(r),
                      (function (t, i, e, s) {
                        var r = i.split(""),
                          o = "",
                          a = [],
                          n = 0;
                        return (
                          r.forEach(function (i, h) {
                            var c = o + r[h];
                            D(t, c, s) > e && h > 0
                              ? ((a[n++] = o), (o = r[h]))
                              : (o = c);
                          }),
                          (a[n] = o),
                          a
                        );
                      })(t, i, o, r).forEach(function (i, r) {
                        0 === r
                          ? ((s += n + a / 2), t.fillText(i, e, s, o))
                          : ((s += n + a), t.fillText(i, e, s, o));
                      }),
                      t.restore();
                  })(
                    this.ctx,
                    i,
                    p + 8 * this.props.devicePixelRatio,
                    c + g / 2,
                    s,
                    a,
                    u,
                    x
                  );
              } else
                ot(
                  this.ctx,
                  p,
                  c,
                  n,
                  h,
                  2 * this.props.devicePixelRatio,
                  this.props.colorProp.hgBar.border,
                  this.props.colorProp.hgBar.bgColor
                ),
                  I(this.ctx, i, p + n / 2, c + h / 2, e, o);
              this.crossBarTop += h;
            }
          },
        },
        {
          key: "drawHGBar",
          value: function (t) {
            if (t.fh && t.fh.HGcontent) {
              var i = t.fh.HGcontent,
                e = {
                  color: this.props.colorProp.button.text,
                  font: ""
                    .concat(11 * this.props.devicePixelRatio, "px ")
                    .concat(this.props.textProp.fontType),
                  textAlign: Y,
                  baseLine: W,
                },
                s = this.layout.getChart(),
                r = D(this.ctx, i, e),
                o = r + 16 * this.props.devicePixelRatio,
                a = 23 * this.props.devicePixelRatio,
                n = this.crossBarTop,
                h = t.showLeft ? s.x : s.x + s.width - o;
              ot(
                this.ctx,
                h,
                n,
                o,
                a,
                2 * this.props.devicePixelRatio,
                this.props.colorProp.hgBar.border,
                this.props.colorProp.hgBar.bgColor
              ),
                I(this.ctx, i, h + o / 2, n + a / 2, e, r),
                (this.crossBarTop += a);
            }
          },
        },
        {
          key: "isPointInRegion",
          value: function (t, i) {
            return (
              i &&
              t.x >= i.x &&
              t.x <= i.x + i.width &&
              t.y >= i.y &&
              t.y <= i.y + i.height
            );
          },
        },
        {
          key: "isTapTradeEntranceBarRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio),
              this.isPointInRegion(i, this.tradeEntranceBarRegion)
            );
          },
        },
        {
          key: "isTapTradeBarRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio),
              this.isPointInRegion(i, this.tradeBarRegion)
            );
          },
        },
        {
          key: "updatePropByChip",
          value: function (t) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              e = Math.ceil(
                this.layout.chipRegion.width / this.props.itemWidth
              );
            if (
              ((this.props.isShowChip = !!t),
              (this.props.count += this.props.isShowChip ? -e : e),
              (this.layout = Mt(
                this.ctx,
                this.props.layout,
                m(m({}, this.props), this.commonConfig.Layout)
              )),
              this.props.showCrossLine)
            ) {
              var s = this.layout.getChart().width,
                r = s / this.props.count;
              (this.props.itemWidth = r),
                this.props.fixedWidth
                  ? ((this.props.spacePercent = 1 - s / (720 * r)),
                    (this.props.spaceWidth =
                      this.props.itemWidth * this.props.spacePercent))
                  : ((this.props.spacePercent = 0.2),
                    (this.props.spaceWidth = Math.max(
                      this.props.itemWidth * this.props.spacePercent,
                      2
                    ))),
                (this.props.barWidth =
                  this.props.itemWidth - this.props.spaceWidth),
                this.crossLine.changeCount(this.props);
            }
            this.props.isShowAreaSelect &&
              this.areaSelect.update("chip", {
                props: this.props,
                region: this.layout.getChart(),
                list: i,
              }),
              this.draw(i);
          },
        },
        {
          key: "isTapMacdRnkEntry",
          value: function (t) {
            var i =
              "kline-portrait" !== this.props.layout || !this.props.isShowChip;
            if (this.props.isSupportMacdRankEntry && i) {
              var e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram),
                s = this.props.devicePixelRatio;
              (e.x = e.x * s), (e.y = e.y * s);
              for (
                var r =
                    "kline-portrait" === this.props.layout
                      ? this.layout.indicatorCount
                      : 1,
                  o = 0,
                  a = 1;
                a <= r;
                a++
              )
                if (
                  "macd" ===
                  this.props[
                    1 === a
                      ? "currIndicator"
                      : "".concat(
                          ["second", "third", "fourth"][a - 2],
                          "Indicator"
                        )
                  ]
                ) {
                  var n =
                    this.layout[
                      1 === a
                        ? "indicator"
                        : "".concat(
                            ["second", "third", "fourth"][a - 2],
                            "Indicator"
                          )
                    ].bar;
                  this.isPointInRegion(e, n) && (o = a);
                  var h = {
                    x:
                      n.x +
                      n.width -
                      64 * s -
                      (this.props.isSupportChip && 1 == +o ? 14 * s : 0),
                    y: n.y,
                    width: 64 * s,
                    height: 15 * s,
                  };
                  if (this.isPointInRegion(e, c(h))) return "macdRankEntry";
                }
            }
            function c(t) {
              var i = 10 * s;
              return {
                x: t.x - i,
                y: t.y - i,
                width: t.width + 2 * i,
                height: t.height + 2 * i,
              };
            }
          },
        },
        {
          key: "isTapButtonRegion",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            function s(t) {
              var e = 10 * i;
              return {
                x: t.x - e,
                y: t.y - e,
                width: t.buttonWidth + 2 * e,
                height: t.height + 2 * e,
              };
            }
            (e.x = e.x * i), (e.y = e.y * i);
            var r = {
              x: this.layout.chart.x,
              y: 0,
              width: this.layout.chart.width,
              height: this.layout.chart.y,
              buttonWidth: 45 * i,
            };
            if (
              this.isPointInRegion(e, s(r)) &&
              !this.props.disableMainIndicator
            )
              return 0;
            for (
              var o =
                  "kline-portrait" === this.props.layout
                    ? this.layout.indicatorCount
                    : 1,
                a = 1;
              a <= o;
              a++
            ) {
              var n =
                this.layout[
                  1 === a
                    ? "indicator"
                    : "".concat(
                        ["second", "third", "fourth"][a - 2],
                        "Indicator"
                      )
                ].bar;
              if (this.isPointInRegion(e, s(n))) return a;
            }
            this.layout = Mt(
              this.ctx,
              this.props.layout,
              m(m({}, this.props), this.commonConfig.Layout)
            );
            var h = this.layout && this.layout.foldArrow;
            return "kline-portrait" === this.props.layout &&
              h &&
              ((h.x = Zi.x), this.isPointInRegion(e, s(h)))
              ? ((Ki.foldState = !Ki.foldState), "foldArrow")
              : void 0;
          },
        },
        {
          key: "isTapChipSwitch",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (e.x = e.x * i), (e.y = e.y * i);
            var s = this.layout.getChart(),
              r = {
                width: 40,
                height: 70,
                x: s.x + s.width - 40,
                y: s.height + s.y,
              };
            return !!this.isPointInRegion(
              e,
              (function (t) {
                var e = 10 * i;
                return {
                  x: t.x - e,
                  y: t.y - e,
                  width: t.width + 2 * e,
                  height: t.height + 2 * e,
                };
              })(r)
            );
          },
        },
        {
          key: "isTapZxBarRegion",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = this.props.setting,
              s = (e.zx, e.zjzf);
            if (
              "kline-portrait" !== this.props.layout ||
              !this.props.crossLineItem ||
              !s
            )
              return !1;
            var r = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (r.x = r.x * i),
              (r.y = r.y * i),
              !(
                !this.zxBarRegion ||
                !this.isPointInRegion(
                  r,
                  (function (t) {
                    var e = 2 * i;
                    return {
                      x: t.x - e,
                      y: t.y - e,
                      width: t.width + 2 * e,
                      height: t.height + 2 * e,
                    };
                  })(this.zxBarRegion)
                )
              )
            );
          },
        },
        {
          key: "isTapChipType",
          value: function (t) {
            if (!this.props.isShowChip) return !1;
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (e.x = e.x * i), (e.y = e.y * i);
            var s = "kline-portrait" === this.props.layout;
            function r(t) {
              var e = 2 * i;
              return {
                x: t.x - e,
                y: t.y - e,
                width: t.width + 2 * e,
                height: t.height + 2 * e,
              };
            }
            var o = this.layout.getChart(),
              a =
                this.layout.height -
                this.layout.chart.height -
                this.layout.chart.y;
            if (s && a < 350 && !this.props.isWzqMiniProgram) return !1;
            var n = {};
            if (this.props.isWzqMiniProgram) {
              var h = a < 320 ? a : 0.57 * a;
              n = {
                portrait: {
                  leftRegion: {
                    x: o.x + o.width + 3 * i,
                    y: o.y + o.height + h / 2 - 15 * i,
                    width: (this.layout.chipRegion.width - 3 * i) / 2,
                    height: 15 * i,
                  },
                  rightRegion: {
                    x: o.x + o.width + 3 * i + this.layout.chipRegion.width / 2,
                    y: o.y + o.height + h / 2 - 15 * i,
                    width: (this.layout.chipRegion.width - 3 * i) / 2,
                    height: 15 * i,
                  },
                },
                landscape: {
                  leftRegion: {
                    x: o.x + o.width + 3 * i,
                    y: this.layout.chipRegion.height - 61 * i,
                    width: (this.layout.chipRegion.width - 3 * i) / 2,
                    height: 15 * i,
                  },
                  rightRegion: {
                    x: o.x + o.width + 3 * i + this.layout.chipRegion.width / 2,
                    y: this.layout.chipRegion.height - 61 * i,
                    width: (this.layout.chipRegion.width - 3 * i) / 2,
                    height: 15 * i,
                  },
                },
              };
            } else
              n = {
                portrait: {
                  leftRegion: {
                    x: o.x + o.width + 3 * i,
                    y: o.y + o.height + a / 2 - 5,
                    width: (this.layout.chipRegion.width - 3 * i) / 2,
                    height: 13 * i,
                  },
                  rightRegion: {
                    x: o.x + o.width + 3 * i + this.layout.chipRegion.width / 2,
                    y: o.y + o.height + a / 2 - 5,
                    width: (this.layout.chipRegion.width - 3 * i) / 2,
                    height: 13 * i,
                  },
                },
                landscape: {
                  leftRegion: {
                    x: o.x + o.width + 3 * i,
                    y: this.layout.chipRegion.height - 100,
                    width: 90,
                    height: 45,
                  },
                  rightRegion: {
                    x: o.x + o.width + 3 * i,
                    y: this.layout.chipRegion.height - 50,
                    width: 90,
                    height: 45,
                  },
                },
              };
            var c = s ? n.portrait : n.landscape;
            return this.isPointInRegion(e, r(c.leftRegion))
              ? ((this.chipData.showType = "p90"), !0)
              : !!this.isPointInRegion(e, r(c.rightRegion)) &&
                  ((this.chipData.showType = "p70"), !0);
          },
        },
        {
          key: "isTapKlineRegin",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (e.x = e.x * i), (e.y = e.y * i);
            var s = (this.layout || {}).chart,
              r = void 0 === s ? {} : s,
              o = { x: r.x, y: r.y, width: r.width, height: r.height };
            return this.isPointInRegion(e, o);
          },
        },
        {
          key: "isChipChartRegin",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (e.x = e.x * i), (e.y = e.y * i);
            var s = this.layout || {},
              r = s.chart,
              o = void 0 === r ? {} : r,
              a = s.chipRegion,
              n = void 0 === a ? {} : a,
              h = { x: o.width, y: o.y, width: n.width, height: o.height };
            return this.isPointInRegion(e, h);
          },
        },
        {
          key: "isTapChipTextRegion",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (e.x = e.x * i), (e.y = e.y * i);
            var s = this.layout || {},
              r = s.chart,
              o = void 0 === r ? {} : r,
              a = s.chipRegion,
              n = void 0 === a ? {} : a,
              h = {
                x: o.width,
                y: o.height + o.y,
                width: n.width,
                height: n.height - o.height - o.y,
              };
            return this.isPointInRegion(e, h);
          },
        },
        {
          key: "isTapIndicatorRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio);
            for (
              var e =
                  "kline-portrait" === this.props.layout
                    ? this.layout.indicatorCount
                    : 1,
                s = 1;
              s <= e;
              s++
            ) {
              var r =
                this.layout[
                  1 === s
                    ? "indicator"
                    : "".concat(
                        ["second", "third", "fourth"][s - 2],
                        "Indicator"
                      )
                ];
              if (this.isPointInRegion(i, r)) return s;
            }
          },
        },
        {
          key: "isTapIndicatorHoleRegion",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            (e.x = e.x * i), (e.y = e.y * i);
            var s = this.layout || {},
              r = s.chart,
              o = void 0 === r ? {} : r,
              a = s.chipRegion,
              n = void 0 === a ? {} : a,
              h = {
                x: o.x,
                y: o.height + o.y,
                width: o.width,
                height: n.height - o.height,
              };
            return this.isPointInRegion(e, h);
          },
        },
        {
          key: "getNextIndicator",
          value: function (t) {
            var i = this.props.useIndicators.length,
              e =
                this.props[
                  "".concat(
                    ["curr", "second", "third", "fourth"][t - 1],
                    "Indicator"
                  )
                ],
              s = (this.props.useIndicators.indexOf(e) + 1) % i,
              r = this.props.useIndicators[s];
            return "rally" === r ? this.props.useIndicators[s + 1] : r;
          },
        },
        {
          key: "switchIndicator",
          value: function (t, i) {
            var e = "".concat(
              ["curr", "second", "third", "fourth"][t - 1],
              "Indicator"
            );
            (this.props[e] = i), this.list && this.draw("switchIndicator");
          },
        },
        {
          key: "translateDraw",
          value: function (t) {
            t && ((this.props.translateX = t), this.draw(null));
          },
        },
      ]),
      t
    );
  })()),
  (exports.ListMgr = Pi),
  (exports.Mins = (function () {
    function t(i, e, s, r, o) {
      var n = this;
      a(this, t),
        (this.drawTradePointData = []),
        (this.ctx = new et(i, r, o, {
          isMiniPorgram: s.isMiniPorgram,
          enableOffScreen: s.enableOffScreen,
        }));
      var h = ri(s);
      (this.commonConfig = Ui({
        env: s.isWzqMiniProgram ? "mpwzq" : "",
        chartType: "kline",
        layout: s.layout || "kline-portrait",
        skin: s.skin || "plain",
        props: s,
      })),
        (this.props = m(
          m(
            {},
            {
              barWidth: s.devicePixelRatio,
              spaceWidth: 0,
              count: 200,
              labels: ["09:30", "11:30/13:00", "15:00"],
              daysConf: { multiDays: !1 },
              layout: "mins-portrait",
              colorProp: m(m({}, it.mins[s.skin]), this.commonConfig.Color),
              lineProp: Tt(s.devicePixelRatio),
              lineJoin: "round",
              textProp: Ct(s.devicePixelRatio, s.fontType || "Arial"),
              showCrossLine: !0,
              showCrossLineTips: !1,
              showCrossLineValue: !0,
            }
          ),
          s
        )),
        (this.props.yAixsCount = h.yAixsCount),
        (this.props.hlineCount = h.hlineCount),
        (this.props.vlineCount = h.vlineCount);
      var c = {
          font: Ct(s.devicePixelRatio, this.props.fontType).font,
          baseLine: W,
          color: this.props.colorProp.xAxis,
        },
        p = this.props.labels;
      p &&
        p.length > 0 &&
        ((this.props.labels = []),
        p.forEach(function (t, i) {
          n.props.labels.push({
            text: t,
            props: f(m({}, c), { textAlign: n.getTextAlign(i, p.length) }),
          });
        })),
        (this.layout = Mt(
          this.ctx,
          this.props.layout,
          m(m({}, this.props), this.commonConfig.Layout)
        ));
      var l = this.layout.chart,
        d = this.layout.mainChart,
        u = this.layout.auctionChart;
      if (
        ((this.props.itemWidth = d.width / this.props.count),
        (this.props.auctionItemWidth = u.width / this.props.auctionCount),
        (this.props.spaceWidth = this.props.itemWidth - this.props.barWidth),
        this.props.showCrossLine)
      ) {
        var g = this.layout.mainIndicator;
        this.crossLine = new si(
          this.ctx,
          {
            x: l.x,
            y: l.y,
            width: l.width,
            height: g.y + g.height - l.y,
            auctionWidth: u.width,
            xAxis: this.layout.xAxis,
            mainChart: d,
            padding: this.layout.props.padding,
          },
          this.props
        );
      }
      s.isWzqMiniProgram || qi !== s.market || Vi !== s.scode
        ? ((qi = s.market), (Vi = s.scode), te.clear())
        : (s.isHistoryMins || Gi !== s.isHistoryMins) &&
          ((Gi = s.isHistoryMins), te.clear()),
        (this.shineCallback = e);
    }
    return (
      n(t, [
        {
          key: "draw",
          value: function () {
            var t = this,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = i.data,
              s = i.auctionData,
              r = i.isTrading,
              o = i.isAuctionTime,
              a = i.indicatorItem,
              n = i.indicatorIndex,
              c = this,
              p = this.ctx,
              l = this.layout,
              d = this.props,
              u = l.getChart(),
              g = l.mainChart,
              x = l.mainIndicator,
              m = l.getXAxis();
            if (
              ((this.data = e || this.data),
              (this.auctionData = s || this.auctionData),
              (this.isTrading = void 0 === r ? this.isTrading : r),
              (this.isAuctionTime = void 0 === o ? this.isAuctionTime : o),
              this.data)
            ) {
              this.initialize(),
                !d.hideIndicator &&
                  e &&
                  e.items &&
                  e.items.length > 0 &&
                  this.formatIndicator(),
                (e = this.data),
                (this.drawTradePointData = []);
              try {
                kt(p, 0, 0, l.getWidth(), l.getHeight());
              } catch (t) {
                return;
              }
              d.showAuction && this.drawAuctionGridLayer();
              var f =
                  this.props.panhouRange || this.props.kch || this.props.chy,
                v = f ? u.width * ((f[1] - f[0]) / f[1]) : 0,
                y = { x: g.x, y: g.y, width: g.width - v, height: g.height },
                P = +this.data.preClose
                  ? (this.data.max - this.data.preClose) /
                    (this.data.max - this.data.min)
                  : 0,
                b = y.height * P,
                M = {
                  vline: {
                    lineWidth: this.props.lineProp.vline,
                    count:
                      !this.props.isWzqMiniProgram && this.isMultiDays()
                        ? 4
                        : this.props.vlineCount,
                    color: this.props.colorProp.vline,
                  },
                  hline: {
                    skipMiddle: !0,
                    lineWidth: this.props.lineProp.hline,
                    count: this.props.hlineCount,
                    color: this.props.colorProp.hline,
                  },
                };
              if (
                (this.props.isWzqMiniProgram
                  ? (M.hline.posy = [
                      { x: y.x, y: 0 },
                      {
                        x: y.x,
                        y: y.y + b,
                        lineStyle: "dash",
                        color: this.props.colorProp.mline,
                        lineWidth: 1,
                      },
                      { x: y.x, y: y.y + g.height + g.padding.bottom },
                    ])
                  : (M.border = {
                      lineWidth: this.props.lineProp.border,
                      color: this.props.colorProp.border,
                    }),
                new mt(p, M, y),
                this.props.isWzqMiniProgram ||
                  new mt(
                    p,
                    {
                      hline: {
                        lineWidth: 0,
                        count: 1,
                        color: this.props.colorProp.hline,
                      },
                      mline: {
                        lineWidth: this.props.lineProp.mline,
                        count: 1,
                        linestyle: "dash",
                        color: this.props.colorProp.mline,
                      },
                    },
                    u
                  ),
                !this.props.hideIndicator && !this.props.isWzqMiniProgram)
              ) {
                var R = {
                  x: x.x,
                  y: x.y,
                  width: x.width - v,
                  height: x.height,
                };
                new mt(
                  p,
                  {
                    border: {
                      lineWidth: this.props.lineProp.border,
                      color: this.props.colorProp.border,
                    },
                    vline: {
                      lineWidth: this.props.lineProp.vline,
                      count: this.isMultiDays() ? 4 : this.props.vlineCount,
                      color: this.props.colorProp.vline,
                    },
                  },
                  R
                );
              }
              if (
                (d.showAuction && this.drawAuctionDataLayer(),
                new Rt({
                  ctx: p,
                  region: g,
                  drawCallback: function (t) {
                    var i,
                      s,
                      r = t.index,
                      o = t.currItem,
                      a = d.colorProp.chart,
                      n = t.length,
                      h = t.getX(r),
                      x = t.getY(o.price) || 0;
                    if (
                      (c.isStartIndex(r)
                        ? (p.beginPath(), p.moveTo(h, x))
                        : p.lineTo(h, x),
                      c.isEndIndex(r, n))
                    ) {
                      if (
                        ((i = t.getX(c.getBeginIndex(r))),
                        (s = t.getX(r + 1)),
                        d.isWzqMiniProgram)
                      ) {
                        var m = e.items[n - 1] ? e.items[n - 1].price : 0,
                          f = "";
                        "S" === this.data.status && +m == +e.preClose
                          ? (f = a.rgba.flat)
                          : ((f =
                              +m >= +e.preClose ? a.rgba.rise : a.rgba.drop),
                            d.useClassicColor && (f = a.rgba.shinePoint)),
                          p.setStrokeStyle(f);
                        for (
                          var v = p.createLinearGradient(0, 0, 0, u.height),
                            y = 0;
                          y <= 5;
                          y++
                        ) {
                          var w = Math.max(0, 0.2 - 0.06 * y),
                            P = ""
                              .concat(f.substr(0, f.length - 3))
                              .concat(w, ")");
                          v.addColorStop(0.2 * y, P);
                        }
                        p.setFillStyle(v);
                      } else
                        p.setStrokeStyle(a.priceLine), p.setFillStyle(a.fill);
                      p.setLineWidth(d.lineProp.minsPriceLine),
                        p.setLineJoin(d.lineJoin),
                        p.lineTo(s - d.lineProp.minsPriceLine, x),
                        p.stroke(),
                        p.lineTo(
                          s - d.lineProp.minsPriceLine,
                          u.height / 2 + g.padding.bottom
                        ),
                        p.lineTo(i, u.height / 2 + g.padding.bottom),
                        p.closePath(),
                        p.fill(),
                        c.isMultiDays() ||
                          c.isAuctionTime ||
                          (c.isTrading
                            ? c.drawShine(l.auctionWidth + h, x)
                            : c.clearShine());
                    }
                    var b =
                      "fmins" === d.type
                        ? te.get("".concat(o.date, " ").concat(o.time))
                        : te.get(o.time);
                    b &&
                      ((o.tradeType = b),
                      c.drawTradePointData.push({ currItem: o, x: h, y: x }));
                  },
                  data: e,
                  count: d.count,
                }),
                f)
              ) {
                var T = g.x,
                  C = g.y,
                  k = g.padding,
                  A = g.height,
                  S = g.width,
                  L = g.width * ((f[1] - f[0]) / f[1]),
                  D = d.colorProp.chart;
                rt(
                  p,
                  T + S - L,
                  C ? 0 : C,
                  L,
                  A + k.bottom + k.top,
                  D.phRectFill,
                  d.isWzqMiniProgram ? "" : D.phRectFill
                );
                var W = d.isHistoryMins ? 5 / 8 : 3 / 4;
                I(p, "盘后", T + S - L / 2, C + A * W, {
                  color: D.phText,
                  font: Ct(d.devicePixelRatio).font,
                  baseLine: F,
                  textAlign: Y,
                });
              }
              if (f) {
                var B = {
                  x: g.x + g.width - v,
                  y: x.y,
                  width: v,
                  height: x.height,
                };
                this.props.isWzqMiniProgram
                  ? at(
                      p,
                      B.x,
                      B.y,
                      B.x,
                      B.y + B.height,
                      this.props.colorProp.border,
                      this.props.colorProp.border,
                      null,
                      null,
                      this.props.lineProp.border
                    )
                  : new mt(
                      p,
                      {
                        border: {
                          lineWidth: this.props.lineProp.border,
                          color: this.props.colorProp.border,
                        },
                      },
                      B
                    );
              }
              if (
                (!d.hidePriceLine &&
                  e.maxVol > 0 &&
                  new Rt({
                    ctx: p,
                    region: g,
                    drawCallback: function (t) {
                      var i = t.index,
                        s = t.currItem,
                        r = d.colorProp.chart,
                        o = t.length,
                        a =
                          s.avgPrice >= e.max
                            ? e.max
                            : Math.max(e.min, s.avgPrice),
                        n = t.getX(i),
                        h = t.getY(a);
                      c.isStartIndex(i)
                        ? (p.setStrokeStyle(r.avgPriceLine),
                          p.setFillStyle(r.avgPriceLine),
                          p.setLineWidth(d.lineProp.minsAvgLine),
                          p.beginPath(),
                          p.moveTo(n, h))
                        : p.lineTo(n, h),
                        c.isEndIndex(i, o) && p.stroke();
                    },
                    data: e,
                    count: d.count,
                  }),
                (d.crossLineItem = a),
                d.showIOPV && this.drawIOPV(),
                d.hideIndicator || this.drawIndicator(a, n),
                this.isMultiDays()
                  ? new O(p, w, this.props.labels, m).draw()
                  : new ft(p, w, this.props.labels, m, v).draw(),
                this.drawAxisText(),
                this.drawTradePointData.length > 0)
              ) {
                p.save(), p.translate(g.x, g.y + g.height / 2);
                var E,
                  N = h(this.drawTradePointData);
                try {
                  for (N.s(); !(E = N.n()).done; ) {
                    var _ = E.value;
                    this.drawTradePoint(_);
                  }
                } catch (t) {
                  N.e(t);
                } finally {
                  N.f();
                }
                p.restore();
              }
              this.props.enableOffScreen &&
                setTimeout(function () {
                  d.isMiniPorgram && t.renderAll();
                }, 0);
            }
          },
        },
        {
          key: "drawAxisText",
          value: function () {
            var t = this.ctx,
              i = this.layout,
              e = this.props,
              s = this.data;
            if (e.yAixsCount) {
              for (
                var r = 15 * this.props.devicePixelRatio,
                  o = i.getChart(),
                  a = (2 * s.diff) / (e.yAixsCount - 1),
                  n = o.yAxisLeft.props,
                  h = o.yAxisRight.props,
                  c = i.mainChart,
                  p =
                    +s.preClose && +s.max
                      ? (s.max - s.preClose) / (s.max - s.min)
                      : 0,
                  l = c.height * p,
                  d = this.props.fixNum || 2,
                  u = [],
                  g = [],
                  x = e.colorProp.yAxis,
                  m = 0;
                m < e.yAixsCount;
                m++
              ) {
                var f = s.middle + s.diff - a * m,
                  v = this.getBaselineType(m, e.yAixsCount);
                this.props.isWzqMiniProgram &&
                  ![s.max, s.min].includes(+s.preClose) &&
                  (0 === m && l <= r && (v = "alphabetic"),
                  m === e.yAixsCount - 1 && l + r >= c.height && (v = "top")),
                  u.push({
                    text: isNaN(f) ? (2 == d ? "0.00" : "0.000") : f.toFixed(d),
                    props: {
                      baseLine: v,
                      font: "400 "
                        .concat(9 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                      textAlign: n.textAlign,
                      color: x,
                    },
                  }),
                  g.push({
                    text:
                      isNaN(f) || isNaN(s.preClose) || 0 == +s.preClose
                        ? "0.00%"
                        : "".concat(
                            (((f - s.preClose) / s.preClose) * 100).toFixed(2),
                            "%"
                          ),
                    props: {
                      baseLine: v,
                      font: "400 "
                        .concat(9 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                      textAlign: h.textAlign,
                      color: x,
                    },
                  });
              }
              if (
                this.props.isWzqMiniProgram &&
                ![s.max, s.min].includes(+s.preClose)
              ) {
                var y = c.y + l;
                l < r && (y += r),
                  u.splice(1, 0, {
                    text: (+s.preClose).toFixed(d),
                    y: y,
                    props: {
                      baseLine: "bottom",
                      font: "400 "
                        .concat(9 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                      textAlign: n.textAlign,
                      color: x,
                    },
                  }),
                  g.splice(1, 0, {
                    text: "0.00%",
                    y: y,
                    props: {
                      baseLine: "bottom",
                      font: "400 "
                        .concat(9 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                      textAlign: h.textAlign,
                      color: x,
                    },
                  });
              }
              new ft(t, P, u, o.yAxisLeft).draw(),
                new ft(t, P, g, o.yAxisRight).draw();
            }
          },
        },
        {
          key: "renderAll",
          value: function () {
            var t = this.ctx,
              i = this.layout,
              e = t.getImageData(0, 0, i.width, i.height);
            kt(t.realContext, 0, 0, i.getWidth(), i.getHeight()),
              t.realContext.putImageData(e, 0, 0);
          },
        },
        {
          key: "drawIOPV",
          value: function () {
            var t,
              i,
              e = this,
              s = this.ctx,
              r = this.layout.mainChart.x,
              o = this.layout.mainChart.y / 2,
              a = {
                font: Ct(this.props.devicePixelRatio).font,
                baseLine: W,
                textAlign: E,
              },
              n = this.props.colorProp.chart,
              h =
                (null == (i = null == (t = this.data) ? void 0 : t.items)
                  ? void 0
                  : i.length) && this.data.items[this.data.items.length - 1],
              c = this.props.crossLineItem || h || {},
              p = this.props.fixNum || 2,
              l = "均价: ".concat((+c.avgPrice).toFixed(p)),
              d = D(s, l, a);
            if (
              (I(s, l, r, o, f(m({}, a), { color: n.avgPriceLine }), d),
              c.iopv > 0)
            ) {
              r += d + 8 * this.props.devicePixelRatio;
              var u = "实时参考净值(IOPV): ".concat((+c.iopv).toFixed(4)),
                g = D(s, u, a);
              I(s, u, r, o, f(m({}, a), { color: n.iopvLine }), g),
                (r += g + 5 * this.props.devicePixelRatio);
              var x = 12 * this.props.devicePixelRatio,
                v = 12 * this.props.devicePixelRatio,
                y = (this.layout.mainChart.y - v) / 2,
                w = ei.getImg("TIP");
              setTimeout(function () {
                var t;
                null == (t = e.ctx) || t.drawImage(w, r, y, x, v);
              }, 0),
                (this.tipRegion = {
                  x: r - 5,
                  y: y - 5,
                  width: x + 10,
                  height: v + 10,
                });
            }
            new Rt({
              ctx: s,
              region: this.layout.mainChart,
              drawCallback: function (t) {
                var i = t.index,
                  r = t.getX(i),
                  o = t.getY(t.currItem.iopv);
                s.setStrokeStyle(n.iopvLine),
                  s.setFillStyle(n.iopvLine),
                  s.setLineWidth(e.props.lineProp.minsAvgLine),
                  0 === i ? (s.beginPath(), s.moveTo(r, o)) : s.lineTo(r, o),
                  i === t.length - 1 && s.stroke();
              },
              data: this.data,
              count: this.props.count,
            });
          },
        },
        {
          key: "formatIndicator",
          value: function () {
            this.data.maxMin = {
              volume: { max: this.data.maxVol, min: 0 },
              macd: {
                max: Number.MIN_SAFE_INTEGER,
                min: Number.MAX_SAFE_INTEGER,
              },
              rsi: {
                max: Number.MIN_SAFE_INTEGER,
                min: Number.MAX_SAFE_INTEGER,
              },
            };
            for (
              var t = {
                  close: this.data.items.map(function (t) {
                    return t.price;
                  }),
                },
                i = {
                  macd: hi.macd(t, this.props.setting.macdParams),
                  rsi: hi.rsi(t, this.props.setting.rsiParams),
                },
                e = 0;
              e < this.data.items.length;
              e++
            ) {
              var s = this.data.items[e];
              for (var r in i) {
                var o = i[r],
                  a = {};
                for (var n in o)
                  (a[n] = o[n][e]),
                    isNaN(a[n]) ||
                      void 0 === a[n] ||
                      ((this.data.maxMin[r].max = Math.max(
                        this.data.maxMin[r].max,
                        a[n]
                      )),
                      (this.data.maxMin[r].min = Math.min(
                        this.data.maxMin[r].min,
                        a[n]
                      )));
                s[r] = a;
              }
            }
            this.data.maxMin.rsi.max === Number.MIN_SAFE_INTEGER &&
              (this.data.maxMin.rsi = { max: 0, min: 0 });
          },
        },
        {
          key: "drawIndicator",
          value: function (t, e) {
            if (t) {
              var s = t[this.props.minsIndicator];
              new Qi[this.props.minsIndicator](
                this.ctx,
                this.data,
                f(m({}, this.props), {
                  index: e,
                  indicator: i({}, this.props.minsIndicator, s),
                }),
                this.layout.mainIndicator
              ).draw();
            } else if (Array.isArray(this.data.items)) {
              var r = this.data.items[this.data.items.length - 1],
                o = null == r ? void 0 : r[this.props.minsIndicator];
              new Qi[this.props.minsIndicator](
                this.ctx,
                this.data,
                f(m({}, this.props), {
                  indicator: i({}, this.props.minsIndicator, o),
                }),
                this.layout.mainIndicator
              ).draw();
            }
          },
        },
        {
          key: "drawAuctionGridLayer",
          value: function () {
            var t = this.ctx,
              i = this.props,
              e = this.layout.auctionChart,
              s = this.layout.xAxis,
              r = this.layout.auctionIndicator,
              o = "rgba(48, 119, 236, 0.05)";
            if (this.props.isWzqMiniProgram) {
              var a = (this.data || {}).items,
                n = void 0 === a ? [] : a,
                h = n.length && n[n.length - 1] ? n[n.length - 1].price : 0;
              o =
                "S" === this.data.status
                  ? "rgba(146, 153, 170, 0.05)"
                  : +h >= +this.data.preClose
                  ? "rgba(230, 53, 53, 0.05)"
                  : "rgba(28,170,60, 0.05)";
            }
            if (this.props.isWzqMiniProgram) {
              var c = e.height + 2 * e.y;
              e = f(m({}, e), { y: 0, height: c });
            }
            var p = (this.props.isWzqMiniProgram, e.height);
            if (
              (rt(t, e.x, e.y, e.width, p, o, o),
              this.props.isWzqMiniProgram
                ? new mt(
                    t,
                    {
                      border: {
                        lineWidth: i.lineProp.border,
                        color: i.colorProp.border,
                      },
                      hline: {
                        skipMiddle: !0,
                        lineWidth: i.lineProp.hline,
                        count: i.hlineCount,
                        color: i.colorProp.hline,
                      },
                    },
                    e
                  )
                : new mt(
                    t,
                    {
                      border: {
                        lineWidth: i.lineProp.border,
                        color: i.colorProp.border,
                      },
                      hline: {
                        skipMiddle: !0,
                        lineWidth: i.lineProp.hline,
                        count: i.hlineCount,
                        color: i.colorProp.hline,
                      },
                      vline: {
                        lineWidth: this.props.lineProp.vline,
                        count: 1,
                        color: this.props.colorProp.vline,
                      },
                    },
                    e
                  ),
              I(
                t,
                i.auctionLabel,
                e.x,
                s.y + s.height / 2,
                f(m({}, this.props.textProp), {
                  textAlign: E,
                  baseLine: W,
                  color: i.colorProp.xAxis,
                })
              ),
              this.props.isWzqMiniProgram && !this.props.hideIndicator)
            ) {
              var l = s.y + s.height;
              at(
                this.ctx,
                e.x,
                l,
                e.width,
                l,
                "#e9ebf0",
                null,
                null,
                [10, 5],
                1 * this.props.devicePixelRatio
              );
            }
            rt(t, r.x, r.y, r.width, r.height, o, o),
              this.props.isWzqMiniProgram
                ? this.props.hideIndicator ||
                  new mt(
                    t,
                    {
                      border: {
                        lineWidth: i.lineProp.border,
                        color: i.colorProp.border,
                      },
                    },
                    r
                  )
                : new mt(
                    t,
                    {
                      border: {
                        lineWidth: i.lineProp.border,
                        color: i.colorProp.border,
                      },
                      vline: {
                        lineWidth: i.lineProp.vline,
                        count: 1,
                        color: i.colorProp.vline,
                      },
                    },
                    r
                  );
          },
        },
        {
          key: "drawAuctionDataLayer",
          value: function () {
            var t,
              i = this,
              e = this.ctx,
              s = this.props,
              r = this.layout.auctionChart,
              o = this.layout.auctionIndicator,
              a = Array.isArray(
                null == (t = this.auctionData) ? void 0 : t.items
              )
                ? this.auctionData.items.length
                : 0,
              n = Math.max(+s.auctionCount || 0, a),
              h = !1,
              c = 0,
              p = 0;
            if (
              (new Rt({
                ctx: e,
                region: r,
                drawCallback: function (t) {
                  if (t.currItem) {
                    h || ((h = !0), e.beginPath(), e.moveTo(0, 0));
                    var r = t.index,
                      o = t.getX(r),
                      a = t.getY(t.currItem.p);
                    if (
                      (0 === r && e.moveTo(0, a),
                      r - c > 1 && e.lineTo(o, p),
                      e.lineTo(o, a),
                      r === t.length - 1)
                    ) {
                      if (!i.isAuctionTime) {
                        var l = t.getX(n);
                        e.lineTo(l, a);
                      }
                      var d = i.props.colorProp.chart.priceLine;
                      if (i.props.isWzqMiniProgram) {
                        var u = (i.data || {}).items,
                          g = void 0 === u ? [] : u,
                          x =
                            g.length && g[g.length - 1]
                              ? g[g.length - 1].price
                              : 0;
                        d =
                          "S" === i.data.status
                            ? i.props.colorProp.chart.rgba.flat
                            : +x >= +i.data.preClose
                            ? i.props.colorProp.chart.rgba.rise
                            : i.props.colorProp.chart.rgba.drop;
                      }
                      e.setStrokeStyle(d),
                        e.setLineWidth(s.lineProp.minsPriceLine),
                        e.setLineJoin(s.lineJoin),
                        e.stroke(),
                        i.isAuctionTime ? i.drawShine(o, a) : i.clearShine();
                    }
                    (c = r), (p = a);
                  }
                },
                data: this.auctionData,
                count: n,
              }),
              "volume" === s.minsIndicator && "sec" === this.auctionData.dType)
            ) {
              new Rt({
                ctx: e,
                region: o,
                drawCallback: function (t) {
                  if (t.currItem) {
                    var i = t.index,
                      r = t.currItem,
                      a = r.b1v,
                      n = r.b2v,
                      h = r.s2v,
                      c = t.getX(i),
                      p = t.getY(+a),
                      l = t.getY(+n + +h),
                      d = n > h ? s.colorProp.rise : s.colorProp.drop;
                    rt(e, c - 1, p, 2, o.height / 2 - p, d, d),
                      rt(e, c - 1, -o.height / 2, 2, o.height / 2 - l, d, d);
                  }
                },
                data: {
                  items: this.auctionData.items,
                  max: 1.4 * this.auctionData.maxVol,
                  min: 0,
                },
                count: n,
              });
            }
          },
        },
        {
          key: "drawShine",
          value: function (t, i) {
            var e = "";
            if (this.props.isWzqMiniProgram && !this.props.useClassicColor) {
              var s = (this.data || {}).items,
                r = void 0 === s ? [] : s,
                o = r.length && r[r.length - 1] ? r[r.length - 1].price : 0;
              e =
                "S" === this.data.status
                  ? this.props.colorProp.chart.rgba.flat
                  : +o >= +this.data.preClose
                  ? this.props.colorProp.chart.rgba.rise
                  : this.props.colorProp.chart.rgba.drop;
            } else e = this.props.colorProp.chart.rgba.shinePoint;
            if (this.shineCallback) {
              var a = this.layout.chart,
                n = i + a.y + a.height / 2;
              this.shineCallback(
                (t + a.x) / this.props.devicePixelRatio,
                n / this.props.devicePixelRatio,
                e
              );
            }
          },
        },
        {
          key: "clearShine",
          value: function () {
            this.shineCallback && this.shineCallback(-1, -1, "transparent");
          },
        },
        {
          key: "updateTradeData",
          value: function (t) {
            var i,
              e = h(t);
            try {
              for (e.s(); !(i = e.n()).done; ) {
                var s = i.value,
                  r =
                    "fmins" === this.props.type
                      ? "".concat(s.d, " ").concat(s.time)
                      : s.time,
                  o = te.get(r),
                  a = o && o !== s.t ? "T" : s.t;
                te.set(r, a);
              }
            } catch (t) {
              e.e(t);
            } finally {
              e.f();
            }
            this.draw();
          },
        },
        {
          key: "clearTradeData",
          value: function () {
            te.clear(), wi.clear(), this.draw();
          },
        },
        {
          key: "drawTradePoint",
          value: function (t) {
            var i = t.currItem,
              e = t.x,
              s = t.y,
              r = this.ctx,
              o =
                this.props.isWzqMiniProgram ||
                this.props.wzqMiniProgramBSTStyle,
              a = this.layout.chart.height,
              n = this.layout.chart.y,
              h = n + a,
              c = 4 * this.props.devicePixelRatio,
              p = 1.5 * this.props.devicePixelRatio,
              l = {
                B: (o ? 11.5 : 8) * this.props.devicePixelRatio,
                S: (o ? 11.5 : 8) * this.props.devicePixelRatio,
                T: (o ? 23 : 8) * this.props.devicePixelRatio,
              }[i.tradeType],
              d =
                "mins-landscape" === this.props.layout
                  ? e - l / 2
                  : Math.min(
                      Math.max(e - l / 2, -this.layout.auctionChart.width),
                      this.layout.mainChart.width - l
                    ),
              u = (o ? 15 : 12) * this.props.devicePixelRatio,
              g = 7 * this.props.devicePixelRatio,
              x = 1 * this.props.devicePixelRatio,
              m = 1 * this.props.devicePixelRatio,
              f = Math.round(g / 3),
              v = (d + l / 2 - e) / 3,
              y = c + 2 * p + g + u,
              w = {
                B: o ? "#E63535" : "#3077EC",
                S: o ? "#1CAA3C" : "#FF891E",
                T: o ? "#E63535" : "#3077EC",
              }[i.tradeType],
              P = { B: !0, S: !1, T: !0 }[i.tradeType];
            if (
              (P
                ? s + y + a / 2 >= h - 10 * this.props.devicePixelRatio &&
                  (P = !1)
                : s - y + a / 2 <= n + 10 * this.props.devicePixelRatio &&
                  (P = !0),
              P)
            ) {
              ht(r, e, s + c + p, p, w, w);
              for (var b = e - x / 2, M = s + c + 2 * p, R = 0; R < 3; R++)
                rt(r, (b += v), (M += f) - m / 2, x, m, w, w);
              var T = {
                B: ei.getImg(o ? "MP_BUY_DOWN" : "BUY_DOWN"),
                S: ei.getImg(o ? "MP_SELL_DOWN" : "SELL_DOWN"),
                T: ei.getImg(o ? "MP_MIN_TRADE_DOWN" : "MIN_TRADE_DOWN"),
              }[i.tradeType];
              r.drawImage(T, d, s + y - u, l, u);
            } else {
              ht(r, e, s - c - p, p, w, w);
              for (var C = e - x / 2, k = s - c - 2 * p, A = 0; A < 3; A++)
                rt(r, (C += v), (k -= f) - m / 2, x, m, w, w);
              var S = {
                B: ei.getImg(o ? "MP_BUY_UP" : "BUY_UP"),
                S: ei.getImg(o ? "MP_SELL_UP" : "SELL_UP"),
                T: ei.getImg(o ? "MP_MIN_TRADE_UP" : "MIN_TRADE_UP"),
              }[i.tradeType];
              r.drawImage(S, d, s - y, l, u);
            }
          },
        },
        {
          key: "getBaselineType",
          value: function (t, i) {
            return 0 === t ? B : F;
          },
        },
        {
          key: "isStartIndex",
          value: function (t) {
            return this.isMultiDays()
              ? 0 === t || t % this.props.daysConf.eachDayCount == 0
              : 0 === t;
          },
        },
        {
          key: "isEndIndex",
          value: function (t, i) {
            return this.isMultiDays()
              ? t === i - 1 || (t + 1) % this.props.daysConf.eachDayCount == 0
              : t === i - 1;
          },
        },
        {
          key: "getBeginIndex",
          value: function (t) {
            return this.isMultiDays()
              ? Math.floor(t / this.props.daysConf.eachDayCount) *
                  this.props.daysConf.eachDayCount
              : 0;
          },
        },
        {
          key: "isMultiDays",
          value: function () {
            return (
              this.props.daysConf.multiDays &&
              this.props.daysConf.eachDayCount > 0
            );
          },
        },
        {
          key: "initialize",
          value: function () {
            var t,
              i,
              e = 0,
              s = 0,
              r = this;
            (this.data.maxVol = 0),
              (this.data.max = 0),
              (this.data.min = Number.MAX_SAFE_INTEGER);
            for (
              var o = 0,
                a = Array.isArray(this.data.items) ? this.data.items.length : 0;
              o < a;
              o++
            ) {
              var n = this.data.items[o];
              (n.amount = n.volume * n.price),
                r.props.isHKOrZsOrFundOrNhg || void 0 === n.totalAmount
                  ? ((e += n.volume), (s += n.amount))
                  : ((e = n.totalVolume), (s = n.totalAmount)),
                n.avgPrice || (n.avgPrice = 0 == +e ? +n.price : s / e),
                (r.data.maxVol = Math.max(r.data.maxVol, n.volume)),
                r.props.showIOPV && n.iopv > 0
                  ? ((r.data.max = Math.max(r.data.max, n.price, n.iopv)),
                    (r.data.min = Math.min(r.data.min, n.price, n.iopv)))
                  : ((r.data.max = Math.max(r.data.max, n.price)),
                    (r.data.min = Math.min(r.data.min, n.price))),
                (r.isMultiDays() || r.props.daysConf.connectLine) &&
                  (o + 1) % r.props.daysConf.eachDayCount == 0 &&
                  ((e = 0), (s = 0));
            }
            this.props.showAuction &&
              this.auctionData &&
              ((this.data.max = Math.max(
                this.data.max,
                null != (t = this.auctionData.max) ? t : this.data.max
              )),
              (this.auctionData.max = this.data.max),
              (this.data.min = Math.min(
                this.data.min,
                null != (i = this.auctionData.min) ? i : this.data.min
              )),
              (this.auctionData.min = this.data.min),
              (this.auctionData.middle = +this.data.preClose)),
              (this.data.middle = +this.data.preClose),
              this.props.isFreeMiddleLine &&
                ((this.data.max = Math.max(+this.data.preClose, this.data.max)),
                (this.data.min = Math.min(+this.data.preClose, this.data.min)),
                this.data.max === this.data.min &&
                  ((this.data.max = 1.01 * +this.data.preClose),
                  (this.data.min = 0.99 * +this.data.preClose),
                  this.data.max || (this.data.max = 0.01)),
                (this.data.middle = (this.data.max + this.data.min) / 2),
                this.props.showAuction &&
                  this.auctionData &&
                  ((this.auctionData.max = this.data.max),
                  (this.auctionData.min = this.data.min),
                  (this.auctionData.middle = this.data.middle))),
              (this.data.diff = Math.max(
                Math.abs(this.data.max - this.data.middle),
                Math.abs(this.data.min - this.data.middle)
              ));
          },
        },
        {
          key: "getTextAlign",
          value: function (t, i) {
            return this.isMultiDays() ? Y : 0 === t ? E : t === i - 1 ? N : Y;
          },
        },
        {
          key: "showCrossLine",
          value: function (t, i) {
            if (this.data && Array.isArray(this.data.items)) {
              var e = this.data.items.length || 0,
                s = this.crossLine.changeCoordsForMins(t, e);
              s.auction
                ? this.showAuctionCrossLine(s, i)
                : this.showMainCrossLine(s, i);
            }
          },
        },
        {
          key: "showMainCrossLine",
          value: function (t, i) {
            var e,
              s =
                this.data &&
                Array.isArray(this.data.items) &&
                this.data.items[t.index],
              r = this.layout.getChart();
            if (s) {
              var o = this.props.fixNum || 2;
              (s.leftval = ""),
                (s.rightval = ""),
                t.y <= r.height + r.y &&
                  ((e =
                    +this.data.middle +
                    this.data.diff -
                    ((2 * this.data.diff) / r.height) * (t.y - r.y)),
                  (s.leftval = e.toFixed(o)),
                  this.props.hideAxisY ||
                    ((s.rightval = "".concat(
                      (
                        ((s.leftval - this.data.preClose) /
                          this.data.preClose) *
                        100
                      ).toFixed(2),
                      "%"
                    )),
                    0 == +this.data.preClose && (s.rightval = "0.00%")));
              var a = this.layout.mainIndicator,
                n = this.props.minsIndicator;
              if (t.y >= a.y && t.y <= a.y + a.height) {
                var h = this.data.maxMin[n],
                  c = h.max;
                (e = c - ((c - h.min) / a.height) * (t.y - a.y)),
                  "volume" === n
                    ? (e =
                        0 ==
                        +(e =
                          Math.abs(e) > 1e8
                            ? "".concat((e / 1e8).toFixed(2), "亿")
                            : Math.abs(e) > 1e4
                            ? "".concat((e / 1e4).toFixed(2), "万")
                            : e.toFixed(2))
                          ? "0.00"
                          : e)
                    : (e = 0 == +(e = e.toFixed(3)) ? "0.000" : e),
                  (s.leftval = e);
              }
              (s.bottomval =
                s.time &&
                "".concat(s.time.slice(0, 2), ":").concat(s.time.slice(2))),
                this.draw({ indicatorItem: s, indicatorIndex: t.index }),
                this.crossLine.draw(t, s),
                this.props.hideTradeBar || this.drawTradeBar(s),
                i && i(s);
            }
          },
        },
        {
          key: "showAuctionCrossLine",
          value: function (t, i) {
            var e,
              s = t.index,
              r = t.index;
            do {
              e = this.auctionData.items[s] || this.auctionData.items[r];
            } while (!e && --s >= 0 && ++r <= this.props.auctionCount - 1);
            if (e) {
              (e.leftval = ""), (e.rightval = "");
              var o = this.layout.auctionChart;
              if (t.y >= o.y && t.y <= o.y + o.height) {
                var a = e.p && e.p.split && e.p.split(".")[1];
                (a = (a && a.length) || 2),
                  (e.leftval = (
                    this.auctionData.middle +
                    this.auctionData.diff -
                    ((2 * this.auctionData.diff) / o.height) * (t.y - o.y)
                  ).toFixed(a)),
                  (e.rightval = "".concat(
                    (
                      ((e.leftval - this.auctionData.middle) /
                        this.auctionData.middle) *
                      100
                    ).toFixed(2),
                    "%"
                  ));
              }
              var n = this.layout.auctionIndicator,
                h = this.props.minsIndicator;
              if (t.y >= n.y && t.y <= n.y + n.height) {
                var c = this.data.maxMin[h],
                  p = c.max,
                  l = p - ((p - c.min) / n.height) * (t.y - n.y);
                "volume" === h
                  ? (l =
                      0 ==
                      +(l =
                        Math.abs(l) > 1e8
                          ? "".concat((l / 1e8).toFixed(2), "亿")
                          : Math.abs(l) > 1e4
                          ? "".concat((l / 1e4).toFixed(2), "万")
                          : l.toFixed(2))
                        ? "0.00"
                        : l)
                  : (l = 0 == +(l = l.toFixed(3)) ? "0.000" : l),
                  (e.leftval = l);
              }
              (e.bottomval = ""
                .concat(e.tm.slice(0, 2), ":")
                .concat(e.tm.slice(2, 4))
                .concat(e.tm.length > 4 ? ":".concat(e.tm.slice(4)) : "")),
                this.draw(),
                this.crossLine.draw(t, e),
                (e.auction = !0),
                i && i(e);
            }
          },
        },
        {
          key: "drawTradeBar",
          value: function (t) {
            if (t.tradeType) {
              var i = this.props.isWzqMiniProgram,
                e = {
                  color: i ? "#262E40" : this.props.colorProp.button.blueText,
                  font: i
                    ? "400 "
                        .concat(12 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType)
                    : "500 "
                        .concat(11 * this.props.devicePixelRatio, "px ")
                        .concat(this.props.textProp.fontType),
                  textAlign: E,
                  baseLine: W,
                },
                s = this.layout.getChart(),
                r = D(this.ctx, "成交明细", e),
                o = 4.5 * this.props.devicePixelRatio,
                a = 9 * this.props.devicePixelRatio,
                n = r + o + 20 * this.props.devicePixelRatio,
                h = (i ? 24 : 23) * this.props.devicePixelRatio,
                c = i ? 6 * this.props.devicePixelRatio : 0,
                p = i ? "#F5F6FA" : this.props.colorProp.button.commonBorder,
                l = i ? "#F5F6FA" : this.props.colorProp.button.commonBg,
                d = t.showLeft ? s.x : s.x + s.width - n;
              ot(this.ctx, d, c, n, h, 2 * this.props.devicePixelRatio, p, l);
              var u = c + h / 2,
                g = d + 8 * this.props.devicePixelRatio;
              I(this.ctx, "成交明细", g, u, e, r);
              var x = c + (h - a) / 2,
                m = ei.getImg(i ? "ARROW_BLACK" : "ARROW_BLUE"),
                f = g + r + 4 * this.props.devicePixelRatio;
              this.ctx.drawImage(m, f, x, o, a),
                (this.tradeBarRegion = { x: d, y: c, width: n, height: h }),
                (this.tradeBarData = t);
            } else (this.tradeBarRegion = null), (this.tradeBarData = null);
          },
        },
        {
          key: "isPointInRegion",
          value: function (t, i) {
            return (
              i &&
              t.x >= i.x &&
              t.x <= i.x + i.width &&
              t.y >= i.y &&
              t.y <= i.y + i.height
            );
          },
        },
        {
          key: "isTapTipRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio),
              this.isPointInRegion(i, this.tipRegion)
            );
          },
        },
        {
          key: "isTapTradeBarRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio),
              this.isPointInRegion(i, this.tradeBarRegion)
            );
          },
        },
        {
          key: "isTapButtonRegion",
          value: function (t) {
            var i = this.props.devicePixelRatio,
              e = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (e.x = e.x * i),
              (e.y = e.y * i),
              this.isPointInRegion(
                e,
                (function (t) {
                  var e = 10 * i;
                  return {
                    x: t.x - e,
                    y: t.y - e,
                    width: t.buttonWidth + 2 * e,
                    height: t.height + 2 * e,
                  };
                })(this.layout.mainIndicator.bar)
              )
            );
          },
        },
        {
          key: "isTapIndicatorRegion",
          value: function (t) {
            var i = St(this.ctx.ctx.canvas, t, this.props.isMiniPorgram);
            return (
              (i.x = i.x * this.props.devicePixelRatio),
              (i.y = i.y * this.props.devicePixelRatio),
              this.isPointInRegion(i, this.layout.mainIndicator)
            );
          },
        },
        {
          key: "switchIndicator",
          value: function (t) {
            if (t) this.props.minsIndicator = t;
            else {
              var i = this.props.useIndicators.length,
                e =
                  (this.props.useIndicators.indexOf(this.props.minsIndicator) +
                    1) %
                  i;
              this.props.minsIndicator = this.props.useIndicators[e];
            }
            return this.draw(), this.props.minsIndicator;
          },
        },
        {
          key: "getPointPosition",
          value: function (t, i) {
            var e;
            if (
              -1 ===
              (e = this.data.items.findIndex(function (i) {
                return +i.time == +t;
              }))
            )
              if ("up" === i) {
                var s = Number.MIN_SAFE_INTEGER;
                this.data.items.forEach(function (t, i) {
                  t.price >= s && ((s = t.price), (e = i));
                });
              } else if ("down" === i) {
                var r = Number.MAX_SAFE_INTEGER;
                this.data.items.forEach(function (t, i) {
                  t.price <= r && ((r = t.price), (e = i));
                });
              }
            var o = this.layout.mainChart,
              a = o.x + (o.width / this.props.count) * e,
              n =
                o.y +
                o.height / 2 -
                ((this.data.items[e].price - this.data.middle) /
                  this.data.diff) *
                  (o.height / 2);
            return {
              x: a / this.props.devicePixelRatio,
              y: n / this.props.devicePixelRatio,
            };
          },
        },
      ]),
      t
    );
  })()),
  (exports.PreLoadImages = ei),
  (exports.StockChartEvent = (function () {
    function t(i, e, s) {
      a(this, t),
        (this.tapCount = 0),
        (this.canvas = i),
        (this.options = e),
        (this.throttleSwipe = C(16, this.swipe)),
        s &&
          ((this.onTap = s.onTap),
          (this.onCrossLineTap = s.onCrossLineTap),
          (this.onDoubleTap = s.onDoubleTap),
          s.onBeforeTouchMove && (this.onBeforeTouchMove = s.onBeforeTouchMove),
          (this.onTouchMove = C(16, s.onTouchMove)),
          (this.onSwipeX = s.onSwipeX),
          (this.onSwipeY = s.onSwipeY),
          (this.onPinch = C(16, s.onPinch)),
          (this.onPinchEnd = s.onPinchEnd),
          (this.onTouchEnd = s.onTouchEnd),
          (this.onTouchCancle = s.onTouchCancle),
          (this.onTouchStart = s.onTouchStart)),
        (this.touchMoveCount = 0);
    }
    return (
      n(t, [
        {
          key: "handleEvent",
          value: function (t) {
            if (
              this.options.isMiniPorgram &&
              Array.isArray(t.touches) &&
              t.touches.length
            ) {
              if ("touchmove" === t.type) {
                if (
                  this.touchPoint &&
                  t.touches[0].x === this.touchPoint[0].x &&
                  t.touches[0].y === this.touchPoint[0].y
                )
                  return;
                if (
                  ((this.touchPoint = t.touches),
                  (this.touchMoveCount += 1),
                  this.touchMoveCount <= 1)
                )
                  return;
              } else (this.touchPoint = null), (this.touchMoveCount = 0);
              if (
                (t.touches.map(function (t) {
                  (t.pageX = t.x),
                    (t.clientX = t.x),
                    (t.screenX = t.x),
                    (t.pageY = t.y),
                    (t.clientY = t.y),
                    (t.screenY = t.y);
                }),
                +t.touches[0].y < 0)
              )
                return;
            }
            if (
              this.options.isMiniPorgram ||
              ("undefined" != typeof window &&
                window.TouchEvent &&
                t instanceof window.TouchEvent) ||
              ("undefined" != typeof window && window.$wujie)
            )
              return (
                (this.isTouchMode = !0),
                void ("touchstart" === t.type
                  ? this.start(t)
                  : "touchmove" === t.type
                  ? this.move(t)
                  : "touchend" === t.type && this.end(t))
              );
            if (t instanceof window.MouseEvent) {
              if ("mousewheel" === t.type)
                return (
                  t.preventDefault && t.preventDefault(),
                  void (
                    this.onPinch && this.onPinch(t.pageX, t.wheelDelta >= 0)
                  )
                );
              if (this.isTouchMode) return;
              var i = {
                  identifier: 0,
                  target: t.target,
                  clientX: t.clientX,
                  clientY: t.clientY,
                  pageX: t.pageX,
                  pageY: t.pageY,
                  screenX: t.screenX,
                  screenY: t.screenY,
                },
                e = { touches: [i], changedTouches: [i] };
              "mousedown" === t.type
                ? ((this.isMouseDown = !0), this.start(e))
                : "mousemove" === t.type
                ? this.isMouseDown && this.move(e)
                : "mouseup" === t.type &&
                  ((this.isMouseDown = !1), this.end(e));
            }
          },
        },
        {
          key: "start",
          value: function (t) {
            var i = this;
            if (
              ((this.isTap = !0),
              (this.isPinch = !1),
              (this.isInertia = !1),
              (this.parentScrolling = !1),
              t.touches && 2 === t.touches.length)
            )
              return (
                clearTimeout(this.tapTimeout),
                (this.tapCount = 0),
                (this.isPinch = !0),
                void (this.pinchDistance = Math.sqrt(
                  Math.pow(t.touches[0].pageX - t.touches[1].pageX, 2) +
                    Math.pow(t.touches[0].pageY - t.touches[1].pageY, 2)
                ))
              );
            if (t.touches && 1 === t.touches.length) {
              if (2 == ++this.tapCount)
                return (
                  clearTimeout(this.tapTimeout),
                  (this.isTap = !1),
                  (this.tapCount = 0),
                  void (this.onDoubleTap && this.onDoubleTap(t))
                );
              this.isCrossLine ||
                (this.longTapTimeout = setTimeout(function () {
                  (i.isTap = !1),
                    (i.tapCount = 0),
                    i.showCrossLine(t.touches[0]);
                }, 500)),
                this.onTouchStart && this.onTouchStart(t.touches[0]);
            }
            (this.lastTouch = { x: t.touches[0].pageX, y: t.touches[0].pageY }),
              (this.firstTouch = {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY,
              }),
              (this.lastMoveTime = Date.now()),
              (this.lastMoveStart = t.touches[0].pageX);
          },
        },
        {
          key: "move",
          value: function (t) {
            if (
              ((this.e = t),
              this.isTap &&
                this.firstTouch &&
                t.touches &&
                1 === t.touches.length)
            ) {
              var i = t.touches[0].pageX - this.firstTouch.x,
                e = t.touches[0].pageY - this.firstTouch.y;
              if (Math.abs(i) < 5 && Math.abs(e) < 5) return;
            }
            if (
              ((this.isTap = !1),
              (this.tapCount = 0),
              clearTimeout(this.longTapTimeout),
              this.isCrossLineTouchEnd)
            ) {
              if (/mins/.test(this.options.layout)) return;
              /kline/.test(this.options.layout) && this.hideCrossLine();
            }
            if (this.isPinch) {
              if (
                (this.preventParentScroll(),
                t.touches && 2 === t.touches.length)
              ) {
                this.pinchCenter =
                  (t.touches[0].pageX + t.touches[1].pageX) / 2;
                var s = Math.sqrt(
                  Math.pow(t.touches[0].pageX - t.touches[1].pageX, 2) +
                    Math.pow(t.touches[0].pageY - t.touches[1].pageY, 2)
                );
                this.onPinch &&
                  this.onPinch(this.pinchCenter, s - this.pinchDistance >= 0),
                  (this.pinchDistance = s);
              }
            } else if (
              t.touches &&
              1 === t.touches.length &&
              this.onBeforeTouchMove &&
              this.onBeforeTouchMove(t.touches[0])
            )
              t.preventDefault && t.preventDefault();
            else {
              this.isCrossLine
                ? (this.preventParentScroll(), this.showCrossLine(t.touches[0]))
                : this.throttleSwipe(this.lastTouch, {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY,
                  });
              var r = Date.now();
              r - this.lastMoveTime > 300 &&
                ((this.lastMoveTime = r),
                (this.lastMoveStart = t.touches[0].pageX));
            }
          },
        },
        {
          key: "end",
          value: function (t) {
            var i = this;
            if ((clearTimeout(this.longTapTimeout), this.isPinch))
              0 === t.touches.length && this.onPinchEnd && this.onPinchEnd();
            else {
              if (this.isTap)
                this.isCrossLine
                  ? (this.onCrossLineTap && this.onCrossLineTap(t)) ||
                    (this.isKlineWithHistoryMins
                      ? (this.showCrossLine(t.changedTouches[0]),
                        (this.isCrossLineTouchEnd = !0))
                      : this.hideCrossLine())
                  : (this.onTap && this.onTap(t)) ||
                    ("mins-portrait" === this.options.layout &&
                      this.options.isWzqMiniProgram) ||
                    (this.showCrossLine(t.changedTouches[0]),
                    this.isKlineWithHistoryMins ||
                      (this.cancelTimeout = setTimeout(function () {
                        i.hideCrossLine();
                      }, 4e3))),
                  (this.tapTimeout = setTimeout(function () {
                    i.tapCount = 0;
                  }, 200));
              else if (this.isCrossLine) {
                if (this.isCrossLineTouchEnd) return;
                this.isKlineWithHistoryMins ||
                  (this.cancelTimeout = setTimeout(function () {
                    i.hideCrossLine();
                  }, 4e3));
              } else if (
                this.lastTouch &&
                Math.abs(this.lastTouch.x - this.lastMoveStart) > 30
              ) {
                if (this.parentScrolling) return;
                this.isInertia = !0;
                var e = Date.now(),
                  s =
                    (this.lastTouch.x - this.lastMoveStart) /
                    (e - this.lastMoveTime),
                  r = Math.abs(s),
                  o = s > 0 ? 1 : -1;
                !(function t() {
                  var s = Date.now() - e,
                    a = r - 0.003 * s;
                  a <= 0 || !i.isInertia
                    ? i.swipe(null, null)
                    : (i.throttleSwipe(i.lastTouch, {
                        x: i.lastTouch.x + a * s * o,
                        y: i.lastTouch.y,
                      }),
                      i.options.isMiniPorgram
                        ? i.canvas.requestAnimationFrame(t)
                        : requestAnimationFrame(t));
                })();
              } else this.swipe(null, null);
              this.onTouchEnd && this.onTouchEnd();
            }
          },
        },
        {
          key: "showCrossLine",
          value: function (t) {
            this.isPinch ||
              (clearTimeout(this.cancelTimeout),
              (this.isCrossLine = !0),
              this.onTouchMove && this.onTouchMove(t));
          },
        },
        {
          key: "hideCrossLine",
          value: function () {
            clearTimeout(this.cancelTimeout),
              (this.isCrossLine = !1),
              (this.isCrossLineTouchEnd = !1),
              this.onTouchCancle && this.onTouchCancle();
          },
        },
        {
          key: "toggleKlineWithHistoryMins",
          value: function (t) {
            (this.isKlineWithHistoryMins =
              void 0 === t ? !this.isKlineWithHistoryMins : t),
              this.isKlineWithHistoryMins
                ? clearTimeout(this.cancelTimeout)
                : this.hideCrossLine();
          },
        },
        {
          key: "cancleAll",
          value: function () {
            clearTimeout(this.tapTimeout),
              clearTimeout(this.longTapTimeout),
              clearTimeout(this.cancelTimeout);
          },
        },
        {
          key: "swipe",
          value: function (t, i) {
            if (t && i)
              if (Math.abs(t.x - i.x) > Math.abs(t.y - i.y)) {
                if (((exports.swiping = !0), this.parentScrolling)) return;
                this.preventParentScroll(),
                  this.onSwipeX && this.onSwipeX(t.x - i.x),
                  (this.lastTouch = i);
              } else
                Math.abs(t.y - i.y) > 0 && (this.parentScrolling = !0),
                  this.onSwipeY && this.onSwipeY(t.y - i.y);
            else
              (exports.swiping = !1),
                this.onSwipeX && this.onSwipeX(null),
                this.onSwipeY && this.onSwipeY(null);
          },
        },
        {
          key: "preventParentScroll",
          value: function () {
            this.e.preventDefault && this.e.preventDefault(),
              this.e.stopPropagation && this.e.stopPropagation();
          },
        },
      ]),
      t
    );
  })()),
  (exports.getPixelRatio = function () {
    return T() ? v.wx$1.getWindowInfo().pixelRatio : window.devicePixelRatio;
  }),
  (exports.getPlatform = function () {
    return T()
      ? v.wx$1 && v.wx$1.getDeviceInfo && v.wx$1.getDeviceInfo().platform
      : window.navigator.appVersion.match(/android/gi)
      ? "android"
      : window.navigator.appVersion.match(/iphone/gi)
      ? "ios"
      : "pc";
  }),
  (exports.isMiniPorgram = T),
  (exports.setSwiping = function (t) {
    exports.swiping = t;
  });
