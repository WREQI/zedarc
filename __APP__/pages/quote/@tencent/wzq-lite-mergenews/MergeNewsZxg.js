var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = require("../../../../common/vendor.js"),
  h = require("api.js"),
  d = require("../stock-news-base/service/news/gray.js"),
  p = require("util.js"),
  u = require("../stock-hq-data/index.js"),
  m = require("../stock-base/visibilityObserver/index.js"),
  y = {
    components: {
      NoData: function () {
        return "./NoData.js";
      },
      NewsItemZxgObserver: function () {
        return "./components/NewsItemZxgObserver.js";
      },
      SearchAiBar: function () {
        return "../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      scode: String,
      market: String,
      skin: String,
      isIndex: Boolean,
      app: String,
    },
    data: function () {
      return {
        isMp: l.StockBridge.ENV === l.EnvTypeEnum.MP,
        loading: !1,
        curPage: 0,
        canPullUp: !1,
        error: "",
        list: [],
        importanceNum: 0,
        hasNext: !0,
        showAiEntry: !1,
        VISIBILITY_OBJ: null,
      };
    },
    computed: {
      symbol: function () {
        return u.utils.getSymbol(this.market, this.scode);
      },
      isH5: function () {
        var e = !0;
        return document || (e = !1), e;
      },
      reportInfo: function () {
        return { stockid: this.symbol };
      },
    },
    created: function () {
      this.req_session = "";
      var e = new l.dayjs();
      (this.nowYear = e.format("YYYY")),
        (this.nowDay = e.format("YYYY-MM-DD")),
        (this.yesterday = e.subtract(1, "days").format("YYYY-MM-DD")),
        (this.maxPage = 999),
        this.getData();
    },
    mounted: function () {
      var e = this;
      this.VISIBILITY_OBJ = new m.VisibilityObserver(
        ".news-container",
        {
          once: !0,
          callback: function (t, i) {
            t &&
              e.hqBridge.report("hq.stock_detail.news.tab_brow", {
                stockid: e.symbol,
              });
          },
          intersection: { threshold: 0 },
        },
        this
      );
    },
    beforeDestroy: function () {
      var e, t, i;
      null ==
        (i =
          null == (t = null == (e = this.VISIBILITY_OBJ) ? void 0 : e.observer)
            ? void 0
            : t.disconnect) || i.call(t),
        (this.VISIBILITY_OBJ = null);
    },
    methods: {
      visibilityChanged: function (e, t) {
        e &&
          this.hqBridge.report("news.stocknews.stnews.news_exposure", {
            newsid: t || "",
            stockid: this.symbol,
          });
      },
      retryTab: function () {
        this.$emit("refreshTab"),
          (this.error = ""),
          (this.curPage = 0),
          (this.hasNext = !0),
          this.getData();
      },
      openFolder: function (e, t, i, r) {
        t
          ? "自选股智能写手" === i
            ? this.hqBridge.report("hq.stock_detail.news.znxg.close_click")
            : "智选洞察" === i
            ? this.hqBridge.report("hq.stock_detail.news.ydjd.close_click")
            : "0" == r &&
              this.hqBridge.report("hq.stock_detail.news.close_click")
          : (this.hqBridge.report("hq.stock_detail.news.close_exposure"),
            "自选股智能写手" === i
              ? this.hqBridge.report("hq.stock_detail.news.znxg.open_click")
              : "智选洞察" === i
              ? this.hqBridge.report("hq.stock_detail.news.ydjd.open_click")
              : "0" == r &&
                this.hqBridge.report("hq.stock_detail.news.open_click")),
          (this.list[e].close = t);
        var o = this.list[e].id,
          s = void 0 === o ? "" : o;
        this.$emit("recordScroollTop", t, s);
      },
      formatTime: function (e) {
        var t = new l.dayjs(e),
          i = t.format("YYYY-MM-DD"),
          r = t.format("YYYY");
        return i === this.nowDay
          ? t.format("HH:mm")
          : r === this.nowYear
          ? t.format("MM-DD")
          : i;
      },
      getData: function () {
        return (
          (e = this),
          null,
          (i = t().mark(function () {
            var e,
              i,
              r,
              o,
              s,
              n,
              a,
              c,
              l,
              u,
              m = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !(this.loading || this.curPage > this.maxPage) &&
                        this.hasNext
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 2:
                      return (
                        (this.loading = !0),
                        (i = ""),
                        (r = ""),
                        this.hqBridge && "wzq" === this.hqBridge.ENV
                          ? ((i =
                              this.hqBridge.getCookie("wzq_qlskey") ||
                              this.hqBridge.getCookie("qlskey")),
                            (r =
                              this.hqBridge.getCookie("wzq_qluin") ||
                              this.hqBridge.getCookie("qluin")))
                          : this.isH5 || "zxg_xcx" === this.app
                          ? ((i =
                              this.hqBridge.getStorage("_qlskey") ||
                              this.hqBridge.getStorage("qlskey")),
                            (r =
                              this.hqBridge.getStorage("_qluin") ||
                              this.hqBridge.getStorage("qluin")))
                          : ((o = getApp().globalData.Login.loginKeys),
                            (s = o.qlskey),
                            (n = o.qluin),
                            (i = s),
                            (r = n)),
                        (a = ""),
                        (t.prev = 6),
                        (t.next = 9),
                        d.isNewsGrayUser("queryStockNewsList")
                      );
                    case 9:
                      if (!t.sent) {
                        t.next = 15;
                        break;
                      }
                      return (
                        (t.next = 12),
                        p.queryStockNewsList({
                          stock_code:
                            "hkCES100" === this.symbol ? "hkHSI" : this.symbol,
                          limit: 20,
                          last_page_cursor: this.last_score || "",
                          type: 3,
                          top_importance: this.isIndex ? 0 : 1,
                          floded_type: 1,
                          importance_num: this.importanceNum,
                          get_import: 0,
                          reserve: "4297069571",
                        })
                      );
                    case 12:
                      (e = t.sent), (t.next = 19);
                      break;
                    case 15:
                      return (
                        (t.next = 17),
                        h.getMergeNewsInfo(this.hqBridge, {
                          symbol:
                            "hkCES100" === this.symbol ? "hkHSI" : this.symbol,
                          last_score: this.last_score || "",
                          top_importance: this.isIndex ? 0 : 1,
                          openid: r,
                          fskey: i,
                          access_token: i,
                          appid: this.app,
                          app: this.app,
                          req_session: this.req_session,
                          floded_type: 1,
                          importance_num: this.importanceNum,
                        })
                      );
                    case 17:
                      (c = t.sent),
                        (e = p.adaptQueryStockNewsListResp(c)),
                        (a = (c && c.data && c.data.req_session) || "");
                    case 19:
                      t.next = 24;
                      break;
                    case 21:
                      return (
                        (t.prev = 21),
                        (t.t0 = t.catch(6)),
                        t.abrupt(
                          "return",
                          ((this.loading = !1),
                          this.list &&
                            0 === this.list.length &&
                            (this.error = "error"),
                          void this.$nextTick(function () {
                            m.$emit("loaded");
                          }))
                        )
                      );
                    case 24:
                      if (
                        ((this.loading = !1),
                        (this.req_session = a),
                        (this.hasNext = 0 !== e.has_next),
                        !((l = e.news_list || []).length > 0))
                      ) {
                        t.next = 29;
                        break;
                      }
                      return (
                        (u = this.formatData(p.filterEmptyTitleNews(l))),
                        t.abrupt(
                          "return",
                          ((this.list = this.list.concat(u)),
                          (this.last_score = e.next_page_cursor || ""),
                          (this.importanceNum = e.importance_num || 0),
                          (this.curPage += 1),
                          this.firstLoaded || (this.firstLoaded = !0),
                          this.$nextTick(function () {
                            m.$emit("loaded");
                          }),
                          0 == e.has_next)
                        )
                      );
                    case 29:
                      this.$nextTick(function () {
                        m.$emit("loaded");
                      });
                    case 30:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              this,
              [[6, 21]]
            );
          })),
          new Promise(function (t, r) {
            var o = function (e) {
                try {
                  n(i.next(e));
                } catch (e) {
                  r(e);
                }
              },
              s = function (e) {
                try {
                  n(i.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              n = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, s);
              };
            n((i = i.apply(e, null)).next());
          })
        );
        var e, i;
      },
      goDetail: function (e, t) {
        var i;
        e.type = t ? e.news_type : e.type;
        var r = {
          id: e.id,
          title: encodeURIComponent(e.title),
          date: t ? e.time || "" : e.publish_time,
          source: e.src,
          zxtype: e.type,
          market: this.market,
          scode: this.scode,
          columnfrom: "news",
        };
        t && this.hqBridge.report("hq.stock_detail.top_news");
        var o = e.articletype || "",
          s = { newsid: e.id, stockid: this.symbol, type: e.typeStr };
        if (27 == o) {
          var n =
            "mp" === this.hqBridge.ENV
              ? "/pages/report/AIFinancial/index"
              : "/information/AIFinancialReport";
          return (
            this.hqBridge.routeTo({ path: n, query: r }),
            void this.hqBridge.report("hq.detail.news.financialreport_click", s)
          );
        }
        if (14 == o)
          return (
            this.hqBridge.report("hq.detail.news.live_click", s),
            void ("mp" === this.hqBridge.ENV
              ? this.hqBridge.routeTo({
                  path: "/pages/live/liveDetail",
                  query: { id: e.id, stockid: this.symbol },
                })
              : "wzq_light" === this.hqBridge.ENV
              ? this.hqBridge.routeTo({
                  path: "/information/liveDetail",
                  query: { id: e.id, stockid: this.symbol },
                })
              : ((i =
                  "https://gu.qq.com/resources/shy/news/live/index.html#/detail?live_news_id=".concat(
                    e.id
                  )),
                this.hqBridge.openExtraWebview(i)))
          );
        if (7 == o || 8 == o)
          return (
            this.hqBridge.report("hq.detail.news.video_click", s),
            void ("mp" === this.hqBridge.ENV
              ? this.hqBridge.routeTo({
                  path: "/pages/newsCon/video/videoDetail",
                  query: { newsId: e.id, id: e.id, stockid: this.symbol },
                })
              : "wzq_light" === this.hqBridge.ENV
              ? this.hqBridge.routeTo({
                  path: "/information/videoDetail",
                  query: { newsId: e.id, id: e.id, stockid: this.symbol },
                })
              : ((i =
                  "https://wzq.tenpay.com/mp/v2/index.html#/information/videoDetail?id="
                    .concat(e.id, "&stockid=")
                    .concat(this.symbol)),
                this.hqBridge.openExtraWebview(i)))
          );
        if (100 == o && 1 == +e.special_type)
          return (
            (i =
              "mp" === this.hqBridge.ENV
                ? "/pages/live/liveCombine"
                : "/information/liveCombine"),
            (r.date = e.publish_time),
            this.hqBridge.routeTo({ path: i, query: r }),
            void this.hqBridge.report("stock_detail.news", s)
          );
        if (0 == e.type || 1 == e.type || 2 == e.type) {
          var a =
            "mp" === this.hqBridge.ENV
              ? "/pages/newsCon/newsDetail/main"
              : "/information/detail";
          this.hqBridge.routeTo({ path: a, query: r }),
            this.hqBridge.report("stock_detail.news", s);
        } else
          4 == e.type
            ? ((i =
                "mp" === this.hqBridge.ENV
                  ? "/pages/newsCon/topic/main"
                  : "/information/subject"),
              this.hqBridge.routeTo({ path: i, query: r }))
            : 14 == e.type
            ? ((i =
                "https://gu.qq.com/resources/shy/news/live/index.html#/detail?live_news_id=".concat(
                  e.id
                )),
              this.hqBridge.openExtraWebview(i))
            : 5 == e.type &&
              ((r = { nid: e.id }),
              (i = "/pages/comment/detailView/main"),
              this.hqBridge.routeTo({ path: i, query: r }),
              this.hqBridge.report("hq.stock_detail.comment_detail", s));
      },
      formatData: function (e) {
        var t = this,
          i = /[\u4e00-\u9fa5]/,
          r = function (e) {
            return {
              id: e.news_id,
              title: e.title,
              close: e.close,
              importance: e.importance,
              typeStr: e.item_type_tag,
              src: e.media_name,
              news_type: e.news_type,
              type: e.item_type,
              has_translation: e.has_translation,
              time: e.time,
              formatTime: t.formatTime(e.time),
              articletype: e.article_type,
              special_type: e.special_type,
              publish_time: e.publish_time,
              top_stock: e.top_stock,
              flodedTip: e.floded_tip,
              isChinese: i.test(e.title || ""),
            };
          };
        return (e || []).map(function (e) {
          var t = r(e),
            i = e.folded_items || [];
          return (
            i.length > 0
              ? ((t.close = "init"),
                (t.nextFlodedNum = i.length),
                (t.foldData = i.map(r)))
              : (t.nextFlodedNum = 0),
            t
          );
        });
      },
      onShowAiEntry: function () {
        (this.showAiEntry = !0), this.$emit("showAiEntry");
      },
      onHideAiEntry: function () {
        (this.showAiEntry = !1), this.$emit("hideAiEntry");
      },
      onShowAiDialog: function (t) {
        var i,
          h =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.isMp &&
          l.StockBridge.busEmit(
            "showAiDialog",
            ((i = (function (t, i) {
              for (var r in i || (i = {})) n.call(i, r) && c(t, r, i[r]);
              if (s) {
                var o,
                  l = e(s(i));
                try {
                  for (l.s(); !(o = l.n()).done; ) {
                    r = o.value;
                    a.call(i, r) && c(t, r, i[r]);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
              return t;
            })({}, t)),
            r(i, o({ needAnswer: h })))
          );
      },
    },
  };
Array ||
  (
    l.resolveComponent("SearchAiBar") +
    l.resolveComponent("NewsItemZxgObserver") +
    l.resolveComponent("NoData") +
    l.resolveComponent("st-status")
  )();
var g = l._export_sfc(y, [
  [
    "render",
    function (e, t, i, r, o, s) {
      return l.e(
        { a: s.symbol && o.isMp },
        s.symbol && o.isMp
          ? {
              b: l.o(s.onShowAiDialog, 1981),
              c: l.o(s.onShowAiEntry, 1982),
              d: l.o(s.onHideAiEntry, 1983),
              e: l.p({
                "report-prefix": "jichu.ai_xiaobao",
                "report-info": s.reportInfo,
                scene: "xiaobao",
                "content-id": s.symbol,
              }),
            }
          : {},
        {
          f: o.showAiEntry,
          g: l.f(o.list, function (e, t, i) {
            return l.e(
              {
                a: l.t(e.title),
                b: l.n(e.isChinese ? "chinese" : "english"),
                c: 14 == e.articletype,
              },
              (e.articletype, {}),
              { d: 14 == e.articletype },
              (e.articletype, {}),
              { e: 7 == e.articletype || 8 == e.articletype },
              (7 == e.articletype || e.articletype, {}),
              { f: 7 == e.articletype || 8 == e.articletype },
              (7 == e.articletype || e.articletype, {}),
              { g: 1 == e.importance },
              1 == e.importance
                ? { h: l.t(e.top_stock ? "置顶" : "重要") }
                : {},
              { i: e.typeStr },
              e.typeStr ? { j: l.t(e.typeStr) } : {},
              { k: e.src },
              e.src ? { l: l.t(e.src) } : {},
              { m: e.has_translation },
              (e.has_translation, {}),
              {
                n: l.n(!0 === e.close && "hideit"),
                o: l.n(!1 === e.close && "showit"),
                p: e.nextFlodedNum,
              },
              e.nextFlodedNum
                ? {
                    q: l.t(
                      e.flodedTip
                        ? "还有".concat(e.flodedTip)
                        : "还有".concat(e.nextFlodedNum, "条公告")
                    ),
                    r: l.n(!0 === e.close && "showit"),
                    s: l.n(!1 === e.close && "hideit"),
                    t: l.o(
                      function (i) {
                        return s.openFolder(t, !1, e.src, e.type);
                      },
                      1984,
                      e.id
                    ),
                  }
                : {},
              {
                v: l.t(e.formatTime),
                w: l.o(
                  function (t) {
                    return s.goDetail(e, !1);
                  },
                  1985,
                  e.id
                ),
                x: e.foldData && e.foldData.length > 0,
              },
              e.foldData && e.foldData.length > 0
                ? {
                    y: l.f(e.foldData, function (i, r, o) {
                      return l.e(
                        { a: l.t(i.title) },
                        (e.articletype, {}),
                        (e.articletype, {}),
                        (7 == e.articletype || e.articletype, {}),
                        (7 == e.articletype || e.articletype, {}),
                        { b: 1 == i.importance },
                        (i.importance, {}),
                        { c: i.typeStr },
                        i.typeStr ? { d: l.t(i.typeStr) } : {},
                        { e: i.src },
                        i.src ? { f: l.t(i.src) } : {},
                        { g: i.has_translation },
                        (i.has_translation, {}),
                        {
                          h: l.n(
                            r === e.nextFlodedNum - 1 ? "hideit" : "showit"
                          ),
                          i: r === e.nextFlodedNum - 1,
                        },
                        r === e.nextFlodedNum - 1
                          ? {
                              j: l.t(
                                e.flodedTip
                                  ? "收起".concat(e.flodedTip)
                                  : "收起".concat(e.nextFlodedNum, "条公告")
                              ),
                              k: l.n(!1 === e.close && "showit"),
                              l: l.n(!0 === e.close && "hideit"),
                              m: l.o(
                                function (i) {
                                  return s.openFolder(t, !0, e.src, e.type);
                                },
                                1986,
                                i.id
                              ),
                            }
                          : {},
                        {
                          n: l.t(i.formatTime),
                          o: i.id,
                          p: l.o(
                            function (e) {
                              return s.goDetail(i, !1);
                            },
                            1987,
                            i.id
                          ),
                        }
                      );
                    }),
                    z: l.n(e.isChinese ? "chinese" : "english"),
                    A: 14 == e.articletype,
                    B: 14 == e.articletype,
                    C: 7 == e.articletype || 8 == e.articletype,
                    D: 7 == e.articletype || 8 == e.articletype,
                    E: l.n(e.close ? "up" : "down"),
                    F: e.close ? 0 : 120 * e.nextFlodedNum + "px",
                    G: l.n(e.close ? "close" : "open"),
                  }
                : {},
              {
                H: "b068eae4-1-" + i,
                I: l.p({ item: e, symbol: s.symbol }),
                J: e.id,
              }
            );
          }),
          h: !(o.loading || o.error || (o.list && 0 !== o.list.length)),
        },
        (o.loading || o.error || (o.list && o.list.length), {}),
        { i: o.error && "zxg_xcx" !== i.app },
        o.error && "zxg_xcx" !== i.app
          ? {
              j: l.o(function (e) {
                return s.retryTab();
              }, 1988),
              k: l.p({ type: o.error }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b068eae4"],
]);
wx.createComponent(g);
