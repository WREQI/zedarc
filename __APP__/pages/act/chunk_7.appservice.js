$gwx34_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_7 || [];
    function gz$gwx34_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_7 = true;
    var x = ["./pages/act/transition/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_7_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/transition/main.wxml"] = [
    $gwx34_XC_7,
    "./pages/act/transition/main.wxml",
  ];
else
  __wxAppCode__["pages/act/transition/main.wxml"] = $gwx34_XC_7(
    "./pages/act/transition/main.wxml"
  );
__wxRoute = "pages/act/transition/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/act/transition/main.js";
define(
  "pages/act/transition/main.js",
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
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../common/vendor.js"),
      n = t.useBrokerInfo(),
      r = {
        onLoad: function (r) {
          return (
            (a = this),
            null,
            (o = e().mark(function () {
              var a, o, i, c, u, d, s, l;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (t.wx$1.showLoading({ title: "加载中" }),
                        (o = (a = r || {}).url),
                        (i = a.act_actid),
                        (c = a.act_id),
                        (u = a.act_tid),
                        (d = a.act_url),
                        (s = a.stat_data),
                        c &&
                          (getApp().globalData.taskConfig = {
                            actid: i,
                            tid: u,
                            id: c,
                            url: d,
                            stat_data: s,
                            done: !1,
                            visible: !0,
                          }),
                        t.wx$1.hideLoading(),
                        !decodeURIComponent(o).includes("/pages/index/trade"))
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (l = {
                          url: "/pages/index/trade",
                          query: { stat_data: s },
                        }),
                        (e.next = 6),
                        n.navigateToTrade(l)
                      );
                    case 6:
                      e.next = 9;
                      break;
                    case 8:
                      t.wx$1.switchTab({ url: decodeURIComponent(o) });
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, c);
            })),
            new Promise(function (e, t) {
              var n = function e(n) {
                  try {
                    i(o.next(n));
                  } catch (e) {
                    t(e);
                  }
                },
                r = function (e) {
                  try {
                    i(o.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(n, r);
                };
              i((o = o.apply(a, null)).next());
            })
          );
          var a, o;
        },
        methods: {},
      },
      a = t._export_sfc(r, [
        [
          "render",
          function (e, t, n, r, a, o) {
            return {};
          },
        ],
      ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/act/transition/main.js",
  }
);
require("pages/act/transition/main.js");
