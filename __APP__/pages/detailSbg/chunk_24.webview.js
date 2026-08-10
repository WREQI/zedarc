$gwx3_XC_17 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_17 || [];
    function gz$gwx3_XC_17_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[6], [[7], [3, "events"]], [3, "touchend"]]);
        Z([[6], [[7], [3, "events"]], [3, "touchmove"]]);
        Z([[6], [[7], [3, "events"]], [3, "touchstart"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "_div"]], [1, "f2-container"]],
            [[7], [3, "h"]],
          ],
        ]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "r0"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "b"]]);
        Z([[4], [[5], [1, "f2-canvas"]]]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
        Z([3, "2d"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_17_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_17 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_17 = true;
    var x = ["./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_17_1();
      var oZ8B = _mz(
        z,
        "view",
        [
          "bindtouchend",
          0,
          "bindtouchmove",
          1,
          "bindtouchstart",
          1,
          "class",
          2,
          "data-displaytooltip",
          3,
          "style",
          4,
        ],
        [],
        e,
        s,
        gg
      );
      var f18B = _v();
      _(oZ8B, f18B);
      if (_oz(z, 6, e, s, gg)) {
        f18B.wxVkey = 1;
        var c28B = _mz(
          z,
          "canvas",
          [
            "bindtouchcancel",
            7,
            "bindtouchend",
            1,
            "bindtouchmove",
            2,
            "bindtouchstart",
            3,
            "canvasId",
            4,
            "class",
            5,
            "id",
            6,
            "style",
            7,
            "type",
            8,
          ],
          [],
          e,
          s,
          gg
        );
        _(f18B, c28B);
      }
      var h38B = _n("slot");
      _(oZ8B, h38B);
      f18B.wxXCkey = 1;
      _(r, oZ8B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_17();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml"] = [
    $gwx3_XC_17,
    "./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml"] =
    $gwx3_XC_17("./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxml");

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/detailSbg/@tencent/stock-union-f2/f2MP.wxss"] =
    setCssToHead(
      [
        ".",
        [1],
        "f2-container{position:relative}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip{background-color:#fff;border:.013333333333333334rem solid #dcdfe6;border-radius:.10666666666666667rem;font-size:.26666666666666666rem;padding:.21333333333333335rem;position:absolute;top:0}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip.",
        [1],
        "left{left:0}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip.",
        [1],
        "right{right:0}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip .",
        [1],
        "f2-tooltip-inner{color:#262e40}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip .",
        [1],
        "f2-tooltip-inner .",
        [1],
        "f2-tooltip-title{font-weight:500}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip .",
        [1],
        "f2-tooltip-inner .",
        [1],
        "f2-tooltip-value{-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:.37333333333333335rem;-webkit-justify-content:space-between;justify-content:space-between;margin-top:.10666666666666667rem}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip .",
        [1],
        "f2-tooltip-inner .",
        [1],
        "f2-tooltip-value .",
        [1],
        "f2-tooltip-subtitle{color:#7a8499}\n.",
        [1],
        "f2-container .",
        [1],
        "f2-tooltip .",
        [1],
        "f2-tooltip-inner .",
        [1],
        "f2-tooltip-value .",
        [1],
        "f2-tooltip-after{font-weight:500;margin-left:.21333333333333335rem}\n.",
        [1],
        "f2-canvas{height:100%;width:100%}\n.",
        [1],
        "hidecanvas{display:none}\n",
      ],
      undefined,
      { path: "./pages/detailSbg/@tencent/stock-union-f2/f2MP.wxss" }
    );
}
