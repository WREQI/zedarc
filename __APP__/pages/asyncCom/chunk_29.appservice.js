$gwx1_XC_22 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_22 || [];
    function gz$gwx1_XC_22_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_22_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_22 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_22 = true;
    var x = ["./pages/asyncCom/components/followGuide.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_22_1();
      var a6I = _v();
      _(r, a6I);
      if (_oz(z, 0, e, s, gg)) {
        a6I.wxVkey = 1;
      }
      a6I.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_22";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_22();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/followGuide.wxml"] = [
    $gwx1_XC_22,
    "./pages/asyncCom/components/followGuide.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/followGuide.wxml"] = $gwx1_XC_22(
    "./pages/asyncCom/components/followGuide.wxml"
  );
__wxRoute = "pages/asyncCom/components/followGuide";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/asyncCom/components/followGuide.js";
define(
  "pages/asyncCom/components/followGuide.js",
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
      o = {
        props: {
          show: { type: Boolean, default: !1 },
          stat: { type: String, default: "" },
        },
        watch: {
          show: function (t) {
            t && this.report("show");
          },
        },
        methods: {
          report: function (o) {
            t.Request.reportMTAData({
              eventName: "act.follow_guide.".concat(o),
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
      e = t._export_sfc(o, [
        [
          "render",
          function (o, e, n, c, a, i) {
            return t.e(
              { a: n.show },
              n.show
                ? {
                    b: t.o(function () {
                      return i.cancel && i.cancel.apply(i, arguments);
                    }, 1345),
                    c: t.o(function () {
                      return i.goFollow && i.goFollow.apply(i, arguments);
                    }, 1346),
                  }
                : {}
            );
          },
        ],
      ]);
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/asyncCom/components/followGuide.js",
  }
);
require("pages/asyncCom/components/followGuide.js");
