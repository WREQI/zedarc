require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../@babel/runtime/helpers/Objectvalues");
var i,
  a = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var s = require("../../../common/vendor.js"),
  o = require("../../../config/enum.js"),
  n = require("../../../cgi/apply.js"),
  u = require("../../../model/apply/idcard/index.js"),
  c = require("../../../model/apply/useDegradation.js"),
  S = require("../../../service/sdk/lib/enum.js");
require("../../../service/sdk/lib/api.js"),
  require("../../../service/sdk/platform/mp-weixin.js");
var l = require("../../../utils/getPlatform.js"),
  d = require("../../../model/apply/profile/utils/index.js"),
  p = require("../../../service/aegis/platform/not-wujie.js"),
  A = require("../../../config/key.js"),
  T = require("../../../model/apply/utils/timing.js"),
  m = require("../../../utils/imgCompressor.js");
require("../../../service/broker.js");
var D,
  I = require("../../../utils/index.js"),
  h = require("../../../stores/app/useMode.js"),
  f = require("../../../common/components/Dialog/index.js"),
  g = require("../../../model/apply/useOomDetect.js"),
  _ = require("../../../stores/apply/useIdCardQuickImport.js"),
  C = require("../../../model/apply/useApply.js"),
  E = require("../../../model/apply/useApplyStep.js"),
  U = require("../../../config/broker/11100/index.js"),
  v = l.getPlatform(),
  O = v.bizPlatformVer,
  R = v.isZxg,
  L = v.bizPlatform,
  M = v.isMiniProgram,
  P = v.isMpPlugin,
  y = global.getVm().globalData;
D = "dark" === (void 0 === y ? {} : y).theme;
var N = new T.Timing(),
  b = g.useOomDetect(),
  x =
    (a((i = {}), o.IDCARD_SIDE.FRONT, {
      sideName: "人像面",
      exampleSrc: D
        ? "https://st.gtimg.com/image/mp-broker/apply/idcard/front-placeholder-dark.png"
        : "https://st.gtimg.com/image/mp-broker/apply/idcard/front-placeholder.png",
      uploadAction: n.ACTION.IDCARD_UPLOAD_FRONT,
      downloadUrl: function (e) {
        return n.applyCgi.getMediaSrcUrl(n.ACTION.IDCARD_DOWNLOAD_FRONT, e);
      },
    }),
    a(i, o.IDCARD_SIDE.BACK, {
      sideName: "国徽面",
      exampleSrc: D
        ? "https://st.gtimg.com/image/mp-broker/apply/idcard/back-placeholder-dark.png"
        : "https://st.gtimg.com/image/mp-broker/apply/idcard/back-placeholder.png",
      uploadAction: n.ACTION.IDCARD_UPLOAD_BACK,
      downloadUrl: function (e) {
        return n.applyCgi.getMediaSrcUrl(n.ACTION.IDCARD_DOWNLOAD_BACK, e);
      },
    }),
    i),
  k = [
    {
      content: "扫描或拍照",
      sourceType: S.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
      stat: "trade.apply.idcard.source_camera",
    },
    {
      content: "从手机相册选择",
      sourceType: S.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
      stat: "trade.apply.idcard.source_album",
    },
  ],
  w = [
    {
      content: "拍照",
      sourceType: S.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
      stat: "trade.apply.idcard.source_camera_mini",
    },
    {
      content: "从手机相册选择",
      sourceType: S.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
      stat: "trade.apply.idcard.source_album_mini",
    },
  ];
