var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var n = require("../../cgi/trade/quote.js"),
  u = require("../../common/vendor.js");
require("../../config/enum.js"),
  require("../../config/enum/trade.js"),
  require("../../service/broker.js");
var t = require("../../domain/applications/trade-stock/create-stock.js");
exports.useQuotes = function () {
  var c,
    o = new n.TradeQuoteService(),
    i = u.ref({}),
    a = u.computed(function () {
      var e;
      return (null == (e = i.value) ? void 0 : e.secu_quote) || {};
    });
  function f(e) {
    (e.secu_info.spread = +e.secu_info.spread || 0.01),
      (e.secu_info.spreadAcc =
        e.secu_info.spread && +e.secu_info.spread > 0
          ? parseFloat(String(1 / +e.secu_info.spread)).toFixed(0).length - 1
          : 2),
      (e.secu_info.trd_unit = +e.secu_info.trd_unit || 100);
  }
  function _(e) {
    var r,
      s = (null == (r = null == e ? void 0 : e.info) ? void 0 : r.class) || "",
      n = t.createStock(s, e);
    i.value = n;
  }
  function d(e, r) {
    var n, u;
    r.fromPush
      ? (function (e) {
          if (e.secu_info) {
            var r = s({}, e.secu_info);
            (r.name = e.secu_info.secu_name || e.info.name),
              (r.class = e.secu_info.secu_cls || e.info.class),
              (r.status = e.secu_info.secu_status || e.info.status),
              delete r.secu_name,
              delete r.secu_cls,
              delete r.secu_status,
              (e.info = r);
          }
          f(e);
        })(e)
      : ((n = e),
        (u = r.code),
        (n.secu_info = n.info),
        (n.secu_quote = n.quote),
        (n.secu_info.secu_name = n.info.name),
        (n.secu_info.secu_cls = n.info.class),
        (n.secu_info.secu_code = u),
        f(n)),
      _(e);
  }
  return {
    stock: i,
    quoteInfo: a,
    fetchQuotes:
      ((c = r(
        e().mark(function r(s) {
          var n;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), o.fetchQuotes(s);
                case 2:
                  return (
                    (n = e.sent),
                    e.abrupt(
                      "return",
                      (d(n, { fromPush: !1, code: s.code }), _(n), n)
                    )
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function (e) {
        return c.apply(this, arguments);
      }),
    handleQuoteRes: d,
    createStockInstance: _,
  };
};
