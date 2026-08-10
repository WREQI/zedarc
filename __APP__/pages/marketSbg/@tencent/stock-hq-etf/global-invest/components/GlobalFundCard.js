var a = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../common/vendor.js"),
  r = require("../../../stock-markets-base/utils/market.js"),
  e = require("../utils/report.js"),
  d = n.defineComponent({
    name: "GlobalFundCard",
    props: {
      fund: { type: Object, required: !0 },
      variant: { type: String, default: "market" },
      source: { type: String, default: "global_market" },
      channelId: { type: String, default: "" },
    },
    emits: ["buy-etf"],
    setup: function (d, t) {
      var u = t.emit,
        o = n.computed(function () {
          return {
            name: d.fund.name || "--",
            returnValue: d.fund.returnValue || "--",
            returnLabel: d.fund.returnLabel || "涨跌幅",
            returnClass: d.fund.returnClass || "",
            priceText: d.fund.priceText || "--",
            priceLabel: d.fund.priceLabel || "买一笔仅需",
            highlight: d.fund.highlight || "",
          };
        }),
        i = n.computed(function () {
          var n = d.fund.holdings || [],
            r = function (n) {
              return n
                ? "string" == typeof n
                  ? n
                  : ("object" == a(n) && n.name) || ""
                : "";
            };
          return [r(n[0]), r(n[1]), r(n[2])].filter(Boolean);
        }),
        c = n.computed(function () {
          var n;
          return (
            (function n(r) {
              if (!r) return "";
              if ("string" == typeof r || "number" == typeof r)
                return String(r);
              if (Array.isArray(r))
                return n(
                  r.find(function (n) {
                    return n && "object" == a(n) && n.name;
                  }) || r.find(Boolean)
                );
              if ("object" == a(r)) {
                var e = r;
                return String(e.name || e.label || "");
              }
              return "";
            })(d.fund.label) ||
            (null == (n = d.fund.tags) ? void 0 : n[0]) ||
            ""
          );
        }),
        l = n.computed(function () {
          return (
            d.fund.fund_code ||
            d.fund.code ||
            d.fund.fund_id ||
            d.fund.id ||
            "default"
          );
        }),
        _ = n.computed(function () {
          return { fchannel_id_fm_i: d.channelId || "" };
        });
      return {
        displayFund: o,
        holdingLabels: i,
        primaryTag: c,
        cardKey: l,
        getHoldingTextClass: function (a) {
          return 4 === String(a || "").length
            ? "market-fund-card__holding-text--four-chars"
            : "";
        },
        handleBuy: function () {
          "global_market" === (d.fund.source || d.source)
            ? e.reportGlobalInvest(
                e.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_LIST_BUY_BTN_CLICK,
                _.value
              )
            : e.reportGlobalInvest(
                e.GLOBAL_INVEST_REPORT.LIST_BUY_BTN_CLICK,
                _.value
              );
          var a = d.fund.fund_code || d.fund.code || "",
            n = d.fund.fund_id || d.fund.id || a;
          a &&
            n &&
            u("buy-etf", {
              fund_code: a,
              fund_id: n,
              source: d.fund.source || d.source,
            });
        },
        handleCardClick: function () {
          var a = String(
            d.fund.symbol || d.fund.code || d.fund.fund_code || ""
          ).trim();
          if (a) {
            var t = d.fund.source || d.source;
            "home_market_summary" === t
              ? e.reportGlobalInvest(
                  e.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_LIST_CLICK,
                  { stockid: a }
                )
              : "global_market" === t &&
                e.reportGlobalInvest(
                  e.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_LIST_CLICK,
                  { stockid: a }
                );
            var u = r.splitSymbol(a),
              o = u.market,
              i = u.scode;
            n.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: o, scode: i },
            });
          }
        },
        handleHoldingClick: function (a) {
          var t = (d.fund.holdings || [])[a];
          if (t) {
            var u = String(t.stock_code || "").trim();
            if (u) {
              "global_market" === (d.fund.source || d.source)
                ? e.reportGlobalInvest(
                    e.GLOBAL_INVEST_REPORT
                      .GLOBAL_MARKET_HOLDING_STOCKS_LIST_CLICK,
                    { stockid: u }
                  )
                : e.reportGlobalInvest(
                    e.GLOBAL_INVEST_REPORT.HOLDING_STOCKS_LIST_CLICK,
                    { stockid: u }
                  );
              var o = r.splitSymbol(u),
                i = o.market,
                c = o.scode;
              n.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: i, scode: c },
              });
            }
          }
        },
      };
    },
  }),
  t = n._export_sfc(d, [
    [
      "render",
      function (a, r, e, d, t, u) {
        return n.e(
          {
            a: n.n(
              "home" === a.variant
                ? "market-fund-card__surface--nasdaq"
                : "fund-card__bg--nasdaq-100"
            ),
            b: n.t(a.displayFund.returnValue),
            c: n.n(
              "home" === a.variant
                ? "market-fund-card__return-value--nasdaq"
                : "fund-card__return--nasdaq-100"
            ),
            d: n.n(a.displayFund.returnClass),
            e: n.t(a.displayFund.returnLabel),
            f: n.n(
              "home" === a.variant
                ? "market-fund-card__return-label--nasdaq"
                : "fund-card__metric-label--return-nasdaq-100"
            ),
            g: n.n(
              "home" === a.variant
                ? "market-fund-card__return--nasdaq"
                : "fund-card__metric--return-nasdaq-100"
            ),
            h: n.t(a.displayFund.priceText),
            i: n.n(
              "home" === a.variant
                ? "market-fund-card__price-value--nasdaq"
                : "fund-card__price--nasdaq-100"
            ),
            j: n.t(a.displayFund.priceLabel),
            k: n.n(
              "home" === a.variant
                ? "market-fund-card__price-label--nasdaq"
                : "fund-card__metric-label--price-nasdaq-100"
            ),
            l: n.n(
              "home" === a.variant
                ? "market-fund-card__price--nasdaq"
                : "fund-card__metric--price-nasdaq-100"
            ),
            m: n.n(
              "home" === a.variant
                ? "market-fund-card__metrics--nasdaq"
                : "fund-card__metrics--nasdaq-100"
            ),
            n: n.o(function () {
              return a.handleCardClick && a.handleCardClick.apply(a, arguments);
            }, 4414),
            o: n.f(a.holdingLabels, function (r, e, d) {
              return {
                a: n.t(r),
                b: n.n(
                  "market-fund-card__holding-text--nasdaq-".concat(
                    ["first", "second", "third"][e] || "first"
                  )
                ),
                c: n.n(a.getHoldingTextClass(r)),
                d: n.o(
                  function (n) {
                    return a.handleHoldingClick(e);
                  },
                  4415,
                  e
                ),
                e: e,
                f: n.n(
                  "market-fund-card__holding--nasdaq-".concat(
                    ["first", "second", "third"][e] || "first"
                  )
                ),
              };
            }),
            p: n.n(
              "home" === a.variant
                ? "market-fund-card__content--nasdaq"
                : "fund-card__metrics-row--nasdaq-100"
            ),
            q: n.t(a.displayFund.name),
            r: n.n(
              "home" === a.variant
                ? "market-fund-card__name--nasdaq"
                : "fund-card__title--nasdaq-100"
            ),
            s: a.primaryTag,
          },
          a.primaryTag
            ? {
                t: n.t(a.primaryTag),
                v: n.n(
                  "home" === a.variant
                    ? "market-fund-card__tag-text--nasdaq"
                    : "fund-card__trade-tag-text--nasdaq-100"
                ),
                w: n.n(
                  "home" === a.variant
                    ? "market-fund-card__tag--nasdaq"
                    : "fund-card__trade-tag--nasdaq-100"
                ),
              }
            : {},
          {
            x: n.n(
              "home" === a.variant
                ? "market-fund-card__name-row--nasdaq"
                : "fund-card__title-row--nasdaq-100"
            ),
            y: n.o(function () {
              return a.handleCardClick && a.handleCardClick.apply(a, arguments);
            }, 4416),
            z: n.n(
              "home" === a.variant
                ? "market-fund-card__buy-text--nasdaq"
                : "fund-card__buy-text--nasdaq-100"
            ),
            A: n.n(
              "home" === a.variant
                ? "market-fund-card__buy-button--nasdaq"
                : "fund-card__buy-button--nasdaq-100"
            ),
            B: "global-fund-card-buy-".concat(a.cardKey),
            C: n.o(function () {
              return a.handleBuy && a.handleBuy.apply(a, arguments);
            }, 4417),
            D: n.n(
              "home" === a.variant
                ? "market-fund-card__top-row--nasdaq"
                : "fund-card__header--nasdaq-100"
            ),
            E: n.t(a.displayFund.highlight),
            F: n.n(
              "home" === a.variant
                ? "market-fund-card__description--nasdaq"
                : "fund-card__description--nasdaq-100"
            ),
            G: n.o(function () {
              return a.handleCardClick && a.handleCardClick.apply(a, arguments);
            }, 4418),
            H: n.n(
              "home" === a.variant
                ? "market-fund-card--nasdaq"
                : "fund-card--nasdaq-100"
            ),
            I: "global-fund-card-".concat(a.cardKey),
          }
        );
      },
    ],
    ["__scopeId", "data-v-cb53e442"],
  ]);
wx.createComponent(t);
