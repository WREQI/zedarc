$gwx21_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_4 || [];
    function gz$gwx21_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_4 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_4_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml"
  ] = [
    $gwx21_XC_4,
    "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml"
  ] = $gwx21_XC_4(
    "./pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.wxml"
  );
__wxRoute = "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.js";
define(
  "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.js",
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
    var e = require("../../../../stock-community-base/utils/knife.js"),
      t = require("../../../../../../../common/vendor.js"),
      r = {
        name: "BaseImage",
        props: {
          src: { require: !0, type: String },
          showType: { require: !1, default: "img" },
          backgroundText: { require: !1 },
          backgrounColor: { require: !1 },
          defaultImg: { require: !1 },
          opacity: { require: !1, type: Boolean, default: !1 },
          imageRefreshFlag: { default: 0 },
          shape: { default: "" },
          imgIndex: { type: Number, default: 0 },
        },
        created: function () {},
        data: function () {
          return { isFail: !0, tryTime: 0, timer: null, startTime: Date.now() };
        },
        mounted: function () {
          this.startTime = Date.now();
        },
        beforeDestroy: function () {
          this.clearTimer();
        },
        watch: {
          imageRefreshFlag: function (e, t) {
            e !== t &&
              ((this.refreshSrc = ""
                .concat(this.refreshSrc, "?_=")
                .concat(Math.random())),
              this.$emit("update:src", this.refreshSrc),
              (this.tryTime = 0),
              this.error());
          },
        },
        computed: {
          refreshSrc: {
            get: function () {
              return this.getSrc(this.src);
            },
            set: function (e) {},
          },
        },
        methods: {
          clearTimer: function () {
            this.timer && (clearTimeout(this.timer), (this.timer = null));
          },
          getSrc: function (t) {
            return e.toHttps(t);
          },
          setStatus: function (e) {
            if (((this.isFail = e), e)) this.$emit("failed");
            else {
              var t = this.$refs.img;
              this.$emit("loaded", {
                img: this.$refs.img,
                src: this.refreshSrc,
                width: t && t.naturalWidth,
                height: t && t.naturalHeight,
                index: this.imgIndex,
              });
            }
          },
          load: function () {
            this.setStatus(!1), this.clearTimer();
          },
          error: function () {
            var e = this;
            this.clearTimer(),
              this.tryTime < 3
                ? (this.timer = setTimeout(function () {
                    e.$refs &&
                      e.$refs.img &&
                      e.refreshSrc &&
                      (e.$refs.img.src = e.refreshSrc),
                      (e.tryTime += 1);
                  }, 100))
                : this.setStatus(!0);
          },
          click: function (e) {
            this.$emit("tapImg", e);
          },
        },
      },
      i = t._export_sfc(r, [
        [
          "render",
          function (e, r, i, s, n, a) {
            return {
              a: a.refreshSrc,
              b: 0 == n.isFail,
              c: a.refreshSrc,
              d: a.refreshSrc,
              e: t.o(function () {
                return a.load && a.load.apply(a, arguments);
              }, 3291),
              f: t.o(function () {
                return a.error && a.error.apply(a, arguments);
              }, 3292),
              g: t.o(function () {
                return a.click && a.click.apply(a, arguments);
              }, 3293),
              h: i.defaultImg && 1 == n.isFail,
              i: i.defaultImg,
              j: t.n(n.isFail ? "empty" : ""),
              k: t.n(0 == n.isFail && i.opacity ? "opacity" : ""),
              l: t.n(i.backgrounColor ? i.backgrounColor : ""),
              m: t.n(n.isFail && i.backgroundText ? "tencent-uniE900" : ""),
              n: t.n(i.shape),
            };
          },
        ],
        ["__scopeId", "data-v-12b3d8c4"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.js",
  }
);
require("pages/newsSbg/@tencent/stock-sq/src/source/baseImage/index.js");
