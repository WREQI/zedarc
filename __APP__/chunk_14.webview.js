$gwx_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
    function gz$gwx_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div account-index-container"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
        Z([3, "__l"]);
        Z([3, "19e3f6da-0"]);
        Z([[7], [3, "b"]]);
        Z(z[4]);
        Z([3, "19e3f6da-1"]);
        Z(z[6]);
        Z([[7], [3, "c"]]);
        Z([3, "_div status-wrapper"]);
        Z([[7], [3, "d"]]);
        Z(z[4]);
        Z([3, "19e3f6da-2"]);
        Z(z[12]);
        Z([[7], [3, "g"]]);
        Z(z[4]);
        Z([[7], [3, "f"]]);
        Z([3, "r"]);
        Z([3, "19e3f6da-3"]);
        Z(z[16]);
        Z([3, "accountCom"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
    var x = ["./pages/index/account/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_6_1();
      var eZC = _n("page-meta");
      _rz(z, eZC, "rootFontSize", 0, e, s, gg);
      _(r, eZC);
      var b1C = _mz(
        z,
        "view",
        ["class", 1, "data-st-theme", 1, "data-theme", 2],
        [],
        e,
        s,
        gg
      );
      var f5C = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(b1C, f5C);
      var o2C = _v();
      _(b1C, o2C);
      if (_oz(z, 6, e, s, gg)) {
        o2C.wxVkey = 1;
        var c6C = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(o2C, c6C);
      }
      var x3C = _v();
      _(b1C, x3C);
      if (_oz(z, 10, e, s, gg)) {
        x3C.wxVkey = 1;
        var h7C = _n("view");
        _rz(z, h7C, "class", 11, e, s, gg);
        var o8C = _v();
        _(h7C, o8C);
        if (_oz(z, 12, e, s, gg)) {
          o8C.wxVkey = 1;
          var c9C = _mz(
            z,
            "st-status",
            ["bind:__l", 13, "uI", 1, "uP", 2],
            [],
            e,
            s,
            gg
          );
          _(o8C, c9C);
        }
        o8C.wxXCkey = 1;
        o8C.wxXCkey = 3;
        _(x3C, h7C);
      }
      var o4C = _v();
      _(b1C, o4C);
      if (_oz(z, 16, e, s, gg)) {
        o4C.wxVkey = 1;
        var o0C = _mz(
          z,
          "account-com",
          [
            "bind:__l",
            17,
            "bindmounted",
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
        _(o4C, o0C);
      }
      o2C.wxXCkey = 1;
      o2C.wxXCkey = 3;
      x3C.wxXCkey = 1;
      x3C.wxXCkey = 3;
      o4C.wxXCkey = 1;
      o4C.wxXCkey = 3;
      _(r, b1C);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/account/main.wxml"] = [
    $gwx_XC_6,
    "./pages/index/account/main.wxml",
  ];
else
  __wxAppCode__["pages/index/account/main.wxml"] = $gwx_XC_6(
    "./pages/index/account/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/index/account/main.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "account-index-container{background:var(--fill-content-layer);height:100%}\n.",
      [1],
      "account-index-container .",
      [1],
      "status-wrapper{height:100%}\n",
    ],
    undefined,
    { path: "./pages/index/account/main.wxss" }
  );
}
