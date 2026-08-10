$gwx5_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_13 || [];
    function gz$gwx5_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-73f91289"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div etf-main-page data-v-73f91289"]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "73f91289-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "73f91289-1"]);
        Z(z[6]);
        Z([[7], [3, "d"]]);
        Z(z[3]);
        Z([3, "r data-v-73f91289"]);
        Z([3, "73f91289-2"]);
        Z(z[11]);
        Z([3, "etfPage"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_13 = true;
    var x = ["./pages/market/pages/ETFPage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_13_1();
      var bONB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, bONB);
      var oPNB = _n("view");
      _rz(z, oPNB, "class", 2, e, s, gg);
      var fSNB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oPNB, fSNB);
      var xQNB = _v();
      _(oPNB, xQNB);
      if (_oz(z, 6, e, s, gg)) {
        xQNB.wxVkey = 1;
        var cTNB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(xQNB, cTNB);
      }
      var oRNB = _v();
      _(oPNB, oRNB);
      if (_oz(z, 11, e, s, gg)) {
        oRNB.wxVkey = 1;
        var hUNB = _mz(
          z,
          "e-t-f-main-page",
          ["bind:__l", 12, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(oRNB, hUNB);
      }
      xQNB.wxXCkey = 1;
      xQNB.wxXCkey = 3;
      oRNB.wxXCkey = 1;
      oRNB.wxXCkey = 3;
      _(r, oPNB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage.wxml"] = [
    $gwx5_XC_13,
    "./pages/market/pages/ETFPage.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage.wxml"] = $gwx5_XC_13(
    "./pages/market/pages/ETFPage.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/market/pages/ETFPage.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "etf-main-page.",
      [1],
      "data-v-73f91289{background-color:#f5f6fa;padding:.32rem}\n",
    ],
    undefined,
    { path: "./pages/market/pages/ETFPage.wxss" }
  );
}
