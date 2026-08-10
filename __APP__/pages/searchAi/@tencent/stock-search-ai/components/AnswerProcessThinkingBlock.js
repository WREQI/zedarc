var e = require("../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "AnswerProcessThinkingBlock",
    components: {
      MarkdownRenderer: function () {
        return "../../stock-ai-markdown/components/markdown-renderer/wrap.js";
      },
    },
    props: {
      step: { type: Object, required: !0 },
      curRequestId: { type: String, default: "" },
      theme: { type: String, required: !0 },
      useIncrementalModel: { type: Boolean, default: !1 },
    },
  });
Array || e.resolveComponent("MarkdownRenderer")();
var r = e._export_sfc(n, [
  [
    "render",
    function (n, r, t, o, c, s) {
      return {
        a: e.p({
          "streaming-debounce": 16,
          content: n.step.content || "",
          "cur-request-id": n.curRequestId,
          theme: n.theme,
          "use-incremental-model": n.useIncrementalModel,
        }),
        b: e.n(n.theme ? "skin-".concat(n.theme) : ""),
      };
    },
  ],
  ["__scopeId", "data-v-88224f90"],
]);
wx.createComponent(r);
