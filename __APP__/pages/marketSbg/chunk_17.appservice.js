$gwx47_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_9 || [];
    function gz$gwx47_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div hot-topic-list-page data-v-571e59e0"]);
        Z([[7], [3, "I"]]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "c"]]);
        Z([3, "data-v-571e59e0"]);
        Z([3, "571e59e0-0"]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "r"]]);
        Z([[7], [3, "s"]]);
        Z([[7], [3, "p"]]);
        Z([[7], [3, "q"]]);
        Z([3, "page-scroll data-v-571e59e0"]);
        Z([1, true]);
        Z([[7], [3, "o"]]);
        Z([1, false]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "h"]]);
        Z(z[3]);
        Z([[7], [3, "g"]]);
        Z([3, "search-bar-comp data-v-571e59e0"]);
        Z([3, "571e59e0-1"]);
        Z(z[19]);
        Z([3, "_div page-body data-v-571e59e0"]);
        Z([3, "item"]);
        Z([[7], [3, "l"]]);
        Z([3, "a"]);
        Z(z[3]);
        Z([3, "list-item data-v-571e59e0"]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "n"]]);
        Z(z[3]);
        Z([[7], [3, "H"]]);
        Z([3, "page-pull-refresh r data-v-571e59e0"]);
        Z([3, "571e59e0-3"]);
        Z([3, "pullRefreshRef"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[7], [3, "v"]]);
        Z([[7], [3, "x"]]);
        Z(z[3]);
        Z([[7], [3, "w"]]);
        Z(z[22]);
        Z([3, "571e59e0-4,571e59e0-3"]);
        Z(z[42]);
        Z([[7], [3, "F"]]);
        Z(z[3]);
        Z([3, "page-body r data-v-571e59e0"]);
        Z([3, "571e59e0-5,571e59e0-3"]);
        Z(z[48]);
        Z([3, "reachBottomRef"]);
        Z(z[40]);
        Z(z[26]);
        Z([[7], [3, "B"]]);
        Z(z[28]);
        Z(z[3]);
        Z(z[30]);
        Z(z[31]);
        Z(z[32]);
        Z([[7], [3, "C"]]);
        Z([[7], [3, "D"]]);
        Z(z[3]);
        Z(z[6]);
        Z([3, "571e59e0-7,571e59e0-5"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_9 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_9_1();
      var aHL = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var tIL = _v();
      _(aHL, tIL);
      if (_oz(z, 2, e, s, gg)) {
        tIL.wxVkey = 1;
        var bKL = _mz(
          z,
          "hot-topic-nav-bar",
          [
            "bind:__l",
            3,
            "bindback",
            1,
            "bindlayout",
            2,
            "class",
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
        _(tIL, bKL);
      }
      var eJL = _v();
      _(aHL, eJL);
      if (_oz(z, 9, e, s, gg)) {
        eJL.wxVkey = 1;
        var oLL = _mz(
          z,
          "scroll-view",
          [
            "scrollY",
            -1,
            "bindrefresherrefresh",
            10,
            "bindrefresherrestore",
            1,
            "bindscroll",
            2,
            "bindscrolltolower",
            3,
            "class",
            4,
            "refresherEnabled",
            5,
            "refresherTriggered",
            6,
            "scrollAnchoring",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        var xML = _v();
        _(oLL, xML);
        if (_oz(z, 18, e, s, gg)) {
          xML.wxVkey = 1;
        }
        var oNL = _v();
        _(oLL, oNL);
        if (_oz(z, 19, e, s, gg)) {
          oNL.wxVkey = 1;
          var fOL = _mz(
            z,
            "search-bar",
            ["bind:__l", 20, "bindclick", 1, "class", 2, "uI", 3, "uP", 4],
            [],
            e,
            s,
            gg
          );
          _(oNL, fOL);
        }
        var cPL = _n("view");
        _rz(z, cPL, "class", 25, e, s, gg);
        var cSL = _v();
        _(cPL, cSL);
        var oTL = function (aVL, lUL, tWL, gg) {
          var bYL = _mz(
            z,
            "list-item",
            ["bind:__l", 29, "class", 1, "uI", 2, "uP", 3],
            [],
            aVL,
            lUL,
            gg
          );
          _(tWL, bYL);
          return tWL;
        };
        cSL.wxXCkey = 4;
        _2z(z, 27, oTL, e, s, gg, cSL, "item", "index", "a");
        var hQL = _v();
        _(cPL, hQL);
        if (_oz(z, 33, e, s, gg)) {
          hQL.wxVkey = 1;
        }
        var oRL = _v();
        _(cPL, oRL);
        if (_oz(z, 34, e, s, gg)) {
          oRL.wxVkey = 1;
        }
        hQL.wxXCkey = 1;
        oRL.wxXCkey = 1;
        _(oLL, cPL);
        xML.wxXCkey = 1;
        oNL.wxXCkey = 1;
        oNL.wxXCkey = 3;
        _(eJL, oLL);
      } else {
        eJL.wxVkey = 2;
        var oZL = _mz(
          z,
          "st-pull-refresh",
          [
            "bind:__l",
            35,
            "bindpullDownRefresh",
            1,
            "class",
            2,
            "uI",
            3,
            "uR",
            4,
            "uS",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        var x1L = _v();
        _(oZL, x1L);
        if (_oz(z, 41, e, s, gg)) {
          x1L.wxVkey = 1;
        }
        var o2L = _v();
        _(oZL, o2L);
        if (_oz(z, 42, e, s, gg)) {
          o2L.wxVkey = 1;
          var c4L = _mz(
            z,
            "search-bar",
            ["bind:__l", 43, "bindclick", 1, "class", 2, "uI", 3, "uP", 4],
            [],
            e,
            s,
            gg
          );
          _(o2L, c4L);
        }
        var f3L = _v();
        _(oZL, f3L);
        if (_oz(z, 48, e, s, gg)) {
          f3L.wxVkey = 1;
          var h5L = _mz(
            z,
            "st-reach-bottom",
            ["bind:__l", 49, "class", 1, "uI", 2, "uP", 3, "uR", 4, "uS", 5],
            [],
            e,
            s,
            gg
          );
          var o8L = _v();
          _(h5L, o8L);
          var l9L = function (tAM, a0L, eBM, gg) {
            var oDM = _mz(
              z,
              "list-item",
              ["bind:__l", 58, "class", 1, "uI", 2, "uP", 3],
              [],
              tAM,
              a0L,
              gg
            );
            _(eBM, oDM);
            return eBM;
          };
          o8L.wxXCkey = 4;
          _2z(z, 56, l9L, e, s, gg, o8L, "item", "index", "a");
          var o6L = _v();
          _(h5L, o6L);
          if (_oz(z, 62, e, s, gg)) {
            o6L.wxVkey = 1;
          }
          var c7L = _v();
          _(h5L, c7L);
          if (_oz(z, 63, e, s, gg)) {
            c7L.wxVkey = 1;
            var xEM = _mz(
              z,
              "trust-footer",
              ["bind:__l", 64, "class", 1, "uI", 2],
              [],
              e,
              s,
              gg
            );
            _(c7L, xEM);
          }
          o6L.wxXCkey = 1;
          c7L.wxXCkey = 1;
          c7L.wxXCkey = 3;
          _(f3L, h5L);
        }
        x1L.wxXCkey = 1;
        o2L.wxXCkey = 1;
        o2L.wxXCkey = 3;
        f3L.wxXCkey = 1;
        f3L.wxXCkey = 3;
        _(eJL, oZL);
      }
      tIL.wxXCkey = 1;
      tIL.wxXCkey = 3;
      eJL.wxXCkey = 1;
      eJL.wxXCkey = 3;
      eJL.wxXCkey = 3;
      _(r, aHL);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.wxml"
  ] = [
    $gwx47_XC_9,
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.wxml"
  ] = $gwx47_XC_9(
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.wxml"
  );
__wxRoute = "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.js",
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
    require("../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      n = Object.defineProperties,
      o = Object.getOwnPropertyDescriptors,
      a = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable,
      c = function (e, t, n) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      l = function (e, t, r) {
        return new Promise(function (n, o) {
          var a = function (e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            },
            u = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
            };
          u((r = r.apply(e, t)).next());
        });
      },
      s = require("../../../../../common/vendor.js"),
      p = require("../api/index.js"),
      f = require("../node-modules/@tencent/st-tools/dist/index.js");
    function h(e) {
      return Array.isArray(e) && 0 !== e.length
        ? e.reduce(function (e, r) {
            return r.point && Array.isArray(r.etf) && 0 !== r.etf.length
              ? (e.push(
                  ((l = (function (e, r) {
                    for (var n in r || (r = {})) i.call(r, n) && c(e, n, r[n]);
                    if (a) {
                      var o,
                        l = t(a(r));
                      try {
                        for (l.s(); !(o = l.n()).done; ) {
                          n = o.value;
                          u.call(r, n) && c(e, n, r[n]);
                        }
                      } catch (e) {
                        l.e(e);
                      } finally {
                        l.f();
                      }
                    }
                    return e;
                  })({}, r)),
                  (s = { rank: e.length + 1 }),
                  n(l, o(s)))
                ),
                e)
              : e;
            var l, s;
          }, [])
        : [];
    }
    var d = s.defineComponent({
      name: "ListPage",
      components: {
        HotTopicNavBar: function () {
          return "./components/HotTopicNavBar.js";
        },
        ListItem: function () {
          return "./components/ListItem.js";
        },
        TrustFooter: function () {
          return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
        },
        SearchBar: function () {
          return "./components/SearchBar.js";
        },
      },
      emits: ["scroll"],
      setup: function (t, r) {
        var n = r.emit,
          o = s.getCurrentInstance().proxy || s.getCurrentInstance(),
          a = s.ref([]),
          i = s.ref(!1),
          u = s.ref(0),
          c = s.ref(44),
          d = s.ref(0),
          v = s.ref(0),
          m = s.ref(!0),
          g = s.ref(null),
          y = s.ref(null),
          b = s.ref(!1),
          k = ["mpwzq", "mpweapp"].includes("mpweapp"),
          x = s.computed(function () {
            return s.StockBridge.getStorage("user/skin") || "white";
          }),
          w = s.ref(!1),
          S = s.ref(120),
          P = !1;
        if (!k && "undefined" != typeof navigator) {
          var L = f.dist.detect(navigator.userAgent).env.IS_ZXG;
          P = L;
        }
        var R = !1,
          B = s.computed(function () {
            var e = k || P ? u.value + c.value : u.value;
            return Math.max(0, S.value - e);
          }),
          F = s.computed(function () {
            return k || P ? { top: "".concat(u.value + c.value, "px") } : {};
          }),
          _ = s.computed(function () {
            return d.value <= 30 ? 0 : Math.min(1, d.value / 120);
          });
        function q() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return l(
            this,
            null,
            e().mark(function r() {
              var n, o, u, c, l, f, d;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!i.value) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", m.value);
                      case 2:
                        if (t || m.value) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return", !1);
                      case 4:
                        return (
                          (i.value = !0),
                          (c = t ? 0 : v.value),
                          (e.prev = 6),
                          (e.next = 9),
                          p.api.getDigHotList(s.StockBridge, {
                            offset: c,
                            count: 20,
                          })
                        );
                      case 9:
                        return (
                          (l = e.sent),
                          (f =
                            (null == (n = null == l ? void 0 : l.data)
                              ? void 0
                              : n.hot_point_list) || []),
                          (d = t ? f : a.value.concat(f)),
                          e.abrupt(
                            "return",
                            ((a.value = h(d)),
                            (v.value = c + f.length),
                            (m.value = f.length >= 20),
                            t &&
                              (null ==
                                (u =
                                  null == (o = g.value)
                                    ? void 0
                                    : o.resetStatus) ||
                                u.call(o)),
                            m.value)
                          )
                        );
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.t0 = e.catch(6)),
                          e.abrupt(
                            "return",
                            (t &&
                              ((a.value = []), (v.value = 0), (m.value = !1)),
                            !1)
                          )
                        );
                      case 18:
                        return (e.prev = 18), (i.value = !1), e.finish(18);
                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[6, 15, 18, 21]]
              );
            })
          );
        }
        function T() {
          return l(
            this,
            null,
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", q(!1));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        }
        function j(e) {
          w.value = e >= B.value;
        }
        function A(e) {
          R ||
            e <= 0 ||
            ((R = !0),
            s.StockBridge.mtaReport({
              busi: "hq",
              eventName: "list_scroll_depth_scroll",
            }));
        }
        function M() {
          var e = window.pageYOffset || document.documentElement.scrollTop || 0;
          (d.value = e), j(e), A(e);
        }
        function N() {
          k &&
            s.nextTick$1(function () {
              s.wx$1
                .createSelectorQuery()
                .in(o)
                .select(".search-sticky")
                .boundingClientRect(function (e) {
                  var t = (null == e ? void 0 : e.top) + d.value;
                  Number.isFinite(t) && t > 0 && (S.value = t);
                })
                .exec();
            });
        }
        return (
          s.onMounted(function () {
            q(!0),
              s.nextTick$1(function () {
                s.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "hotspot_second_level_page_brow",
                  exposure: { selector: ".hot-topic-list-page", context: o },
                });
              }),
              k
                ? setTimeout(N, 300)
                : "undefined" != typeof window &&
                  (M(), window.addEventListener("scroll", M));
          }),
          k ||
            s.onBeforeUnmount(function () {
              "undefined" != typeof window &&
                window.removeEventListener("scroll", M);
            }),
          {
            skin: x,
            conceptList: a,
            isLoading: i,
            headerAlpha: _,
            searchStickyStyle: F,
            hasNext: m,
            isMP: k,
            isAPP: P,
            isSearchFixed: w,
            reachBottomRef: g,
            pullRefreshRef: y,
            refreshTriggered: b,
            showFooterLogo: ["mpwzq", "wzqlight"].includes("mpweapp"),
            gotoSearchPage: function () {
              s.StockBridge.mtaReport({
                busi: "hq",
                eventName: "top_search_box_click",
              }),
                s.StockRouter.routeTo({
                  name: "etfhotsearch",
                  query: { from: "list_page" },
                });
            },
            gotoFilterPage: function () {
              if (
                (s.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "filter_click",
                }),
                k)
              ) {
                var e = "https://wzq.tenpay.com/mp/".concat(
                  "v2",
                  "/index.html#/pages/market/pages/ETFPage/etfhotfilter"
                );
                s.StockBridge.openExtraWebview(e, { from: "list_page" });
              } else
                s.StockRouter.routeTo({
                  name: "etfhotfilter",
                  query: { from: "list_page" },
                });
            },
            goBack: function () {
              s.StockRouter.routeBack(1);
            },
            handleNavLayout: function (e) {
              (u.value = e.safeTop || 0), (c.value = e.navBarHeight || 44);
            },
            loadMore: T,
            handleReachBottom: function () {
              return l(
                this,
                null,
                e().mark(function t() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), T();
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
            handlePullRefresh: function () {
              return l(
                this,
                null,
                e().mark(function t() {
                  var r, n;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (b.value = !0), (e.next = 3), q(!0);
                        case 3:
                          (b.value = !1),
                            null ==
                              (n =
                                null == (r = y.value)
                                  ? void 0
                                  : r.stopPullDownRefresh) || n.call(r);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })
              );
            },
            handleRefreshRestore: function () {
              b.value = !1;
            },
            onMpScroll: function (e) {
              var t,
                r,
                o,
                a,
                i =
                  null !=
                  (o =
                    null != (r = null == e ? void 0 : e.detail)
                      ? r
                      : null == (t = null == e ? void 0 : e.mp)
                      ? void 0
                      : t.detail)
                    ? o
                    : {},
                u = null != (a = i.scrollTop) ? a : 0;
              (d.value = u), j(u), A(u), n("scroll", i);
            },
            updateSearchFixed: j,
          }
        );
      },
    });
    Array ||
      (
        s.resolveComponent("HotTopicNavBar") +
        s.resolveComponent("SearchBar") +
        s.resolveComponent("ListItem") +
        s.resolveComponent("TrustFooter") +
        s.resolveComponent("st-reach-bottom") +
        s.resolveComponent("st-pull-refresh")
      )();
    var v = s._export_sfc(d, [
      [
        "render",
        function (e, t, r, n, o, a) {
          return s.e(
            { a: e.isMP || e.isAPP },
            e.isMP || e.isAPP
              ? {
                  b: s.o(e.goBack, 555),
                  c: s.o(e.handleNavLayout, 556),
                  d: s.p({ title: "挖热点", opacity: e.headerAlpha }),
                }
              : {},
            { e: e.isMP },
            e.isMP
              ? s.e(
                  { f: e.isSearchFixed },
                  (e.isSearchFixed, {}),
                  {
                    g: s.o(e.gotoSearchPage, 557),
                    h: s.p({ "is-fake": !0 }),
                    i: s.o(function () {
                      return (
                        e.gotoFilterPage && e.gotoFilterPage.apply(e, arguments)
                      );
                    }, 558),
                    j: s.n({ "search-sticky--fixed": e.isSearchFixed }),
                    k: s.s(e.searchStickyStyle),
                    l: s.f(e.conceptList, function (e, t, r) {
                      return {
                        a: e.symbol || e.rank,
                        b: "571e59e0-2-" + r,
                        c: s.p({ item: e, rank: t + 1 }),
                      };
                    }),
                    m: !e.isLoading && 0 === e.conceptList.length,
                  },
                  (e.isLoading || e.conceptList.length, {}),
                  { n: e.isLoading && e.conceptList.length > 0 },
                  (e.isLoading && e.conceptList.length, {}),
                  {
                    o: e.refreshTriggered,
                    p: s.o(function () {
                      return e.onMpScroll && e.onMpScroll.apply(e, arguments);
                    }, 559),
                    q: s.o(function () {
                      return e.loadMore && e.loadMore.apply(e, arguments);
                    }, 560),
                    r: s.o(function () {
                      return (
                        e.handlePullRefresh &&
                        e.handlePullRefresh.apply(e, arguments)
                      );
                    }, 561),
                    s: s.o(function () {
                      return (
                        e.handleRefreshRestore &&
                        e.handleRefreshRestore.apply(e, arguments)
                      );
                    }, 562),
                  }
                )
              : s.e(
                  {
                    t: s.n({ "hero--no-custom-nav": !e.isAPP }),
                    v: e.isSearchFixed,
                  },
                  (e.isSearchFixed, {}),
                  {
                    w: s.o(e.gotoSearchPage, 563),
                    x: s.p({ "is-fake": !0 }),
                    y: s.o(function () {
                      return (
                        e.gotoFilterPage && e.gotoFilterPage.apply(e, arguments)
                      );
                    }, 564),
                    z: s.n({ "search-sticky--fixed": e.isSearchFixed }),
                    A: s.s(e.searchStickyStyle),
                    B: s.f(e.conceptList, function (e, t, r) {
                      return {
                        a: e.symbol || e.rank,
                        b: "571e59e0-6-" + r + ",571e59e0-5",
                        c: s.p({ item: e, rank: t + 1 }),
                      };
                    }),
                    C: !e.isLoading && 0 === e.conceptList.length,
                  },
                  (e.isLoading || e.conceptList.length, {}),
                  {
                    D:
                      e.showFooterLogo &&
                      e.conceptList.length > 0 &&
                      !e.hasNext,
                  },
                  (e.showFooterLogo && e.conceptList.length > 0 && e.hasNext,
                  {}),
                  {
                    E: s.sr("reachBottomRef", "571e59e0-5,571e59e0-3"),
                    F: s.p({
                      "finished-text": " ",
                      "immediate-check": !1,
                      disabled: !e.hasNext,
                      "on-reach-bottom": e.handleReachBottom,
                    }),
                    G: s.sr("pullRefreshRef", "571e59e0-3"),
                    H: s.o(e.handlePullRefresh, 565),
                  }
                ),
            { I: e.skin }
          );
        },
      ],
      ["__scopeId", "data-v-571e59e0"],
    ]);
    wx.createComponent(v);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.js");
