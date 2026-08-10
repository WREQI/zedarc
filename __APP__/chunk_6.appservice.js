$gwx_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];
    function gz$gwx_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "b"]]);
        Z([3, "__l"]);
        Z([[7], [3, "a"]]);
        Z([3, "1657a294-0"]);
        Z(z[0]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_14 = true;
    var x = ["./components/StockPrivacyDialog/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_14_1();
      var oZF = _v();
      _(r, oZF);
      if (_oz(z, 0, e, s, gg)) {
        oZF.wxVkey = 1;
        var l1F = _mz(
          z,
          "classic-privacy-policy-modal",
          ["bind:__l", 1, "bindinput", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oZF, l1F);
      }
      oZF.wxXCkey = 1;
      oZF.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/StockPrivacyDialog/index.wxml"] = [
    $gwx_XC_14,
    "./components/StockPrivacyDialog/index.wxml",
  ];
else
  __wxAppCode__["components/StockPrivacyDialog/index.wxml"] = $gwx_XC_14(
    "./components/StockPrivacyDialog/index.wxml"
  );
__wxRoute = "components/StockPrivacyDialog/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/StockPrivacyDialog/index.js";
define(
  "components/StockPrivacyDialog/index.js",
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
    var e = require("../../common/vendor.js"),
      n = {
        name: "StockPrivacyDialog",
        components: {
          ClassicPrivacyPolicyModal: function () {
            return "../../pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
          },
        },
        props: { noAuto: { type: Boolean, default: !1 } },
        setup: function () {
          var n = e.useStockPrivacy(),
            o = n.visible,
            t = n.scene,
            a = n.app,
            i = n.popPersonalInfoAuth,
            s = n.updateAnnouncement,
            u = n.onInput,
            p = e.ref(!1),
            c = e.ref(""),
            r = e.computed(function () {
              return p.value && o.value;
            });
          return {
            isPageShow: p,
            pageRoute: c,
            isShow: r,
            scene: t,
            app: a,
            popPersonalInfoAuth: i,
            updateAnnouncement: s,
            onInput: u,
          };
        },
        onPageShow: function () {
          (this.isPageShow = !0),
            this.pageRoute || (this.pageRoute = e.getCurrentPageRoute()),
            e.dismissSceneIfNotOwner(this.pageRoute),
            this.noAuto || e.ensureAutoPrivacyPopup();
        },
        onPageHide: function () {
          (this.isPageShow = !1), e.dismissSceneOnHide();
        },
        onPageUnload: function () {
          e.dismissSceneOnHide();
        },
      };
    Array || e.resolveComponent("classic-privacy-policy-modal")();
    var o = e._export_sfc(n, [
      [
        "render",
        function (n, o, t, a, i, s) {
          return {
            a: e.o(a.onInput, 4),
            b: e.p({
              value: a.isShow,
              scene: a.scene,
              app: a.app,
              "pop-personal-info-auth": a.popPersonalInfoAuth,
              "update-announcement": a.updateAnnouncement,
            }),
            c: a.isShow,
          };
        },
      ],
    ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/StockPrivacyDialog/index.js",
  }
);
require("components/StockPrivacyDialog/index.js");
