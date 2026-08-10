$gwx26_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx26_XC_0 || [];
    function gz$gwx26_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "e"]]]]);
        Z([3, "__l"]);
        Z([3, "0f269dbb-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "0f269dbb-1"]);
        Z(z[3]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([[7], [3, "c"]]);
        Z([3, "0f269dbb-2"]);
        Z(z[7]);
      })(__WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx26_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx26_XC_0 = true;
    var x = ["./pages/square/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx26_XC_0_1();
      var oB = _n("view");
      _rz(z, oB, "class", 0, e, s, gg);
      var fE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oB, fE);
      var xC = _v();
      _(oB, xC);
      if (_oz(z, 3, e, s, gg)) {
        xC.wxVkey = 1;
        var cF = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(xC, cF);
      }
      var oD = _v();
      _(oB, oD);
      if (_oz(z, 7, e, s, gg)) {
        oD.wxVkey = 1;
        var hG = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 8, "bindmessage", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oD, hG);
      }
      xC.wxXCkey = 1;
      xC.wxXCkey = 3;
      oD.wxXCkey = 1;
      oD.wxXCkey = 3;
      _(r, oB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx26_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx26_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/square/index.wxml"] = [
    $gwx26_XC_0,
    "./pages/square/index.wxml",
  ];
else
  __wxAppCode__["pages/square/index.wxml"] = $gwx26_XC_0(
    "./pages/square/index.wxml"
  );
__wxRoute = "pages/square/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/square/index.js";
define(
  "pages/square/index.js",
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
      n = getApp().globalData,
      t = {
        components: {
          zxgWebview: function () {
            return "../../components/webView.js";
          },
        },
        data: function () {
          return {
            url: "",
            time: 0,
            resUrl: "",
            skin: e.wx$1.getStorageSync("user/skin") || "white",
          };
        },
        onLoad: function (e) {
          var t = this,
            o = Object.keys(e)
              .map(function (n) {
                return "".concat(n, "=").concat(e[n]);
              })
              .join("&");
          n.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          }),
            (this.url =
              "https://wzq.tenpay.com/mp/v2/index.html#/community/index?srcshell=h5&from=miniapp&" +
              o);
        },
        onShow: function () {
          var e = this;
          n.setSkin(function (n) {
            e.skin = "black" === n ? "black" : "white";
          }),
            (this.time += 1),
            (this.resUrl = "".concat(this.url, "&time=").concat(this.time));
        },
        onShareAppMessage: function (e) {},
        methods: { handleMessage: function (e) {} },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("zxg-webview")
      )();
    var o = e._export_sfc(t, [
      [
        "render",
        function (n, t, o, i, r, s) {
          return {
            a: n.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.o(s.handleMessage, 360),
            d: e.p({ src: r.resUrl }),
            e: e.n("black" == r.skin ? "skin-black" : "skin-white"),
          };
        },
      ],
    ]);
    (t.__runtimeHooks = 2), wx.createPage(o);
  },
  { isPage: true, isComponent: true, currentFile: "pages/square/index.js" }
);
require("pages/square/index.js");
