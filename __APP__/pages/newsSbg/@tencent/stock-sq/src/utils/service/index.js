require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
    if (c) {
      var r,
        i = o(c(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          f.call(t, n) && p(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return a(e, s(t));
  },
  m = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  h = require("../../../../stock-community-base/utils/knife.js"),
  w = require("../../../../../../../common/vendor.js"),
  g = require("../../../../stock-community-base/utils/service/config/module.js"),
  v = require("../../../../st-wuji-sdk/mp.js"),
  y = { exports: {} },
  E = { exports: {} },
  q = 1e3,
  _ = 60 * q,
  O = 60 * _,
  b = 24 * O,
  R = function (e, t) {
    t = t || {};
    var n,
      o = r(e);
    if ("string" === o && e.length > 0)
      return (function (e) {
        if (!((e = String(e)).length > 100)) {
          var t =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
          if (t) {
            var n = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return 315576e5 * n;
              case "days":
              case "day":
              case "d":
                return n * b;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * O;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * _;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * q;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;
              default:
                return;
            }
          }
        }
      })(e);
    if ("number" === o && !1 === isNaN(e))
      return t.long
        ? x((n = e), b, "day") ||
            x(n, O, "hour") ||
            x(n, _, "minute") ||
            x(n, q, "second") ||
            n + " ms"
        : (function (e) {
            return e >= b
              ? Math.round(e / b) + "d"
              : e >= O
              ? Math.round(e / O) + "h"
              : e >= _
              ? Math.round(e / _) + "m"
              : e >= q
              ? Math.round(e / q) + "s"
              : e + "ms";
          })(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e)
    );
  };
function x(e, t, n) {
  if (!(e < t))
    return e < 1.5 * t
      ? Math.floor(e / t) + " " + n
      : Math.ceil(e / t) + " " + n + "s";
}
!(function (e, t) {
  var n;
  function r(e) {
    function r() {
      if (r.enabled) {
        var e = r,
          o = +new Date(),
          i = o - (n || o);
        (e.diff = i), (e.prev = n), (e.curr = o), (n = o);
        for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
          a[s] = arguments[s];
        (a[0] = t.coerce(a[0])), "string" != typeof a[0] && a.unshift("%O");
        var c = 0;
        (a[0] = a[0].replace(/%([a-zA-Z%])/g, function (n, r) {
          if ("%%" === n) return n;
          c++;
          var o = t.formatters[r];
          if ("function" == typeof o) {
            var i = a[c];
            (n = o.call(e, i)), a.splice(c, 1), c--;
          }
          return n;
        })),
          t.formatArgs.call(e, a),
          (r.log || t.log || void 0).apply(e, a);
      }
    }
    return (
      (r.namespace = e),
      (r.enabled = t.enabled(e)),
      (r.useColors = t.useColors()),
      (r.color = (function (e) {
        var n,
          r = 0;
        for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
        return t.colors[Math.abs(r) % t.colors.length];
      })(e)),
      "function" == typeof t.init && t.init(r),
      r
    );
  }
  ((t = E.exports = r.debug = r.default = r).coerce = function (e) {
    return e instanceof Error ? e.stack || e.message : e;
  }),
    (t.disable = function () {
      t.enable("");
    }),
    (t.enable = function (e) {
      t.save(e), (t.names = []), (t.skips = []);
      for (
        var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
          r = n.length,
          o = 0;
        o < r;
        o++
      )
        n[o] &&
          ("-" === (e = n[o].replace(/\*/g, ".*?"))[0]
            ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
            : t.names.push(new RegExp("^" + e + "$")));
    }),
    (t.enabled = function (e) {
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1;
    }),
    (t.humanize = R),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {});
})(0, E.exports);
var D = E.exports;
!(function (e, t) {
  function n() {
    var e;
    try {
      e = t.storage.debug;
    } catch (e) {}
    return (
      !e &&
        "undefined" != typeof process &&
        "env" in process &&
        (e = process.env.DEBUG),
      e
    );
  }
  ((t = y.exports = D).log = function () {
    return (
      "object" == ("undefined" == typeof console ? "undefined" : r(console)) &&
      console.log &&
      Function.prototype.apply.call(console.log, console, arguments)
    );
  }),
    (t.formatArgs = function (e) {
      var n = this.useColors;
      if (
        ((e[0] =
          (n ? "%c" : "") +
          this.namespace +
          (n ? " %c" : " ") +
          e[0] +
          (n ? "%c " : " ") +
          "+" +
          t.humanize(this.diff)),
        n)
      ) {
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var o = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && (o++, "%c" === e && (i = o));
        }),
          e.splice(i, 0, r);
      }
    }),
    (t.save = function (e) {
      try {
        null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
      } catch (e) {}
    }),
    (t.load = n),
    (t.useColors = function () {
      return (
        !(
          "undefined" == typeof window ||
          !window.process ||
          "renderer" !== window.process.type
        ) ||
        ("undefined" != typeof document &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        ("undefined" != typeof window &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        ("undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        ("undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      );
    }),
    (t.storage =
      "undefined" != typeof chrome && void 0 !== chrome.storage
        ? chrome.storage.local
        : (function () {
            try {
              return window.localStorage;
            } catch (e) {}
          })()),
    (t.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson",
    ]),
    (t.formatters.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message;
      }
    }),
    t.enable(n());
})(0, y.exports),
  (0, y.exports)("jsonp");
