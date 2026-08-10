$gwx31_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx31_XC_1 || [];
    function gz$gwx31_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx31_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx31_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx31_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "modal-container data-v-597c09c6"]);
        Z([3, "modal-content data-v-597c09c6"]);
        Z([3, "title"]);
        Z([3, "content"]);
        Z([3, "btn-group"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx31_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx31_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx31_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx31_XC_1 = true;
    var x = ["./pages/apply/components/CustomModal.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx31_XC_1_1();
      var tKC = _mz(z, "view", ["catchtap", 0, "class", 1], [], e, s, gg);
      var eLC = _n("view");
      _rz(z, eLC, "class", 2, e, s, gg);
      var bMC = _n("slot");
      _rz(z, bMC, "name", 3, e, s, gg);
      _(eLC, bMC);
      var oNC = _n("slot");
      _rz(z, oNC, "name", 4, e, s, gg);
      _(eLC, oNC);
      var xOC = _n("slot");
      _rz(z, xOC, "name", 5, e, s, gg);
      _(eLC, xOC);
      _(tKC, eLC);
      _(r, tKC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx31_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx31_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/apply/components/CustomModal.wxml"] = [
    $gwx31_XC_1,
    "./pages/apply/components/CustomModal.wxml",
  ];
else
  __wxAppCode__["pages/apply/components/CustomModal.wxml"] = $gwx31_XC_1(
    "./pages/apply/components/CustomModal.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/apply/components/CustomModal.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "trade-page-container.",
      [1],
      "data-v-597c09c6{--color-blue:#3077ec;--color-red:#e63535;--color-primary:var(--color-blue);--text-color-0:#000;--text-color-1:#262e40;--text-color-2:#475166;--text-color-3:#606980;--text-color-4:#7a8499;--text-color-5:#98a0b3;--text-color-6:#a7b0c4;--text-color-7:#12161f;--fill-1:#f5f6fa;--fill-2:#fff;--fill-3:#f5f6f9;--fill-mask:rgba(0,0,0,.3);--border-color-1:#e9ebf0;--border-color-2:#e5e5e5;--arrow-color:#525866}\n.",
      [1],
      "trade-page-container.",
      [1],
      "skin-black.",
      [1],
      "data-v-597c09c6{--text-color-0:#fff;--text-color-1:#f0f1f5;--text-color-2:#a7b0c4;--text-color-3:#a7b0c4;--text-color-4:#a7b0c4;--text-color-5:#69738c;--text-color-6:#a7b0c4;--text-color-7:#f0f1f5;--fill-1:#12161f;--fill-2:#12161f;--fill-3:#000;--border-color-1:#191e27;--border-color-2:#262e40}\n.",
      [1],
      "border-left-1.",
      [1],
      "data-v-597c09c6,.",
      [1],
      "border-top-1.",
      [1],
      "data-v-597c09c6{position:relative}\n.",
      [1],
      "border-left-1.",
      [1],
      "data-v-597c09c6:after,.",
      [1],
      "border-left-1.",
      [1],
      "data-v-597c09c6:before,.",
      [1],
      "border-top-1.",
      [1],
      "data-v-597c09c6:after,.",
      [1],
      "border-top-1.",
      [1],
      "data-v-597c09c6:before{content:\x22\x22;display:block;position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0}\n.",
      [1],
      "border-left-1.",
      [1],
      "data-v-597c09c6:before,.",
      [1],
      "border-top-1.",
      [1],
      "data-v-597c09c6:before{left:0;top:0}\n.",
      [1],
      "border-top-1.",
      [1],
      "data-v-597c09c6:before{border-top:.013333333333333334rem solid var(--border-color-2);-webkit-transform-origin:0 top;transform-origin:0 top;width:100%}\n.",
      [1],
      "border-left-1.",
      [1],
      "data-v-597c09c6:before{border-left:.013333333333333334rem solid var(--border-color-2);height:100%;-webkit-transform-origin:left 0;transform-origin:left 0}\n.",
      [1],
      "modal-container.",
      [1],
      "data-v-597c09c6{-webkit-align-items:center;align-items:center;background:var(--fill-mask);display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:100}\n.",
      [1],
      "modal-container .",
      [1],
      "modal-content.",
      [1],
      "data-v-597c09c6{-webkit-align-items:center;align-items:center;-webkit-animation:modal-zoom-597c09c6 .4s both;animation:modal-zoom-597c09c6 .4s both;background:var(--fill-2);border-radius:.10666666666666667rem;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;max-height:80%;width:80%}\n@-webkit-keyframes modal-zoom-597c09c6{0%{-webkit-transform:scale(0);transform:scale(0)}\n50%{-webkit-transform:scale(1.1);transform:scale(1.1)}\nto{-webkit-transform:scale(1);transform:scale(1)}\n}@keyframes modal-zoom-597c09c6{0%{-webkit-transform:scale(0);transform:scale(0)}\n50%{-webkit-transform:scale(1.1);transform:scale(1.1)}\nto{-webkit-transform:scale(1);transform:scale(1)}\n}",
    ],
    undefined,
    { path: "./pages/apply/components/CustomModal.wxss" }
  );
}
