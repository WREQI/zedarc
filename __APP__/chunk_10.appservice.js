$gwx_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
    function gz$gwx_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div top-bar-container data-v-409f5b71"]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "h"]]);
        Z([3, "_div topbar-icon-wrapper data-v-409f5b71"]);
        Z([[7], [3, "j"]]);
        Z([3, "__l"]);
        Z([3, "topbar-icon-entry ai-entry data-v-409f5b71"]);
        Z([3, "409f5b71-0"]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "m"]]);
        Z([3, "_div topbar-icon-entry profile-entry data-v-409f5b71"]);
        Z([[7], [3, "l"]]);
        Z(z[5]);
        Z([3, "profile-redpoint data-v-409f5b71"]);
        Z([3, "409f5b71-1"]);
        Z(z[11]);
        Z([[7], [3, "o"]]);
        Z([[7], [3, "q"]]);
        Z(z[5]);
        Z([3, "data-v-409f5b71"]);
        Z([3, "409f5b71-2"]);
        Z([[7], [3, "r"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1;
    }
    function gz$gwx_XC_2_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_2)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_2;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_2_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div trade-box"]);
        Z([[7], [3, "s"]]);
        Z([3, "__l"]);
        Z([3, "24d63edc-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "24d63edc-1"]);
        Z(z[4]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z([3, "top-bar"]);
        Z([3, "24d63edc-2"]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([3, "24d63edc-3"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "h"]]);
        Z(z[2]);
        Z([[7], [3, "g"]]);
        Z([3, "24d63edc-4"]);
        Z(z[17]);
        Z([[7], [3, "j"]]);
        Z(z[2]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "m"]]);
        Z([3, "asset-container"]);
        Z([[7], [3, "k"]]);
        Z([3, "24d63edc-5"]);
        Z([[7], [3, "n"]]);
        Z([[7], [3, "o"]]);
        Z([[7], [3, "q"]]);
        Z(z[2]);
        Z([[7], [3, "p"]]);
        Z([3, "24d63edc-6"]);
        Z(z[31]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_2);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
    var x = ["./components/topbar/index.wxml", "./pages/index/trade.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_2_1();
      var hG = _n("view");
      _rz(z, hG, "class", 0, e, s, gg);
      var oH = _v();
      _(hG, oH);
      if (_oz(z, 1, e, s, gg)) {
        oH.wxVkey = 1;
      }
      var cI = _v();
      _(hG, cI);
      if (_oz(z, 2, e, s, gg)) {
        cI.wxVkey = 1;
        var aL = _n("view");
        _rz(z, aL, "class", 3, e, s, gg);
        var tM = _v();
        _(aL, tM);
        if (_oz(z, 4, e, s, gg)) {
          tM.wxVkey = 1;
          var eN = _mz(
            z,
            "ai-entry",
            ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(tM, eN);
        }
        var bO = _mz(z, "view", ["catchtap", 9, "class", 1], [], e, s, gg);
        var oP = _v();
        _(bO, oP);
        if (_oz(z, 11, e, s, gg)) {
          oP.wxVkey = 1;
          var xQ = _mz(
            z,
            "qianji-red-point-placeholder",
            ["bind:__l", 12, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(oP, xQ);
        }
        oP.wxXCkey = 1;
        oP.wxXCkey = 3;
        _(aL, bO);
        tM.wxXCkey = 1;
        tM.wxXCkey = 3;
        _(cI, aL);
      }
      var oJ = _v();
      _(hG, oJ);
      if (_oz(z, 16, e, s, gg)) {
        oJ.wxVkey = 1;
      }
      var lK = _v();
      _(hG, lK);
      if (_oz(z, 17, e, s, gg)) {
        lK.wxVkey = 1;
        var oR = _mz(
          z,
          "guide-pull-down-access",
          ["bind:__l", 18, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(lK, oR);
      }
      oH.wxXCkey = 1;
      cI.wxXCkey = 1;
      cI.wxXCkey = 3;
      oJ.wxXCkey = 1;
      lK.wxXCkey = 1;
      lK.wxXCkey = 3;
      _(r, hG);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx_XC_2_2();
      var cT = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var oX = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(cT, oX);
      var hU = _v();
      _(cT, hU);
      if (_oz(z, 4, e, s, gg)) {
        hU.wxVkey = 1;
        var lY = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(hU, lY);
      }
      var oV = _v();
      _(cT, oV);
      if (_oz(z, 8, e, s, gg)) {
        oV.wxVkey = 1;
        var aZ = _mz(
          z,
          "top-bar",
          ["bind:__l", 9, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oV, aZ);
      }
      var cW = _v();
      _(cT, cW);
      if (_oz(z, 13, e, s, gg)) {
        cW.wxVkey = 1;
        var t1 = _mz(
          z,
          "escape-notice",
          ["bind:__l", 14, "uI", 1],
          [],
          e,
          s,
          gg
        );
        _(cW, t1);
      } else {
        cW.wxVkey = 2;
        var e2 = _v();
        _(cW, e2);
        if (_oz(z, 16, e, s, gg)) {
          e2.wxVkey = 1;
          var x5 = _v();
          _(e2, x5);
          if (_oz(z, 17, e, s, gg)) {
            x5.wxVkey = 1;
            var o6 = _mz(
              z,
              "st-status",
              ["bind:__l", 18, "bindhandleError", 1, "uI", 2, "uP", 3],
              [],
              e,
              s,
              gg
            );
            _(x5, o6);
          }
          x5.wxXCkey = 1;
          x5.wxXCkey = 3;
        }
        var b3 = _v();
        _(cW, b3);
        if (_oz(z, 22, e, s, gg)) {
          b3.wxVkey = 1;
          var f7 = _mz(
            z,
            "asset",
            [
              "bind:__l",
              23,
              "bindpageInit",
              1,
              "bindpluginReady",
              2,
              "class",
              3,
              "style",
              4,
              "uI",
              5,
              "uP",
              6,
            ],
            [],
            e,
            s,
            gg
          );
          _(b3, f7);
        }
        var o4 = _v();
        _(cW, o4);
        if (_oz(z, 30, e, s, gg)) {
          o4.wxVkey = 1;
          var c8 = _v();
          _(o4, c8);
          if (_oz(z, 31, e, s, gg)) {
            c8.wxVkey = 1;
            var h9 = _mz(
              z,
              "st-status",
              ["bind:__l", 32, "bindhandleError", 1, "uI", 2, "uP", 3],
              [],
              e,
              s,
              gg
            );
            _(c8, h9);
          }
          c8.wxXCkey = 1;
          c8.wxXCkey = 3;
        }
        e2.wxXCkey = 1;
        e2.wxXCkey = 3;
        b3.wxXCkey = 1;
        b3.wxXCkey = 3;
        o4.wxXCkey = 1;
        o4.wxXCkey = 3;
      }
      hU.wxXCkey = 1;
      hU.wxXCkey = 3;
      oV.wxXCkey = 1;
      oV.wxXCkey = 3;
      cW.wxXCkey = 1;
      cW.wxXCkey = 3;
      cW.wxXCkey = 3;
      _(r, cT);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/topbar/index.wxml"] = [
    $gwx_XC_2,
    "./components/topbar/index.wxml",
  ];
else
  __wxAppCode__["components/topbar/index.wxml"] = $gwx_XC_2(
    "./components/topbar/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/trade.wxml"] = [
    $gwx_XC_2,
    "./pages/index/trade.wxml",
  ];
else
  __wxAppCode__["pages/index/trade.wxml"] = $gwx_XC_2(
    "./pages/index/trade.wxml"
  );
__wxRoute = "components/topbar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/topbar/index.js";
define(
  "components/topbar/index.js",
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
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      n = function (e, n, t) {
        return new Promise(function (i, o) {
          var r = function (e) {
              try {
                a(t.next(e));
              } catch (e) {
                o(e);
              }
            },
            c = function (e) {
              try {
                a(t.throw(e));
              } catch (e) {
                o(e);
              }
            },
            a = function (e) {
              return e.done ? i(e.value) : Promise.resolve(e.value).then(r, c);
            };
          a((t = t.apply(e, n)).next());
        });
      },
      t = require("../../common/vendor.js"),
      i = {
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
      r = {
        components: {
          GuidePullDownAccess: function () {
            return "../../pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.js";
          },
          qianjiRedPointPlaceholder: function () {
            return "../../pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js";
          },
          AiEntry: function () {
            return "../../pages/indexSbg/@tencent/stock-ai-entry-tiny/index.js";
          },
        },
        inject: ["hqBridge"],
        options: { styleIsolation: "shared" },
        props: ["from", "hideTitle", "hideSearch", "premoteMixin", "skin"],
        data: function () {
          return {
            safeTop: 0,
            searchTop: 0,
            fixWidth: 0,
            showAddXcx: !1,
            openid: "",
          };
        },
        computed: {
          fixStyle: function () {
            return "width: ".concat(this.fixWidth, "px;");
          },
          coverStyle: function () {
            return "width: 100%;";
          },
          isDevelopVersion: function () {
            var e, n;
            return (
              t.wx$1.getAccountInfoSync &&
              "develop" ===
                (null ==
                (n =
                  null == (e = t.wx$1.getAccountInfoSync())
                    ? void 0
                    : e.miniProgram)
                  ? void 0
                  : n.envVersion)
            );
          },
        },
        created: function () {
          return n(
            this,
            null,
            e().mark(function n() {
              var i = this;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        "choose" === this.from &&
                          o.init(function () {
                            var e = t.login.getLoginInfo() || {};
                            i.openid = e.qluin;
                          });
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
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            e.getSafeArea();
          });
        },
        onPageShow: function () {
          o.actData.isAddMyXcxEnable && (this.showAddXcx = !0);
        },
        methods: {
          getSafeArea: function () {
            var i = this,
              o = t.wx$1.getMenuButtonBoundingClientRect(),
              r = o.top,
              c = void 0 === r ? 0 : r,
              a = o.left;
            (this.safeTop = c),
              (this.fixWidth = a),
              this.$nextTick(function () {
                return n(
                  i,
                  null,
                  e().mark(function n() {
                    var t, i, o, r;
                    return e().wrap(
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
                                (t = e.sent),
                                (i = (t || {}).height),
                                (o = void 0 === i ? 0 : i),
                                this.$emit("getBarHeight", o),
                                (e.next = 9),
                                this.hqBridge.getEleInfo(".big-title", this)
                              );
                            case 9:
                              (r = e.sent),
                                this.$emit(
                                  "getTitleHeight",
                                  r.height || 0,
                                  this.safeTop
                                );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      n,
                      this
                    );
                  })
                );
              });
          },
          jumpToSearch: function () {
            return n(
              this,
              null,
              e().mark(function n() {
                var r, c, a, s, u, l, p;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (u = this.from || "") &&
                              ((l = (i[u] || {}).click),
                              this.hqBridge.report(l)),
                            o.navigateTo({
                              url: "/pages/additional/search/main",
                              fail: function (e) {},
                            }),
                            (e.prev = 3),
                            (e.next = 6),
                            t.AbtInfoAPI.getAbtInfo(
                              "ui_layer_1746698860763",
                              {},
                              { forceCallback: !0 }
                            )
                          );
                        case 6:
                          0 == +(p = e.sent).retcode &&
                            (null == (r = p.data[0]) ? void 0 : r.Version) &&
                            ["New", "Online"].includes(
                              null == (c = p.data[0]) ? void 0 : c.Version
                            ) &&
                            (t.StockBridge.setStorage(
                              "lite/search-version",
                              null == (a = p.data[0]) ? void 0 : a.Version
                            ),
                            t.StockBridge.setStorage(
                              "lite/search-version-abtinfo",
                              null == (s = p.data[0]) ? void 0 : s.report_info
                            )),
                            (e.next = 12);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(3));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this,
                  [[3, 10]]
                );
              })
            );
          },
          goToProfile: function () {
            o.navigateTo({
              url: "/pages/index/account/main",
              fail: function (e) {},
            }),
              t.Request.reportMTAData({
                eventName: "xcx_topbar_profile_click",
              });
          },
          specialDebugFunc: function () {
            t.wx$1.vibrateShort({ type: "heavy" }),
              this.isDevelopVersion &&
                t.wx$1.showModal({
                  title: "调试路由跳转",
                  editable: !0,
                  placeholderText: "请输入路由路径，如 /pages/index/main",
                  confirmText: "跳转",
                  cancelText: "取消",
                  success: function (e) {
                    if (e.confirm && e.content) {
                      var n = e.content.trim();
                      t.wx$1.navigateTo({ url: n });
                    }
                  },
                });
          },
        },
      };
    Array ||
      (
        t.resolveComponent("AiEntry") +
        t.resolveComponent("qianji-red-point-placeholder") +
        t.resolveComponent("GuidePullDownAccess")
      )();
    var c = t._export_sfc(r, [
      [
        "render",
        function (e, n, i, o, r, c) {
          return t.e(
            {
              a: "".concat(r.safeTop, "px"),
              b: t.o(function () {
                return (
                  c.specialDebugFunc && c.specialDebugFunc.apply(c, arguments)
                );
              }, 1311),
              c: c.isDevelopVersion,
            },
            (c.isDevelopVersion, {}),
            {
              d: t.n(!0 === i.hideTitle && "hidenbar"),
              e: t.n(!1 === i.hideTitle && "appearBar"),
              f: t.n(i.hideSearch && "hideBottom"),
              g: t.n(r.safeTop && "showBar"),
              h: !i.hideSearch,
            },
            i.hideSearch
              ? {}
              : t.e(
                  {
                    i: t.o(function () {
                      return (
                        c.jumpToSearch && c.jumpToSearch.apply(c, arguments)
                      );
                    }, 1312),
                    j: r.openid,
                  },
                  r.openid
                    ? { k: t.p({ openid: r.openid, from: i.from }) }
                    : {},
                  {
                    l: t.p({
                      name: "prorfile-icon-message-redpoint",
                      minaredpoint: i.premoteMixin && i.premoteMixin.RedPoint,
                    }),
                    m: t.o(function () {
                      return c.goToProfile && c.goToProfile.apply(c, arguments);
                    }, 1313),
                    n: t.s(!0 === i.hideTitle ? c.fixStyle : c.coverStyle),
                  }
                ),
            { o: r.showAddXcx },
            r.showAddXcx ? { p: "".concat(r.safeTop, "px") } : {},
            { q: i.premoteMixin && i.premoteMixin.GuidePullDownAccess },
            i.premoteMixin && i.premoteMixin.GuidePullDownAccess
              ? { r: t.p({ premote: i.premoteMixin.GuidePullDownAccess }) }
              : {},
            { s: "".concat(r.safeTop, "px") }
          );
        },
      ],
      ["__scopeId", "data-v-409f5b71"],
    ]);
    wx.createComponent(c);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/topbar/index.js",
  }
);
require("components/topbar/index.js");
__wxRoute = "pages/index/trade";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/trade.js";
define(
  "pages/index/trade.js",
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
      t = require("../../common/vendor.js"),
      n = require("../../mixins/subpkg_reload.js"),
      o = require("../../utils/broker/usePluginInfo.js"),
      a = {
        onReady: function () {
          var e, t;
          null ==
            (t =
              null == (e = null == this ? void 0 : this.handlePageLifeTime)
                ? void 0
                : e.handleReady) || t.call(e);
        },
        onUnload: function () {
          var e, t;
          null ==
            (t =
              null == (e = null == this ? void 0 : this.handlePageLifeTime)
                ? void 0
                : e.handleUnload) || t.call(e);
        },
        onRouteDone: function () {
          var e, t;
          null ==
            (t =
              null == (e = null == this ? void 0 : this.handlePageLifeTime)
                ? void 0
                : e.handleRouteDone) || t.call(e);
        },
        onPullDownRefresh: function () {
          try {
            this.handlePageLifeTime.handlePullDownRefresh();
          } catch (e) {
            t.wx$1.stopPullDownRefresh();
          }
          setTimeout(function () {
            t.wx$1.stopPullDownRefresh();
          }, 1e3);
        },
        onReachBottom: function () {
          var e, t;
          null ==
            (t =
              null == (e = null == this ? void 0 : this.handlePageLifeTime)
                ? void 0
                : e.handleReachBottom) || t.call(e);
        },
        onPageScroll: function (e) {
          var t, n;
          null ==
            (n =
              null == (t = null == this ? void 0 : this.handlePageLifeTime)
                ? void 0
                : t.handlePageScroll) || n.call(t, e);
        },
        onResize: function () {
          var e, t;
          null ==
            (t =
              null == (e = null == this ? void 0 : this.handlePageLifeTime)
                ? void 0
                : e.handleResize) || t.call(e);
        },
      },
      i = getApp().globalData,
      r = {
        components: {
          Asset: function () {
            return "../noaccount/OpenAccount/OpenTransferPage.js";
          },
          TopBar: function () {
            return "../../components/topbar/index.js";
          },
          EscapeNotice: function () {
            return "../noaccount/EscapeNotice.js";
          },
        },
        mixins: [a, n.SubpkgReloadMixin],
        provide: function () {
          return { hqBridge: this.hqBridge };
        },
        setup: function () {
          var e,
            n,
            a = t.useBrokerInfo(),
            i = a.isDataFetched,
            r = a.isFail,
            l = a.updateAheadInfo,
            u = a.highestPriorityDealer,
            s = void 0 === u ? {} : u,
            c = t.computed(function () {
              return Boolean(s.value.userstateFront & t.USERSTATE_PID.FAILED);
            }),
            d = t.computed(function () {
              return Boolean(
                s.value.userstateFront & t.USERSTATE_PID.VERIFYING
              );
            }),
            p =
              (null ==
              (n = null == (e = getApp().globalData.detect) ? void 0 : e.env)
                ? void 0
                : n.IS_PCWEIXIN) || !1;
          p &&
            t.watch(
              function () {
                return [i.value, c.value, d.value];
              },
              function () {
                i.value &&
                  (c.value || d.value) &&
                  t.wx$1.redirectTo({
                    url: "/pages/noaccount/textImage/TextImage",
                  });
              },
              { immediate: !0 }
            );
          var h = o.usePageLifeTime(),
            g = t.ref(""),
            f = t.ref(0);
          t.provide("handlePageLifeTime", h),
            t.provide("pluginRoute", g),
            t.provide("scrollHeight", f);
          var v = t.computed(function () {
              return !i.value && !r.value;
            }),
            m = t.computed(function () {
              return !i.value && r.value;
            }),
            b = t.ref(!1),
            S = t.computed(function () {
              return v.value
                ? t.COMMON_PAGE_STATUS.LOADING
                : m.value
                ? t.COMMON_PAGE_STATUS.ERROR
                : "";
            }),
            E = t.ref(!1);
          function R() {
            (E.value = !0), require.async("../quote/placeholder");
          }
          function T() {
            t.index && t.index.$off("tradeToPreloadQuote", R);
          }
          return {
            isPc: p,
            pageStatus: S,
            isShowError: m,
            escapeEnabled: b,
            canPreloadQuote: E,
            onErrorRetry: function () {
              a.fetchData().catch(function () {});
            },
            handlePageLifeTime: h,
            pluginRoute: g,
            updateAheadInfo: l,
            isDataFetched: i,
            handlePreloadQuote: R,
            removeEvent: T,
            addEvent: function () {
              T(),
                E.value || (t.index && t.index.$on("tradeToPreloadQuote", R));
            },
            scrollHeight: f,
          };
        },
        data: function () {
          return {
            hqBridge: new t.HQBridge(),
            options: {},
            statData: "",
            pageHide: !1,
            subpkgName: "pages/noaccount/",
            skin: t.wx$1.getStorageSync("user/skin") || "white",
          };
        },
        onLoad: function (e) {
          var t = e.stat_data,
            n = e.stat;
          (this.statData = t || n || ""),
            (getApp().globalData.__tradeTabTime = Date.now());
        },
        onShow: function () {
          var e = this;
          if (
            (this.isDataFetched && this.updateAheadInfo(),
            (this.pageHide = !1),
            this.addEvent(),
            !(t.StockBridge.store || {}).channelId[t.BISTAT.BI_STAT_I])
          ) {
            t.Request.updateChannel("Ijf00p000b120");
          }
          (i.isGetFreshSkin = !1),
            i.setSkin(function (t) {
              e.skin = t;
            }),
            this.refreshEscapeConfig();
        },
        onReady: function () {
          var e;
          this.setContainerHeight(),
            null == (e = this.setInitialRenderingCache) || e.call(this, null);
        },
        onResize: function () {
          var e = this;
          if (this.isPc) {
            var n = t.wx$1.createSelectorQuery();
            n.selectViewport().boundingClientRect(),
              n.exec(function (t) {
                if (t && t[0]) {
                  var n = t[0].height;
                  e.setContainerHeight(n);
                }
              });
          }
        },
        onHide: function () {
          (this.pageHide = !0),
            this.removeEvent(),
            this.clearParams(),
            (getApp().globalData.__tradeTabTime = null);
        },
        computed: {
          assetStyle: function () {
            var e = this.scrollHeight;
            return (
              this.subpkgMounted || (e = 0),
              "width: 100%; height: ".concat(
                e,
                "px; background-color: #f5f6fa;"
              )
            );
          },
          statusStyle: function () {
            return "width: 100%; height: ".concat(
              this.scrollHeight ? "".concat(this.scrollHeight, "px") : "100%",
              ";"
            );
          },
        },
        onTabItemTap: function () {
          t.Request.reportMTAData({ eventName: "xcx_trade_click" }),
            (getApp().globalData.__tradeTabTime = Date.now());
        },
        methods: {
          handleErrorRetry: function () {
            this.onErrorRetry(), this.subpkgReady || this.reloadSubpkg(!1);
          },
          refreshEscapeConfig: t.throttle(function () {
            return (
              (t = this),
              null,
              (n = e().mark(function t() {
                var n,
                  o,
                  a,
                  r = this;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          require.async("../noaccount/escapeConfig.js")
                        );
                      case 2:
                        (n = e.sent),
                          (o = n.fetchEscapeConfig),
                          (a = n.isEscapeEnabled),
                          o()
                            .then(function () {
                              var e = r.escapeEnabled;
                              (r.escapeEnabled = a()),
                                !e ||
                                  r.escapeEnabled ||
                                  r.subpkgMounted ||
                                  r.reloadSubpkg(!1),
                                !e &&
                                  r.escapeEnabled &&
                                  i.mpReporter.reportEvent(
                                    "ESCAPE_CONFIG_SHOW"
                                  );
                            })
                            .catch(function () {});
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })),
              new Promise(function (e, o) {
                var a = function (e) {
                    try {
                      r(n.next(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  i = function (e) {
                    try {
                      r(n.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  r = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(a, i);
                  };
                r((n = n.apply(t, null)).next());
              })
            );
            var t, n;
          }, 6e4),
          setContainerHeight: function (e) {
            var n = this,
              o = e;
            if (!o || o <= 0) {
              var a =
                (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
                t.wx$1.getSystemInfoSync();
              o = (null == a ? void 0 : a.windowHeight) || 0;
            }
            if (this.isPc)
              return (
                (n.scrollHeight = o),
                (getApp().globalData.tradeTabScrollHeight = n.scrollHeight),
                void (
                  0 === o &&
                  i.mpReporter.reportEvent("SET_CONTAINER_HEIGHT_ZERO", {
                    ext3: o,
                  })
                )
              );
            var r = function (e, t) {
              var a = o - e;
              (a < 0.84 * o || a <= 0 || !o) &&
                (i.mpReporter.reportEvent("SCROLL_HEIGHT_FALLBACK", {
                  ext1: o,
                  ext2: e,
                  ext3: a,
                  ext4: t,
                }),
                (a = 0)),
                (n.scrollHeight = a),
                (getApp().globalData.tradeTabScrollHeight = a);
            };
            try {
              this.createSelectorQuery()
                .select(".top-bar")
                .boundingClientRect()
                .exec(function (e) {
                  var n,
                    a,
                    l,
                    u =
                      null == (n = null == e ? void 0 : e[0])
                        ? void 0
                        : n.bottom;
                  if (o && u > 0) r(u, "dom_query");
                  else {
                    var s =
                        (null ==
                        (l = (a = t.wx$1).getMenuButtonBoundingClientRect)
                          ? void 0
                          : l.call(a)) || {},
                      c = 80;
                    s.bottom > 0 && (c = s.bottom + 48),
                      r(c, "menuBtn:".concat(s.bottom || 0)),
                      i.mpReporter.reportEvent("SCROLL_HEIGHT_DOM_FALLBACK", {
                        ext1: o,
                        ext2: c,
                        ext3: s.bottom || 0,
                      });
                  }
                });
            } catch (e) {
              (n.scrollHeight = 0),
                (getApp().globalData.tradeTabScrollHeight = 0),
                i.mpReporter.reportEvent("SCROLL_HEIGHT_ERROR", {
                  ext1: o,
                  ext2:
                    e instanceof Error
                      ? e.stack || e.message
                      : JSON.stringify(e || {}),
                });
            }
          },
          clearParams: function () {
            var e = getCurrentPages(),
              t = e[e.length - 1];
            t &&
              ((t.options = {}),
              t.$page && (t.$page.fullPath = "/pages/index/trade"));
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog") +
        t.resolveComponent("TopBar") +
        t.resolveComponent("EscapeNotice") +
        t.resolveComponent("st-status") +
        t.resolveComponent("Asset")
      )();
    var l = t._export_sfc(r, [
      [
        "render",
        function (e, n, o, a, i, r) {
          return t.e(
            { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: !a.isPc },
            a.isPc
              ? {}
              : { d: t.p({ from: "trade", "hide-search": !0, skin: i.skin }) },
            { e: a.escapeEnabled },
            a.escapeEnabled
              ? {}
              : t.e(
                  { f: a.pageStatus },
                  a.pageStatus
                    ? {
                        g: t.o(r.handleErrorRetry, 24),
                        h: t.p({ type: a.pageStatus }),
                        i: t.s(r.statusStyle),
                      }
                    : {},
                  { j: e.subpkgReady },
                  e.subpkgReady
                    ? {
                        k: t.s(r.assetStyle),
                        l: t.o(e.onPageSubpkgMounted, 25),
                        m: t.o(e.onPluginSubpkgMounted, 26),
                        n: t.p({
                          "page-hide": i.pageHide,
                          "stat-data": i.statData,
                          openfrom: "my",
                        }),
                      }
                    : {},
                  { o: !e.subpkgMounted },
                  e.subpkgMounted
                    ? {}
                    : {
                        p: t.o(e.reloadSubpkg, 27),
                        q: t.p({ type: e.subpkgStatus }),
                        r: t.s(r.statusStyle),
                      }
                ),
            { s: i.skin }
          );
        },
      ],
    ]);
    wx.createPage(l);
  },
  { isPage: true, isComponent: true, currentFile: "pages/index/trade.js" }
);
require("pages/index/trade.js");
