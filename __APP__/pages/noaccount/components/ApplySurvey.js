var e = require("../../../common/vendor.js");
Array || e.resolveComponent("st-apply-component")();
var n = e._export_sfc(
  {
    components: {
      StApplyComponent: function () {
        return "../@tencent/st-apply-component/Index.js";
      },
    },
    methods: {
      onPageShow: function () {
        var e, n;
        null ==
          (n = null == (e = this.$refs.surveyRef) ? void 0 : e.onPageShow) ||
          n.call(e);
      },
    },
  },
  [
    [
      "render",
      function (n, o, r, t, s, c) {
        return { a: e.sr("surveyRef", "0ae266cd-0") };
      },
    ],
  ]
);
wx.createComponent(n);
