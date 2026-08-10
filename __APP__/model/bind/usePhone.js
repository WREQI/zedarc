var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../cgi/bind.js"),
  t = require("../../common/vendor.js");
require("../../service/broker.js");
var c = require("../../config/enum.js"),
  o = require("../../config/broker/10900/index.js");
exports.usePhone = function () {
  var i,
    u = t.reactive({ phone: "", code: "" }),
    a = o.brokerConfig.bind.captchaLen,
    s = t.computed(function () {
      return c.REGX.MOBILE.test(u.phone);
    }),
    p = new RegExp("^\\d{".concat(o.brokerConfig.bind.captchaLen, "}")),
    d = t.computed(function () {
      return p.test(u.code);
    });
  return {
    bindData: u,
    isPhoneValid: s,
    isCodeValid: d,
    captchaLen: a,
    checkData: function () {
      return u.phone
        ? s.value
          ? u.code
            ? d.value
              ? [!0]
              : [!1, { retmsg: "验证码错误" }]
            : [!1, { retmsg: "验证码不能为空" }]
          : [!1, { retmsg: "手机号码不合法" }]
        : [!1, { retmsg: "手机号码不能为空" }];
    },
    sendCodeCheck:
      ((i = r(
        e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      n.cgi.requestSmsCheck(n.SMS_ACTION.BIND, {
                        phone: u.phone,
                        code: u.code,
                      })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 6:
                    throw ((e.prev = 6), (e.t0 = e.catch(0)), e.t0);
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 6]]
          );
        })
      )),
      function () {
        return i.apply(this, arguments);
      }),
  };
};
