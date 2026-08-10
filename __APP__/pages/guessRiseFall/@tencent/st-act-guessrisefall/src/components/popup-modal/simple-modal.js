var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "SimpleModal",
    components: {
      BaseModal: function () {
        return "./base-modal.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      type: { type: String, default: "info" },
      title: { type: String, default: "" },
      content: { type: String, default: "" },
      buttonText: { type: String, default: "我知道了" },
      zIndex: { type: Number, default: 101 },
      showClose: { type: Boolean, default: !0 },
      closePosition: { type: String, default: "outer" },
      iconType: { type: String, default: "" },
      qrcodeUrl: {
        type: String,
        default:
          "https://st.gtimg.com/design/e5004113c3746b573959568f0f1202c2.png",
      },
      highlightText: { type: String, default: "" },
      closeBuriedPoint: { type: String, default: "" },
      buttonBuriedPoint: { type: String, default: "" },
      options: {
        type: Object,
        default: function () {
          return null;
        },
      },
      isNewuser: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        isVisible: this.visible,
        currentType: this.type,
        currentTitle: this.title,
        currentContent: this.content,
        currentButtonText: this.buttonText,
        currentIconType: this.iconType,
        currentQrcodeUrl: this.qrcodeUrl,
        currentHighlightText: this.highlightText,
        countdownTimer: null,
        currCountdown: 0,
      };
    },
    computed: {
      exceptionTitle: function () {
        var t, e;
        return null != (e = null == (t = this.options) ? void 0 : t.title)
          ? e
          : "";
      },
      exceptionHelpStatus: function () {
        var t;
        return 1 === (null == (t = this.options) ? void 0 : t.helpstatus);
      },
      exceptionContent: function () {
        var t, e;
        return null != (e = null == (t = this.options) ? void 0 : t.content)
          ? e
          : "";
      },
      exceptionTips: function () {
        var t, e;
        return null != (e = null == (t = this.options) ? void 0 : t.tips)
          ? e
          : "";
      },
      exceptionButtonText: function () {
        var t, e, n;
        return null !=
          (n =
            null == (e = null == (t = this.options) ? void 0 : t.button)
              ? void 0
              : e.text)
          ? n
          : "我知道了";
      },
      exceptionCountdown: function () {
        var t, e, n;
        return null !=
          (n =
            null == (e = null == (t = this.options) ? void 0 : t.button)
              ? void 0
              : e.countdown)
          ? n
          : 0;
      },
      exceptionSuccessLogo: function () {
        var t, e;
        return null != (e = null == (t = this.options) ? void 0 : t.logo) && e;
      },
    },
    watch: {
      visible: function (t) {
        this.isVisible = t;
      },
      type: function (t) {
        this.currentType = t;
      },
      title: function (t) {
        this.currentTitle = t;
      },
      content: function (t) {
        this.currentContent = t;
      },
      buttonText: function (t) {
        this.currentButtonText = t;
      },
      iconType: function (t) {
        this.currentIconType = t;
      },
      qrcodeUrl: function (t) {
        this.currentQrcodeUrl = t;
      },
      highlightText: function (t) {
        this.currentHighlightText = t;
      },
      exceptionCountdown: {
        handler: function (t) {
          t > 0 && this.startCountdown(t);
        },
        immediate: !0,
      },
    },
    beforeDestroy: function () {
      this.stopCountdown();
    },
    methods: {
      handleVisibleChange: function (t) {
        (this.isVisible = t), this.$emit("update:visible", t);
      },
      handleClose: function () {
        var e, n;
        if ("exception" === this.currentType)
          return (
            this.stopCountdown(),
            this.exceptionHelpStatus
              ? ((this.isVisible = !1), this.$emit("update:visible", !1))
              : this.handleExceptionCallback(),
            (null == (n = null == (e = this.options) ? void 0 : e.close)
              ? void 0
              : n.callback) && this.options.close.callback(),
            void this.$emit("close")
          );
        this.closeBuriedPoint &&
          t.StockBridge.report("yy.czdupgrade.un_lottie_modal_close.click", {
            yy_public_str1: this.closeBuriedPoint,
          }),
          (this.isVisible = !1),
          this.$emit("update:visible", !1),
          this.$emit("close"),
          this.$emit("cancel");
      },
      handleButtonClick: function () {
        this.buttonBuriedPoint &&
          t.StockBridge.report("yy.czdupgrade.un_lottie_modal_btn.click", {
            yy_public_str1: this.buttonBuriedPoint,
          }),
          (this.isVisible = !1),
          this.$emit("update:visible", !1),
          this.$emit("confirm"),
          this.$emit("next");
      },
      open: function (t) {
        t &&
          (t.type && (this.currentType = t.type),
          void 0 !== t.title && (this.currentTitle = t.title),
          void 0 !== t.content && (this.currentContent = t.content),
          void 0 !== t.buttonText && (this.currentButtonText = t.buttonText),
          void 0 !== t.iconType && (this.currentIconType = t.iconType),
          void 0 !== t.qrcodeUrl && (this.currentQrcodeUrl = t.qrcodeUrl),
          void 0 !== t.highlightText &&
            (this.currentHighlightText = t.highlightText)),
          (this.isVisible = !0),
          this.$emit("update:visible", !0);
      },
      close: function () {
        this.handleClose();
      },
      startCountdown: function (t) {
        var e = this;
        this.stopCountdown(),
          (this.currCountdown = t),
          (this.countdownTimer = setInterval(function () {
            (e.currCountdown -= 1),
              e.currCountdown <= 0 &&
                (e.stopCountdown(), e.handleExceptionCallback());
          }, 1e3));
      },
      stopCountdown: function () {
        this.countdownTimer &&
          (clearInterval(this.countdownTimer), (this.countdownTimer = null));
      },
      handleExceptionCallback: function () {
        this.stopCountdown(),
          this.isNewuser ||
            t.StockBridge.report("yy.czdlanew.guest_gotoactivity_click"),
          t.index.redirectTo({
            url: "/pages/guessRiseFall/main?stat_data=Imn58p00r5001",
          }),
          (this.isVisible = !1),
          this.$emit("update:visible", !1);
      },
      handleExceptionButtonClick: function () {
        this.handleExceptionCallback();
      },
    },
  };
