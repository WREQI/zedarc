require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../../stock-base/visibilityObserver/index.js"),
  n = require("../../stock-hq-data/index.js"),
  o = require("../utils/route.js"),
  r = require("../utils/common.js"),
  i = require("../global-invest/utils/report.js"),
  s = null,
  l = null,
  a = {
    name: "EtfGlobalInvest",
    components: {
      GlobalMarketRankItem: function () {
        return "../global-invest/components/GlobalMarketRankItem.js";
      },
    },
    inject: { hqBridge: { from: "hqBridge" } },
    props: {
      theme: { type: String, default: "light" },
      overseaData: { type: Object, default: null },
      pageShown: { type: Boolean, default: !0 },
    },
    data: function () {
      return {
        isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
        hasReportedEntryBrow: !1,
        hasReportedHotspotCopyBrow: !1,
      };
    },
    computed: {
      titleImg: function () {
        return "dark" === this.theme
          ? "https://st.gtimg.com/design/dd7556775ca1e64d3feddccd1e6a0af3.png"
          : "https://st.gtimg.com/design/f3b6de8b98c52444ea211a6f3a6a7b0a.png";
      },
      status: function () {
        return null === this.overseaData
          ? "loading"
          : this.overseaData &&
            ((null != (e = this.overseaData.event_desc) && "" !== e) ||
              this.overseaData.event_etf)
          ? "success"
          : "empty";
        var e;
      },
      visible: function () {
        return "empty" !== this.status;
      },
      eventDesc: function () {
        var e;
        return (null == (e = this.overseaData) ? void 0 : e.event_desc) || "";
      },
      eventEtf: function () {
        var e;
        return (null == (e = this.overseaData) ? void 0 : e.event_etf) || null;
      },
      rankFund: function () {
        var e = this.eventEtf;
        if (!e) return null;
        var t = Number(e.price_ratio),
          n = Number.isNaN(t)
            ? "equal"
            : t > 0
            ? "rise"
            : t < 0
            ? "drop"
            : "equal";
        return {
          symbol: e.etf_symbol || e.symbol || "",
          fund_code: e.etf_symbol || e.symbol || "",
          id: e.etf_symbol || e.symbol || "",
          name: e.etf_name || e.name || "",
          returnValue: this.formatPct(e.price_ratio),
          returnLabel: "涨跌幅",
          returnClass: n,
          priceText: this.formatPrice(e.price),
          priceLabel: "买一笔仅需",
          tag: this.labelTag,
          source: "etf_global_entry",
        };
      },
      labelTag: function () {
        var e,
          t = null == (e = this.overseaData) ? void 0 : e.labels;
        return (Array.isArray(t) && 0 !== t.length && t[0].name) || "";
      },
    },
    watch: {
      visible: function (e) {
        e && this.tryObserveAll();
      },
      rankFund: function () {
        this.tryObserveAll();
      },
      eventDesc: function () {
        this.tryObserveAll();
      },
      pageShown: function (e) {
        e && this.tryObserveAll();
      },
    },
    mounted: function () {
      this.tryObserveAll();
    },
    beforeDestroy: function () {
      var e, t, n, o;
      null ==
        (t =
          null == (e = null == s ? void 0 : s.observer)
            ? void 0
            : e.disconnect) || t.call(e),
        null ==
          (o =
            null == (n = null == l ? void 0 : l.observer)
              ? void 0
              : n.disconnect) || o.call(n),
        (s = null),
        (l = null);
    },
    methods: {
      tryObserveAll: function () {
        this.pageShown && (this.observeEntryBrow(), this.observeHotspotBrow());
      },
      formatPct: function (e) {
        if (null == e || "" === e) return "--";
        var t = Number(e);
        if (Number.isNaN(t)) return "--";
        var n = t.toFixed(2);
        return t > 0 ? "+".concat(n, "%") : "".concat(n, "%");
      },
      formatPrice: function (e) {
        if (null == e || "" === e) return "--";
        var t = Number(e);
        return Number.isNaN(t) ? "--" : "".concat((100 * t).toFixed(2), "元");
      },
      setZdpClass: r.setZdpClass,
      getReportStockCode: function () {
        var e,
          t,
          n,
          o =
            (null == (e = this.eventEtf) ? void 0 : e.etf_symbol) ||
            (null == (t = this.eventEtf) ? void 0 : t.symbol) ||
            (null == (n = this.rankFund) ? void 0 : n.symbol) ||
            "";
        return i.formatReportStockCode(o);
      },
      observeEntryBrow: function () {
        var e = this;
        this.$nextTick(function () {
          e.visible &&
            !s &&
            (s = new t.VisibilityObserver(
              ".global-invest-wrapper",
              {
                once: !0,
                callback: function (t) {
                  t &&
                    (e.hasReportedEntryBrow ||
                      (i.reportGlobalInvest(
                        i.GLOBAL_INVEST_REPORT.ETF_GLOBAL_ENTRY_BROW,
                        { column_id: "etf_investing_globally" }
                      ),
                      (e.hasReportedEntryBrow = !0)));
                },
                intersection: { threshold: 0 },
              },
              { context: e }
            ));
        });
      },
      observeHotspotBrow: function () {
        var e = this;
        this.$nextTick(function () {
          e.eventDesc &&
            !l &&
            (l = new t.VisibilityObserver(
              ".global-invest-wrapper .hot-desc",
              {
                once: !0,
                callback: function (t) {
                  t &&
                    (e.hasReportedHotspotCopyBrow ||
                      (i.reportGlobalInvest(
                        i.GLOBAL_INVEST_REPORT
                          .ETF_GLOBAL_ENTRY_HOTSPOT_COPY_BROW,
                        {
                          column_id: "etf_investing_globally",
                          item_type: "banner_desc",
                          banner_desc: encodeURIComponent(e.eventDesc),
                        }
                      ),
                      (e.hasReportedHotspotCopyBrow = !0)));
                },
                intersection: { threshold: 0 },
              },
              { context: e }
            ));
        });
      },
      reportEtfTargetClick: function () {
        var e = this.getReportStockCode();
        e &&
          i.reportGlobalInvest(
            i.GLOBAL_INVEST_REPORT.ETF_GLOBAL_ENTRY_TARGET_CLICK,
            {
              column_id: "etf_investing_globally",
              item_type: "banner_desc",
              banner_desc: encodeURIComponent(this.eventDesc),
              attribute_type: "stockid",
              stockid: e,
              fposition_id: "0",
            }
          );
      },
      handleEtfReportClick: function () {
        this.reportEtfTargetClick();
      },
      handleEtfClick: function () {
        if (this.eventEtf) {
          this.reportEtfTargetClick();
          var e = this.eventEtf.etf_symbol || this.eventEtf.symbol;
          if (e) {
            var t = n.utils.splitSymbol(String(e)) || {},
              r = t.market,
              i = t.scode;
            r && i && o.navigateToQuote(this.hqBridge, r, i);
          }
        }
      },
      handleContentClick: function () {
        i.reportGlobalInvest(i.GLOBAL_INVEST_REPORT.ETF_GLOBAL_ENTRY_CLICK, {
          column_id: "etf_investing_globally",
          item_type: "banner_desc",
          banner_desc: encodeURIComponent(this.eventDesc),
        }),
          e.StockRouter.routeTo({ name: "investglobal" });
      },
      handleMoreClick: function () {
        i.reportGlobalInvest(i.GLOBAL_INVEST_REPORT.ETF_GLOBAL_ENTRY_CLICK, {
          column_id: "etf_investing_globally",
          item_type: "banner_desc",
          banner_desc: encodeURIComponent(this.eventDesc),
        }),
          e.StockRouter.routeTo({ name: "investglobal" });
      },
    },
  };
