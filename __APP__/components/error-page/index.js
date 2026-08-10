var e = require("../../@babel/runtime/helpers/interopRequireDefault").default,
  r = require("../../enums"),
  o = e(require("../../index")),
  t = require("../../modules/dataset/enum"),
  s = e(require("../../modules/error/index")),
  a = require("./error-message");
Component({
  properties: {
    playerId: { type: String, value: "" },
    useErrorPage: { type: Boolean, value: !0 },
  },
  data: {
    errorCode: r.ErrorCode.SUCCESS,
    errorMessage: "",
    guid: "",
    useFeedback: !1,
    SUCCESS_ERROR_CODE: r.ErrorCode.SUCCESS,
  },
  lifetimes: {
    attached: function () {
      (this.player = o.default.get(this.data.playerId)),
        this.player.on(r.Events.PLAY_SESSION_END, this.onSessionEnd, this),
        this.player.on(r.Events.PLAY_SESSION_START, this.onSessionStart, this);
    },
  },
  methods: {
    onSessionStart: function () {
      this.setData({
        guid: "",
        errorCode: r.ErrorCode.SUCCESS,
        errorMessage: "",
      });
    },
    onSessionEnd: function (e) {
      if (e.code !== r.ErrorCode.SUCCESS) {
        var o = (0, a.getErrorMessage)(e.code);
        this.setData({
          guid: this.player.dataset.getCommonKv(t.COMMON_DATA_KEY.guid),
          errorCode: e.code,
          errorMessage: o || e.message,
          useFeedback: s.default.is(
            e.code,
            s.default.pluginError(r.ErrorCode.VID_ERROR).code
          ),
        });
      }
    },
    onRefreshBtnTap: function () {
      this.player.replay();
    },
  },
});
