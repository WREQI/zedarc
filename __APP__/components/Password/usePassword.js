require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Objectvalues"), require("../../app.js");
var n = require("../../common/vendor.js"),
  r = require("../../utils/crypt/index.js"),
  i = require("../../utils/crypt/state.js"),
  a = require("../../cgi/password.js"),
  c = require("../../common/components/Dialog/index.js"),
  s = require("../../utils/getPlatform.js");
require("../../service/broker.js");
var u = require("../../stores/user/useUserinfo.js"),
  l = require("../../utils/passwd.js"),
  d = require("../../utils/index.js"),
  p = require("../../service/aegis/platform/not-wujie.js"),
  v = require("../../config/enum.js"),
  f = require("./index.js"),
  m = require("../../config/HalfScreenConst.js"),
  h = require("../../stores/app/useMode.js");
require("../../service/sdk/lib/api.js");
var w = require("../../service/sdk/platform/mp-weixin.js"),
  g = require("../../service/stat/mp-weixin.js"),
  x = require("../../adapter/router.js"),
  b = require("../../service/login/mp.js"),
  k = require("../../config/enum/biometrics.js"),
  S = require("./password.type.js"),
  P = require("../../config/broker/11100/index.js"),
  C = {
    check: Boolean,
    isTrade: Boolean,
    showErrorWithNotice: Boolean,
    hideOnFinish: Boolean,
    verifyCGI: String,
    showActions: Boolean,
    noSubmit: Boolean,
    needUpdateSeed: Boolean,
    passwordName: String,
    complexPassword: Boolean,
    showCloseIcon: Boolean,
    showMask: Boolean,
    embeddedMode: Boolean,
    extraInfo: Object,
    dialogContext: Object,
    checkPWDScenes: v.CHECK_PWD_SCENES,
  };
