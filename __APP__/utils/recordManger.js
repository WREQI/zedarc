var e,
  t,
  o,
  n,
  r,
  l = require("../utils/asrApi.js"),
  u = require("../utils/config"),
  i = require("./api.js"),
  s = wx.getRecorderManager(),
  c = 0,
  a = "",
  d = null,
  p = {},
  f = null,
  m = null,
  _ = null,
  y = null,
  g = null,
  v = null,
  h = null,
  C = null,
  b = function () {
    s.onInterruptionBegin(function () {
      s.stop();
    }),
      s.onInterruptionEnd(function () {
        s.stop();
      }),
      s.onStart(function () {
        e({ msg: "OK" }),
          (c = 0),
          (a = (function () {
            for (
              var e = "",
                t = 0,
                o = [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "a",
                  "b",
                  "c",
                  "d",
                  "e",
                  "f",
                  "g",
                  "h",
                  "i",
                  "j",
                  "k",
                  "l",
                  "m",
                  "n",
                  "o",
                  "p",
                  "q",
                  "r",
                  "s",
                  "t",
                  "u",
                  "v",
                  "w",
                  "x",
                  "y",
                  "z",
                ],
                n = 0;
              n < 16;
              n++
            )
              (t = Math.round(Math.random() * (o.length - 1))), (e += o[t]);
            return e;
          })()),
          (p = {});
      }),
      s.onStop(function (e) {
        (p = e),
          setTimeout(function () {
            if (c > 1) {
              var e = new Uint8Array([11, 22, 33]);
              S(e, e.byteLength, c, !0, a);
            }
          }, 500);
      }),
      s.onError(function (e) {
        n(e);
      }),
      s.onFrameRecorded(function (e) {
        var t = e.frameBuffer,
          o = e.isLastFrame;
        t &&
          (u.GetQCloudSecret().openConsole &&
            console.log("onFrameRecorded size:", t.byteLength),
          S(t, t.byteLength, c, o, a),
          o ? (c = 0) : (c += 1));
      });
  };
function S(e, n, i, s, c) {
  if (!r) {
    var a = u.GetQCloudSecret();
    r = new l({
      appId: a.appid,
      secretId: a.secretid,
      secretKey: a.secretkey,
      token: a.token,
      baseHost: "cloud.tencent.com",
      path: "/asr/v1/",
    });
  }
  var b = {
    serviceType: "asr",
    method: "POST",
    seq: i,
    end: s ? 1 : 0,
    voice_id: c,
    engine_model_type: f,
    timeStampOffset: d,
  };
  null !== m && (b.hotword_id = m),
    null !== _ && (b.customization_id = _),
    null !== y && (b.filter_dirty = y),
    null !== g && (b.filter_modal = g),
    null !== v && (b.filter_punc = v),
    null !== h && (b.convert_num_mode = h),
    null !== C && (b.needvad = C),
    r.request(
      b,
      function (e, n) {
        e
          ? o({
              code: e.code,
              result: "",
              resList: { resultList: [], resultNumber: -1 },
              errMsg: e.message,
            })
          : (!e &&
              (n.text || n.result_number > 0) &&
              (n.text,
              o({
                code: n.code,
                result: n.text,
                resList: {
                  resultList: n.result_list,
                  resultNumber: n.result_number,
                },
                errMsg: "",
              })),
            1 == n.final && ((p.result = n.text), t(p)));
      },
      { frameBuffer: e, bufLen: n }
    );
}
(b.prototype.start = function (e) {
  var t = 6e4;
  (f = e.engine_model_type || "16k_zh"),
    null != e && e.duration > 0 && e.duration <= 6e5 && (t = e.duration),
    u.GetQCloudSecret().openConsole && console.log("engine_model_type", f);
  var o = Object.prototype.hasOwnProperty;
  o.call(e, "hotword_id") &&
    "string" == typeof e.hotword_id &&
    (m = e.hotword_id),
    o.call(e, "customization_id") &&
      "string" == typeof e.customization_id &&
      (_ = e.customization_id),
    o.call(e, "filter_dirty") &&
      "number" == typeof e.filter_dirty &&
      (y = e.filter_dirty),
    o.call(e, "filter_modal") &&
      "number" == typeof e.filter_modal &&
      (g = e.filter_modal),
    o.call(e, "filter_punc") &&
      "number" == typeof e.filter_punc &&
      (v = e.filter_punc),
    o.call(e, "convert_num_mode") &&
      "number" == typeof e.convert_num_mode &&
      (h = e.convert_num_mode),
    o.call(e, "needvad") && "number" == typeof e.needvad && (C = e.needvad);
  var n = {
    duration: t,
    sampleRate: 16e3,
    numberOfChannels: 1,
    encodeBitRate: 96e3,
    format: "mp3",
    frameSize: 0.32,
  };
  i.getServerTime()
    .then(function (e) {
      (d = parseInt(e) - Math.round(Date.now() / 1e3)), s.start(n);
    })
    .catch(function () {
      s.start(n);
    });
}),
  (b.prototype.stop = function () {
    s.stop();
  }),
  (b.prototype.onStart = function (t) {
    u.GetQCloudSecret().openConsole && console.log("set startCB"), (e = t);
  }),
  (b.prototype.onRecognize = function (e) {
    u.GetQCloudSecret().openConsole && console.log("set recognizeCB"), (o = e);
  }),
  (b.prototype.onStop = function (e) {
    u.GetQCloudSecret().openConsole && console.log("set stopCB"), (t = e);
  }),
  (b.prototype.onError = function (e) {
    u.GetQCloudSecret().openConsole && console.log("set errorCB"), (n = e);
  }),
  (module.exports = b);
