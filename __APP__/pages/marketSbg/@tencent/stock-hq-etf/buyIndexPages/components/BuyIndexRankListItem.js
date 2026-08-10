var t = require("../../../../../../common/vendor.js"),
  e = require("../../../stock-hq-data/index.js"),
  r = t.defineComponent({
    name: "BuyIndexRankListItem",
    components: {
      MarketIcon: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/MarketIcon.js";
      },
    },
    props: {
      rowData: { type: Object, default: null },
      tabType: { type: String, required: !0 },
      rankPosition: { type: Number, required: !0 },
      hideDivider: { type: Boolean, default: !1 },
    },
    emits: {
      "row-click": function (t) {
        return !!t;
      },
    },
    setup: function (r, n) {
      var a = n.emit,
        o = "/";
      function i(t) {
        return /[亿万元%]/.test(t);
      }
      function u(t) {
        if (null == t || "" === String(t).trim()) return o;
        var e = String(t);
        return i(e)
          ? e
          : (function (t) {
              var e = Number(t);
              return Number.isFinite(e) ? "".concat(e.toFixed(2), "%") : t;
            })(e);
      }
      return {
        ratioText: t.computed(function () {
          var t = r.rowData;
          if (!t) return o;
          var e = t.price_ratio;
          return null == e || "" === String(e).trim() ? o : t.ratioText || o;
        }),
        secondaryMetricText: t.computed(function () {
          var t = r.rowData;
          if (!t) return o;
          switch (r.tabType) {
            case "net_inflow":
              return (function (t) {
                if (null == t || "" === String(t).trim()) return o;
                var e = String(t);
                return i(e)
                  ? e
                  : (function (t) {
                      var e = Number(t);
                      if (!Number.isFinite(e)) return t;
                      var r = Math.abs(e);
                      return r >= 1e8
                        ? "".concat((e / 1e8).toFixed(2), "亿")
                        : r >= 1e4
                        ? "".concat((e / 1e4).toFixed(2), "万")
                        : "".concat(e.toFixed(2));
                    })(e);
              })(t.net_purchase_5d);
            case "national_team":
              return u(t.state_hold_ratio);
            case "scale":
              return (function (t) {
                if (null == t || "" === String(t).trim()) return o;
                var e = String(t);
                return i(e)
                  ? e
                  : (function (t) {
                      var e = Number(t);
                      return Number.isFinite(e)
                        ? Math.abs(e) >= 1e4
                          ? "".concat((e / 1e4).toFixed(2), "亿")
                          : "".concat(e.toFixed(2), "万")
                        : t;
                    })(e);
              })(t.market_value);
            case "valuation":
              return u(t.pe_ttm_pct);
            default:
              return (function (t) {
                if (null == t || "" === String(t).trim()) return o;
                var e = String(t),
                  r = Number(e);
                return Number.isFinite(r)
                  ? "".concat((100 * r).toFixed(2), "元")
                  : i(e)
                  ? e
                  : "".concat(e, "元");
              })(t.price);
          }
        }),
        changeClass: t.computed(function () {
          var t = "etf-buy-index__rank-row-change";
          return r.rowData
            ? [
                t,
                { rise: "rise", drop: "drop", equal: "equal" }[
                  r.rowData.ratioClass
                ] || "equal",
              ]
            : [t, "equal"];
        }),
        codeClass: t.computed(function () {
          var t,
            e = "etf-buy-index__rank-row-code";
          return ((null == (t = r.rowData) ? void 0 : t.etfCode) || "").length >
            6
            ? [e, "".concat(e, "--wide")]
            : [e];
        }),
        handleRowClick: function () {
          var n = r.rowData;
          if (null == n ? void 0 : n.symbol) {
            a("row-click", n);
            var o = e.utils.splitSymbol(n.symbol) || {},
              i = o.market,
              u = o.scode;
            i &&
              u &&
              t.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: i, scode: u },
              });
          }
        },
      };
    },
  });
Array || t.resolveComponent("MarketIcon")();
var n = t._export_sfc(r, [
  [
    "render",
    function (e, r, n, a, o, i) {
      return t.e(
        { a: !e.hideDivider },
        (e.hideDivider, {}),
        {
          b: t.t(e.ratioText),
          c: t.n(e.changeClass),
          d: t.t(e.secondaryMetricText),
          e: t.t(e.rowData ? e.rowData.name : "/"),
          f: t.t((e.rowData && e.rowData.selling_point) || "/"),
          g: e.rowData,
        },
        e.rowData
          ? { h: t.p({ market: "cnjj", scode: e.rowData.etfCode }) }
          : {},
        {
          i: t.t(e.rowData ? e.rowData.etfCode : ""),
          j: t.n(e.codeClass),
          k: t.o(function () {
            return e.handleRowClick && e.handleRowClick.apply(e, arguments);
          }, 3517),
        }
      );
    },
  ],
  ["__scopeId", "data-v-91ff83bc"],
]);
wx.createComponent(n);
