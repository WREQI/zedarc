var t = require("../../../../../common/vendor.js"),
  e = require("../utils/StockBridgeWrapper.js"),
  i = {
    name: "PresetQuestionWelcomeCard",
    props: {
      questionText: { type: String, required: !0, default: "" },
      keyboardShowing: { type: Boolean, default: !1 },
      keyboardHeight: { type: Number, default: 0 },
      stockName: { type: String, default: "" },
      theme: { type: String, default: "white" },
      containerHeight: { type: Number, default: 0 },
      hasHistory: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isMP: !0 };
    },
    computed: {
      inputHolderHeight: function () {
        var e = t.wx$1.getWindowInfo
          ? t.wx$1.getWindowInfo().windowWidth / 750
          : 1;
        return Math.round(168 * e);
      },
      containerStyle: function () {
        return this.isMP
          ? {
              height: this.hasHistory
                ? "".concat(this.containerHeight, "px")
                : this.containerHeight - this.inputHolderHeight + "px",
            }
          : {};
      },
      contentStyle: function () {
        return this.isMP && this.keyboardShowing && this.keyboardHeight > 0
          ? {
              bottom: this.hasHistory
                ? "".concat(
                    this.keyboardHeight + 24 + this.inputHolderHeight,
                    "px"
                  )
                : "".concat(this.keyboardHeight + 24, "px"),
              top: "auto",
              transform: "none",
            }
          : {};
      },
    },
    methods: {
      handleQuestionClick: function () {
        e.StockBridge.report("base.ai_search.preset_question_card_click", {
          query: this.questionText,
        }),
          this.$emit("click-preset-question", this.questionText);
      },
    },
  },
  n = t._export_sfc(i, [
    [
      "render",
      function (e, i, n, o, r, s) {
        return {
          a: t.t(n.stockName),
          b: t.t(n.questionText),
          c: t.o(function () {
            return (
              s.handleQuestionClick && s.handleQuestionClick.apply(s, arguments)
            );
          }, 5048),
          d: t.o(function () {
            return (
              s.handleQuestionClick && s.handleQuestionClick.apply(s, arguments)
            );
          }, 5049),
          e: t.n(n.keyboardShowing && !r.isMP ? "keyboard-up" : ""),
          f: t.n(r.isMP ? "mp" : ""),
          g: t.n(r.isMP ? "" : "wzq"),
          h: t.s(s.contentStyle),
          i: t.n("skin-".concat(n.theme)),
          j: t.s(s.containerStyle),
        };
      },
    ],
    ["__scopeId", "data-v-bf714f27"],
  ]);
wx.createComponent(n);
