$gwx6_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_1 || [];
    function gz$gwx6_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "container"]);
        Z([3, "__l"]);
        Z([3, "6e9adce0-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "6e9adce0-1"]);
        Z(z[4]);
        Z([3, "main-content-about"]);
        Z([3, "hd-banner-logo flex flex-align-center flex-pack-center"]);
        Z(z[2]);
        Z([3, "6e9adce0-2"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "wrap-logo"]);
        Z([3, "block icon-zxg"]);
        Z([3, "bd-text-intro"]);
        Z([3, "bd-text-h1"]);
        Z([a, [3, "腾讯"], [[7], [3, "c"]], [3, "介绍"]]);
        Z([[7], [3, "d"]]);
        Z([
          3,
          "腾讯倡导的互联网+和连接一切的理念下，由合作证券公司为您提供开户、交易、查询等证券服务。",
        ]);
        Z([[7], [3, "e"]]);
        Z([
          3,
          "腾讯自选股是一款轻便、简洁、专业的股票行情软件，秉承「专业伴你成长」的理念，为用户提供沪深港美全球精准实时行情，7*24小时推送精选全球财经资讯，及伴你成长的温度交流社区。 由合作证券公司提供开户、交易、查询等金融服务，畅享便捷、高效、优质的证券投资服务。支持微信或QQ一键登录，随时随地把握股市机会。",
        ]);
        Z([3, "margin-top:20rpx"]);
        Z([3, "欢迎在应用市场下载腾讯自选股APP体验。"]);
        Z(z[2]);
        Z([3, "6e9adce0-3"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_1 = true;
    var x = ["./pages/account/about.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_1_1();
      var cSE = _n("page-meta");
      _rz(z, cSE, "rootFontSize", 0, e, s, gg);
      _(r, cSE);
      var oTE = _n("view");
      _rz(z, oTE, "class", 1, e, s, gg);
      var aVE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oTE, aVE);
      var lUE = _v();
      _(oTE, lUE);
      if (_oz(z, 4, e, s, gg)) {
        lUE.wxVkey = 1;
        var tWE = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(lUE, tWE);
      }
      var eXE = _n("view");
      _rz(z, eXE, "class", 8, e, s, gg);
      var bYE = _n("view");
      _rz(z, bYE, "class", 9, e, s, gg);
      var oZE = _mz(
        z,
        "debug-function-entry",
        ["bind:__l", 10, "uI", 1, "uS", 2],
        [],
        e,
        s,
        gg
      );
      var x1E = _n("view");
      _rz(z, x1E, "class", 13, e, s, gg);
      var o2E = _n("label");
      _rz(z, o2E, "class", 14, e, s, gg);
      _(x1E, o2E);
      _(oZE, x1E);
      _(bYE, oZE);
      _(eXE, bYE);
      var f3E = _n("view");
      _rz(z, f3E, "class", 15, e, s, gg);
      var o6E = _n("view");
      _rz(z, o6E, "class", 16, e, s, gg);
      var c7E = _oz(z, 17, e, s, gg);
      _(o6E, c7E);
      _(f3E, o6E);
      var c4E = _v();
      _(f3E, c4E);
      if (_oz(z, 18, e, s, gg)) {
        c4E.wxVkey = 1;
        var o8E = _n("view");
        var l9E = _oz(z, 19, e, s, gg);
        _(o8E, l9E);
        _(c4E, o8E);
      }
      var h5E = _v();
      _(f3E, h5E);
      if (_oz(z, 20, e, s, gg)) {
        h5E.wxVkey = 1;
        var a0E = _n("view");
        var tAF = _n("view");
        var eBF = _oz(z, 21, e, s, gg);
        _(tAF, eBF);
        _(a0E, tAF);
        var bCF = _n("view");
        _rz(z, bCF, "style", 22, e, s, gg);
        var oDF = _oz(z, 23, e, s, gg);
        _(bCF, oDF);
        _(a0E, bCF);
        _(h5E, a0E);
      }
      c4E.wxXCkey = 1;
      h5E.wxXCkey = 1;
      _(eXE, f3E);
      var xEF = _mz(
        z,
        "protocol-list",
        ["bind:__l", 24, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(eXE, xEF);
      _(oTE, eXE);
      lUE.wxXCkey = 1;
      lUE.wxXCkey = 3;
      _(r, oTE);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/about.wxml"] = [
    $gwx6_XC_1,
    "./pages/account/about.wxml",
  ];
else
  __wxAppCode__["pages/account/about.wxml"] = $gwx6_XC_1(
    "./pages/account/about.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/account/about.wxss"] = setCssToHead(
    [
      "body{background-color:#efeff4}\nbody .",
      [1],
      "main-content-about{background-color:#fff}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "hd-banner-logo{border-bottom:.013333333333333334rem solid #e5e5e5;height:3.36rem;margin:0 .4rem;position:relative;text-align:center}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "hd-banner-logo:after{bottom:0;left:0;position:absolute;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;z-index:3}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "hd-banner-logo .",
      [1],
      "wrap-logo{height:1.6933333333333334rem;width:1.6933333333333334rem}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "hd-banner-logo .",
      [1],
      "icon-zxg{background:url(https://wzq.gtimg.com/resources/images/zxg_logo.png);background-position:50%;background-repeat:no-repeat;background-size:100% 100%;height:100%;width:100%}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "hd-banner-logo .",
      [1],
      "icon-logo2{color:#007aff;font-size:1.3333333333333333rem}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "bd-text-intro{color:#888;font-size:.37333333333333335rem;line-height:1.3;padding:.7733333333333333rem .4rem .9333333333333333rem;text-align:justify}\nbody .",
      [1],
      "main-content-about .",
      [1],
      "bd-text-intro .",
      [1],
      "bd-text-h1{color:#000;font-size:.4266666666666667rem;font-weight:500;margin-bottom:.24rem}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/account/about.wxss:1:1035)",
    { path: "./pages/account/about.wxss" }
  );
}
