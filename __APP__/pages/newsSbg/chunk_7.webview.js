$gwx21_XC_19 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_19 || [];
    function gz$gwx21_XC_19_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div mod-newsComList-list data-v-cb43bb3d"]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([3, "data-v-cb43bb3d"]);
        Z([
          [2, "!"],
          [[7], [3, "a"]],
        ]);
        Z([3, "cb43bb3d-0"]);
        Z([[7], [3, "c"]]);
        Z([3, "item"]);
        Z([[7], [3, "d"]]);
        Z([3, "e"]);
        Z([3, "_div mod-com-list-item data-v-cb43bb3d"]);
        Z([[6], [[7], [3, "item"]], [3, "f"]]);
        Z([[6], [[7], [3, "item"]], [3, "d"]]);
        Z(z[1]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z(z[3]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z(z[12]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z(z[3]);
        Z([3, "cb43bb3d-2"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "g"]]);
        Z(z[1]);
        Z([[7], [3, "h"]]);
        Z(z[3]);
        Z([3, "cb43bb3d-3"]);
        Z([[7], [3, "i"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_19 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_19 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_19_1();
      var cLVB = _n("view");
      _rz(z, cLVB, "class", 0, e, s, gg);
      var oPVB = _mz(
        z,
        "no-network",
        [
          "bind:__l",
          1,
          "bindclickReload",
          1,
          "class",
          2,
          "data-c-h",
          3,
          "uI",
          4,
        ],
        [],
        e,
        s,
        gg
      );
      _(cLVB, oPVB);
      var hMVB = _v();
      _(cLVB, hMVB);
      if (_oz(z, 6, e, s, gg)) {
        hMVB.wxVkey = 1;
        var lQVB = _v();
        _(hMVB, lQVB);
        var aRVB = function (eTVB, tSVB, bUVB, gg) {
          var xWVB = _mz(
            z,
            "view",
            ["class", 10, "data-postid", 1],
            [],
            eTVB,
            tSVB,
            gg
          );
          var oXVB = _v();
          _(xWVB, oXVB);
          if (_oz(z, 12, eTVB, tSVB, gg)) {
            oXVB.wxVkey = 1;
            var fYVB = _mz(
              z,
              "com-item",
              [
                "bind:__l",
                13,
                "bindonHandleTapItem",
                1,
                "bindshowProfilePop",
                2,
                "class",
                3,
                "uI",
                4,
                "uP",
                5,
              ],
              [],
              eTVB,
              tSVB,
              gg
            );
            _(oXVB, fYVB);
          }
          oXVB.wxXCkey = 1;
          oXVB.wxXCkey = 3;
          _(bUVB, xWVB);
          return bUVB;
        };
        lQVB.wxXCkey = 4;
        _2z(z, 8, aRVB, e, s, gg, lQVB, "item", "index", "e");
      }
      var oNVB = _v();
      _(cLVB, oNVB);
      if (_oz(z, 19, e, s, gg)) {
        oNVB.wxVkey = 1;
        var cZVB = _mz(
          z,
          "no-data",
          ["bind:__l", 20, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oNVB, cZVB);
      }
      var cOVB = _v();
      _(cLVB, cOVB);
      if (_oz(z, 24, e, s, gg)) {
        cOVB.wxVkey = 1;
        var h1VB = _mz(
          z,
          "load-more",
          ["bind:__l", 25, "binddoLoadmore", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(cOVB, h1VB);
      }
      hMVB.wxXCkey = 1;
      hMVB.wxXCkey = 3;
      oNVB.wxXCkey = 1;
      oNVB.wxXCkey = 3;
      cOVB.wxXCkey = 1;
      cOVB.wxXCkey = 3;
      _(r, cLVB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_19";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_19();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml"
  ] = [
    $gwx21_XC_19,
    "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml"
  ] = $gwx21_XC_19(
    "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "mod-newsComList-list.",
      [1],
      "data-v-cb43bb3d{background-color:#fff}\n.",
      [1],
      "black .",
      [1],
      "mod-newsComList-list.",
      [1],
      "data-v-cb43bb3d,.",
      [1],
      "dark .",
      [1],
      "mod-newsComList-list.",
      [1],
      "data-v-cb43bb3d,.",
      [1],
      "fund-black .",
      [1],
      "mod-newsComList-list.",
      [1],
      "data-v-cb43bb3d,wx-html.",
      [1],
      "zxg_black .",
      [1],
      "mod-newsComList-list.",
      [1],
      "data-v-cb43bb3d{background-color:#12161f}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxss:1:200)",
    {
      path: "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxss",
    }
  );
}
