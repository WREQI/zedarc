$gwx3_XC_15 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_15 || [];
    function gz$gwx3_XC_15_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div slider-content data-v-535470b8"]);
        Z([[7], [3, "q"]]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([3, "_img reduce data-v-535470b8"]);
        Z([
          3,
          "https://st.gtimg.com/design/7df3cb9bc35562b0f8e7a7d2dcda2efc.png",
        ]);
        Z([[7], [3, "c"]]);
        Z([3, "_div min data-v-535470b8"]);
        Z([a, [[7], [3, "d"]]]);
        Z([3, "_div slide-count data-v-535470b8"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "h"]]);
        Z([3, "slide-set data-v-535470b8"]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "m"]]);
        Z([3, "_div max data-v-535470b8"]);
        Z([a, [[7], [3, "n"]]]);
        Z([[7], [3, "o"]]);
        Z([[7], [3, "p"]]);
        Z([3, "_img add data-v-535470b8"]);
        Z([
          3,
          "https://st.gtimg.com/design/6c8e050afb5c35442e6f79653d0eecbf.png",
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_15 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_15 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_15_1();
      var tG8B = _mz(z, "view", ["class", 0, "style", 1], [], e, s, gg);
      var eH8B = _v();
      _(tG8B, eH8B);
      if (_oz(z, 2, e, s, gg)) {
        eH8B.wxVkey = 1;
        var oL8B = _mz(
          z,
          "image",
          ["bindtap", 3, "class", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(eH8B, oL8B);
      }
      var bI8B = _v();
      _(tG8B, bI8B);
      if (_oz(z, 6, e, s, gg)) {
        bI8B.wxVkey = 1;
        var fM8B = _n("view");
        _rz(z, fM8B, "class", 7, e, s, gg);
        var cN8B = _oz(z, 8, e, s, gg);
        _(fM8B, cN8B);
        _(bI8B, fM8B);
      }
      var hO8B = _n("view");
      _rz(z, hO8B, "class", 9, e, s, gg);
      var oP8B = _mz(
        z,
        "slider",
        [
          "activeColor",
          10,
          "backgroundColor",
          1,
          "bindchange",
          2,
          "blockSize",
          3,
          "class",
          4,
          "max",
          5,
          "min",
          6,
          "showValue",
          7,
          "value",
          8,
        ],
        [],
        e,
        s,
        gg
      );
      _(hO8B, oP8B);
      _(tG8B, hO8B);
      var oJ8B = _v();
      _(tG8B, oJ8B);
      if (_oz(z, 19, e, s, gg)) {
        oJ8B.wxVkey = 1;
        var cQ8B = _n("view");
        _rz(z, cQ8B, "class", 20, e, s, gg);
        var oR8B = _oz(z, 21, e, s, gg);
        _(cQ8B, oR8B);
        _(oJ8B, cQ8B);
      }
      var xK8B = _v();
      _(tG8B, xK8B);
      if (_oz(z, 22, e, s, gg)) {
        xK8B.wxVkey = 1;
        var lS8B = _mz(
          z,
          "image",
          ["bindtap", 23, "class", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(xK8B, lS8B);
      }
      eH8B.wxXCkey = 1;
      bI8B.wxXCkey = 1;
      oJ8B.wxXCkey = 1;
      xK8B.wxXCkey = 1;
      _(r, tG8B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_15();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml"
  ] = [
    $gwx3_XC_15,
    "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml"
  ] = $gwx3_XC_15(
    "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "slider-content.",
      [1],
      "data-v-535470b8{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;height:.64rem;-webkit-justify-content:space-between;justify-content:space-between;width:7.6rem}\n.",
      [1],
      "slider-content .",
      [1],
      "reduce.",
      [1],
      "data-v-535470b8{-webkit-flex-shrink:0;flex-shrink:0;height:.64rem;margin-right:.21333333333333335rem;width:.64rem}\n.",
      [1],
      "slider-content .",
      [1],
      "min.",
      [1],
      "data-v-535470b8{box-sizing:border-box;color:#98a0b3;font-size:.37333333333333335rem;height:.4rem;margin-right:.21333333333333335rem;width:.4rem}\n.",
      [1],
      "slider-content .",
      [1],
      "slide-count.",
      [1],
      "data-v-535470b8{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:.64rem;-webkit-justify-content:center;justify-content:center;width:100%}\n.",
      [1],
      "slider-content .",
      [1],
      "slide-count .",
      [1],
      "slide-set.",
      [1],
      "data-v-535470b8{-webkit-transform:scale(1.24);transform:scale(1.24);-webkit-transform-origin:center;transform-origin:center;width:100%}\n.",
      [1],
      "slider-content .",
      [1],
      "max.",
      [1],
      "data-v-535470b8{box-sizing:border-box;color:#98a0b3;font-size:.37333333333333335rem;margin-left:.18666666666666668rem}\n.",
      [1],
      "slider-content .",
      [1],
      "add.",
      [1],
      "data-v-535470b8{-webkit-flex-shrink:0;flex-shrink:0;height:.64rem;margin-left:.21333333333333335rem;width:.64rem}\n",
    ],
    undefined,
    {
      path: "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxss",
    }
  );
}
