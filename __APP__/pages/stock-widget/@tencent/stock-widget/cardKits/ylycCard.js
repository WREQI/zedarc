var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, t, o) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
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
                  requestid: null == (t = r.contexObj) ? void 0 : t.requestId,
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
                  for (var u in r || (r = {})) n.call(r, u) && i(t, u, r[u]);
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
                    o.handleCardClick && o.handleCardClick.apply(o, arguments)
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
