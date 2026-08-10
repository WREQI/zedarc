var e,
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable,
  b = function (e, a, r) {
    return a in e
      ? t(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[a] = r);
  },
  d = require("../../../../../common/vendor.js"),
  p = {};
(e = p),
  Object.defineProperty(e, "__esModule", { value: !0 }),
  (e.SIGN_KEY = void 0),
  (e.SIGN_KEY = {
    stock: "EE530E7508AB5831978E6006381898E9",
    mpweapp: "B833418A24C7EC2E5A534348665B9B0C",
    mpwzq: "98FA47ACCCEC0A3C5A4768991E1D9113",
    h5: "98FA47ACCCEC0A3C5A4768991E1D9113",
    df: "34C0A93DF3AD73D4307E468317380146",
    zxgh5: "9c8e247b438b7d0ae845f9931810a387",
    wzq_snp: "15b3a7844a6d44115f4b52c8aa3cc36e",
    wzqxcx: "68cae00479351606086e78d754042961",
    mini_h5: "cedc068249f7041d474b638038b13b8f",
    light_h5: "5b566bb10c9999cf25c8e53127c075f4",
    i_ask: "E3164D66F12E3A29A8C08530215B4FD8",
    xuanji: "cf1f3fd583d54b656f67bf2ee4e939fa",
    wzq_analyse: "01d16d0a381fbda39775faa1dff16446",
    GUOSEN: "15c752a9e8b7d04d638ad229cbe084e2",
    ZHONGXINJIANTOU: "c65bb114387a9315e9ec0cf2764884d9",
    DAFENG: "9fbf6158eca46d1fe6eeb487abf9ce6b",
  }),
  (e.default = e.SIGN_KEY),
  p.SIGN_KEY.stock,
  p.SIGN_KEY.mpweapp,
  p.SIGN_KEY.mpwzq,
  p.SIGN_KEY.h5,
  p.SIGN_KEY.df,
  (exports.getSignV2 = function (e) {
    var t,
      p =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
      i = arguments.length > 2 ? arguments[2] : void 0,
      s = [],
      l = Object.keys(e).sort(),
      E = a(l);
    try {
      for (E.s(); !(t = E.n()).done; ) {
        var u = t.value;
        void 0 !== e[u] &&
          "" !== e[u] &&
          s.push("".concat(u, "=").concat(e[u]));
      }
    } catch (e) {
      E.e(e);
    } finally {
      E.f();
    }
    var C,
      A,
      v = d.md5Module("".concat(i).concat(p.toUpperCase())).toUpperCase();
    return (
      s.push("key=".concat(v)),
      (C = (function (e, t) {
        for (var r in t || (t = {})) n.call(t, r) && b(e, r, t[r]);
        if (o) {
          var c,
            d = a(o(t));
          try {
            for (d.s(); !(c = d.n()).done; ) {
              r = c.value;
              f.call(t, r) && b(e, r, t[r]);
            }
          } catch (e) {
            d.e(e);
          } finally {
            d.f();
          }
        }
        return e;
      })({}, e)),
      (A = {
        "x-appid": i,
        "x-sa-v": 2,
        "x-sa-sign": d.md5Module(s.join("&")).toLowerCase(),
        "x-timestamp": parseInt(e.t / 1e3, 10),
      }),
      r(C, c(A))
    );
  });
