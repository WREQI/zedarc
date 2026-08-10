$gwx24_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx24_XC_1 || [];
    function gz$gwx24_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "f"]]]]);
        Z([3, "__l"]);
        Z([3, "48b93524-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "48b93524-1"]);
        Z(z[4]);
        Z([[7], [3, "d"]]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z([3, "48b93524-2"]);
        Z(z[8]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([3, "48b93524-3"]);
        Z(z[13]);
      })(__WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx24_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx24_XC_1 = true;
    var x = ["./pages/comment/comment.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx24_XC_1_1();
      var oZF = _n("page-meta");
      _rz(z, oZF, "rootFontSize", 0, e, s, gg);
      _(r, oZF);
      var l1F = _n("view");
      _rz(z, l1F, "class", 1, e, s, gg);
      var b5F = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(l1F, b5F);
      var a2F = _v();
      _(l1F, a2F);
      if (_oz(z, 4, e, s, gg)) {
        a2F.wxVkey = 1;
        var o6F = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(a2F, o6F);
      }
      var t3F = _v();
      _(l1F, t3F);
      if (_oz(z, 8, e, s, gg)) {
        t3F.wxVkey = 1;
        var x7F = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 9, "bindmessage", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(t3F, x7F);
      }
      var e4F = _v();
      _(l1F, e4F);
      if (_oz(z, 13, e, s, gg)) {
        e4F.wxVkey = 1;
        var o8F = _mz(
          z,
          "thirteen-anniversary-task",
          ["bind:__l", 14, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(e4F, o8F);
      }
      a2F.wxXCkey = 1;
      a2F.wxXCkey = 3;
      t3F.wxXCkey = 1;
      t3F.wxXCkey = 3;
      e4F.wxXCkey = 1;
      e4F.wxXCkey = 3;
      _(r, l1F);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx24_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx24_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/comment/comment.wxml"] = [
    $gwx24_XC_1,
    "./pages/comment/comment.wxml",
  ];
else
  __wxAppCode__["pages/comment/comment.wxml"] = $gwx24_XC_1(
    "./pages/comment/comment.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/comment/comment.wxss"] = setCssToHead([], undefined, {
    path: "./pages/comment/comment.wxss",
  });
}
