require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var i = require("../../../../utils/getPlatform.js");
require("../../../../service/broker.js");
var t = require("../../../../config/enum/biometrics.js"),
  o = require("../../../../cgi/types/biometrics.js");
require("../../../../service/sdk/lib/api.js");
var n = require("../../../../service/sdk/platform/mp-weixin.js"),
  c = require("../../../../service/aegis/platform/not-wujie.js"),
  u = require("../../../../service/auth/auth.type.js"),
  s = require("../../../../common/vendor.js"),
  a = require("../../../../config/broker/11100/index.js"),
  p = ["android", "ios"],
  l = ["android"],
  d = ["ios"],
  m = t.BioAuthMode.none,
  f = i.getPlatform(),
  g = f.isOEM,
  _ = f.isMpPlugin,
  B = f.platform;
f.bizPlatform;
function b() {
  return !!_ && !!a.brokerConfig.common.enableBiometrics && !g && p.includes(B);
}
function h() {
  return M.apply(this, arguments);
}
function M() {
  return (M = r(
    e().mark(function i() {
      return e().wrap(function (i) {
        for (;;)
          switch ((i.prev = i.next)) {
            case 0:
              if (((i.t0 = m), i.t0)) {
                i.next = 6;
                break;
              }
              return (
                (i.next = 4),
                r(
                  e().mark(function r() {
                    var i, o, u, s, a, p, m;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                n.sdk.checkIsSupportSoterAuthentication()
                              );
                            case 3:
                              return (
                                (m = e.sent),
                                e.abrupt(
                                  "return",
                                  m && m.supportMode && m.supportMode.length
                                    ? m.supportMode.length > 1 &&
                                      m.supportMode.includes(
                                        t.BioAuthMode.fingerPrint
                                      ) &&
                                      l.includes(B)
                                      ? t.BioAuthMode.fingerPrint
                                      : m.supportMode.length > 1 &&
                                        m.supportMode.includes(
                                          t.BioAuthMode.facial
                                        ) &&
                                        d.includes(B)
                                      ? t.BioAuthMode.facial
                                      : t.SupportBioModes.includes(
                                          m.supportMode[0]
                                        )
                                      ? m.supportMode[0]
                                      : (null ==
                                          (s =
                                            null == (u = c.aegisReporter)
                                              ? void 0
                                              : u.reportEvent) ||
                                          s.call(u, "BIO_AUTHMODE_NOTSUPPORT", {
                                            ext4: JSON.stringify(m || {}),
                                          }),
                                        t.BioAuthMode.none)
                                    : (null ==
                                        (o =
                                          null == (i = c.aegisReporter)
                                            ? void 0
                                            : i.reportEvent) ||
                                        o.call(i, "BIO_AUTHMODE_LACK", {
                                          ext4: JSON.stringify(m || {}),
                                        }),
                                      t.BioAuthMode.none)
                                )
                              );
                            case 7:
                              return (
                                (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                e.abrupt(
                                  "return",
                                  ((function (e) {
                                    var r;
                                    return !!(null ==
                                    (r = null == e ? void 0 : e.errmsg)
                                      ? void 0
                                      : r.includes("开发者工具"));
                                  })(e.t0) ||
                                    null ==
                                      (p =
                                        null == (a = c.aegisReporter)
                                          ? void 0
                                          : a.reportEvent) ||
                                    p.call(a, "BIO_AUTHMODE_GET_FAIL", {
                                      ext4: JSON.stringify(e.t0 || {}),
                                    }),
                                  t.BioAuthMode.none)
                                )
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      r,
                      null,
                      [[0, 7]]
                    );
                  })
                )()
              );
            case 4:
              (m = i.sent), (i.t0 = m);
            case 6:
              return i.abrupt("return", i.t0);
            case 7:
            case "end":
              return i.stop();
          }
      }, i);
    })
  )).apply(this, arguments);
}
function v(e) {
  if (s.isEmpty(e)) return "0";
  var r = e.ios_biometric_entry,
    t = e.android_biometric_entry,
    o = i.getPlatform().platform;
  return "android" === o ? t || "0" : ("ios" === o && r) || "0";
}
var y = [
    u.BiometricsScene.Login,
    u.BiometricsScene.WSSLogin,
    u.BiometricsScene.PluginCompLogin,
  ],
  x = [u.BiometricsScene.Login, u.BiometricsScene.WSSLogin];
(exports.canUseBiometrics = b),
  (exports.formatError = function (e) {
    return { retcode: e };
  }),
  (exports.getBiometricEntry = v),
  (exports.getBiometricFlags = function (e) {
    return !e || s.isEmpty(e)
      ? {
          ios_biometric_entry: "0",
          android_biometric_entry: "0",
          biometric_face: "0",
          biometric_finger: "0",
        }
      : {
          ios_biometric_entry: e.ios_biometric_entry,
          android_biometric_entry: e.android_biometric_entry,
          biometric_face: e.biometric_face,
          biometric_finger: e.biometric_finger,
        };
  }),
  (exports.getBiometricsLocalInfo = (function () {
    var i = r(
      e().mark(function r(i) {
        var o, n, c, u, s, a, p, l;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (o = i.biometric_face),
                  (n = i.biometric_finger),
                  (c = v(i)),
                  (e.next = 5),
                  h()
                );
              case 5:
                return (
                  (u = e.sent),
                  (s = !1),
                  (a = t.SupportBioModes.includes(u)),
                  u &&
                    a &&
                    b() &&
                    ((p = "1" === o && u === t.BioAuthMode.facial),
                    (l = "1" === n && u === t.BioAuthMode.fingerPrint),
                    (s = p || l)),
                  e.abrupt("return", {
                    isLocalSupportBiometric: a,
                    isBiometricGray: !(1 != +c || !a || !b()),
                    isLocalBiometricTypeOpen: s,
                    localBiometricText: t.BioAuthModeText[u],
                    localBiometricType: u,
                  })
                );
              case 9:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e) {
      return i.apply(this, arguments);
    };
  })()),
  (exports.getBiometricsStrategyCache = h),
  (exports.getDefaultBiometricsConfig = function () {
    return {
      ios_biometric_entry: "0",
      android_biometric_entry: "0",
      biometric_face: "0",
      biometric_finger: "0",
    };
  }),
  (exports.isAutoLoginScene = function (e) {
    return !(!e || !x.includes(e));
  }),
  (exports.isLoginScene = function (e) {
    return !(!e || !y.includes(e));
  }),
  (exports.transferBioModeToParams = function (e) {
    return e === t.BioAuthMode.facial
      ? o.BIOMETRICS_TYPE_BACKEND.facial
      : e === t.BioAuthMode.fingerPrint
      ? o.BIOMETRICS_TYPE_BACKEND.finger
      : void 0;
  });
