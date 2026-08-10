var t = require("../../@babel/runtime/helpers/interopRequireDefault").default;
require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../enums"),
  i = t(require("../../index")),
  a = require("../../modules/utils/index"),
  o = require("./enums"),
  n = function () {
    return (n =
      Object.assign ||
      function (t) {
        for (var e, i = 1, a = arguments.length; i < a; i++)
          for (var o in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  },
  s = { sd: "270P", hd: "480P", shd: "720P", fhd: "1080P" };
Component({
  options: { multipleSlots: !0 },
  properties: {
    playerId: { type: String, value: "" },
    controls: { type: Boolean, value: !0 },
    showFullscreenBtn: { type: Boolean, value: !0 },
    showProgress: { type: Boolean, value: !0 },
    showPlaybackRateBtn: { type: Boolean, value: !0 },
    showDefinitionBtn: { type: Boolean, value: !0 },
    showPlayBtn: { type: Boolean, value: !0 },
    showFullscreenBackBtn: { type: Boolean, value: !0 },
    showBackgroundPlaybackBtn: { type: Boolean, value: !1 },
    disableProgress: { type: Boolean, value: !1 },
    showNewTips: { type: Boolean, value: !1 },
    title: { type: String, value: "" },
    usePoster: { type: Boolean, value: !1 },
    posterUrl: { type: String, value: "" },
    autoplay: { type: Boolean, value: !0 },
    useWatermark: { type: Boolean, value: !0 },
    direction: { type: Number, value: 90 },
    width: { type: String, value: "" },
    height: { type: String, value: "" },
  },
  data: {
    toastData: "",
    toastShow: !1,
    sliderValue: 0,
    videoTitle: "",
    playing: !1,
    playtime: "00:00",
    seekTime: "00:00",
    duration: "00:00",
    isFullscreen: !1,
    isControlShow: !0,
    isAd: !1,
    definitionList: [],
    displayDefinitionList: [],
    playbackRateList: [0.5, 0.8, 1, 1.25, 1.5, 2].map(function (t) {
      return { selected: 1 === t, rate: t };
    }),
    isDefinitionSelectShow: !1,
    isPlaybackRateSelectShow: !1,
    hasShowNewTips: !0,
    adRemainTime: 0,
    adText: "",
    isLive: !1,
    IS_WX: a.IS_WX,
    defaultPosterUrl: "",
    isShowPoster: !1,
    isShowLoading: !1,
    watermarkList: [],
    useTopLeftArea: a.IS_WX || "ios" !== i.default.getSystemInfo().osPlatform,
    isLongPress: !1,
    isSeeking: !1,
    isAndroidOrIOS: !1,
    isLiveMaskShow: !1,
  },
  lifetimes: {
    created: function () {
      var t, a;
      (this.autoHideTimers = { control: null, toast: null }),
        (this.playerEvtMap =
          (((t = {})[e.Events.VIDEO_TIMEUPDATE] =
            this.onVideoTimeUpdate.bind(this)),
          (t[e.Events.VIDEO_CANPLAY] = this.onVideoCanPlay.bind(this)),
          (t[e.Events.VIDEO_PLAYING] = this.onVideoPlaying.bind(this)),
          (t[e.Events.VIDEO_PAUSE] = this.onVideoPause.bind(this)),
          (t[e.Events.VIDEO_BUFFERING] = this.onVideoBuffering.bind(this)),
          (t[e.Events.AD_PLAYING] = this.onVideoPlaying.bind(this)),
          (t[e.Events.AD_PAUSE] = this.onVideoPause.bind(this)),
          (t[e.Events.AD_TIMEUPDATE] = this.onAdPlayTimeUpdate.bind(this)),
          (t[e.Events.VIDEO_DURATION_CHANGE] =
            this.onVideoDurationChange.bind(this)),
          (t[e.Events.CONTENT_CHANGE] = this.onVideoContentChange.bind(this)),
          (t[e.Events.VIDEO_RATE_CHANGE] = this.onVideoRateChange.bind(this)),
          (t[e.Events.VIDEO_SETLEVEL_END] = this.onVideoSetLevelEnd.bind(this)),
          (t[e.Events.PLAY_SESSION_END] = this.onVideoSessionEnd.bind(this)),
          t)),
        (this.playerInternalEvtMap =
          (((a = {})[e.VideoNodeEvents.FULLSCREEN_CHANGE] =
            this.onVideoFullScreenChange.bind(this)),
          (a[e.VideoNodeEvents.TAP] = this.onVideoTap.bind(this)),
          (a[e.VideoNodeEvents.LONG_PRESS] = this.onVideoLongPress.bind(this)),
          (a[e.VideoNodeEvents.TOUCH_END] = this.onVideoTouchEnd.bind(this)),
          (a[e.VideoNodeEvents.SETLEVEL_START] =
            this.clearWatermark.bind(this)),
          a));
      var o = i.default.getSystemInfo().osPlatform;
      this.setData({ isAndroidOrIOS: ["ios", "android"].includes(o) });
    },
    attached: function () {
      var t = this;
      (this.player = i.default.get(this.data.playerId)),
        Object.keys(this.playerEvtMap).forEach(function (e) {
          t.player.on(e, t.playerEvtMap[e]);
        }),
        Object.keys(this.playerInternalEvtMap).forEach(function (e) {
          t.player.internalMsg.on(e, t.playerInternalEvtMap[e]);
        }),
        this.triggerUIEvent("control", { show: !0 });
    },
    detached: function () {
      var t = this;
      Object.keys(this.playerEvtMap).forEach(function (e) {
        t.player.off(e, t.playerEvtMap[e]);
      }),
        Object.keys(this.playerInternalEvtMap).forEach(function (e) {
          t.player.internalMsg.off(e, t.playerInternalEvtMap[e]);
        });
    },
  },
  pageLifetimes: {
    show: function () {
      this.delayHandleWatermark();
    },
    hide: function () {
      this.clearWatermark();
    },
  },
  observers: {
    isControlShow: function (t) {
      this.triggerUIEvent("control", { show: t });
    },
    toastShow: function (t) {
      this.triggerUIEvent("toast", { show: t });
    },
    isFullscreen: function (t) {
      this.triggerUIEvent(
        t ? o.DisplayMode.FULLSCREEN : o.DisplayMode.SMALLSCREEN,
        { show: t, action: o.UserEvents.CLICK },
        o.SubModID.PLAYBOX
      );
    },
    width: function () {
      this.delayHandleWatermark();
    },
    height: function () {
      this.delayHandleWatermark();
    },
  },
  methods: {
    resetAd: function () {
      this.setData({ isAd: !1, adRemainTime: 0 });
    },
    triggerUIEvent: function (t, e, i) {
      void 0 === i && (i = "");
      var a = { component: t, data: e, module: i };
      this.triggerEvent("uievent", a);
    },
    onVideoSessionEnd: function () {
      this.resetAd(),
        this.setData({ playing: !1 }),
        this.showControlsAlways(),
        this.onVideoTouchEnd(),
        this.clearWatermark();
    },
    onProgressChange: function (t) {
      if (this.player.currentVideoInfo) {
        var e = this.player.currentVideoInfo.durationS * (t.detail.value / 100);
        this.player.seek(e),
          this.triggerUIEvent(
            "play_bar",
            { show: !0, action: o.UserEvents.CLICK },
            o.SubModID.PLAYBOX
          ),
          this.handleControlsToggle({ showControls: !0 });
      }
    },
    onProgressChanging: function (t) {
      if (this.player.currentVideoInfo) {
        var i = this.player.currentVideoInfo.durationS * (t.detail.value / 100);
        this.setData({ seekTime: (0, a.formatTime)(i), isSeeking: !0 }),
          this.player.internalMsg.emit(e.EventsExt.PROGRESS_CHANGING),
          this.timer && clearTimeout(this.timer);
      }
    },
    onAdPlayTimeUpdate: function (t) {
      var e = this.player.adControl,
        i = e.skippable,
        a = e.skipText,
        o = e.waitingText,
        n = Math.ceil(Math.max(i - t.time, 0)),
        s = 0 === n ? a : o;
      this.setData({ adRemainTime: n, adText: s, playing: !0 });
    },
    onVideoSetLevelEnd: function () {
      var t,
        e = this;
      this.toastTimer && clearTimeout(this.toastTimer);
      var i = this.formatDefinitionList(
        null === (t = this.player.currentPlayConfig) || void 0 === t
          ? void 0
          : t.definitionList
      );
      this.setData(
        {
          definitionList: i,
          toastShow: !0,
          toastData: "已切换为".concat(
            this.player.currentDefinition.displayName,
            "播放"
          ),
        },
        function () {
          e.handleWatermark(), e.delayHiddenToast();
        }
      );
    },
    onVideoTimeUpdate: function (t) {
      var e = t.time;
      if (this.player.currentVideoInfo) {
        var i = { playtime: (0, a.formatTime)(e), playing: !0 };
        this.data.isSeeking ||
          (i.sliderValue = (e / this.player.currentVideoInfo.durationS) * 100),
          this.setData(i);
      }
    },
    onVideoRateChange: function (t) {
      var e = this,
        i = t.rate;
      this.toastTimer && clearTimeout(this.toastTimer);
      var a = {};
      this.data.playbackRateList.forEach(function (t, e) {
        a["playbackRateList[".concat(e, "].selected")] = t.rate === i;
      }),
        this.setData(
          n(n({}, a), {
            toastShow: !this.isTouchEnd && !this.data.isLongPress,
            toastData: ""
              .concat(this.data.isLongPress ? "" : "已切换为")
              .concat(i, "倍速")
              .concat(this.data.isLongPress ? "播放中" : "播放"),
          }),
          function () {
            e.data.isLongPress ||
              (e.isTouchEnd ? (e.isTouchEnd = !1) : e.delayHiddenToast());
          }
        );
    },
    onVideoCanPlay: function () {
      this.data.isSeeking && this.player.play(),
        this.setData({ isSeeking: !1 });
    },
    onVideoTap: function () {
      this.data.controls &&
        !this.preventControlsToggle &&
        this.handleControlsToggle();
    },
    onVideoLongPress: function () {
      var t = this.data,
        e = t.isPlaybackRateSelectShow,
        i = t.isDefinitionSelectShow;
      e ||
        i ||
        ((this.prePlaybackRate = this.player.playbackRate),
        this.setData({ isControlShow: !1, isLongPress: !0 }),
        (this.player.playbackRate = 2));
    },
    onVideoTouchEnd: function () {
      this.data.isLongPress &&
        ((this.isTouchEnd = !0),
        (this.player.playbackRate = this.prePlaybackRate),
        this.setData({ isLongPress: !1 }));
    },
    onVideoPause: function () {
      this.setData({ playing: !1 }),
        this.showControlsAlways(),
        this.onVideoTouchEnd();
    },
    onVideoBuffering: function () {
      this.setData({ isShowLoading: !0 });
    },
    onVideoPlaying: function () {
      this.liveStopTimer && clearTimeout(this.liveStopTimer),
        this.setData({
          playing: !0,
          isShowPoster: !1,
          isShowLoading: !1,
          isLiveMaskShow: !1,
        }),
        this.preventControlsToggle &&
          ((this.preventControlsToggle = !1),
          this.handleControlsToggle({ showControls: !0 })),
        this.handleNewTips();
    },
    onVideoContentChange: function (t) {
      var i,
        a,
        o,
        n,
        s = t.isAd,
        r = this.formatDefinitionList(
          null === (i = this.player.currentPlayConfig) || void 0 === i
            ? void 0
            : i.definitionList
        ),
        l =
          this.player.mode === e.PlayMode.VOD
            ? null === (a = this.player.currentPlayConfig) || void 0 === a
              ? void 0
              : a.vid
            : "";
      this.setData({
        adText: this.player.adControl.waitingText,
        adRemainTime: this.player.adControl.skippable,
        isAd: s,
        definitionList: r,
        videoTitle:
          null ===
            (n =
              null === (o = this.player.currentPlayConfig) || void 0 === o
                ? void 0
                : o.extra) || void 0 === n
            ? void 0
            : n.title,
        isLive: this.player.mode === e.PlayMode.LIVE,
        defaultPosterUrl: "https://puui.qpic.cn/vpic_cover/"
          .concat(l, "/")
          .concat(l, "_hz.jpg"),
        isShowPoster: !0,
        isShowLoading: !0,
        playtime: "00:00",
        sliderValue: 0,
        isDefinitionSelectShow: !1,
        isPlaybackRateSelectShow: !1,
      }),
        (this.preventControlsToggle = !0),
        this.handleControlsToggle({ showControls: !0, alwaysShowControls: !0 }),
        this.handleWatermark();
    },
    onVideoFullScreenChange: function (t) {
      var e = this;
      this.setData(
        {
          isFullscreen: t.isFullscreen,
          isDefinitionSelectShow: !1,
          isPlaybackRateSelectShow: !1,
        },
        function () {
          e.preventControlsToggle ||
            e.handleControlsToggle({ showControls: !0 }),
            e.delayHandleWatermark();
        }
      );
    },
    onPlayBtnTap: function () {
      var t,
        i = this;
      this.data.playing
        ? this.player.mode === e.PlayMode.VOD
          ? this.player.pause()
          : this.setData(
              {
                isLiveMaskShow: !!(null ===
                  (t = this.player.currentVideoInfo) || void 0 === t
                  ? void 0
                  : t.isDrm),
              },
              function () {
                i.liveStopTimer = setTimeout(function () {
                  i.player.stop();
                }, 100);
              }
            )
        : this.player.mode === e.PlayMode.VOD
        ? this.player.state === e.VideoState.IDLE
          ? this.player.replay()
          : this.player.play()
        : this.player.replay(),
        this.triggerUIEvent(
          "play_button",
          {
            show: !0,
            action: o.UserEvents.CLICK,
            payload: this.data.playing ? o.PlayState.OFF : o.PlayState.ON,
          },
          o.SubModID.PLAYBOX
        );
    },
    onVideoDurationChange: function (t) {
      var e = t.durationS;
      this.setData({ duration: (0, a.formatTime)(e) });
    },
    onFullscreenTap: function () {
      this.player.toggleFullscreen(!this.data.isFullscreen, {
        isUserToggleFullscreen: !0,
      });
    },
    onDefinitionBtnTap: function () {
      var t = this.data,
        e = t.isLive,
        i = t.playing,
        a = t.autoplay,
        n = t.isAd,
        s = t.isFullscreen;
      (e && !i) ||
        !a ||
        n ||
        !s ||
        (this.setData({ isControlShow: !1, isDefinitionSelectShow: !0 }),
        this.triggerUIEvent(
          "clarity",
          { action: o.UserEvents.CLICK, show: !1 },
          o.SubModID.PLAYBOX
        ));
    },
    onDefinitionSelect: function (t) {
      var e = t.currentTarget.dataset.item;
      this.player.setLevel(e),
        this.triggerUIEvent(
          "clarity",
          { action: o.UserEvents.CLICK, show: !1, payload: s[e] || e },
          o.SubModID.CLARITY_FLOAT
        );
    },
    onDefinitionMaskTap: function () {
      this.setData({ isDefinitionSelectShow: !1 }),
        this.handleControlsToggle({
          showControls: !0,
          alwaysShowControls: !this.data.playing,
        });
    },
    onPlaybackRateBtnTap: function () {
      var t = this.data,
        e = t.isLive,
        i = t.IS_WX,
        a = t.autoplay,
        n = t.isAd,
        s = t.isFullscreen;
      i &&
        a &&
        !e &&
        !n &&
        s &&
        (this.setData({ isControlShow: !1, isPlaybackRateSelectShow: !0 }),
        this.triggerUIEvent(
          "playspeed",
          { action: o.UserEvents.CLICK, show: !1 },
          o.SubModID.PLAYBOX
        ));
    },
    onPlaybackRateMaskTap: function () {
      this.setData({ isPlaybackRateSelectShow: !1 }),
        this.handleControlsToggle({
          showControls: !0,
          alwaysShowControls: !this.data.playing,
        });
    },
    onPlaybackRateSelect: function (t) {
      var e = t.currentTarget.dataset.item;
      (this.player.playbackRate = e),
        this.triggerUIEvent(
          "playspeed",
          { show: !1, action: o.UserEvents.CLICK, payload: e },
          o.SubModID.SPEED_FLOAT
        );
    },
    onShowBackgroundPlaybackBtnTap: function () {
      this.player.requestBackgroundPlayback();
    },
    onSkipBtnTap: function () {
      this.player.skipAd();
    },
    onBackBtnTap: function () {
      this.player.toggleFullscreen(!1);
    },
    formatDefinitionList: function (t) {
      var i = [
        { title: "VIP尊享最佳画质音质组合", list: [] },
        { title: "画质", list: [] },
      ];
      if (Array.isArray(t))
        for (var a = 0, o = t; a < o.length; a++) {
          var n = o[a];
          switch (n.name) {
            case e.DefinitionName.HDR10:
              (n.formatName = n.displayName.slice(0, 2)),
                (n.icon = n.selected
                  ? "hdr-option-icon-selected"
                  : "hdr-option-icon"),
                "臻彩视听" === n.displayName
                  ? i[0].list.push(n)
                  : i[1].list.push(n);
              break;
            case e.DefinitionName.DOLBY:
              (n.formatName = n.name[0].toUpperCase() + n.name.slice(1)),
                (n.icon = n.selected
                  ? "dolby-option-icon-selected"
                  : "dolby-option-icon"),
                i[1].list.push(n);
              break;
            default:
              (n.formatName = ""), i[1].list.push(n);
          }
        }
      return (
        0 === i[0].list.length && i.shift(),
        this.setData({ displayDefinitionList: i }),
        t
      );
    },
    handleControlsToggle: function (t) {
      var e = this,
        i = void 0 === t ? {} : t,
        a = i.showControls,
        o = i.alwaysShowControls;
      this.timer && clearTimeout(this.timer);
      var n = !(!a && this.data.isControlShow);
      this.setData({ isControlShow: n }),
        n &&
          !o &&
          (this.timer = setTimeout(function () {
            e.setData({ isControlShow: !1 });
          }, 4e3));
    },
    handleWatermark: function () {
      var t,
        e,
        i = this;
      null ===
        (e =
          null === (t = this.player) || void 0 === t
            ? void 0
            : t.currentVideo) ||
        void 0 === e ||
        e
          .fields({ size: !0 }, function (t) {
            var e, a, o, n, s;
            if (t) {
              var r = t.width,
                l = t.height;
              if (i.data.isFullscreen) {
                var h = wx.getSystemInfoSync();
                (r = h.screenWidth), (l = h.screenHeight);
              }
              var d =
                  (null ===
                    (a =
                      null === (e = i.player.currentPlayConfig) || void 0 === e
                        ? void 0
                        : e.videoInfo) || void 0 === a
                    ? void 0
                    : a.width) || r,
                c =
                  (null ===
                    (n =
                      null === (o = i.player.currentPlayConfig) || void 0 === o
                        ? void 0
                        : o.videoInfo) || void 0 === n
                    ? void 0
                    : n.height) || l,
                u = r / d,
                p = l / c,
                y = Math.min(u, p),
                v = (r - y * d) / 2,
                f = (l - y * c) / 2,
                g = (
                  (null === (s = i.player.currentPlayConfig) || void 0 === s
                    ? void 0
                    : s.watermarkList) || []
                ).map(function (t) {
                  return {
                    url: t.url,
                    alpha: t.alpha,
                    width: Math.round(t.width * y),
                    height: Math.round(t.height * y),
                    top: Math.ceil(t.top * y + f),
                    right: Math.ceil(t.right * y + v),
                  };
                });
              i.setData({
                watermarkList: g.filter(function (t) {
                  return (
                    t.top >= f &&
                    t.top <= l - f - t.height &&
                    t.right >= v &&
                    t.right <= r - v - t.width
                  );
                }),
              });
            }
          })
          .exec();
    },
    clearWatermark: function () {
      this.setData({ watermarkList: [] });
    },
    delayHandleWatermark: function () {
      var t = this;
      this.clearWatermark(),
        wx.nextTick(function () {
          setTimeout(function () {
            t.handleWatermark();
          }, 500);
        });
    },
    stopPropagation: function () {},
    delayHiddenToast: function () {
      var t = this;
      this.toastTimer = setTimeout(function () {
        t.setData({ toastShow: !1 });
      }, 3e3);
    },
    handleNewTips: function () {
      var t = this;
      if (!this.data.isAd && this.properties.showNewTips) {
        var e = wx.getStorageSync("newTips") || {},
          i = e.backgroundPlayback;
        (void 0 !== i && i) ||
          (this.setData({ hasShowNewTips: !1 }),
          setTimeout(function () {
            t.setData({ hasShowNewTips: !0 }),
              wx.setStorageSync(
                "newTips",
                n(n({}, e), { backgroundPlayback: !0 })
              );
          }, 2e3));
      }
    },
    showControlsAlways: function () {
      (this.preventControlsToggle = !0),
        this.handleControlsToggle({ showControls: !0, alwaysShowControls: !0 });
    },
  },
});
