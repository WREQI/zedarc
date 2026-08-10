require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, s) {
    for (var n in s || (s = {})) r.call(s, n) && u(e, n, s[n]);
    if (o) {
      var i,
        c = t(o(s));
      try {
        for (c.s(); !(i = c.n()).done; ) {
          n = i.value;
          a.call(s, n) && u(e, n, s[n]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return n(e, i(t));
  },
  h = function (e, t, s) {
    return new Promise(function (n, i) {
      var o = function (e) {
          try {
            a(s.next(e));
          } catch (e) {
            i(e);
          }
        },
        r = function (e) {
          try {
            a(s.throw(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
        };
      a((s = s.apply(e, t)).next());
    });
  },
  d = require("../../../../../common/vendor.js"),
  p = require("../hooks/useComponentConfigHooks.js"),
  g = require("../utils/memoryTracking.js"),
  w = require("../utils/StockBridgeWrapper.js"),
  m = require("../hooks/useThemeHooks.js"),
  f = require("../hooks/usePrivacyGrantHooks.js"),
  S = require("../hooks/useShareSessionHooks.js"),
  y = require("../../../throttle-debounce/esm/index.js"),
  b = require("../utils/RequestUtils.js"),
  I = require("../../stock-base/service/common/sign.js"),
  k = require("../../stock-news-core/utils/knife.js"),
  A = !1,
  v = !1,
  C = {},
  q = "hasAgreeAIPermision_WenYuanBao",
  T = "jichu.ai_search.ai_answer",
  P = "thirteenyear",
  x = "isEnterAnniversary",
  D = "hasShowWxClawHintBubble",
  B = "sendToInput",
  L = [],
  M = "很抱歉，服务器繁忙，请稍后再试试",
  O = {
    name: "SearchAIPage",
    components: {
      AnswerListView: function () {
        return "../components/AnswerListView.js";
      },
      AnswerItem: function () {
        return "../components/AnswerItem.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1haS9jb21wb25lbnRzL0Fuc3dlckl0ZW0udnVl;
        });
      },
      DualAnswerItem: function () {
        return "../components/DualAnswerItem.js";
      },
      QuestionItem: function () {
        return "../components/QuestionItem.js";
      },
      DisLikeSelectDialog: function () {
        return "../components/DisLikeSelectDialog.js";
      },
      PermissionAgreeDialog: function () {
        return "../components/PermissionAgreeDialog.js";
      },
      OldPermissionDialog: function () {
        return "../components/OldPermissionDialog.js";
      },
      FullScreenFeedBack: function () {
        return "../components/FullScreenFeedBack.js";
      },
      InputView: function () {
        return "../components/inputView/mp.js";
      },
      InputVoiceEdit: function () {
        return "../components/InputVoiceEdit.js";
      },
      FirstGuideItemOldUser: function () {
        return "../components/FirstGuideItemOldUser.js";
      },
      FollowOnItem: function () {
        return "../components/FollowOnItem.js";
      },
      AiModelSelectDialog: function () {
        return "../components/AiModelSelectDialog.js";
      },
      AiModelSelectGuide: function () {
        return "../components/AiModelSelectGuide.js";
      },
      QuestionItemLongPressMenu: function () {
        return "../components/QuestionItemLongPressMenu.js";
      },
      ShareBar: function () {
        return "../node-modules/@tencent/st-act-ai-activity-plugins/components/sharebar/index.js";
      },
      BackPop: function () {
        return "../node-modules/@tencent/st-act-ai-activity-plugins/components/backPop/index.js";
      },
      ThirteenAnniversaryTask: function () {
        return "../node-modules/@tencent/st-act-ai-activity-plugins/task/index.js";
      },
      LinkJumpGuide: function () {
        return "../components/LinkJumpGuide.js";
      },
      SessionHistoryDrawer: function () {
        return "../components/SessionHistoryDrawer.js";
      },
      SessionHistoryLoading: function () {
        return "../components/SessionHistoryLoading.js";
      },
      WxClawBindDialog: function () {
        return "../components/WxClawBindDialog.js";
      },
      WxClawUnbindDialog: function () {
        return "../components/WxClawUnbindDialog.js";
      },
      WxClawHintBubble: function () {
        return "../components/WxClawHintBubble.js";
      },
    },
    inject: { hqBridge: { default: null } },
    props: ["theme", "query", "params"],
    setup: function (e, t) {
      var s = t.emit,
        n = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        i = g.useAiModuleHooks(e, s, "fullscreen"),
        o = i.moduleName,
        r = i.thinking,
        a = i.showAiModelSelect,
        u = i.showAiModelGuide,
        h = i.naviAnimClass,
        w = i.useAppH5,
        y = i.isIosOld,
        b = i.isHarmony,
        I = i.isAndroid,
        k = i.hasVoiceInput,
        A = i.useAppNative,
        v = i.inputRef,
        C = i.xuanguVersion,
        q = i.xuanguAbtReportInfo,
        T = i.newUserXuanGuQueryType,
        P = i.followOnnewUserXuanGuQueryType,
        x = i.isFirstClicknewUserFollowOn,
        D = i.appDeviceId,
        B = i.mockTradeInfoStr,
        L = i.mockTradeAbtUser,
        M = i.useIncrementalModel,
        O = i.onOpenAiModelSelect,
        Q = i.onCloseAiModelSelect,
        R = i.onChooseModel,
        F = i.onInputChangeAiModel,
        _ = i.checkAiModelSelectGuideShow,
        E = i.initAiModuleMame,
        H = i.initAppInputView,
        N = i.updateModuleName,
        U = i.entryAbtCreate,
        V = i.entryOnlineAnswerAbt,
        W = i.onlineAnswerAbtType,
        G = i.followOnAbtType,
        j = i.followOnAbtReportInfo,
        $ = i.entryFollowOnAbtCreate,
        X = i.shouldAbtNewUserXuangu,
        K = i.entryGetDeviceId,
        Y = i.fetchUserInfo,
        z = i.stopInputBlur,
        Z = i.generateGeneralWatchlistData,
        J = i.onInputChangeAiThinking,
        ee = p.useComponentConfigHooks(),
        te = ee.componentPluginArray,
        se = ee.fetchComponentConfig,
        ne = g.useHistorySearchHooks(e, te),
        ie = ne.resetHistoryOffset,
        oe = ne.entrySearchHistory,
        re = ne.parseHistoryDataItem,
        ae = p.useLongPressHooks(n, v),
        ue = ae.questionLongPress,
        ce = ae.longPressPostion,
        le = ae.targetRect,
        he = ae.targetQuestion,
        de = ae.handleQuestionLongPress,
        pe = ae.hideQuestionLongPressMenu,
        ge = ae.handleLongPressMenuTap,
        we = f.usePrivacyGrantHooks(),
        me = we.entryUsePrivacyGrant,
        fe = we.entryHistoryPrivacyGrant,
        Se = g.use13YearTaskHooks(),
        ye = Se.thirteenYearTaskCanShow,
        be = Se.thirteenYearBackPopShow,
        Ie = Se.handleThirteenYearTaskShowEvent,
        ke = Se.handleThirteenYearBackPopShowEvent,
        Ae = m.useThemeHooks(e, n, !0),
        ve = g.useScrollButtonsHooks(n, {
          isMP: !0,
          getAnswerList: function () {
            return n.answerList || [];
          },
          getShowAiDrawer: function () {
            return n.showAiDrawer || !1;
          },
          getIsReplying: function () {
            return n.isReplying || !1;
          },
          getCurSession: function () {
            return n.curSession || "";
          },
          pageType: "fullscreen",
          getIsInputExpanded: function () {
            return n.isInputExpanded || !1;
          },
          onInputAreaHeightOffsetChange: Ae.updateInputAreaHeightOffset,
          onProgrammaticScrollChange: function (e) {
            n.isProgrammaticScroll = e;
          },
          getEnableAutoScrollDown: function () {
            var e, t, s;
            return (
              null ==
                (s =
                  null ==
                  (t =
                    null == (e = n.$refs.answerlistview)
                      ? void 0
                      : e.getEnableAutoScrollDown)
                    ? void 0
                    : t.call(e)) || s
            );
          },
          getIsAutoScrolling: function () {
            var e, t, s;
            return (
              null !=
                (s =
                  null ==
                  (t =
                    null == (e = n.$refs.answerlistview)
                      ? void 0
                      : e.getIsAutoScrolling)
                    ? void 0
                    : t.call(e)) && s
            );
          },
        });
      return c(
        l(c(c({}, Ae), S.useShareSessionHooks(e)), {
          moduleName: o,
          thinking: r,
          showAiModelSelect: a,
          showAiModelGuide: u,
          naviAnimClass: h,
          useAppH5: w,
          isIosOld: y,
          isHarmony: b,
          isAndroid: I,
          hasVoiceInput: k,
          useAppNative: A,
          inputRef: v,
          xuanguVersion: C,
          xuanguAbtReportInfo: q,
          newUserXuanGuQueryType: T,
          followOnnewUserXuanGuQueryType: P,
          isFirstClicknewUserFollowOn: x,
          appDeviceId: D,
          mockTradeInfoStr: B,
          mockTradeAbtUser: L,
          useIncrementalModel: M,
          resetHistoryOffset: ie,
          entrySearchHistory: oe,
          parseHistoryDataItem: re,
          onCloseAiModelSelect: Q,
          onChooseModel: R,
          onInputChangeAiModel: F,
          checkAiModelSelectGuideShow: _,
          initAiModuleMame: E,
          initAppInputView: H,
          updateModuleName: N,
          entryAbtCreate: U,
          entryOnlineAnswerAbt: V,
          onlineAnswerAbtType: W,
          followOnAbtType: G,
          followOnAbtReportInfo: j,
          entryFollowOnAbtCreate: $,
          shouldAbtNewUserXuangu: X,
          entryGetDeviceId: K,
          fetchUserInfo: Y,
          questionLongPress: ue,
          longPressPostion: ce,
          targetRect: le,
          targetQuestion: he,
          handleQuestionLongPress: de,
          hideQuestionLongPressMenu: pe,
          handleLongPressMenuTap: ge,
          entryUsePrivacyGrant: me,
          entryHistoryPrivacyGrant: fe,
          thirteenYearTaskCanShow: ye,
          thirteenYearBackPopShow: be,
          handleThirteenYearTaskShowEvent: Ie,
          handleThirteenYearBackPopShowEvent: ke,
          stopInputBlur: z,
          onOpenAiModelSelect: O,
          componentPluginArray: te,
          fetchComponentConfig: se,
          generateGeneralWatchlistData: Z,
          onInputChangeAiThinking: J,
        }),
        ve
      );
    },
    data: function () {
      return {
        isLoadingHistory: !1,
        showFullScreenPermissionDialog: !1,
        showOldPermissionDialog: !1,
        showFullScreenFeedback: !1,
        showDisLikeDialog: !1,
        showInputExpandOverlay: !1,
        isInputExpanded: !1,
        loginCheck: !0,
        includeCredentials: !1,
        inputList: [],
        answerList: [],
        hasQueryQuestionUsed: !1,
        format: "plain",
        logs: [],
        recalContent: "",
        quoteContent: "",
        replyContent: "",
        thinkingContent: "",
        docsArray: [],
        isReplying: !1,
        navTitleHeight: 0,
        curSession: "",
        curRequestId: "",
        curUser: "",
        curOpenId: "",
        curFskey: "",
        curCheck: "",
        userInfo: {},
        searchText: "",
        contentId: "",
        queryUsage: "",
        queryQustion: "",
        subScene: "",
        subChannel: "",
        checkPermissionKeyBoardFlag: !1,
        hasInputContent: !1,
        searchfrom: "",
        defaultModelName: "",
        defaultQuestionArray: "",
        curCaiRequestId: "",
        curCaiIndex: "",
        curCaiAiModelName: "",
        curOfflineQuestion: !1,
        curNewUserPickStock: !1,
        curServerMessageCode: 0,
        hasAgreePermission: !1,
        shouldShowGuideView: !1,
        shouldShowAnserAnimation: !1,
        shouldShowGuideViewNoQuestion: !1,
        hasSentQuestion: !1,
        shouldShowAnserAnimationNoQuestion: !1,
        hasBlockRequest: !1,
        curTraceId: "",
        denyAnswer: !1,
        isWxClawSession: !1,
        isMP: !0,
        isWaiApp: "mpweapp" === d.ShellTypeEnum.MPWAI,
        isZxgXcq: !0,
        isWzqXcx: !1,
        isWzqLight: !1,
        mpScrollTop: 0,
        showHomeIcon: !1,
        curQuestionType: "",
        enableRag: !0,
        sseTimeoutId: 0,
        isiOS: C.ios,
        h5InputFocus: !1,
        keyboardShowing: !1,
        keyboardDelayFocus: !1,
        isWZQ: !1,
        protocalId: "",
        privacyResult: null,
        privacyType: "",
        curNewUserXuanGuFollowOnObj: null,
        curMbtiXuanGuFollowOnObj: null,
        curWelcomeQuestionObj: null,
        hasRefreshLogin: !1,
        aiAnniversary: !1,
        isFirstVisitAnniversary: !1,
        showLinkJumpGuide: !1,
        allQuoteDocs: {},
        msgType: "text",
        isShowVoiceEdit: !1,
        voiceText: "",
        keyboardHeightUseInMp: 0,
        keyboardHeightUseInAppH5: 0,
        quickInputShowing: !1,
        hasFollowOnShown: !1,
        hasDualAnswerTriggered: !1,
        isInAbPkExperiment: !1,
        isNeedHideKeyboard: !0,
        sessionTimeStart: "",
        showAiDrawer: !1,
        pendingQuickInputReport: null,
        initialHistoryPrivacy: null,
        hasPresetQuestion: !1,
        historyDataLength: 0,
        shouldShowSubscriptContent: !1,
        isHitWelcomePage: !1,
        isUpdateProtocol: !1,
        showWxClawDialog: !1,
        showWxClawUnbindDialog: !1,
        clawBotStatus: 0,
        guideBannerClosed: !1,
        canShowWxClawHintBubble: !1,
        canShowHY3Bubble: !1,
        showWxClawHintBubble: !1,
        showHY3Bubble: !1,
      };
    },
    computed: {
      showGuideBanner: function () {
        return 1 !== this.clawBotStatus && !this.guideBannerClosed;
      },
      shouldAutoFocus: function () {
        return (
          ((this.queryUsage === B && this.queryQustion) ||
            this.searchfrom === P) &&
          this.hasAgreePermission &&
          this.checkPermissionKeyBoardFlag &&
          this.keyboardDelayFocus &&
          !this.isMP
        );
      },
      getInputPlaceHolderText: function () {
        return this.isReplying
          ? "元宝助手回答中..."
          : this.isWxClawSession
          ? "当前为微信的消息窗口，暂不支持对话～"
          : !this.hasQueryQuestionUsed && this.queryQustion
          ? this.queryQustion
          : "";
      },
      shouldShowSubscripeEntry: function () {
        return (
          !this.hasSentQuestion &&
          this.shouldShowSubscriptContent &&
          this.isWzqXcx
        );
      },
      withoutNavBar: function () {
        return this.isWZQ || v || this.isMPZxgPC;
      },
      lastAnswerStreamingLength: function () {
        var e = this.answerList[this.answerList.length - 1];
        return e
          ? (e.reply ? e.reply.length : 0) +
              (e.thinking ? e.thinking.length : 0) +
              (e.recal ? e.recal.length : 0) +
              (e.quote ? e.quote.length : 0) +
              (e.mcpQuote ? e.mcpQuote.length : 0) +
              p.getProcessStepsStreamingLength(e)
          : 0;
      },
      isAnswerStreaming: function () {
        var e = this.answerList[this.answerList.length - 1];
        return this.isReplying && !(e && e.answerFinish && !e.isDualAnswer);
      },
    },
    watch: {
      shouldShowSubscripeEntry: function (e) {
        var t = this;
        this.calcContainerHeight(),
          this.$nextTick(function () {
            t.calculateBackToBottomPosition();
          });
      },
      lastAnswerStreamingLength: function () {
        var e;
        null == (e = this.scrollToBottom) || e.call(this, !1, !1);
      },
    },
    created: function () {
      return h(
        this,
        null,
        e().mark(function t() {
          var s = this;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (w.StockBridge.setBounces(!1),
                      (this.scrollToBottom = y.throttle(
                        32,
                        !1,
                        this.scrollToBottomReal
                      )),
                      this.isMP &&
                        (this.throttledUpdateMpIndex = y.throttle(
                          300,
                          !1,
                          this.updateMpQuestionIndex
                        )),
                      this.fetchComponentConfig(),
                      this.initQuery(),
                      this.initShareSession(),
                      this.initSubScribePush(),
                      w.StockBridge.busOn(
                        "common-ai-component-keepwzqpos",
                        this.keepWzqPos
                      ),
                      A &&
                        (this.initAppInputView(),
                        this.delayInitAppSafeBottom(),
                        shy.on("semiEditorLiteResponse", function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.content;
                          t.length > 0 && s.onSendQuestion(t);
                        }),
                        shy.on("onKeyboardHeightChange", function () {
                          var e,
                            t,
                            n,
                            i,
                            o,
                            r,
                            a =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                          if (a && void 0 !== a.height) {
                            var u = s.getAppSafeBottom(),
                              c = a.height < u ? u : a.height;
                            (s.keyboardShowing = a.height > 50),
                              null ==
                                (n =
                                  null ==
                                  (t =
                                    null == (e = s.$refs) ? void 0 : e.inputRef)
                                    ? void 0
                                    : t.setKeyboardShowing) ||
                                n.call(t, s.keyboardShowing),
                              null ==
                                (r =
                                  null ==
                                  (o =
                                    null == (i = s.$refs) ? void 0 : i.inputRef)
                                    ? void 0
                                    : o.setAppSafeBottom) || r.call(o, c),
                              (s.keyboardHeightUseInAppH5 = a.height),
                              s.$nextTick(function () {
                                s.calculateBackToBottomPosition();
                              });
                          }
                        })),
                      this.isMP && !this.isWaiApp)
                    )
                      try {
                        getCurrentPages().length <= 1 &&
                          (this.showHomeIcon = !0);
                      } catch (e) {}
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.isIosOld &&
          void 0 !== window.visualViewport &&
          window.visualViewport.addEventListener(
            "scroll",
            e.onVisualViewportChange
          ),
          d.wx$1
            .createSelectorQuery()
            .in(e)
            .select(".navTitle")
            .boundingClientRect(function (t) {
              t &&
                ((e.navTitleHeight = t.height),
                w.StockBridge.busEmit("ai-navTitle-height", t.height));
            })
            .exec(),
          ((e.queryUsage === B && e.queryQustion) || e.searchfrom === P) &&
            A &&
            e.useAppH5 &&
            (e.isiOS
              ? shy.invoke("showKeyboard", { enabled: !0 }, function () {
                  e.keyboardDelayFocus = !0;
                })
              : setTimeout(function () {
                  (e.keyboardDelayFocus = !0),
                    e.shouldAutoFocus &&
                      shy.invoke("showKeyboard", { enabled: !0 });
                }, 100));
      }),
        setTimeout(function () {
          e.calculateBackToBottomPosition();
        }, 500),
        this.initClawBotStatus();
    },
    activated: function () {
      this.resumeWzqPos();
    },
    deactivated: function () {
      this.hideQuestionLongPressMenu(), (this.hasSentQuestion = !1);
    },
    beforeDestroy: function () {
      this.unsubscribeGlobalPrivacy(),
        w.StockBridge.busOff("common-ai-component-keepwzqpos", this.keepWzqPos),
        this.delayCalcTimer && clearTimeout(this.delayCalcTimer),
        this.isReplying &&
          w.StockBridge.report(T, this.getAnswerFinshReportObj(0)),
        this.disconnect(),
        this.isIosOld &&
          void 0 !== window.visualViewport &&
          window.visualViewport.removeEventListener(
            "scroll",
            this.onVisualViewportChange
          ),
        this.$refs.footerWrapper &&
          (this.$refs.footerWrapper.removeEventListener(
            "click",
            this.contentTouch
          ),
          this.$refs.footerWrapper.removeEventListener(
            "touchend",
            this.contentTouch
          )),
        this.cleanup();
    },
    methods: {
      onInputExpandChange: function (e) {
        var t = this;
        (this.isInputExpanded = e),
          this.isMP &&
            ((this.showInputExpandOverlay = !!e),
            this.$nextTick(function () {
              t.calculateBackToBottomPosition();
            }));
      },
      onContainerHeightChange: function (e) {
        var t = this;
        if (this.isMP)
          if (e <= 0)
            this.keyboardShowing ||
              ((this.contentListPaddingBottom = 0),
              this.updateInputAreaHeightOffset(0),
              this.calculateBackToBottomPosition());
          else {
            var s = d.index.createSelectorQuery().in(this);
            s.select(".bottomBar").boundingClientRect(),
              s.exec(function (s) {
                var n = s && s[0] ? s[0].height : 0,
                  i = Math.max(0, e - n);
                t.updateContentListPadding(e, n),
                  t.updateInputAreaHeightOffset(i),
                  t.updateBottomButtonPosition(e);
              });
          }
      },
      onInputExpandOverlayClick: function () {
        (this.showInputExpandOverlay = !1),
          this.$refs.inputRef &&
            this.$refs.inputRef.collapseTextarea &&
            this.$refs.inputRef.collapseTextarea();
      },
      handleMpScroll: function (e) {
        var t = this;
        this.isMP &&
          (e &&
            e.detail &&
            void 0 !== e.detail.scrollTop &&
            this.checkIsAtBottom(e.detail.scrollTop),
          this.throttledUpdateMpIndex ||
            (this.throttledUpdateMpIndex = this.$options.methods.throttle.call(
              this,
              300,
              function () {
                t.updateMpQuestionIndex();
              }
            )),
          this.throttledUpdateMpIndex());
      },
      updateMpQuestionIndex: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s,
              n,
              i,
              o,
              r = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !this.isMP ||
                        0 === this.answerList.length ||
                        this.isProgrammaticScroll
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        null == (s = this.$refs.answerlistview)
                          ? void 0
                          : s.getScrollViewInfo()
                      );
                    case 4:
                      if ((n = e.sent)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      for (
                        i = d.index.createSelectorQuery().in(this), o = 0;
                        o < this.answerList.length;
                        o++
                      )
                        i.select(
                          "#aiAnswerBlock".concat(o)
                        ).boundingClientRect();
                      i.exec(function (e) {
                        if (e && 0 !== e.length) {
                          for (
                            var t = n.boundingClientRect.top,
                              s = n.boundingClientRect.bottom,
                              i = -1,
                              o = 0;
                            o < e.length;
                            o++
                          ) {
                            var a = e[o];
                            if (a) {
                              var u = a.top,
                                c = a.bottom,
                                l = Math.max(u, t),
                                h = Math.min(c, s),
                                d = Math.max(0, h - l),
                                p = c - u,
                                g = p > 0 ? d / p : 0;
                              if (g > 0) {
                                if (g < 1) {
                                  o;
                                  break;
                                }
                                -1 === i && (i = o);
                              }
                            }
                          }
                          for (var w = 0, m = 1 / 0, f = 0; f < e.length; f++) {
                            var S = e[f];
                            if (S) {
                              var y = S.top,
                                b = S.bottom,
                                I = Math.max(y, t),
                                k = Math.min(b, s),
                                A = Math.max(0, k - I),
                                v = b - y;
                              if ((v > 0 ? A / v : 0) > 0.1) {
                                var C = Math.abs(y - t);
                                C < m && ((m = C), (w = f));
                              }
                            }
                          }
                          r.currentQuestionIndex = w;
                        }
                      }),
                        (e.next = 14);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(1));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 12]]
            );
          })
        );
      },
      initHistory: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        this.entrySearchHistory("", !1, !1)
                      );
                    case 3:
                      (s = e.sent),
                        this.parseHistoryInfo(s),
                        this.scrollHistoryToBottom(),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
      onHistoryPinEnd: function () {
        this.isLoadingHistory = !1;
      },
      delayInitAppSafeBottom: function () {
        var e = this;
        A &&
          (this.delayCalcTimer = setTimeout(function () {
            var t,
              s,
              n,
              i = e.getAppSafeBottom();
            null ==
              (n =
                null == (s = null == (t = e.$refs) ? void 0 : t.inputRef)
                  ? void 0
                  : s.setAppSafeBottom) || n.call(s, i, !0),
              e.$refs.inputHolder &&
                (e.$refs.inputHolder.style.paddingBottom = "".concat(i, "px")),
              e.calcContainerHeight();
          }, 10));
      },
      initQuery: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s,
              n,
              i,
              o,
              r,
              a,
              u,
              c,
              l,
              d = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((this.curSession = this.generateRandomString(128)),
                        (s = this.query || {}),
                        (n = ""),
                        void 0 !== s.mainQuery)
                      )
                        try {
                          n = decodeURIComponent(s.mainQuery);
                        } catch (e) {
                          n = s.mainQuery;
                        }
                      return (
                        (this.queryUsage =
                          void 0 === s.queryUsage ? "" : s.queryUsage),
                        (this.searchText =
                          void 0 === s.searchText ? "" : s.searchText),
                        (this.contentId =
                          void 0 === s.contentId ? "" : s.contentId),
                        (this.searchfrom =
                          s.searchfrom && "null" !== s.searchfrom
                            ? s.searchfrom
                            : "searchresult"),
                        (this.subScene =
                          void 0 === s.subScene ? "" : s.subScene),
                        (this.subChannel =
                          void 0 === s.subChannel ? "" : s.subChannel),
                        (t.next = 7),
                        w.StockBridge.getStorageSync(D)
                      );
                    case 7:
                      if (
                        ((i = t.sent),
                        (o = i.data),
                        (this.canShowWxClawHintBubble = "true" !== o),
                        this.searchfrom !== P)
                      ) {
                        t.next = 16;
                        break;
                      }
                      return (
                        (this.aiAnniversary = !0),
                        (t.next = 13),
                        w.StockBridge.getStorageSync(x)
                      );
                    case 13:
                      (r = t.sent),
                        (a = r.data),
                        (this.isFirstVisitAnniversary = "true" !== a),
                        w.StockBridge.setStorage(x, "true");
                    case 16:
                      if (
                        (this.isWaiApp && (this.searchfrom = "waixcx"),
                        (this.defaultModelName =
                          void 0 === s.defaultModelName
                            ? ""
                            : s.defaultModelName),
                        void 0 === s.defaultQuesstionArray)
                      )
                        this.defaultQuestionArray = "";
                      else
                        try {
                          this.defaultQuestionArray = decodeURIComponent(
                            s.defaultQuesstionArray
                          );
                        } catch (e) {
                          this.defaultQuestionArray = s.defaultQuesstionArray;
                        }
                      if (
                        (("stablepath" !== this.searchfrom &&
                          "searchicon" !== this.searchfrom &&
                          "searchinputai" !== this.searchfrom &&
                          "portfoliopage" !== this.searchfrom &&
                          "marketpage" !== this.searchfrom &&
                          "newspage" !== this.searchfrom &&
                          this.searchfrom !== P) ||
                          "forceSend" === this.queryUsage ||
                          (this.queryUsage === B && (this.queryQustion = n),
                          (n = "")),
                        void 0 !== n &&
                          n.length > 0 &&
                          (this.hasPresetQuestion = !0),
                        this.initAiModuleMame().then(function () {
                          w.StockBridge.report(
                            "jichu.ai_search.ai_search_page_visible",
                            {
                              searchText: d.searchText,
                              contentId: d.contentId,
                              searchfrom: d.searchfrom,
                              aimodel: d.moduleName,
                            }
                          );
                        }),
                        this.shouldAbtNewUserXuangu(
                          this.searchfrom,
                          this.subScene,
                          this.subChannel
                        ))
                      )
                        try {
                          this.entryAbtCreate(),
                            w.StockBridge.report(
                              "base.ai_search.new_user_xuanguabt_brow",
                              { subScene: this.subScene }
                            );
                        } catch (e) {}
                      if (A) {
                        t.next = 30;
                        break;
                      }
                      return (t.prev = 19), (t.next = 22), this.fetchUserInfo();
                    case 22:
                      (u = t.sent),
                        (c = "1" === (null == u ? void 0 : u.inner_priority)),
                        (l = "3" === (null == u ? void 0 : u.priority_level)),
                        (this.shouldShowSubscriptContent = c || l),
                        (t.next = 30);
                      break;
                    case 28:
                      (t.prev = 28), (t.t0 = t.catch(19));
                    case 30:
                      return (
                        this.entryOnlineAnswerAbt(),
                        this.entryFollowOnAbtCreate(),
                        this.syncTopBubbles(),
                        this.entryGetDeviceId(),
                        (t.next = 36),
                        this.initHistory()
                      );
                    case 36:
                      w.StockBridge.getUserInfo(function (t) {
                        d.initUserInfo(t),
                          w.StockBridge.getStorage(q, function (t) {
                            return h(
                              d,
                              null,
                              e().mark(function i() {
                                var o,
                                  r,
                                  a,
                                  u,
                                  c,
                                  l,
                                  h,
                                  d,
                                  p,
                                  g,
                                  m,
                                  f,
                                  S,
                                  y = this;
                                return e().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((this.hasAgreePermission =
                                              "data" in t && "true" === t.data),
                                            (o = !1),
                                            this.hasAgreePermission)
                                          ) {
                                            e.next = 16;
                                            break;
                                          }
                                          return (
                                            (e.next = 5),
                                            this.entryUsePrivacyGrant()
                                          );
                                        case 5:
                                          (r = e.sent),
                                            (u = (a = r || {})
                                              .needPopPrivacyDialog),
                                            (c = a.privacyResult),
                                            (l = a.privacyType),
                                            (h = a.hasPermission),
                                            (p = (d = c || {})
                                              .consented_user_need_popup),
                                            (g = d.status),
                                            (m = d.consented_any_version),
                                            (o = u),
                                            (this.isUpdateProtocol =
                                              "0" === g &&
                                              !0 === m &&
                                              !1 === p),
                                            (this.privacyResult = c),
                                            (this.privacyType = l),
                                            (this.hasAgreePermission =
                                              h || this.isUpdateProtocol),
                                            this.hasAgreePermission &&
                                              w.StockBridge.setStorage(
                                                q,
                                                "true",
                                                function (e) {}
                                              ),
                                            c && (this.protocalId = c.id);
                                        case 16:
                                          if (
                                            ((this.checkPermissionKeyBoardFlag =
                                              this.hasAgreePermission),
                                            this.hasAgreePermission &&
                                              !o &&
                                              this.checkAiModelSelectGuideShow(),
                                            void 0 !== n && n.length > 0
                                              ? ((this.shouldShowGuideView =
                                                  !this.hasAgreePermission),
                                                this.shouldShowGuideView &&
                                                  (setTimeout(function () {
                                                    y.shouldShowAnserAnimation =
                                                      !0;
                                                  }, 1500),
                                                  setTimeout(function () {
                                                    y.showPermissionDialog(o),
                                                      y.hideKeyboard();
                                                  }, 1700)))
                                              : this.hasAgreePermission
                                              ? (this.shouldShowGuideViewNoQuestion =
                                                  !0)
                                              : ((this.shouldShowGuideViewNoQuestion =
                                                  !0),
                                                setTimeout(function () {
                                                  y.shouldShowAnserAnimationNoQuestion =
                                                    !0;
                                                }, 1e3),
                                                setTimeout(function () {
                                                  y.showPermissionDialog(o),
                                                    y.hideKeyboard();
                                                }, 1200)),
                                            void 0 !== n && n.length > 0)
                                          ) {
                                            if (
                                              ((this.presetFirstQuestion = !0),
                                              (f = n),
                                              (S = ""),
                                              s.questionQuery)
                                            )
                                              try {
                                                S = decodeURIComponent(
                                                  s.questionQuery
                                                );
                                              } catch (e) {
                                                S = s.questionQuery;
                                              }
                                            (this.presetFirstQuestionQuery = S),
                                              this.tryeToInputAndCreateConnectOpeartion(
                                                f
                                              );
                                          }
                                        case 17:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  i,
                                  this
                                );
                              })
                            );
                          });
                      });
                    case 37:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[19, 28]]
            );
          })
        );
      },
      reload: function () {
        var e, t;
        this.disconnect(),
          (this.inputList = []),
          (this.answerList = []),
          (this.thinkingContent = ""),
          (this.replyContent = ""),
          (this.showAiDrawer = !1),
          (this.curSession = ""),
          (this.sessionTimeStart = ""),
          (this.denyAnswer = !1),
          (this.isWxClawSession = !1),
          (this.hasQueryQuestionUsed = !1),
          this.resetHistoryOffset(),
          this.resetQuestionIndex(),
          this.initQuery(),
          null ==
            (t = null == (e = this.$refs.firstGuideItem) ? void 0 : e.reload) ||
            t.call(e);
      },
      initSubScribePush: function () {
        "ams-ai-prompt" === this.searchfrom &&
          w.StockBridge.report("base.ai_search.market_brief_brow");
      },
      initShareSession: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s,
              n,
              i,
              o,
              r,
              a,
              u,
              c,
              l = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.isShareSession) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (this.shouldShowGuideViewNoQuestion = !1),
                        (e.next = 5),
                        this.getShareSessionDetail()
                      );
                    case 5:
                      (s = e.sent),
                        (i = (n = s || {}).question),
                        (o = n.answer),
                        (r = n.requestId),
                        (a = n.moduleName),
                        (u = n.shareCode),
                        i &&
                          o &&
                          ((this.shareCode = u),
                          (this.curSession = this.generateRandomString(128)),
                          (this.curRequestId = r),
                          this.inputList.push(i),
                          this.answerList.push(o),
                          (c = o.reply),
                          this.checkContentAndFollowOn(
                            r,
                            0,
                            c,
                            !0,
                            a || this.moduleName,
                            !1,
                            0
                          )),
                        this.$nextTick(function () {
                          l.scrollToBottom(), l.clearShareSessionDetail();
                        });
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onFocus: function (e) {
        var t,
          s,
          n,
          i = this;
        (this.keyboardShowing = e),
          A &&
            (null ==
              (n =
                null == (s = null == (t = this.$refs) ? void 0 : t.inputRef)
                  ? void 0
                  : s.setKeyboardShowing) ||
              n.call(s, this.keyboardShowing)),
          this.$nextTick(function () {
            i.calculateBackToBottomPosition();
          });
      },
      contentTouch: function (e) {
        this.isProgrammaticScroll && (this.isProgrammaticScroll = !1),
          this.hideKeyboard();
      },
      onVisualViewportChange: function (e) {
        var t = e.target || window.visualViewport;
        null != t &&
          (this.$refs.navTitle.style.top = "".concat(
            Math.max(
              0,
              Math.min(
                document.documentElement.scrollHeight - t.height,
                t.offsetTop
              )
            ),
            "px"
          ));
      },
      hideKeyboard: function () {
        d.wx$1.hideKeyboard();
      },
      syncTopBubbles: function () {
        this.showWxClawHintBubble =
          this.canShowWxClawHintBubble && this.shouldShowSubscriptContent;
      },
      dismissWxClawHintBubble: function () {
        this.canShowWxClawHintBubble && w.StockBridge.setStorage(D, "true"),
          (this.canShowWxClawHintBubble = !1),
          (this.showWxClawHintBubble = !1);
      },
      dismissHY3Bubble: function () {
        this.canShowHY3Bubble &&
          w.StockBridge.setStorage("hasShowNewVersionBubble", "true"),
          (this.canShowHY3Bubble = !1),
          (this.showHY3Bubble = !1);
      },
      handleOpenAiModelSelect: function () {
        this.onOpenAiModelSelect();
      },
      tryeToInputAndCreateConnectOpeartion: function (e) {
        var t = this;
        this.autoCloseDualAnswerIfNeeded(),
          this.queryQustion &&
            !this.hasQueryQuestionUsed &&
            (this.hasQueryQuestionUsed = !0),
          this.isNeedHideKeyboard && this.hideKeyboard();
        var s = new Date().getTime() / 1e3,
          n =
            0 === this.inputList.length ||
            (this.historyDataLength === this.inputList.length &&
              s - this.sessionTimeLatest > 3600);
        (this.isNeedHideKeyboard = !0),
          this.inputList.push(e),
          (this.hasSentQuestion = !0);
        var i = {
          recal: "",
          quote: "",
          reply: "",
          thinking: "",
          docs: [],
          answerFinish: !1,
          serverError: !1,
          permissionError: !1,
          functionObj: null,
          guessObj: null,
          sseStatus: p.SseStatus.BEGIN_CONNECT,
          isOfflineQuestion: !1,
          aimodel: this.moduleName,
          functionTips: "",
          functionXuanGuTips: "",
          serveBusyTips: "",
          AnniversaryShare: !1,
          answerFinishFlag: 0,
          commentStatus: 0,
          sessionTime: n ? k.timeFormat(s) : "",
          requestId: this.generateTraceId(),
          answerChainMode: "",
          processSteps: [],
          useProcessMode: !1,
          mainContentStarted: !1,
        };
        this.answerList.push(i),
          this.$nextTick(function () {
            var e, s, n, i;
            null ==
              (s =
                null == (e = t.$refs.answerlistview)
                  ? void 0
                  : e.setEnableAutoScrollDown) || s.call(e, !0),
              t.scrollToBottomForce(),
              setTimeout(function () {
                t.scrollToBottomForce();
              }, 60),
              null ==
                (i =
                  null == (n = t.$refs.answerlistview)
                    ? void 0
                    : n.startFollowGrowing) || i.call(n, 2e3);
          }),
          this.hasAgreePermission
            ? this.connect()
            : ((this.hasBlockRequest = !0),
              1 == this.inputList.length
                ? this.shouldShowGuideViewNoQuestion
                  ? this.showPermissionDialog(!0)
                  : this.onDenyProtocal(!1)
                : this.showPermissionDialog(!0)),
          (this.hasPresetQuestion = !1);
      },
      getContextInfoList: function () {
        for (
          var e = [],
            t = this.answerList.length - 1,
            s = Math.max(this.historyDataLength, t - 3);
          s < t;
          s++
        ) {
          var n = this.answerList[s].reply;
          if (n && n.length > 0) {
            var i = n
              .replace(new RegExp(":::card.*?:::", "gs"), "")
              .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
            e.push({ question: this.inputList[s], answer: i });
          }
        }
        return e;
      },
      showHalfScreenPermissionDialog: function (e) {},
      goHome: function () {
        this.isMP && d.wx$1.switchTab({ url: "/pages/index/index" });
      },
      closeCurPage: function () {
        w.StockBridge.exitPage();
      },
      claerCurData: function () {
        (this.recalContent = ""),
          (this.quoteContent = ""),
          (this.replyContent = ""),
          (this.thinkingContent = ""),
          (this.docsArray = []);
      },
      generateRandomString: function (e) {
        for (var t = "", s = 0; s < e; s++) {
          var n = Math.floor(62 * Math.random());
          t +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
              n
            );
        }
        return t;
      },
      generateTraceId: function () {
        var e = new Uint8Array(16);
        if (this.isMP)
          for (var t = 0; t < e.length; t++)
            e[t] = Math.floor(256 * Math.random());
        else crypto.getRandomValues(e);
        return Array.from(e, function (e) {
          return e.toString(16).padStart(2, "0");
        }).join("");
      },
      initUserInfo: function (e) {
        (this.userInfo = e),
          (this.curUser = e.openid),
          (this.curOpenId = e.openid),
          (this.curFskey = e.fskey),
          (this.curCheck = e.check);
      },
      getKeyword: function (e) {
        return e < this.inputList.length ? this.inputList[e] : "";
      },
      getRequestId: function (e) {
        return e < this.answerList.length && this.answerList[e]
          ? this.answerList[e].requestId
          : "";
      },
      getDocs: function (e) {
        return e < this.answerList.length ? this.answerList[e].docs : [];
      },
      getFactInnerDocs: function (e) {
        return e < this.answerList.length
          ? this.answerList[e].factInnerDocs
          : [];
      },
      getFactOuterDocs: function (e) {
        return e < this.answerList.length
          ? this.answerList[e].factOuterDocs
          : [];
      },
      getAnniversaryShare: function (e) {
        return (
          e < this.answerList.length && this.answerList[e].AnniversaryShare
        );
      },
      getServerMessageCode: function (e) {
        return e < this.answerList.length
          ? this.answerList[e].serverMessageCode
          : 0;
      },
      getIsMcpAgentMessage: function (e) {
        return (
          e < this.answerList.length && this.answerList[e].isMcpAgentMessage
        );
      },
      functionItemFinish: function () {},
      tapDefaultQuestion: function (e) {
        this.doSendGuessQuestion(e, !1);
      },
      clickWelcomeQuestion: function (e) {
        (this.hasSentQuestion = !0),
          e &&
            e.title &&
            ("newuser_mbti" === e.sub_scene
              ? (this.curMbtiXuanGuFollowOnObj = { subScene: "newuser_mbti" })
              : (this.curWelcomeQuestionObj = e),
            this.doSendGuessQuestion(e.title, !1));
      },
      tapGuessQuestion: function (e, t) {
        this.doSendGuessQuestion(e, !0, t);
      },
      tapNewUserGuessQuestion: function (e) {
        (this.curNewUserXuanGuFollowOnObj = e),
          (this.newUserXuanGuQueryType = e.queryType),
          this.doSendGuessQuestion(e.query, !0);
      },
      tapMbtiGuessQuestion: function (e) {
        (this.curMbtiXuanGuFollowOnObj = e),
          this.doSendGuessQuestion(e.showQuery, !0),
          w.StockBridge.getStorage("mbti_strategy", function (e) {
            e &&
              e.data &&
              w.StockBridge.report("base.ai_search.mbit_re_choose_click", {
                subScene: "newuser_mbti",
                mbti_strategy: e.data,
              });
          });
      },
      doSendGuessQuestion: function (e, t, s) {
        this.isReplying
          ? null != this.curWelcomeQuestionObj &&
            (this.curWelcomeQuestionObj = null)
          : this.denyAnswer ||
            (t
              ? ((this.curQuestionType = "followon"),
                (this.msgType = "text"),
                w.StockBridge.report("jichu.ai_search.follow_on_item_click", {
                  contentId: e,
                  requestid: this.curRequestId,
                  position: s,
                }))
              : (this.curQuestionType = "welcomepage"),
            this.tryeToInputAndCreateConnectOpeartion(e));
      },
      addLoginParams: function (e, t) {
        var s, n, i, o, r;
        if (
          (this.loginCheck
            ? ((s = this.curUser),
              (n = this.curOpenId),
              (i = this.curFskey),
              (o = this.curCheck))
            : ((s = "zenoscai"),
              (n = "oA0Gbjk5FACnkjI98WR91uW_p0nY"),
              (i = "ttttt"),
              (o = "10")),
          t)
        )
          r = ""
            .concat(e, "&user=")
            .concat(s, "&openid=")
            .concat(n, "&fskey=")
            .concat(i, "&check=")
            .concat(o);
        else {
          r = ""
            .concat(e, "user=")
            .concat(s, "&openid=")
            .concat(n, "&fskey=")
            .concat(i, "&check=")
            .concat(o);
          var a = "";
          (a = "&appid=wx9cf8c670ebd68ce4"),
            "mpweapp" === d.ShellTypeEnum.MPWAI &&
              (a = "&appid=wx1559de8bc252bce9"),
            (r = "".concat(r).concat(a));
        }
        return r;
      },
      generateUrl: function () {
        var e = this.inputList[this.inputList.length - 1],
          t = e;
        this.presetFirstQuestion &&
          ((e = this.presetFirstQuestionQuery || e),
          (this.presetFirstQuestion = !1)),
          null != this.curNewUserXuanGuFollowOnObj &&
            this.curNewUserXuanGuFollowOnObj.query &&
            (e = this.curNewUserXuanGuFollowOnObj.query || e),
          (this.curQueryForPost = e),
          (this.curQueryOriginForPost = t);
        var s = this.curSession;
        this.getLastAnswerItem().requestId
          ? (this.curRequestId = this.getLastAnswerItem().requestId)
          : ((this.curRequestId = this.generateTraceId()),
            (this.getLastAnswerItem().requestId = this.curRequestId));
        var n = w.StockBridge.getAppValue(),
          i = "";
        (i = "&appid=wx9cf8c670ebd68ce4"),
          "mpweapp" === d.ShellTypeEnum.MPWAI &&
            (i = "&appid=wx1559de8bc252bce9");
        var o,
          r = this.isWzqXcx || this.isWzqLight ? "trpc_agent" : "xuangu";
        (o =
          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/sse/search?session="
            .concat(s, "&request_id=")
            .concat(this.curRequestId)
            .concat(i, "&app=")
            .concat(n, "&module=")
            .concat(this.moduleName, "&rag=")
            .concat(this.enableRag, "&searchfrom=")
            .concat(this.searchfrom, "&cache=true&gray=")
            .concat(r, "&thinking=")
            .concat(this.thinking)),
          (o = this.addLoginParams(o, !0));
        var a = this.inputList.length;
        if (
          (this.subScene &&
            1 === a &&
            (o = "".concat(o, "&subScene=").concat(this.subScene)),
          this.subChannel &&
            1 === a &&
            (o = "".concat(o, "&subChannel=").concat(this.subChannel)),
          (o = "".concat(o, "&extra_version=v2")),
          (o = "".concat(o, "&agent=1")),
          "" != this.newUserXuanGuQueryType &&
            ((o = ""
              .concat(o, "&query_type=")
              .concat(this.newUserXuanGuQueryType)),
            (this.newUserXuanGuQueryType = "")),
          null != this.curNewUserXuanGuFollowOnObj)
        ) {
          var u = this.curNewUserXuanGuFollowOnObj || {},
            c = u.subChannel,
            l = u.sub_channel;
          (o = "".concat(o, "&subChannel=").concat(c || l || "")),
            (this.curNewUserXuanGuFollowOnObj = null),
            this.isFirstClicknewUserFollowOn &&
              !this.mockTradeAbtUser &&
              ((o = "".concat(o, "&marketing=newuser")),
              (this.isFirstClicknewUserFollowOn = !1));
        }
        if (
          ("" !== this.mockTradeInfoStr &&
            this.mockTradeAbtUser &&
            (o = "".concat(o, "&marketing=").concat(this.mockTradeInfoStr)),
          null != this.curMbtiXuanGuFollowOnObj && -1 == o.indexOf("subScene"))
        ) {
          var h = (this.curMbtiXuanGuFollowOnObj || {}).subScene;
          (o = "".concat(o, "&subScene=").concat(h || "")),
            (this.curMbtiXuanGuFollowOnObj = null);
        }
        if (null != this.curWelcomeQuestionObj) {
          if (-1 == o.indexOf("subChannel")) {
            var p = (this.curWelcomeQuestionObj || {}).sub_channel;
            o = "".concat(o, "&subChannel=").concat(p || "");
          }
          if (-1 == o.indexOf("subScene")) {
            var g = (this.curWelcomeQuestionObj || {}).sub_scene;
            o = "".concat(o, "&subScene=").concat(g || "");
          }
          this.curWelcomeQuestionObj = null;
        }
        return (
          w.StockBridge.ENV === d.EnvTypeEnum.SHY_NATIVE &&
            this.appDeviceId &&
            (o = "".concat(o, "&_devId=").concat(this.appDeviceId)),
          (o = "".concat(o, "&plugin_pos=content")),
          (o = ""
            .concat(o, "&question_src=")
            .concat(encodeURIComponent(this.curQuestionType))),
          (o = ""
            .concat(o, "&incrementModel=")
            .concat(this.useIncrementalModel ? 1 : 0)),
          (o = "".concat(o, "&blue_tag=true")),
          this.onlineAnswerAbtType &&
            (o = "".concat(o, "&ab_test=").concat(this.onlineAnswerAbtType)),
          o
        );
      },
      onDisableOuterAutoScroll: function () {
        var e, t;
        null ==
          (t =
            null == (e = this.$refs.answerlistview)
              ? void 0
              : e.setEnableAutoScrollDown) || t.call(e, !1);
      },
      scrollToBottomReal: function () {
        var e, t;
        null ==
          (t =
            null == (e = this.$refs.answerlistview)
              ? void 0
              : e.scrollToBottom) || t.call(e);
      },
      scrollToBottomForce: function () {
        var e, t;
        null ==
          (t =
            null == (e = this.$refs.answerlistview)
              ? void 0
              : e.scrollToBottom) || t.call(e, !0, !0);
      },
      scrollHistoryToBottom: function () {
        var e,
          t,
          s = w.StockBridge.ENV === d.EnvTypeEnum.MP ? 2e3 : 1500;
        null ==
          (t =
            null == (e = this.$refs.answerlistview)
              ? void 0
              : e.pinToBottomForHistory) || t.call(e, s);
      },
      setAnswerFinish: function () {
        var e = this;
        this.answerList.length > 0 &&
          (d.Vue.set(this.getLastAnswerItem(), "answerFinish", !0),
          this.$nextTick(function () {
            e.scrollToBottom();
          }));
      },
      stopAnswer: function () {
        var e = this,
          t = this.answerList.length - 1,
          s = this.answerList[t];
        if (s && s.isDualAnswer) {
          var n = this.$refs.dualAnswerRef,
            i = Array.isArray(n) ? n[n.length - 1] : n,
            o = [];
          i && "function" == typeof i.abortAll && (o = i.abortAll() || []),
            this.setAnswerFinishFlag(!1),
            (this.isReplying = !1),
            (o.length > 0
              ? o
              : [s.requestId, s.dualRequestId2].filter(Boolean)
            ).forEach(function (t) {
              e.notifyServerStopAnswer(e.curSession, t);
            });
          var r = { index: t, complete: !1, searchfrom: this.searchfrom };
          return (
            "mpweapp" === d.ShellTypeEnum.SHY &&
              shy.notify("common-ai-answer-finish", c({ module: !1 }, r)),
            w.StockBridge.busEmit("common-ai-answer-finish", r),
            void w.StockBridge.report(T, this.getAnswerFinshReportObj(0))
          );
        }
        "" === this.replyContent &&
          ((this.replyContent = "已暂停生成"),
          d.Vue.set(this.answerList[t], "reply", this.replyContent)),
          this.$nextTick(function () {
            d.Vue.set(e.answerList[t], "sseStatus", p.SseStatus.ON_ERROR);
          }),
          this.setAnswerFinish(),
          this.claerCurData(),
          this.disconnect(),
          this.setAnswerFinishFlag(!1),
          this.notifyServerStopAnswer(this.curSession, this.curRequestId);
        var a = { index: t, complete: !1, searchfrom: this.searchfrom };
        "mpweapp" === d.ShellTypeEnum.SHY &&
          shy.notify("common-ai-answer-finish", c({ module: !1 }, a)),
          w.StockBridge.busEmit("common-ai-answer-finish", a),
          w.StockBridge.report(T, this.getAnswerFinshReportObj(0)),
          w.StockBridge.report("jichu.ai_search.manual_stop_answer", {
            trace_id: this.curTraceId,
            requestid: this.curRequestId,
            session: this.curSession,
            searchfrom: this.searchfrom,
            aimodel: this.moduleName,
          });
      },
      connect: function () {
        var e,
          t = this;
        this.disconnect(),
          this.log("[info] connecting to ".concat(this.url), "system"),
          (this.isReplying = !0),
          (this.hasFollowOnShown = !1);
        var s = null != this.inputList ? this.inputList.length : 0,
          n = +(null == (e = this.inputList) ? void 0 : e.length)
            ? this.inputList.length - 1
            : 0,
          i = this.presetFirstQuestion ? this.subScene : "",
          o = this.generateUrl();
        if (this.pendingQuickInputReport) {
          var r = this.pendingQuickInputReport.isNewUser
            ? "base.ai_search.new_user_quick_click"
            : "base.ai_search.old_user_quick_click";
          w.StockBridge.report(r, {
            module: this.pendingQuickInputReport.module,
            contentId: this.pendingQuickInputReport.contentId,
            requestid: this.curRequestId,
            subScene: this.pendingQuickInputReport.subScene,
          }),
            (this.pendingQuickInputReport = null);
        }
        w.StockBridge.report("jichu.ai_search.send_question", {
          searchText: this.searchText,
          contentId: this.contentId,
          requestid: this.curRequestId,
          session: this.curSession,
          searchfrom: this.searchfrom,
          questiontimes: s,
          questiontype: this.curQuestionType,
          aimodel: this.moduleName,
          subScene: i,
          msg_type: this.msgType,
          thinking: this.thinking,
        });
        var a = {
          method: "POST",
          data: {
            context: this.getContextInfoList(),
            query: this.curQueryForPost,
            query_origin: this.curQueryOriginForPost,
          },
          headers: { "Content-Type": "application/json" },
          onmessage: function (e, s) {
            if (
              (clearTimeout(t.sseTimeoutId),
              (t.sseTimeoutId = setTimeout(function () {
                w.StockBridge.aegisReportEvent("[stock-search-ai] sseTimeout", {
                  errorMessage: "SSE请求3秒连接未收到消息",
                });
              }, 3e3)),
              "" !== e.event || "" !== e.data)
            ) {
              t.addLogItem(e);
              var i = e.data;
              if ("message" === e.event)
                if ("[DONE]" === i) {
                  clearTimeout(t.sseTimeoutId),
                    w.StockBridge.report(T, t.getAnswerFinshReportObj(1)),
                    t.setAnswerFinishFlag(!0),
                    t.claerCurData(),
                    t.setAnswerFinish();
                  var o = { index: n, complete: !0, searchfrom: t.searchfrom };
                  "mpweapp" === d.ShellTypeEnum.SHY &&
                    shy.notify("common-ai-answer-finish", c({ module: !1 }, o)),
                    w.StockBridge.busEmit("common-ai-answer-finish", o);
                } else if (
                  ((t.curTraceId = p.tryToParseTraceId(i)),
                  (t.isReplying = !0),
                  p.isRecallReply(i))
                )
                  (t.recalContent = p.parserMessage(i)),
                    d.Vue.set(
                      t.getLastAnswerItem(),
                      "sseStatus",
                      p.SseStatus.ON_RECALL
                    ),
                    d.Vue.set(t.getLastAnswerItem(), "recal", t.recalContent);
                else if (p.isQuoteReply(i))
                  (t.quoteContent = p.parserMessage(i)),
                    t.quoteContent &&
                      t.quoteContent.length &&
                      (d.Vue.set(
                        t.getLastAnswerItem(),
                        "sseStatus",
                        p.SseStatus.ON_QUOTE
                      ),
                      d.Vue.set(
                        t.getLastAnswerItem(),
                        "quote",
                        t.quoteContent
                      ));
                else if (p.isDeltaDocReply(i))
                  (t.docsArray = p.parseDocReply(i)),
                    d.Vue.set(t.getLastAnswerItem(), "docs", t.docsArray);
                else if (p.isSmartServiceMessage(i))
                  d.Vue.set(t.getLastAnswerItem(), "isSmartServiceMessage", !0),
                    d.Vue.set(
                      t.getLastAnswerItem(),
                      "mcpQuote",
                      "正在检索智能客服知识库..."
                    );
                else if (p.isMcpQuoteInfoPluginReply(i)) {
                  var r = p.parseCommonAgentComponentName(i),
                    a = p.parserMessage(i),
                    u = [];
                  try {
                    u = JSON.parse(a || []);
                  } catch (e) {
                    u = [];
                  }
                  "fact_inner_reference" === r
                    ? d.Vue.set(t.getLastAnswerItem(), "factInnerDocs", u)
                    : "fact_outer_reference" === r &&
                      d.Vue.set(t.getLastAnswerItem(), "factOuterDocs", u);
                } else if (p.isSubAagentMessage(i))
                  d.Vue.set(t.getLastAnswerItem(), "isMcpAgentMessage", !0);
                else if (p.isSubAagentReply(i))
                  (t.quoteContent = p.parserMessage(i)),
                    t.quoteContent &&
                      t.quoteContent.length &&
                      (d.Vue.set(
                        t.getLastAnswerItem(),
                        "sseStatus",
                        p.SseStatus.ON_QUOTE
                      ),
                      d.Vue.set(
                        t.getLastAnswerItem(),
                        "mcpQuote",
                        t.quoteContent
                      ));
                else if (p.isDeltaToolResponseReply(i)) {
                  var l = t.getLastAnswerItem();
                  g.reportMemoryIfHit(i),
                    l.answerChainMode === p.ANSWER_CHAIN_TRPC_AGENT &&
                      p.handleProcessToolResponse(l, i);
                } else if (p.isDeltaToolCallsReply(i)) {
                  var h = t.getLastAnswerItem();
                  h.answerChainMode === p.ANSWER_CHAIN_TRPC_AGENT &&
                    p.handleProcessToolCall(h, i, t);
                } else if (p.isDeltaContentReply(i)) {
                  var m = t.getLastAnswerItem();
                  d.Vue.set(m, "sseStatus", p.SseStatus.ON_CONTENT),
                    m.answerChainMode === p.ANSWER_CHAIN_TRPC_AGENT
                      ? p.handleProcessContent(m, p.parserContent(i), t)
                      : t.parseMainContent(i);
                } else if (p.isDeltaReasoningContentReply(i))
                  d.Vue.set(
                    t.getLastAnswerItem(),
                    "sseStatus",
                    p.SseStatus.ON_REASON_CONTENT
                  ),
                    t.parseThinkingContent(i);
                else if (
                  p.isFunctionPluginMessage(i) ||
                  p.isXuanGuPluginMessage(i)
                ) {
                  var f = p.parseFunctionPluginMessage(i);
                  t.claerCurData(),
                    p.isFunctionPluginMessage(i)
                      ? d.Vue.set(t.getLastAnswerItem(), "functionTips", f)
                      : d.Vue.set(
                          t.getLastAnswerItem(),
                          "functionXuanGuTips",
                          f
                        );
                } else if (
                  p.isCommonAgentPluginReply(i, t.componentPluginArray)
                ) {
                  var S = p.parseCommonAgentComponentName(i),
                    y = p.parserMessage(i);
                  "c-ai-general_watchlist" === S &&
                    (y = t.generateGeneralWatchlistData(y));
                  var b = p.generateComponentContent(S, y),
                    I = t.getLastAnswerItem().reply || "";
                  (t.replyContent = I.concat(b)),
                    d.Vue.set(t.getLastAnswerItem(), "reply", t.replyContent),
                    "c-ai-marketing" === S &&
                      t.mockTradeAbtUser &&
                      (t.mockTradeInfoStr = "");
                } else if (p.isXuanGuFunctionPluginReply(i)) {
                  var k = p.parseXuanGuFunctionPluginReply(i);
                  d.Vue.set(t.getLastAnswerItem(), "functionObj", k);
                } else if (p.isServerCacheMessage(i))
                  d.Vue.set(t.getLastAnswerItem(), "isOfflineQuestion", !0);
                else if (p.isServerBusyMessage(i)) {
                  var v = p.parseServerBusyMessage(i);
                  d.Vue.set(t.getLastAnswerItem(), "serveBusyTips", v);
                } else if (
                  p.isFunctionPluginInContentReply(i, t.componentPluginArray)
                ) {
                  var C = p.parseFunctionPluginComponentType(i),
                    q = p.parseFunctionPluginReply(i);
                  q.mockTradeAbtUser = t.mockTradeAbtUser;
                  var P = JSON.stringify(q),
                    x = p.generateComponentContent(C, P),
                    D = t.getLastAnswerItem().reply || "";
                  (t.replyContent = D.concat(x)),
                    d.Vue.set(t.getLastAnswerItem(), "reply", t.replyContent);
                } else if (p.isBusinessPluginMessage(i)) {
                  var B = p.parseBusinessPluginMessage(i);
                  d.Vue.set(t.getLastAnswerItem(), "businessPluginMessage", B);
                } else
                  p.isNewUserPickStockMessage(i)
                    ? d.Vue.set(t.getLastAnswerItem(), "newUserPickStock", !0)
                    : p.isServerCodeMessage(i) &&
                      d.Vue.set(
                        t.getLastAnswerItem(),
                        "serverMessageCode",
                        p.parseServerCodeMessage(i)
                      );
              else if ("param" === e.event)
                p.isParamObj(i) && t.parseModelueParamData(i);
              else if ("exception" === e.event) {
                var L = JSON.parse(i);
                t.replyContent = L.msg;
                var M,
                  O = L.code;
                1618601004 === O
                  ? ((M = t.replyContent),
                    (t.denyAnswer = !0),
                    d.Vue.set(t.getLastAnswerItem(), "illegalQuestion", !0))
                  : 1620053006 === O ||
                    1620053007 === O ||
                    1620053010 === O ||
                    1620053011 === O ||
                    1620053013 === O ||
                    1618601003 === O
                  ? ((M = t.replyContent),
                    (1620053010 !== O && 1620053011 !== O) ||
                      d.Vue.set(
                        t.getLastAnswerItem(),
                        "sseStatus",
                        p.SseStatus.ON_SERVER_XP
                      ))
                  : 1618601001 === O
                  ? ((M = "请登录后再提问哦。"),
                    A &&
                      shy.login(function (e) {
                        "success" !== e.status ||
                          t.hasRefreshLogin ||
                          ((t.hasRefreshLogin = !0),
                          w.StockBridge.getUserInfo(function (e) {
                            t.initUserInfo(e), t.refreshQuestionAndAnswer();
                          }));
                      }))
                  : (w.StockBridge.aegisReportEvent(
                      "[stock-search-ai] sseMessageError",
                      { serverCode: O }
                    ),
                    (M = "服务器端异常，请稍后重试。")),
                  d.Vue.set(t.getLastAnswerItem(), "reply", M),
                  d.Vue.set(t.getLastAnswerItem(), "serverError", !0),
                  t.setAnswerFinish(),
                  (t.isReplying = !1);
              } else if ("error" === e.event)
                t.log(
                  "[error] disconnected, automatically re-attempting connection",
                  "system"
                ),
                  t.claerCurData(),
                  t.disconnect();
              else if (null === e.event && null !== e.data)
                if (p.isDeltaDocReply(i))
                  (t.docsArray = p.parseDocReply(i)),
                    d.Vue.set(t.getLastAnswerItem(), "docs", t.docsArray);
                else if (p.isDeltaContentReply(i))
                  w.StockBridge.aegisReportEvent(
                    "[stock-search-ai] nullEevent",
                    { errorMessage: "nullEevent", content: i }
                  ),
                    t.parseMainContent(i);
                else if (p.isDeltaReasoningContentReply(i))
                  w.StockBridge.aegisReportEvent(
                    "[stock-search-ai] nullEevent",
                    { errorMessage: "nullEevent", content: i }
                  ),
                    t.parseThinkingContent(i);
                else if (
                  p.isFunctionPluginMessage(i) ||
                  p.isXuanGuPluginMessage(i)
                ) {
                  var Q = p.parseFunctionPluginMessage(i);
                  t.claerCurData(),
                    p.isFunctionPluginMessage(i)
                      ? d.Vue.set(t.getLastAnswerItem(), "functionTips", Q)
                      : d.Vue.set(
                          t.getLastAnswerItem(),
                          "functionXuanGuTips",
                          Q
                        );
                } else if (p.isXuanGuFunctionPluginReply(i)) {
                  var R = p.parseXuanGuFunctionPluginReply(i);
                  d.Vue.set(t.getLastAnswerItem(), "functionObj", R);
                }
            }
          },
          onclose: function () {
            t.$nextTick(function () {
              d.Vue.set(
                t.getLastAnswerItem(),
                "sseStatus",
                p.SseStatus.ON_CLOSE
              );
            });
            var e = t.getLastAnswerItem();
            p.shouldApplyReplyErrFallback(e) && (e.reply = M),
              t.setAnswerFinish(),
              t.claerCurData(),
              (t.isReplying = !1),
              clearTimeout(t.sseTimeoutId),
              t.processCacheBuffer();
          },
          onerror: function (e) {
            "AbortError" === e.name ||
              w.StockBridge.aegisReportEvent(
                "[stock-search-ai] sseConnectOnError",
                { errorMessage: e }
              ),
              t.$nextTick(function () {
                d.Vue.set(
                  t.getLastAnswerItem(),
                  "sseStatus",
                  p.SseStatus.ON_ERROR
                );
              });
            var s = t.getLastAnswerItem();
            p.shouldApplyReplyErrFallback(s) && (s.reply = M),
              t.setAnswerFinish(),
              t.claerCurData(),
              (t.isReplying = !1),
              clearTimeout(t.sseTimeoutId),
              t.processCacheBuffer();
          },
        };
        g.fetchEventDataWrapper(o, a);
      },
      parseModelueParamData: function (e) {
        var t = JSON.parse(e);
        p.applyAnswerChainModeFromParam(this.getLastAnswerItem(), t),
          t &&
            t.module &&
            this.moduleName !== t.module &&
            (this.updateModuleName(t.module),
            w.StockBridge.report("jichu.ai_search.model_xianpin", {
              requestid: t.request_id,
              session: this.curSession,
              aimodel: t.module,
            }));
      },
      parseMainContent: function (e) {
        (this.replyContent = this.replyContent.concat(p.parserContent(e))),
          d.Vue.set(this.getLastAnswerItem(), "reply", this.replyContent);
      },
      parseThinkingContent: function (e) {
        (this.thinkingContent = this.thinkingContent.concat(
          p.parserReasoningContent(e)
        )),
          d.Vue.set(this.getLastAnswerItem(), "thinking", this.thinkingContent);
      },
      disconnect: function () {
        g.abortController(),
          this.log("[info] disconnected", "system"),
          (this.isReplying = !1);
      },
      now: function () {
        var e = new Date();
        return ""
          .concat(e.getHours(), " : ")
          .concat(e.getMinutes(), " : ")
          .concat(e.getSeconds());
      },
      log: function (e, t) {
        this.logs.push([this.now(), e, t]);
      },
      onFail: function (e) {},
      requestKeyboard: function () {
        var e = this;
        this.denyAnswer ||
          (A &&
            shy.invoke(
              "showSemiEditor",
              {
                placeholder: "请输入您想了解的金融问题",
                fontSize: "16",
                semi_type: "lite",
              },
              function (t) {
                t.status && "fail" === t.status && e.onFail();
              }
            ));
      },
      onRequestPermissionDialog: function () {
        this.hasAgreePermission
          ? w.StockBridge.toast("已同意授权")
          : (this.showPermissionDialog(!0), (this.hasBlockRequest = !0));
      },
      cancelZan: function (e, t, s, n, i, o) {
        this.requestToZanOrCai(e, t, !0, "", s, n, i, o, !0);
      },
      cancelCai: function (e, t, s, n, i, o) {
        this.requestToZanOrCai(e, t, !1, "", s, n, i, o, !0);
      },
      clickZan: function (e, t, s, n, i, o) {
        w.StockBridge.report("jichu.ai_search.answer_content_like", {
          trace_id: this.curTraceId,
          requestid: this.curRequestId,
          session: this.curSession,
          searchfrom: this.searchfrom,
          aimodel: n,
        }),
          this.requestToZanOrCai(e, t, !0, "", s, n, i, o, !1);
      },
      clickCai: function (e, t, s, n, i, o) {
        (this.curCaiRequestId = e),
          (this.curCaiIndex = t),
          (this.curCaiAiModelName = n),
          (this.curOfflineQuestion = s),
          (this.curNewUserPickStock = i),
          (this.curServerMessageCode = o),
          this.showSelectDisLikeReasonDialog(!0);
      },
      onShare: function (e, t) {
        var s = this.getKeyword(e),
          n = c({ question: s }, t);
        this.isShareSession &&
          e === this.answerList.length - 1 &&
          (n = l(c({}, n), { shareCode: this.shareCode })),
          this.$emit("shareAiAnswer", n),
          w.StockBridge.busEmit("common-ai-prompt-share", n);
      },
      requestToZanOrCai: function (t, s, n, i, o, r, a, u) {
        var c = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        return h(
          this,
          null,
          e().mark(function l() {
            var h, g, m, f, S, y, b;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (h =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/feedback?"),
                        (h = this.addLoginParams(h, !1)),
                        (g = "" === t ? this.curRequestId : t),
                        (m = ""),
                        (f = [
                          p.SERVER_CODE_MBTI_ANSWER,
                          p.SERVER_CODE_WUJI,
                        ].includes(u)),
                        (o || a || f) && (m = "offline"),
                        "deepsea" === r && (m = "deepsea"),
                        (S = {
                          session: this.curSession,
                          requestId: g,
                          user: this.curOpenId,
                          type: m,
                        }),
                        c && (S.op = 1),
                        n
                          ? (S.likes = 1)
                          : ((S.likes = 2), (S.reason = encodeURIComponent(i))),
                        (y = this),
                        (e.prev = 8),
                        (e.next = 11),
                        w.StockBridge.request(h, "POST", S, {
                          dataType: "json",
                          header: { "Content-Type": "application/json" },
                        })
                      );
                    case 11:
                      (b = e.sent) &&
                        (0 === b.code
                          ? s < y.answerList.length &&
                            (c
                              ? d.Vue.set(
                                  this.answerList[s],
                                  "commentStatus",
                                  0
                                )
                              : d.Vue.set(
                                  this.answerList[s],
                                  "commentStatus",
                                  n ? 1 : 2
                                ))
                          : (w.StockBridge.aegisReportEvent(
                              "[stock-search-ai] aiFeedBackFailed",
                              {
                                ext4: "request to zan or cai failed,".concat(b),
                              }
                            ),
                            s < y.answerList.length &&
                              (c ||
                                d.Vue.set(
                                  this.answerList[s],
                                  "commentStatus",
                                  0
                                )))),
                        (e.next = 18);
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e.catch(8)),
                        w.StockBridge.aegisReportEvent(
                          "[stock-search-ai] aiFeedBackFailed",
                          { ext4: JSON.stringify(e.t0 || {}) }
                        );
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              l,
              this,
              [[8, 15]]
            );
          })
        );
      },
      showSelectDisLikeReasonDialog: function (e) {
        this.showDisLikeDialog = e;
      },
      showFullScreenDialog: function (e) {
        this.showFullScreenFeedback = e;
      },
      cancelFeedback: function () {
        this.showSelectDisLikeReasonDialog(!1);
      },
      submitUnlike: function (e) {
        this.showSelectDisLikeReasonDialog(!1),
          this.requestToZanOrCai(
            this.curCaiRequestId,
            this.curCaiIndex,
            !1,
            e,
            this.curOfflineQuestion,
            this.curCaiAiModelName,
            this.curNewUserPickStock,
            this.curServerMessageCode,
            !1
          ),
          w.StockBridge.report("jichu.ai_search.answer_content_un_like", {
            trace_id: this.curTraceId,
            requestid: this.curRequestId,
            session: this.curSession,
            is_completed: this.getAnswerFinishStatus(this.curCaiIndex),
            searchfrom: this.searchfrom,
            aimodel: this.curCaiAiModelName,
          });
      },
      submitComplaint: function () {
        this.showFullScreenDialog(!0);
      },
      onAgreeProtocal: function () {
        var e = this;
        (this.shouldShowAnserAnimationNoQuestion = !1),
          this.showPermissionDialog(!1),
          (this.hasAgreePermission = "true"),
          setTimeout(function () {
            e.checkAiModelSelectGuideShow();
          }, 500),
          w.StockBridge.setStorage(q, "true", function (t) {
            e.checkPermissionKeyBoardFlag = !0;
          }),
          this.hasBlockRequest &&
            (d.Vue.set(this.getLastAnswerItem(), "permissionError", !1),
            this.connect(),
            (this.hasBlockRequest = !1));
      },
      onDenyProtocal: function () {
        this.showPermissionDialog(!1),
          this.hasBlockRequest &&
            d.Vue.set(this.getLastAnswerItem(), "permissionError", !0);
      },
      showPermissionDialog: function (e) {
        var t = this,
          s = e && !1;
        if ((this.unsubscribeGlobalPrivacy(), s)) {
          var n = function (e) {
            e &&
              "init" !== e &&
              (t.unsubscribeGlobalPrivacy(),
              (t.showFullScreenPermissionDialog = !0));
          };
          return (
            (this.globalPrivacyListener = n),
            void w.StockBridge.privacyAgreement.subscribe(n)
          );
        }
        this.showFullScreenPermissionDialog = e;
      },
      unsubscribeGlobalPrivacy: function () {
        this.globalPrivacyListener &&
          w.StockBridge.privacyAgreement &&
          w.StockBridge.privacyAgreement.unsubscribe(
            this.globalPrivacyListener
          ),
          (this.globalPrivacyListener = null);
      },
      closeFullScreenComplaint: function () {
        this.showFullScreenDialog(!1);
      },
      submitFullScreenComplaint: function (e) {
        this.showFullScreenDialog(!1),
          this.showSelectDisLikeReasonDialog(!1),
          this.requestToZanOrCai(
            this.curCaiRequestId,
            this.curCaiIndex,
            !1,
            e,
            this.curOfflineQuestion,
            this.curCaiAiModelName,
            this.curNewUserPickStock,
            this.curServerMessageCode,
            !1
          ),
          w.StockBridge.report("jichu.ai_search.answer_content_un_like", {
            trace_id: this.curTraceId,
            requestid: this.curRequestId,
            session: this.curSession,
            is_completed: this.getAnswerFinishStatus(this.curCaiIndex),
            searchfrom: this.searchfrom,
          });
      },
      setAnswerFinishFlag: function (e) {
        this.answerList.length > 0 &&
          (this.getLastAnswerItem().answerFinishFlag = e ? 1 : 0);
      },
      getAnswerFinishStatus: function (e) {
        return this.answerList.length > e
          ? this.answerList[e].answerFinishFlag
          : 0;
      },
      shouldUseAskAiQuestion: function () {
        return (
          !this.hasInputContent &&
          this.queryUsage === B &&
          this.queryQustion &&
          0 === this.inputList.length &&
          !this.isMP
        );
      },
      onSendEmpty: function () {
        var e, t, s, n, i, o, r, a, u;
        if (!this.hasQueryQuestionUsed && this.queryQustion)
          return (
            null ==
              (s =
                null == (t = null == (e = this.$refs) ? void 0 : e.inputRef)
                  ? void 0
                  : t.blur) || s.call(t),
            (this.curQuestionType = "darkwords"),
            this.tryeToInputAndCreateConnectOpeartion(this.queryQustion),
            void (this.hasQueryQuestionUsed = !0)
          );
        this.shouldUseAskAiQuestion()
          ? (null ==
              (o =
                null == (i = null == (n = this.$refs) ? void 0 : n.inputRef)
                  ? void 0
                  : i.blur) || o.call(i),
            this.tryeToInputAndCreateConnectOpeartion(this.queryQustion))
          : (null ==
              (u =
                null == (a = null == (r = this.$refs) ? void 0 : r.inputRef)
                  ? void 0
                  : a.keepFocus) || u.call(a),
            w.StockBridge.toast("请输入有效问题"));
      },
      onHasInputContent: function () {
        var e = this;
        (this.hasInputContent = !0),
          this.$nextTick(function () {
            e.calculateBackToBottomPosition();
          });
      },
      onDualAnswerPrefer: function (e) {
        (this._dualAnswerPreferData = e),
          e.isAutoSelect ||
            this.reportAbtestPreference({ requestId: e.selectedRequestId });
      },
      reportAbtestPreference: function (t) {
        return h(this, arguments, function (t) {
          var s = this,
            n = t.requestId;
          return e().mark(function t() {
            var i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "https://proxy.finance.qq.com/cgi/cgi-bin/openai/user/abtest/prefer",
                        (i = I.getSignV3({
                          data: l(
                            c(
                              {},
                              b.buildSignedLoginParams({
                                loginCheck: s.loginCheck,
                                curUser: s.curUser,
                                curOpenId: s.curOpenId,
                                curFskey: s.curFskey,
                                curCheck: s.curCheck,
                              })
                            ),
                            {
                              session: s.curSession,
                              requestId: n,
                              abType: "ab_pk",
                              t: new Date().getTime(),
                            }
                          ),
                          method: "GET",
                          origin: w.StockBridge.getAppValue(),
                        })),
                        (e.prev = 2),
                        (e.next = 5),
                        b.requestWrapper(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/user/abtest/prefer",
                          "GET",
                          i,
                          { forceCallback: !0 }
                        )
                      );
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(2));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[2, 7]]
            );
          })();
        });
      },
      onDualAnswerCollapseDone: function (e) {
        var t = this,
          s = e.outerIndex,
          n = this._dualAnswerPreferData;
        if (n) {
          var i = this.answerList[s];
          if (i) {
            var o = n.answerData,
              r = n.selectedRequestId;
            (i.recal = o.recal),
              (i.quote = o.quote),
              (i.reply = o.reply),
              (i.thinking = o.thinking),
              (i.docs = o.docs),
              (i.factInnerDocs = o.factInnerDocs),
              (i.factOuterDocs = o.factOuterDocs),
              (i.answerFinish = o.answerFinish),
              (i.serverError = o.serverError),
              (i.sseStatus = o.sseStatus),
              (i.functionTips = o.functionTips),
              (i.functionXuanGuTips = o.functionXuanGuTips),
              (i.functionObj = o.functionObj),
              (i.businessPluginMessage = o.businessPluginMessage),
              (i.newUserPickStock = o.newUserPickStock),
              (i.illegalQuestion = o.illegalQuestion),
              (i.isOfflineQuestion = o.isOfflineQuestion),
              (i.serveBusyTips = o.serveBusyTips),
              (i.serverMessageCode = o.serverMessageCode),
              (i.mcpQuote = o.mcpQuote),
              (i.isSmartServiceMessage = o.isSmartServiceMessage),
              (i.isMcpAgentMessage = o.isMcpAgentMessage),
              (i.requestId = r),
              (i.isDualAnswer = !1),
              (i.guessObj = null),
              (this._dualAnswerPreferData = null),
              this.$nextTick(function () {
                t.scrollToBottom();
              });
          }
        }
      },
      onDualAnswerBothFinish: function (e) {
        (this.isReplying = !1),
          w.StockBridge.report(T, this.getAnswerFinshReportObj(1));
      },
      autoCloseDualAnswerIfNeeded: function () {
        var e = this.$refs.dualAnswerRef;
        if (e) {
          var t = Array.isArray(e) ? e[e.length - 1] : e;
          t && "function" == typeof t.autoSelectLeft && t.autoSelectLeft();
        }
      },
      onVoiceEditSendQuestion: function (e) {
        (this.isNeedHideKeyboard = !1), this.onSendQuestion(e, "voice");
      },
      onSendQuestion: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "text";
        (this.hasSentQuestion = !0),
          (this.msgType = t),
          (this.curQuestionType = "active"),
          this.setAnswerFinish(),
          this.resetQuestionIndex(),
          this.tryeToInputAndCreateConnectOpeartion(e);
      },
      getRealQuestionIndex: function (e, t) {
        var s = this.answerList.findIndex(function (t) {
          return t.requestId === e;
        });
        return s >= 0 ? s : t;
      },
      checkContentAndFollowOn: function (t, s, n, i, o, r, a) {
        return h(
          this,
          null,
          e().mark(function u() {
            var c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.checkContent(t, s, n);
                    case 2:
                      if (
                        ((c = e.sent),
                        (e.t0 =
                          this.denyAnswer || 1e4 == c || this.searchfrom == P),
                        e.t0)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (e.next = 7),
                        this.checkFollowOnQuestions(t, s, n, i, o, r, a)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              u,
              this
            );
          })
        );
      },
      checkContent: function (t, s, n) {
        return h(
          this,
          null,
          e().mark(function i() {
            var o, r, a, u, c, l, h;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/answer/recheck?"),
                        (o = this.addLoginParams(o, !1)),
                        (r = {
                          session: this.curSession,
                          requestId: t,
                          user: this.curOpenId,
                          answer: n,
                          query:
                            this.inputList[this.getRealQuestionIndex(t, s)],
                          app: w.StockBridge.getAppValue(),
                        }),
                        (a = this),
                        (e.prev = 2),
                        (e.next = 5),
                        w.StockBridge.request(o, "POST", r, {
                          dataType: "json",
                          header: { "Content-Type": "application/json" },
                        })
                      );
                    case 5:
                      if (!(u = e.sent) || 0 !== u.code) {
                        e.next = 13;
                        break;
                      }
                      if (((c = u.data), 1 !== c.result)) {
                        e.next = 13;
                        break;
                      }
                      return (
                        0 === (l = c.msg).length &&
                          (l =
                            "我无法提供相关信息。如果你有其他问题，我会很乐意为你解答。"),
                        (h = this.getRealQuestionIndex(t, s)),
                        e.abrupt(
                          "return",
                          (d.Vue.set(a.answerList[h], "reply", l),
                          d.Vue.set(a.answerList[h], "serverError", !0),
                          1e4)
                        )
                      );
                    case 13:
                      return e.abrupt("return", 10001);
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e.catch(2)),
                        e.abrupt("return", 10001)
                      );
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [[2, 16]]
            );
          })
        );
      },
      checkFollowOnQuestions: function (t, s, n, i, o, r, a) {
        return h(
          this,
          null,
          e().mark(function u() {
            var c, l, h, g, m, f, S, y, b, I, k;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (c =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/question/guess?"),
                        (c = this.addLoginParams(c, !1)),
                        (l = [
                          p.SERVER_CODE_MBTI_ANSWER,
                          p.SERVER_CODE_WUJI,
                        ].includes(a)),
                        (g = n.replace(new RegExp(":::card.*?:::", "gs"), "")),
                        (m = this.getKeyword(this.getRealQuestionIndex(t, s))),
                        i || "deepsea" === o || r || l
                          ? ((f = ""),
                            (S = ""),
                            (i || a === p.SERVER_CODE_WUJI) && (f = "offline"),
                            "deepsea" === o && (f = "deepsea"),
                            r
                              ? ((y = [
                                  "newuser_a",
                                  "newuser_b",
                                  "newuser_c",
                                ].includes(this.searchfrom)),
                                (f =
                                  0 == this.getContextInfoList().length && y
                                    ? "newUserXuangu"
                                    : "offline"),
                                (S =
                                  0 == this.getContextInfoList().length
                                    ? this.followOnnewUserXuanGuQueryType
                                    : ""))
                              : a === p.SERVER_CODE_MBTI_ANSWER &&
                                ((f = "mbti"),
                                w.StockBridge.getStorage(
                                  "mbti_strategy",
                                  function (e) {
                                    e &&
                                      e.data &&
                                      w.StockBridge.report(
                                        "base.ai_search.mbit_re_choose_brow",
                                        {
                                          subScene: "newuser_mbti",
                                          mbti_strategy: e.data,
                                        }
                                      );
                                  }
                                )),
                            (h = {
                              session: this.curSession,
                              requestId: t,
                              user: this.curOpenId,
                              type: f,
                              answer: g,
                              question: m,
                              queryType: S,
                            }))
                          : (h = {
                              session: this.curSession,
                              requestId: t,
                              user: this.curOpenId,
                              type: "offline",
                              answer: g,
                              question: m,
                            }),
                        this.followOnAbtType &&
                          (h.abTest = this.followOnAbtType),
                        (b = this),
                        (e.prev = 6),
                        (e.next = 9),
                        w.StockBridge.request(c, "POST", h, {
                          dataType: "json",
                          header: { "Content-Type": "application/json" },
                        })
                      );
                    case 9:
                      (I = e.sent) &&
                        0 === I.code &&
                        (k = I.data).questionList &&
                        (k.questionList.length > 0 || k.questions.length > 0) &&
                        (k.questionList.length > 0
                          ? (w.StockBridge.report(
                              "jichu.ai_search.follow_on_show",
                              {
                                contentId: k.questionList.join(","),
                                requestid: t,
                              }
                            ),
                            d.Vue.set(
                              b.answerList[this.getRealQuestionIndex(t, s)],
                              "guessObj",
                              k.questionList
                            ),
                            (b.hasFollowOnShown = !0))
                          : k.questions.length > 0 &&
                            (d.Vue.set(
                              b.answerList[this.getRealQuestionIndex(t, s)],
                              "guessObj",
                              k.questions
                            ),
                            (b.hasFollowOnShown = !0)),
                        setTimeout(function () {
                          var e;
                          null == (e = b.scrollToBottom) || e.call(b, !0, !1);
                        }, 30)),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(6)),
                        w.StockBridge.aegisReportEvent(
                          "[stock-search-ai] aiFollowonFailed",
                          { ext4: JSON.stringify(e.t0 || {}) }
                        );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              u,
              this,
              [[6, 13]]
            );
          })
        );
      },
      addLogItem: function (e) {
        (e.time = Date.now()),
          (e.requestId = this.curRequestId),
          L.push(JSON.stringify(e)),
          L.length >= 500 && this.processLogBuffer();
      },
      processLogBuffer: function () {
        var e = L.join("\n");
        w.StockBridge.recordLog("onSseMessage", e), (L.length = 0);
      },
      processCacheBuffer: function () {
        L.length > 0 && this.processLogBuffer();
      },
      notifyServerStopAnswer: function (t, s) {
        return h(
          this,
          null,
          e().mark(function n() {
            var i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "https://proxy.finance.qq.com/cgi/cgi-bin/openai/report/sse",
                        (i = I.getSignV3({
                          data: l(
                            c(
                              {},
                              b.buildSignedLoginParams({
                                loginCheck: this.loginCheck,
                                curUser: this.curUser,
                                curOpenId: this.curOpenId,
                                curFskey: this.curFskey,
                                curCheck: this.curCheck,
                              })
                            ),
                            {
                              session: t,
                              requestId: s,
                              type: "manual_close_sse",
                              t: new Date().getTime(),
                            }
                          ),
                          method: "GET",
                          origin: w.StockBridge.getAppValue(),
                        })),
                        (e.prev = 2),
                        (e.next = 5),
                        b.requestWrapper(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/report/sse",
                          "GET",
                          i,
                          { forceCallback: !0 }
                        )
                      );
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(2));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[2, 7]]
            );
          })
        );
      },
      fetchAbtestStatus: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s, n, i, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "https://proxy.finance.qq.com/cgi/cgi-bin/openai/user/abtest/status",
                        (i = I.getSignV3({
                          data: l(
                            c(
                              {},
                              b.buildSignedLoginParams({
                                loginCheck: this.loginCheck,
                                curUser: this.curUser,
                                curOpenId: this.curOpenId,
                                curFskey: this.curFskey,
                                curCheck: this.curCheck,
                              })
                            ),
                            { t: new Date().getTime() }
                          ),
                          method: "GET",
                          origin: w.StockBridge.getAppValue(),
                        })),
                        (e.prev = 2),
                        (e.next = 5),
                        b.requestWrapper(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/user/abtest/status",
                          "GET",
                          i,
                          { forceCallback: !0 }
                        )
                      );
                    case 5:
                      return (
                        (o = e.sent),
                        e.abrupt(
                          "return",
                          o &&
                            0 === o.code &&
                            null != (n = null == (s = o.data) ? void 0 : s.abPK)
                            ? n
                            : 0
                        )
                      );
                    case 9:
                      return (
                        (e.prev = 9), (e.t0 = e.catch(2)), e.abrupt("return", 0)
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[2, 9]]
            );
          })
        );
      },
      xianPinChangeModel: function (e) {
        w.StockBridge.toast("已切换作答模型"), this.updateModuleName(e);
      },
      getAnswerFinshReportObj: function (e) {
        var t = {
          trace_id: this.curTraceId,
          requestid: this.curRequestId,
          session: this.curSession,
          is_completed: e,
          searchfrom: this.searchfrom,
          aimodel: this.moduleName,
        };
        return (
          (t.questiontype = this.curQuestionType),
          this.getIsMcpAgentMessage(0) && (t.subAgent = "stockdetails"),
          t
        );
      },
      onSelectMbti: function (e, t) {
        var s = this.getKeyword(t);
        this.inputList.splice(t, 1),
          this.answerList.splice(t, 1),
          (this.curMbtiXuanGuFollowOnObj = { subScene: "newuser_mbti" }),
          this.tryeToInputAndCreateConnectOpeartion(s),
          this.scrollToBottom();
      },
      refreshQuestionAndAnswer: function () {
        if (0 !== this.inputList.length) {
          var e = this.inputList.length - 1,
            t = this.getKeyword(e);
          this.inputList.splice(e, 1),
            this.answerList.splice(e, 1),
            this.tryeToInputAndCreateConnectOpeartion(t),
            this.scrollToBottom();
        }
      },
      onQuoteClick: function (e, t, s, n, i) {
        var o = i ? i.factInnerDocs || [] : this.getFactInnerDocs(t) || [],
          r = i ? i.factOuterDocs || [] : this.getFactOuterDocs(t) || [],
          a = i ? i.docs || [] : this.getDocs(t) || [];
        (this.allQuoteDocs = {
          innerDocs: o,
          outerDocs: r,
          normalDocs: a,
          isMcpAgentMessage: e,
          dataOriginRef: n,
        }),
          (this.showLinkJumpGuide = !0);
      },
      handleLinkGuideClose: function () {
        this.showLinkJumpGuide = !1;
      },
      keepWzqPos: function () {
        var e, t;
        (w.StockBridge.ENV !== d.EnvTypeEnum.WZQ &&
          w.StockBridge.ENV !== d.EnvTypeEnum.WZQ_LITE) ||
          (this.wzqKeepPreScrollTop =
            null == (t = null == (e = this.$refs) ? void 0 : e.answerlistview)
              ? void 0
              : t.getWzqScrollPos());
      },
      resumeWzqPos: function () {
        var e, t;
        (w.StockBridge.ENV !== d.EnvTypeEnum.WZQ &&
          w.StockBridge.ENV !== d.EnvTypeEnum.WZQ_LITE) ||
          (this.wzqKeepPreScrollTop &&
            (null ==
              (t = null == (e = this.$refs) ? void 0 : e.answerlistview) ||
              t.resumeWzqScrollPos(this.wzqKeepPreScrollTop)),
          (this.wzqKeepPreScrollTop = 0));
      },
      onHideVoiceEdit: function () {
        this.isShowVoiceEdit = !1;
      },
      onEditVoice: function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        (this.isShowVoiceEdit = t), (this.voiceText = e);
      },
      parseHistoryInfo: function (e) {
        var t, s;
        if (e.sessionid) {
          var n, i;
          this.curSession = e.sessionid;
          for (
            var o = [], r = [], a = null, u = e.dialogs.length - 1;
            u >= 0;
            u--
          ) {
            var c = e.dialogs[u];
            o.push(c.question);
            var l = this.parseHistoryDataItem(c);
            a &&
              c.answer_time - a.answer_time > 3600 &&
              (l.sessionTime = k.timeFormat(c.answer_time)),
              (a = { answer_time: c.answer_time }),
              r.push(l);
          }
          (n = this.inputList).push.apply(n, o),
            (i = this.answerList).push.apply(i, r),
            (this.isHitWelcomePage = 0 === this.inputList.length),
            (this.historyDataLength = e.dialogs.length),
            (null == (t = e.dialogs) ? void 0 : t.length) &&
              ((this.sessionTimeStart = k.timeFormat(
                e.dialogs[(null == (s = e.dialogs) ? void 0 : s.length) - 1]
                  .answer_time
              )),
              (this.sessionTimeLatest = e.dialogs[0].answer_time));
        }
      },
      openHistoryClick: function () {
        this.hideKeyboard(),
          (this.showAiDrawer = !0),
          this.showWxClawHintBubble && this.dismissWxClawHintBubble(),
          this.isMP && d.wx$1.vibrateShort({ type: "medium" }),
          w.StockBridge.report("jichu.ai_search.history_drawer_btn_click");
      },
      jumpSessionDatail: function (t) {
        return h(
          this,
          null,
          e().mark(function s() {
            var n,
              i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isReplying) {
                        e.next = 4;
                        break;
                      }
                      w.StockBridge.toast("回答输出中，请稍后操作"),
                        (e.next = 16);
                      break;
                    case 4:
                      if (
                        ((this.searchfrom = "historychat"),
                        this.disconnect(),
                        !t || !t.sessionid)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        this.clearHistoryInfoList(),
                        (this.shouldShowGuideViewNoQuestion = !1),
                        (this.hasSentQuestion = !1),
                        (this.isLoadingHistory = !0),
                        (e.prev = 6),
                        (e.next = 9),
                        this.entrySearchHistory(t.sessionid, !0, !1)
                      );
                    case 9:
                      (null == (n = e.sent) ? void 0 : n.error) &&
                        w.StockBridge.toast(n.error, "none"),
                        this.parseHistoryInfo(n),
                        (this.isWxClawSession =
                          !!t.sessionid && t.sessionid.startsWith("wxclaw_")),
                        t.bad_flag || this.isWxClawSession
                          ? (this.denyAnswer = !0)
                          : (this.denyAnswer = !1),
                        this.scrollHistoryToBottom(),
                        this.$nextTick(function () {
                          i.$refs.answerlistview || (i.isLoadingHistory = !1);
                        }),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(6)),
                        (this.isLoadingHistory = !1);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this,
              [[6, 13]]
            );
          })
        );
      },
      closeWxClawHintBubble: function () {
        this.dismissWxClawHintBubble();
      },
      onCloseHY3Bubble: function () {
        this.dismissHY3Bubble();
      },
      closeWxClawDialog: function () {
        this.showWxClawDialog = !1;
      },
      closeWxClawUnbindDialog: function () {
        this.showWxClawUnbindDialog = !1;
      },
      confirmUnbindWxClaw: function () {
        (this.showWxClawUnbindDialog = !1),
          (this.clawBotStatus = 0),
          (this.guideBannerClosed = !1),
          w.StockBridge.toast("解除绑定成功", "success");
      },
      onBindSuccess: function () {
        (this.showWxClawDialog = !1),
          (this.clawBotStatus = 1),
          (this.guideBannerClosed = !0);
      },
      openBindDialogFromBanner: function () {
        this.hideKeyboard(), (this.showWxClawDialog = !0);
      },
      closeGuideBanner: function () {
        (this.guideBannerClosed = !0),
          w.StockBridge.setStorage("wx_claw_guide_banner_closed", "1");
      },
      initClawBotStatus: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        w.StockBridge.getStorageSync(
                          "wx_claw_guide_banner_closed"
                        )
                      );
                    case 2:
                      (s = e.sent),
                        "1" === s.data && (this.guideBannerClosed = !0),
                        this.fetchClawBotStatus();
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      fetchClawBotStatus: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        w.StockBridge.request(
                          "https://wzq.tenpay.com/svr/openclaw/user/get_claw_bot_status",
                          "GET"
                        )
                      );
                    case 3:
                      void 0 !== (null == (s = e.sent) ? void 0 : s.status) &&
                        (this.clawBotStatus = s.status),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
      bindingWxClaw: function () {
        this.hideKeyboard(),
          (this.showAiDrawer = !1),
          this.showWxClawHintBubble && this.dismissWxClawHintBubble(),
          (this.showWxClawDialog = !0);
      },
      unbindingWxClaw: function () {
        this.hideKeyboard(),
          (this.showAiDrawer = !1),
          (this.showWxClawUnbindDialog = !0);
      },
      jumpSessionCreate: function () {
        var e;
        this.isReplying
          ? w.StockBridge.toast("回答输出中，请稍后操作")
          : (null == (e = this.answerList) ? void 0 : e.length)
          ? ((this.searchfrom = "newchat"),
            (this.shouldShowGuideViewNoQuestion = !0),
            this.disconnect(),
            this.changeToNewSession(!1))
          : w.StockBridge.toast("已经是最新对话了～");
      },
      clearHistoryInfoList: function () {
        (this.inputList = []),
          (this.answerList = []),
          (this.curSession = ""),
          (this.historyDataLength = 0),
          (this.sessionTimeStart = 0),
          (this.sessionTimeLatest = 0);
      },
      changeToNewSession: function (e) {
        this.clearHistoryInfoList(),
          this.claerCurData(),
          (this.shouldShowGuideViewNoQuestion = !0),
          (this.hasSentQuestion = !1),
          (this.curSession = this.generateRandomString(128)),
          (this.denyAnswer = !1),
          (this.isWxClawSession = !1),
          (this.sessionTimeStart = "");
      },
      quickQuestionClick: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.prompt &&
          ((this.pendingQuickInputReport = {
            module: e.__quickInputModule || "",
            contentId: e.__quickInputContentId || "",
            subScene: e.__quickInputSubScene || "",
            isNewUser: e.__isNewUser || !1,
          }),
          (null == e ? void 0 : e.__isNewUser) &&
            (this.curWelcomeQuestionObj = e),
          (this.presetFirstQuestion = !0),
          (this.presetFirstQuestionQuery = e.prompt),
          this.doSendGuessQuestion(e.title));
      },
      keyboardShowingChange: function (e) {
        var t = this;
        (this.keyboardShowing = e),
          this.$nextTick(function () {
            t.calculateBackToBottomPosition();
          });
      },
      keyboardHeightChange: function (e) {
        this.keyboardHeightUseInMp = e;
      },
      getLastAnswerItem: function () {
        return this.answerList[this.answerList.length - 1];
      },
    },
  };
