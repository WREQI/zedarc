$gwx2_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_5 || [];
    function gz$gwx2_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div open-transfer"]);
        Z([3, "__l"]);
        Z([3, "2e41d05f-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "2e41d05f-1"]);
        Z(z[4]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([[7], [3, "d"]]);
        Z([3, "2e41d05f-2"]);
        Z(z[9]);
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_5 = true;
    var x = ["./pages/noaccount/textImage/TextImage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx2_XC_5_1();
      var cVM = _n("page-meta");
      _rz(z, cVM, "rootFontSize", 0, e, s, gg);
      _(r, cVM);
      var hWM = _n("view");
      _rz(z, hWM, "class", 1, e, s, gg);
      var oZM = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(hWM, oZM);
      var oXM = _v();
      _(hWM, oXM);
      if (_oz(z, 4, e, s, gg)) {
        oXM.wxVkey = 1;
        var l1M = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oXM, l1M);
      }
      var cYM = _v();
      _(hWM, cYM);
      if (_oz(z, 8, e, s, gg)) {
        cYM.wxVkey = 1;
        var a2M = _v();
        _(cYM, a2M);
        if (_oz(z, 9, e, s, gg)) {
          a2M.wxVkey = 1;
          var t3M = _mz(
            z,
            "open-transfer-page-b",
            ["bind:__l", 10, "bindinit", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(a2M, t3M);
        }
        a2M.wxXCkey = 1;
        a2M.wxXCkey = 3;
      }
      oXM.wxXCkey = 1;
      oXM.wxXCkey = 3;
      cYM.wxXCkey = 1;
      cYM.wxXCkey = 3;
      _(r, hWM);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx2_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/noaccount/textImage/TextImage.wxml"] = [
    $gwx2_XC_5,
    "./pages/noaccount/textImage/TextImage.wxml",
  ];
else
  __wxAppCode__["pages/noaccount/textImage/TextImage.wxml"] = $gwx2_XC_5(
    "./pages/noaccount/textImage/TextImage.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/noaccount/textImage/TextImage.wxss"] = setCssToHead(
    [".", [1], "open-transfer{height:100%}\n"],
    undefined,
    { path: "./pages/noaccount/textImage/TextImage.wxss" }
  );
}
