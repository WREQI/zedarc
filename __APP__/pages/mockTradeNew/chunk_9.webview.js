$gwx33_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx33_XC_11 || [];
    function gz$gwx33_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx33_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx33_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx33_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div tab-host"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx33_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx33_XC_11_1;
    }
    function gz$gwx33_XC_11_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx33_XC_11_2)
        return __WXML_GLOBAL__.ops_cached.$gwx33_XC_11_2;
      __WXML_GLOBAL__.ops_cached.$gwx33_XC_11_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div tab-view"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx33_XC_11_2);
      return __WXML_GLOBAL__.ops_cached.$gwx33_XC_11_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx33_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx33_XC_11 = true;
    var x = [
      "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxml",
      "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx33_XC_11_1();
      var oDUB = _n("view");
      _rz(z, oDUB, "class", 0, e, s, gg);
      var fEUB = _n("slot");
      _(oDUB, fEUB);
      _(r, oDUB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx33_XC_11_2();
      var hGUB = _n("view");
      _rz(z, hGUB, "class", 0, e, s, gg);
      var oHUB = _n("slot");
      _(hGUB, oHUB);
      _(r, hGUB);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx33_XC_11";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        if (
          typeof outerGlobal.__webview_engine_version__ != "undefined" &&
          outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 &&
          outerGlobal.__mergeData__
        ) {
          env = outerGlobal.__mergeData__(env, dd);
        }
        try {
          main(env, {}, root, global);
          _tsd(root);
          if (
            typeof outerGlobal.__webview_engine_version__ == "undefined" ||
            outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6
          ) {
            return _ev(root);
          }
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
if (__vd_version_info__.delayedGwx || false) $gwx33_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxml"
  ] = [
    $gwx33_XC_11,
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxml",
  ];
else
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxml"
  ] = $gwx33_XC_11(
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxml"
  ] = [
    $gwx33_XC_11,
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxml",
  ];
else
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxml"
  ] = $gwx33_XC_11(
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxss"
  ] = setCssToHead([], undefined, {
    path: "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabHost.wxss",
  });
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxss"
  ] = setCssToHead([], undefined, {
    path: "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/cp-component/TabView.wxss",
  });
}
