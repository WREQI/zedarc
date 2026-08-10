var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "UserModel",
    inject: { pageType: { default: "" } },
    props: {
      modelData: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {
        modelMap: {
          article_1: "artical",
          fans_1: "fans",
          live_1: "live",
          activity_1: "activity",
        },
      };
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, r, o, c) {
        return e.e(
          {
            a: e.f(n.modelData, function (t, a, n) {
              return { a: a, b: e.n(o.modelMap[t.medal_id]) };
            }),
            b: "tenth" === c.pageType,
          },
          "tenth" === c.pageType ? { c: e.n(c.pageType) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-4d2f13c6"],
  ]);
wx.createComponent(a);
