var t = require("../../../../../common/vendor.js");
require("../utils/StockBridgeWrapper.js");
var e = {}.IS_PCWEIXIN,
  n = {
    props: {
      voiceText: { type: String, default: "" },
      theme: { type: String, default: "white" },
      isMP: { type: Boolean, default: !1 },
      useAppH5: { type: Boolean, default: !1 },
      keyboardHeightUseInAppH5: { type: Number, default: 0 },
      isHarmony: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        inputContent: "",
        inputBottom: -1,
        bodyContainerClass: "",
        h5ResizeTimer: null,
        keyboardShowing: !1,
      };
    },
    computed: {
      waveImgSrcSmall: function () {
        return "white" === this.theme
          ? "https://st.gtimg.com/design/4ccb30b58cbb0b5b3cd47ad166903e9a.gif"
          : "https://st.gtimg.com/design/794f744ce48ff81ae4c936c2a5f7292c.gif";
      },
      bodyContainerStyle: function () {
        if (this.isHarmony) return {};
        var t = this.useAppH5
          ? this.keyboardHeightUseInAppH5
          : this.inputBottom;
        return t <= 0 ? {} : { paddingBottom: "".concat(t + 24, "px") };
      },
    },
    watch: {
      voiceText: {
        handler: function (t) {
          this.inputContent = t;
        },
        immediate: !0,
      },
    },
    created: function () {
      var e = this;
      Object.defineProperty(this, "toJSON", {
        value: function () {
          return "InputVoiceEdit";
        },
        enumerable: !1,
      }),
        this.isMP &&
          void 0 !== t.wx$1 &&
          ((this.mpKeyboradListener = function (t) {
            t && (e.inputBottom = t.height);
          }),
          t.wx$1.onKeyboardHeightChange &&
            t.wx$1.onKeyboardHeightChange(this.mpKeyboradListener)),
        setTimeout(function () {
          (e.isMP || e.useAppH5) && (e.bodyContainerClass = "with-transition");
        }, 500);
    },
    mounted: function () {
      var t = this;
      this.isMP ||
        this.$nextTick(function () {
          t.useAppH5 ? t.keepFocus() : t.requestFocus();
        });
    },
    beforeDestroy: function () {
      this.focusTimer && clearTimeout(this.focusTimer),
        this.isMP &&
          void 0 !== t.wx$1 &&
          this.mpKeyboradListener &&
          t.wx$1.offKeyboardHeightChange &&
          t.wx$1.offKeyboardHeightChange(this.mpKeyboradListener),
        this.isMP ||
          this.useAppH5 ||
          "undefined" == typeof window ||
          (window.visualViewport &&
            window.visualViewport.removeEventListener(
              "resize",
              this.handleVisualViewportChange
            )),
        this.h5ResizeTimer && clearTimeout(this.h5ResizeTimer),
        clearTimeout(this.voiceRecordTimer);
    },
    methods: {
      handleBlur: function () {
        window.visualViewport &&
          window.visualViewport.removeEventListener(
            "resize",
            this.handleVisualViewportChange
          ),
          (this.inputBottom = 0),
          (this.keyboardShowing = !1);
      },
      requestFocus: function () {
        var n = this;
        this.denyAnswer ||
          ((this.keyboardShowing = !0),
          (this.inputBottom = 600),
          t.nextTick$1(function () {
            e
              ? n.handleVisualViewportChange()
              : (n.$refs.realInputContainer &&
                  ((n.$refs.realInputContainer.style.opacity = "0"),
                  (n.$refs.cancelZoneBtnWrapper.style.opacity = "0"),
                  (n.$refs.confirmZoneBtnWrapper.style.opacity = "0")),
                window.visualViewport &&
                  window.visualViewport.addEventListener(
                    "resize",
                    n.handleVisualViewportChange
                  )),
              n.$refs.inputRef && n.$refs.inputRef.focus();
          }));
      },
      mpInputBindFocus: function (t) {
        t && t.detail && (this.inputBottom = t.detail.height);
      },
      mpInputBindBlur: function () {
        this.inputBottom = 0;
      },
      mpInputBindKeyboardHeightChange: function (t) {
        t && t.detail && (this.inputBottom = t.detail.height);
      },
      handleVisualViewportChange: function () {
        var t = window.visualViewport.height,
          e = window.innerHeight - t;
        (this.$refs.realInputContainer.style.opacity = "1"),
          (this.$refs.cancelZoneBtnWrapper.style.opacity = "1"),
          (this.$refs.confirmZoneBtnWrapper.style.opacity = "1"),
          (this.inputBottom = e > 150 ? e : 0);
      },
      onCancelClick: function () {
        this.$emit("onVoiceEditFinish");
      },
      onSendClick: function () {
        this.inputContent && this.$emit("onSendQuestion", this.inputContent),
          this.$emit("onVoiceEditFinish");
      },
      handleTouchMove: function (t) {
        this.useAppH5 || this.isMP || t.preventDefault();
      },
      stopDefaultEvents: function (t) {
        t.stopPropagation(), t.preventDefault();
      },
      handleTouchStart: function (t) {
        if (!this.useAppH5 && !this.isMP)
          if (e) {
            var n = t.clientX,
              i = t.clientY;
            if (this.isPointInElement(n, i, this.$refs.confirmZoneBtnWrapper))
              this.onSendClick(), this.stopDefaultEvents(t);
            else if (
              this.isPointInElement(n, i, this.$refs.cancelZoneBtnWrapper)
            )
              this.onCancelClick(), this.stopDefaultEvents(t);
            else if (this.isPointInElement(n, i, this.$refs.inputRef)) return;
          } else if (t.touches && t.touches.length > 0) {
            var o = t.touches[0],
              s = o.clientX,
              r = o.clientY;
            if (this.isPointInElement(s, r, this.$refs.confirmZoneBtnWrapper))
              this.onSendClick(), this.stopDefaultEvents(t);
            else if (
              this.isPointInElement(s, r, this.$refs.cancelZoneBtnWrapper)
            )
              this.onCancelClick(), this.stopDefaultEvents(t);
            else if (this.isPointInElement(s, r, this.$refs.inputRef)) return;
          }
      },
      keepFocus: function () {
        this.$refs.inputRef && this.$refs.inputRef.focus();
      },
      isPointInElement: function (t, e, n) {
        if (!n) return !1;
        var i = n.getBoundingClientRect();
        return t >= i.left && t <= i.right && e >= i.top && e <= i.bottom;
      },
    },
  },
  i = t._export_sfc(n, [
    [
      "render",
      function (e, n, i, o, s, r) {
        return t.e(
          { a: !s.keyboardShowing && !i.isMP && !i.useAppH5 },
          s.keyboardShowing || i.isMP || i.useAppH5
            ? t.e(
                { e: i.isMP },
                i.isMP
                  ? {
                      f: t.o(function () {
                        return (
                          r.mpInputBindFocus &&
                          r.mpInputBindFocus.apply(r, arguments)
                        );
                      }, 4810),
                      g: t.o(function () {
                        return (
                          r.mpInputBindBlur &&
                          r.mpInputBindBlur.apply(r, arguments)
                        );
                      }, 4811),
                      h: t.o(function () {
                        return (
                          r.mpInputBindKeyboardHeightChange &&
                          r.mpInputBindKeyboardHeightChange.apply(r, arguments)
                        );
                      }, 4812),
                      i: t.o(function () {
                        return (
                          r.onSendClick && r.onSendClick.apply(r, arguments)
                        );
                      }, 4813),
                      j: s.inputContent,
                      k: t.o(function (t) {
                        return (s.inputContent = t.detail.value);
                      }, 4814),
                    }
                  : {
                      l: t.n(i.useAppH5 ? "voice-text-edit-h5" : ""),
                      m: t.o(function () {
                        return r.handleBlur && r.handleBlur.apply(r, arguments);
                      }, 4815),
                      n: t.o(function () {
                        return (
                          r.onSendClick && r.onSendClick.apply(r, arguments)
                        );
                      }, 4816),
                      o: s.inputContent,
                      p: t.o(function (t) {
                        return (s.inputContent = t.detail.value);
                      }, 4817),
                    },
                { q: r.waveImgSrcSmall }
              )
            : {
                b: t.t(s.inputContent),
                c: r.waveImgSrcSmall,
                d: t.o(function () {
                  return r.requestFocus && r.requestFocus.apply(r, arguments);
                }, 4809),
              },
          {
            r: t.o(function () {
              return r.onCancelClick && r.onCancelClick.apply(r, arguments);
            }, 4818),
            s: t.o(function () {
              return r.onSendClick && r.onSendClick.apply(r, arguments);
            }, 4819),
            t: t.n(s.bodyContainerClass),
            v: t.s(r.bodyContainerStyle),
            w: t.n("skin-".concat(i.theme)),
            x: t.o(function () {
              return r.handleTouchMove && r.handleTouchMove.apply(r, arguments);
            }, 4820),
            y: t.o(function () {
              return (
                r.handleTouchStart && r.handleTouchStart.apply(r, arguments)
              );
            }, 4821),
          }
        );
      },
    ],
    ["__scopeId", "data-v-0491b8bb"],
  ]);
wx.createComponent(i);
