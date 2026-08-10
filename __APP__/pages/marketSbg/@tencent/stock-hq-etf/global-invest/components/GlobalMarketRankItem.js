var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  u = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  i = require("../../../../../../common/vendor.js"),
  c = require("../../../stock-markets-base/utils/market.js"),
  s = require("../../utils/common.js"),
  d = require("../utils/report.js"),
  p = require("../../../stock-base/visibilityObserver/index.js"),
  _ = i.defineComponent({
    name: "GlobalMarketRankItem",
    props: {
      fund: { type: Object, required: !0 },
      showBuyButton: { type: Boolean, default: !1 },
      channelId: { type: String, default: "" },
      bannerDesc: { type: String, default: "" },
      pageShown: { type: Boolean, default: !0 },
    },
    emits: ["buy-etf"],
    setup: function (t, _) {
      var v = _.emit,
        b = ["mpwzq", "wzqlight"].includes("mpweapp"),
        m = i.computed(function () {
          return t.fund;
        }),
        f = i.computed(function () {
          var e,
            t =
              m.value.symbol ||
              m.value.code ||
              m.value.fund_code ||
              m.value.id ||
              "";
          return (
            (null == (e = c.splitSymbol(t)) ? void 0 : e.scode) || t || "--"
          );
        }),
        y = i.computed(function () {
          return {
            name: m.value.name || "--",
            code: f.value,
            returnValue: m.value.returnValue || "--",
            returnLabel: m.value.returnLabel || "涨跌幅",
            returnClass: m.value.returnClass || "equal",
            priceText: m.value.priceText || "--",
            priceLabel: m.value.priceLabel || "买一笔仅需",
            tag: m.value.tag || "",
            highlight: m.value.highlight || "",
          };
        }),
        g = i.computed(function () {
          return y.value.tag ? [y.value.tag] : [];
        }),
        h = i.computed(function () {
          return s.transMarketIcon("cnjj", "", f.value);
        }),
        L = i.computed(function () {
          return m.value.fund_code || m.value.code || m.value.id || "default";
        }),
        k = i.computed(function () {
          return { fchannel_id_fm_i: t.channelId || "" };
        }),
        B = i.getCurrentInstance(),
        I = (null == B ? void 0 : B.proxy) || B,
        T = null,
        O = !1,
        C = i.computed(function () {
          return "global-market-rank-item--vis-".concat(L.value);
        });
      function E() {
        "etf_global_entry" === m.value.source &&
          t.pageShown &&
          i.nextTick$1(function () {
            if (!T) {
              var e = String(
                m.value.symbol || m.value.fund_code || m.value.code || ""
              )
                .trim()
                .toLowerCase();
              e &&
                (T = new p.VisibilityObserver(
                  ".".concat(C.value),
                  {
                    once: !0,
                    callback: function (n) {
                      n &&
                        (O ||
                          ((O = !0),
                          d.reportGlobalInvest(
                            d.GLOBAL_INVEST_REPORT
                              .ETF_GLOBAL_INVESTMENT_ENTRY_BROW,
                            {
                              column_id: "etf_investing_globally",
                              item_type: "banner_desc",
                              banner_desc: encodeURIComponent(
                                t.bannerDesc || ""
                              ),
                              attribute_type: "stockid",
                              stockid: e,
                              fposition_id: "0",
                            }
                          )));
                    },
                    intersection: { threshold: 0 },
                  },
                  { context: I }
                ));
            }
          });
      }
      return (
        i.onMounted(E),
        i.watch(
          function () {
            return t.pageShown;
          },
          function (e) {
            e && E();
          }
        ),
        i.onUnmounted(function () {
          var e, t;
          null ==
            (t =
              null == (e = null == T ? void 0 : T.observer)
                ? void 0
                : e.disconnect) || t.call(e),
            (T = null);
        }),
        {
          displayFund: y,
          tagList: g,
          marketIcon: h,
          cardKey: L,
          rootSelectorClass: C,
          handleBuy: function () {
            var t;
            "global_market" === m.value.source
              ? d.reportGlobalInvest(
                  d.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_LIST_BUY_BTN_CLICK,
                  k.value
                )
              : d.reportGlobalInvest(
                  d.GLOBAL_INVEST_REPORT.LIST_BUY_BTN_CLICK,
                  ((t = (function (t, n) {
                    for (var r in n || (n = {})) o.call(n, r) && u(t, r, n[r]);
                    if (a) {
                      var i,
                        c = e(a(n));
                      try {
                        for (c.s(); !(i = c.n()).done; ) {
                          r = i.value;
                          l.call(n, r) && u(t, r, n[r]);
                        }
                      } catch (e) {
                        c.e(e);
                      } finally {
                        c.f();
                      }
                    }
                    return t;
                  })({}, k.value || {})),
                  n(t, r({ from_column_id: "etf_investing_globally" })))
                );
            var i = m.value.fund_code || m.value.code || "",
              c = m.value.id || i;
            i &&
              c &&
              v("buy-etf", {
                fund_code: i,
                fund_id: c,
                source: m.value.source,
              });
          },
          handleCardClick: function () {
            var e = String(
              m.value.symbol || m.value.fund_code || m.value.code || ""
            ).trim();
            if (
              ("home_market_summary" === m.value.source
                ? d.reportGlobalInvest(
                    d.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_LIST_CLICK,
                    { stockid: e }
                  )
                : "global_market" === m.value.source
                ? d.reportGlobalInvest(
                    d.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_LIST_CLICK,
                    { stockid: e }
                  )
                : "etf_global_entry" === m.value.source &&
                  e &&
                  d.reportGlobalInvest(
                    d.GLOBAL_INVEST_REPORT.ETF_GLOBAL_ENTRY_TARGET_CLICK,
                    {
                      column_id: "etf_investing_globally",
                      item_type: "banner_desc",
                      banner_desc: encodeURIComponent(t.bannerDesc || ""),
                      attribute_type: "stockid",
                      stockid: e,
                      fposition_id: "0",
                    }
                  ),
              e)
            ) {
              var n = c.splitSymbol(e),
                r = n.market,
                a = n.scode;
              i.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: r, scode: a },
              });
            }
          },
          isLite: b,
        }
      );
    },
  }),
  v = i._export_sfc(_, [
    [
      "render",
      function (e, t, n, r, a, o) {
        return i.e(
          {
            a: i.t(e.displayFund.name),
            b: i.n(e.showBuyButton ? "" : "rank-detail-name-long"),
            c: e.marketIcon,
            d: i.t(e.displayFund.code),
            e: e.tagList.length > 0,
          },
          e.tagList.length > 0
            ? {
                f: i.f(e.tagList, function (e, t, n) {
                  return { a: i.t(e), b: e };
                }),
              }
            : {},
          {
            g: i.n(e.showBuyButton ? "" : "rank-left-long"),
            h: i.t(e.displayFund.returnValue),
            i: i.n(e.displayFund.returnClass),
            j: i.t(e.displayFund.returnLabel),
            k: i.t(e.displayFund.priceText),
            l: i.t(e.displayFund.priceLabel),
            m: e.showBuyButton,
          },
          e.showBuyButton
            ? {
                n: "global-market-rank-item-buy-".concat(e.cardKey),
                o: i.o(function () {
                  return e.handleBuy && e.handleBuy.apply(e, arguments);
                }, 4360),
              }
            : {},
          { p: e.displayFund.highlight },
          e.displayFund.highlight ? { q: i.t(e.displayFund.highlight) } : {},
          {
            r: i.n(e.rootSelectorClass),
            s: i.n({
              "global-market-rank-item--with-buy": e.showBuyButton,
              "global-market-rank-item--classic-home":
                !e.showBuyButton && !e.isLite,
            }),
            t: i.o(function () {
              return e.handleCardClick && e.handleCardClick.apply(e, arguments);
            }, 4361),
          }
        );
      },
    ],
    ["__scopeId", "data-v-bf8b365c"],
  ]);
wx.createComponent(v);
