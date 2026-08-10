var e = require("../../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  o = require("../../../../../../common/vendor.js"),
  t = e.detect().env.IS_ZXG_XCX_ALLH5,
  n = {
    components: {
      TopHeadline: function () {
        return "./TopHeadline.js";
      },
      yaowenItem: function () {
        return "./yaowenItem.js";
      },
      yaowenFeedbackItem: function () {
        return "./yaowenFeedbackItem.js";
      },
      GoodAndBadNews: function () {
        return "./GoodAndBadNews.js";
      },
      Supporter: function () {
        return "../Supporter.js";
      },
      videoCard: function () {
        return "./videoCard.js";
      },
      BigItem: function () {
        return "./BigItem.js";
      },
      RecomSpliter: function () {
        return "../RecomSpliter.js";
      },
    },
    props: {
      showHeadline: { type: Boolean, default: !1 },
      importantBanners: {
        type: Array,
        default: function () {
          return [];
        },
      },
      currentBanner: { type: Number, default: 0 },
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      videoCssError: { type: Boolean, default: !1 },
      playerMute: { type: Boolean, default: !0 },
      isFeedRecom: { type: Boolean, default: !1 },
      loadAll: { type: Boolean, default: !1 },
      eventIndex: { type: Number, default: -1 },
    },
    data: function () {
      return { isInMpZxg: t, observer: null };
    },
    watch: {
      list: function (e) {
        e && this.checkMpExposure();
      },
    },
    mounted: function () {
      this.checkMpExposure();
    },
    beforeDestroy: function () {
      this.observer && this.observer.disconnect();
    },
    methods: {
      shouldShowRecommendSpliter: function (e) {
        return this.isFeedRecom && (null == e ? void 0 : e.showSpliter);
      },
      shouldShowSeperator: function (e) {
        var o,
          t = null == (o = this.list) ? void 0 : o[e + 1];
        return !this.shouldShowRecommendSpliter(t);
      },
      openHeadlineItem: function (e, o) {
        this.$emit("openHeadlineItem", e, o);
      },
      isNeedToShowInVideoCard: function (e, o) {
        return (
          1 !== e.isFeedback &&
          (7 === e.type || 8 === e.type || (21 === e.type && o >= 7))
        );
      },
      openVideoCard: function (e, o) {
        this.$emit("openVideoCard", e, o);
      },
      onMuteStatusChange: function (e) {
        this.$emit("onMuteStatusChange", e);
      },
      goodAndBadClick: function (e, o, t) {
        this.$emit("goodAndBadClick", e, o, t);
      },
      goodAndBadNewsExposure: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          o = arguments.length > 1 ? arguments[1] : void 0,
          t = arguments.length > 2 ? arguments[2] : void 0;
        this.$emit("goodAndBadNewsExposure", e, o, t);
      },
      open: function (e, o) {
        this.$emit("open", e, o);
      },
      feedbackExposed: function (e, o) {
        this.$emit("feedbackExposed", e, o);
      },
      feedbackDismiss: function (e) {
        this.$emit("feedbackDismiss", e);
      },
      showFeedback: function (e) {
        this.$emit("showFeedback", e);
      },
      checkMpExposure: function () {
        var e = this;
        this.observer && this.observer.disconnect(),
          (this.observer = this.createIntersectionObserver({
            observeAll: !0,
            thresholds: [0, 0.5, 0.7, 1],
          })),
          this.observer
            .relativeToViewport()
            .observe(".news-item", function (o) {
              var t = o.intersectionRatio;
              if (!(t <= 0 || t < 0.01) && t >= 0.7) {
                var n = o.dataset,
                  i = n.id,
                  r = n.flow,
                  s = n.recall,
                  d = n.index,
                  a = n.type;
                e.$emit("handleSendReportData", {
                  id: i,
                  flow: r,
                  recall: s,
                  index: d,
                  type: a,
                  limit: 10,
                });
              }
            });
      },
      checkH5Exposure: function () {
        var e = this;
        this.observer && this.observer.disconnect(),
          (this.observer = new IntersectionObserver(
            function (o) {
              o.forEach(function (o) {
                var t = o.intersectionRatio;
                if (!(t <= 0 || t < 0.01) && t >= 0.7) {
                  var n = o.target,
                    i = n.dataset,
                    r = i.id,
                    s = i.flow,
                    d = i.recall,
                    a = i.index,
                    l = i.type;
                  e.$emit("handleSendReportData", {
                    id: r,
                    flow: s,
                    recall: d,
                    index: a,
                    type: l,
                    limit: 10,
                  }),
                    e.observer.unobserve(n);
                }
              });
            },
            { threshold: [0.7], rootMargin: "0px" }
          )),
          this.$el.querySelectorAll(".news-item").forEach(function (o) {
            e.observer.observe(o);
          });
      },
    },
  };
