var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0),
  require("../../@babel/runtime/helpers/Arrayincludes");
var t,
  i = require("../../@babel/runtime/helpers/typeof"),
  o = require("../../behaviors/logger"),
  n = require("../../enums"),
  r = e(require("../../libs/event-proxy")),
  s = require("../../modules/utils/index"),
  d =
    ((t = function (e, i) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        })(e, i);
    }),
    function (e, i) {
      if ("function" != typeof i && null !== i)
        throw new TypeError(
          "Class extends value " + String(i) + " is not a constructor or null"
        );
      function o() {
        this.constructor = e;
      }
      t(e, i),
        (e.prototype =
          null === i
            ? Object.create(i)
            : ((o.prototype = i.prototype), new o()));
    }),
  a = function () {
    return (a =
      Object.assign ||
      function (e) {
        for (var t, i = 1, o = arguments.length; i < o; i++)
          for (var n in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }).apply(this, arguments);
  },
  l = function (e, t, o, n) {
    var r,
      s = arguments.length,
      d =
        s < 3
          ? t
          : null === n
          ? (n = Object.getOwnPropertyDescriptor(t, o))
          : n;
    if (
      "object" === ("undefined" == typeof Reflect ? "undefined" : i(Reflect)) &&
      "function" == typeof Reflect.decorate
    )
      d = Reflect.decorate(e, t, o, n);
    else
      for (var a = e.length - 1; a >= 0; a--)
        (r = e[a]) && (d = (s < 3 ? r(d) : s > 3 ? r(t, o, d) : r(t, o)) || d);
    return s > 3 && d && Object.defineProperty(t, o, d), d;
  },
  p = "video-node-controller",
  u = (function (e) {
    function t(t, i) {
      var o = e.call(this) || this;
      return (
        (o.innerState = n.VideoState.IDLE),
        (o.skipOutroTimeS = 0),
        (o.hasSkipOutro = !1),
        (o.innerVideoInfo = null),
        (o.preventVideoEvent = !1),
        (o.loadTimeout = null),
        (o.isLevelSwitching = !1),
        (o.innerPlayed = !1),
        (o.isSeeking = !1),
        (o.innerPlaybackRate = 1),
        (o.ref = i),
        (o.videoContext = wx.createVideoContext(t, i)),
        (o.videoEventMap = {
          play: o.onVideoPlay.bind(o),
          pause: o.onVideoPause.bind(o),
          ended: o.onVideoEnded.bind(o),
          timeupdate: o.onVideoTimeUpdate.bind(o),
          fullscreenchange: o.onVideoFullscreenChange.bind(o),
          waiting: o.onVideoWaiting.bind(o),
          error: o.onVideoError.bind(o),
          progress: o.onVideoProgress.bind(o),
          loadedmetadata: o.onVideoLoadedMetadata.bind(o),
          tap: o.onVideoTap.bind(o),
          longpress: o.onVideoLongPress.bind(o),
          touchend: o.onVideoTouchEnd.bind(o),
          touchmove: o.onVideoTouchMove.bind(o),
          enterpictureinpicture: o.onVideoEnterPIP.bind(o),
          leavepictureinpicture: o.onVideoLeavePIP.bind(o),
          seekcomplete: o.onVideoSeekComplete.bind(o),
        }),
        o
      );
    }
    return (
      d(t, e),
      Object.defineProperty(t.prototype, "state", {
        get: function () {
          return this.innerState;
        },
        set: function (e) {
          var t = this.innerState;
          t !== e &&
            ((this.innerState = e),
            this.emit(n.VideoNodeEvents.STATE_CHANGE, {
              oldState: t,
              newState: e,
            }));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "videoInfo", {
        get: function () {
          return this.innerVideoInfo;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "played", {
        get: function () {
          return this.innerPlayed;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "playbackRate", {
        get: function () {
          return this.innerPlaybackRate || 1;
        },
        set: function (e) {
          this.videoContext.playbackRate(e),
            (this.innerPlaybackRate = e),
            this.emit(n.VideoNodeEvents.RATE_CHANGE, { rate: e });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.getVideo = function () {
        return wx
          .createSelectorQuery()
          .in(this.ref)
          .select("#vnode-".concat(this.ref.data.idx));
      }),
      (t.prototype.destroy = function () {
        this.stop(), this.removeAllListeners();
      }),
      (t.prototype.pause = function () {
        this.innerVideoInfo && this.videoContext.pause();
      }),
      (t.prototype.play = function (e, t) {
        var i = this;
        if (e && !(null == e ? void 0 : e.preloaded))
          this.stop(!0),
            (this.innerVideoInfo = e),
            (this.preventVideoEvent = !1),
            (this.state = n.VideoState.LOAD_START),
            this.emit(n.VideoNodeEvents.SET_SRC),
            this.ref.setData({
              isLive: e.innerMode === n.PlayMode.LIVE,
              isDrm: e.isDrm,
              certificateUrl: e.drmCertificate,
              licenseUrl: e.drmLicense,
              src: e.loadingUrl,
              startTime: (null == t ? void 0 : t.startTimeS) || 0,
              durationS: this.innerVideoInfo.duration,
            }),
            (this.skipOutroTimeS =
              (null == t ? void 0 : t.skipOutroTimeS) || 0),
            (this.hasSkipOutro = !1),
            (this.innerVideoInfo.performance.loadStart = Date.now()),
            (this.loadTimeout = setTimeout(function () {
              i.onVideoError({
                detail: { errMsg: "MEDIA_ERR_LOAD(0,0)", id: e.uid },
              });
            }, 15e3)),
            this.ref.data.active ||
              this.emit(n.VideoNodeEvents.PRELOAD_START, { videoInfo: e });
        else {
          if (!this.innerVideoInfo) return;
          this.videoContext.play();
        }
      }),
      (t.prototype.stop = function (e) {
        var t;
        if ((void 0 === e && (e = !1), this.innerVideoInfo)) {
          (this.preventVideoEvent = !0),
            this.innerVideoInfo.innerMode === n.PlayMode.LIVE
              ? this.videoContext.stop()
              : [
                  n.VideoState.IDLE,
                  n.VideoState.LOAD_START,
                  n.VideoState.CANPLAY,
                ].includes(this.state) || this.videoContext.pause(),
            this.clearLoadTimeout();
          var i = !!(null === (t = this.innerVideoInfo) || void 0 === t
            ? void 0
            : t.error);
          (this.innerVideoInfo = null),
            e ||
              ((this.isLevelSwitching = !1),
              (this.innerPlayed = !1),
              i || (this.state = n.VideoState.END),
              (this.state = n.VideoState.IDLE),
              this.ref.setData({ src: "", startTime: 0 }));
        }
      }),
      (t.prototype.seek = function (e) {
        this.innerVideoInfo &&
          ((this.isSeeking = !0),
          this.videoContext.seek(e),
          (this.state = n.VideoState.SEEKING),
          s.IS_WX || this.onVideoSeekComplete());
      }),
      (t.prototype.setLevel = function () {
        if (!this.checkCanSetLevel()) return !1;
        this.isLevelSwitching = !0;
        var e = this.innerVideoInfo;
        return (
          this.stop(!0),
          this.play(e, { startTimeS: e.playtime }),
          this.emit(n.VideoNodeEvents.SETLEVEL_START, { videoInfo: e }),
          !0
        );
      }),
      (t.prototype.toggleFullscreen = function (e) {
        void 0 === e && (e = !0),
          e
            ? this.videoContext.requestFullScreen({})
            : this.videoContext.exitFullScreen();
      }),
      (t.prototype.requestBackgroundPlayback = function () {
        this.innerVideoInfo &&
          (this.videoContext.requestBackgroundPlayback(),
          this.emit(n.VideoNodeEvents.BACKGROUND_PLAYBACK, {
            isBackgroundPlayback: !0,
          }));
      }),
      (t.prototype.proxyEvent = function (e) {
        var t = e.type.toLowerCase();
        (this.preventVideoEvent &&
          !{
            tap: !0,
            fullscreenchange: !0,
            enterpictureinpicture: !0,
            leavepictureinpicture: !0,
          }[t]) ||
          (this.videoEventMap[t] && this.videoEventMap[t](e));
      }),
      (t.prototype.clearLoadTimeout = function () {
        this.loadTimeout &&
          (clearTimeout(this.loadTimeout), (this.loadTimeout = null));
      }),
      (t.prototype.checkCanSetLevel = function () {
        return (
          !!this.innerVideoInfo &&
          [
            this.innerPlayed,
            !this.isLevelSwitching,
            this.innerVideoInfo.loadingUrl,
            this.innerVideoInfo.playtime >= 0,
            this.innerVideoInfo.loadingUrl !== this.ref.data.src,
          ].every(Boolean)
        );
      }),
      (t.prototype.setLevelOver = function () {
        this.isLevelSwitching &&
          ((this.isLevelSwitching = !1),
          this.emit(n.VideoNodeEvents.SETLEVEL_END, {
            videoInfo: this.innerVideoInfo,
          }));
      }),
      (t.prototype.onVideoPause = function () {
        (s.IS_WX || this.state !== n.VideoState.SEEKING) &&
          (this.state = n.VideoState.PAUSE);
      }),
      (t.prototype.onVideoTap = function () {
        this.emit(n.VideoNodeEvents.TAP);
      }),
      (t.prototype.onVideoLongPress = function () {
        var e;
        this.ref.properties.longPressPlaybackRate &&
          (null === (e = this.innerVideoInfo) || void 0 === e
            ? void 0
            : e.innerMode) !== n.PlayMode.LIVE &&
          this.emit(n.VideoNodeEvents.LONG_PRESS);
      }),
      (t.prototype.onVideoTouchEnd = function () {
        this.ref.properties.longPressPlaybackRate &&
          (this.ref.setData({ disableGesture: !1 }),
          this.emit(n.VideoNodeEvents.TOUCH_END));
      }),
      (t.prototype.onVideoTouchMove = function () {
        this.ref.data.disableGesture &&
          this.ref.properties.longPressPlaybackRate &&
          this.ref.setData({ disableGesture: !0 });
      }),
      (t.prototype.onVideoEnded = function () {
        var e;
        [n.VideoState.END, n.VideoState.IDLE].includes(this.state) ||
          (null === (e = this.innerVideoInfo) || void 0 === e
            ? void 0
            : e.isPreview) ||
          this.stop();
      }),
      (t.prototype.onVideoEnterPIP = function () {}),
      (t.prototype.onVideoLeavePIP = function () {}),
      (t.prototype.onVideoError = function (e) {
        var t,
          i,
          o,
          r,
          s = this.innerVideoInfo.loadingUrl,
          d =
            null === (t = this.innerVideoInfo) || void 0 === t
              ? void 0
              : t.retryNextUrl(),
          l = this.innerVideoInfo,
          p =
            (null === (i = e.detail) || void 0 === i ? void 0 : i.errMsg) || "",
          u =
            (null === n.ErrorCode || void 0 === n.ErrorCode
              ? void 0
              : n.ErrorCode[p.split("(")[0]]) || n.ErrorCode.UNKNOWN,
          c = u === n.ErrorCode.MEDIA_ERR_DRM,
          h = !0;
        c &&
          (h =
            "2" !==
            ((null ===
              (r =
                null === (o = p.split(",")[1]) || void 0 === o
                  ? void 0
                  : o.replace(")", "")) || void 0 === r
              ? void 0
              : r.trim()) || ""));
        if (!d || (!h && c))
          return (
            (l.error = {
              code: u,
              errMsg: c ? n.ErrorMsg.MEDIA_ERR_DRM : n.ErrorMsg.DEFAULT,
              isSupportDrm: h,
            }),
            this.stop(),
            void this.emit(n.VideoNodeEvents.ERROR, { videoInfo: l })
          );
        this.stop(!0),
          this.emit(n.VideoNodeEvents.RETRY, {
            error: a({ code: n.ErrorCode.SUCCESS }, e.detail),
            prevUrl: s,
            currentUrl: l.loadingUrl,
          }),
          this.play(l, {
            startTimeS: this.innerPlayed
              ? null == l
                ? void 0
                : l.playtime
              : this.ref.data.startTime,
          });
      }),
      (t.prototype.onVideoFullscreenChange = function (e) {
        this.ref.setData({ isFullscreen: e.detail.fullScreen }),
          this.emit(n.VideoNodeEvents.FULLSCREEN_CHANGE, {
            isFullscreen: e.detail.fullScreen,
            direction: e.detail.direction,
          });
      }),
      (t.prototype.onVideoLoadedMetadata = function (e) {
        (this.innerVideoInfo.performance.loadEnd = Date.now()),
          (this.state = n.VideoState.CANPLAY),
          this.clearLoadTimeout(),
          this.ref.data.active || (this.innerVideoInfo.preloaded = !0),
          this.emit(n.VideoNodeEvents.PRELOAD_END, {
            videoInfo: this.innerVideoInfo,
          });
        var t = e.detail,
          i = t.width,
          o = t.height;
        this.emit(n.VideoNodeEvents.METADATA_CHANGE, {
          videoInfo: this.innerVideoInfo,
          width: i,
          height: o,
        });
      }),
      (t.prototype.onVideoPlay = function () {
        !this.innerPlayed &&
          this.ref.data.active &&
          ((this.innerPlayed = !0),
          this.emit(n.VideoNodeEvents.FIRST_PLAYING, {
            videoInfo: this.innerVideoInfo,
          })),
          (this.state = n.VideoState.PLAYING),
          this.isLevelSwitching && this.setLevelOver(),
          this.ref.data.active || this.videoContext.pause();
      }),
      (t.prototype.onVideoProgress = function (e) {
        this.emit(n.VideoNodeEvents.LOAD_PROGRESS, {
          progress: e.detail.buffered,
        });
      }),
      (t.prototype.onVideoTimeUpdate = function (e) {
        var t,
          i = e.detail.currentTime;
        if (0 !== i && this.state !== n.VideoState.PAUSE) {
          if (
            (this.state !== n.VideoState.PLAYING &&
              (this.isSeeking &&
                ((this.isSeeking = !1),
                (this.state = n.VideoState.SEEKED),
                (this.state = n.VideoState.CANPLAY)),
              this.play(),
              (this.state = n.VideoState.PLAYING)),
            (this.innerVideoInfo.playtime = i),
            this.emit(n.VideoNodeEvents.TIMEUPDATE, {
              videoInfo: this.innerVideoInfo,
            }),
            this.skipOutroTimeS &&
              !this.hasSkipOutro &&
              i >= this.skipOutroTimeS)
          )
            return (
              (this.hasSkipOutro = !0),
              void this.seek(this.innerVideoInfo.duration)
            );
          (null === (t = this.innerVideoInfo) || void 0 === t
            ? void 0
            : t.isPreview) &&
            i >= this.innerVideoInfo.duration &&
            this.stop();
        }
      }),
      (t.prototype.onVideoSeekComplete = function () {
        this.innerPlayed &&
          (this.isLevelSwitching ||
            (this.isSeeking &&
              ((this.isSeeking = !1),
              (this.state = n.VideoState.SEEKED),
              (this.state = n.VideoState.CANPLAY),
              this.play())));
      }),
      (t.prototype.onVideoWaiting = function () {
        this.innerPlayed &&
          (this.isLevelSwitching ||
            this.isSeeking ||
            (this.state = n.VideoState.BUFFERING));
      }),
      l([(0, o.log)(p, "invoke")], t.prototype, "getVideo", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "destroy", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "pause", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "play", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "stop", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "seek", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "setLevel", null),
      l([(0, o.log)(p, "invoke")], t.prototype, "toggleFullscreen", null),
      l(
        [(0, o.log)(p, "invoke")],
        t.prototype,
        "requestBackgroundPlayback",
        null
      ),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoPause", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoTap", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoLongPress", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoTouchEnd", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoTouchMove", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoEnded", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoEnterPIP", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoLeavePIP", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoError", null),
      l(
        [(0, o.log)(p, "callback")],
        t.prototype,
        "onVideoFullscreenChange",
        null
      ),
      l(
        [(0, o.log)(p, "callback")],
        t.prototype,
        "onVideoLoadedMetadata",
        null
      ),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoPlay", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoSeekComplete", null),
      l([(0, o.log)(p, "callback")], t.prototype, "onVideoWaiting", null),
      t
    );
  })(r.default);
exports.default = u;
