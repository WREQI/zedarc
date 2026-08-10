$gwx33_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx33_XC_3 || [];
    function gz$gwx33_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx33_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx33_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx33_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx33_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx33_XC_3_1;
    }
    function gz$gwx33_XC_3_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx33_XC_3_2)
        return __WXML_GLOBAL__.ops_cached.$gwx33_XC_3_2;
      __WXML_GLOBAL__.ops_cached.$gwx33_XC_3_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div rule-wrapper data-v-ad2dcff0"]);
        Z([3, "__l"]);
        Z([3, "data-v-ad2dcff0"]);
        Z([3, "ad2dcff0-0"]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "ad2dcff0-1"]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "ad2dcff0-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx33_XC_3_2);
      return __WXML_GLOBAL__.ops_cached.$gwx33_XC_3_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx33_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx33_XC_3 = true;
    var x = [
      "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.wxml",
      "./pages/mockTradeNew/rule/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx33_XC_3_1();
      var c5G = _v();
      _(r, c5G);
      if (_oz(z, 0, e, s, gg)) {
        c5G.wxVkey = 1;
      }
      c5G.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx33_XC_3_2();
      var l7G = _n("view");
      _rz(z, l7G, "class", 0, e, s, gg);
      var a8G = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(l7G, a8G);
      var t9G = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(l7G, t9G);
      var e0G = _mz(
        z,
        "mocktrade",
        ["bind:__l", 7, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(l7G, e0G);
      _(r, l7G);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx33_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx33_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.wxml"
  ] = [
    $gwx33_XC_3,
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.wxml"
  ] = $gwx33_XC_3(
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/mockTradeNew/rule/index.wxml"] = [
    $gwx33_XC_3,
    "./pages/mockTradeNew/rule/index.wxml",
  ];
else
  __wxAppCode__["pages/mockTradeNew/rule/index.wxml"] = $gwx33_XC_3(
    "./pages/mockTradeNew/rule/index.wxml"
  );
__wxRoute = "pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.js";
define(
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.js",
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
    var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = function (e, t, n) {
        return new Promise(function (r, a) {
          var o = function (e) {
              try {
                p(n.next(e));
              } catch (e) {
                a(e);
              }
            },
            c = function (e) {
              try {
                p(n.throw(e));
              } catch (e) {
                a(e);
              }
            },
            p = function (e) {
              return e.done ? r(e.value) : Promise.resolve(e.value).then(o, c);
            };
          p((n = n.apply(e, t)).next());
        });
      },
      n = require("../../../../../../../common/vendor.js");
    require("../../../../stock-utils/lib/appInfo/index.js");
    var r = require("../../cp-util/navigator/index.js"),
      a = {
        mpweapp: "微证券",
        mpwzq: "微证券",
        stock: "微证券",
        wzqlight: "微证券",
        hippy: "微证券",
      };
    n.wx$1.getAccountInfoSync();
    var o = {
        setup: function (o, c) {
          var p = this,
            u = (c.emit, n.ref("")),
            i = n.ref(""),
            m = n.ref(""),
            l = n.ref(a),
            s = function (r) {
              return t(
                p,
                null,
                e().mark(function t() {
                  var a, o, c, p, u, i;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              (a = {
                                mock_trade_rules: 50,
                                mock_trade_wzq_permit: 51,
                                mock_trade_wzq_privacy: 52,
                              })[r])
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return", void (m.value = ""));
                          case 4:
                            return (
                              (e.next = 6),
                              n.Wuji.get({
                                appid: "base",
                                schemaid: "protocol",
                                filter: encodeURIComponent(
                                  "id = ".concat(a[r])
                                ),
                              })
                            );
                          case 6:
                            (o = e.sent),
                              (c = (o.data && o.data[0]) || {}),
                              (p = c.content),
                              (u = void 0 === p ? "{}" : p),
                              (i = JSON.parse(u) || {}),
                              (m.value = i.content || ""),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14), (e.t0 = e.catch(0)), (m.value = "");
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 14]]
                  );
                })
              );
            },
            d = function () {
              return t(
                p,
                null,
                e().mark(function t() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = decodeURIComponent),
                            (e.next = 3),
                            r.getUrlParam("ruleName")
                          );
                        case 3:
                          if (((e.t1 = e.sent), e.t1)) {
                            e.next = 6;
                            break;
                          }
                          e.t1 = "腾讯".concat(l.value.mpweapp, "模拟炒股规则");
                        case 6:
                          return (
                            (e.t2 = e.t1),
                            (u.value = (0, e.t0)(e.t2)),
                            (e.t3 = decodeURIComponent),
                            (e.next = 11),
                            r.getUrlParam("ruleid")
                          );
                        case 11:
                          if (((e.t4 = e.sent), e.t4)) {
                            e.next = 14;
                            break;
                          }
                          e.t4 = "mock_trade_rules";
                        case 14:
                          (e.t5 = e.t4),
                            (i.value = (0, e.t3)(e.t5)),
                            s(i.value);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })
              );
            };
          return (
            d(),
            n.onActivated(function () {
              d();
            }),
            {
              name: u,
              id: i,
              ruleContent: m,
              platformMap: l,
              onShareAppMessage: function () {
                return {
                  title: "我在腾讯模拟炒股周赛赚大了",
                  path: "/pages/mockTrade/src/pages/home/index",
                  imageUrl:
                    "https://wzq.gtimg.com/image/mp-weapp/index/share-big.jpg",
                };
              },
              init: d,
              goXK: function () {
                var e = encodeURIComponent(
                    "腾讯".concat(l.value.mpweapp, "软件许可协议")
                  ),
                  t = encodeURIComponent("mock_trade_wzq_permit");
                "mpweapp" === n.ShellTypeEnum.SHY
                  ? r.push(
                      "qqstock://com.tencent.shy.mock_trade/mockruleXK?ruleName="
                        .concat(e, "&ruleid=")
                        .concat(t),
                      "shy",
                      { title: "模拟炒股", showNav: !0 }
                    )
                  : r.push("mockruleXK", "hippy", {
                      title: "模拟炒股",
                      showNav: !0,
                      ruleName: e,
                      ruleid: t,
                    });
              },
              goYS: function () {
                var e = encodeURIComponent(
                    "腾讯".concat(l.value.mpweapp, "隐私条款")
                  ),
                  t = encodeURIComponent("mock_trade_wzq_privacy");
                "mpweapp" === n.ShellTypeEnum.SHY
                  ? r.push(
                      "qqstock://com.tencent.shy.mock_trade/mockruleYS?ruleName="
                        .concat(e, "&ruleid=")
                        .concat(t),
                      "shy",
                      { title: "模拟炒股", showNav: !0 }
                    )
                  : r.push("mockruleYS", "hippy", {
                      title: "模拟炒股",
                      showNav: !0,
                      ruleName: e,
                      ruleid: t,
                    });
              },
              StockBridge: n.StockBridge,
            }
          );
        },
      },
      c = n._export_sfc(o, [
        [
          "render",
          function (e, t, r, a, o, c) {
            return n.e(
              {
                a: n.t(a.name),
                b: a.ruleContent,
                c: "mock_trade_rules" === a.id,
              },
              "mock_trade_rules" === a.id
                ? {
                    d: n.t(
                      "《腾讯".concat(a.platformMap.mpweapp, "软件许可协议》")
                    ),
                    e: n.o(function () {
                      return a.goXK && a.goXK.apply(a, arguments);
                    }, 1217),
                    f: n.t(
                      "《腾讯".concat(a.platformMap.mpweapp, "隐私条款》")
                    ),
                    g: n.o(function () {
                      return a.goYS && a.goYS.apply(a, arguments);
                    }, 1218),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-83b144b8"],
      ]);
    wx.createComponent(c);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.js",
  }
);
require("pages/mockTradeNew/@tencent/st-act-mocktrade/src/pages/rule/index.js");
__wxRoute = "pages/mockTradeNew/rule/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/mockTradeNew/rule/index.js";
define(
  "pages/mockTradeNew/rule/index.js",
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
    var e = require("../../../common/vendor.js"),
      o = {
        components: {
          mocktrade: function () {
            return "../@tencent/st-act-mocktrade/src/pages/rule/index.js";
          },
        },
        onShareAppMessage: function () {
          return {
            title: "我在腾讯模拟炒股周赛赚大了",
            path: "/pages/mockTradeNew/home/index",
            imageUrl:
              "https://st.gtimg.com/design/f92bacaa3643f6c2a49f056daa1b9478.png",
          };
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("mocktrade")
      )();
    var r = e._export_sfc(o, [
      [
        "render",
        function (e, o, r, t, a, n) {
          return { a: e.rootFontSize };
        },
      ],
      ["__scopeId", "data-v-ad2dcff0"],
    ]);
    (o.__runtimeHooks = 2), wx.createPage(r);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/mockTradeNew/rule/index.js",
  }
);
require("pages/mockTradeNew/rule/index.js");
