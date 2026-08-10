$gwx2_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_5 || [];
    function gz$gwx2_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div open-transfer"]);
        Z([3, "__l"]);
        Z([3, "2e41d05f-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "2e41d05f-1"]);
        Z(z[3]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z([[7], [3, "d"]]);
        Z([3, "2e41d05f-2"]);
        Z(z[8]);
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_5 = true;
    var x = ["./pages/noaccount/textImage/TextImage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx2_XC_5_1();
      var o2D = _n("view");
      _rz(z, o2D, "class", 0, e, s, gg);
      var t5D = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(o2D, t5D);
      var l3D = _v();
      _(o2D, l3D);
      if (_oz(z, 3, e, s, gg)) {
        l3D.wxVkey = 1;
        var e6D = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(l3D, e6D);
      }
      var a4D = _v();
      _(o2D, a4D);
      if (_oz(z, 7, e, s, gg)) {
        a4D.wxVkey = 1;
        var b7D = _v();
        _(a4D, b7D);
        if (_oz(z, 8, e, s, gg)) {
          b7D.wxVkey = 1;
          var o8D = _mz(
            z,
            "open-transfer-page-b",
            ["bind:__l", 9, "bindinit", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(b7D, o8D);
        }
        b7D.wxXCkey = 1;
        b7D.wxXCkey = 3;
      }
      l3D.wxXCkey = 1;
      l3D.wxXCkey = 3;
      a4D.wxXCkey = 1;
      a4D.wxXCkey = 3;
      _(r, o2D);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx2_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/noaccount/textImage/TextImage.wxml"] = [
    $gwx2_XC_5,
    "./pages/noaccount/textImage/TextImage.wxml",
  ];
else
  __wxAppCode__["pages/noaccount/textImage/TextImage.wxml"] = $gwx2_XC_5(
    "./pages/noaccount/textImage/TextImage.wxml"
  );
__wxRoute = "pages/noaccount/textImage/TextImage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/noaccount/textImage/TextImage.js";
define(
  "pages/noaccount/textImage/TextImage.js",
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
      n = require("../OpenAccount/utils.js"),
      t = require("../../../common/vendor.js"),
      r = {
        components: {
          OpenTransferPageB: function () {
            return "../OpenAccount/OpenTransferPageB.js";
          },
        },
        setup: function (r, a) {
          var o = this,
            u = a.emit,
            s = t.ref(""),
            i = t.ref(""),
            S = t.ref(""),
            c = t.useBrokerInfo(),
            E = c.isDataFetched,
            l = c.highestPriorityDealer,
            _ = void 0 === l ? {} : l,
            v = c.hasBind,
            B = c.isBrokerPluginEnable,
            P = t.computed(function () {
              return (
                B(_.value.code) &&
                (Boolean(
                  _.value.userstateFront & t.USERSTATE_PID.BIND_ACTIVE
                ) ||
                  (!Boolean(
                    _.value.userstateFront &
                      t.USERSTATE_PID.EXTERNAL_CHANNEL_APPLY
                  ) &&
                    (Boolean(
                      _.value.userstateFront & t.USERSTATE_PID.VERIFYING
                    ) ||
                      Boolean(
                        _.value.userstateFront & t.USERSTATE_PID.FAILED
                      ))))
              );
            });
          return (
            t.watch(
              function () {
                return E.value;
              },
              function (e) {
                e &&
                  (P.value && c.isTradeEnable.value
                    ? (s.value = n.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED)
                    : t.userinfo.get(
                        !0,
                        function (e) {
                          var t = "1" === e.subscribe;
                          t || v.value
                            ? t && !v.value
                              ? (s.value =
                                  n.USER_SUB_OPEN_STATUS.SUBSCRIBED_NO_OPEN)
                              : !t && v.value
                              ? (s.value =
                                  n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED)
                              : (s.value =
                                  n.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED)
                            : (s.value =
                                n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN);
                        },
                        function () {
                          s.value = v.value
                            ? n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED
                            : n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN;
                        },
                        !0
                      ));
              },
              { immediate: !0 }
            ),
            t.onMounted(function () {
              return (
                (n = o),
                null,
                (t = e().mark(function n() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          u("pageInit");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, n);
                })),
                new Promise(function (e, r) {
                  var a = function (e) {
                      try {
                        u(t.next(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    o = function (e) {
                      try {
                        u(t.throw(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    u = function (n) {
                      return n.done
                        ? e(n.value)
                        : Promise.resolve(n.value).then(a, o);
                    };
                  u((t = t.apply(n, null)).next());
                })
              );
              var n, t;
            }),
            {
              isSupportBrokerPlugin: P,
              isDataFetched: E,
              highestPriorityDealer: _,
              hasBind: v,
              status: s,
              scode: i,
              market: S,
              onPluginReady: function () {
                u("pluginReady");
              },
            }
          );
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog") +
        t.resolveComponent("OpenTransferPageB")
      )();
    var a = t._export_sfc(r, [
      [
        "render",
        function (e, n, r, a, o, u) {
          return t.e(
            {
              a: e.rootFontSize,
              b: t.p({ "no-auto": !0 }),
              c: a.isDataFetched,
            },
            a.isDataFetched
              ? {
                  d: t.o(a.onPluginReady, 73),
                  e: t.p({
                    scode: a.scode,
                    market: a.market,
                    "user-open-sub-status": a.status,
                  }),
                }
              : {}
          );
        },
      ],
    ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/noaccount/textImage/TextImage.js",
  }
);
require("pages/noaccount/textImage/TextImage.js");
