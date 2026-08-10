$gwx21_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_0 || [];
    function gz$gwx21_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-ba684092"]],
              [1, "basket-bar-container"],
            ],
            [[7], [3, "m"]],
          ],
        ]);
        Z([3, "_div left-content data-v-ba684092"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "d"]]);
        Z([3, "btn-box data-v-ba684092"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "data-v-ba684092"]],
                [1, "icon"],
              ],
              [1, "icon-adds"],
            ],
            [[7], [3, "b"]],
          ],
        ]);
        Z([3, "_div data-v-ba684092"]);
        Z([a, [[7], [3, "c"]]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "g"]]);
        Z(z[4]);
        Z([3, "share"]);
        Z([3, "true"]);
        Z([3, "_div icon icon-shares data-v-ba684092"]);
        Z(z[6]);
        Z([a, [[7], [3, "f"]]]);
        Z([[7], [3, "i"]]);
        Z([3, "_div btn-box data-v-ba684092"]);
        Z(z[13]);
        Z(z[6]);
        Z([a, [[7], [3, "h"]]]);
        Z([3, "_div right-content data-v-ba684092"]);
        Z([[7], [3, "l"]]);
        Z([3, "_div comment-box data-v-ba684092"]);
        Z([[7], [3, "j"]]);
        Z([3, "_div comment-text data-v-ba684092"]);
        Z([3, "_span data-v-ba684092"]);
        Z([3, "当前有"]);
        Z([3, "_span comment-num data-v-ba684092"]);
        Z([a, [[7], [3, "k"]]]);
        Z(z[26]);
        Z([3, "条评论，说说你的看法..."]);
        Z(z[25]);
        Z([3, "说说你的看法..."]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_0 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_0_1();
      var cT = _n("view");
      _rz(z, cT, "class", 0, e, s, gg);
      var hU = _n("view");
      _rz(z, hU, "class", 1, e, s, gg);
      var oV = _v();
      _(hU, oV);
      if (_oz(z, 2, e, s, gg)) {
        oV.wxVkey = 1;
        var oX = _mz(z, "button", ["bindtap", 3, "class", 1], [], e, s, gg);
        var lY = _n("view");
        _rz(z, lY, "class", 5, e, s, gg);
        _(oX, lY);
        var aZ = _n("view");
        _rz(z, aZ, "class", 6, e, s, gg);
        var t1 = _oz(z, 7, e, s, gg);
        _(aZ, t1);
        _(oX, aZ);
        _(oV, oX);
      }
      var cW = _v();
      _(hU, cW);
      if (_oz(z, 8, e, s, gg)) {
        cW.wxVkey = 1;
        var e2 = _mz(
          z,
          "button",
          ["bindtap", 9, "class", 1, "openType", 2, "plain", 3],
          [],
          e,
          s,
          gg
        );
        var b3 = _n("view");
        _rz(z, b3, "class", 13, e, s, gg);
        _(e2, b3);
        var o4 = _n("view");
        _rz(z, o4, "class", 14, e, s, gg);
        var x5 = _oz(z, 15, e, s, gg);
        _(o4, x5);
        _(e2, o4);
        _(cW, e2);
      } else {
        cW.wxVkey = 2;
        var o6 = _mz(z, "view", ["bindtap", 16, "class", 1], [], e, s, gg);
        var f7 = _n("view");
        _rz(z, f7, "class", 18, e, s, gg);
        _(o6, f7);
        var c8 = _n("view");
        _rz(z, c8, "class", 19, e, s, gg);
        var h9 = _oz(z, 20, e, s, gg);
        _(c8, h9);
        _(o6, c8);
        _(cW, o6);
      }
      oV.wxXCkey = 1;
      cW.wxXCkey = 1;
      _(cT, hU);
      var o0 = _n("view");
      _rz(z, o0, "class", 21, e, s, gg);
      var cAB = _mz(z, "view", ["bindtap", 22, "class", 1], [], e, s, gg);
      var oBB = _v();
      _(cAB, oBB);
      if (_oz(z, 24, e, s, gg)) {
        oBB.wxVkey = 1;
        var lCB = _n("view");
        _rz(z, lCB, "class", 25, e, s, gg);
        var aDB = _n("label");
        _rz(z, aDB, "class", 26, e, s, gg);
        var tEB = _oz(z, 27, e, s, gg);
        _(aDB, tEB);
        _(lCB, aDB);
        var eFB = _n("label");
        _rz(z, eFB, "class", 28, e, s, gg);
        var bGB = _oz(z, 29, e, s, gg);
        _(eFB, bGB);
        _(lCB, eFB);
        var oHB = _n("label");
        _rz(z, oHB, "class", 30, e, s, gg);
        var xIB = _oz(z, 31, e, s, gg);
        _(oHB, xIB);
        _(lCB, oHB);
        _(oBB, lCB);
      } else {
        oBB.wxVkey = 2;
        var oJB = _n("view");
        _rz(z, oJB, "class", 32, e, s, gg);
        var fKB = _oz(z, 33, e, s, gg);
        _(oJB, fKB);
        _(oBB, oJB);
      }
      oBB.wxXCkey = 1;
      _(o0, cAB);
      _(cT, o0);
      _(r, cT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxml"
  ] = [
    $gwx21_XC_0,
    "./pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxml"
  ] = $gwx21_XC_0(
    "./pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "basket-bar-container.",
      [1],
      "data-v-ba684092{-webkit-align-items:center;align-items:center;background:#fff;border-top:.013333333333333334rem solid #e9ebf0;bottom:0;display:-webkit-flex;display:flex;height:1.3866666666666667rem;-webkit-justify-content:space-between;justify-content:space-between;left:0;padding:0 .32rem env(safe-area-inset-bottom) .13333333333333333rem;position:fixed;width:calc(100% - .4533333333333333rem);z-index:99}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content.",
      [1],
      "data-v-ba684092{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:0 0 auto;flex:0 0 auto;height:100%;-webkit-justify-content:flex-start;justify-content:flex-start}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box.",
      [1],
      "data-v-ba684092{-webkit-align-items:center;align-items:center;background-color:#fff;border:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:.26666666666666666rem;height:100%;-webkit-justify-content:center;justify-content:center;line-height:.26666666666666666rem;padding:0;width:1.1733333333333333rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box.",
      [1],
      "btn-box.",
      [1],
      "data-v-ba684092:after{border:none}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon.",
      [1],
      "data-v-ba684092{-webkit-align-items:center;align-items:center;background-size:contain;color:#54576a;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:.5866666666666667rem;margin-bottom:.10666666666666667rem;position:relative;width:.5866666666666667rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-adds.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/5edfe71650f4e263915e842ce8863584.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-adds.",
      [1],
      "added.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/ea8836d7294c2b212c6c59dfba6130c8.png);transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-subscribe.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/8d10191a4cd476a780256ee411766e5a.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-subscribe.",
      [1],
      "subscribed.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/4d50e22b5df47370480bb4856ce6db8b.png);transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-shares.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/bfb63b72f85f185f221f831faa1e5986.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-comment.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/a43c6089a7d6e21f2fd513d6fd715fde.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-comment.",
      [1],
      "plus.",
      [1],
      "data-v-ba684092{background-image:url(https://st.gtimg.com/design/1508dd3173baedc04a32070583ecec7b.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content.",
      [1],
      "data-v-ba684092{margin-left:.4533333333333333rem;max-width:9.333333333333334rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box.",
      [1],
      "data-v-ba684092,.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content.",
      [1],
      "data-v-ba684092{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-justify-content:flex-start;justify-content:flex-start}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box.",
      [1],
      "data-v-ba684092{background:#f5f6fa;border-radius:.10666666666666667rem;height:.96rem;margin:0 auto;width:5.573333333333333rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box .",
      [1],
      "comment-text.",
      [1],
      "data-v-ba684092{color:#98a0b3;font-size:.37333333333333335rem;font-weight:400;line-height:.4266666666666667rem;margin-left:.29333333333333333rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box .",
      [1],
      "comment-text .",
      [1],
      "comment-num.",
      [1],
      "data-v-ba684092{color:var(--color-midgray-1)}\n",
    ],
    undefined,
    {
      path: "./pages/newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.wxss",
    }
  );
}
