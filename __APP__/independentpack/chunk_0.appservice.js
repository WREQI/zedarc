$gwx51_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx51_XC_0 || [];
    function gz$gwx51_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx51_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx51_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx51_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx51_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx51_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx51_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx51_XC_0 = true;
    var x = ["./independentpack/webview/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx51_XC_0_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx51_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx51_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["independentpack/webview/index.wxml"] = [
    $gwx51_XC_0,
    "./independentpack/webview/index.wxml",
  ];
else
  __wxAppCode__["independentpack/webview/index.wxml"] = $gwx51_XC_0(
    "./independentpack/webview/index.wxml"
  );
__wxRoute = "independentpack/webview/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "independentpack/webview/index.js";
define(
  "independentpack/webview/index.js",
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
    require("../../independentpack/@babel/runtime/helpers/Arrayincludes"),
      Page({
        data: { url: "", shareInfo: null },
        onLoad: function (e) {
          if (e && e.url) {
            var n = wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene,
              t = "";
            (t =
              e.url.indexOf("%252526") >= 0
                ? decodeURIComponent(e.url) +
                  "%2526scene%253D" +
                  n +
                  "%2526xcx_scene%253D" +
                  n +
                  "%2526srcsite%253Dzxgxcx_h5%2526" +
                  encodeURIComponent("__mina_container__=independent")
                : decodeURIComponent(e.url) +
                  "&scene=" +
                  n +
                  "&xcx_scene=" +
                  n +
                  "&srcsite=zxgxcx_h5&__mina_container__=independent"),
              this.setData({ url: t });
          }
        },
        onMessage: function (e) {
          var n,
            t = null === (n = e.detail) || void 0 === n ? void 0 : n.data;
          if (t && t.length > 0) {
            var a = t[t.length - 1];
            ("share" === a.type || a.link) && this.setData({ shareInfo: a });
          }
        },
        onShareAppMessage: function () {
          var e = this.data,
            n = e.shareInfo,
            t = e.url;
          if (n) {
            var a = n.share_url_mina || n.path || n.link || "";
            if (a && a.includes("pages/act/webview/main")) {
              var i = a.match(/url=([^&]+)/);
              i && (a = "independentpack/webview/index?url=".concat(i[1]));
            }
            return (
              a &&
                !/^(pages|independentpack)\//.test(a) &&
                (a = "independentpack/webview/index?url=".concat(
                  encodeURIComponent(a)
                )),
              a ||
                (a = "independentpack/webview/index?url=".concat(
                  encodeURIComponent(t)
                )),
              a && !a.startsWith("/") && (a = "/".concat(a)),
              {
                title: n.share_title || n.title || "腾讯自选股",
                path: a,
                imageUrl: n.share_image_wx || n.imageUrl || n.imgUrl || "",
              }
            );
          }
          return {
            title: "腾讯自选股",
            path: "/independentpack/webview/index?url=".concat(
              encodeURIComponent(t)
            ),
          };
        },
        onWebViewError: function (e) {
          console.error("[异常监控] WebView独立分包加载失败:", e.detail),
            wx.setStorageSync("independent/webview", e.detail),
            wx.redirectTo({
              url: "/pages/additional/webview/index?url=https%3A%2F%2Fwzq.tenpay.com%2Fwzq%2Ffront%2Faics%2F%23%2FaiserviceV2%2Fhome%3Fchannel%3D14%26channel%3D14%26from_pagedo%3D1%26random%3D1741071782780%26contextPath%3Daics-cloud%26_%3D1741071782599%26entry%3Dwzq_my_account%26stat_data%3DIHR00p000r006%26type%3Dchat",
            });
        },
      });
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "independentpack/webview/index.js",
  }
);
require("independentpack/webview/index.js");
