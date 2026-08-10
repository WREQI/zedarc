$gwx14_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx14_XC_5 || [];
    function gz$gwx14_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-befbded4"]],
              [1, "ai-search-bar"],
            ],
            [[7], [3, "c"]],
          ],
        ]);
        Z([3, "aiSearchBar"]);
        Z([3, "_div ai-search-header data-v-befbded4"]);
        Z([3, "_div ai-icon data-v-befbded4"]);
        Z([3, "问元宝"]);
        Z([3, "_div ai-divider data-v-befbded4"]);
        Z([3, "question"]);
        Z([[7], [3, "b"]]);
        Z([3, "b"]);
        Z([[6], [[7], [3, "question"]], [3, "c"]]);
        Z([3, "_div ai-question data-v-befbded4"]);
        Z([3, "_div ai-question-tag data-v-befbded4"]);
        Z([3, "•"]);
        Z([3, "_div ai-question-title data-v-befbded4"]);
        Z([a, [[6], [[7], [3, "question"]], [3, "a"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx14_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx14_XC_5 = true;
    var x = [
      "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_5_1();
      var c6C = _v();
      _(r, c6C);
      if (_oz(z, 0, e, s, gg)) {
        c6C.wxVkey = 1;
        var h7C = _mz(z, "view", ["class", 1, "id", 1], [], e, s, gg);
        var o8C = _n("view");
        _rz(z, o8C, "class", 3, e, s, gg);
        var c9C = _n("view");
        _rz(z, c9C, "class", 4, e, s, gg);
        var o0C = _oz(z, 5, e, s, gg);
        _(c9C, o0C);
        _(o8C, c9C);
        _(h7C, o8C);
        var lAD = _n("view");
        _rz(z, lAD, "class", 6, e, s, gg);
        _(h7C, lAD);
        var aBD = _v();
        _(h7C, aBD);
        var tCD = function (bED, eDD, oFD, gg) {
          var oHD = _mz(
            z,
            "view",
            ["bindtap", 10, "class", 1],
            [],
            bED,
            eDD,
            gg
          );
          var fID = _n("view");
          _rz(z, fID, "class", 12, bED, eDD, gg);
          var cJD = _oz(z, 13, bED, eDD, gg);
          _(fID, cJD);
          _(oHD, fID);
          var hKD = _n("view");
          _rz(z, hKD, "class", 14, bED, eDD, gg);
          var oLD = _oz(z, 15, bED, eDD, gg);
          _(hKD, oLD);
          _(oHD, hKD);
          _(oFD, oHD);
          return oFD;
        };
        aBD.wxXCkey = 2;
        _2z(z, 8, tCD, e, s, gg, aBD, "question", "index", "b");
        _(c6C, h7C);
      }
      c6C.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx14_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx14_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml"
  ] = [
    $gwx14_XC_5,
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml"
  ] = $gwx14_XC_5(
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-befbded4{background-color:var(--color-card);border-radius:.21333333333333335rem;position:relative}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-search-header.",
      [1],
      "data-v-befbded4{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:.5866666666666667rem;padding:.32rem .32rem 0}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-search-header .",
      [1],
      "ai-icon.",
      [1],
      "data-v-befbded4{color:var(--color-red);font-family:stockFont;font-size:.4266666666666667rem;font-weight:500;line-height:.5866666666666667rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-divider.",
      [1],
      "data-v-befbded4{background-color:var(--border-heavy-divider);height:.013333333333333334rem;margin:.21333333333333335rem .32rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question.",
      [1],
      "data-v-befbded4{-webkit-align-items:start;align-items:start;color:var(--color-link2);display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-size:.37333333333333335rem;line-height:.5333333333333333rem;padding:0 .32rem .32rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question .",
      [1],
      "ai-question-tag.",
      [1],
      "data-v-befbded4{font-family:stockFont;margin:0 .23333333333333334rem}\n.",
      [1],
      "ai-search-bar .",
      [1],
      "ai-question .",
      [1],
      "ai-question-title.",
      [1],
      "data-v-befbded4{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-befbded4{--color-blue:#3077ec;--color-red:#e63535;--border-heavy-divider:#dcdfe6;--color-card:#f5f6fa;--color-link2:#4774b3}\n.",
      [1],
      "ai-search-bar.",
      [1],
      "lite.",
      [1],
      "data-v-befbded4{--color-link2:#576b95}\n.",
      [1],
      "black .",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-befbded4,[data-st-theme\x3dblack] .",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-befbded4,[data-st-theme\x3ddark] .",
      [1],
      "ai-search-bar.",
      [1],
      "data-v-befbded4{--border-heavy-divider:#262e40;--color-card:#171d28}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxss:1:1444)",
    {
      path: "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxss",
    }
  );
}
