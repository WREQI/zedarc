$gwx47_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_13 || [];
    function gz$gwx47_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-fdf16d42"]], [1, "footer-bar"]],
            [[7], [3, "k"]],
          ],
        ]);
        Z([
          [2, "!"],
          [[7], [3, "j"]],
        ]);
        Z([3, "_div footer-bar__main data-v-fdf16d42"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([3, "footer-bar__ask r data-v-fdf16d42"]);
        Z([3, "fdf16d42-0"]);
        Z([[7], [3, "f"]]);
        Z([3, "aiBarRef"]);
        Z([[7], [3, "i"]]);
        Z([3, "footer-bar__share data-v-fdf16d42"]);
        Z([[7], [3, "h"]]);
        Z([3, "true"]);
        Z([3, "分享"]);
        Z([3, "_img footer-bar__share-icon data-v-fdf16d42"]);
        Z([[7], [3, "g"]]);
        Z([3, "_div footer-bar__share-text data-v-fdf16d42"]);
        Z([3, "分享"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_13 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_13_1();
      var l7FB = _mz(z, "view", ["class", 0, "hidden", 1], [], e, s, gg);
      var a8FB = _n("view");
      _rz(z, a8FB, "class", 2, e, s, gg);
      var t9FB = _v();
      _(a8FB, t9FB);
      if (_oz(z, 3, e, s, gg)) {
        t9FB.wxVkey = 1;
        var e0FB = _mz(
          z,
          "ai-bar",
          [
            "bind:__l",
            4,
            "bindonClickAiDialog",
            1,
            "bindonHideAiEntry",
            2,
            "bindonShowAiEntry",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
            "uR",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        _(t9FB, e0FB);
      }
      var bAGB = _mz(
        z,
        "button",
        ["bindtap", 12, "class", 1, "openType", 2, "plain", 3],
        [],
        e,
        s,
        gg
      );
      var oBGB = _mz(
        z,
        "image",
        ["alt", 16, "class", 1, "src", 2],
        [],
        e,
        s,
        gg
      );
      _(bAGB, oBGB);
      var xCGB = _n("view");
      _rz(z, xCGB, "class", 19, e, s, gg);
      var oDGB = _oz(z, 20, e, s, gg);
      _(xCGB, oDGB);
      _(bAGB, xCGB);
      _(a8FB, bAGB);
      t9FB.wxXCkey = 1;
      t9FB.wxXCkey = 3;
      _(l7FB, a8FB);
      _(r, l7FB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml"
  ] = [
    $gwx47_XC_13,
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml"
  ] = $gwx47_XC_13(
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "footer-bar.",
      [1],
      "data-v-fdf16d42{width:100%}\n.",
      [1],
      "footer-bar--fixed.",
      [1],
      "data-v-fdf16d42{bottom:0;left:0;position:fixed;z-index:10}\n.",
      [1],
      "footer-bar__main.",
      [1],
      "data-v-fdf16d42{-webkit-align-items:center;align-items:center;background-color:var(--fill-content-layer);box-sizing:border-box;display:-webkit-flex;display:flex;padding:.2rem .4rem calc(.2rem + env(safe-area-inset-bottom))}\n.",
      [1],
      "footer-bar__ask.",
      [1],
      "data-v-fdf16d42{box-sizing:border-box;-webkit-flex:1 1 0;flex:1 1 0;min-width:0;width:0}\n.",
      [1],
      "footer-bar__share.",
      [1],
      "data-v-fdf16d42{-webkit-align-items:center;align-items:center;background:transparent;border:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;font-size:0;height:auto;-webkit-justify-content:center;justify-content:center;line-height:normal;margin-left:.5333333333333333rem;min-height:1.1733333333333333rem;padding:0;width:.5866666666666667rem}\n.",
      [1],
      "footer-bar__share.",
      [1],
      "data-v-fdf16d42:after{border:0}\n.",
      [1],
      "footer-bar__share-icon.",
      [1],
      "data-v-fdf16d42{display:block;height:.4533333333333333rem;object-fit:cover;width:.4533333333333333rem}\n.",
      [1],
      "footer-bar__share-text.",
      [1],
      "data-v-fdf16d42{color:var(--color-heavygray);font-family:PingFang HK,sans-serif;font-size:.29333333333333333rem;font-weight:400;height:.4266666666666667rem;line-height:.4266666666666667rem;margin-top:.10666666666666667rem;text-align:center;white-space:nowrap}\n.",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask .",
      [1],
      "ai-search-bar,.",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask.",
      [1],
      "ai-search-bar{background-color:var(--color-card);box-sizing:border-box;width:100%}\n[data-st-theme\x3dblack] .",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask .",
      [1],
      "ai-search-bar,[data-st-theme\x3dblack] .",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask.",
      [1],
      "ai-search-bar,[data-st-theme\x3ddark] .",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask .",
      [1],
      "ai-search-bar,[data-st-theme\x3ddark] .",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask.",
      [1],
      "ai-search-bar,wx-html.",
      [1],
      "black .",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask .",
      [1],
      "ai-search-bar,wx-html.",
      [1],
      "black .",
      [1],
      "footer-bar .",
      [1],
      "footer-bar__ask.",
      [1],
      "ai-search-bar{background-color:#000}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxss:1:1512)",
    {
      path: "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxss",
    }
  );
}
