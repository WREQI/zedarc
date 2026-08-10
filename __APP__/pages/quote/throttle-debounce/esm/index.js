function t(t, n, o, e) {
  var i,
    r = !1,
    u = 0;
  function c() {
    i && clearTimeout(i);
  }
  function a() {
    for (var a = arguments.length, f = new Array(a), v = 0; v < a; v++)
      f[v] = arguments[v];
    var l = this,
      s = Date.now() - u;
    function d() {
      (u = Date.now()), o.apply(l, f);
    }
    r ||
      (e && !i && d(),
      c(),
      void 0 === e && s > t
        ? d()
        : !0 !== n &&
          (i = setTimeout(
            e
              ? function () {
                  i = void 0;
                }
              : d,
            void 0 === e ? t - s : t
          )));
  }
  return (
    "boolean" != typeof n && ((e = o), (o = n), (n = void 0)),
    (a.cancel = function () {
      c(), (r = !0);
    }),
    a
  );
}
(exports.debounce = function (n, o, e) {
  return t(n, o, !1);
}),
  (exports.throttle = t);
