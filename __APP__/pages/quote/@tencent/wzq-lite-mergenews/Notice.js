var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../common/vendor.js"),
  i = require("api.js"),
  n = require("../stock-news-base/service/news/gray.js"),
  r = require("util.js"),
  s = require("../stock-hq-data/index.js"),
  o = {
    components: {
      NoData: function () {
        return "./common/NoData.js";
      },
      Timeline: function () {
        return "./components/Timeline.js";
      },
    },
    inject: ["hqBridge"],
    props: { scode: String, market: String, app: String },
    data: function () {
      return {
        list: [],
        pages: 1,
        maxPage: 999,
        loading: !1,
        eventList: [],
        last_score: "",
        importanceNum: 0,
        hasNext: !0,
      };
    },
    computed: {
      symbol: function () {
        return s.utils.getSymbol(this.market, this.scode);
      },
    },
    beforeDestroy: function () {
      (this.list = []), (this.eventList = []);
    },
    created: function () {
      var e = new t.dayjs();
      (this.nowYear = e.format("YYYY")),
        (this.nowDay = e.format("YYYY-MM-DD")),
        (this.yesterday = e.subtract(1, "days").format("YYYY-MM-DD"));
    },
    mounted: function () {
      this.getData(),
        this.getEventsList(),
        this.hqBridge.report("hq.gegu_xiangqingye.newsGroup.notice_brow");
    },
    methods: {
      canShowSourceIcon: function (e) {
        return !(!e || !e.related_info || 27 != e.related_info.news_type);
      },
      goSource: function (e) {
        if (e && e.related_info && 27 == e.related_info.news_type) {
          var t = { id: e.related_info.id || "" },
            i =
              "mp" === this.hqBridge.ENV
                ? "/pages/report/AIFinancial/index"
                : "/information/AIFinancialReport";
          return (
            this.hqBridge.routeTo({ path: i, query: t }),
            void this.hqBridge.report(
              "hq.gegu_xiangqingye.newsGroup.financial_report_entry_click",
              { newsid: e.related_info.id || "" }
            )
          );
        }
      },
      getEventsList: function () {
        var e = this;
        i.getBigEvents(this.hqBridge, { symbol: this.symbol })
          .then(function (t) {
            var i = (t || {}).data,
              n = void 0 === i ? [] : i;
            (e.eventList = n.slice(0, 3)), (e.loading = !1);
          })
          .catch(function (e) {});
      },
      gotoDetail: function () {
        var e;
        (e =
          "mp" === this.hqBridge.ENV
            ? "/pages/detailSbg/event_detail"
            : t.isBroker && "DAFENG" !== t.isBroker
            ? "/wj_hq/trade/event_detail"
            : "/trade/event_detail"),
          this.hqBridge.routeTo({
            path: e,
            query: { symbol: this.symbol, market: this.market },
          });
      },
      formatZero: function (e) {
        return e < 10 ? "0".concat(e) : e;
      },
      formatTime: function (e) {
        var i = new t.dayjs(e),
          n = i.format("YYYY-MM-DD"),
          r = i.format("YYYY");
        return n === this.nowDay
          ? i.format("HH:mm")
          : r === this.nowYear
          ? i.format("MM-DD")
          : n;
      },
      getData: function () {
        return (
          (t = this),
          null,
          (s = e().mark(function () {
            var t,
              s,
              o,
              a,
              h,
              c,
              u,
              l,
              g = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(this.loading || this.pages > this.maxPage) &&
                        this.hasNext
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !0);
                    case 2:
                      return (
                        (this.loading = !0),
                        (s = ""),
                        (o = ""),
                        this.hqBridge && "wzq" === this.hqBridge.ENV
                          ? ((s =
                              this.hqBridge.getCookie("wzq_qlskey") ||
                              this.hqBridge.getCookie("qlskey")),
                            (o =
                              this.hqBridge.getCookie("wzq_qluin") ||
                              this.hqBridge.getCookie("qluin")))
                          : this.isH5 || "zxg_xcx" === this.app
                          ? ((s =
                              this.hqBridge.getStorage("_qlskey") ||
                              this.hqBridge.getStorage("qlskey")),
                            (o =
                              this.hqBridge.getStorage("_qluin") ||
                              this.hqBridge.getStorage("qluin")))
                          : ((a = getApp().globalData.Login.loginKeys),
                            (h = a.qlskey),
                            (c = a.qluin),
                            (s = h),
                            (o = c)),
                        (e.prev = 5),
                        (e.next = 8),
                        n.isNewsGrayUser("queryStockNewsList")
                      );
                    case 8:
                      if (!e.sent) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.next = 11),
                        r.queryStockNewsList({
                          stock_code:
                            "hkCES100" === this.symbol ? "hkHSI" : this.symbol,
                          limit: 20,
                          last_page_cursor: this.last_score || "",
                          type: 0,
                          importance_num: this.importanceNum,
                          get_import: 0,
                          reserve: "4297069571",
                        })
                      );
                    case 11:
                      (t = e.sent), (e.next = 18);
                      break;
                    case 14:
                      return (
                        (e.next = 16),
                        i.getMergeNewsInfo(this.hqBridge, {
                          page_start: this.pages,
                          symbol:
                            "hkCES100" === this.symbol ? "hkHSI" : this.symbol,
                          last_score: this.last_score || "",
                          type: 0,
                          openid: o,
                          fskey: s,
                          access_token: s,
                          appid: this.app,
                          app: this.app,
                          importance_num: this.importanceNum,
                        })
                      );
                    case 16:
                      (u = e.sent), (t = r.adaptQueryStockNewsListResp(u));
                    case 18:
                      e.next = 23;
                      break;
                    case 20:
                      return (
                        (e.prev = 20),
                        (e.t0 = e.catch(5)),
                        e.abrupt(
                          "return",
                          ((this.loading = !1), void this.$emit("loaded"))
                        )
                      );
                    case 23:
                      return (
                        (this.loading = !1),
                        (this.hasNext = 0 != t.has_next),
                        (l = (t.news_list || []).reduce(function (e, t) {
                          return e.concat(t, t.folded_items || []);
                        }, [])),
                        e.abrupt(
                          "return",
                          (l.length > 0 &&
                            ((this.list = this.list.concat(
                              r.filterEmptyTitleNews(l)
                            )),
                            this.pages++),
                          (this.last_score = t.next_page_cursor || ""),
                          (this.importanceNum =
                            t.importance_num || this.importanceNum),
                          this.$nextTick(function () {
                            g.$emit("loaded");
                          }),
                          0 == t.has_next)
                        )
                      );
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this,
              [[5, 20]]
            );
          })),
          new Promise(function (e, i) {
            var n = function (e) {
                try {
                  o(s.next(e));
                } catch (e) {
                  i(e);
                }
              },
              r = function (e) {
                try {
                  o(s.throw(e));
                } catch (e) {
                  i(e);
                }
              },
              o = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(n, r);
              };
            o((s = s.apply(t, null)).next());
          })
        );
        var t, s;
      },
      goNotices: function (e) {
        this.hqBridge.report("stock_detail.notice", {
          newsId: e.news_id,
          stockid: this.symbol,
        });
        var t =
            "mp" === this.hqBridge.ENV
              ? "/pages/newsCon/newsDetail/main"
              : "/information/detail",
          i = {
            id: e.news_id,
            title: encodeURIComponent(e.title),
            date: e.publish_time,
            source: e.media_name,
            zxtype: e.item_type,
            market: this.market,
            scode: this.scode,
            columnfrom: "notice",
          };
        this.hqBridge.routeTo({ path: t, query: i });
      },
    },
  };
