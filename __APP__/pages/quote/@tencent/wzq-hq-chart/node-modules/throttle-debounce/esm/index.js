exports.debounce = function (n, o, e) {
  var i = {}.atBegin;
  return (function (n, o, e) {
    var i,
      t = e || {},
      u = t.noTrailing,
      r = void 0 !== u && u,
      a = t.noLeading,
      c = void 0 !== a && a,
      d = t.debounceMode,
      v = void 0 === d ? void 0 : d,
      f = !1,
      l = 0;
    function s() {
      i && clearTimeout(i);
    }
    function g() {
      for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
        t[u] = arguments[u];
      var a = this,
        d = Date.now() - l;
      function g() {
        (l = Date.now()), o.apply(a, t);
      }
      function m() {
        i = void 0;
      }
      f ||
        (c || !v || i || g(),
        s(),
        void 0 === v && d > n
          ? c
            ? ((l = Date.now()), r || (i = setTimeout(v ? m : g, n)))
            : g()
          : !0 !== r && (i = setTimeout(v ? m : g, void 0 === v ? n - d : n)));
    }
    return (
      (g.cancel = function (n) {
        var o = (n || {}).upcomingOnly,
          e = void 0 !== o && o;
        s(), (f = !e);
      }),
      g
    );
  })(n, o, { debounceMode: !1 !== (void 0 !== i && i) });
};
