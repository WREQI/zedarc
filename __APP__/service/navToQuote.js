var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var n = require("../common/vendor.js"),
  a = require("../cgi/newstock.js"),
  c = {};
function o(e) {
  return s.apply(this, arguments);
}
function s() {
  return (s = t(
    e().mark(function t(n) {
      var o, s, u;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((o = "".concat(n.code, "-").concat(n.market)),
                  !(null == (s = c[o]) ? void 0 : s.code))
                ) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(
                  "return",
                  ((n.code = s.code),
                  (n.name = s.name),
                  (n.market = s.market),
                  void (n.is_ggt_code = s.is_ggt_code))
                );
              case 3:
                return (
                  (e.prev = 3),
                  (e.next = 6),
                  a.newstockCgi.qryStockCode({
                    purchase_code: n.code,
                    market: n.market || "",
                  })
                );
              case 6:
                (u = e.sent),
                  (n.code = u.stock_code || n.code),
                  (n.name = u.stock_name || n.name),
                  (n.market = u.market || n.market),
                  (n.is_ggt_code = u.is_ggt_code),
                  (c[o] = r({}, n)),
                  (e.next = 12);
                break;
              case 10:
                (e.prev = 10), (e.t0 = e.catch(3));
              case 12:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[3, 10]]
      );
    })
  )).apply(this, arguments);
}
(exports.formatData = o),
  (exports.navToQuote = (function () {
    var a = t(
      e().mark(function t(a, c) {
        var s;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (s = r({}, a)), (e.next = 3), o(s).catch(function (e) {})
                );
              case 3:
                n.index.$host.onNavToQuote(s, c);
              case 4:
              case "end":
                return e.stop();
            }
        }, t);
      })
    );
    return function (e, r) {
      return a.apply(this, arguments);
    };
  })());
