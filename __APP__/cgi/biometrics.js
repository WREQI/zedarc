var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  i = require("../@babel/runtime/helpers/createClass"),
  t = require("../@babel/runtime/helpers/inherits"),
  s = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./types/biometrics.js"),
  n = require("./base.js"),
  I = require("../config/cgi.js"),
  a = new ((function (n) {
    t(c, n);
    var a = s(c);
    function c() {
      return r(this, c), a.apply(this, arguments);
    }
    return (
      i(c, [
        {
          key: "openBiometrics",
          value: function (r) {
            return this.request(
              I.API_BIOMETRICS,
              e({ action: u.BIOMETRICS_ACTION.OPEN }, r)
            );
          },
        },
        {
          key: "closeBiometrics",
          value: function (r) {
            return this.request(
              I.API_BIOMETRICS,
              e({ action: u.BIOMETRICS_ACTION.CLOSE }, r)
            );
          },
        },
        {
          key: "authByBiometrics",
          value: function (r) {
            return this.request(
              I.API_BIOMETRICS,
              e({ action: u.BIOMETRICS_ACTION.LOGIN }, r)
            );
          },
        },
        {
          key: "biometricsTokenSilenceUpdate",
          value: function (r) {
            return this.request(
              I.API_BIOMETRICS,
              e({ action: u.BIOMETRICS_ACTION.SILENCE_LOGIN }, r)
            );
          },
        },
      ]),
      c
    );
  })(n.BaseAPI))();
exports.biometricsAPI = a;
