$gwx_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
    function gz$gwx_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-e5e1da00"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "container"]], [1, "data-v-e5e1da00"]],
            [[7], [3, "q"]],
          ],
        ]);
        Z([[7], [3, "r"]]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "e5e1da00-0"]);
        Z([[7], [3, "b"]]);
        Z(z[4]);
        Z(z[0]);
        Z([3, "e5e1da00-1"]);
        Z(z[7]);
        Z([[7], [3, "f"]]);
        Z(z[4]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([3, "top-bar r data-v-e5e1da00"]);
        Z([3, "e5e1da00-2"]);
        Z(z[12]);
        Z([3, "topBar"]);
        Z([[7], [3, "g"]]);
        Z([3, "_div data-v-e5e1da00"]);
        Z([[7], [3, "h"]]);
        Z(z[4]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "j"]]);
        Z([3, "r data-v-e5e1da00"]);
        Z([3, "e5e1da00-3"]);
        Z([[7], [3, "m"]]);
        Z([3, "information"]);
        Z([[7], [3, "n"]]);
        Z(z[4]);
        Z([[7], [3, "o"]]);
        Z([3, "information-status data-v-e5e1da00"]);
        Z([3, "e5e1da00-4"]);
        Z([[7], [3, "p"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
    var x = ["./pages/index/information/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_7_1();
      var aBD = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, aBD);
      var tCD = _mz(z, "view", ["class", 2, "data-st-theme", 1], [], e, s, gg);
      var xGD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(tCD, xGD);
      var eDD = _v();
      _(tCD, eDD);
      if (_oz(z, 7, e, s, gg)) {
        eDD.wxVkey = 1;
        var oHD = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(eDD, oHD);
      }
      var bED = _v();
      _(tCD, bED);
      if (_oz(z, 12, e, s, gg)) {
        bED.wxVkey = 1;
        var fID = _mz(
          z,
          "top-bar",
          [
            "bind:__l",
            13,
            "bindgetBarHeight",
            1,
            "bindgetTitleHeight",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uR",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(bED, fID);
      }
      var oFD = _v();
      _(tCD, oFD);
      if (_oz(z, 20, e, s, gg)) {
        oFD.wxVkey = 1;
        var cJD = _n("view");
        _rz(z, cJD, "class", 21, e, s, gg);
        var hKD = _v();
        _(cJD, hKD);
        if (_oz(z, 22, e, s, gg)) {
          hKD.wxVkey = 1;
          var cMD = _mz(
            z,
            "information",
            [
              "bind:__l",
              23,
              "bindonMpScroll",
              1,
              "bindpageInit",
              2,
              "bindvideoShareClick",
              3,
              "class",
              4,
              "uI",
              5,
              "uP",
              6,
              "uR",
              7,
            ],
            [],
            e,
            s,
            gg
          );
          _(hKD, cMD);
        }
        var oLD = _v();
        _(cJD, oLD);
        if (_oz(z, 31, e, s, gg)) {
          oLD.wxVkey = 1;
          var oND = _mz(
            z,
            "st-status",
            [
              "bind:__l",
              32,
              "bindhandleError",
              1,
              "class",
              2,
              "uI",
              3,
              "uP",
              4,
            ],
            [],
            e,
            s,
            gg
          );
          _(oLD, oND);
        }
        hKD.wxXCkey = 1;
        hKD.wxXCkey = 3;
        oLD.wxXCkey = 1;
        oLD.wxXCkey = 3;
        _(oFD, cJD);
      }
      eDD.wxXCkey = 1;
      eDD.wxXCkey = 3;
      bED.wxXCkey = 1;
      bED.wxXCkey = 3;
      oFD.wxXCkey = 1;
      oFD.wxXCkey = 3;
      _(r, tCD);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/information/main.wxml"] = [
    $gwx_XC_7,
    "./pages/index/information/main.wxml",
  ];
else
  __wxAppCode__["pages/index/information/main.wxml"] = $gwx_XC_7(
    "./pages/index/information/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/index/information/main.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "container.",
      [1],
      "data-v-e5e1da00{background-color:var(--fill-content-layer)}\n.",
      [1],
      "information-status.",
      [1],
      "data-v-e5e1da00 .",
      [1],
      "st-status{margin-top:.05333333333333334rem;position:absolute}\n",
    ],
    undefined,
    { path: "./pages/index/information/main.wxss" }
  );
}
