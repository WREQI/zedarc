var e = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  p = function (e, t) {
    for (var n in t || (t = {})) s.call(t, n) && c(e, n, t[n]);
    if (r) {
      var i,
        p = a(r(t));
      try {
        for (p.s(); !(i = p.n()).done; ) {
          n = i.value;
          o.call(t, n) && c(e, n, t[n]);
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
    return e;
  },
  u = require("../../../../common/vendor.js"),
  l = require("api.js"),
  h = require("../stock-news-base/service/news/gray.js"),
  d = require("util.js"),
  f = require("../stock-hq-data/index.js"),
  y = require("../stock-news-sdk/index.js"),
  m = function (e, t, n, a) {
    y.sdk.navigateToNewsDetail(p({ instance: e, id: t, title: n }, a));
  },
  g = function (e, t, n) {
    y.sdk.navigateToVideoDetail(p({ instance: e, id: t }, n));
  },
  w = new Map([
    [
      { type: 0, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 1, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 2, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 3, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 1, specalType: 2 },
      function (e, t, n) {
        !(function (e, t, n) {
          y.sdk.navigateToMorningReport(p({ instance: e, id: t }, n));
        })(e, t.id || t.news_id, n);
      },
    ],
    [
      { type: 4, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n, a) {
          y.sdk.navigateToNewsSubject(p({ instance: e, id: t, title: n }, a));
        })(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 4, specalType: 1 },
      function (e, t) {
        !(function (e, t) {
          y.sdk.navigateToLiveCalendar({ instance: e, date: t });
        })(e, t.date);
      },
    ],
    [
      { type: 7, specalType: 0 },
      function (e, t, n) {
        g(e, t.id || t.news_id, n);
      },
    ],
    [
      { type: 8, specalType: 0 },
      function (e, t, n) {
        g(e, t.id || t.news_id, n);
      },
    ],
    [{ type: 9, specalType: 0 }, function (e, t, n) {}],
    [{ type: 9, specalType: 0 }, function (e, t, n) {}],
    [{ type: 13, specalType: 0 }, function (e, t, n) {}],
    [
      { type: 14, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n) {
          y.sdk.navigateToLiveDetail(p({ instance: e, id: t }, n));
        })(e, t.id || t.news_id, n);
      },
    ],
    [{ type: 19, specalType: 0 }, function (e, t, n) {}],
    [{ type: 21, specalType: 0 }, function (e, t, n) {}],
    [{ type: 26, specalType: 0 }, function (e, t, n) {}],
    [
      { type: 27, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n, a) {
          y.sdk.navigateToAIFinancialReport(
            p({ instance: e, id: t, title: n }, a)
          );
        })(e, t.id || t.news_id, t.title, n);
      },
    ],
  ]),
  v = {
    inject: ["hqBridge"],
    props: { scode: String, market: String, app: String },
    components: {
      InverseRate: function () {
        return "./components/InverseRate.js";
      },
      NoData: function () {
        return "./common/NoData.js";
      },
    },
    data: function () {
      return {
        list: [],
        pages: 1,
        maxPage: 999,
        loading: !1,
        chartData: [],
        jgList: [],
        showChart: !1,
        lastScore: "",
        hasNext: !0,
      };
    },
    computed: {
      symbol: function () {
        return f.utils.getSymbol(this.market, this.scode);
      },
    },
    created: function () {
      var e = new u.dayjs();
      (this.nowYear = e.format("YYYY")),
        (this.nowDay = e.format("YYYY-MM-DD")),
        (this.yesterday = e.subtract(1, "days").format("YYYY-MM-DD"));
    },
    mounted: function () {
      this.getData(),
        this.getInvestRateData(),
        this.hqBridge.report("hq.gegu_xiangqingye.newsGroup.report_brow");
    },
    methods: {
      getInvestRateData: function () {
        var e = this;
        l.getInvestRate(this.hqBridge, this.symbol)
          .then(function (t) {
            if (t && 0 !== t.length) {
              var n = t || {},
                a = n.pjtj,
                i = void 0 === a ? {} : a,
                r = n.jgpj,
                s = (void 0 === r ? {} : r).info,
                o = void 0 === s ? [] : s;
              e.jgList = o;
              var c = [];
              (c[0] = i.mc || { name: "卖出", num: 0 }),
                (c[1] = i.jc || { name: "减持", num: 0 }),
                (c[2] = i.zx || { name: "中性", num: 0 }),
                (c[3] = i.zc || { name: "增持", num: 0 }),
                (c[4] = i.mr || { name: "买入", num: 0 }),
                (e.chartData = [].concat(c));
              var p = 0;
              c.forEach(function (e) {
                p += e.num || 0;
              }),
                (p > 0 || e.jgList.length > 0) && (e.showChart = !0);
            }
          })
          .catch(function (e) {});
      },
      formatZero: function (e) {
        return e < 10 ? "0".concat(e) : e;
      },
      formatTime: function (e) {
        var t = new u.dayjs(e),
          n = t.format("YYYY-MM-DD"),
          a = t.format("YYYY");
        return n === this.nowDay
          ? t.format("HH:mm")
          : a === this.nowYear
          ? t.format("MM-DD")
          : n;
      },
      formatType: function (e) {
        return e.item_type_tag || "";
      },
      getData: function () {
        return (
          (e = this),
          null,
          (t = n().mark(function e() {
            var t,
              a,
              i,
              r = this;
            return n().wrap(
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
                        (e.prev = 3),
                        (e.next = 6),
                        h.isNewsGrayUser("queryStockNewsList")
                      );
                    case 6:
                      if (!e.sent) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.next = 9),
                        d.queryStockNewsList({
                          stock_code: this.symbol,
                          type: 1,
                          limit: 10,
                          last_page_cursor: this.lastScore || "",
                          get_import: 0,
                        })
                      );
                    case 9:
                      (t = e.sent), (e.next = 16);
                      break;
                    case 12:
                      return (
                        (e.next = 14),
                        l.getNewsInfo(this.hqBridge, {
                          page_start: this.pages,
                          symbol: this.symbol,
                          type: 1,
                          app: this.app,
                          last_score: this.lastScore,
                        })
                      );
                    case 14:
                      (a = e.sent), (t = d.adaptQueryStockNewsListResp(a));
                    case 16:
                      e.next = 21;
                      break;
                    case 18:
                      return (
                        (e.prev = 18),
                        (e.t0 = e.catch(3)),
                        e.abrupt(
                          "return",
                          ((this.loading = !1), void this.$emit("loaded"))
                        )
                      );
                    case 21:
                      return (
                        (this.loading = !1),
                        (i = (t.news_list || []).reduce(function (e, t) {
                          return e.concat(t, t.folded_items || []);
                        }, [])),
                        e.abrupt(
                          "return",
                          (i.length > 0 &&
                            ((this.list = this.list.concat(
                              d.filterEmptyTitleNews(i)
                            )),
                            this.pages++),
                          (this.lastScore = t.next_page_cursor || ""),
                          (this.hasNext = 0 != t.has_next),
                          this.$nextTick(function () {
                            r.$emit("loaded");
                          }),
                          0 == t.has_next)
                        )
                      );
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[3, 18]]
            );
          })),
          new Promise(function (n, a) {
            var i = function (e) {
                try {
                  s(t.next(e));
                } catch (e) {
                  a(e);
                }
              },
              r = function (e) {
                try {
                  s(t.throw(e));
                } catch (e) {
                  a(e);
                }
              },
              s = function (e) {
                return e.done
                  ? n(e.value)
                  : Promise.resolve(e.value).then(i, r);
              };
            s((t = t.apply(e, null)).next());
          })
        );
        var e, t;
      },
      goReport: function (n) {
        this.hqBridge.report("stock_detail.researchreport", {
          newsId: n.news_id,
          stockid: this.symbol,
        });
        var a = {};
        n.wx_tag && (a.wx_tag = n.wx_tag),
          (function (n, a, i, r) {
            var s = this;
            t(w)
              .filter(function (t) {
                var i = e(t, 1)[0];
                return i.type === n && i.specalType === a;
              })
              .forEach(function (t) {
                var n = e(t, 2);
                n[0];
                return n[1].call(s, i.instance, i.params, r);
              });
          })(n.news_type, n.special_type, { instance: this, params: n }, a);
      },
    },
  };
