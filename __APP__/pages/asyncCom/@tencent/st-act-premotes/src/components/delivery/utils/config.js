(exports.QIANJI_HAS_CLICKED_QIANJI_STORAGE_KEY =
  "stock/delivery-has-clicked-delivery-info"),
  (exports.debounce = function (o, n, e) {
    var i = {}.atBegin;
    return (function (o, n, e) {
      var i,
        t = e || {},
        r = t.noTrailing,
        c = void 0 !== r && r,
        d = t.noLeading,
        u = void 0 !== d && d,
        a = t.debounceMode,
        v = void 0 === a ? void 0 : a,
        f = !1,
        l = 0;
      function s() {
        i && clearTimeout(i);
      }
      function g() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var d = this,
          a = Date.now() - l;
        function g() {
          (l = Date.now()), n.apply(d, t);
        }
        function p() {
          i = void 0;
        }
        f ||
          (u || !v || i || g(),
          s(),
          void 0 === v && a > o
            ? u
              ? ((l = Date.now()), c || (i = setTimeout(v ? p : g, o)))
              : g()
            : !0 !== c &&
              (i = setTimeout(v ? p : g, void 0 === v ? o - a : o)));
      }
      return (
        (g.cancel = function (o) {
          var n = (o || {}).upcomingOnly,
            e = void 0 !== n && n;
          s(), (f = !e);
        }),
        g
      );
    })(o, n, { debounceMode: !1 !== (void 0 !== i && i) });
  });
