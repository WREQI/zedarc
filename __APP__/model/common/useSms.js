var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js");
require("../../service/broker.js");
var t = require("./useCountDown.js"),
  i = require("../../config/enum.js"),
  s = require("../../cgi/bind.js"),
  o = require("../../config/broker/11100/index.js"),
  a = new RegExp("^\\d{".concat(o.brokerConfig.bind.captchaLen, "}"));
(exports.CODE_REG = a),
  (exports.useSms = function () {
    var o,
      a = t.useCountDown(),
      c = a.countTimmer,
      u = a.countTimeText,
      p = !1,
      d = n.ref(!1);
    return {
      isSend: d,
      countTimeText: u,
      countTimmer: c,
      sendSms:
        ((o = r(
          e().mark(function r(t) {
            var o, a, u, m, b, v;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = t.action),
                        (a = t.phone),
                        (u = t.brokerCaptchaCode),
                        (m = void 0 === u ? "" : u),
                        (b = t.isspecialvarify),
                        (v = void 0 === b ? "" : b),
                        i.REGX.MOBILE.test(a))
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        n.index.showToast({
                          icon: "none",
                          title: "手机号码填写不正确",
                        })
                      );
                    case 3:
                      if (p) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (p = !0),
                        (e.prev = 5),
                        (d.value = !0),
                        (e.next = 9),
                        s.bindCgi.requestSendSms(o, {
                          phone: a,
                          captchaCode: m,
                          isspecialvarify: v,
                        })
                      );
                    case 9:
                      c.start(),
                        n.index.showToast({
                          icon: "success",
                          title: "验证码已发送",
                        }),
                        (p = !1),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e.catch(5)),
                        n.index.showToast({
                          icon: "none",
                          title: e.t0.retmsg || "网络繁忙 请稍后再试",
                        }),
                        c.clear(),
                        (p = !1);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[5, 14]]
            );
          })
        )),
        function (e) {
          return o.apply(this, arguments);
        }),
    };
  });
