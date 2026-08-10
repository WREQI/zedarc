$gwx6_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_2 || [];
    function gz$gwx6_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_2 = true;
    var x = ["./pages/account/components/protocolBanner.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_2_1();
      var eLC = _v();
      _(r, eLC);
      if (_oz(z, 0, e, s, gg)) {
        eLC.wxVkey = 1;
      }
      eLC.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/components/protocolBanner.wxml"] = [
    $gwx6_XC_2,
    "./pages/account/components/protocolBanner.wxml",
  ];
else
  __wxAppCode__["pages/account/components/protocolBanner.wxml"] = $gwx6_XC_2(
    "./pages/account/components/protocolBanner.wxml"
  );
__wxRoute = "pages/account/components/protocolBanner";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/components/protocolBanner.js";
define(
  "pages/account/components/protocolBanner.js",
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
    var o = require("../../../common/vendor.js"),
      t = {
        data: function () {
          return { showBanner: !1 };
        },
        created: function () {
          this.protocolNotifyHandle();
        },
        methods: {
          goProtocol: function () {
            var t = this;
            o.Request.reportMTAData({
              eventName: "base.account.protocolbanner.btnclick",
            }),
              setTimeout(function () {
                (t.showBanner = !1),
                  o.wx$1.navigateTo({ url: "/pages/account/protocol" });
              }, 300);
          },
          in7Day: function (o, t) {
            var n = (o - t) / 86400;
            return n >= 0 && n < 7;
          },
          protocolNotifyHandle: function () {
            var t = this,
              n = o.StockBridge.store,
              e = n.protocolServerTime,
              r = n.allProtocolList;
            r &&
              r.length &&
              (r.some(function (o) {
                return o.consented_any_version;
              }) &&
                (this.showBanner = r.some(function (o) {
                  return "0" === o.status && t.in7Day(+e, +o.publish_time);
                })),
              this.showBanner &&
                o.Request.reportMTAData({
                  eventName: "base.account.protocolbanner.show",
                }));
          },
        },
      },
      n = o._export_sfc(t, [
        [
          "render",
          function (t, n, e, r, a, c) {
            return o.e(
              { a: a.showBanner },
              a.showBanner
                ? {
                    b: o.o(function () {
                      return c.goProtocol && c.goProtocol.apply(c, arguments);
                    }, 2378),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-97367778"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/account/components/protocolBanner.js",
  }
);
require("pages/account/components/protocolBanner.js");
