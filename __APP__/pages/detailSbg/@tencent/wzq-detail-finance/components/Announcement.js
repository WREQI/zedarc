var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  i = require("../../../../../common/vendor.js"),
  n = require("../../stock-hq-data/index.js"),
  o = require("../Finance.js"),
  a = require("../../stock-base/visibilityObserver/index.js"),
  r = {
    components: {
      CbzyContent: function () {
        return "./CbzyContent.js";
      },
    },
    props: {
      market: { type: String, default: "" },
      scode: { type: String, default: "" },
      announcementList: {
        typeof: Array,
        default: function () {
          return [];
        },
      },
      stockName: { type: String, default: "" },
      financeSummary: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { dateTitle: "", content: [], summaryData: null };
    },
    watch: {
      financeSummary: {
        handler: function () {
          this.getSummaryData();
        },
        immediate: !0,
        deep: !0,
      },
    },
    destroyed: function () {
      null == e || e.disconnect(), (e = null);
    },
    created: function () {
      this.isShowList;
    },
    mounted: function () {
      this.symbol = n.utils.getSymbol(this.market, this.scode);
    },
    computed: {
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isShowList: function () {
        return (
          n.utils.isHKMarket(this.market) || n.utils.isUSMarket(this.market)
        );
      },
    },
    methods: {
      getSummaryData: function () {
        return (
          (e = this),
          null,
          (i = t().mark(function e() {
            var i,
              n,
              o,
              a,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (null == (i = this.financeSummary) ? void 0 : i.data) &&
                        ((n = this.financeSummary),
                        (this.summaryData =
                          (null == n ? void 0 : n.data) || {}),
                        (o = n.latest.split("Q")),
                        (a = {
                          1: "一季报",
                          2: "中报",
                          3: "三季报",
                          4: "年报",
                        }),
                        (this.dateTitle = o[0] + a[o[1]])),
                        !this.isShowList &&
                          this.summaryData &&
                          setTimeout(function () {
                            r.openObserver();
                          }, 0);
                    case 2:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, n) {
            var o = function (t) {
                try {
                  r(i.next(t));
                } catch (t) {
                  n(t);
                }
              },
              a = function (t) {
                try {
                  r(i.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, a);
              };
            r((i = i.apply(e, null)).next());
          })
        );
        var e, i;
      },
      handleClick: function () {
        if (!this.isShowList) {
          if (!this.financeSummary.data) return;
          return (
            i.StockBridge.report(
              "hq.stock_detail.finance_announcement_cbzy_click",
              { stockid: this.symbol }
            ),
            void i.StockRouter.routeTo({
              name: "cbzyDetail",
              query: {
                market: this.market,
                scode: this.scode,
                stockName: this.stockName,
              },
            })
          );
        }
        i.StockBridge.report(
          "hq.stock_detail.finance.announcement.list_click",
          { stockid: this.symbol }
        ),
          i.StockRouter.routeTo({
            name: "financeFileList",
            query: { market: this.market, scode: this.scode },
          });
      },
      toPDF: function (t) {
        if (t) {
          var e = {
            id: this.isShowList ? t.id : t,
            market: this.market,
            scode: this.scode,
          };
          this.isShowList && (e.title = encodeURIComponent(t.title)),
            i.StockBridge.report(
              "hq.stock_detail.finance.announcement.detail_click",
              { newsid: this.isShowList ? t.id : t, stockid: this.symbol }
            ),
            "mp" !== i.StockBridge.ENV
              ? i.StockRouter.routeTo({ name: "informationDetail", query: e })
              : (i.wx$1.showLoading(),
                o
                  .getPDFcontent(e.id)
                  .then(function (t) {
                    var n = t.code,
                      o = t.data,
                      a = void 0 === o ? [] : o;
                    if (
                      0 == +n &&
                      Array.isArray(a) &&
                      a.length &&
                      a[0].pdf &&
                      (a[0].pdf.indexOf(".pdf") > 0 ||
                        a[0].pdf.indexOf(".PDF") > 0)
                    ) {
                      var r = t.data[0].pdf.replace("http:", "https:");
                      i.wx$1.downloadFile({
                        url: r,
                        success: function (t) {
                          var e = t.tempFilePath;
                          i.wx$1.hideLoading(),
                            i.wx$1.openDocument({
                              filePath: e,
                              showMenu: !0,
                              success: function () {
                                i.wx$1.hideLoading();
                              },
                              fail: function () {
                                i.wx$1.hideLoading();
                              },
                            });
                        },
                        fail: function () {
                          i.wx$1.hideLoading();
                        },
                      });
                    } else i.wx$1.hideLoading(), i.StockRouter.routeTo({ name: "informationDetail", query: e });
                  })
                  .catch(function (t) {
                    i.wx$1.hideLoading();
                  }));
        }
      },
      openObserver: function () {
        var t = this;
        new a.VisibilityObserver(
          ".cbzy-content",
          {
            once: !0,
            callback: function (e) {
              e &&
                i.StockBridge.report(
                  "hq.stock_detail.finance_announcement_cbzy_brow",
                  { stockid: t.symbol }
                );
            },
            intersection: { threshold: 0 },
          },
          this
        );
      },
    },
  };
Array || i.resolveComponent("cbzy-content")();
var s = i._export_sfc(r, [
  [
    "render",
    function (t, e, n, o, a, r) {
      return i.e(
        { a: i.t(r.isShowList ? "财报公告文件" : "财报摘要"), b: a.dateTitle },
        a.dateTitle ? { c: i.t(a.dateTitle) } : {},
        { d: r.isShowList || a.summaryData },
        (r.isShowList || a.summaryData, {}),
        {
          e: i.o(function () {
            return r.handleClick && r.handleClick.apply(r, arguments);
          }, 2812),
          f: !r.isShowList && a.summaryData,
        },
        !r.isShowList && a.summaryData
          ? { g: i.p({ data: a.summaryData }) }
          : {},
        { h: r.isShowList },
        r.isShowList
          ? {
              i: i.f(n.announcementList, function (t, e, n) {
                return {
                  a: i.t(t.title),
                  b: i.t(t.subTitle),
                  c: i.t(t.timeStr),
                  d: t.id,
                  e: i.o(
                    function (e) {
                      return r.toPDF(t);
                    },
                    2813,
                    t.id
                  ),
                };
              }),
            }
          : {
              j: i.f(n.announcementList, function (t, e, n) {
                return {
                  a: i.t(t[0]),
                  b: i.f(t[1], function (t, e, n) {
                    return i.e(
                      { a: "" !== t },
                      "" !== t
                        ? {
                            b: i.o(
                              function (e) {
                                return r.toPDF(t);
                              },
                              2814,
                              e
                            ),
                          }
                        : {},
                      { c: e }
                    );
                  }),
                  c: e,
                };
              }),
            },
        { k: i.n(r.isLite ? "lite" : "pro") }
      );
    },
  ],
  ["__scopeId", "data-v-149d8017"],
]);
wx.createComponent(s);
