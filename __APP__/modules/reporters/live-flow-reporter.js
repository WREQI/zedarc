var t = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e,
  r,
  o = require("../../@babel/runtime/helpers/typeof"),
  i = require("../../enums"),
  n = require("../../behaviors/logger"),
  a = t(require("../plugins/base/index")),
  s = require("../dataset/enum"),
  l = t(require("../../index")),
  p = require("../utils/index"),
  d =
    ((e = function (t, r) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        })(t, r);
    }),
    function (t, r) {
      if ("function" != typeof r && null !== r)
        throw new TypeError(
          "Class extends value " + String(r) + " is not a constructor or null"
        );
      function o() {
        this.constructor = t;
      }
      e(t, r),
        (t.prototype =
          null === r
            ? Object.create(r)
            : ((o.prototype = r.prototype), new o()));
    }),
  u = function () {
    return (u =
      Object.assign ||
      function (t) {
        for (var e, r = 1, o = arguments.length; r < o; r++)
          for (var i in (e = arguments[r]))
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }).apply(this, arguments);
  },
  f = function (t, e, r, i) {
    var n,
      a = arguments.length,
      s =
        a < 3
          ? e
          : null === i
          ? (i = Object.getOwnPropertyDescriptor(e, r))
          : i;
    if (
      "object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) &&
      "function" == typeof Reflect.decorate
    )
      s = Reflect.decorate(t, e, r, i);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (n = t[l]) && (s = (a < 3 ? n(s) : a > 3 ? n(e, r, s) : n(e, r)) || s);
    return a > 3 && s && Object.defineProperty(e, r, s), s;
  };
