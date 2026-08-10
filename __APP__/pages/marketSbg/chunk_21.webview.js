$gwx47_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_14 || [];
    function gz$gwx47_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "c"]]);
        Z([3, "r data-v-ce817551"]);
        Z([3, "ce817551-0"]);
        Z([[7], [3, "d"]]);
        Z([3, "appNavigationRef"]);
        Z([[7], [3, "e"]]);
        Z([3, "_div hot-topic-nav-bar data-v-ce817551"]);
        Z([3, "_div hot-topic-nav-bar__title-layer data-v-ce817551"]);
        Z([[7], [3, "i"]]);
        Z([3, "_div hot-topic-nav-bar__safe-area data-v-ce817551"]);
        Z([[7], [3, "f"]]);
        Z([3, "_div hot-topic-nav-bar__content data-v-ce817551"]);
        Z([[7], [3, "h"]]);
        Z([3, "_div hot-topic-nav-bar__title data-v-ce817551"]);
        Z([a, [[7], [3, "g"]]]);
        Z([3, "back-icon"]);
        Z([[7], [3, "l"]]);
        Z([3, "_img hot-topic-nav-bar__back data-v-ce817551"]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "j"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_14 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_14_1();
      var cFGB = _v();
      _(r, cFGB);
      if (_oz(z, 0, e, s, gg)) {
        cFGB.wxVkey = 1;
        var hGGB = _mz(
          z,
          "navigation",
          ["bind:__l", 1, "bindback", 1, "class", 2, "uI", 3, "uP", 4, "uR", 5],
          [],
          e,
          s,
          gg
        );
        _(cFGB, hGGB);
      } else if (_oz(z, 7, e, s, gg)) {
        cFGB.wxVkey = 2;
        var oHGB = _n("view");
        _rz(z, oHGB, "class", 8, e, s, gg);
        var cIGB = _mz(z, "view", ["class", 9, "style", 1], [], e, s, gg);
        var oJGB = _mz(z, "view", ["class", 11, "style", 1], [], e, s, gg);
        _(cIGB, oJGB);
        var lKGB = _mz(z, "view", ["class", 13, "style", 1], [], e, s, gg);
        var aLGB = _n("view");
        _rz(z, aLGB, "class", 15, e, s, gg);
        var tMGB = _oz(z, 16, e, s, gg);
        _(aLGB, tMGB);
        _(lKGB, aLGB);
        _(cIGB, lKGB);
        _(oHGB, cIGB);
        var eNGB = _mz(
          z,
          "image",
          ["ariaLabel", 17, "catchtap", 1, "class", 2, "src", 3, "style", 4],
          [],
          e,
          s,
          gg
        );
        _(oHGB, eNGB);
        _(cFGB, oHGB);
      }
      cFGB.wxXCkey = 1;
      cFGB.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml"
  ] = [
    $gwx47_XC_14,
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml"
  ] = $gwx47_XC_14(
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "hot-topic-nav-bar.",
      [1],
      "data-v-ce817551{left:0;pointer-events:none;position:fixed;right:0;top:0;z-index:90}\n.",
      [1],
      "hot-topic-nav-bar__title-layer.",
      [1],
      "data-v-ce817551{background:var(--fill-content-layer);box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;width:100%}\n.",
      [1],
      "hot-topic-nav-bar__safe-area.",
      [1],
      "data-v-ce817551{width:100%}\n.",
      [1],
      "hot-topic-nav-bar__content.",
      [1],
      "data-v-ce817551{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:relative;width:100%}\n.",
      [1],
      "hot-topic-nav-bar__title.",
      [1],
      "data-v-ce817551{color:var(--color-heavygray);font-size:.4533333333333333rem;line-height:1.2;max-width:4.8rem;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}\n.",
      [1],
      "hot-topic-nav-bar__back.",
      [1],
      "data-v-ce817551{box-sizing:initial;height:.64rem;left:0;padding:.16rem;pointer-events:auto;position:fixed;width:.64rem;z-index:91}\n",
    ],
    undefined,
    {
      path: "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxss",
    }
  );
}
