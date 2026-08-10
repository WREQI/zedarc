var e = require("../../../../../../common/vendor.js"),
  o = {
    name: "MpPopup",
    components: {
      Overlay: function () {
        return "../overlay/index.js";
      },
    },
    props: {
      show: Boolean,
      mask: { type: Boolean, default: !0 },
      customClass: { type: String, default: "" },
      position: { type: String, default: "center" },
      transition: { type: String, default: "" },
      maskClosable: { type: Boolean, default: !1 },
    },
    methods: {
      onClickOverlay: function () {
        this.maskClosable && this.$emit("clickOverlay");
      },
    },
  };
Array || e.resolveComponent("Overlay")();
var t = e._export_sfc(o, [
  [
    "render",
    function (o, t, n, a, s, r) {
      return e.e(
        { a: n.mask },
        n.mask
          ? { b: e.o(r.onClickOverlay, 3010), c: e.p({ show: n.show }) }
          : {},
        {
          d: n.show,
          e: e.n("mp-popup--".concat(n.position)),
          f: e.n(n.customClass),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9a20e48e"],
]);
wx.createComponent(t);
