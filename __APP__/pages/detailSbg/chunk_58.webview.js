$gwx3_XC_54 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_54 || [];
    function gz$gwx3_XC_54_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div page-remind-list"]);
        Z([3, "__l"]);
        Z([3, "0c5426f8-0"]);
        Z(z[2]);
        Z([3, "0c5426f8-1"]);
        Z([[7], [3, "d"]]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z([3, "r"]);
        Z([3, "0c5426f8-2"]);
        Z(z[6]);
        Z([3, "remindList"]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([[7], [3, "e"]]);
        Z([3, "0c5426f8-3"]);
        Z(z[13]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_54 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_54 = true;
    var x = ["./pages/detailSbg/remindStock/remindList.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_54_1();
      var oZNF = _n("page-meta");
      _rz(z, oZNF, "rootFontSize", 0, e, s, gg);
      _(r, oZNF);
      var x1NF = _n("view");
      _rz(z, x1NF, "class", 1, e, s, gg);
      var c4NF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(x1NF, c4NF);
      var h5NF = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 4, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(x1NF, h5NF);
      var o2NF = _v();
      _(x1NF, o2NF);
      if (_oz(z, 6, e, s, gg)) {
        o2NF.wxVkey = 1;
        var o6NF = _mz(
          z,
          "remind-list",
          [
            "bind:__l",
            7,
            "bindcheckUserSubscribe",
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
        _(o2NF, o6NF);
      }
      var f3NF = _v();
      _(x1NF, f3NF);
      if (_oz(z, 13, e, s, gg)) {
        f3NF.wxVkey = 1;
        var c7NF = _mz(
          z,
          "follow-guide",
          ["bind:__l", 14, "bindclose", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(f3NF, c7NF);
      }
      o2NF.wxXCkey = 1;
      o2NF.wxXCkey = 3;
      f3NF.wxXCkey = 1;
      f3NF.wxXCkey = 3;
      _(r, x1NF);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_54";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_54();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/remindStock/remindList.wxml"] = [
    $gwx3_XC_54,
    "./pages/detailSbg/remindStock/remindList.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/remindStock/remindList.wxml"] = $gwx3_XC_54(
    "./pages/detailSbg/remindStock/remindList.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/detailSbg/remindStock/remindList.wxss"] = setCssToHead(
    [],
    undefined,
    { path: "./pages/detailSbg/remindStock/remindList.wxss" }
  );
}
