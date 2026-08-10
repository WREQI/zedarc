var o = require("../../../../../../common/vendor.js"),
  n = {
    components: {},
    props: {
      show: Boolean,
      customStyle: String,
      customClass: { type: String, default: "" },
      duration: { type: Number, default: 300 },
      zIndex: { type: Number, default: 100 },
    },
    watch: { show: { handler: function (o) {}, immediate: !0 } },
    beforeDestroy: function () {},
    methods: {
      onClick: function () {
        this.$emit("click");
      },
      noop: function () {},
    },
  },
  e = o._export_sfc(n, [
    [
      "render",
      function (n, e, t, r, c, u) {
        return {
          a: t.show,
          b: o.n(t.customClass),
          c: t.zIndex,
          d: o.o(function () {
            return u.onClick && u.onClick.apply(u, arguments);
          }, 4575),
          e: o.o(function () {
            return u.noop && u.noop.apply(u, arguments);
          }, 4576),
        };
      },
    ],
  ]);
wx.createComponent(e);
