var e = require("../../../../../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  t = require("../../../../../../../stock-news-core/utils/tools.js"),
  o = require("../../../../../../../../../../common/vendor.js"),
  n = require("../../../../../../../stock-base/visibilityObserver/index.js"),
  i = {
    name: "NewsContentNormal",
    inject: {
      isFullTeach: { type: Boolean, default: !1 },
      onHeaderToggleClick: { type: Function, default: function () {} },
      relatedStockAbt: {
        default: function () {
          return { ready: !1, displayStocks: [] };
        },
      },
    },
    props: [
      "data",
      "translateStatus",
      "wzqConfig",
      "xgInfo",
      "watchList",
      "jumpPage",
      "theme",
      "isHstabShow",
      "copyable",
    ],
    components: {
      HelpOrNoHelp: function () {
        return "./HelpOrNoHelp.js";
      },
      VipMore: function () {
        return "../../../VipMore/index.js";
      },
      RenderTemplate: function () {
        return "../../../../../newsTemplate/index.js";
      },
      RelatedStock: function () {
        return "./related-stock.js";
      },
      HqTool: function () {
        return "../../../hq-tool.js";
      },
      BasketOverview: function () {
        return "../../../../../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketOverview.js";
      },
      basketGuideModal: function () {
        return "../../../../../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js";
      },
      NewsAiBar: function () {
        return "../../../../../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.js";
      },
    },
    directives: { "observe-visibility": e.ObserveVisibility },
    data: function () {
      return {
        contentHeight: "auto",
        chargeType: 0,
        isWZQ: !1,
        isMP: !0,
        fullTeachFooterNote:
          "免责声明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。本平台力求提供准确信息，但无法保证数据完全准确，请投资者以中国证监会指定上市公司信息披露媒体为准。如需购买相关证券产品，请您关注投资者适当性管理相关规定，提前做好风险测评，并根据您自身的风险承受能力购买与之相匹配的证券产品。本资料仅为宣传资料，不构成任何法律文件。市场有风险，投资需谨慎。",
        reportData: {
          prefix: "news.detail",
          fchannel_id_fm_i: "I1h00p000l089",
        },
        reportPrefix: "news.basketnewsdetail",
        guideVisible: !1,
        aiEntryEnable: !1,
        showAiEntry: !1,
        aiQuestionList: [],
        relatedStockBrowObserver: null,
      };
    },
    watch: {
      data: function () {
        this.init();
      },
      relatedStockAbtReady: {
        immediate: !0,
        handler: function (e) {
          e && this.setupRelatedStockBrowObserver();
        },
      },
    },
    created: function () {},
    mounted: function () {
      this.init();
    },
    beforeDestroy: function () {
      this.disconnectRelatedStockBrowObserver();
    },
    computed: {
      isGdEnable: function () {
        return !!this.watchList && this.watchList && this.watchList.info;
      },
      reportInfo: function () {
        var e;
        return { newsid: null != (e = this.data.id) ? e : "" };
      },
      xgIconUrl: function () {
        var e, o;
        return t.formatImage(
          null != (o = null == (e = this.xgInfo) ? void 0 : e.icon_url) ? o : ""
        );
      },
      relatedStockAbtReady: function () {
        var e;
        return !!(null == (e = this.relatedStockAbt) ? void 0 : e.ready);
      },
      displayRelateStocks: function () {
        var e;
        return (
          (null == (e = this.relatedStockAbt) ? void 0 : e.displayStocks) || []
        );
      },
      relatedStockReportEvent: function () {
        return this.relatedStockAbtReady
          ? "news.markettopdetails.article_body_related_market_click"
          : "";
      },
    },
    methods: {
      onClickAiDialog: function (e) {
        e &&
          o.StockBridge.busEmit("showAiDialog", {
            contentId: this.data.id,
            aiQuestionObj: e,
          });
      },
      onQuestionListChange: function (e) {
        this.aiQuestionList = Array.isArray(e) ? e : [];
      },
      onShowAiEntry: function () {
        this.showAiEntry = !0;
      },
      onHideAiEntry: function () {
        this.showAiEntry = !1;
      },
      goToStockDetail: function (e) {},
      goToBasketDetail: function (e) {},
      headerToggleClick: function (e, t) {
        this.guideVisible = t;
      },
      onGuideConfirm: function () {
        this.guideVisible = !1;
      },
      init: function () {
        this.chargeType = this.data.charge_type || 0;
      },
      goXG: function (e) {
        var t = this.wzqConfig,
          o = t.stat,
          n = t.Helper;
        o.click("xuangu.invest_school.goto_strategy_from_detail"),
          "pattern" === e
            ? n.navigateTo("/strategy/pattern/index")
            : "system" === e
            ? n.navigateTo("/strategy/system/index")
            : +e >= 1e4
            ? n.navigateTo("/strategy/pattern/detail", { id: e })
            : +e < 1e4 && n.navigateTo("/strategy/system/detail", { id: e });
      },
      disconnectRelatedStockBrowObserver: function () {
        var e, t, o;
        try {
          null ==
            (o =
              null ==
              (t =
                null == (e = this.relatedStockBrowObserver)
                  ? void 0
                  : e.observer)
                ? void 0
                : t.disconnect) || o.call(t);
        } catch (e) {}
        this.relatedStockBrowObserver = null;
      },
      setupRelatedStockBrowObserver: function () {
        var e = this;
        this.disconnectRelatedStockBrowObserver(),
          this.$nextTick(function () {
            setTimeout(function () {
              var t;
              try {
                var i = (null == (t = e.data) ? void 0 : t.id) || "";
                e.relatedStockBrowObserver = new n.VisibilityObserver(
                  "#related-stock-bar",
                  {
                    once: !0,
                    callback: function (t) {
                      var n;
                      if (t)
                        try {
                          (null == (n = e.displayRelateStocks)
                            ? void 0
                            : n.length) > 0
                            ? o.StockBridge.report(
                                "news.markettopdetails.related_market_brow_brow",
                                { newsid: i }
                              )
                            : o.StockBridge.report(
                                "news.markettopdetails.article_body_control_group_comp_brow",
                                { newsid: i }
                              );
                        } catch (e) {}
                    },
                    intersection: { threshold: 0 },
                  },
                  { context: e }
                );
              } catch (e) {}
            }, 300);
          });
      },
      mpOnShow: function () {
        this.$refs.renderTemplate && this.$refs.renderTemplate.mpOnShow(),
          this.relatedStockAbtReady &&
            !this.relatedStockBrowObserver &&
            this.setupRelatedStockBrowObserver();
      },
    },
  };
Array ||
  (
    o.resolveComponent("RenderTemplate") +
    o.resolveComponent("NewsAiBar") +
    o.resolveComponent("basket-overview") +
    o.resolveComponent("RelatedStock") +
    o.resolveComponent("HqTool") +
    o.resolveComponent("vip-more") +
    o.resolveComponent("HelpOrNoHelp") +
    o.resolveComponent("basketGuideModal")
  )();
var r = o._export_sfc(i, [
  [
    "render",
    function (e, t, n, i, r, a) {
      return o.e(
        { a: r.isMP },
        (r.isMP, {}),
        {
          b: o.sr("renderTemplate", "2c5a07dc-0"),
          c: o.p({
            newsId: n.data.id,
            snpContent: n.data.snpContent,
            wzqConfig: n.wzqConfig,
            theme: n.theme,
            publishTime: n.data.publish_time,
            copyable: n.copyable,
          }),
          d: r.aiEntryEnable && n.data.id,
        },
        r.aiEntryEnable && n.data.id
          ? {
              e: o.o(a.onClickAiDialog, 4973),
              f: o.o(a.onShowAiEntry, 4974),
              g: o.o(a.onHideAiEntry, 4975),
              h: o.o(a.onQuestionListChange, 4976),
              i: o.p({
                "report-prefix": "news.uni_news_detail",
                "report-info": a.reportInfo,
                scene: "newsdetail",
                "content-id": n.data.id,
              }),
            }
          : {},
        { j: r.showAiEntry, k: a.isGdEnable },
        (a.isGdEnable, {}),
        { l: a.isGdEnable },
        a.isGdEnable
          ? {
              m: o.o(a.headerToggleClick, 4977),
              n: o.o(a.goToStockDetail, 4978),
              o: o.o(a.goToBasketDetail, 4979),
              p: o.p({
                "report-prefix": r.reportPrefix,
                "basket-data": n.watchList,
                "news-data": { id: n.data.id },
                "is-news": !0,
                isHstabShow: n.isHstabShow,
                "is-show-footer": !0,
                "row-num": 5,
              }),
            }
          : o.e(
              { q: r.isWZQ || r.isMP },
              r.isWZQ || r.isMP
                ? {
                    r: o.p({
                      newsId: n.data.id,
                      wzqConfig: n.wzqConfig,
                      reportData: r.reportData,
                      clickReportEventName: a.relatedStockReportEvent,
                    }),
                  }
                : {}
            ),
        { s: r.isWZQ && n.jumpPage },
        r.isWZQ && n.jumpPage
          ? {
              t: o.p({
                jumpPage: n.jumpPage,
                newsId: n.data.id,
                wzqConfig: n.wzqConfig,
              }),
            }
          : {},
        { v: r.isWZQ && n.xgInfo && n.xgInfo.xg_name },
        r.isWZQ && n.xgInfo && n.xgInfo.xg_name
          ? {
              w: a.xgIconUrl,
              x: o.t(n.xgInfo.xg_name),
              y: o.t(n.xgInfo.xg_name),
              z: o.o(function (e) {
                return a.goXG(n.xgInfo.xg_id);
              }, 4980),
            }
          : {},
        { A: r.chargeType > 0 },
        r.chargeType > 0 ? { B: o.p({ data: n.data }) } : {},
        { C: !r.isMP },
        r.isMP
          ? {}
          : {
              D: o.p({
                newsId: n.data.id,
                theme: n.theme,
                wzqConfig: n.wzqConfig,
                reportData: r.reportData,
              }),
            },
        { E: a.isFullTeach },
        a.isFullTeach
          ? {
              F: o.t(r.fullTeachFooterNote),
              G: o.n(!1 === n.translateStatus ? "english" : ""),
            }
          : {
              H: o.f(n.data.footernote, function (e, t, n) {
                return { a: o.t(e), b: t };
              }),
              I: o.n(!1 === n.translateStatus ? "english" : ""),
            },
        {
          J: o.o(a.onGuideConfirm, 4981),
          K: o.o(a.onGuideConfirm, 4982),
          L: o.p({ visible: r.guideVisible }),
          M: o.n(1 === n.data.english_news ? "text-left" : ""),
          N: r.contentHeight ? r.contentHeight : "auto",
        }
      );
    },
  ],
]);
wx.createComponent(r);
