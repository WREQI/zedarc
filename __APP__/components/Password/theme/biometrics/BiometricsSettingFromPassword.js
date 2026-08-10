var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var n = require("../../../../service/auth/auth.type.js"),
  o = require("./BiometricsSettingBase.js"),
  u = require("./biometrics.type.js"),
  a = require("./utils.js"),
  c = require("../../../../config/enum/biometrics.js"),
  l = require("../../index.js"),
  m = require("../../../../service/auth/utils.js"),
  p = require("../../../../service/stat/mp-weixin.js"),
  v = (function (o) {
    t(h, o);
    var v = s(h);
    function h() {
      return (
        r(this, h), v.call(this, { settingFrom: u.BiometricsSettingFrom.pwd })
      );
    }
    return (
      i(h, [
        {
          key: "verifyPassword",
          value: function (e, r) {
            return Promise.resolve(r.encodePwd);
          },
        },
        {
          key: "verifyBiometrics",
          value: function (r) {
            var i = this;
            return new Promise(function (t, s) {
              l.Password(
                e(
                  e(
                    { theme: l.THEME.BIOMETRICS },
                    m.getBiometricsOptionsForOpen(r)
                  ),
                  {},
                  {
                    extraInfo: {
                      canDownGradeToPwd: !1,
                      biometricsAuthType: i.bioMode.value,
                    },
                    noSubmit: !0,
                    showCloseIcon: !0,
                    onSuccess: function (e) {
                      t(e);
                    },
                    onCancel: function () {
                      s(a.formatError(c.BioErrorCode.BIO_SETTING_BIO_CANCEL));
                    },
                  }
                )
              );
            });
          },
        },
        {
          key: "openComplete",
          value: function (e, r) {
            var i;
            null == (i = null == r ? void 0 : r.onSuccess) || i.call(r, e);
          },
        },
        {
          key: "getLoginType",
          value: function () {
            return this.isBiometricsOpen.value &&
              this.isBiometricsGrayFinal.value
              ? n.LoginType.Biometrics
              : n.LoginType.Password;
          },
        },
        {
          key: "isSettingEntry",
          value: function () {
            return !(
              this.isBiometricsOpen.value || !this.isBiometricsGrayFinal.value
            );
          },
        },
        {
          key: "statBiometrics",
          value: function (e) {
            p.stat.click(e);
          },
        },
      ]),
      h
    );
  })(o.BiometricsSettingBase);
exports.createBiometricsManager = function () {
  return new v();
};
