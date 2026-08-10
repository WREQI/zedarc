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
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = require("../../../../../common/vendor.js"),
  l = require("../../wzq-lite-basket/api/StockBasketAPI.js"),
  d = require("../../stock-hq-data/index.js"),
  k = require("../util/route.js"),
  g = new l.StockBasketAPI(c.StockBridge),
  v = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
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
                (null == e ? void 0 : e.msg) || "Failed to fetch basket detail"
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
