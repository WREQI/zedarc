var t = require("../../../../../@babel/runtime/helpers/typeof"),
  e = {};
try {
  !(function (t, n) {
    if (
      new t("q=%2B").get("q") !== n ||
      new t({ q: n }).get("q") !== n ||
      new t([["q", n]]).get("q") !== n ||
      "q=%0A" !== new t("q=\n").toString() ||
      "q=+%26" !== new t({ q: " &" }).toString() ||
      "q=%25zx" !== new t({ q: "%zx" }).toString()
    )
      throw t;
    e.URLSearchParams = t;
  })(URLSearchParams, "+");
} catch (t) {
  !(function (t, n, r) {
    var a = t.create,
      i = t.defineProperty,
      s = /[!'\(\)~]|%20|%00/g,
      c = /%(?![0-9a-fA-F]{2})/g,
      o = /\+/g,
      u = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
      },
      h = {
        append: function (t, e) {
          g(this._ungap, t, e);
        },
        delete: function (t) {
          delete this._ungap[t];
        },
        get: function (t) {
          return this.has(t) ? this._ungap[t][0] : null;
        },
        getAll: function (t) {
          return this.has(t) ? this._ungap[t].slice(0) : [];
        },
        has: function (t) {
          return t in this._ungap;
        },
        set: function (t, e) {
          this._ungap[t] = [n(e)];
        },
        forEach: function (t, e) {
          var r = this;
          for (var a in r._ungap) r._ungap[a].forEach(i, a);
          function i(i) {
            t.call(e, i, n(a), r);
          }
        },
        toJSON: function () {
          return {};
        },
        toString: function () {
          var t = [];
          for (var e in this._ungap)
            for (var n = d(e), r = 0, a = this._ungap[e]; r < a.length; r++)
              t.push(n + "=" + d(a[r]));
          return t.join("&");
        },
      };
    for (var f in h)
      i(l.prototype, f, { configurable: !0, writable: !0, value: h[f] });
    function l(t) {
      var e = a(null);
      switch ((i(this, "_ungap", { value: e }), !0)) {
        case !t:
          break;
        case "string" == typeof t:
          "?" === t.charAt(0) && (t = t.slice(1));
          for (var n = t.split("&"), s = 0, c = n.length; s < c; s++) {
            var o = (u = n[s]).indexOf("=");
            -1 < o
              ? g(e, v(u.slice(0, o)), v(u.slice(o + 1)))
              : u.length && g(e, v(u), "");
          }
          break;
        case r(t):
          for (s = 0, c = t.length; s < c; s++) {
            var u;
            g(e, (u = t[s])[0], u[1]);
          }
          break;
        case "forEach" in t:
          t.forEach(p, e);
          break;
        default:
          for (var h in t) g(e, h, t[h]);
      }
    }
    function p(t, e) {
      g(this, e, t);
    }
    function g(t, e, n) {
      var a = r(n) ? n.join(",") : n;
      e in t ? t[e].push(a) : (t[e] = [a]);
    }
    function v(t) {
      return decodeURIComponent(t.replace(c, "%25").replace(o, " "));
    }
    function d(t) {
      return encodeURIComponent(t).replace(s, m);
    }
    function m(t) {
      return u[t];
    }
    e.URLSearchParams = l;
  })(Object, String, Array.isArray);
}
!(function (e) {
  var n = !1;
  try {
    n = !!Symbol.iterator;
  } catch (t) {}
  function r(t, e) {
    var r = [];
    return (
      t.forEach(e, r),
      n
        ? r[Symbol.iterator]()
        : {
            next: function () {
              var t = r.shift();
              return { done: void 0 === t, value: t };
            },
          }
    );
  }
  "forEach" in e ||
    (e.forEach = function (t, e) {
      var n = this,
        r = Object.create(null);
      this.toString()
        .replace(/=[\s\S]*?(?:&|$)/g, "=")
        .split("=")
        .forEach(function (a) {
          a.length &&
            !(a in r) &&
            (r[a] = n.getAll(a)).forEach(function (r) {
              t.call(e, r, a, n);
            });
        });
    }),
    "keys" in e ||
      (e.keys = function () {
        return r(this, function (t, e) {
          this.push(e);
        });
      }),
    "values" in e ||
      (e.values = function () {
        return r(this, function (t, e) {
          this.push(t);
        });
      }),
    "entries" in e ||
      (e.entries = function () {
        return r(this, function (t, e) {
          this.push([e, t]);
        });
      }),
    n && !(Symbol.iterator in e) && (e[Symbol.iterator] = e.entries),
    "sort" in e ||
      (e.sort = function () {
        for (
          var t,
            e,
            n,
            r = this.entries(),
            a = r.next(),
            i = a.done,
            s = [],
            c = Object.create(null);
          !i;

        )
          (e = (n = a.value)[0]),
            s.push(e),
            e in c || (c[e] = []),
            c[e].push(n[1]),
            (i = (a = r.next()).done);
        for (s.sort(), t = 0; t < s.length; t++) this.delete(s[t]);
        for (t = 0; t < s.length; t++) (e = s[t]), this.append(e, c[e].shift());
      }),
    (function (n) {
      var r = n.defineProperty,
        a = n.getOwnPropertyDescriptor,
        i = function (t) {
          var n = t.append;
          (t.append = e.append),
            URLSearchParams.call(t, t._usp.search.slice(1)),
            (t.append = n);
        },
        s = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError(
              "'searchParams' accessed on an object that does not implement interface " +
                e.name
            );
        },
        c = function (t) {
          var c,
            o,
            u = t.prototype,
            h = a(u, "searchParams"),
            f = a(u, "href"),
            l = a(u, "search");
          !h &&
            l &&
            l.set &&
            ((o = (function (t) {
              function n(n, r) {
                e.append.call(this, n, r),
                  (n = this.toString()),
                  t.set.call(this._usp, n ? "?" + n : "");
              }
              function a(n) {
                e.delete.call(this, n),
                  (n = this.toString()),
                  t.set.call(this._usp, n ? "?" + n : "");
              }
              function i(n, r) {
                e.set.call(this, n, r),
                  (n = this.toString()),
                  t.set.call(this._usp, n ? "?" + n : "");
              }
              return function (t, e) {
                return (
                  (t.append = n),
                  (t.delete = a),
                  (t.set = i),
                  r(t, "_usp", { configurable: !0, writable: !0, value: e })
                );
              };
            })(l)),
            (c = function (t, e) {
              return (
                r(t, "_searchParams", {
                  configurable: !0,
                  writable: !0,
                  value: o(e, t),
                }),
                e
              );
            }),
            n.defineProperties(u, {
              href: {
                get: function () {
                  return f.get.call(this);
                },
                set: function (t) {
                  var e = this._searchParams;
                  f.set.call(this, t), e && i(e);
                },
              },
              search: {
                get: function () {
                  return l.get.call(this);
                },
                set: function (t) {
                  var e = this._searchParams;
                  l.set.call(this, t), e && i(e);
                },
              },
              searchParams: {
                get: function () {
                  return (
                    s(this, t),
                    this._searchParams ||
                      c(this, new URLSearchParams(this.search.slice(1)))
                  );
                },
                set: function (e) {
                  s(this, t), c(this, e);
                },
              },
            }));
        };
      try {
        c(HTMLAnchorElement),
          /^function|object$/.test(
            "undefined" == typeof URL ? "undefined" : t(URL)
          ) &&
            URL.prototype &&
            c(URL);
      } catch (t) {}
    })(Object);
})(e.URLSearchParams.prototype);
var n = e.URLSearchParams;
exports.URLSearchParams = n;
