require("../../../app.js");
var e = require("../../vendor.js"),
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
      touchClass: { type: String, default: "" },
      position: { type: String, default: "center" },
      transition: { type: String, default: "" },
      maskClosable: { type: Boolean, default: !1 },
      layerZIndex: { type: Number, default: 100 },
      customStyle: { type: [String, Object], default: "" },
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
    function (t, o, s, a, n, r) {
      return e.e(
        { a: s.mask },
        s.mask
          ? {
              b: e.o(r.onClickOverlay),
              c: e.p({
                "z-index": s.layerZIndex,
                show: s.show,
                "custom-class": s.touchClass,
              }),
            }
          : {},
        {
          d: s.show,
          e: e.n("mp-popup--".concat(s.position)),
          f: e.n(s.customClass),
          g: e.s(s.customStyle),
        }
      );
    },
  ],
]);
wx.createComponent(o);
