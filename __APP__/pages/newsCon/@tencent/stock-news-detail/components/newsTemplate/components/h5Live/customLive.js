var e = require("../../../../../../../../common/vendor.js"),
  i = 0,
  t = {
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      livePlayerReady: { type: Boolean, default: !1 },
      mute: { type: Boolean, default: !1 },
    },
    data: function () {
      return { windowWidth: window.innerWidth, playing: !1, playReady: !1 };
    },
    computed: {
      isShowLivePlayer: function () {
        var e = this.data.extra_info;
        return [21, 22].indexOf(+(void 0 === e ? {} : e).live_status) >= 0;
      },
      liveStatusWraper: function () {
        var e = this.data.extra_info;
        return (void 0 === e ? {} : e).live_status;
      },
      videoWidth: function () {
        return this.windowWidth - 60;
      },
      videoHeight: function () {
        return this.videoWidth / 1.78;
      },
      styleObj: function () {
        return {
          width: "".concat(this.videoWidth, "px"),
          height: "".concat(this.videoHeight, "px"),
        };
      },
    },
    watch: {
      mute: function (e) {
        this.player &&
          this.playReady &&
          ((this.player.muted = e), e || (this.player.volume = 1));
      },
      livePlayerReady: function (e) {
        e && !this.player && this.initLive();
      },
    },
    mounted: function () {
      window.SuperPlayer && this.initLive();
    },
    destroyed: function () {
      if (this.player)
        try {
          this.player.destroy();
        } catch (e) {}
    },
    methods: {
      formatLiveStatus: function (e) {
        return { 20: "预告", 21: "直播中", 22: "回顾" }[+e] || "";
      },
      initLive: function () {
        if (this.isShowLivePlayer && window.SuperPlayer) {
          var e = window.SuperPlayer.PLAY_MODE,
            i = this.data,
            t = i.extra_info,
            a = void 0 === t ? {} : t,
            n = i.id,
            r = a.live_status,
            o = a.live,
            l = void 0 === o ? {} : o,
            d = a.vod,
            s = void 0 === d ? [] : d,
            h = e.VOD,
            p = "";
          21 == +r && l.m3u8
            ? ((p = l.m3u8), (h = e.LIVE))
            : 22 == +r && s.length && s[0].video_url && (p = s[0].video_url),
            (this.videoUrl = p),
            (this.playType = h);
          var u = {
            container: "#player_".concat(n),
            type: h,
            videoElementConfig: { crossorigin: !0 },
            offlineConfig: { disable: !0 },
            removeComponents: ["ctrlbar"],
            businessConfig: {
              appKey:
                "100Q0BPHwVBAxwHTEUPFQwRBgQMEVkSDhEAFh0YGEVJEl9DSxVdEwIbBRMAHwpBHBMOA04ZEhoZEwFGFgVdDQBEEhMXRxNGSgVTBxsbE0UODFlEC0FdHBNOExYfDlwbFE8ADQAcAAMSEhENTQocQUAaXREWBgoOCVgfGVQQAg1WFQQRVgcaGhkYCFhSWA1aGxkGFx1YGh0WFwUZVBEeBVYVBBcXG0daCQdFWgkHRV5WER5eVgIOFxcbRxELWAgaDAQOQUhBWxoETltEQE4XRQQAXBgMBF1EBEQOB04MAEcIDB4CChgOQx9PCAFJF1kHGw4CBgkZXRZJBg8TSx0eQAkVDQUWEh8dSgEdFw4SAx8ZFQoCSkYCF09CGRpIG1pGQUUGGQ0cGAdJEQcbTBQbQ0hDDhBAGFkQABNfDQwBXRYLHBM",
              platform: "8050701",
              sdtfrom: "v7088",
            },
          };
          (this.player = new window.SuperPlayer(u)),
            h === e.VOD &&
              p &&
              (this.player.load({ url: p }), (this.playerLoaded = !0)),
            this.setPlayerListener();
        }
      },
      setPlayerListener: function () {
        var e = this,
          i = window.SuperPlayer,
          t = i.H5_PLAY_EVENT,
          a = i.END_STATE,
          n = i.PLAY_MODE;
        this.player.on(t.VIDEO_PLAYING, function () {
          (e.playing = !0), (e.playReady = !0);
        }),
          this.player.on(t.VIDEO_PAUSE, function () {
            e.playing = !1;
          }),
          this.player.on(t.PLAY_SESSION_END, function () {
            e.playing = !1;
          }),
          this.player.on(t.PLAY_SESSION_END, function (i) {
            var t = i.data;
            e.playing = !1;
            var r = t.endState,
              o = t.errorCode;
            r === a.ERROR &&
              (e.playerKernel ||
                (0 != +o && 102 != +o) ||
                ((e.playerKernel = "origin"),
                e.playType === n.VOD
                  ? e.player.load({
                      url: e.videoUrl,
                      kernelName: e.playerKernel,
                    })
                  : e.player.play({
                      url: e.videoUrl,
                      kernelName: e.playerKernel,
                    })));
          });
      },
      playVideo: function () {
        i = Date.now();
        var e = this.data.extra_info,
          t = void 0 === e ? {} : e,
          a = t.live_status,
          n = t.live,
          r = void 0 === n ? {} : n,
          o = t.vod,
          l = void 0 === o ? [] : o,
          d = (21 == +a && !r.m3u8) || (22 == +a && (!l || !l.length));
        !d &&
          this.player &&
          (this.playerLoaded
            ? this.player.play()
            : this.player.play({ url: this.videoUrl })),
          this.$emit("reportPlayLive", { isNoSource: d, status: a });
      },
      pauseVideo: function () {
        if (this.player)
          try {
            this.player.pause(),
              this.$emit("reportPauseLive", { time: Date.now() - i });
          } catch (e) {}
      },
      liveStatus: function (e) {
        return { 20: "preview", 21: "living", 22: "review" }[e] || "";
      },
      handleLiveClick: function () {
        this.isShowLivePlayer
          ? this.playVideo()
          : this.$emit("gotoLiveDetail", this.data);
      },
      handleVideoClick: function () {
        this.player &&
          (this.playing
            ? (this.pauseVideo(), this.$emit("gotoLiveDetail", this.data))
            : this.playVideo());
      },
      handleVoiceClick: function () {
        if (this.player) {
          var e = this.player.muted;
          this.$emit("muteChange", !e);
        }
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (i, t, a, n, r, o) {
        return e.e(
          {
            a: e.n(o.liveStatus(o.liveStatusWraper)),
            b: e.t(o.formatLiveStatus(o.liveStatusWraper)),
            c:
              (a.data.thumbnails && a.data.thumbnails[0]) ||
              (a.data.thumbnails_qqnews && a.data.thumbnails_qqnews[0]),
            d: e.o(function () {
              return o.handleLiveClick && o.handleLiveClick.apply(o, arguments);
            }, 5725),
            e: o.isShowLivePlayer,
          },
          o.isShowLivePlayer
            ? {
                f: e.o(function () {
                  return o.playVideo && o.playVideo.apply(o, arguments);
                }, 5726),
              }
            : {},
          {
            g: !r.playing,
            h: "player_" + a.data.id,
            i: "player_" + a.data.id,
            j: e.s(o.styleObj),
            k: e.o(function () {
              return (
                o.handleVideoClick && o.handleVideoClick.apply(o, arguments)
              );
            }, 5727),
            l: r.playing,
            m: e.n(a.mute ? "icon-mute" : "icon-unMute"),
            n: e.o(function () {
              return (
                o.handleVoiceClick && o.handleVoiceClick.apply(o, arguments)
              );
            }, 5728),
            o: r.playing,
          }
        );
      },
    ],
    ["__scopeId", "data-v-92c22b04"],
  ]);
wx.createComponent(a);
