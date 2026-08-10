var e,
  t = require("../utils/ttsApi.js"),
  r = require("../utils/config");
module.exports = {
  doQueryTTS: function (o) {
    var i = o.content || "",
      s = o.speed || 0,
      n = o.voiceType || 0,
      u = o.volume || 0,
      a = o.language || 1,
      d = o.projectId || 0,
      c = o.sampleRate || 16e3,
      l = o.success,
      p = o.fail;
    if (!e) {
      var m = r.GetQCloudSecret();
      e = new t({
        appId: m.appid,
        secretId: m.secretid,
        secretKey: m.secretkey,
        token: m.token,
      });
    }
    var y = {
      text: i,
      speed: s,
      voiceType: n,
      volume: u,
      language: a,
      projectId: d,
      sampleRate: c,
    };
    o.emotionCategory && (y.emotionCategory = o.emotionCategory),
      o.emotionIntensity &&
        o.emotionIntensity >= 50 &&
        o.emotionIntensity <= 200 &&
        (y.emotionIntensity = o.emotionIntensity),
      e.request(y, function (e, t) {
        if (e) p(e);
        else {
          var r = t.Response;
          if (r.Error) {
            var o = { Error: r.Error, requestId: r.RequestId };
            p(o);
          } else {
            if (e && e.errCode && e.errMsg) return void p(e);
            var s = t.Response.AudioUrl,
              n = {
                result: { origin: i, filePath: s },
                requestId: r.RequestId,
              };
            l(n);
          }
        }
      });
  },
};
