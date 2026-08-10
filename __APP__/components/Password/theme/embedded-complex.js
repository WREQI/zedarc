var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var o = require("../../../utils/getPlatform.js"),
  t = require("../../../common/vendor.js"),
  r = require("../../../stores/app/useNavbar.js"),
  n = require("../../../config/enum.js"),
  i = require("../usePassword.js"),
  c = require("../../../utils/index.js"),
  s = {
    components: {
      StCustomTextInput: function () {
        return "../../../common/components/CustomTextInput/index.js";
      },
      Popup: function () {
        return "../../../common/components/Popup/index.js";
      },
      BiometricsProtocol: function () {
        return "./biometrics/BiometricsProtocol.js";
      },
    },
    props: i.props,
    setup: function (s, a) {
      var p = a.emit,
        l = t.getCurrentInstance().proxy,
        u = i.usePassword(s, p),
        m = t.ref(!1),
        d = o.getPlatform(),
        w = d.isInIframe,
        h = d.bizPlatform,
        C = d.isZxg,
        b = r.useNavbarStore(),
        S = e(
          e({}, l.$route.query),
          "mp-weixin" === h ? {} : t.dist.urltools.param.parse()
        ).set_mode,
        f = t.ref("1" == S),
        B = t.computed(function () {
          return Boolean(
            (null == global ? void 0 : global.__embedded__mode) &&
              C &&
              l.showCloseIcon
          );
        });
      return (
        t.onMounted(function () {
          var e,
            o,
            t,
            r = l.$route.path;
          r &&
            c.getIsMpPluginComponent() &&
            (m.value =
              null ==
              (t =
                null ==
                (o =
                  null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin())
                  ? void 0
                  : o.isTabbarPage)
                ? void 0
                : t.call(o, r));
        }),
        e(
          {
            navbarStore: b,
            isPluginShowTabbar: m,
            handleClickOverlay: function () {
              s.showCloseIcon && l.cancel();
            },
            isInIframe: w,
            isSwitchAccount: f,
            E_ACCOUNT_MODE: n.E_ACCOUNT_MODE,
            showBackIcon: B,
            onBack: function () {
              l.showCloseIcon && l.cancel();
            },
          },
          u
        )
      );
    },
  };
Array ||
  (
    t.resolveComponent("BiometricsProtocol") +
    t.resolveComponent("BrokerLogo") +
    t.resolveComponent("st-custom-text-input") +
    t.resolveComponent("popup")
  )(),
  Math;
