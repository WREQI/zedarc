var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  p = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  n = function (e, p, a) {
    return p in e
      ? r(e, p, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[p] = a);
  },
  o = require("../../../stock-crypto-modules-hq/src/config.js"),
  i = require("../common/sign.js"),
  s = require("../../../../../../common/vendor.js"),
  d = (function (e) {
    return (
      (e.GET = "GET"),
      (e.POST = "POST"),
      (e.PUT = "PUT"),
      (e.DELETE = "DELETE"),
      e
    );
  })(d || {});
exports.request = function (r) {
  var u = r.url,
    c = r.method,
    l = void 0 === c ? d.POST : c,
    m = r.data,
    P = void 0 === m ? {} : m,
    f = r.options,
    v = void 0 === f ? {} : f,
    y = v.appendParamsApp,
    O = void 0 === y || y,
    b = v.appendParamsAppId,
    E = void 0 !== b && b,
    T = v.appendParamsSignType,
    g = (function (r, o) {
      for (var i in o || (o = {})) a.call(o, i) && n(r, i, o[i]);
      if (p) {
        var s,
          d = e(p(o));
        try {
          for (d.s(); !(s = d.n()).done; ) {
            i = s.value;
            t.call(o, i) && n(r, i, o[i]);
          }
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
      }
      return r;
    })({}, P);
  return (
    O &&
      o.ORIGIN.mpweapp &&
      (delete v.appendParamsApp, (g.app = o.ORIGIN.mpweapp)),
    E &&
      o.APPIDENUM.mpweapp &&
      (delete v.appendParamsAppId, (g.appid = o.APPIDENUM.mpweapp)),
    T && (delete v.appendParamsSignType, (g.sign = i.getSign(T, P))),
    s.StockBridge.request(u, l, g, v)
  );
};
