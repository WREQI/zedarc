$gwx3_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_9 || [];
    function gz$gwx3_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1 = [];
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
            [[5], [[5], [1, "_div"]], [1, "data-v-25d56cb3"]],
            [[7], [3, "b"]],
          ],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_9 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_9_1();
      var x52B = _v();
      _(r, x52B);
      if (_oz(z, 0, e, s, gg)) {
        x52B.wxVkey = 1;
        var o62B = _n("view");
        _rz(z, o62B, "class", 1, e, s, gg);
        _(x52B, o62B);
      }
      x52B.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxml"
  ] = [
    $gwx3_XC_9,
    "./pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxml"
  ] = $gwx3_XC_9(
    "./pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "micon.",
      [1],
      "data-v-25d56cb3{background:url(https://st.gtimg.com/design/8bb53d111cae96739c3d37045f436f39.png) no-repeat 0 0;background-size:.37333333333333335rem 6.16rem;height:.26666666666666666rem;width:.37333333333333335rem}\n.",
      [1],
      "micon.",
      [1],
      "bj.",
      [1],
      "data-v-25d56cb3{background-position:0 0}\n.",
      [1],
      "micon.",
      [1],
      "chuang.",
      [1],
      "data-v-25d56cb3{background-position:0 -.28rem}\n.",
      [1],
      "micon.",
      [1],
      "cnjj.",
      [1],
      "data-v-25d56cb3{background-position:0 -.56rem}\n.",
      [1],
      "micon.",
      [1],
      "cwjj.",
      [1],
      "data-v-25d56cb3,.",
      [1],
      "micon.",
      [1],
      "jj.",
      [1],
      "data-v-25d56cb3{background-position:0 -.84rem}\n.",
      [1],
      "micon.",
      [1],
      "fu.",
      [1],
      "data-v-25d56cb3,.",
      [1],
      "micon.",
      [1],
      "hd.",
      [1],
      "data-v-25d56cb3{background-position:0 -1.12rem}\n.",
      [1],
      "micon.",
      [1],
      "hk.",
      [1],
      "data-v-25d56cb3{background-position:0 -1.4rem}\n.",
      [1],
      "micon.",
      [1],
      "hqzhi.",
      [1],
      "data-v-25d56cb3{background-position:0 -1.68rem}\n.",
      [1],
      "micon.",
      [1],
      "ke.",
      [1],
      "data-v-25d56cb3{background-position:0 -1.96rem}\n.",
      [1],
      "micon.",
      [1],
      "nq.",
      [1],
      "data-v-25d56cb3{background-position:0 -2.24rem}\n.",
      [1],
      "micon.",
      [1],
      "pt.",
      [1],
      "data-v-25d56cb3{background-position:0 -2.52rem}\n.",
      [1],
      "micon.",
      [1],
      "sh.",
      [1],
      "data-v-25d56cb3{background-position:0 -2.8rem}\n.",
      [1],
      "micon.",
      [1],
      "sz.",
      [1],
      "data-v-25d56cb3{background-position:0 -3.08rem}\n.",
      [1],
      "micon.",
      [1],
      "uk.",
      [1],
      "data-v-25d56cb3{background-position:0 -3.36rem}\n.",
      [1],
      "micon.",
      [1],
      "us.",
      [1],
      "data-v-25d56cb3{background-position:0 -3.64rem}\n.",
      [1],
      "micon.",
      [1],
      "zhai.",
      [1],
      "data-v-25d56cb3{background-position:0 -3.92rem}\n.",
      [1],
      "micon.",
      [1],
      "sp.",
      [1],
      "data-v-25d56cb3{background-position:0 -4.2rem}\n.",
      [1],
      "micon.",
      [1],
      "xsbzhi.",
      [1],
      "data-v-25d56cb3{background-position:0 -4.48rem}\n.",
      [1],
      "micon.",
      [1],
      "hkzhi.",
      [1],
      "data-v-25d56cb3{background-position:0 -4.76rem}\n.",
      [1],
      "micon.",
      [1],
      "hszhi.",
      [1],
      "data-v-25d56cb3{background-position:0 -5.04rem}\n.",
      [1],
      "micon.",
      [1],
      "uszhi.",
      [1],
      "data-v-25d56cb3{background-position:0 -5.32rem}\n.",
      [1],
      "micon.",
      [1],
      "ukzhi.",
      [1],
      "data-v-25d56cb3{background-position:0 -5.6rem}\n.",
      [1],
      "micon.",
      [1],
      "fx.",
      [1],
      "data-v-25d56cb3{background-position:0 -5.88rem}\n",
    ],
    undefined,
    {
      path: "./pages/detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.wxss",
    }
  );
}
