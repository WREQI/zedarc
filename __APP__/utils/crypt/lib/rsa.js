var i,
  t,
  r,
  e = 16,
  n = 65536,
  s = 65535;
function g(e) {
  var n;
  for (i = new Array(e), n = 0; n < i.length; n++) i[n] = 0;
  (t = new d()), ((r = new d()).digits[0] = 1);
}
function d(t) {
  (this.digits = "boolean" == typeof t && 1 == t ? null : i.slice(0)),
    (this.isNeg = !1);
}
function u(i) {
  var t = new d(!0);
  return (t.digits = i.digits.slice(0)), (t.isNeg = i.isNeg), t;
}
function o(i) {
  var t,
    r = "";
  for (t = i.length - 1; t > -1; --t) r += i.charAt(t);
  return r;
}
g(20);
var a = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function h(i, r) {
  var e = new d();
  e.digits[0] = r;
  for (var n = R(i, e), s = a[n[1].digits[0]]; 1 == L(n[0], t); )
    (n = R(n[0], e)), (s += a[n[1].digits[0]]);
  return (i.isNeg ? "-" : "") + o(s);
}
var f = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
function l(i) {
  var t,
    r = "";
  for (t = 0; t < 4; ++t) (r += f[15 & i]), (i >>>= 4);
  return o(r);
}
function c(i) {
  var t,
    r = "";
  for (t = y(i); t > -1; --t) r += l(i.digits[t]);
  return r;
}
function v(i) {
  var t,
    r,
    e = 0,
    n = Math.min(i.length, 4);
  for (t = 0; t < n; ++t)
    (e <<= 4),
      (e |=
        (r = i.charCodeAt(t)) >= 48 && r <= 57
          ? r - 48
          : r >= 65 && r <= 90
          ? 10 + r - 65
          : r >= 97 && r <= 122
          ? 10 + r - 97
          : 0);
  return e;
}
function N(i) {
  var t,
    r,
    e = new d();
  for (t = i.length, r = 0; t > 0; t -= 4, ++r)
    e.digits[r] = v(i.substr(Math.max(t - 4, 0), Math.min(t, 4)));
  return e;
}
function p(i, t) {
  var r,
    e,
    s,
    g = 0;
  if (i.isNeg != t.isNeg)
    (t.isNeg = !t.isNeg), (r = m(i, t)), (t.isNeg = !t.isNeg);
  else {
    for (r = new d(), s = 0; s < i.digits.length; ++s)
      (e = i.digits[s] + t.digits[s] + g),
        (r.digits[s] = 65535 & e),
        (g = Number(e >= n));
    r.isNeg = i.isNeg;
  }
  return r;
}
function m(i, t) {
  var r, e, s, g;
  if (i.isNeg != t.isNeg)
    (t.isNeg = !t.isNeg), (r = p(i, t)), (t.isNeg = !t.isNeg);
  else {
    for (r = new d(), g = 0, e = 0; e < i.digits.length; ++e)
      (s = i.digits[e] - t.digits[e] + g),
        (r.digits[e] = 65535 & s),
        r.digits[e] < 0 && (r.digits[e] += n),
        (g = 0 - Number(s < 0));
    if (-1 == g) {
      for (g = 0, e = 0; e < i.digits.length; ++e)
        (s = 0 - r.digits[e] + g),
          (r.digits[e] = 65535 & s),
          r.digits[e] < 0 && (r.digits[e] += n),
          (g = 0 - Number(s < 0));
      r.isNeg = !i.isNeg;
    } else r.isNeg = i.isNeg;
  }
  return r;
}
function y(i) {
  for (var t = i.digits.length - 1; t > 0 && 0 == i.digits[t]; ) --t;
  return t;
}
function w(i) {
  var t,
    r = y(i),
    n = i.digits[r],
    s = (r + 1) * e;
  for (t = s; t > s - e && !(32768 & n); --t) n <<= 1;
  return t;
}
function b(i, t) {
  var r,
    e,
    n,
    g,
    u,
    o = new d(),
    a = y(i),
    h = y(t);
  for (g = 0; g <= h; ++g) {
    for (r = 0, n = g, u = 0; u <= a; ++u, ++n)
      (e = o.digits[n] + i.digits[u] * t.digits[g] + r),
        (o.digits[n] = e & s),
        (r = e >>> 16);
    o.digits[g + a + 1] = r;
  }
  return (o.isNeg = i.isNeg != t.isNeg), o;
}
function M(i, t) {
  var r,
    e,
    n,
    g,
    u = new d();
  for (r = y(i), e = 0, g = 0; g <= r; ++g)
    (n = u.digits[g] + i.digits[g] * t + e),
      (u.digits[g] = n & s),
      (e = n >>> 16);
  return (u.digits[1 + r] = e), u;
}
function _(i, t, r, e, n) {
  var s,
    g,
    d = Math.min(t + n, i.length);
  for (s = t, g = e; s < d; ++s, ++g) r[g] = i[s];
}
var k = [
  0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472,
  65504, 65520, 65528, 65532, 65534, 65535,
];
function S(i, t) {
  var r = Math.floor(t / e),
    n = new d();
  _(i.digits, 0, n.digits, r, n.digits.length - r);
  var g,
    u,
    o = t % e,
    a = e - o;
  for (u = (g = n.digits.length - 1) - 1; g > 0; --g, --u)
    n.digits[g] = ((n.digits[g] << o) & s) | ((n.digits[u] & k[o]) >>> a);
  return (n.digits[0] = (n.digits[g] << o) & s), (n.isNeg = i.isNeg), n;
}
var x = [
  0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
  65535,
];
function C(i, t) {
  var r = Math.floor(t / e),
    n = new d();
  _(i.digits, r, n.digits, 0, i.digits.length - r);
  var s,
    g,
    u = t % e,
    o = e - u;
  for (g = 1 + (s = 0); s < n.digits.length - 1; ++s, ++g)
    n.digits[s] = (n.digits[s] >>> u) | ((n.digits[g] & x[u]) << o);
  return (n.digits[n.digits.length - 1] >>>= u), (n.isNeg = i.isNeg), n;
}
function A(i, t) {
  var r = new d();
  return _(i.digits, 0, r.digits, t, r.digits.length - t), r;
}
function T(i, t) {
  var r = new d();
  return _(i.digits, t, r.digits, 0, r.digits.length - t), r;
}
function z(i, t) {
  var r = new d();
  return _(i.digits, 0, r.digits, 0, t), r;
}
function L(i, t) {
  var r;
  if (i.isNeg != t.isNeg) return 1 - 2 * Number(i.isNeg);
  for (r = i.digits.length - 1; r >= 0; --r)
    if (i.digits[r] != t.digits[r])
      return i.isNeg
        ? 1 - 2 * Number(i.digits[r] > t.digits[r])
        : 1 - 2 * Number(i.digits[r] < t.digits[r]);
  return 0;
}
function R(i, t) {
  var g,
    o,
    a = w(i),
    h = w(t),
    f = t.isNeg;
  if (a < h)
    return (
      i.isNeg
        ? (((g = u(r)).isNeg = !t.isNeg),
          (i.isNeg = !1),
          (t.isNeg = !1),
          (o = m(t, i)),
          (i.isNeg = !0),
          (t.isNeg = f))
        : ((g = new d()), (o = u(i))),
      [g, o]
    );
  (g = new d()), (o = i);
  for (var l = Math.ceil(h / e) - 1, c = 0; t.digits[l] < 32768; )
    (t = S(t, 1)), ++c, ++h, (l = Math.ceil(h / e) - 1);
  (o = S(o, c)), (a += c);
  for (var v = Math.ceil(a / e) - 1, N = A(t, v - l); -1 != L(o, N); )
    ++g.digits[v - l], (o = m(o, N));
  for (var b = v; b > l; --b) {
    var _ = b >= o.digits.length ? 0 : o.digits[b],
      k = b - 1 >= o.digits.length ? 0 : o.digits[b - 1],
      x = b - 2 >= o.digits.length ? 0 : o.digits[b - 2],
      T = l >= t.digits.length ? 0 : t.digits[l],
      z = l - 1 >= t.digits.length ? 0 : t.digits[l - 1];
    g.digits[b - l - 1] = _ == T ? s : Math.floor((_ * n + k) / T);
    for (
      var R = g.digits[b - l - 1] * (T * n + z),
        V = 4294967296 * _ + (k * n + x);
      R > V;

    )
      --g.digits[b - l - 1],
        (R = g.digits[b - l - 1] * ((T * n) | z)),
        (V = _ * n * n + (k * n + x));
    (o = m(o, M((N = A(t, b - l - 1)), g.digits[b - l - 1]))).isNeg &&
      ((o = p(o, N)), --g.digits[b - l - 1]);
  }
  return (
    (o = C(o, c)),
    (g.isNeg = i.isNeg != f),
    i.isNeg && ((g = f ? p(g, r) : m(g, r)), (o = m((t = C(t, c)), o))),
    0 == o.digits[0] && 0 == y(o) && (o.isNeg = !1),
    [g, o]
  );
}
function V(i) {
  (this.modulus = u(i)), (this.k = y(this.modulus) + 1);
  var t = new d();
  (t.digits[2 * this.k] = 1),
    (this.mu = R(t, this.modulus)[0]),
    (this.bkplus1 = new d()),
    (this.bkplus1.digits[this.k + 1] = 1),
    (this.modulo = j),
    (this.multiplyMod = U),
    (this.powMod = q);
}
function j(i) {
  var t = T(i, this.k - 1),
    r = T(b(t, this.mu), this.k + 1),
    e = m(z(i, this.k + 1), z(b(r, this.modulus), this.k + 1));
  e.isNeg && (e = p(e, this.bkplus1));
  for (var n = L(e, this.modulus) >= 0; n; )
    n = L((e = m(e, this.modulus)), this.modulus) >= 0;
  return e;
}
function U(i, t) {
  var r = b(i, t);
  return this.modulo(r);
}
function q(i, t) {
  var r = new d();
  r.digits[0] = 1;
  for (
    var e = i, n = t;
    1 & n.digits[0] && (r = this.multiplyMod(r, e)),
      0 != (n = C(n, 1)).digits[0] || 0 != y(n);

  )
    e = this.multiplyMod(e, e);
  return r;
}
var D = {
    _genRandomValue: function () {
      return Math.ceil(255 * Math.random());
    },
    _transTimeSeed: function (i) {
      for (var t = i.length, r = "", e = 0; e < t; e += 2)
        r += String.fromCharCode(parseInt(i.substr(e, 2), 16));
      return r;
    },
    _encrypt2: function (i, t) {
      for (var r = [], e = t.length, n = 0, s = i.chunkSize; n < e; )
        (r[n] = t.charCodeAt(n)), n++;
      for (; r.length % s != 0; )
        (r[n] =
          n == e || n == s - 1 ? 0 : n == s - 2 ? 2 : D._genRandomValue()),
          n++;
      var g,
        u,
        o,
        a = r.length,
        f = "";
      for (n = 0; n < a; n += s) {
        for (o = new d(), g = 0, u = n; u < n + s; ++g)
          (o.digits[g] = r[u++]), (o.digits[g] += r[u++] << 8);
        var l = i.barrett.powMod(o, i.e);
        f += (16 == i.radix ? c(l) : h(l, i.radix)) + " ";
      }
      return f.substring(0, f.length - 1);
    },
    _encrypt1: function (i, t) {
      var r = [],
        e = t.length,
        n = 0,
        s = i.chunkSize;
      for (g = e - 1; g >= 0; g--) (r[n] = t.charCodeAt(g)), n++;
      for (; r.length % s != 0; )
        (r[n] =
          n == e || n == s - 1 ? 0 : n == s - 2 ? 2 : D._genRandomValue()),
          n++;
      var g,
        u,
        o,
        a = r.length,
        f = "";
      for (n = 0; n < a; n += s) {
        for (o = new d(), g = 0, u = n; u < n + s; ++g)
          (o.digits[g] = r[u++]), (o.digits[g] += r[u++] << 8);
        var l = i.barrett.powMod(o, i.e);
        f += (16 == i.radix ? c(l) : h(l, i.radix)) + " ";
      }
      return f.substring(0, f.length - 1);
    },
    _encryptLong: function (i, t) {
      try {
        for (
          var r = ((8 * i.chunkSize + 7) >> 3) - 11, e = 0, n = [];
          e <= t.length - 1;

        ) {
          var s = t.charCodeAt(e);
          s < 128
            ? n.push(t[e])
            : s > 127 && s < 2048
            ? n.push(null, t[e])
            : n.push(null, null, t[e]),
            e++;
        }
        if (n.length <= r) return D._encrypt1(i, t);
        for (var g = ""; n.length > 0; ) {
          for (var d = r; null === n[d - 1]; ) d -= 1;
          var u = n
            .slice(0, d)
            .filter(function (i) {
              return null !== i;
            })
            .join("");
          (g += D._encrypt1(i, u)), n.splice(0, d);
        }
        return g;
      } catch (i) {
        return "";
      }
    },
    encrypt: function (i, t, r) {
      return !0 === r
        ? D._encrypt1(i, t).toUpperCase()
        : D._encrypt2(i, t).toUpperCase();
    },
    encrypt1: function (i, t, r, e) {
      var n = D._transTimeSeed(r),
        s = n + t;
      return e && (s = n + e + t), D.encrypt(i, s, !0);
    },
    encrypt2: function (i, t, r, e) {
      var n = D._transTimeSeed(r),
        s = n + t;
      return !0 === e && (s = n + "00000000000000" + t), D.encrypt(i, s, !1);
    },
    encryptLong: function (i, t, r, e) {
      var n = D._transTimeSeed(r),
        s = n + t;
      return e && (s = n + e + t), D._encryptLong(i, s);
    },
  },
  I = {
    setMaxDigits: g,
    RSAKeyPair: function (i, t, r) {
      (this.e = N(i)),
        (this.d = N(t)),
        (this.m = N(r)),
        (this.chunkSize = 2 * (y(this.m) + 1)),
        (this.radix = 16),
        (this.barrett = new V(this.m));
    },
    encrypt: D.encrypt,
    encrypt1: D.encrypt1,
    encrypt2: D.encrypt2,
    getTimeSeed: D._transTimeSeed,
    encryptLong: D.encryptLong,
  };
exports.rsa = I;
