$gwx_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
    function gz$gwx_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
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
              [[5], [[5], [1, "_div"]], [1, "data-v-a5180d9c"]],
              [1, "choose-privacy-container"],
            ],
            [[7], [3, "f"]],
          ],
        ]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([3, "data-v-a5180d9c"]);
        Z([3, "a5180d9c-0"]);
        Z(z[1]);
        Z([[4], [[5], [1, "d"]]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-a5180d9c"]],
              [1, "text-box"],
            ],
            [1, "choose"],
          ],
        ]);
        Z([3, "_span text-context data-v-a5180d9c"]);
        Z([a, [[7], [3, "a"]]]);
        Z([[7], [3, "b"]]);
        Z([3, "_span info-icon data-v-a5180d9c"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
    var x = ["./components/ChoosePrivacyModal.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_1_1();
      var hG = _n("view");
      _rz(z, hG, "class", 0, e, s, gg);
      var oH = _v();
      _(hG, oH);
      if (_oz(z, 1, e, s, gg)) {
        oH.wxVkey = 1;
        var cI = _mz(
          z,
          "layer-modal",
          [
            "bind:__l",
            2,
            "bindcancel",
            1,
            "bindconfirm",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uS",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        var oJ = _n("view");
        _rz(z, oJ, "class", 9, e, s, gg);
        var lK = _n("label");
        _rz(z, lK, "class", 10, e, s, gg);
        var aL = _oz(z, 11, e, s, gg);
        _(lK, aL);
        _(oJ, lK);
        var tM = _mz(z, "label", ["bindtap", 12, "class", 1], [], e, s, gg);
        _(oJ, tM);
        _(cI, oJ);
        _(oH, cI);
      }
      oH.wxXCkey = 1;
      oH.wxXCkey = 3;
      _(r, hG);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/ChoosePrivacyModal.wxml"] = [
    $gwx_XC_1,
    "./components/ChoosePrivacyModal.wxml",
  ];
else
  __wxAppCode__["components/ChoosePrivacyModal.wxml"] = $gwx_XC_1(
    "./components/ChoosePrivacyModal.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["components/ChoosePrivacyModal.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "text-box.",
      [1],
      "data-v-a5180d9c{font-size:.4266666666666667rem;line-height:.8533333333333334rem;max-height:11.333333333333334rem;padding:0 .4rem .4266666666666667rem;text-align:justify}\n.",
      [1],
      "text-box.",
      [1],
      "choose.",
      [1],
      "data-v-a5180d9c{-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding-bottom:.7466666666666667rem}\n.",
      [1],
      "text-box .",
      [1],
      "text-context.",
      [1],
      "data-v-a5180d9c{color:var(--color-midgray);font-size:.4266666666666667rem;line-height:.64rem}\n.",
      [1],
      "text-box .",
      [1],
      "info-icon.",
      [1],
      "data-v-a5180d9c{background-image:url(https://st.gtimg.com/design/adc99bb79f84ed2c290684b75fbc191c.png);background-position:50%;background-repeat:no-repeat;background-size:100% 100%;height:.37333333333333335rem;margin-left:.10666666666666667rem;width:.37333333333333335rem}\n.",
      [1],
      "skin-black .",
      [1],
      "text-box.",
      [1],
      "data-v-a5180d9c{color:#a7b0c4}\n",
    ],
    undefined,
    { path: "./components/ChoosePrivacyModal.wxss" }
  );
}
