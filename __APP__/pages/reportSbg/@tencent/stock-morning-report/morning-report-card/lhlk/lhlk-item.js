var e = require("../../../../../../common/vendor.js"),
  t = require("../../morning-report-card.js"),
  o = require("../../../stock-news-sdk/index.js"),
  n = {
    name: "MorningReportLhlkItem",
    components: {
      basketEmbedHeader: function () {
        return "../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.js";
      },
      RelatedHqGroup: function () {
        return "../component/relatedHqGroup.js";
      },
    },
    inject: { env: { default: {} } },
    props: [
      "item",
      "type",
      "brokerage",
      "gdList",
      "newsData",
      "wzqConfig",
      "institution",
      "isOnShow",
      "positionid",
    ],
    computed: {
      newsTitle: function () {
        return t.itemContent(this.item);
      },
      newsType: function () {
        try {
          return t.itemContent(this.type).split("：")[1];
        } catch (e) {}
        return "";
      },
      brokerageName: function () {
        try {
          return t.itemContent(this.brokerage).split("：")[0];
        } catch (e) {}
        return "";
      },
      brokerageContent: function () {
        try {
          return t.itemContent(this.brokerage).split("：")[1];
        } catch (e) {}
        return "";
      },
      itemNewsId: function () {
        var e;
        return this.item.content && this.item.content.length > 0
          ? (this.item.content.forEach(function (t) {
              t.clickParams && t.clickParams.id && (e = t.clickParams.id);
            }),
            e)
          : null;
      },
      relatedStock: function () {
        var e = this.itemNewsId;
        if (e && this.newsData) {
          var t = this.newsData.news_stocks;
          if (t && t.length > 0) {
            var o = t.find(function (t) {
              return t.news_id === e;
            });
            if (o) {
              var n = o.relate_stocks;
              if (n) return n;
            }
          }
        }
        return [];
      },
      gdInfo: function () {
        var e = this.itemNewsId;
        if (e && this.newsData) {
          var t = this.newsData.stock_orders,
            o = void 0 === t ? {} : t,
            n = o && o[e];
          if (n && n.length) return this.gdList[n];
        }
        return null;
      },
    },
    methods: {
      forceHttpsAdvanced:
        require("../../../stock-news-core/utils/force2https.js")
          .forceHttpsAdvanced,
      gotoNewsDetail: function () {
        e.StockBridge.report("news.detail.lhlk_click", {
          newsid: this.itemNewsId,
        }),
          this.$emit("gotoNewsDetail", this.item);
      },
      goToStockDetail: function (e) {
        if (this.env.IS_LITE_MODE) {
          var t = e.market,
            n = e.cnName,
            i = e.scode;
          o.sdk.navigateToStockDetail({
            instance: this,
            stockCode: i,
            stockMarket: t,
            stockName: n,
            scrollToTop: !0,
          });
        }
      },
      goToBasketDetail: function (e) {
        this.env.IS_LITE_MODE &&
          this.$router.push({
            path: "/pages/stockBasket/detail",
            query: { gdId: e },
          });
      },
      onHeaderToggleClick: function (e, t) {
        this.$emit("onHeaderToggleClick", e, t);
      },
    },
  };
Array ||
  (
    e.resolveComponent("related-hq-group") +
    e.resolveComponent("basketEmbedHeader")
  )();
var i = e._export_sfc(n, [
  [
    "render",
    function (t, o, n, i, r, s) {
      return e.e(
        { a: e.t(s.newsTitle), b: s.newsType },
        s.newsType ? { c: e.t(s.newsType) } : {},
        { d: n.institution[s.brokerageName] },
        n.institution[s.brokerageName]
          ? {
              e: "url(".concat(
                s.forceHttpsAdvanced(n.institution[s.brokerageName] || ""),
                ")"
              ),
            }
          : {},
        {
          f: e.t("".concat(s.brokerageName, "：")),
          g: e.t(s.brokerageContent),
          h: s.relatedStock && s.relatedStock.length > 0 && !s.gdInfo,
        },
        s.relatedStock && s.relatedStock.length > 0 && !s.gdInfo
          ? {
              i: e.p({
                "news-id": s.itemNewsId,
                "relate-stock-list": s.relatedStock,
                "wzq-config": n.wzqConfig,
              }),
            }
          : {},
        {
          j: e.o(function () {
            return s.gotoNewsDetail && s.gotoNewsDetail.apply(s, arguments);
          }, 4908),
          k: s.gdInfo,
        },
        s.gdInfo
          ? {
              l: e.o(s.onHeaderToggleClick, 4909),
              m: e.o(s.goToStockDetail, 4910),
              n: e.o(s.goToBasketDetail, 4911),
              o: e.p({
                "is-news": !0,
                "news-data": { id: s.itemNewsId },
                "report-prefix": "news.morningreport",
                "report-extra": {
                  is_from_category: 1,
                  positionid: n.positionid,
                },
                "basket-data": s.gdInfo,
                "is-hstab-show": n.isOnShow,
                positionid: n.positionid,
              }),
            }
          : {},
        {
          p: e.o(function () {
            return s.gotoNewsDetail && s.gotoNewsDetail.apply(s, arguments);
          }, 4912),
          q: e.n(s.gdInfo ? "with-gd" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e87b31ec"],
]);
wx.createComponent(i);
