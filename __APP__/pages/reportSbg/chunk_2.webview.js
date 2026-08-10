$gwx19_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx19_XC_2 || [];
    function gz$gwx19_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx19_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx19_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx19_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div guide-wrap data-v-c772ec7e"]);
        Z([3, "_div guide-box data-v-c772ec7e"]);
        Z([3, "_div title data-v-c772ec7e"]);
        Z([3, "微信通知"]);
        Z([3, "_div desc data-v-c772ec7e"]);
        Z([3, "暂未关注公众号，无法接受提醒"]);
        Z([3, "_div img data-v-c772ec7e"]);
        Z([3, "_div guide-buttons data-v-c772ec7e"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div button cancel data-v-c772ec7e"]);
        Z([3, "取消"]);
        Z([[7], [3, "c"]]);
        Z([3, "_div button data-v-c772ec7e"]);
        Z([3, "立即关注"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx19_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx19_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx19_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx19_XC_2 = true;
    var x = [
      "./pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx19_XC_2_1();
      var e48 = _v();
      _(r, e48);
      if (_oz(z, 0, e, s, gg)) {
        e48.wxVkey = 1;
        var b58 = _n("view");
        _rz(z, b58, "class", 1, e, s, gg);
        var o68 = _n("view");
        _rz(z, o68, "class", 2, e, s, gg);
        var x78 = _n("view");
        _rz(z, x78, "class", 3, e, s, gg);
        var o88 = _oz(z, 4, e, s, gg);
        _(x78, o88);
        _(o68, x78);
        var f98 = _n("view");
        _rz(z, f98, "class", 5, e, s, gg);
        var c08 = _oz(z, 6, e, s, gg);
        _(f98, c08);
        _(o68, f98);
        var hA9 = _n("view");
        _rz(z, hA9, "class", 7, e, s, gg);
        _(o68, hA9);
        var oB9 = _n("view");
        _rz(z, oB9, "class", 8, e, s, gg);
        var cC9 = _mz(z, "view", ["bindtap", 9, "class", 1], [], e, s, gg);
        var oD9 = _oz(z, 11, e, s, gg);
        _(cC9, oD9);
        _(oB9, cC9);
        var lE9 = _mz(z, "view", ["bindtap", 12, "class", 1], [], e, s, gg);
        var aF9 = _oz(z, 14, e, s, gg);
        _(lE9, aF9);
        _(oB9, lE9);
        _(o68, oB9);
        _(b58, o68);
        _(e48, b58);
      }
      e48.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx19_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx19_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxml"
  ] = [
    $gwx19_XC_2,
    "./pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxml",
  ];
else
  __wxAppCode__[
    "pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxml"
  ] = $gwx19_XC_2(
    "./pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "guide-wrap.",
      [1],
      "data-v-c772ec7e{-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.4);display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;position:fixed;top:0;width:100%;z-index:101}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-box.",
      [1],
      "data-v-c772ec7e{background-color:var(--fill-content-layer);border-radius:.10666666666666667rem;width:8rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "title.",
      [1],
      "data-v-c772ec7e{color:var(--color-heavygray);font-size:.48rem;font-weight:500;line-height:.48rem;margin-top:.64rem;text-align:center}\n.",
      [1],
      "guide-wrap .",
      [1],
      "desc.",
      [1],
      "data-v-c772ec7e{color:var(--color-midgray);font-size:.37333333333333335rem;font-weight:400;line-height:.56rem;margin-top:.4266666666666667rem;text-align:center}\n.",
      [1],
      "guide-wrap .",
      [1],
      "img.",
      [1],
      "data-v-c772ec7e{background-image:url(https://st.gtimg.com/design/86530692e4729401ea0212cd11340156.png);background-size:contain;height:4.426666666666667rem;margin:.4266666666666667rem auto 0;width:6.72rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-buttons.",
      [1],
      "data-v-c772ec7e{border-top:.013333333333333334rem solid var(--border-light-divider);display:-webkit-flex;display:flex;height:1.28rem;margin-top:.5333333333333333rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-buttons .",
      [1],
      "button.",
      [1],
      "data-v-c772ec7e{color:#e63535;-webkit-flex:1;flex:1;font-size:.48rem;font-weight:500;line-height:1.28rem;text-align:center;width:50%}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-buttons .",
      [1],
      "cancel.",
      [1],
      "data-v-c772ec7e{border-right:.013333333333333334rem solid var(--border-light-divider);color:var(--color-heavygray)}\n",
    ],
    undefined,
    {
      path: "./pages/reportSbg/@tencent/stock-morning-report/morning-report-card/component/followGuide.wxss",
    }
  );
}
