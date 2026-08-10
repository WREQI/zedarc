require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-hq-data/index.js"),
  n = e.defineComponent({
    name: "EtfBuyIndexEntry",
    components: {
      MarketIcon: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/MarketIcon.js";
      },
    },
    props: {
      buyIndexData: { type: Object, default: null },
      theme: { type: String, default: "light" },
    },
    setup: function (n) {
      var r = ["mpwzq", "wzqlight"].includes("mpweapp"),
        o = e.computed(function () {
          return (function (e) {
            var t = (
              Array.isArray(null == e ? void 0 : e.etf_list) ? e.etf_list : []
            )[0];
            if (!t)
              return {
                recommend: null,
                productHighlight: "",
                historyReturn: "",
              };
            var n = String(t.symbol || "").toLowerCase(),
              r = n.match(/^([a-z]+)(\d+)$/),
              o = r ? r[2] : n,
              i = String(t.price_ratio || "").trim(),
              c = Number(i),
              d = "equal";
            c > 0 ? (d = "rise") : c < 0 && (d = "drop");
            var u = i ? "".concat(c > 0 ? "+" : "").concat(i, "%") : "--",
              a = Number(t.price),
              m =
                Number.isFinite(a) && a > 0
                  ? "".concat((100 * a).toFixed(2), "元")
                  : "--";
            return {
              recommend: {
                symbol: String(t.symbol || ""),
                etfCode: o,
                name: String(t.name || ""),
                ratio: u,
                ratioClass: d,
                minBuyAmount: m,
                highlight: "",
              },
              productHighlight: String(t.highlight || ""),
              historyReturn: String(t.index_return_desc || ""),
            };
          })(n.buyIndexData);
        }),
        i = e.computed(function () {
          return o.value.recommend;
        }),
        c = e.computed(function () {
          return (
            o.value.productHighlight || "一篮子优质股票打包投，分散风险更省心"
          );
        }),
        d = e.computed(function () {
          return (
            o.value.historyReturn || "长期持有分享指数成长，用时间平滑波动"
          );
        }),
        u = e.computed(function () {
          return "dark" === n.theme
            ? "https://st.gtimg.com/design/8980dd9e344e9698ac0cdb0924646fad.png"
            : "https://st.gtimg.com/design/a5a1d9d699fad78b97063d65021190e1.png";
        }),
        a = e.computed(function () {
          var e;
          return (null == (e = i.value) ? void 0 : e.ratioClass) || "equal";
        }),
        m = "etf_buy_index",
        l = "banner_desc",
        p = "买指数_布局核心指数",
        s = e.computed(function () {
          return "产品亮点_".concat(c.value);
        }),
        _ = e.computed(function () {
          return "历史收益_".concat(d.value);
        });
      return (
        e.onMounted(function () {
          e.StockBridge.report("hq.etf-page.etf_area_buy_index_entry_brow", {
            column_id: m,
            item_type: l,
            banner_desc: encodeURIComponent(p),
          }),
            e.StockBridge.report(
              "hq.etf-page.buy_index_entry_product_highlight_brow",
              {
                column_id: m,
                item_type: l,
                banner_desc: encodeURIComponent(s.value),
              }
            ),
            e.StockBridge.report(
              "hq.etf-page.index_entry_historical_return_brow",
              {
                column_id: m,
                item_type: l,
                banner_desc: encodeURIComponent(_.value),
              }
            );
          var n = i.value,
            r = ((n && n.symbol && t.utils.splitSymbol(n.symbol)) || {}).scode;
          e.StockBridge.report("hq.etf-page.buy_index_recommendation_brow", {
            column_id: m,
            item_type: l,
            banner_desc: encodeURIComponent(p),
            stockid: r || (null == n ? void 0 : n.etfCode) || "",
            attribute_type: "stockid",
          });
        }),
        {
          titleIcon: u,
          isLite: r,
          recommend: i,
          ratioClass: a,
          productHighlightText: c,
          historyReturnText: d,
          handleJump: function () {
            e.StockBridge.report("hq.etf-page.etf_area_buy_index_entry_click", {
              column_id: m,
              item_type: l,
              banner_desc: encodeURIComponent(p),
            }),
              e.StockRouter.routeTo({
                name: "buyindexlanding",
                query: { from: "etf_home" },
              });
          },
          handleFundClick: function () {
            var n = i.value;
            if (n && n.symbol) {
              var r = t.utils.splitSymbol(n.symbol) || {},
                o = r.market,
                c = r.scode;
              o &&
                c &&
                (e.StockBridge.report(
                  "hq.etf-page.etf_area_buy_index_recommend_click",
                  {
                    column_id: m,
                    item_type: l,
                    banner_desc: encodeURIComponent(p),
                    stockid: c,
                    attribute_type: "stockid",
                  }
                ),
                e.StockRouter.routeTo({
                  name: "stockdetail",
                  query: { market: o, scode: c },
                }));
            }
          },
          handleProductHighlightClick: function () {
            var t = encodeURIComponent(s.value);
            e.StockBridge.report(
              "hq.etf-page.buy_index_entry_product_highlight_click",
              { column_id: m, item_type: l, banner_desc: t }
            ),
              e.StockRouter.routeTo({
                name: "buyindexlanding",
                query: { from: "etf_home", banner_desc: t },
              });
          },
          handleHistoryReturnClick: function () {
            var t = encodeURIComponent(_.value);
            e.StockBridge.report(
              "hq.etf-page.index_entry_historical_return_click",
              { column_id: m, item_type: l, banner_desc: t }
            ),
              e.StockRouter.routeTo({
                name: "buyindexlanding",
                query: { from: "etf_home", banner_desc: t },
              });
          },
        }
      );
    },
  });
Array || e.resolveComponent("MarketIcon")();
var r = e._export_sfc(n, [
  [
    "render",
    function (t, n, r, o, i, c) {
      return e.e(
        {
          a: t.titleIcon,
          b: e.t(t.productHighlightText),
          c: e.o(function () {
            return (
              t.handleProductHighlightClick &&
              t.handleProductHighlightClick.apply(t, arguments)
            );
          }, 3554),
          d: e.t(t.historyReturnText),
          e: e.o(function () {
            return (
              t.handleHistoryReturnClick &&
              t.handleHistoryReturnClick.apply(t, arguments)
            );
          }, 3555),
          f: t.recommend,
        },
        t.recommend
          ? e.e(
              {
                g: e.t(t.recommend.name),
                h: e.p({ market: "cnjj", scode: t.recommend.etfCode }),
                i: e.t(t.recommend.etfCode),
                j: t.recommend.highlight,
              },
              t.recommend.highlight ? { k: e.t(t.recommend.highlight) } : {},
              {
                l: e.t(t.recommend.ratio),
                m: e.n(t.ratioClass),
                n: e.t(t.recommend.minBuyAmount),
                o: e.o(function () {
                  return (
                    t.handleFundClick && t.handleFundClick.apply(t, arguments)
                  );
                }, 3556),
              }
            )
          : {},
        {
          p: e.n(
            t.isLite ? "etf-buy-index-entry--lite" : "etf-buy-index-entry--pro"
          ),
          q: e.o(function () {
            return t.handleJump && t.handleJump.apply(t, arguments);
          }, 3557),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2ebfee07"],
]);
wx.createComponent(r);
