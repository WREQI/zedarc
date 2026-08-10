var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-hq-data/index.js"),
  o = require("../../../stock-hq-core/utils/market.js"),
  r = e.defineComponent({
    components: {
      MarketIcon: function () {
        return "./MarketIcon.js";
      },
    },
    props: {
      date: { type: String, default: "" },
      record: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["toQuote"],
    setup: function (r, n) {
      var d = n.emit;
      return {
        dateStr: e.computed(function () {
          return e.dayjs(r.record.date, "YYYY-MM-DD").format("MM-DD") || "";
        }),
        toQuote: function (o) {
          if (
            (d("toQuote"),
            e.StockBridge.report("hq.basketrecord.entry_stock_click"),
            e.StockBridge.ENV === e.EnvTypeEnum.MP)
          )
            e.StockBridge.routeTo({ url: "/pages/quote/quote?s=".concat(o) });
          else {
            var r = t.utils.splitSymbol(o),
              n = r.scode,
              c = r.market;
            e.StockBridge.routeTo({
              path: "/quote/detail",
              query: { market: c, scode: n },
            });
          }
        },
        transStockName: function (e) {
          var r = t.utils.splitSymbol(e);
          return (
            o.isUSMarket(r.market) && (r.scode = o.trimScode(r.scode)), r.scode
          );
        },
        getStockNameFontType: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = e.replace(/\s/g, "");
          return t.length > 1 && t.length < 8
            ? "mid-font"
            : t.length >= 8
            ? "small-font"
            : "";
        },
      };
    },
  });
Array || e.resolveComponent("MarketIcon")();
var n = e._export_sfc(r, [
  [
    "render",
    function (t, o, r, n, d, c) {
      return e.e(
        { a: e.t(t.dateStr), b: t.record.added.length },
        t.record.added.length ? { c: e.t(t.record.added.length) } : {},
        {
          d: e.f(t.record.added, function (o, r, n) {
            return {
              a: e.t(o.name),
              b: e.n(t.getStockNameFontType(o.name)),
              c: "779bd592-0-" + n,
              d: e.p({ symbol: o.symbol, type: o.type }),
              e: e.t(t.transStockName(o.symbol)),
              f: o.symbol,
              g: e.o(
                function (e) {
                  return t.toQuote(o.symbol);
                },
                2398,
                o.symbol
              ),
            };
          }),
          e: t.record.deleted.length,
        },
        t.record.deleted.length ? { f: e.t(t.record.deleted.length) } : {},
        {
          g: e.f(t.record.deleted, function (o, r, n) {
            return {
              a: e.t(o.name),
              b: e.n(t.getStockNameFontType(o.name)),
              c: "779bd592-1-" + n,
              d: e.p({ symbol: o.symbol, type: o.type }),
              e: e.t(t.transStockName(o.symbol)),
              f: o.symbol,
              g: e.o(
                function (e) {
                  return t.toQuote(o.symbol);
                },
                2399,
                o.symbol
              ),
            };
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-779bd592"],
]);
wx.createComponent(n);
