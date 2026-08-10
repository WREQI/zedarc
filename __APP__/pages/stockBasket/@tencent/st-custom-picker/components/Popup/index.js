var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "MpPopup",
    components: {
      Overlay: function () {
        return "../Overlay/index.js";
      },
    },
    props: {
      show: Boolean,
      mask: { type: Boolean, default: !0 },
      customClass: { type: String, default: "" },
      position: { type: String, default: "center" },
      transition: { type: String, default: "" },
      maskClosable: { type: Boolean, default: !1 },
      layerZIndex: { type: Number, default: 100 },
      customStyle: { type: String, default: "" },
    },
    methods: {
      onClickOverlay: function () {
        this.maskClosable && this.$emit("clickOverlay");
      },
    },
  };
Array || e.resolveComponent("Overlay")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, n, a, s, r) {
      return e.e(
        { a: n.mask },
        n.mask
          ? {
              b: e.o(r.onClickOverlay, 3920),
              c: e.p({ "z-index": n.layerZIndex, show: n.show }),
            }
          : {},
        {
          d: n.show,
          e: e.n("mp-popup--".concat(n.position)),
          f: e.n(n.customClass),
          g: e.s(n.customStyle),
        }
      );
    },
  ],
]);
wx.createComponent(o);
