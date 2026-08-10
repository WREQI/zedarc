var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "MarkdownRenderWrap",
    components: {
      IncrementalModelView: function () {
        return "./mp.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWFpLW1hcmtkb3duL2NvbXBvbmVudHMvbWFya2Rvd24tcmVuZGVyZXIvbXAudnVl;
        });
      },
    },
    props: {
      useIncrementalModel: { type: Boolean, default: !1 },
      content: { type: String, default: "" },
      useMpHtml: { type: Boolean, default: !1 },
      streamingDebounce: { type: Number, default: 100 },
      mdRuleFn: { type: Function, default: function () {} },
      curRequestId: { required: !1, type: String, default: "" },
      curSessionId: { required: !1, type: String, default: "" },
      subScene: { required: !1, type: String, default: "" },
      theme: { required: !0, type: String },
      position: { required: !0, type: Number },
      enableHrTag: { type: Boolean, default: !1 },
      streamTextAnimation: { type: Boolean, default: !0 },
      streamInitialColor: { type: String, default: "" },
      streamFinalColor: { type: String, default: "currentColor" },
      streamDurationMs: { type: Number, default: 550 },
      streamSettleFallbackMs: { type: Number, default: 1e3 },
      isStreaming: { type: Boolean, default: !1 },
    },
  };
Array || e.resolveComponent("IncrementalModelView")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, a, o, u) {
      return {
        a: e.o(function (e) {
          return t.$emit("linkClick", e);
        }, 5016),
        b: e.o(function (e) {
          return t.$emit("quoteLinkClick", e);
        }, 5017),
        c: e.p({
          streamingDebounce: r.streamingDebounce,
          content: r.content,
          useMpHtml: r.useMpHtml,
          mdRuleFn: r.mdRuleFn,
          curRequestId: r.curRequestId,
          curSessionId: r.curSessionId,
          subScene: r.subScene,
          theme: r.theme,
          position: r.position,
          enableHrTag: r.enableHrTag,
          "stream-text-animation": r.streamTextAnimation,
          "stream-initial-color": r.streamInitialColor,
          "stream-final-color": r.streamFinalColor,
          "stream-duration-ms": r.streamDurationMs,
          "stream-settle-fallback-ms": r.streamSettleFallbackMs,
          "is-streaming": r.isStreaming,
        }),
      };
    },
  ],
]);
wx.createComponent(n);
