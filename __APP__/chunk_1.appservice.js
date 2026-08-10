$gwx_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
    function gz$gwx_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([3, "data-v-a5180d9c"]);
        Z([3, "a5180d9c-0"]);
        Z(z[0]);
        Z([[4], [[5], [1, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
    var x = ["./components/ChoosePrivacyModal.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_1_1();
      var oD = _v();
      _(r, oD);
      if (_oz(z, 0, e, s, gg)) {
        oD.wxVkey = 1;
        var fE = _mz(
          z,
          "layer-modal",
          [
            "bind:__l",
            1,
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
        _(oD, fE);
      }
      oD.wxXCkey = 1;
      oD.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/ChoosePrivacyModal.wxml"] = [
    $gwx_XC_1,
    "./components/ChoosePrivacyModal.wxml",
  ];
else
  __wxAppCode__["components/ChoosePrivacyModal.wxml"] = $gwx_XC_1(
    "./components/ChoosePrivacyModal.wxml"
  );
__wxRoute = "components/ChoosePrivacyModal";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/ChoosePrivacyModal.js";
define(
  "components/ChoosePrivacyModal.js",
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
    var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../common/vendor.js"),
      n = require("../api/zxgApi.js"),
      o = {
        components: {
          LayerModal: function () {
            return "./LayerModal/index.js";
          },
        },
        props: {
          hasBottomBar: { type: Boolean, default: !0 },
          value: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            syncDesc: "整合微信版/APP/小程序的自选股，集中查看",
            skin: t.wx$1.getStorageSync("user/skin") || "white",
          };
        },
        watch: {
          value: {
            handler: function (e) {
              e && (this.skin = t.wx$1.getStorageSync("user/skin") || "white");
            },
            immediate: !0,
          },
        },
        mounted: function () {
          t.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          );
        },
        methods: {
          handleMoreInfo: function () {
            t.StockBridge.report("base.personal.privacy_more_info");
            var e = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://gu.qq.com/resource/pravicyChoose/mp.html"
              )
            );
            t.wx$1.navigateTo({ url: e });
          },
          handleProtocolStatusChange: function (e) {
            this.isInit = "init" === e;
          },
          onCancel: function () {
            this.$emit("input", !1),
              this.$emit("cancel"),
              this.report("choose_refuse"),
              this.signChooseSync("0");
          },
          onConfirm: function () {
            return (
              (t = this),
              null,
              (n = e().mark(function t() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          this.$emit("input", !1),
                            this.$emit("confirm"),
                            this.signChooseSync("1"),
                            this.report("choose_agree");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })),
              new Promise(function (e, o) {
                var r = function (e) {
                    try {
                      a(n.next(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  i = function (e) {
                    try {
                      a(n.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  a = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, i);
                  };
                a((n = n.apply(t, null)).next());
              })
            );
            var t, n;
          },
          signChooseSync: function (e) {
            var o = this;
            n.zxgApi.setSyncStatus({ status: e }).then(function (n) {
              var r;
              1 == +(null == (r = n.mergeMsg) ? void 0 : r.msgType)
                ? t.wx$1.showModal({
                    title: "分组个数超出限制",
                    content: "您的自建分组超出上限（50），请移除 ".concat(
                      n.mergeMsg.needRemoveGroupNum,
                      " 个分组重试"
                    ),
                    confirmText: "我知道了",
                    confirmColor: "#E63535",
                    showCancel: !1,
                    success: function (e) {
                      e.confirm &&
                        o.report("choose.policy.error_modal_confirm");
                    },
                  })
                : t.index.$emit("CHOOSE_PRIVACY_POLICY_BAR", {
                    showBar: !1,
                    refresh: 1 == +e,
                  });
            });
          },
          report: function (e) {
            t.Request.reportMTAData({ eventName: "base.personal.".concat(e) });
          },
        },
      };
    Array || t.resolveComponent("layer-modal")();
    var r = t._export_sfc(o, [
      [
        "render",
        function (e, n, o, r, i, a) {
          return {
            a: t.t(i.syncDesc),
            b: t.o(function () {
              return a.handleMoreInfo && a.handleMoreInfo.apply(a, arguments);
            }, 2216),
            c: t.o(a.onConfirm, 2217),
            d: t.o(a.onCancel, 2218),
            e: t.p({
              skin: i.skin,
              title: "一键同步自选股",
              "cancel-button-text": "稍后再说",
              "confirm-button-text": "同意并继续",
              visible: o.value,
              "has-bottom-bar": o.hasBottomBar,
              "is-agree-privacy-authorization": !0,
              "root-class": "account",
            }),
            f: t.n("skin-" + i.skin),
          };
        },
      ],
      ["__scopeId", "data-v-a5180d9c"],
    ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/ChoosePrivacyModal.js",
  }
);
require("components/ChoosePrivacyModal.js");
