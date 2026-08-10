var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-news-core/utils/force2https.js"),
  i = "mpzxg-livedetail-lastplay-videoid",
  l = {
    components: {
      LivePlayerMask: function () {
        return "./LivePlayerMask.js";
      },
    },
    props: {
      live: { type: Object, default: null },
      mute: { type: Boolean, default: !1 },
      stockId: { type: String, default: "" },
    },
    data: function () {
      return {
        liveStartPlayTime: 0,
        videoContext: null,
        isPlaying: !1,
        curSliderValue: 0,
        playableTime: 0,
        isSliderChanging: !1,
        dMute: !1,
        isFullScreen: !1,
        hideControlsTimer: null,
        playStatus: null,
        platform: "",
        seekTimer: null,
        playPercent: 0,
        startType: 1,
      };
    },
    computed: {
      isLive: function () {
        return 21 == +this.live.live_status;
      },
      playSrc: function () {
        var e,
          t,
          i = (this.live && this.live.live) || null,
          l = (this.live && this.live.vod && this.live.vod[0]) || null;
        return 21 == +(null == (e = this.live) ? void 0 : e.live_status) && i
          ? i.m3u8
          : 22 == +(null == (t = this.live) ? void 0 : t.live_status) && l
          ? l.video_url
          : "";
      },
      isPc: function () {
        return "windows" === this.platform || "mac" === this.platform;
      },
    },
    watch: {
      live: {
        handler: function (e) {
          var t;
          if (e && 22 == +e.live_status) {
            var i = (null == (t = e.vod) ? void 0 : t[0]) || null;
            if (i && i.end_time && i.start_time) {
              var l = i.end_time - i.start_time;
              l && (this.playableTime = l);
            } else this.playableTime = 0;
          } else this.playableTime = 0;
        },
        immediate: !0,
      },
    },
    created: function () {
      (this.dMute = this.mute),
        (this.platform = e.wx$1.getSystemInfoSync().platform);
    },
    destroyed: function () {
      var e = this.getVideoContext();
      e && e.stop(), this.clearControlTimer(), clearTimeout(this.seekTimer);
    },
    methods: {
      forceHttpsAdvanced: t.forceHttpsAdvanced,
      getVideoContext: function () {
        return (
          !this.videoContext &&
            e.index &&
            (this.videoContext = e.index.createVideoContext(
              "live-player-container",
              this
            )),
          this.videoContext
        );
      },
      reportAnalytics: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("dataReport", e, t);
      },
      togglePlayer: function () {},
      loadPlayer: function () {},
      toggleLivePlayer: function () {
        var e = this.getVideoContext();
        e && (this.isPlaying ? e.pause() : e.play());
      },
      clearControlTimer: function () {
        this.hideControlsTimer && clearTimeout(this.hideControlsTimer);
      },
      playStatusChange: function (e) {
        (this.playStatus = e), this.$emit("playStatusChange", e);
      },
      onPlayEvent: function () {
        var t, l, n;
        (this.isPlaying = !0), (this.liveStartPlayTime = Date.now());
        var s = e.StockBridge.getStorage(i) || "";
        this.live && s === (null == (t = this.live) ? void 0 : t.live_news_id)
          ? (this.startType = 2)
          : ((this.startType = 1),
            e.StockBridge.setStorage(
              i,
              null == (l = this.live) ? void 0 : l.live_news_id
            )),
          this.reportAnalytics("news.live-share.player_play", {
            newsid: null == (n = this.live) ? void 0 : n.live_news_id,
            stockid: this.stockId,
            start_type: this.startType,
          }),
          this.playStatusChange({ type: "play" });
      },
      onTimeUpdateEvent: function (e) {
        var t, i;
        if (!this.isSliderChanging && 0 !== this.playableTime) {
          var l =
            null == (t = null == e ? void 0 : e.detail)
              ? void 0
              : t.currentTime;
          l &&
            "number" == typeof l &&
            ((this.curSliderValue = Math.min(l, this.playableTime)),
            this.playStatusChange({ type: "timeupdate", time: l }));
          var n =
            null == (i = null == e ? void 0 : e.detail) ? void 0 : i.duration;
          !l || !n || isNaN(l) || isNaN(n)
            ? (this.playPercent = 0)
            : (this.playPercent = (l / n).toFixed(4));
        }
      },
      onPauseEvent: function () {
        var e, t;
        this.clearControlTimer(),
          this.reportAnalytics("news.live-share.player_pause"),
          this.isPlaying &&
            this.reportAnalytics("news.livedetail.playtime", {
              play_time: Date.now() - this.liveStartPlayTime,
              play_percentage: this.playPercent,
              newsid: null == (e = this.live) ? void 0 : e.live_news_id,
              live_status: null == (t = this.live) ? void 0 : t.live_status,
              stockid: this.stockId,
            }),
          this.playStatusChange({ type: "pause" }),
          (this.isPlaying = !1);
      },
      onEndedEvent: function () {
        var e, t;
        this.isPlaying &&
          this.reportAnalytics("news.livedetail.playtime", {
            play_time: Date.now() - this.liveStartPlayTime,
            play_percentage: this.playPercent,
            newsid: null == (e = this.live) ? void 0 : e.live_news_id,
            live_status: null == (t = this.live) ? void 0 : t.live_status,
            stockid: this.stockId,
          }),
          this.playStatusChange({ type: "ended" }),
          (this.isPlaying = !1);
      },
      onErrorEvent: function (e) {
        var t, i;
        (this.isPc &&
          (e.detail.errMsg.includes("bufferStalledError") ||
            e.detail.errMsg.includes("bufferSeekOverHole"))) ||
          (this.reportAnalytics("news.livedetail.player_error"),
          this.isPlaying &&
            this.reportAnalytics("news.livedetail.playtime", {
              play_time: Date.now() - this.liveStartPlayTime,
              play_percentage: this.playPercent,
              newsid: null == (t = this.live) ? void 0 : t.live_news_id,
              live_status: null == (i = this.live) ? void 0 : i.live_status,
              stockid: this.stockId,
            }),
          this.playStatusChange({ type: "error" }),
          (this.isPlaying = !1));
      },
      onFullscreenChangeEvent: function (e) {
        var t = e.detail.fullScreen;
        t && this.reportAnalytics("news.live-share.fullscreen_tap"),
          (this.isFullScreen = !!t),
          this.playStatusChange({ type: "fullscreenchange", isFullscreen: t });
      },
      seek: function (e) {
        var t = this.getVideoContext();
        t &&
          ((this.curSliderValue = e),
          this.isPc
            ? (this.seekTimer && clearTimeout(this.seekTimer),
              (this.seekTimer = setTimeout(function () {
                t.seek(e), t.play();
              }, 500)))
            : (t.seek(e), t.play()));
      },
      changeSlide: function (e) {
        var t,
          i = null == (t = null == e ? void 0 : e.detail) ? void 0 : t.value;
        i && this.seek(i), (this.isSliderChanging = !1);
      },
      handleSliderTouchEvent: function (e) {
        "touchstart" === e.type
          ? ((this.isSliderChanging = !0), this.clearControlTimer())
          : "touchend" === e.type && (this.isSliderChanging = !1);
      },
      handleSliderChange: function (e) {},
      handleSliderDrag: function (e) {},
      onMuteChange: function () {
        this.dMute = !this.dMute;
      },
      onFullScreenEvent: function () {
        var e = this.getVideoContext();
        e && (this.isFullScreen ? e.exitFullScreen() : e.requestFullScreen());
      },
    },
  };
