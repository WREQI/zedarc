var e = require("../../../../../../../common/vendor.js"),
  n = {
    props: {
      navs: {
        type: Array,
        default: function () {
          return [];
        },
      },
      current: { type: Number, default: 0 },
    },
    methods: {
      clickTab: function (e) {
        e !== this.current && this.$emit("change", e);
      },
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, r, c, a, u) {
        return e.e(
          { a: r.navs.length },
          r.navs.length
            ? {
                b: e.f(r.navs, function (n, t, c) {
                  return {
                    a: e.t(n),
                    b: e.n(r.current === t ? "active" : ""),
                    c: t,
                    d: e.o(
                      function (e) {
                        return u.clickTab(t);
                      },
                      2306,
                      t
                    ),
                  };
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a1251f07"],
  ]);
wx.createComponent(t);
