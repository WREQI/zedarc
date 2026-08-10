$gwx6_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_5 || [];
    function gz$gwx6_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div cancellation-page"]);
        Z([3, "__l"]);
        Z([3, "726f4afe-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "726f4afe-1"]);
        Z(z[3]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_5 = true;
    var x = ["./pages/account/recover/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_5_1();
      var o2C = _n("view");
      _rz(z, o2C, "class", 0, e, s, gg);
      var o4C = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(o2C, o4C);
      var x3C = _v();
      _(o2C, x3C);
      if (_oz(z, 3, e, s, gg)) {
        x3C.wxVkey = 1;
        var f5C = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(x3C, f5C);
      }
      x3C.wxXCkey = 1;
      x3C.wxXCkey = 3;
      _(r, o2C);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/recover/main.wxml"] = [
    $gwx6_XC_5,
    "./pages/account/recover/main.wxml",
  ];
else
  __wxAppCode__["pages/account/recover/main.wxml"] = $gwx6_XC_5(
    "./pages/account/recover/main.wxml"
  );
__wxRoute = "pages/account/recover/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/recover/main.js";
define(
  "pages/account/recover/main.js",
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
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../common/vendor.js");
    getApp().globalData;
    var n = {
        cover:
          "该账号处于注销考虑期，当前登录视为撤销注销，您的账号信息将被恢复",
        cant: "账号信息错误",
      },
      o = {
        mounted: function () {
          var o = getCurrentPages(),
            a = o[o.length - 1].options;
          a.action
            ? t.wx$1.showModal({
                title: "",
                content: n[a.action],
                showCancel: !1,
                confirmText: "我知道了",
              })
            : (t.Request.reportMTAData({
                eventName: "base.accountcancellation_reject.modal_show",
              }),
              t.wx$1.showModal({
                title: "恢复账号信息",
                cancelText: "取消",
                confirmText: "确认恢复",
                confirmColor: "#3077EC",
                content: n.cover,
                success: function (n) {
                  return (
                    (o = this),
                    null,
                    (a = e().mark(function o() {
                      var a;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!n.confirm) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.prev = 1),
                                  t.Request.reportMTAData({
                                    eventName:
                                      "base.accountcancellation_reject.modal_confirm_click",
                                  }),
                                  (e.next = 5),
                                  t.AccountAPI.accountCancellationReject()
                                );
                              case 5:
                                (a = e.sent),
                                  t.Request.reportMTAData({
                                    eventName:
                                      "base.accountcancellation_confirm.modal_confirm_click",
                                  }),
                                  0 == +a.code
                                    ? t.wx$1.reLaunch({
                                        url: "/pages/index/index",
                                      })
                                    : t.wx$1.showToast({
                                        title: a.msg || "注销失败",
                                        icon: "none",
                                        duration: 2e3,
                                      }),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(1)),
                                  t.wx$1.showToast({
                                    title: "系统繁忙, 请稍后再试",
                                    icon: "none",
                                    duration: 1e3,
                                  });
                              case 12:
                                e.next = 15;
                                break;
                              case 14:
                                n.cancel &&
                                  t.Request.reportMTAData({
                                    eventName:
                                      "base.accountcancellation_reject.modal_cancel_click",
                                  });
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        o,
                        null,
                        [[1, 9]]
                      );
                    })),
                    new Promise(function (e, t) {
                      var n = function (e) {
                          try {
                            r(a.next(e));
                          } catch (e) {
                            t(e);
                          }
                        },
                        c = function (e) {
                          try {
                            r(a.throw(e));
                          } catch (e) {
                            t(e);
                          }
                        },
                        r = function (t) {
                          return t.done
                            ? e(t.value)
                            : Promise.resolve(t.value).then(n, c);
                        };
                      r((a = a.apply(o, null)).next());
                    })
                  );
                  var o, a;
                },
                fail: function () {
                  t.wx$1.showToast({
                    title: "系统繁忙, 请稍后再试",
                    icon: "none",
                    duration: 1e3,
                  });
                },
              }));
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog")
      )();
    var a = t._export_sfc(o, [
      [
        "render",
        function (e, n, o, a, c, r) {
          return { a: e.rootFontSize, b: t.p({ "no-auto": !0 }) };
        },
      ],
    ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/account/recover/main.js",
  }
);
require("pages/account/recover/main.js");
