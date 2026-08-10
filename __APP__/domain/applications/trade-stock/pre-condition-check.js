var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../config/enum.js");
exports.check = function (c) {
  function u(t, c) {
    return new Promise(
      (function () {
        var u = n(
          e().mark(function n(u, a) {
            var i, s, o, f;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((i = t()), (s = r(i, 2)), (o = s[0]), (f = s[1]), !o)
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", u(!0));
                  case 3:
                    c(f)
                      .then(function () {
                        return u(!0);
                      })
                      .catch(function (e) {
                        return a(e);
                      });
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        );
        return function (e, r) {
          return u.apply(this, arguments);
        };
      })()
    );
  }
  return (function () {
    var a = n(
      e().mark(function a(i, s, o, f) {
        return e().wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (
                  (a.next = 2),
                  (function (e) {
                    return u(
                      e.checkInputComplete.bind(e),
                      c.checkInputCompleteHandler
                    );
                  })(i)
                );
              case 2:
                return (
                  (a.next = 4),
                  (function (e) {
                    return u(e.checkTradeRisk.bind(e), c.checkTradeRiskHandler);
                  })(i)
                );
              case 4:
                return (
                  (a.next = 6),
                  new Promise(
                    (function () {
                      var r = n(
                        e().mark(function r(n, t) {
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), c.checkCanTradeHandler();
                                case 2:
                                  if (!e.sent) {
                                    e.next = 6;
                                    break;
                                  }
                                  (e.t0 = n(!0)), (e.next = 7);
                                  break;
                                case 6:
                                  e.t0 = t("trade-risk");
                                case 7:
                                  return e.abrupt("return", e.t0);
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })
                      );
                      return function (e, n) {
                        return r.apply(this, arguments);
                      };
                    })()
                  )
                );
              case 6:
                if (i.order.tradeType !== t.ACTION.BUY) {
                  a.next = 15;
                  break;
                }
                return (
                  (a.next = 9),
                  (function (t, u) {
                    return new Promise(
                      (function () {
                        var a = n(
                          e().mark(function n(a) {
                            var i, s, o, f;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((i = t.checkAuth(u)),
                                      (s = r(i, 2)),
                                      (o = s[0]),
                                      (f = s[1]),
                                      !o)
                                    ) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return", a(!0));
                                  case 3:
                                    return (e.next = 5), c.checkAuthHandle(f);
                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, n);
                          })
                        );
                        return function (e) {
                          return a.apply(this, arguments);
                        };
                      })()
                    );
                  })(i, f)
                );
              case 9:
                return (
                  (a.next = 11),
                  (function (e) {
                    return u(
                      e.checkOrderPurchaseQuantity.bind(e),
                      c.checkOrderPurchaseQuantityHandler
                    );
                  })(i)
                );
              case 11:
                return (
                  (a.next = 13),
                  (function (e) {
                    return u(
                      e.checkIsInLimitChgRange.bind(e),
                      c.checkIsInLimitChgRangeHandler
                    );
                  })(i)
                );
              case 13:
                a.next = 19;
                break;
              case 15:
                return (
                  (a.next = 17),
                  (function (e) {
                    return u(
                      e.checkSellAmountInMaxLimit.bind(e),
                      c.checkSellAmountInMaxLimitHandler
                    );
                  })(i)
                );
              case 17:
                return (
                  (a.next = 19),
                  (function (e) {
                    return u(
                      e.checkPartialAmount.bind(e),
                      c.checkPartialAmountHandler
                    );
                  })(i)
                );
              case 19:
                return (
                  (a.next = 21),
                  (function (t, u, a) {
                    return new Promise(
                      (function () {
                        var i = n(
                          e().mark(function n(i) {
                            var s, o, f, p;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((s = t.checkValidDay(u, a)),
                                      (o = r(s, 2)),
                                      (f = o[0]),
                                      (p = o[1]),
                                      !f)
                                    ) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return", i(!0));
                                  case 3:
                                    return (
                                      (e.next = 5), c.checkValidDayHandler(p)
                                    );
                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, n);
                          })
                        );
                        return function (e) {
                          return i.apply(this, arguments);
                        };
                      })()
                    );
                  })(i, s, o)
                );
              case 21:
              case "end":
                return a.stop();
            }
        }, a);
      })
    );
    return function (e, r, n, t) {
      return a.apply(this, arguments);
    };
  })();
};
