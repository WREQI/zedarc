require("../../app.js");
var e = require("../../common/vendor.js"),
  o = require("./index.js");
require("../../service/broker.js");
var n = require("../../utils/getPlatform.js"),
  r = require("../../config/broker/11100/index.js"),
  s = {
    name: "Password",
    components: {
      bank: function () {
        return "./theme/bank.js";
      },
      embedded: function () {
        return "./theme/embedded.js";
      },
      embeddedComplex: function () {
        return "./theme/embedded-complex.js";
      },
    },
    props: {
      closeIcon: { type: Boolean, default: !1 },
      mask: { type: Boolean, default: !0 },
      isWrapperVisible: { type: Boolean, default: !0 },
      delayDuration: { type: Number, default: 0 },
    },
    setup: function (s, i) {
      var d,
        a,
        t = i.emit,
        c = e.getCurrentInstance().proxy,
        l = n.getPlatform().isMpPlugin,
        h = e.ref(l ? o.THEME.EMBEDDED : o.THEME.FUND);
      e.provide("passwordTheme", h);
      var u = e.ref(!0),
        f = e.ref(!1),
        p = e.computed(function () {
          return u.value && !f.value;
        });
      e.onBeforeMount(function () {
        e.index.$on("external:changeHideOnFinish", m);
      }),
        e.onBeforeUnmount(function () {
          var o;
          e.index.$off("external:changeHideOnFinish", m),
            null == (o = c.onDestroy) || o.call(c),
            t("destroy");
        });
      var w = e.ref(!1);
      function m(e) {
        var o = e.disable,
          n = e.close;
        (f.value = o), !o && n && (w.value = !1);
      }
      var v = e.ref(!1);
      return {
        checkPWDScenes: e.ref(""),
        check: w,
        disabledHideOnFinish: f,
        theme: h,
        THEME: o.THEME,
        isTrade: e.ref(!1),
        showErrorWithNotice: e.ref(!0),
        showCloseIcon: s.closeIcon,
        showMask: s.mask,
        hideOnFinish: u,
        verifyCGI: e.ref("verify"),
        showActions: e.ref(!1),
        noSubmit: e.ref(!1),
        needUpdateSeed: e.ref(!0),
        passwordName: e.ref(""),
        onSuccess: e.noop,
        onCancel: e.noop,
        onDowngradeToPwd: e.noop,
        onError: e.noop,
        onHide: e.noop,
        onPwdReset: e.noop,
        onDestroy: e.noop,
        initStep: e.ref(1),
        bizType: e.ref(""),
        isReset: e.ref(!1),
        isUseComplex: e.ref(
          (null == (a = null == (d = r.brokerConfig) ? void 0 : d.common)
            ? void 0
            : a.enableComplexPassword) || !1
        ),
        embeddedMode: e.ref(!1),
        dialogContext: e.ref(null),
        autoHide: p,
        extraInfo: {},
        handleHideOnFinish: m,
        handleSuccess: function (e) {
          c.onSuccess(e), p.value && (w.value = !1);
        },
        handleHide: function (e) {
          var o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          !1 !== w.value &&
            ((w.value = !1), e || (c.onHide(o), v.value || t("hide", o)));
        },
        handleRecheck: function () {
          w.value = !0;
        },
        handleCancel: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          c.onCancel(e), v.value || t("cancel", e);
        },
        handleError: function (e) {
          c.onError(e);
        },
        handlePwdReset: function () {
          c.onPwdReset(), t("pwdReset");
        },
        handleDeleteLast: function () {
          var e, o, n;
          null ==
            (n =
              null ==
              (o =
                null == (e = null == c ? void 0 : c.$refs)
                  ? void 0
                  : e.password)
                ? void 0
                : o.onDelete) || n.call(o);
        },
        handleDowngradeToPwd: function (e) {
          var o;
          (w.value = !1), null == (o = c.onDowngradeToPwd) || o.call(c, e);
        },
      };
    },
    expose: [
      "checkPWDScenes",
      "check",
      "theme",
      "isTrade",
      "showErrorWithNotice",
      "hideOnFinish",
      "verifyCGI",
      "showActions",
      "noSubmit",
      "needUpdateSeed",
      "passwordName",
      "onSuccess",
      "onCancel",
      "onHide",
      "onError",
      "onPwdReset",
      "onDestroy",
      "showCloseIcon",
      "extraInfo",
      "initStep",
      "bizType",
      "isReset",
      "onDowngradeToPwd",
      "dialogContext",
      "showErrorTip",
    ],
  };
