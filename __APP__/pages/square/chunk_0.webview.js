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
        Z([[7], [3, "a"]]);
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "e"]]]]);
        Z([3, "__l"]);
        Z([3, "0f269dbb-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "0f269dbb-1"]);
        Z(z[4]);
        Z([[7], [3, "d"]]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z([3, "0f269dbb-2"]);
        Z(z[8]);
      })(__WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx26_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx26_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx26_XC_0 = true;
    var x = ["./pages/square/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx26_XC_0_1();
      var oB = _n("page-meta");
      _rz(z, oB, "rootFontSize", 0, e, s, gg);
      _(r, oB);
      var xC = _n("view");
      _rz(z, xC, "class", 1, e, s, gg);
      var cF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(xC, cF);
      var oD = _v();
      _(xC, oD);
      if (_oz(z, 4, e, s, gg)) {
        oD.wxVkey = 1;
        var hG = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oD, hG);
      }
      var fE = _v();
      _(xC, fE);
      if (_oz(z, 8, e, s, gg)) {
        fE.wxVkey = 1;
        var oH = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 9, "bindmessage", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(fE, oH);
      }
      oD.wxXCkey = 1;
      oD.wxXCkey = 3;
      fE.wxXCkey = 1;
      fE.wxXCkey = 3;
      _(r, xC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx26_XC_0";
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

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/square/index.wxss"] = setCssToHead([], undefined, {
    path: "./pages/square/index.wxss",
  });
}