Array || e.resolveComponent("LivePlayerMask")();
var n = e._export_sfc(l, [
  [
    "render",
    function (t, i, l, n, s, a) {
      return e.e(
        { a: l.live && a.playSrc },
        l.live && a.playSrc
          ? {
              b: e.o(a.onMuteChange, 4617),
              c: e.o(a.onFullScreenEvent, 4618),
              d: e.o(a.toggleLivePlayer, 4619),
              e: e.o(a.changeSlide, 4620),
              f: e.p({
                live: l.live,
                mute: s.dMute,
                "play-status": s.playStatus,
                "cur-slider-value": s.curSliderValue,
                "playable-time": s.playableTime,
              }),
              g: a.playSrc,
              h: a.isLive,
              i: !a.isLive,
              j: l.live.title,
              k: s.dMute,
              l: e.o(function () {
                return a.onPlayEvent && a.onPlayEvent.apply(a, arguments);
              }, 4621),
              m: e.o(function () {
                return a.onPauseEvent && a.onPauseEvent.apply(a, arguments);
              }, 4622),
              n: e.o(function () {
                return a.onEndedEvent && a.onEndedEvent.apply(a, arguments);
              }, 4623),
              o: e.o(function () {
                return a.onErrorEvent && a.onErrorEvent.apply(a, arguments);
              }, 4624),
              p: e.o(function () {
                return (
                  a.onTimeUpdateEvent && a.onTimeUpdateEvent.apply(a, arguments)
                );
              }, 4625),
              q: e.o(function () {
                return (
                  a.onFullscreenChangeEvent &&
                  a.onFullscreenChangeEvent.apply(a, arguments)
                );
              }, 4626),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(n);
