$gwx1_XC_28 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_28 || [];
    function gz$gwx1_XC_28_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "f"]]);
        Z([3, "_div information-detail-apply data-v-063f67e2"]);
        Z([[7], [3, "b"]]);
        Z([3, "图标"]);
        Z([3, "_img information-detail-apply__icon data-v-063f67e2"]);
        Z([[7], [3, "c"]]);
        Z([3, "_div information-detail-apply__title data-v-063f67e2"]);
        Z([a, [[7], [3, "d"]]]);
        Z([3, "_div information-detail-apply__action data-v-063f67e2"]);
        Z([3, "_span information-detail-apply__action-text data-v-063f67e2"]);
        Z([a, [[7], [3, "e"]]]);
        Z([3, "箭头图标"]);
        Z([3, "_img information-detail-apply__share-icon data-v-063f67e2"]);
        Z([
          3,
          "https://st.gtimg.com/pcm/mknhhpe4_9176d32983e11899d735f5a602f86bb0.png",
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_28 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_28 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_28_1();
      var tSW = _v();
      _(r, tSW);
      if (_oz(z, 0, e, s, gg)) {
        tSW.wxVkey = 1;
        var eTW = _mz(z, "view", ["bindtap", 1, "class", 1], [], e, s, gg);
        var bUW = _v();
        _(eTW, bUW);
        if (_oz(z, 3, e, s, gg)) {
          bUW.wxVkey = 1;
          var oVW = _mz(
            z,
            "image",
            ["alt", 4, "class", 1, "src", 2],
            [],
            e,
            s,
            gg
          );
          _(bUW, oVW);
        }
        var xWW = _n("view");
        _rz(z, xWW, "class", 7, e, s, gg);
        var oXW = _oz(z, 8, e, s, gg);
        _(xWW, oXW);
        _(eTW, xWW);
        var fYW = _n("view");
        _rz(z, fYW, "class", 9, e, s, gg);
        var cZW = _n("label");
        _rz(z, cZW, "class", 10, e, s, gg);
        var h1W = _oz(z, 11, e, s, gg);
        _(cZW, h1W);
        _(fYW, cZW);
        var o2W = _mz(
          z,
          "image",
          ["alt", 12, "class", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(fYW, o2W);
        _(eTW, fYW);
        bUW.wxXCkey = 1;
        _(tSW, eTW);
      }
      tSW.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_28";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_28();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml"
  ] = [
    $gwx1_XC_28,
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml"
  ] = $gwx1_XC_28(
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "information-detail-apply.",
      [1],
      "data-v-063f67e2{-webkit-align-items:center;align-items:center;background-color:var(--fill-background);border-radius:.21333333333333335rem;cursor:pointer;display:-webkit-flex;display:flex;height:1.1733333333333333rem;margin:.4266666666666667rem .32rem 0;padding:0 .32rem;position:relative}\n.",
      [1],
      "information-detail-apply__icon.",
      [1],
      "data-v-063f67e2{-webkit-flex-shrink:0;flex-shrink:0;height:.48rem;margin-left:.02666666666666667rem;margin-right:.10666666666666667rem;object-fit:cover;width:.48rem}\n.",
      [1],
      "information-detail-apply__title.",
      [1],
      "data-v-063f67e2{color:var(--color-heavygray);-webkit-flex:1;flex:1;font-size:.37333333333333335rem;font-weight:400;line-height:.5333333333333333rem;margin-left:.10666666666666667rem;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}\n.",
      [1],
      "information-detail-apply__action.",
      [1],
      "data-v-063f67e2{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;gap:.05333333333333334rem}\n.",
      [1],
      "information-detail-apply__action-text.",
      [1],
      "data-v-063f67e2{color:var(--color-link2);font-size:.37333333333333335rem;font-weight:500;line-height:.5333333333333333rem;text-align:center;white-space:nowrap}\n.",
      [1],
      "information-detail-apply__share-icon.",
      [1],
      "data-v-063f67e2{height:.32rem;object-fit:cover;width:.32rem}\n",
    ],
    undefined,
    {
      path: "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxss",
    }
  );
}
