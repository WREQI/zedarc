require("../../app.js");
var _ = (function (_) {
    return (
      (_.APPLY = "1"),
      (_.BIND = "2"),
      (_.CONDITION = "3"),
      (_.TRADE_CONFIRMATION = "TRADE_CONFIRMATION"),
      (_.TRADE_REGISTER = "TRADE_REGISTER"),
      (_.BIZ_NEWSTOCK_PURCHASE = "BIZ_NEWSTOCK_PURCHASE"),
      (_.BIZ_NEWSTOCK_BOOKING = "BIZ_NEWSTOCK_BOOKING"),
      (_.BIZ_KZZ_OPEN = "BIZ_KZZ_OPEN"),
      (_.BIZ_ST_OPEN = "BIZ_ST_OPEN"),
      (_.BIZ_KCB_OPEN = "BIZ_KCB_OPEN"),
      (_.BIZ_GEM_OPEN = "BIZ_GEM_OPEN"),
      (_.BIZ_CONDITIONAL_ORDER = "BIZ_CONDITIONAL_ORDER"),
      _
    );
  })(_ || {}),
  O = (function (_) {
    return (
      (_.APPLY_CONFIRMATION = "APPLY_CONFIRMATION"),
      (_.APPLY_FACECHECK = "APPLY_FACECHECK"),
      (_.APPLY_BINDMOBILE = "APPLY_BINDMOBILE"),
      (_.APPLY_PROFILE = "APPLY_PROFILE"),
      (_.APPLY_COMMISSION_CONFIRM = "APPLY_COMMISSION_CONFIRM"),
      (_.APPLY_SUBMIT_FIRST = "APPLY_SUBMIT_FIRST"),
      (_.APPLY_SUBMIT_SECOND = "APPLY_SUBMIT_SECOND"),
      (_.APPLY_UNIONPAY_BANKCARD = "APPLY_UNIONPAY_BANKCARD"),
      (_.APPLY_RISK_RESULT = "APPLY_RISK_RESULT"),
      _
    );
  })(O || {}),
  I = (function (_) {
    return (
      (_.BROKER_CGI = "1"),
      (_.STATICS_CONFIG = "2"),
      (_.STATICS_BROKER_URL = "3"),
      (_.STATICS_TENPAY_KEY = "4"),
      _
    );
  })(I || {}),
  P = (function (_) {
    return (_.HTML = "0"), (_.PDF = "1"), (_.CONTENT = "2"), _;
  })(P || {}),
  E = (function (_) {
    return (
      (_[(_.DEFAULT = 0)] = "DEFAULT"), (_[(_.BACKEND = 1)] = "BACKEND"), _
    );
  })(E || {});
(exports.ENUM_PROTOCOL_BIZ = _),
  (exports.ENUM_PROTOCOL_SCENE = O),
  (exports.PREVIEW_TYPE = E),
  (exports.PROTOCOL_MODE = I),
  (exports.PROTOCOL_TYPE = P);
