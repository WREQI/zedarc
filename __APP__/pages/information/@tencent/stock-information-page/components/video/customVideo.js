require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, i) {
    return new Promise(function (a, n) {
      var o = function (e) {
          try {
            s(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        l = function (e) {
          try {
            s(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(o, l);
        };
      s((i = i.apply(e, t)).next());
    });
  },
  i = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-video/api/request.js"),
  n = require("../../pages/information/mp.js"),
  o = require("../../../stock-sq/src/utils/mixins/securityCheck/index.js"),
  l = require("../../../stock-community-base/utils/privacyCheck.js"),
  s = requirePlugin("tencentvideo"),
  r = new a.VideoAPI(),
  c = "video-tab-lastplay-videoid",
  u = {
    components: {
      RecomSpliter: function () {
        return "../RecomSpliter.js";
      },
      classBar: function () {
        return "../classBar.js";
      },
    },
    mixins: [o.securityCheck],
    inject: {
      stockBridge: { default: {} },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      column: { type: String, default: "" },
      mute: { type: Boolean, default: !1 },
      innerWidth: { type: Number, default: 0 },
    },
    data: function () {
      return {
        playing: !1,
        playReady: !1,
        defaultMediaIcon:
          "https://mat1.gtimg.com/finance/images/stock/p/news_om/white-head-img.png",
        playPercent: 0,
        localItemData: {},
        options: {
          miniProcess: !0,
          hideCtrls: !0,
          unAutoPlay: !0,
          isMute: this.mute,
        },
        isShowPlayer: !1,
        playStartTime: 0,
        mpLiveVideoContext: null,
        mpLiveAutoPlay: !1,
        mpIntersectionObserver: null,
        txvVideoInvisible: !1,
        startType: 1,
      };
    },
    computed: {
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
      styleObj: function () {
        return {
          width: this.innerWidth - 30 + "px",
          height: (this.innerWidth - 30) / 1.78 + "px",
          maxWidth: "450px",
          maxHeight: "252px",
        };
      },
      isChannels: function () {
        return 21 == +this.localItemData.news_type;
      },
      likeFlag: function () {
        return this.localItemData.like_flag;
      },
      labels: function () {
        var e = [];
        return (
          (
            (this.localItemData.label && this.localItemData.label.split(" ")) ||
            []
          ).map(function (t) {
            if (t)
              switch ("".concat(t.split(">").shift(), ">")) {
                case "<A>":
                  e.push({ text: t.replace("<A>", ""), class: "icon-address" });
                  break;
                case "<F>":
                  e.push({ text: t.replace("<F>", ""), class: "icon-hot" });
                  break;
                case "<O>":
                  e.push({ text: t.replace("<O>", ""), class: "icon-topic" });
                  break;
                case "<C>":
                  e.push({
                    text: t.replace("<C>", ""),
                    class: "icon-label-mark",
                  });
                  break;
                default:
                  e.push({
                    text: t.split(">").pop(),
                    class: "icon-label-mark",
                  });
              }
          }),
          e
        );
      },
      liveType: function () {
        return (
          14 == +this.localItemData.news_type ||
          4 == +this.localItemData.news_type
        );
      },
      liveCalendarFlag: function () {
        return 1 == +this.localItemData.special_type;
      },
      showProcess: function () {
        return (
          !this.liveType || 22 == +this.localItemData.live_info.live_status
        );
      },
      viewerIcons: function () {
        var e = this.localItemData.live_info,
          t = void 0 === e ? {} : e;
        return (
          (this.liveType &&
            t.viewer_icons_url &&
            this.localItemData.live_info.viewer_icons_url.split("|")) ||
          []
        ).filter(function (e) {
          return !!e;
        });
      },
      isLiving: function () {
        return this.liveType && 21 == +this.localItemData.live_info.live_status;
      },
      isShowLivePlayer: function () {
        var e = this.localItemData,
          t = e.live_info,
          i = void 0 === t ? {} : t;
        return (
          4 != +e.news_type &&
          this.liveType &&
          [21, 22].indexOf(+i.live_status) >= 0
        );
      },
      isShowPlayNum: function () {
        return !this.liveType || this.isShowLivePlayer;
      },
      showSpliter: function () {
        var e;
        return (
          (null == (e = this.stockBridge.getStorage(n.FEED_RECOM_SETTING_VAL))
            ? void 0
            : e.indexOf("confirm")) > -1 && this.localItemData.showSpliter
        );
      },
      isCourse: function () {
        var e;
        return (
          !this.isLiving &&
          (null == (e = this.localItemData.video_info) ? void 0 : e.course_id)
        );
      },
      courseData: function () {
        if (this.isCourse) {
          var e = this.localItemData.video_info || {},
            t = e.course_title,
            i = e.course_subtitle;
          return { isMasterCourse: 14 == +e.course_type, title: t, desc: i };
        }
      },
      thumbImg: function () {
        var e = this.localItemData.focus_img || this.localItemData.thumb_img;
        return this.formatImageHttps(e);
      },
      videoInfo: function () {
        var e = this.localItemData,
          t = e.id,
          i = e.video_info,
          a = e.live_info,
          n = e.news_type,
          o = e.focus_img,
          l = void 0 === o ? "" : o,
          s = e.thumb_img;
        return {
          id: t,
          videoType: n,
          thumbImage: l || (void 0 === s ? "" : s),
          videoInfo: this.liveType ? a : i,
        };
      },
      liveUrl: function () {
        var e;
        if (!this.liveType) return e;
        var t = this.localItemData.live_info,
          i = t.live_status,
          a = t.live,
          n = void 0 === a ? {} : a,
          o = t.vod,
          l = void 0 === o ? [] : o;
        return (e = 22 == +i ? l.length && l[0].video_url : n.m3u8 || n.flv);
      },
    },
    watch: {
      itemData: {
        handler: function (e) {
          this.localItemData = e;
        },
        deep: !0,
        immediate: !0,
      },
    },
    mounted: function () {
      this.checkExpose();
    },
    beforeDestroy: function () {
      this.mpIntersectionObserver && this.mpIntersectionObserver.disconnect();
    },
    methods: {
      formatImageHttps: n.formatImageHttps,
      formatLiveStatus: function (e) {
        return { 20: "预告", 21: "直播中", 22: "回顾" }[+e] || "";
      },
      formatLiveText: function (e) {
        return { 20: "预约", 21: "在看", 22: "围观" }[+e] || "";
      },
      formatNum: function (e) {
        return e && 0 != e
          ? (e = parseInt(e, 10)) > 5e5
            ? "50万+"
            : e > 9999
            ? "".concat((e / 1e4).toFixed(1), "万")
            : e
          : "";
      },
      getPlayer: function () {
        var e = this.localItemData.news_id;
        return this.$refs["player_".concat(e)];
      },
      initPlayer: function () {
        var e = this;
        this.isShowPlayer ||
          this.$nextTick(function () {
            setTimeout(function () {
              e.isShowPlayer = !0;
            }, 300);
          });
      },
      onDurationChange: function (e) {
        e.playtime;
        var t = e.process;
        this.playPercent = t.toFixed(4);
      },
      onPlayStateChange: function (e) {
        switch (e.status) {
          case "ready":
            this.playReady = !0;
            break;
          case "playing":
            (this.playing = !0),
              (this.playStartTime = Date.now()),
              this.stockBridge.busEmit("growth-user.behavior.union", {
                type: "click",
                event: "watch_vedio",
                paused: !1,
              }),
              this.$emit("notify", {
                action: "play",
                data: this.localItemData.news_id,
              }),
              this.reportPlay(),
              r
                .queryStaticNums({
                  ids: this.localItemData.news_id,
                  type: "play",
                })
                .then(function (e) {
                  e.code;
                })
                .catch(function (e) {});
            break;
          case "pause":
          case "end":
          case "error":
          case "interrupt":
            this.playing && this.reportPlayTime(),
              (this.playing = !1),
              this.stockBridge.busEmit("growth-user.behavior.union", {
                type: "click",
                event: "watch_vedio",
                paused: !0,
              });
        }
      },
      playVideo: function () {
        if ((this.liveType && !this.isShowLivePlayer) || this.isChannels)
          this.handleClick("detail");
        else {
          if (this.liveType)
            if (!this.liveUrl || this.liveUrl.length <= 0) {
              var e = this.localItemData.live_info.live_status;
              i.wx$1.showToast({
                title: (22 == +e ? "直播" : "回顾") + "在路上，请稍后再试",
                icon: "none",
                duration: 2e3,
              });
            } else
              (this.playReady = !0),
                this.mpLiveVideoContext ||
                  (this.mpLiveVideoContext = this.getLiveVideoContext()),
                this.mpLiveVideoContext &&
                  !1 === this.playing &&
                  this.mpLiveVideoContext &&
                  this.mpLiveVideoContext.play();
          else
            (this.txvVideoPlayed = !0),
              !1 === this.playing &&
                this.txvContext &&
                this.txvContext &&
                this.txvContext.play();
          this.$emit("notify", {
            action: "play",
            data: this.localItemData.news_id,
          });
        }
      },
      livePlay: function () {
        if (this.liveType) {
          var e,
            t = this.localItemData.live_info,
            a = t.live_status,
            n = t.live,
            o = void 0 === n ? {} : n,
            l = t.vod,
            s = void 0 === l ? [] : l;
          (e = 22 == +a ? s.length && s[0].video_url : o.m3u8 || o.flv)
            ? this.getPlayer().play({ url: e })
            : i.wx$1.showToast({
                title: (22 == +a ? "直播" : "回顾") + "在路上，请稍后再试",
                icon: "none",
                duration: 2e3,
              });
        }
      },
      pauseVideo: function () {
        this.playing &&
          (this.liveType
            ? this.mpLiveVideoContext && this.mpLiveVideoContext.pause()
            : this.txvContext && this.txvContext.pause(),
          this.$emit("notify", {
            action: "pause",
            data: this.localItemData.news_id,
          }));
      },
      liveStatus: function (e) {
        return { 20: "preview", 21: "living", 22: "review" }[e] || "";
      },
      handleLiveClick: function () {
        this.playVideo();
      },
      handleVideoClick: function () {
        this.isShowPlayer
          ? this.playReady
            ? this.playing
              ? (this.pauseVideo(), this.handleClick("detail"))
              : this.playVideo()
            : this.handleClick("detail")
          : this.initPlayer();
      },
      handleVoiceClick: function () {
        var e = this.mute;
        this.handleReport({
          event: "information.video.tab.video_" + (e ? "unmute" : "mute"),
          eventData: { id: this.localItemData.news_id },
        }),
          this.$emit("muteChange", !e);
      },
      handleClick: function () {
        var i =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t(
          this,
          null,
          e().mark(function a() {
            var n,
              o,
              s,
              r,
              c,
              u,
              h,
              v,
              p = this;
            return e().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (
                        ((o = this.localItemData),
                        (s = o.id),
                        (r = o.is_subscribed),
                        (c = o.like_flag),
                        (u = o.url),
                        (h = o.news_id),
                        !this.isChannels || !u)
                      ) {
                        a.next = 5;
                        break;
                      }
                      this.handleReport({
                        event: "information.video.tab.channels.click",
                        eventData: { news_id: h },
                      }),
                        (a.next = 27);
                      break;
                    case 5:
                      if (!l.isH5Native) {
                        a.next = 13;
                        break;
                      }
                      if (!["subscribed", "like", "share"].includes(i)) {
                        a.next = 11;
                        break;
                      }
                      return (a.next = 9), l.sqPrivacyCheck();
                    case 9:
                      if (a.sent) {
                        a.next = 11;
                        break;
                      }
                      return a.abrupt("return");
                    case 11:
                      a.next = 26;
                      break;
                    case 13:
                      if ("subscribed" !== i) {
                        a.next = 24;
                        break;
                      }
                      if (
                        ((a.prev = 14),
                        (a.t0 =
                          "function" == typeof this.customActionShowProtocal),
                        !a.t0)
                      ) {
                        a.next = 19;
                        break;
                      }
                      return (
                        (a.next = 19),
                        this.customActionShowProtocal(
                          this.protocalActionId.follow
                        )
                      );
                    case 19:
                      a.next = 24;
                      break;
                    case 21:
                      return (
                        (a.prev = 21), (a.t1 = a.catch(14)), a.abrupt("return")
                      );
                    case 24:
                      if (
                        (null == (n = this.didAgreeUserAgreement)
                          ? void 0
                          : n.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        a.next = 26;
                        break;
                      }
                      return a.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 26:
                      "subscribed" === i
                        ? this.securityCheck({ eventName: "tapFollow" })
                            .then(function () {
                              return t(
                                p,
                                null,
                                e().mark(function t() {
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            (this.localItemData.is_subscribed =
                                              1 === r ? 0 : 1),
                                              this.handleActionReport(
                                                s,
                                                r
                                                  ? "unsubscribed"
                                                  : "subscribed"
                                              ),
                                              this.emitTapDetail(i);
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    t,
                                    this
                                  );
                                })
                              );
                            })
                            .catch(function () {})
                        : "like" === i
                        ? this.securityCheck({ eventName: "putLike" })
                            .then(function () {
                              (p.localItemData.like_flag = !c),
                                p.localItemData.like_flag
                                  ? (p.localItemData.like_num += 1)
                                  : p.localItemData.like_num > 0 &&
                                    (p.localItemData.like_num -= 1),
                                p.handleActionReport(s, c ? "unlike" : "like"),
                                p.emitTapDetail(i);
                            })
                            .catch(function () {})
                        : "comment" === i
                        ? this.securityCheck({
                            eventName: "putSubject",
                            postData: { id: h || "" },
                          })
                            .then(function () {
                              p.handleReport({
                                event: "information.video.tab.video_comment",
                                eventData: {
                                  video_id: s,
                                  newsid: p.localItemData.news_id,
                                },
                              }),
                                p.emitTapDetail(i);
                            })
                            .catch(function () {})
                        : ((v = {
                            detail: "information.video.tab.".concat(
                              this.isCourse ? "course" : "detail",
                              "_click"
                            ),
                            share: "information.video.tab.".concat(i, "_click"),
                            liveList: "information.video.tab.more_lives",
                          })[i] &&
                            this.handleReport({
                              event: v[i],
                              eventData:
                                "liveList" !== i
                                  ? {
                                      video_id: s,
                                      newsid: this.localItemData.news_id,
                                    }
                                  : {},
                            }),
                          "liveList" === i && this.pauseVideo(),
                          this.emitTapDetail(i));
                    case 27:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              this,
              [[14, 21]]
            );
          })
        );
      },
      handleActionReport: function (e, t) {
        this.handleReport({
          event: "information.video.tab.video_".concat(t),
          eventData: { video_id: e, newsid: this.localItemData.news_id },
        });
      },
      emitTapDetail: function (e) {
        this.$emit("tapDetail", {
          action: e,
          data: i.cloneDeep(this.localItemData),
        });
      },
      handleReport: function (e) {
        var t = e.event,
          i = e.eventData;
        this.$emit("dataReport", { event: t, eventData: i });
      },
      handleBarClick: function () {
        this.handleReport({
          event: "information.video.tab.course_bar_click",
          eventData: { video_id: this.localItemData.id },
        }),
          this.$emit("tapDetail", {
            action: "detail",
            data: i.cloneDeep(this.localItemData),
          });
      },
      handleError: function (e) {
        (this.playReady = !1),
          this.handleReport({
            event: "information.video.tab.".concat(
              this.liveType ? "live" : "video",
              "_playerror"
            ),
            eventData: {
              id: this.localItemData.news_id,
              time: Date.now() - this.playStartTime,
            },
          });
      },
      checkExpose: function () {
        var e = this;
        (this.mpIntersectionObserver = this.createIntersectionObserver({
          thresholds: [0, 0.5, 0.7, 1],
        })),
          this.mpIntersectionObserver
            .relativeToViewport()
            .observe(
              "#custom-video-item-".concat(this.localItemData.news_id),
              function (t) {
                var i = t.intersectionRatio;
                if (i <= 0 || i < 0.01)
                  return (
                    (e.playing = !1),
                    (e.txvContext = null),
                    void (e.txvVideoInvisible = !0)
                  );
                i >= 0.7
                  ? (e.txvVideoInvisible && (e.txvVideoInvisible = !1),
                    e.initPlayer(),
                    1 == i &&
                      e.handleReport({
                        event: "information.video.tab.video_exposure",
                        eventData: { newsid: e.localItemData.news_id },
                      }))
                  : i <= 0.5 && e.pauseVideo();
              }
            );
      },
      reportPlay: function () {
        (this.stockBridge.getStorage(c) || "") === this.localItemData.news_id
          ? (this.startType = 2)
          : ((this.startType = 1),
            this.stockBridge.setStorage(c, this.localItemData.news_id)),
          this.handleReport({
            event: "information.video.tab.".concat(
              this.liveType ? "live" : "video",
              "_play"
            ),
            eventData: {
              newsid: this.localItemData.news_id,
              start_type: this.startType,
            },
          });
      },
      reportPlayTime: function () {
        var e = this.playStartTime ? Date.now() - this.playStartTime : 0;
        this.handleReport({
          event: "information.video.tab.".concat(
            this.liveType ? "live" : "video",
            "_playtime"
          ),
          eventData: {
            newsid: this.localItemData.news_id,
            play_time: e,
            play_percentage: this.playPercent,
            live_status: this.liveType
              ? this.localItemData.live_info.live_status
              : 0,
          },
        });
      },
      getTxvContext: function () {
        var e, t;
        if (null == (e = this.localItemData.video_info) ? void 0 : e.video_id)
          try {
            return s.get(
              null == (t = this.localItemData.video_info) ? void 0 : t.video_id
            );
          } catch (e) {}
      },
      onMpPlayerPlay: function (e) {
        (this.playing = !0),
          (this.playStartTime = Date.now()),
          this.reportPlay();
      },
      onMpPlayerPause: function () {
        this.playing && this.reportPlayTime(), (this.playing = !1);
      },
      onMpErrorEvent: function (e) {
        this.playing && this.reportPlayTime(),
          (this.playing = !1),
          this.handleReport({
            event: "information.video.tab.video_playerror",
            eventData: {
              id: this.localItemData.news_id,
              time: Date.now() - this.playStartTime,
            },
          });
      },
      mpVideoStateChange: function (e) {
        var t = this,
          i = e.detail.newstate;
        if ("ready" === i) {
          this.txvContext || (this.txvContext = this.getTxvContext());
          var a = setTimeout(function () {
            (t.playReady = !0), clearTimeout(a);
          }, 300);
        }
        "ended" === i &&
          (this.playing && this.reportPlayTime(), (this.playing = !1));
      },
      getLiveVideoContext: function () {
        return (
          !this.mpLiveVideoContext &&
            i.index &&
            (this.mpLiveVideoContext = i.index.createVideoContext(
              "live-player-container",
              this
            )),
          this.mpLiveVideoContext
        );
      },
      onMpLivePlayEvent: function () {
        (this.playing = !0),
          (this.playStartTime = Date.now()),
          this.reportPlay();
      },
      onMpLivePauseEvent: function () {
        this.playing && this.reportPlayTime(), (this.playing = !1);
      },
      onMpLiveTimeUpdateEvent: function (e) {
        var t,
          i,
          a = null == (t = null == e ? void 0 : e.detail) ? void 0 : t.duration,
          n =
            null == (i = null == e ? void 0 : e.detail)
              ? void 0
              : i.currentTime;
        !n || !a || isNaN(n) || isNaN(a)
          ? (this.playPercent = 0)
          : (this.playPercent = (n / a).toFixed(4));
      },
      onMpLiveEndedEvent: function () {
        this.playing && this.reportPlayTime(), (this.playing = !1);
      },
      onMpLiveErrorEvent: function () {
        this.playing && this.reportPlayTime(),
          (this.playing = !1),
          this.handleReport({
            event: "information.video.tab.live_playerror",
            eventData: {
              id: this.localItemData.news_id,
              time: Date.now() - this.playStartTime,
            },
          });
      },
    },
  };
Array ||
  (
    i.resolveComponent("recom-spliter") +
    i.resolveComponent("video-player") +
    i.resolveComponent("class-bar")
  )();
var h = i._export_sfc(u, [
  [
    "render",
    function (e, t, a, n, o, l) {
      return i.e(
        { a: l.isChannels },
        (l.isChannels, {}),
        { b: l.showSpliter },
        l.showSpliter ? { c: i.sr("videoRecom", "a0e3a99d-0") } : {},
        {
          d: l.formatImageHttps(
            o.localItemData.media_icon || o.defaultMediaIcon
          ),
          e: i.o(function (e) {
            return l.handleClick("media");
          }, 3445),
          f: i.t(o.localItemData.media_name),
          g: l.isLiving,
        },
        (l.isLiving, {}),
        { h: !l.isChannels },
        l.isChannels
          ? {}
          : i.e(
              { i: !o.localItemData.is_subscribed },
              (o.localItemData.is_subscribed, {}),
              {
                j: i.o(function (e) {
                  return l.handleClick("subscribed");
                }, 3446),
              }
            ),
        {
          k: i.t(o.localItemData.news_title),
          l: i.o(function (e) {
            return l.handleClick("detail");
          }, 3447),
          m: l.liveCalendarFlag,
        },
        l.liveCalendarFlag
          ? {
              n: l.thumbImg,
              o: i.n(
                a.innerWidth > 450 ? "custom-video-player--large-screen" : ""
              ),
              p: i.s(l.styleObj),
              q: i.o(function (e) {
                return l.handleClick("detail");
              }, 3448),
            }
          : i.e(
              { r: l.liveType },
              l.liveType
                ? i.e(
                    {
                      s: i.n(
                        l.liveStatus(o.localItemData.live_info.live_status)
                      ),
                      t: i.t(
                        l.formatLiveStatus(
                          o.localItemData.live_info.live_status
                        )
                      ),
                      v: +o.localItemData.live_info.participate_num,
                    },
                    (o.localItemData.live_info.participate_num, {}),
                    { w: +o.localItemData.live_info.participate_num },
                    +o.localItemData.live_info.participate_num
                      ? {
                          x: i.t(
                            l.formatNum(
                              o.localItemData.live_info.participate_num
                            )
                          ),
                          y: i.t(
                            l.formatLiveText(
                              o.localItemData.live_info.live_status
                            )
                          ),
                        }
                      : {}
                  )
                : {},
              {
                z: l.thumbImg,
                A: i.o(function () {
                  return (
                    l.handleLiveClick && l.handleLiveClick.apply(l, arguments)
                  );
                }, 3449),
                B: !l.liveType || l.isShowLivePlayer,
              },
              !l.liveType || l.isShowLivePlayer
                ? {
                    C: i.o(function () {
                      return l.playVideo && l.playVideo.apply(l, arguments);
                    }, 3450),
                  }
                : {},
              { D: !l.isChannels },
              l.isChannels
                ? {}
                : i.e(
                    { E: l.isShowPlayNum },
                    l.isShowPlayNum
                      ? {
                          F: i.t(l.formatNum(o.localItemData.play_num)),
                          G: i.t(l.isCourse ? "人已学习" : "播放"),
                        }
                      : {},
                    { H: !l.liveType },
                    (l.liveType, {}),
                    { I: !l.liveType },
                    l.liveType ? {} : { J: i.t(o.localItemData.video_time) }
                  ),
              {
                K: !o.playing,
                L: i.o(function () {
                  return (
                    l.handleVideoClick && l.handleVideoClick.apply(l, arguments)
                  );
                }, 3451),
                M: !l.isMP && o.isShowPlayer,
              },
              !l.isMP && o.isShowPlayer
                ? {
                    N: i.sr("player_" + o.localItemData.news_id, "a0e3a99d-1"),
                    O: o.playReady,
                    P: "player_" + o.localItemData.news_id,
                    Q: i.o(l.onPlayStateChange, 3452),
                    R: i.o(l.onDurationChange, 3453),
                    S: i.o(l.handleVideoClick, 3454),
                    T: i.o(l.handleError, 3455),
                    U: i.p({
                      "container-id": "videoList_" + o.localItemData.news_id,
                      options: o.options,
                      data: l.videoInfo,
                      mute: a.mute,
                    }),
                    V: o.localItemData.news_id,
                  }
                : l.isMP && o.isShowPlayer
                ? i.e(
                    { X: l.liveUrl && l.liveUrl.length > 0 },
                    l.liveUrl && l.liveUrl.length > 0
                      ? {
                          Y: l.liveUrl,
                          Z: a.mute,
                          aa: o.mpLiveAutoPlay,
                          ab: l.isLiving,
                          ac: !l.isLiving,
                          ad: l.formatImageHttps(
                            o.localItemData.live_info.live_public_img
                          ),
                          ae: o.localItemData.news_title,
                          af: i.o(function () {
                            return (
                              l.onMpLivePlayEvent &&
                              l.onMpLivePlayEvent.apply(l, arguments)
                            );
                          }, 3456),
                          ag: i.o(function () {
                            return (
                              l.onMpLivePauseEvent &&
                              l.onMpLivePauseEvent.apply(l, arguments)
                            );
                          }, 3457),
                          ah: i.o(function () {
                            return (
                              l.onMpLiveEndedEvent &&
                              l.onMpLiveEndedEvent.apply(l, arguments)
                            );
                          }, 3458),
                          ai: i.o(function () {
                            return (
                              l.onMpLiveErrorEvent &&
                              l.onMpLiveErrorEvent.apply(l, arguments)
                            );
                          }, 3459),
                          aj: i.o(function () {
                            return (
                              l.onMpLiveTimeUpdateEvent &&
                              l.onMpLiveTimeUpdateEvent.apply(l, arguments)
                            );
                          }, 3460),
                        }
                      : l.liveType ||
                        !o.localItemData.video_info.video_id ||
                        o.txvVideoInvisible
                      ? {}
                      : {
                          al: o.localItemData.video_info.video_id,
                          am: o.localItemData.video_info.video_id,
                          an: l.thumbImg,
                          ao: o.mpLiveAutoPlay,
                          ap: a.mute,
                          aq: i.o(function () {
                            return (
                              l.onMpPlayerPlay &&
                              l.onMpPlayerPlay.apply(l, arguments)
                            );
                          }, 3461),
                          ar: i.o(function () {
                            return (
                              l.onMpPlayerPause &&
                              l.onMpPlayerPause.apply(l, arguments)
                            );
                          }, 3462),
                          as: i.o(function () {
                            return (
                              l.onMpErrorEvent &&
                              l.onMpErrorEvent.apply(l, arguments)
                            );
                          }, 3463),
                          at: i.o(function () {
                            return (
                              l.onMpLiveEndedEvent &&
                              l.onMpLiveEndedEvent.apply(l, arguments)
                            );
                          }, 3464),
                          av: i.o(function () {
                            return (
                              l.mpVideoStateChange &&
                              l.mpVideoStateChange.apply(l, arguments)
                            );
                          }, 3465),
                          aw: i.o(function () {
                            return (
                              l.onMpLiveTimeUpdateEvent &&
                              l.onMpLiveTimeUpdateEvent.apply(l, arguments)
                            );
                          }, 3466),
                        },
                    {
                      ak:
                        !l.liveType &&
                        o.localItemData.video_info.video_id &&
                        !o.txvVideoInvisible,
                      ax: o.playReady,
                      ay: "player_".concat(o.localItemData.news_id),
                      az: i.o(function () {
                        return (
                          l.handleVideoClick &&
                          l.handleVideoClick.apply(l, arguments)
                        );
                      }, 3467),
                    }
                  )
                : {},
              {
                W: l.isMP && o.isShowPlayer,
                aA: i.n(a.mute ? "icon-mute" : "icon-unMute"),
                aB: o.playing,
                aC: i.o(function () {
                  return (
                    l.handleVoiceClick && l.handleVoiceClick.apply(l, arguments)
                  );
                }, 3468),
                aD: i.n(
                  a.innerWidth > 450 ? "custom-video-player--large-screen" : ""
                ),
                aE: i.s(l.styleObj),
              }
            ),
        { aF: o.localItemData.summary || l.labels.length || l.liveType },
        o.localItemData.summary || l.labels.length || l.liveType
          ? i.e(
              { aG: o.localItemData.summary },
              o.localItemData.summary
                ? { aH: i.t(o.localItemData.summary) }
                : {},
              { aI: l.labels.length },
              l.labels.length
                ? {
                    aJ: i.f(l.labels, function (e, t, a) {
                      return { a: i.n(e.class), b: i.t(e.text), c: t };
                    }),
                  }
                : {},
              { aK: l.liveType },
              l.liveType
                ? i.e(
                    { aL: l.viewerIcons.length },
                    l.viewerIcons.length
                      ? {
                          aM: i.f(l.viewerIcons, function (e, t, a) {
                            return {
                              a: "user-icon-" + t,
                              b: l.formatImageHttps(e),
                              c: t,
                              d: i.n("icon-" + t),
                            };
                          }),
                        }
                      : {},
                    {
                      aN: i.t(
                        l.formatNum(o.localItemData.live_info.participate_num)
                      ),
                      aO: i.t(
                        l.formatLiveText(a.itemData.live_info.live_status)
                      ),
                      aP: !l.isMP,
                    },
                    l.isMP
                      ? {}
                      : {
                          aQ: i.o(function (e) {
                            return l.handleClick("share");
                          }, 3469),
                        },
                    { aR: l.isMP },
                    l.isMP
                      ? {
                          aS: i.o(function (e) {
                            return l.handleClick("share");
                          }, 3470),
                        }
                      : {}
                  )
                : {}
            )
          : {},
        { aT: l.isCourse },
        l.isCourse
          ? {
              aU: i.o(l.handleBarClick, 3471),
              aV: i.p({ data: l.courseData }),
              aW: i.n(o.localItemData.summary ? "hasBorder" : ""),
            }
          : l.isChannels
          ? {}
          : i.e(
              { aY: !l.liveType },
              l.liveType
                ? {
                    bl: i.o(function (e) {
                      return l.handleClick("liveList");
                    }, 3476),
                  }
                : i.e(
                    {
                      aZ: i.n(
                        1 == +o.localItemData.comment_status
                          ? "icon-noComment"
                          : "icon-comment"
                      ),
                      ba: o.localItemData.comment_num,
                    },
                    o.localItemData.comment_num
                      ? { bb: i.t(l.formatNum(o.localItemData.comment_num)) }
                      : {},
                    {
                      bc: i.o(function (e) {
                        return l.handleClick("comment");
                      }, 3472),
                      bd: i.n(l.likeFlag ? "likeed" : ""),
                      be: o.localItemData.like_num,
                    },
                    o.localItemData.like_num
                      ? { bf: i.t(l.formatNum(o.localItemData.like_num)) }
                      : {},
                    {
                      bg: i.o(function (e) {
                        return l.handleClick("like");
                      }, 3473),
                      bh: !l.isMP,
                    },
                    l.isMP
                      ? {}
                      : {
                          bi: i.o(function (e) {
                            return l.handleClick("share");
                          }, 3474),
                        },
                    { bj: l.isMP },
                    l.isMP
                      ? {
                          bk: i.o(function (e) {
                            return l.handleClick("share");
                          }, 3475),
                        }
                      : {}
                  ),
              { bm: i.n(l.liveType ? "live-footer" : "") }
            ),
        {
          aX: !l.isChannels,
          bn: "custom-video-item-".concat(o.localItemData.news_id),
          bo: i.n(l.isChannels ? "channels" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a0e3a99d"],
]);
wx.createComponent(h);
