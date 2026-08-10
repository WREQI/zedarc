$gwx34_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_4 || [];
    function gz$gwx34_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div container"]);
        Z([3, "__l"]);
        Z([3, "4ee0bfe6-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "4ee0bfe6-1"]);
        Z(z[3]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z([[7], [3, "d"]]);
        Z([3, "4ee0bfe6-2"]);
        Z(z[8]);
        Z([[7], [3, "f"]]);
        Z([3, "item"]);
        Z([[7], [3, "g"]]);
        Z([3, "i"]);
        Z([[6], [[7], [3, "item"]], [3, "j"]]);
        Z([3, "_div calendar-item"]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z([[7], [3, "j"]]);
        Z(z[1]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
        Z([3, "4ee0bfe6-3"]);
        Z(z[20]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_4 = true;
    var x = ["./pages/act/investcalendar/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_4_1();
      var o2B = _n("view");
      _rz(z, o2B, "class", 0, e, s, gg);
      var a6B = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(o2B, a6B);
      var c3B = _v();
      _(o2B, c3B);
      if (_oz(z, 3, e, s, gg)) {
        c3B.wxVkey = 1;
        var t7B = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(c3B, t7B);
      }
      var o4B = _v();
      _(o2B, o4B);
      if (_oz(z, 7, e, s, gg)) {
        o4B.wxVkey = 1;
        var e8B = _v();
        _(o4B, e8B);
        if (_oz(z, 8, e, s, gg)) {
          e8B.wxVkey = 1;
          var b9B = _mz(
            z,
            "st-status",
            ["bind:__l", 9, "bindhandleError", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(e8B, b9B);
        }
        e8B.wxXCkey = 1;
        e8B.wxXCkey = 3;
      } else if (_oz(z, 13, e, s, gg)) {
        o4B.wxVkey = 2;
        var o0B = _v();
        _(o4B, o0B);
        var xAC = function (fCC, oBC, cDC, gg) {
          var oFC = _mz(
            z,
            "view",
            ["bindtap", 17, "class", 1],
            [],
            fCC,
            oBC,
            gg
          );
          var cGC = _v();
          _(oFC, cGC);
          if (_oz(z, 19, fCC, oBC, gg)) {
            cGC.wxVkey = 1;
          }
          cGC.wxXCkey = 1;
          _(cDC, oFC);
          return cDC;
        };
        o0B.wxXCkey = 2;
        _2z(z, 15, xAC, e, s, gg, o0B, "item", "index", "i");
      }
      var l5B = _v();
      _(o2B, l5B);
      if (_oz(z, 20, e, s, gg)) {
        l5B.wxVkey = 1;
        var oHC = _mz(
          z,
          "subscribe-guide",
          ["bind:__l", 21, "bindclose", 1, "bindsetting", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(l5B, oHC);
      }
      c3B.wxXCkey = 1;
      c3B.wxXCkey = 3;
      o4B.wxXCkey = 1;
      o4B.wxXCkey = 3;
      l5B.wxXCkey = 1;
      l5B.wxXCkey = 3;
      _(r, o2B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/investcalendar/main.wxml"] = [
    $gwx34_XC_4,
    "./pages/act/investcalendar/main.wxml",
  ];
else
  __wxAppCode__["pages/act/investcalendar/main.wxml"] = $gwx34_XC_4(
    "./pages/act/investcalendar/main.wxml"
  );
__wxRoute = "pages/act/investcalendar/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/act/investcalendar/main.js";
define(
  "pages/act/investcalendar/main.js",
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
    var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = function (t, e, n) {
        return new Promise(function (r, a) {
          var i = function (t) {
              try {
                c(n.next(t));
              } catch (t) {
                a(t);
              }
            },
            s = function (t) {
              try {
                c(n.throw(t));
              } catch (t) {
                a(t);
              }
            },
            c = function (t) {
              return t.done ? r(t.value) : Promise.resolve(t.value).then(i, s);
            };
          c((n = n.apply(t, e)).next());
        });
      },
      n = require("../../../common/vendor.js"),
      r = require("./api.js"),
      a = {
        components: {
          SubscribeGuide: function () {
            return "../../asyncCom/components/subscribeGuide.js";
          },
        },
        data: function () {
          return {
            error: "",
            list: [],
            showSubscribeGuide: !1,
            settingBackFlag: !1,
          };
        },
        onShow: function () {
          return e(
            this,
            null,
            t().mark(function e() {
              var r, a;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!this.settingBackFlag) {
                          t.next = 15;
                          break;
                        }
                        return (
                          (t.t1 = n),
                          (t.next = 4),
                          n.getTemplateId(
                            null == (r = this.calendarData)
                              ? void 0
                              : r.templateId
                          )
                        );
                      case 4:
                        return (
                          (t.t2 = t.sent),
                          (t.next = 7),
                          t.t1.querySubscribeSwitch.call(t.t1, t.t2)
                        );
                      case 7:
                        if (((t.t0 = t.sent), t.t0)) {
                          t.next = 10;
                          break;
                        }
                        t.t0 = {};
                      case 10:
                        (a = t.t0),
                          "accept" === a.status &&
                            this.calendarsSubscribe(this.calendarData, 0),
                          (t.next = 16);
                        break;
                      case 15:
                        this.setListData();
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this
              );
            })
          );
        },
        onLoad: function () {
          n.wx$1.setNavigationBarTitle({ title: "公共日历" });
        },
        methods: {
          setListData: function () {
            return e(
              this,
              null,
              t().mark(function e() {
                var a, i, s;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), r.getCalendarsList();
                        case 2:
                          (a = t.sent),
                            (i = a.code),
                            (s = a.Calendars),
                            0 === i
                              ? ((this.list = s), (this.error = ""))
                              : (this.error = n.COMMON_PAGE_STATUS.ERROR);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
          handleGoDetail: function (t) {
            n.Request.reportMTAData({
              eventName: "yy.investcalendar.list_item_click",
              calendarid: t,
            }),
              n.wx$1.navigateTo({
                url: "/pages/act/investcalendar/detail?id=".concat(t),
              });
          },
          handleSubscrib: function (r) {
            return e(
              this,
              null,
              t().mark(function e() {
                var a, i, s, c;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), !this.clickFlag)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          if (
                            ((this.clickFlag = !0),
                            (a = null == r ? void 0 : r.templateId),
                            n.Request.reportMTAData({
                              eventName:
                                "yy.investcalendar.list_subscribe_click",
                              calendarid: null == r ? void 0 : r.calendarId,
                            }),
                            (this.calendarData = r),
                            a)
                          ) {
                            t.next = 7;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            ((this.clickFlag = !1),
                            void n.wx$1.showToast({
                              title: "缺少消息模版，请稍后再试",
                              icon: "none",
                              duration: 2e3,
                            }))
                          );
                        case 7:
                          return (t.t1 = n), (t.next = 10), n.getTemplateId(a);
                        case 10:
                          return (
                            (t.t2 = t.sent),
                            (t.next = 13),
                            t.t1.querySubscribeSwitch.call(t.t1, t.t2)
                          );
                        case 13:
                          if (((t.t0 = t.sent), t.t0)) {
                            t.next = 16;
                            break;
                          }
                          t.t0 = {};
                        case 16:
                          if (
                            ((i = t.t0), (s = i.mainSwitch), (c = i.status), s)
                          ) {
                            t.next = 21;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            ((this.showSubscribeGuide = !0),
                            void (this.clickFlag = !1))
                          );
                        case 21:
                          "reject" === c
                            ? ((this.showSubscribeGuide = !0),
                              (this.clickFlag = !1))
                            : this.subscribeStockRemind(r),
                            (t.next = 27);
                          break;
                        case 24:
                          (t.prev = 24),
                            (t.t3 = t.catch(0)),
                            (this.clickFlag = !1);
                        case 27:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 24]]
                );
              })
            );
          },
          subscribeStockRemind: function (r) {
            return e(
              this,
              null,
              t().mark(function e() {
                var a, i, s;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (i =
                              null == (a = this.calendarData)
                                ? void 0
                                : a.templateId),
                            (t.t0 = n),
                            (t.t1 = i),
                            (t.next = 6),
                            n.getTemplateId(i)
                          );
                        case 6:
                          return (
                            (t.t2 = t.sent),
                            (t.next = 9),
                            t.t0.subscribe.call(t.t0, t.t1, t.t2)
                          );
                        case 9:
                          "accept" === (s = t.sent)
                            ? this.calendarsSubscribe(r, 0)
                            : "reject" !== s &&
                              n.wx$1.showToast({
                                title: "订阅失败",
                                duration: 1500,
                              }),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t3 = t.catch(0)),
                            n.wx$1.showToast({
                              title: "订阅失败",
                              duration: 1500,
                            });
                        case 16:
                          this.clickFlag = !1;
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 13]]
                );
              })
            );
          },
          calendarsSubscribe: function (a, i) {
            return e(
              this,
              null,
              t().mark(function e() {
                var s, c, u, o, l, d, b;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = null == a ? void 0 : a.calendarId),
                            (t.next = 3),
                            r.calendarsSubscribe({ calendar_id: c, cmd: i })
                          );
                        case 3:
                          if (0 !== (null == (u = t.sent) ? void 0 : u.code)) {
                            t.next = 12;
                            break;
                          }
                          return (
                            n.wx$1.showToast({
                              title: i ? "已取消订阅" : "订阅成功",
                              icon: i ? "none" : "success",
                              duration: 1500,
                            }),
                            (this.settingBackFlag = !1),
                            (t.next = 8),
                            r.getCalendarsList()
                          );
                        case 8:
                          (o = t.sent),
                            (l = o.code),
                            (d = o.Calendars),
                            0 === l &&
                              (b =
                                (null ==
                                (s = d.filter(function (t) {
                                  return t.calendarId === c;
                                }))
                                  ? void 0
                                  : s[0]) || "") &&
                              this.list.forEach(function (t) {
                                (null == t ? void 0 : t.calendarId) === c &&
                                  ((t.avatars = b.avatars),
                                  (t.subscribing = b.subscribing),
                                  (t.subscribers = b.subscribers));
                              });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
          handleGuideSetting: function () {
            this.settingBackFlag = !0;
          },
        },
      };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog") +
        n.resolveComponent("st-status") +
        n.resolveComponent("SubscribeGuide")
      )();
    var i = n._export_sfc(a, [
      [
        "render",
        function (t, e, r, a, i, s) {
          return n.e(
            { a: t.rootFontSize, b: n.p({ "no-auto": !0 }), c: i.error },
            i.error
              ? {
                  d: n.o(function (t) {
                    return s.setListData();
                  }, 390),
                  e: n.p({ type: i.error }),
                }
              : i.list.length
              ? {
                  g: n.f(i.list, function (t, e, r) {
                    return n.e(
                      {
                        a: n.n(t.bgColor),
                        b: n.t(t.title),
                        c: t.avatars.length,
                      },
                      t.avatars.length
                        ? {
                            d: n.f(t.avatars, function (t, e, n) {
                              return { a: t };
                            }),
                          }
                        : {},
                      { e: n.t(t.subscribers), f: t.subscribing },
                      t.subscribing
                        ? {}
                        : {
                            g: n.o(
                              function (e) {
                                return s.handleSubscrib(t);
                              },
                              391,
                              e
                            ),
                          },
                      {
                        h: e === i.list.length - 1 ? 1 : "",
                        i: e,
                        j: n.o(
                          function (e) {
                            return s.handleGoDetail(t.calendarId);
                          },
                          392,
                          e
                        ),
                      }
                    );
                  }),
                }
              : {},
            {
              f: i.list.length,
              h: n.o(function (t) {
                return (i.showSubscribeGuide = !1);
              }, 393),
              i: n.o(s.handleGuideSetting, 394),
              j: n.p({
                show: i.showSubscribeGuide,
                title: "开启投资日历通知",
                gifImg:
                  "https://st.gtimg.com/design/c3dcc0cb3c8838ae1cb73abec2addb2b.gif",
              }),
            }
          );
        },
      ],
    ]);
    wx.createPage(i);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/act/investcalendar/main.js",
  }
);
require("pages/act/investcalendar/main.js");
