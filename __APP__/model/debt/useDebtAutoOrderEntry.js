var r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("../../stores/user/useUserinfo.js"),
  u = require("../../cgi/debt.js"),
  s = require("./useDebtAutoOrder.js"),
  a = require("../../utils/getPlatform.js");
exports.useDebtAutoOrderEntry = function () {
  var i,
    o = n.useUserinfoStore(),
    c = a.getPlatform().isOEM,
    p = t.computed(function () {
      var r;
      return (
        "1" === (null == (r = o.userinfo) ? void 0 : r.is_repo_cond_gray) && !c
      );
    });
  function b() {
    return f.apply(this, arguments);
  }
  function f() {
    return (f = e(
      r().mark(function e() {
        var t;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0), (r.next = 3), u.debtApi.qryRepoCondStatus()
                  );
                case 3:
                  (t = r.sent.status), (r.next = 8);
                  break;
                case 6:
                  (r.prev = 6), (r.t0 = r.catch(0));
                case 8:
                  return r.abrupt("return", t);
                case 9:
                case "end":
                  return r.stop();
              }
          },
          e,
          null,
          [[0, 6]]
        );
      })
    )).apply(this, arguments);
  }
  return {
    AUTO_ORDER_STATUS: s.AUTO_ORDER_STATUS,
    isDebtAutoOrderEntry: p,
    qryDebtAutoOrderStatus: b,
    isDebtAutoOrderSetted:
      ((i = e(
        r().mark(function e() {
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (((r.prev = 0), p.value)) {
                      r.next = 3;
                      break;
                    }
                    return r.abrupt("return", !1);
                  case 3:
                    return (r.next = 5), b();
                  case 5:
                    return (
                      (r.t0 = r.sent),
                      (r.t1 = s.AUTO_ORDER_STATUS.START),
                      r.abrupt("return", r.t0 === r.t1)
                    );
                  case 10:
                    return (
                      (r.prev = 10), (r.t2 = r.catch(0)), r.abrupt("return", !1)
                    );
                  case 13:
                  case "end":
                    return r.stop();
                }
            },
            e,
            null,
            [[0, 10]]
          );
        })
      )),
      function () {
        return i.apply(this, arguments);
      }),
  };
};
