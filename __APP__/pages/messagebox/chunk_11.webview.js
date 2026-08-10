$gwx44_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx44_XC_3 || [];
    function gz$gwx44_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-2a43a0fe"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div empty-container data-v-2a43a0fe"]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "2a43a0fe-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "2a43a0fe-1"]);
        Z(z[6]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "2a43a0fe-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx44_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx44_XC_3 = true;
    var x = ["./pages/messagebox/empty/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_3_1();
      var oZG = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, oZG);
      var f1G = _n("view");
      _rz(z, f1G, "class", 2, e, s, gg);
      var h3G = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(f1G, h3G);
      var c2G = _v();
      _(f1G, c2G);
      if (_oz(z, 6, e, s, gg)) {
        c2G.wxVkey = 1;
        var o4G = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(c2G, o4G);
      }
      var c5G = _mz(
        z,
        "empty",
        ["bind:__l", 11, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(f1G, c5G);
      c2G.wxXCkey = 1;
      c2G.wxXCkey = 3;
      _(r, f1G);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx44_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx44_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/messagebox/empty/main.wxml"] = [
    $gwx44_XC_3,
    "./pages/messagebox/empty/main.wxml",
  ];
else
  __wxAppCode__["pages/messagebox/empty/main.wxml"] = $gwx44_XC_3(
    "./pages/messagebox/empty/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/messagebox/empty/main.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "empty-container.",
      [1],
      "data-v-2a43a0fe{background:#f5f6fa;height:100%}\n",
    ],
    undefined,
    { path: "./pages/messagebox/empty/main.wxss" }
  );
}
