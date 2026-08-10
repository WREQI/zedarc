require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, t, o) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  l = function (e, t) {
    for (var r in t || (t = {})) a.call(t, r) && s(e, r, t[r]);
    if (u) {
      var n,
        i = o(u(t));
      try {
        for (i.s(); !(n = i.n()).done; ) {
          r = n.value;
          c.call(t, r) && s(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return n(e, i(t));
  },
  p = require("../../../../../common/vendor.js"),
  f = require("../../stock-hq-data/index.js"),
  h = require("../util/route.js"),
  m = require("../util/const.js"),
  v = new f.DetailApi(function () {
    if (1 === arguments.length)
      return p.StockBridge.request(
        arguments.length <= 0 ? void 0 : arguments[0],
        "GET",
        {},
        { forceCallback: !0 }
      );
  }),
  k = null,
  g = {
    components: {
      Composition: function () {
        return "../../../../quote/@tencent/wzq-hq-chart/Composition.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      skin: { type: String, required: !0 },
      stockName: { type: String, required: !0 },
      symbol: { type: String, required: !0 },
      isToMockTrade: { type: Boolean, default: !0 },
      source: { type: String, required: !0 },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (o, r) {
      var n,
        i = this,
        u = r.emit,
        a = null == (n = p.getCurrentInstance()) ? void 0 : n.proxy,
        c = p.computed(function () {
          return "searchAi" === (null == o ? void 0 : o.source)
            ? {
                routeMockTradeParam: {
                  scene: "fromai",
                  type: "gp",
                  id: o.symbol,
                },
                showDelistedStock: !1,
                reportPrefix: "jichu.ai_search",
              }
            : "customerService" === (null == o ? void 0 : o.source)
            ? { showDelistedStock: !0, reportPrefix: "" }
            : {};
        }),
        s = p.ref(!1),
        g = p.reactive({
          width: 300,
          height: 230,
          left: 0,
          setting: m.kLineSettings,
          tabKey: "mins",
          widgetParams: {
            hideIndicator: !0,
            hideClickTips: !0,
            hideChartSetting: !0,
            disableTapEvent: !0,
          },
        }),
        b = p.computed(function () {
          var e;
          return (
            (null == (e = f.utils.splitSymbol(o.symbol)) ? void 0 : e.scode) ||
            ""
          );
        }),
        y = p.computed(function () {
          var e;
          return (
            (null == (e = f.utils.splitSymbol(o.symbol)) ? void 0 : e.market) ||
            ""
          );
        }),
        S = p.computed(function () {
          return f.utils.isUSMarket(y.value);
        }),
        w = p.computed(function () {
          var e;
          return j(null == (e = O.value) ? void 0 : e.zde);
        }),
        T = p.computed(function () {
          var e = b.value;
          return (
            f.utils.isUSMarket(y.value) && (e = e.replace(/\..*$/, "")),
            "".concat(o.stockName, "(").concat(e, ")-K线图")
          );
        }),
        q = p.computed(function () {
          var e, t;
          if (!(null == (e = O.value) ? void 0 : e.utime)) return "";
          var o = new Date(1e3 * (null == (t = O.value) ? void 0 : t.utime));
          return ""
            .concat((o.getMonth() + 1).toString().padStart(2, 0), "-")
            .concat(o.getDate().toString().padStart(2, 0), " ")
            .concat(o.getHours().toString().padStart(2, 0), ":")
            .concat(o.getMinutes().toString().padStart(2, 0), " 更新");
        });
      p.watch(
        function () {
          return g.width;
        },
        function (e) {
          var t = 0.75 * e + 2;
          g.height = t > 400 ? 400 : t;
        }
      );
      var C = function () {
        return (
          (e = i),
          null,
          (o = t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        var t = null == a ? void 0 : a.$el;
                        void 0 !== p.wx$1 &&
                        "function" == typeof p.wx$1.getSystemInfoSync
                          ? (k = setTimeout(function () {
                              a && !a._isDestroyed
                                ? (p.wx$1
                                    .createSelectorQuery()
                                    .in(a)
                                    .select(".stock-chart-panel")
                                    .boundingClientRect(function (e) {
                                      e && (g.width = e.width - 24);
                                    })
                                    .exec(),
                                  e())
                                : e();
                            }, 200))
                          : t
                          ? ((g.width = t.offsetWidth - 24), e())
                          : e();
                      })
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
                  u(o.next(e));
                } catch (e) {
                  r(e);
                }
              },
              i = function (e) {
                try {
                  u(o.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              u = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, i);
              };
            u((o = o.apply(e, null)).next());
          })
        );
        var e, o;
      };
      p.onMounted(function () {
        C();
      });
      var j = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            o = t;
          return Number.isNaN(+e)
            ? ""
            : ("--" === o && (o = 0),
              +e == +o ? "color-equal" : +e > +o ? "color-rise" : "color-drop");
        },
        M = function () {
          h.goToStockDetail(y.value, b.value),
            p.StockBridge.report(
              "hq.stock_detail.stockchartpanel_stockdetail_click",
              { stockid: o.symbol, widgettype: "candlestick" }
            ),
            u("gotoStockDetail");
        },
        P = function (e) {
          return (
            !(!o.isToMockTrade || h.isAPP) &&
            (f.utils.isAMarket(e) ||
              f.utils.isChuangYeStock(e) ||
              f.utils.isKeChuangStock(e) ||
              "ETF" === e)
          );
        },
        x = h.useHqCardKit({
          request: function () {
            return null == v
              ? void 0
              : v.getQT(
                  { market: y.value, scode: b.value, encode: "utf8" },
                  { adapterType: "stockinfo", needProcess: !0 }
                );
          },
          formatData: function (t) {
            var o;
            if (!t || "object" != e(t)) return null;
            var r = t || {},
              n = r.secu_quote,
              i = r.secu_info;
            s.value = P(null == i ? void 0 : i.stocktype);
            var u = ["D", "U"].includes(null == i ? void 0 : i.status);
            return !(null == (o = c.value) ? void 0 : o.showDelistedStock) && u
              ? null
              : n || null;
          },
          isActivatedRefresh: !1,
          onShouldShowChange: function (e) {
            e && C();
          },
        }),
        D = x.refresh,
        _ = x.loading,
        Q = x.shouldShow,
        O = x.cardData;
      return (
        p.onBeforeUnmount(function () {
          k && clearTimeout(k);
        }),
        d(l({ sourceData: c }, p.toRefs(g)), {
          loading: _,
          shouldShow: Q,
          isCanMocktrade: s,
          secuQuote: O,
          scode: b,
          market: y,
          stockTitle: T,
          timeStr: q,
          showUSTime: S,
          zdClass: w,
          goToMockTradeHandler: function () {
            var e, t;
            !h.isAPP && o.isToMockTrade && s.value
              ? (h.goToMockTrade(
                  (null == (e = c.value) ? void 0 : e.routeMockTradeParam) || {}
                ),
                p.StockBridge.report(
                  "".concat(
                    "searchAi" === o.source
                      ? "base.ai_search"
                      : null == (t = c.value)
                      ? void 0
                      : t.reportPrefix,
                    "ai_mock_trade_plugin_click"
                  ),
                  d(l({}, o.contexObj), { stockid: o.symbol })
                ),
                u("goToMockTrade"))
              : M();
          },
          gotoStockDetail: M,
          getColorClass: j,
          refresh: D,
        })
      );
    },
  };
Array || p.resolveComponent("Composition")();
var b = p._export_sfc(g, [
  [
    "render",
    function (e, t, o, r, n, i) {
      return p.e(
        { a: r.shouldShow },
        r.shouldShow
          ? p.e(
              { b: p.t(r.stockTitle), c: p.t(r.timeStr), d: r.secuQuote },
              r.secuQuote
                ? p.e(
                    { e: r.secuQuote.dqj },
                    r.secuQuote.dqj
                      ? { f: p.t(r.secuQuote.dqj), g: p.n(r.zdClass) }
                      : {},
                    { h: r.secuQuote.zde },
                    r.secuQuote.zde
                      ? { i: p.t(r.secuQuote.zde), j: p.n(r.zdClass) }
                      : {},
                    { k: r.secuQuote.zdf },
                    r.secuQuote.zdf
                      ? { l: p.t(r.secuQuote.zdf), m: p.n(r.zdClass) }
                      : {}
                  )
                : {},
              { n: r.showUSTime },
              (r.showUSTime, {}),
              {
                o: p.sr("composition", "b1cf3c2d-0"),
                p: p.p({
                  "page-ready": !0,
                  width: e.width,
                  height: e.height,
                  "hide-more-tabs": !0,
                  skin: "black" === o.skin ? "dark" : "plain",
                  market: r.market,
                  scode: r.scode,
                  "query-tab-key": e.tabKey,
                  "hide-handicap": !0,
                  "custom-setting": e.setting,
                  "enable-news-bar": !1,
                  "widget-params": e.widgetParams,
                  source: o.source,
                }),
                q: "".concat(e.height, "px"),
                r: "".concat(e.left, "px"),
                s: r.isCanMocktrade,
              },
              (r.isCanMocktrade, {}),
              {
                t: p.t(r.isCanMocktrade ? "一键模拟交易" : "点击查看详情"),
                v: p.o(function () {
                  return (
                    r.goToMockTradeHandler &&
                    r.goToMockTradeHandler.apply(r, arguments)
                  );
                }, 5918),
                w: "black" === o.skin ? 1 : "",
                x: p.o(function () {
                  return (
                    r.gotoStockDetail && r.gotoStockDetail.apply(r, arguments)
                  );
                }, 5919),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b1cf3c2d"],
]);
wx.createComponent(b);
