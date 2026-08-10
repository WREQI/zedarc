require("../../app.js");
var I = (function (I) {
    return (
      (I.none = ""),
      (I.fingerPrint = "fingerPrint"),
      (I.facial = "facial"),
      (I.speech = "speech"),
      I
    );
  })(I || {}),
  _ = (function (I) {
    return (
      (I.BIO_SETTING_STATU_INIT_FAIL = "BIO_SETTING_STATU_INIT_FAIL"),
      (I.BIO_SETTING_CLICK_BEFORE_INIT = "BIO_SETTING_CLICK_BEFORE_INIT"),
      (I.BIO_SETTING_BIOAUTH_FAIL = "BIO_SETTING_BIOAUTH_FAIL"),
      (I.BIO_SETTING_PWD_CANCEL = "BIO_SETTING_PWD_CANCEL"),
      (I.BIO_SETTING_BIO_CANCEL = "BIO_SETTING_BIO_CANCEL"),
      (I.BIO_SETTING_NOT_ENROLLED = "BIO_SETTING_NOT_ENROLLED"),
      I
    );
  })(_ || {}),
  T = (function (I) {
    return (
      (I.BIO_AUTH_EXPIRED = "expired"),
      (I.BIO_MANUAL_SWITCH = "manual"),
      (I.BIO_OTHER_ERROR = "error"),
      (I.BIO_PWD_LOCK = "lock"),
      I
    );
  })(T || {});
(exports.BioAuthMode = I),
  (exports.BioAuthModeLongText = {
    "": "",
    fingerPrint: "指纹识别ID",
    facial: "面容识别ID",
    speech: "声纹识别",
  }),
  (exports.BioAuthModeText = {
    "": "",
    fingerPrint: "指纹ID",
    facial: "面容ID",
    speech: "声纹",
  }),
  (exports.BioDowngradePwdScene = T),
  (exports.BioErrorCode = _),
  (exports.SupportBioModes = ["fingerPrint", "facial"]);
