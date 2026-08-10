var t = require("../../../common/vendor.js"),
  e = requirePlugin("tencentvideo"),
  i = "stock-video-page-lastplay-videoid",
  n = {
    name: "VideoPlayerMP",
    components: {},
    props: {
      data: { type: Object, default: function () {} },
      layout: {
        type: Object,
        default: function () {
          return {};
        },
      },
      TagId: { type: String, default: "222" },
      reportPrefix: { type: [String, Number], default: "" },
      networkType: { type: String, default: "" },
      stockId: { type: String, default: "" },
      newsId: { type: String, default: "" },
    },
    data: function () {
      return {
        txvContext: null,
        playing: !1,
        played: !1,
        playerMute: !0,
        paused: !1,
        inWindow: !1,
        autoPlayStartTime: 0,
        playStartTime: 0,
        playPercent: 0,
        isCanShowThumb: !1,
        startType: 1,
      };
    },
    computed: {
      isChannels: function () {
        return this.data && 21 == +this.data.type;
      },
      videoId: function () {
        return this.data.video_id;
      },
    },
    mounted: function () {},
    onLoad: function (t) {},
    created: function () {},
    methods: {
      getPlayerId: function () {
        return "playermp_".concat(this.TagId);
      },
      onPlay: function (e) {
        (this.played = !0),
          (this.playing = !0),
          this.$emit("onPlayStatusChange", {
            status: "playing",
            vid: this.videoId,
          }),
          (this.playStartTime = Date.now()),
          (t.StockBridge.getStorage(i) || "") === this.videoId
            ? (this.startType = 2)
            : ((this.startType = 1), t.StockBridge.setStorage(i, this.videoId)),
          t.StockBridge.report("".concat(this.reportPrefix, ".video.play"), {
            newsid: this.newsId,
            start_type: this.startType,
            stockid: this.stockId,
          });
      },
      onPause: function (t) {
        (this.playing = !1),
          (this.paused = this.inWindow),
          this.reportPlayTime(),
          this.$emit("onPlayStatusChange", {
            status: "pause",
            vid: this.videoId,
          });
      },
      onEnd: function () {
        (this.playing = !1),
          (this.paused = this.inWindow),
          this.reportPlayTime(),
          this.$emit("onPlayStatusChange", {
            status: "end",
            vid: this.videoId,
          });
      },
      onError: function () {
        (this.playing = !1),
          (this.paused = this.inWindow),
          this.reportPlayTime(),
          this.$emit("onPlayStatusChange", {
            status: "error",
            vid: this.videoId,
          });
      },
      reportPlayTime: function () {
        t.StockBridge.report("".concat(this.reportPrefix, ".video.playtime"), {
          play_time: Date.now() - this.playStartTime,
          newsid: this.newsId,
          stockid: this.stockId,
          play_percentage: this.playPercent,
        });
      },
      onMaskTap: function () {},
      setInWindow: function (t) {
        this.inWindow = t;
      },
      play: function () {
        (this.paused = !1), this.playVideo(!0, !0);
      },
      pause: function () {
        this.pauseVideo(!1);
      },
      playVideo: function (e, i) {
        this.playing ||
          this.paused ||
          ((this.inWindow = e),
          this.txvContext && this.txvContext.play(),
          i &&
            ((this.autoPlayStartTime = Date.now()),
            t.Request.reportMTAData({
              eventName: "".concat(this.reportPrefix, ".video.autoPlay"),
            })));
      },
      pauseVideo: function (t) {
        this.playing &&
          ((this.inWindow = t), this.txvContext && this.txvContext.pause());
      },
      onTimeUpdate: function (t) {
        var e,
          i,
          n = null == (e = null == t ? void 0 : t.detail) ? void 0 : e.duration,
          a =
            null == (i = null == t ? void 0 : t.detail)
              ? void 0
              : i.currentTime;
        !a || !n || isNaN(a) || isNaN(n)
          ? (this.playPercent = 0)
          : (this.playPercent = (a / n).toFixed(4));
      },
      videoStateChange: function (t) {
        var i = t.detail.newstate;
        if ("ready" === i)
          this.txvContext = e.getTxvContext(this.getPlayerId());
        else {
          if ("playing" === i) return;
          "ended" === i &&
            ((this.playing = !1),
            (this.played = !1),
            (this.paused = !1),
            this.reportPlayTime());
        }
        this.$emit("onPlayStatusChange", { status: i, vid: this.videoId });
      },
    },
  },
  a = t._export_sfc(n, [
    [
      "render",
      function (e, i, n, a, o, s) {
        return t.e(
          { a: o.isCanShowThumb },
          o.isCanShowThumb ? { b: n.data.focus_img || n.data.thumb_img } : {},
          { c: s.videoId },
          s.videoId
            ? {
                d: n.layout.width,
                e: n.layout.height,
                f: s.videoId,
                g: s.getPlayerId(),
                h: n.data.focus_img || n.data.thumb_img,
                i: t.o(function () {
                  return s.onPlay && s.onPlay.apply(s, arguments);
                }, 3187),
                j: t.o(function () {
                  return s.onPause && s.onPause.apply(s, arguments);
                }, 3188),
                k: t.o(function () {
                  return s.onEnd && s.onEnd.apply(s, arguments);
                }, 3189),
                l: t.o(function () {
                  return s.onError && s.onError.apply(s, arguments);
                }, 3190),
                m: t.o(function () {
                  return (
                    s.videoStateChange && s.videoStateChange.apply(s, arguments)
                  );
                }, 3191),
                n: t.o(function () {
                  return s.onTimeUpdate && s.onTimeUpdate.apply(s, arguments);
                }, 3192),
              }
            : {},
          {
            o: t.o(function () {
              return s.onMaskTap && s.onMaskTap.apply(s, arguments);
            }, 3193),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7a456c12"],
  ]);
wx.createComponent(a);
