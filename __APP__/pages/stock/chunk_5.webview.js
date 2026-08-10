$gwx28_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx28_XC_5 || [];
    function gz$gwx28_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-dc6b091d"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-dc6b091d"]], [1, "container"]],
            [[7], [3, "g"]],
          ],
        ]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "dc6b091d-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "dc6b091d-1"]);
        Z(z[6]);
        Z([3, "bd-cont data-v-dc6b091d"]);
        Z([3, "scroll_pull"]);
        Z([3, "bd-cont-row data-v-dc6b091d"]);
        Z([3, "listplate-title-fixtop data-v-dc6b091d"]);
        Z([
          3,
          "top-list flex flex-pack-justify flex-align-center btmline-gray data-v-dc6b091d",
        ]);
        Z([[7], [3, "c"]]);
        Z([3, "title data-v-dc6b091d"]);
        Z([3, "十大流通股东"]);
        Z(z[17]);
        Z([3, "基金持股"]);
        Z(z[17]);
        Z([a, [[7], [3, "d"]]]);
        Z([
          3,
          "top-list-sub flex flex-pack-justify flex-align-center data-v-dc6b091d",
        ]);
        Z([[7], [3, "e"]]);
        Z([3, "title row-a data-v-dc6b091d"]);
        Z([3, "流通股东"]);
        Z(z[25]);
        Z([3, "机构股东"]);
        Z([3, "title row-b data-v-dc6b091d"]);
        Z([3, "占比"]);
        Z([3, "title row-c data-v-dc6b091d"]);
        Z([3, "变动"]);
        Z([3, "list-cont data-v-dc6b091d"]);
        Z([3, "item"]);
        Z([[7], [3, "f"]]);
        Z([3, "d"]);
        Z([
          3,
          "li-wrap flex flex-align-center flex-pack-justify data-v-dc6b091d",
        ]);
        Z([3, "row-a data-v-dc6b091d"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "a"]]]);
        Z([3, "row-b data-v-dc6b091d"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "b"]], [3, "%"]]);
        Z([3, "row-c data-v-dc6b091d"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "c"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx28_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx28_XC_5 = true;
    var x = ["./pages/stock/shareholder.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx28_XC_5_1();
      var hGH = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, hGH);
      var oHH = _n("view");
      _rz(z, oHH, "class", 2, e, s, gg);
      var oJH = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oHH, oJH);
      var cIH = _v();
      _(oHH, cIH);
      if (_oz(z, 6, e, s, gg)) {
        cIH.wxVkey = 1;
        var lKH = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(cIH, lKH);
      }
      var aLH = _mz(z, "view", ["class", 11, "id", 1], [], e, s, gg);
      var tMH = _n("view");
      _rz(z, tMH, "class", 13, e, s, gg);
      var eNH = _n("view");
      _rz(z, eNH, "class", 14, e, s, gg);
      var bOH = _n("view");
      _rz(z, bOH, "class", 15, e, s, gg);
      var oPH = _v();
      _(bOH, oPH);
      if (_oz(z, 16, e, s, gg)) {
        oPH.wxVkey = 1;
        var xQH = _n("view");
        _rz(z, xQH, "class", 17, e, s, gg);
        var oRH = _oz(z, 18, e, s, gg);
        _(xQH, oRH);
        _(oPH, xQH);
      } else {
        oPH.wxVkey = 2;
        var fSH = _n("view");
        _rz(z, fSH, "class", 19, e, s, gg);
        var cTH = _oz(z, 20, e, s, gg);
        _(fSH, cTH);
        _(oPH, fSH);
      }
      var hUH = _n("view");
      _rz(z, hUH, "class", 21, e, s, gg);
      var oVH = _oz(z, 22, e, s, gg);
      _(hUH, oVH);
      _(bOH, hUH);
      oPH.wxXCkey = 1;
      _(eNH, bOH);
      var cWH = _n("view");
      _rz(z, cWH, "class", 23, e, s, gg);
      var oXH = _v();
      _(cWH, oXH);
      if (_oz(z, 24, e, s, gg)) {
        oXH.wxVkey = 1;
        var lYH = _n("view");
        _rz(z, lYH, "class", 25, e, s, gg);
        var aZH = _oz(z, 26, e, s, gg);
        _(lYH, aZH);
        _(oXH, lYH);
      } else {
        oXH.wxVkey = 2;
        var t1H = _n("view");
        _rz(z, t1H, "class", 27, e, s, gg);
        var e2H = _oz(z, 28, e, s, gg);
        _(t1H, e2H);
        _(oXH, t1H);
      }
      var b3H = _n("view");
      _rz(z, b3H, "class", 29, e, s, gg);
      var o4H = _oz(z, 30, e, s, gg);
      _(b3H, o4H);
      _(cWH, b3H);
      var x5H = _n("view");
      _rz(z, x5H, "class", 31, e, s, gg);
      var o6H = _oz(z, 32, e, s, gg);
      _(x5H, o6H);
      _(cWH, x5H);
      oXH.wxXCkey = 1;
      _(eNH, cWH);
      _(tMH, eNH);
      var f7H = _n("view");
      _rz(z, f7H, "class", 33, e, s, gg);
      var c8H = _v();
      _(f7H, c8H);
      var h9H = function (cAI, o0H, oBI, gg) {
        var aDI = _n("view");
        _rz(z, aDI, "class", 37, cAI, o0H, gg);
        var tEI = _n("view");
        _rz(z, tEI, "class", 38, cAI, o0H, gg);
        var eFI = _oz(z, 39, cAI, o0H, gg);
        _(tEI, eFI);
        _(aDI, tEI);
        var bGI = _n("view");
        _rz(z, bGI, "class", 40, cAI, o0H, gg);
        var oHI = _oz(z, 41, cAI, o0H, gg);
        _(bGI, oHI);
        _(aDI, bGI);
        var xII = _n("view");
        _rz(z, xII, "class", 42, cAI, o0H, gg);
        var oJI = _oz(z, 43, cAI, o0H, gg);
        _(xII, oJI);
        _(aDI, xII);
        _(oBI, aDI);
        return oBI;
      };
      c8H.wxXCkey = 2;
      _2z(z, 35, h9H, e, s, gg, c8H, "item", "index", "d");
      _(tMH, f7H);
      _(aLH, tMH);
      _(oHH, aLH);
      cIH.wxXCkey = 1;
      cIH.wxXCkey = 3;
      _(r, oHH);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx28_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx28_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stock/shareholder.wxml"] = [
    $gwx28_XC_5,
    "./pages/stock/shareholder.wxml",
  ];
