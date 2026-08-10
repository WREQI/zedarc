$gwx6_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_2 || [];
    function gz$gwx6_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div banner-box data-v-97367778"]);
        Z([3, "_div text data-v-97367778"]);
        Z([3, "腾讯微证券小程序协议更新"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div pro-btn data-v-97367778"]);
        Z([3, "去查看"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_2 = true;
    var x = ["./pages/account/components/protocolBanner.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_2_1();
      var fGF = _v();
      _(r, fGF);
      if (_oz(z, 0, e, s, gg)) {
        fGF.wxVkey = 1;
        var cHF = _n("view");
        _rz(z, cHF, "class", 1, e, s, gg);
        var hIF = _n("view");
        _rz(z, hIF, "class", 2, e, s, gg);
        var oJF = _oz(z, 3, e, s, gg);
        _(hIF, oJF);
        _(cHF, hIF);
        var cKF = _mz(z, "view", ["bindtap", 4, "class", 1], [], e, s, gg);
        var oLF = _oz(z, 6, e, s, gg);
        _(cKF, oLF);
        _(cHF, cKF);
        _(fGF, cHF);
      }
      fGF.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/components/protocolBanner.wxml"] = [
    $gwx6_XC_2,
    "./pages/account/components/protocolBanner.wxml",
  ];
else
  __wxAppCode__["pages/account/components/protocolBanner.wxml"] = $gwx6_XC_2(
    "./pages/account/components/protocolBanner.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/account/components/protocolBanner.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "banner-box.",
      [1],
      "data-v-97367778{-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.6);border-radius:.10666666666666667rem;bottom:.4266666666666667rem;box-shadow:0 .16rem .16rem rgba(0,0,0,.04);box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:1.0666666666666667rem;left:50%;padding:0 .32rem;position:fixed;-webkit-transform:translate(-50%);transform:translate(-50%);width:9.2rem;z-index:10}\n.",
      [1],
      "banner-box .",
      [1],
      "text.",
      [1],
      "data-v-97367778{color:var(--color-white);-webkit-flex:1;flex:1;font-size:.4rem;text-align:left}\n.",
      [1],
      "banner-box .",
      [1],
      "pro-btn.",
      [1],
      "data-v-97367778{background-color:var(--color-blue);border-radius:.10666666666666667rem;box-sizing:border-box;color:var(--color-white);font-size:.32rem;font-weight:600;height:.7466666666666667rem;line-height:.7466666666666667rem;text-align:center;width:1.3866666666666667rem}\n",
    ],
    undefined,
    { path: "./pages/account/components/protocolBanner.wxss" }
  );
}
