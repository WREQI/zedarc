var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var s = Object.defineProperty,
  o = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? s(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != n(r) ? r + "" : r, i),
      i
    );
  },
  u = require("../../../../config/enum/biometrics.js"),
  a = require("../../../../common/vendor.js"),
  c = require("./utils.js"),
  l = require("../../../../service/aegis/platform/not-wujie.js"),
  f = require("../../../../stores/user/useUserinfo.js");
require("../../../../service/broker.js");
var m = require("../../../../utils/index.js"),
  p = require("../../../../service/aegis/utils.js"),
  v = require("../../../../config/broker/11100/index.js");
exports.BiometricsBase = (function () {
  function n() {
    i(this, n),
      o(this, "bioText", a.ref("")),
      o(this, "bioMode", a.ref(u.BioAuthMode.none)),
      o(this, "isBiometricsGrayFinal", a.ref(!1)),
      o(this, "isBiometricsOpen", a.ref(!1)),
      o(this, "isBiometricsInit", a.ref(!1));
  }
  var s, h, b, B, g;
  return (
    t(n, [
      {
        key: "initLocalBiometrics",
        value:
          ((g = r(
            e().mark(function r() {
              var i, t, n, s;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), c.canUseBiometrics())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (e.next = 5), c.getBiometricsStrategyCache();
                      case 5:
                        if ((s = e.sent) !== u.BioAuthMode.none) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return");
                      case 8:
                        (this.bioText.value = u.BioAuthModeText[s]),
                          (this.bioMode.value = s),
                          (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          null ==
                            (n =
                              null ==
                              (t =
                                null == (i = l.aegisReporter) ? void 0 : i.sdk)
                                ? void 0
                                : t.error) ||
                            n.call(t, {
                              msg: "BIO_INIT_LOCAL_FAIL",
                              ext4: JSON.stringify(e.t0 || {}),
                            });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                this,
                [[0, 11]]
              );
            })
          )),
          function () {
            return g.apply(this, arguments);
          }),
      },
      {
        key: "setRemoteBiometrics",
        value:
          ((B = r(
            e().mark(function r(i) {
              var t, n, s, o, u, a;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), c.canUseBiometrics())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (e.next = 5), c.getBiometricsLocalInfo(i);
                      case 5:
                        (o = e.sent),
                          (u = o.isBiometricGray),
                          (a = o.isLocalBiometricTypeOpen),
                          (this.isBiometricsGrayFinal.value = u),
                          (this.isBiometricsOpen.value = a),
                          (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          null ==
                            (s =
                              null ==
                              (n =
                                null == (t = l.aegisReporter) ? void 0 : t.sdk)
                                ? void 0
                                : n.error) ||
                            s.call(n, {
                              msg: "BIO_INIT_REMOTE_FAIL",
                              ext3: JSON.stringify(e.t0 || {}),
                            });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                this,
                [[0, 11]]
              );
            })
          )),
          function (e) {
            return B.apply(this, arguments);
          }),
      },
      {
        key: "getBiometricsCache",
        value: function () {
          var e,
            r,
            i,
            t =
              null ==
              (i =
                null ==
                (r =
                  null ==
                  (e =
                    null == requireMiniProgram ? void 0 : requireMiniProgram())
                    ? void 0
                    : e.main2Plugin())
                  ? void 0
                  : r.getBrokerUserSetting)
                ? void 0
                : i.call(r, v.brokerConfig.base.code);
          return a.isEmpty(t) ||
            !a.isObject(t) ||
            [
              "ios_biometric_entry",
              "android_biometric_entry",
              "biometric_face",
              "biometric_finger",
            ].some(function (e) {
              return void 0 === t[e];
            })
            ? null
            : t;
        },
      },
      {
        key: "initBiometricsBaseInfo",
        value:
          ((b = r(
            e().mark(function r(i) {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), this.initLocalBiometrics()
                        );
                      case 3:
                        return (e.next = 5), this.setRemoteBiometrics(i);
                      case 5:
                        return (
                          (e.prev = 5),
                          (this.isBiometricsInit.value = !0),
                          e.finish(5)
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                this,
                [[0, , 5, 8]]
              );
            })
          )),
          function (e) {
            return b.apply(this, arguments);
          }),
      },
      {
        key: "getDefaultConfig",
        value:
          ((h = r(
            e().mark(function r() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), m.sleep(2e3);
                    case 2:
                      return e.abrupt("return", c.getDefaultBiometricsConfig());
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          )),
          function () {
            return h.apply(this, arguments);
          }),
      },
      {
        key: "initBiometricsBaseInfoByUserinfo",
        value:
          ((s = r(
            e().mark(function r() {
              var i, t, n, s, o, u, m;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0),
                          (s = f.useUserinfoStore()),
                          (o = null),
                          a.isEmpty(s.userinfo)
                            ? ((o = this.getBiometricsCache()),
                              p.reportEventSafely("BIO_INIT_HIT_CACHE"))
                            : (o = s.userinfo),
                          o)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return (
                          (e.next = 6),
                          Promise.race([
                            s.getUserInfo(),
                            this.getDefaultConfig(),
                          ])
                        );
                      case 6:
                        (u = e.sent),
                          a.isEmpty(s.userinfo)
                            ? ((o = u),
                              null ==
                                (n =
                                  null ==
                                  (t =
                                    null == (i = l.aegisReporter)
                                      ? void 0
                                      : i.sdk)
                                    ? void 0
                                    : t.error) ||
                                n.call(t, { msg: "BIO_INIT_USERINFO_DELAY" }))
                            : (o = s.userinfo);
                      case 8:
                        if (
                          ((m = c.getBiometricFlags(o)),
                          1 == +c.getBiometricEntry(m))
                        ) {
                          e.next = 11;
                          break;
                        }
                        return e.abrupt("return");
                      case 11:
                        return (e.next = 13), this.initLocalBiometrics();
                      case 13:
                        return (e.next = 15), this.setRemoteBiometrics(m);
                      case 15:
                        return (
                          (e.prev = 15),
                          (this.isBiometricsInit.value = !0),
                          e.finish(15)
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                this,
                [[0, , 15, 18]]
              );
            })
          )),
          function () {
            return s.apply(this, arguments);
          }),
      },
    ]),
    n
  );
})();
