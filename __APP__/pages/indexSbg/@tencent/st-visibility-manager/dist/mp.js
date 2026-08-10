require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/typeof");
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var t,
  r = require("../../stock-base/visibilityObserver/mp.js"),
  n = ["base", "trade", "shequ", "hq", "news", "yy", "xuangu"],
  o = [
    "_brow",
    "_click",
    "_close",
    "_double_click",
    "_long_tap",
    "_scroll",
    "_focus",
    "_input",
    "_blur",
    "_media",
    "_add",
    "_cancel",
    "_timestay",
  ],
  a = (function () {
    function t() {
      Object.defineProperty(this, "observerMap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      }),
        Object.defineProperty(this, "exposureBatchQueue", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "BATCH_THRESHOLD", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 10,
        }),
        Object.defineProperty(this, "defaultReportFn", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        });
    }
    return (
      Object.defineProperty(t, "getInstance", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          if (!t.instance)
            throw new Error("getInstance must be implemented in subclass");
          return t.instance;
        },
      }),
      Object.defineProperty(t, "setInstance", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          t.instance = e;
        },
      }),
      Object.defineProperty(t.prototype, "setDefaultReportFunction", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          this.defaultReportFn = e;
        },
      }),
      Object.defineProperty(t.prototype, "clearDefaultReportFunction", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.defaultReportFn = void 0;
        },
      }),
      Object.defineProperty(t.prototype, "hasDefaultReportFunction", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          return !!this.defaultReportFn;
        },
      }),
      Object.defineProperty(t.prototype, "getReportFunction", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          return this.defaultReportFn ? this.defaultReportFn : function () {};
        },
      }),
      Object.defineProperty(t.prototype, "add", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          var t = e.selector,
            r = e.context,
            n = (function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                  t.indexOf(n[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                    (r[n[o]] = e[n[o]]);
              }
              return r;
            })(e, ["selector", "context"]),
            o = this.observerMap.get(t);
          o && o.destroy();
          var a = this.createObserverInstance(t, n, r);
          return this.observerMap.set(t, a), a;
        },
      }),
      Object.defineProperty(t.prototype, "isElement", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          return "undefined" == typeof Element
            ? t && "object" == e(t) && void 0 !== t.nodeType
            : t instanceof Element;
        },
      }),
      Object.defineProperty(t.prototype, "isSameSelector", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t) {
          return (
            ((this.isElement(e) && this.isElement(t)) ||
              ("string" == typeof e && "string" == typeof t)) &&
            e === t
          );
        },
      }),
      Object.defineProperty(t.prototype, "remove", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          e.destroy(), this.observerMap.delete(e.selector);
        },
      }),
      Object.defineProperty(t.prototype, "mergeParams", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          var t = {},
            r = {};
          e.forEach(function (e) {
            Object.keys(e.params).forEach(function (r) {
              t[r] || (t[r] = []);
              var n = e.params[r];
              t[r].push(String(n));
            }),
              e.options &&
                Object.keys(e.options).length > 0 &&
                Object.assign(r, e.options);
          });
          var n = {};
          return (
            Object.keys(t).forEach(function (e) {
              n[e] = t[e].join(",");
            }),
            Object.keys(r).length > 0 && Object.assign(n, r),
            n
          );
        },
      }),
      Object.defineProperty(t.prototype, "flushEventBatch", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t) {
          if (0 !== e.length)
            if (1 !== e.length) {
              var r = e[0],
                n = this.mergeParams(e);
              t(r.fullEventName, n, r.options);
            } else {
              var o = e[0];
              t(o.fullEventName, o.params, o.options);
            }
        },
      }),
      Object.defineProperty(t.prototype, "flushExposureBatch", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          var e = this;
          if (0 !== this.exposureBatchQueue.size) {
            var t = this.getReportFunction();
            this.exposureBatchQueue.forEach(function (r) {
              e.flushEventBatch(r, t);
            }),
              this.exposureBatchQueue.clear();
          }
        },
      }),
      Object.defineProperty(t.prototype, "addToExposureBatch", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t) {
          var r = e.fullEventName;
          this.exposureBatchQueue.has(r) || this.exposureBatchQueue.set(r, []);
          var n = this.exposureBatchQueue.get(r);
          n.push(e),
            n.length >= this.BATCH_THRESHOLD &&
              (this.flushEventBatch(n, t), this.exposureBatchQueue.delete(r));
        },
      }),
      Object.defineProperty(t.prototype, "clear", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.flushExposureBatch(),
            this.observerMap.forEach(function (e) {
              e.destroy();
            }),
            this.observerMap.clear(),
            this.clearDefaultReportFunction();
        },
      }),
      Object.defineProperty(t.prototype, "getObserverCount", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          return this.observerMap.size;
        },
      }),
      Object.defineProperty(t.prototype, "reportByPageName", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          var t = this,
            r = e.eventName,
            a = e.busi,
            i = e.routeName,
            u = e.params,
            c = e.options,
            l = void 0 === c ? {} : c,
            s = e.exposure,
            p = void 0 === s ? {} : s;
          if (
            (function (e) {
              var t,
                r,
                a,
                i = !0;
              return (
                !!e &&
                ((e.busi && n.includes(e.busi)) || (i = !1),
                e.eventName
                  ? (o.some(function (t) {
                      return e.eventName.endsWith(t);
                    }) || (i = !1),
                    (null === (t = null == e ? void 0 : e.exposure) ||
                    void 0 === t
                      ? void 0
                      : t.selector) &&
                      !e.eventName.endsWith("_brow") &&
                      (i = !1))
                  : (i = !1),
                e.routeName || (i = !1),
                (null === (r = null == e ? void 0 : e.exposure) || void 0 === r
                  ? void 0
                  : r.selector) &&
                  !(null === (a = null == e ? void 0 : e.exposure) ||
                  void 0 === a
                    ? void 0
                    : a.context) &&
                  (i = !1),
                i)
              );
            })(e)
          ) {
            var f = this.getReportFunction(),
              b = "".concat(a, ".").concat(i, ".").concat(r),
              v = p.selector,
              h = p.once,
              d = void 0 === h || h,
              y = p.threshold,
              m = void 0 === y ? 0 : y,
              g = p.context,
              O = p.enableBatch,
              j = void 0 !== O && O;
            if (v && g)
              var w = this.add({
                selector: v,
                once: d,
                callback: function (e) {
                  e &&
                    (j
                      ? t.addToExposureBatch(
                          { fullEventName: b, params: u, options: l },
                          f
                        )
                      : f(b, u, l),
                    d && t.remove(w));
                },
                intersection: { threshold: m },
                context: g,
              });
            else f(b, u, l);
          }
        },
      }),
      t
    );
  })(),
  i =
    ((t = function (e, r) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        })(e, r);
    }),
    function (e, r) {
      if ("function" != typeof r && null !== r)
        throw new TypeError(
          "Class extends value " + String(r) + " is not a constructor or null"
        );
      function n() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n()));
    }),
  u = (function (e) {
    function t() {
      return e.call(this) || this;
    }
    return (
      i(t, e),
      Object.defineProperty(t, "getInstance", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          return (
            t.mpInstance ||
              ((t.mpInstance = new t()), a.setInstance(t.mpInstance)),
            t.mpInstance
          );
        },
      }),
      Object.defineProperty(t.prototype, "createObserverInstance", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t, n) {
          var o = n ? { context: n } : void 0,
            a = new r.VisibilityStateMp(e, t, o);
          return {
            observer: a,
            selector: e,
            destroy: function () {
              a &&
                "function" == typeof a.destroyObserver &&
                a.destroyObserver();
            },
          };
        },
      }),
      t
    );
  })(a),
  c = {
    add: function (e) {
      return u.getInstance().add(e);
    },
    remove: function (e) {
      u.getInstance().remove(e);
    },
    setDefaultReportFunction: function (e) {
      u.getInstance().setDefaultReportFunction(e);
    },
    clearDefaultReportFunction: function () {
      u.getInstance().clearDefaultReportFunction();
    },
    hasDefaultReportFunction: function () {
      return u.getInstance().hasDefaultReportFunction();
    },
    clear: function () {
      u.getInstance().clear();
    },
    flushExposureBatch: function () {
      u.getInstance().flushExposureBatch();
    },
    getObserverCount: function () {
      return u.getInstance().getObserverCount();
    },
    reportByPageName: function (e) {
      u.getInstance().reportByPageName(e);
    },
  };
exports.default = c;