var a = t._export_sfc(s, [
  [
    "render",
    function (e, o, r, n, i, c) {
      return t.e(
        {
          a:
            e.biometricsCurrentStep === e.BiometricsOpenStep.protocol ||
            e.biometricsCurrentStep === e.BiometricsOpenStep.protocolDetail,
        },
        e.biometricsCurrentStep === e.BiometricsOpenStep.protocol ||
          e.biometricsCurrentStep === e.BiometricsOpenStep.protocolDetail
          ? {
              b: t.o(e.toBiometricsInitStep),
              c: t.o(e.handleBiometricsAgree),
              d: t.o(e.handleShowBiometricsProtocolDetail),
              e: t.o(e.handleHideBiometricsProtocolDetail),
              f: t.p({
                biometricsMode: e.biometricsMode,
                biometricsCurrentStep: e.biometricsCurrentStep,
                biometricsInitStep: e.biometricsInitStep,
              }),
            }
          : t.e(
              {
                g: t.n(n.showBackIcon ? ["icon icon-back"] : ""),
                h: t.o(function () {
                  return n.onBack && n.onBack.apply(n, arguments);
                }),
                i: t.t(e.broker.base.name || "证券公司"),
                j: t.t(e.encodedAccount),
                k: e.showCloseIcon && !n.showBackIcon,
              },
              e.showCloseIcon && !n.showBackIcon
                ? {
                    l: t.o(function () {
                      return e.cancel && e.cancel.apply(e, arguments);
                    }),
                  }
                : e.biometricsCurrentStep === e.BiometricsOpenStep.pwdVerify
                ? {
                    n: t.o(function () {
                      return (
                        e.toBiometricsInitStep &&
                        e.toBiometricsInitStep.apply(e, arguments)
                      );
                    }),
                  }
                : {},
              {
                m: e.biometricsCurrentStep === e.BiometricsOpenStep.pwdVerify,
                o: !e.showLockTips,
              },
              e.showLockTips
                ? t.e(
                    {
                      J: t.t(e.notice),
                      K: t.o(function () {
                        return e.phoneCall && e.phoneCall.apply(e, arguments);
                      }),
                      L: e.showUnlockButton,
                    },
                    e.showUnlockButton
                      ? {
                          M: t.t(e.accountLockConf.buttonName),
                          N: t.o(function (o) {
                            return e.handleClickUnlock({
                              routerName: e.accountLockConf.routerName,
                            });
                          }),
                        }
                      : {}
                  )
                : t.e(
                    {
                      p:
                        e.biometricsCurrentStep ===
                        e.BiometricsOpenStep.pwdVerify,
                    },
                    e.biometricsCurrentStep === e.BiometricsOpenStep.pwdVerify
                      ? { q: t.t(e.biometricsText) }
                      : { r: t.t(e.passwordName || "交易密码") },
                    {
                      s: t.o(e.onComplexPasswordInput),
                      t: t.o(e.handleComplexPasswordComfirmClick),
                      v: t.p({
                        "simple-mode": !0,
                        "keep-focus": !0,
                        embedded: !0,
                        value: e.rawPassword,
                        "max-length": 18,
                        "password-mode": e.isPasswordHide,
                        "valid-symbols": e.validPasswordSymbols,
                      }),
                      w: t.n(
                        e.isPasswordHide ? "icon-eye-close" : "icon-eye-open"
                      ),
                      x: t.o(function () {
                        return (
                          e.handlePasswordHideClick &&
                          e.handlePasswordHideClick.apply(e, arguments)
                        );
                      }),
                      y:
                        e.biometricsCurrentStep ===
                        e.BiometricsOpenStep.openEntry,
                    },
                    e.biometricsCurrentStep === e.BiometricsOpenStep.openEntry
                      ? {
                          z: t.t(e.biometricsText),
                          A: t.o(function () {
                            return (
                              e.handleShowBiometricsProtocol &&
                              e.handleShowBiometricsProtocol.apply(e, arguments)
                            );
                          }),
                        }
                      : {},
                    { B: n.isSwitchAccount },
                    n.isSwitchAccount
                      ? {
                          C: t.t(
                            e.accountMode === n.E_ACCOUNT_MODE.MARGIN
                              ? "普通"
                              : "信用"
                          ),
                          D: t.o(function () {
                            return (
                              e.handleClickSwitchAccount &&
                              e.handleClickSwitchAccount.apply(e, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      E: t.o(function () {
                        return (
                          e.handleClickPwdForgetBtn &&
                          e.handleClickPwdForgetBtn.apply(e, arguments)
                        );
                      }),
                      F: e.showActions,
                      G: t.n(
                        n.isSwitchAccount ||
                          e.biometricsCurrentStep ===
                            e.BiometricsOpenStep.openEntry
                          ? "flex-between"
                          : "flex-end"
                      ),
                      H: e.showErrorWithNotice && e.notice,
                    },
                    e.showErrorWithNotice && e.notice
                      ? { I: t.t(e.notice) }
                      : {}
                  ),
              {
                O: t.n(
                  n.navbarStore.shownav || n.navbarStore.externalNavBar
                    ? "password-component--embedded-complex-navbar"
                    : ""
                ),
                P: t.n(n.isInIframe ? "password-iniframe" : ""),
                Q: t.n(e.simpleMode ? "password-simple" : ""),
                R: t.o(n.handleClickOverlay),
                S: t.p({
                  show: e.check,
                  center: !1,
                  mask: !n.isInIframe && e.showMask,
                  name: "mp-slide-up",
                  position: "bottom",
                  "mask-closable": e.showCloseIcon,
                }),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-27ba13d8"],
]);
wx.createComponent(a);
