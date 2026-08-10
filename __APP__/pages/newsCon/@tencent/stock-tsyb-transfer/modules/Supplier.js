require("../../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (r, e, t) {
    return e in r
      ? o(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t);
  },
  s = function (r, e) {
    for (var t in e || (e = {})) c.call(e, t) && l(r, t, e[t]);
    if (i) {
      var n,
        o = a(i(e));
      try {
        for (o.s(); !(n = o.n()).done; ) {
          t = n.value;
          u.call(e, t) && l(r, t, e[t]);
        }
      } catch (r) {
        o.e(r);
      } finally {
        o.f();
      }
    }
    return r;
  },
  f = require("../../../../../common/vendor.js"),
  p = "%[a-f0-9]{2}",
  y = new RegExp("(" + p + ")|([^%]+?)", "gi"),
  m = new RegExp("(" + p + ")+", "gi");
function d(r, e) {
  try {
    return [decodeURIComponent(r.join(""))];
  } catch (r) {}
  if (1 === r.length) return r;
  e = e || 1;
  var t = r.slice(0, e),
    n = r.slice(e);
  return Array.prototype.concat.call([], d(t), d(n));
}
function b(r) {
  try {
    return decodeURIComponent(r);
  } catch (n) {
    for (var e = r.match(y) || [], t = 1; t < e.length; t++)
      e = (r = d(e, t).join("")).match(y) || [];
    return r;
  }
}
function v(r, e) {
  var t = {};
  if (Array.isArray(e)) {
    var n,
      o = a(e);
    try {
      for (o.s(); !(n = o.n()).done; ) {
        var i = n.value,
          c = Object.getOwnPropertyDescriptor(r, i);
        (null == c ? void 0 : c.enumerable) && Object.defineProperty(t, i, c);
      }
    } catch (r) {
      o.e(r);
    } finally {
      o.f();
    }
  } else {
    var u,
      l = a(Reflect.ownKeys(r));
    try {
      for (l.s(); !(u = l.n()).done; ) {
        var s = u.value,
          f = Object.getOwnPropertyDescriptor(r, s);
        f.enumerable && e(s, r[s], r) && Object.defineProperty(t, s, f);
      }
    } catch (r) {
      l.e(r);
    } finally {
      l.f();
    }
  }
  return t;
}
function g(r, e) {
  if ("string" != typeof r || "string" != typeof e)
    throw new TypeError("Expected the arguments to be of type `string`");
  if ("" === r || "" === e) return [];
  var t = r.indexOf(e);
  return -1 === t ? [] : [r.slice(0, t), r.slice(t + e.length)];
}
var h = Symbol("encodeFragmentIdentifier");
function j(r) {
  if ("string" != typeof r || 1 !== r.length)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function O(r, e) {
  return e.encode
    ? e.strict
      ? encodeURIComponent(r).replaceAll(/[!'()*]/g, function (r) {
          return "%".concat(r.charCodeAt(0).toString(16).toUpperCase());
        })
      : encodeURIComponent(r)
    : r;
}
function F(r, e) {
  return e.decode
    ? (function (r) {
        if ("string" != typeof r)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" + n(r) + "`"
          );
        try {
          return decodeURIComponent(r);
        } catch (e) {
          return (function (r) {
            for (
              var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = m.exec(r);
              t;

            ) {
              try {
                e[t[0]] = decodeURIComponent(t[0]);
              } catch (r) {
                var n = b(t[0]);
                n !== t[0] && (e[t[0]] = n);
              }
              t = m.exec(r);
            }
            e["%C2"] = "�";
            for (var a = 0, o = Object.keys(e); a < o.length; a++) {
              var i = o[a];
              r = r.replace(new RegExp(i, "g"), e[i]);
            }
            return r;
          })(r);
        }
      })(r)
    : r;
}
function w(r) {
  var e = r.indexOf("#");
  return -1 !== e && (r = r.slice(0, e)), r;
}
function k(r, e, t) {
  return "string" === t && "string" == typeof r
    ? r
    : "function" == typeof t && "string" == typeof r
    ? t(r)
    : ("boolean" === t && null === r) ||
      ("boolean" !== t ||
      null === r ||
      ("true" !== r.toLowerCase() && "false" !== r.toLowerCase())
        ? "boolean" !== t ||
          null === r ||
          ("1" !== r.toLowerCase() && "0" !== r.toLowerCase())
          ? "string[]" === t && "none" !== e.arrayFormat && "string" == typeof r
            ? [r]
            : "number[]" !== t ||
              "none" === e.arrayFormat ||
              Number.isNaN(Number(r)) ||
              "string" != typeof r ||
              "" === r.trim()
            ? "number" !== t ||
              Number.isNaN(Number(r)) ||
              "string" != typeof r ||
              "" === r.trim()
              ? !e.parseBooleans ||
                null === r ||
                ("true" !== r.toLowerCase() && "false" !== r.toLowerCase())
                ? e.parseNumbers &&
                  !Number.isNaN(Number(r)) &&
                  "string" == typeof r &&
                  "" !== r.trim()
                  ? Number(r)
                  : r
                : "true" === r.toLowerCase()
              : Number(r)
            : [Number(r)]
          : "1" === r.toLowerCase()
        : "true" === r.toLowerCase());
}
function N(r) {
  var e = (r = w(r)).indexOf("?");
  return -1 === e ? "" : r.slice(e + 1);
}
function S(r, o) {
  j(
    (o = s(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
        types: Object.create(null),
      },
      o
    )).arrayFormatSeparator
  );
  var i = (function (r) {
      var e;
      switch (r.arrayFormat) {
        case "index":
          return function (r, t, n) {
            (e = /\[(\d*)]$/.exec(r)),
              (r = r.replace(/\[\d*]$/, "")),
              e
                ? (void 0 === n[r] && (n[r] = {}), (n[r][e[1]] = t))
                : (n[r] = t);
          };
        case "bracket":
          return function (r, n, a) {
            (e = /(\[])$/.exec(r)),
              (r = r.replace(/\[]$/, "")),
              e
                ? void 0 !== a[r]
                  ? (a[r] = [].concat(t(a[r]), [n]))
                  : (a[r] = [n])
                : (a[r] = n);
          };
        case "colon-list-separator":
          return function (r, n, a) {
            (e = /(:list)$/.exec(r)),
              (r = r.replace(/:list$/, "")),
              e
                ? void 0 !== a[r]
                  ? (a[r] = [].concat(t(a[r]), [n]))
                  : (a[r] = [n])
                : (a[r] = n);
          };
        case "comma":
        case "separator":
          return function (e, t, n) {
            var a = "string" == typeof t && t.includes(r.arrayFormatSeparator),
              o =
                "string" == typeof t &&
                !a &&
                F(t, r).includes(r.arrayFormatSeparator);
            t = o ? F(t, r) : t;
            var i =
              a || o
                ? t.split(r.arrayFormatSeparator).map(function (e) {
                    return F(e, r);
                  })
                : null === t
                ? t
                : F(t, r);
            n[e] = i;
          };
        case "bracket-separator":
          return function (e, n, a) {
            var o = /(\[])$/.test(e);
            if (((e = e.replace(/\[]$/, "")), o)) {
              var i = null === n ? [] : F(n, r).split(r.arrayFormatSeparator);
              void 0 !== a[e] ? (a[e] = [].concat(t(a[e]), t(i))) : (a[e] = i);
            } else a[e] = n ? F(n, r) : n;
          };
        default:
          return function (r, e, n) {
            void 0 !== n[r]
              ? (n[r] = [].concat(t([n[r]].flat()), [e]))
              : (n[r] = e);
          };
      }
    })(o),
    c = Object.create(null);
  if ("string" != typeof r) return c;
  if (!(r = r.trim().replace(/^[?#&]/, ""))) return c;
  var u,
    l = a(r.split("&"));
  try {
    for (l.s(); !(u = l.n()).done; ) {
      var f = u.value;
      if ("" !== f) {
        var p = o.decode ? f.replaceAll("+", " ") : f,
          y = g(p, "="),
          m = e(y, 2),
          d = m[0],
          b = m[1];
        void 0 === d && (d = p),
          (b =
            void 0 === b
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  o.arrayFormat
                )
              ? b
              : F(b, o)),
          i(F(d, o), b, c);
      }
    }
  } catch (r) {
    l.e(r);
  } finally {
    l.f();
  }
  for (var v = 0, h = Object.entries(c); v < h.length; v++) {
    var O = e(h[v], 2),
      w = O[0],
      N = O[1];
    if ("object" == n(N) && null !== N && "string" !== o.types[w])
      for (var S = 0, x = Object.entries(N); S < x.length; S++) {
        var C = e(x[S], 2),
          E = C[0],
          I = C[1],
          A = o.types[w] ? o.types[w].replace("[]", "") : void 0;
        N[E] = k(I, o, A);
      }
    else
      "object" == n(N) && null !== N && "string" === o.types[w]
        ? (c[w] = Object.values(N).join(o.arrayFormatSeparator))
        : (c[w] = k(N, o, o.types[w]));
  }
  return !1 === o.sort
    ? c
    : (!0 === o.sort
        ? Object.keys(c).sort()
        : Object.keys(c).sort(o.sort)
      ).reduce(function (r, e) {
        var t = c[e];
        return (
          (r[e] =
            Boolean(t) && "object" == n(t) && !Array.isArray(t)
              ? (function r(e) {
                  return Array.isArray(e)
                    ? e.sort()
                    : "object" == n(e)
                    ? r(Object.keys(e))
                        .sort(function (r, e) {
                          return Number(r) - Number(e);
                        })
                        .map(function (r) {
                          return e[r];
                        })
                    : e;
                })(t)
              : t),
          r
        );
      }, Object.create(null));
}
function x(r, n) {
  if (!r) return "";
  j(
    (n = s(
      {
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
      },
      n
    )).arrayFormatSeparator
  );
  for (
    var a,
      o = (function (r) {
        switch (r.arrayFormat) {
          case "index":
            return function (e) {
              return function (n, a) {
                var o = n.length;
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && "" === a)
                  ? n
                  : [].concat(
                      t(n),
                      null === a
                        ? [[O(e, r), "[", o, "]"].join("")]
                        : [[O(e, r), "[", O(o, r), "]=", O(a, r)].join("")]
                    );
              };
            };
          case "bracket":
            return function (e) {
              return function (n, a) {
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && "" === a)
                  ? n
                  : [].concat(
                      t(n),
                      null === a
                        ? [[O(e, r), "[]"].join("")]
                        : [[O(e, r), "[]=", O(a, r)].join("")]
                    );
              };
            };
          case "colon-list-separator":
            return function (e) {
              return function (n, a) {
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && "" === a)
                  ? n
                  : [].concat(
                      t(n),
                      null === a
                        ? [[O(e, r), ":list="].join("")]
                        : [[O(e, r), ":list=", O(a, r)].join("")]
                    );
              };
            };
          case "comma":
          case "separator":
          case "bracket-separator":
            var e = "bracket-separator" === r.arrayFormat ? "[]=" : "=";
            return function (t) {
              return function (n, a) {
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && "" === a)
                  ? n
                  : ((a = null === a ? "" : a),
                    0 === n.length
                      ? [[O(t, r), e, O(a, r)].join("")]
                      : [[n, O(a, r)].join(r.arrayFormatSeparator)]);
              };
            };
          default:
            return function (e) {
              return function (n, a) {
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && "" === a)
                  ? n
                  : [].concat(
                      t(n),
                      null === a
                        ? [O(e, r)]
                        : [[O(e, r), "=", O(a, r)].join("")]
                    );
              };
            };
        }
      })(n),
      i = {},
      c = 0,
      u = Object.entries(r);
    c < u.length;
    c++
  ) {
    var l = e(u[c], 2),
      f = l[0],
      p = l[1];
    (a = f),
      (n.skipNull && null == r[a]) ||
        (n.skipEmptyString && "" === r[a]) ||
        (i[f] = p);
  }
  var y = Object.keys(i);
  return (
    !1 !== n.sort && y.sort(n.sort),
    y
      .map(function (e) {
        var t = r[e];
        return void 0 === t
          ? ""
          : null === t
          ? O(e, n)
          : Array.isArray(t)
          ? 0 === t.length && "bracket-separator" === n.arrayFormat
            ? O(e, n) + "[]"
            : t.reduce(o(e), []).join("&")
          : O(e, n) + "=" + O(t, n);
      })
      .filter(function (r) {
        return r.length > 0;
      })
      .join("&")
  );
}
function C(r, t) {
  var n, a;
  t = s({ decode: !0 }, t);
  var o = g(r, "#"),
    i = e(o, 2),
    c = i[0],
    u = i[1];
  return (
    void 0 === c && (c = r),
    s(
      {
        url:
          null !=
          (a = null == (n = null == c ? void 0 : c.split("?")) ? void 0 : n[0])
            ? a
            : "",
        query: S(N(r), t),
      },
      t && t.parseFragmentIdentifier && u ? { fragmentIdentifier: F(u, t) } : {}
    )
  );
}
function E(e, t) {
  t = s(r({ encode: !0, strict: !0 }, h, !0), t);
  var n = w(e.url).split("?")[0] || "",
    a = N(e.url),
    o = x(s(s({}, S(a, s({ sort: !1 }, t))), e.query), t);
  o && (o = "?".concat(o));
  var i = (function (r) {
    var e = "",
      t = r.indexOf("#");
    return -1 !== t && (e = r.slice(t)), e;
  })(e.url);
  if ("string" == typeof e.fragmentIdentifier) {
    var c = new URL(n);
    (c.hash = e.fragmentIdentifier),
      (i = t[h] ? c.hash : "#".concat(e.fragmentIdentifier));
  }
  return "".concat(n).concat(o).concat(i);
}
function I(e, t, n) {
  var a = C(e, (n = s(r({ parseFragmentIdentifier: !0 }, h, !1), n))),
    o = a.url,
    i = a.query,
    c = a.fragmentIdentifier;
  return E({ url: o, query: v(i, t), fragmentIdentifier: c }, n);
}
var A = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        exclude: function (r, e, t) {
          return I(
            r,
            Array.isArray(e)
              ? function (r) {
                  return !e.includes(r);
                }
              : function (r, t) {
                  return !e(r, t);
                },
            t
          );
        },
        extract: N,
        parse: S,
        parseUrl: C,
        pick: I,
        stringify: x,
        stringifyUrl: E,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  q = {
    props: {
      theme: { type: String, default: "" },
      params: { type: Object, default: {} },
    },
    setup: function (r, e) {
      var t,
        n = e.emit;
      f.onMounted(function () {
        var e = (function () {
          var e = {};
          Object.keys(r.params).forEach(function (t) {
            -1 == ["path", "__btimestamp", "openid"].indexOf(t) &&
              (e[t] = r.params[t]);
          });
          var t = {},
            n = r.params,
            a = n.path,
            o = void 0 === a ? "index" : a,
            i = n.openid;
          return (
            Object.assign(t, { p_showNav: "detail" === o ? 1 : 0, openid: i }),
            "https://vip.sfconnect.cn/third-party-report/?"
              .concat(
                A.stringify(s({ fchannel_id_fm: "400500000" }, t), {
                  encode: !1,
                }),
                "#/"
              )
              .concat(o, "?")
              .concat(A.stringify(e, { encode: !1 }))
          );
        })();
        t = setTimeout(function () {
          n("ready", e);
        }, 800);
      }),
        f.onBeforeUnmount(function () {
          t && (clearTimeout(t), (t = null));
        });
    },
  },
  R = f._export_sfc(q, [
    [
      "render",
      function (r, e, t, n, a, o) {
        return {};
      },
    ],
  ]);
wx.createComponent(R);
