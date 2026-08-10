require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../../../common/vendor.js"),
  o = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  a = require("../../../stock-news-core/utils/newsParser.js"),
  r = require("../../../stock-news-core/utils/shy/index.js"),
  c = require("../../utils/apiMapping.js"),
  l = (function () {
    function e(t) {
      n(this, e), (this.keyValues = (null == t ? void 0 : t.split("&")) || []);
    }
    return (
      i(e, [
        {
          key: "get",
          value: function (e) {
            if (this.keyValues && this.keyValues.length)
              for (var t = 0; t < this.keyValues.length; t++)
                if (this.keyValues[t] && this.keyValues[t].startsWith(e)) {
                  var n = this.keyValues[t].split("=");
                  if (n[0] === e) return n[1];
                }
            return null;
          },
        },
      ]),
      e
    );
  })(),
  u = ["p", "pt", "ph", "pu"],
  d = {
    name: "NewsTemplate",
    directives: { "observe-visibility": o.ObserveVisibility },
    components: {
      RenderContent: function () {
        return "./pqyw-content.js";
      },
      RelatedHqGroup: function () {
        return "../component/relatedHqGroup.js";
      },
    },
    inject: {
      isFullTeach: { value: "isFullTeach", default: !1 },
      env: { value: "env", default: {} },
    },
    props: {
      newsId: { type: String, default: "" },
      snpSummary: {
        type: [Array, Object],
        default: function () {
          return [];
        },
      },
      snpContent: {
        type: [Array, Object],
        default: function () {
          return [];
        },
      },
      newsData: {
        type: [Array, Object],
        default: function () {
          return [];
        },
      },
      tagItem: {
        type: [Array, Object],
        default: function () {
          return [];
        },
      },
      typeItem: {
        type: [Array, Object],
        default: function () {
          return [];
        },
      },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      clickable: { type: Boolean, default: !0 },
      theme: { type: String, default: "blue" },
      publishTime: { type: Number, default: 0 },
    },
    data: function () {
      return {
        mood: null,
        moodStyle: "",
        newsType: null,
        newsContent: [],
        newsSummary: [],
        TEXT_TYPE_ENUM: a.TEXT_TYPE_ENUM,
        isWZQ: !1,
        summaryClickParams: null,
      };
    },
    computed: {
      checkWzqMP: function () {
        return !1;
      },
      relatedStock: function () {
        var e,
          t = null == (e = this.summaryClickParams) ? void 0 : e.id;
        if (t && this.newsData) {
          var n = this.newsData.news_stocks;
          if (n && n.length > 0) {
            var i = n.find(function (e) {
              return e.news_id === t;
            });
            if (i) {
              var s = i.relate_stocks;
              if (s) return s;
            }
          }
        }
        return [];
      },
      isMP: function () {
        return !0;
      },
    },
    watch: {
      snpSummary: {
        handler: function (e, n) {
          if (e !== n) {
            Array.isArray(e)
              ? (this.newsSummary = t(e))
              : (this.newsSummary = [e]);
            try {
              if (this.newsSummary && this.newsSummary.length)
                for (
                  var i = this.newsSummary[0].content,
                    s = (null == i ? void 0 : i.length) || 0,
                    o = 0;
                  o < s;
                  o++
                )
                  if (i[o].textType === a.TEXT_TYPE_ENUM.NEWS) {
                    this.summaryClickParams = i[o].clickParams;
                    break;
                  }
            } catch (e) {}
          }
        },
        immediate: !0,
      },
      snpContent: {
        handler: function (e, n) {
          var i = this;
          if (e !== n) {
            Array.isArray(e)
              ? (this.newsContent = t(e))
              : (this.newsContent = [e]);
            var o = [];
            this.newsContent.forEach(function (e, t) {
              if ("image" === e.type) {
                var n = e.link;
                n &&
                  i.checkSupportJumpLink(n) &&
                  s.StockBridge.report("news.detail.event_item_brow", {});
              }
              if ("text" === e.type) {
                var r = e.content.filter(function (e) {
                  return e.textType === a.TEXT_TYPE_ENUM.FUNC;
                });
                o = o.concat(r);
              }
            }),
              o &&
                o.length &&
                s.StockBridge.report("news.detail.nlp_recognition_functions", {
                  newsid: this.newsId,
                  count: o.length,
                }),
              this.isWZQ
                ? this.$nextTick(function () {
                    i.getLocation();
                  })
                : this.loadImage();
          }
        },
        immediate: !0,
      },
      tagItem: {
        handler: function (t) {
          try {
            var n = e(t.content, 1)[0];
            if (n && n.text) {
              var i = n.text.split("：")[1];
              if (i)
                switch (((this.mood = i), i)) {
                  case "正面":
                    this.moodStyle = "mood-positive";
                    break;
                  case "负面":
                    this.moodStyle = "mood-negative";
                    break;
                  case "中性":
                    this.moodStyle = "mood-neutral";
                }
            }
          } catch (e) {}
        },
        immediate: !0,
      },
      typeItem: {
        handler: function (t) {
          try {
            var n = e(t.content, 1)[0];
            if (n && n.text) {
              var i = n.text.split("：")[1];
              this.newsType = i;
            }
          } catch (e) {}
        },
        immediate: !0,
      },
      $route: function (e, t) {
        "informationDetail" === e.name && e.path;
      },
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.$emit("accountDom");
      });
    },
    methods: {
      newsIndexIcon: function (e) {
        return e.startsWith("1")
          ? "https://st.gtimg.com/design/a19f888e284d521210531b766de84897.png"
          : e.startsWith("2")
          ? "https://st.gtimg.com/design/f5e809dc9410f2b01aa38e765ce3be8a.png"
          : e.startsWith("3")
          ? "https://st.gtimg.com/design/4e4cfd510e11376e068510c345374012.png"
          : e.startsWith("4")
          ? "https://st.gtimg.com/design/89a07ae6c33945958bf9045fb74882e7.png"
          : e.startsWith("5")
          ? "https://st.gtimg.com/design/af1d2230145beb4d5f75277a3b29f7c4.png"
          : void 0;
      },
      goToNews: function (e) {
        var t, n, i, o;
        if (this.clickable && e)
          if (this.isMP) {
            if (/^ZT/.test(e.id)) {
              var a = {
                url: "/pages/newsCon/topic/main?id=".concat(
                  e.id.replace("ZT:", "")
                ),
              };
              s.wx$1 && s.wx$1.navigateTo
                ? s.wx$1.navigateTo(a)
                : null ==
                    (n =
                      null == (t = null == window ? void 0 : window.wx)
                        ? void 0
                        : t.miniProgram) || n.navigateTo(a);
            } else {
              var c = {
                url: "/pages/newsCon/newsDetail/main?id=".concat(e.id),
              };
              s.wx$1 && s.wx$1.navigateTo
                ? s.wx$1.navigateTo(c)
                : null ==
                    (o =
                      null == (i = null == window ? void 0 : window.wx)
                        ? void 0
                        : i.miniProgram) || o.navigateTo(c);
            }
            s.StockBridge.report("news.detail.pqyw_click", {
              newsid: this.newsId,
            });
          } else if (this.env.IS_ZXG) {
            var l;
            /^LV/.test(e.id)
              ? ((l = encodeURIComponent(
                  JSON.stringify({
                    p_key: "live",
                    p_showNav: !1,
                    live_news_id: e.id,
                  })
                )),
                (l = "qqstock://Hippy?info=".concat(l)))
              : /^ZT:/.test(e.id)
              ? ((l = encodeURIComponent(
                  JSON.stringify({
                    p_key: "com.tencent.shy.news_subject_zixuangu",
                    p_url: "index?id=".concat(e.id.replace("ZT:", "")),
                    p_showNav: !1,
                    p_title: "资讯专题",
                  })
                )),
                (l = "qqstock://SHY?info=".concat(l)))
              : ((l = encodeURIComponent(
                  JSON.stringify({
                    p_key: "com.tencent.shy.news_zixuangu",
                    p_url: "index?id=".concat(e.id),
                    p_showNav: !0,
                    p_title: "新闻",
                  })
                )),
                (l = "qqstock://SHY?info=".concat(l))),
              r.shy.navigateTo({ url: l }),
              s.StockBridge.report("news_article_link_click", {
                news_id: this.newsId,
              });
          }
      },
      goToFunctions: function (e) {
        this.clickable;
      },
      goToStock: function (e) {
        var t, n, i, o, a, c;
        if (this.clickable && e) {
          var l = e.stockId,
            u = e.stockCode,
            d = e.market,
            p = (e.isUSIndex, e.name),
            m = "",
            w = "";
          if (e.market)
            switch (e.market) {
              case "p":
              case "pt":
                (m = "hs"), (w = "200");
                break;
              case "ph":
                (m = "hk"), (w = "400");
                break;
              case "pu":
                (m = "us"), (w = "601");
            }
          if (this.isMP) {
            if (w)
              if ("hs" === m) {
                var h = { url: "/pages/quote/quote?market=p&scode=".concat(u) };
                s.wx$1 && s.wx$1.navigateTo
                  ? s.wx$1.navigateTo(h)
                  : null ==
                      (n =
                        null == (t = null == window ? void 0 : window.wx)
                          ? void 0
                          : t.miniProgram) || n.navigateTo(h);
              } else {
                var f = {
                  url: "/pages/hq/detail/main?plate="
                    .concat(w, "&code=")
                    .concat(u),
                };
                s.wx$1 && s.wx$1.navigateTo
                  ? s.wx$1.navigateTo(f)
                  : null ==
                      (o =
                        null == (i = null == window ? void 0 : window.wx)
                          ? void 0
                          : i.miniProgram) || o.navigateTo(f);
              }
            else {
              if ("bj" === d) return;
              var g = {
                url: "/pages/quote/quote?market="
                  .concat(
                    {
                      sz: 0,
                      sh: 1,
                      hk: 2,
                      us: 3,
                      bj: "bj",
                      pt: "p",
                      ph: "ph",
                      pu: "pu",
                      fu: "fu",
                      ft: "ft",
                      cs: "cs",
                    }[d],
                    "&scode="
                  )
                  .concat(u),
              };
              s.wx$1 && s.wx$1.navigateTo
                ? s.wx$1.navigateTo(g)
                : null ==
                    (c =
                      null == (a = null == window ? void 0 : window.wx)
                        ? void 0
                        : a.miniProgram) || c.navigateTo(g);
            }
            s.StockBridge.report("news.mini.detail.stockClick", {
              newsid: this.newsId,
              stockid: l,
            });
          } else {
            var k,
              y = null == navigator ? void 0 : navigator.userAgent;
            (k = e.market
              ? /MicroMessenger/.test(y)
                ? "https://wzq.tenpay.com/mp/v2/index.html#/plate/"
                    .concat(w, "/detail/?plateId=")
                    .concat(u)
                : "hk" === m || "us" === m
                ? "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://plateList/"
                    .concat(d.toUpperCase(), "/")
                    .concat(u, "/")
                    .concat(p)
                : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                    l,
                    "/"
                  )
              : /MicroMessenger/.test(y)
              ? "https://wzq.tenpay.com/mp/v2/index.html#/hq/stock/"
                  .concat(this.getMarket(l), "/")
                  .concat(l.substr(2))
              : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                  l,
                  "/"
                )),
              r.shy.navigateTo({ url: k }),
              this.appClickReport(e.stockId, d, p);
          }
        }
      },
      goToUrl: function (e) {
        if (this.clickable && !this.isMP && e) {
          var t = decodeURIComponent(e.url.replace("qqstock://news/", ""));
          this.isAccountLink(t),
            (t = c.apiManager.getRealApiUrl(t)),
            r.shy.navigateTo({ url: t }),
            s.StockBridge.report("news_article_link_click", {
              newsid: this.newsId,
            });
        }
      },
      wzqKeepPos: function () {
        this.$emit("wzqKeepPos");
      },
      appClickReport: function (e, t, n) {
        if (e) {
          var i = "";
          u.some(function (t) {
            return e.startsWith(t);
          }) && (i = "news.newsdetail.news_article_pt_click"),
            e.startsWith("jj") &&
              (i = "news.newsdetail.news_article_fund_click"),
            e.startsWith("fx") && (i = "news.newsdetail.exchange_click"),
            e.startsWith("ft") &&
              (i = "news.newsdetail.global_market_index_click"),
            e.startsWith("fu") && (i = "news.newsdetail.feature_click"),
            e.startsWith("us.") &&
              (i = "news.newsdetail.us_market_index_click"),
            e.startsWith("uk") && (i = "news.newsdetail.uk_stock_click"),
            i && s.StockBridge.report(i, { newsid: this.newsId, stockid: e });
        } else e = "";
        n
          ? s.StockBridge.report("news_article_stock_click", {
              newsid: this.newsId,
              name: n,
              stockid: e,
            })
          : s.StockBridge.report("news_article_stock_click", {
              newsid: this.newsId,
              stockid: e,
            });
      },
      getMarket: function (e) {
        return ["sz", "sh", "hk", "us"].indexOf(e.substr(0, 2));
      },
      isAccountLink: function (e) {
        return e.includes("/mp/v2/index.html#/apply/index");
      },
      checkSupportJumpLink: function (e) {
        return e.includes(
          "https://zqact03.tenpay.com/activity/page/etfEnrollMatchTwoPhase/#/index"
        );
      },
      getLocation: function () {
        if (!this.isMP) {
          var e = location.hash,
            t = new l(e).get("anchorTitle");
          if (t) {
            var n = Array.from(document.querySelectorAll(".text-h1"));
            n &&
              n.map(function (e, i) {
                (e.innerText === t || e.innerText === decodeURIComponent(t)) &&
                  n[i].scrollIntoView(!0);
              });
          }
        }
      },
      loadImage: function () {
        this.getLocation();
      },
    },
  };
