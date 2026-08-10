require("../../app.js");
var o = require("../../common/vendor.js"),
  e = {
    props: {
      visible: { type: Boolean, default: !1 },
      idKey: { type: String, default: "" },
      protocols: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    methods: {
      handleConfirm: function () {
        this.$emit("confirm"), this.$emit("close");
      },
      handleCancel: function () {
        this.$emit("cancel"), this.$emit("close");
      },
      showProtocol: function (o) {
        this.$emit("view", o);
      },
    },
  };
Array || o.resolveComponent("mp-dialog")();
var t = o._export_sfc(e, [
  [
    "render",
    function (e, t, n, i, r, c) {
      return {
        a: o.f(n.protocols, function (e, t, n) {
          return {
            a: o.t(e.name),
            b: t,
            c: o.o(function (o) {
              return c.showProtocol(e);
            }, t),
          };
        }),
        b: o.o(c.handleConfirm),
        c: o.o(c.handleCancel),
        d: o.p({
          visible: n.visible,
          title: "协议列表",
          "show-cancel-button": !0,
          "cancel-button-text": "返回",
          "confirm-button-text": "已阅读并同意",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-a17be538"],
]);
wx.createComponent(t);
