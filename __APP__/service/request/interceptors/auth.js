var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../broker.js");
var t = require("../../log/index.js"),
  u = require("../../aegis/platform/not-wujie.js"),
  o = require("../../../stores/app/context.js"),
  i = new t.Log(),
  a = [],
  s = !1;
exports.checkLogin = (function () {
  var t = r(
    e().mark(function r(t) {
      var c, p, l;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t.checkLogin) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", t);
              case 2:
                return (
                  (e.prev = 2),
                  (c = o.useAppContext()),
                  (p = c.login),
                  (e.next = 6),
                  p.isLogin({ url: t.url })
                );
              case 6:
                if (e.sent) {
                  e.next = 10;
                  break;
                }
                return (
                  (l = new Promise(function (e) {
                    a.push({ url: t.url, resolve: e }),
                      s ||
                        ((s = !0),
                        p
                          .login(n.H5_MAIN_LOGIN_TYPE.BROKER)
                          .then(function () {
                            (s = !1),
                              i.info(
                                "登录队列：".concat(
                                  a
                                    .map(function (e) {
                                      return e.url;
                                    })
                                    .join("|")
                                )
                              );
                            for (var e = null; (e = a.shift()); )
                              e.resolve(),
                                i.info(
                                  "正在消费登录队列项："
                                    .concat(e.url, ", 剩余")
                                    .concat(a.length, "项")
                                );
                          })
                          .catch(function (e) {
                            throw (
                              ((s = !1),
                              (a = []),
                              u.aegisReporter.reportEvent("ERR-LOGIN-FAIL", {
                                ext2: JSON.stringify(e || {}),
                              }),
                              e)
                            );
                          }));
                  })),
                  (e.next = 10),
                  l
                );
              case 10:
                e.next = 14;
                break;
              case 12:
                (e.prev = 12), (e.t0 = e.catch(2));
              case 14:
                return e.abrupt("return", t);
              case 15:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[2, 12]]
      );
    })
  );
  return function (e) {
    return t.apply(this, arguments);
  };
})();
