$gwx14_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx14_XC_1 || [];
    function gz$gwx14_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "f"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-423b52ba"]],
              [1, "ai-search-bar"],
            ],
            [[7], [3, "e"]],
          ],
        ]);
        Z([3, "aiSearchBar"]);
        Z([3, "_div ai-icon data-v-423b52ba"]);
        Z([3, "问元宝"]);
        Z([[7], [3, "b"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-423b52ba"]],
              [1, "ai-question"],
            ],
            [[7], [3, "d"]],
          ],
        ]);
        Z([a, [[7], [3, "c"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx14_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx14_XC_1 = true;
    var x = [
      "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_1_1();
      var tEB = _v();
      _(r, tEB);
      if (_oz(z, 0, e, s, gg)) {
        tEB.wxVkey = 1;
        var eFB = _mz(
          z,
          "view",
          ["bindtap", 1, "class", 1, "id", 2],
          [],
          e,
          s,
          gg
        );
        var oHB = _n("view");
        _rz(z, oHB, "class", 4, e, s, gg);
        var xIB = _oz(z, 5, e, s, gg);
        _(oHB, xIB);
        _(eFB, oHB);
        var bGB = _v();
        _(eFB, bGB);
        if (_oz(z, 6, e, s, gg)) {
          bGB.wxVkey = 1;
          var oJB = _n("view");
          _rz(z, oJB, "class", 7, e, s, gg);
          var fKB = _oz(z, 8, e, s, gg);
          _(oJB, fKB);
          _(bGB, oJB);
        }
        bGB.wxXCkey = 1;
        _(tEB, eFB);
      }
      tEB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx14_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx14_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml"
  ] = [
    $gwx14_XC_1,
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml"
  ] = $gwx14_XC_1(
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-423b52ba{-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:.10666666666666667rem;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:.96rem;padding:0 .21333333333333335rem;position:relative}\n.",
      [1],
      "ai-search-bar.",
      [1],
      "lite.",
      [1],
      "data-v-423b52ba{background-color:#f5f6fa}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-icon.",
      [1],
      "data-v-423b52ba{color:#e63535;-webkit-flex:none;flex:none;font-family:stockFont;font-size:.37333333333333335rem;font-weight:500;line-height:.5333333333333333rem;padding-right:.10666666666666667rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "data-v-423b52ba{border-left:.013333333333333334rem solid #c9d0dc;color:#7a8499;font-family:PingFang SC;font-size:.37333333333333335rem;line-height:.5333333333333333rem;overflow:hidden;padding-left:.10666666666666667rem;text-overflow:ellipsis;white-space:nowrap}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "font-26.",
      [1],
      "data-v-423b52ba{font-size:.3466666666666667rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "font-24.",
      [1],
      "data-v-423b52ba{font-size:.32rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "font-23.",
      [1],
      "data-v-423b52ba{font-size:.30666666666666664rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "font-22.",
      [1],
      "data-v-423b52ba{font-size:.29333333333333333rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "font-21.",
      [1],
      "data-v-423b52ba{font-size:.28rem}\n[data-st-theme\x3dblack] .",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-423b52ba,[data-st-theme\x3ddark] .",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-423b52ba,wx-html.",
      [1],
      "black .",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-423b52ba{background-color:#12161f}\n[data-st-theme\x3dblack] .",
      [1],
      "ai-search-bar.",
      [1],
      "lite.",
      [1],
      "data-v-423b52ba,[data-st-theme\x3ddark] .",
      [1],
      "ai-search-bar.",
      [1],
      "lite.",
      [1],
      "data-v-423b52ba,wx-html.",
      [1],
      "black .",
      [1],
      "ai-search-bar.",
      [1],
      "lite.",
      [1],
      "data-v-423b52ba{background-color:#000}\n[data-st-theme\x3dblack] .",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "data-v-423b52ba,[data-st-theme\x3ddark] .",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "data-v-423b52ba,wx-html.",
      [1],
      "black .",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "data-v-423b52ba{border-left:.013333333333333334rem solid #262e40;color:#7d88a1}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxss:1:1596)",
    {
      path: "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxss",
    }
  );
}
