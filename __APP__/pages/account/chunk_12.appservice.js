$gwx6_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_4 || [];
    function gz$gwx6_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div protocol-container data-v-3fc6d9f8"]);
        Z([3, "__l"]);
        Z([3, "data-v-3fc6d9f8"]);
        Z([3, "3fc6d9f8-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "3fc6d9f8-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_4 = true;
    var x = ["./pages/account/protocol.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_4_1();
      var lWC = _n("view");
      _rz(z, lWC, "class", 0, e, s, gg);
      var tYC = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(lWC, tYC);
      var aXC = _v();
      _(lWC, aXC);
      if (_oz(z, 4, e, s, gg)) {
        aXC.wxVkey = 1;
        var eZC = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(aXC, eZC);
      }
      aXC.wxXCkey = 1;
      aXC.wxXCkey = 3;
      _(r, lWC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/protocol.wxml"] = [
    $gwx6_XC_4,
    "./pages/account/protocol.wxml",
  ];
else
  __wxAppCode__["pages/account/protocol.wxml"] = $gwx6_XC_4(
    "./pages/account/protocol.wxml"
  );
__wxRoute = "pages/account/protocol";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/protocol.js";
define(
  "pages/account/protocol.js",
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
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      e = function (t, e, n) {
        return new Promise(function (r, o) {
          var a = function (t) {
              try {
                i(n.next(t));
              } catch (t) {
                o(t);
              }
            },
            c = function (t) {
              try {
                i(n.throw(t));
              } catch (t) {
                o(t);
              }
            },
            i = function (t) {
              return t.done ? r(t.value) : Promise.resolve(t.value).then(a, c);
            };
          i((n = n.apply(t, e)).next());
        });
      },
      n = require("../../common/vendor.js");
    getApp().globalData;
    var r = {
      data: function () {
        return { protocalList: [], showDate: "" };
      },
      created: function () {
        this.querySetting();
      },
      methods: {
        onCancel: function () {
          n.StockBridge.store.publishProtocolStatus("reject"),
            this.updateUserArgreementStatus("refuse1"),
            n.wx$1.showToast({
              title: "您已进入浏览模式",
              icon: "none",
              duration: 3e3,
            });
        },
        onConfirm: function () {
          n.Request.reportMTAData({
            eventName: "base.account.protocolbanner.btnclick",
          }),
            n.StockBridge.store.publishProtocolStatus("agree"),
            this.updateUserArgreementStatus("agree");
        },
        updateUserArgreementStatus: function (r) {
          return e(
            this,
            null,
            t().mark(function e() {
              var o;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (o = this.protocalList.map(function (t) {
                            return t.id;
                          })),
                          (t.prev = 1),
                          (t.next = 4),
                          n.AccountAPI.updateUserArgreementStatus({
                            action: r,
                            agreement_ids: o,
                          })
                        );
                      case 4:
                        t.next = 8;
                        break;
                      case 6:
                        (t.prev = 6), (t.t0 = t.catch(1));
                      case 8:
                        n.StockBridge.store.getProtocolStatus(),
                          setTimeout(function () {
                            n.wx$1.switchTab({
                              url: "/pages/index/account/main",
                            });
                          }, 300);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this,
                [[1, 6]]
              );
            })
          );
        },
        formatDate: function (t) {
          var e = new Date(t);
          return ""
            .concat(e.getFullYear(), " 年 ")
            .concat(e.getMonth() + 1, " 月 ")
            .concat(e.getDate(), " 日");
        },
        goProtocol: function (t) {
          n.Request.reportMTAData({
            eventName: "base.account.protocolbanner.read_btn_click",
          });
          var e = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(t)
          );
          n.wx$1.navigateTo({ url: e });
        },
        in7Day: function (t, e) {
          var n = (t - e) / 86400;
          return n >= 0 && n < 7;
        },
        querySetting: function () {
          return e(
            this,
            null,
            t().mark(function e() {
              var r,
                o,
                a,
                c = this;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (r = n.StockBridge.store),
                          (o = r.protocolServerTime),
                          (a = r.allProtocolList) &&
                            a.length &&
                            a.some(function (t) {
                              return t.consented_any_version;
                            }) &&
                            ((this.protocalList = a.filter(function (t) {
                              return (
                                "0" === t.status &&
                                c.in7Day(+o, +t.publish_time)
                              );
                            })),
                            (this.showDate =
                              1e3 *
                              a.sort(function (t, e) {
                                return e.publish_time - t.publish_time;
                              })[0].publish_time));
                      case 2:
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
      },
    };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog")
      )();
    var o = n._export_sfc(r, [
      [
        "render",
        function (t, e, r, o, a, c) {
          return {
            a: t.rootFontSize,
            b: n.p({ "no-auto": !0 }),
            c: n.f(a.protocalList, function (t, e, r) {
              return { a: n.t(t.title), b: e };
            }),
            d: n.t(c.formatDate(a.showDate)),
            e: n.f(a.protocalList, function (t, e, r) {
              return {
                a: n.t(t.title),
                b: e,
                c: n.o(
                  function (e) {
                    return c.goProtocol(t.url);
                  },
                  241,
                  e
                ),
              };
            }),
            f: n.t(c.formatDate(a.showDate)),
            g: n.o(function () {
              return c.onCancel && c.onCancel.apply(c, arguments);
            }, 242),
            h: n.o(function () {
              return c.onConfirm && c.onConfirm.apply(c, arguments);
            }, 243),
          };
        },
      ],
      ["__scopeId", "data-v-3fc6d9f8"],
    ]);
    wx.createPage(o);
  },
  { isPage: true, isComponent: true, currentFile: "pages/account/protocol.js" }
);
require("pages/account/protocol.js");
