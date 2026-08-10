Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.Hook = void 0),
  (exports.hookAsync = function (o) {
    return function (a, i, s) {
      var u = s.value;
      s.value = function () {
        for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
        return t(this, void 0, void 0, function () {
          var i,
            s,
            c,
            l,
            f,
            h,
            p = this;
          return r(this, function (y) {
            switch (y.label) {
              case 0:
                if (
                  !(null == (i = this.hook.getHookByName(o))
                    ? void 0
                    : i.before)
                )
                  return [3, 4];
                y.label = 1;
              case 1:
                return (
                  y.trys.push([1, 3, , 4]),
                  [
                    4,
                    Promise.all(
                      i.before.map(function (e) {
                        return t(p, void 0, void 0, function () {
                          return r(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, e.apply(this, a)];
                              case 1:
                                return t.sent(), [2];
                            }
                          });
                        });
                      })
                    ),
                  ]
                );
              case 2:
                return y.sent(), [3, 4];
              case 3:
                throw (
                  ((s = y.sent()),
                  this.internalMsg.emit(e.EventsExt.HOOK_ERROR, {
                    error: s,
                    phase: "before",
                    name: o,
                  }),
                  s)
                );
              case 4:
                return y.trys.push([4, 6, 7, 12]), [4, u.apply(this, a)];
              case 5:
                return [2, (c = y.sent())];
              case 6:
                throw ((f = y.sent()), (l = f), f);
              case 7:
                if (!(null == i ? void 0 : i.after)) return [3, 11];
                y.label = 8;
              case 8:
                return (
                  y.trys.push([8, 10, , 11]),
                  [
                    4,
                    Promise.all(
                      i.after.map(function (e) {
                        return t(p, void 0, void 0, function () {
                          return r(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [
                                  4,
                                  e.apply(this, n(n([], a, !0), [c, l], !1)),
                                ];
                              case 1:
                                return t.sent(), [2];
                            }
                          });
                        });
                      })
                    ),
                  ]
                );
              case 9:
                return y.sent(), [3, 11];
              case 10:
                throw (
                  ((h = y.sent()),
                  this.internalMsg.emit(e.EventsExt.HOOK_ERROR, {
                    error: h,
                    phase: "after",
                    name: o,
                  }),
                  h)
                );
              case 11:
                return [7];
              case 12:
                return [2];
            }
          });
        });
      };
    };
  });
var e = require("../../enums"),
  t = function (e, t, r, n) {
    return new (r || (r = Promise))(function (o, a) {
      function i(e) {
        try {
          u(n.next(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        try {
          u(n.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(i, s);
      }
      u((n = n.apply(e, t || [])).next());
    });
  },
  r = function (e, t) {
    var r,
      n,
      o,
      a,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(s) {
      return function (u) {
        return (function (s) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a && ((a = 0), s[0] && (i = 0)), i; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & s[0]
                      ? n.return
                      : s[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, s[1])).done)
              )
                return o;
              switch (((n = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                case 0:
                case 1:
                  o = s;
                  break;
                case 4:
                  return i.label++, { value: s[1], done: !1 };
                case 5:
                  i.label++, (n = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !((o = i.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== s[0] && 2 !== s[0]))
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                    i.label = s[1];
                    break;
                  }
                  if (6 === s[0] && i.label < o[1]) {
                    (i.label = o[1]), (o = s);
                    break;
                  }
                  if (o && i.label < o[2]) {
                    (i.label = o[2]), i.ops.push(s);
                    break;
                  }
                  o[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              s = t.call(e, i);
            } catch (e) {
              (s = [6, e]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & s[0]) throw s[1];
          return { value: s[0] ? s[1] : void 0, done: !0 };
        })([s, u]);
      };
    }
  },
  n = function (e, t, r) {
    if (r || 2 === arguments.length)
      for (var n, o = 0, a = t.length; o < a; o++)
        (!n && o in t) ||
          (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
    return e.concat(n || Array.prototype.slice.call(t));
  };
exports.Hook = (function () {
  function e() {
    this.hookMap = {};
  }
  return (
    (e.prototype.registerHook = function (e, t) {
      var r = t.before || [],
        o = t.after || [],
        a = this.hookMap[e] || { before: [], after: [] };
      (a.before = n(n([], a.before, !0), r, !0)),
        (a.after = n(n([], a.after, !0), o, !0)),
        (this.hookMap[e] = a);
    }),
    (e.prototype.getHookByName = function (e) {
      return this.hookMap[e];
    }),
    (e.prototype.destroy = function () {
      this.hookMap = {};
    }),
    e
  );
})();
