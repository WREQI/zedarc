var t = require("../../../../../common/vendor.js"),
  e = require("../utils/StockBridgeWrapper.js"),
  n = {
    name: "FullScreenFeedBack",
    props: {
      theme: { required: !0, type: String },
      showStatusBar: { type: Boolean, default: !0, required: !1 },
    },
    data: function () {
      return { inputFeedBackContent: "", isMP: !0, mKeyboradHeight: 0 };
    },
    computed: {
      submitBgStyle: function () {
        return this.inputFeedBackContent.length > 0
          ? "title-bar-submit-enable"
          : "title-bar-submit-disable";
      },
      feedBackLeftArrow: function () {
        return "white" === this.theme || this.isMP
          ? "https://st.gtimg.com/design/d18176a1101c3fbf2c2fe49ff6d4a989.png"
          : "https://st.gtimg.com/design/8753b8086ffc02d86cc72039b199713f.png";
      },
    },
    created: function () {
      var e = this;
      this.isMP &&
        ((this.mpKeyboradListener = function (t) {
          t && (e.mKeyboradHeight = t.height);
        }),
        t.wx$1.onKeyboardHeightChange &&
          t.wx$1.onKeyboardHeightChange(this.mpKeyboradListener));
    },
    beforeDestroy: function () {
      this.isMP &&
        this.mpKeyboradListener &&
        t.wx$1.offKeyboardHeightChange &&
        t.wx$1.offKeyboardHeightChange(this.mpKeyboradListener);
    },
    methods: {
      mpInputBindFocus: function (t) {
        t && t.detail && (this.mKeyboradHeight = t.detail.height);
      },
      mpInputBindBlur: function () {
        this.mKeyboradHeight = 0;
      },
      mpInputBindKeyboardHeightChange: function (t) {
        t && t.detail && (this.mKeyboradHeight = t.detail.height);
      },
      closeCurDialog: function () {
        this.$emit("close-full-screen-complaint"),
          (this.inputFeedBackContent = "");
      },
      submitContent: function () {
        this.inputFeedBackContent.length > 0 &&
          (this.inputFeedBackContent.length > 1e3
            ? e.StockBridge.toast("最多只能输入1000个文字")
            : this.inputFeedBackContent.length < 5
            ? e.StockBridge.toast("最少输入5个文字")
            : (this.$emit(
                "submit-full-screen-complaint",
                this.inputFeedBackContent
              ),
              (this.inputFeedBackContent = ""),
              e.StockBridge.toast("您的投诉已收到，我们会尽快审核处理")));
      },
    },
  },
  i = t._export_sfc(n, [
    [
      "render",
      function (e, n, i, o, r, a) {
        return t.e(
          { a: i.showStatusBar },
          (i.showStatusBar, {}),
          {
            b: a.feedBackLeftArrow,
            c: t.o(function () {
              return a.closeCurDialog && a.closeCurDialog.apply(a, arguments);
            }, 4786),
            d: !r.isMP,
          },
          r.isMP
            ? {}
            : {
                e: t.n(a.submitBgStyle),
                f: t.o(function () {
                  return a.submitContent && a.submitContent.apply(a, arguments);
                }, 4787),
              },
          { g: !r.isMP },
          r.isMP
            ? {
                j: t.o(function () {
                  return (
                    a.mpInputBindFocus && a.mpInputBindFocus.apply(a, arguments)
                  );
                }, 4789),
                k: t.o(function () {
                  return (
                    a.mpInputBindBlur && a.mpInputBindBlur.apply(a, arguments)
                  );
                }, 4790),
                l: t.o(function () {
                  return (
                    a.mpInputBindKeyboardHeightChange &&
                    a.mpInputBindKeyboardHeightChange.apply(a, arguments)
                  );
                }, 4791),
                m: r.inputFeedBackContent,
                n: t.o(function (t) {
                  return (r.inputFeedBackContent = t.detail.value);
                }, 4792),
                o: t.n(r.inputFeedBackContent.length > 0 ? "enable" : ""),
                p: t.o(function () {
                  return a.submitContent && a.submitContent.apply(a, arguments);
                }, 4793),
                q: "".concat(r.mKeyboradHeight, "px"),
              }
            : {
                h: r.inputFeedBackContent,
                i: t.o(function (t) {
                  return (r.inputFeedBackContent = t.detail.value);
                }, 4788),
              },
          { r: t.n(r.isMP ? "mp" : ""), s: t.n("skin-".concat(i.theme)) }
        );
      },
    ],
    ["__scopeId", "data-v-0c9e7b51"],
  ]);
wx.createComponent(i);
