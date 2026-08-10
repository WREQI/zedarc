var e = require("../../../../../../../../../common/vendor.js");
Array || e.resolveComponent("RenderTemplate")();
var n = e._export_sfc(
  {
    name: "NewsContentFlash",
    props: ["data", "wzqConfig"],
    components: {
      RenderTemplate: function () {
        return "../../../../newsTemplate/index.js";
      },
    },
  },
  [
    [
      "render",
      function (n, t, o, r, a, s) {
        return {
          a: e.p({
            newsId: o.data.id,
            snpContent: o.data.snpContent,
            wzqConfig: o.wzqConfig,
          }),
        };
      },
    ],
  ]
);
wx.createComponent(n);
