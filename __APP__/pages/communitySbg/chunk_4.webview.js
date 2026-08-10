$gwx23_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx23_XC_4 || [];
    function gz$gwx23_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div tabbar-top-wrapper data-v-02345cc2"]);
        Z([3, "tabbar-wrapper data-v-02345cc2"]);
        Z([3, "tabbar-scroll-view"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div tabbar-container data-v-02345cc2"]);
        Z([3, "tab"]);
        Z([[7], [3, "a"]]);
        Z([3, "e"]);
        Z([[6], [[7], [3, "tab"]], [3, "g"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-02345cc2"]],
              [1, "tab"],
            ],
            [[6], [[7], [3, "tab"]], [3, "f"]],
          ],
        ]);
        Z([[6], [[7], [3, "tab"]], [3, "d"]]);
        Z([a, [[6], [[7], [3, "tab"]], [3, "a"]]]);
        Z([[6], [[7], [3, "tab"]], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "data-v-02345cc2"]);
        Z([[6], [[7], [3, "tab"]], [3, "c"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1;
    }
    function gz$gwx23_XC_4_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div red-num-container data-v-b3ef1960"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx23_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx23_XC_4 = true;
    var x = [
      "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml",
      "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_4_1();
      var cKT = _n("view");
      _rz(z, cKT, "class", 0, e, s, gg);
      var oLT = _mz(
        z,
        "scroll-view",
        ["scrollX", -1, "class", 1, "id", 1, "scrollIntoView", 2],
        [],
        e,
        s,
        gg
      );
      var lMT = _n("view");
      _rz(z, lMT, "class", 4, e, s, gg);
      var aNT = _v();
      _(lMT, aNT);
      var tOT = function (bQT, ePT, oRT, gg) {
        var oTT = _mz(
          z,
          "view",
          ["bindtap", 8, "class", 1, "id", 2],
          [],
          bQT,
          ePT,
          gg
        );
        var cVT = _oz(z, 11, bQT, ePT, gg);
        _(oTT, cVT);
        var fUT = _v();
        _(oTT, fUT);
        if (_oz(z, 12, bQT, ePT, gg)) {
          fUT.wxVkey = 1;
          var hWT = _mz(
            z,
            "red-dot",
            ["bind:__l", 13, "class", 1, "uI", 2],
            [],
            bQT,
            ePT,
            gg
          );
          _(fUT, hWT);
        }
        fUT.wxXCkey = 1;
        fUT.wxXCkey = 3;
        _(oRT, oTT);
        return oRT;
      };
      aNT.wxXCkey = 4;
      _2z(z, 6, tOT, e, s, gg, aNT, "tab", "index", "e");
      _(oLT, lMT);
      _(cKT, oLT);
      _(r, cKT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_4_2();
      var cYT = _n("view");
      _rz(z, cYT, "class", 0, e, s, gg);
      _(r, cYT);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx23_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx23_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml"
  ] = [
    $gwx23_XC_4,
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml"
  ] = $gwx23_XC_4(
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml"
  ] = [
    $gwx23_XC_4,
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml",
  ];
else
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml"
  ] = $gwx23_XC_4(
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "tabbar-top-wrapper.",
      [1],
      "data-v-02345cc2{-webkit-align-items:center;align-items:center;background-color:var(--fill-content-layer);border-radius:.21333333333333335rem .21333333333333335rem 0 0;display:-webkit-flex;display:flex;padding:0 .32rem}\n.",
      [1],
      "tabbar-wrapper.",
      [1],
      "data-v-02345cc2{box-sizing:border-box;height:1.1733333333333333rem;white-space:nowrap}\n.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tab.",
      [1],
      "data-v-02345cc2,.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tabbar-container.",
      [1],
      "data-v-02345cc2{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%}\n.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tab.",
      [1],
      "data-v-02345cc2{color:var(--color-midgray-1);font-size:.4rem;margin:0 .8533333333333334rem 0 0;position:relative}\n.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tab.",
      [1],
      "select-tab.",
      [1],
      "data-v-02345cc2{color:var(--color-heavygray);font-weight:500;position:relative}\n.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tab.",
      [1],
      "select-tab.",
      [1],
      "data-v-02345cc2:after{border-radius:.04rem;bottom:.18666666666666668rem;content:\x22\x22;height:.08rem;left:50%;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);width:.32rem}\n.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tab.",
      [1],
      "select-tab.",
      [1],
      "wzq-color.",
      [1],
      "data-v-02345cc2:after{background-color:var(--color-red)}\n.",
      [1],
      "tabbar-wrapper .",
      [1],
      "tab.",
      [1],
      "select-tab.",
      [1],
      "zxg-color.",
      [1],
      "data-v-02345cc2:after{background-color:var(--color-blue)}\n",
    ],
    undefined,
    {
      path: "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxss",
    }
  );
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "red-num-container.",
      [1],
      "data-v-b3ef1960{background:#e63535;border-radius:50%;height:.16rem;left:calc(100% - .08rem);position:absolute;top:.21333333333333335rem;width:.16rem}\n",
    ],
    undefined,
    {
      path: "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxss",
    }
  );
}
