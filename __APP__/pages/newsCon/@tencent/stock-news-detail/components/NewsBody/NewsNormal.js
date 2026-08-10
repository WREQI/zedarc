require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-news-core/utils/newsParser.js"),
  n = require("../../../stock-news-core/utils/tools.js"),
  s = require("../../../stock-news-core/utils/report.js"),
  o = "shouye_lc_djdzk_detail_related_stock_20260625",
  i = "news_related_stock_abt_".concat(o),
  r = function (t) {
    var e = parseInt(t, 10);
    return [0, 1, 2, 3].includes(e) ? e : 0;
  },
  c = {
    name: "NewsNormal",
    options: { styleIsolation: "shared" },
    provide: function () {
      var t = this,
        e = {};
      return (
        Object.defineProperty(e, "ready", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return t.relatedStockAbtReady;
          },
        }),
        Object.defineProperty(e, "displayStocks", {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return t.displayRelateStocks;
          },
        }),
        { relatedStockAbt: e }
      );
    },
    inject: {
      isFullTeach: { default: !1 },
      isLctNews: {
        default: function () {
          return {};
        },
      },
      LctFlashNews: {
        default: function () {
          return {};
        },
      },
      isAbtRelatedHq: {
        default: function () {
          return {};
        },
      },
      premoteMixin: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    props: [
      "data",
      "theme",
      "pathname",
      "speechInfo",
      "speech_ids",
      "flucShowMode",
      "wzqConfig",
      "xgInfo",
      "translateStatus",
      "mediaInfoAll",
      "userinfo",
      "watchList",
      "isHstabShow",
      "copyable",
      "isAiSummaryExpand",
    ],
    components: {
      AISummary: function () {
        return "./components/AISummary/AISummary.js";
      },
      AIReading: function () {
        return "./components/AISummary/AIReading.js";
      },
      NewsCompJumpPage: null,
      NewsCompEventSource: function () {
        return "./components/NewsCompEventSource/index.js";
      },
      NewsContent: function () {
        return "./components/NewsCompContent/index.js";
      },
      NewsCompRelatedStock: function () {
        return "./components/NewsCompRelatedStock.js";
      },
      Speech: function () {
        return "./components/Speech/index.js";
      },
      NewsHtml: null,
      InformationDetailApply: function () {
        return "../../../../../asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.js";
      },
    },
    data: function () {
      return {
        stocks: null,
        isWeb: !0,
        isWZQ: !1,
        isMP: !0,
        isWZQMP: !1,
        newsData: {},
        relatedStockAbtReady: !1,
        relatedStockAbtType: 0,
        relatedStockAbtRequested: !1,
      };
    },
    watch: {
      data: function (t) {
        (this.newsData = t),
          this.initContent(),
          this.initRelateStocks(),
          this.maybeFetchRelatedStockAbt();
      },
    },
    computed: {
      isAbtRelatedHqValue: function () {
        var t;
        return !!(null == (t = this.isAbtRelatedHq) ? void 0 : t.value);
      },
      relateStocksList: function () {
        var t;
        return (null == (t = this.newsData) ? void 0 : t.relate_stocks) || [];
      },
      displayRelateStocks: function () {
        var t = this.relateStocksList || [],
          e = this.relatedStockAbtType;
        return !e || e <= 0 ? [] : t.slice(0, e);
      },
      relatedStockSymbols: function () {
        return this.isAbtRelatedHqValue
          ? this.displayRelateStocks
          : this.stocks || [];
      },
      relatedStockNum: function () {
        return this.isAbtRelatedHqValue ? this.relatedStockAbtType : 2;
      },
      showRelatedStock: function () {
        return this.isAbtRelatedHqValue
          ? this.relatedStockAbtReady && this.relatedStockSymbols.length > 0
          : this.relatedStockSymbols.length > 0;
      },
      isShowContent: function () {
        var t, e, a, n, s, o;
        return 5 !== (null == (t = this.newsData) ? void 0 : t.type)
          ? (null ==
            (n =
              null == (a = null == (e = this.newsData) ? void 0 : e.content)
                ? void 0
                : a.data)
              ? void 0
              : n.length) > 0
          : (null == (o = null == (s = this.newsData) ? void 0 : s.contentHtml)
              ? void 0
              : o.length) > 0;
      },
      isShowPASource: function () {
        var t = this.newsData.data_source;
        return this.checkWzqMPOrLIGHT && (20 === t || 43 === t);
      },
      isShowWxTags: function () {
        return this.wxTags && this.wxTags.length > 0;
      },
      wxTags: function () {
        var t, e;
        if (this.isWZQMP)
          try {
            var a = getCurrentPages(),
              n = a[a.length - 1].options.wx_tag;
            if (n) return decodeURIComponent(n);
          } catch (t) {}
        else if (this.isWZQ) {
          var s = (
            null != (e = null == (t = this.$route) ? void 0 : t.query) ? e : {}
          ).wx_tag;
          if (s) return s;
        }
        return this.newsData.wx_tag ? this.newsData.wx_tag : null;
      },
      canShowAIReading: function () {
        var t;
        return !!(null == (t = this.LctFlashNews) ? void 0 : t.value);
      },
      canShowSummary: function () {
        var t;
        return (null == (t = this.newsData.summary) ? void 0 : t.length) > 0;
      },
      canShowSummaryAi: function () {
        var t, e, a;
        return (
          !this.canShowSummary &&
          (null ==
          (a =
            null == (e = null == (t = this.newsData) ? void 0 : t.nlp_content)
              ? void 0
              : e.summary)
            ? void 0
            : a.length) > 0
        );
      },
      showAvatar: function () {
        if (
          this.checkWzqMPOrLIGHT &&
          this.mediaInfoAll &&
          this.mediaInfoAll.media_avatar
        ) {
          return (
            "https://snpimg.gtimg.com/snp/0/IMG20190423110820b36cdf7d_200x200/0" !==
            this.mediaInfoAll.media_avatar
          );
        }
        return !1;
      },
      checkWzqMPOrLIGHT: function () {
        return n.envUtil.isH5Lite();
      },
      isShowMedia: function () {
        return (
          !this.mediaInfoAll ||
          2 !== this.mediaInfoAll.media_type ||
          2 === this.mediaInfoAll.status ||
          this.isWeb
        );
      },
      isShowFocus: function () {
        var t =
            this.newsData &&
            this.mediaInfoAll &&
            2 !== this.mediaInfoAll.status &&
            2 === this.mediaInfoAll.media_type,
          e =
            this.newsData &&
            !!this.newsData.title &&
            this.newsData.content &&
            Array.isArray(this.newsData.content.data) &&
            this.newsData.content.data.length;
        return !this.isWeb && t && e;
      },
      srcToHttps: function () {
        var t = this.mediaInfoAll && this.mediaInfoAll.media_avatar;
        return n.formatImage(t);
      },
      readingTime: function () {
        var t, e;
        try {
          var a = (
              (null == (t = this.speechInfo) ? void 0 : t[1]) ||
              (null == (e = this.speechInfo) ? void 0 : e[0])
            ).play_time,
            n = Math.floor(a / 1e3 / 60);
          return Math.floor(n / 2);
        } catch (t) {
          return 0;
        }
      },
    },
    mounted: function () {
      (this.newsData = this.data),
        this.initContent(),
        this.initRelateStocks(),
        this.maybeFetchRelatedStockAbt();
    },
    methods: {
      openMedia: function (t) {},
      getFormattedTime: n.getFormattedTime,
      showMedia: function () {
        var t = { newsid: this.data.id };
        if (
          (s.report("news.newsdetail.news_article_media_click", t),
          s.report("news.mini.detail.media_click", t),
          this.mediaInfoAll && this.mediaInfoAll.media_desc)
        ) {
          var a = this.mediaInfoAll,
            n = (a.media_name, a.media_desc),
            o = a.media_id;
          o && this.isShowFocus
            ? this.openMedia(o)
            : e.wx$1.showModal({
                title: "",
                content: n,
                showCancel: !1,
                confirmText: "我知道了",
              });
        }
      },
      initContent: function () {
        if (
          this.newsData &&
          this.newsData.content &&
          this.newsData.content.data
        ) {
          var t = [];
          this.newsData.content.data.forEach(function (e) {
            t.push(e);
          }),
            (this.newsData.snpContent = t),
            (this.newsData.contentParsed = t.map(function (t) {
              return a.newsParser(t);
            }));
        }
      },
      initRelateStocks: function () {
        if (
          this.newsData &&
          ((this.newsData.stockInfo =
            this.newsData.stockInfo && this.newsData.stockInfo.length > 5
              ? this.newsData.stockInfo.splice(0, 5)
              : this.newsData.stockInfo),
          this.newsData.relate_stocks || this.newsData.mention_stocks)
        ) {
          var e = [].concat(
            t(this.newsData.relate_stocks || []),
            t(this.newsData.mention_stocks || [])
          );
          (this.showStock = !0), (this.stocks = e);
        }
      },
      mpOnShow: function () {
        this.$refs.newsCompRelatedStock &&
          this.$refs.newsCompRelatedStock.mpOnShow(),
          this.$refs.newsContent && this.$refs.newsContent.mpOnShow(),
          this.maybeFetchRelatedStockAbt();
      },
      getRelatedStockAbtCache: function () {
        try {
          var t = e.StockBridge.getStorage(i);
          if (!t) return null;
          var a = "string" == typeof t ? JSON.parse(t) : t;
          return a && "number" == typeof a.type ? a : null;
        } catch (t) {
          return null;
        }
      },
      setRelatedStockAbtCache: function (t) {
        try {
          e.StockBridge.setStorage(i, JSON.stringify(t));
        } catch (t) {}
      },
      maybeFetchRelatedStockAbt: function () {
        this.isAbtRelatedHqValue &&
          (this.relatedStockAbtRequested ||
            (this.relateStocksList &&
              0 !== this.relateStocksList.length &&
              ((this.relatedStockAbtRequested = !0),
              this.fetchRelatedStockAbt())));
      },
      fetchRelatedStockAbt: function () {
        var t = this;
        try {
          e.StockBridge.abtCreate({
            moduleID: o,
            params: { channel: 0, type: "query", scenes: -1 },
            success: function (e) {
              var a,
                n,
                s =
                  null ==
                  (n =
                    null == (a = null == e ? void 0 : e.data) ? void 0 : a[0])
                    ? void 0
                    : n.type,
                o = r(s),
                i = [0, 1, 2, 3].includes(parseInt(s, 10));
              (t.relatedStockAbtType = o),
                (t.relatedStockAbtReady = !0),
                i && t.setRelatedStockAbtCache({ type: o });
            },
            fail: function () {
              t.handleRelatedStockAbtFallback("fail");
            },
          });
        } catch (t) {
          this.handleRelatedStockAbtFallback("exception");
        }
      },
      handleRelatedStockAbtFallback: function (t) {
        var e = this.getRelatedStockAbtCache();
        (this.relatedStockAbtType = e ? r(e.type) : 0),
          (this.relatedStockAbtReady = !0);
      },
      paSourceName: function (t) {
        try {
          var e = t.source;
          return e && e.length > 6 ? "".concat(e.slice(0, 6), "...") : e;
        } catch (t) {
          return s.aegisReportError(t), "";
        }
      },
    },
  };
