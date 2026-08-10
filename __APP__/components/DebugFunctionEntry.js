var n = require("../common/vendor.js"),
  o = {
    components: {
      LayerModal: function () {
        return "./LayerModal/index.js";
      },
    },
    setup: function () {
      var o = n.ref(!1),
        e = "";
      return {
        pendBit: function (n) {
          (e += n).length > 6 && (e = e.slice(1)), (o.value = "......" === e);
        },
        showing: o,
        onCopyOpenId: function () {
          var e = (n.login.getLoginInfo() || {}).qluin;
          n.wx$1.setClipboardData({ data: e }), (o.value = !1);
        },
      };
    },
  };
Array || n.resolveComponent("layer-modal")();
var e = n._export_sfc(o, [
  [
    "render",
    function (o, e, t, r, i, a) {
      return {
        a: n.o(function (n) {
          return r.pendBit(".");
        }, 653),
        b: n.o(function (n) {
          return r.pendBit("-");
        }, 654),
        c: n.o(function () {
          return r.onCopyOpenId && r.onCopyOpenId.apply(r, arguments);
        }, 655),
        d: n.o(function (n) {
          return (r.showing = !1);
        }, 656),
        e: n.p({
          title: "调试功能",
          "show-modal-buttons": !1,
          "show-close-btn": !0,
          visible: r.showing,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-3478a04b"],
]);
wx.createComponent(e);
