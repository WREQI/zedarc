$gwx_XC_15 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
    function gz$gwx_XC_15_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "tab.propObserver"]);
        Z([
          [4],
          [[5], [[5], [[5], [1, "_div"]], [[7], [3, "d"]]], [1, "tab-wrapper"]],
        ]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "st-tab-bar"]],
              [[7], [3, "b"]],
            ],
            [[7], [3, "c"]],
          ],
        ]);
        Z([3, "nav"]);
        Z([3, "tab"]);
        Z([[7], [3, "a"]]);
        Z([3, "c"]);
        Z([[6], [[7], [3, "tab"]], [3, "d"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "_div"]], [1, "st-tab"]],
            [[6], [[7], [3, "tab"]], [3, "b"]],
          ],
        ]);
        Z([3, "_span"]);
        Z([a, [[6], [[7], [3, "tab"]], [3, "a"]]]);
        Z([3, "_div st-tab-last"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_15 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_15 = true;
    var x = ["./components/TabBar/TabBar.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_15_1();
      var xOJ = _mz(z, "view", ["change:value", 0, "class", 1], [], e, s, gg);
      var oPJ = _mz(z, "view", ["class", 2, "ref", 1], [], e, s, gg);
      var fQJ = _v();
      _(oPJ, fQJ);
      var cRJ = function (oTJ, hSJ, cUJ, gg) {
        var lWJ = _mz(z, "view", ["bindtap", 7, "class", 1], [], oTJ, hSJ, gg);
        var aXJ = _n("label");
        _rz(z, aXJ, "class", 9, oTJ, hSJ, gg);
        var tYJ = _oz(z, 10, oTJ, hSJ, gg);
        _(aXJ, tYJ);
        _(lWJ, aXJ);
        _(cUJ, lWJ);
        return cUJ;
      };
      fQJ.wxXCkey = 2;
      _2z(z, 5, cRJ, e, s, gg, fQJ, "tab", "index", "c");
      var eZJ = _n("view");
      _rz(z, eZJ, "class", 11, e, s, gg);
      _(oPJ, eZJ);
      _(xOJ, oPJ);
      _(r, xOJ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_15();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/TabBar/TabBar.wxml"] = [
    $gwx_XC_15,
    "./components/TabBar/TabBar.wxml",
  ];
else
  __wxAppCode__["components/TabBar/TabBar.wxml"] = $gwx_XC_15(
    "./components/TabBar/TabBar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["components/TabBar/TabBar.wxss"] = setCssToHead(
    [
      "::-webkit-scrollbar{display:none}\n.",
      [1],
      "tab-wrapper{width:100%}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab-bar{-webkit-overflow-scrolling:touch;background-color:#fff;display:-webkit-box;font-size:.4rem;height:.96rem;line-height:.96rem;overflow:hidden;overflow-x:auto;position:relative}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab-bar.",
      [1],
      "border-bottom{border-bottom:.013333333333333334rem solid #e9ebf0}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab-bar.",
      [1],
      "font .",
      [1],
      "st-tab.",
      [1],
      "active{color:#3077ec;font-size:.56rem;font-weight:500;position:relative;top:-.02666666666666667rem}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab-bar.",
      [1],
      "slider .",
      [1],
      "st-tab.",
      [1],
      "active{color:#262e40;font-weight:500}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab-bar.",
      [1],
      "slider .",
      [1],
      "st-tab.",
      [1],
      "active:before{background-color:#3077ec;border-radius:.08rem;bottom:.05333333333333334rem;content:\x22\x22;height:.08rem;left:50%;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);width:.32rem}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab{-webkit-box-flex:1;color:#475166;padding:0 .32rem;position:relative;text-align:center}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab:first-child{padding-left:.4rem}\n.",
      [1],
      "tab-wrapper .",
      [1],
      "st-tab-last{padding-right:.08rem}\n.",
      [1],
      "skin-black .",
      [1],
      "st-tab-bar{background-color:#1d2228;border-bottom-color:#1d2127}\n.",
      [1],
      "skin-black .",
      [1],
      "st-tab-bar .",
      [1],
      "st-tab{color:#f0f1f5}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/TabBar/TabBar.wxss:1:1)",
    { path: "./components/TabBar/TabBar.wxss" }
  );
}
