exports.throttle = function (o, n, i) {
  var t,
    e = i || {},
    r = e.noTrailing,
    a = void 0 !== r && r,
    u = e.noLeading,
    c = void 0 !== u && u,
    v = e.debounceMode,
    d = void 0 === v ? void 0 : v,
    f = !1,
    l = 0;
  function s() {
    t && clearTimeout(t);
  }
  function g() {
    for (var i = arguments.length, e = new Array(i), r = 0; r < i; r++)
      e[r] = arguments[r];
    var u = this,
      v = Date.now() - l;
    function g() {
      (l = Date.now()), n.apply(u, e);
    }
    function m() {
      t = void 0;
    }
    f ||
      (c || !d || t || g(),
      s(),
      void 0 === d && v > o
        ? c
          ? ((l = Date.now()), a || (t = setTimeout(d ? m : g, o)))
          : g()
        : !0 !== a && (t = setTimeout(d ? m : g, void 0 === d ? o - v : o)));
  }
  return (
    (g.cancel = function (o) {
      var n = (o || {}).upcomingOnly,
        i = void 0 !== n && n;
      s(), (f = !i);
    }),
    g
  );
};
