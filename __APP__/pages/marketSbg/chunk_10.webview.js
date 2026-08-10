$gwx47_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_2 || [];
    function gz$gwx47_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div compare-wrapper data-v-2536d3d2"]);
        Z([3, "_div compare-item compare-item--left data-v-2536d3d2"]);
        Z([3, "_div item-title data-v-2536d3d2"]);
        Z([3, "股息率"]);
        Z([3, "_div item-value highlight data-v-2536d3d2"]);
        Z([3, "4.00%+"]);
        Z([3, "_div item-desc data-v-2536d3d2"]);
        Z([3, "红利ETF"]);
        Z([3, "_div compare-vs data-v-2536d3d2"]);
        Z([3, "_img compare-vs__img data-v-2536d3d2"]);
        Z([
          3,
          "https://st.gtimg.com/design/449b249d93343d9f0b9ead6d0c00b162.png",
        ]);
        Z([3, "_div compare-item compare-item--right data-v-2536d3d2"]);
        Z(z[2]);
        Z([3, "1年期利率"]);
        Z([3, "_div item-value data-v-2536d3d2"]);
        Z([3, "1.00%+"]);
        Z(z[6]);
        Z([3, "银行存款"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_2 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_2_1();
      var b5T = _n("view");
      _rz(z, b5T, "class", 0, e, s, gg);
      var o6T = _n("view");
      _rz(z, o6T, "class", 1, e, s, gg);
      var x7T = _n("view");
      _rz(z, x7T, "class", 2, e, s, gg);
      var o8T = _oz(z, 3, e, s, gg);
      _(x7T, o8T);
      _(o6T, x7T);
      var f9T = _n("view");
      _rz(z, f9T, "class", 4, e, s, gg);
      var c0T = _oz(z, 5, e, s, gg);
      _(f9T, c0T);
      _(o6T, f9T);
      var hAU = _n("view");
      _rz(z, hAU, "class", 6, e, s, gg);
      var oBU = _oz(z, 7, e, s, gg);
      _(hAU, oBU);
      _(o6T, hAU);
      _(b5T, o6T);
      var cCU = _n("view");
      _rz(z, cCU, "class", 8, e, s, gg);
      var oDU = _mz(z, "image", ["class", 9, "src", 1], [], e, s, gg);
      _(cCU, oDU);
      _(b5T, cCU);
      var lEU = _n("view");
      _rz(z, lEU, "class", 11, e, s, gg);
      var aFU = _n("view");
      _rz(z, aFU, "class", 12, e, s, gg);
      var tGU = _oz(z, 13, e, s, gg);
      _(aFU, tGU);
      _(lEU, aFU);
      var eHU = _n("view");
      _rz(z, eHU, "class", 14, e, s, gg);
      var bIU = _oz(z, 15, e, s, gg);
      _(eHU, bIU);
      _(lEU, eHU);
      var oJU = _n("view");
      _rz(z, oJU, "class", 16, e, s, gg);
      var xKU = _oz(z, 17, e, s, gg);
      _(oJU, xKU);
      _(lEU, oJU);
      _(b5T, lEU);
      _(r, b5T);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxml"
  ] = [
    $gwx47_XC_2,
    "./pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxml"
  ] = $gwx47_XC_2(
    "./pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "compare-wrapper.",
      [1],
      "data-v-2536d3d2{-webkit-align-items:stretch;align-items:stretch;display:-webkit-flex;display:flex;position:relative}\n[data-st-theme\x3dblack] .",
      [1],
      "compare-wrapper .",
      [1],
      "item-title.",
      [1],
      "data-v-2536d3d2,[data-st-theme\x3ddark] .",
      [1],
      "compare-wrapper .",
      [1],
      "item-title.",
      [1],
      "data-v-2536d3d2,[data-theme\x3dblack] .",
      [1],
      "compare-wrapper .",
      [1],
      "item-title.",
      [1],
      "data-v-2536d3d2,[data-theme\x3ddark] .",
      [1],
      "compare-wrapper .",
      [1],
      "item-title.",
      [1],
      "data-v-2536d3d2{color:var(--color-lightgray)}\n[data-st-theme\x3dblack] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--left.",
      [1],
      "data-v-2536d3d2,[data-st-theme\x3ddark] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--left.",
      [1],
      "data-v-2536d3d2,[data-theme\x3dblack] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--left.",
      [1],
      "data-v-2536d3d2,[data-theme\x3ddark] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--left.",
      [1],
      "data-v-2536d3d2{background-image:url(https://st.gtimg.com/design/0c8320afbad26b929ce4f8ddc8015dca.png)}\n[data-st-theme\x3dblack] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--right.",
      [1],
      "data-v-2536d3d2,[data-st-theme\x3ddark] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--right.",
      [1],
      "data-v-2536d3d2,[data-theme\x3dblack] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--right.",
      [1],
      "data-v-2536d3d2,[data-theme\x3ddark] .",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--right.",
      [1],
      "data-v-2536d3d2{background-image:url(https://st.gtimg.com/design/59c5be350286d61e90544f04fc9cfbe0.png)}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item.",
      [1],
      "data-v-2536d3d2{-webkit-align-items:center;align-items:center;background-repeat:no-repeat;background-size:100% 100%;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding:.18666666666666668rem;text-align:center}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--left.",
      [1],
      "data-v-2536d3d2{background-image:url(https://st.gtimg.com/design/c83a7cde94ceaa710758578dbd812d70.png)}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item--right.",
      [1],
      "data-v-2536d3d2{background-image:url(https://st.gtimg.com/design/0c930db60300333157bcd642c9978cea.png)}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item .",
      [1],
      "item-title.",
      [1],
      "data-v-2536d3d2{color:var(--color-lightgray);font-size:.29333333333333333rem;line-height:.4533333333333333rem}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item .",
      [1],
      "item-value.",
      [1],
      "data-v-2536d3d2{color:var(--color-heavygray);font-size:.4266666666666667rem;line-height:.5866666666666667rem}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item .",
      [1],
      "item-value.",
      [1],
      "highlight.",
      [1],
      "data-v-2536d3d2{color:var(--color-red)}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-item .",
      [1],
      "item-desc.",
      [1],
      "data-v-2536d3d2{color:var(--color-heavygray);font-size:.32rem;line-height:.4533333333333333rem;margin-top:.05333333333333334rem}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-vs.",
      [1],
      "data-v-2536d3d2{height:.8533333333333334rem;left:50%;line-height:0;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:.8533333333333334rem}\n.",
      [1],
      "compare-wrapper .",
      [1],
      "compare-vs__img.",
      [1],
      "data-v-2536d3d2{height:100%;width:100%}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxss:1:802)",
    {
      path: "./pages/marketSbg/@tencent/stock-hq-etf/dividendPages/components/DividendCompareCard.wxss",
    }
  );
}
