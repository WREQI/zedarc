var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../common/vendor.js"),
  n = require("../../stock-hq-data/index.js"),
  o = { exports: {} },
  i = function (e, t) {
    return function () {
      for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
        r[n] = arguments[n];
      return e.apply(t, r);
    };
  },
  s = i,
  a = Object.prototype.toString;
function u(e) {
  return "[object Array]" === a.call(e);
}
function c(e) {
  return void 0 === e;
}
function f(e) {
  return null !== e && "object" == t(e);
}
function l(e) {
  if ("[object Object]" !== a.call(e)) return !1;
  var t = Object.getPrototypeOf(e);
  return null === t || t === Object.prototype;
}
function d(e) {
  return "[object Function]" === a.call(e);
}
function p(e, r) {
  if (null != e)
    if (("object" != t(e) && (e = [e]), u(e)))
      for (var n = 0, o = e.length; n < o; n++) r.call(null, e[n], n, e);
    else
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && r.call(null, e[i], i, e);
}
var h = {
    isArray: u,
    isArrayBuffer: function (e) {
      return "[object ArrayBuffer]" === a.call(e);
    },
    isBuffer: function (e) {
      return (
        null !== e &&
        !c(e) &&
        null !== e.constructor &&
        !c(e.constructor) &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && e.buffer instanceof ArrayBuffer;
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: f,
    isPlainObject: l,
    isUndefined: c,
    isDate: function (e) {
      return "[object Date]" === a.call(e);
    },
    isFile: function (e) {
      return "[object File]" === a.call(e);
    },
    isBlob: function (e) {
      return "[object Blob]" === a.call(e);
    },
    isFunction: d,
    isStream: function (e) {
      return f(e) && d(e.pipe);
    },
    isURLSearchParams: function (e) {
      return (
        "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
      );
    },
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
    forEach: p,
    merge: function e() {
      var t = {};
      function r(r, n) {
        l(t[n]) && l(r)
          ? (t[n] = e(t[n], r))
          : l(r)
          ? (t[n] = e({}, r))
          : u(r)
          ? (t[n] = r.slice())
          : (t[n] = r);
      }
      for (var n = 0, o = arguments.length; n < o; n++) p(arguments[n], r);
      return t;
    },
    extend: function (e, t, r) {
      return (
        p(t, function (t, n) {
          e[n] = r && "function" == typeof t ? s(t, r) : t;
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
  },
  m = h;
function g(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var v = function (e, t, r) {
    if (!t) return e;
    var n;
    if (r) n = r(t);
    else if (m.isURLSearchParams(t)) n = t.toString();
    else {
      var o = [];
      m.forEach(t, function (e, t) {
        null != e &&
          (m.isArray(e) ? (t += "[]") : (e = [e]),
          m.forEach(e, function (e) {
            m.isDate(e)
              ? (e = e.toISOString())
              : m.isObject(e) && (e = JSON.stringify(e)),
              o.push(g(t) + "=" + g(e));
          }));
      }),
        (n = o.join("&"));
    }
    if (n) {
      var i = e.indexOf("#");
      -1 !== i && (e = e.slice(0, i)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
    }
    return e;
  },
  y = h;
function b() {
  this.handlers = [];
}
(b.prototype.use = function (e, t, r) {
  return (
    this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: !!r && r.synchronous,
      runWhen: r ? r.runWhen : null,
    }),
    this.handlers.length - 1
  );
}),
  (b.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  }),
  (b.prototype.forEach = function (e) {
    y.forEach(this.handlers, function (t) {
      null !== t && e(t);
    });
  });
var w,
  S,
  x,
  E,
  T,
  j,
  O,
  C,
  N,
  P,
  k,
  A,
  R,
  U,
  B,
  q,
  L,
  D,
  I,
  _,
  F,
  J,
  H = b,
  M = h,
  z = function (e, t) {
    M.forEach(e, function (r, n) {
      n !== t &&
        n.toUpperCase() === t.toUpperCase() &&
        ((e[t] = r), delete e[n]);
    });
  },
  K = function (e, t, r, n, o) {
    return (
      (e.config = t),
      r && (e.code = r),
      (e.request = n),
      (e.response = o),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
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
      }),
      e
    );
  };
function G() {
  if (S) return w;
  S = 1;
  var e = K;
  return (w = function (t, r, n, o, i) {
    var s = new Error(t);
    return e(s, r, n, o, i);
  });
}
function W() {
  if (D) return L;
  function e(e) {
    this.message = e;
  }
  return (
    (D = 1),
    (e.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
    (e.prototype.__CANCEL__ = !0),
    (L = e)
  );
}
function X() {
  if (_) return I;
  _ = 1;
  var e = h,
    t = (function () {
      if (E) return x;
      E = 1;
      var e = G();
      return (x = function (t, r, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status)
          ? r(
              e(
                "Request failed with status code " + n.status,
                n.config,
                null,
                n.request,
                n
              )
            )
          : t(n);
      });
    })(),
    r = (function () {
      if (j) return T;
      j = 1;
      var e = h;
      return (T = e.isStandardBrowserEnv()
        ? {
            write: function (t, r, n, o, i, s) {
              var a = [];
              a.push(t + "=" + encodeURIComponent(r)),
                e.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                e.isString(o) && a.push("path=" + o),
                e.isString(i) && a.push("domain=" + i),
                !0 === s && a.push("secure"),
                (document.cookie = a.join("; "));
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
    n = v,
    o = (function () {
      if (A) return k;
      A = 1;
      var e = C
          ? O
          : ((C = 1),
            (O = function (e) {
              return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
            })),
        t = P
          ? N
          : ((P = 1),
            (N = function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            }));
      return (k = function (r, n) {
        return r && !e(n) ? t(r, n) : n;
      });
    })(),
    i = (function () {
      if (U) return R;
      U = 1;
      var e = h,
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
      return (R = function (r) {
        var n,
          o,
          i,
          s = {};
        return r
          ? (e.forEach(r.split("\n"), function (r) {
              if (
                ((i = r.indexOf(":")),
                (n = e.trim(r.substr(0, i)).toLowerCase()),
                (o = e.trim(r.substr(i + 1))),
                n)
              ) {
                if (s[n] && t.indexOf(n) >= 0) return;
                s[n] =
                  "set-cookie" === n
                    ? (s[n] ? s[n] : []).concat([o])
                    : s[n]
                    ? s[n] + ", " + o
                    : o;
              }
            }),
            s)
          : s;
      });
    })(),
    s = (function () {
      if (q) return B;
      q = 1;
      var e = h;
      return (B = e.isStandardBrowserEnv()
        ? (function () {
            var t,
              r = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function o(e) {
              var t = e;
              return (
                r && (n.setAttribute("href", t), (t = n.href)),
                n.setAttribute("href", t),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (t = o(window.location.href)),
              function (r) {
                var n = e.isString(r) ? o(r) : r;
                return n.protocol === t.protocol && n.host === t.host;
              }
            );
          })()
        : function () {
            return !0;
          });
    })(),
    a = G(),
    u = Z(),
    c = W();
  return (I = function (f) {
    return new Promise(function (l, d) {
      var p,
        h = f.data,
        m = f.headers,
        g = f.responseType;
      function v() {
        f.cancelToken && f.cancelToken.unsubscribe(p),
          f.signal && f.signal.removeEventListener("abort", p);
      }
      e.isFormData(h) && delete m["Content-Type"];
      var y = new XMLHttpRequest();
      if (f.auth) {
        var b = f.auth.username || "",
          w = f.auth.password
            ? unescape(encodeURIComponent(f.auth.password))
            : "";
        m.Authorization = "Basic " + btoa(b + ":" + w);
      }
      var S = o(f.baseURL, f.url);
      function x() {
        if (y) {
          var e =
              "getAllResponseHeaders" in y
                ? i(y.getAllResponseHeaders())
                : null,
            r = {
              data:
                g && "text" !== g && "json" !== g ? y.response : y.responseText,
              status: y.status,
              statusText: y.statusText,
              headers: e,
              config: f,
              request: y,
            };
          t(
            function (e) {
              l(e), v();
            },
            function (e) {
              d(e), v();
            },
            r
          ),
            (y = null);
        }
      }
      if (
        (y.open(f.method.toUpperCase(), n(S, f.params, f.paramsSerializer), !0),
        (y.timeout = f.timeout),
        "onloadend" in y
          ? (y.onloadend = x)
          : (y.onreadystatechange = function () {
              y &&
                4 === y.readyState &&
                (0 !== y.status ||
                  (y.responseURL && 0 === y.responseURL.indexOf("file:"))) &&
                setTimeout(x);
            }),
        (y.onabort = function () {
          y && (d(a("Request aborted", f, "ECONNABORTED", y)), (y = null));
        }),
        (y.onerror = function () {
          d(a("Network Error", f, null, y)), (y = null);
        }),
        (y.ontimeout = function () {
          var e = f.timeout
              ? "timeout of " + f.timeout + "ms exceeded"
              : "timeout exceeded",
            t = f.transitional || u.transitional;
          f.timeoutErrorMessage && (e = f.timeoutErrorMessage),
            d(a(e, f, t.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)),
            (y = null);
        }),
        e.isStandardBrowserEnv())
      ) {
        var E =
          (f.withCredentials || s(S)) && f.xsrfCookieName
            ? r.read(f.xsrfCookieName)
            : void 0;
        E && (m[f.xsrfHeaderName] = E);
      }
      "setRequestHeader" in y &&
        e.forEach(m, function (e, t) {
          void 0 === h && "content-type" === t.toLowerCase()
            ? delete m[t]
            : y.setRequestHeader(t, e);
        }),
        e.isUndefined(f.withCredentials) ||
          (y.withCredentials = !!f.withCredentials),
        g && "json" !== g && (y.responseType = f.responseType),
        "function" == typeof f.onDownloadProgress &&
          y.addEventListener("progress", f.onDownloadProgress),
        "function" == typeof f.onUploadProgress &&
          y.upload &&
          y.upload.addEventListener("progress", f.onUploadProgress),
        (f.cancelToken || f.signal) &&
          ((p = function (e) {
            y &&
              (d(!e || (e && e.type) ? new c("canceled") : e),
              y.abort(),
              (y = null));
          }),
          f.cancelToken && f.cancelToken.subscribe(p),
          f.signal &&
            (f.signal.aborted ? p() : f.signal.addEventListener("abort", p))),
        h || (h = null),
        y.send(h);
    });
  });
}
function Z() {
  if (J) return F;
  J = 1;
  var e = h,
    t = z,
    r = K,
    n = { "Content-Type": "application/x-www-form-urlencoded" };
  function o(t, r) {
    !e.isUndefined(t) &&
      e.isUndefined(t["Content-Type"]) &&
      (t["Content-Type"] = r);
  }
  var i,
    s = {
      transitional: {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      },
      adapter:
        (("undefined" != typeof XMLHttpRequest ||
          ("undefined" != typeof process &&
            "[object process]" === Object.prototype.toString.call(process))) &&
          (i = X()),
        i),
      transformRequest: [
        function (r, n) {
          return (
            t(n, "Accept"),
            t(n, "Content-Type"),
            e.isFormData(r) ||
            e.isArrayBuffer(r) ||
            e.isBuffer(r) ||
            e.isStream(r) ||
            e.isFile(r) ||
            e.isBlob(r)
              ? r
              : e.isArrayBufferView(r)
              ? r.buffer
              : e.isURLSearchParams(r)
              ? (o(n, "application/x-www-form-urlencoded;charset=utf-8"),
                r.toString())
              : e.isObject(r) || (n && "application/json" === n["Content-Type"])
              ? (o(n, "application/json"),
                (function (t, r) {
                  if (e.isString(t))
                    try {
                      return (0, JSON.parse)(t), e.trim(t);
                    } catch (e) {
                      if ("SyntaxError" !== e.name) throw e;
                    }
                  return (0, JSON.stringify)(t);
                })(r))
              : r
          );
        },
      ],
      transformResponse: [
        function (t) {
          var n = this.transitional || s.transitional,
            o = n && n.silentJSONParsing,
            i = n && n.forcedJSONParsing,
            a = !o && "json" === this.responseType;
          if (a || (i && e.isString(t) && t.length))
            try {
              return JSON.parse(t);
            } catch (e) {
              if (a) {
                if ("SyntaxError" === e.name) throw r(e, this, "E_JSON_PARSE");
                throw e;
              }
            }
          return t;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: "application/json, text/plain, */*" } },
    };
  return (
    e.forEach(["delete", "get", "head"], function (e) {
      s.headers[e] = {};
    }),
    e.forEach(["post", "put", "patch"], function (t) {
      s.headers[t] = e.merge(n);
    }),
    (F = s)
  );
}
var V,
  Q,
  $ = h,
  Y = Z();
function ee() {
  return Q
    ? V
    : ((Q = 1),
      (V = function (e) {
        return !(!e || !e.__CANCEL__);
      }));
}
var te = h,
  re = function (e, t, r) {
    var n = this || Y;
    return (
      $.forEach(r, function (r) {
        e = r.call(n, e, t);
      }),
      e
    );
  },
  ne = ee(),
  oe = Z(),
  ie = W();
function se(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ie("canceled");
}
var ae,
  ue,
  ce = h,
  fe = function (e, t) {
    t = t || {};
    var r = {};
    function n(e, t) {
      return ce.isPlainObject(e) && ce.isPlainObject(t)
        ? ce.merge(e, t)
        : ce.isPlainObject(t)
        ? ce.merge({}, t)
        : ce.isArray(t)
        ? t.slice()
        : t;
    }
    function o(r) {
      return ce.isUndefined(t[r])
        ? ce.isUndefined(e[r])
          ? void 0
          : n(void 0, e[r])
        : n(e[r], t[r]);
    }
    function i(e) {
      if (!ce.isUndefined(t[e])) return n(void 0, t[e]);
    }
    function s(r) {
      return ce.isUndefined(t[r])
        ? ce.isUndefined(e[r])
          ? void 0
          : n(void 0, e[r])
        : n(void 0, t[r]);
    }
    function a(r) {
      return r in t ? n(e[r], t[r]) : r in e ? n(void 0, e[r]) : void 0;
    }
    var u = {
      url: i,
      method: i,
      data: i,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: a,
    };
    return (
      ce.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
        var t = u[e] || o,
          n = t(e);
        (ce.isUndefined(n) && t !== a) || (r[e] = n);
      }),
      r
    );
  };
function le() {
  return ue ? ae : ((ue = 1), (ae = { version: "0.23.0" }));
}
var de = le().version,
  pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, r) {
    pe[e] = function (n) {
      return t(n) === e || "a" + (r < 1 ? "n " : " ") + e;
    };
  }
);
var he = {};
pe.transitional = function (e, t, r) {
  return function (n, o, i) {
    if (!1 === e)
      throw new Error(
        (function (e, t) {
          return (
            "[Axios v" +
            de +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        })(o, " has been removed" + (t ? " in " + t : ""))
      );
    return t && !he[o] && (he[o] = !0), !e || e(n, o, i);
  };
};
var me,
  ge,
  ve,
  ye,
  be,
  we,
  Se = h,
  xe = v,
  Ee = H,
  Te = function (e) {
    return (
      se(e),
      (e.headers = e.headers || {}),
      (e.data = re.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = te.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      te.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (t) {
          delete e.headers[t];
        }
      ),
      (e.adapter || oe.adapter)(e).then(
        function (t) {
          return (
            se(e),
            (t.data = re.call(e, t.data, t.headers, e.transformResponse)),
            t
          );
        },
        function (t) {
          return (
            ne(t) ||
              (se(e),
              t &&
                t.response &&
                (t.response.data = re.call(
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
  je = fe,
  Oe = {
    assertOptions: function (e, r, n) {
      if ("object" != t(e)) throw new TypeError("options must be an object");
      for (var o = Object.keys(e), i = o.length; i-- > 0; ) {
        var s = o[i],
          a = r[s];
        if (a) {
          var u = e[s],
            c = void 0 === u || a(u, s, e);
          if (!0 !== c) throw new TypeError("option " + s + " must be " + c);
        } else if (!0 !== n) throw Error("Unknown option " + s);
      }
    },
    validators: pe,
  },
  Ce = Oe.validators;
function Ne(e) {
  (this.defaults = e),
    (this.interceptors = { request: new Ee(), response: new Ee() });
}
(Ne.prototype.request = function (e) {
  "string" == typeof e
    ? ((e = arguments[1] || {}).url = arguments[0])
    : (e = e || {}),
    (e = je(this.defaults, e)).method
      ? (e.method = e.method.toLowerCase())
      : this.defaults.method
      ? (e.method = this.defaults.method.toLowerCase())
      : (e.method = "get");
  var t = e.transitional;
  void 0 !== t &&
    Oe.assertOptions(
      t,
      {
        silentJSONParsing: Ce.transitional(Ce.boolean),
        forcedJSONParsing: Ce.transitional(Ce.boolean),
        clarifyTimeoutError: Ce.transitional(Ce.boolean),
      },
      !1
    );
  var r = [],
    n = !0;
  this.interceptors.request.forEach(function (t) {
    ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
      ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
  });
  var o,
    i = [];
  if (
    (this.interceptors.response.forEach(function (e) {
      i.push(e.fulfilled, e.rejected);
    }),
    !n)
  ) {
    var s = [Te, void 0];
    for (
      Array.prototype.unshift.apply(s, r),
        s = s.concat(i),
        o = Promise.resolve(e);
      s.length;

    )
      o = o.then(s.shift(), s.shift());
    return o;
  }
  for (var a = e; r.length; ) {
    var u = r.shift(),
      c = r.shift();
    try {
      a = u(a);
    } catch (e) {
      c(e);
      break;
    }
  }
  try {
    o = Te(a);
  } catch (e) {
    return Promise.reject(e);
  }
  for (; i.length; ) o = o.then(i.shift(), i.shift());
  return o;
}),
  (Ne.prototype.getUri = function (e) {
    return (
      (e = je(this.defaults, e)),
      xe(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    );
  }),
  Se.forEach(["delete", "get", "head", "options"], function (e) {
    Ne.prototype[e] = function (t, r) {
      return this.request(
        je(r || {}, { method: e, url: t, data: (r || {}).data })
      );
    };
  }),
  Se.forEach(["post", "put", "patch"], function (e) {
    Ne.prototype[e] = function (t, r, n) {
      return this.request(je(n || {}, { method: e, url: t, data: r }));
    };
  });
var Pe = h,
  ke = i,
  Ae = Ne,
  Re = fe,
  Ue = (function e(t) {
    var r = new Ae(t),
      n = ke(Ae.prototype.request, r);
    return (
      Pe.extend(n, Ae.prototype, r),
      Pe.extend(n, r),
      (n.create = function (r) {
        return e(Re(t, r));
      }),
      n
    );
  })(Z());
(Ue.Axios = Ae),
  (Ue.Cancel = W()),
  (Ue.CancelToken = (function () {
    if (ge) return me;
    ge = 1;
    var e = W();
    function t(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      var r;
      this.promise = new Promise(function (e) {
        r = e;
      });
      var n = this;
      this.promise.then(function (e) {
        if (n._listeners) {
          var t,
            r = n._listeners.length;
          for (t = 0; t < r; t++) n._listeners[t](e);
          n._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            r = new Promise(function (e) {
              n.subscribe(e), (t = e);
            }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        t(function (t) {
          n.reason || ((n.reason = new e(t)), r(n.reason));
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
      (me = t)
    );
  })()),
  (Ue.isCancel = ee()),
  (Ue.VERSION = le().version),
  (Ue.all = function (e) {
    return Promise.all(e);
  }),
  (Ue.spread = ye
    ? ve
    : ((ye = 1),
      (ve = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      }))),
  (Ue.isAxiosError = we
    ? be
    : ((we = 1),
      (be = function (e) {
        return "object" == t(e) && !0 === e.isAxiosError;
      }))),
  (o.exports = Ue),
  (o.exports.default = Ue);
var Be = o.exports,
  qe = r.getDefaultExportFromCjs(Be),
  Le = {
    request: function (t) {
      return (
        (n = this),
        (o = arguments),
        (i = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "GET",
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return e().mark(function i() {
            var s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (s = {
                        url: t,
                        method: n,
                        paramsSerializer: function (e) {
                          return r.queryString.stringify(e, {
                            arrayFormat: "brackets",
                          });
                        },
                      }),
                      Object.keys(o).length &&
                        (s["GET" === n ? "params" : "data"] = o),
                      (e.next = 4),
                      qe.request(s)
                    );
                  case 4:
                    return e.abrupt("return", e.sent.data);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, i);
          })();
        }),
        new Promise(function (e, t) {
          var r = function (e) {
              try {
                a(i.next(e));
              } catch (e) {
                t(e);
              }
            },
            s = function (e) {
              try {
                a(i.throw(e));
              } catch (e) {
                t(e);
              }
            },
            a = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(r, s);
            };
          a((i = i.apply(n, o)).next());
        })
      );
      var n, o, i;
    },
    report: function () {},
    getStorage: function (e) {
      var t = localStorage.getItem(e);
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    },
    setStorage: function (e, r) {
      var n = "object" == t(r) ? JSON.stringify(r) : r;
      localStorage.setItem(e, n);
    },
  },
  De = n.utils,
  Ie = De.isBJMarket,
  _e = De.isNQMarket,
  Fe = De.isHSMarket,
  Je = De.isHKMarket,
  He = De.isUSMarket,
  Me = De.isUKMarket,
  ze = De.isHSPlate,
  Ke = De.isChuangYeStock,
  Ge = De.isKeChuangStock,
  We = De.isDebt,
  Xe = De.isDebtIndex,
  Ze = De.isTransferableDebt,
  Ve = De.isGuoZhengHK,
  Qe = De.isCSIndex,
  $e = De.isFTIndex,
  Ye = De.isGermanFTIndex,
  et = De.isFutures,
  tt = De.isSGFutures,
  rt = De.isForex,
  nt = De.isBCCurrency;
(exports.getChartScale = function (e, t) {
  return Ke(e) || Ge(e) || We(e) || Xe(e) || "ZQ-GZ" === e
    ? ["09:30", "11:30/13:00", "15:30"]
    : Je(t) || Ve(e)
    ? ["09:30", "12:00/13:00", "16:00"]
    : Ie(t) || _e(t) || Fe(t) || ze(t) || Qe(t)
    ? ["09:30", "11:30/13:00", "15:00"]
    : He(t)
    ? ["09:30", "12:45", "16:00"]
    : Me(t)
    ? ["08:00", "12:15", "16:30"]
    : Ye(e)
    ? ["09:00", "13:15", "17:30"]
    : tt(e)
    ? ["17:00", "5:15/9:00", "16:30"]
    : rt(t)
    ? ["00:00", "12:00", "24:00"]
    : nt(t)
    ? ["00:00", "06:00", "12:00", "18:00", "24:00"]
    : void 0;
}),
  (exports.getDefaultSetting = function (e) {
    return {
      fq: 1,
      trendline: !1,
      supportPressureLine: !1,
      gap: !1,
      lastestPrice: !1,
      remindPrice: !1,
      ds: !1,
      zx: !1,
      minsIndicator: "volume",
      mainIndicator: "ma",
      indicatorCount: "wzq" === e ? 2 : 1,
      firstIndicator: "volume",
      secondIndicator: "macd",
      thirdIndicator: "kdj",
      fourthIndicator: "rsi",
      yangKStyle: { id: "solid", name: "实心阳线" },
      auctionMode: "close",
      maTypes: [5, 10, 20, 30, 0, 0, 0, 0, 0, 0],
      maTemp: [],
      emaTypes: [12, 50, 0, 0, 0, 0, 0, 0, 0, 0],
      emaTemp: [],
      volumeTypes: [5, 10, 20, 0, 0],
      volumeTemp: [],
      cjeTypes: [5, 10, 20, 0, 0],
      cjeTemp: [],
      macdParams: { short: 12, long: 26, m: 9 },
      dmiParams: { n: 14, m: 6 },
      cciParams: { n: 14 },
      wrParams: { n1: 10, n2: 6 },
      bollParams: { deviation: 20, width: 2 },
      kdjParams: { n1: 9, n2: 3, n3: 3 },
      rsiParams: { n1: 6, n2: 12, n3: 24 },
      chartRatio: 100,
      foldState: !0,
      macdPattern: "wzq" === e,
      magicNine: !1,
      tradeSecret: !1,
      tradeLine: !1,
    };
  }),
  (exports.getRenderPoint = function (e, t) {
    return Je(t) || Ve(e)
      ? [332, 425, 60, 86]
      : Ie(t) || _e(t) || Fe(t) || ze(t) || Qe(t)
      ? [242, 310, 60, 86, 267, 272, 345]
      : He(t)
      ? [391, 495, 60, 86]
      : Me(t) || Ye(e)
      ? [511, 645, 60, 86]
      : tt(e)
      ? [1187, 1495, 60, 86]
      : rt(t) || nt(t)
      ? [1440, 1800, 60, 86]
      : void 0;
  }),
  (exports.getStockType = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Fe(e) || Ie(e) || _e(e) || Qe(e)
      ? t[61]
      : ze(e)
      ? t[58]
      : Je(e)
      ? t[63]
      : He(e) || Me(e) || $e(e) || et(e)
      ? t[56]
      : void 0;
  }),
  (exports.getTradeUnit = function (e, t) {
    return Ge(e)
      ? "股"
      : Ie(t) || _e(t) || Fe(t) || ze(t) || Qe(t)
      ? "手"
      : Je(t) || He(t) || Me(t) || $e(t)
      ? "股"
      : "";
  }),
  (exports.getUnit = function (e, t) {
    return Ge(e) ? 1 : Ze(e) ? 10 : Ie(t) || _e(t) || Fe(t) || Qe(t) ? 100 : 1;
  }),
  (exports.judgeTrading = function (e, t, r) {
    if (rt(t) || nt(t)) return { isTrading: !0 };
    var n = ((r = Array.isArray(r) ? r[0] : r).split("|") || [])
      .map(function (e) {
        return e.split("_");
      })
      .filter(function (r) {
        return Ke(e)
          ? "CYB" === r[0]
          : Ge(e)
          ? "KCB" === r[0]
          : We(e) || Xe(e) || "ZQ-GZ" === e
          ? "ZQ" === r[0]
          : Ve(e)
          ? "JW" === r[0]
          : Je(t)
          ? "NEWHK" === r[0]
          : Ie(t) || _e(t) || Fe(t) || ze(t) || Qe(t)
          ? "NEWSH" === r[0]
          : He(t)
          ? "NEWUS" === r[0]
          : Me(t)
          ? "UK" === r[0]
          : Ye(e)
          ? "DE" === r[0]
          : tt(e)
          ? "SGXS" === r[0]
          : void 0;
      });
    return {
      isTrading: "open" === n[0][1],
      isAuctionTime: "盘前竞价" === n[0][2],
      isWaitingForTrading: "等待开盘" === n[0][2],
      isAfterTrading: "盘后交易中" === n[0][2],
    };
  }),
  (exports.mockBridge = Le);