R && s.lt(O, "10.4.0") && (k[0].content = "拍照");
var F = 0,
  j = {
    components: {
      StLoading: function () {
        return "../../../common/components/Loading/index.js";
      },
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      side: {
        type: String,
        required: !0,
        validator: function (e) {
          return Object.values(o.IDCARD_SIDE).includes(e);
        },
      },
      disabled: { type: Boolean, default: !1, required: !0 },
      isSet: { type: Boolean, required: !0 },
      initDelayTime: { type: Number, default: 0 },
      mode: { type: String, required: R, default: o.IDCARD_OCR_TYPE.CREDIT },
      anotherStatus: { type: Object, required: !0 },
      preReviewFail: { type: Boolean, default: !1 },
    },
    setup: function (e) {
      var i = s.getCurrentInstance().proxy,
        a = C.useApply(),
        n = a.curStepConf,
        l = a.abtApplyFlexible,
        d = E.useApplyStep().isPreReviewAbt,
        p =
          e.side === o.IDCARD_SIDE.FRONT
            ? o.IDCARD_SIDE.BACK
            : o.IDCARD_SIDE.FRONT,
        A = s.storeToRefs(h.useModeStore()).simpleMode,
        T = s.storeToRefs(_.useIdCardQuickImport()).isAutoImport,
        m = _.useIdCardQuickImport();
      A.value &&
        ((x[o.IDCARD_SIDE.FRONT].exampleSrc =
          "https://st.gtimg.com/image/mp-broker/apply/idcard/front-placeholder-simple.jpg"),
        (x[o.IDCARD_SIDE.BACK].exampleSrc =
          "https://st.gtimg.com/image/mp-broker/apply/idcard/back-placeholder-simple.jpg"));
      var D = s.ref(o.MEDIA_STATUS.UNSET),
        I = s.ref(o.MEDIA_STATUS.UNSET),
        f = s.ref(o.MEDIA_STATUS.UNSET),
        g = s.computed(function () {
          return e.preReviewFail;
        }),
        U = s.ref(""),
        v = s.computed(function () {
          return U.value && D.value !== o.MEDIA_STATUS.OUTDATED;
        }),
        O = s.inject("showDialog"),
        L = s.ref(!1),
        M = n.source || [
          S.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
          S.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
        ],
        y = k.filter(function (e) {
          return M.includes(e.sourceType);
        });
      P &&
        (y = w.filter(function (e) {
          return M.includes(e.sourceType);
        }));
      var N = s.ref({}),
        b = c.useDegradation(new u.MpController(e.side), {}),
        F = b.setDegraded,
        j = b.service;
      s.onMounted(function () {
        s.index.$on(
          "updateIdcard_".concat(e.side),
          (function () {
            var e = r(
              t().mark(function e(r) {
                var a, s;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = r.image),
                          (s = r.ocrInfo),
                          j.value.setPhotoSrc(a),
                          (e.next = 4),
                          i.handleImage(a, s)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        );
      }),
        s.nextTick$1(function () {
          s.watch(
            function () {
              return e.isSet;
            },
            function (e) {
              e && i.initProcess();
            },
            { immediate: !0 }
          );
        }),
        s.watch(
          function () {
            return m.isPulling;
          },
          function (t) {
            t &&
              [o.MEDIA_STATUS.UNSET, o.MEDIA_STATUS.FAIL].includes(D.value) &&
              (D.value = o.MEDIA_STATUS.LOADING),
              t ||
                D.value !== o.MEDIA_STATUS.LOADING ||
                e.isSet ||
                (m.ocrFailMsg
                  ? (D.value = o.MEDIA_STATUS.FAIL)
                  : (D.value = o.MEDIA_STATUS.UNSET));
          },
          { immediate: !0 }
        );
      var q = s.computed(function () {
          return "apply_idcard_load_".concat(e.side);
        }),
        $ = s.computed(function () {
          var e = m.pullStatus;
          return e === _.PULL_STATUS.PULL_FAIL
            ? "身份证照片导入不成功"
            : e === _.PULL_STATUS.OCR_FAIL_RETRY ||
              e === _.PULL_STATUS.OCR_FAIL_NO_RETRY
            ? "身份证照片不符合开户要求"
            : "身份证照片不符合要求";
        });
      return {
        STATUS: o.MEDIA_STATUS,
        anotherSide: p,
        config: x[e.side],
        showDialog: O,
        curStatus: D,
        idSrc: U,
        isShowIdPic: v,
        mController: j,
        eventbusKey: q,
        isZxg: R,
        isSheetShow: L,
        sheetItem: y,
        imgSize: N,
        isAutoImport: T,
        setDegraded: F,
        firstAutoStatus: I,
        manualStatus: f,
        failTip: $,
        showPreReviewFail: g,
        featureMiniAppUseCustomChooseImage: !0,
        abtApplyFlexible: l,
        isPreReviewAbt: d,
      };
    },
    watch: {
      firstAutoStatus: {
        handler: function (e) {
          this.$emit("firstStatusChange", this.side, e);
        },
        immediate: !0,
      },
      manualStatus: {
        handler: function (e) {
          this.$emit("manualStatusChange", this.side, e);
        },
        immediate: !0,
      },
    },
    methods: {
      initProcess: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var i, a, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e.mController) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void e.$log.error("没有对应图片流程控制器实例")
                      );
                    case 2:
                      return (
                        (i = Date.now()),
                        (t.prev = 3),
                        (e.curStatus = o.MEDIA_STATUS.LOADING),
                        (e.firstAutoStatus = o.MEDIA_STATUS.LOADING),
                        (t.next = 8),
                        e.load()
                      );
                    case 8:
                      (a = _.useIdCardQuickImport()),
                        [
                          _.PULL_STATUS.OCR_FAIL_RETRY,
                          _.PULL_STATUS.OCR_FAIL_NO_RETRY,
                        ].includes(a.pullStatus)
                          ? (e.$emit(
                              "check",
                              e.side,
                              !1,
                              e.isAutoImport ? "auto" : "manual"
                            ),
                            (e.curStatus = o.MEDIA_STATUS.FAIL),
                            (e.firstAutoStatus = o.MEDIA_STATUS.FAIL))
                          : (e.$emit(
                              "check",
                              e.side,
                              !0,
                              e.isAutoImport ? "auto" : "manual"
                            ),
                            (e.curStatus = o.MEDIA_STATUS.SUCCESS),
                            (e.firstAutoStatus = o.MEDIA_STATUS.SUCCESS)),
                        (t.next = 15);
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t.catch(3)),
                        (null == t.t0 ? void 0 : t.t0.status) ===
                        o.MEDIA_STATUS.CANCEL
                          ? ((e.curStatus = o.MEDIA_STATUS.UNSET),
                            (e.firstAutoStatus = o.MEDIA_STATUS.UNSET))
                          : ((e.curStatus =
                              (null == t.t0 ? void 0 : t.t0.status) ||
                              o.MEDIA_STATUS.FAIL),
                            (e.firstAutoStatus =
                              (null == t.t0 ? void 0 : t.t0.status) ||
                              o.MEDIA_STATUS.FAIL));
                    case 15:
                      (s = Date.now() - i),
                        e.$stat.click("trade.apply.idcard.idcard_download"),
                        p.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-DOWNLOAD",
                          { ext2: s, ext3: e.side }
                        ),
                        p.aegisReporter.reportTime(
                          "MONITOR-APPLY-IDCARD-DOWNLOAD-TIME",
                          s,
                          { ext2: e.side }
                        );
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[3, 12]]
            );
          })
        )();
      },
      selectPicture: function () {
        this.$emit("onIdCardPhotoClick", this.side),
          this.$emit("changeShowIdcard", !0),
          this.mController
            ? this.disabled ||
              [o.MEDIA_STATUS.LOADING].includes(this.curStatus) ||
              (this.isZxg
                ? 1 === this.sheetItem.length
                  ? this.chooseZxgSource(this.sheetItem[0])
                  : (this.isSheetShow = !0)
                : P && this.featureMiniAppUseCustomChooseImage
                ? (this.isSheetShow = !0)
                : this.process({ sourceType: this.sourceType }))
            : this.$log.error("没有对应图片流程控制器实例");
      },
      chooseZxgSource: function (e) {
        var t = e.sourceType,
          r = e.stat;
        r && this.$stat.click(r), this.process({ sourceType: t });
      },
      process: function (i) {
        var a = this;
        return r(
          t().mark(function r() {
            var n,
              u,
              c,
              l,
              d,
              T,
              D,
              h,
              g,
              _,
              C,
              E,
              v,
              O,
              L,
              y,
              N,
              x,
              k,
              w,
              F,
              j;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = i.sourceType),
                        (t.prev = 1),
                        b.hookMarkStart(A.APPLY_IDCARD_OOM_DETECT),
                        (t.next = 5),
                        a.mController.capture(
                          e(
                            { mode: a.mode, sourceType: n },
                            a.featureMiniAppUseCustomChooseImage
                              ? {
                                  side: a.side,
                                  useCustomChooseImage:
                                    n === S.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
                                }
                              : {}
                          )
                        )
                      );
                    case 5:
                      if (
                        ((h = t.sent),
                        b.hookMarkEnd(A.APPLY_IDCARD_OOM_DETECT),
                        (a.imgSize =
                          h instanceof Object ? {} : I.calcBase64ImgSize(h)),
                        (C =
                          null ==
                          (l =
                            null ==
                            (c =
                              null == (u = U.brokerConfig.apply)
                                ? void 0
                                : u.stepConfig)
                              ? void 0
                              : c.idcard)
                            ? void 0
                            : l.needCompress),
                        (E =
                          (null ==
                          (D =
                            null ==
                            (T =
                              null == (d = U.brokerConfig.apply)
                                ? void 0
                                : d.stepConfig)
                              ? void 0
                              : T.idcard)
                            ? void 0
                            : D.targetSize) || 6.5),
                        !C || M || a.mode === o.IDCARD_OCR_TYPE.SHANGTANG)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (
                        (t.next = 12),
                        m.compressImgWithCanvas({
                          imageFile: h,
                          targetSize: E,
                          bizType: "APPLY",
                        })
                      );
                    case 12:
                      (v = t.sent),
                        (O = v.image),
                        (h = O),
                        a.mController.setPhotoSrc(h);
                    case 15:
                      if (!C || !M) {
                        t.next = 21;
                        break;
                      }
                      return (
                        (t.next = 18),
                        m.compressImgForMiniProgram({
                          src: String(h),
                          quality: 50,
                          targetSize: E,
                          bizType: "APPLY",
                        })
                      );
                    case 18:
                      (L = t.sent),
                        (y = L.tempFilePath),
                        (h = y),
                        a.mController.setPhotoSrc(h);
                    case 21:
                      if (!C || !R || a.mode !== o.IDCARD_OCR_TYPE.SHANGTANG) {
                        t.next = 36;
                        break;
                      }
                      (N = [o.IDCARD_SIDE.FRONT, o.IDCARD_SIDE.BACK]),
                        (x = 0),
                        (k = N);
                    case 24:
                      if (!(x < k.length)) {
                        t.next = 35;
                        break;
                      }
                      if (((w = k[x]), !h[w])) {
                        t.next = 32;
                        break;
                      }
                      return (
                        (t.next = 29),
                        m.compressImgWithCanvas({
                          imageFile: h[w].image,
                          targetSize: E,
                          bizType: "APPLY",
                        })
                      );
                    case 29:
                      (F = t.sent), (j = F.image), (h[w].image = j);
                    case 32:
                      x++, (t.next = 24);
                      break;
                    case 35:
                      a.mController.setPhotoSrc(h);
                    case 36:
                      t.next = 43;
                      break;
                    case 38:
                      if (
                        ((t.prev = 38),
                        (t.t0 = t.catch(1)),
                        b.hookMarkEnd(A.APPLY_IDCARD_OOM_DETECT),
                        t.t0.statusCode !== o.MEDIA_STATUS.CANCEL)
                      ) {
                        t.next = 42;
                        break;
                      }
                      return t.abrupt("return");
                    case 42:
                      return t.abrupt(
                        "return",
                        (p.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-CHOOSE-FAIL",
                          {
                            ext2: t.t0.retcode,
                            ext3: JSON.stringify(t.t0 || {}),
                          }
                        ),
                        void (t.t0.downgrade
                          ? (P
                              ? (a.featureMiniAppUseCustomChooseImage = !1)
                              : a.setDegraded(),
                            f.Dialog({
                              message: "服务异常，请重试",
                              confirmButtonText: "重试",
                              onConfirm: function () {
                                a.process({ sourceType: n }),
                                  p.aegisReporter.reportEvent(
                                    "MONITOR-APPLY-IDCARD-CHOOSE-DEGRADE-RETRY"
                                  );
                              },
                            }),
                            p.aegisReporter.reportEvent(
                              "MONITOR-APPLY-IDCARD-CHOOSE-DEGRADE"
                            ))
                          : a.showDialog(t.t0)))
                      );
                    case 43:
                      return (
                        h instanceof Object && h.front && h.back
                          ? ((g = h[a.side].image),
                            (_ = h[a.side].ocrInfo),
                            s.index.$emit(
                              "updateIdcard_".concat(a.anotherSide),
                              h[a.anotherSide]
                            ))
                          : (g = h),
                        (t.next = 46),
                        a.handleImage(g, _)
                      );
                    case 46:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[1, 38]]
            );
          })
        )();
      },
      handleImage: function (e, i) {
        var a = this;
        return r(
          t().mark(function r() {
            var s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (a.showDialog({ retmsg: "图片展示异常 请重试" }),
                        void p.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-IMGLOAD-EMPTY"
                        ))
                      );
                    case 2:
                      if (
                        ((t.prev = 2),
                        (a.curStatus = o.MEDIA_STATUS.LOADING),
                        (a.manualStatus = o.MEDIA_STATUS.LOADING),
                        a.$emit("changeIdcardStatus", o.MEDIA_STATUS.LOADING),
                        a.load(e).catch(function (e) {}),
                        (s = i))
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (
                        a.$emit("check", a.side, !1, "manual"),
                        (t.prev = 7),
                        N.start(),
                        (t.next = 11),
                        a.upload()
                      );
                    case 11:
                      s = t.sent;
                    case 12:
                      return (
                        (t.prev = 12),
                        N.stop(),
                        N.stat("trade.apply.idcard.upload_time", "load_time", {
                          side: a.side,
                        }),
                        t.finish(12)
                      );
                    case 15:
                      a.checkVerifyResult(s),
                        a.$emit("check", a.side, !0, "manual"),
                        (a.curStatus = o.MEDIA_STATUS.SUCCESS),
                        (a.manualStatus = o.MEDIA_STATUS.SUCCESS),
                        (t.next = 21);
                      break;
                    case 18:
                      (t.prev = 18),
                        (t.t0 = t.catch(2)),
                        a.$emit("changeIdcardStatus", o.MEDIA_STATUS.FAIL),
                        a.$emit(
                          "manualUploadFail",
                          (null == t.t0 ? void 0 : t.t0.retmsg) ||
                            (null == t.t0 ? void 0 : t.t0.message) ||
                            "上传失败，请重试"
                        ),
                        a.$emit("check", a.side, !1, "manual"),
                        (a.curStatus = o.MEDIA_STATUS.FAIL),
                        (a.manualStatus = o.MEDIA_STATUS.FAIL);
                    case 21:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [
                [2, 18],
                [7, , 12, 15],
              ]
            );
          })
        )();
      },
      load: function (e) {
        var t = this;
        return (
          e === this.idSrc && (this.idSrc = ""),
          new Promise(function (r, i) {
            var a = setTimeout(function () {
              s.index.$emit(t.eventbusKey, o.MEDIA_STATUS.FAIL);
            }, 1e4);
            s.index.$once(t.eventbusKey, function (e) {
              switch ((a && clearTimeout(a), e)) {
                case o.MEDIA_STATUS.SUCCESS:
                  return void r();
                case o.MEDIA_STATUS.CANCEL:
                  return void i({ status: o.MEDIA_STATUS.CANCEL });
                case o.MEDIA_STATUS.OUTDATED:
                case o.MEDIA_STATUS.FAIL:
                default:
                  i({ status: e, retmsg: "图片加载失败" });
              }
            }),
              t.$nextTick(function () {
                if (e) t.idSrc = e;
                else {
                  var r = _.useIdCardQuickImport(),
                    i = [
                      _.PULL_STATUS.OCR_FAIL_RETRY,
                      _.PULL_STATUS.OCR_FAIL_NO_RETRY,
                    ].includes(r.pullStatus)
                      ? "1"
                      : void 0;
                  t.idSrc = t.config.downloadUrl({ isDirect: i });
                }
              });
          })
        );
      },
      upload: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var i, a, s, u, c, S;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        e.uploadTime("start"),
                        (e.curStatus = o.MEDIA_STATUS.LOADING),
                        (s = n.applyCgi.getFullApplyUrl(e.config.uploadAction)),
                        (u = {
                          action: e.config.uploadAction,
                          src: n.RES_SRC.H5,
                          apply_noflex_check:
                            e.abtApplyFlexible ||
                            _.useIdCardQuickImport().abtNoflexCheck
                              ? 1
                              : "",
                          is_pre_review_abt: e.isPreReviewAbt ? 1 : 0,
                        }),
                        (t.prev = 2),
                        (t.next = 5),
                        e.mController.upload(s, u)
                      );
                    case 5:
                      (c = t.sent),
                        p.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-UPLOAD-SIZE-SUC",
                          {
                            ext2: L,
                            ext3: I.getBytesRange(
                              null == (i = e.imgSize) ? void 0 : i.fileSize
                            ),
                          }
                        ),
                        (t.next = 12);
                      break;
                    case 9:
                      throw (
                        ((t.prev = 9),
                        (t.t0 = t.catch(2)),
                        p.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-UPLOAD-FAIL",
                          {
                            ext2: t.t0.retcode,
                            ext3:
                              (null == t.t0 ? void 0 : t.t0.retmsg) ||
                              JSON.stringify(t.t0 || {}),
                          }
                        ),
                        p.aegisReporter.reportEvent(
                          "MONITOR-APPLY-IDCARD-UPLOAD-SIZE-FAIL",
                          {
                            ext2: L,
                            ext3: I.getBytesRange(
                              null == (a = e.imgSize) ? void 0 : a.fileSize
                            ),
                          }
                        ),
                        t.t0)
                      );
                    case 12:
                      if (!e.mController.isExtraOcrNeed()) {
                        t.next = 18;
                        break;
                      }
                      return (
                        (t.next = 15),
                        e.verify({ src: n.RES_SRC.WX, medid_id: c.serverId })
                      );
                    case 15:
                      (t.t1 = t.sent), (t.next = 19);
                      break;
                    case 18:
                      t.t1 = c;
                    case 19:
                      return (
                        (S = t.t1), e.uploadTime("end"), t.abrupt("return", S)
                      );
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[2, 9]]
            );
          })
        )();
      },
      uploadTime: function (e) {
        var t = new Date().getTime();
        if ("start" === e) F = t;
        else {
          var r = t - F;
          p.aegisReporter.reportEvent("MONITOR-APPLY-IDCARD-UPLOADCHECK-TIME", {
            ext2: r,
            ext3: this.side,
          }),
            p.aegisReporter.reportTime(
              "MONITOR-APPLY-IDCARD-UPLOADCHECK-TIME",
              r,
              { ext2: this.side }
            );
        }
      },
      onPictureLoadEnd: function () {
        this.$log.info(this.side, "pic loaded success"),
          s.index.$emit(this.eventbusKey, o.MEDIA_STATUS.SUCCESS);
      },
      onPictureLoadError: function (e) {
        var t;
        s.index.$emit(
          this.eventbusKey,
          /404/.test(null == (t = e.detail) ? void 0 : t.errMsg)
            ? o.MEDIA_STATUS.OUTDATED
            : o.MEDIA_STATUS.FAIL
        ),
          p.aegisReporter.reportEvent("MONITOR-APPLY-IDCARD-IMGLOAD-FAIL", {
            ext2: JSON.stringify(e || {}),
          });
      },
      verify: function (i) {
        var a = this;
        return r(
          t().mark(function r() {
            var s, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (u = e(
                          e({}, i),
                          {},
                          { is_pre_review_abt: a.isPreReviewAbt ? 1 : 0 }
                        )),
                        (t.next = 4),
                        n.applyCgi.processApplyAccount(a.config.uploadAction, u)
                      );
                    case 4:
                      (s = t.sent), (t.next = 10);
                      break;
                    case 7:
                      throw (
                        ((t.prev = 7),
                        (t.t0 = t.catch(0)),
                        {
                          status: o.MEDIA_STATUS.FAIL,
                          retmsg: t.t0.retmsg || "网络繁忙 请稍后再试",
                        })
                      );
                    case 10:
                      return t.abrupt("return", s);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[0, 7]]
            );
          })
        )();
      },
      checkVerifyResult: function (e) {
        if ("1" === e.need_retry) {
          var t = e.ocr_msg,
            r = (void 0 === t ? [] : t).map(function (e) {
              return e.msg;
            });
          throw (
            (this.$stat.click("trade.apply.idcard.check_ocr", void 0, void 0, {
              result: "fail",
            }),
            this.$stat.click("trade.apply.idcard.check_ocr_fail"),
            { status: o.MEDIA_STATUS.FAIL, type: "fail", msgs: r })
          );
        }
        var i = e.id_number_enc,
          a = e.name_enc,
          s = e.cred_address_enc,
          n = e.cred_valid,
          u = e.cred_authority_enc,
          c = d.base64toUtf8(i) || "",
          S = d.base64toUtf8(a) || "",
          l = d.base64toUtf8(s) || "",
          p = d.base64toUtf8(u) || "";
        this.$stat.click("trade.apply.idcard.check_ocr", void 0, void 0, {
          result: "success",
        }),
          this.$stat.click("trade.apply.idcard.check_ocr_success"),
          this.$emit("ocr", this.side, {
            id: c,
            name: S,
            address: l,
            valid: n,
            credAuthority: p,
          });
      },
    },
  };
