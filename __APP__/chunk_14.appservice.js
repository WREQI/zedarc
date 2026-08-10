$gwx_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
    function gz$gwx_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div account-index-container"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
        Z([3, "__l"]);
        Z([3, "19e3f6da-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z([3, "19e3f6da-1"]);
        Z(z[5]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "d"]]);
        Z(z[3]);
        Z([3, "19e3f6da-2"]);
        Z(z[10]);
        Z([[7], [3, "g"]]);
        Z(z[3]);
        Z([[7], [3, "f"]]);
        Z([3, "r"]);
        Z([3, "19e3f6da-3"]);
        Z(z[14]);
        Z([3, "accountCom"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
    var x = ["./pages/index/account/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_6_1();
      var oPB = _mz(
        z,
        "view",
        ["class", 0, "data-st-theme", 1, "data-theme", 1],
        [],
        e,
        s,
        gg
      );
      var eTB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oPB, eTB);
      var lQB = _v();
      _(oPB, lQB);
      if (_oz(z, 5, e, s, gg)) {
        lQB.wxVkey = 1;
        var bUB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(lQB, bUB);
      }
      var aRB = _v();
      _(oPB, aRB);
      if (_oz(z, 9, e, s, gg)) {
        aRB.wxVkey = 1;
        var oVB = _v();
        _(aRB, oVB);
        if (_oz(z, 10, e, s, gg)) {
          oVB.wxVkey = 1;
          var xWB = _mz(
            z,
            "st-status",
            ["bind:__l", 11, "uI", 1, "uP", 2],
            [],
            e,
            s,
            gg
          );
          _(oVB, xWB);
        }
        oVB.wxXCkey = 1;
        oVB.wxXCkey = 3;
      }
      var tSB = _v();
      _(oPB, tSB);
      if (_oz(z, 14, e, s, gg)) {
        tSB.wxVkey = 1;
        var oXB = _mz(
          z,
          "account-com",
          [
            "bind:__l",
            15,
            "bindmounted",
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
        _(tSB, oXB);
      }
      lQB.wxXCkey = 1;
      lQB.wxXCkey = 3;
      aRB.wxXCkey = 1;
      aRB.wxXCkey = 3;
      tSB.wxXCkey = 1;
      tSB.wxXCkey = 3;
      _(r, oPB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/account/main.wxml"] = [
    $gwx_XC_6,
    "./pages/index/account/main.wxml",
  ];
else
  __wxAppCode__["pages/index/account/main.wxml"] = $gwx_XC_6(
    "./pages/index/account/main.wxml"
  );
__wxRoute = "pages/index/account/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/account/main.js";
define(
  "pages/index/account/main.js",
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
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      r = require("../../../common/vendor.js"),
      n = require("../../../module/delivery/deliveryMixin.js"),
      t = require("../../../utils/mixins/privacy.js"),
      o = new r.HQBridge(),
      i = {
        components: {
          accountCom: function () {
            return "../../profileCom/components/index.js";
          },
        },
        mixins: [n.deliveryMixin, t.privacy],
        provide: function () {
          return {
            hqBridge: o,
            stockBridge: r.StockBridge,
            accountContainer: this,
            TradeFunc: r.sdkBridge,
          };
        },
        onLoad: function (e) {
          this.params = e;
        },
        setup: function () {
          var e = r.ref(!1),
            n = r.ref({}),
            t = r.computed(function () {
              return !e.value && r.COMMON_PAGE_STATUS.LOADING;
            }),
            o = r.ref(
              ["black", "dark"].includes(r.StockBridge.getStorage("user/skin"))
                ? "dark"
                : "light"
            );
          return { params: n, isRendered: e, pageStatus: t, skin: o };
        },
        onTabItemTap: function () {
          r.Request.reportMTAData({ eventName: "xcx_mine_click" });
        },
        onPullDownRefresh: function () {
          return (
            (n = this),
            null,
            (t = e().mark(function n() {
              var t, o;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          null ==
                          (o = null == (t = this.$refs) ? void 0 : t.accountCom)
                            ? void 0
                            : o.refreshUserCenterData()
                        );
                      case 2:
                        r.wx$1.stopPullDownRefresh();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                this
              );
            })),
            new Promise(function (e, r) {
              var o = function (e) {
                  try {
                    a(t.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                i = function (e) {
                  try {
                    a(t.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                a = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(o, i);
                };
              a((t = t.apply(n, null)).next());
            })
          );
          var n, t;
        },
        onPageShow: function () {
          this.skin = ["black", "dark"].includes(
            r.StockBridge.getStorage("user/skin")
          )
            ? "dark"
            : "light";
        },
      };
    Array ||
      (
        r.resolveComponent("mp-privacy-dialog") +
        r.resolveComponent("stock-privacy-dialog") +
        r.resolveComponent("st-status") +
        r.resolveComponent("accountCom")
      )();
    var a = r._export_sfc(i, [
      [
        "render",
        function (e, n, t, o, i, a) {
          return r.e(
            { a: e.rootFontSize, b: r.p({ "no-auto": !0 }), c: o.pageStatus },
            o.pageStatus ? { d: r.p({ type: o.pageStatus }) } : {},
            {
              e: r.sr("accountCom", "19e3f6da-3"),
              f: r.o(function (e) {
                return (o.isRendered = !0);
              }, 34),
              g: r.p({ params: o.params, "premote-mixin": e.premoteMixin }),
              h: o.skin,
              i: o.skin,
            }
          );
        },
      ],
    ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/index/account/main.js",
  }
);
require("pages/index/account/main.js");