Array || e.resolveComponent("GlobalMarketRankItem")();
var c = e._export_sfc(a, [
  [
    "render",
    function (t, n, o, r, i, s) {
      return e.e(
        { a: s.visible },
        s.visible
          ? e.e(
              {
                b: s.titleImg,
                c: e.o(function () {
                  return (
                    s.handleMoreClick && s.handleMoreClick.apply(s, arguments)
                  );
                }, 3558),
                d: "success" === s.status,
              },
              "success" === s.status
                ? e.e(
                    { e: s.eventDesc },
                    s.eventDesc
                      ? {
                          f: e.t(s.eventDesc),
                          g: e.o(function () {
                            return (
                              s.handleContentClick &&
                              s.handleContentClick.apply(s, arguments)
                            );
                          }, 3559),
                        }
                      : {},
                    { h: s.rankFund },
                    s.rankFund
                      ? {
                          i: e.o(s.handleEtfReportClick, 3560),
                          j: e.p({
                            fund: s.rankFund,
                            "banner-desc": s.eventDesc,
                            "page-shown": o.pageShown,
                          }),
                        }
                      : {}
                  )
                : {},
              { k: "loading" === s.status },
              (s.status, {}),
              { l: e.n(i.isLite ? "lite" : "") }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-95384e06"],
]);
wx.createComponent(c);
