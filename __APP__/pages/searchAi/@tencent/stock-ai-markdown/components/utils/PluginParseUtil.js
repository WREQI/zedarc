var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  l = Object.defineProperty,
  a = function (e, t, r) {
    return (function (e, t, r) {
      return t in e
        ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r);
    })(e, "symbol" != n(t) ? t + "" : t, r);
  },
  i = t(function e() {
    r(this, e);
  });
a(i, "JGPI", "institution"),
  a(i, "YJQS", "financetrends"),
  a(i, "YLYC", "profitforcast"),
  a(i, "KLINE", "candlestick"),
  (exports.PluginType = i),
  (exports.changeStockCodeFormat = function (e) {
    return null == e || e.length <= 2
      ? e
      : e.endsWith(".OQ") ||
        e.endsWith(".N") ||
        e.endsWith(".PS") ||
        e.endsWith(".AM") ||
        e.endsWith(".OTC")
      ? "us".concat(e)
      : e.substring(e.length - 2).toLowerCase() + e.substring(0, e.length - 3);
  }),
  (exports.findTargetStockItem = function (t) {
    if (null == t || 0 === t.length) return null;
    var r,
      n = e(t);
    try {
      for (n.s(); !(r = n.n()).done; ) {
        var l = r.value;
        if (
          Object.prototype.hasOwnProperty.call(l, "type") &&
          "GP_CH" === l.type
        )
          return l;
      }
    } catch (e) {
      n.e(e);
    } finally {
      n.f();
    }
    var a,
      i = e(t);
    try {
      for (i.s(); !(a = i.n()).done; ) {
        var o = a.value;
        if (
          Object.prototype.hasOwnProperty.call(o, "type") &&
          "GP_HK" === o.type
        )
          return o;
      }
    } catch (e) {
      i.e(e);
    } finally {
      i.f();
    }
    var s,
      u = e(t);
    try {
      for (u.s(); !(s = u.n()).done; ) {
        var c = s.value;
        if (
          Object.prototype.hasOwnProperty.call(c, "type") &&
          "GP_US" === c.type
        )
          return c;
      }
    } catch (e) {
      u.e(e);
    } finally {
      u.f();
    }
    return t[0];
  });
