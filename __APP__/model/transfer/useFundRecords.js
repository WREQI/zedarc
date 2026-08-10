var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var a = require("../../common/vendor.js"),
  n = require("../../cgi/transfer.js"),
  u = require("../../filters/money.js"),
  o = require("../../config/enum/transfer.js"),
  s = require("../../config/enum.js");
require("../../service/broker.js");
var i = require("../../service/aegis/utils.js"),
  l = require("./transferMonitorEvents.js"),
  c = require("../../config/broker/11100/index.js");
exports.useFundRecords = function () {
  var f,
    v,
    d,
    m = a.ref([]),
    h = a.ref(!1),
    _ = a.ref({}),
    p = a.ref(0),
    Y = a.ref([]),
    T = a.ref(0),
    S = a.computed(function () {
      return 0 === Y.value.length
        ? E(a.dayjs().format("YYYYMM"))
        : 1 === Y.value.length
        ? E(Y.value[0].month, Y.value[0].month)
        : E(Y.value[Y.value.length - 1].month, Y.value[0].month);
    }),
    g = a.ref([
      "".concat(a.dayjs().year()),
      "".concat(a.dayjs().month() + 1, "月"),
    ]),
    y = a.reactive({
      month: a.dayjs().format("YYYYMM"),
      count: 0,
      monthText: a.dayjs().format("YYYY年M月"),
    });
  function M(e) {
    _.value = e;
  }
  function R(e) {
    m.value = e;
  }
  function j(e) {
    var t = !1;
    if (
      (e &&
        Y.value.forEach(function (r) {
          r.month === e &&
            ((t = !0),
            (y.month = r.month),
            (y.count = r.count),
            (y.monthText = a.dayjs(r.month).format("YYYY年M月")));
        }),
      !t)
    ) {
      var r = e ? a.dayjs(e) : a.dayjs();
      (y.month = r.format("YYYYMM")),
        (y.count = 0),
        (y.monthText = r.format("YYYY年M月"));
    }
  }
  function D(e) {
    return b.apply(this, arguments);
  }
  function b() {
    return (b = r(
      e().mark(function r(a) {
        var u;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (u = t({ page_size: "20" }, a)),
                    (e.next = 4),
                    n.transferCgi.queryTransferList(u)
                  );
                case 4:
                  return e.abrupt("return", e.sent);
                case 7:
                  return (
                    (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    e.abrupt(
                      "return",
                      (i.reportMonitorEvent(
                        l.TRANSFER_MONITOR.RECORDS_QRY_FAIL,
                        {
                          ext3: ""
                            .concat(
                              (null == e.t0 ? void 0 : e.t0.retcode) ||
                                "unknown",
                              "|"
                            )
                            .concat(
                              (null == e.t0 ? void 0 : e.t0.retmsg) || ""
                            ),
                        }
                      ),
                      e.t0)
                    )
                  );
                case 10:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[0, 7]]
        );
      })
    )).apply(this, arguments);
  }
  function x(e) {
    e.forEach(function (e) {
      var t,
        r,
        n = a.dayjs(1e3 * e.transfer_time),
        s = n.format("YYYYMM"),
        i = n.format("YYYY年M月");
      if (
        (e.transfer_time
          ? (null == (r = null == (t = c.brokerConfig) ? void 0 : t.transfer)
              ? void 0
              : r.transferNewVersionDate) &&
            n.isBefore(c.brokerConfig.transfer.transferNewVersionDate)
            ? (e.feTransferTime = n.format("MM-DD"))
            : (e.feTransferTime = n.format("MM-DD HH:mm:ss"))
          : (e.feTransferTime = ""),
        (e.feStatus =
          o.FUNDS_RECORDS_STATUS_TEXT[e.transfer_total_state] || ""),
        (e.feTransferText =
          e.transfer_type === o.TRANSFER_TYPE.RECHARGE ? "转入" : "转出"),
        e.transfer_total_state === o.FUNDS_RECORDS_STATUS.ONWAY)
      ) {
        var l =
            [
              o.FUNDS_RECORDS_STATUS.ONWAY,
              o.FUNDS_RECORDS_STATUS.TIMEOUT,
            ].includes(e.second_state) &&
            (e.second_finish_time || e.second_transferred_time)
              ? e.second_finish_time || e.second_transferred_time
              : 0,
          f =
            [
              o.FUNDS_RECORDS_STATUS.ONWAY,
              o.FUNDS_RECORDS_STATUS.TIMEOUT,
            ].includes(e.third_state) &&
            (e.third_finish_time || e.third_transferred_time)
              ? e.third_finish_time || e.third_transferred_time
              : 0;
        if (+l > 0 || +f > 0) {
          var v = Math.max(+f, +l);
          e.fePrefinishedDate = a.dayjs(1e3 * v).format("MM-DD");
        }
      }
      e.feTransferMoney = u.formatNoUnit(e.transfer_total_value, !0);
      var d = [],
        h = ["第1笔", "第2笔", "第3笔"];
      ["first", "second", "third"].forEach(function (t, r) {
        var a = e["".concat(t, "_value")];
        a &&
          "-0.00" !== a &&
          "+0.00" !== a &&
          d.push({ label: h[r], value: u.formatNoUnit(a, !0) });
      }),
        (e.feSubItems = d.length >= 2 ? d : []);
      var _ = m.value.findIndex(function (e) {
        return (null == e ? void 0 : e.month) === s;
      });
      if (_ > -1) m.value[_].items.push(e);
      else {
        var p = Y.value.find(function (e) {
          return e.month === s;
        });
        m.value.push({
          name: i,
          count: (null == p ? void 0 : p.count) || 0,
          month: s,
          items: [e],
        });
      }
    });
  }
  function E(e, t) {
    for (
      var r = [],
        n = a.dayjs(e, "YYYYMM"),
        u = t || a.dayjs().format("YYYYMM"),
        o = function () {
          var e = n.format("YYYY"),
            t = n.format("M"),
            a = r.find(function (t) {
              return t.value === e;
            });
          a
            ? a.children.push({ value: "".concat(t, "月") })
            : r.push({ value: e, children: [{ value: "".concat(t, "月") }] }),
            (n = n.add(1, "month"));
        };
      n.isBefore(a.dayjs(u, "YYYYMM").add(1, "month"));

    )
      o();
    return r;
  }
  return {
    queryStatus: T,
    filter: _,
    records: m,
    curStateList: Y,
    timeList: S,
    curSelectedTimeVal: g,
    topTimeVal: y,
    setTopTimeVal: j,
    init:
      ((d = r(
        e().mark(function r() {
          var n, u, o, i, l, c, f;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), D(t({}, _.value));
                  case 3:
                    if (
                      (i = e.sent) &&
                      (!(null == i ? void 0 : i.retcode) ||
                        "0" === String(i.retcode))
                    ) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((T.value = s.PageStatus.fail), void (y.count = 0))
                    );
                  case 6:
                    0 === p.value && R([]),
                      (T.value = s.PageStatus.complete),
                      void 0 !== i.page_str && (_.value.page_str = i.page_str),
                      (l = !0),
                      _.value.query_month ||
                        ((c = i.statis_list || []).reverse(), (Y.value = c)),
                      (null == i ? void 0 : i.data) &&
                        i.data.length > 0 &&
                        (_.value.query_month &&
                          ((f = i.data[0]),
                          (l =
                            a.dayjs(1e3 * f.transfer_time).format("YYYYMM") ===
                            _.value.query_month)),
                        l && x(i.data)),
                      (null == (n = null == i ? void 0 : i.data)
                        ? void 0
                        : n.length) < 20 || !l
                        ? (p.value = -1)
                        : (p.value = 1),
                      j(
                        _.value.query_month ||
                          (null ==
                          (o =
                            null == (u = null == Y ? void 0 : Y.value)
                              ? void 0
                              : u[0])
                            ? void 0
                            : o.month) ||
                          ""
                      ),
                      (e.next = 16);
                    break;
                  case 14:
                    (e.prev = 14), (e.t0 = e.catch(0));
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 14]]
          );
        })
      )),
      function () {
        return d.apply(this, arguments);
      }),
    setRecords: R,
    setFilter: M,
    fetchData:
      ((v = r(
        e().mark(function r() {
          var n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (h.value || -1 === p.value) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (h.value = !0),
                      (T.value = s.PageStatus.complete),
                      (e.prev = 2),
                      (e.next = 5),
                      D(t({}, _.value))
                    );
                  case 5:
                    if (
                      (n = e.sent) &&
                      (!(null == n ? void 0 : n.retcode) ||
                        "0" === String(n.retcode))
                    ) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((h.value = !1),
                      void (T.value = s.PageStatus.paginationFail))
                    );
                  case 8:
                    !n.data || n.data.length < 20
                      ? (p.value = -1)
                      : (p.value = a.__CJS__export_add__(p.value, 1)),
                      x((null == n ? void 0 : n.data) || []),
                      void 0 !== (null == n ? void 0 : n.page_str) &&
                        (_.value.page_str = n.page_str),
                      (e.next = 13);
                    break;
                  case 11:
                    (e.prev = 11), (e.t0 = e.catch(2));
                  case 13:
                    h.value = !1;
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[2, 11]]
          );
        })
      )),
      function () {
        return v.apply(this, arguments);
      }),
    resetData: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.resetSelectTime,
        r = void 0 === t || t,
        n = e.resetStateList,
        u = void 0 === n || n,
        o = e.resetData,
        s = void 0 === o || o,
        i = e.resetFilter,
        l = void 0 === i || i;
      (p.value = 0),
        u && (Y.value = []),
        r &&
          (g.value = [
            "".concat(a.dayjs().year()),
            "".concat(a.dayjs().month() + 1, "月"),
          ]),
        s && R([]),
        l && M({ state_select: "0", type_select: "0", page_str: "" });
    },
    generateDateRange: E,
    queryTransferList: D,
    cancel:
      ((f = r(
        e().mark(function t(r) {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), n.transferCgi.cancel(r);
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 6:
                    throw (
                      ((e.prev = 6),
                      (e.t0 = e.catch(0)),
                      i.reportMonitorEvent(l.TRANSFER_MONITOR.CANCEL_FAIL, {
                        ext3: ""
                          .concat(
                            (null == e.t0 ? void 0 : e.t0.retcode) || "unknown",
                            "|"
                          )
                          .concat((null == e.t0 ? void 0 : e.t0.retmsg) || ""),
                      }),
                      e.t0)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 6]]
          );
        })
      )),
      function (e) {
        return f.apply(this, arguments);
      }),
  };
};
