var e,
  t,
  n = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  s = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  d = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  h = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && d(e, n, t[n]);
    if (a) {
      var i,
        o = r(a(t));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          l.call(t, n) && d(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  b = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  w = require("../../../stock-news-core/utils/routerJump.js"),
  p = require("../../morning-report-card.js"),
  f = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  m = require("../../../../../../common/vendor.js"),
  k = require("../../utils/mpBrow.js"),
  x = require("../../../stock-news-core/utils/force2https.js"),
  v = require("../../../stock-news-core/utils/market.js"),
  _ = !1,
  g = !1,
  S = "morningreport-zxtx",
  B = "morningreport-zxtx-bubble",
  y = {
    name: "MorningReportZxtx",
    directives: { "observe-visibility": f.ObserveVisibility },
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      moreButton: function () {
        return "../component/moreButton.js";
      },
      SearchAiBar: function () {
        return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
    },
    inject: { env: { default: {} } },
    props: ["wzqConfig", "newsData", "newsId", "anchorTitle"],
    data: function () {
      var e = this;
      return {
        contentArr: [],
        zxtxObserveConf: {
          callback: function (t, n) {
            return e.visibilityChanged(t, n);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        checkBubbleStatus: !1,
        showBubble: !1,
        animation: null,
        lastScrollPosition: 0,
        IS_CCM_XCX: _,
        isMP: !0,
        showAiEntry: !1,
      };
    },
    computed: {
      showRiskDesc: function () {
        return g || !1;
      },
      xiaobaoSymbol: function () {
        var e, t;
        return (
          (null == (t = null == (e = this.contentArr) ? void 0 : e[0])
            ? void 0
            : t.stock_code) || ""
        );
      },
      reportInfo: function () {
        return { newsid: this.newsId };
      },
    },
    watch: {
      newsId: {
        immediate: !0,
        handler: function (e) {
          e && this.loadData();
        },
      },
    },
    created: function () {
      return b(
        this,
        null,
        i().mark(function e() {
          var t;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), m.StockBridge.getStorage(S);
                  case 2:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    e.t0 = [];
                  case 5:
                    (t = e.t0) && t.length > 0 && (this.contentArr = t);
                  case 7:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    mounted: function () {
      this.mpObserveVisibility(".zxtx-content", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((e = h({}, k.mutations)),
      (t = {
        visibilityChanged: function (e) {
          e &&
            m.StockBridge.report("news.detail.zxtx_visited", {
              newsid: this.newsId,
            });
        },
        loadData: function () {
          return b(
            this,
            null,
            i().mark(function e() {
              var t, n;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), p.getZxtxData({});
                      case 3:
                        (t = e.sent),
                          (n = t.stocks) && n.length > 0
                            ? ((this.contentArr = n),
                              m.StockBridge.setStorage(S, n))
                            : ((this.contentArr = []),
                              m.StockBridge.setStorage(S, [])),
                          this.checkBubbleStorageStatus(),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          (this.contentArr = []),
                          m.StockBridge.setStorage(S, []);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 8]]
              );
            })
          );
        },
        stockTag: function (e) {
          var t = e.stock_code;
          return x.forceHttpsAdvanced(v.getMarketIcon(t) || "");
        },
        jumpToStockDetail: function (e, t) {
          this.wzqKeepPos();
          var n = e.stock_code,
            i = h({ newsid: this.newsId, stocklist: n, stockid: n }, t);
          m.StockBridge.report("news.detail.zxtx_stock_click", {
            newsid: this.newsId,
            stockid: n,
          }),
            w.routerJump.gotoDetail(i, this.wzqConfig.Helper);
        },
        jumpToStockDetailMine: function (e) {
          this.jumpToStockDetail(e, {
            tabs: "minesweepers",
            selectTab: "mine",
            tab: "mine",
            tabCurrentModule: "overview",
          });
        },
        wzqKeepPos: function () {
          this.$emit("wzqKeepPos");
        },
        jumpToNewsDetail: function (e) {
          this.wzqKeepPos(),
            m.StockBridge.report("news.detail.zxtx_news_click", {
              newsid: this.newsId,
            });
          var t = e.risk_desc,
            n = e.news_desc;
          !t &&
            n &&
            w.routerJump.goNewsDetail(
              h(h({}, n), {
                stat_data: (this.$route && this.$route.query.stat_data) || "",
              }),
              this.wzqConfig.Helper
            );
        },
        checkBubbleStorageStatus: function () {
          return b(
            this,
            null,
            i().mark(function e() {
              var t, r, o, s;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (!(null ==
                          (r = null == (t = this.$route) ? void 0 : t.query)
                            ? void 0
                            : r.anchorTitle) &&
                            !this.anchorTitle) ||
                          !this.contentArr ||
                          !this.contentArr.length
                        ) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          m.StockBridge.getStorage(B)
                        );
                      case 4:
                        if (((e.t0 = e.sent), e.t0)) {
                          e.next = 7;
                          break;
                        }
                        e.t0 = [];
                      case 7:
                        if (!((o = e.t0) && o.indexOf(this.newsId) >= 0)) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return");
                      case 10:
                        (s = n(new Set([this.newsId].concat(n(o || []))))),
                          m.StockBridge.setStorage(B, s),
                          this.showZixuanBubble(),
                          (this.checkBubbleStatus = !0),
                          (e.next = 16);
                        break;
                      case 14:
                        (e.prev = 14), (e.t1 = e.catch(1));
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 14]]
              );
            })
          );
        },
        showZixuanBubble: function () {
          var e = this;
          (this.animation = "fade-in"),
            this.$nextTick(function () {
              (e.showBubble = !0),
                m.StockBridge.busEmit("news-mreport-zxtx-show");
            }),
            m.StockBridge.report("news.detail.zxtx_bubble_visited", {
              newsid: this.newsId,
            });
        },
        hideZixuanBubble: function () {
          var e = this;
          (this.animation = "fade-out"),
            setTimeout(function () {
              (e.showBubble = !1), (e.animation = null);
            }, 350),
            m.StockBridge.busEmit("news-mreport-zxtx-hide");
        },
        scrollToZixuan: function () {
          var e = this;
          this.hideZixuanBubble(),
            setTimeout(function () {
              e.$emit("scrollToZixuan");
            }, 350),
            m.StockBridge.report("news.detail.zxtx_bubble_scroll", {
              newsid: this.newsId,
            });
        },
        closeZixuanBubble: function () {
          (this.checkBubbleStatus = !1),
            this.hideZixuanBubble(),
            m.StockBridge.report("news.detail.zxtx_bubble_close", {
              newsid: this.newsId,
            });
        },
        handleScroll: function (e) {
          var t = this;
          if (this.checkBubbleStatus) {
            var n,
              i =
                (n = (null == e ? void 0 : e.scrollTop) || 0) -
                this.lastScrollPosition;
            this.showBubble &&
              i > 88 &&
              ((this.checkBubbleStatus = !1), this.hideZixuanBubble()),
              clearTimeout(this.scrollTimer),
              (this.scrollTimer = setTimeout(function () {
                t.lastScrollPosition = n;
              }, 200));
          }
        },
        mpScroll: function (e) {
          this.showBubble && this.handleScroll(e);
        },
        navigateToMoreNews: function () {
          this.wzqKeepPos(),
            m.StockBridge.report("news.detail.zxtx_more_click", {
              newsid: this.newsId,
            });
          m.StockBridge.routeTo({ url: "/pages/newsColumn/ChooseNews" });
        },
        onShowAiEntry: function () {
          this.showAiEntry = !0;
        },
        onHideAiEntry: function () {
          this.showAiEntry = !1;
        },
        onShowAiDialog: function (e) {
          this.$emit("handleShowHalfAi", {
            stockCode: this.xiaobaoSymbol,
            aiXiaobaoObj: e,
          });
        },
      }),
      s(e, c(t))),
  };