Array || (t.resolveComponent("Timeline") + t.resolveComponent("NoData"))();
var a = t._export_sfc(o, [
  [
    "render",
    function (e, i, n, r, s, o) {
      return t.e(
        { a: s.eventList.length > 0 },
        s.eventList.length > 0
          ? {
              b: t.o(function () {
                return o.gotoDetail && o.gotoDetail.apply(o, arguments);
              }, 1989),
              c: t.p({ list: s.eventList }),
            }
          : {},
        { d: s.list.length > 0 },
        s.list.length > 0
          ? {
              e: t.f(s.list, function (e, i, n) {
                return t.e(
                  {
                    a: t.t(e.chinese_title || e.title),
                    b: o.canShowSourceIcon(e),
                  },
                  o.canShowSourceIcon(e)
                    ? {
                        c: t.o(
                          function (t) {
                            return o.goSource(e);
                          },
                          1990,
                          i
                        ),
                      }
                    : {},
                  {
                    d: t.t(o.formatTime(e.time)),
                    e: i,
                    f: t.o(
                      function (t) {
                        return o.goNotices(e);
                      },
                      1991,
                      i
                    ),
                  }
                );
              }),
            }
          : {},
        { f: !s.loading && 0 === s.list.length },
        (s.loading || s.list.length, {})
      );
    },
  ],
  ["__scopeId", "data-v-250b6e63"],
]);
wx.createComponent(a);
