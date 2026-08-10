var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (t, e, r) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  h = function (t, o) {
    for (var r in o || (o = {})) s.call(o, r) && c(t, r, o[r]);
    if (n) {
      var i,
        h = e(n(o));
      try {
        for (h.s(); !(i = h.n()).done; ) {
          r = i.value;
          a.call(o, r) && c(t, r, o[r]);
        }
      } catch (t) {
        h.e(t);
      } finally {
        h.f();
      }
    }
    return t;
  },
  p = function (t, e) {
    return r(t, i(e));
  },
  l = require("api.js"),
  u = require("../stock-news-base/service/news/gray.js"),
  d = require("util.js"),
  m = require("../stock-hq-data/index.js"),
  _ = require("../../../../common/vendor.js"),
  f = {
    components: {
      NoData: function () {
        return "./common/NoData.js";
      },
      SearchAiBar: function () {
        return "../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
      SpotChart: null,
    },
    inject: ["hqBridge"],
    props: {
      scode: String,
      market: String,
      isPrimaryIndustry: Boolean,
      skin: String,
      isShowXiaobaoAI: { type: Boolean, require: !1, default: !1 },
    },
    data: function () {
      return {
        isMp: _.StockBridge.ENV === _.EnvTypeEnum.MP,
        list: [],
        pages: 1,
        maxPage: 999,
        loading: !1,
        brief: "",
        curr_spot: null,
        last_spot: null,
        targetcode: "",
        history_concept_quotes: "",
        history_hot_spot: "",
        rank: 0,
        offset: 0,
        last_score: "",
        importanceNum: 0,
        hasNext: !0,
        showAiEntry: !1,
      };
    },
    computed: {
      symbol: function () {
        return m.utils.getSymbol(this.market, this.scode);
      },
      reportInfo: function () {
        return { stockid: this.symbol };
      },
    },
    created: function () {
      var t = new _.dayjs();
      (this.nowYear = t.format("YYYY")),
        (this.nowDay = t.format("YYYY-MM-DD")),
        (this.yesterday = t.subtract(1, "days").format("YYYY-MM-DD"));
    },
    beforeDestroy: function () {
      this.list = [];
    },
    mounted: function () {
      var t = this,
        e = this.isPrimaryIndustry
          ? [this.getData(!1)]
          : [this.getData(!1), this.getHotSpot()];
      Promise.all(e)
        .then(function () {
          t.$emit("loaded");
        })
        .catch(function () {
          t.$emit("loaded");
        });
    },
    methods: {
      padLeft: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0",
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          r = t.toString();
        return r.length < o
          ? e.repeat(o).replace(new RegExp("\\d{".concat(r.length, "}$")), r)
          : r;
      },
      date: function (t) {
        var e,
          o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "yyyyMMdd";
        return t
          ? ((e =
              "number" == typeof t
                ? new Date(t)
                : "function" == typeof t.getFullYear
                ? t
                : new Date(t.toString().replace(/-/g, "/"))),
            o
              .replace(/y{4}/, e.getFullYear())
              .replace(/M{2}/, this.padLeft(e.getMonth() + 1))
              .replace(/d{2}/, this.padLeft(e.getDate()))
              .replace(/h{2}/, this.padLeft(e.getHours()))
              .replace(/m{2}/, this.padLeft(e.getMinutes()))
              .replace(/s{2}/, this.padLeft(e.getSeconds()))
              .replace(/w{1}/, "日一二三四五六"[e.getDay()]))
          : "";
      },
      concept_time: function (t) {
        if (!t) return "";
        var e = 864e5,
          o = new Date(),
          r = new Date(t.toString().replace(/-/g, "/")),
          i = o.getTime() - r.getTime();
        return (
          (i = Math.abs(i)),
          o.getFullYear() !== r.getFullYear()
            ? this.date(r, "yyyy-MM-dd hh:mm")
            : Math.floor(i / e) >= 1 || o.getDate() !== r.getDate()
            ? this.date(r, "MM-dd hh:mm")
            : Math.floor((24 * i) / e) >= 1
            ? this.date(r, "hh:mm")
            : "".concat(Math.max(Math.floor((24 * i * 60) / e), 1), "分钟前")
        );
      },
      onSpotActivate: function (t) {
        if (t && t.hot_reason) {
          var e = Array.isArray(t.hot_reason) ? t.hot_reason[0] : t.hot_reason;
          (t.hot_reason = e), (this.curr_spot = t);
        }
        t ||
          ((this.curr_spot = null),
          this.hqBridge.report("hq.plate.detail.historyhotpoint.touch"));
      },
      goHotPoint: function () {
        this.hqBridge.report("hq.plate.detail.tophotpointmore.click");
        var t =
          "https://wzq.tenpay.com/mp/v2/index.html#/strategy/concept/detail?concept_code=".concat(
            this.targetcode
          );
        this.hqBridge.openExtraWebview(t);
      },
      formatZero: function (t) {
        return t < 10 ? "0".concat(t) : t;
      },
      formatTime: function (t) {
        var e = new _.dayjs(t),
          o = e.format("YYYY-MM-DD"),
          r = e.format("YYYY");
        return o === this.nowDay
          ? e.format("HH:mm")
          : r === this.nowYear
          ? e.format("MM-DD")
          : o;
      },
      getHotSpot: function () {
        var t = this,
          e = this.isMp ? { addWzqSign: !0 } : {};
        return l
          .getHotSpotInfo(
            this.hqBridge,
            h(
              {
                _h5ver: "2.0.1",
                exchange: 12,
                plate_code: this.scode,
                source: "wzq",
                time: new Date().getTime(),
                type: "1",
                user_type: 5,
              },
              e
            )
          )
          .then(function (e) {
            if (e && 0 == e.retcode && e.hot_spot) {
              var o;
              (t.history_concept_quotes = JSON.stringify(
                e.hot_spot.history_concept_quotes
              )),
                (t.history_hot_spot = e.hot_spot.history_hot_spot),
                (t.brief = e.hot_spot.hot_spot_brief),
                (t.targetcode = e.xg_plate_code),
                (t.rank = e.hot_spot.rank);
              for (
                var r = e.hot_spot.history_concept_quotes.length - 1;
                r >= 0 &&
                ((o = e.hot_spot.history_concept_quotes[r]), !t.last_spot);
                r--
              )
                for (
                  var i = 0, n = e.hot_spot.history_hot_spot.length;
                  i < n;
                  i++
                )
                  if (
                    e.hot_spot.history_hot_spot[i].hot_time.split(" ")[0] ==
                    o[0]
                  ) {
                    (t.last_spot = e.hot_spot.history_hot_spot[i]),
                      (t.last_spot.hot_reason = Array.isArray(
                        t.last_spot.hot_reason
                      )
                        ? t.last_spot.hot_reason[0]
                        : t.last_spot.hot_reason);
                    break;
                  }
            }
          });
      },
      toPlateViewModel: function (t) {
        return p(h({}, t), {
          id: t.news_id,
          src: t.media_name,
          source: t.media_name,
          articletype: t.article_type,
          type: t.item_type,
        });
      },
      getData: function () {
        var e,
          o,
          r,
          i =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (
          (e = this),
          (o = null),
          (r = t().mark(function () {
            var e,
              o,
              r,
              n,
              s = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !(
                          this.loading ||
                          this.pages > this.maxPage ||
                          ("oem" !== this.hqBridge.ENV && !this.hasNext)
                        )
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 2:
                      if (
                        ((this.loading = !0),
                        (e = {
                          _h5ver: "2.0.1",
                          appid: "wzq",
                          page_size: 10,
                          page_start: this.pages,
                          symbol: "pt".concat(this.scode),
                          offset: this.offset,
                          type: 2,
                          importance_num: this.importanceNum,
                        }),
                        "oem" !== this.hqBridge.ENV)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        l
                          .getInformationNew(this.hqBridge, e)
                          .then(function (t) {
                            s.loading = !1;
                            var e = t.data;
                            if (e) {
                              e.data &&
                                e.data.newslist &&
                                e.data.newslist.length > 0 &&
                                ((s.list = s.list.concat(
                                  d.filterEmptyTitleNews(e.data.newslist)
                                )),
                                s.pages++);
                              var o = e || {},
                                r = o.offset,
                                n = o.data,
                                a = void 0 === n ? [] : n,
                                c = o.has_next,
                                h = o.last_score;
                              return (
                                (s.list = s.list.concat(
                                  d.filterEmptyTitleNews(a)
                                )),
                                (s.pages += 1),
                                (s.offset = r),
                                (s.last_score = h || ""),
                                (s.importanceNum =
                                  e.importance_num || s.importanceNum),
                                i &&
                                  s.$nextTick(function () {
                                    s.$emit("loaded");
                                  }),
                                0 == c
                              );
                            }
                            i &&
                              s.$nextTick(function () {
                                s.$emit("loaded");
                              });
                          })
                          .catch(function () {
                            (s.loading = !1),
                              i &&
                                s.$nextTick(function () {
                                  s.$emit("loaded");
                                });
                          })
                      );
                    case 6:
                      return (
                        (t.prev = 6),
                        (t.next = 9),
                        u.isNewsGrayUser("queryStockNewsList")
                      );
                    case 9:
                      if (!t.sent) {
                        t.next = 15;
                        break;
                      }
                      return (
                        (t.next = 12),
                        d.queryStockNewsList({
                          stock_code: "pt".concat(this.scode),
                          type: 2,
                          limit: 10,
                          last_page_cursor: this.last_score || "",
                          importance_num: this.importanceNum,
                          get_import: 0,
                        })
                      );
                    case 12:
                      (o = t.sent), (t.next = 19);
                      break;
                    case 15:
                      return (
                        (t.next = 17),
                        l.getNewsInfo(
                          this.hqBridge,
                          h({ last_score: this.last_score }, e)
                        )
                      );
                    case 17:
                      (r = t.sent), (o = d.adaptQueryStockNewsListResp(r));
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
                          void (
                            i &&
                            this.$nextTick(function () {
                              s.$emit("loaded");
                            })
                          ))
                        )
                      );
                    case 24:
                      return (
                        (this.loading = !1),
                        (n = (o.news_list || [])
                          .reduce(function (t, e) {
                            return t.concat(e, e.folded_items || []);
                          }, [])
                          .map(function (t) {
                            return s.toPlateViewModel(t);
                          })),
                        t.abrupt(
                          "return",
                          (n.length > 0 &&
                            ((this.list = this.list.concat(
                              d.filterEmptyTitleNews(n)
                            )),
                            (this.pages += 1)),
                          (this.offset = o.offset),
                          (this.last_score = o.next_page_cursor || ""),
                          (this.importanceNum =
                            o.importance_num || this.importanceNum),
                          (this.hasNext = 0 !== o.has_next),
                          i &&
                            this.$nextTick(function () {
                              s.$emit("loaded");
                            }),
                          0 == o.has_next)
                        )
                      );
                    case 27:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[6, 21]]
            );
          })),
          new Promise(function (t, i) {
            var n = function (t) {
                try {
                  a(r.next(t));
                } catch (t) {
                  i(t);
                }
              },
              s = function (t) {
                try {
                  a(r.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, s);
              };
            a((r = r.apply(e, o)).next());
          })
        );
      },
      goNews: function (t) {
        var e = { newsid: t.id, stockid: this.symbol };
        this.hqBridge.report("stock_detail.news", void 0, void 0, e);
        var o,
          r = t.articletype || "";
        if (14 == r)
          return (
            this.hqBridge.report(
              "hq.detail.news.live_click",
              void 0,
              void 0,
              e
            ),
            (o =
              "https://wzq.tenpay.com/mp/v2/index.html?#/information/liveDetail?id="
                .concat(t.id, "&stockid=")
                .concat(this.symbol)),
            void this.hqBridge.openExtraWebview(o)
          );
        if (7 == r || 8 == r)
          return (
            this.hqBridge.report(
              "hq.detail.news.video_click",
              void 0,
              void 0,
              e
            ),
            (o =
              "https://wzq.tenpay.com/mp/v2/index.html#/information/videoDetail?id="
                .concat(t.id, "&stockid=")
                .concat(this.symbol)),
            void this.hqBridge.openExtraWebview(o)
          );
        var i =
            "mp" === this.hqBridge.ENV
              ? "/pages/newsCon/newsDetail/main"
              : "/information/detail",
          n = {
            id: t.id,
            title: encodeURIComponent(t.title),
            date: t.publish_time,
            source: t.source,
            zxtype: t.type,
            market: this.market,
            scode: this.scode,
          };
        this.hqBridge.routeTo({ path: i, query: n });
      },
      onShowAiEntry: function () {
        this.showAiEntry = !0;
      },
      onHideAiEntry: function () {
        this.showAiEntry = !1;
      },
      onShowAiDialog: function (t) {
        var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.isMp &&
          _.StockBridge.busEmit("showAiDialog", p(h({}, t), { needAnswer: e }));
      },
    },
  };
