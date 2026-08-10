$gwx34_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_6 || [];
    function gz$gwx34_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "b"]]);
        Z([3, "container"]);
        Z([3, "__l"]);
        Z([3, "1cb4ff2d-0"]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z([3, "1cb4ff2d-1"]);
        Z(z[4]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([[7], [3, "d"]]);
        Z([3, "1cb4ff2d-2"]);
        Z(z[8]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_6 = true;
    var x = ["./pages/act/oldwithnew/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_6_1();
      var eLC = _v();
      _(r, eLC);
      if (_oz(z, 0, e, s, gg)) {
        eLC.wxVkey = 1;
        var bMC = _n("view");
        _rz(z, bMC, "class", 1, e, s, gg);
        var oPC = _mz(
          z,
          "mp-privacy-dialog",
          ["bind:__l", 2, "uI", 1],
          [],
          e,
          s,
          gg
        );
        _(bMC, oPC);
        var oNC = _v();
        _(bMC, oNC);
        if (_oz(z, 4, e, s, gg)) {
          oNC.wxVkey = 1;
          var fQC = _mz(
            z,
            "stock-privacy-dialog",
            ["bind:__l", 5, "uI", 1, "uP", 2],
            [],
            e,
            s,
            gg
          );
          _(oNC, fQC);
        }
        var xOC = _v();
        _(bMC, xOC);
        if (_oz(z, 8, e, s, gg)) {
          xOC.wxVkey = 1;
          var cRC = _mz(
            z,
            "zxg-webview",
            ["bind:__l", 9, "bindmessage", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(xOC, cRC);
        }
        oNC.wxXCkey = 1;
        oNC.wxXCkey = 3;
        xOC.wxXCkey = 1;
        xOC.wxXCkey = 3;
        _(eLC, bMC);
      }
      eLC.wxXCkey = 1;
      eLC.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/oldwithnew/main.wxml"] = [
    $gwx34_XC_6,
    "./pages/act/oldwithnew/main.wxml",
  ];
else
  __wxAppCode__["pages/act/oldwithnew/main.wxml"] = $gwx34_XC_6(
    "./pages/act/oldwithnew/main.wxml"
  );
__wxRoute = "pages/act/oldwithnew/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/act/oldwithnew/main.js";
define(
  "pages/act/oldwithnew/main.js",
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
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      t = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable,
      c = function (e, t, n) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      s = require("../../../common/vendor.js"),
      l = {
        components: {
          zxgWebview: function () {
            return "../../../components/webView.js";
          },
        },
        data: function () {
          return { url: "", shareInfo: {} };
        },
        onLoad: function (r) {
          var l,
            u =
              ((l = (function (r, t) {
                for (var n in t || (t = {})) a.call(t, n) && c(r, n, t[n]);
                if (o) {
                  var s,
                    l = e(o(t));
                  try {
                    for (l.s(); !(s = l.n()).done; ) {
                      n = s.value;
                      i.call(t, n) && c(r, n, t[n]);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
                return r;
              })({}, r)),
              t(l, n({ srcsite: "zxgxcx_h5" }))),
            p = Object.keys(u)
              .map(function (e) {
                return "".concat(e, "=").concat(u[e]);
              })
              .join("&"),
            h = "https://zqact04.tenpay.com/activity/page/oldWithNew/#/"
              .concat(p.includes("type=home") ? "index" : "transfer", "?")
              .concat(p);
          (this.url = h), s.wx$1.setNavigationBarTitle({ title: "腾讯自选股" });
        },
        onShareAppMessage: function () {
          return {
            title: this.shareInfo.title,
            description: this.shareInfo.desc,
            path: this.shareInfo.link,
            imageUrl: this.shareInfo.imgUrl,
          };
        },
        methods: {
          handleMessage: function (e) {
            var r = e.detail.data,
              t = void 0 === r ? [] : r;
            t && t.length && (this.shareInfo = t[t.length - 1]);
          },
        },
      };
    Array ||
      (
        s.resolveComponent("mp-privacy-dialog") +
        s.resolveComponent("stock-privacy-dialog") +
        s.resolveComponent("zxg-webview")
      )();
    var u = s._export_sfc(l, [
      [
        "render",
        function (e, r, t, n, o, a) {
          return s.e(
            { a: e.rootFontSize, b: o.url },
            o.url
              ? {
                  c: s.p({ "no-auto": !0 }),
                  d: s.o(a.handleMessage, 374),
                  e: s.p({ src: o.url }),
                }
              : {}
          );
        },
      ],
    ]);
    (l.__runtimeHooks = 2), wx.createPage(u);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/act/oldwithnew/main.js",
  }
);
require("pages/act/oldwithnew/main.js");