Array ||
  (s.resolveComponent("st-loading") + s.resolveComponent("action-sheet"))();
var q = s._export_sfc(j, [
  [
    "render",
    function (e, t, r, i, a, o) {
      return s.e(
        {
          a: s.n(i.isShowIdPic ? "photo-set" : "phote-example"),
          b: i.isShowIdPic ? i.idSrc : i.config.exampleSrc,
          c: i.isShowIdPic ? "aspectFit" : "aspectFill",
          d: s.o(function () {
            return o.onPictureLoadEnd && o.onPictureLoadEnd.apply(o, arguments);
          }),
          e: s.o(function () {
            return (
              o.onPictureLoadError && o.onPictureLoadError.apply(o, arguments)
            );
          }),
          f: i.curStatus === i.STATUS.LOADING,
        },
        i.curStatus === i.STATUS.LOADING
          ? { g: s.p({ type: "spinner", size: "21px", color: "#fff" }) }
          : i.curStatus === i.STATUS.FAIL || i.showPreReviewFail
          ? { i: s.t(i.failTip) }
          : (i.curStatus, i.STATUS.OUTDATED, {}),
        {
          h: i.curStatus === i.STATUS.FAIL || i.showPreReviewFail,
          j: i.curStatus === i.STATUS.OUTDATED,
          k: i.curStatus === i.STATUS.UNSET,
        },
        (i.curStatus, i.STATUS.UNSET, {}),
        { l: [i.STATUS.SUCCESS].includes(i.curStatus) && !i.showPreReviewFail },
        ([i.STATUS.SUCCESS].includes(i.curStatus) && i.showPreReviewFail, {}),
        {
          m:
            [i.STATUS.FAIL, i.STATUS.OUTDATED].includes(i.curStatus) ||
            i.showPreReviewFail
              ? 1
              : "",
          n:
            [i.STATUS.LOADING, i.STATUS.FAIL, i.STATUS.OUTDATED].includes(
              i.curStatus
            ) || i.showPreReviewFail
              ? 1
              : "",
          o: s.o(function () {
            return o.selectPicture && o.selectPicture.apply(o, arguments);
          }),
          p: [i.STATUS.UNSET, i.STATUS.OUTDATED].includes(i.curStatus),
        },
        [i.STATUS.UNSET, i.STATUS.OUTDATED].includes(i.curStatus)
          ? { q: s.t(i.config.sideName) }
          : i.curStatus === i.STATUS.LOADING
          ? { s: s.t(i.config.sideName) }
          : { t: s.t(i.config.sideName) },
        {
          r: i.curStatus === i.STATUS.LOADING,
          v: s.o(o.chooseZxgSource),
          w: s.o(function (e) {
            return (i.isSheetShow = e);
          }),
          x: s.p({ value: i.isSheetShow, data: i.sheetItem }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d2c75c0a"],
]);
wx.createComponent(q);
