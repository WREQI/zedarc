var e = require("../@babel/runtime/helpers/objectSpread2"),
  n = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  t = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("../utils/accountHelper.js"),
  a = require("./base.js"),
  c = require("../config/cgi.js"),
  u = new ((function (a) {
    i(l, a);
    var u = t(l);
    function l() {
      return n(this, l), u.apply(this, arguments);
    }
    return (
      r(l, [
        {
          key: "requestBind",
          value: function (n) {
            return this.request(c.API_USERBIND, e({ action: 1 }, n), {
              encodeFields: ["mobile_tel", "credential_id", "credential_name"],
            });
          },
        },
        {
          key: "requestUnBind",
          value: function (n) {
            return this.request(c.API_USERBIND, e({ action: 2 }, n));
          },
        },
        {
          key: "requestZxgBind",
          value: function (n) {
            return this.request(c.API_BIND_ACCOUNT, e({ action: "bind" }, n), {
              encodeFields: ["tel"],
            });
          },
        },
        {
          key: "requestZxgUnBind",
          value: function (n) {
            return this.request(c.API_BIND_ACCOUNT, e({ action: "unbind" }, n));
          },
        },
        {
          key: "requestGetAccount",
          value: function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = n.name,
              i = n.id,
              t = n.phone,
              s = n.xidSession,
              a = n.mode,
              u = n.face_src,
              l = n.face_verify_result,
              o = n.use_new_wx_info,
              d = n.seq_no,
              _ = {
                credential_name: r,
                credential_id: i,
                mobile_tel: t,
                xid_session: s,
                mode: a,
                face_verify_result: l,
                face_src: u,
                use_new_wx_info: o,
                seq_no: d,
              };
            return this.request(c.API_USERBIND, e({ action: 3 }, _), {
              encodeFields: ["mobile_tel", "credential_id", "credential_name"],
            });
          },
        },
        {
          key: "reqFacecheckToken",
          value: function (e) {
            var n = e.scene,
              r = e.account,
              i = e.credentialId,
              t = e.credentialName,
              a = e.useNewWxInfo,
              u = {
                action: 5,
                scene: n,
                face_src: s.getFaceSrcByPlatform(),
                use_new_wx_info: a,
              };
            return (
              r && (u.account = r),
              i && (u.credential_id = i),
              t && (u.credential_name = t),
              this.request(c.API_USERBIND, u, {
                encodeFields: ["credential_id", "credential_name"],
              })
            );
          },
        },
        {
          key: "requestSendSms",
          value: function (e, n) {
            var r = n.phone,
              i = n.captchaCode,
              t = n.isspecialvarify;
            return this.request(
              c.API_SEND_SMS,
              { type: e, tel: r, captcha_code: i, isspecialvarify: t },
              { encodeFields: ["tel", "id_number"] }
            );
          },
        },
        {
          key: "requestSmsCheck",
          value: function (e, n) {
            var r = n.phone,
              i = n.code,
              t = n.hasbind;
            return this.request(
              c.API_CHECKIDENTITY,
              { action: e, sms_code: i, tel: r, hasbind: t },
              { encodeFields: ["tel", "id_number"] }
            );
          },
        },
      ]),
      l
    );
  })(a.BaseAPI))();
(exports.SMS_ACTION = { BIND: "6", GET_ACCOUNT: "9", COND_SIGN: "10" }),
  (exports.bindCgi = u);
