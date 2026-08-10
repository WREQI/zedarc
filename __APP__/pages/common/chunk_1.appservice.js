$gwx8_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx8_XC_1 || [];
    function gz$gwx8_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx8_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx8_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx8_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "r0"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx8_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx8_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx8_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx8_XC_1 = true;
    var x = ["./pages/common/lottie.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx8_XC_1_1();
      var xC = _v();
      _(r, xC);
      if (_oz(z, 0, e, s, gg)) {
        xC.wxVkey = 1;
      }
      xC.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx8_XC_1";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
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
if (__vd_version_info__.delayedGwx || false) $gwx8_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/common/lottie.wxml"] = [
    $gwx8_XC_1,
    "./pages/common/lottie.wxml",
  ];
else
  __wxAppCode__["pages/common/lottie.wxml"] = $gwx8_XC_1(
    "./pages/common/lottie.wxml"
  );
__wxRoute = "pages/common/lottie";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/common/lottie.js";
define(
  "pages/common/lottie.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t = require("lottie-miniprogram/miniprogram_dist/index.js"),
      e = require("../../common/vendor.js"),
      o = "lottie-mounted-node",
      i = null,
      n = {
        props: {
          width: { type: Number, default: 0 },
          height: { type: Number, default: 0 },
          path: { type: String, default: "" },
          autoplay: { type: Boolean, default: !1 },
          loop: { type: Boolean, default: !1 },
          canvasId: { type: String, default: o },
          disableScroll: { type: Boolean, default: !1 },
        },
        watch: {
          path: {
            handler: function (t) {
              t && this.lottieAnimationLoad(t);
            },
            immediate: !0,
          },
        },
        created: function () {
          this.$emit("lottieReady", t.lottie);
        },
        mounted: function () {
          this.$emit("canvasLoad");
        },
        methods: {
          lottieAnimationLoad: function (e) {
            var n = this;
            e &&
              this.createSelectorQuery()
                .select("#".concat(o))
                .node(function (o) {
                  if (o && o.node) {
                    var a = o.node,
                      d = a.getContext("2d");
                    (a.width = n.width),
                      (a.height = n.height),
                      t.lottie.setup(a),
                      (i = t.lottie.loadAnimation({
                        rendererSettings: { context: d },
                        loop: n.loop,
                        autoplay: n.autoplay,
                        path: e,
                      })).setSpeed(1),
                      i.addEventListener("complete", function () {
                        n.$emit("complete");
                      });
                  }
                })
                .exec();
          },
        },
        beforeDestroy: function () {
          i && i.destroy();
        },
      },
      a = e._export_sfc(n, [
        [
          "render",
          function (t, e, o, i, n, a) {
            return {
              a: o.canvasId,
              b: "".concat(o.width, "px"),
              c: "".concat(o.height, "px"),
              d: o.disableScroll,
            };
          },
        ],
      ]);
    wx.createComponent(a);
  },
  { isPage: false, isComponent: true, currentFile: "pages/common/lottie.js" }
);
require("pages/common/lottie.js");
