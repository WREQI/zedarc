var e = require("../Index.js"),
  i = require("../../../../../common/vendor.js"),
  r = null == navigator ? void 0 : navigator.userAgent,
  s = {
    name: "ReverseMoreLiveDialog",
    components: {
      ReverseMoreLiveList: function () {
        return "./ReverseMoreLiveList.js";
      },
    },
    inject: { hqBridge: { default: function () {} } },
    props: {
      showReverseDialog: Boolean,
      hasSubscribed: Boolean,
      liveSubjectList: Array,
      topPosition: Number,
      isSharePage: Boolean,
    },
    data: function () {
      return {
        isAndroid: /\bAndroid([^;]+)/.test(r),
        showSubscribeBanner: !1,
        animClass: "",
        canShow: !1,
      };
    },
    computed: {
      sharePageClass: function () {
        return this.isSharePage ? "sharePage" : "";
      },
    },
    watch: {
      showReverseDialog: function (e) {
        var i = this;
        e &&
          ((this.animClass = "fade-enter-active"),
          this.$nextTick(function () {
            i.canShow = !0;
          }),
          this.updateSubscribeBannerShow(),
          this.$emit("report", "news.live-detail.reverse_more_explore"));
      },
    },
    created: function () {},
    methods: {
      closeSubscribeBar: function () {
        e.setItem(e.SUBSCRIBE_WXMSG_STORAGE_KEY, !0),
          this.hqBridge.busEmit(e.SUBSCRIBE_WXMSG_STORAGE_KEY),
          (this.showSubscribeBanner = !1);
      },
      updateSubscribeBannerShow: function () {
        var i = e.getItem(e.SUBSCRIBE_WXMSG_STORAGE_KEY);
        this.showSubscribeBanner = null == i;
      },
      onReverseMoreLiveClose: function () {
        var e = this;
        (this.animClass = "fade-leave-active"),
          setTimeout(function () {
            (e.canShow = !1), e.$emit("onReverseMoreLiveClose");
          }, 400);
      },
      onSubscribe: function () {
        this.$emit("onSubscribe"),
          this.$emit(
            "report",
            "news.live-detail.reverse_more_subscribebar_click"
          );
      },
      handleTapLiveCard: function (e) {
        this.$emit("tapLiveCard", e);
      },
      onReserveOne: function (e) {
        var i,
          r,
          s,
          n,
          o = {};
        20 ===
          (null == (i = null == e ? void 0 : e.extra_info)
            ? void 0
            : i.live_status) &&
        1 ===
          (null == (r = null == e ? void 0 : e.extra_info)
            ? void 0
            : r.reserve_flag)
          ? (o = { event: "cancel_reverse", liveId: e.id })
          : 20 ===
              (null == (s = null == e ? void 0 : e.extra_info)
                ? void 0
                : s.live_status) &&
            2 ===
              (null == (n = null == e ? void 0 : e.extra_info)
                ? void 0
                : n.reserve_flag) &&
            ((o = { event: "reverse", liveId: e.id }),
            this.$emit(
              "report",
              "news.live-detail.reverse_more_reverse_click"
            )),
          this.$emit("onReserve", o);
      },
    },
  };
Array || i.resolveComponent("reverse-more-live-list")();
var n = i._export_sfc(s, [
  [
    "render",
    function (e, r, s, n, o, t) {
      return i.e(
        { a: s.showReverseDialog && o.canShow },
        s.showReverseDialog && o.canShow
          ? {
              b: i.o(t.onReverseMoreLiveClose, 4599),
              c: i.o(t.closeSubscribeBar, 4600),
              d: i.o(t.onSubscribe, 4601),
              e: i.o(t.handleTapLiveCard, 4602),
              f: i.o(t.onReserveOne, 4603),
              g: i.p({
                "has-subscribed": s.hasSubscribed,
                "live-subject-list": s.liveSubjectList,
                "show-subscribe-banner": o.showSubscribeBanner,
              }),
              h: i.n(o.animClass),
              i: i.n(t.sharePageClass),
              j: s.topPosition + "px",
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b5908d58"],
]);
wx.createComponent(n);
