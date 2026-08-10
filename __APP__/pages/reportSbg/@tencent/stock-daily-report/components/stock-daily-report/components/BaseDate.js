var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "Date",
    props: ["title", "afterReport", "publishTime"],
    computed: {
      time: function () {
        var e,
          t =
            (null == (e = this.publishTime)
              ? void 0
              : e.replaceAll("-", "/")) || "",
          r = new Date(t);
        return { month: r.getMonth() + 1, date: r.getDate() };
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, a, i) {
        return {
          a: e.t(i.time.month),
          b: e.n(n.afterReport ? "after" : ""),
          c: e.t(i.time.date),
        };
      },
    ],
    ["__scopeId", "data-v-b2348d08"],
  ]);
wx.createComponent(r);
