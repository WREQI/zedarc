require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t,
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (t, e, r) {
    return new Promise(function (n, o) {
      var i = function (t) {
          try {
            u(r.next(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          try {
            u(r.throw(t));
          } catch (t) {
            o(t);
          }
        },
        u = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(i, a);
        };
      u((r = r.apply(t, e)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  o = require("../utils/StockBridgeWrapper.js"),
  i = {},
  a = {},
  u = [
    0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
    733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
    2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
  ];
(a.getSymbolSize = function (t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return 4 * t + 17;
}),
  (a.getSymbolTotalCodewords = function (t) {
    return u[t];
  }),
  (a.getBCHDigit = function (t) {
    for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
    return e;
  }),
  (a.setToSJISFunction = function (e) {
    if ("function" != typeof e)
      throw new Error('"toSJISFunc" is not a valid function.');
    t = e;
  }),
  (a.isKanjiModeEnabled = function () {
    return void 0 !== t;
  }),
  (a.toSJIS = function (e) {
    return t(e);
  });
var s,
  c = {};
function f() {
  (this.buffer = []), (this.length = 0);
}
((s = c).L = { bit: 1 }),
  (s.M = { bit: 0 }),
  (s.Q = { bit: 3 }),
  (s.H = { bit: 2 }),
  (s.isValid = function (t) {
    return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
  }),
  (s.from = function (t, e) {
    if (s.isValid(t)) return t;
    try {
      return (function (t) {
        if ("string" != typeof t) throw new Error("Param is not a string");
        switch (t.toLowerCase()) {
          case "l":
          case "low":
            return s.L;
          case "m":
          case "medium":
            return s.M;
          case "q":
          case "quartile":
            return s.Q;
          case "h":
          case "high":
            return s.H;
          default:
            throw new Error("Unknown EC Level: " + t);
        }
      })(t);
    } catch (t) {
      return e;
    }
  }),
  (f.prototype = {
    get: function (t) {
      var e = Math.floor(t / 8);
      return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
    },
    put: function (t, e) {
      for (var r = 0; r < e; r++) this.putBit(1 == ((t >>> (e - r - 1)) & 1));
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (t) {
      var e = Math.floor(this.length / 8);
      this.buffer.length <= e && this.buffer.push(0),
        t && (this.buffer[e] |= 128 >>> this.length % 8),
        this.length++;
    },
  });
var l = f;
function h(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  (this.size = t),
    (this.data = new Uint8Array(t * t)),
    (this.reservedBit = new Uint8Array(t * t));
}
(h.prototype.set = function (t, e, r, n) {
  var o = t * this.size + e;
  (this.data[o] = r), n && (this.reservedBit[o] = !0);
}),
  (h.prototype.get = function (t, e) {
    return this.data[t * this.size + e];
  }),
  (h.prototype.xor = function (t, e, r) {
    this.data[t * this.size + e] ^= r;
  }),
  (h.prototype.isReserved = function (t, e) {
    return this.reservedBit[t * this.size + e];
  });
var d = h,
  g = {};
!(function (t) {
  var e = a.getSymbolSize;
  (t.getRowColCoords = function (t) {
    if (1 === t) return [];
    for (
      var r = Math.floor(t / 7) + 2,
        n = e(t),
        o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * r - 2)),
        i = [n - 7],
        a = 1;
      a < r - 1;
      a++
    )
      i[a] = i[a - 1] - o;
    return i.push(6), i.reverse();
  }),
    (t.getPositions = function (e) {
      for (
        var r = [], n = t.getRowColCoords(e), o = n.length, i = 0;
        i < o;
        i++
      )
        for (var a = 0; a < o; a++)
          (0 === i && 0 === a) ||
            (0 === i && a === o - 1) ||
            (i === o - 1 && 0 === a) ||
            r.push([n[i], n[a]]);
      return r;
    });
})(g);
var v = {},
  p = a.getSymbolSize;
v.getPositions = function (t) {
  var e = p(t);
  return [
    [0, 0],
    [e - 7, 0],
    [0, e - 7],
  ];
};
var m = {};
!(function (t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  function e(e, r, n) {
    switch (e) {
      case t.Patterns.PATTERN000:
        return (r + n) % 2 == 0;
      case t.Patterns.PATTERN001:
        return r % 2 == 0;
      case t.Patterns.PATTERN010:
        return n % 3 == 0;
      case t.Patterns.PATTERN011:
        return (r + n) % 3 == 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
      case t.Patterns.PATTERN101:
        return ((r * n) % 2) + ((r * n) % 3) == 0;
      case t.Patterns.PATTERN110:
        return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
      case t.Patterns.PATTERN111:
        return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + e);
    }
  }
  (t.isValid = function (t) {
    return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
  }),
    (t.from = function (e) {
      return t.isValid(e) ? parseInt(e, 10) : void 0;
    }),
    (t.getPenaltyN1 = function (t) {
      for (
        var e = t.size, r = 0, n = 0, o = 0, i = null, a = null, u = 0;
        u < e;
        u++
      ) {
        (n = o = 0), (i = a = null);
        for (var s = 0; s < e; s++) {
          var c = t.get(u, s);
          c === i ? n++ : (n >= 5 && (r += n - 5 + 3), (i = c), (n = 1)),
            (c = t.get(s, u)) === a
              ? o++
              : (o >= 5 && (r += o - 5 + 3), (a = c), (o = 1));
        }
        n >= 5 && (r += n - 5 + 3), o >= 5 && (r += o - 5 + 3);
      }
      return r;
    }),
    (t.getPenaltyN2 = function (t) {
      for (var e = t.size, r = 0, n = 0; n < e - 1; n++)
        for (var o = 0; o < e - 1; o++) {
          var i =
            t.get(n, o) +
            t.get(n, o + 1) +
            t.get(n + 1, o) +
            t.get(n + 1, o + 1);
          (4 !== i && 0 !== i) || r++;
        }
      return 3 * r;
    }),
    (t.getPenaltyN3 = function (t) {
      for (var e = t.size, r = 0, n = 0, o = 0, i = 0; i < e; i++) {
        n = o = 0;
        for (var a = 0; a < e; a++)
          (n = ((n << 1) & 2047) | t.get(i, a)),
            a >= 10 && (1488 === n || 93 === n) && r++,
            (o = ((o << 1) & 2047) | t.get(a, i)),
            a >= 10 && (1488 === o || 93 === o) && r++;
      }
      return 40 * r;
    }),
    (t.getPenaltyN4 = function (t) {
      for (var e = 0, r = t.data.length, n = 0; n < r; n++) e += t.data[n];
      return 10 * Math.abs(Math.ceil((100 * e) / r / 5) - 10);
    }),
    (t.applyMask = function (t, r) {
      for (var n = r.size, o = 0; o < n; o++)
        for (var i = 0; i < n; i++)
          r.isReserved(i, o) || r.xor(i, o, e(t, i, o));
    }),
    (t.getBestMask = function (e, r) {
      for (
        var n = Object.keys(t.Patterns).length, o = 0, i = 1 / 0, a = 0;
        a < n;
        a++
      ) {
        r(a), t.applyMask(a, e);
        var u =
          t.getPenaltyN1(e) +
          t.getPenaltyN2(e) +
          t.getPenaltyN3(e) +
          t.getPenaltyN4(e);
        t.applyMask(a, e), u < i && ((i = u), (o = a));
      }
      return o;
    });
})(m);
var w = {},
  E = c,
  y = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  C = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
  ];
(w.getBlocksCount = function (t, e) {
  switch (e) {
    case E.L:
      return y[4 * (t - 1) + 0];
    case E.M:
      return y[4 * (t - 1) + 1];
    case E.Q:
      return y[4 * (t - 1) + 2];
    case E.H:
      return y[4 * (t - 1) + 3];
    default:
      return;
  }
}),
  (w.getTotalCodewordsCount = function (t, e) {
    switch (e) {
      case E.L:
        return C[4 * (t - 1) + 0];
      case E.M:
        return C[4 * (t - 1) + 1];
      case E.Q:
        return C[4 * (t - 1) + 2];
      case E.H:
        return C[4 * (t - 1) + 3];
      default:
        return;
    }
  });
var A = {},
  B = {},
  b = new Uint8Array(512),
  I = new Uint8Array(256);
!(function () {
  for (var t = 1, e = 0; e < 255; e++)
    (b[e] = t), (I[t] = e), 256 & (t <<= 1) && (t ^= 285);
  for (var r = 255; r < 512; r++) b[r] = b[r - 255];
})(),
  (B.log = function (t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return I[t];
  }),
  (B.exp = function (t) {
    return b[t];
  }),
  (B.mul = function (t, e) {
    return 0 === t || 0 === e ? 0 : b[I[t] + I[e]];
  }),
  (function (t) {
    var e = B;
    (t.mul = function (t, r) {
      for (
        var n = new Uint8Array(t.length + r.length - 1), o = 0;
        o < t.length;
        o++
      )
        for (var i = 0; i < r.length; i++) n[o + i] ^= e.mul(t[o], r[i]);
      return n;
    }),
      (t.mod = function (t, r) {
        for (var n = new Uint8Array(t); n.length - r.length >= 0; ) {
          for (var o = n[0], i = 0; i < r.length; i++) n[i] ^= e.mul(r[i], o);
          for (var a = 0; a < n.length && 0 === n[a]; ) a++;
          n = n.slice(a);
        }
        return n;
      }),
      (t.generateECPolynomial = function (r) {
        for (var n = new Uint8Array([1]), o = 0; o < r; o++)
          n = t.mul(n, new Uint8Array([1, e.exp(o)]));
        return n;
      });
  })(A);
var T = A;
function M(t) {
  (this.genPoly = void 0),
    (this.degree = t),
    this.degree && this.initialize(this.degree);
}
(M.prototype.initialize = function (t) {
  (this.degree = t), (this.genPoly = T.generateECPolynomial(this.degree));
}),
  (M.prototype.encode = function (t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    var e = new Uint8Array(t.length + this.degree);
    e.set(t);
    var r = T.mod(e, this.genPoly),
      n = this.degree - r.length;
    if (n > 0) {
      var o = new Uint8Array(this.degree);
      return o.set(r, n), o;
    }
    return r;
  });
var P = M,
  N = {},
  x = {},
  R = {
    isValid: function (t) {
      return !isNaN(t) && t >= 1 && t <= 40;
    },
  },
  L = {},
  U = "[0-9]+",
  S =
    "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
  k =
    "(?:(?![A-Z0-9 $%*+\\-./:]|" +
    (S = S.replace(/u/g, "\\u")) +
    ")(?:.|[\r\n]))+";
(L.KANJI = new RegExp(S, "g")),
  (L.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
  (L.BYTE = new RegExp(k, "g")),
  (L.NUMERIC = new RegExp(U, "g")),
  (L.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
var _ = new RegExp("^" + S + "$"),
  z = new RegExp("^" + U + "$"),
  q = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
(L.testKanji = function (t) {
  return _.test(t);
}),
  (L.testNumeric = function (t) {
    return z.test(t);
  }),
  (L.testAlphanumeric = function (t) {
    return q.test(t);
  }),
  (function (t) {
    var e = R,
      r = L;
    (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
      (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
      (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
      (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
      (t.MIXED = { bit: -1 }),
      (t.getCharCountIndicator = function (t, r) {
        if (!t.ccBits) throw new Error("Invalid mode: " + t);
        if (!e.isValid(r)) throw new Error("Invalid version: " + r);
        return r >= 1 && r < 10
          ? t.ccBits[0]
          : r < 27
          ? t.ccBits[1]
          : t.ccBits[2];
      }),
      (t.getBestModeForData = function (e) {
        return r.testNumeric(e)
          ? t.NUMERIC
          : r.testAlphanumeric(e)
          ? t.ALPHANUMERIC
          : r.testKanji(e)
          ? t.KANJI
          : t.BYTE;
      }),
      (t.toString = function (t) {
        if (t && t.id) return t.id;
        throw new Error("Invalid mode");
      }),
      (t.isValid = function (t) {
        return t && t.bit && t.ccBits;
      }),
      (t.from = function (e, r) {
        if (t.isValid(e)) return e;
        try {
          return (function (e) {
            if ("string" != typeof e) throw new Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "numeric":
                return t.NUMERIC;
              case "alphanumeric":
                return t.ALPHANUMERIC;
              case "kanji":
                return t.KANJI;
              case "byte":
                return t.BYTE;
              default:
                throw new Error("Unknown mode: " + e);
            }
          })(e);
        } catch (t) {
          return r;
        }
      });
  })(x),
  (function (t) {
    var e = a,
      r = w,
      n = c,
      o = x,
      i = R,
      u = e.getBCHDigit(7973);
    function s(t, e) {
      return o.getCharCountIndicator(t, e) + 4;
    }
    function f(t, e) {
      var r = 0;
      return (
        t.forEach(function (t) {
          var n = s(t.mode, e);
          r += n + t.getBitsLength();
        }),
        r
      );
    }
    (t.from = function (t, e) {
      return i.isValid(t) ? parseInt(t, 10) : e;
    }),
      (t.getCapacity = function (t, n, a) {
        if (!i.isValid(t)) throw new Error("Invalid QR Code version");
        void 0 === a && (a = o.BYTE);
        var u =
          8 * (e.getSymbolTotalCodewords(t) - r.getTotalCodewordsCount(t, n));
        if (a === o.MIXED) return u;
        var c = u - s(a, t);
        switch (a) {
          case o.NUMERIC:
            return Math.floor((c / 10) * 3);
          case o.ALPHANUMERIC:
            return Math.floor((c / 11) * 2);
          case o.KANJI:
            return Math.floor(c / 13);
          case o.BYTE:
          default:
            return Math.floor(c / 8);
        }
      }),
      (t.getBestVersionForData = function (e, r) {
        var i,
          a = n.from(r, n.M);
        if (Array.isArray(e)) {
          if (e.length > 1)
            return (function (e, r) {
              for (var n = 1; n <= 40; n++)
                if (f(e, n) <= t.getCapacity(n, r, o.MIXED)) return n;
            })(e, a);
          if (0 === e.length) return 1;
          i = e[0];
        } else i = e;
        return (function (e, r, n) {
          for (var o = 1; o <= 40; o++)
            if (r <= t.getCapacity(o, n, e)) return o;
        })(i.mode, i.getLength(), a);
      }),
      (t.getEncodedBits = function (t) {
        if (!i.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
        for (var r = t << 12; e.getBCHDigit(r) - u >= 0; )
          r ^= 7973 << (e.getBCHDigit(r) - u);
        return (t << 12) | r;
      });
  })(N);
var F = {},
  H = a,
  D = H.getBCHDigit(1335);
F.getEncodedBits = function (t, e) {
  for (var r = (t.bit << 3) | e, n = r << 10; H.getBCHDigit(n) - D >= 0; )
    n ^= 1335 << (H.getBCHDigit(n) - D);
  return 21522 ^ ((r << 10) | n);
};
var J = {},
  K = x;
function Y(t) {
  (this.mode = K.NUMERIC), (this.data = t.toString());
}
(Y.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
}),
  (Y.prototype.getLength = function () {
    return this.data.length;
  }),
  (Y.prototype.getBitsLength = function () {
    return Y.getBitsLength(this.data.length);
  }),
  (Y.prototype.write = function (t) {
    var e, r, n;
    for (e = 0; e + 3 <= this.data.length; e += 3)
      (r = this.data.substr(e, 3)), (n = parseInt(r, 10)), t.put(n, 10);
    var o = this.data.length - e;
    o > 0 &&
      ((r = this.data.substr(e)), (n = parseInt(r, 10)), t.put(n, 3 * o + 1));
  });
var Q = Y,
  j = x,
  V = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
function O(t) {
  (this.mode = j.ALPHANUMERIC), (this.data = t);
}
(O.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + (t % 2) * 6;
}),
  (O.prototype.getLength = function () {
    return this.data.length;
  }),
  (O.prototype.getBitsLength = function () {
    return O.getBitsLength(this.data.length);
  }),
  (O.prototype.write = function (t) {
    var e;
    for (e = 0; e + 2 <= this.data.length; e += 2) {
      var r = 45 * V.indexOf(this.data[e]);
      (r += V.indexOf(this.data[e + 1])), t.put(r, 11);
    }
    this.data.length % 2 && t.put(V.indexOf(this.data[e]), 6);
  });
var $ = O,
  W = x;
function Z(t) {
  (this.mode = W.BYTE),
    (this.data =
      "string" == typeof t ? new TextEncoder().encode(t) : new Uint8Array(t));
}
(Z.getBitsLength = function (t) {
  return 8 * t;
}),
  (Z.prototype.getLength = function () {
    return this.data.length;
  }),
  (Z.prototype.getBitsLength = function () {
    return Z.getBitsLength(this.data.length);
  }),
  (Z.prototype.write = function (t) {
    for (var e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8);
  });
var X = Z,
  G = x,
  tt = a;
function et(t) {
  (this.mode = G.KANJI), (this.data = t);
}
(et.getBitsLength = function (t) {
  return 13 * t;
}),
  (et.prototype.getLength = function () {
    return this.data.length;
  }),
  (et.prototype.getBitsLength = function () {
    return et.getBitsLength(this.data.length);
  }),
  (et.prototype.write = function (t) {
    var e;
    for (e = 0; e < this.data.length; e++) {
      var r = tt.toSJIS(this.data[e]);
      if (r >= 33088 && r <= 40956) r -= 33088;
      else {
        if (!(r >= 57408 && r <= 60351))
          throw new Error(
            "Invalid SJIS character: " +
              this.data[e] +
              "\nMake sure your charset is UTF-8"
          );
        r -= 49472;
      }
      (r = 192 * ((r >>> 8) & 255) + (255 & r)), t.put(r, 13);
    }
  });
var rt,
  nt = et,
  ot =
    ({ exports: {} }.exports =
    rt =
      {
        single_source_shortest_paths: function (t, e, r) {
          var n = {},
            o = {};
          o[e] = 0;
          var i,
            a,
            u,
            s,
            c,
            f,
            l,
            h = rt.PriorityQueue.make();
          for (h.push(e, 0); !h.empty(); )
            for (u in ((a = (i = h.pop()).value),
            (s = i.cost),
            (c = t[a] || {})))
              c.hasOwnProperty(u) &&
                ((f = s + c[u]),
                (l = o[u]),
                (void 0 === o[u] || l > f) &&
                  ((o[u] = f), h.push(u, f), (n[u] = a)));
          if (void 0 !== r && void 0 === o[r]) {
            var d = ["Could not find a path from ", e, " to ", r, "."].join("");
            throw new Error(d);
          }
          return n;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var r = [], n = e; n; ) r.push(n), t[n], (n = t[n]);
          return r.reverse(), r;
        },
        find_path: function (t, e, r) {
          var n = rt.single_source_shortest_paths(t, e, r);
          return rt.extract_shortest_path_from_predecessor_list(n, r);
        },
        PriorityQueue: {
          make: function (t) {
            var e,
              r = rt.PriorityQueue,
              n = {};
            for (e in ((t = t || {}), r)) r.hasOwnProperty(e) && (n[e] = r[e]);
            return (n.queue = []), (n.sorter = t.sorter || r.default_sorter), n;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            var r = { value: t, cost: e };
            this.queue.push(r), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      });
!(function (t) {
  var e = x,
    r = Q,
    n = $,
    o = X,
    i = nt,
    u = L,
    s = a,
    c = ot;
  function f(t) {
    return unescape(encodeURIComponent(t)).length;
  }
  function l(t, e, r) {
    for (var n, o = []; null !== (n = t.exec(r)); )
      o.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
    return o;
  }
  function h(t) {
    var r,
      n,
      o = l(u.NUMERIC, e.NUMERIC, t),
      i = l(u.ALPHANUMERIC, e.ALPHANUMERIC, t);
    return (
      s.isKanjiModeEnabled()
        ? ((r = l(u.BYTE, e.BYTE, t)), (n = l(u.KANJI, e.KANJI, t)))
        : ((r = l(u.BYTE_KANJI, e.BYTE, t)), (n = [])),
      o
        .concat(i, r, n)
        .sort(function (t, e) {
          return t.index - e.index;
        })
        .map(function (t) {
          return { data: t.data, mode: t.mode, length: t.length };
        })
    );
  }
  function d(t, a) {
    switch (a) {
      case e.NUMERIC:
        return r.getBitsLength(t);
      case e.ALPHANUMERIC:
        return n.getBitsLength(t);
      case e.KANJI:
        return i.getBitsLength(t);
      case e.BYTE:
        return o.getBitsLength(t);
    }
  }
  function g(t, a) {
    var u,
      c = e.getBestModeForData(t);
    if ((u = e.from(a, c)) !== e.BYTE && u.bit < c.bit)
      throw new Error(
        '"' +
          t +
          '" cannot be encoded with mode ' +
          e.toString(u) +
          ".\n Suggested mode is: " +
          e.toString(c)
      );
    switch ((u !== e.KANJI || s.isKanjiModeEnabled() || (u = e.BYTE), u)) {
      case e.NUMERIC:
        return new r(t);
      case e.ALPHANUMERIC:
        return new n(t);
      case e.KANJI:
        return new i(t);
      case e.BYTE:
        return new o(t);
    }
  }
  (t.fromArray = function (t) {
    return t.reduce(function (t, e) {
      return (
        "string" == typeof e
          ? t.push(g(e, null))
          : e.data && t.push(g(e.data, e.mode)),
        t
      );
    }, []);
  }),
    (t.fromString = function (r, n) {
      for (
        var o = (function (t, r) {
            for (
              var n = {}, o = { start: {} }, i = ["start"], a = 0;
              a < t.length;
              a++
            ) {
              for (var u = t[a], s = [], c = 0; c < u.length; c++) {
                var f = u[c],
                  l = "" + a + c;
                s.push(l), (n[l] = { node: f, lastCount: 0 }), (o[l] = {});
                for (var h = 0; h < i.length; h++) {
                  var g = i[h];
                  n[g] && n[g].node.mode === f.mode
                    ? ((o[g][l] =
                        d(n[g].lastCount + f.length, f.mode) -
                        d(n[g].lastCount, f.mode)),
                      (n[g].lastCount += f.length))
                    : (n[g] && (n[g].lastCount = f.length),
                      (o[g][l] =
                        d(f.length, f.mode) +
                        4 +
                        e.getCharCountIndicator(f.mode, r)));
                }
              }
              i = s;
            }
            for (var v = 0; v < i.length; v++) o[i[v]].end = 0;
            return { map: o, table: n };
          })(
            (function (t) {
              for (var r = [], n = 0; n < t.length; n++) {
                var o = t[n];
                switch (o.mode) {
                  case e.NUMERIC:
                    r.push([
                      o,
                      { data: o.data, mode: e.ALPHANUMERIC, length: o.length },
                      { data: o.data, mode: e.BYTE, length: o.length },
                    ]);
                    break;
                  case e.ALPHANUMERIC:
                    r.push([
                      o,
                      { data: o.data, mode: e.BYTE, length: o.length },
                    ]);
                    break;
                  case e.KANJI:
                    r.push([
                      o,
                      { data: o.data, mode: e.BYTE, length: f(o.data) },
                    ]);
                    break;
                  case e.BYTE:
                    r.push([{ data: o.data, mode: e.BYTE, length: f(o.data) }]);
                }
              }
              return r;
            })(h(r, s.isKanjiModeEnabled())),
            n
          ),
          i = c.find_path(o.map, "start", "end"),
          a = [],
          u = 1;
        u < i.length - 1;
        u++
      )
        a.push(o.table[i[u]].node);
      return t.fromArray(
        (function (t) {
          return t.reduce(function (t, e) {
            var r = t.length - 1 >= 0 ? t[t.length - 1] : null;
            return r && r.mode === e.mode
              ? ((t[t.length - 1].data += e.data), t)
              : (t.push(e), t);
          }, []);
        })(a)
      );
    }),
    (t.rawSplit = function (e) {
      return t.fromArray(h(e, s.isKanjiModeEnabled()));
    });
})(J);
var it = a,
  at = c,
  ut = l,
  st = d,
  ct = g,
  ft = v,
  lt = m,
  ht = w,
  dt = P,
  gt = N,
  vt = F,
  pt = x,
  mt = J;
function wt(t, e, r) {
  var n,
    o,
    i = t.size,
    a = vt.getEncodedBits(e, r);
  for (n = 0; n < 15; n++)
    (o = 1 == ((a >> n) & 1)),
      n < 6
        ? t.set(n, 8, o, !0)
        : n < 8
        ? t.set(n + 1, 8, o, !0)
        : t.set(i - 15 + n, 8, o, !0),
      n < 8
        ? t.set(8, i - n - 1, o, !0)
        : n < 9
        ? t.set(8, 15 - n - 1 + 1, o, !0)
        : t.set(8, 15 - n - 1, o, !0);
  t.set(i - 8, 8, 1, !0);
}
function Et(t, e, r, n) {
  var o;
  if (Array.isArray(t)) o = mt.fromArray(t);
  else {
    if ("string" != typeof t) throw new Error("Invalid data");
    var i = e;
    if (!i) {
      var a = mt.rawSplit(t);
      i = gt.getBestVersionForData(a, r);
    }
    o = mt.fromString(t, i || 40);
  }
  var u = gt.getBestVersionForData(o, r);
  if (!u)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (e) {
    if (e < u)
      throw new Error(
        "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
          u +
          ".\n"
      );
  } else e = u;
  var s = (function (t, e, r) {
      var n = new ut();
      r.forEach(function (e) {
        n.put(e.mode.bit, 4),
          n.put(e.getLength(), pt.getCharCountIndicator(e.mode, t)),
          e.write(n);
      });
      var o =
        8 * (it.getSymbolTotalCodewords(t) - ht.getTotalCodewordsCount(t, e));
      for (
        n.getLengthInBits() + 4 <= o && n.put(0, 4);
        n.getLengthInBits() % 8 != 0;

      )
        n.putBit(0);
      for (var i = (o - n.getLengthInBits()) / 8, a = 0; a < i; a++)
        n.put(a % 2 ? 17 : 236, 8);
      return (function (t, e, r) {
        for (
          var n = it.getSymbolTotalCodewords(e),
            o = n - ht.getTotalCodewordsCount(e, r),
            i = ht.getBlocksCount(e, r),
            a = i - (n % i),
            u = Math.floor(n / i),
            s = Math.floor(o / i),
            c = s + 1,
            f = u - s,
            l = new dt(f),
            h = 0,
            d = new Array(i),
            g = new Array(i),
            v = 0,
            p = new Uint8Array(t.buffer),
            m = 0;
          m < i;
          m++
        ) {
          var w = m < a ? s : c;
          (d[m] = p.slice(h, h + w)),
            (g[m] = l.encode(d[m])),
            (h += w),
            (v = Math.max(v, w));
        }
        var E,
          y,
          C = new Uint8Array(n),
          A = 0;
        for (E = 0; E < v; E++)
          for (y = 0; y < i; y++) E < d[y].length && (C[A++] = d[y][E]);
        for (E = 0; E < f; E++) for (y = 0; y < i; y++) C[A++] = g[y][E];
        return C;
      })(n, t, e);
    })(e, r, o),
    c = it.getSymbolSize(e),
    f = new st(c);
  return (
    (function (t, e) {
      for (var r = t.size, n = ft.getPositions(e), o = 0; o < n.length; o++)
        for (var i = n[o][0], a = n[o][1], u = -1; u <= 7; u++)
          if (!(i + u <= -1 || r <= i + u))
            for (var s = -1; s <= 7; s++)
              a + s <= -1 ||
                r <= a + s ||
                ((u >= 0 && u <= 6 && (0 === s || 6 === s)) ||
                (s >= 0 && s <= 6 && (0 === u || 6 === u)) ||
                (u >= 2 && u <= 4 && s >= 2 && s <= 4)
                  ? t.set(i + u, a + s, !0, !0)
                  : t.set(i + u, a + s, !1, !0));
    })(f, e),
    (function (t) {
      for (var e = t.size, r = 8; r < e - 8; r++) {
        var n = r % 2 == 0;
        t.set(r, 6, n, !0), t.set(6, r, n, !0);
      }
    })(f),
    (function (t, e) {
      for (var r = ct.getPositions(e), n = 0; n < r.length; n++)
        for (var o = r[n][0], i = r[n][1], a = -2; a <= 2; a++)
          for (var u = -2; u <= 2; u++)
            -2 === a || 2 === a || -2 === u || 2 === u || (0 === a && 0 === u)
              ? t.set(o + a, i + u, !0, !0)
              : t.set(o + a, i + u, !1, !0);
    })(f, e),
    wt(f, r, 0),
    e >= 7 &&
      (function (t, e) {
        for (
          var r, n, o, i = t.size, a = gt.getEncodedBits(e), u = 0;
          u < 18;
          u++
        )
          (r = Math.floor(u / 3)),
            (n = (u % 3) + i - 8 - 3),
            (o = 1 == ((a >> u) & 1)),
            t.set(r, n, o, !0),
            t.set(n, r, o, !0);
      })(f, e),
    (function (t, e) {
      for (
        var r = t.size, n = -1, o = r - 1, i = 7, a = 0, u = r - 1;
        u > 0;
        u -= 2
      )
        for (6 === u && u--; ; ) {
          for (var s = 0; s < 2; s++)
            if (!t.isReserved(o, u - s)) {
              var c = !1;
              a < e.length && (c = 1 == ((e[a] >>> i) & 1)),
                t.set(o, u - s, c),
                -1 === --i && (a++, (i = 7));
            }
          if ((o += n) < 0 || r <= o) {
            (o -= n), (n = -n);
            break;
          }
        }
    })(f, s),
    isNaN(n) && (n = lt.getBestMask(f, wt.bind(null, f, r))),
    lt.applyMask(n, f),
    wt(f, r, n),
    {
      modules: f,
      version: e,
      errorCorrectionLevel: r,
      maskPattern: n,
      segments: o,
    }
  );
}
i.create = function (t, e) {
  if (void 0 === t || "" === t) throw new Error("No input text");
  var r,
    n,
    o = at.M;
  return (
    void 0 !== e &&
      ((o = at.from(e.errorCorrectionLevel, at.M)),
      (r = gt.from(e.version)),
      (n = lt.from(e.maskPattern)),
      e.toSJISFunc && it.setToSJISFunction(e.toSJISFunc)),
    Et(t, r, o, n)
  );
};
var yt = {},
  Ct = {};
!(function (t) {
  function e(t) {
    if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
      throw new Error("Color should be defined as hex string");
    var e = t.slice().replace("#", "").split("");
    if (e.length < 3 || 5 === e.length || e.length > 8)
      throw new Error("Invalid hex color: " + t);
    (3 !== e.length && 4 !== e.length) ||
      (e = Array.prototype.concat.apply(
        [],
        e.map(function (t) {
          return [t, t];
        })
      )),
      6 === e.length && e.push("F", "F");
    var r = parseInt(e.join(""), 16);
    return {
      r: (r >> 24) & 255,
      g: (r >> 16) & 255,
      b: (r >> 8) & 255,
      a: 255 & r,
      hex: "#" + e.slice(0, 6).join(""),
    };
  }
  (t.getOptions = function (t) {
    t || (t = {}), t.color || (t.color = {});
    var r =
        void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
      n = t.width && t.width >= 21 ? t.width : void 0,
      o = t.scale || 4;
    return {
      width: n,
      scale: n ? 4 : o,
      margin: r,
      color: {
        dark: e(t.color.dark || "#000000ff"),
        light: e(t.color.light || "#ffffffff"),
      },
      type: t.type,
      rendererOpts: t.rendererOpts || {},
    };
  }),
    (t.getScale = function (t, e) {
      return e.width && e.width >= t + 2 * e.margin
        ? e.width / (t + 2 * e.margin)
        : e.scale;
    }),
    (t.getImageWidth = function (e, r) {
      var n = t.getScale(e, r);
      return Math.floor((e + 2 * r.margin) * n);
    }),
    (t.qrToImageData = function (e, r, n) {
      for (
        var o = r.modules.size,
          i = r.modules.data,
          a = t.getScale(o, n),
          u = Math.floor((o + 2 * n.margin) * a),
          s = n.margin * a,
          c = [n.color.light, n.color.dark],
          f = 0;
        f < u;
        f++
      )
        for (var l = 0; l < u; l++) {
          var h = 4 * (f * u + l),
            d = n.color.light;
          f >= s &&
            l >= s &&
            f < u - s &&
            l < u - s &&
            (d =
              c[
                i[Math.floor((f - s) / a) * o + Math.floor((l - s) / a)] ? 1 : 0
              ]),
            (e[h++] = d.r),
            (e[h++] = d.g),
            (e[h++] = d.b),
            (e[h] = d.a);
        }
    });
})(Ct),
  (function (t) {
    var e = Ct;
    (t.render = function (t, r, n) {
      var o = n,
        i = r;
      void 0 !== o || (r && r.getContext) || ((o = r), (r = void 0)),
        r ||
          (i = (function () {
            try {
              return document.createElement("canvas");
            } catch (t) {
              throw new Error("You need to specify a canvas element");
            }
          })()),
        (o = e.getOptions(o));
      var a = e.getImageWidth(t.modules.size, o),
        u = i.getContext("2d"),
        s = u.createImageData(a, a);
      return (
        e.qrToImageData(s.data, t, o),
        (function (t, e, r) {
          t.clearRect(0, 0, e.width, e.height),
            e.style || (e.style = {}),
            (e.height = r),
            (e.width = r),
            (e.style.height = r + "px"),
            (e.style.width = r + "px");
        })(u, i, a),
        u.putImageData(s, 0, 0),
        i
      );
    }),
      (t.renderToDataURL = function (e, r, n) {
        var o = n;
        void 0 !== o || (r && r.getContext) || ((o = r), (r = void 0)),
          o || (o = {});
        var i = t.render(e, r, o),
          a = o.type || "image/png",
          u = o.rendererOpts || {};
        return i.toDataURL(a, u.quality);
      });
  })(yt);
var At = {},
  Bt = Ct;
function bt(t, e) {
  var r = t.a / 255,
    n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function It(t, e, r) {
  var n = t + e;
  return void 0 !== r && (n += " " + r), n;
}
At.render = function (t, e, r) {
  var n = Bt.getOptions(e),
    o = t.modules.size,
    i = t.modules.data,
    a = o + 2 * n.margin,
    u = n.color.light.a
      ? "<path " +
        bt(n.color.light, "fill") +
        ' d="M0 0h' +
        a +
        "v" +
        a +
        'H0z"/>'
      : "",
    s =
      "<path " +
      bt(n.color.dark, "stroke") +
      ' d="' +
      (function (t, e, r) {
        for (var n = "", o = 0, i = !1, a = 0, u = 0; u < t.length; u++) {
          var s = Math.floor(u % e),
            c = Math.floor(u / e);
          s || i || (i = !0),
            t[u]
              ? (a++,
                (u > 0 && s > 0 && t[u - 1]) ||
                  ((n += i ? It("M", s + r, 0.5 + c + r) : It("m", o, 0)),
                  (o = 0),
                  (i = !1)),
                (s + 1 < e && t[u + 1]) || ((n += It("h", a)), (a = 0)))
              : o++;
        }
        return n;
      })(i, o, n.margin) +
      '"/>',
    c = 'viewBox="0 0 ' + a + " " + a + '"',
    f =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") +
      c +
      ' shape-rendering="crispEdges">' +
      u +
      s +
      "</svg>\n";
  return "function" == typeof r && r(null, f), f;
};
var Tt = function () {
    return (
      "function" == typeof Promise &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  Mt = i,
  Pt = yt,
  Nt = At;
function xt(t, e, r, n, o) {
  var i = [].slice.call(arguments, 1),
    a = i.length,
    u = "function" == typeof i[a - 1];
  if (!u && !Tt()) throw new Error("Callback required as last argument");
  if (!u) {
    if (a < 1) throw new Error("Too few arguments provided");
    return (
      1 === a
        ? ((r = e), (e = n = void 0))
        : 2 !== a || e.getContext || ((n = r), (r = e), (e = void 0)),
      new Promise(function (o, i) {
        try {
          var a = Mt.create(r, n);
          o(t(a, e, n));
        } catch (t) {
          i(t);
        }
      })
    );
  }
  if (a < 2) throw new Error("Too few arguments provided");
  2 === a
    ? ((o = r), (r = e), (e = n = void 0))
    : 3 === a &&
      (e.getContext && void 0 === o
        ? ((o = n), (n = void 0))
        : ((o = n), (n = r), (r = e), (e = void 0)));
  try {
    var s = Mt.create(r, n);
    o(null, t(s, e, n));
  } catch (t) {
    o(t);
  }
}
Mt.create, xt.bind(null, Pt.render), xt.bind(null, Pt.renderToDataURL);
var Rt = xt.bind(null, function (t, e, r) {
    return Nt.render(t, r);
  }),
  Lt = function (t) {
    return r(
      exports,
      null,
      e().mark(function r() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Rt(t, { type: "svg", width: 368, margin: 0 })
                );
              case 2:
                return (
                  (n = e.sent),
                  e.abrupt(
                    "return",
                    "data:image/svg+xml,".concat(encodeURIComponent(n))
                  )
                );
              case 4:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  },
  Ut = n.defineComponent({
    name: "WxClawBindDialog",
    props: { visible: { type: Boolean, default: !1 } },
    emits: ["close", "bindSuccess"],
    setup: function (t, i) {
      var a = this,
        u = i.emit,
        s = n.ref(""),
        c = n.ref(!1),
        f = n.ref(!1),
        l = n.ref(!1),
        h = n.ref(null),
        d = n.ref(null),
        g = "",
        v = n.computed(function () {
          return ["stock", "wzqlight"].includes("mpweapp");
        }),
        p = function () {
          h.value && (clearTimeout(h.value), (h.value = null)),
            d.value && (clearInterval(d.value), (d.value = null));
        },
        m = function () {
          p(),
            (s.value = ""),
            (c.value = !1),
            (f.value = !1),
            (l.value = !1),
            (g = "");
        },
        w = function () {
          h.value && clearTimeout(h.value),
            (h.value = setTimeout(function () {
              (c.value = !0),
                d.value && (clearInterval(d.value), (d.value = null));
            }, 3e5));
        },
        E = function () {
          return r(
            a,
            null,
            e().mark(function t() {
              var n, i;
              return e().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (f.value = !0),
                          (l.value = !1),
                          (c.value = !1),
                          p(),
                          (t.prev = 1),
                          (t.next = 4),
                          o.StockBridge.request(
                            "https://wzq.tenpay.com/svr/openclaw/user/get_wxbot_qrcode",
                            "GET"
                          )
                        );
                      case 4:
                        if (
                          ((n = t.sent),
                          (i = null == n ? void 0 : n.qrcode_img_content))
                        ) {
                          t.next = 8;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          ((f.value = !1), void (l.value = !0))
                        );
                      case 8:
                        return (g = i), (t.next = 11), Lt(i);
                      case 11:
                        (s.value = t.sent),
                          (f.value = !1),
                          w(),
                          d.value && clearInterval(d.value),
                          (d.value = setInterval(function () {
                            return r(
                              a,
                              null,
                              e().mark(function t() {
                                var r, n;
                                return e().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.prev = 0),
                                            (t.next = 3),
                                            o.StockBridge.request(
                                              "https://wzq.tenpay.com/svr/openclaw/user/get_wxbot_qrcode",
                                              "GET"
                                            )
                                          );
                                        case 3:
                                          if (
                                            1 !==
                                            (null == (r = t.sent)
                                              ? void 0
                                              : r.status)
                                          ) {
                                            t.next = 8;
                                            break;
                                          }
                                          p(), u("bindSuccess"), (t.next = 17);
                                          break;
                                        case 8:
                                          if (
                                            ((n =
                                              null == r
                                                ? void 0
                                                : r.qrcode_img_content),
                                            (t.t0 = n && n !== g),
                                            !t.t0)
                                          ) {
                                            t.next = 17;
                                            break;
                                          }
                                          return (
                                            (g = n),
                                            (c.value = !1),
                                            (t.next = 15),
                                            Lt(n)
                                          );
                                        case 15:
                                          (s.value = t.sent), w();
                                        case 17:
                                          t.next = 21;
                                          break;
                                        case 19:
                                          (t.prev = 19), (t.t1 = t.catch(0));
                                        case 21:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 19]]
                                );
                              })
                            );
                          }, 5e3)),
                          (t.next = 20);
                        break;
                      case 17:
                        (t.prev = 17),
                          (t.t0 = t.catch(1)),
                          (f.value = !1),
                          (l.value = !0);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 17]]
              );
            })
          );
        };
      return (
        n.watch(
          function () {
            return t.visible;
          },
          function (t) {
            t ? (m(), E()) : m();
          }
        ),
        n.onBeforeUnmount(function () {
          p();
        }),
        {
          qrcodeUrl: s,
          isExpired: c,
          isLoading: f,
          isLoadError: l,
          isH5: v,
          fetchQrcode: E,
          emitClose: function () {
            u("close");
          },
        }
      );
    },
  }),
  St = n._export_sfc(Ut, [
    [
      "render",
      function (t, e, r, o, i, a) {
        return n.e(
          { a: t.visible },
          t.visible
            ? n.e(
                {
                  b: n.o(function () {
                    return t.emitClose && t.emitClose.apply(t, arguments);
                  }, 4865),
                  c: n.t(
                    t.isH5
                      ? "长按扫描下方二维码开始绑定"
                      : "截图后用微信扫描下方二维码开始绑定"
                  ),
                  d: t.isLoading,
                },
                t.isLoading
                  ? {}
                  : t.isLoadError
                  ? {
                      f: n.o(function () {
                        return (
                          t.fetchQrcode && t.fetchQrcode.apply(t, arguments)
                        );
                      }, 4866),
                    }
                  : n.e(
                      { g: t.qrcodeUrl, h: t.isExpired },
                      t.isExpired
                        ? {
                            i: n.o(function () {
                              return (
                                t.fetchQrcode &&
                                t.fetchQrcode.apply(t, arguments)
                              );
                            }, 4867),
                          }
                        : {}
                    ),
                {
                  e: t.isLoadError,
                  j: n.o(function () {}, 4868),
                  k: n.o(function () {
                    return t.emitClose && t.emitClose.apply(t, arguments);
                  }, 4869),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-8985aafd"],
  ]);
wx.createComponent(St);
