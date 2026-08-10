$gwx6_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_13 || [];
    function gz$gwx6_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-7b293731"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div cancellation-wrapper wrapper data-v-7b293731"]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "7b293731-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "7b293731-1"]);
        Z(z[6]);
        Z([3, "_div account-rights data-v-7b293731"]);
        Z([a, [[7], [3, "c"]]]);
        Z([3, "item"]);
        Z([[7], [3, "d"]]);
        Z([3, "b"]);
        Z([3, "_div tips data-v-7b293731"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "a"]]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z([3, "agree-btn data-v-7b293731"]);
        Z([3, "primary"]);
        Z([3, "继续注销"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_13 = true;
    var x = ["./pages/account/cancellation/detail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_13_1();
      var hYR = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, hYR);
      var oZR = _n("view");
      _rz(z, oZR, "class", 2, e, s, gg);
      var o2R = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oZR, o2R);
      var c1R = _v();
      _(oZR, c1R);
      if (_oz(z, 6, e, s, gg)) {
        c1R.wxVkey = 1;
        var l3R = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(c1R, l3R);
      }
      var a4R = _n("view");
      _rz(z, a4R, "class", 11, e, s, gg);
      var e6R = _oz(z, 12, e, s, gg);
      _(a4R, e6R);
      var b7R = _v();
      _(a4R, b7R);
      var o8R = function (o0R, x9R, fAS, gg) {
        var hCS = _n("view");
        _rz(z, hCS, "class", 16, o0R, x9R, gg);
        var oDS = _oz(z, 17, o0R, x9R, gg);
        _(hCS, oDS);
        _(fAS, hCS);
        return fAS;
      };
      b7R.wxXCkey = 2;
      _2z(z, 14, o8R, e, s, gg, b7R, "item", "index", "b");
      var t5R = _v();
      _(a4R, t5R);
      if (_oz(z, 18, e, s, gg)) {
        t5R.wxVkey = 1;
        var cES = _mz(
          z,
          "button",
          ["bindtap", 19, "class", 1, "type", 2],
          [],
          e,
          s,
          gg
        );
        var oFS = _oz(z, 22, e, s, gg);
        _(cES, oFS);
        _(t5R, cES);
      }
      t5R.wxXCkey = 1;
      _(oZR, a4R);
      c1R.wxXCkey = 1;
      c1R.wxXCkey = 3;
      _(r, oZR);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/cancellation/detail.wxml"] = [
    $gwx6_XC_13,
    "./pages/account/cancellation/detail.wxml",
  ];
else
  __wxAppCode__["pages/account/cancellation/detail.wxml"] = $gwx6_XC_13(
    "./pages/account/cancellation/detail.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/account/cancellation/detail.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "account-rights.",
      [1],
      "data-v-7b293731{color:#262e40;font-size:.4266666666666667rem;line-height:.6933333333333334rem}\n.",
      [1],
      "account-rights .",
      [1],
      "tips.",
      [1],
      "data-v-7b293731{color:#7a8499;font-size:.37333333333333335rem;line-height:.5866666666666667rem;margin-top:.13333333333333333rem}\n.",
      [1],
      "account-rights .",
      [1],
      "agree-btn.",
      [1],
      "data-v-7b293731{background:#e63535;border-radius:.10666666666666667rem;bottom:calc(.5333333333333333rem + constant(safe-area-inset-bottom));bottom:calc(.5333333333333333rem + env(safe-area-inset-bottom));color:#fff;font-size:.4533333333333333rem;font-weight:600;height:1.1733333333333333rem;left:50%;line-height:1.1733333333333333rem;position:fixed;text-align:center;-webkit-transform:translate(-50%);transform:translate(-50%);width:9.066666666666666rem}\n.",
      [1],
      "cancellation-wrapper.",
      [1],
      "wrapper.",
      [1],
      "data-v-7b293731{background-color:#fff;padding:.4rem}\n.",
      [1],
      "cancellation-wrapper.",
      [1],
      "wrapper .",
      [1],
      "title.",
      [1],
      "data-v-7b293731{color:#ff891e;font-size:.48rem;font-weight:600;line-height:.6666666666666666rem;margin-bottom:.26666666666666666rem}\n.",
      [1],
      "cancellation-wrapper.",
      [1],
      "wrapper .",
      [1],
      "sub-title.",
      [1],
      "data-v-7b293731{color:#262e40;font-size:.4266666666666667rem;font-weight:600;line-height:.64rem;margin-bottom:.10666666666666667rem;margin-top:.5333333333333333rem;vertical-align:middle}\n.",
      [1],
      "cancellation-wrapper.",
      [1],
      "wrapper .",
      [1],
      "desc.",
      [1],
      "data-v-7b293731{color:#7a8499;font-size:.37333333333333335rem;line-height:.5866666666666667rem}\n",
    ],
    undefined,
    { path: "./pages/account/cancellation/detail.wxss" }
  );
}
