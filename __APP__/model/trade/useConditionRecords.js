require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var a = require("../../common/vendor.js"),
  i = require("../../cgi/condition.js"),
  o = require("./useConditionEntry.js"),
  s = require("../../config/enum/condition.js"),
  c = require("./conditions/useCondTag.js");
exports.useConditionRecords = function () {
  var u = a.reactive({
      init: !1,
      fetching: [!1, !1, !1],
      lists: [[], [], []],
      pageOptions: [
        { pageNum: 0, pageSize: 20 },
        { pageNum: 0, pageSize: 20 },
        { pageNum: 0, pageSize: 20 },
      ],
      hasData: [!1, !1, !1],
      totalNum: [0, 0, 0],
    }),
    d = a.reactive({ init: !1, fetching: !1, data: {} }),
    p = a.ref([]),
    l = a.ref(0),
    g = a.ref(!1);
  o.useConditionEntry();
  var f,
    m,
    v,
    h = a.computed(function () {
      return [
        s.CondTypesBackEnd.GRID,
        s.CondTypesBackEnd.INVEST,
        s.CondTypesBackEnd.PRICE,
        s.CondTypesBackEnd.TPSL,
        s.CondTypesBackEnd.LIMIT_UP,
        s.CondTypesBackEnd.OPENING_SELL,
      ].includes(d.data.cond_type);
    }),
    T = a.computed(function () {
      return [
        s.CondTypesBackEnd.GRID,
        s.CondTypesBackEnd.INVEST,
        s.CondTypesBackEnd.PRICE,
        s.CondTypesBackEnd.TPSL,
        s.CondTypesBackEnd.LIMIT_UP,
        s.CondTypesBackEnd.OPENING_SELL,
      ].includes(d.data.cond_type);
    }),
    C = c.useCondTag(),
    y = C.calcTags,
    _ = C.condTagMaps;
  return (
    a.provide("condTagMaps", _),
    {
      basePriceTag: a.computed(function () {
        return +d.data.status !== s.CondStatus.WAIT
          ? null
          : _.value[
              ""
                .concat(d.data.cond_id, "_")
                .concat(d.data.market, "_")
                .concat(d.data.scode)
            ] || {};
      }),
      conditionRecords: u,
      recordInfo: d,
      orderList: p,
      orderListPage: l,
      showTriggerRecord: h,
      showOperateBtns: T,
      isInvestCond: g,
      getRecords:
        ((v = r(
          e().mark(function r(a, o) {
            var c, d, p, l, g, f, m;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((p = [1, 2, 3]),
                        (e.prev = 1),
                        o && (u.pageOptions[a].pageNum = 0),
                        (u.fetching[a] = !0),
                        (g = []),
                        2 !== p[a])
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 7),
                        i.conditionOrderApi.queryCondOrderList({
                          page_num: u.pageOptions[a].pageNum,
                          page_size: u.pageOptions[a].pageSize,
                        })
                      );
                    case 7:
                      (l = e.sent), (g = l.order_list || []), (e.next = 15);
                      break;
                    case 11:
                      return (
                        (e.next = 13),
                        i.conditionOrderApi.orderQueryList({
                          qry_status: p[a],
                          page_num: u.pageOptions[a].pageNum,
                          page_size: u.pageOptions[a].pageSize,
                        })
                      );
                    case 13:
                      (l = e.sent), (g = l.cond_list || []);
                    case 15:
                      if (
                        ((u.init = !0),
                        (g = g.filter(function (e) {
                          return s.LEGAL_COND_TYPES.includes(e.cond_type);
                        })),
                        (u.lists[a] = o ? g : [].concat(t(u.lists[a]), t(g))),
                        0 !== u.pageOptions[a].pageNum)
                      ) {
                        e.next = 21;
                        break;
                      }
                      [1, 3].includes(p[a]) &&
                        (null == l ? void 0 : l.repo_cond) &&
                        (f =
                          (null == (d = null == (c = u.lists) ? void 0 : c[a])
                            ? void 0
                            : d[0]) || {}) &&
                        !(null == f ? void 0 : f.isRepoCond) &&
                        ((m = n(n({}, l.repo_cond), {}, { isRepoCond: !0 })),
                        (u.lists[a] = [m].concat(t(g)))),
                        (u.totalNum[a] =
                          (null == l ? void 0 : l.total_num) || "");
                    case 21:
                      +a === s.ConditionTabs.Running && y(u.lists[a]),
                        g.length < u.pageOptions[a].pageSize
                          ? (u.hasData[a] = !1)
                          : ((u.hasData[a] = !0),
                            (u.pageOptions[a].pageNum =
                              u.pageOptions[a].pageNum + 1)),
                        (u.fetching[a] = !1),
                        (e.next = 27);
                      break;
                    case 24:
                      (e.prev = 24), (e.t0 = e.catch(1)), (u.fetching[a] = !1);
                    case 27:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[1, 24]]
            );
          })
        )),
        function (e, n) {
          return v.apply(this, arguments);
        }),
      getRecordsInfo:
        ((m = r(
          e().mark(function n(t) {
            var r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        i.conditionOrderApi.orderQueryInfo(t)
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        e.abrupt(
                          "return",
                          ((d.init = !0),
                          (d.fetching = !1),
                          r && r.condinfo
                            ? ((d.data = r.condinfo), y([d.data]))
                            : (d.data = {}),
                          r)
                        )
                      );
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (d.fetching = !1),
                        a.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 7]]
            );
          })
        )),
        function (e) {
          return m.apply(this, arguments);
        }),
      orderCancel: function (e) {
        return new Promise(function (n, t) {
          i.conditionOrderApi
            .orderCancel(e)
            .then(function (e) {
              a.index.showToast({ title: "订单已终止" }), n(e);
            })
            .catch(function (e) {
              a.index.showToast({ title: e.retmsg }), t(e);
            });
        });
      },
      getOrderList:
        ((f = r(
          e().mark(function t(r) {
            var o, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (-1 !== l.value) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", Promise.resolve([]));
                    case 2:
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        i.conditionOrderApi.queryCondOrderList(
                          n({ page_size: 20, page_num: l.value }, r)
                        )
                      );
                    case 5:
                      (o = e.sent),
                        (s =
                          0 === l.value
                            ? o.order_list
                            : p.value.concat(o.order_list || [])),
                        (p.value = s),
                        o.order_list.length < 20
                          ? (l.value = -1)
                          : (l.value += 1),
                        (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t0 = e.catch(2)),
                        e.t0.retmsg &&
                          a.index.showToast({
                            title: e.t0.retmsg,
                            icon: "none",
                          });
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[2, 10]]
            );
          })
        )),
        function (e) {
          return f.apply(this, arguments);
        }),
    }
  );
};
