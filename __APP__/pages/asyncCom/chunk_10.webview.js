$gwx1_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_2 || [];
    function gz$gwx1_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div delivery-guide-pulldown-access-com data-v-bc0fb375"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "d"]]);
        Z([3, "_div delivery-guide-pulldown-access data-v-bc0fb375"]);
        Z([3, "deliveryGuidePulldownAccess"]);
        Z([3, "_div guide-pulldown-access-bg data-v-bc0fb375"]);
        Z([3, "_div guide-pulldown-access-pic data-v-bc0fb375"]);
        Z([
          [2, "+"],
          [
            [2, "+"],
            [
              [2, "+"],
              [1, "background-image:"],
              [[7], [3, "b"]],
            ],
            [1, ";"],
          ],
          [
            [2, "+"],
            [1, "top:"],
            [[7], [3, "c"]],
          ],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_2 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_2_1();
      var oJB = _n("view");
      _rz(z, oJB, "class", 0, e, s, gg);
      var fKB = _v();
      _(oJB, fKB);
      if (_oz(z, 1, e, s, gg)) {
        fKB.wxVkey = 1;
        var cLB = _mz(
          z,
          "view",
          ["bindtap", 2, "class", 1, "ref", 2],
          [],
          e,
          s,
          gg
        );
        var hMB = _n("view");
        _rz(z, hMB, "class", 5, e, s, gg);
        var oNB = _mz(z, "view", ["class", 6, "style", 1], [], e, s, gg);
        _(hMB, oNB);
        _(cLB, hMB);
        _(fKB, cLB);
      }
      fKB.wxXCkey = 1;
      _(r, oJB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml"
  ] = [
    $gwx1_XC_2,
    "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml"
  ] = $gwx1_XC_2(
    "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "delivery-guide-pulldown-access-com .",
      [1],
      "delivery-guide-pulldown-access.",
      [1],
      "data-v-bc0fb375{background-color:rgba(0,0,0,.4);bottom:0;display:-webkit-flex;display:flex;height:100vh;left:0;overflow:hidden;position:fixed;right:0;top:0;width:100vw;z-index:102}\n.",
      [1],
      "delivery-guide-pulldown-access-com .",
      [1],
      "delivery-guide-pulldown-access .",
      [1],
      "guide-pulldown-access-bg.",
      [1],
      "data-v-bc0fb375{position:relative;width:100%}\n.",
      [1],
      "delivery-guide-pulldown-access-com .",
      [1],
      "delivery-guide-pulldown-access .",
      [1],
      "guide-pulldown-access-bg .",
      [1],
      "guide-pulldown-access-pic.",
      [1],
      "data-v-bc0fb375{background-repeat:no-repeat;background-size:100% 100%;height:9.093333333333334rem;position:absolute;right:1.3866666666666667rem;width:6.773333333333333rem}\n",
    ],
    undefined,
    {
      path: "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxss",
    }
  );
}
