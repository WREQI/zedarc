$gwx1_XC_33 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_33 || [];
    function gz$gwx1_XC_33_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1 = [];
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
              [
                [5],
                [[5], [[5], [1, "data-v-d26801e0"]], [1, "navbar-wrap"]],
                [[7], [3, "b"]],
              ],
              [[7], [3, "c"]],
            ],
            [[7], [3, "d"]],
          ],
        ]);
        Z([3, "navbar-list data-v-d26801e0"]);
        Z([3, "nav"]);
        Z([[7], [3, "a"]]);
        Z([3, "d"]);
        Z([[6], [[7], [3, "nav"]], [3, "f"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[6], [[7], [3, "nav"]], [3, "e"]]],
              [1, "navbar-item"],
            ],
            [1, "data-v-d26801e0"],
          ],
        ]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-d26801e0"]], [1, "icon"]],
            [[6], [[7], [3, "nav"]], [3, "a"]],
          ],
        ]);
        Z([[6], [[7], [3, "nav"]], [3, "b"]]);
        Z([3, "name data-v-d26801e0"]);
        Z([a, [[6], [[7], [3, "nav"]], [3, "c"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_1;
    }
    function gz$gwx1_XC_33_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "d"]]);
        Z([
          [4],
          [[5], [[5], [[5], [1, "navbar-wrapper"]], [1, "r"]], [[7], [3, "c"]]],
        ]);
        Z([3, "7f96717d-0"]);
        Z([[7], [3, "e"]]);
        Z([3, "navbar"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_33_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_33 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_33 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml",
      "./pages/asyncCom/components/navBar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_33_1();
      var aX5 = _n("view");
      _rz(z, aX5, "class", 0, e, s, gg);
      var tY5 = _n("view");
      _rz(z, tY5, "class", 1, e, s, gg);
      var eZ5 = _v();
      _(tY5, eZ5);
      var b15 = function (x35, o25, o45, gg) {
        var c65 = _mz(z, "view", ["bindtap", 5, "class", 1], [], x35, o25, gg);
        var h75 = _mz(z, "image", ["class", 7, "src", 1], [], x35, o25, gg);
        _(c65, h75);
        var o85 = _n("view");
        _rz(z, o85, "class", 9, x35, o25, gg);
        var c95 = _oz(z, 10, x35, o25, gg);
        _(o85, c95);
        _(c65, o85);
        _(o45, c65);
        return o45;
      };
      eZ5.wxXCkey = 2;
      _2z(z, 3, b15, e, s, gg, eZ5, "nav", "index", "d");
      _(aX5, tY5);
      _(r, aX5);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_33_2();
      var lA6 = _v();
      _(r, lA6);
      if (_oz(z, 0, e, s, gg)) {
        lA6.wxVkey = 1;
        var aB6 = _mz(
          z,
          "navbar",
          [
            "bind:__l",
            1,
            "bindclickTab",
            1,
            "class",
            2,
            "uI",
            3,
            "uP",
            4,
            "uR",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        _(lA6, aB6);
      }
      lA6.wxXCkey = 1;
      lA6.wxXCkey = 3;
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_33";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_33();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml"] =
    [
      $gwx1_XC_33,
      "./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml",
    ];
else
  __wxAppCode__["pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml"] =
    $gwx1_XC_33("./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxml");
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/navBar/index.wxml"] = [
    $gwx1_XC_33,
    "./pages/asyncCom/components/navBar/index.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/navBar/index.wxml"] = $gwx1_XC_33(
    "./pages/asyncCom/components/navBar/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxss"] =
    setCssToHead(
      [
        ".",
        [1],
        "navbar-wrap.",
        [1],
        "data-v-d26801e0{background:#fff;border-top:.02666666666666667rem solid #e9ebf0;bottom:0;height:1.3066666666666666rem;left:0;padding-bottom:env(safe-area-inset-bottom);pointer-events:auto;position:fixed;right:0;width:100vw;z-index:124}\n.",
        [1],
        "navbar-wrap .",
        [1],
        "navbar-list.",
        [1],
        "data-v-d26801e0{display:-webkit-flex;display:flex;height:100%;margin:0;padding:0;width:100vw}\n.",
        [1],
        "navbar-wrap .",
        [1],
        "navbar-list .",
        [1],
        "navbar-item.",
        [1],
        "data-v-d26801e0{-webkit-align-items:center;align-items:center;border:none;color:#12161f;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;font-size:.29333333333333333rem;height:100%;-webkit-justify-content:center;justify-content:center;list-style-type:none;pointer-events:auto;text-align:center}\n.",
        [1],
        "navbar-wrap .",
        [1],
        "navbar-list .",
        [1],
        "navbar-item.",
        [1],
        "active.",
        [1],
        "data-v-d26801e0{color:#007aff}\n.",
        [1],
        "navbar-wrap .",
        [1],
        "navbar-list .",
        [1],
        "icon.",
        [1],
        "data-v-d26801e0{background-size:100%;height:.56rem;margin-bottom:.10666666666666667rem;width:.56rem}\n.",
        [1],
        "navbar-wrap .",
        [1],
        "navbar-list .",
        [1],
        "name.",
        [1],
        "data-v-d26801e0{font-size:.26666666666666666rem;width:1.3333333333333333rem}\n.",
        [1],
        "navbar-wrap.",
        [1],
        "mp-navbar-wrap.",
        [1],
        "data-v-d26801e0{height:1.2266666666666666rem}\n.",
        [1],
        "navbar-wrap.",
        [1],
        "mp-navbar-wrap .",
        [1],
        "navbar-item.",
        [1],
        "active.",
        [1],
        "data-v-d26801e0,.",
        [1],
        "navbar-wrap.",
        [1],
        "mp-navbar-wrap .",
        [1],
        "navbar-item.",
        [1],
        "data-v-d26801e0{color:#262e40}\n.",
        [1],
        "navbar-wrap.",
        [1],
        "mp-navbar-wrap .",
        [1],
        "name.",
        [1],
        "data-v-d26801e0{font-size:.25333333333333335rem;width:1.3333333333333333rem}\n.",
        [1],
        "navbar-wrap.",
        [1],
        "mp-navbar-wrap .",
        [1],
        "icon.",
        [1],
        "data-v-d26801e0{height:.64rem;margin-bottom:.05333333333333334rem;width:.64rem}\n.",
        [1],
        "skin-black.",
        [1],
        "data-v-d26801e0{background-color:#000;border-top:.02666666666666667rem solid #181c22}\n.",
        [1],
        "skin-black .",
        [1],
        "navbar-item .",
        [1],
        "name.",
        [1],
        "data-v-d26801e0{color:#989eaf}\n.",
        [1],
        "skin-black .",
        [1],
        "navbar-item.",
        [1],
        "active .",
        [1],
        "name.",
        [1],
        "data-v-d26801e0{color:#007aff}\n",
      ],
      undefined,
      { path: "./pages/asyncCom/@tencent/st-components/mp/Navbar/index.wxss" }
    );
  __wxAppCode__["pages/asyncCom/components/navBar/index.wxss"] = setCssToHead(
    [
      "::-webkit-scrollbar{display:none}\n.",
      [1],
      "nav-placeholder{height:1.3066666666666666rem;padding-bottom:env(safe-area-inset-bottom)}\n.",
      [1],
      "navbar-wrapper{bottom:0;left:0;position:relative;right:0;width:100vw}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/asyncCom/components/navBar/index.wxss:1:1)",
    { path: "./pages/asyncCom/components/navBar/index.wxss" }
  );
}
