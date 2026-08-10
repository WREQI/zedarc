$gwx11_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx11_XC_2 || [];
    function gz$gwx11_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div component-supplier"]);
        Z([3, "_div content-wrapper"]);
        Z([3, "_div redirect-tip"]);
        Z([3, "_div tip-text bold"]);
        Z([3, "正在进入脱水研报…"]);
        Z([3, "_div tip-sub-text"]);
        Z([3, "脱水研报内容由21财经APP提供"]);
        Z([3, "_div risk-tip"]);
        Z([
          3,
          "风险提示：所载信息仅供参考，不构成投资分析、预测或者建议。腾讯自选股并不承担相关责任。市场有风险，投资需谨慎。",
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_1;
    }
    function gz$gwx11_XC_2_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2)
        return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2;
      __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-0afd03de"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div page-tsyb-transfer data-v-0afd03de"]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "0afd03de-0"]);
        Z([[7], [3, "b"]]);
        Z(z[4]);
        Z(z[0]);
        Z([3, "0afd03de-1"]);
        Z(z[7]);
        Z([[7], [3, "d"]]);
        Z(z[4]);
        Z([[7], [3, "c"]]);
        Z(z[0]);
        Z([3, "0afd03de-2"]);
        Z(z[12]);
      })(__WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2);
      return __WXML_GLOBAL__.ops_cached.$gwx11_XC_2_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx11_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx11_XC_2 = true;
    var x = [
      "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml",
      "./pages/newsCon/tsyb/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx11_XC_2_1();
      var fKAB = _n("view");
      _rz(z, fKAB, "class", 0, e, s, gg);
      var cLAB = _n("view");
      _rz(z, cLAB, "class", 1, e, s, gg);
      var hMAB = _n("view");
      _rz(z, hMAB, "class", 2, e, s, gg);
      var oNAB = _n("view");
      _rz(z, oNAB, "class", 3, e, s, gg);
      var cOAB = _oz(z, 4, e, s, gg);
      _(oNAB, cOAB);
      _(hMAB, oNAB);
      var oPAB = _n("view");
      _rz(z, oPAB, "class", 5, e, s, gg);
      var lQAB = _oz(z, 6, e, s, gg);
      _(oPAB, lQAB);
      _(hMAB, oPAB);
      _(cLAB, hMAB);
      var aRAB = _n("view");
      _rz(z, aRAB, "class", 7, e, s, gg);
      var tSAB = _oz(z, 8, e, s, gg);
      _(aRAB, tSAB);
      _(cLAB, aRAB);
      _(fKAB, cLAB);
      _(r, fKAB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx11_XC_2_2();
      var bUAB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, bUAB);
      var oVAB = _mz(z, "view", ["class", 2, "data-st-theme", 1], [], e, s, gg);
      var fYAB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oVAB, fYAB);
      var xWAB = _v();
      _(oVAB, xWAB);
      if (_oz(z, 7, e, s, gg)) {
        xWAB.wxVkey = 1;
        var cZAB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(xWAB, cZAB);
      }
      var oXAB = _v();
      _(oVAB, oXAB);
      if (_oz(z, 12, e, s, gg)) {
        oXAB.wxVkey = 1;
        var h1AB = _mz(
          z,
          "tsyb-transfer",
          ["bind:__l", 13, "bindready", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(oXAB, h1AB);
      }
      xWAB.wxXCkey = 1;
      xWAB.wxXCkey = 3;
      oXAB.wxXCkey = 1;
      oXAB.wxXCkey = 3;
      _(r, oVAB);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx11_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx11_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml"
  ] = [
    $gwx11_XC_2,
    "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml"
  ] = $gwx11_XC_2(
    "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/newsCon/tsyb/index.wxml"] = [
    $gwx11_XC_2,
    "./pages/newsCon/tsyb/index.wxml",
  ];
else
  __wxAppCode__["pages/newsCon/tsyb/index.wxml"] = $gwx11_XC_2(
    "./pages/newsCon/tsyb/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "component-supplier{background-color:var(--fill-2);height:100%}\n.",
      [1],
      "component-supplier .",
      [1],
      "content-wrapper{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:space-between;justify-content:space-between}\n.",
      [1],
      "component-supplier .",
      [1],
      "content-wrapper .",
      [1],
      "redirect-tip{margin-top:6.72rem;text-align:center}\n.",
      [1],
      "component-supplier .",
      [1],
      "content-wrapper .",
      [1],
      "redirect-tip .",
      [1],
      "tip-text{color:var(--text-color-1);font-size:.48rem}\n.",
      [1],
      "component-supplier .",
      [1],
      "content-wrapper .",
      [1],
      "redirect-tip .",
      [1],
      "tip-sub-text{color:var(--text-color-5);font-size:.4rem;margin-top:.26666666666666666rem}\n.",
      [1],
      "component-supplier .",
      [1],
      "content-wrapper .",
      [1],
      "risk-tip{color:#b8becc;font-size:.26666666666666666rem;line-height:.4266666666666667rem;padding:0 1.7066666666666668rem .72rem}\n[data-st-theme\x3dblack] .",
      [1],
      "component-supplier .",
      [1],
      "content-wrapper .",
      [1],
      "risk-tip{color:#323a4d}\n.",
      [1],
      "component-supplier .",
      [1],
      "tip-text{font-size:.37333333333333335rem}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxss:1:764)",
    {
      path: "./pages/newsCon/@tencent/stock-tsyb-transfer/modules/Supplier.wxss",
    }
  );
  __wxAppCode__["pages/newsCon/tsyb/index.wxss"] = setCssToHead(
    [".", [1], "page-tsyb-transfer.", [1], "data-v-0afd03de{height:100vh}\n"],
    undefined,
    { path: "./pages/newsCon/tsyb/index.wxss" }
  );
}
