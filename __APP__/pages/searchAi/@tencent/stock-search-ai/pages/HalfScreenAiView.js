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
  l = function (e, t, s) {
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
  h = require("../../../../../common/vendor.js"),
  d = require("../hooks/useComponentConfigHooks.js"),
  p = require("../utils/memoryTracking.js"),
  g = require("../utils/StockBridgeWrapper.js"),
  m = require("../../../throttle-debounce/esm/index.js"),
  f = require("../hooks/useThemeHooks.js"),
  w = require("../hooks/usePrivacyGrantHooks.js"),
  y = require("../hooks/useShareCodeHooks.js"),
  S = require("../utils/RequestUtils.js"),
  A = require("../../stock-base/service/common/sign.js"),
  k = require("../../stock-news-core/utils/knife.js");
function v(e) {
  var t = h.ref({ sections: [] }),
    s = h.computed(function () {
      return e.aiExpert;
    }),
    n = h.computed(function () {
      return e.stockCode;
    }),
    i = function (e) {
      t.value = { sections: Array.isArray(e) ? e : [] };
    },
    o = {
      基本面:
        "你是资深基本面分析师，精通企业商业模式、财务报表、行业估值、公司治理与经营逻辑。擅长用通俗直白的方式拆解个股内在价值，摒弃晦涩专业术语，甄别企业盈利质量、护城河、潜在隐患，贴合普通投资者投资判断，客观给出中长期持仓、价值研判参考建议。",
      技术面:
        "你是一位资深技术分析师，精通趋势理论、K线语言、量价分析和各类技术指标。擅长用通俗直白的方式拆解个股走势，不搞复杂专业公式，从趋势、高低位、成交量、K线形态判断买卖信号，贴合普通投资者看盘习惯，客观直白给出持仓、止盈、止损建议。",
      资金面:
        "你是专业资金流向分析师，专注A股个股资金行为研判。精通北向资金、机构持仓、大单流向、股东人数、筹码变动分析。擅长透过资金动作判断主力意图，分辨真实资金进场与短期资金波动，通俗易懂解读资金背后逻辑，给投资者直白的资金层面参考，规避资金出逃类风险。",
      消息面:
        "你是市场消息解读分析师，专注个股舆情与行业政策研判。擅长分辨利好利空真假、区分短期炒作消息与长期实质性消息，能够拆解政策、行业公告、公司公告、市场舆情对个股的实际影响。语言通俗直白，客观判断消息持续性，避免用户被市场杂音、虚假消息跟风误导。",
    },
    r = {
      价值官: "基本面",
      技术侠: "技术面",
      主力手: "资金面",
      情报员: "消息面",
    };
  return (
    h.watch(
      function () {
        return s.value;
      },
      function (e) {
        e
          ? (i(e.sections),
            g.StockBridge.report("hq.detail.ai_expert_detail_brow", {
              stockid: n.value,
              expertid: e.id,
            }))
          : i([]);
      },
      { immediate: !0 }
    ),
    {
      aiExpertDetail: t,
      fillDetailData: i,
      parseQuestionToAiExpertMode: function (e) {
        var t,
          i = s.value;
        return i && i.field
          ? "【人设】"
              .concat(
                o[((t = i.field), r[t] || t)] || i.field,
                "\n【回答约束】只用基于你的人设回答问题，不在你的领域范围内，可以不展开回答或者简单提及。\n【标的】"
              )
              .concat(n.value, "\n【问题】")
              .concat(e)
          : e;
      },
    }
  );
}
var C = !1,
  I = !1,
  b = !0,
  T = {},
  P = "hasAgreeAIPermision_WenYuanBao",
  L = "jichu.ai_search.ai_answer",
  M = 1620053002,
  x = "ai_summary_like_status",
  R = "很抱歉，服务器繁忙，请稍后再试试",
  q = {
    name: "HalfScreenAiView",
    components: {
      AnswerListView: function () {
        return "../components/AnswerListView.js";
      },
      AnswerItem: function () {
        return "../components/AnswerItem.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1haS9jb21wb25lbnRzL0Fuc3dlckl0ZW0udnVl;
        });
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
      FirstGuideItem: function () {
        return "../components/FirstGuideItem.js";
      },
      CommonSelector: function () {
        return "../components/CommonSelecter.js";
      },
      FollowOnItem: function () {
        return "../components/FollowOnItem.js";
      },
      EmotionBoostGuide: function () {
        return "../components/EmotionBoostGuide.js";
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
      ThirteenAnniversaryTask: function () {
        return "../node-modules/@tencent/st-act-ai-activity-plugins/task/index.js";
      },
      ThirteenAnniversaryBackPop: function () {
        return "../node-modules/@tencent/st-act-ai-activity-plugins/components/backPop/index.js";
      },
      ShareAnswerInvalid: function () {
        return "../components/ShareAnswerInvalid.js";
      },
      LinkJumpGuide: function () {
        return "../components/LinkJumpGuide.js";
      },
      SessionHistoryLoading: function () {
        return "../components/SessionHistoryLoading.js";
      },
      PresetQuestionWelcomeCard: function () {
        return "../components/PresetQuestionWelcomeCard.js";
      },
      AiExpertDetailCard: function () {
        return "../components/expertAnalysis/AiExpertDetailCard.js";
      },
      AiReadingDetailCard: function () {
        return "../components/aiReading/AIReadingDetailCard.js";
      },
      Disclaimers: function () {
        return "../components/Disclaimers.js";
      },
    },
    inject: { hqBridge: { default: null } },
    props: {
      theme: { type: String, default: "blue" },
      query: {
        type: Object,
        default: function () {
          return {};
        },
      },
      aiDialogQuestion: { type: String, default: "" },
      aiQuestionQuery: { type: String, default: "" },
      aiPresetPrompt: {
        type: Object,
        default: function () {
          return {};
        },
      },
      stockCode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      stockType: { type: String, default: "" },
      sourceFrom: { type: String, default: "" },
      serverObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
      defaultModelName: { type: String, default: "" },
      aiSrcType: { type: String, default: "" },
      aiHasSafeArea: { type: Boolean, default: !0 },
      sseServeType: { type: String, default: "" },
      shareCode: { type: String, default: "" },
      needAnswer: { type: Boolean, default: !0 },
      stockAdded: { type: Boolean, default: !1 },
      aiExpert: { type: Object, default: null },
      aiReadingContent: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e, t) {
      var s = t.emit;
      h.provide("isHalfScreen", !0);
      var n = h.getCurrentInstance().proxy || h.getCurrentInstance(),
        i = f.useThemeHooks(e, n, !0),
        o = i.skin,
        r = i.naviTitleAiModelTriangle,
        a = i.lastAnswerItemStyle,
        u = i.mainContentHeight,
        l = i.calcContainerHeight,
        g = i.getAppSafeBottom,
        m = i.halfContainerStyle,
        S = i.updateInputAreaHeightOffset,
        A = p.useAiModuleHooks(e, s, "halfscreen"),
        k = A.moduleName,
        C = A.thinking,
        I = A.showAiModelSelect,
        b = A.showAiModelGuide,
        T = A.naviAnimClass,
        P = A.useAppH5,
        L = A.isIosOld,
        M = A.isHarmony,
        x = A.isAndroid,
        R = A.hasVoiceInput,
        q = A.inputRef,
        O = A.xuanguVersion,
        D = A.xuanguAbtReportInfo,
        F = A.newUserXuanGuQueryType,
        Q = A.followOnnewUserXuanGuQueryType,
        B = A.isFirstClicknewUserFollowOn,
        E = A.appDeviceId,
        H = A.mockTradeInfoStr,
        _ = A.mockTradeAbtUser,
        V = A.useIncrementalModel,
        N = A.onOpenAiModelSelect,
        j = A.onCloseAiModelSelect,
        U = A.onOutMaskClick,
        G = A.onChooseModel,
        $ = A.onInputChangeAiModel,
        W = A.checkAiModelSelectGuideShow,
        X = A.initAiModuleMame,
        Y = A.initAppInputView,
        Z = A.updateModuleName,
        K = A.entryAbtCreate,
        J = A.entryOnlineAnswerAbt,
        z = A.onlineAnswerAbtType,
        ee = A.followOnAbtType,
        te = A.followOnAbtReportInfo,
        se = A.entryFollowOnAbtCreate,
        ne = A.fetchUserInfo,
        ie = A.shouldAbtNewUserXuangu,
        oe = A.entryGetDeviceId,
        re = A.generateGeneralWatchlistData,
        ae = A.onInputChangeAiThinking,
        ue = d.useLongPressHooks(n, q, "halfscreen"),
        ce = ue.questionLongPress,
        le = ue.longPressPostion,
        he = ue.targetRect,
        de = ue.targetQuestion,
        pe = ue.handleQuestionLongPress,
        ge = ue.hideQuestionLongPressMenu,
        me = ue.handleLongPressMenuTap,
        fe = w.usePrivacyGrantHooks().entryUsePrivacyGrant,
        we = d.useComponentConfigHooks(),
        ye = we.componentPluginArray,
        Se = we.fetchComponentConfig,
        Ae = y.useShareCodeHooks(e, ye),
        ke = Ae.fetchShareInfo,
        ve = Ae.isShareAnswerInvalid,
        Ce = p.useHistorySearchHooks(e, ye),
        Ie = Ce.entrySearchHistory,
        be = Ce.parseHistoryDataItem,
        Te = p.use13YearTaskHooks(),
        Pe = Te.thirteenYearTaskCanShow,
        Le = Te.thirteenYearBackPopShow,
        Me = Te.handleThirteenYearTaskShowEvent,
        xe = Te.handleThirteenYearBackPopShowEvent,
        Re = p.useScrollButtonsHooks(n, {
          isMP: !0,
          getAnswerList: function () {
            return n.answerList || [];
          },
          getShowAiDrawer: function () {
            return !1;
          },
          getIsReplying: function () {
            return n.isReplying || !1;
          },
          answerListRefName: "answerlist",
          getCurSession: function () {
            return n.curSession || "";
          },
          pageType: "halfscreen",
          getIsInputExpanded: function () {
            return n.isInputExpanded || !1;
          },
          onInputAreaHeightOffsetChange: function (e) {
            S(e);
          },
          getEnableAutoScrollDown: function () {
            var e, t, s;
            return (
              null ==
                (s =
                  null ==
                  (t =
                    null == (e = n.$refs.answerlist)
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
                    null == (e = n.$refs.answerlist)
                      ? void 0
                      : e.getIsAutoScrolling)
                    ? void 0
                    : t.call(e)) && s
            );
          },
        }),
        qe = v(e),
        Oe = qe.aiExpertDetail,
        De = qe.parseQuestionToAiExpertMode;
      return c(
        {
          aiExpertDetail: Oe,
          parseQuestionToAiExpertMode: De,
          skin: o,
          naviTitleAiModelTriangle: r,
          lastAnswerItemStyle: a,
          mainContentHeight: u,
          calcContainerHeight: l,
          getAppSafeBottom: g,
          halfContainerStyle: m,
          updateInputAreaHeightOffset: S,
          moduleName: k,
          thinking: C,
          showAiModelSelect: I,
          showAiModelGuide: b,
          naviAnimClass: T,
          useAppH5: P,
          isIosOld: L,
          isHarmony: M,
          isAndroid: x,
          hasVoiceInput: R,
          inputRef: q,
          xuanguVersion: O,
          xuanguAbtReportInfo: D,
          newUserXuanGuQueryType: F,
          followOnnewUserXuanGuQueryType: Q,
          isFirstClicknewUserFollowOn: B,
          appDeviceId: E,
          mockTradeInfoStr: H,
          mockTradeAbtUser: _,
          useIncrementalModel: V,
          onOpenAiModelSelect: N,
          onCloseAiModelSelect: j,
          onOutMaskClick: U,
          onChooseModel: G,
          onInputChangeAiModel: $,
          checkAiModelSelectGuideShow: W,
          initAiModuleMame: X,
          initAppInputView: Y,
          updateModuleName: Z,
          entrySearchHistory: Ie,
          parseHistoryDataItem: be,
          questionLongPress: ce,
          longPressPostion: le,
          targetRect: he,
          targetQuestion: de,
          handleQuestionLongPress: pe,
          hideQuestionLongPressMenu: ge,
          handleLongPressMenuTap: me,
          entryUsePrivacyGrant: fe,
          entryAbtCreate: K,
          entryOnlineAnswerAbt: J,
          onlineAnswerAbtType: z,
          followOnAbtType: ee,
          followOnAbtReportInfo: te,
          entryFollowOnAbtCreate: se,
          fetchUserInfo: ne,
          shouldAbtNewUserXuangu: ie,
          entryGetDeviceId: oe,
          fetchShareInfo: ke,
          isShareAnswerInvalid: ve,
          thirteenYearTaskCanShow: Pe,
          thirteenYearBackPopShow: Le,
          handleThirteenYearTaskShowEvent: Me,
          handleThirteenYearBackPopShowEvent: xe,
          componentPluginArray: ye,
          fetchComponentConfig: Se,
          generateGeneralWatchlistData: re,
          onInputChangeAiThinking: ae,
        },
        Re
      );
    },
    data: function () {
      return {
        isLoadingHistory: !1,
        showFullScreenPermissionDialog: !1,
        showOldPermissionDialog: !1,
        showFullScreenFeedback: !1,
        showDisLikeDialog: !1,
        showAiReadingDisclaimer: !1,
        aiReadingDisclaimerTips: "",
        stopAnswerIconImage:
          "https://st.gtimg.com/design/11269210b7f9a1c4d7b91a3ea9aadb7f.png",
        loginCheck: !0,
        includeCredentials: !1,
        inputList: [],
        answerList: [],
        format: "plain",
        logs: [],
        recalContent: "",
        quoteContent: "",
        replyContent: "",
        thinkingContent: "",
        docsArray: [],
        isReplying: !1,
        navTitleHeight: 0,
        isInputExpanded: !1,
        curSession: "",
        curRequestId: "",
        curUser: "",
        curOpenId: "",
        curFskey: "",
        curCheck: "",
        searchText: "",
        contentId: "",
        searchfrom: "",
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
        shouldShowAnserAnimationNoQuestion: !1,
        hasBlockRequest: !1,
        curTraceId: "",
        denyAnswer: !1,
        isMP: !0,
        isWzqLight: !1,
        isWzqXcx: !1,
        mpScrollTop: 0,
        curQuestionType: "",
        enableRag: !0,
        touchStartY: 0,
        enableAutoScrollDown: !0,
        isiOS: T.ios,
        keyboardShowing: !1,
        isWZQ: !1,
        IS_ZXG: C,
        isLct: I,
        isZxgXcxH5: b,
        protocalId: "",
        privacyResult: null,
        privacyType: "",
        curNewUserQueObj: null,
        curNewUserXuanGuFollowOnObj: null,
        hasRefreshLogin: !1,
        showLinkJumpGuide: !1,
        allQuoteDocs: {},
        msgType: "text",
        isShowVoiceEdit: !1,
        keyboardHeightUseInAppH5: 0,
        keyboardHeightUseInMp: 0,
        isFirstLoad: !0,
        voiceText: "",
        sessionTimeStart: "",
        historyDataLength: 0,
        serverDefaultModel: "",
        isUpdateProtocol: !1,
        showPresetQuestionCard: !1,
        presetQuestionText: "",
        emotionBoostTargetRequestId: "",
        isPresetQuestionTriggered: !1,
        queryQustion: "",
        hasQueryQuestionUsed: !1,
        hasInputContent: !1,
      };
    },
    computed: {
      getInputPlaceHolderText: function () {
        return this.isAiExpertMode
          ? this.isReplying
            ? "专家回答中..."
            : "向专家提问..."
          : this.isReplying
          ? "元宝助手回答中..."
          : this.isPresetCard && !this.hasQueryQuestionUsed && this.queryQustion
          ? this.queryQustion
          : "";
      },
      canShowGuideView: function () {
        return !(
          this.isPresetCard ||
          ("newuser_a" !== this.sourceFrom &&
            "newuser_b" !== this.sourceFrom &&
            "newuser_c" !== this.sourceFrom) ||
          this.aiQuestionQuery
        );
      },
      isViewShareAnswer: function () {
        return "viewShareAnswerHttp" === this.sseServeType;
      },
      isAiExpertMode: function () {
        return "aiExpertServer" === this.sseServeType;
      },
      isNewsAIReadingMode: function () {
        return "newsAIReading" === this.sseServeType;
      },
      isPresetCard: function () {
        return this.isAiExpertMode || this.isNewsAIReadingMode;
      },
      shouldAutoFocus: function () {
        return !this.needAnswer;
      },
      shouldShowEmotionBoostGuide: function () {
        if (
          !this.answerList.length ||
          this.historyDataLength === this.answerList.length
        )
          return !1;
        var e = this.answerList[this.answerList.length - 1];
        if (!e || !e.answerFinish) return !1;
        var t = (this.serverObj || {}).triggers;
        return (
          !!(void 0 === t ? [] : t).some(function (e) {
            return "custom:Revisit" === e;
          }) &&
          (this.needAnswer || this.isPresetQuestionTriggered)
        );
      },
      lastAnswerStreamingLength: function () {
        var e = this.answerList[this.answerList.length - 1];
        return e
          ? (e.reply ? e.reply.length : 0) +
              (e.thinking ? e.thinking.length : 0) +
              (e.recal ? e.recal.length : 0) +
              (e.quote ? e.quote.length : 0) +
              (e.mcpQuote ? e.mcpQuote.length : 0) +
              d.getProcessStepsStreamingLength(e)
          : 0;
      },
      isAnswerStreaming: function () {
        var e = this.answerList[this.answerList.length - 1];
        return this.isReplying && !(e && e.answerFinish && !e.isDualAnswer);
      },
    },
    watch: {
      isReplying: function (e) {
        !e && this.isFirstLoad && (this.isFirstLoad = !1);
      },
      shouldShowEmotionBoostGuide: function (e) {
        if (e && !this.emotionBoostTargetRequestId) {
          var t = this.answerList[this.answerList.length - 1];
          (null == t ? void 0 : t.requestId) &&
            (this.emotionBoostTargetRequestId = t.requestId);
        }
      },
      lastAnswerStreamingLength: function () {
        var e;
        null == (e = this.scrollToBottom) || e.call(this, !1, !1);
      },
    },
    created: function () {
      return l(
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
            h,
            d = this;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.fetchComponentConfig(),
                      (this.curSession = this.generateRandomString(128)),
                      (this.scrollToBottom = m.throttle(
                        32,
                        !1,
                        this.scrollToBottomReal
                      )),
                      this.isMP &&
                        (this.throttledUpdateMpIndex = m.throttle(
                          300,
                          !1,
                          this.updateMpQuestionIndex
                        )),
                      (n = this.query || {}),
                      (i = ""),
                      (i = this.aiDialogQuestion),
                      this.isPresetCard &&
                        this.aiDialogQuestion &&
                        ((this.queryQustion = this.aiDialogQuestion), (i = "")),
                      (this.searchText =
                        (null == n ? void 0 : n.searchText) || ""),
                      (this.contentId = n.contentId || ""),
                      (this.searchfrom = this.sourceFrom || "searchresult"),
                      (o = this.serverObj || {}),
                      (r = o.sub_scene),
                      (a = o.sub_channel),
                      (u = o.ext_content);
                    try {
                      u &&
                        ((c = JSON.parse(u) || {}),
                        (h = c.defalut_model),
                        (this.serverDefaultModel = h || ""));
                    } catch (e) {}
                    if (this.shouldAbtNewUserXuangu(this.searchfrom, r, a))
                      try {
                        this.entryAbtCreate();
                      } catch (e) {}
                    return (
                      this.entryOnlineAnswerAbt(),
                      this.entryFollowOnAbtCreate(),
                      this.entryGetDeviceId(),
                      (t.next = 12),
                      this.initHistory()
                    );
                  case 12:
                    g.StockBridge.setBounces(!1),
                      this.initAiModuleMame()
                        .then(function () {
                          g.StockBridge.report(
                            "jichu.ai_search.ai_search_page_visible",
                            {
                              searchText: d.searchText,
                              contentId: d.contentId,
                              searchfrom: d.searchfrom,
                              aimodel: d.moduleName,
                            }
                          );
                        })
                        .catch(function (e) {}),
                      g.StockBridge.getUserInfo(function (t) {
                        d.initUserInfo(t),
                          g.StockBridge.getStorage(P, function (t) {
                            return l(
                              d,
                              null,
                              e().mark(function s() {
                                var n,
                                  o,
                                  r,
                                  a,
                                  u,
                                  c,
                                  l,
                                  h,
                                  d,
                                  p,
                                  m,
                                  f,
                                  w,
                                  y = this;
                                return e().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((this.hasAgreePermission =
                                              "data" in t && "true" === t.data),
                                            (n = !1),
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
                                          (o = e.sent),
                                            (a = (r = o || {})
                                              .needPopPrivacyDialog),
                                            (u = r.privacyResult),
                                            (c = r.privacyType),
                                            (l = r.hasPermission),
                                            (d = (h = u || {})
                                              .consented_user_need_popup),
                                            (p = h.status),
                                            (m = h.consented_any_version),
                                            (n = a),
                                            (this.isUpdateProtocol =
                                              "0" === p &&
                                              !0 === m &&
                                              !1 === d),
                                            (this.privacyResult = u),
                                            (this.privacyType = c),
                                            (this.hasAgreePermission =
                                              l || this.isUpdateProtocol),
                                            this.hasAgreePermission &&
                                              g.StockBridge.setStorage(
                                                P,
                                                "true",
                                                function (e) {}
                                              ),
                                            u &&
                                              u.id &&
                                              (this.protocalId = u.id);
                                        case 16:
                                          if (
                                            (this.hasAgreePermission &&
                                              !n &&
                                              this.checkAiModelSelectGuideShow(),
                                            !this.aiPresetPrompt ||
                                              !this.aiPresetPrompt.question)
                                          ) {
                                            e.next = 20;
                                            break;
                                          }
                                          (this.summayPresetPrompt =
                                            "summary" === this.sourceFrom),
                                            this.needAnswer
                                              ? this.tryeToInputAndCreateConnectOpeartion(
                                                  this.aiPresetPrompt.question
                                                )
                                              : ((this.showPresetQuestionCard =
                                                  !0),
                                                (this.presetQuestionText =
                                                  this.aiPresetPrompt.question)),
                                            (e.next = 28);
                                          break;
                                        case 20:
                                          if (!this.isViewShareAnswer) {
                                            e.next = 25;
                                            break;
                                          }
                                          return (
                                            (e.next = 23), this.fetchShareInfo()
                                          );
                                        case 23:
                                          return (
                                            (f = e.sent),
                                            e.abrupt(
                                              "return",
                                              void this.parseShareResultToAnswer(
                                                f
                                              )
                                            )
                                          );
                                        case 25:
                                          if (!this.isPresetCard) {
                                            e.next = 27;
                                            break;
                                          }
                                          return e.abrupt("return");
                                        case 27:
                                          if (void 0 !== i && i.length > 0) {
                                            try {
                                              w = decodeURIComponent(i);
                                            } catch (e) {
                                              w = i;
                                            }
                                            this.needAnswer
                                              ? ((this.presetFirstQuestion =
                                                  !0),
                                                this.tryeToInputAndCreateConnectOpeartion(
                                                  w
                                                ))
                                              : ((this.showPresetQuestionCard =
                                                  !0),
                                                (this.presetQuestionText = w),
                                                setTimeout(function () {
                                                  y.showPermissionDialog(n);
                                                }, 500));
                                          } else
                                            setTimeout(function () {
                                              y.showPermissionDialog(n);
                                            }, 500);
                                        case 28:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  s,
                                  this
                                );
                              })
                            );
                          });
                      }),
                      null == (s = this.hqBridge) ||
                        s.busOn("showCommonPopup", this.showCommonPopup),
                      C &&
                        (this.initAppInputView(),
                        this.delayInitAppSafeBottom(),
                        shy &&
                          "function" == typeof shy.on &&
                          (shy.on("semiEditorLiteResponse", function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              t = e.content;
                            t && t.length > 0 && d.onSendQuestion(t);
                          }),
                          shy.on("onKeyboardHeightChange", function () {
                            var e,
                              t,
                              s,
                              n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                            if (n && void 0 !== n.height) {
                              var i = d.getAppSafeBottom(),
                                o = n.height < i ? i : n.height;
                              (d.keyboardShowing = n.height > 50),
                                null ==
                                  (s =
                                    null ==
                                    (t =
                                      null == (e = d.$refs)
                                        ? void 0
                                        : e.inputRef)
                                      ? void 0
                                      : t.setAppSafeBottom) || s.call(t, o),
                                (d.keyboardHeightUseInAppH5 = n.height),
                                d.$nextTick(function () {
                                  d.calculateBackToBottomPosition();
                                });
                            }
                          }))),
                      g.StockBridge.busOn(
                        "market-goToChoosePage",
                        this.onGoToChoosePage
                      );
                  case 18:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    beforeDestroy: function () {
      var e;
      if (
        (this.unsubscribeGlobalPrivacy(),
        g.StockBridge.busOff("market-goToChoosePage", this.onGoToChoosePage),
        this.delayCalcTimer && clearTimeout(this.delayCalcTimer),
        null == (e = this.hqBridge) ||
          e.busOff("showCommonPopup", this.showCommonPopup),
        this.isReplying)
      ) {
        var t =
          "function" == typeof this.getAnswerFinshReportObj
            ? this.getAnswerFinshReportObj(0)
            : {};
        g.StockBridge.report(L, t);
      }
      this.disconnect(),
        this.isIosOld &&
          void 0 !== window.visualViewport &&
          window.visualViewport.removeEventListener(
            "scroll",
            this.onVisualViewportChange
          ),
        this.cleanup();
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
          h.wx$1
            .createSelectorQuery()
            .in(e)
            .select(".navTitle")
            .boundingClientRect(function (t) {
              t &&
                ((e.navTitleHeight = t.height),
                g.StockBridge.busEmit("ai-navTitle-height", t.height));
            })
            .exec();
      }),
        setTimeout(function () {
          e.calculateBackToBottomPosition();
        }, 1e3);
    },
    methods: {
      toggleAiReadingDisclaimer: function (e) {
        (this.showAiReadingDisclaimer = e), this.$emit("maskShow", e);
      },
      onShowAiReadingDisclaimer: function (e) {
        (this.aiReadingDisclaimerTips = e || ""),
          this.toggleAiReadingDisclaimer(!0);
      },
      onAiReadingDisclaimerHide: function () {
        this.toggleAiReadingDisclaimer(!1);
      },
      handleMpScroll: function (e) {
        this.isMP &&
          (e &&
            e.detail &&
            void 0 !== e.detail.scrollTop &&
            this.checkIsAtBottom(e.detail.scrollTop),
          this.throttledUpdateMpIndex && this.throttledUpdateMpIndex());
      },
      updateMpQuestionIndex: function () {
        return l(
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
                        null == (s = this.$refs.answerlist)
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
                        i = h.index.createSelectorQuery().in(this), o = 0;
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
                          for (var m = 0, f = 1 / 0, w = 0; w < e.length; w++) {
                            var y = e[w];
                            if (y) {
                              var S = y.top,
                                A = y.bottom,
                                k = Math.max(S, t),
                                v = Math.min(A, s),
                                C = Math.max(0, v - k),
                                I = A - S;
                              if ((I > 0 ? C / I : 0) > 0.1) {
                                var b = Math.abs(S - t);
                                b < f && ((f = b), (m = w));
                              }
                            }
                          }
                          r.currentQuestionIndex = m;
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
        return l(
          this,
          null,
          e().mark(function t() {
            var s,
              n = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.isPresetCard) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        this.entrySearchHistory("", !1, !1)
                      );
                    case 4:
                      (s = e.sent),
                        this.parseHistoryInfo(s),
                        this.$nextTick(function () {
                          var e, t, s;
                          if (
                            null == (e = n.$refs.answerlist)
                              ? void 0
                              : e.pinToBottomForHistory
                          ) {
                            var i =
                              g.StockBridge.ENV === h.EnvTypeEnum.MP
                                ? 2e3
                                : 1500;
                            n.$refs.answerlist.pinToBottomForHistory(i);
                          } else n.scrollToBottomForce(), null == (s = null == (t = n.$refs.answerlist) ? void 0 : t.startFollowGrowing) || s.call(t);
                        }),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 8]]
            );
          })
        );
      },
      onHistoryPinEnd: function () {
        this.isLoadingHistory = !1;
      },
      delayInitAppSafeBottom: function () {
        var e = this;
        C &&
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
      contentTouch: function (e) {
        this.hideKeyboard(), (this.keyboardShowing = !1);
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
      onFocus: function (e) {
        var t = this;
        (this.keyboardShowing = e),
          this.$nextTick(function () {
            t.calculateBackToBottomPosition();
          });
      },
      onInputExpandChange: function (e) {
        var t = this;
        (this.isInputExpanded = e),
          this.$nextTick(function () {
            t.calculateBackToBottomPosition();
          });
      },
      onContainerHeightChange: function (e) {
        var t = this;
        if (this.isMP) {
          if (e <= 0)
            return (
              (this.contentListPaddingBottom = 0),
              this.updateInputAreaHeightOffset(0),
              void this.calculateBackToBottomPosition()
            );
          var s = h.index.createSelectorQuery().in(this);
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
      hideKeyboard: function () {
        h.wx$1.hideKeyboard();
      },
      parseShareResultToAnswer: function (e) {
        e && (this.inputList.push(e.question), this.answerList.push(e));
      },
      tryeToInputAndCreateConnectOpeartion: function (e) {
        var t = this;
        this.resetQuestionIndex(), (this.showPresetQuestionCard = !1);
        var s = new Date().getTime() / 1e3,
          n =
            0 === this.inputList.length ||
            (this.historyDataLength === this.inputList.length &&
              s - this.sessionTimeLatest > 3600);
        this.inputList.push(e),
          this.answerList.push({
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
            sseStatus: d.SseStatus.BEGIN_CONNECT,
            isOfflineQuestion: !1,
            aimodel: this.moduleName,
            answerFinishFlag: 0,
            commentStatus: 0,
            sessionTime: n ? k.timeFormat(new Date().getTime() / 1e3) : "",
            requestId: this.generateTraceId(),
            answerChainMode: "",
            processSteps: [],
            useProcessMode: !1,
            mainContentStarted: !1,
          }),
          this.$nextTick(function () {
            var e, s;
            null ==
              (s =
                null == (e = t.$refs.answerlistview)
                  ? void 0
                  : e.setEnableAutoScrollDown) || s.call(e, !0),
              t.scrollToBottomForce(),
              setTimeout(function () {
                t.scrollToBottomForce();
              }, 60);
          }),
          this.hasAgreePermission
            ? this.connect()
            : ((this.hasBlockRequest = !0),
              1 == this.inputList.length
                ? this.shouldShowGuideViewNoQuestion
                  ? this.showPermissionDialog(!0)
                  : this.onDenyProtocal(!1)
                : this.showPermissionDialog(!0));
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
        this.isMP && h.wx$1.switchTab({ url: "/pages/index/index" });
      },
      closeCurPage: function () {
        g.StockBridge.exitPage();
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
        (this.curUser = e.openid),
          (this.curOpenId = e.openid),
          (this.curFskey = e.fskey),
          (this.curCheck = e.check);
      },
      getKeyword: function (e) {
        return e < this.inputList.length ? this.inputList[e] : "";
      },
      getRequestId: function (e) {
        return (
          (e < this.answerList.length &&
            this.answerList[e] &&
            this.answerList[e].requestId) ||
          ""
        );
      },
      getDocs: function (e) {
        return e < this.answerList.length ? this.answerList[e].docs : "";
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
      getIsMcpAgentMessage: function (e) {
        return (
          e < this.answerList.length && this.answerList[e].isMcpAgentMessage
        );
      },
      functionItemFinish: function () {},
      tapGuessQuestion: function (e, t) {
        this.doSendGuessQuestion(e, !0, t);
      },
      tapNewUserGuessQuestion: function (e) {
        (this.curNewUserXuanGuFollowOnObj = e),
          (this.newUserXuanGuQueryType = e.queryType),
          this.doSendGuessQuestion(e.query, !0);
      },
      doSendGuessQuestion: function (e, t, s) {
        this.isReplying ||
          this.denyAnswer ||
          (t
            ? (g.StockBridge.report("jichu.ai_search.follow_on_item_click", {
                contentId: e,
                requestid: this.curRequestId,
                position: s,
              }),
              (this.curQuestionType = "followon"),
              (this.msgType = "text"))
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
            "mpweapp" === h.ShellTypeEnum.MPWAI &&
              (a = "&appid=wx1559de8bc252bce9"),
            (r = "".concat(r).concat(a));
        }
        return r;
      },
      canAddMockTradeInfoStrForManual: function (e) {
        return (
          !e ||
          !e.includes("subChannel=manual") ||
          e.includes("subScene=newuser_xuangu")
        );
      },
      getModuleName: function () {
        return this.answerList.length > this.historyDataLength + 1
          ? this.moduleName
          : this.serverDefaultModel
          ? this.serverDefaultModel
          : "xiaobao" === this.searchfrom || "summary" === this.searchfrom
          ? "xiaobao" === this.searchfrom
            ? "deepseek"
            : "yuanbao"
          : this.moduleName;
      },
      generateUrl: function () {
        var e = this.inputList[this.inputList.length - 1],
          t = e,
          s = this.presetFirstQuestion;
        s && ((e = this.aiQuestionQuery || e), (this.presetFirstQuestion = !1)),
          this.isAiExpertMode && (e = this.parseQuestionToAiExpertMode(e)),
          null != this.curNewUserQueObj &&
            this.curNewUserQueObj.prompt &&
            (e = this.curNewUserQueObj.prompt || e),
          null != this.curNewUserXuanGuFollowOnObj &&
            this.curNewUserXuanGuFollowOnObj.query &&
            (e = this.curNewUserXuanGuFollowOnObj.query || e),
          (this.curQueryForPost = e),
          (this.curQueryOriginForPost = t);
        var n = this.curSession;
        this.getLastAnswerItem().requestId
          ? (this.curRequestId = this.getLastAnswerItem().requestId)
          : ((this.curRequestId = this.generateTraceId()),
            (this.getLastAnswerItem().requestId = this.curRequestId));
        var i = g.StockBridge.getAppValue(),
          o = "";
        (this.isMP || this.isWZQ) && (o = "&appid=wx9cf8c670ebd68ce4");
        var r = this.isWzqXcx || this.isWzqLight ? "trpc_agent" : "xuangu",
          a =
            "https://proxy.finance.qq.com/cgi/cgi-bin/openai/sse/search?session="
              .concat(n, "&request_id=")
              .concat(this.curRequestId)
              .concat(o, "&app=")
              .concat(i, "&module=")
              .concat(this.getModuleName(), "&rag=")
              .concat(this.enableRag, "&searchfrom=")
              .concat(this.searchfrom, "&gray=")
              .concat(r, "&thinking=")
              .concat(this.thinking || 0),
          u = !0;
        if (s) {
          var c = this.serverObj || {},
            l = c.subScene,
            d = c.sub_scene,
            p = c.subChannel,
            m = c.sub_channel,
            f = c.answer_cache,
            w = void 0 === f ? 0 : f,
            y = c.ext_content;
          (a = "".concat(a, "&stockCode=").concat(this.stockCode || "")),
            (a = "".concat(a, "&subScene=").concat(l || d || "")),
            (a = "".concat(a, "&subChannel=").concat(p || m || "")),
            -1 === w && (u = !1),
            (a = ""
              .concat(a, "&ext_content=")
              .concat(encodeURIComponent(null != y ? y : "")));
          var S = (this.serverObj || {}).content_id;
          S && (a = "".concat(a, "&contentId=").concat(encodeURIComponent(S)));
        }
        if (
          ((a = "".concat(a, "&cache=").concat(u)),
          null != this.curNewUserQueObj && this.curNewUserQueObj.prompt)
        ) {
          var A = this.curNewUserQueObj || {},
            k = A.subScene,
            v = A.sub_scene,
            C = A.subChannel,
            I = A.sub_channel;
          (a = "".concat(a, "&subScene=").concat(k || v || "")),
            (a = "".concat(a, "&subChannel=").concat(C || I || "")),
            (this.curNewUserQueObj = null);
        }
        if (null != this.curNewUserXuanGuFollowOnObj) {
          var b = this.curNewUserXuanGuFollowOnObj || {},
            T = b.subChannel,
            P = b.sub_channel;
          (a = "".concat(a, "&subChannel=").concat(T || P || "")),
            (this.curNewUserXuanGuFollowOnObj = null),
            this.isFirstClicknewUserFollowOn &&
              ((a = "".concat(a, "&marketing=newuser")),
              (this.isFirstClicknewUserFollowOn = !1));
        }
        return (
          (a = this.addLoginParams(a, !0)),
          (a = "".concat(a, "&extra_version=v2")),
          (a = "".concat(a, "&agent=1")),
          this.summayPresetPrompt &&
            ((a = ""
              .concat(a, "&route_id=depth-summary&stockCode=")
              .concat(this.stockCode, "&aiSrcType=")
              .concat(this.aiSrcType, "&stockType=")
              .concat(this.stockType)),
            (this.summayPresetPrompt = !1)),
          "" != this.newUserXuanGuQueryType &&
            ((a = ""
              .concat(a, "&query_type=")
              .concat(this.newUserXuanGuQueryType)),
            (this.newUserXuanGuQueryType = "")),
          g.StockBridge.ENV === h.EnvTypeEnum.SHY_NATIVE &&
            this.appDeviceId &&
            (a = "".concat(a, "&_devId=").concat(this.appDeviceId)),
          (a = "".concat(a, "&plugin_pos=content")),
          (a = ""
            .concat(a, "&question_src=")
            .concat(encodeURIComponent(this.curQuestionType))),
          "" !== this.mockTradeInfoStr &&
            this.mockTradeAbtUser &&
            this.canAddMockTradeInfoStrForManual(a) &&
            (a = "".concat(a, "&marketing=").concat(this.mockTradeInfoStr)),
          (a = ""
            .concat(a, "&incrementModel=")
            .concat(this.useIncrementalModel ? 1 : 0)),
          (a = "".concat(a, "&blue_tag=true")),
          this.onlineAnswerAbtType &&
            (a = "".concat(a, "&ab_test=").concat(this.onlineAnswerAbtType)),
          a
        );
      },
      onDisableOuterAutoScroll: function () {
        var e, t;
        null ==
          (t =
            null == (e = this.$refs.answerlist)
              ? void 0
              : e.setEnableAutoScrollDown) || t.call(e, !1);
      },
      scrollToBottomReal: function () {
        var e, t;
        null ==
          (t =
            null == (e = this.$refs.answerlist) ? void 0 : e.scrollToBottom) ||
          t.call(e);
      },
      scrollToBottomForce: function () {
        var e, t;
        null ==
          (t =
            null == (e = this.$refs.answerlist) ? void 0 : e.scrollToBottom) ||
          t.call(e, !0, !0);
      },
      setAnswerFinish: function () {
        var e = this;
        this.answerList.length > 0 &&
          (h.Vue.set(this.getLastAnswerItem(), "answerFinish", !0),
          this.$nextTick(function () {
            e.scrollToBottom();
          }));
      },
      stopAnswer: function () {
        var e = this,
          t = this.answerList.length - 1;
        "" === this.replyContent &&
          ((this.replyContent = "已暂停生成"),
          h.Vue.set(this.answerList[t], "reply", this.replyContent)),
          this.$nextTick(function () {
            h.Vue.set(e.answerList[t], "sseStatus", d.SseStatus.ON_ERROR);
          }),
          this.setAnswerFinish(),
          this.claerCurData(),
          this.disconnect(),
          this.setAnswerFinishFlag(!1),
          this.notifyServerStopAnswer(this.curSession, this.curRequestId);
        var s = { index: t, complete: !1, searchfrom: this.searchfrom };
        "mpweapp" === h.ShellTypeEnum.SHY &&
          shy.notify("common-ai-answer-finish", c({ module: !1 }, s)),
          g.StockBridge.busEmit("common-ai-answer-finish", s),
          g.StockBridge.report(L, this.getAnswerFinshReportObj(0)),
          g.StockBridge.report("jichu.ai_search.manual_stop_answer", {
            trace_id: this.curTraceId,
            requestid: this.curRequestId,
            session: this.curSession,
            searchfrom: this.searchfrom,
            aimodel: this.moduleName,
          });
      },
      connect: function () {
        var e,
          t,
          s,
          n = this;
        this.disconnect(),
          this.log("[info] connecting to ".concat(this.url), "system"),
          (this.isReplying = !0);
        var i = null != this.inputList ? this.inputList.length : 0,
          o = +(null == (e = this.inputList) ? void 0 : e.length)
            ? this.inputList.length - 1
            : 0,
          r = this.contentId,
          a = "";
        this.presetFirstQuestion &&
          ((r = (null == (t = this.serverObj) ? void 0 : t.uuid) || r),
          (a = (null == (s = this.serverObj) ? void 0 : s.sub_scene) || ""));
        var u = this.generateUrl();
        g.StockBridge.report("jichu.ai_search.send_question", {
          searchText: this.searchText,
          contentId: r,
          requestid: this.curRequestId,
          session: this.curSession,
          searchfrom: this.searchfrom,
          questiontimes: i,
          questiontype: this.curQuestionType,
          aimodel: this.moduleName,
          msg_type: this.msgType,
          subScene: a,
          thinking: this.thinking,
        }),
          p.fetchEventDataWrapper(u, {
            method: "POST",
            data: {
              context: this.getContextInfoList(),
              query: this.curQueryForPost,
              query_origin: this.curQueryOriginForPost,
            },
            headers: { "Content-Type": "application/json" },
            onmessage: function (e, t) {
              if (
                (clearTimeout(n.sseTimeoutId),
                (n.sseTimeoutId = setTimeout(function () {
                  g.StockBridge.aegisReportEvent(
                    "[stock-search-ai] sseTimeout",
                    {
                      errorMessage: "SSE请求3秒连接未收到消息",
                      sourceFrom: n.sourceFrom,
                    }
                  );
                }, 3e3)),
                "" !== e.event || "" !== e.data)
              ) {
                var s = e.data;
                if ("message" === e.event)
                  if ("[DONE]" === s) {
                    clearTimeout(n.sseTimeoutId),
                      g.StockBridge.report(L, n.getAnswerFinshReportObj(1)),
                      n.setAnswerFinishFlag(!0),
                      n.claerCurData(),
                      n.setAnswerFinish();
                    var i = {
                      index: o,
                      complete: !0,
                      searchfrom: n.searchfrom,
                    };
                    "mpweapp" === h.ShellTypeEnum.SHY &&
                      shy.notify(
                        "common-ai-answer-finish",
                        c({ module: !1 }, i)
                      ),
                      g.StockBridge.busEmit("common-ai-answer-finish", i);
                  } else if (
                    ((n.curTraceId = d.tryToParseTraceId(s)),
                    (n.isReplying = !0),
                    d.isRecallReply(s))
                  )
                    (n.recalContent = d.parserMessage(s)),
                      h.Vue.set(
                        n.getLastAnswerItem(),
                        "sseStatus",
                        d.SseStatus.ON_RECALL
                      ),
                      h.Vue.set(n.getLastAnswerItem(), "recal", n.recalContent);
                  else if (d.isQuoteReply(s))
                    (n.quoteContent = d.parserMessage(s)),
                      h.Vue.set(
                        n.getLastAnswerItem(),
                        "sseStatus",
                        d.SseStatus.ON_QUOTE
                      ),
                      h.Vue.set(n.getLastAnswerItem(), "quote", n.quoteContent);
                  else if (d.isDeltaDocReply(s))
                    (n.docsArray = d.parseDocReply(s)),
                      h.Vue.set(n.getLastAnswerItem(), "docs", n.docsArray);
                  else if (d.isSmartServiceMessage(s))
                    h.Vue.set(
                      n.getLastAnswerItem(),
                      "isSmartServiceMessage",
                      !0
                    ),
                      h.Vue.set(
                        n.getLastAnswerItem(),
                        "mcpQuote",
                        "正在检索智能客服知识库..."
                      );
                  else if (d.isMcpQuoteInfoPluginReply(s)) {
                    var r = d.parseCommonAgentComponentName(s),
                      a = d.parserMessage(s),
                      u = [];
                    try {
                      u = JSON.parse(a || []);
                    } catch (e) {
                      u = [];
                    }
                    "fact_inner_reference" === r
                      ? h.Vue.set(n.getLastAnswerItem(), "factInnerDocs", u)
                      : "fact_outer_reference" === r &&
                        h.Vue.set(n.getLastAnswerItem(), "factOuterDocs", u);
                  } else if (d.isSubAagentMessage(s))
                    h.Vue.set(n.getLastAnswerItem(), "isMcpAgentMessage", !0);
                  else if (d.isSubAagentReply(s))
                    (n.quoteContent = d.parserMessage(s)),
                      n.quoteContent &&
                        n.quoteContent.length &&
                        (h.Vue.set(
                          n.getLastAnswerItem(),
                          "sseStatus",
                          d.SseStatus.ON_QUOTE
                        ),
                        h.Vue.set(
                          n.getLastAnswerItem(),
                          "mcpQuote",
                          n.quoteContent
                        ));
                  else if (d.isDeltaToolResponseReply(s)) {
                    var l = n.getLastAnswerItem();
                    p.reportMemoryIfHit(s),
                      l.answerChainMode === d.ANSWER_CHAIN_TRPC_AGENT &&
                        d.handleProcessToolResponse(l, s);
                  } else if (d.isDeltaToolCallsReply(s)) {
                    var m = n.getLastAnswerItem();
                    m.answerChainMode === d.ANSWER_CHAIN_TRPC_AGENT &&
                      d.handleProcessToolCall(m, s, n);
                  } else if (d.isDeltaContentReply(s)) {
                    var f = n.getLastAnswerItem();
                    if (
                      (h.Vue.set(f, "sseStatus", d.SseStatus.ON_CONTENT),
                      f.answerChainMode === d.ANSWER_CHAIN_TRPC_AGENT)
                    )
                      d.handleProcessContent(f, d.parserContent(s), n);
                    else {
                      var w = f.reply || "";
                      w === R && (w = ""),
                        (n.replyContent = w.concat(d.parserContent(s))),
                        h.Vue.set(f, "reply", n.replyContent);
                    }
                  } else if (d.isDeltaReasoningContentReply(s))
                    h.Vue.set(
                      n.getLastAnswerItem(),
                      "sseStatus",
                      d.SseStatus.ON_REASON_CONTENT
                    ),
                      n.parseThinkingContent(s);
                  else if (
                    d.isFunctionPluginMessage(s) ||
                    d.isXuanGuPluginMessage(s)
                  ) {
                    var y = d.parseFunctionPluginMessage(s);
                    n.claerCurData(),
                      d.isFunctionPluginMessage(s)
                        ? h.Vue.set(n.getLastAnswerItem(), "functionTips", y)
                        : h.Vue.set(
                            n.getLastAnswerItem(),
                            "functionXuanGuTips",
                            y
                          );
                  } else if (
                    d.isCommonAgentPluginReply(s, n.componentPluginArray)
                  ) {
                    var S = d.parseCommonAgentComponentName(s),
                      A = d.parserMessage(s);
                    "c-ai-general_watchlist" === S &&
                      (A = n.generateGeneralWatchlistData(A));
                    var k = d.generateComponentContent(S, A),
                      v = n.getLastAnswerItem().reply || "";
                    (n.replyContent = v.concat(k)),
                      h.Vue.set(n.getLastAnswerItem(), "reply", n.replyContent),
                      "c-ai-marketing" === S &&
                        n.mockTradeAbtUser &&
                        (n.mockTradeInfoStr = "");
                  } else if (d.isXuanGuFunctionPluginReply(s)) {
                    var I = d.parseXuanGuFunctionPluginReply(s);
                    h.Vue.set(n.getLastAnswerItem(), "functionObj", I);
                  } else if (d.isServerCacheMessage(s))
                    h.Vue.set(n.getLastAnswerItem(), "isOfflineQuestion", !0);
                  else if (d.isServerBusyMessage(s)) {
                    var b = d.parseServerBusyMessage(s);
                    h.Vue.set(n.getLastAnswerItem(), "serveBusyTips", b);
                  } else if (
                    d.isFunctionPluginInContentReply(s, n.componentPluginArray)
                  ) {
                    var T = d.parseFunctionPluginComponentType(s),
                      P = d.parseFunctionPluginReply(s);
                    P.mockTradeAbtUser = n.mockTradeAbtUser;
                    var M = JSON.stringify(P),
                      x = d.generateComponentContent(T, M),
                      q = n.getLastAnswerItem().reply || "";
                    (n.replyContent = q.concat(x)),
                      h.Vue.set(n.getLastAnswerItem(), "reply", n.replyContent);
                  } else if (d.isBusinessPluginMessage(s)) {
                    var O = d.parseBusinessPluginMessage(s);
                    h.Vue.set(
                      n.getLastAnswerItem(),
                      "businessPluginMessage",
                      O
                    );
                  } else
                    d.isNewUserPickStockMessage(s)
                      ? h.Vue.set(n.getLastAnswerItem(), "newUserPickStock", !0)
                      : d.isServerCodeMessage(s) &&
                        h.Vue.set(
                          n.getLastAnswerItem(),
                          "serverMessageCode",
                          d.parseServerCodeMessage(s)
                        );
                else if ("param" === e.event)
                  d.isParamObj(s) && n.parseModelueParamData(s);
                else if ("exception" === e.event) {
                  var D = JSON.parse(s);
                  n.replyContent = D.msg;
                  var F,
                    Q = D.code;
                  1618601004 === Q
                    ? ((F = n.replyContent),
                      (n.denyAnswer = !0),
                      (n.curSession = ""),
                      h.Vue.set(n.getLastAnswerItem(), "illegalQuestion", !0))
                    : 1620053006 === Q ||
                      1620053007 === Q ||
                      1620053010 === Q ||
                      1620053011 === Q ||
                      1620053013 === Q ||
                      1618601003 === Q
                    ? ((F = n.replyContent),
                      (1620053010 !== Q && 1620053011 !== Q) ||
                        h.Vue.set(
                          n.getLastAnswerItem(),
                          "sseStatus",
                          d.SseStatus.ON_SERVER_XP
                        ))
                    : 1618601001 === Q
                    ? ((F = "请登录后再提问哦。"),
                      C &&
                        shy.login(function (e) {
                          "success" !== e.status ||
                            n.hasRefreshLogin ||
                            ((n.hasRefreshLogin = !0),
                            g.StockBridge.getUserInfo(function (e) {
                              n.initUserInfo(e), n.refreshQuestionAndAnswer();
                            }));
                        }))
                    : (g.StockBridge.aegisReportEvent(
                        "[stock-search-ai] sseMessageError",
                        { serverCode: Q, sourceFrom: n.sourceFrom }
                      ),
                      (F = "服务器端异常，请稍后重试。")),
                    n.claerCurData(),
                    h.Vue.set(n.getLastAnswerItem(), "reply", F),
                    h.Vue.set(n.getLastAnswerItem(), "serverError", !0),
                    n.setAnswerFinish(),
                    (n.isReplying = !1);
                } else if ("error" === e.event)
                  n.log(
                    "[error] disconnected, automatically re-attempting connection",
                    "system"
                  ),
                    n.claerCurData(),
                    n.disconnect();
                else if (null === e.event)
                  if (d.isDeltaDocReply(s))
                    (n.docsArray = d.parseDocReply(s)),
                      h.Vue.set(n.getLastAnswerItem(), "docs", n.docsArray);
                  else if (
                    d.isFunctionPluginMessage(s) ||
                    d.isXuanGuPluginMessage(s)
                  ) {
                    var B = d.parseFunctionPluginMessage(s);
                    n.claerCurData(),
                      d.isFunctionPluginMessage(s)
                        ? h.Vue.set(n.getLastAnswerItem(), "functionTips", B)
                        : h.Vue.set(
                            n.getLastAnswerItem(),
                            "functionXuanGuTips",
                            B
                          );
                  } else if (d.isXuanGuFunctionPluginReply(s)) {
                    var E = d.parseXuanGuFunctionPluginReply(s);
                    h.Vue.set(n.getLastAnswerItem(), "functionObj", E);
                  }
              }
            },
            onclose: function () {
              n.$nextTick(function () {
                h.Vue.set(
                  n.getLastAnswerItem(),
                  "sseStatus",
                  d.SseStatus.ON_CLOSE
                );
              });
              var e = n.getLastAnswerItem();
              d.shouldApplyReplyErrFallback(e) && (e.reply = R),
                n.setAnswerFinish(),
                n.claerCurData(),
                (n.isReplying = !1),
                clearTimeout(n.sseTimeoutId);
            },
            onerror: function (e) {
              "AbortError" === e.name ||
                g.StockBridge.aegisReportEvent(
                  "[stock-search-ai] sseConnectOnError",
                  { errorMessage: e, sourceFrom: n.sourceFrom }
                ),
                n.$nextTick(function () {
                  h.Vue.set(
                    n.getLastAnswerItem(),
                    "sseStatus",
                    d.SseStatus.ON_ERROR
                  );
                });
              var t = n.getLastAnswerItem();
              d.shouldApplyReplyErrFallback(t) && (t.reply = R),
                n.setAnswerFinish(),
                n.claerCurData(),
                (n.isReplying = !1),
                clearTimeout(n.sseTimeoutId);
            },
          });
      },
      parseModelueParamData: function (e) {
        var t = JSON.parse(e);
        d.applyAnswerChainModeFromParam(this.getLastAnswerItem(), t),
          t &&
            t.module &&
            this.getModuleName() !== t.module &&
            (this.updateModuleName(t.module),
            g.StockBridge.report("jichu.ai_search.model_xianpin", {
              requestid: t.request_id,
              session: this.curSession,
              aimodel: t.module,
            }));
      },
      parseThinkingContent: function (e) {
        (this.thinkingContent = this.thinkingContent.concat(
          d.parserReasoningContent(e)
        )),
          h.Vue.set(this.getLastAnswerItem(), "thinking", this.thinkingContent);
      },
      disconnect: function () {
        p.abortController(),
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
        if (!this.isReplying && !this.denyAnswer) {
          var t = this.isAiExpertMode
            ? "向专家提问"
            : "请输入您想了解的金融问题";
          C &&
            shy.invoke(
              "showSemiEditor",
              { placeholder: t, fontSize: "16", semi_type: "lite" },
              function (t) {
                t.status && "fail" === t.status && e.onFail();
              }
            );
        }
      },
      onRequestPermissionDialog: function () {
        this.hasAgreePermission
          ? g.StockBridge.toast("已同意授权")
          : (this.showPermissionDialog(!0), (this.hasBlockRequest = !0));
      },
      changePresetPromptLikeStatus: function (e) {
        var t,
          s = g.StockBridge.getStorage(x) || {};
        (s[
          ""
            .concat(this.stockCode, "_")
            .concat(
              (null == (t = this.aiPresetPrompt) ? void 0 : t.promptType) ||
                "summary"
            )
        ] = e),
          g.StockBridge.setStorage(x, s);
      },
      cancelZan: function (e, t, s, n, i, o) {
        this.requestToZanOrCai(e, t, !0, "", s, n, i, o, !0),
          (this.answerList[t] || {}).isPresetPrompt &&
            this.changePresetPromptLikeStatus(0);
      },
      cancelCai: function (e, t, s, n, i, o) {
        this.requestToZanOrCai(e, t, !1, "", s, n, i, o, !0),
          (this.answerList[t] || {}).isPresetPrompt &&
            this.changePresetPromptLikeStatus(0);
      },
      clickZan: function (e, t, s, n, i, o) {
        (this.answerList[t] || {}).isPresetPrompt
          ? (h.Vue.set(this.answerList[t], "commentStatus", 1),
            this.changePresetPromptLikeStatus(1))
          : (g.StockBridge.report("jichu.ai_search.answer_content_like", {
              trace_id: this.curTraceId,
              requestid: this.curRequestId,
              session: this.curSession,
              searchfrom: this.searchfrom,
              aimodel: n,
            }),
            this.requestToZanOrCai(e, t, !0, "", s, n, i, o, !1));
      },
      clickCai: function (e, t, s, n, i, o) {
        (this.answerList[t] || {}).isPresetPrompt
          ? (h.Vue.set(this.answerList[t], "commentStatus", 2),
            this.changePresetPromptLikeStatus(2))
          : ((this.curCaiRequestId = e),
            (this.curCaiIndex = t),
            (this.curCaiAiModelName = n),
            (this.curOfflineQuestion = s),
            (this.curNewUserPickStock = i),
            (this.curServerMessageCode = o),
            this.showSelectDisLikeReasonDialog(!0));
      },
      onShare: function (e, t) {
        var s = this.getKeyword(e),
          n = c({ question: s }, t);
        this.$emit("shareAiAnswer", n),
          g.StockBridge.busEmit("common-ai-prompt-share", n),
          "mpweapp" === h.ShellTypeEnum.SHY &&
            shy.notify("common-ai-prompt-share", { module: !1 });
      },
      requestToZanOrCai: function (t, s, n, i, o, r, a, u) {
        var c = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        return l(
          this,
          null,
          e().mark(function l() {
            var p, m, f, w, y, S, A;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (p =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/feedback?"),
                        (p = this.addLoginParams(p, !1)),
                        (m = "" === t ? this.curRequestId : t),
                        (f = ""),
                        (w = [
                          d.SERVER_CODE_MBTI_ANSWER,
                          d.SERVER_CODE_WUJI,
                        ].includes(u)),
                        (o || w) && (f = "offline"),
                        "deepsea" === r && (f = "deepsea"),
                        a && (f = "newUserXuangu"),
                        (y = {
                          session: this.curSession,
                          requestId: m,
                          user: this.curOpenId,
                          type: f,
                        }),
                        c && (y.op = 1),
                        n
                          ? (y.likes = 1)
                          : ((y.likes = 2), (y.reason = encodeURIComponent(i))),
                        (S = this),
                        (e.prev = 8),
                        (e.next = 11),
                        g.StockBridge.request(p, "POST", y, {
                          dataType: "json",
                          header: { "Content-Type": "application/json" },
                        })
                      );
                    case 11:
                      (A = e.sent) &&
                        (0 === A.code
                          ? s < S.answerList.length &&
                            (c
                              ? h.Vue.set(
                                  this.answerList[s],
                                  "commentStatus",
                                  0
                                )
                              : h.Vue.set(
                                  this.answerList[s],
                                  "commentStatus",
                                  n ? 1 : 2
                                ))
                          : (g.StockBridge.aegisReportEvent(
                              "[stock-search-ai] aiFeedBackFailed",
                              {
                                ext4: "request to zan or cai failed,".concat(A),
                              }
                            ),
                            s < S.answerList.length &&
                              (c ||
                                h.Vue.set(
                                  this.answerList[s],
                                  "commentStatus",
                                  0
                                )))),
                        (e.next = 18);
                      break;
                    case 15:
                      (e.prev = 15),
                        (e.t0 = e.catch(8)),
                        g.StockBridge.aegisReportEvent(
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
        (this.showDisLikeDialog = e), this.$emit("maskShow", e);
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
          g.StockBridge.report("jichu.ai_search.answer_content_un_like", {
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
          g.StockBridge.setStorage(P, "true", function (e) {}),
          this.hasBlockRequest &&
            (h.Vue.set(this.getLastAnswerItem(), "permissionError", !1),
            this.connect(),
            (this.hasBlockRequest = !1));
      },
      onDenyProtocal: function () {
        this.showPermissionDialog(!1),
          this.hasBlockRequest &&
            h.Vue.set(this.getLastAnswerItem(), "permissionError", !0);
      },
      showPermissionDialog: function (e) {
        var t = this,
          s = e && !1;
        if ((this.unsubscribeGlobalPrivacy(), s)) {
          var n = function (e) {
            e &&
              "init" !== e &&
              (t.unsubscribeGlobalPrivacy(),
              (t.showFullScreenPermissionDialog = !0),
              t.$emit("maskShow", !0),
              t.hideKeyboard());
          };
          return (
            (this.globalPrivacyListener = n),
            void g.StockBridge.privacyAgreement.subscribe(n)
          );
        }
        (this.showFullScreenPermissionDialog = e),
          this.$emit("maskShow", e),
          e && this.hideKeyboard();
      },
      unsubscribeGlobalPrivacy: function () {
        this.globalPrivacyListener &&
          g.StockBridge.privacyAgreement &&
          g.StockBridge.privacyAgreement.unsubscribe(
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
          g.StockBridge.report("jichu.ai_search.answer_content_un_like", {
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
      onSendEmpty: function () {
        var e, t, s;
        if (
          this.isPresetCard &&
          !this.hasInputContent &&
          !this.hasQueryQuestionUsed &&
          this.queryQustion &&
          0 === this.inputList.length
        )
          return (
            null ==
              (s =
                null == (t = null == (e = this.$refs) ? void 0 : e.inputRef)
                  ? void 0
                  : t.blur) || s.call(t),
            this.tryeToInputAndCreateConnectOpeartion(this.queryQustion),
            void (this.hasQueryQuestionUsed = !0)
          );
        g.StockBridge.toast("请输入有效问题");
      },
      onHasInputContent: function () {
        this.hasInputContent = !0;
      },
      onSendQuestion: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "text";
        (this.msgType = t),
          (this.curQuestionType = "active"),
          this.setAnswerFinish(),
          this.tryeToInputAndCreateConnectOpeartion(e);
      },
      getRealQuestionIndex: function (e, t) {
        var s = this.answerList.findIndex(function (t) {
          return t.requestId === e;
        });
        return s >= 0 ? s : t;
      },
      checkContentAndFollowOn: function (t, s, n, i, o, r, a) {
        return l(
          this,
          null,
          e().mark(function u() {
            var c, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isAiExpertMode) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), this.checkContent(t, s, n);
                    case 4:
                      if (((c = e.sent), this.denyAnswer || 1e4 == c)) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 8),
                        this.checkFollowOnQuestions(t, s, n, i, o, r, a)
                      );
                    case 8:
                      if (((l = e.sent), (e.t0 = M === l), !e.t0)) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 13),
                        this.checkFollowOnQuestions(t, s, n, i, o, r, a)
                      );
                    case 13:
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
        return l(
          this,
          null,
          e().mark(function i() {
            var o, r, a, u, c, l, d;
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
                          app: g.StockBridge.getAppValue(),
                        }),
                        (a = this),
                        (e.prev = 2),
                        (e.next = 5),
                        g.StockBridge.request(o, "POST", r, {
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
                        (d = this.getRealQuestionIndex(t, s)),
                        e.abrupt(
                          "return",
                          (h.Vue.set(a.answerList[d], "reply", l),
                          h.Vue.set(a.answerList[d], "serverError", !0),
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
        return l(
          this,
          null,
          e().mark(function a() {
            var u, c, l, d, p, m, f, w, y, S, A, k, v, C;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (u =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/question/guess?"),
                        (u = this.addLoginParams(u, !1)),
                        (l = n.replace(new RegExp(":::card.*?:::", "gs"), "")),
                        (d = this.getKeyword(this.getRealQuestionIndex(t, s))),
                        i || "deepsea" === o || r
                          ? ((p = ""),
                            (m = ""),
                            i && (p = "offline"),
                            "deepsea" === o && (p = "deepsea"),
                            r &&
                              ((p =
                                0 == this.getContextInfoList().length
                                  ? "newUserXuangu"
                                  : "offline"),
                              (m =
                                0 == this.getContextInfoList().length
                                  ? this.followOnnewUserXuanGuQueryType
                                  : "")),
                            (c = {
                              session: this.curSession,
                              requestId: t,
                              user: this.curOpenId,
                              type: p,
                              answer: l,
                              question: d,
                              queryType: m,
                            }))
                          : (c = {
                              session: this.curSession,
                              requestId: t,
                              user: this.curOpenId,
                              type: "offline",
                              answer: l,
                              question: d,
                            }),
                        0 == this.getContextInfoList().length &&
                          ((c.searchfrom = this.searchfrom),
                          (f = this.serverObj || {}),
                          (w = f.sub_scene),
                          (y = f.sub_channel),
                          (S = f.replaceValue),
                          (A = void 0 === S ? "" : S),
                          (c.subScene = w),
                          (c.subChannel = y),
                          (c.replaceValue = A)),
                        this.followOnAbtType &&
                          (c.abTest = this.followOnAbtType),
                        (k = this),
                        (e.prev = 6),
                        (e.next = 9),
                        g.StockBridge.request(u, "POST", c, {
                          dataType: "json",
                          header: { "Content-Type": "application/json" },
                        })
                      );
                    case 9:
                      if (!(v = e.sent)) {
                        e.next = 19;
                        break;
                      }
                      if (0 !== v.code) {
                        e.next = 16;
                        break;
                      }
                      (C = v.data).questionList &&
                        (C.questionList.length > 0 || C.questions.length > 0) &&
                        (C.questionList.length > 0
                          ? (g.StockBridge.report(
                              "jichu.ai_search.follow_on_show",
                              {
                                contentId: C.questionList.join(","),
                                requestid: t,
                              }
                            ),
                            h.Vue.set(
                              k.answerList[this.getRealQuestionIndex(t, s)],
                              "guessObj",
                              C.questionList
                            ))
                          : C.questions.length > 0 &&
                            h.Vue.set(
                              k.answerList[this.getRealQuestionIndex(t, s)],
                              "guessObj",
                              C.questions
                            ),
                        setTimeout(function () {
                          var e;
                          null == (e = k.scrollToBottom) || e.call(k, !0, !1);
                        }, 30)),
                        (e.next = 18);
                      break;
                    case 16:
                      if (v.code !== M) {
                        e.next = 18;
                        break;
                      }
                      return e.abrupt("return", M);
                    case 18:
                      return e.abrupt("return", 0);
                    case 19:
                      e.next = 24;
                      break;
                    case 21:
                      return (
                        (e.prev = 21),
                        (e.t0 = e.catch(6)),
                        e.abrupt(
                          "return",
                          (g.StockBridge.aegisReportEvent(
                            "[stock-search-ai] aiFollowonFailed",
                            { ext4: JSON.stringify(e.t0 || {}) }
                          ),
                          0)
                        )
                      );
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              this,
              [[6, 21]]
            );
          })
        );
      },
      showCommonPopup: function (e) {
        this.$refs.commonSelector.onPopupMore(e);
      },
      commonSelectChange: function (e) {
        var t;
        null == (t = this.hqBridge) || t.busEmit("commonSelectChange", e);
      },
      handleCloseHalfScreenWindow: function () {
        this.$emit("closeHalfScreenWindow");
      },
      xianPinChangeModel: function (e) {
        g.StockBridge.toast("已切换作答模型"), this.updateModuleName(e);
      },
      notifyServerStopAnswer: function (t, s) {
        return l(
          this,
          null,
          e().mark(function o() {
            var r, a, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "https://proxy.finance.qq.com/cgi/cgi-bin/openai/report/sse",
                        (r = A.getSignV3({
                          data:
                            ((a = c(
                              {},
                              S.buildSignedLoginParams({
                                loginCheck: this.loginCheck,
                                curUser: this.curUser,
                                curOpenId: this.curOpenId,
                                curFskey: this.curFskey,
                                curCheck: this.curCheck,
                              })
                            )),
                            (u = {
                              session: t,
                              requestId: s,
                              type: "manual_close_sse",
                              t: new Date().getTime(),
                            }),
                            n(a, i(u))),
                          method: "GET",
                          origin: g.StockBridge.getAppValue(),
                        })),
                        (e.prev = 2),
                        (e.next = 5),
                        S.requestWrapper(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/openai/report/sse",
                          "GET",
                          r,
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
              o,
              this,
              [[2, 7]]
            );
          })
        );
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
      clickNewUserQuestion: function (e) {
        e &&
          e.title &&
          (e.prompt && (this.curNewUserQueObj = e),
          this.doSendGuessQuestion(e.title, !1));
      },
      handlePresetQuestionClick: function (e) {
        (this.isPresetQuestionTriggered = !0),
          this.hideKeyboard(),
          this.tryeToInputAndCreateConnectOpeartion(e);
      },
      onSelectMbti: function (e) {
        h.Vue.set(this.getLastAnswerItem(), "serverMessageCode", 0),
          h.Vue.set(this.getLastAnswerItem(), "answerFinish", !1),
          (this.replyContent = ""),
          h.Vue.set(this.getLastAnswerItem(), "reply", this.replyContent),
          this.connect();
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
      onQuoteClick: function (e, t, s, n) {
        (this.allQuoteDocs = {
          innerDocs: this.getFactInnerDocs(t) || [],
          outerDocs: this.getFactOuterDocs(t) || [],
          normalDocs: this.getDocs(t) || [],
          isMcpAgentMessage: e,
          dataOriginRef: n,
        }),
          (this.showLinkJumpGuide = !0);
      },
      handleLinkGuideClose: function () {
        this.showLinkJumpGuide = !1;
      },
      onEditVoice: function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        (this.isShowVoiceEdit = t),
          (this.voiceText = e),
          this.$emit("maskShow", !0, "dark");
      },
      onHideVoiceEdit: function () {
        (this.isShowVoiceEdit = !1), this.$emit("maskShow", !1);
      },
      onShowVoiceModal: function (e) {
        var t = this;
        e
          ? this.$emit("maskShow", e, "dark")
          : setTimeout(function () {
              t.isShowVoiceEdit || t.$emit("maskShow", !1);
            }, 250);
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
            (this.historyDataLength = e.dialogs.length),
            (null == (t = e.dialogs) ? void 0 : t.length) &&
              ((this.sessionTimeStart = k.timeFormat(
                e.dialogs[(null == (s = e.dialogs) ? void 0 : s.length) - 1]
                  .answer_time
              )),
              (this.sessionTimeLatest = e.dialogs[0].answer_time));
        }
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
          (this.curSession = this.generateRandomString(128)),
          (this.denyAnswer = !1),
          (this.sessionTime = "");
      },
      onGoToChoosePage: function () {
        this.handleCloseHalfScreenWindow();
      },
      getLastAnswerItem: function () {
        return this.answerList[this.answerList.length - 1];
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
    },
  };
Array ||
  (
    h.resolveComponent("first-guide-item") +
    h.resolveComponent("ai-expert-detail-card") +
    h.resolveComponent("ai-reading-detail-card") +
    h.resolveComponent("question-item") +
    h.resolveComponent("answer-item") +
    h.resolveComponent("emotion-boost-guide") +
    h.resolveComponent("follow-on-item") +
    h.resolveComponent("thirteen-anniversary-task") +
    h.resolveComponent("preset-question-welcome-card") +
    h.resolveComponent("answer-list-view") +
    h.resolveComponent("session-history-loading") +
    h.resolveComponent("InputView") +
    h.resolveComponent("share-answer-invalid") +
    h.resolveComponent("old-permission-dialog") +
    h.resolveComponent("dis-like-select-dialog") +
    h.resolveComponent("Disclaimers") +
    h.resolveComponent("permission-agree-dialog") +
    h.resolveComponent("link-jump-guide") +
    h.resolveComponent("full-screen-feed-back") +
    h.resolveComponent("CommonSelector") +
    h.resolveComponent("ai-model-select-dialog") +
    h.resolveComponent("ai-model-select-guide") +
    h.resolveComponent("question-item-long-press-menu") +
    h.resolveComponent("ThirteenAnniversaryBackPop") +
    h.resolveComponent("InputVoiceEdit")
  )();
var O = h._export_sfc(q, [
  [
    "render",
    function (e, t, s, n, i, o) {
      return h.e(
        { a: o.isAiExpertMode },
        (o.isAiExpertMode || o.isNewsAIReadingMode, {}),
        { b: o.isNewsAIReadingMode, c: !o.isPresetCard },
        o.isPresetCard
          ? {}
          : { d: h.n(n.naviAnimClass), e: n.naviTitleAiModelTriangle },
        {
          f: h.o(function (e) {
            return o.isPresetCard ? null : n.onOpenAiModelSelect();
          }, 2925),
          g: h.o(function () {
            return (
              o.handleCloseHalfScreenWindow &&
              o.handleCloseHalfScreenWindow.apply(o, arguments)
            );
          }, 2926),
          h: h.n(i.isWzqLight || i.isMP ? "light" : ""),
          i: h.n(e.showPrevQuestionButton ? "visible" : "hidden"),
          j: h.o(function () {
            return (
              e.scrollToPreviousQuestion &&
              e.scrollToPreviousQuestion.apply(e, arguments)
            );
          }, 2927),
          k: !o.isPresetCard && o.canShowGuideView,
        },
        !o.isPresetCard && o.canShowGuideView
          ? {
              l: h.o(o.clickNewUserQuestion, 2928),
              m: h.p({
                theme: n.skin,
                defaultQuestionArray: "",
                sourceFrom: s.sourceFrom,
              }),
            }
          : h.e(
              { n: o.isAiExpertMode && s.aiExpert },
              o.isAiExpertMode && s.aiExpert
                ? { o: h.p({ expert: s.aiExpert, detail: n.aiExpertDetail }) }
                : {},
              { p: o.isNewsAIReadingMode },
              o.isNewsAIReadingMode
                ? {
                    q: h.o(o.onShowAiReadingDisclaimer, 2929),
                    r: h.p({ content: s.aiReadingContent }),
                  }
                : {},
              { s: o.isPresetCard && i.answerList && i.answerList.length },
              (o.isPresetCard && i.answerList && i.answerList.length, {}),
              {
                t: h.f(i.answerList, function (t, r, a) {
                  return h.e(
                    {
                      a:
                        !o.isPresetCard &&
                        ((0 === r && i.sessionTimeStart) || t.sessionTime),
                    },
                    !o.isPresetCard &&
                      ((0 === r && i.sessionTimeStart) || t.sessionTime)
                      ? {
                          b: h.t(
                            0 === r && i.sessionTimeStart
                              ? i.sessionTimeStart
                              : t.sessionTime
                          ),
                        }
                      : {},
                    {
                      c: "questionItem_".concat(t.requestId),
                      d: h.o(
                        function (e) {
                          return n.handleQuestionLongPress(
                            r,
                            o.getKeyword(r),
                            t
                          );
                        },
                        2930,
                        t.requestId
                      ),
                      e: "97243180-4-" + a + ",97243180-1",
                      f: h.p({
                        id: "questionItem_".concat(t.requestId),
                        keyWord: o.getKeyword(r),
                      }),
                      g: "answerItem".concat(r),
                      h: h.o(
                        function (e) {
                          return o.showHalfScreenPermissionDialog(!0);
                        },
                        2931,
                        t.requestId
                      ),
                      i: h.o(o.clickZan, 2932, t.requestId),
                      j: h.o(o.clickCai, 2933, t.requestId),
                      k: h.o(o.cancelZan, 2934, t.requestId),
                      l: h.o(o.cancelCai, 2935, t.requestId),
                      m: h.o(o.onShare, 2936, t.requestId),
                      n: h.o(o.onSelectMbti, 2937, t.requestId),
                      o: h.o(o.checkContentAndFollowOn, 2938, t.requestId),
                      p: h.o(o.onRequestPermissionDialog, 2939, t.requestId),
                      q: h.o(o.xianPinChangeModel, 2940, t.requestId),
                      r: h.o(o.onQuoteClick, 2941, t.requestId),
                      s: h.o(o.changeToNewSession, 2942, t.requestId),
                      t: h.o(o.onDisableOuterAutoScroll, 2943, t.requestId),
                      v: "97243180-5-" + a + ",97243180-1",
                      w: h.p({
                        id: "answerItem".concat(r),
                        item: t,
                        outerIndex: r,
                        theme: n.skin,
                        searchfrom: i.searchfrom,
                        curSessionId: i.curSession,
                        isViewShareAnswer: o.isViewShareAnswer,
                        useIncrementalModel: n.useIncrementalModel,
                        mockTradeAbtUser: n.mockTradeAbtUser,
                        defaultAiModel: n.moduleName,
                        aiExpert: o.isAiExpertMode ? s.aiExpert : null,
                      }),
                    },
                    o.isViewShareAnswer
                      ? h.e({ x: !i.isMP }, (i.isMP, {}))
                      : {},
                    {
                      y:
                        i.emotionBoostTargetRequestId &&
                        t.requestId === i.emotionBoostTargetRequestId,
                    },
                    i.emotionBoostTargetRequestId &&
                      t.requestId === i.emotionBoostTargetRequestId
                      ? {
                          z: h.o(
                            function (t) {
                              return e.$emit("toggleAdded");
                            },
                            2944,
                            t.requestId
                          ),
                          A: "97243180-6-" + a + ",97243180-1",
                          B: h.p({
                            theme: n.skin,
                            "stock-code": s.stockCode,
                            "stock-name": s.stockName,
                            "stock-added": s.stockAdded,
                          }),
                        }
                      : {},
                    {
                      C:
                        t.guessObj &&
                        !n.thirteenYearTaskCanShow &&
                        !o.isAiExpertMode,
                    },
                    !t.guessObj || n.thirteenYearTaskCanShow || o.isAiExpertMode
                      ? {}
                      : {
                          D: h.o(o.tapGuessQuestion, 2945, t.requestId),
                          E: h.o(o.tapNewUserGuessQuestion, 2946, t.requestId),
                          F: "97243180-7-" + a + ",97243180-1",
                          G: h.p({ theme: n.skin, guessObj: t.guessObj }),
                        },
                    { H: r === i.answerList.length - 1 },
                    r === i.answerList.length - 1
                      ? {
                          I: h.o(
                            n.handleThirteenYearTaskShowEvent,
                            2947,
                            t.requestId
                          ),
                          J: h.o(
                            n.handleThirteenYearBackPopShowEvent,
                            2948,
                            t.requestId
                          ),
                          K: "97243180-8-" + a + ",97243180-1",
                          L: h.p({ mode: "complete" }),
                        }
                      : {},
                    {
                      M: "aiAnswerBlock".concat(r),
                      N: t.requestId,
                      O: h.n({
                        "answer-item--last": r === i.answerList.length - 1,
                      }),
                    }
                  );
                }),
                v: o.isViewShareAnswer,
                w: h.n(i.isMP ? "answer-item-mp" : ""),
                x: h.s(n.lastAnswerItemStyle),
                y: i.showPresetQuestionCard,
              },
              i.showPresetQuestionCard
                ? {
                    z: h.o(o.handlePresetQuestionClick, 2949),
                    A: h.p({
                      "stock-name": s.stockName,
                      "question-text": i.presetQuestionText,
                      "keyboard-showing": i.keyboardShowing,
                      "keyboard-height": i.keyboardHeightUseInMp,
                      theme: n.skin,
                      "container-height": n.mainContentHeight,
                      "has-history": i.historyDataLength > 0,
                    }),
                  }
                : {},
              {
                B: h.sr("answerlist", "97243180-1"),
                C: h.o(o.contentTouch, 2950),
                D: h.o(o.handleMpScroll, 2951),
                E: h.o(e.handleScrollDirection, 2952),
                F: h.o(e.updateQuestionIndexByScroll, 2953),
                G: h.o(o.onHistoryPinEnd, 2954),
                H: h.p({
                  mainContentHeight: n.mainContentHeight,
                  isReplying: o.isAnswerStreaming,
                }),
              }
            ),
        { I: i.isLoadingHistory },
        i.isLoadingHistory ? { J: h.p({ theme: n.skin }) } : {},
        {
          K: h.n(n.useAppH5 ? "useAppH5" : ""),
          L: h.n(i.isWZQ ? "isWzqH5" : ""),
          M: e.contentListPaddingBottom + "px",
          N: h.o(function () {
            return o.contentTouch && o.contentTouch.apply(o, arguments);
          }, 2955),
          O: e.showBackToBottomButton && !i.keyboardShowing,
        },
        e.showBackToBottomButton && !i.keyboardShowing
          ? h.e({ P: i.isReplying }, (i.isReplying, {}), {
              Q: e.backToBottomButtonBottom + "px",
              R: h.o(function (t) {
                return e.handleBackToBottomClickWrapper(o.scrollToBottomForce);
              }, 2956),
            })
          : {},
        { S: !o.isViewShareAnswer },
        o.isViewShareAnswer
          ? {}
          : h.e(
              { T: !i.isMP },
              i.isMP
                ? {}
                : {
                    U: i.isWZQ ? 1 : "",
                    V: n.useAppH5 ? 1 : "",
                    W: n.isHarmony && n.useAppH5 ? 1 : "",
                    X: i.isiOS ? 1 : "",
                    Y: s.aiHasSafeArea ? "" : 1,
                  },
              {
                Z: h.sr("inputRef", "97243180-11"),
                aa: h.o(o.onSendQuestion, 2957),
                ab: h.o(o.onSendEmpty, 2958),
                ac: h.o(o.onHasInputContent, 2959),
                ad: h.o(n.onInputChangeAiModel, 2960),
                ae: h.o(n.onInputChangeAiThinking, 2961),
                af: h.o(o.keyboardHeightChange, 2962),
                ag: h.o(o.keyboardShowingChange, 2963),
                ah: h.o(o.onInputExpandChange, 2964),
                ai: h.o(o.stopAnswer, 2965),
                aj: h.o(o.onFocus, 2966),
                ak: h.o(n.onChooseModel, 2967),
                al: h.o(o.onEditVoice, 2968),
                am: h.o(n.hideQuestionLongPressMenu, 2969),
                an: h.o(o.onContainerHeightChange, 2970),
                ao: h.p({
                  useAppAsr: n.hasVoiceInput,
                  useH5Asr: !n.isHarmony,
                  useAppH5: n.useAppH5,
                  placeholder: o.getInputPlaceHolderText,
                  isReplying: i.isReplying,
                  denyAnswer: i.denyAnswer,
                  aimodel: n.moduleName,
                  thinking: n.thinking,
                  autofocus: o.shouldAutoFocus,
                  needAnswer: s.needAnswer,
                  requestId: i.curRequestId,
                  sessionId: i.curSession,
                  theme: n.skin,
                  defaultModel: n.moduleName,
                  isFirstLoad: i.isFirstLoad,
                  aiHasSafeArea: s.aiHasSafeArea,
                  isIosOld: n.isIosOld,
                  isHarmony: n.isHarmony,
                  isAndroid: n.isAndroid,
                  keyboardShowing: i.keyboardShowing,
                  isShowVoiceEdit: i.isShowVoiceEdit,
                  isHalfScreen: !0,
                  navTitleHeight: i.navTitleHeight,
                  keyboardHeight: i.keyboardHeightUseInAppH5,
                }),
              }
            ),
        { ap: o.isViewShareAnswer && n.isShareAnswerInvalid },
        (o.isViewShareAnswer && n.isShareAnswerInvalid, {}),
        { aq: i.showOldPermissionDialog },
        i.showOldPermissionDialog
          ? {
              ar: h.o(function (e) {
                return o.showHalfScreenPermissionDialog(!1);
              }, 2971),
              as: h.p({ isMP: i.isMP, isHalfScreen: !0 }),
            }
          : {},
        { at: i.showDisLikeDialog },
        i.showDisLikeDialog
          ? {
              av: h.o(o.cancelFeedback, 2972),
              aw: h.o(o.submitUnlike, 2973),
              ax: h.o(o.submitComplaint, 2974),
              ay: h.p({ theme: n.skin, isMP: i.isMP }),
            }
          : {},
        { az: i.showAiReadingDisclaimer },
        i.showAiReadingDisclaimer
          ? {
              aA: h.o(o.onAiReadingDisclaimerHide, 2975),
              aB: h.p({
                "can-show": i.showAiReadingDisclaimer,
                tips: i.aiReadingDisclaimerTips,
                theme: n.skin,
              }),
            }
          : {},
        { aC: i.showFullScreenPermissionDialog },
        i.showFullScreenPermissionDialog
          ? {
              aD: h.o(o.onAgreeProtocal, 2976),
              aE: h.o(o.onDenyProtocal, 2977),
              aF: h.p({
                theme: n.skin,
                isMP: i.isMP,
                searchfrom: i.searchfrom,
                showFullScreenPermissionDialog:
                  i.showFullScreenPermissionDialog,
                protocalId: i.protocalId,
                privacyResult: i.privacyResult,
                privacyType: i.privacyType,
              }),
            }
          : {},
        {
          aG: h.o(o.handleLinkGuideClose, 2978),
          aH: h.p({
            theme: n.skin,
            "all-quote-docs": i.allQuoteDocs,
            show: i.showLinkJumpGuide,
          }),
          aI: i.showFullScreenFeedback,
        },
        i.showFullScreenFeedback
          ? {
              aJ: h.o(o.closeFullScreenComplaint, 2979),
              aK: h.o(o.submitFullScreenComplaint, 2980),
              aL: h.p({ theme: n.skin, showStatusBar: !1 }),
            }
          : {},
        { aM: !i.isMP },
        i.isMP
          ? {}
          : {
              aN: h.sr("commonSelector", "97243180-19"),
              aO: h.o(o.commonSelectChange, 2981),
              aP: h.p({ skin: n.skin }),
            },
        { aQ: n.showAiModelSelect },
        n.showAiModelSelect
          ? {
              aR: h.o(n.onCloseAiModelSelect, 2982),
              aS: h.o(n.onChooseModel, 2983),
              aT: h.p({
                theme: n.skin,
                scene: "halfscreen",
                moduleName: n.moduleName,
              }),
            }
          : {},
        { aU: n.showAiModelGuide },
        n.showAiModelGuide
          ? {
              aV: h.o(function (e) {
                return (n.showAiModelGuide = !1);
              }, 2984),
              aW: h.p({ theme: n.skin, scene: "halfscreen" }),
            }
          : {},
        { aX: n.questionLongPress && !o.isViewShareAnswer },
        n.questionLongPress && !o.isViewShareAnswer
          ? {
              aY: h.o(n.hideQuestionLongPressMenu, 2985),
              aZ: h.o(n.handleLongPressMenuTap, 2986),
              ba: h.p({
                theme: n.skin,
                isLongPres: n.questionLongPress,
                target: n.targetRect,
                question: n.targetQuestion,
                curRequestId: o.getRequestId(n.longPressPostion),
              }),
            }
          : {},
        { bb: n.thirteenYearBackPopShow },
        n.thirteenYearBackPopShow
          ? {
              bc: h.p({
                searchfrom: i.searchfrom,
                showBackpop: n.thirteenYearBackPopShow,
              }),
            }
          : {},
        { bd: i.isShowVoiceEdit },
        i.isShowVoiceEdit
          ? {
              be: h.o(o.onHideVoiceEdit, 2987),
              bf: h.o(o.onSendQuestion, 2988),
              bg: h.p({
                theme: n.skin,
                voiceText: i.voiceText,
                isMP: i.isMP,
                useAppH5: n.useAppH5,
                isHarmony: n.isHarmony,
                keyboardHeightUseInAppH5: i.keyboardHeightUseInAppH5,
              }),
            }
          : {},
        {
          bh: i.isMP ? 1 : "",
          bi: i.isWZQ ? 1 : "",
          bj: i.IS_ZXG ? 1 : "",
          bk: o.isViewShareAnswer ? 1 : "",
          bl: "black" === n.skin ? 1 : "",
          bm: h.s(n.halfContainerStyle),
        }
      );
    },
  ],
  ["__scopeId", "data-v-97243180"],
]);
wx.createComponent(O);
