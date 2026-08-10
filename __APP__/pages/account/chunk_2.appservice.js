$gwx6_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_9 || [];
    function gz$gwx6_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div setting-container data-v-5dd8e442"]);
        Z([3, "__l"]);
        Z([3, "data-v-5dd8e442"]);
        Z([3, "5dd8e442-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "5dd8e442-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_9 = true;
    var x = ["./pages/account/aiSetting.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_9_1();
      var o2D = _n("view");
      _rz(z, o2D, "class", 0, e, s, gg);
      var a4D = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(o2D, a4D);
      var l3D = _v();
      _(o2D, l3D);
      if (_oz(z, 4, e, s, gg)) {
        l3D.wxVkey = 1;
        var t5D = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(l3D, t5D);
      }
      l3D.wxXCkey = 1;
      l3D.wxXCkey = 3;
      _(r, o2D);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/aiSetting.wxml"] = [
    $gwx6_XC_9,
    "./pages/account/aiSetting.wxml",
  ];
else
  __wxAppCode__["pages/account/aiSetting.wxml"] = $gwx6_XC_9(
    "./pages/account/aiSetting.wxml"
  );
__wxRoute = "pages/account/aiSetting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/aiSetting.js";
define(
  "pages/account/aiSetting.js",
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
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../common/vendor.js"),
      i = getApp().globalData,
      n = {
        components: {},
        data: function () {
          return { aiSetting: !1 };
        },
        watch: {},
        mounted: function () {
          t.Request.reportMTAData({
            eventName: "base.aisetting.aisetting_brow",
          }),
            this.querySwitch();
        },
        methods: {
          querySwitch: function () {
            return (
              (t = this),
              null,
              (n = e().mark(function t() {
                var n = this;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        i.wx.request({
                          url: "/cgi-bin/usersetting.fcgi",
                          data: { querysub: "ai_helper_guice_msg" },
                          success: function (e) {
                            var t = e.ai_helper_guice_msg,
                              i = void 0 === t ? {} : t;
                            n.aiSetting = 1 == +(null == i ? void 0 : i.switch);
                          },
                        });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })),
              new Promise(function (e, i) {
                var r = function (e) {
                    try {
                      o(n.next(e));
                    } catch (e) {
                      i(e);
                    }
                  },
                  a = function (e) {
                    try {
                      o(n.throw(e));
                    } catch (e) {
                      i(e);
                    }
                  },
                  o = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, a);
                  };
                o((n = n.apply(t, null)).next());
              })
            );
            var t, n;
          },
          toggleSwitch: function () {
            t.Request.reportMTAData({
              eventName:
                "base.aisetting." +
                (this.aiSetting ? "aisetting_close" : "aisetting_open"),
            }),
              this.doSwitch(this.aiSetting);
          },
          doSwitch: function (e) {
            var t = this,
              n = { subscribe: "ai_helper_guice_msg" };
            e && (n = { unsubscribe: "ai_helper_guice_msg" }),
              i.wx.request({
                url: "/cgi-bin/usersetting.fcgi",
                data: n,
                success: function () {
                  t.aiSetting = !e;
                },
              });
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog")
      )();
    var r = t._export_sfc(n, [
      [
        "render",
        function (e, i, n, r, a, o) {
          return {
            a: e.rootFontSize,
            b: t.p({ "no-auto": !0 }),
            c: t.n(a.aiSetting ? "on" : ""),
            d: t.o(function () {
              return o.toggleSwitch && o.toggleSwitch.apply(o, arguments);
            }, 237),
          };
        },
      ],
      ["__scopeId", "data-v-5dd8e442"],
    ]);
    wx.createPage(r);
  },
  { isPage: true, isComponent: true, currentFile: "pages/account/aiSetting.js" }
);
require("pages/account/aiSetting.js");
