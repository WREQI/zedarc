require("../../../app.js");
var e = require("../../../common/vendor.js"),
  o = {
    name: "SubscribeDialog",
    components: {
      Overlay: function () {
        return "../../../common/components/Overlay/index.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      bgImgSrc: { type: String, default: "" },
      qrcodeSrc: { type: String, default: "" },
    },
    setup: function (o, r) {
      var n = r.emit;
      return {
        bgImg: e.computed(function () {
          return (
            o.bgImgSrc ||
            "https://st.gtimg.com/image/apply/qrcode/bg_pc_guide.png"
          );
        }),
        qrcode: e.computed(function () {
          return (
            o.qrcodeSrc ||
            "https://st.gtimg.com/image/apply/qrcode/pc_subscribed.png"
          );
        }),
        onClose: function () {
          n("close");
        },
      };
    },
  };
Array || e.resolveComponent("Overlay")();
var r = e._export_sfc(o, [
  [
    "render",
    function (o, r, n, t, c, p) {
      return {
        a: e.o(function () {
          return t.onClose && t.onClose.apply(t, arguments);
        }),
        b: t.bgImg,
        c: t.qrcode,
        d: e.p({ show: n.visible }),
      };
    },
  ],
  ["__scopeId", "data-v-01aefb73"],
]);
wx.createComponent(r);
