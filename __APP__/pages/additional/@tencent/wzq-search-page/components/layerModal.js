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
      hasBottomBar: { type: Boolean, default: !0 },
      showModalButtons: { type: Boolean, default: !0 },
      showCloseBtn: { type: Boolean, default: !1 },
    },
    data: function () {
      return { app: "mpweapp" };
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
      function (o, n, e, a, r, i) {
        return t.e(
          { a: t.t(e.title), b: e.showCloseBtn },
          e.showCloseBtn
            ? {
                c: t.o(function () {
                  return i.onClose && i.onClose.apply(i, arguments);
                }, 4736),
              }
            : {},
          { d: t.t(e.content), e: e.showModalButtons },
          e.showModalButtons
            ? t.e(
                { f: e.showCancelButton },
                e.showCancelButton
                  ? {
                      g: t.t(e.cancelButtonText),
                      h: t.n(r.app),
                      i: t.o(function () {
                        return i.onCancel && i.onCancel.apply(i, arguments);
                      }, 4737),
                    }
                  : {},
                { j: e.isAgreePrivacyAuthorization },
                e.isAgreePrivacyAuthorization
                  ? {
                      k: t.t(e.confirmButtonText),
                      l: t.n(r.app),
                      m: t.o(function () {
                        return i.onConfirm && i.onConfirm.apply(i, arguments);
                      }, 4738),
                    }
                  : {
                      n: t.t(e.confirmButtonText),
                      o: t.n(r.app),
                      p: t.o(function () {
                        return i.onConfirm && i.onConfirm.apply(i, arguments);
                      }, 4739),
                    }
              )
            : {},
          {
            q: t.n(e.hasBottomBar ? "has-bottom-bar" : ""),
            r: e.visible,
            s: t.n(e.rootClass),
          }
        );
      },
    ],
    ["__scopeId", "data-v-caca944c"],
  ]);
wx.createComponent(n);