(exports.props = C),
  (exports.usePassword = function () {
    var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      E =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.noop,
      B = s.getPlatform(),
      I = B.bizPlatform,
      _ = B.isMpPlugin,
      D = n.inject("passwordTheme", ""),
      q = u.useUserinfoStore(),
      y = n.storeToRefs(q),
      O = y.userinfo,
      j = y.accountMode,
      M = q.setAccountMode,
      T = q.getUserInfo,
      N = n.get(P.brokerConfig, "hall.accountLockConf", {}),
      L = n.ref(Boolean(!n.isEmpty(N))),
      A = h.useModeStore(),
      R = n.storeToRefs(A),
      U = R.simpleMode,
      H = n.ref(""),
      W = n.ref(""),
      G = n.ref(!1),
      F = n.ref(!0),
      K = n.ref(!1),
      V = n.ref(!1),
      $ = n.ref(!1),
      z = n.ref("zxg" === I),
      J = n.computed(function () {
        var e,
          t,
          o = "";
        return (
          (null == (t = null == (e = O.value) ? void 0 : e.fundaccount)
            ? void 0
            : t.length) >= 4
            ? ((o = O.value.fundaccount),
              (o = ""
                .concat(o.substr(0, 1), "**")
                .concat(o.substr(o.length - 3))))
            : (o = "****"),
          o
        );
      }),
      Y = n.ref(S.BiometricsOpenStep.none),
      Z = n.computed(function () {
        var e;
        return (
          (null == (e = C.extraInfo) ? void 0 : e.biometricsInitStep) ||
          S.BiometricsOpenStep.none
        );
      }),
      Q = n.computed(function () {
        var e;
        return (
          (null == (e = C.extraInfo) ? void 0 : e.biometricsMode) ||
          k.BioAuthMode.none
        );
      }),
      X = n.computed(function () {
        return k.BioAuthModeText[Q.value];
      });
    function ee(e) {
      Y.value = e || S.BiometricsOpenStep.none;
    }
    function te() {
      var e = [f.THEME.FUND, f.THEME.EMBEDDED].includes(
          null == D ? void 0 : D.value
        ),
        t = C.passwordName || (e ? "交易密码" : "密码");
      ($.value = !0), (V.value = !0), (W.value = me(t));
    }
    function oe() {
      ue();
      try {
        p.aegisReporter.reportEvent("event-pwd-input-complete", {
          ext2: Date.now(),
        });
      } catch (e) {}
    }
    function ne() {
      re(!0), E("cancel", { checkPWDScenes: C.checkPWDScenes }), i.setSeed("");
    }
    function re() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      (H.value = ""),
        (W.value = ""),
        (V.value = !1),
        ($.value = !1),
        (F.value = !0),
        E("hide", e, { checkPWDScenes: C.checkPWDScenes });
    }
    n.watch(
      function () {
        return C.extraInfo;
      },
      function (e) {
        e &&
          e.biometricsInitStep &&
          e.biometricsInitStep !== S.BiometricsOpenStep.none &&
          Object.values(S.BiometricsOpenStep).includes(e.biometricsInitStep) &&
          ee(e.biometricsInitStep),
          e && e.externalLockTips && te();
      },
      { immediate: !0 }
    );
    var ie = n.ref(!1);
    function ae() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (ce = o(
        e().mark(function t() {
          var o,
            r,
            i,
            a,
            c,
            s,
            u,
            l = arguments;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((o = l.length > 0 && void 0 !== l[0] ? l[0] : {}),
                      (r = o.routerName),
                      (i = void 0 === r ? "BizPwdReset" : r),
                      ie.value)
                    ) {
                      e.next = 21;
                      break;
                    }
                    if (!n.isEmpty(O.value)) {
                      e.next = 13;
                      break;
                    }
                    return (ie.value = !0), (e.prev = 4), (e.next = 7), T();
                  case 7:
                    e.next = 12;
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(4)),
                      p.aegisReporter.reportEvent("USERINFOFAIL-IN-FORGETPWD", {
                        ext2: e.t0.retcode,
                        ext3:
                          (null == e.t0 ? void 0 : e.t0.retmsg) ||
                          JSON.stringify(e.t0 || {}),
                      });
                  case 12:
                    ie.value = !1;
                  case 13:
                    if (n.isEmpty(O)) {
                      e.next = 20;
                      break;
                    }
                    if (
                      ((s = O.value.fundaccount),
                      re(),
                      E("pwdReset"),
                      (K.value = !0),
                      !_)
                    ) {
                      e.next = 19;
                      break;
                    }
                    if (
                      !(u = d.getCurRouteInfo() || {}).route ||
                      ![
                        "pages/market/pages/NationalDebtDetail",
                        "pages/quote/quote",
                      ].includes(u.route)
                    ) {
                      e.next = 19;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      void setTimeout(function () {
                        var e, t;
                        null == (t = x.router()) ||
                          t.push({
                            name: i,
                            query: {
                              fundaccount: s,
                              returl:
                                null == (e = x.route()) ? void 0 : e.fullPath,
                            },
                          });
                      }, 100)
                    );
                  case 19:
                    null == (c = x.router()) ||
                      c.push({
                        name: i,
                        query: {
                          fundaccount: s,
                          returl: null == (a = x.route()) ? void 0 : a.fullPath,
                        },
                      });
                  case 20:
                    g.stat.click("trade.password.forget_pwd_click");
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[4, 9]]
          );
        })
      )).apply(this, arguments);
    }
    var se = n.ref(!1);
    function ue() {
      return le.apply(this, arguments);
    }
    function le() {
      return (le = o(
        e().mark(function t() {
          var o,
            i,
            a,
            s = arguments;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                      (i = o.verify),
                      (a = void 0 === i ? de : i),
                      (se.value = !0),
                      n.index.showLoading({ title: "加载中", mask: !0 }),
                      (e.prev = 2),
                      (e.t0 = a),
                      (e.next = 6),
                      r.cryptPasswd(H.value, void 0, C.needUpdateSeed)
                    );
                  case 6:
                    (e.t1 = e.sent), (0, e.t0)(e.t1), (e.next = 13);
                    break;
                  case 10:
                    (e.prev = 10),
                      (e.t2 = e.catch(2)),
                      n.index.hideLoading(),
                      (se.value = !1),
                      c.Dialog({
                        context: C.dialogContext,
                        message: e.t2.retmsg,
                      }),
                      (H.value = "");
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[2, 10]]
          );
        })
      )).apply(this, arguments);
    }
    function de(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (pe = o(
        e().mark(function t(o) {
          var r;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (n.index.showLoading({ title: "验证中", mask: !0 }),
                      !C.noSubmit)
                    ) {
                      e.next = 4;
                      break;
                    }
                    ve({
                      encodePwd: o.encodePwd,
                      encodePwdExtra: o.encodePwdExtra || "",
                    }),
                      (e.next = 18);
                    break;
                  case 4:
                    try {
                      p.aegisReporter.reportEvent("event-pwd-verify", {
                        ext2: Date.now(),
                      });
                    } catch (e) {}
                    return (
                      (e.prev = 5),
                      (e.next = 8),
                      a.passwordCgi[C.verifyCGI]({
                        action: 2,
                        psw: o.encodePwd,
                        is_trade: C.isTrade ? "1" : "",
                        cosign_pk: o.pubKey,
                        cosign: o.sign,
                      })
                    );
                  case 8:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 11;
                      break;
                    }
                    e.t0 = {};
                  case 11:
                    ((r = e.t0).encodePwd = o.encodePwd),
                      (r.encodePwdExtra = o.encodePwdExtra || ""),
                      ve(r),
                      n.index.hideLoading(),
                      (e.next = 18);
                    break;
                  case 15:
                    (e.prev = 15),
                      (e.t1 = e.catch(5)),
                      fe(e.t1),
                      n.index.hideLoading();
                  case 18:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[5, 15]]
          );
        })
      )).apply(this, arguments);
    }
    function ve(e) {
      n.index.hideLoading(),
        (se.value = !1),
        (W.value = ""),
        (H.value = ""),
        (V.value = !1),
        E(
          "success",
          t(
            t({}, e || {}),
            {},
            { openBiometricsState: Y.value === S.BiometricsOpenStep.pwdVerify }
          )
        );
    }
    function fe(e) {
      var t, o;
      n.index.hideLoading(),
        (W.value = ""),
        (se.value = !1),
        (H.value = ""),
        (V.value = !1);
      var r = "",
        i = [f.THEME.FUND, f.THEME.EMBEDDED].includes(
          null == D ? void 0 : D.value
        ),
        a = C.passwordName || (i ? "交易密码" : "密码");
      if (51091406 === e.retcode) {
        var s = ""
          .concat(a, "输入错误，再输错")
          .concat(e.rest_num || "有限", "次账户将被锁定");
        (r = i
          ? s
          : ""
              .concat(s, "若有疑问请咨询")
              .concat(O.value.dealername || "", "客服")
              .concat(
                O.value.dealertel ? ":".concat(O.value.dealertel) : "。"
              )),
          C.showErrorWithNotice
            ? (W.value = r)
            : (re(!0),
              c.Dialog({
                context: C.dialogContext,
                message: r,
                showCancelButton: C.showActions,
                confirmButtonText: "重新输入",
                cancelButtonText: "重置密码",
                onConfirm: function () {
                  E("recheck");
                },
                onCancel: function () {
                  ae();
                },
              }));
      } else if ((e.retcode, C.showErrorWithNotice)) {
        var u = !1;
        i &&
          (null ==
          (o = null == (t = P.brokerConfig.trade) ? void 0 : t.passwordLockMsg)
            ? void 0
            : o.length) > 0 &&
          (null == e ? void 0 : e.retmsg) &&
          P.brokerConfig.trade.passwordLockMsg.forEach(function (t) {
            e.retmsg.includes(t) && ((u = !0), te());
          }),
          u ||
            (W.value =
              (null == e ? void 0 : e.retmsg) || "网络繁忙 请稍后再试");
      } else
        re(),
          c.Dialog({
            context: C.dialogContext,
            message: e.retmsg || "网络繁忙 请稍后再试",
          }),
          E("error", e);
    }
    function me(e) {
      var t = "".concat(e).concat(P.brokerConfig.trade.passwordLockTips);
      return L.value
        ? ""
            .concat(t, "\n      通过下列方式可快速解锁：\n      ")
            .concat(N.tips ? N.tips : "")
        : ""
            .concat(t, "\n      如需快速解锁，请在交易日")
            .concat(P.brokerConfig.base.contactTime, "拨打")
            .concat(O.value.dealername || P.brokerConfig.base.name, "客服：")
            .concat(
              O.value.dealertel
                ? "".concat(O.value.dealertel)
                : P.brokerConfig.base.tel,
              "\n      "
            );
    }
    function he() {
      H.value = "";
    }
    n.watch(
      function () {
        return C.check;
      },
      function (e) {
        e || ee(S.BiometricsOpenStep.none),
          setTimeout(function () {
            var t, o, r, i, a;
            ((G.value = e),
            e || ((W.value = ""), (V.value = !1), ($.value = !1)),
            e && (K.value = !1),
            window &&
              (window.__embedded__mode || window.__isInIframe) &&
              !C.complexPassword) &&
              ((a = e
                ? "needInputPassword"
                : K.value
                ? "goPwdReset"
                : "inputPasswordComplete"),
              null == (o = null == (t = w.sdk) ? void 0 : t[a]) ||
                o.call(t, {
                  theme: D.value,
                  hasShowIcon: C.showCloseIcon,
                  height:
                    "needInputPassword" === a
                      ? m.HALF_SCREEN_EMBEDED_PWD_HEIGHT
                      : "",
                }),
              e &&
                (null == (i = null == (r = g.stat) ? void 0 : r.click) ||
                  i.call(
                    r,
                    "trade.embedded.password_show" +
                      ((null == window ? void 0 : window.__embedded__scene)
                        ? ".".concat(window.__embedded__scene)
                        : "")
                  )));
            e
              ? n.index.$emit("password:show")
              : n.index.$emit("password:hide", {
                  checkPWDScenes: C.checkPWDScenes,
                });
          }, 100);
      },
      { immediate: !0 }
    );
    var we,
      ge = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "'",
        '"',
        "=",
        "_",
        "`",
        ":",
        ";",
        "?",
        "~",
        "|",
        "+",
        "-",
        "\\",
        "/",
        "[",
        "]",
        "{",
        "}",
        ",",
        ".",
        "<",
        ">",
      ];
    return {
      broker: P.brokerConfig,
      userinfo: O,
      accountMode: j,
      showLockTips: $,
      showUnlockButton: L,
      accountLockConf: N,
      simpleMode: U,
      rawPassword: H,
      notice: W,
      pending: se,
      showKeyboard: G,
      isPasswordHide: F,
      isGoPwdReset: K,
      showPhoneCall: V,
      isZxg: z,
      encodedAccount: J,
      setAccountMode: M,
      getUserInfo: T,
      validPasswordSymbols: ge,
      phoneCall: function () {
        var e = "".concat(P.brokerConfig.base.tel).replace(/-/g, "");
        w.sdk.makePhoneCall(e), g.stat.click("trade.password.phone_call_click");
      },
      onInput: function (e) {
        (W.value = ""),
          (V.value = !1),
          ($.value = !1),
          (H.value = (H.value + e).slice(0, 6));
      },
      onComplexPasswordInput: function (e) {
        var t;
        (W.value = ""), (V.value = !1);
        var o =
          (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.value) ||
          "";
        l.isValidComplexPassword(o)
          ? (H.value = o)
          : n.nextTick$1(function () {
              H.value = l.fixInvalidComplexPassword(o);
            });
      },
      onDelete: function () {
        H.value = H.value.slice(0, H.value.length - 1);
      },
      complete: oe,
      encryptPassword: ue,
      verifySuccess: ve,
      verifyError: fe,
      cancel: ne,
      hide: re,
      handleClickPwdForgetBtn: ae,
      getLockTips: me,
      handleClickUnlock: function (e) {
        ae({ routerName: e.routerName });
      },
      showErrorTip: function (e) {
        W.value = e;
      },
      handleComplexPasswordComfirmClick: function () {
        l.isValidComplexPassword(H.value, { minlength: 6, maxlength: 18 })
          ? oe()
          : (W.value = "输入".concat(
              C.passwordName || "密码",
              "有误，请重新输入"
            ));
      },
      handlePasswordHideClick: function () {
        F.value = !F.value;
      },
      handleClickSwitchAccount:
        ((we = o(
          e().mark(function t() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (o =
                          j.value === v.E_ACCOUNT_MODE.MARGIN
                            ? v.E_ACCOUNT_MODE.NORMAL
                            : v.E_ACCOUNT_MODE.MARGIN),
                        n.index.showLoading({ title: "切换中" }),
                        (e.next = 5),
                        M({ mode: o })
                      );
                    case 5:
                      return (
                        (e.next = 7),
                        b.login.login(n.H5_MAIN_LOGIN_TYPE.BROKER, "", {
                          set_mode: 1,
                        })
                      );
                    case 7:
                      z && location.reload(), (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t0 = e.catch(0)),
                        n.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 10]]
            );
          })
        )),
        function () {
          return we.apply(this, arguments);
        }),
      biometricsCurrentStep: Y,
      biometricsInitStep: Z,
      BiometricsOpenStep: S.BiometricsOpenStep,
      handleBiometricsAgree: function () {
        ee(S.BiometricsOpenStep.pwdVerify);
      },
      handleShowBiometricsProtocol: function () {
        ee(S.BiometricsOpenStep.protocol),
          he(),
          g.stat.click("trade.password.bio_open");
      },
      handleShowBiometricsProtocolDetail: function () {
        ee(S.BiometricsOpenStep.protocolDetail), he();
      },
      handleHideBiometricsProtocolDetail: function () {
        var e;
        (null == (e = C.extraInfo) ? void 0 : e.biometricsInitStep) ===
        S.BiometricsOpenStep.protocolDetail
          ? ne()
          : ee(S.BiometricsOpenStep.protocol);
      },
      biometricsText: X,
      biometricsMode: Q,
      toBiometricsInitStep: function () {
        var e, t;
        ee(null == (e = C.extraInfo) ? void 0 : e.biometricsInitStep),
          [
            S.BiometricsOpenStep.protocol,
            S.BiometricsOpenStep.protocolDetail,
          ].includes(
            null == (t = C.extraInfo) ? void 0 : t.biometricsInitStep
          ) && ne();
      },
    };
  });
