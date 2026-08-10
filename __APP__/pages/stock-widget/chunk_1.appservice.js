$gwx9_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx9_XC_1 || [];
    function gz$gwx9_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx9_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx9_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx9_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "b"]]);
        Z([3, "94f871a4-0"]);
        Z([[7], [3, "g"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx9_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx9_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx9_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx9_XC_1 = true;
    var x = [
      "./pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx9_XC_1_1();
      var oJH = _v();
      _(r, oJH);
      if (_oz(z, 0, e, s, gg)) {
        oJH.wxVkey = 1;
        var lKH = _mz(
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
            "bindgoToStockDetail",
            4,
            "bindtableToggleClick",
            5,
            "uI",
            6,
            "uP",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        _(oJH, lKH);
      }
      oJH.wxXCkey = 1;
      oJH.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx9_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx9_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.wxml"
  ] = [
    $gwx9_XC_1,
    "./pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.wxml"
  ] = $gwx9_XC_1(
    "./pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.wxml"
  );
__wxRoute = "pages/stock-widget/@tencent/stock-widget/cardKits/basketCard";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.js";
define(
  "pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.js",
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
      t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
      o = Object.defineProperty,
      r = Object.defineProperties,
      a = Object.getOwnPropertyDescriptors,
      i = Object.getOwnPropertySymbols,
      n = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable,
      u = function (e, t, r) {
        return t in e
          ? o(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      },
      c = require("../../../../../common/vendor.js"),
      l = require("../../wzq-lite-basket/api/StockBasketAPI.js"),
      d = require("../../stock-hq-data/index.js"),
      k = require("../util/route.js"),
      g = new l.StockBasketAPI(c.StockBridge),
      v = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          r = t(e);
        return (
          r.sort(function (e, t) {
            var o,
              r,
              a = parseFloat(
                null == (o = null == e ? void 0 : e.data) ? void 0 : o.changePct
              ),
              i = parseFloat(
                null == (r = null == t ? void 0 : t.data) ? void 0 : r.changePct
              );
            return Number.isNaN(a) ? 1 : Number.isNaN(i) ? -1 : i - a;
          }),
          r.slice(0, o)
        );
      },
      p = {
        components: {
          basketOverview: function () {
            return "../../../../stockBasket/@tencent/wzq-lite-basket/components/basketOverview.js";
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
          skin: { type: String, default: "white" },
          isToMockTrade: { type: Boolean, default: !0 },
          source: { type: String, required: !0 },
        },
        setup: function (t, o) {
          var l = o.emit,
            p = c.computed(function () {
              return "searchAi" === (null == t ? void 0 : t.source)
                ? {
                    issearchAi: !0,
                    reportPrefix: "jichu.ai_search",
                    reportExtra: {
                      session: t.contexObj.sessionId,
                      requestid: t.contexObj.requestId,
                    },
                    rootClass: "ai-basket-stocklist",
                    routeMockTradeParam: {
                      scene: "fromai",
                      type: "gd",
                      id: t.basketId,
                    },
                    rowNum: 3,
                    columnNum: 3,
                    isBgWhite: !1,
                    isBigRadius: !0,
                  }
                : {};
            }),
            f = function (e) {
              var t;
              return e
                ? {
                    accChangePct1M: e.accChangePct1M,
                    avgChangePct: e.avgChangePct,
                    total: e.total,
                    title: e.title,
                    updateTime: e.updateTime,
                    data: v(
                      (null == e ? void 0 : e.data) || [],
                      (null == (t = p.value) ? void 0 : t.columnNum) || 3
                    ),
                  }
                : null;
            },
            h = k.useHqCardKit({
              request: function () {
                return g.getBasketDetail({ id: t.basketId });
              },
              formatData: function (e) {
                var o;
                if (
                  !e ||
                  0 !== e.code ||
                  !(null == (o = e.data) ? void 0 : o.detail)
                )
                  throw new Error(
                    (null == e ? void 0 : e.msg) ||
                      "Failed to fetch basket detail"
                  );
                var r = e.data.detail,
                  a = r.info,
                  i = r.ranking,
                  n = r.userData,
                  s = (function (e) {
                    if (!e) return null;
                    var o = e.name,
                      r = e.showType,
                      a = e.id,
                      i = e.desc;
                    return a !== t.basketId
                      ? null
                      : { name: o, showType: r, id: a, desc: i };
                  })(a);
                return s && t.basketId === s.id
                  ? { info: s, ranking: f(i), userData: n }
                  : null;
              },
            }),
            b = h.cardData,
            m = h.refresh,
            T = h.shouldShow;
          return {
            cardData: b,
            shouldShow: T,
            sourceData: p,
            onTableToggleClick: function (e, t) {
              var o, r;
              (null == (r = null == (o = b.value) ? void 0 : o.ranking)
                ? void 0
                : r.data) &&
                c.nextTick$1(function () {
                  var o, r, a;
                  (null ==
                  (a =
                    null == (r = null == (o = b.value) ? void 0 : o.ranking)
                      ? void 0
                      : r.data)
                    ? void 0
                    : a[e]) && (b.value.ranking.data[e].watched = t);
                });
            },
            refresh: m,
            onBasketToggleClick: function (e) {
              b.value.userData.watched = e;
            },
            goToMockTradeHandler: function () {
              var o, d, g, v;
              !k.isAPP &&
                t.isToMockTrade &&
                (k.goToMockTrade(
                  (null == (o = p.value) ? void 0 : o.routeMockTradeParam) || {}
                ),
                c.StockBridge.report(
                  "".concat(
                    null == (d = p.value) ? void 0 : d.reportPrefix,
                    ".goto_mock_trade_click"
                  ),
                  ((g = (function (t, o) {
                    for (var r in o || (o = {})) n.call(o, r) && u(t, r, o[r]);
                    if (i) {
                      var a,
                        c = e(i(o));
                      try {
                        for (c.s(); !(a = c.n()).done; ) {
                          r = a.value;
                          s.call(o, r) && u(t, r, o[r]);
                        }
                      } catch (e) {
                        c.e(e);
                      } finally {
                        c.f();
                      }
                    }
                    return t;
                  })({}, t.contexObj)),
                  (v = { gdid: t.basketId }),
                  r(g, a(v)))
                ),
                l("goToMockTrade"));
            },
            onStockDetailClick: function (e) {
              var t = e || {},
                o = t.market,
                r = t.stockType,
                a = d.utils.splitSymbol(
                  (null == e ? void 0 : e.symbol) || ""
                ).scode;
              k.goToStockDetail(o, a, { stockType: r });
            },
            goToChoosePage: k.goToChoosePage,
          };
        },
        onPageShow: function () {
          this.refresh();
        },
      };
    Array || c.resolveComponent("basket-overview")();
    var f = c._export_sfc(p, [
      [
        "render",
        function (e, t, o, r, a, i) {
          return c.e(
            { a: r.shouldShow },
            r.shouldShow
              ? {
                  b: c.o(r.onTableToggleClick, 5926),
                  c: c.o(r.onBasketToggleClick, 5927),
                  d: c.o(r.goToMockTradeHandler, 5928),
                  e: c.o(r.onStockDetailClick, 5929),
                  f: c.o(r.goToChoosePage, 5930),
                  g: c.p({
                    "basket-data": r.cardData,
                    "is-show-footer": !0,
                    "is-big-radius": r.sourceData.isBigRadius,
                    "is-bg-white": r.sourceData.isBgWhite,
                    "is-search-ai": r.sourceData.issearchAi,
                    "root-class": r.sourceData.rootClass,
                    "column-num": r.sourceData.columnNum,
                    "row-num": r.sourceData.rowNum,
                    skin: o.skin,
                    "report-extra": r.sourceData.reportExtra,
                    "report-prefix": r.sourceData.reportPrefix,
                    "is-to-mock-trade": o.isToMockTrade,
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
      "pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.js",
  }
);
require("pages/stock-widget/@tencent/stock-widget/cardKits/basketCard.js");
