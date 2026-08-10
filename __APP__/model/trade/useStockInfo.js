var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  s = require("../../cgi/trade.js"),
  t = n.ref({});
function c(e) {
  return !e || 0 == +e || "-" === e;
}
(exports.KC_MIN_TRADE = 200),
  (exports.isZeroValue = c),
  (exports.useStockInfo = function () {
    var o,
      a = n.computed(function () {
        return n.get(t.value, "secu_info.secu_name", "");
      }),
      u = n.computed(function () {
        var e = n.cloneDeep(t.value);
        if (n.isEmpty(e))
          return {
            percent: { buy: "--", sell: "--" },
            fiveTrans: {},
            yestodayPrice: 0,
          };
        for (
          var r = { buy: "--", sell: "--" },
            s = 0,
            o = 0,
            a = parseFloat(e.secu_quote.zsj) || 0,
            u = 1;
          u < 6;
          u++
        ) {
          var i = e.five_trans["mrsl".concat(u)],
            f = e.five_trans["mcsl".concat(u)];
          c(i) || (s += parseInt(i, 10)),
            c(f) || (o += parseInt(f, 10)),
            c(parseFloat(e.five_trans["mrjg".concat(u)])) &&
              (e.five_trans["mrjg".concat(u)] = "-"),
            c(parseFloat(e.five_trans["mcjg".concat(u)])) &&
              (e.five_trans["mcjg".concat(u)] = "-");
        }
        var l = s + o;
        return (
          0 === l && (l = 1),
          (r.buy = (100 * parseFloat(String(s / l))).toFixed(2)),
          (r.sell = (100 * parseFloat(String(o / l))).toFixed(2)),
          ("0.00" === r.buy || Number.isNaN(r.buy)) && (r.buy = "0"),
          ("0.00" === r.sell || Number.isNaN(r.sell)) && (r.sell = "0"),
          { percent: r, fiveTrans: e.five_trans, yestodayPrice: a }
        );
      });
    function i(e) {
      var r, n;
      e.fromPush
        ? f(e.res)
        : ((r = e.res),
          (n = e.code),
          (r.secu_info = r.info),
          (r.secu_quote = r.quote),
          (r.secu_info.secu_name = r.info.name),
          (r.secu_info.secu_cls = r.info.class),
          (r.secu_info.secu_code = n),
          f(r)),
        (t.value = e.res);
    }
    function f(e) {
      (e.secu_info.spread = +e.secu_info.spread || 0.01),
        (e.secu_info.spreadAcc =
          e.secu_info.spread && e.secu_info.spread > 0
            ? parseFloat(String(1 / e.secu_info.spread)).toFixed(0).length - 1
            : 2),
        (e.secu_info.trd_unit = +e.secu_info.trd_unit || 100),
        (e.secu_info.minTrade =
          "k" === e.secu_info.secu_cls.toLowerCase()
            ? 200
            : e.secu_info.trd_unit);
    }
    return {
      stockInfo: t,
      stockName: a,
      transInfo: u,
      fetchStockInfo:
        ((o = r(
          e().mark(function r(n) {
            var t;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), s.tradeCgi.stockInfo(n)
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        e.abrupt("return", (i({ res: t, code: n.code }), t))
                      );
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
        function (e) {
          return o.apply(this, arguments);
        }),
      handleFetchStockInfo: i,
    };
  });
