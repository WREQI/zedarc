var e = require("../../../../../common/vendor.js"),
  r = e._export_sfc({ props: ["cardIndex", "title", "cardTag"] }, [
    [
      "render",
      function (r, a, t, c, d, n) {
        return e.e(
          { a: e.t(t.title), b: t.cardTag },
          t.cardTag ? { c: e.t(t.cardTag) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-40e15c90"],
  ]);
wx.createComponent(r);
