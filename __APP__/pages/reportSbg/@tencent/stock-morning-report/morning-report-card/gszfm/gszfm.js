var e,
  t,
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  d = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  u = require("../../../../../../common/vendor.js"),
  p = require("../../utils/mpBrow.js"),
  m = require("../../morning-report-card.js"),
  h = require("../../../stock-news-sdk/index.js"),
  g = ["p", "pt", "ph", "pu"],
  f = {
    name: "MorningReportGszfm",
    directives: { "observe-visibility": l.ObserveVisibility },
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      RenderContent: function () {
        return "../pqyw/pqyw-content.js";
      },
      moreButton: function () {
        return "../component/moreButton.js";
      },
      ImageLinkItem: function () {
        return "../component/ImageLinkItem.js";
      },
    },
    inject: { interceptNavigate: { default: null } },
    props: ["wzqConfig", "newsData", "newsId"],
    data: function () {
      var e = this;
      return {
        secondaryDir: [],
        gszfmObserveConf: {
          callback: function (t, n) {
            return e.visibilityChanged(t, n);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        isMP: !0,
        isWZQ: !1,
        isWeb: !0,
        clickable: !0,
        moreGGId: "",
        imgLinkItem: null,
      };
    },
    watch: {
      newsData: {
        immediate: !0,
        handler: function (e) {
          if (e) {
            var t = e.briefContent.find(function (e) {
              return "公告速递" === e.groupName;
            });
            if (t)
              try {
                var n = t.secondaryDir;
                n &&
                  (n = n.filter(function (e) {
                    return e.secondaryTitle && e.secondaryTitle.length > 0;
                  }));
                var i = (n && n.length ? n[n.length - 1] : {}).contentArr;
                i &&
                  i.length > 0 &&
                  "image" === i[i.length - 1].type &&
                  (this.imgLinkItem = i.pop()),
                  (this.secondaryDir = n);
              } catch (e) {}
          }
        },
      },
    },
    mounted: function () {
      this.mpObserveVisibility(".gszfm-wrapper", this.visibilityChanged),
        this.fetchMoreGGId();
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((e = (function (e, t) {
        for (var i in t || (t = {})) c.call(t, i) && d(e, i, t[i]);
        if (s) {
          var r,
            o = n(s(t));
          try {
            for (o.s(); !(r = o.n()).done; ) {
              i = r.value;
              a.call(t, i) && d(e, i, t[i]);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
        return e;
      })({}, p.mutations)),
      (t = {
        visibilityChanged: function (e) {
          e &&
            u.StockBridge.report("news.detail.ggsd_visited", {
              newsid: this.newsId,
            });
        },
        fetchMoreGGId: function () {
          var e = this;
          m.getMoreGszfm()
            .then(function (t) {
              var n = (t || {}).data;
              e.moreGGId = n.news_id;
            })
            .catch(function (e) {});
        },
        navigateToMoreNews: function () {
          var e = this;
          (this.interceptNavigate &&
            this.interceptNavigate(function () {
              return e.doNavigateToMoreNews();
            })) ||
            this.doNavigateToMoreNews();
        },
        doNavigateToMoreNews: function () {
          this.wzqKeepPos(),
            u.StockBridge.report("news.detail.gzsfm_more_click", {
              newsid: this.moreGGId,
            }),
            h.sdk.navigateToNewsDetail({ instance: this, id: this.moreGGId });
        },
        appClickReport: function (e, t, n) {
          if (e) {
            var i = "";
            g.some(function (t) {
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
              i && u.StockBridge.report(i, { newsid: this.newsId, stockid: e });
          } else e = "";
          n
            ? u.StockBridge.report("news_article_stock_click", {
                newsid: this.newsId,
                name: n,
                stockid: e,
              })
            : u.StockBridge.report("news_article_stock_click", {
                newsid: this.newsId,
                stockid: e,
              });
        },
        goToNews: function (e) {
          this.$emit("goToNews", e);
        },
        goToStock: function (e) {
          if (this.clickable && e) {
            var t = e.stockId,
              n = e.stockCode,
              i = e.market,
              r = (e.isUSIndex, e.name),
              o = "",
              s = "";
            if (e.market)
              switch (e.market) {
                case "p":
                case "pt":
                  (o = "hs"), (s = "200");
                  break;
                case "ph":
                  (o = "hk"), (s = "400");
                  break;
                case "pu":
                  (o = "us"), (s = "601");
              }
            if (this.isMP) {
              var c = {};
              if (s)
                c =
                  "hs" === o
                    ? { url: "/pages/quote/quote?market=p&scode=".concat(n) }
                    : {
                        url: "/pages/hq/detail/main?plate="
                          .concat(s, "&code=")
                          .concat(n),
                      };
              else {
                if ("bj" === i) return;
                c = {
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
                      }[i],
                      "&scode="
                    )
                    .concat(n),
                };
              }
              u.StockBridge.routeTo(c),
                u.StockBridge.report("news.mini.detail.ggsd_stock_click", {
                  newsid: this.newsId,
                  stockid: t,
                });
            } else {
              var a,
                d = null == navigator ? void 0 : navigator.userAgent;
              (a = e.market
                ? /MicroMessenger/.test(d)
                  ? "https://wzq.tenpay.com/mp/v2/index.html#/plate/"
                      .concat(s, "/detail/?plateId=")
                      .concat(n)
                  : "hk" === o || "us" === o
                  ? "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://plateList/"
                      .concat(i.toUpperCase(), "/")
                      .concat(n, "/")
                      .concat(r)
                  : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                      t,
                      "/"
                    )
                : /MicroMessenger/.test(d)
                ? "https://wzq.tenpay.com/mp/v2/index.html#/hq/stock/"
                    .concat(this.getMarket(t), "/")
                    .concat(t.substr(2))
                : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                    t,
                    "/"
                  )),
                shy.navigateTo({ url: a }),
                this.appClickReport(e.stockId, i, r);
            }
          }
        },
        wzqKeepPos: function () {
          this.$emit("wzqKeepPos");
        },
      }),
      r(e, o(t))),
  };
Array ||
  (
    u.resolveComponent("cardHeader") +
    u.resolveComponent("RenderContent") +
    u.resolveComponent("more-button") +
    u.resolveComponent("image-link-item")
  )();
var k = u._export_sfc(f, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return u.e(
        { a: r.secondaryDir && r.secondaryDir.length },
        r.secondaryDir && r.secondaryDir.length
          ? { b: u.p({ title: "正面负面公告" }) }
          : {},
        { c: r.secondaryDir && r.secondaryDir.length },
        r.secondaryDir && r.secondaryDir.length
          ? u.e(
              {
                d: u.f(r.secondaryDir, function (e, t, i) {
                  return u.e(
                    {
                      a:
                        e.secondaryTitle[0].content &&
                        e.secondaryTitle[0].content.length,
                    },
                    e.secondaryTitle[0].content &&
                      e.secondaryTitle[0].content.length
                      ? { b: u.t(e.secondaryTitle[0].content[0].text) }
                      : {},
                    { c: e.contentArr && e.contentArr.length },
                    e.contentArr && e.contentArr.length
                      ? {
                          d: u.f(e.contentArr, function (e, t, s) {
                            return u.e(
                              { a: "text" === e.type },
                              "text" === e.type
                                ? {
                                    b: u.o(o.goToStock, 4183, t),
                                    c: u.o(o.goToNews, 4184, t),
                                    d: "9254ec59-1-" + i + "-" + s,
                                    e: u.p({
                                      "news-id": n.newsId,
                                      item: e,
                                      "item-index": t,
                                      clickable: r.clickable,
                                      "is-m-p": r.isMP,
                                      "is-w-z-q": r.isWZQ,
                                      "wzq-config": n.wzqConfig,
                                      "disable-touch": !0,
                                    }),
                                  }
                                : {},
                              { f: t }
                            );
                          }),
                        }
                      : {},
                    { e: t !== r.secondaryDir.length - 1 || r.moreGGId },
                    (t !== r.secondaryDir.length - 1 || r.moreGGId, {}),
                    { f: t }
                  );
                }),
                e: u.n(r.moreGGId ? "hasMore" : ""),
                f: r.moreGGId,
              },
              r.moreGGId
                ? {
                    g: u.o(o.navigateToMoreNews, 4185),
                    h: u.p({ "more-text": "更多公告" }),
                  }
                : {}
            )
          : {},
        { i: r.imgLinkItem },
        r.imgLinkItem
          ? {
              j: u.p({
                item: r.imgLinkItem,
                "news-id": n.newsId,
                "module-name": "zmfmgg",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-9254ec59"],
]);
wx.createComponent(k);
