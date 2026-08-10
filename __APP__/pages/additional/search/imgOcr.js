var e = require("../../../common/vendor.js"),
  t = e.ref(!1),
  r = e.ref(!1),
  o = {
    components: {
      imgOcr: function () {
        return "../@tencent/st-stock-img-ocr/Index.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LXN0b2NrLWltZy1vY3IvSW5kZXgudnVl;
        });
      },
      PrivacyPolicyModal: function () {
        return "../../indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyModal.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    setup: function () {
      var o = (function () {
          function o() {
            var o = !0;
            try {
              var n = e.StockBridge.store.protocolStatus;
              "string" == typeof n && (o = "agree" === n);
            } catch (e) {}
            return (r.value = o), r.value && (t.value = !1), o;
          }
          return {
            showPrivacyPolicy: t,
            didAgreeUserAgreement: r,
            handleProtocolStatusChange: function () {
              o();
            },
            checkUserAgreementStatus: o,
            needUserAgreementStatus: function () {
              o() || (t.value = !0);
            },
            checkPrivacyAuth: function () {
              return (t.value = !0), !0;
            },
          };
        })(),
        n = o.showPrivacyPolicy,
        c = o.didAgreeUserAgreement,
        i = o.handleProtocolStatusChange,
        a = o.checkUserAgreementStatus,
        s = o.checkPrivacyAuth;
      return (
        e.provide("didAgreeUserAgreement", c),
        e.provide("onCheckUserAgreementStatus", s),
        {
          showPrivacyPolicy: n,
          didAgreeUserAgreement: c,
          handleProtocolStatusChange: i,
          checkUserAgreementStatus: a,
          checkPrivacyAuth: s,
        }
      );
    },
    data: function () {
      return { query: {}, skin: e.wx$1.getStorageSync("user/skin") || "white" };
    },
    onLoad: function (e) {
      this.query = e;
    },
    created: function () {
      this.checkUserAgreementStatus() ||
        (e.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        ),
        e.StockBridge.store.subscribeProtocolStatus(
          this.handleProtocolStatusChange
        ));
    },
    destroyed: function () {
      this.didAgreeUserAgreement ||
        e.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("imgOcr") +
    e.resolveComponent("PrivacyPolicyModal")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, r, o, n, c, i) {
      return {
        a: t.rootFontSize,
        b: c.skin,
        c: e.p({ query: c.query }),
        d: e.o(function (e) {
          return (n.showPrivacyPolicy = e);
        }, 364),
        e: e.p({ value: n.showPrivacyPolicy }),
        f: c.skin,
      };
    },
  ],
  ["__scopeId", "data-v-53a43232"],
]);
wx.createPage(n);
