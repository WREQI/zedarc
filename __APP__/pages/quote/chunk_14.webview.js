$gwx4_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_6 || [];
    function gz$gwx4_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-e7badb50"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "detail-page-rotate"]], [1, "data-v-e7badb50"]],
              [
                [2, "&&"],
                [[7], [3, "r"]],
                [1, "skin-black"],
              ],
            ],
            [
              [2, "&&"],
              [[7], [3, "s"]],
              [1, "padding-bottom"],
            ],
          ],
        ]);
        Z([[7], [3, "q"]]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "e7badb50-0"]);
        Z([[7], [3, "b"]]);
        Z(z[4]);
        Z(z[0]);
        Z([3, "e7badb50-1"]);
        Z(z[7]);
        Z([[7], [3, "c"]]);
        Z(z[4]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z([3, "r data-v-e7badb50"]);
        Z([3, "e7badb50-2"]);
        Z([[7], [3, "h"]]);
        Z([3, "quotation"]);
        Z([[7], [3, "i"]]);
        Z(z[4]);
        Z([[7], [3, "n"]]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "o"]]);
        Z(z[0]);
        Z([3, "e7badb50-3"]);
        Z([[7], [3, "p"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_6 = true;
    var x = ["./pages/quote/rotateDetail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_6_1();
      var cSDB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, cSDB);
      var oTDB = _mz(z, "view", ["class", 2, "data-st-theme", 1], [], e, s, gg);
      var eXDB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oTDB, eXDB);
      var lUDB = _v();
      _(oTDB, lUDB);
      if (_oz(z, 7, e, s, gg)) {
        lUDB.wxVkey = 1;
        var bYDB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(lUDB, bYDB);
      }
      var aVDB = _v();
      _(oTDB, aVDB);
      if (_oz(z, 12, e, s, gg)) {
        aVDB.wxVkey = 1;
        var oZDB = _mz(
          z,
          "mini-quotation",
          [
            "bind:__l",
            13,
            "bindcloseLandscape",
            1,
            "bindonInitData",
            2,
            "bindonUpdateData",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
            "uR",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        _(aVDB, oZDB);
      }
      var tWDB = _v();
      _(oTDB, tWDB);
      if (_oz(z, 21, e, s, gg)) {
        tWDB.wxVkey = 1;
        var x1DB = _mz(
          z,
          "chart-wrapper",
          [
            "bind:__l",
            22,
            "bindcloseLandscape",
            1,
            "bindgetExtraInfo",
            2,
            "bindgetMarketState",
            3,
            "bindgetUSPanData",
            4,
            "bindgetZDP",
            5,
            "bindswitchChart",
            6,
            "class",
            7,
            "uI",
            8,
            "uP",
            9,
          ],
          [],
          e,
          s,
          gg
        );
        _(tWDB, x1DB);
      }
      lUDB.wxXCkey = 1;
      lUDB.wxXCkey = 3;
      aVDB.wxXCkey = 1;
      aVDB.wxXCkey = 3;
      tWDB.wxXCkey = 1;
      tWDB.wxXCkey = 3;
      _(r, oTDB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/quote/rotateDetail.wxml"] = [
    $gwx4_XC_6,
    "./pages/quote/rotateDetail.wxml",
  ];
else
  __wxAppCode__["pages/quote/rotateDetail.wxml"] = $gwx4_XC_6(
    "./pages/quote/rotateDetail.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/quote/rotateDetail.wxss"] = setCssToHead(
    [
      "wx-page.",
      [1],
      "data-v-e7badb50{height:100%;width:100%}\n.",
      [1],
      "detail-page-rotate.",
      [1],
      "data-v-e7badb50{background-color:var(--fill-2);height:100%;overflow:hidden}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/quote/rotateDetail.wxss:1:1)",
    { path: "./pages/quote/rotateDetail.wxss" }
  );
}
