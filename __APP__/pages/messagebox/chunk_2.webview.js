$gwx44_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx44_XC_4 || [];
    function gz$gwx44_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div message-empty-content data-v-a9eb006f"]);
        Z([3, ""]);
        Z([3, "_img empty-icon data-v-a9eb006f"]);
        Z([
          3,
          "https://st.gtimg.com/design/dd0bc437f729fec60903074564426cae.svg",
        ]);
        Z([[7], [3, "a"]]);
        Z(z[1]);
        Z([3, "_img logo-icon data-v-a9eb006f"]);
        Z([
          3,
          "https://st.gtimg.com/design/6eb62766effb3c00dae50c452219c64f.svg",
        ]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "_img logo-icon pro data-v-a9eb006f"]);
        Z([
          3,
          "https://st.gtimg.com/design/3e9d49ded8d53634166aa389506f80fe.png",
        ]);
        Z(z[1]);
        Z(z[10]);
        Z([
          3,
          "https://st.gtimg.com/design/8fa51aef3f07f6cb37f9106c71e673f5.png",
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx44_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx44_XC_4 = true;
    var x = [
      "./pages/messagebox/@tencent/st-message-box/components/empty/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_4_1();
      var l7G = _n("view");
      _rz(z, l7G, "class", 0, e, s, gg);
      var t9G = _mz(z, "image", ["alt", 1, "class", 1, "src", 2], [], e, s, gg);
      _(l7G, t9G);
      var a8G = _v();
      _(l7G, a8G);
      if (_oz(z, 4, e, s, gg)) {
        a8G.wxVkey = 1;
        var e0G = _mz(
          z,
          "image",
          ["alt", 5, "class", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(a8G, e0G);
      } else if (_oz(z, 8, e, s, gg)) {
        a8G.wxVkey = 2;
        var bAH = _mz(
          z,
          "image",
          ["alt", 9, "class", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(a8G, bAH);
      } else {
        a8G.wxVkey = 3;
        var oBH = _mz(
          z,
          "image",
          ["alt", 12, "class", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(a8G, oBH);
      }
      a8G.wxXCkey = 1;
      _(r, l7G);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx44_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx44_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/empty/index.wxml"
  ] = [
    $gwx44_XC_4,
    "./pages/messagebox/@tencent/st-message-box/components/empty/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/empty/index.wxml"
  ] = $gwx44_XC_4(
    "./pages/messagebox/@tencent/st-message-box/components/empty/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/empty/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "message-empty-content.",
      [1],
      "data-v-a9eb006f{height:100vh;width:100vw}\n.",
      [1],
      "message-empty-content .",
      [1],
      "empty-icon.",
      [1],
      "data-v-a9eb006f{height:2.2933333333333334rem;left:50%;position:absolute;top:3.4rem;-webkit-transform:translate(-50%);transform:translate(-50%);width:1.8666666666666667rem}\n.",
      [1],
      "message-empty-content .",
      [1],
      "logo-icon.",
      [1],
      "data-v-a9eb006f{bottom:calc(.5333333333333333rem + env(safe-area-inset-bottom));height:.48rem;left:50%;position:fixed;-webkit-transform:translate(-50%);transform:translate(-50%);width:2.4266666666666667rem}\n.",
      [1],
      "message-empty-content .",
      [1],
      "logo-icon.",
      [1],
      "pro.",
      [1],
      "data-v-a9eb006f{height:.4266666666666667rem;width:2.506666666666667rem}\n",
    ],
    undefined,
    {
      path: "./pages/messagebox/@tencent/st-message-box/components/empty/index.wxss",
    }
  );
}
