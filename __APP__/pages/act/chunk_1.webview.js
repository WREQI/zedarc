$gwx34_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_1 || [];
    function gz$gwx34_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([3, "container"]);
        Z([3, "__l"]);
        Z([3, "692c7379-0"]);
        Z([[7], [3, "c"]]);
        Z(z[3]);
        Z([3, "692c7379-1"]);
        Z(z[5]);
        Z([[7], [3, "e"]]);
        Z(z[3]);
        Z([[7], [3, "d"]]);
        Z([3, "692c7379-2"]);
        Z(z[9]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_1 = true;
    var x = ["./pages/act/holidayreward/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_1_1();
      var aJC = _n("page-meta");
      _rz(z, aJC, "rootFontSize", 0, e, s, gg);
      _(r, aJC);
      var lIC = _v();
      _(r, lIC);
      if (_oz(z, 1, e, s, gg)) {
        lIC.wxVkey = 1;
        var tKC = _n("view");
        _rz(z, tKC, "class", 2, e, s, gg);
        var oNC = _mz(
          z,
          "mp-privacy-dialog",
          ["bind:__l", 3, "uI", 1],
          [],
          e,
          s,
          gg
        );
        _(tKC, oNC);
        var eLC = _v();
        _(tKC, eLC);
        if (_oz(z, 5, e, s, gg)) {
          eLC.wxVkey = 1;
          var xOC = _mz(
            z,
            "stock-privacy-dialog",
            ["bind:__l", 6, "uI", 1, "uP", 2],
            [],
            e,
            s,
            gg
          );
          _(eLC, xOC);
        }
        var bMC = _v();
        _(tKC, bMC);
        if (_oz(z, 9, e, s, gg)) {
          bMC.wxVkey = 1;
          var oPC = _mz(
            z,
            "zxg-webview",
            ["bind:__l", 10, "bindmessage", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(bMC, oPC);
        }
        eLC.wxXCkey = 1;
        eLC.wxXCkey = 3;
        bMC.wxXCkey = 1;
        bMC.wxXCkey = 3;
        _(lIC, tKC);
      }
      lIC.wxXCkey = 1;
      lIC.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/holidayreward/main.wxml"] = [
    $gwx34_XC_1,
    "./pages/act/holidayreward/main.wxml",
  ];
else
  __wxAppCode__["pages/act/holidayreward/main.wxml"] = $gwx34_XC_1(
    "./pages/act/holidayreward/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/act/holidayreward/main.wxss"] = setCssToHead(
    [],
    undefined,
    { path: "./pages/act/holidayreward/main.wxss" }
  );
}
