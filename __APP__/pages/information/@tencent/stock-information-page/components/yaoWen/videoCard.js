var t = require("../../../../../../@babel/runtime/helpers/typeof"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  d = function (t, e, a) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  l = function (t, i) {
    for (var a in i || (i = {})) r.call(i, a) && d(t, a, i[a]);
    if (o) {
      var n,
        l = e(o(i));
      try {
        for (l.s(); !(n = l.n()).done; ) {
          a = n.value;
          s.call(i, a) && d(t, a, i[a]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  p = function (t, e) {
    return a(t, n(e));
  },
  u = require("../../../../../../common/vendor.js"),
  c = require("../../pages/information/mp.js"),
  h = requirePlugin("tencentvideo"),
  y = "yaowen-tab-lastplay-videoid",
  f = {
    components: {
      classBar: function () {
        return "../classBar.js";
      },
    },
    inject: { stockBridge: { default: {} } },
    props: ["data", "index", "videoCssError", "playerMute"],
    data: function () {
      return {
        videoReady: !1,
        playing: !1,
        played: !1,
        playStartTime: 0,
        options: { miniProcess: !0, hideCtrls: !0 },
        isShowPlayer: !1,
        playerInitError: !1,
        inWindow: !1,
        txvContext: null,
        initError: !1,
        playPercent: 0,
        startType: 1,
      };
    },
    computed: {
      isChannels: function () {
        return 21 == +this.data.type;
      },
      videoTime: function () {
        var e = this.data.video_info,
          i = "";
        if (e) {
          var a = "";
          if (
            ("object" == t(e)
              ? (a = e.video_time)
              : "string" == typeof e && (a = e.split("|")[1]),
            isNaN(+a))
          )
            i = a.slice(3);
          else {
            var n = parseInt(a / 60),
              o = a % 60;
            i = ""
              .concat(n < 10 ? "0" : "")
              .concat(n, ":")
              .concat(o < 10 ? "0" : "")
              .concat(o);
          }
        }
        return i;
      },
      isCourse: function () {
        var t;
        return (
          !this.isLiving &&
          !!(null == (t = this.data.video_info) ? void 0 : t.course_id)
        );
      },
      courseData: function () {
        if (this.isCourse) {
          var t = this.data.video_info,
            e = t.course_title,
            i = t.course_subtitle;
          return { isMasterCourse: 14 == +t.course_type, title: e, desc: i };
        }
      },
      videoInfo: function () {
        var t = this.data,
          e = t.video_info;
        return { type: t.type, videoInfo: e };
      },
      player: function () {
        return this.$refs["player_".concat(this.data.id)];
      },
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
    },
    destroyed: function () {
      this.videoReady = !1;
    },
    mounted: function () {
      var t = this;
      this.stockBridge.busOn("news-yaoWenList_onHide", this.pauseVideo),
        this.$nextTick(function () {
          t.isShowPlayer = !0;
        });
    },
    methods: {
      formatImageHttps: c.formatImageHttps,
      pauseVideo: function () {
        this.playing &&
          (this.txvContext && this.txvContext.pause(), (this.playing = !1));
      },
      onDurationChange: function (t) {
        t._playtime;
        var e = t.process;
        this.playPercent = e.toFixed(4);
      },
      onTimeUpdate: function (t) {
        var e,
          i,
          a = null == (e = null == t ? void 0 : t.detail) ? void 0 : e.duration,
          n =
            null == (i = null == t ? void 0 : t.detail)
              ? void 0
              : i.currentTime;
        !n || !a || isNaN(n) || isNaN(a)
          ? (this.playPercent = 0)
          : (this.playPercent = (n / a).toFixed(4));
      },
      onPlayStatusChange: function (t) {
        switch (t.status) {
          case "ready":
            this.videoReady = !0;
            break;
          case "playing":
            (this.playing = !0),
              (this.played = !0),
              (this.playStartTime = Date.now()),
              this.updateStartType(),
              this.stockBridge.report("information.video_play", {
                newsid: this.data.id,
                start_type: this.startType,
                fflow_id: this.data.flow_id,
                fposition_id: this.index + 1,
              });
            break;
          case "pause":
          case "error":
          case "interrupt":
          case "end":
            (this.playing = !1), this.reportPlayTime();
            break;
          case "initError":
            this.playerInitError = !0;
        }
      },
      videoClick: function () {
        var t = this;
        this.playing &&
          (this.pauseVideo(),
          this.$nextTick(function () {
            t.$emit(
              "open",
              p(l({}, t.data), { mute: t.playerMute ? "1" : "0" })
            );
          }));
      },
      handleVideoDetail: function (t) {
        if (t)
          if (this.isMP) {
            if (this.playing)
              return (
                this.txvContext.pause(),
                void this.$emit(
                  "open",
                  p(l({}, this.data), { mute: this.playerMute ? "1" : "0" })
                )
              );
            this.txvContext || (this.txvContext = this.getTxvContext()),
              this.txvContext &&
                !1 === this.playing &&
                this.txvContext &&
                this.txvContext.play();
          } else
            this.$emit(
              "open",
              p(l({}, this.data), { mute: this.playerMute ? "1" : "0" })
            );
        else
          this.$emit(
            "open",
            p(l({}, this.data), { mute: this.playerMute ? "1" : "0" })
          );
      },
      handleBarClick: function () {
        var t = this.data,
          e = t.id,
          i = t.video_info,
          a = void 0 === i ? {} : i;
        this.stockBridge.report(
          "information.yaowen.videoCard.course_bar_click",
          { id: e }
        );
        var n =
          "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id="
            .concat(a.course_id, "&cid=")
            .concat(e, "&t=")
            .concat(Date.now());
        u.wx$1.navigateTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(n)
          ),
        });
      },
      voiceControl: function () {
        var t = !this.playerMute;
        this.stockBridge.report("information.yaowen.videoCard.mute_change", {
          playerMute: t,
          newsid: this.data.id,
        }),
          this.$emit("onMuteStatusChange", { playerMute: t });
      },
      getTxvContext: function () {
        if (this.data.video_info.video_id)
          try {
            return h.getTxvContext(this.data.video_info.video_id);
          } catch (t) {}
      },
      onMpPlayerPlay: function (t) {
        (this.played = !0),
          (this.playing = !0),
          (this.playStartTime = Date.now()),
          this.updateStartType(),
          this.stockBridge.report("information.video_play", {
            newsid: this.data.id,
            start_type: this.startType,
            fflow_id: this.data.flow_id,
            fposition_id: this.index + 1,
          });
      },
      onMpPlayerPause: function () {
        (this.playing = !1),
          (this.pause = this.inWindow),
          this.reportPlayTime();
      },
      onMpPlayerEnded: function () {
        (this.playing = !1),
          (this.pause = this.inWindow),
          this.reportPlayTime();
      },
      onMpPlayerError: function () {
        this.reportPlayTime();
      },
      mpVideoStateChange: function (t) {
        var e = t.detail.newstate;
        "error" === e && (this.initError = !0),
          "ready" === e &&
            (this.txvContext || (this.txvContext = this.getTxvContext()),
            (this.videoReady = !0)),
          "ended" === e &&
            ((this.playing = !1),
            (this.played = !1),
            (this.pause = !1),
            this.reportPlayTime());
      },
      reportPlayTime: function () {
        var t = this.playStartTime ? Date.now() - this.playStartTime : 0;
        this.stockBridge.report("information.video_playtime", {
          play_time: t,
          play_percentage: this.playPercent,
          newsid: this.data.id,
        });
      },
      updateStartType: function () {
        (this.stockBridge.getStorage(y) || "") === this.data.id
          ? (this.startType = 2)
          : ((this.startType = 1),
            this.stockBridge.setStorage(y, this.data.id));
      },
    },
  };
Array ||
  (u.resolveComponent("video-player") + u.resolveComponent("class-bar"))();
var v = u._export_sfc(f, [
  [
    "render",
    function (t, e, i, a, n, o) {
      return u.e(
        { a: !i.videoCssError },
        i.videoCssError
          ? {}
          : u.e(
              { b: !n.playerInitError },
              n.playerInitError
                ? {}
                : u.e(
                    { c: o.isChannels },
                    (o.isChannels, {}),
                    {
                      d: u.t(i.data.title),
                      e: u.o(function (t) {
                        return o.handleVideoDetail(!1);
                      }, 5345),
                      f: !n.playing && !n.initError,
                    },
                    n.playing || n.initError
                      ? {}
                      : u.e(
                          { g: o.isChannels || o.isMP },
                          o.isChannels || o.isMP
                            ? {
                                h: o.formatImageHttps(
                                  i.data.focus_img || i.data.thumb_img
                                ),
                              }
                            : {},
                          { i: o.isChannels || o.isMP },
                          (o.isChannels || o.isMP, {}),
                          { j: !o.isChannels },
                          o.isChannels
                            ? {}
                            : u.e(
                                {
                                  k:
                                    i.data.extra_info &&
                                    i.data.extra_info.play_num > 0,
                                },
                                i.data.extra_info &&
                                  i.data.extra_info.play_num > 0
                                  ? {
                                      l: u.t(i.data.extra_info.play_num),
                                      m: u.t(o.isCourse ? "人已学习" : "播放"),
                                    }
                                  : {},
                                { n: u.t(o.videoTime) }
                              )
                        ),
                    { o: !o.isMP && n.isShowPlayer && !o.isChannels },
                    o.isMP || !n.isShowPlayer || o.isChannels
                      ? {}
                      : {
                          p: u.sr("player_" + i.data.id, "9dfcabf6-0"),
                          q: "player_" + i.data.id,
                          r: i.data.id,
                          s: u.o(o.videoClick, 5346),
                          t: u.o(o.onPlayStatusChange, 5347),
                          v: u.o(o.onDurationChange, 5348),
                          w: u.p({
                            "container-id": "yaowen_" + i.data.id,
                            options: n.options,
                            data: o.videoInfo,
                            mute: i.playerMute,
                          }),
                        },
                    {
                      x:
                        o.isMP &&
                        n.isShowPlayer &&
                        !o.isChannels &&
                        i.data.video_info.video_id,
                    },
                    o.isMP &&
                      n.isShowPlayer &&
                      !o.isChannels &&
                      i.data.video_info.video_id
                      ? {
                          y: i.data.video_info.video_id,
                          z: i.data.video_info.video_id,
                          A: o.formatImageHttps(
                            i.data.focus_img || i.data.thumb_img
                          ),
                          B: i.playerMute,
                          C: u.o(function () {
                            return (
                              o.onMpPlayerPlay &&
                              o.onMpPlayerPlay.apply(o, arguments)
                            );
                          }, 5349),
                          D: u.o(function () {
                            return (
                              o.onMpPlayerPause &&
                              o.onMpPlayerPause.apply(o, arguments)
                            );
                          }, 5350),
                          E: u.o(function () {
                            return (
                              o.onMpPlayerEnded &&
                              o.onMpPlayerEnded.apply(o, arguments)
                            );
                          }, 5351),
                          F: u.o(function () {
                            return (
                              o.mpVideoStateChange &&
                              o.mpVideoStateChange.apply(o, arguments)
                            );
                          }, 5352),
                          G: u.o(function () {
                            return (
                              o.onTimeUpdate &&
                              o.onTimeUpdate.apply(o, arguments)
                            );
                          }, 5353),
                          H: u.o(function () {
                            return (
                              o.onMpPlayerError &&
                              o.onMpPlayerError.apply(o, arguments)
                            );
                          }, 5354),
                        }
                      : {},
                    {
                      I: u.n(i.playerMute ? "icon-mute" : "icon-unMute"),
                      J: n.playing,
                      K: u.o(function () {
                        return (
                          o.voiceControl && o.voiceControl.apply(o, arguments)
                        );
                      }, 5355),
                      L: u.o(function (t) {
                        return o.handleVideoDetail(!0);
                      }, 5356),
                      M: o.isCourse,
                    },
                    o.isCourse
                      ? {
                          N: u.o(o.handleBarClick, 5357),
                          O: u.p({ data: o.courseData }),
                        }
                      : {},
                    { P: n.videoReady && !o.isCourse },
                    n.videoReady && !o.isCourse
                      ? u.e(
                          {
                            Q: u.t(i.data.source),
                            R: i.data.comment_num >= 20,
                          },
                          i.data.comment_num >= 20
                            ? { S: u.t(i.data.comment_num) }
                            : {}
                        )
                      : {}
                  )
            )
      );
    },
  ],
  ["__scopeId", "data-v-9dfcabf6"],
]);
wx.createComponent(v);
