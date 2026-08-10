$gwx_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
    function gz$gwx_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div data-v-3478a04b"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "a"]]);
        Z([3, "_div debug-area data-v-3478a04b"]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([[7], [3, "d"]]);
        Z([3, "data-v-3478a04b"]);
        Z([3, "3478a04b-0"]);
        Z(z[4]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "_div func-entry data-v-3478a04b"]);
        Z([[7], [3, "c"]]);
        Z([3, "_div debug-btn data-v-3478a04b"]);
        Z([3, "拷贝openId"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
    var x = ["./components/DebugFunctionEntry.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_10_1();
      var fOE = _n("view");
      _rz(z, fOE, "class", 0, e, s, gg);
      var hQE = _mz(
        z,
        "view",
        ["bindlongpress", 1, "bindtap", 1, "class", 2],
        [],
        e,
        s,
        gg
      );
      var oRE = _n("slot");
      _(hQE, oRE);
      _(fOE, hQE);
      var cPE = _v();
      _(fOE, cPE);
      if (_oz(z, 4, e, s, gg)) {
        cPE.wxVkey = 1;
        var cSE = _mz(
          z,
          "layer-modal",
          [
            "bind:__l",
            5,
            "bindclose",
            1,
            "class",
            2,
            "uI",
            3,
            "uP",
            4,
            "uS",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        var oTE = _n("view");
        _rz(z, oTE, "class", 11, e, s, gg);
        var lUE = _mz(z, "view", ["bindtap", 12, "class", 1], [], e, s, gg);
        var aVE = _oz(z, 14, e, s, gg);
        _(lUE, aVE);
        _(oTE, lUE);
        _(cSE, oTE);
        _(cPE, cSE);
      }
      cPE.wxXCkey = 1;
      cPE.wxXCkey = 3;
      _(r, fOE);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/DebugFunctionEntry.wxml"] = [
    $gwx_XC_10,
    "./components/DebugFunctionEntry.wxml",
  ];
else
  __wxAppCode__["components/DebugFunctionEntry.wxml"] = $gwx_XC_10(
    "./components/DebugFunctionEntry.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["components/DebugFunctionEntry.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "debug-area.",
      [1],
      "data-v-3478a04b,.",
      [1],
      "func-entry.",
      [1],
      "data-v-3478a04b{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",
      [1],
      "func-entry.",
      [1],
      "data-v-3478a04b{-webkit-flex-direction:column;flex-direction:column;margin:.26666666666666666rem .5333333333333333rem}\n.",
      [1],
      "func-entry .",
      [1],
      "debug-btn.",
      [1],
      "data-v-3478a04b{background-color:var(--color-red);box-sizing:border-box;color:#fff;font-size:.37333333333333335rem;padding:.26666666666666666rem;width:100%}\n",
    ],
    undefined,
    { path: "./components/DebugFunctionEntry.wxss" }
  );
}
