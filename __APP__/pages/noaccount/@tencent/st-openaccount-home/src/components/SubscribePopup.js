var e = require("../../../../../../common/vendor.js"),
  o = {
    options: { styleIsolation: "shared" },
    components: {
      PopUp: function () {
        return "../../../../../asyncCom/@tencent/stock-ui/mp/mp-popup/index.js";
      },
    },
    props: {
      qrcodeUrl: {
        type: String,
        default: "//st.gtimg.com/image/apply/qrcode/ojt18p00gf162.png",
      },
      subscribePopupShow: { type: Boolean, default: !1 },
    },
    setup: function (o, p) {
      var t = p.emit,
        r = e.inject("stockBridge"),
        c = ("mp" === r.ENV ? { IS_PC: !1 } : e.dist.detect().env).IS_PC;
      return {
        subscribeBg: e.computed(function () {
          return c
            ? "https://st.gtimg.com/image/apply/qrcode/bg_pc_guide.png"
            : "https://st.gtimg.com/image/apply/qrcode/bg_guide_new.png";
        }),
        closePopup: function () {
          t("closePopup");
        },
        stockBridge: r,
        IS_PC: c,
      };
    },
  };
Array || e.resolveComponent("pop-up")();
var p = e._export_sfc(o, [
  [
    "render",
    function (o, p, t, r, c, s) {
      return e.e(
        { a: "mp" !== r.stockBridge.ENV && t.qrcodeUrl },
        "mp" !== r.stockBridge.ENV && t.qrcodeUrl
          ? {
              b: e.o(function () {
                return r.closePopup && r.closePopup.apply(r, arguments);
              }, 2389),
              c: r.subscribeBg,
              d: t.qrcodeUrl,
              e: e.n(r.IS_PC ? "pc" : ""),
              f: e.p({
                show: t.subscribePopupShow,
                mask: !0,
                "mask-closable": !0,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5a6f2bf4"],
]);
wx.createComponent(p);
