Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.log = function (o, t) {
    void 0 === t && (t = "invoke");
    return function (n, e, c) {
      var a = c.value;
      return (
        (c.value = function () {
          for (var n = [], c = 0; c < arguments.length; c++)
            n[c] = arguments[c];
          var l = "[".concat(o, "][").concat(e, "()] [").concat(t, "]");
          return r(l, n), a.apply(this, n);
        }),
        c
      );
    };
  }),
  (exports.logFactory = function (o) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var e = "[".concat(o, "]");
      r(e, t);
    };
  }),
  (exports.openLog = function (o) {
    n = o;
  }),
  (exports.setLogManager = function (t) {
    o = t;
  });
var o,
  t = function (o, t, n) {
    if (n || 2 === arguments.length)
      for (var r, e = 0, c = t.length; e < c; e++)
        (!r && e in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, e)), (r[e] = t[e]));
    return o.concat(r || Array.prototype.slice.call(t));
  },
  n = !1;
function r(r, e) {
  if ((n && console.log.apply(console, t([r], e, !1)), o))
    try {
      o.log.apply(o, t([r], e, !1));
    } catch (t) {
      o.log(r, t);
    }
}
