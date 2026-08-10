var r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../cgi/trade.js"),
  n = require("../../../utils/market.js");
function u(r) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
    t = Number(r);
  return Number.isNaN(t) ? "--" : t.toFixed(e);
}
function a(r) {
  return i.apply(this, arguments);
}
function i() {
  return (i = e(
    r().mark(function e(a) {
      var i;
      return r().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if ((i = a.quote)) {
                  r.next = 3;
                  break;
                }
                return r.abrupt("return", null);
              case 3:
                return (
                  (r.prev = 3),
                  (r.t0 = function (r, e) {
                    var t,
                      n,
                      a,
                      i,
                      c,
                      o,
                      s,
                      l =
                        (null == r ? void 0 : r.secu_quote) ||
                        (null == r ? void 0 : r.quote) ||
                        r;
                    if (!l) return null;
                    var p =
                        null !==
                          (t =
                            null !==
                              (n =
                                null !== (a = l.dqj) && void 0 !== a
                                  ? a
                                  : l.zxj) && void 0 !== n
                              ? n
                              : l.price) && void 0 !== t
                          ? t
                          : "--",
                      f =
                        null !==
                          (i =
                            null !== (c = l.zde) && void 0 !== c
                              ? c
                              : l.change) && void 0 !== i
                          ? i
                          : "--",
                      d =
                        null !==
                          (o =
                            null !== (s = l.zdf) && void 0 !== s
                              ? s
                              : l.changePct) && void 0 !== o
                          ? o
                          : "--",
                      v = Number(f),
                      h = !Number.isNaN(v) && v >= 0,
                      b = String(d).includes("%")
                        ? String(d)
                        : "".concat(u(d), "%");
                    return {
                      price: u(p),
                      change: v >= 0 ? "+".concat(u(f)) : u(f),
                      changePct:
                        b.startsWith("+") || b.startsWith("-")
                          ? b
                          : "".concat(h ? "+" : "").concat(b),
                      label: e,
                      isUp: h,
                    };
                  }),
                  (r.next = 7),
                  t.tradeCgi.stockInfo({
                    market: n.transferMarketToTrade(i.market),
                    code: i.code,
                    needquote: 1,
                  })
                );
              case 7:
                return (
                  (r.t1 = r.sent),
                  (r.t2 = i.label),
                  r.abrupt("return", (0, r.t0)(r.t1, r.t2))
                );
              case 12:
                return (
                  (r.prev = 12), (r.t3 = r.catch(3)), r.abrupt("return", null)
                );
              case 15:
              case "end":
                return r.stop();
            }
        },
        e,
        null,
        [[3, 12]]
      );
    })
  )).apply(this, arguments);
}
exports.fetchQuoteSnapshots = (function () {
  var t = e(
    r().mark(function t(n) {
      var u, i;
      return r().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (u = n.filter(function (r, e, t) {
                  return (
                    t.findIndex(function (e) {
                      return e.configKey === r.configKey;
                    }) === e
                  );
                })),
                (t.next = 3),
                Promise.all(
                  u.map(
                    (function () {
                      var t = e(
                        r().mark(function e(t) {
                          var n;
                          return r().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (r.next = 2), a(t);
                                case 2:
                                  return (
                                    (n = r.sent),
                                    r.abrupt("return", [t.configKey, n])
                                  );
                                case 4:
                                case "end":
                                  return r.stop();
                              }
                          }, e);
                        })
                      );
                      return function (r) {
                        return t.apply(this, arguments);
                      };
                    })()
                  )
                )
              );
            case 3:
              return (i = t.sent), t.abrupt("return", Object.fromEntries(i));
            case 5:
            case "end":
              return t.stop();
          }
      }, t);
    })
  );
  return function (r) {
    return t.apply(this, arguments);
  };
})();
