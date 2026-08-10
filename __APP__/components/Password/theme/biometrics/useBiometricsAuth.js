require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  o = require("../../../../stores/user/useUserinfo.js");
require("../../../../service/sdk/lib/api.js");
var i = require("../../../../service/sdk/platform/mp-weixin.js"),
  c = require("../../../../config/enum/biometrics.js"),
  a = require("../../../../service/aegis/platform/not-wujie.js"),
  s = require("../../../../common/components/Dialog/index.js"),
  u = require("./utils.js"),
  l = require("../../../../stores/app/useMode.js"),
  d = require("../../../../utils/getPlatform.js"),
  f = require("../../../../cgi/biometrics.js"),
  m = require("../../../../cgi/types/biometrics.js"),
  p = require("../../../../config/errcode.js"),
  v = require("../../../../service/stat/mp-weixin.js");
require("../../../../config/enum.js");
var h = require("../../../../service/hackLifeTimes/index.js"),
  g = require("../../utils.js"),
  _ = require("../../../../utils/index.js"),
  I = require("../../../../service/aegis/utils.js");
exports.useBiometricsAuth = function (T, B) {
  var A,
    w = null == (A = n.getCurrentInstance()) ? void 0 : A.proxy,
    E = o.useUserinfoStore(),
    O = n.storeToRefs(E).fundaccountMask,
    S = l.useModeStore(),
    b = n.storeToRefs(S).simpleMode,
    x = n.computed(function () {
      var e;
      return !1 !== (null == (e = T.extraInfo) ? void 0 : e.canDownGradeToPwd);
    }),
    R = n.ref(""),
    k = n.computed(function () {
      var e;
      return null == (e = T.extraInfo) ? void 0 : e.biometricsAuthType;
    }),
    M = d.getPlatform(),
    D = M.isZxg,
    P = M.platform,
    y = n.computed(function () {
      return Boolean(
        (null == global ? void 0 : global.__embedded__mode) &&
          D &&
          T.showCloseIcon
      );
    });
  function C(e) {
    return e === c.BioAuthMode.fingerPrint
      ? {
          type: c.BioAuthMode.fingerPrint,
          icon: _.isDarkTheme()
            ? "https://st.gtimg.com/design/3a72113bf57e2c2ef5fd86cc14c2f634.png"
            : "https://st.gtimg.com/design/6515cf19ba2a981462452e31a383e4ee.png",
          title: "指纹登录",
          desc: "点此进行指纹验证",
          name: "指纹ID",
          shortName: "指纹",
        }
      : e === c.BioAuthMode.facial
      ? {
          type: c.BioAuthMode.facial,
          icon: b.value
            ? "https://st.gtimg.com/design/bc05c2d9c809c27516d70e251ed8f771.png"
            : "https://st.gtimg.com/design/d0c668a2a8214a226e8cd56938cad62f.png",
          title: "面容登录",
          desc: "轻触进行面容验证",
          name: "面容ID",
          shortName: "面容",
        }
      : { type: c.BioAuthMode.none, icon: "", title: "", desc: "", name: "" };
  }
  var N = n.computed(function () {
      return C(k.value);
    }),
    L = h.getLifeTimeMethods(),
    q = L.getBiometricsLifeTimeFlag,
    U = L.setBiometricsLifeTimeFlag,
    j = L.injectMethodsToMain;
  function H() {
    return w;
  }
  function F(e) {
    T.check
      ? s.Dialog(e)
      : a.aegisReporter.reportEvent("BIO_AUTH_SHOWDIALOG_HIDE");
  }
  function W(e) {
    B("success", e);
  }
  var G,
    V,
    J = !1;
  function X() {
    G && (clearTimeout(G), (G = null));
  }
  function K() {
    return z.apply(this, arguments);
  }
  function z() {
    return (z = r(
      e().mark(function o() {
        var s, l, d, v, h, _;
        return e().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (!J) {
                    o.next = 2;
                    break;
                  }
                  return o.abrupt("return");
                case 2:
                  if (((J = !0), (h = {}), (o.prev = 4), k.value)) {
                    o.next = 7;
                    break;
                  }
                  throw { retcode: c.BioAuthErrorCode.BIO_AUTH_LACK_AUTHMODE };
                case 7:
                  if (c.SupportBioModes.includes(k.value)) {
                    o.next = 9;
                    break;
                  }
                  throw {
                    retcode: c.BioAuthErrorCode.BIO_AUTH_UNKNOWN_AUTHMODE,
                    authType: k.value,
                  };
                case 9:
                  return (
                    (o.next = 11),
                    i.sdk.checkIsSoterEnrolledInDevice({
                      checkAuthMode: k.value,
                    })
                  );
                case 11:
                  if (null == (_ = o.sent) ? void 0 : _.isEnrolled) {
                    o.next = 14;
                    break;
                  }
                  throw t(
                    { retcode: c.BioAuthErrorCode.BIO_AUTH_NOT_ENROLLED },
                    _ || {}
                  );
                case 14:
                  return (
                    X(),
                    U("hide"),
                    (o.next = 18),
                    (function () {
                      var n = r(
                        e().mark(function r(n) {
                          var o, c;
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    i.sdk.startSoterAuthentication({
                                      requestAuthModes: [n.authType],
                                      challenge: "wzq",
                                    })
                                  );
                                case 2:
                                  if ((o = e.sent) && 0 === o.errcode) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw o || {};
                                case 5:
                                  return (
                                    (c = JSON.parse(o.resultJSON)),
                                    e.abrupt(
                                      "return",
                                      (o = t(
                                        t({}, o),
                                        {},
                                        { deviceId: c.cpu_id }
                                      ))
                                    )
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })()({ authType: k.value }).finally(function () {
                      U("show"),
                        (G = setTimeout(
                          function () {
                            q() &&
                              (U(),
                              a.aegisReporter.reportEvent(
                                "BIO_LIFETIME_FLAG_CLEAR_NOTEXPECT"
                              )),
                              X();
                          },
                          "android" === P ? 200 : 0
                        ));
                    })
                  );
                case 18:
                  if (
                    ((h = o.sent),
                    I.reportEventSafely("BIO_AUTH_FINISH"),
                    !T.noSubmit)
                  ) {
                    o.next = 24;
                    break;
                  }
                  W({ bioResult: h }), (o.next = 27);
                  break;
                case 24:
                  return (
                    n.index.showLoading({ title: "验证中" }),
                    (o.next = 27),
                    (function () {
                      var t = r(
                        e().mark(function t(r) {
                          var n;
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = {
                                      action: m.BIOMETRICS_ACTION.LOGIN,
                                      biometric_type: u.transferBioModeToParams(
                                        r.authMode
                                      ),
                                      json_string: r.resultJSON,
                                      json_signature: r.resultJSONSignature,
                                      biometric_device_id: r.deviceId,
                                    }),
                                    (e.next = 3),
                                    f.biometricsApi.authByBiometrics(n)
                                  );
                                case 3:
                                  W();
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()(h).catch(function (e) {
                      throw t({ errorFrom: "api" }, e || {});
                    })
                  );
                case 27:
                  o.next = 32;
                  break;
                case 29:
                  (o.prev = 29),
                    (o.t0 = o.catch(4)),
                    !(function (e, t) {
                      if (
                        c.BioAuthErrorCode.BIO_AUTH_NOT_ENROLLED ===
                        (null == e ? void 0 : e.retcode)
                      ) {
                        var r;
                        return (
                          (r =
                            "ios" === P
                              ? "请开启“系统设置-"
                                  .concat(
                                    N.value.name,
                                    "与密码”或者“系统设置-微信-"
                                  )
                                  .concat(N.value.name, "”权限")
                              : "请开启“系统设置-生物识别和密码—"
                                  .concat(
                                    N.value.shortName,
                                    "”或者“系统设置-应用和服务-其它权限-查看所有权限-"
                                  )
                                  .concat(N.value.shortName, "认证服务”权限")),
                          void F({
                            context: H(),
                            message: r,
                            cancelButtonText: "我知道了",
                          })
                        );
                      }
                      if (
                        [
                          p.BIOMETRICS_QUERY_TOKEN_FAIL,
                          p.BIOMETRICS_AUTH_EXPIRED,
                          p.BIOMETRICS_CUSTOMER_UNMATCH,
                          p.BIOMETRICS_BROKER_AUTH_EXPIRED,
                          p.BIOMETRICS_DEVICE_UNMATCH,
                          p.BIOMETRICS_PASSWORD_NOVALID,
                        ].includes(+(null == e ? void 0 : e.retcode))
                      )
                        F({
                          context: H(),
                          message:
                            "您可能存在修改交易密码、更换设备/账号或者长时间未登录的情况，需要重新验证交易密码以激活".concat(
                              N.value.name
                            ),
                          onConfirm: function () {
                            $(c.BioDowngradePwdScene.BIO_AUTH_EXPIRED, {
                              lastBiometricsResponse:
                                null == t ? void 0 : t.lastBiometricsResponse,
                            });
                          },
                        });
                      else if (
                        !(function (e) {
                          var t = (null == e ? void 0 : e.errmsg) || "";
                          return (
                            t.includes("取消") ||
                            t.toLowerCase().includes("cancel")
                          );
                        })(e)
                      )
                        if (
                          (function (e) {
                            return (
                              (null == e ? void 0 : e.errmsg) || ""
                            ).includes("freeze");
                          })(e)
                        )
                          F({
                            context: H(),
                            message: "连续失败多次，".concat(
                              N.value.shortName,
                              "暂被冻结。请稍后重试。"
                            ),
                            cancelButtonText: "我知道了",
                          });
                        else if (
                          "api" === (null == e ? void 0 : e.errorFrom) &&
                          g.isShowLockTips(null == e ? void 0 : e.retmsg)
                        )
                          $(c.BioDowngradePwdScene.BIO_PWD_LOCK, {
                            lockTips: null == e ? void 0 : e.retmsg,
                          });
                        else {
                          var n = ""
                            .concat(c.BioErrorTips.AUTH_FAIL)
                            .concat(N.value.name);
                          "api" === (null == e ? void 0 : e.errorFrom) &&
                            e.retmsg &&
                            (null == e ? void 0 : e.retcode) &&
                            ![p.BIOMETRICS_SIGN_VERIFY_FAIL].includes(
                              +e.retcode
                            ) &&
                            (n = e.retmsg),
                            x.value
                              ? F({
                                  context: H(),
                                  message: n,
                                  confirmButtonText: "密码验证",
                                  showCancelButton: !0,
                                  cancelButtonText: "取消",
                                  onConfirm: function () {
                                    $(c.BioDowngradePwdScene.BIO_OTHER_ERROR);
                                  },
                                })
                              : F({
                                  context: H(),
                                  message: n,
                                  cancelButtonText: "我知道了",
                                });
                        }
                    })(o.t0, { lastBiometricsResponse: h }),
                    "api" === (null == o.t0 ? void 0 : o.t0.errorFrom)
                      ? null ==
                          (l =
                            null == (s = a.aegisReporter)
                              ? void 0
                              : s.reportEvent) ||
                        l.call(s, "BIO_AUTH_API_FAIL", {
                          ext4: JSON.stringify(o.t0 || {}),
                        })
                      : null ==
                          (v =
                            null == (d = a.aegisReporter)
                              ? void 0
                              : d.reportEvent) ||
                        v.call(d, "BIO_AUTH_WXAPI_FAIL", {
                          ext4: JSON.stringify(o.t0 || {}),
                        });
                case 32:
                  return (
                    (o.prev = 32), (J = !1), n.index.hideLoading(), o.finish(32)
                  );
                case 35:
                case "end":
                  return o.stop();
              }
          },
          o,
          null,
          [[4, 29, 32, 35]]
        );
      })
    )).apply(this, arguments);
  }
  function Y() {
    V && (clearTimeout(V), (V = null));
  }
  var Q = n.ref(!1);
  function Z() {
    var e = "android" === P ? T.delayDuration || 50 : 0;
    V = setTimeout(function () {
      T.check && T.isWrapperVisible && K(), Y();
    }, e);
  }
  function $(n, o) {
    n === c.BioDowngradePwdScene.BIO_AUTH_EXPIRED
      ? B("downgradeToPwd", {
          downgradeScene: n,
          onPwdSuccess: function (n) {
            var i, c, a;
            ((a = r(
              e().mark(function r(n) {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        f.biometricsApi.biometricsTokenSilenceUpdate(t({}, n));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )),
            function (e) {
              return a.apply(this, arguments);
            })({
              psw: n,
              biometric_type: u.transferBioModeToParams(
                null == (i = null == o ? void 0 : o.lastBiometricsResponse)
                  ? void 0
                  : i.authMode
              ),
              biometric_device_id:
                null == (c = null == o ? void 0 : o.lastBiometricsResponse)
                  ? void 0
                  : c.deviceId,
            });
          },
        })
      : B("downgradeToPwd", t({ downgradeScene: n }, o)),
      v.stat.click("trade.bio.downgrade.".concat(n)),
      I.reportEventSafely("BIO_AUTH_DOWNGRADE", { ext4: n });
  }
  function ee() {
    B("hide", !0, { checkPWDScenes: T.checkPWDScenes }),
      B("cancel", { checkPWDScenes: T.checkPWDScenes });
  }
  return (
    n.watch(
      function () {
        return T.check;
      },
      function (e) {
        e || (s.Dialog.hide({ context: H() }), (Q.value = !1));
      },
      { immediate: !0 }
    ),
    n.watch(
      function () {
        return [T.check, Q.value];
      },
      function () {
        T.check && Q.value && T.isWrapperVisible && Z();
      }
    ),
    n.watch(
      function () {
        return T.isWrapperVisible;
      },
      function (e) {
        var t;
        e &&
          T.check &&
          Q.value &&
          !J &&
          u.isLoginScene(
            null == (t = T.extraInfo) ? void 0 : t.biometricsScene
          ) &&
          Z();
      }
    ),
    n.onBeforeMount(function () {
      j(!0),
        r(
          e().mark(function t() {
            var r;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.t0 = C), (e.next = 3), u.getBiometricsStrategyCache()
                    );
                  case 3:
                    (e.t1 = e.sent),
                      (r = (0, e.t0)(e.t1).icon) && (R.value = r);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
    }),
    n.onUnmounted(function () {
      (J = !1), Y(), X();
    }),
    {
      showBackIcon: y,
      canDownGradeToPwd: x,
      biometricsInfo: N,
      encodedAccount: O,
      bioVerify: K,
      changeToPwdAuth: function () {
        $(c.BioDowngradePwdScene.BIO_MANUAL_SWITCH);
      },
      cancel: ee,
      onBack: function () {
        ee();
      },
      defaultImage: R,
      simpleMode: b,
      readyToBioVerify: function () {
        Q.value = !0;
      },
    }
  );
};
