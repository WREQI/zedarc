$gwx3_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_7 || [];
    function gz$gwx3_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div tabbar data-v-46ed6ca3"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([3, "_div tabbar-scroll-wrapper data-v-46ed6ca3"]);
        Z([3, "tabRef"]);
        Z([[7], [3, "a"]]);
        Z([3, "_span data-v-46ed6ca3"]);
        Z([3, "_div tabbar-row data-v-46ed6ca3"]);
        Z([[7], [3, "b"]]);
        Z([3, "tabbarRow"]);
        Z([[7], [3, "c"]]);
        Z([3, "_div tabbar-indicator data-v-46ed6ca3"]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_7 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_7_1();
      var oR2B = _n("view");
      _rz(z, oR2B, "class", 0, e, s, gg);
      var fS2B = _mz(
        z,
        "view",
        ["bindtouchmove", 1, "catchtouchstart", 1, "class", 2, "ref", 3],
        [],
        e,
        s,
        gg
      );
      var cT2B = _v();
      _(fS2B, cT2B);
      if (_oz(z, 5, e, s, gg)) {
        cT2B.wxVkey = 1;
        var oV2B = _n("label");
        _rz(z, oV2B, "class", 6, e, s, gg);
        _(cT2B, oV2B);
      }
      var cW2B = _mz(
        z,
        "view",
        ["class", 7, "data-typeid", 1, "id", 2],
        [],
        e,
        s,
        gg
      );
      var oX2B = _n("slot");
      _(cW2B, oX2B);
      _(fS2B, cW2B);
      var hU2B = _v();
      _(fS2B, hU2B);
      if (_oz(z, 10, e, s, gg)) {
        hU2B.wxVkey = 1;
        var lY2B = _mz(z, "view", ["class", 11, "style", 1], [], e, s, gg);
        _(hU2B, lY2B);
      }
      cT2B.wxXCkey = 1;
      hU2B.wxXCkey = 1;
      _(oR2B, fS2B);
      _(r, oR2B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml"
  ] = [
    $gwx3_XC_7,
    "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml"
  ] = $gwx3_XC_7(
    "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "tabbar-scroll-wrapper.",
      [1],
      "data-v-46ed6ca3{-webkit-overflow-scrolling:touch;overflow:scroll}\n.",
      [1],
      "tabbar-row.",
      [1],
      "data-v-46ed6ca3{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",
      [1],
      "tabbar-indicator.",
      [1],
      "data-v-46ed6ca3{height:.04rem;position:relative}\n.",
      [1],
      "data-v-46ed6ca3 .",
      [1],
      "tab,.",
      [1],
      "tabbar-indicator.",
      [1],
      "data-v-46ed6ca3{transition:all .2s cubic-bezier(.445,.05,.55,.95)}\n",
    ],
    undefined,
    {
      path: "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxss",
    }
  );
}