Array ||
  (
    e.resolveComponent("NewsCompJumpPage") +
    e.resolveComponent("NewsCompEventSource") +
    e.resolveComponent("Speech") +
    e.resolveComponent("NewsCompRelatedStock") +
    e.resolveComponent("InformationDetailApply") +
    e.resolveComponent("AIReading") +
    e.resolveComponent("AISummary") +
    e.resolveComponent("NewsHtml") +
    e.resolveComponent("NewsContent")
  )();
var l = e._export_sfc(c, [
  [
    "render",
    function (t, a, n, s, o, i) {
      return e.e(
        { a: i.isShowContent },
        i.isShowContent
          ? e.e(
              {
                b:
                  !o.isWZQ &&
                  n.data &&
                  n.data.jump_page &&
                  1 === n.data.jump_page.top,
              },
              !o.isWZQ &&
                n.data &&
                n.data.jump_page &&
                1 === n.data.jump_page.top
                ? {
                    c: e.p({
                      newsId: n.data.id,
                      jumpPage: n.data.jump_page,
                      wzqConfig: n.wzqConfig,
                      flucShowMode: n.flucShowMode,
                      theme: n.theme,
                      position: 1,
                    }),
                  }
                : {},
              { d: "{}" !== JSON.stringify(o.newsData.src_from) },
              "{}" !== JSON.stringify(o.newsData.src_from)
                ? {
                    e: e.p({
                      source: o.newsData.src_from,
                      wzqConfig: n.wzqConfig,
                    }),
                  }
                : {},
              { f: !o.isMP },
              o.isMP
                ? { h: e.t(o.newsData.title || "") }
                : { g: e.t(o.newsData.title || "") },
              {
                i: e.n(
                  o.newsData.title ? "speech-readable news_title" : "news_title"
                ),
                j: 1 == o.newsData.english_news ? "left" : "justify",
                k: o.newsData.title ? "10px" : "0",
                l: i.isShowPASource,
              },
              i.isShowPASource
                ? e.e(
                    { m: i.showAvatar || i.isShowFocus },
                    i.showAvatar || i.isShowFocus ? { n: i.srcToHttps } : {},
                    {
                      o: e.t(i.paSourceName(o.newsData)),
                      p: e.t(i.getFormattedTime(o.newsData.publish_time) || ""),
                      q: i.isShowWxTags,
                    },
                    i.isShowWxTags ? { r: e.t(i.wxTags) } : {}
                  )
                : i.isLctNews.value
                ? e.e(
                    {
                      t: e.t(i.getFormattedTime(o.newsData.publish_time) || ""),
                      v: i.readingTime,
                    },
                    i.readingTime ? { w: e.t(i.readingTime) } : {},
                    { x: n.speechInfo },
                    n.speechInfo
                      ? {
                          y: e.p({
                            originalId: o.newsData.id,
                            speechIds: n.speech_ids
                              ? decodeURIComponent(n.speech_ids)
                              : o.newsData.id,
                            speechInfo: n.speechInfo,
                            theme: n.theme,
                            title: o.newsData.title,
                            wzqConfig: n.wzqConfig,
                            id: "lct-speech_container",
                          }),
                        }
                      : {}
                  )
                : e.e(
                    { z: i.isShowMedia || i.isShowFocus },
                    i.isShowMedia || i.isShowFocus
                      ? e.e(
                          { A: i.showAvatar || i.isShowFocus },
                          i.showAvatar || i.isShowFocus
                            ? { B: i.srcToHttps }
                            : {},
                          {
                            C: e.t(
                              o.newsData.source || o.newsData.source_media || ""
                            ),
                            D: e.n(
                              n.mediaInfoAll && n.mediaInfoAll.media_desc
                                ? "news_source actived"
                                : "news_source"
                            ),
                            E: e.o(function () {
                              return (
                                i.showMedia && i.showMedia.apply(i, arguments)
                              );
                            }, 3592),
                            F: e.t(
                              i.getFormattedTime(o.newsData.publish_time) || ""
                            ),
                          }
                        )
                      : {},
                    {
                      G: n.speechInfo && !i.isFullTeach && !i.checkWzqMPOrLIGHT,
                    },
                    !n.speechInfo || i.isFullTeach || i.checkWzqMPOrLIGHT
                      ? {}
                      : {
                          H: e.p({
                            originalId: o.newsData.id,
                            speechIds: n.speech_ids
                              ? decodeURIComponent(n.speech_ids)
                              : o.newsData.id,
                            speechInfo: n.speechInfo,
                            theme: n.theme,
                            title: o.newsData.title,
                            wzqConfig: n.wzqConfig,
                          }),
                        }
                  ),
              { s: i.isLctNews.value, I: i.showRelatedStock },
              i.showRelatedStock
                ? {
                    J: e.sr("newsCompRelatedStock", "cbc644a6-4"),
                    K: e.p({
                      symbols: i.relatedStockSymbols,
                      showType: "news",
                      num: i.relatedStockNum,
                      pathname: n.pathname,
                      flucShowMode: n.flucShowMode,
                      wzqConfig: n.wzqConfig,
                      newsid: n.data.id,
                    }),
                  }
                : {},
              {
                L:
                  i.premoteMixin &&
                  i.premoteMixin.information_detail_apply_bar_pos &&
                  i.premoteMixin.information_detail_apply_bar_pos.premote,
              },
              i.premoteMixin &&
                i.premoteMixin.information_detail_apply_bar_pos &&
                i.premoteMixin.information_detail_apply_bar_pos.premote
                ? {
                    M: e.p({
                      premote:
                        i.premoteMixin.information_detail_apply_bar_pos.premote,
                    }),
                  }
                : {},
              { N: i.canShowSummary },
              i.canShowSummary
                ? {
                    O: e.t(
                      1 !== o.newsData.english_news || n.translateStatus
                        ? "导语"
                        : "Summary"
                    ),
                    P: e.t(o.newsData.summary || ""),
                    Q: 1 === o.newsData.english_news ? "left" : "justify",
                    R: i.isLctNews.value ? 1 : "",
                  }
                : {},
              { S: i.canShowAIReading },
              i.canShowAIReading
                ? {
                    T: e.p({
                      newsData: o.newsData,
                      theme: n.theme,
                      isAiSummaryExpand: n.isAiSummaryExpand,
                    }),
                  }
                : i.canShowSummaryAi
                ? {
                    V: e.p({
                      newsData: o.newsData,
                      wzqConfig: n.wzqConfig,
                      theme: n.theme,
                      isAiSummaryExpand: n.isAiSummaryExpand,
                    }),
                  }
                : {},
              {
                U: i.canShowSummaryAi,
                W: n.data && (111 === n.data.news_type || 111 === n.data.type),
              },
              !n.data || (111 !== n.data.news_type && 111 !== n.data.type)
                ? e.e({ Y: o.isMP }, (o.isMP, {}), {
                    Z: e.sr("newsContent", "cbc644a6-9"),
                    aa: e.p({
                      data: o.newsData,
                      wzqConfig: n.wzqConfig,
                      xgInfo: n.xgInfo,
                      watchList: n.watchList,
                      translateStatus: n.translateStatus,
                      jumpPage: o.newsData.jump_page,
                      theme: n.theme,
                      isHstabShow: n.isHstabShow,
                      copyable: n.copyable,
                    }),
                  })
                : { X: e.p({ data: n.data }) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-cbc644a6"],
]);
wx.createComponent(l);
