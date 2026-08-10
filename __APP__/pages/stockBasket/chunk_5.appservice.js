$gwx0_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_6 || [];
    function gz$gwx0_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "b"]]);
        Z([3, "3b2e7485-0"]);
        Z([[7], [3, "f"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_6 = true;
    var x = [
      "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_6_1();
      var oNI = _v();
      _(r, oNI);
      if (_oz(z, 0, e, s, gg)) {
        oNI.wxVkey = 1;
        var cOI = _mz(
          z,
          "basket-overview",
          [
            "bind:__l",
            1,
            "bindbasketToggleClick",
            1,
            "bindgoToChoosePage",
            2,
            "bindgoToMockTrade",
            3,
            "bindtableToggleClick",
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
        _(oNI, cOI);
      }
      oNI.wxXCkey = 1;
      oNI.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.wxml"
  ] = [
    $gwx0_XC_6,
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.wxml",
  ];
else
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.wxml"
  ] = $gwx0_XC_6(
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.wxml"
  );
__wxRoute = "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.js";
define(
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.js",
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
    var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      a = Object.defineProperty,
      r = Object.defineProperties,
      o = Object.getOwnPropertyDescriptors,
      n = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable,
      s = function (e, t, r) {
        return t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      },
      u = require("../api/StockBasketAPI.js"),
      l = require("../../../../../common/vendor.js"),
      d = {
        components: {
          basketOverview: function () {
            return "./basketOverview.js";
          },
        },
        props: {
          basketId: { type: String, required: !0 },
          contexObj: {
            type: Object,
            default: function () {
              return {};
            },
          },
          limit: { type: Number, default: 3 },
          isToMockTrade: { type: Boolean, default: !0 },
          routeMockTradeParam: {
            type: Object,
            default: function () {
              return {};
            },
          },
          skin: { type: String, default: "white" },
        },
        emits: ["goToMockTrade", "goToChoosePage"],
        setup: function (a, d) {
          var f = this,
            k = d.emit,
            p = l.inject("hqBridge"),
            v = new u.StockBasketAPI(p),
            g = l.ref({}),
            b = l.computed(function () {
              var e, t;
              return (
                a.basketId &&
                a.basketId ===
                  (null == (t = null == (e = g.value) ? void 0 : e.info)
                    ? void 0
                    : t.id)
              );
            }),
            h = l.computed(function () {
              return {
                session: a.contexObj.sessionId,
                requestid: a.contexObj.requestId,
              };
            }),
            m = function () {
              "visible" === document.visibilityState && T();
            };
          l.onBeforeMount(function () {
            T(),
              "mp" !== p.ENV &&
                document.addEventListener("visibilitychange", m);
          }),
            l.onUnmounted(function () {
              "mp" !== p.ENV &&
                document.removeEventListener("visibilitychange", m);
            });
          var T = function () {
              return (
                (e = f),
                null,
                (r = t().mark(function e() {
                  var r, o, n, i, c, s;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              v.getBasketDetail({ id: a.basketId })
                            );
                          case 3:
                            if (
                              0 === (null == (o = e.sent) ? void 0 : o.code) &&
                              (null == (r = null == o ? void 0 : o.data)
                                ? void 0
                                : r.detail)
                            ) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(o.msg);
                          case 6:
                            (n = o.data.detail),
                              (i = n.info),
                              (c = n.ranking),
                              (s = n.userData),
                              (g.value = {
                                info: w(i),
                                ranking: y(c),
                                userData: s,
                              }),
                              k("dataReady"),
                              (e.next = 12);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(0));
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })),
                new Promise(function (t, a) {
                  var o = function (e) {
                      try {
                        i(r.next(e));
                      } catch (e) {
                        a(e);
                      }
                    },
                    n = function (e) {
                      try {
                        i(r.throw(e));
                      } catch (e) {
                        a(e);
                      }
                    },
                    i = function (e) {
                      return e.done
                        ? t(e.value)
                        : Promise.resolve(e.value).then(o, n);
                    };
                  i((r = r.apply(e, null)).next());
                })
              );
              var e, r;
            },
            w = function (e) {
              return {
                name: e.name,
                showType: e.showType,
                id: e.id,
                desc: e.desc,
              };
            },
            y = function (e) {
              var t = e.accChangePct1M,
                r = e.avgChangePct,
                o = e.data,
                n = e.total,
                i = e.title;
              return (
                null == o ||
                  o.sort(function (e, t) {
                    var a,
                      r,
                      o = parseFloat(
                        null == (a = e.data) ? void 0 : a.changePct
                      ),
                      n = parseFloat(
                        null == (r = t.data) ? void 0 : r.changePct
                      );
                    return isNaN(o) ? 1 : isNaN(n) ? -1 : n - o;
                  }),
                {
                  accChangePct1M: t,
                  avgChangePct: r,
                  data: null == o ? void 0 : o.slice(0, a.limit),
                  total: n,
                  title: i,
                }
              );
            };
          return {
            basketData: g,
            isShowBasket: b,
            reportExtra: h,
            getBasketData: T,
            onTableToggleClick: function (e, t) {
              l.nextTick$1(function () {
                g.value.ranking.data[e].watched = t;
              });
            },
            onBasketToggleClick: function (e) {
              g.value.userData.watched = e;
            },
            goToMockTrade: function () {
              var t, u;
              p.report(
                "jichu.ai_search.goto_mock_trade_click",
                ((t = (function (t, a) {
                  for (var r in a || (a = {})) i.call(a, r) && s(t, r, a[r]);
                  if (n) {
                    var o,
                      u = e(n(a));
                    try {
                      for (u.s(); !(o = u.n()).done; ) {
                        r = o.value;
                        c.call(a, r) && s(t, r, a[r]);
                      }
                    } catch (e) {
                      u.e(e);
                    } finally {
                      u.f();
                    }
                  }
                  return t;
                })({}, a.routeMockTradeParam)),
                (u = { gdid: a.basketId }),
                r(t, o(u)))
              ),
                k("goToMockTrade", a.basketId);
            },
            goToChoosePage: function () {
              k("goToChoosePage");
            },
          };
        },
        onPageShow: function () {
          this.getBasketData();
        },
      };
    Array || l.resolveComponent("basket-overview")();
    var f = l._export_sfc(d, [
      [
        "render",
        function (e, t, a, r, o, n) {
          return l.e(
            { a: r.isShowBasket },
            r.isShowBasket
              ? {
                  b: l.o(r.onTableToggleClick, 5922),
                  c: l.o(r.goToMockTrade, 5923),
                  d: l.o(r.goToChoosePage, 5924),
                  e: l.o(r.onBasketToggleClick, 5925),
                  f: l.p({
                    "basket-data": r.basketData,
                    "is-show-footer": !0,
                    "is-big-radius": !0,
                    "is-bg-white": !1,
                    "is-search-ai": !0,
                    "root-class": "ai-basket-stocklist",
                    "column-num": a.limit,
                    "row-num": 3,
                    skin: a.skin,
                    "report-prefix": "jichu.ai_search",
                    "report-extra": r.reportExtra,
                    "is-to-mock-trade": a.isToMockTrade,
                    "route-mock-trade-param": a.routeMockTradeParam,
                  }),
                }
              : {}
          );
        },
      ],
    ]);
    wx.createComponent(f);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.js",
  }
);
require("pages/stockBasket/@tencent/wzq-lite-basket/components/basketForAI.js");
