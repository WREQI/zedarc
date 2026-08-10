var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../common/vendor.js"),
  a = require("../../cgi/transfer.js"),
  u = require("../../config/enum.js");
exports.useHistory = function () {
  var s,
    c,
    o = n.ref([]),
    i = n.ref(!1),
    p = n.ref({});
  function f(e) {
    o.value = e;
  }
  function l(e) {
    return d.apply(this, arguments);
  }
  function d() {
    return (d = r(
      e().mark(function r(n) {
        var u;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (u = t({ page_size: 20 }, n)),
                    (e.next = 4),
                    a.transferCgi.queryFundsCount(u)
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
          r,
          null,
          [[0, 7]]
        );
      })
    )).apply(this, arguments);
  }
  return {
    records: o,
    init:
      ((c = r(
        e().mark(function s() {
          var c,
            o,
            i,
            d,
            m,
            v = arguments;
          return e().wrap(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    return (
                      v.length > 0 && void 0 !== v[0]
                        ? v[0]
                        : u.E_ACCOUNT_MODE.NORMAL,
                      (s.prev = 1),
                      (c = []),
                      (s.next = 5),
                      l(t({ page_num: 0 }, p.value))
                    );
                  case 5:
                    return (
                      (o = s.sent),
                      (i = n.dayjs().format("YYYYMM")),
                      (c = o.statis_list || []).reverse(),
                      c.forEach(function (e) {
                        (e.name = n.dayjs(e.month).format("YYYY年MM月")),
                          (e.items = []),
                          (e.page = 0),
                          (e.count = +e.count || 0),
                          (e.fold = !0);
                      }),
                      (d = c[0]) &&
                        ((d.items = o.data || []),
                        (d.page = o.data && 20 === o.data.length ? 1 : -1)),
                      (s.next = 12),
                      r(
                        e().mark(function t() {
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      a.transferCgi.queryTransfer()
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
                            t,
                            null,
                            [[0, 6]]
                          );
                        })
                      )()
                    );
                  case 12:
                    (m = s.sent).data &&
                      (c.find(function (e) {
                        return e.month === i;
                      }) ||
                        c.unshift({
                          name: n.dayjs(i).format("YYYY年MM月"),
                          month: i,
                          page: -1,
                          items: [],
                          count: 0,
                          fold: !0,
                        }),
                      ((d = c[0]).items = m.data.concat(d.items || [])),
                      (d.count += m.data ? m.data.length : 0)),
                      c[0] && (c[0].fold = !1),
                      f(c),
                      (s.next = 18);
                    break;
                  case 16:
                    (s.prev = 16), (s.t0 = s.catch(1));
                  case 18:
                  case "end":
                    return s.stop();
                }
            },
            s,
            null,
            [[1, 16]]
          );
        })
      )),
      function () {
        return c.apply(this, arguments);
      }),
    setRecords: f,
    setFold: function (e) {
      var t = e.index,
        r = e.fold;
      o.value[t].fold = r;
    },
    setFilter: function (e) {
      p.value = e;
    },
    fetchData:
      ((s = r(
        e().mark(function r(a) {
          var u, s, c;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((u = n.cloneDeep(o.value)),
                      (s = u[a]),
                      i.value || -1 === s.page)
                    ) {
                      e.next = 13;
                      break;
                    }
                    return (
                      (i.value = !0),
                      (e.prev = 3),
                      (e.next = 6),
                      l(t({ page_num: s.page, query_month: s.month }, p.value))
                    );
                  case 6:
                    !(c = e.sent).data || c.data.length < 20
                      ? (s.page = -1)
                      : (s.page = s.page + 1),
                      (s.items = s.items.concat(c.data || [])),
                      f(u),
                      (e.next = 12);
                    break;
                  case 10:
                    (e.prev = 10), (e.t0 = e.catch(3));
                  case 12:
                    i.value = !1;
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
      )),
      function (e) {
        return s.apply(this, arguments);
      }),
  };
};
