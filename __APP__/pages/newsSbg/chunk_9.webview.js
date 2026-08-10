$gwx21_XC_21 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_21 || [];
    function gz$gwx21_XC_21_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_21_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_21_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_21_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div data-v-b3555b14"]);
        Z([[7], [3, "a"]]);
        Z([3, "scroll-bar data-v-b3555b14"]);
        Z([[7], [3, "c"]]);
        Z([3, "mySwiper"]);
        Z([
          [2, "+"],
          [1, "background-color:"],
          [[7], [3, "d"]],
        ]);
        Z([3, "item"]);
        Z([[7], [3, "b"]]);
        Z([3, "e"]);
        Z([3, "__l"]);
        Z([3, "data-v-b3555b14"]);
        Z([[6], [[7], [3, "item"]], [3, "f"]]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "_div item-box data-v-b3555b14"]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z(z[9]);
        Z([3, "avator data-v-b3555b14"]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z([3, "_span content data-v-b3555b14"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "d"]]]);
        Z(z[2]);
        Z(z[4]);
        Z([
          [2, "+"],
          [1, "background-color:"],
          [[7], [3, "f"]],
        ]);
        Z(z[6]);
        Z([[7], [3, "e"]]);
        Z(z[8]);
        Z(z[10]);
        Z(z[13]);
        Z(z[14]);
        Z(z[9]);
        Z(z[16]);
        Z(z[17]);
        Z(z[18]);
        Z(z[19]);
        Z([a, z[20][1]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_21_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_21_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_21 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_21 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_21_1();
      var oNXB = _n("view");
      _rz(z, oNXB, "class", 0, e, s, gg);
      var lOXB = _v();
      _(oNXB, lOXB);
      if (_oz(z, 1, e, s, gg)) {
        lOXB.wxVkey = 1;
        var aPXB = _mz(
          z,
          "swiper",
          ["class", 2, "options", 1, "ref", 2, "style", 3],
          [],
          e,
          s,
          gg
        );
        var tQXB = _v();
        _(aPXB, tQXB);
        var eRXB = function (oTXB, bSXB, xUXB, gg) {
          var fWXB = _mz(
            z,
            "swiper-slide",
            ["bind:__l", 9, "class", 1, "uI", 2, "uS", 3],
            [],
            oTXB,
            bSXB,
            gg
          );
          var cXXB = _n("view");
          _rz(z, cXXB, "class", 13, oTXB, bSXB, gg);
          var hYXB = _v();
          _(cXXB, hYXB);
          if (_oz(z, 14, oTXB, bSXB, gg)) {
            hYXB.wxVkey = 1;
            var oZXB = _mz(
              z,
              "base-image",
              ["bind:__l", 15, "class", 1, "uI", 2, "uP", 3],
              [],
              oTXB,
              bSXB,
              gg
            );
            _(hYXB, oZXB);
          }
          var c1XB = _n("label");
          _rz(z, c1XB, "class", 19, oTXB, bSXB, gg);
          var o2XB = _oz(z, 20, oTXB, bSXB, gg);
          _(c1XB, o2XB);
          _(cXXB, c1XB);
          hYXB.wxXCkey = 1;
          hYXB.wxXCkey = 3;
          _(fWXB, cXXB);
          _(xUXB, fWXB);
          return xUXB;
        };
        tQXB.wxXCkey = 4;
        _2z(z, 7, eRXB, e, s, gg, tQXB, "item", "index", "e");
        _(lOXB, aPXB);
      } else {
        lOXB.wxVkey = 2;
        var l3XB = _mz(
          z,
          "swiper",
          ["class", 21, "ref", 1, "style", 2],
          [],
          e,
          s,
          gg
        );
        var a4XB = _v();
        _(l3XB, a4XB);
        var t5XB = function (b7XB, e6XB, o8XB, gg) {
          var o0XB = _n("swiper-item");
          _rz(z, o0XB, "class", 27, b7XB, e6XB, gg);
          var fAYB = _n("view");
          _rz(z, fAYB, "class", 28, b7XB, e6XB, gg);
          var cBYB = _v();
          _(fAYB, cBYB);
          if (_oz(z, 29, b7XB, e6XB, gg)) {
            cBYB.wxVkey = 1;
            var hCYB = _mz(
              z,
              "base-image",
              ["bind:__l", 30, "class", 1, "uI", 2, "uP", 3],
              [],
              b7XB,
              e6XB,
              gg
            );
            _(cBYB, hCYB);
          }
          var oDYB = _n("label");
          _rz(z, oDYB, "class", 34, b7XB, e6XB, gg);
          var cEYB = _oz(z, 35, b7XB, e6XB, gg);
          _(oDYB, cEYB);
          _(fAYB, oDYB);
          cBYB.wxXCkey = 1;
          cBYB.wxXCkey = 3;
          _(o0XB, fAYB);
          _(o8XB, o0XB);
          return o8XB;
        };
        a4XB.wxXCkey = 4;
        _2z(z, 25, t5XB, e, s, gg, a4XB, "item", "index", "e");
        _(lOXB, l3XB);
      }
      lOXB.wxXCkey = 1;
      lOXB.wxXCkey = 3;
      lOXB.wxXCkey = 3;
      _(r, oNXB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_21();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxml"
  ] = [
    $gwx21_XC_21,
    "./pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxml"
  ] = $gwx21_XC_21(
    "./pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "scroll-bar.",
      [1],
      "data-v-b3555b14{border-radius:.32rem;bottom:.26666666666666666rem;height:.5866666666666667rem;left:.8rem;line-height:.5866666666666667rem;overflow:hidden;position:absolute;width:4.666666666666667rem}\n.",
      [1],
      "scroll-bar .",
      [1],
      "item-box.",
      [1],
      "data-v-b3555b14{display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;margin-left:.08rem}\n.",
      [1],
      "scroll-bar .",
      [1],
      "item-box .",
      [1],
      "avator.",
      [1],
      "data-v-b3555b14{border-radius:.18666666666666668rem;height:.37333333333333335rem;margin:.10666666666666667rem .10666666666666667rem 0 0;overflow:hidden;width:.37333333333333335rem}\n.",
      [1],
      "scroll-bar .",
      [1],
      "item-box .",
      [1],
      "content.",
      [1],
      "data-v-b3555b14{-webkit-line-clamp:1;-webkit-box-orient:vertical;color:#666;display:-webkit-box;font-size:.26666666666666666rem;line-height:.6133333333333333rem;overflow:hidden;position:relative;text-overflow:ellipsis;width:87%}\n",
    ],
    undefined,
    {
      path: "./pages/newsSbg/@tencent/stock-sq/src/source/ScrollBar/index.wxss",
    }
  );
}
