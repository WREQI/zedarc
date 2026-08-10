var e = require("../utils/StockBridgeWrapper.js"),
  o = require("../../../../../common/vendor.js"),
  n = {
    props: {
      showModal: { type: Boolean, default: !1 },
      showCancelZone: { type: Boolean, default: !1 },
      showTranslateZone: { type: Boolean, default: !1 },
      voiceText: { type: String, default: "" },
      isRecording: { type: Boolean, default: !1 },
      theme: { type: String, default: "white" },
      isReplying: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isLeavingOnActionZone: !1, isLeaving: !1, popAnimClass: "" };
    },
    computed: {
      showPopBubble: function () {
        return (
          this.showCancelZone || this.showTranslateZone || this.isRecording
        );
      },
      popBubbleClass: function () {
        return this.showCancelZone
          ? "cancel"
          : this.showTranslateZone
          ? "translate"
          : "recording";
      },
      waveImgSrc: function () {
        return this.showTranslateZone
          ? "white" === this.theme
            ? "https://st.gtimg.com/design/4ccb30b58cbb0b5b3cd47ad166903e9a.gif"
            : "https://st.gtimg.com/design/794f744ce48ff81ae4c936c2a5f7292c.gif"
          : "white" === this.theme
          ? "https://st.gtimg.com/design/2314e3da1112543aee8a6eee5b7d3fa2.gif"
          : "https://st.gtimg.com/design/8dcf82566ecf9765068409656561143b.gif";
      },
      rootModalCanShow: function () {
        return (
          !!this.showModal ||
          !(!this.isLeaving || this.showModal || this.isReplying)
        );
      },
      rootModalClass: function () {
        return this.isLeaving ? "" : "root-bottom-mask";
      },
      bottomModalAnimClass: function () {
        return this.showModal
          ? "panel-bottom-enter"
          : !this.isLeaving || this.showModal || this.isReplying
          ? ""
          : "panel-bottom-leave";
      },
      isTouchInBottomModal: function () {
        return (
          !this.showCancelZone &&
          !this.showTranslateZone &&
          !this.isLeavingOnActionZone
        );
      },
    },
    watch: {
      isRecording: {
        handler: function (e) {
          e && !this.popAnimClass && (this.popAnimClass = "panel-left-enter");
        },
        immediate: !0,
      },
      showCancelZone: {
        handler: function (e) {
          e && !this.popAnimClass && (this.popAnimClass = "panel-left-enter");
        },
        immediate: !0,
      },
      showTranslateZone: {
        handler: function (e) {
          e && !this.popAnimClass && (this.popAnimClass = "panel-right-enter");
        },
        immediate: !0,
      },
    },
    methods: {
      onShow: function () {
        (this.isLeaving = !1),
          (this.isLeavingOnActionZone = !1),
          e.StockBridge.report("base.ai_search.audio_modal_brow");
      },
      onClose: function () {
        var e = this;
        (this.isLeaving = !0),
          (this.isLeavingOnActionZone =
            this.showCancelZone || this.showTranslateZone),
          setTimeout(function () {
            (e.isLeaving = !1), (e.isLeavingOnActionZone = !1);
          }, 250);
      },
    },
  },
  t = o._export_sfc(n, [
    [
      "render",
      function (e, n, t, s, i, a) {
        return o.e(
          { a: a.rootModalCanShow },
          a.rootModalCanShow
            ? o.e(
                { b: a.showPopBubble },
                a.showPopBubble
                  ? o.e(
                      { c: t.showTranslateZone },
                      t.showTranslateZone ? { d: o.t(t.voiceText || "") } : {},
                      { e: t.showCancelZone },
                      (t.showCancelZone, {}),
                      {
                        f: a.waveImgSrc,
                        g: o.n(a.popBubbleClass),
                        h: o.n(i.popAnimClass),
                      }
                    )
                  : {},
                {
                  i: o.t(t.showCancelZone ? "松手取消" : ""),
                  j: o.n(t.showCancelZone ? "active" : ""),
                  k: o.t(t.showTranslateZone ? "转文字" : ""),
                  l: o.n(t.showTranslateZone ? "active" : ""),
                  m: o.t(a.isTouchInBottomModal ? "松手发送" : ""),
                  n: o.n(a.isTouchInBottomModal ? "" : "light"),
                  o: o.n(a.bottomModalAnimClass),
                  p: o.n("skin-".concat(t.theme)),
                  q: o.n(a.rootModalClass),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b85bd0e7"],
  ]);
wx.createComponent(t);
