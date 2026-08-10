var t = require("../../../../../common/vendor.js"),
  e = {
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
      theme: { type: String, default: "" },
    },
    data: function () {
      return {};
    },
    computed: {
      app: function () {
        return "lite" === this.theme ? "" : "mpweapp";
      },
      isSingleAuth: function () {
        return (
          (Array.isArray(this.rootClass)
            ? this.rootClass.join(" ")
            : this.rootClass || ""
          ).indexOf("single-auth") > -1
        );
      },
    },
    mounted: function () {
      this.reportTrack({
        busi: "base",
        routeName: "global",
        eventName: this.isSingleAuth
          ? "personal_info_authorization_popup_brow"
          : "privacy_agreement_auth_popup_brow",
        exposure: { selector: "#privacy-agreement-popup", context: this },
      });
    },
    methods: {
      reportTrack: function (e) {
        "function" == typeof t.StockBridge.mtaReport &&
          t.StockBridge.mtaReport(e);
      },
      onCancel: function () {
        this.reportDisagree(), this.$emit("cancel");
      },
      onConfirm: function () {
        this.reportTrack({
          busi: "base",
          routeName: "global",
          eventName: "privacy_agreement_popup_agree_btn_click",
        }),
          this.$emit("confirm");
      },
      onClose: function () {
        this.reportTrack({
          busi: "base",
          routeName: "global",
          eventName: this.isSingleAuth
            ? "personal_info_authorization_popup_close"
            : "privacy_agreement_auth_popup_top_close",
        }),
          this.$emit("close");
      },
      reportDisagree: function () {
        this.reportTrack({
          busi: "base",
          routeName: "global",
          eventName: "privacy_agreement_popup_disagree_btn_close",
        });
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, n, r, a, i) {
        return t.e(
          { a: t.t(n.title), b: n.showCloseBtn },
          n.showCloseBtn
            ? {
                c: t.o(function () {
                  return i.onClose && i.onClose.apply(i, arguments);
                }, 2219),
              }
            : {},
          { d: t.t(n.content), e: n.showModalButtons },
          n.showModalButtons
            ? t.e(
                { f: n.showCancelButton },
                n.showCancelButton
                  ? {
                      g: t.t(n.cancelButtonText),
                      h: t.n(i.app),
                      i: t.o(function () {
                        return i.onCancel && i.onCancel.apply(i, arguments);
                      }, 2220),
                    }
                  : {},
                { j: n.isAgreePrivacyAuthorization },
                n.isAgreePrivacyAuthorization
                  ? {
                      k: t.t(n.confirmButtonText),
                      l: t.n(i.app),
                      m: t.o(function () {
                        return i.onConfirm && i.onConfirm.apply(i, arguments);
                      }, 2221),
                    }
                  : {
                      n: t.t(n.confirmButtonText),
                      o: t.n(i.app),
                      p: t.o(function () {
                        return i.onConfirm && i.onConfirm.apply(i, arguments);
                      }, 2222),
                    }
              )
            : {},
          {
            q: t.n(n.hasBottomBar ? "has-bottom-bar" : ""),
            r: n.visible,
            s: t.n(n.rootClass),
          }
        );
      },
    ],
    ["__scopeId", "data-v-51968791"],
  ]);
wx.createComponent(o);
