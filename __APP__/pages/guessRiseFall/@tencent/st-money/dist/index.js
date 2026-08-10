var t = require("../../../../../common/vendor.js"),
  r = {};
!(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.formatFloat =
      t.prefix =
      t.formatMoney =
      t.formatNoUnit =
      t.formatCommon =
      t.toCurrency =
      t.toText =
      t.fen2yuan =
      t.yuan2fen =
        void 0);
  var r = /^(-|\+)?[\d.]+$/;
  (t.yuan2fen = function (t) {
    return (
      (t = String(t)), r.test(t) ? (100 * parseFloat(t)).toFixed(2) : "0.00"
    );
  }),
    (t.fen2yuan = function (t) {
      return (
        (t = String(t)), r.test(t) ? (parseFloat(t) / 100).toFixed(2) : "0.00"
      );
    }),
    (t.toText = function (t, r, o, e) {
      var n = +t;
      if (isNaN(n)) return t;
      var a = Math.abs(n);
      return (
        (e = e || 1e4),
        (r = void 0 === r ? 2 : r),
        (o = o || ""),
        a < Math.pow(10, 4) || a < e
          ? (n = n.toFixed(r))
          : a >= Math.pow(10, 4) && a < Math.pow(10, 8)
          ? (n = (n / 1e4).toFixed(r) + "万")
          : a >= Math.pow(10, 8) &&
            a < Math.pow(10, 11) &&
            (n = (n / 1e8).toFixed(r) + "亿"),
        n + o
      );
    }),
    (t.toCurrency = function (t, r) {
      (t = String(t) || ""), (r = void 0 === r ? 2 : r);
      var o = /^(\-?)(\d+)(\.\d+)?$/.exec(t);
      if (null === o) return t;
      var e = (null != o && RegExp.$1) || "",
        n = (null != o && RegExp.$2) || "0",
        a = (null != o && RegExp.$3) || ".00",
        u = n.length,
        i = u > 3 ? u % 3 : 0,
        f = "",
        m = 0 == i ? "" : n.substr(0, i) + ",",
        s = 0;
      a =
        0 == r
          ? ""
          : a.length >= r + 1
          ? a.substr(0, r + 1)
          : (a + new Array(r + 1 - a.length + 1).join("0")).substr(0, r + 1);
      for (var c = i; c < u; c++)
        (f += n.charAt(c)), ++s % 3 == 0 && c < u - 1 && ((f += ","), (s = 0));
      return e + m + f + a;
    }),
    (t.formatCommon = function (r, o, e, n) {
      void 0 === e && (e = 2), void 0 === n && (n = !1);
      var a = Math.abs(+r),
        u = e,
        i = "";
      return isNaN(+r)
        ? "--"
        : ((i =
            n && a > 999999.99 && a < 1e8
              ? (0, t.toCurrency)(a / 1e4, u) + "万"
              : n && a > 1e8
              ? (0, t.toCurrency)(a / 1e8, u) + "亿"
              : (0, t.toCurrency)(a, u)),
          +r < 0
            ? (i = "-" + i)
            : o && 0 != +r && /^[^+]/.test(i) && (i = "+" + i),
          i);
    }),
    (t.formatNoUnit = function (r, o, e) {
      return void 0 === e && (e = 2), (0, t.formatCommon)(r, o, e);
    }),
    (t.formatMoney = function (r, o, e) {
      return void 0 === e && (e = 2), (0, t.formatCommon)(r, o, e, !0);
    }),
    (t.prefix = function (t, r) {
      var o = parseFloat(t);
      return Number.isNaN(o) || o < 0
        ? t
        : r
        ? /^[^+-]/.test(t)
          ? "+" + t
          : t
        : t > 0 && /^[^+-]/.test(t)
        ? "+" + t
        : t;
    }),
    (t.formatFloat = function (t, r) {
      if ((void 0 === r && (r = 2), Number.isNaN(t))) return "--";
      var o = 10 * r;
      return Math.round(+t * o) / o + "";
    }),
    (t.default = {
      fen2yuan: t.fen2yuan,
      yuan2fen: t.yuan2fen,
      toText: t.toText,
      toCurrency: t.toCurrency,
      formatNoUnit: t.formatNoUnit,
      formatMoney: t.formatMoney,
      prefix: t.prefix,
      formatFloat: t.formatFloat,
    });
})(r);
var o = t.getDefaultExportFromCjs(r);
(exports.amount = o), (exports.dist = r);
