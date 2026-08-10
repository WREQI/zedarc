var e,
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../@babel/runtime/helpers/typeof"),
  s = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  u = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  p = function (e, t, r) {
    return t in e
      ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  f = function (e, t) {
    for (var r in t || (t = {})) c.call(t, r) && p(e, r, t[r]);
    if (i) {
      var n,
        u = s(i(t));
      try {
        for (u.s(); !(n = u.n()).done; ) {
          r = n.value;
          l.call(t, r) && p(e, r, t[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return o(e, a(t));
  },
  v = function (e, t, r) {
    return new Promise(function (n, s) {
      var u = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(u, o);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  m = require("../utils/StockBridgeWrapper.js"),
  h = require("../../../../../common/vendor.js");
(e = { exports: {} }),
  h.commonjsGlobal,
  (e.exports = (function (e) {
    var t = (function (e) {
        return e && "object" == n(e) && "default" in e ? e : { default: e };
      })(h.dayjs_minExports),
      r = {
        name: "zh-cn",
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        ordinal: function (e, t) {
          return "W" === t ? e + "周" : e + "日";
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年",
        },
        meridiem: function (e, t) {
          var r = 100 * e + t;
          return r < 600
            ? "凌晨"
            : r < 900
            ? "早上"
            : r < 1100
            ? "上午"
            : r < 1300
            ? "中午"
            : r < 1800
            ? "下午"
            : "晚上";
        },
      };
    return t.default.locale(r, null, !0), r;
  })()),
  h.dayjs.locale("zh-cn");
var _ = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return v(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return r().mark(function t() {
        var n, s, u, o, a;
        return r().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (n =
                      "https://wzq.tenpay.com/svr/openclaw/user/get_claw_bot_status"),
                    (s = {}),
                    (o = (u = e || {}).openid),
                    (a = u.fskey),
                    (s = { openid: o, fskey: a }),
                    (t.prev = 2),
                    (t.next = 5),
                    m.StockBridge.request(n, "GET", s)
                  );
                case 5:
                  return t.abrupt("return", t.sent);
                case 8:
                  return (
                    (t.prev = 8), (t.t0 = t.catch(2)), t.abrupt("return", null)
                  );
                case 11:
                case "end":
                  return t.stop();
              }
          },
          t,
          null,
          [[2, 8]]
        );
      })();
    });
  },
  w = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return v(exports, [].concat(t), function () {
      return r().mark(function e() {
        var t;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t =
                      "https://wzq.tenpay.com/svr/openclaw/user/unbind_claw_bot"),
                    (e.prev = 2),
                    (e.next = 5),
                    m.StockBridge.request(t, "GET")
                  );
                case 5:
                  return e.abrupt("return", e.sent);
                case 8:
                  return (
                    (e.prev = 8), (e.t0 = e.catch(2)), e.abrupt("return", null)
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[2, 8]]
        );
      })();
    });
  };
