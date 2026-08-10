var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  a = require("../../cgi/trade.js");
exports.useExchangeRate = function () {
  var n,
    c = t.ref({ buy_rate: 1, sell_rate: 1 });
  return {
    exchangeRate: c,
    fetchExchangeRate:
      ((n = r(
        e().mark(function r() {
          var t;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0), (e.next = 3), a.tradeCgi.fetchExchangeRate()
                    );
                  case 3:
                    (t = e.sent), (c.value = t), (e.next = 9);
                    break;
                  case 7:
                    (e.prev = 7), (e.t0 = e.catch(0));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 7]]
          );
        })
      )),
      function () {
        return n.apply(this, arguments);
      }),
  };
};
