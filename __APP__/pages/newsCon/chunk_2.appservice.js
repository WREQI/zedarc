$gwx11_XC_2 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx11_XC_2 || [];
    function gz$gwx11_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1;
    }
    function gz$gwx11_XC_2_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2)
        return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2;
      __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div page-tsyb-transfer data-v-0afd03de"]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "data-v-0afd03de"]);
        Z([3, "0afd03de-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "0afd03de-1"]);
        Z(z[5]);
        Z([[7], [3, "d"]]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z(z[3]);
        Z([3, "0afd03de-2"]);
        Z(z[10]);
      })(__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2);
      return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx11_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx11_XC_2 = true;
    var x = [
      "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml",
      "./pages/newsCon/tsyb/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx11_XC_2_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx11_XC_2_2();
      var hON = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var oRN = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(hON, oRN);
      var oPN = _v();
      _(hON, oPN);
      if (_oz(z, 5, e, s, gg)) {
        oPN.wxVkey = 1;
        var lSN = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oPN, lSN);
      }
      var cQN = _v();
      _(hON, cQN);
      if (_oz(z, 10, e, s, gg)) {
        cQN.wxVkey = 1;
        var aTN = _mz(
          z,
          "tsyb-transfer",
          ["bind:__l", 11, "bindready", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(cQN, aTN);
      }
      oPN.wxXCkey = 1;
      oPN.wxXCkey = 3;
      cQN.wxXCkey = 1;
      cQN.wxXCkey = 3;
      _(r, hON);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx11_XC_2";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx11_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml"
  ] = [
    $gwx11_XC_2,
    "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml"
  ] = $gwx11_XC_2(
    "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/newsCon/tsyb/index.wxml"] = [
    $gwx11_XC_2,
    "./pages/newsCon/tsyb/index.wxml",
  ];
else
  __wxAppCode__["pages/newsCon/tsyb/index.wxml"] = $gwx11_XC_2(
    "./pages/newsCon/tsyb/index.wxml"
  );
__wxRoute = "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.js";
define(
  "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
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
          ? o(r, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
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
            (null == c ? void 0 : c.enumerable) &&
              Object.defineProperty(t, i, c);
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
        throw new TypeError(
          "arrayFormatSeparator must be single character string"
        );
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
                "Expected `encodedURI` to be of type `string`, got `" +
                  n(r) +
                  "`"
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
              ? "string[]" === t &&
                "none" !== e.arrayFormat &&
                "string" == typeof r
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
                var a =
                    "string" == typeof t && t.includes(r.arrayFormatSeparator),
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
                  var i =
                    null === n ? [] : F(n, r).split(r.arrayFormatSeparator);
                  void 0 !== a[e]
                    ? (a[e] = [].concat(t(a[e]), t(i)))
                    : (a[e] = i);
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
              (a =
                null == (n = null == c ? void 0 : c.split("?")) ? void 0 : n[0])
                ? a
                : "",
            query: S(N(r), t),
          },
          t && t.parseFragmentIdentifier && u
            ? { fragmentIdentifier: F(u, t) }
            : {}
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
                Object.assign(t, {
                  p_showNav: "detail" === o ? 1 : 0,
                  openid: i,
                }),
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
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.js",
  }
);
require("pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.js");
__wxRoute = "pages/newsCon/tsyb/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/newsCon/tsyb/index.js";
define(
  "pages/newsCon/tsyb/index.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      t = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable,
      s = function (e, t, n) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      c = require("../../../common/vendor.js"),
      p = {
        components: {
          TsybTransfer: function () {
            return "../@tencent/stock-tsyb-transfer/modules/Supplier.js";
          },
        },
        data: function () {
          return { skin: "white", params: {} };
        },
        onLoad: function (r) {
          try {
            var p = c.wx$1.getStorageSync("user/skin"),
              l = c.wx$1.getStorageSync("_qluin");
            (this.skin = p || this.skin),
              (this.params =
                ((u = (function (r, t) {
                  for (var n in t || (t = {})) a.call(t, n) && s(r, n, t[n]);
                  if (o) {
                    var c,
                      p = e(o(t));
                    try {
                      for (p.s(); !(c = p.n()).done; ) {
                        n = c.value;
                        i.call(t, n) && s(r, n, t[n]);
                      }
                    } catch (e) {
                      p.e(e);
                    } finally {
                      p.f();
                    }
                  }
                  return r;
                })({}, r)),
                t(u, n({ openid: l }))));
          } catch (e) {
            this.params = r;
          }
          var u;
          c.wx$1.setNavigationBarTitle({ title: "脱水研报" });
        },
        methods: {
          onPageReady: function (e) {
            c.wx$1.redirectTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(e)
              ),
            });
          },
        },
      };
    Array ||
      (
        c.resolveComponent("mp-privacy-dialog") +
        c.resolveComponent("stock-privacy-dialog") +
        c.resolveComponent("TsybTransfer")
      )();
    var l = c._export_sfc(p, [
      [
        "render",
        function (e, r, t, n, o, a) {
          return {
            a: e.rootFontSize,
            b: c.p({ "no-auto": !0 }),
            c: c.o(a.onPageReady, 293),
            d: c.p({ params: o.params }),
            e: o.skin,
          };
        },
      ],
      ["__scopeId", "data-v-0afd03de"],
    ]);
    wx.createPage(l);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/newsCon/tsyb/index.js",
  }
);
require("pages/newsCon/tsyb/index.js");
