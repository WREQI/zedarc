require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-hq-data/index.js"),
  o = ["jj", "uk", "fx", "ft", "fu"],
  r = {
    name: "AssetsStockList",
    options: { styleIsolation: "shared" },
    components: {
      MarketIcon: function () {
        return "../../stock-markets-base/components/MarketIcon.js";
      },
    },
    props: {
      stocks: {
        type: Array,
        default: function () {
          return [];
        },
      },
      type: { type: String, default: "" },
      total: { type: String, default: "" },
    },
    setup: function (r) {
      return {
        isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
        typeText: e.computed(function () {
          switch (r.type) {
            case "feature":
            case "commodity":
              return "期货";
            case "bond":
              return "债券";
            case "stock":
            default:
              return "股票";
            case "fund":
              return "基金";
            case "product":
              return "资产";
          }
        }),
        showZDF: e.computed(function () {
          return "stock" === r.type || "fund" === r.type;
        }),
        gotoDetail: function (r) {
          if (r.jump_code) {
            var c = r.jump_code.slice(0, 2);
            if (!o.includes(c)) {
              e.StockBridge.report(
                "stockinfo.asssets.".concat(
                  r.isQuarter ? "quarter" : "realTime",
                  ".jump"
                ),
                { id: r.jump_code }
              );
              var a = t.utils.splitSymbol(r.jump_code),
                n = a.market,
                s = a.scode;
              setTimeout(function () {
                "wzq" === e.StockBridge.ENV &&
                  e.StockBridge.routeTo({
                    name: "HqStock",
                    params: { market: n, code: s, name: r.name },
                  }),
                  "wzq_light" === e.StockBridge.ENV &&
                    e.StockBridge.routeTo({
                      path: "/quote/detail",
                      query: { market: n, scode: s },
                    }),
                  "oem" === e.StockBridge.ENV &&
                    e.StockBridge.routeTo({
                      path: "/detail",
                      query: { market: n, scode: s },
                    }),
                  "dafeng" === e.StockBridge.ENV &&
                    e.StockBridge.routeTo({
                      path: "/detail",
                      query: { market: n, scode: s },
                    }),
                  "mini" === e.StockBridge.ENV &&
                    e.StockBridge.routeTo({
                      path: "/detail",
                      query: { type: n, scode: s },
                    }),
                  "mp" === e.StockBridge.ENV &&
                    e.StockBridge.routeTo({
                      url: "/pages/quote/quote?market="
                        .concat(n, "&scode=")
                        .concat(s),
                    });
              }, 500);
            }
          }
        },
      };
    },
  };
Array || e.resolveComponent("market-icon")();
var c = e._export_sfc(r, [
  [
    "render",
    function (t, o, r, c, a, n) {
      return e.e(
        { a: e.t(c.typeText), b: r.total && "0.00" !== r.total },
        r.total && "0.00" !== r.total
          ? {
              c: e.t("股票" === c.typeText ? "持股" : c.typeText),
              d: e.t(r.total),
            }
          : {},
        { e: e.t(c.typeText), f: c.showZDF },
        (c.showZDF, {}),
        {
          g: e.t("期货" === c.typeText ? "持仓占比" : "净值占比"),
          h: e.f(r.stocks, function (t, o, r) {
            return e.e(
              {
                a: e.t(t.name),
                b: t.name && t.name.length > 11 ? 1 : "",
                c: t.code,
              },
              t.code
                ? e.e(
                    { d: c.showZDF && t.market },
                    c.showZDF && t.market
                      ? {
                          e: "c2f4dfe3-0-" + r,
                          f: e.p({ market: t.market, scode: t.code }),
                        }
                      : {},
                    { g: e.t(t.code) }
                  )
                : {},
              c.showZDF ? { h: e.t(t.rate || "--"), i: e.n(t.rateClass) } : {},
              {
                j: e.t(t.ratio ? t.ratio + "%" : "--"),
                k: t.code,
                l: e.o(
                  function (e) {
                    return c.gotoDetail(t);
                  },
                  2458,
                  t.code
                ),
              }
            );
          }),
          i: c.showZDF,
          j: e.n(c.isLite ? "lite" : "pro"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-c2f4dfe3"],
]);
wx.createComponent(c);
