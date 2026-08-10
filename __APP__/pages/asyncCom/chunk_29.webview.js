$gwx1_XC_22 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_22 || [];
    function gz$gwx1_XC_22_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div guide-wrap"]);
        Z([3, "_div guide-box"]);
        Z([3, "_div title"]);
        Z([3, "提醒已设置"]);
        Z([3, "_div desc"]);
        Z([3, "暂未关注公众号，无法接受提醒"]);
        Z([3, "_div img"]);
        Z([3, "_div guide-buttons"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div button cancel"]);
        Z([3, "取消"]);
        Z([[7], [3, "c"]]);
        Z([3, "_div button"]);
        Z([3, "立即关注"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_22 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_22 = true;
    var x = ["./pages/asyncCom/components/followGuide.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_22_1();
      var x7T = _v();
      _(r, x7T);
      if (_oz(z, 0, e, s, gg)) {
        x7T.wxVkey = 1;
        var o8T = _n("view");
        _rz(z, o8T, "class", 1, e, s, gg);
        var f9T = _n("view");
        _rz(z, f9T, "class", 2, e, s, gg);
        var c0T = _n("view");
        _rz(z, c0T, "class", 3, e, s, gg);
        var hAU = _oz(z, 4, e, s, gg);
        _(c0T, hAU);
        _(f9T, c0T);
        var oBU = _n("view");
        _rz(z, oBU, "class", 5, e, s, gg);
        var cCU = _oz(z, 6, e, s, gg);
        _(oBU, cCU);
        _(f9T, oBU);
        var oDU = _n("view");
        _rz(z, oDU, "class", 7, e, s, gg);
        _(f9T, oDU);
        var lEU = _n("view");
        _rz(z, lEU, "class", 8, e, s, gg);
        var aFU = _mz(z, "view", ["bindtap", 9, "class", 1], [], e, s, gg);
        var tGU = _oz(z, 11, e, s, gg);
        _(aFU, tGU);
        _(lEU, aFU);
        var eHU = _mz(z, "view", ["bindtap", 12, "class", 1], [], e, s, gg);
        var bIU = _oz(z, 14, e, s, gg);
        _(eHU, bIU);
        _(lEU, eHU);
        _(f9T, lEU);
        _(o8T, f9T);
        _(x7T, o8T);
      }
      x7T.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_22";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_22();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/followGuide.wxml"] = [
    $gwx1_XC_22,
    "./pages/asyncCom/components/followGuide.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/followGuide.wxml"] = $gwx1_XC_22(
    "./pages/asyncCom/components/followGuide.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/asyncCom/components/followGuide.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "guide-wrap{-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.4);display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;position:fixed;top:0;width:100%;z-index:101}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-box{background-color:#fff;border-radius:.10666666666666667rem;width:8rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "title{color:#262e40;font-size:.48rem;font-weight:500;line-height:.48rem;margin-top:.64rem;text-align:center}\n.",
      [1],
      "guide-wrap .",
      [1],
      "desc{color:#475166;font-size:.37333333333333335rem;font-weight:400;line-height:.56rem;margin-top:.4266666666666667rem;text-align:center}\n.",
      [1],
      "guide-wrap .",
      [1],
      "img{background-image:url(https://st.gtimg.com/design/db6b5f09af01d7fd4cec563904605ed0.png);background-size:contain;height:4.426666666666667rem;margin:.4266666666666667rem auto 0;width:6.72rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-buttons{border-top:.013333333333333334rem solid #edeff3;display:-webkit-flex;display:flex;height:1.28rem;margin-top:.5333333333333333rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-buttons .",
      [1],
      "button{color:#e63535;-webkit-flex:1;flex:1;font-size:.48rem;font-weight:500;line-height:1.28rem;text-align:center;width:50%}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-buttons .",
      [1],
      "cancel{border-right:.013333333333333334rem solid #edeff3;color:#262e40}\n",
    ],
    undefined,
    { path: "./pages/asyncCom/components/followGuide.wxss" }
  );
}
