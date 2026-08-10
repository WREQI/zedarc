var e = require("../../../../../../common/vendor.js"),
  t = {
    components: {
      AiCardStockDayKline: function () {
        return "./AiKlineComponent.js";
      },
      AiCardProfitForecast: function () {
        return "./AiAnswerFunctionItem.js";
      },
      AiCardCAiGudan: function () {
        return "./AiGuDanComponent.js";
      },
      AiCardCAiStrategy: function () {
        return "./AiStrategyComponent.js";
      },
      AiCardCAiMarketing: function () {
        return "./AiMarketingComponent.js";
      },
      AiCardCAiGeneralWatchlist: function () {
        return "./AiCardCAiGeneralWatchlist.js";
      },
      AiCardCAiSubAgentAicsButton: function () {
        return "./AiEnterLiveSupportComponent.js";
      },
      AiCardCAiNews: function () {
        return "./AiNewsItem.js";
      },
      AiCardCAiSubscribeReport: function () {
        return "./AiSubscribeNewsletter.js";
      },
      AiCardCAiMarketSentiment: function () {
        return "./SentimentBar.js";
      },
      AiCardCAiDivergentOpinions: function () {
        return "./SentimentPanel.js";
      },
      AiCardCAiGzhInfo: function () {
        return "./PublicAccountViews.js";
      },
      AiCardCAiRelatedQuotes: function () {
        return "./RelatedStockList.js";
      },
      AiCardCAiPlateInfo: function () {
        return "./SectorCardComponent.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWFpLW1hcmtkb3duL2NvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMvU2VjdG9yQ2FyZENvbXBvbmVudC52dWU;
        });
      },
    },
    props: {
      theme: { type: String, default: "" },
      curRequestId: { type: String, default: "" },
      curSessionId: { type: String, default: "" },
      position: { type: String, default: "" },
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      compId: { type: String, default: "" },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
  };
Array ||
  (
    e.resolveComponent("ai-card-stock-day-kline") +
    e.resolveComponent("ai-card-profit-forecast") +
    e.resolveComponent("ai-card-c-ai-gudan") +
    e.resolveComponent("ai-card-c-ai-strategy") +
    e.resolveComponent("ai-card-c-ai-marketing") +
    e.resolveComponent("ai-card-c-ai-general-watchlist") +
    e.resolveComponent("ai-card-c-ai-sub-agent-aics-button") +
    e.resolveComponent("ai-card-c-ai-news") +
    e.resolveComponent("ai-card-c-ai-subscribe-report") +
    e.resolveComponent("ai-card-c-ai-market-sentiment") +
    e.resolveComponent("ai-card-c-ai-divergent-opinions") +
    e.resolveComponent("ai-card-c-ai-gzh-info") +
    e.resolveComponent("ai-card-c-ai-related-quotes") +
    e.resolveComponent("ai-card-c-ai-plate-info")
  )();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, i, n, r, s) {
      return e.e(
        { a: "stock_day_kline" === i.compId },
        "stock_day_kline" === i.compId
          ? {
              b: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                "function-obj": i.data,
              }),
            }
          : "profit_forecast" === i.compId ||
            "institutional_perspective" === i.compId
          ? {
              d: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                "function-obj": i.data,
              }),
            }
          : "c-ai-gudan" === i.compId
          ? {
              f: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                data: i.data,
              }),
            }
          : "c-ai-strategy" === i.compId
          ? {
              h: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                data: i.data.component_data,
                title: "稳健型蓝筹股",
              }),
            }
          : "c-ai-marketing" === i.compId
          ? {
              j: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                data: i.data,
              }),
            }
          : "c-ai-general_watchlist" === i.compId
          ? {
              l: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                skin: i.theme,
                "basket-id": i.data.fsid,
                "route-mock-trade-param": {
                  scene: "fromai",
                  type: "gd",
                  id: i.data.fsid,
                },
                "is-to-mock-trade": i.data.mockTradeAbtUser,
                theme: i.theme,
                data: i.data,
              }),
            }
          : "c-ai-sub_agent_aics_button" === i.compId
          ? {
              n: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                "props-obj": i.data,
              }),
            }
          : "c-ai-news" === i.compId
          ? {
              p: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                data: i.data,
              }),
            }
          : "c-ai-subscribe-report" === i.compId
          ? {
              r: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                "props-obj": i.data,
              }),
            }
          : "c-ai-market_sentiment" === i.compId
          ? {
              t: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                sentiment: i.data.sentiment,
              }),
            }
          : "c-ai-divergent_opinions" === i.compId
          ? {
              w: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                data: i.data.divergent_opinions,
              }),
            }
          : "c-ai-gzh_info" === i.compId
          ? {
              y: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                "props-obj": i.data,
              }),
            }
          : "c-ai-related_quotes" === i.compId
          ? {
              A: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                related_quotes: i.data.related_quotes,
              }),
            }
          : "c-ai-plate_info" === i.compId
          ? {
              C: e.p({
                "cur-request-id": i.curRequestId,
                "cur-session-id": i.curSessionId,
                position: i.position,
                "contex-obj": i.contexObj,
                theme: i.theme,
                "props-obj": i.data,
              }),
            }
          : {},
        {
          c:
            "profit_forecast" === i.compId ||
            "institutional_perspective" === i.compId,
          e: "c-ai-gudan" === i.compId,
          g: "c-ai-strategy" === i.compId,
          i: "c-ai-marketing" === i.compId,
          k: "c-ai-general_watchlist" === i.compId,
          m: "c-ai-sub_agent_aics_button" === i.compId,
          o: "c-ai-news" === i.compId,
          q: "c-ai-subscribe-report" === i.compId,
          s: "c-ai-market_sentiment" === i.compId,
          v: "c-ai-divergent_opinions" === i.compId,
          x: "c-ai-gzh_info" === i.compId,
          z: "c-ai-related_quotes" === i.compId,
          B: "c-ai-plate_info" === i.compId,
        }
      );
    },
  ],
]);
wx.createComponent(o);
