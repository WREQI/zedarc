var e = require("../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "FundTags",
    props: {
      tags: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
  }),
  r = e._export_sfc(n, [
    [
      "render",
      function (n, r, t, o, a, u) {
        return {
          a: e.f(n.tags, function (n, r, t) {
            return { a: e.t(n), b: r };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-0e27ee48"],
  ]);
wx.createComponent(r);
