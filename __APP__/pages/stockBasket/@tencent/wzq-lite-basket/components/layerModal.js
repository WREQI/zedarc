var t = require("../../../../../common/vendor.js"),
  o = {
    props: {
      rootClass: { type: [String, Array], default: "" },
      visible: { type: Boolean, default: !1 },
      title: { type: String, default: "欢迎使用" },
      content: { type: String, default: "" },
      showCancelButton: { type: Boolean, default: !0 },
      cancelButtonText: { type: String, default: "取消" },
      confirmButtonText: { type: String, default: "我知道了" },
      isAgreePrivacyAuthorization: { type: Boolean, default: !1 },
      showModalButtons: { type: Boolean, default: !0 },
      showCloseBtn: { type: Boolean, default: !1 },
    },
    methods: {
      onCancel: function () {
        this.$emit("cancel");
      },
      onConfirm: function () {
        this.$emit("confirm");
      },
      onClose: function () {
        this.$emit("close");
      },
    },
  },
  n = t._export_sfc(o, [
    [
      "render",
      function (o, n, e, i, r, a) {
        return t.e(
          {
            a: t.t(e.title),
            b: t.o(function () {
              return a.onClose && a.onClose.apply(a, arguments);
            }, 2287),
            c: t.t(e.content),
            d: e.showModalButtons,
          },
          e.showModalButtons
            ? t.e(
                { e: e.showCancelButton },
                e.showCancelButton
                  ? {
                      f: t.t(e.cancelButtonText),
                      g: t.o(function () {
                        return a.onCancel && a.onCancel.apply(a, arguments);
                      }, 2288),
                    }
                  : {},
                { h: e.isAgreePrivacyAuthorization },
                e.isAgreePrivacyAuthorization
                  ? {
                      i: t.t(e.confirmButtonText),
                      j: t.o(function () {
                        return a.onConfirm && a.onConfirm.apply(a, arguments);
                      }, 2289),
                    }
                  : {
                      k: t.t(e.confirmButtonText),
                      l: t.o(function () {
                        return a.onConfirm && a.onConfirm.apply(a, arguments);
                      }, 2290),
                    }
              )
            : {},
          { m: e.visible, n: t.n(e.rootClass) }
        );
      },
    ],
    ["__scopeId", "data-v-a4b66dd3"],
  ]);
wx.createComponent(n);
