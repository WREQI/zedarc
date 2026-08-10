$gwx6_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_7 || [];
    function gz$gwx6_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div skin"]);
        Z([3, "__l"]);
        Z([3, "6f2de844-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "6f2de844-1"]);
        Z(z[3]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_7 = true;
    var x = ["./pages/account/skin/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_7_1();
      var xGD = _n("view");
      _rz(z, xGD, "class", 0, e, s, gg);
      var fID = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(xGD, fID);
      var oHD = _v();
      _(xGD, oHD);
      if (_oz(z, 3, e, s, gg)) {
        oHD.wxVkey = 1;
        var cJD = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oHD, cJD);
      }
      oHD.wxXCkey = 1;
      oHD.wxXCkey = 3;
      _(r, xGD);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/skin/main.wxml"] = [
    $gwx6_XC_7,
    "./pages/account/skin/main.wxml",
  ];
else
  __wxAppCode__["pages/account/skin/main.wxml"] = $gwx6_XC_7(
    "./pages/account/skin/main.wxml"
  );
__wxRoute = "pages/account/skin/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/skin/main.js";
define(
  "pages/account/skin/main.js",
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
    var e = require("../../../common/vendor.js"),
      n = getApp().globalData,
      t = {
        data: function () {
          return { skin: "" };
        },
        mounted: function () {
          (this.skin = e.wx$1.getStorageSync("user/skin")),
            e.Request.reportMTAData({ eventName: "xcx_change_skin_pv" });
        },
        methods: {
          setSkin: function (t) {
            var i = this;
            (this.skin = t),
              e.wx$1.setStorageSync("user/skin", t),
              n.wx.request({
                url: "/cgi-bin/usersetting.fcgi",
                data: {
                  front_skin: JSON.stringify({ xcx: this.skin || "black" }),
                },
                success: function () {
                  n.setSkin(),
                    e.Request.reportMTAData({
                      eventName: "xcx_change_skin_".concat(i.skin),
                    });
                },
              });
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var i = e._export_sfc(t, [
      [
        "render",
        function (n, t, i, s, r, o) {
          return {
            a: n.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.n("white" == r.skin ? "ticked" : ""),
            d: e.o(function (e) {
              return o.setSkin("white");
            }, 235),
            e: e.n("black" == r.skin ? "ticked" : ""),
            f: e.o(function (e) {
              return o.setSkin("black");
            }, 236),
          };
        },
      ],
    ]);
    wx.createPage(i);
  },
  { isPage: true, isComponent: true, currentFile: "pages/account/skin/main.js" }
);
require("pages/account/skin/main.js");
