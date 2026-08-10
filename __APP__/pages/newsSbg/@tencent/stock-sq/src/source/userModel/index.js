var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "userModel",
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
    inject: { pageType: { default: "" } },
    props: {
      modelData: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, r, c, o) {
        return e.e(
          {
            a: e.f(n.modelData, function (t, a, n) {
              return { a: a, b: e.n(c.modelMap[t.medal_id]) };
            }),
            b: "tenth" === o.pageType,
          },
          "tenth" === o.pageType ? { c: e.n(o.pageType) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-b0c0ffc8"],
  ]);
wx.createComponent(a);
