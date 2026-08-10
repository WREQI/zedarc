var r = require("../../../../../@babel/runtime/helpers/typeof"),
  e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t =
    /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
  n = function (r) {
    if ("string" != typeof r)
      throw new TypeError("Invalid argument expected string");
    var e = r.match(t);
    if (!e)
      throw new Error(
        "Invalid argument not valid semver ('".concat(r, "' received)")
      );
    return e.shift(), e;
  },
  i = function (r) {
    return "*" === r || "x" === r || "X" === r;
  },
  o = function (r) {
    var e = parseInt(r, 10);
    return isNaN(e) ? r : e;
  },
  a = function (t, n) {
    if (i(t) || i(n)) return 0;
    var a = (function (e, t) {
        return r(e) != r(t) ? [String(e), String(t)] : [e, t];
      })(o(t), o(n)),
      u = e(a, 2),
      c = u[0],
      f = u[1];
    return c > f ? 1 : c < f ? -1 : 0;
  },
  u = function (r, e) {
    for (var t = 0; t < Math.max(r.length, e.length); t++) {
      var n = a(r[t] || "0", e[t] || "0");
      if (0 !== n) return n;
    }
    return 0;
  },
  c = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1] },
  f = Object.keys(c);
exports.compare = function (e, t, i) {
  !(function (e) {
    if ("string" != typeof e)
      throw new TypeError(
        "Invalid operator type, expected string but got " + r(e)
      );
    if (-1 === f.indexOf(e))
      throw new Error("Invalid operator, expected one of ".concat(f.join("|")));
  })(i);
  var o = (function (r, e) {
    var t = n(r),
      i = n(e),
      o = t.pop(),
      a = i.pop(),
      c = u(t, i);
    return 0 !== c
      ? c
      : o && a
      ? u(o.split("."), a.split("."))
      : o || a
      ? o
        ? -1
        : 1
      : 0;
  })(e, t);
  return c[i].includes(o);
};
