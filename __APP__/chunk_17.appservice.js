$gwx_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
    function gz$gwx_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div top-bar-container data-v-1a86a5e7"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "h"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
    var x = ["./pages/index/topbar/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_9_1();
      var oPC = _n("view");
      _rz(z, oPC, "class", 0, e, s, gg);
      var fQC = _v();
      _(oPC, fQC);
      if (_oz(z, 1, e, s, gg)) {
        fQC.wxVkey = 1;
      }
      var cRC = _v();
      _(oPC, cRC);
      if (_oz(z, 2, e, s, gg)) {
        cRC.wxVkey = 1;
      }
      fQC.wxXCkey = 1;
      cRC.wxXCkey = 1;
      _(r, oPC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/topbar/index.wxml"] = [
    $gwx_XC_9,
    "./pages/index/topbar/index.wxml",
  ];
else
  __wxAppCode__["pages/index/topbar/index.wxml"] = $gwx_XC_9(
    "./pages/index/topbar/index.wxml"
  );
__wxRoute = "pages/index/topbar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/topbar/index.js";
define(
  "pages/index/topbar/index.js",
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
    var e = require("../../../@babel/runtime/helpers/toConsumableArray");
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      i = function (e, t, i) {
        return new Promise(function (n, r) {
          var o = function (e) {
              try {
                c(i.next(e));
              } catch (e) {
                r(e);
              }
            },
            a = function (e) {
              try {
                c(i.throw(e));
              } catch (e) {
                r(e);
              }
            },
            c = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
            };
          c((i = i.apply(e, t)).next());
        });
      },
      n = require("../../../common/vendor.js"),
      r = {
        choose: {
          click: "choose.search.bar_click",
          exposure: "choose.search.bar_exposure",
        },
        hq: {
          click: "hq.search.bar_click",
          exposure: "hq.search.bar_exposure",
        },
        news: {
          click: "news.search.bar_click",
          exposure: "news.search.bar_exposure",
        },
        discover: {
          click: "discover.search.bar_click",
          exposure: "discover.search.bar_exposure",
        },
      },
      o = getApp().globalData,
      a = "lite/search-ai-new-user",
      c = "lite/search-ai-displayed-text",
      s = 0,
      l = {
        options: { styleIsolation: "shared" },
        inject: ["hqBridge"],
        props: ["from", "hideTitle", "hideSearch", "premoteMixin", "isShow"],
        data: function () {
          var e, t;
          return {
            safeTop: 0,
            searchTop: 0,
            fixWidth: 0,
            showAddXcx: !1,
            allQuestion: [],
            dynamicPlaceholder: "",
            isAINewUser: n.StockBridge.getStorage(a) || {
              isNewUser: !0,
              time: 0,
            },
            isPC:
              (null ==
              (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
                ? void 0
                : t.IS_PCWEIXIN) || !1,
          };
        },
        computed: {
          fixStyle: function () {
            return "width: ".concat(this.fixWidth, "px;");
          },
          fixPlaceholderStyle: function () {
            return "width: ".concat(this.fixWidth - o.rpxToPx(200), "px;");
          },
          coverStyle: function () {
            return "width: 100%;";
          },
          isDevelopVersion: function () {
            var e, t;
            return (
              n.wx$1.getAccountInfoSync &&
              "develop" ===
                (null ==
                (t =
                  null == (e = n.wx$1.getAccountInfoSync())
                    ? void 0
                    : e.miniProgram)
                  ? void 0
                  : t.envVersion)
            );
          },
        },
        watch: {
          isShow: function (e) {
            var t = this;
            e
              ? o.init(function () {
                  t.updateShownText(), t.handleAIPlaceHolder();
                })
              : clearTimeout(s);
          },
        },
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            e.getSafeArea();
          });
        },
        beforeDestroy: function () {
          clearTimeout(s);
        },
        onPageShow: function () {
          o.actData.isAddMyXcxEnable && (this.showAddXcx = !0);
        },
        methods: {
          handleAIPlaceHolder: function () {
            return i(
              this,
              null,
              t().mark(function e() {
                var i,
                  r,
                  o,
                  c,
                  l,
                  h,
                  u = this;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (s && clearTimeout(s),
                            !(i = n.StockBridge.getStorage(a)) || i.isNewUser)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (e.prev = 3),
                            (r = n.login.getLoginInfo()),
                            (e.next = 7),
                            n.StockBridge.request(
                              "https://proxy.finance.qq.com/cgi/cgi-bin/smartbox/index",
                              "GET",
                              {
                                check: 11,
                                app: "wzqxcx",
                                appid: "wx4ffb369b6881ee5e",
                                openid: r.qluin,
                                fskey: r.qlskey,
                              }
                            )
                          );
                        case 7:
                          if ((o = e.sent)) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return");
                        case 10:
                          (c = o.aiIndex || {}),
                            (l = c.allQuestion),
                            (h = void 0 === l ? [] : l),
                            (this.allQuestion = Array.from(new Set(h))),
                            this.allQuestion.length > 0 &&
                              !this.dynamicPlaceholder &&
                              this.updateShownText(),
                            this.allQuestion.length > 0 &&
                              n.StockBridge.setStorage(
                                "lite/search-ai-all-question",
                                this.allQuestion
                              ),
                            (e.next = 16);
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(3));
                        case 16:
                          s = setTimeout(function () {
                            u.handleAIPlaceHolder();
                          }, 6e5);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[3, 14]]
                );
              })
            );
          },
          updateShownText: function () {
            var t;
            if (null == (t = this.allQuestion) ? void 0 : t.length) {
              var i = n.StockBridge.getStorage(c) || [],
                r = this.allQuestion.filter(function (e) {
                  return !i.includes(e);
                }),
                o = r.length > 0 ? r[0] : this.allQuestion[0],
                a = e(i);
              a.length >= this.allQuestion.length && (a = a.slice(1)),
                (a = r.length > 0 ? [].concat(e(a), [o]) : [o]),
                n.StockBridge.setStorage(c, a),
                n.StockBridge.setStorage("lite/search-ai-current-text", o),
                (this.dynamicPlaceholder = o);
            }
          },
          getSafeArea: function () {
            var e = this,
              r = n.wx$1.getMenuButtonBoundingClientRect(),
              o = r.top,
              a = void 0 === o ? 0 : o,
              c = r.left;
            (this.safeTop = this.isPC ? 0 : a),
              (this.fixWidth = c),
              this.$nextTick(function () {
                return i(
                  e,
                  null,
                  t().mark(function e() {
                    var i, n, r, o;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.hqBridge.getEleInfo(
                                  ".top-bar-container",
                                  this
                                )
                              );
                            case 2:
                              return (
                                (i = e.sent),
                                (n = (i || {}).height),
                                (r = void 0 === n ? 0 : n),
                                this.$emit("getBarHeight", r),
                                (e.next = 9),
                                this.hqBridge.getEleInfo(
                                  this.isPC
                                    ? ".search-bar-container"
                                    : ".big-title",
                                  this
                                )
                              );
                            case 9:
                              (o = e.sent),
                                this.$emit(
                                  "getTitleHeight",
                                  o.height || 0,
                                  this.safeTop
                                );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              });
          },
          jumpToSearch: function () {
            return i(
              this,
              null,
              t().mark(function e() {
                var i, n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (i = this.from || "") &&
                            ((n = (r[i] || {}).click), this.hqBridge.report(n)),
                            o.navigateTo({
                              url: "/pages/additional/search/main",
                              fail: function (e) {},
                            });
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
          goToAiPage: function () {
            (this.isAINewUser = { isNewUser: !1, time: Date.now() }),
              n.StockBridge.setStorage(a, this.isAINewUser);
            var e = { searchfrom: "portfoliopage" };
            if (
              (this.dynamicPlaceholder &&
                (e = {
                  searchfrom: "portfoliopage",
                  mainQuery: this.dynamicPlaceholder,
                  queryUsage: "sendToInput",
                }),
              "app_lct" === n.StockBridge.store.lctfrom)
            ) {
              var t = Object.keys(e)
                  .map(function (t) {
                    return "".concat(t, "=").concat(encodeURIComponent(e[t]));
                  })
                  .join("&"),
                i = "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/pages/searchAi/main?".concat(
                      t
                    )
                  )
                );
              n.wx$1.navigateTo({ url: i });
            } else n.StockRouter.routeTo({ name: "searchAi", query: e });
            n.Request.reportMTAData({
              eventName: "jichu.search.ai_search_input_ai_ask_click",
              searchfrom: "portfoliopage",
            });
          },
          specialDebugFunc: function () {
            n.wx$1.vibrateShort({ type: "heavy" }),
              this.isDevelopVersion &&
                n.wx$1.showModal({
                  title: "调试路由跳转",
                  editable: !0,
                  placeholderText: "请输入路由路径，如 /pages/index/main",
                  confirmText: "跳转",
                  cancelText: "取消",
                  success: function (e) {
                    if (e.confirm && e.content) {
                      var t = e.content.trim();
                      n.wx$1.navigateTo({ url: t });
                    }
                  },
                });
          },
        },
      },
      h = n._export_sfc(l, [
        [
          "render",
          function (e, t, i, r, o, a) {
            return n.e(
              { a: "".concat(o.safeTop, "px"), b: !o.isPC },
              o.isPC
                ? {}
                : {
                    c: n.o(function () {
                      return (
                        a.specialDebugFunc &&
                        a.specialDebugFunc.apply(a, arguments)
                      );
                    }, 417),
                    d: n.n(!0 === i.hideTitle && "hidenbar"),
                    e: n.n(!1 === i.hideTitle && "appearBar"),
                    f: n.n(i.hideSearch && "hideBottom"),
                    g: n.n(o.safeTop && "showBar"),
                  },
              { h: !i.hideSearch },
              i.hideSearch
                ? {}
                : n.e(
                    { i: o.dynamicPlaceholder },
                    o.dynamicPlaceholder
                      ? { j: n.t(o.dynamicPlaceholder) }
                      : {},
                    {
                      k: n.s(!0 === i.hideTitle ? a.fixPlaceholderStyle : ""),
                      l: n.o(function () {
                        return (
                          a.jumpToSearch && a.jumpToSearch.apply(a, arguments)
                        );
                      }, 418),
                      m: n.o(function () {
                        return a.goToAiPage && a.goToAiPage.apply(a, arguments);
                      }, 419),
                      n: n.n({
                        "bar-hidden": o.isPC && !0 === i.hideTitle,
                        pc: o.isPC,
                      }),
                      o: n.s(
                        !0 !== i.hideTitle || o.isPC ? a.coverStyle : a.fixStyle
                      ),
                    }
                  )
            );
          },
        ],
        ["__scopeId", "data-v-1a86a5e7"],
      ]);
    wx.createComponent(h);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/index/topbar/index.js",
  }
);
require("pages/index/topbar/index.js");
