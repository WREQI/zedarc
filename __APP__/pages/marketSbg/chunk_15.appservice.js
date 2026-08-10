$gwx47_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_7 || [];
    function gz$gwx47_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "k"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "investment-page"]],
                [1, "flex-grow"],
              ],
              [1, "data-v-18a13435"],
            ],
            [
              [2, "&&"],
              [[7], [3, "i"]],
              [1, "nav-padding"],
            ],
          ],
        ]);
        Z([[7], [3, "j"]]);
        Z([3, "long-term-investment-page"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([3, "data-v-18a13435"]);
        Z([3, "18a13435-0"]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z(z[5]);
        Z([3, "investment-page__empty data-v-18a13435"]);
        Z([3, "18a13435-1"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([3, "_div fund-panel__list data-v-18a13435"]);
        Z([3, "item"]);
        Z([[7], [3, "f"]]);
        Z([3, "f"]);
        Z([3, "_div data-v-18a13435"]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z([[6], [[7], [3, "item"]], [3, "d"]]);
        Z(z[5]);
        Z([3, "fund-card__hot-topic-header data-v-18a13435"]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z(z[22]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "h"]]);
        Z(z[5]);
        Z(z[7]);
        Z([3, "18a13435-3"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_7 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_7_1();
      var hEJ = _mz(
        z,
        "view",
        ["bindtap", 0, "class", 1, "data-st-theme", 1, "data-test-id", 2],
        [],
        e,
        s,
        gg
      );
      var oFJ = _v();
      _(hEJ, oFJ);
      if (_oz(z, 4, e, s, gg)) {
        oFJ.wxVkey = 1;
        var lIJ = _mz(
          z,
          "hot-topic-nav-bar",
          ["bind:__l", 5, "bindback", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(oFJ, lIJ);
      }
      var cGJ = _v();
      _(hEJ, cGJ);
      if (_oz(z, 10, e, s, gg)) {
        cGJ.wxVkey = 1;
      } else if (_oz(z, 11, e, s, gg)) {
        cGJ.wxVkey = 2;
        var aJJ = _mz(
          z,
          "no-data",
          ["bind:__l", 12, "class", 1, "uI", 2, "uS", 3],
          [],
          e,
          s,
          gg
        );
        _(cGJ, aJJ);
      } else {
        cGJ.wxVkey = 3;
        var tKJ = _n("view");
        _rz(z, tKJ, "class", 16, e, s, gg);
        var bMJ = _v();
        _(tKJ, bMJ);
        var oNJ = function (oPJ, xOJ, fQJ, gg) {
          var hSJ = _n("view");
          _rz(z, hSJ, "class", 20, oPJ, xOJ, gg);
          var oTJ = _v();
          _(hSJ, oTJ);
          if (_oz(z, 21, oPJ, xOJ, gg)) {
            oTJ.wxVkey = 1;
          }
          var cUJ = _v();
          _(hSJ, cUJ);
          if (_oz(z, 22, oPJ, xOJ, gg)) {
            cUJ.wxVkey = 1;
            var oVJ = _mz(
              z,
              "etf-invest-header",
              ["bind:__l", 23, "class", 1, "uI", 2, "uP", 3],
              [],
              oPJ,
              xOJ,
              gg
            );
            _(cUJ, oVJ);
          }
          oTJ.wxXCkey = 1;
          cUJ.wxXCkey = 1;
          cUJ.wxXCkey = 3;
          _(fQJ, hSJ);
          return fQJ;
        };
        bMJ.wxXCkey = 4;
        _2z(z, 18, oNJ, e, s, gg, bMJ, "item", "index", "f");
        var eLJ = _v();
        _(tKJ, eLJ);
        if (_oz(z, 27, e, s, gg)) {
          eLJ.wxVkey = 1;
        }
        eLJ.wxXCkey = 1;
        _(cGJ, tKJ);
      }
      var oHJ = _v();
      _(hEJ, oHJ);
      if (_oz(z, 28, e, s, gg)) {
        oHJ.wxVkey = 1;
        var lWJ = _mz(
          z,
          "trust-footer",
          ["bind:__l", 29, "class", 1, "uI", 2],
          [],
          e,
          s,
          gg
        );
        _(oHJ, lWJ);
      }
      oFJ.wxXCkey = 1;
      oFJ.wxXCkey = 3;
      cGJ.wxXCkey = 1;
      cGJ.wxXCkey = 3;
      cGJ.wxXCkey = 3;
      oHJ.wxXCkey = 1;
      oHJ.wxXCkey = 3;
      _(r, hEJ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.wxml"
  ] = [
    $gwx47_XC_7,
    "./pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.wxml"
  ] = $gwx47_XC_7(
    "./pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.wxml"
  );
__wxRoute =
  "pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      n = Object.defineProperty,
      r = Object.defineProperties,
      o = Object.getOwnPropertyDescriptors,
      a = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable,
      l = function (e, t, r) {
        return t in e
          ? n(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      },
      c = function (e, n) {
        for (var r in n || (n = {})) i.call(n, r) && l(e, r, n[r]);
        if (a) {
          var o,
            c = t(a(n));
          try {
            for (c.s(); !(o = c.n()).done; ) {
              r = o.value;
              u.call(n, r) && l(e, r, n[r]);
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
        return e;
      },
      s = function (e, t) {
        return r(e, o(t));
      },
      f = function (e, t, n) {
        return new Promise(function (r, o) {
          var a = function (e) {
              try {
                u(n.next(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (e) {
              try {
                u(n.throw(e));
              } catch (e) {
                o(e);
              }
            },
            u = function (e) {
              return e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
            };
          u((n = n.apply(e, t)).next());
        });
      },
      d = require("../../../../../../common/vendor.js"),
      v = require("../../node-modules/@tencent/st-tools/dist/index.js"),
      p = require("../../../stock-hq-data/index.js"),
      m = require("../service/index.js"),
      g = require("../utils/report.js"),
      h = require("../../utils/common.js"),
      y = d.defineComponent({
        name: "LongTermInvestmentPage",
        components: {
          EtfInvestHeader: function () {
            return "../../components/EtfInvestHeader.js";
          },
          NoData: function () {
            return "../../../../../detailSbg/@tencent/stock-markets-base/components/NoData.js";
          },
          TrustFooter: function () {
            return "../../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
          },
          HotTopicNavBar: function () {
            return "../../hotTopicPages/components/HotTopicNavBar.js";
          },
        },
        setup: function () {
          var t = this,
            n = d.getCurrentInstance(),
            r = new p.DetailApi(function () {
              return 1 === arguments.length
                ? d.StockBridge.request(
                    arguments.length <= 0 ? void 0 : arguments[0],
                    d.RequestTypeEnum.GET,
                    {},
                    { forceCallback: !0 }
                  )
                : d.StockBridge.request(
                    arguments.length <= 0 ? void 0 : arguments[0],
                    arguments.length <= 1 ? void 0 : arguments[1],
                    arguments.length <= 2 ? void 0 : arguments[2],
                    s(
                      c(
                        {},
                        (arguments.length <= 3 ? void 0 : arguments[3]) || {}
                      ),
                      { forceCallback: !0 }
                    )
                  );
            }),
            o = d.ref(!1),
            a = d.ref(!1),
            i = d.ref(!1),
            u = d.ref([]),
            l = d.ref(0),
            y = d.ref(!0),
            b = d.ref(null),
            w = d.ref(!1),
            L = d.ref(""),
            k = null,
            T = null,
            _ = "undefined" == typeof document || !document.hidden,
            x = !0,
            N = !1,
            E = "",
            S = null,
            I = ["mpwzq", "mpweapp"].includes("mpweapp"),
            A =
              !I &&
              "undefined" != typeof navigator &&
              v.dist.detect(navigator.userAgent).env.IS_ZXG,
            B = [],
            O = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return c(c({}, B[e]), u.value[e] || {});
            },
            R = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = O(e);
              return t.symbol || t.codeformat || t.fund_code || t.code || "";
            },
            q = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : u.value[e];
              o.value ||
                ((o.value = !0),
                g.reportGlobalInvest(
                  g.GLOBAL_INVEST_REPORT.LONG_TERM_BUY_BTN_CLICK,
                  {
                    stockid: g.formatReportStockCode(R(e)),
                    fchannel_id_fm_i: L.value,
                  }
                ),
                m.GlobalInvestService.navigateToEtfBuy(
                  s(c({}, t || u.value[e] || {}), { source: "long_term" }),
                  n,
                  L.value
                ).finally(function () {
                  o.value = !1;
                }));
            },
            G = d.computed(function () {
              var e = u.value;
              return Array.isArray(e) && e.length > 0 ? e : i.value ? [] : B;
            }),
            C = d.computed(function () {
              return a.value && !i.value && 0 === G.value.length;
            }),
            j = d.computed(function () {
              return i.value && !a.value && 0 === G.value.length;
            });
          function P() {
            return f(
              this,
              null,
              e().mark(function t() {
                var n;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!a.value && y.value) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", y.value);
                        case 2:
                          return (
                            (a.value = !0),
                            (e.prev = 3),
                            (e.next = 6),
                            m.GlobalInvestService.fetchLongTermList({
                              top_n: -1,
                              offset: l.value,
                              isLoadMore: !0,
                            })
                          );
                        case 6:
                          (n = e.sent),
                            Array.isArray(n) &&
                              n.length > 0 &&
                              (u.value = u.value.concat(n)),
                            (l.value += Array.isArray(n) ? n.length : 0),
                            (y.value = Array.isArray(n) && n.length >= 20),
                            (e.next = 12);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(3));
                        case 12:
                          return (e.prev = 12), (a.value = !1), e.finish(12);
                        case 15:
                          return e.abrupt("return", y.value);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 10, 12, 15]]
                );
              })
            );
          }
          function F() {
            return f(
              this,
              null,
              e().mark(function t() {
                var n, r, o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = Math.max(l.value || 20, 20)),
                            (r = y.value),
                            (e.prev = 1),
                            (e.next = 4),
                            m.GlobalInvestService.fetchLongTermList({
                              top_n: -1,
                              offset: 0,
                              isLoadMore: !1,
                              silent: !0,
                            })
                          );
                        case 4:
                          (o = e.sent),
                            Array.isArray(o) && (u.value = o),
                            (l.value = Array.isArray(o) ? o.length : l.value),
                            (y.value = r && Array.isArray(o) && o.length >= n),
                            (e.next = 10);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(1));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            );
          }
          var H = function () {
            d.StockRouter.routeBack(1);
          };
          function M() {
            "investglobal" === E &&
              (I ||
                "undefined" == typeof window ||
                "undefined" == typeof document ||
                d.nextTick$1(function () {
                  window.scrollTo(0, 0),
                    document.documentElement &&
                      (document.documentElement.scrollTop = 0),
                    document.body && (document.body.scrollTop = 0);
                }));
          }
          function V(e) {
            N ||
              e <= 0 ||
              (g.reportGlobalInvest(g.GLOBAL_INVEST_REPORT.LONG_TERM_SCROLL),
              (N = !0));
          }
          function D() {
            var e;
            V(
              "undefined" == typeof window || "undefined" == typeof document
                ? 0
                : window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    (null == (e = document.body) ? void 0 : e.scrollTop) ||
                    0
            );
          }
          function z() {
            return f(
              this,
              null,
              e().mark(function t() {
                var n, o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            r.getMarketState({ market: 0 }, { needProcess: !0 })
                          );
                        case 3:
                          (n = e.sent),
                            (o = ((null == n ? void 0 : n.split("|")) || [])
                              .map(function (e) {
                                return e.split("_");
                              })
                              .filter(function (e) {
                                return "NEWSH" === e[0];
                              })).length
                              ? (w.value = "open" === o[0][1])
                              : w.value || (w.value = !0),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            w.value || (w.value = !0);
                        case 11:
                          _ && x && (W(), (T = setTimeout(z, 3e4)));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 8]]
                );
              })
            );
          }
          function U() {
            k && (clearInterval(k), (k = null));
          }
          function W() {
            T && (clearTimeout(T), (T = null));
          }
          function Y() {
            U(),
              (k = setInterval(function () {
                _ && x && w.value && F();
              }, 5e3));
          }
          function $() {
            (_ = !document.hidden) && x ? (z(), Y()) : (U(), W());
          }
          return (
            d.onMounted(function () {
              return f(
                t,
                null,
                e().mark(function t() {
                  var r, o, c, s, v;
                  return e().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (I ||
                              (E = String(
                                (null ==
                                (c =
                                  null ==
                                  (o =
                                    null == (r = null == n ? void 0 : n.proxy)
                                      ? void 0
                                      : r.$route)
                                    ? void 0
                                    : o.query)
                                  ? void 0
                                  : c.from) || ""
                              )),
                            (function () {
                              var e;
                              if (!I) {
                                var t =
                                  null == (e = null == n ? void 0 : n.proxy)
                                    ? void 0
                                    : e.$router;
                                t &&
                                  "function" == typeof t.afterEach &&
                                  (S = t.afterEach(function (e, t) {
                                    E = String(
                                      (null == t ? void 0 : t.name) || ""
                                    );
                                  }));
                              }
                            })(),
                            M(),
                            null == (v = (s = d.StockBridge).setTitle) ||
                              v.call(s, "长期投资"),
                            (function () {
                              f(
                                this,
                                null,
                                e().mark(function t() {
                                  var n;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (a.value = !0),
                                              (e.prev = 1),
                                              (e.next = 4),
                                              m.GlobalInvestService.fetchLongTermList(
                                                {
                                                  top_n: -1,
                                                  offset: 0,
                                                  isLoadMore: !1,
                                                }
                                              )
                                            );
                                          case 4:
                                            (n = e.sent),
                                              (u.value = Array.isArray(n)
                                                ? n
                                                : []),
                                              (l.value = Array.isArray(n)
                                                ? n.length
                                                : 0),
                                              (y.value =
                                                Array.isArray(n) &&
                                                n.length >= 20),
                                              (e.next = 10);
                                            break;
                                          case 8:
                                            (e.prev = 8), (e.t0 = e.catch(1));
                                          case 10:
                                            return (
                                              (e.prev = 10),
                                              (i.value = !0),
                                              (a.value = !1),
                                              e.finish(10)
                                            );
                                          case 13:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[1, 8, 10, 13]]
                                  );
                                })
                              );
                            })(),
                            _ && x && (z(), Y()),
                            "undefined" != typeof window &&
                              window.addEventListener("scroll", D, {
                                passive: !0,
                              }),
                            I ||
                              "undefined" == typeof document ||
                              document.addEventListener("visibilitychange", $),
                            (t.t0 = d.StockBridge.tradeFunc),
                            !t.t0)
                          ) {
                            t.next = 13;
                            break;
                          }
                          return (
                            (t.next = 12),
                            d.StockBridge.tradeFunc.fetchBrokerInfo()
                          );
                        case 12:
                          d.StockBridge.tradeFunc.isBind() ||
                            (L.value = "IbW00p000a122");
                        case 13:
                          g.reportGlobalInvest(
                            g.GLOBAL_INVEST_REPORT.LONG_TERM_BUY_BTN_BROW,
                            { fchannel_id_fm_i: L.value }
                          );
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
            }),
            d.onActivated(function () {
              M(), (x = !0), _ && (z(), F(), Y());
            }),
            d.onDeactivated(function () {
              (x = !1), U(), W();
            }),
            d.onBeforeUnmount(function () {
              (x = !1),
                U(),
                W(),
                "function" == typeof S && (S(), (S = null)),
                "undefined" != typeof window &&
                  window.removeEventListener("scroll", D),
                I ||
                  "undefined" == typeof document ||
                  document.removeEventListener("visibilitychange", $);
            }),
            {
              skin: h.skin(),
              isGlobalInvestNavVisible: A,
              displayList: G,
              isLoading: a,
              hasNext: y,
              showInitialLoading: C,
              showEmpty: j,
              reachBottomRef: b,
              getLongTermHeaderEtf: O,
              getLongTermHeaderSymbol: R,
              formatRatio: function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                if (null == e || "" === e) return "--";
                var n = String(e);
                if (n.includes("%")) return n;
                var r = Number(e);
                return Number.isNaN(r)
                  ? n || "--"
                  : "".concat(t && r > 0 ? "+" : "").concat(r.toFixed(2), "%");
              },
              formatText: function (e) {
                return null == e || "" === e ? "--" : String(e);
              },
              getRatioClass: function (e) {
                var t = Number(String(e || "").replace("%", ""));
                return Number.isNaN(t) || 0 === t
                  ? "equal"
                  : t > 0
                  ? "rise"
                  : "drop";
              },
              getEtfRatio: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  e.returnValue ||
                  e.zdfformat ||
                  e.zdf ||
                  e.change ||
                  e.ratio ||
                  "--"
                );
              },
              getEtfName: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return String(
                  e.name || e.fund_name || e.fundName || e.title || "--"
                );
              },
              showFooterLogo: ["mpwzq", "wzqlight"].includes("mpweapp"),
              handleBack: H,
              handlePageClick: function (e) {
                var t = e.target,
                  n = String((null == t ? void 0 : t.className) || "");
                if (n.includes("investment-page__back-icon")) H();
                else if (n.includes("fund-card__buy")) {
                  var r = t.closest(".fund-card"),
                    o = t.closest(".fund-panel__list");
                  if (r && o) {
                    var a = Array.from(
                      o.querySelectorAll(".fund-card")
                    ).indexOf(r);
                    q(a >= 0 ? a : 0);
                  }
                }
              },
              setScrollTop: function (e) {
                var t = Number(e);
                Number.isFinite(t) && V(t);
              },
              handleBuy: q,
              onReachBottom: function () {
                return f(
                  this,
                  null,
                  e().mark(function t() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), P();
                          case 2:
                            return e.abrupt("return", !e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                  })
                );
              },
              loadMore: P,
            }
          );
        },
      });
    Array ||
      (
        d.resolveComponent("HotTopicNavBar") +
        d.resolveComponent("NoData") +
        d.resolveComponent("EtfInvestHeader") +
        d.resolveComponent("TrustFooter")
      )();
    var b = d._export_sfc(y, [
      [
        "render",
        function (e, t, n, r, o, a) {
          return d.e(
            { a: e.isGlobalInvestNavVisible },
            e.isGlobalInvestNavVisible
              ? {
                  b: d.o(e.handleBack, 628),
                  c: d.p({ title: "长期投资", "app-title-visible": !0 }),
                }
              : {},
            { d: e.showInitialLoading },
            e.showInitialLoading || e.showEmpty
              ? {}
              : d.e(
                  {
                    f: d.f(e.displayList, function (t, n, r) {
                      return d.e(
                        { a: n > 0 },
                        {},
                        {
                          b: d.o(
                            function (r) {
                              return e.handleBuy(n, t);
                            },
                            629,
                            n
                          ),
                          c: "18a13435-2-" + r,
                          d: d.p({
                            "featured-etf": e.getLongTermHeaderEtf(n),
                            "featured-etf-symbol": e.getLongTermHeaderSymbol(n),
                            "format-ratio": e.formatRatio,
                            "format-text": e.formatText,
                            "get-ratio-class": e.getRatioClass,
                            "get-etf-ratio": e.getEtfRatio,
                            "get-etf-name": e.getEtfName,
                            "show-watchlist": !1,
                            "show-relevance": !1,
                            "ratio-label": "近3年年化",
                            "report-source": "long_term",
                          }),
                          e: d.t(e.formatText(t.highlight)),
                          f: n,
                        }
                      );
                    }),
                    g: e.isLoading && e.displayList.length > 0,
                  },
                  (e.isLoading && e.displayList.length, {})
                ),
            {
              e: e.showEmpty,
              h: e.showFooterLogo && e.displayList.length > 0 && !e.hasNext,
            },
            (e.showFooterLogo && e.displayList.length > 0 && e.hasNext, {}),
            {
              i: e.isGlobalInvestNavVisible ? 1 : "",
              j: e.skin,
              k: d.o(function () {
                return (
                  e.handlePageClick && e.handlePageClick.apply(e, arguments)
                );
              }, 630),
            }
          );
        },
      ],
      ["__scopeId", "data-v-18a13435"],
    ]);
    wx.createComponent(b);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.js");
