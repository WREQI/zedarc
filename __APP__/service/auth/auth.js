require("../../@babel/runtime/helpers/Arrayincludes"),
  require("../../@babel/runtime/helpers/Objectvalues");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("./auth.type.js"),
  n = require("../../components/Password/index.js"),
  s = require("../../components/Password/theme/biometrics/utils.js"),
  i = require("../aegis/platform/not-wujie.js"),
  c = require("./utils.js"),
  a = require("../../components/Password/password.type.js"),
  u = require("../../config/enum/biometrics.js"),
  l = require("./counter.js");
function p(e) {
  return {
    close: function () {
      var r;
      null == (r = null == e ? void 0 : e.close) || r.call(e);
    },
    showErrorTips: function (r) {
      var t;
      null == (t = null == e ? void 0 : e.showErrorTips) || t.call(e, r);
    },
  };
}
exports.Auth = (function () {
  var d = t(
    e().mark(function t(d) {
      var b, m, w, f, v, h, g, S, x, P, y, T, B, O, j;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((g = (d || {}).biometricsScene),
                  (e.prev = 1),
                  (S =
                    !Object.values(o.BiometricsScene).includes(g) ||
                    !s.canUseBiometrics() ||
                    l.isCountOver()),
                  (x = S || !0),
                  S ||
                    null ==
                      (m =
                        null == (b = i.aegisReporter)
                          ? void 0
                          : b.reportEvent) ||
                    m.call(b, "BIO_AUTH_LACK_CREATER"),
                  !x)
                ) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", n.Password(c.getPasswordOptions(d)));
              case 5:
                return (
                  (function (e) {
                    try {
                      var r = [
                          "theme",
                          "context",
                          "dialogContext",
                          "selector",
                          "biometricsScene",
                          "showCloseIcon",
                          "showErrorWithNotice",
                          "needUpdateSeed",
                          "isTrade",
                          "onSuccess",
                          "onCancel",
                          "onError",
                        ],
                        t = Object.keys(e || {}),
                        o = [];
                      t.forEach(function (e) {
                        r.includes(e) || o.push(e);
                      }),
                        o && o.length;
                    } catch (e) {}
                  })(d),
                  (P = (void 0)()),
                  (e.next = 9),
                  P.initBiometricsBaseInfoByUserinfo()
                );
              case 9:
                if (P.getLoginType() !== o.LoginType.Password) {
                  e.next = 13;
                  break;
                }
                return (
                  (y = c.getPasswordOptions(d)),
                  P.isSettingEntry() && s.isLoginScene(g)
                    ? ((B = {
                        extraInfo: {
                          biometricsMode: P.bioMode.value,
                          biometricsInitStep: a.BiometricsOpenStep.openEntry,
                        },
                        onSuccess: function (e) {
                          var r;
                          e.openBiometricsState
                            ? P.openBiometrics(d, e)
                            : null == (r = y.onSuccess) || r.call(y, e);
                        },
                      }),
                      (T = r(r({}, y), B)),
                      P.statBiometrics("trade.bio.pwdentry.brow"))
                    : (T = r({}, y)),
                  e.abrupt("return", p((h = n.Password(T))))
                );
              case 13:
                return (
                  (O = c.getBiometricsOptions(d)).extraInfo
                    ? (O.extraInfo.biometricsAuthType = P.bioMode.value)
                    : (O.extraInfo = {
                        biometricsAuthType: P.bioMode.value,
                        biometricsScene: g,
                      }),
                  (j = r(
                    r({ sceneForReport: "auth" }, O),
                    {},
                    {
                      onDowngradeToPwd: function (e) {
                        var t = c.getPasswordOptions(d),
                          o = r(
                            r({}, t),
                            {},
                            {
                              onSuccess: function (r) {
                                var o, n;
                                null == (o = t.onSuccess) || o.call(t, r),
                                  null ==
                                    (n = null == e ? void 0 : e.onPwdSuccess) ||
                                    n.call(e, r.encodePwd);
                              },
                            }
                          );
                        (null == e ? void 0 : e.downgradeScene) ===
                          u.BioDowngradePwdScene.BIO_PWD_LOCK &&
                          e.lockTips &&
                          (o.extraInfo
                            ? (o.extraInfo.externalLockTips = e.lockTips)
                            : (o.extraInfo = { externalLockTips: e.lockTips })),
                          (h = n.Password(o));
                      },
                    }
                  )),
                  e.abrupt(
                    "return",
                    ((h = n.Password(j)),
                    P.statBiometrics("trade.bio.verify"),
                    p(h))
                  )
                );
              case 19:
                return (
                  (e.prev = 19),
                  (e.t0 = e.catch(1)),
                  e.abrupt(
                    "return",
                    ((h = n.Password(c.getPasswordOptions(d))),
                    null ==
                      (v =
                        null ==
                        (f = null == (w = i.aegisReporter) ? void 0 : w.sdk)
                          ? void 0
                          : f.error) ||
                      v.call(f, {
                        msg: "BIO_AUTH_FAIL",
                        ext4: JSON.stringify(e.t0 || {}),
                        ext5: g,
                      }),
                    p(h))
                  )
                );
              case 22:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[1, 19]]
      );
    })
  );
  return function (e) {
    return d.apply(this, arguments);
  };
})();
