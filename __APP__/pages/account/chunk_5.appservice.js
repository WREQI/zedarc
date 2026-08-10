$gwx6_XC_12 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_12 || [];
    function gz$gwx6_XC_12_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_12_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_12_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_12_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div cancellation-wrapper wrapper data-v-51146b7b"]);
        Z([3, "__l"]);
        Z([3, "data-v-51146b7b"]);
        Z([3, "51146b7b-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "51146b7b-1"]);
        Z(z[4]);
        Z([[7], [3, "h"]]);
        Z(z[1]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([3, "51146b7b-2"]);
        Z(z[9]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[7], [3, "r0"]]);
        Z([3, "199305359"]);
        Z(z[1]);
        Z([[7], [3, "i"]]);
        Z(z[2]);
        Z([3, "captcha"]);
        Z([3, "51146b7b-3"]);
        Z([3, "m"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_12_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_12_1;
    }
    function gz$gwx6_XC_12_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_12_2)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_12_2;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_12_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "st-modal-confirm data-v-b4eaa1a8"]);
        Z([3, "st-modal-title data-v-b4eaa1a8"]);
        Z([[6], [[7], [3, "$slots"]], [3, "title"]]);
        Z([3, "title"]);
        Z(z[3]);
        Z([3, "st-modal-content data-v-b4eaa1a8"]);
        Z([[6], [[7], [3, "$slots"]], [3, "content"]]);
        Z([3, "content"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_12_2);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_12_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_12 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_12 = true;
    var x = [
      "./pages/account/cancellation/confirm.wxml",
      "./pages/account/components/confirmModal.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_12_1();
      var o8E = _n("view");
      _rz(z, o8E, "class", 0, e, s, gg);
      var eBF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(o8E, eBF);
      var l9E = _v();
      _(o8E, l9E);
      if (_oz(z, 4, e, s, gg)) {
        l9E.wxVkey = 1;
        var bCF = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(l9E, bCF);
      }
      var a0E = _v();
      _(o8E, a0E);
      if (_oz(z, 9, e, s, gg)) {
        a0E.wxVkey = 1;
        var oDF = _mz(
          z,
          "confirm-modal",
          [
            "bind:__l",
            10,
            "bindcancel",
            1,
            "bindconfirm",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uS",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(a0E, oDF);
      }
      var tAF = _v();
      _(o8E, tAF);
      if (_oz(z, 17, e, s, gg)) {
        tAF.wxVkey = 1;
        var xEF = _mz(
          z,
          "t-captcha",
          [
            "appId",
            18,
            "bind:__l",
            1,
            "bindverify",
            2,
            "class",
            3,
            "id",
            4,
            "uI",
            5,
            "uT",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(tAF, xEF);
      }
      l9E.wxXCkey = 1;
      l9E.wxXCkey = 3;
      a0E.wxXCkey = 1;
      a0E.wxXCkey = 3;
      tAF.wxXCkey = 1;
      tAF.wxXCkey = 3;
      _(r, o8E);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_12_2();
      var fGF = _n("view");
      _rz(z, fGF, "class", 0, e, s, gg);
      var cHF = _n("view");
      _rz(z, cHF, "class", 1, e, s, gg);
      var hIF = _v();
      _(cHF, hIF);
      if (_oz(z, 2, e, s, gg)) {
        hIF.wxVkey = 1;
        var oJF = _n("slot");
        _rz(z, oJF, "name", 3, e, s, gg);
        _(hIF, oJF);
      } else {
        hIF.wxVkey = 2;
      }
      hIF.wxXCkey = 1;
      _(fGF, cHF);
      var cKF = _n("slot");
      _rz(z, cKF, "name", 4, e, s, gg);
      _(fGF, cKF);
      var oLF = _n("view");
      _rz(z, oLF, "class", 5, e, s, gg);
      var lMF = _v();
      _(oLF, lMF);
      if (_oz(z, 6, e, s, gg)) {
        lMF.wxVkey = 1;
        var aNF = _n("slot");
        _rz(z, aNF, "name", 7, e, s, gg);
        _(lMF, aNF);
      } else {
        lMF.wxVkey = 2;
      }
      lMF.wxXCkey = 1;
      _(fGF, oLF);
      _(r, fGF);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_12();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/cancellation/confirm.wxml"] = [
    $gwx6_XC_12,
    "./pages/account/cancellation/confirm.wxml",
  ];
else
  __wxAppCode__["pages/account/cancellation/confirm.wxml"] = $gwx6_XC_12(
    "./pages/account/cancellation/confirm.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/components/confirmModal.wxml"] = [
    $gwx6_XC_12,
    "./pages/account/components/confirmModal.wxml",
  ];
else
  __wxAppCode__["pages/account/components/confirmModal.wxml"] = $gwx6_XC_12(
    "./pages/account/components/confirmModal.wxml"
  );
__wxRoute = "pages/account/components/confirmModal";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/components/confirmModal.js";
define(
  "pages/account/components/confirmModal.js",
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
    var n = require("../../../common/vendor.js"),
      t = {
        props: {
          modalShow: { type: Boolean, default: !0 },
          content: { type: String, default: "" },
          confirmText: { type: String, default: "确定" },
          cancelText: { type: String, default: "取消" },
        },
        methods: {
          onCancel: function () {
            this.$emit("cancel");
          },
          onConfirm: function () {
            this.$emit("confirm");
          },
        },
      },
      e = n._export_sfc(t, [
        [
          "render",
          function (t, e, o, c, r, a) {
            return {
              a: n.t(t.title),
              b: n.t(o.content),
              c: n.t(o.cancelText),
              d: n.o(function () {
                return a.onCancel && a.onCancel.apply(a, arguments);
              }, 657),
              e: n.t(o.confirmText),
              f: n.o(function () {
                return a.onConfirm && a.onConfirm.apply(a, arguments);
              }, 658),
              g: n.n(o.modalShow ? "show" : ""),
            };
          },
        ],
        ["__scopeId", "data-v-b4eaa1a8"],
      ]);
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/account/components/confirmModal.js",
  }
);
require("pages/account/components/confirmModal.js");
__wxRoute = "pages/account/cancellation/confirm";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/cancellation/confirm.js";
define(
  "pages/account/cancellation/confirm.js",
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
      n = function (e, n, t) {
        return new Promise(function (o, a) {
          var c = function (e) {
              try {
                i(t.next(e));
              } catch (e) {
                a(e);
              }
            },
            r = function (e) {
              try {
                i(t.throw(e));
              } catch (e) {
                a(e);
              }
            },
            i = function (e) {
              return e.done ? o(e.value) : Promise.resolve(e.value).then(c, r);
            };
          i((t = t.apply(e, n)).next());
        });
      },
      t = require("../../../common/vendor.js"),
      o = {
        components: {
          ConfirmModal: function () {
            return "../components/confirmModal.js";
          },
        },
        data: function () {
          return {
            confirmModalOpt: {
              visible: !1,
              title: "注销账号",
              cancelText: "取消",
              confirmText: "确认注销",
            },
          };
        },
        mounted: function () {},
        methods: {
          giveUp: function () {
            t.Request.reportMTAData({
              eventName: "base.accountcancellation_confirm.abandon_btn_click",
            }),
              t.wx$1.navigateBack();
          },
          goNext: function () {
            t.Request.reportMTAData({
              eventName: "base.accountcancellation_confirm.next_btn_click",
            }),
              t.Request.reportMTAData({
                eventName: "base.accountcancellation_confirm.modal_show",
              }),
              (this.confirmModalOpt.visible = !0);
          },
          modalConfirm: function () {
            return n(
              this,
              null,
              e().mark(function n() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          this.selectComponent("#captcha").show();
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
          handlerCaptchaVerify: function (e) {
            var n = e.detail || {},
              t = n.ret,
              o = n.ticket,
              a = void 0 === o ? "" : o,
              c = n.randstr,
              r = void 0 === c ? "" : c;
            0 === t && this.handleCancelAccount(a, r);
          },
          modalCancel: function () {
            t.Request.reportMTAData({
              eventName: "base.accountcancellation_confirm.modal_cancel_click",
            }),
              (this.confirmModalOpt.visible = !1);
          },
          handleCancelAccount: function () {
            var o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
            return n(
              this,
              null,
              e().mark(function n() {
                var c;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            t.AccountAPI.accountCancellationConfirm(o, a)
                          );
                        case 3:
                          (c = e.sent),
                            t.Request.reportMTAData({
                              eventName:
                                "base.accountcancellation_confirm.modal_confirm_click",
                            }),
                            0 == +c.code
                              ? (t.Request.reportMTAData({
                                  eventName:
                                    "base.accountcancellation_confirm.success_tips_show",
                                }),
                                t.wx$1.showModal({
                                  title: "",
                                  content: "注销成功",
                                  showCancel: !1,
                                  confirmText: "我知道了",
                                  success: function () {
                                    t.wx$1.exitMiniProgram();
                                  },
                                }))
                              : t.wx$1.showToast({
                                  title: c.msg || "注销失败",
                                  icon: "none",
                                  duration: 2e3,
                                }),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            t.wx$1.showToast({
                              title: "系统繁忙，请稍后重试",
                              icon: "none",
                              duration: 2e3,
                            });
                        case 10:
                          this.confirmModalOpt.visible = !1;
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this,
                  [[0, 7]]
                );
              })
            );
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog") +
        t.resolveComponent("ConfirmModal") +
        t.resolveComponent("t-captcha")
      )();
    var a = t._export_sfc(o, [
      [
        "render",
        function (e, n, o, a, c, r) {
          return {
            a: e.rootFontSize,
            b: t.p({ "no-auto": !0 }),
            c: t.o(function () {
              return r.giveUp && r.giveUp.apply(r, arguments);
            }, 252),
            d: t.o(function () {
              return r.goNext && r.goNext.apply(r, arguments);
            }, 253),
            e: t.t(c.confirmModalOpt.title),
            f: t.o(r.modalConfirm, 254),
            g: t.o(r.modalCancel, 255),
            h: t.p({
              "modal-show": c.confirmModalOpt.visible,
              "confirm-text": c.confirmModalOpt.confirmText,
              "cancel-text": c.confirmModalOpt.cancelText,
            }),
            i: t.o(r.handlerCaptchaVerify, 256),
          };
        },
      ],
      ["__scopeId", "data-v-51146b7b"],
    ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/account/cancellation/confirm.js",
  }
);
require("pages/account/cancellation/confirm.js");
