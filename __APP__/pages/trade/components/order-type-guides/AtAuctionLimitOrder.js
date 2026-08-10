require("../../../../app.js");
var e = require("../../../../common/vendor.js");
Array ||
  (e.resolveComponent("SectionCard") + e.resolveComponent("GuideLayout"))();
var n = e._export_sfc(
  {
    components: {
      GuideLayout: function () {
        return "../../../../components/FuncGuideBase/GuideLayout.js";
      },
      SectionCard: function () {
        return "../../../../components/FuncGuideBase/SectionCard.js";
      },
    },
  },
  [
    [
      "render",
      function (e, n, o, r, t, u) {
        return {};
      },
    ],
  ]
);
wx.createComponent(n);
