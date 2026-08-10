var t = require("../../../../../common/vendor.js"),
  i = require("../api/financialReportUtil.js"),
  e = require("../api/financialReportRequest.js"),
  a = require("../../stock-news-core/utils/force2https.js"),
  n = {
    options: { styleIsolation: "shared" },
    inject: { hqBridge: { default: {} } },
    props: { itemData: {}, pageType: "" },
    computed: {
      isMP: function () {
        return e.isMPEnv();
      },
      isWZQ: function () {
        return e.isWZQEnv();
      },
      isApp: function () {
        return e.isAppEnv();
      },
      isWeb: function () {
        return e.isWebEnv();
      },
      tagTop: function () {
        return i.isLessThaniOS14() ? "-2px" : "2px";
      },
      logoUrl: function () {
        return this.itemData &&
          this.itemData.logo &&
          this.itemData.logo.length > 0
          ? a.forceHttpsAdvanced(this.itemData.logo)
          : "";
      },
      canShowLogo: function () {
        return !!(
          this.itemData &&
          this.itemData.logo &&
          this.itemData.logo.length > 0
        );
      },
      stockFlagUrl: function () {
        if (this.itemData) {
          var t = this.itemData.forcast;
          return a.forceHttpsAdvanced(i.forcastFlagImg(t));
        }
        return "";
      },
    },
    methods: {
      textColor: function (t) {
        return i.textColorByValue(t);
      },
      formatPercent: function (t) {
        return i.formatZdfPercent(t);
      },
      formatPublishTime: function (t) {
        return i.formatTime(t);
      },
      goFinancialReport: function () {
        var t = this.itemData.id;
        if (t && !(t.length <= 0)) {
          var e = "news.aifinancialreport.search_item.click";
          "list" === this.pageType &&
            (e = "news.aifinancialreport.list_item.click");
          var a = { newsid: t };
          if ((this.isWeb || this.hqBridge.report(e, a), this.isApp)) {
            var n = encodeURIComponent(
              JSON.stringify({
                p_key: "com.tencent.shy.ai_financial_report",
                p_url: "index?id=".concat(t),
                p_showNav: !1,
                p_title: "财报速递",
              })
            );
            (n = "qqstock://SHY?info=".concat(n)), shy.navigateTo({ url: n });
          } else if (this.isWZQ) {
            var o = { id: this.itemData.id };
            this.hqBridge.routeTo({
              path: "/information/AIFinancialReport",
              query: o,
            });
          } else if (this.isMP) {
            var r = { url: "/pages/report/AIFinancial/index?id=".concat(t) };
            this.xcxNavigate(r);
          } else if (this.isWeb) {
            var s = "".concat(i.AI_FINANCIAL_REPORT_H5_URL, "?id=").concat(t);
            shy.navigateTo({ url: s });
          }
        }
      },
      xcxNavigate: function (i) {
        var e, a;
        t.wx$1 && t.wx$1.navigateTo
          ? t.wx$1.navigateTo(i)
          : null ==
              (a =
                null == (e = null == window ? void 0 : window.wx)
                  ? void 0
                  : e.miniProgram) || a.navigateTo(i);
      },
    },
  },
  o = t._export_sfc(n, [
    [
      "render",
      function (i, e, a, n, o, r) {
        return t.e(
          { a: r.canShowLogo },
          r.canShowLogo ? { b: r.logoUrl } : {},
          { c: t.t(a.itemData.symbol_name), d: r.stockFlagUrl.length > 0 },
          r.stockFlagUrl.length > 0 ? { e: r.stockFlagUrl } : {},
          { f: a.itemData.publish_time },
          a.itemData.publish_time
            ? { g: t.t(r.formatPublishTime(a.itemData.publish_time)) }
            : {},
          {
            h: t.t(a.itemData.income),
            i: t.t(a.itemData.income_unit),
            j: t.t(r.formatPercent(a.itemData.income_ratio)),
            k: r.textColor(a.itemData.income_ratio),
            l: t.t(a.itemData.net),
            m: t.t(a.itemData.net_unit),
            n: t.t(r.formatPercent(a.itemData.net_ratio)),
            o: r.textColor(a.itemData.net_ratio),
            p: a.itemData && a.itemData.point,
          },
          a.itemData && a.itemData.point
            ? { q: r.tagTop, r: t.t(a.itemData.point) }
            : {},
          {
            s: t.o(function () {
              return (
                r.goFinancialReport && r.goFinancialReport.apply(r, arguments)
              );
            }, 3197),
          }
        );
      },
    ],
    ["__scopeId", "data-v-fb142a44"],
  ]);
wx.createComponent(o);
