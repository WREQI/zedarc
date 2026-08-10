var e = require("../../common/vendor.js"),
  n = {
    name: "StockPrivacyDialog",
    components: {
      ClassicPrivacyPolicyModal: function () {
        return "../../pages/indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
    },
    props: { noAuto: { type: Boolean, default: !1 } },
    setup: function () {
      var n = e.useStockPrivacy(),
        o = n.visible,
        t = n.scene,
        a = n.app,
        i = n.popPersonalInfoAuth,
        s = n.updateAnnouncement,
        u = n.onInput,
        p = e.ref(!1),
        c = e.ref(""),
        r = e.computed(function () {
          return p.value && o.value;
        });
      return {
        isPageShow: p,
        pageRoute: c,
        isShow: r,
        scene: t,
        app: a,
        popPersonalInfoAuth: i,
        updateAnnouncement: s,
        onInput: u,
      };
    },
    onPageShow: function () {
      (this.isPageShow = !0),
        this.pageRoute || (this.pageRoute = e.getCurrentPageRoute()),
        e.dismissSceneIfNotOwner(this.pageRoute),
        this.noAuto || e.ensureAutoPrivacyPopup();
    },
    onPageHide: function () {
      (this.isPageShow = !1), e.dismissSceneOnHide();
    },
    onPageUnload: function () {
      e.dismissSceneOnHide();
    },
  };
Array || e.resolveComponent("classic-privacy-policy-modal")();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, a, i, s) {
      return {
        a: e.o(a.onInput, 4),
        b: e.p({
          value: a.isShow,
          scene: a.scene,
          app: a.app,
          "pop-personal-info-auth": a.popPersonalInfoAuth,
          "update-announcement": a.updateAnnouncement,
        }),
        c: a.isShow,
      };
    },
  ],
]);
wx.createComponent(o);
