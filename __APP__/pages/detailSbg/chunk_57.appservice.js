$gwx3_XC_53 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_53 || [];
    function gz$gwx3_XC_53_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_53_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_53_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_53_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div page-remind-setting data-v-21265751"]);
        Z([3, "__l"]);
        Z([3, "data-v-21265751"]);
        Z([3, "21265751-0"]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "21265751-1"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z([3, "21265751-2"]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_53_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_53_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_53 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_53 = true;
    var x = ["./pages/detailSbg/remindStock/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_53_1();
      var f5PB = _n("view");
      _rz(z, f5PB, "class", 0, e, s, gg);
      var h7PB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(f5PB, h7PB);
      var o8PB = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(f5PB, o8PB);
      var c6PB = _v();
      _(f5PB, c6PB);
      if (_oz(z, 7, e, s, gg)) {
        c6PB.wxVkey = 1;
        var c9PB = _mz(
          z,
          "setting-detail",
          [
            "bind:__l",
            8,
            "bindsubscribeStockRemind",
            1,
            "class",
            2,
            "uI",
            3,
            "uP",
            4,
          ],
          [],
          e,
          s,
          gg
        );
        _(c6PB, c9PB);
      }
      c6PB.wxXCkey = 1;
      c6PB.wxXCkey = 3;
      _(r, f5PB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_53";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_53();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/remindStock/index.wxml"] = [
    $gwx3_XC_53,
    "./pages/detailSbg/remindStock/index.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/remindStock/index.wxml"] = $gwx3_XC_53(
    "./pages/detailSbg/remindStock/index.wxml"
  );
__wxRoute = "pages/detailSbg/remindStock/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/remindStock/index.js";
define(
  "pages/detailSbg/remindStock/index.js",
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
      t = require("../../../common/vendor.js"),
      r = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
      o = {
        components: {
          SettingDetail: function () {
            return "../../marketSbg/@tencent/stock-remind-setting/settingPage.js".then(
              function (e) {
                return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXJlbWluZC1zZXR0aW5nL3NldHRpbmdQYWdlLnZ1ZQ;
              }
            );
          },
        },
        provide: function () {
          return { hqBridge: this.hqBridge };
        },
        setup: function () {
          var e = r.useUserProtocol(),
            o = e.didAgreeUserAgreement,
            n = e.subUserAgreementStatus,
            s = e.unsubUserAgreementStatus;
          t.provide("didAgreeUserAgreement", o),
            t.provide("onCheckUserAgreementStatus", function () {
              var e, r;
              null ==
                (r =
                  null == (e = t.StockBridge.privacyAgreement)
                    ? void 0
                    : e.check) || r.call(e).catch(function () {});
            }),
            n(),
            t.onUnmounted(function () {
              s();
            });
        },
        data: function () {
          return {
            hqBridge: new t.HQBridge(),
            symbol: "",
            market: "",
            scode: "",
            stockType: "",
            stockName: "",
            stockOverView: {},
            isThreshold: !1,
            isSubscribed: !!t.getAccountChatSubscribed(),
          };
        },
        onShow: function () {
          t.querySubscribedByuserinfo(),
            (this.isSubscribed = !!t.getAccountChatSubscribed()),
            t.ensureScenePrivacyPopup("stock_remind");
        },
        onLoad: function (e) {
          var t = e.symbol,
            r = e.market,
            o = e.scode,
            n = e.stockType,
            s = e.stockName,
            c = e.dqj,
            i = e.zsj,
            u = e.zdf,
            a = e.isThreshold;
          (this.symbol = t),
            (this.market = r),
            (this.scode = o),
            (this.stockType = n),
            (this.stockName = s ? decodeURIComponent(s) : ""),
            (this.stockOverView = { dqj: c, zsj: i, zdf: u }),
            (this.isThreshold = a);
        },
        methods: {
          subscribeStockRemind: function (r) {
            return (
              (o = this),
              null,
              (n = e().mark(function o() {
                var n, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.getAccountChatSubscribed()),
                            (e.prev = 1),
                            (e.t0 = t),
                            (e.next = 5),
                            t.getTemplateId("price_remind")
                          );
                        case 5:
                          return (
                            (e.t1 = e.sent),
                            (e.next = 8),
                            e.t0.subscribe.call(e.t0, "price_remind", e.t1)
                          );
                        case 8:
                          "accept" === (s = e.sent) || "reject" === s
                            ? "function" == typeof r && r(n)
                            : t.wx$1.showToast({
                                title: "订阅失败",
                                icon: "error",
                                duration: 1500,
                              }),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t2 = e.catch(1)),
                            "function" == typeof r && r(n);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  o,
                  null,
                  [[1, 12]]
                );
              })),
              new Promise(function (e, t) {
                var r = function (e) {
                    try {
                      c(n.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  s = function (e) {
                    try {
                      c(n.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  c = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, s);
                  };
                c((n = n.apply(o, null)).next());
              })
            );
            var o, n;
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog") +
        t.resolveComponent("SettingDetail")
      )();
    var n = t._export_sfc(o, [
      [
        "render",
        function (e, r, o, n, s, c) {
          return t.e(
            { a: e.rootFontSize, b: s.scode },
            s.scode
              ? {
                  c: t.o(c.subscribeStockRemind, 74),
                  d: t.p({
                    symbol: s.symbol,
                    market: s.market,
                    scode: s.scode,
                    "stock-type": s.stockType,
                    "stock-name": s.stockName,
                    "stock-over-view": s.stockOverView,
                    "is-threshold": s.isThreshold,
                    "is-subscribed": s.isSubscribed,
                    "follow-stat": "IfA00p000q028",
                  }),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-21265751"],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/detailSbg/remindStock/index.js",
  }
);
require("pages/detailSbg/remindStock/index.js");