Array ||
  (
    o.resolveComponent("top-headline") +
    o.resolveComponent("videoCard") +
    o.resolveComponent("GoodAndBadNews") +
    o.resolveComponent("recom-spliter") +
    o.resolveComponent("big-item") +
    o.resolveComponent("yaowenFeedbackItem") +
    o.resolveComponent("yaowenItem") +
    o.resolveComponent("Supporter")
  )();
var i = o._export_sfc(n, [
  [
    "render",
    function (e, t, n, i, r, s) {
      return o.e(
        {
          a:
            n.showHeadline &&
            n.importantBanners &&
            n.importantBanners.length > 0,
        },
        n.showHeadline && n.importantBanners && n.importantBanners.length > 0
          ? {
              b: o.o(s.openHeadlineItem, 4986),
              c: o.p({ "top-list": n.importantBanners }),
            }
          : {},
        {
          d: o.f(n.list, function (e, t, i) {
            return o.e(
              { a: s.isNeedToShowInVideoCard(e, t) },
              s.isNeedToShowInVideoCard(e, t)
                ? {
                    b: o.sr("videoCard", "f5f4b037-1-" + i, { f: 1 }),
                    c: o.o(
                      function (o) {
                        return s.openVideoCard(e, t + 1);
                      },
                      4987,
                      t + "_" + e.id
                    ),
                    d: o.o(s.onMuteStatusChange, 4988, t + "_" + e.id),
                    e: "f5f4b037-1-" + i,
                    f: o.p({
                      "video-css-error": n.videoCssError,
                      data: e,
                      index: t,
                      "player-mute": n.playerMute,
                    }),
                    g: e.id,
                    h: e.id,
                    i: e.flow_id,
                    j: e.recall_type,
                    k: t + 1,
                    l: e.type,
                  }
                : 13 == e.cont_type
                ? {
                    n: o.o(s.goodAndBadClick, 4989, t + "_" + e.id),
                    o: o.o(s.goodAndBadNewsExposure, 4990, t + "_" + e.id),
                    p: "f5f4b037-2-" + i,
                    q: o.p({ index: t + 1, "lhlk-data": e }),
                  }
                : o.e(
                    { r: s.shouldShowRecommendSpliter(e) },
                    s.shouldShowRecommendSpliter(e)
                      ? {
                          s: o.sr("wntj", "f5f4b037-3-" + i, { f: 1 }),
                          t: "f5f4b037-3-" + i,
                        }
                      : {},
                    { v: e.img_display_mode > 1 && 1 !== e.isFeedback },
                    e.img_display_mode > 1 && 1 !== e.isFeedback
                      ? {
                          w: o.o(
                            function (o) {
                              return s.open(e, t + 1);
                            },
                            4991,
                            t + "_" + e.id
                          ),
                          x: "f5f4b037-4-" + i,
                          y: o.p({
                            data: e,
                            "list-type": "yaowen",
                            "no-border": t == n.eventIndex - 1,
                          }),
                        }
                      : 1 == e.isFeedback
                      ? {
                          A: o.o(
                            function (o) {
                              return s.feedbackExposed(e, t + 1);
                            },
                            4992,
                            t + "_" + e.id
                          ),
                          B: o.o(
                            function (o) {
                              return s.feedbackDismiss(e);
                            },
                            4993,
                            t + "_" + e.id
                          ),
                          C: o.o(
                            function (o) {
                              return s.open(e, t + 1);
                            },
                            4994,
                            t + "_" + e.id
                          ),
                          D: o.o(
                            function (o) {
                              return s.showFeedback(e);
                            },
                            4995,
                            t + "_" + e.id
                          ),
                          E: "f5f4b037-5-" + i,
                          F: o.p({
                            news: e,
                            dismiss: e.feedbackDismiss,
                            exposed: e.feedbackExposed,
                          }),
                        }
                      : {
                          G: o.o(
                            function (o) {
                              return s.open(e, t + 1);
                            },
                            4996,
                            t + "_" + e.id
                          ),
                          H: "f5f4b037-6-" + i,
                          I: o.p({
                            news: e,
                            "show-seperator": s.shouldShowSeperator(t),
                          }),
                        },
                    {
                      z: 1 == e.isFeedback,
                      J: "".concat(e.showSpliter || !1),
                      K: e.id,
                      L: e.flow_id,
                      M: e.recall_type,
                      N: t + 1,
                      O: e.type,
                    }
                  ),
              {
                m: 13 == e.cont_type,
                P: t + "_" + e.id,
                Q: o.n("hq_container_" + t),
              }
            );
          }),
          e: !r.isInMpZxg && n.list.length,
        },
        !r.isInMpZxg && n.list.length
          ? { f: o.p({ "load-all": n.loadAll }) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-f5f4b037"],
]);
wx.createComponent(i);
