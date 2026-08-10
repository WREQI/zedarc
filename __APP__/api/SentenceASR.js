var e = require("../utils/config.js"),
  r = require("../utils/aaiApi.js");
function o() {
  for (
    var e = "",
      r = [
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
      o = 0;
    o < 8;
    o++
  )
    e += r[Math.round(Math.random() * (r.length - 1))];
  return e;
}
module.exports = {
  getSentenceRecognition: function (t) {
    var i = t.projectId || 0,
      n = t.engSerViceType || "16k",
      c = t.sourceType || 0,
      u = t.voiceFormat || "mp3",
      d = t.url || "",
      l = t.data || "",
      a = t.dataLen || 0,
      s = t.success,
      f = t.fail,
      p = e.GetQCloudSecret();
    r.SetQCloudSecret(p);
    var y = {
        ProjectId: i,
        SubServiceType: 2,
        EngSerViceType: n,
        SourceType: c,
        VoiceFormat: u,
        UsrAudioKey: o(),
        Url: d,
        Data: l,
        DataLen: a,
        success: function (e) {
          if (e && e.Response) {
            var r = e.Response;
            if (r.Error) {
              var o = { Error: r.Error, requestId: r.RequestId };
              f(o);
            } else {
              var t = r.Result,
                i = r.RequestId;
              s({ result: t, requestId: i });
            }
          } else {
            f({ errCode: "-10001", errMsg: "内部错误" });
          }
        },
        fail: function (e) {
          f(e);
        },
      },
      m = Object.prototype.hasOwnProperty;
    m.call(t, "wordInfo") &&
      "number" == typeof t.wordInfo &&
      (y.WordInfo = t.wordInfo),
      m.call(t, "filterDirty") &&
        "number" == typeof t.filterDirty &&
        (y.FilterDirty = t.filterDirty),
      m.call(t, "filterModal") &&
        "number" == typeof t.filterModal &&
        (y.FilterModal = t.filterModal),
      m.call(t, "filterPunc") &&
        "number" == typeof t.filterPunc &&
        (y.FilterPunc = t.filterPunc),
      m.call(t, "convertNumMode") &&
        "number" == typeof t.convertNumMode &&
        (y.ConvertNumMode = t.convertNumMode),
      m.call(t, "hotwordId") &&
        "string" == typeof t.hotwordId &&
        (y.HotwordId = t.hotwordId),
      m.call(t, "customizationId") &&
        "number" == typeof t.customizationId &&
        (y.CustomizationId = t.customizationId),
      m.call(t, "reinforceHotword") &&
        "number" == typeof t.reinforceHotword &&
        (y.ReinforceHotword = t.reinforceHotword),
      m.call(t, "hotwordList") &&
        "string" == typeof t.hotwordList &&
        (y.HotwordList = t.hotwordList),
      r.doQuerySentence(y, {
        Action: "SentenceRecognition",
        Version: "2019-06-14",
        Region: "ap-guangzhou",
      });
  },
};
