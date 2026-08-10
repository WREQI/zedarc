$gwx47_XC_26 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_26 || [];
    function gz$gwx47_XC_26_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "f"]]);
        Z([3, "r data-v-f1f27dbf"]);
        Z([3, "f1f27dbf-0"]);
        Z([3, "semimask"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "_div teach-info data-v-f1f27dbf"]);
        Z([3, "_div nav-bar data-v-f1f27dbf"]);
        Z([3, "_span title data-v-f1f27dbf"]);
        Z([a, [[7], [3, "b"]]]);
        Z([[7], [3, "c"]]);
        Z([3, "_div close-btn data-v-f1f27dbf"]);
        Z([3, "_img close-btn-img data-v-f1f27dbf"]);
        Z([
          3,
          "https://st.gtimg.com/design/f2a8543fd8a53d011af849bf437d80d5.png",
        ]);
        Z([3, "_div content data-v-f1f27dbf"]);
        Z([a, [[7], [3, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_26 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_26 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_26_1();
      var eBDC = _v();
      _(r, eBDC);
      if (_oz(z, 0, e, s, gg)) {
        eBDC.wxVkey = 1;
        var bCDC = _mz(
          z,
          "semi-mask",
          [
            "bind:__l",
            1,
            "bindcloseSemimask",
            1,
            "class",
            2,
            "uI",
            3,
            "uR",
            4,
            "uS",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        var oDDC = _n("view");
        _rz(z, oDDC, "class", 7, e, s, gg);
        var xEDC = _n("view");
        _rz(z, xEDC, "class", 8, e, s, gg);
        var oFDC = _n("label");
        _rz(z, oFDC, "class", 9, e, s, gg);
        var fGDC = _oz(z, 10, e, s, gg);
        _(oFDC, fGDC);
        _(xEDC, oFDC);
        var cHDC = _mz(z, "view", ["bindtap", 11, "class", 1], [], e, s, gg);
        var hIDC = _mz(z, "image", ["class", 13, "src", 1], [], e, s, gg);
        _(cHDC, hIDC);
        _(xEDC, cHDC);
        _(oDDC, xEDC);
        var oJDC = _n("view");
        _rz(z, oJDC, "class", 15, e, s, gg);
        var cKDC = _oz(z, 16, e, s, gg);
        _(oJDC, cKDC);
        _(oDDC, oJDC);
        _(bCDC, oDDC);
        _(eBDC, bCDC);
      }
      eBDC.wxXCkey = 1;
      eBDC.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_26";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_26();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml"
  ] = [
    $gwx47_XC_26,
    "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml"
  ] = $gwx47_XC_26(
    "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "data-v-f1f27dbf .",
      [1],
      "semi-mask-content{background:var(--fill-content-layer)!important}\n.",
      [1],
      "teach-info .",
      [1],
      "nav-bar.",
      [1],
      "data-v-f1f27dbf{padding:.4266666666666667rem 0;position:relative;text-align:center}\n.",
      [1],
      "teach-info .",
      [1],
      "nav-bar .",
      [1],
      "title.",
      [1],
      "data-v-f1f27dbf{color:var(--color-heavygray);font-size:.48rem;font-weight:500;line-height:.6666666666666666rem}\n.",
      [1],
      "teach-info .",
      [1],
      "nav-bar .",
      [1],
      "close-btn.",
      [1],
      "data-v-f1f27dbf{line-height:.26666666666666666rem;padding:.4266666666666667rem;position:absolute;right:0;top:.17333333333333334rem}\n.",
      [1],
      "teach-info .",
      [1],
      "nav-bar .",
      [1],
      "close-btn .",
      [1],
      "close-btn-img.",
      [1],
      "data-v-f1f27dbf,.",
      [1],
      "teach-info .",
      [1],
      "nav-bar .",
      [1],
      "close-btn.",
      [1],
      "data-v-f1f27dbf{height:.26666666666666666rem;width:.26666666666666666rem}\n.",
      [1],
      "teach-info .",
      [1],
      "content.",
      [1],
      "data-v-f1f27dbf{color:var(--color-midgray-1);font-size:.37333333333333335rem;line-height:.56rem;padding:0 .32rem 1.2533333333333334rem}\n",
    ],
    undefined,
    { path: "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxss" }
  );
}
