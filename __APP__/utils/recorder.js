Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  n = (function () {
    function n() {
      e(this, n),
        n.instance || ((this.recorderManager = null), (n.instance = this));
    }
    return (
      r(n, [
        {
          key: "start",
          value: function (e) {
            var r = this;
            this.recorderManager
              ? this.OnError("录音已开启")
              : ((this.recorderManager = wx.getRecorderManager()),
                this.recorderManager.start({
                  duration: e.duration || 6e5,
                  sampleRate: 16e3,
                  numberOfChannels: 1,
                  encodeBitRate: 64e3,
                  format: "mp3",
                  frameSize: e.frameSize || 0.32,
                }),
                this.recorderManager.onStart(function (e) {}),
                this.recorderManager.onStop(function (e) {
                  r.OnStop(e);
                }),
                this.recorderManager.onError(function (e) {
                  r.OnError(e), r.stop();
                }),
                this.recorderManager.onFrameRecorded(function (e) {
                  r.OnReceivedData(e.frameBuffer), r.OnFrameRecorded(e);
                }),
                this.recorderManager.onInterruptionBegin(function () {
                  r.stop();
                }),
                this.recorderManager.onInterruptionEnd(function () {
                  r.stop();
                }));
          },
        },
        {
          key: "stop",
          value: function () {
            this.recorderManager &&
              (this.recorderManager.stop(), (this.recorderManager = null));
          },
        },
        { key: "OnReceivedData", value: function (e) {} },
        { key: "OnError", value: function (e) {} },
        { key: "OnStop", value: function (e) {} },
        { key: "OnFrameRecorded", value: function (e) {} },
      ]),
      n
    );
  })();
exports.default = n;
