var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "AiExpertDetailCard",
    components: {
      ExpertDetailContent: function () {
        return "./ExpertDetailContent.js";
      },
    },
    props: {
      expert: { type: Object, required: !0 },
      detail: {
        type: Object,
        default: function () {
          return { sections: [] };
        },
      },
    },
    emits: ["follow-click"],
  });
Array || e.resolveComponent("expert-detail-content")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, o, i, c) {
      return {
        a: e.o(function (e) {
          return t.$emit("follow-click", e);
        }, 5050),
        b: e.p({ expert: t.expert, detail: t.detail }),
      };
    },
  ],
  ["__scopeId", "data-v-3fb58737"],
]);
wx.createComponent(n);
