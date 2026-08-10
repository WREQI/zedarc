var e = require("../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "AnswerProcessToolTag",
    props: { step: { type: Object, required: !0 } },
    computed: {
      displayName: function () {
        return this.step.title || this.step.name || "";
      },
    },
  }),
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, s, p) {
        return { a: e.t(t.displayName) };
      },
    ],
    ["__scopeId", "data-v-855f391f"],
  ]);
wx.createComponent(r);
