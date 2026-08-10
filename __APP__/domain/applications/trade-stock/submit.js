var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js"),
  require("../../entities/trade-stock/stock-order.js"),
  (exports.generateParams = function (e) {
    var r = e.order.value;
    return {
      name: e.name.value,
      action: r.action,
      price: r.price,
      quantity: r.amount,
      holder: e.holder.value,
      matchType: e.matchType.value,
      market: e.market.value,
      code: e.code.value,
      stock_cls: e.stockCls.value,
    };
  }),
  (exports.submit = (function () {
    var a = t(
      e().mark(function t(a) {
        var n, u, o;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = a.stockOrder),
                  (u = a.data),
                  (o = a.token),
                  e.abrupt("return", n.submit(r(r({}, u), {}, { token: o })))
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, t);
      })
    );
    return function (e) {
      return a.apply(this, arguments);
    };
  })());
