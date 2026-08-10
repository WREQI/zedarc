var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../cgi/trade/quote.js"),
  a = require("../../../config/enum/condition.js"),
  c = require("../../../common/vendor.js"),
  u = require("../../../filters/money.js"),
  s = require("../../../common/utils/colorHelper.js"),
  o = require("../../../config/enum.js");
exports.useCondTag = function () {
  var i,
    p = new n.TradeQuoteService(),
    d = c.ref({});
  function l(e) {
    var r;
    if (!e.dqj || !e.base_price || !e.grid_type)
      return { tagsValue: 0, tagsText: "" };
    if (e.grid_type === a.GridType.Absolute) {
      var t =
          (null == (r = e.base_price.split(".")[1]) ? void 0 : r.length) || 2,
        n = c.__CJS__export_reduce__(+e.dqj, +e.base_price);
      return {
        tagsValueFormatted: u.formatNoUnit(n, !0, t),
        tagsValue: n,
        tagsText: n >= 0 ? "已上涨" : "已下跌",
      };
    }
    if (e.grid_type === a.GridType.Percent) {
      var s = c.__CJS__export_reduce__(+e.dqj, +e.base_price),
        o = u.divNoFixed(s, +e.base_price),
        i = Math.floor(o * Math.pow(10, 4)) / Math.pow(10, 4),
        p = c.__CJS__export_mul__(i, 100);
      return {
        tagsValueFormatted: "".concat(u.formatNoUnit(p, !0, 2), "%"),
        tagsValue: p,
        tagsText: p >= 0 ? "已上涨" : "已下跌",
      };
    }
    return { tagsValue: 0, tagsText: "" };
  }
  return {
    calcTags:
      ((i = t(
        e().mark(function n(a) {
          var u;
          return e().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (a && 0 !== a.length) {
                    n.next = 2;
                    break;
                  }
                  return n.abrupt("return");
                case 2:
                  return (
                    (n.next = 4),
                    (function () {
                      var n = t(
                        e().mark(function t(n, a) {
                          var u, i, d, l, _;
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((e.prev = 0),
                                      (u = n.map(function (e) {
                                        return r(
                                          r({}, e),
                                          {},
                                          {
                                            market: e.market || e.trade_market,
                                            scode: e.scode || e.stock_code,
                                          }
                                        );
                                      })),
                                      (i = u.map(function (e) {
                                        return ""
                                          .concat(e.market, ":")
                                          .concat(e.scode);
                                      })).length)
                                    ) {
                                      e.next = 4;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 4:
                                    return (
                                      (e.next = 6),
                                      p.fetchQuotesBatch({ type: 4, secus: i })
                                    );
                                  case 6:
                                    if (
                                      !(
                                        (d = e.sent) &&
                                        d.slist &&
                                        d.slist.length
                                      )
                                    ) {
                                      e.next = 10;
                                      break;
                                    }
                                    return (
                                      (l = c.keyBy(d.slist, function (e) {
                                        return ""
                                          .concat(e.market, "_")
                                          .concat(e.code);
                                      })),
                                      (_ = r({}, a)),
                                      e.abrupt(
                                        "return",
                                        (u.forEach(function (e) {
                                          var t,
                                            n = ""
                                              .concat(e.market, "_")
                                              .concat(e.scode);
                                          _[
                                            ""
                                              .concat(
                                                e.cond_id || "default",
                                                "_"
                                              )
                                              .concat(n)
                                          ] = r(
                                            r(
                                              r(
                                                r({}, l[n] || {}),
                                                {},
                                                { base_price: e.base_price },
                                                e.grid_type
                                                  ? { grid_type: e.grid_type }
                                                  : {}
                                              ),
                                              "理财扫单" === e.type_desc
                                                ? l[n]
                                                  ? {
                                                      dqj: "".concat(
                                                        l[n].dqj,
                                                        "%"
                                                      ),
                                                      zdf: null,
                                                    }
                                                  : { dqj: null, zdf: null }
                                                : {}
                                            ),
                                            {},
                                            {
                                              class:
                                                "理财扫单" === e.type_desc
                                                  ? o.Quotes.RISE
                                                  : s.redOrGreen(
                                                      null == (t = l[n])
                                                        ? void 0
                                                        : t.zdf
                                                    ),
                                            }
                                          );
                                        }),
                                        _)
                                      )
                                    );
                                  case 10:
                                    e.next = 14;
                                    break;
                                  case 12:
                                    (e.prev = 12), (e.t0 = e.catch(0));
                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 12]]
                          );
                        })
                      );
                      return function (e, r) {
                        return n.apply(this, arguments);
                      };
                    })()(a, d.value)
                  );
                case 4:
                  (u = n.sent) &&
                    !c.isEmpty(u) &&
                    (Object.keys(u).forEach(function (e) {
                      Object.assign(u[e], r({}, l(u[e])));
                    }),
                    (d.value = u));
                case 6:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      )),
      function (e) {
        return i.apply(this, arguments);
      }),
    condTagMaps: d,
  };
};
