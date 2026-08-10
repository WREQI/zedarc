require("../../../app.js");
var t = require("../../vendor.js"),
  e = {
    components: {},
    emits: ["click"],
    props: {
      show: Boolean,
      customStyle: String,
      customClass: { type: String, default: "" },
      duration: { type: Number, default: 300 },
      zIndex: { type: Number, default: 100 },
    },
    computed: {
      mergedStyle: function () {
        return this.customStyle
          ? "z-index: ".concat(this.zIndex, "; ").concat(this.customStyle)
          : "z-index: ".concat(this.zIndex, ";");
      },
    },
    watch: { show: { handler: function (t) {}, immediate: !0 } },
    beforeUnmount: function () {},
    methods: {
      onClick: function () {
        this.$emit("click");
      },
      noop: function () {},
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, c, i, r) {
        return {
          a: o.show,
          b: t.n(o.customClass),
          c: t.s(r.mergedStyle),
          d: t.o(function () {
            return r.onClick && r.onClick.apply(r, arguments);
          }),
          e: t.o(function () {
            return r.noop && r.noop.apply(r, arguments);
          }),
        };
      },
    ],
  ]);
wx.createComponent(n);
