$gwx_XC_12 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
    function gz$gwx_XC_12_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "modal-box data-v-f0345352"]);
        Z([[7], [3, "a"]]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
        Z([3, "modal-buttons data-v-f0345352"]);
        Z([[6], [[7], [3, "$slots"]], [3, "btns"]]);
        Z([3, "btns"]);
        Z([3, "i_showCancelButton"]);
        Z([3, "i_showConfirmButton"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1;
    }
    function gz$gwx_XC_12_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "privacy-modal data-v-5a09f021"]);
        Z([3, "5a09f021-0"]);
        Z(z[0]);
        Z([[4], [[5], [[5], [1, "btns"]], [1, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
    var x = [
      "./components/Modal/Modal.wxml",
      "./components/PrivacyDialog/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_12_1();
      var c9C = _n("view");
      _rz(z, c9C, "class", 0, e, s, gg);
      var o0C = _v();
      _(c9C, o0C);
      if (_oz(z, 1, e, s, gg)) {
        o0C.wxVkey = 1;
      }
      var lAD = _v();
      _(c9C, lAD);
      if (_oz(z, 2, e, s, gg)) {
        lAD.wxVkey = 1;
        var aBD = _n("slot");
        _(lAD, aBD);
      } else {
        lAD.wxVkey = 2;
      }
      var tCD = _n("view");
      _rz(z, tCD, "class", 3, e, s, gg);
      var eDD = _v();
      _(tCD, eDD);
      if (_oz(z, 4, e, s, gg)) {
        eDD.wxVkey = 1;
        var bED = _n("slot");
        _rz(z, bED, "name", 5, e, s, gg);
        _(eDD, bED);
      } else {
        eDD.wxVkey = 2;
        var oFD = _v();
        _(eDD, oFD);
        if (_oz(z, 6, e, s, gg)) {
          oFD.wxVkey = 1;
        }
        var xGD = _v();
        _(eDD, xGD);
        if (_oz(z, 7, e, s, gg)) {
          xGD.wxVkey = 1;
        }
        oFD.wxXCkey = 1;
        xGD.wxXCkey = 1;
      }
      eDD.wxXCkey = 1;
      _(c9C, tCD);
      o0C.wxXCkey = 1;
      lAD.wxXCkey = 1;
      _(r, c9C);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx_XC_12_2();
      var fID = _v();
      _(r, fID);
      if (_oz(z, 0, e, s, gg)) {
        fID.wxVkey = 1;
        var cJD = _mz(
          z,
          "modal",
          ["bind:__l", 1, "class", 1, "uI", 2, "uP", 3, "uS", 4],
          [],
          e,
          s,
          gg
        );
        _(fID, cJD);
      }
      fID.wxXCkey = 1;
      fID.wxXCkey = 3;
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/Modal/Modal.wxml"] = [
    $gwx_XC_12,
    "./components/Modal/Modal.wxml",
  ];
else
  __wxAppCode__["components/Modal/Modal.wxml"] = $gwx_XC_12(
    "./components/Modal/Modal.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/PrivacyDialog/index.wxml"] = [
    $gwx_XC_12,
    "./components/PrivacyDialog/index.wxml",
  ];
else
  __wxAppCode__["components/PrivacyDialog/index.wxml"] = $gwx_XC_12(
    "./components/PrivacyDialog/index.wxml"
  );
__wxRoute = "components/Modal/Modal";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/Modal/Modal.js";
define(
  "components/Modal/Modal.js",
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
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      n = Object.defineProperty,
      e = Object.defineProperties,
      o = Object.getOwnPropertyDescriptors,
      i = Object.getOwnPropertySymbols,
      r = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable,
      a = function (t, e, o) {
        return e in t
          ? n(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (t[e] = o);
      },
      l = require("../../common/vendor.js"),
      u = {
        visible: !1,
        title: "",
        content: "",
        customCancel: !1,
        customConfirm: !1,
        confirmButtonText: "我知道了",
        cancelButtonText: "取消",
        showConfirmButton: !0,
        showCancelButton: !1,
        showClose: !1,
        maskClosable: !1,
      },
      s = {
        props: {
          visible: { type: Boolean, default: !1 },
          title: { type: String, default: "提示" },
          customContent: { type: Boolean, default: !1 },
          content: { type: String },
          customConfirm: { type: Boolean, default: !1 },
          showConfirmButton: { type: Boolean, default: !0 },
          confirmButtonText: { type: String, default: "我知道了" },
          onConfirm: { type: String, default: function () {} },
          customCancel: { type: Boolean, default: !1 },
          showCancelButton: { type: Boolean, default: !0 },
          cancelButtonText: { type: String, default: "取消" },
          onCancel: { type: String, default: function () {} },
        },
        data: function () {
          var n,
            l = {};
          for (var s in u) l["i_".concat(s)] = u[s];
          return (
            (n = (function (n, e) {
              for (var o in e || (e = {})) r.call(e, o) && a(n, o, e[o]);
              if (i) {
                var l,
                  u = t(i(e));
                try {
                  for (u.s(); !(l = u.n()).done; ) {
                    o = l.value;
                    c.call(e, o) && a(n, o, e[o]);
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
              }
              return n;
            })({}, l)),
            e(n, o({ loading: { confirm: !1, cancel: !1 } }))
          );
        },
        created: function () {
          var t = this;
          (this._dataWatchers = []),
            Object.keys(u).forEach(function (n) {
              t._dataWatchers.push(
                t.$watch(
                  n,
                  function (e) {
                    t["i_".concat(n)] = e;
                  },
                  { immediate: !0 }
                )
              );
            });
        },
        destroyed: function () {
          this._dataWatchers.forEach(function (t) {
            t();
          });
        },
        methods: {
          show: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (this.i_title = t.title),
              (this.i_content = t.content),
              (this.i_showCancelButton = t.showCancelButton || !1),
              (this.i_showConfirmButton = t.showConfirmButton || !0),
              (this.i_confirmButtonText = t.confirmButtonText || "我知道了"),
              (this.i_cancelButtonText = t.cancelButtonText || "取消"),
              (this.i_onConfirm = t.onConfirm),
              (this.i_onCancel = t.onCancel),
              (this.i_visible = !0);
          },
          confirm: function () {
            var t;
            null == (t = this.onConfirm || this.i_onConfirm) || t(),
              (this.i_visible = !1);
          },
          cancel: function () {
            var t;
            null == (t = this.onCancel || this.i_onCancel) || t(),
              (this.i_visible = !1);
          },
          isShow: function () {
            return this.i_visible;
          },
        },
      },
      f = l._export_sfc(s, [
        [
          "render",
          function (t, n, e, o, i, r) {
            return l.e({ a: e.title }, e.title ? { b: l.t(t.i_title) } : {}, {
              c: l.t(t.i_content),
              d: l.t(t.i_cancelButtonText),
              e: l.o(function () {
                return r.cancel && r.cancel.apply(r, arguments);
              }, 409),
              f: l.t(t.i_confirmButtonText),
              g: l.o(function () {
                return r.confirm && r.confirm.apply(r, arguments);
              }, 410),
              h: t.i_visible,
            });
          },
        ],
        ["__scopeId", "data-v-f0345352"],
      ]);
    wx.createComponent(f);
  },
  { isPage: false, isComponent: true, currentFile: "components/Modal/Modal.js" }
);
require("components/Modal/Modal.js");
__wxRoute = "components/PrivacyDialog/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/PrivacyDialog/index.js";
define(
  "components/PrivacyDialog/index.js",
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
    var o = require("../../common/vendor.js"),
      e = {
        components: {
          Modal: function () {
            return "../Modal/Modal.js";
          },
        },
        setup: function () {
          var e = o.useMpPrivacy(),
            n = e.isShowDialog,
            a = e.protocolName,
            r = e.openPrivacyContract,
            t = e.resolvePending,
            c = e.route,
            i = o.ref(!1);
          return {
            isShow: o.computed(function () {
              return i.value && n.value;
            }),
            isPageShow: i,
            protocolName: a,
            handleProtocolClick: function () {
              o.wx$1.canIUse("openPrivacyContract") && r();
            },
            handlePrivacyConfirm: function () {
              t(!0),
                o.Request.reportMTAData({
                  eventName: "base.global.mp_privacy.confirm__".concat(c.value),
                });
            },
            handlePrivacyCancel: function () {
              t(!1),
                o.wx$1.showToast({
                  title: "您需同意授权方可继续操作",
                  icon: "none",
                  duration: 3e3,
                }),
                o.Request.reportMTAData({
                  eventName: "base.global.mp_privacy.cancel__".concat(c.value),
                });
            },
          };
        },
        onPageShow: function () {
          this.isPageShow = !0;
        },
        onPageHide: function () {
          this.isPageShow = !1;
        },
      };
    Array || o.resolveComponent("modal")();
    var n = o._export_sfc(e, [
      [
        "render",
        function (e, n, a, r, t, c) {
          return {
            a: o.t(r.protocolName),
            b: o.o(function () {
              return (
                r.handleProtocolClick &&
                r.handleProtocolClick.apply(r, arguments)
              );
            }, 1),
            c: o.o(function () {
              return (
                r.handlePrivacyCancel &&
                r.handlePrivacyCancel.apply(r, arguments)
              );
            }, 2),
            d: o.o(function () {
              return (
                r.handlePrivacyConfirm &&
                r.handlePrivacyConfirm.apply(r, arguments)
              );
            }, 3),
            e: o.p({ title: "温馨提示", visible: r.isShow }),
          };
        },
      ],
      ["__scopeId", "data-v-5a09f021"],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/PrivacyDialog/index.js",
  }
);
require("components/PrivacyDialog/index.js");
