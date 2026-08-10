var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  h = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  c = function (e, t, n) {
    return new Promise(function (i, o) {
      var s = function (e) {
          try {
            r(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            r(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        r = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(s, a);
        };
      r((n = n.apply(e, t)).next());
    });
  },
  u = require("../../../../../../../common/vendor.js"),
  d = require("../../../utils/StockBridgeWrapper.js"),
  l = require("../../../utils/RequestUtils.js"),
  p = requirePlugin("QCloudAIVoice").speechRecognizerManager(),
  g = "元宝助手回答中...",
  f = {
    name: "MPInputView",
    components: {
      AudioModal: function () {
        return "../../MPVoiceModal.js";
      },
      SubscripePageEntry: function () {
        return "../../SubscripePageEntry.js";
      },
    },
    inject: { isHalfScreen: { default: !1 } },
    props: {
      placeholder: { type: String, default: "" },
      isReplying: { type: Boolean, default: !1 },
      denyAnswer: { type: Boolean, default: !1 },
      aimodel: { type: String, default: "deepseek" },
      thinking: { type: Number, default: 1 },
      autofocus: { type: Boolean, default: !1 },
      theme: { type: String, default: "blue" },
      aiHasSafeArea: { type: Boolean, default: !0 },
      requestId: { type: String, default: "" },
      sessionId: { type: String, default: "" },
      defaultModel: { type: String, default: "deepseek" },
      isFirstLoad: { type: Boolean, default: !1 },
      hasFollowOnShown: { type: Boolean, default: !1 },
      showQuickInput: { type: Boolean, default: !1 },
      hasSentQuestion: { type: Boolean, default: !1 },
      quickInputData: { type: Object },
      isFromCache: { type: Boolean, default: !1 },
      showSubscripeEntry: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        inputContent: "",
        mpInputBottom: 0,
        hasExcuteInput: !1,
        initContainerHeight: 0,
        isZxgMP: !0,
        screenHeight: 0,
        windowWidth: 0,
        windowHeight: 0,
        statusBarHeight: 0,
        tabBarHight: 0,
        safeAreaBottom: 0,
        showInput: !0,
        isRecording: !1,
        showVoiceModal: !1,
        voiceTextSentence: "",
        voiceTextRealTime: "",
        isInCancelZone: !1,
        ignoreRecognitionResult: !1,
        isInTranslateZone: !1,
        isPressed: !1,
        voiceRecordTimer: null,
        startRecordTime: 0,
        hasSystemPermission: !0,
        hasMpMicPermission: !0,
        startParams: {
          appid: 1255521960,
          engine_model_type: "16k_zh_en",
          voice_format: 1,
          word_info: 2,
          filter_punc: 1,
          needvad: 1,
        },
        isLongPress: !1,
        inputTouchTimer: null,
        hasInputChange: !1,
        hasShownMaxLengthToast: !1,
        delayedMpInputBottom: 0,
        mpInputBottomTimer: null,
        isExpanded: !1,
        wasExpandedBeforeHide: !1,
        needExpandBtn: !1,
        lineCount: 1,
        lineChangeHandled: !1,
        singleLineHeight: 0,
        expandedTextareaHeight: 0,
        textareaHeight: 0,
        collapsedHeightCache: 0,
        lineHeightPx: 0,
        fontSizePx: 0,
        navTitleHeight: 0,
        forceFocus: !1,
        forceBlur: !1,
        inputFocusTimer: null,
        delayedAutofocus: !1,
        cursorPosition: -1,
      };
    },
    computed: {
      keyboardShowing: function () {
        return this.mpInputBottom > 50;
      },
      hasContent: function () {
        return this.inputContent && this.inputContent.trim().length > 0;
      },
      inputFocus: function () {
        return !this.forceBlur && (this.forceFocus || this.delayedAutofocus);
      },
      inputPlaceholder: function () {
        if (this.placeholder && this.placeholder !== g) {
          var e = this.placeholder;
          return e.length > 20 ? "".concat(e.slice(0, 20), "...") : e;
        }
        return this.isReplying
          ? g
          : this.keyboardShowing
          ? "发消息"
          : "发消息或按住说话";
      },
      isYuanBaoShenDuModel: function () {
        return "hunyuan-t1" === this.aimodel;
      },
      isDsModel: function () {
        return "deepseek" === this.aimodel;
      },
      isShenHaiModel: function () {
        return "deepsea" === this.aimodel;
      },
      disableInput: function () {
        return this.isReplying || this.denyAnswer;
      },
      canSendInput: function () {
        return (
          !this.disableInput &&
          (!!(this.inputContent && this.inputContent.trim().length > 0) ||
            (!!this.keyboardShowing &&
              this.placeholder &&
              this.placeholder !== g))
        );
      },
      defaultThinkIcon: function () {
        return "https://st.gtimg.com/design/de79b8bb17112e0fb1837ff4c77a63fa.png";
      },
      deepThinkIcon: function () {
        return 1 === this.thinking
          ? "https://st.gtimg.com/design/de79b8bb17112e0fb1837ff4c77a63fa.png"
          : "https://st.gtimg.com/design/8b562f019438607f71e3ce0fcdde67cc.png";
      },
      realMpInputBottom: function () {
        return this.aiHasSafeArea
          ? this.delayedMpInputBottom
          : this.delayedMpInputBottom - this.tabBarHight - this.safeAreaBottom;
      },
      voiceText: function () {
        return ""
          .concat(this.voiceTextSentence || "")
          .concat(this.voiceTextRealTime || "");
      },
      isSubscripeEntryVisible: function () {
        return (
          this.showSubscripeEntry &&
          !(this.isExpanded && !this.keyboardShowing) &&
          !this.keyboardShowing &&
          !this.hasSentQuestion
        );
      },
      showTouchMask: function () {
        return this.showInput && !this.keyboardShowing && !this.hasContent;
      },
      showExpandBtn: function () {
        return !!this.isExpanded || this.needExpandBtn;
      },
      expandIcon: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/6c7961ead3884ccbd5af70be7542507f.png"
          : "https://st.gtimg.com/design/0ce3b5a92432a9ceca99cdc524f61789.png";
      },
      collapseIcon: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/f4b01a22b917d1fb2a2ac85cd9b54c54.png"
          : "https://st.gtimg.com/design/875345e7e0b344623802898a14e52381.png";
      },
      textareaStyle: function () {
        return this.isExpanded
          ? { height: "".concat(this.expandedTextareaHeight, "px") }
          : (!this.keyboardShowing && this.wasExpandedBeforeHide) ||
            this.lineCount <= 1
          ? {}
          : { overflowY: "hidden" };
      },
    },
    watch: {
      inputContent: function (e) {
        var t = this;
        if (
          (this.hasExcuteInput ||
            ((this.hasExcuteInput = !0), this.$emit("onHasInputContent")),
          e && e.length > 500
            ? this.hasShownMaxLengthToast ||
              ((this.hasShownMaxLengthToast = !0),
              d.StockBridge.toast("最多支持输入500字"))
            : this.hasShownMaxLengthToast && (this.hasShownMaxLengthToast = !1),
          !e || 0 === e.length)
        )
          return (
            (this.lineCount = 1),
            (this.needExpandBtn = !1),
            (this.lineChangeHandled = !1),
            (this.textareaHeight = 0),
            void (
              this.isExpanded ||
              this.keyboardShowing ||
              this.$nextTick(function () {
                t.reportContainerHeight();
              })
            )
          );
        (this.lineChangeHandled = !1),
          this.$nextTick(function () {
            t.keyboardShowing || t.reportContainerHeight(),
              setTimeout(function () {
                t.lineChangeHandled || t.estimateLineCount(e);
              }, 200);
          });
      },
      isInCancelZone: function (e, t) {
        e !== t && u.wx$1.vibrateShort({ type: "medium" });
      },
      showVoiceModal: function (e) {
        this.$emit("showVoiceModal", e);
      },
      showInput: function (e, t) {
        e !== t && d.StockBridge.setStorage("mp-inputview-showInput", e);
      },
      keyboardShowing: function (e) {
        var t = this;
        this.$emit("keyboardShowingChange", e),
          e
            ? this.$emit("containerHeightChange", 0)
            : ((this.wasExpandedBeforeHide = this.isExpanded),
              this.$nextTick(function () {
                t.reportContainerHeight();
              }));
      },
      mpInputBottom: function (e, t) {
        var n = this;
        if (
          (this.mpInputBottomTimer && clearTimeout(this.mpInputBottomTimer),
          e > 50
            ? (this.mpInputBottomTimer = setTimeout(function () {
                n.delayedMpInputBottom = e;
              }, 150))
            : (this.delayedMpInputBottom = e),
          this.isExpanded && this.expandedTextareaHeight > 0)
        ) {
          var i = t > 50,
            o = e > 50;
          if (i !== o)
            this.mpInputBottomTimer &&
              (clearTimeout(this.mpInputBottomTimer),
              (this.mpInputBottomTimer = null)),
              (this.delayedMpInputBottom = e),
              this.recalcExpandedHeight();
          else if (i && o) {
            var s = t - e;
            0 !== s && (this.expandedTextareaHeight += s);
          }
        }
        this.$emit("keyboardHeightChange", e);
      },
      isExpanded: function (e, t) {
        var n = this;
        this.$emit("expandChange", e),
          !t ||
            e ||
            this.keyboardShowing ||
            setTimeout(function () {
              n.reportContainerHeight();
            }, 150);
      },
    },
    created: function () {
      var e = this;
      Object.defineProperty(this, "toJSON", {
        value: function () {
          return "MPInputView";
        },
        enumerable: !1,
      }),
        (this.mpKeyboradListener = function (t) {
          t && (e.mpInputBottom = t.height);
        }),
        u.wx$1.onKeyboardHeightChange &&
          u.wx$1.onKeyboardHeightChange(this.mpKeyboradListener);
      try {
        var t =
            (u.wx$1.getWindowInfo && u.wx$1.getWindowInfo()) ||
            u.wx$1.getSystemInfoSync(),
          n = t.screenHeight,
          i = t.windowWidth,
          o = t.windowHeight,
          s = t.statusBarHeight,
          a = t.safeArea;
        (this.screenHeight = n),
          (this.windowWidth = i),
          (this.windowHeight = o),
          (this.statusBarHeight = s),
          (this.tabBarHight =
            this.screenHeight - this.windowHeight - this.statusBarHeight),
          (this.safeAreaBottom = n - a.bottom);
      } catch (e) {}
      var r = this.windowWidth / 750 || 1;
      (this.lineHeightPx = Math.round(42 * r)),
        (this.fontSizePx = Math.round(28 * r)),
        d.StockBridge.getStorage("mp-inputview-showInput", function (t) {
          (e.showInput = "boolean" != typeof t.data || t.data),
            e.showInput ||
              d.StockBridge.report("base.ai_search.audio_bar_brow");
        }),
        (this.onNavTitleHeightHandler = function (t) {
          e.navTitleHeight = t || 0;
        }),
        d.StockBridge.busOn("ai-navTitle-height", this.onNavTitleHeightHandler);
    },
    mounted: function () {
      var e = this;
      this.initPlugin(),
        this.autofocus &&
          setTimeout(function () {
            e.requestFocus();
          }, 500);
      var t = u.wx$1.getWindowInfo
          ? u.wx$1.getWindowInfo()
          : u.wx$1.getSystemInfoSync(),
        n = Math.round((157 * t.windowWidth) / 750);
      (this.initContainerHeight = n),
        setTimeout(function () {
          e.reportContainerHeight();
        }, 300);
    },
    beforeDestroy: function () {
      this.mpKeyboradListener &&
        u.wx$1.offKeyboardHeightChange &&
        u.wx$1.offKeyboardHeightChange(this.mpKeyboradListener),
        clearTimeout(this.voiceRecordTimer),
        this.mpInputBottomTimer && clearTimeout(this.mpInputBottomTimer),
        this.inputFocusTimer && clearTimeout(this.inputFocusTimer),
        d.StockBridge.busOff(
          "ai-navTitle-height",
          this.onNavTitleHeightHandler
        ),
        this.destroySpeechRecognizer();
    },
    methods: {
      destroySpeechRecognizer: function () {
        try {
          p.stop();
        } catch (e) {}
        var e = function () {};
        (p.OnRecognitionStart = e),
          (p.OnSentenceBegin = e),
          (p.OnRecognitionResultChange = e),
          (p.OnSentenceEnd = e),
          (p.OnRecognitionComplete = e),
          (p.OnError = e);
      },
      reportContainerHeight: function () {
        var e = this;
        if (this.isExpanded)
          this.$emit("containerHeightChange", this.initContainerHeight || 0);
        else if (this.hasContent || this.isSubscripeEntryVisible) {
          var t = u.wx$1.createSelectorQuery().in(this);
          t.select(".mp-input-container").boundingClientRect(),
            t.select(".container-bottom-padding").boundingClientRect(),
            t.exec(function (t) {
              var n = t && t[0] ? t[0].height : 0,
                i = t && t[1] ? t[1].height : 0;
              e.$emit("containerHeightChange", n - i);
            });
        } else
          this.$emit("containerHeightChange", this.initContainerHeight || 0);
      },
      showQuickSearch: function (e) {
        this.$emit("showQuickSearch", e);
      },
      quickQuestionClick: function (e) {
        this.$emit("quickQuestionClick", e);
      },
      mpInputBindFocus: function (e) {
        e && e.detail && (this.mpInputBottom = e.detail.height);
      },
      mpInputBindBlur: function () {
        (this.mpInputBottom = 0),
          (this.hasInputChange = !1),
          (this.forceFocus = !1),
          this.hasContent || (this.isExpanded = !1);
      },
      handleInputChange: function () {
        this.hasInputChange = !0;
      },
      mpInputBindKeyboardHeightChange: function (e) {
        if (e && e.detail) {
          var t = e.detail.height;
          this.mpInputBottom = t;
        }
      },
      onSendClick: function () {
        var e = this;
        if (this.isReplying) this.$emit("onStopAnswer");
        else if (this.inputContent && this.inputContent.trim().length > 0) {
          u.wx$1.hideKeyboard();
          var t = this.inputContent;
          t.length > 500 &&
            ((t = t.slice(0, 500)),
            d.StockBridge.toast("内容已超过500字，仅发送前500字")),
            this.$emit("onSendQuestion", t),
            (this.inputContent = ""),
            (this.isExpanded = !1),
            (this.lineCount = 1),
            (this.needExpandBtn = !1),
            this.$emit("containerHeightChange", this.initContainerHeight || 0),
            setTimeout(function () {
              e.inputContent = "";
            }, 100);
        } else this.denyAnswer || this.$emit("onSendEmpty");
      },
      clickDsModel: function () {
        this.denyAnswer || d.StockBridge.toast("默认支持深度思考");
      },
      changeHunYuanModel: function () {
        if (!this.denyAnswer) {
          var e = 1 === this.thinking ? 0 : 1;
          this.$emit("inputChangeAiThinking", e),
            d.StockBridge.report("base.ai_search.click_yuanbao_ds_change", {
              aimodel: this.aimodel,
              thinking: e,
            });
        }
      },
      requestFocus: function () {
        var e = this;
        (this.forceBlur = !0),
          (this.forceFocus = !1),
          this.$emit("onFocus", !0),
          setTimeout(function () {
            (e.forceBlur = !1), (e.forceFocus = !0), (e.showInput = !0);
          }, 100);
      },
      inputQuestion: function (e) {
        var t = this;
        !this.isReplying || this.showInput
          ? ((this.showInput = !0),
            e && e.length > 0 && (this.inputContent = e),
            setTimeout(function () {
              t.requestFocus();
            }, 300))
          : u.wx$1.showToast({
              title: "正在作答中，请稍后或点击停止回答",
              icon: "none",
            });
      },
      handleLineChange: function (e) {
        if (e && e.detail) {
          var t = e.detail,
            n = t.lineCount,
            i = t.height;
          (this.lineCount = n || 1),
            (this.lineChangeHandled = !0),
            n <= 1 && i > 0 && !this.isExpanded && (this.singleLineHeight = i),
            (this.needExpandBtn = this.lineCount > 2),
            !this.isExpanded && i > 0
              ? (this.textareaHeight = i)
              : this.isExpanded && i > 0 && (this.collapsedHeightCache = i);
        }
      },
      estimateLineCount: function (e) {
        var t = this;
        if (e)
          try {
            u.index
              .createSelectorQuery()
              .in(this)
              .select("#inputBox")
              .boundingClientRect(function (n) {
                n && n.height > 0 && t.singleLineHeight > 0
                  ? ((t.needExpandBtn = n.height > 2.5 * t.singleLineHeight),
                    (t.lineCount =
                      Math.round(n.height / t.singleLineHeight) || 1))
                  : t.estimateLineCountByChars(e);
              })
              .exec();
          } catch (t) {
            this.estimateLineCountByChars(e);
          }
        else this.lineCount = 1;
      },
      estimateLineCountByChars: function (e) {
        var t = this.windowWidth / 750 || 1,
          n = this.windowWidth - 48 * t - 80 * t,
          i = this.fontSizePx || Math.round(28 * t),
          o = Math.floor(n / i) + 1 || 17,
          s = e.split("\n"),
          a = 0;
        s.forEach(function (e) {
          var t = e.length;
          a += Math.max(1, Math.ceil(t / o));
        }),
          (this.lineCount = a),
          (this.needExpandBtn = this.lineCount > 2);
      },
      toggleExpand: function () {
        var e = this;
        this.showExpandBtn && this.showInput
          ? this.isExpanded
            ? this.collapseTextarea()
            : (d.StockBridge.report("base.searchai.input_box_fullscreen_click"),
              this.recalcExpandedHeight(function () {
                e.isExpanded = !0;
              }),
              this.keyboardShowing &&
                this.$nextTick(function () {
                  e.keepFocus();
                }))
          : this.keepFocus();
      },
      recalcExpandedHeight: function (e) {
        var t = this,
          n = this.calcExpandHeightSync(88);
        n > 0 && (this.expandedTextareaHeight = n);
        var i = u.wx$1.createSelectorQuery().in(this);
        i.select(".input-box-sub-container").boundingClientRect(),
          i.exec(function (n) {
            var i = n[0],
              o = i ? i.height : 88,
              s = t.calcExpandHeightSync(o);
            (t.expandedTextareaHeight = s), e && e();
          });
      },
      calcExpandHeightSync: function (e) {
        var t = this.mpInputBottom || 0,
          n = this.navTitleHeight || this.statusBarHeight + 44,
          i = this.windowWidth / 750 || 1,
          o =
            (this.isHalfScreen
              ? 0.8 * this.windowHeight
              : this.windowHeight - n) -
            t -
            e;
        return (
          this.keyboardShowing
            ? (o += 4)
            : ((o -=
                this.aiHasSafeArea && 0 === this.PmpInputBottom
                  ? this.safeAreaBottom
                  : 0),
              this.aiHasSafeArea && (o -= Math.round(68 * i))),
          (o -= Math.round(24 * i)),
          Math.max(o, 100)
        );
      },
      collapseTextarea: function () {
        var e = this;
        d.StockBridge.report("base.searchai.input_box_fullscreen_close"),
          this.collapsedHeightCache > 0 &&
            (this.textareaHeight = this.collapsedHeightCache),
          (this.isExpanded = !1),
          setTimeout(function () {
            try {
              u.index
                .createSelectorQuery()
                .in(e)
                .select("#inputBox")
                .boundingClientRect(function (t) {
                  t && t.height > 0 && e.singleLineHeight > 0
                    ? ((e.needExpandBtn = t.height > 2.5 * e.singleLineHeight),
                      (e.lineCount =
                        Math.round(t.height / e.singleLineHeight) || 1),
                      (e.textareaHeight = t.height))
                    : (e.needExpandBtn = e.lineCount > 2);
                })
                .exec();
            } catch (t) {
              e.needExpandBtn = e.lineCount > 2;
            }
          }, 100);
      },
      onExpandOverlayClick: function () {
        this.collapseTextarea(), this.keepFocus();
      },
      onStopAnswer: function () {
        this.$emit("onStopAnswer");
      },
      switchToAudio: function () {
        return c(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.showInput = !1),
                        u.wx$1.vibrateShort({ type: "medium" }),
                        (e.next = 3),
                        this.checkRecordPermission()
                      );
                    case 3:
                      (n = e.sent),
                        (this.hasMpMicPermission = !!n),
                        this.checkTokenValid() || this.fetchCloudToken(),
                        d.StockBridge.report(
                          "base.ai_search.switch_audio_click"
                        );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      switchToInput: function () {
        u.wx$1.vibrateShort({ type: "medium" }),
          (this.showInput = !0),
          this.requestFocus(),
          d.StockBridge.report("base.ai_search.switch_input_click");
      },
      handleSwitchAudio: function () {
        u.wx$1.hideKeyboard(), this.switchToAudio();
      },
      fetchCloudToken: function () {
        return c(
          this,
          null,
          t().mark(function e() {
            var n, i, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.isCloudTokenFetching) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (this.isCloudTokenFetching = !0),
                        (e.next = 5),
                        l.getTencentCloudAudioToken()
                      );
                    case 5:
                      (n = e.sent) &&
                        n.cloudToken &&
                        ((i = n.cloudToken.timestamp),
                        (o = Date.now() / 1e3),
                        (this.deltaTime = i ? o - i : 0),
                        (this.cloudToken = n.cloudToken)),
                        (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(1));
                    case 11:
                      return (
                        (e.prev = 11),
                        (this.isCloudTokenFetching = !1),
                        e.finish(11)
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 9, 11, 14]]
            );
          })
        );
      },
      checkTokenValid: function () {
        return (
          !!this.cloudToken &&
          !(this.cloudToken.expire - (Date.now() / 1e3 - this.deltaTime) < 60)
        );
      },
      initPlugin: function () {
        try {
          this.fetchCloudToken(), this.setupEventListeners();
        } catch (e) {}
      },
      setupEventListeners: function () {
        var e = this;
        (p.OnRecognitionStart = function (t) {
          e.hasSystemPermission = !0;
        }),
          (p.OnSentenceBegin = function (e) {}),
          (p.OnRecognitionResultChange = function (t) {
            var n;
            if (t && t.result) {
              var i = "".concat(
                null == (n = t.result) ? void 0 : n.voice_text_str
              );
              e.voiceTextRealTime = i;
            }
          }),
          (p.OnSentenceEnd = function (t) {
            var n;
            if (t && t.result) {
              var i = "".concat(
                null == (n = t.result) ? void 0 : n.voice_text_str
              );
              (e.voiceTextSentence = i), (e.voiceTextRealTime = "");
            }
          }),
          (p.OnRecognitionComplete = function (t) {
            e.ignoreRecognitionResult
              ? e.clearRecordState()
              : e.isVoiceRecognizeEndCalled ||
                (e.onVoiceRecognizeEnd(), (e.isVoiceRecognizeEndCalled = !0));
          }),
          (p.OnError = function (t) {
            var n =
              (null == t ? void 0 : t.errMsg) ||
              (null == t ? void 0 : t.message) ||
              "";
            (-120001 === t.errCode ||
              n.includes("authorize") ||
              n.includes("permission")) &&
              (e.isPermissionTipsShow ||
                ((e.isPermissionTipsShow = !0),
                u.wx$1.showModal({
                  title: "需要麦克风权限",
                  content:
                    "请在手机的系统设置中，为微信打开麦克风权限，并重启微信",
                  showCancel: !1,
                  success: function () {
                    (e.hasSystemPermission = !1), p.stop();
                  },
                  complete: function () {
                    e.isPermissionTipsShow = !1;
                  },
                })));
          });
      },
      handleInputTouchStart: function () {
        var e = this;
        this.denyAnswer ||
          this.keyboardShowing ||
          (this.inputContent && this.inputContent.trim().length > 0
            ? this.requestFocus()
            : ((this.isLongPress = !1),
              this.inputTouchTimer && clearTimeout(this.inputTouchTimer),
              (this.inputTouchTimer = setTimeout(function () {
                (e.isLongPress = !0), e.startRecording();
              }, 200))));
      },
      handleInputTouchEnd: function () {
        this.inputTouchTimer &&
          (clearTimeout(this.inputTouchTimer), (this.inputTouchTimer = null));
        var e = this.isLongPress;
        (this.isLongPress = !1),
          e
            ? (this.isPressed || this.isRecording) && this.stopRecording()
            : this.requestFocus();
      },
      onTextareaTouchStart: function (e) {
        this.keyboardShowing || this.handleInputTouchStart();
      },
      onTextareaTouchEnd: function (e) {
        this.keyboardShowing ||
          (this.showInput && this.mpInputBottom > 0) ||
          this.showInput ||
          this.handleInputTouchEnd();
      },
      startRecording: function () {
        return c(
          this,
          null,
          t().mark(function n() {
            var c,
              l,
              g = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.denyAnswer) {
                        t.next = 12;
                        break;
                      }
                      if (((this.timestamp = Date.now()), !this.isReplying)) {
                        t.next = 5;
                        break;
                      }
                      u.wx$1.showToast({
                        title: "正在作答中，请稍后或点击停止回答",
                        icon: "none",
                      }),
                        (t.next = 12);
                      break;
                    case 5:
                      if (!this.hasMpMicPermission) {
                        t.next = 11;
                        break;
                      }
                      if (this.checkTokenValid()) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.fetchCloudToken(),
                        void u.wx$1.showToast({
                          title: "正在初始化语音，请稍后重试",
                          icon: "none",
                        }))
                      );
                    case 8:
                      if (!this.isRecording) {
                        (this.isPressed = !0),
                          (this.voiceTextRealTime = ""),
                          (this.voiceTextSentence = ""),
                          this.voiceRecordTimer &&
                            clearTimeout(this.voiceRecordTimer),
                          (this.voiceRecordTimer = setTimeout(function () {
                            g.stopRecording();
                          }, 3e4)),
                          u.wx$1.vibrateShort({ type: "medium" });
                        try {
                          this.isPressed
                            ? (p.start(
                                ((c = (function (t, n) {
                                  for (var i in n || (n = {}))
                                    a.call(n, i) && h(t, i, n[i]);
                                  if (s) {
                                    var o,
                                      c = e(s(n));
                                    try {
                                      for (c.s(); !(o = c.n()).done; ) {
                                        i = o.value;
                                        r.call(n, i) && h(t, i, n[i]);
                                      }
                                    } catch (e) {
                                      c.e(e);
                                    } finally {
                                      c.f();
                                    }
                                  }
                                  return t;
                                })({}, this.startParams)),
                                (l = {
                                  secretid: this.cloudToken.secretId,
                                  secretkey: this.cloudToken.secretKey,
                                  token: this.cloudToken.token,
                                }),
                                i(c, o(l)))
                              ),
                              (this.isRecording = !0),
                              (this.showVoiceModal = !0),
                              this.$refs.voiceModalRef.onShow(),
                              (this.startRecordTime = Date.now()))
                            : u.wx$1.showToast({
                                title: "说话时间太短，请重新输入",
                                icon: "none",
                              }),
                            setTimeout(function () {
                              g.hasSystemPermission ||
                                g.isPermissionTipsShow ||
                                ((g.isPermissionTipsShow = !0),
                                u.wx$1.showModal({
                                  title: "需要麦克风权限",
                                  content:
                                    "请在手机的系统设置中，为微信打开麦克风权限，并重启微信",
                                  showCancel: !1,
                                  complete: function () {
                                    g.isPermissionTipsShow = !1;
                                  },
                                }));
                            }, 1e3);
                        } catch (e) {}
                        d.StockBridge.report("base.ai_search.speek_bar_click");
                      }
                      t.next = 12;
                      break;
                    case 11:
                      u.wx$1.showModal({
                        title: "需要录音权限",
                        content: "请在设置中开启录音权限",
                        showCancel: !1,
                      });
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      stopRecording: function () {
        var e = this;
        if (((this.isPressed = !1), this.isInCancelZone))
          return (
            d.StockBridge.report("base.ai_search.audio_slide_up_cancel_scroll"),
            (this.ignoreRecognitionResult = !0),
            p.stop(),
            void this.clearRecordState()
          );
        this.isRecording && !this.isReplying
          ? ((this.isRecording = !1),
            (this.isVoiceRecognizeEndCalled = !1),
            setTimeout(function () {
              (e.ignoreRecognitionResult = !1),
                p.stop(),
                setTimeout(function () {
                  e.isVoiceRecognizeEndCalled ||
                    (e.onVoiceRecognizeEnd(),
                    (e.isVoiceRecognizeEndCalled = !0));
                }, 1e3);
            }, 500))
          : this.showVoiceModal &&
            ((this.showVoiceModal = !1), this.$refs.voiceModalRef.onClose());
      },
      onVoiceRecognizeEnd: function () {
        var e,
          t = this;
        if (this.hasSystemPermission) {
          if (!this.isInTranslateZone) {
            var n = this.voiceText;
            setTimeout(function () {
              d.StockBridge.report(
                "base.ai_search.audio_release_to_send_long_tap",
                { query: n, session: t.sessionId, requestid: t.requestId }
              );
            }, 500);
          }
          this.voiceText
            ? (this.isInTranslateZone
                ? (d.StockBridge.report(
                    "base.ai_search.audio_slide_up_translate_scroll"
                  ),
                  this.$emit("editVoice", this.voiceText))
                : this.$emit("onSendQuestion", this.voiceText, "voice"),
              (this.inputContent = ""))
            : Date.now() - this.startRecordTime < 1e3
            ? u.wx$1.showToast({
                title: "说话时间太短，请重新输入",
                icon: "none",
              })
            : (null == (e = this.voiceText) ? void 0 : e.length) ||
              u.wx$1.showToast({ title: "未识别到文字", icon: "none" }),
            this.clearRecordState();
        } else this.clearRecordState();
      },
      checkRecordPermission: function () {
        return c(
          this,
          null,
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        u.wx$1.getSetting({
                          success: function (t) {
                            !1 === t.authSetting["scope.record"]
                              ? u.wx$1.showModal({
                                  title: "需要录音权限",
                                  content: "请在设置中开启录音权限",
                                  showCancel: !1,
                                  success: function () {
                                    e(!1);
                                  },
                                })
                              : void 0 === t.authSetting["scope.record"]
                              ? (d.StockBridge.report(
                                  "base.ai_search.audio_authorization_panel_brow"
                                ),
                                u.wx$1.authorize({
                                  scope: "scope.record",
                                  success: function () {
                                    d.StockBridge.report(
                                      "base.ai_search.audio_authorization_agree_click"
                                    ),
                                      e(!0);
                                  },
                                  fail: function (t) {
                                    d.StockBridge.report(
                                      "base.ai_search.audio_authorization_reject_click"
                                    ),
                                      u.wx$1.showToast({
                                        title: "需要录音权限才能使用语音识别",
                                        icon: "none",
                                      }),
                                      e(!1);
                                  },
                                }))
                              : e(!0);
                          },
                          fail: function (t) {
                            e(!1);
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
        );
      },
      handleTouchMove: function (e) {
        e.preventDefault(),
          this.isRecording &&
            0 !== e.touches.length &&
            this.handleMove(e.touches[0].clientX, e.touches[0].clientY);
      },
      handleMove: function (e, t) {
        var n = this.windowHeight - 143,
          i = t < n && e < 128,
          o = t < n && e >= this.windowWidth - 128;
        this.isInCancelZone !== i &&
          ((this.isInCancelZone = i),
          i && u.wx$1.vibrateShort({ type: "medium" })),
          this.isInTranslateZone !== o &&
            ((this.isInTranslateZone = o),
            o && u.wx$1.vibrateShort({ type: "medium" }));
      },
      clearRecordState: function () {
        this.showVoiceModal &&
          ((this.showVoiceModal = !1), this.$refs.voiceModalRef.onClose()),
          (this.isInCancelZone = !1),
          (this.isInTranslateZone = !1),
          (this.voiceTextSentence = ""),
          (this.voiceTextRealTime = ""),
          (this.isPressed = !1),
          (this.isRecording = !1),
          this.voiceRecordTimer && clearTimeout(this.voiceRecordTimer);
      },
      handleClickOuter: function (e) {
        this.$refs.switchModel &&
          this.$refs.switchModel.handleClickOuterInMp(e);
      },
      keepFocus: function () {
        this.inputFocusTimer &&
          (clearTimeout(this.inputFocusTimer), (this.inputFocusTimer = null)),
          (this.forceBlur = !1),
          (this.forceFocus = !0);
      },
      onChooseModel: function (e) {
        this.$emit("chooseModel", e);
      },
      hideMenu: function () {
        this.$emit("hideMenu");
      },
    },
  };
Array ||
  (
    u.resolveComponent("SubscripePageEntry") + u.resolveComponent("AudioModal")
  )();
var m = u._export_sfc(f, [
  [
    "render",
    function (e, t, n, i, o, s) {
      return u.e(
        { a: n.showSubscripeEntry && !(o.isExpanded && !s.keyboardShowing) },
        !n.showSubscripeEntry || (o.isExpanded && !s.keyboardShowing)
          ? {}
          : {
              b: u.p({
                theme: n.theme,
                "keyboard-showing": s.keyboardShowing,
                "has-sent-question": n.hasSentQuestion,
              }),
            },
        { c: o.isExpanded && !s.isHalfScreen },
        o.isExpanded && !s.isHalfScreen
          ? {
              d: u.o(function () {
                return (
                  s.onExpandOverlayClick &&
                  s.onExpandOverlayClick.apply(s, arguments)
                );
              }, 5258),
              e: u.o(function () {}, 5259),
            }
          : {},
        {
          f: n.denyAnswer,
          g: u.n(
            o.isExpanded
              ? ""
              : s.isHalfScreen
              ? "input-box--halfscreen"
              : "input-box--fullscreen"
          ),
          h: u.n(s.keyboardShowing || s.hasContent ? "" : "keyboardHide"),
          i: u.n(s.showTouchMask ? "input-box-no-touch" : ""),
          j: u.s(s.textareaStyle),
          k: s.inputFocus,
          l: o.cursorPosition,
          m: s.inputPlaceholder,
          n: !o.isExpanded,
          o: -1,
          p: u.o(function () {
            return s.mpInputBindFocus && s.mpInputBindFocus.apply(s, arguments);
          }, 5260),
          q: u.o(function () {
            return s.mpInputBindBlur && s.mpInputBindBlur.apply(s, arguments);
          }, 5261),
          r: u.o(
            [
              [
                function (e) {
                  return (o.inputContent = e.detail.value);
                },
                5266,
              ],
              [
                function () {
                  return (
                    s.handleInputChange &&
                    s.handleInputChange.apply(s, arguments)
                  );
                },
                5262,
              ],
            ],
            5267
          ),
          s: u.o(function () {
            return (
              s.mpInputBindKeyboardHeightChange &&
              s.mpInputBindKeyboardHeightChange.apply(s, arguments)
            );
          }, 5263),
          t: u.o(function () {
            return s.onSendClick && s.onSendClick.apply(s, arguments);
          }, 5264),
          v: u.o(function () {
            return s.handleLineChange && s.handleLineChange.apply(s, arguments);
          }, 5265),
          w: o.inputContent,
          x: s.showTouchMask,
        },
        s.showTouchMask
          ? {
              y: u.o(function () {
                return (
                  s.handleInputTouchStart &&
                  s.handleInputTouchStart.apply(s, arguments)
                );
              }, 5268),
              z: u.o(function () {
                return (
                  s.handleInputTouchEnd &&
                  s.handleInputTouchEnd.apply(s, arguments)
                );
              }, 5269),
              A: u.o(function () {
                return (
                  s.handleInputTouchEnd &&
                  s.handleInputTouchEnd.apply(s, arguments)
                );
              }, 5270),
              B: u.o(function () {
                return (
                  s.handleTouchMove && s.handleTouchMove.apply(s, arguments)
                );
              }, 5271),
            }
          : {},
        {
          C: o.isExpanded ? s.collapseIcon : s.expandIcon,
          D: o.isExpanded ? "收起" : "展开",
          E: u.n(
            s.showExpandBtn
              ? "input-expand-btn-visible"
              : "input-expand-btn-hidden"
          ),
          F: u.o(function () {
            return s.toggleExpand && s.toggleExpand.apply(s, arguments);
          }, 5272),
          G: !s.keyboardShowing && !o.showInput,
        },
        s.keyboardShowing || o.showInput
          ? {}
          : {
              H: u.n(o.isPressed ? "input-audio-press" : ""),
              I: u.n(n.isReplying ? "input-audio-replying" : ""),
              J: u.n(s.keyboardShowing ? "" : "keyboardHide"),
              K: u.o(function () {
                return s.startRecording && s.startRecording.apply(s, arguments);
              }, 5273),
              L: u.o(function () {
                return s.stopRecording && s.stopRecording.apply(s, arguments);
              }, 5274),
              M: u.o(function () {
                return s.stopRecording && s.stopRecording.apply(s, arguments);
              }, 5275),
              N: u.o(function () {
                return s.startRecording && s.startRecording.apply(s, arguments);
              }, 5276),
              O: u.o(function () {
                return s.stopRecording && s.stopRecording.apply(s, arguments);
              }, 5277),
              P: u.o(function () {
                return s.stopRecording && s.stopRecording.apply(s, arguments);
              }, 5278),
              Q: u.o(function () {
                return (
                  s.handleTouchMove && s.handleTouchMove.apply(s, arguments)
                );
              }, 5279),
              R: u.o(function () {}, 5280),
            },
        { S: !s.keyboardShowing && !s.hasContent },
        s.keyboardShowing || s.hasContent
          ? {}
          : u.e(
              { T: o.showInput && !n.isReplying && s.canSendInput },
              o.showInput && !n.isReplying && s.canSendInput
                ? {
                    U: u.o(function () {
                      return s.onSendClick && s.onSendClick.apply(s, arguments);
                    }, 5281),
                  }
                : o.showInput && !n.isReplying
                ? {
                    W: u.o(function () {
                      return (
                        s.switchToAudio && s.switchToAudio.apply(s, arguments)
                      );
                    }, 5282),
                  }
                : {},
              {
                V: o.showInput && !n.isReplying,
                X: !o.showInput && !n.isReplying,
              },
              o.showInput || n.isReplying
                ? {}
                : {
                    Y: u.o(function () {
                      return (
                        s.switchToInput && s.switchToInput.apply(s, arguments)
                      );
                    }, 5283),
                  },
              { Z: n.isReplying },
              n.isReplying
                ? {
                    aa: u.o(function () {
                      return (
                        s.onStopAnswer && s.onStopAnswer.apply(s, arguments)
                      );
                    }, 5284),
                  }
                : {}
            ),
        {
          ab: u.n(s.keyboardShowing || s.hasContent ? "" : "keyboardHide"),
          ac: s.keyboardShowing || s.hasContent,
        },
        s.keyboardShowing || s.hasContent
          ? u.e(
              { ad: s.isShenHaiModel },
              s.isShenHaiModel
                ? {}
                : {
                    ae: s.deepThinkIcon,
                    af: u.n(1 === n.thinking ? "yuanBaoShenDuModel" : ""),
                    ag: u.n(
                      1 === n.thinking ? "input-box-sub-deep-text-bg" : ""
                    ),
                    ah: u.o(function () {
                      return (
                        s.changeHunYuanModel &&
                        s.changeHunYuanModel.apply(s, arguments)
                      );
                    }, 5285),
                  },
              { ai: n.isReplying },
              n.isReplying
                ? {
                    aj: u.o(function () {
                      return (
                        s.onStopAnswer && s.onStopAnswer.apply(s, arguments)
                      );
                    }, 5286),
                  }
                : s.canSendInput
                ? {
                    al: u.o(function () {
                      return s.onSendClick && s.onSendClick.apply(s, arguments);
                    }, 5287),
                  }
                : {
                    am: u.o(function () {
                      return (
                        s.handleSwitchAudio &&
                        s.handleSwitchAudio.apply(s, arguments)
                      );
                    }, 5288),
                  },
              { ak: s.canSendInput }
            )
          : {},
        {
          an: u.sr("voiceModalRef", "ca492e32-1"),
          ao: u.p({
            "show-modal": o.showVoiceModal,
            "show-cancel-zone": o.isInCancelZone,
            "show-translate-zone": o.isInTranslateZone,
            "voice-text": s.voiceText,
            "is-recording": o.isRecording,
            "is-replying": n.isReplying,
            theme: "black" === n.theme ? "black" : "white",
          }),
          ap: 0 == o.mpInputBottom && n.aiHasSafeArea,
        },
        (0 == o.mpInputBottom && n.aiHasSafeArea, {}),
        {
          aq: "".concat(s.realMpInputBottom, "px"),
          ar: u.n(n.showQuickInput ? "mp-input-container-quick-input" : ""),
          as: u.n(s.keyboardShowing || s.hasContent ? "" : "keyboardHide"),
          at: u.n("skin-".concat(n.theme)),
          av: u.n(o.isZxgMP ? "zxgmp" : ""),
          aw: u.n(s.isHalfScreen ? "halfscreen" : "fullscreen"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-ca492e32"],
]);
wx.createComponent(m);
