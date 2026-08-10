var e = require("../../../../../../../common/vendor.js");
Array ||
  (e.resolveComponent("BaseTitle") + e.resolveComponent("newsTemplate"))();
var t = e._export_sfc(
  {
    props: [
      "detail",
      "subTitle",
      "dailyType",
      "isShowAgspDetail",
      "wzqConfig",
      "dailyid",
    ],
    data: function () {
      return {};
    },
    methods: {
      handleTriggerAgspDetail: function () {
        this.$emit("handleTriggerAgspDetail");
      },
    },
    provide: function () {
      return { isFullTeach: !0 };
    },
    components: {
      BaseTitle: function () {
        return "./BaseTitle.js";
      },
      newsTemplate: function () {
        return "../../../../../../newsCon/@tencent/stock-news-detail/components/newsTemplate/index.js";
      },
    },
  },
  [
    [
      "render",
      function (t, n, i, a, o, s) {
        return e.e(
          {
            a: e.p({ title: "wjfp" === i.dailyType ? "A股收评" : "A股午评" }),
            b: i.subTitle || i.detail.front_agxp.title,
          },
          i.subTitle || i.detail.front_agxp.title
            ? {
                c: e.t(i.subTitle || i.detail.front_agxp.title),
                d: e.o(function () {
                  return (
                    s.handleTriggerAgspDetail &&
                    s.handleTriggerAgspDetail.apply(s, arguments)
                  );
                }, 4497),
              }
            : {},
          {
            e:
              i.detail.front_agxp.contents &&
              i.detail.front_agxp.contents.length > 0 &&
              i.isShowAgspDetail,
          },
          i.detail.front_agxp.contents &&
            i.detail.front_agxp.contents.length > 0 &&
            i.isShowAgspDetail
            ? {
                f: e.sr("agspContent", "56a731b5-1"),
                g: i.isShowAgspDetail ? "" : 1,
                h: e.p({
                  snpContent: i.detail.front_agxp.contents,
                  wzqConfig: i.wzqConfig,
                  newsId: i.dailyid,
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-56a731b5"],
  ]
);
wx.createComponent(t);
