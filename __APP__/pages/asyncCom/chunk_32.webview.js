$gwx1_XC_26 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_26 || [];
    function gz$gwx1_XC_26_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_26_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_26_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_26_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div guide-wrap"]);
        Z([3, "_div guide-box"]);
        Z([3, "_div title"]);
        Z([a, [[7], [3, "b"]]]);
        Z([[7], [3, "c"]]);
        Z([3, "_span close"]);
        Z([3, "_div desc"]);
        Z([3, "选择订阅消息，打开接收通知和涨幅变动通知。"]);
        Z([3, "_div img"]);
        Z([
          [2, "+"],
          [1, "background-image:"],
          [[7], [3, "d"]],
        ]);
        Z([[7], [3, "e"]]);
        Z([3, "_div guide-button"]);
        Z([3, "去开启"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_26_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_26_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_26 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_26 = true;
    var x = ["./pages/asyncCom/components/subscribeGuide.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_26_1();
      var c8V = _v();
      _(r, c8V);
      if (_oz(z, 0, e, s, gg)) {
        c8V.wxVkey = 1;
        var h9V = _n("view");
        _rz(z, h9V, "class", 1, e, s, gg);
        var o0V = _n("view");
        _rz(z, o0V, "class", 2, e, s, gg);
        var cAW = _n("view");
        _rz(z, cAW, "class", 3, e, s, gg);
        var oBW = _oz(z, 4, e, s, gg);
        _(cAW, oBW);
        var lCW = _mz(z, "label", ["bindtap", 5, "class", 1], [], e, s, gg);
        _(cAW, lCW);
        _(o0V, cAW);
        var aDW = _n("view");
        _rz(z, aDW, "class", 7, e, s, gg);
        var tEW = _oz(z, 8, e, s, gg);
        _(aDW, tEW);
        _(o0V, aDW);
        var eFW = _mz(z, "view", ["class", 9, "style", 1], [], e, s, gg);
        _(o0V, eFW);
        var bGW = _mz(z, "view", ["bindtap", 11, "class", 1], [], e, s, gg);
        var oHW = _oz(z, 13, e, s, gg);
        _(bGW, oHW);
        _(o0V, bGW);
        _(h9V, o0V);
        _(c8V, h9V);
      }
      c8V.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_26";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_26();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/subscribeGuide.wxml"] = [
    $gwx1_XC_26,
    "./pages/asyncCom/components/subscribeGuide.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/subscribeGuide.wxml"] = $gwx1_XC_26(
    "./pages/asyncCom/components/subscribeGuide.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/asyncCom/components/subscribeGuide.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "guide-wrap{background-color:rgba(0,0,0,.4);height:100%;left:0;position:fixed;top:0;width:100%;z-index:101}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-box{background-color:#fff;border-radius:.21333333333333335rem .21333333333333335rem 0 0;bottom:0;left:0;padding-bottom:env(safe-area-inset-bottom);padding-top:.4266666666666667rem;position:absolute;width:100%}\n.",
      [1],
      "guide-wrap .",
      [1],
      "title{color:#262e40;font-size:.48rem;font-weight:500;line-height:.6666666666666666rem;position:relative;text-align:center}\n.",
      [1],
      "guide-wrap .",
      [1],
      "title .",
      [1],
      "close{background-image:url(https://st.gtimg.com/design/e970750b602bc77a629d604a62d75b2a.png);background-position:50%;background-repeat:no-repeat;background-size:.32rem .32rem;height:100%;position:absolute;right:0;top:0;width:1.0666666666666667rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "desc{color:#262e40;font-size:.4266666666666667rem;font-weight:400;line-height:.8533333333333334rem;margin-top:.4266666666666667rem;text-align:center}\n.",
      [1],
      "guide-wrap .",
      [1],
      "img{background-image:url(https://st.gtimg.com/design/712c9e60aacfff057b358796de8326ff.gif);background-size:contain;height:4.306666666666667rem;margin:.4266666666666667rem auto 0;width:9.36rem}\n.",
      [1],
      "guide-wrap .",
      [1],
      "guide-button{background-color:#e63535;border-radius:.10666666666666667rem;border-top:.013333333333333334rem solid #edeff3;color:#fff;font-size:.4266666666666667rem;font-weight:600;height:1.1733333333333333rem;line-height:1.1733333333333333rem;margin:.4266666666666667rem auto .32rem;text-align:center;width:9.36rem}\n",
    ],
    undefined,
    { path: "./pages/asyncCom/components/subscribeGuide.wxss" }
  );
}
