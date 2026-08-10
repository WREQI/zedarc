require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  u = require("../../cgi/transfer.js");
require("../../service/broker.js");
var o = require("../../config/enum/transfer.js"),
  l = require("../../config/broker/11100/index.js");
exports.useHistoryNew = function () {
  var c,
    i,
    s = l.brokerConfig.transfer.detailTimeSupportSecond
      ? "MM-DD HH:mm:ss"
      : "MM-DD",
    d = r.ref([]),
    v = r.ref(!1),
    m = r.ref({}),
    f = r.ref(0),
    h = r.ref([]),
    _ = r.computed(function () {
      return 0 === h.value.length
        ? M(r.dayjs().format("YYYYMM"))
        : 1 === h.value.length
        ? M(h.value[0].month, h.value[0].month)
        : M(h.value[h.value.length - 1].month, h.value[0].month);
    }),
    Y = r.ref([
      "".concat(r.dayjs().year()),
      "".concat(r.dayjs().month() + 1, "月"),
    ]),
    p = r.reactive({
      month: r.dayjs().format("YYYYMM"),
      count: 0,
      monthText: r.dayjs().format("YYYY年M月"),
    });
  function y(e) {
    m.value = e;
  }
  function T(e) {
    d.value = e;
  }
  function S(e) {
    var t = !1;
    if (
      (e &&
        h.value.forEach(function (a) {
          a.month === e &&
            ((t = !0),
            (p.month = a.month),
            (p.count = a.count),
            (p.monthText = r.dayjs(a.month).format("YYYY年M月")));
        }),
      !t)
    ) {
      var a = e ? r.dayjs(e) : r.dayjs();
      (p.month = a.format("YYYYMM")),
        (p.count = 0),
        (p.monthText = a.format("YYYY年M月"));
    }
  }
  function g(e) {
    return E.apply(this, arguments);
  }
  function E() {
    return (E = n(
      t().mark(function e(n) {
        var r;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (r = a({ page_size: 20 }, n)),
                    (e.next = 4),
                    u.transferCgi.queryFundsCount(r)
                  );
                case 4:
                  return e.abrupt("return", e.sent);
                case 7:
                  (e.prev = 7), (e.t0 = e.catch(0));
                case 9:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 7]]
        );
      })
    )).apply(this, arguments);
  }
  function R(e) {
    e.forEach(function (e) {
      var t = 1e3 * e.transferredTime || 1e3 * e.transferTime,
        a = r.dayjs(t).format("YYYYMM"),
        n = r.dayjs(t).format("YYYY年M月");
      (e.feTransferTime = r.dayjs(t).format(s)),
        (e.feOperName = e.oper_name || ""),
        o.TRANSFER_IN_AND_OUT_TYPE.includes(e.type)
          ? ((e.feStockName = e.bank_name || ""),
            (e.feStockCode = e.card_num ? "尾号".concat(e.card_num) : ""))
          : ((e.feStockName = e.stock_name || ""),
            (e.feStockCode = e.stock_code || ""));
      var u = d.value.findIndex(function (e) {
        return (null == e ? void 0 : e.month) === a;
      });
      if (u > -1) d.value[u].items.push(e);
      else {
        var l = h.value.find(function (e) {
          return e.month === a;
        });
        d.value.push({
          name: n,
          count: (null == l ? void 0 : l.count) || 0,
          month: a,
          items: [e],
        });
      }
    });
  }
  function M(e, t) {
    for (
      var a = [],
        n = r.dayjs(e, "YYYYMM"),
        u = t || r.dayjs().format("YYYYMM"),
        o = function () {
          var e = n.format("YYYY"),
            t = n.format("M"),
            r = a.find(function (t) {
              return t.value === e;
            });
          r
            ? r.children.push({ value: "".concat(t, "月") })
            : a.push({ value: e, children: [{ value: "".concat(t, "月") }] }),
            (n = n.add(1, "month"));
        };
      n.isBefore(r.dayjs(u, "YYYYMM").add(1, "month"));

    )
      o();
    return a;
  }
  return {
    filter: m,
    records: d,
    curStateList: h,
    timeList: _,
    curSelectedTimeVal: Y,
    topTimeVal: p,
    setTopTimeVal: S,
    init:
      ((i = n(
        t().mark(function l() {
          var c,
            i,
            v,
            _,
            Y,
            p,
            y,
            E,
            M,
            N,
            b,
            j,
            x,
            A,
            k,
            C,
            q,
            F,
            D,
            I,
            P,
            w,
            L,
            H,
            W,
            G,
            J;
          return t().wrap(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    return (
                      (l.prev = 0),
                      (l.next = 3),
                      g(a({ page_num: 0, funds_detail_control: "1" }, m.value))
                    );
                  case 3:
                    if ((A = l.sent)) {
                      l.next = 6;
                      break;
                    }
                    return l.abrupt("return");
                  case 6:
                    if (
                      ((k = null),
                      (C = !0),
                      (q = r.dayjs().format("YYYYMM")),
                      (l.prev = 8),
                      (F = String(m.value.select_type || "")),
                      (l.t0 =
                        (!m.value.query_month || m.value.query_month === q) &&
                        (!m.value.select_type ||
                          [
                            o.TRANSFER_CLASSIFY_TYPE.All,
                            o.TRANSFER_CLASSIFY_TYPE.RECHARGE,
                            o.TRANSFER_CLASSIFY_TYPE.WITHDRAW,
                          ].includes(F))),
                      !l.t0)
                    ) {
                      l.next = 16;
                      break;
                    }
                    return (
                      (l.next = 14),
                      n(
                        t().mark(function e() {
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      u.transferCgi.queryTransfer()
                                    );
                                  case 3:
                                    return e.abrupt("return", e.sent);
                                  case 6:
                                    (e.prev = 6), (e.t0 = e.catch(0));
                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 6]]
                          );
                        })
                      )()
                    );
                  case 14:
                    (k = l.sent),
                      (l.t0 =
                        [
                          o.TRANSFER_CLASSIFY_TYPE.RECHARGE,
                          o.TRANSFER_CLASSIFY_TYPE.WITHDRAW,
                        ].includes(F) &&
                        (null == (c = null == k ? void 0 : k.data)
                          ? void 0
                          : c.length) > 0);
                  case 16:
                    if (!l.t0) {
                      l.next = 19;
                      break;
                    }
                    (D =
                      F === o.TRANSFER_CLASSIFY_TYPE.RECHARGE
                        ? o.TRANSFER_IN_TYPE
                        : o.TRANSFER_OUT_TYPE),
                      (k.data = k.data.filter(function (e) {
                        return D.includes(e.type);
                      }));
                  case 19:
                    l.next = 23;
                    break;
                  case 21:
                    (l.prev = 21), (l.t1 = l.catch(8));
                  case 23:
                    0 === f.value && T([]),
                      (I = r.dayjs().format("YYYY年M月")),
                      m.value.query_month ||
                        ((P = A.statis_list || []).reverse(), (h.value = P)),
                      (null == A ? void 0 : A.data) &&
                        A.data.length > 0 &&
                        (m.value.query_month &&
                          ((w = A.data[0]),
                          (L = 1e3 * w.transferredTime || 1e3 * w.transferTime),
                          (C =
                            r.dayjs(L).format("YYYYMM") ===
                              m.value.query_month ||
                            (null == (i = null == k ? void 0 : k.data)
                              ? void 0
                              : i.length) > 0)),
                        C && R(A.data)),
                      (null == (v = null == A ? void 0 : A.data)
                        ? void 0
                        : v.length) < 20 || !C
                        ? (f.value = -1)
                        : (f.value = 1),
                      (null == (_ = null == k ? void 0 : k.data)
                        ? void 0
                        : _.length) > 0
                        ? (k.data.forEach(function (e) {
                            var t =
                              1e3 * e.transferredTime || 1e3 * e.transferTime;
                            (e.feTransferTime = r.dayjs(t).format(s)),
                              (e.feOperName =
                                o.TRANSFER_TYPE_TEXT_NEW[e.type] || ""),
                              (e.feStockName = e.bank_name || ""),
                              (e.feStockCode = e.card_num
                                ? "尾号".concat(e.card_num)
                                : "");
                          }),
                          h.value.some(function (e) {
                            return e.month === q;
                          })
                            ? ((H =
                                (null ==
                                (p = null == (Y = h.value) ? void 0 : Y[0])
                                  ? void 0
                                  : p.todayNum) || 0),
                              (null == (y = d.value[0]) ? void 0 : y.month) ===
                              q
                                ? ((G = r.__CJS__export_reduce__(
                                    r.__CJS__export_add__(
                                      h.value[0].count,
                                      k.data.length
                                    ),
                                    H
                                  )),
                                  (h.value[0].count = Math.max(G, 0)),
                                  (h.value[0].todayNum = k.data.length),
                                  (W = d.value[0].items).unshift.apply(
                                    W,
                                    e(k.data)
                                  ),
                                  (d.value[0].count = h.value[0].count))
                                : ((h.value[0].count = k.data.length),
                                  (h.value[0].todayNum = k.data.length),
                                  d.value.unshift({
                                    name: I,
                                    count: k.data.length,
                                    todayNum: k.data.length,
                                    month: q,
                                    items: k.data,
                                  })))
                            : (h.value.unshift({
                                month: q,
                                count: k.data.length,
                                todayNum: k.data.length,
                                name: I,
                              }),
                              d.value.unshift({
                                name: I,
                                count: k.data.length,
                                todayNum: k.data.length,
                                month: q,
                                items: k.data,
                              })))
                        : (J =
                            (null ==
                            (M =
                              null == (E = null == h ? void 0 : h.value)
                                ? void 0
                                : E[0])
                              ? void 0
                              : M.todayNum) || 0) > 0 &&
                          (null == (b = null == (N = h.value) ? void 0 : N[0])
                            ? void 0
                            : b.count) > 0 &&
                          ((h.value[0].count = r.__CJS__export_reduce__(
                            h.value[0].count,
                            J
                          )),
                          (h.value[0].todayNum = 0)),
                      S(
                        m.value.query_month ||
                          (null ==
                          (x =
                            null == (j = null == h ? void 0 : h.value)
                              ? void 0
                              : j[0])
                            ? void 0
                            : x.month) ||
                          ""
                      ),
                      (l.next = 33);
                    break;
                  case 31:
                    (l.prev = 31), (l.t2 = l.catch(0));
                  case 33:
                  case "end":
                    return l.stop();
                }
            },
            l,
            null,
            [
              [0, 31],
              [8, 21],
            ]
          );
        })
      )),
      function () {
        return i.apply(this, arguments);
      }),
    setRecords: T,
    setFilter: y,
    fetchData:
      ((c = n(
        t().mark(function e() {
          var n;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (v.value || -1 === f.value) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (v.value = !0),
                      (e.prev = 2),
                      (e.next = 5),
                      g(
                        a(
                          { funds_detail_control: "1", page_num: f.value },
                          m.value
                        )
                      )
                    );
                  case 5:
                    !(n = e.sent).data || n.data.length < 20
                      ? (f.value = -1)
                      : (f.value = r.__CJS__export_add__(f.value, 1)),
                      R((null == n ? void 0 : n.data) || []),
                      (e.next = 11);
                    break;
                  case 9:
                    (e.prev = 9), (e.t0 = e.catch(2));
                  case 11:
                    v.value = !1;
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 9]]
          );
        })
      )),
      function () {
        return c.apply(this, arguments);
      }),
    resetData: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.resetSelectTime,
        a = void 0 === t || t,
        n = e.resetStateList,
        u = void 0 === n || n,
        o = e.resetData,
        l = void 0 === o || o,
        c = e.resetFilter,
        i = void 0 === c || c;
      (f.value = 0),
        u && (h.value = []),
        a &&
          (Y.value = [
            "".concat(r.dayjs().year()),
            "".concat(r.dayjs().month() + 1, "月"),
          ]),
        l && T([]),
        i && y({ select_type: 0 });
    },
    generateDateRange: M,
  };
};
