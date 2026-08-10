var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/defineProperty"),
  i = require("../../common/vendor.js"),
  o = require("../../cgi/trade.js"),
  s = require("../../service/connect/maps.js"),
  c = require("../../service/log/index.js"),
  a = require("../../config/cgi.js"),
  u = require("../../service/connect/index.js"),
  d = new c.Log(),
  p = { DEFAULT: 0, COMPLETE: 1 },
  f = i.dayjs().format("YYYYMM"),
  y = !1;
(exports.STATE_TYPE = p),
  (exports.useHistory = function () {
    var c,
      l,
      v,
      m,
      h = i.reactive({
        activeRecordsId: p.DEFAULT,
        recordsToday: ((c = {}), n(c, p.DEFAULT, !1), n(c, p.COMPLETE, !1), c),
        recordsHistory:
          ((l = {}), n(l, p.DEFAULT, !1), n(l, p.COMPLETE, !1), l),
        filterHistory: { page: 0, items: [] },
      }),
      T = i.computed(function () {
        return i.cloneDeep(h.recordsToday[h.activeRecordsId]);
      }),
      E = i.computed(function () {
        return i.cloneDeep(h.recordsHistory[h.activeRecordsId]);
      }),
      g = i.computed(function () {
        var e = i.cloneDeep(T.value) || [],
          r = i.cloneDeep(E.value) || [];
        if (!e.length) return r;
        ((r = (function (e) {
          return (function (e) {
            return e.length && e[0].id === f;
          })(e)
            ? e
            : [{ id: f, page: -1, items: [], count: 0 }].concat(e);
        })(r))[0].count = r[0].count + e.length),
          (r[0].items = e.concat(r[0].items));
        var n = r[0].items.reduce(
            function (e, r) {
              var n = t(e, 3),
                o = n[0],
                s = n[1],
                c = n[2],
                a = ""
                  .concat(r.trade_type, ":")
                  .concat(r.contract_no, ":")
                  .concat(i.dayjs(r.trade_time).format("YYYY-MM-DD"));
              return (
                c.includes(a) ? (s += 1) : (o.push(r), c.push(a)), [o, s, c]
              );
            },
            [[], 0, []]
          ),
          o = t(n, 2),
          s = o[0],
          c = o[1],
          a = void 0 === c ? 0 : c;
        return (r[0].items = s), (r[0].count -= a), r;
      });
    function R(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (A = r(
        e().mark(function r(t) {
          var n, i, s, c, a;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), o.tradeCgi.queryHistoryData(t);
                case 2:
                  (n = e.sent),
                    (i = n.static_list),
                    (s = void 0 === i ? [] : i),
                    (c = n.list),
                    (a = void 0 === c ? [] : c),
                    (s = s.reverse()).forEach(function (e) {
                      (e.id = e.trade_month),
                        (e.items = []),
                        (e.page = 0),
                        (e.count = +e.trade_num || 0);
                    }),
                    s.length &&
                      ((s[0].items = a.concat(s[0].items)),
                      (s[0].page =
                        a.length < o.TRADECOUNT_AMOUNT_PER_REQUEST ? -1 : 1)),
                    (function (e) {
                      var r,
                        t = e.records,
                        n = void 0 === t ? [] : t,
                        i = e.stateType,
                        o = h.recordsHistory[i];
                      if (o) {
                        var s = o.map(function (e) {
                            return e.id;
                          }),
                          c = [];
                        n.forEach(function (e) {
                          var r = s.indexOf(e.id);
                          if (-1 === r) c.push(e);
                          else {
                            var t = o[r];
                            e.count !== t.count &&
                              ((t.count = e.count),
                              (t.page = e.page),
                              (t.items = e.items));
                          }
                        }),
                          c.length &&
                            (d.info(
                              "add new ".concat(c.length, " history months"),
                              c.map(function (e) {
                                return e.id;
                              })
                            ),
                            (r = h.recordsHistory[i]).unshift.apply(r, c));
                      } else h.recordsHistory[i] = n;
                    })({ records: s, stateType: t });
                case 6:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )).apply(this, arguments);
    }
    return {
      data: h,
      records: g,
      queryHistoryData: R,
      setActiveRecordsId: function (e) {
        h.activeRecordsId = e;
      },
      queryHistoryByMonth:
        ((m = r(
          e().mark(function r(t) {
            var n, i, s, c, a, u, p;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.id),
                        (i = t.stateType),
                        -1 !==
                          (s = h.recordsHistory[i]
                            .map(function (e) {
                              return e.id;
                            })
                            .indexOf(n)))
                      ) {
                        e.next = 6;
                        break;
                      }
                      if (n !== f) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        d.info(
                          "current month is not presented in history, only has today items, no need to query more"
                        )
                      );
                    case 5:
                      throw {
                        retcode: "ELOGIC",
                        retmsg: "系统异常 请稍后再试",
                      };
                    case 6:
                      if (((c = E.value[s]), !y && -1 !== c.page)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        d.info(
                          "month ".concat(n, " is finished, no more requests")
                        )
                      );
                    case 9:
                      return (
                        (e.prev = 9),
                        (y = !0),
                        (e.next = 13),
                        o.tradeCgi.queryHistoryByMonth(c.id, c.page, i)
                      );
                    case 13:
                      return (
                        (a = e.sent),
                        (u = a.list),
                        (p = void 0 === u ? [] : u),
                        e.abrupt(
                          "return",
                          ((function (e) {
                            var r = e.index,
                              t = e.list,
                              n = e.stateType,
                              i = h.recordsHistory[n][r];
                            (i.items = i.items.concat(t)),
                              (i.page =
                                t.length === o.TRADECOUNT_AMOUNT_PER_REQUEST
                                  ? i.page + 1
                                  : -1);
                          })({ index: s, list: p, stateType: i }),
                          (y = !1),
                          p)
                        )
                      );
                    case 19:
                      throw (
                        ((e.prev = 19), (e.t0 = e.catch(9)), (y = !1), e.t0)
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[9, 19]]
            );
          })
        )),
        function (e) {
          return m.apply(this, arguments);
        }),
      fetchWebsocket: function (e) {
        u.connector({
          scheme: s.SCHEME.TRANSACTIONS,
          source: u.SOURCE.AJAX,
          beforeRequest: n({}, a.API_TRADE_QUERY, function () {
            return {
              record: "today",
              refresh: !0,
              qry_type: 0,
              type: h.activeRecordsId,
            };
          }),
          beforeSend: n({}, s.SCHEME.TRANSACTIONS, function () {
            return this.params.beforeRequest[a.API_TRADE_QUERY]();
          }),
          data: n({}, a.API_TRADE_QUERY, function (r, t) {
            var n = r.list,
              i = void 0 === n ? [] : n,
              o = h.recordsToday[h.activeRecordsId].length > i.length;
            !(function (e) {
              var r = e.records,
                t = void 0 === r ? [] : r,
                n = e.stateType;
              h.recordsToday[n] = t;
            })({ records: i, stateType: h.activeRecordsId }),
              o && R(h.activeRecordsId),
              e();
          }),
          error: function (e) {},
        });
      },
      queryHistoryByFilter:
        ((v = r(
          e().mark(function r(t) {
            var n, i, s, c, a, u, p, f, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.stateType),
                        (i = t.code),
                        (s = t.market),
                        (c = t.beginDate),
                        (a = t.endDate),
                        (u = h.filterHistory.page),
                        !y && -1 !== u)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", d.info("no more requests"));
                    case 4:
                      return (
                        (e.prev = 4),
                        (y = !0),
                        (e.next = 8),
                        o.tradeCgi.queryHistoryByFilter(n, u, i, s, c, a)
                      );
                    case 8:
                      (p = e.sent),
                        (f = p.list),
                        (l = void 0 === f ? [] : f),
                        (h.filterHistory.items =
                          h.filterHistory.items.concat(l)),
                        (h.filterHistory.page =
                          l.length === o.TRADECOUNT_AMOUNT_PER_REQUEST
                            ? h.filterHistory.page + 1
                            : -1),
                        (e.next = 17);
                      break;
                    case 14:
                      throw ((e.prev = 14), (e.t0 = e.catch(4)), e.t0);
                    case 17:
                      return (e.prev = 17), (y = !1), e.finish(17);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[4, 14, 17, 20]]
            );
          })
        )),
        function (e) {
          return v.apply(this, arguments);
        }),
      resetFilterData: function () {
        h.filterHistory = { page: 0, items: [] };
      },
      activeTodayRecords: T,
    };
  });
