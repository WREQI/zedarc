$gwx29_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx29_XC_0 || [];
    function gz$gwx29_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx29_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx29_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx29_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "d"]]]]);
        Z([3, "__l"]);
        Z([3, "cfade05e-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "cfade05e-1"]);
        Z(z[3]);
        Z([[7], [3, "c"]]);
        Z(z[1]);
        Z([3, "cfade05e-2"]);
        Z(z[7]);
      })(__WXML_GLOBAL__.ops_cached.$gwx29_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx29_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx29_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx29_XC_0 = true;
    var x = ["./pages/strategy/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx29_XC_0_1();
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
          ["bind:__l", 8, "uI", 1, "uP", 2],
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
        g = "$gwx29_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx29_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/strategy/index.wxml"] = [
    $gwx29_XC_0,
    "./pages/strategy/index.wxml",
  ];
else
  __wxAppCode__["pages/strategy/index.wxml"] = $gwx29_XC_0(
    "./pages/strategy/index.wxml"
  );
__wxRoute = "pages/strategy/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/strategy/index.js";
define(
  "pages/strategy/index.js",
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
    var e = require("../../@babel/runtime/helpers/slicedToArray"),
      t = require("../../common/vendor.js"),
      n = getApp().globalData,
      o = {
        components: {
          zxgWebview: function () {
            return "../../components/webView.js";
          },
        },
        data: function () {
          return {
            url: "",
            path: "",
            skin: t.wx$1.getStorageSync("user/skin") || "white",
          };
        },
        onLoad: function (e) {
          var o = this;
          n.setSkin(function (e) {
            o.skin = "black" === e ? "black" : "white";
          });
          var r = "";
          if (e.url && e.is_full_url) r = decodeURIComponent(e.url);
          else {
            r = "https://wzq.tenpay.com/mp/v2/index.html#/strategy/".concat(
              decodeURIComponent(e.path)
            );
            var a = Object.keys(e);
            if (a.length > 1) {
              var i = "?";
              a.forEach(function (t) {
                "path" !== t && (i += "".concat(t, "=").concat(e[t], "&"));
              }),
                (r += i);
            }
          }
          (this.path = e.path || ""),
            (this.url = r),
            e.title &&
              t.wx$1.setNavigationBarTitle({
                title: decodeURIComponent(e.title),
              });
        },
        onShow: function () {
          var e = this;
          n.setSkin(function (t) {
            e.skin = "black" === t ? "black" : "white";
          });
        },
        onShareAppMessage: function (t) {
          var n = t.webViewUrl.split("#")[1].split("?"),
            o = e(n, 2),
            r = o[0],
            a = o[1],
            i = r.replace(/^\/strategy\//, ""),
            c = "";
          try {
            c = decodeURIComponent(a.match(/title=([^&]+)/)[1]) || "";
          } catch (e) {}
          return {
            title: c,
            path: "/pages/strategy/index?srcsite=zxgxcx_h5&srcshell=h5&path="
              .concat(i, "&")
              .concat(a),
          };
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog") +
        t.resolveComponent("zxg-webview")
      )();
    var r = t._export_sfc(o, [
      [
        "render",
        function (e, n, o, r, a, i) {
          return {
            a: e.rootFontSize,
            b: t.p({ "no-auto": !0 }),
            c: t.p({ src: a.url }),
            d: t.n("black" == a.skin ? "skin-black" : "skin-white"),
          };
        },
      ],
    ]);
    (o.__runtimeHooks = 2), wx.createPage(r);
  },
  { isPage: true, isComponent: true, currentFile: "pages/strategy/index.js" }
);
require("pages/strategy/index.js");
