$gwx0_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];
    function gz$gwx0_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div stock-basket-wrapper"]);
        Z([3, "__l"]);
        Z([3, "1c7dec2b-0"]);
        Z(z[1]);
        Z([3, "1c7dec2b-1"]);
        Z([3, "bacsket-list"]);
        Z([1, true]);
        Z([[7], [3, "b"]]);
        Z([3, "_div scroll-container"]);
        Z([3, "basketData"]);
        Z([[7], [3, "c"]]);
        Z([3, "d"]);
        Z([[6], [[7], [3, "basketData"]], [3, "c"]]);
        Z(z[1]);
        Z([[6], [[7], [3, "basketData"]], [3, "a"]]);
        Z([[6], [[7], [3, "basketData"]], [3, "b"]]);
        Z(z[12]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "f"]]);
        Z(z[1]);
        Z([[7], [3, "g"]]);
        Z([3, "1c7dec2b-3"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "j"]]);
        Z(z[1]);
        Z([[7], [3, "i"]]);
        Z([3, "1c7dec2b-4"]);
        Z(z[23]);
        Z([[7], [3, "m"]]);
        Z(z[1]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "k"]]);
        Z([3, "1c7dec2b-5"]);
        Z(z[28]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_2 = true;
    var x = ["./pages/stockBasket/square.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_2_1();
      var fID = _n("view");
      _rz(z, fID, "class", 0, e, s, gg);
      var oLD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(fID, oLD);
      var cMD = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 3, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(fID, cMD);
      var oND = _mz(z, "scroll-view", ["class", 5, "scrollY", 1], [], e, s, gg);
      var lOD = _v();
      _(oND, lOD);
      if (_oz(z, 7, e, s, gg)) {
        lOD.wxVkey = 1;
        var aPD = _n("view");
        _rz(z, aPD, "class", 8, e, s, gg);
        var eRD = _v();
        _(aPD, eRD);
        var bSD = function (xUD, oTD, oVD, gg) {
          var cXD = _v();
          _(oVD, cXD);
          if (_oz(z, 12, xUD, oTD, gg)) {
            cXD.wxVkey = 1;
            var hYD = _mz(
              z,
              "basket-overview",
              ["bind:__l", 13, "bindheaderToggleClick", 1, "uI", 2, "uP", 3],
              [],
              xUD,
              oTD,
              gg
            );
            _(cXD, hYD);
          }
          cXD.wxXCkey = 1;
          cXD.wxXCkey = 3;
          return oVD;
        };
        eRD.wxXCkey = 4;
        _2z(z, 10, bSD, e, s, gg, eRD, "basketData", "index", "d");
        var tQD = _v();
        _(aPD, tQD);
        if (_oz(z, 17, e, s, gg)) {
          tQD.wxVkey = 1;
        }
        tQD.wxXCkey = 1;
        _(lOD, aPD);
      } else if (_oz(z, 18, e, s, gg)) {
        lOD.wxVkey = 2;
        var oZD = _mz(
          z,
          "st-status",
          ["bind:__l", 19, "bindhandleError", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(lOD, oZD);
      }
      lOD.wxXCkey = 1;
      lOD.wxXCkey = 3;
      lOD.wxXCkey = 3;
      _(fID, oND);
      var cJD = _v();
      _(fID, cJD);
      if (_oz(z, 23, e, s, gg)) {
        cJD.wxVkey = 1;
        var c1D = _mz(
          z,
          "privacy-policy-modal",
          ["bind:__l", 24, "bindinput", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(cJD, c1D);
      }
      var hKD = _v();
      _(fID, hKD);
      if (_oz(z, 28, e, s, gg)) {
        hKD.wxVkey = 1;
        var o2D = _mz(
          z,
          "basket-guide-modal",
          ["bind:__l", 29, "bindclose", 1, "bindconfirm", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(hKD, o2D);
      }
      cJD.wxXCkey = 1;
      cJD.wxXCkey = 3;
      hKD.wxXCkey = 1;
      hKD.wxXCkey = 3;
      _(r, fID);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stockBasket/square.wxml"] = [
    $gwx0_XC_2,
    "./pages/stockBasket/square.wxml",
  ];
else
  __wxAppCode__["pages/stockBasket/square.wxml"] = $gwx0_XC_2(
    "./pages/stockBasket/square.wxml"
  );
__wxRoute = "pages/stockBasket/square";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/stockBasket/square.js";
define(
  "pages/stockBasket/square.js",
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
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      i = Object.defineProperty,
      o = Object.defineProperties,
      r = Object.getOwnPropertyDescriptors,
      s = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      n = Object.prototype.propertyIsEnumerable,
      c = function (e, t, o) {
        return t in e
          ? i(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[t] = o);
      },
      u = require("../../common/vendor.js"),
      l = require("@tencent/wzq-lite-basket/api/StockBasketAPI.js"),
      h = new u.HQBridge(),
      d = new l.StockBasketAPI(h);
    getApp().globalData;
    var p = { user_doing: "Ocj00p000h094", strategy: "Ocj00p000h095" },
      g = {
        components: {
          basketOverview: function () {
            return "./@tencent/wzq-lite-basket/components/basketOverview.js";
          },
          PrivacyPolicyModal: function () {
            return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
          },
          basketGuideModal: function () {
            return "./@tencent/wzq-lite-basket/components/basketGuideModal.js";
          },
        },
        provide: function () {
          return {
            hqBridge: this.hqBridge,
            didAgreeUserAgreement: this.didAgreeUserAgreement,
            onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
          };
        },
        data: function () {
          return {
            hqBridge: h,
            currentItem: {},
            basketList: [],
            listType: null,
            isDataReady: !1,
            showLoading: !1,
            requestFailed: !1,
            nomore: !0,
            safeBottom: 0,
            safeTabBar: 0,
            showPrivacyPolicy: !1,
            didAgreeUserAgreement: u.reactive({ value: !0 }),
            firstRequest: !0,
            reportPrefix: "hq.basketlist",
            title: "",
            guideVisible: !1,
            isHstabShow: !1,
          };
        },
        computed: {
          pageStatus: function () {
            return this.isDataReady || this.requestFailed
              ? !this.isDataReady && this.requestFailed
                ? u.COMMON_PAGE_STATUS.ERROR
                : ""
              : u.COMMON_PAGE_STATUS.LOADING;
          },
        },
        created: function () {},
        beforeDestroy: function () {},
        onLoad: function (e) {
          var t, i;
          try {
            var o =
                null == (i = null == (t = getApp()) ? void 0 : t.globalData)
                  ? void 0
                  : i.device,
              r = null == o ? void 0 : o.safeArea,
              s = o.screenHeight > r.bottom,
              a = e.__share_flag__;
            (this.isSharePage = 1 == +a),
              (this.safeBottom = s ? 34 : 0),
              (this.safeTabBar = this.isSharePage
                ? (50 * o.screenWidth) / 375
                : 0);
          } catch (e) {}
          this.unsubUserAgreementStatus(), this.initData(e);
        },
        onUnload: function () {
          this.unsubUserAgreementStatus(), this.beforeRouteLeave();
        },
        onShow: function () {
          var e = this;
          (this.isHstabShow = !0),
            this.subUserAgreementStatus(),
            setTimeout(function () {
              e.isDataReady || (e.showLoading = !0);
            }, 500),
            this.firstRequest ? (this.firstRequest = !1) : this.loadList();
        },
        onHide: function () {
          (this.isHstabShow = !1), this.beforeRouteLeave();
        },
        onShareAppMessage: function () {
          var e = p[this.listType];
          return {
            path: "pages/stockBasket/square?".concat(
              "listType="
                .concat(this.listType, "&title=")
                .concat(encodeURIComponent(this.title)),
              "&stat_data=",
              e
            ),
            mtaParams: { category_id: this.listType || "" },
          };
        },
        methods: {
          onHeaderToggleClick: function (e, t) {
            this.guideVisible = t;
          },
          onGuideConfirm: function () {
            this.guideVisible = !1;
          },
          onConfirmModal: function () {},
          checkUserAgreementStatus: function () {
            var e = !0;
            try {
              var t = u.StockBridge.store.protocolStatus;
              "string" == typeof t && (e = "agree" === t);
            } catch (e) {}
            return (this.didAgreeUserAgreement.value = e), e;
          },
          subUserAgreementStatus: function () {
            this.checkUserAgreementStatus() ||
              (this.unsubUserAgreementStatus(),
              u.StockBridge.store.subscribeProtocolStatus(
                this.handleProtocolStatusChange
              ));
          },
          unsubUserAgreementStatus: function () {
            u.StockBridge.store.unsubscribeProtocolStatus(
              this.handleProtocolStatusChange
            );
          },
          handleProtocolStatusChange: function () {
            this.checkUserAgreementStatus();
          },
          onCheckUserAgreementStatus: function () {
            this.didAgreeUserAgreement.vlaue || (this.showPrivacyPolicy = !0);
          },
          onErrorRetry: function () {
            this.loadList();
          },
          initData: function (e) {
            var t = e.title,
              i = e.listType;
            (this.title = t),
              t &&
                u.wx$1.setNavigationBarTitle({
                  title: decodeURIComponent(decodeURIComponent(t)),
                }),
              i && ((this.listType = i), this.loadList());
          },
          beforeRouteLeave: function () {
            this.gdLoopTimer && clearTimeout(this.gdLoopTimer);
          },
          loadList: function () {
            return (
              (i = this),
              null,
              (u = e().mark(function i() {
                var u,
                  l,
                  h,
                  p,
                  g = this;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            d.getBasketDiscover({ list_type: this.listType })
                          );
                        case 3:
                          (u = e.sent),
                            (l = u.data)
                              ? ((this.isDataReady = !0),
                                (this.showLoading = !1),
                                (h = l.list),
                                (p = void 0 === h ? [] : h),
                                (this.basketList = p.map(function (e) {
                                  return (
                                    (i = (function (e, i) {
                                      for (var o in i || (i = {}))
                                        a.call(i, o) && c(e, o, i[o]);
                                      if (s) {
                                        var r,
                                          u = t(s(i));
                                        try {
                                          for (u.s(); !(r = u.n()).done; ) {
                                            o = r.value;
                                            n.call(i, o) && c(e, o, i[o]);
                                          }
                                        } catch (e) {
                                          u.e(e);
                                        } finally {
                                          u.f();
                                        }
                                      }
                                      return e;
                                    })({}, e)),
                                    (u = { column: { id: g.listType } }),
                                    o(i, r(u))
                                  );
                                  var i, u;
                                })),
                                this.loadGdLoopData())
                              : ((this.requestFailed = !0),
                                (this.showLoading = !0)),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            (this.requestFailed = !0),
                            (this.showLoading = !0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  i,
                  this,
                  [[0, 8]]
                );
              })),
              new Promise(function (e, t) {
                var o = function (e) {
                    try {
                      s(u.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  r = function (e) {
                    try {
                      s(u.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  s = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(o, r);
                  };
                s((u = u.apply(i, null)).next());
              })
            );
            var i, u;
          },
          loadGdLoopData: function () {
            var e = this;
            this.gdLoopTimer && clearTimeout(this.gdLoopTimer),
              (this.gdLoopTimer = setTimeout(function () {
                e.loadList();
              }, 15e3));
          },
        },
      };
    Array ||
      (
        u.resolveComponent("mp-privacy-dialog") +
        u.resolveComponent("stock-privacy-dialog") +
        u.resolveComponent("basket-overview") +
        u.resolveComponent("st-status") +
        u.resolveComponent("template") +
        u.resolveComponent("PrivacyPolicyModal") +
        u.resolveComponent("basketGuideModal")
      )();
    var f = u._export_sfc(g, [
      [
        "render",
        function (e, t, i, o, r, s) {
          return u.e(
            { a: e.rootFontSize, b: r.isDataReady },
            r.isDataReady
              ? u.e(
                  {
                    c: u.f(r.basketList, function (e, t, i) {
                      return {
                        a: u.o(s.onHeaderToggleClick, 41, t),
                        b: "1c7dec2b-2-" + i,
                        c: u.p({
                          "is-hstab-show": r.isHstabShow,
                          "report-prefix": r.reportPrefix,
                          "basket-data": e,
                          "is-show-footer": !0,
                          "is-big-radius": !0,
                          "is-bg-white": !0,
                        }),
                        d: t,
                      };
                    }),
                    d: r.basketList && r.basketList.length > 0 && r.nomore,
                  },
                  r.basketList && r.basketList.length > 0 && r.nomore
                    ? { e: "".concat(r.safeBottom + r.safeTabBar, "px") }
                    : {}
                )
              : r.showLoading
              ? { g: u.o(s.onErrorRetry, 42), h: u.p({ type: s.pageStatus }) }
              : {},
            {
              f: r.showLoading,
              i: u.o(function (e) {
                return (r.showPrivacyPolicy = e);
              }, 43),
              j: u.p({ value: r.showPrivacyPolicy }),
              k: u.o(s.onGuideConfirm, 44),
              l: u.o(s.onGuideConfirm, 45),
              m: u.p({
                visible: r.guideVisible,
                "report-prefix": r.reportPrefix,
              }),
            }
          );
        },
      ],
    ]);
    (g.__runtimeHooks = 2), wx.createPage(f);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/stockBasket/square.js",
  }
);
require("pages/stockBasket/square.js");
