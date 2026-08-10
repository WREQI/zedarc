var e = require("../../common/vendor.js"),
  t = {
    provide: function () {
      return {
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
      };
    },
    data: function () {
      return {
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: e.reactive({ value: !0 }),
      };
    },
    created: function () {
      this.checkUserAgreementStatus(), this.subUserAgreementStatus();
    },
    beforeDestroy: function () {
      this.unsubUserAgreementStatus();
    },
    methods: {
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.value || (this.showPrivacyPolicy = !0);
      },
      handleProtocolStatusChange: function () {
        this.checkUserAgreementStatus();
      },
      checkUserAgreementStatus: function () {
        var t = !0;
        try {
          var r = e.StockBridge.store.protocolStatus;
          "string" == typeof r && (t = "agree" === r);
        } catch (r) {}
        return (
          (this.didAgreeUserAgreement.value = t), this.updateShareMenu(t), t
        );
      },
      updateShareMenu: function (t) {
        t
          ? e.wx$1.showShareMenu({
              menus: ["shareAppMessage", "shareTimeline"],
            })
          : e.wx$1.hideShareMenu();
      },
      unsubUserAgreementStatus: function () {
        e.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          e.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
    },
  };
exports.privacy = t;
