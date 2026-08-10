var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../common/vendor.js"),
  n = require("../AttentionPoint.js"),
  i = {
    props: ["spots", "activeIndex", "onNewsBarFold", "onNewsClick", "pageType"],
    computed: {
      list: function () {
        return Array.isArray(this.spots) ? this.spots : [this.spots];
      },
    },
    watch: {
      activeIndex: function () {
        this.$forceUpdate();
      },
    },
    created: function () {
      "nopage" !== this.pageType && window.scrollTo(0, 0);
    },
    methods: {
      concept_time: function (e) {
        if (!e) return "";
        var t = 864e5,
          n = new Date(),
          i = new Date(e.toString().replace(/-/g, "/"));
        "number" == typeof e && (i = new Date(e));
        var r = n.getTime() - i.getTime();
        return (
          (r = Math.abs(r)),
          n.getFullYear() !== i.getFullYear()
            ? this.format(i, "yyyy-MM-dd")
            : Math.floor(r / t) >= 1 || n.getDate() !== i.getDate()
            ? this.format(i, "MM-dd")
            : Math.floor((24 * r) / t) >= 1 ||
              Math.floor((24 * r * 60) / t) >= 5
            ? this.format(i, "hh:mm")
            : "刚刚"
        );
      },
      format: function (e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "yyyyMMdd";
        return e
          ? ((t =
              "number" == typeof e
                ? new Date(e)
                : "function" == typeof e.getFullYear
                ? e
                : new Date(e.toString().replace(/-/g, "/"))),
            n
              .replace(/y{4}/, t.getFullYear())
              .replace(/M{2}/, this.padLeft(t.getMonth() + 1))
              .replace(/d{2}/, this.padLeft(t.getDate()))
              .replace(/h{2}/, this.padLeft(t.getHours()))
              .replace(/m{2}/, this.padLeft(t.getMinutes()))
              .replace(/s{2}/, this.padLeft(t.getSeconds()))
              .replace(/w{1}/, "日一二三四五六"[t.getDay()]))
          : "";
      },
      padLeft: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          i = e.toString();
        return i.length < n
          ? t.repeat(n).replace(new RegExp("\\d{".concat(i.length, "}$")), i)
          : i;
      },
      toggleNewsList: function (t) {
        return (
          (i = this),
          null,
          (r = e().mark(function i() {
            var r, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t.newsListVisible = !t.newsListVisible),
                        t.newsListLoaded ||
                          !t.related_news.every(function (e) {
                            return void 0 === e.news_title;
                          }))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (r = t.related_news.join()),
                        (e.next = 4),
                        n.getConceptNewsSummary(r)
                      );
                    case 4:
                      (s = e.sent),
                        (t.relatednewsList = s.news_summary_list),
                        (t.newsListLoaded = !0);
                    case 6:
                      this.$forceUpdate();
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (e, t) {
            var n = function (e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              a = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(n, s);
              };
            a((r = r.apply(i, null)).next());
          })
        );
        var i, r;
      },
      onNewsItemClick: function (e) {
        this.showNewsDetail(e);
      },
      showNewsDetail: function (e) {
        var n = {
          type: 4,
          id: e.news_id,
          title: e.title,
          source: e.source_media,
          time: new Date(e.publish_time),
          trace_id: "",
          scene_id: 3,
          from: "",
        };
        t.StockRouter.routeTo({ name: "informationDetail", query: n });
      },
    },
  },
  r = t._export_sfc(i, [
    [
      "render",
      function (e, n, i, r, s, a) {
        return t.e(
          { a: a.list.length > 0 },
          a.list.length > 0
            ? {
                b: t.f(a.list, function (e, n, r) {
                  return t.e(
                    a.list.length > 1
                      ? {
                          a: t.n(n == a.list.length - 1 ? "line-last" : ""),
                          b: t.n(0 == n ? "line-first" : ""),
                        }
                      : {},
                    {
                      c: t.n(0 == n ? "current" : ""),
                      d: t.t(a.concept_time(e.hot_time)),
                      e: t.t(e.hot_reason[0]),
                      f: e.related_news && e.related_news.length > 0,
                    },
                    e.related_news && e.related_news.length > 0
                      ? t.e(
                          {
                            g: t.t(e.related_news.length),
                            h: !e.newsListVisible,
                          },
                          (e.newsListVisible, {}),
                          {
                            i: t.n(e.newsListVisible ? "active" : ""),
                            j: t.o(
                              function (t) {
                                return a.toggleNewsList(e);
                              },
                              3202,
                              n
                            ),
                            k:
                              e.newsListVisible &&
                              e.relatednewsList &&
                              e.relatednewsList.length > 0,
                          },
                          e.newsListVisible &&
                            e.relatednewsList &&
                            e.relatednewsList.length > 0
                            ? {
                                l: t.f(e.relatednewsList, function (e, n, i) {
                                  return {
                                    a: t.t(e.news_title),
                                    b: t.t(e.news_src),
                                    c: e.news_id,
                                    d: t.o(
                                      function (t) {
                                        return a.onNewsItemClick(e);
                                      },
                                      3203,
                                      e.news_id
                                    ),
                                  };
                                }),
                              }
                            : {}
                        )
                      : {},
                    { m: t.n(n == i.activeIndex ? "blink" : ""), n: n }
                  );
                }),
                c: a.list.length > 1,
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-81ee10fe"],
  ]);
wx.createComponent(r);
