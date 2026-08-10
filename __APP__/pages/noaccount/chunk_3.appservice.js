$gwx2_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_3 || [];
    function gz$gwx2_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "964fa938-0"]);
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_3 = true;
    var x = ["./pages/noaccount/OpenAccount/OpenTransferPageB.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx2_XC_3_1();
      var oTD = _v();
      _(r, oTD);
      if (_oz(z, 0, e, s, gg)) {
        oTD.wxVkey = 1;
        var xUD = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 1, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oTD, xUD);
      }
      oTD.wxXCkey = 1;
      oTD.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx2_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/noaccount/OpenAccount/OpenTransferPageB.wxml"] = [
    $gwx2_XC_3,
    "./pages/noaccount/OpenAccount/OpenTransferPageB.wxml",
  ];
else
  __wxAppCode__["pages/noaccount/OpenAccount/OpenTransferPageB.wxml"] =
    $gwx2_XC_3("./pages/noaccount/OpenAccount/OpenTransferPageB.wxml");
__wxRoute = "pages/noaccount/OpenAccount/OpenTransferPageB";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/noaccount/OpenAccount/OpenTransferPageB.js";
define(
  "pages/noaccount/OpenAccount/OpenTransferPageB.js",
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
    var t = require("../../../@babel/runtime/helpers/defineProperty"),
      e = require("./utils.js"),
      c = require("../../../common/vendor.js"),
      r = {
        components: {
          zxgWebview: function () {
            return "../../../components/webView.js";
          },
        },
        props: {
          userOpenSubStatus: { type: String, default: "" },
          scode: { type: String, default: "" },
          market: { type: String, default: "" },
        },
        computed: {
          url: function () {
            var c;
            return this.userOpenSubStatus
              ? ((c = {}),
                t(
                  c,
                  e.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN,
                  "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Ouh79p00ry033&wzq_code="
                    .concat(this.scode, "&wzq_market=")
                    .concat(this.market)
                ),
                t(
                  c,
                  e.USER_SUB_OPEN_STATUS.SUBSCRIBED_NO_OPEN,
                  "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Osg10p00ry033&wzq_code="
                    .concat(this.scode, "&wzq_market=")
                    .concat(this.market)
                ),
                t(
                  c,
                  e.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED,
                  "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Ods85p00ry033&wzq_code="
                    .concat(this.scode, "&wzq_market=")
                    .concat(this.market)
                ),
                t(
                  c,
                  e.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED,
                  "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Ody69p00ry033&wzq_code="
                    .concat(this.scode, "&wzq_market=")
                    .concat(this.market)
                ),
                c)[this.userOpenSubStatus]
              : "";
          },
        },
        mounted: function () {
          this.$emit("init");
        },
      };
    Array || c.resolveComponent("zxg-webview")();
    var a = c._export_sfc(r, [
      [
        "render",
        function (t, e, r, a, n, i) {
          return c.e({ a: i.url }, i.url ? { b: c.p({ src: i.url }) } : {});
        },
      ],
    ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/noaccount/OpenAccount/OpenTransferPageB.js",
  }
);
require("pages/noaccount/OpenAccount/OpenTransferPageB.js");
