var t = require("../../common/vendor.js"),
  e = {
    name: "st-tab-bar",
    props: {
      current: { type: [String, Number], required: !0 },
      tabs: {
        type: Array,
        default: function () {
          return [];
        },
      },
      border: Boolean,
      type: {
        type: String,
        default: function () {
          return "slider";
        },
      },
    },
    methods: {
      clickTab: function (t) {
        this.$emit("click", t),
          t != this.currentIndex && this.$emit("change", t);
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, c, o, i) {
        return {
          a: t.f(n.tabs, function (e, r, c) {
            return {
              a: t.t(e),
              b: t.n(n.current === r ? "active" : ""),
              c: r,
              d: t.o(
                function (t) {
                  return i.clickTab(r);
                },
                0,
                r
              ),
            };
          }),
          b: t.n(n.border ? "border-bottom" : ""),
          c: t.n(n.type),
          d: t.n(n.type),
        };
      },
    ],
  ]);
wx.createComponent(r);
