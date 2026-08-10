var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var t,
  o = require("../../enums"),
  n = require("../../modules/dataset/enum"),
  i = e(require("../../modules/reporters/vod-flow-reporter")),
  r = e(require("./controller")),
  s =
    ((t = function (e, o) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        })(e, o);
    }),
    function (e, o) {
      if ("function" != typeof o && null !== o)
        throw new TypeError(
          "Class extends value " + String(o) + " is not a constructor or null"
        );
      function n() {
        this.constructor = e;
      }
      t(e, o),
        (e.prototype =
          null === o
            ? Object.create(o)
            : ((n.prototype = o.prototype), new n()));
    }),
  a = function () {
    return (a =
      Object.assign ||
      function (e) {
        for (var t, o = 1, n = arguments.length; o < n; o++)
          for (var i in (t = arguments[o]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  },
  d = function (e, t, o, n) {
    return new (o || (o = Promise))(function (i, r) {
      function s(e) {
        try {
          d(n.next(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        try {
          d(n.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function d(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof o
              ? t
              : new o(function (e) {
                  e(t);
                })).then(s, a);
      }
      d((n = n.apply(e, t || [])).next());
    });
  },
  h = function (e, t) {
    var o,
      n,
      i,
      r,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (r = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (r[Symbol.iterator] = function () {
          return this;
        }),
      r
    );
    function a(a) {
      return function (d) {
        return (function (a) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; r && ((r = 0), a[0] && (s = 0)), s; )
            try {
              if (
                ((o = 1),
                n &&
                  (i =
                    2 & a[0]
                      ? n.return
                      : a[0]
                      ? n.throw || ((i = n.return) && i.call(n), 0)
                      : n.next) &&
                  !(i = i.call(n, a[1])).done)
              )
                return i;
              switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, { value: a[1], done: !1 };
                case 5:
                  s.label++, (n = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((i = s.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    (s.label = i[1]), (i = a);
                    break;
                  }
                  if (i && s.label < i[2]) {
                    (s.label = i[2]), s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              (a = [6, e]), (n = 0);
            } finally {
              o = i = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, d]);
      };
    }
  },
  l = { v4138: "10801", v6002: "10001", v4169: "4210801" };
var p = (function (e) {
  function t(t, i, r) {
    var s,
      d,
      h,
      p,
      u,
      f,
      E,
      c,
      v,
      g,
      S,
      A,
      y,
      _,
      N,
      V,
      C =
        e.call(
          this,
          t,
          a(
            a(
              {},
              ((d = (s = i || {}).from),
              (h = void 0 === d ? "v4169" : d),
              (p = s.chid),
              (u = void 0 === p ? 41 : p),
              (f = s.scene),
              (E = void 0 === f ? 0 : f),
              (c = s.env),
              (v = void 0 === c ? "prod" : c),
              (g = s.drm),
              (S = void 0 !== g && g),
              (A = s.show1080p),
              (y = void 0 !== A && A),
              (_ = s.supportHEVC),
              (N = void 0 === _ ? 0 : _),
              (V = s.defn),
              {
                platform: l[h],
                sdtfrom: l[h] ? h : "v4169",
                supportHEVC: N,
                adConfig: { chid: u || 41, live: 0, pu: 1, scene: E },
                debugConfig: { testEnv: "test" === v },
                drm: S,
                defn: V,
                show1080p: y,
              })
            ),
            r
          )
        ) || this;
    return (
      (C.legacyConfig = i),
      (C.deprecatedState = "loading"),
      C.dataset.setCommonKv(n.COMMON_DATA_KEY.playertype, 0),
      C.bindEvents(),
      (null == i ? void 0 : i.onAfterGetInfo) &&
        C.hookAfter(o.HookType.GETINFO, i.onAfterGetInfo),
      (null == i ? void 0 : i.onBeforeGetInfo) &&
        C.hookBefore(o.HookType.GETINFO, i.onBeforeGetInfo),
      (null == i ? void 0 : i.onBeforeSwitchDefn) &&
        C.hookBefore(o.HookType.SET_LEVEL, i.onBeforeSwitchDefn),
      C
    );
  }
  return (
    s(t, e),
    (t.prototype.destroy = function () {
      this.unbindEvents(), e.prototype.destroy.call(this);
    }),
    (t.prototype.switchDefn = function (e) {
      return d(this, void 0, void 0, function () {
        return h(this, function (t) {
          return this.setLevel(e), [2];
        });
      });
    }),
    (t.prototype.requestFullScreen = function () {
      this.toggleFullscreen(!0);
    }),
    (t.prototype.exitFullScreen = function () {
      this.toggleFullscreen(!1);
    }),
    (t.prototype.translateReportParam = function () {
      for (var e, t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
      var r = t[1],
        s = this.reporters[i.default.pluginName],
        d = a({}, r);
      delete d.pageName,
        delete d.refName,
        delete d.pageQuery,
        delete d.appid,
        delete d.app_version,
        null == s || s.updateConfig(d);
      var h = r.pageName,
        l = r.refName,
        p = r.pageQuery,
        u = r.appid,
        f = r.app_version;
      this.dataset.setCommonKv(
        (((e = {})[n.COMMON_DATA_KEY.appVer] = f),
        (e[n.COMMON_DATA_KEY.pageUrl] = h),
        (e[n.COMMON_DATA_KEY.pageQuery] = p),
        (e[n.COMMON_DATA_KEY.pageRef] = l),
        (e[n.COMMON_DATA_KEY.envAppId] = u),
        e)
      );
    }),
    (t.prototype.bindEvents = function () {
      this.on(o.Events.PLAY_SESSION_END, this.onSessionEnd, this),
        this.on(o.Events.VIDEO_PLAYING, this.onVideoPlay, this),
        this.on(o.Events.CONTENT_CHANGE, this.onContentChange, this),
        this.on(o.Events.PLAY_SESSION_START, this.onSessionStart, this),
        this.on(o.Events.VIDEO_PAUSE, this.onVideoPause, this),
        this.on(o.Events.VIDEO_SEEKED, this.onVideoSeeked, this),
        this.on(o.Events.AD_PLAYING, this.onAdPlay, this),
        this.on(o.Events.AD_PAUSE, this.onAdPause, this),
        this.internalMsg.on(
          o.VideoNodeEvents.TIMEUPDATE,
          this.onVideoTimeUpdate,
          this
        ),
        this.internalMsg.on(
          o.EventsExt.DATASET_STATE_UPDATE,
          this.onDatasetStateUpdate,
          this
        ),
        this.internalMsg.on(o.EventsExt.HOOK_ERROR, this.onHookError, this),
        this.internalMsg.on(
          o.VideoNodeEvents.FULLSCREEN_CHANGE,
          this.onFullscreenChange,
          this
        ),
        this.internalMsg.on(
          o.VideoNodeEvents.LOAD_PROGRESS,
          this.onLoadProgress,
          this
        ),
        this.internalMsg.on(
          o.VideoNodeEvents.METADATA_CHANGE,
          this.onVideoLoadedMetaData,
          this
        );
    }),
    (t.prototype.unbindEvents = function () {
      this.off(o.Events.PLAY_SESSION_END, this.onSessionEnd, this),
        this.off(o.Events.PLAY_SESSION_START, this.onSessionStart, this),
        this.off(o.Events.VIDEO_PLAYING, this.onVideoPlay, this),
        this.off(o.Events.CONTENT_CHANGE, this.onContentChange, this),
        this.off(o.Events.VIDEO_PAUSE, this.onVideoPause, this),
        this.off(o.Events.VIDEO_SEEKED, this.onVideoSeeked, this),
        this.off(o.Events.AD_PLAYING, this.onAdPlay, this),
        this.off(o.Events.AD_PAUSE, this.onAdPause, this),
        this.internalMsg.off(
          o.VideoNodeEvents.TIMEUPDATE,
          this.onVideoTimeUpdate,
          this
        ),
        this.internalMsg.off(
          o.EventsExt.DATASET_STATE_UPDATE,
          this.onDatasetStateUpdate,
          this
        ),
        this.internalMsg.off(o.EventsExt.HOOK_ERROR, this.onHookError, this),
        this.internalMsg.off(
          o.VideoNodeEvents.FULLSCREEN_CHANGE,
          this.onFullscreenChange,
          this
        ),
        this.internalMsg.off(
          o.VideoNodeEvents.LOAD_PROGRESS,
          this.onLoadProgress,
          this
        ),
        this.internalMsg.off(
          o.VideoNodeEvents.METADATA_CHANGE,
          this.onVideoLoadedMetaData,
          this
        );
    }),
    (t.prototype.onFullscreenChange = function (e) {
      var t = e.isFullscreen,
        n = e.direction,
        i = e.isUserToggleFullscreen,
        r = void 0 !== i && i;
      this.triggerNativeVideoEvent(o.VideoEvents.FullScreenChange, {
        fullScreen: t,
        direction: n,
        isUserToggleFullscreen: r,
      });
    }),
    (t.prototype.onSessionStart = function () {
      var e, t;
      (this.deprecatedState = "loading"),
        null ===
          (t =
            null === (e = this.legacyConfig) || void 0 === e
              ? void 0
              : e.getReportParam) ||
          void 0 === t ||
          t.call(e, this.translateReportParam.bind(this));
    }),
    (t.prototype.onSessionEnd = function (e) {
      var t = e.code,
        n = e.message;
      if (t !== o.ErrorCode.SUCCESS)
        this.triggerDeprecatedEvent("contenterror", { code: t, message: n });
      else {
        if (e.isUserStop) return;
        this.triggerNativeVideoEvent(o.VideoEvents.Ended, { isAd: this.isAd });
      }
    }),
    (t.prototype.onVideoPlay = function (e) {
      var t = e.isFirst;
      t && this.triggerDeprecatedEvent("videostart", this.createContent()),
        this.triggerNativeVideoEvent(o.VideoEvents.Play, {
          isFirst: t,
          isAd: !1,
        });
    }),
    (t.prototype.onAdPlay = function (e) {
      this.triggerNativeVideoEvent(o.VideoEvents.Play, {
        isFirst: e.isFirst,
        isAd: !0,
      });
    }),
    (t.prototype.onAdPause = function () {
      this.triggerNativeVideoEvent(o.VideoEvents.Pause, { isAd: !0 });
    }),
    (t.prototype.onDatasetStateUpdate = function (e) {
      var t,
        i = e.key,
        r = e.newVal,
        s = r.ext,
        a = (null == s ? void 0 : s.isUserStop) ? "stopped" : "ended",
        d =
          (((t = {})[n.DataState.GET_INFO_END] =
            r.code === o.ErrorCode.SUCCESS && "playing" !== this.deprecatedState
              ? "ready"
              : null),
          (t[n.DataState.FIRST_PLAY] = "playing"),
          (t[n.DataState.SESSION_END] =
            r.code === o.ErrorCode.SUCCESS ? a : "error"),
          t);
      d[i] &&
        (this.triggerDeprecatedEvent("statechange", {
          oldstate: this.deprecatedState,
          newstate: d[i],
        }),
        (this.deprecatedState = d[i]));
    }),
    (t.prototype.onContentChange = function () {
      this.triggerDeprecatedEvent("contentchange", this.createContent());
    }),
    (t.prototype.onVideoPause = function () {
      this.triggerNativeVideoEvent(o.VideoEvents.Pause);
    }),
    (t.prototype.onLoadProgress = function (e) {
      this.triggerNativeVideoEvent(o.VideoEvents.Progress, {
        buffered: e.progress,
        isAd: this.isAd,
      });
    }),
    (t.prototype.onVideoTimeUpdate = function () {
      this.triggerNativeVideoEvent(o.VideoEvents.TimeUpdate, {
        currentTime: this.playtime,
        duration: this.duration,
        isAd: this.isAd,
      });
    }),
    (t.prototype.onVideoSeeked = function () {
      this.triggerNativeVideoEvent(o.VideoEvents.SeekComplete, {
        position: this.playtime,
        isAd: this.isAd,
      });
    }),
    (t.prototype.onVideoLoadedMetaData = function (e) {
      var t = e.videoInfo,
        n = e.width,
        i = e.height;
      this.triggerNativeVideoEvent(o.VideoEvents.LoadedMetadata, {
        duration: t.duration,
        isAd: this.isAd,
        width: n,
        height: i,
      });
    }),
    (t.prototype.onHookError = function (e) {
      var t = e.error,
        o = e.phase,
        n = e.name;
      this.triggerDeprecatedEvent("error", {
        error: t,
        __debug: { phase: o, name: n },
      });
    }),
    (t.prototype.triggerNativeVideoEvent = function (e, t) {
      this.ref.triggerEvent(e, t);
    }),
    (t.prototype.triggerDeprecatedEvent = function (e, t) {
      void 0 === t && (t = {}),
        this.ref.triggerEvent(e, a(a({}, t), { deprecated: !0 }));
    }),
    (t.prototype.createContent = function () {
      var e = this.currentVideoInfo || {},
        t = e.loadingUrl,
        o = e.duration,
        n = (this.currentPlayConfig || {}).extra,
        i = n || {},
        r = i.charged,
        s = i.preview,
        a = i.fileSize;
      return {
        currentContent: {
          duration: o,
          isad: this.isAd,
          charged: r,
          preview: s,
          url: t,
          fileSize: a,
        },
        preloadContents: [],
        extra: {},
        getinforaw: n.raw,
      };
    }),
    t
  );
})(r.default);
exports.default = p;
