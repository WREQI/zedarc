$gwx3_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_11 || [];
    function gz$gwx3_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "j"]]);
        Z([3, "_div range-slider-content data-v-420d60e2"]);
        Z([3, "sliderContent"]);
        Z([3, "_div range-slider-block data-v-420d60e2"]);
        Z([3, "sliderBlock"]);
        Z([
          [2, "+"],
          [1, "left:"],
          [[7], [3, "c"]],
        ]);
        Z([[7], [3, "b"]]);
        Z([3, "_div fake-btn data-v-420d60e2"]);
        Z([3, "_div range-slider-bg data-v-420d60e2"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "range-slider-select"]],
              [1, "data-v-420d60e2"],
            ],
            [
              [2, "&&"],
              [[7], [3, "d"]],
              [1, "classic"],
            ],
          ],
        ]);
        Z([
          [2, "+"],
          [
            [2, "+"],
            [
              [2, "+"],
              [1, "left:"],
              [[7], [3, "e"]],
            ],
            [1, ";"],
          ],
          [
            [2, "+"],
            [1, "width:"],
            [[7], [3, "f"]],
          ],
        ]);
        Z(z[3]);
        Z([
          [2, "+"],
          [1, "left:"],
          [[7], [3, "i"]],
        ]);
        Z([[7], [3, "h"]]);
        Z(z[7]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_11 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_11_1();
      var oB3B = _mz(
        z,
        "view",
        ["catchtouchmove", 0, "class", 1, "ref", 1],
        [],
        e,
        s,
        gg
      );
      var lC3B = _mz(
        z,
        "view",
        ["class", 3, "ref", 1, "style", 2],
        [],
        e,
        s,
        gg
      );
      var aD3B = _mz(
        z,
        "view",
        ["catchtouchmove", 6, "class", 1],
        [],
        e,
        s,
        gg
      );
      _(lC3B, aD3B);
      _(oB3B, lC3B);
      var tE3B = _n("view");
      _rz(z, tE3B, "class", 8, e, s, gg);
      var eF3B = _mz(z, "view", ["class", 9, "style", 1], [], e, s, gg);
      _(tE3B, eF3B);
      _(oB3B, tE3B);
      var bG3B = _mz(z, "view", ["class", 11, "style", 1], [], e, s, gg);
      var oH3B = _mz(
        z,
        "view",
        ["catchtouchmove", 13, "class", 1],
        [],
        e,
        s,
        gg
      );
      _(bG3B, oH3B);
      _(oB3B, bG3B);
      _(r, oB3B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml"
  ] = [
    $gwx3_XC_11,
    "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml"
  ] = $gwx3_XC_11(
    "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "range-slider-content.",
      [1],
      "data-v-420d60e2{-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:.5333333333333333rem;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0 auto;position:relative}\n.",
      [1],
      "range-slider-content .",
      [1],
      "range-slider-bg.",
      [1],
      "data-v-420d60e2{background-color:var(--border-light-divider);border-radius:.37333333333333335rem;height:.10666666666666667rem;margin:0 auto;position:relative;width:100%}\n.",
      [1],
      "range-slider-content .",
      [1],
      "range-slider-bg .",
      [1],
      "range-slider-select.",
      [1],
      "data-v-420d60e2{background-color:#e63535;height:.10666666666666667rem;position:absolute;top:0}\n.",
      [1],
      "range-slider-content .",
      [1],
      "range-slider-bg .",
      [1],
      "classic.",
      [1],
      "data-v-420d60e2{background-color:#007aff}\n.",
      [1],
      "range-slider-content .",
      [1],
      "range-slider-block.",
      [1],
      "data-v-420d60e2{background-color:#fff;border:.02666666666666667rem solid #dcdfe6;border-radius:50%;box-sizing:border-box;height:.5333333333333333rem;left:0;position:absolute;top:0;width:.5333333333333333rem;z-index:1}\n.",
      [1],
      "range-slider-content .",
      [1],
      "range-slider-block .",
      [1],
      "fake-btn.",
      [1],
      "data-v-420d60e2{background-color:initial;height:.88rem;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:.88rem}\n",
    ],
    undefined,
    {
      path: "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxss",
    }
  );
}
