$gwx0_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_10 || [];
    function gz$gwx0_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div basket-tag-wrapper data-v-1e6998b1"]);
        Z([3, "basket-tag-wrapper"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "f"]]);
        Z([3, "_div basket-tag-container data-v-1e6998b1"]);
        Z([3, "_img tag data-v-1e6998b1"]);
        Z([
          3,
          "https://st.gtimg.com/design/6e622c4b85fad6ade1d937535a9afb28.png",
        ]);
        Z([3, "_div basket-tag-title data-v-1e6998b1"]);
        Z([a, [[7], [3, "b"]]]);
        Z([[7], [3, "c"]]);
        Z([3, "_div basket-tag-info data-v-1e6998b1"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-1e6998b1"]],
              [1, "basket-tag-change-value"],
            ],
            [[7], [3, "e"]],
          ],
        ]);
        Z([a, [[7], [3, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_10 = true;
    var x = [
      "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_10_1();
      var oTX = _mz(z, "view", ["class", 0, "ref", 1], [], e, s, gg);
      var cUX = _v();
      _(oTX, cUX);
      if (_oz(z, 2, e, s, gg)) {
        cUX.wxVkey = 1;
        var oVX = _mz(z, "view", ["catchtap", 3, "class", 1], [], e, s, gg);
        var aXX = _mz(z, "image", ["class", 5, "src", 1], [], e, s, gg);
        _(oVX, aXX);
        var tYX = _n("view");
        _rz(z, tYX, "class", 7, e, s, gg);
        var eZX = _oz(z, 8, e, s, gg);
        _(tYX, eZX);
        _(oVX, tYX);
        var lWX = _v();
        _(oVX, lWX);
        if (_oz(z, 9, e, s, gg)) {
          lWX.wxVkey = 1;
          var b1X = _n("view");
          _rz(z, b1X, "class", 10, e, s, gg);
          var o2X = _n("view");
          _rz(z, o2X, "class", 11, e, s, gg);
          var x3X = _oz(z, 12, e, s, gg);
          _(o2X, x3X);
          _(b1X, o2X);
          _(lWX, b1X);
        }
        lWX.wxXCkey = 1;
        _(cUX, oVX);
      }
      cUX.wxXCkey = 1;
      _(r, oTX);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxml"
  ] = [
    $gwx0_XC_10,
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxml",
  ];
else
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxml"
  ] = $gwx0_XC_10(
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "basket-tag-container.",
      [1],
      "data-v-1e6998b1{-webkit-align-items:center;align-items:center;background-color:#f5f6fa;border-radius:.05333333333333334rem;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-direction:row;flex-direction:row;height:.5866666666666667rem;margin-right:auto;padding:0 .21333333333333335rem}\n.",
      [1],
      "basket-tag-container .",
      [1],
      "tag.",
      [1],
      "data-v-1e6998b1{-webkit-align-items:center;align-items:center;background-color:#eb5a66;border-radius:.02666666666666667rem;color:#fff;display:-webkit-flex;display:flex;font-size:.21333333333333335rem;font-weight:500;height:.26666666666666666rem;-webkit-justify-content:center;justify-content:center;width:.5066666666666667rem}\n.",
      [1],
      "basket-tag-container .",
      [1],
      "basket-tag-title.",
      [1],
      "data-v-1e6998b1{color:#475166;font-size:.32rem;font-weight:500;line-height:.5333333333333333rem;margin-left:.10666666666666667rem}\n.",
      [1],
      "basket-tag-container .",
      [1],
      "basket-tag-info.",
      [1],
      "data-v-1e6998b1{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-left:.21333333333333335rem}\n.",
      [1],
      "basket-tag-container .",
      [1],
      "basket-tag-info .",
      [1],
      "basket-tag-change-value.",
      [1],
      "data-v-1e6998b1{color:#7a8499;font-size:.32rem;line-height:.4533333333333333rem}\n.",
      [1],
      "basket-tag-container .",
      [1],
      "basket-tag-info .",
      [1],
      "up.",
      [1],
      "data-v-1e6998b1{color:#e63535}\n.",
      [1],
      "basket-tag-container .",
      [1],
      "basket-tag-info .",
      [1],
      "down.",
      [1],
      "data-v-1e6998b1{color:#2db955}\n",
    ],
    undefined,
    {
      path: "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketTag.wxss",
    }
  );
}