Array ||
  (
    d.resolveComponent("wx-claw-hint-bubble") +
    d.resolveComponent("first-guide-item-old-user") +
    d.resolveComponent("question-item") +
    d.resolveComponent("dual-answer-item") +
    d.resolveComponent("answer-item") +
    d.resolveComponent("transition") +
    d.resolveComponent("ShareBar") +
    d.resolveComponent("follow-on-item") +
    d.resolveComponent("thirteen-anniversary-task") +
    d.resolveComponent("answer-list-view") +
    d.resolveComponent("session-history-loading") +
    d.resolveComponent("InputView") +
    d.resolveComponent("old-permission-dialog") +
    d.resolveComponent("dis-like-select-dialog") +
    d.resolveComponent("permission-agree-dialog") +
    d.resolveComponent("link-jump-guide") +
    d.resolveComponent("full-screen-feed-back") +
    d.resolveComponent("ai-model-select-dialog") +
    d.resolveComponent("ai-model-select-guide") +
    d.resolveComponent("question-item-long-press-menu") +
    d.resolveComponent("InputVoiceEdit") +
    d.resolveComponent("BackPop") +
    d.resolveComponent("wx-claw-bind-dialog") +
    d.resolveComponent("wx-claw-unbind-dialog") +
    d.resolveComponent("session-history-drawer")
  )();
