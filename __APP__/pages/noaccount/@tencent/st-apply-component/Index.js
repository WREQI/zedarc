var n = require("../../../../common/vendor.js"),
  e = n.defineComponent({
    name: "StApplyComponent",
    components: {
      Questionnaire: function () {
        return "./components/Questionnaire.js";
      },
    },
    setup: function () {
      return {};
    },
    methods: {
      onPageShow: function () {
        var n, e;
        null ==
          (e =
            null == (n = this.$refs.questionnaire) ? void 0 : n.onPageShow) ||
          e.call(n);
      },
    },
  });
Array || n.resolveComponent("Questionnaire")();
var o = n._export_sfc(e, [
  [
    "render",
    function (e, o, r, t, i, s) {
      return { a: n.sr("questionnaire", "6d96447f-0") };
    },
  ],
]);
wx.createComponent(o);
