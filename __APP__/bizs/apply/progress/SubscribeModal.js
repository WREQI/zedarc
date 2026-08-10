require("../../../app.js"), require("../../../service/broker.js");
var e = require("../../../common/vendor.js"),
  o = {
    components: {
      Overlay: function () {
        return "../../../common/components/Overlay/index.js";
      },
      Popup: function () {
        return "../../../common/components/Popup/index.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      isThirdBankActUser: { type: Boolean, default: !1 },
    },
    setup: function () {
      return { customStyle: ["z-index: 6"].join(";") };
    },
    computed: {
      subscribeQrcode: function () {
        return this.isThirdBankActUser
          ? "https://st.gtimg.com/image/mp-broker/apply/mpopen_subscribe_third_bank_act.png"
          : "https://st.gtimg.com/image/mp-broker/apply/mpopen_subscribe.png";
      },
    },
    methods: {
      onClose: function () {
        this.$emit("close");
      },
    },
  };
Array || (e.resolveComponent("Overlay") + e.resolveComponent("popup"))();
var n = e._export_sfc(o, [
  [
    "render",
    function (o, n, r, s, t, i) {
      return e.e(
        { a: !r.isThirdBankActUser },
        r.isThirdBankActUser
          ? {
              f: e.o(function () {
                return i.onClose && i.onClose.apply(i, arguments);
              }),
              g: i.subscribeQrcode,
              h: e.o(function () {}),
              i: e.p({
                show: r.visible,
                center: !1,
                mask: !0,
                position: "bottom",
                "mask-closable": !1,
                "layer-z-index": 5,
                "custom-style": s.customStyle,
              }),
            }
          : {
              b: e.o(function () {
                return i.onClose && i.onClose.apply(i, arguments);
              }),
              c: i.subscribeQrcode,
              d: e.o(function () {
                return i.onClose && i.onClose.apply(i, arguments);
              }),
              e: e.p({ show: r.visible }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-ff45f1ab"],
]);
wx.createComponent(n);
