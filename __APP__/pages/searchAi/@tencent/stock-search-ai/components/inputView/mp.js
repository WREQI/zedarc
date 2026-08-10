var e = require("../../../../../../common/vendor.js"),
  n = {
    components: {
      MPInputView: function () {
        return "./components/MPInputViewAsr.js";
      },
    },
    props: {
      placeholder: { type: String, default: "" },
      isReplying: { type: Boolean, default: !1 },
      denyAnswer: { type: Boolean, default: !1 },
      aimodel: { type: String, default: "deepseek" },
      thinking: { type: Number, default: 1 },
      autofocus: { type: Boolean, default: !1 },
      theme: { type: String, default: "blue" },
      aiHasSafeArea: { type: Boolean, default: !0 },
      defaultModel: { type: String, default: "deepseek" },
      isFirstLoad: { type: Boolean, default: !1 },
      hasFollowOnShown: { type: Boolean, default: !1 },
      showQuickInput: { type: Boolean, default: !1 },
      hasSentQuestion: { type: Boolean, default: !1 },
      quickInputData: {
        type: Object,
        default: function () {
          return null;
        },
      },
      isFromCache: { type: Boolean, default: !1 },
      requestId: { type: String, default: "" },
      sessionId: { type: String, default: "" },
      showSubscripeEntry: { type: Boolean, default: !1 },
      isShowVoiceEdit: { type: Boolean, default: !1 },
      needAnswer: { type: Boolean, default: !0 },
    },
    methods: {
      keyboardShowingChange: function (e) {
        this.$emit("keyboardShowingChange", e);
      },
      keyboardHeightChange: function (e) {
        this.$emit("keyboardHeightChange", e);
      },
      quickQuestionClick: function (e) {
        this.$emit("quickQuestionClick", e);
      },
      onSendQuestion: function (e, n) {
        this.$emit("onSend", e, n);
      },
      onSendEmpty: function () {
        this.$emit("onSendEmpty");
      },
      onHasInputContent: function () {
        this.$emit("onHasInputContent");
      },
      onInputChangeAiModel: function (e) {
        this.$emit("inputChangeAiModel", e);
      },
      onInputChangeAiThinking: function (e) {
        this.$emit("inputChangeAiThinking", e);
      },
      onStopAnswer: function () {
        this.$emit("onStopAnswer");
      },
      onEditVoice: function (e, n) {
        this.$emit("editVoice", e, n);
      },
      onChooseModel: function (e) {
        this.$emit("chooseModel", e);
      },
      hideQuestionLongPressMenu: function () {
        this.$emit("hideMenu");
      },
      onExpandChange: function (e) {
        this.$emit("expandChange", e);
      },
      onContainerHeightChange: function (e) {
        this.$emit("containerHeightChange", e);
      },
      blur: function () {
        var e, n, o;
        null ==
          (o =
            null == (n = null == (e = this.$refs) ? void 0 : e.mpInputRef)
              ? void 0
              : n.blur) || o.call(n);
      },
      collapseTextarea: function () {
        var e, n, o;
        null ==
          (o =
            null == (n = null == (e = this.$refs) ? void 0 : e.mpInputRef)
              ? void 0
              : n.collapseTextarea) || o.call(n);
      },
      keepFocus: function () {
        var e, n, o;
        null ==
          (o =
            null == (n = null == (e = this.$refs) ? void 0 : e.mpInputRef)
              ? void 0
              : n.keepFocus) || o.call(n);
      },
      inputQuestion: function (e) {
        var n, o, t;
        null ==
          (t =
            null == (o = null == (n = this.$refs) ? void 0 : n.mpInputRef)
              ? void 0
              : o.inputQuestion) || t.call(o, e);
      },
      onFocus: function (e) {
        this.$emit("onFocus", e);
      },
    },
  };
Array || e.resolveComponent("MPInputView")();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, i, a, u) {
      return {
        a: e.sr("mpInputRef", "d5ac6aae-0"),
        b: !t.isShowVoiceEdit,
        c: e.o(u.onSendQuestion, 4794),
        d: e.o(u.onSendEmpty, 4795),
        e: e.o(u.onFocus, 4796),
        f: e.o(u.onHasInputContent, 4797),
        g: e.o(u.onInputChangeAiModel, 4798),
        h: e.o(u.onInputChangeAiThinking, 4799),
        i: e.o(u.keyboardShowingChange, 4800),
        j: e.o(u.keyboardHeightChange, 4801),
        k: e.o(u.quickQuestionClick, 4802),
        l: e.o(u.onStopAnswer, 4803),
        m: e.o(u.onEditVoice, 4804),
        n: e.o(u.onChooseModel, 4805),
        o: e.o(u.hideQuestionLongPressMenu, 4806),
        p: e.o(u.onExpandChange, 4807),
        q: e.o(u.onContainerHeightChange, 4808),
        r: e.p({
          placeholder: t.placeholder,
          "is-replying": t.isReplying,
          "deny-answer": t.denyAnswer,
          aimodel: t.aimodel,
          thinking: t.thinking,
          "need-answer": t.needAnswer,
          autofocus: t.autofocus,
          "request-id": t.requestId,
          "session-id": t.sessionId,
          theme: t.theme,
          "default-model": t.defaultModel,
          "is-first-load": t.isFirstLoad,
          "ai-has-safe-area": t.aiHasSafeArea,
          "has-follow-on-shown": t.hasFollowOnShown,
          "show-subscripe-entry": t.showSubscripeEntry,
          "has-sent-question": t.hasSentQuestion,
        }),
      };
    },
  ],
]);
wx.createComponent(o);
