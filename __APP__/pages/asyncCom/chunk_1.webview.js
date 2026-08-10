$gwx1_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_1 || [];
    function gz$gwx1_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div bubblewzqxcx-wrapper"]);
        Z([
          [2, "!"],
          [[7], [3, "f"]],
        ]);
        Z([[7], [3, "g"]]);
        Z([3, "_div bubble"]);
        Z([[7], [3, "d"]]);
        Z([3, "_div text"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "c"]]);
        Z([3, "_div close"]);
        Z([3, "_div arrow"]);
        Z([[7], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_1 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_1_1();
      var oBB = _mz(
        z,
        "view",
        ["class", 0, "hidden", 1, "style", 1],
        [],
        e,
        s,
        gg
      );
      var lCB = _mz(z, "view", ["class", 3, "style", 1], [], e, s, gg);
      var tEB = _n("view");
      _rz(z, tEB, "class", 5, e, s, gg);
      var eFB = _n("rich-text");
      _rz(z, eFB, "nodes", 6, e, s, gg);
      _(tEB, eFB);
      _(lCB, tEB);
      var aDB = _v();
      _(lCB, aDB);
      if (_oz(z, 7, e, s, gg)) {
        aDB.wxVkey = 1;
        var bGB = _mz(z, "view", ["bindtap", 8, "class", 1], [], e, s, gg);
        _(aDB, bGB);
      }
      aDB.wxXCkey = 1;
      _(oBB, lCB);
      var oHB = _mz(z, "view", ["class", 10, "style", 1], [], e, s, gg);
      _(oBB, oHB);
      _(r, oBB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml"
  ] = [
    $gwx1_XC_1,
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml"
  ] = $gwx1_XC_1(
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "bubblewzqxcx-wrapper .",
      [1],
      "bubble{-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.6);border-radius:.05333333333333334rem;display:-webkit-flex;display:flex;padding:.21333333333333335rem .32rem;position:fixed;z-index:101}\n.",
      [1],
      "bubblewzqxcx-wrapper .",
      [1],
      "bubble .",
      [1],
      "text{color:#fff;font-size:.4266666666666667rem;line-height:.64rem;max-width:7.066666666666666rem}\n.",
      [1],
      "bubblewzqxcx-wrapper .",
      [1],
      "bubble .",
      [1],
      "close{background-image:url(https://st.gtimg.com/design/48d8c91402ab709e6a934dda52b78777.png);background-size:100% 100%;-webkit-flex-shrink:0;flex-shrink:0;height:.32rem;margin-left:.21333333333333335rem;width:.32rem}\n.",
      [1],
      "bubblewzqxcx-wrapper .",
      [1],
      "arrow{background-image:url(https://st.gtimg.com/design/f74bf7a566f4801e23d2b3c4fb9dac82.png);background-size:100% 100%;height:.18666666666666668rem;position:fixed;width:1.0133333333333334rem;z-index:101}\n",
    ],
    undefined,
    {
      path: "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxss",
    }
  );
}
