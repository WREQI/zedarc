var e = require("../../../../@babel/runtime/helpers/typeof");
function t(n) {
  return (t =
    "function" == typeof Symbol && "symbol" == e(Symbol.iterator)
      ? function (t) {
          return e(t);
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : e(t);
        })(n);
}
function n(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
    })(e) ||
    (function (e) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      )
        return Array.from(e);
    })(e) ||
    (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    })()
  );
}
function i(e, n) {
  if (e === n) return !0;
  if ("object" === t(e)) {
    for (var r in e) if (!i(e[r], n[r])) return !1;
    return !0;
  }
  return !1;
}
var r = (function () {
  function e(t, n, i) {
    !(function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    })(this, e),
      (this.el = t),
      (this.observer = null),
      (this.frozen = !1),
      this.createObserver(n, i);
  }
  return (
    (function (e, t, n) {
      t &&
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        })(e.prototype, t);
    })(e, [
      {
        key: "createObserver",
        value: function (e, t) {
          var i = this;
          if ((this.observer && this.destroyObserver(), !this.frozen)) {
            var r;
            if (
              ((this.options =
                "function" == typeof (r = e) ? { callback: r } : r),
              (this.callback = function (e, t) {
                i.options.callback(e, t),
                  e && i.options.once && ((i.frozen = !0), i.destroyObserver());
              }),
              this.callback && this.options.throttle)
            ) {
              var o = (this.options.throttleOptions || {}).leading;
              this.callback = (function (e, t) {
                var i,
                  r,
                  o,
                  s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  l = function (l) {
                    for (
                      var a = arguments.length,
                        c = new Array(a > 1 ? a - 1 : 0),
                        u = 1;
                      u < a;
                      u++
                    )
                      c[u - 1] = arguments[u];
                    if (((o = c), !i || l !== r)) {
                      var f = s.leading;
                      "function" == typeof f && (f = f(l, r)),
                        (i && l === r) ||
                          !f ||
                          e.apply(void 0, [l].concat(n(o))),
                        (r = l),
                        clearTimeout(i),
                        (i = setTimeout(function () {
                          e.apply(void 0, [l].concat(n(o))), (i = 0);
                        }, t));
                    }
                  };
                return (
                  (l._clear = function () {
                    clearTimeout(i), (i = null);
                  }),
                  l
                );
              })(this.callback, this.options.throttle, {
                leading: function (e) {
                  return (
                    "both" === o ||
                    ("visible" === o && e) ||
                    ("hidden" === o && !e)
                  );
                },
              });
            }
            (this.oldResult = void 0),
              (this.observer = new IntersectionObserver(function (e) {
                var t = e[0];
                if (e.length > 1) {
                  var n = e.find(function (e) {
                    return e.isIntersecting;
                  });
                  n && (t = n);
                }
                if (i.callback) {
                  var r =
                    t.isIntersecting && t.intersectionRatio >= i.threshold;
                  if (r === i.oldResult) return;
                  (i.oldResult = r), i.callback(r, t);
                }
              }, this.options.intersection)),
              t.context.$nextTick(function () {
                i.observer && i.observer.observe(i.el);
              });
          }
        },
      },
      {
        key: "destroyObserver",
        value: function () {
          this.observer && (this.observer.disconnect(), (this.observer = null)),
            this.callback &&
              this.callback._clear &&
              (this.callback._clear(), (this.callback = null));
        },
      },
      {
        key: "threshold",
        get: function () {
          return this.options.intersection &&
            "number" == typeof this.options.intersection.threshold
            ? this.options.intersection.threshold
            : 0;
        },
      },
    ]),
    e
  );
})();
function o(e, t, n) {
  var i = t.value;
  if (i)
    if ("undefined" == typeof IntersectionObserver);
    else {
      var o = new r(e, i, n);
      e._vue_visibilityState = o;
    }
}
function s(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var l = {
    bind: o,
    update: function (e, t, n) {
      var r = t.value;
      if (!i(r, t.oldValue)) {
        var l = e._vue_visibilityState;
        r ? (l ? l.createObserver(r, n) : o(e, { value: r }, n)) : s(e);
      }
    },
    unbind: s,
  },
  a = {
    version: "1.0.0",
    install: function (e) {
      e.directive("observe-visibility", l);
    },
  },
  c = null;
"undefined" != typeof window
  ? (c = window.Vue)
  : "undefined" != typeof global && (c = global.Vue),
  c && c.use(a),
  (exports.ObserveVisibility = l);
