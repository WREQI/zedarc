var n = require("../../../common/vendor.js"),
  t = {
    props: {
      modalShow: { type: Boolean, default: !0 },
      content: { type: String, default: "" },
      confirmText: { type: String, default: "确定" },
      cancelText: { type: String, default: "取消" },
    },
    methods: {
      onCancel: function () {
        this.$emit("cancel");
      },
      onConfirm: function () {
        this.$emit("confirm");
      },
    },
  },
  e = n._export_sfc(t, [
    [
      "render",
      function (t, e, o, c, r, a) {
        return {
          a: n.t(t.title),
          b: n.t(o.content),
          c: n.t(o.cancelText),
          d: n.o(function () {
            return a.onCancel && a.onCancel.apply(a, arguments);
          }, 657),
          e: n.t(o.confirmText),
          f: n.o(function () {
            return a.onConfirm && a.onConfirm.apply(a, arguments);
          }, 658),
          g: n.n(o.modalShow ? "show" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-b4eaa1a8"],
  ]);
wx.createComponent(e);
