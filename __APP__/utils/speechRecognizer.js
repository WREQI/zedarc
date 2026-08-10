var e = require("../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = exports.NewCredential = void 0);
var t = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../@babel/runtime/helpers/typeof"),
  n = require("../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../@babel/runtime/helpers/classCallCheck"),
  o = require("../@babel/runtime/helpers/createClass"),
  a = e(require("./cryptojs.js")),
  c = require("./logger"),
  u = require("./api.js"),
  h = c.logManager.tag("plugin-speechRecognizer"),
  d = (function () {
    function e(t, r) {
      s(this, e),
        (this.config = { appid: t.appid, secretid: t.secretid }),
        (this.query = t || null),
        (this.voiceId = r);
    }
    var t, a;
    return (
      o(e, [
        {
          key: "formatSignString",
          value: function (e) {
            var t = "",
              r = "asr.cloud.tencent.com/asr/v2/";
            this.config.appid && (r += this.config.appid);
            var i = Object.keys(e);
            for (var n in (i.sort(), i))
              t += "&".concat(i[n], "=").concat(e[i[n]]);
            return "".concat(r, "?").concat(t.slice(1));
          },
        },
        {
          key: "createQuery",
          value:
            ((a = n(
              r().mark(function e() {
                var t, n, s, o;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = {}),
                            (n = new Date().getTime()),
                            (e.next = 4),
                            u.getServerTime()
                          );
                        case 4:
                          if (
                            ((s = e.sent),
                            (t.secretid = this.config.secretid || ""),
                            (t.engine_model_type =
                              this.query.engine_model_type || "16k_zh"),
                            (t.timestamp = parseInt(s)),
                            (t.expired = Math.round(n / 1e3) + 86400),
                            (t.nonce = Math.round(n / 1e5)),
                            (t.voice_id = this.voiceId),
                            (t.voice_format = 8),
                            this.query.hasOwnProperty("hotword_id") &&
                              (t.hotword_id = this.query.hotword_id),
                            this.query.hasOwnProperty("customization_id") &&
                              (t.customization_id =
                                this.query.customization_id),
                            this.query.hasOwnProperty("needvad") &&
                              (t.needvad = this.query.needvad),
                            this.query.hasOwnProperty("filter_dirty") &&
                              (t.filter_dirty = this.query.filter_dirty),
                            this.query.hasOwnProperty("filter_modal") &&
                              (t.filter_modal = this.query.filter_modal),
                            this.query.hasOwnProperty("filter_punc") &&
                              (t.filter_punc = this.query.filter_punc),
                            this.query.hasOwnProperty("convert_num_mode") &&
                              (t.convert_num_mode =
                                this.query.convert_num_mode),
                            this.query.hasOwnProperty("word_info") &&
                              (t.word_info = this.query.word_info),
                            this.query.hasOwnProperty("vad_silence_time") &&
                              (t.vad_silence_time =
                                this.query.vad_silence_time),
                            this.query.hasOwnProperty("hotword_list") &&
                              (t.hotword_list = this.query.hotword_list),
                            this.query.hasOwnProperty("reinforce_hotword") &&
                              (t.reinforce_hotword =
                                this.query.reinforce_hotword),
                            this.query.hasOwnProperty("max_speak_time") &&
                              (t.max_speak_time = this.query.max_speak_time),
                            null !== i(this.query.extend_params))
                          )
                            for (o in this.query.extend_params)
                              t[o] = this.query.extend_params[o];
                          return e.abrupt("return", t);
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return a.apply(this, arguments);
            }),
        },
        {
          key: "getSignStr",
          value:
            ((t = n(
              r().mark(function e() {
                var t;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), this.createQuery();
                        case 2:
                          return (
                            (t = e.sent),
                            e.abrupt("return", this.formatSignString(t))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
        },
      ]),
      e
    );
  })();
exports.NewCredential = d;
var l = (function () {
  function e() {
    s(this, e),
      (this.appid = ""),
      (this.secretid = ""),
      (this.socket = null),
      (this.isSignSuccess = !1),
      (this.isSentenceBegin = !1),
      (this.query = {}),
      (this.signCallback = null),
      (this.voiceId = ""),
      (this.sendDataSuccessTime = []),
      (this.getMessageTime = []);
  }
  var i, c;
  return (
    o(e, [
      {
        key: "stop",
        value: function () {
          this.socket && 1 === this.socket.readyState
            ? this.socket.send({ data: JSON.stringify({ type: "end" }) })
            : h.error("stop error", {
                code: 6003,
                message: "连接未连接或已经关闭。",
                voice_id: this.voiceId,
              });
        },
      },
      {
        key: "getUrl",
        value:
          ((c = n(
            r().mark(function e() {
              var t, i;
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this.appid && this.secretid) {
                          e.next = 3;
                          break;
                        }
                        return (
                          console.error("请确认是否填入appId和secretId"),
                          e.abrupt("return", !1)
                        );
                      case 3:
                        return (
                          (t = new d(this.query, this.voiceId)),
                          (e.next = 6),
                          t.getSignStr()
                        );
                      case 6:
                        return (
                          (i = e.sent),
                          e.abrupt(
                            "return",
                            ""
                              .concat(i, "&signature=")
                              .concat(encodeURIComponent(this.signCallback(i)))
                          )
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function () {
            return c.apply(this, arguments);
          }),
      },
      {
        key: "start",
        value:
          ((i = n(
            r().mark(function e(i) {
              var n,
                s,
                o,
                c,
                u = this;
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = function (e) {
                            var t = i.secretkey,
                              r = a.default.HmacSHA1(e, t),
                              s = n(r);
                            return wx.arrayBufferToBase64(s);
                          }),
                          (n = function (e) {
                            for (
                              var t = e.words,
                                r = e.sigBytes,
                                i = new Uint8Array(r),
                                n = 0;
                              n < r;
                              n++
                            )
                              i[n] = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                            return i;
                          }),
                          (this.appid = i.appid || ""),
                          (this.secretid = i.secretid || ""),
                          (this.socket = null),
                          (this.isSignSuccess = !1),
                          (this.isSentenceBegin = !1),
                          (this.query = t({}, i)),
                          (this.voiceId =
                            "xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(
                              /[xy]/g,
                              function (e) {
                                var t = (16 * Math.random()) | 0;
                                return ("x" === e ? t : (3 & t) | 8).toString(
                                  16
                                );
                              }
                            )),
                          (this.signCallback = i.signCallback || s),
                          (e.next = 12),
                          this.getUrl()
                        );
                      case 12:
                        if ((o = e.sent)) {
                          e.next = 16;
                          break;
                        }
                        return (
                          this.OnError({
                            code: 6002,
                            message: "鉴权失败",
                            voice_id: this.voiceId,
                          }),
                          e.abrupt("return")
                        );
                      case 16:
                        h.info("get wss appId", { appid: this.appid }),
                          (c = { url: "wss://".concat(o), header: {} }),
                          i.token && (c.header["X-TC-Token"] = i.token),
                          (c.header["User-Agent"] = "miniProgram-plugin-2.2.6"),
                          (this.socket = wx.connectSocket(c)),
                          this.socket.onMessage(function (e) {
                            var t = JSON.parse(e.data || null);
                            if (
                              (u.getMessageTime.push(new Date().getTime()),
                              0 !== t.code)
                            )
                              u.OnError(t), u.socket.close();
                            else {
                              if (
                                (u.isSignSuccess ||
                                  (u.OnRecognitionStart(t),
                                  (u.isSignSuccess = !0)),
                                1 === t.final)
                              )
                                return void u.OnRecognitionComplete(t);
                              t.result &&
                                (0 === t.result.slice_type
                                  ? (u.OnSentenceBegin(t),
                                    (u.isSentenceBegin = !0))
                                  : 2 === t.result.slice_type
                                  ? (u.isSentenceBegin || u.OnSentenceBegin(t),
                                    u.OnSentenceEnd(t))
                                  : u.OnRecognitionResultChange(t));
                            }
                          }),
                          this.socket.onError(function (e) {
                            u.socket.close(),
                              u.OnError({
                                code: 6e3,
                                message: e,
                                voice_id: u.voiceId,
                              }),
                              (u.socket = null);
                          }),
                          this.socket.onClose(function (e) {
                            (u.socket = null),
                              h.info("socket is close", {
                                voice_id: u.voiceId,
                                sendDataSuccessTime: u.sendDataSuccessTime,
                                getMessageTime: u.getMessageTime,
                              });
                          });
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (e) {
            return i.apply(this, arguments);
          }),
      },
      {
        key: "write",
        value: function (e) {
          var t = this;
          this.socket && 1 === this.socket.readyState
            ? this.socket.send({
                data: e,
                success: function (e) {
                  t.sendDataSuccessTime.push(new Date().getTime());
                },
                fail: function (e) {
                  h.error("write error", {
                    code: 6e3,
                    message: e,
                    voice_id: t.voiceId,
                  });
                },
              })
            : h.error("write error", {
                code: 6001,
                message: "连接未建立，请稍后发送数据！",
                voice_id: this.voiceId,
              });
        },
      },
      { key: "OnRecognitionStart", value: function (e) {} },
      { key: "OnSentenceBegin", value: function (e) {} },
      { key: "OnRecognitionResultChange", value: function () {} },
      { key: "OnSentenceEnd", value: function () {} },
      { key: "OnRecognitionComplete", value: function () {} },
      { key: "OnError", value: function () {} },
    ]),
    e
  );
})();
exports.default = l;
