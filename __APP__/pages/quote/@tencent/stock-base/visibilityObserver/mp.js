var t = require("../../../../../@babel/runtime/helpers/inherits"),
  e = require("../../../../../@babel/runtime/helpers/createSuper"),
  i = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../common/vendor.js"),
  o = (function () {
    function t(e, i, s) {
      var n;
      r(this, t),
        (this.targetSelector = ""),
        (this.observer = null),
        (this.frozen = !1),
        (this.options = null),
        (this.callback = null),
        (this.ctx = null),
        (this.targetSelector = e),
        s && (this.ctx = s.context || s),
        (this.options = "function" == typeof (n = i) ? { callback: n } : n);
    }
    return (
      s(t, [
        {
          key: "threshold",
          get: function () {
            return this.options.intersection &&
              "number" == typeof this.options.intersection.threshold
              ? this.options.intersection.threshold
              : 0;
          },
        },
        {
          key: "initObserver",
          value: function () {
            var t = this;
            if ((this.observer && this.destroyObserver(), !this.frozen)) {
              if (
                ((this.callback = function (e, i) {
                  t.options.callback(e, i),
                    e &&
                      t.options.once &&
                      ((t.frozen = !0), t.destroyObserver());
                }),
                this.callback && this.options.throttle)
              ) {
                var e = (this.options.throttleOptions || {}).leading;
                this.callback = (function (t, e, r) {
                  var s,
                    n,
                    o,
                    l = function (l) {
                      for (
                        var a = arguments.length,
                          c = new Array(a > 1 ? a - 1 : 0),
                          h = 1;
                        h < a;
                        h++
                      )
                        c[h - 1] = arguments[h];
                      if (((o = c), !s || l !== n)) {
                        var u = r || {},
                          b = u.leading;
                        "function" == typeof b && (b = b(l, n)),
                          (s && l === n) ||
                            !b ||
                            t.apply(void 0, [l].concat(i(o))),
                          (n = l),
                          clearTimeout(s),
                          (s = setTimeout(function () {
                            t.apply(void 0, [l].concat(i(o))), (s = null);
                          }, e));
                      }
                    };
                  return (
                    (l._clear = function () {
                      clearTimeout(s), (s = null);
                    }),
                    l
                  );
                })(this.callback, this.options.throttle, {
                  leading: function (t) {
                    return (
                      "both" === e ||
                      ("visible" === e && t) ||
                      ("hidden" === e && !t)
                    );
                  },
                });
              }
              this.createObserver();
            }
          },
        },
        {
          key: "destroyObserver",
          value: function () {
            this.observer &&
              (this.observer.disconnect(), (this.observer = null)),
              this.callback && (this.callback = null);
          },
        },
      ]),
      t
    );
  })();
(exports.VisibilityState = o),
  (exports.VisibilityStateMp = (function (i) {
    t(a, o);
    var l = e(a);
    function a(t, e, i) {
      var s;
      return (
        r(this, a),
        "string" == typeof (s = l.call(this, t, e, i)).targetSelector &&
          s.initObserver(),
        s
      );
    }
    return (
      s(a, [
        {
          key: "interactionOptions",
          get: function () {
            var t = this.options.intersection,
              e = void 0 === t ? {} : t,
              i = e.thresholds,
              r = e.initialRatio,
              s = void 0 === r ? 0 : r,
              n = e.observeAll,
              o = void 0 !== n && n;
            return {
              thresholds: Array.isArray(i) && i.length ? i : [this.threshold],
              initialRatio: s,
              observeAll: o,
            };
          },
        },
        {
          key: "createObserver",
          value: function () {
            var t = this;
            (this.observer = n.wx$1.createIntersectionObserver(
              this.ctx,
              this.interactionOptions
            )),
              this.observer
                .relativeToViewport()
                .observe(this.targetSelector, function (e) {
                  t.callback &&
                    e.intersectionRatio >= t.threshold &&
                    t.callback(!0, e);
                });
          },
        },
      ]),
      a
    );
  })());
