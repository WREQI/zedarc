require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-base/visibilityObserver/index.js"),
  n = require("../../stock-hq-data/index.js"),
  i = require("../utils/common.js"),
  o = require("../utils/route.js"),
  r = null,
  a = {
    components: {
      TeachPop: function () {
        return "./TeachPop.js";
      },
      DividendCompareCard: function () {
        return "../dividendPages/components/DividendCompareCard.js";
      },
      WzqInfoModal: function () {
        return "../node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      theme: { type: String, default: "light" },
      dividendData: {
        type: Object,
        default: function () {
          return { etf_list: [] };
        },
      },
    },
    data: function () {
      return {
        isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
        showDividendRatePop: !1,
        dividendRateInfoText:
          "股息率为ETF跟踪指数的股息率：指数股息率 = 指数成分股近一年总分红金额 ÷ 指数当前总市值",
        showTipModal: !1,
        tipModalConfig: {},
        metaData: { subtitle: "坐享分红收益", path: "" },
      };
    },
    computed: {
      titleImg: function () {
        return "dark" === this.theme
          ? "https://st.gtimg.com/design/061eebb853e4a8dd4dcdbd4c07b08569.png"
          : "https://st.gtimg.com/design/65f8e764d0aaaea2561c9b3f46f843e5.png";
      },
      etfList: function () {
        var e;
        return (null == (e = this.dividendData) ? void 0 : e.etf_list) || [];
      },
      currentEtf: function () {
        return this.etfList[0] || null;
      },
      etfLabels: function () {
        var e;
        return (null == (e = this.currentEtf) ? void 0 : e.labels) || [];
      },
      firstLabel: function () {
        var e = this.etfLabels[0];
        return e && e.name ? e.name : null;
      },
      stockCode: function () {
        var e,
          t = (null == (e = this.currentEtf) ? void 0 : e.symbol) || "";
        return (n.utils.splitSymbol(t) || {}).scode || t;
      },
      marketIcon: function () {
        var e,
          t = (null == (e = this.currentEtf) ? void 0 : e.symbol) || "";
        return i.transMarketIcon("cnjj", "", t);
      },
      isDividendZero: function () {
        var e,
          t = null == (e = this.currentEtf) ? void 0 : e.dividend_yield;
        if (null == t || "" === t) return !0;
        var n = parseFloat(String(t).replace(/[+%,\s]/g, ""));
        return !Number.isFinite(n) || 0 === n;
      },
    },
    mounted: function () {
      (r = new t.VisibilityObserver(
        ".dividend-block-wrapper",
        { once: !0, callback: function (e) {}, intersection: { threshold: 0 } },
        this
      )),
        e.StockBridge.mtaReport({
          busi: "hq",
          eventName: "enjoy_benefit_module_brow",
          exposure: { selector: ".dividend-block-wrapper", context: this },
          params: { column_id: "etf_enjoy_dividend" },
        }),
        this.currentEtf && this.registerEtfExposure();
    },
    watch: {
      currentEtf: {
        handler: function (e) {
          e && this.registerEtfExposure();
        },
      },
    },
    beforeDestroy: function () {
      var e, t;
      null ==
        (t =
          null == (e = null == r ? void 0 : r.observer)
            ? void 0
            : e.disconnect) || t.call(e),
        (r = null);
    },
    methods: {
      registerEtfExposure: function () {
        var t = this;
        this._etfExposureRegistered ||
          ((this._etfExposureRegistered = !0),
          this.$nextTick(function () {
            var n;
            e.StockBridge.mtaReport({
              busi: "hq",
              eventName: "enjoy_bonus_module_etf_brow",
              exposure: {
                selector: ".dividend-block-wrapper .stock-item",
                context: t,
              },
              params: {
                column_id: "etf_enjoy_dividend",
                item_type: "banner_desc",
                banner_desc: encodeURIComponent("ETF享红利稳健投资"),
                stockid: (null == (n = t.currentEtf) ? void 0 : n.symbol) || "",
                attribute_type: "stockid",
              },
            });
          }));
      },
      formatPercentValue: i.formatPercentValue,
      formatChangeRateValue: i.formatChangeRateValue,
      getZdpClass: i.setZdpClass,
      formatPrice: function (e) {
        var t = Number.parseFloat(e);
        return Number.isFinite(t) ? (100 * t).toFixed(2) : "--";
      },
      handleDetailClick: function () {
        e.StockBridge.mtaReport({
          busi: "hq",
          eventName: "enjoy_bonus_module_more_click",
          params: {
            column_id: "etf_enjoy_dividend",
            item_type: "banner_desc",
            banner_desc: encodeURIComponent("ETF享红利稳健投资"),
          },
        }),
          e.StockRouter.routeTo({
            path: "/dividend-etf-page",
            name: "etfzonebonus",
            query: { from: "dividend-block" },
          });
      },
      handleStockClick: function () {
        var t,
          i = this;
        if (this.currentEtf) {
          var r = this.currentEtf.symbol || this.stockCode;
          if (
            (e.StockBridge.mtaReport({
              busi: "hq",
              eventName: "enjoy_dividend_module_etf_click",
              params: {
                column_id: "etf_enjoy_dividend",
                item_type: "banner_desc",
                banner_desc: encodeURIComponent("ETF享红利稳健投资"),
                stockid:
                  (null == (t = this.currentEtf) ? void 0 : t.symbol) || "",
                attribute_type: "stockid",
              },
            }),
            r)
          ) {
            var a = n.utils.splitSymbol(r) || {},
              d = a.market,
              s = a.scode;
            setTimeout(function () {
              o.navigateToQuote(i.hqBridge, d, s);
            }, 300);
          }
        }
      },
      openInfo: function () {
        e.StockBridge.mtaReport({
          busi: "hq",
          eventName: "dividend_module_etf_yield_i_click",
        }),
          (this.tipModalConfig = {
            title: "股息率",
            content: [{ type: "text", text: this.dividendRateInfoText }],
            cancelBtn: "我知道了",
          }),
          (this.showTipModal = !0);
      },
    },
  };
Array ||
  (
    e.resolveComponent("dividend-compare-card") +
    e.resolveComponent("teach-pop") +
    e.resolveComponent("WzqInfoModal")
  )();
var d = e._export_sfc(a, [
  [
    "render",
    function (t, n, i, o, r, a) {
      return e.e(
        {
          a: a.titleImg,
          b: e.t(r.metaData.subtitle),
          c: e.o(function () {
            return (
              a.handleDetailClick && a.handleDetailClick.apply(a, arguments)
            );
          }, 3545),
          d: a.currentEtf,
        },
        a.currentEtf
          ? e.e(
              {
                e: e.t(a.currentEtf.name),
                f: a.marketIcon,
                g: e.t(a.stockCode),
                h: a.firstLabel,
              },
              a.firstLabel ? { i: e.t(a.firstLabel) } : {},
              { j: !a.isDividendZero },
              a.isDividendZero
                ? {
                    o: e.t(
                      a.formatChangeRateValue(a.currentEtf.week_52_change_pct)
                    ),
                    p: e.n(a.getZdpClass(a.currentEtf.week_52_change_pct)),
                    q: e.t(a.formatPrice(a.currentEtf.price)),
                  }
                : {
                    k: e.t(a.formatPercentValue(a.currentEtf.dividend_yield)),
                    l: e.o(function () {
                      return a.openInfo && a.openInfo.apply(a, arguments);
                    }, 3546),
                    m: e.t(
                      a.formatChangeRateValue(a.currentEtf.week_52_change_pct)
                    ),
                    n: e.n(a.getZdpClass(a.currentEtf.week_52_change_pct)),
                  },
              {
                r: e.o(function () {
                  return (
                    a.handleStockClick && a.handleStockClick.apply(a, arguments)
                  );
                }, 3547),
              }
            )
          : {},
        {
          s: e.o(function (e) {
            return (r.showDividendRatePop = !1);
          }, 3548),
          t: e.p({
            "show-pop": r.showDividendRatePop,
            title: "股息率",
            "info-text": r.dividendRateInfoText,
          }),
          v: r.showTipModal,
        },
        r.showTipModal
          ? e.e(
              { w: r.showTipModal },
              r.showTipModal
                ? {
                    x: e.o(function (e) {
                      return (r.showTipModal = !1);
                    }, 3549),
                    y: e.p({ skin: i.theme, config: r.tipModalConfig }),
                  }
                : {}
            )
          : {},
        { z: e.n(r.isLite ? "lite" : "pro") }
      );
    },
  ],
  ["__scopeId", "data-v-29b53112"],
]);
wx.createComponent(d);