Array ||
  (
    _.resolveComponent("SearchAiBar") +
    _.resolveComponent("SpotChart") +
    _.resolveComponent("NoData")
  )();
var y = _._export_sfc(f, [
  [
    "render",
    function (t, e, o, r, i, n) {
      return _.e(
        { a: o.isShowXiaobaoAI },
        o.isShowXiaobaoAI
          ? {
              b: _.o(n.onShowAiDialog, 1976),
              c: _.p({
                "report-prefix": "jichu.ai_xiaobao",
                "report-info": n.reportInfo,
                scene: "xiaobao",
                "content-id": n.symbol,
              }),
            }
          : {},
        {
          d:
            i.history_concept_quotes &&
            i.history_concept_quotes.length > 0 &&
            i.history_hot_spot &&
            i.history_hot_spot.length > 0,
        },
        i.history_concept_quotes &&
          i.history_concept_quotes.length > 0 &&
          i.history_hot_spot &&
          i.history_hot_spot.length > 0
          ? _.e(
              { e: 0 != i.rank },
              0 != i.rank
                ? _.e(
                    { f: ["", "st", "nd", "rd"][i.rank] },
                    ["", "st", "nd", "rd"][i.rank]
                      ? { g: _.n(["", "st", "nd", "rd"][i.rank]) }
                      : {},
                    {
                      h: _.t(i.rank),
                      i: _.o(function () {
                        return n.goHotPoint && n.goHotPoint.apply(n, arguments);
                      }, 1977),
                    }
                  )
                : {},
              { j: 0 == i.rank },
              0 == i.rank
                ? {
                    k: _.t(i.brief || "查看更多"),
                    l: _.o(function () {
                      return n.goHotPoint && n.goHotPoint.apply(n, arguments);
                    }, 1978),
                  }
                : {},
              { m: "" == i.brief },
              "" == i.brief
                ? {
                    n: _.t(
                      n.concept_time(
                        (i.curr_spot && i.curr_spot.hot_time) ||
                          (i.last_spot && i.last_spot.hot_time)
                      )
                    ),
                    o: _.t(
                      (i.curr_spot && i.curr_spot.hot_reason) ||
                        (i.last_spot && i.last_spot.hot_reason)
                    ),
                    p:
                      (i.curr_spot && i.curr_spot.hot_time) ||
                      (i.last_spot && i.last_spot.hot_time)
                        ? "visible"
                        : "hidden",
                  }
                : {},
              { q: !i.isMp && "" == i.brief },
              i.isMp || "" != i.brief
                ? {}
                : {
                    r: _.p({
                      spots: i.history_hot_spot,
                      quotes: i.history_concept_quotes,
                      limit: 150,
                      "on-spot-activate": n.onSpotActivate,
                    }),
                    s: _.o(function () {}, 1979),
                  }
            )
          : {},
        { t: i.list.length > 0 },
        i.list.length > 0
          ? {
              v: _.f(i.list, function (t, e, o) {
                return _.e(
                  { a: _.t(t.title), b: 14 == t.articletype },
                  (t.articletype, {}),
                  { c: 14 == t.articletype },
                  (t.articletype, {}),
                  { d: 7 == t.articletype || "8" == t.articletype },
                  (7 == t.articletype || t.articletype, {}),
                  { e: 7 == t.articletype || "8" == t.articletype },
                  (7 == t.articletype || t.articletype, {}),
                  { f: 1 == t.importance },
                  1 == t.importance
                    ? { g: _.t(t.top_stock ? "置顶" : "重要") }
                    : {},
                  {
                    h: _.t(t.src),
                    i: _.t(n.formatTime(t.time)),
                    j: e,
                    k: _.o(
                      function (e) {
                        return n.goNews(t);
                      },
                      1980,
                      e
                    ),
                  }
                );
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-f6bcaff9"],
]);
wx.createComponent(y);
