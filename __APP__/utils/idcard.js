var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var n = require("../common/components/Dialog/index.js"),
  t = require("../config/enum.js");
function u(e) {
  return new Promise(function (r) {
    n.Dialog({
      message:
        "<div>输入的身份证信息与系统预留身份证信息不一致，请确认是否转换身份证位数重试一次？</div>",
      messageType: "html",
      showCancelButton: !0,
      cancelButtonText: "取消",
      confirmButtonText: "转换重试",
      onCancel: function () {
        r("");
      },
      onConfirm: function () {
        r(
          (function (e) {
            return 18 !== e.length
              ? e
              : t.REGEXP_VALID_ID.test(e)
              ? e.slice(0, 6) + e.slice(8, 17)
              : e;
          })(e)
        );
      },
    });
  });
}
var c = (function (e) {
  return (
    (e[(e.fail = 0)] = "fail"),
    (e[(e.cancel = 1)] = "cancel"),
    (e[(e.success = 2)] = "success"),
    e
  );
})(c || {});
(exports.ID_TRANSFORM_RESULT = c),
  (exports.tryIDTransform = function () {
    var n = !1;
    return (function () {
      var t = r(
        e().mark(function r(t, c) {
          var a;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (18 === (null == t ? void 0 : t.length)) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", { retcode: 0 });
                case 2:
                  if (n) {
                    e.next = 7;
                    break;
                  }
                  return (e.next = 5), u(t, c);
                case 5:
                  return (
                    (a = e.sent),
                    e.abrupt(
                      "return",
                      a ? ((n = !0), { retcode: 2, data: a }) : { retcode: 1 }
                    )
                  );
                case 7:
                  return e.abrupt("return", { retcode: 0 });
                case 8:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      );
      return function (e, r) {
        return t.apply(this, arguments);
      };
    })();
  });
