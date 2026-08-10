$gwx16_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx16_XC_4 || [];
    function gz$gwx16_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx16_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx16_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx16_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "data-v-b2b5efc2"]], [1, "container"]],
              [[7], [3, "s"]],
            ],
            [[7], [3, "t"]],
          ],
        ]);
        Z([[7], [3, "v"]]);
        Z([3, "__l"]);
        Z([3, "data-v-b2b5efc2"]);
        Z([3, "b2b5efc2-0"]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "b2b5efc2-1"]);
        Z([[7], [3, "d"]]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z(z[3]);
        Z([
          [2, "!"],
          [[7], [3, "b"]],
        ]);
        Z([3, "b2b5efc2-2"]);
        Z(z[8]);
        Z([[7], [3, "n"]]);
        Z([3, "scroll-wrapper data-v-b2b5efc2"]);
        Z([
          [2, "!"],
          [[7], [3, "l"]],
        ]);
        Z([[7], [3, "m"]]);
        Z([1, true]);
        Z(z[19]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "j"]]);
        Z([3, "r data-v-b2b5efc2"]);
        Z([3, "b2b5efc2-3"]);
        Z([[7], [3, "k"]]);
        Z([3, "dailyReport"]);
        Z(z[2]);
        Z(z[27]);
        Z([3, "b2b5efc2-4"]);
        Z([3, "_navBar"]);
        Z([[7], [3, "p"]]);
        Z([[7], [3, "r"]]);
        Z(z[2]);
        Z([[7], [3, "q"]]);
        Z(z[3]);
        Z([3, "b2b5efc2-5"]);
        Z(z[36]);
      })(__WXML_GLOBAL__.ops_cached.$gwx16_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx16_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx16_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx16_XC_4 = true;
    var x = ["./pages/report/daily/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx16_XC_4_1();
      var oVB = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var fYB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oVB, fYB);
      var cZB = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 5, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oVB, cZB);
      var xWB = _v();
      _(oVB, xWB);
      if (_oz(z, 8, e, s, gg)) {
        xWB.wxVkey = 1;
        var h1B = _mz(
          z,
          "st-status",
          [
            "bind:__l",
            9,
            "bindhandleError",
            1,
            "class",
            2,
            "data-c-h",
            3,
            "uI",
            4,
            "uP",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        _(xWB, h1B);
      }
      var o2B = _mz(
        z,
        "scroll-view",
        [
          "bindscroll",
          15,
          "class",
          1,
          "hidden",
          2,
          "scrollTop",
          3,
          "scrollWithAnimation",
          4,
          "scrollY",
          5,
        ],
        [],
        e,
        s,
        gg
      );
      var c3B = _v();
      _(o2B, c3B);
      if (_oz(z, 21, e, s, gg)) {
        c3B.wxVkey = 1;
        var o4B = _mz(
          z,
          "daily-report",
          [
            "bind:__l",
            22,
            "bindloadFailed",
            1,
            "bindloadSuccess",
            2,
            "bindscrollInto",
            3,
            "bindshowProfilePop",
            4,
            "class",
            5,
            "uI",
            6,
            "uP",
            7,
            "uR",
            8,
          ],
          [],
          e,
          s,
          gg
        );
        _(c3B, o4B);
      }
      c3B.wxXCkey = 1;
      c3B.wxXCkey = 3;
      _(oVB, o2B);
      var l5B = _mz(
        z,
        "nav-bar",
        ["bind:__l", 31, "class", 1, "uI", 2, "uR", 3],
        [],
        e,
        s,
        gg
      );
      _(oVB, l5B);
      var oXB = _v();
      _(oVB, oXB);
      if (_oz(z, 35, e, s, gg)) {
        oXB.wxVkey = 1;
        var a6B = _v();
        _(oXB, a6B);
        if (_oz(z, 36, e, s, gg)) {
          a6B.wxVkey = 1;
          var t7B = _mz(
            z,
            "profile-pop",
            [
              "bind:__l",
              37,
              "bindhideProfilePop",
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
          _(a6B, t7B);
        }
        a6B.wxXCkey = 1;
        a6B.wxXCkey = 3;
      }
      xWB.wxXCkey = 1;
      xWB.wxXCkey = 3;
      oXB.wxXCkey = 1;
      oXB.wxXCkey = 3;
      _(r, oVB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx16_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx16_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/report/daily/main.wxml"] = [
    $gwx16_XC_4,
    "./pages/report/daily/main.wxml",
  ];
else
  __wxAppCode__["pages/report/daily/main.wxml"] = $gwx16_XC_4(
    "./pages/report/daily/main.wxml"
  );
__wxRoute = "pages/report/daily/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/report/daily/main.js";
define(
  "pages/report/daily/main.js",
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
      t = function (e, t, r) {
        return new Promise(function (n, o) {
          var i = function (e) {
              try {
                a(r.next(e));
              } catch (e) {
                o(e);
              }
            },
            s = function (e) {
              try {
                a(r.throw(e));
              } catch (e) {
                o(e);
              }
            },
            a = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(i, s);
            };
          a((r = r.apply(e, t)).next());
        });
      },
      r = require("../../../common/vendor.js"),
      n = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
      o = require("../@tencent/stock-crypto-modules-hq/src/config.js"),
      i = getApp().globalData,
      s = {
        components: {
          dailyReport: function () {
            return "../../reportSbg/@tencent/stock-daily-report/components/stock-daily-report/defaultWZQ.js".then(
              function (e) {
                return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRhaWx5LXJlcG9ydC9jb21wb25lbnRzL3N0b2NrLWRhaWx5LXJlcG9ydC9kZWZhdWx0V1pRLnZ1ZQ;
              }
            );
          },
          NavBar: function () {
            return "../../asyncCom/components/navBar/index.js";
          },
          profilePop: function () {
            return "../../newsSbg/@tencent/stock-sq/src/source/profilePop/index.js";
          },
        },
        setup: function (e) {
          var t = n.useUserProtocol(),
            o = t.didAgreeUserAgreement,
            i = t.subUserAgreementStatus,
            s = t.unsubUserAgreementStatus;
          return (
            r.provide("didAgreeUserAgreement", o),
            r.provide("onCheckUserAgreementStatus", function () {
              var e, t;
              null ==
                (t =
                  null == (e = r.StockBridge.privacyAgreement)
                    ? void 0
                    : e.check) || t.call(e).catch(function () {});
            }),
            r.provide("stockBridge", r.StockBridge),
            {
              didAgreeUserAgreement: o,
              subUserAgreementStatus: i,
              unsubUserAgreementStatus: s,
            }
          );
        },
        data: function () {
          return {
            dailyid: null,
            from: null,
            skin: r.wx$1.getStorageSync("user/skin") || "white",
            userinfo: null,
            scrollTop: 0,
            specifiedTop: -1,
            shareTitle: null,
            reportInfo: null,
            isDataReady: !1,
            requestFailed: !1,
            profilePopParams: null,
          };
        },
        onLoad: function (e) {
          var t = this;
          i.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          });
          var r = e.id,
            n = e.from,
            o = e.report_info;
          (this.dailyid = r),
            (this.from = n),
            (this.reportInfo = o),
            this.getAuth(),
            this.subUserAgreementStatus();
        },
        onUnload: function () {
          this.unsubUserAgreementStatus();
        },
        onShow: function () {
          var e;
          try {
            this.isDataReady &&
              (null == (e = this.$refs.dailyReport) || e.mpOnShow());
          } catch (e) {}
        },
        onShareTimeline: function () {
          var e = this.dailyid;
          if (e) {
            var t = null;
            return (
              "01" === e.substr(-2)
                ? (t =
                    "https://st.gtimg.com/design/94a0629f7bcb7e052e1318c0067d64c3.png")
                : "02" === e.substr(-2) &&
                  (t =
                    "https://st.gtimg.com/design/ed85ce29ba323effb885351cb3aee747.png"),
              {
                title: this.shareTitle,
                query: "id=".concat(e, "&from=timeline"),
                imageUrl: t,
              }
            );
          }
        },
        computed: {
          pageStatus: function () {
            return this.isDataReady || this.requestFailed
              ? !this.isDataReady && this.requestFailed
                ? r.COMMON_PAGE_STATUS.ERROR
                : ""
              : r.COMMON_PAGE_STATUS.LOADING;
          },
        },
        methods: {
          getAuth: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var n, i, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = r.login.getLoginInfo() || {}),
                            (i = n.qluin),
                            (s = n.qlskey),
                            !i || !s)
                          ) {
                            e.next = 5;
                            break;
                          }
                          (this.userinfo = {
                            qlskey: s,
                            qluin: i,
                            qlappid: o.APPIDENUM.mpwzq,
                            appid: o.APPIDENUM.mpwzq,
                            openid: i,
                            fskey: s,
                          }),
                            (e.next = 17);
                          break;
                        case 5:
                          if ("timeline" === this.from) {
                            e.next = 16;
                            break;
                          }
                          return (e.prev = 6), (e.next = 9), this.reLogin();
                        case 9:
                          this.getAuth(), (e.next = 14);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(6));
                        case 14:
                          e.next = 17;
                          break;
                        case 16:
                          this.userinfo = {
                            qlappid: o.APPIDENUM.mpwzq,
                            appid: o.APPIDENUM.mpwzq,
                          };
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this,
                  [[6, 12]]
                );
              })
            );
          },
          scroll: function (e) {
            var t, r;
            try {
              var n =
                (null == (t = null == e ? void 0 : e.detail)
                  ? void 0
                  : t.scrollTop) || 0;
              (this.scrollTop = n),
                null == (r = this.$refs.dailyReport) || r.onScroll(n);
            } catch (e) {}
          },
          scrollInto: function (e) {
            this.specifiedTop = e;
          },
          reLogin: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (r.login.isLogin()) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", r.login.login());
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          loadSuccess: function (e) {
            if (e) {
              var t = e.agwp,
                r = e.agsp,
                n = this.dailyid;
              if (!n) return;
              "01" === n.substr(-2)
                ? (this.shareTitle = t.title)
                : "02" === n.substr(-2) && (this.shareTitle = r.title),
                (this.isDataReady = !0),
                (this.requestFailed = !1);
            }
          },
          loadFailed: function () {
            (this.isDataReady = !1), (this.requestFailed = !0);
          },
          onErrorRetry: function () {
            var e;
            (this.isDataReady = !1),
              (this.requestFailed = !1),
              null == (e = this.$refs.dailyReport) || e.loadData();
          },
          showProfilePop: function (e) {
            this.profilePopParams = e;
          },
          hideProfilePop: function () {
            this.profilePopParams = null;
          },
        },
      };
    Array ||
      (
        r.resolveComponent("mp-privacy-dialog") +
        r.resolveComponent("stock-privacy-dialog") +
        r.resolveComponent("st-status") +
        r.resolveComponent("dailyReport") +
        r.resolveComponent("NavBar") +
        r.resolveComponent("profilePop")
      )();
    var a = r._export_sfc(s, [
      [
        "render",
        function (e, t, n, o, i, s) {
          return r.e(
            {
              a: e.rootFontSize,
              b: !i.isDataReady,
              c: r.o(s.onErrorRetry, 328),
              d: r.p({ type: s.pageStatus }),
              e: i.dailyid && i.userinfo,
            },
            i.dailyid && i.userinfo
              ? {
                  f: r.sr("dailyReport", "b2b5efc2-3"),
                  g: r.o(s.scrollInto, 329),
                  h: r.o(s.loadSuccess, 330),
                  i: r.o(s.loadFailed, 331),
                  j: r.o(s.showProfilePop, 332),
                  k: r.p({
                    dailyid: i.dailyid,
                    "report-info": i.reportInfo,
                    "p-userinfo": i.userinfo,
                    "scroll-top": i.scrollTop,
                    theme: i.skin,
                  }),
                }
              : {},
            {
              l: i.isDataReady,
              m: i.specifiedTop,
              n: r.o(function () {
                return s.scroll && s.scroll.apply(s, arguments);
              }, 333),
              o: r.sr("_navBar", "b2b5efc2-4"),
              p: i.profilePopParams,
            },
            i.profilePopParams
              ? {
                  q: r.o(s.hideProfilePop, 334),
                  r: r.p({
                    pageType: "dailyStock",
                    userStateData: i.profilePopParams.userStateData,
                    content: i.profilePopParams.content,
                    defaultHeadImage: i.profilePopParams.defaultHeadImage,
                    defaultNickname: i.profilePopParams.defaultNickname,
                    needBottomInset: !0,
                  }),
                }
              : {},
            {
              s: r.n(i.isDataReady ? "" : "loading-background"),
              t: r.n("black" == i.skin ? "skin-black black" : "skin-white"),
              v: i.skin,
            }
          );
        },
      ],
      ["__scopeId", "data-v-b2b5efc2"],
    ]);
    (s.__runtimeHooks = 7), wx.createPage(a);
  },
  { isPage: true, isComponent: true, currentFile: "pages/report/daily/main.js" }
);
require("pages/report/daily/main.js");
