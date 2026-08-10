var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../common/vendor.js"),
  a = require("../../cgi/duotianqi.js"),
  i = require("../../config/enum/duotianqi.js"),
  u = require("../../config/enum.js");
require("../../service/broker.js");
var c = require("../../config/broker/11100/index.js"),
  s = { NOT: 0, END: 1, VISIBLE: 2, INVISIBLE: 3 },
  o = n.ref({});
exports.useDuotianqi = function (d) {
  var p,
    f,
    l,
    y,
    v,
    m,
    h = n.getCurrentInstance().proxy,
    g = n.ref({}),
    b = n.computed(function () {
      return o.value.asset > 0 || o.value.total_profit > 0;
    });
  return {
    balanceInfo: o,
    products: g,
    getBalanceInfo:
      ((m = r(
        t().mark(function e(r) {
          var n, u;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      a.duotianqiCgi.qryBalanceHome(r)
                    );
                  case 3:
                    return (
                      (n = e.sent),
                      (o.value = n),
                      n.product_list &&
                        ((u = { name: i.TRADE_BALANCE_NAME[n.balance_type] }),
                        n.product_list.forEach(function (e) {
                          e.balance_type = n.balance_type;
                          var t = ""
                            .concat(e.balance_type, "_")
                            .concat(e.time_limit);
                          u[t] = e;
                        }),
                        (g.value = u)),
                      e.abrupt("return", n)
                    );
                  case 8:
                    throw ((e.prev = 8), (e.t0 = e.catch(0)), e.t0);
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 8]]
          );
        })
      )),
      function (e) {
        return m.apply(this, arguments);
      }),
    hasTradeRecord: b,
    ACTIVITY_TAG: s,
    getProfitList: function (e) {
      return a.duotianqiCgi.getProfitList(e);
    },
    getTradeList: function (e) {
      return a.duotianqiCgi.getTradeList(e);
    },
    getTradeDetail: function (e) {
      return a.duotianqiCgi.getTradeDetail(e);
    },
    getPositionInfo: function (e) {
      return a.duotianqiCgi.getPositionInfo(e);
    },
    stopAutoExtendOrder: function (t) {
      return a.duotianqiCgi.balanceOrder(e(e({}, t), {}, { action: "1" }));
    },
    checkBalanceTime:
      ((v = r(
        t().mark(function e(r) {
          var a, i, c, s, o, p, f;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), d();
                case 2:
                  return (
                    (a = e.sent),
                    (i = a.date),
                    (c = a.marketState),
                    (s = []),
                    ("purchase" === r || "repo" === r) &&
                      (s = ["9:15", "15:30"]),
                    (o = n
                      .dayjs(i)
                      .set("hour", s[0].split(":")[0])
                      .set("minute", s[0].split(":")[1])
                      .set("second", 0)),
                    (p = n
                      .dayjs(i)
                      .set("hour", s[1].split(":")[0])
                      .set("minute", s[1].split(":")[1])
                      .set("second", 0)),
                    (f = n.dayjs(i).isBetween(o, p)),
                    e.abrupt("return", {
                      result:
                        "-1" !== c[u.MARKET.HA] && "-1" !== c[u.MARKET.SA] && f,
                      timeRange: s,
                    })
                  );
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e) {
        return v.apply(this, arguments);
      }),
    checkBalanceStopExtendTime:
      ((y = r(
        t().mark(function e() {
          var r, a, i, c, s, o;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), d();
                case 2:
                  return (
                    (r = e.sent),
                    (a = r.date),
                    (i = r.marketState),
                    (c = n
                      .dayjs(a)
                      .set("hour", 9)
                      .set("minute", 15)
                      .set("second", 0)),
                    (s = n
                      .dayjs(a)
                      .set("hour", 15)
                      .set("minute", 0)
                      .set("second", 0)),
                    (o = n.dayjs(a).isBetween(c, s)),
                    e.abrupt(
                      "return",
                      "-1" !== i[u.MARKET.HA] && "-1" !== i[u.MARKET.SA] && o
                    )
                  );
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return y.apply(this, arguments);
      }),
    getProduct:
      ((l = r(
        t().mark(function n(i, u) {
          var c;
          return t().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (c = h.$route.query.activity_id),
                    (n.next = 3),
                    (function () {
                      var e = r(
                        t().mark(function e(r) {
                          var n, i;
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      a.duotianqiCgi.getProductDetail(r)
                                    );
                                  case 3:
                                    return (
                                      (n = e.sent),
                                      (i = n.product_list[0]),
                                      e.abrupt(
                                        "return",
                                        ((i.balance_type = n.balance_type), i)
                                      )
                                    );
                                  case 8:
                                    throw (
                                      ((e.prev = 8), (e.t0 = e.catch(0)), e.t0)
                                    );
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 8]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()(
                      e(
                        e({}, c ? { action: "3", activity_id: c } : {}),
                        {},
                        { balance_type: i, time_limit: u }
                      )
                    )
                  );
                case 3:
                  return n.abrupt("return", n.sent);
                case 4:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      )),
      function (e, t) {
        return l.apply(this, arguments);
      }),
    checkBalanceTradeTime:
      ((f = r(
        t().mark(function e() {
          var r, a, i, c, s, o;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), d();
                case 2:
                  return (
                    (r = e.sent),
                    (a = r.date),
                    (i = r.marketState),
                    (c = n
                      .dayjs(a)
                      .set("hour", 9)
                      .set("minute", 15)
                      .set("second", 0)),
                    (s = n
                      .dayjs(a)
                      .set("hour", 15)
                      .set("minute", 30)
                      .set("second", 0)),
                    (o = n.dayjs(a).isBetween(c, s)),
                    e.abrupt("return", {
                      date: a,
                      isTradeDay:
                        "-1" !== i[u.MARKET.HA] && "-1" !== i[u.MARKET.SA],
                      isTradeTime: o,
                    })
                  );
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return f.apply(this, arguments);
      }),
    openBalanceTrade: function (e) {
      return a.duotianqiCgi.service({
        risk_ver: 1,
        action: e.action,
        match_type: e.match_type,
      });
    },
    isTodayBeforeSellTime: function (e) {
      var t = n.dayjs(e).set("hour", 0).set("minute", 0).set("second", 0),
        r = n.dayjs(e).set("hour", 9).set("minute", 15).set("second", 0);
      return n.dayjs(e).isBetween(t, r);
    },
    isTodayAfterSellTime: function (e) {
      var t = n.dayjs(e).set("hour", 15).set("minute", 30).set("second", 0),
        r = n.dayjs(e).set("hour", 24).set("minute", 0).set("second", 0);
      return n.dayjs(e).isBetween(t, r);
    },
    balanceOrderSubscribe: function (e) {
      return a.duotianqiCgi.balanceOrderSubscribe(e);
    },
    repurchaseOrder: function (t) {
      return a.duotianqiCgi.balanceOrder(e(e({}, t), {}, { action: "0" }));
    },
    getActivityInfo:
      ((p = r(
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      a.duotianqiCgi.qryBalanceHome({ action: "4" })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 6:
                    throw ((e.prev = 6), (e.t0 = e.catch(0)), e.t0);
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 6]]
          );
        })
      )),
      function () {
        return p.apply(this, arguments);
      }),
    getEntryName: function (e) {
      var t,
        r = e.activityType,
        a = e.activityId,
        i = n.get(c.brokerConfig.trade, "duotianqi.entryName", "券商理财"),
        u = (null == (t = c.brokerConfig.trade) ? void 0 : t.duotianqi) || {},
        s = u.xinkeName,
        o = void 0 === s ? "新客理财" : s,
        d = u.actEntryName,
        p = void 0 === d ? [] : d;
      if (p.length > 0) {
        var f = (function () {
          var e = p.find(function (e) {
            return e.activityType === r && e.activityId === a;
          });
          if (null == e ? void 0 : e.entryName) return e.entryName;
          var t = p.find(function (e) {
            return e.activityType === r && !e.activityId;
          });
          if (null == t ? void 0 : t.entryName) return t.entryName;
          var n = p.find(function (e) {
            return e.activityId === a && !e.activityType;
          });
          return null == n ? void 0 : n.entryName;
        })();
        if (f) return f;
      }
      return a ? o : i;
    },
  };
};
