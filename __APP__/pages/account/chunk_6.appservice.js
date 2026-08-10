$gwx6_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_13 || [];
    function gz$gwx6_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div cancellation-wrapper wrapper data-v-7b293731"]);
        Z([3, "__l"]);
        Z([3, "data-v-7b293731"]);
        Z([3, "7b293731-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "7b293731-1"]);
        Z(z[4]);
        Z([[7], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_13 = true;
    var x = ["./pages/account/cancellation/detail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_13_1();
      var ePF = _n("view");
      _rz(z, ePF, "class", 0, e, s, gg);
      var xSF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(ePF, xSF);
      var bQF = _v();
      _(ePF, bQF);
      if (_oz(z, 4, e, s, gg)) {
        bQF.wxVkey = 1;
        var oTF = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(bQF, oTF);
      }
      var oRF = _v();
      _(ePF, oRF);
      if (_oz(z, 9, e, s, gg)) {
        oRF.wxVkey = 1;
      }
      bQF.wxXCkey = 1;
      bQF.wxXCkey = 3;
      oRF.wxXCkey = 1;
      _(r, ePF);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/cancellation/detail.wxml"] = [
    $gwx6_XC_13,
    "./pages/account/cancellation/detail.wxml",
  ];
else
  __wxAppCode__["pages/account/cancellation/detail.wxml"] = $gwx6_XC_13(
    "./pages/account/cancellation/detail.wxml"
  );
__wxRoute = "pages/account/cancellation/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/cancellation/detail.js";
define(
  "pages/account/cancellation/detail.js",
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
        data: function () {
          return { text: "", subText: [], step: "" };
        },
        mounted: function () {
          var t = this;
          this.getOpenerEventChannel().on("toDetailData", function (e) {
            var n = e.step,
              a = e.second_msg,
              o = e.second_msg_small;
            (t.step = n), (t.text = a), o && (t.subText = o);
          });
        },
        methods: {
          applyCancellation: function () {
            var e = t.wx$1.getStorageSync(
              "account_cancellation/confirmed_step"
            );
            e || (e = []),
              e.push(this.step),
              t.wx$1.setStorageSync("account_cancellation/confirmed_step", e),
              t.Request.reportMTAData({
                eventName: "base.accountcancellation_apply_detail.btn_click",
              }),
              setTimeout(function () {
                t.wx$1.navigateBack();
              }, 300);
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog")
      )();
    var n = t._export_sfc(e, [
      [
        "render",
        function (e, n, a, o, c, s) {
          return t.e(
            {
              a: e.rootFontSize,
              b: t.p({ "no-auto": !0 }),
              c: t.t(c.text),
              d: t.f(c.subText, function (e, n, a) {
                return { a: t.t(e), b: "step" + n };
              }),
              e: "step2" !== c.step,
            },
            "step2" !== c.step
              ? {
                  f: t.o(function () {
                    return (
                      s.applyCancellation &&
                      s.applyCancellation.apply(s, arguments)
                    );
                  }, 244),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-7b293731"],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/account/cancellation/detail.js",
  }
);
require("pages/account/cancellation/detail.js");
