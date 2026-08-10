require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../@babel/runtime/helpers/createSuper"),
  c = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var a = Object.defineProperty,
  u = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? a(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != c(r) ? r + "" : r, t),
      t
    );
  },
  l = require("../../../../common/vendor.js"),
  p = require("./BiometricsSettingBase.js"),
  m = require("../../index.js"),
  h = require("./utils.js"),
  f = require("../../../../config/enum/biometrics.js"),
  v = require("./biometrics.type.js"),
  b = require("../../../../common/components/Dialog/index.js"),
  d = require("../../../../cgi/biometrics.js"),
  B = require("../../../../service/stat/mp-weixin.js"),
  E = require("../../../../service/aegis/platform/not-wujie.js"),
  g = require("../../password.type.js"),
  w = (function (c) {
    n(C, c);
    var a,
      p,
      w,
      S = s(C);
    function C() {
      var e;
      return (
        t(this, C),
        (e = S.call(this, { settingFrom: v.BiometricsSettingFrom.setting })),
        u(o(e), "isSetting", !1),
        u(o(e), "showBioProtocol", l.ref(!1)),
        e
      );
    }
    return (
      i(C, [
        {
          key: "verifyPassword",
          value: function (e) {
            var r = this;
            return new Promise(function (t, i) {
              m.Password({
                theme: m.THEME.EMBEDDED,
                showCloseIcon: !0,
                extraInfo: {
                  biometricsInitStep:
                    e.biometricsInitStep || g.BiometricsOpenStep.protocol,
                  biometricsMode: r.bioMode.value,
                },
                onSuccess: function (e) {
                  var r = e.encodePwd;
                  t(r);
                },
                onCancel: function () {
                  i(h.formatError(f.BioErrorCode.BIO_SETTING_PWD_CANCEL));
                },
              });
            });
          },
        },
        {
          key: "verifyBiometrics",
          value: function () {
            var e = this;
            return new Promise(function (r, t) {
              m.Password({
                theme: m.THEME.BIOMETRICS,
                extraInfo: {
                  canDownGradeToPwd: !1,
                  biometricsAuthType: e.bioMode.value,
                },
                noSubmit: !0,
                showCloseIcon: !0,
                onSuccess: function (e) {
                  r(e);
                },
                onCancel: function () {
                  t(h.formatError(f.BioErrorCode.BIO_SETTING_BIO_CANCEL));
                },
              });
            });
          },
        },
        {
          key: "confirmBeforeClose",
          value: function () {
            var e = this;
            return new Promise(function (r) {
              b.Dialog({
                message: "关闭".concat(
                  e.bioText.value,
                  "验证后，登录和下单需要手动输入交易密码进行验证"
                ),
                onConfirm: function () {
                  r(!0);
                },
              });
            });
          },
        },
        {
          key: "verifyPasswordForClose",
          value: function () {
            return new Promise(function (e, r) {
              m.Password({
                theme: m.THEME.EMBEDDED,
                showCloseIcon: !0,
                onSuccess: function (r) {
                  var t = r.encodePwd;
                  e(t);
                },
                onCancel: function () {
                  r(h.formatError(f.BioErrorCode.BIO_SETTING_PWD_CANCEL));
                },
              });
            });
          },
        },
        {
          key: "closeBiometrics",
          value:
            ((w = r(
              e().mark(function r() {
                var t, i, o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.confirmBeforeClose()
                          );
                        case 3:
                          return (e.next = 5), this.verifyPasswordForClose();
                        case 5:
                          return (
                            (o = e.sent),
                            l.index.showLoading({ title: "关闭中" }),
                            (e.next = 9),
                            d.biometricsAPI.closeBiometrics({
                              biometric_type: h.transferBioModeToParams(
                                this.bioMode.value
                              ),
                              psw: o,
                            })
                          );
                        case 9:
                          this.updateBiometricsStatus(),
                            B.stat.click(
                              "trade.setting.bio_close.succ".concat(
                                this.settingFrom
                              )
                            ),
                            (e.next = 18);
                          break;
                        case 13:
                          if (
                            ((e.prev = 13),
                            (e.t0 = e.catch(0)),
                            !(null ==
                            (i =
                              null == (t = null == e.t0 ? void 0 : e.t0.retcode)
                                ? void 0
                                : t.includes)
                              ? void 0
                              : i.call(t, "CANCEL")))
                          ) {
                            e.next = 17;
                            break;
                          }
                          return e.abrupt("return");
                        case 17:
                          throw (
                            (b.Dialog({
                              message:
                                (null == e.t0 ? void 0 : e.t0.message) ||
                                "关闭失败",
                            }),
                            e.t0)
                          );
                        case 18:
                          return (
                            (e.prev = 18), l.index.hideLoading(), e.finish(18)
                          );
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[0, 13, 18, 21]]
                );
              })
            )),
            function () {
              return w.apply(this, arguments);
            }),
        },
        {
          key: "doBioSetting",
          value:
            ((p = r(
              e().mark(function r() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            B.stat.click(
                              "trade.setting.bio_" +
                                (this.isBiometricsOpen.value ? "close" : "open")
                            ),
                            this.isBiometricsInit.value)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void E.aegisReporter.reportEvent(
                              f.BioErrorCode.BIO_SETTING_CLICK_BEFORE_INIT
                            )
                          );
                        case 3:
                          if (!this.isSetting) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            ((this.isSetting = !0),
                            !this.isBiometricsOpen.value)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (e.next = 8), this.closeBiometrics();
                        case 8:
                          return e.abrupt("return", void e.sent);
                        case 9:
                          return (
                            (e.next = 11),
                            this.openBiometrics({
                              biometricsInitStep: g.BiometricsOpenStep.protocol,
                            })
                          );
                        case 11:
                          return (
                            (e.prev = 11), (this.isSetting = !1), e.finish(11)
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[0, , 11, 14]]
                );
              })
            )),
            function () {
              return p.apply(this, arguments);
            }),
        },
        {
          key: "hideBioProtocol",
          value: function () {
            this.showBioProtocol.value = !1;
          },
        },
        {
          key: "doBioSettingByProtocol",
          value:
            ((a = r(
              e().mark(function r() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            B.stat.click(
                              "trade.setting.bio_protocol." +
                                (this.isBiometricsOpen.value ? "close" : "open")
                            ),
                            this.isBiometricsInit.value)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void E.aegisReporter.reportEvent(
                              f.BioErrorCode.BIO_SETTING_CLICK_BEFORE_INIT
                            )
                          );
                        case 3:
                          if (!this.isSetting) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            ((this.isSetting = !0),
                            !this.isBiometricsOpen.value)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void (this.showBioProtocol.value = !0)
                          );
                        case 7:
                          return (
                            (e.next = 9),
                            this.openBiometrics({
                              biometricsInitStep:
                                g.BiometricsOpenStep.protocolDetail,
                            })
                          );
                        case 9:
                          return (
                            (e.prev = 9), (this.isSetting = !1), e.finish(9)
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[0, , 9, 12]]
                );
              })
            )),
            function () {
              return a.apply(this, arguments);
            }),
        },
      ]),
      C
    );
  })(p.BiometricsSettingBase);
exports.BiometricsSettingFromSetting = w;
