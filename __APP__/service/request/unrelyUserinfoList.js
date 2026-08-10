var _ = require("../../config/cgi.js"),
  i = [
    _.API_USERINFO,
    _.API_MP_LOGIN_OEM,
    _.API_MP_LOGIN,
    _.API_MP_OPENID_BIND,
    _.API_DEALER_MP_LOGIN,
    _.API_ZXG_LOGIN,
    "wxapi_sign.fcgi",
    "logout.cgi",
    "login.fcgi",
    "wx_login.cgi",
    "outwx_login.cgi",
    _.API_APPLY_ACCOUNT,
    _.API_USERINFO_BROKER,
  ];
exports.unrelyUserinfoList = i;
