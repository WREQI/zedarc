var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  r = require("../../../config/enum.js"),
  o = require("../../../common/components/Dialog/index.js"),
  i = require("../../../model/apply/useApply.js"),
  a = require("../../../service/aegis/platform/not-wujie.js"),
  u = require("../../../utils/getPlatform.js");
require("../../../service/broker.js");
var c = require("../../../utils/index.js"),
  l = require("./useFaceDetect.js"),
  s = require("../../../adapter/router.js"),
  v = require("../../../config/broker/11100/index.js");
Math || (n.unref(f) + n.unref(p))();
var p = function () {
    return "../../../common/components/Dialog/Dialog.js";
  },
  f = function () {
    return "./Lyrics.js";
  },
  d = n.defineComponent({
    __name: "MpVideo",
    props: {
      voiceInfo: { type: Object, default: function () {} },
      isMPforH5: { type: Boolean, required: !0 },
      parentStatus: { type: String, default: r.MEDIA_STATUS.UNSET },
      resolution: { type: String, default: "medium" },
      fasterBroadcastSpeed: { type: Boolean, default: !1 },
      enableFaceDetect: { type: Boolean, default: !1 },
    },
    emits: ["captured", "faceDetectFail"],
    setup: function (p, f) {
      var d,
        O,
        E = f.emit,
        m = p,
        T = E,
        A = i.useApply(),
        I = (A.applyInfo, A.setLocalApplyInfo),
        R = n.inject("controller"),
        D = n.inject("reRecordVideo"),
        g = n.ref(!1),
        P = n.ref(!1),
        S = n.ref(null),
        x = null,
        h = null,
        M = n.ref(null),
        N = l.useFaceDetect({ enabled: n.toRef(m, "enableFaceDetect") }),
        y = N.faceDetectTips,
        w = N.start,
        C = N.stop,
        L = N.faceDetectStatus,
        U = n.wx$1.getWindowInfo
          ? n.wx$1.getWindowInfo()
          : n.wx$1.getSystemInfoSync(),
        b = u.getPlatform().isEmbeddedMiniProgram,
        V = n.ref(U.screenHeight - U.safeArea.bottom > 0),
        _ = n.ref(r.MEDIA_STATUS.UNSET),
        F = n.ref(""),
        Y = n.ref(""),
        k = n.reactive({ sentence: "", tip: "" }),
        H = n.reactive({
          sentence: !1,
          tip: !1,
          counter: !1,
          intervalCounter: !1,
        }),
        q = n.reactive({ sentence: 7, interval: 0, tip: 4, counter: 3 }),
        j = n.ref(!1),
        $ = n.computed(function () {
          return j.value && !H.counter && !H.intervalCounter;
        }),
        B = n.computed(function () {
          return $.value && (!Re() || H.sentence);
        }),
        J = n.computed(function () {
          return $.value && (!Re() || H.tip);
        }),
        W = n.computed(function () {
          return $.value && Re() && (H.sentence || H.tip);
        }),
        G = [
          { text: "请大声回答“" },
          { text: "是", primary: !0 },
          { text: "”或“" },
          { text: "不是", primary: !0 },
          { text: "”" },
        ],
        z = n.computed(function () {
          var e;
          if (H.counter && q.interval > 0) return G;
          var t = null == (e = m.voiceInfo) ? void 0 : e.answerTip;
          return Array.isArray(t) && t.length > 0 ? t : G;
        }),
        Z = n.ref(!1),
        K = n.ref(3),
        X = null,
        Q = n.ref(
          Number(
            (null ==
            (O =
              null ==
              (d =
                (null == U ? void 0 : U.screenHeight) /
                (null == U ? void 0 : U.windowHeight))
                ? void 0
                : d.toFixed)
              ? void 0
              : O.call(d, 2)) || 1
          )
        ),
        ee = n.ref(
          b ||
            (null == U ? void 0 : U.windowHeight) /
              (null == U ? void 0 : U.screenHeight) <=
              0.7
        ),
        te = n.wx$1.getDeviceInfo(),
        ne = n.ref("HOP-AL00" === te.model);
      n.computed(function () {
        return 1e3 * (q.counter + q.sentence + q.interval + q.tip);
      }),
        n.computed(function () {
          return q.counter + q.sentence + q.interval + q.tip;
        }),
        n.watch(
          function () {
            return m.parentStatus;
          },
          function (e) {
            e === r.MEDIA_STATUS.UNSET && De();
          }
        );
      var re = n.ref(!1);
      function oe() {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = t(
          e().mark(function r() {
            var o, i, u, c, l, s, v, p, f, d, O, E;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        ((o = m.voiceInfo),
                        (i = o.voiceUrl),
                        (u = o.voiceBase64),
                        (c = o.voiceTtsUrl),
                        (l = o.voice1),
                        (s = o.voice2),
                        (v = o.voiceCountdown),
                        (p = o.voiceInterval),
                        (f = Re()),
                        (Y.value = ""),
                        (k.sentence = l.text),
                        (k.tip = s.text),
                        (d = q.counter),
                        (O = q.sentence),
                        (E = q.tip),
                        (q.counter = v || d),
                        (q.sentence = l.length || O),
                        (q.interval = f ? Math.max(Number(p || 0), 0) : 0),
                        (q.tip = s.length || E),
                        !f)
                      ) {
                        r.next = 24;
                        break;
                      }
                      return (
                        (r.prev = 4),
                        (r.next = 7),
                        (function () {
                          var r = t(
                            e().mark(function t(r, o) {
                              var i;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!r) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (i = r),
                                          new Promise(function (e, t) {
                                            try {
                                              var r = String(i).replace(
                                                  /^data:audio\/[^;]+;base64,/,
                                                  ""
                                                ),
                                                o =
                                                  n.wx$1.getFileSystemManager(),
                                                a = ""
                                                  .concat(
                                                    n.wx$1.env.USER_DATA_PATH,
                                                    "/apply_video_tts_"
                                                  )
                                                  .concat(Date.now(), ".mp3");
                                              o.writeFile({
                                                filePath: a,
                                                data: r,
                                                encoding: "base64",
                                                success: function () {
                                                  return e(a);
                                                },
                                                fail: function (e) {
                                                  return t(e);
                                                },
                                              });
                                            } catch (e) {
                                              t(e);
                                            }
                                          })
                                        );
                                      case 4:
                                        return e.abrupt("return", e.sent);
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(1)),
                                          a.aegisReporter.reportEvent(
                                            "MONITOR-APPLY-VIDEO-AUDIO-TTS-BASE64-FAIL",
                                            { ext2: JSON.stringify(e.t0 || {}) }
                                          );
                                      case 10:
                                        if (o) {
                                          e.next = 12;
                                          break;
                                        }
                                        throw new Error(
                                          "TTS fallback audio url is empty"
                                        );
                                      case 12:
                                        return e.abrupt("return", Ae(o));
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[1, 7]]
                              );
                            })
                          );
                          return function (e, t) {
                            return r.apply(this, arguments);
                          };
                        })()(u, c)
                      );
                    case 7:
                      if (((F.value = r.sent), !i)) {
                        r.next = 14;
                        break;
                      }
                      return (r.next = 11), Ae(i);
                    case 11:
                      (r.t0 = r.sent), (r.next = 15);
                      break;
                    case 14:
                      r.t0 = "";
                    case 15:
                      (Y.value = r.t0),
                        a.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-AUDIO-TTS-READY-SUC"
                        ),
                        (r.next = 22);
                      break;
                    case 19:
                      (r.prev = 19),
                        (r.t1 = r.catch(4)),
                        a.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-AUDIO-TTS-READY-FAIL",
                          { ext2: JSON.stringify(r.t1 || {}) }
                        );
                    case 22:
                      r.next = 43;
                      break;
                    case 24:
                      return (
                        (F.value = i), (r.prev = 25), (r.next = 28), Ae(F.value)
                      );
                    case 28:
                      (F.value = r.sent), (r.next = 43);
                      break;
                    case 31:
                      return (
                        (r.prev = 31),
                        (r.t2 = r.catch(25)),
                        a.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-AUDIO-DOWNLOAD-FAIL-1",
                          { ext2: JSON.stringify(r.t2 || {}) }
                        ),
                        (r.prev = 34),
                        (r.next = 37),
                        Ae(F.value)
                      );
                    case 37:
                      (F.value = r.sent), (r.next = 43);
                      break;
                    case 40:
                      (r.prev = 40),
                        (r.t3 = r.catch(34)),
                        a.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-AUDIO-DOWNLOAD-FAIL-2",
                          { ext2: JSON.stringify(r.t3 || {}) }
                        );
                    case 43:
                      g.value = !0;
                    case 44:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              null,
              [
                [4, 19],
                [25, 31],
                [34, 40],
              ]
            );
          })
        )).apply(this, arguments);
      }
      function ae() {
        return ue.apply(this, arguments);
      }
      function ue() {
        return (ue = t(
          e().mark(function i() {
            return e().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    if (P.value) {
                      i.next = 7;
                      break;
                    }
                    if (((P.value = !0), g.value)) {
                      i.next = 6;
                      break;
                    }
                    return (i.next = 4), oe();
                  case 4:
                    return (P.value = !1), i.abrupt("return", void ae());
                  case 6:
                    (P.value = !1),
                      t(
                        e().mark(function i() {
                          var u, c;
                          return e().wrap(function (i) {
                            for (;;)
                              switch ((i.prev = i.next)) {
                                case 0:
                                  (Z.value = !1),
                                    (K.value = q.counter),
                                    S.value ||
                                      a.aegisReporter.reportEvent(
                                        "MONITOR-APPLY-VIDEO-START-RECORD-VIDEOCONTEXT-NULL"
                                      ),
                                    null ==
                                      (c =
                                        null == (u = S.value)
                                          ? void 0
                                          : u.startRecord) ||
                                      c.call(u, {
                                        success: function () {
                                          (_.value = r.MEDIA_STATUS.PRERECORD),
                                            (j.value = !0),
                                            a.aegisReporter.reportEvent(
                                              "MONITOR-APPLY-VIDEO-START-RECORD-SUC"
                                            ),
                                            t(
                                              e().mark(function t() {
                                                var r, o;
                                                return e().wrap(function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        (x =
                                                          n.wx$1.createInnerAudioContext()),
                                                          (r = !1),
                                                          (x.autoplay = !1),
                                                          (x.volume = 1),
                                                          (o = function (e) {
                                                            var t =
                                                              arguments.length >
                                                                1 &&
                                                              void 0 !==
                                                                arguments[1]
                                                                ? arguments[1]
                                                                : 0;
                                                            (x.startTime = t),
                                                              (x.src = e),
                                                              x.play();
                                                          }),
                                                          x.onPlay(function () {
                                                            if (
                                                              (a.aegisReporter.reportEvent(
                                                                "MONITOR-APPLY-VIDEO-AUDIO-PLAY-SUC"
                                                              ),
                                                              r)
                                                            )
                                                              return (
                                                                (H.sentence =
                                                                  !1),
                                                                void (H.tip =
                                                                  !0)
                                                              );
                                                            H.sentence = !0;
                                                          }),
                                                          x.onEnded(
                                                            function () {
                                                              if (
                                                                Re() &&
                                                                Y.value &&
                                                                !r
                                                              ) {
                                                                (r = !0),
                                                                  (H.sentence =
                                                                    !1),
                                                                  (H.tip = !1);
                                                                var e =
                                                                  1e3 *
                                                                  Math.max(
                                                                    Number(
                                                                      m
                                                                        .voiceInfo
                                                                        .voiceInterval ||
                                                                        0
                                                                    ),
                                                                    0
                                                                  );
                                                                return (
                                                                  (function (
                                                                    e
                                                                  ) {
                                                                    Oe(),
                                                                      e <= 0 ||
                                                                        ((H.intervalCounter =
                                                                          !0),
                                                                        (K.value =
                                                                          Math.ceil(
                                                                            e /
                                                                              1e3
                                                                          )),
                                                                        (X =
                                                                          setInterval(
                                                                            function () {
                                                                              K.value =
                                                                                Math.max(
                                                                                  K.value -
                                                                                    1,
                                                                                  0
                                                                                );
                                                                            },
                                                                            1e3
                                                                          )));
                                                                  })(e),
                                                                  void (h =
                                                                    setTimeout(
                                                                      function () {
                                                                        (h =
                                                                          null),
                                                                          Oe(),
                                                                          o(
                                                                            Y.value,
                                                                            m
                                                                              .voiceInfo
                                                                              .voice2StartTime ||
                                                                              0
                                                                          );
                                                                      },
                                                                      e
                                                                    ))
                                                                );
                                                              }
                                                              Te(!0);
                                                            }
                                                          ),
                                                          x.onError(function (
                                                            e
                                                          ) {
                                                            a.aegisReporter.reportEvent(
                                                              "MONITOR-APPLY-VIDEO-AUDIO-PLAY-FAIL",
                                                              {
                                                                ext2: JSON.stringify(
                                                                  e || {}
                                                                ),
                                                              }
                                                            );
                                                          }),
                                                          o(F.value);
                                                      case 5:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, t);
                                              })
                                            )();
                                        },
                                        fail: function (e) {
                                          C(),
                                            a.aegisReporter.reportEvent(
                                              "MONITOR-APPLY-VIDEO-START-RECORD-FAIL",
                                              { ext2: JSON.stringify(e || {}) }
                                            ),
                                            o.Dialog({
                                              message:
                                                "视频录制失败，请重新开始录制",
                                              onConfirm: function () {
                                                null == D || D();
                                              },
                                            });
                                        },
                                      });
                                case 2:
                                case "end":
                                  return i.stop();
                              }
                          }, i);
                        })
                      )();
                  case 7:
                  case "end":
                    return i.stop();
                }
            }, i);
          })
        )).apply(this, arguments);
      }
      function ce() {
        _.value === r.MEDIA_STATUS.PRERECORD &&
          (T("faceDetectFail"),
          ge(void 0),
          a.aegisReporter.reportEvent(
            "MONITOR-APPLY-VIDEO-FACEDETECT-TIMEOUT-RESTART"
          ));
      }
      function le() {
        T("faceDetectFail"),
          a.aegisReporter.reportEvent(
            "MONITOR-APPLY-VIDEO-FACEDETECT-INIT-FAIL-RESTART"
          );
      }
      function se(e) {
        return ve.apply(this, arguments);
      }
      function ve() {
        return (ve = t(
          e().mark(function t(r) {
            var i, u, c, l;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    S.value || (S.value = n.index.createCameraContext()),
                      r &&
                        !M.value &&
                        ((M.value = r),
                        (c =
                          (null == (i = null == r ? void 0 : r.detail)
                            ? void 0
                            : i.maxZoom) || 1),
                        Q.value < c &&
                          ((l = ee.value
                            ? Number(Q.value)
                            : Number(Q.value) + 0.2),
                          null == (u = S.value) || u.setZoom({ zoom: l }))),
                      o.Dialog.hide(),
                      setTimeout(function () {
                        m.enableFaceDetect ? (w(S, ce, le), ae()) : ae();
                      }, 300),
                      a.aegisReporter.reportEvent(
                        "MONITOR-APPLY-VIDEO-CAMERALOAD-SUC"
                      );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function pe(e) {
        S.value &&
          _.value === r.MEDIA_STATUS.PRERECORD &&
          (ge(void 0),
          a.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-CAMERALOAD-STOP", {
            ext2: JSON.stringify(e || {}),
          }));
      }
      function fe(e) {
        a.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-CAMERALOAD-ERROR", {
          ext2: JSON.stringify(e || {}),
        });
      }
      function de() {
        (H.sentence = !1), Re() && Y.value ? (H.tip = !1) : (H.tip = !0);
      }
      function Oe() {
        X && (clearInterval(X), (X = null)), (H.intervalCounter = !1);
      }
      function Ee() {
        h && (clearTimeout(h), (h = null));
      }
      function me() {
        Ee(), x && (x.stop(), x.destroy(), (x = null));
      }
      function Te() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!H.counter && (!Re() || e)) {
          (H.tip = !1), (K.value = q.counter), (H.counter = !0);
          var t = setInterval(function () {
            K.value -= 1;
          }, 1e3);
          setTimeout(function () {
            ge(!0), clearInterval(t);
          }, 1e3 * (m.fasterBroadcastSpeed ? q.counter - 1 : q.counter));
        }
      }
      function Ae(e) {
        return Ie.apply(this, arguments);
      }
      function Ie() {
        return (Ie = t(
          e().mark(function t(r) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e, t) {
                        n.wx$1
                          .downloadFile({
                            url: r,
                            success: function (t) {
                              a.aegisReporter.reportEvent(
                                "MONITOR-APPLY-VIDEO-AUDIO-DOWNLOAD-SUC"
                              ),
                                e(t);
                            },
                            fail: function (e) {
                              t(e);
                            },
                          })
                          .onProgressUpdate(function (e) {});
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent.tempFilePath);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Re() {
        var e, t;
        return Boolean(
          (null == (e = m.voiceInfo) ? void 0 : e.voiceBase64) ||
            (null == (t = m.voiceInfo) ? void 0 : t.voiceTtsUrl)
        );
      }
      function De() {
        (Z.value = !1),
          (j.value = !1),
          (_.value = r.MEDIA_STATUS.UNSET),
          I({ video: r.VIDEO_STATUS.UNSET }),
          (H.sentence = !1),
          (H.tip = !1),
          (H.counter = !1),
          Oe();
      }
      function ge(e) {
        if ((Ee(), Oe(), !e)) {
          if (Z.value) return;
          (Z.value = !0), (j.value = !1), me(), S.value && S.value.stopRecord();
          var t = "视频录制已中断，请重新开始录制";
          return (
            "outside" === L.value
              ? (t = "人像较长时间不在录制框，视频录制中断，请重新录制。")
              : "multi-face" === L.value
              ? (t =
                  "有多人在录制框内或者录制背景复杂，视频录制中断，请重新录制。")
              : ("no-face" !== L.value && "lost" !== L.value) ||
                (t = "未检测到人像，视频录制中断，请重新录制。"),
            C(),
            void o.Dialog({
              message: t,
              onConfirm: function () {
                De(), se(void 0);
              },
            })
          );
        }
        if (!Z.value) {
          n.wx$1.showLoading({ title: "视频处理中" });
          var r = setTimeout(function () {
            n.wx$1.hideLoading(),
              a.aegisReporter.reportEvent(
                "MONITOR-APPLY-VIDEO-STOP-RECORD-TIMEOUT"
              );
          }, 1e4);
          C(),
            S.value.stopRecord({
              compressed: !0,
              success: function (e) {
                var t, o;
                n.wx$1.hideLoading(), r && clearTimeout(r);
                var i =
                    "zxg-plugin" ===
                    (null == (t = s.route().query) ? void 0 : t._from),
                  u = !!(null == (o = s.route().query) ? void 0 : o.oem);
                if (
                  !(i || u || (e.tempVideoPath && "null" !== e.tempVideoPath))
                )
                  return (
                    Pe(),
                    void a.aegisReporter.reportEvent(
                      "MONITOR-APPLY-VIDEO-STOP-RECORD-SUCCESS-VIDEO-PATH-NULL",
                      { ext2: "".concat(e.tempVideoPath) }
                    )
                  );
                R.value.setVideoPath(e.tempVideoPath),
                  T("captured", e.tempVideoPath);
                try {
                  a.aegisReporter.reportEvent(
                    "MONITOR-APPLY-VIDEO-STOP-RECORD-SUCCESS",
                    {
                      ext2: "".concat(e.tempVideoPath),
                      ext3: q.sentence + q.tip + q.counter,
                    }
                  ),
                    n.wx$1.getVideoInfo({
                      src: e.tempVideoPath,
                      success: function (e) {
                        e.type;
                        var t = e.duration,
                          n = e.size;
                        a.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-UPLOAD-SIZE",
                          { ext2: n, ext3: m.resolution }
                        );
                        var r = q.sentence + q.tip + q.counter;
                        Number(t) < Number(r) - 3 &&
                          a.aegisReporter.reportEvent(
                            "MONITOR-APPLY-VIDEO-TIME-LESS-THAN-PROGRAM-TIME",
                            { ext2: t, ext3: r }
                          );
                      },
                    });
                } catch (e) {}
              },
              fail: function (e) {
                var t, i;
                n.wx$1.hideLoading(), r && clearTimeout(r);
                var u =
                    "zxg-plugin" ===
                    (null == (t = s.route().query) ? void 0 : t._from),
                  c = !!(null == (i = s.route().query) ? void 0 : i.oem);
                !u && !c && e.errMsg.indexOf("compressed file not exist") > -1
                  ? Pe()
                  : o.Dialog({
                      message: "视频录制失败，请重试开始录制",
                      onConfirm: function () {
                        null == D || D();
                      },
                    }),
                  a.aegisReporter.reportEvent(
                    "MONITOR-APPLY-VIDEO-STOP-RECORD-FAIL",
                    { ext2: JSON.stringify(e || {}) }
                  );
              },
            });
        }
      }
      function Pe() {
        a.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-DOWNGRADE-H5"),
          o.Dialog({
            message: "视频录制失败，请重试",
            confirmButtonText: "重试",
            onConfirm: function () {
              var e = "https://".concat(
                v.brokerConfig.base.domain,
                "/mp/v2/index.html#/apply/video?record_video_mode=h5"
              );
              n.index.redirectTo({
                url: ""
                  .concat(c.getWebviewUrl(), "?url=")
                  .concat(encodeURIComponent(e)),
              });
            },
          });
      }
      return (
        n.watch(
          function () {
            return m.enableFaceDetect;
          },
          function (e, t) {
            !1 === e &&
              !0 === t &&
              ((re.value = !0),
              a.aegisReporter.reportEvent(
                "MONITOR-APPLY-VIDEO-FACEDETECT-DOWNGRADE"
              ));
          }
        ),
        n.onPageShow(function () {
          me();
        }),
        n.onPageHide(function () {
          me();
        }),
        n.onMounted(function () {
          n.wx$1.hideShareMenu({ menus: ["shareAppMessage", "shareTimeline"] }),
            n.wx$1.setInnerAudioOption({
              mixWithOther: !0,
              obeyMuteSwitch: !1,
              speakerOn: !0,
              success: function () {},
              fail: function () {},
            });
        }),
        n.onBeforeUnmount(function () {
          C(), Oe(), S.value && j.value && ge(void 0), me();
        }),
        function (e, t) {
          return n.e(
            { a: p.parentStatus === n.unref(r.MEDIA_STATUS).RECORDING },
            p.parentStatus === n.unref(r.MEDIA_STATUS).RECORDING
              ? n.e(
                  { b: p.isMPforH5 },
                  p.isMPforH5
                    ? {
                        c: n.n(
                          p.isMPforH5
                            ? "navigator-icon-with-mp"
                            : "navigator-icon"
                        ),
                        d: p.isMPforH5 ? "miniProgram" : "self",
                        e: p.isMPforH5 ? "exit" : "navigateBack",
                        f: n.t(
                          _.value === n.unref(r.MEDIA_STATUS).PRERECORD
                            ? "录制中"
                            : "视频录制"
                        ),
                      }
                    : {},
                  {
                    g: n.n(ne.value ? "camera-height-80" : ""),
                    h: p.resolution,
                    i: n.o(se),
                    j: n.o(pe),
                    k: n.o(fe),
                    l: n.n(p.isMPforH5 ? "tips-with-mp tips" : "tips"),
                    m: n.unref(y) && p.enableFaceDetect,
                  },
                  n.unref(y) && p.enableFaceDetect
                    ? n.e(
                        { n: "inside" === n.unref(L) },
                        "inside" === n.unref(L)
                          ? { o: n.t(n.unref(y)) }
                          : { p: n.t(n.unref(y)) }
                      )
                    : {},
                  {
                    q: n.n(p.isMPforH5 ? "mp-for-h5" : ""),
                    r: _.value === n.unref(r.MEDIA_STATUS).UNSET,
                  },
                  (_.value, n.unref(r.MEDIA_STATUS).UNSET, {}),
                  { s: _.value === n.unref(r.MEDIA_STATUS).PRERECORD },
                  _.value === n.unref(r.MEDIA_STATUS).PRERECORD
                    ? n.e(
                        { t: H.sentence || H.tip },
                        (H.sentence || H.tip, {}),
                        { v: B.value },
                        B.value
                          ? {
                              w: n.o(de),
                              x: n.p({
                                isMPforH5: !0,
                                text: k.sentence,
                                highlightAnswer: !Re(),
                                duration: 1e3 * q.sentence,
                                playing: H.sentence,
                              }),
                            }
                          : {},
                        { y: J.value },
                        J.value
                          ? {
                              z: n.o(Te),
                              A: n.p({
                                isMPforH5: !0,
                                text: k.tip,
                                highlightAnswer: !Re(),
                                duration: 1e3 * q.tip,
                                playing: H.tip || H.counter,
                              }),
                            }
                          : {},
                        { B: H.counter || H.intervalCounter },
                        H.counter || H.intervalCounter
                          ? n.e(
                              {
                                C: n.f(z.value, function (e, t, r) {
                                  return {
                                    a: n.t(e.text),
                                    b: t,
                                    c: n.n(e.primary ? "primary-color" : ""),
                                  };
                                }),
                                D: K.value >= 0,
                              },
                              K.value >= 0 ? { E: n.t(K.value) } : {},
                              { F: H.intervalCounter },
                              H.intervalCounter
                                ? { G: n.t(K.value) }
                                : K.value
                                ? { I: n.t(K.value) }
                                : {},
                              { H: K.value }
                            )
                          : {},
                        {
                          J: n.n(
                            H.counter || H.intervalCounter
                              ? "record-container--counter"
                              : ""
                          ),
                          K: n.n(
                            W.value ? "record-container--single-question" : ""
                          ),
                        }
                      )
                    : {},
                  {
                    L: n.p({ id: "mp-dialog" }),
                    M: "https://st.gtimg.com/image/mp-broker/apply/video_face_frame_orange.png",
                    N: n.n(V.value ? "container-iphonex" : ""),
                  }
                )
              : {}
          );
        }
      );
    },
  }),
  O = n._export_sfc(d, [["__scopeId", "data-v-b0599cd6"]]);
wx.createComponent(O);
