var o = require("../../common/vendor.js"),
  e = {
    components: {
      Modal: function () {
        return "../Modal/Modal.js";
      },
    },
    setup: function () {
      var e = o.useMpPrivacy(),
        n = e.isShowDialog,
        a = e.protocolName,
        r = e.openPrivacyContract,
        t = e.resolvePending,
        c = e.route,
        i = o.ref(!1);
      return {
        isShow: o.computed(function () {
          return i.value && n.value;
        }),
        isPageShow: i,
        protocolName: a,
        handleProtocolClick: function () {
          o.wx$1.canIUse("openPrivacyContract") && r();
        },
        handlePrivacyConfirm: function () {
          t(!0),
            o.Request.reportMTAData({
              eventName: "base.global.mp_privacy.confirm__".concat(c.value),
            });
        },
        handlePrivacyCancel: function () {
          t(!1),
            o.wx$1.showToast({
              title: "您需同意授权方可继续操作",
              icon: "none",
              duration: 3e3,
            }),
            o.Request.reportMTAData({
              eventName: "base.global.mp_privacy.cancel__".concat(c.value),
            });
        },
      };
    },
    onPageShow: function () {
      this.isPageShow = !0;
    },
    onPageHide: function () {
      this.isPageShow = !1;
    },
  };
Array || o.resolveComponent("modal")();
var n = o._export_sfc(e, [
  [
    "render",
    function (e, n, a, r, t, c) {
      return {
        a: o.t(r.protocolName),
        b: o.o(function () {
          return (
            r.handleProtocolClick && r.handleProtocolClick.apply(r, arguments)
          );
        }, 1),
        c: o.o(function () {
          return (
            r.handlePrivacyCancel && r.handlePrivacyCancel.apply(r, arguments)
          );
        }, 2),
        d: o.o(function () {
          return (
            r.handlePrivacyConfirm && r.handlePrivacyConfirm.apply(r, arguments)
          );
        }, 3),
        e: o.p({ title: "温馨提示", visible: r.isShow }),
      };
    },
  ],
  ["__scopeId", "data-v-5a09f021"],
]);
wx.createComponent(n);
