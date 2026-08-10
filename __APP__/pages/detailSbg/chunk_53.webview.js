$gwx3_XC_49 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_49 || [];
    function gz$gwx3_XC_49_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_49_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_49_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_49_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div"]);
        Z([3, "__l"]);
        Z([3, "e8a3d0c2-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "e8a3d0c2-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_49_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_49_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_49 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_49 = true;
    var x = ["./pages/detailSbg/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_49_1();
      var hYMF = _n("page-meta");
      _rz(z, hYMF, "rootFontSize", 0, e, s, gg);
      _(r, hYMF);
      var oZMF = _n("view");
      _rz(z, oZMF, "class", 1, e, s, gg);
      var o2MF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oZMF, o2MF);
      var c1MF = _v();
      _(oZMF, c1MF);
      if (_oz(z, 4, e, s, gg)) {
        c1MF.wxVkey = 1;
        var l3MF = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(c1MF, l3MF);
      }
      c1MF.wxXCkey = 1;
      c1MF.wxXCkey = 3;
      _(r, oZMF);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_49";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_49();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/index.wxml"] = [
    $gwx3_XC_49,
    "./pages/detailSbg/index.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/index.wxml"] = $gwx3_XC_49(
    "./pages/detailSbg/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/detailSbg/index.wxss"] = setCssToHead([], undefined, {
    path: "./pages/detailSbg/index.wxss",
  });
}
