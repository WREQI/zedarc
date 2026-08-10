$gwx50_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx50_XC_4 || [];
    function gz$gwx50_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx50_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx50_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx50_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div privacy-container data-v-85f030d2"]);
        Z([[7], [3, "j"]]);
        Z([3, "__l"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "g"]]);
        Z([3, "data-v-85f030d2"]);
        Z([3, "85f030d2-0"]);
        Z(z[1]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[7], [3, "a"]]);
        Z(z[2]);
        Z([3, "r data-v-85f030d2"]);
        Z([3, "85f030d2-1,85f030d2-0"]);
        Z([[7], [3, "c"]]);
        Z([3, "agreementCheckList"]);
        Z([3, "_div privacy-update-announcement data-v-85f030d2"]);
        Z([3, "_div privacy-update-announcement__desc data-v-85f030d2"]);
        Z([a, [[7], [3, "d"]]]);
        Z([3, "_div privacy-update-announcement__protocols data-v-85f030d2"]);
        Z([3, "相关协议："]);
        Z([3, "protocol"]);
        Z([[7], [3, "e"]]);
        Z([3, "b"]);
        Z([[6], [[7], [3, "protocol"]], [3, "c"]]);
        Z([3, "_span privacy-update-announcement__link data-v-85f030d2"]);
        Z([a, [3, "《"], [[6], [[7], [3, "protocol"]], [3, "a"]], [3, "》"]]);
        Z([3, "_div privacy-update-announcement__date data-v-85f030d2"]);
        Z([a, [3, "公告公示日期："], [[7], [3, "f"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx50_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx50_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx50_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx50_XC_4 = true;
    var x = [
      "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx50_XC_4_1();
      var xIB = _n("view");
      _rz(z, xIB, "class", 0, e, s, gg);
      var oJB = _v();
      _(xIB, oJB);
      if (_oz(z, 1, e, s, gg)) {
        oJB.wxVkey = 1;
        var fKB = _mz(
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
        var cLB = _v();
        _(fKB, cLB);
        if (_oz(z, 10, e, s, gg)) {
          cLB.wxVkey = 1;
          var hMB = _mz(
            z,
            "privacy-agreement-check-list",
            ["bind:__l", 11, "class", 1, "uI", 2, "uP", 3, "uR", 4],
            [],
            e,
            s,
            gg
          );
          _(cLB, hMB);
        } else {
          cLB.wxVkey = 2;
          var oNB = _n("view");
          _rz(z, oNB, "class", 16, e, s, gg);
          var cOB = _n("view");
          _rz(z, cOB, "class", 17, e, s, gg);
          var oPB = _oz(z, 18, e, s, gg);
          _(cOB, oPB);
          _(oNB, cOB);
          var lQB = _n("view");
          _rz(z, lQB, "class", 19, e, s, gg);
          var aRB = _oz(z, 20, e, s, gg);
          _(lQB, aRB);
          var tSB = _v();
          _(lQB, tSB);
          var eTB = function (oVB, bUB, xWB, gg) {
            var fYB = _mz(
              z,
              "label",
              ["catchtap", 24, "class", 1],
              [],
              oVB,
              bUB,
              gg
            );
            var cZB = _oz(z, 26, oVB, bUB, gg);
            _(fYB, cZB);
            _(xWB, fYB);
            return xWB;
          };
          tSB.wxXCkey = 2;
          _2z(z, 22, eTB, e, s, gg, tSB, "protocol", "index", "b");
          _(oNB, lQB);
          var h1B = _n("view");
          _rz(z, h1B, "class", 27, e, s, gg);
          var o2B = _oz(z, 28, e, s, gg);
          _(h1B, o2B);
          _(oNB, h1B);
          _(cLB, oNB);
        }
        cLB.wxXCkey = 1;
        cLB.wxXCkey = 3;
        _(oJB, fKB);
      }
      oJB.wxXCkey = 1;
      oJB.wxXCkey = 3;
      _(r, xIB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx50_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx50_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxml"
  ] = [
    $gwx50_XC_4,
    "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxml",
  ];
else
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxml"
  ] = $gwx50_XC_4(
    "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "privacy-container.",
      [1],
      "data-v-85f030d2{color:var(--color-heavygray)}\n.",
      [1],
      "privacy-update-announcement.",
      [1],
      "data-v-85f030d2{font-size:.4266666666666667rem;line-height:.64rem;max-height:calc(100vh - 4.266666666666667rem);overflow-y:auto;padding:0 .32rem;text-align:justify}\n.",
      [1],
      "privacy-update-announcement__desc.",
      [1],
      "data-v-85f030d2{color:#475166}\n.",
      [1],
      "privacy-update-announcement__protocols.",
      [1],
      "data-v-85f030d2{color:var(--color-heavygray);margin-top:.4266666666666667rem}\n.",
      [1],
      "privacy-update-announcement__link.",
      [1],
      "data-v-85f030d2{color:var(--color-link);font-weight:700}\n.",
      [1],
      "privacy-update-announcement__date.",
      [1],
      "data-v-85f030d2{color:#98a0b3;font-size:.37333333333333335rem;line-height:.56rem;margin-top:.5333333333333333rem;text-align:right}\n",
    ],
    undefined,
    {
      path: "./pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.wxss",
    }
  );
}