var Q = d._export_sfc(O, [
  [
    "render",
    function (e, t, s, n, i, o) {
      return d.e(
        {
          a: d.n(n.naviAnimClass),
          b: e.naviTitleAiModelTriangle,
          c: d.o(function () {
            return (
              o.handleOpenAiModelSelect &&
              o.handleOpenAiModelSelect.apply(o, arguments)
            );
          }, 762),
          d: e.showNaviBack,
        },
        e.showNaviBack
          ? d.e(
              { e: i.isMP && i.showHomeIcon },
              i.isMP && i.showHomeIcon
                ? {
                    f: d.o(function () {
                      return o.goHome && o.goHome.apply(o, arguments);
                    }, 763),
                  }
                : i.isWaiApp
                ? {}
                : {
                    h: e.navTitleBackImageUrl,
                    i: d.o(function () {
                      return (
                        o.closeCurPage && o.closeCurPage.apply(o, arguments)
                      );
                    }, 764),
                  },
              { g: !i.isWaiApp }
            )
          : {},
        {
          j: d.o(function () {
            return o.openHistoryClick && o.openHistoryClick.apply(o, arguments);
          }, 765),
          k: i.showWxClawHintBubble,
        },
        i.showWxClawHintBubble ? { l: d.o(o.closeWxClawHintBubble, 766) } : {},
        {
          m: d.n(e.showPrevQuestionButton ? "visible" : "hidden"),
          n: d.o(function () {
            return (
              e.scrollToPreviousQuestion &&
              e.scrollToPreviousQuestion.apply(e, arguments)
            );
          }, 767),
          o: d.s(e.navTitleStyle),
          p: d.s(e.navContainerStyle),
          q:
            i.shouldShowGuideViewNoQuestion &&
            !i.hasSentQuestion &&
            0 === i.inputList.length &&
            !i.hasPresetQuestion,
        },
        !i.shouldShowGuideViewNoQuestion ||
          i.hasSentQuestion ||
          0 !== i.inputList.length ||
          i.hasPresetQuestion
          ? {
              w: d.f(i.answerList, function (t, s, r) {
                return d.e(
                  { a: (0 === s && i.sessionTimeStart) || t.sessionTime },
                  (0 === s && i.sessionTimeStart) || t.sessionTime
                    ? {
                        b: d.t(
                          0 === s && i.sessionTimeStart
                            ? i.sessionTimeStart
                            : t.sessionTime
                        ),
                      }
                    : {},
                  {
                    c: "questionItem_".concat(t.requestId),
                    d: d.o(
                      function (e) {
                        return n.handleQuestionLongPress(s, o.getKeyword(s), t);
                      },
                      770,
                      t.isDualAnswer ? "dual-".concat(t.requestId) : t.requestId
                    ),
                    e: "9e84eae6-3-" + r + ",9e84eae6-2",
                    f: d.p({
                      id: "questionItem_".concat(t.requestId),
                      keyWord: o.getKeyword(s),
                    }),
                    g: t.isDualAnswer,
                  },
                  t.isDualAnswer
                    ? {
                        h: d.sr(
                          "dualAnswerRef",
                          "9e84eae6-4-" + r + ",9e84eae6-2",
                          { f: 1 }
                        ),
                        i: d.o(
                          o.onDualAnswerPrefer,
                          771,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        j: d.o(
                          o.onDualAnswerCollapseDone,
                          772,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        k: d.o(
                          function (e) {
                            return o.onDualAnswerBothFinish(s);
                          },
                          773,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        l: d.o(
                          e.scrollToBottom,
                          774,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        m: d.o(
                          o.clickZan,
                          775,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        n: d.o(
                          o.clickCai,
                          776,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        o: d.o(
                          o.cancelZan,
                          777,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        p: d.o(
                          o.cancelCai,
                          778,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        q: d.o(
                          o.onShare,
                          779,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        r: d.o(
                          o.onQuoteClick,
                          780,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        s: d.o(
                          o.keepWzqPos,
                          781,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        t: d.o(
                          o.changeToNewSession,
                          782,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        v: d.o(
                          function (e) {
                            return o.showHalfScreenPermissionDialog(!0);
                          },
                          783,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        w: d.o(
                          o.functionItemFinish,
                          784,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        x: d.o(
                          o.onSelectMbti,
                          785,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        y: d.o(
                          o.onRequestPermissionDialog,
                          786,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        z: d.o(
                          o.xianPinChangeModel,
                          787,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        A: d.o(
                          function (e) {
                            return (i.denyAnswer = !0);
                          },
                          788,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        B: "9e84eae6-4-" + r + ",9e84eae6-2",
                        C: d.p({
                          curSession: i.curSession,
                          question: e.curQueryForPost || o.getKeyword(s),
                          questionOrigin:
                            e.curQueryOriginForPost || o.getKeyword(s),
                          contextList: o.getContextInfoList(),
                          theme: e.skin,
                          searchfrom: i.searchfrom,
                          moduleName: n.moduleName,
                          thinking: n.thinking,
                          useIncrementalModel: n.useIncrementalModel,
                          loginUser: i.curUser,
                          loginOpenId: i.curOpenId,
                          loginFskey: i.curFskey,
                          loginCheck: i.curCheck,
                          requestId1: t.requestId,
                          requestId2: t.dualRequestId2,
                          enableRag: i.enableRag,
                          onlineAnswerAbtType: n.onlineAnswerAbtType,
                          outerIndex: s,
                          parentCommentStatus: t.commentStatus,
                          mockTradeAbtUser: n.mockTradeAbtUser,
                          componentPluginArray: n.componentPluginArray,
                        }),
                      }
                    : {},
                  {
                    D:
                      !t.isDualAnswer &&
                      s === i.answerList.length - 1 &&
                      i.shouldShowGuideView &&
                      i.shouldShowAnserAnimation &&
                      !i.isMP,
                  },
                  !t.isDualAnswer &&
                    s === i.answerList.length - 1 &&
                    i.shouldShowGuideView &&
                    i.shouldShowAnserAnimation &&
                    !i.isMP
                    ? {
                        E: "answerItem".concat(s),
                        F: d.o(
                          function (e) {
                            return o.showHalfScreenPermissionDialog(!0);
                          },
                          789,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        G: d.o(
                          o.clickZan,
                          790,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        H: d.o(
                          o.clickCai,
                          791,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        I: d.o(
                          o.cancelZan,
                          792,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        J: d.o(
                          o.cancelCai,
                          793,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        K: d.o(
                          o.functionItemFinish,
                          794,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        L: d.o(
                          o.onShare,
                          795,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        M: d.o(
                          o.onSelectMbti,
                          796,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        N: d.o(
                          o.checkContentAndFollowOn,
                          797,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        O: d.o(
                          o.onRequestPermissionDialog,
                          798,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        P: d.o(
                          o.xianPinChangeModel,
                          799,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        Q: d.o(
                          o.onQuoteClick,
                          800,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        R: d.o(
                          o.keepWzqPos,
                          801,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        S: d.o(
                          o.changeToNewSession,
                          802,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        T: d.o(
                          o.onDisableOuterAutoScroll,
                          803,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        U: "9e84eae6-6-" + r + ",9e84eae6-5-" + r,
                        V: d.p({
                          id: "answerItem".concat(s),
                          item: t,
                          outerIndex: s,
                          theme: e.skin,
                          searchfrom: i.searchfrom,
                          subScene: i.subScene,
                          useIncrementalModel: n.useIncrementalModel,
                          mockTradeAbtUser: n.mockTradeAbtUser,
                          defaultAiModel: n.moduleName,
                        }),
                        W: "9e84eae6-5-" + r + ",9e84eae6-2",
                        X: d.p({ name: "fade", appear: !0 }),
                      }
                    : t.isDualAnswer
                    ? {}
                    : {
                        Z: "answerItem".concat(s),
                        aa: d.o(
                          function (e) {
                            return o.showHalfScreenPermissionDialog(!0);
                          },
                          804,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ab: d.o(
                          o.clickZan,
                          805,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ac: d.o(
                          o.clickCai,
                          806,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ad: d.o(
                          o.cancelZan,
                          807,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ae: d.o(
                          o.cancelCai,
                          808,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        af: d.o(
                          o.functionItemFinish,
                          809,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ag: d.o(
                          o.onShare,
                          810,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ah: d.o(
                          o.onSelectMbti,
                          811,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ai: d.o(
                          o.checkContentAndFollowOn,
                          812,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        aj: d.o(
                          o.onRequestPermissionDialog,
                          813,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ak: d.o(
                          o.xianPinChangeModel,
                          814,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        al: d.o(
                          o.onQuoteClick,
                          815,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        am: d.o(
                          o.keepWzqPos,
                          816,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        an: d.o(
                          o.changeToNewSession,
                          817,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ao: d.o(
                          o.onDisableOuterAutoScroll,
                          818,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ap: "9e84eae6-7-" + r + ",9e84eae6-2",
                        aq: d.p({
                          id: "answerItem".concat(s),
                          item: t,
                          outerIndex: s,
                          theme: e.skin,
                          searchfrom: i.searchfrom,
                          subScene: i.subScene,
                          curSessionId: i.curSession,
                          useIncrementalModel: n.useIncrementalModel,
                          mockTradeAbtUser: n.mockTradeAbtUser,
                          defaultAiModel: n.moduleName,
                        }),
                      },
                  {
                    Y: !t.isDualAnswer,
                    ar: !n.thirteenYearTaskCanShow && o.getAnniversaryShare(s),
                  },
                  !n.thirteenYearTaskCanShow && o.getAnniversaryShare(s)
                    ? {
                        as: d.o(
                          n.handleThirteenYearBackPopShowEvent,
                          819,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        at: "9e84eae6-8-" + r + ",9e84eae6-2",
                        av: d.p({ reqid: o.getRequestId(s) }),
                      }
                    : !n.thirteenYearTaskCanShow && t.guessObj
                    ? {
                        ax: d.o(
                          o.tapGuessQuestion,
                          820,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        ay: d.o(
                          o.tapNewUserGuessQuestion,
                          821,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        az: d.o(
                          o.tapMbtiGuessQuestion,
                          822,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        aA: "9e84eae6-9-" + r + ",9e84eae6-2",
                        aB: d.p({
                          theme: e.skin,
                          guessObj: t.guessObj,
                          requestId: o.getRequestId(s),
                          sessionId: i.curSession,
                          serverMessageCode: o.getServerMessageCode(s),
                        }),
                      }
                    : {},
                  {
                    aw: !n.thirteenYearTaskCanShow && t.guessObj,
                    aC: s === i.answerList.length - 1,
                  },
                  s === i.answerList.length - 1
                    ? {
                        aD: d.o(
                          n.handleThirteenYearTaskShowEvent,
                          823,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        aE: d.o(
                          n.handleThirteenYearBackPopShowEvent,
                          824,
                          t.isDualAnswer
                            ? "dual-".concat(t.requestId)
                            : t.requestId
                        ),
                        aF: "9e84eae6-10-" + r + ",9e84eae6-2",
                        aG: d.p({ mode: "complete" }),
                      }
                    : {},
                  {
                    aH: "aiAnswerBlock".concat(s),
                    aI: t.isDualAnswer
                      ? "dual-".concat(t.requestId)
                      : t.requestId,
                    aJ: d.n({
                      "answer-item--last": s === i.answerList.length - 1,
                    }),
                  }
                );
              }),
              x: d.n(i.isMP ? "answer-item-mp" : ""),
              y: d.s(e.lastAnswerItemStyle),
              z: d.sr("answerlistview", "9e84eae6-2"),
              A: d.o(o.contentTouch, 825),
              B: d.o(o.handleMpScroll, 826),
              C: d.o(e.handleScrollDirection, 827),
              D: d.o(e.updateQuestionIndexByScroll, 828),
              E: d.o(o.onHistoryPinEnd, 829),
              F: d.p({
                disableScroll: i.showLinkJumpGuide,
                mainContentHeight: e.mainContentHeight,
                isReplying: o.isAnswerStreaming,
              }),
            }
          : {
              r: d.sr("firstGuideItem", "9e84eae6-1"),
              s: d.o(o.clickWelcomeQuestion, 768),
              t: d.o(o.quickQuestionClick, 769),
              v: d.p({
                theme: e.skin,
                keyboardShowing: i.keyboardShowing,
                keyboardHeight: i.keyboardHeightUseInMp,
                visible:
                  i.shouldShowGuideViewNoQuestion &&
                  !i.hasSentQuestion &&
                  0 === i.inputList.length &&
                  !i.hasPresetQuestion,
                showSubscripeEntry: o.shouldShowSubscripeEntry,
              }),
            },
        { G: i.isLoadingHistory },
        i.isLoadingHistory ? { H: d.p({ theme: e.skin }) } : {},
        {
          I: e.contentListPaddingBottom + "px",
          J: d.o(function () {
            return o.contentTouch && o.contentTouch.apply(o, arguments);
          }, 830),
          K: e.showBackToBottomButton && !i.keyboardShowing,
        },
        e.showBackToBottomButton && !i.keyboardShowing
          ? d.e({ L: i.isReplying }, (i.isReplying, {}), {
              M: e.backToBottomButtonBottom + "px",
              N: d.o(function (t) {
                return e.handleBackToBottomClickWrapper(o.scrollToBottomForce);
              }, 831),
            })
          : {},
        { O: i.isMP && i.showInputExpandOverlay },
        i.isMP && i.showInputExpandOverlay
          ? {
              P: d.o(function () {
                return (
                  o.onInputExpandOverlayClick &&
                  o.onInputExpandOverlayClick.apply(o, arguments)
                );
              }, 832),
              Q: d.o(function () {}, 833),
            }
          : {},
        { R: o.shouldShowSubscripeEntry },
        (o.shouldShowSubscripeEntry, {}),
        { S: !i.isMP },
        i.isMP
          ? {}
          : {
              T: i.isWZQ ? 1 : "",
              U: n.useAppH5 || n.useAppNative ? 1 : "",
              V: n.isHarmony && (n.useAppH5 || n.useAppNative) ? 1 : "",
              W: i.isiOS ? 1 : "",
            },
        {
          X: d.sr("inputRef", "9e84eae6-12"),
          Y: d.o(o.keyboardShowingChange, 834),
          Z: d.o(o.keyboardHeightChange, 835),
          aa: d.o(o.quickQuestionClick, 836),
          ab: d.o(o.onSendQuestion, 837),
          ac: d.o(o.onSendEmpty, 838),
          ad: d.o(o.onHasInputContent, 839),
          ae: d.o(n.onInputChangeAiModel, 840),
          af: d.o(n.onInputChangeAiThinking, 841),
          ag: d.o(o.stopAnswer, 842),
          ah: d.o(o.onFocus, 843),
          ai: d.o(o.onEditVoice, 844),
          aj: d.o(n.onChooseModel, 845),
          ak: d.o(n.hideQuestionLongPressMenu, 846),
          al: d.o(o.requestKeyboard, 847),
          am: d.o(o.onInputExpandChange, 848),
          an: d.o(o.onContainerHeightChange, 849),
          ao: d.p({
            useAppAsr: n.hasVoiceInput,
            useH5Asr: !n.isHarmony,
            useAppH5: n.useAppH5,
            useAppNative: n.useAppNative,
            placeholder: o.getInputPlaceHolderText,
            isReplying: i.isReplying,
            isIosOld: n.isIosOld,
            isHarmony: n.isHarmony,
            isAndroid: n.isAndroid,
            denyAnswer: i.denyAnswer,
            keyboardShowing: i.keyboardShowing,
            aimodel: n.moduleName,
            thinking: n.thinking,
            autofocus: !1,
            requestId: i.curRequestId,
            sessionId: i.curSession,
            theme: e.skin,
            defaultModel: n.moduleName,
            isShowVoiceEdit: i.isShowVoiceEdit,
            isHalfScreen: !1,
            navTitleHeight: i.navTitleHeight,
            keyboardHeight: i.keyboardHeightUseInAppH5,
            hasFollowOnShown: i.hasFollowOnShown,
            showSubscripeEntry: o.shouldShowSubscripeEntry,
            hasSentQuestion: i.hasSentQuestion,
          }),
          ap: i.showOldPermissionDialog,
        },
        i.showOldPermissionDialog
          ? {
              aq: d.o(function (e) {
                return o.showHalfScreenPermissionDialog(!1);
              }, 850),
              ar: d.p({ isMP: i.isMP }),
            }
          : {},
        { as: i.showDisLikeDialog },
        i.showDisLikeDialog
          ? {
              at: d.o(o.cancelFeedback, 851),
              av: d.o(o.submitUnlike, 852),
              aw: d.o(o.submitComplaint, 853),
              ax: d.p({ theme: e.skin, isMP: i.isMP }),
            }
          : {},
        {
          ay: d.o(o.onAgreeProtocal, 854),
          az: d.o(o.onDenyProtocal, 855),
          aA: d.p({
            theme: e.skin,
            isMP: i.isMP,
            searchfrom: i.searchfrom,
            showFullScreenPermissionDialog: i.showFullScreenPermissionDialog,
            protocalId: i.protocalId,
            privacyResult: i.privacyResult,
            privacyType: i.privacyType,
          }),
          aB: d.o(o.handleLinkGuideClose, 856),
          aC: d.p({
            theme: e.skin,
            "all-quote-docs": i.allQuoteDocs,
            show: i.showLinkJumpGuide,
          }),
          aD: i.showFullScreenFeedback,
        },
        i.showFullScreenFeedback
          ? {
              aE: d.o(o.closeFullScreenComplaint, 857),
              aF: d.o(o.submitFullScreenComplaint, 858),
              aG: d.p({ theme: e.skin, showStatusBar: !i.isWZQ }),
            }
          : {},
        { aH: n.showAiModelSelect },
        n.showAiModelSelect
          ? {
              aI: d.o(n.onCloseAiModelSelect, 859),
              aJ: d.o(n.onChooseModel, 860),
              aK: d.p({ theme: e.skin, moduleName: n.moduleName }),
            }
          : {},
        { aL: n.showAiModelGuide },
        n.showAiModelGuide
          ? {
              aM: d.o(function (e) {
                return (n.showAiModelGuide = !1);
              }, 861),
              aN: d.p({ theme: e.skin }),
            }
          : {},
        { aO: n.questionLongPress },
        n.questionLongPress
          ? {
              aP: d.o(n.hideQuestionLongPressMenu, 862),
              aQ: d.o(n.handleLongPressMenuTap, 863),
              aR: d.p({
                theme: e.skin,
                isLongPres: n.questionLongPress,
                target: n.targetRect,
                question: n.targetQuestion,
                disableEdit: n.useAppNative,
                curRequestId: o.getRequestId(n.longPressPostion),
              }),
            }
          : {},
        { aS: i.isShowVoiceEdit },
        i.isShowVoiceEdit
          ? {
              aT: d.sr("InputVoiceEditRef", "9e84eae6-21"),
              aU: d.o(o.onHideVoiceEdit, 864),
              aV: d.o(o.onVoiceEditSendQuestion, 865),
              aW: d.p({
                theme: e.skin,
                voiceText: i.voiceText,
                isMP: i.isMP,
                useAppH5: n.useAppH5,
                isHarmony: n.isHarmony,
                keyboardHeightUseInAppH5: i.keyboardHeightUseInAppH5,
              }),
            }
          : {},
        {
          aX: d.p({
            searchfrom: i.searchfrom,
            showBackpop: n.thirteenYearBackPopShow,
          }),
          aY: d.o(o.closeWxClawDialog, 866),
          aZ: d.o(o.onBindSuccess, 867),
          ba: d.p({ visible: i.showWxClawDialog }),
          bb: d.o(o.closeWxClawUnbindDialog, 868),
          bc: d.o(o.confirmUnbindWxClaw, 869),
          bd: d.p({
            visible: i.showWxClawUnbindDialog,
            "user-info": i.userInfo,
          }),
          be: d.o(function (e) {
            return (i.showAiDrawer = !1);
          }, 870),
          bf: d.o(o.onAgreeProtocal, 871),
          bg: d.o(o.jumpSessionDatail, 872),
          bh: d.o(o.jumpSessionCreate, 873),
          bi: d.o(o.bindingWxClaw, 874),
          bj: d.o(o.unbindingWxClaw, 875),
          bk: d.p({
            curSession: i.curSession,
            initialHistoryPrivacy: i.initialHistoryPrivacy,
            theme: e.skin,
            showAiDrawer: i.showAiDrawer,
            userInfo: i.userInfo,
            useAppH5: n.useAppH5,
            "claw-bot-status": i.clawBotStatus,
            shouldShowSubscriptContent: i.shouldShowSubscriptContent,
          }),
          bl: d.n(i.isMP ? "mp" : ""),
          bm: d.n(i.isZxgXcq ? "mpzxg" : ""),
          bn: d.n(i.isWZQ ? "wzq" : ""),
          bo: d.n(i.isiOS ? "ios" : ""),
          bp: d.n("black" === e.skin ? "black" : ""),
          bq: d.n(o.withoutNavBar ? "without-navbar" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9e84eae6"],
]);
wx.createComponent(Q);
