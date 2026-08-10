$gwx44_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx44_XC_10 || [];
    function gz$gwx44_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "d"]]);
        Z([3, "item"]);
        Z([[7], [3, "e"]]);
        Z([3, "h"]);
        Z([[6], [[7], [3, "item"]], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_10_1;
    }
    function gz$gwx44_XC_10_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_10_2)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_10_2;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_10_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div plat-container data-v-3d9b2c06"]);
        Z([3, "__l"]);
        Z([3, "data-v-3d9b2c06"]);
        Z([3, "3d9b2c06-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "3d9b2c06-1"]);
        Z(z[4]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "3d9b2c06-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_10_2);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_10_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx44_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx44_XC_10 = true;
    var x = [
      "./pages/messagebox/@tencent/st-message-box/pages/feedback/detail.wxml",
      "./pages/messagebox/feedback/detail.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_10_1();
      var hSJ = _v();
      _(r, hSJ);
      if (_oz(z, 0, e, s, gg)) {
        hSJ.wxVkey = 1;
        var oTJ = _v();
        _(hSJ, oTJ);
        var cUJ = function (lWJ, oVJ, aXJ, gg) {
          var eZJ = _v();
          _(aXJ, eZJ);
          if (_oz(z, 4, lWJ, oVJ, gg)) {
            eZJ.wxVkey = 1;
          }
          eZJ.wxXCkey = 1;
          return aXJ;
        };
        oTJ.wxXCkey = 2;
        _2z(z, 2, cUJ, e, s, gg, oTJ, "item", "index", "h");
      }
      hSJ.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_10_2();
      var o2J = _n("view");
      _rz(z, o2J, "class", 0, e, s, gg);
      var o4J = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(o2J, o4J);
      var x3J = _v();
      _(o2J, x3J);
      if (_oz(z, 4, e, s, gg)) {
        x3J.wxVkey = 1;
        var f5J = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(x3J, f5J);
      }
      var c6J = _mz(
        z,
        "feedback-detail",
        ["bind:__l", 9, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(o2J, c6J);
      x3J.wxXCkey = 1;
      x3J.wxXCkey = 3;
      _(r, o2J);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx44_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx44_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/pages/feedback/detail.wxml"
  ] = [
    $gwx44_XC_10,
    "./pages/messagebox/@tencent/st-message-box/pages/feedback/detail.wxml",
  ];
else
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/pages/feedback/detail.wxml"
  ] = $gwx44_XC_10(
    "./pages/messagebox/@tencent/st-message-box/pages/feedback/detail.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/messagebox/feedback/detail.wxml"] = [
    $gwx44_XC_10,
    "./pages/messagebox/feedback/detail.wxml",
  ];
else
  __wxAppCode__["pages/messagebox/feedback/detail.wxml"] = $gwx44_XC_10(
    "./pages/messagebox/feedback/detail.wxml"
  );
__wxRoute = "pages/messagebox/@tencent/st-message-box/pages/feedback/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/messagebox/@tencent/st-message-box/pages/feedback/detail.js";
define(
  "pages/messagebox/@tencent/st-message-box/pages/feedback/detail.js",
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
    var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../../common/vendor.js"),
      n = require("../../utils/api.js"),
      s = require("../../utils/dealData.js"),
      r = {
        setup: function () {
          var r = t.ref({}),
            a = t.inject("stockBridge");
          function i() {
            return (
              (t = this),
              null,
              (i = e().mark(function () {
                var t, i, o, c;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i =
                            (null == (t = a.getCurRouteInfo())
                              ? void 0
                              : t.query) || {}),
                          (o = i.id),
                          (e.next = 4),
                          n.queryFeedbackDetailMessage(o)
                        );
                      case 4:
                        (c = e.sent),
                          (r.value = s.dealFeedbackDetailMessage(c));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, c);
              })),
              new Promise(function (e, n) {
                var s = function (e) {
                    try {
                      a(i.next(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  r = function (e) {
                    try {
                      a(i.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  a = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(s, r);
                  };
                a((i = i.apply(t, null)).next());
              })
            );
            var t, i;
          }
          return (
            a.report("yy.message_box.feedbackdetail_page_brow"),
            t.onMounted(function () {
              i();
            }),
            t.onActivated(function () {
              i();
            }),
            { messageDetail: r, getDetail: i }
          );
        },
      },
      a = t._export_sfc(r, [
        [
          "render",
          function (e, n, s, r, a, i) {
            return t.e(
              {
                a: t.t(r.messageDetail.user_feedback_content),
                b: t.t(r.messageDetail.createdtime),
                c: t.t(r.messageDetail.record_type),
                d:
                  r.messageDetail &&
                  r.messageDetail.process_nodes &&
                  r.messageDetail.process_nodes.length > 0,
              },
              r.messageDetail &&
                r.messageDetail.process_nodes &&
                r.messageDetail.process_nodes.length > 0
                ? {
                    e: t.f(r.messageDetail.process_nodes, function (e, n, s) {
                      return t.e(
                        {
                          a: t.n(
                            n > 0
                              ? "f-d-list-item-l-dot-s"
                              : "f-d-list-item-l-dot"
                          ),
                          b: t.t(e.title),
                          c: t.n(
                            n > 0
                              ? "f-d-list-item-r-content-g"
                              : "f-d-list-item-r-content"
                          ),
                          d: t.t(e.subtitle),
                          e: e.content,
                        },
                        e.content ? { f: t.t(e.content) } : {},
                        { g: t.t(e.processtime), h: n }
                      );
                    }),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-37feddb2"],
      ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/messagebox/@tencent/st-message-box/pages/feedback/detail.js",
  }
);
require("pages/messagebox/@tencent/st-message-box/pages/feedback/detail.js");
__wxRoute = "pages/messagebox/feedback/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/messagebox/feedback/detail.js";
define(
  "pages/messagebox/feedback/detail.js",
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
      n = require("../../../common/vendor.js"),
      t = {
        components: {
          feedbackDetail: function () {
            return "../@tencent/st-message-box/pages/feedback/detail.js";
          },
        },
        provide: function () {
          return { TradeFunc: n.sdkBridge, stockBridge: this.stockBridge };
        },
        data: function () {
          return { stockBridge: n.StockBridge };
        },
        onLoad: function () {
          this.stockBridge.setTitle("进度详情");
        },
        mounted: function () {},
        onShow: function () {},
        onHide: function () {},
        onUnload: function () {},
        onShareAppMessage: function () {
          return (
            (n = this),
            null,
            (t = e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })),
            new Promise(function (e, o) {
              var r = function (e) {
                  try {
                    c(t.next(e));
                  } catch (e) {
                    o(e);
                  }
                },
                i = function (e) {
                  try {
                    c(t.throw(e));
                  } catch (e) {
                    o(e);
                  }
                },
                c = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(r, i);
                };
              c((t = t.apply(n, null)).next());
            })
          );
          var n, t;
        },
        methods: {},
      };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog") +
        n.resolveComponent("feedback-detail")
      )();
    var o = n._export_sfc(t, [
      [
        "render",
        function (e, t, o, r, i, c) {
          return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }) };
        },
      ],
      ["__scopeId", "data-v-3d9b2c06"],
    ]);
    (t.__runtimeHooks = 2), wx.createPage(o);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/messagebox/feedback/detail.js",
  }
);
require("pages/messagebox/feedback/detail.js");
