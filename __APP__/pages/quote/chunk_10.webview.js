$gwx4_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_2 || [];
    function gz$gwx4_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div inverse-page-container data-v-e660b986"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e660b986"]);
        Z([3, "e660b986-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "e660b986-1"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
        Z([3, "暂无机构评级数据"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_2 = true;
    var x = ["./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_2_1();
      var oHCB = _n("view");
      _rz(z, oHCB, "class", 0, e, s, gg);
      var fICB = _v();
      _(oHCB, fICB);
      if (_oz(z, 1, e, s, gg)) {
        fICB.wxVkey = 1;
        var cJCB = _mz(
          z,
          "inverse-rate",
          ["bind:__l", 2, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(fICB, cJCB);
      } else {
        fICB.wxVkey = 2;
        var hKCB = _mz(
          z,
          "no-data",
          ["bind:__l", 6, "class", 1, "uI", 2, "uS", 3],
          [],
          e,
          s,
          gg
        );
        var oLCB = _v();
        _(hKCB, oLCB);
        if (_oz(z, 10, e, s, gg)) {
          oLCB.wxVkey = 1;
          var cMCB = _n("slot");
          _(oLCB, cMCB);
        } else {
          oLCB.wxVkey = 2;
          var oNCB = _oz(z, 11, e, s, gg);
          _(oLCB, oNCB);
        }
        oLCB.wxXCkey = 1;
        _(fICB, hKCB);
      }
      fICB.wxXCkey = 1;
      fICB.wxXCkey = 3;
      fICB.wxXCkey = 3;
      _(r, oHCB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml"] = [
    $gwx4_XC_2,
    "./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml",
  ];
else
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml"] =
    $gwx4_XC_2("./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml");

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxss"] =
    setCssToHead(
      [
        ".",
        [1],
        "inverse-page-container.",
        [1],
        "data-v-e660b986{background:var(--fill-2);box-sizing:border-box;height:100%;overflow-y:scroll;padding-bottom:1.6rem;width:100%}\n.",
        [1],
        "body.",
        [1],
        "data-v-e660b986,wx-dd.",
        [1],
        "data-v-e660b986,wx-dl.",
        [1],
        "data-v-e660b986,wx-dt.",
        [1],
        "data-v-e660b986,wx-form.",
        [1],
        "data-v-e660b986,wx-h1.",
        [1],
        "data-v-e660b986,wx-h2.",
        [1],
        "data-v-e660b986,wx-input.",
        [1],
        "data-v-e660b986,wx-li.",
        [1],
        "data-v-e660b986,wx-ol.",
        [1],
        "data-v-e660b986,wx-p.",
        [1],
        "data-v-e660b986,wx-select.",
        [1],
        "data-v-e660b986,wx-ul.",
        [1],
        "data-v-e660b986{margin:0;padding:0}\n",
      ],
      "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxss:1:173)",
      { path: "./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxss" }
    );
}
