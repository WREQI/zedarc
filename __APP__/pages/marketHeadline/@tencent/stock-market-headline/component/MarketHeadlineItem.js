var e = require("../../stock-news-sdk/index.js"),
  t = require("../../stock-news-core/utils/market.js"),
  i = require("../../stock-news-core/utils/force2https.js"),
  s = require("../../../../../common/vendor.js"),
  n = {
    name: "MarketHeadLineTopItem",
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
    },
    props: {
      item: { type: Object, default: function () {} },
      subscribeNum: { type: String, default: "" },
      isSubscribe: { type: Boolean, default: !1 },
      slist: { type: Object, default: function () {} },
      showWatchList: { type: Boolean, default: !1 },
    },
    data: function () {
      return { readedForce: !1 };
    },
    computed: {
      shareFlag: function () {
        var e;
        return null == (e = this.didAgreeUserAgreement) ? void 0 : e.value;
      },
      isBigCard: function () {
        return this.item.isBigCard;
      },
      newsItemType: function () {
        var e;
        return null != (e = this.item.news_type) ? e : this.item.type;
      },
      newsItemId: function () {
        return this.item.news_id || this.item.id;
      },
      isLive: function () {
        return 14 == +this.newsItemType;
      },
      isVideo: function () {
        return 7 == +this.newsItemType;
      },
      isSubject: function () {
        return 4 == +this.newsItemType;
      },
      isMorningReport: function () {
        return 2 == +this.item.special_type;
      },
      isLiveCalendar: function () {
        return 1 == +this.item.special_type;
      },
      hasRelatedStock: function () {
        var t = this.item.extra_info || {},
          i = t.stock_code,
          s = t.stock_name;
        return i && s && e.sdk.isStockCodeSupport(i);
      },
      enableRelatedStock: function () {
        var e = (this.item || {}).watchList;
        return !e || !e.info;
      },
      stockMarketIcon: function () {
        var e = (this.item.extra_info || {}).stock_code;
        return e && t.getMarketIcon(e);
      },
      relatedStockName: function () {
        return (this.item.extra_info || {}).stock_name || "";
      },
      relatedStockChangeColor: function () {
        var e = (this.item.extra_info || {}).chg_percent;
        return +e > 0 ? "red" : +e < 0 ? "green" : "stop";
      },
      relatedStockChangeText: function () {
        var e = (this.item.extra_info || {}).chg_percent;
        return null === e || "" === e || void 0 === e
          ? "--"
          : +e > 0
          ? "+".concat(e, "%")
          : "".concat(e, "%");
      },
      isPortFolioAdded: function () {
        var e = (this.item.extra_info || {}).stock_code,
          t = e && e.split(".")[0];
        return t && 1 == +this.slist[t];
      },
    },
    watch: {
      slist: {
        immediate: !0,
        handler: function (e) {
          e &&
            Object.prototype.hasOwnProperty.call(e, "response") &&
            this.reportStockBrow();
        },
      },
    },
    methods: {
      forceHttpsAdvanced: i.forceHttpsAdvanced,
      handleItemClick: function () {
        var t = this;
        this.isLiveCalendar
          ? e.sdk.navigateToLiveCalendar({
              instance: this,
              date: this.item.publish_time,
            })
          : this.isMorningReport
          ? e.sdk.navigateToMorningReport({
              instance: this,
              id: this.newsItemId,
            })
          : this.isLive
          ? e.sdk.navigateToLiveDetail({ instance: this, id: this.newsItemId })
          : this.isSubject
          ? e.sdk.navigateToNewsSubject({ instance: this, id: this.newsItemId })
          : this.isVideo
          ? e.sdk.navigateToVideoDetail({ instance: this, id: this.newsItemId })
          : e.sdk.navigateToNewsDetail({ instance: this, id: this.newsItemId }),
          this.$emit("jumpToDetail", this.item),
          setTimeout(function () {
            t.readedForce = !0;
          }, 300);
      },
      handleShare: function () {
        this.$emit("setShareInfo", this.item);
      },
      onSubscribe: function (e) {
        this.$emit("onSubscribe", e);
      },
      getStockReportInfo: function () {
        return {
          newsid: this.newsItemId,
          fchannel_id_fm_i: "ILe00p000l138",
          stocklist: this.item.extra_info.stock_code,
          hasaddlist: this.isPortFolioAdded ? "1" : "0",
        };
      },
      addStockToZixuan: function () {
        var e = !this.isPortFolioAdded,
          t = this.item.extra_info.stock_code;
        this.$emit("manageSelfStock", { stockCode: t, isFollow: e });
        var i =
            "hq.market.market_headline_list_stock_click_" +
            (e ? "add" : "cancel"),
          s = this.getStockReportInfo();
        this.$emit("dataReport", { eventName: i, dataObject: s });
      },
      reportStockBrow: function () {
        if (this.hasRelatedStock && !this.stockBrowHasReported) {
          var e = this.getStockReportInfo();
          this.$emit("dataReport", {
            eventName: "hq.market.market_headline_list_stock_brow",
            dataObject: e,
          }),
            (this.stockBrowHasReported = !0);
        }
      },
      handleStockClick: function () {
        var t = this.item.extra_info,
          i = t.stock_code,
          s = t.stock_name,
          n = i.slice(0, 2),
          o = ["sz", "sh", "hk", "us"].indexOf(n);
        e.sdk.navigateToStockDetail({
          instance: this,
          stockCode: i.slice(2),
          stockMarket: -1 === o ? n : "".concat(o),
          stockName: s,
          scrollToTop: !0,
        });
      },
    },
  },
  o = s._export_sfc(n, [
    [
      "render",
      function (e, t, i, n, o, r) {
        return s.e(
          { a: i.item.showSubscribe },
          i.item.showSubscribe
            ? s.e(
                { b: s.t(i.subscribeNum), c: i.isSubscribe },
                i.isSubscribe
                  ? {}
                  : {
                      d: s.o(function (e) {
                        return r.onSubscribe(!0);
                      }, 3251),
                    }
              )
            : {},
          { e: r.isBigCard },
          r.isBigCard ? { f: r.forceHttpsAdvanced(i.item.focus_image) } : {},
          {
            g: s.t(i.item.title),
            h: s.t(i.item.summary),
            i: !r.isBigCard && i.item.thumb_image,
          },
          !r.isBigCard && i.item.thumb_image
            ? { j: r.forceHttpsAdvanced(i.item.thumb_image) }
            : {},
          { k: r.hasRelatedStock && r.enableRelatedStock },
          r.hasRelatedStock && r.enableRelatedStock
            ? s.e(
                { l: r.stockMarketIcon },
                r.stockMarketIcon
                  ? { m: r.forceHttpsAdvanced(r.stockMarketIcon) }
                  : {},
                {
                  n: s.t(r.relatedStockName),
                  o: s.t(r.relatedStockChangeText),
                  p: s.n(r.relatedStockChangeColor),
                  q: r.isPortFolioAdded,
                },
                (r.isPortFolioAdded, {}),
                {
                  r: s.o(function (e) {
                    return r.addStockToZixuan();
                  }, 3252),
                  s: s.o(function () {
                    return (
                      r.handleStockClick &&
                      r.handleStockClick.apply(r, arguments)
                    );
                  }, 3253),
                }
              )
            : {},
          { t: r.isLive },
          (r.isLive, {}),
          { v: r.isLive },
          (r.isLive ||
            r.isMorningReport ||
            r.isLiveCalendar ||
            r.isVideo ||
            r.isSubject,
          {}),
          {
            w: r.isMorningReport,
            x: r.isLiveCalendar,
            y: r.isVideo,
            z: r.isSubject,
            A: s.t(i.item.source),
            B: s.t(i.item.timeStr),
            C: i.item.readed || o.readedForce,
          },
          (i.item.readed || o.readedForce, {}),
          { D: r.shareFlag },
          (r.shareFlag, {}),
          {
            E: s.o(function () {
              return r.handleShare && r.handleShare.apply(r, arguments);
            }, 3254),
            F: s.n(i.item.showSubscribe ? "subscribe" : ""),
            G: s.n(i.showWatchList ? "withGD" : ""),
            H: s.o(function () {
              return r.handleItemClick && r.handleItemClick.apply(r, arguments);
            }, 3255),
          }
        );
      },
    ],
    ["__scopeId", "data-v-a71936c7"],
  ]);
wx.createComponent(o);
