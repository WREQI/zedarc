$gwx3_XC_30 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_30 || [];
    function gz$gwx3_XC_30_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div img-icon data-v-09a34809"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_img"]], [1, "data-v-09a34809"]],
              [1, "hq-icon"],
            ],
            [[7], [3, "c"]],
          ],
        ]);
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1;
    }
    function gz$gwx3_XC_30_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div no-data data-v-46055043"]);
        Z([3, "_img no-data-img data-v-46055043"]);
        Z([
          3,
          "https://st.gtimg.com/design/cc161019a22c31a146e54b29a21e8abb.png",
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_30 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_30 = true;
    var x = [
      "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml",
      "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_30_1();
      var cEID = _n("view");
      _rz(z, cEID, "class", 0, e, s, gg);
      var oFID = _v();
      _(cEID, oFID);
      if (_oz(z, 1, e, s, gg)) {
        oFID.wxVkey = 1;
        var lGID = _mz(z, "image", ["class", 2, "src", 1], [], e, s, gg);
        _(oFID, lGID);
      }
      oFID.wxXCkey = 1;
      _(r, cEID);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_30_2();
      var tIID = _n("view");
      _rz(z, tIID, "class", 0, e, s, gg);
      var eJID = _mz(z, "image", ["class", 1, "src", 1], [], e, s, gg);
      _(tIID, eJID);
      var bKID = _n("slot");
      _(tIID, bKID);
      _(r, tIID);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_30();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml"
  ] = [
    $gwx3_XC_30,
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml"
  ] = $gwx3_XC_30(
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml"
  ] = [
    $gwx3_XC_30,
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml"
  ] = $gwx3_XC_30(
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "hq-icon.",
      [1],
      "data-v-09a34809{display:inline-block;height:.26666666666666666rem;width:.37333333333333335rem}\n.",
      [1],
      "hq-icon-bj.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-chuang.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-cnjj.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-cwjj.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-fu.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-hk.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-hqzhi.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-jj.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-ke.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-nq.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-pt.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-sh.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-sz.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-uk.",
      [1],
      "data-v-09a34809,.",
      [1],
      "hq-icon-us.",
      [1],
      "data-v-09a34809{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:.26666666666666666rem;font-style:normal;font-variant:normal;font-weight:400;line-height:1;margin-right:.10666666666666667rem;position:relative;text-transform:none;top:.02666666666666667rem}\n",
    ],
    undefined,
    {
      path: "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxss",
    }
  );
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "no-data.",
      [1],
      "data-v-46055043{-webkit-align-items:center;align-items:center;color:#98a0b3;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:.37333333333333335rem;-webkit-justify-content:center;justify-content:center;line-height:.37333333333333335rem;padding-bottom:1.6rem;padding-top:1.0666666666666667rem;text-align:center;width:100%}\n.",
      [1],
      "no-data .",
      [1],
      "no-data-img.",
      [1],
      "data-v-46055043{height:1.6rem;padding-bottom:.32rem;width:1.3333333333333333rem}\n",
    ],
    undefined,
    {
      path: "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxss",
    }
  );
}
