require("../../@babel/runtime/helpers/Arrayincludes"),
  require("../../@babel/runtime/helpers/Objectentries");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var i = require("../../common/vendor.js");
require("../../service/broker.js");
var n = require("../../model/apply/video/index.js"),
  a = require("../../model/apply/useDegradation.js"),
  s = require("../../model/apply/useApply.js"),
  u = require("../../model/apply/utils/video.js"),
  c = require("../../config/enum.js"),
  p = require("../../utils/getPlatform.js"),
  d = require("../../cgi/apply.js"),
  l = require("../../service/sdk/lib/api.js");
require("../../service/sdk/platform/mp-weixin.js");
var v,
  f = require("../../common/components/Dialog/index.js"),
  g = require("../../model/apply/usePreReview.js"),
  m = require("../../service/aegis/platform/not-wujie.js"),
  h = require("../../stores/app/useMode.js"),
  I = require("../../bizs/apply/video/utils.js"),
  x = require("../../service/abt/mp-weixin.js"),
  T = require("../../stores/apply/useDigitalHuman.js"),
  b = require("./composables/useDigitalHuman.js"),
  E = require("../../mixin/platforms/index.js"),
  S = require("../../config/broker/11100/index.js"),
  O = p.getPlatform(),
  D = O.platform,
  V = O.bizPlatform,
  A = O.bizPlatformVer,
  P = O.isLctXcx,
  w = O.isBrokerXcx,
  R = O.isInZxgXcxH5,
  M = O.isWzqXcx,
  y = {
    mixins: [E.pluginMixins],
    components: {
      IconTip: function () {
        return "../../bizs/apply/video/IconTipNew.js";
      },
      MpVideo: function () {
        return "../../bizs/apply/video/MpVideo.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      FootPrint: function () {
        return "../../bizs/apply/FootPrint.js";
      },
      StepButtons: function () {
        return "./components/StepButtons/StepButtons.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
      PreReviewModifyCard: function () {
        return "./components/PreReviewModifyCard/PreReviewModifyCard.js";
      },
    },
    provide: function () {
      return { onPageInit: this.onPageInit, reRecordVideo: this.reRecordVideo };
    },
    setup: function () {
      var e = i.getCurrentInstance().proxy,
        t = h.useModeStore(),
        p = i.storeToRefs(t).simpleMode,
        d = i.ref(""),
        l = i.ref(0),
        v = s.useApply(),
        I = v.applyInfo,
        E = v.setLocalApplyInfo,
        O = v.isRecoverMode,
        V = v.commitApplyData,
        A = v.getMode,
        w = v.curStepInfo,
        R = v.curStepConf,
        y = v.navigateNextStep,
        C = v.abtApplyFlexible,
        k = v.isPreReviewAbt,
        L = g.usePreReview(),
        N = L.isModifyMode,
        U = L.goNextModifyStep,
        _ = i.storeToRefs(T.useDigitalHuman()).isSupportDigitalHuman,
        F = T.useDigitalHuman().routeToVideoIdMap,
        H = b.useDigitalHuman(),
        j = H.digitalHumanRef,
        q = H.videoId,
        Y = i.computed(function () {
          return I.value.video === c.VIDEO_STATUS.UPLOADED;
        }),
        B = i.ref(c.MEDIA_STATUS.UNSET),
        $ = i.ref(!1),
        z = i.ref(c.INTENTION_VIDEO_TYPE.VOICE),
        W = i.ref(null),
        G = a.useDegradation(new n.VideoController(), {}),
        X = G.isDegraded,
        J = G.setDegraded,
        K = G.service,
        Z = i.ref(!1),
        Q = i.ref(""),
        ee = i.ref(!1),
        te = i.ref(u.isSupportH5Video()),
        re = i.ref(!1),
        oe = i.ref(!1),
        ie = i.ref("medium"),
        ne = i.ref(!1),
        ae = i.ref(!1),
        se = i.ref(!1),
        ue = i.ref(!1),
        ce = i.ref("");
      i.provide("controller", K);
      var pe,
        de,
        le,
        ve = i.ref(u.isVoiceTtsEnabled()),
        fe = i.ref(null),
        ge = i.ref(!1),
        me = i.computed(function () {
          return ve.value && fe.value
            ? fe.value
            : u.getVoiceVideoConfig({
                applyInfo: I.value,
                useFasterBroadcastSpeed: ae.value,
              });
        }),
        he = K.value.isCompressing || !1,
        Ie = i.computed(function () {
          return "";
        });
      return {
        mpPath: d,
        applyInfo: I,
        setLocalApplyInfo: E,
        isRecoverMode: O,
        curStepConf: R,
        curStepInfo: w,
        navigateNextStep: y,
        commitApplyData: V,
        getMode: A,
        INTENTION_VIDEO_TYPE: c.INTENTION_VIDEO_TYPE,
        curStatus: B,
        isVideoSet: Y,
        serverVideoUrl: "",
        isPending: $,
        videoMode: z,
        STATUS: c.MEDIA_STATUS,
        videoSrc: W,
        videoController: K,
        videoVoiceInfo: me,
        isShowCustomDialog: Z,
        customDialogHtml: Q,
        isUseH5Video: te,
        isGreyH5VideoUser: re,
        isUseZxgMpVideo: oe,
        resolution: ie,
        showFaceDetect: ee,
        isCompressing: he,
        poster: Ie,
        isShowMpExitDialog: ue,
        mpExitDialogText: ce,
        isMPforH5: se,
        simpleMode: p,
        supportAutoUpload: ne,
        checkAutoUploadSupport: function () {
          return R.autoUpload ? ((ne.value = !0), "1") : "0";
        },
        getBroadcastSpeedAbt:
          ((le = o(
            r().mark(function t() {
              var o, i, n;
              return r().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!S.brokerConfig.abt.fasterBroadcastSpeed) {
                        t.next = 11;
                        break;
                      }
                      return (
                        x.ABT.clear(),
                        (t.next = 4),
                        x.ABT.getABT(S.brokerConfig.abt.fasterBroadcastSpeed)
                      );
                    case 4:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 7;
                        break;
                      }
                      t.t0 = {};
                    case 7:
                      return (
                        (o = t.t0),
                        (i = o.yuyinbobao),
                        (n = void 0 === i ? "0" : i),
                        t.abrupt(
                          "return",
                          ((ae.value = "1" === n),
                          e.$stat.click(
                            "trade.apply.video-yuyinbobao-abt.brow"
                          ),
                          n)
                        )
                      );
                    case 11:
                      return t.abrupt("return", "0");
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          function () {
            return le.apply(this, arguments);
          }),
        useFasterBroadcastSpeed: ae,
        isLctXcx: P,
        isDegraded: X,
        setDegraded: J,
        abtApplyFlexible: C,
        isPreReviewAbt: k,
        isModifyMode: N,
        goNextModifyStep: U,
        isSupportDigitalHuman: _,
        routeToVideoIdMap: F,
        digitalHumanRef: j,
        videoId: q,
        faceDetectFailCount: l,
        getFaceDetect:
          ((de = o(
            r().mark(function t() {
              var o, n, a, s, u, c;
              return r().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!C.value) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void (ee.value = !0));
                    case 2:
                      if (
                        ((o = i.wx$1.getSystemInfoSync()),
                        (n = o.SDKVersion),
                        (a = i.gt(n, "2.25.0")),
                        !(
                          M &&
                          "ohos" !== D &&
                          S.brokerConfig.abt.faceDetect &&
                          a
                        ))
                      ) {
                        t.next = 14;
                        break;
                      }
                      return (
                        x.ABT.clear(),
                        (t.next = 7),
                        x.ABT.getABT(S.brokerConfig.abt.faceDetect)
                      );
                    case 7:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 10;
                        break;
                      }
                      t.t0 = {};
                    case 10:
                      return (
                        (s = t.t0),
                        (u = s.takevideo),
                        (c = void 0 === u ? "0" : u),
                        t.abrupt(
                          "return",
                          ((ee.value = "1" === c),
                          void e.$stat.click(
                            "trade.apply.video-face-detect-abt-brow"
                          ))
                        )
                      );
                    case 14:
                      ee.value = !1;
                    case 15:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          function () {
            return de.apply(this, arguments);
          }),
        onFaceDetectFail: function () {
          (l.value += 1),
            m.aegisReporter.reportEvent(
              "MONITOR-APPLY-VIDEO-FACEDETECT-FAIL-RETRY",
              { ext2: l.value }
            ),
            l.value >= 3 &&
              ((ee.value = !1),
              m.aegisReporter.reportEvent(
                "MONITOR-APPLY-VIDEO-FACEDETECT-FAIL-DISABLED"
              ));
        },
        useVoiceTts: ve,
        ttsVoiceInfo: fe,
        ensureTtsVoiceInfo:
          ((pe = o(
            r().mark(function e() {
              var t, o;
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (ve.value) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        if (!fe.value) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        if (!ge.value) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        if (
                          ((ge.value = !0),
                          (t = u.consumePrefetchedVoiceTtsInfo(I.value)),
                          (o = Boolean(null == t ? void 0 : t.result)) ||
                            i.index.showLoading({
                              title: "语音准备中",
                              mask: !0,
                            }),
                          (e.prev = 9),
                          (e.t0 = null == t ? void 0 : t.result),
                          e.t0)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 14),
                          (null == t ? void 0 : t.promise) ||
                            u.buildVoiceTtsInfo({ applyInfo: I.value })
                        );
                      case 14:
                        e.t0 = e.sent;
                      case 15:
                        (fe.value = e.t0),
                          u.clearVoiceTtsPrefetch(),
                          m.aegisReporter.reportEvent(
                            "MONITOR-APPLY-VIDEO-TTS-INFO-SUC",
                            { ext2: t ? "prefetch" : "ondemand" }
                          ),
                          (e.next = 23);
                        break;
                      case 20:
                        throw (
                          ((e.prev = 20),
                          (e.t1 = e.catch(9)),
                          m.aegisReporter.reportEvent(
                            "MONITOR-APPLY-VIDEO-TTS-INFO-FAIL",
                            { ext2: JSON.stringify(e.t1 || {}).slice(0, 200) }
                          ),
                          f.Dialog({ message: "语音播报加载失败 请稍后重试" }),
                          e.t1)
                        );
                      case 23:
                        return (
                          (e.prev = 23),
                          (ge.value = !1),
                          o || i.index.hideLoading(),
                          e.finish(23)
                        );
                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[9, 20, 23, 26]]
              );
            })
          )),
          function () {
            return pe.apply(this, arguments);
          }),
        refreshVoiceTtsFlag: function () {
          var e = u.isVoiceTtsEnabled();
          e !== ve.value && (ve.value = e);
        },
      };
    },
    beforeUnmount: function () {},
    methods: {
      goNextStepAfterSubmit: function (e) {
        this.isModifyMode ? this.goNextModifyStep() : this.navigateNextStep(e);
      },
      onIntentionVideoRecordClick: function () {
        var e = this;
        if (this.supportAutoUpload && this.isVideoSet && !this.isMPforH5)
          return (
            i.index.showToast({ title: "视频录制已完成", icon: "none" }),
            void setTimeout(function () {
              e.goNextStepAfterSubmit();
            }, 500)
          );
        this.processIntentionVideo(),
          this.$stat.click("trade.apply.video.start_record"),
          m.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-START-CLICK");
      },
      getWujiConfig: function () {
        var e = this;
        return o(
          r().mark(function t() {
            var o, i;
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    try {
                      (o = e.$route.query.record_video_mode),
                        (i = void 0 === o ? "" : o),
                        (e.isGreyH5VideoUser = "h5" === i),
                        P &&
                          ((e.isGreyH5VideoUser = !0),
                          m.aegisReporter.reportEvent(
                            "MONITOR-APPLY-VIDEO-LCTXCX-VIDEO-MODE",
                            { ext2: e.isUseH5Video, ext3: e.isGreyH5VideoUser }
                          ));
                    } catch (t) {
                      m.aegisReporter.reportEvent(
                        "MONITOR-APPLY-VIDEO-FACE-DETECT-REQUEST-FAIL",
                        { ext2: JSON.stringify(t || {}) }
                      ),
                        (e.showFaceDetect = !1),
                        e.$stat.click("trade.apply.video.face_detect_not_show");
                    }
                    R &&
                      ((e.isGreyH5VideoUser = !0),
                      m.aegisReporter.reportEvent(
                        "MONITOR-APPLY-VIDEO-ZXGXCX-VIDEO-MODE",
                        { ext2: e.isUseH5Video, ext3: e.isGreyH5VideoUser }
                      ));
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )();
      },
      onPageInit: function () {
        var e = this;
        return o(
          r().mark(function t() {
            var o, i, n, a;
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (u.prefetchVoiceTtsInfo(e.applyInfo),
                      (e.videoId = e.routeToVideoIdMap.ApplyVideo),
                      e.refreshVoiceTtsFlag(),
                      (e.isMPforH5 = ["h5", "zxg-plugin"].includes(
                        null == (o = e.$route.query) ? void 0 : o._from
                      )),
                      e.isMPforH5
                        ? ((e.supportAutoUpload =
                            "1" ===
                            (null == (i = e.$route.query)
                              ? void 0
                              : i.autoUpload)),
                          (e.useFasterBroadcastSpeed =
                            "1" ===
                            (null == (n = e.$route.query)
                              ? void 0
                              : n.fasterBroadcastSpeed)),
                          (e.isPreReviewAbt =
                            "1" ===
                            (null == (a = e.$route.query)
                              ? void 0
                              : a.isPreReviewAbt)))
                        : e.checkAutoUploadSupport(),
                      (t.t0 = "zxg" !== V),
                      !t.t0)
                    ) {
                      t.next = 11;
                      break;
                    }
                    return (t.next = 9), e.getFaceDetect();
                  case 9:
                    return (t.next = 11), e.getWujiConfig();
                  case 11:
                    !e.isVideoSet || e.isMPforH5
                      ? (e.curStatus, c.MEDIA_STATUS.PREVIEW)
                      : e.previewVideo(void 0, !0);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )();
      },
      showModal:
        ((v = o(
          r().mark(function e(t) {
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        f.Dialog({
                          title: "提示",
                          message: t.content,
                          onConfirm: function () {
                            e({ confirm: !0 });
                          },
                          onCancel: function () {
                            e({ confirm: !1 });
                          },
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return v.apply(this, arguments);
        }),
      checkAuthorized: function () {
        var i = this;
        return o(
          r().mark(function o() {
            var n, a, s, u, c, p, d, l, v, f;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      (u = {
                        camera: {
                          tip: "录制验证视频需要使用摄像头",
                          device: "摄像头",
                        },
                        record: {
                          tip: "录制验证视频需要使用录音功能",
                          device: "录音功能",
                        },
                      }),
                        (r.prev = 1),
                        (c = 0),
                        (p = Object.entries(u));
                    case 3:
                      if (!(c < p.length)) {
                        r.next = 10;
                        break;
                      }
                      return (
                        (d = t(p[c], 2)),
                        (l = d[0]),
                        (v = d[1]),
                        (r.next = 7),
                        I.ensureAuthorized(
                          "scope.".concat(l),
                          v.tip,
                          i.showModal
                        )
                      );
                    case 7:
                      c++, (r.next = 3);
                      break;
                    case 10:
                      m.aegisReporter.reportEvent(
                        "MONITOR-APPLY-VIDEO-DEVICEAUTH-SUC"
                      ),
                        (r.next = 17);
                      break;
                    case 13:
                      throw (
                        ((r.prev = 13),
                        (r.t0 = r.catch(1)),
                        (f =
                          null == (n = r.t0.scope)
                            ? void 0
                            : n.replace(/scope\./, "")),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-DEVICEAUTH-FAIL",
                          {
                            ext2: null == (a = u[f]) ? void 0 : a.device,
                            ext3: JSON.stringify(r.t0 || {}),
                          }
                        ),
                        e(
                          e({}, r.t0),
                          {},
                          { device: null == (s = u[f]) ? void 0 : s.device }
                        ))
                      );
                    case 17:
                    case "end":
                      return r.stop();
                  }
              },
              o,
              null,
              [[1, 13]]
            );
          })
        )();
      },
      getZxgTtsVideoConfig: function (e) {
        var t = e || {},
          r = t.voiceUrl,
          o = void 0 === r ? "" : r,
          i = t.voiceBase64,
          n = void 0 === i ? "" : i,
          a = t.voiceTtsUrl,
          s = void 0 === a ? "" : a,
          u = t.voice1,
          c = void 0 === u ? {} : u,
          p = t.voice2,
          d = void 0 === p ? {} : p,
          l = t.voiceCountdown,
          v = void 0 === l ? 3 : l,
          f = t.voiceInterval,
          g = void 0 === f ? 3 : f,
          m = t.answerTip,
          h = void 0 === m ? [] : m,
          I = Math.max(Number(g || 0), 0),
          x = Math.max(Number(v || 0), 0),
          T = "请大声回答“是”或“不是”",
          b =
            Array.isArray(h) && h.length > 0
              ? h
                  .map(function (e) {
                    return e.text || "";
                  })
                  .join("")
              : T,
          E = {
            text: c.text || "",
            answerText: b,
            audioFormat: "mp3",
            length: c.length,
            needAnswer: I > 0,
            answerCountdown: I,
          };
        return (
          n
            ? Object.assign(E, { audioData: n })
            : s && Object.assign(E, { audioUrl: s }),
          {
            version: "4",
            voiceCountdown: x,
            segments: [
              E,
              {
                text: d.text || "",
                answerText: T,
                audioUrl: o,
                audioFormat: "mp3",
                length: d.length,
                needAnswer: x > 0,
                answerCountdown: x,
              },
            ],
          }
        );
      },
      processIntentionVideo: function () {
        var e = this;
        return o(
          r().mark(function o() {
            var n, a, s, p, v, g, h, I, x, T, b, E, S;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (!P || "h5-weixin" !== V || !e.isShowMpLabel) {
                        r.next = 2;
                        break;
                      }
                      return r.abrupt("return", e.toLctApplyTransferPlugin());
                    case 2:
                      if (
                        !e.useVoiceTts ||
                        e.videoMode !== c.INTENTION_VIDEO_TYPE.VOICE
                      ) {
                        r.next = 11;
                        break;
                      }
                      return (r.prev = 3), (r.next = 6), e.ensureTtsVoiceInfo();
                    case 6:
                      r.next = 11;
                      break;
                    case 8:
                      return (
                        (r.prev = 8), (r.t0 = r.catch(3)), r.abrupt("return")
                      );
                    case 11:
                      if ("mp-weixin" !== V) {
                        r.next = 36;
                        break;
                      }
                      return (
                        (r.next = 14),
                        e.$sdk.can([l.API.requirePrivacyAuthorize])
                      );
                    case 14:
                      if (((r.t1 = r.sent), r.t1)) {
                        r.next = 17;
                        break;
                      }
                      r.t1 = i.wx$1.requirePrivacyAuthorize;
                    case 17:
                      if (!r.t1) {
                        r.next = 26;
                        break;
                      }
                      return (
                        (r.next = 20), i.to(e.$sdk.requirePrivacyAuthorize())
                      );
                    case 20:
                      if (((s = r.sent), (p = t(s, 1)), !(v = p[0]))) {
                        r.next = 25;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        void m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-PRIVACYAUTH-FAIL",
                          {
                            ext2: JSON.stringify(v),
                            ext3:
                              (null == (n = i.index.getSystemInfoSync())
                                ? void 0
                                : n.SDKVersion) || "",
                          }
                        )
                      );
                    case 25:
                      m.aegisReporter.reportEvent(
                        "MONITOR-APPLY-VIDEO-PRIVACYAUTH-SUC"
                      );
                    case 26:
                      return (r.prev = 26), (r.next = 29), e.checkAuthorized();
                    case 29:
                      r.next = 35;
                      break;
                    case 31:
                      return (
                        (r.prev = 31),
                        (r.t2 = r.catch(26)),
                        (g = r.t2.device),
                        r.abrupt(
                          "return",
                          void f.Dialog({ message: "".concat(g, "启用失败") })
                        )
                      );
                    case 35:
                      return r.abrupt(
                        "return",
                        ((e.curStatus = c.MEDIA_STATUS.RECORDING),
                        void e.setLocalApplyInfo({
                          video: c.VIDEO_STATUS.UNSET,
                        }))
                      );
                    case 36:
                      if (
                        ("h5-weixin" === V &&
                          (e.isShowMpLabel &&
                            m.aegisReporter.reportEvent(
                              "MONITOR-APPLY-VIDEO-WXLAUNCHMP-FAIL"
                            ),
                          (e.isShowMpLabel = !1)),
                        (e.isPending = !0),
                        setTimeout(function () {
                          e.isPending = !1;
                        }, 1e3),
                        (h = e.videoInfo.words),
                        e.videoMode === c.INTENTION_VIDEO_TYPE.VOICE &&
                          i.lt(A, "9.2.0") &&
                          (e.videoMode = c.INTENTION_VIDEO_TYPE.WORDS),
                        (I = {}),
                        e.videoMode !== c.INTENTION_VIDEO_TYPE.VOICE)
                      ) {
                        r.next = 45;
                        break;
                      }
                      (x =
                        (null == (a = e.ttsVoiceInfo) ? void 0 : a.value) ||
                        e.ttsVoiceInfo),
                        e.useVoiceTts && x
                          ? (I = e.getZxgTtsVideoConfig(x))
                          : Object.assign(
                              I,
                              { version: "3" },
                              u.getVoiceVideoConfig({ applyInfo: e.applyInfo })
                            ),
                        (r.next = 57);
                      break;
                    case 45:
                      if (e.videoMode !== c.INTENTION_VIDEO_TYPE.WORDS) {
                        r.next = 49;
                        break;
                      }
                      (r.t3 = h || e.curStepConf.sentence), (r.next = 52);
                      break;
                    case 49:
                      return (r.next = 51), d.applyCgi.getVideoLipCode();
                    case 51:
                      r.t3 = r.sent;
                    case 52:
                      (T = r.t3),
                        (b = 0),
                        (b =
                          T.length >= 12
                            ? Math.round(T.length / 2.5 + 2)
                            : T.length - 3),
                        4,
                        (b = Math.max(b, 4)),
                        (I = { maxlength: b, sentence: T });
                    case 57:
                      return (
                        (r.prev = 57),
                        (r.next = 60),
                        e.videoController.capture(I)
                      );
                    case 60:
                      (E = r.sent)
                        ? e.previewVideo(E)
                        : m.aegisReporter.reportEvent(
                            "MONITOR-APPLY-VIDEO-CAPTURE-EMPTY"
                          ),
                        (r.next = 70);
                      break;
                    case 64:
                      if (
                        ((r.prev = 64),
                        (r.t4 = r.catch(57)),
                        "zxg" !== V ||
                          !/12\d\d\d/.test(
                            null == r.t4 ? void 0 : r.t4.err_code
                          ))
                      ) {
                        r.next = 68;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        (e.setDegraded(),
                        f.Dialog({
                          message: "录制异常，请重新录制",
                          confirmButtonText: "重新录制",
                          onConfirm: function () {
                            e.processIntentionVideo(),
                              m.aegisReporter.reportEvent(
                                "MONITOR-APPLY-VIDEO-DEGRADE-RETRY"
                              );
                          },
                        }),
                        void m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-DEGRADE"
                        ))
                      );
                    case 68:
                      (S = r.t4 instanceof Error),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-CAPTURE-ERROR",
                          {
                            ext4: S
                              ? "JS_ERROR"
                              : null == r.t4
                              ? void 0
                              : r.t4.err_code,
                            ext5: S
                              ? r.t4.message
                              : (null == r.t4 ? void 0 : r.t4.err_msg) ||
                                String(r.t4),
                          }
                        );
                    case 70:
                    case "end":
                      return r.stop();
                  }
              },
              o,
              null,
              [
                [3, 8],
                [26, 31],
                [57, 64],
              ]
            );
          })
        )();
      },
      previewVideo: function (e, t) {
        var i = this;
        return o(
          r().mark(function o() {
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (!i.supportAutoUpload) {
                      r.next = 2;
                      break;
                    }
                    return r.abrupt(
                      "return",
                      t
                        ? void (i.isModifyMode || (i.isShowMpLabel = !1))
                        : void i.nextStep()
                    );
                  case 2:
                    if (
                      ((i.curStatus = c.MEDIA_STATUS.PREVIEW), (r.t0 = e), r.t0)
                    ) {
                      r.next = 8;
                      break;
                    }
                    return (r.next = 7), i.previewServerVideo();
                  case 7:
                    r.t0 = r.sent;
                  case 8:
                    i.videoSrc = r.t0;
                  case 9:
                  case "end":
                    return r.stop();
                }
            }, o);
          })
        )();
      },
      previewServerVideo: function () {
        return o(
          r().mark(function e() {
            var t, o;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = d.applyCgi.getMediaSrcUrl(d.ACTION.VIDEO_DOWNLOAD)),
                      (e.next = 3),
                      new Promise(function (e, r) {
                        i.wx$1
                          .downloadFile({
                            url: t,
                            success: function (t) {
                              e(t);
                            },
                            fail: function (e) {
                              r(e);
                            },
                          })
                          .onProgressUpdate(function (e) {});
                      })
                    );
                  case 3:
                    return (
                      (o = e.sent), e.abrupt("return", (t = o.tempFilePath))
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      getVideoFromServer: function (e) {
        return new Promise(function (t, r) {
          var o = new XMLHttpRequest();
          o.open("GET", e, !0),
            (o.responseType = "blob"),
            (o.onreadystatechange = function () {
              if (4 === o.readyState)
                if (200 === o.status) {
                  var e = o.response;
                  t(URL.createObjectURL(e));
                } else r(new Error("视频加载失败: HTTP ".concat(o.status)));
            }),
            o.send(null);
        });
      },
      uploadVideo: function () {
        var e = this;
        return o(
          r().mark(function t() {
            var o,
              n,
              a,
              s,
              p,
              l,
              v,
              g,
              h,
              I,
              x,
              T,
              b,
              E,
              S,
              O,
              D,
              A,
              P,
              R,
              M,
              y,
              C,
              k,
              L;
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        i.index.showLoading({ mask: !0, title: "提交中" }),
                        (e.isPending = !0),
                        (s = d.applyCgi.getFullApplyUrl(d.ACTION.VIDEO_UPLOAD)),
                        (p = {
                          action: d.ACTION.VIDEO_UPLOAD,
                          apply_noflex_check: e.abtApplyFlexible ? 1 : "",
                          is_pre_review_abt: e.isPreReviewAbt ? 1 : 0,
                        }),
                        e.videoMode === c.INTENTION_VIDEO_TYPE.VOICE &&
                          ((l =
                            (null == (o = e.ttsVoiceInfo) ? void 0 : o.value) ||
                            e.ttsVoiceInfo),
                          (v =
                            e.useVoiceTts && l
                              ? l
                              : u.getVoiceVideoConfig({
                                  applyInfo: e.applyInfo,
                                })),
                          (g = v.voice1),
                          (h = void 0 === g ? {} : g),
                          (I = v.voice2),
                          (x = void 0 === I ? {} : I),
                          (T = v.voiceCountdown),
                          (b = void 0 === T ? 0 : T),
                          (E = v.voiceInterval),
                          (S = void 0 === E ? 0 : E),
                          (O = v.ttsLen),
                          (D = void 0 === O ? 0 : O),
                          (A = v.voiceTtsLen),
                          (P = void 0 === A ? 0 : A),
                          (R = v.isTtsNameFallback),
                          (M = void 0 !== R && R),
                          (y = D || P),
                          (C = e.useVoiceTts ? Math.max(Number(S || 0), 0) : 0),
                          Object.assign(p, {
                            broadcast_duration:
                              1e3 * ((h.length || 0) + C + (x.length || 0)),
                            user_answer_duration: 1e3 * b,
                          }),
                          e.useVoiceTts &&
                            y &&
                            Object.assign(p, { tts_len: y }),
                          e.useVoiceTts &&
                            M &&
                            Object.assign(p, { is_tts_name: 1 })),
                        (t.prev = 3),
                        e.$stat.click("trade.apply.video.upload"),
                        (t.next = 7),
                        e.videoController.upload(s, p)
                      );
                    case 7:
                      if (
                        (i.index.hideLoading(),
                        (e.isPending = !1),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIEDO-VIEDOUPLOAD-SUC"
                        ),
                        (e.faceDetectFailCount = 0),
                        !e.isMPforH5)
                      ) {
                        t.next = 15;
                        break;
                      }
                      (e.mpExitDialogText = "你已成功上传开户意愿视频"),
                        (e.isShowMpExitDialog = !0),
                        (t.next = 23);
                      break;
                    case 15:
                      return (t.next = 17), e.checkIntentionVideo();
                    case 17:
                      if (!e.supportAutoUpload) {
                        t.next = 19;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void e.goNextStepAfterSubmit({ type: "replace" })
                      );
                    case 19:
                      if (
                        ((k = e.$route.query.record_video_mode),
                        (L = void 0 === k ? "" : k),
                        !w || "h5" !== L || "h5-weixin" !== V)
                      ) {
                        t.next = 22;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void window.wx.miniProgram.redirectTo({
                          url: "/pages/apply/video-success",
                        })
                      );
                    case 22:
                      f.Dialog({
                        message: "你已成功上传开户意愿视频",
                        onConfirm: function () {
                          e.goNextStepAfterSubmit();
                        },
                      });
                    case 23:
                      t.next = 32;
                      break;
                    case 25:
                      if (
                        ((t.prev = 25),
                        (t.t0 = t.catch(3)),
                        i.index.hideLoading(),
                        (e.isPending = !1),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-UPLOAD-FAIL",
                          {
                            ext2: JSON.stringify(t.t0 || {}),
                            ext3: e.resolution,
                          }
                        ),
                        "51091403" !== (null == t.t0 ? void 0 : t.t0.retcode) &&
                          !(null == (n = null == t.t0 ? void 0 : t.t0.errmsg)
                            ? void 0
                            : n.includes("timeout")) &&
                          !(null == (a = null == t.t0 ? void 0 : t.t0.errmsg)
                            ? void 0
                            : a.includes("TIMED_OUT")) &&
                          413 != +(null == t.t0 ? void 0 : t.t0.statusCode))
                      ) {
                        t.next = 29;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((e.resolution = "low"),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-UPLOAD-RESOLUTION-DOWNGRADE"
                        ),
                        void f.Dialog({
                          message: t.t0.retmsg || "视频体积超大 请重新录制",
                          onConfirm: function () {
                            return e.reRecordVideo();
                          },
                        }))
                      );
                    case 29:
                      if (!(null == t.t0 ? void 0 : t.t0.retmsgHtml)) {
                        t.next = 31;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((e.customDialogHtml = t.t0.retmsgHtml),
                        void (e.isShowCustomDialog = !0))
                      );
                    case 31:
                      f.Dialog({
                        message: t.t0.retmsg || "系统异常 请稍后再试",
                      });
                    case 32:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[3, 25]]
            );
          })
        )();
      },
      checkIntentionVideo: function () {
        var e = this;
        return o(
          r().mark(function t() {
            var o;
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        "h5-weixin" === V &&
                        e.isShowMpLabel &&
                        (document.hidden || (!e.isMpLaunched && !P))
                      ) {
                        t.next = 16;
                        break;
                      }
                      return (
                        (t.prev = 1),
                        i.index.showLoading({ mask: !0 }),
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-CHECK-START"
                        ),
                        (t.next = 5),
                        e.commitApplyData(d.ACTION.VIDEO_RESULT)
                      );
                    case 5:
                      (t.t0 = t.sent.video_result), (o = "1" === t.t0);
                      try {
                        m.aegisReporter.reportEvent(
                          "MONITOR-APPLY-VIDEO-CHECKRESULT-" +
                            (o ? "SUC" : "FAIL"),
                          {
                            ext2: e.videoMode,
                            ext3: e.isShowMpLabel ? "1" : "0",
                          }
                        );
                      } catch (e) {}
                      if (o) {
                        t.next = 10;
                        break;
                      }
                      throw { retmsg: "视频验证失败 请重新录制" };
                    case 10:
                      e.setLocalApplyInfo({ video: c.VIDEO_STATUS.UPLOADED }),
                        e.stat("trade.apply.video.upload_success"),
                        e.isShowMpLabel && e.goNextStepAfterSubmit(),
                        i.index.hideLoading(),
                        (t.next = 16);
                      break;
                    case 13:
                      (t.prev = 13),
                        (t.t1 = t.catch(1)),
                        i.index.hideLoading(),
                        (e.videoId = "5-2"),
                        f.Dialog({
                          selector: "#check-fail",
                          message: t.t1.retmsg || "网络繁忙 请稍后再试",
                        });
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 13]]
            );
          })
        )();
      },
      reRecordVideo: function () {
        var e = this;
        (this.curStatus = c.MEDIA_STATUS.UNSET),
          (this.isShowCustomDialog = !1),
          (this.customDialogHtml = ""),
          this.setLocalApplyInfo({ video: c.VIDEO_STATUS.UNSET }),
          this.$nextTick(function () {
            e.processIntentionVideo();
          }),
          this.$stat.click("trade.apply.video.restart"),
          m.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-RERECORD-CLICK");
      },
      stat: function (e) {
        this.$stat.click(e),
          this.isRecoverMode || this.$stat.click("".concat(e, ".first"));
      },
      onLoadVideoFailed: function (e) {
        m.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-LOADSRC-FAIL", {
          ext2: JSON.stringify(e || {}),
          ext3: this.videoSrc,
        });
      },
      nextStep: function () {
        this.isVideoSet
          ? this.isMPforH5
            ? ((this.mpExitDialogText = "你已成功上传开户意愿视频"),
              (this.isShowMpExitDialog = !0))
            : this.goNextStepAfterSubmit()
          : this.uploadVideo(),
          m.aegisReporter.reportEvent(
            "MONITOR-APPLY-VIDEO-PREVIEW-NEXT-CLICK",
            { ext2: this.isVideoSet ? "navigate" : "upload" }
          );
      },
      toLctApplyTransferPlugin: function () {
        m.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-2-PLUGIN");
        var e = "plugin://wzq-plugin/lctApplyTransfer?dealercode=".concat(
          S.brokerConfig.base.code,
          "&target=video"
        );
        window.wx.miniProgram.navigateTo({ url: e });
      },
      handleCancelCheckFailDialog: function () {
        f.Dialog.hide({ selector: "#check-fail" });
      },
      launchSuccess4CheckFail: function () {
        this.launchSuccess(), this.handleCancelCheckFailDialog();
      },
      reRecordVideo4CheckFail: function () {
        this.reRecordVideo(), this.handleCancelCheckFailDialog();
      },
    },
    onShow: function () {
      var e, t;
      null == (t = null == (e = i.wx$1) ? void 0 : e.hideHomeButton) ||
        t.call(e);
    },
  };
