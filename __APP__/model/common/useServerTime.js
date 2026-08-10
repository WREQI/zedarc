var e = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../common/vendor.js"),
  s = require("../../cgi/system.js"),
  u = require("../../config/enum.js"),
  c = require("../../config/enum/condition.js");
require("../../service/broker.js");
var o = require("../../config/broker/11100/index.js");
i.dayjs.extend(i.isBetween),
  (exports.useServerTime = function () {
    function d(e) {
      var r = new Date().getTimezoneOffset() / 60;
      return {
        date:
          -8 === r
            ? new Date(Math.floor(1e3 * +e))
            : new Date(Math.floor(1e3 * +e) + 36e5 * (8 + r)),
      };
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (p = a(
        t().mark(function r() {
          var n, a, i, c, o;
          return t().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.prev = 0), (r.next = 3), s.systemCgi.serverTime();
                  case 3:
                    return (
                      (a = r.sent),
                      (i = d(a.servertime)),
                      (c = i.date),
                      r.abrupt("return", {
                        date: c,
                        marketState:
                          ((n = {}),
                          e(n, u.MARKET.HA, a.market_state_h),
                          e(n, u.MARKET.SA, a.market_state_s),
                          e(n, u.MARKET.HK, a.market_state_hk),
                          e(n, u.MARKET.BJ, a.market_state_bj),
                          e(n, u.MARKET.NQ, a.market_state_nq),
                          n),
                      })
                    );
                  case 9:
                    return (
                      (r.prev = 9),
                      (r.t0 = r.catch(0)),
                      r.abrupt("return", {
                        date: new Date(),
                        marketState:
                          ((o = {}),
                          e(o, u.MARKET.HA, "-2"),
                          e(o, u.MARKET.SA, "-2"),
                          e(o, u.MARKET.HK, "-2"),
                          e(o, u.MARKET.BJ, "-2"),
                          e(o, u.MARKET.NQ, "-2"),
                          o),
                      })
                    );
                  case 12:
                  case "end":
                    return r.stop();
                }
            },
            r,
            null,
            [[0, 9]]
          );
        })
      )).apply(this, arguments);
    }
    function T() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.bankAbbr,
        t = e.date,
        a = 9,
        s = 0,
        u = 0,
        c = 16,
        d = 0,
        m = 0,
        p = o.brokerConfig.transfer || {},
        T = p.bankTime,
        f = void 0 === T ? {} : T;
      if ((r && f[r]) || f.default) {
        var v,
          h,
          l,
          b,
          k,
          y,
          A,
          j,
          x = f[r] || f.default,
          M = x.startTime,
          R = void 0 === M ? [] : M,
          g = x.endTime,
          w = void 0 === g ? [] : g;
        (a = void 0 === (h = (v = n(R, 3))[0]) ? 9 : h),
          (s = void 0 === (l = v[1]) ? 0 : l),
          (u = void 0 === (b = v[2]) ? 0 : b),
          (c = void 0 === (y = (k = n(w, 3))[0]) ? 16 : y),
          (d = void 0 === (A = k[1]) ? 0 : A),
          (m = void 0 === (j = k[2]) ? 0 : j);
      }
      var E = i.dayjs(t).set("hour", a).set("minute", s).set("second", u),
        K = i.dayjs(t).set("hour", c).set("minute", d).set("second", m);
      return { isTradeTime: i.dayjs(t).isBetween(E, K) };
    }
    function f(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (v = a(
        t().mark(function e(r) {
          var n, a, s, c, o, d, p, T, f, v, h;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = r.checkTradeDay),
                    (a = void 0 === n || n),
                    (s = r.startTime),
                    (c = r.endTime),
                    (e.next = 3),
                    m()
                  );
                case 3:
                  if (
                    ((o = e.sent),
                    (d = o.date),
                    (p = o.marketState),
                    (T = "-1" !== p[u.MARKET.HA] && "-1" !== p[u.MARKET.SA]),
                    !a || T)
                  ) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 9:
                  if (((f = !1), s && c))
                    try {
                      (v = i.dayjs.isDayjs(s) ? s : i.dayjs(s)),
                        (h = i.dayjs.isDayjs(c) ? c : i.dayjs(c)),
                        (f = i.dayjs(d).isBetween(v, h, "second", []));
                    } catch (e) {}
                  return e.abrupt("return", f);
                case 12:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    return {
      getServerTime: m,
      checkTransferTime:
        ((k = a(
          t().mark(function e() {
            var r,
              n,
              a,
              s,
              c,
              o,
              d,
              p,
              f = arguments;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = f.length > 0 && void 0 !== f[0] ? f[0] : {}),
                        (n = r.bankAbbr),
                        (a = void 0 === n ? "" : n),
                        (e.prev = 1),
                        (e.next = 4),
                        m()
                      );
                    case 4:
                      return (
                        (s = e.sent),
                        (c = s.date),
                        (o = s.marketState),
                        (d = T({ bankAbbr: a, date: c })),
                        (p = d.isTradeTime),
                        e.abrupt("return", {
                          date: c,
                          isTradeDay:
                            "-1" !== o[u.MARKET.HA] && "-1" !== o[u.MARKET.SA],
                          isTradeTime: p,
                        })
                      );
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(1)),
                        i.index.showToast({ title: e.t0.retmsg });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12]]
            );
          })
        )),
        function () {
          return k.apply(this, arguments);
        }),
      checkInTimeRange: f,
      handleMarketOpen: function (e) {
        var r,
          t,
          n,
          a,
          s = e.handle,
          u = e.unopenDelayExecSec;
        if ("function" == typeof s)
          return m().then(function (e) {
            var c = e.date;
            r = 60 * c.getHours() + c.getMinutes();
            var o = i
              .dayjs(c)
              .set("hour", 9)
              .set("minute", 30)
              .set("second", 0);
            return (
              i.dayjs(c).isBefore(o) &&
                (n = setTimeout(function () {
                  t = s();
                }, 1e3 *
                  (60 *
                    (r < 570
                      ? 570 - r
                      : r > 690 && r < 780
                      ? 780 - r
                      : void 0) +
                    (u || 0) -
                    c.getSeconds()))),
              (a = setTimeout(function () {
                t && (clearTimeout(t), clearInterval(t)),
                  n && clearTimeout(n),
                  a && clearTimeout(a);
              }, 60 * (r < 690 ? 690 - r : r < 900 ? 900 - r : 0) * 1e3)),
              function () {
                n && (clearTimeout(n), (n = null)),
                  a && (clearTimeout(a), (a = null));
              }
            );
          });
      },
      checkTradeDay:
        ((b = a(
          t().mark(function e() {
            var r, n;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), m();
                  case 2:
                    return (
                      (r = e.sent),
                      (n =
                        "-1" !== r.marketState[u.MARKET.HA] &&
                        "-1" !== r.marketState[u.MARKET.SA]),
                      e.abrupt("return", { date: r.date, isTradeDay: n })
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return b.apply(this, arguments);
        }),
      checkConditionRunningTime:
        ((l = a(
          t().mark(function e() {
            var n, a, s, u, o, d, p, T;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), m();
                    case 3:
                      (n = e.sent),
                        (a = n.date),
                        (s = !1),
                        (u = r(c.COND_RUNNING_TIME_RANGE)),
                        (e.prev = 7),
                        u.s();
                    case 9:
                      if ((o = u.n()).done) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (d = o.value),
                        (p = i
                          .dayjs(a)
                          .set("hour", d.begin.hour)
                          .set("minute", d.begin.minute)),
                        (T = i
                          .dayjs(a)
                          .set("hour", d.end.hour)
                          .set("minute", d.end.minute)),
                        (e.next = 14),
                        f({ checkTradeDay: !0, startTime: p, endTime: T })
                      );
                    case 14:
                      if (!e.sent) {
                        e.next = 17;
                        break;
                      }
                      return (s = !0), e.abrupt("break", 19);
                    case 17:
                      e.next = 9;
                      break;
                    case 19:
                      e.next = 24;
                      break;
                    case 21:
                      (e.prev = 21), (e.t0 = e.catch(7)), u.e(e.t0);
                    case 24:
                      return (e.prev = 24), u.f(), e.finish(24);
                    case 27:
                      return e.abrupt("return", s);
                    case 30:
                      return (
                        (e.prev = 30),
                        (e.t1 = e.catch(0)),
                        e.abrupt("return", !0)
                      );
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [0, 30],
                [7, 21, 24, 27],
              ]
            );
          })
        )),
        function () {
          return l.apply(this, arguments);
        }),
      processTimeToTransferTime:
        ((h = a(
          t().mark(function e() {
            var r,
              n,
              a,
              i,
              s,
              u,
              c,
              o,
              m = arguments;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = m.length > 0 && void 0 !== m[0] ? m[0] : {}),
                      (n = r.bankAbbr),
                      (a = void 0 === n ? "" : n),
                      (i = r.serverTime),
                      (s = d(i)),
                      (u = s.date),
                      (c = T({ bankAbbr: a, date: u })),
                      (o = c.isTradeTime),
                      e.abrupt("return", { date: u, isTradeTime: o })
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return h.apply(this, arguments);
        }),
    };
    var h, l, b, k;
  });
