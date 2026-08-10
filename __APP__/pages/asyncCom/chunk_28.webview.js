$gwx1_XC_21 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_21 || [];
    function gz$gwx1_XC_21_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div add-to-my-mp-guide-container data-v-7c461af2"]);
        Z([3, "_div hint-area data-v-7c461af2"]);
        Z([
          [2, "+"],
          [1, "left:"],
          [[7], [3, "g"]],
        ]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "d"]]);
        Z([3, "_div hint-text guide-text data-v-7c461af2"]);
        Z([3, "_div data-v-7c461af2"]);
        Z([a, [[7], [3, "c"]]]);
        Z([3, "_div hint-text data-v-7c461af2"]);
        Z(z[7]);
        Z([3, "点击添加到【我的小程序】"]);
        Z(z[7]);
        Z([3, "下次就能更快找到我喔"]);
        Z([[7], [3, "f"]]);
        Z([3, "_div gesture-area data-v-7c461af2"]);
        Z([3, "_img data-v-7c461af2"]);
        Z([[7], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_21 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_21 = true;
    var x = ["./pages/asyncCom/components/addToMyMpGuide.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_21_1();
      var oRT = _v();
      _(r, oRT);
      if (_oz(z, 0, e, s, gg)) {
        oRT.wxVkey = 1;
        var xST = _n("view");
        _rz(z, xST, "class", 1, e, s, gg);
        var oTT = _mz(z, "view", ["class", 2, "style", 1], [], e, s, gg);
        var fUT = _v();
        _(oTT, fUT);
        if (_oz(z, 4, e, s, gg)) {
          fUT.wxVkey = 1;
          var cVT = _mz(z, "view", ["bindtap", 5, "class", 1], [], e, s, gg);
          var hWT = _n("view");
          _rz(z, hWT, "class", 7, e, s, gg);
          var oXT = _oz(z, 8, e, s, gg);
          _(hWT, oXT);
          _(cVT, hWT);
          _(fUT, cVT);
        } else {
          fUT.wxVkey = 2;
          var cYT = _n("view");
          _rz(z, cYT, "class", 9, e, s, gg);
          var oZT = _n("view");
          _rz(z, oZT, "class", 10, e, s, gg);
          var l1T = _oz(z, 11, e, s, gg);
          _(oZT, l1T);
          _(cYT, oZT);
          var a2T = _n("view");
          _rz(z, a2T, "class", 12, e, s, gg);
          var t3T = _oz(z, 13, e, s, gg);
          _(a2T, t3T);
          _(cYT, a2T);
          _(fUT, cYT);
        }
        var e4T = _mz(z, "view", ["bindtap", 14, "class", 1], [], e, s, gg);
        var b5T = _mz(z, "image", ["class", 16, "src", 1], [], e, s, gg);
        _(e4T, b5T);
        _(oTT, e4T);
        fUT.wxXCkey = 1;
        _(xST, oTT);
        _(oRT, xST);
      }
      oRT.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_21();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/addToMyMpGuide.wxml"] = [
    $gwx1_XC_21,
    "./pages/asyncCom/components/addToMyMpGuide.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/addToMyMpGuide.wxml"] = $gwx1_XC_21(
    "./pages/asyncCom/components/addToMyMpGuide.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/asyncCom/components/addToMyMpGuide.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "add-to-my-mp-guide-container .",
      [1],
      "hint-area.",
      [1],
      "data-v-7c461af2{-webkit-align-items:center;align-items:center;background:#3077ec;border-radius:.10666666666666667rem;box-sizing:border-box;display:-webkit-flex;display:flex;height:1.6933333333333334rem;-webkit-justify-content:space-between;justify-content:space-between;margin-left:-6.1866666666666665rem;padding:.4rem;position:fixed;top:2.6666666666666665rem;width:6.986666666666666rem;z-index:9999}\n.",
      [1],
      "add-to-my-mp-guide-container .",
      [1],
      "hint-area.",
      [1],
      "data-v-7c461af2:before{border-bottom:.5333333333333333rem solid #3077ec;border-left:.4rem solid transparent;border-right:.4rem solid transparent;content:\x22\x22;height:0;position:absolute;right:.4rem;top:-.26666666666666666rem;width:0;z-index:-1}\n.",
      [1],
      "add-to-my-mp-guide-container .",
      [1],
      "hint-area .",
      [1],
      "hint-text.",
      [1],
      "data-v-7c461af2{color:#fff;font-family:PingFangSC-Regular,PingFang SC;font-size:.4266666666666667rem;font-weight:400;line-height:.5866666666666667rem;z-index:20}\n.",
      [1],
      "add-to-my-mp-guide-container .",
      [1],
      "hint-area .",
      [1],
      "guide-text.",
      [1],
      "data-v-7c461af2{margin-right:.4rem}\n.",
      [1],
      "add-to-my-mp-guide-container .",
      [1],
      "hint-area .",
      [1],
      "gesture-area wx-image.",
      [1],
      "data-v-7c461af2{display:block;height:.28rem;width:.28rem}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/asyncCom/components/addToMyMpGuide.wxss:1:1080)",
    { path: "./pages/asyncCom/components/addToMyMpGuide.wxss" }
  );
}
