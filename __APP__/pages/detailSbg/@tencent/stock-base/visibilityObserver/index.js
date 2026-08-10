var e = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../../@babel/runtime/helpers/createSuper"),
  n = require("./mp.js"),
  s = require("../../../../../common/vendor.js"),
  o = (function (n) {
    r(o, n);
    var s = i(o);
    function o(t, r, i) {
      var n;
      return (
        e(this, o),
        ((n = s.call(this, t, r, i)).el = null),
        (n.oldResult = !1),
        "string" == typeof t
          ? (n.el = document.querySelector(t))
          : t instanceof Element && (n.el = t),
        n.el instanceof Element && n.initObserver(),
        n
      );
    }
    return (
      t(o, [
        {
          key: "interactionOptions",
          get: function () {
            var e = this.options.intersection || {},
              t = e.root,
              r = e.rootMargin,
              i = { threshold: this.threshold };
            return (
              t &&
                (t instanceof Element || t instanceof Document) &&
                (i.root = t),
              r && "string" == typeof r && (i.rootMargin = r),
              i
            );
          },
        },
        {
          key: "createObserver",
          value: function () {
            var e = this;
            (this.oldResult = void 0),
              "undefined" != typeof IntersectionObserver &&
                ((this.observer = new IntersectionObserver(function (t) {
                  var r = t[0];
                  if (t.length > 1) {
                    var i = t.find(function (e) {
                      return e.isIntersecting;
                    });
                    i && (r = i);
                  }
                  if (e.callback) {
                    var n =
                      r.isIntersecting && r.intersectionRatio >= e.threshold;
                    if (n === e.oldResult) return;
                    (e.oldResult = n), e.callback(n, r);
                  }
                }, this.interactionOptions)),
                this.ctx
                  ? this.ctx.$nextTick(function () {
                      e.observer && e.observer.observe(e.el);
                    })
                  : this.observer && this.observer.observe(this.el));
          },
        },
      ]),
      o
    );
  })(n.VisibilityState),
  l = "mp" === s.StockBridge.ENV ? n.VisibilityStateMp : o;
(exports.VisibilityObserver = l), (exports.VisibilityStateH5 = o);
