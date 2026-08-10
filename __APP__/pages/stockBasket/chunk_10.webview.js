$gwx0_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];
    function gz$gwx0_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div stock-basket-wrapper"]);
        Z([3, "__l"]);
        Z([3, "1c7dec2b-0"]);
        Z(z[2]);
        Z([3, "1c7dec2b-1"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "bacsket-list"]);
        Z([1, true]);
        Z([[7], [3, "b"]]);
        Z([3, "_div scroll-container"]);
        Z([3, "basketData"]);
        Z([[7], [3, "c"]]);
        Z([3, "d"]);
        Z([3, "_div basket-section"]);
        Z([[6], [[7], [3, "basketData"]], [3, "c"]]);
        Z(z[2]);
        Z([[6], [[7], [3, "basketData"]], [3, "a"]]);
        Z([[6], [[7], [3, "basketData"]], [3, "b"]]);
        Z(z[15]);
        Z([[7], [3, "d"]]);
        Z([3, "_div brand"]);
        Z([
          [2, "+"],
          [1, "padding-bottom:"],
          [[7], [3, "e"]],
        ]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([[7], [3, "g"]]);
        Z([3, "1c7dec2b-3"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "j"]]);
        Z(z[2]);
        Z([[7], [3, "i"]]);
        Z([3, "1c7dec2b-4"]);
        Z(z[28]);
        Z([[7], [3, "m"]]);
        Z(z[2]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "k"]]);
        Z([3, "1c7dec2b-5"]);
        Z(z[33]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_2 = true;
    var x = ["./pages/stockBasket/square.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_2_1();
      var cIH = _n("page-meta");
      _rz(z, cIH, "rootFontSize", 0, e, s, gg);
      _(r, cIH);
      var oJH = _n("view");
      _rz(z, oJH, "class", 1, e, s, gg);
      var tMH = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oJH, tMH);
      var eNH = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 4, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oJH, eNH);
      var bOH = _mz(z, "scroll-view", ["class", 7, "scrollY", 1], [], e, s, gg);
      var oPH = _v();
      _(bOH, oPH);
      if (_oz(z, 9, e, s, gg)) {
        oPH.wxVkey = 1;
        var xQH = _n("view");
        _rz(z, xQH, "class", 10, e, s, gg);
        var fSH = _v();
        _(xQH, fSH);
        var cTH = function (oVH, hUH, cWH, gg) {
          var lYH = _n("view");
          _rz(z, lYH, "class", 14, oVH, hUH, gg);
          var aZH = _v();
          _(lYH, aZH);
          if (_oz(z, 15, oVH, hUH, gg)) {
            aZH.wxVkey = 1;
            var t1H = _mz(
              z,
              "basket-overview",
              ["bind:__l", 16, "bindheaderToggleClick", 1, "uI", 2, "uP", 3],
              [],
              oVH,
              hUH,
              gg
            );
            _(aZH, t1H);
          }
          aZH.wxXCkey = 1;
          aZH.wxXCkey = 3;
          _(cWH, lYH);
          return cWH;
        };
        fSH.wxXCkey = 4;
        _2z(z, 12, cTH, e, s, gg, fSH, "basketData", "index", "d");
        var oRH = _v();
        _(xQH, oRH);
        if (_oz(z, 20, e, s, gg)) {
          oRH.wxVkey = 1;
          var e2H = _mz(z, "view", ["class", 21, "style", 1], [], e, s, gg);
          _(oRH, e2H);
        }
        oRH.wxXCkey = 1;
        _(oPH, xQH);
      } else if (_oz(z, 23, e, s, gg)) {
        oPH.wxVkey = 2;
        var b3H = _mz(
          z,
          "st-status",
          ["bind:__l", 24, "bindhandleError", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oPH, b3H);
      }
      oPH.wxXCkey = 1;
      oPH.wxXCkey = 3;
      oPH.wxXCkey = 3;
      _(oJH, bOH);
      var lKH = _v();
      _(oJH, lKH);
      if (_oz(z, 28, e, s, gg)) {
        lKH.wxVkey = 1;
        var o4H = _mz(
          z,
          "privacy-policy-modal",
          ["bind:__l", 29, "bindinput", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(lKH, o4H);
      }
      var aLH = _v();
      _(oJH, aLH);
      if (_oz(z, 33, e, s, gg)) {
        aLH.wxVkey = 1;
        var x5H = _mz(
          z,
          "basket-guide-modal",
          ["bind:__l", 34, "bindclose", 1, "bindconfirm", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(aLH, x5H);
      }
      lKH.wxXCkey = 1;
      lKH.wxXCkey = 3;
      aLH.wxXCkey = 1;
      aLH.wxXCkey = 3;
      _(r, oJH);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stockBasket/square.wxml"] = [
    $gwx0_XC_2,
    "./pages/stockBasket/square.wxml",
  ];
else
  __wxAppCode__["pages/stockBasket/square.wxml"] = $gwx0_XC_2(
    "./pages/stockBasket/square.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/stockBasket/square.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "stock-basket-wrapper{background-color:#f5f6fa;height:100vh}\n.",
      [1],
      "stock-basket-wrapper .",
      [1],
      "bacsket-list{height:100vh;overflow-y:scroll;width:100vw}\n.",
      [1],
      "stock-basket-wrapper .",
      [1],
      "bacsket-list .",
      [1],
      "scroll-container{margin-top:.32rem}\n.",
      [1],
      "stock-basket-wrapper .",
      [1],
      "bacsket-list .",
      [1],
      "scroll-container .",
      [1],
      "brand{background-image:url(https://st.gtimg.com/design/aa65870c4a9bbd7ba311225f19e33525.png);background-position:center .32rem;background-repeat:no-repeat;background-size:2.4266666666666667rem .48rem;height:1.12rem;width:100%}\n.",
      [1],
      "basket-section{margin-bottom:.32rem}\n",
    ],
    undefined,
    { path: "./pages/stockBasket/square.wxss" }
  );
}
