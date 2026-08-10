var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0),
  require("../../@babel/runtime/helpers/Arrayincludes");
var t,
  o = require("../../@babel/runtime/helpers/typeof"),
  i = require("../../behaviors/logger"),
  r = require("../../enums"),
  n = e(require("../../libs/event-proxy")),
  s = require("../../modules/ad/index"),
  a = require("../../modules/dataset/enum"),
  d = e(require("../../modules/dataset/index")),
  l = e(require("../../modules/error/index")),
  u = require("../../modules/getinfo/index"),
  c = require("../../modules/performance/enum"),
  p = e(require("../../modules/performance/index")),
  f = e(require("../../modules/reporters/live-flow-reporter")),
  h = e(require("../../modules/reporters/vod-fly-reporter")),
  v = e(require("../../modules/reporters/vod-flow-reporter")),
  y = require("../../modules/utils/index"),
  E = require("../../modules/video-info/index"),
  g = require("./behaviors/live"),
  N = require("./hook"),
  V = e(require("../../index")),
  m =
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
      function i() {
        this.constructor = e;
      }
      t(e, o),
        (e.prototype =
          null === o
            ? Object.create(o)
            : ((i.prototype = o.prototype), new i()));
    }),
  A = function () {
    return (A =
      Object.assign ||
      function (e) {
        for (var t, o = 1, i = arguments.length; o < i; o++)
          for (var r in (t = arguments[o]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  },
  S = function (e, t, i, r) {
    var n,
      s = arguments.length,
      a =
        s < 3
          ? t
          : null === r
          ? (r = Object.getOwnPropertyDescriptor(t, i))
          : r;
    if (
      "object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) &&
      "function" == typeof Reflect.decorate
    )
      a = Reflect.decorate(e, t, i, r);
    else
      for (var d = e.length - 1; d >= 0; d--)
        (n = e[d]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, i, a) : n(t, i)) || a);
    return s > 3 && a && Object.defineProperty(t, i, a), a;
  },
  P = function (e, t, o, i) {
    return new (o || (o = Promise))(function (r, n) {
      function s(e) {
        try {
          d(i.next(e));
        } catch (e) {
          n(e);
        }
      }
      function a(e) {
        try {
          d(i.throw(e));
        } catch (e) {
          n(e);
        }
      }
      function d(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof o
              ? t
              : new o(function (e) {
                  e(t);
                })).then(s, a);
      }
      d((i = i.apply(e, t || [])).next());
    });
  },
  C = function (e, t) {
    var o,
      i,
      r,
      n,
      s = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (n = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
      n
    );
    function a(a) {
      return function (d) {
        return (function (a) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; n && ((n = 0), a[0] && (s = 0)), s; )
            try {
              if (
                ((o = 1),
                i &&
                  (r =
                    2 & a[0]
                      ? i.return
                      : a[0]
                      ? i.throw || ((r = i.return) && r.call(i), 0)
                      : i.next) &&
                  !(r = r.call(i, a[1])).done)
              )
                return r;
              switch (((i = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                case 0:
                case 1:
                  r = a;
                  break;
                case 4:
                  return s.label++, { value: a[1], done: !1 };
                case 5:
                  s.label++, (i = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((r = s.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < r[1]) {
                    (s.label = r[1]), (r = a);
                    break;
                  }
                  if (r && s.label < r[2]) {
                    (s.label = r[2]), s.ops.push(a);
                    break;
                  }
                  r[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              (a = [6, e]), (i = 0);
            } finally {
              o = r = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, d]);
      };
    }
  },
  b = (0, i.logFactory)("player"),
  O = {
    platform: "4210801",
    sdtfrom: "v4169",
    cookies: {},
    maxRetryCount: 3,
    drm: !1,
    adConfig: { chid: 41, live: 0, pu: 1, scene: 0 },
  },
  I = (function (e) {
    function t(t, o) {
      var i,
        a,
        d,
        l = this,
        f = Date.now();
      ((l = e.call(this) || this).innerMode = r.PlayMode.VOD),
        (l.reporters = {}),
        (l.vnList = []),
        (l.currentVideoNodeIdx = -1),
        (l.playConfigList = []),
        (l.currentPlayConfigIdx = -1),
        (l.videoNodeEventMap = {}),
        (l.isSeeking = !1),
        (l.isFullscreen = !1),
        (l.isSettingLevel = !1),
        (l.retryCount = 0),
        (l.isVideoPlayed = !1),
        (l.isAdPlayed = !1),
        (l.isUserStop = !1),
        (l.isUserToggleFullscreen = !1),
        (l.behaviors = []),
        (l.innerPlaybackRate = 1),
        (l.isResetPlaybackRate = !1),
        (l.hasDestroyed = !1),
        (l.defaultDefinition = wx.getStorageSync("definition")),
        (l.ref = t),
        (l.innerConfig = A(A({}, O), o || {}));
      var h = wx.getStorageSync("drm");
      if (h) {
        var v = h.clientVer,
          E = h.isSupportDrm,
          g = void 0 === E || E;
        V.default.getSystemInfo().clientVer !== v &&
          (wx.removeStorageSync("drm"), (g = !0)),
          (d = l.innerConfig).drm && (d.drm = g);
      }
      return (
        y.IS_OHOS && (l.innerConfig.drm = !1),
        (l.hook = new N.Hook()),
        (l.videoNodeEventMap =
          (((i = {})[r.VideoNodeEvents.DURATION_CHANGE] =
            l.onVideoNodeDurationChange.bind(l)),
          (i[r.VideoNodeEvents.ERROR] = l.onVideoNodeError.bind(l)),
          (i[r.VideoNodeEvents.FULLSCREEN_CHANGE] =
            l.onVideoNodeFullscreenChange.bind(l)),
          (i[r.VideoNodeEvents.LOAD_PROGRESS] =
            l.onVideoNodeLoadProgress.bind(l)),
          (i[r.VideoNodeEvents.METADATA_CHANGE] =
            l.onVideoNodeMetadataChange.bind(l)),
          (i[r.VideoNodeEvents.RATE_CHANGE] = l.onVideoNodeRateChange.bind(l)),
          (i[r.VideoNodeEvents.RETRY] = l.onVideoNodeRetry.bind(l)),
          (i[r.VideoNodeEvents.SETLEVEL_END] =
            l.onVideoNodeSetLevelEnd.bind(l)),
          (i[r.VideoNodeEvents.SETLEVEL_START] =
            l.onVideoNodeSetLevelStart.bind(l)),
          (i[r.VideoNodeEvents.STATE_CHANGE] =
            l.onVideoNodeStateChange.bind(l)),
          (i[r.VideoNodeEvents.TIMEUPDATE] = l.onVideoNodeTimeupdate.bind(l)),
          (i[r.VideoNodeEvents.FIRST_PLAYING] =
            l.onVideoNodeFirstPlaying.bind(l)),
          (i[r.VideoNodeEvents.TAP] = l.onVideoNodeTap.bind(l)),
          (i[r.VideoNodeEvents.LONG_PRESS] = l.onVideoNodeLongPress.bind(l)),
          (i[r.VideoNodeEvents.TOUCH_END] = l.onVideoNodeTouchEnd.bind(l)),
          (i[r.VideoNodeEvents.SET_SRC] = l.onVideoNodeSetSrc.bind(l)),
          (i[r.VideoNodeEvents.BACKGROUND_PLAYBACK] =
            l.onVideoNodeBackgroundPlayback.bind(l)),
          i)),
        (null == o ? void 0 : o.hooks) &&
          Object.keys(o.hooks).forEach(function (e) {
            return l.hook.registerHook(e, o.hooks[e]);
          }),
        (l.internalMsg = new n.default()),
        l.initDataSet(),
        l.internalMsg.on(r.EventsExt.REPORT, l.onReport.bind(l)),
        (l.adPlugin = new s.Ad(l, l.innerConfig.adConfig)),
        (l.getInfoPlugin = new u.GetInfoAdapter(l)),
        (l.performance = new p.default()),
        l.performance.collectReportTime(
          (((a = {})[c.PERFORMANCE_KEY.initStart] = f),
          (a[c.PERFORMANCE_KEY.initEnd] = Date.now()),
          a)
        ),
        l
      );
    }
    return (
      m(t, e),
      Object.defineProperty(t.prototype, "mode", {
        get: function () {
          return this.innerMode;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "playlist", {
        get: function () {
          return this.playConfigList || [];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "definitions", {
        get: function () {
          var e;
          return null === (e = this.currentPlayConfig) || void 0 === e
            ? void 0
            : e.definitionList;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "currentDefinition", {
        get: function () {
          var e;
          return null === (e = this.definitions) || void 0 === e
            ? void 0
            : e.find(function (e) {
                return e.selected;
              });
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "currentPlayConfig", {
        get: function () {
          return this.playConfigList[this.currentPlayConfigIdx];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "currentVideoInfo", {
        get: function () {
          var e;
          return (
            (null === (e = this.currentPlayConfig) || void 0 === e
              ? void 0
              : e.videoInfo) || null
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "currentVideoNode", {
        get: function () {
          return this.vnList[this.currentVideoNodeIdx];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "currentUiControls", {
        get: function () {
          return this.ref.selectComponent(
            "#ui-".concat(this.currentVideoNodeIdx)
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "playtime", {
        get: function () {
          var e;
          return (
            (null === (e = this.currentVideoInfo) || void 0 === e
              ? void 0
              : e.playtime) || 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "duration", {
        get: function () {
          var e;
          return (
            (null === (e = this.currentVideoInfo) || void 0 === e
              ? void 0
              : e.duration) || 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "fullScreen", {
        get: function () {
          return this.isFullscreen;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "state", {
        get: function () {
          var e;
          return (
            (null === (e = this.currentVideoNode) || void 0 === e
              ? void 0
              : e.state) || r.VideoState.IDLE
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "playbackRate", {
        get: function () {
          var e;
          return (
            (null === (e = this.currentVideoNode) || void 0 === e
              ? void 0
              : e.playbackRate) || 1
          );
        },
        set: function (e) {
          (this.innerPlaybackRate = e),
            this.vnList.forEach(function (t) {
              return (t.playbackRate = e);
            });
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "isAd", {
        get: function () {
          var e;
          return (
            (null === (e = this.currentPlayConfig) || void 0 === e
              ? void 0
              : e.isAd) || !1
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "played", {
        get: function () {
          return this.isAdPlayed || this.isVideoPlayed;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "adControl", {
        get: function () {
          return this.adPlugin.adControl;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "currentVideo", {
        get: function () {
          var e;
          return null === (e = this.currentVideoNode) || void 0 === e
            ? void 0
            : e.getVideo();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.skipAd = function () {
        var e,
          t = this.adControl.skippable,
          o = this.dataset.stats.adPlayDuration;
        -1 !== t &&
          o / 1e3 >= t &&
          (this.internalMsg.emit(r.EventsExt.AD_SKIP),
          null === (e = this.currentVideoNode) || void 0 === e || e.stop());
      }),
      (t.prototype.init = function () {
        for (
          var e = y.IS_WX ? this.ref.data.maxVideoNode : 1, t = [], o = 0;
          o < e;
          o++
        )
          t.push(this.ref.selectComponent("#vn-".concat(o)));
        this.vnList = t;
      }),
      (t.prototype.destroy = function () {
        var e = this;
        (this.hasDestroyed = !0),
          this.stop(),
          this.internalMsg.removeAllListeners(),
          this.removeAllListeners(),
          Object.keys(this.reporters).forEach(function (t) {
            e.reporters[t].destroy();
          }),
          (this.reporters = {}),
          this.hook.destroy();
      }),
      (t.prototype.hookBefore = function (e, t) {
        this.hook.registerHook(e, { before: Array.isArray(t) ? t : [t] });
      }),
      (t.prototype.hookAfter = function (e, t) {
        this.hook.registerHook(e, { after: Array.isArray(t) ? t : [t] });
      }),
      (t.prototype.load = function (e, t) {
        return P(this, void 0, void 0, function () {
          return C(this, function (o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  this.playOrLoad(e, {
                    startTime: (null == t ? void 0 : t.startTime) || 0,
                    autoplay: !1,
                  }),
                ];
              case 1:
                return o.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.play = function (e, t) {
        return P(this, void 0, void 0, function () {
          return C(this, function (o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  this.playOrLoad(e, {
                    startTime: (null == t ? void 0 : t.startTime) || 0,
                    autoplay: !0,
                  }),
                ];
              case 1:
                return o.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.replay = function () {
        var e = this.dataset.getCommonKv(a.COMMON_DATA_KEY.vid);
        e && this.play(e);
      }),
      (t.prototype.pause = function () {
        var e;
        null === (e = this.currentVideoNode) || void 0 === e || e.pause();
      }),
      (t.prototype.seek = function (e) {
        var t;
        if (this.isVideoPlayed && this.mode !== r.PlayMode.LIVE) {
          var o = Math.min(this.currentVideoInfo.duration, e);
          this.internalMsg.emit(r.EventsExt.PROGRESS_CHANGE, { seekTime: o }),
            null === (t = this.currentVideoNode) || void 0 === t || t.seek(o);
        }
      }),
      (t.prototype.stop = function (e) {
        void 0 === e && (e = !0),
          !this.played &&
            this.dataset.getCommonKv(a.COMMON_DATA_KEY.flowid) &&
            this.triggerEvent(r.Events.PLAY_SESSION_END, {
              isUserStop: e,
              code: r.ErrorCode.SUCCESS,
            }),
          (this.isUserStop = e),
          (this.playConfigList = []),
          this.vnList.forEach(function (e) {
            e.stop();
          }),
          this.cleanUp();
      }),
      (t.prototype.toggleFullscreen = function (e, t) {
        var o;
        void 0 === e && (e = !0),
          void 0 === t && (t = { isUserToggleFullscreen: !1 }),
          (this.ref.fullscreenChange = !0),
          (this.isUserToggleFullscreen = t.isUserToggleFullscreen),
          null === (o = this.currentVideoNode) ||
            void 0 === o ||
            o.toggleFullscreen(e);
      }),
      (t.prototype.requestBackgroundPlayback = function () {
        var e;
        null === (e = this.currentVideoNode) ||
          void 0 === e ||
          e.requestBackgroundPlayback();
      }),
      (t.prototype.requestSetLevelPanel = function () {
        var e;
        null === (e = this.currentUiControls) ||
          void 0 === e ||
          e.onDefinitionBtnTap();
      }),
      (t.prototype.requestPlaybackRatePanel = function () {
        var e;
        null === (e = this.currentUiControls) ||
          void 0 === e ||
          e.onPlaybackRateBtnTap();
      }),
      (t.prototype.setLevel = function (e) {
        var t;
        return P(this, void 0, void 0, function () {
          var o, i, n, s;
          return C(this, function (a) {
            switch (a.label) {
              case 0:
                if (
                  !this.currentPlayConfig ||
                  !this.currentVideoInfo ||
                  !this.currentVideoNode
                )
                  return [2];
                if (((o = this.currentPlayConfig), (i = o.vid), o.isAd))
                  return [2];
                (this.isSettingLevel = !0),
                  this.triggerEvent(r.Events.VIDEO_SETLEVEL_START, {
                    currentLevel:
                      (null === (t = this.currentDefinition) || void 0 === t
                        ? void 0
                        : t.name) || "",
                    level: e,
                  }),
                  (a.label = 1);
              case 1:
                return (
                  a.trys.push([1, 3, , 4]),
                  this.mode === r.PlayMode.LIVE &&
                    this.behaviors.forEach(function (e) {
                      return e.stop();
                    }),
                  [4, this.reqVideoInfo({ vid: i, defn: e }, !0)]
                );
              case 2:
                return (
                  (n = a.sent()),
                  (this.currentPlayConfig.definitionList = n.definitions),
                  this.currentVideoInfo.update({ urls: n.urls }),
                  this.currentVideoNode.setLevel(),
                  [3, 4]
                );
              case 3:
                throw (
                  ((s = a.sent()),
                  this.triggerEvent(r.Events.VIDEO_SETLEVEL_END, {
                    level: e,
                    code: s.code,
                  }),
                  (this.isSettingLevel = !1),
                  this.play(),
                  s)
                );
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.playOrLoad = function (e, t) {
        var o;
        return P(this, void 0, void 0, function () {
          var n,
            s,
            d,
            u,
            p,
            f,
            h,
            v,
            y,
            g,
            N,
            V,
            m,
            S,
            P,
            b,
            O,
            I,
            R,
            _,
            D,
            T,
            L,
            k = this;
          return C(this, function (C) {
            switch (C.label) {
              case 0:
                if (!e)
                  return (
                    null === (o = this.currentVideoNode) ||
                      void 0 === o ||
                      o.play(),
                    [2]
                  );
                if (
                  (this.performance.collectReportTime(
                    (((D = {})[c.PERFORMANCE_KEY.vidInto] = Date.now()), D)
                  ),
                  this.performance.setReportParam({
                    isPreload: this.ref.properties.isPreload,
                  }),
                  !(n = (function (e) {
                    if ("string" == typeof e)
                      return { playItem: e.trim(), mode: r.PlayMode.VOD };
                    var t = A({ previd: "", cnlid: "" }, e),
                      o = t.previd.trim(),
                      i = t.cnlid.trim();
                    if (o)
                      return { playItem: { previd: o }, mode: r.PlayMode.VOD };
                    if (i)
                      return {
                        playItem: A(A({}, e), { cnlid: i }),
                        mode: r.PlayMode.LIVE,
                      };
                    return null;
                  })(e)))
                )
                  throw l.default.pluginError(
                    r.ErrorCode.VID_ERROR,
                    r.ErrorMsg.VID_ERROR
                  );
                (s = n.playItem),
                  (d = n.mode),
                  (this.innerMode = d),
                  (u = !0),
                  (function (e, t, o) {
                    switch (o) {
                      case r.PlayMode.VOD:
                        return e === t;
                      case r.PlayMode.LIVE:
                        return (
                          "[object Object]" ===
                            Object.prototype.toString.call(e) &&
                          ["livepid", "cnlid"].every(function (o) {
                            return e[o] === t[o];
                          })
                        );
                    }
                  })(this.dataset.getCommonKv(a.COMMON_DATA_KEY.vid), s, d) ||
                    (u = this.ref.properties.autoplay),
                  this.ref.setData({
                    isAutoplay: (null == t ? void 0 : t.autoplay) && u,
                  }),
                  this.stop(),
                  this.initReporters(),
                  this.dataset.setCommonKv(a.COMMON_DATA_KEY.vid, s),
                  this.triggerEvent(r.Events.PLAY_SESSION_START, void 0),
                  this.performance.collectReportTime(
                    (((T = {})[c.PERFORMANCE_KEY.getVideoInfoStart] =
                      Date.now()),
                    T)
                  ),
                  (C.label = 1);
              case 1:
                return (
                  C.trys.push([1, 4, , 5]),
                  [
                    4,
                    Promise.all([
                      this.reqVideoInfo({
                        vid: s,
                        raw: this.ref.data.videoInfo,
                      }),
                      this.adPlugin.requestAd({
                        vid: s,
                        coverid: "",
                        guid: this.dataset.getCommonKv(a.COMMON_DATA_KEY.guid),
                        platform: this.innerConfig.platform,
                        mode: this.innerMode,
                      }),
                    ]),
                  ]
                );
              case 2:
                return (
                  (p = C.sent()),
                  (f = p[0]),
                  (h = p[1]),
                  this.performance.collectReportTime(
                    A(
                      (((L = {})[c.PERFORMANCE_KEY.getVideoInfoEnd] =
                        Date.now()),
                      L),
                      f.timeParams || {}
                    )
                  ),
                  (v = f.duration),
                  (y = f.durationS),
                  (g = f.head),
                  (N = void 0 === g ? 0 : g),
                  (V = f.tail),
                  (m = void 0 === V ? 0 : V),
                  (S = this.innerMode === r.PlayMode.VOD ? f.vid : s),
                  h
                    .filter(function (e) {
                      return e.url;
                    })
                    .forEach(function (e) {
                      k.playConfigList.push({
                        videoInfo: new E.VideoInfo(
                          { urls: [e.url], duration: e.duration },
                          k.innerMode
                        ),
                        isAd: !0,
                        extra: e,
                        definitionList: [],
                        vid: S,
                      });
                    }),
                  (P =
                    (null == t ? void 0 : t.startTime) ||
                    this.ref.data.initialTime),
                  (b = this.ref.properties.skipIntro ? N : 0),
                  (O = P || b),
                  (I = this.ref.properties.skipOutro && y === v && m < v),
                  this.playConfigList.push({
                    videoInfo: new E.VideoInfo(
                      {
                        urls: f.urls,
                        width: f.width,
                        height: f.height,
                        duration: v,
                        durationS: y,
                        isPreview: f.isPreview,
                        isDrm: f.drm,
                        drmCertificate: f.certificate,
                        drmLicense: f.license,
                      },
                      this.innerMode
                    ),
                    vid: S,
                    definitionList: f.definitions,
                    watermarkList: f.watermarks,
                    extra: f,
                    isAd: !1,
                    initStartTimeS: v > O ? O : 0,
                    skipOutroTimeS: I ? v - m : 0,
                  }),
                  (this.currentPlayConfigIdx = 0),
                  [4, this.playInner()]
                );
              case 3:
                return C.sent(), [3, 5];
              case 4:
                return (
                  (R = C.sent()),
                  l.default.is(
                    R.code,
                    l.default.pluginError(r.ErrorCode.REQUEST_ABORT).code
                  )
                    ? ((0, i.log)("getvinfo request aborted"), [2])
                    : ((_ = R.code
                        ? R
                        : l.default.pluginError(
                            r.ErrorCode.UNKNOWN,
                            r.ErrorMsg.DEFAULT
                          )),
                      this.triggerEvent(r.Events.PLAY_SESSION_END, {
                        code: _.code,
                        message: R.message,
                        isUserStop: !1,
                      }),
                      [3, 5])
                );
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.cleanUp = function () {
        var e = this;
        (this.isUserStop = !1),
          (this.isVideoPlayed = !1),
          (this.isAdPlayed = !1),
          (this.retryCount = 0),
          (this.currentPlayConfigIdx = -1),
          (this.playConfigList = []),
          (this.isSettingLevel = !1),
          this.vnList.forEach(function (t) {
            t !== e.currentVideoNode && e.setVideoNodeEvents(t, !1);
          }),
          this.dataset.setCommonKv(a.COMMON_DATA_KEY.flowid, null),
          this.behaviors.forEach(function (e) {
            return e.stop();
          }),
          (this.behaviors = []);
      }),
      (t.prototype.initDataSet = function () {
        var e;
        (this.dataset = new d.default(this)),
          this.dataset.setCommonKv(
            A(
              A({}, this.innerConfig.envConfig || {}),
              (((e = {})[a.COMMON_DATA_KEY.platform] =
                this.innerConfig.platform),
              (e[a.COMMON_DATA_KEY.sdtfrom] = this.innerConfig.sdtfrom),
              (e[a.COMMON_DATA_KEY.playertype] = 1),
              e)
            )
          );
      }),
      (t.prototype.initReporters = function () {
        var e,
          t,
          o,
          i,
          n,
          s,
          a = this.innerMode,
          d = this.reporters;
        Object.keys(d).forEach(function (e) {
          d[e].destroy();
        }),
          a === r.PlayMode.VOD
            ? (this.reporters =
                (((e = {})[v.default.pluginName] = new v.default(
                  this,
                  null ===
                    (i =
                      null === (o = this.innerConfig) || void 0 === o
                        ? void 0
                        : o.reporterConfig) || void 0 === i
                    ? void 0
                    : i[v.default.pluginName]
                )),
                (e[h.default.pluginName] = new h.default(
                  this,
                  null ===
                    (s =
                      null === (n = this.innerConfig) || void 0 === n
                        ? void 0
                        : n.reporterConfig) || void 0 === s
                    ? void 0
                    : s[h.default.pluginName],
                  {
                    supportHEVC: this.innerConfig.supportHEVC || 0,
                    defn: this.ref.properties.defn,
                  }
                )),
                e))
            : (this.reporters =
                (((t = {})[f.default.pluginName] = new f.default(this)), t));
      }),
      (t.prototype.triggerEvent = function (e, t) {
        try {
          [
            r.Events.VIDEO_TIMEUPDATE,
            r.Events.VIDEO_LOAD_PROGRESS,
            r.Events.AD_TIMEUPDATE,
          ].includes(e) || b("event emitted from player", e, t),
            this.emit(e, t),
            this.ref.triggerEvent(e, t);
        } catch (e) {
          console.warn("ee error", e);
        }
      }),
      (t.prototype.setVideoNodeEvents = function (e, t) {
        var o = this;
        void 0 === t && (t = !1);
        var i = t ? e.on : e.off;
        Object.keys(this.videoNodeEventMap).forEach(function (t) {
          i.apply(e, [t, o.videoNodeEventMap[t]]);
        });
      }),
      (t.prototype.setActiveVideoNode = function (e) {
        if (!(e < 0) && this.currentVideoNodeIdx !== e) {
          this.currentVideoNode &&
            (this.setVideoNodeEvents(this.currentVideoNode, !1),
            this.currentVideoNode.pause()),
            (this.currentVideoNodeIdx = e);
          var t = this.currentVideoNode;
          this.setVideoNodeEvents(t, !0),
            this.ref.setData({ activeVideoNode: e });
        }
      }),
      (t.prototype.preloadInner = function (e, t) {
        var o = this,
          i = this.findIdleVideoNode();
        i >= 0
          ? ((e.loader = this.vnList[i]),
            -1 === this.currentPlayConfigIdx &&
              (this.setActiveVideoNode(i), (this.currentPlayConfigIdx = 0)),
            e.loader.once(
              r.VideoNodeEvents.PRELOAD_START,
              function (e) {
                o.internalMsg.emit(r.VideoNodeEvents.PRELOAD_START, e);
              },
              this
            ),
            e.loader.once(
              r.VideoNodeEvents.PRELOAD_END,
              function (e) {
                o.internalMsg.emit(r.VideoNodeEvents.PRELOAD_END, e);
              },
              this
            ),
            e.loader.play(e, t))
          : b("no empty videoNode");
      }),
      (t.prototype.reqVideoInfo = function (e, t) {
        var o, i, n;
        return (
          void 0 === t && (t = !1),
          P(this, void 0, void 0, function () {
            var s,
              d,
              u,
              c,
              p,
              f,
              h,
              v,
              y,
              E,
              N,
              V,
              m,
              S,
              P,
              b,
              O,
              I,
              R,
              _,
              D = this;
            return C(this, function (C) {
              switch (C.label) {
                case 0:
                  if (this.dataset.getCommonKv(a.COMMON_DATA_KEY.vid) !== e.vid)
                    throw l.default.pluginError(r.ErrorCode.REQUEST_ABORT);
                  t || this.triggerEvent(r.Events.VIDEO_REQ_INFO_START, void 0),
                    (s = this.dataset.logEvent(a.DataState.GET_INFO_START, {
                      type: r.LogType.PLUGIN_ACTION,
                    })),
                    (d = null),
                    (u = null),
                    (C.label = 1);
                case 1:
                  return (
                    C.trys.push([1, 3, 4, 5]),
                    (c = this.innerConfig),
                    (p = c.platform),
                    (f = c.sdtfrom),
                    (h = c.show1080p),
                    (v = c.defn),
                    (y = c.drm),
                    (E = c.debugConfig),
                    (N = c.supportHEVC),
                    (V = c.supportedPaidFormat),
                    (m = c.cgi),
                    (S = c.requestHeaders),
                    (P = c.requestParams),
                    (b = this.dataset.getCommonKv(a.COMMON_DATA_KEY.flowid)),
                    [
                      4,
                      this.getInfoPlugin.request(
                        A(
                          {
                            fhdswitch: t ? 1 : 0,
                            platform: p,
                            sdtfrom: f,
                            show1080p: h,
                            defn: v || this.defaultDefinition || "auto",
                            drm: y,
                            supportHEVC: N,
                            env: (null == E ? void 0 : E.testEnv)
                              ? "test"
                              : "production",
                            guid: this.dataset.getCommonKv(
                              a.COMMON_DATA_KEY.guid
                            ),
                            supportedPaidFormat: V,
                            flowid: b,
                            cgi: m,
                            requestHeaders: S,
                            requestParams: P,
                          },
                          e
                        )
                      ),
                    ]
                  );
                case 2:
                  return (
                    (u = C.sent()),
                    this.mode === r.PlayMode.LIVE &&
                      (this.behaviors.forEach(function (e) {
                        return e.stop();
                      }),
                      (this.behaviors = []),
                      this.behaviors.push(
                        (0, g.registerLiveBehavior)(
                          { livepid: e.vid.livepid, preview: u.preview },
                          {
                            onLivePreviewEnded: function () {
                              var e;
                              null === (e = D.currentVideoNode) ||
                                void 0 === e ||
                                e.stop(!1);
                            },
                          }
                        )
                      )),
                    (u.urls = u.urls.map(function (e) {
                      return ""
                        .concat(e)
                        .concat(e.includes("?") ? "&" : "?", "retryCount=")
                        .concat(D.retryCount);
                    })),
                    (O = u.vid),
                    (I = void 0 === O ? "" : O) &&
                      (this.dataset.setCommonKv(a.COMMON_DATA_KEY.vid, I),
                      (this.ref.currentVid = I)),
                    [2, u]
                  );
                case 3:
                  throw (
                    ((R = C.sent()),
                    console.warn("request video info error encountered", R),
                    (d = R.code
                      ? R
                      : l.default.pluginError(r.ErrorCode.UNKNOWN, R.errMsg)))
                  );
                case 4:
                  return (
                    this.hasDestroyed ||
                      ((_ = d ? d.code : r.ErrorCode.SUCCESS),
                      this.dataset.logEvent(a.DataState.GET_INFO_END, {
                        type: r.LogType.PLUGIN_ACTION,
                        eventId: s,
                        code: _,
                        ext: {
                          path:
                            null !==
                              (i =
                                null === (o = null == u ? void 0 : u.req) ||
                                void 0 === o
                                  ? void 0
                                  : o.path) && void 0 !== i
                              ? i
                              : null === (n = d.data) || void 0 === n
                              ? void 0
                              : n.path,
                        },
                      }),
                      this.dataset.setCommonKv(
                        a.COMMON_DATA_KEY.actualid,
                        null == u ? void 0 : u.id
                      ),
                      t ||
                        this.triggerEvent(r.Events.VIDEO_REQ_INFO_END, {
                          code: _,
                        })),
                    [7]
                  );
                case 5:
                  return [2];
              }
            });
          })
        );
      }),
      (t.prototype.prepareVideoInfo = function (e) {
        return P(this, void 0, void 0, function () {
          var t;
          return C(this, function (o) {
            switch (o.label) {
              case 0:
                return !e.vid || e.isAd
                  ? [2]
                  : e.videoInfo
                  ? [3, 2]
                  : [
                      4,
                      this.reqVideoInfo({
                        vid: e.vid,
                        raw: this.ref.data.videoInfo,
                      }),
                    ];
              case 1:
                (t = o.sent()),
                  (e.videoInfo = new E.VideoInfo(
                    { urls: t.urls, duration: t.duration },
                    this.innerMode
                  )),
                  (e.definitionList = t.definitions),
                  (e.extra = t),
                  (o.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.preloadNext = function () {
        return P(this, void 0, void 0, function () {
          var e;
          return C(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = this.playConfigList[this.currentPlayConfigIdx + 1])
                  ? e.videoInfo
                    ? [3, 2]
                    : [4, this.prepareVideoInfo(e)]
                  : [3, 3];
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                this.preloadInner(e.videoInfo, {
                  startTimeS: e.initStartTimeS,
                  skipOutroTimeS: e.skipOutroTimeS,
                }),
                  (t.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.playInner = function () {
        var e, t;
        return P(this, void 0, void 0, function () {
          var o, i, n, s;
          return C(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  this.performance.collectReportTime(
                    (((n = {})[c.PERFORMANCE_KEY.playInnerStart] = Date.now()),
                    n)
                  ),
                  this.currentPlayConfig
                    ? (o = this.currentVideoInfo)
                      ? [3, 2]
                      : [4, this.prepareVideoInfo(this.currentPlayConfig)]
                    : [2]
                );
              case 1:
                if ((a.sent(), !this.currentVideoInfo)) return [2];
                (o = this.currentVideoInfo), (a.label = 2);
              case 2:
                return [
                  4,
                  null === (e = this.ref.ready) || void 0 === e
                    ? void 0
                    : e.promise,
                ];
              case 3:
                return (
                  a.sent(),
                  (i = this.isFullscreen
                    ? this.currentVideoNodeIdx
                    : this.findVideoNodeIndex(o.loader)) < 0 &&
                    this.currentVideoNode &&
                    this.currentVideoNode.state === r.VideoState.IDLE &&
                    (i = this.currentVideoNodeIdx),
                  i < 0 && (i = this.findIdleVideoNode()),
                  i >= 0 &&
                    (this.isFullscreen &&
                      (null === (t = o.loader) || void 0 === t || t.stop(),
                      o.reset()),
                    this.setActiveVideoNode(i),
                    this.ref.setData({ isAd: this.currentPlayConfig.isAd }),
                    this.triggerEvent(r.Events.CONTENT_CHANGE, {
                      isAd: this.currentPlayConfig.isAd,
                    }),
                    this.isAd ||
                      this.triggerEvent(r.Events.VIDEO_DURATION_CHANGE, {
                        duration: o.duration,
                        durationS: o.durationS,
                      }),
                    o.preloaded &&
                      !this.isAd &&
                      this.triggerEvent(r.Events.VIDEO_CANPLAY, void 0),
                    this.isAd
                      ? 1 !== this.currentVideoNode.playbackRate &&
                        ((this.currentVideoNode.playbackRate = 1),
                        (this.isResetPlaybackRate = !0))
                      : this.currentVideoNode.playbackRate !==
                          this.innerPlaybackRate &&
                        ((this.currentVideoNode.playbackRate =
                          this.innerPlaybackRate),
                        (this.isResetPlaybackRate = !0)),
                    this.performance.collectReportTime(
                      (((s = {})[c.PERFORMANCE_KEY.playInnerEnd] = Date.now()),
                      s)
                    ),
                    this.currentVideoNode.play(o, {
                      startTimeS: this.currentPlayConfig.initStartTimeS,
                      skipOutroTimeS: this.currentPlayConfig.skipOutroTimeS,
                    })),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype.findIdleVideoNode = function () {
        var e = this;
        return this.vnList.findIndex(function (t) {
          return t.state === r.VideoState.IDLE && t !== e.currentVideoNode;
        });
      }),
      (t.prototype.findVideoNodeIndex = function (e) {
        return this.vnList.findIndex(function (t) {
          return t === e;
        });
      }),
      (t.prototype.playNext = function () {
        return (
          this.currentPlayConfigIdx + 1 < this.playConfigList.length &&
          ((this.currentPlayConfigIdx += 1), this.playInner(), !0)
        );
      }),
      (t.prototype.onReport = function (e) {
        this.ref.setData({ envReportUrl: e.reportUrl });
      }),
      (t.prototype.onVideoNodeDurationChange = function () {}),
      (t.prototype.onVideoNodeError = function (e) {
        var t,
          o,
          i,
          n = this;
        if (this.currentPlayConfig) {
          if ((this.internalMsg.emit(r.VideoNodeEvents.ERROR, e), this.isAd))
            return (
              this.performance.setReportParam(
                (((t = {})[c.PERFORMANCE_KEY.isAdPlayError] = !0), t)
              ),
              void this.playNext()
            );
          if (this.retryCount < this.innerConfig.maxRetryCount) {
            this.performance.setReportParam(
              (((o = {})[c.PERFORMANCE_KEY.hasVideoNodeRetry] = !0),
              (o[c.PERFORMANCE_KEY.hasVideoRequestRetry] = !0),
              o)
            ),
              (this.retryCount += 1);
            var s =
                (null === (i = null == e ? void 0 : e.videoInfo) || void 0 === i
                  ? void 0
                  : i.error) || {},
              a = s.code,
              d = void 0 === a ? "" : a,
              u = s.isSupportDrm,
              p = void 0 === u || u;
            d !== r.ErrorCode.MEDIA_ERR_DRM ||
              p ||
              ((this.innerConfig.drm = p),
              wx.setStorageSync("drm", {
                isSupportDrm: p,
                clientVer: V.default.getSystemInfo().clientVer,
              })),
              this.reqVideoInfo({ vid: this.currentPlayConfig.vid }, !0).then(
                function (e) {
                  n.currentPlayConfig &&
                    n.currentVideoInfo &&
                    n.currentVideoNode &&
                    ((n.currentPlayConfig.definitionList = e.definitions),
                    n.currentVideoInfo.update({
                      urls: e.urls,
                      isDrm: e.drm,
                      drmCertificate: e.certificate,
                      drmLicense: e.license,
                    }),
                    n.currentVideoNode.play(n.currentVideoInfo, {
                      startTimeS: n.playtime,
                    }));
                },
                function (e) {
                  var t = e.code
                    ? e
                    : l.default.pluginError(r.ErrorCode.UNKNOWN, e.message);
                  n.triggerEvent(r.Events.PLAY_SESSION_END, {
                    code: t.code,
                    message: e.message,
                    isUserStop: !1,
                  });
                }
              );
          } else {
            var f = e.videoInfo.error,
              h = ((d = f.code), f.errMsg),
              v = l.default.coreError(d, h);
            this.triggerEvent(r.Events.PLAY_SESSION_END, {
              isUserStop: !1,
              code: v.code,
              message: v.message,
            }),
              this.cleanUp();
          }
        }
      }),
      (t.prototype.onVideoNodeFullscreenChange = function (e) {
        (this.isFullscreen = e.isFullscreen),
          this.internalMsg.emit(
            r.VideoNodeEvents.FULLSCREEN_CHANGE,
            A(A({}, e), { isUserToggleFullscreen: this.isUserToggleFullscreen })
          ),
          (this.isUserToggleFullscreen = !1);
      }),
      (t.prototype.onVideoNodeLoadProgress = function (e) {
        this.currentPlayConfig &&
          (this.internalMsg.emit(r.VideoNodeEvents.LOAD_PROGRESS, e),
          this.currentPlayConfig.isAd ||
            this.triggerEvent(r.Events.VIDEO_LOAD_PROGRESS, e));
      }),
      (t.prototype.onVideoNodeMetadataChange = function (e) {
        this.currentPlayConfig &&
          (this.internalMsg.emit(r.VideoNodeEvents.METADATA_CHANGE, e),
          this.currentPlayConfig.isAd ||
            (this.setDefaultDefinition(),
            this.triggerEvent(r.Events.VIDEO_METADATA_CHANGE, {
              width: 0,
              height: 0,
            })));
      }),
      (t.prototype.onVideoNodeRateChange = function (e) {
        this.currentPlayConfig &&
          (this.isResetPlaybackRate
            ? (this.isResetPlaybackRate = !1)
            : (this.internalMsg.emit(r.VideoNodeEvents.RATE_CHANGE, e),
              this.currentPlayConfig.isAd ||
                this.triggerEvent(r.Events.VIDEO_RATE_CHANGE, e)));
      }),
      (t.prototype.onVideoNodeTap = function () {
        this.internalMsg.emit(r.VideoNodeEvents.TAP);
      }),
      (t.prototype.onVideoNodeSetSrc = function () {
        var e;
        this.performance.collectReportTime(
          (((e = {})[c.PERFORMANCE_KEY.setSrc] = Date.now()), e)
        );
      }),
      (t.prototype.onVideoNodeBackgroundPlayback = function (e) {
        this.triggerEvent(r.Events.VIDEO_BACKGROUND_PLAYBACK, e);
      }),
      (t.prototype.onVideoNodeLongPress = function () {
        this.state === r.VideoState.PLAYING &&
          this.internalMsg.emit(r.VideoNodeEvents.LONG_PRESS);
      }),
      (t.prototype.onVideoNodeTouchEnd = function () {
        this.state === r.VideoState.PLAYING &&
          this.internalMsg.emit(r.VideoNodeEvents.TOUCH_END);
      }),
      (t.prototype.onVideoNodeRetry = function (e) {
        var t, o;
        this.performance.setReportParam(
          (((t = {})[c.PERFORMANCE_KEY.hasVideoNodeRetry] = !0),
          (t.retryReason = e.error),
          t)
        ),
          this.isAd &&
            this.performance.setReportParam(
              (((o = {})[c.PERFORMANCE_KEY.isAdPlayError] = !0), o)
            ),
          this.internalMsg.emit(r.VideoNodeEvents.RETRY, e);
      }),
      (t.prototype.onVideoNodeSetLevelEnd = function (e) {
        this.internalMsg.emit(r.VideoNodeEvents.SETLEVEL_END, e),
          (this.isSettingLevel = !1),
          this.triggerEvent(r.Events.VIDEO_SETLEVEL_END, {
            code: "0",
            level: this.currentDefinition.name,
          });
      }),
      (t.prototype.onVideoNodeFirstPlaying = function (e) {
        var t;
        this.performance.collectReportTime(
          (((t = {})[c.PERFORMANCE_KEY.playStart] = Date.now()), t)
        ),
          this.internalMsg.emit(r.EventsExt.QUALITY_REPORT),
          this.ref.setData({ isAutoplay: !0 }),
          this.internalMsg.emit(r.VideoNodeEvents.FIRST_PLAYING, e),
          this.preloadNext();
      }),
      (t.prototype.onVideoNodeSetLevelStart = function (e) {
        this.internalMsg.emit(r.VideoNodeEvents.SETLEVEL_START, e);
      }),
      (t.prototype.onVideoNodeStateChange = function (e) {
        (this.internalMsg.emit(r.VideoNodeEvents.STATE_CHANGE, e),
        this.isAd
          ? this.handleAdStateChange(e)
          : this.handleVideoStateChange(e),
        e.oldState === r.VideoState.END && e.newState === r.VideoState.IDLE) &&
          (this.playNext() ||
            (this.triggerEvent(r.Events.PLAY_SESSION_END, {
              isUserStop: this.isUserStop,
              code: r.ErrorCode.SUCCESS,
            }),
            this.cleanUp(),
            this.ref.data.loop && this.replay()));
      }),
      (t.prototype.handleAdStateChange = function (e) {
        var t,
          o,
          i = e.newState,
          n =
            (((t = {})[r.VideoState.PLAYING] = [
              r.Events.AD_PLAYING,
              { isFirst: !this.isAdPlayed },
              !0,
            ]),
            (t[r.VideoState.PAUSE] = [r.Events.AD_PAUSE, void 0, !0]),
            t);
        if (
          (i === r.VideoState.PLAYING && (this.isAdPlayed = !0),
          i === r.VideoState.LOAD_START &&
            0 === this.currentPlayConfigIdx &&
            this.triggerEvent(r.Events.AD_ASSETS_START, void 0),
          n[i])
        ) {
          var s = n[i],
            a = s[0],
            d = s[1];
          s[2] && this.triggerEvent(a, d);
        }
        i !== r.VideoState.END ||
          (null === (o = this.playConfigList[this.currentPlayConfigIdx + 1]) ||
          void 0 === o
            ? void 0
            : o.isAd) ||
          this.triggerEvent(r.Events.AD_END, { code: "0" });
      }),
      (t.prototype.handleVideoStateChange = function (e) {
        var t,
          o = e.newState,
          i =
            (((t = {})[r.VideoState.PLAYING] = [
              r.Events.VIDEO_PLAYING,
              { isFirst: !this.isVideoPlayed },
              !0,
            ]),
            (t[r.VideoState.PAUSE] = [
              r.Events.VIDEO_PAUSE,
              void 0,
              !this.isSettingLevel,
            ]),
            (t[r.VideoState.LOAD_START] = [
              r.Events.VIDEO_LOAD_START,
              void 0,
              !this.isSettingLevel,
            ]),
            (t[r.VideoState.END] = [r.Events.VIDEO_END, { code: "0" }, !0]),
            (t[r.VideoState.SEEKING] = [
              r.Events.VIDEO_SEEKING,
              void 0,
              !this.isSettingLevel,
            ]),
            (t[r.VideoState.SEEKED] = [
              r.Events.VIDEO_SEEKED,
              void 0,
              !this.isSettingLevel,
            ]),
            (t[r.VideoState.BUFFERING] = [
              r.Events.VIDEO_BUFFERING,
              void 0,
              !(this.isSettingLevel || this.isSeeking),
            ]),
            (t[r.VideoState.CANPLAY] = [r.Events.VIDEO_CANPLAY, void 0, !0]),
            t);
        if ((o === r.VideoState.PLAYING && (this.isVideoPlayed = !0), i[o])) {
          var n = i[o],
            s = n[0],
            a = n[1];
          n[2] && this.triggerEvent(s, a);
        }
      }),
      (t.prototype.onVideoNodeTimeupdate = function (e) {
        if (this.currentPlayConfig) {
          this.internalMsg.emit(r.VideoNodeEvents.TIMEUPDATE, e);
          var t = this.currentPlayConfig.isAd
            ? r.Events.AD_TIMEUPDATE
            : r.Events.VIDEO_TIMEUPDATE;
          this.triggerEvent(t, { time: e.videoInfo.playtime });
        }
      }),
      (t.prototype.setDefaultDefinition = function () {
        var e,
          t =
            null === (e = this.currentDefinition) || void 0 === e
              ? void 0
              : e.name;
        t &&
          t !== this.defaultDefinition &&
          ((this.defaultDefinition = t), wx.setStorageSync("definition", t));
      }),
      S([(0, i.log)("player", "invoke")], t.prototype, "skipAd", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "init", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "destroy", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "pause", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "seek", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "stop", null),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "toggleFullscreen",
        null
      ),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "requestBackgroundPlayback",
        null
      ),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "requestSetLevelPanel",
        null
      ),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "requestPlaybackRatePanel",
        null
      ),
      S(
        [(0, i.log)("player", "invoke"), (0, N.hookAsync)("setLevel")],
        t.prototype,
        "setLevel",
        null
      ),
      S(
        [(0, i.log)("player", "invoke"), (0, N.hookAsync)("play")],
        t.prototype,
        "playOrLoad",
        null
      ),
      S([(0, i.log)("player", "invoke")], t.prototype, "cleanUp", null),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "setVideoNodeEvents",
        null
      ),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "setActiveVideoNode",
        null
      ),
      S([(0, i.log)("player", "invoke")], t.prototype, "preloadInner", null),
      S([(0, N.hookAsync)("getinfo")], t.prototype, "reqVideoInfo", null),
      S(
        [(0, i.log)("player", "invoke")],
        t.prototype,
        "prepareVideoInfo",
        null
      ),
      S([(0, i.log)("player", "invoke")], t.prototype, "preloadNext", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "playInner", null),
      S([(0, i.log)("player", "invoke")], t.prototype, "playNext", null),
      S([(0, i.log)("player", "callback")], t.prototype, "onReport", null),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeDurationChange",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeError",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeFullscreenChange",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeLoadProgress",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeMetadataChange",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeRateChange",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeTap",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeSetSrc",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeBackgroundPlayback",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeLongPress",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeTouchEnd",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeRetry",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeSetLevelEnd",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeFirstPlaying",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeSetLevelStart",
        null
      ),
      S(
        [(0, i.log)("player", "callback")],
        t.prototype,
        "onVideoNodeStateChange",
        null
      ),
      t
    );
  })(n.default);
exports.default = I;
