var t = require("../../../@babel/runtime/helpers/typeof");
require("../../../@babel/runtime/helpers/Arrayincludes");
var e,
  n,
  r,
  o = require("../../../common/vendor.js"),
  i = { exports: {} };
(e = i),
  o.commonjsGlobal,
  (e.exports = (function () {
    return (
      (n = {
        686: function (e, n, r) {
          r.d(n, {
            default: function () {
              return m;
            },
          }),
            (n = r(279));
          var o = r.n(n),
            i = ((n = r(370)), r.n(n)),
            c = ((n = r(817)), r.n(n));
          function u(t) {
            try {
              return document.execCommand(t);
            } catch (t) {
              return;
            }
          }
          var a = function (t) {
            return (t = c()(t)), u("cut"), t;
          };
          function l(t, e) {
            var n, r;
            return (
              (n = t),
              (r = "rtl" === document.documentElement.getAttribute("dir")),
              ((t = document.createElement("textarea")).style.fontSize =
                "12pt"),
              (t.style.border = "0"),
              (t.style.padding = "0"),
              (t.style.margin = "0"),
              (t.style.position = "absolute"),
              (t.style[r ? "right" : "left"] = "-9999px"),
              (r = window.pageYOffset || document.documentElement.scrollTop),
              (t.style.top = "".concat(r, "px")),
              t.setAttribute("readonly", ""),
              (t.value = n),
              e.container.appendChild(t),
              (e = c()(t)),
              u("copy"),
              t.remove(),
              e
            );
          }
          var s = function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : { container: document.body },
              n = "";
            return (
              "string" == typeof t
                ? (n = l(t, e))
                : t instanceof HTMLInputElement &&
                  !["text", "search", "url", "tel", "password"].includes(
                    null == t ? void 0 : t.type
                  )
                ? (n = l(t.value, e))
                : ((n = c()(t)), u("copy")),
              n
            );
          };
          function f(e) {
            return (f =
              "function" == typeof Symbol && "symbol" == t(Symbol.iterator)
                ? function (e) {
                    return t(e);
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : t(e);
                  })(e);
          }
          function d(e) {
            return (d =
              "function" == typeof Symbol && "symbol" == t(Symbol.iterator)
                ? function (e) {
                    return t(e);
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : t(e);
                  })(e);
          }
          function p(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function y(t, e) {
            return (y =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function v(t) {
            return (v = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function b(t, e) {
            if (((t = "data-clipboard-".concat(t)), e.hasAttribute(t)))
              return e.getAttribute(t);
          }
          var m = (function () {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && y(t, e);
            })(c, o());
            var t,
              e,
              n,
              r = (function (t) {
                var e = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function () {
                  var n,
                    r = v(t);
                  return (
                    (n = e
                      ? ((n = v(this).constructor),
                        Reflect.construct(r, arguments, n))
                      : r.apply(this, arguments)),
                    (r = this),
                    !n || ("object" !== d(n) && "function" != typeof n)
                      ? (function (t) {
                          if (void 0 !== t) return t;
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        })(r)
                      : n
                  );
                };
              })(c);
            function c(t, e) {
              var n;
              return (
                (function (t) {
                  if (!(t instanceof c))
                    throw new TypeError("Cannot call a class as a function");
                })(this),
                (n = r.call(this)).resolveOptions(e),
                n.listenClick(t),
                n
              );
            }
            return (
              (t = c),
              (n = [
                {
                  key: "copy",
                  value: function (t) {
                    var e =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : { container: document.body };
                    return s(t, e);
                  },
                },
                {
                  key: "cut",
                  value: function (t) {
                    return a(t);
                  },
                },
                {
                  key: "isSupported",
                  value: function () {
                    var t =
                        "string" ==
                        typeof (t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : ["copy", "cut"])
                          ? [t]
                          : t,
                      e = !!document.queryCommandSupported;
                    return (
                      t.forEach(function (t) {
                        e = e && !!document.queryCommandSupported(t);
                      }),
                      e
                    );
                  },
                },
              ]),
              (e = [
                {
                  key: "resolveOptions",
                  value: function () {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.action =
                      "function" == typeof t.action
                        ? t.action
                        : this.defaultAction),
                      (this.target =
                        "function" == typeof t.target
                          ? t.target
                          : this.defaultTarget),
                      (this.text =
                        "function" == typeof t.text
                          ? t.text
                          : this.defaultText),
                      (this.container =
                        "object" === d(t.container)
                          ? t.container
                          : document.body);
                  },
                },
                {
                  key: "listenClick",
                  value: function (t) {
                    var e = this;
                    this.listener = i()(t, "click", function (t) {
                      return e.onClick(t);
                    });
                  },
                },
                {
                  key: "onClick",
                  value: function (t) {
                    var e = t.delegateTarget || t.currentTarget,
                      n = this.action(e) || "copy";
                    (t = (function () {
                      var t =
                          void 0 ===
                          (n = (r =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}).action)
                            ? "copy"
                            : n,
                        e = r.container,
                        n = r.target,
                        r = r.text;
                      if ("copy" !== t && "cut" !== t)
                        throw new Error(
                          'Invalid "action" value, use either "copy" or "cut"'
                        );
                      if (void 0 !== n) {
                        if (!n || "object" !== f(n) || 1 !== n.nodeType)
                          throw new Error(
                            'Invalid "target" value, use a valid Element'
                          );
                        if ("copy" === t && n.hasAttribute("disabled"))
                          throw new Error(
                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                          );
                        if (
                          "cut" === t &&
                          (n.hasAttribute("readonly") ||
                            n.hasAttribute("disabled"))
                        )
                          throw new Error(
                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                          );
                      }
                      return r
                        ? s(r, { container: e })
                        : n
                        ? "cut" === t
                          ? a(n)
                          : s(n, { container: e })
                        : void 0;
                    })({
                      action: n,
                      container: this.container,
                      target: this.target(e),
                      text: this.text(e),
                    })),
                      this.emit(t ? "success" : "error", {
                        action: n,
                        text: t,
                        trigger: e,
                        clearSelection: function () {
                          e && e.focus(),
                            window.getSelection().removeAllRanges();
                        },
                      });
                  },
                },
                {
                  key: "defaultAction",
                  value: function (t) {
                    return b("action", t);
                  },
                },
                {
                  key: "defaultTarget",
                  value: function (t) {
                    if ((t = b("target", t))) return document.querySelector(t);
                  },
                },
                {
                  key: "defaultText",
                  value: function (t) {
                    return b("text", t);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.listener.destroy();
                  },
                },
              ]) && p(t.prototype, e),
              n && p(t, n),
              c
            );
          })();
        },
        828: function (t) {
          var e;
          "undefined" == typeof Element ||
            Element.prototype.matches ||
            ((e = Element.prototype).matches =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              e.oMatchesSelector ||
              e.webkitMatchesSelector),
            (t.exports = function (t, e) {
              for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode;
              }
            });
        },
        438: function (t, e, n) {
          var r = n(828);
          function o(t, e, n, o, i) {
            var c = function (t, e, n, o) {
              return function (n) {
                (n.delegateTarget = r(n.target, e)),
                  n.delegateTarget && o.call(t, n);
              };
            }.apply(this, arguments);
            return (
              t.addEventListener(n, c, i),
              {
                destroy: function () {
                  t.removeEventListener(n, c, i);
                },
              }
            );
          }
          t.exports = function (t, e, n, r, i) {
            return "function" == typeof t.addEventListener
              ? o.apply(null, arguments)
              : "function" == typeof n
              ? o.bind(null, document).apply(null, arguments)
              : ("string" == typeof t && (t = document.querySelectorAll(t)),
                Array.prototype.map.call(t, function (t) {
                  return o(t, e, n, r, i);
                }));
          };
        },
        879: function (t, e) {
          (e.node = function (t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
          }),
            (e.nodeList = function (t) {
              var n = Object.prototype.toString.call(t);
              return (
                void 0 !== t &&
                ("[object NodeList]" === n ||
                  "[object HTMLCollection]" === n) &&
                "length" in t &&
                (0 === t.length || e.node(t[0]))
              );
            }),
            (e.string = function (t) {
              return "string" == typeof t || t instanceof String;
            }),
            (e.fn = function (t) {
              return "[object Function]" === Object.prototype.toString.call(t);
            });
        },
        370: function (t, e, n) {
          var r = n(879),
            o = n(438);
          t.exports = function (t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!r.string(e))
              throw new TypeError("Second argument must be a String");
            if (!r.fn(n))
              throw new TypeError("Third argument must be a Function");
            if (r.node(t))
              return (
                (l = e),
                (s = n),
                (a = t).addEventListener(l, s),
                {
                  destroy: function () {
                    a.removeEventListener(l, s);
                  },
                }
              );
            if (r.nodeList(t))
              return (
                (i = t),
                (c = e),
                (u = n),
                Array.prototype.forEach.call(i, function (t) {
                  t.addEventListener(c, u);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(i, function (t) {
                      t.removeEventListener(c, u);
                    });
                  },
                }
              );
            if (r.string(t)) return o(document.body, t, e, n);
            throw new TypeError(
              "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
            );
            var i, c, u, a, l, s;
          };
        },
        817: function (t) {
          t.exports = function (t) {
            var e,
              n =
                "SELECT" === t.nodeName
                  ? (t.focus(), t.value)
                  : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName
                  ? ((e = t.hasAttribute("readonly")) ||
                      t.setAttribute("readonly", ""),
                    t.select(),
                    t.setSelectionRange(0, t.value.length),
                    e || t.removeAttribute("readonly"),
                    t.value)
                  : (t.hasAttribute("contenteditable") && t.focus(),
                    (n = window.getSelection()),
                    (e = document.createRange()).selectNodeContents(t),
                    n.removeAllRanges(),
                    n.addRange(e),
                    n.toString());
            return n;
          };
        },
        279: function (t) {
          function e() {}
          (e.prototype = {
            on: function (t, e, n) {
              var r = this.e || (this.e = {});
              return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this;
            },
            once: function (t, e, n) {
              var r = this;
              function o() {
                r.off(t, o), e.apply(n, arguments);
              }
              return (o._ = e), this.on(t, o, n);
            },
            emit: function (t) {
              for (
                var e = [].slice.call(arguments, 1),
                  n = ((this.e || (this.e = {}))[t] || []).slice(),
                  r = 0,
                  o = n.length;
                r < o;
                r++
              )
                n[r].fn.apply(n[r].ctx, e);
              return this;
            },
            off: function (t, e) {
              var n = this.e || (this.e = {}),
                r = n[t],
                o = [];
              if (r && e)
                for (var i = 0, c = r.length; i < c; i++)
                  r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
              return o.length ? (n[t] = o) : delete n[t], this;
            },
          }),
            (t.exports = e),
            (t.exports.TinyEmitter = e);
        },
      }),
      (r = {}),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, { a: n }), n;
      }),
      (e.d = function (t, n) {
        for (var r in n)
          e.o(n, r) &&
            !e.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      e(686).default
    );
    function e(t) {
      if (r[t]) return r[t].exports;
      var o = (r[t] = { exports: {} });
      return n[t](o, o.exports, e), o.exports;
    }
    var n, r;
  })()),
  (n = i.exports);
