var e = require("../../../../../../common/vendor.js"),
  o = require("../../../../hqPage_plugin_gen_assets.js"),
  t = {
    data: function () {
      return {};
    },
    methods: {
      gotoTutorialPage: function () {
        e.StockRouter.routeTo({
          name: "informationDetail",
          query: {
            id: "SN20220629170316804d2480",
            articleStyle: "fullTeach",
            anchorTitle: "板块分析",
            zxtype: 1,
          },
        }),
          e.StockBridge.report("hq.choose_hq.plate.goto_toujiao_page");
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, a, n, i, u) {
        return {
          a: o._imports_0,
          b: e.o(function () {
            return u.gotoTutorialPage && u.gotoTutorialPage.apply(u, arguments);
          }, 4591),
        };
      },
    ],
    ["__scopeId", "data-v-01251dab"],
  ]);
wx.createComponent(r);
