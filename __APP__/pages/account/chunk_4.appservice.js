$gwx6_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_11 || [];
    function gz$gwx6_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div cancellation-wrapper wrapper data-v-1b0a5def"]);
        Z([3, "__l"]);
        Z([3, "data-v-1b0a5def"]);
        Z([3, "1b0a5def-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "1b0a5def-1"]);
        Z(z[4]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([[7], [3, "e"]]);
        Z([3, "protocal-check data-v-1b0a5def"]);
        Z([3, "#E63535"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_11_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_11 = true;
    var x = ["./pages/account/cancellation/apply.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_11_1();
      var x1E = _n("view");
      _rz(z, x1E, "class", 0, e, s, gg);
      var f3E = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(x1E, f3E);
      var o2E = _v();
      _(x1E, o2E);
      if (_oz(z, 4, e, s, gg)) {
        o2E.wxVkey = 1;
        var c4E = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(o2E, c4E);
      }
      var h5E = _mz(
        z,
        "checkbox-group",
        ["bindchange", 9, "class", 1],
        [],
        e,
        s,
        gg
      );
      var o6E = _mz(
        z,
        "checkbox",
        ["checked", 11, "class", 1, "color", 2],
        [],
        e,
        s,
        gg
      );
      _(h5E, o6E);
      _(x1E, h5E);
      o2E.wxXCkey = 1;
      o2E.wxXCkey = 3;
      _(r, x1E);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/cancellation/apply.wxml"] = [
    $gwx6_XC_11,
    "./pages/account/cancellation/apply.wxml",
  ];
else
  __wxAppCode__["pages/account/cancellation/apply.wxml"] = $gwx6_XC_11(
    "./pages/account/cancellation/apply.wxml"
  );
__wxRoute = "pages/account/cancellation/apply";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/cancellation/apply.js";
define(
  "pages/account/cancellation/apply.js",
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
    var e = require("../../../common/vendor.js"),
      o = {
        data: function () {
          return { hasApplyAgreed: !1 };
        },
        watch: {
          hasApplyAgreed: function () {
            e.Request.reportMTAData({
              eventName: "base.accountcancellation_apply.checkbox_click",
            });
          },
        },
        mounted: function () {
          e.wx$1.setStorageSync("account_cancellation/confirmed_step", ""),
            (this.hasApplyAgreed = !!e.wx$1.getStorageSync(
              "account_cancellation/apply_protocol_agree"
            ));
        },
        methods: {
          handleChange: function () {
            (this.hasApplyAgreed = !this.hasApplyAgreed),
              e.wx$1.setStorageSync(
                "account_cancellation/apply_protocol_agree",
                "1"
              );
          },
          applyCancellation: function () {
            e.Request.reportMTAData({
              eventName: "base.accountcancellation_apply.btn_click",
            }),
              setTimeout(function () {
                e.wx$1.navigateTo({ url: "/pages/account/cancellation/query" });
              }, 300);
          },
          goProtocol: function () {
            e.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=35"
                )
              ),
            });
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var a = e._export_sfc(o, [
      [
        "render",
        function (o, a, n, t, c, p) {
          return {
            a: o.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: !c.hasApplyAgreed,
            d: e.o(function () {
              return (
                p.applyCancellation && p.applyCancellation.apply(p, arguments)
              );
            }, 238),
            e: c.hasApplyAgreed,
            f: e.o(function () {
              return p.handleChange && p.handleChange.apply(p, arguments);
            }, 239),
            g: e.o(function () {
              return p.goProtocol && p.goProtocol.apply(p, arguments);
            }, 240),
          };
        },
      ],
      ["__scopeId", "data-v-1b0a5def"],
    ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/account/cancellation/apply.js",
  }
);
require("pages/account/cancellation/apply.js");
