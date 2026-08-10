$gwx3_XC_54 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_54 || [];
    function gz$gwx3_XC_54_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div page-remind-list"]);
        Z([3, "__l"]);
        Z([3, "0c5426f8-0"]);
        Z(z[1]);
        Z([3, "0c5426f8-1"]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([[7], [3, "c"]]);
        Z([3, "r"]);
        Z([3, "0c5426f8-2"]);
        Z(z[5]);
        Z([3, "remindList"]);
        Z([[7], [3, "f"]]);
        Z(z[1]);
        Z([[7], [3, "e"]]);
        Z([3, "0c5426f8-3"]);
        Z(z[12]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_54_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_54 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_54 = true;
    var x = ["./pages/detailSbg/remindStock/remindList.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_54_1();
      var lAQB = _n("view");
      _rz(z, lAQB, "class", 0, e, s, gg);
      var eDQB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(lAQB, eDQB);
      var bEQB = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 3, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(lAQB, bEQB);
      var aBQB = _v();
      _(lAQB, aBQB);
      if (_oz(z, 5, e, s, gg)) {
        aBQB.wxVkey = 1;
        var oFQB = _mz(
          z,
          "remind-list",
          [
            "bind:__l",
            6,
            "bindcheckUserSubscribe",
            1,
            "class",
            2,
            "uI",
            3,
            "uP",
            4,
            "uR",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        _(aBQB, oFQB);
      }
      var tCQB = _v();
      _(lAQB, tCQB);
      if (_oz(z, 12, e, s, gg)) {
        tCQB.wxVkey = 1;
        var xGQB = _mz(
          z,
          "follow-guide",
          ["bind:__l", 13, "bindclose", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(tCQB, xGQB);
      }
      aBQB.wxXCkey = 1;
      aBQB.wxXCkey = 3;
      tCQB.wxXCkey = 1;
      tCQB.wxXCkey = 3;
      _(r, lAQB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_54";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_54();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/remindStock/remindList.wxml"] = [
    $gwx3_XC_54,
    "./pages/detailSbg/remindStock/remindList.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/remindStock/remindList.wxml"] = $gwx3_XC_54(
    "./pages/detailSbg/remindStock/remindList.wxml"
  );
__wxRoute = "pages/detailSbg/remindStock/remindList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/remindStock/remindList.js";
define(
  "pages/detailSbg/remindStock/remindList.js",
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
      t = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
      i = require("../@tencent/stock-hq-data/index.js"),
      o = {
        components: {
          remindList: function () {
            return "../../marketSbg/@tencent/stock-remind-setting/remindList.js";
          },
          FollowGuide: function () {
            return "../../asyncCom/components/followGuideType.js";
          },
        },
        provide: function () {
          return { hqBridge: this.hqBridge, isSubscribed: this.isSubscribed };
        },
        setup: function () {
          var i = t.useUserProtocol(),
            o = i.didAgreeUserAgreement,
            n = i.subUserAgreementStatus,
            r = i.unsubUserAgreementStatus;
          e.provide("didAgreeUserAgreement", o),
            e.provide("onCheckUserAgreementStatus", function () {
              var t, i;
              null ==
                (i =
                  null == (t = e.StockBridge.privacyAgreement)
                    ? void 0
                    : t.check) || i.call(t).catch(function () {});
            }),
            n(),
            e.onUnmounted(function () {
              r();
            });
        },
        data: function () {
          return {
            hqBridge: new e.HQBridge(),
            isSubscribed: e.getAccountChatSubscribed(),
            active: !0,
            symbol: "",
            showFollowGuide: !1,
          };
        },
        onLoad: function (t) {
          var o = t.market,
            n = t.scode;
          (this.symbol = i.utils.getSymbol(o, n)),
            e.wx$1.setNavigationBarTitle({ title: "股票提醒" });
        },
        onShow: function () {
          (this.isSubscribed = e.getAccountChatSubscribed()),
            this.active ||
              (this.$refs.remindList &&
                this.$refs.remindList.queryRemindList()),
            (this.active = !0),
            e.querySubscribedByuserinfo(),
            e.ensureScenePrivacyPopup("stock_remind");
        },
        onHide: function () {
          this.active = !1;
        },
        methods: {
          onCheckUserSubscribe: function (t) {
            try {
              if (!this.isSubscribed) {
                e.wx$1.navigateTo({
                  url: "/pages/additional/webview/index?url=".concat(
                    encodeURIComponent(
                      ""
                        .concat(
                          "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat="
                        )
                        .concat("I2w00p000q027")
                    )
                  ),
                });
              }
            } catch (e) {
            } finally {
              t && t(this.isSubscribed);
            }
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("remindList") +
        e.resolveComponent("FollowGuide")
      )();
    var n = e._export_sfc(o, [
      [
        "render",
        function (t, i, o, n, r, s) {
          return {
            a: t.rootFontSize,
            b: e.sr("remindList", "0c5426f8-2"),
            c: e.o(s.onCheckUserSubscribe, 75),
            d: e.p({ symbol: r.symbol }),
            e: e.o(function (e) {
              return (r.showFollowGuide = !1);
            }, 76),
            f: e.p({ show: r.showFollowGuide, stat: "I2w00p000q027" }),
          };
        },
      ],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/detailSbg/remindStock/remindList.js",
  }
);
require("pages/detailSbg/remindStock/remindList.js");