Array ||
  (
    s.resolveComponent("RenderContent") + s.resolveComponent("RelatedHqGroup")
  )();
var p = s._export_sfc(d, [
  [
    "render",
    function (e, t, n, i, o, a) {
      return s.e(
        { a: o.newsSummary && o.newsSummary.length },
        o.newsSummary && o.newsSummary.length
          ? {
              b: s.f(o.newsSummary[0].content, function (e, t, n) {
                return s.e(
                  { a: e.textType === o.TEXT_TYPE_ENUM.RAW },
                  e.textType === o.TEXT_TYPE_ENUM.RAW
                    ? { b: a.newsIndexIcon(e.text) }
                    : {},
                  { c: e.textType === o.TEXT_TYPE_ENUM.NEWS },
                  e.textType === o.TEXT_TYPE_ENUM.NEWS
                    ? {
                        d: s.t(e.text),
                        e: s.n(e.styles),
                        f: s.o(
                          function (t) {
                            return a.goToNews(e.clickParams);
                          },
                          4913,
                          t
                        ),
                      }
                    : {},
                  { g: t }
                );
              }),
            }
          : {},
        { c: o.mood || o.newsType },
        o.mood || o.newsType
          ? s.e(
              { d: o.newsType },
              o.newsType ? { e: s.t(o.newsType) } : {},
              { f: o.mood },
              o.mood ? { g: s.t(o.mood), h: s.n(o.moodStyle) } : {}
            )
          : {},
        {
          i: s.f(o.newsContent, function (e, t, i) {
            return s.e(
              { a: e && "text" === e.type },
              e && "text" === e.type
                ? {
                    b: s.o(a.goToNews, 4914, t),
                    c: s.o(a.goToStock, 4915, t),
                    d: s.o(a.goToFunctions, 4916, t),
                    e: s.o(a.goToUrl, 4917, t),
                    f: "5a8f8023-0-" + i,
                    g: s.p({
                      "news-id": n.newsId,
                      item: e,
                      "item-index": t,
                      clickable: n.clickable,
                      "is-m-p": a.isMP,
                      "is-w-z-q": o.isWZQ,
                      "wzq-config": n.wzqConfig,
                      "raw-click-params": o.summaryClickParams,
                      "disable-mp-hover": !0,
                    }),
                  }
                : {},
              { h: t }
            );
          }),
          j: a.relatedStock && a.relatedStock.length > 0,
        },
        a.relatedStock && a.relatedStock.length > 0
          ? {
              k: s.p({
                "news-id": n.newsId,
                "relate-stock-list": a.relatedStock,
                "wzq-config": n.wzqConfig,
              }),
            }
          : {},
        {
          l: s.o(function (e) {
            return a.goToNews(o.summaryClickParams);
          }, 4918),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5a8f8023"],
]);
wx.createComponent(p);