else
  __wxAppCode__["pages/stock/shareholder.wxml"] = $gwx28_XC_5(
    "./pages/stock/shareholder.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/stock/shareholder.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "container.",
      [1],
      "data-v-dc6b091d{color:#000;font-size:.37333333333333335rem}\n.",
      [1],
      "listplate-title-fixtop.",
      [1],
      "data-v-dc6b091d{background-color:#fff;color:#888;position:absolute;top:0;width:100%;z-index:10}\n.",
      [1],
      "top-list.",
      [1],
      "data-v-dc6b091d{background:#fff;border-bottom:.013333333333333334rem solid #e5e5e5;height:1.0666666666666667rem;padding:0 .4rem;position:relative}\n.",
      [1],
      "top-list-sub.",
      [1],
      "data-v-dc6b091d{font-size:.37333333333333335rem;height:1.0666666666666667rem;padding:0 .4rem}\n.",
      [1],
      "top-list .",
      [1],
      "title.",
      [1],
      "data-v-dc6b091d{color:#000;font-size:.37333333333333335rem}\n.",
      [1],
      "list-cont.",
      [1],
      "data-v-dc6b091d{margin-top:2.1333333333333333rem}\n.",
      [1],
      "list-cont wx-li.",
      [1],
      "data-v-dc6b091d:after{border-bottom:none}\n.",
      [1],
      "list-cont .",
      [1],
      "li-wrap.",
      [1],
      "data-v-dc6b091d{padding:.13333333333333333rem .4rem}\n.",
      [1],
      "row-a.",
      [1],
      "data-v-dc6b091d{line-height:1.3;width:60%}\n.",
      [1],
      "row-b.",
      [1],
      "data-v-dc6b091d,.",
      [1],
      "row-c.",
      [1],
      "data-v-dc6b091d{text-align:right;width:20%}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/stock/shareholder.wxss:1:600)",
    { path: "./pages/stock/shareholder.wxss" }
  );
}
