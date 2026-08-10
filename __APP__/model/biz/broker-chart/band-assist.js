var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var s = require("../../../common/vendor.js"),
  n = require("../../../cgi/trade/quote.js");
require("../../../service/broker.js");
var u = require("../../../stores/user/useUserinfo.js"),
  a = require("../../../utils/getPlatform.js"),
  i = require("../../../config/broker/11100/index.js"),
  o = ["A", "S", "NG", "C"],
  c = ["ETF"];
function l(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return !!o.includes(e) || ("F" === e && c.includes(r));
}
var p = new n.TradeQuoteService();
function f(e, r) {
  return v.apply(this, arguments);
}
function v() {
  return (v = t(
    e().mark(function r(t, s) {
      var n, u;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((n = { stockClass: "", stockType: "" }), t && s)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", n);
              case 3:
                return (
                  (e.prev = 3),
                  (e.next = 6),
                  p.fetchQuotes({
                    code: t,
                    market: s,
                    needquote: "1",
                    needfive: "0",
                  })
                );
              case 6:
                return (
                  (u = e.sent),
                  e.abrupt("return", {
                    stockClass: (null == u ? void 0 : u.stock_cls) || "",
                    stockType: (null == u ? void 0 : u.stocktype) || "",
                  })
                );
              case 10:
                return (
                  (e.prev = 10), (e.t0 = e.catch(3)), e.abrupt("return", n)
                );
              case 13:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[3, 10]]
      );
    })
  )).apply(this, arguments);
}
(exports.fetchBandAssistStockQuoteMeta = f),
  (exports.isBandAssistSupportedStockClass = l),
  (exports.useBandAssistVisibility = function (n) {
    var o,
      c = n.scode,
      p = n.market,
      v = a.getPlatform().isOEM,
      d = (i.brokerConfig.dictionary || {}).Enties,
      b = void 0 === d ? {} : d,
      k = !!b.bandAssist && !(null == (o = b.bandAssist) ? void 0 : o.hidden),
      m = s.ref(!1),
      x = s.ref(!1),
      h = s.ref({ stockClass: "", stockType: "" }),
      q = s.computed(function () {
        var e = h.value;
        return l(e.stockClass, e.stockType);
      }),
      y = s.computed(function () {
        return !v && k && m.value && q.value;
      }),
      A = s.computed(function () {
        return y.value && x.value;
      }),
      T = u.useUserinfoStore(),
      g = T.getUserInfo,
      C = T.forceGetUserInfo,
      j = !1;
    function S(e) {
      (m.value = "1" === e.band_assist_control),
        (x.value = "1" === e.band_assist_status);
    }
    return (
      s.onBeforeUnmount(function () {
        j = !0;
      }),
      t(
        e().mark(function t() {
          var s, n, u, a, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (v) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (e.prev = 1), (e.next = 4), Promise.all([g(), f(c, p)])
                    );
                  case 4:
                    if (
                      ((s = e.sent), (n = r(s, 2)), (u = n[0]), (a = n[1]), !j)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return");
                  case 10:
                    if (
                      ((h.value = a),
                      S(u),
                      !(k && m.value && l(a.stockClass, a.stockType)))
                    ) {
                      e.next = 17;
                      break;
                    }
                    return (e.next = 13), C({ action: 1 });
                  case 13:
                    if (((i = e.sent), !j)) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return");
                  case 16:
                    i && S(i);
                  case 17:
                    e.next = 21;
                    break;
                  case 19:
                    (e.prev = 19), (e.t0 = e.catch(1));
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[1, 19]]
          );
        })
      )(),
      { isAvailable: y, isEffective: A, isSubscribed: x }
    );
  });
