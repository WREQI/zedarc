var t,
  e,
  r = { exports: {} };
(t = r),
  (e = r.exports),
  (function (r) {
    if (null != e && "number" != typeof e.nodeType) t.exports = r();
    else {
      var o = r(),
        n = "undefined" != typeof self ? self : $.global;
      "function" != typeof n.btoa && (n.btoa = o.btoa),
        "function" != typeof n.atob && (n.atob = o.atob);
    }
  })(function () {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function e(t) {
      this.message = t;
    }
    return (
      (e.prototype = new Error()),
      (e.prototype.name = "InvalidCharacterError"),
      {
        btoa: function (r) {
          for (var o, n, a, c, i = String(r), s = 0, f = ""; s < i.length; ) {
            if (
              ((o = i.charCodeAt(s++)),
              (n = i.charCodeAt(s++)),
              (a = i.charCodeAt(s++)),
              o > 255 || n > 255 || a > 255)
            )
              throw new e(
                "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
              );
            f +=
              t.charAt(((c = (o << 16) | (n << 8) | a) >> 18) & 63) +
              t.charAt((c >> 12) & 63) +
              t.charAt((c >> 6) & 63) +
              t.charAt(63 & c);
          }
          switch (i.length % 3) {
            case 0:
              return f;
            case 1:
              return f.slice(0, -2) + "==";
            case 2:
              return f.slice(0, -1) + "=";
          }
        },
        atob: function (r) {
          var o = String(r).replace(/[=]+$/, "");
          if (o.length % 4 == 1)
            throw new e(
              "'atob' failed: The string to be decoded is not correctly encoded."
            );
          for (
            var n, a, c = 0, i = 0, s = "";
            (a = o.charAt(i++));
            ~a && ((n = c % 4 ? 64 * n + a : a), c++ % 4)
              ? (s += String.fromCharCode(255 & (n >> ((-2 * c) & 6))))
              : 0
          )
            a = t.indexOf(a);
          return s;
        },
      }
    );
  });
var o = r.exports;
exports.base64Exports = o;
