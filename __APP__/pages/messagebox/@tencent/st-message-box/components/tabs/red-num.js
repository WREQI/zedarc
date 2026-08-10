var e = require("../../../../../../common/vendor.js"),
  r = {
    props: { redNum: { type: Number, default: 0 } },
    data: function () {
      return {};
    },
    methods: {},
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (r, t, u, n, d, m) {
        return e.e(
          { a: u.redNum > 0 },
          u.redNum > 0
            ? {
                b: e.t(u.redNum > 99 ? "99+" : u.redNum),
                c: e.n(u.redNum < 10 ? "single-num" : ""),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-01032f17"],
  ]);
wx.createComponent(t);