(exports.requestClawBotStatus = _),
  (exports.requestUnbindClawBot = w),
  (exports.useDrawerHooks = function (e) {
    var n = this,
      s = h.ref(!0),
      u = h.ref(null),
      o = h.computed(function () {
        return u.value && u.value.length > 0;
      }),
      a = h.computed(function () {
        var e = {
          stickSessions: [],
          wxClawSessions: [],
          todaySessions: [],
          weekSessions: [],
          monthSessions: [],
          otherSessions: [],
        };
        if (u.value && u.value.length) {
          u.value.forEach(function (t) {
            if (t.stick_flag) e.stickSessions.push(t);
            else if (t.sessionid && t.sessionid.startsWith("wxclaw_"))
              e.wxClawSessions.push(t);
            else {
              var r = 1e3 * t.activite_time,
                n = new Date(r),
                s = new Date();
              n.toDateString() === s.toDateString()
                ? e.todaySessions.push(t)
                : (function (e, t) {
                    return h.dayjs(e).isSame(h.dayjs(t), "week");
                  })(n, s)
                ? e.weekSessions.push(t)
                : n.getMonth() === s.getMonth() &&
                  n.getFullYear() === s.getFullYear()
                ? e.monthSessions.push(t)
                : e.otherSessions.push(t);
            }
          });
        }
        return e;
      }),
      i = h.computed(function () {
        return a.value.stickSessions;
      }),
      c = h.computed(function () {
        return a.value.wxClawSessions;
      }),
      l = h.computed(function () {
        return a.value.todaySessions;
      }),
      p = h.computed(function () {
        return a.value.weekSessions;
      }),
      S = h.computed(function () {
        return a.value.monthSessions;
      }),
      y = h.computed(function () {
        return a.value.otherSessions;
      }),
      b = function (t, s) {
        return v(
          n,
          null,
          r().mark(function n() {
            var u, o, a, i, c;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (u =
                          "https://wzq.tenpay.com/svr/openai/session/".concat(
                            t
                          )),
                        (o = s),
                        (a = e.userInfo || {}),
                        (i = a.openid),
                        (c = a.fskey),
                        (o = d(f({}, s), {
                          app: "wzqxcx",
                          openid: i,
                          fskey: c,
                          check: 12,
                        })),
                        (r.prev = 2),
                        (r.next = 5),
                        m.StockBridge.request(u, "GET", o)
                      );
                    case 5:
                      return r.abrupt("return", r.sent);
                    case 8:
                      return (
                        (r.prev = 8),
                        (r.t0 = r.catch(2)),
                        r.abrupt("return", null)
                      );
                    case 11:
                    case "end":
                      return r.stop();
                  }
              },
              n,
              null,
              [[2, 8]]
            );
          })
        );
      };
    return {
      hasMore: s,
      hasSessions: o,
      stickSessions: i,
      wxClawSessions: c,
      todaySessions: l,
      weekSessions: p,
      monthSessions: S,
      otherSessions: y,
      requestClawBotStatus: _,
      requestUnbindClawBot: w,
      requestQuerySessions: function (e, o) {
        return v(
          n,
          null,
          r().mark(function n() {
            var a, i, c, l, p;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (a = { offset: e, limit: o }),
                        (r.prev = 1),
                        (r.next = 4),
                        b("query_sessions", a)
                      );
                    case 4:
                      (i = r.sent),
                        (c = (i || {}).sessions),
                        (l = void 0 === c ? [] : c),
                        (s.value = l && l.length >= o),
                        (p = 0 === e),
                        (u.value = p ? l : [].concat(t(u.value), t(l))),
                        (r.next = 15);
                      break;
                    case 13:
                      (r.prev = 13), (r.t0 = r.catch(1));
                    case 15:
                    case "end":
                      return r.stop();
                  }
              },
              n,
              null,
              [[1, 13]]
            );
          })
        );
      },
      requestRenameSession: function (e, t) {
        return v(
          n,
          null,
          r().mark(function n() {
            var s, o, a, i;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (s = { sessionid: e, title: t }),
                        (r.prev = 1),
                        (r.next = 4),
                        b("rename_session", s)
                      );
                    case 4:
                      return (
                        (o = r.sent),
                        (a = o.retmsg),
                        (i = "success" === a),
                        r.abrupt(
                          "return",
                          (i &&
                            (u.value = u.value.map(function (r) {
                              return r.sessionid === e
                                ? d(f({}, r), { title: t })
                                : r;
                            })),
                          i)
                        )
                      );
                    case 10:
                      (r.prev = 10), (r.t0 = r.catch(1));
                    case 12:
                    case "end":
                      return r.stop();
                  }
              },
              n,
              null,
              [[1, 10]]
            );
          })
        );
      },
      requestStickSession: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return v(
          n,
          null,
          r().mark(function n() {
            var s, u;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (s = { sessionid: e, undo_flag: t }),
                        (r.prev = 1),
                        (r.next = 4),
                        b("stick_session", s)
                      );
                    case 4:
                      return (
                        (u = r.sent),
                        r.abrupt(
                          "return",
                          "success" === (null == u ? void 0 : u.retmsg)
                        )
                      );
                    case 8:
                      (r.prev = 8), (r.t0 = r.catch(1));
                    case 10:
                    case "end":
                      return r.stop();
                  }
              },
              n,
              null,
              [[1, 8]]
            );
          })
        );
      },
      requestDeleteSession: function (e) {
        return v(
          n,
          null,
          r().mark(function t() {
            var n, s, o, a;
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = { sessionid: e }),
                        (t.prev = 1),
                        (t.next = 4),
                        b("delete_session", n)
                      );
                    case 4:
                      return (
                        (s = t.sent),
                        (o = s.retmsg),
                        (a = "success" === o),
                        t.abrupt(
                          "return",
                          (a &&
                            (u.value = u.value.filter(function (t) {
                              return t.sessionid !== e;
                            })),
                          a)
                        )
                      );
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(1));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 10]]
            );
          })
        );
      },
    };
  });
