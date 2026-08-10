var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-markets-base/utils/market.js"),
  r = require("../../utils/common.js"),
  n = e.defineComponent({
    name: "T0PremiumRankItem",
    props: { fund: { type: Object, required: !0 } },
    setup: function (n) {
      var a = e.computed(function () {
          return n.fund;
        }),
        u = e.computed(function () {
          var e,
            r = a.value.symbol || a.value.code || "";
          return (
            (null == (e = t.splitSymbol(r)) ? void 0 : e.scode) || r || "--"
          );
        }),
        o = e.computed(function () {
          return {
            name: a.value.name || "--",
            code: u.value,
            returnValue: a.value.returnValue || "--",
            returnClass: a.value.returnClass || "equal",
            tag: a.value.tag || "",
          };
        }),
        l = e.computed(function () {
          var e = parseFloat(String(a.value.percentile));
          return Number.isNaN(e) ? "" : String(Math.round(100 - e));
        }),
        c = e.computed(function () {
          return o.value.tag ? [o.value.tag] : [];
        }),
        i = e.computed(function () {
          return r.transMarketIcon("cnjj", "", u.value);
        });
      return {
        displayFund: o,
        tagList: c,
        marketIcon: i,
        reversePercentile: l,
        handleCardClick: function () {
          var r = String(a.value.symbol || a.value.code || "").trim();
          if (r) {
            try {
              e.StockBridge.mtaReport({
                busi: "hq",
                eventName: "yield_spread_regression_module_click",
              });
            } catch (e) {}
            var n = t.splitSymbol(r),
              u = n.market,
              o = n.scode;
            e.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: u, scode: o },
            });
          }
        },
      };
    },
  }),
  a = e._export_sfc(n, [
    [
      "render",
      function (t, r, n, a, u, o) {
        return e.e(
          {
            a: e.t(t.displayFund.name),
            b: t.marketIcon,
            c: e.t(t.displayFund.code),
            d: t.tagList.length > 0,
          },
          t.tagList.length > 0
            ? {
                e: e.f(t.tagList, function (t, r, n) {
                  return { a: e.t(t), b: t };
                }),
              }
            : {},
          {
            f: e.t(t.displayFund.returnValue),
            g: e.n(t.displayFund.returnClass),
            h: "" !== t.reversePercentile,
          },
          "" !== t.reversePercentile ? { i: e.t(t.reversePercentile) } : {},
          {
            j: e.o(function () {
              return t.handleCardClick && t.handleCardClick.apply(t, arguments);
            }, 5198),
          }
        );
      },
    ],
    ["__scopeId", "data-v-fb278c97"],
  ]);
wx.createComponent(a);
