var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  l = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = require("../../../../../common/vendor.js"),
  h = require("../api/financialReportRequest.js"),
  f = require("../api/financialReportUtil.js"),
  p = require("../../stock-news-core/utils/force2https.js"),
  m = {
    options: { styleIsolation: "shared" },
    inject: { hqBridge: { default: {} } },
    components: {
      StockContent: function () {
        return "../components/StockContent.js";
      },
    },
    props: { newsId: "", theme: "" },
    watch: {
      newsId: {
        immediate: !0,
        handler: function (t, e) {
          t && this.requestFinancialData();
        },
      },
    },
    data: function () {
      return {
        newsInfo: null,
        isRequested: !1,
        financialData: null,
        symbol: "",
      };
    },
    computed: {
      isMP: function () {
        return h.isMPEnv();
      },
      isWZQ: function () {
        return h.isWZQEnv();
      },
      isApp: function () {
        return h.isAppEnv();
      },
      isWeb: function () {
        return h.isWebEnv();
      },
      aiFinancialNoResultImgUrl: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/6aaceec2945636e7624299b0dfec49e9.png"
          : "https://st.gtimg.com/design/49256c57651483a8b728da5c5c1fcb74.png";
      },
      containerStyle: function () {
        return this.isMP
          ? {}
          : {
              backgroundImage: "url('".concat(
                p.forceHttpsAdvanced(this.aiTitleBgImgUrl || ""),
                "')"
              ),
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            };
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
      incomeData: function () {
        var t = {};
        return (
          this.financialData &&
            this.financialData.income &&
            ((t.title = "营业总收入"),
            (t.income = this.financialData.report_data.income || ""),
            (t.income_ratio = this.formatPercent(
              this.financialData.report_data.income_ratio
            )),
            (t.income_unit = this.financialData.income_unit || ""),
            (t.chartData = this.financialData.income),
            (t.reportType = this.reportTypeText(
              this.financialData.report_type || ""
            ))),
          t
        );
      },
      netData: function () {
        var t = {};
        if (this.financialData && this.financialData.net) {
          (t.title = "净利润"),
            (t.income = this.financialData.report_data.net || ""),
            (t.income_ratio = this.formatPercent(
              this.financialData.report_data.net_ratio
            )),
            (t.income_unit = this.financialData.net_unit || ""),
            (t.reportType = this.reportTypeText(
              this.financialData.report_type || ""
            ));
          var e = [];
          this.financialData.net.forEach(function (t) {
            var n = { date: t.date, income: t.net };
            e = [].concat(i(e), [n]);
          }),
            (t.chartData = e);
        }
        return t;
      },
    },
    methods: {
      shareButtonClick: function () {
        this.$emit("shareFinancialReport");
        var t = { newsid: this.newsId };
        this.hqBridge.report("news.aifinancialreport.detail_share.click", t);
      },
      allButtonClick: function () {
        var t = { newsid: this.newsId };
        if (
          (this.isWeb ||
            this.hqBridge.report("news.aifinancialreport.detail_list.click", t),
          this.isWZQ)
        ) {
          this.hqBridge.routeTo("/information/AIFinancialReport/list"),
            this.hqBridge.setStorage(f.AI_ALL_BUTTON_CLICK_KEY, "fromDetail");
        } else if (this.isApp) {
          var e = encodeURIComponent(
            JSON.stringify({
              p_key: "com.tencent.shy.ai_financial_report",
              p_url: "list",
              p_showNav: !1,
              p_title: "财报速递",
            })
          );
          (e = "qqstock://SHY?info=".concat(e)), shy.navigateTo({ url: e });
        } else if (this.isMP) {
          this.xcxNavigate({ url: "/pages/report/AIFinancial/list" });
        } else if (this.isWeb) {
          var i = f.AI_FINANCIAL_REPORT_LIST_H5_URL;
          shy.navigateTo({ url: i });
        }
      },
      searchButtonClick: function () {
        var t = { newsid: this.newsId };
        if (
          (this.isWeb ||
            this.hqBridge.report(
              "news.aifinancialreport.detail_search.click",
              t
            ),
          this.isWZQ)
        ) {
          this.hqBridge.routeTo("/information/AIFinancialReport/search"),
            this.hqBridge.setStorage(
              f.AI_SEARCH_BUTTON_CLICK_KEY,
              "fromSearchClick"
            );
        } else if (this.isApp) {
          var e = encodeURIComponent(
            JSON.stringify({
              p_key: "com.tencent.shy.ai_financial_report",
              p_url: "search",
              p_showNav: !1,
              p_title: "财报速递",
            })
          );
          (e = "qqstock://SHY?info=".concat(e)), shy.navigateTo({ url: e });
        } else if (this.isMP) {
          this.xcxNavigate({ url: "/pages/report/AIFinancial/search" });
        } else if (this.isWeb) {
          var i = f.AI_FINANCIAL_REPORT_SEARCH_H5_URL;
          shy.navigateTo({ url: i });
        }
        f.currentDeviceIsiOS() &&
          this.$refs.tempFocus &&
          this.$refs.tempFocus.focus();
      },
      xcxNavigate: function (t) {
        var e, i;
        u.wx$1 && u.wx$1.navigateTo
          ? u.wx$1.navigateTo(t)
          : null ==
              (i =
                null == (e = null == window ? void 0 : window.wx)
                  ? void 0
                  : e.miniProgram) || i.navigateTo(t);
      },
      requestFinancialData: function () {
        return (
          (i = this),
          null,
          (n = t().mark(function i() {
            var n, u, p, m, d, _, g, b, v;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = { news_id: this.newsId || "" }),
                        (t.prev = 1),
                        (t.next = 4),
                        h.getFinancialReportData(n)
                      );
                    case 4:
                      (u = t.sent),
                        (p = u.news_info) &&
                          p.content &&
                          ((m = p.content),
                          (this.financialData = m),
                          (this.symbol = m.stock_code),
                          (d = {
                            id: p.id,
                            comment_status: p.comment_status,
                            commentid: p.commentid,
                            title: p.title,
                            news_type: p.news_type,
                            cont_type: p.cont_type,
                            publish_time: p.publish_time,
                            source: p.source,
                            symbol: m.stock_code,
                            stock_name: m.stock_name,
                          }),
                          (this.isApp || this.isMP) &&
                            ((_ = f.valueWithoutDecimal(
                              this.incomeData.income
                            )),
                            (g = f.valueWithoutDecimal(this.netData.income)),
                            (b = {
                              stock_name: m.stock_name,
                              forcast_result: m.report_data.forcast_result,
                              forcast_flag_text: f.forcastText(
                                m.report_data.forcast_result
                              ),
                              points: m.points,
                              income: ""
                                .concat(_)
                                .concat(this.incomeData.income_unit),
                              income_ratio: this.formatPercent(
                                this.incomeData.income_ratio
                              ),
                              income_ratio_color: this.textColor(
                                this.incomeData.income_ratio
                              ),
                              net: ""
                                .concat(g)
                                .concat(this.netData.income_unit),
                              net_ratio: this.formatPercent(
                                this.netData.income_ratio
                              ),
                              net_ratio_color: this.textColor(
                                this.netData.income_ratio
                              ),
                            }),
                            (v = (function (t, i) {
                              for (var n in i || (i = {}))
                                c.call(i, n) && l(t, n, i[n]);
                              if (o) {
                                var a,
                                  r = e(o(i));
                                try {
                                  for (r.s(); !(a = r.n()).done; ) {
                                    n = a.value;
                                    s.call(i, n) && l(t, n, i[n]);
                                  }
                                } catch (t) {
                                  r.e(t);
                                } finally {
                                  r.f();
                                }
                              }
                              return t;
                            })({}, d)),
                            (d = a(v, r({ share_data: b })))),
                          this.dataReady(d)),
                        (this.isRequested = !0),
                        (t.next = 13);
                      break;
                    case 10:
                      (t.prev = 10),
                        (t.t0 = t.catch(1)),
                        (this.isRequested = !0),
                        this.isWeb && this.$emit("dataReady", null);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[1, 10]]
            );
          })),
          new Promise(function (t, e) {
            var a = function (t) {
                try {
                  o(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  o(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, r);
              };
            o((n = n.apply(i, null)).next());
          })
        );
        var i, n;
      },
      dataReady: function (t) {
        this.$emit("dataReady", t);
      },
      formatPercent: function (t) {
        return f.formatZdfPercent(t);
      },
      reportTypeText: function (t) {
        return t && 0 == t ? "年报" : t && 1 == t ? "半年报" : "";
      },
      textColor: function (t) {
        return f.textColorByValue(t);
      },
    },
  };
