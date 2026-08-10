var e = require("../../../../../common/vendor.js"),
  t = {
    props: {
      list: {
        type: Array,
        require: !0,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {};
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {},
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, c, u) {
        return {
          a: e.f(n.list, function (t, r, n) {
            return { a: e.t(t.desc || t.calendar), b: e.t(t.date || ""), c: r };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-deaef585"],
  ]);
wx.createComponent(r);