Array ||
  (
    m.resolveComponent("cardHeader") +
    m.resolveComponent("SearchAiBar") +
    m.resolveComponent("more-button")
  )();
var j = m._export_sfc(y, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return m.e(
        { a: r.contentArr && r.contentArr.length > 0 },
        r.contentArr && r.contentArr.length > 0
          ? m.e(
              { b: m.p({ title: "我的自选动态" }), c: o.xiaobaoSymbol },
              o.xiaobaoSymbol
                ? {
                    d: m.o(o.onShowAiDialog, 4186),
                    e: m.o(o.onShowAiEntry, 4187),
                    f: m.o(o.onHideAiEntry, 4188),
                    g: m.p({
                      "report-prefix": "jichu.ai_xiaobao_zaobao",
                      "report-info": o.reportInfo,
                      scene: "morningreport",
                      "content-id": o.xiaobaoSymbol,
                    }),
                  }
                : {},
              {
                h: r.showAiEntry,
                i: m.f(r.contentArr, function (e, t, n) {
                  return m.e(
                    { a: e.news_desc || e.risk_desc },
                    e.news_desc || e.risk_desc
                      ? m.e(
                          {
                            b: "url(".concat(o.stockTag(e), ")"),
                            c: m.o(
                              function (t) {
                                return o.jumpToStockDetail(e);
                              },
                              4189,
                              t
                            ),
                            d: m.t(e.stock_name),
                            e: m.o(
                              function (t) {
                                return o.jumpToStockDetail(e);
                              },
                              4190,
                              t
                            ),
                            f: e.risk_desc && e.risk_desc.tag_value > 1,
                          },
                          ((e.risk_desc && e.risk_desc.tag_value > 1) ||
                            (e.news_desc && e.news_desc.title),
                          {}),
                          {
                            g: e.news_desc && e.news_desc.title,
                            h: m.o(
                              function (t) {
                                return o.jumpToNewsDetail(e);
                              },
                              4191,
                              t
                            ),
                            i: e.risk_desc && e.risk_desc.tag_value > 1,
                          },
                          e.risk_desc && e.risk_desc.tag_value > 1
                            ? m.e(
                                {
                                  j: m.t(e.risk_desc.content),
                                  k: m.t(o.showRiskDesc ? "" : ">"),
                                  l: m.o(
                                    function (t) {
                                      return o.jumpToStockDetailMine(e);
                                    },
                                    4192,
                                    t
                                  ),
                                  m: e.risk_desc.desc,
                                },
                                e.risk_desc.desc
                                  ? {
                                      n: m.t(e.risk_desc.desc),
                                      o: m.o(
                                        function (t) {
                                          return o.jumpToStockDetailMine(e);
                                        },
                                        4193,
                                        t
                                      ),
                                    }
                                  : {}
                              )
                            : e.news_desc && e.news_desc.title
                            ? {
                                q: m.t(e.news_desc.title),
                                r: m.o(
                                  function (t) {
                                    return o.jumpToNewsDetail(e);
                                  },
                                  4194,
                                  t
                                ),
                              }
                            : {},
                          { p: e.news_desc && e.news_desc.title }
                        )
                      : {},
                    { s: t }
                  );
                }),
                j: !r.IS_CCM_XCX,
              },
              r.IS_CCM_XCX
                ? {}
                : {
                    k: m.o(o.navigateToMoreNews, 4195),
                    l: m.p({ "more-text": "更多自选要闻" }),
                  },
              { m: r.showBubble && !r.IS_CCM_XCX },
              r.showBubble && !r.IS_CCM_XCX
                ? {
                    n: m.o(function () {
                      return (
                        o.scrollToZixuan && o.scrollToZixuan.apply(o, arguments)
                      );
                    }, 4196),
                    o: m.o(function () {
                      return (
                        o.closeZixuanBubble &&
                        o.closeZixuanBubble.apply(o, arguments)
                      );
                    }, 4197),
                    p: m.n(r.animation),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-08af9d3f"],
]);
wx.createComponent(j);
