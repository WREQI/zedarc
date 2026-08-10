var e = require("../../../../../common/vendor.js"),
  r = e.ref(!1),
  t = e.ref(!1);
exports.useUserProtocol = function () {
  function u() {
    s(), n(t.value);
  }
  function s() {
    var u = !0;
    try {
      var s = e.StockBridge.store.protocolStatus;
      "string" == typeof s && (u = "agree" === s);
    } catch (e) {}
    return (t.value = u), t.value && (r.value = !1), u;
  }
  function n(r) {
    try {
      r
        ? e.wx$1.showShareMenu({ menus: ["shareAppMessage", "shareTimeline"] })
        : e.wx$1.hideShareMenu({ menus: ["shareAppMessage", "shareTimeline"] });
    } catch (e) {}
  }
  function o() {
    e.StockBridge.store.unsubscribeProtocolStatus(u);
  }
  return {
    showPrivacyPolicy: r,
    didAgreeUserAgreement: t,
    handleProtocolStatusChange: u,
    checkUserAgreementStatus: s,
    needUserAgreementStatus: function () {
      s() || (r.value = !0);
    },
    checkPrivacyAuth: function () {
      return (r.value = !0), !0;
    },
    updateShareMenu: n,
    subUserAgreementStatus: function () {
      var r = s();
      n(t.value), r || (o(), e.StockBridge.store.subscribeProtocolStatus(u));
    },
    unsubUserAgreementStatus: o,
  };
};
