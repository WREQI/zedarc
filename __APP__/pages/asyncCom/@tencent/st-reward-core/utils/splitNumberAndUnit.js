require("../../../../../@babel/runtime/helpers/Arrayincludes");
var r,
  e,
  t,
  a,
  n = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  c = require("../../../../../@babel/runtime/helpers/taggedTemplateLiteral"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  l = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  b = function (r, e, t) {
    return e in r
      ? o(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t);
  },
  m = function (r, e) {
    for (var t in e || (e = {})) u.call(e, t) && b(r, t, e[t]);
    if (l) {
      var a,
        n = i(l(e));
      try {
        for (n.s(); !(a = n.n()).done; ) {
          t = a.value;
          p.call(e, t) && b(r, t, e[t]);
        }
      } catch (r) {
        n.e(r);
      } finally {
        n.f();
      }
    }
    return r;
  };
function s(r, e) {
  var t = r.replace(e, "."),
    a = Number(t);
  return r.startsWith(e) ? a : r.endsWith(e) ? Math.floor(a) : a;
}
var d = function (r) {
  return "[object String]" === Object.prototype.toString.call(r);
};
exports.splitNumberAndUnit = function (i) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    l = m(
      m(
        {},
        {
          allowNoUnit: !0,
          strictMode: !1,
          decimalSeparator: ".",
          numberOnly: !1,
        }
      ),
      o || {}
    ),
    u = { number: "", unit: "", raw: i };
  if (!i || !d(i)) return u;
  var p = String.raw(r || (r = c(["([+-]?)"]))),
    b = String.raw(e || (e = c(["(d+)"], ["(\\d+)"]))),
    f = String.raw(
      t || (t = c(["(?:", "(d*))?"], ["(?:", "(\\d*))?"])),
      l.decimalSeparator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    ),
    y = String.raw(a || (a = c(["([eE][+-]?d+)?"], ["([eE][+-]?\\d+)?"]))),
    v = new RegExp("^".concat(p).concat(b).concat(f).concat(y, "(\\D*)$")),
    w = i.trim().match(v);
  if (!w) return u;
  var g = n(w, 6),
    h = g[1],
    S = g[2],
    O = g[3],
    j = g[4],
    N = g[5],
    q = ""
      .concat(h)
      .concat(S)
      .concat(O ? "".concat(l.decimalSeparator).concat(O) : "")
      .concat(j || "");
  return (function (r, e) {
    try {
      var t = r.replace(e, ".");
      return !isNaN(t) && isFinite(t);
    } catch (r) {
      return !1;
    }
  })(q, l.decimalSeparator)
    ? l.numberOnly && N
      ? u
      : l.allowNoUnit || N
      ? l.strictMode &&
        N &&
        !(function (r) {
          return ["元", "金币", "px", "rem", "%", "vh", "vw"].includes(
            r.toLowerCase()
          );
        })(N)
        ? u
        : { number: s(q, l.decimalSeparator), unit: (N || "").trim(), raw: i }
      : u
    : u;
};
