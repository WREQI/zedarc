var t = require("../common/vendor.js"),
  e = function (e, r) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
      n = Math.abs(+e),
      a = o,
      c = "";
    return isNaN(+e)
      ? "--"
      : ((c = t.__CJS__export_default__.toCurrency(n, a)),
        +e < 0
          ? (c = "-".concat(c))
          : r && 0 != +e && /^[^+]/.test(c) && (c = "+".concat(c)),
        c);
  },
  r = function (t, e) {
    var r = parseFloat(t);
    return Number.isNaN(r) || r < 0
      ? t
      : e
      ? /^[^+-]/.test(t)
        ? "+".concat(t)
        : t
      : t > 0 && /^[^+-]/.test(t)
      ? "+".concat(t)
      : t;
  };
function o(t) {
  return "".concat(e(t, !1, 2), "元");
}
function n(e) {
  return t.isString(e) ? e.replace(/,/g, "") : e;
}
function a(t, e) {
  var r = 0,
    o = 0;
  try {
    r = t.toString().split(".")[1].length;
  } catch (t) {}
  try {
    o = e.toString().split(".")[1].length;
  } catch (t) {}
  var n = Number(t.toString().replace(".", "")),
    a = Number(e.toString().replace(".", ""));
  if (0 === a) throw RangeError("no one can be dived by zero");
  return (+n / a) * Math.pow(10, o - r);
}
var c = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      divNoFixed: a,
      formatBalanceMoney: o,
      formatMoney: function (e, r) {
        var o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          n = Math.abs(+e),
          a = o,
          c = "";
        return isNaN(+e)
          ? "--"
          : ((c =
              n > 999999.99 && n < 1e8
                ? "".concat(
                    t.__CJS__export_default__.toCurrency(n / 1e4, a),
                    "万"
                  )
                : n >= 1e8
                ? "".concat(
                    t.__CJS__export_default__.toCurrency(n / 1e8, a),
                    "亿"
                  )
                : t.__CJS__export_default__.toCurrency(n, a)),
            +e < 0
              ? (c = "-".concat(n))
              : r && /^[^+]/.test(c) && (c = "+".concat(c)),
            c);
      },
      formatNoUnit: e,
      prefix: r,
      removeThousandSeparator: n,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
(exports.divNoFixed = a),
  (exports.formatBalanceMoney = o),
  (exports.formatNoUnit = e),
  (exports.moneyFilters = c),
  (exports.prefix = r),
  (exports.removeThousandSeparator = n);
