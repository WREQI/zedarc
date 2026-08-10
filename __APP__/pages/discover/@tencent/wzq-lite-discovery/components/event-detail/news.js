var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    components: {
      newItem: function () {
        return "./news-item.js";
      },
    },
    props: {
      newsList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      reportPrefix: { type: String, default: "" },
    },
    setup: function (e, t) {
      t.emit;
      return {};
    },
  });
Array || e.resolveComponent("newItem")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, s, i, o) {
      return e.e(
        { a: t.newsList && t.newsList.length > 0 },
        t.newsList && t.newsList.length > 0
          ? {
              b: e.f(t.newsList, function (n, r, s) {
                return {
                  a: "news-".concat(n.id, "-").concat(r),
                  b: "630d00ba-0-" + s,
                  c: e.p({
                    item: n,
                    index: r,
                    "is-last": r === t.newsList.length - 1,
                    "report-prefix": t.reportPrefix,
                  }),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-630d00ba"],
]);
wx.createComponent(n);
