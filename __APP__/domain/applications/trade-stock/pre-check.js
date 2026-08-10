require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var c = require("../../../config/enum.js"),
  i = require("../../../model/trade/utils.js");
function u(e, c) {
  return new Promise(
    (function () {
      var i = t(
        r().mark(function t(i, u) {
          var a, o, s, l;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (
                      ((r.prev = 0),
                      (a = e()),
                      (o = n(a, 2)),
                      (s = o[0]),
                      (l = o[1]),
                      !s)
                    ) {
                      r.next = 4;
                      break;
                    }
                    return r.abrupt("return", i(!0));
                  case 4:
                    c(l)
                      .then(function () {
                        return i(!0);
                      })
                      .catch(function (e) {
                        return u(e);
                      }),
                      (r.next = 10);
                    break;
                  case 7:
                    (r.prev = 7), (r.t0 = r.catch(0)), u(r.t0);
                  case 10:
                  case "end":
                    return r.stop();
                }
            },
            t,
            null,
            [[0, 7]]
          );
        })
      );
      return function (e, r) {
        return i.apply(this, arguments);
      };
    })()
  );
}
function a(n) {
  return (function () {
    var a = t(
      r().mark(function t(a) {
        var o, s;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    (function (e) {
                      return u(e.checkPrice.bind(e), n.checkPriceValidHandler);
                    })(a)
                  );
                case 3:
                  return (
                    (r.next = 5),
                    (function (e) {
                      return u(
                        e.checkPriceMatchMinimumTickSize.bind(e),
                        n.checkPriceValidHandler
                      );
                    })(a)
                  );
                case 5:
                  if (((r.t0 = a.stock.isTradingHour), !r.t0)) {
                    r.next = 13;
                    break;
                  }
                  return (
                    (r.next = 9),
                    (function (e) {
                      return u(
                        e.checkPriceIsInLimitPriceRange.bind(e),
                        n.checkPriceHandler
                      );
                    })(a)
                  );
                case 9:
                  if (
                    ((r.t1 =
                      null == (o = n.options) ? void 0 : o.skipCheckCage),
                    r.t1)
                  ) {
                    r.next = 13;
                    break;
                  }
                  return (
                    (r.next = 13),
                    (function (r) {
                      var t,
                        a,
                        o =
                          (e(
                            (t = {}),
                            c.ACTION.AFTER_BUY,
                            r.isAfterBuyPriceMatch
                          ),
                          e(t, c.ACTION.AFTER_SELL, r.isAfterSellPriceMatch),
                          e(t, c.ACTION.BUY, r.isBuyPriceMatchPriceCageLimit),
                          e(t, c.ACTION.SELL, r.isSellPriceMatchPriceCageLimit),
                          t),
                        s =
                          (null == (a = n.options)
                            ? void 0
                            : a.specifiedAction) || r.order.action;
                      return (
                        i.isBuyAction(s) && s !== c.ACTION.AFTER_BUY
                          ? (s = c.ACTION.BUY)
                          : i.isBuyAction(s) ||
                            s === c.ACTION.AFTER_SELL ||
                            (s = c.ACTION.SELL),
                        u(o[s].bind(r), n.checkPriceHandler)
                      );
                    })(a)
                  );
                case 13:
                  r.next = 19;
                  break;
                case 15:
                  if (
                    ((r.prev = 15),
                    (r.t2 = r.catch(0)),
                    !(null == (s = n.options) ? void 0 : s.showTips) ||
                      ![
                        "price_zero",
                        "price_match_minimum_tick_size_error",
                      ].includes(r.t2))
                  ) {
                    r.next = 19;
                    break;
                  }
                  throw r.t2;
                case 19:
                case "end":
                  return r.stop();
              }
          },
          t,
          null,
          [[0, 15]]
        );
      })
    );
    return function (e) {
      return a.apply(this, arguments);
    };
  })();
}
(exports.check = function (e) {
  function c(e) {
    return o.apply(this, arguments);
  }
  function o() {
    return (o = t(
      r().mark(function n(t) {
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (
                  "--" !== t.account.max_sell_qty &&
                  "--" !== t.account.hold_qty &&
                  "--" !== t.account.route_qty
                ) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return", Promise.resolve(!0));
              case 2:
                return (
                  (r.next = 4),
                  (function (r) {
                    return u(
                      r.checkAmountNotEmpty.bind(r),
                      e.checkSellAmountValidHandler
                    );
                  })(t)
                );
              case 4:
                return (
                  (r.next = 6),
                  (function (r) {
                    return u(
                      r.checkOrderAmountCanSell.bind(r),
                      e.checkOrderAmountCanSellHandler
                    );
                  })(t)
                );
              case 6:
                return (
                  (r.next = 8),
                  (function (r) {
                    return u(
                      r.checkSellAmountInMaxLimit.bind(r),
                      e.checkSellAmountValidHandler
                    );
                  })(t)
                );
              case 8:
                return (
                  (r.next = 10),
                  (function (r) {
                    return u(
                      r.checkPartialAmount.bind(r),
                      e.checkSellAmountValidHandler
                    );
                  })(t)
                );
              case 10:
              case "end":
                return r.stop();
            }
        }, n);
      })
    )).apply(this, arguments);
  }
  return (function () {
    var o = t(
      r().mark(function o(s, l) {
        var h;
        return r().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (o.next = 2),
                  (function (r) {
                    return u(r.checkTradeRisk.bind(r), e.checkTradeRiskHandler);
                  })(s)
                );
              case 2:
                return (
                  (o.next = 4),
                  new Promise(
                    (function () {
                      var n = t(
                        r().mark(function n(t, c) {
                          return r().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (r.next = 2), e.checkCanTradeHandler();
                                case 2:
                                  if (!r.sent) {
                                    r.next = 6;
                                    break;
                                  }
                                  (r.t0 = t(!0)), (r.next = 7);
                                  break;
                                case 6:
                                  r.t0 = c("trade-risk");
                                case 7:
                                  return r.abrupt("return", r.t0);
                                case 8:
                                case "end":
                                  return r.stop();
                              }
                          }, n);
                        })
                      );
                      return function (e, r) {
                        return n.apply(this, arguments);
                      };
                    })()
                  )
                );
              case 4:
                return (
                  (h = a({
                    checkPriceHandler: e.checkPriceHandler,
                    checkPriceValidHandler: e.checkPriceValidHandler,
                    options: { showTips: !0 },
                  })),
                  (o.next = 7),
                  h(s)
                );
              case 7:
                if (!i.isBuyAction(s.order.action)) {
                  o.next = 16;
                  break;
                }
                return (
                  (o.next = 10),
                  (function (c, i) {
                    return new Promise(
                      (function () {
                        var u = t(
                          r().mark(function t(u, a) {
                            var o, s, l, h;
                            return r().wrap(function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if (
                                      ((o = c.checkAuth(i)),
                                      (s = n(o, 2)),
                                      (l = s[0]),
                                      (h = s[1]),
                                      !l)
                                    ) {
                                      r.next = 3;
                                      break;
                                    }
                                    return r.abrupt("return", u(!0));
                                  case 3:
                                    e.checkAuthHandle(h)
                                      .then(function () {
                                        return u(!0);
                                      })
                                      .catch(function (e) {
                                        return a(e);
                                      });
                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e, r) {
                          return u.apply(this, arguments);
                        };
                      })()
                    );
                  })(s, l)
                );
              case 10:
                return (
                  (o.next = 12),
                  (function (r) {
                    return u(
                      r.checkOrderPurchaseQuantity.bind(r),
                      e.checkBuyAmountHandler
                    );
                  })(s)
                );
              case 12:
                return (
                  (o.next = 14),
                  (function (r) {
                    return "--" === r.account.max_buy_qty
                      ? Promise.resolve(!0)
                      : u(
                          r.checkAccountMoney.bind(r),
                          e.checkAccountMoneyHandler
                        );
                  })(s)
                );
              case 14:
                o.next = 18;
                break;
              case 16:
                return (o.next = 18), c(s);
              case 18:
                return (
                  (o.next = 20),
                  (function (r) {
                    return e.checkOrderGGTStockholderHandler
                      ? u(
                          r.checkGGTStockholderCode.bind(r),
                          e.checkOrderGGTStockholderHandler
                        )
                      : Promise.resolve(!0);
                  })(s)
                );
              case 20:
              case "end":
                return o.stop();
            }
        }, o);
      })
    );
    return function (e, r) {
      return o.apply(this, arguments);
    };
  })();
}),
  (exports.checkPrice = a),
  (exports.handlerPromise = u);
