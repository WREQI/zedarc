$gwx9_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx9_XC_6 || [];
    function gz$gwx9_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx9_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx9_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx9_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "v"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "stock-chart-panel"]],
              [1, "data-v-29f20308"],
            ],
            [
              [2, "&&"],
              [[7], [3, "t"]],
              [1, "skin-black"],
            ],
          ],
        ]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "l"]]);
        Z([3, "__l"]);
        Z([3, "r data-v-29f20308"]);
        Z([3, "29f20308-0"]);
        Z([[7], [3, "n"]]);
        Z([3, "composition"]);
        Z([[7], [3, "s"]]);
        Z([3, "_div to-detail-label data-v-29f20308"]);
        Z([[7], [3, "q"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx9_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx9_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx9_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx9_XC_6 = true;
    var x = [
      "./pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx9_XC_6_1();
      var a6I = _v();
      _(r, a6I);
      if (_oz(z, 0, e, s, gg)) {
        a6I.wxVkey = 1;
        var t7I = _v();
        _(a6I, t7I);
        if (_oz(z, 1, e, s, gg)) {
          t7I.wxVkey = 1;
          var e8I = _mz(z, "view", ["catchtap", 2, "class", 1], [], e, s, gg);
          var b9I = _v();
          _(e8I, b9I);
          if (_oz(z, 4, e, s, gg)) {
            b9I.wxVkey = 1;
          }
          var o0I = _v();
          _(e8I, o0I);
          if (_oz(z, 5, e, s, gg)) {
            o0I.wxVkey = 1;
            var xAJ = _mz(
              z,
              "composition",
              ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3, "uR", 4],
              [],
              e,
              s,
              gg
            );
            _(o0I, xAJ);
          }
          var oBJ = _mz(z, "view", ["catchtap", 11, "class", 1], [], e, s, gg);
          var fCJ = _v();
          _(oBJ, fCJ);
          if (_oz(z, 13, e, s, gg)) {
            fCJ.wxVkey = 1;
          }
          fCJ.wxXCkey = 1;
          _(e8I, oBJ);
          b9I.wxXCkey = 1;
          o0I.wxXCkey = 1;
          o0I.wxXCkey = 3;
          _(t7I, e8I);
        }
        t7I.wxXCkey = 1;
        t7I.wxXCkey = 3;
      } else {
        a6I.wxVkey = 2;
      }
      a6I.wxXCkey = 1;
      a6I.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx9_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx9_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.wxml"
  ] = [
    $gwx9_XC_6,
    "./pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.wxml",
  ];
else
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.wxml"
  ] = $gwx9_XC_6(
    "./pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.wxml"
  );
__wxRoute =
  "pages/stock-widget/@tencent/stock-widget/components/StockChartPanel";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.js";
define(
  "pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.js",
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
    var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = function (t, e, i) {
        return new Promise(function (n, o) {
          var r = function (t) {
              try {
                s(i.next(t));
              } catch (t) {
                o(t);
              }
            },
            a = function (t) {
              try {
                s(i.throw(t));
              } catch (t) {
                o(t);
              }
            },
            s = function (t) {
              return t.done ? n(t.value) : Promise.resolve(t.value).then(r, a);
            };
          s((i = i.apply(t, e)).next());
        });
      },
      i = require("../../../../../common/vendor.js"),
      n = require("../../stock-hq-data/index.js"),
      o = require("../util/tools.js"),
      r = {
        components: {
          Composition: function () {
            return "../../../../quote/@tencent/wzq-hq-chart/Composition.js";
          },
        },
        options: { styleIsolation: "shared" },
        inject: ["hqBridge"],
        props: {
          skin: { type: String, required: !0 },
          stockName: { type: String, required: !0 },
          symbol: { type: String, required: !0 },
          isToMockTrade: { type: Boolean, default: !0 },
          routeMockTradeParam: {
            type: Object,
            default: function () {
              return {};
            },
          },
          showDelistedStock: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            width: 300,
            height: 230,
            left: 0,
            settingReady: !1,
            setting: o.getDefaultSetting(),
            tabKey: "mins",
            widgetParams: {
              hideIndicator: !0,
              hideClickTips: !0,
              hideChartSetting: !0,
              disableTapEvent: !0,
            },
            currentPrice: null,
            priceChange: null,
            changePercentage: null,
            utime: null,
            currentEnv: "mpweapp",
            hidePanel: !1,
            dataLoaded: !1,
            timerId: null,
            isCanMocktrade: !1,
          };
        },
        computed: {
          scode: function () {
            return n.utils.splitSymbol(this.symbol).scode;
          },
          market: function () {
            return n.utils.splitSymbol(this.symbol).market;
          },
          stockTitle: function () {
            var t = this.scode;
            return (
              n.utils.isUSMarket(this.market) && (t = t.replace(/\..*$/, "")),
              "".concat(this.stockName, "(").concat(t, ")-K线图")
            );
          },
          zdClass: function () {
            return this.getColorClass(this.priceChange);
          },
          timeStr: function () {
            if (!this.utime) return "";
            var t = new Date(1e3 * this.utime);
            return ""
              .concat((t.getMonth() + 1).toString().padStart(2, 0), "-")
              .concat(t.getDate().toString().padStart(2, 0), " ")
              .concat(t.getHours().toString().padStart(2, 0), ":")
              .concat(t.getMinutes().toString().padStart(2, 0), " 更新");
          },
          showUSTime: function () {
            return n.utils.isUSMarket(this.market);
          },
          isAPP: function () {
            return "mpweapp" === i.ShellTypeEnum.SHY;
          },
        },
        watch: {
          width: function (t) {
            var e = 0.75 * t + 2;
            this.height = e > 400 ? 400 : e;
          },
        },
        created: function () {
          this.getSetting(), (this.settingReady = !0), this.getQTData();
        },
        beforeUnmount: function () {
          clearTimeout(this.timerId);
        },
        mounted: function () {
          this.getCompositionWidth();
        },
        methods: {
          getCompositionWidth: function () {
            return e(
              this,
              null,
              t().mark(function e() {
                var n,
                  o = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = this),
                            t.abrupt(
                              "return",
                              new Promise(function (t) {
                                void 0 !== i.wx$1 &&
                                "function" == typeof i.wx$1.getSystemInfoSync
                                  ? (o.timerId = setTimeout(function () {
                                      i.wx$1
                                        .createSelectorQuery()
                                        .in(o)
                                        .select(".stock-chart-panel")
                                        .boundingClientRect(function (t) {
                                          t && (n.width = t.width - 24);
                                        })
                                        .exec(),
                                        t();
                                    }, 200))
                                  : ((n.width = n.$el.offsetWidth - 24), t());
                              })
                            )
                          );
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
          getSetting: function () {
            Object.assign(this.setting, {
              vlineCount: 0,
              hlineCount: 0,
              yAixsCount: 2,
              crossLabel: { hideYlabel: !0 },
              trendline: !1,
              supportPressureLine: !1,
              magicNine: !1,
              macdPattern: !1,
              gap: !1,
              ds: !1,
              zjzf: !1,
              indicatorCount: 1,
              mainIndicator: "ma",
            });
          },
          getQTData: function () {
            return e(
              this,
              null,
              t().mark(function e() {
                var i,
                  o,
                  r,
                  a = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = new n.DetailApi(function (t) {
                              return a.hqBridge.request(t);
                            })),
                            (t.prev = 1),
                            (t.next = 4),
                            i.getQT(
                              { market: this.market, scode: this.scode },
                              { adapterType: "stockinfo", needProcess: !0 }
                            )
                          );
                        case 4:
                          if (((this.formatData = t.sent), !this.formatData)) {
                            t.next = 9;
                            break;
                          }
                          this.checkCanMockTrade(),
                            (o = this.formatData.secu_quote),
                            (r = this.formatData.secu_info),
                            this.showDelistedStock ||
                              !r ||
                              ("D" !== r.status && "U" !== r.status) ||
                              (this.hidePanel = !0),
                            o &&
                              ((this.currentPrice = o.dqj),
                              (this.priceChange = o.zde),
                              (this.changePercentage = o.zdf),
                              (this.utime = o.utime));
                        case 9:
                          t.next = 13;
                          break;
                        case 11:
                          (t.prev = 11), (t.t0 = t.catch(1));
                        case 13:
                          return (
                            (t.prev = 13),
                            (this.dataLoaded = !0),
                            (t.next = 17),
                            this.getCompositionWidth()
                          );
                        case 17:
                          return this.$emit("dataReady"), t.finish(13);
                        case 19:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 11, 13, 19]]
                );
              })
            );
          },
          getColorClass: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return isNaN(+t)
              ? ""
              : ("--" === e && (e = 0),
                +t == +e
                  ? "color-equal"
                  : +t > +e
                  ? "color-rise"
                  : "color-drop");
          },
          gotoStockDetail: function () {
            var t = this.market,
              e = this.scode,
              n = this.symbol;
            "wzqlight" === this.currentEnv &&
              i.StockBridge.routeTo({
                path: "/quote/detail",
                query: { market: t, scode: e },
              }),
              "stock" === this.currentEnv &&
                i.StockBridge.routeTo({
                  path: "/trade/stock_detail.shtml",
                  query: { type: t, scode: e },
                }),
              ("mpweapp" !== this.currentEnv && "mpwzq" !== this.currentEnv) ||
                i.StockBridge.routeTo({
                  url: "/pages/quote/quote?market="
                    .concat(t, "&scode=")
                    .concat(e),
                }),
              this.isAPP &&
                shy.navigateTo({
                  url: "qqstock://StockDetail?info=".concat(
                    encodeURIComponent(
                      JSON.stringify({ code: "".concat(n), showNav: !0 })
                    )
                  ),
                }),
              i.StockBridge.report(
                "hq.stock_detail.stockchartpanel_stockdetail_click",
                { stockid: this.symbol, widgettype: "candlestick" }
              ),
              this.$emit("gotoStockDetail");
          },
          goToMockTrade: function () {
            !this.isAPP && this.isToMockTrade && this.isCanMocktrade
              ? (i.StockRouter.routeTo({
                  name: "mocktrade",
                  query: this.routeMockTradeParam,
                }),
                this.$emit("goToMockTrade"))
              : this.gotoStockDetail();
          },
          checkCanMockTrade: function () {
            var t, e;
            if (!this.isToMockTrade || this.isAPP) return !1;
            var i =
              null == (e = null == (t = this.formatData) ? void 0 : t.secu_info)
                ? void 0
                : e.stocktype;
            this.isCanMocktrade =
              n.utils.isAMarket(i) ||
              n.utils.isChuangYeStock(i) ||
              n.utils.isKeChuangStock(i) ||
              "ETF" === i;
          },
        },
      };
    Array || i.resolveComponent("Composition")();
    var a = i._export_sfc(r, [
      [
        "render",
        function (t, e, n, o, r, a) {
          return i.e(
            { a: r.dataLoaded },
            r.dataLoaded
              ? i.e(
                  { b: !r.hidePanel },
                  r.hidePanel
                    ? {}
                    : i.e(
                        {
                          c: i.t(a.stockTitle),
                          d: i.t(a.timeStr),
                          e: i.t(r.currentPrice),
                          f: i.n(a.zdClass),
                          g: i.t(r.priceChange),
                          h: i.n(a.zdClass),
                          i: i.t(r.changePercentage),
                          j: i.n(a.zdClass),
                          k: a.showUSTime,
                        },
                        (a.showUSTime, {}),
                        { l: r.settingReady },
                        r.settingReady
                          ? {
                              m: i.sr("composition", "29f20308-0"),
                              n: i.p({
                                "page-ready": !0,
                                width: r.width,
                                height: r.height,
                                "hide-more-tabs": !0,
                                skin: "black" === n.skin ? "dark" : "plain",
                                market: a.market,
                                scode: a.scode,
                                "query-tab-key": r.tabKey,
                                "hide-handicap": !0,
                                "custom-setting": r.setting,
                                "enable-news-bar": !1,
                                "widget-params": r.widgetParams,
                                source: "searchAi",
                              }),
                            }
                          : {},
                        {
                          o: "".concat(r.height, "px"),
                          p: "".concat(r.left, "px"),
                          q: r.isCanMocktrade,
                        },
                        (r.isCanMocktrade, {}),
                        {
                          r: i.t(
                            r.isCanMocktrade ? "一键模拟交易" : "点击查看详情"
                          ),
                          s: i.o(function () {
                            return (
                              a.goToMockTrade &&
                              a.goToMockTrade.apply(a, arguments)
                            );
                          }, 5920),
                          t: "black" === n.skin ? 1 : "",
                          v: i.o(function () {
                            return (
                              a.gotoStockDetail &&
                              a.gotoStockDetail.apply(a, arguments)
                            );
                          }, 5921),
                        }
                      )
                )
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-29f20308"],
    ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.js",
  }
);
require("pages/stock-widget/@tencent/stock-widget/components/StockChartPanel.js");
