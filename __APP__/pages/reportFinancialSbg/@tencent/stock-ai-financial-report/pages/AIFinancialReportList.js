var t = require("../../../../../common/vendor.js"),
  e = require("../api/financialReportRequest.js"),
  i = require("../api/financialReportUtil.js"),
  n = require("../../stock-news-core/utils/force2https.js"),
  a = {
    options: { styleIsolation: "shared" },
    inject: { hqBridge: { default: {} } },
    components: {
      StockSearchItem: function () {
        return "../components/StockSearchItem.js";
      },
      LoadMore: function () {
        return "../components/LoadMore.js";
      },
    },
    props: { theme: "" },
    data: function () {
      return {
        financialList: [],
        loading: !1,
        last_score: "",
        curPage: 1,
        firstLoading: !0,
        nomore: !1,
        countPerPage: 10,
        isRequested: !1,
      };
    },
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
      containerStyle: function () {
        return !this.isMP && this.aiTitleBgImgUrl
          ? {
              backgroundImage: "url('".concat(
                n.forceHttpsAdvanced(this.aiTitleBgImgUrl),
                "')"
              ),
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }
          : {};
      },
      aiTitleBgImgUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/8641a84cc73d84f64c2e48f0209144c6.png"
          : "https://st.gtimg.com/design/e1627c56f1035f395b7c5915f307bdb7.png";
      },
      aiSearchUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/3cfd82f771e90ce5abdbf2895ccbdd16.png"
          : "https://st.gtimg.com/design/f87eaf66e6de28862e174eb6ab7256e4.png";
      },
      noMoreText: function () {
        return "没有更多数据了";
      },
      aiFinancialNoResultImgUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/6aaceec2945636e7624299b0dfec49e9.png"
          : "https://st.gtimg.com/design/49256c57651483a8b728da5c5c1fcb74.png";
      },
    },
    created: function () {
      this.requestFinancialList();
    },
    methods: {
      refreshDataWhenRouteChange: function () {
        (this.loading = !1),
          (this.nomore = !1),
          (this.last_score = ""),
          (this.curPage = 1),
          (this.firstLoading = !0),
          (this.financialList = []),
          this.requestFinancialList();
      },
      requestFinancialList: function () {
        var t = this;
        this.loading ||
          this.nomore ||
          ((this.loading = !0),
          e
            .getFinancialReportListData({
              last_score: this.last_score || "",
              page_start: this.curPage,
              n: this.countPerPage,
            })
            .then(function (e) {
              (t.isRequested = !0),
                t.firstLoading && (t.firstLoading = !1),
                (t.loading = !1);
              var i = (e || {}).data,
                n = void 0 === i ? {} : i;
              n && n.data && n.data.length > 0
                ? ((t.financialList = t.financialList.concat(n.data)),
                  (t.last_score = n.last_score),
                  (t.curPage += 1),
                  0 == n.has_next ? (t.nomore = !0) : (t.nomore = !1))
                : (t.nomore = !0);
            })
            .catch(function () {
              (t.isRequested = !0), (t.loading = !1), (t.nomore = !0);
            }));
      },
      searchButtonClick: function () {
        if (
          (this.isWeb ||
            this.hqBridge.report(
              "news.aifinancialreport.list_search.click",
              {}
            ),
          this.isWZQ)
        ) {
          this.hqBridge.routeTo("/information/AIFinancialReport/search"),
            this.hqBridge.setStorage(
              i.AI_SEARCH_BUTTON_CLICK_KEY,
              "fromSearchClick"
            );
        } else if (this.isApp) {
          var t = encodeURIComponent(
            JSON.stringify({
              p_key: "com.tencent.shy.ai_financial_report",
              p_url: "search",
              p_showNav: !1,
              p_title: "财报速递",
            })
          );
          (t = "qqstock://SHY?info=".concat(t)), shy.navigateTo({ url: t });
        } else if (this.isMP) {
          this.xcxNavigate({ url: "/pages/report/AIFinancial/search" });
        } else if (this.isWeb) {
          var e = i.AI_FINANCIAL_REPORT_SEARCH_H5_URL;
          shy.navigateTo({ url: e });
        }
        i.currentDeviceIsiOS() &&
          this.$refs.tempFocus &&
          this.$refs.tempFocus.focus();
      },
      xcxNavigate: function (e) {
        var i, n;
        t.wx$1 && t.wx$1.navigateTo
          ? t.wx$1.navigateTo(e)
          : null ==
              (n =
                null == (i = null == window ? void 0 : window.wx)
                  ? void 0
                  : i.miniProgram) || n.navigateTo(e);
      },
    },
  };
Array ||
  (t.resolveComponent("StockSearchItem") + t.resolveComponent("LoadMore"))();
var s = t._export_sfc(a, [
  [
    "render",
    function (e, i, n, a, s, o) {
      return t.e(
        {
          a: o.aiSearchUrl,
          b: t.o(function (t) {
            return o.searchButtonClick();
          }, 1691),
          c: t.f(s.financialList, function (e, i, n) {
            return {
              a: "14bd2474-0-" + n,
              b: t.p({ itemData: e, pageType: "list" }),
              c: i,
            };
          }),
          d: !s.firstLoading && s.financialList.length >= s.countPerPage,
        },
        !s.firstLoading && s.financialList.length >= s.countPerPage
          ? {
              e: t.o(o.requestFinancialList, 1692),
              f: t.p({
                noMoreText: o.noMoreText,
                nomore: s.nomore,
                noNetwork: !1,
              }),
            }
          : {},
        {
          g: s.isRequested && (!s.financialList || s.financialList.length <= 0),
        },
        s.isRequested && (!s.financialList || s.financialList.length <= 0)
          ? { h: o.aiFinancialNoResultImgUrl }
          : {},
        { i: t.n(o.isMP ? "container-bg" : ""), j: t.s(o.containerStyle) }
      );
    },
  ],
  ["__scopeId", "data-v-14bd2474"],
]);
wx.createComponent(s);
