var t = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = require("../../@babel/runtime/helpers/typeof"),
  i = t(require("../../index")),
  n = require("../../enums"),
  a = require("../utils/index"),
  o = require("./enum"),
  s = function () {
    return (s =
      Object.assign ||
      function (t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
          for (var a in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
        return t;
      }).apply(this, arguments);
  },
  r = (function () {
    function t(t) {
      (this.playTimer = null),
        (this.useTimer = null),
        (this.playTime = 0),
        (this.useTime = 0),
        (this.adPlayTime = 0),
        (this.played = !1),
        (this.isLoading = !1),
        (this.isBuffering = !1),
        (this.isSeeking = !1),
        (this.isSettingLevel = !1),
        (this.eventIdMap = {}),
        (this.eventDataMap = {}),
        (this.commonMap = {}),
        (this.player = t),
        this.setGuid(),
        this.bindEvents();
    }
    return (
      Object.defineProperty(t.prototype, "stats", {
        get: function () {
          var t,
            e,
            i = this.player,
            n = i.currentVideoInfo,
            a = i.playtime,
            o = i.playbackRate,
            s = i.playlist,
            r = 0,
            E = 0;
          return (
            s.forEach(function (t) {
              var e = t.videoInfo,
                i = t.isAd;
              e && (i ? (r += e.duration) : (E += e.duration));
            }),
            {
              adDuration: r,
              adPlayDuration: this.adPlayTime,
              duration: E,
              playDuration: this.playTime,
              useDuration: this.useTime,
              playbackRate: o,
              hasPlayed: this.played,
              playtime: a,
              urlIndex:
                null !==
                  (e =
                    null === (t = null == n ? void 0 : n.backupUrls) ||
                    void 0 === t
                      ? void 0
                      : t.findIndex(function (t) {
                          return t === (null == n ? void 0 : n.loadingUrl);
                        })) && void 0 !== e
                  ? e
                  : -1,
              currentUrl: null == n ? void 0 : n.loadingUrl,
            }
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "auth", {
        get: function () {
          var t = i.default.getCookie();
          return {
            vuid: t.vuserid || t.vqq_vuserid,
            appId: t.appid || t.vqq_appid,
            openId: t.openid || t.vqq_openid,
            accessToken: t.access_token || t.vqq_access_token,
            vusession: t.vusession || t.vqq_vusession,
            mainLogin: t.main_login,
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.destroy = function () {
        this.unbindEvents(), this.reset();
      }),
      (t.prototype.setCommonKv = function (t, i) {
        var a = this,
          o = function (t, e) {
            var i = a.commonMap[t];
            (a.commonMap[t] = e),
              a.player.internalMsg.emit(n.EventsExt.DATASET_UPDATE, {
                key: t,
                newVal: a.commonMap[t],
                oldVal: i,
              });
          };
        "object" !== e(t)
          ? o(t, i)
          : Object.keys(t).forEach(function (e) {
              return o(e, t[e]);
            });
      }),
      (t.prototype.getCommonKv = function (t) {
        var e = this;
        return Array.isArray(t)
          ? t.reduce(function (t, i) {
              var n;
              return s(s({}, t), (((n = {})[i] = e.commonMap[i]), n));
            }, {})
          : this.commonMap[t];
      }),
      (t.prototype.logEvent = function (t, e) {
        var i,
          r = this.eventDataMap[t];
        this.eventDataMap[t] = s(
          s(s({}, this.stats), {
            ftime: Date.now(),
            name: t,
            type: n.LogType.UNCATEGORIZED,
            eventId: (0, a.genId)(8),
            code: "0",
          }),
          e
        );
        var E =
            (((i = {})[o.DataState.BUFFER_END] = o.DataState.BUFFER_START),
            (i[o.DataState.LOAD_END] = o.DataState.LOAD_START),
            (i[o.DataState.SET_LEVEL_END] = o.DataState.SET_LEVEL_START),
            (i[o.DataState.GET_INFO_END] = o.DataState.GET_INFO_START),
            (i[o.DataState.PAUSE_END] = o.DataState.PAUSE_START),
            (i[o.DataState.SEEK_END] = o.DataState.SEEK_START),
            i),
          p = {
            newVal: this.eventDataMap[t],
            oldVal: r,
            startEvent: this.eventDataMap[E[t]],
            key: t,
          };
        return (
          this.player.internalMsg.emit(n.EventsExt.DATASET_STATE_UPDATE, p),
          this.eventDataMap[t].eventId
        );
      }),
      (t.prototype.setGuid = function () {
        var t = a.Cache.get(o.COMMON_DATA_KEY.guid);
        t || ((t = (0, a.genId)(32)), a.Cache.set(o.COMMON_DATA_KEY.guid, t)),
          this.setCommonKv(o.COMMON_DATA_KEY.guid, t);
      }),
      (t.prototype.bindEvents = function () {
        this.player.on(n.Events.PLAY_SESSION_START, this.onSessionStart, this),
          this.player.on(n.Events.PLAY_SESSION_END, this.onSessionEnd, this),
          this.player.internalMsg.on(
            n.VideoNodeEvents.FIRST_PLAYING,
            this.onFirstPlaying,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.ERROR,
            this.onError,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.RETRY,
            this.onRetry,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.TIMEUPDATE,
            this.onTimeupdate,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.STATE_CHANGE,
            this.onStateChange,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.SETLEVEL_START,
            this.onSetLevelStart,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.SETLEVEL_END,
            this.onSetLevelEnd,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.PRELOAD_START,
            this.onPreloadStart,
            this
          ),
          this.player.internalMsg.on(
            n.VideoNodeEvents.PRELOAD_END,
            this.onPreloadEnd,
            this
          );
      }),
      (t.prototype.unbindEvents = function () {
        this.player.off(n.Events.PLAY_SESSION_START, this.onSessionStart),
          this.player.off(n.Events.PLAY_SESSION_END, this.onSessionEnd),
          this.player.internalMsg.off(
            n.VideoNodeEvents.FIRST_PLAYING,
            this.onFirstPlaying
          ),
          this.player.internalMsg.off(n.VideoNodeEvents.ERROR, this.onError),
          this.player.internalMsg.off(n.VideoNodeEvents.RETRY, this.onRetry),
          this.player.internalMsg.off(
            n.VideoNodeEvents.TIMEUPDATE,
            this.onTimeupdate
          ),
          this.player.internalMsg.off(
            n.VideoNodeEvents.STATE_CHANGE,
            this.onStateChange
          ),
          this.player.internalMsg.off(
            n.VideoNodeEvents.SETLEVEL_START,
            this.onSetLevelStart
          ),
          this.player.internalMsg.off(
            n.VideoNodeEvents.SETLEVEL_END,
            this.onSetLevelEnd
          ),
          this.player.internalMsg.off(
            n.VideoNodeEvents.PRELOAD_START,
            this.onPreloadStart
          ),
          this.player.internalMsg.off(
            n.VideoNodeEvents.PRELOAD_END,
            this.onPreloadEnd
          );
      }),
      (t.prototype.onStateChange = function (t) {
        var e,
          i = t.newState,
          a =
            (((e = {})[n.VideoState.CANPLAY] = this.onCanPlay),
            (e[n.VideoState.PAUSE] = this.onPause),
            (e[n.VideoState.PLAYING] = this.onPlaying),
            (e[n.VideoState.BUFFERING] = this.onBuffering),
            (e[n.VideoState.IDLE] = this.onIdle),
            (e[n.VideoState.END] = this.onEnd),
            (e[n.VideoState.SEEKING] = this.onSeeking),
            (e[n.VideoState.SEEKED] = this.onSeeked),
            (e[n.VideoState.LOAD_START] = this.onLoadStart),
            e);
        a[i] && a[i].call(this, t);
      }),
      (t.prototype.onSessionStart = function () {
        this.startUseTimer(),
          this.setCommonKv(
            o.COMMON_DATA_KEY.flowid,
            ""
              .concat((0, a.genId)(32), "_")
              .concat(this.getCommonKv(o.COMMON_DATA_KEY.platform) || "00000")
          ),
          this.logEvent(o.DataState.SESSION_START, {
            type: n.LogType.CORE_EVENT,
          });
      }),
      (t.prototype.onSessionEnd = function (t) {
        this.logEvent(o.DataState.SESSION_END, {
          type: n.LogType.CORE_EVENT,
          code: t.code,
          ext: { isUserStop: t.isUserStop },
          message: t.message,
        }),
          this.reset();
      }),
      (t.prototype.onError = function (t) {
        var e = t.videoInfo.error,
          i = Date.now();
        this.terminateWaitingEvents(i, e);
      }),
      (t.prototype.onRetry = function (t) {
        var e = t.error,
          i = t.prevUrl,
          a = t.currentUrl,
          s = Date.now();
        this.terminateWaitingEvents(s, e),
          this.logEvent(o.DataState.RETRY_BACKURL, {
            ftime: s,
            type: n.LogType.CORE_EVENT,
            ext: { prevUrl: i, currentUrl: a },
          });
      }),
      (t.prototype.onTimeupdate = function () {}),
      (t.prototype.onFirstPlaying = function () {
        (this.played = !0),
          this.logEvent(o.DataState.FIRST_PLAY, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
          });
      }),
      (t.prototype.onSetLevelStart = function () {
        var t;
        this.isSettingLevel = !0;
        var e = (0, a.genId)(8);
        (this.eventIdMap[o.DataState.SET_LEVEL_START] = e),
          this.logEvent(o.DataState.SET_LEVEL_START, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: e,
            ext: {
              currentDefn:
                null === (t = this.player.currentDefinition) || void 0 === t
                  ? void 0
                  : t.resolution,
            },
          });
      }),
      (t.prototype.onSetLevelEnd = function () {
        var t;
        this.isSettingLevel &&
          ((this.isSettingLevel = !1),
          this.logEvent(o.DataState.SET_LEVEL_END, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: this.eventIdMap[o.DataState.SET_LEVEL_START],
            ext: {
              currentDefn:
                null === (t = this.player.currentDefinition) || void 0 === t
                  ? void 0
                  : t.resolution,
            },
          }));
      }),
      (t.prototype.onPreloadStart = function () {
        var t = (0, a.genId)(8);
        (this.eventIdMap[o.DataState.PRELOAD_START] = t),
          this.logEvent(o.DataState.PRELOAD_START, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: this.eventIdMap[o.DataState.PRELOAD_START],
          });
      }),
      (t.prototype.onPreloadEnd = function () {
        this.logEvent(o.DataState.PRELOAD_END, {
          ftime: Date.now(),
          type: n.LogType.CORE_EVENT,
          eventId: this.eventIdMap[o.DataState.PRELOAD_START],
        }),
          delete this.eventIdMap[o.DataState.PRELOAD_START];
      }),
      (t.prototype.onCanPlay = function () {
        this.isLoading &&
          ((this.isLoading = !1),
          this.logEvent(o.DataState.LOAD_END, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: this.eventIdMap[o.DataState.LOAD_START],
          }));
      }),
      (t.prototype.onPause = function () {
        this.stopPlayTimer();
        var t = (0, a.genId)(8);
        (this.eventIdMap[o.DataState.PAUSE_START] = t),
          this.logEvent(o.DataState.PAUSE_START, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: t,
          });
      }),
      (t.prototype.onPlaying = function () {
        this.startPlayTimer(this.player.isAd);
        var t = this.eventIdMap[o.DataState.PAUSE_START];
        t &&
          (this.logEvent(o.DataState.PAUSE_END, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: t,
          }),
          delete this.eventIdMap[o.DataState.PAUSE_START]),
          this.isBuffering &&
            ((this.isBuffering = !1),
            this.logEvent(o.DataState.BUFFER_END, {
              ftime: Date.now(),
              type: n.LogType.CORE_EVENT,
              eventId: this.eventIdMap[o.DataState.BUFFER_START],
            }));
      }),
      (t.prototype.onSeeking = function () {
        var t = Date.now();
        this.isSeeking &&
          this.logEvent(o.DataState.SEEK_END, {
            ftime: t,
            eventId: this.eventIdMap[o.DataState.SEEK_START],
            type: n.LogType.CORE_EVENT,
            ext: { isUserSeek: !0 },
          }),
          this.resetWaitingState(),
          (this.isSeeking = !0);
        var e = (0, a.genId)(8);
        (this.eventIdMap[o.DataState.SEEK_START] = e),
          this.logEvent(o.DataState.SEEK_START, {
            ftime: t,
            eventId: e,
            type: n.LogType.CORE_EVENT,
            ext: { isUserSeek: !0 },
          });
      }),
      (t.prototype.onSeeked = function () {
        this.isSeeking &&
          ((this.isSeeking = !1),
          this.logEvent(o.DataState.SEEK_END, {
            ftime: Date.now(),
            eventId: this.eventIdMap[o.DataState.SEEK_START],
            type: n.LogType.CORE_EVENT,
            ext: { isUserSeek: !0 },
          }));
      }),
      (t.prototype.onEnd = function () {
        var t = Date.now();
        this.stopPlayTimer(),
          this.terminateWaitingEvents(t),
          this.logEvent(o.DataState.END, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
          });
      }),
      (t.prototype.onIdle = function () {}),
      (t.prototype.onBuffering = function (t) {
        this.isBuffering = !0;
        var e = (0, a.genId)(8);
        (this.eventIdMap[o.DataState.BUFFER_START] = e),
          this.logEvent(o.DataState.BUFFER_START, {
            eventId: e,
            type: n.LogType.CORE_EVENT,
            prevState: t.oldState,
          });
      }),
      (t.prototype.onLoadStart = function () {
        this.isLoading = !0;
        var t = (0, a.genId)(8);
        (this.eventIdMap[o.DataState.LOAD_START] = t),
          this.logEvent(o.DataState.LOAD_START, {
            eventId: t,
            type: n.LogType.CORE_EVENT,
          });
      }),
      (t.prototype.startPlayTimer = function (t) {
        var e = this;
        this.playTimer && clearInterval(this.playTimer),
          (this.playTimer = setInterval(function () {
            t
              ? ((e.adPlayTime += 1e3),
                e.player.internalMsg.emit(n.EventsExt.DATASET_ADTIME_UPDATE, {
                  currentTime: e.adPlayTime,
                }))
              : ((e.playTime += 1e3),
                e.player.internalMsg.emit(n.EventsExt.DATASET_PLAYTIME_UPDATE, {
                  currentTime: e.playTime,
                }));
          }, 1e3));
      }),
      (t.prototype.startUseTimer = function () {
        var t = this;
        this.useTimer && clearInterval(this.useTimer),
          (this.useTimer = setInterval(function () {
            (t.useTime += 1e3),
              t.player.internalMsg.emit(n.EventsExt.DATASET_USETIME_UPDATE, {
                currentTime: t.useTime,
              });
          }, 1e3));
      }),
      (t.prototype.stopPlayTimer = function () {
        this.playTimer && clearInterval(this.playTimer),
          (this.playTimer = null);
      }),
      (t.prototype.stopUseTimer = function () {
        this.useTimer && clearInterval(this.useTimer), (this.useTimer = null);
      }),
      (t.prototype.reset = function () {
        (this.played = !1),
          (this.playTime = 0),
          (this.adPlayTime = 0),
          (this.useTime = 0),
          this.stopPlayTimer(),
          this.stopUseTimer();
      }),
      (t.prototype.resetWaitingState = function () {
        (this.isBuffering = !1), (this.isSeeking = !1);
      }),
      (t.prototype.terminateWaitingEvents = function (t, e) {
        void 0 === e && (e = { code: n.ErrorCode.SUCCESS });
        var i = this.eventIdMap[o.DataState.PAUSE_START];
        i &&
          (this.logEvent(o.DataState.PAUSE_END, {
            ftime: Date.now(),
            type: n.LogType.CORE_EVENT,
            eventId: i,
          }),
          delete this.eventIdMap[o.DataState.PAUSE_START]),
          this.isLoading &&
            ((this.isLoading = !1),
            this.logEvent(o.DataState.LOAD_END, {
              ftime: t,
              eventId: this.eventIdMap[o.DataState.LOAD_START],
              code: null == e ? void 0 : e.code,
              error: e,
            })),
          this.isBuffering &&
            ((this.isBuffering = !1),
            this.logEvent(o.DataState.BUFFER_END, {
              ftime: t,
              eventId: this.eventIdMap[o.DataState.BUFFER_START],
              code: null == e ? void 0 : e.code,
              error: e,
            })),
          this.isSeeking &&
            ((this.isSeeking = !1),
            this.logEvent(o.DataState.SEEK_END, {
              ftime: t,
              eventId: this.eventIdMap[o.DataState.SEEK_START],
              code: null == e ? void 0 : e.code,
              error: e,
            }));
      }),
      t
    );
  })();
exports.default = r;
