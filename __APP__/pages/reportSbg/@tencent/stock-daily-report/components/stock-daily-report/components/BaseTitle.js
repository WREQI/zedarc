var t = require("../../../../../../../common/vendor.js"),
  e = {
    A股午评: "Comment",
    A股收评: "Comment",
    我的自选股票动态: "Stock",
    资金动向: "Capital",
    题材热点: "Theme",
    热门直播: "Live",
    社区热议: "Discussion",
    今日要闻: "News Flash",
    后市研判: "Report",
    海外市场: "Overseas",
    晨会要点: "keypoint",
    人气热股: "Hot",
    今日通用回购: "National Debt",
  },
  o = {
    name: "BaseTitle",
    props: ["title"],
    data: function () {
      return { GROUP_NAME_CONFIG: e };
    },
  },
  r = t._export_sfc(o, [
    [
      "render",
      function (e, o, r, s, n, a) {
        return {
          a: t.t(r.title.substr(0, 2)),
          b: t.t(r.title.substr(2)),
          c: t.t(n.GROUP_NAME_CONFIG[r.title]),
        };
      },
    ],
    ["__scopeId", "data-v-d402afcd"],
  ]);
wx.createComponent(r);
