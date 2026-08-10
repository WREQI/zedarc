$gwx7_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx7_XC_0 || [];
    function gz$gwx7_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx7_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx7_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx7_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx7_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx7_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx7_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx7_XC_0 = true;
    var x = ["./pages/profileCom/@tencent/st-act-adv/components/banner.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx7_XC_0_1();
      var oB = _v();
      _(r, oB);
      if (_oz(z, 0, e, s, gg)) {
        oB.wxVkey = 1;
      }
      oB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx7_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx7_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/profileCom/@tencent/st-act-adv/components/banner.wxml"] =
    [
      $gwx7_XC_0,
      "./pages/profileCom/@tencent/st-act-adv/components/banner.wxml",
    ];
else
  __wxAppCode__["pages/profileCom/@tencent/st-act-adv/components/banner.wxml"] =
    $gwx7_XC_0("./pages/profileCom/@tencent/st-act-adv/components/banner.wxml");
__wxRoute = "pages/profileCom/@tencent/st-act-adv/components/banner";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/profileCom/@tencent/st-act-adv/components/banner.js";
define(
  "pages/profileCom/@tencent/st-act-adv/components/banner.js",
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
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      n = function (e, n, r) {
        return new Promise(function (t, a) {
          var i = function (e) {
              try {
                o(r.next(e));
              } catch (e) {
                a(e);
              }
            },
            u = function (e) {
              try {
                o(r.throw(e));
              } catch (e) {
                a(e);
              }
            },
            o = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(i, u);
            };
          o((r = r.apply(e, n)).next());
        });
      },
      r = require("../../../../../common/vendor.js"),
      t = {
        name: "banner",
        setup: function (t, a) {
          var i = this,
            u = (a.emit, r.ref(null)),
            o = r.ref({});
          n(
            i,
            null,
            e().mark(function t() {
              var a, i, u, l, v, f, p, d, s, b, m;
              return e().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          (function () {
                            return n(
                              this,
                              null,
                              e().mark(function n() {
                                var t, a, i, u, o, c, l, v, f;
                                return e().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (e.next = 3),
                                            r.Wuji.get({
                                              appid: "act",
                                              schemaid: "yy_config",
                                              filter: encodeURIComponent(
                                                "yy_key = gongyi99_2025"
                                              ),
                                            })
                                          );
                                        case 3:
                                          if (
                                            ((a = e.sent),
                                            (i = a.code),
                                            (u = a.data),
                                            200 == +i && u && u.length)
                                          ) {
                                            e.next = 8;
                                            break;
                                          }
                                          return e.abrupt("return", {});
                                        case 8:
                                          if (
                                            (o =
                                              null == (t = u[0])
                                                ? void 0
                                                : t.jval)
                                          ) {
                                            e.next = 11;
                                            break;
                                          }
                                          return e.abrupt("return", {});
                                        case 11:
                                          if (
                                            (c = JSON.parse(o)).begintime &&
                                            c.endtime
                                          ) {
                                            e.next = 14;
                                            break;
                                          }
                                          return e.abrupt("return", {});
                                        case 14:
                                          return (
                                            (l = new Date()),
                                            (v = new Date(c.begintime)),
                                            (f = new Date(c.endtime)),
                                            e.abrupt(
                                              "return",
                                              l >= v && l <= f ? c : {}
                                            )
                                          );
                                        case 18:
                                          return (
                                            (e.prev = 18),
                                            (e.t0 = e.catch(0)),
                                            e.abrupt("return", {})
                                          );
                                        case 21:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  n,
                                  null,
                                  [[0, 18]]
                                );
                              })
                            );
                          })()
                        );
                      case 3:
                        (b = t.sent), (o.value = b || {}), (t.next = 10);
                        break;
                      case 7:
                        return (
                          (t.prev = 7), (t.t0 = t.catch(0)), t.abrupt("return")
                        );
                      case 10:
                        if (
                          ((m = null == (a = r.StockBridge) ? void 0 : a.SHELL),
                          null !=
                            (l =
                              null ==
                              (u =
                                null == (i = o.value) ? void 0 : i.invalidflag)
                                ? void 0
                                : u[m]) &&
                            l &&
                            (null ==
                            (f = null == (v = o.value) ? void 0 : v.banner)
                              ? void 0
                              : f.switch))
                        ) {
                          t.next = 13;
                          break;
                        }
                        return t.abrupt("return");
                      case 13:
                        "mpweapp" !==
                          (null == (p = r.StockBridge) ? void 0 : p.SHELL) &&
                          (null ==
                          (s = null == (d = o.value) ? void 0 : d.banner)
                            ? void 0
                            : s.liteImg) &&
                          (o.value.banner.img = o.value.banner.liteImg),
                          c("yy.information_detail.bottombanner_brow");
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 7]]
              );
            })
          );
          var c = function (e, n) {
            r.StockBridge &&
              "function" == typeof r.StockBridge.report &&
              r.StockBridge.report(e, n);
          };
          return (
            r.onBeforeUnmount(function () {
              u.value && (clearTimeout(u.value), (u.value = null));
            }),
            {
              config: o,
              onPrimaryButtonClick: function () {
                var e, n, t, a;
                c("yy.information_detail.bottombanner_click");
                var i =
                  null == (n = null == (e = o.value) ? void 0 : e.banner)
                    ? void 0
                    : n.link;
                if (i) {
                  var u =
                    (null == (a = null == (t = o.value) ? void 0 : t.banner)
                      ? void 0
                      : a.mplink) ||
                    "/pages/act/webview/main?url=".concat(
                      encodeURIComponent(i)
                    );
                  r.wx$1.navigateTo({ url: u });
                }
              },
            }
          );
        },
      },
      a = r._export_sfc(t, [
        [
          "render",
          function (e, n, t, a, i, u) {
            return r.e(
              { a: a.config.banner && a.config.banner.img },
              a.config.banner && a.config.banner.img
                ? {
                    b: a.config.banner.img,
                    c: r.o(function () {
                      return (
                        a.onPrimaryButtonClick &&
                        a.onPrimaryButtonClick.apply(a, arguments)
                      );
                    }, 2131),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-22d1c97b"],
      ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/profileCom/@tencent/st-act-adv/components/banner.js",
  }
);
require("pages/profileCom/@tencent/st-act-adv/components/banner.js");
