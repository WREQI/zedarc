$gwx6_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_1 || [];
    function gz$gwx6_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "container"]);
        Z([3, "__l"]);
        Z([3, "6e9adce0-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "6e9adce0-1"]);
        Z(z[3]);
        Z([3, "main-content-about"]);
        Z(z[1]);
        Z([3, "6e9adce0-2"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "bd-text-intro"]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z([3, "6e9adce0-3"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_1 = true;
    var x = ["./pages/account/about.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_1_1();
      var xAC = _n("view");
      _rz(z, xAC, "class", 0, e, s, gg);
      var fCC = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(xAC, fCC);
      var oBC = _v();
      _(xAC, oBC);
      if (_oz(z, 3, e, s, gg)) {
        oBC.wxVkey = 1;
        var cDC = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oBC, cDC);
      }
      var hEC = _n("view");
      _rz(z, hEC, "class", 7, e, s, gg);
      var oFC = _mz(
        z,
        "debug-function-entry",
        ["bind:__l", 8, "uI", 1, "uS", 2],
        [],
        e,
        s,
        gg
      );
      _(hEC, oFC);
      var cGC = _n("view");
      _rz(z, cGC, "class", 11, e, s, gg);
      var oHC = _v();
      _(cGC, oHC);
      if (_oz(z, 12, e, s, gg)) {
        oHC.wxVkey = 1;
      }
      var lIC = _v();
      _(cGC, lIC);
      if (_oz(z, 13, e, s, gg)) {
        lIC.wxVkey = 1;
      }
      oHC.wxXCkey = 1;
      lIC.wxXCkey = 1;
      _(hEC, cGC);
      var aJC = _mz(
        z,
        "protocol-list",
        ["bind:__l", 14, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(hEC, aJC);
      _(xAC, hEC);
      oBC.wxXCkey = 1;
      oBC.wxXCkey = 3;
      _(r, xAC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/about.wxml"] = [
    $gwx6_XC_1,
    "./pages/account/about.wxml",
  ];
else
  __wxAppCode__["pages/account/about.wxml"] = $gwx6_XC_1(
    "./pages/account/about.wxml"
  );
__wxRoute = "pages/account/about";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/about.js";
define(
  "pages/account/about.js",
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
      t = getApp().globalData,
      o = {
        components: {
          ProtocolList: function () {
            return "./components/ProtocolList.js";
          },
          DebugFunctionEntry: function () {
            return "../../components/DebugFunctionEntry.js";
          },
        },
        data: function () {
          return {
            pageType: "zxg" === t.APPNAME ? "zxg" : "wzq",
            aboutTxt: "zxg" === t.APPNAME ? "自选股" : "微证券",
            newConfirmList: [],
            frompage: null,
            popupVisible: !1,
          };
        },
        onShareTimeline: function () {
          var t;
          null == (t = e.Request) ||
            t.reportMTAData({ eventName: "xcx_share_timeline" });
        },
        methods: {
          goProtocol: function (t) {
            var o,
              n,
              r = t.target.dataset.from,
              a = getCurrentPages(),
              i = a[a.length - 1].route;
            if (((this.frompage = i), "about" !== r))
              return (
                (o = t.detail.val),
                (n = "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(o)
                )),
                e.wx$1.navigateTo({ url: n }),
                !1
              );
            (o = t.target.dataset.url),
              (n = "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(o)
              )),
              e.wx$1.navigateTo({ url: n }),
              e.Request.reportMTAData({ eventName: "ZXG.ABOUT.READ_PROTOCOL" });
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("DebugFunctionEntry") +
        e.resolveComponent("protocol-list")
      )();
    var n = e._export_sfc(o, [
      [
        "render",
        function (t, o, n, r, a, i) {
          return e.e(
            {
              a: t.rootFontSize,
              b: e.p({ "no-auto": !0 }),
              c: e.t(a.aboutTxt),
              d: "wzq" == a.pageType,
            },
            (a.pageType, {}),
            { e: "zxg" == a.pageType },
            (a.pageType, {})
          );
        },
      ],
    ]);
    (o.__runtimeHooks = 6), wx.createPage(n);
  },
  { isPage: true, isComponent: true, currentFile: "pages/account/about.js" }
);
require("pages/account/about.js");
