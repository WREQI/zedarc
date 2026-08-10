var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, r, o) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o);
  },
  p = require("../../../../../../common/vendor.js"),
  s = require("../../../stock-crypto-modules-hq/src/config.js"),
  u = function (t) {
    var s,
      u = t.data,
      d = t.method,
      l = void 0 === d ? "GET" : d,
      f = t.origin,
      m = [],
      v = Object.keys(u).sort(),
      y = e(v);
    try {
      for (y.s(); !(s = y.n()).done; ) {
        var g = s.value;
        void 0 !== u[g] &&
          "" !== u[g] &&
          m.push("".concat(g, "=").concat(u[g]));
      }
    } catch (e) {
      y.e(e);
    } finally {
      y.f();
    }
    var b,
      O,
      h = p.md5Module("".concat(f).concat(l.toUpperCase())).toUpperCase();
    return (
      m.push("key=".concat(h)),
      (b = (function (t, r) {
        for (var o in r || (r = {})) a.call(r, o) && i(t, o, r[o]);
        if (n) {
          var p,
            s = e(n(r));
          try {
            for (s.s(); !(p = s.n()).done; ) {
              o = p.value;
              c.call(r, o) && i(t, o, r[o]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return t;
      })({}, u)),
      (O = {
        "x-appid": f,
        "x-sa-v": 2,
        "x-sa-sign": p.md5Module(m.join("&")).toLowerCase(),
        "x-timestamp": parseInt((u.t / 1e3).toString(), 10),
      }),
      r(b, o(O))
    );
  };
(exports.getSign = function (e, t) {
  return "1" === e
    ? (function (e) {
        var t = e,
          r = t.signkey;
        delete t.signkey;
        var o = ""
          .concat(
            Object.keys(t)
              .sort()
              .map(function (e) {
                return "".concat(e, "=").concat(t[e]);
              })
              .join("&"),
            "&key="
          )
          .concat(r);
        return p.md5Module(o);
      })(t)
    : "2" === e
    ? (function (e) {
        var t = e.signkey,
          r = e.timestamp,
          o = e.zappid,
          n = o || s.ORIGIN.mpweapp,
          a = Math.floor(Math.random() * Math.floor(1e4)),
          c = n + t + a;
        r && (c += r);
        var i = p.md5Module(c);
        return {
          zappid: o,
          sign: i,
          nonce: a,
          queryStr: "zappid="
            .concat(o, "&sign=")
            .concat(i, "&nonce=")
            .concat(a),
        };
      })(t)
    : "3" === e
    ? u(t)
    : "4" === e
    ? (function (e) {
        for (var t = [], r = 0, o = Object.keys(e); r < o.length; r++) {
          var n = o[r];
          void 0 !== e[n] && t.push("".concat(n, "=").concat(e[n]));
        }
        var a = s.ORIGIN.mpweapp;
        return (
          t.push("key=".concat(s.SIGN_KEY_HQ[a])),
          {
            "x-appid": a,
            "x-sa-v": 1,
            "x-sa-sign": p.md5Module(t.join("&")).toLowerCase(),
            "x-timestamp": parseInt((e.t / 1e3).toString(), 10),
          }
        );
      })(t)
    : void 0;
}),
  (exports.getSignV3 = u);
