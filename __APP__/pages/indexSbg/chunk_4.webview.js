$gwx50_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx50_XC_5 || [];
    function gz$gwx50_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx50_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx50_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx50_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "privacy-bar-container"]],
              [1, "data-v-7c4ef8af"],
            ],
            [[7], [3, "b"]],
          ],
        ]);
        Z([3, "_div privacy-bar-inner data-v-7c4ef8af"]);
        Z([3, "_span icon icon-tips data-v-7c4ef8af"]);
        Z([3, "_span privacy-bar-text data-v-7c4ef8af"]);
        Z([a, [[7], [3, "a"]]]);
        Z([3, "_span icon privacy-icon-right data-v-7c4ef8af"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx50_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx50_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx50_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx50_XC_5 = true;
    var x = [
      "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx50_XC_5_1();
      var o4B = _mz(z, "view", ["catchtap", 0, "class", 1], [], e, s, gg);
      var l5B = _n("view");
      _rz(z, l5B, "class", 2, e, s, gg);
      var a6B = _n("label");
      _rz(z, a6B, "class", 3, e, s, gg);
      _(l5B, a6B);
      var t7B = _n("label");
      _rz(z, t7B, "class", 4, e, s, gg);
      var e8B = _oz(z, 5, e, s, gg);
      _(t7B, e8B);
      _(l5B, t7B);
      var b9B = _n("label");
      _rz(z, b9B, "class", 6, e, s, gg);
      _(l5B, b9B);
      _(o4B, l5B);
      _(r, o4B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx50_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx50_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxml"
  ] = [
    $gwx50_XC_5,
    "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxml"
  ] = $gwx50_XC_5(
    "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "privacy-bar-container.",
      [1],
      "data-v-7c4ef8af{background-color:var(--fill-content-layer);bottom:0;height:.8533333333333334rem;position:fixed;width:100%}\n.",
      [1],
      "privacy-bar-container.",
      [1],
      "data-v-7c4ef8af,.",
      [1],
      "privacy-bar-container.",
      [1],
      "h5-content.",
      [1],
      "data-v-7c4ef8af{border-bottom:.013333333333333334rem solid var(--border-light);border-top:.013333333333333334rem solid var(--border-light)}\n.",
      [1],
      "privacy-bar-container.",
      [1],
      "h5-content.",
      [1],
      "data-v-7c4ef8af{overflow:hidden;position:absolute!important}\n.",
      [1],
      "privacy-bar-container .",
      [1],
      "privacy-bar-inner.",
      [1],
      "data-v-7c4ef8af{-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;color:var(--color-heavygray);display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-size:.3466666666666667rem;-webkit-justify-content:center;justify-content:center;line-height:.5333333333333333rem;margin:.16rem auto}\n.",
      [1],
      "privacy-bar-container .",
      [1],
      "privacy-bar-inner .",
      [1],
      "icon.",
      [1],
      "data-v-7c4ef8af{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;height:.32rem;width:.32rem}\n.",
      [1],
      "privacy-bar-container .",
      [1],
      "privacy-bar-inner .",
      [1],
      "icon-tips.",
      [1],
      "data-v-7c4ef8af{background-image:url(https://st.gtimg.com/design/5e13a6b8a72ae3d12d45a981e18054ab.png);height:.4266666666666667rem;margin-right:.10666666666666667rem;width:.4266666666666667rem}\n.",
      [1],
      "privacy-bar-container .",
      [1],
      "privacy-bar-inner .",
      [1],
      "privacy-icon-right.",
      [1],
      "data-v-7c4ef8af{background-image:url(https://st.gtimg.com/design/debb2bea213de6ca264a84d1f65788a6.png);margin-left:.10666666666666667rem}\n.",
      [1],
      "privacy-bar-container .",
      [1],
      "privacy-bar-inner .",
      [1],
      "privacy-bar-text.",
      [1],
      "data-v-7c4ef8af{padding-top:.02666666666666667rem}\n",
    ],
    undefined,
    {
      path: "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.wxss",
    }
  );
}
