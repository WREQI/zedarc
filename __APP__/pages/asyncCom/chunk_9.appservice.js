$gwx1_XC_33 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_33 || [];
    function gz$gwx1_XC_33_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1;
    }
    function gz$gwx1_XC_33_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "d"]]);
        Z([
          [4],
          [[5], [[5], [[5], [1, "navbar-wrapper"]], [1, "r"]], [[7], [3, "c"]]],
        ]);
        Z([3, "7f96717d-0"]);
        Z([[7], [3, "e"]]);
        Z([3, "navbar"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_33 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_33 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml",
      "./pages/asyncCom/components/navBar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_33_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_33_2();
      var cKM = _v();
      _(r, cKM);
      if (_oz(z, 0, e, s, gg)) {
        cKM.wxVkey = 1;
        var oLM = _mz(
          z,
          "navbar",
          [
            "bind:__l",
            1,
            "bindclickTab",
            1,
            "class",
            2,
            "uI",
            3,
            "uP",
            4,
            "uR",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        _(cKM, oLM);
      }
      cKM.wxXCkey = 1;
      cKM.wxXCkey = 3;
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_33";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_33();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml"] =
    [
      $gwx1_XC_33,
      "./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml",
    ];
else
  __wxAppCode__["pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml"] =
    $gwx1_XC_33("./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml");
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/navBar/index.wxml"] = [
    $gwx1_XC_33,
    "./pages/asyncCom/components/navBar/index.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/navBar/index.wxml"] = $gwx1_XC_33(
    "./pages/asyncCom/components/navBar/index.wxml"
  );
__wxRoute = "pages/asyncCom/@tencent/st-components/mp/Navbar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-components/mp/Navbar/index.js";
define(
  "pages/asyncCom/@tencent/st-components/mp/Navbar/index.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../../../../../@babel/runtime/helpers/typeof"),
      r = Object.defineProperty,
      i = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable,
      u = function (e, t, n) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      s = function (e, t, n) {
        return new Promise(function (r, i) {
          var a = function (e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            },
            o = function (e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            },
            u = function (e) {
              return e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
            };
          u((n = n.apply(e, t)).next());
        });
      },
      c = require("../../../../../../common/vendor.js"),
      f = {},
      d = (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
        }
        var n = {};
        return (
          (t.m = e),
          (t.c = n),
          (t.d = function (e, n, r) {
            t.o(e, n) ||
              Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r,
              });
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, "a", n), n;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = ""),
          t((t.s = 0))
        );
      })([
        function (e, t, r) {
          var i =
              "function" == typeof Symbol && "symbol" == n(Symbol.iterator)
                ? function (e) {
                    return n(e);
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : n(e);
                  },
            a = r(1);
          e.exports = function (t, n) {
            var r =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              o =
                "object" ===
                  ("undefined" == typeof document
                    ? "undefined"
                    : i(document)) && "string" == typeof document.cookie,
              u =
                "object" === (void 0 === t ? "undefined" : i(t)) &&
                "object" === (void 0 === n ? "undefined" : i(n)) &&
                void 0 !== e,
              s = (!o && !u) || (o && u),
              c = function (e) {
                if (u) {
                  var r = t.headers.cookie || "";
                  return (
                    e &&
                      (r = (r = n.getHeaders())["set-cookie"]
                        ? r["set-cookie"]
                            .map(function (e) {
                              return e.split(";")[0];
                            })
                            .join(";")
                        : ""),
                    r
                  );
                }
                if (o) return document.cookie || "";
              },
              f = function (e, t) {
                if (!t) return e;
                try {
                  return JSON.parse(e);
                } catch (t) {
                  return e;
                }
              },
              d = {
                parseJSON: r,
                set: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : { path: "/" };
                  if (!s)
                    if (
                      ((t =
                        "object" === (void 0 === t ? "undefined" : i(t))
                          ? JSON.stringify(t)
                          : t),
                      u)
                    ) {
                      var o = (function () {
                        var e = n.getHeader("Set-Cookie");
                        return (e = "string" == typeof e ? [e] : e) || [];
                      })();
                      o.push(a.serialize(e, t, r)),
                        (function (e) {
                          n.setHeader("Set-Cookie", e);
                        })(o);
                    } else document.cookie = a.serialize(e, t, r);
                },
                setAll: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  s ||
                    (Array.isArray(e) &&
                      e.forEach(function (e) {
                        var t = e.name,
                          n = void 0 === t ? "" : t,
                          r = e.value,
                          i = void 0 === r ? "" : r,
                          a = e.opts,
                          o = void 0 === a ? { path: "/" } : a;
                        d.set(n, i, o);
                      }));
                },
                get: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { fromRes: !1, parseJSON: d.parseJSON };
                  if (s) return "";
                  var n = a.parse(c(t.fromRes))[e];
                  return f(n, t.parseJSON);
                },
                getAll: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { fromRes: !1, parseJSON: d.parseJSON };
                  if (s) return {};
                  var t = a.parse(c(e.fromRes));
                  for (var n in t) t[n] = f(t[n], e.parseJSON);
                  return t;
                },
                remove: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { path: "/" };
                  s || ((t.expires = new Date(0)), d.set(e, "", t));
                },
                removeAll: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { path: "/" };
                  if (!s) {
                    var t = a.parse(c());
                    for (var n in t) d.remove(n, e);
                  }
                },
                nodeCookie: a,
              };
            return d;
          };
        },
        function (e, t, n) {
          function r(e, t) {
            try {
              return t(e);
            } catch (t) {
              return e;
            }
          }
          /*!
           * cookie
           * Copyright(c) 2012-2014 Roman Shtylman
           * Copyright(c) 2015 Douglas Christopher Wilson
           * MIT Licensed
           */ (t.parse = function (e, t) {
            if ("string" != typeof e)
              throw new TypeError("argument str must be a string");
            for (
              var n = {}, a = t || {}, u = e.split(o), s = a.decode || i, c = 0;
              c < u.length;
              c++
            ) {
              var f = u[c],
                d = f.indexOf("=");
              if (!(d < 0)) {
                var p = f.substr(0, d).trim(),
                  l = f.substr(++d, f.length).trim();
                '"' == l[0] && (l = l.slice(1, -1)),
                  null == n[p] && (n[p] = r(l, s));
              }
            }
            return n;
          }),
            (t.serialize = function (e, t, n) {
              var r = n || {},
                i = r.encode || a;
              if ("function" != typeof i)
                throw new TypeError("option encode is invalid");
              if (!u.test(e)) throw new TypeError("argument name is invalid");
              var o = i(t);
              if (o && !u.test(o))
                throw new TypeError("argument val is invalid");
              var s = e + "=" + o;
              if (null != r.maxAge) {
                var c = r.maxAge - 0;
                if (isNaN(c)) throw new Error("maxAge should be a Number");
                s += "; Max-Age=" + Math.floor(c);
              }
              if (r.domain) {
                if (!u.test(r.domain))
                  throw new TypeError("option domain is invalid");
                s += "; Domain=" + r.domain;
              }
              if (r.path) {
                if (!u.test(r.path))
                  throw new TypeError("option path is invalid");
                s += "; Path=" + r.path;
              }
              if (r.expires) {
                if ("function" != typeof r.expires.toUTCString)
                  throw new TypeError("option expires is invalid");
                s += "; Expires=" + r.expires.toUTCString();
              }
              if (
                (r.httpOnly && (s += "; HttpOnly"),
                r.secure && (s += "; Secure"),
                r.sameSite)
              )
                switch (
                  "string" == typeof r.sameSite
                    ? r.sameSite.toLowerCase()
                    : r.sameSite
                ) {
                  case !0:
                    s += "; SameSite=Strict";
                    break;
                  case "lax":
                    s += "; SameSite=Lax";
                    break;
                  case "strict":
                    s += "; SameSite=Strict";
                    break;
                  case "none":
                    s += "; SameSite=None";
                    break;
                  default:
                    throw new TypeError("option sameSite is invalid");
                }
              return s;
            });
          var i = decodeURIComponent,
            a = encodeURIComponent,
            o = /; */,
            u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        },
      ]),
      p =
        (c.commonjsGlobal && c.commonjsGlobal.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(f, "__esModule", { value: !0 });
    var l = p(d),
      v = (function () {
        function e(e, t) {
          this.cookie = (0, l.default)(e, t);
        }
        return (
          (e.prototype.get = function (e, t) {
            return this.cookie.get(e, t);
          }),
          (e.prototype.getAll = function (e) {
            return this.cookie.getAll(e);
          }),
          (e.prototype.set = function (e, t, n) {
            this.cookie.set(e, t, n);
          }),
          (e.prototype.setAll = function (e) {
            this.cookie.setAll(e);
          }),
          (e.prototype.remove = function (e, t) {
            this.cookie.remove(e, t);
          }),
          (e.prototype.getCookiesStr = function () {
            var e = [],
              t = this.getAll();
            for (var n in t) e.push("".concat(n, "=").concat(t[n]));
            return e.join(";");
          }),
          e
        );
      })(),
      h = new (f.default = v)(),
      b = {
        name: "Navbar",
        props: {
          defaultActiveTab: { type: String, default: "" },
          hasAccount: { type: Boolean, default: !0 },
          redPointShowArr: {
            type: Array,
            default: function () {
              return [];
            },
          },
          preloadIcons: {
            type: Array,
            default: function () {
              return [];
            },
          },
          tabList: {
            type: Array,
            default: function () {
              return c.defaultTabList;
            },
          },
          grayTabList: {
            type: Array,
            default: function () {
              return c.defaultGrayTabList;
            },
          },
          needGray: { type: Boolean, default: !1 },
          grayStr: { type: String, default: "" },
          wujiCfg: {
            type: Object,
            default: function () {
              return { appid: "base", schemaid: "navbar_gray", rowid: 1 };
            },
          },
          wujiSdk: { type: Object, default: null },
          skin: { type: String, default: "white" },
          navbarVersion: { type: String, default: "v1" },
          applyTabConfig: { type: Object, default: c.applyTabConfig },
          skinTabConfig: { type: Object, default: c.skinTabConfig },
          mpStyle: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            navs: c.defaultTabList.map(function (e) {
              return e;
            }),
            curActiveTab: "",
            isGrayUser: !1,
            redPointTabs: [],
          };
        },
        watch: {
          isGrayUser: {
            handler: function (e) {
              if (
                ((this.navs = this.tabList.map(function (e) {
                  return e;
                })),
                e)
              ) {
                var t = this.navs.find(function (e) {
                    return "apply" === e.id;
                  }),
                  n = this.grayTabList.map(function (e) {
                    return e;
                  });
                if (t) {
                  var r = n.findIndex(function (e) {
                    return "asset" === e.id;
                  });
                  n.splice(r, 1, t);
                }
                this.navs = n;
              }
              this.navs = this.navs.sort(function (e, t) {
                return e.pos - t.pos;
              });
            },
            immediate: !0,
          },
          hasAccount: {
            handler: function () {
              this.updateAssetTab();
            },
            immediate: !0,
          },
          redPointShowArr: function (e) {
            this.redPointTabs = e;
          },
          defaultActiveTab: {
            handler: function (e) {
              this.curActiveTab = e;
            },
            immediate: !0,
          },
          skin: {
            handler: function () {
              this.updateSkinTabs();
            },
            immediate: !0,
          },
        },
        created: function () {
          return s(
            this,
            null,
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), !this.needGray)) {
                          e.next = 7;
                          break;
                        }
                        if (this.wujiSdk) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        this.judgeGrayUser(), (e.next = 8);
                        break;
                      case 7:
                        this.$emit("judgeGrayUser", this.isGrayUser);
                      case 8:
                        e.next = 12;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 10]]
              );
            })
          );
        },
        methods: {
          updateAssetTab: function () {
            var e = this.hasAccount,
              t = c.defaultTabList.find(function (e) {
                return "asset" === e.id;
              });
            e || (t = this.applyTabConfig);
            var n = this.navs.find(function (e) {
                return "asset" === e.id;
              }),
              r = n ? "asset" : "apply";
            ((n && !e) || (!n && e)) && this.updateTab(r, t),
              this.updateSkinTabs();
          },
          clickTab: function (e, t) {
            (this.curActiveTab = e), this.$emit("clickTab", e, t);
          },
          updateTab: function (e, t) {
            var n = this.navs.findIndex(function (t) {
              return t.id === e;
            });
            -1 !== n &&
              ((t.pos && t.pos === this.navs[n].pos) ||
                (t.pos = this.navs[n].pos),
              this.navs.splice(n, 1, t));
          },
          updateSkinTabs: function () {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              r = n;
            0 === n.length && (r = this.skinTabConfig[this.skin] || []),
              r.forEach(function (n) {
                var r = n.id,
                  s = t.navs.find(function (e) {
                    return e.id === r;
                  }),
                  c = (function (t, n) {
                    for (var r in n || (n = {})) a.call(n, r) && u(t, r, n[r]);
                    if (i) {
                      var s,
                        c = e(i(n));
                      try {
                        for (c.s(); !(s = c.n()).done; ) {
                          r = s.value;
                          o.call(n, r) && u(t, r, n[r]);
                        }
                      } catch (e) {
                        c.e(e);
                      } finally {
                        c.f();
                      }
                    }
                    return t;
                  })({}, s);
                (c.iconLink =
                  n.iconLink || (null == s ? void 0 : s.iconLink) || ""),
                  (c.activeIconLink =
                    n.activeIconLink ||
                    (null == s ? void 0 : s.activeIconLink) ||
                    ""),
                  t.updateTab(r, c);
              });
          },
          getCurTab: function () {
            var e = this;
            return this.navs.find(function (t) {
              return t.id === e.curActiveTab;
            });
          },
          judgeGrayUser: function () {
            return s(
              this,
              null,
              t().mark(function e() {
                var n, r;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = this.grayStr),
                            (e.t0 = void 0 === this.grayStr),
                            !e.t0)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 5), this.getWujiData();
                        case 5:
                          n = e.sent;
                        case 6:
                          (r = h.get("wzq_qluin")) &&
                            ((this.isGrayUser = n.includes(
                              r.slice(-1).toLowerCase()
                            )),
                            this.$emit("judgeGrayUser", this.isGrayUser));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
          getWujiData: function () {
            return s(
              this,
              null,
              t().mark(function e() {
                var n, r;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.wujiSdk.get({
                              appid: this.wujiCfg.appid,
                              schemaid: this.wujiCfg.schemaid,
                              rowid: this.wujiCfg.rowid,
                            })
                          );
                        case 3:
                          return (
                            (r = e.sent),
                            e.abrupt(
                              "return",
                              null == (n = null == r ? void 0 : r.data)
                                ? void 0
                                : n.grayStr
                            )
                          );
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return", "")
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 7]]
                );
              })
            );
          },
        },
      },
      y = c._export_sfc(b, [
        [
          "render",
          function (e, t, n, r, i, a) {
            return {
              a: c.f(i.navs, function (e, t, n) {
                return {
                  a: c.n(i.redPointTabs.includes(e.id) ? "tab-red-dot" : ""),
                  b: i.curActiveTab === e.id ? e.activeIconLink : e.iconLink,
                  c: c.t(e.name),
                  d: t,
                  e: c.n(i.curActiveTab === e.id ? "active" : ""),
                  f: c.o(
                    function (n) {
                      return a.clickTab(e.id, t);
                    },
                    1610,
                    t
                  ),
                };
              }),
              b: c.n("skin-".concat(n.skin)),
              c: c.n(n.navbarVersion),
              d: c.n(n.mpStyle && "mp-navbar-wrap"),
            };
          },
        ],
        ["__scopeId", "data-v-d26801e0"],
      ]);
    wx.createComponent(y);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/asyncCom/@tencent/st-components/mp/Navbar/index.js",
  }
);
require("pages/asyncCom/@tencent/st-components/mp/Navbar/index.js");
__wxRoute = "pages/asyncCom/components/navBar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/asyncCom/components/navBar/index.js";
define(
  "pages/asyncCom/components/navBar/index.js",
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
    require("../../../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = function (t, e, n) {
        return new Promise(function (a, i) {
          var s = function (t) {
              try {
                o(n.next(t));
              } catch (t) {
                i(t);
              }
            },
            c = function (t) {
              try {
                o(n.throw(t));
              } catch (t) {
                i(t);
              }
            },
            o = function (t) {
              return t.done ? a(t.value) : Promise.resolve(t.value).then(s, c);
            };
          o((n = n.apply(t, e)).next());
        });
      },
      n = require("../../../../common/vendor.js"),
      a = "OdP96fM_eFHulIca3yZEdLpzqNStStx8tHeZuy18GU4",
      i = {
        methods: {
          showSubAbt: function () {
            return e(
              this,
              null,
              t().mark(function e() {
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          new Promise(function (t, e) {
                            n.AbtInfoAPI.getAbtInfo(
                              "xcx_news_subscribe_message_abt",
                              { scenes: 6 }
                            ).then(function (e) {
                              t(e);
                            });
                          })
                        );
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, e);
              })
            );
          },
          informationTabCall: function () {
            return e(
              this,
              null,
              t().mark(function i() {
                var s = this;
                return t().wrap(function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (i.next = 2),
                          n.userinfo.get(!0, function (i) {
                            return e(
                              s,
                              null,
                              t().mark(function s() {
                                var c,
                                  o,
                                  r,
                                  d,
                                  u,
                                  g,
                                  b = this;
                                return t().wrap(
                                  function (s) {
                                    for (;;)
                                      switch ((s.prev = s.next)) {
                                        case 0:
                                          if (
                                            ((c = +i.subscribe),
                                            (o = "blank"),
                                            (r = !1),
                                            (d =
                                              (
                                                n.wx$1.getStorageSync(
                                                  "informationShowGuide"
                                                ) || {}
                                              ).time || 0),
                                            c)
                                          ) {
                                            s.next = 9;
                                            break;
                                          }
                                          return (
                                            (s.next = 6), this.showSubAbt()
                                          );
                                        case 6:
                                          (u = s.sent),
                                            (g =
                                              (u &&
                                                u.data[0] &&
                                                u.data[0].report_info) ||
                                              {}),
                                            n.Request.reportMTAData({
                                              eventName:
                                                "yy.xcx_news_subscribe_message_abt",
                                              report_info: g,
                                            }),
                                            "xcxnews" ===
                                              (o =
                                                (u &&
                                                  u.data[0] &&
                                                  u.data[0].version) ||
                                                "blank") &&
                                            Date.now() - d > 86400
                                              ? (n.wx$1.requestSubscribeMessage(
                                                  {
                                                    tmplIds: [a],
                                                    success: function (i) {
                                                      return e(
                                                        b,
                                                        null,
                                                        t().mark(function e() {
                                                          return t().wrap(
                                                            function (t) {
                                                              for (;;)
                                                                switch (
                                                                  (t.prev =
                                                                    t.next)
                                                                ) {
                                                                  case 0:
                                                                    "accept" ===
                                                                    i[a]
                                                                      ? n.Request.reportMTAData(
                                                                          {
                                                                            eventName:
                                                                              "yy.xcx_news_subscribe_message_success_callback",
                                                                            report_info:
                                                                              g,
                                                                          }
                                                                        )
                                                                      : n.Request.reportMTAData(
                                                                          {
                                                                            eventName:
                                                                              "yy.xcx_news_subscribe_message_reject_callback",
                                                                            report_info:
                                                                              g,
                                                                          }
                                                                        );
                                                                  case 1:
                                                                  case "end":
                                                                    return t.stop();
                                                                }
                                                            },
                                                            e
                                                          );
                                                        })
                                                      );
                                                    },
                                                    fail: function (n) {
                                                      return e(
                                                        b,
                                                        null,
                                                        t().mark(function e() {
                                                          return t().wrap(
                                                            function (t) {
                                                              for (;;)
                                                                switch (
                                                                  (t.prev =
                                                                    t.next)
                                                                ) {
                                                                  case 0:
                                                                  case "end":
                                                                    return t.stop();
                                                                }
                                                            },
                                                            e
                                                          );
                                                        })
                                                      );
                                                    },
                                                  }
                                                ),
                                                (r = !0))
                                              : Date.now() - d < 86400
                                              ? (r = !1)
                                              : Date.now() - d > 86400 &&
                                                (r = !0);
                                        case 9:
                                          n.wx$1.setStorageSync(
                                            "informationShowGuide",
                                            {
                                              showType: o,
                                              showFlag: r,
                                              time: r ? Date.now() : d,
                                            }
                                          );
                                        case 10:
                                        case "end":
                                          return s.stop();
                                      }
                                  },
                                  s,
                                  this
                                );
                              })
                            );
                          })
                        );
                      case 2:
                      case "end":
                        return i.stop();
                    }
                }, i);
              })
            );
          },
        },
      },
      s = n.useBrokerInfo(),
      c = [
        {
          name: "新闻",
          id: "information",
          iconLink:
            "https://st.gtimg.com/design/48b4bdf2d20b6677adc4b30dc0e7d809.png",
          activeIconLink:
            "https://st.gtimg.com/design/48b4bdf2d20b6677adc4b30dc0e7d809.png",
          pos: 1,
        },
        {
          name: "自选",
          id: "choose",
          iconLink:
            "https://st.gtimg.com/design/37157b6edeeb88e7ac4a04d2661d33ec.png",
          activeIconLink:
            "https://st.gtimg.com/design/b312bd57dbc3afaa2f62149f8eae2022.png",
          pos: 2,
        },
        {
          name: "行情",
          id: "market",
          iconLink:
            "https://st.gtimg.com/design/55dc880e79a5f28deb9e5187e5c05133.png",
          activeIconLink:
            "https://st.gtimg.com/design/52f83b602db36fcb93ef15fae078016a.png",
          pos: 3,
        },
        {
          name: "交易",
          id: "asset",
          iconLink:
            "https://st.gtimg.com/design/d3dbb0b4383d4d6968b0a0b3c470d00b.png",
          activeIconLink:
            "https://st.gtimg.com/design/e4e08dbed5abede828e15c39f5ab51b9.png",
          pos: 4,
        },
        {
          name: "我的",
          id: "account",
          iconLink:
            "https://st.gtimg.com/design/c52dc31078961084a98ccce4b15dec4b.png",
          activeIconLink:
            "https://st.gtimg.com/design/c52dc31078961084a98ccce4b15dec4b.png",
          pos: 5,
        },
      ],
      o = {
        black: [
          {
            id: "choose",
            iconLink:
              "https://st.gtimg.com/design/88ec6204c2d81df2962a4f6f9f4ba718.png",
          },
          {
            id: "information",
            iconLink:
              "https://st.gtimg.com/design/48b4bdf2d20b6677adc4b30dc0e7d809.png",
          },
          {
            id: "market",
            iconLink:
              "https://st.gtimg.com/design/841e9881794eee2e5957c62b7e3e5f29.png",
          },
          {
            id: "strategy",
            iconLink:
              "https://st.gtimg.com/design/48ccf9cd6d9227a7497c4247fafbc728.png",
          },
          {
            id: "asset",
            iconLink:
              "https://st.gtimg.com/design/d41f4a780aa9483798140b571d2ffcc9.png",
          },
          {
            id: "apply",
            iconLink:
              "https://st.gtimg.com/design/416a4c7057eca3729fdaba1b72336a3f.png",
          },
          {
            id: "account",
            iconLink:
              "https://st.gtimg.com/design/c52dc31078961084a98ccce4b15dec4b.png",
          },
        ],
        white: [
          {
            id: "choose",
            iconLink:
              "https://st.gtimg.com/design/37157b6edeeb88e7ac4a04d2661d33ec.png",
          },
          {
            id: "information",
            iconLink:
              "https://st.gtimg.com/design/1de4ff04e4b7f4b266fc9983b367175d.png",
          },
          {
            id: "market",
            iconLink:
              "https://st.gtimg.com/design/55dc880e79a5f28deb9e5187e5c05133.png",
          },
          {
            id: "strategy",
            iconLink:
              "https://st.gtimg.com/design/2f4c4a7315c0cea290db7fbe5e3b6cd3.png",
          },
          {
            id: "asset",
            iconLink:
              "https://st.gtimg.com/design/d3dbb0b4383d4d6968b0a0b3c470d00b.png",
          },
          {
            id: "apply",
            iconLink:
              "https://st.gtimg.com/design/ad14bc6728b976ea59fe1b6907a5cd3e.png",
          },
          {
            id: "account",
            iconLink:
              "https://st.gtimg.com/design/ce5b80937ec238b888b22ec869d6f5fa.png",
          },
        ],
      },
      r = {
        name: "CustomNavBar",
        components: {
          Navbar: function () {
            return "../../@tencent/st-components/mp/Navbar/index.js";
          },
        },
        mixins: [i],
        data: function () {
          return {
            skin: n.wx$1.getStorageSync("user/skin") || "white",
            defaultTab: "",
            redPointShowArr: [],
            tabRoutes: n.defaultTabRoute,
            isShowExtenalNavBar: !1,
            isFirstPage: !1,
            navbarVersion: "v1",
            navbarHideByEvent: !1,
            tabList: c,
            applyTabConfig: {
              name: "开户",
              id: "apply",
              iconLink:
                "https://st.gtimg.com/design/ad14bc6728b976ea59fe1b6907a5cd3e.png",
              activeIconLink:
                "https://st.gtimg.com/design/18f877a874ac2b634c71ef9192a5163f.png",
              pos: 4,
            },
            skinTabConfig: o,
          };
        },
        computed: {
          show: function () {
            return this.isShowExtenalNavBar && !this.navbarHideByEvent;
          },
          hasAccount: function () {
            return n.useBrokerInfo().hasBind.value;
          },
        },
        watch: {
          show: {
            handler: function () {
              var t = this;
              getApp().globalData.setSkin(function (e) {
                t.skin = e || "white";
              });
            },
            immediate: !0,
          },
          isFirstPage: function () {
            this.setShow();
          },
          isShowExtenalNavBar: function () {
            this.setShow();
          },
          navbarHideByEvent: function () {
            this.setShow();
          },
        },
        mounted: function () {
          var t = this;
          try {
            n.wx$1.onAppRoute(function () {
              t.getDefaultTab();
            }),
              this.getDefaultTab(),
              this.judgeShowExternalNav(),
              getApp().globalData.Event.on(
                "base.navbar.hide",
                this,
                function (e) {
                  t.navbarHideByEvent = Boolean(e);
                }
              );
          } catch (t) {}
        },
        beforeDestroy: function () {
          getApp().globalData.Event.remove("base.navbar.hide", this);
        },
        methods: {
          setShow: function () {
            var t =
              (this.isFirstPage || this.isShowExtenalNavBar) &&
              !this.navbarHideByEvent;
            (getApp().globalData.ShowCustomNavbar = t),
              getApp().globalData.Event.emit("ShowCustomNavbar", t);
          },
          updateExternalTab: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.$refs.navbar;
              if (e && e.navs) {
                var n = e.navs.find(function (e) {
                  return e.id === t.defaultTab;
                });
                if (n && !n.name.includes("去")) {
                  var a = {
                    name: "去".concat(n.name, "首页"),
                    iconLink: "https://st.gtimg.com/design/".concat(
                      "white" === t.skin
                        ? "63d3b6531bf8a3d9c23c4ed492c82574"
                        : "f317c2ce4b6830a54c953744c4fcba5a",
                      ".png"
                    ),
                    activeIconLink:
                      "https://st.gtimg.com/design/b181fe2f60606a29314555e1e6ac3b5f.png",
                    id: n.id,
                    pos: n.pos,
                  };
                  e.updateTab(t.defaultTab, a);
                }
              }
            });
          },
          recoverTab: function () {
            var t = this.$refs.navbar;
            if (t && t.navs) {
              var e = t.navs.find(function (t) {
                return t.name.includes("去");
              });
              if (e) {
                var n = c.find(function (t) {
                  return t.id === e.id;
                });
                t.updateTab(e.id, n);
              }
            }
          },
          judgeShowExternalNav: function () {
            var t,
              e = this.getRouteInfo(),
              n = e.path,
              a = e.query.__push_flag__,
              i = !(
                /^\/(pages\/quote\/quote)/.test(n) ||
                /^\/(pages\/stockBasket\/detail)/.test(n) ||
                /^\/(pages\/newsCon\/newsDetail\/main)/.test(n) ||
                /^\/(pages\/act\/investcalendar\/detail)/.test(n)
              ),
              s =
                null == (t = null == __wxConfig ? void 0 : __wxConfig.tabBar)
                  ? void 0
                  : t.custom;
            (this.isShowExtenalNavBar = s
              ? 1 == +a && i
              : 1 == +a && i && !this.isFirstPage),
              this.isShowExtenalNavBar &&
                !this.isFirstPage &&
                this.updateExternalTab();
          },
          getDefaultTab: function () {
            var t = this.getRouteInfo(),
              e = t.path,
              a = t.pageName;
            if (
              ((this.defaultTab = n.defaultRouteTab[e] || ""),
              "/pages/index/trade" === e &&
                (this.defaultTab = this.hasAccount ? "asset" : "apply"),
              (this.isFirstPage = "" !== this.defaultTab),
              !this.defaultTab)
            ) {
              var i = [
                { id: "choose", childPaths: ["choose", "hq", "additional"] },
                { id: "trade", childPaths: ["trade"] },
                { id: "account", childPaths: ["account"] },
              ].find(function (t) {
                return t.childPaths.includes(a);
              });
              this.defaultTab = (null == i ? void 0 : i.id) || "";
            }
          },
          getRouteInfo: function () {
            var t,
              e = getCurrentPages(),
              a = e[e.length - 1] || {},
              i =
                (null == (t = null == a ? void 0 : a.$page)
                  ? void 0
                  : t.fullPath) || "",
              s = n.queryParse(i.replace(/^[^\?]+/, "")),
              c = (a.route || "")
                .replace(/^pages\//, "")
                .split("/")
                .shift();
            return { path: i ? i.split("?")[0] : "", query: s, pageName: c };
          },
          navigate: function (a) {
            return e(
              this,
              null,
              t().mark(function e() {
                var i, c, o, r, d, u, g;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            (o = this.tabRoutes[a]),
                            (r = this.getRouteInfo()),
                            r.path !== o)
                          ) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt("return");
                        case 4:
                          n.Request.reportMTAData({
                            eventName: "base.navbar."
                              .concat(a, "_")
                              .concat(
                                this.isShowExtenalNavBar ? "external_" : "",
                                "click"
                              ),
                          }),
                            (d =
                              (null ==
                              (c =
                                null == (i = getApp().globalData.detect)
                                  ? void 0
                                  : i.env)
                                ? void 0
                                : c.IS_PCWEIXIN) || !1),
                            n.wx$1.switchTab({ url: o }),
                            this.recoverTab(),
                            ["asset", "apply"].includes(a) &&
                              !d &&
                              ((u = {
                                name: "AssetIndex",
                                query: { stat_data: "IhY00p000k001" },
                              }),
                              s.navigateToTrade(u)),
                            (t.next = 13);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            (g =
                              "ERR_MAINTAIN" === t.t0.retcode
                                ? t.t0.retmsg
                                : "系统繁忙 请稍后再试"),
                            setTimeout(function () {
                              n.wx$1.showToast({
                                title: g,
                                icon: "none",
                                duration: 3e3,
                              });
                            }, 500);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 9]]
                );
              })
            );
          },
        },
      };
    Array || n.resolveComponent("Navbar")();
    var d = n._export_sfc(r, [
      [
        "render",
        function (t, e, a, i, s, c) {
          return n.e(
            { a: c.show },
            c.show
              ? {
                  b: n.sr("navbar", "7f96717d-0"),
                  c: n.n(s.navbarVersion),
                  d: n.o(c.navigate, 445),
                  e: n.p({
                    "default-active-tab": s.defaultTab,
                    "red-point-show-arr": s.redPointShowArr,
                    skin: s.skin,
                    "has-account": c.hasAccount,
                    "navbar-version": s.navbarVersion,
                    tabList: s.tabList,
                    applyTabConfig: s.applyTabConfig,
                    skinTabConfig: s.skinTabConfig,
                    mpStyle: !0,
                  }),
                }
              : {}
          );
        },
      ],
    ]);
    wx.createComponent(d);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/asyncCom/components/navBar/index.js",
  }
);
require("pages/asyncCom/components/navBar/index.js");