var c = ({ exports: {} }.exports = {
    install: function (e) {
      var o =
        "3." === e.version.slice(0, 2)
          ? e.config.globalProperties
          : e.prototype;
      (o.$clipboardConfig = r),
        (o.$copyText = function (e, o) {
          return new Promise(function (i, c) {
            var u = document.createElement("button"),
              a = new n(u, {
                text: function () {
                  return e;
                },
                action: function () {
                  return "copy";
                },
                container: "object" == t(o) ? o : document.body,
              });
            a.on("success", function (t) {
              a.destroy(), i(t);
            }),
              a.on("error", function (t) {
                a.destroy(), c(t);
              }),
              r.appendToBody && document.body.appendChild(u),
              u.click(),
              r.appendToBody && document.body.removeChild(u);
          });
        }),
        e.directive("clipboard", {
          bind: function (t, e, o) {
            if ("success" === e.arg) t._vClipboard_success = e.value;
            else if ("error" === e.arg) t._vClipboard_error = e.value;
            else {
              var i = new n(t, {
                text: function () {
                  return e.value;
                },
                action: function () {
                  return "cut" === e.arg ? "cut" : "copy";
                },
                container: r.autoSetContainer ? t : void 0,
              });
              i.on("success", function (e) {
                var n = t._vClipboard_success;
                n && n(e);
              }),
                i.on("error", function (e) {
                  var n = t._vClipboard_error;
                  n && n(e);
                }),
                (t._vClipboard = i);
            }
          },
          update: function (t, e) {
            "success" === e.arg
              ? (t._vClipboard_success = e.value)
              : "error" === e.arg
              ? (t._vClipboard_error = e.value)
              : ((t._vClipboard.text = function () {
                  return e.value;
                }),
                (t._vClipboard.action = function () {
                  return "cut" === e.arg ? "cut" : "copy";
                }));
          },
          unbind: function (t, e) {
            t._vClipboard &&
              ("success" === e.arg
                ? delete t._vClipboard_success
                : "error" === e.arg
                ? delete t._vClipboard_error
                : (t._vClipboard.destroy(), delete t._vClipboard));
          },
        });
    },
    config: (r = { autoSetContainer: !1, appendToBody: !0 }),
  }),
  u = o.getDefaultExportFromCjs(c);
exports.VueClipboard = u;
