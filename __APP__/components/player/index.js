var e = require("../../@babel/runtime/helpers/interopRequireDefault").default,
  t = require("../../behaviors/logger"),
  i = require("../../enums"),
  n = e(require("../../index")),
  a = e(require("../../libs/simple-defer")),
  o = require("../../modules/utils/index"),
  r = require("../../modules/performance/enum"),
  l = require("../shared/video-properties"),
  s = e(require("./adapter")),
  u = e(require("./controller")),
  d = function () {
    return (d =
      Object.assign ||
      function (e) {
        for (var t, i = 1, n = arguments.length; i < n; i++)
          for (var a in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }).apply(this, arguments);
  },
  c = { KEY: "showPlaybackRateBtn", DESC: "倍速" },
  h = { KEY: "showBackgroundPlaybackBtn", DESC: "后台音频播放" },
  v = { KEY: "longPressPlaybackRate", DESC: "长按倍速" },
  p = { KEY: "muted", DESC: "静音" },
  y = { KEY: "pictureInPictureMode", DESC: "画中画" },
  f = { KEY: "vslideGesture", DESC: "小屏手势调整亮度&音量" },
  g = { KEY: "vslideGestureInFullscreen", DESC: "全屏手势调整亮度&音量" };
Component({
  externalClasses: ["custom-layer-class", "custom-toast-class"],
  options: { multipleSlots: !0 },
  properties: d(d({}, l.DEFAULT_VIDEO_PROPERTIES), {
    width: { type: String, value: "100%" },
    height: { type: String, value: "100%" },
    borderRadius: { type: String, value: "0" },
    customLayerData: { type: Object, value: {} },
    customToastData: { type: Object, value: {} },
    usePoster: { type: Boolean, value: !1 },
    posterUrl: { type: String, value: "" },
    initialTime: { type: Number, value: 0 },
    useLegacyAdapter: { type: Boolean, value: !0 },
    playerid: {
      type: String,
      value: "",
      observer: function () {
        console.warn(
          "setting playerid is deprecated, please use selectComponent"
        );
      },
    },
    maxVideoNode: { type: Number, value: 2 },
    vid: { type: String, value: "" },
    previd: { type: String, value: "" },
    cnlid: { type: String, value: "" },
    livepid: { type: String, value: "" },
    config: { type: Object, value: {} },
    extraParam: { type: Object, value: {} },
    defn: { type: String, value: "" },
    videoInfo: { type: Object, value: null },
    isHiddenStop: { type: Boolean, value: !0 },
    useWatermark: { type: Boolean, value: !0 },
    skipIntro: { type: Boolean, value: !1 },
    skipOutro: { type: Boolean, value: !1 },
    useErrorPage: { type: Boolean, value: !0 },
    isPreload: { type: Boolean, value: !1 },
    showProgress: { type: Boolean, value: !0 },
    showFullscreenBtn: { type: Boolean, value: !0 },
    showPlaybackRateBtn: { type: Boolean, value: !o.IS_OHOS },
    showDefinitionBtn: { type: Boolean, value: !0 },
    showPlayBtn: { type: Boolean, value: !0 },
    showFullscreenBackBtn: { type: Boolean, value: !0 },
    showBackgroundPlaybackBtn: { type: Boolean, value: !1 },
    showNewTips: { type: Boolean, value: !1 },
    disableProgress: { type: Boolean, value: !1 },
    longPressPlaybackRate: { type: Boolean, value: !o.IS_OHOS },
    vslideGestureInFullscreen: { type: Boolean, value: !o.IS_OHOS },
  }),
  behaviors: ["wx://component-export"],
  export: function () {
    return this.controller;
  },
  data: {
    videoNodeConfig: [],
    activeVideoNode: -1,
    isAd: !0,
    envReportUrl: "",
    instanceId: "",
    isAutoplay: !0,
    IS_WX: o.IS_WX,
  },
  pageLifetimes: {
    show: function () {
      this.controller.internalMsg.emit(i.EventsExt.COMPONENT_PAGE_SHOW);
    },
    hide: function () {
      var e, t;
      this.controller.internalMsg.emit(i.EventsExt.COMPONENT_PAGE_HIDE),
        this.controller.performance.setReportParam(
          (((e = {})[r.PERFORMANCE_KEY.hasHidePage] = !0), e)
        ),
        null === (t = this.controller) || void 0 === t || t.pause();
    },
  },
  observers: {
    vid: function (e) {
      var t,
        i = this;
      e &&
        e !== this.currentVid &&
        ((this.currentVid = e),
        null === (t = this.attached) ||
          void 0 === t ||
          t.promise.then(function () {
            i.controller[i.data.autoplay ? "play" : "load"](e);
          }));
    },
    cnlid: function (e) {
      var t,
        i,
        n = this;
      e &&
        e !==
          (null === (t = this.currentVid) || void 0 === t ? void 0 : t.cnlid) &&
        ((this.currentVid = e),
        null === (i = this.attached) ||
          void 0 === i ||
          i.promise.then(function () {
            n.controller[n.data.autoplay ? "play" : "load"]({
              cnlid: e,
              livepid: n.data.livepid,
            });
          }));
    },
    previd: function (e) {
      var t,
        i = this;
      e &&
        e !== this.currentVid &&
        ((this.currentVid = e),
        null === (t = this.attached) ||
          void 0 === t ||
          t.promise.then(function () {
            i.controller[i.data.autoplay ? "play" : "load"]({ previd: e });
          }));
    },
    showPlaybackRateBtn: function (e) {
      this.handleOHOSAbility(e, c);
    },
    showBackgroundPlaybackBtn: function (e) {
      this.handleOHOSAbility(e, h);
    },
    longPressPlaybackRate: function (e) {
      this.handleOHOSAbility(e, v);
    },
    muted: function (e) {
      this.handleOHOSAbility(e, p);
    },
    pictureInPictureMode: function (e) {
      this.handleOHOSAbility(e, y);
    },
    vslideGesture: function (e) {
      this.handleOHOSAbility(e, f);
    },
    vslideGestureInFullscreen: function (e) {
      this.handleOHOSAbility(e, g);
    },
  },
  lifetimes: {
    detached: function () {
      var e;
      this.controller.internalMsg.emit(i.EventsExt.COMPONENT_DETACHED),
        this.controller.destroy(),
        n.default.detach(this.data.instanceId),
        null === (e = this.intersectionObserver) ||
          void 0 === e ||
          e.disconnect(),
        (this.intersectionObserver = null);
    },
    ready: function () {
      var e;
      this.controller.internalMsg.emit(i.EventsExt.COMPONENT_READY),
        this.controller.init(),
        null === (e = this.ready) || void 0 === e || e.resolve();
    },
    created: function () {
      (this.ready = new a.default()),
        (this.attached = new a.default()),
        (this.fullscreenChange = !1);
    },
    attached: function () {
      var e, a, r;
      1 ===
        (null ===
          (a =
            null === (e = this.data.config) || void 0 === e
              ? void 0
              : e.debugConfig) || void 0 === a
          ? void 0
          : a.logLevel) && (0, t.openLog)(!0);
      var l = n.default.get(this.data.playerid);
      l &&
        (console.warn(
          "当前playerid已注册，请避免使用相同playerid或使用selectComponent获取组件实例"
        ),
        l.destroy(),
        n.default.detach(this.data.playerid)),
        this.data.defn &&
          (this.data.config.defn = this.data.config.defn || this.data.defn),
        (this.controller = this.data.useLegacyAdapter
          ? new s.default(this, this.data.extraParam, this.data.config)
          : new u.default(this, this.data.config)),
        this.controller.internalMsg.emit(i.EventsExt.COMPONENT_ATTACHED);
      var d = this.data.playerid || (0, o.genId)(32);
      n.default.attach(d, this.controller),
        this.setData({ instanceId: d }),
        this.registerIntersectionObserver(
          this.onComponentLeaveViewport.bind(this)
        ),
        null === (r = this.attached) || void 0 === r || r.resolve();
    },
  },
  methods: {
    registerIntersectionObserver: function (e) {
      this.intersectionObserver &&
        (this.intersectionObserver.disconnect(),
        (this.intersectionObserver = null));
      var t = this.createIntersectionObserver({}).relativeToViewport();
      t.observe("#".concat(this.data.instanceId), e),
        (this.intersectionObserver = t);
    },
    onComponentLeaveViewport: function (e) {
      this.fullscreenChange
        ? (this.fullscreenChange = !1)
        : this.ready &&
          this.controller &&
          this.data.isHiddenStop &&
          0 === e.intersectionRatio &&
          this.controller.pause();
    },
    proxyUIEvent: function (e) {
      var t = e.detail;
      this.triggerEvent("uievent", t),
        this.data.useLegacyAdapter && this.legacyUIEventProxy(t);
    },
    legacyUIEventProxy: function (e) {
      var t = e.data,
        i = e.component,
        n = {
          toast: ["toastchange", null == t ? void 0 : t.show],
          control: ["controlstoggle", { show: null == t ? void 0 : t.show }],
        };
      if (n[i]) {
        var a = n[i],
          o = a[0],
          r = a[1];
        this.triggerEvent(o, r);
      }
    },
    handleOHOSAbility: function (e, t) {
      var i = "boolean" == typeof e,
        n = Array.isArray(e);
      (i && !e) ||
        (n && 0 === e.length) ||
        (o.IS_OHOS &&
          (console.warn(
            "当前".concat(
              t.DESC,
              "功能在纯血鸿蒙系统中暂不支持，播放器已屏蔽！"
            )
          ),
          (this.properties[t.KEY] = !i && [])));
    },
  },
});
