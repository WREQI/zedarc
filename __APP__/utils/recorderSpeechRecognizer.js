var e = require("../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var n = require("../@babel/runtime/helpers/toConsumableArray"),
  t = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  i = e(require("./recorder.js")),
  a = e(require("./speechRecognizer.js")),
  o = require("./logger").logManager.tag("plugin-recorderSpeechRecognizer"),
  c = (function () {
    function e() {
      t(this, e),
        (this.params = null),
        (this.recorder = null),
        (this.speechRecognizer = null),
        (this.isCanSendData = !1),
        (this.audioData = []),
        (this.getDataTime = []),
        (this.sendDataTime = []);
    }
    return (
      r(e, [
        {
          key: "start",
          value: function (e) {
            var t = this;
            (this.params = e),
              (this.recorder = new i.default()),
              (this.audioData = []),
              (this.recorder.OnReceivedData = function (e) {
                var r;
                t.getDataTime.push(new Date().getTime()),
                  (r = t.audioData).push.apply(r, n(new Int8Array(e)));
                var i = t.params.engine_model_type.includes("8k") ? 640 : 1280;
                if (t.isCanSendData && t.audioData.length > i) {
                  var a = t.audioData.splice(0, i),
                    o = new Int8Array(a);
                  t.speechRecognizer.write(o.buffer),
                    t.sendDataTime.push(new Date().getTime());
                }
              }),
              (this.recorder.OnStop = function (e) {
                (t.recorder = null),
                  t.isCanSendData &&
                    t.audioData.length > 0 &&
                    (t.speechRecognizer &&
                      t.speechRecognizer.write(
                        new Int8Array(t.audioData).buffer
                      ),
                    (t.audioData = [])),
                  t.OnRecorderStop(e),
                  t.speechRecognizer && t.speechRecognizer.stop();
              }),
              (this.recorder.OnError = function (e) {
                t.stop(), t.OnError(e);
              }),
              (this.recorder.OnFrameRecorded = function (e) {
                t.OnFrameRecorded(e);
              });
            var r = { duration: e.duration, frameSize: e.frameSize };
            this.recorder.start(r),
              this.speechRecognizer ||
                (this.speechRecognizer = new a.default(this.params)),
              (this.speechRecognizer.OnRecognitionStart = function (e) {
                t.OnRecognitionStart(e), (t.isCanSendData = !0);
              }),
              (this.speechRecognizer.OnSentenceBegin = function (e) {
                t.OnSentenceBegin(e);
              }),
              (this.speechRecognizer.OnRecognitionResultChange = function (e) {
                t.OnRecognitionResultChange(e);
              }),
              (this.speechRecognizer.OnSentenceEnd = function (e) {
                t.OnSentenceEnd(e);
              }),
              (this.speechRecognizer.OnRecognitionComplete = function (e) {
                t.OnRecognitionComplete(e),
                  (t.isCanSendData = !1),
                  o.info("speechRecognizer is close", {
                    voice_id: null == e ? void 0 : e.voice_id,
                    getDataTime: t.getDataTime,
                    sendDataTime: t.sendDataTime,
                  });
              }),
              (this.speechRecognizer.OnError = function (e) {
                t.OnError(e),
                  (t.isCanSendData = !1),
                  t.recorder && t.recorder.stop();
              }),
              this.speechRecognizer.start(this.params);
          },
        },
        {
          key: "stop",
          value: function () {
            this.recorder && this.recorder.stop(),
              this.speechRecognizer && this.speechRecognizer.stop();
          },
        },
        { key: "OnRecognitionStart", value: function (e) {} },
        { key: "OnSentenceBegin", value: function (e) {} },
        { key: "OnRecognitionResultChange", value: function () {} },
        { key: "OnSentenceEnd", value: function () {} },
        { key: "OnRecognitionComplete", value: function () {} },
        { key: "OnError", value: function () {} },
        { key: "OnRecorderStop", value: function () {} },
        { key: "OnFrameRecorded", value: function () {} },
      ]),
      e
    );
  })();
exports.default = c;
