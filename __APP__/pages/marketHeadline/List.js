var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t, a) {
    return new Promise(function (n, i) {
      var r = function (e) {
          try {
            s(a.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            s(a.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, o);
        };
      s((a = a.apply(e, t)).next());
    });
  },
  h = require("../../common/vendor.js"),
  c = { exports: {} };
(c.exports = {
  wxml: function (e) {
    return '<view class="marketHeadlineContainer">\n            <image class="focusImage" src="'
      .concat(
        e.focus_img,
        '" mode="aspectFill"></image>\n            <text class="newsTitle">'
      )
      .concat(e.title, '</text>\n            <text class="newsContent">')
      .concat(e.summary, "</text>\n        </view>");
  },
  style: {
    marketHeadlineContainer: {
      width: 375,
      height: 300,
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
    },
    newsTitle: {
      width: 375,
      height: 52,
      color: "#262E40",
      fontSize: 18,
      fontWeight: "bold",
    },
    focusImage: { width: 375, height: 183, borderRadius: 8, marginBottom: 16 },
    newsContent: {
      width: 375,
      height: 85,
      marginTop: 8,
      color: "#7A8499",
      fontSize: 15,
    },
  },
}),
  (null == c.exports ? {} : c.exports).default || c.exports;
var l = new h.HQBridge();
getApp().globalData;
var u = {
  components: {
    MarketHeadlineList: function () {
      return "./@tencent/stock-market-headline/MarketHeadlineList.js";
    },
    PrivacyPolicyModal: function () {
      return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
    },
  },
  provide: function () {
    return {
      hqBridge: this.hqBridge,
      didAgreeUserAgreement: this.didAgreeUserAgreement,
      onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
    };
  },
  data: function () {
    return {
      showLoading: !1,
      requestFailed: !1,
      isDataReady: !1,
      hqBridge: l,
      newsList: [],
      shareItem: null,
      isSharePage: !1,
      showPrivacyPolicy: !1,
      didAgreeUserAgreement: h.reactive({ value: !0 }),
      isOnShow: !1,
    };
  },
  onLoad: function (e) {
    var t = this,
      a = (
        (h.wx$1.getWindowInfo && h.wx$1.getWindowInfo()) ||
        h.wx$1.getSystemInfoSync()
      ).windowHeight;
    (this.windowHeight = a),
      h.wx$1.onWindowResize(function (e) {
        e && e.size && (t.windowHeight = e.size.windowWidth);
      }),
      this.handleDataReport({
        eventName: "hq.market.market_headline_list_brow",
      }),
      (this.isSharePage = 1 == +e.__share_flag__ || 1 == +e.__menu_flag__),
      this.subUserAgreementStatus(),
      setTimeout(function () {
        t.isDataReady || (t.showLoading = !0);
      }, 300);
  },
  onUnload: function () {
    this.unsubUserAgreementStatus();
  },
  onShow: function () {
    var e;
    null == (e = this.$refs.detail) || e.mpOnShow(), (this.isOnShow = !0);
  },
  onHide: function () {
    this.isOnShow = !1;
  },
  onPullDownRefresh: function () {
    return s(
      this,
      null,
      t().mark(function e() {
        var a;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    null == (a = this.$refs.detail) ? void 0 : a.loadNewsList()
                  );
                case 3:
                  h.wx$1.stopPullDownRefresh(), (e.next = 9);
                  break;
                case 6:
                  (e.prev = 6),
                    (e.t0 = e.catch(0)),
                    h.wx$1.stopPullDownRefresh();
                case 9:
                case "end":
                  return e.stop();
              }
          },
          e,
          this,
          [[0, 6]]
        );
      })
    );
  },
  onPageScroll: function (e) {
    var t = e.scrollTop,
      a = void 0 === t ? 0 : t;
    !this.item3Brow &&
      a + this.windowHeight > 1300 &&
      ((this.item3Brow = !0),
      this.handleDataReport({
        eventName: "hq.market.market_headline_list_item3_brow",
      })),
      !this.item7Brow &&
        a + this.windowHeight > 2e3 &&
        ((this.item7Brow = !0),
        this.handleDataReport({
          eventName: "hq.market.market_headline_list_item7_brow",
        }));
    var n = this.contentTotalHeight - 100;
    !this.itemBottomBrow &&
      this.contentTotalHeight &&
      a + this.windowHeight >= n &&
      ((this.itemBottomBrow = !0),
      this.handleDataReport({
        eventName: "hq.market.market_headline_list_bottom_brow",
      }));
  },
  computed: {
    pageStatus: function () {
      return this.isDataReady || this.requestFailed
        ? !this.isDataReady && this.requestFailed
          ? h.COMMON_PAGE_STATUS.ERROR
          : ""
        : h.COMMON_PAGE_STATUS.LOADING;
    },
  },
  methods: {
    onErrorRetry: function () {
      var e;
      (this.requestFailed = !1),
        null == (e = this.$refs.detail) || e.loadNewsList();
    },
    checkUserAgreementStatus: function () {
      var e = !0;
      try {
        var t = h.StockBridge.store.protocolStatus;
        "string" == typeof t && (e = "agree" === t);
      } catch (e) {}
      return (this.didAgreeUserAgreement.value = e), this.updateShareMenu(e), e;
    },
    updateShareMenu: function (e) {
      e
        ? h.wx$1.showShareMenu({ menus: ["shareAppMessage", "shareTimeline"] })
        : h.wx$1.hideShareMenu();
    },
    subUserAgreementStatus: function () {
      this.checkUserAgreementStatus() ||
        (this.unsubUserAgreementStatus(),
        h.StockBridge.store.subscribeProtocolStatus(
          this.handleProtocolStatusChange
        ));
    },
    unsubUserAgreementStatus: function () {
      h.StockBridge.store.unsubscribeProtocolStatus(
        this.handleProtocolStatusChange
      );
    },
    onCheckUserAgreementStatus: function () {
      this.didAgreeUserAgreement.vlaue || (this.showPrivacyPolicy = !0);
    },
    handleDataReport: function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = t.eventName,
        s = t.dataObject,
        c = void 0 === s ? {} : s;
      h.Request.reportMTAData(
        (function (t, a) {
          for (var s in a || (a = {})) i.call(a, s) && o(t, s, a[s]);
          if (n) {
            var h,
              c = e(n(a));
            try {
              for (c.s(); !(h = c.n()).done; ) {
                s = h.value;
                r.call(a, s) && o(t, s, a[s]);
              }
            } catch (e) {
              c.e(e);
            } finally {
              c.f();
            }
          }
          return t;
        })({ eventName: a }, c)
      );
    },
    handleDataReady: function (e) {
      var t = this;
      e
        ? ((this.showLoading = !1),
          (this.requestFailed = !1),
          (this.isDataReady = !0),
          (this.newsList = e),
          setTimeout(function () {
            h.wx$1
              .createSelectorQuery()
              .in(t)
              .select(".market-headline-container")
              .boundingClientRect(function (e) {
                t.contentTotalHeight = e.height;
              })
              .exec();
          }, 1e3))
        : (this.requestFailed = !0);
    },
    handleShareItemDetail: function (e) {
      this.didAgreeUserAgreement.value
        ? (this.shareItem = e)
        : this.onCheckUserAgreementStatus();
    },
  },
  onShareAppMessage: function () {
    return s(
      this,
      null,
      t().mark(function e() {
        var a, n, i, r, o, s, h, c;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (a = this.shareItem
                      ? "你的好友邀请你一起阅读"
                      : "你的好友邀请你一起看今日市场头条"),
                    (n =
                      this.shareItem ||
                      (this.newsList && this.newsList[0]) ||
                      {}),
                    (i = this.shareItem ? "news" : "page"),
                    (r = this.shareItem ? "OiI00p000h022" : "O7M00p000h021"),
                    (o = n.id),
                    (s = n.type),
                    (h = n.special_type),
                    e.abrupt(
                      "return",
                      ((c = this.shareItem
                        ? 2 === h
                          ? "/pages/report/morning/main?id="
                              .concat(
                                o,
                                "&articleStyle=card&subtype=morningreportcard&stat_data="
                              )
                              .concat(r)
                          : 4 == +s
                          ? "/pages/newsCon/topic/main?id="
                              .concat(o, "&stat_data=")
                              .concat(r)
                          : 14 == +s
                          ? "/pages/live/liveDetail?id="
                              .concat(o, "&stat_data=")
                              .concat(r)
                          : 7 == +s
                          ? "/pages/newsCon/video/videoDetail?id="
                              .concat(o, "&stat_data=")
                              .concat(r)
                          : "/pages/newsCon/newsDetail/main?id="
                              .concat(o, "&stat_data=")
                              .concat(r)
                        : "/pages/marketHeadline/List?stat_data=".concat(r)),
                      this.handleDataReport({
                        eventName:
                          "hq.market.market_headline_list_share".concat(
                            i,
                            "_click"
                          ),
                        dataObject: { newsid: n.id, fchannel_id_fm: r },
                      }),
                      (this.shareItem = null),
                      { title: a, path: c })
                    )
                  );
                case 2:
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
  onShareTimeline: function () {
    var e = "OJq00p000h021";
    return (
      this.handleDataReport({
        eventName: "hq.market.market_headline_list_sharepage_click",
        dataObject: { fchannel_id_fm: e },
      }),
      {
        title: "你的好友邀请你一起看今日市场头条",
        path: "/pages/marketHeadline/List?stat_data=".concat(e),
        query: "stat_data=".concat(e),
      }
    );
  },
};
Array ||
  (
    h.resolveComponent("mp-privacy-dialog") +
    h.resolveComponent("stock-privacy-dialog") +
    h.resolveComponent("st-status") +
    h.resolveComponent("market-headline-list") +
    h.resolveComponent("PrivacyPolicyModal")
  )();
var d = h._export_sfc(u, [
  [
    "render",
    function (e, t, a, n, i, r) {
      return h.e(
        { a: e.rootFontSize, b: i.showLoading },
        i.showLoading
          ? { c: h.o(r.onErrorRetry, 311), d: h.p({ type: r.pageStatus }) }
          : {},
        {
          e: h.sr("detail", "8ee6b330-3"),
          f: i.isDataReady,
          g: h.o(r.handleDataReady, 312),
          h: h.o(r.handleDataReport, 313),
          i: h.o(r.handleShareItemDetail, 314),
          j: h.p({ "is-on-show": i.isOnShow }),
          k: h.o(function (e) {
            return (i.showPrivacyPolicy = e);
          }, 315),
          l: h.p({ value: i.showPrivacyPolicy }),
          m: h.n(i.isSharePage ? "sharePage" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8ee6b330"],
]);
(u.__runtimeHooks = 7), wx.createPage(d);
