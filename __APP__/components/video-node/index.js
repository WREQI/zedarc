var e = require("../../@babel/runtime/helpers/interopRequireDefault").default,
  t = require("../../modules/utils/index"),
  r = require("../shared/video-properties"),
  i = e(require("./controller")),
  o = function () {
    return (o =
      Object.assign ||
      function (e) {
        for (var t, r = 1, i = arguments.length; r < i; r++)
          for (var o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
Component({
  properties: o(o({}, r.DEFAULT_VIDEO_PROPERTIES), {
    idx: { type: Number, value: 0 },
    active: { type: Boolean, value: !1 },
    borderRadius: { type: String, value: "0" },
  }),
  behaviors: ["wx://component-export"],
  export: function () {
    return this.controller;
  },
  data: {
    COMP_NAME: "video-node",
    src: "",
    certificateUrl: "",
    licenseUrl: "",
    isLive: !1,
    isDrm: !1,
    disableGesture: !1,
    durationS: 0,
  },
  lifetimes: {
    attached: function () {
      this.controller = new i.default("vnode-".concat(this.data.idx), this);
    },
  },
  methods: {
    proxyEvent: function (e) {
      this.controller.proxyEvent(e);
    },
    loadedmetadata: function (e) {
      (!t.IS_WX || (t.IS_WX && t.IS_OHOS)) &&
        this.data.startTime &&
        this.controller.seek(this.data.startTime),
        this.proxyEvent(e);
    },
  },
});
