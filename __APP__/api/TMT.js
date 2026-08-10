var e = require("../utils/config.js"),
  t = require("../utils/tmtApi.js");
module.exports = {
  getTranslateText: function (r) {
    var s = r.content || "",
      o = r.source || "zh",
      c = r.target || "en",
      n = r.projectId || 0,
      i = r.success,
      u = r.fail,
      a = e.GetQCloudSecret();
    t.SetQCloudSecret(a.secretid, a.secretkey),
      t.doQueryTMT({
        Action: "TextTranslate",
        Version: "2018-03-21",
        Region: "ap-guangzhou",
        SourceText: s,
        Source: o,
        Target: c,
        ProjectId: n,
        success: function (e) {
          if (e && e.Response) {
            var t = e.Response;
            if (t.Error) return void u(t);
            i(t);
          } else u(e);
        },
        fail: function (e) {
          u(e);
        },
      });
  },
  getTranslateImage: function (r) {
    var s = r.sessionUuid || "session-12345",
      o = r.source || "zh",
      c = r.target || "en",
      n = r.scene || "doc",
      i = r.data || "",
      u = r.projectId || 0,
      a = r.success,
      d = r.fail,
      g = e.GetQCloudSecret();
    t.SetQCloudSecret(g.secretid, g.secretkey),
      t.doQueryTMT({
        Action: "ImageTranslate",
        Version: "2018-03-21",
        Region: "ap-guangzhou",
        SessionUuid: s,
        Scene: n,
        Data: i,
        Source: o,
        Target: c,
        ProjectId: u,
        success: function (e) {
          if (e && e.Response) {
            var t = e.Response;
            if (t.Error) return void d(t);
            a(t);
          } else d(e);
        },
        fail: function (e) {
          d(e);
        },
      });
  },
  getLanguageDetect: function (r) {
    var s = r.text || "",
      o = r.projectId || 0,
      c = r.success,
      n = r.fail,
      i = e.GetQCloudSecret();
    t.SetQCloudSecret(i.secretid, i.secretkey),
      t.doQueryTMT({
        Action: "LanguageDetect",
        Version: "2018-03-21",
        Region: "ap-guangzhou",
        Text: s,
        ProjectId: o,
        success: function (e) {
          if (e && e.Response) {
            var t = e.Response;
            if (t.Error) return void n(t);
            c(t);
          } else n(e);
        },
        fail: function (e) {
          n(e);
        },
      });
  },
};
