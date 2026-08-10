require("../../app.js");
var e = (function (e) {
    return (e[(e.finger = 0)] = "finger"), (e[(e.facial = 1)] = "facial"), e;
  })(e || {}),
  n = (function (e) {
    return (
      (e.OPEN = "open"),
      (e.CLOSE = "close"),
      (e.LOGIN = "login"),
      (e.SILENCE_LOGIN = "silence_login"),
      e
    );
  })(n || {});
(exports.BIOMETRICS_ACTION = n), (exports.BIOMETRICS_TYPE_BACKEND = e);
