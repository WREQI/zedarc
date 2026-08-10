$gwx28_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx28_XC_0 || [];
    function gz$gwx28_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx28_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx28_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx28_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-e201f570"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-e201f570"]],
              [1, "container"],
            ],
            [[7], [3, "d"]],
          ],
        ]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "e201f570-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "e201f570-1"]);
        Z(z[6]);
        Z([3, "_div top-bar flex flex-pack-justify data-v-e201f570"]);
        Z([3, "block col-a data-v-e201f570"]);
        Z([3, "均价(元)"]);
        Z([3, "block col-b data-v-e201f570"]);
        Z([3, "数量(股)"]);
        Z([3, "block col-c data-v-e201f570"]);
        Z([3, "日期"]);
        Z([3, "_div bd-cont data-v-e201f570"]);
        Z([3, "item"]);
        Z([[7], [3, "c"]]);
        Z([3, "d"]);
        Z([3, "_div item-rank flex flex-pack-justify data-v-e201f570"]);
        Z(z[12]);
        Z([a, [[6], [[7], [3, "item"]], [3, "a"]]]);
        Z(z[14]);
        Z([a, [[6], [[7], [3, "item"]], [3, "b"]]]);
        Z(z[16]);
        Z([a, [[6], [[7], [3, "item"]], [3, "c"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx28_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx28_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx28_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx28_XC_0 = true;
    var x = ["./pages/stock/detail_buyback.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx28_XC_0_1();
      var oB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, oB);
      var xC = _n("view");
      _rz(z, xC, "class", 2, e, s, gg);
      var fE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(xC, fE);
      var oD = _v();
      _(xC, oD);
      if (_oz(z, 6, e, s, gg)) {
        oD.wxVkey = 1;
        var cF = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oD, cF);
      }
      var hG = _n("view");
      _rz(z, hG, "class", 11, e, s, gg);
      var oH = _n("label");
      _rz(z, oH, "class", 12, e, s, gg);
      var cI = _oz(z, 13, e, s, gg);
      _(oH, cI);
      _(hG, oH);
      var oJ = _n("label");
      _rz(z, oJ, "class", 14, e, s, gg);
      var lK = _oz(z, 15, e, s, gg);
      _(oJ, lK);
      _(hG, oJ);
      var aL = _n("label");
      _rz(z, aL, "class", 16, e, s, gg);
      var tM = _oz(z, 17, e, s, gg);
      _(aL, tM);
      _(hG, aL);
      _(xC, hG);
      var eN = _n("view");
      _rz(z, eN, "class", 18, e, s, gg);
      var bO = _v();
      _(eN, bO);
      var oP = function (oR, xQ, fS, gg) {
        var hU = _n("view");
        _rz(z, hU, "class", 22, oR, xQ, gg);
        var oV = _n("label");
        _rz(z, oV, "class", 23, oR, xQ, gg);
        var cW = _oz(z, 24, oR, xQ, gg);
        _(oV, cW);
        _(hU, oV);
        var oX = _n("label");
        _rz(z, oX, "class", 25, oR, xQ, gg);
        var lY = _oz(z, 26, oR, xQ, gg);
        _(oX, lY);
        _(hU, oX);
        var aZ = _n("label");
        _rz(z, aZ, "class", 27, oR, xQ, gg);
        var t1 = _oz(z, 28, oR, xQ, gg);
        _(aZ, t1);
        _(hU, aZ);
        _(fS, hU);
        return fS;
      };
      bO.wxXCkey = 2;
      _2z(z, 20, oP, e, s, gg, bO, "item", "index", "d");
      _(xC, eN);
      oD.wxXCkey = 1;
      oD.wxXCkey = 3;
      _(r, xC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx28_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx28_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stock/detail_buyback.wxml"] = [
    $gwx28_XC_0,
    "./pages/stock/detail_buyback.wxml",
  ];
else
  __wxAppCode__["pages/stock/detail_buyback.wxml"] = $gwx28_XC_0(
    "./pages/stock/detail_buyback.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/stock/detail_buyback.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "top-bar.",
      [1],
      "data-v-e201f570{border-bottom:.013333333333333334rem solid #e5e5e5;font-size:.37333333333333335rem;height:1.0666666666666667rem;line-height:1.0666666666666667rem;padding:0 .4rem;position:relative}\n.",
      [1],
      "top-bar.",
      [1],
      "data-v-e201f570:after{bottom:0;position:absolute;right:0;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 100%;transform-origin:0 100%;z-index:3}\n.",
      [1],
      "bd-cont.",
      [1],
      "data-v-e201f570{padding:.21333333333333335rem .4rem}\n.",
      [1],
      "item-rank.",
      [1],
      "data-v-e201f570{font-size:.37333333333333335rem;line-height:1.2;padding:.21333333333333335rem 0}\n.",
      [1],
      "col-a.",
      [1],
      "data-v-e201f570{width:3.013333333333333rem}\n.",
      [1],
      "col-b.",
      [1],
      "data-v-e201f570{text-align:right;width:2.533333333333333rem}\n.",
      [1],
      "col-c.",
      [1],
      "data-v-e201f570{text-align:right;width:2.506666666666667rem}\n",
    ],
    undefined,
    { path: "./pages/stock/detail_buyback.wxss" }
  );
}