!(function (t) {
  (t[(t.loading = 205)] = "loading"),
    (t[(t.error = 150)] = "error"),
    (t[(t.period = 263)] = "period");
})(r || (r = {}));
var c = {
    prog: "",
    playno: "",
    guid: "",
    cdn: "",
    sdtfrom: "",
    firstload: 0,
    blocktime: 0,
    block: 0,
    prd: 0,
    platform: 0,
    errcode: 0,
    dsip: "0.0.0.0",
    durl: "",
    firstreport: 0,
    sUrl: "",
    sRef: "",
    fplayerver: l.default.getPlayerVersion(),
    livepid: 0,
    viewid: 0,
    seq: 0,
    cmd: 0,
    fullecode: i.ErrorCode.SUCCESS,
    live_type: 0,
    geturltime: 0,
    playtime: 0,
    ispay: 0,
    isuserpay: 0,
    switch: "",
    lookback: 0,
    nettype: 0,
    freetype: 0,
    https: 0,
    vip_type: 0,
    playertype: 0,
    login_type: "none",
    open_id: "",
    devtype: 0,
  },
  h = (function (t) {
    function e(e, r) {
      var o;
      void 0 === r && (r = {});
      var i = t.call(this, e) || this;
      return (
        (i.config = r),
        (i.reported = !1),
        (i.redirectCost = 0),
        (i.bufferCount = 0),
        (i.bufferTime = 0),
        (i.currentPlayStart = 0),
        (i.currentBufferStart = 0),
        (i.currentPeriodPlaytime = 0),
        (i.seq = 0),
        (i.stateMap =
          (((o = {})[s.DataState.LOAD_END] = i.onLoaded),
          (o[s.DataState.SESSION_END] = i.onSessionEnd),
          (o[s.DataState.SESSION_START] = i.onSessionStart),
          (o[s.DataState.GET_INFO_END] = i.onGetinfoEnd),
          (o[s.DataState.FIRST_PLAY] = i.onFirstPlay),
          (o[s.DataState.BUFFER_END] = i.onBufferEnd),
          (o[s.DataState.BUFFER_START] = i.onBufferStart),
          (o[s.DataState.PLAYING] = i.onPlaying),
          o)),
        i.bindEvents(),
        i
      );
    }
    return (
      d(e, t),
      Object.defineProperty(e.prototype, "header", {
        get: function () {
          var t,
            e,
            r = l.default.getSystemInfo(),
            o = r.osPlatform,
            i = r.deviceModel,
            n = this.player.dataset.getCommonKv.bind(this.player.dataset),
            a = this.player,
            p = a.currentVideoInfo,
            d = a.currentPlayConfig,
            f = (p || {}).performance || {},
            h = f.loadEnd - f.loadStart,
            S = n(s.COMMON_DATA_KEY.actualid),
            E =
              null === (t = null == d ? void 0 : d.extra) || void 0 === t
                ? void 0
                : t.raw;
          return u(
            u(u({}, c), {
              open_id: n(s.COMMON_DATA_KEY.hc_openid),
              login_type:
                null !== (e = n(s.COMMON_DATA_KEY.hc_main_login)) &&
                void 0 !== e
                  ? e
                  : "none",
              guid: n(s.COMMON_DATA_KEY.guid),
              devtype: y(i, o),
              platform: n(s.COMMON_DATA_KEY.platform),
              sdtfrom: n(s.COMMON_DATA_KEY.sdtfrom),
              playno: n(s.COMMON_DATA_KEY.flowid),
              ispay: null == E ? void 0 : E.ispay,
              isuserpay: null == E ? void 0 : E.isuserpay,
              prog: S,
              livepid: n(s.COMMON_DATA_KEY.livepid),
              cdn: null == E ? void 0 : E.cdn_name,
              durl: (null == p ? void 0 : p.loadingUrl) || "",
              viewid: null == E ? void 0 : E.livechid,
              https: (null == p ? void 0 : p.loadingUrl.match(/^https/))
                ? 1
                : 0,
              firstreport: +!this.reported,
              firstload: isNaN(h) ? 0 : h,
              geturltime: this.redirectCost,
              switch: this.lastSid !== S ? this.lastSid : "",
              block: this.bufferCount,
              blocktime: this.bufferTime,
            }),
            this.config
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.destroy = function () {
        this.unbindEvents();
      }),
      (e.prototype.updateConfig = function (t) {
        this.config = u(u({}, this.config), t);
      }),
      (e.prototype.bindEvents = function () {
        this.player.internalMsg.on(
          i.EventsExt.DATASET_STATE_UPDATE,
          this.onDataSetStateUpdate,
          this
        ),
          this.player.on(
            i.Events.VIDEO_SETLEVEL_START,
            this.onSetLevelStart,
            this
          ),
          this.player.on(i.Events.VIDEO_SETLEVEL_END, this.onSetLevelEnd, this);
      }),
      (e.prototype.unbindEvents = function () {
        this.player.internalMsg.off(
          i.EventsExt.DATASET_STATE_UPDATE,
          this.onDataSetStateUpdate,
          this
        ),
          this.player.off(
            i.Events.VIDEO_SETLEVEL_START,
            this.onSetLevelStart,
            this
          ),
          this.player.off(
            i.Events.VIDEO_SETLEVEL_END,
            this.onSetLevelEnd,
            this
          );
      }),
      (e.prototype.onDataSetStateUpdate = function (t) {
        var e = t.key;
        this.stateMap[e] && this.stateMap[e].apply(this, [t]);
      }),
      (e.prototype.onPlaying = function (t) {
        this.currentPlayStart = t.newVal.ftime;
      }),
      (e.prototype.onFirstPlay = function () {
        this.startTick();
      }),
      (e.prototype.onSessionEnd = function (t) {
        this.tickImmediate(t.newVal.code), (this.seq = 0);
      }),
      (e.prototype.onLoaded = function (t) {
        if (!this.player.isAd) {
          var e = t.newVal.code;
          this.report(
            u(u({}, this.header), {
              cmd: e === i.ErrorCode.SUCCESS ? r.loading : r.error,
              fullecode: e,
            })
          );
        }
      }),
      (e.prototype.onSetLevelStart = function () {
        this.tickImmediate();
      }),
      (e.prototype.onSetLevelEnd = function () {
        (this.lastSid = null), this.startTick();
      }),
      (e.prototype.onSessionStart = function () {
        this.reported = !1;
      }),
      (e.prototype.onGetinfoEnd = function (t) {
        var e = t.newVal,
          r = t.startEvent,
          o = e.ftime,
          i = r.ftime;
        (this.lastSid = this.player.dataset.getCommonKv(
          s.COMMON_DATA_KEY.actualid
        )),
          (this.redirectCost = o - i);
      }),
      (e.prototype.onBufferEnd = function (t) {
        var e = t.newVal.ftime;
        this.bufferTime += e - this.currentBufferStart;
      }),
      (e.prototype.onBufferStart = function (t) {
        (this.bufferCount += 1), (this.currentBufferStart = t.newVal.ftime);
      }),
      (e.prototype.startTick = function () {
        return (
          (this.currentPlayStart = Date.now()),
          !this.periodTimer &&
            ((this.periodTimer = setInterval(this.tick.bind(this), 6e4)), !0)
        );
      }),
      (e.prototype.tickImmediate = function (t) {
        void 0 === t && (t = i.ErrorCode.SUCCESS),
          this.clearTick(),
          this.tick(t);
      }),
      (e.prototype.tick = function (t) {
        void 0 === t && (t = i.ErrorCode.SUCCESS);
        var e = Date.now(),
          o = this.currentPeriodPlaytime;
        this.player.state !== i.VideoState.BUFFERING
          ? (o += e - this.currentPlayStart)
          : (this.bufferTime += e - this.currentBufferStart),
          this.report(
            u(u({}, this.header), {
              cmd: t === i.ErrorCode.SUCCESS ? r.period : r.error,
              prd: o,
              fullecode: t || i.ErrorCode.SUCCESS,
            })
          ),
          this.onTickEnd();
      }),
      (e.prototype.onTickEnd = function () {
        var t = Date.now(),
          e = this.player.state;
        (this.bufferCount = e === i.VideoState.BUFFERING ? 1 : 0),
          (this.bufferTime = 0),
          (this.currentPeriodPlaytime = 0),
          (this.currentBufferStart = e === i.VideoState.BUFFERING ? t : 0),
          (this.currentPlayStart = e === i.VideoState.PLAYING ? t : 0);
      }),
      (e.prototype.clearTick = function () {
        return (
          !!this.periodTimer &&
          (clearInterval(this.periodTimer), (this.periodTimer = null), !0)
        );
      }),
      (e.prototype.report = function (t) {
        var e = (0, p.objectToQueryString)(u(u({}, t), { seq: this.seq })),
          r = ""
            .concat(
              "https://h.trace.qq.com/bosskv?attaid=z8700007433&token=4367489826&"
            )
            .concat(e);
        (0, p.request)({ url: r }), (this.seq += 1);
      }),
      (e.pluginName = "live_flow_reporter"),
      f([(0, n.log)("live-flow-reporter")], e.prototype, "report", null),
      e
    );
  })(a.default);
exports.default = h;
function y(t, e) {
  return t.match(/iPad/g)
    ? 4
    : t.match(/iPhone/g)
    ? 3
    : "android" === e
    ? 2
    : 0;
}
