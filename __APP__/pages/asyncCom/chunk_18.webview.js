$gwx1_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_10 || [];
    function gz$gwx1_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "_div dialog-adv-container data-v-41363d9b"]);
        Z([3, "_div dialog-adv-content data-v-41363d9b"]);
        Z([3, "_div left-part data-v-41363d9b"]);
        Z([3, "_div adv-icon data-v-41363d9b"]);
        Z([3, "_img adv-icon-image data-v-41363d9b"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div adv-text data-v-41363d9b"]);
        Z([a, [[7], [3, "b"]]]);
        Z([3, "_div jump-arrow data-v-41363d9b"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_10 = true;
    var x = [
      "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_10_1();
      var o0H = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var cAI = _n("view");
      _rz(z, cAI, "class", 2, e, s, gg);
      var oBI = _n("view");
      _rz(z, oBI, "class", 3, e, s, gg);
      var lCI = _n("view");
      _rz(z, lCI, "class", 4, e, s, gg);
      var aDI = _mz(z, "image", ["class", 5, "src", 1], [], e, s, gg);
      _(lCI, aDI);
      _(oBI, lCI);
      var tEI = _n("view");
      _rz(z, tEI, "class", 7, e, s, gg);
      var eFI = _oz(z, 8, e, s, gg);
      _(tEI, eFI);
      _(oBI, tEI);
      _(cAI, oBI);
      var bGI = _n("view");
      _rz(z, bGI, "class", 9, e, s, gg);
      _(cAI, bGI);
      _(o0H, cAI);
      _(r, o0H);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml"
  ] = [
    $gwx1_XC_10,
    "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml"
  ] = $gwx1_XC_10(
    "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "dialog-adv-container.",
      [1],
      "data-v-41363d9b{background-color:rgba(238,24,24,.06);border-radius:.10666666666666667rem;height:1.0666666666666667rem;margin-bottom:.64rem;width:9.36rem}\n.",
      [1],
      "dialog-adv-container .",
      [1],
      "dialog-adv-content.",
      [1],
      "data-v-41363d9b{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:space-between;justify-content:space-between;width:100%}\n.",
      [1],
      "dialog-adv-container .",
      [1],
      "dialog-adv-content .",
      [1],
      "left-part.",
      [1],
      "data-v-41363d9b{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;margin-left:.26666666666666666rem}\n.",
      [1],
      "dialog-adv-container .",
      [1],
      "dialog-adv-content .",
      [1],
      "left-part .",
      [1],
      "adv-icon.",
      [1],
      "data-v-41363d9b{height:.5333333333333333rem;margin-right:.16rem;width:.5333333333333333rem}\n.",
      [1],
      "dialog-adv-container .",
      [1],
      "dialog-adv-content .",
      [1],
      "left-part .",
      [1],
      "adv-icon .",
      [1],
      "adv-icon-image.",
      [1],
      "data-v-41363d9b{height:100%;width:100%}\n.",
      [1],
      "dialog-adv-container .",
      [1],
      "dialog-adv-content .",
      [1],
      "left-part .",
      [1],
      "adv-text.",
      [1],
      "data-v-41363d9b{color:var(--color-heavygray,#262e40);font-size:.37333333333333335rem;font-weight:500;line-height:.5866666666666667rem}\n.",
      [1],
      "dialog-adv-container .",
      [1],
      "dialog-adv-content .",
      [1],
      "jump-arrow.",
      [1],
      "data-v-41363d9b{background:url(https://st.gtimg.com/design/ce0c3b4f5901b12e258335558899e64f.png);background-size:100% 100%;height:.37333333333333335rem;margin-right:.26666666666666666rem;width:.37333333333333335rem}\n",
    ],
    undefined,
    {
      path: "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxss",
    }
  );
}
