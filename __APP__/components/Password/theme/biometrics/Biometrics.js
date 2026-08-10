var e = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../app.js"), require("../../../../service/broker.js");
var o = require("./useBiometricsAuth.js"),
  r = require("../../../../stores/app/useNavbar.js"),
  n = require("../../../../config/enum/biometrics.js"),
  t = require("../../../../common/vendor.js"),
  i = require("../../../../config/broker/10800/index.js"),
  a = {
    components: {
      Popup: function () {
        return "../../../../common/components/Popup/index.js";
      },
      MpDialog: function () {
        return "../../../../common/components/Dialog/Dialog.js";
      },
      PlaceHolder: function () {
        return "./PlaceHolder.js";
      },
    },
    props: {
      check: { type: Boolean, default: !1 },
      showCloseIcon: { type: Boolean, default: !1 },
      showMask: { type: Boolean, default: !0 },
      noSubmit: { type: Boolean, default: !1 },
      isWrapperVisible: { type: Boolean, default: !0 },
      delayDuration: { type: Number, default: 0 },
      extraInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      checkPWDScenes: {
        type: String,
        default: function () {
          return "normal";
        },
      },
    },
    setup: function (t, a) {
      var c = a.emit,
        s = o.useBiometricsAuth(t, c),
        u = r.useNavbarStore();
      return e(
        e({}, s),
        {},
        { broker: i.brokerConfig, navbarStore: u, BioAuthMode: n.BioAuthMode }
      );
    },
  };
Array ||
  (
    t.resolveComponent("BrokerLogo") +
    t.resolveComponent("popup") +
    t.resolveComponent("MpDialog") +
    t.resolveComponent("PlaceHolder")
  )(),
  Math;
var c = t._export_sfc(a, [
  [
    "render",
    function (e, o, r, n, i, a) {
      return t.e(
        {
          a: t.t(n.broker.base.name || "证券公司"),
          b: t.t(e.encodedAccount),
          c: r.showCloseIcon && !e.showBackIcon,
        },
        r.showCloseIcon && !e.showBackIcon
          ? {
              d: t.o(function () {
                return e.cancel && e.cancel.apply(e, arguments);
              }),
            }
          : {},
        { e: e.biometricsInfo.type === n.BioAuthMode.facial },
        e.biometricsInfo.type === n.BioAuthMode.facial
          ? {
              f: e.biometricsInfo.icon,
              g: t.t(e.biometricsInfo.title),
              h: t.t(e.biometricsInfo.desc),
              i: t.o(function () {
                return e.bioVerify && e.bioVerify.apply(e, arguments);
              }),
            }
          : {},
        { j: e.biometricsInfo.type === n.BioAuthMode.fingerPrint },
        e.biometricsInfo.type === n.BioAuthMode.fingerPrint
          ? {
              k: e.biometricsInfo.icon,
              l: t.t(e.biometricsInfo.desc),
              m: t.o(function () {
                return e.bioVerify && e.bioVerify.apply(e, arguments);
              }),
            }
          : {},
        { n: e.canDownGradeToPwd },
        e.canDownGradeToPwd
          ? {
              o: t.o(function () {
                return (
                  e.changeToPwdAuth && e.changeToPwdAuth.apply(e, arguments)
                );
              }),
            }
          : {},
        {
          p: t.n(
            n.navbarStore.shownav || n.navbarStore.externalNavBar
              ? "bio-component--embeded-navbar"
              : ""
          ),
          q: t.n(e.simpleMode ? "bio-simple" : ""),
          r: t.p({
            show: r.check,
            center: !1,
            mask: r.showMask,
            position: "bottom",
          }),
          s: t.p({ id: "mp-dialog" }),
          t: e.defaultImage,
          v: r.check,
        },
        r.check ? { w: t.o(e.readyToBioVerify) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-19f849cc"],
]);
wx.createComponent(c);
