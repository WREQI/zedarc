$gwx1_XC_24 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_24 || [];
    function gz$gwx1_XC_24_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_24_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_24 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_24 = true;
    var x = ["./pages/asyncCom/components/followGuideType.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_24_1();
      var hEJ = _v();
      _(r, hEJ);
      if (_oz(z, 0, e, s, gg)) {
        hEJ.wxVkey = 1;
      }
      hEJ.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_24";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_24();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/followGuideType.wxml"] = [
    $gwx1_XC_24,
    "./pages/asyncCom/components/followGuideType.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/followGuideType.wxml"] = $gwx1_XC_24(
    "./pages/asyncCom/components/followGuideType.wxml"
  );
__wxRoute = "pages/asyncCom/components/followGuideType";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/asyncCom/components/followGuideType.js";
define(
  "pages/asyncCom/components/followGuideType.js",
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
    var t = require("../../../common/vendor.js"),
      e = {
        watch: { title: "基础盯盘设置成功", desc: "关注公众号，解锁全面盯盘" },
        remind: { title: "基础提醒设置成功", desc: "关注公众号，解锁全面提醒" },
      },
      o = {
        props: {
          show: { type: Boolean, default: !1 },
          stat: { type: String, default: "" },
          type: { type: String, default: "watch" },
        },
        computed: {
          titleText: function () {
            var t;
            return (
              (null == (t = e[this.type]) ? void 0 : t.title) || e.watch.title
            );
          },
          descText: function () {
            var t;
            return (
              (null == (t = e[this.type]) ? void 0 : t.desc) || e.watch.desc
            );
          },
        },
        watch: {
          show: function (t) {
            t && this.report("show");
          },
        },
        methods: {
          report: function (e) {
            t.Request.reportMTAData({
              eventName: "act.follow_guide.".concat(e),
              fchannel_id_fm_i: this.stat,
            });
          },
          cancel: function () {
            this.report("cancel"), this.$emit("close");
          },
          goFollow: function () {
            this.report("confirm"),
              this.$emit("close"),
              t.wx$1.navigateTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=".concat(
                      this.stat
                    )
                  )
                ),
              });
          },
        },
      },
      n = t._export_sfc(o, [
        [
          "render",
          function (e, o, n, c, i, a) {
            return t.e(
              { a: n.show },
              n.show
                ? {
                    b: t.t(a.titleText),
                    c: t.t(a.descText),
                    d: t.o(function () {
                      return a.cancel && a.cancel.apply(a, arguments);
                    }, 1335),
                    e: t.o(function () {
                      return a.goFollow && a.goFollow.apply(a, arguments);
                    }, 1336),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-8f130860"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/asyncCom/components/followGuideType.js",
  }
);
require("pages/asyncCom/components/followGuideType.js");
