var n = require("../../../../../../common/vendor.js"),
  e = {
    components: {},
    props: {
      show: Boolean,
      customStyle: String,
      customClass: { type: String, default: "" },
      duration: { type: Number, default: 300 },
      zIndex: { type: Number, default: 100 },
    },
    watch: { show: { handler: function (n) {}, immediate: !0 } },
    methods: {
      onClick: function () {
        this.$emit("click");
      },
      fn: function () {},
    },
  },
  t = n._export_sfc(e, [
    [
      "render",
      function (e, t, o, c, r, u) {
        return {
          a: o.show,
          b: n.n(o.customClass),
          c: n.o(function () {
            return u.onClick && u.onClick.apply(u, arguments);
          }, 3773),
          d: n.o(function () {
            return u.fn && u.fn.apply(u, arguments);
          }, 3774),
          e: o.zIndex,
        };
      },
    ],
    ["__scopeId", "data-v-3968f1ea"],
  ]);
wx.createComponent(t);
