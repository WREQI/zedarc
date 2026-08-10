$gwx17_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx17_XC_2 || [];
    function gz$gwx17_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx17_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx17_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx17_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "s"]]);
        Z([3, "_div stock-info-container data-v-fb142a44"]);
        Z([3, "_div stock-title-container data-v-fb142a44"]);
        Z([3, "_div stock-left data-v-fb142a44"]);
        Z([[7], [3, "a"]]);
        Z([3, "_img stock-logo data-v-fb142a44"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div stock-name data-v-fb142a44"]);
        Z([a, [[7], [3, "c"]]]);
        Z([[7], [3, "d"]]);
        Z([3, "_img stock-flag data-v-fb142a44"]);
        Z([[7], [3, "e"]]);
        Z([3, "_div stock-right data-v-fb142a44"]);
        Z([[7], [3, "f"]]);
        Z([3, "_div stock-time data-v-fb142a44"]);
        Z([a, [[7], [3, "g"]]]);
        Z([3, "_div stock-quote-container data-v-fb142a44"]);
        Z([3, "_div stock-quote-left data-v-fb142a44"]);
        Z([3, "_div stock-zsr-title data-v-fb142a44"]);
        Z([3, "营收"]);
        Z([3, "_div stock-zsr-value data-v-fb142a44"]);
        Z([a, [[7], [3, "h"]], [[7], [3, "i"]]]);
        Z([3, "_div stock-zsr-zdf data-v-fb142a44"]);
        Z([
          [2, "+"],
          [1, "color:"],
          [[7], [3, "k"]],
        ]);
        Z([a, [3, "("], [[7], [3, "j"]], [3, ")"]]);
        Z([3, "_div stock-quote-right data-v-fb142a44"]);
        Z([3, "_span stock-profit-title data-v-fb142a44"]);
        Z([3, "利润"]);
        Z([3, "_span stock-profit-value data-v-fb142a44"]);
        Z([a, [[7], [3, "l"]], [[7], [3, "m"]]]);
        Z([3, "_span stock-profit-zdf data-v-fb142a44"]);
        Z([
          [2, "+"],
          [1, "color:"],
          [[7], [3, "o"]],
        ]);
        Z([a, z[24][1], [[7], [3, "n"]], z[24][3]]);
        Z([3, "_div stock-seperator-line data-v-fb142a44"]);
        Z([[7], [3, "p"]]);
        Z([3, "_div stock-lightspot-item data-v-fb142a44"]);
        Z([3, "_div stock-lightspot-left data-v-fb142a44"]);
        Z([3, "_span stock-lightspot-tag data-v-fb142a44"]);
        Z([
          [2, "+"],
          [1, "top:"],
          [[7], [3, "q"]],
        ]);
        Z([3, "要点"]);
        Z([a, [[7], [3, "r"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx17_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx17_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx17_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx17_XC_2 = true;
    var x = [
      "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx17_XC_2_1();
      var eBF = _mz(z, "view", ["catchtap", 0, "class", 1], [], e, s, gg);
      var oDF = _n("view");
      _rz(z, oDF, "class", 2, e, s, gg);
      var xEF = _n("view");
      _rz(z, xEF, "class", 3, e, s, gg);
      var oFF = _v();
      _(xEF, oFF);
      if (_oz(z, 4, e, s, gg)) {
        oFF.wxVkey = 1;
        var cHF = _mz(z, "image", ["class", 5, "src", 1], [], e, s, gg);
        _(oFF, cHF);
      }
      var hIF = _n("view");
      _rz(z, hIF, "class", 7, e, s, gg);
      var oJF = _oz(z, 8, e, s, gg);
      _(hIF, oJF);
      _(xEF, hIF);
      var fGF = _v();
      _(xEF, fGF);
      if (_oz(z, 9, e, s, gg)) {
        fGF.wxVkey = 1;
        var cKF = _mz(z, "image", ["class", 10, "src", 1], [], e, s, gg);
        _(fGF, cKF);
      }
      oFF.wxXCkey = 1;
      fGF.wxXCkey = 1;
      _(oDF, xEF);
      var oLF = _n("view");
      _rz(z, oLF, "class", 12, e, s, gg);
      var lMF = _v();
      _(oLF, lMF);
      if (_oz(z, 13, e, s, gg)) {
        lMF.wxVkey = 1;
        var aNF = _n("view");
        _rz(z, aNF, "class", 14, e, s, gg);
        var tOF = _oz(z, 15, e, s, gg);
        _(aNF, tOF);
        _(lMF, aNF);
      }
      lMF.wxXCkey = 1;
      _(oDF, oLF);
      _(eBF, oDF);
      var ePF = _n("view");
      _rz(z, ePF, "class", 16, e, s, gg);
      var bQF = _n("view");
      _rz(z, bQF, "class", 17, e, s, gg);
      var oRF = _n("view");
      _rz(z, oRF, "class", 18, e, s, gg);
      var xSF = _oz(z, 19, e, s, gg);
      _(oRF, xSF);
      _(bQF, oRF);
      var oTF = _n("view");
      _rz(z, oTF, "class", 20, e, s, gg);
      var fUF = _oz(z, 21, e, s, gg);
      _(oTF, fUF);
      _(bQF, oTF);
      var cVF = _mz(z, "view", ["class", 22, "style", 1], [], e, s, gg);
      var hWF = _oz(z, 24, e, s, gg);
      _(cVF, hWF);
      _(bQF, cVF);
      _(ePF, bQF);
      var oXF = _n("view");
      _rz(z, oXF, "class", 25, e, s, gg);
      var cYF = _n("label");
      _rz(z, cYF, "class", 26, e, s, gg);
      var oZF = _oz(z, 27, e, s, gg);
      _(cYF, oZF);
      _(oXF, cYF);
      var l1F = _n("label");
      _rz(z, l1F, "class", 28, e, s, gg);
      var a2F = _oz(z, 29, e, s, gg);
      _(l1F, a2F);
      _(oXF, l1F);
      var t3F = _mz(z, "label", ["class", 30, "style", 1], [], e, s, gg);
      var e4F = _oz(z, 32, e, s, gg);
      _(t3F, e4F);
      _(oXF, t3F);
      _(ePF, oXF);
      _(eBF, ePF);
      var b5F = _n("view");
      _rz(z, b5F, "class", 33, e, s, gg);
      _(eBF, b5F);
      var bCF = _v();
      _(eBF, bCF);
      if (_oz(z, 34, e, s, gg)) {
        bCF.wxVkey = 1;
        var o6F = _n("view");
        _rz(z, o6F, "class", 35, e, s, gg);
        var x7F = _n("view");
        _rz(z, x7F, "class", 36, e, s, gg);
        var o8F = _mz(z, "label", ["class", 37, "style", 1], [], e, s, gg);
        var f9F = _oz(z, 39, e, s, gg);
        _(o8F, f9F);
        _(x7F, o8F);
        var c0F = _oz(z, 40, e, s, gg);
        _(x7F, c0F);
        _(o6F, x7F);
        _(bCF, o6F);
      }
      bCF.wxXCkey = 1;
      _(r, eBF);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx17_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx17_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxml"
  ] = [
    $gwx17_XC_2,
    "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxml",
  ];
else
  __wxAppCode__[
    "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxml"
  ] = $gwx17_XC_2(
    "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "stock-info-container.",
      [1],
      "data-v-fb142a44{background-color:#fff;border-radius:.21333333333333335rem;margin:0 .32rem .32rem;overflow:hidden}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container.",
      [1],
      "data-v-fb142a44{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-left.",
      [1],
      "data-v-fb142a44{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;margin:.32rem .4266666666666667rem .21333333333333335rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-left .",
      [1],
      "stock-logo.",
      [1],
      "data-v-fb142a44{border:.013333333333333334rem solid #dcdfe6;border-radius:.05333333333333334rem;height:.5333333333333333rem;margin-right:.21333333333333335rem;width:.72rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-left .",
      [1],
      "stock-name.",
      [1],
      "data-v-fb142a44{color:#262e40;font-size:.4266666666666667rem;font-weight:600;line-height:.6rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-left .",
      [1],
      "stock-flag.",
      [1],
      "data-v-fb142a44{height:.56rem;margin-left:.21333333333333335rem;width:1.6rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-right.",
      [1],
      "data-v-fb142a44{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;margin:.32rem .4266666666666667rem .21333333333333335rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-right .",
      [1],
      "stock-time.",
      [1],
      "data-v-fb142a44{color:#98a0b3;font-size:.32rem;font-weight:400;line-height:.4533333333333333rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container.",
      [1],
      "data-v-fb142a44{-webkit-align-items:center;align-items:center;line-height:.56rem;margin:0 .4266666666666667rem .32rem;white-space:nowrap}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-left.",
      [1],
      "data-v-fb142a44,.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container.",
      [1],
      "data-v-fb142a44{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-left .",
      [1],
      "stock-zsr-title.",
      [1],
      "data-v-fb142a44{color:#7a8499;font-size:.3466666666666667rem;font-weight:400;margin-right:.10666666666666667rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-left .",
      [1],
      "stock-zsr-value.",
      [1],
      "data-v-fb142a44{color:#262e40;font-size:.3466666666666667rem;font-weight:500}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-left .",
      [1],
      "stock-zsr-zdf.",
      [1],
      "data-v-fb142a44{font-size:.3466666666666667rem;font-weight:500;margin-left:.08rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-right.",
      [1],
      "data-v-fb142a44{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;margin-left:.32rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-right .",
      [1],
      "stock-profit-title.",
      [1],
      "data-v-fb142a44{color:#7a8499;font-size:.3466666666666667rem;font-weight:400;margin-right:.10666666666666667rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-right .",
      [1],
      "stock-profit-value.",
      [1],
      "data-v-fb142a44{color:#262e40;font-size:.3466666666666667rem;font-weight:500}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-right .",
      [1],
      "stock-profit-zdf.",
      [1],
      "data-v-fb142a44{font-size:.3466666666666667rem;font-weight:500;margin-left:.08rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-seperator-line.",
      [1],
      "data-v-fb142a44{background-color:#e9ebf0;height:.013333333333333334rem;margin:0 .4266666666666667rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-lightspot-item.",
      [1],
      "data-v-fb142a44{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;margin:.32rem .4266666666666667rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-lightspot-item .",
      [1],
      "stock-lightspot-left.",
      [1],
      "data-v-fb142a44{color:#262e40;font-size:.4266666666666667rem;font-weight:600;line-height:.64rem}\n.",
      [1],
      "stock-info-container .",
      [1],
      "stock-lightspot-item .",
      [1],
      "stock-lightspot-tag.",
      [1],
      "data-v-fb142a44{background-color:#3077ec;border-radius:0 .10666666666666667rem;color:#fff;display:inline-block;font-size:.29333333333333333rem;font-weight:600;line-height:.48rem;margin-right:.05333333333333334rem;overflow:hidden;padding-left:.013333333333333334rem;position:relative;text-align:center;width:.8rem}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container.",
      [1],
      "data-v-fb142a44{background-color:#12161f}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-left .",
      [1],
      "stock-logo.",
      [1],
      "data-v-fb142a44{border:.013333333333333334rem solid #262e40}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-left .",
      [1],
      "stock-name.",
      [1],
      "data-v-fb142a44{color:#f0f1f5}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-title-container .",
      [1],
      "stock-right .",
      [1],
      "stock-time.",
      [1],
      "data-v-fb142a44{color:#69738c}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-left .",
      [1],
      "stock-zsr-title.",
      [1],
      "data-v-fb142a44{color:#7d88a1}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-left .",
      [1],
      "stock-zsr-value.",
      [1],
      "data-v-fb142a44{color:#f0f1f5}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-right .",
      [1],
      "stock-profit-title.",
      [1],
      "data-v-fb142a44{color:#7d88a1}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-quote-container .",
      [1],
      "stock-quote-right .",
      [1],
      "stock-profit-value.",
      [1],
      "data-v-fb142a44{color:#f0f1f5}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-seperator-line.",
      [1],
      "data-v-fb142a44{background-color:#262e40}\n.",
      [1],
      "black .",
      [1],
      "stock-info-container .",
      [1],
      "stock-lightspot-item .",
      [1],
      "stock-lightspot-left.",
      [1],
      "data-v-fb142a44{color:#f0f1f5}\n",
    ],
    undefined,
    {
      path: "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/components/StockSearchItem.wxss",
    }
  );
}
