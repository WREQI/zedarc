$gwx9_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx9_XC_5 || [];
    function gz$gwx9_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx9_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx9_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx9_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "i"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-c8edcef1"]],
              [1, "card-wrapper"],
            ],
            [[7], [3, "h"]],
          ],
        ]);
        Z([3, "_div content-wrapper data-v-c8edcef1"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([[7], [3, "f"]]);
        Z([3, "data-v-c8edcef1"]);
        Z([3, "c8edcef1-0"]);
        Z([[7], [3, "g"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx9_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx9_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx9_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx9_XC_5 = true;
    var x = [
      "./pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx9_XC_5_1();
      var fYI = _v();
      _(r, fYI);
      if (_oz(z, 0, e, s, gg)) {
        fYI.wxVkey = 1;
        var cZI = _mz(z, "view", ["catchtap", 1, "class", 1], [], e, s, gg);
        var h1I = _n("view");
        _rz(z, h1I, "class", 3, e, s, gg);
        var o2I = _v();
        _(h1I, o2I);
        if (_oz(z, 4, e, s, gg)) {
          o2I.wxVkey = 1;
        }
        var c3I = _v();
        _(h1I, c3I);
        if (_oz(z, 5, e, s, gg)) {
          c3I.wxVkey = 1;
          var o4I = _mz(
            z,
            "profit-forcast",
            ["bind:__l", 6, "bindshowModule", 1, "class", 2, "uI", 3, "uP", 4],
            [],
            e,
            s,
            gg
          );
          _(c3I, o4I);
        }
        o2I.wxXCkey = 1;
        c3I.wxXCkey = 1;
        c3I.wxXCkey = 3;
        _(cZI, h1I);
        _(fYI, cZI);
      }
      fYI.wxXCkey = 1;
      fYI.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx9_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx9_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.wxml"
  ] = [
    $gwx9_XC_5,
    "./pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.wxml"
  ] = $gwx9_XC_5(
    "./pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.wxml"
  );
__wxRoute = "pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.js";
define(
  "pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.js",
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
      r = Object.defineProperty,
      o = Object.getOwnPropertySymbols,
      n = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      i = function (e, t, o) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[t] = o);
      },
      u = require("../../../../../common/vendor.js"),
      c = require("../api/cardKit.js"),
      l = require("../../stock-hq-data/index.js"),
      s = require("../util/route.js"),
      d = {
        options: { styleIsolation: "shared" },
        components: {
          ProfitForcast: function () {
            return "../../../../detailSbg/@tencent/wzq-detail-finance/components/ProfitForcast.js";
          },
        },
        props: {
          source: { type: String, required: !0 },
          symbol: { type: String, required: !0 },
          stockName: { type: String, default: "" },
          stockType: { type: String, default: "" },
          skin: { type: String, default: "white" },
          position: { type: [Number, String], default: 0 },
          contexObj: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        setup: function (r, d) {
          var p = this,
            f = d.emit;
          u.provide("hqBridge", c.HQBridge);
          var h = u.computed(function () {
              var e, t;
              return "searchAi" === r.source
                ? {
                    reportPrefix: "jichu.ai_search",
                    reportExtra: {
                      session: null == (e = r.contexObj) ? void 0 : e.sessionId,
                      requestid:
                        null == (t = r.contexObj) ? void 0 : t.requestId,
                    },
                  }
                : {};
            }),
            m = u.computed(function () {
              return l.utils.splitSymbol(r.symbol).market;
            }),
            v = u.computed(function () {
              return l.utils.splitSymbol(r.symbol).scode;
            }),
            b = u.computed(function () {
              return l.utils.isHSMarket(m.value);
            }),
            g = u.computed(function () {
              return l.utils.trimScode(v.value);
            }),
            y = s.useHqCardKit({
              request: function () {
                return (
                  (e = p),
                  null,
                  (o = t().mark(function e() {
                    return t().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              b.value
                                ? c.getFinanceData(c.HQBridge, {
                                    stockCode: r.symbol,
                                    subReq: ["zgGeneral"],
                                    "zgGeneral.modules": "opinion",
                                    "zgGeneral.source": "wzq",
                                  })
                                : c.getIntlProfitForecast(c.HQBridge, r.symbol)
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  new Promise(function (t, r) {
                    var n = function (e) {
                        try {
                          i(o.next(e));
                        } catch (e) {
                          r(e);
                        }
                      },
                      a = function (e) {
                        try {
                          i(o.throw(e));
                        } catch (e) {
                          r(e);
                        }
                      },
                      i = function (e) {
                        return e.done
                          ? t(e.value)
                          : Promise.resolve(e.value).then(n, a);
                      };
                    i((o = o.apply(e, null)).next());
                  })
                );
                var e, o;
              },
              formatData: function (t) {
                var u, l, s;
                if (0 !== (null == t ? void 0 : t.code)) return null;
                if (
                  (c.HQBridge.report(
                    "".concat(h.value.reportPrefix, ".plugin_expose"),
                    (function (t, r) {
                      for (var u in r || (r = {}))
                        n.call(r, u) && i(t, u, r[u]);
                      if (o) {
                        var c,
                          l = e(o(r));
                        try {
                          for (l.s(); !(c = l.n()).done; ) {
                            u = c.value;
                            a.call(r, u) && i(t, u, r[u]);
                          }
                        } catch (e) {
                          l.e(e);
                        } finally {
                          l.f();
                        }
                      }
                      return t;
                    })({ widgettype: "profitforcast" }, r.contexObj)
                  ),
                  b.value)
                )
                  return (
                    (
                      (null ==
                      (s =
                        null ==
                        (l =
                          null == (u = null == t ? void 0 : t.data)
                            ? void 0
                            : u.subOrgRspData)
                          ? void 0
                          : l.zgGeneral)
                        ? void 0
                        : s.data) || {}
                    ).opinion || null
                  );
                var d = null == t ? void 0 : t.data;
                return d && (d.EPS || d.NET || d.Sales) ? d : null;
              },
              onShouldShowChange: function (e) {
                return f("hasData", e);
              },
            }),
            S = y.cardData,
            k = y.refresh,
            w = y.shouldShow,
            q = y.handleShouldShow;
          return {
            shouldShow: w,
            sourceData: h,
            cardData: S,
            market: m,
            scode: v,
            isHS: b,
            showStockCode: g,
            handleCardClick: function () {
              var e = h.value.reportPrefix;
              c.HQBridge.report("".concat(e, ".ai_plugin_click"), {
                widgettype: "profitForcast",
                stockid: r.symbol,
                requestid: r.contexObj.requestId || "",
              }),
                c.HQBridge.report("".concat(e, ".profitForcast_click"));
              var t = s.isAPP
                ? {
                    name: r.stockName,
                    selectedTabTitle: b.value ? "分析" : "财务",
                    selectedSubTabTitle: b.value ? "盈利预测" : "",
                  }
                : { tab: "finance", tabCurrentModule: "profitForcast" };
              s.goToStockDetail(m.value, v.value, t);
            },
            handleShouldShow: q,
            refresh: k,
          };
        },
        onPageShow: function () {
          this.refresh();
        },
      };
    Array || u.resolveComponent("profit-forcast")();
    var p = u._export_sfc(d, [
      [
        "render",
        function (e, t, r, o, n, a) {
          return u.e(
            { a: o.shouldShow },
            o.shouldShow
              ? u.e(
                  { b: r.stockName },
                  r.stockName
                    ? { c: u.t(r.stockName), d: u.t(o.showStockCode) }
                    : {},
                  { e: o.cardData },
                  o.cardData
                    ? {
                        f: u.o(o.handleShouldShow, 5793),
                        g: u.p({
                          "chart-id": "profitForcastChart".concat(r.position),
                          "chart-style": "width: 560rpx; height: 288rpx",
                          market: o.market,
                          scode: o.scode,
                          skin: r.skin,
                          "profit-forcast": o.cardData,
                          "jump-from-ai-plugin": !0,
                          "disable-tooltips": !0,
                          "page-name": o.sourceData.reportPrefix,
                        }),
                      }
                    : {},
                  {
                    h: u.n("skin-".concat(r.skin)),
                    i: u.o(function () {
                      return (
                        o.handleCardClick &&
                        o.handleCardClick.apply(o, arguments)
                      );
                    }, 5794),
                  }
                )
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-c8edcef1"],
    ]);
    wx.createComponent(p);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.js",
  }
);
require("pages/stock-widget/@tencent/stock-widget/cardKits/ylycCard.js");
