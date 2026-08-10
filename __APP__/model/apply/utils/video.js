var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var o = require("../../../common/vendor.js");
require("../../../service/broker.js");
var i = require("../../../service/cookie/mp-weixin.js"),
  r = require("../../../utils/getPlatform.js"),
  n = require("../../../cgi/apply.js"),
  a = require("../../../service/aegis/platform/not-wujie.js"),
  c = require("../../../config/broker/11100/index.js"),
  s = r.getPlatform().bizPlatform,
  v = [
    { text: "请大声回答“" },
    { text: "是", primary: !0 },
    { text: "”或“" },
    { text: "不是", primary: !0 },
    { text: "”" },
  ];
function l(e) {
  var t,
    i,
    r = e.viodeVoiceCountdown,
    n = void 0 === r ? 3 : r,
    a = e.applyInfo,
    s = e.useFasterBroadcastSpeed,
    l = void 0 !== s && s,
    u = null == (i = c.brokerConfig.apply.stepConfig) ? void 0 : i.video;
  if (o.isEmpty(u)) throw "开户视频节点信息未配置";
  var p = u.videoVoice,
    d = void 0 === p ? {} : p,
    f = u.videoVoiceAbt,
    T = l ? (void 0 === f ? {} : f) : d,
    x = T;
  return (
    o.isFunction(T) && (x = T(a)),
    {
      voiceUrl: x.voiceUrl,
      voiceBase64: "",
      voiceTtsLen: 0,
      voice2StartTime: 0,
      voiceInterval: null !== (t = x.voiceInterval) && void 0 !== t ? t : 3,
      voice1: { text: x.voiceText1, length: x.duration1 },
      voice2: { text: x.voiceText2, length: x.duration2 },
      voiceTtsFallback: x.voiceTtsFallback || null,
      answerTip: x.answerTip || v,
      voiceCountdown: n,
    }
  );
}
function u() {
  var e, t;
  return Boolean(
    null ==
      (t = null == (e = c.brokerConfig.apply.stepConfig) ? void 0 : e.video)
      ? void 0
      : t.useVoiceTts
  );
}
function p(e) {
  return d.apply(this, arguments);
}
function d() {
  return (d = t(
    e().mark(function o(i) {
      var r, c, s, v, u, p, d, f, T, x, h, m, g, w;
      return e().wrap(
        function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (c = i.applyInfo),
                  (s = i.viodeVoiceCountdown),
                  (v = void 0 === s ? 3 : s),
                  (u = (null == c ? void 0 : c.cred_name) || ""),
                  (p = l({ viodeVoiceCountdown: v, applyInfo: c })),
                  (d = (function (e) {
                    var t = e.voiceText1,
                      o = e.voiceText2,
                      i = (e.name || "").trim();
                    return {
                      voiceText1: t.replace(/\s*\$\{name\}\s*/g, i),
                      voiceText2: o,
                    };
                  })({
                    name: u,
                    voiceText1: p.voice1.text,
                    voiceText2: p.voice2.text,
                  })),
                  (f = d.voiceText1),
                  (T = d.voiceText2),
                  (x = ""),
                  (h = 0),
                  (o.prev = 3),
                  (o.next = 6),
                  (function () {
                    var o = t(
                      e().mark(function t(o) {
                        var i, r, c;
                        return e().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    n.applyCgi.getVideoVoiceTts()
                                  );
                                case 3:
                                  if (
                                    ((i = e.sent),
                                    (r = i.audio),
                                    (c = i.ttsLen),
                                    r)
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  throw new Error("empty tts audio");
                                case 8:
                                  return e.abrupt(
                                    "return",
                                    (a.aegisReporter.reportEvent(
                                      "MONITOR-APPLY-VIDEO-TTS-CGI-SUC",
                                      { ext2: o.slice(0, 32) }
                                    ),
                                    { audio: r, ttsLen: c })
                                  );
                                case 11:
                                  throw (
                                    ((e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    a.aegisReporter.reportEvent(
                                      "MONITOR-APPLY-VIDEO-TTS-FAIL",
                                      {
                                        ext2: JSON.stringify(e.t0 || {}).slice(
                                          0,
                                          200
                                        ),
                                      }
                                    ),
                                    e.t0)
                                  );
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 11]]
                        );
                      })
                    );
                    return function (e) {
                      return o.apply(this, arguments);
                    };
                  })()(f)
                );
              case 6:
                (m = o.sent), (x = m.audio), (h = m.ttsLen), (o.next = 17);
                break;
              case 10:
                if (
                  ((o.prev = 10),
                  (o.t0 = o.catch(3)),
                  a.aegisReporter.reportEvent(
                    "MONITOR-APPLY-VIDEO-TTS-NAME-FALLBACK",
                    { ext2: JSON.stringify(o.t0 || {}).slice(0, 200) }
                  ),
                  !(g = (function (e) {
                    var t,
                      o = e.staticVoiceInfo,
                      i = e.viodeVoiceCountdown,
                      r = o.voiceTtsFallback;
                    return (null == r ? void 0 : r.voiceUrl) &&
                      (null == r ? void 0 : r.voiceText1)
                      ? {
                          voiceUrl: o.voiceUrl,
                          voiceBase64: "",
                          voiceTtsUrl: r.voiceUrl,
                          ttsLen: 0,
                          voiceTtsLen: 0,
                          voice2StartTime: 0,
                          voiceInterval:
                            null !== (t = o.voiceInterval) && void 0 !== t
                              ? t
                              : 3,
                          voice1: {
                            text: r.voiceText1,
                            length:
                              r.duration1 ||
                              Math.max(Math.ceil(r.voiceText1.length / 3.4), 3),
                          },
                          voice2: o.voice2,
                          answerTip: r.answerTip || o.answerTip,
                          voiceCountdown: i,
                          isTtsNameFallback: !0,
                        }
                      : null;
                  })({ staticVoiceInfo: p, viodeVoiceCountdown: v })))
                ) {
                  o.next = 16;
                  break;
                }
                return o.abrupt("return", g);
              case 16:
                throw o.t0;
              case 17:
                return (
                  (w =
                    h > 0
                      ? Math.max(Math.ceil(h / 1e3), 1)
                      : Math.max(Math.ceil(f.length / 3.4), 4)),
                  o.abrupt("return", {
                    voiceUrl: p.voiceUrl,
                    voiceBase64: x,
                    voiceTtsUrl: "",
                    ttsLen: h,
                    voiceTtsLen: h,
                    voice2StartTime: 0,
                    voiceInterval:
                      null !== (r = p.voiceInterval) && void 0 !== r ? r : 3,
                    voice1: { text: f, length: w },
                    voice2: { text: T, length: p.voice2.length },
                    answerTip: p.answerTip,
                    voiceCountdown: v,
                    isTtsNameFallback: !1,
                  })
                );
              case 19:
              case "end":
                return o.stop();
            }
        },
        o,
        null,
        [[3, 10]]
      );
    })
  )).apply(this, arguments);
}
var f = null;
(exports.buildVoiceTtsInfo = p),
  (exports.clearVoiceTtsPrefetch = function () {
    f = null;
  }),
  (exports.consumePrefetchedVoiceTtsInfo = function (e) {
    var t = (null == e ? void 0 : e.cred_name) || "";
    return f && f.name === t ? { result: f.result, promise: f.promise } : null;
  }),
  (exports.getMpForH5Path = function (e) {
    var t = e.faceCheck,
      r = void 0 !== t && t,
      n = e.video,
      a = void 0 !== n && n,
      v = e.viodeVoiceCountdown,
      u = void 0 === v ? 3 : v,
      p = e.credId,
      d = e.credName,
      f = e.applyChannel,
      T = void 0 === f ? "" : f,
      x = e.showFaceDetect,
      h = void 0 !== x && x,
      m = e.applyInfo,
      g = e.autoUpload,
      w = void 0 === g ? "0" : g,
      I = e.fasterBroadcastSpeed,
      b = void 0 === I ? "0" : I,
      y = e.isPreReviewAbt,
      C = void 0 === y ? "0" : y;
    if ("h5-weixin" !== s) throw "非微信H5无法使用微信小程序标签路径";
    var V = r ? "pages/apply/facecheck" : "pages/apply/video",
      k = { facelive: "", voiceinfo: "", applyChannel: T },
      O = (function () {
        var e = new i.AdapterCookie();
        return {
          host: location.host,
          dealer_code: c.brokerConfig.base.code,
          qluin: e.get("wzq_qluin") || "",
          qlskey: e.get("wzq_qlskey") || "",
        };
      })();
    if ((Object.assign(k, O), r)) {
      if (!p || !d) throw "缺少用户身份信息";
      var P = { idCardNumber: p, name: d };
      k.facelive = JSON.stringify(P);
    }
    if (!a) return o.dist.urltools.make(V, k);
    var S = l({ viodeVoiceCountdown: u, applyInfo: m });
    return (
      (k.voiceinfo = JSON.stringify(S)),
      (k.show_face_detect = h ? "1" : "0"),
      (k.autoUpload = w),
      (k.fasterBroadcastSpeed = b),
      (k.isPreReviewAbt = C),
      o.dist.urltools.make(V, k)
    );
  }),
  (exports.getVoiceVideoConfig = l),
  (exports.isSupportH5Video = function () {
    return !1;
  }),
  (exports.isVoiceTtsEnabled = u),
  (exports.prefetchVoiceTtsInfo = function (e) {
    if (u()) {
      var t = (null == e ? void 0 : e.cred_name) || "";
      if (!f || f.name !== t) {
        var o = p({ applyInfo: e }),
          i = { name: t, promise: o, result: null };
        (f = i),
          o
            .then(function (e) {
              f === i && (i.result = e),
                a.aegisReporter.reportEvent(
                  "MONITOR-APPLY-VIDEO-TTS-PREFETCH-SUC"
                );
            })
            .catch(function (e) {
              f === i && (f = null),
                a.aegisReporter.reportEvent(
                  "MONITOR-APPLY-VIDEO-TTS-PREFETCH-FAIL",
                  { ext2: JSON.stringify(e || {}).slice(0, 200) }
                );
            });
      }
    }
  });
