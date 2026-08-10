$gwx1_XC_24 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_24 || [];
    function gz$gwx1_XC_24_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div guide-wrap data-v-8f130860"]);
        Z([3, "_div guide-box data-v-8f130860"]);
        Z([3, "_div title data-v-8f130860"]);
        Z([a, [[7], [3, "b"]]]);
        Z([3, "_div desc data-v-8f130860"]);
        Z([a, [[7], [3, "c"]]]);
        Z([3, "_div img data-v-8f130860"]);
        Z([3, "_div guide-buttons data-v-8f130860"]);
        Z([[7], [3, "d"]]);
        Z([3, "_div button cancel data-v-8f130860"]);
        Z([3, "取消"]);
        Z([[7], [3, "e"]]);
        Z([3, "_div button data-v-8f130860"]);
        Z([3, "立即关注"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_24 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_24 = true;
    var x = ["./pages/asyncCom/components/followGuideType.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_24_1();
      var bWU = _v();
      _(r, bWU);
      if (_oz(z, 0, e, s, gg)) {
        bWU.wxVkey = 1;
        var oXU = _n("view");
        _rz(z, oXU, "class", 1, e, s, gg);
        var xYU = _n("view");
        _rz(z, xYU, "class", 2, e, s, gg);
        var oZU = _n("view");
        _rz(z, oZU, "class", 3, e, s, gg);
        var f1U = _oz(z, 4, e, s, gg);
        _(oZU, f1U);
        _(xYU, oZU);
        var c2U = _n("view");
        _rz(z, c2U, "class", 5, e, s, gg);
        var h3U = _oz(z, 6, e, s, gg);
        _(c2U, h3U);
        _(xYU, c2U);
        var o4U = _n("view");
        _rz(z, o4U, "class", 7, e, s, gg);
        _(xYU, o4U);
        var c5U = _n("view");
        _rz(z, c5U, "class", 8, e, s, gg);
        var o6U = _mz(z, "view", ["bindtap", 9, "class", 1], [], e, s, gg);
        var l7U = _oz(z, 11, e, s, gg);
        _(o6U, l7U);
        _(c5U, o6U);
        var a8U = _mz(z, "view", ["bindtap", 12, "class", 1], [], e, s, gg);
        var t9U = _oz(z, 14, e, s, gg);
        _(a8U, t9U);
        _(c5U, a8U);
        _(xYU, c5U);
        _(oXU, xYU);
        _(bWU, oXU);
      }
      bWU.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_24";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_24();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/followGuideType.wxml"] = [
    $gwx1_XC_24,
    "./pages/asyncCom/components/followGuideType.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/followGuideType.wxml"] = $gwx1_XC_24(
    "./pages/asyncCom/components/followGuideType.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/asyncCom/components/followGuideType.wxss"] =
    setCssToHead(
      [
        ".",
        [1],
        "guide-wrap.",
        [1],
        "data-v-8f130860{-webkit-align-items:center;align-items:center;background-color:var(--fill-mask);display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;position:fixed;top:0;width:100%;z-index:101}\n.",
        [1],
        "guide-wrap .",
        [1],
        "guide-box.",
        [1],
        "data-v-8f130860{background-color:var(--fill-content-layer);border-radius:.10666666666666667rem;width:8rem}\n.",
        [1],
        "guide-wrap .",
        [1],
        "title.",
        [1],
        "data-v-8f130860{color:var(--color-heavygray);font-size:.48rem;font-weight:500;line-height:.48rem;margin-top:.64rem;text-align:center}\n.",
        [1],
        "guide-wrap .",
        [1],
        "desc.",
        [1],
        "data-v-8f130860{color:var(--color-midgray);font-size:.37333333333333335rem;font-weight:400;line-height:.56rem;margin-top:.4266666666666667rem;text-align:center}\n.",
        [1],
        "guide-wrap .",
        [1],
        "img.",
        [1],
        "data-v-8f130860{background-image:url(https://st.gtimg.com/design/964c23e7f9769dfcbe42e3c1f63aaa67.png);background-repeat:no-repeat;background-size:contain;height:4.426666666666667rem;margin:.4266666666666667rem auto 0;width:6.72rem}\n[data-st-theme\x3dblack] .",
        [1],
        "guide-wrap .",
        [1],
        "img.",
        [1],
        "data-v-8f130860,[data-st-theme\x3ddark] .",
        [1],
        "guide-wrap .",
        [1],
        "img.",
        [1],
        "data-v-8f130860{background-image:url(https://st.gtimg.com/design/406bb12dd3f55a11d77759501bda2fbb.png)}\n.",
        [1],
        "guide-wrap .",
        [1],
        "guide-buttons.",
        [1],
        "data-v-8f130860{border-top:.013333333333333334rem solid var(--border-light-divider);display:-webkit-flex;display:flex;height:1.28rem;margin-top:.5333333333333333rem}\n.",
        [1],
        "guide-wrap .",
        [1],
        "guide-buttons .",
        [1],
        "button.",
        [1],
        "data-v-8f130860{color:var(--color-blue);-webkit-flex:1;flex:1;font-size:.48rem;font-weight:500;line-height:1.28rem;text-align:center;width:50%}\n.",
        [1],
        "guide-wrap .",
        [1],
        "guide-buttons .",
        [1],
        "cancel.",
        [1],
        "data-v-8f130860{border-right:.013333333333333334rem solid var(--border-light-divider);color:var(--color-heavygray)}\n",
      ],
      "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/asyncCom/components/followGuideType.wxss:1:961)",
      { path: "./pages/asyncCom/components/followGuideType.wxss" }
    );
}
