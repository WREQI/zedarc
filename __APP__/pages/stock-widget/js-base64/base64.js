var r = "3.7.8",
  t = "function" == typeof Buffer,
  n = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
  e = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
  o = Array.prototype.slice.call(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  ),
  u = (function () {
    var r = {};
    return (
      o.forEach(function (t, n) {
        return (r[t] = n);
      }),
      r
    );
  })(),
  i = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
  c = String.fromCharCode.bind(String),
  a =
    "function" == typeof Uint8Array.from
      ? Uint8Array.from.bind(Uint8Array)
      : function (r) {
          return new Uint8Array(Array.prototype.slice.call(r, 0));
        },
  f = function (r) {
    return r.replace(/=/g, "").replace(/[+\/]/g, function (r) {
      return "+" == r ? "-" : "_";
    });
  },
  s = function (r) {
    return r.replace(/[^A-Za-z0-9\+\/]/g, "");
  },
  d = function (r) {
    for (var t, n, e, u, i = "", c = r.length % 3, a = 0; a < r.length; ) {
      if (
        (n = r.charCodeAt(a++)) > 255 ||
        (e = r.charCodeAt(a++)) > 255 ||
        (u = r.charCodeAt(a++)) > 255
      )
        throw new TypeError("invalid character found");
      i +=
        o[((t = (n << 16) | (e << 8) | u) >> 18) & 63] +
        o[(t >> 12) & 63] +
        o[(t >> 6) & 63] +
        o[63 & t];
    }
    return c ? i.slice(0, c - 3) + "===".substring(c) : i;
  },
  h =
    "function" == typeof btoa
      ? function (r) {
          return btoa(r);
        }
      : t
      ? function (r) {
          return Buffer.from(r, "binary").toString("base64");
        }
      : d,
  l = t
    ? function (r) {
        return Buffer.from(r).toString("base64");
      }
    : function (r) {
        for (var t = [], n = 0, e = r.length; n < e; n += 4096)
          t.push(c.apply(null, r.subarray(n, n + 4096)));
        return h(t.join(""));
      },
  p = function (r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? f(l(r)) : l(r);
  },
  A = function (r) {
    if (r.length < 2)
      return (t = r.charCodeAt(0)) < 128
        ? r
        : t < 2048
        ? c(192 | (t >>> 6)) + c(128 | (63 & t))
        : c(224 | ((t >>> 12) & 15)) +
          c(128 | ((t >>> 6) & 63)) +
          c(128 | (63 & t));
    var t =
      65536 + 1024 * (r.charCodeAt(0) - 55296) + (r.charCodeAt(1) - 56320);
    return (
      c(240 | ((t >>> 18) & 7)) +
      c(128 | ((t >>> 12) & 63)) +
      c(128 | ((t >>> 6) & 63)) +
      c(128 | (63 & t))
    );
  },
  y = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  g = function (r) {
    return r.replace(y, A);
  },
  b = t
    ? function (r) {
        return Buffer.from(r, "utf8").toString("base64");
      }
    : e
    ? function (r) {
        return l(e.encode(r));
      }
    : function (r) {
        return h(g(r));
      },
  x = function (r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? f(b(r)) : b(r);
  },
  B = function (r) {
    return x(r, !0);
  },
  v =
    /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
  C = function (r) {
    switch (r.length) {
      case 4:
        var t =
          (((7 & r.charCodeAt(0)) << 18) |
            ((63 & r.charCodeAt(1)) << 12) |
            ((63 & r.charCodeAt(2)) << 6) |
            (63 & r.charCodeAt(3))) -
          65536;
        return c(55296 + (t >>> 10)) + c(56320 + (1023 & t));
      case 3:
        return c(
          ((15 & r.charCodeAt(0)) << 12) |
            ((63 & r.charCodeAt(1)) << 6) |
            (63 & r.charCodeAt(2))
        );
      default:
        return c(((31 & r.charCodeAt(0)) << 6) | (63 & r.charCodeAt(1)));
    }
  },
  m = function (r) {
    return r.replace(v, C);
  },
  U = function (r) {
    if (((r = r.replace(/\s+/g, "")), !i.test(r)))
      throw new TypeError("malformed base64.");
    var t, n, e;
    r += "==".slice(2 - (3 & r.length));
    for (var o = [], a = 0; a < r.length; )
      (t =
        (u[r.charAt(a++)] << 18) |
        (u[r.charAt(a++)] << 12) |
        ((n = u[r.charAt(a++)]) << 6) |
        (e = u[r.charAt(a++)])),
        64 === n
          ? o.push(c((t >> 16) & 255))
          : 64 === e
          ? o.push(c((t >> 16) & 255, (t >> 8) & 255))
          : o.push(c((t >> 16) & 255, (t >> 8) & 255, 255 & t));
    return o.join("");
  },
  F =
    "function" == typeof atob
      ? function (r) {
          return atob(s(r));
        }
      : t
      ? function (r) {
          return Buffer.from(r, "base64").toString("binary");
        }
      : U,
  S = t
    ? function (r) {
        return a(Buffer.from(r, "base64"));
      }
    : function (r) {
        return a(
          F(r)
            .split("")
            .map(function (r) {
              return r.charCodeAt(0);
            })
        );
      },
  w = function (r) {
    return S(D(r));
  },
  E = t
    ? function (r) {
        return Buffer.from(r, "base64").toString("utf8");
      }
    : n
    ? function (r) {
        return n.decode(S(r));
      }
    : function (r) {
        return m(F(r));
      },
  D = function (r) {
    return s(
      r.replace(/[-_]/g, function (r) {
        return "-" == r ? "+" : "/";
      })
    );
  },
  R = function (r) {
    return E(D(r));
  },
  z = function (r) {
    return { value: r, enumerable: !1, writable: !0, configurable: !0 };
  },
  T = function () {
    var r = function (r, t) {
      return Object.defineProperty(String.prototype, r, z(t));
    };
    r("fromBase64", function () {
      return R(this);
    }),
      r("toBase64", function (r) {
        return x(this, r);
      }),
      r("toBase64URI", function () {
        return x(this, !0);
      }),
      r("toBase64URL", function () {
        return x(this, !0);
      }),
      r("toUint8Array", function () {
        return w(this);
      });
  },
  Z = function () {
    var r = function (r, t) {
      return Object.defineProperty(Uint8Array.prototype, r, z(t));
    };
    r("toBase64", function (r) {
      return p(this, r);
    }),
      r("toBase64URI", function () {
        return p(this, !0);
      }),
      r("toBase64URL", function () {
        return p(this, !0);
      });
  },
  j = {
    version: r,
    VERSION: "3.7.8",
    atob: F,
    atobPolyfill: U,
    btoa: h,
    btoaPolyfill: d,
    fromBase64: R,
    toBase64: x,
    encode: x,
    encodeURI: B,
    encodeURL: B,
    utob: g,
    btou: m,
    decode: R,
    isValid: function (r) {
      if ("string" != typeof r) return !1;
      var t = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    fromUint8Array: p,
    toUint8Array: w,
    extendString: T,
    extendUint8Array: Z,
    extendBuiltins: function () {
      T(), Z();
    },
  };
exports.gBase64 = j;
