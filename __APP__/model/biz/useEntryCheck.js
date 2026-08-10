var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../common/useServerTime.js");
require("../../service/broker.js");
var i = require("../../common/vendor.js"),
  a = require("../../config/broker/11100/index.js");
exports.useEntryCheck = function () {
  var s,
    u = n.useServerTime(),
    o = u.checkInTimeRange,
    c = u.getServerTime;
  return {
    checkChangeBankcard:
      ((s = t(
        e().mark(function t() {
          var n, s, u, d, m, v, b, h, k, l, p, T, f, q, y, g, j, x, C, S, w, D;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), c();
                case 2:
                  return (
                    (s = e.sent),
                    (u = s.date),
                    (d =
                      (null == (n = a.brokerConfig.hall)
                        ? void 0
                        : n.bankcard) || {}),
                    (m = d.startTime),
                    (v = void 0 === m ? [] : m),
                    (b = d.endTime),
                    (h = void 0 === b ? [] : b),
                    (k = d.checkTradeDay),
                    (l = void 0 === k || k),
                    (p = r(v, 2)),
                    (T = p[0]),
                    (f = void 0 === T ? 9 : T),
                    (q = p[1]),
                    (y = void 0 === q ? 0 : q),
                    (g = r(h, 2)),
                    (j = g[0]),
                    (x = void 0 === j ? 16 : j),
                    (C = g[1]),
                    (S = void 0 === C ? 0 : C),
                    (w = i
                      .dayjs(u)
                      .set("hour", f)
                      .set("minute", y)
                      .set("second", 0)),
                    (D = i
                      .dayjs(u)
                      .set("hour", x)
                      .set("minute", S)
                      .set("second", 0)),
                    (e.next = 25),
                    o({ checkTradeDay: l, startTime: w, endTime: D })
                  );
                case 25:
                  if (!e.sent) {
                    e.next = 29;
                    break;
                  }
                  (e.t0 = [!0]), (e.next = 30);
                  break;
                case 29:
                  e.t0 = [
                    !1,
                    { retmsg: "抱歉，该业务仅交易日<br>09:00-16:00支持办理" },
                  ];
                case 30:
                  return e.abrupt("return", e.t0);
                case 31:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )),
      function () {
        return s.apply(this, arguments);
      }),
  };
};
