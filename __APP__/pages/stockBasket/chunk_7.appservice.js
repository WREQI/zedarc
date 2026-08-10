$gwx0_XC_8 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_8 || [];
    function gz$gwx0_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([3, "data-v-f8ed9daf"]);
        Z([3, "f8ed9daf-0"]);
        Z(z[0]);
        Z([[4], [[5], [1, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1;
    }
    function gz$gwx0_XC_8_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_2)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_2;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "false"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "modal-container"]],
              [1, "data-v-a4b66dd3"],
            ],
            [[7], [3, "n"]],
          ],
        ]);
        Z([
          [2, "!"],
          [[7], [3, "m"]],
        ]);
        Z([3, "_div content-container data-v-a4b66dd3"]);
        Z([3, "_div modal-content data-v-a4b66dd3"]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_2);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_8 = true;
    var x = [
      "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.wxml",
      "./pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_8_1();
      var eTI = _v();
      _(r, eTI);
      if (_oz(z, 0, e, s, gg)) {
        eTI.wxVkey = 1;
        var bUI = _mz(
          z,
          "layer-modal",
          [
            "bind:__l",
            1,
            "bindclose",
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
        _(eTI, bUI);
      }
      eTI.wxXCkey = 1;
      eTI.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_8_2();
      var xWI = _mz(
        z,
        "view",
        ["catchtouchmove", 0, "class", 1, "hidden", 1],
        [],
        e,
        s,
        gg
      );
      var oXI = _n("view");
      _rz(z, oXI, "class", 3, e, s, gg);
      var cZI = _n("view");
      _rz(z, cZI, "class", 4, e, s, gg);
      var h1I = _v();
      _(cZI, h1I);
      if (_oz(z, 5, e, s, gg)) {
        h1I.wxVkey = 1;
        var o2I = _n("slot");
        _(h1I, o2I);
      } else {
        h1I.wxVkey = 2;
      }
      h1I.wxXCkey = 1;
      _(oXI, cZI);
      var fYI = _v();
      _(oXI, fYI);
      if (_oz(z, 6, e, s, gg)) {
        fYI.wxVkey = 1;
        var c3I = _v();
        _(fYI, c3I);
        if (_oz(z, 7, e, s, gg)) {
          c3I.wxVkey = 1;
        }
        c3I.wxXCkey = 1;
      }
      fYI.wxXCkey = 1;
      _(xWI, oXI);
      _(r, xWI);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_8();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.wxml"
  ] = [
    $gwx0_XC_8,
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.wxml",
  ];
else
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.wxml"
  ] = $gwx0_XC_8(
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.wxml"
  ] = [
    $gwx0_XC_8,
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.wxml",
  ];
else
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.wxml"
  ] = $gwx0_XC_8(
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.wxml"
  );
__wxRoute =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js";
define(
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js",
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
    var e = require("../../../../../common/vendor.js"),
      o = {
        components: {
          LayerModal: function () {
            return "./layerModal.js";
          },
        },
        inject: ["hqBridge"],
        props: {
          visible: { type: Boolean, default: !1 },
          reportPrefix: { type: String, default: "" },
        },
        emits: ["close", "confirm"],
        watch: {
          visible: function (e) {
            e &&
              this.hqBridge.report(
                "".concat(this.reportPrefix, ".guide_modal_show")
              );
          },
        },
        methods: {
          onCloseHandle: function () {
            this.$emit("close"),
              this.hqBridge.report(
                "".concat(this.reportPrefix, ".guide_modal_close")
              );
          },
          onConfirmHandle: function () {
            this.$emit("confirm"),
              this.hqBridge.report(
                "".concat(this.reportPrefix, ".guide_modal_confirm")
              );
          },
        },
      };
    Array || e.resolveComponent("layer-modal")();
    var t = e._export_sfc(o, [
      [
        "render",
        function (o, t, r, i, n, s) {
          return {
            a: e.o(s.onCloseHandle, 1410),
            b: e.o(s.onConfirmHandle, 1411),
            c: e.p({
              title: "如何查看添加的股单?",
              visible: r.visible,
              "show-close-btn": !0,
              "show-cancel-button": !1,
              "root-class": "btn-fill",
            }),
          };
        },
      ],
      ["__scopeId", "data-v-f8ed9daf"],
    ]);
    wx.createComponent(t);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js",
  }
);
require("pages/stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js");
__wxRoute = "pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.js";
define(
  "pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.js",
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
    var t = require("../../../../../common/vendor.js"),
      o = {
        props: {
          rootClass: { type: [String, Array], default: "" },
          visible: { type: Boolean, default: !1 },
          title: { type: String, default: "欢迎使用" },
          content: { type: String, default: "" },
          showCancelButton: { type: Boolean, default: !0 },
          cancelButtonText: { type: String, default: "取消" },
          confirmButtonText: { type: String, default: "我知道了" },
          isAgreePrivacyAuthorization: { type: Boolean, default: !1 },
          showModalButtons: { type: Boolean, default: !0 },
          showCloseBtn: { type: Boolean, default: !1 },
        },
        methods: {
          onCancel: function () {
            this.$emit("cancel");
          },
          onConfirm: function () {
            this.$emit("confirm");
          },
          onClose: function () {
            this.$emit("close");
          },
        },
      },
      n = t._export_sfc(o, [
        [
          "render",
          function (o, n, e, i, r, a) {
            return t.e(
              {
                a: t.t(e.title),
                b: t.o(function () {
                  return a.onClose && a.onClose.apply(a, arguments);
                }, 2287),
                c: t.t(e.content),
                d: e.showModalButtons,
              },
              e.showModalButtons
                ? t.e(
                    { e: e.showCancelButton },
                    e.showCancelButton
                      ? {
                          f: t.t(e.cancelButtonText),
                          g: t.o(function () {
                            return a.onCancel && a.onCancel.apply(a, arguments);
                          }, 2288),
                        }
                      : {},
                    { h: e.isAgreePrivacyAuthorization },
                    e.isAgreePrivacyAuthorization
                      ? {
                          i: t.t(e.confirmButtonText),
                          j: t.o(function () {
                            return (
                              a.onConfirm && a.onConfirm.apply(a, arguments)
                            );
                          }, 2289),
                        }
                      : {
                          k: t.t(e.confirmButtonText),
                          l: t.o(function () {
                            return (
                              a.onConfirm && a.onConfirm.apply(a, arguments)
                            );
                          }, 2290),
                        }
                  )
                : {},
              { m: e.visible, n: t.n(e.rootClass) }
            );
          },
        ],
        ["__scopeId", "data-v-a4b66dd3"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.js",
  }
);
require("pages/stockBasket/@tencent/wzq-lite-basket/components/layerModal.js");
