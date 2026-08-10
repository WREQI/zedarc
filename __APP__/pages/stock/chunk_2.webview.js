$gwx28_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx28_XC_2 || [];
    function gz$gwx28_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-5d4df48b"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "data-v-5d4df48b"]], [1, "container"]],
              [[7], [3, "d"]],
            ],
            [[7], [3, "e"]],
          ],
        ]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "5d4df48b-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "5d4df48b-1"]);
        Z(z[6]);
        Z([3, "top-bar flex flex-pack-justify data-v-5d4df48b"]);
        Z([3, "block data-v-5d4df48b"]);
        Z([3, "名字"]);
        Z(z[12]);
        Z([3, "职务"]);
        Z([3, "bd-cont data-v-5d4df48b"]);
        Z([3, "item"]);
        Z([[7], [3, "c"]]);
        Z([3, "c"]);
        Z([3, "item-rank flex flex-pack-justify data-v-5d4df48b"]);
        Z([3, "block col-lft data-v-5d4df48b"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "a"]]]);
        Z([3, "block col-rht data-v-5d4df48b"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "b"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx28_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx28_XC_2 = true;
    var x = ["./pages/stock/detail_hr.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx28_XC_2_1();
      var eTB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, eTB);
      var bUB = _n("view");
      _rz(z, bUB, "class", 2, e, s, gg);
      var xWB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(bUB, xWB);
      var oVB = _v();
      _(bUB, oVB);
      if (_oz(z, 6, e, s, gg)) {
        oVB.wxVkey = 1;
        var oXB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oVB, oXB);
      }
      var fYB = _n("view");
      _rz(z, fYB, "class", 11, e, s, gg);
      var cZB = _n("label");
      _rz(z, cZB, "class", 12, e, s, gg);
      var h1B = _oz(z, 13, e, s, gg);
      _(cZB, h1B);
      _(fYB, cZB);
      var o2B = _n("label");
      _rz(z, o2B, "class", 14, e, s, gg);
      var c3B = _oz(z, 15, e, s, gg);
      _(o2B, c3B);
      _(fYB, o2B);
      _(bUB, fYB);
      var o4B = _n("view");
      _rz(z, o4B, "class", 16, e, s, gg);
      var l5B = _v();
      _(o4B, l5B);
      var a6B = function (e8B, t7B, b9B, gg) {
        var xAC = _n("view");
        _rz(z, xAC, "class", 20, e8B, t7B, gg);
        var oBC = _n("label");
        _rz(z, oBC, "class", 21, e8B, t7B, gg);
        var fCC = _oz(z, 22, e8B, t7B, gg);
        _(oBC, fCC);
        _(xAC, oBC);
        var cDC = _n("label");
        _rz(z, cDC, "class", 23, e8B, t7B, gg);
        var hEC = _oz(z, 24, e8B, t7B, gg);
        _(cDC, hEC);
        _(xAC, cDC);
        _(b9B, xAC);
        return b9B;
      };
      l5B.wxXCkey = 2;
      _2z(z, 18, a6B, e, s, gg, l5B, "item", "index", "c");
      _(bUB, o4B);
      oVB.wxXCkey = 1;
      oVB.wxXCkey = 3;
      _(r, bUB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx28_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx28_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stock/detail_hr.wxml"] = [
    $gwx28_XC_2,
    "./pages/stock/detail_hr.wxml",
  ];
else
  __wxAppCode__["pages/stock/detail_hr.wxml"] = $gwx28_XC_2(
    "./pages/stock/detail_hr.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/stock/detail_hr.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "top-bar.",
      [1],
      "data-v-5d4df48b{border-bottom:.013333333333333334rem solid #e5e5e5;font-size:.37333333333333335rem;height:1.0666666666666667rem;line-height:1.0666666666666667rem;padding:0 .4rem;position:relative}\n.",
      [1],
      "top-bar.",
      [1],
      "data-v-5d4df48b:after{bottom:0;position:absolute;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;z-index:3}\n.",
      [1],
      "bd-cont.",
      [1],
      "data-v-5d4df48b{padding:.21333333333333335rem .4rem}\n.",
      [1],
      "item-rank.",
      [1],
      "data-v-5d4df48b{font-size:.37333333333333335rem;line-height:1.2;padding:.21333333333333335rem 0}\n.",
      [1],
      "col-lft.",
      [1],
      "data-v-5d4df48b{padding-right:.5866666666666667rem;width:3.013333333333333rem}\n.",
      [1],
      "col-rht.",
      [1],
      "data-v-5d4df48b{text-align:right}\n.",
      [1],
      "iphonex .",
      [1],
      "bd-cont.",
      [1],
      "data-v-5d4df48b,.",
      [1],
      "iphonexsmax .",
      [1],
      "bd-cont.",
      [1],
      "data-v-5d4df48b{padding-bottom:.9066666666666666rem}\n",
    ],
    undefined,
    { path: "./pages/stock/detail_hr.wxss" }
  );
}