Array || (u.resolveComponent("InverseRate") + u.resolveComponent("NoData"))();
var _ = u._export_sfc(v, [
  [
    "render",
    function (e, t, n, a, i, r) {
      return u.e(
        { a: i.showChart },
        i.showChart
          ? {
              b: u.p({
                isRep: !0,
                symbol: r.symbol,
                chartData: i.chartData,
                jgList: i.jgList,
              }),
            }
          : {},
        { c: i.showChart && i.list.length > 0 },
        (i.showChart && i.list.length, {}),
        { d: i.list.length > 0 },
        i.list.length > 0
          ? {
              e: u.f(i.list, function (e, t, n) {
                return u.e(
                  { a: u.t(e.title), b: 14 == e.news_type },
                  (e.news_type, {}),
                  { c: 14 == e.news_type },
                  (e.news_type, {}),
                  { d: r.formatType(e) },
                  r.formatType(e) ? { e: u.t(r.formatType(e)) } : {},
                  { f: u.t(e.media_name), g: "2" == e.has_translation },
                  (e.has_translation, {}),
                  {
                    h: u.t(r.formatTime(e.time)),
                    i: t,
                    j: u.o(
                      function (t) {
                        return r.goReport(e);
                      },
                      1992,
                      t
                    ),
                  }
                );
              }),
            }
          : {},
        { f: !i.loading && 0 === i.list.length },
        (i.loading || i.list.length, {}),
        { g: u.n(i.list.length > 0 && "bg-white") }
      );
    },
  ],
  ["__scopeId", "data-v-e2794850"],
]);
wx.createComponent(_);
