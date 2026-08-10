$gwx21_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_4 || [];
    function gz$gwx21_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [
                    [5],
                    [
                      [5],
                      [[5], [[5], [1, "_div"]], [1, "data-v-12b3d8c4"]],
                      [1, "image_item"],
                    ],
                    [[7], [3, "j"]],
                  ],
                  [[7], [3, "k"]],
                ],
                [[7], [3, "l"]],
              ],
              [[7], [3, "m"]],
            ],
            [[7], [3, "n"]],
          ],
        ]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "g"]]);
        Z([3, "_img data-v-12b3d8c4"]);
        Z([[7], [3, "d"]]);
        Z([
          [2, "!"],
          [[7], [3, "b"]],
        ]);
        Z([[7], [3, "a"]]);
        Z([3, "img"]);
        Z([[7], [3, "c"]]);
        Z(z[4]);
        Z([
          [2, "!"],
          [[7], [3, "h"]],
        ]);
        Z([[7], [3, "i"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_4 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_4_1();
      var tGN = _n("view");
      _rz(z, tGN, "class", 0, e, s, gg);
      var eHN = _mz(
        z,
        "image",
        [
          "binderror",
          1,
          "bindload",
          1,
          "bindtap",
          2,
          "class",
          3,
          "data-src",
          4,
          "hidden",
          5,
          "key",
          6,
          "ref",
          7,
          "src",
          8,
        ],
        [],
        e,
        s,
        gg
      );
      _(tGN, eHN);
      var bIN = _mz(
        z,
        "image",
        ["class", 10, "hidden", 1, "src", 2],
        [],
        e,
        s,
        gg
      );
      _(tGN, bIN);
      _(r, tGN);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml"
  ] = [
    $gwx21_XC_4,
    "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml"
  ] = $gwx21_XC_4(
    "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxss"
  ] = setCssToHead(
    [
      "@font-face{font-family:tencent;font-style:normal;font-weight:400;src:url(https://wzq.gtimg.com/resources/mp/lite/fonts/sq/tencent/icomoon.eot?wxavk7);src:url(https://wzq.gtimg.com/resources/mp/lite/fonts/sq/tencent/icomoon.eot?wxavk7#iefix) format(\x22embedded-opentype\x22),url(https://wzq.gtimg.com/resources/mp/lite/fonts/sq/tencent/icomoon.ttf?wxavk7) format(\x22truetype\x22),url(https://wzq.gtimg.com/resources/mp/lite/fonts/sq/tencent/icomoon.woff?wxavk7) format(\x22woff\x22),url(https://st.gtimg.com/files/062bd50d_iBgfGt98DzN.svg) format(\x22svg\x22)}\n.",
      [1],
      "community-scope [class^\x3dtencent-].",
      [1],
      "data-v-12b3d8c4,[class*\x3d\x22 tencent-\x22].",
      [1],
      "data-v-12b3d8c4{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:tencent!important;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none}\n.",
      [1],
      "tencent-uniE900.",
      [1],
      "data-v-12b3d8c4:before{color:#e2e5f0;content:\x22\\e900\x22;-webkit-mask:-webkit-gradient(linear,0 100%,100% 100%,from(#dde1ea),to(#e2e5f0));mask:-webkit-gradient(linear,0 100%,100% 100%,from(#dde1ea),to(#e2e5f0))}\n.",
      [1],
      "black .",
      [1],
      "image_item.",
      [1],
      "empty.",
      [1],
      "data-v-12b3d8c4,.",
      [1],
      "dark .",
      [1],
      "image_item.",
      [1],
      "empty.",
      [1],
      "data-v-12b3d8c4,.",
      [1],
      "fund-black .",
      [1],
      "image_item.",
      [1],
      "empty.",
      [1],
      "data-v-12b3d8c4,wx-html.",
      [1],
      "zxg_black .",
      [1],
      "image_item.",
      [1],
      "empty.",
      [1],
      "data-v-12b3d8c4{background-color:#171d28!important}\n.",
      [1],
      "image_item.",
      [1],
      "data-v-12b3d8c4{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:center;justify-content:center;width:100%}\n.",
      [1],
      "image_item.",
      [1],
      "circular .",
      [1],
      "_img.",
      [1],
      "data-v-12b3d8c4,.",
      [1],
      "image_item.",
      [1],
      "circular wx-img.",
      [1],
      "data-v-12b3d8c4{border-radius:50%;height:100%;overflow:hidden;width:100%}\n.",
      [1],
      "image_item.",
      [1],
      "roundCorner.",
      [1],
      "data-v-12b3d8c4{border-radius:.10666666666666667rem;overflow:hidden}\n.",
      [1],
      "image_item.",
      [1],
      "roundCorner .",
      [1],
      "_img.",
      [1],
      "data-v-12b3d8c4,.",
      [1],
      "image_item.",
      [1],
      "roundCorner wx-img.",
      [1],
      "data-v-12b3d8c4{height:100%;width:100%}\n.",
      [1],
      "image_item.",
      [1],
      "opacity.",
      [1],
      "data-v-12b3d8c4{height:0;opacity:0;width:0}\n.",
      [1],
      "image_item.",
      [1],
      "empty.",
      [1],
      "E9EBF0.",
      [1],
      "data-v-12b3d8c4{background-color:#e9ebf0}\n.",
      [1],
      "image_item.",
      [1],
      "empty.",
      [1],
      "DCDFE6.",
      [1],
      "data-v-12b3d8c4{background-color:#dcdfe6}\n.",
      [1],
      "image_item .",
      [1],
      "_img.",
      [1],
      "data-v-12b3d8c4,.",
      [1],
      "image_item wx-img.",
      [1],
      "data-v-12b3d8c4{max-height:100%;max-width:100%}\n.",
      [1],
      "image_item .",
      [1],
      "_image.",
      [1],
      "data-v-12b3d8c4,.",
      [1],
      "image_item wx-image.",
      [1],
      "data-v-12b3d8c4{height:100%;width:100%}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxss:1:2182)",
    {
      path: "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxss",
    }
  );
}
