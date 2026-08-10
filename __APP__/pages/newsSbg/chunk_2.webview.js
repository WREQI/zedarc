$gwx21_XC_12 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_12 || [];
    function gz$gwx21_XC_12_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1 = [];
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
              [[5], [[5], [1, "_div"]], [1, "data-v-4c16856f"]],
              [1, "basket-bar-container"],
            ],
            [[7], [3, "i"]],
          ],
        ]);
        Z([3, "_div left-content data-v-4c16856f"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
        Z([3, "btn-box data-v-4c16856f"]);
        Z([3, "share"]);
        Z([3, "true"]);
        Z([3, "_div icon icon-shares data-v-4c16856f"]);
        Z([3, "_div data-v-4c16856f"]);
        Z([a, [[7], [3, "b"]]]);
        Z([[7], [3, "e"]]);
        Z([3, "_div btn-box data-v-4c16856f"]);
        Z(z[7]);
        Z(z[8]);
        Z([a, [[7], [3, "d"]]]);
        Z([3, "_div right-content data-v-4c16856f"]);
        Z([[7], [3, "h"]]);
        Z([3, "_div comment-box data-v-4c16856f"]);
        Z([[7], [3, "f"]]);
        Z([3, "_div comment-text data-v-4c16856f"]);
        Z([3, "_span data-v-4c16856f"]);
        Z([3, "当前有"]);
        Z([3, "_span comment-num data-v-4c16856f"]);
        Z([a, [[7], [3, "g"]]]);
        Z(z[20]);
        Z([3, "条评论，说说你的看法..."]);
        Z(z[19]);
        Z([3, "说说你的看法..."]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_12 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_12 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_12_1();
      var hYY = _n("view");
      _rz(z, hYY, "class", 0, e, s, gg);
      var oZY = _n("view");
      _rz(z, oZY, "class", 1, e, s, gg);
      var c1Y = _v();
      _(oZY, c1Y);
      if (_oz(z, 2, e, s, gg)) {
        c1Y.wxVkey = 1;
        var o2Y = _mz(
          z,
          "button",
          ["bindtap", 3, "class", 1, "openType", 2, "plain", 3],
          [],
          e,
          s,
          gg
        );
        var l3Y = _n("view");
        _rz(z, l3Y, "class", 7, e, s, gg);
        _(o2Y, l3Y);
        var a4Y = _n("view");
        _rz(z, a4Y, "class", 8, e, s, gg);
        var t5Y = _oz(z, 9, e, s, gg);
        _(a4Y, t5Y);
        _(o2Y, a4Y);
        _(c1Y, o2Y);
      } else {
        c1Y.wxVkey = 2;
        var e6Y = _mz(z, "view", ["bindtap", 10, "class", 1], [], e, s, gg);
        var b7Y = _n("view");
        _rz(z, b7Y, "class", 12, e, s, gg);
        _(e6Y, b7Y);
        var o8Y = _n("view");
        _rz(z, o8Y, "class", 13, e, s, gg);
        var x9Y = _oz(z, 14, e, s, gg);
        _(o8Y, x9Y);
        _(e6Y, o8Y);
        _(c1Y, e6Y);
      }
      c1Y.wxXCkey = 1;
      _(hYY, oZY);
      var o0Y = _n("view");
      _rz(z, o0Y, "class", 15, e, s, gg);
      var fAZ = _mz(z, "view", ["bindtap", 16, "class", 1], [], e, s, gg);
      var cBZ = _v();
      _(fAZ, cBZ);
      if (_oz(z, 18, e, s, gg)) {
        cBZ.wxVkey = 1;
        var hCZ = _n("view");
        _rz(z, hCZ, "class", 19, e, s, gg);
        var oDZ = _n("label");
        _rz(z, oDZ, "class", 20, e, s, gg);
        var cEZ = _oz(z, 21, e, s, gg);
        _(oDZ, cEZ);
        _(hCZ, oDZ);
        var oFZ = _n("label");
        _rz(z, oFZ, "class", 22, e, s, gg);
        var lGZ = _oz(z, 23, e, s, gg);
        _(oFZ, lGZ);
        _(hCZ, oFZ);
        var aHZ = _n("label");
        _rz(z, aHZ, "class", 24, e, s, gg);
        var tIZ = _oz(z, 25, e, s, gg);
        _(aHZ, tIZ);
        _(hCZ, aHZ);
        _(cBZ, hCZ);
      } else {
        cBZ.wxVkey = 2;
        var eJZ = _n("view");
        _rz(z, eJZ, "class", 26, e, s, gg);
        var bKZ = _oz(z, 27, e, s, gg);
        _(eJZ, bKZ);
        _(cBZ, eJZ);
      }
      cBZ.wxXCkey = 1;
      _(o0Y, fAZ);
      _(hYY, o0Y);
      _(r, hYY);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_12();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml"
  ] = [
    $gwx21_XC_12,
    "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml"
  ] = $gwx21_XC_12(
    "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "basket-bar-container.",
      [1],
      "data-v-4c16856f{-webkit-align-items:center;align-items:center;background:#fff;border-top:.013333333333333334rem solid #e9ebf0;bottom:0;display:-webkit-flex;display:flex;height:1.3866666666666667rem;-webkit-justify-content:space-between;justify-content:space-between;left:0;padding:0 .32rem env(safe-area-inset-bottom) .13333333333333333rem;position:fixed;width:calc(100% - .4533333333333333rem);z-index:99}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content.",
      [1],
      "data-v-4c16856f{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:0 0 auto;flex:0 0 auto;height:100%;-webkit-justify-content:flex-start;justify-content:flex-start}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box.",
      [1],
      "data-v-4c16856f{-webkit-align-items:center;align-items:center;background-color:#fff;border:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:.26666666666666666rem;height:100%;-webkit-justify-content:center;justify-content:center;line-height:.26666666666666666rem;padding:0;width:1.1733333333333333rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box.",
      [1],
      "btn-box.",
      [1],
      "data-v-4c16856f:after{border:none}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon.",
      [1],
      "data-v-4c16856f{-webkit-align-items:center;align-items:center;background-size:contain;color:#54576a;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:.5866666666666667rem;margin-bottom:.10666666666666667rem;position:relative;width:.5866666666666667rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-adds.",
      [1],
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/5edfe71650f4e263915e842ce8863584.png)}\n.",
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
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/ea8836d7294c2b212c6c59dfba6130c8.png);transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-subscribe.",
      [1],
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/8d10191a4cd476a780256ee411766e5a.png)}\n.",
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
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/4d50e22b5df47370480bb4856ce6db8b.png);transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-shares.",
      [1],
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/bfb63b72f85f185f221f831faa1e5986.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "left-content .",
      [1],
      "btn-box .",
      [1],
      "icon-comment.",
      [1],
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/a43c6089a7d6e21f2fd513d6fd715fde.png)}\n.",
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
      "data-v-4c16856f{background-image:url(https://st.gtimg.com/design/1508dd3173baedc04a32070583ecec7b.png)}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content.",
      [1],
      "data-v-4c16856f{margin-left:.21333333333333335rem;max-width:9.333333333333334rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box.",
      [1],
      "data-v-4c16856f,.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content.",
      [1],
      "data-v-4c16856f{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-justify-content:flex-start;justify-content:flex-start}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box.",
      [1],
      "data-v-4c16856f{background:#f5f6fa;border-radius:.10666666666666667rem;height:.96rem;margin:0 auto;width:5.573333333333333rem}\n.",
      [1],
      "basket-bar-container .",
      [1],
      "right-content .",
      [1],
      "comment-box .",
      [1],
      "comment-text.",
      [1],
      "data-v-4c16856f{color:#98a0b3;font-size:.37333333333333335rem;font-weight:400;line-height:.4266666666666667rem;margin-left:.29333333333333333rem}\n.",
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
      "data-v-4c16856f{color:var(--color-midgray-1)}\n",
    ],
    undefined,
    {
      path: "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxss",
    }
  );
}
