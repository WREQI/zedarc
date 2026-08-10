$gwx47_XC_24 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_24 || [];
    function gz$gwx47_XC_24_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1 = [];
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
              [[5], [[5], [1, "_div"]], [1, "navigation"]],
              [[7], [3, "i"]],
            ],
            [[7], [3, "j"]],
          ],
        ]);
        Z([3, "navigation"]);
        Z([3, "_div mask"]);
        Z([
          [2, "+"],
          [1, "opacity:"],
          [[7], [3, "b"]],
        ]);
        Z([3, "_div status-bar"]);
        Z([
          [2, "+"],
          [
            [2, "+"],
            [
              [2, "+"],
              [1, "height:"],
              [[7], [3, "c"]],
            ],
            [1, ";"],
          ],
          [
            [2, "+"],
            [1, "opacity:"],
            [[7], [3, "d"]],
          ],
        ]);
        Z([3, "_div navigation-bar flex-center"]);
        Z([[7], [3, "e"]]);
        Z([3, "_div btn-icon btn-left"]);
        Z([3, "_div icon-btn-back"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "navigation-title"]],
              [1, "flex-center"],
            ],
            [[7], [3, "g"]],
          ],
        ]);
        Z([
          [2, "+"],
          [1, "opacity:"],
          [[7], [3, "h"]],
        ]);
        Z([a, [[7], [3, "f"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_24 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_24 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_24_1();
      var fWBC = _v();
      _(r, fWBC);
      if (_oz(z, 0, e, s, gg)) {
        fWBC.wxVkey = 1;
        var cXBC = _mz(z, "view", ["class", 1, "ref", 1], [], e, s, gg);
        var hYBC = _mz(z, "view", ["class", 3, "style", 1], [], e, s, gg);
        var oZBC = _n("slot");
        _(hYBC, oZBC);
        _(cXBC, hYBC);
        var c1BC = _mz(z, "view", ["class", 5, "style", 1], [], e, s, gg);
        _(cXBC, c1BC);
        var o2BC = _n("view");
        _rz(z, o2BC, "class", 7, e, s, gg);
        var l3BC = _mz(z, "view", ["bindtap", 8, "class", 1], [], e, s, gg);
        var a4BC = _n("view");
        _rz(z, a4BC, "class", 10, e, s, gg);
        _(l3BC, a4BC);
        _(o2BC, l3BC);
        var t5BC = _mz(z, "view", ["class", 11, "style", 1], [], e, s, gg);
        var e6BC = _oz(z, 13, e, s, gg);
        _(t5BC, e6BC);
        _(o2BC, t5BC);
        _(cXBC, o2BC);
        _(fWBC, cXBC);
      }
      fWBC.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_24";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_24();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml"
  ] = [
    $gwx47_XC_24,
    "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml"
  ] = $gwx47_XC_24(
    "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "navigation{left:0;position:fixed;top:0;width:100%;z-index:1024}\n.",
      [1],
      "navigation .",
      [1],
      "mask{bottom:0;left:0;position:absolute;right:0;top:0}\n.",
      [1],
      "navigation .",
      [1],
      "navigation-bar{background:transparent;height:1.1733333333333333rem;position:relative;width:100%}\n.",
      [1],
      "navigation .",
      [1],
      "btn-icon{color:var(--color-heavygray);font-size:.5066666666666667rem;padding:.13333333333333333rem .24rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1025}\n.",
      [1],
      "navigation .",
      [1],
      "btn-icon.",
      [1],
      "btn-left{left:0}\n.",
      [1],
      "navigation .",
      [1],
      "btn-icon.",
      [1],
      "btn-right{right:0}\n.",
      [1],
      "navigation .",
      [1],
      "btn-icon .",
      [1],
      "icon-btn-back{background-image:url(https://st.gtimg.com/design/b1b2e69cc111d399dd0fec7c962a3798.png);background-size:cover;height:.4533333333333333rem;width:.24rem}\n[data-theme\x3ddark] .",
      [1],
      "navigation .",
      [1],
      "btn-icon .",
      [1],
      "icon-btn-back{background-image:url(https://st.gtimg.com/design/dc47b047523919cf27831207c2a81881.png)}\n.",
      [1],
      "navigation .",
      [1],
      "icon-back{font-size:.8533333333333334rem;width:.25333333333333335rem}\n.",
      [1],
      "navigation .",
      [1],
      "more-text{color:#1c2029;font-size:.37333333333333335rem}\n.",
      [1],
      "navigation .",
      [1],
      "mask{background:var(--fill-2)}\n.",
      [1],
      "navigation .",
      [1],
      "navigation-title{color:var(--color-heavygray);font-size:.48rem;font-weight:500;height:1.1733333333333333rem;width:100%;z-index:11}\n.",
      [1],
      "navigation .",
      [1],
      "navigation-title.",
      [1],
      "flex-center{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",
      [1],
      "navigation-black .",
      [1],
      "icon-btn-back,.",
      [1],
      "navigation-panda .",
      [1],
      "icon-btn-back{color:#98a0b3}\n.",
      [1],
      "navigation-black .",
      [1],
      "icon-back,.",
      [1],
      "navigation-panda .",
      [1],
      "icon-back{background:#98a0b3}\n.",
      [1],
      "navigation-black .",
      [1],
      "more-text,.",
      [1],
      "navigation-panda .",
      [1],
      "more-text{color:#98a0b3}\n.",
      [1],
      "navigation-black .",
      [1],
      "navigation-bar .",
      [1],
      "navigation-title,.",
      [1],
      "navigation-panda .",
      [1],
      "navigation-bar .",
      [1],
      "navigation-title{color:#f0f1f5!important}\n.",
      [1],
      "navigation-black .",
      [1],
      "mask,.",
      [1],
      "navigation-panda .",
      [1],
      "mask{background:#1e2126!important}\n.",
      [1],
      "navigation-panda.",
      [1],
      "navigation-initial .",
      [1],
      "navigation-bar .",
      [1],
      "navigation-title{color:#262e40!important}\n.",
      [1],
      "navigation-panda.",
      [1],
      "navigation-initial .",
      [1],
      "icon-btn-back{color:var(--color-heavygray)!important}\n.",
      [1],
      "navigation-panda.",
      [1],
      "navigation-initial .",
      [1],
      "icon-back{background:#1c2029!important}\n.",
      [1],
      "navigation-panda.",
      [1],
      "navigation-initial .",
      [1],
      "more-text{color:#1c2029}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxss:1:725)",
    {
      path: "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxss",
    }
  );
}