Array ||
  (
    e.resolveComponent("embedded") +
    e.resolveComponent("embedded-complex") +
    e.resolveComponent("bank")
  )();
var i = e._export_sfc(s, [
  [
    "render",
    function (o, n, r, s, i, d) {
      return e.e(
        { a: s.theme === s.THEME.EMBEDDED },
        s.theme === s.THEME.EMBEDDED
          ? e.e(
              { b: !s.isUseComplex },
              s.isUseComplex
                ? {
                    j: e.sr("password", "cc71a904-1"),
                    k: e.o(s.handleHide),
                    l: e.o(s.handleSuccess),
                    m: e.o(s.handleCancel),
                    n: e.o(s.handleError),
                    o: e.o(s.handlePwdReset),
                    p: e.p({
                      check: s.check,
                      isTrade: s.isTrade,
                      showErrorWithNotice: s.showErrorWithNotice,
                      hideOnFinish: s.hideOnFinish,
                      verifyCGI: s.verifyCGI,
                      showActions: s.showActions,
                      noSubmit: s.noSubmit,
                      needUpdateSeed: s.needUpdateSeed,
                      passwordName: s.passwordName,
                      showCloseIcon: s.showCloseIcon,
                      showMask: s.showMask,
                      checkPWDScenes: s.checkPWDScenes,
                      extraInfo: s.extraInfo,
                      dialogContext: s.dialogContext,
                    }),
                  }
                : {
                    c: e.sr("password", "cc71a904-0"),
                    d: e.o(s.handleHide),
                    e: e.o(s.handleSuccess),
                    f: e.o(s.handleCancel),
                    g: e.o(s.handleError),
                    h: e.o(s.handlePwdReset),
                    i: e.p({
                      check: s.check,
                      isTrade: s.isTrade,
                      showErrorWithNotice: s.showErrorWithNotice,
                      hideOnFinish: s.hideOnFinish,
                      verifyCGI: s.verifyCGI,
                      showActions: s.showActions,
                      noSubmit: s.noSubmit,
                      needUpdateSeed: s.needUpdateSeed,
                      passwordName: s.passwordName,
                      showCloseIcon: s.showCloseIcon,
                      showMask: s.showMask,
                      checkPWDScenes: s.checkPWDScenes,
                      extraInfo: s.extraInfo,
                      dialogContext: s.dialogContext,
                    }),
                  }
            )
          : {},
        { q: s.theme === s.THEME.BANK },
        s.theme === s.THEME.BANK
          ? {
              r: e.sr("password", "cc71a904-2"),
              s: e.o(s.handleHide),
              t: e.o(s.handleSuccess),
              v: e.o(s.handleCancel),
              w: e.o(s.handleError),
              x: e.o(s.handlePwdReset),
              y: e.p({
                check: s.check,
                isTrade: s.isTrade,
                showErrorWithNotice: s.showErrorWithNotice,
                hideOnFinish: s.hideOnFinish,
                verifyCGI: s.verifyCGI,
                showActions: s.showActions,
                noSubmit: s.noSubmit,
                needUpdateSeed: s.needUpdateSeed,
                passwordName: s.passwordName,
                showCloseIcon: s.showCloseIcon,
                showMask: s.showMask,
                extraInfo: s.extraInfo,
                dialogContext: s.dialogContext,
              }),
            }
          : {},
        { z: s.check }
      );
    },
  ],
]);
wx.createComponent(i);
