$gwx34_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_5 || [];
    function gz$gwx34_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "container"]);
        Z([3, "__l"]);
        Z([3, "0d92519e-0"]);
        Z([3, "mp-logo"]);
        Z([3, ""]);
        Z([3, "_img mp-logo-img"]);
        Z([[7], [3, "b"]]);
        Z([3, "mp-title"]);
        Z([a, [[7], [3, "c"]]]);
        Z([[7], [3, "e"]]);
        Z([3, "mp-btn"]);
        Z([a, [[7], [3, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_5 = true;
    var x = ["./pages/act/navigateToMp/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_5_1();
      var oXF = _n("page-meta");
      _rz(z, oXF, "rootFontSize", 0, e, s, gg);
      _(r, oXF);
      var cYF = _n("view");
      _rz(z, cYF, "class", 1, e, s, gg);
      var oZF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(cYF, oZF);
      var l1F = _n("view");
      _rz(z, l1F, "class", 4, e, s, gg);
      var a2F = _mz(z, "image", ["alt", 5, "class", 1, "src", 2], [], e, s, gg);
      _(l1F, a2F);
      _(cYF, l1F);
      var t3F = _n("view");
      _rz(z, t3F, "class", 8, e, s, gg);
      var e4F = _oz(z, 9, e, s, gg);
      _(t3F, e4F);
      _(cYF, t3F);
      var b5F = _mz(z, "view", ["bindtap", 10, "class", 1], [], e, s, gg);
      var o6F = _oz(z, 12, e, s, gg);
      _(b5F, o6F);
      _(cYF, b5F);
      _(r, cYF);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/navigateToMp/main.wxml"] = [
    $gwx34_XC_5,
    "./pages/act/navigateToMp/main.wxml",
  ];
else
  __wxAppCode__["pages/act/navigateToMp/main.wxml"] = $gwx34_XC_5(
    "./pages/act/navigateToMp/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/act/navigateToMp/main.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "container{background-image:url(https://st.gtimg.com/design/12ace444429de3f88a6ce598b5dc3ba3.jpeg);background-size:contain;height:19.28rem;text-align:center;width:100%}\n.",
      [1],
      "container .",
      [1],
      "mp-logo{padding-top:5.04rem}\n.",
      [1],
      "container .",
      [1],
      "mp-logo .",
      [1],
      "mp-logo-img{height:1.6rem;width:1.6rem}\n.",
      [1],
      "container .",
      [1],
      "mp-title{color:#96a0b5;font-size:.37333333333333335rem;margin-top:.5333333333333333rem}\n.",
      [1],
      "container .",
      [1],
      "mp-btn{background-image:linear-gradient(270deg,#e63535,#ef5350);border-radius:.5866666666666667rem;color:#fff;display:inline-block;font-size:.4266666666666667rem;font-weight:500;height:1.1733333333333333rem;line-height:1.1733333333333333rem;margin-top:.6666666666666666rem;width:6.133333333333334rem}\n",
    ],
    undefined,
    { path: "./pages/act/navigateToMp/main.wxss" }
  );
}