Array || u.resolveComponent("StockContent")();
var d = u._export_sfc(m, [
  [
    "render",
    function (t, e, i, n, a, r) {
      return u.e(
        {
          a: u.o(function (t) {
            return r.allButtonClick();
          }, 1679),
          b: (r.isApp || r.isWZQ) && a.financialData,
        },
        (r.isApp || r.isWZQ) && a.financialData
          ? {
              c: u.o(function (t) {
                return r.shareButtonClick();
              }, 1680),
            }
          : r.isMP && a.financialData
          ? {
              e: u.o(function (t) {
                return r.shareButtonClick();
              }, 1681),
            }
          : {},
        {
          d: r.isMP && a.financialData,
          f: r.aiSearchUrl,
          g: u.o(function (t) {
            return r.searchButtonClick();
          }, 1682),
          h: a.financialData,
        },
        a.financialData
          ? {
              i: u.p({
                financialData: a.financialData,
                incomeData: r.incomeData,
                netData: r.netData,
                newsId: i.newsId,
                symbol: a.symbol,
                theme: i.theme,
              }),
            }
          : {},
        { j: a.isRequested && !a.financialData },
        a.isRequested && !a.financialData
          ? { k: r.aiFinancialNoResultImgUrl }
          : {},
        { l: u.n(r.isMP ? "container-bg" : ""), m: u.s(r.containerStyle) }
      );
    },
  ],
  ["__scopeId", "data-v-999639af"],
]);
wx.createComponent(d);
