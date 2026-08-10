var e = require("../../../../../common/vendor.js"),
  o = {
    components: {
      LayerModal: function () {
        return "./layerModal.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      visible: { type: Boolean, default: !1 },
      reportPrefix: { type: String, default: "" },
    },
    emits: ["close", "confirm"],
    watch: {
      visible: function (e) {
        e &&
          this.hqBridge.report(
            "".concat(this.reportPrefix, ".guide_modal_show")
          );
      },
    },
    methods: {
      onCloseHandle: function () {
        this.$emit("close"),
          this.hqBridge.report(
            "".concat(this.reportPrefix, ".guide_modal_close")
          );
      },
      onConfirmHandle: function () {
        this.$emit("confirm"),
          this.hqBridge.report(
            "".concat(this.reportPrefix, ".guide_modal_confirm")
          );
      },
    },
  };
Array || e.resolveComponent("layer-modal")();
var t = e._export_sfc(o, [
  [
    "render",
    function (o, t, r, i, n, s) {
      return {
        a: e.o(s.onCloseHandle, 1410),
        b: e.o(s.onConfirmHandle, 1411),
        c: e.p({
          title: "如何查看添加的股单?",
          visible: r.visible,
          "show-close-btn": !0,
          "show-cancel-button": !1,
          "root-class": "btn-fill",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-f8ed9daf"],
]);
wx.createComponent(t);
