var e, E, o, t, _, a, A, d, n, r, D, T;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.VideoState =
    exports.VideoNodeEvents =
    exports.VideoEvents =
    exports.PlayMode =
    exports.PaidFormat =
    exports.LogType =
    exports.HookType =
    exports.EventsExt =
    exports.Events =
    exports.ErrorMsg =
    exports.ErrorCode =
    exports.DefinitionName =
      void 0),
  (function (e) {
    (e.SUCCESS = "0"),
      (e.VID_ERROR = "1"),
      (e.REQUEST_ABORT = "2"),
      (e.MEDIA_ERR_DEMUXER = "10"),
      (e.MEDIA_ERR_DECODE = "11"),
      (e.MEDIA_ERR_RENDERER = "12"),
      (e.MEDIA_ERR_DRM = "13"),
      (e.MEDIA_ERR_LOAD = "14"),
      (e.REQUEST_ERROR = "500"),
      (e.NO_PREVIEW = "600"),
      (e.UNKNOWN = "999");
  })(e || (exports.ErrorCode = e = {})),
  (function (e) {
    (e.VID_ERROR = "视频播放错误，请点击下方按钮反馈问题"),
      (e.MEDIA_ERR_DRM = "当前环境无法播放该视频，请打开腾讯视频App观看"),
      (e.DEFAULT = "视频播放错误，请点击下方刷新按钮重试"),
      (e.NO_PREVIEW = "视频无试看时长，请付费后观看"),
      (e.REQUEST_ERROR = "网络请求错误，请点击下方刷新按钮重试");
  })(E || (exports.ErrorMsg = E = {})),
  (function (e) {
    (e.IDLE = "idle"),
      (e.LOAD_START = "loadStart"),
      (e.CANPLAY = "canplay"),
      (e.PLAYING = "playing"),
      (e.PAUSE = "pause"),
      (e.SEEKING = "seeking"),
      (e.SEEKED = "seeked"),
      (e.BUFFERING = "buffering"),
      (e.END = "end");
  })(o || (exports.VideoState = o = {})),
  (function (e) {
    (e.LOAD_PROGRESS = "loadProgress"),
      (e.METADATA_CHANGE = "metadataChange"),
      (e.DURATION_CHANGE = "durationChange"),
      (e.FULLSCREEN_CHANGE = "fullscreenChange"),
      (e.RATE_CHANGE = "rateChange"),
      (e.STATE_CHANGE = "stateChange"),
      (e.TIMEUPDATE = "timeupdate"),
      (e.ERROR = "error"),
      (e.RETRY = "retry"),
      (e.SETLEVEL_START = "setLevelStart"),
      (e.SETLEVEL_END = "setLevelEnd"),
      (e.PRELOAD_START = "preloadStart"),
      (e.PRELOAD_END = "preloadEnd"),
      (e.FIRST_PLAYING = "firstPlaying"),
      (e.NATIVE_CONTROLS_TOGGLE = "nativeControlsToggle"),
      (e.TAP = "tap"),
      (e.LONG_PRESS = "longpress"),
      (e.TOUCH_END = "touchend"),
      (e.SET_SRC = "setSrc"),
      (e.BACKGROUND_PLAYBACK = "backgroundPlayback");
  })(t || (exports.VideoNodeEvents = t = {})),
  (function (e) {
    (e.PLAY_SESSION_START = "sessionStart"),
      (e.PLAY_SESSION_END = "sessionEnd"),
      (e.VIDEO_REQ_INFO_START = "videoReqInfoStart"),
      (e.VIDEO_REQ_INFO_END = "videoReqInfoEnd"),
      (e.VIDEO_LOAD_START = "videoLoadStart"),
      (e.VIDEO_LOAD_PROGRESS = "videoLoadProgress"),
      (e.VIDEO_METADATA_CHANGE = "videoMetadataChange"),
      (e.VIDEO_DURATION_CHANGE = "videoDurationChange"),
      (e.VIDEO_TIMEUPDATE = "videoTimeupdate"),
      (e.VIDEO_RATE_CHANGE = "videoRateChange"),
      (e.VIDEO_CANPLAY = "videoCanplay"),
      (e.VIDEO_PLAYING = "videoPlaying"),
      (e.VIDEO_PAUSE = "videoPause"),
      (e.VIDEO_BUFFERING = "videoBuffering"),
      (e.VIDEO_SEEKING = "videoSeeking"),
      (e.VIDEO_SEEKED = "videoSeeked"),
      (e.VIDEO_SETLEVEL_START = "videoSetLevelStart"),
      (e.VIDEO_SETLEVEL_END = "videoSetLevelEnd"),
      (e.VIDEO_END = "videoEnd"),
      (e.VIDEO_BACKGROUND_PLAYBACK = "videoBackgroundPlayback"),
      (e.AD_REQ_INFO_START = "adReqInfoStart"),
      (e.AD_REQ_INFO_END = "adReqInfoEnd"),
      (e.AD_ASSETS_START = "adAssetsStart"),
      (e.AD_ASSETS_LOADED = "adAssetsLoaded"),
      (e.AD_TIMEUPDATE = "adTimeupdate"),
      (e.AD_PLAYING = "adPlaying"),
      (e.AD_PAUSE = "adPause"),
      (e.AD_END = "adEnd"),
      (e.CONTENT_CHANGE = "playContentChange");
  })(_ || (exports.Events = _ = {})),
  (function (e) {
    (e.Play = "play"),
      (e.Pause = "pause"),
      (e.Ended = "ended"),
      (e.TimeUpdate = "timeupdate"),
      (e.Waiting = "waiting"),
      (e.Error = "error"),
      (e.Progress = "progress"),
      (e.LoadedMetadata = "loadedmetadata"),
      (e.ControlsToggle = "controlstoggle"),
      (e.SeekComplete = "seekcomplete"),
      (e.FullScreenChange = "fullscreenchange");
  })(a || (exports.VideoEvents = a = {})),
  (function (e) {
    (e.DATASET_STATE_UPDATE = "dataset_stateUpdate"),
      (e.DATASET_UPDATE = "dataset_update"),
      (e.DATASET_PLAYTIME_UPDATE = "dataset_playtimeUpdate"),
      (e.DATASET_ADTIME_UPDATE = "dataset_adtimeUpdate"),
      (e.DATASET_USETIME_UPDATE = "dataset_usetimeUpdate"),
      (e.AD_SKIP = "adSkip"),
      (e.HOOK_ERROR = "hookError"),
      (e.REPORT = "report"),
      (e.COMPONENT_PAGE_SHOW = "component_pageShow"),
      (e.COMPONENT_PAGE_HIDE = "component_pageHide"),
      (e.COMPONENT_ATTACHED = "component_attached"),
      (e.COMPONENT_DETACHED = "component_detached"),
      (e.COMPONENT_ERROR = "component_error"),
      (e.COMPONENT_READY = "component_ready"),
      (e.QUALITY_REPORT = "quality_report"),
      (e.PROGRESS_CHANGING = "progress_changing"),
      (e.PROGRESS_CHANGE = "progress_change");
  })(A || (exports.EventsExt = A = {})),
  (function (e) {
    (e.USER_ACTION = "log:userAction"),
      (e.PLUGIN_ACTION = "log:pluginAction"),
      (e.CORE_EVENT = "log:coreEvent"),
      (e.API_INVOKE = "log:apiInvoke"),
      (e.UNCATEGORIZED = "log:uncategorized");
  })(d || (exports.LogType = d = {})),
  (function (e) {
    (e.PLAY = "play"), (e.GETINFO = "getinfo"), (e.SET_LEVEL = "setLevel");
  })(n || (exports.HookType = n = {})),
  (function (e) {
    (e.LIVE = "live"), (e.VOD = "vod");
  })(r || (exports.PlayMode = r = {})),
  (function (e) {
    (e.MSD = "msd"),
      (e.SD = "sd"),
      (e.MP4 = "mp4"),
      (e.HD = "hd"),
      (e.SHD = "shd"),
      (e.FHD = "fhd"),
      (e.UHD = "uhd"),
      (e.DOLBY = "dolby"),
      (e.HDR10 = "hdr10"),
      (e.IMAX = "imax"),
      (e["3D"] = "3d"),
      (e["8K"] = "8k");
  })(D || (exports.DefinitionName = D = {})),
  (function (e) {
    (e.FHD = "fhd"),
      (e.UHD = "uhd"),
      (e.DOLBY = "dolby"),
      (e.HDR10 = "hdr10"),
      (e.SFR_HDR = "sfr_hdr");
  })(T || (exports.PaidFormat = T = {}));
