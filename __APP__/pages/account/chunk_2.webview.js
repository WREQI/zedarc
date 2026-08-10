$gwx6_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_9 || [];
    function gz$gwx6_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-5dd8e442"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div setting-container data-v-5dd8e442"]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "5dd8e442-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "5dd8e442-1"]);
        Z(z[6]);
        Z([3, "_div set-item data-v-5dd8e442"]);
        Z([3, "_div text data-v-5dd8e442"]);
        Z([3, "公众号个股热门问题推荐"]);
        Z([[7], [3, "d"]]);
        Z([3, "_div switch-box data-v-5dd8e442"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-5dd8e442"]],
              [1, "switch"],
            ],
            [[7], [3, "c"]],
          ],
        ]);
        Z([3, "_div switch-block data-v-5dd8e442"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_9 = true;
    var x = ["./pages/account/aiSetting.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_9_1();
      var hWM = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, hWM);
      var oXM = _n("view");
      _rz(z, oXM, "class", 2, e, s, gg);
      var oZM = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oXM, oZM);
      var cYM = _v();
      _(oXM, cYM);
      if (_oz(z, 6, e, s, gg)) {
        cYM.wxVkey = 1;
        var l1M = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(cYM, l1M);
      }
      var a2M = _n("view");
      _rz(z, a2M, "class", 11, e, s, gg);
      var t3M = _n("view");
      _rz(z, t3M, "class", 12, e, s, gg);
      var e4M = _oz(z, 13, e, s, gg);
      _(t3M, e4M);
      _(a2M, t3M);
      var b5M = _mz(z, "view", ["bindtap", 14, "class", 1], [], e, s, gg);
      var o6M = _n("view");
      _rz(z, o6M, "class", 16, e, s, gg);
      var x7M = _n("view");
      _rz(z, x7M, "class", 17, e, s, gg);
      _(o6M, x7M);
      _(b5M, o6M);
      _(a2M, b5M);
      _(oXM, a2M);
      cYM.wxXCkey = 1;
      cYM.wxXCkey = 3;
      _(r, oXM);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/aiSetting.wxml"] = [
    $gwx6_XC_9,
    "./pages/account/aiSetting.wxml",
  ];
else
  __wxAppCode__["pages/account/aiSetting.wxml"] = $gwx6_XC_9(
    "./pages/account/aiSetting.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/account/aiSetting.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "setting-container.",
      [1],
      "data-v-5dd8e442{background-color:#f5f6fa;height:100%}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item.",
      [1],
      "data-v-5dd8e442{-webkit-align-items:center;align-items:center;background-color:#fff;border-bottom:.013333333333333334rem solid #edeff3;border-top:.013333333333333334rem solid #edeff3;color:#262e40;display:-webkit-flex;display:flex;font-size:.4533333333333333rem;height:.9866666666666667rem;line-height:.9866666666666667rem;padding:.26666666666666666rem .4rem}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "icon-arrow.",
      [1],
      "data-v-5dd8e442{color:#98a0b3;font-size:.48rem;margin-right:.4rem}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "text.",
      [1],
      "data-v-5dd8e442{-webkit-flex:1;flex:1}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "switch-box.",
      [1],
      "data-v-5dd8e442{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:.9866666666666667rem;-webkit-justify-content:center;justify-content:center}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "switch.",
      [1],
      "data-v-5dd8e442{border:.013333333333333334rem solid rgba(0,0,0,.1);border-radius:.7733333333333333rem;box-sizing:border-box;height:.8266666666666667rem;position:relative;width:1.3333333333333333rem}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "switch .",
      [1],
      "switch-block.",
      [1],
      "data-v-5dd8e442{background-color:#fff;border-radius:100%;box-shadow:0 0 .013333333333333334rem rgba(0,0,0,.05),0 0 .02666666666666667rem rgba(0,0,0,.1),0 0 .04rem rgba(0,0,0,.05);height:.7733333333333333rem;left:0;position:absolute;width:.7733333333333333rem}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "switch.",
      [1],
      "on.",
      [1],
      "data-v-5dd8e442{background-color:#e63535;border:none}\n.",
      [1],
      "setting-container .",
      [1],
      "set-item .",
      [1],
      "switch.",
      [1],
      "on .",
      [1],
      "switch-block.",
      [1],
      "data-v-5dd8e442{left:unset;right:.02666666666666667rem;top:.02666666666666667rem}\n.",
      [1],
      "setting-container .",
      [1],
      "protocol-text.",
      [1],
      "data-v-5dd8e442{color:#7a8499;font-size:.3466666666666667rem;margin:.32rem 0;padding-left:.4rem}\n.",
      [1],
      "setting-container .",
      [1],
      "link.",
      [1],
      "data-v-5dd8e442{color:#262e40}\n",
    ],
    undefined,
    { path: "./pages/account/aiSetting.wxss" }
  );
}
