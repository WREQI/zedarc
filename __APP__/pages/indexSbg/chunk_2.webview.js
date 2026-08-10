$gwx50_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx50_XC_3 || [];
    function gz$gwx50_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx50_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx50_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx50_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div privacy-container data-v-136ab40c"]);
        Z([[7], [3, "j"]]);
        Z([3, "__l"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "g"]]);
        Z([3, "data-v-136ab40c"]);
        Z([3, "136ab40c-0"]);
        Z(z[1]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[7], [3, "a"]]);
        Z(z[2]);
        Z([3, "r data-v-136ab40c"]);
        Z([3, "136ab40c-1,136ab40c-0"]);
        Z([[7], [3, "c"]]);
        Z([3, "agreementCheckList"]);
        Z([[7], [3, "d"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-136ab40c"]],
              [1, "text-box"],
            ],
            [1, "choose"],
          ],
        ]);
        Z([3, "_span text-context data-v-136ab40c"]);
        Z([a, [[7], [3, "e"]]]);
        Z([[7], [3, "f"]]);
        Z([3, "_span info-icon data-v-136ab40c"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx50_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx50_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx50_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx50_XC_3 = true;
    var x = [
      "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx50_XC_3_1();
      var c8 = _n("view");
      _rz(z, c8, "class", 0, e, s, gg);
      var h9 = _v();
      _(c8, h9);
      if (_oz(z, 1, e, s, gg)) {
        h9.wxVkey = 1;
        var o0 = _mz(
          z,
          "layer-modal",
          [
            "bind:__l",
            2,
            "bindcancel",
            1,
            "bindclose",
            2,
            "bindconfirm",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
            "uS",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        var cAB = _v();
        _(o0, cAB);
        if (_oz(z, 10, e, s, gg)) {
          cAB.wxVkey = 1;
          var lCB = _mz(
            z,
            "privacy-agreement-check-list",
            ["bind:__l", 11, "class", 1, "uI", 2, "uP", 3, "uR", 4],
            [],
            e,
            s,
            gg
          );
          _(cAB, lCB);
        }
        var oBB = _v();
        _(o0, oBB);
        if (_oz(z, 16, e, s, gg)) {
          oBB.wxVkey = 1;
          var aDB = _n("view");
          _rz(z, aDB, "class", 17, e, s, gg);
          var tEB = _n("label");
          _rz(z, tEB, "class", 18, e, s, gg);
          var eFB = _oz(z, 19, e, s, gg);
          _(tEB, eFB);
          _(aDB, tEB);
          var bGB = _mz(z, "label", ["bindtap", 20, "class", 1], [], e, s, gg);
          _(aDB, bGB);
          _(oBB, aDB);
        }
        cAB.wxXCkey = 1;
        cAB.wxXCkey = 3;
        oBB.wxXCkey = 1;
        _(h9, o0);
      }
      h9.wxXCkey = 1;
      h9.wxXCkey = 3;
      _(r, c8);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx50_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx50_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxml"
  ] = [
    $gwx50_XC_3,
    "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxml",
  ];
else
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxml"
  ] = $gwx50_XC_3(
    "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "text-box.",
      [1],
      "data-v-136ab40c{color:var(--color-heavygray);font-size:.4266666666666667rem;line-height:.8533333333333334rem;max-height:11.333333333333334rem;overflow-y:scroll;padding:0 .4rem .4266666666666667rem;text-align:justify}\n.",
      [1],
      "text-box.",
      [1],
      "choose.",
      [1],
      "data-v-136ab40c{-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding-bottom:.7466666666666667rem}\n.",
      [1],
      "text-box .",
      [1],
      "text-context.",
      [1],
      "data-v-136ab40c{color:var(--color-midgray);font-size:.4266666666666667rem;line-height:.64rem}\n.",
      [1],
      "text-box .",
      [1],
      "info-icon.",
      [1],
      "data-v-136ab40c{background-image:url(https://st.gtimg.com/design/adc99bb79f84ed2c290684b75fbc191c.png);background-position:50%;background-repeat:no-repeat;background-size:100% 100%;height:.37333333333333335rem;margin-left:.10666666666666667rem;width:.37333333333333335rem}\n.",
      [1],
      "text-box .",
      [1],
      "bold.",
      [1],
      "data-v-136ab40c{color:var(--color-link);font-weight:600}\n.",
      [1],
      "text-box .",
      [1],
      "tip-box.",
      [1],
      "data-v-136ab40c{margin-top:.32rem}\n.",
      [1],
      "text-box .",
      [1],
      "tip-text.",
      [1],
      "data-v-136ab40c{color:var(--color-lightgray);font-size:.37333333333333335rem;line-height:.6133333333333333rem}\n",
    ],
    undefined,
    {
      path: "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.wxss",
    }
  );
}
