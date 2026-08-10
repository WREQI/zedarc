$gwx_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
    function gz$gwx_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
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
              [1, "data-v-8ed7e908"],
            ],
            [[7], [3, "p"]],
          ],
        ]);
        Z([
          [2, "!"],
          [[7], [3, "o"]],
        ]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "content-container"]],
              [1, "data-v-8ed7e908"],
            ],
            [[7], [3, "n"]],
          ],
        ]);
        Z([[7], [3, "b"]]);
        Z([3, "modal-content data-v-8ed7e908"]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
    var x = ["./components/LayerModal/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_11_1();
      var eZC = _mz(
        z,
        "view",
        ["catchtouchmove", 0, "class", 1, "hidden", 1],
        [],
        e,
        s,
        gg
      );
      var b1C = _n("view");
      _rz(z, b1C, "class", 3, e, s, gg);
      var o2C = _v();
      _(b1C, o2C);
      if (_oz(z, 4, e, s, gg)) {
        o2C.wxVkey = 1;
      }
      var o4C = _n("view");
      _rz(z, o4C, "class", 5, e, s, gg);
      var f5C = _v();
      _(o4C, f5C);
      if (_oz(z, 6, e, s, gg)) {
        f5C.wxVkey = 1;
        var c6C = _n("slot");
        _(f5C, c6C);
      } else {
        f5C.wxVkey = 2;
      }
      f5C.wxXCkey = 1;
      _(b1C, o4C);
      var x3C = _v();
      _(b1C, x3C);
      if (_oz(z, 7, e, s, gg)) {
        x3C.wxVkey = 1;
        var h7C = _v();
        _(x3C, h7C);
        if (_oz(z, 8, e, s, gg)) {
          h7C.wxVkey = 1;
        }
        h7C.wxXCkey = 1;
      }
      o2C.wxXCkey = 1;
      x3C.wxXCkey = 1;
      _(eZC, b1C);
      _(r, eZC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/LayerModal/index.wxml"] = [
    $gwx_XC_11,
    "./components/LayerModal/index.wxml",
  ];
else
  __wxAppCode__["components/LayerModal/index.wxml"] = $gwx_XC_11(
    "./components/LayerModal/index.wxml"
  );
__wxRoute = "components/LayerModal/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/LayerModal/index.js";
define(
  "components/LayerModal/index.js",
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
    var t = require("../../common/vendor.js"),
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
          hasBottomBar: { type: Boolean, default: !0 },
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
          function (o, n, e, a, r, i) {
            return t.e(
              { a: t.t(e.title), b: e.showCloseBtn },
              e.showCloseBtn
                ? {
                    c: t.o(function () {
                      return i.onClose && i.onClose.apply(i, arguments);
                    }, 1633),
                  }
                : {},
              { d: t.t(e.content), e: e.showModalButtons },
              e.showModalButtons
                ? t.e(
                    { f: e.showCancelButton },
                    e.showCancelButton
                      ? {
                          g: t.t(e.cancelButtonText),
                          h: t.o(function () {
                            return i.onCancel && i.onCancel.apply(i, arguments);
                          }, 1634),
                        }
                      : {},
                    { i: e.isAgreePrivacyAuthorization },
                    e.isAgreePrivacyAuthorization
                      ? {
                          j: t.t(e.confirmButtonText),
                          k: t.o(function () {
                            return (
                              i.onConfirm && i.onConfirm.apply(i, arguments)
                            );
                          }, 1635),
                        }
                      : {
                          l: t.t(e.confirmButtonText),
                          m: t.o(function () {
                            return (
                              i.onConfirm && i.onConfirm.apply(i, arguments)
                            );
                          }, 1636),
                        }
                  )
                : {},
              {
                n: t.n(e.hasBottomBar ? "has-bottom-bar" : ""),
                o: e.visible,
                p: t.n(e.rootClass),
              }
            );
          },
        ],
        ["__scopeId", "data-v-8ed7e908"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/LayerModal/index.js",
  }
);
require("components/LayerModal/index.js");
