$gwx6_XC_8 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_8 || [];
    function gz$gwx6_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_8_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_8_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_8_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div container data-v-5b0853a3"]);
        Z([3, "__l"]);
        Z([3, "data-v-5b0853a3"]);
        Z([3, "5b0853a3-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "5b0853a3-1"]);
        Z(z[4]);
        Z([3, "item"]);
        Z([[7], [3, "c"]]);
        Z([3, "e"]);
        Z([[6], [[7], [3, "item"]], [3, "g"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-5b0853a3"]],
              [1, "broker-item"],
            ],
            [
              [2, "&&"],
              [[6], [[7], [3, "item"]], [3, "f"]],
              [1, "space-between"],
            ],
          ],
        ]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z(z[1]);
        Z([3, "broker-logo data-v-5b0853a3"]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z(z[14]);
        Z([[7], [3, "g"]]);
        Z(z[1]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([
          [2, "!"],
          [[7], [3, "e"]],
        ]);
        Z([3, "5b0853a3-3"]);
        Z(z[19]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_8_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_8 = true;
    var x = ["./pages/account/switch.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_8_1();
      var oLD = _n("view");
      _rz(z, oLD, "class", 0, e, s, gg);
      var lOD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oLD, lOD);
      var cMD = _v();
      _(oLD, cMD);
      if (_oz(z, 4, e, s, gg)) {
        cMD.wxVkey = 1;
        var aPD = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(cMD, aPD);
      }
      var tQD = _v();
      _(oLD, tQD);
      var eRD = function (oTD, bSD, xUD, gg) {
        var fWD = _mz(z, "view", ["bindtap", 12, "class", 1], [], oTD, bSD, gg);
        var cXD = _v();
        _(fWD, cXD);
        if (_oz(z, 14, oTD, bSD, gg)) {
          cXD.wxVkey = 1;
          var hYD = _mz(
            z,
            "broker-logo",
            ["bind:__l", 15, "class", 1, "uI", 2, "uP", 3],
            [],
            oTD,
            bSD,
            gg
          );
          _(cXD, hYD);
        }
        cXD.wxXCkey = 1;
        cXD.wxXCkey = 3;
        _(xUD, fWD);
        return xUD;
      };
      tQD.wxXCkey = 4;
      _2z(z, 10, eRD, e, s, gg, tQD, "item", "index", "e");
      var oND = _v();
      _(oLD, oND);
      if (_oz(z, 19, e, s, gg)) {
        oND.wxVkey = 1;
        var oZD = _mz(
          z,
          "broker-action-sheet",
          [
            "bind:__l",
            20,
            "bindclose",
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
        _(oND, oZD);
      }
      cMD.wxXCkey = 1;
      cMD.wxXCkey = 3;
      oND.wxXCkey = 1;
      oND.wxXCkey = 3;
      _(r, oLD);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_8();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/switch.wxml"] = [
    $gwx6_XC_8,
    "./pages/account/switch.wxml",
  ];
else
  __wxAppCode__["pages/account/switch.wxml"] = $gwx6_XC_8(
    "./pages/account/switch.wxml"
  );
__wxRoute = "pages/account/switch";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/switch.js";
define(
  "pages/account/switch.js",
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
      r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      o = Object.defineProperty,
      t = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      c = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable,
      u = function (e, r, t) {
        return r in e
          ? o(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      },
      s = require("../../common/vendor.js"),
      l = {
        components: {
          BrokerLogo: function () {
            return "../apply/components/BrokerLogo.js";
          },
          BrokerActionSheet: function () {
            return "../apply/components/BrokerActionSheet.js";
          },
        },
        setup: function () {
          var o = this,
            l = getApp().globalData.stat,
            p = s.ref([]),
            f = s.ref(!1);
          return (
            s.onMounted(function () {
              return (
                (l = o),
                null,
                (f = e().mark(function o() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.sdkBridge.fetchBrokerInfo();
                        case 2:
                          !(function () {
                            var e,
                              o = s.sdkBridge.getHasBindList(),
                              l =
                                null == (e = s.sdkBridge.getCurrentBroker())
                                  ? void 0
                                  : e.code;
                            p.value = o
                              .map(function (e) {
                                return (
                                  (o = (function (e, o) {
                                    for (var t in o || (o = {}))
                                      a.call(o, t) && u(e, t, o[t]);
                                    if (c) {
                                      var n,
                                        s = r(c(o));
                                      try {
                                        for (s.s(); !(n = s.n()).done; ) {
                                          t = n.value;
                                          i.call(o, t) && u(e, t, o[t]);
                                        }
                                      } catch (e) {
                                        s.e(e);
                                      } finally {
                                        s.f();
                                      }
                                    }
                                    return e;
                                  })({}, e)),
                                  (s = { usestatus: e.code === l }),
                                  t(o, n(s))
                                );
                                var o, s;
                              })
                              .sort(function (e) {
                                return e.usestatus ? -1 : 0;
                              });
                          })();
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, o);
                })),
                new Promise(function (e, r) {
                  var o = function (e) {
                      try {
                        n(f.next(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    t = function (e) {
                      try {
                        n(f.throw(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    n = function (r) {
                      return r.done
                        ? e(r.value)
                        : Promise.resolve(r.value).then(o, t);
                    };
                  n((f = f.apply(l, null)).next());
                })
              );
              var l, f;
            }),
            {
              dealerList: p,
              goSwitchAccount: function (e) {
                var r = e.code;
                l.click("switchbroker.main.".concat(r)),
                  e.usestatus ||
                    (s.sdkBridge.isMaintain({ broker: r, biz: "trade" })
                      ? s.wx$1.navigateTo({
                          url: "/pages/broker/system/error?reason=maintain&broker=".concat(
                            r
                          ),
                        })
                      : s.sdkBridge.navToBrokerPage({
                          broker: r,
                          name: "AccountSwitching",
                        }));
              },
              onBrokerSheetShow: function () {
                (f.value = !0),
                  l.click("base.switch_broker.gobrokermanagement_click");
              },
              onBrokerSheetClose: function () {
                f.value = !1;
              },
              showAccountBrokerSheet: f,
            }
          );
        },
      };
    Array ||
      (
        s.resolveComponent("mp-privacy-dialog") +
        s.resolveComponent("stock-privacy-dialog") +
        s.resolveComponent("broker-logo") +
        s.resolveComponent("broker-action-sheet")
      )();
    var p = s._export_sfc(l, [
      [
        "render",
        function (e, r, o, t, n, c) {
          return {
            a: e.rootFontSize,
            b: s.p({ "no-auto": !0 }),
            c: s.f(t.dealerList, function (e, r, o) {
              return {
                a: "5b0853a3-2-" + o,
                b: s.p({ "broker-code": e.code }),
                c: s.t(e.name),
                d: e.usestatus ? "" : 1,
                e: e.code,
                f: e.usestatus ? 1 : "",
                g: s.o(
                  function (r) {
                    return t.goSwitchAccount(e);
                  },
                  257,
                  e.code
                ),
              };
            }),
            d: s.o(function () {
              return (
                t.onBrokerSheetShow && t.onBrokerSheetShow.apply(t, arguments)
              );
            }, 258),
            e: t.showAccountBrokerSheet,
            f: s.o(t.onBrokerSheetClose, 259),
            g: s.p({ type: "normal" }),
          };
        },
      ],
      ["__scopeId", "data-v-5b0853a3"],
    ]);
    wx.createPage(p);
  },
  { isPage: true, isComponent: true, currentFile: "pages/account/switch.js" }
);
require("pages/account/switch.js");
