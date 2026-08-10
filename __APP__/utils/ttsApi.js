var e = require("./cryptojs"),
  t = require("./util"),
  o = require("../utils/config"),
  r = {},
  n = function (e) {
    Object.assign(
      r,
      {
        method: "POST",
        protocol: "https",
        serviceType: "tts",
        baseHost: "cloud.tencent.com",
        path: "/stream",
      },
      e
    );
  };
(n.prototype.generateUrl = function (e) {
  e = e || {};
  var t = this._getHost(e),
    o = void 0 === e.path ? r.path : e.path;
  return (e.protocol || r.protocol) + "://" + t + o;
}),
  (n.prototype.generateQueryString = function (e) {
    var t = Object.keys(e),
      n = "",
      s = this._getHost(r),
      a = r.method,
      i = r.path;
    return (
      t.sort(),
      t.forEach(function (t) {
        var o = e[t];
        "" !== t &&
          ((null == o || ("number" == typeof o && isNaN(o))) && (o = ""),
          (n += "&" + t + "=" + o));
      }),
      (n = n.slice(1)),
      o.GetQCloudSecret().openConsole &&
        console.log("加密前：", a + s + i + "?" + n),
      a + s + i + "?" + n
    );
  }),
  (n.prototype.request = function (e, t) {
    "function" == typeof e && ((t = e), (e = r)),
      (e = e || r),
      (t = t || Function.prototype);
    var o = Math.round(Date.now() / 1e3),
      n = {
        Action: "TextToAudioUrl",
        AppId: e.appId || r.appId,
        SecretId: e.secretId || r.secretId,
        Timestamp: o,
        Expired: o + 90,
        Text: e.text,
        SessionId: Math.round(65535 * Math.random()).toString(),
        Speed: e.speed,
        VoiceType: e.voiceType,
        Volume: e.volume,
        ProjectId: e.projectId,
        PrimaryLanguage: e.language,
        SampleRate: e.sampleRate,
        Codec: "mp3",
      };
    e.emotionCategory && (n.EmotionCategory = e.emotionCategory),
      e.emotionIntensity &&
        e.emotionIntensity >= 50 &&
        e.emotionIntensity <= 200 &&
        (n.EmotionIntensity = e.emotionIntensity);
    var s = this.generateQueryString(n),
      a = {
        "content-type": "application/json",
        Authorization: this.sign(s, e.secretKey || r.secretKey),
      };
    r.token && (a["X-TC-Token"] = r.token),
      wx.request({
        url: "https://tts.cloud.tencent.com/stream",
        data: JSON.stringify(n),
        method: "POST",
        header: a,
        success: function (e) {
          if (e.data && e.statusCode) {
            var o = e.statusCode + "";
            if (/^4+/g.test(o) || /^5+/g.test(o))
              return void t({ errCode: e.statusCode, errMsg: e.errMsg }, null);
          }
          e.data
            ? t(null, e.data)
            : (console.log("queryTTS no data:" + e),
              t({ errCode: -10001, errMsg: "内部错误" }, null));
        },
        fail: function (e) {
          console.log("queryTTS fail:", e), t(e, null);
        },
      });
  }),
  (n.prototype.sign = function (r, n) {
    var s = e.HmacSHA1(r, n),
      a = t.toUint8Array(s),
      i = wx.arrayBufferToBase64(a);
    return (
      o.GetQCloudSecret().openConsole && console.log("wx.base64后：", i), i
    );
  }),
  (n.prototype._getHost = function (e) {
    var t = e.host;
    return (
      t ||
        (t =
          (e.serviceType || r.serviceType) + "." + (e.baseHost || r.baseHost)),
      t
    );
  }),
  (module.exports = n);
