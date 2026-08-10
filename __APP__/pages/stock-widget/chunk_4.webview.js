$gwx9_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx9_XC_4 || [];
    function gz$gwx9_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "h"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-3647ec42"]],
              [1, "card-wrapper"],
            ],
            [[7], [3, "g"]],
          ],
        ]);
        Z([3, "_div content-wrapper data-v-3647ec42"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div title-container data-v-3647ec42"]);
        Z([3, "_div stock_header_line data-v-3647ec42"]);
        Z([a, [[7], [3, "c"]], [3, "("], [[7], [3, "d"]], [3, ")-业绩趋势"]]);
        Z([3, "_div spec-line-small data-v-3647ec42"]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "data-v-3647ec42"]);
        Z([3, "3647ec42-0"]);
        Z(z[9]);
        Z([3, "_div bottom-detail-container data-v-3647ec42"]);
        Z([[7], [3, "f"]]);
        Z([3, "_div bottom-detail-container-image data-v-3647ec42"]);
        Z([3, "_div bottom-detail-container-text data-v-3647ec42"]);
        Z([3, "点击查看详情"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx9_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx9_XC_4 = true;
    var x = [
      "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx9_XC_4_1();
      var oVV = _v();
      _(r, oVV);
      if (_oz(z, 0, e, s, gg)) {
        oVV.wxVkey = 1;
        var cWV = _mz(z, "view", ["catchtap", 1, "class", 1], [], e, s, gg);
        var oXV = _n("view");
        _rz(z, oXV, "class", 3, e, s, gg);
        var lYV = _v();
        _(oXV, lYV);
        if (_oz(z, 4, e, s, gg)) {
          lYV.wxVkey = 1;
          var t1V = _n("view");
          _rz(z, t1V, "class", 5, e, s, gg);
          var e2V = _n("view");
          _rz(z, e2V, "class", 6, e, s, gg);
          var b3V = _oz(z, 7, e, s, gg);
          _(e2V, b3V);
          _(t1V, e2V);
          var o4V = _n("view");
          _rz(z, o4V, "class", 8, e, s, gg);
          _(t1V, o4V);
          _(lYV, t1V);
        }
        var aZV = _v();
        _(oXV, aZV);
        if (_oz(z, 9, e, s, gg)) {
          aZV.wxVkey = 1;
          var x5V = _mz(
            z,
            "performance-trends",
            ["bind:__l", 10, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(aZV, x5V);
        }
        lYV.wxXCkey = 1;
        aZV.wxXCkey = 1;
        aZV.wxXCkey = 3;
        _(cWV, oXV);
        var o6V = _n("view");
        _rz(z, o6V, "class", 14, e, s, gg);
        var f7V = _v();
        _(o6V, f7V);
        if (_oz(z, 15, e, s, gg)) {
          f7V.wxVkey = 1;
          var c8V = _n("view");
          _rz(z, c8V, "class", 16, e, s, gg);
          _(f7V, c8V);
          var h9V = _n("view");
          _rz(z, h9V, "class", 17, e, s, gg);
          var o0V = _oz(z, 18, e, s, gg);
          _(h9V, o0V);
          _(f7V, h9V);
        }
        f7V.wxXCkey = 1;
        _(cWV, o6V);
        _(oVV, cWV);
      }
      oVV.wxXCkey = 1;
      oVV.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx9_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx9_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml"
  ] = [
    $gwx9_XC_4,
    "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml"
  ] = $gwx9_XC_4(
    "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "data-v-3647ec42.",
      [1],
      "skin-white.",
      [1],
      "data-v-3647ec42{--color-text-primary:#262e40!important;--color-text-secondary:#5d6779!important;--color-text-tertiary:#8d93a3!important;--color-text-placeholder:#b7bbc6!important;--color-bg-tertiary:#e5e8f0!important;--color-border-light:#e5e8f0!important;--color-rise:#ee3f4d!important;--color-fall:#00b578!important;--color-flat:#8d93a3!important;--color-primary:#2e7ef9!important;--color-primary-light:#e5f0ff!important;--color-link:#2e7ef9!important;--color-blue:#3077ec;--color-red:#e63535!important;--color-green:#1caa3c!important;--fill-1:#f5f6fa!important;--fill-2:#fff!important;--fill-3:#f5f6fa!important;--color-heavygray:#262e40!important;--border-light:#e9ebf0!important;--color-lightgray-2:#98a0b3!important;--color-midgray-1:#475166!important;--color-card:#f5f6fa!important;--border-heavy-divider:#dcdfe6!important}\n.",
      [1],
      "skin-black.",
      [1],
      "data-v-3647ec42{--color-text-primary:#fff!important;--color-text-secondary:#a0a4b0!important;--color-text-secondary-dark:#a0a4b0!important;--color-text-tertiary:#6e727d!important;--color-text-placeholder:#4e515a!important;--color-bg-tertiary:#2a2d36!important;--color-border-light:#2a2d36!important;--color-rise:#ee3f4d!important;--color-fall:#00b578!important;--color-flat:#6e727d!important;--color-primary:#5b91f5!important;--color-primary-light:#2a3d56!important;--color-link:#5b91f5!important;--color-red:#e63535!important;--color-green:#1caa3c!important;--fill-1:#000!important;--fill-2:#12161f!important;--fill-3:#171d28!important;--color-heavygray:#f0f1f5!important;--border-light:#191e27!important;--color-lightgray-2:#69738c!important;--color-midgray-1:#a7b0c4!important;--color-card:#171d28!important;--border-heavy-divider:#262e40!important}\n.",
      [1],
      "card-wrapper.",
      [1],
      "data-v-3647ec42{background:var(--fill-3);border-radius:.10666666666666667rem;padding:.32rem .32rem 0}\n.",
      [1],
      "content-wrapper.",
      [1],
      "data-v-3647ec42{background:var(--fill-2);padding:0 .32rem}\n.",
      [1],
      "title-container.",
      [1],
      "data-v-3647ec42{padding-bottom:.013333333333333334rem}\n.",
      [1],
      "title-container .",
      [1],
      "stock_header_line.",
      [1],
      "data-v-3647ec42{color:var(--color-heavygray);font-size:.37333333333333335rem;font-weight:500;line-height:.5333333333333333rem;padding:.32rem 0;text-align:center}\n.",
      [1],
      "title-container .",
      [1],
      "spec-line-small.",
      [1],
      "data-v-3647ec42{background:var(--color-border-light);height:.013333333333333334rem}\n.",
      [1],
      "bottom-detail-container.",
      [1],
      "data-v-3647ec42{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;padding:.16rem 0}\n.",
      [1],
      "bottom-detail-container-image.",
      [1],
      "data-v-3647ec42{background-image:url(https://st.gtimg.com/design/bbfb1333e95658b17a8897c4beb85f2d.png);background-repeat:no-repeat;background-size:100% 100%;height:.32rem;margin-right:.10666666666666667rem;width:.32rem}\n.",
      [1],
      "bottom-detail-container-text.",
      [1],
      "data-v-3647ec42{color:var(--color-text-secondary);font-size:.32rem}\n.",
      [1],
      "text-right.",
      [1],
      "data-v-3647ec42{text-align:right}\n.",
      [1],
      "text-center.",
      [1],
      "data-v-3647ec42{text-align:center}\n.",
      [1],
      "no-mar.",
      [1],
      "data-v-3647ec42,.",
      [1],
      "nomar.",
      [1],
      "data-v-3647ec42{margin:0}\n.",
      [1],
      "skin-black.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod,.",
      [1],
      "skin-dark.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod,.",
      [1],
      "skin-panda.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod{background-color:#12161f!important}\n.",
      [1],
      "skin-black.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab,.",
      [1],
      "skin-dark.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab,.",
      [1],
      "skin-panda.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab{background-color:#171d28!important}\n.",
      [1],
      "skin-black.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab.",
      [1],
      "active,.",
      [1],
      "skin-dark.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab.",
      [1],
      "active,.",
      [1],
      "skin-panda.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab.",
      [1],
      "active{background-color:#26171b!important}\n.",
      [1],
      "skin-black.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab .",
      [1],
      "t-text,.",
      [1],
      "skin-dark.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab .",
      [1],
      "t-text,.",
      [1],
      "skin-panda.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab .",
      [1],
      "t-text{color:var(--color-lightgray-1)!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod{background-color:#fff!important;border-bottom:0!important;border-radius:0!important;margin:0!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg{background:transparent!important;height:.7466666666666667rem;margin-bottom:.32rem!important;padding:.05333333333333334rem 0;width:100%!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab{background-color:var(--fill-3)!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab .",
      [1],
      "t-text{color:var(--text-color-2)}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab.",
      [1],
      "active{background-color:#fceded!important;height:.7466666666666667rem!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "item-sub-tab-zxg .",
      [1],
      "sub-tab.",
      [1],
      "active .",
      [1],
      "t-text{color:var(--color-red)!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "finance-hytrendChartClass{width:100%!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "hytrendChartContent,.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "hytrendChartContent .",
      [1],
      "hytrendChartClass{height:3.84rem!important;width:7.44rem!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "hytrendChartClass{width:100%!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "chart-bottom-content .",
      [1],
      "chart-legend-content{margin-top:.32rem!important}\n.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "chart-range-content,.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "f2-tooltip,.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "mod-finance-title,.",
      [1],
      "data-v-3647ec42 .",
      [1],
      "finance-sub-mod .",
      [1],
      "sub-line{display:none!important;visibility:hidden!important}\n",
    ],
    undefined,
    {
      path: "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxss",
    }
  );
}