Array ||
  (
    i.resolveComponent("digital-human") +
    i.resolveComponent("progress-bar") +
    i.resolveComponent("pre-review-modify-card") +
    i.resolveComponent("FootPrint") +
    i.resolveComponent("StepButtons") +
    i.resolveComponent("mp-launcher") +
    i.resolveComponent("MpExitDialog") +
    i.resolveComponent("mp-video") +
    i.resolveComponent("mp-dialog") +
    i.resolveComponent("ApplyWrap") +
    i.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/MpExitDialog/MpExitDialog.js";
      } +
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var C = i._export_sfc(y, [
  [
    "render",
    function (e, t, r, o, n, a) {
      return i.e(
        { a: e.rootFontSize, b: o.curStatus === o.STATUS.UNSET },
        o.curStatus === o.STATUS.UNSET
          ? i.e(
              { c: o.isSupportDigitalHuman },
              o.isSupportDigitalHuman
                ? {
                    d: i.sr("digitalHumanRef", "ef8b168d-2,ef8b168d-1"),
                    e: i.p({ videoId: o.videoId }),
                  }
                : {},
              {
                f: i.p({ "step-name": o.curStepInfo.name }),
                g: o.isPreReviewAbt && o.isModifyMode,
              },
              o.isPreReviewAbt && o.isModifyMode
                ? { h: i.p({ "step-key": "video" }) }
                : {},
              {
                i: i.n(o.isSupportDigitalHuman ? "section-content" : ""),
                j: i.o(a.onIntentionVideoRecordClick),
                k: i.o(e.launchSuccess),
                l: i.o(e.launchError),
                m: i.p({
                  stat: "videostart",
                  fixed: !0,
                  "hide-prev-button": o.isMPforH5,
                  "disable-next-button": o.isPending,
                  "enable-mp-launcher": e.isShowMpLabel && !o.isLctXcx,
                  "mp-launcher-origin-id": e.mpOriginId,
                  "mp-launcher-path": o.mpPath,
                  "show-safe-icon": !0,
                  "custom-class": "button-custom",
                  "next-button-text": "我是本人，开始录制",
                }),
              }
            )
          : o.curStatus === o.STATUS.PREVIEW
          ? i.e(
              { o: i.p({ "step-name": o.curStepInfo.name }), p: o.videoSrc },
              o.videoSrc
                ? {
                    q: o.videoSrc,
                    r: o.poster,
                    s: i.o(function () {
                      return (
                        a.onLoadVideoFailed &&
                        a.onLoadVideoFailed.apply(a, arguments)
                      );
                    }),
                  }
                : {},
              {
                t: i.o(function () {
                  return a.reRecordVideo && a.reRecordVideo.apply(a, arguments);
                }),
                v: i.o(e.launchSuccess),
                w: i.o(e.launchError),
                x: i.p({
                  enabled: e.isShowMpLabel && !o.isLctXcx,
                  username: e.mpOriginId,
                  path: o.mpPath,
                }),
                y: i.o(a.nextStep),
                z: i.p({
                  stat: "videopreview",
                  "hide-prev-button": o.isMPforH5,
                  "disable-next-button": o.isPending || o.isCompressing,
                  "next-button-text": o.isCompressing
                    ? "视频压缩中"
                    : o.isVideoSet
                    ? "下一步"
                    : "开始上传",
                }),
              }
            )
          : {},
        {
          n: o.curStatus === o.STATUS.PREVIEW,
          A: i.o(function (e) {
            return (o.isShowMpExitDialog = e);
          }),
          B: i.p({ value: o.isShowMpExitDialog, content: o.mpExitDialogText }),
          C: i.o(a.stat),
          D: i.o(a.previewVideo),
          E: i.o(o.onFaceDetectFail),
          F: i.p({
            "parent-status": o.curStatus,
            "voice-info": o.videoVoiceInfo,
            isMPforH5: o.isMPforH5,
            "enable-face-detect": o.showFaceDetect,
            resolution: o.resolution,
            "faster-broadcast-speed": o.useFasterBroadcastSpeed,
          }),
          G: o.customDialogHtml,
          H: i.o(function () {
            return a.reRecordVideo && a.reRecordVideo.apply(a, arguments);
          }),
          I: i.o(e.launchSuccess),
          J: i.o(e.launchError),
          K: i.p({
            enabled: e.isShowMpLabel && !o.isLctXcx,
            username: e.mpOriginId,
            path: o.mpPath,
          }),
          L: i.p({
            visible: o.isShowCustomDialog,
            "show-confirm-button": !1,
            title: "视频检测不通过",
          }),
          M: i.o(function () {
            return (
              a.handleCancelCheckFailDialog &&
              a.handleCancelCheckFailDialog.apply(a, arguments)
            );
          }),
          N: i.o(function () {
            return (
              a.reRecordVideo4CheckFail &&
              a.reRecordVideo4CheckFail.apply(a, arguments)
            );
          }),
          O: i.o(a.launchSuccess4CheckFail),
          P: i.o(e.launchError),
          Q: i.p({
            enabled: e.isShowMpLabel && !o.isLctXcx,
            username: e.mpOriginId,
            path: o.mpPath,
          }),
          R: i.p({ id: "check-fail" }),
          S: i.p({ id: "mp-dialog" }),
          T: i.n(o.simpleMode ? "page-apply-video__simple-mode" : ""),
          U: i.sr("#global-wrap", "ef8b168d-0"),
          V: i.p({
            id: "global-wrap",
            filePath: "/apply/video",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-ef8b168d"],
]);
wx.createPage(C);