Array || t.resolveComponent("BaseModal")();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, i, o, r, c) {
      return t.e(
        { a: "info" === r.currentType },
        "info" === r.currentType
          ? {
              b: t.t(r.currentTitle),
              c: t.t(r.currentContent),
              d: t.t(r.currentButtonText),
              e: t.o(function () {
                return (
                  c.handleButtonClick && c.handleButtonClick.apply(c, arguments)
                );
              }, 3823),
            }
          : "ordinary" === r.currentType
          ? {
              g: t.t(r.currentTitle),
              h: r.currentContent,
              i: t.t(r.currentButtonText),
              j: t.o(function () {
                return (
                  c.handleButtonClick && c.handleButtonClick.apply(c, arguments)
                );
              }, 3824),
            }
          : "error" === r.currentType || "success" === r.currentType
          ? t.e(
              { l: r.currentIconType },
              r.currentIconType
                ? { m: t.n("simple-modal__icon--" + r.currentIconType) }
                : {},
              { n: r.currentTitle },
              r.currentTitle ? { o: t.t(r.currentTitle) } : {},
              { p: r.currentContent },
              r.currentContent ? { q: r.currentContent } : {},
              {
                r: t.t(r.currentButtonText),
                s: t.o(function () {
                  return (
                    c.handleButtonClick &&
                    c.handleButtonClick.apply(c, arguments)
                  );
                }, 3825),
              }
            )
          : "qrcode" === r.currentType
          ? t.e(
              {
                v: t.t(r.currentTitle || "助力成功"),
                w: t.t(r.currentContent),
                x: r.currentHighlightText,
              },
              r.currentHighlightText ? { y: t.t(r.currentHighlightText) } : {},
              { z: r.currentQrcodeUrl }
            )
          : "notice" === r.currentType
          ? { B: t.t(r.currentContent) }
          : "exception" === r.currentType
          ? t.e(
              { D: t.t(c.exceptionTitle), E: c.exceptionHelpStatus },
              c.exceptionHelpStatus
                ? { F: c.exceptionContent }
                : t.e(
                    {
                      G: Array.isArray(c.exceptionContent)
                        ? c.exceptionContent[0]
                        : c.exceptionContent,
                      H:
                        Array.isArray(c.exceptionContent) &&
                        c.exceptionContent[1],
                    },
                    Array.isArray(c.exceptionContent) && c.exceptionContent[1]
                      ? { I: c.exceptionContent[1] }
                      : {}
                  ),
              { J: c.exceptionTips },
              c.exceptionTips ? { K: t.t(c.exceptionTips) } : {},
              {
                L: t.t(c.exceptionButtonText),
                M: c.exceptionCountdown && r.currCountdown,
              },
              c.exceptionCountdown && r.currCountdown
                ? { N: t.t(r.currCountdown) }
                : {},
              {
                O: t.o(function () {
                  return (
                    c.handleExceptionButtonClick &&
                    c.handleExceptionButtonClick.apply(c, arguments)
                  );
                }, 3826),
                P: c.exceptionSuccessLogo ? 1 : "",
              }
            )
          : {},
        {
          f: "ordinary" === r.currentType,
          k: "error" === r.currentType || "success" === r.currentType,
          t: "qrcode" === r.currentType,
          A: "notice" === r.currentType,
          C: "exception" === r.currentType,
          Q: t.o(c.handleVisibleChange, 3827),
          R: t.o(c.handleClose, 3828),
          S: t.p({
            visible: r.isVisible,
            "z-index": i.zIndex,
            "show-close": i.showClose,
            "close-position": i.closePosition,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-57c5a3d3"],
]);
wx.createComponent(n);
