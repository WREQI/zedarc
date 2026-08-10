var e = require("../../../common/vendor.js"),
  t = require("../../../utils/mixins/privacy.js"),
  n = getApp().globalData,
  a = new e.HQBridge(),
  i = {
    components: {
      NewSubject: function () {
        return "../../newsSbg/@tencent/stock-news-subject/Index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5ld3Mtc3ViamVjdC9JbmRleC52dWU;
          }
        );
      },
    },
    mixins: [t.privacy],
    provide: function () {
      return { useBroker: e.useBrokerInfo(), hqBridge: a };
    },
    data: function () {
      return {
        img: "",
        digest: "",
        themeList: [],
        bannerClass: "banner-zxg",
        params: {},
        localReadedNewsIds: "",
        enterTime: 0,
        hqBridge: a,
        skin: "",
      };
    },
    created: function () {
      var e = this;
      n.setSkin(function (t) {
        e.skin = t;
      });
    },
    onLoad: function (t) {
      (this.localReadedNewsIds =
        e.wx$1.getStorageSync("subject/readingflag") || ""),
        (this.params = { id: t.id }),
        t.from &&
          "focus" === t.from &&
          e.Request.reportMTAData({
            eventName: "news.mini.subject.visitedFocus",
          }),
        e.Request.reportMTAData({ eventName: "news.mini.subject.visited" });
    },
    onShareAppMessage: function () {
      var t = this.params,
        n = this.topicTitle,
        a = void 0 === n ? "" : n;
      return (
        e.Request.reportMTAData({
          eventName: "news.mini.detail.share",
          newsid: t.id,
        }),
        {
          title: "【专题】".concat(a),
          path: "pages/newsCon/topic/main?id=".concat(t.id),
        }
      );
    },
    onShareTimeline: function () {
      var t = this.params,
        n = this.topicTitle,
        a = void 0 === n ? "" : n;
      return (
        e.Request.reportMTAData({
          eventName: "news.mini.detail.share",
          newsid: t.id,
        }),
        { title: "【专题】".concat(a), query: "id=".concat(t.id) }
      );
    },
    onPullDownRefresh: function () {
      e.wx$1.stopPullDownRefresh();
    },
    onShow: function () {
      this.enterTime = Date.now();
    },
    onHide: function () {
      e.Request.reportMTAData({
        time: Date.now() - this.enterTime,
        eventName: "news.subject.detail.stay_time",
      });
    },
    onUnload: function () {
      e.Request.reportMTAData({
        time: Date.now() - this.enterTime,
        eventName: "news.subject.detail.stay_time",
      });
    },
    methods: {
      dataLoaded: function (e) {
        var t;
        this.topicTitle = null != (t = null == e ? void 0 : e.title) ? t : "";
      },
      handleDataReport: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.eventName;
        t.dataObject;
        e.Request.reportMTAData({ eventName: n });
      },
      handleTapDetail: function (t) {
        var a = t.data,
          i = a.news_id,
          o = void 0 === i ? "" : i,
          r = a.title,
          s = a.articletype,
          c = a.time,
          d = a.source,
          l = a.video_info,
          u = a.url;
        if ("SN202307271640248473decb" !== o)
          26 == +s && u
            ? e.wx$1.navigateTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(u)
                ),
              })
            : 7 == +s || 8 == +s
            ? (l && l.course_id) ||
              n.navigateTo({
                url: "/pages/newsCon/video/videoDetail?id=".concat(o),
              })
            : 14 == +s
            ? n.navigateTo({ url: "/pages/live/liveDetail?id=".concat(o) })
            : 4 == +s
            ? n.navigateTo({ url: "/pages/newsCon/topic/main?id=".concat(o) })
            : n.navigateTo({
                url: "../newsDetail/main?id="
                  .concat(o, "&zxtype=")
                  .concat(s, "&title=")
                  .concat(r, "&date=")
                  .concat(c, "&source=")
                  .concat(d),
              }),
            e.Request.reportMTAData({
              eventName: "news.mini.subject.newsClick",
            });
        else {
          e.Request.reportMTAData({
            eventName: "news.mini.subject.etf_match_entry",
          });
          e.wx$1.navigateTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://zqact03.tenpay.com/activity/page/etfEnrollMatchTwoPhase/#/index?target=rank"
              )
            ),
          });
        }
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("NewSubject")
  )();
var o = e._export_sfc(i, [
  [
    "render",
    function (t, n, a, i, o, r) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("newSubject", "e0605b51-2"),
        d: e.o(r.handleTapDetail, 287),
        e: e.o(r.handleDataReport, 288),
        f: e.o(r.dataLoaded, 289),
        g: e.p({ params: o.params, "readed-news": o.localReadedNewsIds }),
        h: e.n("black" === o.skin ? "black" : ""),
        i: o.skin,
      };
    },
  ],
  ["__scopeId", "data-v-e0605b51"],
]);
(i.__runtimeHooks = 6), wx.createPage(o);
