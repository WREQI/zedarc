$gwx44_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx44_XC_11 || [];
    function gz$gwx44_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "d"]]);
        Z([3, "item"]);
        Z([[7], [3, "e"]]);
        Z([3, "l"]);
        Z([[6], [[7], [3, "item"]], [3, "m"]]);
        Z([3, "_div message-item data-v-9942375f"]);
        Z([[6], [[7], [3, "item"]], [3, "g"]]);
        Z([[6], [[7], [3, "item"]], [3, "k"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_11_1;
    }
    function gz$gwx44_XC_11_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_11_2)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_11_2;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_11_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div home-container data-v-4fcc53bb"]);
        Z([3, "__l"]);
        Z([3, "data-v-4fcc53bb"]);
        Z([3, "4fcc53bb-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "4fcc53bb-1"]);
        Z(z[4]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "4fcc53bb-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_11_2);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_11_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx44_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx44_XC_11 = true;
    var x = [
      "./pages/messagebox/@tencent/st-message-box/pages/home/index.wxml",
      "./pages/messagebox/home/main.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_11_1();
      var o8J = _v();
      _(r, o8J);
      if (_oz(z, 0, e, s, gg)) {
        o8J.wxVkey = 1;
        var c9J = _v();
        _(o8J, c9J);
        var o0J = function (aBK, lAK, tCK, gg) {
          var bEK = _mz(
            z,
            "view",
            ["bindtap", 4, "class", 1],
            [],
            aBK,
            lAK,
            gg
          );
          var oFK = _v();
          _(bEK, oFK);
          if (_oz(z, 6, aBK, lAK, gg)) {
            oFK.wxVkey = 1;
          }
          var xGK = _v();
          _(bEK, xGK);
          if (_oz(z, 7, aBK, lAK, gg)) {
            xGK.wxVkey = 1;
          }
          oFK.wxXCkey = 1;
          xGK.wxXCkey = 1;
          _(tCK, bEK);
          return tCK;
        };
        c9J.wxXCkey = 2;
        _2z(z, 2, o0J, e, s, gg, c9J, "item", "index", "l");
      }
      o8J.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_11_2();
      var fIK = _n("view");
      _rz(z, fIK, "class", 0, e, s, gg);
      var hKK = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(fIK, hKK);
      var cJK = _v();
      _(fIK, cJK);
      if (_oz(z, 4, e, s, gg)) {
        cJK.wxVkey = 1;
        var oLK = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(cJK, oLK);
      }
      var cMK = _mz(
        z,
        "home",
        ["bind:__l", 9, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(fIK, cMK);
      cJK.wxXCkey = 1;
      cJK.wxXCkey = 3;
      _(r, fIK);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx44_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx44_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/pages/home/index.wxml"
  ] = [
    $gwx44_XC_11,
    "./pages/messagebox/@tencent/st-message-box/pages/home/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/pages/home/index.wxml"
  ] = $gwx44_XC_11(
    "./pages/messagebox/@tencent/st-message-box/pages/home/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/messagebox/home/main.wxml"] = [
    $gwx44_XC_11,
    "./pages/messagebox/home/main.wxml",
  ];
else
  __wxAppCode__["pages/messagebox/home/main.wxml"] = $gwx44_XC_11(
    "./pages/messagebox/home/main.wxml"
  );
__wxRoute = "pages/messagebox/@tencent/st-message-box/pages/home/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/messagebox/@tencent/st-message-box/pages/home/index.js";
define(
  "pages/messagebox/@tencent/st-message-box/pages/home/index.js",
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
      n = function (e, n, r) {
        return new Promise(function (t, a) {
          var u = function (e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            },
            o = function (e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            },
            c = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(u, o);
            };
          c((r = r.apply(e, n)).next());
        });
      },
      r = require("../../../../../../common/vendor.js"),
      t = require("../../utils/api.js"),
      a = require("../../utils/dealData.js"),
      u = {
        onPageShow: function () {
          this.initData();
        },
        setup: function () {
          var u = r.inject("stockBridge"),
            o = r.inject("TradeFunc"),
            c = r.ref({}),
            s = r.ref(!1),
            i = r.ref(""),
            l = r.ref(!1),
            m = r.ref(0);
          function _() {
            return n(
              this,
              null,
              e().mark(function r() {
                var _, d;
                return e().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (Date.now() - m.value < 5e3) {
                            r.next = 15;
                            break;
                          }
                          return (
                            (m.value = Date.now()),
                            (r.prev = 2),
                            (r.next = 5),
                            (function () {
                              return n(
                                this,
                                null,
                                e().mark(function n() {
                                  return e().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2), o.fetchBrokerInfo()
                                          );
                                        case 2:
                                          o.isBind() &&
                                            (i.value =
                                              o.getCurrentBroker().code || "");
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, n);
                                })
                              );
                            })()
                          );
                        case 5:
                          return (
                            (r.next = 7),
                            t.queryMessagelist({ dealer_code: i.value })
                          );
                        case 7:
                          (_ = r.sent),
                            (d = a.dealMessageList(_.items)),
                            (c.value = d.renderlist),
                            (s.value = d.canclear),
                            (l.value = !0),
                            c.value.forEach(function (e) {
                              e.unread_num > 0 &&
                                u.report(
                                  "yy.message_box.".concat(
                                    e.msg_box_type,
                                    "_red_brow"
                                  ),
                                  { msg_num: e.unread_num }
                                );
                            }),
                            (r.next = 15);
                          break;
                        case 12:
                          (r.prev = 12),
                            (r.t0 = r.catch(2)),
                            (l.value = !0),
                            (c.value = a.EMPTY_LIST);
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 12]]
                );
              })
            );
          }
          return (
            r.onActivated(function () {
              _();
            }),
            _(),
            {
              renderList: c,
              jump: function (a) {
                return n(
                  this,
                  null,
                  e().mark(function n() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (u.report(
                                "yy.message_box.".concat(
                                  a.msg_box_type,
                                  "_entry_click"
                                )
                              ),
                              (e.t0 = a.unread_num > 0),
                              !e.t0)
                            ) {
                              e.next = 8;
                              break;
                            }
                            if (
                              ((e.t1 = "interaction" !== a.msg_box_type), !e.t1)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 7),
                              t.readMessage({
                                msg_box_type: a.msg_box_type,
                                dealer_code: i.value,
                              })
                            );
                          case 7:
                            u.report(
                              "yy.message_box.".concat(
                                a.msg_box_type,
                                "_red_click"
                              ),
                              { msg_num: a.unread_num }
                            );
                          case 8:
                            a.unsupported
                              ? r.StockRouter.routeTo({ name: "empty-message" })
                              : a.tradeflag
                              ? o.navToBrokerPage({
                                  broker: i.value,
                                  path: "/message/newbox",
                                })
                              : r.StockRouter.routeTo({ name: a.routename });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, n);
                  })
                );
              },
              canclear: s,
              clearAll: function () {
                var r = this;
                u.report("yy.message_box.list_clearall_click"),
                  s.value
                    ? u.modal({
                        content: "将全部信息标记为已读?",
                        showCancel: !0,
                        success: function () {
                          for (
                            var a = arguments.length, o = new Array(a), l = 0;
                            l < a;
                            l++
                          )
                            o[l] = arguments[l];
                          return n(r, [].concat(o), function () {
                            var n =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : { confirm: !0 };
                            return e().mark(function r() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!n.confirm) {
                                        e.next = 8;
                                        break;
                                      }
                                      return (
                                        (e.next = 3),
                                        t.readMessage({
                                          msg_box_type: "all",
                                          dealer_code: i.value,
                                        })
                                      );
                                    case 3:
                                      u.report(
                                        "yy.message_box.list_clearall_confirm"
                                      ),
                                        (s.value = !1),
                                        c.value.forEach(function (e) {
                                          (e.show_type = "num"),
                                            (e.unread_num = 0);
                                        }),
                                        (e.next = 9);
                                      break;
                                    case 8:
                                      u.report(
                                        "yy.message_box.list_clearall_cancel"
                                      );
                                    case 9:
                                    case "end":
                                      return e.stop();
                                  }
                              }, r);
                            })();
                          });
                        },
                        fail: function () {
                          u.report("yy.message_box.list_clearall_cancel");
                        },
                      })
                    : u.toast("当前无未读消息", "none");
              },
              initData: _,
              dataReady: l,
            }
          );
        },
      },
      o = r._export_sfc(u, [
        [
          "render",
          function (e, n, t, a, u, o) {
            return r.e(
              { a: a.canclear },
              a.canclear
                ? {
                    b: r.o(function () {
                      return a.clearAll && a.clearAll.apply(a, arguments);
                    }, 1242),
                  }
                : {
                    c: r.o(function () {
                      return a.clearAll && a.clearAll.apply(a, arguments);
                    }, 1243),
                  },
              { d: a.dataReady },
              a.dataReady
                ? {
                    e: r.f(a.renderList, function (e, n, t) {
                      return r.e(
                        {
                          a: e.icon,
                          b: "red_dot" === e.show_type && e.unread_num > 0,
                        },
                        "red_dot" === e.show_type && e.unread_num > 0
                          ? {}
                          : "num" === e.show_type && e.unread_num > 0
                          ? {
                              d: r.t(e.unread_num),
                              e: r.n(e.unread_num < 10 ? "single-num" : ""),
                            }
                          : {},
                        {
                          c: "num" === e.show_type && e.unread_num > 0,
                          f: r.t(e.title),
                          g: e.showTime,
                        },
                        e.showTime ? { h: r.t(e.time) } : {},
                        {
                          i: r.t(e.summary),
                          j: r.n(0 === e.unread_num ? "un-summary" : ""),
                          k: n < a.renderList.length - 1,
                        },
                        (a.renderList.length, {}),
                        {
                          l: n,
                          m: r.o(
                            function (e) {
                              return a.jump(a.renderList[n]);
                            },
                            1244,
                            n
                          ),
                        }
                      );
                    }),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-9942375f"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/messagebox/@tencent/st-message-box/pages/home/index.js",
  }
);
require("pages/messagebox/@tencent/st-message-box/pages/home/index.js");
__wxRoute = "pages/messagebox/home/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/messagebox/home/main.js";
define(
  "pages/messagebox/home/main.js",
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
      o = {
        components: {
          home: function () {
            return "../@tencent/st-message-box/pages/home/index.js";
          },
        },
        provide: function () {
          return { stockBridge: this.stockBridge, TradeFunc: n.sdkBridge };
        },
        data: function () {
          return { stockBridge: n.StockBridge };
        },
        onLoad: function () {
          this.stockBridge.setTitle("消息盒子");
        },
        mounted: function () {},
        onShow: function () {},
        onHide: function () {},
        onUnload: function () {},
        onShareAppMessage: function () {
          return (
            (n = this),
            null,
            (o = e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })),
            new Promise(function (e, t) {
              var r = function (e) {
                  try {
                    c(o.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (e) {
                  try {
                    c(o.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                c = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(r, i);
                };
              c((o = o.apply(n, null)).next());
            })
          );
          var n, o;
        },
        methods: {},
      };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog") +
        n.resolveComponent("home")
      )();
    var t = n._export_sfc(o, [
      [
        "render",
        function (e, o, t, r, i, c) {
          return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }) };
        },
      ],
      ["__scopeId", "data-v-4fcc53bb"],
    ]);
    (o.__runtimeHooks = 2), wx.createPage(t);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/messagebox/home/main.js",
  }
);
require("pages/messagebox/home/main.js");
