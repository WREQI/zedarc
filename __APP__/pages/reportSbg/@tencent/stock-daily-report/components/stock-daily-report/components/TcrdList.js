var e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  o = require("../assets/filters/stock.js"),
  c = require("../../../../../../../common/vendor.js"),
  n = {
    props: {
      content: {
        type: Array,
        default: function () {
          return [];
        },
      },
      clickAble: { type: Boolean, default: !0 },
    },
    data: function () {
      return {};
    },
    components: {
      BaseTitle: function () {
        return "./BaseTitle.js";
      },
    },
    methods: {
      flucColor: o.flucColor,
      priceChangePercent: o.priceChangePercent,
      stockNameFix: o.stockNameFix,
      stockList: function (e) {
        return []
          .concat(
            t(
              e.top_etf_funds && e.top_etf_funds.stock_name
                ? [e.top_etf_funds]
                : []
            ),
            t(e.top2_stocks || [])
          )
          .slice(0, 2);
      },
      handleItemClick: function (e) {
        if (this.clickAble) {
          this.$emit("statReport", "tcrd_concep_click", {
            conceptCode: e.concept_code,
          });
          var t =
            "https://wzq.tenpay.com/mp/v2/index.html#/strategy/concept/detail?concept_code=".concat(
              e.concept_code
            );
          c.StockBridge.routeTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(t)
            ),
          });
        }
      },
      handleStockClick: function (t) {
        if (t.stock_code) {
          var o,
            c = t.stock_code.split("."),
            n = e(c, 2),
            r = n[0],
            i = n[1],
            s = ["", "SH", "SZ", "HK"].indexOf(i);
          void 0 !== s && (o = { 1: 1, 2: 0, 3: 2 }[s]),
            this.$emit("viewStockDetail", "tcrd", o, r);
        }
      },
    },
  };
Array || c.resolveComponent("BaseTitle")();
var r = c._export_sfc(n, [
  [
    "render",
    function (e, t, o, n, r, i) {
      return c.e(
        { a: c.p({ title: "题材热点" }), b: o.content.length },
        o.content.length
          ? {
              c: c.f(o.content, function (e, t, o) {
                return c.e(
                  {
                    a: c.t(t + 1),
                    b: c.n("order-".concat(t + 1)),
                    c: c.t(e.concept_name),
                    d: c.t(i.priceChangePercent(e.concept_zdf)),
                    e: c.n(i.flucColor(e.concept_zdf, "bg-")),
                    f: c.t(
                      e.hot_spot &&
                        e.hot_spot.hot_reason &&
                        e.hot_spot.hot_reason[0]
                    ),
                    g: i.stockList(e),
                  },
                  i.stockList(e)
                    ? {
                        h: c.f(i.stockList(e), function (e, t, o) {
                          return {
                            a: c.t(
                              i.stockNameFix(
                                e.stock_name,
                                e.stock_name.includes("ETF") ? 11 : 8,
                                !0
                              )
                            ),
                            b: c.t(i.priceChangePercent(e.stock_zdf)),
                            c: c.n(i.flucColor(e.stock_zdf)),
                            d: t,
                            e: c.o(
                              function (t) {
                                return i.handleStockClick(e);
                              },
                              4477,
                              t
                            ),
                          };
                        }),
                      }
                    : {},
                  {
                    i: t,
                    j: c.o(
                      function (t) {
                        return i.handleItemClick(e);
                      },
                      4478,
                      t
                    ),
                  }
                );
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6424be95"],
]);
wx.createComponent(r);
