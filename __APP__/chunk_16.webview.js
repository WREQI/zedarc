$gwx_XC_8 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
    function gz$gwx_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-14379b87"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div market-index data-v-14379b87"]);
        Z([[7], [3, "p"]]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "14379b87-0"]);
        Z(z[4]);
        Z(z[0]);
        Z([3, "14379b87-1"]);
        Z([[7], [3, "e"]]);
        Z(z[4]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "d"]]);
        Z([3, "r data-v-14379b87"]);
        Z([3, "14379b87-2"]);
        Z(z[10]);
        Z([3, "topBar"]);
        Z([3, "_div data-v-14379b87"]);
        Z([[7], [3, "f"]]);
        Z(z[4]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "h"]]);
        Z([3, "market-wrapper r data-v-14379b87"]);
        Z([3, "14379b87-3"]);
        Z([[7], [3, "j"]]);
        Z([3, "hq"]);
        Z([[7], [3, "k"]]);
        Z(z[4]);
        Z([[7], [3, "l"]]);
        Z([3, "market-status data-v-14379b87"]);
        Z([3, "14379b87-4"]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "o"]]);
        Z(z[4]);
        Z([[7], [3, "n"]]);
        Z(z[0]);
        Z([3, "14379b87-5"]);
        Z(z[33]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
    var x = ["./pages/index/market.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_8_1();
      var aPD = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, aPD);
      var tQD = _mz(z, "view", ["class", 2, "data-st-theme", 1], [], e, s, gg);
      var oTD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(tQD, oTD);
      var xUD = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 7, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(tQD, xUD);
      var eRD = _v();
      _(tQD, eRD);
      if (_oz(z, 10, e, s, gg)) {
        eRD.wxVkey = 1;
        var oVD = _mz(
          z,
          "top-bar",
          [
            "bind:__l",
            11,
            "bindgetBarHeight",
            1,
            "bindgetTitleHeight",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uR",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(eRD, oVD);
      }
      var fWD = _n("view");
      _rz(z, fWD, "class", 18, e, s, gg);
      var cXD = _v();
      _(fWD, cXD);
      if (_oz(z, 19, e, s, gg)) {
        cXD.wxVkey = 1;
        var oZD = _mz(
          z,
          "market",
          [
            "bind:__l",
            20,
            "bindonTabScroll",
            1,
            "bindpageInit",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uR",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(cXD, oZD);
      }
      var hYD = _v();
      _(fWD, hYD);
      if (_oz(z, 27, e, s, gg)) {
        hYD.wxVkey = 1;
        var c1D = _mz(
          z,
          "st-status",
          ["bind:__l", 28, "bindhandleError", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(hYD, c1D);
      }
      cXD.wxXCkey = 1;
      cXD.wxXCkey = 3;
      hYD.wxXCkey = 1;
      hYD.wxXCkey = 3;
      _(tQD, fWD);
      var bSD = _v();
      _(tQD, bSD);
      if (_oz(z, 33, e, s, gg)) {
        bSD.wxVkey = 1;
        var o2D = _mz(
          z,
          "privacy-policy-modal",
          ["bind:__l", 34, "bindinput", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(bSD, o2D);
      }
      eRD.wxXCkey = 1;
      eRD.wxXCkey = 3;
      bSD.wxXCkey = 1;
      bSD.wxXCkey = 3;
      _(r, tQD);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/market.wxml"] = [
    $gwx_XC_8,
    "./pages/index/market.wxml",
  ];
else
  __wxAppCode__["pages/index/market.wxml"] = $gwx_XC_8(
    "./pages/index/market.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/index/market.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "market-index.",
      [1],
      "data-v-14379b87{background-color:var(--fill-content-layer);height:100%}\n.",
      [1],
      "market-status.",
      [1],
      "data-v-14379b87 .",
      [1],
      "st-status{margin-top:.05333333333333334rem;position:absolute}\n.",
      [1],
      "scroll-container.",
      [1],
      "data-v-14379b87{background-image:linear-gradient(180deg,hsla(0,0%,100%,.6),hsla(0,0%,100%,0));background-position:0 0;background-repeat:no-repeat;background-size:100% 2.2666666666666666rem}\n.",
      [1],
      "tabbar-move-up.",
      [1],
      "data-v-14379b87{transition-timing-function:ease-out}\n.",
      [1],
      "tabbar-move-down.",
      [1],
      "data-v-14379b87{transition-timing-function:ease-in}\n.",
      [1],
      "counter-wrapper.",
      [1],
      "data-v-14379b87{bottom:.4266666666666667rem;left:0;position:fixed;right:0;z-index:10}\n.",
      [1],
      "counter-wrapper .",
      [1],
      "counter-container.",
      [1],
      "data-v-14379b87,.",
      [1],
      "counter-wrapper.",
      [1],
      "data-v-14379b87{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",
      [1],
      "counter-wrapper .",
      [1],
      "counter-container.",
      [1],
      "data-v-14379b87{-webkit-align-items:center;align-items:center;background-color:var(--fill-2);border:.013333333333333334rem solid var(--border-light);border-radius:.37333333333333335rem;box-shadow:0 .10666666666666667rem .10666666666666667rem rgba(0,0,0,.04);color:var(--color-lightgray-2);font-size:.32rem;height:.64rem;width:1.6933333333333334rem}\n.",
      [1],
      "counter-wrapper .",
      [1],
      "counter-num.",
      [1],
      "data-v-14379b87{color:var(--color-blue)}\n.",
      [1],
      "counter-wrapper .",
      [1],
      "counter-line.",
      [1],
      "data-v-14379b87{margin:0 .10666666666666667rem}\n",
    ],
    undefined,
    { path: "./pages/index/market.wxss" }
  );
}