var S = { exports: {} },
  U = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
        n[r] = arguments[r];
      return e.apply(t, n);
    };
  },
  M = U,
  A = Object.prototype.toString,
  I = (function (e) {
    return function (t) {
      var n = A.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function T(e) {
  return (
    (e = e.toLowerCase()),
    function (t) {
      return I(t) === e;
    }
  );
}
function N(e) {
  return Array.isArray(e);
}
function C(e) {
  return void 0 === e;
}
var L = T("ArrayBuffer");
function P(e) {
  return null !== e && "object" == r(e);
}
function k(e) {
  if ("object" !== I(e)) return !1;
  var t = Object.getPrototypeOf(e);
  return null === t || t === Object.prototype;
}
var j = T("Date"),
  z = T("File"),
  G = T("Blob"),
  B = T("FileList");
function F(e) {
  return "[object Function]" === A.call(e);
}
var W = T("URLSearchParams");
function X(e, t) {
  if (null != e)
    if (("object" != r(e) && (e = [e]), N(e)))
      for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
    else
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
}
var V = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })("undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array)),
  H = {
    isArray: N,
    isArrayBuffer: L,
    isBuffer: function (e) {
      return (
        null !== e &&
        !C(e) &&
        null !== e.constructor &&
        !C(e.constructor) &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      var t = "[object FormData]";
      return (
        e &&
        (("function" == typeof FormData && e instanceof FormData) ||
          A.call(e) === t ||
          (F(e.toString) && e.toString() === t))
      );
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && L(e.buffer);
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: P,
    isPlainObject: k,
    isUndefined: C,
    isDate: j,
    isFile: z,
    isBlob: G,
    isFunction: F,
    isStream: function (e) {
      return P(e) && F(e.pipe);
    },
    isURLSearchParams: W,
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: X,
    merge: function e() {
      var t = {};
      function n(n, r) {
        k(t[r]) && k(n)
          ? (t[r] = e(t[r], n))
          : k(n)
          ? (t[r] = e({}, n))
          : N(n)
          ? (t[r] = n.slice())
          : (t[r] = n);
      }
      for (var r = 0, o = arguments.length; r < o; r++) X(arguments[r], n);
      return t;
    },
    extend: function (e, t, n) {
      return (
        X(t, function (t, r) {
          e[r] = n && "function" == typeof t ? M(t, n) : t;
        }),
        e
      );
    },
    trim: function (e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    },
    stripBOM: function (e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
    },
    inherits: function (e, t, n, r) {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        n && Object.assign(e.prototype, n);
    },
    toFlatObject: function (e, t, n) {
      var r,
        o,
        i,
        a = {};
      t = t || {};
      do {
        for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0; )
          a[(i = r[o])] || ((t[i] = e[i]), (a[i] = !0));
        e = Object.getPrototypeOf(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: I,
    kindOfTest: T,
    endsWith: function (e, t, n) {
      (e = String(e)),
        (void 0 === n || n > e.length) && (n = e.length),
        (n -= t.length);
      var r = e.indexOf(t, n);
      return -1 !== r && r === n;
    },
    toArray: function (e) {
      if (!e) return null;
      var t = e.length;
      if (C(t)) return null;
      for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
      return n;
    },
    isTypedArray: V,
    isFileList: B,
  },
  Y = H;
function J(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var Q = function (e, t, n) {
    if (!t) return e;
    var r;
    if (n) r = n(t);
    else if (Y.isURLSearchParams(t)) r = t.toString();
    else {
      var o = [];
      Y.forEach(t, function (e, t) {
        null != e &&
          (Y.isArray(e) ? (t += "[]") : (e = [e]),
          Y.forEach(e, function (e) {
            Y.isDate(e)
              ? (e = e.toISOString())
              : Y.isObject(e) && (e = JSON.stringify(e)),
              o.push(J(t) + "=" + J(e));
          }));
      }),
        (r = o.join("&"));
    }
    if (r) {
      var i = e.indexOf("#");
      -1 !== i && (e = e.slice(0, i)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
    }
    return e;
  },
  Z = H;
function $() {
  this.handlers = [];
}
($.prototype.use = function (e, t, n) {
  return (
    this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: !!n && n.synchronous,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  );
}),
  ($.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  }),
  ($.prototype.forEach = function (e) {
    Z.forEach(this.handlers, function (t) {
      null !== t && e(t);
    });
  });
var K = $,
  ee = H,
  te = H;
function ne(e, t, n, r, o) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
te.inherits(ne, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var re = ne.prototype,
  oe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  oe[e] = { value: e };
}),
  Object.defineProperties(ne, oe),
  Object.defineProperty(re, "isAxiosError", { value: !0 }),
  (ne.from = function (e, t, n, r, o, i) {
    var a = Object.create(re);
    return (
      te.toFlatObject(e, a, function (e) {
        return e !== Error.prototype;
      }),
      ne.call(a, e.message, t, n, r, o),
      (a.name = e.name),
      i && Object.assign(a, i),
      a
    );
  });
var ie,
  ae,
  se,
  ce,
  ue,
  fe,
  pe,
  le,
  de,
  me,
  he,
  we,
  ge,
  ve,
  ye,
  Ee,
  qe = ne,
  _e = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Oe = H,
  be = function (e, t) {
    t = t || new FormData();
    var n = [];
    function o(e) {
      return null === e
        ? ""
        : Oe.isDate(e)
        ? e.toISOString()
        : Oe.isArrayBuffer(e) || Oe.isTypedArray(e)
        ? "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    return (
      (function e(i, a) {
        if (Oe.isPlainObject(i) || Oe.isArray(i)) {
          if (-1 !== n.indexOf(i))
            throw Error("Circular reference detected in " + a);
          n.push(i),
            Oe.forEach(i, function (n, i) {
              if (!Oe.isUndefined(n)) {
                var s,
                  c = a ? a + "." + i : i;
                if (n && !a && "object" == r(n))
                  if (Oe.endsWith(i, "{}")) n = JSON.stringify(n);
                  else if (Oe.endsWith(i, "[]") && (s = Oe.toArray(n)))
                    return void s.forEach(function (e) {
                      !Oe.isUndefined(e) && t.append(c, o(e));
                    });
                e(n, c);
              }
            }),
            n.pop();
        } else t.append(a, o(i));
      })(e),
      t
    );
  },
  Re = function (e, t) {
    return e &&
      !(function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      })(t)
      ? (function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  };
function xe() {
  if (me) return de;
  me = 1;
  var e = qe;
  function t(t) {
    e.call(this, null == t ? "canceled" : t, e.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  return H.inherits(t, e, { __CANCEL__: !0 }), (de = t);
}
var De = H,
  Se = function (e, t) {
    ee.forEach(e, function (n, r) {
      r !== t &&
        r.toUpperCase() === t.toUpperCase() &&
        ((e[t] = n), delete e[r]);
    });
  },
  Ue = qe,
  Me = be,
  Ae = { "Content-Type": "application/x-www-form-urlencoded" };
function Ie(e, t) {
  !De.isUndefined(e) &&
    De.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
var Te,
  Ne = {
    transitional: _e,
    adapter:
      (("undefined" != typeof XMLHttpRequest ||
        ("undefined" != typeof process &&
          "[object process]" === Object.prototype.toString.call(process))) &&
        (Te = (function () {
          if (ve) return ge;
          ve = 1;
          var e = H,
            t = (function () {
              if (ae) return ie;
              ae = 1;
              var e = qe;
              return (ie = function (t, n, r) {
                var o = r.config.validateStatus;
                r.status && o && !o(r.status)
                  ? n(
                      new e(
                        "Request failed with status code " + r.status,
                        [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                          Math.floor(r.status / 100) - 4
                        ],
                        r.config,
                        r.request,
                        r
                      )
                    )
                  : t(r);
              });
            })(),
            n = (function () {
              if (ce) return se;
              ce = 1;
              var e = H;
              return (se = e.isStandardBrowserEnv()
                ? {
                    write: function (t, n, r, o, i, a) {
                      var s = [];
                      s.push(t + "=" + encodeURIComponent(n)),
                        e.isNumber(r) &&
                          s.push("expires=" + new Date(r).toGMTString()),
                        e.isString(o) && s.push("path=" + o),
                        e.isString(i) && s.push("domain=" + i),
                        !0 === a && s.push("secure"),
                        (document.cookie = s.join("; "));
                    },
                    read: function (e) {
                      var t = document.cookie.match(
                        new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                      );
                      return t ? decodeURIComponent(t[3]) : null;
                    },
                    remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                    },
                  }
                : {
                    write: function () {},
                    read: function () {
                      return null;
                    },
                    remove: function () {},
                  });
            })(),
            r = Q,
            o = Re,
            i = (function () {
              if (fe) return ue;
              fe = 1;
              var e = H,
                t = [
                  "age",
                  "authorization",
                  "content-length",
                  "content-type",
                  "etag",
                  "expires",
                  "from",
                  "host",
                  "if-modified-since",
                  "if-unmodified-since",
                  "last-modified",
                  "location",
                  "max-forwards",
                  "proxy-authorization",
                  "referer",
                  "retry-after",
                  "user-agent",
                ];
              return (ue = function (n) {
                var r,
                  o,
                  i,
                  a = {};
                return n
                  ? (e.forEach(n.split("\n"), function (n) {
                      if (
                        ((i = n.indexOf(":")),
                        (r = e.trim(n.substr(0, i)).toLowerCase()),
                        (o = e.trim(n.substr(i + 1))),
                        r)
                      ) {
                        if (a[r] && t.indexOf(r) >= 0) return;
                        a[r] =
                          "set-cookie" === r
                            ? (a[r] ? a[r] : []).concat([o])
                            : a[r]
                            ? a[r] + ", " + o
                            : o;
                      }
                    }),
                    a)
                  : a;
              });
            })(),
            a = (function () {
              if (le) return pe;
              le = 1;
              var e = H;
              return (pe = e.isStandardBrowserEnv()
                ? (function () {
                    var t,
                      n = /(msie|trident)/i.test(navigator.userAgent),
                      r = document.createElement("a");
                    function o(e) {
                      var t = e;
                      return (
                        n && (r.setAttribute("href", t), (t = r.href)),
                        r.setAttribute("href", t),
                        {
                          href: r.href,
                          protocol: r.protocol
                            ? r.protocol.replace(/:$/, "")
                            : "",
                          host: r.host,
                          search: r.search ? r.search.replace(/^\?/, "") : "",
                          hash: r.hash ? r.hash.replace(/^#/, "") : "",
                          hostname: r.hostname,
                          port: r.port,
                          pathname:
                            "/" === r.pathname.charAt(0)
                              ? r.pathname
                              : "/" + r.pathname,
                        }
                      );
                    }
                    return (
                      (t = o(window.location.href)),
                      function (n) {
                        var r = e.isString(n) ? o(n) : n;
                        return r.protocol === t.protocol && r.host === t.host;
                      }
                    );
                  })()
                : function () {
                    return !0;
                  });
            })(),
            s = _e,
            c = qe,
            u = xe(),
            f = we
              ? he
              : ((we = 1),
                (he = function (e) {
                  var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                }));
          return (ge = function (p) {
            return new Promise(function (l, d) {
              var m,
                h = p.data,
                w = p.headers,
                g = p.responseType;
              function v() {
                p.cancelToken && p.cancelToken.unsubscribe(m),
                  p.signal && p.signal.removeEventListener("abort", m);
              }
              e.isFormData(h) &&
                e.isStandardBrowserEnv() &&
                delete w["Content-Type"];
              var y = new XMLHttpRequest();
              if (p.auth) {
                var E = p.auth.username || "",
                  q = p.auth.password
                    ? unescape(encodeURIComponent(p.auth.password))
                    : "";
                w.Authorization = "Basic " + btoa(E + ":" + q);
              }
              var _ = o(p.baseURL, p.url);
              function O() {
                if (y) {
                  var e =
                      "getAllResponseHeaders" in y
                        ? i(y.getAllResponseHeaders())
                        : null,
                    n = {
                      data:
                        g && "text" !== g && "json" !== g
                          ? y.response
                          : y.responseText,
                      status: y.status,
                      statusText: y.statusText,
                      headers: e,
                      config: p,
                      request: y,
                    };
                  t(
                    function (e) {
                      l(e), v();
                    },
                    function (e) {
                      d(e), v();
                    },
                    n
                  ),
                    (y = null);
                }
              }
              if (
                (y.open(
                  p.method.toUpperCase(),
                  r(_, p.params, p.paramsSerializer),
                  !0
                ),
                (y.timeout = p.timeout),
                "onloadend" in y
                  ? (y.onloadend = O)
                  : (y.onreadystatechange = function () {
                      y &&
                        4 === y.readyState &&
                        (0 !== y.status ||
                          (y.responseURL &&
                            0 === y.responseURL.indexOf("file:"))) &&
                        setTimeout(O);
                    }),
                (y.onabort = function () {
                  y &&
                    (d(new c("Request aborted", c.ECONNABORTED, p, y)),
                    (y = null));
                }),
                (y.onerror = function () {
                  d(new c("Network Error", c.ERR_NETWORK, p, y, y)), (y = null);
                }),
                (y.ontimeout = function () {
                  var e = p.timeout
                      ? "timeout of " + p.timeout + "ms exceeded"
                      : "timeout exceeded",
                    t = p.transitional || s;
                  p.timeoutErrorMessage && (e = p.timeoutErrorMessage),
                    d(
                      new c(
                        e,
                        t.clarifyTimeoutError ? c.ETIMEDOUT : c.ECONNABORTED,
                        p,
                        y
                      )
                    ),
                    (y = null);
                }),
                e.isStandardBrowserEnv())
              ) {
                var b =
                  (p.withCredentials || a(_)) && p.xsrfCookieName
                    ? n.read(p.xsrfCookieName)
                    : void 0;
                b && (w[p.xsrfHeaderName] = b);
              }
              "setRequestHeader" in y &&
                e.forEach(w, function (e, t) {
                  void 0 === h && "content-type" === t.toLowerCase()
                    ? delete w[t]
                    : y.setRequestHeader(t, e);
                }),
                e.isUndefined(p.withCredentials) ||
                  (y.withCredentials = !!p.withCredentials),
                g && "json" !== g && (y.responseType = p.responseType),
                "function" == typeof p.onDownloadProgress &&
                  y.addEventListener("progress", p.onDownloadProgress),
                "function" == typeof p.onUploadProgress &&
                  y.upload &&
                  y.upload.addEventListener("progress", p.onUploadProgress),
                (p.cancelToken || p.signal) &&
                  ((m = function (e) {
                    y &&
                      (d(!e || (e && e.type) ? new u() : e),
                      y.abort(),
                      (y = null));
                  }),
                  p.cancelToken && p.cancelToken.subscribe(m),
                  p.signal &&
                    (p.signal.aborted
                      ? m()
                      : p.signal.addEventListener("abort", m))),
                h || (h = null);
              var R = f(_);
              R && -1 === ["http", "https", "file"].indexOf(R)
                ? d(
                    new c(
                      "Unsupported protocol " + R + ":",
                      c.ERR_BAD_REQUEST,
                      p
                    )
                  )
                : y.send(h);
            });
          });
        })()),
      Te),
    transformRequest: [
      function (e, t) {
        if (
          (Se(t, "Accept"),
          Se(t, "Content-Type"),
          De.isFormData(e) ||
            De.isArrayBuffer(e) ||
            De.isBuffer(e) ||
            De.isStream(e) ||
            De.isFile(e) ||
            De.isBlob(e))
        )
          return e;
        if (De.isArrayBufferView(e)) return e.buffer;
        if (De.isURLSearchParams(e))
          return (
            Ie(t, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString()
          );
        var n,
          r = De.isObject(e),
          o = t && t["Content-Type"];
        if ((n = De.isFileList(e)) || (r && "multipart/form-data" === o)) {
          var i = this.env && this.env.FormData;
          return Me(n ? { "files[]": e } : e, i && new i());
        }
        return r || "application/json" === o
          ? (Ie(t, "application/json"),
            (function (e, t) {
              if (De.isString(e))
                try {
                  return (0, JSON.parse)(e), De.trim(e);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (0, JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || Ne.transitional,
          n = t && t.silentJSONParsing,
          r = t && t.forcedJSONParsing,
          o = !n && "json" === this.responseType;
        if (o || (r && De.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (e) {
            if (o) {
              if ("SyntaxError" === e.name)
                throw Ue.from(
                  e,
                  Ue.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw e;
            }
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Ee ? ye : ((Ee = 1), (ye = null)) },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
De.forEach(["delete", "get", "head"], function (e) {
  Ne.headers[e] = {};
}),
  De.forEach(["post", "put", "patch"], function (e) {
    Ne.headers[e] = De.merge(Ae);
  });
var Ce,
  Le,
  Pe = Ne,
  ke = H,
  je = Pe;
function ze() {
  return Le
    ? Ce
    : ((Le = 1),
      (Ce = function (e) {
        return !(!e || !e.__CANCEL__);
      }));
}
var Ge = H,
  Be = function (e, t, n) {
    var r = this || je;
    return (
      ke.forEach(n, function (n) {
        e = n.call(r, e, t);
      }),
      e
    );
  },
  Fe = ze(),
  We = Pe,
  Xe = xe();
function Ve(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Xe();
}
var He,
  Ye,
  Je = H,
  Qe = function (e, t) {
    t = t || {};
    var n = {};
    function r(e, t) {
      return Je.isPlainObject(e) && Je.isPlainObject(t)
        ? Je.merge(e, t)
        : Je.isPlainObject(t)
        ? Je.merge({}, t)
        : Je.isArray(t)
        ? t.slice()
        : t;
    }
    function o(n) {
      return Je.isUndefined(t[n])
        ? Je.isUndefined(e[n])
          ? void 0
          : r(void 0, e[n])
        : r(e[n], t[n]);
    }
    function i(e) {
      if (!Je.isUndefined(t[e])) return r(void 0, t[e]);
    }
    function a(n) {
      return Je.isUndefined(t[n])
        ? Je.isUndefined(e[n])
          ? void 0
          : r(void 0, e[n])
        : r(void 0, t[n]);
    }
    function s(n) {
      return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0;
    }
    var c = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
    };
    return (
      Je.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
        var t = c[e] || o,
          r = t(e);
        (Je.isUndefined(r) && t !== s) || (n[e] = r);
      }),
      n
    );
  };
function Ze() {
  return Ye ? He : ((Ye = 1), (He = { version: "0.27.2" }));
}
var $e = Ze().version,
  Ke = qe,
  et = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    et[e] = function (n) {
      return r(n) === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var tt = {};
et.transitional = function (e, t, n) {
  return function (r, o, i) {
    if (!1 === e)
      throw new Ke(
        (function (e, t) {
          return (
            "[Axios v" +
            $e +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        })(o, " has been removed" + (t ? " in " + t : "")),
        Ke.ERR_DEPRECATED
      );
    return t && !tt[o] && (tt[o] = !0), !e || e(r, o, i);
  };
};
var nt,
  rt,
  ot,
  it,
  at,
  st,
  ct = H,
  ut = Q,
  ft = K,
  pt = function (e) {
    return (
      Ve(e),
      (e.headers = e.headers || {}),
      (e.data = Be.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = Ge.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      Ge.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (t) {
          delete e.headers[t];
        }
      ),
      (e.adapter || We.adapter)(e).then(
        function (t) {
          return (
            Ve(e),
            (t.data = Be.call(e, t.data, t.headers, e.transformResponse)),
            t
          );
        },
        function (t) {
          return (
            Fe(t) ||
              (Ve(e),
              t &&
                t.response &&
                (t.response.data = Be.call(
                  e,
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          );
        }
      )
    );
  },
  lt = Qe,
  dt = Re,
  mt = {
    assertOptions: function (e, t, n) {
      if ("object" != r(e))
        throw new Ke("options must be an object", Ke.ERR_BAD_OPTION_VALUE);
      for (var o = Object.keys(e), i = o.length; i-- > 0; ) {
        var a = o[i],
          s = t[a];
        if (s) {
          var c = e[a],
            u = void 0 === c || s(c, a, e);
          if (!0 !== u)
            throw new Ke(
              "option " + a + " must be " + u,
              Ke.ERR_BAD_OPTION_VALUE
            );
        } else if (!0 !== n)
          throw new Ke("Unknown option " + a, Ke.ERR_BAD_OPTION);
      }
    },
    validators: et,
  },
  ht = mt.validators;
function wt(e) {
  (this.defaults = e),
    (this.interceptors = { request: new ft(), response: new ft() });
}
(wt.prototype.request = function (e, t) {
  "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
    (t = lt(this.defaults, t)).method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = "get");
  var n = t.transitional;
  void 0 !== n &&
    mt.assertOptions(
      n,
      {
        silentJSONParsing: ht.transitional(ht.boolean),
        forcedJSONParsing: ht.transitional(ht.boolean),
        clarifyTimeoutError: ht.transitional(ht.boolean),
      },
      !1
    );
  var r = [],
    o = !0;
  this.interceptors.request.forEach(function (e) {
    ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
      ((o = o && e.synchronous), r.unshift(e.fulfilled, e.rejected));
  });
  var i,
    a = [];
  if (
    (this.interceptors.response.forEach(function (e) {
      a.push(e.fulfilled, e.rejected);
    }),
    !o)
  ) {
    var s = [pt, void 0];
    for (
      Array.prototype.unshift.apply(s, r),
        s = s.concat(a),
        i = Promise.resolve(t);
      s.length;

    )
      i = i.then(s.shift(), s.shift());
    return i;
  }
  for (var c = t; r.length; ) {
    var u = r.shift(),
      f = r.shift();
    try {
      c = u(c);
    } catch (e) {
      f(e);
      break;
    }
  }
  try {
    i = pt(c);
  } catch (e) {
    return Promise.reject(e);
  }
  for (; a.length; ) i = i.then(a.shift(), a.shift());
  return i;
}),
  (wt.prototype.getUri = function (e) {
    e = lt(this.defaults, e);
    var t = dt(e.baseURL, e.url);
    return ut(t, e.params, e.paramsSerializer);
  }),
  ct.forEach(["delete", "get", "head", "options"], function (e) {
    wt.prototype[e] = function (t, n) {
      return this.request(
        lt(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
  ct.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (n, r, o) {
        return this.request(
          lt(o || {}, {
            method: e,
            headers: t ? { "Content-Type": "multipart/form-data" } : {},
            url: n,
            data: r,
          })
        );
      };
    }
    (wt.prototype[e] = t()), (wt.prototype[e + "Form"] = t(!0));
  });
var gt = H,
  vt = U,
  yt = wt,
  Et = Qe,
  qt = (function e(t) {
    var n = new yt(t),
      r = vt(yt.prototype.request, n);
    return (
      gt.extend(r, yt.prototype, n),
      gt.extend(r, n),
      (r.create = function (n) {
        return e(Et(t, n));
      }),
      r
    );
  })(Pe);
(qt.Axios = yt),
  (qt.CanceledError = xe()),
  (qt.CancelToken = (function () {
    if (rt) return nt;
    rt = 1;
    var e = xe();
    function t(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      var n;
      this.promise = new Promise(function (e) {
        n = e;
      });
      var r = this;
      this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length;
          for (t = 0; t < n; t++) r._listeners[t](e);
          r._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              r.subscribe(e), (t = e);
            }).then(e);
          return (
            (n.cancel = function () {
              r.unsubscribe(t);
            }),
            n
          );
        }),
        t(function (t) {
          r.reason || ((r.reason = new e(t)), n(r.reason));
        });
    }
    return (
      (t.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
      (t.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }),
      (t.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
      }),
      (t.source = function () {
        var e;
        return {
          token: new t(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (nt = t)
    );
  })()),
  (qt.isCancel = ze()),
  (qt.VERSION = Ze().version),
  (qt.toFormData = be),
  (qt.AxiosError = qe),
  (qt.Cancel = qt.CanceledError),
  (qt.all = function (e) {
    return Promise.all(e);
  }),
  (qt.spread = it
    ? ot
    : ((it = 1),
      (ot = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      }))),
  (qt.isAxiosError = (function () {
    if (st) return at;
    st = 1;
    var e = H;
    return (at = function (t) {
      return e.isObject(t) && !0 === t.isAxiosError;
    });
  })()),
  (S.exports = qt),
  (S.exports.default = qt);
var _t = S.exports,
  Ot = w.getDefaultExportFromCjs(_t),
  bt = {},
  Rt = {},
  xt = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.CGI_SVR_PREFIX =
      e.CGI_BIN_PREFIX =
      e.PROXY_URL_REG =
      e.URI_REG =
      e.SQ_REG =
      e.WZQ_ACTIVITY_DOMAIN_REG =
      e.WHITE_DOMAINS =
      e.DYNAMIC_RULE_KEY =
      e.TENTREES_TEMP_DOMAIN =
      e.WZQ_DOMAIN =
      e.GU_DOMAIN =
      e.PLACEHOLDER =
        void 0),
    (e.PLACEHOLDER = "&0&"),
    (e.GU_DOMAIN = "gu.qq.com"),
    (e.WZQ_DOMAIN = "wzq.tenpay.com"),
    (e.TENTREES_TEMP_DOMAIN = "tentrees.cn"),
    (e.DYNAMIC_RULE_KEY = "DAYNAMIC_RULE_KEY"),
    (e.WHITE_DOMAINS = ["tengtrees.com", e.TENTREES_TEMP_DOMAIN]),
    (e.WZQ_ACTIVITY_DOMAIN_REG = /(zqact)(\d{0,2})?\.tenpay\.com/),
    (e.SQ_REG = /^\/group(s)?/),
    (e.URI_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?((?:[a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64})([\\/]+[\S\s]*)?/i),
    (e.PROXY_URL_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?(wzq\.tenpay\.com|www\.tentrees.cn)?(?:\/)?(cgi-bin|svr)?/i),
    (e.CGI_BIN_PREFIX = "cgi-bin"),
    (e.CGI_SVR_PREFIX = "svr");
})(xt),
  Object.defineProperty(Rt, "__esModule", { value: !0 });
var Dt = xt,
  St = (function () {
    function e(e) {
      void 0 === e && (e = !1),
        (this.isForceGray = !1),
        (this.isGray = !1),
        (this.isGray = e);
    }
    return (
      (e.prototype.isBrowserGrayUser = function () {
        return this.isGray
          ? this.isGray
          : location.hostname.includes(Dt.TENTREES_TEMP_DOMAIN);
      }),
      (e.prototype.isDefGrayUser = function () {
        return this.isGray;
      }),
      (e.prototype.setGray = function (e) {
        void 0 !== e && (this.isForceGray = e);
      }),
      (e.prototype.isGrayUser = function () {
        return (
          !!this.isForceGray ||
          ("undefined" != typeof window
            ? this.isBrowserGrayUser()
            : this.isDefGrayUser())
        );
      }),
      e
    );
  })();
Rt.default = St;
var Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 }),
  (Ut.isWechat = Ut.isStockApp = Ut.isMiniapp = Ut.parseUri = void 0);
var Mt = xt;
(Ut.parseUri = function (e) {
  var t = Mt.URI_REG.exec(e);
  return { hostname: (t && t[1]) || "", pathname: (t && t[2]) || "" };
}),
  (Ut.isMiniapp = function () {
    return "function" == typeof getApp && "function" == typeof getCurrentPages;
  }),
  (Ut.isStockApp = function () {
    return /qqstock/i.test(navigator.userAgent);
  }),
  (Ut.isWechat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  });
var At = {};
Object.defineProperty(At, "__esModule", { value: !0 }),
  (At.apiTplData = void 0),
  (At.apiTplData = {
    "proxy.finance.qq.com": "www.&0&",
    "bisheng.tenpay.com": "www.&0&/bisheng",
    "wzq.tenpay.com": "www.&0&",
    "snp.tenpay.com": "gu.qq.com",
    "gu.qq.com": "www.&0&/gu",
    "qqmac.gu.qq.com": "www.&0&/qqmac",
    "qqbrowser.gu.qq.com": "www.&0&/qqbrowser",
    "qqweb.gu.qq.com": "www.&0&/qqweb",
    "qt.gtimg.cn": "www.&0&/sqt",
    "sqt.gtimg.cn": "www.&0&/sqt",
    "appqt.gtimg.cn": "www.&0&/sqt",
    "web.sqt.gtimg.cn": "www.&0&/sqt",
    "qt.finance.qq.com": "www.&0&/sqt",
    "all.sqt.gtimg.cn": "www.&0&/sqt",
    "qt.gtimg.qq.com": "www.&0&/sqt",
    "mobileqq.qt.finance.qq.com": "www.&0&/sqt",
    "webpush.finance.qq.com": "www.&0&/webpush",
    "stockpush.finance.qq.com": "www.&0&/macpush",
    "www.zxgstock.com": "www.zxgstock.com",
    "file.finance.qq.com": "cdn.&0&/file",
    "pic.finance.qq.com": "cdn.&0&/pic",
    "liveplay.portfolio.finance.qq.com": "liveplay.portfolio.finance.qq.com",
    "livepush.portfolio.finance.qq.com": "livepush.portfolio.finance.qq.com",
    "push.finance.qq.com": "www.&0&",
    "qtdata.finance.qq.com": "www.&0&",
    "hybrid.finance.qq.com": "www.&0&",
    "proxyplus.finance.qq.com": "www.&0&",
    "stock.gtimg.cn": "www.&0&",
    "message.finance.qq.com": "www.&0&/message",
    "stockapp.finance.qq.com": "www.&0&/stockapp",
    "smartbox.gtimg.cn": "www.&0&/smartbox",
    "news.gtimg.cn": "www.&0&/newsgtimg",
    "news2.gtimg.cn": "www.&0&/newsgtimg",
    "mobileqq.finance.qq.com": "www.&0&/ifzq",
    "web.ifzq.gtimg.cn": "www.&0&/ifzq",
    "web.ifzq.finance.qq.com": "www.&0&/ifzq",
    "level2.finance.qq.com": "www.&0&/ifzq",
    "ifzq.finance.qq.com": "www.&0&/ifzq",
    "datalevel2.finance.qq.com": "www.&0&/ifzq",
    "ifzq.gtimg.cn": "www.&0&/ifzq",
    "interface.finance.qq.com": "www.&0&/ifzq",
    "webstock.finance.qq.com": "www.&0&/newstock",
    "weixin.finance.qq.com": "www.&0&/newstock",
    "newstock.finance.qq.com": "www.&0&/newstock",
    "web.group.finance.qq.com": "group.&0&",
    "group.finance.qq.com": "group.&0&",
    "data.gtimg.cn": "www.&0&/datagtimg",
    "deal.finance.qq.com": "www.&0&/deal",
    "imgnode.gtimg.cn": "www.&0&/imgnodegtimg",
    "img2.gtimg.cn": "www.&0&/imggtimg",
    "img.finance.qq.com": "www.&0&/imggtimg",
    "stockjs.finance.qq.com": "www.&0&/stockhtm",
    "stockhtm.finance.qq.com": "www.&0&/stockhtm",
    "zqact.tenpay.com": "zqact.&0&",
    "testproxy.finance.qq.com": "test.&0&",
    "preproxy.finance.qq.com": "pre.&0&",
    "openapi.finance.qq.com": "www.&0&/openapi",
    "wzq.gtimg.com": "cdn.&0&",
    "wzqcf.gtimg.com": "cdn.&0&",
    "st.gtimg.com": "cdn.&0&/cos",
    "aics.tenpay.com": "wzq.tenpay.com",
    "aics.qq.com": "gu.qq.com",
  });
var It = {};
Object.defineProperty(It, "__esModule", { value: !0 }),
  (It.reqWzqProxyToGu = It.reqTransformer = void 0);
var Tt = xt;
It.reqTransformer = function (e) {
  return function (t) {
    var n = t.url,
      r = t.baseURL;
    return (
      e &&
        e.isGrayUser() &&
        (n && (t.url = e.getRealApiUrl(n)),
        r && (t.baseURL = e.getRealApiUrl(r))),
      t
    );
  };
};
var Nt = [Tt.WZQ_DOMAIN, Tt.TENTREES_TEMP_DOMAIN],
  Ct = [Tt.CGI_BIN_PREFIX, Tt.CGI_SVR_PREFIX],
  Lt = function (e) {
    return Nt.some(function (t) {
      return e.includes(t);
    });
  },
  Pt = function (e) {
    return Ct.some(function (t) {
      return t === e;
    });
  };
(It.reqWzqProxyToGu = function () {
  return function (e, t) {
    if ((void 0 === t && (t = !1), !t)) {
      if ("undefined" == typeof window) return e;
      if (location.hostname !== Tt.GU_DOMAIN) return e;
    }
    var n = e.url,
      r = e.baseURL,
      o = n.match(Tt.PROXY_URL_REG),
      i = r.match(Tt.PROXY_URL_REG),
      a = (o && o[1]) || "",
      s = (o && o[2]) || "",
      c = (i && i[1]) || "",
      u = (i && i[2]) || "";
    if (Lt(a) && Pt(s)) {
      var f =
        s === Tt.CGI_BIN_PREFIX
          ? "".concat(Tt.GU_DOMAIN, "/wzq")
          : "".concat(Tt.GU_DOMAIN);
      return (e.url = e.url.replace(a, f)), e;
    }
    return Lt(c) && Pt(u)
      ? ((f =
          u === Tt.CGI_BIN_PREFIX
            ? "".concat(Tt.GU_DOMAIN, "/wzq")
            : "".concat(Tt.GU_DOMAIN)),
        (e.baseURL = e.baseURL.replace(c, f)),
        e)
      : Lt(c) && Pt(s) && !a
      ? ((f =
          s === Tt.CGI_BIN_PREFIX
            ? "".concat(Tt.GU_DOMAIN, "/wzq")
            : "".concat(Tt.GU_DOMAIN)),
        (e.baseURL = e.baseURL.replace(c, f)),
        e)
      : e;
  };
}),
  (function (e) {
    var t =
        (w.commonjsGlobal && w.commonjsGlobal.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      n =
        (w.commonjsGlobal && w.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            }),
      r =
        (w.commonjsGlobal && w.commonjsGlobal.__exportStar) ||
        function (e, t) {
          for (var r in e)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(t, r) ||
              n(t, e, r);
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.initLocation = e.initShyRequest = void 0);
    var o,
      i = Rt,
      a = Ut,
      s = At,
      c = xt;
    r(It, e),
      ((0, a.isMiniapp)() || "undefined" != typeof window) &&
        (o = v.require$$5.default);
    var u = { isGray: !1, useWuji: !1 },
      f = (function () {
        function e(e, t) {
          void 0 === e && (e = c.TENTREES_TEMP_DOMAIN),
            void 0 === t && (t = u),
            (this.apiData = {}),
            (this.domain = c.TENTREES_TEMP_DOMAIN),
            (this.sqDomain = ""),
            this.domainCheck(e),
            (this.sqDomain = "group.".concat(this.domain)),
            (this.apiData = this.getMappingData(e, s.apiTplData)),
            (this.grayTool = new i.default(t && t.isGray)),
            t && t.useWuji && (this.getCacheData(), this.getDynamicData());
        }
        return (
          (e.prototype.getCacheData = function () {
            if ("undefined" != typeof window) {
              var e = localStorage.getItem(c.DYNAMIC_RULE_KEY);
              if (!e) return;
              try {
                var n = this.getMappingData(this.domain, JSON.parse(e));
                this.apiData = t(t({}, this.apiData), n);
              } catch (e) {}
            }
          }),
          (e.prototype.getDynamicData = function () {
            var e = this;
            "undefined" != typeof window &&
              o &&
              o.get &&
              o
                .get({ appid: "news", schemaid: "api_dynamic_mapping" })
                .then(function (n) {
                  if (200 === n.code && n.data && n.data[0]) {
                    var r = n.data[0],
                      o = r.is_on,
                      i = r.mapping_json;
                    if (1 === o)
                      try {
                        var a = e.getMappingData(e.domain, JSON.parse(i));
                        localStorage.setItem(c.DYNAMIC_RULE_KEY, i),
                          (e.apiData = t(t({}, e.apiData), a));
                      } catch (e) {}
                    else 1 !== o && localStorage.removeItem(c.DYNAMIC_RULE_KEY);
                  }
                })
                .catch(function (e) {});
          }),
          (e.prototype.domainCheck = function (e) {
            if (!(e = e && e.trim && e.trim()))
              throw new Error("请提供腾树域名");
            if (e.startsWith("www")) throw new Error("请提供不带www前缀的域名");
            if (!c.WHITE_DOMAINS.includes(e))
              throw new Error("请使用白名单域名：".concat(c.WHITE_DOMAINS));
            this.domain = e;
          }),
          (e.prototype.getMappingData = function (e, t) {
            var n = {};
            return (
              Object.keys(t).forEach(function (r) {
                var o = t[r];
                o.includes(c.PLACEHOLDER)
                  ? (n[r] = o.replace(
                      new RegExp("".concat(c.PLACEHOLDER), "g"),
                      e
                    ))
                  : (n[r] = o);
              }),
              n
            );
          }),
          (e.prototype.getCommunityMappingUrl = function (e, t) {
            return e.replace(t, this.sqDomain);
          }),
          (e.prototype.getWZQActivityMappingUrl = function (e, t, n) {
            var r = t.replace(n[2], ""),
              o = this.apiData[r].replace(n[1], "".concat(n[1]).concat(n[2]));
            return e.replace(t, o);
          }),
          (e.prototype.getRealUrl = function (e, t, n) {
            var r = this.apiData[t];
            if (c.SQ_REG.test(n)) return this.getCommunityMappingUrl(e, t);
            if (r) return e.replace(t, r);
            var o = t.match(c.WZQ_ACTIVITY_DOMAIN_REG);
            return o && o[1] && o[2]
              ? this.getWZQActivityMappingUrl(e, t, o)
              : e;
          }),
          (e.prototype.getRealApiUrl = function (e, t) {
            if ((void 0 === t && (t = !1), "string" != typeof e)) return e;
            e = e && e.trim();
            var n = (0, a.parseUri)(e),
              r = n.hostname,
              o = n.pathname;
            return r && (this.grayTool.isGrayUser() || t)
              ? this.getRealUrl(e, r, o)
              : e;
          }),
          (e.prototype.setGray = function (e) {
            this.grayTool.setGray(e);
          }),
          (e.prototype.isGrayUser = function () {
            return this.grayTool.isGrayUser();
          }),
          (e.prototype.getAPIData = function () {
            return this.apiData;
          }),
          (e.prototype.updateAPIData = function (e) {
            this.domainCheck(e),
              (this.sqDomain = "group.".concat(this.domain)),
              (this.apiData = this.getMappingData(e, s.apiTplData));
          }),
          e
        );
      })();
    (e.initShyRequest = function (e) {
      if ("undefined" != typeof shy) {
        var t = shy.request;
        if (shy.isWrapped) return;
        (shy.request = function (n) {
          void 0 === n && (n = {}),
            e.isGrayUser() && (n.url = e.getRealApiUrl(n.url)),
            t.call(shy, n);
        }),
          (shy.isWrapped = !0);
      }
    }),
      (e.initLocation = function (e) {
        var t = {
          set href(t) {
            var n = t;
            e.isGrayUser() && (n = e.getRealApiUrl(n)), (location.href = n);
          },
          replace: function (t) {
            void 0 === t && (t = "");
            var n = t;
            e.isGrayUser() && (n = e.getRealApiUrl(n)), location.replace(n);
          },
        };
        window.$location = t;
      }),
      (e.default = f);
  })(bt);
var kt = h.sdk,
  jt = kt.getUserInfo,
  zt = kt.getZxgSystemInfo,
  Gt = Ot.create({ baseURL: "" });
(Gt.defaults.withCredentials = !1),
  Gt.interceptors.request.use(bt.reqTransformer(g.apiManager));
var Bt = function (e) {
    var o = e.url,
      i = e.method,
      a = void 0 === i ? "POST" : i,
      s = e.header,
      c = void 0 === s ? {} : s,
      u = e.data,
      f = void 0 === u ? {} : u,
      p = e.query,
      d = void 0 === p ? {} : p,
      g = e.userinfo,
      v = void 0 === g ? {} : g,
      y = e.autoLogin,
      E = e.keepApp,
      q = void 0 !== E && E,
      _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      O = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(function (e, i) {
      return m(
        exports,
        null,
        t().mark(function s() {
          var u, p, m, g, E, b, R;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (((t.t0 = v.openid), t.t0)) {
                    t.next = 5;
                    break;
                  }
                  return (t.next = 4), jt(y, O);
                case 4:
                  v = t.sent;
                case 5:
                  if (
                    ((u = []),
                    _ ||
                      Object.keys(v).forEach(function (e) {
                        u.push("".concat(e, "=").concat(v[e]));
                      }),
                    _ || "zxg" !== h.platform)
                  ) {
                    t.next = 11;
                    break;
                  }
                  return (t.next = 9), zt();
                case 9:
                  (p = t.sent),
                    [
                      ["dev", "_dev"],
                      ["devId", "_devId"],
                      ["appVersion", "_appver"],
                      ["osVersion", "_osVer"],
                      ["os", "_appName"],
                    ].forEach(function (e) {
                      var t = n(e, 2),
                        r = t[0],
                        o = t[1];
                      u.push(
                        ""
                          .concat(o, "=")
                          .concat(
                            "os" === r ? p[r] && p[r].toLowerCase() : p[r]
                          )
                      );
                    });
                case 11:
                  (m = []),
                    (g =
                      (null == window ? void 0 : window.IS_WZQ_LIGHT) ||
                      h.IS_LITE_MODE),
                    d &&
                      ((E = d),
                      g && E.app && !q && (E.app = "mini_h5"),
                      Object.keys(E).forEach(function (e) {
                        m.push("".concat(e, "=").concat(E[e]));
                      })),
                    (o = ""
                      .concat(
                        (o =
                          ("wzq" !== h.platform && "mini" !== h.platform) ||
                          "GET" === a
                            ? "".concat(o, "?").concat(u.join("&"))
                            : o)
                      )
                      .concat(o.indexOf("?") > 0 ? "&" : "?")
                      .concat(m.join("&"))),
                    (b = l(l({}, v), f)),
                    "qqmac" === h.platform && (b.app = "newpanel"),
                    g && !q && (b.app = "mini_h5"),
                    o.includes("zixuangu/stockAdd") &&
                      ((b.check = 11), (b.appid = "wx4ffb369b6881ee5e")),
                    (R = {
                      url: o,
                      method: a,
                      dataType: "json",
                      data: b,
                      header: Object.assign(
                        { "Content-Type": "application/x-www-form-urlencoded" },
                        "zxg" === h.platform && {
                          referer: "https://finance.qq.com",
                        },
                        c
                      ),
                      success: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          n = t.data;
                        n && !+n.code ? e(n) : i(n);
                      },
                      fail: function (e) {
                        i(e);
                      },
                    }),
                    (function (e, t, n) {
                      var o = n.method,
                        i = n.isShowToast,
                        a = void 0 === i || i,
                        s = (void 0 === o ? "post" : o).toUpperCase(),
                        c = l({}, t);
                      return (
                        "GET" === s &&
                          "object" == r(c) &&
                          (e =
                            e +
                            (e.indexOf("?") > -1 ? "&" : "?") +
                            h.serializeObject(c)),
                        new Promise(function (t, n) {
                          var r = {
                            url: e,
                            method: s,
                            dataType: "json",
                            data: c,
                            header: Object.assign(
                              {},
                              {
                                "Content-Type":
                                  "application/x-www-form-urlencoded",
                              }
                            ),
                            success: function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              200 !== e.statusCode
                                ? (a &&
                                    w.wx$1.showToast({
                                      title: "系统繁忙，请稍后重试",
                                      icon: "error",
                                    }),
                                  n({
                                    code: e.statusCode,
                                    msg: "系统繁忙，请稍后重试",
                                  }))
                                : t(e.data || {});
                            },
                            fail: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                t = "系统繁忙，请稍后重试";
                              "fail" === e.state &&
                                (t = "网络不可用，请检查网络设置"),
                                a &&
                                  w.wx$1.showToast({ title: t, icon: "error" }),
                                n({ code: e.errorCode || -1003, msg: t });
                            },
                          };
                          w.wx$1.request(r);
                        })
                      );
                    })(o, b, R)
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        i(e);
                      });
                case 18:
                case "end":
                  return t.stop();
              }
          }, s);
        })
      );
    });
  },
  Ft = h.sdk.getUserInfo,
  Wt =
    (null == (e = null == window ? void 0 : window.__SystemInfo__)
      ? void 0
      : e.serverType) || "online",
  Xt = g.host[Wt],
  Vt = {},
  Ht = function () {
    var e,
      t =
        (null == (e = null == window ? void 0 : window.__SystemInfo__)
          ? void 0
          : e.serverType) || "online";
    return g.host[t][h.platform];
  };
(exports.blacklistUser = function (e) {
  return new Promise(function (n, r) {
    return m(
      exports,
      null,
      t().mark(function o() {
        var i;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Ft();
              case 2:
                (i = t.sent),
                  Bt(
                    {
                      url:
                        Ht() +
                        g.MODULE[h.platform].MODULE_COMMENT +
                        "blacklistUser",
                      data: l({ g_openid: i.openid }, e),
                      userinfo: i,
                    },
                    "zxg" === h.platform
                  )
                    .then(function (e) {
                      return n(e);
                    })
                    .catch(function (e) {
                      return r(e);
                    });
              case 4:
              case "end":
                return t.stop();
            }
        }, o);
      })
    );
  });
}),
  (exports.changeProfile = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new Promise(function (n, r) {
      return m(
        exports,
        null,
        t().mark(function o() {
          var i, a;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Ft();
                case 2:
                  (i = t.sent),
                    (a = ""
                      .concat(Ht())
                      .concat(
                        g.MODULE[h.platform].MODULE_GROUP_USER,
                        "changeProfile"
                      )),
                    Bt(
                      {
                        url: a,
                        query:
                          "wzq" === h.platform
                            ? l({ app: "wzq", check: 12 }, e)
                            : e,
                        method: "GET",
                        userinfo: i,
                      },
                      "zxg" === h.platform
                    )
                      .then(function (e) {
                        return n(e);
                      })
                      .catch(function (e) {
                        return r(e);
                      });
                case 5:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.checkStocksAdded = function (e) {
    return m(
      this,
      null,
      t().mark(function n() {
        var r, o, i, a;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Ft();
              case 2:
                return (
                  (r = t.sent),
                  (o = {
                    app: Vt.IS_WEIXIN && !Vt.IS_MINA ? "wzq" : "3G",
                    check: 11,
                    appid: r.qlappid,
                    fskey: r.qlskey,
                    openid: r.openid,
                    stocks: e.join(","),
                  }),
                  (i = {}),
                  (t.next = 7),
                  Bt(
                    {
                      url: "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
                      method: "GET",
                      query: o,
                    },
                    "zxg" === h.platform
                  )
                );
              case 7:
                return (
                  (a = t.sent),
                  t.abrupt(
                    "return",
                    (a && 0 === a.code && a.data && (i = a.data), i)
                  )
                );
              case 9:
              case "end":
                return t.stop();
            }
        }, n);
      })
    );
  }),
  (exports.commentListPlatContent = function (e) {
    var t = e.subjectId,
      n = e.first,
      r = e.begin,
      o = e.order,
      i = e.num,
      a = e.userinfo,
      s = e.tlMark;
    return new Promise(function (e, c) {
      var u = {
        subjectid: t,
        subject_id: t,
        last: n ? "" : r,
        begin: n ? "" : r,
        num: i || 10,
        limit: i || 10,
        order: o || "",
        tl_mark: n ? "" : s,
      };
      "wzq" === h.platform && (u = d(l({}, u), { check: 12, app: "wzq" }));
      var f = "",
        p = "";
      24 === t.toString().length
        ? ((f = "getRssCommentListBySubjectId"),
          (p = ""
            .concat(Xt[h.platform])
            .concat(g.MODULE[h.platform].MODULE_RSS_SERVICE)
            .concat(f)))
        : ((f = "getNewsCommentListBySubjectId"),
          (p = ""
            .concat(Xt[h.platform])
            .concat(g.MODULE[h.platform].MODULE_NEWS_COMMENT)
            .concat(f))),
        Bt({ url: p, data: u, userinfo: a }, "zxg" === h.platform)
          .then(function (t) {
            return e(t);
          })
          .catch(function (e) {
            return c(e);
          });
    });
  }),
  (exports.complainUser = function (e) {
    return Bt(
      {
        url: Ht() + g.MODULE[h.platform].MODULE_GROUP_USER + "complainUser",
        data: "wzq" === h.platform ? l({ app: "wzq", check: 12 }, e) : e,
      },
      "zxg" === h.platform
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return null;
      });
  }),
  (exports.deleteRssSubject = function (e) {
    return Bt(
      {
        url:
          Ht() + g.MODULE[h.platform].COMPATIBLE_COMMENT + "deleteRssSubject",
        data:
          "wzq" === h.platform
            ? { app: "wzq", check: 12, subject_id: e }
            : { subject_id: e },
      },
      "zxg" === h.platform
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return null;
      });
  }),
  (exports.getCommentDetail = function (e) {
    var t = e.subjectId,
      n = e.newsCommentId,
      r = void 0 === n ? "" : n,
      o = e.visible,
      i = void 0 === o ? 0 : o,
      a = e.visibleRemoved,
      s = void 0 === a ? "" : a,
      c = e.userinfo;
    return new Promise(function (e, n) {
      var o = {
        subjectid: t,
        subject_id: t,
        comment_id: r && "undefined" !== r ? r : "",
        visible: i,
        content_link: 1,
      };
      (o = "wzq" === h.platform ? l({ app: "wzq", check: 12 }, o) : l({}, o)),
        s && (o.visibleRemoved = s);
      var a = "",
        u = "";
      24 === t.toString().length
        ? ((a = "getRssSubjectById"),
          (u = ""
            .concat(Xt[h.platform])
            .concat(g.MODULE[h.platform].MODULE_RSS_INDEX)
            .concat(a)))
        : ((a = "getNewsSubject"),
          (u = ""
            .concat(Xt[h.platform])
            .concat(g.MODULE[h.platform].MODULE_NEWS_COMMENT)
            .concat(a))),
        Bt({ url: u, data: o, userinfo: c }, "zxg" === h.platform)
          .then(function (t) {
            return e(t);
          })
          .catch(function (e) {
            return n(e);
          });
    });
  }),
  (exports.getHotIndexBanner = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new Promise(function (n, r) {
      return m(
        exports,
        null,
        t().mark(function o() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  Bt(
                    {
                      url:
                        Xt[h.platform] +
                        g.MODULE[h.platform].MODULE_RSS_INDEX +
                        "hotIndexBanner",
                      data: e,
                    },
                    "zxg" === h.platform
                  )
                    .then(function (e) {
                      return n(e);
                    })
                    .catch(function (e) {
                      return r(e);
                    });
                case 1:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.getIllegalReasons = function (e) {
    return Bt(
      {
        url:
          Ht() +
          g.MODULE[h.platform].MODULE_RSS_SERVICE +
          "getIllegalReportReasons",
        data: "wzq" === h.platform ? l({ app: "wzq", check: 12 }, e) : e,
      },
      "zxg" === h.platform
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return null;
      });
  }),
  (exports.getMainList = function (e, t, n) {
    return new Promise(function (t, r) {
      Bt({
        url: ""
          .concat(Xt[h.platform])
          .concat(g.MODULE[h.platform].COMPATIBLE_COMMENT, "commentIndex"),
        data: "wzq" === h.platform ? l({ app: "wzq", check: 12 }, e) : e,
        userinfo: n,
      })
        .then(function (e) {
          return t(e);
        })
        .catch(function (e) {
          return r(e);
        });
    });
  }),
  (exports.getMapRssList = function (e, t, n) {
    return new Promise(function (t, r) {
      Bt({
        url: ""
          .concat(Xt[h.platform])
          .concat(g.MODULE[h.platform].MODULE_COMMENT_NEXT, "mapRssList"),
        data: "wzq" === h.platform ? l({ app: "wzq", check: 12 }, e) : e,
        userinfo: n,
      })
        .then(function (e) {
          return t(e);
        })
        .catch(function (e) {
          return r(e);
        });
    });
  }),
  (exports.getNewsCommentList = function (e, t) {
    return new Promise(function (n, r) {
      Bt(
        {
          url: ""
            .concat(Ht())
            .concat(g.MODULE[h.platform].MODULE_NEWS_COMMENT, "newsRssList"),
          data:
            "wzq" === h.platform || "mini" === h.platform
              ? l({ app: "wzq", check: 12 }, e)
              : e,
          userinfo: t,
        },
        !0
      )
        .then(function (e) {
          return n(e);
        })
        .catch(function (e) {
          return r(e);
        });
    });
  }),
  (exports.getQTs = function () {
    return m(this, arguments, function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return t().mark(function n() {
        var r, o, i, a, s;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (r = { hk: "s_r_", us: "t_s_", hd: "r_" }),
                  (o = function (e) {
                    var t,
                      n = e.slice(0, 2);
                    return (
                      (null != (t = r[n]) ? t : "s_") +
                      e
                        .replace(/^us\.?/, "us")
                        .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                        .replace(/\./g, "__")
                    );
                  }),
                  (t.next = 4),
                  Bt(
                    {
                      url: "https://sqt.gtimg.cn/utf8/",
                      method: "GET",
                      query: {
                        fmt: "json",
                        q: e
                          .map(function (e) {
                            return o(e);
                          })
                          .join(","),
                      },
                    },
                    "zxg" === h.platform
                  )
                );
              case 4:
                return (
                  (i = t.sent),
                  (a = i.data ? i.data : i || {}),
                  (s = {}),
                  t.abrupt(
                    "return",
                    (e.forEach(function (e) {
                      var t = a[o(e)];
                      if (t) {
                        var n = e.slice(0, 2);
                        s[e] =
                          "hd" === n
                            ? {
                                name: t[1],
                                code: t[2],
                                price: t[3],
                                updown: t[12],
                              }
                            : {
                                name: t[1],
                                code: t[2],
                                price: t[3],
                                updown: t[5],
                              };
                      }
                    }),
                    s)
                  )
                );
              case 8:
              case "end":
                return t.stop();
            }
        }, n);
      })();
    });
  }),
  (exports.getRecommendList = function (e, t) {
    return new Promise(function (n, r) {
      (e.version = "9.2"),
        Bt({
          url: ""
            .concat(Xt[h.platform])
            .concat(g.MODULE[h.platform].MODULE_RSS_INDEX, "commentIndexUser"),
          data: "wzq" === h.platform ? l({ app: "wzq", check: 12 }, e) : e,
          userinfo: t,
        })
          .then(function (e) {
            return n(e);
          })
          .catch(function (e) {
            return r(e);
          });
    });
  }),
  (exports.getStaticNums = function (e) {
    return new Promise(function (t, n) {
      var r = "".concat(Xt[h.platform], "cgi/cgi-bin/numserver/getStaticNums");
      Bt({
        url: r,
        query: d(l({}, e), { type: "forward", visible: 1 }),
        method: "GET",
      })
        .then(function (e) {
          return t(e);
        })
        .catch(function (e) {
          return n(e);
        });
    });
  }),
  (exports.getUserState = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Promise(function (r, o) {
      return m(
        exports,
        null,
        t().mark(function i() {
          var a, s, c, u;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Ft("fund" === n);
                case 2:
                  (a = t.sent),
                    (s =
                      g.MODULE[h.platform][
                        "zxg" === h.platform
                          ? "MODULE_MESS_APP"
                          : "MODULE_MESS_WZQ"
                      ]),
                    (c = "".concat(Ht()).concat(s, "treaty")),
                    (u = "zxg" === h.platform && "fund" !== n && "stgy" !== n),
                    Bt(
                      {
                        url: c,
                        query:
                          "wzq" === h.platform
                            ? l({ app: "wzq", check: 12 }, e)
                            : e,
                        method: "GET",
                        userinfo: a,
                      },
                      u
                    )
                      .then(function (e) {
                        return r(e);
                      })
                      .catch(function (e) {
                        return o(e);
                      });
                case 7:
                case "end":
                  return t.stop();
              }
          }, i);
        })
      );
    });
  }),
  (exports.illegalReport = function (e) {
    return Bt(
      {
        url: Ht() + g.MODULE[h.platform].COMPATIBLE_COMMENT + "illegalReport",
        data: "wzq" === h.platform ? l({ app: "wzq", check: 12 }, e) : e,
      },
      "zxg" === h.platform
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return null;
      });
  }),
  (exports.operateStock = function (e, n) {
    return m(
      this,
      null,
      t().mark(function r() {
        var o, i, a, s;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (o = {
                    timestamp: new Date().getTime(),
                    act: n ? "sa" : "sd",
                    grpid: "1",
                    code: e,
                  }),
                  (t.next = 3),
                  Ft()
                );
              case 3:
                return (
                  (i = t.sent),
                  (a = {
                    app: Vt.IS_WEIXIN && !Vt.IS_MINA ? "wzq" : "3G",
                    check: 11,
                    appid: i.qlappid,
                    fskey: i.qlskey,
                    openid: i.openid,
                  }),
                  (s = { seq: encodeURIComponent(JSON.stringify([o])) }),
                  (t.next = 8),
                  Bt(
                    {
                      url: "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                      query: a,
                      data: s,
                    },
                    "zxg" === h.platform
                  )
                );
              case 8:
              case "end":
                return t.stop();
            }
        }, r);
      })
    );
  }),
  (exports.putFollow = function (e, t, n, r) {
    Bt(
      {
        url: ""
          .concat(Xt[h.platform])
          .concat(g.MODULE[h.platform].MODULE_RSS_SERVICE)
          .concat(n ? "followuser" : "unfollowuser"),
        data: e,
        userinfo: t,
        autoLogin: r,
      },
      "zxg" === h.platform
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return null;
      });
  }),
  (exports.putRssLike = function (e, t, n) {
    return new Promise(function (r, o) {
      Bt(
        {
          url: ""
            .concat(Xt[h.platform])
            .concat(
              g.MODULE[h.platform][
                {
                  mini: "COMPATIBLE_COMMENT",
                  wzq: "COMPATIBLE_COMMENT",
                  web: "MODULE_RSS_SERVICE",
                  zxg: "MODULE_RSS_SERVICE",
                  qqmac: "MODULE_RSS_SERVICE",
                }[h.platform]
              ]
            )
            .concat(
              "wzq" === h.platform || "mini" === h.platform
                ? "putRssLike"
                : "putRssLike2"
            ),
          data:
            "wzq" === h.platform || "mini" === h.platform
              ? l({ app: "wzq", check: 12 }, e)
              : e,
          userinfo: t,
          autoLogin: n,
        },
        "zxg" === h.platform
      )
        .then(function (e) {
          return r(e);
        })
        .catch(function (e) {
          return o(e);
        });
    });
  }),
  (exports.recordTopic = function (e) {
    return new Promise(function (n, r) {
      return m(
        exports,
        null,
        t().mark(function o() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  Bt({
                    url:
                      Ht() +
                      g.MODULE[h.platform].MODULE_RSS_INDEX +
                      "recordTopic",
                    data:
                      "wzq" === h.platform
                        ? l({ app: "wzq", check: 12 }, e)
                        : e,
                  })
                    .then(function (e) {
                      return n(e);
                    })
                    .catch(function (e) {
                      return r(e);
                    });
                case 1:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.reportPromotion = function (e) {
    return new Promise(function (n, r) {
      return m(
        exports,
        null,
        t().mark(function o() {
          var i;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Ft(!0);
                case 2:
                  (i = t.sent),
                    Bt(
                      {
                        url:
                          Ht() +
                          g.MODULE[h.platform].MODULE_RSS_INDEX +
                          "reportPromotion",
                        data:
                          "wzq" === h.platform
                            ? l({ app: "wzq", check: 12 }, e)
                            : e,
                        userinfo: i,
                      },
                      "zxg" === h.platform
                    )
                      .then(function (e) {
                        return n(e);
                      })
                      .catch(function (e) {
                        return r(e);
                      });
                case 4:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.updateUserPrivilege = function () {
    return new Promise(function (e, n) {
      return m(
        exports,
        null,
        t().mark(function r() {
          var o;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), Ft();
                case 2:
                  (o = t.sent),
                    Bt({
                      url: ""
                        .concat(Ht())
                        .concat(
                          g.MODULE[h.platform].COMPATIBLE_COMMENT,
                          "updateUserPrivilege"
                        ),
                      data: { from: "wzq", app: "wzq", check: 12 },
                      userinfo: o,
                      keepApp: !0,
                    })
                      .then(function (t) {
                        return e(t);
                      })
                      .catch(function (e) {
                        return n(e);
                      });
                case 4:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    });
  });
